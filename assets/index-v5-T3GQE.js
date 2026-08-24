(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qa="174",Nd=0,Fl=1,Fd=2,_h=1,vh=2,Rn=3,qn=0,zt=1,Cn=2,Gn=0,Vi=1,Qo=2,Ol=3,Bl=4,Od=5,oi=100,Bd=101,kd=102,zd=103,Vd=104,Hd=200,Gd=201,Wd=202,Xd=203,ea=204,ta=205,qd=206,Yd=207,jd=208,$d=209,Kd=210,Zd=211,Jd=212,Qd=213,eu=214,na=0,ia=1,sa=2,qi=3,ra=4,oa=5,aa=6,la=7,$r=0,tu=1,nu=2,Wn=0,iu=1,su=2,ru=3,xh=4,ou=5,au=6,lu=7,kl="attached",cu="detached",yh=300,Yi=301,ji=302,Or=303,ca=304,Kr=306,$i=1e3,pn=1001,ha=1002,Xt=1003,hu=1004,Gs=1005,Wt=1006,ao=1007,In=1008,Dn=1009,Mh=1010,bh=1011,As=1012,el=1013,hi=1014,vn=1015,Fs=1016,tl=1017,nl=1018,Ki=1020,Sh=35902,Eh=1021,wh=1022,en=1023,Th=1024,Ah=1025,Hi=1026,Zi=1027,Rh=1028,il=1029,Ch=1030,sl=1031,rl=1033,wr=33776,Tr=33777,Ar=33778,Rr=33779,da=35840,ua=35841,fa=35842,pa=35843,ma=36196,ga=37492,_a=37496,va=37808,xa=37809,ya=37810,Ma=37811,ba=37812,Sa=37813,Ea=37814,wa=37815,Ta=37816,Aa=37817,Ra=37818,Ca=37819,Ia=37820,La=37821,Cr=36492,Pa=36494,Da=36495,Ih=36283,Ua=36284,Na=36285,Fa=36286,Zr=2200,Lh=2201,du=2202,Br=2300,Oa=2301,lo=2302,Fi=2400,Oi=2401,kr=2402,ol=2500,uu=2501,fu=3200,pu=3201,Jr=0,mu=1,Hn="",Ze="srgb",un="srgb-linear",zr="linear",nt="srgb",_i=7680,zl=519,gu=512,_u=513,vu=514,Ph=515,xu=516,yu=517,Mu=518,bu=519,Ba=35044,Vl="300 es",Ln=2e3,Vr=2001;class pi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Hl=1234567;const Es=Math.PI/180,Ji=180/Math.PI;function mn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(It[s&255]+It[s>>8&255]+It[s>>16&255]+It[s>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[t&63|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[n&255]+It[n>>8&255]+It[n>>16&255]+It[n>>24&255]).toLowerCase()}function ze(s,e,t){return Math.max(e,Math.min(t,s))}function al(s,e){return(s%e+e)%e}function Su(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Eu(s,e,t){return s!==e?(t-s)/(e-s):0}function ws(s,e,t){return(1-t)*s+t*e}function wu(s,e,t,n){return ws(s,e,1-Math.exp(-t*n))}function Tu(s,e=1){return e-Math.abs(al(s,e*2)-e)}function Au(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Ru(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Cu(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Iu(s,e){return s+Math.random()*(e-s)}function Lu(s){return s*(.5-Math.random())}function Pu(s){s!==void 0&&(Hl=s);let e=Hl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Du(s){return s*Es}function Uu(s){return s*Ji}function Nu(s){return(s&s-1)===0&&s!==0}function Fu(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Ou(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Bu(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),d=o((e+n)/2),h=r((e-n)/2),u=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*d,l*h,l*u,a*c);break;case"YZY":s.set(l*u,a*d,l*h,a*c);break;case"ZXZ":s.set(l*h,l*u,a*d,a*c);break;case"XZX":s.set(a*d,l*g,l*f,a*c);break;case"YXY":s.set(l*f,a*d,l*g,a*c);break;case"ZYZ":s.set(l*g,l*f,a*d,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function fn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function tt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Et={DEG2RAD:Es,RAD2DEG:Ji,generateUUID:mn,clamp:ze,euclideanModulo:al,mapLinear:Su,inverseLerp:Eu,lerp:ws,damp:wu,pingpong:Tu,smoothstep:Au,smootherstep:Ru,randInt:Cu,randFloat:Iu,randFloatSpread:Lu,seededRandom:Pu,degToRad:Du,radToDeg:Uu,isPowerOfTwo:Nu,ceilPowerOfTwo:Fu,floorPowerOfTwo:Ou,setQuaternionFromProperEuler:Bu,normalize:tt,denormalize:fn};class De{constructor(e=0,t=0){De.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ue{constructor(e,t,n,i,r,o,a,l,c){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=i,d[2]=a,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],d=n[4],h=n[7],u=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],w=i[1],b=i[4],x=i[7],L=i[2],A=i[5],E=i[8];return r[0]=o*_+a*w+l*L,r[3]=o*m+a*b+l*A,r[6]=o*p+a*x+l*E,r[1]=c*_+d*w+h*L,r[4]=c*m+d*b+h*A,r[7]=c*p+d*x+h*E,r[2]=u*_+f*w+g*L,r[5]=u*m+f*b+g*A,r[8]=u*p+f*x+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*a*c-n*r*d+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=d*o-a*c,u=a*l-d*r,f=c*r-o*l,g=t*h+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*c-d*n)*_,e[2]=(a*n-i*o)*_,e[3]=u*_,e[4]=(d*t-i*l)*_,e[5]=(i*r-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(co.makeScale(e,t)),this}rotate(e){return this.premultiply(co.makeRotation(-e)),this}translate(e,t){return this.premultiply(co.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const co=new Ue;function Dh(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Rs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ku(){const s=Rs("canvas");return s.style.display="block",s}const Gl={};function ii(s){s in Gl||(Gl[s]=!0,console.warn(s))}function zu(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Vu(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Hu(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Wl=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xl=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gu(){const s={enabled:!0,workingColorSpace:un,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===nt&&(i.r=Pn(i.r),i.g=Pn(i.g),i.b=Pn(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===nt&&(i.r=Gi(i.r),i.g=Gi(i.g),i.b=Gi(i.b))),i},fromWorkingColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},toWorkingColorSpace:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Hn?zr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[un]:{primaries:e,whitePoint:n,transfer:zr,toXYZ:Wl,fromXYZ:Xl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ze},outputColorSpaceConfig:{drawingBufferColorSpace:Ze}},[Ze]:{primaries:e,whitePoint:n,transfer:nt,toXYZ:Wl,fromXYZ:Xl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ze}}}),s}const Be=Gu();function Pn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Gi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let vi;class Wu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{vi===void 0&&(vi=Rs("canvas")),vi.width=e.width,vi.height=e.height;const n=vi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=vi}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Rs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Pn(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Pn(t[n]/255)*255):t[n]=Pn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Xu=0;class ll{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=mn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(ho(i[o].image)):r.push(ho(i[o]))}else r=ho(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function ho(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Wu.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qu=0;class wt extends pi{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,n=pn,i=pn,r=Wt,o=In,a=en,l=Dn,c=wt.DEFAULT_ANISOTROPY,d=Hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=mn(),this.name="",this.source=new ll(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $i:e.x=e.x-Math.floor(e.x);break;case pn:e.x=e.x<0?0:1;break;case ha:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $i:e.y=e.y-Math.floor(e.y);break;case pn:e.y=e.y<0?0:1;break;case ha:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=yh;wt.DEFAULT_ANISOTROPY=1;class He{constructor(e=0,t=0,n=0,i=1){He.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],d=l[4],h=l[8],u=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,x=(f+1)/2,L=(p+1)/2,A=(d+u)/4,E=(h+_)/4,C=(g+m)/4;return b>x&&b>L?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=A/n,r=E/n):x>L?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=A/i,r=C/i):L<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(L),n=E/r,i=C/r),this.set(n,i,r,t),this}let w=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(u-d)*(u-d));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(h-_)/w,this.z=(u-d)/w,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this.z=ze(this.z,e.z,t.z),this.w=ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this.z=ze(this.z,e,t),this.w=ze(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yu extends pi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new He(0,0,e,t),this.scissorTest=!1,this.viewport=new He(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new wt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new ll(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class di extends Yu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Uh extends wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ju extends wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],d=n[i+2],h=n[i+3];const u=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h;return}if(a===1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==u||c!==f||d!==g){let m=1-a;const p=l*u+c*f+d*g+h*_,w=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const L=Math.sqrt(b),A=Math.atan2(L,p*w);m=Math.sin(m*A)/L,a=Math.sin(a*A)/L}const x=a*w;if(l=l*m+u*x,c=c*m+f*x,d=d*m+g*x,h=h*m+_*x,m===1-a){const L=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=L,c*=L,d*=L,h*=L}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],d=n[i+3],h=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+d*h+l*f-c*u,e[t+1]=l*g+d*u+c*h-a*f,e[t+2]=c*g+d*f+a*u-l*h,e[t+3]=d*g-a*h-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),d=a(i/2),h=a(r/2),u=l(n/2),f=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=u*d*h+c*f*g,this._y=c*f*h-u*d*g,this._z=c*d*g+u*f*h,this._w=c*d*h-u*f*g;break;case"YXZ":this._x=u*d*h+c*f*g,this._y=c*f*h-u*d*g,this._z=c*d*g-u*f*h,this._w=c*d*h+u*f*g;break;case"ZXY":this._x=u*d*h-c*f*g,this._y=c*f*h+u*d*g,this._z=c*d*g+u*f*h,this._w=c*d*h-u*f*g;break;case"ZYX":this._x=u*d*h-c*f*g,this._y=c*f*h+u*d*g,this._z=c*d*g-u*f*h,this._w=c*d*h+u*f*g;break;case"YZX":this._x=u*d*h+c*f*g,this._y=c*f*h+u*d*g,this._z=c*d*g-u*f*h,this._w=c*d*h-u*f*g;break;case"XZY":this._x=u*d*h-c*f*g,this._y=c*f*h-u*d*g,this._z=c*d*g+u*f*h,this._w=c*d*h+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],d=t[6],h=t[10],u=n+a+h;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(d-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(d-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+d)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ze(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+o*a+i*c-r*l,this._y=i*d+o*l+r*a-n*c,this._z=r*d+o*c+n*l-i*a,this._w=o*d-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),h=Math.sin((1-t)*d)/c,u=Math.sin(t*d)/c;return this._w=o*h+this._w*u,this._x=n*h+this._x*u,this._y=i*h+this._y*u,this._z=r*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ql.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ql.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),d=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*d,this.y=n+l*d+a*c-r*h,this.z=i+l*h+r*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this.z=ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this.z=ze(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return uo.copy(this).projectOnVector(e),this.sub(uo)}reflect(e){return this.sub(uo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const uo=new I,ql=new Rt;class kt{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(on.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(on.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=on.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,on):on.fromBufferAttribute(r,o),on.applyMatrix4(e.matrixWorld),this.expandByPoint(on);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ws.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ws.copy(n.boundingBox)),Ws.applyMatrix4(e.matrixWorld),this.union(Ws)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,on),on.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cs),Xs.subVectors(this.max,cs),xi.subVectors(e.a,cs),yi.subVectors(e.b,cs),Mi.subVectors(e.c,cs),Nn.subVectors(yi,xi),Fn.subVectors(Mi,yi),Zn.subVectors(xi,Mi);let t=[0,-Nn.z,Nn.y,0,-Fn.z,Fn.y,0,-Zn.z,Zn.y,Nn.z,0,-Nn.x,Fn.z,0,-Fn.x,Zn.z,0,-Zn.x,-Nn.y,Nn.x,0,-Fn.y,Fn.x,0,-Zn.y,Zn.x,0];return!fo(t,xi,yi,Mi,Xs)||(t=[1,0,0,0,1,0,0,0,1],!fo(t,xi,yi,Mi,Xs))?!1:(qs.crossVectors(Nn,Fn),t=[qs.x,qs.y,qs.z],fo(t,xi,yi,Mi,Xs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,on).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(on).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const bn=[new I,new I,new I,new I,new I,new I,new I,new I],on=new I,Ws=new kt,xi=new I,yi=new I,Mi=new I,Nn=new I,Fn=new I,Zn=new I,cs=new I,Xs=new I,qs=new I,Jn=new I;function fo(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Jn.fromArray(s,r);const a=i.x*Math.abs(Jn.x)+i.y*Math.abs(Jn.y)+i.z*Math.abs(Jn.z),l=e.dot(Jn),c=t.dot(Jn),d=n.dot(Jn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const $u=new kt,hs=new I,po=new I;class mi{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):$u.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hs.subVectors(e,this.center);const t=hs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(hs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(po.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hs.copy(e.center).add(po)),this.expandByPoint(hs.copy(e.center).sub(po))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Sn=new I,mo=new I,Ys=new I,On=new I,go=new I,js=new I,_o=new I;class Os{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Sn.copy(this.origin).addScaledVector(this.direction,t),Sn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){mo.copy(e).add(t).multiplyScalar(.5),Ys.copy(t).sub(e).normalize(),On.copy(this.origin).sub(mo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Ys),a=On.dot(this.direction),l=-On.dot(Ys),c=On.lengthSq(),d=Math.abs(1-o*o);let h,u,f,g;if(d>0)if(h=o*l-a,u=o*a-l,g=r*d,h>=0)if(u>=-g)if(u<=g){const _=1/d;h*=_,u*=_,f=h*(h+o*u+2*a)+u*(o*h+u+2*l)+c}else u=r,h=Math.max(0,-(o*u+a)),f=-h*h+u*(u+2*l)+c;else u=-r,h=Math.max(0,-(o*u+a)),f=-h*h+u*(u+2*l)+c;else u<=-g?(h=Math.max(0,-(-o*r+a)),u=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+u*(u+2*l)+c):u<=g?(h=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(h=Math.max(0,-(o*r+a)),u=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+u*(u+2*l)+c);else u=o>0?-r:r,h=Math.max(0,-(o*u+a)),f=-h*h+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(mo).addScaledVector(Ys,u),f}intersectSphere(e,t){Sn.subVectors(e.center,this.origin);const n=Sn.dot(this.direction),i=Sn.dot(Sn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),d>=0?(r=(e.min.y-u.y)*d,o=(e.max.y-u.y)*d):(r=(e.max.y-u.y)*d,o=(e.min.y-u.y)*d),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(a=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Sn)!==null}intersectTriangle(e,t,n,i,r){go.subVectors(t,e),js.subVectors(n,e),_o.crossVectors(go,js);let o=this.direction.dot(_o),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;On.subVectors(this.origin,e);const l=a*this.direction.dot(js.crossVectors(On,js));if(l<0)return null;const c=a*this.direction.dot(go.cross(On));if(c<0||l+c>o)return null;const d=-a*On.dot(_o);return d<0?null:this.at(d/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Me{constructor(e,t,n,i,r,o,a,l,c,d,h,u,f,g,_,m){Me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,d,h,u,f,g,_,m)}set(e,t,n,i,r,o,a,l,c,d,h,u,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=d,p[10]=h,p[14]=u,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Me().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/bi.setFromMatrixColumn(e,0).length(),r=1/bi.setFromMatrixColumn(e,1).length(),o=1/bi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),d=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const u=o*d,f=o*h,g=a*d,_=a*h;t[0]=l*d,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=u-_*c,t[9]=-a*l,t[2]=_-u*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const u=l*d,f=l*h,g=c*d,_=c*h;t[0]=u+_*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*d,t[9]=-a,t[2]=f*a-g,t[6]=_+u*a,t[10]=o*l}else if(e.order==="ZXY"){const u=l*d,f=l*h,g=c*d,_=c*h;t[0]=u-_*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*d,t[9]=_-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const u=o*d,f=o*h,g=a*d,_=a*h;t[0]=l*d,t[4]=g*c-f,t[8]=u*c+_,t[1]=l*h,t[5]=_*c+u,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const u=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*d,t[4]=_-u*h,t[8]=g*h+f,t[1]=h,t[5]=o*d,t[9]=-a*d,t[2]=-c*d,t[6]=f*h+g,t[10]=u-_*h}else if(e.order==="XZY"){const u=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*d,t[4]=-h,t[8]=c*d,t[1]=u*h+_,t[5]=o*d,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*d,t[10]=_*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ku,e,Zu)}lookAt(e,t,n){const i=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),Bn.crossVectors(n,Ht),Bn.lengthSq()===0&&(Math.abs(n.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),Bn.crossVectors(n,Ht)),Bn.normalize(),$s.crossVectors(Ht,Bn),i[0]=Bn.x,i[4]=$s.x,i[8]=Ht.x,i[1]=Bn.y,i[5]=$s.y,i[9]=Ht.y,i[2]=Bn.z,i[6]=$s.z,i[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],d=n[1],h=n[5],u=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],w=n[3],b=n[7],x=n[11],L=n[15],A=i[0],E=i[4],C=i[8],M=i[12],v=i[1],R=i[5],k=i[9],N=i[13],W=i[2],Y=i[6],D=i[10],X=i[14],z=i[3],J=i[7],ie=i[11],re=i[15];return r[0]=o*A+a*v+l*W+c*z,r[4]=o*E+a*R+l*Y+c*J,r[8]=o*C+a*k+l*D+c*ie,r[12]=o*M+a*N+l*X+c*re,r[1]=d*A+h*v+u*W+f*z,r[5]=d*E+h*R+u*Y+f*J,r[9]=d*C+h*k+u*D+f*ie,r[13]=d*M+h*N+u*X+f*re,r[2]=g*A+_*v+m*W+p*z,r[6]=g*E+_*R+m*Y+p*J,r[10]=g*C+_*k+m*D+p*ie,r[14]=g*M+_*N+m*X+p*re,r[3]=w*A+b*v+x*W+L*z,r[7]=w*E+b*R+x*Y+L*J,r[11]=w*C+b*k+x*D+L*ie,r[15]=w*M+b*N+x*X+L*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],h=e[6],u=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*h-i*c*h-r*a*u+n*c*u+i*a*f-n*l*f)+_*(+t*l*f-t*c*u+r*o*u-i*o*f+i*c*d-r*l*d)+m*(+t*c*h-t*a*f-r*o*h+n*o*f+r*a*d-n*c*d)+p*(-i*a*d-t*l*h+t*a*u+i*o*h-n*o*u+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=e[9],u=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],w=h*m*c-_*u*c+_*l*f-a*m*f-h*l*p+a*u*p,b=g*u*c-d*m*c-g*l*f+o*m*f+d*l*p-o*u*p,x=d*_*c-g*h*c+g*a*f-o*_*f-d*a*p+o*h*p,L=g*h*l-d*_*l-g*a*u+o*_*u+d*a*m-o*h*m,A=t*w+n*b+i*x+r*L;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/A;return e[0]=w*E,e[1]=(_*u*r-h*m*r-_*i*f+n*m*f+h*i*p-n*u*p)*E,e[2]=(a*m*r-_*l*r+_*i*c-n*m*c-a*i*p+n*l*p)*E,e[3]=(h*l*r-a*u*r-h*i*c+n*u*c+a*i*f-n*l*f)*E,e[4]=b*E,e[5]=(d*m*r-g*u*r+g*i*f-t*m*f-d*i*p+t*u*p)*E,e[6]=(g*l*r-o*m*r-g*i*c+t*m*c+o*i*p-t*l*p)*E,e[7]=(o*u*r-d*l*r+d*i*c-t*u*c-o*i*f+t*l*f)*E,e[8]=x*E,e[9]=(g*h*r-d*_*r-g*n*f+t*_*f+d*n*p-t*h*p)*E,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*p+t*a*p)*E,e[11]=(d*a*r-o*h*r-d*n*c+t*h*c+o*n*f-t*a*f)*E,e[12]=L*E,e[13]=(d*_*i-g*h*i+g*n*u-t*_*u-d*n*m+t*h*m)*E,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*m-t*a*m)*E,e[15]=(o*h*i-d*a*i+d*n*l-t*h*l-o*n*u+t*a*u)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,d=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,d*a+n,d*l-i*o,0,c*l-i*a,d*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,d=o+o,h=a+a,u=r*c,f=r*d,g=r*h,_=o*d,m=o*h,p=a*h,w=l*c,b=l*d,x=l*h,L=n.x,A=n.y,E=n.z;return i[0]=(1-(_+p))*L,i[1]=(f+x)*L,i[2]=(g-b)*L,i[3]=0,i[4]=(f-x)*A,i[5]=(1-(u+p))*A,i[6]=(m+w)*A,i[7]=0,i[8]=(g+b)*E,i[9]=(m-w)*E,i[10]=(1-(u+_))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=bi.set(i[0],i[1],i[2]).length();const o=bi.set(i[4],i[5],i[6]).length(),a=bi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],an.copy(this);const c=1/r,d=1/o,h=1/a;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=d,an.elements[5]*=d,an.elements[6]*=d,an.elements[8]*=h,an.elements[9]*=h,an.elements[10]*=h,t.setFromRotationMatrix(an),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Ln){const l=this.elements,c=2*r/(t-e),d=2*r/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i);let f,g;if(a===Ln)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Vr)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Ln){const l=this.elements,c=1/(t-e),d=1/(n-i),h=1/(o-r),u=(t+e)*c,f=(n+i)*d;let g,_;if(a===Ln)g=(o+r)*h,_=-2*h;else if(a===Vr)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const bi=new I,an=new Me,Ku=new I(0,0,0),Zu=new I(1,1,1),Bn=new I,$s=new I,Ht=new I,Yl=new Me,jl=new Rt;class yt{constructor(e=0,t=0,n=0,i=yt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],d=i[9],h=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ze(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Yl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jl.setFromEuler(this),this.setFromQuaternion(jl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yt.DEFAULT_ORDER="XYZ";class cl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ju=0;const $l=new I,Si=new Rt,En=new Me,Ks=new I,ds=new I,Qu=new I,ef=new Rt,Kl=new I(1,0,0),Zl=new I(0,1,0),Jl=new I(0,0,1),Ql={type:"added"},tf={type:"removed"},Ei={type:"childadded",child:null},vo={type:"childremoved",child:null};class st extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ju++}),this.uuid=mn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=st.DEFAULT_UP.clone();const e=new I,t=new yt,n=new Rt,i=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Me},normalMatrix:{value:new Ue}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=st.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=st.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Si.setFromAxisAngle(e,t),this.quaternion.multiply(Si),this}rotateOnWorldAxis(e,t){return Si.setFromAxisAngle(e,t),this.quaternion.premultiply(Si),this}rotateX(e){return this.rotateOnAxis(Kl,e)}rotateY(e){return this.rotateOnAxis(Zl,e)}rotateZ(e){return this.rotateOnAxis(Jl,e)}translateOnAxis(e,t){return $l.copy(e).applyQuaternion(this.quaternion),this.position.add($l.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kl,e)}translateY(e){return this.translateOnAxis(Zl,e)}translateZ(e){return this.translateOnAxis(Jl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ks.copy(e):Ks.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(ds,Ks,this.up):En.lookAt(Ks,ds,this.up),this.quaternion.setFromRotationMatrix(En),i&&(En.extractRotation(i.matrixWorld),Si.setFromRotationMatrix(En),this.quaternion.premultiply(Si.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ql),Ei.child=e,this.dispatchEvent(Ei),Ei.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(tf),vo.child=e,this.dispatchEvent(vo),vo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),En.multiply(e.parent.matrixWorld)),e.applyMatrix4(En),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ql),Ei.child=e,this.dispatchEvent(Ei),Ei.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,e,Qu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,ef,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),h=o(e.shapes),u=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}st.DEFAULT_UP=new I(0,1,0);st.DEFAULT_MATRIX_AUTO_UPDATE=!0;st.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ln=new I,wn=new I,xo=new I,Tn=new I,wi=new I,Ti=new I,ec=new I,yo=new I,Mo=new I,bo=new I,So=new He,Eo=new He,wo=new He;class Jt{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ln.subVectors(e,t),i.cross(ln);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){ln.subVectors(i,t),wn.subVectors(n,t),xo.subVectors(e,t);const o=ln.dot(ln),a=ln.dot(wn),l=ln.dot(xo),c=wn.dot(wn),d=wn.dot(xo),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const u=1/h,f=(c*l-a*d)*u,g=(o*d-a*l)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Tn)===null?!1:Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Tn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Tn.x),l.addScaledVector(o,Tn.y),l.addScaledVector(a,Tn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return So.setScalar(0),Eo.setScalar(0),wo.setScalar(0),So.fromBufferAttribute(e,t),Eo.fromBufferAttribute(e,n),wo.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(So,r.x),o.addScaledVector(Eo,r.y),o.addScaledVector(wo,r.z),o}static isFrontFacing(e,t,n,i){return ln.subVectors(n,t),wn.subVectors(e,t),ln.cross(wn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ln.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),ln.cross(wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Jt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Jt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;wi.subVectors(i,n),Ti.subVectors(r,n),yo.subVectors(e,n);const l=wi.dot(yo),c=Ti.dot(yo);if(l<=0&&c<=0)return t.copy(n);Mo.subVectors(e,i);const d=wi.dot(Mo),h=Ti.dot(Mo);if(d>=0&&h<=d)return t.copy(i);const u=l*h-d*c;if(u<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(n).addScaledVector(wi,o);bo.subVectors(e,r);const f=wi.dot(bo),g=Ti.dot(bo);if(g>=0&&f<=g)return t.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Ti,a);const m=d*g-f*h;if(m<=0&&h-d>=0&&f-g>=0)return ec.subVectors(r,i),a=(h-d)/(h-d+(f-g)),t.copy(i).addScaledVector(ec,a);const p=1/(m+_+u);return o=_*p,a=u*p,t.copy(n).addScaledVector(wi,o).addScaledVector(Ti,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Nh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kn={h:0,s:0,l:0},Zs={h:0,s:0,l:0};function To(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class ye{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ze){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Be.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Be.workingColorSpace){return this.r=e,this.g=t,this.b=n,Be.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Be.workingColorSpace){if(e=al(e,1),t=ze(t,0,1),n=ze(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=To(o,r,e+1/3),this.g=To(o,r,e),this.b=To(o,r,e-1/3)}return Be.toWorkingColorSpace(this,i),this}setStyle(e,t=Ze){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ze){const n=Nh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pn(e.r),this.g=Pn(e.g),this.b=Pn(e.b),this}copyLinearToSRGB(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ze){return Be.fromWorkingColorSpace(Lt.copy(this),e),Math.round(ze(Lt.r*255,0,255))*65536+Math.round(ze(Lt.g*255,0,255))*256+Math.round(ze(Lt.b*255,0,255))}getHexString(e=Ze){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Be.workingColorSpace){Be.fromWorkingColorSpace(Lt.copy(this),t);const n=Lt.r,i=Lt.g,r=Lt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=d<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Be.workingColorSpace){return Be.fromWorkingColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=Ze){Be.fromWorkingColorSpace(Lt.copy(this),e);const t=Lt.r,n=Lt.g,i=Lt.b;return e!==Ze?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(kn),this.setHSL(kn.h+e,kn.s+t,kn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(kn),e.getHSL(Zs);const n=ws(kn.h,Zs.h,t),i=ws(kn.s,Zs.s,t),r=ws(kn.l,Zs.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new ye;ye.NAMES=Nh;let nf=0;class tn extends pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=mn(),this.name="",this.type="Material",this.blending=Vi,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ea,this.blendDst=ta,this.blendEquation=oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_i,this.stencilZFail=_i,this.stencilZPass=_i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Vi&&(n.blending=this.blending),this.side!==qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ea&&(n.blendSrc=this.blendSrc),this.blendDst!==ta&&(n.blendDst=this.blendDst),this.blendEquation!==oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==qi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_i&&(n.stencilFail=this.stencilFail),this.stencilZFail!==_i&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==_i&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Cs extends tn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yt,this.combine=$r,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new I,Js=new De;let sf=0;class gn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ba,this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Js.fromBufferAttribute(this,t),Js.applyMatrix3(e),this.setXY(t,Js.x,Js.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fn(t,this.array)),t}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fn(t,this.array)),t}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fn(t,this.array)),t}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array),r=tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ba&&(e.usage=this.usage),e}}class hl extends gn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Fh extends gn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class it extends gn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let rf=0;const $t=new Me,Ao=new st,Ai=new I,Gt=new kt,us=new kt,St=new I;class Tt extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=mn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Dh(e)?Fh:hl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ue().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $t.makeRotationFromQuaternion(e),this.applyMatrix4($t),this}rotateX(e){return $t.makeRotationX(e),this.applyMatrix4($t),this}rotateY(e){return $t.makeRotationY(e),this.applyMatrix4($t),this}rotateZ(e){return $t.makeRotationZ(e),this.applyMatrix4($t),this}translate(e,t,n){return $t.makeTranslation(e,t,n),this.applyMatrix4($t),this}scale(e,t,n){return $t.makeScale(e,t,n),this.applyMatrix4($t),this}lookAt(e){return Ao.lookAt(e),Ao.updateMatrix(),this.applyMatrix4(Ao.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ai).negate(),this.translate(Ai.x,Ai.y,Ai.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new it(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Gt.setFromBufferAttribute(r),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];us.setFromBufferAttribute(a),this.morphTargetsRelative?(St.addVectors(Gt.min,us.min),Gt.expandByPoint(St),St.addVectors(Gt.max,us.max),Gt.expandByPoint(St)):(Gt.expandByPoint(us.min),Gt.expandByPoint(us.max))}Gt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)St.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(St));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)St.fromBufferAttribute(a,c),l&&(Ai.fromBufferAttribute(e,c),St.add(Ai)),i=Math.max(i,n.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new I,l[C]=new I;const c=new I,d=new I,h=new I,u=new De,f=new De,g=new De,_=new I,m=new I;function p(C,M,v){c.fromBufferAttribute(n,C),d.fromBufferAttribute(n,M),h.fromBufferAttribute(n,v),u.fromBufferAttribute(r,C),f.fromBufferAttribute(r,M),g.fromBufferAttribute(r,v),d.sub(c),h.sub(c),f.sub(u),g.sub(u);const R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(_.copy(d).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(R),m.copy(h).multiplyScalar(f.x).addScaledVector(d,-g.x).multiplyScalar(R),a[C].add(_),a[M].add(_),a[v].add(_),l[C].add(m),l[M].add(m),l[v].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let C=0,M=w.length;C<M;++C){const v=w[C],R=v.start,k=v.count;for(let N=R,W=R+k;N<W;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const b=new I,x=new I,L=new I,A=new I;function E(C){L.fromBufferAttribute(i,C),A.copy(L);const M=a[C];b.copy(M),b.sub(L.multiplyScalar(L.dot(M))).normalize(),x.crossVectors(A,M);const R=x.dot(l[C])<0?-1:1;o.setXYZW(C,b.x,b.y,b.z,R)}for(let C=0,M=w.length;C<M;++C){const v=w[C],R=v.start,k=v.count;for(let N=R,W=R+k;N<W;N+=3)E(e.getX(N+0)),E(e.getX(N+1)),E(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new gn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new I,r=new I,o=new I,a=new I,l=new I,c=new I,d=new I,h=new I;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),d.subVectors(o,r),h.subVectors(i,r),d.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(d),l.add(d),c.add(d),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),d.subVectors(o,r),h.subVectors(i,r),d.cross(h),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,h=a.normalized,u=new c.constructor(l.length*d);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*d;for(let p=0;p<d;p++)u[g++]=c[f++]}return new gn(u,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Tt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let d=0,h=c.length;d<h;d++){const u=c[d],f=e(u,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,u=c.length;h<u;h++){const f=c[h];d.push(f.toJSON(e.data))}d.length>0&&(i[l]=d,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const d=i[c];this.setAttribute(c,d.clone(t))}const r=e.morphAttributes;for(const c in r){const d=[],h=r[c];for(let u=0,f=h.length;u<f;u++)d.push(h[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const tc=new Me,Qn=new Os,Qs=new mi,nc=new I,er=new I,tr=new I,nr=new I,Ro=new I,ir=new I,ic=new I,sr=new I;class at extends st{constructor(e=new Tt,t=new Cs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){ir.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=a[l],h=r[l];d!==0&&(Ro.fromBufferAttribute(h,e),o?ir.addScaledVector(Ro,d):ir.addScaledVector(Ro.sub(t),d))}t.add(ir)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qs.copy(n.boundingSphere),Qs.applyMatrix4(r),Qn.copy(e.ray).recast(e.near),!(Qs.containsPoint(Qn.origin)===!1&&(Qn.intersectSphere(Qs,nc)===null||Qn.origin.distanceToSquared(nc)>(e.far-e.near)**2))&&(tc.copy(r).invert(),Qn.copy(e.ray).applyMatrix4(tc),!(n.boundingBox!==null&&Qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Qn)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=o[m.materialIndex],w=Math.max(m.start,f.start),b=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=w,L=b;x<L;x+=3){const A=a.getX(x),E=a.getX(x+1),C=a.getX(x+2);i=rr(this,p,e,n,c,d,h,A,E,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const w=a.getX(m),b=a.getX(m+1),x=a.getX(m+2);i=rr(this,o,e,n,c,d,h,w,b,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=o[m.materialIndex],w=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=w,L=b;x<L;x+=3){const A=x,E=x+1,C=x+2;i=rr(this,p,e,n,c,d,h,A,E,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const w=m,b=m+1,x=m+2;i=rr(this,o,e,n,c,d,h,w,b,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function of(s,e,t,n,i,r,o,a){let l;if(e.side===zt?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===qn,a),l===null)return null;sr.copy(a),sr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(sr);return c<t.near||c>t.far?null:{distance:c,point:sr.clone(),object:s}}function rr(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,er),s.getVertexPosition(l,tr),s.getVertexPosition(c,nr);const d=of(s,e,t,n,er,tr,nr,ic);if(d){const h=new I;Jt.getBarycoord(ic,er,tr,nr,h),i&&(d.uv=Jt.getInterpolatedAttribute(i,a,l,c,h,new De)),r&&(d.uv1=Jt.getInterpolatedAttribute(r,a,l,c,h,new De)),o&&(d.normal=Jt.getInterpolatedAttribute(o,a,l,c,h,new I),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new I,materialIndex:0};Jt.getNormal(er,tr,nr,u.normal),d.face=u,d.barycoord=h}return d}class nn extends Tt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],d=[],h=[];let u=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new it(c,3)),this.setAttribute("normal",new it(d,3)),this.setAttribute("uv",new it(h,2));function g(_,m,p,w,b,x,L,A,E,C,M){const v=x/E,R=L/C,k=x/2,N=L/2,W=A/2,Y=E+1,D=C+1;let X=0,z=0;const J=new I;for(let ie=0;ie<D;ie++){const re=ie*R-N;for(let pe=0;pe<Y;pe++){const le=pe*v-k;J[_]=le*w,J[m]=re*b,J[p]=W,c.push(J.x,J.y,J.z),J[_]=0,J[m]=0,J[p]=A>0?1:-1,d.push(J.x,J.y,J.z),h.push(pe/E),h.push(1-ie/C),X+=1}}for(let ie=0;ie<C;ie++)for(let re=0;re<E;re++){const pe=u+re+Y*ie,le=u+re+Y*(ie+1),B=u+(re+1)+Y*(ie+1),q=u+(re+1)+Y*ie;l.push(pe,le,q),l.push(le,B,q),z+=6}a.addGroup(f,z,M),f+=z,u+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qi(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Nt(s){const e={};for(let t=0;t<s.length;t++){const n=Qi(s[t]);for(const i in n)e[i]=n[i]}return e}function af(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Oh(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Be.workingColorSpace}const lf={clone:Qi,merge:Nt};var cf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yn extends tn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cf,this.fragmentShader=hf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qi(e.uniforms),this.uniformsGroups=af(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Bh extends st{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me,this.coordinateSystem=Ln}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zn=new I,sc=new De,rc=new De;class Ot extends Bh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ji*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Es*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ji*2*Math.atan(Math.tan(Es*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zn.x,zn.y).multiplyScalar(-e/zn.z),zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zn.x,zn.y).multiplyScalar(-e/zn.z)}getViewSize(e,t){return this.getViewBounds(e,sc,rc),t.subVectors(rc,sc)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Es*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ri=-90,Ci=1;class df extends st{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ot(Ri,Ci,e,t);i.layers=this.layers,this.add(i);const r=new Ot(Ri,Ci,e,t);r.layers=this.layers,this.add(r);const o=new Ot(Ri,Ci,e,t);o.layers=this.layers,this.add(o);const a=new Ot(Ri,Ci,e,t);a.layers=this.layers,this.add(a);const l=new Ot(Ri,Ci,e,t);l.layers=this.layers,this.add(l);const c=new Ot(Ri,Ci,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Ln)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Vr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,d]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,d),e.setRenderTarget(h,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class kh extends wt{constructor(e,t,n,i,r,o,a,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:Yi,super(e,t,n,i,r,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class uf extends di{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new kh(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Wt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new nn(5,5,5),r=new Yn({name:"CubemapFromEquirect",uniforms:Qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zt,blending:Gn});r.uniforms.tEquirect.value=t;const o=new at(i,r),a=t.minFilter;return t.minFilter===In&&(t.minFilter=Wt),new df(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}class Pt extends st{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ff={type:"move"};class Co{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=d.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ff)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Pt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Qr{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ye(e),this.density=t}clone(){return new Qr(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class li{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ye(e),this.near=t,this.far=n}clone(){return new li(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class pf extends st{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yt,this.environmentIntensity=1,this.environmentRotation=new yt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class mf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ba,this.updateRanges=[],this.version=0,this.uuid=mn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ut=new I;class Hr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=fn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=fn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=fn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=fn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array),r=tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new gn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Hr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ui extends tn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ii;const fs=new I,Li=new I,Pi=new I,Di=new De,ps=new De,zh=new Me,or=new I,ms=new I,ar=new I,oc=new De,Io=new De,ac=new De;class es extends st{constructor(e=new ui){if(super(),this.isSprite=!0,this.type="Sprite",Ii===void 0){Ii=new Tt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new mf(t,5);Ii.setIndex([0,1,2,0,2,3]),Ii.setAttribute("position",new Hr(n,3,0,!1)),Ii.setAttribute("uv",new Hr(n,2,3,!1))}this.geometry=Ii,this.material=e,this.center=new De(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Li.setFromMatrixScale(this.matrixWorld),zh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Pi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Li.multiplyScalar(-Pi.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;lr(or.set(-.5,-.5,0),Pi,o,Li,i,r),lr(ms.set(.5,-.5,0),Pi,o,Li,i,r),lr(ar.set(.5,.5,0),Pi,o,Li,i,r),oc.set(0,0),Io.set(1,0),ac.set(1,1);let a=e.ray.intersectTriangle(or,ms,ar,!1,fs);if(a===null&&(lr(ms.set(-.5,.5,0),Pi,o,Li,i,r),Io.set(0,1),a=e.ray.intersectTriangle(or,ar,ms,!1,fs),a===null))return;const l=e.ray.origin.distanceTo(fs);l<e.near||l>e.far||t.push({distance:l,point:fs.clone(),uv:Jt.getInterpolation(fs,or,ms,ar,oc,Io,ac,new De),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function lr(s,e,t,n,i,r){Di.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(ps.x=r*Di.x-i*Di.y,ps.y=i*Di.x+r*Di.y):ps.copy(Di),s.copy(e),s.x+=ps.x,s.y+=ps.y,s.applyMatrix4(zh)}const lc=new I,cc=new He,hc=new He,gf=new I,dc=new Me,cr=new I,Lo=new mi,uc=new Me,Po=new Os;class _f extends at{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=kl,this.bindMatrix=new Me,this.bindMatrixInverse=new Me,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new kt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,cr),this.boundingBox.expandByPoint(cr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new mi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,cr),this.boundingSphere.expandByPoint(cr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Lo.copy(this.boundingSphere),Lo.applyMatrix4(i),e.ray.intersectsSphere(Lo)!==!1&&(uc.copy(i).invert(),Po.copy(e.ray).applyMatrix4(uc),!(this.boundingBox!==null&&Po.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Po)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new He,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===kl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===cu?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;cc.fromBufferAttribute(i.attributes.skinIndex,e),hc.fromBufferAttribute(i.attributes.skinWeight,e),lc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=hc.getComponent(r);if(o!==0){const a=cc.getComponent(r);dc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(gf.copy(lc).applyMatrix4(dc),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class ka extends st{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Vh extends wt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=Xt,d=Xt,h,u){super(null,o,a,l,c,d,i,r,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const fc=new Me,vf=new Me;class dl{constructor(e=[],t=[]){this.uuid=mn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Me)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Me;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:vf;fc.multiplyMatrices(a,t[r]),fc.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new dl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Vh(t,e,e,en,vn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new ka),this.bones.push(o),this.boneInverses.push(new Me().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}const Do=new I,xf=new I,yf=new Ue;class si{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Do.subVectors(n,t).cross(xf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Do),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||yf.getNormalMatrix(e),i=this.coplanarPoint(Do).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ei=new mi,hr=new I;class ul{constructor(e=new si,t=new si,n=new si,i=new si,r=new si,o=new si){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ln){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],d=i[5],h=i[6],u=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],w=i[13],b=i[14],x=i[15];if(n[0].setComponents(l-r,u-c,m-f,x-p).normalize(),n[1].setComponents(l+r,u+c,m+f,x+p).normalize(),n[2].setComponents(l+o,u+d,m+g,x+w).normalize(),n[3].setComponents(l-o,u-d,m-g,x-w).normalize(),n[4].setComponents(l-a,u-h,m-_,x-b).normalize(),t===Ln)n[5].setComponents(l+a,u+h,m+_,x+b).normalize();else if(t===Vr)n[5].setComponents(a,h,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ei)}intersectsSprite(e){return ei.center.set(0,0,0),ei.radius=.7071067811865476,ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(ei)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(hr.x=i.normal.x>0?e.max.x:e.min.x,hr.y=i.normal.y>0?e.max.y:e.min.y,hr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(hr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Wi extends tn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Gr=new I,Wr=new I,pc=new Me,gs=new Os,dr=new mi,Uo=new I,mc=new I;class fl extends st{constructor(e=new Tt,t=new Wi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Gr.fromBufferAttribute(t,i-1),Wr.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Gr.distanceTo(Wr);e.setAttribute("lineDistance",new it(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),dr.copy(n.boundingSphere),dr.applyMatrix4(i),dr.radius+=r,e.ray.intersectsSphere(dr)===!1)return;pc.copy(i).invert(),gs.copy(e.ray).applyMatrix4(pc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=n.index,u=n.attributes.position;if(d!==null){const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=d.getX(_),w=d.getX(_+1),b=ur(this,e,gs,l,p,w,_);b&&t.push(b)}if(this.isLineLoop){const _=d.getX(g-1),m=d.getX(f),p=ur(this,e,gs,l,_,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=ur(this,e,gs,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=ur(this,e,gs,l,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ur(s,e,t,n,i,r,o){const a=s.geometry.attributes.position;if(Gr.fromBufferAttribute(a,i),Wr.fromBufferAttribute(a,r),t.distanceSqToSegment(Gr,Wr,Uo,mc)>n)return;Uo.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Uo);if(!(c<e.near||c>e.far))return{distance:c,point:mc.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const gc=new I,_c=new I;class vc extends fl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)gc.fromBufferAttribute(t,i),_c.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+gc.distanceTo(_c);e.setAttribute("lineDistance",new it(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class xs extends tn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const xc=new Me,za=new Os,fr=new mi,pr=new I;class No extends st{constructor(e=new Tt,t=new xs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fr.copy(n.boundingSphere),fr.applyMatrix4(i),fr.radius+=r,e.ray.intersectsSphere(fr)===!1)return;xc.copy(i).invert(),za.copy(e.ray).applyMatrix4(xc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=u,_=f;g<_;g++){const m=c.getX(g);pr.fromBufferAttribute(h,m),yc(pr,m,l,i,e,t,this)}}else{const u=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=u,_=f;g<_;g++)pr.fromBufferAttribute(h,g),yc(pr,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function yc(s,e,t,n,i,r,o){const a=za.distanceSqToPoint(s);if(a<t){const l=new I;za.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class ts extends wt{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Hh extends wt{constructor(e,t,n,i,r,o,a,l,c,d=Hi){if(d!==Hi&&d!==Zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Hi&&(n=hi),n===void 0&&d===Zi&&(n=Ki),super(null,i,r,o,a,l,d,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Xt,this.minFilter=l!==void 0?l:Xt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ll(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Mf{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const d=n[i],u=n[i+1]-d,f=(o-d)/u;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new De:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new I,i=[],r=[],o=[],a=new I,l=new Me;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE;const d=Math.abs(i[0].x),h=Math.abs(i[0].y),u=Math.abs(i[0].z);d<=c&&(c=d,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(ze(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(ze(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class pl extends Tt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const d=[],h=[],u=[],f=[];let g=0;const _=[],m=n/2;let p=0;w(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(d),this.setAttribute("position",new it(h,3)),this.setAttribute("normal",new it(u,3)),this.setAttribute("uv",new it(f,2));function w(){const x=new I,L=new I;let A=0;const E=(t-e)/n;for(let C=0;C<=r;C++){const M=[],v=C/r,R=v*(t-e)+e;for(let k=0;k<=i;k++){const N=k/i,W=N*l+a,Y=Math.sin(W),D=Math.cos(W);L.x=R*Y,L.y=-v*n+m,L.z=R*D,h.push(L.x,L.y,L.z),x.set(Y,E,D).normalize(),u.push(x.x,x.y,x.z),f.push(N,1-v),M.push(g++)}_.push(M)}for(let C=0;C<i;C++)for(let M=0;M<r;M++){const v=_[M][C],R=_[M+1][C],k=_[M+1][C+1],N=_[M][C+1];(e>0||M!==0)&&(d.push(v,R,N),A+=3),(t>0||M!==r-1)&&(d.push(R,k,N),A+=3)}c.addGroup(p,A,0),p+=A}function b(x){const L=g,A=new De,E=new I;let C=0;const M=x===!0?e:t,v=x===!0?1:-1;for(let k=1;k<=i;k++)h.push(0,m*v,0),u.push(0,v,0),f.push(.5,.5),g++;const R=g;for(let k=0;k<=i;k++){const W=k/i*l+a,Y=Math.cos(W),D=Math.sin(W);E.x=M*D,E.y=m*v,E.z=M*Y,h.push(E.x,E.y,E.z),u.push(0,v,0),A.x=Y*.5+.5,A.y=D*.5*v+.5,f.push(A.x,A.y),g++}for(let k=0;k<i;k++){const N=L+k,W=R+k;x===!0?d.push(W,W+1,N):d.push(W+1,W,N),C+=3}c.addGroup(p,C,x===!0?1:2),p+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class bf{static triangulate(e,t,n=2){const i=t&&t.length,r=i?t[0]*n:e.length;let o=Gh(e,0,r,n,!0);const a=[];if(!o||o.next===o.prev)return a;let l,c,d,h,u,f,g;if(i&&(o=Af(e,t,o,n)),e.length>80*n){l=d=e[0],c=h=e[1];for(let _=n;_<r;_+=n)u=e[_],f=e[_+1],u<l&&(l=u),f<c&&(c=f),u>d&&(d=u),f>h&&(h=f);g=Math.max(d-l,h-c),g=g!==0?32767/g:0}return Is(o,a,n,l,c,g,0),a}}function Gh(s,e,t,n,i){let r,o;if(i===Bf(s,e,t,n)>0)for(r=e;r<t;r+=n)o=Mc(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=Mc(r,s[r],s[r+1],o);return o&&eo(o,o.next)&&(Ps(o),o=o.next),o}function fi(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(eo(t,t.next)||ut(t.prev,t,t.next)===0)){if(Ps(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Is(s,e,t,n,i,r,o){if(!s)return;!o&&r&&Pf(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?Ef(s,n,i,r):Sf(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),Ps(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=wf(fi(s),e,t),Is(s,e,t,n,i,r,2)):o===2&&Tf(s,e,t,n,i,r):Is(fi(s),e,t,n,i,r,1);break}}}function Sf(s){const e=s.prev,t=s,n=s.next;if(ut(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,d=i<r?i<o?i:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,u=i>r?i>o?i:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==e;){if(g.x>=d&&g.x<=u&&g.y>=h&&g.y<=f&&Bi(i,a,r,l,o,c,g.x,g.y)&&ut(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Ef(s,e,t,n){const i=s.prev,r=s,o=s.next;if(ut(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,d=i.y,h=r.y,u=o.y,f=a<l?a<c?a:c:l<c?l:c,g=d<h?d<u?d:u:h<u?h:u,_=a>l?a>c?a:c:l>c?l:c,m=d>h?d>u?d:u:h>u?h:u,p=Va(f,g,e,t,n),w=Va(_,m,e,t,n);let b=s.prevZ,x=s.nextZ;for(;b&&b.z>=p&&x&&x.z<=w;){if(b.x>=f&&b.x<=_&&b.y>=g&&b.y<=m&&b!==i&&b!==o&&Bi(a,d,l,h,c,u,b.x,b.y)&&ut(b.prev,b,b.next)>=0||(b=b.prevZ,x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&Bi(a,d,l,h,c,u,x.x,x.y)&&ut(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;b&&b.z>=p;){if(b.x>=f&&b.x<=_&&b.y>=g&&b.y<=m&&b!==i&&b!==o&&Bi(a,d,l,h,c,u,b.x,b.y)&&ut(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;x&&x.z<=w;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&Bi(a,d,l,h,c,u,x.x,x.y)&&ut(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function wf(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!eo(i,r)&&Wh(i,n,n.next,r)&&Ls(i,r)&&Ls(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Ps(n),Ps(n.next),n=s=r),n=n.next}while(n!==s);return fi(n)}function Tf(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Nf(o,a)){let l=Xh(o,a);o=fi(o,o.next),l=fi(l,l.next),Is(o,e,t,n,i,r,0),Is(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Af(s,e,t,n){const i=[];let r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=Gh(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Uf(c));for(i.sort(Rf),r=0;r<i.length;r++)t=Cf(i[r],t);return t}function Rf(s,e){return s.x-e.x}function Cf(s,e){const t=If(s,e);if(!t)return e;const n=Xh(t,s);return fi(n,n.next),fi(t,t.next)}function If(s,e){let t=e,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const u=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=r&&u>n&&(n=u,i=t.x<t.next.x?t:t.next,u===r))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,l=i.x,c=i.y;let d=1/0,h;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&Bi(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),Ls(t,s)&&(h<d||h===d&&(t.x>i.x||t.x===i.x&&Lf(i,t)))&&(i=t,d=h)),t=t.next;while(t!==a);return i}function Lf(s,e){return ut(s.prev,s,e.prev)<0&&ut(e.next,s,s.next)<0}function Pf(s,e,t,n){let i=s;do i.z===0&&(i.z=Va(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Df(i)}function Df(s){let e,t,n,i,r,o,a,l,c=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(o>1);return s}function Va(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Uf(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Bi(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function Nf(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Ff(s,e)&&(Ls(s,e)&&Ls(e,s)&&Of(s,e)&&(ut(s.prev,s,e.prev)||ut(s,e.prev,e))||eo(s,e)&&ut(s.prev,s,s.next)>0&&ut(e.prev,e,e.next)>0)}function ut(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function eo(s,e){return s.x===e.x&&s.y===e.y}function Wh(s,e,t,n){const i=gr(ut(s,e,t)),r=gr(ut(s,e,n)),o=gr(ut(t,n,s)),a=gr(ut(t,n,e));return!!(i!==r&&o!==a||i===0&&mr(s,t,e)||r===0&&mr(s,n,e)||o===0&&mr(t,s,n)||a===0&&mr(t,e,n))}function mr(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function gr(s){return s>0?1:s<0?-1:0}function Ff(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Wh(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Ls(s,e){return ut(s.prev,s,s.next)<0?ut(s,e,s.next)>=0&&ut(s,s.prev,e)>=0:ut(s,e,s.prev)<0||ut(s,s.next,e)<0}function Of(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Xh(s,e){const t=new Ha(s.i,s.x,s.y),n=new Ha(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Mc(s,e,t,n){const i=new Ha(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ps(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Ha(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Bf(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class ml{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return ml.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];bc(e),Sc(n,e);let o=e.length;t.forEach(bc);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Sc(n,t[l]);const a=bf.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function bc(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Sc(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class is extends Tt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,d=l+1,h=e/a,u=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<d;p++){const w=p*u-o;for(let b=0;b<c;b++){const x=b*h-r;g.push(x,-w,0),_.push(0,0,1),m.push(b/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<a;w++){const b=w+c*p,x=w+c*(p+1),L=w+1+c*(p+1),A=w+1+c*p;f.push(b,x,A),f.push(x,L,A)}this.setIndex(f),this.setAttribute("position",new it(g,3)),this.setAttribute("normal",new it(_,3)),this.setAttribute("uv",new it(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new is(e.width,e.height,e.widthSegments,e.heightSegments)}}class Bs extends Tt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const d=[],h=new I,u=new I,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const w=[],b=p/n;let x=0;p===0&&o===0?x=.5/t:p===n&&l===Math.PI&&(x=-.5/t);for(let L=0;L<=t;L++){const A=L/t;h.x=-e*Math.cos(i+A*r)*Math.sin(o+b*a),h.y=e*Math.cos(o+b*a),h.z=e*Math.sin(i+A*r)*Math.sin(o+b*a),g.push(h.x,h.y,h.z),u.copy(h).normalize(),_.push(u.x,u.y,u.z),m.push(A+x,1-b),w.push(c++)}d.push(w)}for(let p=0;p<n;p++)for(let w=0;w<t;w++){const b=d[p][w+1],x=d[p][w],L=d[p+1][w],A=d[p+1][w+1];(p!==0||o>0)&&f.push(b,x,A),(p!==n-1||l<Math.PI)&&f.push(x,L,A)}this.setIndex(f),this.setAttribute("position",new it(g,3)),this.setAttribute("normal",new it(_,3)),this.setAttribute("uv",new it(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class mt extends tn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jr,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ys extends tn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ye(16777215),this.specular=new ye(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jr,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yt,this.combine=$r,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class kf extends tn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jr,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yt,this.combine=$r,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zf extends tn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Vf extends tn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function _r(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Hf(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Gf(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Ec(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function qh(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class to{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Wf extends to{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fi,endingEnd:Fi}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Oi:r=e,a=2*t-n;break;case kr:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Oi:o=e,l=2*n-t;break;case kr:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,d=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*d,this._offsetNext=o*d}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-u*m+2*u*_-u*g,w=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*g+1,b=(-1-f)*m+(1.5+f)*_+.5*g,x=f*m-f*_;for(let L=0;L!==a;++L)r[L]=p*o[d+L]+w*o[c+L]+b*o[l+L]+x*o[h+L];return r}}class Yh extends to{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=(n-t)/(i-t),h=1-d;for(let u=0;u!==a;++u)r[u]=o[c+u]*h+o[l+u]*d;return r}}class Xf extends to{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class yn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_r(t,this.TimeBufferType),this.values=_r(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:_r(e.times,Array),values:_r(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Xf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Yh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Wf(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Br:t=this.InterpolantFactoryMethodDiscrete;break;case Oa:t=this.InterpolantFactoryMethodLinear;break;case lo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Br;case this.InterpolantFactoryMethodLinear:return Oa;case this.InterpolantFactoryMethodSmooth:return lo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Hf(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===lo,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],d=e[a+1];if(c!==d&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,u=h-n,f=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[u+g]||_!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,u=o*n;for(let f=0;f!==n;++f)t[u+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=Oa;class ss extends yn{constructor(e,t,n){super(e,t,n)}}ss.prototype.ValueTypeName="bool";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=Br;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;class jh extends yn{}jh.prototype.ValueTypeName="color";class Ds extends yn{}Ds.prototype.ValueTypeName="number";class qf extends to{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let d=c+a;c!==d;c+=4)Rt.slerpFlat(r,0,o,c-a,o,c,l);return r}}class ns extends yn{InterpolantFactoryMethodLinear(e){return new qf(this.times,this.values,this.getValueSize(),e)}}ns.prototype.ValueTypeName="quaternion";ns.prototype.InterpolantFactoryMethodSmooth=void 0;class rs extends yn{constructor(e,t,n){super(e,t,n)}}rs.prototype.ValueTypeName="string";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=Br;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;class Us extends yn{}Us.prototype.ValueTypeName="vector";class Ga{constructor(e="",t=-1,n=[],i=ol){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=mn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(jf(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(yn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const d=Gf(l);l=Ec(l,1,d),c=Ec(c,1,d),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Ds(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],d=c.name.match(r);if(d&&d.length>1){const h=d[1];let u=i[h];u||(i[h]=u=[]),u.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,u,f,g,_){if(f.length!==0){const m=[],p=[];qh(f,m,p,g),m.length!==0&&_.push(new h(u,m,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const u=c[h].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const f={};let g;for(g=0;g<u.length;g++)if(u[g].morphTargets)for(let _=0;_<u[g].morphTargets.length;_++)f[u[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let w=0;w!==u[g].morphTargets.length;++w){const b=u[g];m.push(b.time),p.push(b.morphTarget===_?1:0)}i.push(new Ds(".morphTargetInfluence["+_+"]",m,p))}l=f.length*o}else{const f=".bones["+t[h].name+"]";n(Us,f+".position",u,"pos",i),n(ns,f+".quaternion",u,"rot",i),n(Us,f+".scale",u,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Yf(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ds;case"vector":case"vector2":case"vector3":case"vector4":return Us;case"color":return jh;case"quaternion":return ns;case"bool":case"boolean":return ss;case"string":return rs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function jf(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Yf(s.type);if(s.times===void 0){const t=[],n=[];qh(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Xr={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class $f{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){a++,r===!1&&i.onStart!==void 0&&i.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,i.onProgress!==void 0&&i.onProgress(d,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(d){i.onError!==void 0&&i.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,h){return c.push(d,h),this},this.removeHandler=function(d){const h=c.indexOf(d);return h!==-1&&c.splice(h,2),this},this.getHandler=function(d){for(let h=0,u=c.length;h<u;h+=2){const f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(d))return g}return null}}}const Kf=new $f;class Un{constructor(e){this.manager=e!==void 0?e:Kf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Un.DEFAULT_MATERIAL_NAME="__DEFAULT";const An={};class Zf extends Error{constructor(e,t){super(e),this.response=t}}class gl extends Un{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Xr.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(An[e]!==void 0){An[e].push({onLoad:t,onProgress:n,onError:i});return}An[e]=[],An[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const d=An[e],h=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=u?parseInt(u):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){w();function w(){h.read().then(({done:b,value:x})=>{if(b)p.close();else{_+=x.byteLength;const L=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let A=0,E=d.length;A<E;A++){const C=d[A];C.onProgress&&C.onProgress(L)}p.enqueue(x),w()}},b=>{p.error(b)})}}});return new Response(m)}else throw new Zf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(d=>new DOMParser().parseFromString(d,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),u=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Xr.add(e,c);const d=An[e];delete An[e];for(let h=0,u=d.length;h<u;h++){const f=d[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const d=An[e];if(d===void 0)throw this.manager.itemError(e),c;delete An[e];for(let h=0,u=d.length;h<u;h++){const f=d[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Jf extends Un{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Xr.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Rs("img");function l(){d(),Xr.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){d(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function d(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Qf extends Un{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new Vh,a=new gl(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let c;try{c=r.parse(l)}catch(d){if(i!==void 0)i(d);else{console.error(d);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:pn,o.wrapT=c.wrapT!==void 0?c.wrapT:pn,o.magFilter=c.magFilter!==void 0?c.magFilter:Wt,o.minFilter=c.minFilter!==void 0?c.minFilter:Wt,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=In),c.mipmapCount===1&&(o.minFilter=Wt),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,i),o}}class $h extends Un{constructor(e){super(e)}load(e,t,n,i){const r=new wt,o=new Jf(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class ks extends st{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class ep extends ks{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(st.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Fo=new Me,wc=new I,Tc=new I;class _l{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.map=null,this.mapPass=null,this.matrix=new Me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ul,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new He(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;wc.setFromMatrixPosition(e.matrixWorld),t.position.copy(wc),Tc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Tc),t.updateMatrixWorld(),Fo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Fo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class tp extends _l{constructor(){super(new Ot(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ji*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class np extends ks{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(st.DEFAULT_UP),this.updateMatrix(),this.target=new st,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new tp}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Ac=new Me,_s=new I,Oo=new I;class ip extends _l{constructor(){super(new Ot(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new De(4,2),this._viewportCount=6,this._viewports=[new He(2,1,1,1),new He(0,1,1,1),new He(3,1,1,1),new He(1,1,1,1),new He(3,0,1,1),new He(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),_s.setFromMatrixPosition(e.matrixWorld),n.position.copy(_s),Oo.copy(n.position),Oo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Oo),n.updateMatrixWorld(),i.makeTranslation(-_s.x,-_s.y,-_s.z),Ac.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ac)}}class qr extends ks{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ip}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Kh extends Bh{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class sp extends _l{constructor(){super(new Kh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ir extends ks{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(st.DEFAULT_UP),this.updateMatrix(),this.target=new st,this.shadow=new sp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Zh extends ks{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class rp{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class op extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class ap{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Rc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Rc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Rc(){return performance.now()}class lp{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){Rt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const o=this._workIndex*r;Rt.multiplyQuaternionsFlat(e,o,e,t,e,n),Rt.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const vl="\\[\\]\\.:\\/",cp=new RegExp("["+vl+"]","g"),xl="[^"+vl+"]",hp="[^"+vl.replace("\\.","")+"]",dp=/((?:WC+[\/:])*)/.source.replace("WC",xl),up=/(WCOD+)?/.source.replace("WCOD",hp),fp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xl),pp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xl),mp=new RegExp("^"+dp+up+fp+pp+"$"),gp=["material","materials","bones","map"];class _p{constructor(e,t,n){const i=n||$e.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class $e{constructor(e,t,n){this.path=t,this.parsedPath=n||$e.parseTrackName(t),this.node=$e.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new $e.Composite(e,t,n):new $e(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(cp,"")}static parseTrackName(e){const t=mp.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);gp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=$e.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}$e.Composite=_p;$e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};$e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};$e.prototype.GetterByBindingType=[$e.prototype._getValue_direct,$e.prototype._getValue_array,$e.prototype._getValue_arrayElement,$e.prototype._getValue_toArray];$e.prototype.SetterByBindingTypeAndVersioning=[[$e.prototype._setValue_direct,$e.prototype._setValue_direct_setNeedsUpdate,$e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_array,$e.prototype._setValue_array_setNeedsUpdate,$e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_arrayElement,$e.prototype._setValue_arrayElement_setNeedsUpdate,$e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_fromArray,$e.prototype._setValue_fromArray_setNeedsUpdate,$e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class vp{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,o=r.length,a=new Array(o),l={endingStart:Fi,endingEnd:Fi};for(let c=0;c!==o;++c){const d=r[c].createInterpolant(null);a[c]=d,d.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Lh,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case uu:for(let d=0,h=l.length;d!==h;++d)l[d].evaluate(o),c[d].accumulateAdditive(a);break;case ol:default:for(let d=0,h=l.length;d!==h;++d)l[d].evaluate(o),c[d].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const o=n===du;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===Zr){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Oi,i.endingEnd=Oi):(e?i.endingStart=this.zeroSlopeAtStart?Oi:Fi:i.endingStart=kr,t?i.endingEnd=this.zeroSlopeAtEnd?Oi:Fi:i.endingEnd=kr)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}}const xp=new Float32Array(1);class yl extends pi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let d=c[l];d===void 0&&(d={},c[l]=d);for(let h=0;h!==r;++h){const u=i[h],f=u.name;let g=d[f];if(g!==void 0)++g.referenceCount,o[h]=g;else{if(g=o[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}const _=t&&t._propertyBindings[h].binding.parsedPath;g=new lp($e.create(n,f,_),u.ValueTypeName,u.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),o[h]=g}a[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],d=e._byClipCacheIndex;c._byClipCacheIndex=d,l[d]=c,l.pop(),e._byClipCacheIndex=null;const h=a.actionByRoot,u=(e._localRoot||this._root).uuid;delete h[u],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Yh(new Float32Array(2),new Float32Array(2),1,xp),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let o=typeof e=="string"?Ga.findByName(i,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=ol),l!==void 0){const h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const d=new vp(this,o,t,n);return this._bindAction(d,c),this._addInactiveAction(d,a,r),d}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?Ga.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const d=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=d,t[d]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const Cc=new Me;class Yr{constructor(e,t,n=0,i=1/0){this.ray=new Os(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new cl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Cc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Cc),this}intersectObject(e,t=!0,n=[]){return Wa(e,this,n,t),n.sort(Ic),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Wa(e[i],this,n,t);return n.sort(Ic),n}}function Ic(s,e){return s.distance-e.distance}function Wa(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)Wa(r[o],e,t,!0)}}function Lc(s,e,t,n){const i=yp(n);switch(t){case Eh:return s*e;case Th:return s*e;case Ah:return s*e*2;case Rh:return s*e/i.components*i.byteLength;case il:return s*e/i.components*i.byteLength;case Ch:return s*e*2/i.components*i.byteLength;case sl:return s*e*2/i.components*i.byteLength;case wh:return s*e*3/i.components*i.byteLength;case en:return s*e*4/i.components*i.byteLength;case rl:return s*e*4/i.components*i.byteLength;case wr:case Tr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ar:case Rr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ua:case pa:return Math.max(s,16)*Math.max(e,8)/4;case da:case fa:return Math.max(s,8)*Math.max(e,8)/2;case ma:case ga:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case _a:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case va:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case xa:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case ya:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ma:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case ba:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Sa:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Ea:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case wa:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Ta:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Aa:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ra:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Ca:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Ia:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case La:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Cr:case Pa:case Da:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Ih:case Ua:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Na:case Fa:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function yp(s){switch(s){case Dn:case Mh:return{byteLength:1,components:1};case As:case bh:case Fs:return{byteLength:2,components:1};case tl:case nl:return{byteLength:2,components:4};case hi:case el:case vn:return{byteLength:4,components:1};case Sh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qa);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Jh(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Mp(s){const e=new WeakMap;function t(a,l){const c=a.array,d=a.usage,h=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,d),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const d=l.array,h=l.updateRanges;if(s.bindBuffer(c,a),h.length===0)s.bufferSubData(c,0,d);else{h.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<h.length;f++){const g=h[u],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,h[u]=_)}h.length=u+1;for(let f=0,g=h.length;f<g;f++){const _=h[f];s.bufferSubData(c,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var bp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ep=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ap=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Cp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ip=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Lp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Pp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Up=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Np=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Fp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Wp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Xp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Yp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$p=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,em=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,tm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,im=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,rm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,om=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,am=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,hm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,um=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,pm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,mm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_m=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ym=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Mm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Sm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Em=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Am=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Im=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Lm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Um=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Om=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Bm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,km=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Xm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ym=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$m=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Km=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Zm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ng=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ig=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,sg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,og=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ag=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,dg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ug=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,yg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Mg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Eg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ag=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Rg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Cg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ig=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ug=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ng=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Fg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Og=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Hg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Gg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$g=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Kg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,e0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:bp,alphahash_pars_fragment:Sp,alphamap_fragment:Ep,alphamap_pars_fragment:wp,alphatest_fragment:Tp,alphatest_pars_fragment:Ap,aomap_fragment:Rp,aomap_pars_fragment:Cp,batching_pars_vertex:Ip,batching_vertex:Lp,begin_vertex:Pp,beginnormal_vertex:Dp,bsdfs:Up,iridescence_fragment:Np,bumpmap_pars_fragment:Fp,clipping_planes_fragment:Op,clipping_planes_pars_fragment:Bp,clipping_planes_pars_vertex:kp,clipping_planes_vertex:zp,color_fragment:Vp,color_pars_fragment:Hp,color_pars_vertex:Gp,color_vertex:Wp,common:Xp,cube_uv_reflection_fragment:qp,defaultnormal_vertex:Yp,displacementmap_pars_vertex:jp,displacementmap_vertex:$p,emissivemap_fragment:Kp,emissivemap_pars_fragment:Zp,colorspace_fragment:Jp,colorspace_pars_fragment:Qp,envmap_fragment:em,envmap_common_pars_fragment:tm,envmap_pars_fragment:nm,envmap_pars_vertex:im,envmap_physical_pars_fragment:pm,envmap_vertex:sm,fog_vertex:rm,fog_pars_vertex:om,fog_fragment:am,fog_pars_fragment:lm,gradientmap_pars_fragment:cm,lightmap_pars_fragment:hm,lights_lambert_fragment:dm,lights_lambert_pars_fragment:um,lights_pars_begin:fm,lights_toon_fragment:mm,lights_toon_pars_fragment:gm,lights_phong_fragment:_m,lights_phong_pars_fragment:vm,lights_physical_fragment:xm,lights_physical_pars_fragment:ym,lights_fragment_begin:Mm,lights_fragment_maps:bm,lights_fragment_end:Sm,logdepthbuf_fragment:Em,logdepthbuf_pars_fragment:wm,logdepthbuf_pars_vertex:Tm,logdepthbuf_vertex:Am,map_fragment:Rm,map_pars_fragment:Cm,map_particle_fragment:Im,map_particle_pars_fragment:Lm,metalnessmap_fragment:Pm,metalnessmap_pars_fragment:Dm,morphinstance_vertex:Um,morphcolor_vertex:Nm,morphnormal_vertex:Fm,morphtarget_pars_vertex:Om,morphtarget_vertex:Bm,normal_fragment_begin:km,normal_fragment_maps:zm,normal_pars_fragment:Vm,normal_pars_vertex:Hm,normal_vertex:Gm,normalmap_pars_fragment:Wm,clearcoat_normal_fragment_begin:Xm,clearcoat_normal_fragment_maps:qm,clearcoat_pars_fragment:Ym,iridescence_pars_fragment:jm,opaque_fragment:$m,packing:Km,premultiplied_alpha_fragment:Zm,project_vertex:Jm,dithering_fragment:Qm,dithering_pars_fragment:eg,roughnessmap_fragment:tg,roughnessmap_pars_fragment:ng,shadowmap_pars_fragment:ig,shadowmap_pars_vertex:sg,shadowmap_vertex:rg,shadowmask_pars_fragment:og,skinbase_vertex:ag,skinning_pars_vertex:lg,skinning_vertex:cg,skinnormal_vertex:hg,specularmap_fragment:dg,specularmap_pars_fragment:ug,tonemapping_fragment:fg,tonemapping_pars_fragment:pg,transmission_fragment:mg,transmission_pars_fragment:gg,uv_pars_fragment:_g,uv_pars_vertex:vg,uv_vertex:xg,worldpos_vertex:yg,background_vert:Mg,background_frag:bg,backgroundCube_vert:Sg,backgroundCube_frag:Eg,cube_vert:wg,cube_frag:Tg,depth_vert:Ag,depth_frag:Rg,distanceRGBA_vert:Cg,distanceRGBA_frag:Ig,equirect_vert:Lg,equirect_frag:Pg,linedashed_vert:Dg,linedashed_frag:Ug,meshbasic_vert:Ng,meshbasic_frag:Fg,meshlambert_vert:Og,meshlambert_frag:Bg,meshmatcap_vert:kg,meshmatcap_frag:zg,meshnormal_vert:Vg,meshnormal_frag:Hg,meshphong_vert:Gg,meshphong_frag:Wg,meshphysical_vert:Xg,meshphysical_frag:qg,meshtoon_vert:Yg,meshtoon_frag:jg,points_vert:$g,points_frag:Kg,shadow_vert:Zg,shadow_frag:Jg,sprite_vert:Qg,sprite_frag:e0},ae={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},_n={basic:{uniforms:Nt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Nt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new ye(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Nt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Nt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Nt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new ye(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Nt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Nt([ae.points,ae.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Nt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Nt([ae.common,ae.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Nt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Nt([ae.sprite,ae.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Nt([ae.common,ae.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Nt([ae.lights,ae.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};_n.physical={uniforms:Nt([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const vr={r:0,b:0,g:0},ti=new yt,t0=new Me;function n0(s,e,t,n,i,r,o){const a=new ye(0);let l=r===!0?0:1,c,d,h=null,u=0,f=null;function g(b){let x=b.isScene===!0?b.background:null;return x&&x.isTexture&&(x=(b.backgroundBlurriness>0?t:e).get(x)),x}function _(b){let x=!1;const L=g(b);L===null?p(a,l):L&&L.isColor&&(p(L,1),x=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(b,x){const L=g(x);L&&(L.isCubeTexture||L.mapping===Kr)?(d===void 0&&(d=new at(new nn(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:Qi(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(A,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),ti.copy(x.backgroundRotation),ti.x*=-1,ti.y*=-1,ti.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(ti.y*=-1,ti.z*=-1),d.material.uniforms.envMap.value=L,d.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(t0.makeRotationFromEuler(ti)),d.material.toneMapped=Be.getTransfer(L.colorSpace)!==nt,(h!==L||u!==L.version||f!==s.toneMapping)&&(d.material.needsUpdate=!0,h=L,u=L.version,f=s.toneMapping),d.layers.enableAll(),b.unshift(d,d.geometry,d.material,0,0,null)):L&&L.isTexture&&(c===void 0&&(c=new at(new is(2,2),new Yn({name:"BackgroundMaterial",uniforms:Qi(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=L,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Be.getTransfer(L.colorSpace)!==nt,L.matrixAutoUpdate===!0&&L.updateMatrix(),c.material.uniforms.uvTransform.value.copy(L.matrix),(h!==L||u!==L.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=L,u=L.version,f=s.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,x){b.getRGB(vr,Oh(s)),n.buffers.color.setClear(vr.r,vr.g,vr.b,x,o)}function w(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,x=1){a.set(b),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:_,addToRenderList:m,dispose:w}}function i0(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,o=!1;function a(v,R,k,N,W){let Y=!1;const D=h(N,k,R);r!==D&&(r=D,c(r.object)),Y=f(v,N,k,W),Y&&g(v,N,k,W),W!==null&&e.update(W,s.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,x(v,R,k,N),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return s.createVertexArray()}function c(v){return s.bindVertexArray(v)}function d(v){return s.deleteVertexArray(v)}function h(v,R,k){const N=k.wireframe===!0;let W=n[v.id];W===void 0&&(W={},n[v.id]=W);let Y=W[R.id];Y===void 0&&(Y={},W[R.id]=Y);let D=Y[N];return D===void 0&&(D=u(l()),Y[N]=D),D}function u(v){const R=[],k=[],N=[];for(let W=0;W<t;W++)R[W]=0,k[W]=0,N[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:k,attributeDivisors:N,object:v,attributes:{},index:null}}function f(v,R,k,N){const W=r.attributes,Y=R.attributes;let D=0;const X=k.getAttributes();for(const z in X)if(X[z].location>=0){const ie=W[z];let re=Y[z];if(re===void 0&&(z==="instanceMatrix"&&v.instanceMatrix&&(re=v.instanceMatrix),z==="instanceColor"&&v.instanceColor&&(re=v.instanceColor)),ie===void 0||ie.attribute!==re||re&&ie.data!==re.data)return!0;D++}return r.attributesNum!==D||r.index!==N}function g(v,R,k,N){const W={},Y=R.attributes;let D=0;const X=k.getAttributes();for(const z in X)if(X[z].location>=0){let ie=Y[z];ie===void 0&&(z==="instanceMatrix"&&v.instanceMatrix&&(ie=v.instanceMatrix),z==="instanceColor"&&v.instanceColor&&(ie=v.instanceColor));const re={};re.attribute=ie,ie&&ie.data&&(re.data=ie.data),W[z]=re,D++}r.attributes=W,r.attributesNum=D,r.index=N}function _(){const v=r.newAttributes;for(let R=0,k=v.length;R<k;R++)v[R]=0}function m(v){p(v,0)}function p(v,R){const k=r.newAttributes,N=r.enabledAttributes,W=r.attributeDivisors;k[v]=1,N[v]===0&&(s.enableVertexAttribArray(v),N[v]=1),W[v]!==R&&(s.vertexAttribDivisor(v,R),W[v]=R)}function w(){const v=r.newAttributes,R=r.enabledAttributes;for(let k=0,N=R.length;k<N;k++)R[k]!==v[k]&&(s.disableVertexAttribArray(k),R[k]=0)}function b(v,R,k,N,W,Y,D){D===!0?s.vertexAttribIPointer(v,R,k,W,Y):s.vertexAttribPointer(v,R,k,N,W,Y)}function x(v,R,k,N){_();const W=N.attributes,Y=k.getAttributes(),D=R.defaultAttributeValues;for(const X in Y){const z=Y[X];if(z.location>=0){let J=W[X];if(J===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(J=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(J=v.instanceColor)),J!==void 0){const ie=J.normalized,re=J.itemSize,pe=e.get(J);if(pe===void 0)continue;const le=pe.buffer,B=pe.type,q=pe.bytesPerElement,j=B===s.INT||B===s.UNSIGNED_INT||J.gpuType===el;if(J.isInterleavedBufferAttribute){const K=J.data,oe=K.stride,Ce=J.offset;if(K.isInstancedInterleavedBuffer){for(let Ee=0;Ee<z.locationSize;Ee++)p(z.location+Ee,K.meshPerAttribute);v.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Ee=0;Ee<z.locationSize;Ee++)m(z.location+Ee);s.bindBuffer(s.ARRAY_BUFFER,le);for(let Ee=0;Ee<z.locationSize;Ee++)b(z.location+Ee,re/z.locationSize,B,ie,oe*q,(Ce+re/z.locationSize*Ee)*q,j)}else{if(J.isInstancedBufferAttribute){for(let K=0;K<z.locationSize;K++)p(z.location+K,J.meshPerAttribute);v.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let K=0;K<z.locationSize;K++)m(z.location+K);s.bindBuffer(s.ARRAY_BUFFER,le);for(let K=0;K<z.locationSize;K++)b(z.location+K,re/z.locationSize,B,ie,re*q,re/z.locationSize*K*q,j)}}else if(D!==void 0){const ie=D[X];if(ie!==void 0)switch(ie.length){case 2:s.vertexAttrib2fv(z.location,ie);break;case 3:s.vertexAttrib3fv(z.location,ie);break;case 4:s.vertexAttrib4fv(z.location,ie);break;default:s.vertexAttrib1fv(z.location,ie)}}}}w()}function L(){C();for(const v in n){const R=n[v];for(const k in R){const N=R[k];for(const W in N)d(N[W].object),delete N[W];delete R[k]}delete n[v]}}function A(v){if(n[v.id]===void 0)return;const R=n[v.id];for(const k in R){const N=R[k];for(const W in N)d(N[W].object),delete N[W];delete R[k]}delete n[v.id]}function E(v){for(const R in n){const k=n[R];if(k[v.id]===void 0)continue;const N=k[v.id];for(const W in N)d(N[W].object),delete N[W];delete k[v.id]}}function C(){M(),o=!0,r!==i&&(r=i,c(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:M,dispose:L,releaseStatesOfGeometry:A,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:w}}function s0(s,e,t){let n;function i(c){n=c}function r(c,d){s.drawArrays(n,c,d),t.update(d,n,1)}function o(c,d,h){h!==0&&(s.drawArraysInstanced(n,c,d,h),t.update(d,n,h))}function a(c,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,h);let f=0;for(let g=0;g<h;g++)f+=d[g];t.update(f,n,1)}function l(c,d,h,u){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],d[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,d,0,u,0,h);let g=0;for(let _=0;_<h;_++)g+=d[_]*u[_];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function r0(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==en&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const C=E===Fs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Dn&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==vn&&!C)}function l(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),w=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:b,maxFragmentUniforms:x,vertexTextures:L,maxSamples:A}}function o0(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new si,a=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const f=h.length!==0||u||n!==0||i;return i=u,n=h.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){t=d(h,u,0)},this.setState=function(h,u,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=s.get(h);if(!i||g===null||g.length===0||r&&!m)r?d(null):c();else{const w=r?0:n,b=w*4;let x=p.clippingState||null;l.value=x,x=d(g,u,b,f);for(let L=0;L!==b;++L)x[L]=t[L];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(h,u,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,w=u.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,x=f;b!==_;++b,x+=4)o.copy(h[b]).applyMatrix4(w,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function a0(s){let e=new WeakMap;function t(o,a){return a===Or?o.mapping=Yi:a===ca&&(o.mapping=ji),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Or||a===ca)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new uf(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const ki=4,Pc=[.125,.215,.35,.446,.526,.582],ai=20,Bo=new Kh,Dc=new ye;let ko=null,zo=0,Vo=0,Ho=!1;const ri=(1+Math.sqrt(5))/2,Ui=1/ri,Uc=[new I(-ri,Ui,0),new I(ri,Ui,0),new I(-Ui,0,ri),new I(Ui,0,ri),new I(0,ri,-Ui),new I(0,ri,Ui),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],l0=new I;class Nc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){const{size:o=256,position:a=l0}=r;ko=this._renderer.getRenderTarget(),zo=this._renderer.getActiveCubeFace(),Vo=this._renderer.getActiveMipmapLevel(),Ho=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Oc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ko,zo,Vo),this._renderer.xr.enabled=Ho,e.scissorTest=!1,xr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Yi||e.mapping===ji?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ko=this._renderer.getRenderTarget(),zo=this._renderer.getActiveCubeFace(),Vo=this._renderer.getActiveMipmapLevel(),Ho=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:Fs,format:en,colorSpace:un,depthBuffer:!1},i=Fc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=c0(r)),this._blurMaterial=h0(r,e,t)}return i}_compileMaterial(e){const t=new at(this._lodPlanes[0],e);this._renderer.compile(t,Bo)}_sceneToCubeUV(e,t,n,i,r){const l=new Ot(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Dc),h.toneMapping=Wn,h.autoClear=!1;const g=new Cs({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1}),_=new at(new nn,g);let m=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(Dc),m=!0);for(let w=0;w<6;w++){const b=w%3;b===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[w],r.y,r.z)):b===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[w]));const x=this._cubeSize;xr(i,b*x,w>2?x:0,x,x),h.setRenderTarget(i),m&&h.render(_,l),h.render(e,l)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Yi||e.mapping===ji;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Oc());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new at(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;xr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Bo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Uc[(i-r-1)%Uc.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new at(this._lodPlanes[i],c),u=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ai-1),_=r/g,m=isFinite(r)?1+Math.floor(d*_):ai;m>ai&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ai}`);const p=[];let w=0;for(let E=0;E<ai;++E){const C=E/_,M=Math.exp(-C*C/2);p.push(M),E===0?w+=M:E<m&&(w+=2*M)}for(let E=0;E<p.length;E++)p[E]=p[E]/w;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:b}=this;u.dTheta.value=g,u.mipInt.value=b-n;const x=this._sizeLods[i],L=3*x*(i>b-ki?i-b+ki:0),A=4*(this._cubeSize-x);xr(t,L,A,3*x,2*x),l.setRenderTarget(t),l.render(h,Bo)}}function c0(s){const e=[],t=[],n=[];let i=s;const r=s-ki+1+Pc.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-ki?l=Pc[o-s+ki-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),d=-c,h=1+c,u=[d,d,h,d,h,h,d,d,h,h,d,h],f=6,g=6,_=3,m=2,p=1,w=new Float32Array(_*g*f),b=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let A=0;A<f;A++){const E=A%3*2/3-1,C=A>2?0:-1,M=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];w.set(M,_*g*A),b.set(u,m*g*A);const v=[A,A,A,A,A,A];x.set(v,p*g*A)}const L=new Tt;L.setAttribute("position",new gn(w,_)),L.setAttribute("uv",new gn(b,m)),L.setAttribute("faceIndex",new gn(x,p)),e.push(L),i>ki&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Fc(s,e,t){const n=new di(s,e,t);return n.texture.mapping=Kr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function h0(s,e,t){const n=new Float32Array(ai),i=new I(0,1,0);return new Yn({name:"SphericalGaussianBlur",defines:{n:ai,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Oc(){return new Yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Bc(){return new Yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Ml(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function d0(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Or||l===ca,d=l===Yi||l===ji;if(c||d){let h=e.get(a);const u=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new Nc(s)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return c&&f&&f.height>0||d&&f&&i(f)?(t===null&&(t=new Nc(s)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function u0(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&ii("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function f0(s,e,t,n){const i={},r=new WeakMap;function o(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete i[u.id];const f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(h,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,t.memory.geometries++),u}function l(h){const u=h.attributes;for(const f in u)e.update(u[f],s.ARRAY_BUFFER)}function c(h){const u=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const w=f.array;_=f.version;for(let b=0,x=w.length;b<x;b+=3){const L=w[b+0],A=w[b+1],E=w[b+2];u.push(L,A,A,E,E,L)}}else if(g!==void 0){const w=g.array;_=g.version;for(let b=0,x=w.length/3-1;b<x;b+=3){const L=b+0,A=b+1,E=b+2;u.push(L,A,A,E,E,L)}}else return;const m=new(Dh(u)?Fh:hl)(u,1);m.version=_;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function d(h){const u=r.get(h);if(u){const f=h.index;f!==null&&u.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function p0(s,e,t){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){s.drawElements(n,f,r,u*o),t.update(f,n,1)}function c(u,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,u*o,g),t.update(f,n,g))}function d(u,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function h(u,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,_,0,g);let p=0;for(let w=0;w<g;w++)p+=f[w]*_[w];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function m0(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function g0(s,e,t){const n=new WeakMap,i=new He;function r(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=d!==void 0?d.length:0;let u=n.get(a);if(u===void 0||u.count!==h){let v=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var f=v;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let L=a.attributes.position.count*x,A=1;L>e.maxTextureSize&&(A=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const E=new Float32Array(L*A*4*h),C=new Uh(E,L,A,h);C.type=vn,C.needsUpdate=!0;const M=x*4;for(let R=0;R<h;R++){const k=p[R],N=w[R],W=b[R],Y=L*A*4*R;for(let D=0;D<k.count;D++){const X=D*M;g===!0&&(i.fromBufferAttribute(k,D),E[Y+X+0]=i.x,E[Y+X+1]=i.y,E[Y+X+2]=i.z,E[Y+X+3]=0),_===!0&&(i.fromBufferAttribute(N,D),E[Y+X+4]=i.x,E[Y+X+5]=i.y,E[Y+X+6]=i.z,E[Y+X+7]=0),m===!0&&(i.fromBufferAttribute(W,D),E[Y+X+8]=i.x,E[Y+X+9]=i.y,E[Y+X+10]=i.z,E[Y+X+11]=W.itemSize===4?i.w:1)}}u={count:h,texture:C,size:new De(L,A)},n.set(a,u),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function _0(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,d=l.geometry,h=e.get(l,d);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Qh=new wt,kc=new Hh(1,1),ed=new Uh,td=new ju,nd=new kh,zc=[],Vc=[],Hc=new Float32Array(16),Gc=new Float32Array(9),Wc=new Float32Array(4);function os(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=zc[i];if(r===void 0&&(r=new Float32Array(i),zc[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Mt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function bt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function no(s,e){let t=Vc[e];t===void 0&&(t=new Int32Array(e),Vc[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function v0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function x0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;s.uniform2fv(this.addr,e),bt(t,e)}}function y0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;s.uniform3fv(this.addr,e),bt(t,e)}}function M0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;s.uniform4fv(this.addr,e),bt(t,e)}}function b0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(Mt(t,n))return;Wc.set(n),s.uniformMatrix2fv(this.addr,!1,Wc),bt(t,n)}}function S0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(Mt(t,n))return;Gc.set(n),s.uniformMatrix3fv(this.addr,!1,Gc),bt(t,n)}}function E0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(Mt(t,n))return;Hc.set(n),s.uniformMatrix4fv(this.addr,!1,Hc),bt(t,n)}}function w0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function T0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;s.uniform2iv(this.addr,e),bt(t,e)}}function A0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;s.uniform3iv(this.addr,e),bt(t,e)}}function R0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;s.uniform4iv(this.addr,e),bt(t,e)}}function C0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function I0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;s.uniform2uiv(this.addr,e),bt(t,e)}}function L0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;s.uniform3uiv(this.addr,e),bt(t,e)}}function P0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;s.uniform4uiv(this.addr,e),bt(t,e)}}function D0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(kc.compareFunction=Ph,r=kc):r=Qh,t.setTexture2D(e||r,i)}function U0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||td,i)}function N0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||nd,i)}function F0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||ed,i)}function O0(s){switch(s){case 5126:return v0;case 35664:return x0;case 35665:return y0;case 35666:return M0;case 35674:return b0;case 35675:return S0;case 35676:return E0;case 5124:case 35670:return w0;case 35667:case 35671:return T0;case 35668:case 35672:return A0;case 35669:case 35673:return R0;case 5125:return C0;case 36294:return I0;case 36295:return L0;case 36296:return P0;case 35678:case 36198:case 36298:case 36306:case 35682:return D0;case 35679:case 36299:case 36307:return U0;case 35680:case 36300:case 36308:case 36293:return N0;case 36289:case 36303:case 36311:case 36292:return F0}}function B0(s,e){s.uniform1fv(this.addr,e)}function k0(s,e){const t=os(e,this.size,2);s.uniform2fv(this.addr,t)}function z0(s,e){const t=os(e,this.size,3);s.uniform3fv(this.addr,t)}function V0(s,e){const t=os(e,this.size,4);s.uniform4fv(this.addr,t)}function H0(s,e){const t=os(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function G0(s,e){const t=os(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function W0(s,e){const t=os(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function X0(s,e){s.uniform1iv(this.addr,e)}function q0(s,e){s.uniform2iv(this.addr,e)}function Y0(s,e){s.uniform3iv(this.addr,e)}function j0(s,e){s.uniform4iv(this.addr,e)}function $0(s,e){s.uniform1uiv(this.addr,e)}function K0(s,e){s.uniform2uiv(this.addr,e)}function Z0(s,e){s.uniform3uiv(this.addr,e)}function J0(s,e){s.uniform4uiv(this.addr,e)}function Q0(s,e,t){const n=this.cache,i=e.length,r=no(t,i);Mt(n,r)||(s.uniform1iv(this.addr,r),bt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Qh,r[o])}function e_(s,e,t){const n=this.cache,i=e.length,r=no(t,i);Mt(n,r)||(s.uniform1iv(this.addr,r),bt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||td,r[o])}function t_(s,e,t){const n=this.cache,i=e.length,r=no(t,i);Mt(n,r)||(s.uniform1iv(this.addr,r),bt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||nd,r[o])}function n_(s,e,t){const n=this.cache,i=e.length,r=no(t,i);Mt(n,r)||(s.uniform1iv(this.addr,r),bt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||ed,r[o])}function i_(s){switch(s){case 5126:return B0;case 35664:return k0;case 35665:return z0;case 35666:return V0;case 35674:return H0;case 35675:return G0;case 35676:return W0;case 5124:case 35670:return X0;case 35667:case 35671:return q0;case 35668:case 35672:return Y0;case 35669:case 35673:return j0;case 5125:return $0;case 36294:return K0;case 36295:return Z0;case 36296:return J0;case 35678:case 36198:case 36298:case 36306:case 35682:return Q0;case 35679:case 36299:case 36307:return e_;case 35680:case 36300:case 36308:case 36293:return t_;case 36289:case 36303:case 36311:case 36292:return n_}}class s_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=O0(t.type)}}class r_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=i_(t.type)}}class o_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Go=/(\w+)(\])?(\[|\.)?/g;function Xc(s,e){s.seq.push(e),s.map[e.id]=e}function a_(s,e,t){const n=s.name,i=n.length;for(Go.lastIndex=0;;){const r=Go.exec(n),o=Go.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Xc(t,c===void 0?new s_(a,s,e):new r_(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new o_(a),Xc(t,h)),t=h}}}class Lr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);a_(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function qc(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const l_=37297;let c_=0;function h_(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Yc=new Ue;function d_(s){Be._getMatrix(Yc,Be.workingColorSpace,s);const e=`mat3( ${Yc.elements.map(t=>t.toFixed(4))} )`;switch(Be.getTransfer(s)){case zr:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function jc(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+h_(s.getShaderSource(e),o)}else return i}function u_(s,e){const t=d_(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function f_(s,e){let t;switch(e){case iu:t="Linear";break;case su:t="Reinhard";break;case ru:t="Cineon";break;case xh:t="ACESFilmic";break;case au:t="AgX";break;case lu:t="Neutral";break;case ou:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const yr=new I;function p_(){Be.getLuminanceCoefficients(yr);const s=yr.x.toFixed(4),e=yr.y.toFixed(4),t=yr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function m_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ms).join(`
`)}function g_(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function __(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Ms(s){return s!==""}function $c(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kc(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const v_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xa(s){return s.replace(v_,y_)}const x_=new Map;function y_(s,e){let t=Oe[e];if(t===void 0){const n=x_.get(e);if(n!==void 0)t=Oe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Xa(t)}const M_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zc(s){return s.replace(M_,b_)}function b_(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Jc(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function S_(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===_h?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===vh?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Rn&&(e="SHADOWMAP_TYPE_VSM"),e}function E_(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Yi:case ji:e="ENVMAP_TYPE_CUBE";break;case Kr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function w_(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ji:e="ENVMAP_MODE_REFRACTION";break}return e}function T_(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case $r:e="ENVMAP_BLENDING_MULTIPLY";break;case tu:e="ENVMAP_BLENDING_MIX";break;case nu:e="ENVMAP_BLENDING_ADD";break}return e}function A_(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function R_(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=S_(t),c=E_(t),d=w_(t),h=T_(t),u=A_(t),f=m_(t),g=g_(r),_=i.createProgram();let m,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ms).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ms).join(`
`),p.length>0&&(p+=`
`)):(m=[Jc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ms).join(`
`),p=[Jc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wn?"#define TONE_MAPPING":"",t.toneMapping!==Wn?Oe.tonemapping_pars_fragment:"",t.toneMapping!==Wn?f_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,u_("linearToOutputTexel",t.outputColorSpace),p_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ms).join(`
`)),o=Xa(o),o=$c(o,t),o=Kc(o,t),a=Xa(a),a=$c(a,t),a=Kc(a,t),o=Zc(o),a=Zc(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Vl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=w+m+o,x=w+p+a,L=qc(i,i.VERTEX_SHADER,b),A=qc(i,i.FRAGMENT_SHADER,x);i.attachShader(_,L),i.attachShader(_,A),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function E(R){if(s.debug.checkShaderErrors){const k=i.getProgramInfoLog(_).trim(),N=i.getShaderInfoLog(L).trim(),W=i.getShaderInfoLog(A).trim();let Y=!0,D=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,L,A);else{const X=jc(i,L,"vertex"),z=jc(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+k+`
`+X+`
`+z)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(N===""||W==="")&&(D=!1);D&&(R.diagnostics={runnable:Y,programLog:k,vertexShader:{log:N,prefix:m},fragmentShader:{log:W,prefix:p}})}i.deleteShader(L),i.deleteShader(A),C=new Lr(i,_),M=__(i,_)}let C;this.getUniforms=function(){return C===void 0&&E(this),C};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(_,l_)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=c_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=A,this}let C_=0;class I_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new L_(e),t.set(e,n)),n}}class L_{constructor(e){this.id=C_++,this.code=e,this.usedTimes=0}}function P_(s,e,t,n,i,r,o){const a=new cl,l=new I_,c=new Set,d=[],h=i.logarithmicDepthBuffer,u=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,v,R,k,N){const W=k.fog,Y=N.geometry,D=M.isMeshStandardMaterial?k.environment:null,X=(M.isMeshStandardMaterial?t:e).get(M.envMap||D),z=X&&X.mapping===Kr?X.image.height:null,J=g[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const ie=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,re=ie!==void 0?ie.length:0;let pe=0;Y.morphAttributes.position!==void 0&&(pe=1),Y.morphAttributes.normal!==void 0&&(pe=2),Y.morphAttributes.color!==void 0&&(pe=3);let le,B,q,j;if(J){const et=_n[J];le=et.vertexShader,B=et.fragmentShader}else le=M.vertexShader,B=M.fragmentShader,l.update(M),q=l.getVertexShaderID(M),j=l.getFragmentShaderID(M);const K=s.getRenderTarget(),oe=s.state.buffers.depth.getReversed(),Ce=N.isInstancedMesh===!0,Ee=N.isBatchedMesh===!0,ht=!!M.map,rt=!!M.matcap,Ve=!!X,P=!!M.aoMap,qt=!!M.lightMap,We=!!M.bumpMap,Xe=!!M.normalMap,we=!!M.displacementMap,lt=!!M.emissiveMap,Se=!!M.metalnessMap,T=!!M.roughnessMap,y=M.anisotropy>0,V=M.clearcoat>0,Q=M.dispersion>0,te=M.iridescence>0,Z=M.sheen>0,be=M.transmission>0,de=y&&!!M.anisotropyMap,ge=V&&!!M.clearcoatMap,Ye=V&&!!M.clearcoatNormalMap,se=V&&!!M.clearcoatRoughnessMap,_e=te&&!!M.iridescenceMap,Re=te&&!!M.iridescenceThicknessMap,Ie=Z&&!!M.sheenColorMap,ve=Z&&!!M.sheenRoughnessMap,qe=!!M.specularMap,Fe=!!M.specularColorMap,ot=!!M.specularIntensityMap,U=be&&!!M.transmissionMap,ce=be&&!!M.thicknessMap,$=!!M.gradientMap,ee=!!M.alphaMap,fe=M.alphaTest>0,ue=!!M.alphaHash,Ne=!!M.extensions;let ft=Wn;M.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(ft=s.toneMapping);const Ct={shaderID:J,shaderType:M.type,shaderName:M.name,vertexShader:le,fragmentShader:B,defines:M.defines,customVertexShaderID:q,customFragmentShaderID:j,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Ee,batchingColor:Ee&&N._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&N.instanceColor!==null,instancingMorph:Ce&&N.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:K===null?s.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:un,alphaToCoverage:!!M.alphaToCoverage,map:ht,matcap:rt,envMap:Ve,envMapMode:Ve&&X.mapping,envMapCubeUVHeight:z,aoMap:P,lightMap:qt,bumpMap:We,normalMap:Xe,displacementMap:u&&we,emissiveMap:lt,normalMapObjectSpace:Xe&&M.normalMapType===mu,normalMapTangentSpace:Xe&&M.normalMapType===Jr,metalnessMap:Se,roughnessMap:T,anisotropy:y,anisotropyMap:de,clearcoat:V,clearcoatMap:ge,clearcoatNormalMap:Ye,clearcoatRoughnessMap:se,dispersion:Q,iridescence:te,iridescenceMap:_e,iridescenceThicknessMap:Re,sheen:Z,sheenColorMap:Ie,sheenRoughnessMap:ve,specularMap:qe,specularColorMap:Fe,specularIntensityMap:ot,transmission:be,transmissionMap:U,thicknessMap:ce,gradientMap:$,opaque:M.transparent===!1&&M.blending===Vi&&M.alphaToCoverage===!1,alphaMap:ee,alphaTest:fe,alphaHash:ue,combine:M.combine,mapUv:ht&&_(M.map.channel),aoMapUv:P&&_(M.aoMap.channel),lightMapUv:qt&&_(M.lightMap.channel),bumpMapUv:We&&_(M.bumpMap.channel),normalMapUv:Xe&&_(M.normalMap.channel),displacementMapUv:we&&_(M.displacementMap.channel),emissiveMapUv:lt&&_(M.emissiveMap.channel),metalnessMapUv:Se&&_(M.metalnessMap.channel),roughnessMapUv:T&&_(M.roughnessMap.channel),anisotropyMapUv:de&&_(M.anisotropyMap.channel),clearcoatMapUv:ge&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Ye&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:ve&&_(M.sheenRoughnessMap.channel),specularMapUv:qe&&_(M.specularMap.channel),specularColorMapUv:Fe&&_(M.specularColorMap.channel),specularIntensityMapUv:ot&&_(M.specularIntensityMap.channel),transmissionMapUv:U&&_(M.transmissionMap.channel),thicknessMapUv:ce&&_(M.thicknessMap.channel),alphaMapUv:ee&&_(M.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Xe||y),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!Y.attributes.uv&&(ht||ee),fog:!!W,useFog:M.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:oe,skinning:N.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:pe,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:ft,decodeVideoTexture:ht&&M.map.isVideoTexture===!0&&Be.getTransfer(M.map.colorSpace)===nt,decodeVideoTextureEmissive:lt&&M.emissiveMap.isVideoTexture===!0&&Be.getTransfer(M.emissiveMap.colorSpace)===nt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Cn,flipSided:M.side===zt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ne&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&M.extensions.multiDraw===!0||Ee)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ct.vertexUv1s=c.has(1),Ct.vertexUv2s=c.has(2),Ct.vertexUv3s=c.has(3),c.clear(),Ct}function p(M){const v=[];if(M.shaderID?v.push(M.shaderID):(v.push(M.customVertexShaderID),v.push(M.customFragmentShaderID)),M.defines!==void 0)for(const R in M.defines)v.push(R),v.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(w(v,M),b(v,M),v.push(s.outputColorSpace)),v.push(M.customProgramCacheKey),v.join()}function w(M,v){M.push(v.precision),M.push(v.outputColorSpace),M.push(v.envMapMode),M.push(v.envMapCubeUVHeight),M.push(v.mapUv),M.push(v.alphaMapUv),M.push(v.lightMapUv),M.push(v.aoMapUv),M.push(v.bumpMapUv),M.push(v.normalMapUv),M.push(v.displacementMapUv),M.push(v.emissiveMapUv),M.push(v.metalnessMapUv),M.push(v.roughnessMapUv),M.push(v.anisotropyMapUv),M.push(v.clearcoatMapUv),M.push(v.clearcoatNormalMapUv),M.push(v.clearcoatRoughnessMapUv),M.push(v.iridescenceMapUv),M.push(v.iridescenceThicknessMapUv),M.push(v.sheenColorMapUv),M.push(v.sheenRoughnessMapUv),M.push(v.specularMapUv),M.push(v.specularColorMapUv),M.push(v.specularIntensityMapUv),M.push(v.transmissionMapUv),M.push(v.thicknessMapUv),M.push(v.combine),M.push(v.fogExp2),M.push(v.sizeAttenuation),M.push(v.morphTargetsCount),M.push(v.morphAttributeCount),M.push(v.numDirLights),M.push(v.numPointLights),M.push(v.numSpotLights),M.push(v.numSpotLightMaps),M.push(v.numHemiLights),M.push(v.numRectAreaLights),M.push(v.numDirLightShadows),M.push(v.numPointLightShadows),M.push(v.numSpotLightShadows),M.push(v.numSpotLightShadowsWithMaps),M.push(v.numLightProbes),M.push(v.shadowMapType),M.push(v.toneMapping),M.push(v.numClippingPlanes),M.push(v.numClipIntersection),M.push(v.depthPacking)}function b(M,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),M.push(a.mask)}function x(M){const v=g[M.type];let R;if(v){const k=_n[v];R=lf.clone(k.uniforms)}else R=M.uniforms;return R}function L(M,v){let R;for(let k=0,N=d.length;k<N;k++){const W=d[k];if(W.cacheKey===v){R=W,++R.usedTimes;break}}return R===void 0&&(R=new R_(s,v,M,r),d.push(R)),R}function A(M){if(--M.usedTimes===0){const v=d.indexOf(M);d[v]=d[d.length-1],d.pop(),M.destroy()}}function E(M){l.remove(M)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:L,releaseProgram:A,releaseShaderCache:E,programs:d,dispose:C}}function D_(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function U_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Qc(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function eh(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,u,f,g,_,m){let p=s[e];return p===void 0?(p={id:h.id,object:h,geometry:u,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},s[e]=p):(p.id=h.id,p.object=h,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,u,f,g,_,m){const p=o(h,u,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(h,u,f,g,_,m){const p=o(h,u,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,u){t.length>1&&t.sort(h||U_),n.length>1&&n.sort(u||Qc),i.length>1&&i.sort(u||Qc)}function d(){for(let h=e,u=s.length;h<u;h++){const f=s[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:d,sort:c}}function N_(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new eh,s.set(n,[o])):i>=r.length?(o=new eh,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function F_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new ye};break;case"SpotLight":t={position:new I,direction:new I,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":t={color:new ye,position:new I,halfWidth:new I,halfHeight:new I};break}return s[e.id]=t,t}}}function O_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let B_=0;function k_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function z_(s){const e=new F_,t=O_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const i=new I,r=new Me,o=new Me;function a(c){let d=0,h=0,u=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,w=0,b=0,x=0,L=0,A=0,E=0;c.sort(k_);for(let M=0,v=c.length;M<v;M++){const R=c[M],k=R.color,N=R.intensity,W=R.distance,Y=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)d+=k.r*N,h+=k.g*N,u+=k.b*N;else if(R.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(R.sh.coefficients[D],N);E++}else if(R.isDirectionalLight){const D=e.get(R);if(D.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const X=R.shadow,z=t.get(R);z.shadowIntensity=X.intensity,z.shadowBias=X.bias,z.shadowNormalBias=X.normalBias,z.shadowRadius=X.radius,z.shadowMapSize=X.mapSize,n.directionalShadow[f]=z,n.directionalShadowMap[f]=Y,n.directionalShadowMatrix[f]=R.shadow.matrix,w++}n.directional[f]=D,f++}else if(R.isSpotLight){const D=e.get(R);D.position.setFromMatrixPosition(R.matrixWorld),D.color.copy(k).multiplyScalar(N),D.distance=W,D.coneCos=Math.cos(R.angle),D.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),D.decay=R.decay,n.spot[_]=D;const X=R.shadow;if(R.map&&(n.spotLightMap[L]=R.map,L++,X.updateMatrices(R),R.castShadow&&A++),n.spotLightMatrix[_]=X.matrix,R.castShadow){const z=t.get(R);z.shadowIntensity=X.intensity,z.shadowBias=X.bias,z.shadowNormalBias=X.normalBias,z.shadowRadius=X.radius,z.shadowMapSize=X.mapSize,n.spotShadow[_]=z,n.spotShadowMap[_]=Y,x++}_++}else if(R.isRectAreaLight){const D=e.get(R);D.color.copy(k).multiplyScalar(N),D.halfWidth.set(R.width*.5,0,0),D.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=D,m++}else if(R.isPointLight){const D=e.get(R);if(D.color.copy(R.color).multiplyScalar(R.intensity),D.distance=R.distance,D.decay=R.decay,R.castShadow){const X=R.shadow,z=t.get(R);z.shadowIntensity=X.intensity,z.shadowBias=X.bias,z.shadowNormalBias=X.normalBias,z.shadowRadius=X.radius,z.shadowMapSize=X.mapSize,z.shadowCameraNear=X.camera.near,z.shadowCameraFar=X.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=R.shadow.matrix,b++}n.point[g]=D,g++}else if(R.isHemisphereLight){const D=e.get(R);D.skyColor.copy(R.color).multiplyScalar(N),D.groundColor.copy(R.groundColor).multiplyScalar(N),n.hemi[p]=D,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ae.LTC_FLOAT_1,n.rectAreaLTC2=ae.LTC_FLOAT_2):(n.rectAreaLTC1=ae.LTC_HALF_1,n.rectAreaLTC2=ae.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=u;const C=n.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==w||C.numPointShadows!==b||C.numSpotShadows!==x||C.numSpotMaps!==L||C.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=x+L-A,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=E,C.directionalLength=f,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=w,C.numPointShadows=b,C.numSpotShadows=x,C.numSpotMaps=L,C.numLightProbes=E,n.version=B_++)}function l(c,d){let h=0,u=0,f=0,g=0,_=0;const m=d.matrixWorldInverse;for(let p=0,w=c.length;p<w;p++){const b=c[p];if(b.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),h++}else if(b.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(b.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const x=n.point[u];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),u++}else if(b.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function th(s){const e=new z_(s),t=[],n=[];function i(d){c.camera=d,t.length=0,n.length=0}function r(d){t.push(d)}function o(d){n.push(d)}function a(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function V_(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new th(s),e.set(i,[a])):r>=o.length?(a=new th(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const H_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,G_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function W_(s,e,t){let n=new ul;const i=new De,r=new De,o=new He,a=new zf({depthPacking:pu}),l=new Vf,c={},d=t.maxTextureSize,h={[qn]:zt,[zt]:qn,[Cn]:Cn},u=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:H_,fragmentShader:G_}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new Tt;g.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new at(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_h;let p=this.type;this.render=function(A,E,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const M=s.getRenderTarget(),v=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),k=s.state;k.setBlending(Gn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const N=p!==Rn&&this.type===Rn,W=p===Rn&&this.type!==Rn;for(let Y=0,D=A.length;Y<D;Y++){const X=A[Y],z=X.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const J=z.getFrameExtents();if(i.multiply(J),r.copy(z.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(r.x=Math.floor(d/J.x),i.x=r.x*J.x,z.mapSize.x=r.x),i.y>d&&(r.y=Math.floor(d/J.y),i.y=r.y*J.y,z.mapSize.y=r.y)),z.map===null||N===!0||W===!0){const re=this.type!==Rn?{minFilter:Xt,magFilter:Xt}:{};z.map!==null&&z.map.dispose(),z.map=new di(i.x,i.y,re),z.map.texture.name=X.name+".shadowMap",z.camera.updateProjectionMatrix()}s.setRenderTarget(z.map),s.clear();const ie=z.getViewportCount();for(let re=0;re<ie;re++){const pe=z.getViewport(re);o.set(r.x*pe.x,r.y*pe.y,r.x*pe.z,r.y*pe.w),k.viewport(o),z.updateMatrices(X,re),n=z.getFrustum(),x(E,C,z.camera,X,this.type)}z.isPointLightShadow!==!0&&this.type===Rn&&w(z,C),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(M,v,R)};function w(A,E){const C=e.update(_);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new di(i.x,i.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(E,null,C,u,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(E,null,C,f,_,null)}function b(A,E,C,M){let v=null;const R=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)v=R;else if(v=C.isPointLight===!0?l:a,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const k=v.uuid,N=E.uuid;let W=c[k];W===void 0&&(W={},c[k]=W);let Y=W[N];Y===void 0&&(Y=v.clone(),W[N]=Y,E.addEventListener("dispose",L)),v=Y}if(v.visible=E.visible,v.wireframe=E.wireframe,M===Rn?v.side=E.shadowSide!==null?E.shadowSide:E.side:v.side=E.shadowSide!==null?E.shadowSide:h[E.side],v.alphaMap=E.alphaMap,v.alphaTest=E.alphaTest,v.map=E.map,v.clipShadows=E.clipShadows,v.clippingPlanes=E.clippingPlanes,v.clipIntersection=E.clipIntersection,v.displacementMap=E.displacementMap,v.displacementScale=E.displacementScale,v.displacementBias=E.displacementBias,v.wireframeLinewidth=E.wireframeLinewidth,v.linewidth=E.linewidth,C.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const k=s.properties.get(v);k.light=C}return v}function x(A,E,C,M,v){if(A.visible===!1)return;if(A.layers.test(E.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===Rn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const N=e.update(A),W=A.material;if(Array.isArray(W)){const Y=N.groups;for(let D=0,X=Y.length;D<X;D++){const z=Y[D],J=W[z.materialIndex];if(J&&J.visible){const ie=b(A,J,M,v);A.onBeforeShadow(s,A,E,C,N,ie,z),s.renderBufferDirect(C,null,N,ie,A,z),A.onAfterShadow(s,A,E,C,N,ie,z)}}}else if(W.visible){const Y=b(A,W,M,v);A.onBeforeShadow(s,A,E,C,N,Y,null),s.renderBufferDirect(C,null,N,Y,A,null),A.onAfterShadow(s,A,E,C,N,Y,null)}}const k=A.children;for(let N=0,W=k.length;N<W;N++)x(k[N],E,C,M,v)}function L(A){A.target.removeEventListener("dispose",L);for(const C in c){const M=c[C],v=A.target.uuid;v in M&&(M[v].dispose(),delete M[v])}}}const X_={[na]:ia,[sa]:aa,[ra]:la,[qi]:oa,[ia]:na,[aa]:sa,[la]:ra,[oa]:qi};function q_(s,e){function t(){let U=!1;const ce=new He;let $=null;const ee=new He(0,0,0,0);return{setMask:function(fe){$!==fe&&!U&&(s.colorMask(fe,fe,fe,fe),$=fe)},setLocked:function(fe){U=fe},setClear:function(fe,ue,Ne,ft,Ct){Ct===!0&&(fe*=ft,ue*=ft,Ne*=ft),ce.set(fe,ue,Ne,ft),ee.equals(ce)===!1&&(s.clearColor(fe,ue,Ne,ft),ee.copy(ce))},reset:function(){U=!1,$=null,ee.set(-1,0,0,0)}}}function n(){let U=!1,ce=!1,$=null,ee=null,fe=null;return{setReversed:function(ue){if(ce!==ue){const Ne=e.get("EXT_clip_control");ce?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT);const ft=fe;fe=null,this.setClear(ft)}ce=ue},getReversed:function(){return ce},setTest:function(ue){ue?K(s.DEPTH_TEST):oe(s.DEPTH_TEST)},setMask:function(ue){$!==ue&&!U&&(s.depthMask(ue),$=ue)},setFunc:function(ue){if(ce&&(ue=X_[ue]),ee!==ue){switch(ue){case na:s.depthFunc(s.NEVER);break;case ia:s.depthFunc(s.ALWAYS);break;case sa:s.depthFunc(s.LESS);break;case qi:s.depthFunc(s.LEQUAL);break;case ra:s.depthFunc(s.EQUAL);break;case oa:s.depthFunc(s.GEQUAL);break;case aa:s.depthFunc(s.GREATER);break;case la:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ee=ue}},setLocked:function(ue){U=ue},setClear:function(ue){fe!==ue&&(ce&&(ue=1-ue),s.clearDepth(ue),fe=ue)},reset:function(){U=!1,$=null,ee=null,fe=null,ce=!1}}}function i(){let U=!1,ce=null,$=null,ee=null,fe=null,ue=null,Ne=null,ft=null,Ct=null;return{setTest:function(et){U||(et?K(s.STENCIL_TEST):oe(s.STENCIL_TEST))},setMask:function(et){ce!==et&&!U&&(s.stencilMask(et),ce=et)},setFunc:function(et,sn,Mn){($!==et||ee!==sn||fe!==Mn)&&(s.stencilFunc(et,sn,Mn),$=et,ee=sn,fe=Mn)},setOp:function(et,sn,Mn){(ue!==et||Ne!==sn||ft!==Mn)&&(s.stencilOp(et,sn,Mn),ue=et,Ne=sn,ft=Mn)},setLocked:function(et){U=et},setClear:function(et){Ct!==et&&(s.clearStencil(et),Ct=et)},reset:function(){U=!1,ce=null,$=null,ee=null,fe=null,ue=null,Ne=null,ft=null,Ct=null}}}const r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let d={},h={},u=new WeakMap,f=[],g=null,_=!1,m=null,p=null,w=null,b=null,x=null,L=null,A=null,E=new ye(0,0,0),C=0,M=!1,v=null,R=null,k=null,N=null,W=null;const Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,X=0;const z=s.getParameter(s.VERSION);z.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(z)[1]),D=X>=1):z.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),D=X>=2);let J=null,ie={};const re=s.getParameter(s.SCISSOR_BOX),pe=s.getParameter(s.VIEWPORT),le=new He().fromArray(re),B=new He().fromArray(pe);function q(U,ce,$,ee){const fe=new Uint8Array(4),ue=s.createTexture();s.bindTexture(U,ue),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ne=0;Ne<$;Ne++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(ce,0,s.RGBA,1,1,ee,0,s.RGBA,s.UNSIGNED_BYTE,fe):s.texImage2D(ce+Ne,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,fe);return ue}const j={};j[s.TEXTURE_2D]=q(s.TEXTURE_2D,s.TEXTURE_2D,1),j[s.TEXTURE_CUBE_MAP]=q(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[s.TEXTURE_2D_ARRAY]=q(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),j[s.TEXTURE_3D]=q(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(s.DEPTH_TEST),o.setFunc(qi),We(!1),Xe(Fl),K(s.CULL_FACE),P(Gn);function K(U){d[U]!==!0&&(s.enable(U),d[U]=!0)}function oe(U){d[U]!==!1&&(s.disable(U),d[U]=!1)}function Ce(U,ce){return h[U]!==ce?(s.bindFramebuffer(U,ce),h[U]=ce,U===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=ce),U===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=ce),!0):!1}function Ee(U,ce){let $=f,ee=!1;if(U){$=u.get(ce),$===void 0&&($=[],u.set(ce,$));const fe=U.textures;if($.length!==fe.length||$[0]!==s.COLOR_ATTACHMENT0){for(let ue=0,Ne=fe.length;ue<Ne;ue++)$[ue]=s.COLOR_ATTACHMENT0+ue;$.length=fe.length,ee=!0}}else $[0]!==s.BACK&&($[0]=s.BACK,ee=!0);ee&&s.drawBuffers($)}function ht(U){return g!==U?(s.useProgram(U),g=U,!0):!1}const rt={[oi]:s.FUNC_ADD,[Bd]:s.FUNC_SUBTRACT,[kd]:s.FUNC_REVERSE_SUBTRACT};rt[zd]=s.MIN,rt[Vd]=s.MAX;const Ve={[Hd]:s.ZERO,[Gd]:s.ONE,[Wd]:s.SRC_COLOR,[ea]:s.SRC_ALPHA,[Kd]:s.SRC_ALPHA_SATURATE,[jd]:s.DST_COLOR,[qd]:s.DST_ALPHA,[Xd]:s.ONE_MINUS_SRC_COLOR,[ta]:s.ONE_MINUS_SRC_ALPHA,[$d]:s.ONE_MINUS_DST_COLOR,[Yd]:s.ONE_MINUS_DST_ALPHA,[Zd]:s.CONSTANT_COLOR,[Jd]:s.ONE_MINUS_CONSTANT_COLOR,[Qd]:s.CONSTANT_ALPHA,[eu]:s.ONE_MINUS_CONSTANT_ALPHA};function P(U,ce,$,ee,fe,ue,Ne,ft,Ct,et){if(U===Gn){_===!0&&(oe(s.BLEND),_=!1);return}if(_===!1&&(K(s.BLEND),_=!0),U!==Od){if(U!==m||et!==M){if((p!==oi||x!==oi)&&(s.blendEquation(s.FUNC_ADD),p=oi,x=oi),et)switch(U){case Vi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Qo:s.blendFunc(s.ONE,s.ONE);break;case Ol:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Bl:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Vi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Qo:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ol:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Bl:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}w=null,b=null,L=null,A=null,E.set(0,0,0),C=0,m=U,M=et}return}fe=fe||ce,ue=ue||$,Ne=Ne||ee,(ce!==p||fe!==x)&&(s.blendEquationSeparate(rt[ce],rt[fe]),p=ce,x=fe),($!==w||ee!==b||ue!==L||Ne!==A)&&(s.blendFuncSeparate(Ve[$],Ve[ee],Ve[ue],Ve[Ne]),w=$,b=ee,L=ue,A=Ne),(ft.equals(E)===!1||Ct!==C)&&(s.blendColor(ft.r,ft.g,ft.b,Ct),E.copy(ft),C=Ct),m=U,M=!1}function qt(U,ce){U.side===Cn?oe(s.CULL_FACE):K(s.CULL_FACE);let $=U.side===zt;ce&&($=!$),We($),U.blending===Vi&&U.transparent===!1?P(Gn):P(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const ee=U.stencilWrite;a.setTest(ee),ee&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),lt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?K(s.SAMPLE_ALPHA_TO_COVERAGE):oe(s.SAMPLE_ALPHA_TO_COVERAGE)}function We(U){v!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),v=U)}function Xe(U){U!==Nd?(K(s.CULL_FACE),U!==R&&(U===Fl?s.cullFace(s.BACK):U===Fd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):oe(s.CULL_FACE),R=U}function we(U){U!==k&&(D&&s.lineWidth(U),k=U)}function lt(U,ce,$){U?(K(s.POLYGON_OFFSET_FILL),(N!==ce||W!==$)&&(s.polygonOffset(ce,$),N=ce,W=$)):oe(s.POLYGON_OFFSET_FILL)}function Se(U){U?K(s.SCISSOR_TEST):oe(s.SCISSOR_TEST)}function T(U){U===void 0&&(U=s.TEXTURE0+Y-1),J!==U&&(s.activeTexture(U),J=U)}function y(U,ce,$){$===void 0&&(J===null?$=s.TEXTURE0+Y-1:$=J);let ee=ie[$];ee===void 0&&(ee={type:void 0,texture:void 0},ie[$]=ee),(ee.type!==U||ee.texture!==ce)&&(J!==$&&(s.activeTexture($),J=$),s.bindTexture(U,ce||j[U]),ee.type=U,ee.texture=ce)}function V(){const U=ie[J];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Q(){try{s.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{s.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{s.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function be(){try{s.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function de(){try{s.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ge(){try{s.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ye(){try{s.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(){try{s.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(){try{s.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Re(){try{s.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ie(U){le.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),le.copy(U))}function ve(U){B.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),B.copy(U))}function qe(U,ce){let $=c.get(ce);$===void 0&&($=new WeakMap,c.set(ce,$));let ee=$.get(U);ee===void 0&&(ee=s.getUniformBlockIndex(ce,U.name),$.set(U,ee))}function Fe(U,ce){const ee=c.get(ce).get(U);l.get(ce)!==ee&&(s.uniformBlockBinding(ce,ee,U.__bindingPointIndex),l.set(ce,ee))}function ot(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},J=null,ie={},h={},u=new WeakMap,f=[],g=null,_=!1,m=null,p=null,w=null,b=null,x=null,L=null,A=null,E=new ye(0,0,0),C=0,M=!1,v=null,R=null,k=null,N=null,W=null,le.set(0,0,s.canvas.width,s.canvas.height),B.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:K,disable:oe,bindFramebuffer:Ce,drawBuffers:Ee,useProgram:ht,setBlending:P,setMaterial:qt,setFlipSided:We,setCullFace:Xe,setLineWidth:we,setPolygonOffset:lt,setScissorTest:Se,activeTexture:T,bindTexture:y,unbindTexture:V,compressedTexImage2D:Q,compressedTexImage3D:te,texImage2D:_e,texImage3D:Re,updateUBOMapping:qe,uniformBlockBinding:Fe,texStorage2D:Ye,texStorage3D:se,texSubImage2D:Z,texSubImage3D:be,compressedTexSubImage2D:de,compressedTexSubImage3D:ge,scissor:Ie,viewport:ve,reset:ot}}function Y_(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new De,d=new WeakMap;let h;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,y){return f?new OffscreenCanvas(T,y):Rs("canvas")}function _(T,y,V){let Q=1;const te=Se(T);if((te.width>V||te.height>V)&&(Q=V/Math.max(te.width,te.height)),Q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Z=Math.floor(Q*te.width),be=Math.floor(Q*te.height);h===void 0&&(h=g(Z,be));const de=y?g(Z,be):h;return de.width=Z,de.height=be,de.getContext("2d").drawImage(T,0,0,Z,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+Z+"x"+be+")."),de}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){s.generateMipmap(T)}function w(T){return T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?s.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(T,y,V,Q,te=!1){if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Z=y;if(y===s.RED&&(V===s.FLOAT&&(Z=s.R32F),V===s.HALF_FLOAT&&(Z=s.R16F),V===s.UNSIGNED_BYTE&&(Z=s.R8)),y===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(Z=s.R8UI),V===s.UNSIGNED_SHORT&&(Z=s.R16UI),V===s.UNSIGNED_INT&&(Z=s.R32UI),V===s.BYTE&&(Z=s.R8I),V===s.SHORT&&(Z=s.R16I),V===s.INT&&(Z=s.R32I)),y===s.RG&&(V===s.FLOAT&&(Z=s.RG32F),V===s.HALF_FLOAT&&(Z=s.RG16F),V===s.UNSIGNED_BYTE&&(Z=s.RG8)),y===s.RG_INTEGER&&(V===s.UNSIGNED_BYTE&&(Z=s.RG8UI),V===s.UNSIGNED_SHORT&&(Z=s.RG16UI),V===s.UNSIGNED_INT&&(Z=s.RG32UI),V===s.BYTE&&(Z=s.RG8I),V===s.SHORT&&(Z=s.RG16I),V===s.INT&&(Z=s.RG32I)),y===s.RGB_INTEGER&&(V===s.UNSIGNED_BYTE&&(Z=s.RGB8UI),V===s.UNSIGNED_SHORT&&(Z=s.RGB16UI),V===s.UNSIGNED_INT&&(Z=s.RGB32UI),V===s.BYTE&&(Z=s.RGB8I),V===s.SHORT&&(Z=s.RGB16I),V===s.INT&&(Z=s.RGB32I)),y===s.RGBA_INTEGER&&(V===s.UNSIGNED_BYTE&&(Z=s.RGBA8UI),V===s.UNSIGNED_SHORT&&(Z=s.RGBA16UI),V===s.UNSIGNED_INT&&(Z=s.RGBA32UI),V===s.BYTE&&(Z=s.RGBA8I),V===s.SHORT&&(Z=s.RGBA16I),V===s.INT&&(Z=s.RGBA32I)),y===s.RGB&&V===s.UNSIGNED_INT_5_9_9_9_REV&&(Z=s.RGB9_E5),y===s.RGBA){const be=te?zr:Be.getTransfer(Q);V===s.FLOAT&&(Z=s.RGBA32F),V===s.HALF_FLOAT&&(Z=s.RGBA16F),V===s.UNSIGNED_BYTE&&(Z=be===nt?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function x(T,y){let V;return T?y===null||y===hi||y===Ki?V=s.DEPTH24_STENCIL8:y===vn?V=s.DEPTH32F_STENCIL8:y===As&&(V=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===hi||y===Ki?V=s.DEPTH_COMPONENT24:y===vn?V=s.DEPTH_COMPONENT32F:y===As&&(V=s.DEPTH_COMPONENT16),V}function L(T,y){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Xt&&T.minFilter!==Wt?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function A(T){const y=T.target;y.removeEventListener("dispose",A),C(y),y.isVideoTexture&&d.delete(y)}function E(T){const y=T.target;y.removeEventListener("dispose",E),v(y)}function C(T){const y=n.get(T);if(y.__webglInit===void 0)return;const V=T.source,Q=u.get(V);if(Q){const te=Q[y.__cacheKey];te.usedTimes--,te.usedTimes===0&&M(T),Object.keys(Q).length===0&&u.delete(V)}n.remove(T)}function M(T){const y=n.get(T);s.deleteTexture(y.__webglTexture);const V=T.source,Q=u.get(V);delete Q[y.__cacheKey],o.memory.textures--}function v(T){const y=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(y.__webglFramebuffer[Q]))for(let te=0;te<y.__webglFramebuffer[Q].length;te++)s.deleteFramebuffer(y.__webglFramebuffer[Q][te]);else s.deleteFramebuffer(y.__webglFramebuffer[Q]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[Q])}else{if(Array.isArray(y.__webglFramebuffer))for(let Q=0;Q<y.__webglFramebuffer.length;Q++)s.deleteFramebuffer(y.__webglFramebuffer[Q]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Q=0;Q<y.__webglColorRenderbuffer.length;Q++)y.__webglColorRenderbuffer[Q]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[Q]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const V=T.textures;for(let Q=0,te=V.length;Q<te;Q++){const Z=n.get(V[Q]);Z.__webglTexture&&(s.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(V[Q])}n.remove(T)}let R=0;function k(){R=0}function N(){const T=R;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),R+=1,T}function W(T){const y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function Y(T,y){const V=n.get(T);if(T.isVideoTexture&&we(T),T.isRenderTargetTexture===!1&&T.version>0&&V.__version!==T.version){const Q=T.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{B(V,T,y);return}}t.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+y)}function D(T,y){const V=n.get(T);if(T.version>0&&V.__version!==T.version){B(V,T,y);return}t.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+y)}function X(T,y){const V=n.get(T);if(T.version>0&&V.__version!==T.version){B(V,T,y);return}t.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+y)}function z(T,y){const V=n.get(T);if(T.version>0&&V.__version!==T.version){q(V,T,y);return}t.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+y)}const J={[$i]:s.REPEAT,[pn]:s.CLAMP_TO_EDGE,[ha]:s.MIRRORED_REPEAT},ie={[Xt]:s.NEAREST,[hu]:s.NEAREST_MIPMAP_NEAREST,[Gs]:s.NEAREST_MIPMAP_LINEAR,[Wt]:s.LINEAR,[ao]:s.LINEAR_MIPMAP_NEAREST,[In]:s.LINEAR_MIPMAP_LINEAR},re={[gu]:s.NEVER,[bu]:s.ALWAYS,[_u]:s.LESS,[Ph]:s.LEQUAL,[vu]:s.EQUAL,[Mu]:s.GEQUAL,[xu]:s.GREATER,[yu]:s.NOTEQUAL};function pe(T,y){if(y.type===vn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Wt||y.magFilter===ao||y.magFilter===Gs||y.magFilter===In||y.minFilter===Wt||y.minFilter===ao||y.minFilter===Gs||y.minFilter===In)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,J[y.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,J[y.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,J[y.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,ie[y.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,ie[y.minFilter]),y.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,re[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Xt||y.minFilter!==Gs&&y.minFilter!==In||y.type===vn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");s.texParameterf(T,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function le(T,y){let V=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",A));const Q=y.source;let te=u.get(Q);te===void 0&&(te={},u.set(Q,te));const Z=W(y);if(Z!==T.__cacheKey){te[Z]===void 0&&(te[Z]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,V=!0),te[Z].usedTimes++;const be=te[T.__cacheKey];be!==void 0&&(te[T.__cacheKey].usedTimes--,be.usedTimes===0&&M(y)),T.__cacheKey=Z,T.__webglTexture=te[Z].texture}return V}function B(T,y,V){let Q=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Q=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Q=s.TEXTURE_3D);const te=le(T,y),Z=y.source;t.bindTexture(Q,T.__webglTexture,s.TEXTURE0+V);const be=n.get(Z);if(Z.version!==be.__version||te===!0){t.activeTexture(s.TEXTURE0+V);const de=Be.getPrimaries(Be.workingColorSpace),ge=y.colorSpace===Hn?null:Be.getPrimaries(y.colorSpace),Ye=y.colorSpace===Hn||de===ge?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let se=_(y.image,!1,i.maxTextureSize);se=lt(y,se);const _e=r.convert(y.format,y.colorSpace),Re=r.convert(y.type);let Ie=b(y.internalFormat,_e,Re,y.colorSpace,y.isVideoTexture);pe(Q,y);let ve;const qe=y.mipmaps,Fe=y.isVideoTexture!==!0,ot=be.__version===void 0||te===!0,U=Z.dataReady,ce=L(y,se);if(y.isDepthTexture)Ie=x(y.format===Zi,y.type),ot&&(Fe?t.texStorage2D(s.TEXTURE_2D,1,Ie,se.width,se.height):t.texImage2D(s.TEXTURE_2D,0,Ie,se.width,se.height,0,_e,Re,null));else if(y.isDataTexture)if(qe.length>0){Fe&&ot&&t.texStorage2D(s.TEXTURE_2D,ce,Ie,qe[0].width,qe[0].height);for(let $=0,ee=qe.length;$<ee;$++)ve=qe[$],Fe?U&&t.texSubImage2D(s.TEXTURE_2D,$,0,0,ve.width,ve.height,_e,Re,ve.data):t.texImage2D(s.TEXTURE_2D,$,Ie,ve.width,ve.height,0,_e,Re,ve.data);y.generateMipmaps=!1}else Fe?(ot&&t.texStorage2D(s.TEXTURE_2D,ce,Ie,se.width,se.height),U&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,se.width,se.height,_e,Re,se.data)):t.texImage2D(s.TEXTURE_2D,0,Ie,se.width,se.height,0,_e,Re,se.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Fe&&ot&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ce,Ie,qe[0].width,qe[0].height,se.depth);for(let $=0,ee=qe.length;$<ee;$++)if(ve=qe[$],y.format!==en)if(_e!==null)if(Fe){if(U)if(y.layerUpdates.size>0){const fe=Lc(ve.width,ve.height,y.format,y.type);for(const ue of y.layerUpdates){const Ne=ve.data.subarray(ue*fe/ve.data.BYTES_PER_ELEMENT,(ue+1)*fe/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,ue,ve.width,ve.height,1,_e,Ne)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,0,ve.width,ve.height,se.depth,_e,ve.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,$,Ie,ve.width,ve.height,se.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?U&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,0,ve.width,ve.height,se.depth,_e,Re,ve.data):t.texImage3D(s.TEXTURE_2D_ARRAY,$,Ie,ve.width,ve.height,se.depth,0,_e,Re,ve.data)}else{Fe&&ot&&t.texStorage2D(s.TEXTURE_2D,ce,Ie,qe[0].width,qe[0].height);for(let $=0,ee=qe.length;$<ee;$++)ve=qe[$],y.format!==en?_e!==null?Fe?U&&t.compressedTexSubImage2D(s.TEXTURE_2D,$,0,0,ve.width,ve.height,_e,ve.data):t.compressedTexImage2D(s.TEXTURE_2D,$,Ie,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?U&&t.texSubImage2D(s.TEXTURE_2D,$,0,0,ve.width,ve.height,_e,Re,ve.data):t.texImage2D(s.TEXTURE_2D,$,Ie,ve.width,ve.height,0,_e,Re,ve.data)}else if(y.isDataArrayTexture)if(Fe){if(ot&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ce,Ie,se.width,se.height,se.depth),U)if(y.layerUpdates.size>0){const $=Lc(se.width,se.height,y.format,y.type);for(const ee of y.layerUpdates){const fe=se.data.subarray(ee*$/se.data.BYTES_PER_ELEMENT,(ee+1)*$/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ee,se.width,se.height,1,_e,Re,fe)}y.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,_e,Re,se.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ie,se.width,se.height,se.depth,0,_e,Re,se.data);else if(y.isData3DTexture)Fe?(ot&&t.texStorage3D(s.TEXTURE_3D,ce,Ie,se.width,se.height,se.depth),U&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,_e,Re,se.data)):t.texImage3D(s.TEXTURE_3D,0,Ie,se.width,se.height,se.depth,0,_e,Re,se.data);else if(y.isFramebufferTexture){if(ot)if(Fe)t.texStorage2D(s.TEXTURE_2D,ce,Ie,se.width,se.height);else{let $=se.width,ee=se.height;for(let fe=0;fe<ce;fe++)t.texImage2D(s.TEXTURE_2D,fe,Ie,$,ee,0,_e,Re,null),$>>=1,ee>>=1}}else if(qe.length>0){if(Fe&&ot){const $=Se(qe[0]);t.texStorage2D(s.TEXTURE_2D,ce,Ie,$.width,$.height)}for(let $=0,ee=qe.length;$<ee;$++)ve=qe[$],Fe?U&&t.texSubImage2D(s.TEXTURE_2D,$,0,0,_e,Re,ve):t.texImage2D(s.TEXTURE_2D,$,Ie,_e,Re,ve);y.generateMipmaps=!1}else if(Fe){if(ot){const $=Se(se);t.texStorage2D(s.TEXTURE_2D,ce,Ie,$.width,$.height)}U&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,_e,Re,se)}else t.texImage2D(s.TEXTURE_2D,0,Ie,_e,Re,se);m(y)&&p(Q),be.__version=Z.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function q(T,y,V){if(y.image.length!==6)return;const Q=le(T,y),te=y.source;t.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+V);const Z=n.get(te);if(te.version!==Z.__version||Q===!0){t.activeTexture(s.TEXTURE0+V);const be=Be.getPrimaries(Be.workingColorSpace),de=y.colorSpace===Hn?null:Be.getPrimaries(y.colorSpace),ge=y.colorSpace===Hn||be===de?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Ye=y.isCompressedTexture||y.image[0].isCompressedTexture,se=y.image[0]&&y.image[0].isDataTexture,_e=[];for(let ee=0;ee<6;ee++)!Ye&&!se?_e[ee]=_(y.image[ee],!0,i.maxCubemapSize):_e[ee]=se?y.image[ee].image:y.image[ee],_e[ee]=lt(y,_e[ee]);const Re=_e[0],Ie=r.convert(y.format,y.colorSpace),ve=r.convert(y.type),qe=b(y.internalFormat,Ie,ve,y.colorSpace),Fe=y.isVideoTexture!==!0,ot=Z.__version===void 0||Q===!0,U=te.dataReady;let ce=L(y,Re);pe(s.TEXTURE_CUBE_MAP,y);let $;if(Ye){Fe&&ot&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ce,qe,Re.width,Re.height);for(let ee=0;ee<6;ee++){$=_e[ee].mipmaps;for(let fe=0;fe<$.length;fe++){const ue=$[fe];y.format!==en?Ie!==null?Fe?U&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe,0,0,ue.width,ue.height,Ie,ue.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe,qe,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe,0,0,ue.width,ue.height,Ie,ve,ue.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe,qe,ue.width,ue.height,0,Ie,ve,ue.data)}}}else{if($=y.mipmaps,Fe&&ot){$.length>0&&ce++;const ee=Se(_e[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ce,qe,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(se){Fe?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,_e[ee].width,_e[ee].height,Ie,ve,_e[ee].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,qe,_e[ee].width,_e[ee].height,0,Ie,ve,_e[ee].data);for(let fe=0;fe<$.length;fe++){const Ne=$[fe].image[ee].image;Fe?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe+1,0,0,Ne.width,Ne.height,Ie,ve,Ne.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe+1,qe,Ne.width,Ne.height,0,Ie,ve,Ne.data)}}else{Fe?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ie,ve,_e[ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,qe,Ie,ve,_e[ee]);for(let fe=0;fe<$.length;fe++){const ue=$[fe];Fe?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe+1,0,0,Ie,ve,ue.image[ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe+1,qe,Ie,ve,ue.image[ee])}}}m(y)&&p(s.TEXTURE_CUBE_MAP),Z.__version=te.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function j(T,y,V,Q,te,Z){const be=r.convert(V.format,V.colorSpace),de=r.convert(V.type),ge=b(V.internalFormat,be,de,V.colorSpace),Ye=n.get(y),se=n.get(V);if(se.__renderTarget=y,!Ye.__hasExternalTextures){const _e=Math.max(1,y.width>>Z),Re=Math.max(1,y.height>>Z);te===s.TEXTURE_3D||te===s.TEXTURE_2D_ARRAY?t.texImage3D(te,Z,ge,_e,Re,y.depth,0,be,de,null):t.texImage2D(te,Z,ge,_e,Re,0,be,de,null)}t.bindFramebuffer(s.FRAMEBUFFER,T),Xe(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Q,te,se.__webglTexture,0,We(y)):(te===s.TEXTURE_2D||te>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Q,te,se.__webglTexture,Z),t.bindFramebuffer(s.FRAMEBUFFER,null)}function K(T,y,V){if(s.bindRenderbuffer(s.RENDERBUFFER,T),y.depthBuffer){const Q=y.depthTexture,te=Q&&Q.isDepthTexture?Q.type:null,Z=x(y.stencilBuffer,te),be=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=We(y);Xe(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,de,Z,y.width,y.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,de,Z,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,Z,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,be,s.RENDERBUFFER,T)}else{const Q=y.textures;for(let te=0;te<Q.length;te++){const Z=Q[te],be=r.convert(Z.format,Z.colorSpace),de=r.convert(Z.type),ge=b(Z.internalFormat,be,de,Z.colorSpace),Ye=We(y);V&&Xe(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ye,ge,y.width,y.height):Xe(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ye,ge,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,ge,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function oe(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(y.depthTexture);Q.__renderTarget=y,(!Q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Y(y.depthTexture,0);const te=Q.__webglTexture,Z=We(y);if(y.depthTexture.format===Hi)Xe(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,te,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,te,0);else if(y.depthTexture.format===Zi)Xe(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,te,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Ce(T){const y=n.get(T),V=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){const Q=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Q){const te=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Q.removeEventListener("dispose",te)};Q.addEventListener("dispose",te),y.__depthDisposeCallback=te}y.__boundDepthTexture=Q}if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");oe(y.__webglFramebuffer,T)}else if(V){y.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[Q]),y.__webglDepthbuffer[Q]===void 0)y.__webglDepthbuffer[Q]=s.createRenderbuffer(),K(y.__webglDepthbuffer[Q],T,!1);else{const te=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=y.__webglDepthbuffer[Q];s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,te,s.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),K(y.__webglDepthbuffer,T,!1);else{const Q=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,te=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,te),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,te)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ee(T,y,V){const Q=n.get(T);y!==void 0&&j(Q.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&Ce(T)}function ht(T){const y=T.texture,V=n.get(T),Q=n.get(y);T.addEventListener("dispose",E);const te=T.textures,Z=T.isWebGLCubeRenderTarget===!0,be=te.length>1;if(be||(Q.__webglTexture===void 0&&(Q.__webglTexture=s.createTexture()),Q.__version=y.version,o.memory.textures++),Z){V.__webglFramebuffer=[];for(let de=0;de<6;de++)if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer[de]=[];for(let ge=0;ge<y.mipmaps.length;ge++)V.__webglFramebuffer[de][ge]=s.createFramebuffer()}else V.__webglFramebuffer[de]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer=[];for(let de=0;de<y.mipmaps.length;de++)V.__webglFramebuffer[de]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(be)for(let de=0,ge=te.length;de<ge;de++){const Ye=n.get(te[de]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=s.createTexture(),o.memory.textures++)}if(T.samples>0&&Xe(T)===!1){V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let de=0;de<te.length;de++){const ge=te[de];V.__webglColorRenderbuffer[de]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[de]);const Ye=r.convert(ge.format,ge.colorSpace),se=r.convert(ge.type),_e=b(ge.internalFormat,Ye,se,ge.colorSpace,T.isXRRenderTarget===!0),Re=We(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,Re,_e,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,V.__webglColorRenderbuffer[de])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),K(V.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Z){t.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture),pe(s.TEXTURE_CUBE_MAP,y);for(let de=0;de<6;de++)if(y.mipmaps&&y.mipmaps.length>0)for(let ge=0;ge<y.mipmaps.length;ge++)j(V.__webglFramebuffer[de][ge],T,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+de,ge);else j(V.__webglFramebuffer[de],T,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(y)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let de=0,ge=te.length;de<ge;de++){const Ye=te[de],se=n.get(Ye);t.bindTexture(s.TEXTURE_2D,se.__webglTexture),pe(s.TEXTURE_2D,Ye),j(V.__webglFramebuffer,T,Ye,s.COLOR_ATTACHMENT0+de,s.TEXTURE_2D,0),m(Ye)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let de=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(de=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(de,Q.__webglTexture),pe(de,y),y.mipmaps&&y.mipmaps.length>0)for(let ge=0;ge<y.mipmaps.length;ge++)j(V.__webglFramebuffer[ge],T,y,s.COLOR_ATTACHMENT0,de,ge);else j(V.__webglFramebuffer,T,y,s.COLOR_ATTACHMENT0,de,0);m(y)&&p(de),t.unbindTexture()}T.depthBuffer&&Ce(T)}function rt(T){const y=T.textures;for(let V=0,Q=y.length;V<Q;V++){const te=y[V];if(m(te)){const Z=w(T),be=n.get(te).__webglTexture;t.bindTexture(Z,be),p(Z),t.unbindTexture()}}}const Ve=[],P=[];function qt(T){if(T.samples>0){if(Xe(T)===!1){const y=T.textures,V=T.width,Q=T.height;let te=s.COLOR_BUFFER_BIT;const Z=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=n.get(T),de=y.length>1;if(de)for(let ge=0;ge<y.length;ge++)t.bindFramebuffer(s.FRAMEBUFFER,be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let ge=0;ge<y.length;ge++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(te|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(te|=s.STENCIL_BUFFER_BIT)),de){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,be.__webglColorRenderbuffer[ge]);const Ye=n.get(y[ge]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ye,0)}s.blitFramebuffer(0,0,V,Q,0,0,V,Q,te,s.NEAREST),l===!0&&(Ve.length=0,P.length=0,Ve.push(s.COLOR_ATTACHMENT0+ge),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Ve.push(Z),P.push(Z),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,P)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ve))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),de)for(let ge=0;ge<y.length;ge++){t.bindFramebuffer(s.FRAMEBUFFER,be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.RENDERBUFFER,be.__webglColorRenderbuffer[ge]);const Ye=n.get(y[ge]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.TEXTURE_2D,Ye,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const y=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function We(T){return Math.min(i.maxSamples,T.samples)}function Xe(T){const y=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function we(T){const y=o.render.frame;d.get(T)!==y&&(d.set(T,y),T.update())}function lt(T,y){const V=T.colorSpace,Q=T.format,te=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||V!==un&&V!==Hn&&(Be.getTransfer(V)===nt?(Q!==en||te!==Dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),y}function Se(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=k,this.setTexture2D=Y,this.setTexture2DArray=D,this.setTexture3D=X,this.setTextureCube=z,this.rebindTextures=Ee,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=qt,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=j,this.useMultisampledRTT=Xe}function j_(s,e){function t(n,i=Hn){let r;const o=Be.getTransfer(i);if(n===Dn)return s.UNSIGNED_BYTE;if(n===tl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===nl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Sh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Mh)return s.BYTE;if(n===bh)return s.SHORT;if(n===As)return s.UNSIGNED_SHORT;if(n===el)return s.INT;if(n===hi)return s.UNSIGNED_INT;if(n===vn)return s.FLOAT;if(n===Fs)return s.HALF_FLOAT;if(n===Eh)return s.ALPHA;if(n===wh)return s.RGB;if(n===en)return s.RGBA;if(n===Th)return s.LUMINANCE;if(n===Ah)return s.LUMINANCE_ALPHA;if(n===Hi)return s.DEPTH_COMPONENT;if(n===Zi)return s.DEPTH_STENCIL;if(n===Rh)return s.RED;if(n===il)return s.RED_INTEGER;if(n===Ch)return s.RG;if(n===sl)return s.RG_INTEGER;if(n===rl)return s.RGBA_INTEGER;if(n===wr||n===Tr||n===Ar||n===Rr)if(o===nt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===wr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===wr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ar)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Rr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===da||n===ua||n===fa||n===pa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===da)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ua)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===fa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===pa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ma||n===ga||n===_a)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ma||n===ga)return o===nt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===_a)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===va||n===xa||n===ya||n===Ma||n===ba||n===Sa||n===Ea||n===wa||n===Ta||n===Aa||n===Ra||n===Ca||n===Ia||n===La)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===va)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xa)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ya)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ma)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ba)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Sa)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ea)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wa)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ta)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Aa)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ra)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ca)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ia)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===La)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Cr||n===Pa||n===Da)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Cr)return o===nt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Pa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Da)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ih||n===Ua||n===Na||n===Fa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Cr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ua)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Na)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ki?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const $_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,K_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Z_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new wt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Yn({vertexShader:$_,fragmentShader:K_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new at(new is(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class J_ extends pi{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,d=null,h=null,u=null,f=null,g=null;const _=new Z_,m=t.getContextAttributes();let p=null,w=null;const b=[],x=[],L=new De;let A=null;const E=new Ot;E.viewport=new He;const C=new Ot;C.viewport=new He;const M=[E,C],v=new op;let R=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let q=b[B];return q===void 0&&(q=new Co,b[B]=q),q.getTargetRaySpace()},this.getControllerGrip=function(B){let q=b[B];return q===void 0&&(q=new Co,b[B]=q),q.getGripSpace()},this.getHand=function(B){let q=b[B];return q===void 0&&(q=new Co,b[B]=q),q.getHandSpace()};function N(B){const q=x.indexOf(B.inputSource);if(q===-1)return;const j=b[q];j!==void 0&&(j.update(B.inputSource,B.frame,c||o),j.dispatchEvent({type:B.type,data:B.inputSource}))}function W(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",Y);for(let B=0;B<b.length;B++){const q=x[B];q!==null&&(x[B]=null,b[B].disconnect(q))}R=null,k=null,_.reset(),e.setRenderTarget(p),f=null,u=null,h=null,i=null,w=null,le.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(B){if(i=B,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",W),i.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(L),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let j=null,K=null,oe=null;m.depth&&(oe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=m.stencil?Zi:Hi,K=m.stencil?Ki:hi);const Ce={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:r};h=new XRWebGLBinding(i,t),u=h.createProjectionLayer(Ce),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),w=new di(u.textureWidth,u.textureHeight,{format:en,type:Dn,depthTexture:new Hh(u.textureWidth,u.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const j={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,j),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new di(f.framebufferWidth,f.framebufferHeight,{format:en,type:Dn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),le.setContext(i),le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y(B){for(let q=0;q<B.removed.length;q++){const j=B.removed[q],K=x.indexOf(j);K>=0&&(x[K]=null,b[K].disconnect(j))}for(let q=0;q<B.added.length;q++){const j=B.added[q];let K=x.indexOf(j);if(K===-1){for(let Ce=0;Ce<b.length;Ce++)if(Ce>=x.length){x.push(j),K=Ce;break}else if(x[Ce]===null){x[Ce]=j,K=Ce;break}if(K===-1)break}const oe=b[K];oe&&oe.connect(j)}}const D=new I,X=new I;function z(B,q,j){D.setFromMatrixPosition(q.matrixWorld),X.setFromMatrixPosition(j.matrixWorld);const K=D.distanceTo(X),oe=q.projectionMatrix.elements,Ce=j.projectionMatrix.elements,Ee=oe[14]/(oe[10]-1),ht=oe[14]/(oe[10]+1),rt=(oe[9]+1)/oe[5],Ve=(oe[9]-1)/oe[5],P=(oe[8]-1)/oe[0],qt=(Ce[8]+1)/Ce[0],We=Ee*P,Xe=Ee*qt,we=K/(-P+qt),lt=we*-P;if(q.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(lt),B.translateZ(we),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),oe[10]===-1)B.projectionMatrix.copy(q.projectionMatrix),B.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{const Se=Ee+we,T=ht+we,y=We-lt,V=Xe+(K-lt),Q=rt*ht/T*Se,te=Ve*ht/T*Se;B.projectionMatrix.makePerspective(y,V,Q,te,Se,T),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function J(B,q){q===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(q.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(i===null)return;let q=B.near,j=B.far;_.texture!==null&&(_.depthNear>0&&(q=_.depthNear),_.depthFar>0&&(j=_.depthFar)),v.near=C.near=E.near=q,v.far=C.far=E.far=j,(R!==v.near||k!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),R=v.near,k=v.far),E.layers.mask=B.layers.mask|2,C.layers.mask=B.layers.mask|4,v.layers.mask=E.layers.mask|C.layers.mask;const K=B.parent,oe=v.cameras;J(v,K);for(let Ce=0;Ce<oe.length;Ce++)J(oe[Ce],K);oe.length===2?z(v,E,C):v.projectionMatrix.copy(E.projectionMatrix),ie(B,v,K)};function ie(B,q,j){j===null?B.matrix.copy(q.matrixWorld):(B.matrix.copy(j.matrixWorld),B.matrix.invert(),B.matrix.multiply(q.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(q.projectionMatrix),B.projectionMatrixInverse.copy(q.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Ji*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(B){l=B,u!==null&&(u.fixedFoveation=B),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=B)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let re=null;function pe(B,q){if(d=q.getViewerPose(c||o),g=q,d!==null){const j=d.views;f!==null&&(e.setRenderTargetFramebuffer(w,f.framebuffer),e.setRenderTarget(w));let K=!1;j.length!==v.cameras.length&&(v.cameras.length=0,K=!0);for(let Ee=0;Ee<j.length;Ee++){const ht=j[Ee];let rt=null;if(f!==null)rt=f.getViewport(ht);else{const P=h.getViewSubImage(u,ht);rt=P.viewport,Ee===0&&(e.setRenderTargetTextures(w,P.colorTexture,u.ignoreDepthValues?void 0:P.depthStencilTexture),e.setRenderTarget(w))}let Ve=M[Ee];Ve===void 0&&(Ve=new Ot,Ve.layers.enable(Ee),Ve.viewport=new He,M[Ee]=Ve),Ve.matrix.fromArray(ht.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(ht.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(rt.x,rt.y,rt.width,rt.height),Ee===0&&(v.matrix.copy(Ve.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),K===!0&&v.cameras.push(Ve)}const oe=i.enabledFeatures;if(oe&&oe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&h){const Ee=h.getDepthInformation(j[0]);Ee&&Ee.isValid&&Ee.texture&&_.init(e,Ee,i.renderState)}}for(let j=0;j<b.length;j++){const K=x[j],oe=b[j];K!==null&&oe!==void 0&&oe.update(K,q,c||o)}re&&re(B,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),g=null}const le=new Jh;le.setAnimationLoop(pe),this.setAnimationLoop=function(B){re=B},this.dispose=function(){}}}const ni=new yt,Q_=new Me;function ev(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Oh(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,w,b,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),d(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,w,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===zt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===zt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=e.get(p),b=w.envMap,x=w.envMapRotation;b&&(m.envMap.value=b,ni.copy(x),ni.x*=-1,ni.y*=-1,ni.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ni.y*=-1,ni.z*=-1),m.envMapRotation.value.setFromMatrix4(Q_.makeRotationFromEuler(ni)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===zt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function tv(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,b){const x=b.program;n.uniformBlockBinding(w,x)}function c(w,b){let x=i[w.id];x===void 0&&(g(w),x=d(w),i[w.id]=x,w.addEventListener("dispose",m));const L=b.program;n.updateUBOMapping(w,L);const A=e.render.frame;r[w.id]!==A&&(u(w),r[w.id]=A)}function d(w){const b=h();w.__bindingPointIndex=b;const x=s.createBuffer(),L=w.__size,A=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,L,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,x),x}function h(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(w){const b=i[w.id],x=w.uniforms,L=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let A=0,E=x.length;A<E;A++){const C=Array.isArray(x[A])?x[A]:[x[A]];for(let M=0,v=C.length;M<v;M++){const R=C[M];if(f(R,A,M,L)===!0){const k=R.__offset,N=Array.isArray(R.value)?R.value:[R.value];let W=0;for(let Y=0;Y<N.length;Y++){const D=N[Y],X=_(D);typeof D=="number"||typeof D=="boolean"?(R.__data[0]=D,s.bufferSubData(s.UNIFORM_BUFFER,k+W,R.__data)):D.isMatrix3?(R.__data[0]=D.elements[0],R.__data[1]=D.elements[1],R.__data[2]=D.elements[2],R.__data[3]=0,R.__data[4]=D.elements[3],R.__data[5]=D.elements[4],R.__data[6]=D.elements[5],R.__data[7]=0,R.__data[8]=D.elements[6],R.__data[9]=D.elements[7],R.__data[10]=D.elements[8],R.__data[11]=0):(D.toArray(R.__data,W),W+=X.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,k,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(w,b,x,L){const A=w.value,E=b+"_"+x;if(L[E]===void 0)return typeof A=="number"||typeof A=="boolean"?L[E]=A:L[E]=A.clone(),!0;{const C=L[E];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return L[E]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function g(w){const b=w.uniforms;let x=0;const L=16;for(let E=0,C=b.length;E<C;E++){const M=Array.isArray(b[E])?b[E]:[b[E]];for(let v=0,R=M.length;v<R;v++){const k=M[v],N=Array.isArray(k.value)?k.value:[k.value];for(let W=0,Y=N.length;W<Y;W++){const D=N[W],X=_(D),z=x%L,J=z%X.boundary,ie=z+J;x+=J,ie!==0&&L-ie<X.storage&&(x+=L-ie),k.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=x,x+=X.storage}}}const A=x%L;return A>0&&(x+=L-A),w.__size=x,w.__cache={},this}function _(w){const b={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),b}function m(w){const b=w.target;b.removeEventListener("dispose",m);const x=o.indexOf(b.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function p(){for(const w in i)s.deleteBuffer(i[w]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}class nv{constructor(e={}){const{canvas:t=ku(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const w=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ze,this.toneMapping=Wn,this.toneMappingExposure=1;const x=this;let L=!1,A=0,E=0,C=null,M=-1,v=null;const R=new He,k=new He;let N=null;const W=new ye(0);let Y=0,D=t.width,X=t.height,z=1,J=null,ie=null;const re=new He(0,0,D,X),pe=new He(0,0,D,X);let le=!1;const B=new ul;let q=!1,j=!1;this.transmissionResolutionScale=1;const K=new Me,oe=new Me,Ce=new I,Ee=new He,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let rt=!1;function Ve(){return C===null?z:1}let P=n;function qt(S,F){return t.getContext(S,F)}try{const S={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qa}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",fe,!1),t.addEventListener("webglcontextcreationerror",ue,!1),P===null){const F="webgl2";if(P=qt(F,S),P===null)throw qt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let We,Xe,we,lt,Se,T,y,V,Q,te,Z,be,de,ge,Ye,se,_e,Re,Ie,ve,qe,Fe,ot,U;function ce(){We=new u0(P),We.init(),Fe=new j_(P,We),Xe=new r0(P,We,e,Fe),we=new q_(P,We),Xe.reverseDepthBuffer&&u&&we.buffers.depth.setReversed(!0),lt=new m0(P),Se=new D_,T=new Y_(P,We,we,Se,Xe,Fe,lt),y=new a0(x),V=new d0(x),Q=new Mp(P),ot=new i0(P,Q),te=new f0(P,Q,lt,ot),Z=new _0(P,te,Q,lt),Ie=new g0(P,Xe,T),se=new o0(Se),be=new P_(x,y,V,We,Xe,ot,se),de=new ev(x,Se),ge=new N_,Ye=new V_(We),Re=new n0(x,y,V,we,Z,f,l),_e=new W_(x,Z,Xe),U=new tv(P,lt,Xe,we),ve=new s0(P,We,lt),qe=new p0(P,We,lt),lt.programs=be.programs,x.capabilities=Xe,x.extensions=We,x.properties=Se,x.renderLists=ge,x.shadowMap=_e,x.state=we,x.info=lt}ce();const $=new J_(x,P);this.xr=$,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const S=We.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=We.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(S){S!==void 0&&(z=S,this.setSize(D,X,!1))},this.getSize=function(S){return S.set(D,X)},this.setSize=function(S,F,H=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=S,X=F,t.width=Math.floor(S*z),t.height=Math.floor(F*z),H===!0&&(t.style.width=S+"px",t.style.height=F+"px"),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(D*z,X*z).floor()},this.setDrawingBufferSize=function(S,F,H){D=S,X=F,z=H,t.width=Math.floor(S*H),t.height=Math.floor(F*H),this.setViewport(0,0,S,F)},this.getCurrentViewport=function(S){return S.copy(R)},this.getViewport=function(S){return S.copy(re)},this.setViewport=function(S,F,H,G){S.isVector4?re.set(S.x,S.y,S.z,S.w):re.set(S,F,H,G),we.viewport(R.copy(re).multiplyScalar(z).round())},this.getScissor=function(S){return S.copy(pe)},this.setScissor=function(S,F,H,G){S.isVector4?pe.set(S.x,S.y,S.z,S.w):pe.set(S,F,H,G),we.scissor(k.copy(pe).multiplyScalar(z).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(S){we.setScissorTest(le=S)},this.setOpaqueSort=function(S){J=S},this.setTransparentSort=function(S){ie=S},this.getClearColor=function(S){return S.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(S=!0,F=!0,H=!0){let G=0;if(S){let O=!1;if(C!==null){const ne=C.texture.format;O=ne===rl||ne===sl||ne===il}if(O){const ne=C.texture.type,he=ne===Dn||ne===hi||ne===As||ne===Ki||ne===tl||ne===nl,me=Re.getClearColor(),xe=Re.getClearAlpha(),Le=me.r,Pe=me.g,Te=me.b;he?(g[0]=Le,g[1]=Pe,g[2]=Te,g[3]=xe,P.clearBufferuiv(P.COLOR,0,g)):(_[0]=Le,_[1]=Pe,_[2]=Te,_[3]=xe,P.clearBufferiv(P.COLOR,0,_))}else G|=P.COLOR_BUFFER_BIT}F&&(G|=P.DEPTH_BUFFER_BIT),H&&(G|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),Re.dispose(),ge.dispose(),Ye.dispose(),Se.dispose(),y.dispose(),V.dispose(),Z.dispose(),ot.dispose(),U.dispose(),be.dispose(),$.dispose(),$.removeEventListener("sessionstart",Cl),$.removeEventListener("sessionend",Il),$n.stop()};function ee(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const S=lt.autoReset,F=_e.enabled,H=_e.autoUpdate,G=_e.needsUpdate,O=_e.type;ce(),lt.autoReset=S,_e.enabled=F,_e.autoUpdate=H,_e.needsUpdate=G,_e.type=O}function ue(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ne(S){const F=S.target;F.removeEventListener("dispose",Ne),ft(F)}function ft(S){Ct(S),Se.remove(S)}function Ct(S){const F=Se.get(S).programs;F!==void 0&&(F.forEach(function(H){be.releaseProgram(H)}),S.isShaderMaterial&&be.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,H,G,O,ne){F===null&&(F=ht);const he=O.isMesh&&O.matrixWorld.determinant()<0,me=Cd(S,F,H,G,O);we.setMaterial(G,he);let xe=H.index,Le=1;if(G.wireframe===!0){if(xe=te.getWireframeAttribute(H),xe===void 0)return;Le=2}const Pe=H.drawRange,Te=H.attributes.position;let je=Pe.start*Le,Je=(Pe.start+Pe.count)*Le;ne!==null&&(je=Math.max(je,ne.start*Le),Je=Math.min(Je,(ne.start+ne.count)*Le)),xe!==null?(je=Math.max(je,0),Je=Math.min(Je,xe.count)):Te!=null&&(je=Math.max(je,0),Je=Math.min(Je,Te.count));const _t=Je-je;if(_t<0||_t===1/0)return;ot.setup(O,G,me,H,xe);let pt,Ke=ve;if(xe!==null&&(pt=Q.get(xe),Ke=qe,Ke.setIndex(pt)),O.isMesh)G.wireframe===!0?(we.setLineWidth(G.wireframeLinewidth*Ve()),Ke.setMode(P.LINES)):Ke.setMode(P.TRIANGLES);else if(O.isLine){let Ae=G.linewidth;Ae===void 0&&(Ae=1),we.setLineWidth(Ae*Ve()),O.isLineSegments?Ke.setMode(P.LINES):O.isLineLoop?Ke.setMode(P.LINE_LOOP):Ke.setMode(P.LINE_STRIP)}else O.isPoints?Ke.setMode(P.POINTS):O.isSprite&&Ke.setMode(P.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)ii("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ke.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(We.get("WEBGL_multi_draw"))Ke.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ae=O._multiDrawStarts,At=O._multiDrawCounts,Qe=O._multiDrawCount,rn=xe?Q.get(xe).bytesPerElement:1,gi=Se.get(G).currentProgram.getUniforms();for(let Vt=0;Vt<Qe;Vt++)gi.setValue(P,"_gl_DrawID",Vt),Ke.render(Ae[Vt]/rn,At[Vt])}else if(O.isInstancedMesh)Ke.renderInstances(je,_t,O.count);else if(H.isInstancedBufferGeometry){const Ae=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,At=Math.min(H.instanceCount,Ae);Ke.renderInstances(je,_t,At)}else Ke.render(je,_t)};function et(S,F,H){S.transparent===!0&&S.side===Cn&&S.forceSinglePass===!1?(S.side=zt,S.needsUpdate=!0,Hs(S,F,H),S.side=qn,S.needsUpdate=!0,Hs(S,F,H),S.side=Cn):Hs(S,F,H)}this.compile=function(S,F,H=null){H===null&&(H=S),p=Ye.get(H),p.init(F),b.push(p),H.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),S!==H&&S.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const G=new Set;return S.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ne=O.material;if(ne)if(Array.isArray(ne))for(let he=0;he<ne.length;he++){const me=ne[he];et(me,H,O),G.add(me)}else et(ne,H,O),G.add(ne)}),p=b.pop(),G},this.compileAsync=function(S,F,H=null){const G=this.compile(S,F,H);return new Promise(O=>{function ne(){if(G.forEach(function(he){Se.get(he).currentProgram.isReady()&&G.delete(he)}),G.size===0){O(S);return}setTimeout(ne,10)}We.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let sn=null;function Mn(S){sn&&sn(S)}function Cl(){$n.stop()}function Il(){$n.start()}const $n=new Jh;$n.setAnimationLoop(Mn),typeof self<"u"&&$n.setContext(self),this.setAnimationLoop=function(S){sn=S,$.setAnimationLoop(S),S===null?$n.stop():$n.start()},$.addEventListener("sessionstart",Cl),$.addEventListener("sessionend",Il),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(F),F=$.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,F,C),p=Ye.get(S,b.length),p.init(F),b.push(p),oe.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),B.setFromProjectionMatrix(oe),j=this.localClippingEnabled,q=se.init(this.clippingPlanes,j),m=ge.get(S,w.length),m.init(),w.push(m),$.enabled===!0&&$.isPresenting===!0){const ne=x.xr.getDepthSensingMesh();ne!==null&&ro(ne,F,-1/0,x.sortObjects)}ro(S,F,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(J,ie),rt=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,rt&&Re.addToRenderList(m,S),this.info.render.frame++,q===!0&&se.beginShadows();const H=p.state.shadowsArray;_e.render(H,S,F),q===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,O=m.transmissive;if(p.setupLights(),F.isArrayCamera){const ne=F.cameras;if(O.length>0)for(let he=0,me=ne.length;he<me;he++){const xe=ne[he];Pl(G,O,S,xe)}rt&&Re.render(S);for(let he=0,me=ne.length;he<me;he++){const xe=ne[he];Ll(m,S,xe,xe.viewport)}}else O.length>0&&Pl(G,O,S,F),rt&&Re.render(S),Ll(m,S,F);C!==null&&E===0&&(T.updateMultisampleRenderTarget(C),T.updateRenderTargetMipmap(C)),S.isScene===!0&&S.onAfterRender(x,S,F),ot.resetDefaultState(),M=-1,v=null,b.pop(),b.length>0?(p=b[b.length-1],q===!0&&se.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function ro(S,F,H,G){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)H=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||B.intersectsSprite(S)){G&&Ee.setFromMatrixPosition(S.matrixWorld).applyMatrix4(oe);const he=Z.update(S),me=S.material;me.visible&&m.push(S,he,me,H,Ee.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||B.intersectsObject(S))){const he=Z.update(S),me=S.material;if(G&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ee.copy(S.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),Ee.copy(he.boundingSphere.center)),Ee.applyMatrix4(S.matrixWorld).applyMatrix4(oe)),Array.isArray(me)){const xe=he.groups;for(let Le=0,Pe=xe.length;Le<Pe;Le++){const Te=xe[Le],je=me[Te.materialIndex];je&&je.visible&&m.push(S,he,je,H,Ee.z,Te)}}else me.visible&&m.push(S,he,me,H,Ee.z,null)}}const ne=S.children;for(let he=0,me=ne.length;he<me;he++)ro(ne[he],F,H,G)}function Ll(S,F,H,G){const O=S.opaque,ne=S.transmissive,he=S.transparent;p.setupLightsView(H),q===!0&&se.setGlobalState(x.clippingPlanes,H),G&&we.viewport(R.copy(G)),O.length>0&&Vs(O,F,H),ne.length>0&&Vs(ne,F,H),he.length>0&&Vs(he,F,H),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function Pl(S,F,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new di(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float")?Fs:Dn,minFilter:In,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Be.workingColorSpace}));const ne=p.state.transmissionRenderTarget[G.id],he=G.viewport||R;ne.setSize(he.z*x.transmissionResolutionScale,he.w*x.transmissionResolutionScale);const me=x.getRenderTarget();x.setRenderTarget(ne),x.getClearColor(W),Y=x.getClearAlpha(),Y<1&&x.setClearColor(16777215,.5),x.clear(),rt&&Re.render(H);const xe=x.toneMapping;x.toneMapping=Wn;const Le=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),q===!0&&se.setGlobalState(x.clippingPlanes,G),Vs(S,H,G),T.updateMultisampleRenderTarget(ne),T.updateRenderTargetMipmap(ne),We.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let Te=0,je=F.length;Te<je;Te++){const Je=F[Te],_t=Je.object,pt=Je.geometry,Ke=Je.material,Ae=Je.group;if(Ke.side===Cn&&_t.layers.test(G.layers)){const At=Ke.side;Ke.side=zt,Ke.needsUpdate=!0,Dl(_t,H,G,pt,Ke,Ae),Ke.side=At,Ke.needsUpdate=!0,Pe=!0}}Pe===!0&&(T.updateMultisampleRenderTarget(ne),T.updateRenderTargetMipmap(ne))}x.setRenderTarget(me),x.setClearColor(W,Y),Le!==void 0&&(G.viewport=Le),x.toneMapping=xe}function Vs(S,F,H){const G=F.isScene===!0?F.overrideMaterial:null;for(let O=0,ne=S.length;O<ne;O++){const he=S[O],me=he.object,xe=he.geometry,Le=G===null?he.material:G,Pe=he.group;me.layers.test(H.layers)&&Dl(me,F,H,xe,Le,Pe)}}function Dl(S,F,H,G,O,ne){S.onBeforeRender(x,F,H,G,O,ne),S.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),O.onBeforeRender(x,F,H,G,S,ne),O.transparent===!0&&O.side===Cn&&O.forceSinglePass===!1?(O.side=zt,O.needsUpdate=!0,x.renderBufferDirect(H,F,G,O,S,ne),O.side=qn,O.needsUpdate=!0,x.renderBufferDirect(H,F,G,O,S,ne),O.side=Cn):x.renderBufferDirect(H,F,G,O,S,ne),S.onAfterRender(x,F,H,G,O,ne)}function Hs(S,F,H){F.isScene!==!0&&(F=ht);const G=Se.get(S),O=p.state.lights,ne=p.state.shadowsArray,he=O.state.version,me=be.getParameters(S,O.state,ne,F,H),xe=be.getProgramCacheKey(me);let Le=G.programs;G.environment=S.isMeshStandardMaterial?F.environment:null,G.fog=F.fog,G.envMap=(S.isMeshStandardMaterial?V:y).get(S.envMap||G.environment),G.envMapRotation=G.environment!==null&&S.envMap===null?F.environmentRotation:S.envMapRotation,Le===void 0&&(S.addEventListener("dispose",Ne),Le=new Map,G.programs=Le);let Pe=Le.get(xe);if(Pe!==void 0){if(G.currentProgram===Pe&&G.lightsStateVersion===he)return Nl(S,me),Pe}else me.uniforms=be.getUniforms(S),S.onBeforeCompile(me,x),Pe=be.acquireProgram(me,xe),Le.set(xe,Pe),G.uniforms=me.uniforms;const Te=G.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Te.clippingPlanes=se.uniform),Nl(S,me),G.needsLights=Ld(S),G.lightsStateVersion=he,G.needsLights&&(Te.ambientLightColor.value=O.state.ambient,Te.lightProbe.value=O.state.probe,Te.directionalLights.value=O.state.directional,Te.directionalLightShadows.value=O.state.directionalShadow,Te.spotLights.value=O.state.spot,Te.spotLightShadows.value=O.state.spotShadow,Te.rectAreaLights.value=O.state.rectArea,Te.ltc_1.value=O.state.rectAreaLTC1,Te.ltc_2.value=O.state.rectAreaLTC2,Te.pointLights.value=O.state.point,Te.pointLightShadows.value=O.state.pointShadow,Te.hemisphereLights.value=O.state.hemi,Te.directionalShadowMap.value=O.state.directionalShadowMap,Te.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Te.spotShadowMap.value=O.state.spotShadowMap,Te.spotLightMatrix.value=O.state.spotLightMatrix,Te.spotLightMap.value=O.state.spotLightMap,Te.pointShadowMap.value=O.state.pointShadowMap,Te.pointShadowMatrix.value=O.state.pointShadowMatrix),G.currentProgram=Pe,G.uniformsList=null,Pe}function Ul(S){if(S.uniformsList===null){const F=S.currentProgram.getUniforms();S.uniformsList=Lr.seqWithValue(F.seq,S.uniforms)}return S.uniformsList}function Nl(S,F){const H=Se.get(S);H.outputColorSpace=F.outputColorSpace,H.batching=F.batching,H.batchingColor=F.batchingColor,H.instancing=F.instancing,H.instancingColor=F.instancingColor,H.instancingMorph=F.instancingMorph,H.skinning=F.skinning,H.morphTargets=F.morphTargets,H.morphNormals=F.morphNormals,H.morphColors=F.morphColors,H.morphTargetsCount=F.morphTargetsCount,H.numClippingPlanes=F.numClippingPlanes,H.numIntersection=F.numClipIntersection,H.vertexAlphas=F.vertexAlphas,H.vertexTangents=F.vertexTangents,H.toneMapping=F.toneMapping}function Cd(S,F,H,G,O){F.isScene!==!0&&(F=ht),T.resetTextureUnits();const ne=F.fog,he=G.isMeshStandardMaterial?F.environment:null,me=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:un,xe=(G.isMeshStandardMaterial?V:y).get(G.envMap||he),Le=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Pe=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Te=!!H.morphAttributes.position,je=!!H.morphAttributes.normal,Je=!!H.morphAttributes.color;let _t=Wn;G.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(_t=x.toneMapping);const pt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ke=pt!==void 0?pt.length:0,Ae=Se.get(G),At=p.state.lights;if(q===!0&&(j===!0||S!==v)){const Dt=S===v&&G.id===M;se.setState(G,S,Dt)}let Qe=!1;G.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==At.state.version||Ae.outputColorSpace!==me||O.isBatchedMesh&&Ae.batching===!1||!O.isBatchedMesh&&Ae.batching===!0||O.isBatchedMesh&&Ae.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ae.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ae.instancing===!1||!O.isInstancedMesh&&Ae.instancing===!0||O.isSkinnedMesh&&Ae.skinning===!1||!O.isSkinnedMesh&&Ae.skinning===!0||O.isInstancedMesh&&Ae.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ae.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ae.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ae.instancingMorph===!1&&O.morphTexture!==null||Ae.envMap!==xe||G.fog===!0&&Ae.fog!==ne||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==se.numPlanes||Ae.numIntersection!==se.numIntersection)||Ae.vertexAlphas!==Le||Ae.vertexTangents!==Pe||Ae.morphTargets!==Te||Ae.morphNormals!==je||Ae.morphColors!==Je||Ae.toneMapping!==_t||Ae.morphTargetsCount!==Ke)&&(Qe=!0):(Qe=!0,Ae.__version=G.version);let rn=Ae.currentProgram;Qe===!0&&(rn=Hs(G,F,O));let gi=!1,Vt=!1,ls=!1;const dt=rn.getUniforms(),Yt=Ae.uniforms;if(we.useProgram(rn.program)&&(gi=!0,Vt=!0,ls=!0),G.id!==M&&(M=G.id,Vt=!0),gi||v!==S){we.buffers.depth.getReversed()?(K.copy(S.projectionMatrix),Vu(K),Hu(K),dt.setValue(P,"projectionMatrix",K)):dt.setValue(P,"projectionMatrix",S.projectionMatrix),dt.setValue(P,"viewMatrix",S.matrixWorldInverse);const Bt=dt.map.cameraPosition;Bt!==void 0&&Bt.setValue(P,Ce.setFromMatrixPosition(S.matrixWorld)),Xe.logarithmicDepthBuffer&&dt.setValue(P,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&dt.setValue(P,"isOrthographic",S.isOrthographicCamera===!0),v!==S&&(v=S,Vt=!0,ls=!0)}if(O.isSkinnedMesh){dt.setOptional(P,O,"bindMatrix"),dt.setOptional(P,O,"bindMatrixInverse");const Dt=O.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),dt.setValue(P,"boneTexture",Dt.boneTexture,T))}O.isBatchedMesh&&(dt.setOptional(P,O,"batchingTexture"),dt.setValue(P,"batchingTexture",O._matricesTexture,T),dt.setOptional(P,O,"batchingIdTexture"),dt.setValue(P,"batchingIdTexture",O._indirectTexture,T),dt.setOptional(P,O,"batchingColorTexture"),O._colorsTexture!==null&&dt.setValue(P,"batchingColorTexture",O._colorsTexture,T));const jt=H.morphAttributes;if((jt.position!==void 0||jt.normal!==void 0||jt.color!==void 0)&&Ie.update(O,H,rn),(Vt||Ae.receiveShadow!==O.receiveShadow)&&(Ae.receiveShadow=O.receiveShadow,dt.setValue(P,"receiveShadow",O.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Yt.envMap.value=xe,Yt.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&F.environment!==null&&(Yt.envMapIntensity.value=F.environmentIntensity),Vt&&(dt.setValue(P,"toneMappingExposure",x.toneMappingExposure),Ae.needsLights&&Id(Yt,ls),ne&&G.fog===!0&&de.refreshFogUniforms(Yt,ne),de.refreshMaterialUniforms(Yt,G,z,X,p.state.transmissionRenderTarget[S.id]),Lr.upload(P,Ul(Ae),Yt,T)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Lr.upload(P,Ul(Ae),Yt,T),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&dt.setValue(P,"center",O.center),dt.setValue(P,"modelViewMatrix",O.modelViewMatrix),dt.setValue(P,"normalMatrix",O.normalMatrix),dt.setValue(P,"modelMatrix",O.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Dt=G.uniformsGroups;for(let Bt=0,oo=Dt.length;Bt<oo;Bt++){const Kn=Dt[Bt];U.update(Kn,rn),U.bind(Kn,rn)}}return rn}function Id(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function Ld(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(S,F,H){Se.get(S.texture).__webglTexture=F,Se.get(S.depthTexture).__webglTexture=H;const G=Se.get(S);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||We.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,F){const H=Se.get(S);H.__webglFramebuffer=F,H.__useDefaultFramebuffer=F===void 0};const Pd=P.createFramebuffer();this.setRenderTarget=function(S,F=0,H=0){C=S,A=F,E=H;let G=!0,O=null,ne=!1,he=!1;if(S){const xe=Se.get(S);if(xe.__useDefaultFramebuffer!==void 0)we.bindFramebuffer(P.FRAMEBUFFER,null),G=!1;else if(xe.__webglFramebuffer===void 0)T.setupRenderTarget(S);else if(xe.__hasExternalTextures)T.rebindTextures(S,Se.get(S.texture).__webglTexture,Se.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Te=S.depthTexture;if(xe.__boundDepthTexture!==Te){if(Te!==null&&Se.has(Te)&&(S.width!==Te.image.width||S.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(S)}}const Le=S.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(he=!0);const Pe=Se.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Pe[F])?O=Pe[F][H]:O=Pe[F],ne=!0):S.samples>0&&T.useMultisampledRTT(S)===!1?O=Se.get(S).__webglMultisampledFramebuffer:Array.isArray(Pe)?O=Pe[H]:O=Pe,R.copy(S.viewport),k.copy(S.scissor),N=S.scissorTest}else R.copy(re).multiplyScalar(z).floor(),k.copy(pe).multiplyScalar(z).floor(),N=le;if(H!==0&&(O=Pd),we.bindFramebuffer(P.FRAMEBUFFER,O)&&G&&we.drawBuffers(S,O),we.viewport(R),we.scissor(k),we.setScissorTest(N),ne){const xe=Se.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+F,xe.__webglTexture,H)}else if(he){const xe=Se.get(S.texture),Le=F;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,xe.__webglTexture,H,Le)}else if(S!==null&&H!==0){const xe=Se.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,xe.__webglTexture,H)}M=-1},this.readRenderTargetPixels=function(S,F,H,G,O,ne,he){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=Se.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&he!==void 0&&(me=me[he]),me){we.bindFramebuffer(P.FRAMEBUFFER,me);try{const xe=S.texture,Le=xe.format,Pe=xe.type;if(!Xe.textureFormatReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-G&&H>=0&&H<=S.height-O&&P.readPixels(F,H,G,O,Fe.convert(Le),Fe.convert(Pe),ne)}finally{const xe=C!==null?Se.get(C).__webglFramebuffer:null;we.bindFramebuffer(P.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=async function(S,F,H,G,O,ne,he){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=Se.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&he!==void 0&&(me=me[he]),me){const xe=S.texture,Le=xe.format,Pe=xe.type;if(!Xe.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=S.width-G&&H>=0&&H<=S.height-O){we.bindFramebuffer(P.FRAMEBUFFER,me);const Te=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Te),P.bufferData(P.PIXEL_PACK_BUFFER,ne.byteLength,P.STREAM_READ),P.readPixels(F,H,G,O,Fe.convert(Le),Fe.convert(Pe),0);const je=C!==null?Se.get(C).__webglFramebuffer:null;we.bindFramebuffer(P.FRAMEBUFFER,je);const Je=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await zu(P,Je,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Te),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ne),P.deleteBuffer(Te),P.deleteSync(Je),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,F=null,H=0){S.isTexture!==!0&&(ii("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,S=arguments[1]);const G=Math.pow(2,-H),O=Math.floor(S.image.width*G),ne=Math.floor(S.image.height*G),he=F!==null?F.x:0,me=F!==null?F.y:0;T.setTexture2D(S,0),P.copyTexSubImage2D(P.TEXTURE_2D,H,0,0,he,me,O,ne),we.unbindTexture()};const Dd=P.createFramebuffer(),Ud=P.createFramebuffer();this.copyTextureToTexture=function(S,F,H=null,G=null,O=0,ne=null){S.isTexture!==!0&&(ii("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,S=arguments[1],F=arguments[2],ne=arguments[3]||0,H=null),ne===null&&(O!==0?(ii("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ne=O,O=0):ne=0);let he,me,xe,Le,Pe,Te,je,Je,_t;const pt=S.isCompressedTexture?S.mipmaps[ne]:S.image;if(H!==null)he=H.max.x-H.min.x,me=H.max.y-H.min.y,xe=H.isBox3?H.max.z-H.min.z:1,Le=H.min.x,Pe=H.min.y,Te=H.isBox3?H.min.z:0;else{const jt=Math.pow(2,-O);he=Math.floor(pt.width*jt),me=Math.floor(pt.height*jt),S.isDataArrayTexture?xe=pt.depth:S.isData3DTexture?xe=Math.floor(pt.depth*jt):xe=1,Le=0,Pe=0,Te=0}G!==null?(je=G.x,Je=G.y,_t=G.z):(je=0,Je=0,_t=0);const Ke=Fe.convert(F.format),Ae=Fe.convert(F.type);let At;F.isData3DTexture?(T.setTexture3D(F,0),At=P.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(T.setTexture2DArray(F,0),At=P.TEXTURE_2D_ARRAY):(T.setTexture2D(F,0),At=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,F.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,F.unpackAlignment);const Qe=P.getParameter(P.UNPACK_ROW_LENGTH),rn=P.getParameter(P.UNPACK_IMAGE_HEIGHT),gi=P.getParameter(P.UNPACK_SKIP_PIXELS),Vt=P.getParameter(P.UNPACK_SKIP_ROWS),ls=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,pt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,pt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Le),P.pixelStorei(P.UNPACK_SKIP_ROWS,Pe),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Te);const dt=S.isDataArrayTexture||S.isData3DTexture,Yt=F.isDataArrayTexture||F.isData3DTexture;if(S.isDepthTexture){const jt=Se.get(S),Dt=Se.get(F),Bt=Se.get(jt.__renderTarget),oo=Se.get(Dt.__renderTarget);we.bindFramebuffer(P.READ_FRAMEBUFFER,Bt.__webglFramebuffer),we.bindFramebuffer(P.DRAW_FRAMEBUFFER,oo.__webglFramebuffer);for(let Kn=0;Kn<xe;Kn++)dt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Se.get(S).__webglTexture,O,Te+Kn),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Se.get(F).__webglTexture,ne,_t+Kn)),P.blitFramebuffer(Le,Pe,he,me,je,Je,he,me,P.DEPTH_BUFFER_BIT,P.NEAREST);we.bindFramebuffer(P.READ_FRAMEBUFFER,null),we.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(O!==0||S.isRenderTargetTexture||Se.has(S)){const jt=Se.get(S),Dt=Se.get(F);we.bindFramebuffer(P.READ_FRAMEBUFFER,Dd),we.bindFramebuffer(P.DRAW_FRAMEBUFFER,Ud);for(let Bt=0;Bt<xe;Bt++)dt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,jt.__webglTexture,O,Te+Bt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,jt.__webglTexture,O),Yt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Dt.__webglTexture,ne,_t+Bt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Dt.__webglTexture,ne),O!==0?P.blitFramebuffer(Le,Pe,he,me,je,Je,he,me,P.COLOR_BUFFER_BIT,P.NEAREST):Yt?P.copyTexSubImage3D(At,ne,je,Je,_t+Bt,Le,Pe,he,me):P.copyTexSubImage2D(At,ne,je,Je,Le,Pe,he,me);we.bindFramebuffer(P.READ_FRAMEBUFFER,null),we.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Yt?S.isDataTexture||S.isData3DTexture?P.texSubImage3D(At,ne,je,Je,_t,he,me,xe,Ke,Ae,pt.data):F.isCompressedArrayTexture?P.compressedTexSubImage3D(At,ne,je,Je,_t,he,me,xe,Ke,pt.data):P.texSubImage3D(At,ne,je,Je,_t,he,me,xe,Ke,Ae,pt):S.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,ne,je,Je,he,me,Ke,Ae,pt.data):S.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,ne,je,Je,pt.width,pt.height,Ke,pt.data):P.texSubImage2D(P.TEXTURE_2D,ne,je,Je,he,me,Ke,Ae,pt);P.pixelStorei(P.UNPACK_ROW_LENGTH,Qe),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,rn),P.pixelStorei(P.UNPACK_SKIP_PIXELS,gi),P.pixelStorei(P.UNPACK_SKIP_ROWS,Vt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ls),ne===0&&F.generateMipmaps&&P.generateMipmap(At),we.unbindTexture()},this.copyTextureToTexture3D=function(S,F,H=null,G=null,O=0){return S.isTexture!==!0&&(ii("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,G=arguments[1]||null,S=arguments[2],F=arguments[3],O=arguments[4]||0),ii('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,F,H,G,O)},this.initRenderTarget=function(S){Se.get(S).__webglFramebuffer===void 0&&T.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?T.setTextureCube(S,0):S.isData3DTexture?T.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?T.setTexture2DArray(S,0):T.setTexture2D(S,0),we.unbindTexture()},this.resetState=function(){A=0,E=0,C=null,we.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Be._getDrawingBufferColorSpace(e),t.unpackColorSpace=Be._getUnpackColorSpace()}}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var Qt=Uint8Array,zi=Uint16Array,iv=Int32Array,id=new Qt([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),sd=new Qt([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),sv=new Qt([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),rd=function(s,e){for(var t=new zi(31),n=0;n<31;++n)t[n]=e+=1<<s[n-1];for(var i=new iv(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)i[r]=r-t[n]<<5|n;return{b:t,r:i}},od=rd(id,2),ad=od.b,rv=od.r;ad[28]=258,rv[258]=28;var ov=rd(sd,0),av=ov.b,qa=new zi(32768);for(var ct=0;ct<32768;++ct){var Vn=(ct&43690)>>1|(ct&21845)<<1;Vn=(Vn&52428)>>2|(Vn&13107)<<2,Vn=(Vn&61680)>>4|(Vn&3855)<<4,qa[ct]=((Vn&65280)>>8|(Vn&255)<<8)>>1}var Ts=(function(s,e,t){for(var n=s.length,i=0,r=new zi(e);i<n;++i)s[i]&&++r[s[i]-1];var o=new zi(e);for(i=1;i<e;++i)o[i]=o[i-1]+r[i-1]<<1;var a;if(t){a=new zi(1<<e);var l=15-e;for(i=0;i<n;++i)if(s[i])for(var c=i<<4|s[i],d=e-s[i],h=o[s[i]-1]++<<d,u=h|(1<<d)-1;h<=u;++h)a[qa[h]>>l]=c}else for(a=new zi(n),i=0;i<n;++i)s[i]&&(a[i]=qa[o[s[i]-1]++]>>15-s[i]);return a}),zs=new Qt(288);for(var ct=0;ct<144;++ct)zs[ct]=8;for(var ct=144;ct<256;++ct)zs[ct]=9;for(var ct=256;ct<280;++ct)zs[ct]=7;for(var ct=280;ct<288;++ct)zs[ct]=8;var ld=new Qt(32);for(var ct=0;ct<32;++ct)ld[ct]=5;var lv=Ts(zs,9,1),cv=Ts(ld,5,1),Wo=function(s){for(var e=s[0],t=1;t<s.length;++t)s[t]>e&&(e=s[t]);return e},cn=function(s,e,t){var n=e/8|0;return(s[n]|s[n+1]<<8)>>(e&7)&t},Xo=function(s,e){var t=e/8|0;return(s[t]|s[t+1]<<8|s[t+2]<<16)>>(e&7)},hv=function(s){return(s+7)/8|0},dv=function(s,e,t){return(t==null||t>s.length)&&(t=s.length),new Qt(s.subarray(e,t))},uv=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],hn=function(s,e,t){var n=new Error(e||uv[s]);if(n.code=s,Error.captureStackTrace&&Error.captureStackTrace(n,hn),!t)throw n;return n},fv=function(s,e,t,n){var i=s.length,r=0;if(!i||e.f&&!e.l)return t||new Qt(0);var o=!t,a=o||e.i!=2,l=e.i;o&&(t=new Qt(i*3));var c=function(ht){var rt=t.length;if(ht>rt){var Ve=new Qt(Math.max(rt*2,ht));Ve.set(t),t=Ve}},d=e.f||0,h=e.p||0,u=e.b||0,f=e.l,g=e.d,_=e.m,m=e.n,p=i*8;do{if(!f){d=cn(s,h,1);var w=cn(s,h+1,3);if(h+=3,w)if(w==1)f=lv,g=cv,_=9,m=5;else if(w==2){var A=cn(s,h,31)+257,E=cn(s,h+10,15)+4,C=A+cn(s,h+5,31)+1;h+=14;for(var M=new Qt(C),v=new Qt(19),R=0;R<E;++R)v[sv[R]]=cn(s,h+R*3,7);h+=E*3;for(var k=Wo(v),N=(1<<k)-1,W=Ts(v,k,1),R=0;R<C;){var Y=W[cn(s,h,N)];h+=Y&15;var b=Y>>4;if(b<16)M[R++]=b;else{var D=0,X=0;for(b==16?(X=3+cn(s,h,3),h+=2,D=M[R-1]):b==17?(X=3+cn(s,h,7),h+=3):b==18&&(X=11+cn(s,h,127),h+=7);X--;)M[R++]=D}}var z=M.subarray(0,A),J=M.subarray(A);_=Wo(z),m=Wo(J),f=Ts(z,_,1),g=Ts(J,m,1)}else hn(1);else{var b=hv(h)+4,x=s[b-4]|s[b-3]<<8,L=b+x;if(L>i){l&&hn(0);break}a&&c(u+x),t.set(s.subarray(b,L),u),e.b=u+=x,e.p=h=L*8,e.f=d;continue}if(h>p){l&&hn(0);break}}a&&c(u+131072);for(var ie=(1<<_)-1,re=(1<<m)-1,pe=h;;pe=h){var D=f[Xo(s,h)&ie],le=D>>4;if(h+=D&15,h>p){l&&hn(0);break}if(D||hn(2),le<256)t[u++]=le;else if(le==256){pe=h,f=null;break}else{var B=le-254;if(le>264){var R=le-257,q=id[R];B=cn(s,h,(1<<q)-1)+ad[R],h+=q}var j=g[Xo(s,h)&re],K=j>>4;j||hn(3),h+=j&15;var J=av[K];if(K>3){var q=sd[K];J+=Xo(s,h)&(1<<q)-1,h+=q}if(h>p){l&&hn(0);break}a&&c(u+131072);var oe=u+B;if(u<J){var Ce=r-J,Ee=Math.min(J,oe);for(Ce+u<0&&hn(3);u<Ee;++u)t[u]=n[Ce+u]}for(;u<oe;++u)t[u]=t[u-J]}}e.l=f,e.p=pe,e.b=u,e.f=d,f&&(d=1,e.m=_,e.d=g,e.n=m)}while(!d);return u!=t.length&&o?dv(t,0,u):t.subarray(0,u)},pv=new Qt(0),mv=function(s,e){return((s[0]&15)!=8||s[0]>>4>7||(s[0]<<8|s[1])%31)&&hn(6,"invalid zlib data"),(s[1]>>5&1)==1&&hn(6,"invalid zlib data: "+(s[1]&32?"need":"unexpected")+" dictionary"),(s[1]>>3&4)+2};function gv(s,e){return fv(s.subarray(mv(s),-4),{i:2},e,e)}var _v=typeof TextDecoder<"u"&&new TextDecoder,vv=0;try{_v.decode(pv,{stream:!0}),vv=1}catch{}function cd(s,e,t){const n=t.length-s-1;if(e>=t[n])return n-1;if(e<=t[s])return s;let i=s,r=n,o=Math.floor((i+r)/2);for(;e<t[o]||e>=t[o+1];)e<t[o]?r=o:i=o,o=Math.floor((i+r)/2);return o}function xv(s,e,t,n){const i=[],r=[],o=[];i[0]=1;for(let a=1;a<=t;++a){r[a]=e-n[s+1-a],o[a]=n[s+a]-e;let l=0;for(let c=0;c<a;++c){const d=o[c+1],h=r[a-c],u=i[c]/(d+h);i[c]=l+d*u,l=h*u}i[a]=l}return i}function yv(s,e,t,n){const i=cd(s,n,e),r=xv(i,n,s,e),o=new He(0,0,0,0);for(let a=0;a<=s;++a){const l=t[i-s+a],c=r[a],d=l.w*c;o.x+=l.x*d,o.y+=l.y*d,o.z+=l.z*d,o.w+=l.w*c}return o}function Mv(s,e,t,n,i){const r=[];for(let h=0;h<=t;++h)r[h]=0;const o=[];for(let h=0;h<=n;++h)o[h]=r.slice(0);const a=[];for(let h=0;h<=t;++h)a[h]=r.slice(0);a[0][0]=1;const l=r.slice(0),c=r.slice(0);for(let h=1;h<=t;++h){l[h]=e-i[s+1-h],c[h]=i[s+h]-e;let u=0;for(let f=0;f<h;++f){const g=c[f+1],_=l[h-f];a[h][f]=g+_;const m=a[f][h-1]/a[h][f];a[f][h]=u+g*m,u=_*m}a[h][h]=u}for(let h=0;h<=t;++h)o[0][h]=a[h][t];for(let h=0;h<=t;++h){let u=0,f=1;const g=[];for(let _=0;_<=t;++_)g[_]=r.slice(0);g[0][0]=1;for(let _=1;_<=n;++_){let m=0;const p=h-_,w=t-_;h>=_&&(g[f][0]=g[u][0]/a[w+1][p],m=g[f][0]*a[p][w]);const b=p>=-1?1:-p,x=h-1<=w?_-1:t-h;for(let A=b;A<=x;++A)g[f][A]=(g[u][A]-g[u][A-1])/a[w+1][p+A],m+=g[f][A]*a[p+A][w];h<=w&&(g[f][_]=-g[u][_-1]/a[w+1][h],m+=g[f][_]*a[h][w]),o[_][h]=m;const L=u;u=f,f=L}}let d=t;for(let h=1;h<=n;++h){for(let u=0;u<=t;++u)o[h][u]*=d;d*=t-h}return o}function bv(s,e,t,n,i){const r=i<s?i:s,o=[],a=cd(s,n,e),l=Mv(a,n,s,r,e),c=[];for(let d=0;d<t.length;++d){const h=t[d].clone(),u=h.w;h.x*=u,h.y*=u,h.z*=u,c[d]=h}for(let d=0;d<=r;++d){const h=c[a-s].clone().multiplyScalar(l[d][0]);for(let u=1;u<=s;++u)h.add(c[a-s+u].clone().multiplyScalar(l[d][u]));o[d]=h}for(let d=r+1;d<=i+1;++d)o[d]=new He(0,0,0);return o}function Sv(s,e){let t=1;for(let i=2;i<=s;++i)t*=i;let n=1;for(let i=2;i<=e;++i)n*=i;for(let i=2;i<=s-e;++i)n*=i;return t/n}function Ev(s){const e=s.length,t=[],n=[];for(let r=0;r<e;++r){const o=s[r];t[r]=new I(o.x,o.y,o.z),n[r]=o.w}const i=[];for(let r=0;r<e;++r){const o=t[r].clone();for(let a=1;a<=r;++a)o.sub(i[r-a].clone().multiplyScalar(Sv(r,a)*n[a]));i[r]=o.divideScalar(n[0])}return i}function wv(s,e,t,n,i){const r=bv(s,e,t,n,i);return Ev(r)}class Tv extends Mf{constructor(e,t,n,i,r){super();const o=t?t.length-1:0,a=n?n.length:0;this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=i||0,this.endKnot=r||o;for(let l=0;l<a;++l){const c=n[l];this.controlPoints[l]=new He(c.x,c.y,c.z,c.w)}}getPoint(e,t=new I){const n=t,i=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),r=yv(this.degree,this.knots,this.controlPoints,i);return r.w!==1&&r.divideScalar(r.w),n.set(r.x,r.y,r.z)}getTangent(e,t=new I){const n=t,i=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),r=wv(this.degree,this.knots,this.controlPoints,i,1);return n.copy(r[1]).normalize(),n}toJSON(){const e=super.toJSON();return e.degree=this.degree,e.knots=[...this.knots],e.controlPoints=this.controlPoints.map(t=>t.toArray()),e.startKnot=this.startKnot,e.endKnot=this.endKnot,e}fromJSON(e){return super.fromJSON(e),this.degree=e.degree,this.knots=[...e.knots],this.controlPoints=e.controlPoints.map(t=>new He(t[0],t[1],t[2],t[3])),this.startKnot=e.startKnot,this.endKnot=e.endKnot,this}}let ke,gt,Ft;class jn extends Un{constructor(e){super(e)}load(e,t,n,i){const r=this,o=r.path===""?rp.extractUrlBase(e):r.path,a=new gl(this.manager);a.setPath(r.path),a.setResponseType("arraybuffer"),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(l){try{t(r.parse(l,o))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}parse(e,t){if(Pv(e))ke=new Lv().parse(e);else{const i=ud(e);if(!Dv(i))throw new Error("THREE.FBXLoader: Unknown format.");if(ih(i)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+ih(i));ke=new Iv().parse(i)}const n=new $h(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new Av(n,this.manager).parse(ke)}}class Av{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){gt=this.parseConnections();const e=this.parseImages(),t=this.parseTextures(e),n=this.parseMaterials(t),i=this.parseDeformers(),r=new Rv().parse(i);return this.parseScene(i,r,n),Ft}parseConnections(){const e=new Map;return"Connections"in ke&&ke.Connections.connections.forEach(function(n){const i=n[0],r=n[1],o=n[2];e.has(i)||e.set(i,{parents:[],children:[]});const a={ID:r,relationship:o};e.get(i).parents.push(a),e.has(r)||e.set(r,{parents:[],children:[]});const l={ID:i,relationship:o};e.get(r).children.push(l)}),e}parseImages(){const e={},t={};if("Video"in ke.Objects){const n=ke.Objects.Video;for(const i in n){const r=n[i],o=parseInt(i);if(e[o]=r.RelativeFilename||r.Filename,"Content"in r){const a=r.Content instanceof ArrayBuffer&&r.Content.byteLength>0,l=typeof r.Content=="string"&&r.Content!=="";if(a||l){const c=this.parseImage(n[i]);t[r.RelativeFilename||r.Filename]=c}}}}for(const n in e){const i=e[n];t[i]!==void 0?e[n]=t[i]:e[n]=e[n].split("\\").pop()}return e}parseImage(e){const t=e.Content,n=e.RelativeFilename||e.Filename,i=n.slice(n.lastIndexOf(".")+1).toLowerCase();let r;switch(i){case"bmp":r="image/bmp";break;case"jpg":case"jpeg":r="image/jpeg";break;case"png":r="image/png";break;case"tif":r="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",n),r="image/tga";break;default:console.warn('FBXLoader: Image type "'+i+'" is not supported.');return}if(typeof t=="string")return"data:"+r+";base64,"+t;{const o=new Uint8Array(t);return window.URL.createObjectURL(new Blob([o],{type:r}))}}parseTextures(e){const t=new Map;if("Texture"in ke.Objects){const n=ke.Objects.Texture;for(const i in n){const r=this.parseTexture(n[i],e);t.set(parseInt(i),r)}}return t}parseTexture(e,t){const n=this.loadTexture(e,t);n.ID=e.id,n.name=e.attrName;const i=e.WrapModeU,r=e.WrapModeV,o=i!==void 0?i.value:0,a=r!==void 0?r.value:0;if(n.wrapS=o===0?$i:pn,n.wrapT=a===0?$i:pn,"Scaling"in e){const l=e.Scaling.value;n.repeat.x=l[0],n.repeat.y=l[1]}if("Translation"in e){const l=e.Translation.value;n.offset.x=l[0],n.offset.y=l[1]}return n}loadTexture(e,t){const n=new Set(["tga","tif","tiff","exr","dds","hdr","ktx2"]),i=e.FileName.split(".").pop().toLowerCase(),r=n.has(i)?this.manager.getHandler(`.${i}`):this.textureLoader;if(!r)return console.warn(`FBXLoader: ${i.toUpperCase()} loader not found, creating placeholder texture for`,e.RelativeFilename),new wt;const o=r.path;o||r.setPath(this.textureLoader.path);const a=gt.get(e.id).children;let l;a!==void 0&&a.length>0&&t[a[0].ID]!==void 0&&(l=t[a[0].ID],(l.indexOf("blob:")===0||l.indexOf("data:")===0)&&r.setPath(void 0));const c=r.load(l);return r.setPath(o),c}parseMaterials(e){const t=new Map;if("Material"in ke.Objects){const n=ke.Objects.Material;for(const i in n){const r=this.parseMaterial(n[i],e);r!==null&&t.set(parseInt(i),r)}}return t}parseMaterial(e,t){const n=e.id,i=e.attrName;let r=e.ShadingModel;if(typeof r=="object"&&(r=r.value),!gt.has(n))return null;const o=this.parseParameters(e,t,n);let a;switch(r.toLowerCase()){case"phong":a=new ys;break;case"lambert":a=new kf;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',r),a=new ys;break}return a.setValues(o),a.name=i,a}parseParameters(e,t,n){const i={};e.BumpFactor&&(i.bumpScale=e.BumpFactor.value),e.Diffuse?i.color=Be.toWorkingColorSpace(new ye().fromArray(e.Diffuse.value),Ze):e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(i.color=Be.toWorkingColorSpace(new ye().fromArray(e.DiffuseColor.value),Ze)),e.DisplacementFactor&&(i.displacementScale=e.DisplacementFactor.value),e.Emissive?i.emissive=Be.toWorkingColorSpace(new ye().fromArray(e.Emissive.value),Ze):e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(i.emissive=Be.toWorkingColorSpace(new ye().fromArray(e.EmissiveColor.value),Ze)),e.EmissiveFactor&&(i.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),i.opacity=1-(e.TransparencyFactor?parseFloat(e.TransparencyFactor.value):0),(i.opacity===1||i.opacity===0)&&(i.opacity=e.Opacity?parseFloat(e.Opacity.value):null,i.opacity===null&&(i.opacity=1-(e.TransparentColor?parseFloat(e.TransparentColor.value[0]):0))),i.opacity<1&&(i.transparent=!0),e.ReflectionFactor&&(i.reflectivity=e.ReflectionFactor.value),e.Shininess&&(i.shininess=e.Shininess.value),e.Specular?i.specular=Be.toWorkingColorSpace(new ye().fromArray(e.Specular.value),Ze):e.SpecularColor&&e.SpecularColor.type==="Color"&&(i.specular=Be.toWorkingColorSpace(new ye().fromArray(e.SpecularColor.value),Ze));const r=this;return gt.get(n).children.forEach(function(o){const a=o.relationship;switch(a){case"Bump":i.bumpMap=r.getTexture(t,o.ID);break;case"Maya|TEX_ao_map":i.aoMap=r.getTexture(t,o.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":i.map=r.getTexture(t,o.ID),i.map!==void 0&&(i.map.colorSpace=Ze);break;case"DisplacementColor":i.displacementMap=r.getTexture(t,o.ID);break;case"EmissiveColor":i.emissiveMap=r.getTexture(t,o.ID),i.emissiveMap!==void 0&&(i.emissiveMap.colorSpace=Ze);break;case"NormalMap":case"Maya|TEX_normal_map":i.normalMap=r.getTexture(t,o.ID);break;case"ReflectionColor":i.envMap=r.getTexture(t,o.ID),i.envMap!==void 0&&(i.envMap.mapping=Or,i.envMap.colorSpace=Ze);break;case"SpecularColor":i.specularMap=r.getTexture(t,o.ID),i.specularMap!==void 0&&(i.specularMap.colorSpace=Ze);break;case"TransparentColor":case"TransparencyFactor":i.alphaMap=r.getTexture(t,o.ID),i.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",a);break}}),i}getTexture(e,t){return"LayeredTexture"in ke.Objects&&t in ke.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=gt.get(t).children[0].ID),e.get(t)}parseDeformers(){const e={},t={};if("Deformer"in ke.Objects){const n=ke.Objects.Deformer;for(const i in n){const r=n[i],o=gt.get(parseInt(i));if(r.attrType==="Skin"){const a=this.parseSkeleton(o,n);a.ID=i,o.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),a.geometryID=o.parents[0].ID,e[i]=a}else if(r.attrType==="BlendShape"){const a={id:i};a.rawTargets=this.parseMorphTargets(o,n),a.id=i,o.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[i]=a}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){const n=[];return e.children.forEach(function(i){const r=t[i.ID];if(r.attrType!=="Cluster")return;const o={ID:i.ID,indices:[],weights:[],transformLink:new Me().fromArray(r.TransformLink.a)};"Indexes"in r&&(o.indices=r.Indexes.a,o.weights=r.Weights.a),n.push(o)}),{rawBones:n,bones:[]}}parseMorphTargets(e,t){const n=[];for(let i=0;i<e.children.length;i++){const r=e.children[i],o=t[r.ID],a={name:o.attrName,initialWeight:o.DeformPercent,id:o.id,fullWeights:o.FullWeights.a};if(o.attrType!=="BlendShapeChannel")return;a.geoID=gt.get(parseInt(r.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,n.push(a)}return n}parseScene(e,t,n){Ft=new Pt;const i=this.parseModels(e.skeletons,t,n),r=ke.Objects.Model,o=this;i.forEach(function(l){const c=r[l.ID];o.setLookAtProperties(l,c),gt.get(l.ID).parents.forEach(function(h){const u=i.get(h.ID);u!==void 0&&u.add(l)}),l.parent===null&&Ft.add(l)}),this.bindSkeleton(e.skeletons,t,i),this.addGlobalSceneSettings(),Ft.traverse(function(l){if(l.userData.transformData){l.parent&&(l.userData.transformData.parentMatrix=l.parent.matrix,l.userData.transformData.parentMatrixWorld=l.parent.matrixWorld);const c=dd(l.userData.transformData);l.applyMatrix4(c),l.updateWorldMatrix()}});const a=new Cv().parse();Ft.children.length===1&&Ft.children[0].isGroup&&(Ft.children[0].animations=a,Ft=Ft.children[0]),Ft.animations=a}parseModels(e,t,n){const i=new Map,r=ke.Objects.Model;for(const o in r){const a=parseInt(o),l=r[o],c=gt.get(a);let d=this.buildSkeleton(c,e,a,l.attrName);if(!d){switch(l.attrType){case"Camera":d=this.createCamera(c);break;case"Light":d=this.createLight(c);break;case"Mesh":d=this.createMesh(c,t,n);break;case"NurbsCurve":d=this.createCurve(c,t);break;case"LimbNode":case"Root":d=new ka;break;case"Null":default:d=new Pt;break}d.name=l.attrName?$e.sanitizeNodeName(l.attrName):"",d.userData.originalName=l.attrName,d.ID=a}this.getTransformData(d,l),i.set(a,d)}return i}buildSkeleton(e,t,n,i){let r=null;return e.parents.forEach(function(o){for(const a in t){const l=t[a];l.rawBones.forEach(function(c,d){if(c.ID===o.ID){const h=r;r=new ka,r.matrixWorld.copy(c.transformLink),r.name=i?$e.sanitizeNodeName(i):"",r.userData.originalName=i,r.ID=n,l.bones[d]=r,h!==null&&r.add(h)}})}}),r}createCamera(e){let t,n;if(e.children.forEach(function(i){const r=ke.Objects.NodeAttribute[i.ID];r!==void 0&&(n=r)}),n===void 0)t=new st;else{let i=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(i=1);let r=1;n.NearPlane!==void 0&&(r=n.NearPlane.value/1e3);let o=1e3;n.FarPlane!==void 0&&(o=n.FarPlane.value/1e3);let a=window.innerWidth,l=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(a=n.AspectWidth.value,l=n.AspectHeight.value);const c=a/l;let d=45;n.FieldOfView!==void 0&&(d=n.FieldOfView.value);const h=n.FocalLength?n.FocalLength.value:null;switch(i){case 0:t=new Ot(d,c,r,o),h!==null&&t.setFocalLength(h);break;case 1:console.warn("THREE.FBXLoader: Orthographic cameras not supported yet."),t=new st;break;default:console.warn("THREE.FBXLoader: Unknown camera type "+i+"."),t=new st;break}}return t}createLight(e){let t,n;if(e.children.forEach(function(i){const r=ke.Objects.NodeAttribute[i.ID];r!==void 0&&(n=r)}),n===void 0)t=new st;else{let i;n.LightType===void 0?i=0:i=n.LightType.value;let r=16777215;n.Color!==void 0&&(r=Be.toWorkingColorSpace(new ye().fromArray(n.Color.value),Ze));let o=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(o=0);let a=0;n.FarAttenuationEnd!==void 0&&(n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?a=0:a=n.FarAttenuationEnd.value);const l=1;switch(i){case 0:t=new qr(r,o,a,l);break;case 1:t=new Ir(r,o);break;case 2:let c=Math.PI/3;n.InnerAngle!==void 0&&(c=Et.degToRad(n.InnerAngle.value));let d=0;n.OuterAngle!==void 0&&(d=Et.degToRad(n.OuterAngle.value),d=Math.max(d,1)),t=new np(r,o,a,c,d,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+n.LightType.value+", defaulting to a PointLight."),t=new qr(r,o);break}n.CastShadows!==void 0&&n.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,n){let i,r=null,o=null;const a=[];if(e.children.forEach(function(l){t.has(l.ID)&&(r=t.get(l.ID)),n.has(l.ID)&&a.push(n.get(l.ID))}),a.length>1?o=a:a.length>0?o=a[0]:(o=new ys({name:Un.DEFAULT_MATERIAL_NAME,color:13421772}),a.push(o)),"color"in r.attributes&&a.forEach(function(l){l.vertexColors=!0}),r.groups.length>0){let l=!1;for(let c=0,d=r.groups.length;c<d;c++){const h=r.groups[c];(h.materialIndex<0||h.materialIndex>=a.length)&&(h.materialIndex=a.length,l=!0)}if(l){const c=new ys;a.push(c)}}return r.FBX_Deformer?(i=new _f(r,o),i.normalizeSkinWeights()):i=new at(r,o),i}createCurve(e,t){const n=e.children.reduce(function(r,o){return t.has(o.ID)&&(r=t.get(o.ID)),r},null),i=new Wi({name:Un.DEFAULT_MATERIAL_NAME,color:3342591,linewidth:1});return new fl(n,i)}getTransformData(e,t){const n={};"InheritType"in t&&(n.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?n.eulerOrder=Ns(t.RotationOrder.value):n.eulerOrder=Ns(0),"Lcl_Translation"in t&&(n.translation=t.Lcl_Translation.value),"PreRotation"in t&&(n.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(n.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(n.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(n.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(n.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(n.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(n.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(n.rotationPivot=t.RotationPivot.value),e.userData.transformData=n}setLookAtProperties(e,t){"LookAtProperty"in t&&gt.get(e.ID).children.forEach(function(i){if(i.relationship==="LookAtProperty"){const r=ke.Objects.Model[i.ID];if("Lcl_Translation"in r){const o=r.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(o),Ft.add(e.target)):e.lookAt(new I().fromArray(o))}}})}bindSkeleton(e,t,n){const i=this.parsePoseNodes();for(const r in e){const o=e[r];gt.get(parseInt(o.ID)).parents.forEach(function(l){if(t.has(l.ID)){const c=l.ID;gt.get(c).parents.forEach(function(h){n.has(h.ID)&&n.get(h.ID).bind(new dl(o.bones),i[h.ID])})}})}}parsePoseNodes(){const e={};if("Pose"in ke.Objects){const t=ke.Objects.Pose;for(const n in t)if(t[n].attrType==="BindPose"&&t[n].NbPoseNodes>0){const i=t[n].PoseNode;Array.isArray(i)?i.forEach(function(r){e[r.Node]=new Me().fromArray(r.Matrix.a)}):e[i.Node]=new Me().fromArray(i.Matrix.a)}}return e}addGlobalSceneSettings(){if("GlobalSettings"in ke){if("AmbientColor"in ke.GlobalSettings){const e=ke.GlobalSettings.AmbientColor.value,t=e[0],n=e[1],i=e[2];if(t!==0||n!==0||i!==0){const r=new ye().setRGB(t,n,i,Ze);Ft.add(new Zh(r,1))}}"UnitScaleFactor"in ke.GlobalSettings&&(Ft.userData.unitScaleFactor=ke.GlobalSettings.UnitScaleFactor.value)}}}class Rv{constructor(){this.negativeMaterialIndices=!1}parse(e){const t=new Map;if("Geometry"in ke.Objects){const n=ke.Objects.Geometry;for(const i in n){const r=gt.get(parseInt(i)),o=this.parseGeometry(r,n[i],e);t.set(parseInt(i),o)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),t}parseGeometry(e,t,n){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,n);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,n){const i=n.skeletons,r=[],o=e.parents.map(function(h){return ke.Objects.Model[h.ID]});if(o.length===0)return;const a=e.children.reduce(function(h,u){return i[u.ID]!==void 0&&(h=i[u.ID]),h},null);e.children.forEach(function(h){n.morphTargets[h.ID]!==void 0&&r.push(n.morphTargets[h.ID])});const l=o[0],c={};"RotationOrder"in l&&(c.eulerOrder=Ns(l.RotationOrder.value)),"InheritType"in l&&(c.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(c.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(c.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(c.scale=l.GeometricScaling.value);const d=dd(c);return this.genGeometry(t,a,r,d)}genGeometry(e,t,n,i){const r=new Tt;e.attrName&&(r.name=e.attrName);const o=this.parseGeoNode(e,t),a=this.genBuffers(o),l=new it(a.vertex,3);if(l.applyMatrix4(i),r.setAttribute("position",l),a.colors.length>0&&r.setAttribute("color",new it(a.colors,3)),t&&(r.setAttribute("skinIndex",new hl(a.weightsIndices,4)),r.setAttribute("skinWeight",new it(a.vertexWeights,4)),r.FBX_Deformer=t),a.normal.length>0){const c=new Ue().getNormalMatrix(i),d=new it(a.normal,3);d.applyNormalMatrix(c),r.setAttribute("normal",d)}if(a.uvs.forEach(function(c,d){const h=d===0?"uv":`uv${d}`;r.setAttribute(h,new it(a.uvs[d],2))}),o.material&&o.material.mappingType!=="AllSame"){let c=a.materialIndex[0],d=0;if(a.materialIndex.forEach(function(h,u){h!==c&&(r.addGroup(d,u-d,c),c=h,d=u)}),r.groups.length>0){const h=r.groups[r.groups.length-1],u=h.start+h.count;u!==a.materialIndex.length&&r.addGroup(u,a.materialIndex.length-u,c)}r.groups.length===0&&r.addGroup(0,a.materialIndex.length,a.materialIndex[0])}return this.addMorphTargets(r,e,n,i),r}parseGeoNode(e,t){const n={};if(n.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],n.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&(n.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(n.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(n.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){n.uv=[];let i=0;for(;e.LayerElementUV[i];)e.LayerElementUV[i].UV&&n.uv.push(this.parseUVs(e.LayerElementUV[i])),i++}return n.weightTable={},t!==null&&(n.skeleton=t,t.rawBones.forEach(function(i,r){i.indices.forEach(function(o,a){n.weightTable[o]===void 0&&(n.weightTable[o]=[]),n.weightTable[o].push({id:r,weight:i.weights[a]})})})),n}genBuffers(e){const t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let n=0,i=0,r=!1,o=[],a=[],l=[],c=[],d=[],h=[];const u=this;return e.vertexIndices.forEach(function(f,g){let _,m=!1;f<0&&(f=f^-1,m=!0);let p=[],w=[];if(o.push(f*3,f*3+1,f*3+2),e.color){const b=Mr(g,n,f,e.color);l.push(b[0],b[1],b[2])}if(e.skeleton){if(e.weightTable[f]!==void 0&&e.weightTable[f].forEach(function(b){w.push(b.weight),p.push(b.id)}),w.length>4){r||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),r=!0);const b=[0,0,0,0],x=[0,0,0,0];w.forEach(function(L,A){let E=L,C=p[A];x.forEach(function(M,v,R){if(E>M){R[v]=E,E=M;const k=b[v];b[v]=C,C=k}})}),p=b,w=x}for(;w.length<4;)w.push(0),p.push(0);for(let b=0;b<4;++b)d.push(w[b]),h.push(p[b])}if(e.normal){const b=Mr(g,n,f,e.normal);a.push(b[0],b[1],b[2])}e.material&&e.material.mappingType!=="AllSame"&&(_=Mr(g,n,f,e.material)[0],_<0&&(u.negativeMaterialIndices=!0,_=0)),e.uv&&e.uv.forEach(function(b,x){const L=Mr(g,n,f,b);c[x]===void 0&&(c[x]=[]),c[x].push(L[0]),c[x].push(L[1])}),i++,m&&(u.genFace(t,e,o,_,a,l,c,d,h,i),n++,i=0,o=[],a=[],l=[],c=[],d=[],h=[])}),t}getNormalNewell(e){const t=new I(0,0,0);for(let n=0;n<e.length;n++){const i=e[n],r=e[(n+1)%e.length];t.x+=(i.y-r.y)*(i.z+r.z),t.y+=(i.z-r.z)*(i.x+r.x),t.z+=(i.x-r.x)*(i.y+r.y)}return t.normalize(),t}getNormalTangentAndBitangent(e){const t=this.getNormalNewell(e),i=(Math.abs(t.z)>.5?new I(0,1,0):new I(0,0,1)).cross(t).normalize(),r=t.clone().cross(i).normalize();return{normal:t,tangent:i,bitangent:r}}flattenVertex(e,t,n){return new De(e.dot(t),e.dot(n))}genFace(e,t,n,i,r,o,a,l,c,d){let h;if(d>3){const u=[],f=t.baseVertexPositions||t.vertexPositions;for(let p=0;p<n.length;p+=3)u.push(new I(f[n[p]],f[n[p+1]],f[n[p+2]]));const{tangent:g,bitangent:_}=this.getNormalTangentAndBitangent(u),m=[];for(const p of u)m.push(this.flattenVertex(p,g,_));h=ml.triangulateShape(m,[])}else h=[[0,1,2]];for(const[u,f,g]of h)e.vertex.push(t.vertexPositions[n[u*3]]),e.vertex.push(t.vertexPositions[n[u*3+1]]),e.vertex.push(t.vertexPositions[n[u*3+2]]),e.vertex.push(t.vertexPositions[n[f*3]]),e.vertex.push(t.vertexPositions[n[f*3+1]]),e.vertex.push(t.vertexPositions[n[f*3+2]]),e.vertex.push(t.vertexPositions[n[g*3]]),e.vertex.push(t.vertexPositions[n[g*3+1]]),e.vertex.push(t.vertexPositions[n[g*3+2]]),t.skeleton&&(e.vertexWeights.push(l[u*4]),e.vertexWeights.push(l[u*4+1]),e.vertexWeights.push(l[u*4+2]),e.vertexWeights.push(l[u*4+3]),e.vertexWeights.push(l[f*4]),e.vertexWeights.push(l[f*4+1]),e.vertexWeights.push(l[f*4+2]),e.vertexWeights.push(l[f*4+3]),e.vertexWeights.push(l[g*4]),e.vertexWeights.push(l[g*4+1]),e.vertexWeights.push(l[g*4+2]),e.vertexWeights.push(l[g*4+3]),e.weightsIndices.push(c[u*4]),e.weightsIndices.push(c[u*4+1]),e.weightsIndices.push(c[u*4+2]),e.weightsIndices.push(c[u*4+3]),e.weightsIndices.push(c[f*4]),e.weightsIndices.push(c[f*4+1]),e.weightsIndices.push(c[f*4+2]),e.weightsIndices.push(c[f*4+3]),e.weightsIndices.push(c[g*4]),e.weightsIndices.push(c[g*4+1]),e.weightsIndices.push(c[g*4+2]),e.weightsIndices.push(c[g*4+3])),t.color&&(e.colors.push(o[u*3]),e.colors.push(o[u*3+1]),e.colors.push(o[u*3+2]),e.colors.push(o[f*3]),e.colors.push(o[f*3+1]),e.colors.push(o[f*3+2]),e.colors.push(o[g*3]),e.colors.push(o[g*3+1]),e.colors.push(o[g*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(i),e.materialIndex.push(i),e.materialIndex.push(i)),t.normal&&(e.normal.push(r[u*3]),e.normal.push(r[u*3+1]),e.normal.push(r[u*3+2]),e.normal.push(r[f*3]),e.normal.push(r[f*3+1]),e.normal.push(r[f*3+2]),e.normal.push(r[g*3]),e.normal.push(r[g*3+1]),e.normal.push(r[g*3+2])),t.uv&&t.uv.forEach(function(_,m){e.uvs[m]===void 0&&(e.uvs[m]=[]),e.uvs[m].push(a[m][u*2]),e.uvs[m].push(a[m][u*2+1]),e.uvs[m].push(a[m][f*2]),e.uvs[m].push(a[m][f*2+1]),e.uvs[m].push(a[m][g*2]),e.uvs[m].push(a[m][g*2+1])})}addMorphTargets(e,t,n,i){if(n.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];const r=this;n.forEach(function(o){o.rawTargets.forEach(function(a){const l=ke.Objects.Geometry[a.geoID];l!==void 0&&r.genMorphGeometry(e,t,l,i,a.name)})})}genMorphGeometry(e,t,n,i,r){const o=t.Vertices!==void 0?t.Vertices.a:[],a=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],l=n.Vertices!==void 0?n.Vertices.a:[],c=n.Indexes!==void 0?n.Indexes.a:[],d=e.attributes.position.count*3,h=new Float32Array(d);for(let _=0;_<c.length;_++){const m=c[_]*3;h[m]=l[_*3],h[m+1]=l[_*3+1],h[m+2]=l[_*3+2]}const u={vertexIndices:a,vertexPositions:h,baseVertexPositions:o},f=this.genBuffers(u),g=new it(f.vertex,3);g.name=r||n.attrName,g.applyMatrix4(i),e.morphAttributes.position.push(g)}parseNormals(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Normals.a;let r=[];return n==="IndexToDirect"&&("NormalIndex"in e?r=e.NormalIndex.a:"NormalsIndex"in e&&(r=e.NormalsIndex.a)),{dataSize:3,buffer:i,indices:r,mappingType:t,referenceType:n}}parseUVs(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.UV.a;let r=[];return n==="IndexToDirect"&&(r=e.UVIndex.a),{dataSize:2,buffer:i,indices:r,mappingType:t,referenceType:n}}parseVertexColors(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Colors.a;let r=[];n==="IndexToDirect"&&(r=e.ColorIndex.a);for(let o=0,a=new ye;o<i.length;o+=4)a.fromArray(i,o),Be.toWorkingColorSpace(a,Ze),a.toArray(i,o);return{dataSize:4,buffer:i,indices:r,mappingType:t,referenceType:n}}parseMaterialIndices(e){const t=e.MappingInformationType,n=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:n};const i=e.Materials.a,r=[];for(let o=0;o<i.length;++o)r.push(o);return{dataSize:1,buffer:i,indices:r,mappingType:t,referenceType:n}}parseNurbsGeometry(e){const t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new Tt;const n=t-1,i=e.KnotVector.a,r=[],o=e.Points.a;for(let h=0,u=o.length;h<u;h+=4)r.push(new He().fromArray(o,h));let a,l;if(e.Form==="Closed")r.push(r[0]);else if(e.Form==="Periodic"){a=n,l=i.length-1-a;for(let h=0;h<n;++h)r.push(r[h])}const d=new Tv(n,i,r,a,l).getPoints(r.length*12);return new Tt().setFromPoints(d)}}class Cv{parse(){const e=[],t=this.parseClips();if(t!==void 0)for(const n in t){const i=t[n],r=this.addClip(i);e.push(r)}return e}parseClips(){if(ke.Objects.AnimationCurve===void 0)return;const e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);const t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){const e=ke.Objects.AnimationCurveNode,t=new Map;for(const n in e){const i=e[n];if(i.attrName.match(/S|R|T|DeformPercent/)!==null){const r={id:i.id,attr:i.attrName,curves:{}};t.set(r.id,r)}}return t}parseAnimationCurves(e){const t=ke.Objects.AnimationCurve;for(const n in t){const i={id:t[n].id,times:t[n].KeyTime.a.map(Uv),values:t[n].KeyValueFloat.a},r=gt.get(i.id);if(r!==void 0){const o=r.parents[0].ID,a=r.parents[0].relationship;a.match(/X/)?e.get(o).curves.x=i:a.match(/Y/)?e.get(o).curves.y=i:a.match(/Z/)?e.get(o).curves.z=i:a.match(/DeformPercent/)&&e.has(o)&&(e.get(o).curves.morph=i)}}}parseAnimationLayers(e){const t=ke.Objects.AnimationLayer,n=new Map;for(const i in t){const r=[],o=gt.get(parseInt(i));o!==void 0&&(o.children.forEach(function(l,c){if(e.has(l.ID)){const d=e.get(l.ID);if(d.curves.x!==void 0||d.curves.y!==void 0||d.curves.z!==void 0){if(r[c]===void 0){const h=gt.get(l.ID).parents.filter(function(u){return u.relationship!==void 0})[0].ID;if(h!==void 0){const u=ke.Objects.Model[h.toString()];if(u===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}const f={modelName:u.attrName?$e.sanitizeNodeName(u.attrName):"",ID:u.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};Ft.traverse(function(g){g.ID===u.id&&(f.transform=g.matrix,g.userData.transformData&&(f.eulerOrder=g.userData.transformData.eulerOrder))}),f.transform||(f.transform=new Me),"PreRotation"in u&&(f.preRotation=u.PreRotation.value),"PostRotation"in u&&(f.postRotation=u.PostRotation.value),r[c]=f}}r[c]&&(r[c][d.attr]=d)}else if(d.curves.morph!==void 0){if(r[c]===void 0){const h=gt.get(l.ID).parents.filter(function(p){return p.relationship!==void 0})[0].ID,u=gt.get(h).parents[0].ID,f=gt.get(u).parents[0].ID,g=gt.get(f).parents[0].ID,_=ke.Objects.Model[g],m={modelName:_.attrName?$e.sanitizeNodeName(_.attrName):"",morphName:ke.Objects.Deformer[h].attrName};r[c]=m}r[c][d.attr]=d}}}),n.set(parseInt(i),r))}return n}parseAnimStacks(e){const t=ke.Objects.AnimationStack,n={};for(const i in t){const r=gt.get(parseInt(i)).children;r.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const o=e.get(r[0].ID);n[i]={name:t[i].attrName,layer:o}}return n}addClip(e){let t=[];const n=this;return e.layer.forEach(function(i){t=t.concat(n.generateTracks(i))}),new Ga(e.name,-1,t)}generateTracks(e){const t=[];let n=new I,i=new I;if(e.transform&&e.transform.decompose(n,new Rt,i),n=n.toArray(),i=i.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){const r=this.generateVectorTrack(e.modelName,e.T.curves,n,"position");r!==void 0&&t.push(r)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){const r=this.generateRotationTrack(e.modelName,e.R.curves,e.preRotation,e.postRotation,e.eulerOrder);r!==void 0&&t.push(r)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){const r=this.generateVectorTrack(e.modelName,e.S.curves,i,"scale");r!==void 0&&t.push(r)}if(e.DeformPercent!==void 0){const r=this.generateMorphTrack(e);r!==void 0&&t.push(r)}return t}generateVectorTrack(e,t,n,i){const r=this.getTimesForAllAxes(t),o=this.getKeyframeTrackValues(r,t,n);return new Us(e+"."+i,r,o)}generateRotationTrack(e,t,n,i,r){let o,a;if(t.x!==void 0&&t.y!==void 0&&t.z!==void 0){const u=this.interpolateRotations(t.x,t.y,t.z,r);o=u[0],a=u[1]}const l=Ns(0);n!==void 0&&(n=n.map(Et.degToRad),n.push(l),n=new yt().fromArray(n),n=new Rt().setFromEuler(n)),i!==void 0&&(i=i.map(Et.degToRad),i.push(l),i=new yt().fromArray(i),i=new Rt().setFromEuler(i).invert());const c=new Rt,d=new yt,h=[];if(!a||!o)return new ns(e+".quaternion",[0],[0]);for(let u=0;u<a.length;u+=3)d.set(a[u],a[u+1],a[u+2],r),c.setFromEuler(d),n!==void 0&&c.premultiply(n),i!==void 0&&c.multiply(i),u>2&&new Rt().fromArray(h,(u-3)/3*4).dot(c)<0&&c.set(-c.x,-c.y,-c.z,-c.w),c.toArray(h,u/3*4);return new ns(e+".quaternion",o,h)}generateMorphTrack(e){const t=e.DeformPercent.curves.morph,n=t.values.map(function(r){return r/100}),i=Ft.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new Ds(e.modelName+".morphTargetInfluences["+i+"]",t.times,n)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(n,i){return n-i}),t.length>1){let n=1,i=t[0];for(let r=1;r<t.length;r++){const o=t[r];o!==i&&(t[n]=o,i=o,n++)}t=t.slice(0,n)}return t}getKeyframeTrackValues(e,t,n){const i=n,r=[];let o=-1,a=-1,l=-1;return e.forEach(function(c){if(t.x&&(o=t.x.times.indexOf(c)),t.y&&(a=t.y.times.indexOf(c)),t.z&&(l=t.z.times.indexOf(c)),o!==-1){const d=t.x.values[o];r.push(d),i[0]=d}else r.push(i[0]);if(a!==-1){const d=t.y.values[a];r.push(d),i[1]=d}else r.push(i[1]);if(l!==-1){const d=t.z.values[l];r.push(d),i[2]=d}else r.push(i[2])}),r}interpolateRotations(e,t,n,i){const r=[],o=[];r.push(e.times[0]),o.push(Et.degToRad(e.values[0])),o.push(Et.degToRad(t.values[0])),o.push(Et.degToRad(n.values[0]));for(let a=1;a<e.values.length;a++){const l=[e.values[a-1],t.values[a-1],n.values[a-1]];if(isNaN(l[0])||isNaN(l[1])||isNaN(l[2]))continue;const c=l.map(Et.degToRad),d=[e.values[a],t.values[a],n.values[a]];if(isNaN(d[0])||isNaN(d[1])||isNaN(d[2]))continue;const h=d.map(Et.degToRad),u=[d[0]-l[0],d[1]-l[1],d[2]-l[2]],f=[Math.abs(u[0]),Math.abs(u[1]),Math.abs(u[2])];if(f[0]>=180||f[1]>=180||f[2]>=180){const _=Math.max(...f)/180,m=new yt(...c,i),p=new yt(...h,i),w=new Rt().setFromEuler(m),b=new Rt().setFromEuler(p);w.dot(b)&&b.set(-b.x,-b.y,-b.z,-b.w);const x=e.times[a-1],L=e.times[a]-x,A=new Rt,E=new yt;for(let C=0;C<1;C+=1/_)A.copy(w.clone().slerp(b.clone(),C)),r.push(x+C*L),E.setFromQuaternion(A,i),o.push(E.x),o.push(E.y),o.push(E.z)}else r.push(e.times[a]),o.push(Et.degToRad(e.values[a])),o.push(Et.degToRad(t.values[a])),o.push(Et.degToRad(n.values[a]))}return[r,o]}}class Iv{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new hd,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const t=this,n=e.split(/[\r\n]+/);return n.forEach(function(i,r){const o=i.match(/^[\s\t]*;/),a=i.match(/^[\s\t]*$/);if(o||a)return;const l=i.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),c=i.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),d=i.match("^\\t{"+(t.currentIndent-1)+"}}");l?t.parseNodeBegin(i,l):c?t.parseNodeProperty(i,c,n[++r]):d?t.popStack():i.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(i)}),this.allNodes}parseNodeBegin(e,t){const n=t[1].trim().replace(/^"/,"").replace(/"$/,""),i=t[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),r={name:n},o=this.parseNodeAttr(i),a=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,r):n in a?(n==="PoseNode"?a.PoseNode.push(r):a[n].id!==void 0&&(a[n]={},a[n][a[n].id]=a[n]),o.id!==""&&(a[n][o.id]=r)):typeof o.id=="number"?(a[n]={},a[n][o.id]=r):n!=="Properties70"&&(n==="PoseNode"?a[n]=[r]:a[n]=r),typeof o.id=="number"&&(r.id=o.id),o.name!==""&&(r.attrName=o.name),o.type!==""&&(r.attrType=o.type),this.pushStack(r)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let n="",i="";return e.length>1&&(n=e[1].replace(/^(\w+)::/,""),i=e[2]),{id:t,name:n,type:i}}parseNodeProperty(e,t,n){let i=t[1].replace(/^"/,"").replace(/"$/,"").trim(),r=t[2].replace(/^"/,"").replace(/"$/,"").trim();i==="Content"&&r===","&&(r=n.replace(/"/g,"").replace(/,$/,"").trim());const o=this.getCurrentNode();if(o.name==="Properties70"){this.parseNodeSpecialProperty(e,i,r);return}if(i==="C"){const l=r.split(",").slice(1),c=parseInt(l[0]),d=parseInt(l[1]);let h=r.split(",").slice(3);h=h.map(function(u){return u.trim().replace(/^"/,"")}),i="connections",r=[c,d],Fv(r,h),o[i]===void 0&&(o[i]=[])}i==="Node"&&(o.id=r),i in o&&Array.isArray(o[i])?o[i].push(r):i!=="a"?o[i]=r:o.a=r,this.setCurrentProp(o,i),i==="a"&&r.slice(-1)!==","&&(o.a=Yo(r))}parseNodePropertyContinued(e){const t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=Yo(t.a))}parseNodeSpecialProperty(e,t,n){const i=n.split('",').map(function(d){return d.trim().replace(/^\"/,"").replace(/\s/,"_")}),r=i[0],o=i[1],a=i[2],l=i[3];let c=i[4];switch(o){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=Yo(c);break}this.getPrevNode()[r]={type:o,type2:a,flag:l,value:c},this.setCurrentProp(this.getPrevNode(),r)}}class Lv{parse(e){const t=new nh(e);t.skip(23);const n=t.getUint32();if(n<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+n);const i=new hd;for(;!this.endOfContent(t);){const r=this.parseNode(t,n);r!==null&&i.add(r.name,r)}return i}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){const n={},i=t>=7500?e.getUint64():e.getUint32(),r=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();const o=e.getUint8(),a=e.getString(o);if(i===0)return null;const l=[];for(let u=0;u<r;u++)l.push(this.parseProperty(e));const c=l.length>0?l[0]:"",d=l.length>1?l[1]:"",h=l.length>2?l[2]:"";for(n.singleProperty=r===1&&e.getOffset()===i;i>e.getOffset();){const u=this.parseNode(e,t);u!==null&&this.parseSubNode(a,n,u)}return n.propertyList=l,typeof c=="number"&&(n.id=c),d!==""&&(n.attrName=d),h!==""&&(n.attrType=h),a!==""&&(n.name=a),n}parseSubNode(e,t,n){if(n.singleProperty===!0){const i=n.propertyList[0];Array.isArray(i)?(t[n.name]=n,n.a=i):t[n.name]=i}else if(e==="Connections"&&n.name==="C"){const i=[];n.propertyList.forEach(function(r,o){o!==0&&i.push(r)}),t.connections===void 0&&(t.connections=[]),t.connections.push(i)}else if(n.name==="Properties70")Object.keys(n).forEach(function(r){t[r]=n[r]});else if(e==="Properties70"&&n.name==="P"){let i=n.propertyList[0],r=n.propertyList[1];const o=n.propertyList[2],a=n.propertyList[3];let l;i.indexOf("Lcl ")===0&&(i=i.replace("Lcl ","Lcl_")),r.indexOf("Lcl ")===0&&(r=r.replace("Lcl ","Lcl_")),r==="Color"||r==="ColorRGB"||r==="Vector"||r==="Vector3D"||r.indexOf("Lcl_")===0?l=[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:l=n.propertyList[4],t[i]={type:r,type2:o,flag:a,value:l}}else t[n.name]===void 0?typeof n.id=="number"?(t[n.name]={},t[n.name][n.id]=n):t[n.name]=n:n.name==="PoseNode"?(Array.isArray(t[n.name])||(t[n.name]=[t[n.name]]),t[n.name].push(n)):t[n.name][n.id]===void 0&&(t[n.name][n.id]=n)}parseProperty(e){const t=e.getString(1);let n;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return n=e.getUint32(),e.getArrayBuffer(n);case"S":return n=e.getUint32(),e.getString(n);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const i=e.getUint32(),r=e.getUint32(),o=e.getUint32();if(r===0)switch(t){case"b":case"c":return e.getBooleanArray(i);case"d":return e.getFloat64Array(i);case"f":return e.getFloat32Array(i);case"i":return e.getInt32Array(i);case"l":return e.getInt64Array(i)}const a=gv(new Uint8Array(e.getArrayBuffer(o))),l=new nh(a.buffer);switch(t){case"b":case"c":return l.getBooleanArray(i);case"d":return l.getFloat64Array(i);case"f":return l.getFloat32Array(i);case"i":return l.getInt32Array(i);case"l":return l.getInt64Array(i)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class nh{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){const t=[];for(let n=0;n<e;n++)t.push(this.getBoolean());return t}getUint8(){const e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){const e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){const e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt32());return t}getUint32(){const e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){const e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat32());return t}getFloat64(){const e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat64());return t}getArrayBuffer(e){const t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){const t=this.offset;let n=new Uint8Array(this.dv.buffer,t,e);this.skip(e);const i=n.indexOf(0);return i>=0&&(n=new Uint8Array(this.dv.buffer,t,i)),this._textDecoder.decode(n)}}class hd{add(e,t){this[e]=t}}function Pv(s){const e="Kaydara FBX Binary  \0";return s.byteLength>=e.length&&e===ud(s,0,e.length)}function Dv(s){const e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let t=0;function n(i){const r=s[i-1];return s=s.slice(t+i),t++,r}for(let i=0;i<e.length;++i)if(n(1)===e[i])return!1;return!0}function ih(s){const e=/FBXVersion: (\d+)/,t=s.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function Uv(s){return s/46186158e3}const Nv=[];function Mr(s,e,t,n){let i;switch(n.mappingType){case"ByPolygonVertex":i=s;break;case"ByPolygon":i=e;break;case"ByVertice":i=t;break;case"AllSame":i=n.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+n.mappingType)}n.referenceType==="IndexToDirect"&&(i=n.indices[i]);const r=i*n.dataSize,o=r+n.dataSize;return Ov(Nv,n.buffer,r,o)}const qo=new yt,Ni=new I;function dd(s){const e=new Me,t=new Me,n=new Me,i=new Me,r=new Me,o=new Me,a=new Me,l=new Me,c=new Me,d=new Me,h=new Me,u=new Me,f=s.inheritType?s.inheritType:0;s.translation&&e.setPosition(Ni.fromArray(s.translation));const g=Ns(0);if(s.preRotation){const R=s.preRotation.map(Et.degToRad);R.push(g),t.makeRotationFromEuler(qo.fromArray(R))}if(s.rotation){const R=s.rotation.map(Et.degToRad);R.push(s.eulerOrder||g),n.makeRotationFromEuler(qo.fromArray(R))}if(s.postRotation){const R=s.postRotation.map(Et.degToRad);R.push(g),i.makeRotationFromEuler(qo.fromArray(R)),i.invert()}s.scale&&r.scale(Ni.fromArray(s.scale)),s.scalingOffset&&a.setPosition(Ni.fromArray(s.scalingOffset)),s.scalingPivot&&o.setPosition(Ni.fromArray(s.scalingPivot)),s.rotationOffset&&l.setPosition(Ni.fromArray(s.rotationOffset)),s.rotationPivot&&c.setPosition(Ni.fromArray(s.rotationPivot)),s.parentMatrixWorld&&(h.copy(s.parentMatrix),d.copy(s.parentMatrixWorld));const _=t.clone().multiply(n).multiply(i),m=new Me;m.extractRotation(d);const p=new Me;p.copyPosition(d);const w=p.clone().invert().multiply(d),b=m.clone().invert().multiply(w),x=r,L=new Me;if(f===0)L.copy(m).multiply(_).multiply(b).multiply(x);else if(f===1)L.copy(m).multiply(b).multiply(_).multiply(x);else{const k=new Me().scale(new I().setFromMatrixScale(h)).clone().invert(),N=b.clone().multiply(k);L.copy(m).multiply(_).multiply(N).multiply(x)}const A=c.clone().invert(),E=o.clone().invert();let C=e.clone().multiply(l).multiply(c).multiply(t).multiply(n).multiply(i).multiply(A).multiply(a).multiply(o).multiply(r).multiply(E);const M=new Me().copyPosition(C),v=d.clone().multiply(M);return u.copyPosition(v),C=u.clone().multiply(L),C.premultiply(d.invert()),C}function Ns(s){s=s||0;const e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return s===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[s]}function Yo(s){return s.split(",").map(function(t){return parseFloat(t)})}function ud(s,e,t){return e===void 0&&(e=0),t===void 0&&(t=s.byteLength),new TextDecoder().decode(new Uint8Array(s,e,t))}function Fv(s,e){for(let t=0,n=s.length,i=e.length;t<i;t++,n++)s[n]=e[t]}function Ov(s,e,t,n){for(let i=t,r=0;i<n;i++,r++)s[r]=e[i];return s}class Bv{constructor(){this.scene=new pf,this.renderer=new nv({antialias:!0,powerPreference:"high-performance"}),this.camera=new Ot(70,innerWidth/innerHeight,.05,800),this.renderer.setSize(innerWidth,innerHeight),this.renderer.setPixelRatio(Math.min(devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=vh,this.renderer.outputColorSpace=Ze,this.renderer.toneMapping=xh,this.renderer.toneMappingExposure=1.1,document.getElementById("game-canvas").appendChild(this.renderer.domElement),this.fpsGunHolder=new Pt,this.camera.add(this.fpsGunHolder),this.scene.add(this.camera),this.cameraMode="fps",this._buildDefaultEnvironment(),this._setupLights(),this._setupResize()}_buildDefaultEnvironment(){this.scene.background=new ye(8900331),this.scene.fog=new li(8900331,80,400);const e=new at(new is(600,600,1,1),new Cs({visible:!1}));e.rotation.x=-Math.PI/2,e.position.y=-1,e.name="safetyGround",this.scene.add(e),this.safetyGround=e}_setupLights(){this.scene.add(new Zh(13953279,.65)),this.sunLight=new Ir(16774624,2.6),this.sunLight.position.set(80,180,60),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.set(2048,2048),this.sunLight.shadow.camera.near=1,this.sunLight.shadow.camera.far=400,this.sunLight.shadow.camera.left=this.sunLight.shadow.camera.bottom=-100,this.sunLight.shadow.camera.right=this.sunLight.shadow.camera.top=100,this.sunLight.shadow.bias=-.001,this.scene.add(this.sunLight);const e=new Ir(11588863,.7);e.position.set(-60,40,-80),this.scene.add(e);const t=new ep(9417684,5917242,.4);this.scene.add(t)}loadCityFBX(e){const t=new mt({color:9080726,roughness:.82,metalness:.08});new jn().load("./assets/models/environment/city.fbx",n=>{const i=new kt().setFromObject(n),r=new I;i.getSize(r);const a=200/Math.max(r.x,r.z,.001);n.scale.setScalar(a);const l=new I;i.getCenter(l),n.position.set(-l.x*a,-i.min.y*a,-l.z*a),n.traverse(c=>{c.isMesh&&(c.receiveShadow=!0,c.castShadow=!0,c.material=t)}),n.name="city",this.scene.add(n),this.cityMesh=n,e==null||e(n)},void 0,()=>{console.info("[SceneManager] city.fbx not present yet, using procedural arena"),this._buildUrbanArena(),e==null||e(null)})}_buildUrbanArena(){const e=(i,r=.7,o=.2)=>new mt({color:i,roughness:r,metalness:o}),t=(i,r,o,a,l,c,d)=>{const h=new at(new nn(i,r,o),e(a));return h.position.set(l,c,d),h.castShadow=!0,h.receiveShadow=!0,this.scene.add(h),h};t(200,.2,200,3815994,0,0,0).rotation.x=0,[[8,16,8,4871528,-28,8,-20],[8,22,8,3621201,28,11,-22],[12,10,10,4871528,-42,5,20],[10,18,10,3621201,42,9,22],[8,12,8,4871528,0,6,-38],[6,8,6,3621201,18,4,35],[6,8,6,3621201,-18,4,35],[12,6,8,3621201,0,3,28],[4,1.5,4,6583435,-10,1.55,5],[4,1.5,4,6583435,10,1.55,-5],[8,2,2,4673891,-20,2,0],[8,2,2,4673891,20,2,0]].forEach(([i,r,o,a,l,c,d])=>t(i,r,o,a,l,c,d))}updateCamera(e,t,n){this.camera.position.set(e.x,e.y+1.68,e.z),this.camera.rotation.set(n,t,0,"YXZ")}setNightMode(e){if(e){this.scene.background=new ye(329743),this.scene.fog=new Qr(528410,.022),this.sunLight&&(this.sunLight.intensity=.15,this.sunLight.color.set(3820202));const t=new Ir(8952268,.6);t.position.set(-80,200,-50),this.scene.add(t)}else this.scene.background=new ye(8900331),this.scene.fog=new li(8900331,60,200),this.sunLight&&(this.sunLight.intensity=2.6,this.sunLight.color.set(16774624))}setIndustrialMode(e){e&&(this.scene.background=new ye(1706500),this.scene.fog=new li(2494468,30,160))}render(){this.renderer.render(this.scene,this.camera)}_setupResize(){window.addEventListener("resize",()=>{this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(innerWidth,innerHeight)})}}class kv{constructor(e){this.scene=e,this.colliders=[],this._meshCache=null,this._cacheTimer=0,this._cacheInterval=3,this._rc=new Yr,this._down=new I(0,-1,0),this._orig=new I}_getMeshes(){return this._meshCache||(this._meshCache=[],this.scene.traverse(e=>{e.isMesh&&e.name!=="muzzle"&&e.name!=="bullet"&&!e.name.startsWith("hud")&&!e.name.startsWith("sprite")&&this._meshCache.push(e)})),this._meshCache}invalidateCache(){this._meshCache=null,this._cacheTimer=0}getGroundHeight(e){this._orig.set(e.x,e.y+60,e.z),this._rc.set(this._orig,this._down),this._rc.near=0,this._rc.far=200;const t=this._rc.intersectObjects(this._getMeshes(),!1);for(const n of t)if(n.point.y<e.y+1)return n.point.y;return 0}tick(e){this._cacheTimer+=e,this._cacheTimer>this._cacheInterval&&(this._meshCache=null,this._cacheTimer=0)}addBoxCollider(e,t){this.colliders.push({min:e.clone(),max:t.clone()})}clearColliders(){this.colliders=[]}checkCollision(e,t,n){let i=e.clone();for(const r of this.colliders){if(r.max.y-r.min.y<.8||r.max.y<i.y||r.min.y>i.y+n)continue;const a=(r.min.x+r.max.x)*.5,l=(r.min.z+r.max.z)*.5,c=(r.max.x-r.min.x)*.5+t,d=(r.max.z-r.min.z)*.5+t,h=i.x-a,u=i.z-l;if(Math.abs(h)<c&&Math.abs(u)<d){const f=c-Math.abs(h),g=d-Math.abs(u);f<g?i.x+=h<0?-f:f:i.z+=u<0?-g:g}}return i}raycast(e,t,n=250,i=[]){const r=new Yr(e.clone(),t.clone().normalize(),.05,n),o=this._getMeshes().filter(l=>!i.includes(l)),a=r.intersectObjects(o,!0);return a.length>0?a[0]:null}}class zv{constructor(){var e;try{this.ctx=new(window.AudioContext||window.webkitAudioContext)}catch{this.ctx=null}this._gainMaster=((e=this.ctx)==null?void 0:e.createGain())??null,this._gainMaster&&(this._gainMaster.gain.value=.7,this._gainMaster.connect(this.ctx.destination))}_tone(e,t,n,i=.5,r=0){if(this.ctx)try{const o=this.ctx.createOscillator(),a=this.ctx.createGain();o.type=e,o.frequency.value=t,o.detune.value=r,a.gain.setValueAtTime(i,this.ctx.currentTime),a.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+n),o.connect(a),a.connect(this._gainMaster??this.ctx.destination),o.start(),o.stop(this.ctx.currentTime+n)}catch{}}_noise(e,t=.5,n=1200){if(this.ctx)try{const i=this.ctx.sampleRate,r=this.ctx.createBuffer(1,i*e,i),o=r.getChannelData(0);for(let d=0;d<o.length;d++)o[d]=Math.random()*2-1;const a=this.ctx.createBufferSource();a.buffer=r;const l=this.ctx.createBiquadFilter();l.type="lowpass",l.frequency.value=n;const c=this.ctx.createGain();c.gain.setValueAtTime(t,this.ctx.currentTime),c.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+e),a.connect(l),l.connect(c),c.connect(this._gainMaster??this.ctx.destination),a.start()}catch{}}resume(){var e;(e=this.ctx)==null||e.resume()}playGunshot(){this._noise(.12,.9,2800),this._tone("sawtooth",85,.06,.4,-200),this._tone("square",180,.04,.25,500)}playReload(){this._tone("sawtooth",320,.08,.3,0),setTimeout(()=>this._noise(.05,.6,4e3),100),setTimeout(()=>this._tone("square",220,.06,.3),480)}playFootstep(e=!1,t=!1){const n=t?.12:e?.35:.22;this._noise(.07,n,500)}playJump(){this._tone("sine",220,.18,.3,0),this._noise(.06,.2,800)}playHurt(){this._noise(.09,.55,600),this._tone("sawtooth",110,.12,.4,-300)}playDeath(){this._noise(.25,.7,300),this._tone("sawtooth",75,.3,.5,-400)}playKill(){this._tone("sine",880,.06,.45,0),setTimeout(()=>this._tone("sine",1100,.06,.45,0),60)}playRifleEmpty(){this._tone("square",600,.06,.35,0)}playLevelComplete(){[0,100,200].forEach((e,t)=>setTimeout(()=>this._tone("sine",440+t*220,.35,.5,0),e))}}class Vv{constructor(e){this.canvas=e,this.moveForward=0,this.moveRight=0,this.aimDeltaX=0,this.aimDeltaY=0,this.isFiring=!1,this.isADS=!1,this.isSprinting=!1,this.isCrouching=!1,this.isJumping=!1,this.isReloading=!1,this.isScoreboard=!1,this.cameraToggleRequested=!1,this.joystickX=0,this.joystickY=0,this.mouseSensitivity=.0022,this.touchSensitivity=.004,this.isPointerLocked=!1,this.isMouseDown=!1,this.keys={},this._setupControls()}_setupControls(){window.addEventListener("keydown",e=>{this.keys[e.code]=!0,e.code==="KeyC"&&(this.isCrouching=!this.isCrouching),e.code==="KeyV"&&(this.cameraToggleRequested=!0),e.code==="KeyR"&&(this.isReloading=!0),e.code==="Tab"&&(e.preventDefault(),this.isScoreboard=!0),e.code==="Space"&&(this.isJumping=!0),(e.code==="ShiftLeft"||e.code==="ShiftRight")&&(this.isSprinting=!0)}),window.addEventListener("keyup",e=>{this.keys[e.code]=!1,e.code==="Tab"&&(this.isScoreboard=!1),e.code==="Space"&&(this.isJumping=!1),(e.code==="ShiftLeft"||e.code==="ShiftRight")&&(this.isSprinting=!1)}),this.canvas.addEventListener("click",()=>{var e,t;document.pointerLockElement!==this.canvas&&((t=(e=this.canvas).requestPointerLock)==null||t.call(e))}),document.addEventListener("pointerlockchange",()=>{this.isPointerLocked=document.pointerLockElement===this.canvas}),document.addEventListener("mousemove",e=>{this.isPointerLocked?(this.aimDeltaX+=e.movementX*this.mouseSensitivity,this.aimDeltaY+=e.movementY*this.mouseSensitivity):this.isMouseDown&&(this.aimDeltaX+=(e.movementX||0)*this.mouseSensitivity,this.aimDeltaY+=(e.movementY||0)*this.mouseSensitivity)}),window.addEventListener("mousedown",e=>{(e.target===this.canvas||this.isPointerLocked)&&(this.isMouseDown=!0,e.button===0&&(this.isFiring=!0),e.button===2&&(this.isADS=!0))}),window.addEventListener("mouseup",e=>{this.isMouseDown=!1,e.button===0&&(this.isFiring=!1),e.button===2&&(this.isADS=!1)}),window.addEventListener("contextmenu",e=>{(this.isPointerLocked||e.target===this.canvas)&&e.preventDefault()})}setJoystickInput(e,t){this.joystickX=e,this.joystickY=t}addTouchAimDelta(e,t){this.aimDeltaX+=e*this.touchSensitivity,this.aimDeltaY+=t*this.touchSensitivity}update(){let e=0,t=0;(this.keys.KeyW||this.keys.ArrowUp)&&(e+=1),(this.keys.KeyS||this.keys.ArrowDown)&&(e-=1),(this.keys.KeyD||this.keys.ArrowRight)&&(t+=1),(this.keys.KeyA||this.keys.ArrowLeft)&&(t-=1),Math.abs(this.joystickY)>.05&&(e+=-this.joystickY),Math.abs(this.joystickX)>.05&&(t+=this.joystickX);const n=Math.hypot(e,t);if(n>.05){const i=Math.min(1,n);this.moveForward=e/n*i,this.moveRight=t/n*i}else this.moveForward=0,this.moveRight=0;(this.keys.ShiftLeft||this.keys.ShiftRight)&&(this.isSprinting=this.moveForward>.1)}consumeAimDelta(){const e={x:this.aimDeltaX,y:this.aimDeltaY};return this.aimDeltaX=0,this.aimDeltaY=0,e}consumeCameraToggle(){const e=this.cameraToggleRequested;return this.cameraToggleRequested=!1,e}}class Hv{constructor(e){this.mesh=e,this.mixer=null,this.clips={},this.actions={},this.currentAction=null,this.currentName="",this._loadedCount=0,this._totalToLoad=0}setMesh(e){this.mesh=e,this.mixer=e?new yl(e):null}loadAllAnimations(e){const t={idle:"idle.fbx",idleAim:"idle aiming.fbx",idleCrouch:"idle crouching.fbx",idleCrouchAim:"idle crouching aiming.fbx",walkFwd:"walk forward.fbx",walkBack:"walk backward.fbx",walkLeft:"walk left.fbx",walkRight:"walk right.fbx",walkFwdL:"walk forward left.fbx",walkFwdR:"walk forward right.fbx",walkBackL:"walk backward left.fbx",walkBackR:"walk backward right.fbx",runFwd:"run forward.fbx",runBack:"run backward.fbx",runLeft:"run left.fbx",runRight:"run right.fbx",sprintFwd:"sprint forward.fbx",sprintFwdL:"sprint forward left.fbx",sprintFwdR:"sprint forward right.fbx",crouchFwd:"walk crouching forward.fbx",crouchBack:"walk crouching backward.fbx",crouchLeft:"walk crouching left.fbx",crouchRight:"walk crouching right.fbx",jumpUp:"jump up.fbx",jumpLoop:"jump loop.fbx",jumpDown:"jump down.fbx",deathFront:"death from the front.fbx",deathBack:"death from the back.fbx",deathRight:"death from right.fbx",deathHeadFront:"death from front headshot.fbx",deathHeadBack:"death from back headshot.fbx",deathCrouchHead:"death crouching headshot front.fbx"};this._totalToLoad=Object.keys(t).length;const n=new jn;for(const[i,r]of Object.entries(t))n.load(`${e}${r}`,o=>{if(o.animations.length>0){const a=o.animations[0];a.name=i,this.clips[i]=a,this.mixer&&(this.actions[i]=this.mixer.clipAction(a),this.actions[i].clampWhenFinished=!1)}this._loadedCount++,this._loadedCount>=this._totalToLoad&&this._onAllLoaded()},void 0,()=>this._loadedCount++)}_onAllLoaded(){this.playAnimation("idleAim",.3)}playAnimation(e,t=.22,n=!0){if(!this.actions[e]||this.currentName===e)return;const i=this.actions[e];i.setLoop(n?Lh:Zr,1/0),i.enabled=!0,i.timeScale=1,n||(i.clampWhenFinished=!0),this.currentAction&&this.currentName!==e?this.currentAction.crossFadeTo(i,t,!0):i.reset(),i.play(),this.currentAction=i,this.currentName=e}playDeathAnimation(e="front"){const n={front:"deathFront",back:"deathBack",right:"deathRight",headFront:"deathHeadFront",headBack:"deathHeadBack"}[e]??"deathFront";this.playAnimation(n,.15,!1)}resetDeath(){this.actions.deathFront&&this.actions.deathFront.stop(),this.currentName="",this.currentAction=null,this.playAnimation("idleAim",.3)}update(e,t,n,i,r,o,a){if(!this.mixer)return;this.mixer.update(e);const{moveForward:l,moveRight:c}=t,d=Math.hypot(l,c)>.05;let h;o?h="jumpLoop":i?d?l>0?h="crouchFwd":l<0?h="crouchBack":c>0?h="crouchRight":h="crouchLeft":h=r?"idleCrouchAim":"idleCrouch":n&&l>.4?c>.4?h="sprintFwdR":c<-.4?h="sprintFwdL":h="sprintFwd":d?r?l>0?h="walkFwd":l<0?h="walkBack":c>0?h="walkRight":h="walkLeft":l>.4&&c>.4||l>0?h="runFwd":l<0?h="runBack":c>0?h="runRight":h="runLeft":h=r?"idleAim":"idle",h&&this.clips[h]&&this.playAnimation(h,.18)}}class Gv{constructor(e,t,n){this.scene=e,this.physicsManager=t,this.audioManager=n,this.rootGroup=new Pt,this.rootGroup.name="playerRoot",this.scene.add(this.rootGroup),this.position=new I(0,2,0),this.velocity=new I,this.yaw=0,this.pitch=0,this.walkSpeed=8,this.sprintSpeed=14,this.crouchSpeed=3.5,this.jumpForce=7,this.gravity=-20,this.isGrounded=!0,this.isSprinting=!1,this.isCrouching=!1,this.isADS=!1,this.isDead=!1,this.health=100,this.maxHealth=100,this.armor=150,this.maxArmor=150,this.adsProgress=0,this.sprintCant=0,this.footstepTimer=0,this.animController=new Hv(null),this.characterMesh=null,this.rightHandAnchor=null,this._lastGroundX=1/0,this._lastGroundZ=1/0,this._cachedGroundY=0,this._groundCacheThresh=.5,this._loadSoldier()}_loadSoldier(){new jn().load("./assets/models/soldier/Swat.fbx",e=>{e.scale.setScalar(.01),e.traverse(t=>{if(t.isMesh&&(t.castShadow=!0,t.receiveShadow=!0),t.isBone){const n=t.name.toLowerCase();(n.includes("righthand")||n.includes("hand_r"))&&(this.rightHandAnchor=t)}}),e.visible=!1,this.characterMesh=e,this.rootGroup.add(e),this.animController.setMesh(e),this.animController.loadAllAnimations("./assets/models/soldier/animations/")},void 0,()=>this._buildBoxSoldier())}_buildBoxSoldier(){const e=new Pt,t=r=>new mt({color:r,roughness:.75,metalness:.2}),n=(r,o,a,l,c,d,h)=>{const u=new at(new nn(r,o,a),t(l));return u.position.set(c,d,h),u.castShadow=!0,e.add(u),u};n(.38,.22,.25,1976635,0,.9,0),n(.44,.46,.3,988970,0,1.24,0).name="chest";const i=new Pt;i.position.set(0,1.62,0),i.add(new at(new Bs(.13,12,12),t(13147516))),e.add(i),n(.16,.82,.17,1976635,-.13,.46,0),n(.16,.82,.17,1976635,.13,.46,0),this.rightHandAnchor=new Pt,this.rightHandAnchor.position.set(.26,1.15,.38),e.add(this.rightHandAnchor),e.visible=!1,this.characterMesh=e,this.rootGroup.add(e),this.animController.setMesh(e)}takeDamage(e){var n,i;if(this.isDead)return;let t=e;if(this.armor>0){const r=Math.min(this.armor,e*.7);this.armor-=r,t-=r}this.health=Math.max(0,this.health-t),(i=(n=this.audioManager).playHurt)==null||i.call(n),this.health<=0&&this.die()}die(){var e,t;this.isDead||(this.isDead=!0,this.health=0,this.velocity.set(0,0,0),this.characterMesh&&(this.characterMesh.visible=!0),(t=(e=this.animController).playDeathAnimation)==null||t.call(e,"front"))}respawn(e){var t,n;this.isDead=!1,this.health=this.maxHealth,this.armor=this.maxArmor,this.position.set(e.x,(e.y??2)+.5,e.z),this.velocity.set(0,0,0),this.isGrounded=!1,this.yaw=0,this.pitch=0,this._lastGroundX=1/0,this.rootGroup.position.copy(this.position),this.characterMesh&&(this.characterMesh.visible=!1),(n=(t=this.animController).resetDeath)==null||n.call(t)}_getGroundY(e){const t=e.x-this._lastGroundX,n=e.z-this._lastGroundZ;return Math.hypot(t,n)>this._groundCacheThresh&&(this._cachedGroundY=this.physicsManager.getGroundHeight(e),this._lastGroundX=e.x,this._lastGroundZ=e.z),this._cachedGroundY}update(e,t,n,i){var g,_,m,p,w,b,x,L;if(this.isDead){(_=(g=this.animController).update)==null||_.call(g,e,{moveForward:0,moveRight:0},!1,!1,!1,!1,0);return}const r=t.consumeAimDelta();this.yaw-=r.x,this.pitch-=r.y,this.pitch=Math.max(-Math.PI*.45,Math.min(Math.PI*.45,this.pitch)),this.isSprinting=t.isSprinting&&!t.isCrouching&&!t.isADS,this.isCrouching=t.isCrouching,this.isADS=t.isADS;const o=t.moveForward,a=t.moveRight;let l=this.walkSpeed;this.isCrouching?l=this.crouchSpeed:this.isSprinting?l=this.sprintSpeed:this.isADS&&(l*=.6);const c=Math.sin(this.yaw),d=Math.cos(this.yaw);this.velocity.x=(a*d-o*c)*l,this.velocity.z=(-a*c-o*d)*l,t.isJumping&&this.isGrounded&&(this.velocity.y=this.jumpForce,this.isGrounded=!1,(p=(m=this.audioManager).playJump)==null||p.call(m)),this.isGrounded||(this.velocity.y+=this.gravity*e);const h=this.position.clone().addScaledVector(this.velocity,e),u=this._getGroundY(h);h.y<=u+.02?(h.y=u,this.velocity.y=0,this.isGrounded=!0):this.isGrounded=!1,this.position.copy(this.physicsManager.checkCollision(h,.4,this.isCrouching?1.1:1.75)),this.rootGroup.position.copy(this.position),this.rootGroup.rotation.y=this.yaw;const f=Math.hypot(o,a)>.05&&this.isGrounded;if(f){this.footstepTimer+=e;const A=this.isSprinting?.28:.46;this.footstepTimer>=A&&(this.footstepTimer=0,(b=(w=this.audioManager).playFootstep)==null||b.call(w,this.isSprinting,this.isCrouching))}else this.footstepTimer=.15;if((L=(x=this.animController).update)==null||L.call(x,e,{moveForward:o,moveRight:a},this.isSprinting,this.isCrouching,this.isADS,!this.isGrounded,this.pitch),n!=null&&n.gunMesh){const A=n.gunMesh;A.parent!==i.fpsGunHolder&&i.fpsGunHolder.add(A);const E=this.isADS?1:0;this.adsProgress+=(E-this.adsProgress)*Math.min(1,e*16);const C=f?this.isSprinting?.008:.003:0,M=Math.sin(n.bobbingTimer)*C*(1-this.adsProgress*.85),v=Math.cos(n.bobbingTimer*.5)*C*.6*(1-this.adsProgress*.85);A.position.set(Et.lerp(.095,0,this.adsProgress)+n.swayX*.6+v,Et.lerp(-.095,-.06,this.adsProgress)-n.recoilKick+n.swayY*.6+M,Et.lerp(-.14,-.1,this.adsProgress)+n.recoilKick*.8);const X=this.isSprinting?.18:0;this.sprintCant+=(X-this.sprintCant)*e*10,A.rotation.set(n.swayY*.8,n.swayX*.8,-n.swayX*.5+this.sprintCant)}t.isReloading&&(n==null||n.reload(),t.isReloading=!1)}}const Wv=/^[og]\s*(.+)?/,Xv=/^mtllib /,qv=/^usemtl /,Yv=/^usemap /,sh=/\s+/,rh=new I,jo=new I,oh=new I,ah=new I,Kt=new I,br=new ye;function jv(){const s={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(i,r){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const a={index:this.materials.length,name:i||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(i){const r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),i&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return i&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},n&&n.name&&typeof n.clone=="function"){const i=n.clone(0);i.inherited=!0,this.object.materials.push(i)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){const i=this.vertices,r=this.object.geometry.vertices;r.push(i[e+0],i[e+1],i[e+2]),r.push(i[t+0],i[t+1],i[t+2]),r.push(i[n+0],i[n+1],i[n+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){const i=this.normals,r=this.object.geometry.normals;r.push(i[e+0],i[e+1],i[e+2]),r.push(i[t+0],i[t+1],i[t+2]),r.push(i[n+0],i[n+1],i[n+2])},addFaceNormal:function(e,t,n){const i=this.vertices,r=this.object.geometry.normals;rh.fromArray(i,e),jo.fromArray(i,t),oh.fromArray(i,n),Kt.subVectors(oh,jo),ah.subVectors(rh,jo),Kt.cross(ah),Kt.normalize(),r.push(Kt.x,Kt.y,Kt.z),r.push(Kt.x,Kt.y,Kt.z),r.push(Kt.x,Kt.y,Kt.z)},addColor:function(e,t,n){const i=this.colors,r=this.object.geometry.colors;i[e]!==void 0&&r.push(i[e+0],i[e+1],i[e+2]),i[t]!==void 0&&r.push(i[t+0],i[t+1],i[t+2]),i[n]!==void 0&&r.push(i[n+0],i[n+1],i[n+2])},addUV:function(e,t,n){const i=this.uvs,r=this.object.geometry.uvs;r.push(i[e+0],i[e+1]),r.push(i[t+0],i[t+1]),r.push(i[n+0],i[n+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,i,r,o,a,l,c){const d=this.vertices.length;let h=this.parseVertexIndex(e,d),u=this.parseVertexIndex(t,d),f=this.parseVertexIndex(n,d);if(this.addVertex(h,u,f),this.addColor(h,u,f),a!==void 0&&a!==""){const g=this.normals.length;h=this.parseNormalIndex(a,g),u=this.parseNormalIndex(l,g),f=this.parseNormalIndex(c,g),this.addNormal(h,u,f)}else this.addFaceNormal(h,u,f);if(i!==void 0&&i!==""){const g=this.uvs.length;h=this.parseUVIndex(i,g),u=this.parseUVIndex(r,g),f=this.parseUVIndex(o,g),this.addUV(h,u,f),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let n=0,i=e.length;n<i;n++){const r=this.parseVertexIndex(e[n],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const n=this.vertices.length,i=this.uvs.length;for(let r=0,o=e.length;r<o;r++)this.addVertexLine(this.parseVertexIndex(e[r],n));for(let r=0,o=t.length;r<o;r++)this.addUVLine(this.parseUVIndex(t[r],i))}};return s.startObject("",!1),s}class fd extends Un{constructor(e){super(e),this.materials=null}load(e,t,n,i){const r=this,o=new gl(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}setMaterials(e){return this.materials=e,this}parse(e){const t=new jv;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const n=e.split(`
`);let i=[];for(let a=0,l=n.length;a<l;a++){const c=n[a].trimStart();if(c.length===0)continue;const d=c.charAt(0);if(d!=="#")if(d==="v"){const h=c.split(sh);switch(h[0]){case"v":t.vertices.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3])),h.length>=7?(br.setRGB(parseFloat(h[4]),parseFloat(h[5]),parseFloat(h[6]),Ze),t.colors.push(br.r,br.g,br.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3]));break;case"vt":t.uvs.push(parseFloat(h[1]),parseFloat(h[2]));break}}else if(d==="f"){const u=c.slice(1).trim().split(sh),f=[];for(let _=0,m=u.length;_<m;_++){const p=u[_];if(p.length>0){const w=p.split("/");f.push(w)}}const g=f[0];for(let _=1,m=f.length-1;_<m;_++){const p=f[_],w=f[_+1];t.addFace(g[0],p[0],w[0],g[1],p[1],w[1],g[2],p[2],w[2])}}else if(d==="l"){const h=c.substring(1).trim().split(" ");let u=[];const f=[];if(c.indexOf("/")===-1)u=h;else for(let g=0,_=h.length;g<_;g++){const m=h[g].split("/");m[0]!==""&&u.push(m[0]),m[1]!==""&&f.push(m[1])}t.addLineGeometry(u,f)}else if(d==="p"){const u=c.slice(1).trim().split(" ");t.addPointGeometry(u)}else if((i=Wv.exec(c))!==null){const h=(" "+i[0].slice(1).trim()).slice(1);t.startObject(h)}else if(qv.test(c))t.object.startMaterial(c.substring(7).trim(),t.materialLibraries);else if(Xv.test(c))t.materialLibraries.push(c.substring(7).trim());else if(Yv.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(d==="s"){if(i=c.split(" "),i.length>1){const u=i[1].trim().toLowerCase();t.object.smooth=u!=="0"&&u!=="off"}else t.object.smooth=!0;const h=t.object.currentMaterial();h&&(h.smooth=t.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}t.finalize();const r=new Pt;if(r.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let a=0,l=t.objects.length;a<l;a++){const c=t.objects[a],d=c.geometry,h=c.materials,u=d.type==="Line",f=d.type==="Points";let g=!1;if(d.vertices.length===0)continue;const _=new Tt;_.setAttribute("position",new it(d.vertices,3)),d.normals.length>0&&_.setAttribute("normal",new it(d.normals,3)),d.colors.length>0&&(g=!0,_.setAttribute("color",new it(d.colors,3))),d.hasUVIndices===!0&&_.setAttribute("uv",new it(d.uvs,2));const m=[];for(let w=0,b=h.length;w<b;w++){const x=h[w],L=x.name+"_"+x.smooth+"_"+g;let A=t.materials[L];if(this.materials!==null){if(A=this.materials.create(x.name),u&&A&&!(A instanceof Wi)){const E=new Wi;tn.prototype.copy.call(E,A),E.color.copy(A.color),A=E}else if(f&&A&&!(A instanceof xs)){const E=new xs({size:10,sizeAttenuation:!1});tn.prototype.copy.call(E,A),E.color.copy(A.color),E.map=A.map,A=E}}A===void 0&&(u?A=new Wi:f?A=new xs({size:1,sizeAttenuation:!1}):A=new ys,A.name=x.name,A.flatShading=!x.smooth,A.vertexColors=g,t.materials[L]=A),m.push(A)}let p;if(m.length>1){for(let w=0,b=h.length;w<b;w++){const x=h[w];_.addGroup(x.groupStart,x.groupCount,w)}u?p=new vc(_,m):f?p=new No(_,m):p=new at(_,m)}else u?p=new vc(_,m[0]):f?p=new No(_,m[0]):p=new at(_,m[0]);p.name=c.name,r.add(p)}else if(t.vertices.length>0){const a=new xs({size:1,sizeAttenuation:!1}),l=new Tt;l.setAttribute("position",new it(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(l.setAttribute("color",new it(t.colors,3)),a.vertexColors=!0);const c=new No(l,a);r.add(c)}return r}}class $v extends Qf{constructor(e){super(e)}parse(e){function t(D){switch(D.image_type){case u:case _:if(D.colormap_length>256||D.colormap_size!==24||D.colormap_type!==1)throw new Error("THREE.TGALoader: Invalid type colormap data for indexed type.");break;case f:case g:case m:case p:if(D.colormap_type)throw new Error("THREE.TGALoader: Invalid type colormap data for colormap type.");break;case h:throw new Error("THREE.TGALoader: No data.");default:throw new Error("THREE.TGALoader: Invalid type "+D.image_type)}if(D.width<=0||D.height<=0)throw new Error("THREE.TGALoader: Invalid image size.");if(D.pixel_size!==8&&D.pixel_size!==16&&D.pixel_size!==24&&D.pixel_size!==32)throw new Error("THREE.TGALoader: Invalid pixel size "+D.pixel_size)}function n(D,X,z,J,ie){let re,pe;const le=z.pixel_size>>3,B=z.width*z.height*le;if(X&&(pe=ie.subarray(J,J+=z.colormap_length*(z.colormap_size>>3))),D){re=new Uint8Array(B);let q,j,K,oe=0;const Ce=new Uint8Array(le);for(;oe<B;)if(q=ie[J++],j=(q&127)+1,q&128){for(K=0;K<le;++K)Ce[K]=ie[J++];for(K=0;K<j;++K)re.set(Ce,oe+K*le);oe+=le*j}else{for(j*=le,K=0;K<j;++K)re[oe+K]=ie[J++];oe+=j}}else re=ie.subarray(J,J+=X?z.width*z.height:B);return{pixel_data:re,palettes:pe}}function i(D,X,z,J,ie,re,pe,le,B){const q=B;let j,K=0,oe,Ce;const Ee=v.width;for(Ce=X;Ce!==J;Ce+=z)for(oe=ie;oe!==pe;oe+=re,K++)j=le[K],D[(oe+Ee*Ce)*4+3]=255,D[(oe+Ee*Ce)*4+2]=q[j*3+0],D[(oe+Ee*Ce)*4+1]=q[j*3+1],D[(oe+Ee*Ce)*4+0]=q[j*3+2];return D}function r(D,X,z,J,ie,re,pe,le){let B,q=0,j,K;const oe=v.width;for(K=X;K!==J;K+=z)for(j=ie;j!==pe;j+=re,q+=2)B=le[q+0]+(le[q+1]<<8),D[(j+oe*K)*4+0]=(B&31744)>>7,D[(j+oe*K)*4+1]=(B&992)>>2,D[(j+oe*K)*4+2]=(B&31)<<3,D[(j+oe*K)*4+3]=B&32768?0:255;return D}function o(D,X,z,J,ie,re,pe,le){let B=0,q,j;const K=v.width;for(j=X;j!==J;j+=z)for(q=ie;q!==pe;q+=re,B+=3)D[(q+K*j)*4+3]=255,D[(q+K*j)*4+2]=le[B+0],D[(q+K*j)*4+1]=le[B+1],D[(q+K*j)*4+0]=le[B+2];return D}function a(D,X,z,J,ie,re,pe,le){let B=0,q,j;const K=v.width;for(j=X;j!==J;j+=z)for(q=ie;q!==pe;q+=re,B+=4)D[(q+K*j)*4+2]=le[B+0],D[(q+K*j)*4+1]=le[B+1],D[(q+K*j)*4+0]=le[B+2],D[(q+K*j)*4+3]=le[B+3];return D}function l(D,X,z,J,ie,re,pe,le){let B,q=0,j,K;const oe=v.width;for(K=X;K!==J;K+=z)for(j=ie;j!==pe;j+=re,q++)B=le[q],D[(j+oe*K)*4+0]=B,D[(j+oe*K)*4+1]=B,D[(j+oe*K)*4+2]=B,D[(j+oe*K)*4+3]=255;return D}function c(D,X,z,J,ie,re,pe,le){let B=0,q,j;const K=v.width;for(j=X;j!==J;j+=z)for(q=ie;q!==pe;q+=re,B+=2)D[(q+K*j)*4+0]=le[B+0],D[(q+K*j)*4+1]=le[B+0],D[(q+K*j)*4+2]=le[B+0],D[(q+K*j)*4+3]=le[B+1];return D}function d(D,X,z,J,ie){let re,pe,le,B,q,j;switch((v.flags&w)>>b){default:case A:re=0,le=1,q=X,pe=0,B=1,j=z;break;case x:re=0,le=1,q=X,pe=z-1,B=-1,j=-1;break;case E:re=X-1,le=-1,q=-1,pe=0,B=1,j=z;break;case L:re=X-1,le=-1,q=-1,pe=z-1,B=-1,j=-1;break}if(N)switch(v.pixel_size){case 8:l(D,pe,B,j,re,le,q,J);break;case 16:c(D,pe,B,j,re,le,q,J);break;default:throw new Error("THREE.TGALoader: Format not supported.")}else switch(v.pixel_size){case 8:i(D,pe,B,j,re,le,q,J,ie);break;case 16:r(D,pe,B,j,re,le,q,J);break;case 24:o(D,pe,B,j,re,le,q,J);break;case 32:a(D,pe,B,j,re,le,q,J);break;default:throw new Error("THREE.TGALoader: Format not supported.")}return D}const h=0,u=1,f=2,g=3,_=9,m=10,p=11,w=48,b=4,x=0,L=1,A=2,E=3;if(e.length<19)throw new Error("THREE.TGALoader: Not enough data to contain header.");let C=0;const M=new Uint8Array(e),v={id_length:M[C++],colormap_type:M[C++],image_type:M[C++],colormap_index:M[C++]|M[C++]<<8,colormap_length:M[C++]|M[C++]<<8,colormap_size:M[C++],origin:[M[C++]|M[C++]<<8,M[C++]|M[C++]<<8],width:M[C++]|M[C++]<<8,height:M[C++]|M[C++]<<8,pixel_size:M[C++],flags:M[C++]};if(t(v),v.id_length+C>e.length)throw new Error("THREE.TGALoader: No data.");C+=v.id_length;let R=!1,k=!1,N=!1;switch(v.image_type){case _:R=!0,k=!0;break;case u:k=!0;break;case m:R=!0;break;case f:break;case p:R=!0,N=!0;break;case g:N=!0;break}const W=new Uint8Array(v.width*v.height*4),Y=n(R,k,v,C,M);return d(W,v.width,v.height,Y.pixel_data,Y.palettes),{data:W,width:v.width,height:v.height,flipY:!0,generateMipmaps:!0,minFilter:In}}}class Kv{constructor(e,t){this.scene=e,this.audioManager=t,this.texLoader=new $h,this.tgaLoader=new $v,this.name="M4A1 CARBINE",this.fireMode="AUTO",this.fireRate=.09,this.fireTimer=0,this.damage=34,this.magSize=30,this.currentAmmo=30,this.reserveAmmo=120,this.isReloading=!1,this.reloadDuration=1.6,this.reloadTimer=0,this.recoilKick=0,this.maxRecoil=.04,this.swayX=0,this.swayY=0,this.bobbingTimer=0,this.tracers=[],this.sparks=[],this.casings=[],this.damageNumbers=[],this.gunMesh=null,this.masterGunTemplate=null,this._buildFPSViewmodel(),this._loadGunOBJ(),this._initMuzzleFX()}_buildFPSViewmodel(){const e=new Pt;e.name="fpsViewModel";const t=new at(new nn(.001,.001,.001),new Cs({visible:!1}));t.name="placeholder",e.add(t),this._muzzleLocalPos=new I(0,0,-.07),this.masterGunTemplate=t.clone(),this.gunMesh=e}_loadGunOBJ(){const e="./assets/models/weapons/textures/",t=(o,a=Ze)=>{const l=[`${e}${o}.tga.png`,`${e}${o}`,`./assets/models/weapons/SK texture/01/${o}.tga`,`./assets/models/weapons/SK texture/02/${o}.tga`];for(const c of l)try{const d=this.texLoader.load(c,h=>{h.colorSpace=a,h.wrapS=h.wrapT=$i},void 0,()=>{});if(d)return d}catch{}return null},n=new mt({map:t("01_BaseColor",Ze),normalMap:t("01_Normal",un),roughnessMap:t("01_Roughness",un),emissiveMap:t("01_Emissive",Ze),emissive:new ye(16777215),emissiveIntensity:.15,roughness:.55,metalness:.6}),i=new mt({map:t("02_BaseColor",Ze),normalMap:t("02_Normal",un),roughnessMap:t("02_Roughness",un),metalnessMap:t("02_Metallic",un),emissiveMap:t("02_Emissive",Ze),emissive:new ye(16777215),emissiveIntensity:.1,roughness:.45,metalness:.75});new fd().load("./assets/models/weapons/gun.obj",o=>{const a=new kt().setFromObject(o),l=new I;a.getSize(l);const c=new I;a.getCenter(c),o.traverse(f=>{f.isMesh&&f.position.sub(c)});const d=Math.max(l.x,l.y,l.z),h=.13/Math.max(d,.001);o.scale.setScalar(h),l.x>=l.y&&l.x>=l.z?o.rotation.y=-Math.PI/2:l.y>=l.x&&l.y>=l.z&&(o.rotation.x=Math.PI/2);let u=0;for(o.traverse(f=>{f.isMesh&&(f.material=u%2===0?n:i,f.castShadow=!1,u++)});this.gunMesh.children.length>0;)this.gunMesh.remove(this.gunMesh.children[0]);o.name="gun",this.gunMesh.add(o),this._muzzleLocalPos=new I(0,0,-h*d*.5),this.masterGunTemplate=o.clone(),console.log("[WeaponManager] gun.obj loaded, scale:",h.toFixed(5))},void 0,()=>{console.log("[WeaponManager] gun.obj not found — using procedural rifle")})}_initMuzzleFX(){this.muzzleLight=new qr(16755234,0,7),this.scene.add(this.muzzleLight);const e=document.createElement("canvas");e.width=e.height=64;const t=e.getContext("2d"),n=t.createRadialGradient(32,32,0,32,32,30);n.addColorStop(0,"#ffffff"),n.addColorStop(.3,"#ffcc44"),n.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=n,t.fillRect(0,0,64,64);const i=new ui({map:new ts(e),blending:Qo});this.muzzleSprite=new es(i),this.muzzleSprite.scale.setScalar(.4),this.muzzleSprite.visible=!1,this.scene.add(this.muzzleSprite)}cloneGunMesh(){return this.masterGunTemplate?this.masterGunTemplate.clone():null}canShoot(){return this.fireTimer<=0&&!this.isReloading&&this.currentAmmo>0}shoot(e,t,n){var r;if(!this.canShoot())return this.currentAmmo<=0&&!this.isReloading&&this.reload(),null;this.currentAmmo--,this.fireTimer=this.fireRate,this.recoilKick=this.maxRecoil,this.audioManager.playGunshot(),this._triggerMuzzleFlash(e,t),this._ejectCasing(e,t);const i=n?n.point:e.clone().add(t.clone().multiplyScalar(200));return this._spawnTracer(e,i),n&&this._spawnImpact(n.point,((r=n.face)==null?void 0:r.normal)??new I(0,1,0)),{damage:this.damage,hit:n}}reload(){this.isReloading||this.currentAmmo===this.magSize||this.reserveAmmo<=0||(this.isReloading=!0,this.reloadTimer=this.reloadDuration,this.audioManager.playReload())}spawnDamageNumber(e,t,n=!1){const i=document.createElement("canvas");i.width=128,i.height=64;const r=i.getContext("2d");r.font=`bold ${n?32:26}px 'Segoe UI',sans-serif`,r.fillStyle=n?"#ffb703":"#ff3366",r.textAlign="center",r.shadowColor="#000",r.shadowBlur=4,r.fillText(`-${Math.ceil(t)}${n?" !":""}`,64,42);const o=new ui({map:new ts(i),depthTest:!1}),a=new es(o);a.position.copy(e).add(new I(0,.3,0)),a.scale.set(.75,.38,1),this.scene.add(a),this.damageNumbers.push({sprite:a,velocity:new I(0,1.1,0),life:.75})}_triggerMuzzleFlash(e,t){const n=e.clone().add(t.clone().multiplyScalar(.55));this.muzzleLight.position.copy(n),this.muzzleLight.intensity=3.5,this.muzzleSprite.position.copy(n),this.muzzleSprite.visible=!0,setTimeout(()=>{this.muzzleLight.intensity=0,this.muzzleSprite.visible=!1},38)}_ejectCasing(e,t){const n=new I(t.z,0,-t.x).normalize(),i=new pl(.005,.005,.025,6),r=new mt({color:13938487,metalness:.95,roughness:.2}),o=new at(i,r);o.position.copy(e),this.scene.add(o);const a=n.clone().multiplyScalar(1.8+Math.random());a.y+=1.3+Math.random()*.5,this.casings.push({mesh:o,velocity:a,life:.9})}_spawnTracer(e,t){const n=new Tt().setFromPoints([e.clone(),e.clone()]),i=new Wi({color:16772693,transparent:!0,opacity:.9}),r=new fl(n,i);this.scene.add(r),this.tracers.push({line:r,start:e.clone(),end:t.clone(),progress:0,speed:14})}_spawnImpact(e,t){for(let n=0;n<5;n++){const i=new at(new Bs(.025,4,4),new Cs({color:16755234}));i.position.copy(e);const r=t.clone().multiplyScalar(1.8+Math.random()*2);r.x+=(Math.random()-.5)*1.5,r.y+=(Math.random()-.5)*1.5,r.z+=(Math.random()-.5)*1.5,this.scene.add(i),this.sparks.push({mesh:i,velocity:r,life:.22})}}update(e,t={x:0,y:0},n=!1,i=!1){if(this.fireTimer>0&&(this.fireTimer-=e),this.recoilKick=Math.max(0,this.recoilKick-e*.55),this.swayX+=(t.x*.16-this.swayX)*.2,this.swayY+=(t.y*.16-this.swayY)*.2,n?this.bobbingTimer+=e*(i?13:8.5):this.bobbingTimer=0,this.isReloading&&(this.reloadTimer-=e,this.reloadTimer<=0)){const r=Math.min(this.magSize-this.currentAmmo,this.reserveAmmo);this.currentAmmo+=r,this.reserveAmmo-=r,this.isReloading=!1}for(let r=this.tracers.length-1;r>=0;r--){const o=this.tracers[r];o.progress+=e*o.speed;const a=o.start.clone().lerp(o.end,Math.min(1,o.progress)),l=o.start.clone().lerp(o.end,Math.max(0,o.progress-.18));o.line.geometry.setFromPoints([l,a]),o.progress>1.2&&(this.scene.remove(o.line),o.line.geometry.dispose(),o.line.material.dispose(),this.tracers.splice(r,1))}for(let r=this.sparks.length-1;r>=0;r--){const o=this.sparks[r];o.life-=e,o.velocity.y-=9.8*e,o.mesh.position.addScaledVector(o.velocity,e),o.life<=0&&(this.scene.remove(o.mesh),o.mesh.geometry.dispose(),o.mesh.material.dispose(),this.sparks.splice(r,1))}for(let r=this.casings.length-1;r>=0;r--){const o=this.casings[r];o.life-=e,o.velocity.y-=12*e,o.mesh.position.addScaledVector(o.velocity,e),o.mesh.position.y<.01&&(o.mesh.position.y=.01,o.velocity.y*=-.3),o.life<=0&&(this.scene.remove(o.mesh),o.mesh.geometry.dispose(),o.mesh.material.dispose(),this.casings.splice(r,1))}for(let r=this.damageNumbers.length-1;r>=0;r--){const o=this.damageNumbers[r];o.life-=e,o.sprite.position.addScaledVector(o.velocity,e),o.sprite.material.opacity=Math.max(0,o.life/.75),o.life<=0&&(this.scene.remove(o.sprite),o.sprite.material.dispose(),this.damageNumbers.splice(r,1))}}}class Zv{constructor(e,t,n,i,r={}){this.scene=e,this.physicsManager=t,this.audioManager=n,this.weaponManager=i,this.config={position:{x:0,y:0,z:0},type:"GRUNT",level:1,name:"GRUNT_1",...r},this.isDead=!1,this.modelReady=!1,this.health=this._maxHealth(),this.deathTimer=0,this.group=new Pt,this.group.position.set(this.config.position.x,0,this.config.position.z),this.group.visible=!1,this.scene.add(this.group),this._velY=0,this.model=null,this.mixer=null,this.animations={},this.currentAnim=null,this.state="IDLE",this.detectionRange=45,this.shootingRange=30,this.speed=this._speed(),this.accuracy=this._accuracy(),this.shootCooldown=this.config.type==="SNIPER"?2.5:this.config.type==="HEAVY"?.4:.22,this.shootTimer=Math.random()*this.shootCooldown;const o=this.config.position;this.waypoints=[new I(o.x+12,0,o.z+12),new I(o.x-12,0,o.z+12),new I(o.x-12,0,o.z-12),new I(o.x+12,0,o.z-12)],this.waypointIdx=0,this.idleTimer=0,this.stateTimer=0,this.crouchTimer=0,this.groundY=0,this._rc=new Yr,this._down=new I(0,-1,0),this._loadSoldier(),this._buildHealthBar(),this._buildNametag(),this.muzzleLight=new qr(16768256,0,8),this.muzzleLight.position.set(0,1.4,.8),this.group.add(this.muzzleLight)}_loadSoldier(){new jn().load("./assets/models/soldier/Swat.fbx",e=>{e.scale.setScalar(.01),e.rotation.y=Math.PI,this.rightHandBone=null,e.traverse(t=>{if(t.isMesh&&(t.castShadow=!0,t.receiveShadow=!0),t.isBone){const n=t.name.toLowerCase();(n.includes("righthand")||n.includes("hand_r"))&&(this.rightHandBone=t)}}),this.group.add(e),this.model=e,this.mixer=new yl(e),this._loadGun(),this._loadAnimations()},void 0,()=>this._buildBoxSoldier())}_buildBoxSoldier(){const e=new Pt,t=new mt({color:3359829,roughness:.75}),n=(o,a,l,c)=>{const d=new at(new nn(o,a,l),t);d.position.y=c,d.castShadow=!0,e.add(d)};n(.4,.9,.3,1.15),n(.2,.85,.22,.42);const i=new at(new Bs(.15,8,8),t);i.position.y=1.7,e.add(i),this.group.add(e),this.model=e;const r=this.physicsManager.getGroundHeight(this.group.position);this.groundY=r,this.group.position.y=r,this.group.visible=!0,this.modelReady=!0,this._buildHealthBar()}_loadGun(){new fd().load("./assets/models/weapons/gun.obj",e=>{const t=new kt().setFromObject(e),n=new I;t.getSize(n);const o=.55/Math.max(n.x,n.y,n.z)/.01;e.scale.setScalar(o),n.x>=n.z&&(e.rotation.y=-Math.PI/2);const a=new mt({color:1710638,metalness:.7,roughness:.35});e.traverse(l=>{l.isMesh&&(l.material=a)}),this.rightHandBone?(e.position.set(0,8,5),e.rotation.set(0,Math.PI,0),this.rightHandBone.add(e)):(e.scale.setScalar(.13),e.position.set(.4,1.2,.3),this.group.add(e)),this.gunObj=e})}_loadAnimations(){const e=["idle","idle aiming","walk forward","run forward","idle crouching","idle crouching aiming","death from the front","death from the back","death from front headshot"];let t=0;const n=new jn;e.forEach(i=>{n.load(`./assets/models/soldier/animations/${i}.fbx`,r=>{if(!r.animations[0]){t++,t===e.length&&this._onAnimsReady();return}const o=this.mixer.clipAction(r.animations[0]);i.startsWith("death")&&(o.clampWhenFinished=!0,o.loop=Zr),this.animations[i]=o,t++,t===e.length&&this._onAnimsReady()},void 0,()=>{t++,t===e.length&&this._onAnimsReady()})})}_onAnimsReady(){const e=this.physicsManager.getGroundHeight(this.group.position);this.groundY=e,this.group.position.y=e,this.waypoints.forEach(t=>{t.y=e}),this.modelReady=!0,this.group.visible=!0,this._play("idle")}_play(e,t=.25){var i;const n=this.animations[e]||this.animations.idle;!n||this.currentAnim===n||((i=this.currentAnim)==null||i.fadeOut(t),n.reset().fadeIn(t).play(),this.currentAnim=n)}_buildHealthBar(){const e=document.createElement("canvas");e.width=256,e.height=28,this._hpCtx=e.getContext("2d"),this._hpTex=new ts(e);const t=new es(new ui({map:this._hpTex,depthTest:!1}));t.scale.set(1.8,.22,1),t.position.set(0,2.4,0),this.group.add(t),this.healthBarSprite=t,this._redrawHp()}_redrawHp(){if(!this._hpCtx)return;const e=this._hpCtx,t=256,n=28;e.clearRect(0,0,t,n),e.fillStyle="#111",e.fillRect(0,0,t,n);const i=Math.max(0,this.health/this._maxHealth());e.fillStyle=i>.5?"#00dd44":i>.25?"#ffaa00":"#ff2222",e.fillRect(2,2,(t-4)*i,n-4),this._hpTex.needsUpdate=!0}_buildNametag(){const e=document.createElement("canvas");e.width=512,e.height=56;const t=e.getContext("2d");t.font="bold 36px Arial",t.fillStyle="#ffffff",t.textAlign="center",t.textBaseline="middle",t.fillText(`Lv${this.config.level} ${this.config.type}`,256,28);const n=new es(new ui({map:new ts(e),depthTest:!1}));n.scale.set(2.8,.35,1),n.position.set(0,2.75,0),this.group.add(n)}_maxHealth(){return(this.config.type==="HEAVY"?200:this.config.type==="SNIPER"?80:100)*Math.max(1,this.config.level)}_speed(){return this.config.type==="HEAVY"?1.8:this.config.type==="SNIPER"?2.5:3.2}_accuracy(){return this.config.type==="SNIPER"?.85:this.config.type==="HEAVY"?.35:.5}takeDamage(e,t){return this.isDead?!1:(this.health-=e,this._redrawHp(),this.health<=0?(this.die(t),!0):((this.state==="IDLE"||this.state==="PATROL")&&(this.state="CHASE"),!1))}die(e){this.isDead=!0,this.state="DEAD",this.deathTimer=0,this.healthBarSprite&&(this.healthBarSprite.visible=!1);const t=e==="headshot"?"death from front headshot":"death from the front";this._play(t,.1)}destroy(){this.scene.remove(this.group)}_snapToGround(e){const t=this.physicsManager.getGroundHeight(this.group.position);this.groundY=t,this.group.position.y=t}_shoot(e){var t,n;if(e&&(this.muzzleLight.intensity=3,setTimeout(()=>{this.muzzleLight.intensity=0},60),(n=(t=this.audioManager)==null?void 0:t.playGunshot)==null||n.call(t),Math.random()<this._accuracy())){const i=(this.config.type==="SNIPER"?60:this.config.type==="HEAVY"?20:12)*this.config.level;e.takeDamage(i)}}_moveTo(e,t,n){const i=new I().subVectors(e,this.group.position);i.y=0,!(i.length()<.2)&&(i.normalize(),this.group.position.addScaledVector(i,n*t),this.group.rotation.y=Math.atan2(i.x,i.z))}_lookAt(e){const t=e.x-this.group.position.x,n=e.z-this.group.position.z;this.group.rotation.y=Math.atan2(t,n)}update(e,t,n){var r;if(!this.modelReady)return;if((r=this.mixer)==null||r.update(e),this.isDead){this.deathTimer+=e;return}this._snapToGround(e);const i=this.group.position.distanceTo(t);switch(this.stateTimer+=e,this.state!=="DEAD"&&(i<=this.detectionRange&&this.state==="IDLE"&&(this.state="PATROL"),i<=this.detectionRange*.7&&(this.state==="IDLE"||this.state==="PATROL")&&(this.state="CHASE"),i<=this.shootingRange&&this.state==="CHASE"&&(this.state="COMBAT"),i>this.shootingRange+5&&this.state==="COMBAT"&&(this.state="CHASE")),this.state){case"IDLE":this._play("idle"),this.idleTimer+=e,this.idleTimer>3&&(this.state="PATROL",this.idleTimer=0);break;case"PATROL":{this._play("walk forward");const o=this.waypoints[this.waypointIdx];this._moveTo(o,e,this.speed*.45),this.group.position.distanceTo(o)<1.2&&(this.waypointIdx=(this.waypointIdx+1)%this.waypoints.length,this.state="IDLE");break}case"CHASE":this._play("run forward"),this._moveTo(t,e,this.speed);break;case"COMBAT":{if(this._lookAt(t),this.crouchTimer+=e,this.crouchTimer>4&&Math.random()<.3&&(this.crouchTimer=0,this.state="CROUCH"),this._play("idle aiming"),this.shootTimer-=e,this.shootTimer<=0&&(this.shootTimer=this.shootCooldown+Math.random()*.3,this._shoot(n)),i<4){const o=new I().subVectors(this.group.position,t).normalize();this.group.position.addScaledVector(o,this.speed*.5*e)}break}case"CROUCH":{this._lookAt(t),this._play("idle crouching aiming"),this.shootTimer-=e,this.shootTimer<=0&&(this.shootTimer=this.shootCooldown+Math.random()*.4,this._shoot(n)),this.crouchTimer+=e,this.crouchTimer>3&&(this.crouchTimer=0,this.state="COMBAT");break}}}}class Jv{constructor(e,t,n,i,r){this.sceneManager=e,this.threeScene=e.scene,this.physicsManager=t,this.audioManager=n,this.weaponManager=i,this.hud=r,this.currentLevel=1,this.currentLevelName="CITY DISTRICT",this.enemies=[],this.onLevelComplete=null,this.levelLoaded=!1,this.mapMesh=null,this._completeFired=!1,this._levelConfigs={1:{name:"CITY DISTRICT",grunt:8,heavy:2,sniper:0,mode:"day"},2:{name:"INDUSTRIAL ZONE",grunt:12,heavy:4,sniper:2,mode:"industrial"},3:{name:"NIGHT RAID",grunt:16,heavy:6,sniper:4,mode:"night"}},this._extraObjects=[]}async loadLevel(e,t,n=!1){var r;this.currentLevel=e,this.onLevelComplete=t,this.levelLoaded=!1,this._completeFired=!1;for(const o of this.enemies)(r=o.destroy)==null||r.call(o);this.enemies=[];for(const o of this._extraObjects)this.threeScene.remove(o);this._extraObjects=[];const i=this._levelConfigs[e]??this._levelConfigs[1];this.currentLevelName=i.name,this.mapMesh||await this._loadCityFBX(),this._setupLevelEnvironment(i.mode),e===2&&this._setupIndustrialElements(),n||this._spawnEnemies(i),this.levelLoaded=!0,console.log(`[LevelManager] Level ${e} – "${i.name}" loaded. ${this.enemies.length} enemies.`)}update(e,t,n){var i,r,o;if(this.levelLoaded){for(let a=this.enemies.length-1;a>=0;a--){const l=this.enemies[a];(i=l.update)==null||i.call(l,e,t,n),l.isDead&&(l.deathTimer??0)>8&&((r=l.destroy)==null||r.call(l),this.enemies.splice(a,1))}!this._completeFired&&this.checkAllEnemiesKilled()&&(this._completeFired=!0,(o=this.onLevelComplete)==null||o.call(this))}}getCurrentLevel(){return this.currentLevel}getEnemies(){return this.enemies}getEnemiesAlive(){return this.enemies.filter(e=>!e.isDead).length}checkAllEnemiesKilled(){return this.enemies.length===0?!1:this.enemies.every(e=>e.isDead)}_spawnEnemies(e){const t=(i,r)=>{const o=i/r*Math.PI*2+(Math.random()-.5)*.7,a=20+Math.random()*45;return{x:Math.cos(o)*a,y:5,z:Math.sin(o)*a}},n=[...Array(e.grunt??0).fill("GRUNT"),...Array(e.heavy??0).fill("HEAVY"),...Array(e.sniper??0).fill("SNIPER")];n.forEach((i,r)=>{const o=t(r,n.length),a=new Zv(this.threeScene,this.physicsManager,this.audioManager,this.weaponManager,{position:o,type:i,level:this.currentLevel,name:`${i}_${r+1}`});this.enemies.push(a)})}_setupLevelEnvironment(e){var n,i,r,o;const t=this.threeScene;e==="day"?(t.background=new ye(8900331),t.fog=new li(8900331,60,200),this.sceneManager.setNightMode(!1),(i=(n=this.sceneManager).setIndustrialMode)==null||i.call(n,!1)):e==="industrial"?(t.background=new ye(2494468),t.fog=new li(2756616,30,160),(o=(r=this.sceneManager).setIndustrialMode)==null||o.call(r,!0)):e==="night"&&(t.background=new ye(329743),t.fog=new Qr(528410,.022),this.sceneManager.setNightMode(!0))}_setupIndustrialElements(){const e=[8004130,2250103,3815994,4858368],t=(n,i,r,o,a,l,c,d=0)=>{const h=new at(new nn(n,i,r),new mt({color:o,roughness:.8,metalness:.35}));h.position.set(a,l,c),h.rotation.y=d,h.castShadow=!0,h.receiveShadow=!0,this.threeScene.add(h),this._extraObjects.push(h);const u=n/2,f=r/2;this.physicsManager.addBoxCollider(new I(a-u,l,c-f),new I(a+u,l+i,c+f))};for(let n=0;n<18;n++){const i=Math.random()*Math.PI*2,r=15+Math.random()*50,o=Math.cos(i)*r,a=Math.sin(i)*r,l=e[Math.floor(Math.random()*e.length)];t(4+Math.random()*3,3+Math.random()*3,10+Math.random()*4,l,o,1.5,a,Math.random()*Math.PI)}t(40,.4,4,2763306,0,8,-10),t(40,.4,4,2763306,0,8,10)}_loadCityFBX(){return new Promise(e=>{new mt({color:8028038,roughness:.85,metalness:.08}),new mt({color:8042708,roughness:.1,metalness:.3,transparent:!0,opacity:.65}),new jn().load("./assets/models/environment/city.fbx",t=>{var M,v,R,k;this.threeScene.add(t),t.rotation.x=-Math.PI/2,t.updateMatrixWorld(!0);const n=new kt().setFromObject(t),i=new I;n.getSize(i),console.log("[LevelManager] Raw city size (after rotation):",i.x.toFixed(0),i.y.toFixed(0),i.z.toFixed(0));const o=180/Math.max(i.x,i.z,.001);t.scale.setScalar(o),t.updateMatrixWorld(!0);const a=new kt().setFromObject(t),l=new I;a.getCenter(l),t.position.set(t.position.x-l.x,t.position.y-a.min.y,t.position.z-l.z),t.updateMatrixWorld(!0);const c=new kt().setFromObject(t),d=new I;c.getSize(d),console.log(`[LevelManager] City placed: ${d.x.toFixed(0)}×${d.z.toFixed(0)}m, h=${d.y.toFixed(0)}m`);const h=[1713461,1977626,2431533,2955802,1713453,2958618,1711661,2763290,1715493,2955813],u=[new mt({color:5945556,roughness:.06,metalness:.5,transparent:!0,opacity:.52}),new mt({color:4040896,roughness:.06,metalness:.5,transparent:!0,opacity:.52}),new mt({color:7916714,roughness:.06,metalness:.5,transparent:!0,opacity:.52})],f=[58879,16737792,16763904,4521864,16729224,8930559],g=new mt({color:1974822,roughness:.99,metalness:.01}),_=new mt({color:2764339,roughness:.88,metalness:.08}),m=new mt({color:3488578,roughness:.92,metalness:.04}),p=new kt;let w=0;t.traverse(N=>{if(!N.isMesh)return;N.castShadow=!0,N.receiveShadow=!0;const W=(N.name??"").toLowerCase();if(W.includes("glass")||W.includes("window"))N.material=u[w%u.length];else if(W.includes("road")||W.includes("street")||W.includes("pavement"))N.material=g;else if(W.includes("roof")||W.includes("top"))N.material=_;else{p.setFromObject(N);const Y=p.max.y-p.min.y;Y>25?N.material=new mt({color:h[w%h.length],roughness:.28,metalness:.65,emissive:new ye(f[w%f.length]),emissiveIntensity:.025}):Y>8?N.material=new mt({color:h[(w+4)%h.length],roughness:.72,metalness:.18}):N.material=m}w++}),t.name="city_map",this.mapMesh=t;const b=d.x+30,x=d.z+30,L=new at(new is(b,x),new mt({color:4869972,roughness:.92,metalness:.04}));L.rotation.x=-Math.PI/2,L.position.set(0,.02,0),L.receiveShadow=!0,L.name="cityGround",this.threeScene.add(L),this._extraObjects.push(L),(v=(M=this.physicsManager).clearColliders)==null||v.call(M);const A=new kt,E=new I;let C=0;t.traverse(N=>{var W,Y;N.isMesh&&(A.setFromObject(N),A.getSize(E),!(Math.max(E.x,E.y,E.z)<2)&&((Y=(W=this.physicsManager).addBoxCollider)==null||Y.call(W,A.min.clone(),A.max.clone()),C++))}),(k=(R=this.physicsManager).invalidateCache)==null||k.call(R),console.log(`[LevelManager] ${C} building colliders registered`),e()},void 0,()=>{console.info("[LevelManager] city.fbx not found — procedural fallback"),this._buildProceduralCity(),e()})})}_buildProceduralCity(){const e=(i,r=.75,o=.15)=>new mt({color:i,roughness:r,metalness:o}),t=(i,r,o,a,l,c,d)=>{const h=new at(new nn(i,r,o),e(a));h.position.set(l,c,d),h.castShadow=!0,h.receiveShadow=!0,this.threeScene.add(h),this._extraObjects.push(h)};t(500,.2,500,3815994,0,0,0),[[8,16,8,4871528,-28,8,-20],[8,22,8,3621201,28,11,-22],[12,10,10,4871528,-42,5,20],[10,18,10,3621201,42,9,22],[8,12,8,4871528,0,6,-38],[6,8,6,3621201,18,4,35],[6,8,6,3621201,-18,4,35],[12,6,8,3621201,0,3,28]].forEach(i=>t(...i))}}class Qv{constructor(){this._ammo=30,this._reserve=120,this._health=100,this._armor=150,this._killstreak=0,this._kills=0,this._enemiesLeft=0,this._level=1,this._levelName="CITY DISTRICT",this._killfeedItems=[],this._killfeedTimer=0,this._buildDOM(),this._bindElements(),this.update({ammo:30,reserve:120,health:100,armor:150,kills:0,enemiesLeft:8,level:1,levelName:"CITY DISTRICT",pitch:0,yaw:0,isADS:!1,isSprinting:!1,isCrouching:!1,isReloading:!1})}_buildDOM(){const e=document.getElementById("hud");if(!e){console.error("[HUD] #hud element not found");return}e.innerHTML=`
      <!-- Crosshair -->
      <div id="hud-crosshair">
        <div class="ch-top"></div><div class="ch-bot"></div>
        <div class="ch-lft"></div><div class="ch-rgt"></div>
        <div class="ch-dot"></div>
      </div>

      <!-- ── Bottom Left: Weapon & Ammo ── -->
      <div id="hud-weapon-block">
        <div id="hud-weapon-name">M4A1 CARBINE</div>
        <div id="hud-fire-mode">AUTO</div>
        <div id="hud-ammo-row">
          <span id="hud-ammo-cur">30</span>
          <span id="hud-ammo-sep"> / </span>
          <span id="hud-ammo-res">120</span>
        </div>
        <div id="hud-reload-bar" class="hidden"><div id="hud-reload-fill"></div></div>
      </div>

      <!-- ── Bottom Center: Vitals ── -->
      <div id="hud-vitals">
        <!-- Armor Bar -->
          <div id="hud-armor-row">
            <span style="font-size:.75rem;color:#00e5ff;letter-spacing:.1em;min-width:50px;">ARMOR</span>
            <div id="hud-armor-bar"><div id="hud-armor-fill" style="width:100%"></div></div>
            <span id="hud-armor-val">150</span>
          </div>
        <!-- HP Bar -->
        <div id="hud-hp-row">
          <div id="hud-hp-bar"><div id="hud-hp-fill"></div></div>
          <span id="hud-hp-val">100</span>
        </div>
      </div>

      <!-- ── Top Left: Minimap stub ── -->
      <div id="hud-minimap">
        <canvas id="minimap-canvas" width="160" height="160"></canvas>
        <div id="minimap-label">MINIMAP</div>
      </div>

      <!-- ── Top Center: Level Banner ── -->
      <div id="hud-level-banner">
        <div id="hud-level-num">LEVEL 1</div>
        <div id="hud-level-name">CITY DISTRICT</div>
      </div>

      <!-- ── Top Right: Score Panel ── -->
      <div id="hud-score-panel">
        <div class="score-row"><span class="score-lbl">KILLS</span><span id="hud-kills">0</span></div>
        <div class="score-row"><span class="score-lbl">ENEMIES</span><span id="hud-enemies">8</span></div>
      </div>

      <!-- ── Compass ── -->
      <div id="hud-compass"><div id="hud-compass-strip">
        <span>N</span><span>NE</span><span>E</span><span>SE</span>
        <span>S</span><span>SW</span><span>W</span><span>NW</span>
        <span>N</span>
      </div></div>

      <!-- ── Hit Indicator (flash on damage) ── -->
      <div id="hud-hit-dir"></div>
      <div id="hud-vignette"></div>

      <!-- ── Killfeed ── -->
      <div id="hud-killfeed"></div>

      <!-- ── Elimination Banner ── -->
      <div id="hud-elim-banner" class="hidden">
        <div id="hud-elim-title">ENEMY ELIMINATED</div>
        <div id="hud-elim-sub" id="hud-elim-sub"></div>
      </div>

      <!-- ── State tags (ADS, sprint, crouch) ── -->
      <div id="hud-state-bar">
        <div id="hud-tag-ads"     class="state-tag hidden">[ ADS ]</div>
        <div id="hud-tag-sprint"  class="state-tag hidden">[ SPRINT ]</div>
        <div id="hud-tag-crouch"  class="state-tag hidden">[ CROUCH ]</div>
      </div>

      <!-- ── Objective ── -->
      <div id="hud-objective">
        <div id="hud-obj-icon">◉</div>
        <div id="hud-obj-text">ELIMINATE ALL ENEMIES</div>
        <div id="hud-obj-count"><span id="hud-obj-rem">8</span> remaining</div>
      </div>

      <!-- ── Level Complete ── -->
      <div id="hud-level-complete" class="hidden">
        <div id="hud-lc-title">LEVEL COMPLETE</div>
        <div id="hud-lc-sub">Next mission loading…</div>
        <div id="hud-lc-bar"><div id="hud-lc-fill"></div></div>
      </div>

        <!-- 💀 Death Screen 💀 -->
        <div id="hud-death-screen" class="hidden">
          <div id="hud-death-title">YOU WERE ELIMINATED</div>
          <div id="hud-death-buttons">
            <button id="btn-respawn">RESPAWN</button>
            <button id="btn-main-menu">MAIN MENU</button>
          </div>
        </div>
      `}_bindElements(){const e=t=>document.getElementById(t);this._el={ammoCur:e("hud-ammo-cur"),ammoRes:e("hud-ammo-res"),reloadBar:e("hud-reload-bar"),reloadFill:e("hud-reload-fill"),armorFill:e("hud-armor-fill"),armorVal:e("hud-armor-val"),hpFill:e("hud-hp-fill"),hpVal:e("hud-hp-val"),levelNum:e("hud-level-num"),levelName:e("hud-level-name"),kills:e("hud-kills"),enemies:e("hud-enemies"),compassStrip:e("hud-compass-strip"),killfeed:e("hud-killfeed"),elimBanner:e("hud-elim-banner"),elimTitle:e("hud-elim-title"),elimSub:e("hud-elim-sub"),tagADS:e("hud-tag-ads"),tagSprint:e("hud-tag-sprint"),tagCrouch:e("hud-tag-crouch"),objText:e("hud-obj-text"),objRem:e("hud-obj-rem"),levelComplete:e("hud-level-complete"),lcFill:e("hud-lc-fill"),deathScreen:e("hud-death-screen"),deathCounter:e("hud-death-counter"),vignette:e("hud-vignette")}}update(e){var b,x,L,A,E,C,M;const{ammo:t,reserve:n,health:i,armor:r,kills:o,enemiesLeft:a,level:l,levelName:c,yaw:d,isADS:h,isSprinting:u,isCrouching:f,isReloading:g,reloadProgress:_}=e;this._el.ammoCur&&(this._el.ammoCur.textContent=t),this._el.ammoRes&&(this._el.ammoRes.textContent=n),t===0&&!g?(b=this._el.ammoCur)==null||b.classList.add("ammo-empty"):(x=this._el.ammoCur)==null||x.classList.remove("ammo-empty"),g&&_!==void 0&&this._el.reloadBar?(this._el.reloadBar.classList.remove("hidden"),this._el.reloadFill&&(this._el.reloadFill.style.width=`${_*100}%`)):this._el.reloadBar&&this._el.reloadBar.classList.add("hidden");const m=Math.max(0,i/100);this._el.hpFill&&(this._el.hpFill.style.width=`${m*100}%`),this._el.hpVal&&(this._el.hpVal.textContent=Math.ceil(i)),i<=30?(L=this._el.vignette)==null||L.classList.add("low-health"):(A=this._el.vignette)==null||A.classList.remove("low-health");const p=Math.max(0,r),w=150;if(this._el.armorFill&&(this._el.armorFill.style.width=(p/w*100).toFixed(1)+"%"),this._el.armorVal&&(this._el.armorVal.textContent=Math.ceil(p)),this._el.levelNum&&l!==void 0&&(this._el.levelNum.textContent=`LEVEL ${l}`),this._el.levelName&&c&&(this._el.levelName.textContent=c),this._el.kills&&(this._el.kills.textContent=o??0),this._el.enemies&&(this._el.enemies.textContent=a??0),this._el.objRem&&(this._el.objRem.textContent=a??0),(E=this._el.tagADS)==null||E.classList.toggle("hidden",!h),(C=this._el.tagSprint)==null||C.classList.toggle("hidden",!u),(M=this._el.tagCrouch)==null||M.classList.toggle("hidden",!f),this._el.compassStrip&&d!==void 0){const R=(-d*180/Math.PI%360+360)%360/360*-100;this._el.compassStrip.style.transform=`translateX(calc(50% + ${R}%))`}}addKillfeedEvent(e,t,n="M4A1",i=!1){const r=this._el.killfeed;if(!r)return;const o=document.createElement("div");o.className="kf-item"+(i?" kf-headshot":""),o.innerHTML=`<span class="kf-killer">${e}</span>
      ${i?"💀":"☠"}<span class="kf-wep">${n}</span>
      <span class="kf-victim">${t}</span>`,r.appendChild(o),setTimeout(()=>o.classList.add("kf-fade"),4500),setTimeout(()=>r.removeChild(o),5e3)}showEliminatedBanner(e,t=!1){this._el.elimBanner&&(this._el.elimTitle&&(this._el.elimTitle.textContent=t?"💀 HEADSHOT ELIMINATION":"ENEMY ELIMINATED"),this._el.elimSub&&(this._el.elimSub.textContent=e?`+ ${e}`:""),this._el.elimBanner.classList.remove("hidden"),this._el.elimBanner.classList.add("elim-anim"),setTimeout(()=>{this._el.elimBanner.classList.add("hidden"),this._el.elimBanner.classList.remove("elim-anim")},2800))}showHitIndicator(e="front"){const t=document.getElementById("hud-hit-dir");t&&(t.className=`hit-dir-${e}`,t.classList.add("hit-flash"),setTimeout(()=>t.classList.remove("hit-flash"),400))}showLevelComplete(e,t=3e3){const n=this._el.levelComplete;if(!n)return;n.classList.remove("hidden");let i=0;const r=50,o=r/t,a=setInterval(()=>{i+=o,this._el.lcFill&&(this._el.lcFill.style.width=`${i*100}%`),i>=1&&clearInterval(a)},r);setTimeout(()=>n.classList.add("hidden"),t+200)}showDeathScreen(e,t){const n=this._el.deathScreen;if(!n)return;n.classList.remove("hidden");const i=document.getElementById("btn-respawn"),r=document.getElementById("btn-main-menu");i&&(i.onclick=()=>{n.classList.add("hidden"),e&&e()}),r&&(r.onclick=()=>{n.classList.add("hidden"),t&&t()})}updateMinimap(e,t){const n=document.getElementById("minimap-canvas");if(!n)return;const i=n.getContext("2d"),r=160,o=160,a=r/200;i.clearRect(0,0,r,o),i.fillStyle="rgba(0,10,20,0.75)",i.fillRect(0,0,r,o);const l=r/2+e.x*a,c=o/2+e.z*a;i.fillStyle="#00e5ff",i.beginPath(),i.arc(Math.min(r-4,Math.max(4,l)),Math.min(o-4,Math.max(4,c)),5,0,Math.PI*2),i.fill(),i.fillStyle="#ff3355";for(const d of t??[]){if(!d.mesh||d.state==="DEAD")continue;const h=r/2+d.mesh.position.x*a,u=o/2+d.mesh.position.z*a;h<0||h>r||u<0||u>o||(i.beginPath(),i.arc(h,u,4,0,Math.PI*2),i.fill())}i.strokeStyle="#00e5ff44",i.lineWidth=1,i.strokeRect(0,0,r,o)}initLeaderboard(e){this._myName=e,this._lbData=[{name:e,kills:0,deaths:0,ping:0,isYou:!0}];const t=document.createElement("div");t.id="leaderboard-panel",t.style.cssText=["display:none","position:fixed","top:50%","left:50%","transform:translate(-50%,-50%)","background:rgba(0,5,15,0.93)","border:1px solid #00e5ff55","color:#fff","min-width:560px","z-index:9999","padding:24px 28px","font-family:monospace","box-shadow:0 0 40px rgba(0,229,255,0.12)","border-radius:4px","pointer-events:none"].join(";"),t.innerHTML=`
      <div style="text-align:center;font-size:14px;letter-spacing:5px;color:#00e5ff;margin-bottom:18px;font-weight:bold">
        ⊕ LEADERBOARD
      </div>
      <table id="lb-table" style="width:100%;border-collapse:collapse;">
        <thead>
          <tr style="color:#00e5ff88;font-size:11px;border-bottom:1px solid #00e5ff22;letter-spacing:2px;">
            <th style="padding:6px 8px;text-align:left">#</th>
            <th style="padding:6px 8px;text-align:left">PLAYER</th>
            <th style="padding:6px 8px;text-align:center">KILLS</th>
            <th style="padding:6px 8px;text-align:center">DEATHS</th>
            <th style="padding:6px 8px;text-align:center">K/D</th>
            <th style="padding:6px 8px;text-align:right">PING</th>
          </tr>
        </thead>
        <tbody id="lb-body"></tbody>
      </table>
      <div style="text-align:center;color:#333;font-size:11px;margin-top:14px;letter-spacing:2px">HOLD TAB TO VIEW</div>
    `,document.body.appendChild(t),this._lbPanel=t,window.addEventListener("keydown",n=>{n.code==="Tab"&&(n.preventDefault(),t.style.display="block")}),window.addEventListener("keyup",n=>{n.code==="Tab"&&(t.style.display="none")}),this._renderLeaderboard()}updateLeaderboard(e){e!=null&&e.length&&(this._lbData=e,this._renderLeaderboard())}addKillToLeaderboard(e,t){if(!this._lbData)return;const n=this._lbData.find(i=>i.isYou);n&&(n.kills=e,n.deaths=t),this._renderLeaderboard()}_renderLeaderboard(){const e=document.getElementById("lb-body");if(!e||!this._lbData)return;const t=[...this._lbData].sort((n,i)=>(i.kills??0)-(n.kills??0));e.innerHTML=t.map((n,i)=>{const r=n.deaths?(n.kills/n.deaths).toFixed(1):n.kills??0;return`
        <tr style="border-bottom:1px solid #ffffff0a;${i===0?"color:#ffcc00":""};font-size:13px;">
          <td style="padding:7px 8px;opacity:0.6">${i+1}</td>
          <td style="padding:7px 8px;font-weight:bold">${n.isYou?'<span style="color:#00e5ff">▶</span> ':""}${n.name??"Unknown"}</td>
          <td style="padding:7px 8px;text-align:center;color:#44ff88">${n.kills??0}</td>
          <td style="padding:7px 8px;text-align:center;color:#ff4455">${n.deaths??0}</td>
          <td style="padding:7px 8px;text-align:center">${r}</td>
          <td style="padding:7px 8px;text-align:right;color:#555">${n.ping!=null?n.ping+"ms":"--"}</td>
        </tr>`}).join("")}}class ex{constructor(e){this.inputManager=e,this.container=document.getElementById("touch-controls"),this.joystickZone=document.getElementById("joystick-zone"),this.joystickBase=document.getElementById("joystick-base"),this.joystickStick=document.getElementById("joystick-stick"),this.touchAimZone=document.getElementById("touch-aim-zone"),this.btnFire=document.getElementById("btn-fire"),this.btnAds=document.getElementById("btn-ads"),this.btnJump=document.getElementById("btn-jump"),this.btnCrouch=document.getElementById("btn-crouch"),this.btnReload=document.getElementById("btn-reload"),this.btnSprint=document.getElementById("btn-sprint"),this.joystickTouchId=null,this.joystickOrigin={x:0,y:0},this.maxRadius=50,this.aimTouchId=null,this.lastAimPos={x:0,y:0},this.isTouchDevice=!1,this._autoDetectDevice(),this._initJoystickEvents(),this._initAimZoneEvents(),this._initButtonEvents()}_autoDetectDevice(){/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?(this.show(),this.isTouchDevice=!0):(this.hide(),window.addEventListener("touchstart",()=>{this.isTouchDevice||(this.isTouchDevice=!0,this.show())},{passive:!0}))}show(){this.container&&(this.container.classList.remove("hidden"),this.container.style.display="block");const e=document.getElementById("desktop-hints");e&&(e.style.display="none")}hide(){this.container&&(this.container.classList.add("hidden"),this.container.style.display="none");const e=document.getElementById("desktop-hints");e&&(e.style.display="flex")}_initJoystickEvents(){if(!this.joystickZone)return;this.joystickZone.addEventListener("touchstart",t=>{if(t.preventDefault(),this.joystickTouchId!==null)return;const n=t.changedTouches[0];this.joystickTouchId=n.identifier;const i=this.joystickZone.getBoundingClientRect();this.joystickOrigin={x:i.left+i.width/2,y:i.top+i.height/2},this._handleJoystickMove(n.clientX,n.clientY)},{passive:!1}),window.addEventListener("touchmove",t=>{if(this.joystickTouchId!==null)for(let n=0;n<t.changedTouches.length;n++){const i=t.changedTouches[n];if(i.identifier===this.joystickTouchId){this._handleJoystickMove(i.clientX,i.clientY);break}}},{passive:!1});const e=t=>{for(let n=0;n<t.changedTouches.length;n++)if(t.changedTouches[n].identifier===this.joystickTouchId){this.joystickTouchId=null,this.joystickStick&&(this.joystickStick.style.transform="translate(0px, 0px)"),this.inputManager.setJoystickInput(0,0);break}};window.addEventListener("touchend",e),window.addEventListener("touchcancel",e)}_handleJoystickMove(e,t){const n=e-this.joystickOrigin.x,i=t-this.joystickOrigin.y,r=Math.hypot(n,i);let o=0,a=0;if(r>0){const l=Math.min(r,this.maxRadius),c=Math.atan2(i,n),d=Math.cos(c)*l,h=Math.sin(c)*l;this.joystickStick&&(this.joystickStick.style.transform=`translate(${d}px, ${h}px)`),o=d/this.maxRadius,a=h/this.maxRadius}this.inputManager.setJoystickInput(o,a)}_initAimZoneEvents(){if(!this.touchAimZone)return;this.touchAimZone.addEventListener("touchstart",t=>{if(t.preventDefault(),this.aimTouchId!==null)return;const n=t.changedTouches[0];this.aimTouchId=n.identifier,this.lastAimPos={x:n.clientX,y:n.clientY}},{passive:!1}),window.addEventListener("touchmove",t=>{if(this.aimTouchId!==null)for(let n=0;n<t.changedTouches.length;n++){const i=t.changedTouches[n];if(i.identifier===this.aimTouchId){const r=i.clientX-this.lastAimPos.x,o=i.clientY-this.lastAimPos.y;this.lastAimPos={x:i.clientX,y:i.clientY},this.inputManager.addTouchAimDelta(r,o);break}}},{passive:!1});const e=t=>{for(let n=0;n<t.changedTouches.length;n++)if(t.changedTouches[n].identifier===this.aimTouchId){this.aimTouchId=null;break}};window.addEventListener("touchend",e),window.addEventListener("touchcancel",e)}_initButtonEvents(){const e=(n,i,r)=>{if(!n)return;n.addEventListener("touchstart",a=>{a.preventDefault(),a.stopPropagation(),n.classList.add("active"),i()},{passive:!1});const o=a=>{n.classList.remove("active"),r()};n.addEventListener("touchend",o),n.addEventListener("touchcancel",o)},t=(n,i)=>{n&&(n.addEventListener("touchstart",r=>{r.preventDefault(),r.stopPropagation(),n.classList.add("active"),i()},{passive:!1}),n.addEventListener("touchend",()=>{n.classList.remove("active")}))};e(this.btnFire,()=>{this.inputManager.isFiring=!0},()=>{this.inputManager.isFiring=!1}),t(this.btnAds,()=>{this.inputManager.isADS=!this.inputManager.isADS}),e(this.btnJump,()=>{this.inputManager.isJumping=!0},()=>{this.inputManager.isJumping=!1}),t(this.btnCrouch,()=>{this.inputManager.isCrouching=!this.inputManager.isCrouching}),t(this.btnSprint,()=>{this.inputManager.isSprinting=!this.inputManager.isSprinting}),t(this.btnReload,()=>{this.inputManager.isReloading=!0})}}const tx="https://warzone-tactical-fps-server--my-api.replit.app/api",lh=()=>localStorage.getItem("authApiBase")||tx,bs={async signUp({username:s,email:e,password:t}){let n,i;try{n=await fetch(`${lh()}/auth/signup`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:s,email:e,password:t})}),i=await ch(n)}catch{throw new Error("Cannot reach server — check your internet or API URL")}if(!n.ok)throw new Error((i==null?void 0:i.message)||`Server error (${n.status})`);return $o(i),i},async signIn({email:s,password:e}){let t,n;try{t=await fetch(`${lh()}/auth/signin`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:s,password:e})}),n=await ch(t)}catch{throw new Error("Cannot reach server — check your internet or API URL")}if(!t.ok)throw new Error((n==null?void 0:n.message)||`Server error (${t.status})`);return $o(n),n},guestSession(s="Operator"){const e={token:null,user:{id:"guest_"+Date.now(),username:s,email:null,isGuest:!0},online:!1};return $o(e),e},getSession(){try{return JSON.parse(localStorage.getItem("warzone_session")||"null")}catch{return null}},logout(){localStorage.removeItem("warzone_session")},isLoggedIn(){var s;return!!((s=this.getSession())!=null&&s.user)},getAuthHeader(){var e;const s=(e=this.getSession())==null?void 0:e.token;return s?{Authorization:`Bearer ${s}`}:{}}};function $o(s){localStorage.setItem("warzone_session",JSON.stringify({token:s.token??null,user:s.user??s,online:!!s.token}))}async function ch(s){if((s.headers.get("content-type")||"").includes("application/json"))return s.json();const n=(await s.text()).match(/Cannot \w+ [^\s<"]+/);if(n)throw new Error(`Route not found on server: ${n[0]}`);if(!s.ok)throw new Error(`Server returned ${s.status} (non-JSON response)`);return{}}class pd{constructor(){this._resolve=null,this._root=null,this._tab="signin"}show(){return new Promise(e=>{this._resolve=e,this._build()})}_build(){const e=document.createElement("div");e.id="auth-screen",e.innerHTML=`
      <div class="auth-bg">
        <!-- Animated background grid -->
        <canvas id="auth-bg-canvas"></canvas>

        <div class="auth-card">
          <!-- Logo -->
          <div class="auth-logo">
            <div class="auth-logo-icon">⊕</div>
            <div class="auth-logo-text">WARZONE</div>
            <div class="auth-logo-sub">TACTICAL OPERATIONS</div>
          </div>

          <!-- Tabs -->
          <div class="auth-tabs">
            <button class="auth-tab active" id="tab-signin" data-tab="signin">SIGN IN</button>
            <button class="auth-tab"        id="tab-signup" data-tab="signup">SIGN UP</button>
          </div>

          <!-- Sign In Panel -->
          <form class="auth-form" id="form-signin">
            <div class="auth-field">
              <label>EMAIL</label>
              <input type="email" id="si-email" placeholder="operator@unit.mil" autocomplete="email" />
            </div>
            <div class="auth-field">
              <label>PASSWORD</label>
              <div class="auth-pw-wrap">
                <input type="password" id="si-pass" placeholder="••••••••" autocomplete="current-password" />
                <button type="button" class="auth-eye" id="si-eye">👁</button>
              </div>
            </div>
            <div class="auth-remember">
              <label><input type="checkbox" id="si-remember" checked /> Remember me</label>
              <a class="auth-link" href="#">Forgot password?</a>
            </div>
            <div class="auth-error hidden" id="si-error"></div>
            <button type="submit" class="auth-btn primary" id="si-submit">
              <span class="btn-text">DEPLOY</span>
              <span class="btn-spinner hidden">⟳</span>
            </button>
          </form>

          <!-- Sign Up Panel -->
          <form class="auth-form hidden" id="form-signup">
            <div class="auth-field">
              <label>USERNAME</label>
              <input type="text" id="su-name" placeholder="CallSign" maxlength="20" autocomplete="username" />
            </div>
            <div class="auth-field">
              <label>EMAIL</label>
              <input type="email" id="su-email" placeholder="operator@unit.mil" autocomplete="email" />
            </div>
            <div class="auth-field">
              <label>PASSWORD</label>
              <div class="auth-pw-wrap">
                <input type="password" id="su-pass" placeholder="Min. 8 characters" autocomplete="new-password" />
                <button type="button" class="auth-eye" id="su-eye">👁</button>
              </div>
            </div>
            <div class="auth-field">
              <label>CONFIRM PASSWORD</label>
              <input type="password" id="su-confirm" placeholder="••••••••" autocomplete="new-password" />
            </div>
            <div class="auth-error hidden" id="su-error"></div>
            <button type="submit" class="auth-btn primary" id="su-submit">
              <span class="btn-text">CREATE ACCOUNT</span>
              <span class="btn-spinner hidden">⟳</span>
            </button>
          </form>

          <!-- Divider -->
          <div class="auth-divider"><span>OR</span></div>

          <!-- Guest / Offline -->
          <button class="auth-btn ghost" id="btn-guest">
            ▶ &nbsp;PLAY AS GUEST (OFFLINE)
          </button>

          <div class="auth-footer">
            <span class="auth-version">v1.0.0</span>
            <span class="auth-legal">© 2026 Warzone Tactical</span>
          </div>
        </div>
      </div>
    `,document.body.appendChild(e),this._root=e,this._applyStyles(),this._wire(),this._animateBg();const t=bs.getSession();t!=null&&t.user&&setTimeout(()=>this._done(t),100)}_wire(){var t,n,i,r;this._root.querySelectorAll(".auth-tab").forEach(o=>{o.addEventListener("click",()=>{var a,l;this._tab=o.dataset.tab,this._root.querySelectorAll(".auth-tab").forEach(c=>c.classList.remove("active")),o.classList.add("active"),(l=(a=this._root).getElementById)==null||l.call(a,"form-signin"),document.getElementById("form-signin").classList.toggle("hidden",this._tab!=="signin"),document.getElementById("form-signup").classList.toggle("hidden",this._tab!=="signup")})});const e=(o,a)=>{var l;(l=document.getElementById(a))==null||l.addEventListener("click",()=>{const c=document.getElementById(o);c.type=c.type==="password"?"text":"password"})};e("si-pass","si-eye"),e("su-pass","su-eye"),(t=document.getElementById("form-signin"))==null||t.addEventListener("submit",async o=>{o.preventDefault();const a=document.getElementById("si-email").value.trim(),l=document.getElementById("si-pass").value;if(!a||!l)return this._setError("si-error","All fields required");this._setLoading("si-submit",!0);try{const c=await bs.signIn({email:a,password:l});this._done(c)}catch(c){const d=c.message.includes("401")||c.message.toLowerCase().includes("invalid")?"❌ Wrong email or password — or account doesn't exist yet. Use Sign Up!":c.message;this._setError("si-error",d),(c.message.includes("401")||c.message.toLowerCase().includes("invalid"))&&setTimeout(()=>{var h;(h=document.querySelector('[data-tab="signup"]'))==null||h.click()},1800)}finally{this._setLoading("si-submit",!1)}}),(n=document.getElementById("form-signup"))==null||n.addEventListener("submit",async o=>{o.preventDefault();const a=document.getElementById("su-name").value.trim(),l=document.getElementById("su-email").value.trim(),c=document.getElementById("su-pass").value,d=document.getElementById("su-confirm").value;if(!a||!l||!c)return this._setError("su-error","All fields required");if(c!==d)return this._setError("su-error","Passwords do not match");if(c.length<8)return this._setError("su-error","Password must be at least 8 characters");this._setLoading("su-submit",!0);try{const h=await bs.signUp({username:a,email:l,password:c});this._done(h)}catch(h){this._setError("su-error",h.message)}finally{this._setLoading("su-submit",!1)}}),(i=document.getElementById("btn-guest"))==null||i.addEventListener("click",()=>{const o=prompt("Enter your callsign:","Operator")||"Operator",a=bs.guestSession(o);this._done(a)}),(r=document.getElementById("auth-api-save"))==null||r.addEventListener("click",()=>{const o=document.getElementById("auth-api-url").value.trim();o?localStorage.setItem("authApiBase",o):localStorage.removeItem("authApiBase");const a=document.getElementById("auth-api-save");a.textContent="✓ SAVED",a.style.color="#00e5ff",setTimeout(()=>{a.textContent="SAVE",a.style.color=""},1500)})}_setError(e,t){const n=document.getElementById(e);n&&(n.textContent=t,n.classList.remove("hidden"),n.classList.add("auth-error-anim"),setTimeout(()=>n.classList.remove("auth-error-anim"),400))}_setLoading(e,t){var i,r;const n=document.getElementById(e);n&&((i=n.querySelector(".btn-text"))==null||i.classList.toggle("hidden",t),(r=n.querySelector(".btn-spinner"))==null||r.classList.toggle("hidden",!t),n.disabled=t)}_done(e){var t;this._root&&(this._root.style.transition="opacity .5s",this._root.style.opacity="0",setTimeout(()=>{var n;(n=this._root)==null||n.remove(),this._root=null},520)),(t=this._resolve)==null||t.call(this,e)}_animateBg(){const e=document.getElementById("auth-bg-canvas");if(!e)return;e.width=innerWidth,e.height=innerHeight;const t=e.getContext("2d");let n=0;const i=Array.from({length:60},()=>({x:Math.random()*e.width,y:Math.random()*e.height,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4,r:Math.random()*1.5+.5,alpha:Math.random()*.5+.2})),r=()=>{if(!document.getElementById("auth-bg-canvas"))return;n++,t.clearRect(0,0,e.width,e.height),t.strokeStyle="rgba(0,229,255,0.04)",t.lineWidth=1;const o=55;for(let c=0;c<e.width;c+=o)t.beginPath(),t.moveTo(c,0),t.lineTo(c,e.height),t.stroke();for(let c=0;c<e.height;c+=o)t.beginPath(),t.moveTo(0,c),t.lineTo(e.width,c),t.stroke();const a=n*.6%e.height,l=t.createLinearGradient(0,a-40,0,a+4);l.addColorStop(0,"rgba(0,229,255,0)"),l.addColorStop(1,"rgba(0,229,255,0.06)"),t.fillStyle=l,t.fillRect(0,a-40,e.width,44),i.forEach(c=>{c.x+=c.vx,c.y+=c.vy,c.x<0&&(c.x=e.width),c.x>e.width&&(c.x=0),c.y<0&&(c.y=e.height),c.y>e.height&&(c.y=0),t.beginPath(),t.arc(c.x,c.y,c.r,0,Math.PI*2),t.fillStyle=`rgba(0,229,255,${c.alpha})`,t.fill()}),requestAnimationFrame(r)};r(),window.addEventListener("resize",()=>{e.width=innerWidth,e.height=innerHeight})}_applyStyles(){if(document.getElementById("auth-styles"))return;const e=document.createElement("style");e.id="auth-styles",e.textContent=`
      #auth-screen {
        position: fixed; inset: 0; z-index: 20000;
        font-family: 'Barlow Condensed', 'Segoe UI', sans-serif;
      }
      .auth-bg {
        position: absolute; inset: 0;
        background: radial-gradient(ellipse at 60% 40%, #0a1828 0%, #020810 70%);
        display: flex; align-items: center; justify-content: center;
      }
      #auth-bg-canvas {
        position: absolute; inset: 0; pointer-events: none;
      }

      /* ── Card ── */
      .auth-card {
        position: relative; z-index: 1;
        width: min(420px, 92vw);
        background: rgba(4, 14, 26, 0.92);
        border: 1px solid rgba(0, 229, 255, 0.18);
        border-top: 2px solid rgba(0, 229, 255, 0.5);
        padding: 36px 36px 28px;
        backdrop-filter: blur(20px);
        box-shadow: 0 0 80px rgba(0, 229, 255, 0.07),
                    0 30px 60px rgba(0,0,0,0.6);
        animation: card-in .5s cubic-bezier(.22,1,.36,1) both;
      }
      @keyframes card-in {
        from { opacity: 0; transform: translateY(28px); }
        to   { opacity: 1; transform: translateY(0); }
      }

      /* ── Logo ── */
      .auth-logo { text-align: center; margin-bottom: 28px; }
      .auth-logo-icon {
        font-size: 2.8rem; color: #00e5ff;
        text-shadow: 0 0 30px rgba(0,229,255,.6);
        animation: pulse-logo 2.8s ease-in-out infinite;
      }
      @keyframes pulse-logo {
        0%,100% { text-shadow: 0 0 30px rgba(0,229,255,.5); }
        50%      { text-shadow: 0 0 60px rgba(0,229,255,.9); }
      }
      .auth-logo-text {
        font-size: 2.4rem; font-weight: 800; letter-spacing: .35em;
        color: #e8f4f8; line-height: 1; margin-top: 4px;
      }
      .auth-logo-sub {
        font-size: .7rem; letter-spacing: .3em; color: rgba(0,229,255,.55);
        margin-top: 4px;
      }

      /* ── Tabs ── */
      .auth-tabs {
        display: flex; border-bottom: 1px solid rgba(0,229,255,.15);
        margin-bottom: 24px; gap: 0;
      }
      .auth-tab {
        flex: 1; background: none; border: none;
        padding: 10px; cursor: pointer;
        font-family: inherit; font-size: .85rem; font-weight: 700;
        letter-spacing: .15em; color: rgba(255,255,255,.35);
        border-bottom: 2px solid transparent; margin-bottom: -1px;
        transition: color .2s, border-color .2s;
      }
      .auth-tab.active { color: #00e5ff; border-bottom-color: #00e5ff; }
      .auth-tab:hover:not(.active) { color: rgba(255,255,255,.65); }

      /* ── Form ── */
      .auth-form { display: flex; flex-direction: column; gap: 14px; }
      .auth-field { display: flex; flex-direction: column; gap: 5px; }
      .auth-field label {
        font-size: .68rem; letter-spacing: .2em; color: rgba(0,229,255,.6);
      }
      .auth-field input {
        background: rgba(255,255,255,.04);
        border: 1px solid rgba(255,255,255,.1);
        color: #e8f4f8;
        padding: 11px 14px;
        font-family: inherit; font-size: .95rem;
        outline: none; border-radius: 2px;
        transition: border-color .2s, background .2s;
      }
      .auth-field input:focus {
        border-color: rgba(0,229,255,.5);
        background: rgba(0,229,255,.04);
      }
      .auth-field input::placeholder { color: rgba(255,255,255,.25); }
      .auth-pw-wrap { position: relative; }
      .auth-pw-wrap input { width: 100%; padding-right: 44px; }
      .auth-eye {
        position: absolute; right: 10px; top: 50%; transform: translateY(-50%);
        background: none; border: none; cursor: pointer; font-size: 1rem; opacity: .5;
      }
      .auth-eye:hover { opacity: 1; }

      /* Remember / forgot */
      .auth-remember {
        display: flex; justify-content: space-between; align-items: center;
        font-size: .78rem;
      }
      .auth-remember label { color: rgba(255,255,255,.5); cursor: pointer; display: flex; gap: 6px; align-items: center; }
      .auth-link { color: rgba(0,229,255,.7); text-decoration: none; font-size: .78rem; }
      .auth-link:hover { color: #00e5ff; }

      /* Error */
      .auth-error {
        background: rgba(255,51,85,.12); border: 1px solid rgba(255,51,85,.3);
        color: #ff6688; font-size: .82rem; padding: 8px 12px;
        border-radius: 2px; letter-spacing: .05em;
      }
      .auth-error-anim { animation: shake .35s ease; }
      @keyframes shake {
        0%,100% { transform: translateX(0); }
        25% { transform: translateX(-6px); } 75% { transform: translateX(6px); }
      }

      /* ── Buttons ── */
      .auth-btn {
        width: 100%; padding: 13px;
        font-family: inherit; font-size: 1rem; font-weight: 800;
        letter-spacing: .2em; cursor: pointer; border: none;
        border-radius: 2px; transition: all .2s; margin-top: 4px;
        display: flex; align-items: center; justify-content: center; gap: 8px;
      }
      .auth-btn.primary {
        background: linear-gradient(135deg, #00b4cc, #00e5ff);
        color: #000;
        box-shadow: 0 0 20px rgba(0,229,255,.25);
      }
      .auth-btn.primary:hover {
        box-shadow: 0 0 40px rgba(0,229,255,.5);
        transform: translateY(-1px);
      }
      .auth-btn.primary:disabled { opacity: .6; cursor: not-allowed; transform: none; }
      .auth-btn.ghost {
        background: rgba(255,255,255,.04);
        border: 1px solid rgba(255,255,255,.15);
        color: rgba(255,255,255,.75); font-size: .88rem;
      }
      .auth-btn.ghost:hover {
        border-color: rgba(0,229,255,.4);
        color: #00e5ff;
        background: rgba(0,229,255,.06);
      }
      .btn-spinner {
        display: inline-block; animation: spin .7s linear infinite; font-size: 1.2rem;
      }
      @keyframes spin { to { transform: rotate(360deg); } }

      /* ── Divider ── */
      .auth-divider {
        display: flex; align-items: center; gap: 12px;
        margin: 18px 0 14px; color: rgba(255,255,255,.2); font-size: .78rem;
      }
      .auth-divider::before, .auth-divider::after {
        content: ''; flex: 1; height: 1px; background: rgba(255,255,255,.1);
      }

      /* ── API row ── */
      .auth-api-row {
        display: flex; align-items: center; gap: 6px; margin-top: 14px;
      }
      .auth-api-label {
        font-size: .65rem; letter-spacing: .15em; color: rgba(255,255,255,.3);
        flex-shrink: 0;
      }
      .auth-api-input {
        flex: 1; background: rgba(255,255,255,.03);
        border: 1px solid rgba(255,255,255,.08);
        color: rgba(255,255,255,.5); font-family: monospace;
        font-size: .72rem; padding: 5px 8px; outline: none; border-radius: 2px;
      }
      .auth-api-input::placeholder { color: rgba(255,255,255,.18); }
      .auth-api-input:focus { border-color: rgba(0,229,255,.3); color: rgba(255,255,255,.8); }
      .auth-api-save {
        background: none; border: 1px solid rgba(0,229,255,.3); color: rgba(0,229,255,.7);
        font-family: inherit; font-size: .65rem; letter-spacing: .12em;
        padding: 4px 8px; cursor: pointer; border-radius: 2px; flex-shrink: 0;
        transition: all .2s;
      }
      .auth-api-save:hover { background: rgba(0,229,255,.08); }

      /* ── Footer ── */
      .auth-footer {
        display: flex; justify-content: space-between;
        margin-top: 16px; font-size: .65rem; color: rgba(255,255,255,.2);
      }

      .hidden { display: none !important; }
    `,document.head.appendChild(e)}}const nx=Object.freeze(Object.defineProperty({__proto__:null,AuthUI:pd},Symbol.toStringTag,{value:"Module"})),ix="modulepreload",sx=function(s){return"/warzone-tactical-fps/"+s},hh={},dh=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){let o=function(c){return Promise.all(c.map(d=>Promise.resolve(d).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=o(t.map(c=>{if(c=sx(c),c in hh)return;hh[c]=!0;const d=c.endsWith(".css"),h=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${h}`))return;const u=document.createElement("link");if(u.rel=d?"stylesheet":ix,d||(u.as="script"),u.crossOrigin="",u.href=c,l&&u.setAttribute("nonce",l),document.head.appendChild(u),d)return new Promise((f,g)=>{u.addEventListener("load",f),u.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})};class bl{constructor(e){this.session=e,this._resolve=null,this._root=null}show(){return new Promise(e=>{this._resolve=e,this._build()})}_build(){var n,i;const e=((n=this.session)==null?void 0:n.user)??{},t=document.createElement("div");t.id="main-menu",t.innerHTML=`
      <div class="mm-bg">
        <canvas id="mm-bg-canvas"></canvas>
        <div class="mm-content">

          <!-- Header -->
          <div class="mm-header">
            <div class="mm-header-left">
              <div class="mm-logo">
                <span class="mm-logo-glyph">⊕</span>
                <div>
                  <div class="mm-logo-title">WARZONE</div>
                  <div class="mm-logo-sub">TACTICAL OPERATIONS</div>
                </div>
              </div>
            </div>
            <div class="mm-header-right">
              <div class="mm-profile">
                <div class="mm-avatar">${(((i=e.username)==null?void 0:i[0])??"G").toUpperCase()}</div>
                <div class="mm-profile-info">
                  <div class="mm-username">${e.username??"Guest"}</div>
                  <div class="mm-status status-online">
                    ⬤ ONLINE
                  </div>
                </div>
                <button class="mm-logout-btn" id="mm-logout">LOGOUT</button>
              </div>
            </div>
          </div>

          <!-- Main buttons -->
          <div class="mm-center">
            <div class="mm-tagline">SELECT OPERATION</div>

            <div class="mm-modes">
              <!-- Online -->
              <button class="mm-mode-card " id="mm-online" >
                <div class="mode-icon">🌐</div>
                <div class="mode-title">PLAY ONLINE</div>
                <div class="mode-desc">Multiplayer · Global matchmaking · Ranked</div>
                
              </button>

              <!-- Offline / vs bots -->
              <button class="mm-mode-card" id="mm-offline">
                <div class="mode-icon">🤖</div>
                <div class="mode-title">PLAY OFFLINE</div>
                <div class="mode-desc">Solo · AI enemies · All 3 levels</div>
              </button>
              <!-- 1v1 Private Room -->
              <button class="mm-mode-card " id="mm-1v1" >
                <div class="mode-icon">⚔</div>
                <div class="mode-title">1v1 FRIEND</div>
                <div class="mode-desc">Private room · Share code · Invite only</div>
                
              </button>
            </div>

            <!-- Level selector (shown after offline click) -->
            <div class="mm-level-select hidden" id="mm-level-panel">
              <div class="mm-level-title">SELECT LEVEL</div>
              <div class="mm-levels">
                <button class="mm-level-btn active" data-level="1">
                  <div class="level-num">01</div>
                  <div class="level-name">CITY DISTRICT</div>
                  <div class="level-diff">● NORMAL</div>
                </button>
                <button class="mm-level-btn" data-level="2">
                  <div class="level-num">02</div>
                  <div class="level-name">INDUSTRIAL ZONE</div>
                  <div class="level-diff">●● HARD</div>
                </button>
                <button class="mm-level-btn" data-level="3">
                  <div class="level-num">03</div>
                  <div class="level-name">NIGHT RAID</div>
                  <div class="level-diff">●●● ELITE</div>
                </button>
              </div>
              <button class="mm-deploy-btn" id="mm-deploy">
                ▶ &nbsp;DEPLOY NOW
              </button>
            </div>

            <!-- 1v1 Private Room panel -->
            <div class="mm-level-select hidden" id="mm-room-panel">
              <div class="mm-level-title">⚔ PRIVATE 1v1 ROOM</div>
              <div style="display:flex;gap:14px;margin:18px 0;">
                <button class="mm-deploy-btn" id="mm-create-room" style="flex:1;font-size:13px;">
                  ＋ CREATE ROOM
                </button>
                <div style="display:flex;flex-direction:column;gap:8px;flex:1;">
                  <input id="mm-room-code-input" maxlength="6" placeholder="ENTER CODE"
                    style="background:#0a1628;border:1px solid #00e5ff44;color:#00e5ff;
                    padding:10px 14px;font-family:monospace;font-size:20px;letter-spacing:6px;
                    text-align:center;text-transform:uppercase;outline:none;width:100%;box-sizing:border-box;"/>
                  <button class="mm-deploy-btn" id="mm-join-room" style="font-size:13px;">→ JOIN ROOM</button>
                </div>
              </div>
              <div id="mm-room-status" style="text-align:center;color:#00e5ff;min-height:44px;font-family:monospace;font-size:13px;"></div>
              <button class="mm-deploy-btn" id="mm-room-back" style="margin-top:10px;background:transparent;border-color:#ffffff22;color:#888;font-size:12px;">
                ← BACK
              </button>
            </div>


          </div>

          <!-- Bottom nav -->
          <div class="mm-bottom-nav">
            <button class="mm-nav-btn" id="mm-settings">⚙ SETTINGS</button>
            <button class="mm-nav-btn" id="mm-world-lb">🏆 LEADERBOARD</button>
            <button class="mm-nav-btn" id="mm-credits">📋 CREDITS</button>
            <div class="mm-build">BUILD 1.0.0</div>
          </div>

          <!-- Settings panel -->
          <div class="mm-panel hidden" id="panel-settings">
            <div class="mm-panel-title">SETTINGS</div>
            <div class="mm-setting-row">
              <label>Mouse Sensitivity</label>
              <input type="range" id="set-sens" min="0.5" max="5" step="0.1" value="1" />
              <span id="set-sens-val">1.0×</span>
            </div>
            <div class="mm-setting-row">
              <label>Master Volume</label>
              <input type="range" id="set-vol" min="0" max="1" step="0.05" value="0.7" />
              <span id="set-vol-val">70%</span>
            </div>
            <div class="mm-setting-row">
              <label>FOV</label>
              <input type="range" id="set-fov" min="60" max="110" step="1" value="70" />
              <span id="set-fov-val">70°</span>
            </div>
            <button class="mm-close-panel" id="close-settings">CLOSE</button>
          </div>

          <!-- ── WORLD LEADERBOARD PANEL ── -->
          <div class="mm-panel hidden" id="panel-world-lb" style="min-width:600px;max-width:700px;">
            <div class="mm-panel-title" style="color:#ffcc00;letter-spacing:4px;">🏆 WORLD LEADERBOARD</div>
            <div id="wlb-status" style="text-align:center;color:#555;font-size:12px;margin-bottom:12px;font-family:monospace;">Loading...</div>
            <table style="width:100%;border-collapse:collapse;font-family:monospace;font-size:13px;">
              <thead>
                <tr style="color:#00e5ff88;font-size:11px;border-bottom:1px solid #00e5ff22;letter-spacing:2px;">
                  <th style="padding:7px 10px;text-align:left">#</th>
                  <th style="padding:7px 10px;text-align:left">PLAYER</th>
                  <th style="padding:7px 10px;text-align:center">KILLS</th>
                  <th style="padding:7px 10px;text-align:center">DEATHS</th>
                  <th style="padding:7px 10px;text-align:center">K/D</th>
                  <th style="padding:7px 10px;text-align:right">LEVEL</th>
                </tr>
              </thead>
              <tbody id="wlb-body"></tbody>
            </table>
            <div style="display:flex;gap:12px;margin-top:16px;">
              <button class="mm-deploy-btn" id="wlb-refresh" style="flex:1;font-size:12px;">↻ REFRESH</button>
              <button class="mm-close-panel" id="close-world-lb" style="flex:1;">CLOSE</button>
            </div>
          </div>

          <!-- ── CREDITS PANEL ── -->
          <div class="mm-panel hidden" id="panel-credits" style="max-width:480px;">
            <div class="mm-panel-title" style="letter-spacing:4px;">📋 CREDITS</div>
            <div style="font-family:monospace;font-size:12px;line-height:2;color:#aaa;">
              <div style="color:#00e5ff;letter-spacing:2px;margin-bottom:8px;">WARZONE — TACTICAL OPERATIONS</div>
              <div>🎮 <b style="color:#fff">Game Engine</b> — Three.js + Vite</div>
              <div>🤖 <b style="color:#fff">AI System</b> — Custom State Machine</div>
              <div>🧍 <b style="color:#fff">Soldier Model</b> — Swat.fbx (Mixamo)</div>
              <div>🔫 <b style="color:#fff">Weapon Model</b> — gun.obj (Custom)</div>
              <div>🏙️ <b style="color:#fff">City Map</b> — city.fbx (Uploaded)</div>
              <div>🌐 <b style="color:#fff">Backend</b> — Node.js + Socket.io (Replit)</div>
              <div>🔐 <b style="color:#fff">Auth</b> — JWT + Crypto (Replit API)</div>
              <div style="margin-top:16px;color:#555;font-size:11px;">
                Built with ❤ — All rights reserved © 2026
              </div>
              <div style="margin-top:6px;color:#333;font-size:10px;letter-spacing:1px;">
                frontline-game-host.replit.app
              </div>
            </div>
            <button class="mm-close-panel" id="close-credits" style="margin-top:20px;">CLOSE</button>
          </div>

        </div>
      </div>
    `,document.body.appendChild(t),this._root=t,this._applyStyles(),this._wire(),this._animateBg()}_wire(){var l,c,d,h,u,f,g,_,m,p,w,b,x,L,A;let e=1,t="offline";(l=document.getElementById("mm-online"))==null||l.addEventListener("click",E=>{if(E.currentTarget.dataset.locked){this._flash("Login required to play online");return}t="online",this._done({mode:"online",level:1})}),(c=document.getElementById("mm-offline"))==null||c.addEventListener("click",()=>{var E,C;t="offline",(E=document.getElementById("mm-level-panel"))==null||E.classList.remove("hidden"),(C=document.getElementById("mm-offline"))==null||C.classList.add("mode-selected")}),this._root.querySelectorAll(".mm-level-btn").forEach(E=>{E.addEventListener("click",()=>{this._root.querySelectorAll(".mm-level-btn").forEach(C=>C.classList.remove("active")),E.classList.add("active"),e=parseInt(E.dataset.level)})}),(d=document.getElementById("mm-deploy"))==null||d.addEventListener("click",()=>{this._done({mode:t,level:e})});const n=E=>{var C;["mm-level-panel","mm-room-panel"].forEach(M=>{var v;return(v=document.getElementById(M))==null?void 0:v.classList.add("hidden")}),(C=document.getElementById(E))==null||C.classList.remove("hidden")};(h=document.getElementById("mm-1v1"))==null||h.addEventListener("click",E=>{if(E.currentTarget.dataset.locked){this._flash("Login required for 1v1");return}n("mm-room-panel")});let i=null;const r=()=>{if(i){try{i.disconnect()}catch{}i=null}};(u=document.getElementById("mm-room-back"))==null||u.addEventListener("click",()=>{var E;r(),(E=document.getElementById("mm-room-panel"))==null||E.classList.add("hidden")}),(f=document.getElementById("mm-create-room"))==null||f.addEventListener("click",()=>{var v;const E=Math.random().toString(36).substring(2,8).toUpperCase(),C=document.getElementById("mm-room-status");if(!C)return;C.innerHTML=`
        <div style="font-size:11px;letter-spacing:2px;color:#888;margin-bottom:6px">YOUR ROOM CODE — SHARE WITH FRIEND</div>
        <div style="font-size:40px;letter-spacing:12px;color:#00e5ff;font-weight:bold;margin-bottom:10px;text-shadow:0 0 20px #00e5ff88">${E}</div>
        <div id="mm-wait-status" style="color:#555;font-size:13px;letter-spacing:2px;margin-bottom:16px">
          ⏳ Waiting for friend to join...
        </div>
        <button class="mm-deploy-btn" id="mm-start-1v1"
          style="font-size:14px;opacity:0.35;pointer-events:none;cursor:not-allowed;filter:grayscale(1)">
          ▶ WAITING FOR FRIEND...
        </button>
        <button id="mm-cancel-lobby" style="display:block;margin:10px auto 0;background:transparent;border:none;color:#555;font-size:12px;cursor:pointer;letter-spacing:2px;font-family:'Barlow Condensed',sans-serif">
          ✕ CANCEL
        </button>`,(v=document.getElementById("mm-cancel-lobby"))==null||v.addEventListener("click",()=>{r(),C.innerHTML='<div style="color:#ff4455">Room cancelled.</div>'}),r();const M=R=>{const k=document.getElementById("mm-wait-status"),N=document.getElementById("mm-start-1v1");N&&(k&&(k.innerHTML=`<span style="color:#00ff88;font-size:15px;letter-spacing:2px">✅ ${R} joined!</span>`),N.textContent=`▶ START GAME WITH ${R.toUpperCase()}`,N.style.opacity="1",N.style.pointerEvents="auto",N.style.cursor="pointer",N.style.filter="none",N.style.background="linear-gradient(135deg,#00e5ff,#0077ff)",N.addEventListener("click",()=>{r(),this._done({mode:"online",level:1,roomCode:E})},{once:!0}))};dh(async()=>{const{io:R}=await Promise.resolve().then(()=>$x);return{io:R}},void 0).then(({io:R})=>{var W;const k=this._session,N=((W=k==null?void 0:k.user)==null?void 0:W.username)||"Host";i=R("https://warzone-tactical-fps-server--my-api.replit.app",{transports:["websocket","polling"]}),i.on("connect",()=>{console.log("[Lobby] Connected, joining room:",E),i.emit("join_room",{roomName:E,roomId:E,playerName:N})}),i.on("player:joined",({playerId:Y,name:D}={})=>{Y!==i.id&&M(D??"Friend")}),i.on("room:state",({players:Y=[]}={})=>{const D=Y.filter(X=>X.playerId!==i.id);D.length>0&&M(D[0].name??"Friend")}),i.on("connect_error",Y=>{console.warn("[Lobby] connect_error:",Y.message),M("Friend (offline mode)")})}).catch(()=>{M("Friend")})}),(g=document.getElementById("mm-join-room"))==null||g.addEventListener("click",()=>{var M;const C=(((M=document.getElementById("mm-room-code-input"))==null?void 0:M.value)??"").trim().toUpperCase().replace(/[^A-Z0-9]/g,"");if(C.length<4){this._flash("Enter a valid room code");return}document.getElementById("mm-room-status").innerHTML=`<div style="color:#44ff88;font-size:15px">✓ Joining room <b>${C}</b>…</div>`,setTimeout(()=>this._done({mode:"online",level:1,roomCode:C}),600)}),(_=document.getElementById("mm-logout"))==null||_.addEventListener("click",()=>{bs.logout(),this._root.remove(),dh(async()=>{const{AuthUI:E}=await Promise.resolve().then(()=>nx);return{AuthUI:E}},void 0).then(({AuthUI:E})=>{new E().show().then(C=>{new bl(C).show().then(M=>{var v;return(v=this._resolve)==null?void 0:v.call(this,M)})})})}),(m=document.getElementById("mm-settings"))==null||m.addEventListener("click",()=>{this._togglePanel("panel-settings")}),(p=document.getElementById("close-settings"))==null||p.addEventListener("click",()=>{var E;(E=document.getElementById("panel-settings"))==null||E.classList.add("hidden")}),(w=document.getElementById("mm-credits"))==null||w.addEventListener("click",()=>{this._togglePanel("panel-credits")}),(b=document.getElementById("close-credits"))==null||b.addEventListener("click",()=>{var E;(E=document.getElementById("panel-credits"))==null||E.classList.add("hidden")});const o=async()=>{var M,v,R,k;const E=document.getElementById("wlb-status"),C=document.getElementById("wlb-body");if(C){E&&(E.textContent="⟳ Fetching data from server...");try{const N="https://frontline-game-host--zeyad0565615778.replit.app/api";let W=null;for(const X of["/leaderboard","/scores","/stats/leaderboard"])try{const z=await fetch(N+X);if(z.ok){W=await z.json();break}}catch{}!W||!Array.isArray(W)||W.length===0?(E&&(E.innerHTML=`<span style="color:#ff6644">⚠ Server leaderboard not set up yet.</span><br>
            <span style="color:#555;font-size:11px">Add GET /api/leaderboard to your Replit server to show real data.</span>`),W=[{username:((v=(M=this.session)==null?void 0:M.user)==null?void 0:v.username)??"You",kills:0,deaths:0,level:1}]):E&&(E.textContent=`Top ${Math.min(W.length,20)} players worldwide`);const Y=W.slice(0,20),D=((k=(R=this.session)==null?void 0:R.user)==null?void 0:k.username)??"";C.innerHTML=Y.map((X,z)=>{const J=X.deaths?(X.kills/X.deaths).toFixed(2):X.kills??0,ie=X.username===D||X.name===D;return`<tr style="border-bottom:1px solid #ffffff08;${z===0?"color:#ffcc00;":""}${ie?"background:rgba(0,229,255,0.07);":""}">
            <td style="padding:7px 10px;opacity:0.55">${z+1}</td>
            <td style="padding:7px 10px;font-weight:bold">${ie?'<span style="color:#00e5ff">▶</span> ':""}${X.username??X.name??"Unknown"}</td>
            <td style="padding:7px 10px;text-align:center;color:#44ff88">${X.kills??0}</td>
            <td style="padding:7px 10px;text-align:center;color:#ff4455">${X.deaths??0}</td>
            <td style="padding:7px 10px;text-align:center">${J}</td>
            <td style="padding:7px 10px;text-align:right;color:#555">${X.level??1}</td>
          </tr>`}).join("")}catch(N){E&&(E.innerHTML=`<span style="color:#ff4444">⚠ Failed to load: ${N.message}</span>`)}}};(x=document.getElementById("mm-world-lb"))==null||x.addEventListener("click",()=>{this._togglePanel("panel-world-lb"),o()}),(L=document.getElementById("close-world-lb"))==null||L.addEventListener("click",()=>{var E;(E=document.getElementById("panel-world-lb"))==null||E.classList.add("hidden")}),(A=document.getElementById("wlb-refresh"))==null||A.addEventListener("click",o),[["set-sens","set-sens-val",E=>E+"×",E=>localStorage.setItem("sens",E)],["set-vol","set-vol-val",E=>Math.round(E*100)+"%",E=>localStorage.setItem("vol",E)],["set-fov","set-fov-val",E=>E+"°",E=>localStorage.setItem("fov",E)]].forEach(([E,C,M,v])=>{const R=document.getElementById(E),k=document.getElementById(C);if(!R||!k)return;const N=localStorage.getItem(E.replace("set-",""));N&&(R.value=N),k.textContent=M(R.value),R.addEventListener("input",()=>{k.textContent=M(R.value),v(R.value)})})}_togglePanel(e){var i,r;const t=["panel-settings","panel-world-lb","panel-credits"],n=!((i=document.getElementById(e))!=null&&i.classList.contains("hidden"));t.forEach(o=>{var a;return(a=document.getElementById(o))==null?void 0:a.classList.add("hidden")}),n||(r=document.getElementById(e))==null||r.classList.remove("hidden")}_flash(e){let t=document.getElementById("mm-flash");t||(t=document.createElement("div"),t.id="mm-flash",t.style.cssText=`
        position:fixed;top:24px;left:50%;transform:translateX(-50%);
        background:rgba(255,51,85,.9);color:#fff;padding:10px 24px;
        font-family:'Barlow Condensed',sans-serif;letter-spacing:.1em;font-size:.9rem;
        border-radius:2px;z-index:30000;pointer-events:none;
        animation:flash-in .3s ease;
      `,document.body.appendChild(t)),t.textContent=e,clearTimeout(this._flashTimer),this._flashTimer=setTimeout(()=>t.remove(),2500)}_done(e){var t;this._root&&(this._root.style.transition="opacity .5s",this._root.style.opacity="0",setTimeout(()=>{var n;(n=this._root)==null||n.remove(),this._root=null},520)),(t=this._resolve)==null||t.call(this,e)}_animateBg(){const e=document.getElementById("mm-bg-canvas");if(!e)return;e.width=innerWidth,e.height=innerHeight;const t=e.getContext("2d");let n=0;const i=()=>{if(!document.getElementById("mm-bg-canvas"))return;n+=.3,t.clearRect(0,0,e.width,e.height),t.strokeStyle="rgba(0,229,255,0.035)",t.lineWidth=1;const r=38,o=r*Math.sqrt(3)/2;for(let c=-1;c<e.height/o+1;c++)for(let d=-1;d<e.width/(r*1.5)+1;d++){const h=d*r*1.5,u=c*o*2+(d%2?o:0);t.beginPath();for(let f=0;f<6;f++){const g=Math.PI/3*f,_=h+r*Math.cos(g),m=u+r*Math.sin(g);f===0?t.moveTo(_,m):t.lineTo(_,m)}t.closePath(),t.stroke()}const a=(Math.sin(n*.008)*.5+.5)*e.width,l=t.createRadialGradient(a,e.height*.5,0,a,e.height*.5,e.height*.6);l.addColorStop(0,"rgba(0,229,255,0.04)"),l.addColorStop(1,"rgba(0,229,255,0)"),t.fillStyle=l,t.fillRect(0,0,e.width,e.height),requestAnimationFrame(i)};i(),window.addEventListener("resize",()=>{e.width=innerWidth,e.height=innerHeight})}_applyStyles(){if(document.getElementById("mm-styles"))return;const e=document.createElement("style");e.id="mm-styles",e.textContent=`
      #main-menu {
        position: fixed; inset: 0; z-index: 19000;
        font-family: 'Barlow Condensed', 'Segoe UI', sans-serif;
        animation: mm-in .5s cubic-bezier(.22,1,.36,1) both;
      }
      @keyframes mm-in { from { opacity:0; } to { opacity:1; } }

      .mm-bg {
        position: absolute; inset: 0;
        background: radial-gradient(ellipse at 30% 60%, #0a1a2e 0%, #020810 65%);
        display: flex; align-items: stretch; justify-content: stretch;
      }
      #mm-bg-canvas { position: absolute; inset: 0; pointer-events: none; }

      .mm-content {
        position: relative; z-index: 1;
        width: 100%; display: flex; flex-direction: column;
        padding: 0 clamp(20px, 5vw, 60px);
      }

      /* ── Header ── */
      .mm-header {
        display: flex; align-items: center; justify-content: space-between;
        padding: 22px 0; border-bottom: 1px solid rgba(0,229,255,.12);
      }
      .mm-header-left { display: flex; align-items: center; }
      .mm-logo { display: flex; align-items: center; gap: 14px; }
      .mm-logo-glyph { font-size: 2.2rem; color: #00e5ff; text-shadow: 0 0 20px rgba(0,229,255,.6); }
      .mm-logo-title { font-size: 1.8rem; font-weight: 800; letter-spacing: .3em; color: #e8f4f8; line-height: 1; }
      .mm-logo-sub { font-size: .6rem; letter-spacing: .3em; color: rgba(0,229,255,.5); }

      /* Profile */
      .mm-profile { display: flex; align-items: center; gap: 12px; }
      .mm-avatar {
        width: 40px; height: 40px; border-radius: 50%;
        background: linear-gradient(135deg, #00b4cc, #005a80);
        display: flex; align-items: center; justify-content: center;
        font-size: 1.1rem; font-weight: 800; color: #fff;
        border: 2px solid rgba(0,229,255,.4);
      }
      .mm-username { font-size: 1rem; font-weight: 700; color: #e8f4f8; }
      .mm-status { font-size: .65rem; letter-spacing: .15em; }
      .status-online { color: #00ff88; }
      .status-offline { color: #6b8090; }
      .mm-logout-btn {
        background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.12);
        color: rgba(255,255,255,.5); font-family: inherit; font-size: .7rem;
        letter-spacing: .15em; padding: 5px 10px; cursor: pointer; border-radius: 2px;
        transition: all .2s;
      }
      .mm-logout-btn:hover { color: #ff3355; border-color: rgba(255,51,85,.4); }

      /* ── Center ── */
      .mm-center { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 32px; }
      .mm-tagline { font-size: .75rem; letter-spacing: .45em; color: rgba(0,229,255,.5); }

      /* Mode cards */
      .mm-modes { display: flex; gap: 20px; flex-wrap: wrap; justify-content: center; }
      .mm-mode-card {
        width: min(300px, 42vw); padding: 28px 24px;
        background: rgba(255,255,255,.04);
        border: 1px solid rgba(255,255,255,.1);
        cursor: pointer; text-align: left; position: relative; overflow: hidden;
        transition: all .25s; border-radius: 4px;
        font-family: inherit;
      }
      .mm-mode-card::before {
        content: ''; position: absolute; inset: 0;
        background: linear-gradient(135deg, rgba(0,229,255,0) 50%, rgba(0,229,255,.04));
        opacity: 0; transition: opacity .25s;
      }
      .mm-mode-card:hover { border-color: rgba(0,229,255,.4); transform: translateY(-3px); box-shadow: 0 12px 40px rgba(0,229,255,.1); }
      .mm-mode-card:hover::before { opacity: 1; }
      .mm-mode-card.mode-selected { border-color: #00e5ff; box-shadow: 0 0 30px rgba(0,229,255,.15); }
      .mm-mode-card.mode-locked { opacity: .55; cursor: not-allowed; }
      .mm-mode-card.mode-locked:hover { transform: none; border-color: rgba(255,255,255,.1); box-shadow: none; }
      .mode-icon { font-size: 2rem; margin-bottom: 12px; }
      .mode-title { font-size: 1.3rem; font-weight: 800; letter-spacing: .15em; color: #e8f4f8; margin-bottom: 6px; }
      .mode-desc { font-size: .78rem; color: rgba(255,255,255,.4); letter-spacing: .04em; }
      .mode-lock-badge {
        position: absolute; top: 10px; right: 10px;
        background: rgba(255,183,3,.15); border: 1px solid rgba(255,183,3,.3);
        color: #ffb703; font-size: .6rem; letter-spacing: .15em;
        padding: 3px 7px; border-radius: 2px;
      }

      /* Level selector */
      .mm-level-select { text-align: center; animation: slide-up .3s ease; }
      @keyframes slide-up { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }
      .mm-level-title { font-size: .72rem; letter-spacing: .3em; color: rgba(0,229,255,.55); margin-bottom: 14px; }
      .mm-levels { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-bottom: 20px; }
      .mm-level-btn {
        width: 140px; padding: 16px 12px; background: rgba(255,255,255,.04);
        border: 1px solid rgba(255,255,255,.1); cursor: pointer;
        font-family: inherit; text-align: center; transition: all .2s; border-radius: 3px;
      }
      .mm-level-btn.active { border-color: #00e5ff; background: rgba(0,229,255,.08); }
      .mm-level-btn:hover:not(.active) { border-color: rgba(0,229,255,.3); }
      .level-num { font-size: 2rem; font-weight: 800; color: rgba(255,255,255,.15); line-height: 1; }
      .mm-level-btn.active .level-num { color: #00e5ff; }
      .level-name { font-size: .78rem; font-weight: 700; color: #e8f4f8; letter-spacing: .06em; margin: 5px 0 4px; }
      .level-diff { font-size: .65rem; color: rgba(255,183,3,.7); letter-spacing: .1em; }

      .mm-deploy-btn {
        padding: 14px 48px; background: linear-gradient(135deg, #00b4cc, #00e5ff);
        border: none; color: #000; font-family: inherit; font-size: 1.1rem; font-weight: 800;
        letter-spacing: .25em; cursor: pointer; border-radius: 3px;
        box-shadow: 0 0 30px rgba(0,229,255,.3); transition: all .2s;
      }
      .mm-deploy-btn:hover { box-shadow: 0 0 50px rgba(0,229,255,.55); transform: translateY(-2px); }

      /* ── Bottom nav ── */
      .mm-bottom-nav {
        display: flex; align-items: center; gap: 8px;
        padding: 16px 0; border-top: 1px solid rgba(0,229,255,.1);
      }
      .mm-nav-btn {
        background: none; border: 1px solid rgba(255,255,255,.1);
        color: rgba(255,255,255,.5); font-family: inherit; font-size: .78rem;
        letter-spacing: .1em; padding: 7px 14px; cursor: pointer; border-radius: 2px;
        transition: all .2s;
      }
      .mm-nav-btn:hover { color: #00e5ff; border-color: rgba(0,229,255,.3); }
      .mm-build { margin-left: auto; font-size: .65rem; color: rgba(255,255,255,.2); letter-spacing: .1em; }

      /* Settings panel */
      .mm-panel {
        position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
        width: min(420px, 90vw); background: rgba(4,14,26,.97);
        border: 1px solid rgba(0,229,255,.2); border-top: 2px solid #00e5ff;
        padding: 28px; z-index: 100; border-radius: 4px;
        box-shadow: 0 20px 60px rgba(0,0,0,.8);
        animation: panel-in .25s ease;
      }
      @keyframes panel-in { from { opacity:0; transform:translate(-50%,-48%); } to { opacity:1; transform:translate(-50%,-50%); } }
      .mm-panel-title { font-size: 1.1rem; font-weight: 800; letter-spacing: .2em; color: #00e5ff; margin-bottom: 20px; }
      .mm-setting-row {
        display: flex; align-items: center; gap: 12px; margin-bottom: 16px;
      }
      .mm-setting-row label { flex: 1; font-size: .8rem; color: rgba(255,255,255,.6); }
      .mm-setting-row input[type=range] {
        flex: 1.5; accent-color: #00e5ff;
      }
      .mm-setting-row span { font-size: .8rem; color: #00e5ff; min-width: 36px; text-align: right; }
      .mm-close-panel {
        margin-top: 8px; background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.12);
        color: rgba(255,255,255,.6); font-family: inherit; font-size: .8rem; letter-spacing: .15em;
        padding: 8px 18px; cursor: pointer; border-radius: 2px; transition: all .2s; width: 100%;
      }
      .mm-close-panel:hover { color: #00e5ff; border-color: rgba(0,229,255,.35); }

      @keyframes flash-in { from { opacity:0; transform:translateX(-50%) translateY(-8px); } to { opacity:1; transform:translateX(-50%) translateY(0); } }
      .hidden { display: none !important; }
    `,document.head.appendChild(e)}}const xn=Object.create(null);xn.open="0";xn.close="1";xn.ping="2";xn.pong="3";xn.message="4";xn.upgrade="5";xn.noop="6";const Pr=Object.create(null);Object.keys(xn).forEach(s=>{Pr[xn[s]]=s});const Ya={type:"error",data:"parser error"},md=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",gd=typeof ArrayBuffer=="function",_d=s=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(s):s&&s.buffer instanceof ArrayBuffer,Sl=({type:s,data:e},t,n)=>md&&e instanceof Blob?t?n(e):uh(e,n):gd&&(e instanceof ArrayBuffer||_d(e))?t?n(e):uh(new Blob([e]),n):n(xn[s]+(e||"")),uh=(s,e)=>{const t=new FileReader;return t.onload=function(){const n=t.result.split(",")[1];e("b"+(n||""))},t.readAsDataURL(s)};function fh(s){return s instanceof Uint8Array?s:s instanceof ArrayBuffer?new Uint8Array(s):new Uint8Array(s.buffer,s.byteOffset,s.byteLength)}let Ko;function rx(s,e){if(md&&s.data instanceof Blob)return s.data.arrayBuffer().then(fh).then(e);if(gd&&(s.data instanceof ArrayBuffer||_d(s.data)))return e(fh(s.data));Sl(s,!1,t=>{Ko||(Ko=new TextEncoder),e(Ko.encode(t))})}const ph="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Ss=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let s=0;s<ph.length;s++)Ss[ph.charCodeAt(s)]=s;const ox=s=>{let e=s.length*.75,t=s.length,n,i=0,r,o,a,l;s[s.length-1]==="="&&(e--,s[s.length-2]==="="&&e--);const c=new ArrayBuffer(e),d=new Uint8Array(c);for(n=0;n<t;n+=4)r=Ss[s.charCodeAt(n)],o=Ss[s.charCodeAt(n+1)],a=Ss[s.charCodeAt(n+2)],l=Ss[s.charCodeAt(n+3)],d[i++]=r<<2|o>>4,d[i++]=(o&15)<<4|a>>2,d[i++]=(a&3)<<6|l&63;return c},ax=typeof ArrayBuffer=="function",El=(s,e)=>{if(typeof s!="string")return{type:"message",data:vd(s,e)};const t=s.charAt(0);return t==="b"?{type:"message",data:lx(s.substring(1),e)}:Pr[t]?s.length>1?{type:Pr[t],data:s.substring(1)}:{type:Pr[t]}:Ya},lx=(s,e)=>{if(ax){const t=ox(s);return vd(t,e)}else return{base64:!0,data:s}},vd=(s,e)=>{switch(e){case"blob":return s instanceof Blob?s:new Blob([s]);case"arraybuffer":default:return s instanceof ArrayBuffer?s:s.buffer}},xd="",cx=(s,e)=>{const t=s.length,n=new Array(t);let i=0;s.forEach((r,o)=>{Sl(r,!1,a=>{n[o]=a,++i===t&&e(n.join(xd))})})},hx=(s,e)=>{const t=s.split(xd),n=[];for(let i=0;i<t.length;i++){const r=El(t[i],e);if(n.push(r),r.type==="error")break}return n};function dx(){return new TransformStream({transform(s,e){rx(s,t=>{const n=t.length;let i;if(n<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,n);else if(n<65536){i=new Uint8Array(3);const r=new DataView(i.buffer);r.setUint8(0,126),r.setUint16(1,n)}else{i=new Uint8Array(9);const r=new DataView(i.buffer);r.setUint8(0,127),r.setBigUint64(1,BigInt(n))}s.data&&typeof s.data!="string"&&(i[0]|=128),e.enqueue(i),e.enqueue(t)})}})}let Zo;function Sr(s){return s.reduce((e,t)=>e+t.length,0)}function Er(s,e){if(s[0].length===e)return s.shift();const t=new Uint8Array(e);let n=0;for(let i=0;i<e;i++)t[i]=s[0][n++],n===s[0].length&&(s.shift(),n=0);return s.length&&n<s[0].length&&(s[0]=s[0].slice(n)),t}function ux(s,e){Zo||(Zo=new TextDecoder);const t=[];let n=0,i=-1,r=!1;return new TransformStream({transform(o,a){for(t.push(o);;){if(n===0){if(Sr(t)<1)break;const l=Er(t,1);r=(l[0]&128)===128,i=l[0]&127,i<126?n=3:i===126?n=1:n=2}else if(n===1){if(Sr(t)<2)break;const l=Er(t,2);i=new DataView(l.buffer,l.byteOffset,l.length).getUint16(0),n=3}else if(n===2){if(Sr(t)<8)break;const l=Er(t,8),c=new DataView(l.buffer,l.byteOffset,l.length),d=c.getUint32(0);if(d>Math.pow(2,21)-1){a.enqueue(Ya);break}i=d*Math.pow(2,32)+c.getUint32(4),n=3}else{if(Sr(t)<i)break;const l=Er(t,i);a.enqueue(El(r?l:Zo.decode(l),e)),n=0}if(i===0||i>s){a.enqueue(Ya);break}}}})}const yd=4;function xt(s){if(s)return fx(s)}function fx(s){for(var e in xt.prototype)s[e]=xt.prototype[e];return s}xt.prototype.on=xt.prototype.addEventListener=function(s,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+s]=this._callbacks["$"+s]||[]).push(e),this};xt.prototype.once=function(s,e){function t(){this.off(s,t),e.apply(this,arguments)}return t.fn=e,this.on(s,t),this};xt.prototype.off=xt.prototype.removeListener=xt.prototype.removeAllListeners=xt.prototype.removeEventListener=function(s,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var t=this._callbacks["$"+s];if(!t)return this;if(arguments.length==1)return delete this._callbacks["$"+s],this;for(var n,i=0;i<t.length;i++)if(n=t[i],n===e||n.fn===e){t.splice(i,1);break}return t.length===0&&delete this._callbacks["$"+s],this};xt.prototype.emit=function(s){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),t=this._callbacks["$"+s],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(t){t=t.slice(0);for(var n=0,i=t.length;n<i;++n)t[n].apply(this,e)}return this};xt.prototype.emitReserved=xt.prototype.emit;xt.prototype.listeners=function(s){return this._callbacks=this._callbacks||{},this._callbacks["$"+s]||[]};xt.prototype.hasListeners=function(s){return!!this.listeners(s).length};const io=typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,t)=>t(e,0),Zt=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),px="arraybuffer";function Md(s,...e){return e.reduce((t,n)=>(s.hasOwnProperty(n)&&(t[n]=s[n]),t),{})}const mx=Zt.setTimeout,gx=Zt.clearTimeout;function so(s,e){e.useNativeTimers?(s.setTimeoutFn=mx.bind(Zt),s.clearTimeoutFn=gx.bind(Zt)):(s.setTimeoutFn=Zt.setTimeout.bind(Zt),s.clearTimeoutFn=Zt.clearTimeout.bind(Zt))}const _x=1.33;function vx(s){return typeof s=="string"?xx(s):Math.ceil((s.byteLength||s.size)*_x)}function xx(s){let e=0,t=0;for(let n=0,i=s.length;n<i;n++)e=s.charCodeAt(n),e<128?t+=1:e<2048?t+=2:e<55296||e>=57344?t+=3:(n++,t+=4);return t}function bd(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function yx(s){let e="";for(let t in s)s.hasOwnProperty(t)&&(e.length&&(e+="&"),e+=encodeURIComponent(t)+"="+encodeURIComponent(s[t]));return e}function Mx(s){let e={},t=s.split("&");for(let n=0,i=t.length;n<i;n++){let r=t[n].split("=");e[decodeURIComponent(r[0])]=decodeURIComponent(r[1])}return e}class bx extends Error{constructor(e,t,n){super(e),this.description=t,this.context=n,this.type="TransportError"}}class wl extends xt{constructor(e){super(),this.writable=!1,so(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,t,n){return super.emitReserved("error",new bx(e,t,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const t=El(e,this.socket.binaryType);this.onPacket(t)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,t={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(t)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const t=yx(e);return t.length?"?"+t:""}}class Sx extends wl{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const t=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let n=0;this._polling&&(n++,this.once("pollComplete",function(){--n||t()})),this.writable||(n++,this.once("drain",function(){--n||t()}))}else t()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const t=n=>{if(this.readyState==="opening"&&n.type==="open"&&this.onOpen(),n.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(n)};hx(e,this.socket.binaryType).forEach(t),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,cx(e,t=>{this.doWrite(t,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",t=this.query||{};return this.opts.timestampRequests!==!1&&(t[this.opts.timestampParam]=bd()),!this.supportsBinary&&!t.sid&&(t.b64=1),this.createUri(e,t)}}let Sd=!1;try{Sd=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const Ex=Sd;function wx(){}class Tx extends Sx{constructor(e){if(super(e),typeof location<"u"){const t=location.protocol==="https:";let n=location.port;n||(n=t?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||n!==e.port}}doWrite(e,t){const n=this.request({method:"POST",data:e});n.on("success",t),n.on("error",(i,r)=>{this.onError("xhr post error",i,r)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(t,n)=>{this.onError("xhr poll error",t,n)}),this.pollXhr=e}}let Xi=class Dr extends xt{constructor(e,t,n){super(),this.createRequest=e,so(this,n),this._opts=n,this._method=n.method||"GET",this._uri=t,this._data=n.data!==void 0?n.data:null,this._create()}_create(){var e;const t=Md(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");t.xdomain=!!this._opts.xd;const n=this._xhr=this.createRequest(t);try{n.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let i in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(i)&&n.setRequestHeader(i,this._opts.extraHeaders[i])}}catch{}if(this._method==="POST")try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{n.setRequestHeader("Accept","*/*")}catch{}(e=this._opts.cookieJar)===null||e===void 0||e.addCookies(n),"withCredentials"in n&&(n.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(n.timeout=this._opts.requestTimeout),n.onreadystatechange=()=>{var i;n.readyState===3&&((i=this._opts.cookieJar)===null||i===void 0||i.parseCookies(n.getResponseHeader("set-cookie"))),n.readyState===4&&(n.status===200||n.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof n.status=="number"?n.status:0)},0))},n.send(this._data)}catch(i){this.setTimeoutFn(()=>{this._onError(i)},0);return}typeof document<"u"&&(this._index=Dr.requestsCount++,Dr.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=wx,e)try{this._xhr.abort()}catch{}typeof document<"u"&&delete Dr.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}};Xi.requestsCount=0;Xi.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",mh);else if(typeof addEventListener=="function"){const s="onpagehide"in Zt?"pagehide":"unload";addEventListener(s,mh,!1)}}function mh(){for(let s in Xi.requests)Xi.requests.hasOwnProperty(s)&&Xi.requests[s].abort()}const Ax=(function(){const s=Ed({xdomain:!1});return s&&s.responseType!==null})();class ja extends Tx{constructor(e){super(e);const t=e&&e.forceBase64;this.supportsBinary=Ax&&!t}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new Xi(Ed,this.uri(),e)}}function Ed(s){const e=s.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||Ex))return new XMLHttpRequest}catch{}if(!e)try{return new Zt[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const wd=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class Rx extends wl{get name(){return"websocket"}doOpen(){const e=this.uri(),t=this.opts.protocols,n=wd?{}:Md(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,t,n)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const n=e[t],i=t===e.length-1;Sl(n,this.supportsBinary,r=>{try{this.doWrite(n,r)}catch{}i&&io(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",t=this.query||{};return this.opts.timestampRequests&&(t[this.opts.timestampParam]=bd()),this.supportsBinary||(t.b64=1),this.createUri(e,t)}}const Jo=Zt.WebSocket||Zt.MozWebSocket;class $a extends Rx{createSocket(e,t,n){return wd?new Jo(e,t,n):t?new Jo(e,t):new Jo(e)}doWrite(e,t){this.ws.send(t)}}class Td extends wl{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved("error",e)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{const t=ux(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=e.readable.pipeThrough(t).getReader(),i=dx();i.readable.pipeTo(e.writable),this._writer=i.writable.getWriter();const r=()=>{n.read().then(({done:a,value:l})=>{a||(this.onPacket(l),r())}).catch(a=>{})};r();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const n=e[t],i=t===e.length-1;this._writer.write(n).then(()=>{i&&io(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this._transport)===null||e===void 0||e.close()}}const Cx={websocket:$a,webtransport:Td,polling:ja},Ix=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,Lx=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function Ka(s){if(s.length>8e3)throw"URI too long";const e=s,t=s.indexOf("["),n=s.indexOf("]");t!=-1&&n!=-1&&(s=s.substring(0,t)+s.substring(t,n).replace(/:/g,";")+s.substring(n,s.length));let i=Ix.exec(s||""),r={},o=14;for(;o--;)r[Lx[o]]=i[o]||"";return t!=-1&&n!=-1&&(r.source=e,r.host=r.host.substring(1,r.host.length-1).replace(/;/g,":"),r.authority=r.authority.replace("[","").replace("]","").replace(/;/g,":"),r.ipv6uri=!0),r.pathNames=Px(r,r.path),r.queryKey=Dx(r,r.query),r}function Px(s,e){const t=/\/{2,9}/g,n=e.replace(t,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&n.splice(0,1),e.slice(-1)=="/"&&n.splice(n.length-1,1),n}function Dx(s,e){const t={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,i,r){i&&(t[i]=r)}),t}const Za=typeof addEventListener=="function"&&typeof removeEventListener=="function",Ur=[];Za&&addEventListener("offline",()=>{Ur.forEach(s=>s())},!1);class Xn extends xt{constructor(e,t){if(super(),this.binaryType=px,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&typeof e=="object"&&(t=e,e=null),e){const n=Ka(e);t.hostname=n.host,t.secure=n.protocol==="https"||n.protocol==="wss",t.port=n.port,n.query&&(t.query=n.query)}else t.host&&(t.hostname=Ka(t.host).host);so(this,t),this.secure=t.secure!=null?t.secure:typeof location<"u"&&location.protocol==="https:",t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.hostname=t.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=t.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},t.transports.forEach(n=>{const i=n.prototype.name;this.transports.push(i),this._transportsByName[i]=n}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},t),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=Mx(this.opts.query)),Za&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},Ur.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const t=Object.assign({},this.opts.query);t.EIO=yd,t.transport=e,this.id&&(t.sid=this.id);const n=Object.assign({},this.opts,{query:t,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](n)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const e=this.opts.rememberUpgrade&&Xn.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const t=this.createTransport(e);t.open(),this.setTransport(t)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",t=>this._onClose("transport close",t))}onOpen(){this.readyState="open",Xn.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const t=new Error("server error");t.code=e.data,this._onError(t);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let t=1;for(let n=0;n<this.writeBuffer.length;n++){const i=this.writeBuffer[n].data;if(i&&(t+=vx(i)),n>0&&t>this._maxPayload)return this.writeBuffer.slice(0,n);t+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,io(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,t,n){return this._sendPacket("message",e,t,n),this}send(e,t,n){return this._sendPacket("message",e,t,n),this}_sendPacket(e,t,n,i){if(typeof t=="function"&&(i=t,t=void 0),typeof n=="function"&&(i=n,n=null),this.readyState==="closing"||this.readyState==="closed")return;n=n||{},n.compress=n.compress!==!1;const r={type:e,data:t,options:n};this.emitReserved("packetCreate",r),this.writeBuffer.push(r),i&&this.once("flush",i),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},t=()=>{this.off("upgrade",t),this.off("upgradeError",t),e()},n=()=>{this.once("upgrade",t),this.once("upgradeError",t)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():e()}):this.upgrading?n():e()),this}_onError(e){if(Xn.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),Za&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const n=Ur.indexOf(this._offlineEventListener);n!==-1&&Ur.splice(n,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,t),this.writeBuffer=[],this._prevBufferLen=0}}}Xn.protocol=yd;class Ux extends Xn{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_probe(e){let t=this.createTransport(e),n=!1;Xn.priorWebsocketSuccess=!1;const i=()=>{n||(t.send([{type:"ping",data:"probe"}]),t.once("packet",h=>{if(!n)if(h.type==="pong"&&h.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",t),!t)return;Xn.priorWebsocketSuccess=t.name==="websocket",this.transport.pause(()=>{n||this.readyState!=="closed"&&(d(),this.setTransport(t),t.send([{type:"upgrade"}]),this.emitReserved("upgrade",t),t=null,this.upgrading=!1,this.flush())})}else{const u=new Error("probe error");u.transport=t.name,this.emitReserved("upgradeError",u)}}))};function r(){n||(n=!0,d(),t.close(),t=null)}const o=h=>{const u=new Error("probe error: "+h);u.transport=t.name,r(),this.emitReserved("upgradeError",u)};function a(){o("transport closed")}function l(){o("socket closed")}function c(h){t&&h.name!==t.name&&r()}const d=()=>{t.removeListener("open",i),t.removeListener("error",o),t.removeListener("close",a),this.off("close",l),this.off("upgrading",c)};t.once("open",i),t.once("error",o),t.once("close",a),this.once("close",l),this.once("upgrading",c),this._upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{n||t.open()},200):t.open()}onHandshake(e){this._upgrades=this._filterUpgrades(e.upgrades),super.onHandshake(e)}_filterUpgrades(e){const t=[];for(let n=0;n<e.length;n++)~this.transports.indexOf(e[n])&&t.push(e[n]);return t}}let Nx=class extends Ux{constructor(e,t={}){const n=typeof e=="object",i=n?{...e}:{...t};(!i.transports||i.transports&&typeof i.transports[0]=="string")&&(i.transports=(i.transports||["polling","websocket","webtransport"]).map(r=>Cx[r]).filter(r=>!!r)),super(n?i:e,i)}};function Fx(s,e="",t){let n=s;t=t||typeof location<"u"&&location,s==null&&(s=t.protocol+"//"+t.host),typeof s=="string"&&(s.charAt(0)==="/"&&(s.charAt(1)==="/"?s=t.protocol+s:s=t.host+s),/^(https?|wss?):\/\//.test(s)||(typeof t<"u"?s=t.protocol+"//"+s:s="https://"+s),n=Ka(s)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const r=n.host.indexOf(":")!==-1?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+r+":"+n.port+e,n.href=n.protocol+"://"+r+(t&&t.port===n.port?"":":"+n.port),n}const Ox=typeof ArrayBuffer=="function",Bx=s=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(s):s.buffer instanceof ArrayBuffer,Ad=Object.prototype.toString,kx=typeof Blob=="function"||typeof Blob<"u"&&Ad.call(Blob)==="[object BlobConstructor]",zx=typeof File=="function"||typeof File<"u"&&Ad.call(File)==="[object FileConstructor]";function Tl(s){return Ox&&(s instanceof ArrayBuffer||Bx(s))||kx&&s instanceof Blob||zx&&s instanceof File}function Nr(s,e){if(!s||typeof s!="object")return!1;if(Array.isArray(s)){for(let t=0,n=s.length;t<n;t++)if(Nr(s[t]))return!0;return!1}if(Tl(s))return!0;if(s.toJSON&&typeof s.toJSON=="function"&&arguments.length===1)return Nr(s.toJSON(),!0);for(const t in s)if(Object.prototype.hasOwnProperty.call(s,t)&&Nr(s[t]))return!0;return!1}function Vx(s){const e=[],t=s.data,n=s;return n.data=Fr(t,e),n.attachments=e.length,{packet:n,buffers:e}}function Fr(s,e,t){if(!s)return s;if(Tl(s)){const n={_placeholder:!0,num:e.length};return e.push(s),n}else if(Array.isArray(s)){const n=new Array(s.length);for(let i=0;i<s.length;i++)n[i]=Fr(s[i],e);return n}else if(typeof s=="object"&&!(s instanceof Date)){if(s.toJSON&&typeof s.toJSON=="function"&&!t)return Fr(s.toJSON(),e,!0);const n={};for(const i in s)Object.prototype.hasOwnProperty.call(s,i)&&(n[i]=Fr(s[i],e));return n}return s}function Hx(s,e){return s.data=Ja(s.data,e),delete s.attachments,s}function Ja(s,e){if(!s)return s;if(s&&s._placeholder===!0){if(typeof s.num=="number"&&s.num>=0&&s.num<e.length)return e[s.num];throw new Error("illegal attachments")}else if(Array.isArray(s))for(let t=0;t<s.length;t++)s[t]=Ja(s[t],e);else if(typeof s=="object")for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&(s[t]=Ja(s[t],e));return s}const Gx=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"];var Ge;(function(s){s[s.CONNECT=0]="CONNECT",s[s.DISCONNECT=1]="DISCONNECT",s[s.EVENT=2]="EVENT",s[s.ACK=3]="ACK",s[s.CONNECT_ERROR=4]="CONNECT_ERROR",s[s.BINARY_EVENT=5]="BINARY_EVENT",s[s.BINARY_ACK=6]="BINARY_ACK"})(Ge||(Ge={}));class Wx{constructor(e){this.replacer=e}encode(e){return(e.type===Ge.EVENT||e.type===Ge.ACK)&&Nr(e)?this.encodeAsBinary({type:e.type===Ge.EVENT?Ge.BINARY_EVENT:Ge.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let t=""+e.type;return(e.type===Ge.BINARY_EVENT||e.type===Ge.BINARY_ACK)&&(t+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(t+=e.nsp+","),e.id!=null&&(t+=e.id),e.data!=null&&(t+=JSON.stringify(e.data,this.replacer)),t}encodeAsBinary(e){const t=Vx(e),n=this.encodeAsString(t.packet),i=t.buffers;return i.unshift(n),i}}class Al extends xt{constructor(e){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof e=="function"?{reviver:e}:e)}add(e){let t;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");t=this.decodeString(e);const n=t.type===Ge.BINARY_EVENT;n||t.type===Ge.BINARY_ACK?(t.type=n?Ge.EVENT:Ge.ACK,this.reconstructor=new Xx(t)):super.emitReserved("decoded",t)}else if(Tl(e)||e.base64)if(this.reconstructor)t=this.reconstructor.takeBinaryData(e),t&&(this.reconstructor=null,super.emitReserved("decoded",t));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let t=0;const n={type:Number(e.charAt(0))};if(Ge[n.type]===void 0)throw new Error("unknown packet type "+n.type);if(n.type===Ge.BINARY_EVENT||n.type===Ge.BINARY_ACK){const r=t+1;for(;e.charAt(++t)!=="-"&&t!=e.length;);const o=e.substring(r,t);if(o!=Number(o)||e.charAt(t)!=="-")throw new Error("Illegal attachments");const a=Number(o);if(!qx(a)||a<1)throw new Error("Illegal attachments");if(a>this.opts.maxAttachments)throw new Error("too many attachments");n.attachments=a}if(e.charAt(t+1)==="/"){const r=t+1;for(;++t&&!(e.charAt(t)===","||t===e.length););n.nsp=e.substring(r,t)}else n.nsp="/";const i=e.charAt(t+1);if(i!==""&&Number(i)==i){const r=t+1;for(;++t;){const o=e.charAt(t);if(o==null||Number(o)!=o){--t;break}if(t===e.length)break}n.id=Number(e.substring(r,t+1))}if(e.charAt(++t)){const r=this.tryParse(e.substr(t));if(Al.isPayloadValid(n.type,r))n.data=r;else throw new Error("invalid payload")}return n}tryParse(e){try{return JSON.parse(e,this.opts.reviver)}catch{return!1}}static isPayloadValid(e,t){switch(e){case Ge.CONNECT:return gh(t);case Ge.DISCONNECT:return t===void 0;case Ge.CONNECT_ERROR:return typeof t=="string"||gh(t);case Ge.EVENT:case Ge.BINARY_EVENT:return Array.isArray(t)&&(typeof t[0]=="number"||typeof t[0]=="string"&&Gx.indexOf(t[0])===-1);case Ge.ACK:case Ge.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class Xx{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const t=Hx(this.reconPack,this.buffers);return this.finishedReconstruction(),t}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const qx=Number.isInteger||function(s){return typeof s=="number"&&isFinite(s)&&Math.floor(s)===s};function gh(s){return Object.prototype.toString.call(s)==="[object Object]"}const Yx=Object.freeze(Object.defineProperty({__proto__:null,Decoder:Al,Encoder:Wx,get PacketType(){return Ge}},Symbol.toStringTag,{value:"Module"}));function dn(s,e,t){return s.on(e,t),function(){s.off(e,t)}}const jx=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Rl extends xt{constructor(e,t,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[dn(e,"open",this.onopen.bind(this)),dn(e,"packet",this.onpacket.bind(this)),dn(e,"error",this.onerror.bind(this)),dn(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...t){var n,i,r;if(jx.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(t.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(t),this;const o={type:Ge.EVENT,data:t};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof t[t.length-1]=="function"){const d=this.ids++,h=t.pop();this._registerAckCallback(d,h),o.id=d}const a=(i=(n=this.io.engine)===null||n===void 0?void 0:n.transport)===null||i===void 0?void 0:i.writable,l=this.connected&&!(!((r=this.io.engine)===null||r===void 0)&&r._hasPingExpired());return this.flags.volatile&&!a||(l?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(e,t){var n;const i=(n=this.flags.timeout)!==null&&n!==void 0?n:this._opts.ackTimeout;if(i===void 0){this.acks[e]=t;return}const r=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let a=0;a<this.sendBuffer.length;a++)this.sendBuffer[a].id===e&&this.sendBuffer.splice(a,1);t.call(this,new Error("operation has timed out"))},i),o=(...a)=>{this.io.clearTimeoutFn(r),t.apply(this,a)};o.withError=!0,this.acks[e]=o}emitWithAck(e,...t){return new Promise((n,i)=>{const r=(o,a)=>o?i(o):n(a);r.withError=!0,t.push(r),this.emit(e,...t)})}_addToQueue(e){let t;typeof e[e.length-1]=="function"&&(t=e.pop());const n={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((i,...r)=>(this._queue[0],i!==null?n.tryCount>this._opts.retries&&(this._queue.shift(),t&&t(i)):(this._queue.shift(),t&&t(null,...r)),n.pending=!1,this._drainQueue())),this._queue.push(n),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const t=this._queue[0];t.pending&&!e||(t.pending=!0,t.tryCount++,this.flags=t.flags,this.emit.apply(this,t.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:Ge.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,t){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,t),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(n=>String(n.id)===e)){const n=this.acks[e];delete this.acks[e],n.withError&&n.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case Ge.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case Ge.EVENT:case Ge.BINARY_EVENT:this.onevent(e);break;case Ge.ACK:case Ge.BINARY_ACK:this.onack(e);break;case Ge.DISCONNECT:this.ondisconnect();break;case Ge.CONNECT_ERROR:this.destroy();const n=new Error(e.data.message);n.data=e.data.data,this.emitReserved("connect_error",n);break}}onevent(e){const t=e.data||[];e.id!=null&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const t=this._anyListeners.slice();for(const n of t)n.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const t=this;let n=!1;return function(...i){n||(n=!0,t.packet({type:Ge.ACK,id:e,data:i}))}}onack(e){const t=this.acks[e.id];typeof t=="function"&&(delete this.acks[e.id],t.withError&&e.data.unshift(null),t.apply(this,e.data))}onconnect(e,t){this.id=e,this.recovered=t&&this._pid===t,this._pid=t,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:Ge.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const t=this._anyListeners;for(let n=0;n<t.length;n++)if(e===t[n])return t.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const t=this._anyOutgoingListeners;for(let n=0;n<t.length;n++)if(e===t[n])return t.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const t=this._anyOutgoingListeners.slice();for(const n of t)n.apply(this,e.data)}}}function as(s){s=s||{},this.ms=s.min||100,this.max=s.max||1e4,this.factor=s.factor||2,this.jitter=s.jitter>0&&s.jitter<=1?s.jitter:0,this.attempts=0}as.prototype.duration=function(){var s=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),t=Math.floor(e*this.jitter*s);s=(Math.floor(e*10)&1)==0?s-t:s+t}return Math.min(s,this.max)|0};as.prototype.reset=function(){this.attempts=0};as.prototype.setMin=function(s){this.ms=s};as.prototype.setMax=function(s){this.max=s};as.prototype.setJitter=function(s){this.jitter=s};class jr extends xt{constructor(e,t){var n;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(t=e,e=void 0),t=t||{},t.path=t.path||"/socket.io",this.opts=t,so(this,t),this.reconnection(t.reconnection!==!1),this.reconnectionAttempts(t.reconnectionAttempts||1/0),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.randomizationFactor((n=t.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new as({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(t.timeout==null?2e4:t.timeout),this._readyState="closed",this.uri=e;const i=t.parser||Yx;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=t.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(t=this.backoff)===null||t===void 0||t.setMin(e),this)}randomizationFactor(e){var t;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(t=this.backoff)===null||t===void 0||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(t=this.backoff)===null||t===void 0||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new Nx(this.uri,this.opts);const t=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const i=dn(t,"open",function(){n.onopen(),e&&e()}),r=a=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",a),e?e(a):this.maybeReconnectOnOpen()},o=dn(t,"error",r);if(this._timeout!==!1){const a=this._timeout,l=this.setTimeoutFn(()=>{i(),r(new Error("timeout")),t.close()},a);this.opts.autoUnref&&l.unref(),this.subs.push(()=>{this.clearTimeoutFn(l)})}return this.subs.push(i),this.subs.push(o),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(dn(e,"ping",this.onping.bind(this)),dn(e,"data",this.ondata.bind(this)),dn(e,"error",this.onerror.bind(this)),dn(e,"close",this.onclose.bind(this)),dn(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(t){this.onclose("parse error",t)}}ondecoded(e){io(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,t){let n=this.nsps[e];return n?this._autoConnect&&!n.active&&n.connect():(n=new Rl(this,e,t),this.nsps[e]=n),n}_destroy(e){const t=Object.keys(this.nsps);for(const n of t)if(this.nsps[n].active)return;this._close()}_packet(e){const t=this.encoder.encode(e);for(let n=0;n<t.length;n++)this.engine.write(t[n],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,t){var n;this.cleanup(),(n=this.engine)===null||n===void 0||n.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,t),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const t=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(i=>{i?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",i)):e.onreconnect()}))},t);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const vs={};function ci(s,e){typeof s=="object"&&(e=s,s=void 0),e=e||{};const t=Fx(s,e.path||"/socket.io"),n=t.source,i=t.id,r=t.path,o=vs[i]&&r in vs[i].nsps,a=e.forceNew||e["force new connection"]||e.multiplex===!1||o;let l;return a?l=new jr(n,e):(vs[i]||(vs[i]=new jr(n,e)),l=vs[i]),t.query&&!e.query&&(e.query=t.queryKey),l.socket(t.path,e)}Object.assign(ci,{Manager:jr,Socket:Rl,io:ci,connect:ci});const $x=Object.freeze(Object.defineProperty({__proto__:null,Manager:jr,NodeWebSocket:$a,NodeXHR:ja,Socket:Rl,WebSocket:$a,WebTransport:Td,XHR:ja,connect:ci,default:ci,io:ci},Symbol.toStringTag,{value:"Module"})),Kx="https://warzone-tactical-fps-server--my-api.replit.app",Zx="https://warzone-tactical-fps-server--my-api.replit.app/api";class Jx{constructor(e){this.hud=e,this.socket=null,this.connected=!1,this.roomName="main",this.players=new Map,this._handlers={},this._pingInterval=null,this._latency=0}async connect(e="main"){this.roomName=e;try{await fetch(`${Zx}/rooms`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({roomCode:e,roomName:e})})}catch(t){console.warn("[OnlineClient] REST room notify failed (non-fatal):",t.message)}return new Promise(t=>{this.socket=ci(Kx,{transports:["websocket","polling"],reconnection:!0,reconnectionAttempts:8,reconnectionDelay:1500}),this.socket.on("connect",()=>{this.connected=!0,console.log("[OnlineClient] Connected:",this.socket.id);const n=this._playerName??"Operator";this.socket.emit("join_room",{roomName:this.roomName,roomId:this.roomName,playerName:n}),this._startPing(),t(!0)}),this.socket.on("connect_error",n=>{console.warn("[OnlineClient] Connect error:",n.message),t(!1)}),this.socket.on("disconnect",n=>{this.connected=!1,this._stopPing(),console.warn("[OnlineClient] Disconnected:",n)}),this.socket.on("room:state",({players:n=[],phase:i}={})=>{var r,o;console.log("[OnlineClient] room:state — players:",n.length,"phase:",i),n.forEach(a=>{a.playerId!==this.socket.id&&this.players.set(a.playerId,a)}),(o=(r=this._handlers).room_state)==null||o.call(r,{players:n,phase:i})}),this.socket.on("player:joined",({playerId:n,name:i}={})=>{var r,o,a,l;n!==this.socket.id&&(this.players.set(n,{playerId:n,name:i,x:0,y:0,z:0,anim:"idle"}),(o=(r=this.hud)==null?void 0:r.addKillfeedEvent)==null||o.call(r,"",(i??"Operator")+" joined","",!1),(l=(a=this._handlers).player_joined)==null||l.call(a,{id:n,playerId:n,username:i,name:i}))}),this.socket.on("player:left",({playerId:n}={})=>{var i,r;this.players.delete(n),(r=(i=this._handlers).player_left)==null||r.call(i,{id:n,playerId:n})}),this.socket.on("players_transform_sync",(n=[])=>{var i,r;n.forEach(o=>{const a=o.playerId??o.id;!a||a===this.socket.id||this.players.set(a,{...this.players.get(a),...o})}),(r=(i=this._handlers).players_transform_sync)==null||r.call(i,n)}),this.socket.on("player_killed",({killerName:n,victimName:i,hitZone:r}={})=>{var o,a,l,c;(a=(o=this.hud)==null?void 0:o.addKillfeedEvent)==null||a.call(o,n??"?",i??"?","M4A1",r==="head"),(c=(l=this._handlers).player_killed)==null||c.call(l,{killerName:n,victimName:i,hitZone:r})}),this.socket.on("receive_damage",(n={})=>{var i,r;(r=(i=this._handlers).receive_damage)==null||r.call(i,n)}),this.socket.on("scoreboard_sync",n=>{var i,r;return(r=(i=this._handlers).scoreboard_sync)==null?void 0:r.call(i,n)}),this.socket.on("scoreboard:sync",n=>{var i,r;return(r=(i=this._handlers).scoreboard_sync)==null?void 0:r.call(i,n)}),this.socket.on("respawn",n=>{var i,r;return(r=(i=this._handlers).respawn)==null?void 0:r.call(i,n)}),this.socket.on("pong",n=>{this._latency=Math.round((Date.now()-n)/2)}),this.socket.on("server_pong",n=>{this._latency=Math.round((Date.now()-n)/2)})})}sendPlayerState(e,t,n,i,r,o){!this.connected||!this.socket||this.socket.emit("player:move",{x:+e.x.toFixed(2),y:+e.y.toFixed(2),z:+e.z.toFixed(2),yaw:+t.toFixed(3),health:Math.round(i??100),armor:Math.round(r??0),anim:o??"idle"})}sendShot(e,t,n=null,i=0){!this.connected||!this.socket||this.socket.emit("shoot_event",{origin:{x:e.x,y:e.y,z:e.z},direction:{x:t.x,y:t.y,z:t.z},hitPlayerId:n,damage:i})}sendHit(e,t,n="torso"){!this.connected||!this.socket||this.socket.emit("hit_event",{targetId:e,damage:t,hitZone:n})}setPlayerName(e){this._playerName=e}_startPing(){this._stopPing(),this._pingInterval=setInterval(()=>{this.connected&&this.socket.emit("client_ping",Date.now())},2e3)}_stopPing(){this._pingInterval&&(clearInterval(this._pingInterval),this._pingInterval=null)}get ping(){return this._latency}disconnect(){var e;this._stopPing(),(e=this.socket)==null||e.disconnect(),this.connected=!1}on(e,t){this._handlers[e]=t}getRemotePlayers(){return Array.from(this.players.values())}}class Qx{constructor(e,t,n){this.scene=e,this.id=t,this.name=n||"Enemy",this.health=100,this.maxHealth=100,this._targetPos=new I,this._targetYaw=0,this.group=new Pt,this.group.visible=!1,e.add(this.group),this.mixer=null,this.animations={},this.currentAnim=null,this._ready=!1,this._buildNametag(),this._buildHealthBar(),this._loadModel()}_loadModel(){new jn().load("./assets/models/soldier/Swat.fbx",e=>{e.scale.setScalar(.01),e.rotation.y=Math.PI,e.traverse(t=>{t.isMesh&&(t.castShadow=!0,t.receiveShadow=!0)}),this.group.add(e),this.model=e,this.mixer=new yl(e),this._loadAnims()},void 0,()=>{this._buildBox()})}_buildBox(){const e=new mt({color:17578}),t=new at(new nn(.5,1.5,.3),e);t.position.y=.75,this.group.add(t),this._ready=!0,this.group.visible=!0}_loadAnims(){const e=["idle","walk forward","run forward","death from the front"];let t=0;const n=new jn;e.forEach(i=>{n.load(`./assets/models/soldier/animations/${i}.fbx`,r=>{if(r.animations[0]){const o=this.mixer.clipAction(r.animations[0]);i.startsWith("death")&&(o.clampWhenFinished=!0,o.loop=Zr),this.animations[i]=o}t++,t===e.length&&(this._ready=!0,this.group.visible=!0,this._play("idle"))},void 0,()=>{t++,t===e.length&&(this._ready=!0,this.group.visible=!0)})})}_play(e,t=.2){var i;const n=this.animations[e]||this.animations.idle;!n||this.currentAnim===n||((i=this.currentAnim)==null||i.fadeOut(t),n.reset().fadeIn(t).play(),this.currentAnim=n)}_buildNametag(){const e=document.createElement("canvas");e.width=512,e.height=64;const t=e.getContext("2d");t.font="bold 38px Arial",t.fillStyle="#00e5ff",t.textAlign="center",t.textBaseline="middle",t.fillText(this.name,256,32);const n=new es(new ui({map:new ts(e),depthTest:!1}));n.scale.set(3,.4,1),n.position.set(0,2.9,0),this.group.add(n),this._nameTag=n}_buildHealthBar(){const e=document.createElement("canvas");e.width=256,e.height=28,this._hpCtx=e.getContext("2d"),this._hpTex=new ts(e);const t=new es(new ui({map:this._hpTex,depthTest:!1}));t.scale.set(2,.22,1),t.position.set(0,2.5,0),this.group.add(t),this._hpSprite=t,this._redrawHp()}_redrawHp(){if(!this._hpCtx)return;const e=this._hpCtx,t=256,n=28;e.clearRect(0,0,t,n),e.fillStyle="#111",e.fillRect(0,0,t,n);const i=Math.max(0,this.health/this.maxHealth);e.fillStyle=i>.5?"#00dd44":i>.25?"#ffaa00":"#ff2222",e.fillRect(2,2,(t-4)*i,n-4),this._hpTex.needsUpdate=!0}applyState(e){if(this._targetPos.set(e.x??0,e.y??0,e.z??0),this._targetYaw=e.yaw??0,this.health=e.health??this.health,this._redrawHp(),this._ready){const t=e.anim;t==="sprint"||t==="run"?this._play("run forward"):t==="walk"?this._play("walk forward"):t==="dead"?this._play("death from the front"):this._play("idle")}}update(e){this.mixer&&this.mixer.update(e),this.group.position.lerp(this._targetPos,Math.min(1,12*e));const t=this._targetYaw-this.group.rotation.y;this.group.rotation.y+=Math.atan2(Math.sin(t),Math.cos(t))*Math.min(1,10*e)}takeDamage(e){this.health=Math.max(0,this.health-e),this._redrawHp(),this.health<=0&&this._ready&&this._play("death from the front")}destroy(){this.scene.remove(this.group)}}class ey{constructor(){this.kills=0,this.currentLevel=1,this._isRunning=!1,this._clock=new ap,this._deathShown=!1,this._netTimer=0,this._netInterval=.05,this.session=null,this.online=null,this._isOnline=!1,this.remotePlayers=new Map}async start(){var n,i,r,o;this.session=await new pd().show();const e=await new bl(this.session).show();if(this._choice=e,await this._initEngine(),e.mode==="online"){this.online=new Jx(this.hud);const a=e.roomCode??"main",l=((i=(n=this.session)==null?void 0:n.user)==null?void 0:i.username)??"Operator_"+Math.random().toString(36).slice(2,6).toUpperCase();this.online.setPlayerName(l),await this.online.connect(a)?(this._isOnline=!0,this.hud.initLeaderboard(l),this._setupOnlineHandlers()):(this._toast("⚠ Server unreachable — switching to offline mode"),this.online=null,this._isOnline=!1)}else this.hud.initLeaderboard(((o=(r=this.session)==null?void 0:r.user)==null?void 0:o.username)??"You");this._showLoadScreen(`LOADING LEVEL ${e.level}…`),await this.levels.loadLevel(e.level,()=>this._onAllEnemiesKilled(),this._isOnline),this.currentLevel=e.level,this.physics.invalidateCache();const t=await this._findSafeSpawn();this.character.respawn(t),this._hideLoadScreen(),this._showClickToPlay(),this._isRunning=!0,this._loop()}async _initEngine(){this.sceneManager=new Bv,this.physics=new kv(this.sceneManager.scene),this.audio=new zv,this.input=new Vv(this.sceneManager.renderer.domElement),this.hud=new Qv,this.touch=new ex(this.input),window._inputRef=this.input,document.addEventListener("click",()=>this.audio.resume(),{once:!0}),document.addEventListener("keydown",()=>this.audio.resume(),{once:!0}),this.weapon=new Kv(this.sceneManager.scene,this.audio),this.character=new Gv(this.sceneManager.scene,this.physics,this.audio),this.levels=new Jv(this.sceneManager,this.physics,this.audio,this.weapon,this.hud)}_showClickToPlay(){const e=document.createElement("div");e.id="click-to-play",e.style.cssText=`
      position:fixed;inset:0;z-index:5000;display:flex;flex-direction:column;
      align-items:center;justify-content:center;background:rgba(0,0,0,0.55);
      font-family:'Barlow Condensed',sans-serif;cursor:pointer;
      animation:fade-in .4s ease;
    `,e.innerHTML=`
      <div style="font-size:1.1rem;letter-spacing:.4em;color:#00e5ff;text-shadow:0 0 20px #00e5ff;margin-bottom:10px">▶ CLICK TO PLAY</div>
      <div style="font-size:.72rem;letter-spacing:.2em;color:rgba(255,255,255,.4)">
        WASD · MOUSE AIM · LMB SHOOT · RMB ADS · SHIFT SPRINT · SPACE JUMP · C CROUCH · R RELOAD
      </div>
    `,document.body.appendChild(e);const t=()=>{var n,i;(i=(n=this.sceneManager.renderer.domElement).requestPointerLock)==null||i.call(n),e.style.opacity="0",e.style.transition="opacity .3s",setTimeout(()=>e.remove(),350)};e.addEventListener("click",t),document.addEventListener("pointerlockchange",()=>{document.pointerLockElement===this.sceneManager.renderer.domElement&&e.remove()})}async _findSafeSpawn(){await new Promise(a=>setTimeout(a,800));const e=[];if(this.sceneManager.scene.traverse(a=>{if(!a.isMesh)return;const l=a.name;l==="safetyGround"||l==="muzzle"||l==="placeholder"||l.startsWith("sprite")||e.push(a)}),e.length===0)return{x:0,y:5,z:0};const t=new Yr,n=new I(0,-1,0),i=new I(0,1,0),r=150,o=[];for(let a=0;a<=10;a++){const l=a*8,c=a===0?1:a*6;for(let d=0;d<c;d++){const h=d/c*Math.PI*2;o.push(new I(Math.cos(h)*l,r,Math.sin(h)*l))}}for(const a of o){t.set(a,n),t.near=0,t.far=r+10;const l=t.intersectObjects(e,!1);if(!l.length)continue;const c=l[0].point;if(c.y<-.5)continue;const d=c.clone();d.y+=.8,t.set(d,i),t.near=0,t.far=5;const h=t.intersectObjects(e,!1);if(!(h.length>0&&h[0].distance<3))return{x:c.x,y:c.y+.5,z:c.z}}return{x:0,y:30,z:0}}_loop(){var i,r;if(!this._isRunning)return;requestAnimationFrame(()=>this._loop());const e=Math.min(this._clock.getDelta(),.05);this.input.update(),this.physics.tick(e),this.input.isFiring&&!this.character.isDead&&this._doShoot();const t=Math.hypot(this.input.moveForward,this.input.moveRight)>.05;this.weapon.update(e,{x:0,y:0},t,this.input.isSprinting),this.character.update(e,this.input,this.weapon,this.sceneManager),this.levels.update(e,this.character.position,this.character),this.sceneManager.updateCamera(this.character.position,this.character.yaw,this.character.pitch),(i=this.online)!=null&&i.connected&&(this._netTimer+=e,this._netTimer>=this._netInterval&&(this._netTimer=0,this.online.sendPlayerState(this.character.position,this.character.yaw,this.character.pitch,this.character.health,this.character.armor,this.character.isCrouching?"crouch":this.character.isSprinting?"sprint":"idle")));for(const o of this.remotePlayers.values())o.update(e);const n=this.weapon.isReloading?1-this.weapon.reloadTimer/this.weapon.reloadDuration:void 0;this.hud.update({ammo:this.weapon.currentAmmo,reserve:this.weapon.reserveAmmo,health:this.character.health,armor:this.character.armor,kills:this.kills,enemiesLeft:this.levels.getEnemiesAlive(),level:this.currentLevel,levelName:this.levels.currentLevelName,yaw:this.character.yaw,isADS:this.character.isADS,isSprinting:this.character.isSprinting,isCrouching:this.character.isCrouching,isReloading:this.weapon.isReloading,reloadProgress:n}),this.hud.updateMinimap(this.character.position,this.levels.getEnemies()),this.character.isDead&&!this._deathShown&&(this._deathShown=!0,(r=document.exitPointerLock)==null||r.call(document),this.input&&(this.input.isLocked=!1),this.hud.showDeathScreen(()=>{this._findSafeSpawn().then(o=>{this.character.respawn(o),this._deathShown=!1,this.input&&this.input.lock()})},()=>{location.reload()})),this.sceneManager.render()}_doShoot(){var o;if(!this.weapon.canShoot()){this.weapon.currentAmmo<=0&&!this.weapon.isReloading&&this.weapon.reload();return}const e=this.sceneManager.camera,t=new I;e.getWorldPosition(t);const n=e.matrixWorld.elements,i=new I(-n[8],-n[9],-n[10]).normalize(),r=this.physics.raycast(t,i,250,this.character.rootGroup?[this.character.rootGroup]:[]);this.weapon.shoot(t,i,r),(o=this.online)==null||o.sendShot(t,i,null,this.weapon.damage),r!=null&&r.object&&this._checkEnemyHit(r)}_checkEnemyHit(e){var t,n,i;for(const r of this.levels.getEnemies()){if(r.isDead)continue;let o=e.object,a=!1;for(;o;){if(o===r.group){a=!0;break}o=o.parent}if(!a)continue;const l=(e.object.name??"").toLowerCase().includes("head"),c=l?this.weapon.damage*2.5:this.weapon.damage,d=(t=r.takeDamage)==null?void 0:t.call(r,c,l?"headshot":"body",e.point);if(this.weapon.spawnDamageNumber(e.point,c,l),d||r.health!=null&&r.health<=0){this.kills++;const h=((n=r.config)==null?void 0:n.name)??"ENEMY";this.hud.addKillfeedEvent("YOU",h,"M4A1",l),this.hud.showEliminatedBanner(h,l),this.audio.playKill()}return}for(const[r,o]of this.remotePlayers){let a=e.object,l=!1;for(;a;){if(a===o.group){l=!0;break}a=a.parent}if(!l)continue;const c=(e.object.name??"").toLowerCase().includes("head"),d=c?this.weapon.damage*2.5:this.weapon.damage;this.weapon.spawnDamageNumber(e.point,d,c),(i=this.online)==null||i.sendHit(r,Math.round(d),c?"head":"torso");break}}_setupOnlineHandlers(){const e=this.sceneManager.scene,t=(n,i)=>{var r;if(!n||n===((r=this.online.socket)==null?void 0:r.id))return null;if(!this.remotePlayers.has(n)){const o=new Qx(e,n,i??"Operator");this.remotePlayers.set(n,o),this._toast(`🎮 ${i??"Operator"} joined the room`),this.hud.addKillfeedEvent("",(i??"Operator")+" joined","",!1)}return this.remotePlayers.get(n)};this.online.on("player_joined",n=>{const i=n.playerId??n.id,r=n.name??n.username??"Operator";t(i,r)}),this.online.on("player_left",n=>{const i=n.playerId??n.id,r=this.remotePlayers.get(i);r&&(r.destroy(),this.remotePlayers.delete(i))}),this.online.on("room_state",n=>{(n.players??[]).forEach(r=>{const o=r.playerId??r.id,a=r.name??r.username??"Operator";t(o,a);const l=this.remotePlayers.get(o);l&&l.applyState({x:r.x??0,y:r.posY??0,z:r.y??0,yaw:r.rotation??0})})}),this.online.on("players_transform_sync",n=>{var i;for(const r of n){const o=r.playerId??r.id;if(!o||o===((i=this.online.socket)==null?void 0:i.id))continue;const a=t(o,r.name??"Operator");a&&a.applyState({x:r.x??0,y:r.y??0,z:r.z??0,yaw:r.yaw??r.rotation??0,health:r.health??100,anim:r.anim??"idle"})}}),this.online.on("receive_damage",({amount:n,attackerName:i}={})=>{this.character.takeDamage(n??0),this._toast(`💥 Hit by ${i??"enemy"} for ${n} dmg`)}),this.online.on("player_killed",({killerName:n,victimName:i,hitZone:r}={})=>{var a,l;const o=((l=(a=this.session)==null?void 0:a.user)==null?void 0:l.username)??"";n===o?(this.kills++,this.hud.addKillfeedEvent("YOU",i??"Enemy","M4A1",r==="head"),this.hud.showEliminatedBanner(i??"Enemy",r==="head"),this.audio.playKill()):this.hud.addKillfeedEvent(n??"?",i??"?","M4A1",r==="head")}),this.online.on("scoreboard_sync",n=>{const i=(n??[]).map(r=>{var o,a;return{name:r.username??r.name??r.playerId??"?",kills:r.kills??0,deaths:r.deaths??0,ping:r.ping??null,isYou:(r.playerId??r.id)===((a=(o=this.online)==null?void 0:o.socket)==null?void 0:a.id)}});this.hud.updateLeaderboard(i)})}async _onAllEnemiesKilled(){this.audio.playLevelComplete();const e=this.currentLevel+1;if(e<=3)this.hud.showLevelComplete(e,3e3),setTimeout(async()=>{this.currentLevel=e,await this.levels.loadLevel(e,()=>this._onAllEnemiesKilled()),this.physics.invalidateCache();const t=await this._findSafeSpawn();this.character.respawn(t)},3e3);else{const t=document.createElement("div");t.style.cssText=`position:fixed;inset:0;display:flex;flex-direction:column;
        align-items:center;justify-content:center;background:rgba(0,0,0,0.92);
        z-index:9999;font-family:'Barlow Condensed',sans-serif;color:#fff;`,t.innerHTML=`
        <div style="font-size:4rem;letter-spacing:.3em;color:#00e5ff;text-shadow:0 0 40px #00e5ff">MISSION ACCOMPLISHED</div>
        <div style="font-size:1.4rem;margin-top:1rem;opacity:.6;letter-spacing:.2em">ALL LEVELS CLEARED</div>
        <div style="margin-top:1.5rem;font-size:2rem;color:#ffb703">KILLS: ${this.kills}</div>
        <button onclick="location.reload()" style="margin-top:2rem;padding:14px 44px;
          background:#00e5ff;border:none;color:#000;font-size:1rem;font-weight:800;
          letter-spacing:.2em;cursor:pointer;font-family:inherit;border-radius:2px;">↩ MAIN MENU</button>`,document.body.appendChild(t)}}_toast(e,t=3e3){const n=document.createElement("div");n.style.cssText=`position:fixed;top:80px;left:50%;transform:translateX(-50%);
      background:rgba(0,0,0,.85);border:1px solid rgba(255,183,3,.4);color:#ffb703;
      font-family:'Barlow Condensed',sans-serif;letter-spacing:.1em;font-size:.9rem;
      padding:10px 22px;z-index:9000;border-radius:2px;pointer-events:none;
      animation:fade-in .3s ease;`,n.textContent=e,document.body.appendChild(n),setTimeout(()=>n.remove(),t)}_showLoadScreen(e){let t=document.getElementById("load-screen");t||(t=document.createElement("div"),t.id="load-screen",t.style.cssText=`position:fixed;inset:0;
        background:linear-gradient(135deg,#020a14,#05101e);
        display:flex;flex-direction:column;align-items:center;justify-content:center;
        z-index:10000;font-family:'Barlow Condensed',sans-serif;color:#fff`,t.innerHTML=`
        <div style="font-size:4.5rem;font-weight:800;letter-spacing:.3em;color:#00e5ff;
                    text-shadow:0 0 60px rgba(0,229,255,.5);margin-bottom:6px">WARZONE</div>
        <div style="font-size:.8rem;letter-spacing:.35em;color:#6b8090;margin-bottom:32px">TACTICAL OPERATIONS</div>
        <div id="load-msg" style="font-size:1rem;letter-spacing:.12em;color:#a0b8c8;margin-bottom:16px">${e}</div>
        <div style="width:340px;height:2px;background:rgba(255,255,255,.08);border-radius:2px">
          <div id="load-bar" style="width:0;height:100%;background:#00e5ff;border-radius:2px;
               box-shadow:0 0 10px #00e5ff;transition:width .3s ease"></div>
        </div>`,document.body.appendChild(t));const n=document.getElementById("load-msg");n&&(n.textContent=e);let i=0;clearInterval(this._loadBarInt),this._loadBarInt=setInterval(()=>{i=Math.min(i+1.8,88);const r=document.getElementById("load-bar");r&&(r.style.width=i+"%")},55)}_hideLoadScreen(){clearInterval(this._loadBarInt);const e=document.getElementById("load-bar");e&&(e.style.width="100%"),setTimeout(()=>{const t=document.getElementById("load-screen");t&&(t.style.transition="opacity .5s",t.style.opacity="0",setTimeout(()=>t.remove(),550))},300)}}const Rd=document.createElement("style");Rd.textContent="@keyframes fade-in { from { opacity:0; } to { opacity:1; } }";document.head.appendChild(Rd);new ey().start().catch(s=>{console.error("[Warzone] Fatal:",s);const e=document.getElementById("load-msg");e&&(e.textContent="⚠ Error: "+s.message)});
