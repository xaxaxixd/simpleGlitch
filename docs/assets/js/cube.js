!function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=37)}([function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var i=n(28)("wks"),r=n(29),o=n(0).Symbol,a="function"==typeof o;(t.exports=function(t){return i[t]||(i[t]=a&&o[t]||(a?o:r)("Symbol."+t))}).store=i},function(t,e){var n=t.exports={version:"2.5.4"};"number"==typeof __e&&(__e=n)},function(t,e,n){var i=n(8);t.exports=function(t){if(!i(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var i=n(7),r=n(24);t.exports=n(5)?function(t,e,n){return i.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){t.exports=!n(23)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){var i=n(0),r=n(2),o=n(10),a=n(4),s=n(12),u=function(t,e,n){var c,l,f,h=t&u.F,v=t&u.G,p=t&u.S,d=t&u.P,m=t&u.B,x=t&u.W,y=v?r:r[e]||(r[e]={}),g=y.prototype,w=v?i:p?i[e]:(i[e]||{}).prototype;v&&(n=e);for(c in n)(l=!h&&w&&void 0!==w[c])&&s(y,c)||(f=l?w[c]:n[c],y[c]=v&&"function"!=typeof w[c]?n[c]:m&&l?o(f,i):x&&w[c]==f?function(t){var e=function(e,n,i){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,i)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(f):d&&"function"==typeof f?o(Function.call,f):f,d&&((y.virtual||(y.virtual={}))[c]=f,t&u.R&&g&&!g[c]&&a(g,c,f)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},function(t,e,n){var i=n(3),r=n(43),o=n(44),a=Object.defineProperty;e.f=n(5)?Object.defineProperty:function(t,e,n){if(i(t),e=o(e,!0),i(n),r)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports={}},function(t,e,n){var i=n(11);t.exports=function(t,e,n){if(i(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,i){return t.call(e,n,i)};case 3:return function(n,i,r){return t.call(e,n,i,r)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var i=n(8),r=n(0).document,o=i(r)&&i(r.createElement);t.exports=function(t){return o?r.createElement(t):{}}},function(t,e){var n=Math.ceil,i=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?i:n)(t)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var i=n(57),r=n(16);t.exports=function(t){return i(r(t))}},function(t,e,n){var i=n(28)("keys"),r=n(29);t.exports=function(t){return i[t]||(i[t]=r(t))}},function(t,e,n){var i=n(7).f,r=n(12),o=n(1)("toStringTag");t.exports=function(t,e,n){t&&!r(t=n?t:t.prototype,o)&&i(t,o,{configurable:!0,value:e})}},function(t,e,n){"use strict";function i(t){var e,n;this.promise=new t(function(t,i){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=i}),this.resolve=r(e),this.reject=r(n)}var r=n(11);t.exports.f=function(t){return new i(t)}},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";e.__esModule=!0;var i=n(40),r=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),(0,r.default)(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}()},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){"use strict";var i=n(26),r=n(6),o=n(51),a=n(4),s=n(9),u=n(52),c=n(19),l=n(60),f=n(1)("iterator"),h=!([].keys&&"next"in[].keys()),v=function(){return this};t.exports=function(t,e,n,p,d,m,x){u(n,e,p);var y,g,w,_=function(t){if(!h&&t in M)return M[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},b=e+" Iterator",T="values"==d,E=!1,M=t.prototype,k=M[f]||M["@@iterator"]||d&&M[d],P=k||_(d),R=d?T?_("entries"):P:void 0,S="Array"==e?M.entries||k:k;if(S&&(w=l(S.call(new t)))!==Object.prototype&&w.next&&(c(w,b,!0),i||"function"==typeof w[f]||a(w,f,v)),T&&k&&"values"!==k.name&&(E=!0,P=function(){return k.call(this)}),i&&!x||!h&&!E&&M[f]||a(M,f,P),s[e]=P,s[b]=v,d)if(y={values:T?P:_("values"),keys:m?P:_("keys"),entries:R},x)for(g in y)g in M||o(M,g,y[g]);else r(r.P+r.F*(h||E),e,y);return y}},function(t,e){t.exports=!0},function(t,e,n){var i=n(15),r=Math.min;t.exports=function(t){return t>0?r(i(t),9007199254740991):0}},function(t,e,n){var i=n(0),r=i["__core-js_shared__"]||(i["__core-js_shared__"]={});t.exports=function(t){return r[t]||(r[t]={})}},function(t,e){var n=0,i=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+i).toString(36))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var i=n(0).document;t.exports=i&&i.documentElement},function(t,e,n){var i=n(13),r=n(1)("toStringTag"),o="Arguments"==i(function(){return arguments}()),a=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=a(e=Object(t),r))?n:o?i(e):"Object"==(s=i(e))&&"function"==typeof e.callee?"Arguments":s}},function(t,e,n){var i=n(3),r=n(11),o=n(1)("species");t.exports=function(t,e){var n,a=i(t).constructor;return void 0===a||void 0==(n=i(a)[o])?e:r(n)}},function(t,e,n){var i,r,o,a=n(10),s=n(72),u=n(31),c=n(14),l=n(0),f=l.process,h=l.setImmediate,v=l.clearImmediate,p=l.MessageChannel,d=l.Dispatch,m=0,x={},y=function(){var t=+this;if(x.hasOwnProperty(t)){var e=x[t];delete x[t],e()}},g=function(t){y.call(t.data)};h&&v||(h=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return x[++m]=function(){s("function"==typeof t?t:Function(t),e)},i(m),m},v=function(t){delete x[t]},"process"==n(13)(f)?i=function(t){f.nextTick(a(y,t,1))}:d&&d.now?i=function(t){d.now(a(y,t,1))}:p?(r=new p,o=r.port2,r.port1.onmessage=g,i=a(o.postMessage,o,1)):l.addEventListener&&"function"==typeof postMessage&&!l.importScripts?(i=function(t){l.postMessage(t+"","*")},l.addEventListener("message",g,!1)):i="onreadystatechange"in c("script")?function(t){u.appendChild(c("script")).onreadystatechange=function(){u.removeChild(this),y.call(t)}}:function(t){setTimeout(a(y,t,1),0)}),t.exports={set:h,clear:v}},function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,e,n){var i=n(3),r=n(8),o=n(20);t.exports=function(t,e){if(i(t),r(e)&&e.constructor===t)return e;var n=o.f(t);return(0,n.resolve)(e),n.promise}},function(t,e,n){t.exports=n(38)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,r=n(39),o=n(82);i="sample",window[i]=window[i]||{},window.log=o.a,document.addEventListener("DOMContentLoaded",function(t){return new r.a})},function(t,e,n){"use strict";var i=n(21),r=n.n(i),o=n(22),a=n.n(o),s=n(45);window.glitch=window.glitch||{},e.a=function(){function t(){var e=this;r()(this,t),this.mousemove=this.mousemove.bind(this),this.resize=this.resize.bind(this),this.update=this.update.bind(this),this.initWebGL(),this.cube.init().then(function(){return e.animationId=null,e.startTime=(new Date).getTime(),e.cube.start(),e.update()})}return a()(t,[{key:"initWebGL",value:function(){return this.container=document.querySelector(".js-mainCanvas"),this.renderer=new THREE.WebGLRenderer({canvas:this.container.querySelector("canvas"),alpha:!0}),this.devicePixelRatio=window.devicePixelRatio||1,this.devicePixelRatio=Math.min(2,this.devicePixelRatio),window.glitch.devicePixelRatio=this.devicePixelRatio,this.renderer.setPixelRatio(this.devicePixelRatio),this.scene=new THREE.Scene,this.width=this.container.offsetWidth,this.height=this.container.offsetHeight,this.camera=new THREE.PerspectiveCamera(45,this.width/this.height,1,1e3),this.camera.position.z=100,this.cube=new s.a([{imgPath:"../img/img1.png"},{imgPath:"../img/img2.png"}],40,40,40),this.scene.add(this.cube.mesh),this.raycaster=new THREE.Raycaster,this.mouse={x:0,y:0},window.addEventListener("resize",this.resize),window.addEventListener("mousemove",this.mousemove),this.resize()}},{key:"mousemove",value:function(t){var e,n,i;if(n=t.clientX,i=t.clientY,this.mouse.x=n/this.width*2-1,this.mouse.y=-i/this.height*2+1,this.raycaster.setFromCamera(this.mouse,this.camera),e=this.raycaster.intersectObjects([this.cube.mesh]),e.length>0){if(!this.isHovered)return this.isHovered=!0,this.cube.doGlitch()}else if(this.isHovered)return this.isHovered=!1}},{key:"resize",value:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this.width=this.container.offsetWidth,this.height=this.container.offsetHeight,this.renderer.setSize(this.width,this.height),this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix()}},{key:"update",value:function(){var t;return this.animationId=requestAnimationFrame(this.update),t=(new Date).getTime()-this.startTime,this.cube.update(t),this.renderer.render(this.scene,this.camera)}}]),t}()},function(t,e,n){t.exports={default:n(41),__esModule:!0}},function(t,e,n){n(42);var i=n(2).Object;t.exports=function(t,e,n){return i.defineProperty(t,e,n)}},function(t,e,n){var i=n(6);i(i.S+i.F*!n(5),"Object",{defineProperty:n(7).f})},function(t,e,n){t.exports=!n(5)&&!n(23)(function(){return 7!=Object.defineProperty(n(14)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var i=n(8);t.exports=function(t,e){if(!i(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!i(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){"use strict";var i=n(46),r=n.n(i),o=n(21),a=n.n(o),s=n(22),u=n.n(s),c=n(79);window.glitch=window.glitch||{},e.a=function(){var t,e=function(){function e(i){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10;a()(this,e);var u;this.data=i,this.width=r,this.height=o,this.depth=s,this.textures=[],this.textureIndex=0,this.numTextures=this.data.length,this.numTotalImgs=0,this.numLoadedImgs=0,this.animationValueIndex=0,this.blockNoiseCanvas=document.createElement("canvas"),this.blockNoiseCanvas.width=t,this.blockNoiseCanvas.height=t,this.blockNoiseCtx=this.blockNoiseCanvas.getContext("2d"),this.blockNoiseTexture=new THREE.Texture(this.blockNoiseCanvas),this.blockNoiseTexture.minFilter=THREE.NearestFilter,this.blockNoiseTexture.magFilter=THREE.NearestFilter,this.blockNoiseTexture.wrapS=THREE.MirroredRepeatWrapping,this.blockNoiseTexture.wrapT=THREE.MirroredRepeatWrapping,this.blockNoiseCanvas.style.zIndex=1e3,this.blockNoiseCanvas.style.position="fixed",this.blockNoiseCanvas.style.top="0px",this.blockNoiseCanvas.style.left="0px",u=new THREE.BoxGeometry(this.width,this.height,this.depth),this.material=new THREE.RawShaderMaterial({vertexShader:n(80),fragmentShader:n(81),depthTest:!1,depthWrite:!1,transparent:!0,side:THREE.DoubleSide,blending:THREE.AdditiveBlending,uniforms:{time:{type:"1f",value:0},timeOffset:{type:"1f",value:1e3*Math.random()},img1:{type:"t",value:null},img2:{type:"t",value:null},resolution:{type:"2f",value:new THREE.Vector2(this.width,this.height)},blockNoiseTexture:{type:"t",value:this.blockNoiseTexture},randomValues:{type:"3f",value:new THREE.Vector3},glitchValue:{type:"1f",value:0},imgRatio:{type:"1f",value:0},animationValue1:{type:"1f",value:0},animationValue2:{type:"1f",value:0}}}),this.mesh=new THREE.Mesh(u,this.material),this.swapTexturesTimeline=null,this.glitchTimer=null}return u()(e,[{key:"doGlitch",value:function(){return this.clearGlitchTimer(),this.swapTextures()}},{key:"cancelGlitch",value:function(){var t;return null!=(t=this.swapTexturesTimeline)&&t.kill(),this.material.uniforms.glitchValue.value=0,this.material.uniforms.imgRatio.value=0,this.setGlichTimer()}},{key:"updateBlockNoise",value:function(){var e,n,i,r,o,a,s,u;for(this.blockNoiseCtx.clearRect(0,0,t,t),r=0,s=4+Math.floor(4*Math.random());0<=s?r<s:r>s;0<=s?++r:--r)e=Math.random(),n=Math.random(),o=Math.random()*t,a=Math.random()*t,u=(.1+.1*Math.random())*t,i=(.04+.04*Math.random())*t,this.blockNoiseCtx.fillStyle="rgba("+Math.floor(256*e)+", "+Math.floor(256*n)+", 0, 1)",this.blockNoiseCtx.fillRect(o-u/2,a-i/2,u,i);this.blockNoiseTexture.needsUpdate=!0,this.material.needsUpdate=!0}},{key:"swapTextures",value:function(){var t,e,n=this;null!=(e=this.swapTexturesTimeline)&&e.kill(),this.material.uniforms.glitchValue.value=1,t="animationValue"+(this.animationValueIndex++%2+1).toString(),this.swapTexturesTimeline=(new TimelineMax).to(this.material.uniforms.imgRatio,.2,{value:1,ease:Expo.easeInOut},.2).to(this.material.uniforms[t],.4,{value:1,ease:Expo.easeOut},0).add(function(){return n.updateBlockNoise()},.05).add(function(){return n.updateBlockNoise()},.1).add(function(){return n.updateBlockNoise()},.15).add(function(){return n.updateBlockNoise()},.2).add(function(){return n.updateBlockNoise()},.25).add(function(){return n.updateBlockNoise()},.3).add(function(){return n.updateBlockNoise()},.35).add(function(){return n.material.uniforms.glitchValue.value=0,n.material.uniforms.imgRatio.value=0,n.setImgs(),n.setGlichTimer()},.4).to(this.material.uniforms[t],.4,{value:0,ease:Expo.easeInOut},.3)}},{key:"setGlichTimer",value:function(){var t=this;return this.clearGlitchTimer(),this.glitchTimer=setTimeout(function(){return t.swapTextures()},5e3)}},{key:"clearGlitchTimer",value:function(){null!=this.glitchTimer&&clearTimeout(this.glitchTimer),this.glitchTimer=null}},{key:"init",value:function(){var t,e,n,i,o,a=this;for(i=[],o=this.data,e=0,n=o.length;e<n;e++)t=o[e],i.push(this.loadTexture(t.imgPath));return r.a.all(i).then(function(){return a.setImgs(),!0})}},{key:"setImgs",value:function(){this.material.uniforms.img1.value=this.textures[this.textureIndex],this.textureIndex=++this.textureIndex%this.numTextures,this.material.uniforms.img2.value=this.textures[this.textureIndex],this.material.needsUpdate=!0}},{key:"loadTexture",value:function(t){var e,n=this;return this.numTotalImgs++,e=new THREE.TextureLoader,new r.a(function(i){var r;return r=e.load(t,function(){return n.numLoadedImgs++,i()}),r.wrapS=THREE.RepeatWrapping,r.wrapT=THREE.RepeatWrapping,r.minFilter=THREE.LinearFilter,r.magFilter=THREE.LinearFilter,r.wrapS=THREE.MirroredRepeatWrapping,r.wrapT=THREE.MirroredRepeatWrapping,n.textures.push(r)})}},{key:"update",value:function(t){this.mesh.rotation.x+=.006,this.mesh.rotation.y+=.01,this.mesh.rotation.z+=.004,this.material.uniforms.time.value=t,this.material.uniforms.randomValues.value.set(Object(c.a)(Math.random(),0,1,-1,1),Object(c.a)(Math.random(),0,1,-1,1),Object(c.a)(Math.random(),0,1,-1,1)),this.material.needsUpdate=!0}},{key:"start",value:function(){this.setGlichTimer()}},{key:"pause",value:function(){this.clearGlitchTimer()}}]),e}();return t=256,e}.call(this)},function(t,e,n){t.exports={default:n(47),__esModule:!0}},function(t,e,n){n(48),n(49),n(62),n(66),n(77),n(78),t.exports=n(2).Promise},function(t,e){},function(t,e,n){"use strict";var i=n(50)(!0);n(25)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=i(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){var i=n(15),r=n(16);t.exports=function(t){return function(e,n){var o,a,s=String(r(e)),u=i(n),c=s.length;return u<0||u>=c?t?"":void 0:(o=s.charCodeAt(u),o<55296||o>56319||u+1===c||(a=s.charCodeAt(u+1))<56320||a>57343?t?s.charAt(u):o:t?s.slice(u,u+2):a-56320+(o-55296<<10)+65536)}}},function(t,e,n){t.exports=n(4)},function(t,e,n){"use strict";var i=n(53),r=n(24),o=n(19),a={};n(4)(a,n(1)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=i(a,{next:r(1,n)}),o(t,e+" Iterator")}},function(t,e,n){var i=n(3),r=n(54),o=n(30),a=n(18)("IE_PROTO"),s=function(){},u=function(){var t,e=n(14)("iframe"),i=o.length;for(e.style.display="none",n(31).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),u=t.F;i--;)delete u.prototype[o[i]];return u()};t.exports=Object.create||function(t,e){var n;return null!==t?(s.prototype=i(t),n=new s,s.prototype=null,n[a]=t):n=u(),void 0===e?n:r(n,e)}},function(t,e,n){var i=n(7),r=n(3),o=n(55);t.exports=n(5)?Object.defineProperties:function(t,e){r(t);for(var n,a=o(e),s=a.length,u=0;s>u;)i.f(t,n=a[u++],e[n]);return t}},function(t,e,n){var i=n(56),r=n(30);t.exports=Object.keys||function(t){return i(t,r)}},function(t,e,n){var i=n(12),r=n(17),o=n(58)(!1),a=n(18)("IE_PROTO");t.exports=function(t,e){var n,s=r(t),u=0,c=[];for(n in s)n!=a&&i(s,n)&&c.push(n);for(;e.length>u;)i(s,n=e[u++])&&(~o(c,n)||c.push(n));return c}},function(t,e,n){var i=n(13);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==i(t)?t.split(""):Object(t)}},function(t,e,n){var i=n(17),r=n(27),o=n(59);t.exports=function(t){return function(e,n,a){var s,u=i(e),c=r(u.length),l=o(a,c);if(t&&n!=n){for(;c>l;)if((s=u[l++])!=s)return!0}else for(;c>l;l++)if((t||l in u)&&u[l]===n)return t||l||0;return!t&&-1}}},function(t,e,n){var i=n(15),r=Math.max,o=Math.min;t.exports=function(t,e){return t=i(t),t<0?r(t+e,0):o(t,e)}},function(t,e,n){var i=n(12),r=n(61),o=n(18)("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=r(t),i(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,e,n){var i=n(16);t.exports=function(t){return Object(i(t))}},function(t,e,n){n(63);for(var i=n(0),r=n(4),o=n(9),a=n(1)("toStringTag"),s="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),u=0;u<s.length;u++){var c=s[u],l=i[c],f=l&&l.prototype;f&&!f[a]&&r(f,a,c),o[c]=o.Array}},function(t,e,n){"use strict";var i=n(64),r=n(65),o=n(9),a=n(17);t.exports=n(25)(Array,"Array",function(t,e){this._t=a(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,r(1)):"keys"==e?r(0,n):"values"==e?r(0,t[n]):r(0,[n,t[n]])},"values"),o.Arguments=o.Array,i("keys"),i("values"),i("entries")},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){"use strict";var i,r,o,a,s=n(26),u=n(0),c=n(10),l=n(32),f=n(6),h=n(8),v=n(11),p=n(67),d=n(68),m=n(33),x=n(34).set,y=n(73)(),g=n(20),w=n(35),_=n(36),b=u.TypeError,T=u.process,E=u.Promise,M="process"==l(T),k=function(){},P=r=g.f,R=!!function(){try{var t=E.resolve(1),e=(t.constructor={})[n(1)("species")]=function(t){t(k,k)};return(M||"function"==typeof PromiseRejectionEvent)&&t.then(k)instanceof e}catch(t){}}(),S=function(t){var e;return!(!h(t)||"function"!=typeof(e=t.then))&&e},O=function(t,e){if(!t._n){t._n=!0;var n=t._c;y(function(){for(var i=t._v,r=1==t._s,o=0;n.length>o;)!function(e){var n,o,a,s=r?e.ok:e.fail,u=e.resolve,c=e.reject,l=e.domain;try{s?(r||(2==t._h&&C(t),t._h=1),!0===s?n=i:(l&&l.enter(),n=s(i),l&&(l.exit(),a=!0)),n===e.promise?c(b("Promise-chain cycle")):(o=S(n))?o.call(n,u,c):u(n)):c(i)}catch(t){l&&!a&&l.exit(),c(t)}}(n[o++]);t._c=[],t._n=!1,e&&!t._h&&j(t)})}},j=function(t){x.call(u,function(){var e,n,i,r=t._v,o=L(t);if(o&&(e=w(function(){M?T.emit("unhandledRejection",r,t):(n=u.onunhandledrejection)?n({promise:t,reason:r}):(i=u.console)&&i.error&&i.error("Unhandled promise rejection",r)}),t._h=M||L(t)?2:1),t._a=void 0,o&&e.e)throw e.v})},L=function(t){return 1!==t._h&&0===(t._a||t._c).length},C=function(t){x.call(u,function(){var e;M?T.emit("rejectionHandled",t):(e=u.onrejectionhandled)&&e({promise:t,reason:t._v})})},N=function(t){var e=this;e._d||(e._d=!0,e=e._w||e,e._v=t,e._s=2,e._a||(e._a=e._c.slice()),O(e,!0))},I=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw b("Promise can't be resolved itself");(e=S(t))?y(function(){var i={_w:n,_d:!1};try{e.call(t,c(I,i,1),c(N,i,1))}catch(t){N.call(i,t)}}):(n._v=t,n._s=1,O(n,!1))}catch(t){N.call({_w:n,_d:!1},t)}}};R||(E=function(t){p(this,E,"Promise","_h"),v(t),i.call(this);try{t(c(I,this,1),c(N,this,1))}catch(t){N.call(this,t)}},i=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},i.prototype=n(74)(E.prototype,{then:function(t,e){var n=P(m(this,E));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=M?T.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&O(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new i;this.promise=t,this.resolve=c(I,t,1),this.reject=c(N,t,1)},g.f=P=function(t){return t===E||t===a?new o(t):r(t)}),f(f.G+f.W+f.F*!R,{Promise:E}),n(19)(E,"Promise"),n(75)("Promise"),a=n(2).Promise,f(f.S+f.F*!R,"Promise",{reject:function(t){var e=P(this);return(0,e.reject)(t),e.promise}}),f(f.S+f.F*(s||!R),"Promise",{resolve:function(t){return _(s&&this===a?E:this,t)}}),f(f.S+f.F*!(R&&n(76)(function(t){E.all(t).catch(k)})),"Promise",{all:function(t){var e=this,n=P(e),i=n.resolve,r=n.reject,o=w(function(){var n=[],o=0,a=1;d(t,!1,function(t){var s=o++,u=!1;n.push(void 0),a++,e.resolve(t).then(function(t){u||(u=!0,n[s]=t,--a||i(n))},r)}),--a||i(n)});return o.e&&r(o.v),n.promise},race:function(t){var e=this,n=P(e),i=n.reject,r=w(function(){d(t,!1,function(t){e.resolve(t).then(n.resolve,i)})});return r.e&&i(r.v),n.promise}})},function(t,e){t.exports=function(t,e,n,i){if(!(t instanceof e)||void 0!==i&&i in t)throw TypeError(n+": incorrect invocation!");return t}},function(t,e,n){var i=n(10),r=n(69),o=n(70),a=n(3),s=n(27),u=n(71),c={},l={},e=t.exports=function(t,e,n,f,h){var v,p,d,m,x=h?function(){return t}:u(t),y=i(n,f,e?2:1),g=0;if("function"!=typeof x)throw TypeError(t+" is not iterable!");if(o(x)){for(v=s(t.length);v>g;g++)if((m=e?y(a(p=t[g])[0],p[1]):y(t[g]))===c||m===l)return m}else for(d=x.call(t);!(p=d.next()).done;)if((m=r(d,y,p.value,e))===c||m===l)return m};e.BREAK=c,e.RETURN=l},function(t,e,n){var i=n(3);t.exports=function(t,e,n,r){try{return r?e(i(n)[0],n[1]):e(n)}catch(e){var o=t.return;throw void 0!==o&&i(o.call(t)),e}}},function(t,e,n){var i=n(9),r=n(1)("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||o[r]===t)}},function(t,e,n){var i=n(32),r=n(1)("iterator"),o=n(9);t.exports=n(2).getIteratorMethod=function(t){if(void 0!=t)return t[r]||t["@@iterator"]||o[i(t)]}},function(t,e){t.exports=function(t,e,n){var i=void 0===n;switch(e.length){case 0:return i?t():t.call(n);case 1:return i?t(e[0]):t.call(n,e[0]);case 2:return i?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return i?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return i?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},function(t,e,n){var i=n(0),r=n(34).set,o=i.MutationObserver||i.WebKitMutationObserver,a=i.process,s=i.Promise,u="process"==n(13)(a);t.exports=function(){var t,e,n,c=function(){var i,r;for(u&&(i=a.domain)&&i.exit();t;){r=t.fn,t=t.next;try{r()}catch(i){throw t?n():e=void 0,i}}e=void 0,i&&i.enter()};if(u)n=function(){a.nextTick(c)};else if(!o||i.navigator&&i.navigator.standalone)if(s&&s.resolve){var l=s.resolve();n=function(){l.then(c)}}else n=function(){r.call(i,c)};else{var f=!0,h=document.createTextNode("");new o(c).observe(h,{characterData:!0}),n=function(){h.data=f=!f}}return function(i){var r={fn:i,next:void 0};e&&(e.next=r),t||(t=r,n()),e=r}}},function(t,e,n){var i=n(4);t.exports=function(t,e,n){for(var r in e)n&&t[r]?t[r]=e[r]:i(t,r,e[r]);return t}},function(t,e,n){"use strict";var i=n(0),r=n(2),o=n(7),a=n(5),s=n(1)("species");t.exports=function(t){var e="function"==typeof r[t]?r[t]:i[t];a&&e&&!e[s]&&o.f(e,s,{configurable:!0,get:function(){return this}})}},function(t,e,n){var i=n(1)("iterator"),r=!1;try{var o=[7][i]();o.return=function(){r=!0},Array.from(o,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!r)return!1;var n=!1;try{var o=[7],a=o[i]();a.next=function(){return{done:n=!0}},o[i]=function(){return a},t(o)}catch(t){}return n}},function(t,e,n){"use strict";var i=n(6),r=n(2),o=n(0),a=n(33),s=n(36);i(i.P+i.R,"Promise",{finally:function(t){var e=a(this,r.Promise||o.Promise),n="function"==typeof t;return this.then(n?function(n){return s(e,t()).then(function(){return n})}:t,n?function(n){return s(e,t()).then(function(){throw n})}:t)}})},function(t,e,n){"use strict";var i=n(6),r=n(20),o=n(35);i(i.S,"Promise",{try:function(t){var e=r.f(this),n=o(t);return(n.e?e.reject:e.resolve)(n.v),e.promise}})},function(t,e,n){"use strict";e.a=function(t,e,n,i,r){var o,a=!(arguments.length>5&&void 0!==arguments[5])||arguments[5];if(!0===a){if(t<e)return i;if(t>n)return r}return o=(r-i)/(n-e),(t-e)*o+i}},function(t,e){t.exports="#define GLSLIFY 1\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float animationValue1;\nuniform float animationValue2;\n\nattribute vec3 position;\nattribute vec2 uv;\n\nvarying vec2 vUv;\n\nvoid main() {\n  vec3 pos = position;\n  pos.x *= (1.0 + 1.0 * animationValue1);\n  pos.y *= (1.0 - 0.5 * animationValue1);\n  pos.z *= (1.0 - 0.5 * animationValue1);\n\n  vUv = uv;\n  vUv *= (1.0 + 1.0 * animationValue2);\n\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n}\n"},function(t,e){t.exports="#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#else\nprecision mediump float;\n#define GLSLIFY 1\n#endif\n\nuniform sampler2D img1;\nuniform sampler2D img2;\nuniform sampler2D blockNoiseTexture;\nuniform float time;\nuniform float timeOffset;\nuniform float glitchValue;\nuniform float imgRatio;\nuniform vec2 resolution;\nuniform vec3 randomValues;\n\nvarying vec2 vUv;\n\nconst float PI_1_0 = 3.1415926535897932384626433832795;\n\n\nfloat map_2_1(float value, float inputMin, float inputMax, float outputMin, float outputMax, bool clamp) {\n  if(clamp == true) {\n    if(value < inputMin) return outputMin;\n    if(value > inputMax) return outputMax;\n  }\n\n  float p = (outputMax - outputMin) / (inputMax - inputMin);\n  return ((value - inputMin) * p) + outputMin;\n}\n\n\nvec3 hsv2rgb_3_2(vec3 c) {\n  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\n  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\n  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n}\n\n\n//\n// Description : Array and textureless GLSL 2D simplex noise function.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289_4_3(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec2 mod289_4_3(vec2 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec3 permute_4_4(vec3 x) {\n  return mod289_4_3(((x*34.0)+1.0)*x);\n}\n\nfloat snoise_4_5(vec2 v)\n  {\n  const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0\n                      0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)\n                     -0.577350269189626,  // -1.0 + 2.0 * C.x\n                      0.024390243902439); // 1.0 / 41.0\n// First corner\n  vec2 i  = floor(v + dot(v, C.yy) );\n  vec2 x0 = v -   i + dot(i, C.xx);\n\n// Other corners\n  vec2 i1;\n  //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0\n  //i1.y = 1.0 - i1.x;\n  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n  // x0 = x0 - 0.0 + 0.0 * C.xx ;\n  // x1 = x0 - i1 + 1.0 * C.xx ;\n  // x2 = x0 - 1.0 + 2.0 * C.xx ;\n  vec4 x12 = x0.xyxy + C.xxzz;\n  x12.xy -= i1;\n\n// Permutations\n  i = mod289_4_3(i); // Avoid truncation effects in permutation\n  vec3 p = permute_4_4( permute_4_4( i.y + vec3(0.0, i1.y, 1.0 ))\n    + i.x + vec3(0.0, i1.x, 1.0 ));\n\n  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);\n  m = m*m ;\n  m = m*m ;\n\n// Gradients: 41 points uniformly over a line, mapped onto a diamond.\n// The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)\n\n  vec3 x = 2.0 * fract(p * C.www) - 1.0;\n  vec3 h = abs(x) - 0.5;\n  vec3 ox = floor(x + 0.5);\n  vec3 a0 = x - ox;\n\n// Normalise gradients implicitly by scaling m\n// Approximation of: m *= inversesqrt( a0*a0 + h*h );\n  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );\n\n// Compute final noise value at P\n  vec3 g;\n  g.x  = a0.x  * x0.x  + h.x  * x0.y;\n  g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n  return 130.0 * dot(m, g);\n}\n\n\n\n\nconst int   oct  = 8;\nconst float per  = 0.5;\nconst float cCorners = 1.0 / 16.0;\nconst float cSides   = 1.0 / 8.0;\nconst float cCenter  = 1.0 / 4.0;\n\n// 補間関数\nfloat interpolate(float a, float b, float x){\n    float f = (1.0 - cos(x * PI_1_0)) * 0.5;\n    return a * (1.0 - f) + b * f;\n}\n\n// 乱数生成\nfloat rnd(vec2 p){\n    return fract(sin(dot(p ,vec2(12.9898,78.233))) * 43758.5453);\n}\n\n// 補間乱数\nfloat irnd(vec2 p){\n    vec2 i = floor(p);\n    vec2 f = fract(p);\n    vec4 v = vec4(rnd(vec2(i.x,       i.y      )),\n                  rnd(vec2(i.x + 1.0, i.y      )),\n                  rnd(vec2(i.x,       i.y + 1.0)),\n                  rnd(vec2(i.x + 1.0, i.y + 1.0)));\n    return interpolate(interpolate(v.x, v.y, f.x), interpolate(v.z, v.w, f.x), f.y);\n}\n\n// ノイズ生成\nfloat noise(vec2 p){\n    float t = 0.0;\n    for(int i = 0; i < oct; i++){\n        float freq = pow(2.0, float(i));\n        float amp  = pow(per, float(oct - i));\n        t += irnd(vec2(p.x / freq, p.y / freq)) * amp;\n    }\n    return t;\n}\n\nvoid main(){\n  vec2 uv = vUv;\n  float t = time;\n\n  float posY = floor(mod(-t * 0.02, resolution.y));\n  float subY = posY - uv.t * resolution.y;\n  if(subY > -0.45 && subY < 0.45) {\n    uv.x += 0.004 * randomValues.x;\n  }\n\n  posY = floor(mod(-t * 0.03, resolution.y));\n  subY = posY - uv.t * resolution.y;\n  if(subY > -0.25 && subY < 0.25) {\n    uv.x += 0.002 * randomValues.z;\n  }\n\n  float r = mod(t, 10.0) * 1000.0 * uv.y;\n  uv.x += map_2_1(noise(vec2(randomValues.y * r, randomValues.x * r)), 0.0, 1.0, -1.0, 1.0, true) * 0.1 * glitchValue;\n  uv.y += map_2_1(noise(vec2(randomValues.x * r, randomValues.z * r)), 0.0, 1.0, -1.0, 1.0, true) * 0.01 * glitchValue;\n  vec4 blockNoise = texture2D(blockNoiseTexture, vUv);\n  uv.x += blockNoise.r * glitchValue * 0.3;\n  uv.y += blockNoise.g * glitchValue * 0.3;\n\n  vec4 color1 = texture2D(img1, uv);\n  vec4 color2 = texture2D(img2, uv);\n  vec4 color = mix(color1, color2, imgRatio);\n  if(color.a == 0.0) {\n    discard;\n  } else {\n    gl_FragColor = vec4(hsv2rgb_3_2(vec3(\n      map_2_1(snoise_4_5(vec2(\n        uv.x * 0.3 + time * 0.0001,\n        uv.y * 3.0 + time * 0.0001\n      )), -1.0, 1.0, 0.2 + time * 0.0001, 0.4 + time * 0.0001, true),\n      0.8,\n      1.0\n    )), 0.8);\n  }\n}\n"},function(t,e,n){"use strict";e.a=function(){return null!=window.console?null!=window.console.log.bind?window.console.log.bind(window.console):window.console.log:window.alert}()}]);
