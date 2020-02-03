function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return h
        });
        var i = n(29),
            r = (i.a.document || {}).documentElement,
            o = i.a,
            a = function(t, e) {
                var n = "x" === e ? "Width" : "Height",
                    i = "scroll" + n,
                    a = "client" + n,
                    s = document.body;
                return t === o || t === r || t === s ? Math.max(r[i], s[i]) - (o["inner" + n] || r[a] || s[a]) : t[i] - t["offset" + n]
            },
            s = function(t, e) {
                var n = "scroll" + ("x" === e ? "Left" : "Top");
                return t === o && (null != t.pageXOffset ? n = "page" + e.toUpperCase() + "Offset" : t = null != r[n] ? r : document.body),
                    function() {
                        return t[n]
                    }
            },
            c = function(t, e) {
                var n = function(t) {
                        return "string" == typeof t && (t = TweenLite.selector(t)), t.length && t !== o && t[0] && t[0].style && !t.nodeType && (t = t[0]), t === o || t.nodeType && t.style ? t : null
                    }(t).getBoundingClientRect(),
                    i = document.body,
                    a = !e || e === o || e === i,
                    c = a ? {
                        top: r.clientTop - (window.pageYOffset || r.scrollTop || i.scrollTop || 0),
                        left: r.clientLeft - (window.pageXOffset || r.scrollLeft || i.scrollLeft || 0)
                    } : e.getBoundingClientRect(),
                    l = {
                        x: n.left - c.left,
                        y: n.top - c.top
                    };
                return !a && e && (l.x += s(e, "x")(), l.y += s(e, "y")()), l
            },
            l = function(t, e, n, i) {
                var r = typeof t;
                return isNaN(t) ? "string" === r && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + i : "max" === t ? a(e, n) : Math.min(a(e, n), c(t, e)[n]) : parseFloat(t)
            },
            h = i.a._gsDefine.plugin({
                propName: "scrollTo",
                API: 2,
                global: !0,
                version: "1.9.2",
                init: function(t, e, n) {
                    return this._wdw = t === o, this._target = t, this._tween = n, "object" != typeof e ? "string" == typeof(e = {
                        y: e
                    }).y && "max" !== e.y && "=" !== e.y.charAt(1) && (e.x = e.y) : e.nodeType && (e = {
                        y: e,
                        x: e
                    }), this.vars = e, this._autoKill = !1 !== e.autoKill, this.getX = s(t, "x"), this.getY = s(t, "y"), this.x = this.xPrev = this.getX(), this.y = this.yPrev = this.getY(), null != e.x ? (this._addTween(this, "x", this.x, l(e.x, t, "x", this.x) - (e.offsetX || 0), "scrollTo_x", !0), this._overwriteProps.push("scrollTo_x")) : this.skipX = !0, null != e.y ? (this._addTween(this, "y", this.y, l(e.y, t, "y", this.y) - (e.offsetY || 0), "scrollTo_y", !0), this._overwriteProps.push("scrollTo_y")) : this.skipY = !0, !0
                },
                set: function(t) {
                    this._super.setRatio.call(this, t);
                    var e = this._wdw || !this.skipX ? this.getX() : this.xPrev,
                        n = this._wdw || !this.skipY ? this.getY() : this.yPrev,
                        i = n - this.yPrev,
                        r = e - this.xPrev,
                        s = h.autoKillThreshold;
                    this.x < 0 && (this.x = 0), this.y < 0 && (this.y = 0), this._autoKill && (!this.skipX && (r > s || r < -s) && e < a(this._target, "x") && (this.skipX = !0), !this.skipY && (i > s || i < -s) && n < a(this._target, "y") && (this.skipY = !0), this.skipX && this.skipY && (this._tween.kill(), this.vars.onAutoKill && this.vars.onAutoKill.apply(this.vars.onAutoKillScope || this._tween, this.vars.onAutoKillParams || []))), this._wdw ? o.scrollTo(this.skipX ? e : this.x, this.skipY ? n : this.y) : (this.skipY || (this._target.scrollTop = this.y), this.skipX || (this._target.scrollLeft = this.x)), this.xPrev = this.x, this.yPrev = this.y
                }
            }),
            u = h.prototype;
        /*!
         * VERSION: 1.9.2
         * DATE: 2019-02-07
         * UPDATES AND DOCS AT: http://greensock.com
         *
         * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
         * This work is subject to the terms at http://greensock.com/standard-license or for
         * Club GreenSock members, the software agreement that was issued with your membership.
         *
         * @author: Jack Doyle, jack@greensock.com
         **/
        h.max = a, h.getOffset = c, h.buildGetter = s, h.autoKillThreshold = 7, u._kill = function(t) {
            return t.scrollTo_x && (this.skipX = !0), t.scrollTo_y && (this.skipY = !0), this._super._kill.call(this, t)
        }
    }
