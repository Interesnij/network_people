function(t, e, n) {
        ! function(t) {
            "use strict";

            function e(t, e, n) {
                return t + (e - t) * n
            }

            function n(t) {
                return t * Math.PI / 180
            }

            function i(t) {
                return 180 * t / Math.PI
            }

            function r(t, e, n) {
                return (n - t) / (e - t)
            }

            function o(t, e, n) {
                return n <= 0 ? t : n >= 1 ? e : t + n * (e - t)
            }

            function a(t, e) {
                var n = s(e - t, 360);
                return n > 180 && (n = Math.abs(n - 360)), n
            }

            function s(t, e) {
                return (t % e + e) % e
            }

            function c(t, n, i) {
                var r = a(t, n);
                return s(t + e(0, r, i), 360)
            }
            t.clamp = function(t, e, n) {
                return Math.min(e, Math.max(t, n))
            }, t.clamp01 = function(t) {
                return t < 0 ? 0 : t > 1 ? 1 : t
            }, t.step = function(t, e) {
                return e < t ? 0 : 1
            }, t.map = function(t, e, n, i, r) {
                return (t - e) / (n - e) * (r - i) + i
            }, t.diagonal = function(t, e) {
                return Math.sqrt(t * t + e * e)
            }, t.distance = function(t, e, n, i) {
                var r = t - n,
                    o = e - i;
                return Math.sqrt(r * r + o * o)
            }, t.smoothStep = function(t, e, n) {
                var i = Math.max(0, Math.min(1, (n - t) / (e - t)));
                return i * i * (3 - 2 * i)
            }, t.lerp = e, t.mix = e, t.normalize = function(t, e, n) {
                return (n - t) / (e - t)
            }, t.randomFloat = function(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
                return parseFloat(Math.min(t + Math.random() * (e - t), e).toFixed(n))
            }, t.randomInt = function(t, e) {
                return Math.floor(Math.random() * (e - t + 1) + t)
            }, t.randomSign = function() {
                return Math.random() > .5 ? 1 : -1
            }, t.wrap = function(t, e, n) {
                var i = n - e;
                if (i <= 0) return 0;
                var r = (t - e) % i;
                return r < 0 && (r += i), r + e
            }, t.degToRad = n, t.toRadians = n, t.radToDeg = i, t.toDegrees = i, t.fuzzyFloor = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e-4;
                return Math.floor(t + e)
            }, t.fuzzyCeil = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e-4;
                return Math.ceil(t + e)
            }, t.fuzzyEqual = function(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e-4;
                return Math.abs(t - e) < n
            }, t.fuzzyGreaterThan = function(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e-4;
                return t > e - n
            }, t.fuzzyLessThan = function(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e-4;
                return t < e + n
            }, t.maxAdd = function(t, e, n) {
                return Math.min(t + e, n)
            }, t.minSub = function(t, e, n) {
                return Math.max(t - e, n)
            }, t.isOdd = function(t) {
                return !!(1 & t)
            }, t.isEven = function(t) {
                return !(1 & t)
            }, t.isPowerOfTwo = function(t) {
                return 0 !== t && 0 == (t & t - 1)
            }, t.closestPowerOfTwo = function(t) {
                return Math.pow(2, Math.round(Math.log(t) / Math.log(2)))
            }, t.nextPowerOfTwo = function(t) {
                return Math.pow(2, Math.ceil(Math.log(t) / Math.log(2)))
            }, t.percent01 = function(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                return t > e || n > e ? 1 : t < n || n > t ? 0 : (t - n) / e
            }, t.average = function() {
                for (var t = 0, e = arguments.length, n = Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                var r = !0,
                    o = !1,
                    a = void 0;
                try {
                    for (var s, c = n[Symbol.iterator](); !(r = (s = c.next()).done); r = !0) {
                        var l = s.value;
                        t += +l
                    }
                } catch (t) {
                    o = !0, a = t
                } finally {
                    try {
                        !r && c.return && c.return()
                    } finally {
                        if (o) throw a
                    }
                }
                return t / n.length
            }, t.difference = function(t, e) {
                return Math.abs(t - e)
            }, t.within = function(t, e, n) {
                return Math.abs(t - e) <= n
            }, t.inverseLerp = r, t.inverseMix = r, t.lerpUnclamped = o, t.mixUnclamped = o, t.deltaAngleDeg = a, t.deltaAngle = a, t.deltaAngleRad = function(t, e) {
                return n(a(i(t), i(e)))
            }, t.fract = function(t) {
                return t - Math.floor(t)
            }, t.mod = s, t.lerpAngleDeg = c, t.lerpAngle = c, t.lerpAngleRad = function(t, e, r) {
                return n(c(i(t), i(e), r))
            }, t.gammaToLinearSpace = function(t) {
                return Math.pow(t, 2.2)
            }, t.linearToGammaSpace = function(t) {
                return Math.pow(t, 1 / 2.2)
            }, t.almostIdentity = function(t, e, n) {
                if (t > e) return t;
                var i = t / e;
                return ((2 * n - e) * i + (2 * e - 3 * n)) * i * i + n
            }, t.impulse = function(t, e) {
                var n = t * e;
                return n * Math.exp(1 - n)
            }, t.cubicPulse = function(t, e, n) {
                return (n = Math.abs(n - t)) > e ? 0 : 1 - (n /= e) * n * (3 - 2 * n)
            }, t.expStep = function(t, e, n) {
                return Math.exp(-e * Math.pow(t, n))
            }, t.parabola = function(t, e) {
                return Math.pow(4 * t * (1 - t), e)
            }, t.powerCurve = function(t, e, n) {
                return Math.pow(e + n, e + n) / (Math.pow(e, e) * Math.pow(n, n)) * Math.pow(t, e) * Math.pow(1 - t, n)
            }, t.smoothMin = function(t, e, n) {
                var i = Math.exp(-n * t) + Math.exp(-n * e);
                return -Math.log(i) / n
            }, t.smoothMax = function(t, e, n) {
                return Math.log(Math.exp(t) + Math.exp(e)) / n
            }, t.deltaTime = function(t) {
                return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now()) - t
            }, t.gcd = function t(e, n) {
                return 0 === n ? e : t(n, e % n)
            }, t.dotProduct = function(t, e, n, i, r, o, a, s) {
                return (n - t) * (a - r) + (i - e) * (s - o)
            }, Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }(e)
    }, , , function(t, e, n) {
        var i = n(43),
            r = "object" == typeof self && self && self.Object === Object && self,
            o = i || r || Function("return this")();
        t.exports = o
    }, , function(t, e, n) {
        var i = n(120),
            r = n(115);
        t.exports = function(t, e) {
            var n = r(t, e);
            return i(n) ? n : void 0
        }
    }, , , , function(t, e, n) {
        (function(n) {
            var i;
            /*!
             *  howler.js v2.1.2
             *  howlerjs.com
             *
             *  (c) 2013-2019, James Simpson of GoldFire Studios
             *  goldfirestudios.com
             *
             *  MIT License
             */
            /*!
             *  howler.js v2.1.2
             *  howlerjs.com
             *
             *  (c) 2013-2019, James Simpson of GoldFire Studios
             *  goldfirestudios.com
             *
             *  MIT License
             */
            ! function() {
                "use strict";
                var r = function() {
                    this.init()
                };
                r.prototype = {
                    init: function() {
                        var t = this || o;
                        return t._counter = 1e3, t._html5AudioPool = [], t.html5PoolSize = 10, t._codecs = {}, t._howls = [], t._muted = !1, t._volume = 1, t._canPlayEvent = "canplaythrough", t._navigator = "undefined" != typeof window && window.navigator ? window.navigator : null, t.masterGain = null, t.noAudio = !1, t.usingWebAudio = !0, t.autoSuspend = !0, t.ctx = null, t.autoUnlock = !0, t._setup(), t
                    },
                    volume: function(t) {
                        var e = this || o;
                        if (t = parseFloat(t), e.ctx || d(), void 0 !== t && t >= 0 && t <= 1) {
                            if (e._volume = t, e._muted) return e;
                            e.usingWebAudio && e.masterGain.gain.setValueAtTime(t, o.ctx.currentTime);
                            for (var n = 0; n < e._howls.length; n++)
                                if (!e._howls[n]._webAudio)
                                    for (var i = e._howls[n]._getSoundIds(), r = 0; r < i.length; r++) {
                                        var a = e._howls[n]._soundById(i[r]);
                                        a && a._node && (a._node.volume = a._volume * t)
                                    }
                            return e
                        }
                        return e._volume
                    },
                    mute: function(t) {
                        var e = this || o;
                        e.ctx || d(), e._muted = t, e.usingWebAudio && e.masterGain.gain.setValueAtTime(t ? 0 : e._volume, o.ctx.currentTime);
                        for (var n = 0; n < e._howls.length; n++)
                            if (!e._howls[n]._webAudio)
                                for (var i = e._howls[n]._getSoundIds(), r = 0; r < i.length; r++) {
                                    var a = e._howls[n]._soundById(i[r]);
                                    a && a._node && (a._node.muted = !!t || a._muted)
                                }
                        return e
                    },
                    unload: function() {
                        for (var t = this || o, e = t._howls.length - 1; e >= 0; e--) t._howls[e].unload();
                        return t.usingWebAudio && t.ctx && void 0 !== t.ctx.close && (t.ctx.close(), t.ctx = null, d()), t
                    },
                    codecs: function(t) {
                        return (this || o)._codecs[t.replace(/^x-/, "")]
                    },
                    _setup: function() {
                        var t = this || o;
                        if (t.state = t.ctx && t.ctx.state || "suspended", t._autoSuspend(), !t.usingWebAudio)
                            if ("undefined" != typeof Audio) try {
                                void 0 === (new Audio).oncanplaythrough && (t._canPlayEvent = "canplay")
                            } catch (e) {
                                t.noAudio = !0
                            } else t.noAudio = !0;
                        try {
                            (new Audio).muted && (t.noAudio = !0)
                        } catch (t) {}
                        return t.noAudio || t._setupCodecs(), t
                    },
                    _setupCodecs: function() {
                        var t = this || o,
                            e = null;
                        try {
                            e = "undefined" != typeof Audio ? new Audio : null
                        } catch (e) {
                            return t
                        }
                        if (!e || "function" != typeof e.canPlayType) return t;
                        var n = e.canPlayType("audio/mpeg;").replace(/^no$/, ""),
                            i = t._navigator && t._navigator.userAgent.match(/OPR\/([0-6].)/g),
                            r = i && parseInt(i[0].split("/")[1], 10) < 33;
                        return t._codecs = {
                            mp3: !(r || !n && !e.canPlayType("audio/mp3;").replace(/^no$/, "")),
                            mpeg: !!n,
                            opus: !!e.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                            ogg: !!e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                            oga: !!e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                            wav: !!e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
                            aac: !!e.canPlayType("audio/aac;").replace(/^no$/, ""),
                            caf: !!e.canPlayType("audio/x-caf;").replace(/^no$/, ""),
                            m4a: !!(e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""),
                            mp4: !!(e.canPlayType("audio/x-mp4;") || e.canPlayType("audio/mp4;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""),
                            weba: !!e.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
                            webm: !!e.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
                            dolby: !!e.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
                            flac: !!(e.canPlayType("audio/x-flac;") || e.canPlayType("audio/flac;")).replace(/^no$/, "")
                        }, t
                    },
                    _unlockAudio: function() {
                        var t = this || o;
                        if (!t._audioUnlocked && t.ctx) {
                            t._audioUnlocked = !1, t.autoUnlock = !1, t._mobileUnloaded || 44100 === t.ctx.sampleRate || (t._mobileUnloaded = !0, t.unload()), t._scratchBuffer = t.ctx.createBuffer(1, 1, 22050);
                            var e = function(n) {
                                for (var i = 0; i < t.html5PoolSize; i++) try {
                                    var r = new Audio;
                                    r._unlocked = !0, t._releaseHtml5Audio(r)
                                } catch (n) {
                                    t.noAudio = !0
                                }
                                for (i = 0; i < t._howls.length; i++)
                                    if (!t._howls[i]._webAudio)
                                        for (var o = t._howls[i]._getSoundIds(), a = 0; a < o.length; a++) {
                                            var s = t._howls[i]._soundById(o[a]);
                                            s && s._node && !s._node._unlocked && (s._node._unlocked = !0, s._node.load())
                                        }
                                t._autoResume();
                                var c = t.ctx.createBufferSource();
                                c.buffer = t._scratchBuffer, c.connect(t.ctx.destination), void 0 === c.start ? c.noteOn(0) : c.start(0), "function" == typeof t.ctx.resume && t.ctx.resume(), c.onended = function() {
                                    c.disconnect(0), t._audioUnlocked = !0, document.removeEventListener("touchstart", e, !0), document.removeEventListener("touchend", e, !0), document.removeEventListener("click", e, !0);
                                    for (var n = 0; n < t._howls.length; n++) t._howls[n]._emit("unlock")
                                }
                            };
                            return document.addEventListener("touchstart", e, !0), document.addEventListener("touchend", e, !0), document.addEventListener("click", e, !0), t
                        }
                    },
                    _obtainHtml5Audio: function() {
                        var t = this || o;
                        if (t._html5AudioPool.length) return t._html5AudioPool.pop();
                        var e = (new Audio).play();
                        return e && "undefined" != typeof Promise && (e instanceof Promise || "function" == typeof e.then) && e.catch(function() {
                            console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
                        }), new Audio
                    },
                    _releaseHtml5Audio: function(t) {
                        var e = this || o;
                        return t._unlocked && e._html5AudioPool.push(t), e
                    },
                    _autoSuspend: function() {
                        var t = this;
                        if (t.autoSuspend && t.ctx && void 0 !== t.ctx.suspend && o.usingWebAudio) {
                            for (var e = 0; e < t._howls.length; e++)
                                if (t._howls[e]._webAudio)
                                    for (var n = 0; n < t._howls[e]._sounds.length; n++)
                                        if (!t._howls[e]._sounds[n]._paused) return t;
                            return t._suspendTimer && clearTimeout(t._suspendTimer), t._suspendTimer = setTimeout(function() {
                                t.autoSuspend && (t._suspendTimer = null, t.state = "suspending", t.ctx.suspend().then(function() {
                                    t.state = "suspended", t._resumeAfterSuspend && (delete t._resumeAfterSuspend, t._autoResume())
                                }))
                            }, 3e4), t
                        }
                    },
                    _autoResume: function() {
                        var t = this;
                        if (t.ctx && void 0 !== t.ctx.resume && o.usingWebAudio) return "running" === t.state && t._suspendTimer ? (clearTimeout(t._suspendTimer), t._suspendTimer = null) : "suspended" === t.state ? (t.ctx.resume().then(function() {
                            t.state = "running";
                            for (var e = 0; e < t._howls.length; e++) t._howls[e]._emit("resume")
                        }), t._suspendTimer && (clearTimeout(t._suspendTimer), t._suspendTimer = null)) : "suspending" === t.state && (t._resumeAfterSuspend = !0), t
                    }
                };
                var o = new r,
                    a = function(t) {
                        t.src && 0 !== t.src.length ? this.init(t) : console.error("An array of source files must be passed with any new Howl.")
                    };
                a.prototype = {
                    init: function(t) {
                        var e = this;
                        return o.ctx || d(), e._autoplay = t.autoplay || !1, e._format = "string" != typeof t.format ? t.format : [t.format], e._html5 = t.html5 || !1, e._muted = t.mute || !1, e._loop = t.loop || !1, e._pool = t.pool || 5, e._preload = "boolean" != typeof t.preload || t.preload, e._rate = t.rate || 1, e._sprite = t.sprite || {}, e._src = "string" != typeof t.src ? t.src : [t.src], e._volume = void 0 !== t.volume ? t.volume : 1, e._xhrWithCredentials = t.xhrWithCredentials || !1, e._duration = 0, e._state = "unloaded", e._sounds = [], e._endTimers = {}, e._queue = [], e._playLock = !1, e._onend = t.onend ? [{
                            fn: t.onend
                        }] : [], e._onfade = t.onfade ? [{
                            fn: t.onfade
                        }] : [], e._onload = t.onload ? [{
                            fn: t.onload
                        }] : [], e._onloaderror = t.onloaderror ? [{
                            fn: t.onloaderror
                        }] : [], e._onplayerror = t.onplayerror ? [{
                            fn: t.onplayerror
                        }] : [], e._onpause = t.onpause ? [{
                            fn: t.onpause
                        }] : [], e._onplay = t.onplay ? [{
                            fn: t.onplay
                        }] : [], e._onstop = t.onstop ? [{
                            fn: t.onstop
                        }] : [], e._onmute = t.onmute ? [{
                            fn: t.onmute
                        }] : [], e._onvolume = t.onvolume ? [{
                            fn: t.onvolume
                        }] : [], e._onrate = t.onrate ? [{
                            fn: t.onrate
                        }] : [], e._onseek = t.onseek ? [{
                            fn: t.onseek
                        }] : [], e._onunlock = t.onunlock ? [{
                            fn: t.onunlock
                        }] : [], e._onresume = [], e._webAudio = o.usingWebAudio && !e._html5, void 0 !== o.ctx && o.ctx && o.autoUnlock && o._unlockAudio(), o._howls.push(e), e._autoplay && e._queue.push({
                            event: "play",
                            action: function() {
                                e.play()
                            }
                        }), e._preload && e.load(), e
                    },
                    load: function() {
                        var t = null;
                        if (o.noAudio) this._emit("loaderror", null, "No audio support.");
                        else {
                            "string" == typeof this._src && (this._src = [this._src]);
                            for (var e = 0; e < this._src.length; e++) {
                                var n, i;
                                if (this._format && this._format[e]) n = this._format[e];
                                else {
                                    if ("string" != typeof(i = this._src[e])) {
                                        this._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                                        continue
                                    }(n = /^data:audio\/([^;,]+);/i.exec(i)) || (n = /\.([^.]+)$/.exec(i.split("?", 1)[0])), n && (n = n[1].toLowerCase())
                                }
                                if (n || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), n && o.codecs(n)) {
                                    t = this._src[e];
                                    break
                                }
                            }
                            if (t) return this._src = t, this._state = "loading", "https:" === window.location.protocol && "http:" === t.slice(0, 5) && (this._html5 = !0, this._webAudio = !1), new s(this), this._webAudio && l(this), this;
                            this._emit("loaderror", null, "No codec support for selected audio sources.")
                        }
                    },
                    play: function(t, e) {
                        var n = this,
                            i = null;
                        if ("number" == typeof t) i = t, t = null;
                        else {
                            if ("string" == typeof t && "loaded" === n._state && !n._sprite[t]) return null;
                            if (void 0 === t && (t = "__default", !n._playLock)) {
                                for (var r = 0, a = 0; a < n._sounds.length; a++) n._sounds[a]._paused && !n._sounds[a]._ended && (r++, i = n._sounds[a]._id);
                                1 === r ? t = null : i = null
                            }
                        }
                        var s = i ? n._soundById(i) : n._inactiveSound();
                        if (!s) return null;
                        if (i && !t && (t = s._sprite || "__default"), "loaded" !== n._state) {
                            s._sprite = t, s._ended = !1;
                            var c = s._id;
                            return n._queue.push({
                                event: "play",
                                action: function() {
                                    n.play(c)
                                }
                            }), c
                        }
                        if (i && !s._paused) return e || n._loadQueue("play"), s._id;
                        n._webAudio && o._autoResume();
                        var l = Math.max(0, s._seek > 0 ? s._seek : n._sprite[t][0] / 1e3),
                            h = Math.max(0, (n._sprite[t][0] + n._sprite[t][1]) / 1e3 - l),
                            u = 1e3 * h / Math.abs(s._rate),
                            p = n._sprite[t][0] / 1e3,
                            d = (n._sprite[t][0] + n._sprite[t][1]) / 1e3,
                            f = !(!s._loop && !n._sprite[t][2]);
                        s._sprite = t, s._ended = !1;
                        var m = function() {
                            s._paused = !1, s._seek = l, s._start = p, s._stop = d, s._loop = f
                        };
                        if (!(l >= d)) {
                            var v = s._node;
                            if (n._webAudio) {
                                var g = function() {
                                    n._playLock = !1, m(), n._refreshBuffer(s);
                                    var t = s._muted || n._muted ? 0 : s._volume;
                                    v.gain.setValueAtTime(t, o.ctx.currentTime), s._playStart = o.ctx.currentTime, void 0 === v.bufferSource.start ? s._loop ? v.bufferSource.noteGrainOn(0, l, 86400) : v.bufferSource.noteGrainOn(0, l, h) : s._loop ? v.bufferSource.start(0, l, 86400) : v.bufferSource.start(0, l, h), u !== 1 / 0 && (n._endTimers[s._id] = setTimeout(n._ended.bind(n, s), u)), e || setTimeout(function() {
                                        n._emit("play", s._id), n._loadQueue()
                                    }, 0)
                                };
                                "running" === o.state ? g() : (n._playLock = !0, n.once("resume", g), n._clearTimer(s._id))
                            } else {
                                var y = function() {
                                    v.currentTime = l, v.muted = s._muted || n._muted || o._muted || v.muted, v.volume = s._volume * o.volume(), v.playbackRate = s._rate;
                                    try {
                                        var i = v.play();
                                        if (i && "undefined" != typeof Promise && (i instanceof Promise || "function" == typeof i.then) ? (n._playLock = !0, m(), i.then(function() {
                                                n._playLock = !1, v._unlocked = !0, e || (n._emit("play", s._id), n._loadQueue())
                                            }).catch(function() {
                                                n._playLock = !1, n._emit("playerror", s._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), s._ended = !0, s._paused = !0
                                            })) : e || (n._playLock = !1, m(), n._emit("play", s._id), n._loadQueue()), v.playbackRate = s._rate, v.paused) return void n._emit("playerror", s._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                                        "__default" !== t || s._loop ? n._endTimers[s._id] = setTimeout(n._ended.bind(n, s), u) : (n._endTimers[s._id] = function() {
                                            n._ended(s), v.removeEventListener("ended", n._endTimers[s._id], !1)
                                        }, v.addEventListener("ended", n._endTimers[s._id], !1))
                                    } catch (t) {
                                        n._emit("playerror", s._id, t)
                                    }
                                };
                                "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === v.src && (v.src = n._src, v.load());
                                var _ = window && window.ejecta || !v.readyState && o._navigator.isCocoonJS;
                                if (v.readyState >= 3 || _) y();
                                else {
                                    n._playLock = !0;
                                    var x = function() {
                                        y(), v.removeEventListener(o._canPlayEvent, x, !1)
                                    };
                                    v.addEventListener(o._canPlayEvent, x, !1), n._clearTimer(s._id)
                                }
                            }
                            return s._id
                        }
                        n._ended(s)
                    },
                    pause: function(t) {
                        var e = this;
                        if ("loaded" !== e._state || e._playLock) return e._queue.push({
                            event: "pause",
                            action: function() {
                                e.pause(t)
                            }
                        }), e;
                        for (var n = e._getSoundIds(t), i = 0; i < n.length; i++) {
                            e._clearTimer(n[i]);
                            var r = e._soundById(n[i]);
                            if (r && !r._paused && (r._seek = e.seek(n[i]), r._rateSeek = 0, r._paused = !0, e._stopFade(n[i]), r._node))
                                if (e._webAudio) {
                                    if (!r._node.bufferSource) continue;
                                    void 0 === r._node.bufferSource.stop ? r._node.bufferSource.noteOff(0) : r._node.bufferSource.stop(0), e._cleanBuffer(r._node)
                                } else isNaN(r._node.duration) && r._node.duration !== 1 / 0 || r._node.pause();
                            arguments[1] || e._emit("pause", r ? r._id : null)
                        }
                        return e
                    },
                    stop: function(t, e) {
                        var n = this;
                        if ("loaded" !== n._state || n._playLock) return n._queue.push({
                            event: "stop",
                            action: function() {
                                n.stop(t)
                            }
                        }), n;
                        for (var i = n._getSoundIds(t), r = 0; r < i.length; r++) {
                            n._clearTimer(i[r]);
                            var o = n._soundById(i[r]);
                            o && (o._seek = o._start || 0, o._rateSeek = 0, o._paused = !0, o._ended = !0, n._stopFade(i[r]), o._node && (n._webAudio ? o._node.bufferSource && (void 0 === o._node.bufferSource.stop ? o._node.bufferSource.noteOff(0) : o._node.bufferSource.stop(0), n._cleanBuffer(o._node)) : isNaN(o._node.duration) && o._node.duration !== 1 / 0 || (o._node.currentTime = o._start || 0, o._node.pause(), o._node.duration === 1 / 0 && n._clearSound(o._node))), e || n._emit("stop", o._id))
                        }
                        return n
                    },
                    mute: function(t, e) {
                        var n = this;
                        if ("loaded" !== n._state || n._playLock) return n._queue.push({
                            event: "mute",
                            action: function() {
                                n.mute(t, e)
                            }
                        }), n;
                        if (void 0 === e) {
                            if ("boolean" != typeof t) return n._muted;
                            n._muted = t
                        }
                        for (var i = n._getSoundIds(e), r = 0; r < i.length; r++) {
                            var a = n._soundById(i[r]);
                            a && (a._muted = t, a._interval && n._stopFade(a._id), n._webAudio && a._node ? a._node.gain.setValueAtTime(t ? 0 : a._volume, o.ctx.currentTime) : a._node && (a._node.muted = !!o._muted || t), n._emit("mute", a._id))
                        }
                        return n
                    },
                    volume: function() {
                        var t, e, n, i = this,
                            r = arguments;
                        if (0 === r.length) return i._volume;
                        if (1 === r.length || 2 === r.length && void 0 === r[1] ? i._getSoundIds().indexOf(r[0]) >= 0 ? e = parseInt(r[0], 10) : t = parseFloat(r[0]) : r.length >= 2 && (t = parseFloat(r[0]), e = parseInt(r[1], 10)), !(void 0 !== t && t >= 0 && t <= 1)) return (n = e ? i._soundById(e) : i._sounds[0]) ? n._volume : 0;
                        if ("loaded" !== i._state || i._playLock) return i._queue.push({
                            event: "volume",
                            action: function() {
                                i.volume.apply(i, r)
                            }
                        }), i;
                        void 0 === e && (i._volume = t), e = i._getSoundIds(e);
                        for (var a = 0; a < e.length; a++)(n = i._soundById(e[a])) && (n._volume = t, r[2] || i._stopFade(e[a]), i._webAudio && n._node && !n._muted ? n._node.gain.setValueAtTime(t, o.ctx.currentTime) : n._node && !n._muted && (n._node.volume = t * o.volume()), i._emit("volume", n._id));
                        return i
                    },
                    fade: function(t, e, n, i) {
                        var r = this;
                        if ("loaded" !== r._state || r._playLock) return r._queue.push({
                            event: "fade",
                            action: function() {
                                r.fade(t, e, n, i)
                            }
                        }), r;
                        t = parseFloat(t), e = parseFloat(e), n = parseFloat(n), r.volume(t, i);
                        for (var a = r._getSoundIds(i), s = 0; s < a.length; s++) {
                            var c = r._soundById(a[s]);
                            if (c) {
                                if (i || r._stopFade(a[s]), r._webAudio && !c._muted) {
                                    var l = o.ctx.currentTime,
                                        h = l + n / 1e3;
                                    c._volume = t, c._node.gain.setValueAtTime(t, l), c._node.gain.linearRampToValueAtTime(e, h)
                                }
                                r._startFadeInterval(c, t, e, n, a[s], void 0 === i)
                            }
                        }
                        return r
                    },
                    _startFadeInterval: function(t, e, n, i, r, o) {
                        var a = this,
                            s = e,
                            c = n - e,
                            l = Math.abs(c / .01),
                            h = Math.max(4, l > 0 ? i / l : i),
                            u = Date.now();
                        t._fadeTo = n, t._interval = setInterval(function() {
                            var r = (Date.now() - u) / i;
                            u = Date.now(), s += c * r, s = Math.max(0, s), s = Math.min(1, s), s = Math.round(100 * s) / 100, a._webAudio ? t._volume = s : a.volume(s, t._id, !0), o && (a._volume = s), (n < e && s <= n || n > e && s >= n) && (clearInterval(t._interval), t._interval = null, t._fadeTo = null, a.volume(n, t._id), a._emit("fade", t._id))
                        }, h)
                    },
                    _stopFade: function(t) {
                        var e = this._soundById(t);
                        return e && e._interval && (this._webAudio && e._node.gain.cancelScheduledValues(o.ctx.currentTime), clearInterval(e._interval), e._interval = null, this.volume(e._fadeTo, t), e._fadeTo = null, this._emit("fade", t)), this
                    },
                    loop: function() {
                        var t, e, n, i = arguments;
                        if (0 === i.length) return this._loop;
                        if (1 === i.length) {
                            if ("boolean" != typeof i[0]) return !!(n = this._soundById(parseInt(i[0], 10))) && n._loop;
                            t = i[0], this._loop = t
                        } else 2 === i.length && (t = i[0], e = parseInt(i[1], 10));
                        for (var r = this._getSoundIds(e), o = 0; o < r.length; o++)(n = this._soundById(r[o])) && (n._loop = t, this._webAudio && n._node && n._node.bufferSource && (n._node.bufferSource.loop = t, t && (n._node.bufferSource.loopStart = n._start || 0, n._node.bufferSource.loopEnd = n._stop)));
                        return this
                    },
                    rate: function() {
                        var t, e, n, i = this,
                            r = arguments;
                        if (0 === r.length) e = i._sounds[0]._id;
                        else if (1 === r.length) {
                            i._getSoundIds().indexOf(r[0]) >= 0 ? e = parseInt(r[0], 10) : t = parseFloat(r[0])
                        } else 2 === r.length && (t = parseFloat(r[0]), e = parseInt(r[1], 10));
                        if ("number" != typeof t) return (n = i._soundById(e)) ? n._rate : i._rate;
                        if ("loaded" !== i._state || i._playLock) return i._queue.push({
                            event: "rate",
                            action: function() {
                                i.rate.apply(i, r)
                            }
                        }), i;
                        void 0 === e && (i._rate = t), e = i._getSoundIds(e);
                        for (var a = 0; a < e.length; a++)
                            if (n = i._soundById(e[a])) {
                                i.playing(e[a]) && (n._rateSeek = i.seek(e[a]), n._playStart = i._webAudio ? o.ctx.currentTime : n._playStart), n._rate = t, i._webAudio && n._node && n._node.bufferSource ? n._node.bufferSource.playbackRate.setValueAtTime(t, o.ctx.currentTime) : n._node && (n._node.playbackRate = t);
                                var s = i.seek(e[a]),
                                    c = 1e3 * ((i._sprite[n._sprite][0] + i._sprite[n._sprite][1]) / 1e3 - s) / Math.abs(n._rate);
                                !i._endTimers[e[a]] && n._paused || (i._clearTimer(e[a]), i._endTimers[e[a]] = setTimeout(i._ended.bind(i, n), c)), i._emit("rate", n._id)
                            } return i
                    },
                    seek: function() {
                        var t, e, n = this,
                            i = arguments;
                        if (0 === i.length) e = n._sounds[0]._id;
                        else if (1 === i.length) {
                            n._getSoundIds().indexOf(i[0]) >= 0 ? e = parseInt(i[0], 10) : n._sounds.length && (e = n._sounds[0]._id, t = parseFloat(i[0]))
                        } else 2 === i.length && (t = parseFloat(i[0]), e = parseInt(i[1], 10));
                        if (void 0 === e) return n;
                        if ("loaded" !== n._state || n._playLock) return n._queue.push({
                            event: "seek",
                            action: function() {
                                n.seek.apply(n, i)
                            }
                        }), n;
                        var r = n._soundById(e);
                        if (r) {
                            if (!("number" == typeof t && t >= 0)) {
                                if (n._webAudio) {
                                    var a = n.playing(e) ? o.ctx.currentTime - r._playStart : 0,
                                        s = r._rateSeek ? r._rateSeek - r._seek : 0;
                                    return r._seek + (s + a * Math.abs(r._rate))
                                }
                                return r._node.currentTime
                            }
                            var c = n.playing(e);
                            c && n.pause(e, !0), r._seek = t, r._ended = !1, n._clearTimer(e), n._webAudio || !r._node || isNaN(r._node.duration) || (r._node.currentTime = t);
                            var l = function() {
                                n._emit("seek", e), c && n.play(e, !0)
                            };
                            if (c && !n._webAudio) {
                                var h = function() {
                                    n._playLock ? setTimeout(h, 0) : l()
                                };
                                setTimeout(h, 0)
                            } else l()
                        }
                        return n
                    },
                    playing: function(t) {
                        if ("number" == typeof t) {
                            var e = this._soundById(t);
                            return !!e && !e._paused
                        }
                        for (var n = 0; n < this._sounds.length; n++)
                            if (!this._sounds[n]._paused) return !0;
                        return !1
                    },
                    duration: function(t) {
                        var e = this._duration,
                            n = this._soundById(t);
                        return n && (e = this._sprite[n._sprite][1] / 1e3), e
                    },
                    state: function() {
                        return this._state
                    },
                    unload: function() {
                        for (var t = this, e = t._sounds, n = 0; n < e.length; n++) e[n]._paused || t.stop(e[n]._id), t._webAudio || (t._clearSound(e[n]._node), e[n]._node.removeEventListener("error", e[n]._errorFn, !1), e[n]._node.removeEventListener(o._canPlayEvent, e[n]._loadFn, !1), o._releaseHtml5Audio(e[n]._node)), delete e[n]._node, t._clearTimer(e[n]._id);
                        var i = o._howls.indexOf(t);
                        i >= 0 && o._howls.splice(i, 1);
                        var r = !0;
                        for (n = 0; n < o._howls.length; n++)
                            if (o._howls[n]._src === t._src || t._src.indexOf(o._howls[n]._src) >= 0) {
                                r = !1;
                                break
                            } return c && r && delete c[t._src], o.noAudio = !1, t._state = "unloaded", t._sounds = [], t = null, null
                    },
                    on: function(t, e, n, i) {
                        var r = this["_on" + t];
                        return "function" == typeof e && r.push(i ? {
                            id: n,
                            fn: e,
                            once: i
                        } : {
                            id: n,
                            fn: e
                        }), this
                    },
                    off: function(t, e, n) {
                        var i = this["_on" + t],
                            r = 0;
                        if ("number" == typeof e && (n = e, e = null), e || n)
                            for (r = 0; r < i.length; r++) {
                                var o = n === i[r].id;
                                if (e === i[r].fn && o || !e && o) {
                                    i.splice(r, 1);
                                    break
                                }
                            } else if (t) this["_on" + t] = [];
                            else {
                                var a = Object.keys(this);
                                for (r = 0; r < a.length; r++) 0 === a[r].indexOf("_on") && Array.isArray(this[a[r]]) && (this[a[r]] = [])
                            } return this
                    },
                    once: function(t, e, n) {
                        return this.on(t, e, n, 1), this
                    },
                    _emit: function(t, e, n) {
                        for (var i = this["_on" + t], r = i.length - 1; r >= 0; r--) i[r].id && i[r].id !== e && "load" !== t || (setTimeout(function(t) {
                            t.call(this, e, n)
                        }.bind(this, i[r].fn), 0), i[r].once && this.off(t, i[r].fn, i[r].id));
                        return this._loadQueue(t), this
                    },
                    _loadQueue: function(t) {
                        if (this._queue.length > 0) {
                            var e = this._queue[0];
                            e.event === t && (this._queue.shift(), this._loadQueue()), t || e.action()
                        }
                        return this
                    },
                    _ended: function(t) {
                        var e = t._sprite;
                        if (!this._webAudio && t._node && !t._node.paused && !t._node.ended && t._node.currentTime < t._stop) return setTimeout(this._ended.bind(this, t), 100), this;
                        var n = !(!t._loop && !this._sprite[e][2]);
                        if (this._emit("end", t._id), !this._webAudio && n && this.stop(t._id, !0).play(t._id), this._webAudio && n) {
                            this._emit("play", t._id), t._seek = t._start || 0, t._rateSeek = 0, t._playStart = o.ctx.currentTime;
                            var i = 1e3 * (t._stop - t._start) / Math.abs(t._rate);
                            this._endTimers[t._id] = setTimeout(this._ended.bind(this, t), i)
                        }
                        return this._webAudio && !n && (t._paused = !0, t._ended = !0, t._seek = t._start || 0, t._rateSeek = 0, this._clearTimer(t._id), this._cleanBuffer(t._node), o._autoSuspend()), this._webAudio || n || this.stop(t._id, !0), this
                    },
                    _clearTimer: function(t) {
                        if (this._endTimers[t]) {
                            if ("function" != typeof this._endTimers[t]) clearTimeout(this._endTimers[t]);
                            else {
                                var e = this._soundById(t);
                                e && e._node && e._node.removeEventListener("ended", this._endTimers[t], !1)
                            }
                            delete this._endTimers[t]
                        }
                        return this
                    },
                    _soundById: function(t) {
                        for (var e = 0; e < this._sounds.length; e++)
                            if (t === this._sounds[e]._id) return this._sounds[e];
                        return null
                    },
                    _inactiveSound: function() {
                        this._drain();
                        for (var t = 0; t < this._sounds.length; t++)
                            if (this._sounds[t]._ended) return this._sounds[t].reset();
                        return new s(this)
                    },
                    _drain: function() {
                        var t = this._pool,
                            e = 0,
                            n = 0;
                        if (!(this._sounds.length < t)) {
                            for (n = 0; n < this._sounds.length; n++) this._sounds[n]._ended && e++;
                            for (n = this._sounds.length - 1; n >= 0; n--) {
                                if (e <= t) return;
                                this._sounds[n]._ended && (this._webAudio && this._sounds[n]._node && this._sounds[n]._node.disconnect(0), this._sounds.splice(n, 1), e--)
                            }
                        }
                    },
                    _getSoundIds: function(t) {
                        if (void 0 === t) {
                            for (var e = [], n = 0; n < this._sounds.length; n++) e.push(this._sounds[n]._id);
                            return e
                        }
                        return [t]
                    },
                    _refreshBuffer: function(t) {
                        return t._node.bufferSource = o.ctx.createBufferSource(), t._node.bufferSource.buffer = c[this._src], t._panner ? t._node.bufferSource.connect(t._panner) : t._node.bufferSource.connect(t._node), t._node.bufferSource.loop = t._loop, t._loop && (t._node.bufferSource.loopStart = t._start || 0, t._node.bufferSource.loopEnd = t._stop || 0), t._node.bufferSource.playbackRate.setValueAtTime(t._rate, o.ctx.currentTime), this
                    },
                    _cleanBuffer: function(t) {
                        var e = o._navigator && o._navigator.vendor.indexOf("Apple") >= 0;
                        if (o._scratchBuffer && t.bufferSource && (t.bufferSource.onended = null, t.bufferSource.disconnect(0), e)) try {
                            t.bufferSource.buffer = o._scratchBuffer
                        } catch (t) {}
                        return t.bufferSource = null, this
                    },
                    _clearSound: function(t) {
                        /MSIE |Trident\//.test(o._navigator && o._navigator.userAgent) || (t.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
                    }
                };
                var s = function(t) {
                    this._parent = t, this.init()
                };
                s.prototype = {
                    init: function() {
                        var t = this._parent;
                        return this._muted = t._muted, this._loop = t._loop, this._volume = t._volume, this._rate = t._rate, this._seek = 0, this._paused = !0, this._ended = !0, this._sprite = "__default", this._id = ++o._counter, t._sounds.push(this), this.create(), this
                    },
                    create: function() {
                        var t = this._parent,
                            e = o._muted || this._muted || this._parent._muted ? 0 : this._volume;
                        return t._webAudio ? (this._node = void 0 === o.ctx.createGain ? o.ctx.createGainNode() : o.ctx.createGain(), this._node.gain.setValueAtTime(e, o.ctx.currentTime), this._node.paused = !0, this._node.connect(o.masterGain)) : (this._node = o._obtainHtml5Audio(), this._errorFn = this._errorListener.bind(this), this._node.addEventListener("error", this._errorFn, !1), this._loadFn = this._loadListener.bind(this), this._node.addEventListener(o._canPlayEvent, this._loadFn, !1), this._node.src = t._src, this._node.preload = "auto", this._node.volume = e * o.volume(), this._node.load()), this
                    },
                    reset: function() {
                        var t = this._parent;
                        return this._muted = t._muted, this._loop = t._loop, this._volume = t._volume, this._rate = t._rate, this._seek = 0, this._rateSeek = 0, this._paused = !0, this._ended = !0, this._sprite = "__default", this._id = ++o._counter, this
                    },
                    _errorListener: function() {
                        this._parent._emit("loaderror", this._id, this._node.error ? this._node.error.code : 0), this._node.removeEventListener("error", this._errorFn, !1)
                    },
                    _loadListener: function() {
                        var t = this._parent;
                        t._duration = Math.ceil(10 * this._node.duration) / 10, 0 === Object.keys(t._sprite).length && (t._sprite = {
                            __default: [0, 1e3 * t._duration]
                        }), "loaded" !== t._state && (t._state = "loaded", t._emit("load"), t._loadQueue()), this._node.removeEventListener(o._canPlayEvent, this._loadFn, !1)
                    }
                };
                var c = {},
                    l = function(t) {
                        var e = t._src;
                        if (c[e]) return t._duration = c[e].duration, void p(t);
                        if (/^data:[^;]+;base64,/.test(e)) {
                            for (var n = atob(e.split(",")[1]), i = new Uint8Array(n.length), r = 0; r < n.length; ++r) i[r] = n.charCodeAt(r);
                            u(i.buffer, t)
                        } else {
                            var o = new XMLHttpRequest;
                            o.open("GET", e, !0), o.withCredentials = t._xhrWithCredentials, o.responseType = "arraybuffer", o.onload = function() {
                                var e = (o.status + "")[0];
                                "0" === e || "2" === e || "3" === e ? u(o.response, t) : t._emit("loaderror", null, "Failed loading audio file with status: " + o.status + ".")
                            }, o.onerror = function() {
                                t._webAudio && (t._html5 = !0, t._webAudio = !1, t._sounds = [], delete c[e], t.load())
                            }, h(o)
                        }
                    },
                    h = function(t) {
                        try {
                            t.send()
                        } catch (e) {
                            t.onerror()
                        }
                    },
                    u = function(t, e) {
                        var n = function() {
                                e._emit("loaderror", null, "Decoding audio data failed.")
                            },
                            i = function(t) {
                                t && e._sounds.length > 0 ? (c[e._src] = t, p(e, t)) : n()
                            };
                        "undefined" != typeof Promise && 1 === o.ctx.decodeAudioData.length ? o.ctx.decodeAudioData(t).then(i).catch(n) : o.ctx.decodeAudioData(t, i, n)
                    },
                    p = function(t, e) {
                        e && !t._duration && (t._duration = e.duration), 0 === Object.keys(t._sprite).length && (t._sprite = {
                            __default: [0, 1e3 * t._duration]
                        }), "loaded" !== t._state && (t._state = "loaded", t._emit("load"), t._loadQueue())
                    },
                    d = function() {
                        if (o.usingWebAudio) {
                            try {
                                "undefined" != typeof AudioContext ? o.ctx = new AudioContext : "undefined" != typeof webkitAudioContext ? o.ctx = new webkitAudioContext : o.usingWebAudio = !1
                            } catch (t) {
                                o.usingWebAudio = !1
                            }
                            o.ctx || (o.usingWebAudio = !1);
                            var t = /iP(hone|od|ad)/.test(o._navigator && o._navigator.platform),
                                e = o._navigator && o._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
                                n = e ? parseInt(e[1], 10) : null;
                            if (t && n && n < 9) {
                                var i = /safari/.test(o._navigator && o._navigator.userAgent.toLowerCase());
                                (o._navigator && o._navigator.standalone && !i || o._navigator && !o._navigator.standalone && !i) && (o.usingWebAudio = !1)
                            }
                            o.usingWebAudio && (o.masterGain = void 0 === o.ctx.createGain ? o.ctx.createGainNode() : o.ctx.createGain(), o.masterGain.gain.setValueAtTime(o._muted ? 0 : 1, o.ctx.currentTime), o.masterGain.connect(o.ctx.destination)), o._setup()
                        }
                    };
                void 0 === (i = function() {
                    return {
                        Howler: o,
                        Howl: a
                    }
                }.apply(e, [])) || (t.exports = i), e.Howler = o, e.Howl = a, "undefined" != typeof window ? (window.HowlerGlobal = r, window.Howler = o, window.Howl = a, window.Sound = s) : void 0 !== n && (n.HowlerGlobal = r, n.Howler = o, n.Howl = a, n.Sound = s)
            }(),
            /*!
             *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
             *
             *  howler.js v2.1.2
             *  howlerjs.com
             *
             *  (c) 2013-2019, James Simpson of GoldFire Studios
             *  goldfirestudios.com
             *
             *  MIT License
             */
            function() {
                "use strict";
                HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(t) {
                    if (!this.ctx || !this.ctx.listener) return this;
                    for (var e = this._howls.length - 1; e >= 0; e--) this._howls[e].stereo(t);
                    return this
                }, HowlerGlobal.prototype.pos = function(t, e, n) {
                    return this.ctx && this.ctx.listener ? (e = "number" != typeof e ? this._pos[1] : e, n = "number" != typeof n ? this._pos[2] : n, "number" != typeof t ? this._pos : (this._pos = [t, e, n], void 0 !== this.ctx.listener.positionX ? (this.ctx.listener.positionX.setTargetAtTime(this._pos[0], Howler.ctx.currentTime, .1), this.ctx.listener.positionY.setTargetAtTime(this._pos[1], Howler.ctx.currentTime, .1), this.ctx.listener.positionZ.setTargetAtTime(this._pos[2], Howler.ctx.currentTime, .1)) : this.ctx.listener.setPosition(this._pos[0], this._pos[1], this._pos[2]), this)) : this
                }, HowlerGlobal.prototype.orientation = function(t, e, n, i, r, o) {
                    if (!this.ctx || !this.ctx.listener) return this;
                    var a = this._orientation;
                    return e = "number" != typeof e ? a[1] : e, n = "number" != typeof n ? a[2] : n, i = "number" != typeof i ? a[3] : i, r = "number" != typeof r ? a[4] : r, o = "number" != typeof o ? a[5] : o, "number" != typeof t ? a : (this._orientation = [t, e, n, i, r, o], void 0 !== this.ctx.listener.forwardX ? (this.ctx.listener.forwardX.setTargetAtTime(t, Howler.ctx.currentTime, .1), this.ctx.listener.forwardY.setTargetAtTime(e, Howler.ctx.currentTime, .1), this.ctx.listener.forwardZ.setTargetAtTime(n, Howler.ctx.currentTime, .1), this.ctx.listener.upX.setTargetAtTime(t, Howler.ctx.currentTime, .1), this.ctx.listener.upY.setTargetAtTime(e, Howler.ctx.currentTime, .1), this.ctx.listener.upZ.setTargetAtTime(n, Howler.ctx.currentTime, .1)) : this.ctx.listener.setOrientation(t, e, n, i, r, o), this)
                }, Howl.prototype.init = function(t) {
                    return function(e) {
                        return this._orientation = e.orientation || [1, 0, 0], this._stereo = e.stereo || null, this._pos = e.pos || null, this._pannerAttr = {
                            coneInnerAngle: void 0 !== e.coneInnerAngle ? e.coneInnerAngle : 360,
                            coneOuterAngle: void 0 !== e.coneOuterAngle ? e.coneOuterAngle : 360,
                            coneOuterGain: void 0 !== e.coneOuterGain ? e.coneOuterGain : 0,
                            distanceModel: void 0 !== e.distanceModel ? e.distanceModel : "inverse",
                            maxDistance: void 0 !== e.maxDistance ? e.maxDistance : 1e4,
                            panningModel: void 0 !== e.panningModel ? e.panningModel : "HRTF",
                            refDistance: void 0 !== e.refDistance ? e.refDistance : 1,
                            rolloffFactor: void 0 !== e.rolloffFactor ? e.rolloffFactor : 1
                        }, this._onstereo = e.onstereo ? [{
                            fn: e.onstereo
                        }] : [], this._onpos = e.onpos ? [{
                            fn: e.onpos
                        }] : [], this._onorientation = e.onorientation ? [{
                            fn: e.onorientation
                        }] : [], t.call(this, e)
                    }
                }(Howl.prototype.init), Howl.prototype.stereo = function(e, n) {
                    var i = this;
                    if (!i._webAudio) return i;
                    if ("loaded" !== i._state) return i._queue.push({
                        event: "stereo",
                        action: function() {
                            i.stereo(e, n)
                        }
                    }), i;
                    var r = void 0 === Howler.ctx.createStereoPanner ? "spatial" : "stereo";
                    if (void 0 === n) {
                        if ("number" != typeof e) return i._stereo;
                        i._stereo = e, i._pos = [e, 0, 0]
                    }
                    for (var o = i._getSoundIds(n), a = 0; a < o.length; a++) {
                        var s = i._soundById(o[a]);
                        if (s) {
                            if ("number" != typeof e) return s._stereo;
                            s._stereo = e, s._pos = [e, 0, 0], s._node && (s._pannerAttr.panningModel = "equalpower", s._panner && s._panner.pan || t(s, r), "spatial" === r ? void 0 !== s._panner.positionX ? (s._panner.positionX.setValueAtTime(e, Howler.ctx.currentTime), s._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), s._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : s._panner.setPosition(e, 0, 0) : s._panner.pan.setValueAtTime(e, Howler.ctx.currentTime)), i._emit("stereo", s._id)
                        }
                    }
                    return i
                }, Howl.prototype.pos = function(e, n, i, r) {
                    var o = this;
                    if (!o._webAudio) return o;
                    if ("loaded" !== o._state) return o._queue.push({
                        event: "pos",
                        action: function() {
                            o.pos(e, n, i, r)
                        }
                    }), o;
                    if (n = "number" != typeof n ? 0 : n, i = "number" != typeof i ? -.5 : i, void 0 === r) {
                        if ("number" != typeof e) return o._pos;
                        o._pos = [e, n, i]
                    }
                    for (var a = o._getSoundIds(r), s = 0; s < a.length; s++) {
                        var c = o._soundById(a[s]);
                        if (c) {
                            if ("number" != typeof e) return c._pos;
                            c._pos = [e, n, i], c._node && (c._panner && !c._panner.pan || t(c, "spatial"), void 0 !== c._panner.positionX ? (c._panner.positionX.setValueAtTime(e, Howler.ctx.currentTime), c._panner.positionY.setValueAtTime(n, Howler.ctx.currentTime), c._panner.positionZ.setValueAtTime(i, Howler.ctx.currentTime)) : c._panner.setPosition(e, n, i)), o._emit("pos", c._id)
                        }
                    }
                    return o
                }, Howl.prototype.orientation = function(e, n, i, r) {
                    var o = this;
                    if (!o._webAudio) return o;
                    if ("loaded" !== o._state) return o._queue.push({
                        event: "orientation",
                        action: function() {
                            o.orientation(e, n, i, r)
                        }
                    }), o;
                    if (n = "number" != typeof n ? o._orientation[1] : n, i = "number" != typeof i ? o._orientation[2] : i, void 0 === r) {
                        if ("number" != typeof e) return o._orientation;
                        o._orientation = [e, n, i]
                    }
                    for (var a = o._getSoundIds(r), s = 0; s < a.length; s++) {
                        var c = o._soundById(a[s]);
                        if (c) {
                            if ("number" != typeof e) return c._orientation;
                            c._orientation = [e, n, i], c._node && (c._panner || (c._pos || (c._pos = o._pos || [0, 0, -.5]), t(c, "spatial")), void 0 !== c._panner.orientationX ? (c._panner.orientationX.setValueAtTime(e, Howler.ctx.currentTime), c._panner.orientationY.setValueAtTime(n, Howler.ctx.currentTime), c._panner.orientationZ.setValueAtTime(i, Howler.ctx.currentTime)) : c._panner.setOrientation(e, n, i)), o._emit("orientation", c._id)
                        }
                    }
                    return o
                }, Howl.prototype.pannerAttr = function() {
                    var e, n, i, r = arguments;
                    if (!this._webAudio) return this;
                    if (0 === r.length) return this._pannerAttr;
                    if (1 === r.length) {
                        if ("object" != typeof r[0]) return (i = this._soundById(parseInt(r[0], 10))) ? i._pannerAttr : this._pannerAttr;
                        e = r[0], void 0 === n && (e.pannerAttr || (e.pannerAttr = {
                            coneInnerAngle: e.coneInnerAngle,
                            coneOuterAngle: e.coneOuterAngle,
                            coneOuterGain: e.coneOuterGain,
                            distanceModel: e.distanceModel,
                            maxDistance: e.maxDistance,
                            refDistance: e.refDistance,
                            rolloffFactor: e.rolloffFactor,
                            panningModel: e.panningModel
                        }), this._pannerAttr = {
                            coneInnerAngle: void 0 !== e.pannerAttr.coneInnerAngle ? e.pannerAttr.coneInnerAngle : this._coneInnerAngle,
                            coneOuterAngle: void 0 !== e.pannerAttr.coneOuterAngle ? e.pannerAttr.coneOuterAngle : this._coneOuterAngle,
                            coneOuterGain: void 0 !== e.pannerAttr.coneOuterGain ? e.pannerAttr.coneOuterGain : this._coneOuterGain,
                            distanceModel: void 0 !== e.pannerAttr.distanceModel ? e.pannerAttr.distanceModel : this._distanceModel,
                            maxDistance: void 0 !== e.pannerAttr.maxDistance ? e.pannerAttr.maxDistance : this._maxDistance,
                            refDistance: void 0 !== e.pannerAttr.refDistance ? e.pannerAttr.refDistance : this._refDistance,
                            rolloffFactor: void 0 !== e.pannerAttr.rolloffFactor ? e.pannerAttr.rolloffFactor : this._rolloffFactor,
                            panningModel: void 0 !== e.pannerAttr.panningModel ? e.pannerAttr.panningModel : this._panningModel
                        })
                    } else 2 === r.length && (e = r[0], n = parseInt(r[1], 10));
                    for (var o = this._getSoundIds(n), a = 0; a < o.length; a++)
                        if (i = this._soundById(o[a])) {
                            var s = i._pannerAttr;
                            s = {
                                coneInnerAngle: void 0 !== e.coneInnerAngle ? e.coneInnerAngle : s.coneInnerAngle,
                                coneOuterAngle: void 0 !== e.coneOuterAngle ? e.coneOuterAngle : s.coneOuterAngle,
                                coneOuterGain: void 0 !== e.coneOuterGain ? e.coneOuterGain : s.coneOuterGain,
                                distanceModel: void 0 !== e.distanceModel ? e.distanceModel : s.distanceModel,
                                maxDistance: void 0 !== e.maxDistance ? e.maxDistance : s.maxDistance,
                                refDistance: void 0 !== e.refDistance ? e.refDistance : s.refDistance,
                                rolloffFactor: void 0 !== e.rolloffFactor ? e.rolloffFactor : s.rolloffFactor,
                                panningModel: void 0 !== e.panningModel ? e.panningModel : s.panningModel
                            };
                            var c = i._panner;
                            c ? (c.coneInnerAngle = s.coneInnerAngle, c.coneOuterAngle = s.coneOuterAngle, c.coneOuterGain = s.coneOuterGain, c.distanceModel = s.distanceModel, c.maxDistance = s.maxDistance, c.refDistance = s.refDistance, c.rolloffFactor = s.rolloffFactor, c.panningModel = s.panningModel) : (i._pos || (i._pos = this._pos || [0, 0, -.5]), t(i, "spatial"))
                        } return this
                }, Sound.prototype.init = function(t) {
                    return function() {
                        var e = this._parent;
                        this._orientation = e._orientation, this._stereo = e._stereo, this._pos = e._pos, this._pannerAttr = e._pannerAttr, t.call(this), this._stereo ? e.stereo(this._stereo) : this._pos && e.pos(this._pos[0], this._pos[1], this._pos[2], this._id)
                    }
                }(Sound.prototype.init), Sound.prototype.reset = function(t) {
                    return function() {
                        var e = this._parent;
                        return this._orientation = e._orientation, this._stereo = e._stereo, this._pos = e._pos, this._pannerAttr = e._pannerAttr, this._stereo ? e.stereo(this._stereo) : this._pos ? e.pos(this._pos[0], this._pos[1], this._pos[2], this._id) : this._panner && (this._panner.disconnect(0), this._panner = void 0, e._refreshBuffer(this)), t.call(this)
                    }
                }(Sound.prototype.reset);
                var t = function(t, e) {
                    "spatial" === (e = e || "spatial") ? (t._panner = Howler.ctx.createPanner(), t._panner.coneInnerAngle = t._pannerAttr.coneInnerAngle, t._panner.coneOuterAngle = t._pannerAttr.coneOuterAngle, t._panner.coneOuterGain = t._pannerAttr.coneOuterGain, t._panner.distanceModel = t._pannerAttr.distanceModel, t._panner.maxDistance = t._pannerAttr.maxDistance, t._panner.refDistance = t._pannerAttr.refDistance, t._panner.rolloffFactor = t._pannerAttr.rolloffFactor, t._panner.panningModel = t._pannerAttr.panningModel, void 0 !== t._panner.positionX ? (t._panner.positionX.setValueAtTime(t._pos[0], Howler.ctx.currentTime), t._panner.positionY.setValueAtTime(t._pos[1], Howler.ctx.currentTime), t._panner.positionZ.setValueAtTime(t._pos[2], Howler.ctx.currentTime)) : t._panner.setPosition(t._pos[0], t._pos[1], t._pos[2]), void 0 !== t._panner.orientationX ? (t._panner.orientationX.setValueAtTime(t._orientation[0], Howler.ctx.currentTime), t._panner.orientationY.setValueAtTime(t._orientation[1], Howler.ctx.currentTime), t._panner.orientationZ.setValueAtTime(t._orientation[2], Howler.ctx.currentTime)) : t._panner.setOrientation(t._orientation[0], t._orientation[1], t._orientation[2])) : (t._panner = Howler.ctx.createStereoPanner(), t._panner.pan.setValueAtTime(t._stereo, Howler.ctx.currentTime)), t._panner.connect(t._node), t._paused || t._parent.pause(t._id, !0).play(t._id, !0)
                }
            }()
        }).call(this, n(27))
    }, function(t, e) {
        t.exports = function(t) {
            return null != t && "object" == typeof t
        }
    }, function(t, e, n) {
        var i = n(106);
        t.exports = function(t, e) {
            var n = t.__data__;
            return i(e) ? n["string" == typeof e ? "string" : "hash"] : n.map
        }
    }, function(t, e, n) {
        var i = n(16)(Object, "create");
        t.exports = i
    }, function(t, e, n) {
        var i = n(31),
            r = n(119),
            o = n(118),
            a = "[object Null]",
            s = "[object Undefined]",
            c = i ? i.toStringTag : void 0;
        t.exports = function(t) {
            return null == t ? void 0 === t ? s : a : c && c in Object(t) ? r(t) : o(t)
        }
    }, function(t, e, n) {
        var i = n(45);
        t.exports = function(t, e) {
            for (var n = t.length; n--;)
                if (i(t[n][0], e)) return n;
            return -1
        }
    }, function(t, e, n) {
        var i = n(130),
            r = n(129),
            o = n(128),
            a = n(127),
            s = n(126);

        function c(t) {
            var e = -1,
                n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n;) {
                var i = t[e];
                this.set(i[0], i[1])
            }
        }
        c.prototype.clear = i, c.prototype.delete = r, c.prototype.get = o, c.prototype.has = a, c.prototype.set = s, t.exports = c
    }, function(t, e) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || Function("return this")() || (0, eval)("this")
        } catch (t) {
            "object" == typeof window && (n = window)
        }
        t.exports = n
    }, , function(t, e, n) {
        "use strict";
        (function(t, i) {
            n.d(e, "a", function() {
                return r
            });
            /*!
             * VERSION: 2.1.3
             * DATE: 2019-05-17
             * UPDATES AND DOCS AT: http://greensock.com
             *
             * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
             * This work is subject to the terms at http://greensock.com/standard-license or for
             * Club GreenSock members, the software agreement that was issued with your membership.
             *
             * @author: Jack Doyle, jack@greensock.com
             */
            var r = "undefined" != typeof window ? window : void 0 !== t && t.exports && void 0 !== i ? i : {},
                o = (function(t) {
                    var e = {},
                        n = t.document,
                        i = t.GreenSockGlobals = t.GreenSockGlobals || t;
                    if (i.TweenLite) return i.TweenLite;
                    var r, o, a, s, c, l = function(t) {
                            var e, n = t.split("."),
                                r = i;
                            for (e = 0; e < n.length; e++) r[n[e]] = r = r[n[e]] || {};
                            return r
                        },
                        h = l("com.greensock"),
                        u = function(t) {
                            var e, n = [],
                                i = t.length;
                            for (e = 0; e !== i; n.push(t[e++]));
                            return n
                        },
                        p = function() {},
                        d = function() {
                            var t = Object.prototype.toString,
                                e = t.call([]);
                            return function(n) {
                                return null != n && (n instanceof Array || "object" == typeof n && !!n.push && t.call(n) === e)
                            }
                        }(),
                        f = {},
                        m = function(t, n, r, o) {
                            this.sc = f[t] ? f[t].sc : [], f[t] = this, this.gsClass = null, this.func = r;
                            var a = [];
                            this.check = function(s) {
                                for (var c, h, u, p, d = n.length, v = d; --d > -1;)(c = f[n[d]] || new m(n[d], [])).gsClass ? (a[d] = c.gsClass, v--) : s && c.sc.push(this);
                                if (0 === v && r)
                                    for (u = (h = ("com.greensock." + t).split(".")).pop(), p = l(h.join("."))[u] = this.gsClass = r.apply(r, a), o && (i[u] = e[u] = p), d = 0; d < this.sc.length; d++) this.sc[d].check()
                            }, this.check(!0)
                        },
                        v = t._gsDefine = function(t, e, n, i) {
                            return new m(t, e, n, i)
                        },
                        g = h._class = function(t, e, n) {
                            return e = e || function() {}, v(t, [], function() {
                                return e
                            }, n), e
                        };
                    v.globals = i;
                    var y = [0, 0, 1, 1],
                        _ = g("easing.Ease", function(t, e, n, i) {
                            this._func = t, this._type = n || 0, this._power = i || 0, this._params = e ? y.concat(e) : y
                        }, !0),
                        x = _.map = {},
                        b = _.register = function(t, e, n, i) {
                            for (var r, o, a, s, c = e.split(","), l = c.length, u = (n || "easeIn,easeOut,easeInOut").split(","); --l > -1;)
                                for (o = c[l], r = i ? g("easing." + o, null, !0) : h.easing[o] || {}, a = u.length; --a > -1;) s = u[a], x[o + "." + s] = x[s + o] = r[s] = t.getRatio ? t : t[s] || new t
                        };
                    for ((a = _.prototype)._calcEnd = !1, a.getRatio = function(t) {
                            if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                            var e = this._type,
                                n = this._power,
                                i = 1 === e ? 1 - t : 2 === e ? t : t < .5 ? 2 * t : 2 * (1 - t);
                            return 1 === n ? i *= i : 2 === n ? i *= i * i : 3 === n ? i *= i * i * i : 4 === n && (i *= i * i * i * i), 1 === e ? 1 - i : 2 === e ? i : t < .5 ? i / 2 : 1 - i / 2
                        }, o = (r = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; --o > -1;) a = r[o] + ",Power" + o, b(new _(null, null, 1, o), a, "easeOut", !0), b(new _(null, null, 2, o), a, "easeIn" + (0 === o ? ",easeNone" : "")), b(new _(null, null, 3, o), a, "easeInOut");
                    x.linear = h.easing.Linear.easeIn, x.swing = h.easing.Quad.easeInOut;
                    var w = g("events.EventDispatcher", function(t) {
                        this._listeners = {}, this._eventTarget = t || this
                    });
                    (a = w.prototype).addEventListener = function(t, e, n, i, r) {
                        r = r || 0;
                        var o, a, l = this._listeners[t],
                            h = 0;
                        for (this !== s || c || s.wake(), null == l && (this._listeners[t] = l = []), a = l.length; --a > -1;)(o = l[a]).c === e && o.s === n ? l.splice(a, 1) : 0 === h && o.pr < r && (h = a + 1);
                        l.splice(h, 0, {
                            c: e,
                            s: n,
                            up: i,
                            pr: r
                        })
                    }, a.removeEventListener = function(t, e) {
                        var n, i = this._listeners[t];
                        if (i)
                            for (n = i.length; --n > -1;)
                                if (i[n].c === e) return void i.splice(n, 1)
                    }, a.dispatchEvent = function(t) {
                        var e, n, i, r = this._listeners[t];
                        if (r)
                            for ((e = r.length) > 1 && (r = r.slice(0)), n = this._eventTarget; --e > -1;)(i = r[e]) && (i.up ? i.c.call(i.s || n, {
                                type: t,
                                target: n
                            }) : i.c.call(i.s || n))
                    };
                    var M = t.requestAnimationFrame,
                        T = t.cancelAnimationFrame,
                        E = Date.now || function() {
                            return (new Date).getTime()
                        },
                        S = E();
                    for (o = (r = ["ms", "moz", "webkit", "o"]).length; --o > -1 && !M;) M = t[r[o] + "RequestAnimationFrame"], T = t[r[o] + "CancelAnimationFrame"] || t[r[o] + "CancelRequestAnimationFrame"];
                    g("Ticker", function(t, e) {
                        var i, r, o, a, l, h = this,
                            u = E(),
                            d = !(!1 === e || !M) && "auto",
                            f = 500,
                            m = 33,
                            v = function(t) {
                                var e, n, s = E() - S;
                                s > f && (u += s - m), S += s, h.time = (S - u) / 1e3, e = h.time - l, (!i || e > 0 || !0 === t) && (h.frame++, l += e + (e >= a ? .004 : a - e), n = !0), !0 !== t && (o = r(v)), n && h.dispatchEvent("tick")
                            };
                        w.call(h), h.time = h.frame = 0, h.tick = function() {
                            v(!0)
                        }, h.lagSmoothing = function(t, e) {
                            if (!arguments.length) return f < 1e8;
                            f = t || 1e8, m = Math.min(e, f, 0)
                        }, h.sleep = function() {
                            null != o && (d && T ? T(o) : clearTimeout(o), r = p, o = null, h === s && (c = !1))
                        }, h.wake = function(t) {
                            null !== o ? h.sleep() : t ? u += -S + (S = E()) : h.frame > 10 && (S = E() - f + 5), r = 0 === i ? p : d && M ? M : function(t) {
                                return setTimeout(t, 1e3 * (l - h.time) + 1 | 0)
                            }, h === s && (c = !0), v(2)
                        }, h.fps = function(t) {
                            if (!arguments.length) return i;
                            a = 1 / ((i = t) || 60), l = this.time + a, h.wake()
                        }, h.useRAF = function(t) {
                            if (!arguments.length) return d;
                            h.sleep(), d = t, h.fps(i)
                        }, h.fps(t), setTimeout(function() {
                            "auto" === d && h.frame < 5 && "hidden" !== (n || {}).visibilityState && h.useRAF(!1)
                        }, 1500)
                    }), (a = h.Ticker.prototype = new h.events.EventDispatcher).constructor = h.Ticker;
                    var A = g("core.Animation", function(t, e) {
                        if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !!e.immediateRender, this.data = e.data, this._reversed = !!e.reversed, q) {
                            c || s.wake();
                            var n = this.vars.useFrames ? X : q;
                            n.add(this, n._time), this.vars.paused && this.paused(!0)
                        }
                    });
                    s = A.ticker = new h.Ticker, (a = A.prototype)._dirty = a._gc = a._initted = a._paused = !1, a._totalTime = a._time = 0, a._rawPrevTime = -1, a._next = a._last = a._onUpdate = a._timeline = a.timeline = null, a._paused = !1;
                    var P = function() {
                        c && E() - S > 2e3 && ("hidden" !== (n || {}).visibilityState || !s.lagSmoothing()) && s.wake();
                        var t = setTimeout(P, 2e3);
                        t.unref && t.unref()
                    };
                    P(), a.play = function(t, e) {
                        return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
                    }, a.pause = function(t, e) {
                        return null != t && this.seek(t, e), this.paused(!0)
                    }, a.resume = function(t, e) {
                        return null != t && this.seek(t, e), this.paused(!1)
                    }, a.seek = function(t, e) {
                        return this.totalTime(Number(t), !1 !== e)
                    }, a.restart = function(t, e) {
                        return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0)
                    }, a.reverse = function(t, e) {
                        return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
                    }, a.render = function(t, e, n) {}, a.invalidate = function() {
                        return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, !this._gc && this.timeline || this._enabled(!0), this
                    }, a.isActive = function() {
                        var t, e = this._timeline,
                            n = this._startTime;
                        return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= n && t < n + this.totalDuration() / this._timeScale - 1e-8
                    }, a._enabled = function(t, e) {
                        return c || s.wake(), this._gc = !t, this._active = this.isActive(), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
                    }, a._kill = function(t, e) {
                        return this._enabled(!1, !1)
                    }, a.kill = function(t, e) {
                        return this._kill(t, e), this
                    }, a._uncache = function(t) {
                        for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                        return this
                    }, a._swapSelfInParams = function(t) {
                        for (var e = t.length, n = t.concat(); --e > -1;) "{self}" === t[e] && (n[e] = this);
                        return n
                    }, a._callback = function(t) {
                        var e = this.vars,
                            n = e[t],
                            i = e[t + "Params"],
                            r = e[t + "Scope"] || e.callbackScope || this;
                        switch (i ? i.length : 0) {
                            case 0:
                                n.call(r);
                                break;
                            case 1:
                                n.call(r, i[0]);
                                break;
                            case 2:
                                n.call(r, i[0], i[1]);
                                break;
                            default:
                                n.apply(r, i)
                        }
                    }, a.eventCallback = function(t, e, n, i) {
                        if ("on" === (t || "").substr(0, 2)) {
                            var r = this.vars;
                            if (1 === arguments.length) return r[t];
                            null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = d(n) && -1 !== n.join("").indexOf("{self}") ? this._swapSelfInParams(n) : n, r[t + "Scope"] = i), "onUpdate" === t && (this._onUpdate = e)
                        }
                        return this
                    }, a.delay = function(t) {
                        return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
                    }, a.duration = function(t) {
                        return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
                    }, a.totalDuration = function(t) {
                        return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
                    }, a.time = function(t, e) {
                        return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
                    }, a.totalTime = function(t, e, n) {
                        if (c || s.wake(), !arguments.length) return this._totalTime;
                        if (this._timeline) {
                            if (t < 0 && !n && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                                this._dirty && this.totalDuration();
                                var i = this._totalDuration,
                                    r = this._timeline;
                                if (t > i && !n && (t = i), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? i - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                                    for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                            }
                            this._gc && this._enabled(!0, !1), this._totalTime === t && 0 !== this._duration || (O.length && Z(), this.render(t, e, !1), O.length && Z())
                        }
                        return this
                    }, a.progress = a.totalProgress = function(t, e) {
                        var n = this.duration();
                        return arguments.length ? this.totalTime(n * t, e) : n ? this._time / n : this.ratio
                    }, a.startTime = function(t) {
                        return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
                    }, a.endTime = function(t) {
                        return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
                    }, a.timeScale = function(t) {
                        if (!arguments.length) return this._timeScale;
                        var e, n;
                        for (t = t || 1e-8, this._timeline && this._timeline.smoothChildTiming && (n = (e = this._pauseTime) || 0 === e ? e : this._timeline.totalTime(), this._startTime = n - (n - this._startTime) * this._timeScale / t), this._timeScale = t, n = this.timeline; n && n.timeline;) n._dirty = !0, n.totalDuration(), n = n.timeline;
                        return this
                    }, a.reversed = function(t) {
                        return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
                    }, a.paused = function(t) {
                        if (!arguments.length) return this._paused;
                        var e, n, i = this._timeline;
                        return t != this._paused && i && (c || t || s.wake(), n = (e = i.rawTime()) - this._pauseTime, !t && i.smoothChildTiming && (this._startTime += n, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== n && this._initted && this.duration() && (e = i.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
                    };
                    var L = g("core.SimpleTimeline", function(t) {
                        A.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
                    });
                    (a = L.prototype = new A).constructor = L, a.kill()._gc = !1, a._first = a._last = a._recent = null, a._sortChildren = !1, a.add = a.insert = function(t, e, n, i) {
                        var r, o;
                        if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = this.rawTime() - (t._timeline.rawTime() - t._pauseTime)), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), r = this._last, this._sortChildren)
                            for (o = t._startTime; r && r._startTime > o;) r = r._prev;
                        return r ? (t._next = r._next, r._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = r, this._recent = t, this._timeline && this._uncache(!0), this
                    }, a._remove = function(t, e) {
                        return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
                    }, a.render = function(t, e, n) {
                        var i, r = this._first;
                        for (this._totalTime = this._time = this._rawPrevTime = t; r;) i = r._next, (r._active || t >= r._startTime && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, n) : r.render((t - r._startTime) * r._timeScale, e, n)), r = i
                    }, a.rawTime = function() {
                        return c || s.wake(), this._totalTime
                    };
                    var R = g("TweenLite", function(e, n, i) {
                            if (A.call(this, n, i), this.render = R.prototype.render, null == e) throw "Cannot tween a null target.";
                            this.target = e = "string" != typeof e ? e : R.selector(e) || e;
                            var r, o, a, s = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                                c = this.vars.overwrite;
                            if (this._overwrite = c = null == c ? W[R.defaultOverwrite] : "number" == typeof c ? c >> 0 : W[c], (s || e instanceof Array || e.push && d(e)) && "number" != typeof e[0])
                                for (this._targets = a = u(e), this._propLookup = [], this._siblings = [], r = 0; r < a.length; r++)(o = a[r]) ? "string" != typeof o ? o.length && o !== t && o[0] && (o[0] === t || o[0].nodeType && o[0].style && !o.nodeType) ? (a.splice(r--, 1), this._targets = a = a.concat(u(o))) : (this._siblings[r] = J(o, this, !1), 1 === c && this._siblings[r].length > 1 && Q(o, this, null, 1, this._siblings[r])) : "string" == typeof(o = a[r--] = R.selector(o)) && a.splice(r + 1, 1) : a.splice(r--, 1);
                            else this._propLookup = {}, this._siblings = J(e, this, !1), 1 === c && this._siblings.length > 1 && Q(e, this, null, 1, this._siblings);
                            (this.vars.immediateRender || 0 === n && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -1e-8, this.render(Math.min(0, -this._delay)))
                        }, !0),
                        C = function(e) {
                            return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
                        };
                    (a = R.prototype = new A).constructor = R, a.kill()._gc = !1, a.ratio = 0, a._firstPT = a._targets = a._overwrittenProps = a._startAt = null, a._notifyPluginsOfEnabled = a._lazy = !1, R.version = "2.1.3", R.defaultEase = a._ease = new _(null, null, 1, 1), R.defaultOverwrite = "auto", R.ticker = s, R.autoSleep = 120, R.lagSmoothing = function(t, e) {
                        s.lagSmoothing(t, e)
                    }, R.selector = t.$ || t.jQuery || function(e) {
                        var i = t.$ || t.jQuery;
                        return i ? (R.selector = i, i(e)) : (n || (n = t.document), n ? n.querySelectorAll ? n.querySelectorAll(e) : n.getElementById("#" === e.charAt(0) ? e.substr(1) : e) : e)
                    };
                    var O = [],
                        I = {},
                        D = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                        N = /[\+-]=-?[\.\d]/,
                        B = function(t) {
                            for (var e, n = this._firstPT; n;) e = n.blob ? 1 === t && null != this.end ? this.end : t ? this.join("") : this.start : n.c * t + n.s, n.m ? e = n.m.call(this._tween, e, this._target || n.t, this._tween) : e < 1e-6 && e > -1e-6 && !n.blob && (e = 0), n.f ? n.fp ? n.t[n.p](n.fp, e) : n.t[n.p](e) : n.t[n.p] = e, n = n._next
                        },
                        H = function(t) {
                            return (1e3 * t | 0) / 1e3 + ""
                        },
                        F = function(t, e, n, i) {
                            var r, o, a, s, c, l, h, u = [],
                                p = 0,
                                d = "",
                                f = 0;
                            for (u.start = t, u.end = e, t = u[0] = t + "", e = u[1] = e + "", n && (n(u), t = u[0], e = u[1]), u.length = 0, r = t.match(D) || [], o = e.match(D) || [], i && (i._next = null, i.blob = 1, u._firstPT = u._applyPT = i), c = o.length, s = 0; s < c; s++) h = o[s], d += (l = e.substr(p, e.indexOf(h, p) - p)) || !s ? l : ",", p += l.length, f ? f = (f + 1) % 5 : "rgba(" === l.substr(-5) && (f = 1), h === r[s] || r.length <= s ? d += h : (d && (u.push(d), d = ""), a = parseFloat(r[s]), u.push(a), u._firstPT = {
                                _next: u._firstPT,
                                t: u,
                                p: u.length - 1,
                                s: a,
                                c: ("=" === h.charAt(1) ? parseInt(h.charAt(0) + "1", 10) * parseFloat(h.substr(2)) : parseFloat(h) - a) || 0,
                                f: 0,
                                m: f && f < 4 ? Math.round : H
                            }), p += h.length;
                            return (d += e.substr(p)) && u.push(d), u.setRatio = B, N.test(e) && (u.end = null), u
                        },
                        k = function(t, e, n, i, r, o, a, s, c) {
                            "function" == typeof i && (i = i(c || 0, t));
                            var l = typeof t[e],
                                h = "function" !== l ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3),
                                u = "get" !== n ? n : h ? a ? t[h](a) : t[h]() : t[e],
                                p = "string" == typeof i && "=" === i.charAt(1),
                                d = {
                                    t: t,
                                    p: e,
                                    s: u,
                                    f: "function" === l,
                                    pg: 0,
                                    n: r || e,
                                    m: o ? "function" == typeof o ? o : Math.round : 0,
                                    pr: 0,
                                    c: p ? parseInt(i.charAt(0) + "1", 10) * parseFloat(i.substr(2)) : parseFloat(i) - u || 0
                                };
                            if (("number" != typeof u || "number" != typeof i && !p) && (a || isNaN(u) || !p && isNaN(i) || "boolean" == typeof u || "boolean" == typeof i ? (d.fp = a, d = {
                                    t: F(u, p ? parseFloat(d.s) + d.c + (d.s + "").replace(/[0-9\-\.]/g, "") : i, s || R.defaultStringFilter, d),
                                    p: "setRatio",
                                    s: 0,
                                    c: 1,
                                    f: 2,
                                    pg: 0,
                                    n: r || e,
                                    pr: 0,
                                    m: 0
                                }) : (d.s = parseFloat(u), p || (d.c = parseFloat(i) - d.s || 0))), d.c) return (d._next = this._firstPT) && (d._next._prev = d), this._firstPT = d, d
                        },
                        U = R._internals = {
                            isArray: d,
                            isSelector: C,
                            lazyTweens: O,
                            blobDif: F
                        },
                        z = R._plugins = {},
                        G = U.tweenLookup = {},
                        j = 0,
                        V = U.reservedProps = {
                            ease: 1,
                            delay: 1,
                            overwrite: 1,
                            onComplete: 1,
                            onCompleteParams: 1,
                            onCompleteScope: 1,
                            useFrames: 1,
                            runBackwards: 1,
                            startAt: 1,
                            onUpdate: 1,
                            onUpdateParams: 1,
                            onUpdateScope: 1,
                            onStart: 1,
                            onStartParams: 1,
                            onStartScope: 1,
                            onReverseComplete: 1,
                            onReverseCompleteParams: 1,
                            onReverseCompleteScope: 1,
                            onRepeat: 1,
                            onRepeatParams: 1,
                            onRepeatScope: 1,
                            easeParams: 1,
                            yoyo: 1,
                            immediateRender: 1,
                            repeat: 1,
                            repeatDelay: 1,
                            data: 1,
                            paused: 1,
                            reversed: 1,
                            autoCSS: 1,
                            lazy: 1,
                            onOverwrite: 1,
                            callbackScope: 1,
                            stringFilter: 1,
                            id: 1,
                            yoyoEase: 1,
                            stagger: 1
                        },
                        W = {
                            none: 0,
                            all: 1,
                            auto: 2,
                            concurrent: 3,
                            allOnStart: 4,
                            preexisting: 5,
                            true: 1,
                            false: 0
                        },
                        X = A._rootFramesTimeline = new L,
                        q = A._rootTimeline = new L,
                        Y = 30,
                        Z = U.lazyRender = function() {
                            var t, e, n = O.length;
                            for (I = {}, t = 0; t < n; t++)(e = O[t]) && !1 !== e._lazy && (e.render(e._lazy[0], e._lazy[1], !0), e._lazy = !1);
                            O.length = 0
                        };
                    q._startTime = s.time, X._startTime = s.frame, q._active = X._active = !0, setTimeout(Z, 1), A._updateRoot = R.render = function() {
                        var t, e, n;
                        if (O.length && Z(), q.render((s.time - q._startTime) * q._timeScale, !1, !1), X.render((s.frame - X._startTime) * X._timeScale, !1, !1), O.length && Z(), s.frame >= Y) {
                            for (n in Y = s.frame + (parseInt(R.autoSleep, 10) || 120), G) {
                                for (t = (e = G[n].tweens).length; --t > -1;) e[t]._gc && e.splice(t, 1);
                                0 === e.length && delete G[n]
                            }
                            if ((!(n = q._first) || n._paused) && R.autoSleep && !X._first && 1 === s._listeners.tick.length) {
                                for (; n && n._paused;) n = n._next;
                                n || s.sleep()
                            }
                        }
                    }, s.addEventListener("tick", A._updateRoot);
                    var J = function(t, e, n) {
                            var i, r, o = t._gsTweenID;
                            if (G[o || (t._gsTweenID = o = "t" + j++)] || (G[o] = {
                                    target: t,
                                    tweens: []
                                }), e && ((i = G[o].tweens)[r = i.length] = e, n))
                                for (; --r > -1;) i[r] === e && i.splice(r, 1);
                            return G[o].tweens
                        },
                        K = function(t, e, n, i) {
                            var r, o, a = t.vars.onOverwrite;
                            return a && (r = a(t, e, n, i)), (a = R.onOverwrite) && (o = a(t, e, n, i)), !1 !== r && !1 !== o
                        },
                        Q = function(t, e, n, i, r) {
                            var o, a, s, c;
                            if (1 === i || i >= 4) {
                                for (c = r.length, o = 0; o < c; o++)
                                    if ((s = r[o]) !== e) s._gc || s._kill(null, t, e) && (a = !0);
                                    else if (5 === i) break;
                                return a
                            }
                            var l, h = e._startTime + 1e-8,
                                u = [],
                                p = 0,
                                d = 0 === e._duration;
                            for (o = r.length; --o > -1;)(s = r[o]) === e || s._gc || s._paused || (s._timeline !== e._timeline ? (l = l || $(e, 0, d), 0 === $(s, l, d) && (u[p++] = s)) : s._startTime <= h && s._startTime + s.totalDuration() / s._timeScale > h && ((d || !s._initted) && h - s._startTime <= 2e-8 || (u[p++] = s)));
                            for (o = p; --o > -1;)
                                if (c = (s = u[o])._firstPT, 2 === i && s._kill(n, t, e) && (a = !0), 2 !== i || !s._firstPT && s._initted && c) {
                                    if (2 !== i && !K(s, e)) continue;
                                    s._enabled(!1, !1) && (a = !0)
                                } return a
                        },
                        $ = function(t, e, n) {
                            for (var i = t._timeline, r = i._timeScale, o = t._startTime; i._timeline;) {
                                if (o += i._startTime, r *= i._timeScale, i._paused) return -100;
                                i = i._timeline
                            }
                            return (o /= r) > e ? o - e : n && o === e || !t._initted && o - e < 2e-8 ? 1e-8 : (o += t.totalDuration() / t._timeScale / r) > e + 1e-8 ? 0 : o - e - 1e-8
                        };
                    a._init = function() {
                        var t, e, n, i, r, o, a = this.vars,
                            s = this._overwrittenProps,
                            c = this._duration,
                            l = !!a.immediateRender,
                            h = a.ease,
                            u = this._startAt;
                        if (a.startAt) {
                            for (i in u && (u.render(-1, !0), u.kill()), r = {}, a.startAt) r[i] = a.startAt[i];
                            if (r.data = "isStart", r.overwrite = !1, r.immediateRender = !0, r.lazy = l && !1 !== a.lazy, r.startAt = r.delay = null, r.onUpdate = a.onUpdate, r.onUpdateParams = a.onUpdateParams, r.onUpdateScope = a.onUpdateScope || a.callbackScope || this, this._startAt = R.to(this.target || {}, 0, r), l)
                                if (this._time > 0) this._startAt = null;
                                else if (0 !== c) return
                        } else if (a.runBackwards && 0 !== c)
                            if (u) u.render(-1, !0), u.kill(), this._startAt = null;
                            else {
                                for (i in 0 !== this._time && (l = !1), n = {}, a) V[i] && "autoCSS" !== i || (n[i] = a[i]);
                                if (n.overwrite = 0, n.data = "isFromStart", n.lazy = l && !1 !== a.lazy, n.immediateRender = l, this._startAt = R.to(this.target, 0, n), l) {
                                    if (0 === this._time) return
                                } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                            } if (this._ease = h = h ? h instanceof _ ? h : "function" == typeof h ? new _(h, a.easeParams) : x[h] || R.defaultEase : R.defaultEase, a.easeParams instanceof Array && h.config && (this._ease = h.config.apply(h, a.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                            for (o = this._targets.length, t = 0; t < o; t++) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], s ? s[t] : null, t) && (e = !0);
                        else e = this._initProps(this.target, this._propLookup, this._siblings, s, 0);
                        if (e && R._onPluginEvent("_onInitAllProps", this), s && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), a.runBackwards)
                            for (n = this._firstPT; n;) n.s += n.c, n.c = -n.c, n = n._next;
                        this._onUpdate = a.onUpdate, this._initted = !0
                    }, a._initProps = function(e, n, i, r, o) {
                        var a, s, c, l, h, u;
                        if (null == e) return !1;
                        for (a in I[e._gsTweenID] && Z(), this.vars.css || e.style && e !== t && e.nodeType && z.css && !1 !== this.vars.autoCSS && function(t, e) {
                                var n, i = {};
                                for (n in t) V[n] || n in e && "transform" !== n && "x" !== n && "y" !== n && "width" !== n && "height" !== n && "className" !== n && "border" !== n || !(!z[n] || z[n] && z[n]._autoCSS) || (i[n] = t[n], delete t[n]);
                                t.css = i
                            }(this.vars, e), this.vars)
                            if (u = this.vars[a], V[a]) u && (u instanceof Array || u.push && d(u)) && -1 !== u.join("").indexOf("{self}") && (this.vars[a] = u = this._swapSelfInParams(u, this));
                            else if (z[a] && (l = new z[a])._onInitTween(e, this.vars[a], this, o)) {
                            for (this._firstPT = h = {
                                    _next: this._firstPT,
                                    t: l,
                                    p: "setRatio",
                                    s: 0,
                                    c: 1,
                                    f: 1,
                                    n: a,
                                    pg: 1,
                                    pr: l._priority,
                                    m: 0
                                }, s = l._overwriteProps.length; --s > -1;) n[l._overwriteProps[s]] = this._firstPT;
                            (l._priority || l._onInitAllProps) && (c = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0), h._next && (h._next._prev = h)
                        } else n[a] = k.call(this, e, a, "get", u, a, 0, null, this.vars.stringFilter, o);
                        return r && this._kill(r, e) ? this._initProps(e, n, i, r, o) : this._overwrite > 1 && this._firstPT && i.length > 1 && Q(e, this, n, this._overwrite, i) ? (this._kill(n, e), this._initProps(e, n, i, r, o)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (I[e._gsTweenID] = !0), c)
                    }, a.render = function(t, e, n) {
                        var i, r, o, a, s = this._time,
                            c = this._duration,
                            l = this._rawPrevTime;
                        if (t >= c - 1e-8 && t >= 0) this._totalTime = this._time = c, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (i = !0, r = "onComplete", n = n || this._timeline.autoRemoveChildren), 0 === c && (this._initted || !this.vars.lazy || n) && (this._startTime === this._timeline._duration && (t = 0), (l < 0 || t <= 0 && t >= -1e-8 || 1e-8 === l && "isPause" !== this.data) && l !== t && (n = !0, l > 1e-8 && (r = "onReverseComplete")), this._rawPrevTime = a = !e || t || l === t ? t : 1e-8);
                        else if (t < 1e-8) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== s || 0 === c && l > 0) && (r = "onReverseComplete", i = this._reversed), t > -1e-8 ? t = 0 : t < 0 && (this._active = !1, 0 === c && (this._initted || !this.vars.lazy || n) && (l >= 0 && (1e-8 !== l || "isPause" !== this.data) && (n = !0), this._rawPrevTime = a = !e || t || l === t ? t : 1e-8)), (!this._initted || this._startAt && this._startAt.progress()) && (n = !0);
                        else if (this._totalTime = this._time = t, this._easeType) {
                            var h = t / c,
                                u = this._easeType,
                                p = this._easePower;
                            (1 === u || 3 === u && h >= .5) && (h = 1 - h), 3 === u && (h *= 2), 1 === p ? h *= h : 2 === p ? h *= h * h : 3 === p ? h *= h * h * h : 4 === p && (h *= h * h * h * h), this.ratio = 1 === u ? 1 - h : 2 === u ? h : t / c < .5 ? h / 2 : 1 - h / 2
                        } else this.ratio = this._ease.getRatio(t / c);
                        if (this._time !== s || n) {
                            if (!this._initted) {
                                if (this._init(), !this._initted || this._gc) return;
                                if (!n && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = s, this._rawPrevTime = l, O.push(this), void(this._lazy = [t, e]);
                                this._time && !i ? this.ratio = this._ease.getRatio(this._time / c) : i && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                            }
                            for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== s && t >= 0 && (this._active = !0), 0 === s && (this._startAt && (t >= 0 ? this._startAt.render(t, !0, n) : r || (r = "_dummyGS")), this.vars.onStart && (0 === this._time && 0 !== c || e || this._callback("onStart"))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
                            this._onUpdate && (t < 0 && this._startAt && -1e-4 !== t && this._startAt.render(t, !0, n), e || (this._time !== s || i || n) && this._callback("onUpdate")), r && (this._gc && !n || (t < 0 && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, !0, n), i && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === c && 1e-8 === this._rawPrevTime && 1e-8 !== a && (this._rawPrevTime = 0)))
                        }
                    }, a._kill = function(t, e, n) {
                        if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                        e = "string" != typeof e ? e || this._targets || this.target : R.selector(e) || e;
                        var i, r, o, a, s, c, l, h, u, p = n && this._time && n._startTime === this._startTime && this._timeline === n._timeline,
                            f = this._firstPT;
                        if ((d(e) || C(e)) && "number" != typeof e[0])
                            for (i = e.length; --i > -1;) this._kill(t, e[i], n) && (c = !0);
                        else {
                            if (this._targets) {
                                for (i = this._targets.length; --i > -1;)
                                    if (e === this._targets[i]) {
                                        s = this._propLookup[i] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[i] = t ? this._overwrittenProps[i] || {} : "all";
                                        break
                                    }
                            } else {
                                if (e !== this.target) return !1;
                                s = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                            }
                            if (s) {
                                if (l = t || s, h = t !== r && "all" !== r && t !== s && ("object" != typeof t || !t._tempKill), n && (R.onOverwrite || this.vars.onOverwrite)) {
                                    for (o in l) s[o] && (u || (u = []), u.push(o));
                                    if ((u || !t) && !K(this, n, e, u)) return !1
                                }
                                for (o in l)(a = s[o]) && (p && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s, c = !0), a.pg && a.t._kill(l) && (c = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete s[o]), h && (r[o] = 1);
                                !this._firstPT && this._initted && f && this._enabled(!1, !1)
                            }
                        }
                        return c
                    }, a.invalidate = function() {
                        this._notifyPluginsOfEnabled && R._onPluginEvent("_onDisable", this);
                        var t = this._time;
                        return this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], A.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -1e-8, this.render(t, !1, !1 !== this.vars.lazy)), this
                    }, a._enabled = function(t, e) {
                        if (c || s.wake(), t && this._gc) {
                            var n, i = this._targets;
                            if (i)
                                for (n = i.length; --n > -1;) this._siblings[n] = J(i[n], this, !0);
                            else this._siblings = J(this.target, this, !0)
                        }
                        return A.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && R._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
                    }, R.to = function(t, e, n) {
                        return new R(t, e, n)
                    }, R.from = function(t, e, n) {
                        return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, new R(t, e, n)
                    }, R.fromTo = function(t, e, n, i) {
                        return i.startAt = n, i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender, new R(t, e, i)
                    }, R.delayedCall = function(t, e, n, i, r) {
                        return new R(e, 0, {
                            delay: t,
                            onComplete: e,
                            onCompleteParams: n,
                            callbackScope: i,
                            onReverseComplete: e,
                            onReverseCompleteParams: n,
                            immediateRender: !1,
                            lazy: !1,
                            useFrames: r,
                            overwrite: 0
                        })
                    }, R.set = function(t, e) {
                        return new R(t, 0, e)
                    }, R.getTweensOf = function(t, e) {
                        if (null == t) return [];
                        var n, i, r, o;
                        if (t = "string" != typeof t ? t : R.selector(t) || t, (d(t) || C(t)) && "number" != typeof t[0]) {
                            for (n = t.length, i = []; --n > -1;) i = i.concat(R.getTweensOf(t[n], e));
                            for (n = i.length; --n > -1;)
                                for (o = i[n], r = n; --r > -1;) o === i[r] && i.splice(n, 1)
                        } else if (t._gsTweenID)
                            for (n = (i = J(t).concat()).length; --n > -1;)(i[n]._gc || e && !i[n].isActive()) && i.splice(n, 1);
                        return i || []
                    }, R.killTweensOf = R.killDelayedCallsTo = function(t, e, n) {
                        "object" == typeof e && (n = e, e = !1);
                        for (var i = R.getTweensOf(t, e), r = i.length; --r > -1;) i[r]._kill(n, t)
                    };
                    var tt = g("plugins.TweenPlugin", function(t, e) {
                        this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = tt.prototype
                    }, !0);
                    if (a = tt.prototype, tt.version = "1.19.0", tt.API = 2, a._firstPT = null, a._addTween = k, a.setRatio = B, a._kill = function(t) {
                            var e, n = this._overwriteProps,
                                i = this._firstPT;
                            if (null != t[this._propName]) this._overwriteProps = [];
                            else
                                for (e = n.length; --e > -1;) null != t[n[e]] && n.splice(e, 1);
                            for (; i;) null != t[i.n] && (i._next && (i._next._prev = i._prev), i._prev ? (i._prev._next = i._next, i._prev = null) : this._firstPT === i && (this._firstPT = i._next)), i = i._next;
                            return !1
                        }, a._mod = a._roundProps = function(t) {
                            for (var e, n = this._firstPT; n;)(e = t[this._propName] || null != n.n && t[n.n.split(this._propName + "_").join("")]) && "function" == typeof e && (2 === n.f ? n.t._applyPT.m = e : n.m = e), n = n._next
                        }, R._onPluginEvent = function(t, e) {
                            var n, i, r, o, a, s = e._firstPT;
                            if ("_onInitAllProps" === t) {
                                for (; s;) {
                                    for (a = s._next, i = r; i && i.pr > s.pr;) i = i._next;
                                    (s._prev = i ? i._prev : o) ? s._prev._next = s: r = s, (s._next = i) ? i._prev = s : o = s, s = a
                                }
                                s = e._firstPT = r
                            }
                            for (; s;) s.pg && "function" == typeof s.t[t] && s.t[t]() && (n = !0), s = s._next;
                            return n
                        }, tt.activate = function(t) {
                            for (var e = t.length; --e > -1;) t[e].API === tt.API && (z[(new t[e])._propName] = t[e]);
                            return !0
                        }, v.plugin = function(t) {
                            if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                            var e, n = t.propName,
                                i = t.priority || 0,
                                r = t.overwriteProps,
                                o = {
                                    init: "_onInitTween",
                                    set: "setRatio",
                                    kill: "_kill",
                                    round: "_mod",
                                    mod: "_mod",
                                    initAll: "_onInitAllProps"
                                },
                                a = g("plugins." + n.charAt(0).toUpperCase() + n.substr(1) + "Plugin", function() {
                                    tt.call(this, n, i), this._overwriteProps = r || []
                                }, !0 === t.global),
                                s = a.prototype = new tt(n);
                            for (e in s.constructor = a, a.API = t.API, o) "function" == typeof t[e] && (s[o[e]] = t[e]);
                            return a.version = t.version, tt.activate([a]), a
                        }, r = t._gsQueue) {
                        for (o = 0; o < r.length; o++) r[o]();
                        for (a in f) f[a].func || t.console.log("GSAP encountered missing dependency: " + a)
                    }
                    c = !1
                }(r), r.GreenSockGlobals),
                a = o.com.greensock;
            a.core.SimpleTimeline, a.core.Animation, o.Ease, o.Linear, o.Power1, o.Power2, o.Power3, o.Power4, o.TweenPlugin, a.events.EventDispatcher
        }).call(this, n(134)(t), n(27))
    }, function(t, e) {
        var n = Array.isArray;
        t.exports = n
    }, function(t, e, n) {
        var i = n(14).Symbol;
        t.exports = i
    }, function(t, e, n) {
        var i = n(16)(n(14), "Map");
        t.exports = i
    }, function(t, e) {
        /*!
         * verge 1.10.2+201705300050
         * http://npm.im/verge
         * MIT Ryan Van Etten
         */
        ! function(e, n, i) {
            void 0 !== t && t.exports ? t.exports = i() : e.verge = i()
        }(this, 0, function() {
            var t = {},
                e = "undefined" != typeof window && window,
                n = "undefined" != typeof document && document,
                i = n && n.documentElement,
                r = e.matchMedia || e.msMatchMedia,
                o = r ? function(t) {
                    return !!r.call(e, t).matches
                } : function() {
                    return !1
                },
                a = t.viewportW = function() {
                    var t = i.clientWidth,
                        n = e.innerWidth;
                    return t < n ? n : t
                },
                s = t.viewportH = function() {
                    var t = i.clientHeight,
                        n = e.innerHeight;
                    return t < n ? n : t
                };

            function c() {
                return {
                    width: a(),
                    height: s()
                }
            }

            function l(t, e) {
                return !(!(t = t && !t.nodeType ? t[0] : t) || 1 !== t.nodeType) && function(t, e) {
                    var n = {};
                    return e = +e || 0, n.width = (n.right = t.right + e) - (n.left = t.left - e), n.height = (n.bottom = t.bottom + e) - (n.top = t.top - e), n
                }(t.getBoundingClientRect(), e)
            }
            return t.mq = o, t.matchMedia = r ? function() {
                return r.apply(e, arguments)
            } : function() {
                return {}
            }, t.viewport = c, t.scrollX = function() {
                return e.pageXOffset || i.scrollLeft
            }, t.scrollY = function() {
                return e.pageYOffset || i.scrollTop
            }, t.rectangle = l, t.aspect = function(t) {
                var e = (t = null == t ? c() : 1 === t.nodeType ? l(t) : t).height,
                    n = t.width;
                return e = "function" == typeof e ? e.call(t) : e, (n = "function" == typeof n ? n.call(t) : n) / e
            }, t.inX = function(t, e) {
                var n = l(t, e);
                return !!n && n.right >= 0 && n.left <= a()
            }, t.inY = function(t, e) {
                var n = l(t, e);
                return !!n && n.bottom >= 0 && n.top <= s()
            }, t.inViewport = function(t, e) {
                var n = l(t, e);
                return !!n && n.bottom >= 0 && n.right >= 0 && n.top <= s() && n.left <= a()
            }, t
        })
    }, function(t, e, n) {
        "use strict";
        /*!
         * resource-loader - v3.0.1
         * https://github.com/pixijs/pixi-sound
         * Compiled Tue, 02 Jul 2019 14:06:18 UTC
         *
         * resource-loader is licensed under the MIT license.
         * http://www.opensource.org/licenses/mit-license
         */
        function i(t) {
            return t && "object" == typeof t && "default" in t ? t.default : t
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = i(n(164)),
            o = i(n(163));

        function a() {}

        function s(t, e, n, i) {
            var r = 0,
                o = t.length;
            ! function a(s) {
                s || r === o ? n && n(s) : i ? setTimeout(function() {
                    e(t[r++], a)
                }, 1) : e(t[r++], a)
            }()
        }

        function c(t) {
            return function() {
                if (null === t) throw new Error("Callback was already called.");
                var e = t;
                t = null, e.apply(this, arguments)
            }
        }

        function l(t, e) {
            if (null == e) e = 1;
            else if (0 === e) throw new Error("Concurrency must not be zero");
            var n = 0,
                i = {
                    _tasks: [],
                    concurrency: e,
                    saturated: a,
                    unsaturated: a,
                    buffer: e / 4,
                    empty: a,
                    drain: a,
                    error: a,
                    started: !1,
                    paused: !1,
                    push: function(t, e) {
                        r(t, !1, e)
                    },
                    kill: function() {
                        n = 0, i.drain = a, i.started = !1, i._tasks = []
                    },
                    unshift: function(t, e) {
                        r(t, !0, e)
                    },
                    process: function() {
                        for (; !i.paused && n < i.concurrency && i._tasks.length;) {
                            var e = i._tasks.shift();
                            0 === i._tasks.length && i.empty(), (n += 1) === i.concurrency && i.saturated(), t(e.data, c(o(e)))
                        }
                    },
                    length: function() {
                        return i._tasks.length
                    },
                    running: function() {
                        return n
                    },
                    idle: function() {
                        return i._tasks.length + n === 0
                    },
                    pause: function() {
                        !0 !== i.paused && (i.paused = !0)
                    },
                    resume: function() {
                        if (!1 !== i.paused) {
                            i.paused = !1;
                            for (var t = 1; t <= i.concurrency; t++) i.process()
                        }
                    }
                };

            function r(t, e, n) {
                if (null != n && "function" != typeof n) throw new Error("task callback must be a function");
                if (i.started = !0, null == t && i.idle()) setTimeout(function() {
                    return i.drain()
                }, 1);
                else {
                    var r = {
                        data: t,
                        callback: "function" == typeof n ? n : a
                    };
                    e ? i._tasks.unshift(r) : i._tasks.push(r), setTimeout(function() {
                        return i.process()
                    }, 1)
                }
            }

            function o(t) {
                return function() {
                    n -= 1, t.callback.apply(t, arguments), null != arguments[0] && i.error(arguments[0], t.data), n <= i.concurrency - i.buffer && i.unsaturated(), i.idle() && i.drain(), i.process()
                }
            }
            return i
        }
        var h = {
                eachSeries: s,
                queue: l
            },
            u = {};

        function p(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function d(t, e, n) {
            return e && p(t.prototype, e), n && p(t, n), t
        }
        var f = !(!window.XDomainRequest || "withCredentials" in new XMLHttpRequest),
            m = null;

        function v() {}
        var g = function() {
            function t(e, n, i) {
                if ("string" != typeof e || "string" != typeof n) throw new Error("Both name and url are required for constructing a resource.");
                i = i || {}, this._flags = 0, this._setFlag(t.STATUS_FLAGS.DATA_URL, 0 === n.indexOf("data:")), this.name = e, this.url = n, this.extension = this._getExtension(), this.data = null, this.crossOrigin = !0 === i.crossOrigin ? "anonymous" : i.crossOrigin, this.timeout = i.timeout || 0, this.loadType = i.loadType || this._determineLoadType(), this.xhrType = i.xhrType, this.metadata = i.metadata || {}, this.error = null, this.xhr = null, this.children = [], this.type = t.TYPE.UNKNOWN, this.progressChunk = 0, this._dequeue = v, this._onLoadBinding = null, this._elementTimer = 0, this._boundComplete = this.complete.bind(this), this._boundOnError = this._onError.bind(this), this._boundOnProgress = this._onProgress.bind(this), this._boundOnTimeout = this._onTimeout.bind(this), this._boundXhrOnError = this._xhrOnError.bind(this), this._boundXhrOnTimeout = this._xhrOnTimeout.bind(this), this._boundXhrOnAbort = this._xhrOnAbort.bind(this), this._boundXhrOnLoad = this._xhrOnLoad.bind(this), this.onStart = new o, this.onProgress = new o, this.onComplete = new o, this.onAfterMiddleware = new o
            }
            t.setExtensionLoadType = function(e, n) {
                y(t._loadTypeMap, e, n)
            }, t.setExtensionXhrType = function(e, n) {
                y(t._xhrTypeMap, e, n)
            };
            var e = t.prototype;
            return e.complete = function() {
                this._clearEvents(), this._finish()
            }, e.abort = function(e) {
                if (!this.error) {
                    if (this.error = new Error(e), this._clearEvents(), this.xhr) this.xhr.abort();
                    else if (this.xdr) this.xdr.abort();
                    else if (this.data)
                        if (this.data.src) this.data.src = t.EMPTY_GIF;
                        else
                            for (; this.data.firstChild;) this.data.removeChild(this.data.firstChild);
                    this._finish()
                }
            }, e.load = function(e) {
                var n = this;
                if (!this.isLoading)
                    if (this.isComplete) e && setTimeout(function() {
                        return e(n)
                    }, 1);
                    else switch (e && this.onComplete.once(e), this._setFlag(t.STATUS_FLAGS.LOADING, !0), this.onStart.dispatch(this), !1 !== this.crossOrigin && "string" == typeof this.crossOrigin || (this.crossOrigin = this._determineCrossOrigin(this.url)), this.loadType) {
                        case t.LOAD_TYPE.IMAGE:
                            this.type = t.TYPE.IMAGE, this._loadElement("image");
                            break;
                        case t.LOAD_TYPE.AUDIO:
                            this.type = t.TYPE.AUDIO, this._loadSourceElement("audio");
                            break;
                        case t.LOAD_TYPE.VIDEO:
                            this.type = t.TYPE.VIDEO, this._loadSourceElement("video");
                            break;
                        case t.LOAD_TYPE.XHR:
                        default:
                            f && this.crossOrigin ? this._loadXdr() : this._loadXhr()
                    }
            }, e._hasFlag = function(t) {
                return 0 != (this._flags & t)
            }, e._setFlag = function(t, e) {
                this._flags = e ? this._flags | t : this._flags & ~t
            }, e._clearEvents = function() {
                clearTimeout(this._elementTimer), this.data && this.data.removeEventListener && (this.data.removeEventListener("error", this._boundOnError, !1), this.data.removeEventListener("load", this._boundComplete, !1), this.data.removeEventListener("progress", this._boundOnProgress, !1), this.data.removeEventListener("canplaythrough", this._boundComplete, !1)), this.xhr && (this.xhr.removeEventListener ? (this.xhr.removeEventListener("error", this._boundXhrOnError, !1), this.xhr.removeEventListener("timeout", this._boundXhrOnTimeout, !1), this.xhr.removeEventListener("abort", this._boundXhrOnAbort, !1), this.xhr.removeEventListener("progress", this._boundOnProgress, !1), this.xhr.removeEventListener("load", this._boundXhrOnLoad, !1)) : (this.xhr.onerror = null, this.xhr.ontimeout = null, this.xhr.onprogress = null, this.xhr.onload = null))
            }, e._finish = function() {
                if (this.isComplete) throw new Error("Complete called again for an already completed resource.");
                this._setFlag(t.STATUS_FLAGS.COMPLETE, !0), this._setFlag(t.STATUS_FLAGS.LOADING, !1), this.onComplete.dispatch(this)
            }, e._loadElement = function(t) {
                this.metadata.loadElement ? this.data = this.metadata.loadElement : "image" === t && void 0 !== window.Image ? this.data = new Image : this.data = document.createElement(t), this.crossOrigin && (this.data.crossOrigin = this.crossOrigin), this.metadata.skipSource || (this.data.src = this.url), this.data.addEventListener("error", this._boundOnError, !1), this.data.addEventListener("load", this._boundComplete, !1), this.data.addEventListener("progress", this._boundOnProgress, !1), this.timeout && (this._elementTimer = setTimeout(this._boundOnTimeout, this.timeout))
            }, e._loadSourceElement = function(t) {
                if (this.metadata.loadElement ? this.data = this.metadata.loadElement : "audio" === t && void 0 !== window.Audio ? this.data = new Audio : this.data = document.createElement(t), null !== this.data) {
                    if (this.crossOrigin && (this.data.crossOrigin = this.crossOrigin), !this.metadata.skipSource)
                        if (navigator.isCocoonJS) this.data.src = Array.isArray(this.url) ? this.url[0] : this.url;
                        else if (Array.isArray(this.url))
                        for (var e = this.metadata.mimeType, n = 0; n < this.url.length; ++n) this.data.appendChild(this._createSource(t, this.url[n], Array.isArray(e) ? e[n] : e));
                    else {
                        var i = this.metadata.mimeType;
                        this.data.appendChild(this._createSource(t, this.url, Array.isArray(i) ? i[0] : i))
                    }
                    this.data.addEventListener("error", this._boundOnError, !1), this.data.addEventListener("load", this._boundComplete, !1), this.data.addEventListener("progress", this._boundOnProgress, !1), this.data.addEventListener("canplaythrough", this._boundComplete, !1), this.data.load(), this.timeout && (this._elementTimer = setTimeout(this._boundOnTimeout, this.timeout))
                } else this.abort("Unsupported element: " + t)
            }, e._loadXhr = function() {
                "string" != typeof this.xhrType && (this.xhrType = this._determineXhrType());
                var e = this.xhr = new XMLHttpRequest;
                e.open("GET", this.url, !0), e.timeout = this.timeout, this.xhrType === t.XHR_RESPONSE_TYPE.JSON || this.xhrType === t.XHR_RESPONSE_TYPE.DOCUMENT ? e.responseType = t.XHR_RESPONSE_TYPE.TEXT : e.responseType = this.xhrType, e.addEventListener("error", this._boundXhrOnError, !1), e.addEventListener("timeout", this._boundXhrOnTimeout, !1), e.addEventListener("abort", this._boundXhrOnAbort, !1), e.addEventListener("progress", this._boundOnProgress, !1), e.addEventListener("load", this._boundXhrOnLoad, !1), e.send()
            }, e._loadXdr = function() {
                "string" != typeof this.xhrType && (this.xhrType = this._determineXhrType());
                var t = this.xhr = new XDomainRequest;
                t.timeout = this.timeout || 5e3, t.onerror = this._boundXhrOnError, t.ontimeout = this._boundXhrOnTimeout, t.onprogress = this._boundOnProgress, t.onload = this._boundXhrOnLoad, t.open("GET", this.url, !0), setTimeout(function() {
                    return t.send()
                }, 1)
            }, e._createSource = function(t, e, n) {
                n || (n = t + "/" + this._getExtension(e));
                var i = document.createElement("source");
                return i.src = e, i.type = n, i
            }, e._onError = function(t) {
                this.abort("Failed to load element using: " + t.target.nodeName)
            }, e._onProgress = function(t) {
                t && t.lengthComputable && this.onProgress.dispatch(this, t.loaded / t.total)
            }, e._onTimeout = function() {
                this.abort("Load timed out.")
            }, e._xhrOnError = function() {
                var t = this.xhr;
                this.abort(_(t) + " Request failed. Status: " + t.status + ', text: "' + t.statusText + '"')
            }, e._xhrOnTimeout = function() {
                var t = this.xhr;
                this.abort(_(t) + " Request timed out.")
            }, e._xhrOnAbort = function() {
                var t = this.xhr;
                this.abort(_(t) + " Request was aborted by the user.")
            }, e._xhrOnLoad = function() {
                var e = this.xhr,
                    n = "",
                    i = void 0 === e.status ? 200 : e.status;
                if ("" !== e.responseType && "text" !== e.responseType && void 0 !== e.responseType || (n = e.responseText), 0 === i && (n.length > 0 || e.responseType === t.XHR_RESPONSE_TYPE.BUFFER) ? i = 200 : 1223 === i && (i = 204), 2 === (i / 100 | 0)) {
                    if (this.xhrType === t.XHR_RESPONSE_TYPE.TEXT) this.data = n, this.type = t.TYPE.TEXT;
                    else if (this.xhrType === t.XHR_RESPONSE_TYPE.JSON) try {
                        this.data = JSON.parse(n), this.type = t.TYPE.JSON
                    } catch (t) {
                        return void this.abort("Error trying to parse loaded json: " + t)
                    } else if (this.xhrType === t.XHR_RESPONSE_TYPE.DOCUMENT) try {
                        if (window.DOMParser) {
                            var r = new DOMParser;
                            this.data = r.parseFromString(n, "text/xml")
                        } else {
                            var o = document.createElement("div");
                            o.innerHTML = n, this.data = o
                        }
                        this.type = t.TYPE.XML
                    } catch (t) {
                        return void this.abort("Error trying to parse loaded xml: " + t)
                    } else this.data = e.response || n;
                    this.complete()
                } else this.abort("[" + e.status + "] " + e.statusText + ": " + e.responseURL)
            }, e._determineCrossOrigin = function(t, e) {
                if (0 === t.indexOf("data:")) return "";
                if (window.origin !== window.location.origin) return "anonymous";
                e = e || window.location, m || (m = document.createElement("a")), m.href = t;
                var n = !(t = r(m.href, {
                        strictMode: !0
                    })).port && "" === e.port || t.port === e.port,
                    i = t.protocol ? t.protocol + ":" : "";
                return t.host === e.hostname && n && i === e.protocol ? "" : "anonymous"
            }, e._determineXhrType = function() {
                return t._xhrTypeMap[this.extension] || t.XHR_RESPONSE_TYPE.TEXT
            }, e._determineLoadType = function() {
                return t._loadTypeMap[this.extension] || t.LOAD_TYPE.XHR
            }, e._getExtension = function() {
                var t = this.url,
                    e = "";
                if (this.isDataUrl) {
                    var n = t.indexOf("/");
                    e = t.substring(n + 1, t.indexOf(";", n))
                } else {
                    var i = t.indexOf("?"),
                        r = t.indexOf("#"),
                        o = Math.min(i > -1 ? i : t.length, r > -1 ? r : t.length);
                    e = (t = t.substring(0, o)).substring(t.lastIndexOf(".") + 1)
                }
                return e.toLowerCase()
            }, e._getMimeFromXhrType = function(e) {
                switch (e) {
                    case t.XHR_RESPONSE_TYPE.BUFFER:
                        return "application/octet-binary";
                    case t.XHR_RESPONSE_TYPE.BLOB:
                        return "application/blob";
                    case t.XHR_RESPONSE_TYPE.DOCUMENT:
                        return "application/xml";
                    case t.XHR_RESPONSE_TYPE.JSON:
                        return "application/json";
                    case t.XHR_RESPONSE_TYPE.DEFAULT:
                    case t.XHR_RESPONSE_TYPE.TEXT:
                    default:
                        return "text/plain"
                }
            }, d(t, [{
                key: "isDataUrl",
                get: function() {
                    return this._hasFlag(t.STATUS_FLAGS.DATA_URL)
                }
            }, {
                key: "isComplete",
                get: function() {
                    return this._hasFlag(t.STATUS_FLAGS.COMPLETE)
                }
            }, {
                key: "isLoading",
                get: function() {
                    return this._hasFlag(t.STATUS_FLAGS.LOADING)
                }
            }]), t
        }();

        function y(t, e, n) {
            e && 0 === e.indexOf(".") && (e = e.substring(1)), e && (t[e] = n)
        }

        function _(t) {
            return t.toString().replace("object ", "")
        }
        g.STATUS_FLAGS = {
            NONE: 0,
            DATA_URL: 1,
            COMPLETE: 2,
            LOADING: 4
        }, g.TYPE = {
            UNKNOWN: 0,
            JSON: 1,
            XML: 2,
            IMAGE: 3,
            AUDIO: 4,
            VIDEO: 5,
            TEXT: 6
        }, g.LOAD_TYPE = {
            XHR: 1,
            IMAGE: 2,
            AUDIO: 3,
            VIDEO: 4
        }, g.XHR_RESPONSE_TYPE = {
            DEFAULT: "text",
            BUFFER: "arraybuffer",
            BLOB: "blob",
            DOCUMENT: "document",
            JSON: "json",
            TEXT: "text"
        }, g._loadTypeMap = {
            gif: g.LOAD_TYPE.IMAGE,
            png: g.LOAD_TYPE.IMAGE,
            bmp: g.LOAD_TYPE.IMAGE,
            jpg: g.LOAD_TYPE.IMAGE,
            jpeg: g.LOAD_TYPE.IMAGE,
            tif: g.LOAD_TYPE.IMAGE,
            tiff: g.LOAD_TYPE.IMAGE,
            webp: g.LOAD_TYPE.IMAGE,
            tga: g.LOAD_TYPE.IMAGE,
            svg: g.LOAD_TYPE.IMAGE,
            "svg+xml": g.LOAD_TYPE.IMAGE,
            mp3: g.LOAD_TYPE.AUDIO,
            ogg: g.LOAD_TYPE.AUDIO,
            wav: g.LOAD_TYPE.AUDIO,
            mp4: g.LOAD_TYPE.VIDEO,
            webm: g.LOAD_TYPE.VIDEO
        }, g._xhrTypeMap = {
            xhtml: g.XHR_RESPONSE_TYPE.DOCUMENT,
            html: g.XHR_RESPONSE_TYPE.DOCUMENT,
            htm: g.XHR_RESPONSE_TYPE.DOCUMENT,
            xml: g.XHR_RESPONSE_TYPE.DOCUMENT,
            tmx: g.XHR_RESPONSE_TYPE.DOCUMENT,
            svg: g.XHR_RESPONSE_TYPE.DOCUMENT,
            tsx: g.XHR_RESPONSE_TYPE.DOCUMENT,
            gif: g.XHR_RESPONSE_TYPE.BLOB,
            png: g.XHR_RESPONSE_TYPE.BLOB,
            bmp: g.XHR_RESPONSE_TYPE.BLOB,
            jpg: g.XHR_RESPONSE_TYPE.BLOB,
            jpeg: g.XHR_RESPONSE_TYPE.BLOB,
            tif: g.XHR_RESPONSE_TYPE.BLOB,
            tiff: g.XHR_RESPONSE_TYPE.BLOB,
            webp: g.XHR_RESPONSE_TYPE.BLOB,
            tga: g.XHR_RESPONSE_TYPE.BLOB,
            json: g.XHR_RESPONSE_TYPE.JSON,
            text: g.XHR_RESPONSE_TYPE.TEXT,
            txt: g.XHR_RESPONSE_TYPE.TEXT,
            ttf: g.XHR_RESPONSE_TYPE.BUFFER,
            otf: g.XHR_RESPONSE_TYPE.BUFFER
        }, g.EMPTY_GIF = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
        var x = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

        function b(t) {
            for (var e = "", n = 0; n < t.length;) {
                for (var i = [0, 0, 0], r = [0, 0, 0, 0], o = 0; o < i.length; ++o) n < t.length ? i[o] = 255 & t.charCodeAt(n++) : i[o] = 0;
                switch (r[0] = i[0] >> 2, r[1] = (3 & i[0]) << 4 | i[1] >> 4, r[2] = (15 & i[1]) << 2 | i[2] >> 6, r[3] = 63 & i[2], n - (t.length - 1)) {
                    case 2:
                        r[3] = 64, r[2] = 64;
                        break;
                    case 1:
                        r[3] = 64
                }
                for (var a = 0; a < r.length; ++a) e += x.charAt(r[a])
            }
            return e
        }
        var w = window.URL || window.webkitURL;
        var M = {
                caching: function(t, e) {
                    var n = this;
                    u[t.url] ? (t.data = u[t.url], t.complete()) : t.onComplete.once(function() {
                        return u[n.url] = n.data
                    }), e()
                },
                parsing: function(t, e) {
                    if (t.data) {
                        if (t.xhr && t.xhrType === g.XHR_RESPONSE_TYPE.BLOB)
                            if (window.Blob && "string" != typeof t.data) {
                                if (0 === t.data.type.indexOf("image")) {
                                    var n = w.createObjectURL(t.data);
                                    return t.blob = t.data, t.data = new Image, t.data.src = n, t.type = g.TYPE.IMAGE, void(t.data.onload = function() {
                                        w.revokeObjectURL(n), t.data.onload = null, e()
                                    })
                                }
                            } else {
                                var i = t.xhr.getResponseHeader("content-type");
                                if (i && 0 === i.indexOf("image")) return t.data = new Image, t.data.src = "data:" + i + ";base64," + b(t.xhr.responseText), t.type = g.TYPE.IMAGE, void(t.data.onload = function() {
                                    t.data.onload = null, e()
                                })
                            } e()
                    } else e()
                }
            },
            T = /(#[\w-]+)?$/,
            E = function() {
                function t(e, n) {
                    var i = this;
                    void 0 === e && (e = ""), void 0 === n && (n = 10), this.baseUrl = e, this.progress = 0, this.loading = !1, this.defaultQueryString = "", this._beforeMiddleware = [], this._afterMiddleware = [], this._resourcesParsing = [], this._boundLoadResource = function(t, e) {
                        return i._loadResource(t, e)
                    }, this._queue = l(this._boundLoadResource, n), this._queue.pause(), this.resources = {}, this.onProgress = new o, this.onError = new o, this.onLoad = new o, this.onStart = new o, this.onComplete = new o;
                    for (var r = 0; r < t._defaultBeforeMiddleware.length; ++r) this.pre(t._defaultBeforeMiddleware[r]);
                    for (var a = 0; a < t._defaultAfterMiddleware.length; ++a) this.use(t._defaultAfterMiddleware[a])
                }
                var e = t.prototype;
                return e.add = function(t, e, n, i) {
                    if (Array.isArray(t)) {
                        for (var r = 0; r < t.length; ++r) this.add(t[r]);
                        return this
                    }
                    if ("object" == typeof t && (i = e || t.callback || t.onComplete, n = t, e = t.url, t = t.name || t.key || t.url), "string" != typeof e && (i = n, n = e, e = t), "string" != typeof e) throw new Error("No url passed to add resource to loader.");
                    if ("function" == typeof n && (i = n, n = null), this.loading && (!n || !n.parentResource)) throw new Error("Cannot add resources while the loader is running.");
                    if (this.resources[t]) throw new Error('Resource named "' + t + '" already exists.');
                    if (e = this._prepareUrl(e), this.resources[t] = new g(t, e, n), "function" == typeof i && this.resources[t].onAfterMiddleware.once(i), this.loading) {
                        for (var o = n.parentResource, a = [], s = 0; s < o.children.length; ++s) o.children[s].isComplete || a.push(o.children[s]);
                        var c = o.progressChunk * (a.length + 1) / (a.length + 2);
                        o.children.push(this.resources[t]), o.progressChunk = c;
                        for (var l = 0; l < a.length; ++l) a[l].progressChunk = c;
                        this.resources[t].progressChunk = c
                    }
                    return this._queue.push(this.resources[t]), this
                }, e.pre = function(t) {
                    return this._beforeMiddleware.push(t), this
                }, e.use = function(t) {
                    return this._afterMiddleware.push(t), this
                }, e.reset = function() {
                    for (var t in this.progress = 0, this.loading = !1, this._queue.kill(), this._queue.pause(), this.resources) {
                        var e = this.resources[t];
                        e._onLoadBinding && e._onLoadBinding.detach(), e.isLoading && e.abort()
                    }
                    return this.resources = {}, this
                }, e.load = function(t) {
                    if ("function" == typeof t && this.onComplete.once(t), this.loading) return this;
                    if (this._queue.idle()) this._onStart(), this._onComplete();
                    else {
                        for (var e = 100 / this._queue._tasks.length, n = 0; n < this._queue._tasks.length; ++n) this._queue._tasks[n].data.progressChunk = e;
                        this._onStart(), this._queue.resume()
                    }
                    return this
                }, e._prepareUrl = function(t) {
                    var e, n = r(t, {
                        strictMode: !0
                    });
                    if (e = n.protocol || !n.path || 0 === t.indexOf("//") ? t : this.baseUrl.length && this.baseUrl.lastIndexOf("/") !== this.baseUrl.length - 1 && "/" !== t.charAt(0) ? this.baseUrl + "/" + t : this.baseUrl + t, this.defaultQueryString) {
                        var i = T.exec(e)[0]; - 1 !== (e = e.substr(0, e.length - i.length)).indexOf("?") ? e += "&" + this.defaultQueryString : e += "?" + this.defaultQueryString, e += i
                    }
                    return e
                }, e._loadResource = function(t, e) {
                    var n = this;
                    t._dequeue = e, s(this._beforeMiddleware, function(e, i) {
                        e.call(n, t, function() {
                            i(t.isComplete ? {} : null)
                        })
                    }, function() {
                        t.isComplete ? n._onLoad(t) : (t._onLoadBinding = t.onComplete.once(n._onLoad, n), t.load())
                    }, !0)
                }, e._onStart = function() {
                    this.progress = 0, this.loading = !0, this.onStart.dispatch(this)
                }, e._onComplete = function() {
                    this.progress = 100, this.loading = !1, this.onComplete.dispatch(this, this.resources)
                }, e._onLoad = function(t) {
                    var e = this;
                    t._onLoadBinding = null, this._resourcesParsing.push(t), t._dequeue(), s(this._afterMiddleware, function(n, i) {
                        n.call(e, t, i)
                    }, function() {
                        t.onAfterMiddleware.dispatch(t), e.progress = Math.min(100, e.progress + t.progressChunk), e.onProgress.dispatch(e, t), t.error ? e.onError.dispatch(t.error, e, t) : e.onLoad.dispatch(e, t), e._resourcesParsing.splice(e._resourcesParsing.indexOf(t), 1), e._queue.idle() && 0 === e._resourcesParsing.length && e._onComplete()
                    }, !0)
                }, d(t, [{
                    key: "concurrency",
                    get: function() {
                        return this._queue.concurrency
                    },
                    set: function(t) {
                        this._queue.concurrency = t
                    }
                }]), t
            }();
        E._defaultBeforeMiddleware = [], E._defaultAfterMiddleware = [], E.pre = function(t) {
            return E._defaultBeforeMiddleware.push(t), E
        }, E.use = function(t) {
            return E._defaultAfterMiddleware.push(t), E
        }, e.Loader = E, e.Resource = g, e.async = h, e.encodeBinary = b, e.middleware = M
    }, function(t, e) {
        var n = 9007199254740991;
        t.exports = function(t) {
            return "number" == typeof t && t > -1 && t % 1 == 0 && t <= n
        }
    }, function(t, e, n) {
        var i = n(79),
            r = n(78),
            o = n(77),
            a = o && o.isTypedArray,
            s = a ? r(a) : i;
        t.exports = s
    }, function(t, e) {
        t.exports = function(t) {
            return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
                enumerable: !0,
                get: function() {
                    return t.l
                }
            }), Object.defineProperty(t, "id", {
                enumerable: !0,
                get: function() {
                    return t.i
                }
            }), t.webpackPolyfill = 1), t
        }
    }, function(t, e, n) {
        (function(t) {
            var i = n(14),
                r = n(81),
                o = "object" == typeof e && e && !e.nodeType && e,
                a = o && "object" == typeof t && t && !t.nodeType && t,
                s = a && a.exports === o ? i.Buffer : void 0,
                c = (s ? s.isBuffer : void 0) || r;
            t.exports = c
        }).call(this, n(37)(t))
    }, function(t, e, n) {
        var i = n(102),
            r = n(99),
            o = n(98),
            a = 1,
            s = 2;
        t.exports = function(t, e, n, c, l, h) {
            var u = n & a,
                p = t.length,
                d = e.length;
            if (p != d && !(u && d > p)) return !1;
            var f = h.get(t);
            if (f && h.get(e)) return f == e;
            var m = -1,
                v = !0,
                g = n & s ? new i : void 0;
            for (h.set(t, e), h.set(e, t); ++m < p;) {
                var y = t[m],
                    _ = e[m];
                if (c) var x = u ? c(_, y, m, e, t, h) : c(y, _, m, t, e, h);
                if (void 0 !== x) {
                    if (x) continue;
                    v = !1;
                    break
                }
                if (g) {
                    if (!r(e, function(t, e) {
                            if (!o(g, e) && (y === t || l(y, t, n, c, h))) return g.push(e)
                        })) {
                        v = !1;
                        break
                    }
                } else if (y !== _ && !l(y, _, n, c, h)) {
                    v = !1;
                    break
                }
            }
            return h.delete(t), h.delete(e), v
        }
    }, function(t, e, n) {
        var i = n(114),
            r = n(107),
            o = n(105),
            a = n(104),
            s = n(103);

        function c(t) {
            var e = -1,
                n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n;) {
                var i = t[e];
                this.set(i[0], i[1])
            }
        }
        c.prototype.clear = i, c.prototype.delete = r, c.prototype.get = o, c.prototype.has = a, c.prototype.set = s, t.exports = c
    }, function(t, e) {
        var n = Function.prototype.toString;
        t.exports = function(t) {
            if (null != t) {
                try {
                    return n.call(t)
                } catch (t) {}
                try {
                    return t + ""
                } catch (t) {}
            }
            return ""
        }
    }, function(t, e) {
        t.exports = function(t) {
            var e = typeof t;
            return null != t && ("object" == e || "function" == e)
        }
    }, function(t, e, n) {
        (function(e) {
            var n = "object" == typeof e && e && e.Object === Object && e;
            t.exports = n
        }).call(this, n(27))
    }, function(t, e, n) {
        var i = n(24),
            r = n(42),
            o = "[object AsyncFunction]",
            a = "[object Function]",
            s = "[object GeneratorFunction]",
            c = "[object Proxy]";
        t.exports = function(t) {
            if (!r(t)) return !1;
            var e = i(t);
            return e == a || e == s || e == o || e == c
        }
    }, function(t, e) {
        t.exports = function(t, e) {
            return t === e || t != t && e != e
        }
    }
