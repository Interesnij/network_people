function(t, e, n) {
    ! function(t) {
        "use strict";
        void 0 === Number.EPSILON && (Number.EPSILON = Math.pow(2, -52)), void 0 === Number.isInteger && (Number.isInteger = function(t) {
            return "number" == typeof t && isFinite(t) && Math.floor(t) === t
        }), void 0 === Math.sign && (Math.sign = function(t) {
            return t < 0 ? -1 : t > 0 ? 1 : +t
        }), "name" in Function.prototype == 0 && Object.defineProperty(Function.prototype, "name", {
            get: function() {
                return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1]
            }
        }), void 0 === Object.assign && (Object.assign = function(t) {
            if (void 0 === t || null === t) throw new TypeError("Cannot convert undefined or null to object");
            for (var e = Object(t), n = 1; n < arguments.length; n++) {
                var i = arguments[n];
                if (void 0 !== i && null !== i)
                    for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
            }
            return e
        });
        var e = 0,
            n = 1,
            i = 2,
            r = 1,
            o = 2,
            a = 3,
            s = 0,
            c = 1,
            l = 2,
            h = 0,
            u = 1,
            p = 2,
            d = 0,
            f = 1,
            m = 2,
            v = 3,
            g = 4,
            y = 5,
            _ = 100,
            x = 101,
            b = 102,
            w = 103,
            M = 104,
            T = 200,
            E = 201,
            S = 202,
            A = 203,
            P = 204,
            L = 205,
            R = 206,
            C = 207,
            O = 208,
            I = 209,
            D = 210,
            N = 0,
            B = 1,
            H = 2,
            F = 3,
            k = 4,
            U = 5,
            z = 6,
            G = 7,
            j = 0,
            V = 1,
            W = 2,
            X = 0,
            q = 1,
            Y = 2,
            Z = 3,
            J = 4,
            K = 5,
            Q = 301,
            $ = 302,
            tt = 303,
            et = 304,
            nt = 305,
            it = 306,
            rt = 307,
            ot = 1e3,
            at = 1001,
            st = 1002,
            ct = 1003,
            lt = 1004,
            ht = 1005,
            ut = 1006,
            pt = 1007,
            dt = 1008,
            ft = 1009,
            mt = 1010,
            vt = 1011,
            gt = 1012,
            yt = 1013,
            _t = 1014,
            xt = 1015,
            bt = 1016,
            wt = 1017,
            Mt = 1018,
            Tt = 1019,
            Et = 1020,
            St = 1021,
            At = 1022,
            Pt = 1023,
            Lt = 1024,
            Rt = 1025,
            Ct = Pt,
            Ot = 1026,
            It = 1027,
            Dt = 1028,
            Nt = 33776,
            Bt = 33777,
            Ht = 33778,
            Ft = 33779,
            kt = 35840,
            Ut = 35841,
            zt = 35842,
            Gt = 35843,
            jt = 36196,
            Vt = 37808,
            Wt = 37809,
            Xt = 37810,
            qt = 37811,
            Yt = 37812,
            Zt = 37813,
            Jt = 37814,
            Kt = 37815,
            Qt = 37816,
            $t = 37817,
            te = 37818,
            ee = 37819,
            ne = 37820,
            ie = 37821,
            re = 2201,
            oe = 2400,
            ae = 0,
            se = 1,
            ce = 2,
            le = 3e3,
            he = 3001,
            ue = 3007,
            pe = 3002,
            de = 3003,
            fe = 3004,
            me = 3005,
            ve = 3006,
            ge = 3200,
            ye = 3201,
            _e = 0,
            xe = 1,
            be = 7680,
            we = 519;

        function Me() {}
        Object.assign(Me.prototype, {
            addEventListener: function(t, e) {
                void 0 === this._listeners && (this._listeners = {});
                var n = this._listeners;
                void 0 === n[t] && (n[t] = []), -1 === n[t].indexOf(e) && n[t].push(e)
            },
            hasEventListener: function(t, e) {
                if (void 0 === this._listeners) return !1;
                var n = this._listeners;
                return void 0 !== n[t] && -1 !== n[t].indexOf(e)
            },
            removeEventListener: function(t, e) {
                if (void 0 !== this._listeners) {
                    var n = this._listeners,
                        i = n[t];
                    if (void 0 !== i) {
                        var r = i.indexOf(e); - 1 !== r && i.splice(r, 1)
                    }
                }
            },
            dispatchEvent: function(t) {
                if (void 0 !== this._listeners) {
                    var e = this._listeners,
                        n = e[t.type];
                    if (void 0 !== n) {
                        t.target = this;
                        for (var i = n.slice(0), r = 0, o = i.length; r < o; r++) i[r].call(this, t)
                    }
                }
            }
        });
        for (var Te = [], Ee = 0; Ee < 256; Ee++) Te[Ee] = (Ee < 16 ? "0" : "") + Ee.toString(16);
        var Se = {
            DEG2RAD: Math.PI / 180,
            RAD2DEG: 180 / Math.PI,
            generateUUID: function() {
                var t = 4294967295 * Math.random() | 0,
                    e = 4294967295 * Math.random() | 0,
                    n = 4294967295 * Math.random() | 0,
                    i = 4294967295 * Math.random() | 0,
                    r = Te[255 & t] + Te[t >> 8 & 255] + Te[t >> 16 & 255] + Te[t >> 24 & 255] + "-" + Te[255 & e] + Te[e >> 8 & 255] + "-" + Te[e >> 16 & 15 | 64] + Te[e >> 24 & 255] + "-" + Te[63 & n | 128] + Te[n >> 8 & 255] + "-" + Te[n >> 16 & 255] + Te[n >> 24 & 255] + Te[255 & i] + Te[i >> 8 & 255] + Te[i >> 16 & 255] + Te[i >> 24 & 255];
                return r.toUpperCase()
            },
            clamp: function(t, e, n) {
                return Math.max(e, Math.min(n, t))
            },
            euclideanModulo: function(t, e) {
                return (t % e + e) % e
            },
            mapLinear: function(t, e, n, i, r) {
                return i + (t - e) * (r - i) / (n - e)
            },
            lerp: function(t, e, n) {
                return (1 - n) * t + n * e
            },
            smoothstep: function(t, e, n) {
                return t <= e ? 0 : t >= n ? 1 : (t = (t - e) / (n - e)) * t * (3 - 2 * t)
            },
            smootherstep: function(t, e, n) {
                return t <= e ? 0 : t >= n ? 1 : (t = (t - e) / (n - e)) * t * t * (t * (6 * t - 15) + 10)
            },
            randInt: function(t, e) {
                return t + Math.floor(Math.random() * (e - t + 1))
            },
            randFloat: function(t, e) {
                return t + Math.random() * (e - t)
            },
            randFloatSpread: function(t) {
                return t * (.5 - Math.random())
            },
            degToRad: function(t) {
                return t * Se.DEG2RAD
            },
            radToDeg: function(t) {
                return t * Se.RAD2DEG
            },
            isPowerOfTwo: function(t) {
                return 0 == (t & t - 1) && 0 !== t
            },
            ceilPowerOfTwo: function(t) {
                return Math.pow(2, Math.ceil(Math.log(t) / Math.LN2))
            },
            floorPowerOfTwo: function(t) {
                return Math.pow(2, Math.floor(Math.log(t) / Math.LN2))
            }
        };

        function Ae(t, e) {
            this.x = t || 0, this.y = e || 0
        }

        function Pe(t, e, n, i) {
            this._x = t || 0, this._y = e || 0, this._z = n || 0, this._w = void 0 !== i ? i : 1
        }
        Object.defineProperties(Ae.prototype, {
            width: {
                get: function() {
                    return this.x
                },
                set: function(t) {
                    this.x = t
                }
            },
            height: {
                get: function() {
                    return this.y
                },
                set: function(t) {
                    this.y = t
                }
            }
        }), Object.assign(Ae.prototype, {
            isVector2: !0,
            set: function(t, e) {
                return this.x = t, this.y = e, this
            },
            setScalar: function(t) {
                return this.x = t, this.y = t, this
            },
            setX: function(t) {
                return this.x = t, this
            },
            setY: function(t) {
                return this.y = t, this
            },
            setComponent: function(t, e) {
                switch (t) {
                    case 0:
                        this.x = e;
                        break;
                    case 1:
                        this.y = e;
                        break;
                    default:
                        throw new Error("index is out of range: " + t)
                }
                return this
            },
            getComponent: function(t) {
                switch (t) {
                    case 0:
                        return this.x;
                    case 1:
                        return this.y;
                    default:
                        throw new Error("index is out of range: " + t)
                }
            },
            clone: function() {
                return new this.constructor(this.x, this.y)
            },
            copy: function(t) {
                return this.x = t.x, this.y = t.y, this
            },
            add: function(t, e) {
                return void 0 !== e ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this)
            },
            addScalar: function(t) {
                return this.x += t, this.y += t, this
            },
            addVectors: function(t, e) {
                return this.x = t.x + e.x, this.y = t.y + e.y, this
            },
            addScaledVector: function(t, e) {
                return this.x += t.x * e, this.y += t.y * e, this
            },
            sub: function(t, e) {
                return void 0 !== e ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this)
            },
            subScalar: function(t) {
                return this.x -= t, this.y -= t, this
            },
            subVectors: function(t, e) {
                return this.x = t.x - e.x, this.y = t.y - e.y, this
            },
            multiply: function(t) {
                return this.x *= t.x, this.y *= t.y, this
            },
            multiplyScalar: function(t) {
                return this.x *= t, this.y *= t, this
            },
            divide: function(t) {
                return this.x /= t.x, this.y /= t.y, this
            },
            divideScalar: function(t) {
                return this.multiplyScalar(1 / t)
            },
            applyMatrix3: function(t) {
                var e = this.x,
                    n = this.y,
                    i = t.elements;
                return this.x = i[0] * e + i[3] * n + i[6], this.y = i[1] * e + i[4] * n + i[7], this
            },
            min: function(t) {
                return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this
            },
            max: function(t) {
                return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this
            },
            clamp: function(t, e) {
                return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this
            },
            clampScalar: function(t, e) {
                return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this
            },
            clampLength: function(t, e) {
                var n = this.length();
                return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)))
            },
            floor: function() {
                return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
            },
            ceil: function() {
                return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
            },
            round: function() {
                return this.x = Math.round(this.x), this.y = Math.round(this.y), this
            },
            roundToZero: function() {
                return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this
            },
            negate: function() {
                return this.x = -this.x, this.y = -this.y, this
            },
            dot: function(t) {
                return this.x * t.x + this.y * t.y
            },
            cross: function(t) {
                return this.x * t.y - this.y * t.x
            },
            lengthSq: function() {
                return this.x * this.x + this.y * this.y
            },
            length: function() {
                return Math.sqrt(this.x * this.x + this.y * this.y)
            },
            manhattanLength: function() {
                return Math.abs(this.x) + Math.abs(this.y)
            },
            normalize: function() {
                return this.divideScalar(this.length() || 1)
            },
            angle: function() {
                var t = Math.atan2(this.y, this.x);
                return t < 0 && (t += 2 * Math.PI), t
            },
            distanceTo: function(t) {
                return Math.sqrt(this.distanceToSquared(t))
            },
            distanceToSquared: function(t) {
                var e = this.x - t.x,
                    n = this.y - t.y;
                return e * e + n * n
            },
            manhattanDistanceTo: function(t) {
                return Math.abs(this.x - t.x) + Math.abs(this.y - t.y)
            },
            setLength: function(t) {
                return this.normalize().multiplyScalar(t)
            },
            lerp: function(t, e) {
                return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this
            },
            lerpVectors: function(t, e, n) {
                return this.subVectors(e, t).multiplyScalar(n).add(t)
            },
            equals: function(t) {
                return t.x === this.x && t.y === this.y
            },
            fromArray: function(t, e) {
                return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this
            },
            toArray: function(t, e) {
                return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t
            },
            fromBufferAttribute: function(t, e, n) {
                return void 0 !== n && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this
            },
            rotateAround: function(t, e) {
                var n = Math.cos(e),
                    i = Math.sin(e),
                    r = this.x - t.x,
                    o = this.y - t.y;
                return this.x = r * n - o * i + t.x, this.y = r * i + o * n + t.y, this
            }
        }), Object.assign(Pe, {
            slerp: function(t, e, n, i) {
                return n.copy(t).slerp(e, i)
            },
            slerpFlat: function(t, e, n, i, r, o, a) {
                var s = n[i + 0],
                    c = n[i + 1],
                    l = n[i + 2],
                    h = n[i + 3],
                    u = r[o + 0],
                    p = r[o + 1],
                    d = r[o + 2],
                    f = r[o + 3];
                if (h !== f || s !== u || c !== p || l !== d) {
                    var m = 1 - a,
                        v = s * u + c * p + l * d + h * f,
                        g = v >= 0 ? 1 : -1,
                        y = 1 - v * v;
                    if (y > Number.EPSILON) {
                        var _ = Math.sqrt(y),
                            x = Math.atan2(_, v * g);
                        m = Math.sin(m * x) / _, a = Math.sin(a * x) / _
                    }
                    var b = a * g;
                    if (s = s * m + u * b, c = c * m + p * b, l = l * m + d * b, h = h * m + f * b, m === 1 - a) {
                        var w = 1 / Math.sqrt(s * s + c * c + l * l + h * h);
                        s *= w, c *= w, l *= w, h *= w
                    }
                }
                t[e] = s, t[e + 1] = c, t[e + 2] = l, t[e + 3] = h
            }
        }), Object.defineProperties(Pe.prototype, {
            x: {
                get: function() {
                    return this._x
                },
                set: function(t) {
                    this._x = t, this._onChangeCallback()
                }
            },
            y: {
                get: function() {
                    return this._y
                },
                set: function(t) {
                    this._y = t, this._onChangeCallback()
                }
            },
            z: {
                get: function() {
                    return this._z
                },
                set: function(t) {
                    this._z = t, this._onChangeCallback()
                }
            },
            w: {
                get: function() {
                    return this._w
                },
                set: function(t) {
                    this._w = t, this._onChangeCallback()
                }
            }
        }), Object.assign(Pe.prototype, {
            isQuaternion: !0,
            set: function(t, e, n, i) {
                return this._x = t, this._y = e, this._z = n, this._w = i, this._onChangeCallback(), this
            },
            clone: function() {
                return new this.constructor(this._x, this._y, this._z, this._w)
            },
            copy: function(t) {
                return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), this
            },
            setFromEuler: function(t, e) {
                if (!t || !t.isEuler) throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
                var n = t._x,
                    i = t._y,
                    r = t._z,
                    o = t.order,
                    a = Math.cos,
                    s = Math.sin,
                    c = a(n / 2),
                    l = a(i / 2),
                    h = a(r / 2),
                    u = s(n / 2),
                    p = s(i / 2),
                    d = s(r / 2);
                return "XYZ" === o ? (this._x = u * l * h + c * p * d, this._y = c * p * h - u * l * d, this._z = c * l * d + u * p * h, this._w = c * l * h - u * p * d) : "YXZ" === o ? (this._x = u * l * h + c * p * d, this._y = c * p * h - u * l * d, this._z = c * l * d - u * p * h, this._w = c * l * h + u * p * d) : "ZXY" === o ? (this._x = u * l * h - c * p * d, this._y = c * p * h + u * l * d, this._z = c * l * d + u * p * h, this._w = c * l * h - u * p * d) : "ZYX" === o ? (this._x = u * l * h - c * p * d, this._y = c * p * h + u * l * d, this._z = c * l * d - u * p * h, this._w = c * l * h + u * p * d) : "YZX" === o ? (this._x = u * l * h + c * p * d, this._y = c * p * h + u * l * d, this._z = c * l * d - u * p * h, this._w = c * l * h - u * p * d) : "XZY" === o && (this._x = u * l * h - c * p * d, this._y = c * p * h - u * l * d, this._z = c * l * d + u * p * h, this._w = c * l * h + u * p * d), !1 !== e && this._onChangeCallback(), this
            },
            setFromAxisAngle: function(t, e) {
                var n = e / 2,
                    i = Math.sin(n);
                return this._x = t.x * i, this._y = t.y * i, this._z = t.z * i, this._w = Math.cos(n), this._onChangeCallback(), this
            },
            setFromRotationMatrix: function(t) {
                var e, n = t.elements,
                    i = n[0],
                    r = n[4],
                    o = n[8],
                    a = n[1],
                    s = n[5],
                    c = n[9],
                    l = n[2],
                    h = n[6],
                    u = n[10],
                    p = i + s + u;
                return p > 0 ? (e = .5 / Math.sqrt(p + 1), this._w = .25 / e, this._x = (h - c) * e, this._y = (o - l) * e, this._z = (a - r) * e) : i > s && i > u ? (e = 2 * Math.sqrt(1 + i - s - u), this._w = (h - c) / e, this._x = .25 * e, this._y = (r + a) / e, this._z = (o + l) / e) : s > u ? (e = 2 * Math.sqrt(1 + s - i - u), this._w = (o - l) / e, this._x = (r + a) / e, this._y = .25 * e, this._z = (c + h) / e) : (e = 2 * Math.sqrt(1 + u - i - s), this._w = (a - r) / e, this._x = (o + l) / e, this._y = (c + h) / e, this._z = .25 * e), this._onChangeCallback(), this
            },
            setFromUnitVectors: function(t, e) {
                var n = t.dot(e) + 1;
                return n < 1e-6 ? (n = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = n)) : (this._x = t.y * e.z - t.z * e.y, this._y = t.z * e.x - t.x * e.z, this._z = t.x * e.y - t.y * e.x, this._w = n), this.normalize()
            },
            angleTo: function(t) {
                return 2 * Math.acos(Math.abs(Se.clamp(this.dot(t), -1, 1)))
            },
            rotateTowards: function(t, e) {
                var n = this.angleTo(t);
                if (0 === n) return this;
                var i = Math.min(1, e / n);
                return this.slerp(t, i), this
            },
            inverse: function() {
                return this.conjugate()
            },
            conjugate: function() {
                return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this
            },
            dot: function(t) {
                return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w
            },
            lengthSq: function() {
                return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
            },
            length: function() {
                return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
            },
            normalize: function() {
                var t = this.length();
                return 0 === t ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this._onChangeCallback(), this
            },
            multiply: function(t, e) {
                return void 0 !== e ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(t, e)) : this.multiplyQuaternions(this, t)
            },
            premultiply: function(t) {
                return this.multiplyQuaternions(t, this)
            },
            multiplyQuaternions: function(t, e) {
                var n = t._x,
                    i = t._y,
                    r = t._z,
                    o = t._w,
                    a = e._x,
                    s = e._y,
                    c = e._z,
                    l = e._w;
                return this._x = n * l + o * a + i * c - r * s, this._y = i * l + o * s + r * a - n * c, this._z = r * l + o * c + n * s - i * a, this._w = o * l - n * a - i * s - r * c, this._onChangeCallback(), this
            },
            slerp: function(t, e) {
                if (0 === e) return this;
                if (1 === e) return this.copy(t);
                var n = this._x,
                    i = this._y,
                    r = this._z,
                    o = this._w,
                    a = o * t._w + n * t._x + i * t._y + r * t._z;
                if (a < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, a = -a) : this.copy(t), a >= 1) return this._w = o, this._x = n, this._y = i, this._z = r, this;
                var s = 1 - a * a;
                if (s <= Number.EPSILON) {
                    var c = 1 - e;
                    return this._w = c * o + e * this._w, this._x = c * n + e * this._x, this._y = c * i + e * this._y, this._z = c * r + e * this._z, this.normalize(), this._onChangeCallback(), this
                }
                var l = Math.sqrt(s),
                    h = Math.atan2(l, a),
                    u = Math.sin((1 - e) * h) / l,
                    p = Math.sin(e * h) / l;
                return this._w = o * u + this._w * p, this._x = n * u + this._x * p, this._y = i * u + this._y * p, this._z = r * u + this._z * p, this._onChangeCallback(), this
            },
            equals: function(t) {
                return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w
            },
            fromArray: function(t, e) {
                return void 0 === e && (e = 0), this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this._onChangeCallback(), this
            },
            toArray: function(t, e) {
                return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t
            },
            _onChange: function(t) {
                return this._onChangeCallback = t, this
            },
            _onChangeCallback: function() {}
        });
        var Le = new Ce,
            Re = new Pe;

        function Ce(t, e, n) {
            this.x = t || 0, this.y = e || 0, this.z = n || 0
        }
        Object.assign(Ce.prototype, {
            isVector3: !0,
            set: function(t, e, n) {
                return this.x = t, this.y = e, this.z = n, this
            },
            setScalar: function(t) {
                return this.x = t, this.y = t, this.z = t, this
            },
            setX: function(t) {
                return this.x = t, this
            },
            setY: function(t) {
                return this.y = t, this
            },
            setZ: function(t) {
                return this.z = t, this
            },
            setComponent: function(t, e) {
                switch (t) {
                    case 0:
                        this.x = e;
                        break;
                    case 1:
                        this.y = e;
                        break;
                    case 2:
                        this.z = e;
                        break;
                    default:
                        throw new Error("index is out of range: " + t)
                }
                return this
            },
            getComponent: function(t) {
                switch (t) {
                    case 0:
                        return this.x;
                    case 1:
                        return this.y;
                    case 2:
                        return this.z;
                    default:
                        throw new Error("index is out of range: " + t)
                }
            },
            clone: function() {
                return new this.constructor(this.x, this.y, this.z)
            },
            copy: function(t) {
                return this.x = t.x, this.y = t.y, this.z = t.z, this
            },
            add: function(t, e) {
                return void 0 !== e ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this)
            },
            addScalar: function(t) {
                return this.x += t, this.y += t, this.z += t, this
            },
            addVectors: function(t, e) {
                return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this
            },
            addScaledVector: function(t, e) {
                return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this
            },
            sub: function(t, e) {
                return void 0 !== e ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this)
            },
            subScalar: function(t) {
                return this.x -= t, this.y -= t, this.z -= t, this
            },
            subVectors: function(t, e) {
                return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this
            },
            multiply: function(t, e) {
                return void 0 !== e ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(t, e)) : (this.x *= t.x, this.y *= t.y, this.z *= t.z, this)
            },
            multiplyScalar: function(t) {
                return this.x *= t, this.y *= t, this.z *= t, this
            },
            multiplyVectors: function(t, e) {
                return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this
            },
            applyEuler: function(t) {
                return t && t.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), this.applyQuaternion(Re.setFromEuler(t))
            },
            applyAxisAngle: function(t, e) {
                return this.applyQuaternion(Re.setFromAxisAngle(t, e))
            },
            applyMatrix3: function(t) {
                var e = this.x,
                    n = this.y,
                    i = this.z,
                    r = t.elements;
                return this.x = r[0] * e + r[3] * n + r[6] * i, this.y = r[1] * e + r[4] * n + r[7] * i, this.z = r[2] * e + r[5] * n + r[8] * i, this
            },
            applyMatrix4: function(t) {
                var e = this.x,
                    n = this.y,
                    i = this.z,
                    r = t.elements,
                    o = 1 / (r[3] * e + r[7] * n + r[11] * i + r[15]);
                return this.x = (r[0] * e + r[4] * n + r[8] * i + r[12]) * o, this.y = (r[1] * e + r[5] * n + r[9] * i + r[13]) * o, this.z = (r[2] * e + r[6] * n + r[10] * i + r[14]) * o, this
            },
            applyQuaternion: function(t) {
                var e = this.x,
                    n = this.y,
                    i = this.z,
                    r = t.x,
                    o = t.y,
                    a = t.z,
                    s = t.w,
                    c = s * e + o * i - a * n,
                    l = s * n + a * e - r * i,
                    h = s * i + r * n - o * e,
                    u = -r * e - o * n - a * i;
                return this.x = c * s + u * -r + l * -a - h * -o, this.y = l * s + u * -o + h * -r - c * -a, this.z = h * s + u * -a + c * -o - l * -r, this
            },
            project: function(t) {
                return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)
            },
            unproject: function(t) {
                return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)
            },
            transformDirection: function(t) {
                var e = this.x,
                    n = this.y,
                    i = this.z,
                    r = t.elements;
                return this.x = r[0] * e + r[4] * n + r[8] * i, this.y = r[1] * e + r[5] * n + r[9] * i, this.z = r[2] * e + r[6] * n + r[10] * i, this.normalize()
            },
            divide: function(t) {
                return this.x /= t.x, this.y /= t.y, this.z /= t.z, this
            },
            divideScalar: function(t) {
                return this.multiplyScalar(1 / t)
            },
            min: function(t) {
                return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this
            },
            max: function(t) {
                return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this
            },
            clamp: function(t, e) {
                return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this
            },
            clampScalar: function(t, e) {
                return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this
            },
            clampLength: function(t, e) {
                var n = this.length();
                return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)))
            },
            floor: function() {
                return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this
            },
            ceil: function() {
                return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this
            },
            round: function() {
                return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this
            },
            roundToZero: function() {
                return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this
            },
            negate: function() {
                return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
            },
            dot: function(t) {
                return this.x * t.x + this.y * t.y + this.z * t.z
            },
            lengthSq: function() {
                return this.x * this.x + this.y * this.y + this.z * this.z
            },
            length: function() {
                return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
            },
            manhattanLength: function() {
                return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
            },
            normalize: function() {
                return this.divideScalar(this.length() || 1)
            },
            setLength: function(t) {
                return this.normalize().multiplyScalar(t)
            },
            lerp: function(t, e) {
                return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this
            },
            lerpVectors: function(t, e, n) {
                return this.subVectors(e, t).multiplyScalar(n).add(t)
            },
            cross: function(t, e) {
                return void 0 !== e ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(t, e)) : this.crossVectors(this, t)
            },
            crossVectors: function(t, e) {
                var n = t.x,
                    i = t.y,
                    r = t.z,
                    o = e.x,
                    a = e.y,
                    s = e.z;
                return this.x = i * s - r * a, this.y = r * o - n * s, this.z = n * a - i * o, this
            },
            projectOnVector: function(t) {
                var e = t.dot(this) / t.lengthSq();
                return this.copy(t).multiplyScalar(e)
            },
            projectOnPlane: function(t) {
                return Le.copy(this).projectOnVector(t), this.sub(Le)
            },
            reflect: function(t) {
                return this.sub(Le.copy(t).multiplyScalar(2 * this.dot(t)))
            },
            angleTo: function(t) {
                var e = Math.sqrt(this.lengthSq() * t.lengthSq());
                0 === e && console.error("THREE.Vector3: angleTo() can't handle zero length vectors.");
                var n = this.dot(t) / e;
                return Math.acos(Se.clamp(n, -1, 1))
            },
            distanceTo: function(t) {
                return Math.sqrt(this.distanceToSquared(t))
            },
            distanceToSquared: function(t) {
                var e = this.x - t.x,
                    n = this.y - t.y,
                    i = this.z - t.z;
                return e * e + n * n + i * i
            },
            manhattanDistanceTo: function(t) {
                return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z)
            },
            setFromSpherical: function(t) {
                return this.setFromSphericalCoords(t.radius, t.phi, t.theta)
            },
            setFromSphericalCoords: function(t, e, n) {
                var i = Math.sin(e) * t;
                return this.x = i * Math.sin(n), this.y = Math.cos(e) * t, this.z = i * Math.cos(n), this
            },
            setFromCylindrical: function(t) {
                return this.setFromCylindricalCoords(t.radius, t.theta, t.y)
            },
            setFromCylindricalCoords: function(t, e, n) {
                return this.x = t * Math.sin(e), this.y = n, this.z = t * Math.cos(e), this
            },
            setFromMatrixPosition: function(t) {
                var e = t.elements;
                return this.x = e[12], this.y = e[13], this.z = e[14], this
            },
            setFromMatrixScale: function(t) {
                var e = this.setFromMatrixColumn(t, 0).length(),
                    n = this.setFromMatrixColumn(t, 1).length(),
                    i = this.setFromMatrixColumn(t, 2).length();
                return this.x = e, this.y = n, this.z = i, this
            },
            setFromMatrixColumn: function(t, e) {
                return this.fromArray(t.elements, 4 * e)
            },
            equals: function(t) {
                return t.x === this.x && t.y === this.y && t.z === this.z
            },
            fromArray: function(t, e) {
                return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this
            },
            toArray: function(t, e) {
                return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t
            },
            fromBufferAttribute: function(t, e, n) {
                return void 0 !== n && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this
            }
        });
        var Oe, Ie = new Ce;

        function De() {
            this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
        }
        Object.assign(De.prototype, {
            isMatrix3: !0,
            set: function(t, e, n, i, r, o, a, s, c) {
                var l = this.elements;
                return l[0] = t, l[1] = i, l[2] = a, l[3] = e, l[4] = r, l[5] = s, l[6] = n, l[7] = o, l[8] = c, this
            },
            identity: function() {
                return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
            },
            clone: function() {
                return (new this.constructor).fromArray(this.elements)
            },
            copy: function(t) {
                var e = this.elements,
                    n = t.elements;
                return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], this
            },
            setFromMatrix4: function(t) {
                var e = t.elements;
                return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this
            },
            applyToBufferAttribute: function(t) {
                for (var e = 0, n = t.count; e < n; e++) Ie.x = t.getX(e), Ie.y = t.getY(e), Ie.z = t.getZ(e), Ie.applyMatrix3(this), t.setXYZ(e, Ie.x, Ie.y, Ie.z);
                return t
            },
            multiply: function(t) {
                return this.multiplyMatrices(this, t)
            },
            premultiply: function(t) {
                return this.multiplyMatrices(t, this)
            },
            multiplyMatrices: function(t, e) {
                var n = t.elements,
                    i = e.elements,
                    r = this.elements,
                    o = n[0],
                    a = n[3],
                    s = n[6],
                    c = n[1],
                    l = n[4],
                    h = n[7],
                    u = n[2],
                    p = n[5],
                    d = n[8],
                    f = i[0],
                    m = i[3],
                    v = i[6],
                    g = i[1],
                    y = i[4],
                    _ = i[7],
                    x = i[2],
                    b = i[5],
                    w = i[8];
                return r[0] = o * f + a * g + s * x, r[3] = o * m + a * y + s * b, r[6] = o * v + a * _ + s * w, r[1] = c * f + l * g + h * x, r[4] = c * m + l * y + h * b, r[7] = c * v + l * _ + h * w, r[2] = u * f + p * g + d * x, r[5] = u * m + p * y + d * b, r[8] = u * v + p * _ + d * w, this
            },
            multiplyScalar: function(t) {
                var e = this.elements;
                return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this
            },
            determinant: function() {
                var t = this.elements,
                    e = t[0],
                    n = t[1],
                    i = t[2],
                    r = t[3],
                    o = t[4],
                    a = t[5],
                    s = t[6],
                    c = t[7],
                    l = t[8];
                return e * o * l - e * a * c - n * r * l + n * a * s + i * r * c - i * o * s
            },
            getInverse: function(t, e) {
                t && t.isMatrix4 && console.error("THREE.Matrix3: .getInverse() no longer takes a Matrix4 argument.");
                var n = t.elements,
                    i = this.elements,
                    r = n[0],
                    o = n[1],
                    a = n[2],
                    s = n[3],
                    c = n[4],
                    l = n[5],
                    h = n[6],
                    u = n[7],
                    p = n[8],
                    d = p * c - l * u,
                    f = l * h - p * s,
                    m = u * s - c * h,
                    v = r * d + o * f + a * m;
                if (0 === v) {
                    var g = "THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0";
                    if (!0 === e) throw new Error(g);
                    return console.warn(g), this.identity()
                }
                var y = 1 / v;
                return i[0] = d * y, i[1] = (a * u - p * o) * y, i[2] = (l * o - a * c) * y, i[3] = f * y, i[4] = (p * r - a * h) * y, i[5] = (a * s - l * r) * y, i[6] = m * y, i[7] = (o * h - u * r) * y, i[8] = (c * r - o * s) * y, this
            },
            transpose: function() {
                var t, e = this.elements;
                return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this
            },
            getNormalMatrix: function(t) {
                return this.setFromMatrix4(t).getInverse(this).transpose()
            },
            transposeIntoArray: function(t) {
                var e = this.elements;
                return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this
            },
            setUvTransform: function(t, e, n, i, r, o, a) {
                var s = Math.cos(r),
                    c = Math.sin(r);
                this.set(n * s, n * c, -n * (s * o + c * a) + o + t, -i * c, i * s, -i * (-c * o + s * a) + a + e, 0, 0, 1)
            },
            scale: function(t, e) {
                var n = this.elements;
                return n[0] *= t, n[3] *= t, n[6] *= t, n[1] *= e, n[4] *= e, n[7] *= e, this
            },
            rotate: function(t) {
                var e = Math.cos(t),
                    n = Math.sin(t),
                    i = this.elements,
                    r = i[0],
                    o = i[3],
                    a = i[6],
                    s = i[1],
                    c = i[4],
                    l = i[7];
                return i[0] = e * r + n * s, i[3] = e * o + n * c, i[6] = e * a + n * l, i[1] = -n * r + e * s, i[4] = -n * o + e * c, i[7] = -n * a + e * l, this
            },
            translate: function(t, e) {
                var n = this.elements;
                return n[0] += t * n[2], n[3] += t * n[5], n[6] += t * n[8], n[1] += e * n[2], n[4] += e * n[5], n[7] += e * n[8], this
            },
            equals: function(t) {
                for (var e = this.elements, n = t.elements, i = 0; i < 9; i++)
                    if (e[i] !== n[i]) return !1;
                return !0
            },
            fromArray: function(t, e) {
                void 0 === e && (e = 0);
                for (var n = 0; n < 9; n++) this.elements[n] = t[n + e];
                return this
            },
            toArray: function(t, e) {
                void 0 === t && (t = []), void 0 === e && (e = 0);
                var n = this.elements;
                return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t
            }
        });
        var Ne = {
                getDataURL: function(t) {
                    var e;
                    if ("undefined" == typeof HTMLCanvasElement) return t.src;
                    if (t instanceof HTMLCanvasElement) e = t;
                    else {
                        void 0 === Oe && (Oe = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")), Oe.width = t.width, Oe.height = t.height;
                        var n = Oe.getContext("2d");
                        t instanceof ImageData ? n.putImageData(t, 0, 0) : n.drawImage(t, 0, 0, t.width, t.height), e = Oe
                    }
                    return e.width > 2048 || e.height > 2048 ? e.toDataURL("image/jpeg", .6) : e.toDataURL("image/png")
                }
            },
            Be = 0;

        function He(t, e, n, i, r, o, a, s, c, l) {
            Object.defineProperty(this, "id", {
                value: Be++
            }), this.uuid = Se.generateUUID(), this.name = "", this.image = void 0 !== t ? t : He.DEFAULT_IMAGE, this.mipmaps = [], this.mapping = void 0 !== e ? e : He.DEFAULT_MAPPING, this.wrapS = void 0 !== n ? n : at, this.wrapT = void 0 !== i ? i : at, this.magFilter = void 0 !== r ? r : ut, this.minFilter = void 0 !== o ? o : dt, this.anisotropy = void 0 !== c ? c : 1, this.format = void 0 !== a ? a : Pt, this.type = void 0 !== s ? s : ft, this.offset = new Ae(0, 0), this.repeat = new Ae(1, 1), this.center = new Ae(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new De, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = void 0 !== l ? l : le, this.version = 0, this.onUpdate = null
        }

        function Fe(t, e, n, i) {
            this.x = t || 0, this.y = e || 0, this.z = n || 0, this.w = void 0 !== i ? i : 1
        }

        function ke(t, e, n) {
            this.width = t, this.height = e, this.scissor = new Fe(0, 0, t, e), this.scissorTest = !1, this.viewport = new Fe(0, 0, t, e), n = n || {}, this.texture = new He(void 0, void 0, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), this.texture.image = {}, this.texture.image.width = t, this.texture.image.height = e, this.texture.generateMipmaps = void 0 !== n.generateMipmaps && n.generateMipmaps, this.texture.minFilter = void 0 !== n.minFilter ? n.minFilter : ut, this.depthBuffer = void 0 === n.depthBuffer || n.depthBuffer, this.stencilBuffer = void 0 === n.stencilBuffer || n.stencilBuffer, this.depthTexture = void 0 !== n.depthTexture ? n.depthTexture : null
        }

        function Ue(t, e, n) {
            ke.call(this, t, e, n), this.samples = 4
        }
        He.DEFAULT_IMAGE = void 0, He.DEFAULT_MAPPING = 300, He.prototype = Object.assign(Object.create(Me.prototype), {
            constructor: He,
            isTexture: !0,
            updateMatrix: function() {
                this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
            },
            clone: function() {
                return (new this.constructor).copy(this)
            },
            copy: function(t) {
                return this.name = t.name, this.image = t.image, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.encoding = t.encoding, this
            },
            toJSON: function(t) {
                var e = void 0 === t || "string" == typeof t;
                if (!e && void 0 !== t.textures[this.uuid]) return t.textures[this.uuid];
                var n = {
                    metadata: {
                        version: 4.5,
                        type: "Texture",
                        generator: "Texture.toJSON"
                    },
                    uuid: this.uuid,
                    name: this.name,
                    mapping: this.mapping,
                    repeat: [this.repeat.x, this.repeat.y],
                    offset: [this.offset.x, this.offset.y],
                    center: [this.center.x, this.center.y],
                    rotation: this.rotation,
                    wrap: [this.wrapS, this.wrapT],
                    format: this.format,
                    type: this.type,
                    encoding: this.encoding,
                    minFilter: this.minFilter,
                    magFilter: this.magFilter,
                    anisotropy: this.anisotropy,
                    flipY: this.flipY,
                    premultiplyAlpha: this.premultiplyAlpha,
                    unpackAlignment: this.unpackAlignment
                };
                if (void 0 !== this.image) {
                    var i = this.image;
                    if (void 0 === i.uuid && (i.uuid = Se.generateUUID()), !e && void 0 === t.images[i.uuid]) {
                        var r;
                        if (Array.isArray(i)) {
                            r = [];
                            for (var o = 0, a = i.length; o < a; o++) r.push(Ne.getDataURL(i[o]))
                        } else r = Ne.getDataURL(i);
                        t.images[i.uuid] = {
                            uuid: i.uuid,
                            url: r
                        }
                    }
                    n.image = i.uuid
                }
                return e || (t.textures[this.uuid] = n), n
            },
            dispose: function() {
                this.dispatchEvent({
                    type: "dispose"
                })
            },
            transformUv: function(t) {
                if (300 !== this.mapping) return t;
                if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1) switch (this.wrapS) {
                    case ot:
                        t.x = t.x - Math.floor(t.x);
                        break;
                    case at:
                        t.x = t.x < 0 ? 0 : 1;
                        break;
                    case st:
                        1 === Math.abs(Math.floor(t.x) % 2) ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x)
                }
                if (t.y < 0 || t.y > 1) switch (this.wrapT) {
                    case ot:
                        t.y = t.y - Math.floor(t.y);
                        break;
                    case at:
                        t.y = t.y < 0 ? 0 : 1;
                        break;
                    case st:
                        1 === Math.abs(Math.floor(t.y) % 2) ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y)
                }
                return this.flipY && (t.y = 1 - t.y), t
            }
        }), Object.defineProperty(He.prototype, "needsUpdate", {
            set: function(t) {
                !0 === t && this.version++
            }
        }), Object.defineProperties(Fe.prototype, {
            width: {
                get: function() {
                    return this.z
                },
                set: function(t) {
                    this.z = t
                }
            },
            height: {
                get: function() {
                    return this.w
                },
                set: function(t) {
                    this.w = t
                }
            }
        }), Object.assign(Fe.prototype, {
            isVector4: !0,
            set: function(t, e, n, i) {
                return this.x = t, this.y = e, this.z = n, this.w = i, this
            },
            setScalar: function(t) {
                return this.x = t, this.y = t, this.z = t, this.w = t, this
            },
            setX: function(t) {
                return this.x = t, this
            },
            setY: function(t) {
                return this.y = t, this
            },
            setZ: function(t) {
                return this.z = t, this
            },
            setW: function(t) {
                return this.w = t, this
            },
            setComponent: function(t, e) {
                switch (t) {
                    case 0:
                        this.x = e;
                        break;
                    case 1:
                        this.y = e;
                        break;
                    case 2:
                        this.z = e;
                        break;
                    case 3:
                        this.w = e;
                        break;
                    default:
                        throw new Error("index is out of range: " + t)
                }
                return this
            },
            getComponent: function(t) {
                switch (t) {
                    case 0:
                        return this.x;
                    case 1:
                        return this.y;
                    case 2:
                        return this.z;
                    case 3:
                        return this.w;
                    default:
                        throw new Error("index is out of range: " + t)
                }
            },
            clone: function() {
                return new this.constructor(this.x, this.y, this.z, this.w)
            },
            copy: function(t) {
                return this.x = t.x, this.y = t.y, this.z = t.z, this.w = void 0 !== t.w ? t.w : 1, this
            },
            add: function(t, e) {
                return void 0 !== e ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this)
            },
            addScalar: function(t) {
                return this.x += t, this.y += t, this.z += t, this.w += t, this
            },
            addVectors: function(t, e) {
                return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this
            },
            addScaledVector: function(t, e) {
                return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this
            },
            sub: function(t, e) {
                return void 0 !== e ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this)
            },
            subScalar: function(t) {
                return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this
            },
            subVectors: function(t, e) {
                return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this
            },
            multiplyScalar: function(t) {
                return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this
            },
            applyMatrix4: function(t) {
                var e = this.x,
                    n = this.y,
                    i = this.z,
                    r = this.w,
                    o = t.elements;
                return this.x = o[0] * e + o[4] * n + o[8] * i + o[12] * r, this.y = o[1] * e + o[5] * n + o[9] * i + o[13] * r, this.z = o[2] * e + o[6] * n + o[10] * i + o[14] * r, this.w = o[3] * e + o[7] * n + o[11] * i + o[15] * r, this
            },
            divideScalar: function(t) {
                return this.multiplyScalar(1 / t)
            },
            setAxisAngleFromQuaternion: function(t) {
                this.w = 2 * Math.acos(t.w);
                var e = Math.sqrt(1 - t.w * t.w);
                return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this
            },
            setAxisAngleFromRotationMatrix: function(t) {
                var e, n, i, r, o = t.elements,
                    a = o[0],
                    s = o[4],
                    c = o[8],
                    l = o[1],
                    h = o[5],
                    u = o[9],
                    p = o[2],
                    d = o[6],
                    f = o[10];
                if (Math.abs(s - l) < .01 && Math.abs(c - p) < .01 && Math.abs(u - d) < .01) {
                    if (Math.abs(s + l) < .1 && Math.abs(c + p) < .1 && Math.abs(u + d) < .1 && Math.abs(a + h + f - 3) < .1) return this.set(1, 0, 0, 0), this;
                    e = Math.PI;
                    var m = (a + 1) / 2,
                        v = (h + 1) / 2,
                        g = (f + 1) / 2,
                        y = (s + l) / 4,
                        _ = (c + p) / 4,
                        x = (u + d) / 4;
                    return m > v && m > g ? m < .01 ? (n = 0, i = .707106781, r = .707106781) : (n = Math.sqrt(m), i = y / n, r = _ / n) : v > g ? v < .01 ? (n = .707106781, i = 0, r = .707106781) : (i = Math.sqrt(v), n = y / i, r = x / i) : g < .01 ? (n = .707106781, i = .707106781, r = 0) : (r = Math.sqrt(g), n = _ / r, i = x / r), this.set(n, i, r, e), this
                }
                var b = Math.sqrt((d - u) * (d - u) + (c - p) * (c - p) + (l - s) * (l - s));
                return Math.abs(b) < .001 && (b = 1), this.x = (d - u) / b, this.y = (c - p) / b, this.z = (l - s) / b, this.w = Math.acos((a + h + f - 1) / 2), this
            },
            min: function(t) {
                return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this
            },
            max: function(t) {
                return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this
            },
            clamp: function(t, e) {
                return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this.w = Math.max(t.w, Math.min(e.w, this.w)), this
            },
            clampScalar: function(t, e) {
                return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this.w = Math.max(t, Math.min(e, this.w)), this
            },
            clampLength: function(t, e) {
                var n = this.length();
                return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)))
            },
            floor: function() {
                return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this
            },
            ceil: function() {
                return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this
            },
            round: function() {
                return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this
            },
            roundToZero: function() {
                return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this
            },
            negate: function() {
                return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this
            },
            dot: function(t) {
                return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w
            },
            lengthSq: function() {
                return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
            },
            length: function() {
                return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
            },
            manhattanLength: function() {
                return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
            },
            normalize: function() {
                return this.divideScalar(this.length() || 1)
            },
            setLength: function(t) {
                return this.normalize().multiplyScalar(t)
            },
            lerp: function(t, e) {
                return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this
            },
            lerpVectors: function(t, e, n) {
                return this.subVectors(e, t).multiplyScalar(n).add(t)
            },
            equals: function(t) {
                return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
            },
            fromArray: function(t, e) {
                return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this
            },
            toArray: function(t, e) {
                return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t
            },
            fromBufferAttribute: function(t, e, n) {
                return void 0 !== n && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this
            }
        }), ke.prototype = Object.assign(Object.create(Me.prototype), {
            constructor: ke,
            isWebGLRenderTarget: !0,
            setSize: function(t, e) {
                this.width === t && this.height === e || (this.width = t, this.height = e, this.texture.image.width = t, this.texture.image.height = e, this.dispose()), this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e)
            },
            clone: function() {
                return (new this.constructor).copy(this)
            },
            copy: function(t) {
                return this.width = t.width, this.height = t.height, this.viewport.copy(t.viewport), this.texture = t.texture.clone(), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this.depthTexture = t.depthTexture, this
            },
            dispose: function() {
                this.dispatchEvent({
                    type: "dispose"
                })
            }
        }), Ue.prototype = Object.assign(Object.create(ke.prototype), {
            constructor: Ue,
            isWebGLMultisampleRenderTarget: !0,
            copy: function(t) {
                return ke.prototype.copy.call(this, t), this.samples = t.samples, this
            }
        });
        var ze = new Ce,
            Ge = new Ye,
            je = new Ce(0, 0, 0),
            Ve = new Ce(1, 1, 1),
            We = new Ce,
            Xe = new Ce,
            qe = new Ce;

        function Ye() {
            this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
        }
        Object.assign(Ye.prototype, {
            isMatrix4: !0,
            set: function(t, e, n, i, r, o, a, s, c, l, h, u, p, d, f, m) {
                var v = this.elements;
                return v[0] = t, v[4] = e, v[8] = n, v[12] = i, v[1] = r, v[5] = o, v[9] = a, v[13] = s, v[2] = c, v[6] = l, v[10] = h, v[14] = u, v[3] = p, v[7] = d, v[11] = f, v[15] = m, this
            },
            identity: function() {
                return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
            },
            clone: function() {
                return (new Ye).fromArray(this.elements)
            },
            copy: function(t) {
                var e = this.elements,
                    n = t.elements;
                return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], e[9] = n[9], e[10] = n[10], e[11] = n[11], e[12] = n[12], e[13] = n[13], e[14] = n[14], e[15] = n[15], this
            },
            copyPosition: function(t) {
                var e = this.elements,
                    n = t.elements;
                return e[12] = n[12], e[13] = n[13], e[14] = n[14], this
            },
            extractBasis: function(t, e, n) {
                return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this
            },
            makeBasis: function(t, e, n) {
                return this.set(t.x, e.x, n.x, 0, t.y, e.y, n.y, 0, t.z, e.z, n.z, 0, 0, 0, 0, 1), this
            },
            extractRotation: function(t) {
                var e = this.elements,
                    n = t.elements,
                    i = 1 / ze.setFromMatrixColumn(t, 0).length(),
                    r = 1 / ze.setFromMatrixColumn(t, 1).length(),
                    o = 1 / ze.setFromMatrixColumn(t, 2).length();
                return e[0] = n[0] * i, e[1] = n[1] * i, e[2] = n[2] * i, e[3] = 0, e[4] = n[4] * r, e[5] = n[5] * r, e[6] = n[6] * r, e[7] = 0, e[8] = n[8] * o, e[9] = n[9] * o, e[10] = n[10] * o, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
            },
            makeRotationFromEuler: function(t) {
                t && t.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
                var e = this.elements,
                    n = t.x,
                    i = t.y,
                    r = t.z,
                    o = Math.cos(n),
                    a = Math.sin(n),
                    s = Math.cos(i),
                    c = Math.sin(i),
                    l = Math.cos(r),
                    h = Math.sin(r);
                if ("XYZ" === t.order) {
                    var u = o * l,
                        p = o * h,
                        d = a * l,
                        f = a * h;
                    e[0] = s * l, e[4] = -s * h, e[8] = c, e[1] = p + d * c, e[5] = u - f * c, e[9] = -a * s, e[2] = f - u * c, e[6] = d + p * c, e[10] = o * s
                } else if ("YXZ" === t.order) {
                    var m = s * l,
                        v = s * h,
                        g = c * l,
                        y = c * h;
                    e[0] = m + y * a, e[4] = g * a - v, e[8] = o * c, e[1] = o * h, e[5] = o * l, e[9] = -a, e[2] = v * a - g, e[6] = y + m * a, e[10] = o * s
                } else if ("ZXY" === t.order) {
                    var m = s * l,
                        v = s * h,
                        g = c * l,
                        y = c * h;
                    e[0] = m - y * a, e[4] = -o * h, e[8] = g + v * a, e[1] = v + g * a, e[5] = o * l, e[9] = y - m * a, e[2] = -o * c, e[6] = a, e[10] = o * s
                } else if ("ZYX" === t.order) {
                    var u = o * l,
                        p = o * h,
                        d = a * l,
                        f = a * h;
                    e[0] = s * l, e[4] = d * c - p, e[8] = u * c + f, e[1] = s * h, e[5] = f * c + u, e[9] = p * c - d, e[2] = -c, e[6] = a * s, e[10] = o * s
                } else if ("YZX" === t.order) {
                    var _ = o * s,
                        x = o * c,
                        b = a * s,
                        w = a * c;
                    e[0] = s * l, e[4] = w - _ * h, e[8] = b * h + x, e[1] = h, e[5] = o * l, e[9] = -a * l, e[2] = -c * l, e[6] = x * h + b, e[10] = _ - w * h
                } else if ("XZY" === t.order) {
                    var _ = o * s,
                        x = o * c,
                        b = a * s,
                        w = a * c;
                    e[0] = s * l, e[4] = -h, e[8] = c * l, e[1] = _ * h + w, e[5] = o * l, e[9] = x * h - b, e[2] = b * h - x, e[6] = a * l, e[10] = w * h + _
                }
                return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
            },
            makeRotationFromQuaternion: function(t) {
                return this.compose(je, t, Ve)
            },
            lookAt: function(t, e, n) {
                var i = this.elements;
                return qe.subVectors(t, e), 0 === qe.lengthSq() && (qe.z = 1), qe.normalize(), We.crossVectors(n, qe), 0 === We.lengthSq() && (1 === Math.abs(n.z) ? qe.x += 1e-4 : qe.z += 1e-4, qe.normalize(), We.crossVectors(n, qe)), We.normalize(), Xe.crossVectors(qe, We), i[0] = We.x, i[4] = Xe.x, i[8] = qe.x, i[1] = We.y, i[5] = Xe.y, i[9] = qe.y, i[2] = We.z, i[6] = Xe.z, i[10] = qe.z, this
            },
            multiply: function(t, e) {
                return void 0 !== e ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(t, e)) : this.multiplyMatrices(this, t)
            },
            premultiply: function(t) {
                return this.multiplyMatrices(t, this)
            },
            multiplyMatrices: function(t, e) {
                var n = t.elements,
                    i = e.elements,
                    r = this.elements,
                    o = n[0],
                    a = n[4],
                    s = n[8],
                    c = n[12],
                    l = n[1],
                    h = n[5],
                    u = n[9],
                    p = n[13],
                    d = n[2],
                    f = n[6],
                    m = n[10],
                    v = n[14],
                    g = n[3],
                    y = n[7],
                    _ = n[11],
                    x = n[15],
                    b = i[0],
                    w = i[4],
                    M = i[8],
                    T = i[12],
                    E = i[1],
                    S = i[5],
                    A = i[9],
                    P = i[13],
                    L = i[2],
                    R = i[6],
                    C = i[10],
                    O = i[14],
                    I = i[3],
                    D = i[7],
                    N = i[11],
                    B = i[15];
                return r[0] = o * b + a * E + s * L + c * I, r[4] = o * w + a * S + s * R + c * D, r[8] = o * M + a * A + s * C + c * N, r[12] = o * T + a * P + s * O + c * B, r[1] = l * b + h * E + u * L + p * I, r[5] = l * w + h * S + u * R + p * D, r[9] = l * M + h * A + u * C + p * N, r[13] = l * T + h * P + u * O + p * B, r[2] = d * b + f * E + m * L + v * I, r[6] = d * w + f * S + m * R + v * D, r[10] = d * M + f * A + m * C + v * N, r[14] = d * T + f * P + m * O + v * B, r[3] = g * b + y * E + _ * L + x * I, r[7] = g * w + y * S + _ * R + x * D, r[11] = g * M + y * A + _ * C + x * N, r[15] = g * T + y * P + _ * O + x * B, this
            },
            multiplyScalar: function(t) {
                var e = this.elements;
                return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this
            },
            applyToBufferAttribute: function(t) {
                for (var e = 0, n = t.count; e < n; e++) ze.x = t.getX(e), ze.y = t.getY(e), ze.z = t.getZ(e), ze.applyMatrix4(this), t.setXYZ(e, ze.x, ze.y, ze.z);
                return t
            },
            determinant: function() {
                var t = this.elements,
                    e = t[0],
                    n = t[4],
                    i = t[8],
                    r = t[12],
                    o = t[1],
                    a = t[5],
                    s = t[9],
                    c = t[13],
                    l = t[2],
                    h = t[6],
                    u = t[10],
                    p = t[14],
                    d = t[3],
                    f = t[7],
                    m = t[11],
                    v = t[15];
                return d * (+r * s * h - i * c * h - r * a * u + n * c * u + i * a * p - n * s * p) + f * (+e * s * p - e * c * u + r * o * u - i * o * p + i * c * l - r * s * l) + m * (+e * c * h - e * a * p - r * o * h + n * o * p + r * a * l - n * c * l) + v * (-i * a * l - e * s * h + e * a * u + i * o * h - n * o * u + n * s * l)
            },
            transpose: function() {
                var t, e = this.elements;
                return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this
            },
            setPosition: function(t, e, n) {
                var i = this.elements;
                return t.isVector3 ? (i[12] = t.x, i[13] = t.y, i[14] = t.z) : (i[12] = t, i[13] = e, i[14] = n), this
            },
            getInverse: function(t, e) {
                var n = this.elements,
                    i = t.elements,
                    r = i[0],
                    o = i[1],
                    a = i[2],
                    s = i[3],
                    c = i[4],
                    l = i[5],
                    h = i[6],
                    u = i[7],
                    p = i[8],
                    d = i[9],
                    f = i[10],
                    m = i[11],
                    v = i[12],
                    g = i[13],
                    y = i[14],
                    _ = i[15],
                    x = d * y * u - g * f * u + g * h * m - l * y * m - d * h * _ + l * f * _,
                    b = v * f * u - p * y * u - v * h * m + c * y * m + p * h * _ - c * f * _,
                    w = p * g * u - v * d * u + v * l * m - c * g * m - p * l * _ + c * d * _,
                    M = v * d * h - p * g * h - v * l * f + c * g * f + p * l * y - c * d * y,
                    T = r * x + o * b + a * w + s * M;
                if (0 === T) {
                    var E = "THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0";
                    if (!0 === e) throw new Error(E);
                    return console.warn(E), this.identity()
                }
                var S = 1 / T;
                return n[0] = x * S, n[1] = (g * f * s - d * y * s - g * a * m + o * y * m + d * a * _ - o * f * _) * S, n[2] = (l * y * s - g * h * s + g * a * u - o * y * u - l * a * _ + o * h * _) * S, n[3] = (d * h * s - l * f * s - d * a * u + o * f * u + l * a * m - o * h * m) * S, n[4] = b * S, n[5] = (p * y * s - v * f * s + v * a * m - r * y * m - p * a * _ + r * f * _) * S, n[6] = (v * h * s - c * y * s - v * a * u + r * y * u + c * a * _ - r * h * _) * S, n[7] = (c * f * s - p * h * s + p * a * u - r * f * u - c * a * m + r * h * m) * S, n[8] = w * S, n[9] = (v * d * s - p * g * s - v * o * m + r * g * m + p * o * _ - r * d * _) * S, n[10] = (c * g * s - v * l * s + v * o * u - r * g * u - c * o * _ + r * l * _) * S, n[11] = (p * l * s - c * d * s - p * o * u + r * d * u + c * o * m - r * l * m) * S, n[12] = M * S, n[13] = (p * g * a - v * d * a + v * o * f - r * g * f - p * o * y + r * d * y) * S, n[14] = (v * l * a - c * g * a - v * o * h + r * g * h + c * o * y - r * l * y) * S, n[15] = (c * d * a - p * l * a + p * o * h - r * d * h - c * o * f + r * l * f) * S, this
            },
            scale: function(t) {
                var e = this.elements,
                    n = t.x,
                    i = t.y,
                    r = t.z;
                return e[0] *= n, e[4] *= i, e[8] *= r, e[1] *= n, e[5] *= i, e[9] *= r, e[2] *= n, e[6] *= i, e[10] *= r, e[3] *= n, e[7] *= i, e[11] *= r, this
            },
            getMaxScaleOnAxis: function() {
                var t = this.elements,
                    e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
                    n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
                    i = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
                return Math.sqrt(Math.max(e, n, i))
            },
            makeTranslation: function(t, e, n) {
                return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1), this
            },
            makeRotationX: function(t) {
                var e = Math.cos(t),
                    n = Math.sin(t);
                return this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1), this
            },
            makeRotationY: function(t) {
                var e = Math.cos(t),
                    n = Math.sin(t);
                return this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1), this
            },
            makeRotationZ: function(t) {
                var e = Math.cos(t),
                    n = Math.sin(t);
                return this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
            },
            makeRotationAxis: function(t, e) {
                var n = Math.cos(e),
                    i = Math.sin(e),
                    r = 1 - n,
                    o = t.x,
                    a = t.y,
                    s = t.z,
                    c = r * o,
                    l = r * a;
                return this.set(c * o + n, c * a - i * s, c * s + i * a, 0, c * a + i * s, l * a + n, l * s - i * o, 0, c * s - i * a, l * s + i * o, r * s * s + n, 0, 0, 0, 0, 1), this
            },
            makeScale: function(t, e, n) {
                return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this
            },
            makeShear: function(t, e, n) {
                return this.set(1, e, n, 0, t, 1, n, 0, t, e, 1, 0, 0, 0, 0, 1), this
            },
            compose: function(t, e, n) {
                var i = this.elements,
                    r = e._x,
                    o = e._y,
                    a = e._z,
                    s = e._w,
                    c = r + r,
                    l = o + o,
                    h = a + a,
                    u = r * c,
                    p = r * l,
                    d = r * h,
                    f = o * l,
                    m = o * h,
                    v = a * h,
                    g = s * c,
                    y = s * l,
                    _ = s * h,
                    x = n.x,
                    b = n.y,
                    w = n.z;
                return i[0] = (1 - (f + v)) * x, i[1] = (p + _) * x, i[2] = (d - y) * x, i[3] = 0, i[4] = (p - _) * b, i[5] = (1 - (u + v)) * b, i[6] = (m + g) * b, i[7] = 0, i[8] = (d + y) * w, i[9] = (m - g) * w, i[10] = (1 - (u + f)) * w, i[11] = 0, i[12] = t.x, i[13] = t.y, i[14] = t.z, i[15] = 1, this
            },
            decompose: function(t, e, n) {
                var i = this.elements,
                    r = ze.set(i[0], i[1], i[2]).length(),
                    o = ze.set(i[4], i[5], i[6]).length(),
                    a = ze.set(i[8], i[9], i[10]).length(),
                    s = this.determinant();
                s < 0 && (r = -r), t.x = i[12], t.y = i[13], t.z = i[14], Ge.copy(this);
                var c = 1 / r,
                    l = 1 / o,
                    h = 1 / a;
                return Ge.elements[0] *= c, Ge.elements[1] *= c, Ge.elements[2] *= c, Ge.elements[4] *= l, Ge.elements[5] *= l, Ge.elements[6] *= l, Ge.elements[8] *= h, Ge.elements[9] *= h, Ge.elements[10] *= h, e.setFromRotationMatrix(Ge), n.x = r, n.y = o, n.z = a, this
            },
            makePerspective: function(t, e, n, i, r, o) {
                void 0 === o && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
                var a = this.elements,
                    s = 2 * r / (e - t),
                    c = 2 * r / (n - i),
                    l = (e + t) / (e - t),
                    h = (n + i) / (n - i),
                    u = -(o + r) / (o - r),
                    p = -2 * o * r / (o - r);
                return a[0] = s, a[4] = 0, a[8] = l, a[12] = 0, a[1] = 0, a[5] = c, a[9] = h, a[13] = 0, a[2] = 0, a[6] = 0, a[10] = u, a[14] = p, a[3] = 0, a[7] = 0, a[11] = -1, a[15] = 0, this
            },
            makeOrthographic: function(t, e, n, i, r, o) {
                var a = this.elements,
                    s = 1 / (e - t),
                    c = 1 / (n - i),
                    l = 1 / (o - r),
                    h = (e + t) * s,
                    u = (n + i) * c,
                    p = (o + r) * l;
                return a[0] = 2 * s, a[4] = 0, a[8] = 0, a[12] = -h, a[1] = 0, a[5] = 2 * c, a[9] = 0, a[13] = -u, a[2] = 0, a[6] = 0, a[10] = -2 * l, a[14] = -p, a[3] = 0, a[7] = 0, a[11] = 0, a[15] = 1, this
            },
            equals: function(t) {
                for (var e = this.elements, n = t.elements, i = 0; i < 16; i++)
                    if (e[i] !== n[i]) return !1;
                return !0
            },
            fromArray: function(t, e) {
                void 0 === e && (e = 0);
                for (var n = 0; n < 16; n++) this.elements[n] = t[n + e];
                return this
            },
            toArray: function(t, e) {
                void 0 === t && (t = []), void 0 === e && (e = 0);
                var n = this.elements;
                return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t[e + 9] = n[9], t[e + 10] = n[10], t[e + 11] = n[11], t[e + 12] = n[12], t[e + 13] = n[13], t[e + 14] = n[14], t[e + 15] = n[15], t
            }
        });
        var Ze = new Ye,
            Je = new Pe;

        function Ke(t, e, n, i) {
            this._x = t || 0, this._y = e || 0, this._z = n || 0, this._order = i || Ke.DefaultOrder
        }

        function Qe() {
            this.mask = 1
        }
        Ke.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"], Ke.DefaultOrder = "XYZ", Object.defineProperties(Ke.prototype, {
            x: {
                get: function() {
                    return this._x
                },
                set: function(t) {
                    this._x = t, this._onChangeCallback()
                }
            },
            y: {
                get: function() {
                    return this._y
                },
                set: function(t) {
                    this._y = t, this._onChangeCallback()
                }
            },
            z: {
                get: function() {
                    return this._z
                },
                set: function(t) {
                    this._z = t, this._onChangeCallback()
                }
            },
            order: {
                get: function() {
                    return this._order
                },
                set: function(t) {
                    this._order = t, this._onChangeCallback()
                }
            }
        }), Object.assign(Ke.prototype, {
            isEuler: !0,
            set: function(t, e, n, i) {
                return this._x = t, this._y = e, this._z = n, this._order = i || this._order, this._onChangeCallback(), this
            },
            clone: function() {
                return new this.constructor(this._x, this._y, this._z, this._order)
            },
            copy: function(t) {
                return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this
            },
            setFromRotationMatrix: function(t, e, n) {
                var i = Se.clamp,
                    r = t.elements,
                    o = r[0],
                    a = r[4],
                    s = r[8],
                    c = r[1],
                    l = r[5],
                    h = r[9],
                    u = r[2],
                    p = r[6],
                    d = r[10];
                return "XYZ" === (e = e || this._order) ? (this._y = Math.asin(i(s, -1, 1)), Math.abs(s) < .9999999 ? (this._x = Math.atan2(-h, d), this._z = Math.atan2(-a, o)) : (this._x = Math.atan2(p, l), this._z = 0)) : "YXZ" === e ? (this._x = Math.asin(-i(h, -1, 1)), Math.abs(h) < .9999999 ? (this._y = Math.atan2(s, d), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-u, o), this._z = 0)) : "ZXY" === e ? (this._x = Math.asin(i(p, -1, 1)), Math.abs(p) < .9999999 ? (this._y = Math.atan2(-u, d), this._z = Math.atan2(-a, l)) : (this._y = 0, this._z = Math.atan2(c, o))) : "ZYX" === e ? (this._y = Math.asin(-i(u, -1, 1)), Math.abs(u) < .9999999 ? (this._x = Math.atan2(p, d), this._z = Math.atan2(c, o)) : (this._x = 0, this._z = Math.atan2(-a, l))) : "YZX" === e ? (this._z = Math.asin(i(c, -1, 1)), Math.abs(c) < .9999999 ? (this._x = Math.atan2(-h, l), this._y = Math.atan2(-u, o)) : (this._x = 0, this._y = Math.atan2(s, d))) : "XZY" === e ? (this._z = Math.asin(-i(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(p, l), this._y = Math.atan2(s, o)) : (this._x = Math.atan2(-h, d), this._y = 0)) : console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: " + e), this._order = e, !1 !== n && this._onChangeCallback(), this
            },
            setFromQuaternion: function(t, e, n) {
                return Ze.makeRotationFromQuaternion(t), this.setFromRotationMatrix(Ze, e, n)
            },
            setFromVector3: function(t, e) {
                return this.set(t.x, t.y, t.z, e || this._order)
            },
            reorder: function(t) {
                return Je.setFromEuler(this), this.setFromQuaternion(Je, t)
            },
            equals: function(t) {
                return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order
            },
            fromArray: function(t) {
                return this._x = t[0], this._y = t[1], this._z = t[2], void 0 !== t[3] && (this._order = t[3]), this._onChangeCallback(), this
            },
            toArray: function(t, e) {
                return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t
            },
            toVector3: function(t) {
                return t ? t.set(this._x, this._y, this._z) : new Ce(this._x, this._y, this._z)
            },
            _onChange: function(t) {
                return this._onChangeCallback = t, this
            },
            _onChangeCallback: function() {}
        }), Object.assign(Qe.prototype, {
            set: function(t) {
                this.mask = 1 << t | 0
            },
            enable: function(t) {
                this.mask |= 1 << t | 0
            },
            enableAll: function() {
                this.mask = -1
            },
            toggle: function(t) {
                this.mask ^= 1 << t | 0
            },
            disable: function(t) {
                this.mask &= ~(1 << t | 0)
            },
            disableAll: function() {
                this.mask = 0
            },
            test: function(t) {
                return 0 != (this.mask & t.mask)
            }
        });
        var $e = 0,
            tn = new Ce,
            en = new Pe,
            nn = new Ye,
            rn = new Ce,
            on = new Ce,
            an = new Ce,
            sn = new Pe,
            cn = new Ce(1, 0, 0),
            ln = new Ce(0, 1, 0),
            hn = new Ce(0, 0, 1),
            un = {
                type: "added"
            },
            pn = {
                type: "removed"
            };

        function dn() {
            Object.defineProperty(this, "id", {
                value: $e++
            }), this.uuid = Se.generateUUID(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = dn.DefaultUp.clone();
            var t = new Ce,
                e = new Ke,
                n = new Pe,
                i = new Ce(1, 1, 1);
            e._onChange(function() {
                n.setFromEuler(e, !1)
            }), n._onChange(function() {
                e.setFromQuaternion(n, void 0, !1)
            }), Object.defineProperties(this, {
                position: {
                    configurable: !0,
                    enumerable: !0,
                    value: t
                },
                rotation: {
                    configurable: !0,
                    enumerable: !0,
                    value: e
                },
                quaternion: {
                    configurable: !0,
                    enumerable: !0,
                    value: n
                },
                scale: {
                    configurable: !0,
                    enumerable: !0,
                    value: i
                },
                modelViewMatrix: {
                    value: new Ye
                },
                normalMatrix: {
                    value: new De
                }
            }), this.matrix = new Ye, this.matrixWorld = new Ye, this.matrixAutoUpdate = dn.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new Qe, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.userData = {}
        }

        function fn() {
            dn.call(this), this.type = "Scene", this.background = null, this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
                detail: this
            }))
        }
        dn.DefaultUp = new Ce(0, 1, 0), dn.DefaultMatrixAutoUpdate = !0, dn.prototype = Object.assign(Object.create(Me.prototype), {
            constructor: dn,
            isObject3D: !0,
            onBeforeRender: function() {},
            onAfterRender: function() {},
            applyMatrix: function(t) {
                this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale)
            },
            applyQuaternion: function(t) {
                return this.quaternion.premultiply(t), this
            },
            setRotationFromAxisAngle: function(t, e) {
                this.quaternion.setFromAxisAngle(t, e)
            },
            setRotationFromEuler: function(t) {
                this.quaternion.setFromEuler(t, !0)
            },
            setRotationFromMatrix: function(t) {
                this.quaternion.setFromRotationMatrix(t)
            },
            setRotationFromQuaternion: function(t) {
                this.quaternion.copy(t)
            },
            rotateOnAxis: function(t, e) {
                return en.setFromAxisAngle(t, e), this.quaternion.multiply(en), this
            },
            rotateOnWorldAxis: function(t, e) {
                return en.setFromAxisAngle(t, e), this.quaternion.premultiply(en), this
            },
            rotateX: function(t) {
                return this.rotateOnAxis(cn, t)
            },
            rotateY: function(t) {
                return this.rotateOnAxis(ln, t)
            },
            rotateZ: function(t) {
                return this.rotateOnAxis(hn, t)
            },
            translateOnAxis: function(t, e) {
                return tn.copy(t).applyQuaternion(this.quaternion), this.position.add(tn.multiplyScalar(e)), this
            },
            translateX: function(t) {
                return this.translateOnAxis(cn, t)
            },
            translateY: function(t) {
                return this.translateOnAxis(ln, t)
            },
            translateZ: function(t) {
                return this.translateOnAxis(hn, t)
            },
            localToWorld: function(t) {
                return t.applyMatrix4(this.matrixWorld)
            },
            worldToLocal: function(t) {
                return t.applyMatrix4(nn.getInverse(this.matrixWorld))
            },
            lookAt: function(t, e, n) {
                t.isVector3 ? rn.copy(t) : rn.set(t, e, n);
                var i = this.parent;
                this.updateWorldMatrix(!0, !1), on.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? nn.lookAt(on, rn, this.up) : nn.lookAt(rn, on, this.up), this.quaternion.setFromRotationMatrix(nn), i && (nn.extractRotation(i.matrixWorld), en.setFromRotationMatrix(nn), this.quaternion.premultiply(en.inverse()))
            },
            add: function(t) {
                if (arguments.length > 1) {
                    for (var e = 0; e < arguments.length; e++) this.add(arguments[e]);
                    return this
                }
                return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (null !== t.parent && t.parent.remove(t), t.parent = this, this.children.push(t), t.dispatchEvent(un)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this)
            },
            remove: function(t) {
                if (arguments.length > 1) {
                    for (var e = 0; e < arguments.length; e++) this.remove(arguments[e]);
                    return this
                }
                var n = this.children.indexOf(t);
                return -1 !== n && (t.parent = null, this.children.splice(n, 1), t.dispatchEvent(pn)), this
            },
            attach: function(t) {
                return this.updateWorldMatrix(!0, !1), nn.getInverse(this.matrixWorld), null !== t.parent && (t.parent.updateWorldMatrix(!0, !1), nn.multiply(t.parent.matrixWorld)), t.applyMatrix(nn), t.updateWorldMatrix(!1, !1), this.add(t), this
            },
            getObjectById: function(t) {
                return this.getObjectByProperty("id", t)
            },
            getObjectByName: function(t) {
                return this.getObjectByProperty("name", t)
            },
            getObjectByProperty: function(t, e) {
                if (this[t] === e) return this;
                for (var n = 0, i = this.children.length; n < i; n++) {
                    var r = this.children[n],
                        o = r.getObjectByProperty(t, e);
                    if (void 0 !== o) return o
                }
            },
            getWorldPosition: function(t) {
                return void 0 === t && (console.warn("THREE.Object3D: .getWorldPosition() target is now required"), t = new Ce), this.updateMatrixWorld(!0), t.setFromMatrixPosition(this.matrixWorld)
            },
            getWorldQuaternion: function(t) {
                return void 0 === t && (console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"), t = new Pe), this.updateMatrixWorld(!0), this.matrixWorld.decompose(on, t, an), t
            },
            getWorldScale: function(t) {
                return void 0 === t && (console.warn("THREE.Object3D: .getWorldScale() target is now required"), t = new Ce), this.updateMatrixWorld(!0), this.matrixWorld.decompose(on, sn, t), t
            },
            getWorldDirection: function(t) {
                void 0 === t && (console.warn("THREE.Object3D: .getWorldDirection() target is now required"), t = new Ce), this.updateMatrixWorld(!0);
                var e = this.matrixWorld.elements;
                return t.set(e[8], e[9], e[10]).normalize()
            },
            raycast: function() {},
            traverse: function(t) {
                t(this);
                for (var e = this.children, n = 0, i = e.length; n < i; n++) e[n].traverse(t)
            },
            traverseVisible: function(t) {
                if (!1 !== this.visible) {
                    t(this);
                    for (var e = this.children, n = 0, i = e.length; n < i; n++) e[n].traverseVisible(t)
                }
            },
            traverseAncestors: function(t) {
                var e = this.parent;
                null !== e && (t(e), e.traverseAncestors(t))
            },
            updateMatrix: function() {
                this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0
            },
            updateMatrixWorld: function(t) {
                this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, t = !0);
                for (var e = this.children, n = 0, i = e.length; n < i; n++) e[n].updateMatrixWorld(t)
            },
            updateWorldMatrix: function(t, e) {
                var n = this.parent;
                if (!0 === t && null !== n && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), !0 === e)
                    for (var i = this.children, r = 0, o = i.length; r < o; r++) i[r].updateWorldMatrix(!1, !0)
            },
            toJSON: function(t) {
                var e = void 0 === t || "string" == typeof t,
                    n = {};
                e && (t = {
                    geometries: {},
                    materials: {},
                    textures: {},
                    images: {},
                    shapes: {}
                }, n.metadata = {
                    version: 4.5,
                    type: "Object",
                    generator: "Object3D.toJSON"
                });
                var i = {};

                function r(e, n) {
                    return void 0 === e[n.uuid] && (e[n.uuid] = n.toJSON(t)), n.uuid
                }
                if (i.uuid = this.uuid, i.type = this.type, "" !== this.name && (i.name = this.name), !0 === this.castShadow && (i.castShadow = !0), !0 === this.receiveShadow && (i.receiveShadow = !0), !1 === this.visible && (i.visible = !1), !1 === this.frustumCulled && (i.frustumCulled = !1), 0 !== this.renderOrder && (i.renderOrder = this.renderOrder), "{}" !== JSON.stringify(this.userData) && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), !1 === this.matrixAutoUpdate && (i.matrixAutoUpdate = !1), this.isMesh && this.drawMode !== ae && (i.drawMode = this.drawMode), this.isMesh || this.isLine || this.isPoints) {
                    i.geometry = r(t.geometries, this.geometry);
                    var o = this.geometry.parameters;
                    if (void 0 !== o && void 0 !== o.shapes) {
                        var a = o.shapes;
                        if (Array.isArray(a))
                            for (var s = 0, c = a.length; s < c; s++) {
                                var l = a[s];
                                r(t.shapes, l)
                            } else r(t.shapes, a)
                    }
                }
                if (void 0 !== this.material)
                    if (Array.isArray(this.material)) {
                        for (var h = [], s = 0, c = this.material.length; s < c; s++) h.push(r(t.materials, this.material[s]));
                        i.material = h
                    } else i.material = r(t.materials, this.material);
                if (this.children.length > 0) {
                    i.children = [];
                    for (var s = 0; s < this.children.length; s++) i.children.push(this.children[s].toJSON(t).object)
                }
                if (e) {
                    var u = m(t.geometries),
                        p = m(t.materials),
                        d = m(t.textures),
                        f = m(t.images),
                        a = m(t.shapes);
                    u.length > 0 && (n.geometries = u), p.length > 0 && (n.materials = p), d.length > 0 && (n.textures = d), f.length > 0 && (n.images = f), a.length > 0 && (n.shapes = a)
                }
                return n.object = i, n;

                function m(t) {
                    var e = [];
                    for (var n in t) {
                        var i = t[n];
                        delete i.metadata, e.push(i)
                    }
                    return e
                }
            },
            clone: function(t) {
                return (new this.constructor).copy(this, t)
            },
            copy: function(t, e) {
                if (void 0 === e && (e = !0), this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.userData = JSON.parse(JSON.stringify(t.userData)), !0 === e)
                    for (var n = 0; n < t.children.length; n++) {
                        var i = t.children[n];
                        this.add(i.clone())
                    }
                return this
            }
        }), fn.prototype = Object.assign(Object.create(dn.prototype), {
            constructor: fn,
            isScene: !0,
            copy: function(t, e) {
                return dn.prototype.copy.call(this, t, e), null !== t.background && (this.background = t.background.clone()), null !== t.fog && (this.fog = t.fog.clone()), null !== t.overrideMaterial && (this.overrideMaterial = t.overrideMaterial.clone()), this.autoUpdate = t.autoUpdate, this.matrixAutoUpdate = t.matrixAutoUpdate, this
            },
            toJSON: function(t) {
                var e = dn.prototype.toJSON.call(this, t);
                return null !== this.background && (e.object.background = this.background.toJSON(t)), null !== this.fog && (e.object.fog = this.fog.toJSON()), e
            },
            dispose: function() {
                this.dispatchEvent({
                    type: "dispose"
                })
            }
        });
        var mn = [new Ce, new Ce, new Ce, new Ce, new Ce, new Ce, new Ce, new Ce],
            vn = new Ce,
            gn = new Ce,
            yn = new Ce,
            _n = new Ce,
            xn = new Ce,
            bn = new Ce,
            wn = new Ce,
            Mn = new Ce,
            Tn = new Ce,
            En = new Ce,
            Sn = new Ce;

        function An(t, e) {
            this.min = void 0 !== t ? t : new Ce(1 / 0, 1 / 0, 1 / 0), this.max = void 0 !== e ? e : new Ce(-1 / 0, -1 / 0, -1 / 0)
        }

        function Pn(t, e, n, i, r) {
            var o, a;
            for (o = 0, a = t.length - 3; o <= a; o += 3) {
                Sn.fromArray(t, o);
                var s = r.x * Math.abs(Sn.x) + r.y * Math.abs(Sn.y) + r.z * Math.abs(Sn.z),
                    c = e.dot(Sn),
                    l = n.dot(Sn),
                    h = i.dot(Sn);
                if (Math.max(-Math.max(c, l, h), Math.min(c, l, h)) > s) return !1
            }
            return !0
        }
        Object.assign(An.prototype, {
            isBox3: !0,
            set: function(t, e) {
                return this.min.copy(t), this.max.copy(e), this
            },
            setFromArray: function(t) {
                for (var e = 1 / 0, n = 1 / 0, i = 1 / 0, r = -1 / 0, o = -1 / 0, a = -1 / 0, s = 0, c = t.length; s < c; s += 3) {
                    var l = t[s],
                        h = t[s + 1],
                        u = t[s + 2];
                    l < e && (e = l), h < n && (n = h), u < i && (i = u), l > r && (r = l), h > o && (o = h), u > a && (a = u)
                }
                return this.min.set(e, n, i), this.max.set(r, o, a), this
            },
            setFromBufferAttribute: function(t) {
                for (var e = 1 / 0, n = 1 / 0, i = 1 / 0, r = -1 / 0, o = -1 / 0, a = -1 / 0, s = 0, c = t.count; s < c; s++) {
                    var l = t.getX(s),
                        h = t.getY(s),
                        u = t.getZ(s);
                    l < e && (e = l), h < n && (n = h), u < i && (i = u), l > r && (r = l), h > o && (o = h), u > a && (a = u)
                }
                return this.min.set(e, n, i), this.max.set(r, o, a), this
            },
            setFromPoints: function(t) {
                this.makeEmpty();
                for (var e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]);
                return this
            },
            setFromCenterAndSize: function(t, e) {
                var n = vn.copy(e).multiplyScalar(.5);
                return this.min.copy(t).sub(n), this.max.copy(t).add(n), this
            },
            setFromObject: function(t) {
                return this.makeEmpty(), this.expandByObject(t)
            },
            clone: function() {
                return (new this.constructor).copy(this)
            },
            copy: function(t) {
                return this.min.copy(t.min), this.max.copy(t.max), this
            },
            makeEmpty: function() {
                return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this
            },
            isEmpty: function() {
                return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
            },
            getCenter: function(t) {
                return void 0 === t && (console.warn("THREE.Box3: .getCenter() target is now required"), t = new Ce), this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5)
            },
            getSize: function(t) {
                return void 0 === t && (console.warn("THREE.Box3: .getSize() target is now required"), t = new Ce), this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min)
            },
            expandByPoint: function(t) {
                return this.min.min(t), this.max.max(t), this
            },
            expandByVector: function(t) {
                return this.min.sub(t), this.max.add(t), this
            },
            expandByScalar: function(t) {
                return this.min.addScalar(-t), this.max.addScalar(t), this
            },
            expandByObject: function(t) {
                var e, n;
                t.updateWorldMatrix(!1, !1);
                var i = t.geometry;
                if (void 0 !== i)
                    if (i.isGeometry) {
                        var r = i.vertices;
                        for (e = 0, n = r.length; e < n; e++) vn.copy(r[e]), vn.applyMatrix4(t.matrixWorld), this.expandByPoint(vn)
                    } else if (i.isBufferGeometry) {
                    var o = i.attributes.position;
                    if (void 0 !== o)
                        for (e = 0, n = o.count; e < n; e++) vn.fromBufferAttribute(o, e).applyMatrix4(t.matrixWorld), this.expandByPoint(vn)
                }
                var a = t.children;
                for (e = 0, n = a.length; e < n; e++) this.expandByObject(a[e]);
                return this
            },
            containsPoint: function(t) {
                return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z)
            },
            containsBox: function(t) {
                return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z
            },
            getParameter: function(t, e) {
                return void 0 === e && (console.warn("THREE.Box3: .getParameter() target is now required"), e = new Ce), e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z))
            },
            intersectsBox: function(t) {
                return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z)
            },
            intersectsSphere: function(t) {
                return this.clampPoint(t.center, vn), vn.distanceToSquared(t.center) <= t.radius * t.radius
            },
            intersectsPlane: function(t) {
                var e, n;
                return t.normal.x > 0 ? (e = t.normal.x * this.min.x, n = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, n = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, n += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, n += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, n += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, n += t.normal.z * this.min.z), e <= -t.constant && n >= -t.constant
            },
            intersectsTriangle: function(t) {
                if (this.isEmpty()) return !1;
                this.getCenter(Mn), Tn.subVectors(this.max, Mn), gn.subVectors(t.a, Mn), yn.subVectors(t.b, Mn), _n.subVectors(t.c, Mn), xn.subVectors(yn, gn), bn.subVectors(_n, yn), wn.subVectors(gn, _n);
                var e = [0, -xn.z, xn.y, 0, -bn.z, bn.y, 0, -wn.z, wn.y, xn.z, 0, -xn.x, bn.z, 0, -bn.x, wn.z, 0, -wn.x, -xn.y, xn.x, 0, -bn.y, bn.x, 0, -wn.y, wn.x, 0];
                return !!Pn(e, gn, yn, _n, Tn) && !!Pn(e = [1, 0, 0, 0, 1, 0, 0, 0, 1], gn, yn, _n, Tn) && (En.crossVectors(xn, bn), Pn(e = [En.x, En.y, En.z], gn, yn, _n, Tn))
            },
            clampPoint: function(t, e) {
                return void 0 === e && (console.warn("THREE.Box3: .clampPoint() target is now required"), e = new Ce), e.copy(t).clamp(this.min, this.max)
            },
            distanceToPoint: function(t) {
                var e = vn.copy(t).clamp(this.min, this.max);
                return e.sub(t).length()
            },
            getBoundingSphere: function(t) {
                return void 0 === t && console.error("THREE.Box3: .getBoundingSphere() target is now required"), this.getCenter(t.center), t.radius = .5 * this.getSize(vn).length(), t
            },
            intersect: function(t) {
                return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this
            },
            union: function(t) {
                return this.min.min(t.min), this.max.max(t.max), this
            },
            applyMatrix4: function(t) {
                return this.isEmpty() ? this : (mn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), mn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), mn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), mn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), mn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), mn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), mn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), mn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(mn), this)
            },
            translate: function(t) {
                return this.min.add(t), this.max.add(t), this
            },
            equals: function(t) {
                return t.min.equals(this.min) && t.max.equals(this.max)
            }
        });
        var Ln = new An;

        function Rn(t, e) {
            this.center = void 0 !== t ? t : new Ce, this.radius = void 0 !== e ? e : 0
        }
        Object.assign(Rn.prototype, {
            set: function(t, e) {
                return this.center.copy(t), this.radius = e, this
            },
            setFromPoints: function(t, e) {
                var n = this.center;
                void 0 !== e ? n.copy(e) : Ln.setFromPoints(t).getCenter(n);
                for (var i = 0, r = 0, o = t.length; r < o; r++) i = Math.max(i, n.distanceToSquared(t[r]));
                return this.radius = Math.sqrt(i), this
            },
            clone: function() {
                return (new this.constructor).copy(this)
            },
            copy: function(t) {
                return this.center.copy(t.center), this.radius = t.radius, this
            },
            empty: function() {
                return this.radius <= 0
            },
            containsPoint: function(t) {
                return t.distanceToSquared(this.center) <= this.radius * this.radius
            },
            distanceToPoint: function(t) {
                return t.distanceTo(this.center) - this.radius
            },
            intersectsSphere: function(t) {
                var e = this.radius + t.radius;
                return t.center.distanceToSquared(this.center) <= e * e
            },
            intersectsBox: function(t) {
                return t.intersectsSphere(this)
            },
            intersectsPlane: function(t) {
                return Math.abs(t.distanceToPoint(this.center)) <= this.radius
            },
            clampPoint: function(t, e) {
                var n = this.center.distanceToSquared(t);
                return void 0 === e && (console.warn("THREE.Sphere: .clampPoint() target is now required"), e = new Ce), e.copy(t), n > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e
            },
            getBoundingBox: function(t) {
                return void 0 === t && (console.warn("THREE.Sphere: .getBoundingBox() target is now required"), t = new An), t.set(this.center, this.center), t.expandByScalar(this.radius), t
            },
            applyMatrix4: function(t) {
                return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this
            },
            translate: function(t) {
                return this.center.add(t), this
            },
            equals: function(t) {
                return t.center.equals(this.center) && t.radius === this.radius
            }
        });
        var Cn = new Ce,
            On = new Ce,
            In = new Ce,
            Dn = new Ce,
            Nn = new Ce,
            Bn = new Ce,
            Hn = new Ce;

        function Fn(t, e) {
            this.origin = void 0 !== t ? t : new Ce, this.direction = void 0 !== e ? e : new Ce
        }
        Object.assign(Fn.prototype, {
            set: function(t, e) {
                return this.origin.copy(t), this.direction.copy(e), this
            },
            clone: function() {
                return (new this.constructor).copy(this)
            },
            copy: function(t) {
                return this.origin.copy(t.origin), this.direction.copy(t.direction), this
            },
            at: function(t, e) {
                return void 0 === e && (console.warn("THREE.Ray: .at() target is now required"), e = new Ce), e.copy(this.direction).multiplyScalar(t).add(this.origin)
            },
            lookAt: function(t) {
                return this.direction.copy(t).sub(this.origin).normalize(), this
            },
            recast: function(t) {
                return this.origin.copy(this.at(t, Cn)), this
            },
            closestPointToPoint: function(t, e) {
                void 0 === e && (console.warn("THREE.Ray: .closestPointToPoint() target is now required"), e = new Ce), e.subVectors(t, this.origin);
                var n = e.dot(this.direction);
                return n < 0 ? e.copy(this.origin) : e.copy(this.direction).multiplyScalar(n).add(this.origin)
            },
            distanceToPoint: function(t) {
                return Math.sqrt(this.distanceSqToPoint(t))
            },
            distanceSqToPoint: function(t) {
                var e = Cn.subVectors(t, this.origin).dot(this.direction);
                return e < 0 ? this.origin.distanceToSquared(t) : (Cn.copy(this.direction).multiplyScalar(e).add(this.origin), Cn.distanceToSquared(t))
            },
            distanceSqToSegment: function(t, e, n, i) {
                On.copy(t).add(e).multiplyScalar(.5), In.copy(e).sub(t).normalize(), Dn.copy(this.origin).sub(On);
                var r, o, a, s, c = .5 * t.distanceTo(e),
                    l = -this.direction.dot(In),
                    h = Dn.dot(this.direction),
                    u = -Dn.dot(In),
                    p = Dn.lengthSq(),
                    d = Math.abs(1 - l * l);
                if (d > 0)
                    if (o = l * h - u, s = c * d, (r = l * u - h) >= 0)
                        if (o >= -s)
                            if (o <= s) {
                                var f = 1 / d;
                                a = (r *= f) * (r + l * (o *= f) + 2 * h) + o * (l * r + o + 2 * u) + p
                            } else o = c, r = Math.max(0, -(l * o + h)), a = -r * r + o * (o + 2 * u) + p;
                else o = -c, r = Math.max(0, -(l * o + h)), a = -r * r + o * (o + 2 * u) + p;
                else o <= -s ? (r = Math.max(0, -(-l * c + h)), o = r > 0 ? -c : Math.min(Math.max(-c, -u), c), a = -r * r + o * (o + 2 * u) + p) : o <= s ? (r = 0, o = Math.min(Math.max(-c, -u), c), a = o * (o + 2 * u) + p) : (r = Math.max(0, -(l * c + h)), o = r > 0 ? c : Math.min(Math.max(-c, -u), c), a = -r * r + o * (o + 2 * u) + p);
                else o = l > 0 ? -c : c, r = Math.max(0, -(l * o + h)), a = -r * r + o * (o + 2 * u) + p;
                return n && n.copy(this.direction).multiplyScalar(r).add(this.origin), i && i.copy(In).multiplyScalar(o).add(On), a
            },
            intersectSphere: function(t, e) {
                Cn.subVectors(t.center, this.origin);
                var n = Cn.dot(this.direction),
                    i = Cn.dot(Cn) - n * n,
                    r = t.radius * t.radius;
                if (i > r) return null;
                var o = Math.sqrt(r - i),
                    a = n - o,
                    s = n + o;
                return a < 0 && s < 0 ? null : a < 0 ? this.at(s, e) : this.at(a, e)
            },
            intersectsSphere: function(t) {
                return this.distanceSqToPoint(t.center) <= t.radius * t.radius
            },
            distanceToPlane: function(t) {
                var e = t.normal.dot(this.direction);
                if (0 === e) return 0 === t.distanceToPoint(this.origin) ? 0 : null;
                var n = -(this.origin.dot(t.normal) + t.constant) / e;
                return n >= 0 ? n : null
            },
            intersectPlane: function(t, e) {
                var n = this.distanceToPlane(t);
                return null === n ? null : this.at(n, e)
            },
            intersectsPlane: function(t) {
                var e = t.distanceToPoint(this.origin);
                if (0 === e) return !0;
                var n = t.normal.dot(this.direction);
                return n * e < 0
            },
            intersectBox: function(t, e) {
                var n, i, r, o, a, s, c = 1 / this.direction.x,
                    l = 1 / this.direction.y,
                    h = 1 / this.direction.z,
                    u = this.origin;
                return c >= 0 ? (n = (t.min.x - u.x) * c, i = (t.max.x - u.x) * c) : (n = (t.max.x - u.x) * c, i = (t.min.x - u.x) * c), l >= 0 ? (r = (t.min.y - u.y) * l, o = (t.max.y - u.y) * l) : (r = (t.max.y - u.y) * l, o = (t.min.y - u.y) * l), n > o || r > i ? null : ((r > n || n != n) && (n = r), (o < i || i != i) && (i = o), h >= 0 ? (a = (t.min.z - u.z) * h, s = (t.max.z - u.z) * h) : (a = (t.max.z - u.z) * h, s = (t.min.z - u.z) * h), n > s || a > i ? null : ((a > n || n != n) && (n = a), (s < i || i != i) && (i = s), i < 0 ? null : this.at(n >= 0 ? n : i, e)))
            },
            intersectsBox: function(t) {
                return null !== this.intersectBox(t, Cn)
            },
            intersectTriangle: function(t, e, n, i, r) {
                Nn.subVectors(e, t), Bn.subVectors(n, t), Hn.crossVectors(Nn, Bn);
                var o, a = this.direction.dot(Hn);
                if (a > 0) {
                    if (i) return null;
                    o = 1
                } else {
                    if (!(a < 0)) return null;
                    o = -1, a = -a
                }
                Dn.subVectors(this.origin, t);
                var s = o * this.direction.dot(Bn.crossVectors(Dn, Bn));
                if (s < 0) return null;
                var c = o * this.direction.dot(Nn.cross(Dn));
                if (c < 0) return null;
                if (s + c > a) return null;
                var l = -o * Dn.dot(Hn);
                return l < 0 ? null : this.at(l / a, r)
            },
            applyMatrix4: function(t) {
                return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this
            },
            equals: function(t) {
                return t.origin.equals(this.origin) && t.direction.equals(this.direction)
            }
        });
        var kn = new Ce,
            Un = new Ce,
            zn = new Ce,
            Gn = new Ce,
            jn = new Ce,
            Vn = new Ce,
            Wn = new Ce,
            Xn = new Ce,
            qn = new Ce,
            Yn = new Ce;

        function Zn(t, e, n) {
            this.a = void 0 !== t ? t : new Ce, this.b = void 0 !== e ? e : new Ce, this.c = void 0 !== n ? n : new Ce
        }
        Object.assign(Zn, {
            getNormal: function(t, e, n, i) {
                void 0 === i && (console.warn("THREE.Triangle: .getNormal() target is now required"), i = new Ce), i.subVectors(n, e), kn.subVectors(t, e), i.cross(kn);
                var r = i.lengthSq();
                return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0)
            },
            getBarycoord: function(t, e, n, i, r) {
                kn.subVectors(i, e), Un.subVectors(n, e), zn.subVectors(t, e);
                var o = kn.dot(kn),
                    a = kn.dot(Un),
                    s = kn.dot(zn),
                    c = Un.dot(Un),
                    l = Un.dot(zn),
                    h = o * c - a * a;
                if (void 0 === r && (console.warn("THREE.Triangle: .getBarycoord() target is now required"), r = new Ce), 0 === h) return r.set(-2, -1, -1);
                var u = 1 / h,
                    p = (c * s - a * l) * u,
                    d = (o * l - a * s) * u;
                return r.set(1 - p - d, d, p)
            },
            containsPoint: function(t, e, n, i) {
                return Zn.getBarycoord(t, e, n, i, Gn), Gn.x >= 0 && Gn.y >= 0 && Gn.x + Gn.y <= 1
            },
            getUV: function(t, e, n, i, r, o, a, s) {
                return this.getBarycoord(t, e, n, i, Gn), s.set(0, 0), s.addScaledVector(r, Gn.x), s.addScaledVector(o, Gn.y), s.addScaledVector(a, Gn.z), s
            },
            isFrontFacing: function(t, e, n, i) {
                return kn.subVectors(n, e), Un.subVectors(t, e), kn.cross(Un).dot(i) < 0
            }
        }), Object.assign(Zn.prototype, {
            set: function(t, e, n) {
                return this.a.copy(t), this.b.copy(e), this.c.copy(n), this
            },
            setFromPointsAndIndices: function(t, e, n, i) {
                return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[i]), this
            },
            clone: function() {
                return (new this.constructor).copy(this)
            },
            copy: function(t) {
                return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this
            },
            getArea: function() {
                return kn.subVectors(this.c, this.b), Un.subVectors(this.a, this.b), .5 * kn.cross(Un).length()
            },
            getMidpoint: function(t) {
                return void 0 === t && (console.warn("THREE.Triangle: .getMidpoint() target is now required"), t = new Ce), t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
            },
            getNormal: function(t) {
                return Zn.getNormal(this.a, this.b, this.c, t)
            },
            getPlane: function(t) {
                return void 0 === t && (console.warn("THREE.Triangle: .getPlane() target is now required"), t = new Ce), t.setFromCoplanarPoints(this.a, this.b, this.c)
            },
            getBarycoord: function(t, e) {
                return Zn.getBarycoord(t, this.a, this.b, this.c, e)
            },
            getUV: function(t, e, n, i, r) {
                return Zn.getUV(t, this.a, this.b, this.c, e, n, i, r)
            },
            containsPoint: function(t) {
                return Zn.containsPoint(t, this.a, this.b, this.c)
            },
            isFrontFacing: function(t) {
                return Zn.isFrontFacing(this.a, this.b, this.c, t)
            },
            intersectsBox: function(t) {
                return t.intersectsTriangle(this)
            },
            closestPointToPoint: function(t, e) {
                void 0 === e && (console.warn("THREE.Triangle: .closestPointToPoint() target is now required"), e = new Ce);
                var n, i, r = this.a,
                    o = this.b,
                    a = this.c;
                jn.subVectors(o, r), Vn.subVectors(a, r), Xn.subVectors(t, r);
                var s = jn.dot(Xn),
                    c = Vn.dot(Xn);
                if (s <= 0 && c <= 0) return e.copy(r);
                qn.subVectors(t, o);
                var l = jn.dot(qn),
                    h = Vn.dot(qn);
                if (l >= 0 && h <= l) return e.copy(o);
                var u = s * h - l * c;
                if (u <= 0 && s >= 0 && l <= 0) return n = s / (s - l), e.copy(r).addScaledVector(jn, n);
                Yn.subVectors(t, a);
                var p = jn.dot(Yn),
                    d = Vn.dot(Yn);
                if (d >= 0 && p <= d) return e.copy(a);
                var f = p * c - s * d;
                if (f <= 0 && c >= 0 && d <= 0) return i = c / (c - d), e.copy(r).addScaledVector(Vn, i);
                var m = l * d - p * h;
                if (m <= 0 && h - l >= 0 && p - d >= 0) return Wn.subVectors(a, o), i = (h - l) / (h - l + (p - d)), e.copy(o).addScaledVector(Wn, i);
                var v = 1 / (m + f + u);
                return n = f * v, i = u * v, e.copy(r).addScaledVector(jn, n).addScaledVector(Vn, i)
            },
            equals: function(t) {
                return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c)
            }
        });
        var Jn = {
                aliceblue: 15792383,
                antiquewhite: 16444375,
                aqua: 65535,
                aquamarine: 8388564,
                azure: 15794175,
                beige: 16119260,
                bisque: 16770244,
                black: 0,
                blanchedalmond: 16772045,
                blue: 255,
                blueviolet: 9055202,
                brown: 10824234,
                burlywood: 14596231,
                cadetblue: 6266528,
                chartreuse: 8388352,
                chocolate: 13789470,
                coral: 16744272,
                cornflowerblue: 6591981,
                cornsilk: 16775388,
                crimson: 14423100,
                cyan: 65535,
                darkblue: 139,
                darkcyan: 35723,
                darkgoldenrod: 12092939,
                darkgray: 11119017,
                darkgreen: 25600,
                darkgrey: 11119017,
                darkkhaki: 12433259,
                darkmagenta: 9109643,
                darkolivegreen: 5597999,
                darkorange: 16747520,
                darkorchid: 10040012,
                darkred: 9109504,
                darksalmon: 15308410,
                darkseagreen: 9419919,
                darkslateblue: 4734347,
                darkslategray: 3100495,
                darkslategrey: 3100495,
                darkturquoise: 52945,
                darkviolet: 9699539,
                deeppink: 16716947,
                deepskyblue: 49151,
                dimgray: 6908265,
                dimgrey: 6908265,
                dodgerblue: 2003199,
                firebrick: 11674146,
                floralwhite: 16775920,
                forestgreen: 2263842,
                fuchsia: 16711935,
                gainsboro: 14474460,
                ghostwhite: 16316671,
                gold: 16766720,
                goldenrod: 14329120,
                gray: 8421504,
                green: 32768,
                greenyellow: 11403055,
                grey: 8421504,
                honeydew: 15794160,
                hotpink: 16738740,
                indianred: 13458524,
                indigo: 4915330,
                ivory: 16777200,
                khaki: 15787660,
                lavender: 15132410,
                lavenderblush: 16773365,
                lawngreen: 8190976,
                lemonchiffon: 16775885,
                lightblue: 11393254,
                lightcoral: 15761536,
                lightcyan: 14745599,
                lightgoldenrodyellow: 16448210,
                lightgray: 13882323,
                lightgreen: 9498256,
                lightgrey: 13882323,
                lightpink: 16758465,
                lightsalmon: 16752762,
                lightseagreen: 2142890,
                lightskyblue: 8900346,
                lightslategray: 7833753,
                lightslategrey: 7833753,
                lightsteelblue: 11584734,
                lightyellow: 16777184,
                lime: 65280,
                limegreen: 3329330,
                linen: 16445670,
                magenta: 16711935,
                maroon: 8388608,
                mediumaquamarine: 6737322,
                mediumblue: 205,
                mediumorchid: 12211667,
                mediumpurple: 9662683,
                mediumseagreen: 3978097,
                mediumslateblue: 8087790,
                mediumspringgreen: 64154,
                mediumturquoise: 4772300,
                mediumvioletred: 13047173,
                midnightblue: 1644912,
                mintcream: 16121850,
                mistyrose: 16770273,
                moccasin: 16770229,
                navajowhite: 16768685,
                navy: 128,
                oldlace: 16643558,
                olive: 8421376,
                olivedrab: 7048739,
                orange: 16753920,
                orangered: 16729344,
                orchid: 14315734,
                palegoldenrod: 15657130,
                palegreen: 10025880,
                paleturquoise: 11529966,
                palevioletred: 14381203,
                papayawhip: 16773077,
                peachpuff: 16767673,
                peru: 13468991,
                pink: 16761035,
                plum: 14524637,
                powderblue: 11591910,
                purple: 8388736,
                rebeccapurple: 6697881,
                red: 16711680,
                rosybrown: 12357519,
                royalblue: 4286945,
                saddlebrown: 9127187,
                salmon: 16416882,
                sandybrown: 16032864,
                seagreen: 3050327,
                seashell: 16774638,
                sienna: 10506797,
                silver: 12632256,
                skyblue: 8900331,
                slateblue: 6970061,
                slategray: 7372944,
                slategrey: 7372944,
                snow: 16775930,
                springgreen: 65407,
                steelblue: 4620980,
                tan: 13808780,
                teal: 32896,
                thistle: 14204888,
                tomato: 16737095,
                turquoise: 4251856,
                violet: 15631086,
                wheat: 16113331,
                white: 16777215,
                whitesmoke: 16119285,
                yellow: 16776960,
                yellowgreen: 10145074
            },
            Kn = {
                h: 0,
                s: 0,
                l: 0
            },
            Qn = {
                h: 0,
                s: 0,
                l: 0
            };

        function $n(t, e, n) {
            return void 0 === e && void 0 === n ? this.set(t) : this.setRGB(t, e, n)
        }

        function ti(t, e, n) {
            return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - n) : t
        }

        function ei(t) {
            return t < .04045 ? .0773993808 * t : Math.pow(.9478672986 * t + .0521327014, 2.4)
        }

        function ni(t) {
            return t < .0031308 ? 12.92 * t : 1.055 * Math.pow(t, .41666) - .055
        }

        function ii(t, e, n, i, r, o) {
            this.a = t, this.b = e, this.c = n, this.normal = i && i.isVector3 ? i : new Ce, this.vertexNormals = Array.isArray(i) ? i : [], this.color = r && r.isColor ? r : new $n, this.vertexColors = Array.isArray(r) ? r : [], this.materialIndex = void 0 !== o ? o : 0
        }
        Object.assign($n.prototype, {
            isColor: !0,
            r: 1,
            g: 1,
            b: 1,
            set: function(t) {
                return t && t.isColor ? this.copy(t) : "number" == typeof t ? this.setHex(t) : "string" == typeof t && this.setStyle(t), this
            },
            setScalar: function(t) {
                return this.r = t, this.g = t, this.b = t, this
            },
            setHex: function(t) {
                return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (255 & t) / 255, this
            },
            setRGB: function(t, e, n) {
                return this.r = t, this.g = e, this.b = n, this
            },
            setHSL: function(t, e, n) {
                if (t = Se.euclideanModulo(t, 1), e = Se.clamp(e, 0, 1), n = Se.clamp(n, 0, 1), 0 === e) this.r = this.g = this.b = n;
                else {
                    var i = n <= .5 ? n * (1 + e) : n + e - n * e,
                        r = 2 * n - i;
                    this.r = ti(r, i, t + 1 / 3), this.g = ti(r, i, t), this.b = ti(r, i, t - 1 / 3)
                }
                return this
            },
            setStyle: function(t) {
                function e(e) {
                    void 0 !== e && parseFloat(e) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.")
                }
                var n;
                if (n = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(t)) {
                    var i, r = n[1],
                        o = n[2];
                    switch (r) {
                        case "rgb":
                        case "rgba":
                            if (i = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(o)) return this.r = Math.min(255, parseInt(i[1], 10)) / 255, this.g = Math.min(255, parseInt(i[2], 10)) / 255, this.b = Math.min(255, parseInt(i[3], 10)) / 255, e(i[5]), this;
                            if (i = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(o)) return this.r = Math.min(100, parseInt(i[1], 10)) / 100, this.g = Math.min(100, parseInt(i[2], 10)) / 100, this.b = Math.min(100, parseInt(i[3], 10)) / 100, e(i[5]), this;
                            break;
                        case "hsl":
                        case "hsla":
                            if (i = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(o)) {
                                var a = parseFloat(i[1]) / 360,
                                    s = parseInt(i[2], 10) / 100,
                                    c = parseInt(i[3], 10) / 100;
                                return e(i[5]), this.setHSL(a, s, c)
                            }
                    }
                } else if (n = /^\#([A-Fa-f0-9]+)$/.exec(t)) {
                    var l = n[1],
                        h = l.length;
                    if (3 === h) return this.r = parseInt(l.charAt(0) + l.charAt(0), 16) / 255, this.g = parseInt(l.charAt(1) + l.charAt(1), 16) / 255, this.b = parseInt(l.charAt(2) + l.charAt(2), 16) / 255, this;
                    if (6 === h) return this.r = parseInt(l.charAt(0) + l.charAt(1), 16) / 255, this.g = parseInt(l.charAt(2) + l.charAt(3), 16) / 255, this.b = parseInt(l.charAt(4) + l.charAt(5), 16) / 255, this
                }
                if (t && t.length > 0) {
                    var l = Jn[t];
                    void 0 !== l ? this.setHex(l) : console.warn("THREE.Color: Unknown color " + t)
                }
                return this
            },
            clone: function() {
                return new this.constructor(this.r, this.g, this.b)
            },
            copy: function(t) {
                return this.r = t.r, this.g = t.g, this.b = t.b, this
            },
            copyGammaToLinear: function(t, e) {
                return void 0 === e && (e = 2), this.r = Math.pow(t.r, e), this.g = Math.pow(t.g, e), this.b = Math.pow(t.b, e), this
            },
            copyLinearToGamma: function(t, e) {
                void 0 === e && (e = 2);
                var n = e > 0 ? 1 / e : 1;
                return this.r = Math.pow(t.r, n), this.g = Math.pow(t.g, n), this.b = Math.pow(t.b, n), this
            },
            convertGammaToLinear: function(t) {
                return this.copyGammaToLinear(this, t), this
            },
            convertLinearToGamma: function(t) {
                return this.copyLinearToGamma(this, t), this
            },
            copySRGBToLinear: function(t) {
                return this.r = ei(t.r), this.g = ei(t.g), this.b = ei(t.b), this
            },
            copyLinearToSRGB: function(t) {
                return this.r = ni(t.r), this.g = ni(t.g), this.b = ni(t.b), this
            },
            convertSRGBToLinear: function() {
                return this.copySRGBToLinear(this), this
            },
            convertLinearToSRGB: function() {
                return this.copyLinearToSRGB(this), this
            },
            getHex: function() {
                return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
            },
            getHexString: function() {
                return ("000000" + this.getHex().toString(16)).slice(-6)
            },
            getHSL: function(t) {
                void 0 === t && (console.warn("THREE.Color: .getHSL() target is now required"), t = {
                    h: 0,
                    s: 0,
                    l: 0
                });
                var e, n, i = this.r,
                    r = this.g,
                    o = this.b,
                    a = Math.max(i, r, o),
                    s = Math.min(i, r, o),
                    c = (s + a) / 2;
                if (s === a) e = 0, n = 0;
                else {
                    var l = a - s;
                    switch (n = c <= .5 ? l / (a + s) : l / (2 - a - s), a) {
                        case i:
                            e = (r - o) / l + (r < o ? 6 : 0);
                            break;
                        case r:
                            e = (o - i) / l + 2;
                            break;
                        case o:
                            e = (i - r) / l + 4
                    }
                    e /= 6
                }
                return t.h = e, t.s = n, t.l = c, t
            },
            getStyle: function() {
                return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
            },
            offsetHSL: function(t, e, n) {
                return this.getHSL(Kn), Kn.h += t, Kn.s += e, Kn.l += n, this.setHSL(Kn.h, Kn.s, Kn.l), this
            },
            add: function(t) {
                return this.r += t.r, this.g += t.g, this.b += t.b, this
            },
            addColors: function(t, e) {
                return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this
            },
            addScalar: function(t) {
                return this.r += t, this.g += t, this.b += t, this
            },
            sub: function(t) {
                return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this
            },
            multiply: function(t) {
                return this.r *= t.r, this.g *= t.g, this.b *= t.b, this
            },
            multiplyScalar: function(t) {
                return this.r *= t, this.g *= t, this.b *= t, this
            },
            lerp: function(t, e) {
                return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this
            },
            lerpHSL: function(t, e) {
                this.getHSL(Kn), t.getHSL(Qn);
                var n = Se.lerp(Kn.h, Qn.h, e),
                    i = Se.lerp(Kn.s, Qn.s, e),
                    r = Se.lerp(Kn.l, Qn.l, e);
                return this.setHSL(n, i, r), this
            },
            equals: function(t) {
                return t.r === this.r && t.g === this.g && t.b === this.b
            },
            fromArray: function(t, e) {
                return void 0 === e && (e = 0), this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this
            },
            toArray: function(t, e) {
                return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t
            },
            toJSON: function() {
                return this.getHex()
            }
        }), Object.assign(ii.prototype, {
            clone: function() {
                return (new this.constructor).copy(this)
            },
            copy: function(t) {
                this.a = t.a, this.b = t.b, this.c = t.c, this.normal.copy(t.normal), this.color.copy(t.color), this.materialIndex = t.materialIndex;
                for (var e = 0, n = t.vertexNormals.length; e < n; e++) this.vertexNormals[e] = t.vertexNormals[e].clone();
                for (var e = 0, n = t.vertexColors.length; e < n; e++) this.vertexColors[e] = t.vertexColors[e].clone();
                return this
            }
        });
        var ri = 0;

        function oi() {
            Object.defineProperty(this, "id", {
                value: ri++
            }), this.uuid = Se.generateUUID(), this.name = "", this.type = "Material", this.fog = !0, this.blending = f, this.side = s, this.flatShading = !1, this.vertexTangents = !1, this.vertexColors = h, this.opacity = 1, this.transparent = !1, this.blendSrc = P, this.blendDst = L, this.blendEquation = _, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = F, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = we, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = be, this.stencilZFail = be, this.stencilZPass = be, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaTest = 0, this.premultipliedAlpha = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.needsUpdate = !0
        }

        function ai(t) {
            oi.call(this), this.type = "MeshBasicMaterial", this.color = new $n(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = j, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.setValues(t)
        }

        function si(t, e, n) {
            if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
            this.name = "", this.array = t, this.itemSize = e, this.count = void 0 !== t ? t.length / e : 0, this.normalized = !0 === n, this.dynamic = !1, this.updateRange = {
                offset: 0,
                count: -1
            }, this.version = 0
        }

        function ci(t, e, n) {
            si.call(this, new Int8Array(t), e, n)
        }

        function li(t, e, n) {
            si.call(this, new Uint8Array(t), e, n)
        }

        function hi(t, e, n) {
            si.call(this, new Uint8ClampedArray(t), e, n)
        }

        function ui(t, e, n) {
            si.call(this, new Int16Array(t), e, n)
        }

        function pi(t, e, n) {
            si.call(this, new Uint16Array(t), e, n)
        }

        function di(t, e, n) {
            si.call(this, new Int32Array(t), e, n)
        }

        function fi(t, e, n) {
            si.call(this, new Uint32Array(t), e, n)
        }

        function mi(t, e, n) {
            si.call(this, new Float32Array(t), e, n)
        }

        function vi(t, e, n) {
            si.call(this, new Float64Array(t), e, n)
        }

        function gi() {
            this.vertices = [], this.normals = [], this.colors = [], this.uvs = [], this.uvs2 = [], this.groups = [], this.morphTargets = {}, this.skinWeights = [], this.skinIndices = [], this.boundingBox = null, this.boundingSphere = null, this.verticesNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.uvsNeedUpdate = !1, this.groupsNeedUpdate = !1
        }

        function yi(t) {
            if (0 === t.length) return -1 / 0;
            for (var e = t[0], n = 1, i = t.length; n < i; ++n) t[n] > e && (e = t[n]);
            return e
        }
        oi.prototype = Object.assign(Object.create(Me.prototype), {
            constructor: oi,
            isMaterial: !0,
            onBeforeCompile: function() {},
            setValues: function(t) {
                if (void 0 !== t)
                    for (var e in t) {
                        var n = t[e];
                        if (void 0 !== n)
                            if ("shading" !== e) {
                                var i = this[e];
                                void 0 !== i ? i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[e] = n : console.warn("THREE." + this.type + ": '" + e + "' is not a property of this material.")
                            } else console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = 1 === n;
                        else console.warn("THREE.Material: '" + e + "' parameter is undefined.")
                    }
            },
            toJSON: function(t) {
                var e = void 0 === t || "string" == typeof t;
                e && (t = {
                    textures: {},
                    images: {}
                });
                var n = {
                    metadata: {
                        version: 4.5,
                        type: "Material",
                        generator: "Material.toJSON"
                    }
                };

                function i(t) {
                    var e = [];
                    for (var n in t) {
                        var i = t[n];
                        delete i.metadata, e.push(i)
                    }
                    return e
                }
                if (n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), void 0 !== this.roughness && (n.roughness = this.roughness), void 0 !== this.metalness && (n.metalness = this.metalness), this.sheen && this.sheen.isColor && (n.sheen = this.sheen.getHex()), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && 1 !== this.emissiveIntensity && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), void 0 !== this.shininess && (n.shininess = this.shininess), void 0 !== this.clearcoat && (n.clearcoat = this.clearcoat), void 0 !== this.clearcoatRoughness && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(t).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t).uuid, n.reflectivity = this.reflectivity, n.refractionRatio = this.refractionRatio, void 0 !== this.combine && (n.combine = this.combine), void 0 !== this.envMapIntensity && (n.envMapIntensity = this.envMapIntensity)), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid), void 0 !== this.size && (n.size = this.size), void 0 !== this.sizeAttenuation && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== f && (n.blending = this.blending), !0 === this.flatShading && (n.flatShading = this.flatShading), this.side !== s && (n.side = this.side), this.vertexColors !== h && (n.vertexColors = this.vertexColors), this.opacity < 1 && (n.opacity = this.opacity), !0 === this.transparent && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.stencilWrite = this.stencilWrite, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, this.rotation && 0 !== this.rotation && (n.rotation = this.rotation), !0 === this.polygonOffset && (n.polygonOffset = !0), 0 !== this.polygonOffsetFactor && (n.polygonOffsetFactor = this.polygonOffsetFactor), 0 !== this.polygonOffsetUnits && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth && 1 !== this.linewidth && (n.linewidth = this.linewidth), void 0 !== this.dashSize && (n.dashSize = this.dashSize), void 0 !== this.gapSize && (n.gapSize = this.gapSize), void 0 !== this.scale && (n.scale = this.scale), !0 === this.dithering && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), !0 === this.premultipliedAlpha && (n.premultipliedAlpha = this.premultipliedAlpha), !0 === this.wireframe && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (n.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (n.wireframeLinejoin = this.wireframeLinejoin), !0 === this.morphTargets && (n.morphTargets = !0), !0 === this.morphNormals && (n.morphNormals = !0), !0 === this.skinning && (n.skinning = !0), !1 === this.visible && (n.visible = !1), !1 === this.toneMapped && (n.toneMapped = !1), "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData), e) {
                    var r = i(t.textures),
                        o = i(t.images);
                    r.length > 0 && (n.textures = r), o.length > 0 && (n.images = o)
                }
                return n
            },
            clone: function() {
                return (new this.constructor).copy(this)
            },
            copy: function(t) {
                this.name = t.name, this.fog = t.fog, this.blending = t.blending, this.side = t.side, this.flatShading = t.flatShading, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.stencilWrite = t.stencilWrite, this.stencilWriteMask = t.stencilWriteMask, this.stencilFunc = t.stencilFunc, this.stencilRef = t.stencilRef, this.stencilFuncMask = t.stencilFuncMask, this.stencilFail = t.stencilFail, this.stencilZFail = t.stencilZFail, this.stencilZPass = t.stencilZPass, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.premultipliedAlpha = t.premultipliedAlpha, this.visible = t.visible, this.toneMapped = t.toneMapped, this.userData = JSON.parse(JSON.stringify(t.userData)), this.clipShadows = t.clipShadows, this.clipIntersection = t.clipIntersection;
                var e = t.clippingPlanes,
                    n = null;
                if (null !== e) {
                    var i = e.length;
                    n = new Array(i);
                    for (var r = 0; r !== i; ++r) n[r] = e[r].clone()
                }
                return this.clippingPlanes = n, this.shadowSide = t.shadowSide, this
            },
            dispose: function() {
                this.dispatchEvent({
                    type: "dispose"
                })
            }
        }), ai.prototype = Object.create(oi.prototype), ai.prototype.constructor = ai, ai.prototype.isMeshBasicMaterial = !0, ai.prototype.copy = function(t) {
            return oi.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this
        }, Object.defineProperty(si.prototype, "needsUpdate", {
            set: function(t) {
                !0 === t && this.version++
            }
        }), Object.assign(si.prototype, {
            isBufferAttribute: !0,
            onUploadCallback: function() {},
            setDynamic: function(t) {
                return this.dynamic = t, this
            },
            copy: function(t) {
                return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.dynamic = t.dynamic, this
            },
            copyAt: function(t, e, n) {
                t *= this.itemSize, n *= e.itemSize;
                for (var i = 0, r = this.itemSize; i < r; i++) this.array[t + i] = e.array[n + i];
                return this
            },
            copyArray: function(t) {
                return this.array.set(t), this
            },
            copyColorsArray: function(t) {
                for (var e = this.array, n = 0, i = 0, r = t.length; i < r; i++) {
                    var o = t[i];
                    void 0 === o && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", i), o = new $n), e[n++] = o.r, e[n++] = o.g, e[n++] = o.b
                }
                return this
            },
            copyVector2sArray: function(t) {
                for (var e = this.array, n = 0, i = 0, r = t.length; i < r; i++) {
                    var o = t[i];
                    void 0 === o && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", i), o = new Ae), e[n++] = o.x, e[n++] = o.y
                }
                return this
            },
            copyVector3sArray: function(t) {
                for (var e = this.array, n = 0, i = 0, r = t.length; i < r; i++) {
                    var o = t[i];
                    void 0 === o && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", i), o = new Ce), e[n++] = o.x, e[n++] = o.y, e[n++] = o.z
                }
                return this
            },
            copyVector4sArray: function(t) {
                for (var e = this.array, n = 0, i = 0, r = t.length; i < r; i++) {
                    var o = t[i];
                    void 0 === o && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", i), o = new Fe), e[n++] = o.x, e[n++] = o.y, e[n++] = o.z, e[n++] = o.w
                }
                return this
            },
            set: function(t, e) {
                return void 0 === e && (e = 0), this.array.set(t, e), this
            },
            getX: function(t) {
                return this.array[t * this.itemSize]
            },
            setX: function(t, e) {
                return this.array[t * this.itemSize] = e, this
            },
            getY: function(t) {
                return this.array[t * this.itemSize + 1]
            },
            setY: function(t, e) {
                return this.array[t * this.itemSize + 1] = e, this
            },
            getZ: function(t) {
                return this.array[t * this.itemSize + 2]
            },
            setZ: function(t, e) {
                return this.array[t * this.itemSize + 2] = e, this
            },
            getW: function(t) {
                return this.array[t * this.itemSize + 3]
            },
            setW: function(t, e) {
                return this.array[t * this.itemSize + 3] = e, this
            },
            setXY: function(t, e, n) {
                return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = n, this
            },
            setXYZ: function(t, e, n, i) {
                return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = i, this
            },
            setXYZW: function(t, e, n, i, r) {
                return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = i, this.array[t + 3] = r, this
            },
            onUpload: function(t) {
                return this.onUploadCallback = t, this
            },
            clone: function() {
                return new this.constructor(this.array, this.itemSize).copy(this)
            },
            toJSON: function() {
                return {
                    itemSize: this.itemSize,
                    type: this.array.constructor.name,
                    array: Array.prototype.slice.call(this.array),
                    normalized: this.normalized
                }
            }
        }), ci.prototype = Object.create(si.prototype), ci.prototype.constructor = ci, li.prototype = Object.create(si.prototype), li.prototype.constructor = li, hi.prototype = Object.create(si.prototype), hi.prototype.constructor = hi, ui.prototype = Object.create(si.prototype), ui.prototype.constructor = ui, pi.prototype = Object.create(si.prototype), pi.prototype.constructor = pi, di.prototype = Object.create(si.prototype), di.prototype.constructor = di, fi.prototype = Object.create(si.prototype), fi.prototype.constructor = fi, mi.prototype = Object.create(si.prototype), mi.prototype.constructor = mi, vi.prototype = Object.create(si.prototype), vi.prototype.constructor = vi, Object.assign(gi.prototype, {
            computeGroups: function(t) {
                for (var e, n = [], i = void 0, r = t.faces, o = 0; o < r.length; o++) {
                    var a = r[o];
                    a.materialIndex !== i && (i = a.materialIndex, void 0 !== e && (e.count = 3 * o - e.start, n.push(e)), e = {
                        start: 3 * o,
                        materialIndex: i
                    })
                }
                void 0 !== e && (e.count = 3 * o - e.start, n.push(e)), this.groups = n
            },
            fromGeometry: function(t) {
                var e, n = t.faces,
                    i = t.vertices,
                    r = t.faceVertexUvs,
                    o = r[0] && r[0].length > 0,
                    a = r[1] && r[1].length > 0,
                    s = t.morphTargets,
                    c = s.length;
                if (c > 0) {
                    e = [];
                    for (var l = 0; l < c; l++) e[l] = {
                        name: s[l].name,
                        data: []
                    };
                    this.morphTargets.position = e
                }
                var h, u = t.morphNormals,
                    p = u.length;
                if (p > 0) {
                    h = [];
                    for (var l = 0; l < p; l++) h[l] = {
                        name: u[l].name,
                        data: []
                    };
                    this.morphTargets.normal = h
                }
                var d = t.skinIndices,
                    f = t.skinWeights,
                    m = d.length === i.length,
                    v = f.length === i.length;
                i.length > 0 && 0 === n.length && console.error("THREE.DirectGeometry: Faceless geometries are not supported.");
                for (var l = 0; l < n.length; l++) {
                    var g = n[l];
                    this.vertices.push(i[g.a], i[g.b], i[g.c]);
                    var y = g.vertexNormals;
                    if (3 === y.length) this.normals.push(y[0], y[1], y[2]);
                    else {
                        var _ = g.normal;
                        this.normals.push(_, _, _)
                    }
                    var x = g.vertexColors;
                    if (3 === x.length) this.colors.push(x[0], x[1], x[2]);
                    else {
                        var b = g.color;
                        this.colors.push(b, b, b)
                    }
                    if (!0 === o) {
                        var w = r[0][l];
                        void 0 !== w ? this.uvs.push(w[0], w[1], w[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ", l), this.uvs.push(new Ae, new Ae, new Ae))
                    }
                    if (!0 === a) {
                        var w = r[1][l];
                        void 0 !== w ? this.uvs2.push(w[0], w[1], w[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ", l), this.uvs2.push(new Ae, new Ae, new Ae))
                    }
                    for (var M = 0; M < c; M++) {
                        var T = s[M].vertices;
                        e[M].data.push(T[g.a], T[g.b], T[g.c])
                    }
                    for (var M = 0; M < p; M++) {
                        var E = u[M].vertexNormals[l];
                        h[M].data.push(E.a, E.b, E.c)
                    }
                    m && this.skinIndices.push(d[g.a], d[g.b], d[g.c]), v && this.skinWeights.push(f[g.a], f[g.b], f[g.c])
                }
                return this.computeGroups(t), this.verticesNeedUpdate = t.verticesNeedUpdate, this.normalsNeedUpdate = t.normalsNeedUpdate, this.colorsNeedUpdate = t.colorsNeedUpdate, this.uvsNeedUpdate = t.uvsNeedUpdate, this.groupsNeedUpdate = t.groupsNeedUpdate, null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()), this
            }
        });
        var _i = 1,
            xi = new Ye,
            bi = new dn,
            wi = new Ce,
            Mi = new An,
            Ti = new An,
            Ei = new Ce;

        function Si() {
            Object.defineProperty(this, "id", {
                value: _i += 2
            }), this.uuid = Se.generateUUID(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
                start: 0,
                count: 1 / 0
            }, this.userData = {}
        }
        Si.prototype = Object.assign(Object.create(Me.prototype), {
            constructor: Si,
            isBufferGeometry: !0,
            getIndex: function() {
                return this.index
            },
            setIndex: function(t) {
                Array.isArray(t) ? this.index = new(yi(t) > 65535 ? fi : pi)(t, 1) : this.index = t
            },
            addAttribute: function(t, e) {
                return e && e.isBufferAttribute || e && e.isInterleavedBufferAttribute ? "index" === t ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), this.setIndex(e), this) : this.setAttribute(t, e) : (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), this.addAttribute(t, new si(arguments[1], arguments[2])))
            },
            getAttribute: function(t) {
                return this.attributes[t]
            },
            setAttribute: function(t, e) {
                return this.attributes[t] = e, this
            },
            removeAttribute: function(t) {
                return delete this.attributes[t], this
            },
            addGroup: function(t, e, n) {
                this.groups.push({
                    start: t,
                    count: e,
                    materialIndex: void 0 !== n ? n : 0
                })
            },
            clearGroups: function() {
                this.groups = []
            },
            setDrawRange: function(t, e) {
                this.drawRange.start = t, this.drawRange.count = e
            },
            applyMatrix: function(t) {
                var e = this.attributes.position;
                void 0 !== e && (t.applyToBufferAttribute(e), e.needsUpdate = !0);
                var n = this.attributes.normal;
                if (void 0 !== n) {
                    var i = (new De).getNormalMatrix(t);
                    i.applyToBufferAttribute(n), n.needsUpdate = !0
                }
                var r = this.attributes.tangent;
                if (void 0 !== r) {
                    var i = (new De).getNormalMatrix(t);
                    i.applyToBufferAttribute(r), r.needsUpdate = !0
                }
                return null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this
            },
            rotateX: function(t) {
                return xi.makeRotationX(t), this.applyMatrix(xi), this
            },
            rotateY: function(t) {
                return xi.makeRotationY(t), this.applyMatrix(xi), this
            },
            rotateZ: function(t) {
                return xi.makeRotationZ(t), this.applyMatrix(xi), this
            },
            translate: function(t, e, n) {
                return xi.makeTranslation(t, e, n), this.applyMatrix(xi), this
            },
            scale: function(t, e, n) {
                return xi.makeScale(t, e, n), this.applyMatrix(xi), this
            },
            lookAt: function(t) {
                return bi.lookAt(t), bi.updateMatrix(), this.applyMatrix(bi.matrix), this
            },
            center: function() {
                return this.computeBoundingBox(), this.boundingBox.getCenter(wi).negate(), this.translate(wi.x, wi.y, wi.z), this
            },
            setFromObject: function(t) {
                var e = t.geometry;
                if (t.isPoints || t.isLine) {
                    var n = new mi(3 * e.vertices.length, 3),
                        i = new mi(3 * e.colors.length, 3);
                    if (this.addAttribute("position", n.copyVector3sArray(e.vertices)), this.addAttribute("color", i.copyColorsArray(e.colors)), e.lineDistances && e.lineDistances.length === e.vertices.length) {
                        var r = new mi(e.lineDistances.length, 1);
                        this.addAttribute("lineDistance", r.copyArray(e.lineDistances))
                    }
                    null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()), null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone())
                } else t.isMesh && e && e.isGeometry && this.fromGeometry(e);
                return this
            },
            setFromPoints: function(t) {
                for (var e = [], n = 0, i = t.length; n < i; n++) {
                    var r = t[n];
                    e.push(r.x, r.y, r.z || 0)
                }
                return this.addAttribute("position", new mi(e, 3)), this
            },
            updateFromObject: function(t) {
                var e, n = t.geometry;
                if (t.isMesh) {
                    var i = n.__directGeometry;
                    if (!0 === n.elementsNeedUpdate && (i = void 0, n.elementsNeedUpdate = !1), void 0 === i) return this.fromGeometry(n);
                    i.verticesNeedUpdate = n.verticesNeedUpdate, i.normalsNeedUpdate = n.normalsNeedUpdate, i.colorsNeedUpdate = n.colorsNeedUpdate, i.uvsNeedUpdate = n.uvsNeedUpdate, i.groupsNeedUpdate = n.groupsNeedUpdate, n.verticesNeedUpdate = !1, n.normalsNeedUpdate = !1, n.colorsNeedUpdate = !1, n.uvsNeedUpdate = !1, n.groupsNeedUpdate = !1, n = i
                }
                return !0 === n.verticesNeedUpdate && (void 0 !== (e = this.attributes.position) && (e.copyVector3sArray(n.vertices), e.needsUpdate = !0), n.verticesNeedUpdate = !1), !0 === n.normalsNeedUpdate && (void 0 !== (e = this.attributes.normal) && (e.copyVector3sArray(n.normals), e.needsUpdate = !0), n.normalsNeedUpdate = !1), !0 === n.colorsNeedUpdate && (void 0 !== (e = this.attributes.color) && (e.copyColorsArray(n.colors), e.needsUpdate = !0), n.colorsNeedUpdate = !1), n.uvsNeedUpdate && (void 0 !== (e = this.attributes.uv) && (e.copyVector2sArray(n.uvs), e.needsUpdate = !0), n.uvsNeedUpdate = !1), n.lineDistancesNeedUpdate && (void 0 !== (e = this.attributes.lineDistance) && (e.copyArray(n.lineDistances), e.needsUpdate = !0), n.lineDistancesNeedUpdate = !1), n.groupsNeedUpdate && (n.computeGroups(t.geometry), this.groups = n.groups, n.groupsNeedUpdate = !1), this
            },
            fromGeometry: function(t) {
                return t.__directGeometry = (new gi).fromGeometry(t), this.fromDirectGeometry(t.__directGeometry)
            },
            fromDirectGeometry: function(t) {
                var e = new Float32Array(3 * t.vertices.length);
                if (this.addAttribute("position", new si(e, 3).copyVector3sArray(t.vertices)), t.normals.length > 0) {
                    var n = new Float32Array(3 * t.normals.length);
                    this.addAttribute("normal", new si(n, 3).copyVector3sArray(t.normals))
                }
                if (t.colors.length > 0) {
                    var i = new Float32Array(3 * t.colors.length);
                    this.addAttribute("color", new si(i, 3).copyColorsArray(t.colors))
                }
                if (t.uvs.length > 0) {
                    var r = new Float32Array(2 * t.uvs.length);
                    this.addAttribute("uv", new si(r, 2).copyVector2sArray(t.uvs))
                }
                if (t.uvs2.length > 0) {
                    var o = new Float32Array(2 * t.uvs2.length);
                    this.addAttribute("uv2", new si(o, 2).copyVector2sArray(t.uvs2))
                }
                for (var a in this.groups = t.groups, t.morphTargets) {
                    for (var s = [], c = t.morphTargets[a], l = 0, h = c.length; l < h; l++) {
                        var u = c[l],
                            p = new mi(3 * u.data.length, 3);
                        p.name = u.name, s.push(p.copyVector3sArray(u.data))
                    }
                    this.morphAttributes[a] = s
                }
                if (t.skinIndices.length > 0) {
                    var d = new mi(4 * t.skinIndices.length, 4);
                    this.addAttribute("skinIndex", d.copyVector4sArray(t.skinIndices))
                }
                if (t.skinWeights.length > 0) {
                    var f = new mi(4 * t.skinWeights.length, 4);
                    this.addAttribute("skinWeight", f.copyVector4sArray(t.skinWeights))
                }
                return null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()), this
            },
            computeBoundingBox: function() {
                null === this.boundingBox && (this.boundingBox = new An);
                var t = this.attributes.position,
                    e = this.morphAttributes.position;
                if (void 0 !== t) {
                    if (this.boundingBox.setFromBufferAttribute(t), e)
                        for (var n = 0, i = e.length; n < i; n++) {
                            var r = e[n];
                            Mi.setFromBufferAttribute(r), this.boundingBox.expandByPoint(Mi.min), this.boundingBox.expandByPoint(Mi.max)
                        }
                } else this.boundingBox.makeEmpty();
                (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
            },
            computeBoundingSphere: function() {
                null === this.boundingSphere && (this.boundingSphere = new Rn);
                var t = this.attributes.position,
                    e = this.morphAttributes.position;
                if (t) {
                    var n = this.boundingSphere.center;
                    if (Mi.setFromBufferAttribute(t), e)
                        for (var i = 0, r = e.length; i < r; i++) {
                            var o = e[i];
                            Ti.setFromBufferAttribute(o), Mi.expandByPoint(Ti.min), Mi.expandByPoint(Ti.max)
                        }
                    Mi.getCenter(n);
                    for (var a = 0, i = 0, r = t.count; i < r; i++) Ei.fromBufferAttribute(t, i), a = Math.max(a, n.distanceToSquared(Ei));
                    if (e)
                        for (var i = 0, r = e.length; i < r; i++)
                            for (var o = e[i], s = 0, c = o.count; s < c; s++) Ei.fromBufferAttribute(o, s), a = Math.max(a, n.distanceToSquared(Ei));
                    this.boundingSphere.radius = Math.sqrt(a), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
                }
            },
            computeFaceNormals: function() {},
            computeVertexNormals: function() {
                var t = this.index,
                    e = this.attributes;
                if (e.position) {
                    var n = e.position.array;
                    if (void 0 === e.normal) this.addAttribute("normal", new si(new Float32Array(n.length), 3));
                    else
                        for (var i = e.normal.array, r = 0, o = i.length; r < o; r++) i[r] = 0;
                    var a, s, c, l = e.normal.array,
                        h = new Ce,
                        u = new Ce,
                        p = new Ce,
                        d = new Ce,
                        f = new Ce;
                    if (t)
                        for (var m = t.array, r = 0, o = t.count; r < o; r += 3) a = 3 * m[r + 0], s = 3 * m[r + 1], c = 3 * m[r + 2], h.fromArray(n, a), u.fromArray(n, s), p.fromArray(n, c), d.subVectors(p, u), f.subVectors(h, u), d.cross(f), l[a] += d.x, l[a + 1] += d.y, l[a + 2] += d.z, l[s] += d.x, l[s + 1] += d.y, l[s + 2] += d.z, l[c] += d.x, l[c + 1] += d.y, l[c + 2] += d.z;
                    else
                        for (var r = 0, o = n.length; r < o; r += 9) h.fromArray(n, r), u.fromArray(n, r + 3), p.fromArray(n, r + 6), d.subVectors(p, u), f.subVectors(h, u), d.cross(f), l[r] = d.x, l[r + 1] = d.y, l[r + 2] = d.z, l[r + 3] = d.x, l[r + 4] = d.y, l[r + 5] = d.z, l[r + 6] = d.x, l[r + 7] = d.y, l[r + 8] = d.z;
                    this.normalizeNormals(), e.normal.needsUpdate = !0
                }
            },
            merge: function(t, e) {
                if (t && t.isBufferGeometry) {
                    void 0 === e && (e = 0, console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));
                    var n = this.attributes;
                    for (var i in n)
                        if (void 0 !== t.attributes[i])
                            for (var r = n[i], o = r.array, a = t.attributes[i], s = a.array, c = a.itemSize * e, l = Math.min(s.length, o.length - c), h = 0, u = c; h < l; h++, u++) o[u] = s[h];
                    return this
                }
                console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", t)
            },
            normalizeNormals: function() {
                for (var t = this.attributes.normal, e = 0, n = t.count; e < n; e++) Ei.x = t.getX(e), Ei.y = t.getY(e), Ei.z = t.getZ(e), Ei.normalize(), t.setXYZ(e, Ei.x, Ei.y, Ei.z)
            },
            toNonIndexed: function() {
                function t(t, e) {
                    for (var n = t.array, i = t.itemSize, r = new n.constructor(e.length * i), o = 0, a = 0, s = 0, c = e.length; s < c; s++) {
                        o = e[s] * i;
                        for (var l = 0; l < i; l++) r[a++] = n[o++]
                    }
                    return new si(r, i)
                }
                if (null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."), this;
                var e = new Si,
                    n = this.index.array,
                    i = this.attributes;
                for (var r in i) {
                    var o = i[r],
                        a = t(o, n);
                    e.addAttribute(r, a)
                }
                var s = this.morphAttributes;
                for (r in s) {
                    for (var c = [], l = s[r], h = 0, u = l.length; h < u; h++) {
                        var o = l[h],
                            a = t(o, n);
                        c.push(a)
                    }
                    e.morphAttributes[r] = c
                }
                for (var p = this.groups, h = 0, d = p.length; h < d; h++) {
                    var f = p[h];
                    e.addGroup(f.start, f.count, f.materialIndex)
                }
                return e
            },
            toJSON: function() {
                var t = {
                    metadata: {
                        version: 4.5,
                        type: "BufferGeometry",
                        generator: "BufferGeometry.toJSON"
                    }
                };
                if (t.uuid = this.uuid, t.type = this.type, "" !== this.name && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), void 0 !== this.parameters) {
                    var e = this.parameters;
                    for (var n in e) void 0 !== e[n] && (t[n] = e[n]);
                    return t
                }
                t.data = {
                    attributes: {}
                };
                var i = this.index;
                null !== i && (t.data.index = {
                    type: i.array.constructor.name,
                    array: Array.prototype.slice.call(i.array)
                });
                var r = this.attributes;
                for (var n in r) {
                    var o = r[n],
                        a = o.toJSON();
                    "" !== o.name && (a.name = o.name), t.data.attributes[n] = a
                }
                var s = {},
                    c = !1;
                for (var n in this.morphAttributes) {
                    for (var l = this.morphAttributes[n], h = [], u = 0, p = l.length; u < p; u++) {
                        var o = l[u],
                            a = o.toJSON();
                        "" !== o.name && (a.name = o.name), h.push(a)
                    }
                    h.length > 0 && (s[n] = h, c = !0)
                }
                c && (t.data.morphAttributes = s);
                var d = this.groups;
                d.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(d)));
                var f = this.boundingSphere;
                return null !== f && (t.data.boundingSphere = {
                    center: f.center.toArray(),
                    radius: f.radius
                }), t
            },
            clone: function() {
                return (new Si).copy(this)
            },
            copy: function(t) {
                var e, n, i;
                this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.name = t.name;
                var r = t.index;
                null !== r && this.setIndex(r.clone());
                var o = t.attributes;
                for (e in o) {
                    var a = o[e];
                    this.addAttribute(e, a.clone())
                }
                var s = t.morphAttributes;
                for (e in s) {
                    var c = [],
                        l = s[e];
                    for (n = 0, i = l.length; n < i; n++) c.push(l[n].clone());
                    this.morphAttributes[e] = c
                }
                var h = t.groups;
                for (n = 0, i = h.length; n < i; n++) {
                    var u = h[n];
                    this.addGroup(u.start, u.count, u.materialIndex)
                }
                var p = t.boundingBox;
                null !== p && (this.boundingBox = p.clone());
                var d = t.boundingSphere;
                return null !== d && (this.boundingSphere = d.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, this
            },
            dispose: function() {
                this.dispatchEvent({
                    type: "dispose"
                })
            }
        });
        var Ai = new Ye,
            Pi = new Fn,
            Li = new Rn,
            Ri = new Ce,
            Ci = new Ce,
            Oi = new Ce,
            Ii = new Ce,
            Di = new Ce,
            Ni = new Ce,
            Bi = new Ce,
            Hi = new Ce,
            Fi = new Ce,
            ki = new Ae,
            Ui = new Ae,
            zi = new Ae,
            Gi = new Ce,
            ji = new Ce;

        function Vi(t, e) {
            dn.call(this), this.type = "Mesh", this.geometry = void 0 !== t ? t : new Si, this.material = void 0 !== e ? e : new ai({
                color: 16777215 * Math.random()
            }), this.drawMode = ae, this.updateMorphTargets()
        }

        function Wi(t, e, n, i, r, o, a, s) {
            if (null === (e.side === c ? i.intersectTriangle(a, o, r, !0, s) : i.intersectTriangle(r, o, a, e.side !== l, s))) return null;
            ji.copy(s), ji.applyMatrix4(t.matrixWorld);
            var h = n.ray.origin.distanceTo(ji);
            return h < n.near || h > n.far ? null : {
                distance: h,
                point: ji.clone(),
                object: t
            }
        }

        function Xi(t, e, n, i, r, o, a, s, c, l, h) {
            Ri.fromBufferAttribute(r, c), Ci.fromBufferAttribute(r, l), Oi.fromBufferAttribute(r, h);
            var u = t.morphTargetInfluences;
            if (e.morphTargets && o && u) {
                Bi.set(0, 0, 0), Hi.set(0, 0, 0), Fi.set(0, 0, 0);
                for (var p = 0, d = o.length; p < d; p++) {
                    var f = u[p],
                        m = o[p];
                    0 !== f && (Ii.fromBufferAttribute(m, c), Di.fromBufferAttribute(m, l), Ni.fromBufferAttribute(m, h), Bi.addScaledVector(Ii.sub(Ri), f), Hi.addScaledVector(Di.sub(Ci), f), Fi.addScaledVector(Ni.sub(Oi), f))
                }
                Ri.add(Bi), Ci.add(Hi), Oi.add(Fi)
            }
            var v = Wi(t, e, n, i, Ri, Ci, Oi, Gi);
            if (v) {
                a && (ki.fromBufferAttribute(a, c), Ui.fromBufferAttribute(a, l), zi.fromBufferAttribute(a, h), v.uv = Zn.getUV(Gi, Ri, Ci, Oi, ki, Ui, zi, new Ae)), s && (ki.fromBufferAttribute(s, c), Ui.fromBufferAttribute(s, l), zi.fromBufferAttribute(s, h), v.uv2 = Zn.getUV(Gi, Ri, Ci, Oi, ki, Ui, zi, new Ae));
                var g = new ii(c, l, h);
                Zn.getNormal(Ri, Ci, Oi, g.normal), v.face = g
            }
            return v
        }
        Vi.prototype = Object.assign(Object.create(dn.prototype), {
            constructor: Vi,
            isMesh: !0,
            setDrawMode: function(t) {
                this.drawMode = t
            },
            copy: function(t) {
                return dn.prototype.copy.call(this, t), this.drawMode = t.drawMode, void 0 !== t.morphTargetInfluences && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), void 0 !== t.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this
            },
            updateMorphTargets: function() {
                var t, e, n, i = this.geometry;
                if (i.isBufferGeometry) {
                    var r = i.morphAttributes,
                        o = Object.keys(r);
                    if (o.length > 0) {
                        var a = r[o[0]];
                        if (void 0 !== a)
                            for (this.morphTargetInfluences = [], this.morphTargetDictionary = {}, t = 0, e = a.length; t < e; t++) n = a[t].name || String(t), this.morphTargetInfluences.push(0), this.morphTargetDictionary[n] = t
                    }
                } else {
                    var s = i.morphTargets;
                    void 0 !== s && s.length > 0 && console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
                }
            },
            raycast: function(t, e) {
                var n, i = this.geometry,
                    r = this.material,
                    o = this.matrixWorld;
                if (void 0 !== r && (null === i.boundingSphere && i.computeBoundingSphere(), Li.copy(i.boundingSphere), Li.applyMatrix4(o), !1 !== t.ray.intersectsSphere(Li) && (Ai.getInverse(o), Pi.copy(t.ray).applyMatrix4(Ai), null === i.boundingBox || !1 !== Pi.intersectsBox(i.boundingBox))))
                    if (i.isBufferGeometry) {
                        var a, s, c, l, h, u, p, d, f, m, v, g = i.index,
                            y = i.attributes.position,
                            _ = i.morphAttributes.position,
                            x = i.attributes.uv,
                            b = i.attributes.uv2,
                            w = i.groups,
                            M = i.drawRange;
                        if (null !== g)
                            if (Array.isArray(r))
                                for (l = 0, u = w.length; l < u; l++)
                                    for (d = w[l], f = r[d.materialIndex], m = Math.max(d.start, M.start), v = Math.min(d.start + d.count, M.start + M.count), h = m, p = v; h < p; h += 3) a = g.getX(h), s = g.getX(h + 1), c = g.getX(h + 2), (n = Xi(this, f, t, Pi, y, _, x, b, a, s, c)) && (n.faceIndex = Math.floor(h / 3), n.face.materialIndex = d.materialIndex, e.push(n));
                            else
                                for (m = Math.max(0, M.start), v = Math.min(g.count, M.start + M.count), l = m, u = v; l < u; l += 3) a = g.getX(l), s = g.getX(l + 1), c = g.getX(l + 2), (n = Xi(this, r, t, Pi, y, _, x, b, a, s, c)) && (n.faceIndex = Math.floor(l / 3), e.push(n));
                        else if (void 0 !== y)
                            if (Array.isArray(r))
                                for (l = 0, u = w.length; l < u; l++)
                                    for (d = w[l], f = r[d.materialIndex], m = Math.max(d.start, M.start), v = Math.min(d.start + d.count, M.start + M.count), h = m, p = v; h < p; h += 3)(n = Xi(this, f, t, Pi, y, _, x, b, a = h, s = h + 1, c = h + 2)) && (n.faceIndex = Math.floor(h / 3), n.face.materialIndex = d.materialIndex, e.push(n));
                            else
                                for (m = Math.max(0, M.start), v = Math.min(y.count, M.start + M.count), l = m, u = v; l < u; l += 3)(n = Xi(this, r, t, Pi, y, _, x, b, a = l, s = l + 1, c = l + 2)) && (n.faceIndex = Math.floor(l / 3), e.push(n))
                    } else if (i.isGeometry) {
                    var T, E, S, A, P = Array.isArray(r),
                        L = i.vertices,
                        R = i.faces,
                        C = i.faceVertexUvs[0];
                    C.length > 0 && (A = C);
                    for (var O = 0, I = R.length; O < I; O++) {
                        var D = R[O],
                            N = P ? r[D.materialIndex] : r;
                        if (void 0 !== N && (T = L[D.a], E = L[D.b], S = L[D.c], n = Wi(this, N, t, Pi, T, E, S, Gi))) {
                            if (A && A[O]) {
                                var B = A[O];
                                ki.copy(B[0]), Ui.copy(B[1]), zi.copy(B[2]), n.uv = Zn.getUV(Gi, T, E, S, ki, Ui, zi, new Ae)
                            }
                            n.face = D, n.faceIndex = O, e.push(n)
                        }
                    }
                }
            },
            clone: function() {
                return new this.constructor(this.geometry, this.material).copy(this)
            }
        });
        var qi = 0,
            Yi = new Ye,
            Zi = new dn,
            Ji = new Ce;

        function Ki() {
            Object.defineProperty(this, "id", {
                value: qi += 2
            }), this.uuid = Se.generateUUID(), this.name = "", this.type = "Geometry", this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [
                []
            ], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.elementsNeedUpdate = !1, this.verticesNeedUpdate = !1, this.uvsNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.lineDistancesNeedUpdate = !1, this.groupsNeedUpdate = !1
        }
        Ki.prototype = Object.assign(Object.create(Me.prototype), {
            constructor: Ki,
            isGeometry: !0,
            applyMatrix: function(t) {
                for (var e = (new De).getNormalMatrix(t), n = 0, i = this.vertices.length; n < i; n++) {
                    var r = this.vertices[n];
                    r.applyMatrix4(t)
                }
                for (var n = 0, i = this.faces.length; n < i; n++) {
                    var o = this.faces[n];
                    o.normal.applyMatrix3(e).normalize();
                    for (var a = 0, s = o.vertexNormals.length; a < s; a++) o.vertexNormals[a].applyMatrix3(e).normalize()
                }
                return null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this.verticesNeedUpdate = !0, this.normalsNeedUpdate = !0, this
            },
            rotateX: function(t) {
                return Yi.makeRotationX(t), this.applyMatrix(Yi), this
            },
            rotateY: function(t) {
                return Yi.makeRotationY(t), this.applyMatrix(Yi), this
            },
            rotateZ: function(t) {
                return Yi.makeRotationZ(t), this.applyMatrix(Yi), this
            },
            translate: function(t, e, n) {
                return Yi.makeTranslation(t, e, n), this.applyMatrix(Yi), this
            },
            scale: function(t, e, n) {
                return Yi.makeScale(t, e, n), this.applyMatrix(Yi), this
            },
            lookAt: function(t) {
                return Zi.lookAt(t), Zi.updateMatrix(), this.applyMatrix(Zi.matrix), this
            },
            fromBufferGeometry: function(t) {
                var e = this,
                    n = null !== t.index ? t.index.array : void 0,
                    i = t.attributes;
                if (void 0 === i.position) return console.error("THREE.Geometry.fromBufferGeometry(): Position attribute required for conversion."), this;
                var r = i.position.array,
                    o = void 0 !== i.normal ? i.normal.array : void 0,
                    a = void 0 !== i.color ? i.color.array : void 0,
                    s = void 0 !== i.uv ? i.uv.array : void 0,
                    c = void 0 !== i.uv2 ? i.uv2.array : void 0;
                void 0 !== c && (this.faceVertexUvs[1] = []);
                for (var l = 0; l < r.length; l += 3) e.vertices.push((new Ce).fromArray(r, l)), void 0 !== a && e.colors.push((new $n).fromArray(a, l));

                function h(t, n, i, r) {
                    var l = void 0 === a ? [] : [e.colors[t].clone(), e.colors[n].clone(), e.colors[i].clone()],
                        h = void 0 === o ? [] : [(new Ce).fromArray(o, 3 * t), (new Ce).fromArray(o, 3 * n), (new Ce).fromArray(o, 3 * i)],
                        u = new ii(t, n, i, h, l, r);
                    e.faces.push(u), void 0 !== s && e.faceVertexUvs[0].push([(new Ae).fromArray(s, 2 * t), (new Ae).fromArray(s, 2 * n), (new Ae).fromArray(s, 2 * i)]), void 0 !== c && e.faceVertexUvs[1].push([(new Ae).fromArray(c, 2 * t), (new Ae).fromArray(c, 2 * n), (new Ae).fromArray(c, 2 * i)])
                }
                var u = t.groups;
                if (u.length > 0)
                    for (var l = 0; l < u.length; l++)
                        for (var p = u[l], d = p.start, f = p.count, m = d, v = d + f; m < v; m += 3) void 0 !== n ? h(n[m], n[m + 1], n[m + 2], p.materialIndex) : h(m, m + 1, m + 2, p.materialIndex);
                else if (void 0 !== n)
                    for (var l = 0; l < n.length; l += 3) h(n[l], n[l + 1], n[l + 2]);
                else
                    for (var l = 0; l < r.length / 3; l += 3) h(l, l + 1, l + 2);
                return this.computeFaceNormals(), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()), null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), this
            },
            center: function() {
                return this.computeBoundingBox(), this.boundingBox.getCenter(Ji).negate(), this.translate(Ji.x, Ji.y, Ji.z), this
            },
            normalize: function() {
                this.computeBoundingSphere();
                var t = this.boundingSphere.center,
                    e = this.boundingSphere.radius,
                    n = 0 === e ? 1 : 1 / e,
                    i = new Ye;
                return i.set(n, 0, 0, -n * t.x, 0, n, 0, -n * t.y, 0, 0, n, -n * t.z, 0, 0, 0, 1), this.applyMatrix(i), this
            },
            computeFaceNormals: function() {
                for (var t = new Ce, e = new Ce, n = 0, i = this.faces.length; n < i; n++) {
                    var r = this.faces[n],
                        o = this.vertices[r.a],
                        a = this.vertices[r.b],
                        s = this.vertices[r.c];
                    t.subVectors(s, a), e.subVectors(o, a), t.cross(e), t.normalize(), r.normal.copy(t)
                }
            },
            computeVertexNormals: function(t) {
                var e, n, i, r, o, a;
                for (void 0 === t && (t = !0), a = new Array(this.vertices.length), e = 0, n = this.vertices.length; e < n; e++) a[e] = new Ce;
                if (t) {
                    var s, c, l, h = new Ce,
                        u = new Ce;
                    for (i = 0, r = this.faces.length; i < r; i++) o = this.faces[i], s = this.vertices[o.a], c = this.vertices[o.b], l = this.vertices[o.c], h.subVectors(l, c), u.subVectors(s, c), h.cross(u), a[o.a].add(h), a[o.b].add(h), a[o.c].add(h)
                } else
                    for (this.computeFaceNormals(), i = 0, r = this.faces.length; i < r; i++) o = this.faces[i], a[o.a].add(o.normal), a[o.b].add(o.normal), a[o.c].add(o.normal);
                for (e = 0, n = this.vertices.length; e < n; e++) a[e].normalize();
                for (i = 0, r = this.faces.length; i < r; i++) {
                    var p = (o = this.faces[i]).vertexNormals;
                    3 === p.length ? (p[0].copy(a[o.a]), p[1].copy(a[o.b]), p[2].copy(a[o.c])) : (p[0] = a[o.a].clone(), p[1] = a[o.b].clone(), p[2] = a[o.c].clone())
                }
                this.faces.length > 0 && (this.normalsNeedUpdate = !0)
            },
            computeFlatVertexNormals: function() {
                var t, e, n;
                for (this.computeFaceNormals(), t = 0, e = this.faces.length; t < e; t++) {
                    var i = (n = this.faces[t]).vertexNormals;
                    3 === i.length ? (i[0].copy(n.normal), i[1].copy(n.normal), i[2].copy(n.normal)) : (i[0] = n.normal.clone(), i[1] = n.normal.clone(), i[2] = n.normal.clone())
                }
                this.faces.length > 0 && (this.normalsNeedUpdate = !0)
            },
            computeMorphNormals: function() {
                var t, e, n, i, r;
                for (n = 0, i = this.faces.length; n < i; n++)
                    for ((r = this.faces[n]).__originalFaceNormal ? r.__originalFaceNormal.copy(r.normal) : r.__originalFaceNormal = r.normal.clone(), r.__originalVertexNormals || (r.__originalVertexNormals = []), t = 0, e = r.vertexNormals.length; t < e; t++) r.__originalVertexNormals[t] ? r.__originalVertexNormals[t].copy(r.vertexNormals[t]) : r.__originalVertexNormals[t] = r.vertexNormals[t].clone();
                var o = new Ki;
                for (o.faces = this.faces, t = 0, e = this.morphTargets.length; t < e; t++) {
                    if (!this.morphNormals[t]) {
                        this.morphNormals[t] = {}, this.morphNormals[t].faceNormals = [], this.morphNormals[t].vertexNormals = [];
                        var a = this.morphNormals[t].faceNormals,
                            s = this.morphNormals[t].vertexNormals;
                        for (n = 0, i = this.faces.length; n < i; n++) c = new Ce, l = {
                            a: new Ce,
                            b: new Ce,
                            c: new Ce
                        }, a.push(c), s.push(l)
                    }
                    var c, l, h = this.morphNormals[t];
                    for (o.vertices = this.morphTargets[t].vertices, o.computeFaceNormals(), o.computeVertexNormals(), n = 0, i = this.faces.length; n < i; n++) r = this.faces[n], c = h.faceNormals[n], l = h.vertexNormals[n], c.copy(r.normal), l.a.copy(r.vertexNormals[0]), l.b.copy(r.vertexNormals[1]), l.c.copy(r.vertexNormals[2])
                }
                for (n = 0, i = this.faces.length; n < i; n++)(r = this.faces[n]).normal = r.__originalFaceNormal, r.vertexNormals = r.__originalVertexNormals
            },
            computeBoundingBox: function() {
                null === this.boundingBox && (this.boundingBox = new An), this.boundingBox.setFromPoints(this.vertices)
            },
            computeBoundingSphere: function() {
                null === this.boundingSphere && (this.boundingSphere = new Rn), this.boundingSphere.setFromPoints(this.vertices)
            },
            merge: function(t, e, n) {
                if (t && t.isGeometry) {
                    var i, r = this.vertices.length,
                        o = this.vertices,
                        a = t.vertices,
                        s = this.faces,
                        c = t.faces,
                        l = this.colors,
                        h = t.colors;
                    void 0 === n && (n = 0), void 0 !== e && (i = (new De).getNormalMatrix(e));
                    for (var u = 0, p = a.length; u < p; u++) {
                        var d = a[u],
                            f = d.clone();
                        void 0 !== e && f.applyMatrix4(e), o.push(f)
                    }
                    for (var u = 0, p = h.length; u < p; u++) l.push(h[u].clone());
                    for (u = 0, p = c.length; u < p; u++) {
                        var m, v, g, y = c[u],
                            _ = y.vertexNormals,
                            x = y.vertexColors;
                        (m = new ii(y.a + r, y.b + r, y.c + r)).normal.copy(y.normal), void 0 !== i && m.normal.applyMatrix3(i).normalize();
                        for (var b = 0, w = _.length; b < w; b++) v = _[b].clone(), void 0 !== i && v.applyMatrix3(i).normalize(), m.vertexNormals.push(v);
                        m.color.copy(y.color);
                        for (var b = 0, w = x.length; b < w; b++) g = x[b], m.vertexColors.push(g.clone());
                        m.materialIndex = y.materialIndex + n, s.push(m)
                    }
                    for (var u = 0, p = t.faceVertexUvs.length; u < p; u++) {
                        var M = t.faceVertexUvs[u];
                        void 0 === this.faceVertexUvs[u] && (this.faceVertexUvs[u] = []);
                        for (var b = 0, w = M.length; b < w; b++) {
                            for (var T = M[b], E = [], S = 0, A = T.length; S < A; S++) E.push(T[S].clone());
                            this.faceVertexUvs[u].push(E)
                        }
                    }
                } else console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", t)
            },
            mergeMesh: function(t) {
                t && t.isMesh ? (t.matrixAutoUpdate && t.updateMatrix(), this.merge(t.geometry, t.matrix)) : console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", t)
            },
            mergeVertices: function() {
                var t, e, n, i, r, o, a, s, c = {},
                    l = [],
                    h = [],
                    u = Math.pow(10, 4);
                for (n = 0, i = this.vertices.length; n < i; n++) t = this.vertices[n], e = Math.round(t.x * u) + "_" + Math.round(t.y * u) + "_" + Math.round(t.z * u), void 0 === c[e] ? (c[e] = n, l.push(this.vertices[n]), h[n] = l.length - 1) : h[n] = h[c[e]];
                var p = [];
                for (n = 0, i = this.faces.length; n < i; n++) {
                    (r = this.faces[n]).a = h[r.a], r.b = h[r.b], r.c = h[r.c], o = [r.a, r.b, r.c];
                    for (var d = 0; d < 3; d++)
                        if (o[d] === o[(d + 1) % 3]) {
                            p.push(n);
                            break
                        }
                }
                for (n = p.length - 1; n >= 0; n--) {
                    var f = p[n];
                    for (this.faces.splice(f, 1), a = 0, s = this.faceVertexUvs.length; a < s; a++) this.faceVertexUvs[a].splice(f, 1)
                }
                var m = this.vertices.length - l.length;
                return this.vertices = l, m
            },
            setFromPoints: function(t) {
                this.vertices = [];
                for (var e = 0, n = t.length; e < n; e++) {
                    var i = t[e];
                    this.vertices.push(new Ce(i.x, i.y, i.z || 0))
                }
                return this
            },
            sortFacesByMaterialIndex: function() {
                for (var t = this.faces, e = t.length, n = 0; n < e; n++) t[n]._id = n;
                t.sort(function(t, e) {
                    return t.materialIndex - e.materialIndex
                });
                var i, r, o = this.faceVertexUvs[0],
                    a = this.faceVertexUvs[1];
                o && o.length === e && (i = []), a && a.length === e && (r = []);
                for (var n = 0; n < e; n++) {
                    var s = t[n]._id;
                    i && i.push(o[s]), r && r.push(a[s])
                }
                i && (this.faceVertexUvs[0] = i), r && (this.faceVertexUvs[1] = r)
            },
            toJSON: function() {
                var t = {
                    metadata: {
                        version: 4.5,
                        type: "Geometry",
                        generator: "Geometry.toJSON"
                    }
                };
                if (t.uuid = this.uuid, t.type = this.type, "" !== this.name && (t.name = this.name), void 0 !== this.parameters) {
                    var e = this.parameters;
                    for (var n in e) void 0 !== e[n] && (t[n] = e[n]);
                    return t
                }
                for (var i = [], r = 0; r < this.vertices.length; r++) {
                    var o = this.vertices[r];
                    i.push(o.x, o.y, o.z)
                }
                for (var a = [], s = [], c = {}, l = [], h = {}, u = [], p = {}, r = 0; r < this.faces.length; r++) {
                    var d = this.faces[r],
                        f = void 0 !== this.faceVertexUvs[0][r],
                        m = d.normal.length() > 0,
                        v = d.vertexNormals.length > 0,
                        g = 1 !== d.color.r || 1 !== d.color.g || 1 !== d.color.b,
                        y = d.vertexColors.length > 0,
                        _ = 0;
                    if (_ = M(_ = M(_ = M(_ = M(_ = M(_ = M(_ = M(_ = M(_, 0, 0), 1, !0), 2, !1), 3, f), 4, m), 5, v), 6, g), 7, y), a.push(_), a.push(d.a, d.b, d.c), a.push(d.materialIndex), f) {
                        var x = this.faceVertexUvs[0][r];
                        a.push(S(x[0]), S(x[1]), S(x[2]))
                    }
                    if (m && a.push(T(d.normal)), v) {
                        var b = d.vertexNormals;
                        a.push(T(b[0]), T(b[1]), T(b[2]))
                    }
                    if (g && a.push(E(d.color)), y) {
                        var w = d.vertexColors;
                        a.push(E(w[0]), E(w[1]), E(w[2]))
                    }
                }

                function M(t, e, n) {
                    return n ? t | 1 << e : t & ~(1 << e)
                }

                function T(t) {
                    var e = t.x.toString() + t.y.toString() + t.z.toString();
                    return void 0 !== c[e] ? c[e] : (c[e] = s.length / 3, s.push(t.x, t.y, t.z), c[e])
                }

                function E(t) {
                    var e = t.r.toString() + t.g.toString() + t.b.toString();
                    return void 0 !== h[e] ? h[e] : (h[e] = l.length, l.push(t.getHex()), h[e])
                }

                function S(t) {
                    var e = t.x.toString() + t.y.toString();
                    return void 0 !== p[e] ? p[e] : (p[e] = u.length / 2, u.push(t.x, t.y), p[e])
                }
                return t.data = {}, t.data.vertices = i, t.data.normals = s, l.length > 0 && (t.data.colors = l), u.length > 0 && (t.data.uvs = [u]), t.data.faces = a, t
            },
            clone: function() {
                return (new Ki).copy(this)
            },
            copy: function(t) {
                var e, n, i, r, o, a;
                this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [
                    []
                ], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.name = t.name;
                var s = t.vertices;
                for (e = 0, n = s.length; e < n; e++) this.vertices.push(s[e].clone());
                var c = t.colors;
                for (e = 0, n = c.length; e < n; e++) this.colors.push(c[e].clone());
                var l = t.faces;
                for (e = 0, n = l.length; e < n; e++) this.faces.push(l[e].clone());
                for (e = 0, n = t.faceVertexUvs.length; e < n; e++) {
                    var h = t.faceVertexUvs[e];
                    for (void 0 === this.faceVertexUvs[e] && (this.faceVertexUvs[e] = []), i = 0, r = h.length; i < r; i++) {
                        var u = h[i],
                            p = [];
                        for (o = 0, a = u.length; o < a; o++) {
                            var d = u[o];
                            p.push(d.clone())
                        }
                        this.faceVertexUvs[e].push(p)
                    }
                }
                var f = t.morphTargets;
                for (e = 0, n = f.length; e < n; e++) {
                    var m = {};
                    if (m.name = f[e].name, void 0 !== f[e].vertices)
                        for (m.vertices = [], i = 0, r = f[e].vertices.length; i < r; i++) m.vertices.push(f[e].vertices[i].clone());
                    if (void 0 !== f[e].normals)
                        for (m.normals = [], i = 0, r = f[e].normals.length; i < r; i++) m.normals.push(f[e].normals[i].clone());
                    this.morphTargets.push(m)
                }
                var v = t.morphNormals;
                for (e = 0, n = v.length; e < n; e++) {
                    var g = {};
                    if (void 0 !== v[e].vertexNormals)
                        for (g.vertexNormals = [], i = 0, r = v[e].vertexNormals.length; i < r; i++) {
                            var y = v[e].vertexNormals[i],
                                _ = {};
                            _.a = y.a.clone(), _.b = y.b.clone(), _.c = y.c.clone(), g.vertexNormals.push(_)
                        }
                    if (void 0 !== v[e].faceNormals)
                        for (g.faceNormals = [], i = 0, r = v[e].faceNormals.length; i < r; i++) g.faceNormals.push(v[e].faceNormals[i].clone());
                    this.morphNormals.push(g)
                }
                var x = t.skinWeights;
                for (e = 0, n = x.length; e < n; e++) this.skinWeights.push(x[e].clone());
                var b = t.skinIndices;
                for (e = 0, n = b.length; e < n; e++) this.skinIndices.push(b[e].clone());
                var w = t.lineDistances;
                for (e = 0, n = w.length; e < n; e++) this.lineDistances.push(w[e]);
                var M = t.boundingBox;
                null !== M && (this.boundingBox = M.clone());
                var T = t.boundingSphere;
                return null !== T && (this.boundingSphere = T.clone()), this.elementsNeedUpdate = t.elementsNeedUpdate, this.verticesNeedUpdate = t.verticesNeedUpdate, this.uvsNeedUpdate = t.uvsNeedUpdate, this.normalsNeedUpdate = t.normalsNeedUpdate, this.colorsNeedUpdate = t.colorsNeedUpdate, this.lineDistancesNeedUpdate = t.lineDistancesNeedUpdate, this.groupsNeedUpdate = t.groupsNeedUpdate, this
            },
            dispose: function() {
                this.dispatchEvent({
                    type: "dispose"
                })
            }
        });
        var Qi = function(t) {
                function e(e, n, i, r, o, a) {
                    t.call(this), this.type = "BoxGeometry", this.parameters = {
                        width: e,
                        height: n,
                        depth: i,
                        widthSegments: r,
                        heightSegments: o,
                        depthSegments: a
                    }, this.fromBufferGeometry(new $i(e, n, i, r, o, a)), this.mergeVertices()
                }
                return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
            }(Ki),
            $i = function(t) {
                function e(e, n, i, r, o, a) {
                    t.call(this), this.type = "BoxBufferGeometry", this.parameters = {
                        width: e,
                        height: n,
                        depth: i,
                        widthSegments: r,
                        heightSegments: o,
                        depthSegments: a
                    };
                    var s = this;
                    e = e || 1, n = n || 1, i = i || 1, r = Math.floor(r) || 1, o = Math.floor(o) || 1, a = Math.floor(a) || 1;
                    var c = [],
                        l = [],
                        h = [],
                        u = [],
                        p = 0,
                        d = 0;

                    function f(t, e, n, i, r, o, a, f, m, v, g) {
                        var y, _, x = o / m,
                            b = a / v,
                            w = o / 2,
                            M = a / 2,
                            T = f / 2,
                            E = m + 1,
                            S = v + 1,
                            A = 0,
                            P = 0,
                            L = new Ce;
                        for (_ = 0; _ < S; _++) {
                            var R = _ * b - M;
                            for (y = 0; y < E; y++) {
                                var C = y * x - w;
                                L[t] = C * i, L[e] = R * r, L[n] = T, l.push(L.x, L.y, L.z), L[t] = 0, L[e] = 0, L[n] = f > 0 ? 1 : -1, h.push(L.x, L.y, L.z), u.push(y / m), u.push(1 - _ / v), A += 1
                            }
                        }
                        for (_ = 0; _ < v; _++)
                            for (y = 0; y < m; y++) {
                                var O = p + y + E * _,
                                    I = p + y + E * (_ + 1),
                                    D = p + (y + 1) + E * (_ + 1),
                                    N = p + (y + 1) + E * _;
                                c.push(O, I, N), c.push(I, D, N), P += 6
                            }
                        s.addGroup(d, P, g), d += P, p += A
                    }
                    f("z", "y", "x", -1, -1, i, n, e, a, o, 0), f("z", "y", "x", 1, -1, i, n, -e, a, o, 1), f("x", "z", "y", 1, 1, e, i, n, r, a, 2), f("x", "z", "y", 1, -1, e, i, -n, r, a, 3), f("x", "y", "z", 1, -1, e, n, i, r, o, 4), f("x", "y", "z", -1, -1, e, n, -i, r, o, 5), this.setIndex(c), this.addAttribute("position", new mi(l, 3)), this.addAttribute("normal", new mi(h, 3)), this.addAttribute("uv", new mi(u, 2))
                }
                return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
            }(Si);

        function tr(t) {
            var e = {};
            for (var n in t)
                for (var i in e[n] = {}, t[n]) {
                    var r = t[n][i];
                    r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture) ? e[n][i] = r.clone() : Array.isArray(r) ? e[n][i] = r.slice() : e[n][i] = r
                }
            return e
        }

        function er(t) {
            for (var e = {}, n = 0; n < t.length; n++) {
                var i = tr(t[n]);
                for (var r in i) e[r] = i[r]
            }
            return e
        }
        var nr = {
                clone: tr,
                merge: er
            },
            ir = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
            rr = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";

        function or(t) {
            oi.call(this), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = ir, this.fragmentShader = rr, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.extensions = {
                derivatives: !1,
                fragDepth: !1,
                drawBuffers: !1,
                shaderTextureLOD: !1
            }, this.defaultAttributeValues = {
                color: [1, 1, 1],
                uv: [0, 0],
                uv2: [0, 0]
            }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, void 0 !== t && (void 0 !== t.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(t))
        }

        function ar() {
            dn.call(this), this.type = "Camera", this.matrixWorldInverse = new Ye, this.projectionMatrix = new Ye, this.projectionMatrixInverse = new Ye
        }

        function sr(t, e, n, i) {
            ar.call(this), this.type = "PerspectiveCamera", this.fov = void 0 !== t ? t : 50, this.zoom = 1, this.near = void 0 !== n ? n : .1, this.far = void 0 !== i ? i : 2e3, this.focus = 10, this.aspect = void 0 !== e ? e : 1, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix()
        }
        or.prototype = Object.create(oi.prototype), or.prototype.constructor = or, or.prototype.isShaderMaterial = !0, or.prototype.copy = function(t) {
            return oi.prototype.copy.call(this, t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = tr(t.uniforms), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.lights = t.lights, this.clipping = t.clipping, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this.extensions = t.extensions, this
        }, or.prototype.toJSON = function(t) {
            var e = oi.prototype.toJSON.call(this, t);
            for (var n in e.uniforms = {}, this.uniforms) {
                var i = this.uniforms[n],
                    r = i.value;
                r && r.isTexture ? e.uniforms[n] = {
                    type: "t",
                    value: r.toJSON(t).uuid
                } : r && r.isColor ? e.uniforms[n] = {
                    type: "c",
                    value: r.getHex()
                } : r && r.isVector2 ? e.uniforms[n] = {
                    type: "v2",
                    value: r.toArray()
                } : r && r.isVector3 ? e.uniforms[n] = {
                    type: "v3",
                    value: r.toArray()
                } : r && r.isVector4 ? e.uniforms[n] = {
                    type: "v4",
                    value: r.toArray()
                } : r && r.isMatrix3 ? e.uniforms[n] = {
                    type: "m3",
                    value: r.toArray()
                } : r && r.isMatrix4 ? e.uniforms[n] = {
                    type: "m4",
                    value: r.toArray()
                } : e.uniforms[n] = {
                    value: r
                }
            }
            Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader;
            var o = {};
            for (var a in this.extensions) !0 === this.extensions[a] && (o[a] = !0);
            return Object.keys(o).length > 0 && (e.extensions = o), e
        }, ar.prototype = Object.assign(Object.create(dn.prototype), {
            constructor: ar,
            isCamera: !0,
            copy: function(t, e) {
                return dn.prototype.copy.call(this, t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this.projectionMatrixInverse.copy(t.projectionMatrixInverse), this
            },
            getWorldDirection: function(t) {
                void 0 === t && (console.warn("THREE.Camera: .getWorldDirection() target is now required"), t = new Ce), this.updateMatrixWorld(!0);
                var e = this.matrixWorld.elements;
                return t.set(-e[8], -e[9], -e[10]).normalize()
            },
            updateMatrixWorld: function(t) {
                dn.prototype.updateMatrixWorld.call(this, t), this.matrixWorldInverse.getInverse(this.matrixWorld)
            },
            clone: function() {
                return (new this.constructor).copy(this)
            }
        }), sr.prototype = Object.assign(Object.create(ar.prototype), {
            constructor: sr,
            isPerspectiveCamera: !0,
            copy: function(t, e) {
                return ar.prototype.copy.call(this, t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = null === t.view ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this
            },
            setFocalLength: function(t) {
                var e = .5 * this.getFilmHeight() / t;
                this.fov = 2 * Se.RAD2DEG * Math.atan(e), this.updateProjectionMatrix()
            },
            getFocalLength: function() {
                var t = Math.tan(.5 * Se.DEG2RAD * this.fov);
                return .5 * this.getFilmHeight() / t
            },
            getEffectiveFOV: function() {
                return 2 * Se.RAD2DEG * Math.atan(Math.tan(.5 * Se.DEG2RAD * this.fov) / this.zoom)
            },
            getFilmWidth: function() {
                return this.filmGauge * Math.min(this.aspect, 1)
            },
            getFilmHeight: function() {
                return this.filmGauge / Math.max(this.aspect, 1)
            },
            setViewOffset: function(t, e, n, i, r, o) {
                this.aspect = t / e, null === this.view && (this.view = {
                    enabled: !0,
                    fullWidth: 1,
                    fullHeight: 1,
                    offsetX: 0,
                    offsetY: 0,
                    width: 1,
                    height: 1
                }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = o, this.updateProjectionMatrix()
            },
            clearViewOffset: function() {
                null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
            },
            updateProjectionMatrix: function() {
                var t = this.near,
                    e = t * Math.tan(.5 * Se.DEG2RAD * this.fov) / this.zoom,
                    n = 2 * e,
                    i = this.aspect * n,
                    r = -.5 * i,
                    o = this.view;
                if (null !== this.view && this.view.enabled) {
                    var a = o.fullWidth,
                        s = o.fullHeight;
                    r += o.offsetX * i / a, e -= o.offsetY * n / s, i *= o.width / a, n *= o.height / s
                }
                var c = this.filmOffset;
                0 !== c && (r += t * c / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, e, e - n, t, this.far), this.projectionMatrixInverse.getInverse(this.projectionMatrix)
            },
            toJSON: function(t) {
                var e = dn.prototype.toJSON.call(this, t);
                return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, null !== this.view && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e
            }
        });
        var cr = 90,
            lr = 1;

        function hr(t, e, n, i) {
            dn.call(this), this.type = "CubeCamera";
            var r = new sr(cr, lr, t, e);
            r.up.set(0, -1, 0), r.lookAt(new Ce(1, 0, 0)), this.add(r);
            var o = new sr(cr, lr, t, e);
            o.up.set(0, -1, 0), o.lookAt(new Ce(-1, 0, 0)), this.add(o);
            var a = new sr(cr, lr, t, e);
            a.up.set(0, 0, 1), a.lookAt(new Ce(0, 1, 0)), this.add(a);
            var s = new sr(cr, lr, t, e);
            s.up.set(0, 0, -1), s.lookAt(new Ce(0, -1, 0)), this.add(s);
            var c = new sr(cr, lr, t, e);
            c.up.set(0, -1, 0), c.lookAt(new Ce(0, 0, 1)), this.add(c);
            var l = new sr(cr, lr, t, e);
            l.up.set(0, -1, 0), l.lookAt(new Ce(0, 0, -1)), this.add(l), i = i || {
                format: At,
                magFilter: ut,
                minFilter: ut
            }, this.renderTarget = new ur(n, n, i), this.renderTarget.texture.name = "CubeCamera", this.update = function(t, e) {
                null === this.parent && this.updateMatrixWorld();
                var n = t.getRenderTarget(),
                    i = this.renderTarget,
                    h = i.texture.generateMipmaps;
                i.texture.generateMipmaps = !1, t.setRenderTarget(i, 0), t.render(e, r), t.setRenderTarget(i, 1), t.render(e, o), t.setRenderTarget(i, 2), t.render(e, a), t.setRenderTarget(i, 3), t.render(e, s), t.setRenderTarget(i, 4), t.render(e, c), i.texture.generateMipmaps = h, t.setRenderTarget(i, 5), t.render(e, l), t.setRenderTarget(n)
            }, this.clear = function(t, e, n, i) {
                for (var r = t.getRenderTarget(), o = this.renderTarget, a = 0; a < 6; a++) t.setRenderTarget(o, a), t.clear(e, n, i);
                t.setRenderTarget(r)
            }
        }

        function ur(t, e, n) {
            ke.call(this, t, e, n)
        }

        function pr(t, e, n, i, r, o, a, s, c, l, h, u) {
            He.call(this, null, o, a, s, c, l, i, r, h, u), this.image = {
                data: t || null,
                width: e || 1,
                height: n || 1
            }, this.magFilter = void 0 !== c ? c : ct, this.minFilter = void 0 !== l ? l : ct, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.needsUpdate = !0
        }
        hr.prototype = Object.create(dn.prototype), hr.prototype.constructor = hr, ur.prototype = Object.create(ke.prototype), ur.prototype.constructor = ur, ur.prototype.isWebGLRenderTargetCube = !0, ur.prototype.fromEquirectangularTexture = function(t, e) {
            this.texture.type = e.type, this.texture.format = e.format, this.texture.encoding = e.encoding;
            var n = new fn,
                i = {
                    uniforms: {
                        tEquirect: {
                            value: null
                        }
                    },
                    vertexShader: ["varying vec3 vWorldDirection;", "vec3 transformDirection( in vec3 dir, in mat4 matrix ) {", "\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );", "}", "void main() {", "\tvWorldDirection = transformDirection( position, modelMatrix );", "\t#include <begin_vertex>", "\t#include <project_vertex>", "}"].join("\n"),
                    fragmentShader: ["uniform sampler2D tEquirect;", "varying vec3 vWorldDirection;", "#define RECIPROCAL_PI 0.31830988618", "#define RECIPROCAL_PI2 0.15915494", "void main() {", "\tvec3 direction = normalize( vWorldDirection );", "\tvec2 sampleUV;", "\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;", "\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;", "\tgl_FragColor = texture2D( tEquirect, sampleUV );", "}"].join("\n")
                },
                r = new or({
                    type: "CubemapFromEquirect",
                    uniforms: tr(i.uniforms),
                    vertexShader: i.vertexShader,
                    fragmentShader: i.fragmentShader,
                    side: c,
                    blending: d
                });
            r.uniforms.tEquirect.value = e;
            var o = new Vi(new $i(5, 5, 5), r);
            n.add(o);
            var a = new hr(1, 10, 1);
            return a.renderTarget = this, a.renderTarget.texture.name = "CubeCameraTexture", a.update(t, n), o.geometry.dispose(), o.material.dispose(), this
        }, pr.prototype = Object.create(He.prototype), pr.prototype.constructor = pr, pr.prototype.isDataTexture = !0;
        var dr = new Ce,
            fr = new Ce,
            mr = new De;

        function vr(t, e) {
            this.normal = void 0 !== t ? t : new Ce(1, 0, 0), this.constant = void 0 !== e ? e : 0
        }
        Object.assign(vr.prototype, {
            isPlane: !0,
            set: function(t, e) {
                return this.normal.copy(t), this.constant = e, this
            },
            setComponents: function(t, e, n, i) {
                return this.normal.set(t, e, n), this.constant = i, this
            },
            setFromNormalAndCoplanarPoint: function(t, e) {
                return this.normal.copy(t), this.constant = -e.dot(this.normal), this
            },
            setFromCoplanarPoints: function(t, e, n) {
                var i = dr.subVectors(n, e).cross(fr.subVectors(t, e)).normalize();
                return this.setFromNormalAndCoplanarPoint(i, t), this
            },
            clone: function() {
                return (new this.constructor).copy(this)
            },
            copy: function(t) {
                return this.normal.copy(t.normal), this.constant = t.constant, this
            },
            normalize: function() {
                var t = 1 / this.normal.length();
                return this.normal.multiplyScalar(t), this.constant *= t, this
            },
            negate: function() {
                return this.constant *= -1, this.normal.negate(), this
            },
            distanceToPoint: function(t) {
                return this.normal.dot(t) + this.constant
            },
            distanceToSphere: function(t) {
                return this.distanceToPoint(t.center) - t.radius
            },
            projectPoint: function(t, e) {
                return void 0 === e && (console.warn("THREE.Plane: .projectPoint() target is now required"), e = new Ce), e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)
            },
            intersectLine: function(t, e) {
                void 0 === e && (console.warn("THREE.Plane: .intersectLine() target is now required"), e = new Ce);
                var n = t.delta(dr),
                    i = this.normal.dot(n);
                if (0 === i) return 0 === this.distanceToPoint(t.start) ? e.copy(t.start) : void 0;
                var r = -(t.start.dot(this.normal) + this.constant) / i;
                return r < 0 || r > 1 ? void 0 : e.copy(n).multiplyScalar(r).add(t.start)
            },
            intersectsLine: function(t) {
                var e = this.distanceToPoint(t.start),
                    n = this.distanceToPoint(t.end);
                return e < 0 && n > 0 || n < 0 && e > 0
            },
            intersectsBox: function(t) {
                return t.intersectsPlane(this)
            },
            intersectsSphere: function(t) {
                return t.intersectsPlane(this)
            },
            coplanarPoint: function(t) {
                return void 0 === t && (console.warn("THREE.Plane: .coplanarPoint() target is now required"), t = new Ce), t.copy(this.normal).multiplyScalar(-this.constant)
            },
            applyMatrix4: function(t, e) {
                var n = e || mr.getNormalMatrix(t),
                    i = this.coplanarPoint(dr).applyMatrix4(t),
                    r = this.normal.applyMatrix3(n).normalize();
                return this.constant = -i.dot(r), this
            },
            translate: function(t) {
                return this.constant -= t.dot(this.normal), this
            },
            equals: function(t) {
                return t.normal.equals(this.normal) && t.constant === this.constant
            }
        });
        var gr = new Rn,
            yr = new Ce;

        function _r(t, e, n, i, r, o) {
            this.planes = [void 0 !== t ? t : new vr, void 0 !== e ? e : new vr, void 0 !== n ? n : new vr, void 0 !== i ? i : new vr, void 0 !== r ? r : new vr, void 0 !== o ? o : new vr]
        }
        Object.assign(_r.prototype, {
            set: function(t, e, n, i, r, o) {
                var a = this.planes;
                return a[0].copy(t), a[1].copy(e), a[2].copy(n), a[3].copy(i), a[4].copy(r), a[5].copy(o), this
            },
            clone: function() {
                return (new this.constructor).copy(this)
            },
            copy: function(t) {
                for (var e = this.planes, n = 0; n < 6; n++) e[n].copy(t.planes[n]);
                return this
            },
            setFromMatrix: function(t) {
                var e = this.planes,
                    n = t.elements,
                    i = n[0],
                    r = n[1],
                    o = n[2],
                    a = n[3],
                    s = n[4],
                    c = n[5],
                    l = n[6],
                    h = n[7],
                    u = n[8],
                    p = n[9],
                    d = n[10],
                    f = n[11],
                    m = n[12],
                    v = n[13],
                    g = n[14],
                    y = n[15];
                return e[0].setComponents(a - i, h - s, f - u, y - m).normalize(), e[1].setComponents(a + i, h + s, f + u, y + m).normalize(), e[2].setComponents(a + r, h + c, f + p, y + v).normalize(), e[3].setComponents(a - r, h - c, f - p, y - v).normalize(), e[4].setComponents(a - o, h - l, f - d, y - g).normalize(), e[5].setComponents(a + o, h + l, f + d, y + g).normalize(), this
            },
            intersectsObject: function(t) {
                var e = t.geometry;
                return null === e.boundingSphere && e.computeBoundingSphere(), gr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld), this.intersectsSphere(gr)
            },
            intersectsSprite: function(t) {
                return gr.center.set(0, 0, 0), gr.radius = .7071067811865476, gr.applyMatrix4(t.matrixWorld), this.intersectsSphere(gr)
            },
            intersectsSphere: function(t) {
                for (var e = this.planes, n = t.center, i = -t.radius, r = 0; r < 6; r++) {
                    var o = e[r].distanceToPoint(n);
                    if (o < i) return !1
                }
                return !0
            },
            intersectsBox: function(t) {
                for (var e = this.planes, n = 0; n < 6; n++) {
                    var i = e[n];
                    if (yr.x = i.normal.x > 0 ? t.max.x : t.min.x, yr.y = i.normal.y > 0 ? t.max.y : t.min.y, yr.z = i.normal.z > 0 ? t.max.z : t.min.z, i.distanceToPoint(yr) < 0) return !1
                }
                return !0
            },
            containsPoint: function(t) {
                for (var e = this.planes, n = 0; n < 6; n++)
                    if (e[n].distanceToPoint(t) < 0) return !1;
                return !0
            }
        });
        var xr = {
                alphamap_fragment: "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",
                alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
                alphatest_fragment: "#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif",
                aomap_fragment: "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif",
                aomap_pars_fragment: "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
                begin_vertex: "vec3 transformed = vec3( position );",
                beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",
                bsdfs: "vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\treturn vec2( -1.04, 1.04 ) * a004 + r.zw;\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\tif( cutoffDistance > 0.0 ) {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t}\n\treturn distanceFalloff;\n#else\n\tif( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t}\n\treturn 1.0;\n#endif\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nvec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );\n\tvec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;\n\treturn Fr * fresnel + F0;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + viewDir );\n\tfloat dotNL = saturate( dot( normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\treturn specularColor * brdf.x + brdf.y;\n}\nvoid BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tvec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\tvec3 FssEss = F * brdf.x + brdf.y;\n\tfloat Ess = brdf.x + brdf.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie(float roughness, float NoH) {\n\tfloat invAlpha  = 1.0 / roughness;\n\tfloat cos2h = NoH * NoH;\n\tfloat sin2h = max(1.0 - cos2h, 0.0078125);\treturn (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);\n}\nfloat V_Neubelt(float NoV, float NoL) {\n\treturn saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));\n}\nvec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {\n\tvec3 N = geometry.normal;\n\tvec3 V = geometry.viewDir;\n\tvec3 H = normalize( V + L );\n\tfloat dotNH = saturate( dot( N, H ) );\n\treturn specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );\n}\n#endif",
                bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tfDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",
                clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\tif ( clipped ) discard;\n\t#endif\n#endif",
                clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n\t#if ! defined( STANDARD ) && ! defined( PHONG ) && ! defined( MATCAP )\n\t\tvarying vec3 vViewPosition;\n\t#endif\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
                clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0 && ! defined( STANDARD ) && ! defined( PHONG ) && ! defined( MATCAP )\n\tvarying vec3 vViewPosition;\n#endif",
                clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0 && ! defined( STANDARD ) && ! defined( PHONG ) && ! defined( MATCAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif",
                color_fragment: "#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif",
                color_pars_fragment: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",
                color_pars_vertex: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",
                color_vertex: "#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif",
                common: "#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n  return m[ 2 ][ 3 ] == - 1.0;\n}",
                cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_textureSize (1024.0)\nint getFaceFromDirection(vec3 direction) {\n\tvec3 absDirection = abs(direction);\n\tint face = -1;\n\tif( absDirection.x > absDirection.z ) {\n\t\tif(absDirection.x > absDirection.y )\n\t\t\tface = direction.x > 0.0 ? 0 : 3;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\telse {\n\t\tif(absDirection.z > absDirection.y )\n\t\t\tface = direction.z > 0.0 ? 2 : 5;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\treturn face;\n}\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n\tfloat scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n\tfloat dxRoughness = dFdx(roughness);\n\tfloat dyRoughness = dFdy(roughness);\n\tvec3 dx = dFdx( vec * scale * dxRoughness );\n\tvec3 dy = dFdy( vec * scale * dyRoughness );\n\tfloat d = max( dot( dx, dx ), dot( dy, dy ) );\n\td = clamp(d, 1.0, cubeUV_rangeClamp);\n\tfloat mipLevel = 0.5 * log2(d);\n\treturn vec2(floor(mipLevel), fract(mipLevel));\n}\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n\tmipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n\tfloat a = 16.0 * cubeUV_rcpTextureSize;\n\tvec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n\tvec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n\tfloat powScale = exp2_packed.x * exp2_packed.y;\n\tfloat scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n\tfloat mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n\tbool bRes = mipLevel == 0.0;\n\tscale =  bRes && (scale < a) ? a : scale;\n\tvec3 r;\n\tvec2 offset;\n\tint face = getFaceFromDirection(direction);\n\tfloat rcpPowScale = 1.0 / powScale;\n\tif( face == 0) {\n\t\tr = vec3(direction.x, -direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 1) {\n\t\tr = vec3(direction.y, direction.x, direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 2) {\n\t\tr = vec3(direction.z, direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 3) {\n\t\tr = vec3(direction.x, direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse if( face == 4) {\n\t\tr = vec3(direction.y, direction.x, -direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse {\n\t\tr = vec3(direction.z, -direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\tr = normalize(r);\n\tfloat texelOffset = 0.5 * cubeUV_rcpTextureSize;\n\tvec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n\tvec2 base = offset + vec2( texelOffset );\n\treturn base + s * ( scale - 2.0 * texelOffset );\n}\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\nvec4 textureCubeUV( sampler2D envMap, vec3 reflectedDirection, float roughness ) {\n\tfloat roughnessVal = roughness* cubeUV_maxLods3;\n\tfloat r1 = floor(roughnessVal);\n\tfloat r2 = r1 + 1.0;\n\tfloat t = fract(roughnessVal);\n\tvec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n\tfloat s = mipInfo.y;\n\tfloat level0 = mipInfo.x;\n\tfloat level1 = level0 + 1.0;\n\tlevel1 = level1 > 5.0 ? 5.0 : level1;\n\tlevel0 += min( floor( s + 0.5 ), 5.0 );\n\tvec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n\tvec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n\tvec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n\tvec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n\tvec4 result = mix(color10, color20, t);\n\treturn vec4(result.rgb, 1.0);\n}\n#endif",
                defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n\ttransformedNormal = mat3( instanceMatrix ) * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = normalMatrix * objectTangent;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",
                displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",
                displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif",
                emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
                emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",
                encodings_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
                encodings_pars_fragment: "\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * value.a * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat D = max( maxRange / maxRGB, 1.0 );\n\tD = min( floor( D ) / 255.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n\tvec3 Xp_Y_XYZp = cLogLuvM * value.rgb;\n\tXp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract( Le );\n\tvResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;\n\treturn vec4( max( vRGB, 0.0 ), 1.0 );\n}",
                envmap_fragment: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\treflectVec = normalize( reflectVec );\n\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\treflectVec = normalize( reflectVec );\n\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\tenvColor = envMapTexelToLinear( envColor );\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",
                envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif",
                envmap_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",
                envmap_pars_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",
                envmap_physical_pars_fragment: "#if defined( USE_ENVMAP )\n\t#ifdef ENVMAP_MODE_REFRACTION\n\t\tuniform float refractionRatio;\n\t#endif\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, queryVec, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat sigma = PI * roughness * roughness / ( 1.0 + roughness );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + log2( sigma );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t  vec3 reflectVec = reflect( -viewDir, normal );\n\t\t  reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t#else\n\t\t  vec3 reflectVec = refract( -viewDir, normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, queryReflectVec, roughness );\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif",
                envmap_vertex: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",
                fog_vertex: "#ifdef USE_FOG\n\tfogDepth = -mvPosition.z;\n#endif",
                fog_pars_vertex: "#ifdef USE_FOG\n\tvarying float fogDepth;\n#endif",
                fog_fragment: "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
                fog_pars_fragment: "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",
                gradientmap_pars_fragment: "#ifdef TOON\n\tuniform sampler2D gradientMap;\n\tvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\t\tfloat dotNL = dot( normal, lightDirection );\n\t\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t\t#ifdef USE_GRADIENTMAP\n\t\t\treturn texture2D( gradientMap, coord ).rgb;\n\t\t#else\n\t\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t\t#endif\n\t}\n#endif",
                lightmap_fragment: "#ifdef USE_LIGHTMAP\n\treflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif",
                lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
                lights_lambert_vertex: "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n\tvIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n#endif",
                lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {\n\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t\tfloat shadowCameraNear;\n\t\tfloat shadowCameraFar;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif",
                lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
                lights_phong_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifdef TOON\n\t\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#else\n\t\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\t\tvec3 irradiance = dotNL * directLight.color;\n\t#endif\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)",
                lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef REFLECTIVITY\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#endif\n#ifdef CLEARCOAT\n\tmaterial.clearcoat = saturate( clearcoat );\tmaterial.clearcoatRoughness = clamp( clearcoatRoughness, 0.04, 1.0 );\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheen;\n#endif",
                lights_physical_pars_fragment: "struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n#ifdef CLEARCOAT\n\tfloat clearcoat;\n\tfloat clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tvec3 sheenColor;\n#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearcoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = ccDotNL * directLight.color;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tccIrradiance *= PI;\n\t\t#endif\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t\treflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(\n\t\t\tmaterial.specularRoughness,\n\t\t\tdirectLight.direction,\n\t\t\tgeometry,\n\t\t\tmaterial.sheenColor\n\t\t);\n\t#else\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);\n\t#endif\n\treflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t\tfloat ccDotNL = ccDotNV;\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\tfloat clearcoatInv = 1.0 - clearcoatDHR;\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\tBRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );\n\treflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
                lights_fragment_begin: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\n#ifdef CLEARCOAT\n\tgeometry.clearcoatNormal = clearcoatNormal;\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tdirectLight.color *= all( bvec3( pointLight.shadow, directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tdirectLight.color *= all( bvec3( spotLight.shadow, directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectLight.color *= all( bvec3( directionalLight.shadow, directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
                lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );\n\t#ifdef CLEARCOAT\n\t\tclearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );\n\t#endif\n#endif",
                lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",
                logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 1.0 ? log2( vFragDepth ) * logDepthBufFC * 0.5 : gl_FragCoord.z;\n#endif",
                logdepthbuf_pars_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",
                logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif",
                logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif",
                map_fragment: "#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif",
                map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",
                map_particle_fragment: "#ifdef USE_MAP\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif",
                map_particle_pars_fragment: "#ifdef USE_MAP\n\tuniform mat3 uvTransform;\n\tuniform sampler2D map;\n#endif",
                metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",
                metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
                morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif",
                morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",
                morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\t#endif\n#endif",
                normal_fragment_begin: "#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t\tbitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#endif\n\t#endif\n#endif\nvec3 geometryNormal = normal;",
                normal_fragment_maps: "#ifdef OBJECTSPACE_NORMALMAP\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n\t#ifdef USE_TANGENT\n\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = normalScale * mapN.xy;\n\t\tnormal = normalize( vTBN * mapN );\n\t#else\n\t\tnormal = perturbNormal2Arb( -vViewPosition, normal, normalScale, normalMap );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif",
                normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec2 normalScale, in sampler2D normalMap ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tfloat scale = sign( st1.t * st0.s - st0.t * st1.s );\n\t\tvec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );\n\t\tvec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );\n\t\tvec3 N = normalize( surf_norm );\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy *= normalScale;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tbool frontFacing = dot( cross( S, T ), N ) > 0.0;\n\t\t\tmapN.xy *= ( float( frontFacing ) * 2.0 - 1.0 );\n\t\t#else\n\t\t\tmapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#endif\n\t\tmat3 tsn = mat3( S, T, N );\n\t\treturn normalize( tsn * mapN );\n\t}\n#endif",
                clearcoat_normal_fragment_begin: "#ifdef CLEARCOAT\n\tvec3 clearcoatNormal = geometryNormal;\n#endif",
                clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n\t#ifdef USE_TANGENT\n\t\tmat3 vTBN = mat3( tangent, bitangent, clearcoatNormal );\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = clearcoatNormalScale * mapN.xy;\n\t\tclearcoatNormal = normalize( vTBN * mapN );\n\t#else\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatNormalScale, clearcoatNormalMap );\n\t#endif\n#endif",
                clearcoat_normalmap_pars_fragment: "#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif",
                packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec4 encodeHalfRGBA ( vec2 v ) {\n\tvec4 encoded = vec4( 0.0 );\n\tconst vec2 offset = vec2( 1.0 / 255.0, 0.0 );\n\tencoded.xy = vec2( v.x, fract( v.x * 255.0 ) );\n\tencoded.xy = encoded.xy - ( encoded.yy * offset );\n\tencoded.zw = vec2( v.y, fract( v.y * 255.0 ) );\n\tencoded.zw = encoded.zw - ( encoded.ww * offset );\n\treturn encoded;\n}\nvec2 decodeHalfRGBA( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",
                premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",
                project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
                dithering_fragment: "#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
                dithering_pars_fragment: "#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",
                roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",
                roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
                shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn decodeHalfRGBA( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = ( floor( uv * size - 0.5 ) + 0.5 ) * texelSize;\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\t\tvec2 f = fract( uv * size + 0.5 );\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\t\treturn c;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif",
                shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif",
                shadowmap_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n#endif",
                shadowmask_pars_fragment: "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= all( bvec2( directionalLight.shadow, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= all( bvec2( spotLight.shadow, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= all( bvec2( pointLight.shadow, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#endif\n\t#endif\n\treturn shadow;\n}",
                skinbase_vertex: "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
                skinning_pars_vertex: "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform highp sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif",
                skinning_vertex: "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
                skinnormal_vertex: "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",
                specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
                specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
                tonemapping_fragment: "#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
                tonemapping_pars_fragment: "#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( ( color * ( 2.51 * color + 0.03 ) ) / ( color * ( 2.43 * color + 0.59 ) + 0.14 ) );\n}",
                uv_pars_fragment: "#ifdef USE_UV\n\tvarying vec2 vUv;\n#endif",
                uv_pars_vertex: "#ifdef USE_UV\n\tvarying vec2 vUv;\n\tuniform mat3 uvTransform;\n#endif",
                uv_vertex: "#ifdef USE_UV\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
                uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",
                uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n#endif",
                uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = uv2;\n#endif",
                worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif",
                background_frag: "uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
                background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
                cube_frag: "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n\tvec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
                cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
                depth_frag: "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - gl_FragCoord.z ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n\t#endif\n}",
                depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}",
                distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",
                distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",
                equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV;\n\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tvec4 texColor = texture2D( tEquirect, sampleUV );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
                equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",
                linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
                linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
                meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\treflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
                meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",
                meshlambert_frag: "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n\t#else\n\t\treflectedLight.indirectDiffuse += vIndirectFront;\n\t#endif\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
                meshlambert_vert: "#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
                meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t\tmatcapColor = matcapTexelToLinear( matcapColor );\n\t#else\n\t\tvec4 matcapColor = vec4( 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
                meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#ifndef FLAT_SHADED\n\t\tvNormal = normalize( transformedNormal );\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",
                meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
                meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
                meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n\t#define REFLECTIVITY\n\t#define CLEARCOAT\n\t#define TRANSPARENCY\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef TRANSPARENCY\n\tuniform float transparency;\n#endif\n#ifdef REFLECTIVITY\n\tuniform float reflectivity;\n#endif\n#ifdef CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheen;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#ifdef TRANSPARENCY\n\t\tdiffuseColor.a *= saturate( 1. - transparency + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) );\n\t#endif\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
                meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
                normal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}",
                normal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",
                points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
                points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",
                shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <fog_fragment>\n}",
                shadow_vert: "#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
                sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
                sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}"
            },
            br = {
                common: {
                    diffuse: {
                        value: new $n(15658734)
                    },
                    opacity: {
                        value: 1
                    },
                    map: {
                        value: null
                    },
                    uvTransform: {
                        value: new De
                    },
                    alphaMap: {
                        value: null
                    }
                },
                specularmap: {
                    specularMap: {
                        value: null
                    }
                },
                envmap: {
                    envMap: {
                        value: null
                    },
                    flipEnvMap: {
                        value: -1
                    },
                    reflectivity: {
                        value: 1
                    },
                    refractionRatio: {
                        value: .98
                    },
                    maxMipLevel: {
                        value: 0
                    }
                },
                aomap: {
                    aoMap: {
                        value: null
                    },
                    aoMapIntensity: {
                        value: 1
                    }
                },
                lightmap: {
                    lightMap: {
                        value: null
                    },
                    lightMapIntensity: {
                        value: 1
                    }
                },
                emissivemap: {
                    emissiveMap: {
                        value: null
                    }
                },
                bumpmap: {
                    bumpMap: {
                        value: null
                    },
                    bumpScale: {
                        value: 1
                    }
                },
                normalmap: {
                    normalMap: {
                        value: null
                    },
                    normalScale: {
                        value: new Ae(1, 1)
                    }
                },
                displacementmap: {
                    displacementMap: {
                        value: null
                    },
                    displacementScale: {
                        value: 1
                    },
                    displacementBias: {
                        value: 0
                    }
                },
                roughnessmap: {
                    roughnessMap: {
                        value: null
                    }
                },
                metalnessmap: {
                    metalnessMap: {
                        value: null
                    }
                },
                gradientmap: {
                    gradientMap: {
                        value: null
                    }
                },
                fog: {
                    fogDensity: {
                        value: 25e-5
                    },
                    fogNear: {
                        value: 1
                    },
                    fogFar: {
                        value: 2e3
                    },
                    fogColor: {
                        value: new $n(16777215)
                    }
                },
                lights: {
                    ambientLightColor: {
                        value: []
                    },
                    lightProbe: {
                        value: []
                    },
                    directionalLights: {
                        value: [],
                        properties: {
                            direction: {},
                            color: {},
                            shadow: {},
                            shadowBias: {},
                            shadowRadius: {},
                            shadowMapSize: {}
                        }
                    },
                    directionalShadowMap: {
                        value: []
                    },
                    directionalShadowMatrix: {
                        value: []
                    },
                    spotLights: {
                        value: [],
                        properties: {
                            color: {},
                            position: {},
                            direction: {},
                            distance: {},
                            coneCos: {},
                            penumbraCos: {},
                            decay: {},
                            shadow: {},
                            shadowBias: {},
                            shadowRadius: {},
                            shadowMapSize: {}
                        }
                    },
                    spotShadowMap: {
                        value: []
                    },
                    spotShadowMatrix: {
                        value: []
                    },
                    pointLights: {
                        value: [],
                        properties: {
                            color: {},
                            position: {},
                            decay: {},
                            distance: {},
                            shadow: {},
                            shadowBias: {},
                            shadowRadius: {},
                            shadowMapSize: {},
                            shadowCameraNear: {},
                            shadowCameraFar: {}
                        }
                    },
                    pointShadowMap: {
                        value: []
                    },
                    pointShadowMatrix: {
                        value: []
                    },
                    hemisphereLights: {
                        value: [],
                        properties: {
                            direction: {},
                            skyColor: {},
                            groundColor: {}
                        }
                    },
                    rectAreaLights: {
                        value: [],
                        properties: {
                            color: {},
                            position: {},
                            width: {},
                            height: {}
                        }
                    }
                },
                points: {
                    diffuse: {
                        value: new $n(15658734)
                    },
                    opacity: {
                        value: 1
                    },
                    size: {
                        value: 1
                    },
                    scale: {
                        value: 1
                    },
                    map: {
                        value: null
                    },
                    uvTransform: {
                        value: new De
                    }
                },
                sprite: {
                    diffuse: {
                        value: new $n(15658734)
                    },
                    opacity: {
                        value: 1
                    },
                    center: {
                        value: new Ae(.5, .5)
                    },
                    rotation: {
                        value: 0
                    },
                    map: {
                        value: null
                    },
                    uvTransform: {
                        value: new De
                    }
                }
            },
            wr = {
                basic: {
                    uniforms: er([br.common, br.specularmap, br.envmap, br.aomap, br.lightmap, br.fog]),
                    vertexShader: xr.meshbasic_vert,
                    fragmentShader: xr.meshbasic_frag
                },
                lambert: {
                    uniforms: er([br.common, br.specularmap, br.envmap, br.aomap, br.lightmap, br.emissivemap, br.fog, br.lights, {
                        emissive: {
                            value: new $n(0)
                        }
                    }]),
                    vertexShader: xr.meshlambert_vert,
                    fragmentShader: xr.meshlambert_frag
                },
                phong: {
                    uniforms: er([br.common, br.specularmap, br.envmap, br.aomap, br.lightmap, br.emissivemap, br.bumpmap, br.normalmap, br.displacementmap, br.gradientmap, br.fog, br.lights, {
                        emissive: {
                            value: new $n(0)
                        },
                        specular: {
                            value: new $n(1118481)
                        },
                        shininess: {
                            value: 30
                        }
                    }]),
                    vertexShader: xr.meshphong_vert,
                    fragmentShader: xr.meshphong_frag
                },
                standard: {
                    uniforms: er([br.common, br.envmap, br.aomap, br.lightmap, br.emissivemap, br.bumpmap, br.normalmap, br.displacementmap, br.roughnessmap, br.metalnessmap, br.fog, br.lights, {
                        emissive: {
                            value: new $n(0)
                        },
                        roughness: {
                            value: .5
                        },
                        metalness: {
                            value: .5
                        },
                        envMapIntensity: {
                            value: 1
                        }
                    }]),
                    vertexShader: xr.meshphysical_vert,
                    fragmentShader: xr.meshphysical_frag
                },
                matcap: {
                    uniforms: er([br.common, br.bumpmap, br.normalmap, br.displacementmap, br.fog, {
                        matcap: {
                            value: null
                        }
                    }]),
                    vertexShader: xr.meshmatcap_vert,
                    fragmentShader: xr.meshmatcap_frag
                },
                points: {
                    uniforms: er([br.points, br.fog]),
                    vertexShader: xr.points_vert,
                    fragmentShader: xr.points_frag
                },
                dashed: {
                    uniforms: er([br.common, br.fog, {
                        scale: {
                            value: 1
                        },
                        dashSize: {
                            value: 1
                        },
                        totalSize: {
                            value: 2
                        }
                    }]),
                    vertexShader: xr.linedashed_vert,
                    fragmentShader: xr.linedashed_frag
                },
                depth: {
                    uniforms: er([br.common, br.displacementmap]),
                    vertexShader: xr.depth_vert,
                    fragmentShader: xr.depth_frag
                },
                normal: {
                    uniforms: er([br.common, br.bumpmap, br.normalmap, br.displacementmap, {
                        opacity: {
                            value: 1
                        }
                    }]),
                    vertexShader: xr.normal_vert,
                    fragmentShader: xr.normal_frag
                },
                sprite: {
                    uniforms: er([br.sprite, br.fog]),
                    vertexShader: xr.sprite_vert,
                    fragmentShader: xr.sprite_frag
                },
                background: {
                    uniforms: {
                        uvTransform: {
                            value: new De
                        },
                        t2D: {
                            value: null
                        }
                    },
                    vertexShader: xr.background_vert,
                    fragmentShader: xr.background_frag
                },
                cube: {
                    uniforms: {
                        tCube: {
                            value: null
                        },
                        tFlip: {
                            value: -1
                        },
                        opacity: {
                            value: 1
                        }
                    },
                    vertexShader: xr.cube_vert,
                    fragmentShader: xr.cube_frag
                },
                equirect: {
                    uniforms: {
                        tEquirect: {
                            value: null
                        }
                    },
                    vertexShader: xr.equirect_vert,
                    fragmentShader: xr.equirect_frag
                },
                distanceRGBA: {
                    uniforms: er([br.common, br.displacementmap, {
                        referencePosition: {
                            value: new Ce
                        },
                        nearDistance: {
                            value: 1
                        },
                        farDistance: {
                            value: 1e3
                        }
                    }]),
                    vertexShader: xr.distanceRGBA_vert,
                    fragmentShader: xr.distanceRGBA_frag
                },
                shadow: {
                    uniforms: er([br.lights, br.fog, {
                        color: {
                            value: new $n(0)
                        },
                        opacity: {
                            value: 1
                        }
                    }]),
                    vertexShader: xr.shadow_vert,
                    fragmentShader: xr.shadow_frag
                }
            };

        function Mr() {
            var t = null,
                e = !1,
                n = null;

            function i(r, o) {
                !1 !== e && (n(r, o), t.requestAnimationFrame(i))
            }
            return {
                start: function() {
                    !0 !== e && null !== n && (t.requestAnimationFrame(i), e = !0)
                },
                stop: function() {
                    e = !1
                },
                setAnimationLoop: function(t) {
                    n = t
                },
                setContext: function(e) {
                    t = e
                }
            }
        }

        function Tr(t) {
            var e = new WeakMap;
            return {
                get: function(t) {
                    return t.isInterleavedBufferAttribute && (t = t.data), e.get(t)
                },
                remove: function(n) {
                    n.isInterleavedBufferAttribute && (n = n.data);
                    var i = e.get(n);
                    i && (t.deleteBuffer(i.buffer), e.delete(n))
                },
                update: function(n, i) {
                    n.isInterleavedBufferAttribute && (n = n.data);
                    var r = e.get(n);
                    void 0 === r ? e.set(n, function(e, n) {
                        var i = e.array,
                            r = e.dynamic ? 35048 : 35044,
                            o = t.createBuffer();
                        t.bindBuffer(n, o), t.bufferData(n, i, r), e.onUploadCallback();
                        var a = 5126;
                        return i instanceof Float32Array ? a = 5126 : i instanceof Float64Array ? console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.") : i instanceof Uint16Array ? a = 5123 : i instanceof Int16Array ? a = 5122 : i instanceof Uint32Array ? a = 5125 : i instanceof Int32Array ? a = 5124 : i instanceof Int8Array ? a = 5120 : i instanceof Uint8Array && (a = 5121), {
                            buffer: o,
                            type: a,
                            bytesPerElement: i.BYTES_PER_ELEMENT,
                            version: e.version
                        }
                    }(n, i)) : r.version < n.version && (function(e, n, i) {
                        var r = n.array,
                            o = n.updateRange;
                        t.bindBuffer(i, e), !1 === n.dynamic ? t.bufferData(i, r, 35044) : -1 === o.count ? t.bufferSubData(i, 0, r) : 0 === o.count ? console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually.") : (t.bufferSubData(i, o.offset * r.BYTES_PER_ELEMENT, r.subarray(o.offset, o.offset + o.count)), o.count = -1)
                    }(r.buffer, n, i), r.version = n.version)
                }
            }
        }

        function Er(t, e, n, i) {
            Ki.call(this), this.type = "PlaneGeometry", this.parameters = {
                width: t,
                height: e,
                widthSegments: n,
                heightSegments: i
            }, this.fromBufferGeometry(new Sr(t, e, n, i)), this.mergeVertices()
        }

        function Sr(t, e, n, i) {
            Si.call(this), this.type = "PlaneBufferGeometry", this.parameters = {
                width: t,
                height: e,
                widthSegments: n,
                heightSegments: i
            };
            var r, o, a = (t = t || 1) / 2,
                s = (e = e || 1) / 2,
                c = Math.floor(n) || 1,
                l = Math.floor(i) || 1,
                h = c + 1,
                u = l + 1,
                p = t / c,
                d = e / l,
                f = [],
                m = [],
                v = [],
                g = [];
            for (o = 0; o < u; o++) {
                var y = o * d - s;
                for (r = 0; r < h; r++) {
                    var _ = r * p - a;
                    m.push(_, -y, 0), v.push(0, 0, 1), g.push(r / c), g.push(1 - o / l)
                }
            }
            for (o = 0; o < l; o++)
                for (r = 0; r < c; r++) {
                    var x = r + h * o,
                        b = r + h * (o + 1),
                        w = r + 1 + h * (o + 1),
                        M = r + 1 + h * o;
                    f.push(x, b, M), f.push(b, w, M)
                }
            this.setIndex(f), this.addAttribute("position", new mi(m, 3)), this.addAttribute("normal", new mi(v, 3)), this.addAttribute("uv", new mi(g, 2))
        }

        function Ar(t, e) {
            return Math.abs(e[1]) - Math.abs(t[1])
        }

        function Pr(t, e, n, i, r, o, a, s, c, l) {
            t = void 0 !== t ? t : [], e = void 0 !== e ? e : Q, a = void 0 !== a ? a : At, He.call(this, t, e, n, i, r, o, a, s, c, l), this.flipY = !1
        }

        function Lr(t, e, n, i) {
            He.call(this, null), this.image = {
                data: t || null,
                width: e || 1,
                height: n || 1,
                depth: i || 1
            }, this.magFilter = ct, this.minFilter = ct, this.wrapR = at, this.generateMipmaps = !1, this.flipY = !1, this.needsUpdate = !0
        }

        function Rr(t, e, n, i) {
            He.call(this, null), this.image = {
                data: t || null,
                width: e || 1,
                height: n || 1,
                depth: i || 1
            }, this.magFilter = ct, this.minFilter = ct, this.wrapR = at, this.generateMipmaps = !1, this.flipY = !1, this.needsUpdate = !0
        }
        wr.physical = {
            uniforms: er([wr.standard.uniforms, {
                transparency: {
                    value: 0
                },
                clearcoat: {
                    value: 0
                },
                clearcoatRoughness: {
                    value: 0
                },
                sheen: {
                    value: new $n(0)
                },
                clearcoatNormalScale: {
                    value: new Ae(1, 1)
                },
                clearcoatNormalMap: {
                    value: null
                }
            }]),
            vertexShader: xr.meshphysical_vert,
            fragmentShader: xr.meshphysical_frag
        }, Er.prototype = Object.create(Ki.prototype), Er.prototype.constructor = Er, Sr.prototype = Object.create(Si.prototype), Sr.prototype.constructor = Sr, Pr.prototype = Object.create(He.prototype), Pr.prototype.constructor = Pr, Pr.prototype.isCubeTexture = !0, Object.defineProperty(Pr.prototype, "images", {
            get: function() {
                return this.image
            },
            set: function(t) {
                this.image = t
            }
        }), Lr.prototype = Object.create(He.prototype), Lr.prototype.constructor = Lr, Lr.prototype.isDataTexture2DArray = !0, Rr.prototype = Object.create(He.prototype), Rr.prototype.constructor = Rr, Rr.prototype.isDataTexture3D = !0;
        var Cr = new He,
            Or = new Lr,
            Ir = new Rr,
            Dr = new Pr,
            Nr = [],
            Br = [],
            Hr = new Float32Array(16),
            Fr = new Float32Array(9),
            kr = new Float32Array(4);

        function Ur(t, e, n) {
            var i = t[0];
            if (i <= 0 || i > 0) return t;
            var r = e * n,
                o = Nr[r];
            if (void 0 === o && (o = new Float32Array(r), Nr[r] = o), 0 !== e) {
                i.toArray(o, 0);
                for (var a = 1, s = 0; a !== e; ++a) s += n, t[a].toArray(o, s)
            }
            return o
        }

        function zr(t, e) {
            if (t.length !== e.length) return !1;
            for (var n = 0, i = t.length; n < i; n++)
                if (t[n] !== e[n]) return !1;
            return !0
        }

        function Gr(t, e) {
            for (var n = 0, i = e.length; n < i; n++) t[n] = e[n]
        }

        function jr(t, e) {
            var n = Br[e];
            void 0 === n && (n = new Int32Array(e), Br[e] = n);
            for (var i = 0; i !== e; ++i) n[i] = t.allocateTextureUnit();
            return n
        }

        function Vr(t, e) {
            var n = this.cache;
            n[0] !== e && (t.uniform1f(this.addr, e), n[0] = e)
        }

        function Wr(t, e) {
            var n = this.cache;
            if (void 0 !== e.x) n[0] === e.x && n[1] === e.y || (t.uniform2f(this.addr, e.x, e.y), n[0] = e.x, n[1] = e.y);
            else {
                if (zr(n, e)) return;
                t.uniform2fv(this.addr, e), Gr(n, e)
            }
        }

        function Xr(t, e) {
            var n = this.cache;
            if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z || (t.uniform3f(this.addr, e.x, e.y, e.z), n[0] = e.x, n[1] = e.y, n[2] = e.z);
            else if (void 0 !== e.r) n[0] === e.r && n[1] === e.g && n[2] === e.b || (t.uniform3f(this.addr, e.r, e.g, e.b), n[0] = e.r, n[1] = e.g, n[2] = e.b);
            else {
                if (zr(n, e)) return;
                t.uniform3fv(this.addr, e), Gr(n, e)
            }
        }

        function qr(t, e) {
            var n = this.cache;
            if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w || (t.uniform4f(this.addr, e.x, e.y, e.z, e.w), n[0] = e.x, n[1] = e.y, n[2] = e.z, n[3] = e.w);
            else {
                if (zr(n, e)) return;
                t.uniform4fv(this.addr, e), Gr(n, e)
            }
        }

        function Yr(t, e) {
            var n = this.cache,
                i = e.elements;
            if (void 0 === i) {
                if (zr(n, e)) return;
                t.uniformMatrix2fv(this.addr, !1, e), Gr(n, e)
            } else {
                if (zr(n, i)) return;
                kr.set(i), t.uniformMatrix2fv(this.addr, !1, kr), Gr(n, i)
            }
        }

        function Zr(t, e) {
            var n = this.cache,
                i = e.elements;
            if (void 0 === i) {
                if (zr(n, e)) return;
                t.uniformMatrix3fv(this.addr, !1, e), Gr(n, e)
            } else {
                if (zr(n, i)) return;
                Fr.set(i), t.uniformMatrix3fv(this.addr, !1, Fr), Gr(n, i)
            }
        }

        function Jr(t, e) {
            var n = this.cache,
                i = e.elements;
            if (void 0 === i) {
                if (zr(n, e)) return;
                t.uniformMatrix4fv(this.addr, !1, e), Gr(n, e)
            } else {
                if (zr(n, i)) return;
                Hr.set(i), t.uniformMatrix4fv(this.addr, !1, Hr), Gr(n, i)
            }
        }

        function Kr(t, e, n) {
            var i = this.cache,
                r = n.allocateTextureUnit();
            i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.safeSetTexture2D(e || Cr, r)
        }

        function Qr(t, e, n) {
            var i = this.cache,
                r = n.allocateTextureUnit();
            i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.setTexture2DArray(e || Or, r)
        }

        function $r(t, e, n) {
            var i = this.cache,
                r = n.allocateTextureUnit();
            i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.setTexture3D(e || Ir, r)
        }

        function to(t, e, n) {
            var i = this.cache,
                r = n.allocateTextureUnit();
            i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.safeSetTextureCube(e || Dr, r)
        }

        function eo(t, e) {
            var n = this.cache;
            n[0] !== e && (t.uniform1i(this.addr, e), n[0] = e)
        }

        function no(t, e) {
            var n = this.cache;
            zr(n, e) || (t.uniform2iv(this.addr, e), Gr(n, e))
        }

        function io(t, e) {
            var n = this.cache;
            zr(n, e) || (t.uniform3iv(this.addr, e), Gr(n, e))
        }

        function ro(t, e) {
            var n = this.cache;
            zr(n, e) || (t.uniform4iv(this.addr, e), Gr(n, e))
        }

        function oo(t, e) {
            t.uniform1fv(this.addr, e)
        }

        function ao(t, e) {
            t.uniform1iv(this.addr, e)
        }

        function so(t, e) {
            t.uniform2iv(this.addr, e)
        }

        function co(t, e) {
            t.uniform3iv(this.addr, e)
        }

        function lo(t, e) {
            t.uniform4iv(this.addr, e)
        }

        function ho(t, e) {
            var n = Ur(e, this.size, 2);
            t.uniform2fv(this.addr, n)
        }

        function uo(t, e) {
            var n = Ur(e, this.size, 3);
            t.uniform3fv(this.addr, n)
        }

        function po(t, e) {
            var n = Ur(e, this.size, 4);
            t.uniform4fv(this.addr, n)
        }

        function fo(t, e) {
            var n = Ur(e, this.size, 4);
            t.uniformMatrix2fv(this.addr, !1, n)
        }

        function mo(t, e) {
            var n = Ur(e, this.size, 9);
            t.uniformMatrix3fv(this.addr, !1, n)
        }

        function vo(t, e) {
            var n = Ur(e, this.size, 16);
            t.uniformMatrix4fv(this.addr, !1, n)
        }

        function go(t, e, n) {
            var i = e.length,
                r = jr(n, i);
            t.uniform1iv(this.addr, r);
            for (var o = 0; o !== i; ++o) n.safeSetTexture2D(e[o] || Cr, r[o])
        }

        function yo(t, e, n) {
            var i = e.length,
                r = jr(n, i);
            t.uniform1iv(this.addr, r);
            for (var o = 0; o !== i; ++o) n.safeSetTextureCube(e[o] || Dr, r[o])
        }

        function _o(t, e, n) {
            this.id = t, this.addr = n, this.cache = [], this.setValue = function(t) {
                switch (t) {
                    case 5126:
                        return Vr;
                    case 35664:
                        return Wr;
                    case 35665:
                        return Xr;
                    case 35666:
                        return qr;
                    case 35674:
                        return Yr;
                    case 35675:
                        return Zr;
                    case 35676:
                        return Jr;
                    case 35678:
                    case 36198:
                        return Kr;
                    case 35679:
                        return $r;
                    case 35680:
                        return to;
                    case 36289:
                        return Qr;
                    case 5124:
                    case 35670:
                        return eo;
                    case 35667:
                    case 35671:
                        return no;
                    case 35668:
                    case 35672:
                        return io;
                    case 35669:
                    case 35673:
                        return ro
                }
            }(e.type)
        }

        function xo(t, e, n) {
            this.id = t, this.addr = n, this.cache = [], this.size = e.size, this.setValue = function(t) {
                switch (t) {
                    case 5126:
                        return oo;
                    case 35664:
                        return ho;
                    case 35665:
                        return uo;
                    case 35666:
                        return po;
                    case 35674:
                        return fo;
                    case 35675:
                        return mo;
                    case 35676:
                        return vo;
                    case 35678:
                        return go;
                    case 35680:
                        return yo;
                    case 5124:
                    case 35670:
                        return ao;
                    case 35667:
                    case 35671:
                        return so;
                    case 35668:
                    case 35672:
                        return co;
                    case 35669:
                    case 35673:
                        return lo
                }
            }(e.type)
        }

        function bo(t) {
            this.id = t, this.seq = [], this.map = {}
        }
        xo.prototype.updateCache = function(t) {
            var e = this.cache;
            t instanceof Float32Array && e.length !== t.length && (this.cache = new Float32Array(t.length)), Gr(e, t)
        }, bo.prototype.setValue = function(t, e, n) {
            for (var i = this.seq, r = 0, o = i.length; r !== o; ++r) {
                var a = i[r];
                a.setValue(t, e[a.id], n)
            }
        };
        var wo = /([\w\d_]+)(\])?(\[|\.)?/g;

        function Mo(t, e) {
            t.seq.push(e), t.map[e.id] = e
        }

        function To(t, e, n) {
            var i = t.name,
                r = i.length;
            for (wo.lastIndex = 0;;) {
                var o = wo.exec(i),
                    a = wo.lastIndex,
                    s = o[1],
                    c = "]" === o[2],
                    l = o[3];
                if (c && (s |= 0), void 0 === l || "[" === l && a + 2 === r) {
                    Mo(n, void 0 === l ? new _o(s, t, e) : new xo(s, t, e));
                    break
                }
                var h = n.map,
                    u = h[s];
                void 0 === u && (u = new bo(s), Mo(n, u)), n = u
            }
        }

        function Eo(t, e) {
            this.seq = [], this.map = {};
            for (var n = t.getProgramParameter(e, 35718), i = 0; i < n; ++i) {
                var r = t.getActiveUniform(e, i),
                    o = t.getUniformLocation(e, r.name);
                To(r, o, this)
            }
        }

        function So(t, e, n) {
            var i = t.createShader(e);
            return t.shaderSource(i, n), t.compileShader(i), i
        }
        Eo.prototype.setValue = function(t, e, n, i) {
            var r = this.map[e];
            void 0 !== r && r.setValue(t, n, i)
        }, Eo.prototype.setOptional = function(t, e, n) {
            var i = e[n];
            void 0 !== i && this.setValue(t, n, i)
        }, Eo.upload = function(t, e, n, i) {
            for (var r = 0, o = e.length; r !== o; ++r) {
                var a = e[r],
                    s = n[a.id];
                !1 !== s.needsUpdate && a.setValue(t, s.value, i)
            }
        }, Eo.seqWithValue = function(t, e) {
            for (var n = [], i = 0, r = t.length; i !== r; ++i) {
                var o = t[i];
                o.id in e && n.push(o)
            }
            return n
        };
        var Ao = 0;

        function Po(t) {
            switch (t) {
                case le:
                    return ["Linear", "( value )"];
                case he:
                    return ["sRGB", "( value )"];
                case pe:
                    return ["RGBE", "( value )"];
                case fe:
                    return ["RGBM", "( value, 7.0 )"];
                case me:
                    return ["RGBM", "( value, 16.0 )"];
                case ve:
                    return ["RGBD", "( value, 256.0 )"];
                case ue:
                    return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
                case de:
                    return ["LogLuv", "( value )"];
                default:
                    throw new Error("unsupported encoding: " + t)
            }
        }

        function Lo(t, e, n) {
            var i = t.getShaderParameter(e, 35713),
                r = t.getShaderInfoLog(e).trim();
            if (i && "" === r) return "";
            var o = t.getShaderSource(e);
            return "THREE.WebGLShader: gl.getShaderInfoLog() " + n + "\n" + r + function(t) {
                for (var e = t.split("\n"), n = 0; n < e.length; n++) e[n] = n + 1 + ": " + e[n];
                return e.join("\n")
            }(o)
        }

        function Ro(t, e) {
            var n = Po(e);
            return "vec4 " + t + "( vec4 value ) { return " + n[0] + "ToLinear" + n[1] + "; }"
        }

        function Co(t) {
            return "" !== t
        }

        function Oo(t, e) {
            return t.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows)
        }

        function Io(t, e) {
            return t.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection)
        }
        var Do = /^[ \t]*#include +<([\w\d./]+)>/gm;

        function No(t) {
            return t.replace(Do, Bo)
        }

        function Bo(t, e) {
            var n = xr[e];
            if (void 0 === n) throw new Error("Can not resolve #include <" + e + ">");
            return No(n)
        }
        var Ho = /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g;

        function Fo(t) {
            return t.replace(Ho, ko)
        }

        function ko(t, e, n, i) {
            for (var r = "", o = parseInt(e); o < parseInt(n); o++) r += i.replace(/\[ i \]/g, "[ " + o + " ]").replace(/UNROLLED_LOOP_INDEX/g, o);
            return r
        }

        function Uo(t) {
            var e = "precision " + t.precision + " float;\nprecision " + t.precision + " int;";
            return "highp" === t.precision ? e += "\n#define HIGH_PRECISION" : "mediump" === t.precision ? e += "\n#define MEDIUM_PRECISION" : "lowp" === t.precision && (e += "\n#define LOW_PRECISION"), e
        }

        function zo(t, e, n, i, s, c) {
            var l, h, u = t.getContext(),
                p = i.defines,
                d = s.vertexShader,
                f = s.fragmentShader,
                m = function(t) {
                    var e = "SHADOWMAP_TYPE_BASIC";
                    return t.shadowMapType === r ? e = "SHADOWMAP_TYPE_PCF" : t.shadowMapType === o ? e = "SHADOWMAP_TYPE_PCF_SOFT" : t.shadowMapType === a && (e = "SHADOWMAP_TYPE_VSM"), e
                }(c),
                v = function(t, e) {
                    var n = "ENVMAP_TYPE_CUBE";
                    if (t.envMap) switch (e.envMap.mapping) {
                        case Q:
                        case $:
                            n = "ENVMAP_TYPE_CUBE";
                            break;
                        case it:
                        case rt:
                            n = "ENVMAP_TYPE_CUBE_UV";
                            break;
                        case tt:
                        case et:
                            n = "ENVMAP_TYPE_EQUIREC";
                            break;
                        case nt:
                            n = "ENVMAP_TYPE_SPHERE"
                    }
                    return n
                }(c, i),
                g = function(t, e) {
                    var n = "ENVMAP_MODE_REFLECTION";
                    if (t.envMap) switch (e.envMap.mapping) {
                        case $:
                        case et:
                            n = "ENVMAP_MODE_REFRACTION"
                    }
                    return n
                }(c, i),
                y = function(t, e) {
                    var n = "ENVMAP_BLENDING_MULTIPLY";
                    if (t.envMap) switch (e.combine) {
                        case j:
                            n = "ENVMAP_BLENDING_MULTIPLY";
                            break;
                        case V:
                            n = "ENVMAP_BLENDING_MIX";
                            break;
                        case W:
                            n = "ENVMAP_BLENDING_ADD"
                    }
                    return n
                }(c, i),
                _ = t.gammaFactor > 0 ? t.gammaFactor : 1,
                x = c.isWebGL2 ? "" : function(t, e, n) {
                    return [(t = t || {}).derivatives || e.envMapCubeUV || e.bumpMap || e.tangentSpaceNormalMap || e.clearcoatNormalMap || e.flatShading ? "#extension GL_OES_standard_derivatives : enable" : "", (t.fragDepth || e.logarithmicDepthBuffer) && n.get("EXT_frag_depth") ? "#extension GL_EXT_frag_depth : enable" : "", t.drawBuffers && n.get("WEBGL_draw_buffers") ? "#extension GL_EXT_draw_buffers : require" : "", (t.shaderTextureLOD || e.envMap) && n.get("EXT_shader_texture_lod") ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(Co).join("\n")
                }(i.extensions, c, e),
                b = function(t) {
                    var e = [];
                    for (var n in t) {
                        var i = t[n];
                        !1 !== i && e.push("#define " + n + " " + i)
                    }
                    return e.join("\n")
                }(p),
                w = u.createProgram(),
                M = t.getRenderTarget(),
                T = M && M.isWebGLMultiviewRenderTarget ? M.numViews : 0;
            if (i.isRawShaderMaterial ? ((l = [b].filter(Co).join("\n")).length > 0 && (l += "\n"), (h = [x, b].filter(Co).join("\n")).length > 0 && (h += "\n")) : (l = [Uo(c), "#define SHADER_NAME " + s.name, b, c.instancing ? "#define USE_INSTANCING" : "", c.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + _, "#define MAX_BONES " + c.maxBones, c.useFog && c.fog ? "#define USE_FOG" : "", c.useFog && c.fogExp2 ? "#define FOG_EXP2" : "", c.map ? "#define USE_MAP" : "", c.envMap ? "#define USE_ENVMAP" : "", c.envMap ? "#define " + g : "", c.lightMap ? "#define USE_LIGHTMAP" : "", c.aoMap ? "#define USE_AOMAP" : "", c.emissiveMap ? "#define USE_EMISSIVEMAP" : "", c.bumpMap ? "#define USE_BUMPMAP" : "", c.normalMap ? "#define USE_NORMALMAP" : "", c.normalMap && c.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", c.normalMap && c.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", c.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", c.displacementMap && c.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", c.specularMap ? "#define USE_SPECULARMAP" : "", c.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", c.metalnessMap ? "#define USE_METALNESSMAP" : "", c.alphaMap ? "#define USE_ALPHAMAP" : "", c.vertexTangents ? "#define USE_TANGENT" : "", c.vertexColors ? "#define USE_COLOR" : "", c.vertexUvs ? "#define USE_UV" : "", c.flatShading ? "#define FLAT_SHADED" : "", c.skinning ? "#define USE_SKINNING" : "", c.useVertexTexture ? "#define BONE_TEXTURE" : "", c.morphTargets ? "#define USE_MORPHTARGETS" : "", c.morphNormals && !1 === c.flatShading ? "#define USE_MORPHNORMALS" : "", c.doubleSided ? "#define DOUBLE_SIDED" : "", c.flipSided ? "#define FLIP_SIDED" : "", c.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", c.shadowMapEnabled ? "#define " + m : "", c.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", c.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", c.logarithmicDepthBuffer && (c.isWebGL2 || e.get("EXT_frag_depth")) ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "#ifdef USE_INSTANCING", " attribute mat4 instanceMatrix;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_TANGENT", "\tattribute vec4 tangent;", "#endif", "#ifdef USE_COLOR", "\tattribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(Co).join("\n"), h = [x, Uo(c), "#define SHADER_NAME " + s.name, b, c.alphaTest ? "#define ALPHATEST " + c.alphaTest + (c.alphaTest % 1 ? "" : ".0") : "", "#define GAMMA_FACTOR " + _, c.useFog && c.fog ? "#define USE_FOG" : "", c.useFog && c.fogExp2 ? "#define FOG_EXP2" : "", c.map ? "#define USE_MAP" : "", c.matcap ? "#define USE_MATCAP" : "", c.envMap ? "#define USE_ENVMAP" : "", c.envMap ? "#define " + v : "", c.envMap ? "#define " + g : "", c.envMap ? "#define " + y : "", c.lightMap ? "#define USE_LIGHTMAP" : "", c.aoMap ? "#define USE_AOMAP" : "", c.emissiveMap ? "#define USE_EMISSIVEMAP" : "", c.bumpMap ? "#define USE_BUMPMAP" : "", c.normalMap ? "#define USE_NORMALMAP" : "", c.normalMap && c.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", c.normalMap && c.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", c.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", c.specularMap ? "#define USE_SPECULARMAP" : "", c.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", c.metalnessMap ? "#define USE_METALNESSMAP" : "", c.alphaMap ? "#define USE_ALPHAMAP" : "", c.sheen ? "#define USE_SHEEN" : "", c.vertexTangents ? "#define USE_TANGENT" : "", c.vertexColors ? "#define USE_COLOR" : "", c.vertexUvs ? "#define USE_UV" : "", c.gradientMap ? "#define USE_GRADIENTMAP" : "", c.flatShading ? "#define FLAT_SHADED" : "", c.doubleSided ? "#define DOUBLE_SIDED" : "", c.flipSided ? "#define FLIP_SIDED" : "", c.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", c.shadowMapEnabled ? "#define " + m : "", c.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", c.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", c.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", c.logarithmicDepthBuffer && (c.isWebGL2 || e.get("EXT_frag_depth")) ? "#define USE_LOGDEPTHBUF_EXT" : "", (i.extensions && i.extensions.shaderTextureLOD || c.envMap) && (c.isWebGL2 || e.get("EXT_shader_texture_lod")) ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", c.toneMapping !== X ? "#define TONE_MAPPING" : "", c.toneMapping !== X ? xr.tonemapping_pars_fragment : "", c.toneMapping !== X ? function(t, e) {
                    var n;
                    switch (e) {
                        case q:
                            n = "Linear";
                            break;
                        case Y:
                            n = "Reinhard";
                            break;
                        case Z:
                            n = "Uncharted2";
                            break;
                        case J:
                            n = "OptimizedCineon";
                            break;
                        case K:
                            n = "ACESFilmic";
                            break;
                        default:
                            throw new Error("unsupported toneMapping: " + e)
                    }
                    return "vec3 " + t + "( vec3 color ) { return " + n + "ToneMapping( color ); }"
                }("toneMapping", c.toneMapping) : "", c.dithering ? "#define DITHERING" : "", c.outputEncoding || c.mapEncoding || c.matcapEncoding || c.envMapEncoding || c.emissiveMapEncoding ? xr.encodings_pars_fragment : "", c.mapEncoding ? Ro("mapTexelToLinear", c.mapEncoding) : "", c.matcapEncoding ? Ro("matcapTexelToLinear", c.matcapEncoding) : "", c.envMapEncoding ? Ro("envMapTexelToLinear", c.envMapEncoding) : "", c.emissiveMapEncoding ? Ro("emissiveMapTexelToLinear", c.emissiveMapEncoding) : "", c.outputEncoding ? function(t, e) {
                    var n = Po(e);
                    return "vec4 " + t + "( vec4 value ) { return LinearTo" + n[0] + n[1] + "; }"
                }("linearToOutputTexel", c.outputEncoding) : "", c.depthPacking ? "#define DEPTH_PACKING " + i.depthPacking : "", "\n"].filter(Co).join("\n")), d = Io(d = Oo(d = No(d), c), c), f = Io(f = Oo(f = No(f), c), c), d = Fo(d), f = Fo(f), c.isWebGL2 && !i.isRawShaderMaterial) {
                var E = !1,
                    S = /^\s*#version\s+300\s+es\s*\n/;
                i.isShaderMaterial && null !== d.match(S) && null !== f.match(S) && (E = !0, d = d.replace(S, ""), f = f.replace(S, "")), l = ["#version 300 es\n", "#define attribute in", "#define varying out", "#define texture2D texture"].join("\n") + "\n" + l, h = ["#version 300 es\n", "#define varying in", E ? "" : "out highp vec4 pc_fragColor;", E ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + h, T > 0 && (l = (l = l.replace("#version 300 es\n", ["#version 300 es\n", "#extension GL_OVR_multiview2 : require", "layout(num_views = " + T + ") in;", "#define VIEW_ID gl_ViewID_OVR"].join("\n"))).replace(["uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;"].join("\n"), ["uniform mat4 modelViewMatrices[" + T + "];", "uniform mat4 projectionMatrices[" + T + "];", "uniform mat4 viewMatrices[" + T + "];", "uniform mat3 normalMatrices[" + T + "];", "#define modelViewMatrix modelViewMatrices[VIEW_ID]", "#define projectionMatrix projectionMatrices[VIEW_ID]", "#define viewMatrix viewMatrices[VIEW_ID]", "#define normalMatrix normalMatrices[VIEW_ID]"].join("\n")), h = (h = h.replace("#version 300 es\n", ["#version 300 es\n", "#extension GL_OVR_multiview2 : require", "#define VIEW_ID gl_ViewID_OVR"].join("\n"))).replace("uniform mat4 viewMatrix;", ["uniform mat4 viewMatrices[" + T + "];", "#define viewMatrix viewMatrices[VIEW_ID]"].join("\n")))
            }
            var A, P, L = l + d,
                R = h + f,
                C = So(u, 35633, L),
                O = So(u, 35632, R);
            if (u.attachShader(w, C), u.attachShader(w, O), void 0 !== i.index0AttributeName ? u.bindAttribLocation(w, 0, i.index0AttributeName) : !0 === c.morphTargets && u.bindAttribLocation(w, 0, "position"), u.linkProgram(w), t.debug.checkShaderErrors) {
                var I = u.getProgramInfoLog(w).trim(),
                    D = u.getShaderInfoLog(C).trim(),
                    N = u.getShaderInfoLog(O).trim(),
                    B = !0,
                    H = !0;
                if (!1 === u.getProgramParameter(w, 35714)) {
                    B = !1;
                    var F = Lo(u, C, "vertex"),
                        k = Lo(u, O, "fragment");
                    console.error("THREE.WebGLProgram: shader error: ", u.getError(), "35715", u.getProgramParameter(w, 35715), "gl.getProgramInfoLog", I, F, k)
                } else "" !== I ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", I) : "" !== D && "" !== N || (H = !1);
                H && (this.diagnostics = {
                    runnable: B,
                    material: i,
                    programLog: I,
                    vertexShader: {
                        log: D,
                        prefix: l
                    },
                    fragmentShader: {
                        log: N,
                        prefix: h
                    }
                })
            }
            return u.deleteShader(C), u.deleteShader(O), this.getUniforms = function() {
                return void 0 === A && (A = new Eo(u, w)), A
            }, this.getAttributes = function() {
                return void 0 === P && (P = function(t, e) {
                    for (var n = {}, i = t.getProgramParameter(e, 35721), r = 0; r < i; r++) {
                        var o = t.getActiveAttrib(e, r),
                            a = o.name;
                        n[a] = t.getAttribLocation(e, a)
                    }
                    return n
                }(u, w)), P
            }, this.destroy = function() {
                u.deleteProgram(w), this.program = void 0
            }, this.name = s.name, this.id = Ao++, this.code = n, this.usedTimes = 1, this.program = w, this.vertexShader = C, this.fragmentShader = O, this.numMultiviewViews = T, this
        }

        function Go(t, e, n) {
            var i = [],
                r = {
                    MeshDepthMaterial: "depth",
                    MeshDistanceMaterial: "distanceRGBA",
                    MeshNormalMaterial: "normal",
                    MeshBasicMaterial: "basic",
                    MeshLambertMaterial: "lambert",
                    MeshPhongMaterial: "phong",
                    MeshToonMaterial: "phong",
                    MeshStandardMaterial: "physical",
                    MeshPhysicalMaterial: "physical",
                    MeshMatcapMaterial: "matcap",
                    LineBasicMaterial: "basic",
                    LineDashedMaterial: "dashed",
                    PointsMaterial: "points",
                    ShadowMaterial: "shadow",
                    SpriteMaterial: "sprite"
                },
                o = ["precision", "supportsVertexTextures", "instancing", "map", "mapEncoding", "matcap", "matcapEncoding", "envMap", "envMapMode", "envMapEncoding", "lightMap", "aoMap", "emissiveMap", "emissiveMapEncoding", "bumpMap", "normalMap", "objectSpaceNormalMap", "tangentSpaceNormalMap", "clearcoatNormalMap", "displacementMap", "specularMap", "roughnessMap", "metalnessMap", "gradientMap", "alphaMap", "combine", "vertexColors", "vertexTangents", "fog", "useFog", "fogExp2", "flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets", "morphNormals", "maxMorphTargets", "maxMorphNormals", "premultipliedAlpha", "numDirLights", "numPointLights", "numSpotLights", "numHemiLights", "numRectAreaLights", "shadowMapEnabled", "shadowMapType", "toneMapping", "physicallyCorrectLights", "alphaTest", "doubleSided", "flipSided", "numClippingPlanes", "numClipIntersection", "depthPacking", "dithering", "sheen"];

            function a(t, e) {
                var n;
                return t ? t.isTexture ? n = t.encoding : t.isWebGLRenderTarget && (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."), n = t.texture.encoding) : n = le, n === le && e && (n = ue), n
            }
            this.getParameters = function(e, i, o, s, h, u, p) {
                var d = r[e.type],
                    f = p.isSkinnedMesh ? function(t) {
                        var e = t.skeleton.bones;
                        if (n.floatVertexTextures) return 1024;
                        var i = n.maxVertexUniforms,
                            r = Math.floor((i - 20) / 4),
                            o = Math.min(r, e.length);
                        return o < e.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + e.length + " bones. This GPU supports " + o + "."), 0) : o
                    }(p) : 0,
                    m = n.precision;
                null !== e.precision && (m = n.getMaxPrecision(e.precision)) !== e.precision && console.warn("THREE.WebGLProgram.getParameters:", e.precision, "not supported, using", m, "instead.");
                var v = t.getRenderTarget(),
                    g = {
                        isWebGL2: n.isWebGL2,
                        shaderID: d,
                        precision: m,
                        instancing: !0 === p.isInstancedMesh,
                        supportsVertexTextures: n.vertexTextures,
                        outputEncoding: a(v ? v.texture : null, t.gammaOutput),
                        map: !!e.map,
                        mapEncoding: a(e.map, t.gammaInput),
                        matcap: !!e.matcap,
                        matcapEncoding: a(e.matcap, t.gammaInput),
                        envMap: !!e.envMap,
                        envMapMode: e.envMap && e.envMap.mapping,
                        envMapEncoding: a(e.envMap, t.gammaInput),
                        envMapCubeUV: !!e.envMap && (e.envMap.mapping === it || e.envMap.mapping === rt),
                        lightMap: !!e.lightMap,
                        aoMap: !!e.aoMap,
                        emissiveMap: !!e.emissiveMap,
                        emissiveMapEncoding: a(e.emissiveMap, t.gammaInput),
                        bumpMap: !!e.bumpMap,
                        normalMap: !!e.normalMap,
                        objectSpaceNormalMap: e.normalMapType === xe,
                        tangentSpaceNormalMap: e.normalMapType === _e,
                        clearcoatNormalMap: !!e.clearcoatNormalMap,
                        displacementMap: !!e.displacementMap,
                        roughnessMap: !!e.roughnessMap,
                        metalnessMap: !!e.metalnessMap,
                        specularMap: !!e.specularMap,
                        alphaMap: !!e.alphaMap,
                        gradientMap: !!e.gradientMap,
                        sheen: !!e.sheen,
                        combine: e.combine,
                        vertexTangents: e.normalMap && e.vertexTangents,
                        vertexColors: e.vertexColors,
                        vertexUvs: !!(e.map || e.bumpMap || e.normalMap || e.specularMap || e.alphaMap || e.emissiveMap || e.roughnessMap || e.metalnessMap || e.clearcoatNormalMap),
                        fog: !!s,
                        useFog: e.fog,
                        fogExp2: s && s.isFogExp2,
                        flatShading: e.flatShading,
                        sizeAttenuation: e.sizeAttenuation,
                        logarithmicDepthBuffer: n.logarithmicDepthBuffer,
                        skinning: e.skinning && f > 0,
                        maxBones: f,
                        useVertexTexture: n.floatVertexTextures,
                        morphTargets: e.morphTargets,
                        morphNormals: e.morphNormals,
                        maxMorphTargets: t.maxMorphTargets,
                        maxMorphNormals: t.maxMorphNormals,
                        numDirLights: i.directional.length,
                        numPointLights: i.point.length,
                        numSpotLights: i.spot.length,
                        numRectAreaLights: i.rectArea.length,
                        numHemiLights: i.hemi.length,
                        numDirLightShadows: i.directionalShadowMap.length,
                        numPointLightShadows: i.pointShadowMap.length,
                        numSpotLightShadows: i.spotShadowMap.length,
                        numClippingPlanes: h,
                        numClipIntersection: u,
                        dithering: e.dithering,
                        shadowMapEnabled: t.shadowMap.enabled && o.length > 0,
                        shadowMapType: t.shadowMap.type,
                        toneMapping: e.toneMapped ? t.toneMapping : X,
                        physicallyCorrectLights: t.physicallyCorrectLights,
                        premultipliedAlpha: e.premultipliedAlpha,
                        alphaTest: e.alphaTest,
                        doubleSided: e.side === l,
                        flipSided: e.side === c,
                        depthPacking: void 0 !== e.depthPacking && e.depthPacking
                    };
                return g
            }, this.getProgramCode = function(e, n) {
                var i = [];
                if (n.shaderID ? i.push(n.shaderID) : (i.push(e.fragmentShader), i.push(e.vertexShader)), void 0 !== e.defines)
                    for (var r in e.defines) i.push(r), i.push(e.defines[r]);
                for (var a = 0; a < o.length; a++) i.push(n[o[a]]);
                return i.push(e.onBeforeCompile.toString()), i.push(t.gammaOutput), i.push(t.gammaFactor), i.join()
            }, this.acquireProgram = function(n, r, o, a) {
                for (var s, c = 0, l = i.length; c < l; c++) {
                    var h = i[c];
                    if (h.code === a) {
                        ++(s = h).usedTimes;
                        break
                    }
                }
                return void 0 === s && (s = new zo(t, e, a, n, r, o), i.push(s)), s
            }, this.releaseProgram = function(t) {
                if (0 == --t.usedTimes) {
                    var e = i.indexOf(t);
                    i[e] = i[i.length - 1], i.pop(), t.destroy()
                }
            }, this.programs = i
        }

        function jo(t, e) {
            return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program !== e.program ? t.program.id - e.program.id : t.material.id !== e.material.id ? t.material.id - e.material.id : t.z !== e.z ? t.z - e.z : t.id - e.id
        }

        function Vo(t, e) {
            return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : t.id - e.id
        }

        function Wo() {
            var t = [],
                e = 0,
                n = [],
                i = [],
                r = {
                    id: -1
                };

            function o(n, i, o, a, s, c) {
                var l = t[e];
                return void 0 === l ? (l = {
                    id: n.id,
                    object: n,
                    geometry: i,
                    material: o,
                    program: o.program || r,
                    groupOrder: a,
                    renderOrder: n.renderOrder,
                    z: s,
                    group: c
                }, t[e] = l) : (l.id = n.id, l.object = n, l.geometry = i, l.material = o, l.program = o.program || r, l.groupOrder = a, l.renderOrder = n.renderOrder, l.z = s, l.group = c), e++, l
            }
            return {
                opaque: n,
                transparent: i,
                init: function() {
                    e = 0, n.length = 0, i.length = 0
                },
                push: function(t, e, r, a, s, c) {
                    var l = o(t, e, r, a, s, c);
                    (!0 === r.transparent ? i : n).push(l)
                },
                unshift: function(t, e, r, a, s, c) {
                    var l = o(t, e, r, a, s, c);
                    (!0 === r.transparent ? i : n).unshift(l)
                },
                sort: function() {
                    n.length > 1 && n.sort(jo), i.length > 1 && i.sort(Vo)
                }
            }
        }
        var Xo = 0;

        function qo(t, e) {
            return (e.castShadow ? 1 : 0) - (t.castShadow ? 1 : 0)
        }

        function Yo() {
            for (var t = new function() {
                    var t = {};
                    return {
                        get: function(e) {
                            if (void 0 !== t[e.id]) return t[e.id];
                            var n;
                            switch (e.type) {
                                case "DirectionalLight":
                                    n = {
                                        direction: new Ce,
                                        color: new $n,
                                        shadow: !1,
                                        shadowBias: 0,
                                        shadowRadius: 1,
                                        shadowMapSize: new Ae
                                    };
                                    break;
                                case "SpotLight":
                                    n = {
                                        position: new Ce,
                                        direction: new Ce,
                                        color: new $n,
                                        distance: 0,
                                        coneCos: 0,
                                        penumbraCos: 0,
                                        decay: 0,
                                        shadow: !1,
                                        shadowBias: 0,
                                        shadowRadius: 1,
                                        shadowMapSize: new Ae
                                    };
                                    break;
                                case "PointLight":
                                    n = {
                                        position: new Ce,
                                        color: new $n,
                                        distance: 0,
                                        decay: 0,
                                        shadow: !1,
                                        shadowBias: 0,
                                        shadowRadius: 1,
                                        shadowMapSize: new Ae,
                                        shadowCameraNear: 1,
                                        shadowCameraFar: 1e3
                                    };
                                    break;
                                case "HemisphereLight":
                                    n = {
                                        direction: new Ce,
                                        skyColor: new $n,
                                        groundColor: new $n
                                    };
                                    break;
                                case "RectAreaLight":
                                    n = {
                                        color: new $n,
                                        position: new Ce,
                                        halfWidth: new Ce,
                                        halfHeight: new Ce
                                    }
                            }
                            return t[e.id] = n, n
                        }
                    }
                }, e = {
                    version: 0,
                    hash: {
                        directionalLength: -1,
                        pointLength: -1,
                        spotLength: -1,
                        rectAreaLength: -1,
                        hemiLength: -1,
                        numDirectionalShadows: -1,
                        numPointShadows: -1,
                        numSpotShadows: -1
                    },
                    ambient: [0, 0, 0],
                    probe: [],
                    directional: [],
                    directionalShadowMap: [],
                    directionalShadowMatrix: [],
                    spot: [],
                    spotShadowMap: [],
                    spotShadowMatrix: [],
                    rectArea: [],
                    point: [],
                    pointShadowMap: [],
                    pointShadowMatrix: [],
                    hemi: [],
                    numDirectionalShadows: -1,
                    numPointShadows: -1,
                    numSpotShadows: -1
                }, n = 0; n < 9; n++) e.probe.push(new Ce);
            var i = new Ce,
                r = new Ye,
                o = new Ye;
            return {
                setup: function(n, a, s) {
                    for (var c = 0, l = 0, h = 0, u = 0; u < 9; u++) e.probe[u].set(0, 0, 0);
                    var p = 0,
                        d = 0,
                        f = 0,
                        m = 0,
                        v = 0,
                        g = 0,
                        y = 0,
                        _ = 0,
                        x = s.matrixWorldInverse;
                    n.sort(qo);
                    for (var u = 0, b = n.length; u < b; u++) {
                        var w = n[u],
                            M = w.color,
                            T = w.intensity,
                            E = w.distance,
                            S = w.shadow && w.shadow.map ? w.shadow.map.texture : null;
                        if (w.isAmbientLight) c += M.r * T, l += M.g * T, h += M.b * T;
                        else if (w.isLightProbe)
                            for (var A = 0; A < 9; A++) e.probe[A].addScaledVector(w.sh.coefficients[A], T);
                        else if (w.isDirectionalLight) {
                            var P = t.get(w);
                            if (P.color.copy(w.color).multiplyScalar(w.intensity), P.direction.setFromMatrixPosition(w.matrixWorld), i.setFromMatrixPosition(w.target.matrixWorld), P.direction.sub(i), P.direction.transformDirection(x), P.shadow = w.castShadow, w.castShadow) {
                                var L = w.shadow;
                                P.shadowBias = L.bias, P.shadowRadius = L.radius, P.shadowMapSize = L.mapSize, e.directionalShadowMap[p] = S, e.directionalShadowMatrix[p] = w.shadow.matrix, g++
                            }
                            e.directional[p] = P, p++
                        } else if (w.isSpotLight) {
                            var P = t.get(w);
                            if (P.position.setFromMatrixPosition(w.matrixWorld), P.position.applyMatrix4(x), P.color.copy(M).multiplyScalar(T), P.distance = E, P.direction.setFromMatrixPosition(w.matrixWorld), i.setFromMatrixPosition(w.target.matrixWorld), P.direction.sub(i), P.direction.transformDirection(x), P.coneCos = Math.cos(w.angle), P.penumbraCos = Math.cos(w.angle * (1 - w.penumbra)), P.decay = w.decay, P.shadow = w.castShadow, w.castShadow) {
                                var L = w.shadow;
                                P.shadowBias = L.bias, P.shadowRadius = L.radius, P.shadowMapSize = L.mapSize, e.spotShadowMap[f] = S, e.spotShadowMatrix[f] = w.shadow.matrix, _++
                            }
                            e.spot[f] = P, f++
                        } else if (w.isRectAreaLight) {
                            var P = t.get(w);
                            P.color.copy(M).multiplyScalar(T), P.position.setFromMatrixPosition(w.matrixWorld), P.position.applyMatrix4(x), o.identity(), r.copy(w.matrixWorld), r.premultiply(x), o.extractRotation(r), P.halfWidth.set(.5 * w.width, 0, 0), P.halfHeight.set(0, .5 * w.height, 0), P.halfWidth.applyMatrix4(o), P.halfHeight.applyMatrix4(o), e.rectArea[m] = P, m++
                        } else if (w.isPointLight) {
                            var P = t.get(w);
                            if (P.position.setFromMatrixPosition(w.matrixWorld), P.position.applyMatrix4(x), P.color.copy(w.color).multiplyScalar(w.intensity), P.distance = w.distance, P.decay = w.decay, P.shadow = w.castShadow, w.castShadow) {
                                var L = w.shadow;
                                P.shadowBias = L.bias, P.shadowRadius = L.radius, P.shadowMapSize = L.mapSize, P.shadowCameraNear = L.camera.near, P.shadowCameraFar = L.camera.far, e.pointShadowMap[d] = S, e.pointShadowMatrix[d] = w.shadow.matrix, y++
                            }
                            e.point[d] = P, d++
                        } else if (w.isHemisphereLight) {
                            var P = t.get(w);
                            P.direction.setFromMatrixPosition(w.matrixWorld), P.direction.transformDirection(x), P.direction.normalize(), P.skyColor.copy(w.color).multiplyScalar(T), P.groundColor.copy(w.groundColor).multiplyScalar(T), e.hemi[v] = P, v++
                        }
                    }
                    e.ambient[0] = c, e.ambient[1] = l, e.ambient[2] = h;
                    var R = e.hash;
                    R.directionalLength === p && R.pointLength === d && R.spotLength === f && R.rectAreaLength === m && R.hemiLength === v && R.numDirectionalShadows === g && R.numPointShadows === y && R.numSpotShadows === _ || (e.directional.length = p, e.spot.length = f, e.rectArea.length = m, e.point.length = d, e.hemi.length = v, e.directionalShadowMap.length = g, e.pointShadowMap.length = y, e.spotShadowMap.length = _, e.directionalShadowMatrix.length = g, e.pointShadowMatrix.length = y, e.spotShadowMatrix.length = _, R.directionalLength = p, R.pointLength = d, R.spotLength = f, R.rectAreaLength = m, R.hemiLength = v, R.numDirectionalShadows = g, R.numPointShadows = y, R.numSpotShadows = _, e.version = Xo++)
                },
                state: e
            }
        }

        function Zo() {
            var t = new Yo,
                e = [],
                n = [],
                i = {
                    lightsArray: e,
                    shadowsArray: n,
                    lights: t
                };
            return {
                init: function() {
                    e.length = 0, n.length = 0
                },
                state: i,
                setupLights: function(i) {
                    t.setup(e, n, i)
                },
                pushLight: function(t) {
                    e.push(t)
                },
                pushShadow: function(t) {
                    n.push(t)
                }
            }
        }

        function Jo(t) {
            oi.call(this), this.type = "MeshDepthMaterial", this.depthPacking = ge, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.setValues(t)
        }

        function Ko(t) {
            oi.call(this), this.type = "MeshDistanceMaterial", this.referencePosition = new Ce, this.nearDistance = 1, this.farDistance = 1e3, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.fog = !1, this.setValues(t)
        }
        Jo.prototype = Object.create(oi.prototype), Jo.prototype.constructor = Jo, Jo.prototype.isMeshDepthMaterial = !0, Jo.prototype.copy = function(t) {
            return oi.prototype.copy.call(this, t), this.depthPacking = t.depthPacking, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this
        }, Ko.prototype = Object.create(oi.prototype), Ko.prototype.constructor = Ko, Ko.prototype.isMeshDistanceMaterial = !0, Ko.prototype.copy = function(t) {
            return oi.prototype.copy.call(this, t), this.referencePosition.copy(t.referencePosition), this.nearDistance = t.nearDistance, this.farDistance = t.farDistance, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this
        };
        var Qo = "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n  float mean = 0.0;\n  float squared_mean = 0.0;\n  \n\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy  ) / resolution ) );\n  for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {\n    #ifdef HORIZONAL_PASS\n      vec2 distribution = decodeHalfRGBA ( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );\n      mean += distribution.x;\n      squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n    #else\n      float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0,  i )  * radius ) / resolution ) );\n      mean += depth;\n      squared_mean += depth * depth;\n    #endif\n  }\n  mean = mean * HALF_SAMPLE_RATE;\n  squared_mean = squared_mean * HALF_SAMPLE_RATE;\n  float std_dev = pow( squared_mean - mean * mean, 0.5 );\n  gl_FragColor = encodeHalfRGBA( vec2( mean, std_dev ) );\n}",
            $o = "void main() {\n\tgl_Position = vec4( position, 1.0 );\n}";

        function ta(t, e, n) {
            var i = new _r,
                o = new Ae,
                h = new Ae,
                u = new Fe,
                p = 1,
                f = 2,
                m = 1 + (p | f),
                v = new Array(m),
                g = new Array(m),
                y = {},
                _ = {
                    0: c,
                    1: s,
                    2: l
                },
                x = new or({
                    defines: {
                        SAMPLE_RATE: .25,
                        HALF_SAMPLE_RATE: 1 / 8
                    },
                    uniforms: {
                        shadow_pass: {
                            value: null
                        },
                        resolution: {
                            value: new Ae
                        },
                        radius: {
                            value: 4
                        }
                    },
                    vertexShader: $o,
                    fragmentShader: Qo
                }),
                b = x.clone();
            b.defines.HORIZONAL_PASS = 1;
            var w = new Si;
            w.addAttribute("position", new si(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]), 3));
            for (var M = new Vi(w, x), T = 0; T !== m; ++T) {
                var E = 0 != (T & p),
                    S = 0 != (T & f),
                    A = new Jo({
                        depthPacking: ye,
                        morphTargets: E,
                        skinning: S
                    });
                v[T] = A;
                var P = new Ko({
                    morphTargets: E,
                    skinning: S
                });
                g[T] = P
            }
            var L = this;

            function R(n, i) {
                var r = e.update(M);
                x.uniforms.shadow_pass.value = n.map.texture, x.uniforms.resolution.value = n.mapSize, x.uniforms.radius.value = n.radius, t.setRenderTarget(n.mapPass), t.clear(), t.renderBufferDirect(i, null, r, x, M, null), b.uniforms.shadow_pass.value = n.mapPass.texture, b.uniforms.resolution.value = n.mapSize, b.uniforms.radius.value = n.radius, t.setRenderTarget(n.map), t.clear(), t.renderBufferDirect(i, null, r, b, M, null)
            }

            function C(e, n, i, r, o, s) {
                var c = e.geometry,
                    l = null,
                    h = v,
                    u = e.customDepthMaterial;
                if (i.isPointLight && (h = g, u = e.customDistanceMaterial), u) l = u;
                else {
                    var d = !1;
                    n.morphTargets && (c && c.isBufferGeometry ? d = c.morphAttributes && c.morphAttributes.position && c.morphAttributes.position.length > 0 : c && c.isGeometry && (d = c.morphTargets && c.morphTargets.length > 0)), e.isSkinnedMesh && !1 === n.skinning && console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:", e);
                    var m = e.isSkinnedMesh && n.skinning,
                        x = 0;
                    d && (x |= p), m && (x |= f), l = h[x]
                }
                if (t.localClippingEnabled && !0 === n.clipShadows && 0 !== n.clippingPlanes.length) {
                    var b = l.uuid,
                        w = n.uuid,
                        M = y[b];
                    void 0 === M && (M = {}, y[b] = M);
                    var T = M[w];
                    void 0 === T && (T = l.clone(), M[w] = T), l = T
                }
                return l.visible = n.visible, l.wireframe = n.wireframe, l.side = s === a ? null != n.shadowSide ? n.shadowSide : n.side : null != n.shadowSide ? n.shadowSide : _[n.side], l.clipShadows = n.clipShadows, l.clippingPlanes = n.clippingPlanes, l.clipIntersection = n.clipIntersection, l.wireframeLinewidth = n.wireframeLinewidth, l.linewidth = n.linewidth, i.isPointLight && l.isMeshDistanceMaterial && (l.referencePosition.setFromMatrixPosition(i.matrixWorld), l.nearDistance = r, l.farDistance = o), l
            }

            function O(n, r, o, s, c) {
                if (!1 !== n.visible) {
                    var l = n.layers.test(r.layers);
                    if (l && (n.isMesh || n.isLine || n.isPoints) && (n.castShadow || n.receiveShadow && c === a) && (!n.frustumCulled || i.intersectsObject(n))) {
                        n.modelViewMatrix.multiplyMatrices(o.matrixWorldInverse, n.matrixWorld);
                        var h = e.update(n),
                            u = n.material;
                        if (Array.isArray(u))
                            for (var p = h.groups, d = 0, f = p.length; d < f; d++) {
                                var m = p[d],
                                    v = u[m.materialIndex];
                                if (v && v.visible) {
                                    var g = C(n, v, s, o.near, o.far, c);
                                    t.renderBufferDirect(o, null, h, g, n, m)
                                }
                            } else if (u.visible) {
                                var g = C(n, u, s, o.near, o.far, c);
                                t.renderBufferDirect(o, null, h, g, n, null)
                            }
                    }
                    for (var y = n.children, _ = 0, x = y.length; _ < x; _++) O(y[_], r, o, s, c)
                }
            }
            this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = r, this.render = function(e, r, s) {
                if (!1 !== L.enabled && (!1 !== L.autoUpdate || !1 !== L.needsUpdate) && 0 !== e.length) {
                    var c = t.getRenderTarget(),
                        l = t.getActiveCubeFace(),
                        p = t.getActiveMipmapLevel(),
                        f = t.state;
                    f.setBlending(d), f.buffers.color.setClear(1, 1, 1, 1), f.buffers.depth.setTest(!0), f.setScissorTest(!1);
                    for (var m = 0, v = e.length; m < v; m++) {
                        var g = e[m],
                            y = g.shadow;
                        if (void 0 !== y) {
                            o.copy(y.mapSize);
                            var _ = y.getFrameExtents();
                            if (o.multiply(_), h.copy(y.mapSize), (o.x > n || o.y > n) && (console.warn("THREE.WebGLShadowMap:", g, "has shadow exceeding max texture size, reducing"), o.x > n && (h.x = Math.floor(n / _.x), o.x = h.x * _.x, y.mapSize.x = h.x), o.y > n && (h.y = Math.floor(n / _.y), o.y = h.y * _.y, y.mapSize.y = h.y)), null === y.map && !y.isPointLightShadow && this.type === a) {
                                var x = {
                                    minFilter: ut,
                                    magFilter: ut,
                                    format: Pt
                                };
                                y.map = new ke(o.x, o.y, x), y.map.texture.name = g.name + ".shadowMap", y.mapPass = new ke(o.x, o.y, x), y.camera.updateProjectionMatrix()
                            }
                            if (null === y.map) {
                                var x = {
                                    minFilter: ct,
                                    magFilter: ct,
                                    format: Pt
                                };
                                y.map = new ke(o.x, o.y, x), y.map.texture.name = g.name + ".shadowMap", y.camera.updateProjectionMatrix()
                            }
                            t.setRenderTarget(y.map), t.clear();
                            for (var b = y.getViewportCount(), w = 0; w < b; w++) {
                                var M = y.getViewport(w);
                                u.set(h.x * M.x, h.y * M.y, h.x * M.z, h.y * M.w), f.viewport(u), y.updateMatrices(g, s, w), i = y.getFrustum(), O(r, s, y.camera, g, this.type)
                            }
                            y.isPointLightShadow || this.type !== a || R(y, s)
                        } else console.warn("THREE.WebGLShadowMap:", g, "has no shadow.")
                    }
                    L.needsUpdate = !1, t.setRenderTarget(c, l, p)
                }
            }
        }

        function ea(t, e, n, i, r, o, a) {
            var s, c = new WeakMap,
                l = "undefined" != typeof OffscreenCanvas && null !== new OffscreenCanvas(1, 1).getContext("2d");

            function h(t, e) {
                return l ? new OffscreenCanvas(t, e) : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")
            }

            function u(t, e, n, i) {
                var r = 1;
                if ((t.width > i || t.height > i) && (r = i / Math.max(t.width, t.height)), r < 1 || !0 === e) {
                    if ("undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap) {
                        var o = e ? Se.floorPowerOfTwo : Math.floor,
                            a = o(r * t.width),
                            c = o(r * t.height);
                        void 0 === s && (s = h(a, c));
                        var l = n ? h(a, c) : s;
                        l.width = a, l.height = c;
                        var u = l.getContext("2d");
                        return u.drawImage(t, 0, 0, a, c), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + t.width + "x" + t.height + ") to (" + a + "x" + c + ")."), l
                    }
                    return "data" in t && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + t.width + "x" + t.height + ")."), t
                }
                return t
            }

            function p(t) {
                return Se.isPowerOfTwo(t.width) && Se.isPowerOfTwo(t.height)
            }

            function d(t, e) {
                return t.generateMipmaps && e && t.minFilter !== ct && t.minFilter !== ut
            }

            function f(e, n, r, o) {
                t.generateMipmap(e);
                var a = i.get(n);
                a.__maxMipLevel = Math.log(Math.max(r, o)) * Math.LOG2E
            }

            function m(t, n) {
                if (!r.isWebGL2) return t;
                var i = t;
                return 6403 === t && (5126 === n && (i = 33326), 5131 === n && (i = 33325), 5121 === n && (i = 33321)), 6407 === t && (5126 === n && (i = 34837), 5131 === n && (i = 34843), 5121 === n && (i = 32849)), 6408 === t && (5126 === n && (i = 34836), 5131 === n && (i = 34842), 5121 === n && (i = 32856)), 33325 === i || 33326 === i || 34842 === i || 34836 === i ? e.get("EXT_color_buffer_float") : 34843 !== i && 34837 !== i || console.warn("THREE.WebGLRenderer: Floating point textures with RGB format not supported. Please use RGBA instead."), i
            }

            function v(t) {
                return t === ct || t === lt || t === ht ? 9728 : 9729
            }

            function g(e) {
                var n = e.target;
                n.removeEventListener("dispose", g),
                    function(e) {
                        var n = i.get(e);
                        void 0 !== n.__webglInit && (t.deleteTexture(n.__webglTexture), i.remove(e))
                    }(n), n.isVideoTexture && c.delete(n), a.memory.textures--
            }

            function y(e) {
                var n = e.target;
                n.removeEventListener("dispose", y),
                    function(e) {
                        var n = i.get(e),
                            r = i.get(e.texture);
                        if (e) {
                            if (void 0 !== r.__webglTexture && t.deleteTexture(r.__webglTexture), e.depthTexture && e.depthTexture.dispose(), e.isWebGLRenderTargetCube)
                                for (var o = 0; o < 6; o++) t.deleteFramebuffer(n.__webglFramebuffer[o]), n.__webglDepthbuffer && t.deleteRenderbuffer(n.__webglDepthbuffer[o]);
                            else t.deleteFramebuffer(n.__webglFramebuffer), n.__webglDepthbuffer && t.deleteRenderbuffer(n.__webglDepthbuffer);
                            if (e.isWebGLMultiviewRenderTarget) {
                                t.deleteTexture(n.__webglColorTexture), t.deleteTexture(n.__webglDepthStencilTexture), a.memory.textures -= 2;
                                for (var o = 0, s = n.__webglViewFramebuffers.length; o < s; o++) t.deleteFramebuffer(n.__webglViewFramebuffers[o])
                            }
                            i.remove(e.texture), i.remove(e)
                        }
                    }(n), a.memory.textures--
            }
            var _ = 0;

            function x(t, e) {
                var r = i.get(t);
                if (t.isVideoTexture && function(t) {
                        var e = a.render.frame;
                        c.get(t) !== e && (c.set(t, e), t.update())
                    }(t), t.version > 0 && r.__version !== t.version) {
                    var o = t.image;
                    if (void 0 === o) console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");
                    else {
                        if (!1 !== o.complete) return void E(r, t, e);
                        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")
                    }
                }
                n.activeTexture(33984 + e), n.bindTexture(3553, r.__webglTexture)
            }

            function b(e, a) {
                if (6 === e.image.length) {
                    var s = i.get(e);
                    if (e.version > 0 && s.__version !== e.version) {
                        T(s, e), n.activeTexture(33984 + a), n.bindTexture(34067, s.__webglTexture), t.pixelStorei(37440, e.flipY);
                        for (var c = e && e.isCompressedTexture, l = e.image[0] && e.image[0].isDataTexture, h = [], v = 0; v < 6; v++) h[v] = c || l ? l ? e.image[v].image : e.image[v] : u(e.image[v], !1, !0, r.maxCubemapSize);
                        var g, y = h[0],
                            _ = p(y) || r.isWebGL2,
                            x = o.convert(e.format),
                            b = o.convert(e.type),
                            w = m(x, b);
                        if (M(34067, e, _), c) {
                            for (var v = 0; v < 6; v++) {
                                g = h[v].mipmaps;
                                for (var E = 0; E < g.length; E++) {
                                    var S = g[E];
                                    e.format !== Pt && e.format !== At ? n.getCompressedTextureFormats().indexOf(x) > -1 ? n.compressedTexImage2D(34069 + v, E, w, S.width, S.height, 0, S.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : n.texImage2D(34069 + v, E, w, S.width, S.height, 0, x, b, S.data)
                                }
                            }
                            s.__maxMipLevel = g.length - 1
                        } else {
                            g = e.mipmaps;
                            for (var v = 0; v < 6; v++)
                                if (l) {
                                    n.texImage2D(34069 + v, 0, w, h[v].width, h[v].height, 0, x, b, h[v].data);
                                    for (var E = 0; E < g.length; E++) {
                                        var S = g[E],
                                            A = S.image[v].image;
                                        n.texImage2D(34069 + v, E + 1, w, A.width, A.height, 0, x, b, A.data)
                                    }
                                } else {
                                    n.texImage2D(34069 + v, 0, w, x, b, h[v]);
                                    for (var E = 0; E < g.length; E++) {
                                        var S = g[E];
                                        n.texImage2D(34069 + v, E + 1, w, x, b, S.image[v])
                                    }
                                } s.__maxMipLevel = g.length
                        }
                        d(e, _) && f(34067, e, y.width, y.height), s.__version = e.version, e.onUpdate && e.onUpdate(e)
                    } else n.activeTexture(33984 + a), n.bindTexture(34067, s.__webglTexture)
                }
            }

            function w(t, e) {
                n.activeTexture(33984 + e), n.bindTexture(34067, i.get(t).__webglTexture)
            }

            function M(n, a, s) {
                var c;
                if (s ? (t.texParameteri(n, 10242, o.convert(a.wrapS)), t.texParameteri(n, 10243, o.convert(a.wrapT)), 32879 !== n && 35866 !== n || t.texParameteri(n, 32882, o.convert(a.wrapR)), t.texParameteri(n, 10240, o.convert(a.magFilter)), t.texParameteri(n, 10241, o.convert(a.minFilter))) : (t.texParameteri(n, 10242, 33071), t.texParameteri(n, 10243, 33071), 32879 !== n && 35866 !== n || t.texParameteri(n, 32882, 33071), a.wrapS === at && a.wrapT === at || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), t.texParameteri(n, 10240, v(a.magFilter)), t.texParameteri(n, 10241, v(a.minFilter)), a.minFilter !== ct && a.minFilter !== ut && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), c = e.get("EXT_texture_filter_anisotropic")) {
                    if (a.type === xt && null === e.get("OES_texture_float_linear")) return;
                    if (a.type === bt && null === (r.isWebGL2 || e.get("OES_texture_half_float_linear"))) return;
                    (a.anisotropy > 1 || i.get(a).__currentAnisotropy) && (t.texParameterf(n, c.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(a.anisotropy, r.getMaxAnisotropy())), i.get(a).__currentAnisotropy = a.anisotropy)
                }
            }

            function T(e, n) {
                void 0 === e.__webglInit && (e.__webglInit = !0, n.addEventListener("dispose", g), e.__webglTexture = t.createTexture(), a.memory.textures++)
            }

            function E(e, i, a) {
                var s = 3553;
                i.isDataTexture2DArray && (s = 35866), i.isDataTexture3D && (s = 32879), T(e, i), n.activeTexture(33984 + a), n.bindTexture(s, e.__webglTexture), t.pixelStorei(37440, i.flipY), t.pixelStorei(37441, i.premultiplyAlpha), t.pixelStorei(3317, i.unpackAlignment);
                var c = function(t) {
                        return !r.isWebGL2 && (t.wrapS !== at || t.wrapT !== at || t.minFilter !== ct && t.minFilter !== ut)
                    }(i) && !1 === p(i.image),
                    l = u(i.image, c, !1, r.maxTextureSize),
                    h = p(l) || r.isWebGL2,
                    v = o.convert(i.format),
                    g = o.convert(i.type),
                    y = m(v, g);
                M(s, i, h);
                var _, x = i.mipmaps;
                if (i.isDepthTexture) {
                    if (y = 6402, i.type === xt) {
                        if (!r.isWebGL2) throw new Error("Float Depth Texture only supported in WebGL2.0");
                        y = 36012
                    } else r.isWebGL2 && (y = 33189);
                    i.format === Ot && 6402 === y && i.type !== gt && i.type !== _t && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), i.type = gt, g = o.convert(i.type)), i.format === It && (y = 34041, i.type !== Et && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), i.type = Et, g = o.convert(i.type))), n.texImage2D(3553, 0, y, l.width, l.height, 0, v, g, null)
                } else if (i.isDataTexture)
                    if (x.length > 0 && h) {
                        for (var b = 0, w = x.length; b < w; b++) _ = x[b], n.texImage2D(3553, b, y, _.width, _.height, 0, v, g, _.data);
                        i.generateMipmaps = !1, e.__maxMipLevel = x.length - 1
                    } else n.texImage2D(3553, 0, y, l.width, l.height, 0, v, g, l.data), e.__maxMipLevel = 0;
                else if (i.isCompressedTexture) {
                    for (var b = 0, w = x.length; b < w; b++) _ = x[b], i.format !== Pt && i.format !== At ? n.getCompressedTextureFormats().indexOf(v) > -1 ? n.compressedTexImage2D(3553, b, y, _.width, _.height, 0, _.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : n.texImage2D(3553, b, y, _.width, _.height, 0, v, g, _.data);
                    e.__maxMipLevel = x.length - 1
                } else if (i.isDataTexture2DArray) n.texImage3D(35866, 0, y, l.width, l.height, l.depth, 0, v, g, l.data), e.__maxMipLevel = 0;
                else if (i.isDataTexture3D) n.texImage3D(32879, 0, y, l.width, l.height, l.depth, 0, v, g, l.data), e.__maxMipLevel = 0;
                else if (x.length > 0 && h) {
                    for (var b = 0, w = x.length; b < w; b++) _ = x[b], n.texImage2D(3553, b, y, v, g, _);
                    i.generateMipmaps = !1, e.__maxMipLevel = x.length - 1
                } else n.texImage2D(3553, 0, y, v, g, l), e.__maxMipLevel = 0;
                d(i, h) && f(3553, i, l.width, l.height), e.__version = i.version, i.onUpdate && i.onUpdate(i)
            }

            function S(e, r, a, s) {
                var c = o.convert(r.texture.format),
                    l = o.convert(r.texture.type),
                    h = m(c, l);
                n.texImage2D(s, 0, h, r.width, r.height, 0, c, l, null), t.bindFramebuffer(36160, e), t.framebufferTexture2D(36160, a, s, i.get(r.texture).__webglTexture, 0), t.bindFramebuffer(36160, null)
            }

            function A(e, n, i) {
                if (t.bindRenderbuffer(36161, e), n.depthBuffer && !n.stencilBuffer) {
                    if (i) {
                        var r = L(n);
                        t.renderbufferStorageMultisample(36161, r, 33189, n.width, n.height)
                    } else t.renderbufferStorage(36161, 33189, n.width, n.height);
                    t.framebufferRenderbuffer(36160, 36096, 36161, e)
                } else if (n.depthBuffer && n.stencilBuffer) {
                    if (i) {
                        var r = L(n);
                        t.renderbufferStorageMultisample(36161, r, 35056, n.width, n.height)
                    } else t.renderbufferStorage(36161, 34041, n.width, n.height);
                    t.framebufferRenderbuffer(36160, 33306, 36161, e)
                } else {
                    var a = o.convert(n.texture.format),
                        s = o.convert(n.texture.type),
                        c = m(a, s);
                    if (i) {
                        var r = L(n);
                        t.renderbufferStorageMultisample(36161, r, c, n.width, n.height)
                    } else t.renderbufferStorage(36161, c, n.width, n.height)
                }
                t.bindRenderbuffer(36161, null)
            }

            function P(e) {
                var n = i.get(e),
                    r = !0 === e.isWebGLRenderTargetCube;
                if (e.depthTexture) {
                    if (r) throw new Error("target.depthTexture not supported in Cube render targets");
                    ! function(e, n) {
                        if (n && n.isWebGLRenderTargetCube) throw new Error("Depth Texture with cube render targets is not supported");
                        if (t.bindFramebuffer(36160, e), !n.depthTexture || !n.depthTexture.isDepthTexture) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
                        i.get(n.depthTexture).__webglTexture && n.depthTexture.image.width === n.width && n.depthTexture.image.height === n.height || (n.depthTexture.image.width = n.width, n.depthTexture.image.height = n.height, n.depthTexture.needsUpdate = !0), x(n.depthTexture, 0);
                        var r = i.get(n.depthTexture).__webglTexture;
                        if (n.depthTexture.format === Ot) t.framebufferTexture2D(36160, 36096, 3553, r, 0);
                        else {
                            if (n.depthTexture.format !== It) throw new Error("Unknown depthTexture format");
                            t.framebufferTexture2D(36160, 33306, 3553, r, 0)
                        }
                    }(n.__webglFramebuffer, e)
                } else if (r) {
                    n.__webglDepthbuffer = [];
                    for (var o = 0; o < 6; o++) t.bindFramebuffer(36160, n.__webglFramebuffer[o]), n.__webglDepthbuffer[o] = t.createRenderbuffer(), A(n.__webglDepthbuffer[o], e)
                } else t.bindFramebuffer(36160, n.__webglFramebuffer), n.__webglDepthbuffer = t.createRenderbuffer(), A(n.__webglDepthbuffer, e);
                t.bindFramebuffer(36160, null)
            }

            function L(t) {
                return r.isWebGL2 && t.isWebGLMultisampleRenderTarget ? Math.min(r.maxSamples, t.samples) : 0
            }
            var R = !1,
                C = !1;
            this.allocateTextureUnit = function() {
                var t = _;
                return t >= r.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + t + " texture units while this GPU supports only " + r.maxTextures), _ += 1, t
            }, this.resetTextureUnits = function() {
                _ = 0
            }, this.setTexture2D = x, this.setTexture2DArray = function(t, e) {
                var r = i.get(t);
                t.version > 0 && r.__version !== t.version ? E(r, t, e) : (n.activeTexture(33984 + e), n.bindTexture(35866, r.__webglTexture))
            }, this.setTexture3D = function(t, e) {
                var r = i.get(t);
                t.version > 0 && r.__version !== t.version ? E(r, t, e) : (n.activeTexture(33984 + e), n.bindTexture(32879, r.__webglTexture))
            }, this.setTextureCube = b, this.setTextureCubeDynamic = w, this.setupRenderTarget = function(s) {
                var c = i.get(s),
                    l = i.get(s.texture);
                s.addEventListener("dispose", y), l.__webglTexture = t.createTexture(), a.memory.textures++;
                var h = !0 === s.isWebGLRenderTargetCube,
                    u = !0 === s.isWebGLMultisampleRenderTarget,
                    v = !0 === s.isWebGLMultiviewRenderTarget,
                    g = p(s) || r.isWebGL2;
                if (h) {
                    c.__webglFramebuffer = [];
                    for (var _ = 0; _ < 6; _++) c.__webglFramebuffer[_] = t.createFramebuffer()
                } else if (c.__webglFramebuffer = t.createFramebuffer(), u)
                    if (r.isWebGL2) {
                        c.__webglMultisampledFramebuffer = t.createFramebuffer(), c.__webglColorRenderbuffer = t.createRenderbuffer(), t.bindRenderbuffer(36161, c.__webglColorRenderbuffer);
                        var x = o.convert(s.texture.format),
                            b = o.convert(s.texture.type),
                            w = m(x, b),
                            T = L(s);
                        t.renderbufferStorageMultisample(36161, T, w, s.width, s.height), t.bindFramebuffer(36160, c.__webglMultisampledFramebuffer), t.framebufferRenderbuffer(36160, 36064, 36161, c.__webglColorRenderbuffer), t.bindRenderbuffer(36161, null), s.depthBuffer && (c.__webglDepthRenderbuffer = t.createRenderbuffer(), A(c.__webglDepthRenderbuffer, s, !0)), t.bindFramebuffer(36160, null)
                    } else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
                else if (v) {
                    var E = s.width,
                        R = s.height,
                        C = s.numViews;
                    t.bindFramebuffer(36160, c.__webglFramebuffer);
                    var O = e.get("OVR_multiview2");
                    a.memory.textures += 2;
                    var I = t.createTexture();
                    t.bindTexture(35866, I), t.texParameteri(35866, 10240, 9728), t.texParameteri(35866, 10241, 9728), t.texImage3D(35866, 0, 32856, E, R, C, 0, 6408, 5121, null), O.framebufferTextureMultiviewOVR(36160, 36064, I, 0, 0, C);
                    var D = t.createTexture();
                    t.bindTexture(35866, D), t.texParameteri(35866, 10240, 9728), t.texParameteri(35866, 10241, 9728), t.texImage3D(35866, 0, 35056, E, R, C, 0, 34041, 34042, null), O.framebufferTextureMultiviewOVR(36160, 33306, D, 0, 0, C);
                    for (var N = new Array(C), _ = 0; _ < C; ++_) N[_] = t.createFramebuffer(), t.bindFramebuffer(36160, N[_]), t.framebufferTextureLayer(36160, 36064, I, 0, _);
                    c.__webglColorTexture = I, c.__webglDepthStencilTexture = D, c.__webglViewFramebuffers = N, t.bindFramebuffer(36160, null), t.bindTexture(35866, null)
                }
                if (h) {
                    n.bindTexture(34067, l.__webglTexture), M(34067, s.texture, g);
                    for (var _ = 0; _ < 6; _++) S(c.__webglFramebuffer[_], s, 36064, 34069 + _);
                    d(s.texture, g) && f(34067, s.texture, s.width, s.height), n.bindTexture(34067, null)
                } else v || (n.bindTexture(3553, l.__webglTexture), M(3553, s.texture, g), S(c.__webglFramebuffer, s, 36064, 3553), d(s.texture, g) && f(3553, s.texture, s.width, s.height), n.bindTexture(3553, null));
                s.depthBuffer && P(s)
            }, this.updateRenderTargetMipmap = function(t) {
                var e = t.texture,
                    o = p(t) || r.isWebGL2;
                if (d(e, o)) {
                    var a = t.isWebGLRenderTargetCube ? 34067 : 3553,
                        s = i.get(e).__webglTexture;
                    n.bindTexture(a, s), f(a, e, t.width, t.height), n.bindTexture(a, null)
                }
            }, this.updateMultisampleRenderTarget = function(e) {
                if (e.isWebGLMultisampleRenderTarget)
                    if (r.isWebGL2) {
                        var n = i.get(e);
                        t.bindFramebuffer(36008, n.__webglMultisampledFramebuffer), t.bindFramebuffer(36009, n.__webglFramebuffer);
                        var o = e.width,
                            a = e.height,
                            s = 16384;
                        e.depthBuffer && (s |= 256), e.stencilBuffer && (s |= 1024), t.blitFramebuffer(0, 0, o, a, 0, 0, o, a, s, 9728)
                    } else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")
            }, this.safeSetTexture2D = function(t, e) {
                t && t.isWebGLRenderTarget && (!1 === R && (console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."), R = !0), t = t.texture), x(t, e)
            }, this.safeSetTextureCube = function(t, e) {
                t && t.isWebGLRenderTargetCube && (!1 === C && (console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."), C = !0), t = t.texture), t && t.isCubeTexture || Array.isArray(t.image) && 6 === t.image.length ? b(t, e) : w(t, e)
            }
        }

        function na(t, e, n) {
            return {
                convert: function(t) {
                    var i;
                    if (t === ot) return 10497;
                    if (t === at) return 33071;
                    if (t === st) return 33648;
                    if (t === ct) return 9728;
                    if (t === lt) return 9984;
                    if (t === ht) return 9986;
                    if (t === ut) return 9729;
                    if (t === pt) return 9985;
                    if (t === dt) return 9987;
                    if (t === ft) return 5121;
                    if (t === wt) return 32819;
                    if (t === Mt) return 32820;
                    if (t === Tt) return 33635;
                    if (t === mt) return 5120;
                    if (t === vt) return 5122;
                    if (t === gt) return 5123;
                    if (t === yt) return 5124;
                    if (t === _t) return 5125;
                    if (t === xt) return 5126;
                    if (t === bt) {
                        if (n.isWebGL2) return 5131;
                        if (null !== (i = e.get("OES_texture_half_float"))) return i.HALF_FLOAT_OES
                    }
                    if (t === St) return 6406;
                    if (t === At) return 6407;
                    if (t === Pt) return 6408;
                    if (t === Lt) return 6409;
                    if (t === Rt) return 6410;
                    if (t === Ot) return 6402;
                    if (t === It) return 34041;
                    if (t === Dt) return 6403;
                    if (t === _) return 32774;
                    if (t === x) return 32778;
                    if (t === b) return 32779;
                    if (t === T) return 0;
                    if (t === E) return 1;
                    if (t === S) return 768;
                    if (t === A) return 769;
                    if (t === P) return 770;
                    if (t === L) return 771;
                    if (t === R) return 772;
                    if (t === C) return 773;
                    if (t === O) return 774;
                    if (t === I) return 775;
                    if (t === D) return 776;
                    if ((t === Nt || t === Bt || t === Ht || t === Ft) && null !== (i = e.get("WEBGL_compressed_texture_s3tc"))) {
                        if (t === Nt) return i.COMPRESSED_RGB_S3TC_DXT1_EXT;
                        if (t === Bt) return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                        if (t === Ht) return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                        if (t === Ft) return i.COMPRESSED_RGBA_S3TC_DXT5_EXT
                    }
                    if ((t === kt || t === Ut || t === zt || t === Gt) && null !== (i = e.get("WEBGL_compressed_texture_pvrtc"))) {
                        if (t === kt) return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                        if (t === Ut) return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                        if (t === zt) return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                        if (t === Gt) return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
                    }
                    if (t === jt && null !== (i = e.get("WEBGL_compressed_texture_etc1"))) return i.COMPRESSED_RGB_ETC1_WEBGL;
                    if ((t === Vt || t === Wt || t === Xt || t === qt || t === Yt || t === Zt || t === Jt || t === Kt || t === Qt || t === $t || t === te || t === ee || t === ne || t === ie) && null !== (i = e.get("WEBGL_compressed_texture_astc"))) return t;
                    if (t === w || t === M) {
                        if (n.isWebGL2) {
                            if (t === w) return 32775;
                            if (t === M) return 32776
                        }
                        if (null !== (i = e.get("EXT_blend_minmax"))) {
                            if (t === w) return i.MIN_EXT;
                            if (t === M) return i.MAX_EXT
                        }
                    }
                    if (t === Et) {
                        if (n.isWebGL2) return 34042;
                        if (null !== (i = e.get("WEBGL_depth_texture"))) return i.UNSIGNED_INT_24_8_WEBGL
                    }
                    return 0
                }
            }
        }

        function ia(t, e, n, i) {
            ke.call(this, t, e, i), this.depthBuffer = !1, this.stencilBuffer = !1, this.numViews = n
        }

        function ra(t, e) {
            var n, i, r, o, a, s, c, l = 2,
                h = t.extensions,
                u = t.properties,
                p = 0;

            function d(t) {
                return t.isArrayCamera ? t.cameras : (a[0] = t, a)
            }
            this.isAvailable = function() {
                if (void 0 === c) {
                    var t = h.get("OVR_multiview2");
                    if (c = null !== t && !1 === e.getContextAttributes().antialias) {
                        p = e.getParameter(t.MAX_VIEWS_OVR), n = new ia(0, 0, l), s = new Ae, o = [], r = [], a = [];
                        for (var i = 0; i < p; i++) o[i] = new Ye, r[i] = new De
                    }
                }
                return c
            }, this.attachCamera = function(e) {
                !1 !== function(t) {
                    if (void 0 === t.isArrayCamera) return !0;
                    var e = t.cameras;
                    if (e.length > p) return !1;
                    for (var n = 1, i = e.length; n < i; n++)
                        if (e[0].viewport.z !== e[n].viewport.z || e[0].viewport.w !== e[n].viewport.w) return !1;
                    return !0
                }(e) && (i = t.getRenderTarget(), function(e) {
                    if (i ? s.set(i.width, i.height) : t.getDrawingBufferSize(s), e.isArrayCamera) {
                        var r = e.cameras[0].viewport;
                        n.setSize(r.z, r.w), n.setNumViews(e.cameras.length)
                    } else n.setSize(s.x, s.y), n.setNumViews(l)
                }(e), t.setRenderTarget(n))
            }, this.detachCamera = function(r) {
                n === t.getRenderTarget() && (t.setRenderTarget(i), function(t) {
                    var i = n,
                        r = i.numViews,
                        o = u.get(i).__webglViewFramebuffers,
                        a = i.width,
                        c = i.height;
                    if (t.isArrayCamera)
                        for (var l = 0; l < r; l++) {
                            var h = t.cameras[l].viewport,
                                p = h.x,
                                d = h.y,
                                f = p + h.z,
                                m = d + h.w;
                            e.bindFramebuffer(36008, o[l]), e.blitFramebuffer(0, 0, a, c, p, d, f, m, 16384, 9728)
                        } else e.bindFramebuffer(36008, o[0]), e.blitFramebuffer(0, 0, a, c, 0, 0, s.x, s.y, 16384, 9728)
                }(r))
            }, this.updateCameraProjectionMatricesUniform = function(t, n) {
                for (var i = d(t), r = 0; r < i.length; r++) o[r].copy(i[r].projectionMatrix);
                n.setValue(e, "projectionMatrices", o)
            }, this.updateCameraViewMatricesUniform = function(t, n) {
                for (var i = d(t), r = 0; r < i.length; r++) o[r].copy(i[r].matrixWorldInverse);
                n.setValue(e, "viewMatrices", o)
            }, this.updateObjectMatricesUniforms = function(t, n, i) {
                for (var a = d(n), s = 0; s < a.length; s++) o[s].multiplyMatrices(a[s].matrixWorldInverse, t.matrixWorld), r[s].getNormalMatrix(o[s]);
                i.setValue(e, "modelViewMatrices", o), i.setValue(e, "normalMatrices", r)
            }
        }

        function oa() {
            dn.call(this), this.type = "Group"
        }

        function aa(t) {
            sr.call(this), this.cameras = t || []
        }
        ia.prototype = Object.assign(Object.create(ke.prototype), {
            constructor: ia,
            isWebGLMultiviewRenderTarget: !0,
            copy: function(t) {
                return ke.prototype.copy.call(this, t), this.numViews = t.numViews, this
            },
            setNumViews: function(t) {
                return this.numViews !== t && (this.numViews = t, this.dispose()), this
            }
        }), oa.prototype = Object.assign(Object.create(dn.prototype), {
            constructor: oa,
            isGroup: !0
        }), aa.prototype = Object.assign(Object.create(sr.prototype), {
            constructor: aa,
            isArrayCamera: !0
        });
        var sa, ca = new Ce,
            la = new Ce;

        function ha(t, e, n) {
            ca.setFromMatrixPosition(e.matrixWorld), la.setFromMatrixPosition(n.matrixWorld);
            var i = ca.distanceTo(la),
                r = e.projectionMatrix.elements,
                o = n.projectionMatrix.elements,
                a = r[14] / (r[10] - 1),
                s = r[14] / (r[10] + 1),
                c = (r[9] + 1) / r[5],
                l = (r[9] - 1) / r[5],
                h = (r[8] - 1) / r[0],
                u = (o[8] + 1) / o[0],
                p = a * h,
                d = a * u,
                f = i / (-h + u),
                m = f * -h;
            e.matrixWorld.decompose(t.position, t.quaternion, t.scale), t.translateX(m), t.translateZ(f), t.matrixWorld.compose(t.position, t.quaternion, t.scale), t.matrixWorldInverse.getInverse(t.matrixWorld);
            var v = a + f,
                g = s + f,
                y = p - m,
                _ = d + (i - m),
                x = c * s / g * v,
                b = l * s / g * v;
            t.projectionMatrix.makePerspective(y, _, x, b, v, g)
        }

        function ua(t) {
            var e, n, i = this,
                r = null,
                o = null,
                a = null,
                s = [],
                c = new Ye,
                l = new Ye,
                h = 1,
                u = "local-floor";
            "undefined" != typeof window && "VRFrameData" in window && (o = new window.VRFrameData, window.addEventListener("vrdisplaypresentchange", b, !1));
            var p = new Ye,
                d = new Pe,
                f = new Ce,
                m = new sr;
            m.viewport = new Fe, m.layers.enable(1);
            var v = new sr;
            v.viewport = new Fe, v.layers.enable(2);
            var g = new aa([m, v]);

            function y() {
                return null !== r && !0 === r.isPresenting
            }
            g.layers.enable(1), g.layers.enable(2);
            var _, x = new Ae;

            function b() {
                if (y()) {
                    var o = r.getEyeParameters("left");
                    e = 2 * o.renderWidth * h, n = o.renderHeight * h, _ = t.getPixelRatio(), t.getSize(x), t.setDrawingBufferSize(e, n, 1), m.viewport.set(0, 0, e / 2, n), v.viewport.set(e / 2, 0, e / 2, n), E.start(), i.dispatchEvent({
                        type: "sessionstart"
                    })
                } else i.enabled && t.setDrawingBufferSize(x.width, x.height, _), E.stop(), i.dispatchEvent({
                    type: "sessionend"
                })
            }
            var w = [];

            function M(t) {
                for (var e = navigator.getGamepads && navigator.getGamepads(), n = 0, i = 0, r = e.length; n < r; n++) {
                    var o = e[n];
                    if (o && ("Daydream Controller" === o.id || "Gear VR Controller" === o.id || "Oculus Go Controller" === o.id || "OpenVR Gamepad" === o.id || o.id.startsWith("Oculus Touch") || o.id.startsWith("HTC Vive Focus") || o.id.startsWith("Spatial Controller"))) {
                        if (i === t) return o;
                        i++
                    }
                }
            }

            function T(t, i) {
                null !== i && 4 === i.length && t.set(i[0] * e, i[1] * n, i[2] * e, i[3] * n)
            }
            this.enabled = !1, this.getController = function(t) {
                var e = s[t];
                return void 0 === e && ((e = new oa).matrixAutoUpdate = !1, e.visible = !1, s[t] = e), e
            }, this.getDevice = function() {
                return r
            }, this.setDevice = function(t) {
                void 0 !== t && (r = t), E.setContext(t)
            }, this.setFramebufferScaleFactor = function(t) {
                h = t
            }, this.setReferenceSpaceType = function(t) {
                u = t
            }, this.setPoseTarget = function(t) {
                void 0 !== t && (a = t)
            }, this.getCamera = function(t) {
                var e = "local-floor" === u ? 1.6 : 0;
                if (!1 === y()) return t.position.set(0, e, 0), t.rotation.set(0, 0, 0), t;
                if (r.depthNear = t.near, r.depthFar = t.far, r.getFrameData(o), "local-floor" === u) {
                    var n = r.stageParameters;
                    n ? c.fromArray(n.sittingToStandingTransform) : c.makeTranslation(0, e, 0)
                }
                var i = o.pose,
                    h = null !== a ? a : t;
                h.matrix.copy(c), h.matrix.decompose(h.position, h.quaternion, h.scale), null !== i.orientation && (d.fromArray(i.orientation), h.quaternion.multiply(d)), null !== i.position && (d.setFromRotationMatrix(c), f.fromArray(i.position), f.applyQuaternion(d), h.position.add(f)), h.updateMatrixWorld(), m.near = t.near, v.near = t.near, m.far = t.far, v.far = t.far, m.matrixWorldInverse.fromArray(o.leftViewMatrix), v.matrixWorldInverse.fromArray(o.rightViewMatrix), l.getInverse(c), "local-floor" === u && (m.matrixWorldInverse.multiply(l), v.matrixWorldInverse.multiply(l));
                var _ = h.parent;
                null !== _ && (p.getInverse(_.matrixWorld), m.matrixWorldInverse.multiply(p), v.matrixWorldInverse.multiply(p)), m.matrixWorld.getInverse(m.matrixWorldInverse), v.matrixWorld.getInverse(v.matrixWorldInverse), m.projectionMatrix.fromArray(o.leftProjectionMatrix), v.projectionMatrix.fromArray(o.rightProjectionMatrix), ha(g, m, v);
                var x = r.getLayers();
                if (x.length) {
                    var b = x[0];
                    T(m.viewport, b.leftBounds), T(v.viewport, b.rightBounds)
                }
                return function() {
                    for (var t = 0; t < s.length; t++) {
                        var e = s[t],
                            n = M(t);
                        if (void 0 !== n && void 0 !== n.pose) {
                            if (null === n.pose) return;
                            var i = n.pose;
                            !1 === i.hasPosition && e.position.set(.2, -.6, -.05), null !== i.position && e.position.fromArray(i.position), null !== i.orientation && e.quaternion.fromArray(i.orientation), e.matrix.compose(e.position, e.quaternion, e.scale), e.matrix.premultiply(c), e.matrix.decompose(e.position, e.quaternion, e.scale), e.matrixWorldNeedsUpdate = !0, e.visible = !0;
                            var r = "Daydream Controller" === n.id ? 0 : 1;
                            void 0 === w[t] && (w[t] = !1), w[t] !== n.buttons[r].pressed && (w[t] = n.buttons[r].pressed, !0 === w[t] ? e.dispatchEvent({
                                type: "selectstart"
                            }) : (e.dispatchEvent({
                                type: "selectend"
                            }), e.dispatchEvent({
                                type: "select"
                            })))
                        } else e.visible = !1
                    }
                }(), g
            }, this.getStandingMatrix = function() {
                return c
            }, this.isPresenting = y;
            var E = new Mr;
            this.setAnimationLoop = function(t) {
                E.setAnimationLoop(t), y() && E.start()
            }, this.submitFrame = function() {
                y() && r.submitFrame()
            }, this.dispose = function() {
                "undefined" != typeof window && window.removeEventListener("vrdisplaypresentchange", b)
            }, this.setFrameOfReferenceType = function() {
                console.warn("THREE.WebVRManager: setFrameOfReferenceType() has been deprecated.")
            }
        }

        function pa(t, e) {
            var n = this,
                i = null,
                r = null,
                o = "local-floor",
                a = null,
                s = [],
                c = [];

            function l() {
                return null !== i && null !== r
            }
            var h = new sr;
            h.layers.enable(1), h.viewport = new Fe;
            var u = new sr;
            u.layers.enable(2), u.viewport = new Fe;
            var p = new aa([h, u]);

            function d(t) {
                for (var e = 0; e < s.length; e++) c[e] === t.inputSource && s[e].dispatchEvent({
                    type: t.type
                })
            }

            function f() {
                t.setFramebuffer(null), t.setRenderTarget(t.getRenderTarget()), y.stop(), n.dispatchEvent({
                    type: "sessionend"
                })
            }

            function m(t) {
                r = t, y.setContext(i), y.start(), n.dispatchEvent({
                    type: "sessionstart"
                })
            }

            function v(t, e) {
                null === e ? t.matrixWorld.copy(t.matrix) : t.matrixWorld.multiplyMatrices(e.matrixWorld, t.matrix), t.matrixWorldInverse.getInverse(t.matrixWorld)
            }
            p.layers.enable(1), p.layers.enable(2), this.enabled = !1, this.getController = function(t) {
                var e = s[t];
                return void 0 === e && ((e = new oa).matrixAutoUpdate = !1, e.visible = !1, s[t] = e), e
            }, this.setFramebufferScaleFactor = function() {}, this.setReferenceSpaceType = function(t) {
                o = t
            }, this.getSession = function() {
                return i
            }, this.setSession = function(t) {
                null !== (i = t) && (i.addEventListener("select", d), i.addEventListener("selectstart", d), i.addEventListener("selectend", d), i.addEventListener("end", f), i.updateRenderState({
                    baseLayer: new XRWebGLLayer(i, e)
                }), i.requestReferenceSpace(o).then(m), c = i.inputSources, i.addEventListener("inputsourceschange", function() {
                    c = i.inputSources, console.log(c);
                    for (var t = 0; t < s.length; t++) {
                        var e = s[t];
                        e.userData.inputSource = c[t]
                    }
                }))
            }, this.getCamera = function(t) {
                if (l()) {
                    var e = t.parent,
                        n = p.cameras;
                    v(p, e);
                    for (var i = 0; i < n.length; i++) v(n[i], e);
                    t.matrixWorld.copy(p.matrixWorld);
                    for (var r = t.children, i = 0, o = r.length; i < o; i++) r[i].updateMatrixWorld(!0);
                    return ha(p, h, u), p
                }
                return t
            }, this.isPresenting = l;
            var g = null,
                y = new Mr;
            y.setAnimationLoop(function(e, n) {
                if (null !== (a = n.getViewerPose(r))) {
                    var o = a.views,
                        l = i.renderState.baseLayer;
                    t.setFramebuffer(l.framebuffer);
                    for (var h = 0; h < o.length; h++) {
                        var u = o[h],
                            d = l.getViewport(u),
                            f = u.transform.inverse.matrix,
                            m = p.cameras[h];
                        m.matrix.fromArray(f).getInverse(m.matrix), m.projectionMatrix.fromArray(u.projectionMatrix), m.viewport.set(d.x, d.y, d.width, d.height), 0 === h && p.matrix.copy(m.matrix)
                    }
                }
                for (var h = 0; h < s.length; h++) {
                    var v = s[h],
                        y = c[h];
                    if (y) {
                        var _ = n.getPose(y.targetRaySpace, r);
                        if (null !== _) {
                            v.matrix.fromArray(_.transform.matrix), v.matrix.decompose(v.position, v.rotation, v.scale), v.visible = !0;
                            continue
                        }
                    }
                    v.visible = !1
                }
                g && g(e)
            }), this.setAnimationLoop = function(t) {
                g = t
            }, this.dispose = function() {}, this.getStandingMatrix = function() {
                return console.warn("THREE.WebXRManager: getStandingMatrix() is no longer needed."), new Ye
            }, this.getDevice = function() {
                console.warn("THREE.WebXRManager: getDevice() has been deprecated.")
            }, this.setDevice = function() {
                console.warn("THREE.WebXRManager: setDevice() has been deprecated.")
            }, this.setFrameOfReferenceType = function() {
                console.warn("THREE.WebXRManager: setFrameOfReferenceType() has been deprecated.")
            }, this.submitFrame = function() {}
        }

        function da(t) {
            var r = void 0 !== (t = t || {}).canvas ? t.canvas : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"),
                o = void 0 !== t.context ? t.context : null,
                a = void 0 !== t.alpha && t.alpha,
                h = void 0 === t.depth || t.depth,
                u = void 0 === t.stencil || t.stencil,
                p = void 0 !== t.antialias && t.antialias,
                x = void 0 === t.premultipliedAlpha || t.premultipliedAlpha,
                b = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer,
                w = void 0 !== t.powerPreference ? t.powerPreference : "default",
                M = void 0 !== t.failIfMajorPerformanceCaveat && t.failIfMajorPerformanceCaveat,
                T = null,
                E = null;
            this.domElement = r, this.debug = {
                checkShaderErrors: !0
            }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.gammaFactor = 2, this.gammaInput = !1, this.gammaOutput = !1, this.physicallyCorrectLights = !1, this.toneMapping = q, this.toneMappingExposure = 1, this.toneMappingWhitePoint = 1, this.maxMorphTargets = 8, this.maxMorphNormals = 4;
            var S, A, P, L, R, C, O, I, D, j, V, W, X, Y, Z, J, K, Q, $ = this,
                tt = !1,
                et = null,
                nt = 0,
                it = 0,
                rt = null,
                ot = null,
                at = -1,
                st = {
                    geometry: null,
                    program: null,
                    wireframe: !1
                },
                ct = null,
                lt = null,
                ht = new Fe,
                ut = new Fe,
                pt = null,
                dt = r.width,
                mt = r.height,
                vt = 1,
                gt = new Fe(0, 0, dt, mt),
                yt = new Fe(0, 0, dt, mt),
                _t = !1,
                wt = new _r,
                Mt = new function() {
                    var t = this,
                        e = null,
                        n = 0,
                        i = !1,
                        r = !1,
                        o = new vr,
                        a = new De,
                        s = {
                            value: null,
                            needsUpdate: !1
                        };

                    function c() {
                        s.value !== e && (s.value = e, s.needsUpdate = n > 0), t.numPlanes = n, t.numIntersection = 0
                    }

                    function l(e, n, i, r) {
                        var c = null !== e ? e.length : 0,
                            l = null;
                        if (0 !== c) {
                            if (l = s.value, !0 !== r || null === l) {
                                var h = i + 4 * c,
                                    u = n.matrixWorldInverse;
                                a.getNormalMatrix(u), (null === l || l.length < h) && (l = new Float32Array(h));
                                for (var p = 0, d = i; p !== c; ++p, d += 4) o.copy(e[p]).applyMatrix4(u, a), o.normal.toArray(l, d), l[d + 3] = o.constant
                            }
                            s.value = l, s.needsUpdate = !0
                        }
                        return t.numPlanes = c, l
                    }
                    this.uniform = s, this.numPlanes = 0, this.numIntersection = 0, this.init = function(t, r, o) {
                        var a = 0 !== t.length || r || 0 !== n || i;
                        return i = r, e = l(t, o, 0), n = t.length, a
                    }, this.beginShadows = function() {
                        r = !0, l(null)
                    }, this.endShadows = function() {
                        r = !1, c()
                    }, this.setState = function(t, o, a, h, u, p) {
                        if (!i || null === t || 0 === t.length || r && !a) r ? l(null) : c();
                        else {
                            var d = r ? 0 : n,
                                f = 4 * d,
                                m = u.clippingState || null;
                            s.value = m, m = l(t, h, f, p);
                            for (var v = 0; v !== f; ++v) m[v] = e[v];
                            u.clippingState = m, this.numIntersection = o ? this.numPlanes : 0, this.numPlanes += d
                        }
                    }
                },
                Tt = !1,
                Et = !1,
                St = new Ye,
                At = new Ce;

            function Lt() {
                return null === rt ? vt : 1
            }
            try {
                var Rt = {
                    alpha: a,
                    depth: h,
                    stencil: u,
                    antialias: p,
                    premultipliedAlpha: x,
                    preserveDrawingBuffer: b,
                    powerPreference: w,
                    failIfMajorPerformanceCaveat: M,
                    xrCompatible: !0
                };
                if (r.addEventListener("webglcontextlost", Nt, !1), r.addEventListener("webglcontextrestored", Bt, !1), null === (S = o || r.getContext("webgl", Rt) || r.getContext("experimental-webgl", Rt))) throw null !== r.getContext("webgl") ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
                void 0 === S.getShaderPrecisionFormat && (S.getShaderPrecisionFormat = function() {
                    return {
                        rangeMin: 1,
                        rangeMax: 1,
                        precision: 1
                    }
                })
            } catch (t) {
                throw console.error("THREE.WebGLRenderer: " + t.message), t
            }

            function Ct() {
                A = new function(t) {
                    var e = {};
                    return {
                        get: function(n) {
                            if (void 0 !== e[n]) return e[n];
                            var i;
                            switch (n) {
                                case "WEBGL_depth_texture":
                                    i = t.getExtension("WEBGL_depth_texture") || t.getExtension("MOZ_WEBGL_depth_texture") || t.getExtension("WEBKIT_WEBGL_depth_texture");
                                    break;
                                case "EXT_texture_filter_anisotropic":
                                    i = t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                                    break;
                                case "WEBGL_compressed_texture_s3tc":
                                    i = t.getExtension("WEBGL_compressed_texture_s3tc") || t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                                    break;
                                case "WEBGL_compressed_texture_pvrtc":
                                    i = t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                                    break;
                                default:
                                    i = t.getExtension(n)
                            }
                            return null === i && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), e[n] = i, i
                        }
                    }
                }(S), !1 === (P = new function(t, e, n) {
                    var i;

                    function r(e) {
                        if ("highp" === e) {
                            if (t.getShaderPrecisionFormat(35633, 36338).precision > 0 && t.getShaderPrecisionFormat(35632, 36338).precision > 0) return "highp";
                            e = "mediump"
                        }
                        return "mediump" === e && t.getShaderPrecisionFormat(35633, 36337).precision > 0 && t.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp"
                    }
                    var o = "undefined" != typeof WebGL2RenderingContext && t instanceof WebGL2RenderingContext,
                        a = void 0 !== n.precision ? n.precision : "highp",
                        s = r(a);
                    s !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", s, "instead."), a = s);
                    var c = !0 === n.logarithmicDepthBuffer,
                        l = t.getParameter(34930),
                        h = t.getParameter(35660),
                        u = t.getParameter(3379),
                        p = t.getParameter(34076),
                        d = t.getParameter(34921),
                        f = t.getParameter(36347),
                        m = t.getParameter(36348),
                        v = t.getParameter(36349),
                        g = h > 0,
                        y = o || !!e.get("OES_texture_float"),
                        _ = g && y,
                        x = o ? t.getParameter(36183) : 0;
                    return {
                        isWebGL2: o,
                        getMaxAnisotropy: function() {
                            if (void 0 !== i) return i;
                            var n = e.get("EXT_texture_filter_anisotropic");
                            return i = null !== n ? t.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
                        },
                        getMaxPrecision: r,
                        precision: a,
                        logarithmicDepthBuffer: c,
                        maxTextures: l,
                        maxVertexTextures: h,
                        maxTextureSize: u,
                        maxCubemapSize: p,
                        maxAttributes: d,
                        maxVertexUniforms: f,
                        maxVaryings: m,
                        maxFragmentUniforms: v,
                        vertexTextures: g,
                        floatFragmentTextures: y,
                        floatVertexTextures: _,
                        maxSamples: x
                    }
                }(S, A, t)).isWebGL2 && (A.get("WEBGL_depth_texture"), A.get("OES_texture_float"), A.get("OES_texture_half_float"), A.get("OES_texture_half_float_linear"), A.get("OES_standard_derivatives"), A.get("OES_element_index_uint"), A.get("ANGLE_instanced_arrays")), A.get("OES_texture_float_linear"), Q = new na(S, A, P), (L = new function(t, r, o, a) {
                    var s = new function() {
                            var e = !1,
                                n = new Fe,
                                i = null,
                                r = new Fe(0, 0, 0, 0);
                            return {
                                setMask: function(n) {
                                    i === n || e || (t.colorMask(n, n, n, n), i = n)
                                },
                                setLocked: function(t) {
                                    e = t
                                },
                                setClear: function(e, i, o, a, s) {
                                    !0 === s && (e *= a, i *= a, o *= a), n.set(e, i, o, a), !1 === r.equals(n) && (t.clearColor(e, i, o, a), r.copy(n))
                                },
                                reset: function() {
                                    e = !1, i = null, r.set(-1, 0, 0, 0)
                                }
                            }
                        },
                        h = new function() {
                            var e = !1,
                                n = null,
                                i = null,
                                r = null;
                            return {
                                setTest: function(t) {
                                    t ? ot(2929) : at(2929)
                                },
                                setMask: function(i) {
                                    n === i || e || (t.depthMask(i), n = i)
                                },
                                setFunc: function(e) {
                                    if (i !== e) {
                                        if (e) switch (e) {
                                            case N:
                                                t.depthFunc(512);
                                                break;
                                            case B:
                                                t.depthFunc(519);
                                                break;
                                            case H:
                                                t.depthFunc(513);
                                                break;
                                            case F:
                                                t.depthFunc(515);
                                                break;
                                            case k:
                                                t.depthFunc(514);
                                                break;
                                            case U:
                                                t.depthFunc(518);
                                                break;
                                            case z:
                                                t.depthFunc(516);
                                                break;
                                            case G:
                                                t.depthFunc(517);
                                                break;
                                            default:
                                                t.depthFunc(515)
                                        } else t.depthFunc(515);
                                        i = e
                                    }
                                },
                                setLocked: function(t) {
                                    e = t
                                },
                                setClear: function(e) {
                                    r !== e && (t.clearDepth(e), r = e)
                                },
                                reset: function() {
                                    e = !1, n = null, i = null, r = null
                                }
                            }
                        },
                        u = new function() {
                            var e = !1,
                                n = null,
                                i = null,
                                r = null,
                                o = null,
                                a = null,
                                s = null,
                                c = null,
                                l = null;
                            return {
                                setTest: function(t) {
                                    e || (t ? ot(2960) : at(2960))
                                },
                                setMask: function(i) {
                                    n === i || e || (t.stencilMask(i), n = i)
                                },
                                setFunc: function(e, n, a) {
                                    i === e && r === n && o === a || (t.stencilFunc(e, n, a), i = e, r = n, o = a)
                                },
                                setOp: function(e, n, i) {
                                    a === e && s === n && c === i || (t.stencilOp(e, n, i), a = e, s = n, c = i)
                                },
                                setLocked: function(t) {
                                    e = t
                                },
                                setClear: function(e) {
                                    l !== e && (t.clearStencil(e), l = e)
                                },
                                reset: function() {
                                    e = !1, n = null, i = null, r = null, o = null, a = null, s = null, c = null, l = null
                                }
                            }
                        },
                        p = t.getParameter(34921),
                        x = new Uint8Array(p),
                        b = new Uint8Array(p),
                        w = new Uint8Array(p),
                        M = {},
                        T = null,
                        E = null,
                        S = null,
                        A = null,
                        P = null,
                        L = null,
                        R = null,
                        C = null,
                        O = null,
                        I = null,
                        D = !1,
                        j = null,
                        V = null,
                        W = null,
                        X = null,
                        q = null,
                        Y = t.getParameter(35661),
                        Z = !1,
                        J = 0,
                        K = t.getParameter(7938); - 1 !== K.indexOf("WebGL") ? (J = parseFloat(/^WebGL\ ([0-9])/.exec(K)[1]), Z = J >= 1) : -1 !== K.indexOf("OpenGL ES") && (J = parseFloat(/^OpenGL\ ES\ ([0-9])/.exec(K)[1]), Z = J >= 2);
                    var Q = null,
                        $ = {},
                        tt = new Fe,
                        et = new Fe;

                    function nt(e, n, i) {
                        var r = new Uint8Array(4),
                            o = t.createTexture();
                        t.bindTexture(e, o), t.texParameteri(e, 10241, 9728), t.texParameteri(e, 10240, 9728);
                        for (var a = 0; a < i; a++) t.texImage2D(n + a, 0, 6408, 1, 1, 0, 6408, 5121, r);
                        return o
                    }
                    var it = {};

                    function rt(e, n) {
                        if (x[e] = 1, 0 === b[e] && (t.enableVertexAttribArray(e), b[e] = 1), w[e] !== n) {
                            var i = a.isWebGL2 ? t : r.get("ANGLE_instanced_arrays");
                            i[a.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](e, n), w[e] = n
                        }
                    }

                    function ot(e) {
                        !0 !== M[e] && (t.enable(e), M[e] = !0)
                    }

                    function at(e) {
                        !1 !== M[e] && (t.disable(e), M[e] = !1)
                    }

                    function st(e, n, i, r, a, s, c, l) {
                        if (e !== d) {
                            if (S || (ot(3042), S = !0), e === y) a = a || n, s = s || i, c = c || r, n === P && a === C || (t.blendEquationSeparate(o.convert(n), o.convert(a)), P = n, C = a), i === L && r === R && s === O && c === I || (t.blendFuncSeparate(o.convert(i), o.convert(r), o.convert(s), o.convert(c)), L = i, R = r, O = s, I = c), A = e, D = null;
                            else if (e !== A || l !== D) {
                                if (P === _ && C === _ || (t.blendEquation(32774), P = _, C = _), l) switch (e) {
                                    case f:
                                        t.blendFuncSeparate(1, 771, 1, 771);
                                        break;
                                    case m:
                                        t.blendFunc(1, 1);
                                        break;
                                    case v:
                                        t.blendFuncSeparate(0, 0, 769, 771);
                                        break;
                                    case g:
                                        t.blendFuncSeparate(0, 768, 0, 770);
                                        break;
                                    default:
                                        console.error("THREE.WebGLState: Invalid blending: ", e)
                                } else switch (e) {
                                    case f:
                                        t.blendFuncSeparate(770, 771, 1, 771);
                                        break;
                                    case m:
                                        t.blendFunc(770, 1);
                                        break;
                                    case v:
                                        t.blendFunc(0, 769);
                                        break;
                                    case g:
                                        t.blendFunc(0, 768);
                                        break;
                                    default:
                                        console.error("THREE.WebGLState: Invalid blending: ", e)
                                }
                                L = null, R = null, O = null, I = null, A = e, D = l
                            }
                        } else S && (at(3042), S = !1)
                    }

                    function ct(e) {
                        j !== e && (e ? t.frontFace(2304) : t.frontFace(2305), j = e)
                    }

                    function lt(r) {
                        r !== e ? (ot(2884), r !== V && (r === n ? t.cullFace(1029) : r === i ? t.cullFace(1028) : t.cullFace(1032))) : at(2884), V = r
                    }

                    function ht(e, n, i) {
                        e ? (ot(32823), X === n && q === i || (t.polygonOffset(n, i), X = n, q = i)) : at(32823)
                    }

                    function ut(e) {
                        void 0 === e && (e = 33984 + Y - 1), Q !== e && (t.activeTexture(e), Q = e)
                    }
                    return it[3553] = nt(3553, 3553, 1), it[34067] = nt(34067, 34069, 6), s.setClear(0, 0, 0, 1), h.setClear(1), u.setClear(0), ot(2929), h.setFunc(F), ct(!1), lt(n), ot(2884), st(d), {
                        buffers: {
                            color: s,
                            depth: h,
                            stencil: u
                        },
                        initAttributes: function() {
                            for (var t = 0, e = x.length; t < e; t++) x[t] = 0
                        },
                        enableAttribute: function(t) {
                            rt(t, 0)
                        },
                        enableAttributeAndDivisor: rt,
                        disableUnusedAttributes: function() {
                            for (var e = 0, n = b.length; e !== n; ++e) b[e] !== x[e] && (t.disableVertexAttribArray(e), b[e] = 0)
                        },
                        enable: ot,
                        disable: at,
                        getCompressedTextureFormats: function() {
                            if (null === T && (T = [], r.get("WEBGL_compressed_texture_pvrtc") || r.get("WEBGL_compressed_texture_s3tc") || r.get("WEBGL_compressed_texture_etc1") || r.get("WEBGL_compressed_texture_astc")))
                                for (var e = t.getParameter(34467), n = 0; n < e.length; n++) T.push(e[n]);
                            return T
                        },
                        useProgram: function(e) {
                            return E !== e && (t.useProgram(e), E = e, !0)
                        },
                        setBlending: st,
                        setMaterial: function(t, e) {
                            t.side === l ? at(2884) : ot(2884);
                            var n = t.side === c;
                            e && (n = !n), ct(n), t.blending === f && !1 === t.transparent ? st(d) : st(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha, t.premultipliedAlpha), h.setFunc(t.depthFunc), h.setTest(t.depthTest), h.setMask(t.depthWrite), s.setMask(t.colorWrite);
                            var i = t.stencilWrite;
                            u.setTest(i), i && (u.setMask(t.stencilWriteMask), u.setFunc(t.stencilFunc, t.stencilRef, t.stencilFuncMask), u.setOp(t.stencilFail, t.stencilZFail, t.stencilZPass)), ht(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits)
                        },
                        setFlipSided: ct,
                        setCullFace: lt,
                        setLineWidth: function(e) {
                            e !== W && (Z && t.lineWidth(e), W = e)
                        },
                        setPolygonOffset: ht,
                        setScissorTest: function(t) {
                            t ? ot(3089) : at(3089)
                        },
                        activeTexture: ut,
                        bindTexture: function(e, n) {
                            null === Q && ut();
                            var i = $[Q];
                            void 0 === i && (i = {
                                type: void 0,
                                texture: void 0
                            }, $[Q] = i), i.type === e && i.texture === n || (t.bindTexture(e, n || it[e]), i.type = e, i.texture = n)
                        },
                        compressedTexImage2D: function() {
                            try {
                                t.compressedTexImage2D.apply(t, arguments)
                            } catch (t) {
                                console.error("THREE.WebGLState:", t)
                            }
                        },
                        texImage2D: function() {
                            try {
                                t.texImage2D.apply(t, arguments)
                            } catch (t) {
                                console.error("THREE.WebGLState:", t)
                            }
                        },
                        texImage3D: function() {
                            try {
                                t.texImage3D.apply(t, arguments)
                            } catch (t) {
                                console.error("THREE.WebGLState:", t)
                            }
                        },
                        scissor: function(e) {
                            !1 === tt.equals(e) && (t.scissor(e.x, e.y, e.z, e.w), tt.copy(e))
                        },
                        viewport: function(e) {
                            !1 === et.equals(e) && (t.viewport(e.x, e.y, e.z, e.w), et.copy(e))
                        },
                        reset: function() {
                            for (var e = 0; e < b.length; e++) 1 === b[e] && (t.disableVertexAttribArray(e), b[e] = 0);
                            M = {}, T = null, Q = null, $ = {}, E = null, A = null, j = null, V = null, s.reset(), h.reset(), u.reset()
                        }
                    }
                }(S, A, Q, P)).scissor(ut.copy(yt).multiplyScalar(vt).floor()), L.viewport(ht.copy(gt).multiplyScalar(vt).floor()), R = new function(t) {
                    var e = {
                        frame: 0,
                        calls: 0,
                        triangles: 0,
                        points: 0,
                        lines: 0
                    };
                    return {
                        memory: {
                            geometries: 0,
                            textures: 0
                        },
                        render: e,
                        programs: null,
                        autoReset: !0,
                        reset: function() {
                            e.frame++, e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0
                        },
                        update: function(t, n, i) {
                            switch (i = i || 1, e.calls++, n) {
                                case 4:
                                    e.triangles += i * (t / 3);
                                    break;
                                case 5:
                                case 6:
                                    e.triangles += i * (t - 2);
                                    break;
                                case 1:
                                    e.lines += i * (t / 2);
                                    break;
                                case 3:
                                    e.lines += i * (t - 1);
                                    break;
                                case 2:
                                    e.lines += i * t;
                                    break;
                                case 0:
                                    e.points += i * t;
                                    break;
                                default:
                                    console.error("THREE.WebGLInfo: Unknown draw mode:", n)
                            }
                        }
                    }
                }(S), C = new function() {
                    var t = new WeakMap;
                    return {
                        get: function(e) {
                            var n = t.get(e);
                            return void 0 === n && (n = {}, t.set(e, n)), n
                        },
                        remove: function(e) {
                            t.delete(e)
                        },
                        update: function(e, n, i) {
                            t.get(e)[n] = i
                        },
                        dispose: function() {
                            t = new WeakMap
                        }
                    }
                }, O = new ea(S, A, L, C, P, Q, R), I = new Tr(S), D = new function(t, e, n) {
                    var i = new WeakMap,
                        r = new WeakMap;

                    function o(t) {
                        var a = t.target,
                            s = i.get(a);
                        for (var c in null !== s.index && e.remove(s.index), s.attributes) e.remove(s.attributes[c]);
                        a.removeEventListener("dispose", o), i.delete(a);
                        var l = r.get(s);
                        l && (e.remove(l), r.delete(s)), n.memory.geometries--
                    }

                    function a(t) {
                        var n = [],
                            i = t.index,
                            o = t.attributes.position,
                            a = 0;
                        if (null !== i) {
                            var s = i.array;
                            a = i.version;
                            for (var c = 0, l = s.length; c < l; c += 3) {
                                var h = s[c + 0],
                                    u = s[c + 1],
                                    p = s[c + 2];
                                n.push(h, u, u, p, p, h)
                            }
                        } else {
                            var s = o.array;
                            a = o.version;
                            for (var c = 0, l = s.length / 3 - 1; c < l; c += 3) {
                                var h = c + 0,
                                    u = c + 1,
                                    p = c + 2;
                                n.push(h, u, u, p, p, h)
                            }
                        }
                        var d = new(yi(n) > 65535 ? fi : pi)(n, 1);
                        d.version = a, e.update(d, 34963);
                        var f = r.get(t);
                        f && e.remove(f), r.set(t, d)
                    }
                    return {
                        get: function(t, e) {
                            var r = i.get(e);
                            return r || (e.addEventListener("dispose", o), e.isBufferGeometry ? r = e : e.isGeometry && (void 0 === e._bufferGeometry && (e._bufferGeometry = (new Si).setFromObject(t)), r = e._bufferGeometry), i.set(e, r), n.memory.geometries++, r)
                        },
                        update: function(t) {
                            var n = t.index,
                                i = t.attributes;
                            for (var r in null !== n && e.update(n, 34963), i) e.update(i[r], 34962);
                            var o = t.morphAttributes;
                            for (var r in o)
                                for (var a = o[r], s = 0, c = a.length; s < c; s++) e.update(a[s], 34962)
                        },
                        getWireframeAttribute: function(t) {
                            var e = r.get(t);
                            if (e) {
                                var n = t.index;
                                null !== n && e.version < n.version && a(t)
                            } else a(t);
                            return r.get(t)
                        }
                    }
                }(S, I, R), j = new function(t, e, n, i) {
                    var r = {};
                    return {
                        update: function(t) {
                            var o = i.render.frame,
                                a = t.geometry,
                                s = e.get(t, a);
                            return r[s.id] !== o && (a.isGeometry && s.updateFromObject(t), e.update(s), r[s.id] = o), t.isInstancedMesh && n.update(t.instanceMatrix, 34962), s
                        },
                        dispose: function() {
                            r = {}
                        }
                    }
                }(S, D, I, R), Z = new function(t) {
                    var e = {},
                        n = new Float32Array(8);
                    return {
                        update: function(i, r, o, a) {
                            var s = i.morphTargetInfluences,
                                c = s.length,
                                l = e[r.id];
                            if (void 0 === l) {
                                l = [];
                                for (var h = 0; h < c; h++) l[h] = [h, 0];
                                e[r.id] = l
                            }
                            for (var u = o.morphTargets && r.morphAttributes.position, p = o.morphNormals && r.morphAttributes.normal, h = 0; h < c; h++) {
                                var d = l[h];
                                0 !== d[1] && (u && r.removeAttribute("morphTarget" + h), p && r.removeAttribute("morphNormal" + h))
                            }
                            for (var h = 0; h < c; h++) {
                                var d = l[h];
                                d[0] = h, d[1] = s[h]
                            }
                            l.sort(Ar);
                            for (var h = 0; h < 8; h++) {
                                var d = l[h];
                                if (d) {
                                    var f = d[0],
                                        m = d[1];
                                    if (m) {
                                        u && r.addAttribute("morphTarget" + h, u[f]), p && r.addAttribute("morphNormal" + h, p[f]), n[h] = m;
                                        continue
                                    }
                                }
                                n[h] = 0
                            }
                            a.getUniforms().setValue(t, "morphTargetInfluences", n)
                        }
                    }
                }(S), V = new Go($, A, P), W = new function() {
                    var t = new WeakMap;

                    function e(n) {
                        var i = n.target;
                        i.removeEventListener("dispose", e), t.delete(i)
                    }
                    return {
                        get: function(n, i) {
                            var r, o = t.get(n);
                            return void 0 === o ? (r = new Wo, t.set(n, new WeakMap), t.get(n).set(i, r), n.addEventListener("dispose", e)) : void 0 === (r = o.get(i)) && (r = new Wo, o.set(i, r)), r
                        },
                        dispose: function() {
                            t = new WeakMap
                        }
                    }
                }, X = new function() {
                    var t = new WeakMap;

                    function e(n) {
                        var i = n.target;
                        i.removeEventListener("dispose", e), t.delete(i)
                    }
                    return {
                        get: function(n, i) {
                            var r;
                            return !1 === t.has(n) ? (r = new Zo, t.set(n, new WeakMap), t.get(n).set(i, r), n.addEventListener("dispose", e)) : !1 === t.get(n).has(i) ? (r = new Zo, t.get(n).set(i, r)) : r = t.get(n).get(i), r
                        },
                        dispose: function() {
                            t = new WeakMap
                        }
                    }
                }, Y = new function(t, e, n, i) {
                    var r, o, a = new $n(0),
                        l = 0,
                        h = null,
                        u = 0;

                    function p(t, n) {
                        e.buffers.color.setClear(t.r, t.g, t.b, n, i)
                    }
                    return {
                        getClearColor: function() {
                            return a
                        },
                        setClearColor: function(t, e) {
                            a.set(t), p(a, l = void 0 !== e ? e : 1)
                        },
                        getClearAlpha: function() {
                            return l
                        },
                        setClearAlpha: function(t) {
                            p(a, l = t)
                        },
                        render: function(e, i, d, f) {
                            var m = i.background,
                                v = t.vr,
                                g = v.getSession && v.getSession();
                            if (g && "additive" === g.environmentBlendMode && (m = null), null === m ? (p(a, l), h = null, u = 0) : m && m.isColor && (p(m, 1), f = !0, h = null, u = 0), (t.autoClear || f) && t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil), m && (m.isCubeTexture || m.isWebGLRenderTargetCube)) {
                                void 0 === o && ((o = new Vi(new $i(1, 1, 1), new or({
                                    type: "BackgroundCubeMaterial",
                                    uniforms: tr(wr.cube.uniforms),
                                    vertexShader: wr.cube.vertexShader,
                                    fragmentShader: wr.cube.fragmentShader,
                                    side: c,
                                    depthTest: !1,
                                    depthWrite: !1,
                                    fog: !1
                                }))).geometry.removeAttribute("normal"), o.geometry.removeAttribute("uv"), o.onBeforeRender = function(t, e, n) {
                                    this.matrixWorld.copyPosition(n.matrixWorld)
                                }, Object.defineProperty(o.material, "map", {
                                    get: function() {
                                        return this.uniforms.tCube.value
                                    }
                                }), n.update(o));
                                var y = m.isWebGLRenderTargetCube ? m.texture : m;
                                o.material.uniforms.tCube.value = y, o.material.uniforms.tFlip.value = m.isWebGLRenderTargetCube ? 1 : -1, h === m && u === y.version || (o.material.needsUpdate = !0, h = m, u = y.version), e.unshift(o, o.geometry, o.material, 0, 0, null)
                            } else m && m.isTexture && (void 0 === r && ((r = new Vi(new Sr(2, 2), new or({
                                type: "BackgroundMaterial",
                                uniforms: tr(wr.background.uniforms),
                                vertexShader: wr.background.vertexShader,
                                fragmentShader: wr.background.fragmentShader,
                                side: s,
                                depthTest: !1,
                                depthWrite: !1,
                                fog: !1
                            }))).geometry.removeAttribute("normal"), Object.defineProperty(r.material, "map", {
                                get: function() {
                                    return this.uniforms.t2D.value
                                }
                            }), n.update(r)), r.material.uniforms.t2D.value = m, !0 === m.matrixAutoUpdate && m.updateMatrix(), r.material.uniforms.uvTransform.value.copy(m.matrix), h === m && u === m.version || (r.material.needsUpdate = !0, h = m, u = m.version), e.unshift(r, r.geometry, r.material, 0, 0, null))
                        }
                    }
                }($, L, j, x), J = new function(t, e, n, i) {
                    var r;
                    this.setMode = function(t) {
                        r = t
                    }, this.render = function(e, i) {
                        t.drawArrays(r, e, i), n.update(i, r)
                    }, this.renderInstances = function(o, a, s, c) {
                        if (0 !== c) {
                            var l, h;
                            if (i.isWebGL2) l = t, h = "drawArraysInstanced";
                            else if (l = e.get("ANGLE_instanced_arrays"), h = "drawArraysInstancedANGLE", null === l) return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
                            l[h](r, a, s, c), n.update(s, r, c)
                        }
                    }
                }(S, A, R, P), K = new function(t, e, n, i) {
                    var r, o, a;
                    this.setMode = function(t) {
                        r = t
                    }, this.setIndex = function(t) {
                        o = t.type, a = t.bytesPerElement
                    }, this.render = function(e, i) {
                        t.drawElements(r, i, o, e * a), n.update(i, r)
                    }, this.renderInstances = function(s, c, l, h) {
                        if (0 !== h) {
                            var u, p;
                            if (i.isWebGL2) u = t, p = "drawElementsInstanced";
                            else if (u = e.get("ANGLE_instanced_arrays"), p = "drawElementsInstancedANGLE", null === u) return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
                            u[p](r, l, o, c * a, h), n.update(l, r, h)
                        }
                    }
                }(S, A, R, P), R.programs = V.programs, $.capabilities = P, $.extensions = A, $.properties = C, $.renderLists = W, $.state = L, $.info = R
            }
            Ct();
            var Ot = "undefined" != typeof navigator && "xr" in navigator && "supportsSession" in navigator.xr ? new pa($, S) : new ua($);
            this.vr = Ot;
            var It = new ra($, S),
                Dt = new ta($, j, P.maxTextureSize);

            function Nt(t) {
                t.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), tt = !0
            }

            function Bt() {
                console.log("THREE.WebGLRenderer: Context Restored."), tt = !1, Ct()
            }

            function Ht(t) {
                var e = t.target;
                e.removeEventListener("dispose", Ht),
                    function(t) {
                        Ft(t), C.remove(t)
                    }(e)
            }

            function Ft(t) {
                var e = C.get(t).program;
                t.program = void 0, void 0 !== e && V.releaseProgram(e)
            }
            this.shadowMap = Dt, this.getContext = function() {
                return S
            }, this.getContextAttributes = function() {
                return S.getContextAttributes()
            }, this.forceContextLoss = function() {
                var t = A.get("WEBGL_lose_context");
                t && t.loseContext()
            }, this.forceContextRestore = function() {
                var t = A.get("WEBGL_lose_context");
                t && t.restoreContext()
            }, this.getPixelRatio = function() {
                return vt
            }, this.setPixelRatio = function(t) {
                void 0 !== t && (vt = t, this.setSize(dt, mt, !1))
            }, this.getSize = function(t) {
                return void 0 === t && (console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"), t = new Ae), t.set(dt, mt)
            }, this.setSize = function(t, e, n) {
                Ot.isPresenting() ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (dt = t, mt = e, r.width = Math.floor(t * vt), r.height = Math.floor(e * vt), !1 !== n && (r.style.width = t + "px", r.style.height = e + "px"), this.setViewport(0, 0, t, e))
            }, this.getDrawingBufferSize = function(t) {
                return void 0 === t && (console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"), t = new Ae), t.set(dt * vt, mt * vt).floor()
            }, this.setDrawingBufferSize = function(t, e, n) {
                dt = t, mt = e, vt = n, r.width = Math.floor(t * n), r.height = Math.floor(e * n), this.setViewport(0, 0, t, e)
            }, this.getCurrentViewport = function(t) {
                return void 0 === t && (console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"), t = new Fe), t.copy(ht)
            }, this.getViewport = function(t) {
                return t.copy(gt)
            }, this.setViewport = function(t, e, n, i) {
                t.isVector4 ? gt.set(t.x, t.y, t.z, t.w) : gt.set(t, e, n, i), L.viewport(ht.copy(gt).multiplyScalar(vt).floor())
            }, this.getScissor = function(t) {
                return t.copy(yt)
            }, this.setScissor = function(t, e, n, i) {
                t.isVector4 ? yt.set(t.x, t.y, t.z, t.w) : yt.set(t, e, n, i), L.scissor(ut.copy(yt).multiplyScalar(vt).floor())
            }, this.getScissorTest = function() {
                return _t
            }, this.setScissorTest = function(t) {
                L.setScissorTest(_t = t)
            }, this.getClearColor = function() {
                return Y.getClearColor()
            }, this.setClearColor = function() {
                Y.setClearColor.apply(Y, arguments)
            }, this.getClearAlpha = function() {
                return Y.getClearAlpha()
            }, this.setClearAlpha = function() {
                Y.setClearAlpha.apply(Y, arguments)
            }, this.clear = function(t, e, n) {
                var i = 0;
                (void 0 === t || t) && (i |= 16384), (void 0 === e || e) && (i |= 256), (void 0 === n || n) && (i |= 1024), S.clear(i)
            }, this.clearColor = function() {
                this.clear(!0, !1, !1)
            }, this.clearDepth = function() {
                this.clear(!1, !0, !1)
            }, this.clearStencil = function() {
                this.clear(!1, !1, !0)
            }, this.dispose = function() {
                r.removeEventListener("webglcontextlost", Nt, !1), r.removeEventListener("webglcontextrestored", Bt, !1), W.dispose(), X.dispose(), C.dispose(), j.dispose(), Ot.dispose(), Ut.stop()
            }, this.renderBufferImmediate = function(t, e) {
                L.initAttributes();
                var n = C.get(t);
                t.hasPositions && !n.position && (n.position = S.createBuffer()), t.hasNormals && !n.normal && (n.normal = S.createBuffer()), t.hasUvs && !n.uv && (n.uv = S.createBuffer()), t.hasColors && !n.color && (n.color = S.createBuffer());
                var i = e.getAttributes();
                t.hasPositions && (S.bindBuffer(34962, n.position), S.bufferData(34962, t.positionArray, 35048), L.enableAttribute(i.position), S.vertexAttribPointer(i.position, 3, 5126, !1, 0, 0)), t.hasNormals && (S.bindBuffer(34962, n.normal), S.bufferData(34962, t.normalArray, 35048), L.enableAttribute(i.normal), S.vertexAttribPointer(i.normal, 3, 5126, !1, 0, 0)), t.hasUvs && (S.bindBuffer(34962, n.uv), S.bufferData(34962, t.uvArray, 35048), L.enableAttribute(i.uv), S.vertexAttribPointer(i.uv, 2, 5126, !1, 0, 0)), t.hasColors && (S.bindBuffer(34962, n.color), S.bufferData(34962, t.colorArray, 35048), L.enableAttribute(i.color), S.vertexAttribPointer(i.color, 3, 5126, !1, 0, 0)), L.disableUnusedAttributes(), S.drawArrays(4, 0, t.count), t.count = 0
            }, this.renderBufferDirect = function(t, e, n, i, r, o) {
                var a = r.isMesh && r.matrixWorld.determinant() < 0;
                L.setMaterial(i, a);
                var s = Vt(t, e, i, r),
                    c = !1;
                st.geometry === n.id && st.program === s.id && st.wireframe === (!0 === i.wireframe) || (st.geometry = n.id, st.program = s.id, st.wireframe = !0 === i.wireframe, c = !0), r.morphTargetInfluences && (Z.update(r, n, i, s), c = !0);
                var l, h = n.index,
                    u = n.attributes.position,
                    p = 1;
                !0 === i.wireframe && (h = D.getWireframeAttribute(n), p = 2);
                var d = J;
                null !== h && (l = I.get(h), (d = K).setIndex(l)), c && (function(t, e, n, i) {
                    if (!1 !== P.isWebGL2 || !t.isInstancedMesh && !e.isInstancedBufferGeometry || null !== A.get("ANGLE_instanced_arrays")) {
                        L.initAttributes();
                        var r = e.attributes,
                            o = i.getAttributes(),
                            a = n.defaultAttributeValues;
                        for (var s in o) {
                            var c = o[s];
                            if (c >= 0) {
                                var l = r[s];
                                if (void 0 !== l) {
                                    var h = l.normalized,
                                        u = l.itemSize,
                                        p = I.get(l);
                                    if (void 0 === p) continue;
                                    var d = p.buffer,
                                        f = p.type,
                                        m = p.bytesPerElement;
                                    if (l.isInterleavedBufferAttribute) {
                                        var v = l.data,
                                            g = v.stride,
                                            y = l.offset;
                                        v && v.isInstancedInterleavedBuffer ? (L.enableAttributeAndDivisor(c, v.meshPerAttribute), void 0 === e.maxInstancedCount && (e.maxInstancedCount = v.meshPerAttribute * v.count)) : L.enableAttribute(c), S.bindBuffer(34962, d), S.vertexAttribPointer(c, u, f, h, g * m, y * m)
                                    } else l.isInstancedBufferAttribute ? (L.enableAttributeAndDivisor(c, l.meshPerAttribute), void 0 === e.maxInstancedCount && (e.maxInstancedCount = l.meshPerAttribute * l.count)) : L.enableAttribute(c), S.bindBuffer(34962, d), S.vertexAttribPointer(c, u, f, h, 0, 0)
                                } else if ("instanceMatrix" === s) {
                                    var p = I.get(t.instanceMatrix);
                                    if (void 0 === p) continue;
                                    var d = p.buffer,
                                        f = p.type;
                                    L.enableAttributeAndDivisor(c + 0, 1), L.enableAttributeAndDivisor(c + 1, 1), L.enableAttributeAndDivisor(c + 2, 1), L.enableAttributeAndDivisor(c + 3, 1), S.bindBuffer(34962, d), S.vertexAttribPointer(c + 0, 4, f, !1, 64, 0), S.vertexAttribPointer(c + 1, 4, f, !1, 64, 16), S.vertexAttribPointer(c + 2, 4, f, !1, 64, 32), S.vertexAttribPointer(c + 3, 4, f, !1, 64, 48)
                                } else if (void 0 !== a) {
                                    var _ = a[s];
                                    if (void 0 !== _) switch (_.length) {
                                        case 2:
                                            S.vertexAttrib2fv(c, _);
                                            break;
                                        case 3:
                                            S.vertexAttrib3fv(c, _);
                                            break;
                                        case 4:
                                            S.vertexAttrib4fv(c, _);
                                            break;
                                        default:
                                            S.vertexAttrib1fv(c, _)
                                    }
                                }
                            }
                        }
                        L.disableUnusedAttributes()
                    }
                }(r, n, i, s), null !== h && S.bindBuffer(34963, l.buffer));
                var f = 1 / 0;
                null !== h ? f = h.count : void 0 !== u && (f = u.count);
                var m = n.drawRange.start * p,
                    v = n.drawRange.count * p,
                    g = null !== o ? o.start * p : 0,
                    y = null !== o ? o.count * p : 1 / 0,
                    _ = Math.max(m, g),
                    x = Math.min(f, m + v, g + y) - 1,
                    b = Math.max(0, x - _ + 1);
                if (0 !== b) {
                    if (r.isMesh)
                        if (!0 === i.wireframe) L.setLineWidth(i.wireframeLinewidth * Lt()), d.setMode(1);
                        else switch (r.drawMode) {
                            case ae:
                                d.setMode(4);
                                break;
                            case se:
                                d.setMode(5);
                                break;
                            case ce:
                                d.setMode(6)
                        } else if (r.isLine) {
                            var w = i.linewidth;
                            void 0 === w && (w = 1), L.setLineWidth(w * Lt()), r.isLineSegments ? d.setMode(1) : r.isLineLoop ? d.setMode(2) : d.setMode(3)
                        } else r.isPoints ? d.setMode(0) : r.isSprite && d.setMode(4);
                    r.isInstancedMesh ? d.renderInstances(n, _, b, r.count) : n.isInstancedBufferGeometry ? d.renderInstances(n, _, b, n.maxInstancedCount) : d.render(_, b)
                }
            }, this.compile = function(t, e) {
                (E = X.get(t, e)).init(), t.traverse(function(t) {
                    t.isLight && (E.pushLight(t), t.castShadow && E.pushShadow(t))
                }), E.setupLights(e), t.traverse(function(e) {
                    if (e.material)
                        if (Array.isArray(e.material))
                            for (var n = 0; n < e.material.length; n++) jt(e.material[n], t.fog, e);
                        else jt(e.material, t.fog, e)
                })
            };
            var kt = null,
                Ut = new Mr;

            function zt(t, e, n, i) {
                for (var r = 0, o = t.length; r < o; r++) {
                    var a = t[r],
                        s = a.object,
                        c = a.geometry,
                        l = void 0 === i ? a.material : i,
                        h = a.group;
                    if (n.isArrayCamera)
                        if (lt = n, Ot.enabled && It.isAvailable()) Gt(s, e, n, c, l, h);
                        else
                            for (var u = n.cameras, p = 0, d = u.length; p < d; p++) {
                                var f = u[p];
                                s.layers.test(f.layers) && (L.viewport(ht.copy(f.viewport)), E.setupLights(f), Gt(s, e, f, c, l, h))
                            } else lt = null, Gt(s, e, n, c, l, h)
                }
            }

            function Gt(t, e, n, i, r, o) {
                if (t.onBeforeRender($, e, n, i, r, o), E = X.get(e, lt || n), t.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, t.matrixWorld), t.normalMatrix.getNormalMatrix(t.modelViewMatrix), t.isImmediateRenderObject) {
                    L.setMaterial(r);
                    var a = Vt(n, e.fog, r, t);
                    st.geometry = null, st.program = null, st.wireframe = !1,
                        function(t, e) {
                            t.render(function(t) {
                                $.renderBufferImmediate(t, e)
                            })
                        }(t, a)
                } else $.renderBufferDirect(n, e.fog, i, r, t, o);
                t.onAfterRender($, e, n, i, r, o), E = X.get(e, lt || n)
            }

            function jt(t, e, n) {
                var i = C.get(t),
                    r = E.state.lights,
                    o = E.state.shadowsArray,
                    a = r.state.version,
                    s = V.getParameters(t, r.state, o, e, Mt.numPlanes, Mt.numIntersection, n),
                    c = V.getProgramCode(t, s),
                    l = i.program,
                    h = !0;
                if (void 0 === l) t.addEventListener("dispose", Ht);
                else if (l.code !== c) Ft(t);
                else if (i.lightsStateVersion !== a) i.lightsStateVersion = a, h = !1;
                else {
                    if (void 0 !== s.shaderID) return;
                    h = !1
                }
                if (h) {
                    if (s.shaderID) {
                        var u = wr[s.shaderID];
                        i.shader = {
                            name: t.type,
                            uniforms: tr(u.uniforms),
                            vertexShader: u.vertexShader,
                            fragmentShader: u.fragmentShader
                        }
                    } else i.shader = {
                        name: t.type,
                        uniforms: t.uniforms,
                        vertexShader: t.vertexShader,
                        fragmentShader: t.fragmentShader
                    };
                    t.onBeforeCompile(i.shader, $), c = V.getProgramCode(t, s), l = V.acquireProgram(t, i.shader, s, c), i.program = l, t.program = l
                }
                var p = l.getAttributes();
                if (t.morphTargets) {
                    t.numSupportedMorphTargets = 0;
                    for (var d = 0; d < $.maxMorphTargets; d++) p["morphTarget" + d] >= 0 && t.numSupportedMorphTargets++
                }
                if (t.morphNormals) {
                    t.numSupportedMorphNormals = 0;
                    for (var d = 0; d < $.maxMorphNormals; d++) p["morphNormal" + d] >= 0 && t.numSupportedMorphNormals++
                }
                var f = i.shader.uniforms;
                (t.isShaderMaterial || t.isRawShaderMaterial) && !0 !== t.clipping || (i.numClippingPlanes = Mt.numPlanes, i.numIntersection = Mt.numIntersection, f.clippingPlanes = Mt.uniform), i.fog = e, i.needsLights = function(t) {
                    return t.isMeshLambertMaterial || t.isMeshPhongMaterial || t.isMeshStandardMaterial || t.isShadowMaterial || t.isShaderMaterial && !0 === t.lights
                }(t), i.lightsStateVersion = a, i.needsLights && (f.ambientLightColor.value = r.state.ambient, f.lightProbe.value = r.state.probe, f.directionalLights.value = r.state.directional, f.spotLights.value = r.state.spot, f.rectAreaLights.value = r.state.rectArea, f.pointLights.value = r.state.point, f.hemisphereLights.value = r.state.hemi, f.directionalShadowMap.value = r.state.directionalShadowMap, f.directionalShadowMatrix.value = r.state.directionalShadowMatrix, f.spotShadowMap.value = r.state.spotShadowMap, f.spotShadowMatrix.value = r.state.spotShadowMatrix, f.pointShadowMap.value = r.state.pointShadowMap, f.pointShadowMatrix.value = r.state.pointShadowMatrix);
                var m = i.program.getUniforms(),
                    v = Eo.seqWithValue(m.seq, f);
                i.uniformsList = v
            }

            function Vt(t, e, n, i) {
                O.resetTextureUnits();
                var r = C.get(n),
                    o = E.state.lights;
                if (Tt && (Et || t !== ct)) {
                    var a = t === ct && n.id === at;
                    Mt.setState(n.clippingPlanes, n.clipIntersection, n.clipShadows, t, r, a)
                }!1 === n.needsUpdate && (void 0 === r.program ? n.needsUpdate = !0 : n.fog && r.fog !== e ? n.needsUpdate = !0 : r.needsLights && r.lightsStateVersion !== o.state.version ? n.needsUpdate = !0 : void 0 === r.numClippingPlanes || r.numClippingPlanes === Mt.numPlanes && r.numIntersection === Mt.numIntersection || (n.needsUpdate = !0)), n.needsUpdate && (jt(n, e, i), n.needsUpdate = !1);
                var s = !1,
                    l = !1,
                    h = !1,
                    u = r.program,
                    p = u.getUniforms(),
                    d = r.shader.uniforms;
                if (L.useProgram(u.program) && (s = !0, l = !0, h = !0), n.id !== at && (at = n.id, l = !0), s || ct !== t) {
                    if (u.numMultiviewViews > 0 ? It.updateCameraProjectionMatricesUniform(t, p) : p.setValue(S, "projectionMatrix", t.projectionMatrix), P.logarithmicDepthBuffer && p.setValue(S, "logDepthBufFC", 2 / (Math.log(t.far + 1) / Math.LN2)), ct !== t && (ct = t, l = !0, h = !0), n.isShaderMaterial || n.isMeshPhongMaterial || n.isMeshStandardMaterial || n.envMap) {
                        var f = p.map.cameraPosition;
                        void 0 !== f && f.setValue(S, At.setFromMatrixPosition(t.matrixWorld))
                    }(n.isMeshPhongMaterial || n.isMeshLambertMaterial || n.isMeshBasicMaterial || n.isMeshStandardMaterial || n.isShaderMaterial || n.skinning) && (u.numMultiviewViews > 0 ? It.updateCameraViewMatricesUniform(t, p) : p.setValue(S, "viewMatrix", t.matrixWorldInverse))
                }
                if (n.skinning) {
                    p.setOptional(S, i, "bindMatrix"), p.setOptional(S, i, "bindMatrixInverse");
                    var m = i.skeleton;
                    if (m) {
                        var v = m.bones;
                        if (P.floatVertexTextures) {
                            if (void 0 === m.boneTexture) {
                                var g = Math.sqrt(4 * v.length);
                                g = Se.ceilPowerOfTwo(g), g = Math.max(g, 4);
                                var y = new Float32Array(g * g * 4);
                                y.set(m.boneMatrices);
                                var _ = new pr(y, g, g, Pt, xt);
                                m.boneMatrices = y, m.boneTexture = _, m.boneTextureSize = g
                            }
                            p.setValue(S, "boneTexture", m.boneTexture, O), p.setValue(S, "boneTextureSize", m.boneTextureSize)
                        } else p.setOptional(S, m, "boneMatrices")
                    }
                }
                return (l || r.receiveShadow !== i.receiveShadow) && (r.receiveShadow = i.receiveShadow, p.setValue(S, "receiveShadow", i.receiveShadow)), l && (p.setValue(S, "toneMappingExposure", $.toneMappingExposure), p.setValue(S, "toneMappingWhitePoint", $.toneMappingWhitePoint), r.needsLights && function(t, e) {
                    t.ambientLightColor.needsUpdate = e, t.lightProbe.needsUpdate = e, t.directionalLights.needsUpdate = e, t.pointLights.needsUpdate = e, t.spotLights.needsUpdate = e, t.rectAreaLights.needsUpdate = e, t.hemisphereLights.needsUpdate = e
                }(d, h), e && n.fog && function(t, e) {
                    t.fogColor.value.copy(e.color), e.isFog ? (t.fogNear.value = e.near, t.fogFar.value = e.far) : e.isFogExp2 && (t.fogDensity.value = e.density)
                }(d, e), n.isMeshBasicMaterial ? Wt(d, n) : n.isMeshLambertMaterial ? (Wt(d, n), function(t, e) {
                    e.emissiveMap && (t.emissiveMap.value = e.emissiveMap)
                }(d, n)) : n.isMeshPhongMaterial ? (Wt(d, n), n.isMeshToonMaterial ? function(t, e) {
                    Xt(t, e), e.gradientMap && (t.gradientMap.value = e.gradientMap)
                }(d, n) : Xt(d, n)) : n.isMeshStandardMaterial ? (Wt(d, n), n.isMeshPhysicalMaterial ? function(t, e) {
                    qt(t, e), t.reflectivity.value = e.reflectivity, t.clearcoat.value = e.clearcoat, t.clearcoatRoughness.value = e.clearcoatRoughness, e.sheen && t.sheen.value.copy(e.sheen), e.clearcoatNormalMap && (t.clearcoatNormalScale.value.copy(e.clearcoatNormalScale), t.clearcoatNormalMap.value = e.clearcoatNormalMap, e.side === c && t.clearcoatNormalScale.value.negate()), t.transparency.value = e.transparency
                }(d, n) : qt(d, n)) : n.isMeshMatcapMaterial ? (Wt(d, n), function(t, e) {
                    e.matcap && (t.matcap.value = e.matcap), e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, e.side === c && (t.bumpScale.value *= -1)), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), e.side === c && t.normalScale.value.negate()), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
                }(d, n)) : n.isMeshDepthMaterial ? (Wt(d, n), function(t, e) {
                    e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
                }(d, n)) : n.isMeshDistanceMaterial ? (Wt(d, n), function(t, e) {
                    e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias), t.referencePosition.value.copy(e.referencePosition), t.nearDistance.value = e.nearDistance, t.farDistance.value = e.farDistance
                }(d, n)) : n.isMeshNormalMaterial ? (Wt(d, n), function(t, e) {
                    e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, e.side === c && (t.bumpScale.value *= -1)), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), e.side === c && t.normalScale.value.negate()), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
                }(d, n)) : n.isLineBasicMaterial ? (function(t, e) {
                    t.diffuse.value.copy(e.color), t.opacity.value = e.opacity
                }(d, n), n.isLineDashedMaterial && function(t, e) {
                    t.dashSize.value = e.dashSize, t.totalSize.value = e.dashSize + e.gapSize, t.scale.value = e.scale
                }(d, n)) : n.isPointsMaterial ? function(t, e) {
                    t.diffuse.value.copy(e.color), t.opacity.value = e.opacity, t.size.value = e.size * vt, t.scale.value = .5 * mt, t.map.value = e.map, null !== e.map && (!0 === e.map.matrixAutoUpdate && e.map.updateMatrix(), t.uvTransform.value.copy(e.map.matrix))
                }(d, n) : n.isSpriteMaterial ? function(t, e) {
                    t.diffuse.value.copy(e.color), t.opacity.value = e.opacity, t.rotation.value = e.rotation, t.map.value = e.map, null !== e.map && (!0 === e.map.matrixAutoUpdate && e.map.updateMatrix(), t.uvTransform.value.copy(e.map.matrix))
                }(d, n) : n.isShadowMaterial && (d.color.value.copy(n.color), d.opacity.value = n.opacity), void 0 !== d.ltc_1 && (d.ltc_1.value = br.LTC_1), void 0 !== d.ltc_2 && (d.ltc_2.value = br.LTC_2), Eo.upload(S, r.uniformsList, d, O)), n.isShaderMaterial && !0 === n.uniformsNeedUpdate && (Eo.upload(S, r.uniformsList, d, O), n.uniformsNeedUpdate = !1), n.isSpriteMaterial && p.setValue(S, "center", i.center), u.numMultiviewViews > 0 ? It.updateObjectMatricesUniforms(i, t, p) : (p.setValue(S, "modelViewMatrix", i.modelViewMatrix), p.setValue(S, "normalMatrix", i.normalMatrix)), p.setValue(S, "modelMatrix", i.matrixWorld), u
            }

            function Wt(t, e) {
                var n;
                t.opacity.value = e.opacity, e.color && t.diffuse.value.copy(e.color), e.emissive && t.emissive.value.copy(e.emissive).multiplyScalar(e.emissiveIntensity), e.map && (t.map.value = e.map), e.alphaMap && (t.alphaMap.value = e.alphaMap), e.specularMap && (t.specularMap.value = e.specularMap), e.envMap && (t.envMap.value = e.envMap, t.flipEnvMap.value = e.envMap.isCubeTexture ? -1 : 1, t.reflectivity.value = e.reflectivity, t.refractionRatio.value = e.refractionRatio, t.maxMipLevel.value = C.get(e.envMap).__maxMipLevel), e.lightMap && (t.lightMap.value = e.lightMap, t.lightMapIntensity.value = e.lightMapIntensity), e.aoMap && (t.aoMap.value = e.aoMap, t.aoMapIntensity.value = e.aoMapIntensity), e.map ? n = e.map : e.specularMap ? n = e.specularMap : e.displacementMap ? n = e.displacementMap : e.normalMap ? n = e.normalMap : e.bumpMap ? n = e.bumpMap : e.roughnessMap ? n = e.roughnessMap : e.metalnessMap ? n = e.metalnessMap : e.alphaMap ? n = e.alphaMap : e.emissiveMap && (n = e.emissiveMap), void 0 !== n && (n.isWebGLRenderTarget && (n = n.texture), !0 === n.matrixAutoUpdate && n.updateMatrix(), t.uvTransform.value.copy(n.matrix))
            }

            function Xt(t, e) {
                t.specular.value.copy(e.specular), t.shininess.value = Math.max(e.shininess, 1e-4), e.emissiveMap && (t.emissiveMap.value = e.emissiveMap), e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, e.side === c && (t.bumpScale.value *= -1)), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), e.side === c && t.normalScale.value.negate()), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
            }

            function qt(t, e) {
                t.roughness.value = e.roughness, t.metalness.value = e.metalness, e.roughnessMap && (t.roughnessMap.value = e.roughnessMap), e.metalnessMap && (t.metalnessMap.value = e.metalnessMap), e.emissiveMap && (t.emissiveMap.value = e.emissiveMap), e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, e.side === c && (t.bumpScale.value *= -1)), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), e.side === c && t.normalScale.value.negate()), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias), e.envMap && (t.envMapIntensity.value = e.envMapIntensity)
            }
            Ut.setAnimationLoop(function(t) {
                Ot.isPresenting() || kt && kt(t)
            }), "undefined" != typeof window && Ut.setContext(window), this.setAnimationLoop = function(t) {
                kt = t, Ot.setAnimationLoop(t), Ut.start()
            }, this.render = function(t, e) {
                var n, i;
                if (void 0 !== arguments[2] && (console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."), n = arguments[2]), void 0 !== arguments[3] && (console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."), i = arguments[3]), e && e.isCamera) {
                    if (!tt) {
                        st.geometry = null, st.program = null, st.wireframe = !1, at = -1, ct = null, !0 === t.autoUpdate && t.updateMatrixWorld(), null === e.parent && e.updateMatrixWorld(), Ot.enabled && (e = Ot.getCamera(e)), (E = X.get(t, e)).init(), t.onBeforeRender($, t, e, n || rt), St.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), wt.setFromMatrix(St), Et = this.localClippingEnabled, Tt = Mt.init(this.clippingPlanes, Et, e), (T = W.get(t, e)).init(),
                            function t(e, n, i, r) {
                                if (!1 !== e.visible) {
                                    var o = e.layers.test(n.layers);
                                    if (o)
                                        if (e.isGroup) i = e.renderOrder;
                                        else if (e.isLOD) !0 === e.autoUpdate && e.update(n);
                                    else if (e.isLight) E.pushLight(e), e.castShadow && E.pushShadow(e);
                                    else if (e.isSprite) {
                                        if (!e.frustumCulled || wt.intersectsSprite(e)) {
                                            r && At.setFromMatrixPosition(e.matrixWorld).applyMatrix4(St);
                                            var a = j.update(e),
                                                s = e.material;
                                            s.visible && T.push(e, a, s, i, At.z, null)
                                        }
                                    } else if (e.isImmediateRenderObject) r && At.setFromMatrixPosition(e.matrixWorld).applyMatrix4(St), T.push(e, null, e.material, i, At.z, null);
                                    else if ((e.isMesh || e.isLine || e.isPoints) && (e.isSkinnedMesh && e.skeleton.frame !== R.render.frame && (e.skeleton.update(), e.skeleton.frame = R.render.frame), !e.frustumCulled || wt.intersectsObject(e))) {
                                        r && At.setFromMatrixPosition(e.matrixWorld).applyMatrix4(St);
                                        var a = j.update(e),
                                            s = e.material;
                                        if (Array.isArray(s))
                                            for (var c = a.groups, l = 0, h = c.length; l < h; l++) {
                                                var u = c[l],
                                                    p = s[u.materialIndex];
                                                p && p.visible && T.push(e, a, p, i, At.z, u)
                                            } else s.visible && T.push(e, a, s, i, At.z, null)
                                    }
                                    for (var d = e.children, l = 0, h = d.length; l < h; l++) t(d[l], n, i, r)
                                }
                            }(t, e, 0, $.sortObjects), !0 === $.sortObjects && T.sort(), Tt && Mt.beginShadows();
                        var r = E.state.shadowsArray;
                        Dt.render(r, t, e), E.setupLights(e), Tt && Mt.endShadows(), this.info.autoReset && this.info.reset(), void 0 !== n && this.setRenderTarget(n), Ot.enabled && It.isAvailable() && It.attachCamera(e), Y.render(T, t, e, i);
                        var o = T.opaque,
                            a = T.transparent;
                        if (t.overrideMaterial) {
                            var s = t.overrideMaterial;
                            o.length && zt(o, t, e, s), a.length && zt(a, t, e, s)
                        } else o.length && zt(o, t, e), a.length && zt(a, t, e);
                        t.onAfterRender($, t, e), null !== rt && (O.updateRenderTargetMipmap(rt), O.updateMultisampleRenderTarget(rt)), L.buffers.depth.setTest(!0), L.buffers.depth.setMask(!0), L.buffers.color.setMask(!0), L.setPolygonOffset(!1), Ot.enabled && (It.isAvailable() && It.detachCamera(e), Ot.submitFrame()), T = null, E = null
                    }
                } else console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.")
            }, this.setFramebuffer = function(t) {
                et !== t && S.bindFramebuffer(36160, t), et = t
            }, this.getActiveCubeFace = function() {
                return nt
            }, this.getActiveMipmapLevel = function() {
                return it
            }, this.getRenderTarget = function() {
                return rt
            }, this.setRenderTarget = function(t, e, n) {
                rt = t, nt = e, it = n, t && void 0 === C.get(t).__webglFramebuffer && O.setupRenderTarget(t);
                var i = et,
                    r = !1;
                if (t) {
                    var o = C.get(t).__webglFramebuffer;
                    t.isWebGLRenderTargetCube ? (i = o[e || 0], r = !0) : i = t.isWebGLMultisampleRenderTarget ? C.get(t).__webglMultisampledFramebuffer : o, ht.copy(t.viewport), ut.copy(t.scissor), pt = t.scissorTest
                } else ht.copy(gt).multiplyScalar(vt).floor(), ut.copy(yt).multiplyScalar(vt).floor(), pt = _t;
                if (ot !== i && (S.bindFramebuffer(36160, i), ot = i), L.viewport(ht), L.scissor(ut), L.setScissorTest(pt), r) {
                    var a = C.get(t.texture);
                    S.framebufferTexture2D(36160, 36064, 34069 + (e || 0), a.__webglTexture, n || 0)
                }
            }, this.readRenderTargetPixels = function(t, e, n, i, r, o, a) {
                if (t && t.isWebGLRenderTarget) {
                    var s = C.get(t).__webglFramebuffer;
                    if (t.isWebGLRenderTargetCube && void 0 !== a && (s = s[a]), s) {
                        var c = !1;
                        s !== ot && (S.bindFramebuffer(36160, s), c = !0);
                        try {
                            var l = t.texture,
                                h = l.format,
                                u = l.type;
                            if (h !== Pt && Q.convert(h) !== S.getParameter(35739)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
                            if (!(u === ft || Q.convert(u) === S.getParameter(35738) || u === xt && (P.isWebGL2 || A.get("OES_texture_float") || A.get("WEBGL_color_buffer_float")) || u === bt && (P.isWebGL2 ? A.get("EXT_color_buffer_float") : A.get("EXT_color_buffer_half_float")))) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                            36053 === S.checkFramebufferStatus(36160) ? e >= 0 && e <= t.width - i && n >= 0 && n <= t.height - r && S.readPixels(e, n, i, r, Q.convert(h), Q.convert(u), o) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")
                        } finally {
                            c && S.bindFramebuffer(36160, ot)
                        }
                    }
                } else console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.")
            }, this.copyFramebufferToTexture = function(t, e, n) {
                var i = e.image.width,
                    r = e.image.height,
                    o = Q.convert(e.format);
                O.setTexture2D(e, 0), S.copyTexImage2D(3553, n || 0, o, t.x, t.y, i, r, 0)
            }, this.copyTextureToTexture = function(t, e, n, i) {
                var r = e.image.width,
                    o = e.image.height,
                    a = Q.convert(n.format),
                    s = Q.convert(n.type);
                O.setTexture2D(n, 0), e.isDataTexture ? S.texSubImage2D(3553, i || 0, t.x, t.y, r, o, a, s, e.image.data) : S.texSubImage2D(3553, i || 0, t.x, t.y, a, s, e.image)
            }, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
                detail: this
            }))
        }

        function fa(t, e) {
            this.name = "", this.color = new $n(t), this.density = void 0 !== e ? e : 25e-5
        }

        function ma(t, e, n) {
            this.name = "", this.color = new $n(t), this.near = void 0 !== e ? e : 1, this.far = void 0 !== n ? n : 1e3
        }

        function va(t, e) {
            this.array = t, this.stride = e, this.count = void 0 !== t ? t.length / e : 0, this.dynamic = !1, this.updateRange = {
                offset: 0,
                count: -1
            }, this.version = 0
        }

        function ga(t, e, n, i) {
            this.data = t, this.itemSize = e, this.offset = n, this.normalized = !0 === i
        }

        function ya(t) {
            oi.call(this), this.type = "SpriteMaterial", this.color = new $n(16777215), this.map = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.setValues(t)
        }
        Object.assign(ua.prototype, Me.prototype), Object.assign(pa.prototype, Me.prototype), Object.assign(fa.prototype, {
            isFogExp2: !0,
            clone: function() {
                return new fa(this.color, this.density)
            },
            toJSON: function() {
                return {
                    type: "FogExp2",
                    color: this.color.getHex(),
                    density: this.density
                }
            }
        }), Object.assign(ma.prototype, {
            isFog: !0,
            clone: function() {
                return new ma(this.color, this.near, this.far)
            },
            toJSON: function() {
                return {
                    type: "Fog",
                    color: this.color.getHex(),
                    near: this.near,
                    far: this.far
                }
            }
        }), Object.defineProperty(va.prototype, "needsUpdate", {
            set: function(t) {
                !0 === t && this.version++
            }
        }), Object.assign(va.prototype, {
            isInterleavedBuffer: !0,
            onUploadCallback: function() {},
            setDynamic: function(t) {
                return this.dynamic = t, this
            },
            copy: function(t) {
                return this.array = new t.array.constructor(t.array), this.count = t.count, this.stride = t.stride, this.dynamic = t.dynamic, this
            },
            copyAt: function(t, e, n) {
                t *= this.stride, n *= e.stride;
                for (var i = 0, r = this.stride; i < r; i++) this.array[t + i] = e.array[n + i];
                return this
            },
            set: function(t, e) {
                return void 0 === e && (e = 0), this.array.set(t, e), this
            },
            clone: function() {
                return (new this.constructor).copy(this)
            },
            onUpload: function(t) {
                return this.onUploadCallback = t, this
            }
        }), Object.defineProperties(ga.prototype, {
            count: {
                get: function() {
                    return this.data.count
                }
            },
            array: {
                get: function() {
                    return this.data.array
                }
            }
        }), Object.assign(ga.prototype, {
            isInterleavedBufferAttribute: !0,
            setX: function(t, e) {
                return this.data.array[t * this.data.stride + this.offset] = e, this
            },
            setY: function(t, e) {
                return this.data.array[t * this.data.stride + this.offset + 1] = e, this
            },
            setZ: function(t, e) {
                return this.data.array[t * this.data.stride + this.offset + 2] = e, this
            },
            setW: function(t, e) {
                return this.data.array[t * this.data.stride + this.offset + 3] = e, this
            },
            getX: function(t) {
                return this.data.array[t * this.data.stride + this.offset]
            },
            getY: function(t) {
                return this.data.array[t * this.data.stride + this.offset + 1]
            },
            getZ: function(t) {
                return this.data.array[t * this.data.stride + this.offset + 2]
            },
            getW: function(t) {
                return this.data.array[t * this.data.stride + this.offset + 3]
            },
            setXY: function(t, e, n) {
                return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = n, this
            },
            setXYZ: function(t, e, n, i) {
                return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = n, this.data.array[t + 2] = i, this
            },
            setXYZW: function(t, e, n, i, r) {
                return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = n, this.data.array[t + 2] = i, this.data.array[t + 3] = r, this
            }
        }), ya.prototype = Object.create(oi.prototype), ya.prototype.constructor = ya, ya.prototype.isSpriteMaterial = !0, ya.prototype.copy = function(t) {
            return oi.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.rotation = t.rotation, this.sizeAttenuation = t.sizeAttenuation, this
        };
        var _a = new Ce,
            xa = new Ce,
            ba = new Ce,
            wa = new Ae,
            Ma = new Ae,
            Ta = new Ye,
            Ea = new Ce,
            Sa = new Ce,
            Aa = new Ce,
            Pa = new Ae,
            La = new Ae,
            Ra = new Ae;

        function Ca(t) {
            if (dn.call(this), this.type = "Sprite", void 0 === sa) {
                sa = new Si;
                var e = new Float32Array([-.5, -.5, 0, 0, 0, .5, -.5, 0, 1, 0, .5, .5, 0, 1, 1, -.5, .5, 0, 0, 1]),
                    n = new va(e, 5);
                sa.setIndex([0, 1, 2, 0, 2, 3]), sa.addAttribute("position", new ga(n, 3, 0, !1)), sa.addAttribute("uv", new ga(n, 2, 3, !1))
            }
            this.geometry = sa, this.material = void 0 !== t ? t : new ya, this.center = new Ae(.5, .5)
        }

        function Oa(t, e, n, i, r, o) {
            wa.subVectors(t, n).addScalar(.5).multiply(i), void 0 !== r ? (Ma.x = o * wa.x - r * wa.y, Ma.y = r * wa.x + o * wa.y) : Ma.copy(wa), t.copy(e), t.x += Ma.x, t.y += Ma.y, t.applyMatrix4(Ta)
        }
        Ca.prototype = Object.assign(Object.create(dn.prototype), {
            constructor: Ca,
            isSprite: !0,
            raycast: function(t, e) {
                null === t.camera && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), xa.setFromMatrixScale(this.matrixWorld), Ta.copy(t.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse, this.matrixWorld), ba.setFromMatrixPosition(this.modelViewMatrix), t.camera.isPerspectiveCamera && !1 === this.material.sizeAttenuation && xa.multiplyScalar(-ba.z);
                var n, i, r = this.material.rotation;
                0 !== r && (i = Math.cos(r), n = Math.sin(r));
                var o = this.center;
                Oa(Ea.set(-.5, -.5, 0), ba, o, xa, n, i), Oa(Sa.set(.5, -.5, 0), ba, o, xa, n, i), Oa(Aa.set(.5, .5, 0), ba, o, xa, n, i), Pa.set(0, 0), La.set(1, 0), Ra.set(1, 1);
                var a = t.ray.intersectTriangle(Ea, Sa, Aa, !1, _a);
                if (null !== a || (Oa(Sa.set(-.5, .5, 0), ba, o, xa, n, i), La.set(0, 1), null !== (a = t.ray.intersectTriangle(Ea, Aa, Sa, !1, _a)))) {
                    var s = t.ray.origin.distanceTo(_a);
                    s < t.near || s > t.far || e.push({
                        distance: s,
                        point: _a.clone(),
                        uv: Zn.getUV(_a, Ea, Sa, Aa, Pa, La, Ra, new Ae),
                        face: null,
                        object: this
                    })
                }
            },
            clone: function() {
                return new this.constructor(this.material).copy(this)
            },
            copy: function(t) {
                return dn.prototype.copy.call(this, t), void 0 !== t.center && this.center.copy(t.center), this
            }
        });
        var Ia = new Ce,
            Da = new Ce;

        function Na() {
            dn.call(this), this.type = "LOD", Object.defineProperties(this, {
                levels: {
                    enumerable: !0,
                    value: []
                }
            }), this.autoUpdate = !0
        }

        function Ba(t, e) {
            t && t.isGeometry && console.error("THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."), Vi.call(this, t, e), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new Ye, this.bindMatrixInverse = new Ye
        }
        Na.prototype = Object.assign(Object.create(dn.prototype), {
            constructor: Na,
            isLOD: !0,
            copy: function(t) {
                dn.prototype.copy.call(this, t, !1);
                for (var e = t.levels, n = 0, i = e.length; n < i; n++) {
                    var r = e[n];
                    this.addLevel(r.object.clone(), r.distance)
                }
                return this
            },
            addLevel: function(t, e) {
                void 0 === e && (e = 0), e = Math.abs(e);
                for (var n = this.levels, i = 0; i < n.length && !(e < n[i].distance); i++);
                return n.splice(i, 0, {
                    distance: e,
                    object: t
                }), this.add(t), this
            },
            getObjectForDistance: function(t) {
                for (var e = this.levels, n = 1, i = e.length; n < i && !(t < e[n].distance); n++);
                return e[n - 1].object
            },
            raycast: function(t, e) {
                Ia.setFromMatrixPosition(this.matrixWorld);
                var n = t.ray.origin.distanceTo(Ia);
                this.getObjectForDistance(n).raycast(t, e)
            },
            update: function(t) {
                var e = this.levels;
                if (e.length > 1) {
                    Ia.setFromMatrixPosition(t.matrixWorld), Da.setFromMatrixPosition(this.matrixWorld);
                    var n = Ia.distanceTo(Da);
                    e[0].object.visible = !0;
                    for (var i = 1, r = e.length; i < r && n >= e[i].distance; i++) e[i - 1].object.visible = !1, e[i].object.visible = !0;
                    for (; i < r; i++) e[i].object.visible = !1
                }
            },
            toJSON: function(t) {
                var e = dn.prototype.toJSON.call(this, t);
                e.object.levels = [];
                for (var n = this.levels, i = 0, r = n.length; i < r; i++) {
                    var o = n[i];
                    e.object.levels.push({
                        object: o.object.uuid,
                        distance: o.distance
                    })
                }
                return e
            }
        }), Ba.prototype = Object.assign(Object.create(Vi.prototype), {
            constructor: Ba,
            isSkinnedMesh: !0,
            bind: function(t, e) {
                this.skeleton = t, void 0 === e && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), e = this.matrixWorld), this.bindMatrix.copy(e), this.bindMatrixInverse.getInverse(e)
            },
            pose: function() {
                this.skeleton.pose()
            },
            normalizeSkinWeights: function() {
                for (var t = new Fe, e = this.geometry.attributes.skinWeight, n = 0, i = e.count; n < i; n++) {
                    t.x = e.getX(n), t.y = e.getY(n), t.z = e.getZ(n), t.w = e.getW(n);
                    var r = 1 / t.manhattanLength();
                    r !== 1 / 0 ? t.multiplyScalar(r) : t.set(1, 0, 0, 0), e.setXYZW(n, t.x, t.y, t.z, t.w)
                }
            },
            updateMatrixWorld: function(t) {
                Vi.prototype.updateMatrixWorld.call(this, t), "attached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.matrixWorld) : "detached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.bindMatrix) : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode)
            },
            clone: function() {
                return new this.constructor(this.geometry, this.material).copy(this)
            }
        });
        var Ha = new Ye,
            Fa = new Ye;

        function ka(t, e) {
            if (t = t || [], this.bones = t.slice(0), this.boneMatrices = new Float32Array(16 * this.bones.length), this.frame = -1, void 0 === e) this.calculateInverses();
            else if (this.bones.length === e.length) this.boneInverses = e.slice(0);
            else {
                console.warn("THREE.Skeleton boneInverses is the wrong length."), this.boneInverses = [];
                for (var n = 0, i = this.bones.length; n < i; n++) this.boneInverses.push(new Ye)
            }
        }

        function Ua() {
            dn.call(this), this.type = "Bone"
        }

        function za(t, e, n) {
            Vi.call(this, t, e), this.instanceMatrix = new si(new Float32Array(16 * n), 16), this.count = n
        }

        function Ga(t) {
            oi.call(this), this.type = "LineBasicMaterial", this.color = new $n(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.setValues(t)
        }
        Object.assign(ka.prototype, {
            calculateInverses: function() {
                this.boneInverses = [];
                for (var t = 0, e = this.bones.length; t < e; t++) {
                    var n = new Ye;
                    this.bones[t] && n.getInverse(this.bones[t].matrixWorld), this.boneInverses.push(n)
                }
            },
            pose: function() {
                var t, e, n;
                for (e = 0, n = this.bones.length; e < n; e++)(t = this.bones[e]) && t.matrixWorld.getInverse(this.boneInverses[e]);
                for (e = 0, n = this.bones.length; e < n; e++)(t = this.bones[e]) && (t.parent && t.parent.isBone ? (t.matrix.getInverse(t.parent.matrixWorld), t.matrix.multiply(t.matrixWorld)) : t.matrix.copy(t.matrixWorld), t.matrix.decompose(t.position, t.quaternion, t.scale))
            },
            update: function() {
                for (var t = this.bones, e = this.boneInverses, n = this.boneMatrices, i = this.boneTexture, r = 0, o = t.length; r < o; r++) {
                    var a = t[r] ? t[r].matrixWorld : Fa;
                    Ha.multiplyMatrices(a, e[r]), Ha.toArray(n, 16 * r)
                }
                void 0 !== i && (i.needsUpdate = !0)
            },
            clone: function() {
                return new ka(this.bones, this.boneInverses)
            },
            getBoneByName: function(t) {
                for (var e = 0, n = this.bones.length; e < n; e++) {
                    var i = this.bones[e];
                    if (i.name === t) return i
                }
            }
        }), Ua.prototype = Object.assign(Object.create(dn.prototype), {
            constructor: Ua,
            isBone: !0
        }), za.prototype = Object.assign(Object.create(Vi.prototype), {
            constructor: za,
            isInstancedMesh: !0,
            raycast: function() {},
            setMatrixAt: function(t, e) {
                e.toArray(this.instanceMatrix.array, 16 * t)
            },
            updateMorphTargets: function() {}
        }), Ga.prototype = Object.create(oi.prototype), Ga.prototype.constructor = Ga, Ga.prototype.isLineBasicMaterial = !0, Ga.prototype.copy = function(t) {
            return oi.prototype.copy.call(this, t), this.color.copy(t.color), this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this
        };
        var ja = new Ce,
            Va = new Ce,
            Wa = new Ye,
            Xa = new Fn,
            qa = new Rn;

        function Ya(t, e, n) {
            1 === n && console.error("THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead."), dn.call(this), this.type = "Line", this.geometry = void 0 !== t ? t : new Si, this.material = void 0 !== e ? e : new Ga({
                color: 16777215 * Math.random()
            })
        }
        Ya.prototype = Object.assign(Object.create(dn.prototype), {
            constructor: Ya,
            isLine: !0,
            computeLineDistances: function() {
                var t = this.geometry;
                if (t.isBufferGeometry)
                    if (null === t.index) {
                        for (var e = t.attributes.position, n = [0], i = 1, r = e.count; i < r; i++) ja.fromBufferAttribute(e, i - 1), Va.fromBufferAttribute(e, i), n[i] = n[i - 1], n[i] += ja.distanceTo(Va);
                        t.addAttribute("lineDistance", new mi(n, 1))
                    } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
                else if (t.isGeometry) {
                    var o = t.vertices,
                        n = t.lineDistances;
                    n[0] = 0;
                    for (var i = 1, r = o.length; i < r; i++) n[i] = n[i - 1], n[i] += o[i - 1].distanceTo(o[i])
                }
                return this
            },
            raycast: function(t, e) {
                var n = t.linePrecision,
                    i = this.geometry,
                    r = this.matrixWorld;
                if (null === i.boundingSphere && i.computeBoundingSphere(), qa.copy(i.boundingSphere), qa.applyMatrix4(r), qa.radius += n, !1 !== t.ray.intersectsSphere(qa)) {
                    Wa.getInverse(r), Xa.copy(t.ray).applyMatrix4(Wa);
                    var o = n / ((this.scale.x + this.scale.y + this.scale.z) / 3),
                        a = o * o,
                        s = new Ce,
                        c = new Ce,
                        l = new Ce,
                        h = new Ce,
                        u = this && this.isLineSegments ? 2 : 1;
                    if (i.isBufferGeometry) {
                        var p = i.index,
                            d = i.attributes,
                            f = d.position.array;
                        if (null !== p)
                            for (var m = p.array, v = 0, g = m.length - 1; v < g; v += u) {
                                var y = m[v],
                                    _ = m[v + 1];
                                s.fromArray(f, 3 * y), c.fromArray(f, 3 * _);
                                var x = Xa.distanceSqToSegment(s, c, h, l);
                                if (!(x > a)) {
                                    h.applyMatrix4(this.matrixWorld);
                                    var b = t.ray.origin.distanceTo(h);
                                    b < t.near || b > t.far || e.push({
                                        distance: b,
                                        point: l.clone().applyMatrix4(this.matrixWorld),
                                        index: v,
                                        face: null,
                                        faceIndex: null,
                                        object: this
                                    })
                                }
                            } else
                                for (var v = 0, g = f.length / 3 - 1; v < g; v += u) {
                                    s.fromArray(f, 3 * v), c.fromArray(f, 3 * v + 3);
                                    var x = Xa.distanceSqToSegment(s, c, h, l);
                                    if (!(x > a)) {
                                        h.applyMatrix4(this.matrixWorld);
                                        var b = t.ray.origin.distanceTo(h);
                                        b < t.near || b > t.far || e.push({
                                            distance: b,
                                            point: l.clone().applyMatrix4(this.matrixWorld),
                                            index: v,
                                            face: null,
                                            faceIndex: null,
                                            object: this
                                        })
                                    }
                                }
                    } else if (i.isGeometry)
                        for (var w = i.vertices, M = w.length, v = 0; v < M - 1; v += u) {
                            var x = Xa.distanceSqToSegment(w[v], w[v + 1], h, l);
                            if (!(x > a)) {
                                h.applyMatrix4(this.matrixWorld);
                                var b = t.ray.origin.distanceTo(h);
                                b < t.near || b > t.far || e.push({
                                    distance: b,
                                    point: l.clone().applyMatrix4(this.matrixWorld),
                                    index: v,
                                    face: null,
                                    faceIndex: null,
                                    object: this
                                })
                            }
                        }
                }
            },
            clone: function() {
                return new this.constructor(this.geometry, this.material).copy(this)
            }
        });
        var Za = new Ce,
            Ja = new Ce;

        function Ka(t, e) {
            Ya.call(this, t, e), this.type = "LineSegments"
        }

        function Qa(t, e) {
            Ya.call(this, t, e), this.type = "LineLoop"
        }

        function $a(t) {
            oi.call(this), this.type = "PointsMaterial", this.color = new $n(16777215), this.map = null, this.size = 1, this.sizeAttenuation = !0, this.morphTargets = !1, this.setValues(t)
        }
        Ka.prototype = Object.assign(Object.create(Ya.prototype), {
            constructor: Ka,
            isLineSegments: !0,
            computeLineDistances: function() {
                var t = this.geometry;
                if (t.isBufferGeometry)
                    if (null === t.index) {
                        for (var e = t.attributes.position, n = [], i = 0, r = e.count; i < r; i += 2) Za.fromBufferAttribute(e, i), Ja.fromBufferAttribute(e, i + 1), n[i] = 0 === i ? 0 : n[i - 1], n[i + 1] = n[i] + Za.distanceTo(Ja);
                        t.addAttribute("lineDistance", new mi(n, 1))
                    } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
                else if (t.isGeometry)
                    for (var o = t.vertices, n = t.lineDistances, i = 0, r = o.length; i < r; i += 2) Za.copy(o[i]), Ja.copy(o[i + 1]), n[i] = 0 === i ? 0 : n[i - 1], n[i + 1] = n[i] + Za.distanceTo(Ja);
                return this
            }
        }), Qa.prototype = Object.assign(Object.create(Ya.prototype), {
            constructor: Qa,
            isLineLoop: !0
        }), $a.prototype = Object.create(oi.prototype), $a.prototype.constructor = $a, $a.prototype.isPointsMaterial = !0, $a.prototype.copy = function(t) {
            return oi.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.size = t.size, this.sizeAttenuation = t.sizeAttenuation, this.morphTargets = t.morphTargets, this
        };
        var ts = new Ye,
            es = new Fn,
            ns = new Rn,
            is = new Ce;

        function rs(t, e) {
            dn.call(this), this.type = "Points", this.geometry = void 0 !== t ? t : new Si, this.material = void 0 !== e ? e : new $a({
                color: 16777215 * Math.random()
            }), this.updateMorphTargets()
        }

        function os(t, e, n, i, r, o, a) {
            var s = es.distanceSqToPoint(t);
            if (s < n) {
                var c = new Ce;
                es.closestPointToPoint(t, c), c.applyMatrix4(i);
                var l = r.ray.origin.distanceTo(c);
                if (l < r.near || l > r.far) return;
                o.push({
                    distance: l,
                    distanceToRay: Math.sqrt(s),
                    point: c,
                    index: e,
                    face: null,
                    object: a
                })
            }
        }

        function as(t, e, n, i, r, o, a, s, c) {
            He.call(this, t, e, n, i, r, o, a, s, c), this.format = void 0 !== a ? a : At, this.minFilter = void 0 !== o ? o : ut, this.magFilter = void 0 !== r ? r : ut, this.generateMipmaps = !1
        }

        function ss(t, e, n, i, r, o, a, s, c, l, h, u) {
            He.call(this, null, o, a, s, c, l, i, r, h, u), this.image = {
                width: e,
                height: n
            }, this.mipmaps = t, this.flipY = !1, this.generateMipmaps = !1
        }

        function cs(t, e, n, i, r, o, a, s, c) {
            He.call(this, t, e, n, i, r, o, a, s, c), this.needsUpdate = !0
        }

        function ls(t, e, n, i, r, o, a, s, c, l) {
            if ((l = void 0 !== l ? l : Ot) !== Ot && l !== It) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
            void 0 === n && l === Ot && (n = gt), void 0 === n && l === It && (n = Et), He.call(this, null, i, r, o, a, s, l, n, c), this.image = {
                width: t,
                height: e
            }, this.magFilter = void 0 !== a ? a : ct, this.minFilter = void 0 !== s ? s : ct, this.flipY = !1, this.generateMipmaps = !1
        }

        function hs(t) {
            Si.call(this), this.type = "WireframeGeometry";
            var e, n, i, r, o, a, s, c, l, h, u = [],
                p = [0, 0],
                d = {},
                f = ["a", "b", "c"];
            if (t && t.isGeometry) {
                var m = t.faces;
                for (e = 0, i = m.length; e < i; e++) {
                    var v = m[e];
                    for (n = 0; n < 3; n++) s = v[f[n]], c = v[f[(n + 1) % 3]], p[0] = Math.min(s, c), p[1] = Math.max(s, c), l = p[0] + "," + p[1], void 0 === d[l] && (d[l] = {
                        index1: p[0],
                        index2: p[1]
                    })
                }
                for (l in d) a = d[l], h = t.vertices[a.index1], u.push(h.x, h.y, h.z), h = t.vertices[a.index2], u.push(h.x, h.y, h.z)
            } else if (t && t.isBufferGeometry) {
                var g, y, _, x, b, w, M, T;
                if (h = new Ce, null !== t.index) {
                    for (g = t.attributes.position, y = t.index, 0 === (_ = t.groups).length && (_ = [{
                            start: 0,
                            count: y.count,
                            materialIndex: 0
                        }]), r = 0, o = _.length; r < o; ++r)
                        for (x = _[r], b = x.start, w = x.count, e = b, i = b + w; e < i; e += 3)
                            for (n = 0; n < 3; n++) s = y.getX(e + n), c = y.getX(e + (n + 1) % 3), p[0] = Math.min(s, c), p[1] = Math.max(s, c), l = p[0] + "," + p[1], void 0 === d[l] && (d[l] = {
                                index1: p[0],
                                index2: p[1]
                            });
                    for (l in d) a = d[l], h.fromBufferAttribute(g, a.index1), u.push(h.x, h.y, h.z), h.fromBufferAttribute(g, a.index2), u.push(h.x, h.y, h.z)
                } else
                    for (g = t.attributes.position, e = 0, i = g.count / 3; e < i; e++)
                        for (n = 0; n < 3; n++) M = 3 * e + n, h.fromBufferAttribute(g, M), u.push(h.x, h.y, h.z), T = 3 * e + (n + 1) % 3, h.fromBufferAttribute(g, T), u.push(h.x, h.y, h.z)
            }
            this.addAttribute("position", new mi(u, 3))
        }

        function us(t, e, n) {
            Ki.call(this), this.type = "ParametricGeometry", this.parameters = {
                func: t,
                slices: e,
                stacks: n
            }, this.fromBufferGeometry(new ps(t, e, n)), this.mergeVertices()
        }

        function ps(t, e, n) {
            Si.call(this), this.type = "ParametricBufferGeometry", this.parameters = {
                func: t,
                slices: e,
                stacks: n
            };
            var i, r, o = [],
                a = [],
                s = [],
                c = [],
                l = new Ce,
                h = new Ce,
                u = new Ce,
                p = new Ce,
                d = new Ce;
            t.length < 3 && console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");
            var f = e + 1;
            for (i = 0; i <= n; i++) {
                var m = i / n;
                for (r = 0; r <= e; r++) {
                    var v = r / e;
                    t(v, m, h), a.push(h.x, h.y, h.z), v - 1e-5 >= 0 ? (t(v - 1e-5, m, u), p.subVectors(h, u)) : (t(v + 1e-5, m, u), p.subVectors(u, h)), m - 1e-5 >= 0 ? (t(v, m - 1e-5, u), d.subVectors(h, u)) : (t(v, m + 1e-5, u), d.subVectors(u, h)), l.crossVectors(p, d).normalize(), s.push(l.x, l.y, l.z), c.push(v, m)
                }
            }
            for (i = 0; i < n; i++)
                for (r = 0; r < e; r++) {
                    var g = i * f + r,
                        y = i * f + r + 1,
                        _ = (i + 1) * f + r + 1,
                        x = (i + 1) * f + r;
                    o.push(g, y, x), o.push(y, _, x)
                }
            this.setIndex(o), this.addAttribute("position", new mi(a, 3)), this.addAttribute("normal", new mi(s, 3)), this.addAttribute("uv", new mi(c, 2))
        }

        function ds(t, e, n, i) {
            Ki.call(this), this.type = "PolyhedronGeometry", this.parameters = {
                vertices: t,
                indices: e,
                radius: n,
                detail: i
            }, this.fromBufferGeometry(new fs(t, e, n, i)), this.mergeVertices()
        }

        function fs(t, e, n, i) {
            Si.call(this), this.type = "PolyhedronBufferGeometry", this.parameters = {
                vertices: t,
                indices: e,
                radius: n,
                detail: i
            }, n = n || 1;
            var r = [],
                o = [];

            function a(t, e, n, i) {
                var r, o, a = Math.pow(2, i),
                    c = [];
                for (r = 0; r <= a; r++) {
                    c[r] = [];
                    var l = t.clone().lerp(n, r / a),
                        h = e.clone().lerp(n, r / a),
                        u = a - r;
                    for (o = 0; o <= u; o++) c[r][o] = 0 === o && r === a ? l : l.clone().lerp(h, o / u)
                }
                for (r = 0; r < a; r++)
                    for (o = 0; o < 2 * (a - r) - 1; o++) {
                        var p = Math.floor(o / 2);
                        o % 2 == 0 ? (s(c[r][p + 1]), s(c[r + 1][p]), s(c[r][p])) : (s(c[r][p + 1]), s(c[r + 1][p + 1]), s(c[r + 1][p]))
                    }
            }

            function s(t) {
                r.push(t.x, t.y, t.z)
            }

            function c(e, n) {
                var i = 3 * e;
                n.x = t[i + 0], n.y = t[i + 1], n.z = t[i + 2]
            }

            function l(t, e, n, i) {
                i < 0 && 1 === t.x && (o[e] = t.x - 1), 0 === n.x && 0 === n.z && (o[e] = i / 2 / Math.PI + .5)
            }

            function h(t) {
                return Math.atan2(t.z, -t.x)
            }

            function u(t) {
                return Math.atan2(-t.y, Math.sqrt(t.x * t.x + t.z * t.z))
            }! function(t) {
                for (var n = new Ce, i = new Ce, r = new Ce, o = 0; o < e.length; o += 3) c(e[o + 0], n), c(e[o + 1], i), c(e[o + 2], r), a(n, i, r, t)
            }(i = i || 0),
            function(t) {
                for (var e = new Ce, n = 0; n < r.length; n += 3) e.x = r[n + 0], e.y = r[n + 1], e.z = r[n + 2], e.normalize().multiplyScalar(t), r[n + 0] = e.x, r[n + 1] = e.y, r[n + 2] = e.z
            }(n),
            function() {
                for (var t = new Ce, e = 0; e < r.length; e += 3) {
                    t.x = r[e + 0], t.y = r[e + 1], t.z = r[e + 2];
                    var n = h(t) / 2 / Math.PI + .5,
                        i = u(t) / Math.PI + .5;
                    o.push(n, 1 - i)
                }(function() {
                    for (var t = new Ce, e = new Ce, n = new Ce, i = new Ce, a = new Ae, s = new Ae, c = new Ae, u = 0, p = 0; u < r.length; u += 9, p += 6) {
                        t.set(r[u + 0], r[u + 1], r[u + 2]), e.set(r[u + 3], r[u + 4], r[u + 5]), n.set(r[u + 6], r[u + 7], r[u + 8]), a.set(o[p + 0], o[p + 1]), s.set(o[p + 2], o[p + 3]), c.set(o[p + 4], o[p + 5]), i.copy(t).add(e).add(n).divideScalar(3);
                        var d = h(i);
                        l(a, p + 0, t, d), l(s, p + 2, e, d), l(c, p + 4, n, d)
                    }
                })(),
                function() {
                    for (var t = 0; t < o.length; t += 6) {
                        var e = o[t + 0],
                            n = o[t + 2],
                            i = o[t + 4],
                            r = Math.max(e, n, i),
                            a = Math.min(e, n, i);
                        r > .9 && a < .1 && (e < .2 && (o[t + 0] += 1), n < .2 && (o[t + 2] += 1), i < .2 && (o[t + 4] += 1))
                    }
                }()
            }(), this.addAttribute("position", new mi(r, 3)), this.addAttribute("normal", new mi(r.slice(), 3)), this.addAttribute("uv", new mi(o, 2)), 0 === i ? this.computeVertexNormals() : this.normalizeNormals()
        }

        function ms(t, e) {
            Ki.call(this), this.type = "TetrahedronGeometry", this.parameters = {
                radius: t,
                detail: e
            }, this.fromBufferGeometry(new vs(t, e)), this.mergeVertices()
        }

        function vs(t, e) {
            fs.call(this, [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], t, e), this.type = "TetrahedronBufferGeometry", this.parameters = {
                radius: t,
                detail: e
            }
        }

        function gs(t, e) {
            Ki.call(this), this.type = "OctahedronGeometry", this.parameters = {
                radius: t,
                detail: e
            }, this.fromBufferGeometry(new ys(t, e)), this.mergeVertices()
        }

        function ys(t, e) {
            fs.call(this, [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], t, e), this.type = "OctahedronBufferGeometry", this.parameters = {
                radius: t,
                detail: e
            }
        }

        function _s(t, e) {
            Ki.call(this), this.type = "IcosahedronGeometry", this.parameters = {
                radius: t,
                detail: e
            }, this.fromBufferGeometry(new xs(t, e)), this.mergeVertices()
        }

        function xs(t, e) {
            var n = (1 + Math.sqrt(5)) / 2,
                i = [-1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, 0, 0, -1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, n, 0, -1, n, 0, 1, -n, 0, -1, -n, 0, 1];
            fs.call(this, i, [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], t, e), this.type = "IcosahedronBufferGeometry", this.parameters = {
                radius: t,
                detail: e
            }
        }

        function bs(t, e) {
            Ki.call(this), this.type = "DodecahedronGeometry", this.parameters = {
                radius: t,
                detail: e
            }, this.fromBufferGeometry(new ws(t, e)), this.mergeVertices()
        }

        function ws(t, e) {
            var n = (1 + Math.sqrt(5)) / 2,
                i = 1 / n,
                r = [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -i, -n, 0, -i, n, 0, i, -n, 0, i, n, -i, -n, 0, -i, n, 0, i, -n, 0, i, n, 0, -n, 0, -i, n, 0, -i, -n, 0, i, n, 0, i];
            fs.call(this, r, [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9], t, e), this.type = "DodecahedronBufferGeometry", this.parameters = {
                radius: t,
                detail: e
            }
        }

        function Ms(t, e, n, i, r, o) {
            Ki.call(this), this.type = "TubeGeometry", this.parameters = {
                path: t,
                tubularSegments: e,
                radius: n,
                radialSegments: i,
                closed: r
            }, void 0 !== o && console.warn("THREE.TubeGeometry: taper has been removed.");
            var a = new Ts(t, e, n, i, r);
            this.tangents = a.tangents, this.normals = a.normals, this.binormals = a.binormals, this.fromBufferGeometry(a), this.mergeVertices()
        }

        function Ts(t, e, n, i, r) {
            Si.call(this), this.type = "TubeBufferGeometry", this.parameters = {
                path: t,
                tubularSegments: e,
                radius: n,
                radialSegments: i,
                closed: r
            }, e = e || 64, n = n || 1, i = i || 8, r = r || !1;
            var o = t.computeFrenetFrames(e, r);
            this.tangents = o.tangents, this.normals = o.normals, this.binormals = o.binormals;
            var a, s, c = new Ce,
                l = new Ce,
                h = new Ae,
                u = new Ce,
                p = [],
                d = [],
                f = [],
                m = [];

            function v(r) {
                u = t.getPointAt(r / e, u);
                var a = o.normals[r],
                    h = o.binormals[r];
                for (s = 0; s <= i; s++) {
                    var f = s / i * Math.PI * 2,
                        m = Math.sin(f),
                        v = -Math.cos(f);
                    l.x = v * a.x + m * h.x, l.y = v * a.y + m * h.y, l.z = v * a.z + m * h.z, l.normalize(), d.push(l.x, l.y, l.z), c.x = u.x + n * l.x, c.y = u.y + n * l.y, c.z = u.z + n * l.z, p.push(c.x, c.y, c.z)
                }
            }! function() {
                for (a = 0; a < e; a++) v(a);
                v(!1 === r ? e : 0),
                    function() {
                        for (a = 0; a <= e; a++)
                            for (s = 0; s <= i; s++) h.x = a / e, h.y = s / i, f.push(h.x, h.y)
                    }(),
                    function() {
                        for (s = 1; s <= e; s++)
                            for (a = 1; a <= i; a++) {
                                var t = (i + 1) * (s - 1) + (a - 1),
                                    n = (i + 1) * s + (a - 1),
                                    r = (i + 1) * s + a,
                                    o = (i + 1) * (s - 1) + a;
                                m.push(t, n, o), m.push(n, r, o)
                            }
                    }()
            }(), this.setIndex(m), this.addAttribute("position", new mi(p, 3)), this.addAttribute("normal", new mi(d, 3)), this.addAttribute("uv", new mi(f, 2))
        }

        function Es(t, e, n, i, r, o, a) {
            Ki.call(this), this.type = "TorusKnotGeometry", this.parameters = {
                radius: t,
                tube: e,
                tubularSegments: n,
                radialSegments: i,
                p: r,
                q: o
            }, void 0 !== a && console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead."), this.fromBufferGeometry(new Ss(t, e, n, i, r, o)), this.mergeVertices()
        }

        function Ss(t, e, n, i, r, o) {
            Si.call(this), this.type = "TorusKnotBufferGeometry", this.parameters = {
                radius: t,
                tube: e,
                tubularSegments: n,
                radialSegments: i,
                p: r,
                q: o
            }, t = t || 1, e = e || .4, n = Math.floor(n) || 64, i = Math.floor(i) || 8, r = r || 2, o = o || 3;
            var a, s, c = [],
                l = [],
                h = [],
                u = [],
                p = new Ce,
                d = new Ce,
                f = new Ce,
                m = new Ce,
                v = new Ce,
                g = new Ce,
                y = new Ce;
            for (a = 0; a <= n; ++a) {
                var _ = a / n * r * Math.PI * 2;
                for (A(_, r, o, t, f), A(_ + .01, r, o, t, m), g.subVectors(m, f), y.addVectors(m, f), v.crossVectors(g, y), y.crossVectors(v, g), v.normalize(), y.normalize(), s = 0; s <= i; ++s) {
                    var x = s / i * Math.PI * 2,
                        b = -e * Math.cos(x),
                        w = e * Math.sin(x);
                    p.x = f.x + (b * y.x + w * v.x), p.y = f.y + (b * y.y + w * v.y), p.z = f.z + (b * y.z + w * v.z), l.push(p.x, p.y, p.z), d.subVectors(p, f).normalize(), h.push(d.x, d.y, d.z), u.push(a / n), u.push(s / i)
                }
            }
            for (s = 1; s <= n; s++)
                for (a = 1; a <= i; a++) {
                    var M = (i + 1) * (s - 1) + (a - 1),
                        T = (i + 1) * s + (a - 1),
                        E = (i + 1) * s + a,
                        S = (i + 1) * (s - 1) + a;
                    c.push(M, T, S), c.push(T, E, S)
                }

            function A(t, e, n, i, r) {
                var o = Math.cos(t),
                    a = Math.sin(t),
                    s = n / e * t,
                    c = Math.cos(s);
                r.x = i * (2 + c) * .5 * o, r.y = i * (2 + c) * a * .5, r.z = i * Math.sin(s) * .5
            }
            this.setIndex(c), this.addAttribute("position", new mi(l, 3)), this.addAttribute("normal", new mi(h, 3)), this.addAttribute("uv", new mi(u, 2))
        }

        function As(t, e, n, i, r) {
            Ki.call(this), this.type = "TorusGeometry", this.parameters = {
                radius: t,
                tube: e,
                radialSegments: n,
                tubularSegments: i,
                arc: r
            }, this.fromBufferGeometry(new Ps(t, e, n, i, r)), this.mergeVertices()
        }

        function Ps(t, e, n, i, r) {
            Si.call(this), this.type = "TorusBufferGeometry", this.parameters = {
                radius: t,
                tube: e,
                radialSegments: n,
                tubularSegments: i,
                arc: r
            }, t = t || 1, e = e || .4, n = Math.floor(n) || 8, i = Math.floor(i) || 6, r = r || 2 * Math.PI;
            var o, a, s = [],
                c = [],
                l = [],
                h = [],
                u = new Ce,
                p = new Ce,
                d = new Ce;
            for (o = 0; o <= n; o++)
                for (a = 0; a <= i; a++) {
                    var f = a / i * r,
                        m = o / n * Math.PI * 2;
                    p.x = (t + e * Math.cos(m)) * Math.cos(f), p.y = (t + e * Math.cos(m)) * Math.sin(f), p.z = e * Math.sin(m), c.push(p.x, p.y, p.z), u.x = t * Math.cos(f), u.y = t * Math.sin(f), d.subVectors(p, u).normalize(), l.push(d.x, d.y, d.z), h.push(a / i), h.push(o / n)
                }
            for (o = 1; o <= n; o++)
                for (a = 1; a <= i; a++) {
                    var v = (i + 1) * o + a - 1,
                        g = (i + 1) * (o - 1) + a - 1,
                        y = (i + 1) * (o - 1) + a,
                        _ = (i + 1) * o + a;
                    s.push(v, g, _), s.push(g, y, _)
                }
            this.setIndex(s), this.addAttribute("position", new mi(c, 3)), this.addAttribute("normal", new mi(l, 3)), this.addAttribute("uv", new mi(h, 2))
        }
        rs.prototype = Object.assign(Object.create(dn.prototype), {
            constructor: rs,
            isPoints: !0,
            raycast: function(t, e) {
                var n = this.geometry,
                    i = this.matrixWorld,
                    r = t.params.Points.threshold;
                if (null === n.boundingSphere && n.computeBoundingSphere(), ns.copy(n.boundingSphere), ns.applyMatrix4(i), ns.radius += r, !1 !== t.ray.intersectsSphere(ns)) {
                    ts.getInverse(i), es.copy(t.ray).applyMatrix4(ts);
                    var o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
                        a = o * o;
                    if (n.isBufferGeometry) {
                        var s = n.index,
                            c = n.attributes,
                            l = c.position.array;
                        if (null !== s)
                            for (var h = s.array, u = 0, p = h.length; u < p; u++) {
                                var d = h[u];
                                is.fromArray(l, 3 * d), os(is, d, a, i, t, e, this)
                            } else
                                for (var u = 0, f = l.length / 3; u < f; u++) is.fromArray(l, 3 * u), os(is, u, a, i, t, e, this)
                    } else
                        for (var m = n.vertices, u = 0, f = m.length; u < f; u++) os(m[u], u, a, i, t, e, this)
                }
            },
            updateMorphTargets: function() {
                var t, e, n, i = this.geometry;
                if (i.isBufferGeometry) {
                    var r = i.morphAttributes,
                        o = Object.keys(r);
                    if (o.length > 0) {
                        var a = r[o[0]];
                        if (void 0 !== a)
                            for (this.morphTargetInfluences = [], this.morphTargetDictionary = {}, t = 0, e = a.length; t < e; t++) n = a[t].name || String(t), this.morphTargetInfluences.push(0), this.morphTargetDictionary[n] = t
                    }
                } else {
                    var s = i.morphTargets;
                    void 0 !== s && s.length > 0 && console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")
                }
            },
            clone: function() {
                return new this.constructor(this.geometry, this.material).copy(this)
            }
        }), as.prototype = Object.assign(Object.create(He.prototype), {
            constructor: as,
            isVideoTexture: !0,
            update: function() {
                var t = this.image;
                t.readyState >= t.HAVE_CURRENT_DATA && (this.needsUpdate = !0)
            }
        }), ss.prototype = Object.create(He.prototype), ss.prototype.constructor = ss, ss.prototype.isCompressedTexture = !0, cs.prototype = Object.create(He.prototype), cs.prototype.constructor = cs, cs.prototype.isCanvasTexture = !0, ls.prototype = Object.create(He.prototype), ls.prototype.constructor = ls, ls.prototype.isDepthTexture = !0, hs.prototype = Object.create(Si.prototype), hs.prototype.constructor = hs, us.prototype = Object.create(Ki.prototype), us.prototype.constructor = us, ps.prototype = Object.create(Si.prototype), ps.prototype.constructor = ps, ds.prototype = Object.create(Ki.prototype), ds.prototype.constructor = ds, fs.prototype = Object.create(Si.prototype), fs.prototype.constructor = fs, ms.prototype = Object.create(Ki.prototype), ms.prototype.constructor = ms, vs.prototype = Object.create(fs.prototype), vs.prototype.constructor = vs, gs.prototype = Object.create(Ki.prototype), gs.prototype.constructor = gs, ys.prototype = Object.create(fs.prototype), ys.prototype.constructor = ys, _s.prototype = Object.create(Ki.prototype), _s.prototype.constructor = _s, xs.prototype = Object.create(fs.prototype), xs.prototype.constructor = xs, bs.prototype = Object.create(Ki.prototype), bs.prototype.constructor = bs, ws.prototype = Object.create(fs.prototype), ws.prototype.constructor = ws, Ms.prototype = Object.create(Ki.prototype), Ms.prototype.constructor = Ms, Ts.prototype = Object.create(Si.prototype), Ts.prototype.constructor = Ts, Ts.prototype.toJSON = function() {
            var t = Si.prototype.toJSON.call(this);
            return t.path = this.parameters.path.toJSON(), t
        }, Es.prototype = Object.create(Ki.prototype), Es.prototype.constructor = Es, Ss.prototype = Object.create(Si.prototype), Ss.prototype.constructor = Ss, As.prototype = Object.create(Ki.prototype), As.prototype.constructor = As, Ps.prototype = Object.create(Si.prototype), Ps.prototype.constructor = Ps;
        var Ls = {
            triangulate: function(t, e, n) {
                n = n || 2;
                var i, r, o, a, s, c, l, h = e && e.length,
                    u = h ? e[0] * n : t.length,
                    p = Rs(t, 0, u, n, !0),
                    d = [];
                if (!p || p.next === p.prev) return d;
                if (h && (p = function(t, e, n, i) {
                        var r, o, a, s, c, l = [];
                        for (r = 0, o = e.length; r < o; r++) a = e[r] * i, s = r < o - 1 ? e[r + 1] * i : t.length, (c = Rs(t, a, s, i, !1)) === c.next && (c.steiner = !0), l.push(Us(c));
                        for (l.sort(Hs), r = 0; r < l.length; r++) Fs(l[r], n), n = Cs(n, n.next);
                        return n
                    }(t, e, p, n)), t.length > 80 * n) {
                    i = o = t[0], r = a = t[1];
                    for (var f = n; f < u; f += n) s = t[f], c = t[f + 1], s < i && (i = s), c < r && (r = c), s > o && (o = s), c > a && (a = c);
                    l = 0 !== (l = Math.max(o - i, a - r)) ? 1 / l : 0
                }
                return Os(p, d, n, i, r, l), d
            }
        };

        function Rs(t, e, n, i, r) {
            var o, a;
            if (r === function(t, e, n, i) {
                    for (var r = 0, o = e, a = n - i; o < n; o += i) r += (t[a] - t[o]) * (t[o + 1] + t[a + 1]), a = o;
                    return r
                }(t, e, n, i) > 0)
                for (o = e; o < n; o += i) a = Ys(o, t[o], t[o + 1], a);
            else
                for (o = n - i; o >= e; o -= i) a = Ys(o, t[o], t[o + 1], a);
            return a && Vs(a, a.next) && (Zs(a), a = a.next), a
        }

        function Cs(t, e) {
            if (!t) return t;
            e || (e = t);
            var n, i = t;
            do {
                if (n = !1, i.steiner || !Vs(i, i.next) && 0 !== js(i.prev, i, i.next)) i = i.next;
                else {
                    if (Zs(i), (i = e = i.prev) === i.next) break;
                    n = !0
                }
            } while (n || i !== e);
            return e
        }

        function Os(t, e, n, i, r, o, a) {
            if (t) {
                !a && o && function(t, e, n, i) {
                    var r = t;
                    do {
                        null === r.z && (r.z = ks(r.x, r.y, e, n, i)), r.prevZ = r.prev, r.nextZ = r.next, r = r.next
                    } while (r !== t);
                    r.prevZ.nextZ = null, r.prevZ = null,
                        function(t) {
                            var e, n, i, r, o, a, s, c, l = 1;
                            do {
                                for (n = t, t = null, o = null, a = 0; n;) {
                                    for (a++, i = n, s = 0, e = 0; e < l && (s++, i = i.nextZ); e++);
                                    for (c = l; s > 0 || c > 0 && i;) 0 !== s && (0 === c || !i || n.z <= i.z) ? (r = n, n = n.nextZ, s--) : (r = i, i = i.nextZ, c--), o ? o.nextZ = r : t = r, r.prevZ = o, o = r;
                                    n = i
                                }
                                o.nextZ = null, l *= 2
                            } while (a > 1)
                        }(r)
                }(t, i, r, o);
                for (var s, c, l = t; t.prev !== t.next;)
                    if (s = t.prev, c = t.next, o ? Ds(t, i, r, o) : Is(t)) e.push(s.i / n), e.push(t.i / n), e.push(c.i / n), Zs(t), t = c.next, l = c.next;
                    else if ((t = c) === l) {
                    a ? 1 === a ? Os(t = Ns(t, e, n), e, n, i, r, o, 2) : 2 === a && Bs(t, e, n, i, r, o) : Os(Cs(t), e, n, i, r, o, 1);
                    break
                }
            }
        }

        function Is(t) {
            var e = t.prev,
                n = t,
                i = t.next;
            if (js(e, n, i) >= 0) return !1;
            for (var r = t.next.next; r !== t.prev;) {
                if (zs(e.x, e.y, n.x, n.y, i.x, i.y, r.x, r.y) && js(r.prev, r, r.next) >= 0) return !1;
                r = r.next
            }
            return !0
        }

        function Ds(t, e, n, i) {
            var r = t.prev,
                o = t,
                a = t.next;
            if (js(r, o, a) >= 0) return !1;
            for (var s = r.x < o.x ? r.x < a.x ? r.x : a.x : o.x < a.x ? o.x : a.x, c = r.y < o.y ? r.y < a.y ? r.y : a.y : o.y < a.y ? o.y : a.y, l = r.x > o.x ? r.x > a.x ? r.x : a.x : o.x > a.x ? o.x : a.x, h = r.y > o.y ? r.y > a.y ? r.y : a.y : o.y > a.y ? o.y : a.y, u = ks(s, c, e, n, i), p = ks(l, h, e, n, i), d = t.prevZ, f = t.nextZ; d && d.z >= u && f && f.z <= p;) {
                if (d !== t.prev && d !== t.next && zs(r.x, r.y, o.x, o.y, a.x, a.y, d.x, d.y) && js(d.prev, d, d.next) >= 0) return !1;
                if (d = d.prevZ, f !== t.prev && f !== t.next && zs(r.x, r.y, o.x, o.y, a.x, a.y, f.x, f.y) && js(f.prev, f, f.next) >= 0) return !1;
                f = f.nextZ
            }
            for (; d && d.z >= u;) {
                if (d !== t.prev && d !== t.next && zs(r.x, r.y, o.x, o.y, a.x, a.y, d.x, d.y) && js(d.prev, d, d.next) >= 0) return !1;
                d = d.prevZ
            }
            for (; f && f.z <= p;) {
                if (f !== t.prev && f !== t.next && zs(r.x, r.y, o.x, o.y, a.x, a.y, f.x, f.y) && js(f.prev, f, f.next) >= 0) return !1;
                f = f.nextZ
            }
            return !0
        }

        function Ns(t, e, n) {
            var i = t;
            do {
                var r = i.prev,
                    o = i.next.next;
                !Vs(r, o) && Ws(r, i, i.next, o) && Xs(r, o) && Xs(o, r) && (e.push(r.i / n), e.push(i.i / n), e.push(o.i / n), Zs(i), Zs(i.next), i = t = o), i = i.next
            } while (i !== t);
            return i
        }

        function Bs(t, e, n, i, r, o) {
            var a = t;
            do {
                for (var s = a.next.next; s !== a.prev;) {
                    if (a.i !== s.i && Gs(a, s)) {
                        var c = qs(a, s);
                        return a = Cs(a, a.next), c = Cs(c, c.next), Os(a, e, n, i, r, o), void Os(c, e, n, i, r, o)
                    }
                    s = s.next
                }
                a = a.next
            } while (a !== t)
        }

        function Hs(t, e) {
            return t.x - e.x
        }

        function Fs(t, e) {
            if (e = function(t, e) {
                    var n, i = e,
                        r = t.x,
                        o = t.y,
                        a = -1 / 0;
                    do {
                        if (o <= i.y && o >= i.next.y && i.next.y !== i.y) {
                            var s = i.x + (o - i.y) * (i.next.x - i.x) / (i.next.y - i.y);
                            if (s <= r && s > a) {
                                if (a = s, s === r) {
                                    if (o === i.y) return i;
                                    if (o === i.next.y) return i.next
                                }
                                n = i.x < i.next.x ? i : i.next
                            }
                        }
                        i = i.next
                    } while (i !== e);
                    if (!n) return null;
                    if (r === a) return n.prev;
                    var c, l = n,
                        h = n.x,
                        u = n.y,
                        p = 1 / 0;
                    for (i = n.next; i !== l;) r >= i.x && i.x >= h && r !== i.x && zs(o < u ? r : a, o, h, u, o < u ? a : r, o, i.x, i.y) && ((c = Math.abs(o - i.y) / (r - i.x)) < p || c === p && i.x > n.x) && Xs(i, t) && (n = i, p = c), i = i.next;
                    return n
                }(t, e)) {
                var n = qs(e, t);
                Cs(n, n.next)
            }
        }

        function ks(t, e, n, i, r) {
            return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - n) * r) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - i) * r) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1
        }

        function Us(t) {
            var e = t,
                n = t;
            do {
                (e.x < n.x || e.x === n.x && e.y < n.y) && (n = e), e = e.next
            } while (e !== t);
            return n
        }

        function zs(t, e, n, i, r, o, a, s) {
            return (r - a) * (e - s) - (t - a) * (o - s) >= 0 && (t - a) * (i - s) - (n - a) * (e - s) >= 0 && (n - a) * (o - s) - (r - a) * (i - s) >= 0
        }

        function Gs(t, e) {
            return t.next.i !== e.i && t.prev.i !== e.i && ! function(t, e) {
                var n = t;
                do {
                    if (n.i !== t.i && n.next.i !== t.i && n.i !== e.i && n.next.i !== e.i && Ws(n, n.next, t, e)) return !0;
                    n = n.next
                } while (n !== t);
                return !1
            }(t, e) && Xs(t, e) && Xs(e, t) && function(t, e) {
                var n = t,
                    i = !1,
                    r = (t.x + e.x) / 2,
                    o = (t.y + e.y) / 2;
                do {
                    n.y > o != n.next.y > o && n.next.y !== n.y && r < (n.next.x - n.x) * (o - n.y) / (n.next.y - n.y) + n.x && (i = !i), n = n.next
                } while (n !== t);
                return i
            }(t, e)
        }

        function js(t, e, n) {
            return (e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y)
        }

        function Vs(t, e) {
            return t.x === e.x && t.y === e.y
        }

        function Ws(t, e, n, i) {
            return !!(Vs(t, n) && Vs(e, i) || Vs(t, i) && Vs(n, e)) || js(t, e, n) > 0 != js(t, e, i) > 0 && js(n, i, t) > 0 != js(n, i, e) > 0
        }

        function Xs(t, e) {
            return js(t.prev, t, t.next) < 0 ? js(t, e, t.next) >= 0 && js(t, t.prev, e) >= 0 : js(t, e, t.prev) < 0 || js(t, t.next, e) < 0
        }

        function qs(t, e) {
            var n = new Js(t.i, t.x, t.y),
                i = new Js(e.i, e.x, e.y),
                r = t.next,
                o = e.prev;
            return t.next = e, e.prev = t, n.next = r, r.prev = n, i.next = n, n.prev = i, o.next = i, i.prev = o, i
        }

        function Ys(t, e, n, i) {
            var r = new Js(t, e, n);
            return i ? (r.next = i.next, r.prev = i, i.next.prev = r, i.next = r) : (r.prev = r, r.next = r), r
        }

        function Zs(t) {
            t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), t.nextZ && (t.nextZ.prevZ = t.prevZ)
        }

        function Js(t, e, n) {
            this.i = t, this.x = e, this.y = n, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
        }
        var Ks = {
            area: function(t) {
                for (var e = t.length, n = 0, i = e - 1, r = 0; r < e; i = r++) n += t[i].x * t[r].y - t[r].x * t[i].y;
                return .5 * n
            },
            isClockWise: function(t) {
                return Ks.area(t) < 0
            },
            triangulateShape: function(t, e) {
                var n = [],
                    i = [],
                    r = [];
                Qs(t), $s(n, t);
                var o = t.length;
                e.forEach(Qs);
                for (var a = 0; a < e.length; a++) i.push(o), o += e[a].length, $s(n, e[a]);
                for (var s = Ls.triangulate(n, i), a = 0; a < s.length; a += 3) r.push(s.slice(a, a + 3));
                return r
            }
        };

        function Qs(t) {
            var e = t.length;
            e > 2 && t[e - 1].equals(t[0]) && t.pop()
        }

        function $s(t, e) {
            for (var n = 0; n < e.length; n++) t.push(e[n].x), t.push(e[n].y)
        }

        function tc(t, e) {
            Ki.call(this), this.type = "ExtrudeGeometry", this.parameters = {
                shapes: t,
                options: e
            }, this.fromBufferGeometry(new ec(t, e)), this.mergeVertices()
        }

        function ec(t, e) {
            Si.call(this), this.type = "ExtrudeBufferGeometry", this.parameters = {
                shapes: t,
                options: e
            };
            for (var n = this, i = [], r = [], o = 0, a = (t = Array.isArray(t) ? t : [t]).length; o < a; o++) {
                var s = t[o];
                c(s)
            }

            function c(t) {
                var o = [],
                    a = void 0 !== e.curveSegments ? e.curveSegments : 12,
                    s = void 0 !== e.steps ? e.steps : 1,
                    c = void 0 !== e.depth ? e.depth : 100,
                    l = void 0 === e.bevelEnabled || e.bevelEnabled,
                    h = void 0 !== e.bevelThickness ? e.bevelThickness : 6,
                    u = void 0 !== e.bevelSize ? e.bevelSize : h - 2,
                    p = void 0 !== e.bevelOffset ? e.bevelOffset : 0,
                    d = void 0 !== e.bevelSegments ? e.bevelSegments : 3,
                    f = e.extrudePath,
                    m = void 0 !== e.UVGenerator ? e.UVGenerator : nc;
                void 0 !== e.amount && (console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."), c = e.amount);
                var v, g, y, _, x, b, w, M, T = !1;
                f && (v = f.getSpacedPoints(s), T = !0, l = !1, g = f.computeFrenetFrames(s, !1), y = new Ce, _ = new Ce, x = new Ce), l || (d = 0, h = 0, u = 0, p = 0);
                var E = t.extractPoints(a),
                    S = E.shape,
                    A = E.holes,
                    P = !Ks.isClockWise(S);
                if (P)
                    for (S = S.reverse(), w = 0, M = A.length; w < M; w++) b = A[w], Ks.isClockWise(b) && (A[w] = b.reverse());
                var L = Ks.triangulateShape(S, A),
                    R = S;
                for (w = 0, M = A.length; w < M; w++) b = A[w], S = S.concat(b);

                function C(t, e, n) {
                    return e || console.error("THREE.ExtrudeGeometry: vec does not exist"), e.clone().multiplyScalar(n).add(t)
                }
                var O, I, D, N, B, H, F = S.length,
                    k = L.length;

                function U(t, e, n) {
                    var i, r, o, a = t.x - e.x,
                        s = t.y - e.y,
                        c = n.x - t.x,
                        l = n.y - t.y,
                        h = a * a + s * s,
                        u = a * l - s * c;
                    if (Math.abs(u) > Number.EPSILON) {
                        var p = Math.sqrt(h),
                            d = Math.sqrt(c * c + l * l),
                            f = e.x - s / p,
                            m = e.y + a / p,
                            v = n.x - l / d,
                            g = n.y + c / d,
                            y = ((v - f) * l - (g - m) * c) / (a * l - s * c);
                        i = f + a * y - t.x, r = m + s * y - t.y;
                        var _ = i * i + r * r;
                        if (_ <= 2) return new Ae(i, r);
                        o = Math.sqrt(_ / 2)
                    } else {
                        var x = !1;
                        a > Number.EPSILON ? c > Number.EPSILON && (x = !0) : a < -Number.EPSILON ? c < -Number.EPSILON && (x = !0) : Math.sign(s) === Math.sign(l) && (x = !0), x ? (i = -s, r = a, o = Math.sqrt(h)) : (i = a, r = s, o = Math.sqrt(h / 2))
                    }
                    return new Ae(i / o, r / o)
                }
                for (var z = [], G = 0, j = R.length, V = j - 1, W = G + 1; G < j; G++, V++, W++) V === j && (V = 0), W === j && (W = 0), z[G] = U(R[G], R[V], R[W]);
                var X, q, Y = [],
                    Z = z.concat();
                for (w = 0, M = A.length; w < M; w++) {
                    for (b = A[w], X = [], G = 0, j = b.length, V = j - 1, W = G + 1; G < j; G++, V++, W++) V === j && (V = 0), W === j && (W = 0), X[G] = U(b[G], b[V], b[W]);
                    Y.push(X), Z = Z.concat(X)
                }
                for (O = 0; O < d; O++) {
                    for (D = O / d, N = h * Math.cos(D * Math.PI / 2), I = u * Math.sin(D * Math.PI / 2) + p, G = 0, j = R.length; G < j; G++) K((B = C(R[G], z[G], I)).x, B.y, -N);
                    for (w = 0, M = A.length; w < M; w++)
                        for (b = A[w], X = Y[w], G = 0, j = b.length; G < j; G++) K((B = C(b[G], X[G], I)).x, B.y, -N)
                }
                for (I = u + p, G = 0; G < F; G++) B = l ? C(S[G], Z[G], I) : S[G], T ? (_.copy(g.normals[0]).multiplyScalar(B.x), y.copy(g.binormals[0]).multiplyScalar(B.y), x.copy(v[0]).add(_).add(y), K(x.x, x.y, x.z)) : K(B.x, B.y, 0);
                for (q = 1; q <= s; q++)
                    for (G = 0; G < F; G++) B = l ? C(S[G], Z[G], I) : S[G], T ? (_.copy(g.normals[q]).multiplyScalar(B.x), y.copy(g.binormals[q]).multiplyScalar(B.y), x.copy(v[q]).add(_).add(y), K(x.x, x.y, x.z)) : K(B.x, B.y, c / s * q);
                for (O = d - 1; O >= 0; O--) {
                    for (D = O / d, N = h * Math.cos(D * Math.PI / 2), I = u * Math.sin(D * Math.PI / 2) + p, G = 0, j = R.length; G < j; G++) K((B = C(R[G], z[G], I)).x, B.y, c + N);
                    for (w = 0, M = A.length; w < M; w++)
                        for (b = A[w], X = Y[w], G = 0, j = b.length; G < j; G++) B = C(b[G], X[G], I), T ? K(B.x, B.y + v[s - 1].y, v[s - 1].x + N) : K(B.x, B.y, c + N)
                }

                function J(t, e) {
                    var n, i;
                    for (G = t.length; --G >= 0;) {
                        n = G, (i = G - 1) < 0 && (i = t.length - 1);
                        var r = 0,
                            o = s + 2 * d;
                        for (r = 0; r < o; r++) {
                            var a = F * r,
                                c = F * (r + 1),
                                l = e + n + a,
                                h = e + i + a,
                                u = e + i + c,
                                p = e + n + c;
                            $(l, h, u, p)
                        }
                    }
                }

                function K(t, e, n) {
                    o.push(t), o.push(e), o.push(n)
                }

                function Q(t, e, r) {
                    tt(t), tt(e), tt(r);
                    var o = i.length / 3,
                        a = m.generateTopUV(n, i, o - 3, o - 2, o - 1);
                    et(a[0]), et(a[1]), et(a[2])
                }

                function $(t, e, r, o) {
                    tt(t), tt(e), tt(o), tt(e), tt(r), tt(o);
                    var a = i.length / 3,
                        s = m.generateSideWallUV(n, i, a - 6, a - 3, a - 2, a - 1);
                    et(s[0]), et(s[1]), et(s[3]), et(s[1]), et(s[2]), et(s[3])
                }

                function tt(t) {
                    i.push(o[3 * t + 0]), i.push(o[3 * t + 1]), i.push(o[3 * t + 2])
                }

                function et(t) {
                    r.push(t.x), r.push(t.y)
                }! function() {
                    var t = i.length / 3;
                    if (l) {
                        var e = 0,
                            r = F * e;
                        for (G = 0; G < k; G++) Q((H = L[G])[2] + r, H[1] + r, H[0] + r);
                        for (r = F * (e = s + 2 * d), G = 0; G < k; G++) Q((H = L[G])[0] + r, H[1] + r, H[2] + r)
                    } else {
                        for (G = 0; G < k; G++) Q((H = L[G])[2], H[1], H[0]);
                        for (G = 0; G < k; G++) Q((H = L[G])[0] + F * s, H[1] + F * s, H[2] + F * s)
                    }
                    n.addGroup(t, i.length / 3 - t, 0)
                }(),
                function() {
                    var t = i.length / 3,
                        e = 0;
                    for (J(R, e), e += R.length, w = 0, M = A.length; w < M; w++) J(b = A[w], e), e += b.length;
                    n.addGroup(t, i.length / 3 - t, 1)
                }()
            }
            this.addAttribute("position", new mi(i, 3)), this.addAttribute("uv", new mi(r, 2)), this.computeVertexNormals()
        }
        tc.prototype = Object.create(Ki.prototype), tc.prototype.constructor = tc, tc.prototype.toJSON = function() {
            var t = Ki.prototype.toJSON.call(this),
                e = this.parameters.shapes,
                n = this.parameters.options;
            return ic(e, n, t)
        }, ec.prototype = Object.create(Si.prototype), ec.prototype.constructor = ec, ec.prototype.toJSON = function() {
            var t = Si.prototype.toJSON.call(this),
                e = this.parameters.shapes,
                n = this.parameters.options;
            return ic(e, n, t)
        };
        var nc = {
            generateTopUV: function(t, e, n, i, r) {
                var o = e[3 * n],
                    a = e[3 * n + 1],
                    s = e[3 * i],
                    c = e[3 * i + 1],
                    l = e[3 * r],
                    h = e[3 * r + 1];
                return [new Ae(o, a), new Ae(s, c), new Ae(l, h)]
            },
            generateSideWallUV: function(t, e, n, i, r, o) {
                var a = e[3 * n],
                    s = e[3 * n + 1],
                    c = e[3 * n + 2],
                    l = e[3 * i],
                    h = e[3 * i + 1],
                    u = e[3 * i + 2],
                    p = e[3 * r],
                    d = e[3 * r + 1],
                    f = e[3 * r + 2],
                    m = e[3 * o],
                    v = e[3 * o + 1],
                    g = e[3 * o + 2];
                return Math.abs(s - h) < .01 ? [new Ae(a, 1 - c), new Ae(l, 1 - u), new Ae(p, 1 - f), new Ae(m, 1 - g)] : [new Ae(s, 1 - c), new Ae(h, 1 - u), new Ae(d, 1 - f), new Ae(v, 1 - g)]
            }
        };

        function ic(t, e, n) {
            if (n.shapes = [], Array.isArray(t))
                for (var i = 0, r = t.length; i < r; i++) {
                    var o = t[i];
                    n.shapes.push(o.uuid)
                } else n.shapes.push(t.uuid);
            return void 0 !== e.extrudePath && (n.options.extrudePath = e.extrudePath.toJSON()), n
        }

        function rc(t, e) {
            Ki.call(this), this.type = "TextGeometry", this.parameters = {
                text: t,
                parameters: e
            }, this.fromBufferGeometry(new oc(t, e)), this.mergeVertices()
        }

        function oc(t, e) {
            var n = (e = e || {}).font;
            if (!n || !n.isFont) return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."), new Ki;
            var i = n.generateShapes(t, e.size);
            e.depth = void 0 !== e.height ? e.height : 50, void 0 === e.bevelThickness && (e.bevelThickness = 10), void 0 === e.bevelSize && (e.bevelSize = 8), void 0 === e.bevelEnabled && (e.bevelEnabled = !1), ec.call(this, i, e), this.type = "TextBufferGeometry"
        }

        function ac(t, e, n, i, r, o, a) {
            Ki.call(this), this.type = "SphereGeometry", this.parameters = {
                radius: t,
                widthSegments: e,
                heightSegments: n,
                phiStart: i,
                phiLength: r,
                thetaStart: o,
                thetaLength: a
            }, this.fromBufferGeometry(new sc(t, e, n, i, r, o, a)), this.mergeVertices()
        }

        function sc(t, e, n, i, r, o, a) {
            Si.call(this), this.type = "SphereBufferGeometry", this.parameters = {
                radius: t,
                widthSegments: e,
                heightSegments: n,
                phiStart: i,
                phiLength: r,
                thetaStart: o,
                thetaLength: a
            }, t = t || 1, e = Math.max(3, Math.floor(e) || 8), n = Math.max(2, Math.floor(n) || 6), i = void 0 !== i ? i : 0, r = void 0 !== r ? r : 2 * Math.PI, o = void 0 !== o ? o : 0, a = void 0 !== a ? a : Math.PI;
            var s, c, l = Math.min(o + a, Math.PI),
                h = 0,
                u = [],
                p = new Ce,
                d = new Ce,
                f = [],
                m = [],
                v = [],
                g = [];
            for (c = 0; c <= n; c++) {
                var y = [],
                    _ = c / n,
                    x = 0;
                for (0 == c && 0 == o ? x = .5 / e : c == n && l == Math.PI && (x = -.5 / e), s = 0; s <= e; s++) {
                    var b = s / e;
                    p.x = -t * Math.cos(i + b * r) * Math.sin(o + _ * a), p.y = t * Math.cos(o + _ * a), p.z = t * Math.sin(i + b * r) * Math.sin(o + _ * a), m.push(p.x, p.y, p.z), d.copy(p).normalize(), v.push(d.x, d.y, d.z), g.push(b + x, 1 - _), y.push(h++)
                }
                u.push(y)
            }
            for (c = 0; c < n; c++)
                for (s = 0; s < e; s++) {
                    var w = u[c][s + 1],
                        M = u[c][s],
                        T = u[c + 1][s],
                        E = u[c + 1][s + 1];
                    (0 !== c || o > 0) && f.push(w, M, E), (c !== n - 1 || l < Math.PI) && f.push(M, T, E)
                }
            this.setIndex(f), this.addAttribute("position", new mi(m, 3)), this.addAttribute("normal", new mi(v, 3)), this.addAttribute("uv", new mi(g, 2))
        }

        function cc(t, e, n, i, r, o) {
            Ki.call(this), this.type = "RingGeometry", this.parameters = {
                innerRadius: t,
                outerRadius: e,
                thetaSegments: n,
                phiSegments: i,
                thetaStart: r,
                thetaLength: o
            }, this.fromBufferGeometry(new lc(t, e, n, i, r, o)), this.mergeVertices()
        }

        function lc(t, e, n, i, r, o) {
            Si.call(this), this.type = "RingBufferGeometry", this.parameters = {
                innerRadius: t,
                outerRadius: e,
                thetaSegments: n,
                phiSegments: i,
                thetaStart: r,
                thetaLength: o
            }, t = t || .5, e = e || 1, r = void 0 !== r ? r : 0, o = void 0 !== o ? o : 2 * Math.PI, n = void 0 !== n ? Math.max(3, n) : 8, i = void 0 !== i ? Math.max(1, i) : 1;
            var a, s, c, l = [],
                h = [],
                u = [],
                p = [],
                d = t,
                f = (e - t) / i,
                m = new Ce,
                v = new Ae;
            for (s = 0; s <= i; s++) {
                for (c = 0; c <= n; c++) a = r + c / n * o, m.x = d * Math.cos(a), m.y = d * Math.sin(a), h.push(m.x, m.y, m.z), u.push(0, 0, 1), v.x = (m.x / e + 1) / 2, v.y = (m.y / e + 1) / 2, p.push(v.x, v.y);
                d += f
            }
            for (s = 0; s < i; s++) {
                var g = s * (n + 1);
                for (c = 0; c < n; c++) {
                    var y = a = c + g,
                        _ = a + n + 1,
                        x = a + n + 2,
                        b = a + 1;
                    l.push(y, _, b), l.push(_, x, b)
                }
            }
            this.setIndex(l), this.addAttribute("position", new mi(h, 3)), this.addAttribute("normal", new mi(u, 3)), this.addAttribute("uv", new mi(p, 2))
        }

        function hc(t, e, n, i) {
            Ki.call(this), this.type = "LatheGeometry", this.parameters = {
                points: t,
                segments: e,
                phiStart: n,
                phiLength: i
            }, this.fromBufferGeometry(new uc(t, e, n, i)), this.mergeVertices()
        }

        function uc(t, e, n, i) {
            Si.call(this), this.type = "LatheBufferGeometry", this.parameters = {
                points: t,
                segments: e,
                phiStart: n,
                phiLength: i
            }, e = Math.floor(e) || 12, n = n || 0, i = i || 2 * Math.PI, i = Se.clamp(i, 0, 2 * Math.PI);
            var r, o, a, s = [],
                c = [],
                l = [],
                h = 1 / e,
                u = new Ce,
                p = new Ae;
            for (o = 0; o <= e; o++) {
                var d = n + o * h * i,
                    f = Math.sin(d),
                    m = Math.cos(d);
                for (a = 0; a <= t.length - 1; a++) u.x = t[a].x * f, u.y = t[a].y, u.z = t[a].x * m, c.push(u.x, u.y, u.z), p.x = o / e, p.y = a / (t.length - 1), l.push(p.x, p.y)
            }
            for (o = 0; o < e; o++)
                for (a = 0; a < t.length - 1; a++) {
                    var v = r = a + o * t.length,
                        g = r + t.length,
                        y = r + t.length + 1,
                        _ = r + 1;
                    s.push(v, g, _), s.push(g, y, _)
                }
            if (this.setIndex(s), this.addAttribute("position", new mi(c, 3)), this.addAttribute("uv", new mi(l, 2)), this.computeVertexNormals(), i === 2 * Math.PI) {
                var x = this.attributes.normal.array,
                    b = new Ce,
                    w = new Ce,
                    M = new Ce;
                for (r = e * t.length * 3, o = 0, a = 0; o < t.length; o++, a += 3) b.x = x[a + 0], b.y = x[a + 1], b.z = x[a + 2], w.x = x[r + a + 0], w.y = x[r + a + 1], w.z = x[r + a + 2], M.addVectors(b, w).normalize(), x[a + 0] = x[r + a + 0] = M.x, x[a + 1] = x[r + a + 1] = M.y, x[a + 2] = x[r + a + 2] = M.z
            }
        }

        function pc(t, e) {
            Ki.call(this), this.type = "ShapeGeometry", "object" == typeof e && (console.warn("THREE.ShapeGeometry: Options parameter has been removed."), e = e.curveSegments), this.parameters = {
                shapes: t,
                curveSegments: e
            }, this.fromBufferGeometry(new dc(t, e)), this.mergeVertices()
        }

        function dc(t, e) {
            Si.call(this), this.type = "ShapeBufferGeometry", this.parameters = {
                shapes: t,
                curveSegments: e
            }, e = e || 12;
            var n = [],
                i = [],
                r = [],
                o = [],
                a = 0,
                s = 0;
            if (!1 === Array.isArray(t)) l(t);
            else
                for (var c = 0; c < t.length; c++) l(t[c]), this.addGroup(a, s, c), a += s, s = 0;

            function l(t) {
                var a, c, l, h = i.length / 3,
                    u = t.extractPoints(e),
                    p = u.shape,
                    d = u.holes;
                for (!1 === Ks.isClockWise(p) && (p = p.reverse()), a = 0, c = d.length; a < c; a++) l = d[a], !0 === Ks.isClockWise(l) && (d[a] = l.reverse());
                var f = Ks.triangulateShape(p, d);
                for (a = 0, c = d.length; a < c; a++) l = d[a], p = p.concat(l);
                for (a = 0, c = p.length; a < c; a++) {
                    var m = p[a];
                    i.push(m.x, m.y, 0), r.push(0, 0, 1), o.push(m.x, m.y)
                }
                for (a = 0, c = f.length; a < c; a++) {
                    var v = f[a],
                        g = v[0] + h,
                        y = v[1] + h,
                        _ = v[2] + h;
                    n.push(g, y, _), s += 3
                }
            }
            this.setIndex(n), this.addAttribute("position", new mi(i, 3)), this.addAttribute("normal", new mi(r, 3)), this.addAttribute("uv", new mi(o, 2))
        }

        function fc(t, e) {
            if (e.shapes = [], Array.isArray(t))
                for (var n = 0, i = t.length; n < i; n++) {
                    var r = t[n];
                    e.shapes.push(r.uuid)
                } else e.shapes.push(t.uuid);
            return e
        }

        function mc(t, e) {
            Si.call(this), this.type = "EdgesGeometry", this.parameters = {
                thresholdAngle: e
            }, e = void 0 !== e ? e : 1;
            var n, i, r, o, a = [],
                s = Math.cos(Se.DEG2RAD * e),
                c = [0, 0],
                l = {},
                h = ["a", "b", "c"];
            t.isBufferGeometry ? (o = new Ki).fromBufferGeometry(t) : o = t.clone(), o.mergeVertices(), o.computeFaceNormals();
            for (var u = o.vertices, p = o.faces, d = 0, f = p.length; d < f; d++)
                for (var m = p[d], v = 0; v < 3; v++) n = m[h[v]], i = m[h[(v + 1) % 3]], c[0] = Math.min(n, i), c[1] = Math.max(n, i), r = c[0] + "," + c[1], void 0 === l[r] ? l[r] = {
                    index1: c[0],
                    index2: c[1],
                    face1: d,
                    face2: void 0
                } : l[r].face2 = d;
            for (r in l) {
                var g = l[r];
                if (void 0 === g.face2 || p[g.face1].normal.dot(p[g.face2].normal) <= s) {
                    var y = u[g.index1];
                    a.push(y.x, y.y, y.z), y = u[g.index2], a.push(y.x, y.y, y.z)
                }
            }
            this.addAttribute("position", new mi(a, 3))
        }

        function vc(t, e, n, i, r, o, a, s) {
            Ki.call(this), this.type = "CylinderGeometry", this.parameters = {
                radiusTop: t,
                radiusBottom: e,
                height: n,
                radialSegments: i,
                heightSegments: r,
                openEnded: o,
                thetaStart: a,
                thetaLength: s
            }, this.fromBufferGeometry(new gc(t, e, n, i, r, o, a, s)), this.mergeVertices()
        }

        function gc(t, e, n, i, r, o, a, s) {
            Si.call(this), this.type = "CylinderBufferGeometry", this.parameters = {
                radiusTop: t,
                radiusBottom: e,
                height: n,
                radialSegments: i,
                heightSegments: r,
                openEnded: o,
                thetaStart: a,
                thetaLength: s
            };
            var c = this;
            t = void 0 !== t ? t : 1, e = void 0 !== e ? e : 1, n = n || 1, i = Math.floor(i) || 8, r = Math.floor(r) || 1, o = void 0 !== o && o, a = void 0 !== a ? a : 0, s = void 0 !== s ? s : 2 * Math.PI;
            var l = [],
                h = [],
                u = [],
                p = [],
                d = 0,
                f = [],
                m = n / 2,
                v = 0;

            function g(n) {
                var r, o, f, g = new Ae,
                    y = new Ce,
                    _ = 0,
                    x = !0 === n ? t : e,
                    b = !0 === n ? 1 : -1;
                for (o = d, r = 1; r <= i; r++) h.push(0, m * b, 0), u.push(0, b, 0), p.push(.5, .5), d++;
                for (f = d, r = 0; r <= i; r++) {
                    var w = r / i,
                        M = w * s + a,
                        T = Math.cos(M),
                        E = Math.sin(M);
                    y.x = x * E, y.y = m * b, y.z = x * T, h.push(y.x, y.y, y.z), u.push(0, b, 0), g.x = .5 * T + .5, g.y = .5 * E * b + .5, p.push(g.x, g.y), d++
                }
                for (r = 0; r < i; r++) {
                    var S = o + r,
                        A = f + r;
                    !0 === n ? l.push(A, A + 1, S) : l.push(A + 1, A, S), _ += 3
                }
                c.addGroup(v, _, !0 === n ? 1 : 2), v += _
            }! function() {
                var o, g, y = new Ce,
                    _ = new Ce,
                    x = 0,
                    b = (e - t) / n;
                for (g = 0; g <= r; g++) {
                    var w = [],
                        M = g / r,
                        T = M * (e - t) + t;
                    for (o = 0; o <= i; o++) {
                        var E = o / i,
                            S = E * s + a,
                            A = Math.sin(S),
                            P = Math.cos(S);
                        _.x = T * A, _.y = -M * n + m, _.z = T * P, h.push(_.x, _.y, _.z), y.set(A, b, P).normalize(), u.push(y.x, y.y, y.z), p.push(E, 1 - M), w.push(d++)
                    }
                    f.push(w)
                }
                for (o = 0; o < i; o++)
                    for (g = 0; g < r; g++) {
                        var L = f[g][o],
                            R = f[g + 1][o],
                            C = f[g + 1][o + 1],
                            O = f[g][o + 1];
                        l.push(L, R, O), l.push(R, C, O), x += 6
                    }
                c.addGroup(v, x, 0), v += x
            }(), !1 === o && (t > 0 && g(!0), e > 0 && g(!1)), this.setIndex(l), this.addAttribute("position", new mi(h, 3)), this.addAttribute("normal", new mi(u, 3)), this.addAttribute("uv", new mi(p, 2))
        }

        function yc(t, e, n, i, r, o, a) {
            vc.call(this, 0, t, e, n, i, r, o, a), this.type = "ConeGeometry", this.parameters = {
                radius: t,
                height: e,
                radialSegments: n,
                heightSegments: i,
                openEnded: r,
                thetaStart: o,
                thetaLength: a
            }
        }

        function _c(t, e, n, i, r, o, a) {
            gc.call(this, 0, t, e, n, i, r, o, a), this.type = "ConeBufferGeometry", this.parameters = {
                radius: t,
                height: e,
                radialSegments: n,
                heightSegments: i,
                openEnded: r,
                thetaStart: o,
                thetaLength: a
            }
        }

        function xc(t, e, n, i) {
            Ki.call(this), this.type = "CircleGeometry", this.parameters = {
                radius: t,
                segments: e,
                thetaStart: n,
                thetaLength: i
            }, this.fromBufferGeometry(new bc(t, e, n, i)), this.mergeVertices()
        }

        function bc(t, e, n, i) {
            Si.call(this), this.type = "CircleBufferGeometry", this.parameters = {
                radius: t,
                segments: e,
                thetaStart: n,
                thetaLength: i
            }, t = t || 1, e = void 0 !== e ? Math.max(3, e) : 8, n = void 0 !== n ? n : 0, i = void 0 !== i ? i : 2 * Math.PI;
            var r, o, a = [],
                s = [],
                c = [],
                l = [],
                h = new Ce,
                u = new Ae;
            for (s.push(0, 0, 0), c.push(0, 0, 1), l.push(.5, .5), o = 0, r = 3; o <= e; o++, r += 3) {
                var p = n + o / e * i;
                h.x = t * Math.cos(p), h.y = t * Math.sin(p), s.push(h.x, h.y, h.z), c.push(0, 0, 1), u.x = (s[r] / t + 1) / 2, u.y = (s[r + 1] / t + 1) / 2, l.push(u.x, u.y)
            }
            for (r = 1; r <= e; r++) a.push(r, r + 1, 0);
            this.setIndex(a), this.addAttribute("position", new mi(s, 3)), this.addAttribute("normal", new mi(c, 3)), this.addAttribute("uv", new mi(l, 2))
        }
        rc.prototype = Object.create(Ki.prototype), rc.prototype.constructor = rc, oc.prototype = Object.create(ec.prototype), oc.prototype.constructor = oc, ac.prototype = Object.create(Ki.prototype), ac.prototype.constructor = ac, sc.prototype = Object.create(Si.prototype), sc.prototype.constructor = sc, cc.prototype = Object.create(Ki.prototype), cc.prototype.constructor = cc, lc.prototype = Object.create(Si.prototype), lc.prototype.constructor = lc, hc.prototype = Object.create(Ki.prototype), hc.prototype.constructor = hc, uc.prototype = Object.create(Si.prototype), uc.prototype.constructor = uc, pc.prototype = Object.create(Ki.prototype), pc.prototype.constructor = pc, pc.prototype.toJSON = function() {
            var t = Ki.prototype.toJSON.call(this),
                e = this.parameters.shapes;
            return fc(e, t)
        }, dc.prototype = Object.create(Si.prototype), dc.prototype.constructor = dc, dc.prototype.toJSON = function() {
            var t = Si.prototype.toJSON.call(this),
                e = this.parameters.shapes;
            return fc(e, t)
        }, mc.prototype = Object.create(Si.prototype), mc.prototype.constructor = mc, vc.prototype = Object.create(Ki.prototype), vc.prototype.constructor = vc, gc.prototype = Object.create(Si.prototype), gc.prototype.constructor = gc, yc.prototype = Object.create(vc.prototype), yc.prototype.constructor = yc, _c.prototype = Object.create(gc.prototype), _c.prototype.constructor = _c, xc.prototype = Object.create(Ki.prototype), xc.prototype.constructor = xc, bc.prototype = Object.create(Si.prototype), bc.prototype.constructor = bc;
        var wc = Object.freeze({
            WireframeGeometry: hs,
            ParametricGeometry: us,
            ParametricBufferGeometry: ps,
            TetrahedronGeometry: ms,
            TetrahedronBufferGeometry: vs,
            OctahedronGeometry: gs,
            OctahedronBufferGeometry: ys,
            IcosahedronGeometry: _s,
            IcosahedronBufferGeometry: xs,
            DodecahedronGeometry: bs,
            DodecahedronBufferGeometry: ws,
            PolyhedronGeometry: ds,
            PolyhedronBufferGeometry: fs,
            TubeGeometry: Ms,
            TubeBufferGeometry: Ts,
            TorusKnotGeometry: Es,
            TorusKnotBufferGeometry: Ss,
            TorusGeometry: As,
            TorusBufferGeometry: Ps,
            TextGeometry: rc,
            TextBufferGeometry: oc,
            SphereGeometry: ac,
            SphereBufferGeometry: sc,
            RingGeometry: cc,
            RingBufferGeometry: lc,
            PlaneGeometry: Er,
            PlaneBufferGeometry: Sr,
            LatheGeometry: hc,
            LatheBufferGeometry: uc,
            ShapeGeometry: pc,
            ShapeBufferGeometry: dc,
            ExtrudeGeometry: tc,
            ExtrudeBufferGeometry: ec,
            EdgesGeometry: mc,
            ConeGeometry: yc,
            ConeBufferGeometry: _c,
            CylinderGeometry: vc,
            CylinderBufferGeometry: gc,
            CircleGeometry: xc,
            CircleBufferGeometry: bc,
            BoxGeometry: Qi,
            BoxBufferGeometry: $i
        });

        function Mc(t) {
            oi.call(this), this.type = "ShadowMaterial", this.color = new $n(0), this.transparent = !0, this.setValues(t)
        }

        function Tc(t) {
            or.call(this, t), this.type = "RawShaderMaterial"
        }

        function Ec(t) {
            oi.call(this), this.defines = {
                STANDARD: ""
            }, this.type = "MeshStandardMaterial", this.color = new $n(16777215), this.roughness = .5, this.metalness = .5, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new $n(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = _e, this.normalScale = new Ae(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
        }

        function Sc(t) {
            Ec.call(this), this.defines = {
                STANDARD: "",
                PHYSICAL: ""
            }, this.type = "MeshPhysicalMaterial", this.reflectivity = .5, this.clearcoat = 0, this.clearcoatRoughness = 0, this.sheen = null, this.clearcoatNormalScale = new Ae(1, 1), this.clearcoatNormalMap = null, this.transparency = 0, this.setValues(t)
        }

        function Ac(t) {
            oi.call(this), this.type = "MeshPhongMaterial", this.color = new $n(16777215), this.specular = new $n(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new $n(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = _e, this.normalScale = new Ae(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = j, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
        }

        function Pc(t) {
            Ac.call(this), this.defines = {
                TOON: ""
            }, this.type = "MeshToonMaterial", this.gradientMap = null, this.setValues(t)
        }

        function Lc(t) {
            oi.call(this), this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = _e, this.normalScale = new Ae(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
        }

        function Rc(t) {
            oi.call(this), this.type = "MeshLambertMaterial", this.color = new $n(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new $n(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = j, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
        }

        function Cc(t) {
            oi.call(this), this.defines = {
                MATCAP: ""
            }, this.type = "MeshMatcapMaterial", this.color = new $n(16777215), this.matcap = null, this.map = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = _e, this.normalScale = new Ae(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
        }

        function Oc(t) {
            Ga.call(this), this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(t)
        }
        Mc.prototype = Object.create(oi.prototype), Mc.prototype.constructor = Mc, Mc.prototype.isShadowMaterial = !0, Mc.prototype.copy = function(t) {
            return oi.prototype.copy.call(this, t), this.color.copy(t.color), this
        }, Tc.prototype = Object.create(or.prototype), Tc.prototype.constructor = Tc, Tc.prototype.isRawShaderMaterial = !0, Ec.prototype = Object.create(oi.prototype), Ec.prototype.constructor = Ec, Ec.prototype.isMeshStandardMaterial = !0, Ec.prototype.copy = function(t) {
            return oi.prototype.copy.call(this, t), this.defines = {
                STANDARD: ""
            }, this.color.copy(t.color), this.roughness = t.roughness, this.metalness = t.metalness, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.roughnessMap = t.roughnessMap, this.metalnessMap = t.metalnessMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapIntensity = t.envMapIntensity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
        }, Sc.prototype = Object.create(Ec.prototype), Sc.prototype.constructor = Sc, Sc.prototype.isMeshPhysicalMaterial = !0, Sc.prototype.copy = function(t) {
            return Ec.prototype.copy.call(this, t), this.defines = {
                STANDARD: "",
                PHYSICAL: ""
            }, this.reflectivity = t.reflectivity, this.clearcoat = t.clearcoat, this.clearcoatRoughness = t.clearcoatRoughness, t.sheen ? this.sheen = (this.sheen || new $n).copy(t.sheen) : this.sheen = null, this.clearcoatNormalMap = t.clearcoatNormalMap, this.clearcoatNormalScale.copy(t.clearcoatNormalScale), this.transparency = t.transparency, this
        }, Ac.prototype = Object.create(oi.prototype), Ac.prototype.constructor = Ac, Ac.prototype.isMeshPhongMaterial = !0, Ac.prototype.copy = function(t) {
            return oi.prototype.copy.call(this, t), this.color.copy(t.color), this.specular.copy(t.specular), this.shininess = t.shininess, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
        }, Pc.prototype = Object.create(Ac.prototype), Pc.prototype.constructor = Pc, Pc.prototype.isMeshToonMaterial = !0, Pc.prototype.copy = function(t) {
            return Ac.prototype.copy.call(this, t), this.gradientMap = t.gradientMap, this
        }, Lc.prototype = Object.create(oi.prototype), Lc.prototype.constructor = Lc, Lc.prototype.isMeshNormalMaterial = !0, Lc.prototype.copy = function(t) {
            return oi.prototype.copy.call(this, t), this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
        }, Rc.prototype = Object.create(oi.prototype), Rc.prototype.constructor = Rc, Rc.prototype.isMeshLambertMaterial = !0, Rc.prototype.copy = function(t) {
            return oi.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
        }, Cc.prototype = Object.create(oi.prototype), Cc.prototype.constructor = Cc, Cc.prototype.isMeshMatcapMaterial = !0, Cc.prototype.copy = function(t) {
            return oi.prototype.copy.call(this, t), this.defines = {
                MATCAP: ""
            }, this.color.copy(t.color), this.matcap = t.matcap, this.map = t.map, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.alphaMap = t.alphaMap, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
        }, Oc.prototype = Object.create(Ga.prototype), Oc.prototype.constructor = Oc, Oc.prototype.isLineDashedMaterial = !0, Oc.prototype.copy = function(t) {
            return Ga.prototype.copy.call(this, t), this.scale = t.scale, this.dashSize = t.dashSize, this.gapSize = t.gapSize, this
        };
        var Ic = Object.freeze({
                ShadowMaterial: Mc,
                SpriteMaterial: ya,
                RawShaderMaterial: Tc,
                ShaderMaterial: or,
                PointsMaterial: $a,
                MeshPhysicalMaterial: Sc,
                MeshStandardMaterial: Ec,
                MeshPhongMaterial: Ac,
                MeshToonMaterial: Pc,
                MeshNormalMaterial: Lc,
                MeshLambertMaterial: Rc,
                MeshDepthMaterial: Jo,
                MeshDistanceMaterial: Ko,
                MeshBasicMaterial: ai,
                MeshMatcapMaterial: Cc,
                LineDashedMaterial: Oc,
                LineBasicMaterial: Ga,
                Material: oi
            }),
            Dc = {
                arraySlice: function(t, e, n) {
                    return Dc.isTypedArray(t) ? new t.constructor(t.subarray(e, void 0 !== n ? n : t.length)) : t.slice(e, n)
                },
                convertArray: function(t, e, n) {
                    return !t || !n && t.constructor === e ? t : "number" == typeof e.BYTES_PER_ELEMENT ? new e(t) : Array.prototype.slice.call(t)
                },
                isTypedArray: function(t) {
                    return ArrayBuffer.isView(t) && !(t instanceof DataView)
                },
                getKeyframeOrder: function(t) {
                    for (var e = t.length, n = new Array(e), i = 0; i !== e; ++i) n[i] = i;
                    return n.sort(function(e, n) {
                        return t[e] - t[n]
                    }), n
                },
                sortedArray: function(t, e, n) {
                    for (var i = t.length, r = new t.constructor(i), o = 0, a = 0; a !== i; ++o)
                        for (var s = n[o] * e, c = 0; c !== e; ++c) r[a++] = t[s + c];
                    return r
                },
                flattenJSON: function(t, e, n, i) {
                    for (var r = 1, o = t[0]; void 0 !== o && void 0 === o[i];) o = t[r++];
                    if (void 0 !== o) {
                        var a = o[i];
                        if (void 0 !== a)
                            if (Array.isArray(a))
                                do {
                                    void 0 !== (a = o[i]) && (e.push(o.time), n.push.apply(n, a)), o = t[r++]
                                } while (void 0 !== o);
                            else if (void 0 !== a.toArray)
                            do {
                                void 0 !== (a = o[i]) && (e.push(o.time), a.toArray(n, n.length)), o = t[r++]
                            } while (void 0 !== o);
                        else
                            do {
                                void 0 !== (a = o[i]) && (e.push(o.time), n.push(a)), o = t[r++]
                            } while (void 0 !== o)
                    }
                }
            };

        function Nc(t, e, n, i) {
            this.parameterPositions = t, this._cachedIndex = 0, this.resultBuffer = void 0 !== i ? i : new e.constructor(n), this.sampleValues = e, this.valueSize = n
        }

        function Bc(t, e, n, i) {
            Nc.call(this, t, e, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0
        }

        function Hc(t, e, n, i) {
            Nc.call(this, t, e, n, i)
        }

        function Fc(t, e, n, i) {
            Nc.call(this, t, e, n, i)
        }

        function kc(t, e, n, i) {
            if (void 0 === t) throw new Error("THREE.KeyframeTrack: track name is undefined");
            if (void 0 === e || 0 === e.length) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t);
            this.name = t, this.times = Dc.convertArray(e, this.TimeBufferType), this.values = Dc.convertArray(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation)
        }

        function Uc(t, e, n) {
            kc.call(this, t, e, n)
        }

        function zc(t, e, n, i) {
            kc.call(this, t, e, n, i)
        }

        function Gc(t, e, n, i) {
            kc.call(this, t, e, n, i)
        }

        function jc(t, e, n, i) {
            Nc.call(this, t, e, n, i)
        }

        function Vc(t, e, n, i) {
            kc.call(this, t, e, n, i)
        }

        function Wc(t, e, n, i) {
            kc.call(this, t, e, n, i)
        }

        function Xc(t, e, n, i) {
            kc.call(this, t, e, n, i)
        }

        function qc(t, e, n) {
            this.name = t, this.tracks = n, this.duration = void 0 !== e ? e : -1, this.uuid = Se.generateUUID(), this.duration < 0 && this.resetDuration()
        }

        function Yc(t) {
            if (void 0 === t.type) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
            var e = function(t) {
                switch (t.toLowerCase()) {
                    case "scalar":
                    case "double":
                    case "float":
                    case "number":
                    case "integer":
                        return Gc;
                    case "vector":
                    case "vector2":
                    case "vector3":
                    case "vector4":
                        return Xc;
                    case "color":
                        return zc;
                    case "quaternion":
                        return Vc;
                    case "bool":
                    case "boolean":
                        return Uc;
                    case "string":
                        return Wc
                }
                throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + t)
            }(t.type);
            if (void 0 === t.times) {
                var n = [],
                    i = [];
                Dc.flattenJSON(t.keys, n, i, "value"), t.times = n, t.values = i
            }
            return void 0 !== e.parse ? e.parse(t) : new e(t.name, t.times, t.values, t.interpolation)
        }
        Object.assign(Nc.prototype, {
                evaluate: function(t) {
                    var e = this.parameterPositions,
                        n = this._cachedIndex,
                        i = e[n],
                        r = e[n - 1];
                    t: {
                        e: {
                            var o;n: {
                                i: if (!(t < i)) {
                                    for (var a = n + 2;;) {
                                        if (void 0 === i) {
                                            if (t < r) break i;
                                            return n = e.length, this._cachedIndex = n, this.afterEnd_(n - 1, t, r)
                                        }
                                        if (n === a) break;
                                        if (r = i, i = e[++n], t < i) break e
                                    }
                                    o = e.length;
                                    break n
                                }if (t >= r) break t;
                                var s = e[1];t < s && (n = 2, r = s);
                                for (var a = n - 2;;) {
                                    if (void 0 === r) return this._cachedIndex = 0, this.beforeStart_(0, t, i);
                                    if (n === a) break;
                                    if (i = r, r = e[--n - 1], t >= r) break e
                                }
                                o = n,
                                n = 0
                            }
                            for (; n < o;) {
                                var c = n + o >>> 1;
                                t < e[c] ? o = c : n = c + 1
                            }
                            if (i = e[n], void 0 === (r = e[n - 1])) return this._cachedIndex = 0,
                            this.beforeStart_(0, t, i);
                            if (void 0 === i) return n = e.length,
                            this._cachedIndex = n,
                            this.afterEnd_(n - 1, r, t)
                        }
                        this._cachedIndex = n,
                        this.intervalChanged_(n, r, i)
                    }
                    return this.interpolate_(n, r, t, i)
                },
                settings: null,
                DefaultSettings_: {},
                getSettings_: function() {
                    return this.settings || this.DefaultSettings_
                },
                copySampleValue_: function(t) {
                    for (var e = this.resultBuffer, n = this.sampleValues, i = this.valueSize, r = t * i, o = 0; o !== i; ++o) e[o] = n[r + o];
                    return e
                },
                interpolate_: function() {
                    throw new Error("call to abstract method")
                },
                intervalChanged_: function() {}
            }),
            //!\ DECLARE ALIAS AFTER assign prototype !
            Object.assign(Nc.prototype, {
                beforeStart_: Nc.prototype.copySampleValue_,
                afterEnd_: Nc.prototype.copySampleValue_
            }), Bc.prototype = Object.assign(Object.create(Nc.prototype), {
                constructor: Bc,
                DefaultSettings_: {
                    endingStart: oe,
                    endingEnd: oe
                },
                intervalChanged_: function(t, e, n) {
                    var i = this.parameterPositions,
                        r = t - 2,
                        o = t + 1,
                        a = i[r],
                        s = i[o];
                    if (void 0 === a) switch (this.getSettings_().endingStart) {
                        case 2401:
                            r = t, a = 2 * e - n;
                            break;
                        case 2402:
                            r = i.length - 2, a = e + i[r] - i[r + 1];
                            break;
                        default:
                            r = t, a = n
                    }
                    if (void 0 === s) switch (this.getSettings_().endingEnd) {
                        case 2401:
                            o = t, s = 2 * n - e;
                            break;
                        case 2402:
                            o = 1, s = n + i[1] - i[0];
                            break;
                        default:
                            o = t - 1, s = e
                    }
                    var c = .5 * (n - e),
                        l = this.valueSize;
                    this._weightPrev = c / (e - a), this._weightNext = c / (s - n), this._offsetPrev = r * l, this._offsetNext = o * l
                },
                interpolate_: function(t, e, n, i) {
                    for (var r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, s = t * a, c = s - a, l = this._offsetPrev, h = this._offsetNext, u = this._weightPrev, p = this._weightNext, d = (n - e) / (i - e), f = d * d, m = f * d, v = -u * m + 2 * u * f - u * d, g = (1 + u) * m + (-1.5 - 2 * u) * f + (-.5 + u) * d + 1, y = (-1 - p) * m + (1.5 + p) * f + .5 * d, _ = p * m - p * f, x = 0; x !== a; ++x) r[x] = v * o[l + x] + g * o[c + x] + y * o[s + x] + _ * o[h + x];
                    return r
                }
            }), Hc.prototype = Object.assign(Object.create(Nc.prototype), {
                constructor: Hc,
                interpolate_: function(t, e, n, i) {
                    for (var r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, s = t * a, c = s - a, l = (n - e) / (i - e), h = 1 - l, u = 0; u !== a; ++u) r[u] = o[c + u] * h + o[s + u] * l;
                    return r
                }
            }), Fc.prototype = Object.assign(Object.create(Nc.prototype), {
                constructor: Fc,
                interpolate_: function(t) {
                    return this.copySampleValue_(t - 1)
                }
            }), Object.assign(kc, {
                toJSON: function(t) {
                    var e, n = t.constructor;
                    if (void 0 !== n.toJSON) e = n.toJSON(t);
                    else {
                        e = {
                            name: t.name,
                            times: Dc.convertArray(t.times, Array),
                            values: Dc.convertArray(t.values, Array)
                        };
                        var i = t.getInterpolation();
                        i !== t.DefaultInterpolation && (e.interpolation = i)
                    }
                    return e.type = t.ValueTypeName, e
                }
            }), Object.assign(kc.prototype, {
                constructor: kc,
                TimeBufferType: Float32Array,
                ValueBufferType: Float32Array,
                DefaultInterpolation: 2301,
                InterpolantFactoryMethodDiscrete: function(t) {
                    return new Fc(this.times, this.values, this.getValueSize(), t)
                },
                InterpolantFactoryMethodLinear: function(t) {
                    return new Hc(this.times, this.values, this.getValueSize(), t)
                },
                InterpolantFactoryMethodSmooth: function(t) {
                    return new Bc(this.times, this.values, this.getValueSize(), t)
                },
                setInterpolation: function(t) {
                    var e;
                    switch (t) {
                        case 2300:
                            e = this.InterpolantFactoryMethodDiscrete;
                            break;
                        case 2301:
                            e = this.InterpolantFactoryMethodLinear;
                            break;
                        case 2302:
                            e = this.InterpolantFactoryMethodSmooth
                    }
                    if (void 0 === e) {
                        var n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
                        if (void 0 === this.createInterpolant) {
                            if (t === this.DefaultInterpolation) throw new Error(n);
                            this.setInterpolation(this.DefaultInterpolation)
                        }
                        return console.warn("THREE.KeyframeTrack:", n), this
                    }
                    return this.createInterpolant = e, this
                },
                getInterpolation: function() {
                    switch (this.createInterpolant) {
                        case this.InterpolantFactoryMethodDiscrete:
                            return 2300;
                        case this.InterpolantFactoryMethodLinear:
                            return 2301;
                        case this.InterpolantFactoryMethodSmooth:
                            return 2302
                    }
                },
                getValueSize: function() {
                    return this.values.length / this.times.length
                },
                shift: function(t) {
                    if (0 !== t)
                        for (var e = this.times, n = 0, i = e.length; n !== i; ++n) e[n] += t;
                    return this
                },
                scale: function(t) {
                    if (1 !== t)
                        for (var e = this.times, n = 0, i = e.length; n !== i; ++n) e[n] *= t;
                    return this
                },
                trim: function(t, e) {
                    for (var n = this.times, i = n.length, r = 0, o = i - 1; r !== i && n[r] < t;) ++r;
                    for (; - 1 !== o && n[o] > e;) --o;
                    if (++o, 0 !== r || o !== i) {
                        r >= o && (o = Math.max(o, 1), r = o - 1);
                        var a = this.getValueSize();
                        this.times = Dc.arraySlice(n, r, o), this.values = Dc.arraySlice(this.values, r * a, o * a)
                    }
                    return this
                },
                validate: function() {
                    var t = !0,
                        e = this.getValueSize();
                    e - Math.floor(e) != 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), t = !1);
                    var n = this.times,
                        i = this.values,
                        r = n.length;
                    0 === r && (console.error("THREE.KeyframeTrack: Track is empty.", this), t = !1);
                    for (var o = null, a = 0; a !== r; a++) {
                        var s = n[a];
                        if ("number" == typeof s && isNaN(s)) {
                            console.error("THREE.KeyframeTrack: Time is not a valid number.", this, a, s), t = !1;
                            break
                        }
                        if (null !== o && o > s) {
                            console.error("THREE.KeyframeTrack: Out of order keys.", this, a, s, o), t = !1;
                            break
                        }
                        o = s
                    }
                    if (void 0 !== i && Dc.isTypedArray(i))
                        for (var a = 0, c = i.length; a !== c; ++a) {
                            var l = i[a];
                            if (isNaN(l)) {
                                console.error("THREE.KeyframeTrack: Value is not a valid number.", this, a, l), t = !1;
                                break
                            }
                        }
                    return t
                },
                optimize: function() {
                    for (var t = this.times, e = this.values, n = this.getValueSize(), i = 2302 === this.getInterpolation(), r = 1, o = t.length - 1, a = 1; a < o; ++a) {
                        var s = !1,
                            c = t[a],
                            l = t[a + 1];
                        if (c !== l && (1 !== a || c !== c[0]))
                            if (i) s = !0;
                            else
                                for (var h = a * n, u = h - n, p = h + n, d = 0; d !== n; ++d) {
                                    var f = e[h + d];
                                    if (f !== e[u + d] || f !== e[p + d]) {
                                        s = !0;
                                        break
                                    }
                                }
                        if (s) {
                            if (a !== r) {
                                t[r] = t[a];
                                for (var m = a * n, v = r * n, d = 0; d !== n; ++d) e[v + d] = e[m + d]
                            }++r
                        }
                    }
                    if (o > 0) {
                        t[r] = t[o];
                        for (var m = o * n, v = r * n, d = 0; d !== n; ++d) e[v + d] = e[m + d];
                        ++r
                    }
                    return r !== t.length && (this.times = Dc.arraySlice(t, 0, r), this.values = Dc.arraySlice(e, 0, r * n)), this
                },
                clone: function() {
                    var t = Dc.arraySlice(this.times, 0),
                        e = Dc.arraySlice(this.values, 0),
                        n = this.constructor,
                        i = new n(this.name, t, e);
                    return i.createInterpolant = this.createInterpolant, i
                }
            }), Uc.prototype = Object.assign(Object.create(kc.prototype), {
                constructor: Uc,
                ValueTypeName: "bool",
                ValueBufferType: Array,
                DefaultInterpolation: 2300,
                InterpolantFactoryMethodLinear: void 0,
                InterpolantFactoryMethodSmooth: void 0
            }), zc.prototype = Object.assign(Object.create(kc.prototype), {
                constructor: zc,
                ValueTypeName: "color"
            }), Gc.prototype = Object.assign(Object.create(kc.prototype), {
                constructor: Gc,
                ValueTypeName: "number"
            }), jc.prototype = Object.assign(Object.create(Nc.prototype), {
                constructor: jc,
                interpolate_: function(t, e, n, i) {
                    for (var r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, s = t * a, c = (n - e) / (i - e), l = s + a; s !== l; s += 4) Pe.slerpFlat(r, 0, o, s - a, o, s, c);
                    return r
                }
            }), Vc.prototype = Object.assign(Object.create(kc.prototype), {
                constructor: Vc,
                ValueTypeName: "quaternion",
                DefaultInterpolation: 2301,
                InterpolantFactoryMethodLinear: function(t) {
                    return new jc(this.times, this.values, this.getValueSize(), t)
                },
                InterpolantFactoryMethodSmooth: void 0
            }), Wc.prototype = Object.assign(Object.create(kc.prototype), {
                constructor: Wc,
                ValueTypeName: "string",
                ValueBufferType: Array,
                DefaultInterpolation: 2300,
                InterpolantFactoryMethodLinear: void 0,
                InterpolantFactoryMethodSmooth: void 0
            }), Xc.prototype = Object.assign(Object.create(kc.prototype), {
                constructor: Xc,
                ValueTypeName: "vector"
            }), Object.assign(qc, {
                parse: function(t) {
                    for (var e = [], n = t.tracks, i = 1 / (t.fps || 1), r = 0, o = n.length; r !== o; ++r) e.push(Yc(n[r]).scale(i));
                    return new qc(t.name, t.duration, e)
                },
                toJSON: function(t) {
                    for (var e = [], n = t.tracks, i = {
                            name: t.name,
                            duration: t.duration,
                            tracks: e,
                            uuid: t.uuid
                        }, r = 0, o = n.length; r !== o; ++r) e.push(kc.toJSON(n[r]));
                    return i
                },
                CreateFromMorphTargetSequence: function(t, e, n, i) {
                    for (var r = e.length, o = [], a = 0; a < r; a++) {
                        var s = [],
                            c = [];
                        s.push((a + r - 1) % r, a, (a + 1) % r), c.push(0, 1, 0);
                        var l = Dc.getKeyframeOrder(s);
                        s = Dc.sortedArray(s, 1, l), c = Dc.sortedArray(c, 1, l), i || 0 !== s[0] || (s.push(r), c.push(c[0])), o.push(new Gc(".morphTargetInfluences[" + e[a].name + "]", s, c).scale(1 / n))
                    }
                    return new qc(t, -1, o)
                },
                findByName: function(t, e) {
                    var n = t;
                    if (!Array.isArray(t)) {
                        var i = t;
                        n = i.geometry && i.geometry.animations || i.animations
                    }
                    for (var r = 0; r < n.length; r++)
                        if (n[r].name === e) return n[r];
                    return null
                },
                CreateClipsFromMorphTargetSequences: function(t, e, n) {
                    for (var i = {}, r = /^([\w-]*?)([\d]+)$/, o = 0, a = t.length; o < a; o++) {
                        var s = t[o],
                            c = s.name.match(r);
                        if (c && c.length > 1) {
                            var l = c[1],
                                h = i[l];
                            h || (i[l] = h = []), h.push(s)
                        }
                    }
                    var u = [];
                    for (var l in i) u.push(qc.CreateFromMorphTargetSequence(l, i[l], e, n));
                    return u
                },
                parseAnimation: function(t, e) {
                    if (!t) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
                    for (var n = function(t, e, n, i, r) {
                            if (0 !== n.length) {
                                var o = [],
                                    a = [];
                                Dc.flattenJSON(n, o, a, i), 0 !== o.length && r.push(new t(e, o, a))
                            }
                        }, i = [], r = t.name || "default", o = t.length || -1, a = t.fps || 30, s = t.hierarchy || [], c = 0; c < s.length; c++) {
                        var l = s[c].keys;
                        if (l && 0 !== l.length)
                            if (l[0].morphTargets) {
                                for (var h = {}, u = 0; u < l.length; u++)
                                    if (l[u].morphTargets)
                                        for (var p = 0; p < l[u].morphTargets.length; p++) h[l[u].morphTargets[p]] = -1;
                                for (var d in h) {
                                    for (var f = [], m = [], p = 0; p !== l[u].morphTargets.length; ++p) {
                                        var v = l[u];
                                        f.push(v.time), m.push(v.morphTarget === d ? 1 : 0)
                                    }
                                    i.push(new Gc(".morphTargetInfluence[" + d + "]", f, m))
                                }
                                o = h.length * (a || 1)
                            } else {
                                var g = ".bones[" + e[c].name + "]";
                                n(Xc, g + ".position", l, "pos", i), n(Vc, g + ".quaternion", l, "rot", i), n(Xc, g + ".scale", l, "scl", i)
                            }
                    }
                    if (0 === i.length) return null;
                    var y = new qc(r, o, i);
                    return y
                }
            }), Object.assign(qc.prototype, {
                resetDuration: function() {
                    for (var t = this.tracks, e = 0, n = 0, i = t.length; n !== i; ++n) {
                        var r = this.tracks[n];
                        e = Math.max(e, r.times[r.times.length - 1])
                    }
                    return this.duration = e, this
                },
                trim: function() {
                    for (var t = 0; t < this.tracks.length; t++) this.tracks[t].trim(0, this.duration);
                    return this
                },
                validate: function() {
                    for (var t = !0, e = 0; e < this.tracks.length; e++) t = t && this.tracks[e].validate();
                    return t
                },
                optimize: function() {
                    for (var t = 0; t < this.tracks.length; t++) this.tracks[t].optimize();
                    return this
                },
                clone: function() {
                    for (var t = [], e = 0; e < this.tracks.length; e++) t.push(this.tracks[e].clone());
                    return new qc(this.name, this.duration, t)
                }
            });
        var Zc = {
            enabled: !1,
            files: {},
            add: function(t, e) {
                !1 !== this.enabled && (this.files[t] = e)
            },
            get: function(t) {
                if (!1 !== this.enabled) return this.files[t]
            },
            remove: function(t) {
                delete this.files[t]
            },
            clear: function() {
                this.files = {}
            }
        };

        function Jc(t, e, n) {
            var i = this,
                r = !1,
                o = 0,
                a = 0,
                s = void 0,
                c = [];
            this.onStart = void 0, this.onLoad = t, this.onProgress = e, this.onError = n, this.itemStart = function(t) {
                a++, !1 === r && void 0 !== i.onStart && i.onStart(t, o, a), r = !0
            }, this.itemEnd = function(t) {
                o++, void 0 !== i.onProgress && i.onProgress(t, o, a), o === a && (r = !1, void 0 !== i.onLoad && i.onLoad())
            }, this.itemError = function(t) {
                void 0 !== i.onError && i.onError(t)
            }, this.resolveURL = function(t) {
                return s ? s(t) : t
            }, this.setURLModifier = function(t) {
                return s = t, this
            }, this.addHandler = function(t, e) {
                return c.push(t, e), this
            }, this.removeHandler = function(t) {
                var e = c.indexOf(t);
                return -1 !== e && c.splice(e, 2), this
            }, this.getHandler = function(t) {
                for (var e = 0, n = c.length; e < n; e += 2) {
                    var i = c[e],
                        r = c[e + 1];
                    if (i.test(t)) return r
                }
                return null
            }
        }
        var Kc = new Jc;

        function Qc(t) {
            this.manager = void 0 !== t ? t : Kc, this.crossOrigin = "anonymous", this.path = "", this.resourcePath = ""
        }
        Object.assign(Qc.prototype, {
            load: function() {},
            parse: function() {},
            setCrossOrigin: function(t) {
                return this.crossOrigin = t, this
            },
            setPath: function(t) {
                return this.path = t, this
            },
            setResourcePath: function(t) {
                return this.resourcePath = t, this
            }
        });
        var $c = {};

        function tl(t) {
            Qc.call(this, t)
        }

        function el(t) {
            Qc.call(this, t)
        }

        function nl(t) {
            Qc.call(this, t)
        }

        function il(t) {
            Qc.call(this, t)
        }

        function rl(t) {
            Qc.call(this, t)
        }

        function ol(t) {
            Qc.call(this, t)
        }

        function al(t) {
            Qc.call(this, t)
        }

        function sl() {
            this.type = "Curve", this.arcLengthDivisions = 200
        }

        function cl(t, e, n, i, r, o, a, s) {
            sl.call(this), this.type = "EllipseCurve", this.aX = t || 0, this.aY = e || 0, this.xRadius = n || 1, this.yRadius = i || 1, this.aStartAngle = r || 0, this.aEndAngle = o || 2 * Math.PI, this.aClockwise = a || !1, this.aRotation = s || 0
        }

        function ll(t, e, n, i, r, o) {
            cl.call(this, t, e, n, n, i, r, o), this.type = "ArcCurve"
        }

        function hl() {
            var t = 0,
                e = 0,
                n = 0,
                i = 0;

            function r(r, o, a, s) {
                t = r, e = a, n = -3 * r + 3 * o - 2 * a - s, i = 2 * r - 2 * o + a + s
            }
            return {
                initCatmullRom: function(t, e, n, i, o) {
                    r(e, n, o * (n - t), o * (i - e))
                },
                initNonuniformCatmullRom: function(t, e, n, i, o, a, s) {
                    var c = (e - t) / o - (n - t) / (o + a) + (n - e) / a,
                        l = (n - e) / a - (i - e) / (a + s) + (i - n) / s;
                    r(e, n, c *= a, l *= a)
                },
                calc: function(r) {
                    var o = r * r,
                        a = o * r;
                    return t + e * r + n * o + i * a
                }
            }
        }
        tl.prototype = Object.assign(Object.create(Qc.prototype), {
            constructor: tl,
            load: function(t, e, n, i) {
                void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
                var r = this,
                    o = Zc.get(t);
                if (void 0 !== o) return r.manager.itemStart(t), setTimeout(function() {
                    e && e(o), r.manager.itemEnd(t)
                }, 0), o;
                if (void 0 === $c[t]) {
                    var a = t.match(/^data:(.*?)(;base64)?,(.*)$/);
                    if (a) {
                        var s = a[1],
                            c = !!a[2],
                            l = a[3];
                        l = decodeURIComponent(l), c && (l = atob(l));
                        try {
                            var h, u = (this.responseType || "").toLowerCase();
                            switch (u) {
                                case "arraybuffer":
                                case "blob":
                                    for (var p = new Uint8Array(l.length), d = 0; d < l.length; d++) p[d] = l.charCodeAt(d);
                                    h = "blob" === u ? new Blob([p.buffer], {
                                        type: s
                                    }) : p.buffer;
                                    break;
                                case "document":
                                    var f = new DOMParser;
                                    h = f.parseFromString(l, s);
                                    break;
                                case "json":
                                    h = JSON.parse(l);
                                    break;
                                default:
                                    h = l
                            }
                            setTimeout(function() {
                                e && e(h), r.manager.itemEnd(t)
                            }, 0)
                        } catch (e) {
                            setTimeout(function() {
                                i && i(e), r.manager.itemError(t), r.manager.itemEnd(t)
                            }, 0)
                        }
                    } else {
                        $c[t] = [], $c[t].push({
                            onLoad: e,
                            onProgress: n,
                            onError: i
                        });
                        var m = new XMLHttpRequest;
                        for (var v in m.open("GET", t, !0), m.addEventListener("load", function(e) {
                                var n = this.response;
                                Zc.add(t, n);
                                var i = $c[t];
                                if (delete $c[t], 200 === this.status || 0 === this.status) {
                                    0 === this.status && console.warn("THREE.FileLoader: HTTP Status 0 received.");
                                    for (var o = 0, a = i.length; o < a; o++) {
                                        var s = i[o];
                                        s.onLoad && s.onLoad(n)
                                    }
                                    r.manager.itemEnd(t)
                                } else {
                                    for (var o = 0, a = i.length; o < a; o++) {
                                        var s = i[o];
                                        s.onError && s.onError(e)
                                    }
                                    r.manager.itemError(t), r.manager.itemEnd(t)
                                }
                            }, !1), m.addEventListener("progress", function(e) {
                                for (var n = $c[t], i = 0, r = n.length; i < r; i++) {
                                    var o = n[i];
                                    o.onProgress && o.onProgress(e)
                                }
                            }, !1), m.addEventListener("error", function(e) {
                                var n = $c[t];
                                delete $c[t];
                                for (var i = 0, o = n.length; i < o; i++) {
                                    var a = n[i];
                                    a.onError && a.onError(e)
                                }
                                r.manager.itemError(t), r.manager.itemEnd(t)
                            }, !1), m.addEventListener("abort", function(e) {
                                var n = $c[t];
                                delete $c[t];
                                for (var i = 0, o = n.length; i < o; i++) {
                                    var a = n[i];
                                    a.onError && a.onError(e)
                                }
                                r.manager.itemError(t), r.manager.itemEnd(t)
                            }, !1), void 0 !== this.responseType && (m.responseType = this.responseType), void 0 !== this.withCredentials && (m.withCredentials = this.withCredentials), m.overrideMimeType && m.overrideMimeType(void 0 !== this.mimeType ? this.mimeType : "text/plain"), this.requestHeader) m.setRequestHeader(v, this.requestHeader[v]);
                        m.send(null)
                    }
                    return r.manager.itemStart(t), m
                }
                $c[t].push({
                    onLoad: e,
                    onProgress: n,
                    onError: i
                })
            },
            setResponseType: function(t) {
                return this.responseType = t, this
            },
            setWithCredentials: function(t) {
                return this.withCredentials = t, this
            },
            setMimeType: function(t) {
                return this.mimeType = t, this
            },
            setRequestHeader: function(t) {
                return this.requestHeader = t, this
            }
        }), el.prototype = Object.assign(Object.create(Qc.prototype), {
            constructor: el,
            load: function(t, e, n, i) {
                var r = this,
                    o = new tl(r.manager);
                o.setPath(r.path), o.load(t, function(t) {
                    e(r.parse(JSON.parse(t)))
                }, n, i)
            },
            parse: function(t) {
                for (var e = [], n = 0; n < t.length; n++) {
                    var i = qc.parse(t[n]);
                    e.push(i)
                }
                return e
            }
        }), nl.prototype = Object.assign(Object.create(Qc.prototype), {
            constructor: nl,
            load: function(t, e, n, i) {
                var r = this,
                    o = [],
                    a = new ss;
                a.image = o;
                var s = new tl(this.manager);

                function c(c) {
                    s.load(t[c], function(t) {
                        var n = r.parse(t, !0);
                        o[c] = {
                            width: n.width,
                            height: n.height,
                            format: n.format,
                            mipmaps: n.mipmaps
                        }, 6 === (l += 1) && (1 === n.mipmapCount && (a.minFilter = ut), a.format = n.format, a.needsUpdate = !0, e && e(a))
                    }, n, i)
                }
                if (s.setPath(this.path), s.setResponseType("arraybuffer"), Array.isArray(t))
                    for (var l = 0, h = 0, u = t.length; h < u; ++h) c(h);
                else s.load(t, function(t) {
                    var n = r.parse(t, !0);
                    if (n.isCubemap)
                        for (var i = n.mipmaps.length / n.mipmapCount, s = 0; s < i; s++) {
                            o[s] = {
                                mipmaps: []
                            };
                            for (var c = 0; c < n.mipmapCount; c++) o[s].mipmaps.push(n.mipmaps[s * n.mipmapCount + c]), o[s].format = n.format, o[s].width = n.width, o[s].height = n.height
                        } else a.image.width = n.width, a.image.height = n.height, a.mipmaps = n.mipmaps;
                    1 === n.mipmapCount && (a.minFilter = ut), a.format = n.format, a.needsUpdate = !0, e && e(a)
                }, n, i);
                return a
            }
        }), il.prototype = Object.assign(Object.create(Qc.prototype), {
            constructor: il,
            load: function(t, e, n, i) {
                var r = this,
                    o = new pr,
                    a = new tl(this.manager);
                return a.setResponseType("arraybuffer"), a.setPath(this.path), a.load(t, function(t) {
                    var n = r.parse(t);
                    n && (void 0 !== n.image ? o.image = n.image : void 0 !== n.data && (o.image.width = n.width, o.image.height = n.height, o.image.data = n.data), o.wrapS = void 0 !== n.wrapS ? n.wrapS : at, o.wrapT = void 0 !== n.wrapT ? n.wrapT : at, o.magFilter = void 0 !== n.magFilter ? n.magFilter : ut, o.minFilter = void 0 !== n.minFilter ? n.minFilter : dt, o.anisotropy = void 0 !== n.anisotropy ? n.anisotropy : 1, void 0 !== n.format && (o.format = n.format), void 0 !== n.type && (o.type = n.type), void 0 !== n.mipmaps && (o.mipmaps = n.mipmaps), 1 === n.mipmapCount && (o.minFilter = ut), o.needsUpdate = !0, e && e(o, n))
                }, n, i), o
            }
        }), rl.prototype = Object.assign(Object.create(Qc.prototype), {
            constructor: rl,
            load: function(t, e, n, i) {
                void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
                var r = this,
                    o = Zc.get(t);
                if (void 0 !== o) return r.manager.itemStart(t), setTimeout(function() {
                    e && e(o), r.manager.itemEnd(t)
                }, 0), o;
                var a = document.createElementNS("http://www.w3.org/1999/xhtml", "img");

                function s() {
                    a.removeEventListener("load", s, !1), a.removeEventListener("error", c, !1), Zc.add(t, this), e && e(this), r.manager.itemEnd(t)
                }

                function c(e) {
                    a.removeEventListener("load", s, !1), a.removeEventListener("error", c, !1), i && i(e), r.manager.itemError(t), r.manager.itemEnd(t)
                }
                return a.addEventListener("load", s, !1), a.addEventListener("error", c, !1), "data:" !== t.substr(0, 5) && void 0 !== this.crossOrigin && (a.crossOrigin = this.crossOrigin), r.manager.itemStart(t), a.src = t, a
            }
        }), ol.prototype = Object.assign(Object.create(Qc.prototype), {
            constructor: ol,
            load: function(t, e, n, i) {
                var r = new Pr,
                    o = new rl(this.manager);
                o.setCrossOrigin(this.crossOrigin), o.setPath(this.path);
                var a = 0;

                function s(n) {
                    o.load(t[n], function(t) {
                        r.images[n] = t, 6 == ++a && (r.needsUpdate = !0, e && e(r))
                    }, void 0, i)
                }
                for (var c = 0; c < t.length; ++c) s(c);
                return r
            }
        }), al.prototype = Object.assign(Object.create(Qc.prototype), {
            constructor: al,
            load: function(t, e, n, i) {
                var r = new He,
                    o = new rl(this.manager);
                return o.setCrossOrigin(this.crossOrigin), o.setPath(this.path), o.load(t, function(n) {
                    r.image = n;
                    var i = t.search(/\.jpe?g($|\?)/i) > 0 || 0 === t.search(/^data\:image\/jpeg/);
                    r.format = i ? At : Pt, r.needsUpdate = !0, void 0 !== e && e(r)
                }, n, i), r
            }
        }), Object.assign(sl.prototype, {
            getPoint: function() {
                return console.warn("THREE.Curve: .getPoint() not implemented."), null
            },
            getPointAt: function(t, e) {
                var n = this.getUtoTmapping(t);
                return this.getPoint(n, e)
            },
            getPoints: function(t) {
                void 0 === t && (t = 5);
                for (var e = [], n = 0; n <= t; n++) e.push(this.getPoint(n / t));
                return e
            },
            getSpacedPoints: function(t) {
                void 0 === t && (t = 5);
                for (var e = [], n = 0; n <= t; n++) e.push(this.getPointAt(n / t));
                return e
            },
            getLength: function() {
                var t = this.getLengths();
                return t[t.length - 1]
            },
            getLengths: function(t) {
                if (void 0 === t && (t = this.arcLengthDivisions), this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate) return this.cacheArcLengths;
                this.needsUpdate = !1;
                var e, n, i = [],
                    r = this.getPoint(0),
                    o = 0;
                for (i.push(0), n = 1; n <= t; n++) e = this.getPoint(n / t), o += e.distanceTo(r), i.push(o), r = e;
                return this.cacheArcLengths = i, i
            },
            updateArcLengths: function() {
                this.needsUpdate = !0, this.getLengths()
            },
            getUtoTmapping: function(t, e) {
                var n, i = this.getLengths(),
                    r = 0,
                    o = i.length;
                n = e || t * i[o - 1];
                for (var a, s = 0, c = o - 1; s <= c;)
                    if (r = Math.floor(s + (c - s) / 2), (a = i[r] - n) < 0) s = r + 1;
                    else {
                        if (!(a > 0)) {
                            c = r;
                            break
                        }
                        c = r - 1
                    } if (i[r = c] === n) return r / (o - 1);
                var l = i[r],
                    h = i[r + 1],
                    u = h - l,
                    p = (n - l) / u,
                    d = (r + p) / (o - 1);
                return d
            },
            getTangent: function(t) {
                var e = t - 1e-4,
                    n = t + 1e-4;
                e < 0 && (e = 0), n > 1 && (n = 1);
                var i = this.getPoint(e),
                    r = this.getPoint(n),
                    o = r.clone().sub(i);
                return o.normalize()
            },
            getTangentAt: function(t) {
                var e = this.getUtoTmapping(t);
                return this.getTangent(e)
            },
            computeFrenetFrames: function(t, e) {
                var n, i, r, o = new Ce,
                    a = [],
                    s = [],
                    c = [],
                    l = new Ce,
                    h = new Ye;
                for (n = 0; n <= t; n++) i = n / t, a[n] = this.getTangentAt(i), a[n].normalize();
                s[0] = new Ce, c[0] = new Ce;
                var u = Number.MAX_VALUE,
                    p = Math.abs(a[0].x),
                    d = Math.abs(a[0].y),
                    f = Math.abs(a[0].z);
                for (p <= u && (u = p, o.set(1, 0, 0)), d <= u && (u = d, o.set(0, 1, 0)), f <= u && o.set(0, 0, 1), l.crossVectors(a[0], o).normalize(), s[0].crossVectors(a[0], l), c[0].crossVectors(a[0], s[0]), n = 1; n <= t; n++) s[n] = s[n - 1].clone(), c[n] = c[n - 1].clone(), l.crossVectors(a[n - 1], a[n]), l.length() > Number.EPSILON && (l.normalize(), r = Math.acos(Se.clamp(a[n - 1].dot(a[n]), -1, 1)), s[n].applyMatrix4(h.makeRotationAxis(l, r))), c[n].crossVectors(a[n], s[n]);
                if (!0 === e)
                    for (r = Math.acos(Se.clamp(s[0].dot(s[t]), -1, 1)), r /= t, a[0].dot(l.crossVectors(s[0], s[t])) > 0 && (r = -r), n = 1; n <= t; n++) s[n].applyMatrix4(h.makeRotationAxis(a[n], r * n)), c[n].crossVectors(a[n], s[n]);
                return {
                    tangents: a,
                    normals: s,
                    binormals: c
                }
            },
            clone: function() {
                return (new this.constructor).copy(this)
            },
            copy: function(t) {
                return this.arcLengthDivisions = t.arcLengthDivisions, this
            },
            toJSON: function() {
                var t = {
                    metadata: {
                        version: 4.5,
                        type: "Curve",
                        generator: "Curve.toJSON"
                    }
                };
                return t.arcLengthDivisions = this.arcLengthDivisions, t.type = this.type, t
            },
            fromJSON: function(t) {
                return this.arcLengthDivisions = t.arcLengthDivisions, this
            }
        }), cl.prototype = Object.create(sl.prototype), cl.prototype.constructor = cl, cl.prototype.isEllipseCurve = !0, cl.prototype.getPoint = function(t, e) {
            for (var n = e || new Ae, i = 2 * Math.PI, r = this.aEndAngle - this.aStartAngle, o = Math.abs(r) < Number.EPSILON; r < 0;) r += i;
            for (; r > i;) r -= i;
            r < Number.EPSILON && (r = o ? 0 : i), !0 !== this.aClockwise || o || (r === i ? r = -i : r -= i);
            var a = this.aStartAngle + t * r,
                s = this.aX + this.xRadius * Math.cos(a),
                c = this.aY + this.yRadius * Math.sin(a);
            if (0 !== this.aRotation) {
                var l = Math.cos(this.aRotation),
                    h = Math.sin(this.aRotation),
                    u = s - this.aX,
                    p = c - this.aY;
                s = u * l - p * h + this.aX, c = u * h + p * l + this.aY
            }
            return n.set(s, c)
        }, cl.prototype.copy = function(t) {
            return sl.prototype.copy.call(this, t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this
        }, cl.prototype.toJSON = function() {
            var t = sl.prototype.toJSON.call(this);
            return t.aX = this.aX, t.aY = this.aY, t.xRadius = this.xRadius, t.yRadius = this.yRadius, t.aStartAngle = this.aStartAngle, t.aEndAngle = this.aEndAngle, t.aClockwise = this.aClockwise, t.aRotation = this.aRotation, t
        }, cl.prototype.fromJSON = function(t) {
            return sl.prototype.fromJSON.call(this, t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this
        }, ll.prototype = Object.create(cl.prototype), ll.prototype.constructor = ll, ll.prototype.isArcCurve = !0;
        var ul = new Ce,
            pl = new hl,
            dl = new hl,
            fl = new hl;

        function ml(t, e, n, i) {
            sl.call(this), this.type = "CatmullRomCurve3", this.points = t || [], this.closed = e || !1, this.curveType = n || "centripetal", this.tension = i || .5
        }

        function vl(t, e, n, i, r) {
            var o = .5 * (i - e),
                a = .5 * (r - n),
                s = t * t,
                c = t * s;
            return (2 * n - 2 * i + o + a) * c + (-3 * n + 3 * i - 2 * o - a) * s + o * t + n
        }

        function gl(t, e, n, i) {
            return function(t, e) {
                var n = 1 - t;
                return n * n * e
            }(t, e) + function(t, e) {
                return 2 * (1 - t) * t * e
            }(t, n) + function(t, e) {
                return t * t * e
            }(t, i)
        }

        function yl(t, e, n, i, r) {
            return function(t, e) {
                var n = 1 - t;
                return n * n * n * e
            }(t, e) + function(t, e) {
                var n = 1 - t;
                return 3 * n * n * t * e
            }(t, n) + function(t, e) {
                return 3 * (1 - t) * t * t * e
            }(t, i) + function(t, e) {
                return t * t * t * e
            }(t, r)
        }

        function _l(t, e, n, i) {
            sl.call(this), this.type = "CubicBezierCurve", this.v0 = t || new Ae, this.v1 = e || new Ae, this.v2 = n || new Ae, this.v3 = i || new Ae
        }

        function xl(t, e, n, i) {
            sl.call(this), this.type = "CubicBezierCurve3", this.v0 = t || new Ce, this.v1 = e || new Ce, this.v2 = n || new Ce, this.v3 = i || new Ce
        }

        function bl(t, e) {
            sl.call(this), this.type = "LineCurve", this.v1 = t || new Ae, this.v2 = e || new Ae
        }

        function wl(t, e) {
            sl.call(this), this.type = "LineCurve3", this.v1 = t || new Ce, this.v2 = e || new Ce
        }

        function Ml(t, e, n) {
            sl.call(this), this.type = "QuadraticBezierCurve", this.v0 = t || new Ae, this.v1 = e || new Ae, this.v2 = n || new Ae
        }

        function Tl(t, e, n) {
            sl.call(this), this.type = "QuadraticBezierCurve3", this.v0 = t || new Ce, this.v1 = e || new Ce, this.v2 = n || new Ce
        }

        function El(t) {
            sl.call(this), this.type = "SplineCurve", this.points = t || []
        }
        ml.prototype = Object.create(sl.prototype), ml.prototype.constructor = ml, ml.prototype.isCatmullRomCurve3 = !0, ml.prototype.getPoint = function(t, e) {
            var n, i, r, o, a = e || new Ce,
                s = this.points,
                c = s.length,
                l = (c - (this.closed ? 0 : 1)) * t,
                h = Math.floor(l),
                u = l - h;
            if (this.closed ? h += h > 0 ? 0 : (Math.floor(Math.abs(h) / c) + 1) * c : 0 === u && h === c - 1 && (h = c - 2, u = 1), this.closed || h > 0 ? n = s[(h - 1) % c] : (ul.subVectors(s[0], s[1]).add(s[0]), n = ul), i = s[h % c], r = s[(h + 1) % c], this.closed || h + 2 < c ? o = s[(h + 2) % c] : (ul.subVectors(s[c - 1], s[c - 2]).add(s[c - 1]), o = ul), "centripetal" === this.curveType || "chordal" === this.curveType) {
                var p = "chordal" === this.curveType ? .5 : .25,
                    d = Math.pow(n.distanceToSquared(i), p),
                    f = Math.pow(i.distanceToSquared(r), p),
                    m = Math.pow(r.distanceToSquared(o), p);
                f < 1e-4 && (f = 1), d < 1e-4 && (d = f), m < 1e-4 && (m = f), pl.initNonuniformCatmullRom(n.x, i.x, r.x, o.x, d, f, m), dl.initNonuniformCatmullRom(n.y, i.y, r.y, o.y, d, f, m), fl.initNonuniformCatmullRom(n.z, i.z, r.z, o.z, d, f, m)
            } else "catmullrom" === this.curveType && (pl.initCatmullRom(n.x, i.x, r.x, o.x, this.tension), dl.initCatmullRom(n.y, i.y, r.y, o.y, this.tension), fl.initCatmullRom(n.z, i.z, r.z, o.z, this.tension));
            return a.set(pl.calc(u), dl.calc(u), fl.calc(u)), a
        }, ml.prototype.copy = function(t) {
            sl.prototype.copy.call(this, t), this.points = [];
            for (var e = 0, n = t.points.length; e < n; e++) {
                var i = t.points[e];
                this.points.push(i.clone())
            }
            return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this
        }, ml.prototype.toJSON = function() {
            var t = sl.prototype.toJSON.call(this);
            t.points = [];
            for (var e = 0, n = this.points.length; e < n; e++) {
                var i = this.points[e];
                t.points.push(i.toArray())
            }
            return t.closed = this.closed, t.curveType = this.curveType, t.tension = this.tension, t
        }, ml.prototype.fromJSON = function(t) {
            sl.prototype.fromJSON.call(this, t), this.points = [];
            for (var e = 0, n = t.points.length; e < n; e++) {
                var i = t.points[e];
                this.points.push((new Ce).fromArray(i))
            }
            return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this
        }, _l.prototype = Object.create(sl.prototype), _l.prototype.constructor = _l, _l.prototype.isCubicBezierCurve = !0, _l.prototype.getPoint = function(t, e) {
            var n = e || new Ae,
                i = this.v0,
                r = this.v1,
                o = this.v2,
                a = this.v3;
            return n.set(yl(t, i.x, r.x, o.x, a.x), yl(t, i.y, r.y, o.y, a.y)), n
        }, _l.prototype.copy = function(t) {
            return sl.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this
        }, _l.prototype.toJSON = function() {
            var t = sl.prototype.toJSON.call(this);
            return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t
        }, _l.prototype.fromJSON = function(t) {
            return sl.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this
        }, xl.prototype = Object.create(sl.prototype), xl.prototype.constructor = xl, xl.prototype.isCubicBezierCurve3 = !0, xl.prototype.getPoint = function(t, e) {
            var n = e || new Ce,
                i = this.v0,
                r = this.v1,
                o = this.v2,
                a = this.v3;
            return n.set(yl(t, i.x, r.x, o.x, a.x), yl(t, i.y, r.y, o.y, a.y), yl(t, i.z, r.z, o.z, a.z)), n
        }, xl.prototype.copy = function(t) {
            return sl.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this
        }, xl.prototype.toJSON = function() {
            var t = sl.prototype.toJSON.call(this);
            return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t
        }, xl.prototype.fromJSON = function(t) {
            return sl.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this
        }, bl.prototype = Object.create(sl.prototype), bl.prototype.constructor = bl, bl.prototype.isLineCurve = !0, bl.prototype.getPoint = function(t, e) {
            var n = e || new Ae;
            return 1 === t ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)), n
        }, bl.prototype.getPointAt = function(t, e) {
            return this.getPoint(t, e)
        }, bl.prototype.getTangent = function() {
            var t = this.v2.clone().sub(this.v1);
            return t.normalize()
        }, bl.prototype.copy = function(t) {
            return sl.prototype.copy.call(this, t), this.v1.copy(t.v1), this.v2.copy(t.v2), this
        }, bl.prototype.toJSON = function() {
            var t = sl.prototype.toJSON.call(this);
            return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
        }, bl.prototype.fromJSON = function(t) {
            return sl.prototype.fromJSON.call(this, t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
        }, wl.prototype = Object.create(sl.prototype), wl.prototype.constructor = wl, wl.prototype.isLineCurve3 = !0, wl.prototype.getPoint = function(t, e) {
            var n = e || new Ce;
            return 1 === t ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)), n
        }, wl.prototype.getPointAt = function(t, e) {
            return this.getPoint(t, e)
        }, wl.prototype.copy = function(t) {
            return sl.prototype.copy.call(this, t), this.v1.copy(t.v1), this.v2.copy(t.v2), this
        }, wl.prototype.toJSON = function() {
            var t = sl.prototype.toJSON.call(this);
            return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
        }, wl.prototype.fromJSON = function(t) {
            return sl.prototype.fromJSON.call(this, t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
        }, Ml.prototype = Object.create(sl.prototype), Ml.prototype.constructor = Ml, Ml.prototype.isQuadraticBezierCurve = !0, Ml.prototype.getPoint = function(t, e) {
            var n = e || new Ae,
                i = this.v0,
                r = this.v1,
                o = this.v2;
            return n.set(gl(t, i.x, r.x, o.x), gl(t, i.y, r.y, o.y)), n
        }, Ml.prototype.copy = function(t) {
            return sl.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this
        }, Ml.prototype.toJSON = function() {
            var t = sl.prototype.toJSON.call(this);
            return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
        }, Ml.prototype.fromJSON = function(t) {
            return sl.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
        }, Tl.prototype = Object.create(sl.prototype), Tl.prototype.constructor = Tl, Tl.prototype.isQuadraticBezierCurve3 = !0, Tl.prototype.getPoint = function(t, e) {
            var n = e || new Ce,
                i = this.v0,
                r = this.v1,
                o = this.v2;
            return n.set(gl(t, i.x, r.x, o.x), gl(t, i.y, r.y, o.y), gl(t, i.z, r.z, o.z)), n
        }, Tl.prototype.copy = function(t) {
            return sl.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this
        }, Tl.prototype.toJSON = function() {
            var t = sl.prototype.toJSON.call(this);
            return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
        }, Tl.prototype.fromJSON = function(t) {
            return sl.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
        }, El.prototype = Object.create(sl.prototype), El.prototype.constructor = El, El.prototype.isSplineCurve = !0, El.prototype.getPoint = function(t, e) {
            var n = e || new Ae,
                i = this.points,
                r = (i.length - 1) * t,
                o = Math.floor(r),
                a = r - o,
                s = i[0 === o ? o : o - 1],
                c = i[o],
                l = i[o > i.length - 2 ? i.length - 1 : o + 1],
                h = i[o > i.length - 3 ? i.length - 1 : o + 2];
            return n.set(vl(a, s.x, c.x, l.x, h.x), vl(a, s.y, c.y, l.y, h.y)), n
        }, El.prototype.copy = function(t) {
            sl.prototype.copy.call(this, t), this.points = [];
            for (var e = 0, n = t.points.length; e < n; e++) {
                var i = t.points[e];
                this.points.push(i.clone())
            }
            return this
        }, El.prototype.toJSON = function() {
            var t = sl.prototype.toJSON.call(this);
            t.points = [];
            for (var e = 0, n = this.points.length; e < n; e++) {
                var i = this.points[e];
                t.points.push(i.toArray())
            }
            return t
        }, El.prototype.fromJSON = function(t) {
            sl.prototype.fromJSON.call(this, t), this.points = [];
            for (var e = 0, n = t.points.length; e < n; e++) {
                var i = t.points[e];
                this.points.push((new Ae).fromArray(i))
            }
            return this
        };
        var Sl = Object.freeze({
            ArcCurve: ll,
            CatmullRomCurve3: ml,
            CubicBezierCurve: _l,
            CubicBezierCurve3: xl,
            EllipseCurve: cl,
            LineCurve: bl,
            LineCurve3: wl,
            QuadraticBezierCurve: Ml,
            QuadraticBezierCurve3: Tl,
            SplineCurve: El
        });

        function Al() {
            sl.call(this), this.type = "CurvePath", this.curves = [], this.autoClose = !1
        }

        function Pl(t) {
            Al.call(this), this.type = "Path", this.currentPoint = new Ae, t && this.setFromPoints(t)
        }

        function Ll(t) {
            Pl.call(this, t), this.uuid = Se.generateUUID(), this.type = "Shape", this.holes = []
        }

        function Rl(t, e) {
            dn.call(this), this.type = "Light", this.color = new $n(t), this.intensity = void 0 !== e ? e : 1, this.receiveShadow = void 0
        }

        function Cl(t, e, n) {
            Rl.call(this, t, n), this.type = "HemisphereLight", this.castShadow = void 0, this.position.copy(dn.DefaultUp), this.updateMatrix(), this.groundColor = new $n(e)
        }

        function Ol(t) {
            this.camera = t, this.bias = 0, this.radius = 1, this.mapSize = new Ae(512, 512), this.map = null, this.mapPass = null, this.matrix = new Ye, this._frustum = new _r, this._frameExtents = new Ae(1, 1), this._viewportCount = 1, this._viewports = [new Fe(0, 0, 1, 1)]
        }

        function Il() {
            Ol.call(this, new sr(50, 1, .5, 500))
        }

        function Dl(t, e, n, i, r, o) {
            Rl.call(this, t, e), this.type = "SpotLight", this.position.copy(dn.DefaultUp), this.updateMatrix(), this.target = new dn, Object.defineProperty(this, "power", {
                get: function() {
                    return this.intensity * Math.PI
                },
                set: function(t) {
                    this.intensity = t / Math.PI
                }
            }), this.distance = void 0 !== n ? n : 0, this.angle = void 0 !== i ? i : Math.PI / 3, this.penumbra = void 0 !== r ? r : 0, this.decay = void 0 !== o ? o : 1, this.shadow = new Il
        }

        function Nl() {
            Ol.call(this, new sr(90, 1, .5, 500)), this._frameExtents = new Ae(4, 2), this._viewportCount = 6, this._viewports = [new Fe(2, 1, 1, 1), new Fe(0, 1, 1, 1), new Fe(3, 1, 1, 1), new Fe(1, 1, 1, 1), new Fe(3, 0, 1, 1), new Fe(1, 0, 1, 1)], this._cubeDirections = [new Ce(1, 0, 0), new Ce(-1, 0, 0), new Ce(0, 0, 1), new Ce(0, 0, -1), new Ce(0, 1, 0), new Ce(0, -1, 0)], this._cubeUps = [new Ce(0, 1, 0), new Ce(0, 1, 0), new Ce(0, 1, 0), new Ce(0, 1, 0), new Ce(0, 0, 1), new Ce(0, 0, -1)]
        }

        function Bl(t, e, n, i) {
            Rl.call(this, t, e), this.type = "PointLight", Object.defineProperty(this, "power", {
                get: function() {
                    return 4 * this.intensity * Math.PI
                },
                set: function(t) {
                    this.intensity = t / (4 * Math.PI)
                }
            }), this.distance = void 0 !== n ? n : 0, this.decay = void 0 !== i ? i : 1, this.shadow = new Nl
        }

        function Hl(t, e, n, i, r, o) {
            ar.call(this), this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = void 0 !== t ? t : -1, this.right = void 0 !== e ? e : 1, this.top = void 0 !== n ? n : 1, this.bottom = void 0 !== i ? i : -1, this.near = void 0 !== r ? r : .1, this.far = void 0 !== o ? o : 2e3, this.updateProjectionMatrix()
        }

        function Fl() {
            Ol.call(this, new Hl(-5, 5, 5, -5, .5, 500))
        }

        function kl(t, e) {
            Rl.call(this, t, e), this.type = "DirectionalLight", this.position.copy(dn.DefaultUp), this.updateMatrix(), this.target = new dn, this.shadow = new Fl
        }

        function Ul(t, e) {
            Rl.call(this, t, e), this.type = "AmbientLight", this.castShadow = void 0
        }

        function zl(t, e, n, i) {
            Rl.call(this, t, e), this.type = "RectAreaLight", this.width = void 0 !== n ? n : 10, this.height = void 0 !== i ? i : 10
        }

        function Gl(t) {
            Qc.call(this, t), this.textures = {}
        }
        Al.prototype = Object.assign(Object.create(sl.prototype), {
            constructor: Al,
            add: function(t) {
                this.curves.push(t)
            },
            closePath: function() {
                var t = this.curves[0].getPoint(0),
                    e = this.curves[this.curves.length - 1].getPoint(1);
                t.equals(e) || this.curves.push(new bl(e, t))
            },
            getPoint: function(t) {
                for (var e = t * this.getLength(), n = this.getCurveLengths(), i = 0; i < n.length;) {
                    if (n[i] >= e) {
                        var r = n[i] - e,
                            o = this.curves[i],
                            a = o.getLength(),
                            s = 0 === a ? 0 : 1 - r / a;
                        return o.getPointAt(s)
                    }
                    i++
                }
                return null
            },
            getLength: function() {
                var t = this.getCurveLengths();
                return t[t.length - 1]
            },
            updateArcLengths: function() {
                this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths()
            },
            getCurveLengths: function() {
                if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
                for (var t = [], e = 0, n = 0, i = this.curves.length; n < i; n++) e += this.curves[n].getLength(), t.push(e);
                return this.cacheLengths = t, t
            },
            getSpacedPoints: function(t) {
                void 0 === t && (t = 40);
                for (var e = [], n = 0; n <= t; n++) e.push(this.getPoint(n / t));
                return this.autoClose && e.push(e[0]), e
            },
            getPoints: function(t) {
                t = t || 12;
                for (var e, n = [], i = 0, r = this.curves; i < r.length; i++)
                    for (var o = r[i], a = o && o.isEllipseCurve ? 2 * t : o && (o.isLineCurve || o.isLineCurve3) ? 1 : o && o.isSplineCurve ? t * o.points.length : t, s = o.getPoints(a), c = 0; c < s.length; c++) {
                        var l = s[c];
                        e && e.equals(l) || (n.push(l), e = l)
                    }
                return this.autoClose && n.length > 1 && !n[n.length - 1].equals(n[0]) && n.push(n[0]), n
            },
            copy: function(t) {
                sl.prototype.copy.call(this, t), this.curves = [];
                for (var e = 0, n = t.curves.length; e < n; e++) {
                    var i = t.curves[e];
                    this.curves.push(i.clone())
                }
                return this.autoClose = t.autoClose, this
            },
            toJSON: function() {
                var t = sl.prototype.toJSON.call(this);
                t.autoClose = this.autoClose, t.curves = [];
                for (var e = 0, n = this.curves.length; e < n; e++) {
                    var i = this.curves[e];
                    t.curves.push(i.toJSON())
                }
                return t
            },
            fromJSON: function(t) {
                sl.prototype.fromJSON.call(this, t), this.autoClose = t.autoClose, this.curves = [];
                for (var e = 0, n = t.curves.length; e < n; e++) {
                    var i = t.curves[e];
                    this.curves.push((new Sl[i.type]).fromJSON(i))
                }
                return this
            }
        }), Pl.prototype = Object.assign(Object.create(Al.prototype), {
            constructor: Pl,
            setFromPoints: function(t) {
                this.moveTo(t[0].x, t[0].y);
                for (var e = 1, n = t.length; e < n; e++) this.lineTo(t[e].x, t[e].y)
            },
            moveTo: function(t, e) {
                this.currentPoint.set(t, e)
            },
            lineTo: function(t, e) {
                var n = new bl(this.currentPoint.clone(), new Ae(t, e));
                this.curves.push(n), this.currentPoint.set(t, e)
            },
            quadraticCurveTo: function(t, e, n, i) {
                var r = new Ml(this.currentPoint.clone(), new Ae(t, e), new Ae(n, i));
                this.curves.push(r), this.currentPoint.set(n, i)
            },
            bezierCurveTo: function(t, e, n, i, r, o) {
                var a = new _l(this.currentPoint.clone(), new Ae(t, e), new Ae(n, i), new Ae(r, o));
                this.curves.push(a), this.currentPoint.set(r, o)
            },
            splineThru: function(t) {
                var e = [this.currentPoint.clone()].concat(t),
                    n = new El(e);
                this.curves.push(n), this.currentPoint.copy(t[t.length - 1])
            },
            arc: function(t, e, n, i, r, o) {
                var a = this.currentPoint.x,
                    s = this.currentPoint.y;
                this.absarc(t + a, e + s, n, i, r, o)
            },
            absarc: function(t, e, n, i, r, o) {
                this.absellipse(t, e, n, n, i, r, o)
            },
            ellipse: function(t, e, n, i, r, o, a, s) {
                var c = this.currentPoint.x,
                    l = this.currentPoint.y;
                this.absellipse(t + c, e + l, n, i, r, o, a, s)
            },
            absellipse: function(t, e, n, i, r, o, a, s) {
                var c = new cl(t, e, n, i, r, o, a, s);
                if (this.curves.length > 0) {
                    var l = c.getPoint(0);
                    l.equals(this.currentPoint) || this.lineTo(l.x, l.y)
                }
                this.curves.push(c);
                var h = c.getPoint(1);
                this.currentPoint.copy(h)
            },
            copy: function(t) {
                return Al.prototype.copy.call(this, t), this.currentPoint.copy(t.currentPoint), this
            },
            toJSON: function() {
                var t = Al.prototype.toJSON.call(this);
                return t.currentPoint = this.currentPoint.toArray(), t
            },
            fromJSON: function(t) {
                return Al.prototype.fromJSON.call(this, t), this.currentPoint.fromArray(t.currentPoint), this
            }
        }), Ll.prototype = Object.assign(Object.create(Pl.prototype), {
            constructor: Ll,
            getPointsHoles: function(t) {
                for (var e = [], n = 0, i = this.holes.length; n < i; n++) e[n] = this.holes[n].getPoints(t);
                return e
            },
            extractPoints: function(t) {
                return {
                    shape: this.getPoints(t),
                    holes: this.getPointsHoles(t)
                }
            },
            copy: function(t) {
                Pl.prototype.copy.call(this, t), this.holes = [];
                for (var e = 0, n = t.holes.length; e < n; e++) {
                    var i = t.holes[e];
                    this.holes.push(i.clone())
                }
                return this
            },
            toJSON: function() {
                var t = Pl.prototype.toJSON.call(this);
                t.uuid = this.uuid, t.holes = [];
                for (var e = 0, n = this.holes.length; e < n; e++) {
                    var i = this.holes[e];
                    t.holes.push(i.toJSON())
                }
                return t
            },
            fromJSON: function(t) {
                Pl.prototype.fromJSON.call(this, t), this.uuid = t.uuid, this.holes = [];
                for (var e = 0, n = t.holes.length; e < n; e++) {
                    var i = t.holes[e];
                    this.holes.push((new Pl).fromJSON(i))
                }
                return this
            }
        }), Rl.prototype = Object.assign(Object.create(dn.prototype), {
            constructor: Rl,
            isLight: !0,
            copy: function(t) {
                return dn.prototype.copy.call(this, t), this.color.copy(t.color), this.intensity = t.intensity, this
            },
            toJSON: function(t) {
                var e = dn.prototype.toJSON.call(this, t);
                return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, void 0 !== this.groundColor && (e.object.groundColor = this.groundColor.getHex()), void 0 !== this.distance && (e.object.distance = this.distance), void 0 !== this.angle && (e.object.angle = this.angle), void 0 !== this.decay && (e.object.decay = this.decay), void 0 !== this.penumbra && (e.object.penumbra = this.penumbra), void 0 !== this.shadow && (e.object.shadow = this.shadow.toJSON()), e
            }
        }), Cl.prototype = Object.assign(Object.create(Rl.prototype), {
            constructor: Cl,
            isHemisphereLight: !0,
            copy: function(t) {
                return Rl.prototype.copy.call(this, t), this.groundColor.copy(t.groundColor), this
            }
        }), Object.assign(Ol.prototype, {
            _projScreenMatrix: new Ye,
            _lightPositionWorld: new Ce,
            _lookTarget: new Ce,
            getViewportCount: function() {
                return this._viewportCount
            },
            getFrustum: function() {
                return this._frustum
            },
            updateMatrices: function(t) {
                var e = this.camera,
                    n = this.matrix,
                    i = this._projScreenMatrix,
                    r = this._lookTarget,
                    o = this._lightPositionWorld;
                o.setFromMatrixPosition(t.matrixWorld), e.position.copy(o), r.setFromMatrixPosition(t.target.matrixWorld), e.lookAt(r), e.updateMatrixWorld(), i.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), this._frustum.setFromMatrix(i), n.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), n.multiply(e.projectionMatrix), n.multiply(e.matrixWorldInverse)
            },
            getViewport: function(t) {
                return this._viewports[t]
            },
            getFrameExtents: function() {
                return this._frameExtents
            },
            copy: function(t) {
                return this.camera = t.camera.clone(), this.bias = t.bias, this.radius = t.radius, this.mapSize.copy(t.mapSize), this
            },
            clone: function() {
                return (new this.constructor).copy(this)
            },
            toJSON: function() {
                var t = {};
                return 0 !== this.bias && (t.bias = this.bias), 1 !== this.radius && (t.radius = this.radius), 512 === this.mapSize.x && 512 === this.mapSize.y || (t.mapSize = this.mapSize.toArray()), t.camera = this.camera.toJSON(!1).object, delete t.camera.matrix, t
            }
        }), Il.prototype = Object.assign(Object.create(Ol.prototype), {
            constructor: Il,
            isSpotLightShadow: !0,
            updateMatrices: function(t, e, n) {
                var i = this.camera,
                    r = 2 * Se.RAD2DEG * t.angle,
                    o = this.mapSize.width / this.mapSize.height,
                    a = t.distance || i.far;
                r === i.fov && o === i.aspect && a === i.far || (i.fov = r, i.aspect = o, i.far = a, i.updateProjectionMatrix()), Ol.prototype.updateMatrices.call(this, t, e, n)
            }
        }), Dl.prototype = Object.assign(Object.create(Rl.prototype), {
            constructor: Dl,
            isSpotLight: !0,
            copy: function(t) {
                return Rl.prototype.copy.call(this, t), this.distance = t.distance, this.angle = t.angle, this.penumbra = t.penumbra, this.decay = t.decay, this.target = t.target.clone(), this.shadow = t.shadow.clone(), this
            }
        }), Nl.prototype = Object.assign(Object.create(Ol.prototype), {
            constructor: Nl,
            isPointLightShadow: !0,
            updateMatrices: function(t, e, n) {
                var i = this.camera,
                    r = this.matrix,
                    o = this._lightPositionWorld,
                    a = this._lookTarget,
                    s = this._projScreenMatrix;
                o.setFromMatrixPosition(t.matrixWorld), i.position.copy(o), a.copy(i.position), a.add(this._cubeDirections[n]), i.up.copy(this._cubeUps[n]), i.lookAt(a), i.updateMatrixWorld(), r.makeTranslation(-o.x, -o.y, -o.z), s.multiplyMatrices(i.projectionMatrix, i.matrixWorldInverse), this._frustum.setFromMatrix(s)
            }
        }), Bl.prototype = Object.assign(Object.create(Rl.prototype), {
            constructor: Bl,
            isPointLight: !0,
            copy: function(t) {
                return Rl.prototype.copy.call(this, t), this.distance = t.distance, this.decay = t.decay, this.shadow = t.shadow.clone(), this
            }
        }), Hl.prototype = Object.assign(Object.create(ar.prototype), {
            constructor: Hl,
            isOrthographicCamera: !0,
            copy: function(t, e) {
                return ar.prototype.copy.call(this, t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = null === t.view ? null : Object.assign({}, t.view), this
            },
            setViewOffset: function(t, e, n, i, r, o) {
                null === this.view && (this.view = {
                    enabled: !0,
                    fullWidth: 1,
                    fullHeight: 1,
                    offsetX: 0,
                    offsetY: 0,
                    width: 1,
                    height: 1
                }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = o, this.updateProjectionMatrix()
            },
            clearViewOffset: function() {
                null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
            },
            updateProjectionMatrix: function() {
                var t = (this.right - this.left) / (2 * this.zoom),
                    e = (this.top - this.bottom) / (2 * this.zoom),
                    n = (this.right + this.left) / 2,
                    i = (this.top + this.bottom) / 2,
                    r = n - t,
                    o = n + t,
                    a = i + e,
                    s = i - e;
                if (null !== this.view && this.view.enabled) {
                    var c = this.zoom / (this.view.width / this.view.fullWidth),
                        l = this.zoom / (this.view.height / this.view.fullHeight),
                        h = (this.right - this.left) / this.view.width,
                        u = (this.top - this.bottom) / this.view.height;
                    r += h * (this.view.offsetX / c), o = r + h * (this.view.width / c), a -= u * (this.view.offsetY / l), s = a - u * (this.view.height / l)
                }
                this.projectionMatrix.makeOrthographic(r, o, a, s, this.near, this.far), this.projectionMatrixInverse.getInverse(this.projectionMatrix)
            },
            toJSON: function(t) {
                var e = dn.prototype.toJSON.call(this, t);
                return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, null !== this.view && (e.object.view = Object.assign({}, this.view)), e
            }
        }), Fl.prototype = Object.assign(Object.create(Ol.prototype), {
            constructor: Fl,
            isDirectionalLightShadow: !0,
            updateMatrices: function(t, e, n) {
                Ol.prototype.updateMatrices.call(this, t, e, n)
            }
        }), kl.prototype = Object.assign(Object.create(Rl.prototype), {
            constructor: kl,
            isDirectionalLight: !0,
            copy: function(t) {
                return Rl.prototype.copy.call(this, t), this.target = t.target.clone(), this.shadow = t.shadow.clone(), this
            }
        }), Ul.prototype = Object.assign(Object.create(Rl.prototype), {
            constructor: Ul,
            isAmbientLight: !0
        }), zl.prototype = Object.assign(Object.create(Rl.prototype), {
            constructor: zl,
            isRectAreaLight: !0,
            copy: function(t) {
                return Rl.prototype.copy.call(this, t), this.width = t.width, this.height = t.height, this
            },
            toJSON: function(t) {
                var e = Rl.prototype.toJSON.call(this, t);
                return e.object.width = this.width, e.object.height = this.height, e
            }
        }), Gl.prototype = Object.assign(Object.create(Qc.prototype), {
            constructor: Gl,
            load: function(t, e, n, i) {
                var r = this,
                    o = new tl(r.manager);
                o.setPath(r.path), o.load(t, function(t) {
                    e(r.parse(JSON.parse(t)))
                }, n, i)
            },
            parse: function(t) {
                var e = this.textures;

                function n(t) {
                    return void 0 === e[t] && console.warn("THREE.MaterialLoader: Undefined texture", t), e[t]
                }
                var i = new Ic[t.type];
                if (void 0 !== t.uuid && (i.uuid = t.uuid), void 0 !== t.name && (i.name = t.name), void 0 !== t.color && i.color.setHex(t.color), void 0 !== t.roughness && (i.roughness = t.roughness), void 0 !== t.metalness && (i.metalness = t.metalness), void 0 !== t.sheen && (i.sheen = (new $n).setHex(t.sheen)), void 0 !== t.emissive && i.emissive.setHex(t.emissive), void 0 !== t.specular && i.specular.setHex(t.specular), void 0 !== t.shininess && (i.shininess = t.shininess), void 0 !== t.clearcoat && (i.clearcoat = t.clearcoat), void 0 !== t.clearcoatRoughness && (i.clearcoatRoughness = t.clearcoatRoughness), void 0 !== t.vertexColors && (i.vertexColors = t.vertexColors), void 0 !== t.fog && (i.fog = t.fog), void 0 !== t.flatShading && (i.flatShading = t.flatShading), void 0 !== t.blending && (i.blending = t.blending), void 0 !== t.combine && (i.combine = t.combine), void 0 !== t.side && (i.side = t.side), void 0 !== t.opacity && (i.opacity = t.opacity), void 0 !== t.transparent && (i.transparent = t.transparent), void 0 !== t.alphaTest && (i.alphaTest = t.alphaTest), void 0 !== t.depthTest && (i.depthTest = t.depthTest), void 0 !== t.depthWrite && (i.depthWrite = t.depthWrite), void 0 !== t.colorWrite && (i.colorWrite = t.colorWrite), void 0 !== t.stencilWrite && (i.stencilWrite = t.stencilWrite), void 0 !== t.stencilWriteMask && (i.stencilWriteMask = t.stencilWriteMask), void 0 !== t.stencilFunc && (i.stencilFunc = t.stencilFunc), void 0 !== t.stencilRef && (i.stencilRef = t.stencilRef), void 0 !== t.stencilFuncMask && (i.stencilFuncMask = t.stencilFuncMask), void 0 !== t.stencilFail && (i.stencilFail = t.stencilFail), void 0 !== t.stencilZFail && (i.stencilZFail = t.stencilZFail), void 0 !== t.stencilZPass && (i.stencilZPass = t.stencilZPass), void 0 !== t.wireframe && (i.wireframe = t.wireframe), void 0 !== t.wireframeLinewidth && (i.wireframeLinewidth = t.wireframeLinewidth), void 0 !== t.wireframeLinecap && (i.wireframeLinecap = t.wireframeLinecap), void 0 !== t.wireframeLinejoin && (i.wireframeLinejoin = t.wireframeLinejoin), void 0 !== t.rotation && (i.rotation = t.rotation), 1 !== t.linewidth && (i.linewidth = t.linewidth), void 0 !== t.dashSize && (i.dashSize = t.dashSize), void 0 !== t.gapSize && (i.gapSize = t.gapSize), void 0 !== t.scale && (i.scale = t.scale), void 0 !== t.polygonOffset && (i.polygonOffset = t.polygonOffset), void 0 !== t.polygonOffsetFactor && (i.polygonOffsetFactor = t.polygonOffsetFactor), void 0 !== t.polygonOffsetUnits && (i.polygonOffsetUnits = t.polygonOffsetUnits), void 0 !== t.skinning && (i.skinning = t.skinning), void 0 !== t.morphTargets && (i.morphTargets = t.morphTargets), void 0 !== t.morphNormals && (i.morphNormals = t.morphNormals), void 0 !== t.dithering && (i.dithering = t.dithering), void 0 !== t.visible && (i.visible = t.visible), void 0 !== t.toneMapped && (i.toneMapped = t.toneMapped), void 0 !== t.userData && (i.userData = t.userData), void 0 !== t.uniforms)
                    for (var r in t.uniforms) {
                        var o = t.uniforms[r];
                        switch (i.uniforms[r] = {}, o.type) {
                            case "t":
                                i.uniforms[r].value = n(o.value);
                                break;
                            case "c":
                                i.uniforms[r].value = (new $n).setHex(o.value);
                                break;
                            case "v2":
                                i.uniforms[r].value = (new Ae).fromArray(o.value);
                                break;
                            case "v3":
                                i.uniforms[r].value = (new Ce).fromArray(o.value);
                                break;
                            case "v4":
                                i.uniforms[r].value = (new Fe).fromArray(o.value);
                                break;
                            case "m3":
                                i.uniforms[r].value = (new De).fromArray(o.value);
                            case "m4":
                                i.uniforms[r].value = (new Ye).fromArray(o.value);
                                break;
                            default:
                                i.uniforms[r].value = o.value
                        }
                    }
                if (void 0 !== t.defines && (i.defines = t.defines), void 0 !== t.vertexShader && (i.vertexShader = t.vertexShader), void 0 !== t.fragmentShader && (i.fragmentShader = t.fragmentShader), void 0 !== t.extensions)
                    for (var a in t.extensions) i.extensions[a] = t.extensions[a];
                if (void 0 !== t.shading && (i.flatShading = 1 === t.shading), void 0 !== t.size && (i.size = t.size), void 0 !== t.sizeAttenuation && (i.sizeAttenuation = t.sizeAttenuation), void 0 !== t.map && (i.map = n(t.map)), void 0 !== t.matcap && (i.matcap = n(t.matcap)), void 0 !== t.alphaMap && (i.alphaMap = n(t.alphaMap), i.transparent = !0), void 0 !== t.bumpMap && (i.bumpMap = n(t.bumpMap)), void 0 !== t.bumpScale && (i.bumpScale = t.bumpScale), void 0 !== t.normalMap && (i.normalMap = n(t.normalMap)), void 0 !== t.normalMapType && (i.normalMapType = t.normalMapType), void 0 !== t.normalScale) {
                    var s = t.normalScale;
                    !1 === Array.isArray(s) && (s = [s, s]), i.normalScale = (new Ae).fromArray(s)
                }
                return void 0 !== t.displacementMap && (i.displacementMap = n(t.displacementMap)), void 0 !== t.displacementScale && (i.displacementScale = t.displacementScale), void 0 !== t.displacementBias && (i.displacementBias = t.displacementBias), void 0 !== t.roughnessMap && (i.roughnessMap = n(t.roughnessMap)), void 0 !== t.metalnessMap && (i.metalnessMap = n(t.metalnessMap)), void 0 !== t.emissiveMap && (i.emissiveMap = n(t.emissiveMap)), void 0 !== t.emissiveIntensity && (i.emissiveIntensity = t.emissiveIntensity), void 0 !== t.specularMap && (i.specularMap = n(t.specularMap)), void 0 !== t.envMap && (i.envMap = n(t.envMap)), void 0 !== t.envMapIntensity && (i.envMapIntensity = t.envMapIntensity), void 0 !== t.reflectivity && (i.reflectivity = t.reflectivity), void 0 !== t.refractionRatio && (i.refractionRatio = t.refractionRatio), void 0 !== t.lightMap && (i.lightMap = n(t.lightMap)), void 0 !== t.lightMapIntensity && (i.lightMapIntensity = t.lightMapIntensity), void 0 !== t.aoMap && (i.aoMap = n(t.aoMap)), void 0 !== t.aoMapIntensity && (i.aoMapIntensity = t.aoMapIntensity), void 0 !== t.gradientMap && (i.gradientMap = n(t.gradientMap)), void 0 !== t.clearcoatNormalMap && (i.clearcoatNormalMap = n(t.clearcoatNormalMap)), void 0 !== t.clearcoatNormalScale && (i.clearcoatNormalScale = (new Ae).fromArray(t.clearcoatNormalScale)), i
            },
            setTextures: function(t) {
                return this.textures = t, this
            }
        });
        var jl = {
            decodeText: function(t) {
                if ("undefined" != typeof TextDecoder) return (new TextDecoder).decode(t);
                for (var e = "", n = 0, i = t.length; n < i; n++) e += String.fromCharCode(t[n]);
                try {
                    return decodeURIComponent(escape(e))
                } catch (t) {
                    return e
                }
            },
            extractUrlBase: function(t) {
                var e = t.lastIndexOf("/");
                return -1 === e ? "./" : t.substr(0, e + 1)
            }
        };

        function Vl() {
            Si.call(this), this.type = "InstancedBufferGeometry", this.maxInstancedCount = void 0
        }

        function Wl(t, e, n, i) {
            "number" == typeof n && (i = n, n = !1, console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")), si.call(this, t, e, n), this.meshPerAttribute = i || 1
        }

        function Xl(t) {
            Qc.call(this, t)
        }
        Vl.prototype = Object.assign(Object.create(Si.prototype), {
            constructor: Vl,
            isInstancedBufferGeometry: !0,
            copy: function(t) {
                return Si.prototype.copy.call(this, t), this.maxInstancedCount = t.maxInstancedCount, this
            },
            clone: function() {
                return (new this.constructor).copy(this)
            },
            toJSON: function() {
                var t = Si.prototype.toJSON.call(this);
                return t.maxInstancedCount = this.maxInstancedCount, t.isInstancedBufferGeometry = !0, t
            }
        }), Wl.prototype = Object.assign(Object.create(si.prototype), {
            constructor: Wl,
            isInstancedBufferAttribute: !0,
            copy: function(t) {
                return si.prototype.copy.call(this, t), this.meshPerAttribute = t.meshPerAttribute, this
            },
            toJSON: function() {
                var t = si.prototype.toJSON.call(this);
                return t.meshPerAttribute = this.meshPerAttribute, t.isInstancedBufferAttribute = !0, t
            }
        }), Xl.prototype = Object.assign(Object.create(Qc.prototype), {
            constructor: Xl,
            load: function(t, e, n, i) {
                var r = this,
                    o = new tl(r.manager);
                o.setPath(r.path), o.load(t, function(t) {
                    e(r.parse(JSON.parse(t)))
                }, n, i)
            },
            parse: function(t) {
                var e = t.isInstancedBufferGeometry ? new Vl : new Si,
                    n = t.data.index;
                if (void 0 !== n) {
                    var i = new ql[n.type](n.array);
                    e.setIndex(new si(i, 1))
                }
                var r = t.data.attributes;
                for (var o in r) {
                    var a = r[o],
                        i = new ql[a.type](a.array),
                        s = a.isInstancedBufferAttribute ? Wl : si,
                        c = new s(i, a.itemSize, a.normalized);
                    void 0 !== a.name && (c.name = a.name), e.addAttribute(o, c)
                }
                var l = t.data.morphAttributes;
                if (l)
                    for (var o in l) {
                        for (var h = l[o], u = [], p = 0, d = h.length; p < d; p++) {
                            var a = h[p],
                                i = new ql[a.type](a.array),
                                c = new si(i, a.itemSize, a.normalized);
                            void 0 !== a.name && (c.name = a.name), u.push(c)
                        }
                        e.morphAttributes[o] = u
                    }
                var f = t.data.groups || t.data.drawcalls || t.data.offsets;
                if (void 0 !== f)
                    for (var p = 0, m = f.length; p !== m; ++p) {
                        var v = f[p];
                        e.addGroup(v.start, v.count, v.materialIndex)
                    }
                var g = t.data.boundingSphere;
                if (void 0 !== g) {
                    var y = new Ce;
                    void 0 !== g.center && y.fromArray(g.center), e.boundingSphere = new Rn(y, g.radius)
                }
                return t.name && (e.name = t.name), t.userData && (e.userData = t.userData), e
            }
        });
        var ql = {
            Int8Array: Int8Array,
            Uint8Array: Uint8Array,
            Uint8ClampedArray: "undefined" != typeof Uint8ClampedArray ? Uint8ClampedArray : Uint8Array,
            Int16Array: Int16Array,
            Uint16Array: Uint16Array,
            Int32Array: Int32Array,
            Uint32Array: Uint32Array,
            Float32Array: Float32Array,
            Float64Array: Float64Array
        };

        function Yl(t) {
            Qc.call(this, t)
        }
        Yl.prototype = Object.assign(Object.create(Qc.prototype), {
            constructor: Yl,
            load: function(t, e, n, i) {
                var r = this,
                    o = "" === this.path ? jl.extractUrlBase(t) : this.path;
                this.resourcePath = this.resourcePath || o;
                var a = new tl(r.manager);
                a.setPath(this.path), a.load(t, function(n) {
                    var o = null;
                    try {
                        o = JSON.parse(n)
                    } catch (e) {
                        return void 0 !== i && i(e), void console.error("THREE:ObjectLoader: Can't parse " + t + ".", e.message)
                    }
                    var a = o.metadata;
                    void 0 !== a && void 0 !== a.type && "geometry" !== a.type.toLowerCase() ? r.parse(o, e) : console.error("THREE.ObjectLoader: Can't load " + t)
                }, n, i)
            },
            parse: function(t, e) {
                var n = this.parseShape(t.shapes),
                    i = this.parseGeometries(t.geometries, n),
                    r = this.parseImages(t.images, function() {
                        void 0 !== e && e(s)
                    }),
                    o = this.parseTextures(t.textures, r),
                    a = this.parseMaterials(t.materials, o),
                    s = this.parseObject(t.object, i, a);
                return t.animations && (s.animations = this.parseAnimations(t.animations)), void 0 !== t.images && 0 !== t.images.length || void 0 !== e && e(s), s
            },
            parseShape: function(t) {
                var e = {};
                if (void 0 !== t)
                    for (var n = 0, i = t.length; n < i; n++) {
                        var r = (new Ll).fromJSON(t[n]);
                        e[r.uuid] = r
                    }
                return e
            },
            parseGeometries: function(t, e) {
                var n = {};
                if (void 0 !== t)
                    for (var i = new Xl, r = 0, o = t.length; r < o; r++) {
                        var a, s = t[r];
                        switch (s.type) {
                            case "PlaneGeometry":
                            case "PlaneBufferGeometry":
                                a = new wc[s.type](s.width, s.height, s.widthSegments, s.heightSegments);
                                break;
                            case "BoxGeometry":
                            case "BoxBufferGeometry":
                            case "CubeGeometry":
                                a = new wc[s.type](s.width, s.height, s.depth, s.widthSegments, s.heightSegments, s.depthSegments);
                                break;
                            case "CircleGeometry":
                            case "CircleBufferGeometry":
                                a = new wc[s.type](s.radius, s.segments, s.thetaStart, s.thetaLength);
                                break;
                            case "CylinderGeometry":
                            case "CylinderBufferGeometry":
                                a = new wc[s.type](s.radiusTop, s.radiusBottom, s.height, s.radialSegments, s.heightSegments, s.openEnded, s.thetaStart, s.thetaLength);
                                break;
                            case "ConeGeometry":
                            case "ConeBufferGeometry":
                                a = new wc[s.type](s.radius, s.height, s.radialSegments, s.heightSegments, s.openEnded, s.thetaStart, s.thetaLength);
                                break;
                            case "SphereGeometry":
                            case "SphereBufferGeometry":
                                a = new wc[s.type](s.radius, s.widthSegments, s.heightSegments, s.phiStart, s.phiLength, s.thetaStart, s.thetaLength);
                                break;
                            case "DodecahedronGeometry":
                            case "DodecahedronBufferGeometry":
                            case "IcosahedronGeometry":
                            case "IcosahedronBufferGeometry":
                            case "OctahedronGeometry":
                            case "OctahedronBufferGeometry":
                            case "TetrahedronGeometry":
                            case "TetrahedronBufferGeometry":
                                a = new wc[s.type](s.radius, s.detail);
                                break;
                            case "RingGeometry":
                            case "RingBufferGeometry":
                                a = new wc[s.type](s.innerRadius, s.outerRadius, s.thetaSegments, s.phiSegments, s.thetaStart, s.thetaLength);
                                break;
                            case "TorusGeometry":
                            case "TorusBufferGeometry":
                                a = new wc[s.type](s.radius, s.tube, s.radialSegments, s.tubularSegments, s.arc);
                                break;
                            case "TorusKnotGeometry":
                            case "TorusKnotBufferGeometry":
                                a = new wc[s.type](s.radius, s.tube, s.tubularSegments, s.radialSegments, s.p, s.q);
                                break;
                            case "TubeGeometry":
                            case "TubeBufferGeometry":
                                a = new wc[s.type]((new Sl[s.path.type]).fromJSON(s.path), s.tubularSegments, s.radius, s.radialSegments, s.closed);
                                break;
                            case "LatheGeometry":
                            case "LatheBufferGeometry":
                                a = new wc[s.type](s.points, s.segments, s.phiStart, s.phiLength);
                                break;
                            case "PolyhedronGeometry":
                            case "PolyhedronBufferGeometry":
                                a = new wc[s.type](s.vertices, s.indices, s.radius, s.details);
                                break;
                            case "ShapeGeometry":
                            case "ShapeBufferGeometry":
                                for (var c = [], l = 0, h = s.shapes.length; l < h; l++) {
                                    var u = e[s.shapes[l]];
                                    c.push(u)
                                }
                                a = new wc[s.type](c, s.curveSegments);
                                break;
                            case "ExtrudeGeometry":
                            case "ExtrudeBufferGeometry":
                                for (var c = [], l = 0, h = s.shapes.length; l < h; l++) {
                                    var u = e[s.shapes[l]];
                                    c.push(u)
                                }
                                var p = s.options.extrudePath;
                                void 0 !== p && (s.options.extrudePath = (new Sl[p.type]).fromJSON(p)), a = new wc[s.type](c, s.options);
                                break;
                            case "BufferGeometry":
                            case "InstancedBufferGeometry":
                                a = i.parse(s);
                                break;
                            case "Geometry":
                                if ("THREE" in window && "LegacyJSONLoader" in THREE) {
                                    var d = new THREE.LegacyJSONLoader;
                                    a = d.parse(s, this.resourcePath).geometry
                                } else console.error('THREE.ObjectLoader: You have to import LegacyJSONLoader in order load geometry data of type "Geometry".');
                                break;
                            default:
                                console.warn('THREE.ObjectLoader: Unsupported geometry type "' + s.type + '"');
                                continue
                        }
                        a.uuid = s.uuid, void 0 !== s.name && (a.name = s.name), !0 === a.isBufferGeometry && void 0 !== s.userData && (a.userData = s.userData), n[s.uuid] = a
                    }
                return n
            },
            parseMaterials: function(t, e) {
                var n = {},
                    i = {};
                if (void 0 !== t) {
                    var r = new Gl;
                    r.setTextures(e);
                    for (var o = 0, a = t.length; o < a; o++) {
                        var s = t[o];
                        if ("MultiMaterial" === s.type) {
                            for (var c = [], l = 0; l < s.materials.length; l++) {
                                var h = s.materials[l];
                                void 0 === n[h.uuid] && (n[h.uuid] = r.parse(h)), c.push(n[h.uuid])
                            }
                            i[s.uuid] = c
                        } else void 0 === n[s.uuid] && (n[s.uuid] = r.parse(s)), i[s.uuid] = n[s.uuid]
                    }
                }
                return i
            },
            parseAnimations: function(t) {
                for (var e = [], n = 0; n < t.length; n++) {
                    var i = t[n],
                        r = qc.parse(i);
                    void 0 !== i.uuid && (r.uuid = i.uuid), e.push(r)
                }
                return e
            },
            parseImages: function(t, e) {
                var n = this,
                    i = {};

                function r(t) {
                    return n.manager.itemStart(t), a.load(t, function() {
                        n.manager.itemEnd(t)
                    }, void 0, function() {
                        n.manager.itemError(t), n.manager.itemEnd(t)
                    })
                }
                if (void 0 !== t && t.length > 0) {
                    var o = new Jc(e),
                        a = new rl(o);
                    a.setCrossOrigin(this.crossOrigin);
                    for (var s = 0, c = t.length; s < c; s++) {
                        var l = t[s],
                            h = l.url;
                        if (Array.isArray(h)) {
                            i[l.uuid] = [];
                            for (var u = 0, p = h.length; u < p; u++) {
                                var d = h[u],
                                    f = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(d) ? d : n.resourcePath + d;
                                i[l.uuid].push(r(f))
                            }
                        } else {
                            var f = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(l.url) ? l.url : n.resourcePath + l.url;
                            i[l.uuid] = r(f)
                        }
                    }
                }
                return i
            },
            parseTextures: function(t, e) {
                function n(t, e) {
                    return "number" == typeof t ? t : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", t), e[t])
                }
                var i = {};
                if (void 0 !== t)
                    for (var r = 0, o = t.length; r < o; r++) {
                        var a, s = t[r];
                        void 0 === s.image && console.warn('THREE.ObjectLoader: No "image" specified for', s.uuid), void 0 === e[s.image] && console.warn("THREE.ObjectLoader: Undefined image", s.image), (a = Array.isArray(e[s.image]) ? new Pr(e[s.image]) : new He(e[s.image])).needsUpdate = !0, a.uuid = s.uuid, void 0 !== s.name && (a.name = s.name), void 0 !== s.mapping && (a.mapping = n(s.mapping, Jl)), void 0 !== s.offset && a.offset.fromArray(s.offset), void 0 !== s.repeat && a.repeat.fromArray(s.repeat), void 0 !== s.center && a.center.fromArray(s.center), void 0 !== s.rotation && (a.rotation = s.rotation), void 0 !== s.wrap && (a.wrapS = n(s.wrap[0], Kl), a.wrapT = n(s.wrap[1], Kl)), void 0 !== s.format && (a.format = s.format), void 0 !== s.type && (a.type = s.type), void 0 !== s.encoding && (a.encoding = s.encoding), void 0 !== s.minFilter && (a.minFilter = n(s.minFilter, Ql)), void 0 !== s.magFilter && (a.magFilter = n(s.magFilter, Ql)), void 0 !== s.anisotropy && (a.anisotropy = s.anisotropy), void 0 !== s.flipY && (a.flipY = s.flipY), void 0 !== s.premultiplyAlpha && (a.premultiplyAlpha = s.premultiplyAlpha), void 0 !== s.unpackAlignment && (a.unpackAlignment = s.unpackAlignment), i[s.uuid] = a
                    }
                return i
            },
            parseObject: function(t, e, n) {
                var i;

                function r(t) {
                    return void 0 === e[t] && console.warn("THREE.ObjectLoader: Undefined geometry", t), e[t]
                }

                function o(t) {
                    if (void 0 !== t) {
                        if (Array.isArray(t)) {
                            for (var e = [], i = 0, r = t.length; i < r; i++) {
                                var o = t[i];
                                void 0 === n[o] && console.warn("THREE.ObjectLoader: Undefined material", o), e.push(n[o])
                            }
                            return e
                        }
                        return void 0 === n[t] && console.warn("THREE.ObjectLoader: Undefined material", t), n[t]
                    }
                }
                switch (t.type) {
                    case "Scene":
                        i = new fn, void 0 !== t.background && Number.isInteger(t.background) && (i.background = new $n(t.background)), void 0 !== t.fog && ("Fog" === t.fog.type ? i.fog = new ma(t.fog.color, t.fog.near, t.fog.far) : "FogExp2" === t.fog.type && (i.fog = new fa(t.fog.color, t.fog.density)));
                        break;
                    case "PerspectiveCamera":
                        i = new sr(t.fov, t.aspect, t.near, t.far), void 0 !== t.focus && (i.focus = t.focus), void 0 !== t.zoom && (i.zoom = t.zoom), void 0 !== t.filmGauge && (i.filmGauge = t.filmGauge), void 0 !== t.filmOffset && (i.filmOffset = t.filmOffset), void 0 !== t.view && (i.view = Object.assign({}, t.view));
                        break;
                    case "OrthographicCamera":
                        i = new Hl(t.left, t.right, t.top, t.bottom, t.near, t.far), void 0 !== t.zoom && (i.zoom = t.zoom), void 0 !== t.view && (i.view = Object.assign({}, t.view));
                        break;
                    case "AmbientLight":
                        i = new Ul(t.color, t.intensity);
                        break;
                    case "DirectionalLight":
                        i = new kl(t.color, t.intensity);
                        break;
                    case "PointLight":
                        i = new Bl(t.color, t.intensity, t.distance, t.decay);
                        break;
                    case "RectAreaLight":
                        i = new zl(t.color, t.intensity, t.width, t.height);
                        break;
                    case "SpotLight":
                        i = new Dl(t.color, t.intensity, t.distance, t.angle, t.penumbra, t.decay);
                        break;
                    case "HemisphereLight":
                        i = new Cl(t.color, t.groundColor, t.intensity);
                        break;
                    case "SkinnedMesh":
                        console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.");
                    case "Mesh":
                        var a = r(t.geometry),
                            s = o(t.material);
                        i = a.bones && a.bones.length > 0 ? new Ba(a, s) : new Vi(a, s), void 0 !== t.drawMode && i.setDrawMode(t.drawMode);
                        break;
                    case "LOD":
                        i = new Na;
                        break;
                    case "Line":
                        i = new Ya(r(t.geometry), o(t.material), t.mode);
                        break;
                    case "LineLoop":
                        i = new Qa(r(t.geometry), o(t.material));
                        break;
                    case "LineSegments":
                        i = new Ka(r(t.geometry), o(t.material));
                        break;
                    case "PointCloud":
                    case "Points":
                        i = new rs(r(t.geometry), o(t.material));
                        break;
                    case "Sprite":
                        i = new Ca(o(t.material));
                        break;
                    case "Group":
                        i = new oa;
                        break;
                    default:
                        i = new dn
                }
                if (i.uuid = t.uuid, void 0 !== t.name && (i.name = t.name), void 0 !== t.matrix ? (i.matrix.fromArray(t.matrix), void 0 !== t.matrixAutoUpdate && (i.matrixAutoUpdate = t.matrixAutoUpdate), i.matrixAutoUpdate && i.matrix.decompose(i.position, i.quaternion, i.scale)) : (void 0 !== t.position && i.position.fromArray(t.position), void 0 !== t.rotation && i.rotation.fromArray(t.rotation), void 0 !== t.quaternion && i.quaternion.fromArray(t.quaternion), void 0 !== t.scale && i.scale.fromArray(t.scale)), void 0 !== t.castShadow && (i.castShadow = t.castShadow), void 0 !== t.receiveShadow && (i.receiveShadow = t.receiveShadow), t.shadow && (void 0 !== t.shadow.bias && (i.shadow.bias = t.shadow.bias), void 0 !== t.shadow.radius && (i.shadow.radius = t.shadow.radius), void 0 !== t.shadow.mapSize && i.shadow.mapSize.fromArray(t.shadow.mapSize), void 0 !== t.shadow.camera && (i.shadow.camera = this.parseObject(t.shadow.camera))), void 0 !== t.visible && (i.visible = t.visible), void 0 !== t.frustumCulled && (i.frustumCulled = t.frustumCulled), void 0 !== t.renderOrder && (i.renderOrder = t.renderOrder), void 0 !== t.userData && (i.userData = t.userData), void 0 !== t.layers && (i.layers.mask = t.layers), void 0 !== t.children)
                    for (var c = t.children, l = 0; l < c.length; l++) i.add(this.parseObject(c[l], e, n));
                if ("LOD" === t.type)
                    for (var h = t.levels, u = 0; u < h.length; u++) {
                        var p = h[u],
                            d = i.getObjectByProperty("uuid", p.object);
                        void 0 !== d && i.addLevel(d, p.distance)
                    }
                return i
            }
        });
        var Zl, Jl = {
                UVMapping: 300,
                CubeReflectionMapping: Q,
                CubeRefractionMapping: $,
                EquirectangularReflectionMapping: tt,
                EquirectangularRefractionMapping: et,
                SphericalReflectionMapping: nt,
                CubeUVReflectionMapping: it,
                CubeUVRefractionMapping: rt
            },
            Kl = {
                RepeatWrapping: ot,
                ClampToEdgeWrapping: at,
                MirroredRepeatWrapping: st
            },
            Ql = {
                NearestFilter: ct,
                NearestMipmapNearestFilter: lt,
                NearestMipmapLinearFilter: ht,
                LinearFilter: ut,
                LinearMipmapNearestFilter: pt,
                LinearMipmapLinearFilter: dt
            };

        function $l(t) {
            "undefined" == typeof createImageBitmap && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), "undefined" == typeof fetch && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), Qc.call(this, t), this.options = void 0
        }

        function th() {
            this.type = "ShapePath", this.color = new $n, this.subPaths = [], this.currentPath = null
        }

        function eh(t) {
            this.type = "Font", this.data = t
        }

        function nh(t, e, n, i, r) {
            var o = r.glyphs[t] || r.glyphs["?"];
            if (o) {
                var a, s, c, l, h, u, p, d, f = new th;
                if (o.o)
                    for (var m = o._cachedOutline || (o._cachedOutline = o.o.split(" ")), v = 0, g = m.length; v < g;) {
                        var y = m[v++];
                        switch (y) {
                            case "m":
                                a = m[v++] * e + n, s = m[v++] * e + i, f.moveTo(a, s);
                                break;
                            case "l":
                                a = m[v++] * e + n, s = m[v++] * e + i, f.lineTo(a, s);
                                break;
                            case "q":
                                c = m[v++] * e + n, l = m[v++] * e + i, h = m[v++] * e + n, u = m[v++] * e + i, f.quadraticCurveTo(h, u, c, l);
                                break;
                            case "b":
                                c = m[v++] * e + n, l = m[v++] * e + i, h = m[v++] * e + n, u = m[v++] * e + i, p = m[v++] * e + n, d = m[v++] * e + i, f.bezierCurveTo(h, u, p, d, c, l)
                        }
                    }
                return {
                    offsetX: o.ha * e,
                    path: f
                }
            }
            console.error('THREE.Font: character "' + t + '" does not exists in font family ' + r.familyName + ".")
        }

        function ih(t) {
            Qc.call(this, t)
        }
        $l.prototype = Object.assign(Object.create(Qc.prototype), {
            constructor: $l,
            setOptions: function(t) {
                return this.options = t, this
            },
            load: function(t, e, n, i) {
                void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
                var r = this,
                    o = Zc.get(t);
                if (void 0 !== o) return r.manager.itemStart(t), setTimeout(function() {
                    e && e(o), r.manager.itemEnd(t)
                }, 0), o;
                fetch(t).then(function(t) {
                    return t.blob()
                }).then(function(t) {
                    return void 0 === r.options ? createImageBitmap(t) : createImageBitmap(t, r.options)
                }).then(function(n) {
                    Zc.add(t, n), e && e(n), r.manager.itemEnd(t)
                }).catch(function(e) {
                    i && i(e), r.manager.itemError(t), r.manager.itemEnd(t)
                }), r.manager.itemStart(t)
            }
        }), Object.assign(th.prototype, {
            moveTo: function(t, e) {
                this.currentPath = new Pl, this.subPaths.push(this.currentPath), this.currentPath.moveTo(t, e)
            },
            lineTo: function(t, e) {
                this.currentPath.lineTo(t, e)
            },
            quadraticCurveTo: function(t, e, n, i) {
                this.currentPath.quadraticCurveTo(t, e, n, i)
            },
            bezierCurveTo: function(t, e, n, i, r, o) {
                this.currentPath.bezierCurveTo(t, e, n, i, r, o)
            },
            splineThru: function(t) {
                this.currentPath.splineThru(t)
            },
            toShapes: function(t, e) {
                function n(t) {
                    for (var e = [], n = 0, i = t.length; n < i; n++) {
                        var r = t[n],
                            o = new Ll;
                        o.curves = r.curves, e.push(o)
                    }
                    return e
                }

                function i(t, e) {
                    for (var n = e.length, i = !1, r = n - 1, o = 0; o < n; r = o++) {
                        var a = e[r],
                            s = e[o],
                            c = s.x - a.x,
                            l = s.y - a.y;
                        if (Math.abs(l) > Number.EPSILON) {
                            if (l < 0 && (a = e[o], c = -c, s = e[r], l = -l), t.y < a.y || t.y > s.y) continue;
                            if (t.y === a.y) {
                                if (t.x === a.x) return !0
                            } else {
                                var h = l * (t.x - a.x) - c * (t.y - a.y);
                                if (0 === h) return !0;
                                if (h < 0) continue;
                                i = !i
                            }
                        } else {
                            if (t.y !== a.y) continue;
                            if (s.x <= t.x && t.x <= a.x || a.x <= t.x && t.x <= s.x) return !0
                        }
                    }
                    return i
                }
                var r = Ks.isClockWise,
                    o = this.subPaths;
                if (0 === o.length) return [];
                if (!0 === e) return n(o);
                var a, s, c, l = [];
                if (1 === o.length) return s = o[0], (c = new Ll).curves = s.curves, l.push(c), l;
                var h = !r(o[0].getPoints());
                h = t ? !h : h;
                var u, p, d = [],
                    f = [],
                    m = [],
                    v = 0;
                f[v] = void 0, m[v] = [];
                for (var g = 0, y = o.length; g < y; g++) s = o[g], u = s.getPoints(), a = r(u), (a = t ? !a : a) ? (!h && f[v] && v++, f[v] = {
                    s: new Ll,
                    p: u
                }, f[v].s.curves = s.curves, h && v++, m[v] = []) : m[v].push({
                    h: s,
                    p: u[0]
                });
                if (!f[0]) return n(o);
                if (f.length > 1) {
                    for (var _ = !1, x = [], b = 0, w = f.length; b < w; b++) d[b] = [];
                    for (var b = 0, w = f.length; b < w; b++)
                        for (var M = m[b], T = 0; T < M.length; T++) {
                            for (var E = M[T], S = !0, A = 0; A < f.length; A++) i(E.p, f[A].p) && (b !== A && x.push({
                                froms: b,
                                tos: A,
                                hole: T
                            }), S ? (S = !1, d[A].push(E)) : _ = !0);
                            S && d[b].push(E)
                        }
                    x.length > 0 && (_ || (m = d))
                }
                for (var g = 0, P = f.length; g < P; g++) {
                    c = f[g].s, l.push(c);
                    for (var L = 0, R = (p = m[g]).length; L < R; L++) c.holes.push(p[L].h)
                }
                return l
            }
        }), Object.assign(eh.prototype, {
            isFont: !0,
            generateShapes: function(t, e) {
                void 0 === e && (e = 100);
                for (var n = [], i = function(t, e, n) {
                        for (var i = Array.from ? Array.from(t) : String(t).split(""), r = e / n.resolution, o = (n.boundingBox.yMax - n.boundingBox.yMin + n.underlineThickness) * r, a = [], s = 0, c = 0, l = 0; l < i.length; l++) {
                            var h = i[l];
                            if ("\n" === h) s = 0, c -= o;
                            else {
                                var u = nh(h, r, s, c, n);
                                s += u.offsetX, a.push(u.path)
                            }
                        }
                        return a
                    }(t, e, this.data), r = 0, o = i.length; r < o; r++) Array.prototype.push.apply(n, i[r].toShapes());
                return n
            }
        }), ih.prototype = Object.assign(Object.create(Qc.prototype), {
            constructor: ih,
            load: function(t, e, n, i) {
                var r = this,
                    o = new tl(this.manager);
                o.setPath(this.path), o.load(t, function(t) {
                    var n;
                    try {
                        n = JSON.parse(t)
                    } catch (e) {
                        console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."), n = JSON.parse(t.substring(65, t.length - 2))
                    }
                    var i = r.parse(n);
                    e && e(i)
                }, n, i)
            },
            parse: function(t) {
                return new eh(t)
            }
        });
        var rh = {
            getContext: function() {
                return void 0 === Zl && (Zl = new(window.AudioContext || window.webkitAudioContext)), Zl
            },
            setContext: function(t) {
                Zl = t
            }
        };

        function oh(t) {
            Qc.call(this, t)
        }

        function ah() {
            this.coefficients = [];
            for (var t = 0; t < 9; t++) this.coefficients.push(new Ce)
        }

        function sh(t, e) {
            Rl.call(this, void 0, e), this.sh = void 0 !== t ? t : new ah
        }

        function ch(t, e, n) {
            sh.call(this, void 0, n);
            var i = (new $n).set(t),
                r = (new $n).set(e),
                o = new Ce(i.r, i.g, i.b),
                a = new Ce(r.r, r.g, r.b),
                s = Math.sqrt(Math.PI),
                c = s * Math.sqrt(.75);
            this.sh.coefficients[0].copy(o).add(a).multiplyScalar(s), this.sh.coefficients[1].copy(o).sub(a).multiplyScalar(c)
        }

        function lh(t, e) {
            sh.call(this, void 0, e);
            var n = (new $n).set(t);
            this.sh.coefficients[0].set(n.r, n.g, n.b).multiplyScalar(2 * Math.sqrt(Math.PI))
        }
        oh.prototype = Object.assign(Object.create(Qc.prototype), {
            constructor: oh,
            load: function(t, e, n, i) {
                var r = new tl(this.manager);
                r.setResponseType("arraybuffer"), r.setPath(this.path), r.load(t, function(t) {
                    var n = t.slice(0),
                        i = rh.getContext();
                    i.decodeAudioData(n, function(t) {
                        e(t)
                    })
                }, n, i)
            }
        }), Object.assign(ah.prototype, {
            isSphericalHarmonics3: !0,
            set: function(t) {
                for (var e = 0; e < 9; e++) this.coefficients[e].copy(t[e]);
                return this
            },
            zero: function() {
                for (var t = 0; t < 9; t++) this.coefficients[t].set(0, 0, 0);
                return this
            },
            getAt: function(t, e) {
                var n = t.x,
                    i = t.y,
                    r = t.z,
                    o = this.coefficients;
                return e.copy(o[0]).multiplyScalar(.282095), e.addScale(o[1], .488603 * i), e.addScale(o[2], .488603 * r), e.addScale(o[3], .488603 * n), e.addScale(o[4], n * i * 1.092548), e.addScale(o[5], i * r * 1.092548), e.addScale(o[6], .315392 * (3 * r * r - 1)), e.addScale(o[7], n * r * 1.092548), e.addScale(o[8], .546274 * (n * n - i * i)), e
            },
            getIrradianceAt: function(t, e) {
                var n = t.x,
                    i = t.y,
                    r = t.z,
                    o = this.coefficients;
                return e.copy(o[0]).multiplyScalar(.886227), e.addScale(o[1], 1.023328 * i), e.addScale(o[2], 1.023328 * r), e.addScale(o[3], 1.023328 * n), e.addScale(o[4], .858086 * n * i), e.addScale(o[5], .858086 * i * r), e.addScale(o[6], .743125 * r * r - .247708), e.addScale(o[7], .858086 * n * r), e.addScale(o[8], .429043 * (n * n - i * i)), e
            },
            add: function(t) {
                for (var e = 0; e < 9; e++) this.coefficients[e].add(t.coefficients[e]);
                return this
            },
            scale: function(t) {
                for (var e = 0; e < 9; e++) this.coefficients[e].multiplyScalar(t);
                return this
            },
            lerp: function(t, e) {
                for (var n = 0; n < 9; n++) this.coefficients[n].lerp(t.coefficients[n], e);
                return this
            },
            equals: function(t) {
                for (var e = 0; e < 9; e++)
                    if (!this.coefficients[e].equals(t.coefficients[e])) return !1;
                return !0
            },
            copy: function(t) {
                return this.set(t.coefficients)
            },
            clone: function() {
                return (new this.constructor).copy(this)
            },
            fromArray: function(t, e) {
                void 0 === e && (e = 0);
                for (var n = this.coefficients, i = 0; i < 9; i++) n[i].fromArray(t, e + 3 * i);
                return this
            },
            toArray: function(t, e) {
                void 0 === t && (t = []), void 0 === e && (e = 0);
                for (var n = this.coefficients, i = 0; i < 9; i++) n[i].toArray(t, e + 3 * i);
                return t
            }
        }), Object.assign(ah, {
            getBasisAt: function(t, e) {
                var n = t.x,
                    i = t.y,
                    r = t.z;
                e[0] = .282095, e[1] = .488603 * i, e[2] = .488603 * r, e[3] = .488603 * n, e[4] = 1.092548 * n * i, e[5] = 1.092548 * i * r, e[6] = .315392 * (3 * r * r - 1), e[7] = 1.092548 * n * r, e[8] = .546274 * (n * n - i * i)
            }
        }), sh.prototype = Object.assign(Object.create(Rl.prototype), {
            constructor: sh,
            isLightProbe: !0,
            copy: function(t) {
                return Rl.prototype.copy.call(this, t), this.sh.copy(t.sh), this.intensity = t.intensity, this
            },
            toJSON: function(t) {
                var e = Rl.prototype.toJSON.call(this, t);
                return e
            }
        }), ch.prototype = Object.assign(Object.create(sh.prototype), {
            constructor: ch,
            isHemisphereLightProbe: !0,
            copy: function(t) {
                return sh.prototype.copy.call(this, t), this
            },
            toJSON: function(t) {
                var e = sh.prototype.toJSON.call(this, t);
                return e
            }
        }), lh.prototype = Object.assign(Object.create(sh.prototype), {
            constructor: lh,
            isAmbientLightProbe: !0,
            copy: function(t) {
                return sh.prototype.copy.call(this, t), this
            },
            toJSON: function(t) {
                var e = sh.prototype.toJSON.call(this, t);
                return e
            }
        });
        var hh = new Ye,
            uh = new Ye;

        function ph() {
            this.type = "StereoCamera", this.aspect = 1, this.eyeSep = .064, this.cameraL = new sr, this.cameraL.layers.enable(1), this.cameraL.matrixAutoUpdate = !1, this.cameraR = new sr, this.cameraR.layers.enable(2), this.cameraR.matrixAutoUpdate = !1, this._cache = {
                focus: null,
                fov: null,
                aspect: null,
                near: null,
                far: null,
                zoom: null,
                eyeSep: null
            }
        }

        function dh(t) {
            this.autoStart = void 0 === t || t, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1
        }
        Object.assign(ph.prototype, {
            update: function(t) {
                var e = this._cache,
                    n = e.focus !== t.focus || e.fov !== t.fov || e.aspect !== t.aspect * this.aspect || e.near !== t.near || e.far !== t.far || e.zoom !== t.zoom || e.eyeSep !== this.eyeSep;
                if (n) {
                    e.focus = t.focus, e.fov = t.fov, e.aspect = t.aspect * this.aspect, e.near = t.near, e.far = t.far, e.zoom = t.zoom, e.eyeSep = this.eyeSep;
                    var i, r, o = t.projectionMatrix.clone(),
                        a = e.eyeSep / 2,
                        s = a * e.near / e.focus,
                        c = e.near * Math.tan(Se.DEG2RAD * e.fov * .5) / e.zoom;
                    uh.elements[12] = -a, hh.elements[12] = a, i = -c * e.aspect + s, r = c * e.aspect + s, o.elements[0] = 2 * e.near / (r - i), o.elements[8] = (r + i) / (r - i), this.cameraL.projectionMatrix.copy(o), i = -c * e.aspect - s, r = c * e.aspect - s, o.elements[0] = 2 * e.near / (r - i), o.elements[8] = (r + i) / (r - i), this.cameraR.projectionMatrix.copy(o)
                }
                this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(uh), this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(hh)
            }
        }), Object.assign(dh.prototype, {
            start: function() {
                this.startTime = ("undefined" == typeof performance ? Date : performance).now(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0
            },
            stop: function() {
                this.getElapsedTime(), this.running = !1, this.autoStart = !1
            },
            getElapsedTime: function() {
                return this.getDelta(), this.elapsedTime
            },
            getDelta: function() {
                var t = 0;
                if (this.autoStart && !this.running) return this.start(), 0;
                if (this.running) {
                    var e = ("undefined" == typeof performance ? Date : performance).now();
                    t = (e - this.oldTime) / 1e3, this.oldTime = e, this.elapsedTime += t
                }
                return t
            }
        });
        var fh = new Ce,
            mh = new Pe,
            vh = new Ce,
            gh = new Ce;

        function yh() {
            dn.call(this), this.type = "AudioListener", this.context = rh.getContext(), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.filter = null, this.timeDelta = 0, this._clock = new dh
        }

        function _h(t) {
            dn.call(this), this.type = "Audio", this.listener = t, this.context = t.context, this.gain = this.context.createGain(), this.gain.connect(t.getInput()), this.autoplay = !1, this.buffer = null, this.detune = 0, this.loop = !1, this.startTime = 0, this.offset = 0, this.duration = void 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.sourceType = "empty", this.filters = []
        }
        yh.prototype = Object.assign(Object.create(dn.prototype), {
            constructor: yh,
            getInput: function() {
                return this.gain
            },
            removeFilter: function() {
                return null !== this.filter && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null), this
            },
            getFilter: function() {
                return this.filter
            },
            setFilter: function(t) {
                return null !== this.filter ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination), this.filter = t, this.gain.connect(this.filter), this.filter.connect(this.context.destination), this
            },
            getMasterVolume: function() {
                return this.gain.gain.value
            },
            setMasterVolume: function(t) {
                return this.gain.gain.setTargetAtTime(t, this.context.currentTime, .01), this
            },
            updateMatrixWorld: function(t) {
                dn.prototype.updateMatrixWorld.call(this, t);
                var e = this.context.listener,
                    n = this.up;
                if (this.timeDelta = this._clock.getDelta(), this.matrixWorld.decompose(fh, mh, vh), gh.set(0, 0, -1).applyQuaternion(mh), e.positionX) {
                    var i = this.context.currentTime + this.timeDelta;
                    e.positionX.linearRampToValueAtTime(fh.x, i), e.positionY.linearRampToValueAtTime(fh.y, i), e.positionZ.linearRampToValueAtTime(fh.z, i), e.forwardX.linearRampToValueAtTime(gh.x, i), e.forwardY.linearRampToValueAtTime(gh.y, i), e.forwardZ.linearRampToValueAtTime(gh.z, i), e.upX.linearRampToValueAtTime(n.x, i), e.upY.linearRampToValueAtTime(n.y, i), e.upZ.linearRampToValueAtTime(n.z, i)
                } else e.setPosition(fh.x, fh.y, fh.z), e.setOrientation(gh.x, gh.y, gh.z, n.x, n.y, n.z)
            }
        }), _h.prototype = Object.assign(Object.create(dn.prototype), {
            constructor: _h,
            getOutput: function() {
                return this.gain
            },
            setNodeSource: function(t) {
                return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = t, this.connect(), this
            },
            setMediaElementSource: function(t) {
                return this.hasPlaybackControl = !1, this.sourceType = "mediaNode", this.source = this.context.createMediaElementSource(t), this.connect(), this
            },
            setMediaStreamSource: function(t) {
                return this.hasPlaybackControl = !1, this.sourceType = "mediaStreamNode", this.source = this.context.createMediaStreamSource(t), this.connect(), this
            },
            setBuffer: function(t) {
                return this.buffer = t, this.sourceType = "buffer", this.autoplay && this.play(), this
            },
            play: function() {
                if (!0 !== this.isPlaying) {
                    if (!1 !== this.hasPlaybackControl) {
                        var t = this.context.createBufferSource();
                        return t.buffer = this.buffer, t.loop = this.loop, t.onended = this.onEnded.bind(this), this.startTime = this.context.currentTime, t.start(this.startTime, this.offset, this.duration), this.isPlaying = !0, this.source = t, this.setDetune(this.detune), this.setPlaybackRate(this.playbackRate), this.connect()
                    }
                    console.warn("THREE.Audio: this Audio has no playback control.")
                } else console.warn("THREE.Audio: Audio is already playing.")
            },
            pause: function() {
                if (!1 !== this.hasPlaybackControl) return !0 === this.isPlaying && (this.source.stop(), this.source.onended = null, this.offset += (this.context.currentTime - this.startTime) * this.playbackRate, this.isPlaying = !1), this;
                console.warn("THREE.Audio: this Audio has no playback control.")
            },
            stop: function() {
                if (!1 !== this.hasPlaybackControl) return this.source.stop(), this.source.onended = null, this.offset = 0, this.isPlaying = !1, this;
                console.warn("THREE.Audio: this Audio has no playback control.")
            },
            connect: function() {
                if (this.filters.length > 0) {
                    this.source.connect(this.filters[0]);
                    for (var t = 1, e = this.filters.length; t < e; t++) this.filters[t - 1].connect(this.filters[t]);
                    this.filters[this.filters.length - 1].connect(this.getOutput())
                } else this.source.connect(this.getOutput());
                return this
            },
            disconnect: function() {
                if (this.filters.length > 0) {
                    this.source.disconnect(this.filters[0]);
                    for (var t = 1, e = this.filters.length; t < e; t++) this.filters[t - 1].disconnect(this.filters[t]);
                    this.filters[this.filters.length - 1].disconnect(this.getOutput())
                } else this.source.disconnect(this.getOutput());
                return this
            },
            getFilters: function() {
                return this.filters
            },
            setFilters: function(t) {
                return t || (t = []), !0 === this.isPlaying ? (this.disconnect(), this.filters = t, this.connect()) : this.filters = t, this
            },
            setDetune: function(t) {
                if (this.detune = t, void 0 !== this.source.detune) return !0 === this.isPlaying && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, .01), this
            },
            getDetune: function() {
                return this.detune
            },
            getFilter: function() {
                return this.getFilters()[0]
            },
            setFilter: function(t) {
                return this.setFilters(t ? [t] : [])
            },
            setPlaybackRate: function(t) {
                if (!1 !== this.hasPlaybackControl) return this.playbackRate = t, !0 === this.isPlaying && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, .01), this;
                console.warn("THREE.Audio: this Audio has no playback control.")
            },
            getPlaybackRate: function() {
                return this.playbackRate
            },
            onEnded: function() {
                this.isPlaying = !1
            },
            getLoop: function() {
                return !1 === this.hasPlaybackControl ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.loop
            },
            setLoop: function(t) {
                if (!1 !== this.hasPlaybackControl) return this.loop = t, !0 === this.isPlaying && (this.source.loop = this.loop), this;
                console.warn("THREE.Audio: this Audio has no playback control.")
            },
            getVolume: function() {
                return this.gain.gain.value
            },
            setVolume: function(t) {
                return this.gain.gain.setTargetAtTime(t, this.context.currentTime, .01), this
            }
        });
        var xh = new Ce,
            bh = new Pe,
            wh = new Ce,
            Mh = new Ce;

        function Th(t) {
            _h.call(this, t), this.panner = this.context.createPanner(), this.panner.panningModel = "HRTF", this.panner.connect(this.gain)
        }

        function Eh(t, e) {
            this.analyser = t.context.createAnalyser(), this.analyser.fftSize = void 0 !== e ? e : 2048, this.data = new Uint8Array(this.analyser.frequencyBinCount), t.getOutput().connect(this.analyser)
        }

        function Sh(t, e, n) {
            this.binding = t, this.valueSize = n;
            var i, r = Float64Array;
            switch (e) {
                case "quaternion":
                    i = this._slerp;
                    break;
                case "string":
                case "bool":
                    r = Array, i = this._select;
                    break;
                default:
                    i = this._lerp
            }
            this.buffer = new r(4 * n), this._mixBufferRegion = i, this.cumulativeWeight = 0, this.useCount = 0, this.referenceCount = 0
        }
        Th.prototype = Object.assign(Object.create(_h.prototype), {
            constructor: Th,
            getOutput: function() {
                return this.panner
            },
            getRefDistance: function() {
                return this.panner.refDistance
            },
            setRefDistance: function(t) {
                return this.panner.refDistance = t, this
            },
            getRolloffFactor: function() {
                return this.panner.rolloffFactor
            },
            setRolloffFactor: function(t) {
                return this.panner.rolloffFactor = t, this
            },
            getDistanceModel: function() {
                return this.panner.distanceModel
            },
            setDistanceModel: function(t) {
                return this.panner.distanceModel = t, this
            },
            getMaxDistance: function() {
                return this.panner.maxDistance
            },
            setMaxDistance: function(t) {
                return this.panner.maxDistance = t, this
            },
            setDirectionalCone: function(t, e, n) {
                return this.panner.coneInnerAngle = t, this.panner.coneOuterAngle = e, this.panner.coneOuterGain = n, this
            },
            updateMatrixWorld: function(t) {
                if (dn.prototype.updateMatrixWorld.call(this, t), !0 !== this.hasPlaybackControl || !1 !== this.isPlaying) {
                    this.matrixWorld.decompose(xh, bh, wh), Mh.set(0, 0, 1).applyQuaternion(bh);
                    var e = this.panner;
                    if (e.positionX) {
                        var n = this.context.currentTime + this.listener.timeDelta;
                        e.positionX.linearRampToValueAtTime(xh.x, n), e.positionY.linearRampToValueAtTime(xh.y, n), e.positionZ.linearRampToValueAtTime(xh.z, n), e.orientationX.linearRampToValueAtTime(Mh.x, n), e.orientationY.linearRampToValueAtTime(Mh.y, n), e.orientationZ.linearRampToValueAtTime(Mh.z, n)
                    } else e.setPosition(xh.x, xh.y, xh.z), e.setOrientation(Mh.x, Mh.y, Mh.z)
                }
            }
        }), Object.assign(Eh.prototype, {
            getFrequencyData: function() {
                return this.analyser.getByteFrequencyData(this.data), this.data
            },
            getAverageFrequency: function() {
                for (var t = 0, e = this.getFrequencyData(), n = 0; n < e.length; n++) t += e[n];
                return t / e.length
            }
        }), Object.assign(Sh.prototype, {
            accumulate: function(t, e) {
                var n = this.buffer,
                    i = this.valueSize,
                    r = t * i + i,
                    o = this.cumulativeWeight;
                if (0 === o) {
                    for (var a = 0; a !== i; ++a) n[r + a] = n[a];
                    o = e
                } else {
                    var s = e / (o += e);
                    this._mixBufferRegion(n, r, 0, s, i)
                }
                this.cumulativeWeight = o
            },
            apply: function(t) {
                var e = this.valueSize,
                    n = this.buffer,
                    i = t * e + e,
                    r = this.cumulativeWeight,
                    o = this.binding;
                if (this.cumulativeWeight = 0, r < 1) {
                    var a = 3 * e;
                    this._mixBufferRegion(n, i, a, 1 - r, e)
                }
                for (var s = e, c = e + e; s !== c; ++s)
                    if (n[s] !== n[s + e]) {
                        o.setValue(n, i);
                        break
                    }
            },
            saveOriginalState: function() {
                var t = this.binding,
                    e = this.buffer,
                    n = this.valueSize,
                    i = 3 * n;
                t.getValue(e, i);
                for (var r = n, o = i; r !== o; ++r) e[r] = e[i + r % n];
                this.cumulativeWeight = 0
            },
            restoreOriginalState: function() {
                var t = 3 * this.valueSize;
                this.binding.setValue(this.buffer, t)
            },
            _select: function(t, e, n, i, r) {
                if (i >= .5)
                    for (var o = 0; o !== r; ++o) t[e + o] = t[n + o]
            },
            _slerp: function(t, e, n, i) {
                Pe.slerpFlat(t, e, t, e, t, n, i)
            },
            _lerp: function(t, e, n, i, r) {
                for (var o = 1 - i, a = 0; a !== r; ++a) {
                    var s = e + a;
                    t[s] = t[s] * o + t[n + a] * i
                }
            }
        });
        var Ah = new RegExp("[\\[\\]\\.:\\/]", "g"),
            Ph = "[^" + "\\[\\]\\.:\\/".replace("\\.", "") + "]",
            Lh = /((?:WC+[\/:])*)/.source.replace("WC", "[^\\[\\]\\.:\\/]"),
            Rh = /(WCOD+)?/.source.replace("WCOD", Ph),
            Ch = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", "[^\\[\\]\\.:\\/]"),
            Oh = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", "[^\\[\\]\\.:\\/]"),
            Ih = new RegExp("^" + Lh + Rh + Ch + Oh + "$"),
            Dh = ["material", "materials", "bones"];

        function Nh(t, e, n) {
            var i = n || Bh.parseTrackName(e);
            this._targetGroup = t, this._bindings = t.subscribe_(e, i)
        }

        function Bh(t, e, n) {
            this.path = e, this.parsedPath = n || Bh.parseTrackName(e), this.node = Bh.findNode(t, this.parsedPath.nodeName) || t, this.rootNode = t
        }

        function Hh() {
            this.uuid = Se.generateUUID(), this._objects = Array.prototype.slice.call(arguments), this.nCachedObjects_ = 0;
            var t = {};
            this._indicesByUUID = t;
            for (var e = 0, n = arguments.length; e !== n; ++e) t[arguments[e].uuid] = e;
            this._paths = [], this._parsedPaths = [], this._bindings = [], this._bindingsIndicesByPath = {};
            var i = this;
            this.stats = {
                objects: {
                    get total() {
                        return i._objects.length
                    },
                    get inUse() {
                        return this.total - i.nCachedObjects_
                    }
                },
                get bindingsPerObject() {
                    return i._bindings.length
                }
            }
        }

        function Fh(t, e, n) {
            this._mixer = t, this._clip = e, this._localRoot = n || null;
            for (var i = e.tracks, r = i.length, o = new Array(r), a = {
                    endingStart: oe,
                    endingEnd: oe
                }, s = 0; s !== r; ++s) {
                var c = i[s].createInterpolant(null);
                o[s] = c, c.settings = a
            }
            this._interpolantSettings = a, this._interpolants = o, this._propertyBindings = new Array(r), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = re, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0
        }

        function kh(t) {
            this._root = t, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1
        }

        function Uh(t) {
            "string" == typeof t && (console.warn("THREE.Uniform: Type parameter is no longer needed."), t = arguments[1]), this.value = t
        }

        function zh(t, e, n) {
            va.call(this, t, e), this.meshPerAttribute = n || 1
        }

        function Gh(t, e, n, i) {
            this.ray = new Fn(t, e), this.near = n || 0, this.far = i || 1 / 0, this.camera = null, this.params = {
                Mesh: {},
                Line: {},
                LOD: {},
                Points: {
                    threshold: 1
                },
                Sprite: {}
            }, Object.defineProperties(this.params, {
                PointCloud: {
                    get: function() {
                        return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."), this.Points
                    }
                }
            })
        }

        function jh(t, e) {
            return t.distance - e.distance
        }

        function Vh(t, e, n, i) {
            if (!1 !== t.visible && (t.raycast(e, n), !0 === i))
                for (var r = t.children, o = 0, a = r.length; o < a; o++) Vh(r[o], e, n, !0)
        }

        function Wh(t, e, n) {
            return this.radius = void 0 !== t ? t : 1, this.phi = void 0 !== e ? e : 0, this.theta = void 0 !== n ? n : 0, this
        }

        function Xh(t, e, n) {
            return this.radius = void 0 !== t ? t : 1, this.theta = void 0 !== e ? e : 0, this.y = void 0 !== n ? n : 0, this
        }
        Object.assign(Nh.prototype, {
                getValue: function(t, e) {
                    this.bind();
                    var n = this._targetGroup.nCachedObjects_,
                        i = this._bindings[n];
                    void 0 !== i && i.getValue(t, e)
                },
                setValue: function(t, e) {
                    for (var n = this._bindings, i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i) n[i].setValue(t, e)
                },
                bind: function() {
                    for (var t = this._bindings, e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e) t[e].bind()
                },
                unbind: function() {
                    for (var t = this._bindings, e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e) t[e].unbind()
                }
            }), Object.assign(Bh, {
                Composite: Nh,
                create: function(t, e, n) {
                    return t && t.isAnimationObjectGroup ? new Bh.Composite(t, e, n) : new Bh(t, e, n)
                },
                sanitizeNodeName: function(t) {
                    return t.replace(/\s/g, "_").replace(Ah, "")
                },
                parseTrackName: function(t) {
                    var e = Ih.exec(t);
                    if (!e) throw new Error("PropertyBinding: Cannot parse trackName: " + t);
                    var n = {
                            nodeName: e[2],
                            objectName: e[3],
                            objectIndex: e[4],
                            propertyName: e[5],
                            propertyIndex: e[6]
                        },
                        i = n.nodeName && n.nodeName.lastIndexOf(".");
                    if (void 0 !== i && -1 !== i) {
                        var r = n.nodeName.substring(i + 1); - 1 !== Dh.indexOf(r) && (n.nodeName = n.nodeName.substring(0, i), n.objectName = r)
                    }
                    if (null === n.propertyName || 0 === n.propertyName.length) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t);
                    return n
                },
                findNode: function(t, e) {
                    if (!e || "" === e || "root" === e || "." === e || -1 === e || e === t.name || e === t.uuid) return t;
                    if (t.skeleton) {
                        var n = t.skeleton.getBoneByName(e);
                        if (void 0 !== n) return n
                    }
                    if (t.children) {
                        var i = function(t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    if (r.name === e || r.uuid === e) return r;
                                    var o = i(r.children);
                                    if (o) return o
                                }
                                return null
                            },
                            r = i(t.children);
                        if (r) return r
                    }
                    return null
                }
            }), Object.assign(Bh.prototype, {
                _getValue_unavailable: function() {},
                _setValue_unavailable: function() {},
                BindingType: {
                    Direct: 0,
                    EntireArray: 1,
                    ArrayElement: 2,
                    HasFromToArray: 3
                },
                Versioning: {
                    None: 0,
                    NeedsUpdate: 1,
                    MatrixWorldNeedsUpdate: 2
                },
                GetterByBindingType: [function(t, e) {
                    t[e] = this.node[this.propertyName]
                }, function(t, e) {
                    for (var n = this.resolvedProperty, i = 0, r = n.length; i !== r; ++i) t[e++] = n[i]
                }, function(t, e) {
                    t[e] = this.resolvedProperty[this.propertyIndex]
                }, function(t, e) {
                    this.resolvedProperty.toArray(t, e)
                }],
                SetterByBindingTypeAndVersioning: [
                    [function(t, e) {
                        this.targetObject[this.propertyName] = t[e]
                    }, function(t, e) {
                        this.targetObject[this.propertyName] = t[e], this.targetObject.needsUpdate = !0
                    }, function(t, e) {
                        this.targetObject[this.propertyName] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0
                    }],
                    [function(t, e) {
                        for (var n = this.resolvedProperty, i = 0, r = n.length; i !== r; ++i) n[i] = t[e++]
                    }, function(t, e) {
                        for (var n = this.resolvedProperty, i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
                        this.targetObject.needsUpdate = !0
                    }, function(t, e) {
                        for (var n = this.resolvedProperty, i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
                        this.targetObject.matrixWorldNeedsUpdate = !0
                    }],
                    [function(t, e) {
                        this.resolvedProperty[this.propertyIndex] = t[e]
                    }, function(t, e) {
                        this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.needsUpdate = !0
                    }, function(t, e) {
                        this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0
                    }],
                    [function(t, e) {
                        this.resolvedProperty.fromArray(t, e)
                    }, function(t, e) {
                        this.resolvedProperty.fromArray(t, e), this.targetObject.needsUpdate = !0
                    }, function(t, e) {
                        this.resolvedProperty.fromArray(t, e), this.targetObject.matrixWorldNeedsUpdate = !0
                    }]
                ],
                getValue: function(t, e) {
                    this.bind(), this.getValue(t, e)
                },
                setValue: function(t, e) {
                    this.bind(), this.setValue(t, e)
                },
                bind: function() {
                    var t = this.node,
                        e = this.parsedPath,
                        n = e.objectName,
                        i = e.propertyName,
                        r = e.propertyIndex;
                    if (t || (t = Bh.findNode(this.rootNode, e.nodeName) || this.rootNode, this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, t) {
                        if (n) {
                            var o = e.objectIndex;
                            switch (n) {
                                case "materials":
                                    if (!t.material) return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                                    if (!t.material.materials) return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
                                    t = t.material.materials;
                                    break;
                                case "bones":
                                    if (!t.skeleton) return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
                                    t = t.skeleton.bones;
                                    for (var a = 0; a < t.length; a++)
                                        if (t[a].name === o) {
                                            o = a;
                                            break
                                        } break;
                                default:
                                    if (void 0 === t[n]) return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
                                    t = t[n]
                            }
                            if (void 0 !== o) {
                                if (void 0 === t[o]) return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
                                t = t[o]
                            }
                        }
                        var s = t[i];
                        if (void 0 !== s) {
                            var c = this.Versioning.None;
                            this.targetObject = t, void 0 !== t.needsUpdate ? c = this.Versioning.NeedsUpdate : void 0 !== t.matrixWorldNeedsUpdate && (c = this.Versioning.MatrixWorldNeedsUpdate);
                            var l = this.BindingType.Direct;
                            if (void 0 !== r) {
                                if ("morphTargetInfluences" === i) {
                                    if (!t.geometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
                                    if (t.geometry.isBufferGeometry) {
                                        if (!t.geometry.morphAttributes) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
                                        for (var a = 0; a < this.node.geometry.morphAttributes.position.length; a++)
                                            if (t.geometry.morphAttributes.position[a].name === r) {
                                                r = a;
                                                break
                                            }
                                    } else {
                                        if (!t.geometry.morphTargets) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphTargets.", this);
                                        for (var a = 0; a < this.node.geometry.morphTargets.length; a++)
                                            if (t.geometry.morphTargets[a].name === r) {
                                                r = a;
                                                break
                                            }
                                    }
                                }
                                l = this.BindingType.ArrayElement, this.resolvedProperty = s, this.propertyIndex = r
                            } else void 0 !== s.fromArray && void 0 !== s.toArray ? (l = this.BindingType.HasFromToArray, this.resolvedProperty = s) : Array.isArray(s) ? (l = this.BindingType.EntireArray, this.resolvedProperty = s) : this.propertyName = i;
                            this.getValue = this.GetterByBindingType[l], this.setValue = this.SetterByBindingTypeAndVersioning[l][c]
                        } else {
                            var h = e.nodeName;
                            console.error("THREE.PropertyBinding: Trying to update property for track: " + h + "." + i + " but it wasn't found.", t)
                        }
                    } else console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.")
                },
                unbind: function() {
                    this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound
                }
            }),
            //!\ DECLARE ALIAS AFTER assign prototype !
            Object.assign(Bh.prototype, {
                _getValue_unbound: Bh.prototype.getValue,
                _setValue_unbound: Bh.prototype.setValue
            }), Object.assign(Hh.prototype, {
                isAnimationObjectGroup: !0,
                add: function() {
                    for (var t = this._objects, e = t.length, n = this.nCachedObjects_, i = this._indicesByUUID, r = this._paths, o = this._parsedPaths, a = this._bindings, s = a.length, c = void 0, l = 0, h = arguments.length; l !== h; ++l) {
                        var u = arguments[l],
                            p = u.uuid,
                            d = i[p];
                        if (void 0 === d) {
                            d = e++, i[p] = d, t.push(u);
                            for (var f = 0, m = s; f !== m; ++f) a[f].push(new Bh(u, r[f], o[f]))
                        } else if (d < n) {
                            c = t[d];
                            var v = --n,
                                g = t[v];
                            i[g.uuid] = d, t[d] = g, i[p] = v, t[v] = u;
                            for (var f = 0, m = s; f !== m; ++f) {
                                var y = a[f],
                                    _ = y[v],
                                    x = y[d];
                                y[d] = _, void 0 === x && (x = new Bh(u, r[f], o[f])), y[v] = x
                            }
                        } else t[d] !== c && console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")
                    }
                    this.nCachedObjects_ = n
                },
                remove: function() {
                    for (var t = this._objects, e = this.nCachedObjects_, n = this._indicesByUUID, i = this._bindings, r = i.length, o = 0, a = arguments.length; o !== a; ++o) {
                        var s = arguments[o],
                            c = s.uuid,
                            l = n[c];
                        if (void 0 !== l && l >= e) {
                            var h = e++,
                                u = t[h];
                            n[u.uuid] = l, t[l] = u, n[c] = h, t[h] = s;
                            for (var p = 0, d = r; p !== d; ++p) {
                                var f = i[p],
                                    m = f[h],
                                    v = f[l];
                                f[l] = m, f[h] = v
                            }
                        }
                    }
                    this.nCachedObjects_ = e
                },
                uncache: function() {
                    for (var t = this._objects, e = t.length, n = this.nCachedObjects_, i = this._indicesByUUID, r = this._bindings, o = r.length, a = 0, s = arguments.length; a !== s; ++a) {
                        var c = arguments[a],
                            l = c.uuid,
                            h = i[l];
                        if (void 0 !== h)
                            if (delete i[l], h < n) {
                                var u = --n,
                                    p = t[u],
                                    d = --e,
                                    f = t[d];
                                i[p.uuid] = h, t[h] = p, i[f.uuid] = u, t[u] = f, t.pop();
                                for (var m = 0, v = o; m !== v; ++m) {
                                    var g = r[m],
                                        y = g[u],
                                        _ = g[d];
                                    g[h] = y, g[u] = _, g.pop()
                                }
                            } else {
                                var d = --e,
                                    f = t[d];
                                i[f.uuid] = h, t[h] = f, t.pop();
                                for (var m = 0, v = o; m !== v; ++m) {
                                    var g = r[m];
                                    g[h] = g[d], g.pop()
                                }
                            }
                    }
                    this.nCachedObjects_ = n
                },
                subscribe_: function(t, e) {
                    var n = this._bindingsIndicesByPath,
                        i = n[t],
                        r = this._bindings;
                    if (void 0 !== i) return r[i];
                    var o = this._paths,
                        a = this._parsedPaths,
                        s = this._objects,
                        c = s.length,
                        l = this.nCachedObjects_,
                        h = new Array(c);
                    i = r.length, n[t] = i, o.push(t), a.push(e), r.push(h);
                    for (var u = l, p = s.length; u !== p; ++u) {
                        var d = s[u];
                        h[u] = new Bh(d, t, e)
                    }
                    return h
                },
                unsubscribe_: function(t) {
                    var e = this._bindingsIndicesByPath,
                        n = e[t];
                    if (void 0 !== n) {
                        var i = this._paths,
                            r = this._parsedPaths,
                            o = this._bindings,
                            a = o.length - 1,
                            s = o[a],
                            c = t[a];
                        e[c] = n, o[n] = s, o.pop(), r[n] = r[a], r.pop(), i[n] = i[a], i.pop()
                    }
                }
            }), Object.assign(Fh.prototype, {
                play: function() {
                    return this._mixer._activateAction(this), this
                },
                stop: function() {
                    return this._mixer._deactivateAction(this), this.reset()
                },
                reset: function() {
                    return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping()
                },
                isRunning: function() {
                    return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this)
                },
                isScheduled: function() {
                    return this._mixer._isActiveAction(this)
                },
                startAt: function(t) {
                    return this._startTime = t, this
                },
                setLoop: function(t, e) {
                    return this.loop = t, this.repetitions = e, this
                },
                setEffectiveWeight: function(t) {
                    return this.weight = t, this._effectiveWeight = this.enabled ? t : 0, this.stopFading()
                },
                getEffectiveWeight: function() {
                    return this._effectiveWeight
                },
                fadeIn: function(t) {
                    return this._scheduleFading(t, 0, 1)
                },
                fadeOut: function(t) {
                    return this._scheduleFading(t, 1, 0)
                },
                crossFadeFrom: function(t, e, n) {
                    if (t.fadeOut(e), this.fadeIn(e), n) {
                        var i = this._clip.duration,
                            r = t._clip.duration,
                            o = r / i,
                            a = i / r;
                        t.warp(1, o, e), this.warp(a, 1, e)
                    }
                    return this
                },
                crossFadeTo: function(t, e, n) {
                    return t.crossFadeFrom(this, e, n)
                },
                stopFading: function() {
                    var t = this._weightInterpolant;
                    return null !== t && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this
                },
                setEffectiveTimeScale: function(t) {
                    return this.timeScale = t, this._effectiveTimeScale = this.paused ? 0 : t, this.stopWarping()
                },
                getEffectiveTimeScale: function() {
                    return this._effectiveTimeScale
                },
                setDuration: function(t) {
                    return this.timeScale = this._clip.duration / t, this.stopWarping()
                },
                syncWith: function(t) {
                    return this.time = t.time, this.timeScale = t.timeScale, this.stopWarping()
                },
                halt: function(t) {
                    return this.warp(this._effectiveTimeScale, 0, t)
                },
                warp: function(t, e, n) {
                    var i = this._mixer,
                        r = i.time,
                        o = this._timeScaleInterpolant,
                        a = this.timeScale;
                    null === o && (o = i._lendControlInterpolant(), this._timeScaleInterpolant = o);
                    var s = o.parameterPositions,
                        c = o.sampleValues;
                    return s[0] = r, s[1] = r + n, c[0] = t / a, c[1] = e / a, this
                },
                stopWarping: function() {
                    var t = this._timeScaleInterpolant;
                    return null !== t && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this
                },
                getMixer: function() {
                    return this._mixer
                },
                getClip: function() {
                    return this._clip
                },
                getRoot: function() {
                    return this._localRoot || this._mixer._root
                },
                _update: function(t, e, n, i) {
                    if (this.enabled) {
                        var r = this._startTime;
                        if (null !== r) {
                            var o = (t - r) * n;
                            if (o < 0 || 0 === n) return;
                            this._startTime = null, e = n * o
                        }
                        e *= this._updateTimeScale(t);
                        var a = this._updateTime(e),
                            s = this._updateWeight(t);
                        if (s > 0)
                            for (var c = this._interpolants, l = this._propertyBindings, h = 0, u = c.length; h !== u; ++h) c[h].evaluate(a), l[h].accumulate(i, s)
                    } else this._updateWeight(t)
                },
                _updateWeight: function(t) {
                    var e = 0;
                    if (this.enabled) {
                        e = this.weight;
                        var n = this._weightInterpolant;
                        if (null !== n) {
                            var i = n.evaluate(t)[0];
                            e *= i, t > n.parameterPositions[1] && (this.stopFading(), 0 === i && (this.enabled = !1))
                        }
                    }
                    return this._effectiveWeight = e, e
                },
                _updateTimeScale: function(t) {
                    var e = 0;
                    if (!this.paused) {
                        e = this.timeScale;
                        var n = this._timeScaleInterpolant;
                        if (null !== n) {
                            var i = n.evaluate(t)[0];
                            e *= i, t > n.parameterPositions[1] && (this.stopWarping(), 0 === e ? this.paused = !0 : this.timeScale = e)
                        }
                    }
                    return this._effectiveTimeScale = e, e
                },
                _updateTime: function(t) {
                    var e = this.time + t,
                        n = this._clip.duration,
                        i = this.loop,
                        r = this._loopCount,
                        o = 2202 === i;
                    if (0 === t) return -1 === r ? e : o && 1 == (1 & r) ? n - e : e;
                    if (2200 === i) {
                        -1 === r && (this._loopCount = 0, this._setEndings(!0, !0, !1));
                        t: {
                            if (e >= n) e = n;
                            else {
                                if (!(e < 0)) {
                                    this.time = e;
                                    break t
                                }
                                e = 0
                            }
                            this.clampWhenFinished ? this.paused = !0 : this.enabled = !1,
                            this.time = e,
                            this._mixer.dispatchEvent({
                                type: "finished",
                                action: this,
                                direction: t < 0 ? -1 : 1
                            })
                        }
                    } else {
                        if (-1 === r && (t >= 0 ? (r = 0, this._setEndings(!0, 0 === this.repetitions, o)) : this._setEndings(0 === this.repetitions, !0, o)), e >= n || e < 0) {
                            var a = Math.floor(e / n);
                            e -= n * a, r += Math.abs(a);
                            var s = this.repetitions - r;
                            if (s <= 0) this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, e = t > 0 ? n : 0, this.time = e, this._mixer.dispatchEvent({
                                type: "finished",
                                action: this,
                                direction: t > 0 ? 1 : -1
                            });
                            else {
                                if (1 === s) {
                                    var c = t < 0;
                                    this._setEndings(c, !c, o)
                                } else this._setEndings(!1, !1, o);
                                this._loopCount = r, this.time = e, this._mixer.dispatchEvent({
                                    type: "loop",
                                    action: this,
                                    loopDelta: a
                                })
                            }
                        } else this.time = e;
                        if (o && 1 == (1 & r)) return n - e
                    }
                    return e
                },
                _setEndings: function(t, e, n) {
                    var i = this._interpolantSettings;
                    n ? (i.endingStart = 2401, i.endingEnd = 2401) : (i.endingStart = t ? this.zeroSlopeAtStart ? 2401 : oe : 2402, i.endingEnd = e ? this.zeroSlopeAtEnd ? 2401 : oe : 2402)
                },
                _scheduleFading: function(t, e, n) {
                    var i = this._mixer,
                        r = i.time,
                        o = this._weightInterpolant;
                    null === o && (o = i._lendControlInterpolant(), this._weightInterpolant = o);
                    var a = o.parameterPositions,
                        s = o.sampleValues;
                    return a[0] = r, s[0] = e, a[1] = r + t, s[1] = n, this
                }
            }), kh.prototype = Object.assign(Object.create(Me.prototype), {
                constructor: kh,
                _bindAction: function(t, e) {
                    var n = t._localRoot || this._root,
                        i = t._clip.tracks,
                        r = i.length,
                        o = t._propertyBindings,
                        a = t._interpolants,
                        s = n.uuid,
                        c = this._bindingsByRootAndName,
                        l = c[s];
                    void 0 === l && (l = {}, c[s] = l);
                    for (var h = 0; h !== r; ++h) {
                        var u = i[h],
                            p = u.name,
                            d = l[p];
                        if (void 0 !== d) o[h] = d;
                        else {
                            if (void 0 !== (d = o[h])) {
                                null === d._cacheIndex && (++d.referenceCount, this._addInactiveBinding(d, s, p));
                                continue
                            }
                            var f = e && e._propertyBindings[h].binding.parsedPath;
                            ++(d = new Sh(Bh.create(n, p, f), u.ValueTypeName, u.getValueSize())).referenceCount, this._addInactiveBinding(d, s, p), o[h] = d
                        }
                        a[h].resultBuffer = d.buffer
                    }
                },
                _activateAction: function(t) {
                    if (!this._isActiveAction(t)) {
                        if (null === t._cacheIndex) {
                            var e = (t._localRoot || this._root).uuid,
                                n = t._clip.uuid,
                                i = this._actionsByClip[n];
                            this._bindAction(t, i && i.knownActions[0]), this._addInactiveAction(t, n, e)
                        }
                        for (var r = t._propertyBindings, o = 0, a = r.length; o !== a; ++o) {
                            var s = r[o];
                            0 == s.useCount++ && (this._lendBinding(s), s.saveOriginalState())
                        }
                        this._lendAction(t)
                    }
                },
                _deactivateAction: function(t) {
                    if (this._isActiveAction(t)) {
                        for (var e = t._propertyBindings, n = 0, i = e.length; n !== i; ++n) {
                            var r = e[n];
                            0 == --r.useCount && (r.restoreOriginalState(), this._takeBackBinding(r))
                        }
                        this._takeBackAction(t)
                    }
                },
                _initMemoryManager: function() {
                    this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
                    var t = this;
                    this.stats = {
                        actions: {
                            get total() {
                                return t._actions.length
                            },
                            get inUse() {
                                return t._nActiveActions
                            }
                        },
                        bindings: {
                            get total() {
                                return t._bindings.length
                            },
                            get inUse() {
                                return t._nActiveBindings
                            }
                        },
                        controlInterpolants: {
                            get total() {
                                return t._controlInterpolants.length
                            },
                            get inUse() {
                                return t._nActiveControlInterpolants
                            }
                        }
                    }
                },
                _isActiveAction: function(t) {
                    var e = t._cacheIndex;
                    return null !== e && e < this._nActiveActions
                },
                _addInactiveAction: function(t, e, n) {
                    var i = this._actions,
                        r = this._actionsByClip,
                        o = r[e];
                    if (void 0 === o) o = {
                        knownActions: [t],
                        actionByRoot: {}
                    }, t._byClipCacheIndex = 0, r[e] = o;
                    else {
                        var a = o.knownActions;
                        t._byClipCacheIndex = a.length, a.push(t)
                    }
                    t._cacheIndex = i.length, i.push(t), o.actionByRoot[n] = t
                },
                _removeInactiveAction: function(t) {
                    var e = this._actions,
                        n = e[e.length - 1],
                        i = t._cacheIndex;
                    n._cacheIndex = i, e[i] = n, e.pop(), t._cacheIndex = null;
                    var r = t._clip.uuid,
                        o = this._actionsByClip,
                        a = o[r],
                        s = a.knownActions,
                        c = s[s.length - 1],
                        l = t._byClipCacheIndex;
                    c._byClipCacheIndex = l, s[l] = c, s.pop(), t._byClipCacheIndex = null;
                    var h = a.actionByRoot,
                        u = (t._localRoot || this._root).uuid;
                    delete h[u], 0 === s.length && delete o[r], this._removeInactiveBindingsForAction(t)
                },
                _removeInactiveBindingsForAction: function(t) {
                    for (var e = t._propertyBindings, n = 0, i = e.length; n !== i; ++n) {
                        var r = e[n];
                        0 == --r.referenceCount && this._removeInactiveBinding(r)
                    }
                },
                _lendAction: function(t) {
                    var e = this._actions,
                        n = t._cacheIndex,
                        i = this._nActiveActions++,
                        r = e[i];
                    t._cacheIndex = i, e[i] = t, r._cacheIndex = n, e[n] = r
                },
                _takeBackAction: function(t) {
                    var e = this._actions,
                        n = t._cacheIndex,
                        i = --this._nActiveActions,
                        r = e[i];
                    t._cacheIndex = i, e[i] = t, r._cacheIndex = n, e[n] = r
                },
                _addInactiveBinding: function(t, e, n) {
                    var i = this._bindingsByRootAndName,
                        r = i[e],
                        o = this._bindings;
                    void 0 === r && (r = {}, i[e] = r), r[n] = t, t._cacheIndex = o.length, o.push(t)
                },
                _removeInactiveBinding: function(t) {
                    var e = this._bindings,
                        n = t.binding,
                        i = n.rootNode.uuid,
                        r = n.path,
                        o = this._bindingsByRootAndName,
                        a = o[i],
                        s = e[e.length - 1],
                        c = t._cacheIndex;
                    s._cacheIndex = c, e[c] = s, e.pop(), delete a[r], 0 === Object.keys(a).length && delete o[i]
                },
                _lendBinding: function(t) {
                    var e = this._bindings,
                        n = t._cacheIndex,
                        i = this._nActiveBindings++,
                        r = e[i];
                    t._cacheIndex = i, e[i] = t, r._cacheIndex = n, e[n] = r
                },
                _takeBackBinding: function(t) {
                    var e = this._bindings,
                        n = t._cacheIndex,
                        i = --this._nActiveBindings,
                        r = e[i];
                    t._cacheIndex = i, e[i] = t, r._cacheIndex = n, e[n] = r
                },
                _lendControlInterpolant: function() {
                    var t = this._controlInterpolants,
                        e = this._nActiveControlInterpolants++,
                        n = t[e];
                    return void 0 === n && ((n = new Hc(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer)).__cacheIndex = e, t[e] = n), n
                },
                _takeBackControlInterpolant: function(t) {
                    var e = this._controlInterpolants,
                        n = t.__cacheIndex,
                        i = --this._nActiveControlInterpolants,
                        r = e[i];
                    t.__cacheIndex = i, e[i] = t, r.__cacheIndex = n, e[n] = r
                },
                _controlInterpolantsResultBuffer: new Float32Array(1),
                clipAction: function(t, e) {
                    var n = e || this._root,
                        i = n.uuid,
                        r = "string" == typeof t ? qc.findByName(n, t) : t,
                        o = null !== r ? r.uuid : t,
                        a = this._actionsByClip[o],
                        s = null;
                    if (void 0 !== a) {
                        var c = a.actionByRoot[i];
                        if (void 0 !== c) return c;
                        s = a.knownActions[0], null === r && (r = s._clip)
                    }
                    if (null === r) return null;
                    var l = new Fh(this, r, e);
                    return this._bindAction(l, s), this._addInactiveAction(l, o, i), l
                },
                existingAction: function(t, e) {
                    var n = e || this._root,
                        i = n.uuid,
                        r = "string" == typeof t ? qc.findByName(n, t) : t,
                        o = r ? r.uuid : t,
                        a = this._actionsByClip[o];
                    return void 0 !== a && a.actionByRoot[i] || null
                },
                stopAllAction: function() {
                    var t = this._actions,
                        e = this._nActiveActions,
                        n = this._bindings,
                        i = this._nActiveBindings;
                    this._nActiveActions = 0, this._nActiveBindings = 0;
                    for (var r = 0; r !== e; ++r) t[r].reset();
                    for (var r = 0; r !== i; ++r) n[r].useCount = 0;
                    return this
                },
                update: function(t) {
                    t *= this.timeScale;
                    for (var e = this._actions, n = this._nActiveActions, i = this.time += t, r = Math.sign(t), o = this._accuIndex ^= 1, a = 0; a !== n; ++a) {
                        var s = e[a];
                        s._update(i, t, r, o)
                    }
                    for (var c = this._bindings, l = this._nActiveBindings, a = 0; a !== l; ++a) c[a].apply(o);
                    return this
                },
                setTime: function(t) {
                    this.time = 0;
                    for (var e = 0; e < this._actions.length; e++) this._actions[e].time = 0;
                    return this.update(t)
                },
                getRoot: function() {
                    return this._root
                },
                uncacheClip: function(t) {
                    var e = this._actions,
                        n = t.uuid,
                        i = this._actionsByClip,
                        r = i[n];
                    if (void 0 !== r) {
                        for (var o = r.knownActions, a = 0, s = o.length; a !== s; ++a) {
                            var c = o[a];
                            this._deactivateAction(c);
                            var l = c._cacheIndex,
                                h = e[e.length - 1];
                            c._cacheIndex = null, c._byClipCacheIndex = null, h._cacheIndex = l, e[l] = h, e.pop(), this._removeInactiveBindingsForAction(c)
                        }
                        delete i[n]
                    }
                },
                uncacheRoot: function(t) {
                    var e = t.uuid,
                        n = this._actionsByClip;
                    for (var i in n) {
                        var r = n[i].actionByRoot,
                            o = r[e];
                        void 0 !== o && (this._deactivateAction(o), this._removeInactiveAction(o))
                    }
                    var a = this._bindingsByRootAndName,
                        s = a[e];
                    if (void 0 !== s)
                        for (var c in s) {
                            var l = s[c];
                            l.restoreOriginalState(), this._removeInactiveBinding(l)
                        }
                },
                uncacheAction: function(t, e) {
                    var n = this.existingAction(t, e);
                    null !== n && (this._deactivateAction(n), this._removeInactiveAction(n))
                }
            }), Uh.prototype.clone = function() {
                return new Uh(void 0 === this.value.clone ? this.value : this.value.clone())
            }, zh.prototype = Object.assign(Object.create(va.prototype), {
                constructor: zh,
                isInstancedInterleavedBuffer: !0,
                copy: function(t) {
                    return va.prototype.copy.call(this, t), this.meshPerAttribute = t.meshPerAttribute, this
                }
            }), Object.assign(Gh.prototype, {
                linePrecision: 1,
                set: function(t, e) {
                    this.ray.set(t, e)
                },
                setFromCamera: function(t, e) {
                    e && e.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(t.x, t.y, .5).unproject(e).sub(this.ray.origin).normalize(), this.camera = e) : e && e.isOrthographicCamera ? (this.ray.origin.set(t.x, t.y, (e.near + e.far) / (e.near - e.far)).unproject(e), this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld), this.camera = e) : console.error("THREE.Raycaster: Unsupported camera type.")
                },
                intersectObject: function(t, e, n) {
                    var i = n || [];
                    return Vh(t, this, i, e), i.sort(jh), i
                },
                intersectObjects: function(t, e, n) {
                    var i = n || [];
                    if (!1 === Array.isArray(t)) return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."), i;
                    for (var r = 0, o = t.length; r < o; r++) Vh(t[r], this, i, e);
                    return i.sort(jh), i
                }
            }), Object.assign(Wh.prototype, {
                set: function(t, e, n) {
                    return this.radius = t, this.phi = e, this.theta = n, this
                },
                clone: function() {
                    return (new this.constructor).copy(this)
                },
                copy: function(t) {
                    return this.radius = t.radius, this.phi = t.phi, this.theta = t.theta, this
                },
                makeSafe: function() {
                    return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this
                },
                setFromVector3: function(t) {
                    return this.setFromCartesianCoords(t.x, t.y, t.z)
                },
                setFromCartesianCoords: function(t, e, n) {
                    return this.radius = Math.sqrt(t * t + e * e + n * n), 0 === this.radius ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t, n), this.phi = Math.acos(Se.clamp(e / this.radius, -1, 1))), this
                }
            }), Object.assign(Xh.prototype, {
                set: function(t, e, n) {
                    return this.radius = t, this.theta = e, this.y = n, this
                },
                clone: function() {
                    return (new this.constructor).copy(this)
                },
                copy: function(t) {
                    return this.radius = t.radius, this.theta = t.theta, this.y = t.y, this
                },
                setFromVector3: function(t) {
                    return this.setFromCartesianCoords(t.x, t.y, t.z)
                },
                setFromCartesianCoords: function(t, e, n) {
                    return this.radius = Math.sqrt(t * t + n * n), this.theta = Math.atan2(t, n), this.y = e, this
                }
            });
        var qh = new Ae;

        function Yh(t, e) {
            this.min = void 0 !== t ? t : new Ae(1 / 0, 1 / 0), this.max = void 0 !== e ? e : new Ae(-1 / 0, -1 / 0)
        }
        Object.assign(Yh.prototype, {
            set: function(t, e) {
                return this.min.copy(t), this.max.copy(e), this
            },
            setFromPoints: function(t) {
                this.makeEmpty();
                for (var e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]);
                return this
            },
            setFromCenterAndSize: function(t, e) {
                var n = qh.copy(e).multiplyScalar(.5);
                return this.min.copy(t).sub(n), this.max.copy(t).add(n), this
            },
            clone: function() {
                return (new this.constructor).copy(this)
            },
            copy: function(t) {
                return this.min.copy(t.min), this.max.copy(t.max), this
            },
            makeEmpty: function() {
                return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this
            },
            isEmpty: function() {
                return this.max.x < this.min.x || this.max.y < this.min.y
            },
            getCenter: function(t) {
                return void 0 === t && (console.warn("THREE.Box2: .getCenter() target is now required"), t = new Ae), this.isEmpty() ? t.set(0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5)
            },
            getSize: function(t) {
                return void 0 === t && (console.warn("THREE.Box2: .getSize() target is now required"), t = new Ae), this.isEmpty() ? t.set(0, 0) : t.subVectors(this.max, this.min)
            },
            expandByPoint: function(t) {
                return this.min.min(t), this.max.max(t), this
            },
            expandByVector: function(t) {
                return this.min.sub(t), this.max.add(t), this
            },
            expandByScalar: function(t) {
                return this.min.addScalar(-t), this.max.addScalar(t), this
            },
            containsPoint: function(t) {
                return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y)
            },
            containsBox: function(t) {
                return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y
            },
            getParameter: function(t, e) {
                return void 0 === e && (console.warn("THREE.Box2: .getParameter() target is now required"), e = new Ae), e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y))
            },
            intersectsBox: function(t) {
                return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y)
            },
            clampPoint: function(t, e) {
                return void 0 === e && (console.warn("THREE.Box2: .clampPoint() target is now required"), e = new Ae), e.copy(t).clamp(this.min, this.max)
            },
            distanceToPoint: function(t) {
                var e = qh.copy(t).clamp(this.min, this.max);
                return e.sub(t).length()
            },
            intersect: function(t) {
                return this.min.max(t.min), this.max.min(t.max), this
            },
            union: function(t) {
                return this.min.min(t.min), this.max.max(t.max), this
            },
            translate: function(t) {
                return this.min.add(t), this.max.add(t), this
            },
            equals: function(t) {
                return t.min.equals(this.min) && t.max.equals(this.max)
            }
        });
        var Zh = new Ce,
            Jh = new Ce;

        function Kh(t, e) {
            this.start = void 0 !== t ? t : new Ce, this.end = void 0 !== e ? e : new Ce
        }

        function Qh(t) {
            dn.call(this), this.material = t, this.render = function() {}
        }
        Object.assign(Kh.prototype, {
            set: function(t, e) {
                return this.start.copy(t), this.end.copy(e), this
            },
            clone: function() {
                return (new this.constructor).copy(this)
            },
            copy: function(t) {
                return this.start.copy(t.start), this.end.copy(t.end), this
            },
            getCenter: function(t) {
                return void 0 === t && (console.warn("THREE.Line3: .getCenter() target is now required"), t = new Ce), t.addVectors(this.start, this.end).multiplyScalar(.5)
            },
            delta: function(t) {
                return void 0 === t && (console.warn("THREE.Line3: .delta() target is now required"), t = new Ce), t.subVectors(this.end, this.start)
            },
            distanceSq: function() {
                return this.start.distanceToSquared(this.end)
            },
            distance: function() {
                return this.start.distanceTo(this.end)
            },
            at: function(t, e) {
                return void 0 === e && (console.warn("THREE.Line3: .at() target is now required"), e = new Ce), this.delta(e).multiplyScalar(t).add(this.start)
            },
            closestPointToPointParameter: function(t, e) {
                Zh.subVectors(t, this.start), Jh.subVectors(this.end, this.start);
                var n = Jh.dot(Jh),
                    i = Jh.dot(Zh),
                    r = i / n;
                return e && (r = Se.clamp(r, 0, 1)), r
            },
            closestPointToPoint: function(t, e, n) {
                var i = this.closestPointToPointParameter(t, e);
                return void 0 === n && (console.warn("THREE.Line3: .closestPointToPoint() target is now required"), n = new Ce), this.delta(n).multiplyScalar(i).add(this.start)
            },
            applyMatrix4: function(t) {
                return this.start.applyMatrix4(t), this.end.applyMatrix4(t), this
            },
            equals: function(t) {
                return t.start.equals(this.start) && t.end.equals(this.end)
            }
        }), Qh.prototype = Object.create(dn.prototype), Qh.prototype.constructor = Qh, Qh.prototype.isImmediateRenderObject = !0;
        var $h = new Ce,
            tu = new Ce,
            eu = new De,
            nu = ["a", "b", "c"];

        function iu(t, e, n, i) {
            this.object = t, this.size = void 0 !== e ? e : 1;
            var r = void 0 !== n ? n : 16711680,
                o = void 0 !== i ? i : 1,
                a = 0,
                s = this.object.geometry;
            s && s.isGeometry ? a = 3 * s.faces.length : s && s.isBufferGeometry && (a = s.attributes.normal.count);
            var c = new Si,
                l = new mi(2 * a * 3, 3);
            c.addAttribute("position", l), Ka.call(this, c, new Ga({
                color: r,
                linewidth: o
            })), this.matrixAutoUpdate = !1, this.update()
        }
        iu.prototype = Object.create(Ka.prototype), iu.prototype.constructor = iu, iu.prototype.update = function() {
            this.object.updateMatrixWorld(!0), eu.getNormalMatrix(this.object.matrixWorld);
            var t = this.object.matrixWorld,
                e = this.geometry.attributes.position,
                n = this.object.geometry;
            if (n && n.isGeometry)
                for (var i = n.vertices, r = n.faces, o = 0, a = 0, s = r.length; a < s; a++)
                    for (var c = r[a], l = 0, h = c.vertexNormals.length; l < h; l++) {
                        var u = i[c[nu[l]]],
                            p = c.vertexNormals[l];
                        $h.copy(u).applyMatrix4(t), tu.copy(p).applyMatrix3(eu).normalize().multiplyScalar(this.size).add($h), e.setXYZ(o, $h.x, $h.y, $h.z), o += 1, e.setXYZ(o, tu.x, tu.y, tu.z), o += 1
                    } else if (n && n.isBufferGeometry)
                        for (var d = n.attributes.position, f = n.attributes.normal, o = 0, l = 0, h = d.count; l < h; l++) $h.set(d.getX(l), d.getY(l), d.getZ(l)).applyMatrix4(t), tu.set(f.getX(l), f.getY(l), f.getZ(l)), tu.applyMatrix3(eu).normalize().multiplyScalar(this.size).add($h), e.setXYZ(o, $h.x, $h.y, $h.z), o += 1, e.setXYZ(o, tu.x, tu.y, tu.z), o += 1;
            e.needsUpdate = !0
        };
        var ru = new Ce;

        function ou(t, e) {
            dn.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = e;
            for (var n = new Si, i = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 1], r = 0, o = 1; r < 32; r++, o++) {
                var a = r / 32 * Math.PI * 2,
                    s = o / 32 * Math.PI * 2;
                i.push(Math.cos(a), Math.sin(a), 1, Math.cos(s), Math.sin(s), 1)
            }
            n.addAttribute("position", new mi(i, 3));
            var c = new Ga({
                fog: !1
            });
            this.cone = new Ka(n, c), this.add(this.cone), this.update()
        }
        ou.prototype = Object.create(dn.prototype), ou.prototype.constructor = ou, ou.prototype.dispose = function() {
            this.cone.geometry.dispose(), this.cone.material.dispose()
        }, ou.prototype.update = function() {
            this.light.updateMatrixWorld();
            var t = this.light.distance ? this.light.distance : 1e3,
                e = t * Math.tan(this.light.angle);
            this.cone.scale.set(e, e, t), ru.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(ru), void 0 !== this.color ? this.cone.material.color.set(this.color) : this.cone.material.color.copy(this.light.color)
        };
        var au = new Ce,
            su = new Ye,
            cu = new Ye;

        function lu(t) {
            for (var e = function t(e) {
                    var n = [];
                    e && e.isBone && n.push(e);
                    for (var i = 0; i < e.children.length; i++) n.push.apply(n, t(e.children[i]));
                    return n
                }(t), n = new Si, i = [], r = [], o = new $n(0, 0, 1), a = new $n(0, 1, 0), s = 0; s < e.length; s++) {
                var c = e[s];
                c.parent && c.parent.isBone && (i.push(0, 0, 0), i.push(0, 0, 0), r.push(o.r, o.g, o.b), r.push(a.r, a.g, a.b))
            }
            n.addAttribute("position", new mi(i, 3)), n.addAttribute("color", new mi(r, 3));
            var l = new Ga({
                vertexColors: p,
                depthTest: !1,
                depthWrite: !1,
                transparent: !0
            });
            Ka.call(this, n, l), this.root = t, this.bones = e, this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1
        }

        function hu(t, e, n) {
            this.light = t, this.light.updateMatrixWorld(), this.color = n;
            var i = new sc(e, 4, 2),
                r = new ai({
                    wireframe: !0,
                    fog: !1
                });
            Vi.call(this, i, r), this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = !1, this.update()
        }

        function uu(t, e) {
            this.type = "RectAreaLightHelper", this.light = t, this.color = e;
            var n = new Si;
            n.addAttribute("position", new mi([1, 1, 0, -1, 1, 0, -1, -1, 0, 1, -1, 0, 1, 1, 0], 3)), n.computeBoundingSphere();
            var i = new Ga({
                fog: !1
            });
            Ya.call(this, n, i);
            var r = new Si;
            r.addAttribute("position", new mi([1, 1, 0, -1, 1, 0, -1, -1, 0, 1, 1, 0, -1, -1, 0, 1, -1, 0], 3)), r.computeBoundingSphere(), this.add(new Vi(r, new ai({
                side: c,
                fog: !1
            }))), this.update()
        }
        lu.prototype = Object.create(Ka.prototype), lu.prototype.constructor = lu, lu.prototype.updateMatrixWorld = function(t) {
            var e = this.bones,
                n = this.geometry,
                i = n.getAttribute("position");
            cu.getInverse(this.root.matrixWorld);
            for (var r = 0, o = 0; r < e.length; r++) {
                var a = e[r];
                a.parent && a.parent.isBone && (su.multiplyMatrices(cu, a.matrixWorld), au.setFromMatrixPosition(su), i.setXYZ(o, au.x, au.y, au.z), su.multiplyMatrices(cu, a.parent.matrixWorld), au.setFromMatrixPosition(su), i.setXYZ(o + 1, au.x, au.y, au.z), o += 2)
            }
            n.getAttribute("position").needsUpdate = !0, dn.prototype.updateMatrixWorld.call(this, t)
        }, hu.prototype = Object.create(Vi.prototype), hu.prototype.constructor = hu, hu.prototype.dispose = function() {
            this.geometry.dispose(), this.material.dispose()
        }, hu.prototype.update = function() {
            void 0 !== this.color ? this.material.color.set(this.color) : this.material.color.copy(this.light.color)
        }, uu.prototype = Object.create(Ya.prototype), uu.prototype.constructor = uu, uu.prototype.update = function() {
            if (this.scale.set(.5 * this.light.width, .5 * this.light.height, 1), void 0 !== this.color) this.material.color.set(this.color), this.children[0].material.color.set(this.color);
            else {
                this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);
                var t = this.material.color,
                    e = Math.max(t.r, t.g, t.b);
                e > 1 && t.multiplyScalar(1 / e), this.children[0].material.color.copy(this.material.color)
            }
        }, uu.prototype.dispose = function() {
            this.geometry.dispose(), this.material.dispose(), this.children[0].geometry.dispose(), this.children[0].material.dispose()
        };
        var pu = new Ce,
            du = new $n,
            fu = new $n;

        function mu(t, e, n) {
            dn.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = n;
            var i = new ys(e);
            i.rotateY(.5 * Math.PI), this.material = new ai({
                wireframe: !0,
                fog: !1
            }), void 0 === this.color && (this.material.vertexColors = p);
            var r = i.getAttribute("position"),
                o = new Float32Array(3 * r.count);
            i.addAttribute("color", new si(o, 3)), this.add(new Vi(i, this.material)), this.update()
        }

        function vu(t, e) {
            this.lightProbe = t, this.size = e;
            var n = {
                    GAMMA_OUTPUT: ""
                },
                i = new or({
                    defines: n,
                    uniforms: {
                        sh: {
                            value: this.lightProbe.sh.coefficients
                        },
                        intensity: {
                            value: this.lightProbe.intensity
                        }
                    },
                    vertexShader: ["varying vec3 vNormal;", "void main() {", "\tvNormal = normalize( normalMatrix * normal );", "\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
                    fragmentShader: ["#define RECIPROCAL_PI 0.318309886", "vec3 inverseTransformDirection( in vec3 normal, in mat4 matrix ) {", "\t// matrix is assumed to be orthogonal", "\treturn normalize( ( vec4( normal, 0.0 ) * matrix ).xyz );", "}", "vec3 linearToOutput( in vec3 a ) {", "\t#ifdef GAMMA_OUTPUT", "\t\treturn pow( a, vec3( 1.0 / float( GAMMA_FACTOR ) ) );", "\t#else", "\t\treturn a;", "\t#endif", "}", "// source: https://graphics.stanford.edu/papers/envmap/envmap.pdf", "vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {", "\t// normal is assumed to have unit length", "\tfloat x = normal.x, y = normal.y, z = normal.z;", "\t// band 0", "\tvec3 result = shCoefficients[ 0 ] * 0.886227;", "\t// band 1", "\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;", "\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;", "\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;", "\t// band 2", "\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;", "\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;", "\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );", "\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;", "\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );", "\treturn result;", "}", "uniform vec3 sh[ 9 ]; // sh coefficients", "uniform float intensity; // light probe intensity", "varying vec3 vNormal;", "void main() {", "\tvec3 normal = normalize( vNormal );", "\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );", "\tvec3 irradiance = shGetIrradianceAt( worldNormal, sh );", "\tvec3 outgoingLight = RECIPROCAL_PI * irradiance * intensity;", "\toutgoingLight = linearToOutput( outgoingLight );", "\tgl_FragColor = vec4( outgoingLight, 1.0 );", "}"].join("\n")
                }),
                r = new sc(1, 32, 16);
            Vi.call(this, r, i), this.onBeforeRender()
        }

        function gu(t, e, n, i) {
            t = t || 10, e = e || 10, n = new $n(void 0 !== n ? n : 4473924), i = new $n(void 0 !== i ? i : 8947848);
            for (var r = e / 2, o = t / e, a = t / 2, s = [], c = [], l = 0, h = 0, u = -a; l <= e; l++, u += o) {
                s.push(-a, 0, u, a, 0, u), s.push(u, 0, -a, u, 0, a);
                var d = l === r ? n : i;
                d.toArray(c, h), h += 3, d.toArray(c, h), h += 3, d.toArray(c, h), h += 3, d.toArray(c, h), h += 3
            }
            var f = new Si;
            f.addAttribute("position", new mi(s, 3)), f.addAttribute("color", new mi(c, 3));
            var m = new Ga({
                vertexColors: p
            });
            Ka.call(this, f, m)
        }

        function yu(t, e, n, i, r, o) {
            t = t || 10, e = e || 16, n = n || 8, i = i || 64, r = new $n(void 0 !== r ? r : 4473924), o = new $n(void 0 !== o ? o : 8947848);
            var a, s, c, l, h, u, d, f = [],
                m = [];
            for (l = 0; l <= e; l++) c = l / e * (2 * Math.PI), a = Math.sin(c) * t, s = Math.cos(c) * t, f.push(0, 0, 0), f.push(a, 0, s), d = 1 & l ? r : o, m.push(d.r, d.g, d.b), m.push(d.r, d.g, d.b);
            for (l = 0; l <= n; l++)
                for (d = 1 & l ? r : o, u = t - t / n * l, h = 0; h < i; h++) c = h / i * (2 * Math.PI), a = Math.sin(c) * u, s = Math.cos(c) * u, f.push(a, 0, s), m.push(d.r, d.g, d.b), c = (h + 1) / i * (2 * Math.PI), a = Math.sin(c) * u, s = Math.cos(c) * u, f.push(a, 0, s), m.push(d.r, d.g, d.b);
            var v = new Si;
            v.addAttribute("position", new mi(f, 3)), v.addAttribute("color", new mi(m, 3));
            var g = new Ga({
                vertexColors: p
            });
            Ka.call(this, v, g)
        }

        function _u(t, e, n, i) {
            this.audio = t, this.range = e || 1, this.divisionsInnerAngle = n || 16, this.divisionsOuterAngle = i || 2;
            var r = new Si,
                o = this.divisionsInnerAngle + 2 * this.divisionsOuterAngle,
                a = new Float32Array(3 * (3 * o + 3));
            r.addAttribute("position", new si(a, 3));
            var s = new Ga({
                    color: 65280
                }),
                c = new Ga({
                    color: 16776960
                });
            Ya.call(this, r, [c, s]), this.update()
        }
        mu.prototype = Object.create(dn.prototype), mu.prototype.constructor = mu, mu.prototype.dispose = function() {
            this.children[0].geometry.dispose(), this.children[0].material.dispose()
        }, mu.prototype.update = function() {
            var t = this.children[0];
            if (void 0 !== this.color) this.material.color.set(this.color);
            else {
                var e = t.geometry.getAttribute("color");
                du.copy(this.light.color), fu.copy(this.light.groundColor);
                for (var n = 0, i = e.count; n < i; n++) {
                    var r = n < i / 2 ? du : fu;
                    e.setXYZ(n, r.r, r.g, r.b)
                }
                e.needsUpdate = !0
            }
            t.lookAt(pu.setFromMatrixPosition(this.light.matrixWorld).negate())
        }, vu.prototype = Object.create(Vi.prototype), vu.prototype.constructor = vu, vu.prototype.dispose = function() {
            this.geometry.dispose(), this.material.dispose()
        }, vu.prototype.onBeforeRender = function() {
            this.position.copy(this.lightProbe.position), this.scale.set(1, 1, 1).multiplyScalar(this.size), this.material.uniforms.intensity.value = this.lightProbe.intensity
        }, gu.prototype = Object.assign(Object.create(Ka.prototype), {
            constructor: gu,
            copy: function(t) {
                return Ka.prototype.copy.call(this, t), this.geometry.copy(t.geometry), this.material.copy(t.material), this
            },
            clone: function() {
                return (new this.constructor).copy(this)
            }
        }), yu.prototype = Object.create(Ka.prototype), yu.prototype.constructor = yu, _u.prototype = Object.create(Ya.prototype), _u.prototype.constructor = _u, _u.prototype.update = function() {
            var t, e, n = this.audio,
                i = this.range,
                r = this.divisionsInnerAngle,
                o = this.divisionsOuterAngle,
                a = Se.degToRad(n.panner.coneInnerAngle),
                s = Se.degToRad(n.panner.coneOuterAngle),
                c = a / 2,
                l = s / 2,
                h = 0,
                u = 0,
                p = this.geometry,
                d = p.attributes.position;

            function f(n, r, o, a) {
                var s = (r - n) / o;
                for (d.setXYZ(h, 0, 0, 0), u++, t = n; t < r; t += s) e = h + u, d.setXYZ(e, Math.sin(t) * i, 0, Math.cos(t) * i), d.setXYZ(e + 1, Math.sin(Math.min(t + s, r)) * i, 0, Math.cos(Math.min(t + s, r)) * i), d.setXYZ(e + 2, 0, 0, 0), u += 3;
                p.addGroup(h, u, a), h += u, u = 0
            }
            p.clearGroups(), f(-l, -c, o, 0), f(-c, c, r, 1), f(c, l, o, 0), d.needsUpdate = !0, a === s && (this.material[0].visible = !1)
        }, _u.prototype.dispose = function() {
            this.geometry.dispose(), this.material[0].dispose(), this.material[1].dispose()
        };
        var xu = new Ce,
            bu = new Ce,
            wu = new De;

        function Mu(t, e, n, i) {
            this.object = t, this.size = void 0 !== e ? e : 1;
            var r = void 0 !== n ? n : 16776960,
                o = void 0 !== i ? i : 1,
                a = 0,
                s = this.object.geometry;
            s && s.isGeometry ? a = s.faces.length : console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead.");
            var c = new Si,
                l = new mi(2 * a * 3, 3);
            c.addAttribute("position", l), Ka.call(this, c, new Ga({
                color: r,
                linewidth: o
            })), this.matrixAutoUpdate = !1, this.update()
        }
        Mu.prototype = Object.create(Ka.prototype), Mu.prototype.constructor = Mu, Mu.prototype.update = function() {
            this.object.updateMatrixWorld(!0), wu.getNormalMatrix(this.object.matrixWorld);
            for (var t = this.object.matrixWorld, e = this.geometry.attributes.position, n = this.object.geometry, i = n.vertices, r = n.faces, o = 0, a = 0, s = r.length; a < s; a++) {
                var c = r[a],
                    l = c.normal;
                xu.copy(i[c.a]).add(i[c.b]).add(i[c.c]).divideScalar(3).applyMatrix4(t), bu.copy(l).applyMatrix3(wu).normalize().multiplyScalar(this.size).add(xu), e.setXYZ(o, xu.x, xu.y, xu.z), o += 1, e.setXYZ(o, bu.x, bu.y, bu.z), o += 1
            }
            e.needsUpdate = !0
        };
        var Tu = new Ce,
            Eu = new Ce,
            Su = new Ce;

        function Au(t, e, n) {
            dn.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = n, void 0 === e && (e = 1);
            var i = new Si;
            i.addAttribute("position", new mi([-e, e, 0, e, e, 0, e, -e, 0, -e, -e, 0, -e, e, 0], 3));
            var r = new Ga({
                fog: !1
            });
            this.lightPlane = new Ya(i, r), this.add(this.lightPlane), (i = new Si).addAttribute("position", new mi([0, 0, 0, 0, 0, 1], 3)), this.targetLine = new Ya(i, r), this.add(this.targetLine), this.update()
        }
        Au.prototype = Object.create(dn.prototype), Au.prototype.constructor = Au, Au.prototype.dispose = function() {
            this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose()
        }, Au.prototype.update = function() {
            Tu.setFromMatrixPosition(this.light.matrixWorld), Eu.setFromMatrixPosition(this.light.target.matrixWorld), Su.subVectors(Eu, Tu), this.lightPlane.lookAt(Eu), void 0 !== this.color ? (this.lightPlane.material.color.set(this.color), this.targetLine.material.color.set(this.color)) : (this.lightPlane.material.color.copy(this.light.color), this.targetLine.material.color.copy(this.light.color)), this.targetLine.lookAt(Eu), this.targetLine.scale.z = Su.length()
        };
        var Pu = new Ce,
            Lu = new ar;

        function Ru(t) {
            var e = new Si,
                n = new Ga({
                    color: 16777215,
                    vertexColors: u
                }),
                i = [],
                r = [],
                o = {},
                a = new $n(16755200),
                s = new $n(16711680),
                c = new $n(43775),
                l = new $n(16777215),
                h = new $n(3355443);

            function p(t, e, n) {
                d(t, n), d(e, n)
            }

            function d(t, e) {
                i.push(0, 0, 0), r.push(e.r, e.g, e.b), void 0 === o[t] && (o[t] = []), o[t].push(i.length / 3 - 1)
            }
            p("n1", "n2", a), p("n2", "n4", a), p("n4", "n3", a), p("n3", "n1", a), p("f1", "f2", a), p("f2", "f4", a), p("f4", "f3", a), p("f3", "f1", a), p("n1", "f1", a), p("n2", "f2", a), p("n3", "f3", a), p("n4", "f4", a), p("p", "n1", s), p("p", "n2", s), p("p", "n3", s), p("p", "n4", s), p("u1", "u2", c), p("u2", "u3", c), p("u3", "u1", c), p("c", "t", l), p("p", "c", h), p("cn1", "cn2", h), p("cn3", "cn4", h), p("cf1", "cf2", h), p("cf3", "cf4", h), e.addAttribute("position", new mi(i, 3)), e.addAttribute("color", new mi(r, 3)), Ka.call(this, e, n), this.camera = t, this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = o, this.update()
        }

        function Cu(t, e, n, i, r, o, a) {
            Pu.set(r, o, a).unproject(i);
            var s = e[t];
            if (void 0 !== s)
                for (var c = n.getAttribute("position"), l = 0, h = s.length; l < h; l++) c.setXYZ(s[l], Pu.x, Pu.y, Pu.z)
        }
        Ru.prototype = Object.create(Ka.prototype), Ru.prototype.constructor = Ru, Ru.prototype.update = function() {
            var t = this.geometry,
                e = this.pointMap;
            Lu.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse), Cu("c", e, t, Lu, 0, 0, -1), Cu("t", e, t, Lu, 0, 0, 1), Cu("n1", e, t, Lu, -1, -1, -1), Cu("n2", e, t, Lu, 1, -1, -1), Cu("n3", e, t, Lu, -1, 1, -1), Cu("n4", e, t, Lu, 1, 1, -1), Cu("f1", e, t, Lu, -1, -1, 1), Cu("f2", e, t, Lu, 1, -1, 1), Cu("f3", e, t, Lu, -1, 1, 1), Cu("f4", e, t, Lu, 1, 1, 1), Cu("u1", e, t, Lu, .7, 1.1, -1), Cu("u2", e, t, Lu, -.7, 1.1, -1), Cu("u3", e, t, Lu, 0, 2, -1), Cu("cf1", e, t, Lu, -1, 0, 1), Cu("cf2", e, t, Lu, 1, 0, 1), Cu("cf3", e, t, Lu, 0, -1, 1), Cu("cf4", e, t, Lu, 0, 1, 1), Cu("cn1", e, t, Lu, -1, 0, -1), Cu("cn2", e, t, Lu, 1, 0, -1), Cu("cn3", e, t, Lu, 0, -1, -1), Cu("cn4", e, t, Lu, 0, 1, -1), t.getAttribute("position").needsUpdate = !0
        };
        var Ou = new An;

        function Iu(t, e) {
            this.object = t, void 0 === e && (e = 16776960);
            var n = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
                i = new Float32Array(24),
                r = new Si;
            r.setIndex(new si(n, 1)), r.addAttribute("position", new si(i, 3)), Ka.call(this, r, new Ga({
                color: e
            })), this.matrixAutoUpdate = !1, this.update()
        }

        function Du(t, e) {
            this.type = "Box3Helper", this.box = t, e = e || 16776960;
            var n = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
                i = new Si;
            i.setIndex(new si(n, 1)), i.addAttribute("position", new mi([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1], 3)), Ka.call(this, i, new Ga({
                color: e
            })), this.geometry.computeBoundingSphere()
        }

        function Nu(t, e, n) {
            this.type = "PlaneHelper", this.plane = t, this.size = void 0 === e ? 1 : e;
            var i = void 0 !== n ? n : 16776960,
                r = new Si;
            r.addAttribute("position", new mi([1, -1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0], 3)), r.computeBoundingSphere(), Ya.call(this, r, new Ga({
                color: i
            }));
            var o = new Si;
            o.addAttribute("position", new mi([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1, 1, -1, 1], 3)), o.computeBoundingSphere(), this.add(new Vi(o, new ai({
                color: i,
                opacity: .2,
                transparent: !0,
                depthWrite: !1
            })))
        }
        Iu.prototype = Object.create(Ka.prototype), Iu.prototype.constructor = Iu, Iu.prototype.update = function(t) {
            if (void 0 !== t && console.warn("THREE.BoxHelper: .update() has no longer arguments."), void 0 !== this.object && Ou.setFromObject(this.object), !Ou.isEmpty()) {
                var e = Ou.min,
                    n = Ou.max,
                    i = this.geometry.attributes.position,
                    r = i.array;
                r[0] = n.x, r[1] = n.y, r[2] = n.z, r[3] = e.x, r[4] = n.y, r[5] = n.z, r[6] = e.x, r[7] = e.y, r[8] = n.z, r[9] = n.x, r[10] = e.y, r[11] = n.z, r[12] = n.x, r[13] = n.y, r[14] = e.z, r[15] = e.x, r[16] = n.y, r[17] = e.z, r[18] = e.x, r[19] = e.y, r[20] = e.z, r[21] = n.x, r[22] = e.y, r[23] = e.z, i.needsUpdate = !0, this.geometry.computeBoundingSphere()
            }
        }, Iu.prototype.setFromObject = function(t) {
            return this.object = t, this.update(), this
        }, Iu.prototype.copy = function(t) {
            return Ka.prototype.copy.call(this, t), this.object = t.object, this
        }, Iu.prototype.clone = function() {
            return (new this.constructor).copy(this)
        }, Du.prototype = Object.create(Ka.prototype), Du.prototype.constructor = Du, Du.prototype.updateMatrixWorld = function(t) {
            var e = this.box;
            e.isEmpty() || (e.getCenter(this.position), e.getSize(this.scale), this.scale.multiplyScalar(.5), dn.prototype.updateMatrixWorld.call(this, t))
        }, Nu.prototype = Object.create(Ya.prototype), Nu.prototype.constructor = Nu, Nu.prototype.updateMatrixWorld = function(t) {
            var e = -this.plane.constant;
            Math.abs(e) < 1e-8 && (e = 1e-8), this.scale.set(.5 * this.size, .5 * this.size, e), this.children[0].material.side = e < 0 ? c : s, this.lookAt(this.plane.normal), dn.prototype.updateMatrixWorld.call(this, t)
        };
        var Bu, Hu, Fu = new Ce;

        function ku(t, e, n, i, r, o) {
            dn.call(this), void 0 === t && (t = new Ce(0, 0, 1)), void 0 === e && (e = new Ce(0, 0, 0)), void 0 === n && (n = 1), void 0 === i && (i = 16776960), void 0 === r && (r = .2 * n), void 0 === o && (o = .2 * r), void 0 === Bu && ((Bu = new Si).addAttribute("position", new mi([0, 0, 0, 0, 1, 0], 3)), (Hu = new gc(0, .5, 1, 5, 1)).translate(0, -.5, 0)), this.position.copy(e), this.line = new Ya(Bu, new Ga({
                color: i
            })), this.line.matrixAutoUpdate = !1, this.add(this.line), this.cone = new Vi(Hu, new ai({
                color: i
            })), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(t), this.setLength(n, r, o)
        }

        function Uu(t) {
            var e = [0, 0, 0, t = t || 1, 0, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 0, t],
                n = new Si;
            n.addAttribute("position", new mi(e, 3)), n.addAttribute("color", new mi([1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1], 3));
            var i = new Ga({
                vertexColors: p
            });
            Ka.call(this, n, i)
        }

        function zu(t) {
            console.warn("THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."), ml.call(this, t), this.type = "catmullrom", this.closed = !0
        }

        function Gu(t) {
            console.warn("THREE.SplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."), ml.call(this, t), this.type = "catmullrom"
        }

        function ju(t) {
            console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."), ml.call(this, t), this.type = "catmullrom"
        }
        ku.prototype = Object.create(dn.prototype), ku.prototype.constructor = ku, ku.prototype.setDirection = function(t) {
            if (t.y > .99999) this.quaternion.set(0, 0, 0, 1);
            else if (t.y < -.99999) this.quaternion.set(1, 0, 0, 0);
            else {
                Fu.set(t.z, 0, -t.x).normalize();
                var e = Math.acos(t.y);
                this.quaternion.setFromAxisAngle(Fu, e)
            }
        }, ku.prototype.setLength = function(t, e, n) {
            void 0 === e && (e = .2 * t), void 0 === n && (n = .2 * e), this.line.scale.set(1, Math.max(1e-4, t - e), 1), this.line.updateMatrix(), this.cone.scale.set(n, e, n), this.cone.position.y = t, this.cone.updateMatrix()
        }, ku.prototype.setColor = function(t) {
            this.line.material.color.set(t), this.cone.material.color.set(t)
        }, ku.prototype.copy = function(t) {
            return dn.prototype.copy.call(this, t, !1), this.line.copy(t.line), this.cone.copy(t.cone), this
        }, ku.prototype.clone = function() {
            return (new this.constructor).copy(this)
        }, Uu.prototype = Object.create(Ka.prototype), Uu.prototype.constructor = Uu, sl.create = function(t, e) {
            return console.log("THREE.Curve.create() has been deprecated"), t.prototype = Object.create(sl.prototype), t.prototype.constructor = t, t.prototype.getPoint = e, t
        }, Object.assign(Al.prototype, {
            createPointsGeometry: function(t) {
                console.warn("THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
                var e = this.getPoints(t);
                return this.createGeometry(e)
            },
            createSpacedPointsGeometry: function(t) {
                console.warn("THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
                var e = this.getSpacedPoints(t);
                return this.createGeometry(e)
            },
            createGeometry: function(t) {
                console.warn("THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
                for (var e = new Ki, n = 0, i = t.length; n < i; n++) {
                    var r = t[n];
                    e.vertices.push(new Ce(r.x, r.y, r.z || 0))
                }
                return e
            }
        }), Object.assign(Pl.prototype, {
            fromPoints: function(t) {
                console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."), this.setFromPoints(t)
            }
        }), zu.prototype = Object.create(ml.prototype), Gu.prototype = Object.create(ml.prototype), ju.prototype = Object.create(ml.prototype), Object.assign(ju.prototype, {
            initFromArray: function() {
                console.error("THREE.Spline: .initFromArray() has been removed.")
            },
            getControlPointsArray: function() {
                console.error("THREE.Spline: .getControlPointsArray() has been removed.")
            },
            reparametrizeByArcLength: function() {
                console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")
            }
        }), gu.prototype.setColors = function() {
            console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")
        }, lu.prototype.update = function() {
            console.error("THREE.SkeletonHelper: update() no longer needs to be called.")
        }, Object.assign(Qc.prototype, {
            extractUrlBase: function(t) {
                return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."), jl.extractUrlBase(t)
            }
        }), Qc.Handlers = {
            add: function() {
                console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")
            },
            get: function() {
                console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")
            }
        }, Object.assign(Yl.prototype, {
            setTexturePath: function(t) {
                return console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."), this.setResourcePath(t)
            }
        }), Object.assign(Yh.prototype, {
            center: function(t) {
                return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."), this.getCenter(t)
            },
            empty: function() {
                return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."), this.isEmpty()
            },
            isIntersectionBox: function(t) {
                return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t)
            },
            size: function(t) {
                return console.warn("THREE.Box2: .size() has been renamed to .getSize()."), this.getSize(t)
            }
        }), Object.assign(An.prototype, {
            center: function(t) {
                return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."), this.getCenter(t)
            },
            empty: function() {
                return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."), this.isEmpty()
            },
            isIntersectionBox: function(t) {
                return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t)
            },
            isIntersectionSphere: function(t) {
                return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(t)
            },
            size: function(t) {
                return console.warn("THREE.Box3: .size() has been renamed to .getSize()."), this.getSize(t)
            }
        }), Kh.prototype.center = function(t) {
            return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."), this.getCenter(t)
        }, Object.assign(Se, {
            random16: function() {
                return console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead."), Math.random()
            },
            nearestPowerOfTwo: function(t) {
                return console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."), Se.floorPowerOfTwo(t)
            },
            nextPowerOfTwo: function(t) {
                return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."), Se.ceilPowerOfTwo(t)
            }
        }), Object.assign(De.prototype, {
            flattenToArrayOffset: function(t, e) {
                return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(t, e)
            },
            multiplyVector3: function(t) {
                return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), t.applyMatrix3(this)
            },
            multiplyVector3Array: function() {
                console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")
            },
            applyToBuffer: function(t) {
                return console.warn("THREE.Matrix3: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead."), this.applyToBufferAttribute(t)
            },
            applyToVector3Array: function() {
                console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")
            }
        }), Object.assign(Ye.prototype, {
            extractPosition: function(t) {
                return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(t)
            },
            flattenToArrayOffset: function(t, e) {
                return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(t, e)
            },
            getPosition: function() {
                return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."), (new Ce).setFromMatrixColumn(this, 3)
            },
            setRotationFromQuaternion: function(t) {
                return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."), this.makeRotationFromQuaternion(t)
            },
            multiplyToArray: function() {
                console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")
            },
            multiplyVector3: function(t) {
                return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this)
            },
            multiplyVector4: function(t) {
                return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this)
            },
            multiplyVector3Array: function() {
                console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")
            },
            rotateAxis: function(t) {
                console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."), t.transformDirection(this)
            },
            crossVector: function(t) {
                return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this)
            },
            translate: function() {
                console.error("THREE.Matrix4: .translate() has been removed.")
            },
            rotateX: function() {
                console.error("THREE.Matrix4: .rotateX() has been removed.")
            },
            rotateY: function() {
                console.error("THREE.Matrix4: .rotateY() has been removed.")
            },
            rotateZ: function() {
                console.error("THREE.Matrix4: .rotateZ() has been removed.")
            },
            rotateByAxis: function() {
                console.error("THREE.Matrix4: .rotateByAxis() has been removed.")
            },
            applyToBuffer: function(t) {
                return console.warn("THREE.Matrix4: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead."), this.applyToBufferAttribute(t)
            },
            applyToVector3Array: function() {
                console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")
            },
            makeFrustum: function(t, e, n, i, r, o) {
                return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."), this.makePerspective(t, e, i, n, r, o)
            }
        }), vr.prototype.isIntersectionLine = function(t) {
            return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."), this.intersectsLine(t)
        }, Pe.prototype.multiplyVector3 = function(t) {
            return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), t.applyQuaternion(this)
        }, Object.assign(Fn.prototype, {
            isIntersectionBox: function(t) {
                return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t)
            },
            isIntersectionPlane: function(t) {
                return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."), this.intersectsPlane(t)
            },
            isIntersectionSphere: function(t) {
                return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(t)
            }
        }), Object.assign(Zn.prototype, {
            area: function() {
                return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."), this.getArea()
            },
            barycoordFromPoint: function(t, e) {
                return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), this.getBarycoord(t, e)
            },
            midpoint: function(t) {
                return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."), this.getMidpoint(t)
            },
            normal: function(t) {
                return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), this.getNormal(t)
            },
            plane: function(t) {
                return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."), this.getPlane(t)
            }
        }), Object.assign(Zn, {
            barycoordFromPoint: function(t, e, n, i, r) {
                return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), Zn.getBarycoord(t, e, n, i, r)
            },
            normal: function(t, e, n, i) {
                return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), Zn.getNormal(t, e, n, i)
            }
        }), Object.assign(Ll.prototype, {
            extractAllPoints: function(t) {
                return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."), this.extractPoints(t)
            },
            extrude: function(t) {
                return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."), new tc(this, t)
            },
            makeGeometry: function(t) {
                return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."), new pc(this, t)
            }
        }), Object.assign(Ae.prototype, {
            fromAttribute: function(t, e, n) {
                return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, n)
            },
            distanceToManhattan: function(t) {
                return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(t)
            },
            lengthManhattan: function() {
                return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
            }
        }), Object.assign(Ce.prototype, {
            setEulerFromRotationMatrix: function() {
                console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")
            },
            setEulerFromQuaternion: function() {
                console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")
            },
            getPositionFromMatrix: function(t) {
                return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."), this.setFromMatrixPosition(t)
            },
            getScaleFromMatrix: function(t) {
                return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."), this.setFromMatrixScale(t)
            },
            getColumnFromMatrix: function(t, e) {
                return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."), this.setFromMatrixColumn(e, t)
            },
            applyProjection: function(t) {
                return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."), this.applyMatrix4(t)
            },
            fromAttribute: function(t, e, n) {
                return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, n)
            },
            distanceToManhattan: function(t) {
                return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(t)
            },
            lengthManhattan: function() {
                return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
            }
        }), Object.assign(Fe.prototype, {
            fromAttribute: function(t, e, n) {
                return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, n)
            },
            lengthManhattan: function() {
                return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
            }
        }), Object.assign(Ki.prototype, {
            computeTangents: function() {
                console.error("THREE.Geometry: .computeTangents() has been removed.")
            },
            computeLineDistances: function() {
                console.error("THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.")
            }
        }), Object.assign(dn.prototype, {
            getChildByName: function(t) {
                return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(t)
            },
            renderDepth: function() {
                console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")
            },
            translate: function(t, e) {
                return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."), this.translateOnAxis(e, t)
            },
            getWorldRotation: function() {
                console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")
            }
        }), Object.defineProperties(dn.prototype, {
            eulerOrder: {
                get: function() {
                    return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order
                },
                set: function(t) {
                    console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order = t
                }
            },
            useQuaternion: {
                get: function() {
                    console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
                },
                set: function() {
                    console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
                }
            }
        }), Object.defineProperties(Na.prototype, {
            objects: {
                get: function() {
                    return console.warn("THREE.LOD: .objects has been renamed to .levels."), this.levels
                }
            }
        }), Object.defineProperty(ka.prototype, "useVertexTexture", {
            get: function() {
                console.warn("THREE.Skeleton: useVertexTexture has been removed.")
            },
            set: function() {
                console.warn("THREE.Skeleton: useVertexTexture has been removed.")
            }
        }), Ba.prototype.initBones = function() {
            console.error("THREE.SkinnedMesh: initBones() has been removed.")
        }, Object.defineProperty(sl.prototype, "__arcLengthDivisions", {
            get: function() {
                return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."), this.arcLengthDivisions
            },
            set: function(t) {
                console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."), this.arcLengthDivisions = t
            }
        }), sr.prototype.setLens = function(t, e) {
            console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."), void 0 !== e && (this.filmGauge = e), this.setFocalLength(t)
        }, Object.defineProperties(Rl.prototype, {
            onlyShadow: {
                set: function() {
                    console.warn("THREE.Light: .onlyShadow has been removed.")
                }
            },
            shadowCameraFov: {
                set: function(t) {
                    console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."), this.shadow.camera.fov = t
                }
            },
            shadowCameraLeft: {
                set: function(t) {
                    console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."), this.shadow.camera.left = t
                }
            },
            shadowCameraRight: {
                set: function(t) {
                    console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."), this.shadow.camera.right = t
                }
            },
            shadowCameraTop: {
                set: function(t) {
                    console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."), this.shadow.camera.top = t
                }
            },
            shadowCameraBottom: {
                set: function(t) {
                    console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."), this.shadow.camera.bottom = t
                }
            },
            shadowCameraNear: {
                set: function(t) {
                    console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."), this.shadow.camera.near = t
                }
            },
            shadowCameraFar: {
                set: function(t) {
                    console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."), this.shadow.camera.far = t
                }
            },
            shadowCameraVisible: {
                set: function() {
                    console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")
                }
            },
            shadowBias: {
                set: function(t) {
                    console.warn("THREE.Light: .shadowBias is now .shadow.bias."), this.shadow.bias = t
                }
            },
            shadowDarkness: {
                set: function() {
                    console.warn("THREE.Light: .shadowDarkness has been removed.")
                }
            },
            shadowMapWidth: {
                set: function(t) {
                    console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."), this.shadow.mapSize.width = t
                }
            },
            shadowMapHeight: {
                set: function(t) {
                    console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."), this.shadow.mapSize.height = t
                }
            }
        }), Object.defineProperties(si.prototype, {
            length: {
                get: function() {
                    return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."), this.array.length
                }
            }
        }), Object.assign(si.prototype, {
            copyIndicesArray: function() {
                console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")
            },
            setArray: function(t) {
                return console.warn("THREE.BufferAttribute: .setArray has been deprecated. Use BufferGeometry .setAttribute to replace/resize attribute buffers"), this.count = void 0 !== t ? t.length / this.itemSize : 0, this.array = t, this
            }
        }), Object.assign(Si.prototype, {
            addIndex: function(t) {
                console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."), this.setIndex(t)
            },
            addDrawCall: function(t, e, n) {
                void 0 !== n && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."), console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."), this.addGroup(t, e)
            },
            clearDrawCalls: function() {
                console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."), this.clearGroups()
            },
            computeTangents: function() {
                console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")
            },
            computeOffsets: function() {
                console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")
            }
        }), Object.defineProperties(Si.prototype, {
            drawcalls: {
                get: function() {
                    return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."), this.groups
                }
            },
            offsets: {
                get: function() {
                    return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."), this.groups
                }
            }
        }), Object.assign(va.prototype, {
            setArray: function(t) {
                return console.warn("THREE.InterleavedBuffer: .setArray has been deprecated. Use BufferGeometry .setAttribute to replace/resize attribute buffers"), this.count = void 0 !== t ? t.length / this.stride : 0, this.array = t, this
            }
        }), Object.assign(ec.prototype, {
            getArrays: function() {
                console.error("THREE.ExtrudeBufferGeometry: .getArrays() has been removed.")
            },
            addShapeList: function() {
                console.error("THREE.ExtrudeBufferGeometry: .addShapeList() has been removed.")
            },
            addShape: function() {
                console.error("THREE.ExtrudeBufferGeometry: .addShape() has been removed.")
            }
        }), Object.defineProperties(Uh.prototype, {
            dynamic: {
                set: function() {
                    console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")
                }
            },
            onUpdate: {
                value: function() {
                    return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."), this
                }
            }
        }), Object.defineProperties(oi.prototype, {
            wrapAround: {
                get: function() {
                    console.warn("THREE.Material: .wrapAround has been removed.")
                },
                set: function() {
                    console.warn("THREE.Material: .wrapAround has been removed.")
                }
            },
            overdraw: {
                get: function() {
                    console.warn("THREE.Material: .overdraw has been removed.")
                },
                set: function() {
                    console.warn("THREE.Material: .overdraw has been removed.")
                }
            },
            wrapRGB: {
                get: function() {
                    return console.warn("THREE.Material: .wrapRGB has been removed."), new $n
                }
            },
            shading: {
                get: function() {
                    console.error("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.")
                },
                set: function(t) {
                    console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = 1 === t
                }
            },
            stencilMask: {
                get: function() {
                    return console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask
                },
                set: function(t) {
                    console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask = t
                }
            }
        }), Object.defineProperties(Ac.prototype, {
            metal: {
                get: function() {
                    return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."), !1
                },
                set: function() {
                    console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")
                }
            }
        }), Object.defineProperties(or.prototype, {
            derivatives: {
                get: function() {
                    return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives
                },
                set: function(t) {
                    console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives = t
                }
            }
        }), Object.assign(da.prototype, {
            clearTarget: function(t, e, n, i) {
                console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."), this.setRenderTarget(t), this.clear(e, n, i)
            },
            animate: function(t) {
                console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."), this.setAnimationLoop(t)
            },
            getCurrentRenderTarget: function() {
                return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."), this.getRenderTarget()
            },
            getMaxAnisotropy: function() {
                return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."), this.capabilities.getMaxAnisotropy()
            },
            getPrecision: function() {
                return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."), this.capabilities.precision
            },
            resetGLState: function() {
                return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."), this.state.reset()
            },
            supportsFloatTextures: function() {
                return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."), this.extensions.get("OES_texture_float")
            },
            supportsHalfFloatTextures: function() {
                return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."), this.extensions.get("OES_texture_half_float")
            },
            supportsStandardDerivatives: function() {
                return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."), this.extensions.get("OES_standard_derivatives")
            },
            supportsCompressedTextureS3TC: function() {
                return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."), this.extensions.get("WEBGL_compressed_texture_s3tc")
            },
            supportsCompressedTexturePVRTC: function() {
                return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."), this.extensions.get("WEBGL_compressed_texture_pvrtc")
            },
            supportsBlendMinMax: function() {
                return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."), this.extensions.get("EXT_blend_minmax")
            },
            supportsVertexTextures: function() {
                return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."), this.capabilities.vertexTextures
            },
            supportsInstancedArrays: function() {
                return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."), this.extensions.get("ANGLE_instanced_arrays")
            },
            enableScissorTest: function(t) {
                console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."), this.setScissorTest(t)
            },
            initMaterial: function() {
                console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")
            },
            addPrePlugin: function() {
                console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")
            },
            addPostPlugin: function() {
                console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")
            },
            updateShadowMap: function() {
                console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")
            },
            setFaceCulling: function() {
                console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")
            },
            allocTextureUnit: function() {
                console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")
            },
            setTexture: function() {
                console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")
            },
            setTexture2D: function() {
                console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")
            },
            setTextureCube: function() {
                console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")
            },
            getActiveMipMapLevel: function() {
                return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."), this.getActiveMipmapLevel()
            }
        }), Object.defineProperties(da.prototype, {
            shadowMapEnabled: {
                get: function() {
                    return this.shadowMap.enabled
                },
                set: function(t) {
                    console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."), this.shadowMap.enabled = t
                }
            },
            shadowMapType: {
                get: function() {
                    return this.shadowMap.type
                },
                set: function(t) {
                    console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."), this.shadowMap.type = t
                }
            },
            shadowMapCullFace: {
                get: function() {
                    console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")
                },
                set: function() {
                    console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")
                }
            },
            context: {
                get: function() {
                    return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."), this.getContext()
                }
            }
        }), Object.defineProperties(ta.prototype, {
            cullFace: {
                get: function() {
                    console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")
                },
                set: function() {
                    console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")
                }
            },
            renderReverseSided: {
                get: function() {
                    console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")
                },
                set: function() {
                    console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")
                }
            },
            renderSingleSided: {
                get: function() {
                    console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")
                },
                set: function() {
                    console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")
                }
            }
        }), Object.defineProperties(ur.prototype, {
            activeCubeFace: {
                set: function() {
                    console.warn("THREE.WebGLRenderTargetCube: .activeCubeFace has been removed. It is now the second parameter of WebGLRenderer.setRenderTarget().")
                }
            },
            activeMipMapLevel: {
                set: function() {
                    console.warn("THREE.WebGLRenderTargetCube: .activeMipMapLevel has been removed. It is now the third parameter of WebGLRenderer.setRenderTarget().")
                }
            }
        }), Object.defineProperties(ke.prototype, {
            wrapS: {
                get: function() {
                    return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS
                },
                set: function(t) {
                    console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS = t
                }
            },
            wrapT: {
                get: function() {
                    return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT
                },
                set: function(t) {
                    console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT = t
                }
            },
            magFilter: {
                get: function() {
                    return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter
                },
                set: function(t) {
                    console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter = t
                }
            },
            minFilter: {
                get: function() {
                    return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter
                },
                set: function(t) {
                    console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter = t
                }
            },
            anisotropy: {
                get: function() {
                    return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy
                },
                set: function(t) {
                    console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy = t
                }
            },
            offset: {
                get: function() {
                    return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset
                },
                set: function(t) {
                    console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset = t
                }
            },
            repeat: {
                get: function() {
                    return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat
                },
                set: function(t) {
                    console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat = t
                }
            },
            format: {
                get: function() {
                    return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format
                },
                set: function(t) {
                    console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format = t
                }
            },
            type: {
                get: function() {
                    return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type
                },
                set: function(t) {
                    console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type = t
                }
            },
            generateMipmaps: {
                get: function() {
                    return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps
                },
                set: function(t) {
                    console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps = t
                }
            }
        }), Object.defineProperties(ua.prototype, {
            standing: {
                set: function() {
                    console.warn("THREE.WebVRManager: .standing has been removed.")
                }
            },
            userHeight: {
                set: function() {
                    console.warn("THREE.WebVRManager: .userHeight has been removed.")
                }
            }
        }), _h.prototype.load = function(t) {
            console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");
            var e = this,
                n = new oh;
            return n.load(t, function(t) {
                e.setBuffer(t)
            }), this
        }, Eh.prototype.getData = function() {
            return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."), this.getFrequencyData()
        }, hr.prototype.updateCubeMap = function(t, e) {
            return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."), this.update(t, e)
        };
        var Vu = {
            merge: function(t, e, n) {
                var i;
                console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead."), e.isMesh && (e.matrixAutoUpdate && e.updateMatrix(), i = e.matrix, e = e.geometry), t.merge(e, i, n)
            },
            center: function(t) {
                return console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead."), t.center()
            }
        };
        Ne.crossOrigin = void 0, Ne.loadTexture = function(t, e, n, i) {
            console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
            var r = new al;
            r.setCrossOrigin(this.crossOrigin);
            var o = r.load(t, n, void 0, i);
            return e && (o.mapping = e), o
        }, Ne.loadTextureCube = function(t, e, n, i) {
            console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
            var r = new ol;
            r.setCrossOrigin(this.crossOrigin);
            var o = r.load(t, n, void 0, i);
            return e && (o.mapping = e), o
        }, Ne.loadCompressedTexture = function() {
            console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")
        }, Ne.loadCompressedTextureCube = function() {
            console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")
        };
        var Wu = {
            createMultiMaterialObject: function() {
                console.error("THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js")
            },
            detach: function() {
                console.error("THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js")
            },
            attach: function() {
                console.error("THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js")
            }
        };
        "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", {
            detail: {
                revision: "109"
            }
        })), t.ACESFilmicToneMapping = K, t.AddEquation = _, t.AddOperation = W, t.AdditiveBlending = m, t.AlphaFormat = St, t.AlwaysDepth = B, t.AlwaysStencilFunc = we, t.AmbientLight = Ul, t.AmbientLightProbe = lh, t.AnimationClip = qc, t.AnimationLoader = el, t.AnimationMixer = kh, t.AnimationObjectGroup = Hh, t.AnimationUtils = Dc, t.ArcCurve = ll, t.ArrayCamera = aa, t.ArrowHelper = ku, t.Audio = _h, t.AudioAnalyser = Eh, t.AudioContext = rh, t.AudioListener = yh, t.AudioLoader = oh, t.AxesHelper = Uu, t.AxisHelper = function(t) {
            return console.warn("THREE.AxisHelper has been renamed to THREE.AxesHelper."), new Uu(t)
        }, t.BackSide = c, t.BasicDepthPacking = ge, t.BasicShadowMap = 0, t.BinaryTextureLoader = function(t) {
            return console.warn("THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader."), new il(t)
        }, t.Bone = Ua, t.BooleanKeyframeTrack = Uc, t.BoundingBoxHelper = function(t, e) {
            return console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead."), new Iu(t, e)
        }, t.Box2 = Yh, t.Box3 = An, t.Box3Helper = Du, t.BoxBufferGeometry = $i, t.BoxGeometry = Qi, t.BoxHelper = Iu, t.BufferAttribute = si, t.BufferGeometry = Si, t.BufferGeometryLoader = Xl, t.ByteType = mt, t.Cache = Zc, t.Camera = ar, t.CameraHelper = Ru, t.CanvasRenderer = function() {
            console.error("THREE.CanvasRenderer has been removed")
        }, t.CanvasTexture = cs, t.CatmullRomCurve3 = ml, t.CineonToneMapping = J, t.CircleBufferGeometry = bc, t.CircleGeometry = xc, t.ClampToEdgeWrapping = at, t.Clock = dh, t.ClosedSplineCurve3 = zu, t.Color = $n, t.ColorKeyframeTrack = zc, t.CompressedTexture = ss, t.CompressedTextureLoader = nl, t.ConeBufferGeometry = _c, t.ConeGeometry = yc, t.CubeCamera = hr, t.CubeGeometry = Qi, t.CubeReflectionMapping = Q, t.CubeRefractionMapping = $, t.CubeTexture = Pr, t.CubeTextureLoader = ol, t.CubeUVReflectionMapping = it, t.CubeUVRefractionMapping = rt, t.CubicBezierCurve = _l, t.CubicBezierCurve3 = xl, t.CubicInterpolant = Bc, t.CullFaceBack = n, t.CullFaceFront = i, t.CullFaceFrontBack = 3, t.CullFaceNone = e, t.Curve = sl, t.CurvePath = Al, t.CustomBlending = y, t.CylinderBufferGeometry = gc, t.CylinderGeometry = vc, t.Cylindrical = Xh, t.DataTexture = pr, t.DataTexture2DArray = Lr, t.DataTexture3D = Rr, t.DataTextureLoader = il, t.DecrementStencilOp = 7683, t.DecrementWrapStencilOp = 34056, t.DefaultLoadingManager = Kc, t.DepthFormat = Ot, t.DepthStencilFormat = It, t.DepthTexture = ls, t.DirectionalLight = kl, t.DirectionalLightHelper = Au, t.DirectionalLightShadow = Fl, t.DiscreteInterpolant = Fc, t.DodecahedronBufferGeometry = ws, t.DodecahedronGeometry = bs, t.DoubleSide = l, t.DstAlphaFactor = R, t.DstColorFactor = O, t.DynamicBufferAttribute = function(t, e) {
            return console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead."), new si(t, e).setDynamic(!0)
        }, t.EdgesGeometry = mc, t.EdgesHelper = function(t, e) {
            return console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead."), new Ka(new mc(t.geometry), new Ga({
                color: void 0 !== e ? e : 16777215
            }))
        }, t.EllipseCurve = cl, t.EqualDepth = k, t.EqualStencilFunc = 514, t.EquirectangularReflectionMapping = tt, t.EquirectangularRefractionMapping = et, t.Euler = Ke, t.EventDispatcher = Me, t.ExtrudeBufferGeometry = ec, t.ExtrudeGeometry = tc, t.Face3 = ii, t.Face4 = function(t, e, n, i, r, o, a) {
            return console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead."), new ii(t, e, n, r, o, a)
        }, t.FaceColors = u, t.FaceNormalsHelper = Mu, t.FileLoader = tl, t.FlatShading = 1, t.Float32Attribute = function(t, e) {
            return console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead."), new mi(t, e)
        }, t.Float32BufferAttribute = mi, t.Float64Attribute = function(t, e) {
            return console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead."), new vi(t, e)
        }, t.Float64BufferAttribute = vi, t.FloatType = xt, t.Fog = ma, t.FogExp2 = fa, t.Font = eh, t.FontLoader = ih, t.FrontFaceDirectionCCW = 1, t.FrontFaceDirectionCW = 0, t.FrontSide = s, t.Frustum = _r, t.GammaEncoding = ue, t.Geometry = Ki, t.GeometryUtils = Vu, t.GreaterDepth = z, t.GreaterEqualDepth = U, t.GreaterEqualStencilFunc = 518, t.GreaterStencilFunc = 516, t.GridHelper = gu, t.Group = oa, t.HalfFloatType = bt, t.HemisphereLight = Cl, t.HemisphereLightHelper = mu, t.HemisphereLightProbe = ch, t.IcosahedronBufferGeometry = xs, t.IcosahedronGeometry = _s, t.ImageBitmapLoader = $l, t.ImageLoader = rl, t.ImageUtils = Ne, t.ImmediateRenderObject = Qh, t.IncrementStencilOp = 7682, t.IncrementWrapStencilOp = 34055, t.InstancedBufferAttribute = Wl, t.InstancedBufferGeometry = Vl, t.InstancedInterleavedBuffer = zh, t.InstancedMesh = za, t.Int16Attribute = function(t, e) {
            return console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead."), new ui(t, e)
        }, t.Int16BufferAttribute = ui, t.Int32Attribute = function(t, e) {
            return console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead."), new di(t, e)
        }, t.Int32BufferAttribute = di, t.Int8Attribute = function(t, e) {
            return console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead."), new ci(t, e)
        }, t.Int8BufferAttribute = ci, t.IntType = yt, t.InterleavedBuffer = va, t.InterleavedBufferAttribute = ga, t.Interpolant = Nc, t.InterpolateDiscrete = 2300, t.InterpolateLinear = 2301, t.InterpolateSmooth = 2302, t.InvertStencilOp = 5386, t.JSONLoader = function() {
            console.error("THREE.JSONLoader has been removed.")
        }, t.KeepStencilOp = be, t.KeyframeTrack = kc, t.LOD = Na, t.LatheBufferGeometry = uc, t.LatheGeometry = hc, t.Layers = Qe, t.LensFlare = function() {
            console.error("THREE.LensFlare has been moved to /examples/js/objects/Lensflare.js")
        }, t.LessDepth = H, t.LessEqualDepth = F, t.LessEqualStencilFunc = 515, t.LessStencilFunc = 513, t.Light = Rl, t.LightProbe = sh, t.LightProbeHelper = vu, t.LightShadow = Ol, t.Line = Ya, t.Line3 = Kh, t.LineBasicMaterial = Ga, t.LineCurve = bl, t.LineCurve3 = wl, t.LineDashedMaterial = Oc, t.LineLoop = Qa, t.LinePieces = 1, t.LineSegments = Ka, t.LineStrip = 0, t.LinearEncoding = le, t.LinearFilter = ut, t.LinearInterpolant = Hc, t.LinearMipMapLinearFilter = 1008, t.LinearMipMapNearestFilter = 1007, t.LinearMipmapLinearFilter = dt, t.LinearMipmapNearestFilter = pt, t.LinearToneMapping = q, t.Loader = Qc, t.LoaderUtils = jl, t.LoadingManager = Jc, t.LogLuvEncoding = de, t.LoopOnce = 2200, t.LoopPingPong = 2202, t.LoopRepeat = re, t.LuminanceAlphaFormat = Rt, t.LuminanceFormat = Lt, t.MOUSE = {
            LEFT: 0,
            MIDDLE: 1,
            RIGHT: 2,
            ROTATE: 0,
            DOLLY: 1,
            PAN: 2
        }, t.Material = oi, t.MaterialLoader = Gl, t.Math = Se, t.Matrix3 = De, t.Matrix4 = Ye, t.MaxEquation = M, t.Mesh = Vi, t.MeshBasicMaterial = ai, t.MeshDepthMaterial = Jo, t.MeshDistanceMaterial = Ko, t.MeshFaceMaterial = function(t) {
            return console.warn("THREE.MeshFaceMaterial has been removed. Use an Array instead."), t
        }, t.MeshLambertMaterial = Rc, t.MeshMatcapMaterial = Cc, t.MeshNormalMaterial = Lc, t.MeshPhongMaterial = Ac, t.MeshPhysicalMaterial = Sc, t.MeshStandardMaterial = Ec, t.MeshToonMaterial = Pc, t.MinEquation = w, t.MirroredRepeatWrapping = st, t.MixOperation = V, t.MultiMaterial = function(t) {
            return void 0 === t && (t = []), console.warn("THREE.MultiMaterial has been removed. Use an Array instead."), t.isMultiMaterial = !0, t.materials = t, t.clone = function() {
                return t.slice()
            }, t
        }, t.MultiplyBlending = g, t.MultiplyOperation = j, t.NearestFilter = ct, t.NearestMipMapLinearFilter = 1005, t.NearestMipMapNearestFilter = 1004, t.NearestMipmapLinearFilter = ht, t.NearestMipmapNearestFilter = lt, t.NeverDepth = N, t.NeverStencilFunc = 512, t.NoBlending = d, t.NoColors = h, t.NoToneMapping = X, t.NormalBlending = f, t.NotEqualDepth = G, t.NotEqualStencilFunc = 517, t.NumberKeyframeTrack = Gc, t.Object3D = dn, t.ObjectLoader = Yl, t.ObjectSpaceNormalMap = xe, t.OctahedronBufferGeometry = ys, t.OctahedronGeometry = gs, t.OneFactor = E, t.OneMinusDstAlphaFactor = C, t.OneMinusDstColorFactor = I, t.OneMinusSrcAlphaFactor = L, t.OneMinusSrcColorFactor = A, t.OrthographicCamera = Hl, t.PCFShadowMap = r, t.PCFSoftShadowMap = o, t.ParametricBufferGeometry = ps, t.ParametricGeometry = us, t.Particle = function(t) {
            return console.warn("THREE.Particle has been renamed to THREE.Sprite."), new Ca(t)
        }, t.ParticleBasicMaterial = function(t) {
            return console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."), new $a(t)
        }, t.ParticleSystem = function(t, e) {
            return console.warn("THREE.ParticleSystem has been renamed to THREE.Points."), new rs(t, e)
        }, t.ParticleSystemMaterial = function(t) {
            return console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."), new $a(t)
        }, t.Path = Pl, t.PerspectiveCamera = sr, t.Plane = vr, t.PlaneBufferGeometry = Sr, t.PlaneGeometry = Er, t.PlaneHelper = Nu, t.PointCloud = function(t, e) {
            return console.warn("THREE.PointCloud has been renamed to THREE.Points."), new rs(t, e)
        }, t.PointCloudMaterial = function(t) {
            return console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."), new $a(t)
        }, t.PointLight = Bl, t.PointLightHelper = hu, t.Points = rs, t.PointsMaterial = $a, t.PolarGridHelper = yu, t.PolyhedronBufferGeometry = fs, t.PolyhedronGeometry = ds, t.PositionalAudio = Th, t.PositionalAudioHelper = _u, t.PropertyBinding = Bh, t.PropertyMixer = Sh, t.QuadraticBezierCurve = Ml, t.QuadraticBezierCurve3 = Tl, t.Quaternion = Pe, t.QuaternionKeyframeTrack = Vc, t.QuaternionLinearInterpolant = jc, t.REVISION = "109", t.RGBADepthPacking = ye, t.RGBAFormat = Pt, t.RGBA_ASTC_10x10_Format = ee, t.RGBA_ASTC_10x5_Format = Qt, t.RGBA_ASTC_10x6_Format = $t, t.RGBA_ASTC_10x8_Format = te, t.RGBA_ASTC_12x10_Format = ne, t.RGBA_ASTC_12x12_Format = ie, t.RGBA_ASTC_4x4_Format = Vt, t.RGBA_ASTC_5x4_Format = Wt, t.RGBA_ASTC_5x5_Format = Xt, t.RGBA_ASTC_6x5_Format = qt, t.RGBA_ASTC_6x6_Format = Yt, t.RGBA_ASTC_8x5_Format = Zt, t.RGBA_ASTC_8x6_Format = Jt, t.RGBA_ASTC_8x8_Format = Kt, t.RGBA_PVRTC_2BPPV1_Format = Gt, t.RGBA_PVRTC_4BPPV1_Format = zt, t.RGBA_S3TC_DXT1_Format = Bt, t.RGBA_S3TC_DXT3_Format = Ht, t.RGBA_S3TC_DXT5_Format = Ft, t.RGBDEncoding = ve, t.RGBEEncoding = pe, t.RGBEFormat = Ct, t.RGBFormat = At, t.RGBM16Encoding = me, t.RGBM7Encoding = fe, t.RGB_ETC1_Format = jt, t.RGB_PVRTC_2BPPV1_Format = Ut, t.RGB_PVRTC_4BPPV1_Format = kt, t.RGB_S3TC_DXT1_Format = Nt, t.RawShaderMaterial = Tc, t.Ray = Fn, t.Raycaster = Gh, t.RectAreaLight = zl, t.RectAreaLightHelper = uu, t.RedFormat = Dt, t.ReinhardToneMapping = Y, t.RepeatWrapping = ot, t.ReplaceStencilOp = 7681, t.ReverseSubtractEquation = b, t.RingBufferGeometry = lc, t.RingGeometry = cc, t.Scene = fn, t.SceneUtils = Wu, t.ShaderChunk = xr, t.ShaderLib = wr, t.ShaderMaterial = or, t.ShadowMaterial = Mc, t.Shape = Ll, t.ShapeBufferGeometry = dc, t.ShapeGeometry = pc, t.ShapePath = th, t.ShapeUtils = Ks, t.ShortType = vt, t.Skeleton = ka, t.SkeletonHelper = lu, t.SkinnedMesh = Ba, t.SmoothShading = 2, t.Sphere = Rn, t.SphereBufferGeometry = sc, t.SphereGeometry = ac, t.Spherical = Wh, t.SphericalHarmonics3 = ah, t.SphericalReflectionMapping = nt, t.Spline = ju, t.SplineCurve = El, t.SplineCurve3 = Gu, t.SpotLight = Dl, t.SpotLightHelper = ou, t.SpotLightShadow = Il, t.Sprite = Ca, t.SpriteMaterial = ya, t.SrcAlphaFactor = P, t.SrcAlphaSaturateFactor = D, t.SrcColorFactor = S, t.StereoCamera = ph, t.StringKeyframeTrack = Wc, t.SubtractEquation = x, t.SubtractiveBlending = v, t.TOUCH = {
            ROTATE: 0,
            PAN: 1,
            DOLLY_PAN: 2,
            DOLLY_ROTATE: 3
        }, t.TangentSpaceNormalMap = _e, t.TetrahedronBufferGeometry = vs, t.TetrahedronGeometry = ms, t.TextBufferGeometry = oc, t.TextGeometry = rc, t.Texture = He, t.TextureLoader = al, t.TorusBufferGeometry = Ps, t.TorusGeometry = As, t.TorusKnotBufferGeometry = Ss, t.TorusKnotGeometry = Es, t.Triangle = Zn, t.TriangleFanDrawMode = ce, t.TriangleStripDrawMode = se, t.TrianglesDrawMode = ae, t.TubeBufferGeometry = Ts, t.TubeGeometry = Ms, t.UVMapping = 300, t.Uint16Attribute = function(t, e) {
            return console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead."), new pi(t, e)
        }, t.Uint16BufferAttribute = pi, t.Uint32Attribute = function(t, e) {
            return console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead."), new fi(t, e)
        }, t.Uint32BufferAttribute = fi, t.Uint8Attribute = function(t, e) {
            return console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead."), new li(t, e)
        }, t.Uint8BufferAttribute = li, t.Uint8ClampedAttribute = function(t, e) {
            return console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead."), new hi(t, e)
        }, t.Uint8ClampedBufferAttribute = hi, t.Uncharted2ToneMapping = Z, t.Uniform = Uh, t.UniformsLib = br, t.UniformsUtils = nr, t.UnsignedByteType = ft, t.UnsignedInt248Type = Et, t.UnsignedIntType = _t, t.UnsignedShort4444Type = wt, t.UnsignedShort5551Type = Mt, t.UnsignedShort565Type = Tt, t.UnsignedShortType = gt, t.VSMShadowMap = a, t.Vector2 = Ae, t.Vector3 = Ce, t.Vector4 = Fe, t.VectorKeyframeTrack = Xc, t.Vertex = function(t, e, n) {
            return console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead."), new Ce(t, e, n)
        }, t.VertexColors = p, t.VertexNormalsHelper = iu, t.VideoTexture = as, t.WebGLMultisampleRenderTarget = Ue, t.WebGLRenderTarget = ke, t.WebGLRenderTargetCube = ur, t.WebGLRenderer = da, t.WebGLUtils = na, t.WireframeGeometry = hs, t.WireframeHelper = function(t, e) {
            return console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead."), new Ka(new hs(t.geometry), new Ga({
                color: void 0 !== e ? e : 16777215
            }))
        }, t.WrapAroundEnding = 2402, t.XHRLoader = function(t) {
            return console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader."), new tl(t)
        }, t.ZeroCurvatureEnding = oe, t.ZeroFactor = T, t.ZeroSlopeEnding = 2401, t.ZeroStencilOp = 0, t.sRGBEncoding = he, Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }(e)
}
