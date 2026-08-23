export class RoomManager {
  constructor() {
    this.rooms = new Map();
  }

  getOrCreateRoom(roomName = 'URBAN_WARFARE_01') {
    if (!this.rooms.has(roomName)) {
      this.rooms.set(roomName, {
        name: roomName,
        players: new Map(), // socketId -> playerData
        matchDuration: 600,
        timer: 600,
        createdAt: Date.now()
      });
    }
    return this.rooms.get(roomName);
  }

  addPlayer(roomName, socketId, playerName) {
    const room = this.getOrCreateRoom(roomName);
    const player = {
      id: socketId,
      name: playerName || 'Soldier',
      room: roomName,
      position: { x: (Math.random() - 0.5) * 30, y: 0, z: (Math.random() - 0.5) * 30 },
      yaw: 0,
      pitch: 0,
      health: 100,
      kills: 0,
      deaths: 0,
      animState: 'idle',
      isBot: false,
      ping: 20
    };
    room.players.set(socketId, player);
    return player;
  }

  removePlayer(socketId) {
    for (const [roomName, room] of this.rooms.entries()) {
      if (room.players.has(socketId)) {
        const p = room.players.get(socketId);
        room.players.delete(socketId);
        return { roomName, player: p };
      }
    }
    return null;
  }

  getPlayer(socketId) {
    for (const room of this.rooms.values()) {
      if (room.players.has(socketId)) {
        return room.players.get(socketId);
      }
    }
    return null;
  }

  getRoomPlayerList(roomName) {
    const room = this.rooms.get(roomName);
    if (!room) return [];
    return Array.from(room.players.values());
  }
}
