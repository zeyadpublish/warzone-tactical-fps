export class BotManager {
  constructor(room, io) {
    this.room = room;
    this.io = io;
    this.bots = [];
    this.waypoints = [
      { x: 15, z: 15 },
      { x: -15, z: 15 },
      { x: -15, z: -15 },
      { x: 15, z: -15 },
      { x: 0, z: 25 },
      { x: 0, z: -25 },
      { x: 25, z: 0 },
      { x: -25, z: 0 }
    ];

    this._spawnInitialBots(3);
  }

  _spawnInitialBots(count = 3) {
    const botNames = ['Delta_Echo', 'Shadow_Recon', 'Iron_Sentinel'];

    for (let i = 0; i < count; i++) {
      const wp = this.waypoints[i % this.waypoints.length];
      const bot = {
        id: `bot_srv_${i}`,
        name: botNames[i % botNames.length],
        isBot: true,
        position: { x: wp.x, y: 0, z: wp.z },
        yaw: 0,
        pitch: 0,
        health: 100,
        kills: 0,
        deaths: 0,
        animState: 'idle',
        targetWaypoint: (i + 1) % this.waypoints.length,
        shootCooldown: 1.5 + Math.random() * 2,
        speed: 3.8
      };
      this.bots.push(bot);
      this.room.players.set(bot.id, bot);
    }
  }

  update(delta) {
    const realPlayers = Array.from(this.room.players.values()).filter(p => !p.isBot && p.health > 0);

    this.bots.forEach(bot => {
      if (bot.health <= 0) return;

      // Find closest player to engage
      let closestPlayer = null;
      let closestDist = 28; // Engagement radius

      realPlayers.forEach(rp => {
        const dx = rp.position.x - bot.position.x;
        const dz = rp.position.z - bot.position.z;
        const dist = Math.hypot(dx, dz);
        if (dist < closestDist) {
          closestDist = dist;
          closestPlayer = rp;
        }
      });

      if (closestPlayer) {
        // Combat Stance: Turn towards player and shoot
        const dx = closestPlayer.position.x - bot.position.x;
        const dz = closestPlayer.position.z - bot.position.z;
        bot.yaw = Math.atan2(dx, dz);
        bot.animState = 'idle_aiming';

        // Controlled Burst Fire
        bot.shootCooldown -= delta;
        if (bot.shootCooldown <= 0) {
          bot.shootCooldown = 1.2 + Math.random() * 0.8;

          this.io.to(this.room.name).emit('remote_shoot', { id: bot.id });

          // Accuracy chance ~55%
          if (Math.random() < 0.55) {
            this.io.to(closestPlayer.id).emit('receive_damage', {
              amount: 22,
              attackerName: bot.name
            });
          }
        }
      } else {
        // Patrol Stance: Move to waypoint
        const targetWp = this.waypoints[bot.targetWaypoint];
        const dx = targetWp.x - bot.position.x;
        const dz = targetWp.z - bot.position.z;
        const dist = Math.hypot(dx, dz);

        if (dist < 1.5) {
          bot.targetWaypoint = (bot.targetWaypoint + 1) % this.waypoints.length;
        } else {
          bot.yaw = Math.atan2(dx, dz);
          bot.position.x += (dx / dist) * bot.speed * delta;
          bot.position.z += (dz / dist) * bot.speed * delta;
          bot.animState = 'run_forward';
        }
      }
    });
  }

  damageBot(botId, damage, killerSocketId, killerName) {
    const bot = this.bots.find(b => b.id === botId);
    if (!bot || bot.health <= 0) return;

    bot.health -= damage;
    if (bot.health <= 0) {
      bot.health = 0;
      bot.deaths++;

      const killer = this.room.players.get(killerSocketId);
      if (killer) killer.kills++;

      this.io.to(this.room.name).emit('player_killed', {
        victimId: bot.id,
        victimName: bot.name,
        killerId: killerSocketId,
        killerName: killerName,
        hitDirection: 'front',
        message: `${killerName} eliminated ${bot.name}`
      });

      // Respawn bot after 4 seconds
      setTimeout(() => {
        const wp = this.waypoints[Math.floor(Math.random() * this.waypoints.length)];
        bot.health = 100;
        bot.position = { x: wp.x, y: 0, z: wp.z };
        this.io.to(this.room.name).emit('player_respawn', {
          id: bot.id,
          position: bot.position
        });
      }, 4000);
    }
  }
}
