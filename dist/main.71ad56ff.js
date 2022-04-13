// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var string = "\n/* \u6211\u4EEC\u5148\u753B\u76AE\u5361\u4E18\u7684\u9F3B\u5B50 */\n.nose {\n  position: relative;\n  top: 145px;\n  width: 0px;\n  height: 0px;\n  border: 10px solid black;\n  border-color: black transparent transparent;\n  border-bottom: none;\n}\n.yuan {\n  position: absolute;\n  top: -16px;\n  right: -10px;\n  width: 20px;\n  height: 6px;\n  border-radius: 10px 10px 0 0;\n  background-color: black;\n}\n.nose {\n  margin-left: -10px;\n  left: 50%;\n}\n/* \u7136\u540E\u662F\u76AE\u5361\u4E18\u7684\u773C\u775B */\n#eyes {\n  position: absolute;\n  top: 100px;\n  height: 64px;\n  width: 64px;\n  border-radius: 50%;\n  background-color: #2e2e2e;\n  border-color: #000;\n}\n/* \u76AE\u5361\u4E18\u7684\u773C\u73E0\u662F\u767D\u8272\u7684 */\n#eye_ball {\n  position: absolute;\n  content: '';\n  display: block;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  border: 3px solid #000;\n  background-color: #fff;\n}\n\n.left.eye {\n  margin-left: -32px;\n  left: 50%;\n  transform: translateX(-100px);\n}\n\n.right.eye {\n  margin-left: -32px;\n  left: 50%;\n  transform: translateX(100px);\n}\n\n/* \u8BE5\u753B\u76AE\u5361\u4E18\u7684\u816E\u5E2E\u5B50\u4E86 */\n.face {\n  position: absolute;\n  top: 200px;\n  width: 88px;\n  height: 88px;\n  border-radius: 50%;\n  border: 3px solid black;\n  background-color: #ff0000;\n}\n.face {\n  left: 50%;\n  margin-left: -44px;\n}\n.face.left {\n  transform: translateX(-200px);\n}\n.face.right {\n  transform: translateX(200px);\n}\n\n/* \u63A5\u7740\u753B\u76AE\u5361\u4E18\u7684\u5C0F\u5634\u5DF4 */\n.mouth {\n  position: absolute;\n  top: 170px;\n  width: 200px;\n  height: 200px;\n  left: 50%;\n  margin-left: -100px;\n}\n/* \u5148\u662F\u4E0A\u5634\u5507 */\n.mouth .up .lip.left {\n  transform: translateX(-53px);\n}\n.mouth .up .lip.right {\n  transform: translateX(53px);\n}\n\n.mouth .up .lip {\n  z-index: 1;\n  background-color: #ffe600;\n  position: absolute;\n  margin-left: -50px;\n  left: 50%;\n  width: 100px;\n  height: 30px;\n  border: 3px solid black;\n}\n\n.mouth .up .lip.left {\n  border-radius: 0 0 0 50px;\n  border-top-color: transparent;\n  border-right-color: transparent;\n}\n.mouth .up .lip.right {\n  border-radius: 0 0 50px 0;\n  border-top-color: transparent;\n  border-left-color: transparent;\n}\n\n.mouth .up .lip::before {\n  position: absolute;\n  top: -2px;\n  content: '';\n  background-color: #ffe600;\n}\n.mouth .up .lip.left::before {\n  right: -5px;\n  width: 7px;\n  height: 26px;\n}\n.mouth .up .lip.right::before {\n  left: -5px;\n  width: 7px;\n  height: 26px;\n}\n\n.mouth .up .lip::after {\n  position: absolute;\n  top: -4px;\n  content: '';\n  background-color: #ffe600;\n}\n.mouth .up .lip.left::after {\n  right: -5px;\n  width: 98px;\n  height: 2px;\n}\n\n.mouth .up .lip.right::after {\n  left: -5px;\n  width: 98px;\n  height: 2px;\n}\n\n.mouth .up .lip.left {\n  transform: translateX(-53px) rotateZ(-15deg);\n}\n.mouth .up .lip.right {\n  transform: translateX(53px) rotateZ(15deg);\n}\n\n/* \u7136\u540E\u662F\u4E0B\u5634\u5507 */\n.mouth .down {\n  overflow: hidden;\n  width: 200px;\n  height: 180px;\n  position: relative;\n  top: 15px;\n}\n\n.mouth .down .yuan1 {\n  position: absolute;\n  left: 50%;\n  bottom: 0;\n  margin-left: -75px;\n  overflow: hidden;\n  height: 1000px;\n  width: 150px;\n  border-radius: 75px/300px;\n  border: 3px solid black;\n  background-color: #9b000a;\n}\n\n.mouth .down .yuan1 .yuan2 {\n  position: absolute;\n  bottom: -70px;\n  left: 50%;\n  margin-left: -100px;\n  width: 200px;\n  height: 200px;\n  border-radius: 120px/100px;\n  background-color: #ff485f;\n}\n\n/* \u8BA9\u76AE\u5361\u4E18\u7684\u5C0F\u9F3B\u5B50\u52A8\u8D77\u6765 */\n.nose {\n  animation: wave 300ms infinite linear;\n}\n\n/* \u8FD9\u53EA\u76AE\u5361\u4E18\u5C31\u9001\u7ED9\u4F60\u5566 */\n";
exports.default = string;
},{}],"main.js":[function(require,module,exports) {
'use strict';

var _css = require('./css.js');

var _css2 = _interopRequireDefault(_css);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  n: 0,
  id: undefined,
  time: 20,
  string2: '',

  run: function run() {
    if (player.n > _css2.default.length - 2) {
      window.clearInterval(player.id);
      return;
    }
    if (_css2.default[player.n] === '\n') {
      player.string2 += '<br>';
    } else {
      player.string2 += _css2.default[player.n];
    }
    if (_css2.default[player.n] === ' ') {
      player.string2 += '&nbsp';
    }
    demo.innerHTML = player.string2;
    style.innerHTML = _css2.default.substring(0, player.n);
    player.n = player.n + 1;
    demo.scrollTop = demo.scrollHeight;
  },

  init: function init() {
    btnPause.onclick = player.pause;
    btnPlay.onclick = player.play;
    btnSlow.onclick = player.slow;
    btnNormal.onclick = player.normal;
    btnFast.onclick = player.fast;
    player.play();
  },
  play: function play() {
    window.clearInterval(player.id);
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 100;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 30;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};
player.init();

// 眼球转动
var eyes, eye_ball, eyes_L, eyes_T, eye_ball_L, eye_ball_T;

eyes = document.getElementById('eyes'); //眼睛

eye_ball = document.getElementById('eye-ball'); //眼球

eyes_L = eyes.offsetLeft + eyes.offsetWidth / 2; //眼睛中心位置
console.log(eyes.offsetWidth);
eyes_T = eyes.offsetTop + eyes.offsetHeight / 2;

eye_ball_L = eye_ball.offsetLeft + eye_ball.offsetWidth / 2; //眼球中心位置

eye_ball_T = eye_ball.offsetTop + eye_ball.offsetHeight / 2;

addEventListener('mousemove', function (e) {
  var e = e || window.event;
  var point_y = void 0,
      point_x = void 0,
      point_radius = void 0,
      point_radian = void 0,
      eye_ball_pos = void 0,
      eye_ball_canMove_max = void 0;
  //计算眼珠可移动的的最大半径范围
  eye_ball_canMove_max = eyes.clientWidth / 2 - eye_ball.offsetWidth / 2;
  console.log(eye_ball_canMove_max);point_y = e.clientY - eyes_T;
  point_x = e.clientX - eyes_L;


  point_radius = Math.floor(
  // 向下取整
  radius({
    x: point_x,

    y: point_y
  }));

  point_radian = Math.atan2(point_x, point_y);

  //计算眼球的位置,眼球半径随着鼠标与眼睛中心的半径以的1:15的变化率变化，不得超过出眼睛，限制最小值
  eye_ball_pos = pos_xy(Math.min(eye_ball_canMove_max, point_radius / 15), point_radian);
  eye_ball.style.cssText = 'left:' + (eye_ball_pos.x + eye_ball_canMove_max) + 'px;\n            top: ' + (eye_ball_pos.y + eye_ball_canMove_max) + 'px;';
}, false);
//传入半径,弧度.计算x，y坐标

function pos_xy(radius, radian) {
  return {
    x: Math.sin(radian) * radius,

    y: Math.cos(radian) * radius
  };
}

// 勾股定理计算半径

function radius(pos) {
  return Math.sqrt(Math.pow(pos.x, 2) + Math.pow(pos.y, 2));
}
},{"./css.js":"css.js"}],"C:\\Users\\二狗哥\\AppData\\Local\\Yarn\\Data\\global\\node_modules\\parcel\\src\\builtins\\hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '50830' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["C:\\Users\\二狗哥\\AppData\\Local\\Yarn\\Data\\global\\node_modules\\parcel\\src\\builtins\\hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.71ad56ff.map