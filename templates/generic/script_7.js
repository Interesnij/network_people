function(t, e, n) {
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
    }
