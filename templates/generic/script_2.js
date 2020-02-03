function(t, e, n) {
        (function(n) {
            var i, r = void 0 !== t && t.exports && void 0 !== n ? n : this || window;
            /*!
             * VERSION: 2.1.3
             * DATE: 2019-05-17
             * UPDATES AND DOCS AT: http://greensock.com
             *
             * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
             *
             * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
             * This work is subject to the terms at http://greensock.com/standard-license or for
             * Club GreenSock members, the software agreement that was issued with your membership.
             *
             * @author: Jack Doyle, jack@greensock.com
             **/
            (r._gsQueue || (r._gsQueue = [])).push(function() {
                    "use strict";
                    r._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, n) {
                            var i = function(t) {
                                    var e, n = [],
                                        i = t.length;
                                    for (e = 0; e !== i; n.push(t[e++]));
                                    return n
                                },
                                r = function(t, e, n) {
                                    var i, r, o = t.cycle;
                                    for (i in o) r = o[i], t[i] = "function" == typeof r ? r(n, e[n], e) : r[n % r.length];
                                    delete t.cycle
                                },
                                o = function(t) {
                                    if ("function" == typeof t) return t;
                                    var e = "object" == typeof t ? t : {
                                            each: t
                                        },
                                        n = e.ease,
                                        i = e.from || 0,
                                        r = e.base || 0,
                                        o = {},
                                        a = isNaN(i),
                                        s = e.axis,
                                        c = {
                                            center: .5,
                                            end: 1
                                        } [i] || 0;
                                    return function(t, l, h) {
                                        var u, p, d, f, m, v, g, y, _, x = (h || e).length,
                                            b = o[x];
                                        if (!b) {
                                            if (!(_ = "auto" === e.grid ? 0 : (e.grid || [1 / 0])[0])) {
                                                for (g = -1 / 0; g < (g = h[_++].getBoundingClientRect().left) && _ < x;);
                                                _--
                                            }
                                            for (b = o[x] = [], u = a ? Math.min(_, x) * c - .5 : i % _, p = a ? x * c / _ - .5 : i / _ | 0, g = 0, y = 1 / 0, v = 0; v < x; v++) d = v % _ - u, f = p - (v / _ | 0), b[v] = m = s ? Math.abs("y" === s ? f : d) : Math.sqrt(d * d + f * f), m > g && (g = m), m < y && (y = m);
                                            b.max = g - y, b.min = y, b.v = x = e.amount || e.each * (_ > x ? x - 1 : s ? "y" === s ? x / _ : _ : Math.max(_, x / _)) || 0, b.b = x < 0 ? r - x : r
                                        }
                                        return x = (b[t] - b.min) / b.max, b.b + (n ? n.getRatio(x) : x) * b.v
                                    }
                                },
                                a = function(t, e, i) {
                                    n.call(this, t, e, i), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._repeat && this._uncache(!0), this.render = a.prototype.render
                                },
                                s = n._internals,
                                c = s.isSelector,
                                l = s.isArray,
                                h = a.prototype = n.to({}, .1, {}),
                                u = [];
                            a.version = "2.1.3", h.constructor = a, h.kill()._gc = !1, a.killTweensOf = a.killDelayedCallsTo = n.killTweensOf, a.getTweensOf = n.getTweensOf, a.lagSmoothing = n.lagSmoothing, a.ticker = n.ticker, a.render = n.render, a.distribute = o, h.invalidate = function() {
                                return this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), n.prototype.invalidate.call(this)
                            }, h.updateTo = function(t, e) {
                                var i, r = this.ratio,
                                    o = this.vars.immediateRender || t.immediateRender;
                                for (i in e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay)), t) this.vars[i] = t[i];
                                if (this._initted || o)
                                    if (e) this._initted = !1, o && this.render(0, !0, !0);
                                    else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && n._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                                    var a = this._totalTime;
                                    this.render(0, !0, !1), this._initted = !1, this.render(a, !0, !1)
                                } else if (this._initted = !1, this._init(), this._time > 0 || o)
                                    for (var s, c = 1 / (1 - r), l = this._firstPT; l;) s = l.s + l.c, l.c *= c, l.s = s - l.c, l = l._next;
                                return this
                            }, h.render = function(t, e, i) {
                                this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                                var r, o, a, c, l, h, u, p, d, f = this._dirty ? this.totalDuration() : this._totalDuration,
                                    m = this._time,
                                    v = this._totalTime,
                                    g = this._cycle,
                                    y = this._duration,
                                    _ = this._rawPrevTime;
                                if (t >= f - 1e-8 && t >= 0 ? (this._totalTime = f, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = y, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (r = !0, o = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === y && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (_ < 0 || t <= 0 && t >= -1e-8 || 1e-8 === _ && "isPause" !== this.data) && _ !== t && (i = !0, _ > 1e-8 && (o = "onReverseComplete")), this._rawPrevTime = p = !e || t || _ === t ? t : 1e-8)) : t < 1e-8 ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== v || 0 === y && _ > 0) && (o = "onReverseComplete", r = this._reversed), t > -1e-8 ? t = 0 : t < 0 && (this._active = !1, 0 === y && (this._initted || !this.vars.lazy || i) && (_ >= 0 && (i = !0), this._rawPrevTime = p = !e || t || _ === t ? t : 1e-8)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (c = y + this._repeatDelay, this._cycle = this._totalTime / c >> 0, 0 !== this._cycle && this._cycle === this._totalTime / c && v <= t && this._cycle--, this._time = this._totalTime - this._cycle * c, this._yoyo && 0 != (1 & this._cycle) && (this._time = y - this._time, (d = this._yoyoEase || this.vars.yoyoEase) && (this._yoyoEase || (!0 !== d || this._initted ? this._yoyoEase = d = !0 === d ? this._ease : d instanceof Ease ? d : Ease.map[d] : (d = this.vars.ease, this._yoyoEase = d = d ? d instanceof Ease ? d : "function" == typeof d ? new Ease(d, this.vars.easeParams) : Ease.map[d] || n.defaultEase : n.defaultEase)), this.ratio = d ? 1 - d.getRatio((y - this._time) / y) : 0)), this._time > y ? this._time = y : this._time < 0 && (this._time = 0)), this._easeType && !d ? (l = this._time / y, h = this._easeType, u = this._easePower, (1 === h || 3 === h && l >= .5) && (l = 1 - l), 3 === h && (l *= 2), 1 === u ? l *= l : 2 === u ? l *= l * l : 3 === u ? l *= l * l * l : 4 === u && (l *= l * l * l * l), this.ratio = 1 === h ? 1 - l : 2 === h ? l : this._time / y < .5 ? l / 2 : 1 - l / 2) : d || (this.ratio = this._ease.getRatio(this._time / y))), m !== this._time || i || g !== this._cycle) {
                                    if (!this._initted) {
                                        if (this._init(), !this._initted || this._gc) return;
                                        if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = m, this._totalTime = v, this._rawPrevTime = _, this._cycle = g, s.lazyTweens.push(this), void(this._lazy = [t, e]);
                                        !this._time || r || d ? r && this._ease._calcEnd && !d && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : this.ratio = this._ease.getRatio(this._time / y)
                                    }
                                    for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== m && t >= 0 && (this._active = !0), 0 === v && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, !0, i) : o || (o = "_dummyGS")), this.vars.onStart && (0 === this._totalTime && 0 !== y || e || this._callback("onStart"))), a = this._firstPT; a;) a.f ? a.t[a.p](a.c * this.ratio + a.s) : a.t[a.p] = a.c * this.ratio + a.s, a = a._next;
                                    this._onUpdate && (t < 0 && this._startAt && this._startTime && this._startAt.render(t, !0, i), e || (this._totalTime !== v || o) && this._callback("onUpdate")), this._cycle !== g && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), o && (this._gc && !i || (t < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, !0, i), r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this._callback(o), 0 === y && 1e-8 === this._rawPrevTime && 1e-8 !== p && (this._rawPrevTime = 0)))
                                } else v !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
                            }, a.to = function(t, e, n) {
                                return new a(t, e, n)
                            }, a.from = function(t, e, n) {
                                return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, new a(t, e, n)
                            }, a.fromTo = function(t, e, n, i) {
                                return i.startAt = n, i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender, new a(t, e, i)
                            }, a.staggerTo = a.allTo = function(t, e, s, h, p, d, f) {
                                var m, v, g, y, _ = [],
                                    x = o(s.stagger || h),
                                    b = s.cycle,
                                    w = (s.startAt || u).cycle;
                                for (l(t) || ("string" == typeof t && (t = n.selector(t) || t), c(t) && (t = i(t))), m = (t = t || []).length - 1, g = 0; g <= m; g++) {
                                    for (y in v = {}, s) v[y] = s[y];
                                    if (b && (r(v, t, g), null != v.duration && (e = v.duration, delete v.duration)), w) {
                                        for (y in w = v.startAt = {}, s.startAt) w[y] = s.startAt[y];
                                        r(v.startAt, t, g)
                                    }
                                    v.delay = x(g, t[g], t) + (v.delay || 0), g === m && p && (v.onComplete = function() {
                                        s.onComplete && s.onComplete.apply(s.onCompleteScope || this, arguments), p.apply(f || s.callbackScope || this, d || u)
                                    }), _[g] = new a(t[g], e, v)
                                }
                                return _
                            }, a.staggerFrom = a.allFrom = function(t, e, n, i, r, o, s) {
                                return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, a.staggerTo(t, e, n, i, r, o, s)
                            }, a.staggerFromTo = a.allFromTo = function(t, e, n, i, r, o, s, c) {
                                return i.startAt = n, i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender, a.staggerTo(t, e, i, r, o, s, c)
                            }, a.delayedCall = function(t, e, n, i, r) {
                                return new a(e, 0, {
                                    delay: t,
                                    onComplete: e,
                                    onCompleteParams: n,
                                    callbackScope: i,
                                    onReverseComplete: e,
                                    onReverseCompleteParams: n,
                                    immediateRender: !1,
                                    useFrames: r,
                                    overwrite: 0
                                })
                            }, a.set = function(t, e) {
                                return new a(t, 0, e)
                            }, a.isTweening = function(t) {
                                return n.getTweensOf(t, !0).length > 0
                            };
                            var p = function(t, e) {
                                    for (var i = [], r = 0, o = t._first; o;) o instanceof n ? i[r++] = o : (e && (i[r++] = o), r = (i = i.concat(p(o, e))).length), o = o._next;
                                    return i
                                },
                                d = a.getAllTweens = function(e) {
                                    return p(t._rootTimeline, e).concat(p(t._rootFramesTimeline, e))
                                };
                            a.killAll = function(t, n, i, r) {
                                null == n && (n = !0), null == i && (i = !0);
                                var o, a, s, c = d(0 != r),
                                    l = c.length,
                                    h = n && i && r;
                                for (s = 0; s < l; s++) a = c[s], (h || a instanceof e || (o = a.target === a.vars.onComplete) && i || n && !o) && (t ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(!1, !1))
                            }, a.killChildTweensOf = function(t, e) {
                                if (null != t) {
                                    var r, o, h, u, p, d = s.tweenLookup;
                                    if ("string" == typeof t && (t = n.selector(t) || t), c(t) && (t = i(t)), l(t))
                                        for (u = t.length; --u > -1;) a.killChildTweensOf(t[u], e);
                                    else {
                                        for (h in r = [], d)
                                            for (o = d[h].target.parentNode; o;) o === t && (r = r.concat(d[h].tweens)), o = o.parentNode;
                                        for (p = r.length, u = 0; u < p; u++) e && r[u].totalTime(r[u].totalDuration()), r[u]._enabled(!1, !1)
                                    }
                                }
                            };
                            var f = function(t, n, i, r) {
                                n = !1 !== n, i = !1 !== i;
                                for (var o, a, s = d(r = !1 !== r), c = n && i && r, l = s.length; --l > -1;) a = s[l], (c || a instanceof e || (o = a.target === a.vars.onComplete) && i || n && !o) && a.paused(t)
                            };
                            return a.pauseAll = function(t, e, n) {
                                f(!0, t, e, n)
                            }, a.resumeAll = function(t, e, n) {
                                f(!1, t, e, n)
                            }, a.globalTimeScale = function(e) {
                                var i = t._rootTimeline,
                                    r = n.ticker.time;
                                return arguments.length ? (e = e || 1e-8, i._startTime = r - (r - i._startTime) * i._timeScale / e, i = t._rootFramesTimeline, r = n.ticker.frame, i._startTime = r - (r - i._startTime) * i._timeScale / e, i._timeScale = t._rootTimeline._timeScale = e, e) : i._timeScale
                            }, h.progress = function(t, e) {
                                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this.duration() ? this._time / this._duration : this.ratio
                            }, h.totalProgress = function(t, e) {
                                return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
                            }, h.time = function(t, e) {
                                if (!arguments.length) return this._time;
                                this._dirty && this.totalDuration();
                                var n = this._duration,
                                    i = this._cycle,
                                    r = i * (n + this._repeatDelay);
                                return t > n && (t = n), this.totalTime(this._yoyo && 1 & i ? n - t + r : this._repeat ? t + r : t, e)
                            }, h.duration = function(e) {
                                return arguments.length ? t.prototype.duration.call(this, e) : this._duration
                            }, h.totalDuration = function(t) {
                                return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                            }, h.repeat = function(t) {
                                return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                            }, h.repeatDelay = function(t) {
                                return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                            }, h.yoyo = function(t) {
                                return arguments.length ? (this._yoyo = t, this) : this._yoyo
                            }, a
                        }, !0), r._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, n) {
                            var i = function(t) {
                                    e.call(this, t);
                                    var n, i, r = this.vars;
                                    for (i in this._labels = {}, this.autoRemoveChildren = !!r.autoRemoveChildren, this.smoothChildTiming = !!r.smoothChildTiming, this._sortChildren = !0, this._onUpdate = r.onUpdate, r) n = r[i], c(n) && -1 !== n.join("").indexOf("{self}") && (r[i] = this._swapSelfInParams(n));
                                    c(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
                                },
                                o = n._internals,
                                a = i._internals = {},
                                s = o.isSelector,
                                c = o.isArray,
                                l = o.lazyTweens,
                                h = o.lazyRender,
                                u = r._gsDefine.globals,
                                p = function(t) {
                                    var e, n = {};
                                    for (e in t) n[e] = t[e];
                                    return n
                                },
                                d = function(t, e, n) {
                                    var i, r, o = t.cycle;
                                    for (i in o) r = o[i], t[i] = "function" == typeof r ? r(n, e[n], e) : r[n % r.length];
                                    delete t.cycle
                                },
                                f = a.pauseCallback = function() {},
                                m = function(t, e, n, i) {
                                    var r = "immediateRender";
                                    return r in e || (e[r] = !(n && !1 === n[r] || i)), e
                                },
                                v = function(t) {
                                    if ("function" == typeof t) return t;
                                    var e = "object" == typeof t ? t : {
                                            each: t
                                        },
                                        n = e.ease,
                                        i = e.from || 0,
                                        r = e.base || 0,
                                        o = {},
                                        a = isNaN(i),
                                        s = e.axis,
                                        c = {
                                            center: .5,
                                            end: 1
                                        } [i] || 0;
                                    return function(t, l, h) {
                                        var u, p, d, f, m, v, g, y, _, x = (h || e).length,
                                            b = o[x];
                                        if (!b) {
                                            if (!(_ = "auto" === e.grid ? 0 : (e.grid || [1 / 0])[0])) {
                                                for (g = -1 / 0; g < (g = h[_++].getBoundingClientRect().left) && _ < x;);
                                                _--
                                            }
                                            for (b = o[x] = [], u = a ? Math.min(_, x) * c - .5 : i % _, p = a ? x * c / _ - .5 : i / _ | 0, g = 0, y = 1 / 0, v = 0; v < x; v++) d = v % _ - u, f = p - (v / _ | 0), b[v] = m = s ? Math.abs("y" === s ? f : d) : Math.sqrt(d * d + f * f), m > g && (g = m), m < y && (y = m);
                                            b.max = g - y, b.min = y, b.v = x = e.amount || e.each * (_ > x ? x - 1 : s ? "y" === s ? x / _ : _ : Math.max(_, x / _)) || 0, b.b = x < 0 ? r - x : r
                                        }
                                        return x = (b[t] - b.min) / b.max, b.b + (n ? n.getRatio(x) : x) * b.v
                                    }
                                },
                                g = i.prototype = new e;
                            return i.version = "2.1.3", i.distribute = v, g.constructor = i, g.kill()._gc = g._forcingPlayhead = g._hasPause = !1, g.to = function(t, e, i, r) {
                                var o = i.repeat && u.TweenMax || n;
                                return e ? this.add(new o(t, e, i), r) : this.set(t, i, r)
                            }, g.from = function(t, e, i, r) {
                                return this.add((i.repeat && u.TweenMax || n).from(t, e, m(0, i)), r)
                            }, g.fromTo = function(t, e, i, r, o) {
                                var a = r.repeat && u.TweenMax || n;
                                return r = m(0, r, i), e ? this.add(a.fromTo(t, e, i, r), o) : this.set(t, r, o)
                            }, g.staggerTo = function(t, e, r, o, a, c, l, h) {
                                var u, f, m = new i({
                                        onComplete: c,
                                        onCompleteParams: l,
                                        callbackScope: h,
                                        smoothChildTiming: this.smoothChildTiming
                                    }),
                                    g = v(r.stagger || o),
                                    y = r.startAt,
                                    _ = r.cycle;
                                for ("string" == typeof t && (t = n.selector(t) || t), s(t = t || []) && (t = function(t) {
                                        var e, n = [],
                                            i = t.length;
                                        for (e = 0; e !== i; n.push(t[e++]));
                                        return n
                                    }(t)), f = 0; f < t.length; f++) u = p(r), y && (u.startAt = p(y), y.cycle && d(u.startAt, t, f)), _ && (d(u, t, f), null != u.duration && (e = u.duration, delete u.duration)), m.to(t[f], e, u, g(f, t[f], t));
                                return this.add(m, a)
                            }, g.staggerFrom = function(t, e, n, i, r, o, a, s) {
                                return n.runBackwards = !0, this.staggerTo(t, e, m(0, n), i, r, o, a, s)
                            }, g.staggerFromTo = function(t, e, n, i, r, o, a, s, c) {
                                return i.startAt = n, this.staggerTo(t, e, m(0, i, n), r, o, a, s, c)
                            }, g.call = function(t, e, i, r) {
                                return this.add(n.delayedCall(0, t, e, i), r)
                            }, g.set = function(t, e, i) {
                                return this.add(new n(t, 0, m(0, e, null, !0)), i)
                            }, i.exportRoot = function(t, e) {
                                null == (t = t || {}).smoothChildTiming && (t.smoothChildTiming = !0);
                                var r, o, a, s, c = new i(t),
                                    l = c._timeline;
                                for (null == e && (e = !0), l._remove(c, !0), c._startTime = 0, c._rawPrevTime = c._time = c._totalTime = l._time, a = l._first; a;) s = a._next, e && a instanceof n && a.target === a.vars.onComplete || ((o = a._startTime - a._delay) < 0 && (r = 1), c.add(a, o)), a = s;
                                return l.add(c, 0), r && c.totalDuration(), c
                            }, g.add = function(r, o, a, s) {
                                var l, h, u, p, d, f;
                                if ("number" != typeof o && (o = this._parseTimeOrLabel(o, 0, !0, r)), !(r instanceof t)) {
                                    if (r instanceof Array || r && r.push && c(r)) {
                                        for (a = a || "normal", s = s || 0, l = o, h = r.length, u = 0; u < h; u++) c(p = r[u]) && (p = new i({
                                            tweens: p
                                        })), this.add(p, l), "string" != typeof p && "function" != typeof p && ("sequence" === a ? l = p._startTime + p.totalDuration() / p._timeScale : "start" === a && (p._startTime -= p.delay())), l += s;
                                        return this._uncache(!0)
                                    }
                                    if ("string" == typeof r) return this.addLabel(r, o);
                                    if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                                    r = n.delayedCall(0, r)
                                }
                                if (e.prototype.add.call(this, r, o), (r._time || !r._duration && r._initted) && (l = (this.rawTime() - r._startTime) * r._timeScale, (!r._duration || Math.abs(Math.max(0, Math.min(r.totalDuration(), l))) - r._totalTime > 1e-5) && r.render(l, !1, !1)), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                                    for (f = (d = this).rawTime() > r._startTime; d._timeline;) f && d._timeline.smoothChildTiming ? d.totalTime(d._totalTime, !0) : d._gc && d._enabled(!0, !1), d = d._timeline;
                                return this
                            }, g.remove = function(e) {
                                if (e instanceof t) {
                                    this._remove(e, !1);
                                    var n = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
                                    return e._startTime = (e._paused ? e._pauseTime : n._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this
                                }
                                if (e instanceof Array || e && e.push && c(e)) {
                                    for (var i = e.length; --i > -1;) this.remove(e[i]);
                                    return this
                                }
                                return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
                            }, g._remove = function(t, n) {
                                return e.prototype._remove.call(this, t, n), this._last ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                            }, g.append = function(t, e) {
                                return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
                            }, g.insert = g.insertMultiple = function(t, e, n, i) {
                                return this.add(t, e || 0, n, i)
                            }, g.appendMultiple = function(t, e, n, i) {
                                return this.add(t, this._parseTimeOrLabel(null, e, !0, t), n, i)
                            }, g.addLabel = function(t, e) {
                                return this._labels[t] = this._parseTimeOrLabel(e), this
                            }, g.addPause = function(t, e, i, r) {
                                var o = n.delayedCall(0, f, i, r || this);
                                return o.vars.onComplete = o.vars.onReverseComplete = e, o.data = "isPause", this._hasPause = !0, this.add(o, t)
                            }, g.removeLabel = function(t) {
                                return delete this._labels[t], this
                            }, g.getLabelTime = function(t) {
                                return null != this._labels[t] ? this._labels[t] : -1
                            }, g._parseTimeOrLabel = function(e, n, i, r) {
                                var o, a;
                                if (r instanceof t && r.timeline === this) this.remove(r);
                                else if (r && (r instanceof Array || r.push && c(r)))
                                    for (a = r.length; --a > -1;) r[a] instanceof t && r[a].timeline === this && this.remove(r[a]);
                                if (o = "number" != typeof e || n ? this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration : 0, "string" == typeof n) return this._parseTimeOrLabel(n, i && "number" == typeof e && null == this._labels[n] ? e - o : 0, i);
                                if (n = n || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = o);
                                else {
                                    if (-1 === (a = e.indexOf("="))) return null == this._labels[e] ? i ? this._labels[e] = o + n : n : this._labels[e] + n;
                                    n = parseInt(e.charAt(a - 1) + "1", 10) * Number(e.substr(a + 1)), e = a > 1 ? this._parseTimeOrLabel(e.substr(0, a - 1), 0, i) : o
                                }
                                return Number(e) + n
                            }, g.seek = function(t, e) {
                                return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e)
                            }, g.stop = function() {
                                return this.paused(!0)
                            }, g.gotoAndPlay = function(t, e) {
                                return this.play(t, e)
                            }, g.gotoAndStop = function(t, e) {
                                return this.pause(t, e)
                            }, g.render = function(t, e, n) {
                                this._gc && this._enabled(!0, !1);
                                var i, r, o, a, s, c, u, p, d = this._time,
                                    f = this._dirty ? this.totalDuration() : this._totalDuration,
                                    m = this._startTime,
                                    v = this._timeScale,
                                    g = this._paused;
                                if (d !== this._time && (t += this._time - d), this._hasPause && !this._forcingPlayhead && !e) {
                                    if (t > d)
                                        for (i = this._first; i && i._startTime <= t && !c;) i._duration || "isPause" !== i.data || i.ratio || 0 === i._startTime && 0 === this._rawPrevTime || (c = i), i = i._next;
                                    else
                                        for (i = this._last; i && i._startTime >= t && !c;) i._duration || "isPause" === i.data && i._rawPrevTime > 0 && (c = i), i = i._prev;
                                    c && (this._time = this._totalTime = t = c._startTime, p = this._startTime + (this._reversed ? this._duration - t : t) / this._timeScale)
                                }
                                if (t >= f - 1e-8 && t >= 0) this._totalTime = this._time = f, this._reversed || this._hasPausedChild() || (r = !0, a = "onComplete", s = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && t >= -1e-8 || this._rawPrevTime < 0 || 1e-8 === this._rawPrevTime) && this._rawPrevTime !== t && this._first && (s = !0, this._rawPrevTime > 1e-8 && (a = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-8, t = f + 1e-4;
                                else if (t < 1e-8)
                                    if (this._totalTime = this._time = 0, t > -1e-8 && (t = 0), (0 !== d || 0 === this._duration && 1e-8 !== this._rawPrevTime && (this._rawPrevTime > 0 || t < 0 && this._rawPrevTime >= 0)) && (a = "onReverseComplete", r = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (s = r = !0, a = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (s = !0), this._rawPrevTime = t;
                                    else {
                                        if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-8, 0 === t && r)
                                            for (i = this._first; i && 0 === i._startTime;) i._duration || (r = !1), i = i._next;
                                        t = 0, this._initted || (s = !0)
                                    }
                                else this._totalTime = this._time = this._rawPrevTime = t;
                                if (this._time !== d && this._first || n || s || c) {
                                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== d && t > 0 && (this._active = !0), 0 === d && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")), (u = this._time) >= d)
                                        for (i = this._first; i && (o = i._next, u === this._time && (!this._paused || g));)(i._active || i._startTime <= u && !i._paused && !i._gc) && (c === i && (this.pause(), this._pauseTime = p), i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (t - i._startTime) * i._timeScale, e, n) : i.render((t - i._startTime) * i._timeScale, e, n)), i = o;
                                    else
                                        for (i = this._last; i && (o = i._prev, u === this._time && (!this._paused || g));) {
                                            if (i._active || i._startTime <= d && !i._paused && !i._gc) {
                                                if (c === i) {
                                                    for (c = i._prev; c && c.endTime() > this._time;) c.render(c._reversed ? c.totalDuration() - (t - c._startTime) * c._timeScale : (t - c._startTime) * c._timeScale, e, n), c = c._prev;
                                                    c = null, this.pause(), this._pauseTime = p
                                                }
                                                i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (t - i._startTime) * i._timeScale, e, n) : i.render((t - i._startTime) * i._timeScale, e, n)
                                            }
                                            i = o
                                        }
                                    this._onUpdate && (e || (l.length && h(), this._callback("onUpdate"))), a && (this._gc || m !== this._startTime && v === this._timeScale || (0 === this._time || f >= this.totalDuration()) && (r && (l.length && h(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[a] && this._callback(a)))
                                }
                            }, g._hasPausedChild = function() {
                                for (var t = this._first; t;) {
                                    if (t._paused || t instanceof i && t._hasPausedChild()) return !0;
                                    t = t._next
                                }
                                return !1
                            }, g.getChildren = function(t, e, i, r) {
                                r = r || -9999999999;
                                for (var o = [], a = this._first, s = 0; a;) a._startTime < r || (a instanceof n ? !1 !== e && (o[s++] = a) : (!1 !== i && (o[s++] = a), !1 !== t && (s = (o = o.concat(a.getChildren(!0, e, i))).length))), a = a._next;
                                return o
                            }, g.getTweensOf = function(t, e) {
                                var i, r, o = this._gc,
                                    a = [],
                                    s = 0;
                                for (o && this._enabled(!0, !0), r = (i = n.getTweensOf(t)).length; --r > -1;)(i[r].timeline === this || e && this._contains(i[r])) && (a[s++] = i[r]);
                                return o && this._enabled(!1, !0), a
                            }, g.recent = function() {
                                return this._recent
                            }, g._contains = function(t) {
                                for (var e = t.timeline; e;) {
                                    if (e === this) return !0;
                                    e = e.timeline
                                }
                                return !1
                            }, g.shiftChildren = function(t, e, n) {
                                n = n || 0;
                                for (var i, r = this._first, o = this._labels; r;) r._startTime >= n && (r._startTime += t), r = r._next;
                                if (e)
                                    for (i in o) o[i] >= n && (o[i] += t);
                                return this._uncache(!0)
                            }, g._kill = function(t, e) {
                                if (!t && !e) return this._enabled(!1, !1);
                                for (var n = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), i = n.length, r = !1; --i > -1;) n[i]._kill(t, e) && (r = !0);
                                return r
                            }, g.clear = function(t) {
                                var e = this.getChildren(!1, !0, !0),
                                    n = e.length;
                                for (this._time = this._totalTime = 0; --n > -1;) e[n]._enabled(!1, !1);
                                return !1 !== t && (this._labels = {}), this._uncache(!0)
                            }, g.invalidate = function() {
                                for (var e = this._first; e;) e.invalidate(), e = e._next;
                                return t.prototype.invalidate.call(this)
                            }, g._enabled = function(t, n) {
                                if (t === this._gc)
                                    for (var i = this._first; i;) i._enabled(t, !0), i = i._next;
                                return e.prototype._enabled.call(this, t, n)
                            }, g.totalTime = function(e, n, i) {
                                this._forcingPlayhead = !0;
                                var r = t.prototype.totalTime.apply(this, arguments);
                                return this._forcingPlayhead = !1, r
                            }, g.duration = function(t) {
                                return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
                            }, g.totalDuration = function(t) {
                                if (!arguments.length) {
                                    if (this._dirty) {
                                        for (var e, n, i = 0, r = this._last, o = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > o && this._sortChildren && !r._paused && !this._calculatingDuration ? (this._calculatingDuration = 1, this.add(r, r._startTime - r._delay), this._calculatingDuration = 0) : o = r._startTime, r._startTime < 0 && !r._paused && (i -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale, this._time -= r._startTime, this._totalTime -= r._startTime, this._rawPrevTime -= r._startTime), this.shiftChildren(-r._startTime, !1, -9999999999), o = 0), (n = r._startTime + r._totalDuration / r._timeScale) > i && (i = n), r = e;
                                        this._duration = this._totalDuration = i, this._dirty = !1
                                    }
                                    return this._totalDuration
                                }
                                return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
                            }, g.paused = function(e) {
                                if (!1 === e && this._paused)
                                    for (var n = this._first; n;) n._startTime === this._time && "isPause" === n.data && (n._rawPrevTime = 0), n = n._next;
                                return t.prototype.paused.apply(this, arguments)
                            }, g.usesFrames = function() {
                                for (var e = this._timeline; e._timeline;) e = e._timeline;
                                return e === t._rootFramesTimeline
                            }, g.rawTime = function(t) {
                                return t && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(t) - this._startTime) * this._timeScale
                            }, i
                        }, !0), r._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, n) {
                            var i = function(e) {
                                    t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !!this.vars.yoyo, this._dirty = !0
                                },
                                o = e._internals,
                                a = o.lazyTweens,
                                s = o.lazyRender,
                                c = r._gsDefine.globals,
                                l = new n(null, null, 1, 0),
                                h = i.prototype = new t;
                            return h.constructor = i, h.kill()._gc = !1, i.version = "2.1.3", h.invalidate = function() {
                                return this._yoyo = !!this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
                            }, h.addCallback = function(t, n, i, r) {
                                return this.add(e.delayedCall(0, t, i, r), n)
                            }, h.removeCallback = function(t, e) {
                                if (t)
                                    if (null == e) this._kill(null, t);
                                    else
                                        for (var n = this.getTweensOf(t, !1), i = n.length, r = this._parseTimeOrLabel(e); --i > -1;) n[i]._startTime === r && n[i]._enabled(!1, !1);
                                return this
                            }, h.removePause = function(e) {
                                return this.removeCallback(t._internals.pauseCallback, e)
                            }, h.tweenTo = function(t, n) {
                                n = n || {};
                                var i, r, o, a = {
                                        ease: l,
                                        useFrames: this.usesFrames(),
                                        immediateRender: !1,
                                        lazy: !1
                                    },
                                    s = n.repeat && c.TweenMax || e;
                                for (r in n) a[r] = n[r];
                                return a.time = this._parseTimeOrLabel(t), i = Math.abs(Number(a.time) - this._time) / this._timeScale || .001, o = new s(this, i, a), a.onStart = function() {
                                    o.target.paused(!0), o.vars.time === o.target.time() || i !== o.duration() || o.isFromTo || o.duration(Math.abs(o.vars.time - o.target.time()) / o.target._timeScale).render(o.time(), !0, !0), n.onStart && n.onStart.apply(n.onStartScope || n.callbackScope || o, n.onStartParams || [])
                                }, o
                            }, h.tweenFromTo = function(t, e, n) {
                                n = n || {}, t = this._parseTimeOrLabel(t), n.startAt = {
                                    onComplete: this.seek,
                                    onCompleteParams: [t],
                                    callbackScope: this
                                }, n.immediateRender = !1 !== n.immediateRender;
                                var i = this.tweenTo(e, n);
                                return i.isFromTo = 1, i.duration(Math.abs(i.vars.time - t) / this._timeScale || .001)
                            }, h.render = function(t, e, n) {
                                this._gc && this._enabled(!0, !1);
                                var i, r, o, c, l, h, u, p, d, f = this._time,
                                    m = this._dirty ? this.totalDuration() : this._totalDuration,
                                    v = this._duration,
                                    g = this._totalTime,
                                    y = this._startTime,
                                    _ = this._timeScale,
                                    x = this._rawPrevTime,
                                    b = this._paused,
                                    w = this._cycle;
                                if (f !== this._time && (t += this._time - f), t >= m - 1e-8 && t >= 0) this._locked || (this._totalTime = m, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (r = !0, c = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && t >= -1e-8 || x < 0 || 1e-8 === x) && x !== t && this._first && (l = !0, x > 1e-8 && (c = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-8, this._yoyo && 1 & this._cycle ? this._time = t = 0 : (this._time = v, t = v + 1e-4);
                                else if (t < 1e-8)
                                    if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, t > -1e-8 && (t = 0), (0 !== f || 0 === v && 1e-8 !== x && (x > 0 || t < 0 && x >= 0) && !this._locked) && (c = "onReverseComplete", r = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = r = !0, c = "onReverseComplete") : x >= 0 && this._first && (l = !0), this._rawPrevTime = t;
                                    else {
                                        if (this._rawPrevTime = v || !e || t || this._rawPrevTime === t ? t : 1e-8, 0 === t && r)
                                            for (i = this._first; i && 0 === i._startTime;) i._duration || (r = !1), i = i._next;
                                        t = 0, this._initted || (l = !0)
                                    }
                                else 0 === v && x < 0 && (l = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (h = v + this._repeatDelay, this._cycle = this._totalTime / h >> 0, this._cycle && this._cycle === this._totalTime / h && g <= t && this._cycle--, this._time = this._totalTime - this._cycle * h, this._yoyo && 1 & this._cycle && (this._time = v - this._time), this._time > v ? (this._time = v, t = v + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time));
                                if (this._hasPause && !this._forcingPlayhead && !e) {
                                    if ((t = this._time) > f || this._repeat && w !== this._cycle)
                                        for (i = this._first; i && i._startTime <= t && !u;) i._duration || "isPause" !== i.data || i.ratio || 0 === i._startTime && 0 === this._rawPrevTime || (u = i), i = i._next;
                                    else
                                        for (i = this._last; i && i._startTime >= t && !u;) i._duration || "isPause" === i.data && i._rawPrevTime > 0 && (u = i), i = i._prev;
                                    u && (d = this._startTime + (this._reversed ? this._duration - u._startTime : u._startTime) / this._timeScale, u._startTime < v && (this._time = this._rawPrevTime = t = u._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay)))
                                }
                                if (this._cycle !== w && !this._locked) {
                                    var M = this._yoyo && 0 != (1 & w),
                                        T = M === (this._yoyo && 0 != (1 & this._cycle)),
                                        E = this._totalTime,
                                        S = this._cycle,
                                        A = this._rawPrevTime,
                                        P = this._time;
                                    if (this._totalTime = w * v, this._cycle < w ? M = !M : this._totalTime += v, this._time = f, this._rawPrevTime = 0 === v ? x - 1e-4 : x, this._cycle = w, this._locked = !0, f = M ? 0 : v, this.render(f, e, 0 === v), e || this._gc || this.vars.onRepeat && (this._cycle = S, this._locked = !1, this._callback("onRepeat")), f !== this._time) return;
                                    if (T && (this._cycle = w, this._locked = !0, f = M ? v + 1e-4 : -1e-4, this.render(f, !0, !1)), this._locked = !1, this._paused && !b) return;
                                    this._time = P, this._totalTime = E, this._cycle = S, this._rawPrevTime = A
                                }
                                if (this._time !== f && this._first || n || l || u) {
                                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== g && t > 0 && (this._active = !0), 0 === g && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")), (p = this._time) >= f)
                                        for (i = this._first; i && (o = i._next, p === this._time && (!this._paused || b));)(i._active || i._startTime <= this._time && !i._paused && !i._gc) && (u === i && (this.pause(), this._pauseTime = d), i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (t - i._startTime) * i._timeScale, e, n) : i.render((t - i._startTime) * i._timeScale, e, n)), i = o;
                                    else
                                        for (i = this._last; i && (o = i._prev, p === this._time && (!this._paused || b));) {
                                            if (i._active || i._startTime <= f && !i._paused && !i._gc) {
                                                if (u === i) {
                                                    for (u = i._prev; u && u.endTime() > this._time;) u.render(u._reversed ? u.totalDuration() - (t - u._startTime) * u._timeScale : (t - u._startTime) * u._timeScale, e, n), u = u._prev;
                                                    u = null, this.pause(), this._pauseTime = d
                                                }
                                                i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (t - i._startTime) * i._timeScale, e, n) : i.render((t - i._startTime) * i._timeScale, e, n)
                                            }
                                            i = o
                                        }
                                    this._onUpdate && (e || (a.length && s(), this._callback("onUpdate"))), c && (this._locked || this._gc || y !== this._startTime && _ === this._timeScale || (0 === this._time || m >= this.totalDuration()) && (r && (a.length && s(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[c] && this._callback(c)))
                                } else g !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
                            }, h.getActive = function(t, e, n) {
                                var i, r, o = [],
                                    a = this.getChildren(t || null == t, e || null == t, !!n),
                                    s = 0,
                                    c = a.length;
                                for (i = 0; i < c; i++)(r = a[i]).isActive() && (o[s++] = r);
                                return o
                            }, h.getLabelAfter = function(t) {
                                t || 0 !== t && (t = this._time);
                                var e, n = this.getLabelsArray(),
                                    i = n.length;
                                for (e = 0; e < i; e++)
                                    if (n[e].time > t) return n[e].name;
                                return null
                            }, h.getLabelBefore = function(t) {
                                null == t && (t = this._time);
                                for (var e = this.getLabelsArray(), n = e.length; --n > -1;)
                                    if (e[n].time < t) return e[n].name;
                                return null
                            }, h.getLabelsArray = function() {
                                var t, e = [],
                                    n = 0;
                                for (t in this._labels) e[n++] = {
                                    time: this._labels[t],
                                    name: t
                                };
                                return e.sort(function(t, e) {
                                    return t.time - e.time
                                }), e
                            }, h.invalidate = function() {
                                return this._locked = !1, t.prototype.invalidate.call(this)
                            }, h.progress = function(t, e) {
                                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration() || 0
                            }, h.totalProgress = function(t, e) {
                                return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration() || 0
                            }, h.totalDuration = function(e) {
                                return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                            }, h.time = function(t, e) {
                                if (!arguments.length) return this._time;
                                this._dirty && this.totalDuration();
                                var n = this._duration,
                                    i = this._cycle,
                                    r = i * (n + this._repeatDelay);
                                return t > n && (t = n), this.totalTime(this._yoyo && 1 & i ? n - t + r : this._repeat ? t + r : t, e)
                            }, h.repeat = function(t) {
                                return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                            }, h.repeatDelay = function(t) {
                                return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                            }, h.yoyo = function(t) {
                                return arguments.length ? (this._yoyo = t, this) : this._yoyo
                            }, h.currentLabel = function(t) {
                                return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
                            }, i
                        }, !0),
                        function() {
                            var t = 180 / Math.PI,
                                e = [],
                                n = [],
                                i = [],
                                o = {},
                                a = r._gsDefine.globals,
                                s = function(t, e, n, i) {
                                    n === i && (n = i - (i - e) / 1e6), t === e && (e = t + (n - t) / 1e6), this.a = t, this.b = e, this.c = n, this.d = i, this.da = i - t, this.ca = n - t, this.ba = e - t
                                },
                                c = function(t, e, n, i) {
                                    var r = {
                                            a: t
                                        },
                                        o = {},
                                        a = {},
                                        s = {
                                            c: i
                                        },
                                        c = (t + e) / 2,
                                        l = (e + n) / 2,
                                        h = (n + i) / 2,
                                        u = (c + l) / 2,
                                        p = (l + h) / 2,
                                        d = (p - u) / 8;
                                    return r.b = c + (t - c) / 4, o.b = u + d, r.c = o.a = (r.b + o.b) / 2, o.c = a.a = (u + p) / 2, a.b = p - d, s.b = h + (i - h) / 4, a.c = s.a = (a.b + s.b) / 2, [r, o, a, s]
                                },
                                l = function(t, r, o, a, s) {
                                    var l, h, u, p, d, f, m, v, g, y, _, x, b, w = t.length - 1,
                                        M = 0,
                                        T = t[0].a;
                                    for (l = 0; l < w; l++) h = (d = t[M]).a, u = d.d, p = t[M + 1].d, s ? (_ = e[l], b = ((x = n[l]) + _) * r * .25 / (a ? .5 : i[l] || .5), v = u - ((f = u - (u - h) * (a ? .5 * r : 0 !== _ ? b / _ : 0)) + (((m = u + (p - u) * (a ? .5 * r : 0 !== x ? b / x : 0)) - f) * (3 * _ / (_ + x) + .5) / 4 || 0))) : v = u - ((f = u - (u - h) * r * .5) + (m = u + (p - u) * r * .5)) / 2, f += v, m += v, d.c = g = f, d.b = 0 !== l ? T : T = d.a + .6 * (d.c - d.a), d.da = u - h, d.ca = g - h, d.ba = T - h, o ? (y = c(h, T, g, u), t.splice(M, 1, y[0], y[1], y[2], y[3]), M += 4) : M++, T = m;
                                    (d = t[M]).b = T, d.c = T + .4 * (d.d - T), d.da = d.d - d.a, d.ca = d.c - d.a, d.ba = T - d.a, o && (y = c(d.a, T, d.c, d.d), t.splice(M, 1, y[0], y[1], y[2], y[3]))
                                },
                                h = function(t, i, r, o) {
                                    var a, c, l, h, u, p, d = [];
                                    if (o)
                                        for (c = (t = [o].concat(t)).length; --c > -1;) "string" == typeof(p = t[c][i]) && "=" === p.charAt(1) && (t[c][i] = o[i] + Number(p.charAt(0) + p.substr(2)));
                                    if ((a = t.length - 2) < 0) return d[0] = new s(t[0][i], 0, 0, t[0][i]), d;
                                    for (c = 0; c < a; c++) l = t[c][i], h = t[c + 1][i], d[c] = new s(l, 0, 0, h), r && (u = t[c + 2][i], e[c] = (e[c] || 0) + (h - l) * (h - l), n[c] = (n[c] || 0) + (u - h) * (u - h));
                                    return d[c] = new s(t[c][i], 0, 0, t[c + 1][i]), d
                                },
                                u = function(t, r, a, s, c, u) {
                                    var p, d, f, m, v, g, y, _, x = {},
                                        b = [],
                                        w = u || t[0];
                                    for (d in c = "string" == typeof c ? "," + c + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == r && (r = 1), t[0]) b.push(d);
                                    if (t.length > 1) {
                                        for (_ = t[t.length - 1], y = !0, p = b.length; --p > -1;)
                                            if (d = b[p], Math.abs(w[d] - _[d]) > .05) {
                                                y = !1;
                                                break
                                            } y && (t = t.concat(), u && t.unshift(u), t.push(t[1]), u = t[t.length - 3])
                                    }
                                    for (e.length = n.length = i.length = 0, p = b.length; --p > -1;) d = b[p], o[d] = -1 !== c.indexOf("," + d + ","), x[d] = h(t, d, o[d], u);
                                    for (p = e.length; --p > -1;) e[p] = Math.sqrt(e[p]), n[p] = Math.sqrt(n[p]);
                                    if (!s) {
                                        for (p = b.length; --p > -1;)
                                            if (o[d])
                                                for (g = (f = x[b[p]]).length - 1, m = 0; m < g; m++) v = f[m + 1].da / n[m] + f[m].da / e[m] || 0, i[m] = (i[m] || 0) + v * v;
                                        for (p = i.length; --p > -1;) i[p] = Math.sqrt(i[p])
                                    }
                                    for (p = b.length, m = a ? 4 : 1; --p > -1;) f = x[d = b[p]], l(f, r, a, s, o[d]), y && (f.splice(0, m), f.splice(f.length - m, m));
                                    return x
                                },
                                p = function(t, e, n) {
                                    for (var i, r, o, a, s, c, l, h, u, p, d, f = 1 / n, m = t.length; --m > -1;)
                                        for (o = (p = t[m]).a, a = p.d - o, s = p.c - o, c = p.b - o, i = r = 0, h = 1; h <= n; h++) i = r - (r = ((l = f * h) * l * a + 3 * (u = 1 - l) * (l * s + u * c)) * l), e[d = m * n + h - 1] = (e[d] || 0) + i * i
                                },
                                d = r._gsDefine.plugin({
                                    propName: "bezier",
                                    priority: -1,
                                    version: "1.3.9",
                                    API: 2,
                                    global: !0,
                                    init: function(t, e, n) {
                                        this._target = t, e instanceof Array && (e = {
                                            values: e
                                        }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                                        var i, r, o, a, c, l = e.values || [],
                                            h = {},
                                            d = l[0],
                                            f = e.autoRotate || n.vars.orientToBezier;
                                        for (i in this._autoRotate = f ? f instanceof Array ? f : [
                                                ["x", "y", "rotation", !0 === f ? 0 : Number(f) || 0]
                                            ] : null, d) this._props.push(i);
                                        for (o = this._props.length; --o > -1;) i = this._props[o], this._overwriteProps.push(i), r = this._func[i] = "function" == typeof t[i], h[i] = r ? t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]() : parseFloat(t[i]), c || h[i] !== l[0][i] && (c = h);
                                        if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? u(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, c) : function(t, e, n) {
                                                var i, r, o, a, c, l, h, u, p, d, f, m = {},
                                                    v = "cubic" === (e = e || "soft") ? 3 : 2,
                                                    g = "soft" === e,
                                                    y = [];
                                                if (g && n && (t = [n].concat(t)), null == t || t.length < v + 1) throw "invalid Bezier data";
                                                for (p in t[0]) y.push(p);
                                                for (l = y.length; --l > -1;) {
                                                    for (m[p = y[l]] = c = [], d = 0, u = t.length, h = 0; h < u; h++) i = null == n ? t[h][p] : "string" == typeof(f = t[h][p]) && "=" === f.charAt(1) ? n[p] + Number(f.charAt(0) + f.substr(2)) : Number(f), g && h > 1 && h < u - 1 && (c[d++] = (i + c[d - 2]) / 2), c[d++] = i;
                                                    for (u = d - v + 1, d = 0, h = 0; h < u; h += v) i = c[h], r = c[h + 1], o = c[h + 2], a = 2 === v ? 0 : c[h + 3], c[d++] = f = 3 === v ? new s(i, r, o, a) : new s(i, (2 * r + i) / 3, (2 * r + o) / 3, o);
                                                    c.length = d
                                                }
                                                return m
                                            }(l, e.type, h), this._segCount = this._beziers[i].length, this._timeRes) {
                                            var m = function(t, e) {
                                                var n, i, r, o, a = [],
                                                    s = [],
                                                    c = 0,
                                                    l = 0,
                                                    h = (e = e >> 0 || 6) - 1,
                                                    u = [],
                                                    d = [];
                                                for (n in t) p(t[n], a, e);
                                                for (r = a.length, i = 0; i < r; i++) c += Math.sqrt(a[i]), d[o = i % e] = c, o === h && (l += c, u[o = i / e >> 0] = d, s[o] = l, c = 0, d = []);
                                                return {
                                                    length: l,
                                                    lengths: s,
                                                    segments: u
                                                }
                                            }(this._beziers, this._timeRes);
                                            this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                                        }
                                        if (f = this._autoRotate)
                                            for (this._initialRotations = [], f[0] instanceof Array || (this._autoRotate = f = [f]), o = f.length; --o > -1;) {
                                                for (a = 0; a < 3; a++) i = f[o][a], this._func[i] = "function" == typeof t[i] && t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)];
                                                i = f[o][2], this._initialRotations[o] = (this._func[i] ? this._func[i].call(this._target) : this._target[i]) || 0, this._overwriteProps.push(i)
                                            }
                                        return this._startRatio = n.vars.runBackwards ? 1 : 0, !0
                                    },
                                    set: function(e) {
                                        var n, i, r, o, a, s, c, l, h, u, p, d = this._segCount,
                                            f = this._func,
                                            m = this._target,
                                            v = e !== this._startRatio;
                                        if (this._timeRes) {
                                            if (h = this._lengths, u = this._curSeg, p = e * this._length, r = this._li, p > this._l2 && r < d - 1) {
                                                for (l = d - 1; r < l && (this._l2 = h[++r]) <= p;);
                                                this._l1 = h[r - 1], this._li = r, this._curSeg = u = this._segments[r], this._s2 = u[this._s1 = this._si = 0]
                                            } else if (p < this._l1 && r > 0) {
                                                for (; r > 0 && (this._l1 = h[--r]) >= p;);
                                                0 === r && p < this._l1 ? this._l1 = 0 : r++, this._l2 = h[r], this._li = r, this._curSeg = u = this._segments[r], this._s1 = u[(this._si = u.length - 1) - 1] || 0, this._s2 = u[this._si]
                                            }
                                            if (n = r, p -= this._l1, r = this._si, p > this._s2 && r < u.length - 1) {
                                                for (l = u.length - 1; r < l && (this._s2 = u[++r]) <= p;);
                                                this._s1 = u[r - 1], this._si = r
                                            } else if (p < this._s1 && r > 0) {
                                                for (; r > 0 && (this._s1 = u[--r]) >= p;);
                                                0 === r && p < this._s1 ? this._s1 = 0 : r++, this._s2 = u[r], this._si = r
                                            }
                                            s = 1 === e ? 1 : (r + (p - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                                        } else s = (e - (n = e < 0 ? 0 : e >= 1 ? d - 1 : d * e >> 0) * (1 / d)) * d;
                                        for (i = 1 - s, r = this._props.length; --r > -1;) o = this._props[r], c = (s * s * (a = this._beziers[o][n]).da + 3 * i * (s * a.ca + i * a.ba)) * s + a.a, this._mod[o] && (c = this._mod[o](c, m)), f[o] ? m[o](c) : m[o] = c;
                                        if (this._autoRotate) {
                                            var g, y, _, x, b, w, M, T = this._autoRotate;
                                            for (r = T.length; --r > -1;) o = T[r][2], w = T[r][3] || 0, M = !0 === T[r][4] ? 1 : t, a = this._beziers[T[r][0]], g = this._beziers[T[r][1]], a && g && (a = a[n], g = g[n], y = a.a + (a.b - a.a) * s, y += ((x = a.b + (a.c - a.b) * s) - y) * s, x += (a.c + (a.d - a.c) * s - x) * s, _ = g.a + (g.b - g.a) * s, _ += ((b = g.b + (g.c - g.b) * s) - _) * s, b += (g.c + (g.d - g.c) * s - b) * s, c = v ? Math.atan2(b - _, x - y) * M + w : this._initialRotations[r], this._mod[o] && (c = this._mod[o](c, m)), f[o] ? m[o](c) : m[o] = c)
                                        }
                                    }
                                }),
                                f = d.prototype;
                            d.bezierThrough = u, d.cubicToQuadratic = c, d._autoCSS = !0, d.quadraticToCubic = function(t, e, n) {
                                return new s(t, (2 * e + t) / 3, (2 * e + n) / 3, n)
                            }, d._cssRegister = function() {
                                var t = a.CSSPlugin;
                                if (t) {
                                    var e = t._internals,
                                        n = e._parseToProxy,
                                        i = e._setPluginRatio,
                                        r = e.CSSPropTween;
                                    e._registerComplexSpecialProp("bezier", {
                                        parser: function(t, e, o, a, s, c) {
                                            e instanceof Array && (e = {
                                                values: e
                                            }), c = new d;
                                            var l, h, u, p = e.values,
                                                f = p.length - 1,
                                                m = [],
                                                v = {};
                                            if (f < 0) return s;
                                            for (l = 0; l <= f; l++) u = n(t, p[l], a, s, c, f !== l), m[l] = u.end;
                                            for (h in e) v[h] = e[h];
                                            return v.values = m, (s = new r(t, "bezier", 0, 0, u.pt, 2)).data = u, s.plugin = c, s.setRatio = i, 0 === v.autoRotate && (v.autoRotate = !0), !v.autoRotate || v.autoRotate instanceof Array || (l = !0 === v.autoRotate ? 0 : Number(v.autoRotate), v.autoRotate = null != u.end.left ? [
                                                ["left", "top", "rotation", l, !1]
                                            ] : null != u.end.x && [
                                                ["x", "y", "rotation", l, !1]
                                            ]), v.autoRotate && (a._transform || a._enableTransforms(!1), u.autoRotate = a._target._gsTransform, u.proxy.rotation = u.autoRotate.rotation || 0, a._overwriteProps.push("rotation")), c._onInitTween(u.proxy, v, a._tween), s
                                        }
                                    })
                                }
                            }, f._mod = function(t) {
                                for (var e, n = this._overwriteProps, i = n.length; --i > -1;)(e = t[n[i]]) && "function" == typeof e && (this._mod[n[i]] = e)
                            }, f._kill = function(t) {
                                var e, n, i = this._props;
                                for (e in this._beziers)
                                    if (e in t)
                                        for (delete this._beziers[e], delete this._func[e], n = i.length; --n > -1;) i[n] === e && i.splice(n, 1);
                                if (i = this._autoRotate)
                                    for (n = i.length; --n > -1;) t[i[n][2]] && i.splice(n, 1);
                                return this._super._kill.call(this, t)
                            }
                        }(), r._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
                            var n, i, o, a, s = function() {
                                    t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = s.prototype.setRatio
                                },
                                c = r._gsDefine.globals,
                                l = {},
                                h = s.prototype = new t("css");
                            h.constructor = s, s.version = "2.1.3", s.API = 2, s.defaultTransformPerspective = 0, s.defaultSkewType = "compensated", s.defaultSmoothOrigin = !0, h = "px", s.suffixMap = {
                                top: h,
                                right: h,
                                bottom: h,
                                left: h,
                                width: h,
                                height: h,
                                fontSize: h,
                                padding: h,
                                margin: h,
                                perspective: h,
                                lineHeight: ""
                            };
                            var u, p, d, f, m, v, g, y, _ = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                                x = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                                b = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                                w = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b),?/gi,
                                M = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                                T = /(?:\d|\-|\+|=|#|\.)*/g,
                                E = /opacity *= *([^)]*)/i,
                                S = /opacity:([^;]*)/i,
                                A = /alpha\(opacity *=.+?\)/i,
                                P = /^(rgb|hsl)/,
                                L = /([A-Z])/g,
                                R = /-([a-z])/gi,
                                C = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                                O = function(t, e) {
                                    return e.toUpperCase()
                                },
                                I = /(?:Left|Right|Width)/i,
                                D = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                                N = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                                B = /,(?=[^\)]*(?:\(|$))/gi,
                                H = /[\s,\(]/i,
                                F = Math.PI / 180,
                                k = 180 / Math.PI,
                                U = {},
                                z = {
                                    style: {}
                                },
                                G = r.document || {
                                    createElement: function() {
                                        return z
                                    }
                                },
                                j = function(t, e) {
                                    var n = G.createElementNS ? G.createElementNS(e || "http://www.w3.org/1999/xhtml", t) : G.createElement(t);
                                    return n.style ? n : G.createElement(t)
                                },
                                V = j("div"),
                                W = j("img"),
                                X = s._internals = {
                                    _specialProps: l
                                },
                                q = (r.navigator || {}).userAgent || "",
                                Y = function() {
                                    var t = q.indexOf("Android"),
                                        e = j("a");
                                    return d = -1 !== q.indexOf("Safari") && -1 === q.indexOf("Chrome") && (-1 === t || parseFloat(q.substr(t + 8, 2)) > 3), m = d && parseFloat(q.substr(q.indexOf("Version/") + 8, 2)) < 6, f = -1 !== q.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(q) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(q)) && (v = parseFloat(RegExp.$1)), !!e && (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity))
                                }(),
                                Z = function(t) {
                                    return E.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                                },
                                J = function(t) {
                                    r.console && console.log(t)
                                },
                                K = "",
                                Q = "",
                                $ = function(t, e) {
                                    var n, i, r = (e = e || V).style;
                                    if (void 0 !== r[t]) return t;
                                    for (t = t.charAt(0).toUpperCase() + t.substr(1), n = ["O", "Moz", "ms", "Ms", "Webkit"], i = 5; --i > -1 && void 0 === r[n[i] + t];);
                                    return i >= 0 ? (K = "-" + (Q = 3 === i ? "ms" : n[i]).toLowerCase() + "-", Q + t) : null
                                },
                                tt = "undefined" != typeof window ? window : G.defaultView || {
                                    getComputedStyle: function() {}
                                },
                                et = function(t) {
                                    return tt.getComputedStyle(t)
                                },
                                nt = s.getStyle = function(t, e, n, i, r) {
                                    var o;
                                    return Y || "opacity" !== e ? (!i && t.style[e] ? o = t.style[e] : (n = n || et(t)) ? o = n[e] || n.getPropertyValue(e) || n.getPropertyValue(e.replace(L, "-$1").toLowerCase()) : t.currentStyle && (o = t.currentStyle[e]), null == r || o && "none" !== o && "auto" !== o && "auto auto" !== o ? o : r) : Z(t)
                                },
                                it = X.convertToPixels = function(t, n, i, r, o) {
                                    if ("px" === r || !r && "lineHeight" !== n) return i;
                                    if ("auto" === r || !i) return 0;
                                    var a, c, l, h = I.test(n),
                                        u = t,
                                        p = V.style,
                                        d = i < 0,
                                        f = 1 === i;
                                    if (d && (i = -i), f && (i *= 100), "lineHeight" !== n || r)
                                        if ("%" === r && -1 !== n.indexOf("border")) a = i / 100 * (h ? t.clientWidth : t.clientHeight);
                                        else {
                                            if (p.cssText = "border:0 solid red;position:" + nt(t, "position") + ";line-height:0;", "%" !== r && u.appendChild && "v" !== r.charAt(0) && "rem" !== r) p[h ? "borderLeftWidth" : "borderTopWidth"] = i + r;
                                            else {
                                                if (u = t.parentNode || G.body, -1 !== nt(u, "display").indexOf("flex") && (p.position = "absolute"), c = u._gsCache, l = e.ticker.frame, c && h && c.time === l) return c.width * i / 100;
                                                p[h ? "width" : "height"] = i + r
                                            }
                                            u.appendChild(V), a = parseFloat(V[h ? "offsetWidth" : "offsetHeight"]), u.removeChild(V), h && "%" === r && !1 !== s.cacheWidths && ((c = u._gsCache = u._gsCache || {}).time = l, c.width = a / i * 100), 0 !== a || o || (a = it(t, n, i, r, !0))
                                        }
                                    else c = et(t).lineHeight, t.style.lineHeight = i, a = parseFloat(et(t).lineHeight), t.style.lineHeight = c;
                                    return f && (a /= 100), d ? -a : a
                                },
                                rt = X.calculateOffset = function(t, e, n) {
                                    if ("absolute" !== nt(t, "position", n)) return 0;
                                    var i = "left" === e ? "Left" : "Top",
                                        r = nt(t, "margin" + i, n);
                                    return t["offset" + i] - (it(t, e, parseFloat(r), r.replace(T, "")) || 0)
                                },
                                ot = function(t, e) {
                                    var n, i, r, o = {};
                                    if (e = e || et(t))
                                        if (n = e.length)
                                            for (; --n > -1;) - 1 !== (r = e[n]).indexOf("-transform") && Ot !== r || (o[r.replace(R, O)] = e.getPropertyValue(r));
                                        else
                                            for (n in e) - 1 !== n.indexOf("Transform") && Ct !== n || (o[n] = e[n]);
                                    else if (e = t.currentStyle || t.style)
                                        for (n in e) "string" == typeof n && void 0 === o[n] && (o[n.replace(R, O)] = e[n]);
                                    return Y || (o.opacity = Z(t)), i = Wt(t, e, !1), o.rotation = i.rotation, o.skewX = i.skewX, o.scaleX = i.scaleX, o.scaleY = i.scaleY, o.x = i.x, o.y = i.y, Dt && (o.z = i.z, o.rotationX = i.rotationX, o.rotationY = i.rotationY, o.scaleZ = i.scaleZ), o.filters && delete o.filters, o
                                },
                                at = function(t, e, n, i, r) {
                                    var o, a, s, c = {},
                                        l = t.style;
                                    for (a in n) "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (o = n[a]) || r && r[a]) && -1 === a.indexOf("Origin") && ("number" != typeof o && "string" != typeof o || (c[a] = "auto" !== o || "left" !== a && "top" !== a ? "" !== o && "auto" !== o && "none" !== o || "string" != typeof e[a] || "" === e[a].replace(M, "") ? o : 0 : rt(t, a), void 0 !== l[a] && (s = new bt(l, a, l[a], s))));
                                    if (i)
                                        for (a in i) "className" !== a && (c[a] = i[a]);
                                    return {
                                        difs: c,
                                        firstMPT: s
                                    }
                                },
                                st = {
                                    width: ["Left", "Right"],
                                    height: ["Top", "Bottom"]
                                },
                                ct = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                                lt = function(t, e, n) {
                                    if ("svg" === (t.nodeName + "").toLowerCase()) return (n || et(t))[e] || 0;
                                    if (t.getCTM && Gt(t)) return t.getBBox()[e] || 0;
                                    var i = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                                        r = st[e],
                                        o = r.length;
                                    for (n = n || et(t); --o > -1;) i -= parseFloat(nt(t, "padding" + r[o], n, !0)) || 0, i -= parseFloat(nt(t, "border" + r[o] + "Width", n, !0)) || 0;
                                    return i
                                },
                                ht = function(t, e) {
                                    if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                                    null != t && "" !== t || (t = "0 0");
                                    var n, i = t.split(" "),
                                        r = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                                        o = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
                                    if (i.length > 3 && !e) {
                                        for (i = t.split(", ").join(",").split(","), t = [], n = 0; n < i.length; n++) t.push(ht(i[n]));
                                        return t.join(",")
                                    }
                                    return null == o ? o = "center" === r ? "50%" : "0" : "center" === o && (o = "50%"), ("center" === r || isNaN(parseFloat(r)) && -1 === (r + "").indexOf("=")) && (r = "50%"), t = r + " " + o + (i.length > 2 ? " " + i[2] : ""), e && (e.oxp = -1 !== r.indexOf("%"), e.oyp = -1 !== o.indexOf("%"), e.oxr = "=" === r.charAt(1), e.oyr = "=" === o.charAt(1), e.ox = parseFloat(r.replace(M, "")), e.oy = parseFloat(o.replace(M, "")), e.v = t), e || t
                                },
                                ut = function(t, e) {
                                    return "function" == typeof t && (t = t(y, g)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
                                },
                                pt = function(t, e) {
                                    "function" == typeof t && (t = t(y, g));
                                    var n = "string" == typeof t && "=" === t.charAt(1);
                                    return "string" == typeof t && "v" === t.charAt(t.length - 2) && (t = (n ? t.substr(0, 2) : 0) + window["inner" + ("vh" === t.substr(-2) ? "Height" : "Width")] * (parseFloat(n ? t.substr(2) : t) / 100)), null == t ? e : n ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
                                },
                                dt = function(t, e, n, i) {
                                    var r, o, a, s, c;
                                    return "function" == typeof t && (t = t(y, g)), null == t ? s = e : "number" == typeof t ? s = t : (r = 360, o = t.split("_"), a = ((c = "=" === t.charAt(1)) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(o[0].substr(2)) : parseFloat(o[0])) * (-1 === t.indexOf("rad") ? 1 : k) - (c ? 0 : e), o.length && (i && (i[n] = e + a), -1 !== t.indexOf("short") && (a %= r) !== a % (r / 2) && (a = a < 0 ? a + r : a - r), -1 !== t.indexOf("_cw") && a < 0 ? a = (a + 9999999999 * r) % r - (a / r | 0) * r : -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * r) % r - (a / r | 0) * r)), s = e + a), s < 1e-6 && s > -1e-6 && (s = 0), s
                                },
                                ft = {
                                    aqua: [0, 255, 255],
                                    lime: [0, 255, 0],
                                    silver: [192, 192, 192],
                                    black: [0, 0, 0],
                                    maroon: [128, 0, 0],
                                    teal: [0, 128, 128],
                                    blue: [0, 0, 255],
                                    navy: [0, 0, 128],
                                    white: [255, 255, 255],
                                    fuchsia: [255, 0, 255],
                                    olive: [128, 128, 0],
                                    yellow: [255, 255, 0],
                                    orange: [255, 165, 0],
                                    gray: [128, 128, 128],
                                    purple: [128, 0, 128],
                                    green: [0, 128, 0],
                                    red: [255, 0, 0],
                                    pink: [255, 192, 203],
                                    cyan: [0, 255, 255],
                                    transparent: [255, 255, 255, 0]
                                },
                                mt = function(t, e, n) {
                                    return 255 * (6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1 ? e + (n - e) * t * 6 : t < .5 ? n : 3 * t < 2 ? e + (n - e) * (2 / 3 - t) * 6 : e) + .5 | 0
                                },
                                vt = s.parseColor = function(t, e) {
                                    var n, i, r, o, a, s, c, l, h, u, p;
                                    if (t)
                                        if ("number" == typeof t) n = [t >> 16, t >> 8 & 255, 255 & t];
                                        else {
                                            if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ft[t]) n = ft[t];
                                            else if ("#" === t.charAt(0)) 4 === t.length && (t = "#" + (i = t.charAt(1)) + i + (r = t.charAt(2)) + r + (o = t.charAt(3)) + o), n = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t];
                                            else if ("hsl" === t.substr(0, 3))
                                                if (n = p = t.match(_), e) {
                                                    if (-1 !== t.indexOf("=")) return t.match(x)
                                                } else a = Number(n[0]) % 360 / 360, s = Number(n[1]) / 100, i = 2 * (c = Number(n[2]) / 100) - (r = c <= .5 ? c * (s + 1) : c + s - c * s), n.length > 3 && (n[3] = Number(n[3])), n[0] = mt(a + 1 / 3, i, r), n[1] = mt(a, i, r), n[2] = mt(a - 1 / 3, i, r);
                                            else n = t.match(_) || ft.transparent;
                                            n[0] = Number(n[0]), n[1] = Number(n[1]), n[2] = Number(n[2]), n.length > 3 && (n[3] = Number(n[3]))
                                        }
                                    else n = ft.black;
                                    return e && !p && (i = n[0] / 255, r = n[1] / 255, o = n[2] / 255, c = ((l = Math.max(i, r, o)) + (h = Math.min(i, r, o))) / 2, l === h ? a = s = 0 : (u = l - h, s = c > .5 ? u / (2 - l - h) : u / (l + h), a = l === i ? (r - o) / u + (r < o ? 6 : 0) : l === r ? (o - i) / u + 2 : (i - r) / u + 4, a *= 60), n[0] = a + .5 | 0, n[1] = 100 * s + .5 | 0, n[2] = 100 * c + .5 | 0), n
                                },
                                gt = function(t, e) {
                                    var n, i, r, o = t.match(yt) || [],
                                        a = 0,
                                        s = "";
                                    if (!o.length) return t;
                                    for (n = 0; n < o.length; n++) i = o[n], a += (r = t.substr(a, t.indexOf(i, a) - a)).length + i.length, 3 === (i = vt(i, e)).length && i.push(1), s += r + (e ? "hsla(" + i[0] + "," + i[1] + "%," + i[2] + "%," + i[3] : "rgba(" + i.join(",")) + ")";
                                    return s + t.substr(a)
                                },
                                yt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                            for (h in ft) yt += "|" + h + "\\b";
                            yt = new RegExp(yt + ")", "gi"), s.colorStringFilter = function(t) {
                                var e, n = t[0] + " " + t[1];
                                yt.test(n) && (e = -1 !== n.indexOf("hsl(") || -1 !== n.indexOf("hsla("), t[0] = gt(t[0], e), t[1] = gt(t[1], e)), yt.lastIndex = 0
                            }, e.defaultStringFilter || (e.defaultStringFilter = s.colorStringFilter);
                            var _t = function(t, e, n, i) {
                                    if (null == t) return function(t) {
                                        return t
                                    };
                                    var r, o = e ? (t.match(yt) || [""])[0] : "",
                                        a = t.split(o).join("").match(b) || [],
                                        s = t.substr(0, t.indexOf(a[0])),
                                        c = ")" === t.charAt(t.length - 1) ? ")" : "",
                                        l = -1 !== t.indexOf(" ") ? " " : ",",
                                        h = a.length,
                                        u = h > 0 ? a[0].replace(_, "") : "";
                                    return h ? r = e ? function(t) {
                                        var e, p, d, f;
                                        if ("number" == typeof t) t += u;
                                        else if (i && B.test(t)) {
                                            for (f = t.replace(B, "|").split("|"), d = 0; d < f.length; d++) f[d] = r(f[d]);
                                            return f.join(",")
                                        }
                                        if (e = (t.match(yt) || [o])[0], d = (p = t.split(e).join("").match(b) || []).length, h > d--)
                                            for (; ++d < h;) p[d] = n ? p[(d - 1) / 2 | 0] : a[d];
                                        return s + p.join(l) + l + e + c + (-1 !== t.indexOf("inset") ? " inset" : "")
                                    } : function(t) {
                                        var e, o, p;
                                        if ("number" == typeof t) t += u;
                                        else if (i && B.test(t)) {
                                            for (o = t.replace(B, "|").split("|"), p = 0; p < o.length; p++) o[p] = r(o[p]);
                                            return o.join(",")
                                        }
                                        if (p = (e = t.match("," === l ? b : w) || []).length, h > p--)
                                            for (; ++p < h;) e[p] = n ? e[(p - 1) / 2 | 0] : a[p];
                                        return (s && "none" !== t && t.substr(0, t.indexOf(e[0])) || s) + e.join(l) + c
                                    } : function(t) {
                                        return t
                                    }
                                },
                                xt = function(t) {
                                    return t = t.split(","),
                                        function(e, n, i, r, o, a, s) {
                                            var c, l = (n + "").split(" ");
                                            for (s = {}, c = 0; c < 4; c++) s[t[c]] = l[c] = l[c] || l[(c - 1) / 2 >> 0];
                                            return r.parse(e, s, o, a)
                                        }
                                },
                                bt = (X._setPluginRatio = function(t) {
                                    this.plugin.setRatio(t);
                                    for (var e, n, i, r, o, a = this.data, s = a.proxy, c = a.firstMPT; c;) e = s[c.v], c.r ? e = c.r(e) : e < 1e-6 && e > -1e-6 && (e = 0), c.t[c.p] = e, c = c._next;
                                    if (a.autoRotate && (a.autoRotate.rotation = a.mod ? a.mod.call(this._tween, s.rotation, this.t, this._tween) : s.rotation), 1 === t || 0 === t)
                                        for (c = a.firstMPT, o = 1 === t ? "e" : "b"; c;) {
                                            if ((n = c.t).type) {
                                                if (1 === n.type) {
                                                    for (r = n.xs0 + n.s + n.xs1, i = 1; i < n.l; i++) r += n["xn" + i] + n["xs" + (i + 1)];
                                                    n[o] = r
                                                }
                                            } else n[o] = n.s + n.xs0;
                                            c = c._next
                                        }
                                }, function(t, e, n, i, r) {
                                    this.t = t, this.p = e, this.v = n, this.r = r, i && (i._prev = this, this._next = i)
                                }),
                                wt = (X._parseToProxy = function(t, e, n, i, r, o) {
                                    var a, s, c, l, h, u = i,
                                        p = {},
                                        d = {},
                                        f = n._transform,
                                        m = U;
                                    for (n._transform = null, U = e, i = h = n.parse(t, e, i, r), U = m, o && (n._transform = f, u && (u._prev = null, u._prev && (u._prev._next = null))); i && i !== u;) {
                                        if (i.type <= 1 && (d[s = i.p] = i.s + i.c, p[s] = i.s, o || (l = new bt(i, "s", s, l, i.r), i.c = 0), 1 === i.type))
                                            for (a = i.l; --a > 0;) c = "xn" + a, d[s = i.p + "_" + c] = i.data[c], p[s] = i[c], o || (l = new bt(i, c, s, l, i.rxp[c]));
                                        i = i._next
                                    }
                                    return {
                                        proxy: p,
                                        end: d,
                                        firstMPT: l,
                                        pt: h
                                    }
                                }, X.CSSPropTween = function(t, e, i, r, o, s, c, l, h, u, p) {
                                    this.t = t, this.p = e, this.s = i, this.c = r, this.n = c || e, t instanceof wt || a.push(this.n), this.r = l ? "function" == typeof l ? l : Math.round : l, this.type = s || 0, h && (this.pr = h, n = !0), this.b = void 0 === u ? i : u, this.e = void 0 === p ? i + r : p, o && (this._next = o, o._prev = this)
                                }),
                                Mt = function(t, e, n, i, r, o) {
                                    var a = new wt(t, e, n, i - n, r, -1, o);
                                    return a.b = n, a.e = a.xs0 = i, a
                                },
                                Tt = s.parseComplex = function(t, e, n, i, r, o, a, c, l, h) {
                                    n = n || o || "", "function" == typeof i && (i = i(y, g)), a = new wt(t, e, 0, 0, a, h ? 2 : 1, null, !1, c, n, i), i += "", r && yt.test(i + n) && (i = [n, i], s.colorStringFilter(i), n = i[0], i = i[1]);
                                    var p, d, f, m, v, b, w, M, T, E, S, A, P, L = n.split(", ").join(",").split(" "),
                                        R = i.split(", ").join(",").split(" "),
                                        C = L.length,
                                        O = !1 !== u;
                                    for (-1 === i.indexOf(",") && -1 === n.indexOf(",") || (-1 !== (i + n).indexOf("rgb") || -1 !== (i + n).indexOf("hsl") ? (L = L.join(" ").replace(B, ", ").split(" "), R = R.join(" ").replace(B, ", ").split(" ")) : (L = L.join(" ").split(",").join(", ").split(" "), R = R.join(" ").split(",").join(", ").split(" ")), C = L.length), C !== R.length && (C = (L = (o || "").split(" ")).length), a.plugin = l, a.setRatio = h, yt.lastIndex = 0, p = 0; p < C; p++)
                                        if (m = L[p], v = R[p] + "", (M = parseFloat(m)) || 0 === M) a.appendXtra("", M, ut(v, M), v.replace(x, ""), !(!O || -1 === v.indexOf("px")) && Math.round, !0);
                                        else if (r && yt.test(m)) A = ")" + ((A = v.indexOf(")") + 1) ? v.substr(A) : ""), P = -1 !== v.indexOf("hsl") && Y, E = v, m = vt(m, P), v = vt(v, P), (T = m.length + v.length > 6) && !Y && 0 === v[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(R[p]).join("transparent")) : (Y || (T = !1), P ? a.appendXtra(E.substr(0, E.indexOf("hsl")) + (T ? "hsla(" : "hsl("), m[0], ut(v[0], m[0]), ",", !1, !0).appendXtra("", m[1], ut(v[1], m[1]), "%,", !1).appendXtra("", m[2], ut(v[2], m[2]), T ? "%," : "%" + A, !1) : a.appendXtra(E.substr(0, E.indexOf("rgb")) + (T ? "rgba(" : "rgb("), m[0], v[0] - m[0], ",", Math.round, !0).appendXtra("", m[1], v[1] - m[1], ",", Math.round).appendXtra("", m[2], v[2] - m[2], T ? "," : A, Math.round), T && (m = m.length < 4 ? 1 : m[3], a.appendXtra("", m, (v.length < 4 ? 1 : v[3]) - m, A, !1))), yt.lastIndex = 0;
                                    else if (b = m.match(_)) {
                                        if (!(w = v.match(x)) || w.length !== b.length) return a;
                                        for (f = 0, d = 0; d < b.length; d++) S = b[d], E = m.indexOf(S, f), a.appendXtra(m.substr(f, E - f), Number(S), ut(w[d], S), "", !(!O || "px" !== m.substr(E + S.length, 2)) && Math.round, 0 === d), f = E + S.length;
                                        a["xs" + a.l] += m.substr(f)
                                    } else a["xs" + a.l] += a.l || a["xs" + a.l] ? " " + v : v;
                                    if (-1 !== i.indexOf("=") && a.data) {
                                        for (A = a.xs0 + a.data.s, p = 1; p < a.l; p++) A += a["xs" + p] + a.data["xn" + p];
                                        a.e = A + a["xs" + p]
                                    }
                                    return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
                                },
                                Et = 9;
                            for ((h = wt.prototype).l = h.pr = 0; --Et > 0;) h["xn" + Et] = 0, h["xs" + Et] = "";
                            h.xs0 = "", h._next = h._prev = h.xfirst = h.data = h.plugin = h.setRatio = h.rxp = null, h.appendXtra = function(t, e, n, i, r, o) {
                                var a = this,
                                    s = a.l;
                                return a["xs" + s] += o && (s || a["xs" + s]) ? " " + t : t || "", n || 0 === s || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = i || "", s > 0 ? (a.data["xn" + s] = e + n, a.rxp["xn" + s] = r, a["xn" + s] = e, a.plugin || (a.xfirst = new wt(a, "xn" + s, e, n, a.xfirst || a, 0, a.n, r, a.pr), a.xfirst.xs0 = 0), a) : (a.data = {
                                    s: e + n
                                }, a.rxp = {}, a.s = e, a.c = n, a.r = r, a)) : (a["xs" + s] += e + (i || ""), a)
                            };
                            var St = function(t, e) {
                                    e = e || {}, this.p = e.prefix && $(t) || t, l[t] = l[this.p] = this, this.format = e.formatter || _t(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.allowFunc = e.allowFunc, this.pr = e.priority || 0
                                },
                                At = X._registerComplexSpecialProp = function(t, e, n) {
                                    "object" != typeof e && (e = {
                                        parser: n
                                    });
                                    var i, r = t.split(","),
                                        o = e.defaultValue;
                                    for (n = n || [o], i = 0; i < r.length; i++) e.prefix = 0 === i && e.prefix, e.defaultValue = n[i] || o, new St(r[i], e)
                                },
                                Pt = X._registerPluginProp = function(t) {
                                    if (!l[t]) {
                                        var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                                        At(t, {
                                            parser: function(t, n, i, r, o, a, s) {
                                                var h = c.com.greensock.plugins[e];
                                                return h ? (h._cssRegister(), l[i].parse(t, n, i, r, o, a, s)) : (J("Error: " + e + " js file not loaded."), o)
                                            }
                                        })
                                    }
                                };
                            (h = St.prototype).parseComplex = function(t, e, n, i, r, o) {
                                var a, s, c, l, h, u, p = this.keyword;
                                if (this.multi && (B.test(n) || B.test(e) ? (s = e.replace(B, "|").split("|"), c = n.replace(B, "|").split("|")) : p && (s = [e], c = [n])), c) {
                                    for (l = c.length > s.length ? c.length : s.length, a = 0; a < l; a++) e = s[a] = s[a] || this.dflt, n = c[a] = c[a] || this.dflt, p && (h = e.indexOf(p)) !== (u = n.indexOf(p)) && (-1 === u ? s[a] = s[a].split(p).join("") : -1 === h && (s[a] += " " + p));
                                    e = s.join(", "), n = c.join(", ")
                                }
                                return Tt(t, this.p, e, n, this.clrs, this.dflt, i, this.pr, r, o)
                            }, h.parse = function(t, e, n, i, r, a, s) {
                                return this.parseComplex(t.style, this.format(nt(t, this.p, o, !1, this.dflt)), this.format(e), r, a)
                            }, s.registerSpecialProp = function(t, e, n) {
                                At(t, {
                                    parser: function(t, i, r, o, a, s, c) {
                                        var l = new wt(t, r, 0, 0, a, 2, r, !1, n);
                                        return l.plugin = s, l.setRatio = e(t, i, o._tween, r), l
                                    },
                                    priority: n
                                })
                            }, s.useSVGTransformAttr = !0;
                            var Lt, Rt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                                Ct = $("transform"),
                                Ot = K + "transform",
                                It = $("transformOrigin"),
                                Dt = null !== $("perspective"),
                                Nt = X.Transform = function() {
                                    this.perspective = parseFloat(s.defaultTransformPerspective) || 0, this.force3D = !(!1 === s.defaultForce3D || !Dt) && (s.defaultForce3D || "auto")
                                },
                                Bt = r.SVGElement,
                                Ht = function(t, e, n) {
                                    var i, r = G.createElementNS("http://www.w3.org/2000/svg", t),
                                        o = /([a-z])([A-Z])/g;
                                    for (i in n) r.setAttributeNS(null, i.replace(o, "$1-$2").toLowerCase(), n[i]);
                                    return e.appendChild(r), r
                                },
                                Ft = G.documentElement || {},
                                kt = function() {
                                    var t, e, n, i = v || /Android/i.test(q) && !r.chrome;
                                    return G.createElementNS && Ft.appendChild && !i && (t = Ht("svg", Ft), n = (e = Ht("rect", t, {
                                        width: 100,
                                        height: 50,
                                        x: 100
                                    })).getBoundingClientRect().width, e.style[It] = "50% 50%", e.style[Ct] = "scaleX(0.5)", i = n === e.getBoundingClientRect().width && !(f && Dt), Ft.removeChild(t)), i
                                }(),
                                Ut = function(t, e, n, i, r, o) {
                                    var a, c, l, h, u, p, d, f, m, v, g, y, _, x, b = t._gsTransform,
                                        w = Vt(t, !0);
                                    b && (_ = b.xOrigin, x = b.yOrigin), (!i || (a = i.split(" ")).length < 2) && (0 === (d = t.getBBox()).x && 0 === d.y && d.width + d.height === 0 && (d = {
                                        x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0,
                                        y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0,
                                        width: 0,
                                        height: 0
                                    }), a = [(-1 !== (e = ht(e).split(" "))[0].indexOf("%") ? parseFloat(e[0]) / 100 * d.width : parseFloat(e[0])) + d.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * d.height : parseFloat(e[1])) + d.y]), n.xOrigin = h = parseFloat(a[0]), n.yOrigin = u = parseFloat(a[1]), i && w !== jt && (p = w[0], d = w[1], f = w[2], m = w[3], v = w[4], g = w[5], (y = p * m - d * f) && (c = h * (m / y) + u * (-f / y) + (f * g - m * v) / y, l = h * (-d / y) + u * (p / y) - (p * g - d * v) / y, h = n.xOrigin = a[0] = c, u = n.yOrigin = a[1] = l)), b && (o && (n.xOffset = b.xOffset, n.yOffset = b.yOffset, b = n), r || !1 !== r && !1 !== s.defaultSmoothOrigin ? (c = h - _, l = u - x, b.xOffset += c * w[0] + l * w[2] - c, b.yOffset += c * w[1] + l * w[3] - l) : b.xOffset = b.yOffset = 0), o || t.setAttribute("data-svg-origin", a.join(" "))
                                },
                                zt = function(t) {
                                    var e, n = j("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                                        i = this.parentNode,
                                        r = this.nextSibling,
                                        o = this.style.cssText;
                                    if (Ft.appendChild(n), n.appendChild(this), this.style.display = "block", t) try {
                                        e = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = zt
                                    } catch (t) {} else this._originalGetBBox && (e = this._originalGetBBox());
                                    return r ? i.insertBefore(this, r) : i.appendChild(this), Ft.removeChild(n), this.style.cssText = o, e
                                },
                                Gt = function(t) {
                                    return !(!Bt || !t.getCTM || t.parentNode && !t.ownerSVGElement || ! function(t) {
                                        try {
                                            return t.getBBox()
                                        } catch (e) {
                                            return zt.call(t, !0)
                                        }
                                    }(t))
                                },
                                jt = [1, 0, 0, 1, 0, 0],
                                Vt = function(t, e) {
                                    var n, i, r, o, a, s, c, l = t._gsTransform || new Nt,
                                        h = t.style;
                                    if (Ct ? i = nt(t, Ot, null, !0) : t.currentStyle && (i = (i = t.currentStyle.filter.match(D)) && 4 === i.length ? [i[0].substr(4), Number(i[2].substr(4)), Number(i[1].substr(4)), i[3].substr(4), l.x || 0, l.y || 0].join(",") : ""), n = !i || "none" === i || "matrix(1, 0, 0, 1, 0, 0)" === i, Ct && n && !t.offsetParent && t !== Ft && (o = h.display, h.display = "block", (c = t.parentNode) && t.offsetParent || (a = 1, s = t.nextSibling, Ft.appendChild(t)), n = !(i = nt(t, Ot, null, !0)) || "none" === i || "matrix(1, 0, 0, 1, 0, 0)" === i, o ? h.display = o : Zt(h, "display"), a && (s ? c.insertBefore(t, s) : c ? c.appendChild(t) : Ft.removeChild(t))), (l.svg || t.getCTM && Gt(t)) && (n && -1 !== (h[Ct] + "").indexOf("matrix") && (i = h[Ct], n = 0), r = t.getAttribute("transform"), n && r && (i = "matrix(" + (r = t.transform.baseVal.consolidate().matrix).a + "," + r.b + "," + r.c + "," + r.d + "," + r.e + "," + r.f + ")", n = 0)), n) return jt;
                                    for (r = (i || "").match(_) || [], Et = r.length; --Et > -1;) o = Number(r[Et]), r[Et] = (a = o - (o |= 0)) ? (1e5 * a + (a < 0 ? -.5 : .5) | 0) / 1e5 + o : o;
                                    return e && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
                                },
                                Wt = X.getTransform = function(t, n, i, r) {
                                    if (t._gsTransform && i && !r) return t._gsTransform;
                                    var o, a, c, l, h, u, p = i && t._gsTransform || new Nt,
                                        d = p.scaleX < 0,
                                        f = Dt && (parseFloat(nt(t, It, n, !1, "0 0 0").split(" ")[2]) || p.zOrigin) || 0,
                                        m = parseFloat(s.defaultTransformPerspective) || 0;
                                    if (p.svg = !(!t.getCTM || !Gt(t)), p.svg && (Ut(t, nt(t, It, n, !1, "50% 50%") + "", p, t.getAttribute("data-svg-origin")), Lt = s.useSVGTransformAttr || kt), (o = Vt(t)) !== jt) {
                                        if (16 === o.length) {
                                            var v, g, y, _, x, b = o[0],
                                                w = o[1],
                                                M = o[2],
                                                T = o[3],
                                                E = o[4],
                                                S = o[5],
                                                A = o[6],
                                                P = o[7],
                                                L = o[8],
                                                R = o[9],
                                                C = o[10],
                                                O = o[12],
                                                I = o[13],
                                                D = o[14],
                                                N = o[11],
                                                B = Math.atan2(A, C);
                                            p.zOrigin && (O = L * (D = -p.zOrigin) - o[12], I = R * D - o[13], D = C * D + p.zOrigin - o[14]), p.rotationX = B * k, B && (v = E * (_ = Math.cos(-B)) + L * (x = Math.sin(-B)), g = S * _ + R * x, y = A * _ + C * x, L = E * -x + L * _, R = S * -x + R * _, C = A * -x + C * _, N = P * -x + N * _, E = v, S = g, A = y), B = Math.atan2(-M, C), p.rotationY = B * k, B && (g = w * (_ = Math.cos(-B)) - R * (x = Math.sin(-B)), y = M * _ - C * x, R = w * x + R * _, C = M * x + C * _, N = T * x + N * _, b = v = b * _ - L * x, w = g, M = y), B = Math.atan2(w, b), p.rotation = B * k, B && (v = b * (_ = Math.cos(B)) + w * (x = Math.sin(B)), g = E * _ + S * x, y = L * _ + R * x, w = w * _ - b * x, S = S * _ - E * x, R = R * _ - L * x, b = v, E = g, L = y), p.rotationX && Math.abs(p.rotationX) + Math.abs(p.rotation) > 359.9 && (p.rotationX = p.rotation = 0, p.rotationY = 180 - p.rotationY), B = Math.atan2(E, S), p.scaleX = (1e5 * Math.sqrt(b * b + w * w + M * M) + .5 | 0) / 1e5, p.scaleY = (1e5 * Math.sqrt(S * S + A * A) + .5 | 0) / 1e5, p.scaleZ = (1e5 * Math.sqrt(L * L + R * R + C * C) + .5 | 0) / 1e5, b /= p.scaleX, E /= p.scaleY, w /= p.scaleX, S /= p.scaleY, Math.abs(B) > 2e-5 ? (p.skewX = B * k, E = 0, "simple" !== p.skewType && (p.scaleY *= 1 / Math.cos(B))) : p.skewX = 0, p.perspective = N ? 1 / (N < 0 ? -N : N) : 0, p.x = O, p.y = I, p.z = D, p.svg && (p.x -= p.xOrigin - (p.xOrigin * b - p.yOrigin * E), p.y -= p.yOrigin - (p.yOrigin * w - p.xOrigin * S))
                                        } else if (!Dt || r || !o.length || p.x !== o[4] || p.y !== o[5] || !p.rotationX && !p.rotationY) {
                                            var H = o.length >= 6,
                                                F = H ? o[0] : 1,
                                                U = o[1] || 0,
                                                z = o[2] || 0,
                                                G = H ? o[3] : 1;
                                            p.x = o[4] || 0, p.y = o[5] || 0, c = Math.sqrt(F * F + U * U), l = Math.sqrt(G * G + z * z), h = F || U ? Math.atan2(U, F) * k : p.rotation || 0, u = z || G ? Math.atan2(z, G) * k + h : p.skewX || 0, p.scaleX = c, p.scaleY = l, p.rotation = h, p.skewX = u, Dt && (p.rotationX = p.rotationY = p.z = 0, p.perspective = m, p.scaleZ = 1), p.svg && (p.x -= p.xOrigin - (p.xOrigin * F + p.yOrigin * z), p.y -= p.yOrigin - (p.xOrigin * U + p.yOrigin * G))
                                        }
                                        for (a in Math.abs(p.skewX) > 90 && Math.abs(p.skewX) < 270 && (d ? (p.scaleX *= -1, p.skewX += p.rotation <= 0 ? 180 : -180, p.rotation += p.rotation <= 0 ? 180 : -180) : (p.scaleY *= -1, p.skewX += p.skewX <= 0 ? 180 : -180)), p.zOrigin = f, p) p[a] < 2e-5 && p[a] > -2e-5 && (p[a] = 0)
                                    }
                                    return i && (t._gsTransform = p, p.svg && (Lt && t.style[Ct] ? e.delayedCall(.001, function() {
                                        Zt(t.style, Ct)
                                    }) : !Lt && t.getAttribute("transform") && e.delayedCall(.001, function() {
                                        t.removeAttribute("transform")
                                    }))), p
                                },
                                Xt = function(t) {
                                    var e, n, i = this.data,
                                        r = -i.rotation * F,
                                        o = r + i.skewX * F,
                                        a = (Math.cos(r) * i.scaleX * 1e5 | 0) / 1e5,
                                        s = (Math.sin(r) * i.scaleX * 1e5 | 0) / 1e5,
                                        c = (Math.sin(o) * -i.scaleY * 1e5 | 0) / 1e5,
                                        l = (Math.cos(o) * i.scaleY * 1e5 | 0) / 1e5,
                                        h = this.t.style,
                                        u = this.t.currentStyle;
                                    if (u) {
                                        n = s, s = -c, c = -n, e = u.filter, h.filter = "";
                                        var p, d, f = this.t.offsetWidth,
                                            m = this.t.offsetHeight,
                                            g = "absolute" !== u.position,
                                            y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + s + ", M21=" + c + ", M22=" + l,
                                            _ = i.x + f * i.xPercent / 100,
                                            x = i.y + m * i.yPercent / 100;
                                        if (null != i.ox && (_ += (p = (i.oxp ? f * i.ox * .01 : i.ox) - f / 2) - (p * a + (d = (i.oyp ? m * i.oy * .01 : i.oy) - m / 2) * s), x += d - (p * c + d * l)), y += g ? ", Dx=" + ((p = f / 2) - (p * a + (d = m / 2) * s) + _) + ", Dy=" + (d - (p * c + d * l) + x) + ")" : ", sizingMethod='auto expand')", -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? h.filter = e.replace(N, y) : h.filter = y + " " + e, 0 !== t && 1 !== t || 1 === a && 0 === s && 0 === c && 1 === l && (g && -1 === y.indexOf("Dx=0, Dy=0") || E.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && h.removeAttribute("filter")), !g) {
                                            var b, w, M, S = v < 8 ? 1 : -1;
                                            for (p = i.ieOffsetX || 0, d = i.ieOffsetY || 0, i.ieOffsetX = Math.round((f - ((a < 0 ? -a : a) * f + (s < 0 ? -s : s) * m)) / 2 + _), i.ieOffsetY = Math.round((m - ((l < 0 ? -l : l) * m + (c < 0 ? -c : c) * f)) / 2 + x), Et = 0; Et < 4; Et++) M = (n = -1 !== (b = u[w = ct[Et]]).indexOf("px") ? parseFloat(b) : it(this.t, w, parseFloat(b), b.replace(T, "")) || 0) !== i[w] ? Et < 2 ? -i.ieOffsetX : -i.ieOffsetY : Et < 2 ? p - i.ieOffsetX : d - i.ieOffsetY, h[w] = (i[w] = Math.round(n - M * (0 === Et || 2 === Et ? 1 : S))) + "px"
                                        }
                                    }
                                },
                                qt = X.set3DTransformRatio = X.setTransformRatio = function(t) {
                                    var e, n, i, r, o, a, s, c, l, h, u, p, d, m, v, g, y, _, x, b, w, M = this.data,
                                        T = this.t.style,
                                        E = M.rotation,
                                        S = M.rotationX,
                                        A = M.rotationY,
                                        P = M.scaleX,
                                        L = M.scaleY,
                                        R = M.scaleZ,
                                        C = M.x,
                                        O = M.y,
                                        I = M.z,
                                        D = M.svg,
                                        N = M.perspective,
                                        B = M.force3D,
                                        H = M.skewY,
                                        k = M.skewX;
                                    if (H && (k += H, E += H), !((1 !== t && 0 !== t || "auto" !== B || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && B || I || N || A || S || 1 !== R) || Lt && D || !Dt) E || k || D ? (E *= F, b = k * F, w = 1e5, n = Math.cos(E) * P, o = Math.sin(E) * P, i = Math.sin(E - b) * -L, a = Math.cos(E - b) * L, b && "simple" === M.skewType && (e = Math.tan(b - H * F), i *= e = Math.sqrt(1 + e * e), a *= e, H && (e = Math.tan(H * F), n *= e = Math.sqrt(1 + e * e), o *= e)), D && (C += M.xOrigin - (M.xOrigin * n + M.yOrigin * i) + M.xOffset, O += M.yOrigin - (M.xOrigin * o + M.yOrigin * a) + M.yOffset, Lt && (M.xPercent || M.yPercent) && (v = this.t.getBBox(), C += .01 * M.xPercent * v.width, O += .01 * M.yPercent * v.height), C < (v = 1e-6) && C > -v && (C = 0), O < v && O > -v && (O = 0)), x = (n * w | 0) / w + "," + (o * w | 0) / w + "," + (i * w | 0) / w + "," + (a * w | 0) / w + "," + C + "," + O + ")", D && Lt ? this.t.setAttribute("transform", "matrix(" + x) : T[Ct] = (M.xPercent || M.yPercent ? "translate(" + M.xPercent + "%," + M.yPercent + "%) matrix(" : "matrix(") + x) : T[Ct] = (M.xPercent || M.yPercent ? "translate(" + M.xPercent + "%," + M.yPercent + "%) matrix(" : "matrix(") + P + ",0,0," + L + "," + C + "," + O + ")";
                                    else {
                                        if (f && (P < (v = 1e-4) && P > -v && (P = R = 2e-5), L < v && L > -v && (L = R = 2e-5), !N || M.z || M.rotationX || M.rotationY || (N = 0)), E || k) E *= F, g = n = Math.cos(E), y = o = Math.sin(E), k && (E -= k * F, g = Math.cos(E), y = Math.sin(E), "simple" === M.skewType && (e = Math.tan((k - H) * F), g *= e = Math.sqrt(1 + e * e), y *= e, M.skewY && (e = Math.tan(H * F), n *= e = Math.sqrt(1 + e * e), o *= e))), i = -y, a = g;
                                        else {
                                            if (!(A || S || 1 !== R || N || D)) return void(T[Ct] = (M.xPercent || M.yPercent ? "translate(" + M.xPercent + "%," + M.yPercent + "%) translate3d(" : "translate3d(") + C + "px," + O + "px," + I + "px)" + (1 !== P || 1 !== L ? " scale(" + P + "," + L + ")" : ""));
                                            n = a = 1, i = o = 0
                                        }
                                        h = 1, r = s = c = l = u = p = 0, d = N ? -1 / N : 0, m = M.zOrigin, v = 1e-6, ",", "0", (E = A * F) && (g = Math.cos(E), c = -(y = Math.sin(E)), u = d * -y, r = n * y, s = o * y, h = g, d *= g, n *= g, o *= g), (E = S * F) && (e = i * (g = Math.cos(E)) + r * (y = Math.sin(E)), _ = a * g + s * y, l = h * y, p = d * y, r = i * -y + r * g, s = a * -y + s * g, h *= g, d *= g, i = e, a = _), 1 !== R && (r *= R, s *= R, h *= R, d *= R), 1 !== L && (i *= L, a *= L, l *= L, p *= L), 1 !== P && (n *= P, o *= P, c *= P, u *= P), (m || D) && (m && (C += r * -m, O += s * -m, I += h * -m + m), D && (C += M.xOrigin - (M.xOrigin * n + M.yOrigin * i) + M.xOffset, O += M.yOrigin - (M.xOrigin * o + M.yOrigin * a) + M.yOffset), C < v && C > -v && (C = "0"), O < v && O > -v && (O = "0"), I < v && I > -v && (I = 0)), x = M.xPercent || M.yPercent ? "translate(" + M.xPercent + "%," + M.yPercent + "%) matrix3d(" : "matrix3d(", x += (n < v && n > -v ? "0" : n) + "," + (o < v && o > -v ? "0" : o) + "," + (c < v && c > -v ? "0" : c), x += "," + (u < v && u > -v ? "0" : u) + "," + (i < v && i > -v ? "0" : i) + "," + (a < v && a > -v ? "0" : a), S || A || 1 !== R ? (x += "," + (l < v && l > -v ? "0" : l) + "," + (p < v && p > -v ? "0" : p) + "," + (r < v && r > -v ? "0" : r), x += "," + (s < v && s > -v ? "0" : s) + "," + (h < v && h > -v ? "0" : h) + "," + (d < v && d > -v ? "0" : d) + ",") : x += ",0,0,0,0,1,0,", x += C + "," + O + "," + I + "," + (N ? 1 + -I / N : 1) + ")", T[Ct] = x
                                    }
                                };
                            (h = Nt.prototype).x = h.y = h.z = h.skewX = h.skewY = h.rotation = h.rotationX = h.rotationY = h.zOrigin = h.xPercent = h.yPercent = h.xOffset = h.yOffset = 0, h.scaleX = h.scaleY = h.scaleZ = 1, At("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                                parser: function(t, e, n, i, r, a, c) {
                                    if (i._lastParsedTransform === c) return r;
                                    i._lastParsedTransform = c;
                                    var l = c.scale && "function" == typeof c.scale ? c.scale : 0;
                                    l && (c.scale = l(y, t));
                                    var h, u, p, d, f, m, v, _, x, b = t._gsTransform,
                                        w = t.style,
                                        M = Rt.length,
                                        T = c,
                                        E = {},
                                        S = Wt(t, o, !0, T.parseTransform),
                                        A = T.transform && ("function" == typeof T.transform ? T.transform(y, g) : T.transform);
                                    if (S.skewType = T.skewType || S.skewType || s.defaultSkewType, i._transform = S, "rotationZ" in T && (T.rotation = T.rotationZ), A && "string" == typeof A && Ct)(u = V.style)[Ct] = A, u.display = "block", u.position = "absolute", -1 !== A.indexOf("%") && (u.width = nt(t, "width"), u.height = nt(t, "height")), G.body.appendChild(V), h = Wt(V, null, !1), "simple" === S.skewType && (h.scaleY *= Math.cos(h.skewX * F)), S.svg && (m = S.xOrigin, v = S.yOrigin, h.x -= S.xOffset, h.y -= S.yOffset, (T.transformOrigin || T.svgOrigin) && (A = {}, Ut(t, ht(T.transformOrigin), A, T.svgOrigin, T.smoothOrigin, !0), m = A.xOrigin, v = A.yOrigin, h.x -= A.xOffset - S.xOffset, h.y -= A.yOffset - S.yOffset), (m || v) && (_ = Vt(V, !0), h.x -= m - (m * _[0] + v * _[2]), h.y -= v - (m * _[1] + v * _[3]))), G.body.removeChild(V), h.perspective || (h.perspective = S.perspective), null != T.xPercent && (h.xPercent = pt(T.xPercent, S.xPercent)), null != T.yPercent && (h.yPercent = pt(T.yPercent, S.yPercent));
                                    else if ("object" == typeof T) {
                                        if (h = {
                                                scaleX: pt(null != T.scaleX ? T.scaleX : T.scale, S.scaleX),
                                                scaleY: pt(null != T.scaleY ? T.scaleY : T.scale, S.scaleY),
                                                scaleZ: pt(T.scaleZ, S.scaleZ),
                                                x: pt(T.x, S.x),
                                                y: pt(T.y, S.y),
                                                z: pt(T.z, S.z),
                                                xPercent: pt(T.xPercent, S.xPercent),
                                                yPercent: pt(T.yPercent, S.yPercent),
                                                perspective: pt(T.transformPerspective, S.perspective)
                                            }, null != (f = T.directionalRotation))
                                            if ("object" == typeof f)
                                                for (u in f) T[u] = f[u];
                                            else T.rotation = f;
                                        "string" == typeof T.x && -1 !== T.x.indexOf("%") && (h.x = 0, h.xPercent = pt(T.x, S.xPercent)), "string" == typeof T.y && -1 !== T.y.indexOf("%") && (h.y = 0, h.yPercent = pt(T.y, S.yPercent)), h.rotation = dt("rotation" in T ? T.rotation : "shortRotation" in T ? T.shortRotation + "_short" : S.rotation, S.rotation, "rotation", E), Dt && (h.rotationX = dt("rotationX" in T ? T.rotationX : "shortRotationX" in T ? T.shortRotationX + "_short" : S.rotationX || 0, S.rotationX, "rotationX", E), h.rotationY = dt("rotationY" in T ? T.rotationY : "shortRotationY" in T ? T.shortRotationY + "_short" : S.rotationY || 0, S.rotationY, "rotationY", E)), h.skewX = dt(T.skewX, S.skewX), h.skewY = dt(T.skewY, S.skewY)
                                    }
                                    for (Dt && null != T.force3D && (S.force3D = T.force3D, d = !0), (p = S.force3D || S.z || S.rotationX || S.rotationY || h.z || h.rotationX || h.rotationY || h.perspective) || null == T.scale || (h.scaleZ = 1); --M > -1;)((A = h[x = Rt[M]] - S[x]) > 1e-6 || A < -1e-6 || null != T[x] || null != U[x]) && (d = !0, r = new wt(S, x, S[x], A, r), x in E && (r.e = E[x]), r.xs0 = 0, r.plugin = a, i._overwriteProps.push(r.n));
                                    return A = "function" == typeof T.transformOrigin ? T.transformOrigin(y, g) : T.transformOrigin, S.svg && (A || T.svgOrigin) && (m = S.xOffset, v = S.yOffset, Ut(t, ht(A), h, T.svgOrigin, T.smoothOrigin), r = Mt(S, "xOrigin", (b ? S : h).xOrigin, h.xOrigin, r, "transformOrigin"), r = Mt(S, "yOrigin", (b ? S : h).yOrigin, h.yOrigin, r, "transformOrigin"), m === S.xOffset && v === S.yOffset || (r = Mt(S, "xOffset", b ? m : S.xOffset, S.xOffset, r, "transformOrigin"), r = Mt(S, "yOffset", b ? v : S.yOffset, S.yOffset, r, "transformOrigin")), A = "0px 0px"), (A || Dt && p && S.zOrigin) && (Ct ? (d = !0, x = It, A || (A = (A = (nt(t, x, o, !1, "50% 50%") + "").split(" "))[0] + " " + A[1] + " " + S.zOrigin + "px"), A += "", (r = new wt(w, x, 0, 0, r, -1, "transformOrigin")).b = w[x], r.plugin = a, Dt ? (u = S.zOrigin, A = A.split(" "), S.zOrigin = (A.length > 2 ? parseFloat(A[2]) : u) || 0, r.xs0 = r.e = A[0] + " " + (A[1] || "50%") + " 0px", (r = new wt(S, "zOrigin", 0, 0, r, -1, r.n)).b = u, r.xs0 = r.e = S.zOrigin) : r.xs0 = r.e = A) : ht(A + "", S)), d && (i._transformType = S.svg && Lt || !p && 3 !== this._transformType ? 2 : 3), l && (c.scale = l), r
                                },
                                allowFunc: !0,
                                prefix: !0
                            }), At("boxShadow", {
                                defaultValue: "0px 0px 0px 0px #999",
                                prefix: !0,
                                color: !0,
                                multi: !0,
                                keyword: "inset"
                            }), At("clipPath", {
                                defaultValue: "inset(0%)",
                                prefix: !0,
                                multi: !0,
                                formatter: _t("inset(0% 0% 0% 0%)", !1, !0)
                            }), At("borderRadius", {
                                defaultValue: "0px",
                                parser: function(t, e, n, r, a, s) {
                                    e = this.format(e);
                                    var c, l, h, u, p, d, f, m, v, g, y, _, x, b, w, M, T = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                                        E = t.style;
                                    for (v = parseFloat(t.offsetWidth), g = parseFloat(t.offsetHeight), c = e.split(" "), l = 0; l < T.length; l++) this.p.indexOf("border") && (T[l] = $(T[l])), -1 !== (p = u = nt(t, T[l], o, !1, "0px")).indexOf(" ") && (p = (u = p.split(" "))[0], u = u[1]), d = h = c[l], f = parseFloat(p), _ = p.substr((f + "").length), (x = "=" === d.charAt(1)) ? (m = parseInt(d.charAt(0) + "1", 10), d = d.substr(2), m *= parseFloat(d), y = d.substr((m + "").length - (m < 0 ? 1 : 0)) || "") : (m = parseFloat(d), y = d.substr((m + "").length)), "" === y && (y = i[n] || _), y !== _ && (b = it(t, "borderLeft", f, _), w = it(t, "borderTop", f, _), "%" === y ? (p = b / v * 100 + "%", u = w / g * 100 + "%") : "em" === y ? (p = b / (M = it(t, "borderLeft", 1, "em")) + "em", u = w / M + "em") : (p = b + "px", u = w + "px"), x && (d = parseFloat(p) + m + y, h = parseFloat(u) + m + y)), a = Tt(E, T[l], p + " " + u, d + " " + h, !1, "0px", a);
                                    return a
                                },
                                prefix: !0,
                                formatter: _t("0px 0px 0px 0px", !1, !0)
                            }), At("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                                defaultValue: "0px",
                                parser: function(t, e, n, i, r, a) {
                                    return Tt(t.style, n, this.format(nt(t, n, o, !1, "0px 0px")), this.format(e), !1, "0px", r)
                                },
                                prefix: !0,
                                formatter: _t("0px 0px", !1, !0)
                            }), At("backgroundPosition", {
                                defaultValue: "0 0",
                                parser: function(t, e, n, i, r, a) {
                                    var s, c, l, h, u, p, d = "background-position",
                                        f = o || et(t),
                                        m = this.format((f ? v ? f.getPropertyValue(d + "-x") + " " + f.getPropertyValue(d + "-y") : f.getPropertyValue(d) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                                        g = this.format(e);
                                    if (-1 !== m.indexOf("%") != (-1 !== g.indexOf("%")) && g.split(",").length < 2 && (p = nt(t, "backgroundImage").replace(C, "")) && "none" !== p) {
                                        for (s = m.split(" "), c = g.split(" "), W.setAttribute("src", p), l = 2; --l > -1;)(h = -1 !== (m = s[l]).indexOf("%")) !== (-1 !== c[l].indexOf("%")) && (u = 0 === l ? t.offsetWidth - W.width : t.offsetHeight - W.height, s[l] = h ? parseFloat(m) / 100 * u + "px" : parseFloat(m) / u * 100 + "%");
                                        m = s.join(" ")
                                    }
                                    return this.parseComplex(t.style, m, g, r, a)
                                },
                                formatter: ht
                            }), At("backgroundSize", {
                                defaultValue: "0 0",
                                formatter: function(t) {
                                    return "co" === (t += "").substr(0, 2) ? t : ht(-1 === t.indexOf(" ") ? t + " " + t : t)
                                }
                            }), At("perspective", {
                                defaultValue: "0px",
                                prefix: !0
                            }), At("perspectiveOrigin", {
                                defaultValue: "50% 50%",
                                prefix: !0
                            }), At("transformStyle", {
                                prefix: !0
                            }), At("backfaceVisibility", {
                                prefix: !0
                            }), At("userSelect", {
                                prefix: !0
                            }), At("margin", {
                                parser: xt("marginTop,marginRight,marginBottom,marginLeft")
                            }), At("padding", {
                                parser: xt("paddingTop,paddingRight,paddingBottom,paddingLeft")
                            }), At("clip", {
                                defaultValue: "rect(0px,0px,0px,0px)",
                                parser: function(t, e, n, i, r, a) {
                                    var s, c, l;
                                    return v < 9 ? (c = t.currentStyle, l = v < 8 ? " " : ",", s = "rect(" + c.clipTop + l + c.clipRight + l + c.clipBottom + l + c.clipLeft + ")", e = this.format(e).split(",").join(l)) : (s = this.format(nt(t, this.p, o, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, s, e, r, a)
                                }
                            }), At("textShadow", {
                                defaultValue: "0px 0px 0px #999",
                                color: !0,
                                multi: !0
                            }), At("autoRound,strictUnits", {
                                parser: function(t, e, n, i, r) {
                                    return r
                                }
                            }), At("border", {
                                defaultValue: "0px solid #000",
                                parser: function(t, e, n, i, r, a) {
                                    var s = nt(t, "borderTopWidth", o, !1, "0px"),
                                        c = this.format(e).split(" "),
                                        l = c[0].replace(T, "");
                                    return "px" !== l && (s = parseFloat(s) / it(t, "borderTopWidth", 1, l) + l), this.parseComplex(t.style, this.format(s + " " + nt(t, "borderTopStyle", o, !1, "solid") + " " + nt(t, "borderTopColor", o, !1, "#000")), c.join(" "), r, a)
                                },
                                color: !0,
                                formatter: function(t) {
                                    var e = t.split(" ");
                                    return e[0] + " " + (e[1] || "solid") + " " + (t.match(yt) || ["#000"])[0]
                                }
                            }), At("borderWidth", {
                                parser: xt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                            }), At("float,cssFloat,styleFloat", {
                                parser: function(t, e, n, i, r, o) {
                                    var a = t.style,
                                        s = "cssFloat" in a ? "cssFloat" : "styleFloat";
                                    return new wt(a, s, 0, 0, r, -1, n, !1, 0, a[s], e)
                                }
                            });
                            var Yt = function(t) {
                                var e, n = this.t,
                                    i = n.filter || nt(this.data, "filter") || "",
                                    r = this.s + this.c * t | 0;
                                100 === r && (-1 === i.indexOf("atrix(") && -1 === i.indexOf("radient(") && -1 === i.indexOf("oader(") ? (n.removeAttribute("filter"), e = !nt(this.data, "filter")) : (n.filter = i.replace(A, ""), e = !0)), e || (this.xn1 && (n.filter = i = i || "alpha(opacity=" + r + ")"), -1 === i.indexOf("pacity") ? 0 === r && this.xn1 || (n.filter = i + " alpha(opacity=" + r + ")") : n.filter = i.replace(E, "opacity=" + r))
                            };
                            At("opacity,alpha,autoAlpha", {
                                defaultValue: "1",
                                parser: function(t, e, n, i, r, a) {
                                    var s = parseFloat(nt(t, "opacity", o, !1, "1")),
                                        c = t.style,
                                        l = "autoAlpha" === n;
                                    return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + s), l && 1 === s && "hidden" === nt(t, "visibility", o) && 0 !== e && (s = 0), Y ? r = new wt(c, "opacity", s, e - s, r) : ((r = new wt(c, "opacity", 100 * s, 100 * (e - s), r)).xn1 = l ? 1 : 0, c.zoom = 1, r.type = 2, r.b = "alpha(opacity=" + r.s + ")", r.e = "alpha(opacity=" + (r.s + r.c) + ")", r.data = t, r.plugin = a, r.setRatio = Yt), l && ((r = new wt(c, "visibility", 0, 0, r, -1, null, !1, 0, 0 !== s ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit")).xs0 = "inherit", i._overwriteProps.push(r.n), i._overwriteProps.push(n)), r
                                }
                            });
                            var Zt = function(t, e) {
                                    e && (t.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), t.removeProperty(e.replace(L, "-$1").toLowerCase())) : t.removeAttribute(e))
                                },
                                Jt = function(t) {
                                    if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                                        this.t.setAttribute("class", 0 === t ? this.b : this.e);
                                        for (var e = this.data, n = this.t.style; e;) e.v ? n[e.p] = e.v : Zt(n, e.p), e = e._next;
                                        1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                                    } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                                };
                            At("className", {
                                parser: function(t, e, i, r, a, s, c) {
                                    var l, h, u, p, d, f = t.getAttribute("class") || "",
                                        m = t.style.cssText;
                                    if ((a = r._classNamePT = new wt(t, i, 0, 0, a, 2)).setRatio = Jt, a.pr = -11, n = !0, a.b = f, h = ot(t, o), u = t._gsClassPT) {
                                        for (p = {}, d = u.data; d;) p[d.p] = 1, d = d._next;
                                        u.setRatio(1)
                                    }
                                    return t._gsClassPT = a, a.e = "=" !== e.charAt(1) ? e : f.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", a.e), l = at(t, h, ot(t), c, p), t.setAttribute("class", f), a.data = l.firstMPT, t.style.cssText !== m && (t.style.cssText = m), a = a.xfirst = r.parse(t, l.difs, a, s)
                                }
                            });
                            var Kt = function(t) {
                                if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                                    var e, n, i, r, o, a = this.t.style,
                                        s = l.transform.parse;
                                    if ("all" === this.e) a.cssText = "", r = !0;
                                    else
                                        for (i = (e = this.e.split(" ").join("").split(",")).length; --i > -1;) n = e[i], l[n] && (l[n].parse === s ? r = !0 : n = "transformOrigin" === n ? It : l[n].p), Zt(a, n);
                                    r && (Zt(a, Ct), (o = this.t._gsTransform) && (o.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                                }
                            };
                            for (At("clearProps", {
                                    parser: function(t, e, i, r, o) {
                                        return (o = new wt(t, i, 0, 0, o, 2)).setRatio = Kt, o.e = e, o.pr = -10, o.data = r._tween, n = !0, o
                                    }
                                }), h = "bezier,throwProps,physicsProps,physics2D".split(","), Et = h.length; Et--;) Pt(h[Et]);
                            (h = s.prototype)._firstPT = h._lastParsedTransform = h._transform = null, h._onInitTween = function(t, e, r, c) {
                                if (!t.nodeType) return !1;
                                this._target = g = t, this._tween = r, this._vars = e, y = c, u = e.autoRound, n = !1, i = e.suffixMap || s.suffixMap, o = et(t), a = this._overwriteProps;
                                var h, f, v, _, x, b, w, M, T, E = t.style;
                                if (p && "" === E.zIndex && ("auto" !== (h = nt(t, "zIndex", o)) && "" !== h || this._addLazySet(E, "zIndex", 0)), "string" == typeof e && (_ = E.cssText, h = ot(t, o), E.cssText = _ + ";" + e, h = at(t, h, ot(t)).difs, !Y && S.test(e) && (h.opacity = parseFloat(RegExp.$1)), e = h, E.cssText = _), e.className ? this._firstPT = f = l.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = f = this.parse(t, e, null), this._transformType) {
                                    for (T = 3 === this._transformType, Ct ? d && (p = !0, "" === E.zIndex && ("auto" !== (w = nt(t, "zIndex", o)) && "" !== w || this._addLazySet(E, "zIndex", 0)), m && this._addLazySet(E, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (T ? "visible" : "hidden"))) : E.zoom = 1, v = f; v && v._next;) v = v._next;
                                    M = new wt(t, "transform", 0, 0, null, 2), this._linkCSSP(M, null, v), M.setRatio = Ct ? qt : Xt, M.data = this._transform || Wt(t, o, !0), M.tween = r, M.pr = -1, a.pop()
                                }
                                if (n) {
                                    for (; f;) {
                                        for (b = f._next, v = _; v && v.pr > f.pr;) v = v._next;
                                        (f._prev = v ? v._prev : x) ? f._prev._next = f: _ = f, (f._next = v) ? v._prev = f : x = f, f = b
                                    }
                                    this._firstPT = _
                                }
                                return !0
                            }, h.parse = function(t, e, n, r) {
                                var a, s, c, h, p, d, f, m, v, _, x = t.style;
                                for (a in e) {
                                    if (d = e[a], s = l[a], "function" != typeof d || s && s.allowFunc || (d = d(y, g)), s) n = s.parse(t, d, a, this, n, r, e);
                                    else {
                                        if ("--" === a.substr(0, 2)) {
                                            this._tween._propLookup[a] = this._addTween.call(this._tween, t.style, "setProperty", et(t).getPropertyValue(a) + "", d + "", a, !1, a);
                                            continue
                                        }
                                        p = nt(t, a, o) + "", v = "string" == typeof d, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || v && P.test(d) ? (v || (d = ((d = vt(d)).length > 3 ? "rgba(" : "rgb(") + d.join(",") + ")"), n = Tt(x, a, p, d, !0, "transparent", n, 0, r)) : v && H.test(d) ? n = Tt(x, a, p, d, !0, null, n, 0, r) : (f = (c = parseFloat(p)) || 0 === c ? p.substr((c + "").length) : "", "" !== p && "auto" !== p || ("width" === a || "height" === a ? (c = lt(t, a, o), f = "px") : "left" === a || "top" === a ? (c = rt(t, a, o), f = "px") : (c = "opacity" !== a ? 0 : 1, f = "")), (_ = v && "=" === d.charAt(1)) ? (h = parseInt(d.charAt(0) + "1", 10), d = d.substr(2), h *= parseFloat(d), m = d.replace(T, "")) : (h = parseFloat(d), m = v ? d.replace(T, "") : ""), "" === m && (m = a in i ? i[a] : f), d = h || 0 === h ? (_ ? h + c : h) + m : e[a], f !== m && ("" === m && "lineHeight" !== a || (h || 0 === h) && c && (c = it(t, a, c, f), "%" === m ? (c /= it(t, a, 100, "%") / 100, !0 !== e.strictUnits && (p = c + "%")) : "em" === m || "rem" === m || "vw" === m || "vh" === m ? c /= it(t, a, 1, m) : "px" !== m && (h = it(t, a, h, m), m = "px"), _ && (h || 0 === h) && (d = h + c + m))), _ && (h += c), !c && 0 !== c || !h && 0 !== h ? void 0 !== x[a] && (d || d + "" != "NaN" && null != d) ? (n = new wt(x, a, h || c || 0, 0, n, -1, a, !1, 0, p, d)).xs0 = "none" !== d || "display" !== a && -1 === a.indexOf("Style") ? d : p : J("invalid " + a + " tween value: " + e[a]) : (n = new wt(x, a, c, h - c, n, 0, a, !1 !== u && ("px" === m || "zIndex" === a), 0, p, d)).xs0 = m)
                                    }
                                    r && n && !n.plugin && (n.plugin = r)
                                }
                                return n
                            }, h.setRatio = function(t) {
                                var e, n, i, r = this._firstPT;
                                if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                                    if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                                        for (; r;) {
                                            if (e = r.c * t + r.s, r.r ? e = r.r(e) : e < 1e-6 && e > -1e-6 && (e = 0), r.type)
                                                if (1 === r.type)
                                                    if (2 === (i = r.l)) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                                    else if (3 === i) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                            else if (4 === i) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                            else if (5 === i) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                            else {
                                                for (n = r.xs0 + e + r.xs1, i = 1; i < r.l; i++) n += r["xn" + i] + r["xs" + (i + 1)];
                                                r.t[r.p] = n
                                            } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                                            else r.t[r.p] = e + r.xs0;
                                            r = r._next
                                        } else
                                            for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
                                    else
                                        for (; r;) {
                                            if (2 !== r.type)
                                                if (r.r && -1 !== r.type)
                                                    if (e = r.r(r.s + r.c), r.type) {
                                                        if (1 === r.type) {
                                                            for (i = r.l, n = r.xs0 + e + r.xs1, i = 1; i < r.l; i++) n += r["xn" + i] + r["xs" + (i + 1)];
                                                            r.t[r.p] = n
                                                        }
                                                    } else r.t[r.p] = e + r.xs0;
                                            else r.t[r.p] = r.e;
                                            else r.setRatio(t);
                                            r = r._next
                                        }
                            }, h._enableTransforms = function(t) {
                                this._transform = this._transform || Wt(this._target, o, !0), this._transformType = this._transform.svg && Lt || !t && 3 !== this._transformType ? 2 : 3
                            };
                            var Qt = function(t) {
                                this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                            };
                            h._addLazySet = function(t, e, n) {
                                var i = this._firstPT = new wt(t, e, 0, 0, this._firstPT, 2);
                                i.e = n, i.setRatio = Qt, i.data = this
                            }, h._linkCSSP = function(t, e, n, i) {
                                return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, i = !0), n ? n._next = t : i || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = n), t
                            }, h._mod = function(t) {
                                for (var e = this._firstPT; e;) "function" == typeof t[e.p] && (e.r = t[e.p]), e = e._next
                            }, h._kill = function(e) {
                                var n, i, r, o = e;
                                if (e.autoAlpha || e.alpha) {
                                    for (i in o = {}, e) o[i] = e[i];
                                    o.opacity = 1, o.autoAlpha && (o.visibility = 1)
                                }
                                for (e.className && (n = this._classNamePT) && ((r = n.xfirst) && r._prev ? this._linkCSSP(r._prev, n._next, r._prev._prev) : r === this._firstPT && (this._firstPT = n._next), n._next && this._linkCSSP(n._next, n._next._next, r._prev), this._classNamePT = null), n = this._firstPT; n;) n.plugin && n.plugin !== i && n.plugin._kill && (n.plugin._kill(e), i = n.plugin), n = n._next;
                                return t.prototype._kill.call(this, o)
                            };
                            var $t = function(t, e, n) {
                                var i, r, o, a;
                                if (t.slice)
                                    for (r = t.length; --r > -1;) $t(t[r], e, n);
                                else
                                    for (r = (i = t.childNodes).length; --r > -1;) a = (o = i[r]).type, o.style && (e.push(ot(o)), n && n.push(o)), 1 !== a && 9 !== a && 11 !== a || !o.childNodes.length || $t(o, e, n)
                            };
                            return s.cascadeTo = function(t, n, i) {
                                var r, o, a, s, c = e.to(t, n, i),
                                    l = [c],
                                    h = [],
                                    u = [],
                                    p = [],
                                    d = e._internals.reservedProps;
                                for (t = c._targets || c.target, $t(t, h, p), c.render(n, !0, !0), $t(t, u), c.render(0, !0, !0), c._enabled(!0), r = p.length; --r > -1;)
                                    if ((o = at(p[r], h[r], u[r])).firstMPT) {
                                        for (a in o = o.difs, i) d[a] && (o[a] = i[a]);
                                        for (a in s = {}, o) s[a] = h[r][a];
                                        l.push(e.fromTo(p[r], n, s, o))
                                    } return l
                            }, t.activate([s]), s
                        }, !0),
                        function() {
                            var t = function(t) {
                                    var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
                                    return function(n) {
                                        return (Math.round(n / t) * t * e | 0) / e
                                    }
                                },
                                e = function(t, e) {
                                    for (; t;) t.f || t.blob || (t.m = e || Math.round), t = t._next
                                },
                                n = r._gsDefine.plugin({
                                    propName: "roundProps",
                                    version: "1.7.0",
                                    priority: -1,
                                    API: 2,
                                    init: function(t, e, n) {
                                        return this._tween = n, !0
                                    }
                                }).prototype;
                            n._onInitAllProps = function() {
                                var n, i, r, o, a = this._tween,
                                    s = a.vars.roundProps,
                                    c = {},
                                    l = a._propLookup.roundProps;
                                if ("object" != typeof s || s.push)
                                    for ("string" == typeof s && (s = s.split(",")), r = s.length; --r > -1;) c[s[r]] = Math.round;
                                else
                                    for (o in s) c[o] = t(s[o]);
                                for (o in c)
                                    for (n = a._firstPT; n;) i = n._next, n.pg ? n.t._mod(c) : n.n === o && (2 === n.f && n.t ? e(n.t._firstPT, c[o]) : (this._add(n.t, o, n.s, n.c, c[o]), i && (i._prev = n._prev), n._prev ? n._prev._next = i : a._firstPT === n && (a._firstPT = i), n._next = n._prev = null, a._propLookup[o] = l)), n = i;
                                return !1
                            }, n._add = function(t, e, n, i, r) {
                                this._addTween(t, e, n, n + i, e, r || Math.round), this._overwriteProps.push(e)
                            }
                        }(), r._gsDefine.plugin({
                            propName: "attr",
                            API: 2,
                            version: "0.6.1",
                            init: function(t, e, n, i) {
                                var r, o;
                                if ("function" != typeof t.setAttribute) return !1;
                                for (r in e) "function" == typeof(o = e[r]) && (o = o(i, t)), this._addTween(t, "setAttribute", t.getAttribute(r) + "", o + "", r, !1, r), this._overwriteProps.push(r);
                                return !0
                            }
                        }), r._gsDefine.plugin({
                            propName: "directionalRotation",
                            version: "0.3.1",
                            API: 2,
                            init: function(t, e, n, i) {
                                "object" != typeof e && (e = {
                                    rotation: e
                                }), this.finals = {};
                                var r, o, a, s, c, l, h = !0 === e.useRadians ? 2 * Math.PI : 360;
                                for (r in e) "useRadians" !== r && ("function" == typeof(s = e[r]) && (s = s(i, t)), o = (l = (s + "").split("_"))[0], a = parseFloat("function" != typeof t[r] ? t[r] : t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]()), c = (s = this.finals[r] = "string" == typeof o && "=" === o.charAt(1) ? a + parseInt(o.charAt(0) + "1", 10) * Number(o.substr(2)) : Number(o) || 0) - a, l.length && (-1 !== (o = l.join("_")).indexOf("short") && (c %= h) !== c % (h / 2) && (c = c < 0 ? c + h : c - h), -1 !== o.indexOf("_cw") && c < 0 ? c = (c + 9999999999 * h) % h - (c / h | 0) * h : -1 !== o.indexOf("ccw") && c > 0 && (c = (c - 9999999999 * h) % h - (c / h | 0) * h)), (c > 1e-6 || c < -1e-6) && (this._addTween(t, r, a, a + c, r), this._overwriteProps.push(r)));
                                return !0
                            },
                            set: function(t) {
                                var e;
                                if (1 !== t) this._super.setRatio.call(this, t);
                                else
                                    for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
                            }
                        })._autoCSS = !0, r._gsDefine("easing.Back", ["easing.Ease"], function(t) {
                            var e, n, i, o, a = r.GreenSockGlobals || r,
                                s = a.com.greensock,
                                c = 2 * Math.PI,
                                l = Math.PI / 2,
                                h = s._class,
                                u = function(e, n) {
                                    var i = h("easing." + e, function() {}, !0),
                                        r = i.prototype = new t;
                                    return r.constructor = i, r.getRatio = n, i
                                },
                                p = t.register || function() {},
                                d = function(t, e, n, i, r) {
                                    var o = h("easing." + t, {
                                        easeOut: new e,
                                        easeIn: new n,
                                        easeInOut: new i
                                    }, !0);
                                    return p(o, t), o
                                },
                                f = function(t, e, n) {
                                    this.t = t, this.v = e, n && (this.next = n, n.prev = this, this.c = n.v - e, this.gap = n.t - t)
                                },
                                m = function(e, n) {
                                    var i = h("easing." + e, function(t) {
                                            this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                                        }, !0),
                                        r = i.prototype = new t;
                                    return r.constructor = i, r.getRatio = n, r.config = function(t) {
                                        return new i(t)
                                    }, i
                                },
                                v = d("Back", m("BackOut", function(t) {
                                    return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                                }), m("BackIn", function(t) {
                                    return t * t * ((this._p1 + 1) * t - this._p1)
                                }), m("BackInOut", function(t) {
                                    return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                                })),
                                g = h("easing.SlowMo", function(t, e, n) {
                                    e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === n
                                }, !0),
                                y = g.prototype = new t;
                            return y.constructor = g, y.getRatio = function(t) {
                                var e = t + (.5 - t) * this._p;
                                return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 === t ? 0 : 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
                            }, g.ease = new g(.7, .7), y.config = g.config = function(t, e, n) {
                                return new g(t, e, n)
                            }, (y = (e = h("easing.SteppedEase", function(t, e) {
                                t = t || 1, this._p1 = 1 / t, this._p2 = t + (e ? 0 : 1), this._p3 = e ? 1 : 0
                            }, !0)).prototype = new t).constructor = e, y.getRatio = function(t) {
                                return t < 0 ? t = 0 : t >= 1 && (t = .999999999), ((this._p2 * t | 0) + this._p3) * this._p1
                            }, y.config = e.config = function(t, n) {
                                return new e(t, n)
                            }, (y = (n = h("easing.ExpoScaleEase", function(t, e, n) {
                                this._p1 = Math.log(e / t), this._p2 = e - t, this._p3 = t, this._ease = n
                            }, !0)).prototype = new t).constructor = n, y.getRatio = function(t) {
                                return this._ease && (t = this._ease.getRatio(t)), (this._p3 * Math.exp(this._p1 * t) - this._p3) / this._p2
                            }, y.config = n.config = function(t, e, i) {
                                return new n(t, e, i)
                            }, (y = (i = h("easing.RoughEase", function(e) {
                                for (var n, i, r, o, a, s, c = (e = e || {}).taper || "none", l = [], h = 0, u = 0 | (e.points || 20), p = u, d = !1 !== e.randomize, m = !0 === e.clamp, v = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --p > -1;) n = d ? Math.random() : 1 / u * p, i = v ? v.getRatio(n) : n, r = "none" === c ? g : "out" === c ? (o = 1 - n) * o * g : "in" === c ? n * n * g : n < .5 ? (o = 2 * n) * o * .5 * g : (o = 2 * (1 - n)) * o * .5 * g, d ? i += Math.random() * r - .5 * r : p % 2 ? i += .5 * r : i -= .5 * r, m && (i > 1 ? i = 1 : i < 0 && (i = 0)), l[h++] = {
                                    x: n,
                                    y: i
                                };
                                for (l.sort(function(t, e) {
                                        return t.x - e.x
                                    }), s = new f(1, 1, null), p = u; --p > -1;) a = l[p], s = new f(a.x, a.y, s);
                                this._prev = new f(0, 0, 0 !== s.t ? s : s.next)
                            }, !0)).prototype = new t).constructor = i, y.getRatio = function(t) {
                                var e = this._prev;
                                if (t > e.t) {
                                    for (; e.next && t >= e.t;) e = e.next;
                                    e = e.prev
                                } else
                                    for (; e.prev && t <= e.t;) e = e.prev;
                                return this._prev = e, e.v + (t - e.t) / e.gap * e.c
                            }, y.config = function(t) {
                                return new i(t)
                            }, i.ease = new i, d("Bounce", u("BounceOut", function(t) {
                                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                            }), u("BounceIn", function(t) {
                                return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : t < 2 / 2.75 ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                            }), u("BounceInOut", function(t) {
                                var e = t < .5;
                                return (t = e ? 1 - 2 * t : 2 * t - 1) < 1 / 2.75 ? t *= 7.5625 * t : t = t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
                            })), d("Circ", u("CircOut", function(t) {
                                return Math.sqrt(1 - (t -= 1) * t)
                            }), u("CircIn", function(t) {
                                return -(Math.sqrt(1 - t * t) - 1)
                            }), u("CircInOut", function(t) {
                                return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                            })), d("Elastic", (o = function(e, n, i) {
                                var r = h("easing." + e, function(t, e) {
                                        this._p1 = t >= 1 ? t : 1, this._p2 = (e || i) / (t < 1 ? t : 1), this._p3 = this._p2 / c * (Math.asin(1 / this._p1) || 0), this._p2 = c / this._p2
                                    }, !0),
                                    o = r.prototype = new t;
                                return o.constructor = r, o.getRatio = n, o.config = function(t, e) {
                                    return new r(t, e)
                                }, r
                            })("ElasticOut", function(t) {
                                return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
                            }, .3), o("ElasticIn", function(t) {
                                return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)
                            }, .3), o("ElasticInOut", function(t) {
                                return (t *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
                            }, .45)), d("Expo", u("ExpoOut", function(t) {
                                return 1 - Math.pow(2, -10 * t)
                            }), u("ExpoIn", function(t) {
                                return Math.pow(2, 10 * (t - 1)) - .001
                            }), u("ExpoInOut", function(t) {
                                return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                            })), d("Sine", u("SineOut", function(t) {
                                return Math.sin(t * l)
                            }), u("SineIn", function(t) {
                                return 1 - Math.cos(t * l)
                            }), u("SineInOut", function(t) {
                                return -.5 * (Math.cos(Math.PI * t) - 1)
                            })), h("easing.EaseLookup", {
                                find: function(e) {
                                    return t.map[e]
                                }
                            }, !0), p(a.SlowMo, "SlowMo", "ease,"), p(i, "RoughEase", "ease,"), p(e, "SteppedEase", "ease,"), v
                        }, !0)
                }), r._gsDefine && r._gsQueue.pop()(),
                function(n, r) {
                    "use strict";
                    var o = {},
                        a = n.document,
                        s = n.GreenSockGlobals = n.GreenSockGlobals || n,
                        c = s.TweenMax;
                    if (c) return void 0 !== t && t.exports && (t.exports = c), c;
                    var l, h, u, p, d, f = function(t) {
                            var e, n = t.split("."),
                                i = s;
                            for (e = 0; e < n.length; e++) i[n[e]] = i = i[n[e]] || {};
                            return i
                        },
                        m = f("com.greensock"),
                        v = function(t) {
                            var e, n = [],
                                i = t.length;
                            for (e = 0; e !== i; n.push(t[e++]));
                            return n
                        },
                        g = function() {},
                        y = function() {
                            var t = Object.prototype.toString,
                                e = t.call([]);
                            return function(n) {
                                return null != n && (n instanceof Array || "object" == typeof n && !!n.push && t.call(n) === e)
                            }
                        }(),
                        _ = {},
                        x = function(n, r, a, c) {
                            this.sc = _[n] ? _[n].sc : [], _[n] = this, this.gsClass = null, this.func = a;
                            var l = [];
                            this.check = function(h) {
                                for (var u, p, d, m, v = r.length, g = v; --v > -1;)(u = _[r[v]] || new x(r[v], [])).gsClass ? (l[v] = u.gsClass, g--) : h && u.sc.push(this);
                                if (0 === g && a) {
                                    if (d = (p = ("com.greensock." + n).split(".")).pop(), m = f(p.join("."))[d] = this.gsClass = a.apply(a, l), c)
                                        if (s[d] = o[d] = m, void 0 !== t && t.exports)
                                            if ("TweenMax" === n)
                                                for (v in t.exports = o.TweenMax = m, o) m[v] = o[v];
                                            else o.TweenMax && (o.TweenMax[d] = m);
                                    else void 0 === (i = function() {
                                        return m
                                    }.apply(e, [])) || (t.exports = i);
                                    for (v = 0; v < this.sc.length; v++) this.sc[v].check()
                                }
                            }, this.check(!0)
                        },
                        b = n._gsDefine = function(t, e, n, i) {
                            return new x(t, e, n, i)
                        },
                        w = m._class = function(t, e, n) {
                            return e = e || function() {}, b(t, [], function() {
                                return e
                            }, n), e
                        };
                    b.globals = s;
                    var M = [0, 0, 1, 1],
                        T = w("easing.Ease", function(t, e, n, i) {
                            this._func = t, this._type = n || 0, this._power = i || 0, this._params = e ? M.concat(e) : M
                        }, !0),
                        E = T.map = {},
                        S = T.register = function(t, e, n, i) {
                            for (var r, o, a, s, c = e.split(","), l = c.length, h = (n || "easeIn,easeOut,easeInOut").split(","); --l > -1;)
                                for (o = c[l], r = i ? w("easing." + o, null, !0) : m.easing[o] || {}, a = h.length; --a > -1;) s = h[a], E[o + "." + s] = E[s + o] = r[s] = t.getRatio ? t : t[s] || new t
                        };
                    for ((u = T.prototype)._calcEnd = !1, u.getRatio = function(t) {
                            if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                            var e = this._type,
                                n = this._power,
                                i = 1 === e ? 1 - t : 2 === e ? t : t < .5 ? 2 * t : 2 * (1 - t);
                            return 1 === n ? i *= i : 2 === n ? i *= i * i : 3 === n ? i *= i * i * i : 4 === n && (i *= i * i * i * i), 1 === e ? 1 - i : 2 === e ? i : t < .5 ? i / 2 : 1 - i / 2
                        }, h = (l = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; --h > -1;) u = l[h] + ",Power" + h, S(new T(null, null, 1, h), u, "easeOut", !0), S(new T(null, null, 2, h), u, "easeIn" + (0 === h ? ",easeNone" : "")), S(new T(null, null, 3, h), u, "easeInOut");
                    E.linear = m.easing.Linear.easeIn, E.swing = m.easing.Quad.easeInOut;
                    var A = w("events.EventDispatcher", function(t) {
                        this._listeners = {}, this._eventTarget = t || this
                    });
                    (u = A.prototype).addEventListener = function(t, e, n, i, r) {
                        r = r || 0;
                        var o, a, s = this._listeners[t],
                            c = 0;
                        for (this !== p || d || p.wake(), null == s && (this._listeners[t] = s = []), a = s.length; --a > -1;)(o = s[a]).c === e && o.s === n ? s.splice(a, 1) : 0 === c && o.pr < r && (c = a + 1);
                        s.splice(c, 0, {
                            c: e,
                            s: n,
                            up: i,
                            pr: r
                        })
                    }, u.removeEventListener = function(t, e) {
                        var n, i = this._listeners[t];
                        if (i)
                            for (n = i.length; --n > -1;)
                                if (i[n].c === e) return void i.splice(n, 1)
                    }, u.dispatchEvent = function(t) {
                        var e, n, i, r = this._listeners[t];
                        if (r)
                            for ((e = r.length) > 1 && (r = r.slice(0)), n = this._eventTarget; --e > -1;)(i = r[e]) && (i.up ? i.c.call(i.s || n, {
                                type: t,
                                target: n
                            }) : i.c.call(i.s || n))
                    };
                    var P = n.requestAnimationFrame,
                        L = n.cancelAnimationFrame,
                        R = Date.now || function() {
                            return (new Date).getTime()
                        },
                        C = R();
                    for (h = (l = ["ms", "moz", "webkit", "o"]).length; --h > -1 && !P;) P = n[l[h] + "RequestAnimationFrame"], L = n[l[h] + "CancelAnimationFrame"] || n[l[h] + "CancelRequestAnimationFrame"];
                    w("Ticker", function(t, e) {
                        var n, i, r, o, s, c = this,
                            l = R(),
                            h = !(!1 === e || !P) && "auto",
                            u = 500,
                            f = 33,
                            m = function(t) {
                                var e, a, h = R() - C;
                                h > u && (l += h - f), C += h, c.time = (C - l) / 1e3, e = c.time - s, (!n || e > 0 || !0 === t) && (c.frame++, s += e + (e >= o ? .004 : o - e), a = !0), !0 !== t && (r = i(m)), a && c.dispatchEvent("tick")
                            };
                        A.call(c), c.time = c.frame = 0, c.tick = function() {
                            m(!0)
                        }, c.lagSmoothing = function(t, e) {
                            if (!arguments.length) return u < 1e8;
                            u = t || 1e8, f = Math.min(e, u, 0)
                        }, c.sleep = function() {
                            null != r && (h && L ? L(r) : clearTimeout(r), i = g, r = null, c === p && (d = !1))
                        }, c.wake = function(t) {
                            null !== r ? c.sleep() : t ? l += -C + (C = R()) : c.frame > 10 && (C = R() - u + 5), i = 0 === n ? g : h && P ? P : function(t) {
                                return setTimeout(t, 1e3 * (s - c.time) + 1 | 0)
                            }, c === p && (d = !0), m(2)
                        }, c.fps = function(t) {
                            if (!arguments.length) return n;
                            o = 1 / ((n = t) || 60), s = this.time + o, c.wake()
                        }, c.useRAF = function(t) {
                            if (!arguments.length) return h;
                            c.sleep(), h = t, c.fps(n)
                        }, c.fps(t), setTimeout(function() {
                            "auto" === h && c.frame < 5 && "hidden" !== (a || {}).visibilityState && c.useRAF(!1)
                        }, 1500)
                    }), (u = m.Ticker.prototype = new m.events.EventDispatcher).constructor = m.Ticker;
                    var O = w("core.Animation", function(t, e) {
                        if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !!e.immediateRender, this.data = e.data, this._reversed = !!e.reversed, Q) {
                            d || p.wake();
                            var n = this.vars.useFrames ? K : Q;
                            n.add(this, n._time), this.vars.paused && this.paused(!0)
                        }
                    });
                    p = O.ticker = new m.Ticker, (u = O.prototype)._dirty = u._gc = u._initted = u._paused = !1, u._totalTime = u._time = 0, u._rawPrevTime = -1, u._next = u._last = u._onUpdate = u._timeline = u.timeline = null, u._paused = !1;
                    var I = function() {
                        d && R() - C > 2e3 && ("hidden" !== (a || {}).visibilityState || !p.lagSmoothing()) && p.wake();
                        var t = setTimeout(I, 2e3);
                        t.unref && t.unref()
                    };
                    I(), u.play = function(t, e) {
                        return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
                    }, u.pause = function(t, e) {
                        return null != t && this.seek(t, e), this.paused(!0)
                    }, u.resume = function(t, e) {
                        return null != t && this.seek(t, e), this.paused(!1)
                    }, u.seek = function(t, e) {
                        return this.totalTime(Number(t), !1 !== e)
                    }, u.restart = function(t, e) {
                        return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0)
                    }, u.reverse = function(t, e) {
                        return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
                    }, u.render = function(t, e, n) {}, u.invalidate = function() {
                        return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, !this._gc && this.timeline || this._enabled(!0), this
                    }, u.isActive = function() {
                        var t, e = this._timeline,
                            n = this._startTime;
                        return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= n && t < n + this.totalDuration() / this._timeScale - 1e-8
                    }, u._enabled = function(t, e) {
                        return d || p.wake(), this._gc = !t, this._active = this.isActive(), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
                    }, u._kill = function(t, e) {
                        return this._enabled(!1, !1)
                    }, u.kill = function(t, e) {
                        return this._kill(t, e), this
                    }, u._uncache = function(t) {
                        for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                        return this
                    }, u._swapSelfInParams = function(t) {
                        for (var e = t.length, n = t.concat(); --e > -1;) "{self}" === t[e] && (n[e] = this);
                        return n
                    }, u._callback = function(t) {
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
                    }, u.eventCallback = function(t, e, n, i) {
                        if ("on" === (t || "").substr(0, 2)) {
                            var r = this.vars;
                            if (1 === arguments.length) return r[t];
                            null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = y(n) && -1 !== n.join("").indexOf("{self}") ? this._swapSelfInParams(n) : n, r[t + "Scope"] = i), "onUpdate" === t && (this._onUpdate = e)
                        }
                        return this
                    }, u.delay = function(t) {
                        return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
                    }, u.duration = function(t) {
                        return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
                    }, u.totalDuration = function(t) {
                        return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
                    }, u.time = function(t, e) {
                        return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
                    }, u.totalTime = function(t, e, n) {
                        if (d || p.wake(), !arguments.length) return this._totalTime;
                        if (this._timeline) {
                            if (t < 0 && !n && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                                this._dirty && this.totalDuration();
                                var i = this._totalDuration,
                                    r = this._timeline;
                                if (t > i && !n && (t = i), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? i - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                                    for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                            }
                            this._gc && this._enabled(!0, !1), this._totalTime === t && 0 !== this._duration || (H.length && tt(), this.render(t, e, !1), H.length && tt())
                        }
                        return this
                    }, u.progress = u.totalProgress = function(t, e) {
                        var n = this.duration();
                        return arguments.length ? this.totalTime(n * t, e) : n ? this._time / n : this.ratio
                    }, u.startTime = function(t) {
                        return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
                    }, u.endTime = function(t) {
                        return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
                    }, u.timeScale = function(t) {
                        if (!arguments.length) return this._timeScale;
                        var e, n;
                        for (t = t || 1e-8, this._timeline && this._timeline.smoothChildTiming && (n = (e = this._pauseTime) || 0 === e ? e : this._timeline.totalTime(), this._startTime = n - (n - this._startTime) * this._timeScale / t), this._timeScale = t, n = this.timeline; n && n.timeline;) n._dirty = !0, n.totalDuration(), n = n.timeline;
                        return this
                    }, u.reversed = function(t) {
                        return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
                    }, u.paused = function(t) {
                        if (!arguments.length) return this._paused;
                        var e, n, i = this._timeline;
                        return t != this._paused && i && (d || t || p.wake(), n = (e = i.rawTime()) - this._pauseTime, !t && i.smoothChildTiming && (this._startTime += n, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== n && this._initted && this.duration() && (e = i.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
                    };
                    var D = w("core.SimpleTimeline", function(t) {
                        O.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
                    });
                    (u = D.prototype = new O).constructor = D, u.kill()._gc = !1, u._first = u._last = u._recent = null, u._sortChildren = !1, u.add = u.insert = function(t, e, n, i) {
                        var r, o;
                        if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = this.rawTime() - (t._timeline.rawTime() - t._pauseTime)), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), r = this._last, this._sortChildren)
                            for (o = t._startTime; r && r._startTime > o;) r = r._prev;
                        return r ? (t._next = r._next, r._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = r, this._recent = t, this._timeline && this._uncache(!0), this
                    }, u._remove = function(t, e) {
                        return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
                    }, u.render = function(t, e, n) {
                        var i, r = this._first;
                        for (this._totalTime = this._time = this._rawPrevTime = t; r;) i = r._next, (r._active || t >= r._startTime && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, n) : r.render((t - r._startTime) * r._timeScale, e, n)), r = i
                    }, u.rawTime = function() {
                        return d || p.wake(), this._totalTime
                    };
                    var N = w("TweenLite", function(t, e, i) {
                            if (O.call(this, e, i), this.render = N.prototype.render, null == t) throw "Cannot tween a null target.";
                            this.target = t = "string" != typeof t ? t : N.selector(t) || t;
                            var r, o, a, s = t.jquery || t.length && t !== n && t[0] && (t[0] === n || t[0].nodeType && t[0].style && !t.nodeType),
                                c = this.vars.overwrite;
                            if (this._overwrite = c = null == c ? J[N.defaultOverwrite] : "number" == typeof c ? c >> 0 : J[c], (s || t instanceof Array || t.push && y(t)) && "number" != typeof t[0])
                                for (this._targets = a = v(t), this._propLookup = [], this._siblings = [], r = 0; r < a.length; r++)(o = a[r]) ? "string" != typeof o ? o.length && o !== n && o[0] && (o[0] === n || o[0].nodeType && o[0].style && !o.nodeType) ? (a.splice(r--, 1), this._targets = a = a.concat(v(o))) : (this._siblings[r] = et(o, this, !1), 1 === c && this._siblings[r].length > 1 && it(o, this, null, 1, this._siblings[r])) : "string" == typeof(o = a[r--] = N.selector(o)) && a.splice(r + 1, 1) : a.splice(r--, 1);
                            else this._propLookup = {}, this._siblings = et(t, this, !1), 1 === c && this._siblings.length > 1 && it(t, this, null, 1, this._siblings);
                            (this.vars.immediateRender || 0 === e && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -1e-8, this.render(Math.min(0, -this._delay)))
                        }, !0),
                        B = function(t) {
                            return t && t.length && t !== n && t[0] && (t[0] === n || t[0].nodeType && t[0].style && !t.nodeType)
                        };
                    (u = N.prototype = new O).constructor = N, u.kill()._gc = !1, u.ratio = 0, u._firstPT = u._targets = u._overwrittenProps = u._startAt = null, u._notifyPluginsOfEnabled = u._lazy = !1, N.version = "2.1.3", N.defaultEase = u._ease = new T(null, null, 1, 1), N.defaultOverwrite = "auto", N.ticker = p, N.autoSleep = 120, N.lagSmoothing = function(t, e) {
                        p.lagSmoothing(t, e)
                    }, N.selector = n.$ || n.jQuery || function(t) {
                        var e = n.$ || n.jQuery;
                        return e ? (N.selector = e, e(t)) : (a || (a = n.document), a ? a.querySelectorAll ? a.querySelectorAll(t) : a.getElementById("#" === t.charAt(0) ? t.substr(1) : t) : t)
                    };
                    var H = [],
                        F = {},
                        k = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                        U = /[\+-]=-?[\.\d]/,
                        z = function(t) {
                            for (var e, n = this._firstPT; n;) e = n.blob ? 1 === t && null != this.end ? this.end : t ? this.join("") : this.start : n.c * t + n.s, n.m ? e = n.m.call(this._tween, e, this._target || n.t, this._tween) : e < 1e-6 && e > -1e-6 && !n.blob && (e = 0), n.f ? n.fp ? n.t[n.p](n.fp, e) : n.t[n.p](e) : n.t[n.p] = e, n = n._next
                        },
                        G = function(t) {
                            return (1e3 * t | 0) / 1e3 + ""
                        },
                        j = function(t, e, n, i) {
                            var r, o, a, s, c, l, h, u = [],
                                p = 0,
                                d = "",
                                f = 0;
                            for (u.start = t, u.end = e, t = u[0] = t + "", e = u[1] = e + "", n && (n(u), t = u[0], e = u[1]), u.length = 0, r = t.match(k) || [], o = e.match(k) || [], i && (i._next = null, i.blob = 1, u._firstPT = u._applyPT = i), c = o.length, s = 0; s < c; s++) h = o[s], d += (l = e.substr(p, e.indexOf(h, p) - p)) || !s ? l : ",", p += l.length, f ? f = (f + 1) % 5 : "rgba(" === l.substr(-5) && (f = 1), h === r[s] || r.length <= s ? d += h : (d && (u.push(d), d = ""), a = parseFloat(r[s]), u.push(a), u._firstPT = {
                                _next: u._firstPT,
                                t: u,
                                p: u.length - 1,
                                s: a,
                                c: ("=" === h.charAt(1) ? parseInt(h.charAt(0) + "1", 10) * parseFloat(h.substr(2)) : parseFloat(h) - a) || 0,
                                f: 0,
                                m: f && f < 4 ? Math.round : G
                            }), p += h.length;
                            return (d += e.substr(p)) && u.push(d), u.setRatio = z, U.test(e) && (u.end = null), u
                        },
                        V = function(t, e, n, i, r, o, a, s, c) {
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
                                    t: j(u, p ? parseFloat(d.s) + d.c + (d.s + "").replace(/[0-9\-\.]/g, "") : i, s || N.defaultStringFilter, d),
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
                        W = N._internals = {
                            isArray: y,
                            isSelector: B,
                            lazyTweens: H,
                            blobDif: j
                        },
                        X = N._plugins = {},
                        q = W.tweenLookup = {},
                        Y = 0,
                        Z = W.reservedProps = {
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
                        J = {
                            none: 0,
                            all: 1,
                            auto: 2,
                            concurrent: 3,
                            allOnStart: 4,
                            preexisting: 5,
                            true: 1,
                            false: 0
                        },
                        K = O._rootFramesTimeline = new D,
                        Q = O._rootTimeline = new D,
                        $ = 30,
                        tt = W.lazyRender = function() {
                            var t, e, n = H.length;
                            for (F = {}, t = 0; t < n; t++)(e = H[t]) && !1 !== e._lazy && (e.render(e._lazy[0], e._lazy[1], !0), e._lazy = !1);
                            H.length = 0
                        };
                    Q._startTime = p.time, K._startTime = p.frame, Q._active = K._active = !0, setTimeout(tt, 1), O._updateRoot = N.render = function() {
                        var t, e, n;
                        if (H.length && tt(), Q.render((p.time - Q._startTime) * Q._timeScale, !1, !1), K.render((p.frame - K._startTime) * K._timeScale, !1, !1), H.length && tt(), p.frame >= $) {
                            for (n in $ = p.frame + (parseInt(N.autoSleep, 10) || 120), q) {
                                for (t = (e = q[n].tweens).length; --t > -1;) e[t]._gc && e.splice(t, 1);
                                0 === e.length && delete q[n]
                            }
                            if ((!(n = Q._first) || n._paused) && N.autoSleep && !K._first && 1 === p._listeners.tick.length) {
                                for (; n && n._paused;) n = n._next;
                                n || p.sleep()
                            }
                        }
                    }, p.addEventListener("tick", O._updateRoot);
                    var et = function(t, e, n) {
                            var i, r, o = t._gsTweenID;
                            if (q[o || (t._gsTweenID = o = "t" + Y++)] || (q[o] = {
                                    target: t,
                                    tweens: []
                                }), e && ((i = q[o].tweens)[r = i.length] = e, n))
                                for (; --r > -1;) i[r] === e && i.splice(r, 1);
                            return q[o].tweens
                        },
                        nt = function(t, e, n, i) {
                            var r, o, a = t.vars.onOverwrite;
                            return a && (r = a(t, e, n, i)), (a = N.onOverwrite) && (o = a(t, e, n, i)), !1 !== r && !1 !== o
                        },
                        it = function(t, e, n, i, r) {
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
                            for (o = r.length; --o > -1;)(s = r[o]) === e || s._gc || s._paused || (s._timeline !== e._timeline ? (l = l || rt(e, 0, d), 0 === rt(s, l, d) && (u[p++] = s)) : s._startTime <= h && s._startTime + s.totalDuration() / s._timeScale > h && ((d || !s._initted) && h - s._startTime <= 2e-8 || (u[p++] = s)));
                            for (o = p; --o > -1;)
                                if (c = (s = u[o])._firstPT, 2 === i && s._kill(n, t, e) && (a = !0), 2 !== i || !s._firstPT && s._initted && c) {
                                    if (2 !== i && !nt(s, e)) continue;
                                    s._enabled(!1, !1) && (a = !0)
                                } return a
                        },
                        rt = function(t, e, n) {
                            for (var i = t._timeline, r = i._timeScale, o = t._startTime; i._timeline;) {
                                if (o += i._startTime, r *= i._timeScale, i._paused) return -100;
                                i = i._timeline
                            }
                            return (o /= r) > e ? o - e : n && o === e || !t._initted && o - e < 2e-8 ? 1e-8 : (o += t.totalDuration() / t._timeScale / r) > e + 1e-8 ? 0 : o - e - 1e-8
                        };
                    u._init = function() {
                        var t, e, n, i, r, o, a = this.vars,
                            s = this._overwrittenProps,
                            c = this._duration,
                            l = !!a.immediateRender,
                            h = a.ease,
                            u = this._startAt;
                        if (a.startAt) {
                            for (i in u && (u.render(-1, !0), u.kill()), r = {}, a.startAt) r[i] = a.startAt[i];
                            if (r.data = "isStart", r.overwrite = !1, r.immediateRender = !0, r.lazy = l && !1 !== a.lazy, r.startAt = r.delay = null, r.onUpdate = a.onUpdate, r.onUpdateParams = a.onUpdateParams, r.onUpdateScope = a.onUpdateScope || a.callbackScope || this, this._startAt = N.to(this.target || {}, 0, r), l)
                                if (this._time > 0) this._startAt = null;
                                else if (0 !== c) return
                        } else if (a.runBackwards && 0 !== c)
                            if (u) u.render(-1, !0), u.kill(), this._startAt = null;
                            else {
                                for (i in 0 !== this._time && (l = !1), n = {}, a) Z[i] && "autoCSS" !== i || (n[i] = a[i]);
                                if (n.overwrite = 0, n.data = "isFromStart", n.lazy = l && !1 !== a.lazy, n.immediateRender = l, this._startAt = N.to(this.target, 0, n), l) {
                                    if (0 === this._time) return
                                } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                            } if (this._ease = h = h ? h instanceof T ? h : "function" == typeof h ? new T(h, a.easeParams) : E[h] || N.defaultEase : N.defaultEase, a.easeParams instanceof Array && h.config && (this._ease = h.config.apply(h, a.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                            for (o = this._targets.length, t = 0; t < o; t++) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], s ? s[t] : null, t) && (e = !0);
                        else e = this._initProps(this.target, this._propLookup, this._siblings, s, 0);
                        if (e && N._onPluginEvent("_onInitAllProps", this), s && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), a.runBackwards)
                            for (n = this._firstPT; n;) n.s += n.c, n.c = -n.c, n = n._next;
                        this._onUpdate = a.onUpdate, this._initted = !0
                    }, u._initProps = function(t, e, i, r, o) {
                        var a, s, c, l, h, u;
                        if (null == t) return !1;
                        for (a in F[t._gsTweenID] && tt(), this.vars.css || t.style && t !== n && t.nodeType && X.css && !1 !== this.vars.autoCSS && function(t, e) {
                                var n, i = {};
                                for (n in t) Z[n] || n in e && "transform" !== n && "x" !== n && "y" !== n && "width" !== n && "height" !== n && "className" !== n && "border" !== n || !(!X[n] || X[n] && X[n]._autoCSS) || (i[n] = t[n], delete t[n]);
                                t.css = i
                            }(this.vars, t), this.vars)
                            if (u = this.vars[a], Z[a]) u && (u instanceof Array || u.push && y(u)) && -1 !== u.join("").indexOf("{self}") && (this.vars[a] = u = this._swapSelfInParams(u, this));
                            else if (X[a] && (l = new X[a])._onInitTween(t, this.vars[a], this, o)) {
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
                                }, s = l._overwriteProps.length; --s > -1;) e[l._overwriteProps[s]] = this._firstPT;
                            (l._priority || l._onInitAllProps) && (c = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0), h._next && (h._next._prev = h)
                        } else e[a] = V.call(this, t, a, "get", u, a, 0, null, this.vars.stringFilter, o);
                        return r && this._kill(r, t) ? this._initProps(t, e, i, r, o) : this._overwrite > 1 && this._firstPT && i.length > 1 && it(t, this, e, this._overwrite, i) ? (this._kill(e, t), this._initProps(t, e, i, r, o)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (F[t._gsTweenID] = !0), c)
                    }, u.render = function(t, e, n) {
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
                                if (!n && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = s, this._rawPrevTime = l, H.push(this), void(this._lazy = [t, e]);
                                this._time && !i ? this.ratio = this._ease.getRatio(this._time / c) : i && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                            }
                            for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== s && t >= 0 && (this._active = !0), 0 === s && (this._startAt && (t >= 0 ? this._startAt.render(t, !0, n) : r || (r = "_dummyGS")), this.vars.onStart && (0 === this._time && 0 !== c || e || this._callback("onStart"))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
                            this._onUpdate && (t < 0 && this._startAt && -1e-4 !== t && this._startAt.render(t, !0, n), e || (this._time !== s || i || n) && this._callback("onUpdate")), r && (this._gc && !n || (t < 0 && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, !0, n), i && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === c && 1e-8 === this._rawPrevTime && 1e-8 !== a && (this._rawPrevTime = 0)))
                        }
                    }, u._kill = function(t, e, n) {
                        if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                        e = "string" != typeof e ? e || this._targets || this.target : N.selector(e) || e;
                        var i, r, o, a, s, c, l, h, u, p = n && this._time && n._startTime === this._startTime && this._timeline === n._timeline,
                            d = this._firstPT;
                        if ((y(e) || B(e)) && "number" != typeof e[0])
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
                                if (l = t || s, h = t !== r && "all" !== r && t !== s && ("object" != typeof t || !t._tempKill), n && (N.onOverwrite || this.vars.onOverwrite)) {
                                    for (o in l) s[o] && (u || (u = []), u.push(o));
                                    if ((u || !t) && !nt(this, n, e, u)) return !1
                                }
                                for (o in l)(a = s[o]) && (p && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s, c = !0), a.pg && a.t._kill(l) && (c = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete s[o]), h && (r[o] = 1);
                                !this._firstPT && this._initted && d && this._enabled(!1, !1)
                            }
                        }
                        return c
                    }, u.invalidate = function() {
                        this._notifyPluginsOfEnabled && N._onPluginEvent("_onDisable", this);
                        var t = this._time;
                        return this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], O.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -1e-8, this.render(t, !1, !1 !== this.vars.lazy)), this
                    }, u._enabled = function(t, e) {
                        if (d || p.wake(), t && this._gc) {
                            var n, i = this._targets;
                            if (i)
                                for (n = i.length; --n > -1;) this._siblings[n] = et(i[n], this, !0);
                            else this._siblings = et(this.target, this, !0)
                        }
                        return O.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && N._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
                    }, N.to = function(t, e, n) {
                        return new N(t, e, n)
                    }, N.from = function(t, e, n) {
                        return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, new N(t, e, n)
                    }, N.fromTo = function(t, e, n, i) {
                        return i.startAt = n, i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender, new N(t, e, i)
                    }, N.delayedCall = function(t, e, n, i, r) {
                        return new N(e, 0, {
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
                    }, N.set = function(t, e) {
                        return new N(t, 0, e)
                    }, N.getTweensOf = function(t, e) {
                        if (null == t) return [];
                        var n, i, r, o;
                        if (t = "string" != typeof t ? t : N.selector(t) || t, (y(t) || B(t)) && "number" != typeof t[0]) {
                            for (n = t.length, i = []; --n > -1;) i = i.concat(N.getTweensOf(t[n], e));
                            for (n = i.length; --n > -1;)
                                for (o = i[n], r = n; --r > -1;) o === i[r] && i.splice(n, 1)
                        } else if (t._gsTweenID)
                            for (n = (i = et(t).concat()).length; --n > -1;)(i[n]._gc || e && !i[n].isActive()) && i.splice(n, 1);
                        return i || []
                    }, N.killTweensOf = N.killDelayedCallsTo = function(t, e, n) {
                        "object" == typeof e && (n = e, e = !1);
                        for (var i = N.getTweensOf(t, e), r = i.length; --r > -1;) i[r]._kill(n, t)
                    };
                    var ot = w("plugins.TweenPlugin", function(t, e) {
                        this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = ot.prototype
                    }, !0);
                    if (u = ot.prototype, ot.version = "1.19.0", ot.API = 2, u._firstPT = null, u._addTween = V, u.setRatio = z, u._kill = function(t) {
                            var e, n = this._overwriteProps,
                                i = this._firstPT;
                            if (null != t[this._propName]) this._overwriteProps = [];
                            else
                                for (e = n.length; --e > -1;) null != t[n[e]] && n.splice(e, 1);
                            for (; i;) null != t[i.n] && (i._next && (i._next._prev = i._prev), i._prev ? (i._prev._next = i._next, i._prev = null) : this._firstPT === i && (this._firstPT = i._next)), i = i._next;
                            return !1
                        }, u._mod = u._roundProps = function(t) {
                            for (var e, n = this._firstPT; n;)(e = t[this._propName] || null != n.n && t[n.n.split(this._propName + "_").join("")]) && "function" == typeof e && (2 === n.f ? n.t._applyPT.m = e : n.m = e), n = n._next
                        }, N._onPluginEvent = function(t, e) {
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
                        }, ot.activate = function(t) {
                            for (var e = t.length; --e > -1;) t[e].API === ot.API && (X[(new t[e])._propName] = t[e]);
                            return !0
                        }, b.plugin = function(t) {
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
                                a = w("plugins." + n.charAt(0).toUpperCase() + n.substr(1) + "Plugin", function() {
                                    ot.call(this, n, i), this._overwriteProps = r || []
                                }, !0 === t.global),
                                s = a.prototype = new ot(n);
                            for (e in s.constructor = a, a.API = t.API, o) "function" == typeof t[e] && (s[o[e]] = t[e]);
                            return a.version = t.version, ot.activate([a]), a
                        }, l = n._gsQueue) {
                        for (h = 0; h < l.length; h++) l[h]();
                        for (u in _) _[u].func || n.console.log("GSAP encountered missing dependency: " + u)
                    }
                    d = !1
                }(void 0 !== t && t.exports && void 0 !== n ? n : this || window)
        }).call(this, n(27))
    }, function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return r
        });
        const i = new class {
                constructor() {
                    this.data = {}, this.listeners = {}, this.fireAtStart = {}, this.instances = []
                }
                on(t, e) {
                    this.listeners[t] = this.listeners[t] || [], this.listeners[t].push(e)
                }
                off(t, e) {
                    t in this.listeners != 0 && this.listeners[t].splice(this.listeners[t].indexOf(e), 1)
                }
                register(t) {
                    this.instances.push(t);
                    for (let e in this.fireAtStart) this.fireMethod(t, e)
                }
                unregister(t) {
                    const e = this.instances.indexOf(t);
                    e > -1 && this.instances.splice(e, 1)
                }
                nameToMethod(t) {
                    return `on${t.charAt(0).toUpperCase()+t.slice(1)}`
                }
                fireMethod(t, e) {
                    const n = t[this.nameToMethod(e)];
                    "function" == typeof n && n.call(t, this.data[e])
                }
                trigger({
                    name: t,
                    fireAtStart: e = !1,
                    log: n = !1
                }, i = {}) {
                    if (this.data[t] = i, e && (this.fireAtStart[t] = !0), t in this.listeners)
                        for (let e = 0; e < this.listeners[t].length; e++) this.listeners[t][e].call(this, i);
                    this.instances.forEach(e => this.fireMethod(e, t))
                }
            },
            r = (t = class {}) => (class extends t {
                constructor(...t) {
                    super(...t), this._args = t, this.init && this.init(), i.register(this)
                }
                destroy() {
                    i.unregister(this)
                }
            });
        e.b = i
    }
