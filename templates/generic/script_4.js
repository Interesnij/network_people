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
    }
