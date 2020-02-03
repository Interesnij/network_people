function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }();

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        var o = function() {
            function t(e, n, i) {
                void 0 === n && (n = !1), r(this, t), this._fn = e, this._once = n, this._thisArg = i, this._next = this._prev = this._owner = null
            }
            return i(t, [{
                key: "detach",
                value: function() {
                    return null !== this._owner && (this._owner.detach(this), !0)
                }
            }]), t
        }();

        function a(t, e) {
            return t._head ? (t._tail._next = e, e._prev = t._tail, t._tail = e) : (t._head = e, t._tail = e), e._owner = t, e
        }
        var s = function() {
            function t() {
                r(this, t), this._head = this._tail = void 0
            }
            return i(t, [{
                key: "handlers",
                value: function() {
                    var t = !(arguments.length <= 0 || void 0 === arguments[0]) && arguments[0],
                        e = this._head;
                    if (t) return !!e;
                    for (var n = []; e;) n.push(e), e = e._next;
                    return n
                }
            }, {
                key: "has",
                value: function(t) {
                    if (!(t instanceof o)) throw new Error("MiniSignal#has(): First arg must be a MiniSignalBinding object.");
                    return t._owner === this
                }
            }, {
                key: "dispatch",
                value: function() {
                    var t = this._head;
                    if (!t) return !1;
                    for (; t;) t._once && this.detach(t), t._fn.apply(t._thisArg, arguments), t = t._next;
                    return !0
                }
            }, {
                key: "add",
                value: function(t) {
                    var e = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1];
                    if ("function" != typeof t) throw new Error("MiniSignal#add(): First arg must be a Function.");
                    return a(this, new o(t, !1, e))
                }
            }, {
                key: "once",
                value: function(t) {
                    var e = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1];
                    if ("function" != typeof t) throw new Error("MiniSignal#once(): First arg must be a Function.");
                    return a(this, new o(t, !0, e))
                }
            }, {
                key: "detach",
                value: function(t) {
                    if (!(t instanceof o)) throw new Error("MiniSignal#detach(): First arg must be a MiniSignalBinding object.");
                    return t._owner !== this ? this : (t._prev && (t._prev._next = t._next), t._next && (t._next._prev = t._prev), t === this._head ? (this._head = t._next, null === t._next && (this._tail = null)) : t === this._tail && (this._tail = t._prev, this._tail._next = null), t._owner = null, this)
                }
            }, {
                key: "detachAll",
                value: function() {
                    var t = this._head;
                    if (!t) return this;
                    for (this._head = this._tail = null; t;) t._owner = null, t = t._next;
                    return this
                }
            }]), t
        }();
        s.MiniSignalBinding = o, e.default = s, t.exports = e.default
    }, function(t, e, n) {
        "use strict";
        t.exports = function(t, e) {
            e = e || {};
            for (var n = {
                    key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
                    q: {
                        name: "queryKey",
                        parser: /(?:^|&)([^&=]*)=?([^&]*)/g
                    },
                    parser: {
                        strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                        loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
                    }
                }, i = n.parser[e.strictMode ? "strict" : "loose"].exec(t), r = {}, o = 14; o--;) r[n.key[o]] = i[o] || "";
            return r[n.q.name] = {}, r[n.key[12]].replace(n.q.parser, function(t, e, i) {
                e && (r[n.q.name][e] = i)
            }), r
        }
    }, function(t, e, n) {
        ! function(t) {
            "use strict";

            function e() {}
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
            }), Object.assign(e.prototype, {
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
            var n = "97",
                i = 0,
                r = 1,
                o = 2,
                a = 1,
                s = 2,
                c = 0,
                l = 1,
                h = 2,
                u = 0,
                p = 1,
                d = 2,
                f = 0,
                m = 1,
                v = 2,
                g = 3,
                y = 4,
                _ = 5,
                x = 100,
                b = 101,
                w = 102,
                M = 103,
                T = 104,
                E = 200,
                S = 201,
                A = 202,
                P = 203,
                L = 204,
                R = 205,
                C = 206,
                O = 207,
                I = 208,
                D = 209,
                N = 210,
                B = 0,
                H = 1,
                F = 2,
                k = 3,
                U = 4,
                z = 5,
                G = 6,
                j = 7,
                V = 0,
                W = 1,
                X = 2,
                q = 0,
                Y = 1,
                Z = 2,
                J = 3,
                K = 4,
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
                de = 3004,
                fe = 3005,
                me = 3006,
                ve = 3200,
                ge = 3201,
                ye = 0,
                _e = 1,
                xe = {
                    DEG2RAD: Math.PI / 180,
                    RAD2DEG: 180 / Math.PI,
                    generateUUID: function() {
                        for (var t = [], e = 0; e < 256; e++) t[e] = (e < 16 ? "0" : "") + e.toString(16);
                        return function() {
                            var e = 4294967295 * Math.random() | 0,
                                n = 4294967295 * Math.random() | 0,
                                i = 4294967295 * Math.random() | 0,
                                r = 4294967295 * Math.random() | 0,
                                o = t[255 & e] + t[e >> 8 & 255] + t[e >> 16 & 255] + t[e >> 24 & 255] + "-" + t[255 & n] + t[n >> 8 & 255] + "-" + t[n >> 16 & 15 | 64] + t[n >> 24 & 255] + "-" + t[63 & i | 128] + t[i >> 8 & 255] + "-" + t[i >> 16 & 255] + t[i >> 24 & 255] + t[255 & r] + t[r >> 8 & 255] + t[r >> 16 & 255] + t[r >> 24 & 255];
                            return o.toUpperCase()
                        }
                    }(),
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
                        return t * xe.DEG2RAD
                    },
                    radToDeg: function(t) {
                        return t * xe.RAD2DEG
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

            function be(t, e) {
                this.x = t || 0, this.y = e || 0
            }

            function we() {
                this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
            }

            function Me(t, e, n, i) {
                this._x = t || 0, this._y = e || 0, this._z = n || 0, this._w = void 0 !== i ? i : 1
            }

            function Te(t, e, n) {
                this.x = t || 0, this.y = e || 0, this.z = n || 0
            }

            function Ee() {
                this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
            }
            Object.defineProperties(be.prototype, {
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
            }), Object.assign(be.prototype, {
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
                clampScalar: function() {
                    var t = new be,
                        e = new be;
                    return function(n, i) {
                        return t.set(n, n), e.set(i, i), this.clamp(t, e)
                    }
                }(),
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
            }), Object.assign(we.prototype, {
                isMatrix4: !0,
                set: function(t, e, n, i, r, o, a, s, c, l, h, u, p, d, f, m) {
                    var v = this.elements;
                    return v[0] = t, v[4] = e, v[8] = n, v[12] = i, v[1] = r, v[5] = o, v[9] = a, v[13] = s, v[2] = c, v[6] = l, v[10] = h, v[14] = u, v[3] = p, v[7] = d, v[11] = f, v[15] = m, this
                },
                identity: function() {
                    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
                },
                clone: function() {
                    return (new we).fromArray(this.elements)
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
                extractRotation: function() {
                    var t = new Te;
                    return function(e) {
                        var n = this.elements,
                            i = e.elements,
                            r = 1 / t.setFromMatrixColumn(e, 0).length(),
                            o = 1 / t.setFromMatrixColumn(e, 1).length(),
                            a = 1 / t.setFromMatrixColumn(e, 2).length();
                        return n[0] = i[0] * r, n[1] = i[1] * r, n[2] = i[2] * r, n[3] = 0, n[4] = i[4] * o, n[5] = i[5] * o, n[6] = i[6] * o, n[7] = 0, n[8] = i[8] * a, n[9] = i[9] * a, n[10] = i[10] * a, n[11] = 0, n[12] = 0, n[13] = 0, n[14] = 0, n[15] = 1, this
                    }
                }(),
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
                makeRotationFromQuaternion: function() {
                    var t = new Te(0, 0, 0),
                        e = new Te(1, 1, 1);
                    return function(n) {
                        return this.compose(t, n, e)
                    }
                }(),
                lookAt: function() {
                    var t = new Te,
                        e = new Te,
                        n = new Te;
                    return function(i, r, o) {
                        var a = this.elements;
                        return n.subVectors(i, r), 0 === n.lengthSq() && (n.z = 1), n.normalize(), t.crossVectors(o, n), 0 === t.lengthSq() && (1 === Math.abs(o.z) ? n.x += 1e-4 : n.z += 1e-4, n.normalize(), t.crossVectors(o, n)), t.normalize(), e.crossVectors(n, t), a[0] = t.x, a[4] = e.x, a[8] = n.x, a[1] = t.y, a[5] = e.y, a[9] = n.y, a[2] = t.z, a[6] = e.z, a[10] = n.z, this
                    }
                }(),
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
                applyToBufferAttribute: function() {
                    var t = new Te;
                    return function(e) {
                        for (var n = 0, i = e.count; n < i; n++) t.x = e.getX(n), t.y = e.getY(n), t.z = e.getZ(n), t.applyMatrix4(this), e.setXYZ(n, t.x, t.y, t.z);
                        return e
                    }
                }(),
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
                setPosition: function(t) {
                    var e = this.elements;
                    return e[12] = t.x, e[13] = t.y, e[14] = t.z, this
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
                decompose: function() {
                    var t = new Te,
                        e = new we;
                    return function(n, i, r) {
                        var o = this.elements,
                            a = t.set(o[0], o[1], o[2]).length(),
                            s = t.set(o[4], o[5], o[6]).length(),
                            c = t.set(o[8], o[9], o[10]).length(),
                            l = this.determinant();
                        l < 0 && (a = -a), n.x = o[12], n.y = o[13], n.z = o[14], e.copy(this);
                        var h = 1 / a,
                            u = 1 / s,
                            p = 1 / c;
                        return e.elements[0] *= h, e.elements[1] *= h, e.elements[2] *= h, e.elements[4] *= u, e.elements[5] *= u, e.elements[6] *= u, e.elements[8] *= p, e.elements[9] *= p, e.elements[10] *= p, i.setFromRotationMatrix(e), r.x = a, r.y = s, r.z = c, this
                    }
                }(),
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
            }), Object.assign(Me, {
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
            }), Object.defineProperties(Me.prototype, {
                x: {
                    get: function() {
                        return this._x
                    },
                    set: function(t) {
                        this._x = t, this.onChangeCallback()
                    }
                },
                y: {
                    get: function() {
                        return this._y
                    },
                    set: function(t) {
                        this._y = t, this.onChangeCallback()
                    }
                },
                z: {
                    get: function() {
                        return this._z
                    },
                    set: function(t) {
                        this._z = t, this.onChangeCallback()
                    }
                },
                w: {
                    get: function() {
                        return this._w
                    },
                    set: function(t) {
                        this._w = t, this.onChangeCallback()
                    }
                }
            }), Object.assign(Me.prototype, {
                isQuaternion: !0,
                set: function(t, e, n, i) {
                    return this._x = t, this._y = e, this._z = n, this._w = i, this.onChangeCallback(), this
                },
                clone: function() {
                    return new this.constructor(this._x, this._y, this._z, this._w)
                },
                copy: function(t) {
                    return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this.onChangeCallback(), this
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
                    return "XYZ" === o ? (this._x = u * l * h + c * p * d, this._y = c * p * h - u * l * d, this._z = c * l * d + u * p * h, this._w = c * l * h - u * p * d) : "YXZ" === o ? (this._x = u * l * h + c * p * d, this._y = c * p * h - u * l * d, this._z = c * l * d - u * p * h, this._w = c * l * h + u * p * d) : "ZXY" === o ? (this._x = u * l * h - c * p * d, this._y = c * p * h + u * l * d, this._z = c * l * d + u * p * h, this._w = c * l * h - u * p * d) : "ZYX" === o ? (this._x = u * l * h - c * p * d, this._y = c * p * h + u * l * d, this._z = c * l * d - u * p * h, this._w = c * l * h + u * p * d) : "YZX" === o ? (this._x = u * l * h + c * p * d, this._y = c * p * h + u * l * d, this._z = c * l * d - u * p * h, this._w = c * l * h - u * p * d) : "XZY" === o && (this._x = u * l * h - c * p * d, this._y = c * p * h - u * l * d, this._z = c * l * d + u * p * h, this._w = c * l * h + u * p * d), !1 !== e && this.onChangeCallback(), this
                },
                setFromAxisAngle: function(t, e) {
                    var n = e / 2,
                        i = Math.sin(n);
                    return this._x = t.x * i, this._y = t.y * i, this._z = t.z * i, this._w = Math.cos(n), this.onChangeCallback(), this
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
                    return p > 0 ? (e = .5 / Math.sqrt(p + 1), this._w = .25 / e, this._x = (h - c) * e, this._y = (o - l) * e, this._z = (a - r) * e) : i > s && i > u ? (e = 2 * Math.sqrt(1 + i - s - u), this._w = (h - c) / e, this._x = .25 * e, this._y = (r + a) / e, this._z = (o + l) / e) : s > u ? (e = 2 * Math.sqrt(1 + s - i - u), this._w = (o - l) / e, this._x = (r + a) / e, this._y = .25 * e, this._z = (c + h) / e) : (e = 2 * Math.sqrt(1 + u - i - s), this._w = (a - r) / e, this._x = (o + l) / e, this._y = (c + h) / e, this._z = .25 * e), this.onChangeCallback(), this
                },
                setFromUnitVectors: function() {
                    var t, e = new Te;
                    return function(n, i) {
                        return void 0 === e && (e = new Te), (t = n.dot(i) + 1) < 1e-6 ? (t = 0, Math.abs(n.x) > Math.abs(n.z) ? e.set(-n.y, n.x, 0) : e.set(0, -n.z, n.y)) : e.crossVectors(n, i), this._x = e.x, this._y = e.y, this._z = e.z, this._w = t, this.normalize()
                    }
                }(),
                angleTo: function(t) {
                    return 2 * Math.acos(Math.abs(xe.clamp(this.dot(t), -1, 1)))
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
                    return this._x *= -1, this._y *= -1, this._z *= -1, this.onChangeCallback(), this
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
                    return 0 === t ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this.onChangeCallback(), this
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
                    return this._x = n * l + o * a + i * c - r * s, this._y = i * l + o * s + r * a - n * c, this._z = r * l + o * c + n * s - i * a, this._w = o * l - n * a - i * s - r * c, this.onChangeCallback(), this
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
                        return this._w = c * o + e * this._w, this._x = c * n + e * this._x, this._y = c * i + e * this._y, this._z = c * r + e * this._z, this.normalize()
                    }
                    var l = Math.sqrt(s),
                        h = Math.atan2(l, a),
                        u = Math.sin((1 - e) * h) / l,
                        p = Math.sin(e * h) / l;
                    return this._w = o * u + this._w * p, this._x = n * u + this._x * p, this._y = i * u + this._y * p, this._z = r * u + this._z * p, this.onChangeCallback(), this
                },
                equals: function(t) {
                    return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w
                },
                fromArray: function(t, e) {
                    return void 0 === e && (e = 0), this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this.onChangeCallback(), this
                },
                toArray: function(t, e) {
                    return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t
                },
                onChange: function(t) {
                    return this.onChangeCallback = t, this
                },
                onChangeCallback: function() {}
            }), Object.assign(Te.prototype, {
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
                applyEuler: function() {
                    var t = new Me;
                    return function(e) {
                        return e && e.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), this.applyQuaternion(t.setFromEuler(e))
                    }
                }(),
                applyAxisAngle: function() {
                    var t = new Me;
                    return function(e, n) {
                        return this.applyQuaternion(t.setFromAxisAngle(e, n))
                    }
                }(),
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
                unproject: function() {
                    var t = new we;
                    return function(e) {
                        return this.applyMatrix4(t.getInverse(e.projectionMatrix)).applyMatrix4(e.matrixWorld)
                    }
                }(),
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
                clampScalar: function() {
                    var t = new Te,
                        e = new Te;
                    return function(n, i) {
                        return t.set(n, n, n), e.set(i, i, i), this.clamp(t, e)
                    }
                }(),
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
                projectOnPlane: function() {
                    var t = new Te;
                    return function(e) {
                        return t.copy(this).projectOnVector(e), this.sub(t)
                    }
                }(),
                reflect: function() {
                    var t = new Te;
                    return function(e) {
                        return this.sub(t.copy(e).multiplyScalar(2 * this.dot(e)))
                    }
                }(),
                angleTo: function(t) {
                    var e = this.dot(t) / Math.sqrt(this.lengthSq() * t.lengthSq());
                    return Math.acos(xe.clamp(e, -1, 1))
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
            }), Object.assign(Ee.prototype, {
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
                applyToBufferAttribute: function() {
                    var t = new Te;
                    return function(e) {
                        for (var n = 0, i = e.count; n < i; n++) t.x = e.getX(n), t.y = e.getY(n), t.z = e.getZ(n), t.applyMatrix3(this), e.setXYZ(n, t.x, t.y, t.z);
                        return e
                    }
                }(),
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
            var Se = {
                    getDataURL: function(t) {
                        var e;
                        if (t instanceof HTMLCanvasElement) e = t;
                        else {
                            (e = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")).width = t.width, e.height = t.height;
                            var n = e.getContext("2d");
                            t instanceof ImageData ? n.putImageData(t, 0, 0) : n.drawImage(t, 0, 0, t.width, t.height)
                        }
                        return e.width > 2048 || e.height > 2048 ? e.toDataURL("image/jpeg", .6) : e.toDataURL("image/png")
                    }
                },
                Ae = 0;

            function Pe(t, e, n, i, r, o, a, s, c, l) {
                Object.defineProperty(this, "id", {
                    value: Ae++
                }), this.uuid = xe.generateUUID(), this.name = "", this.image = void 0 !== t ? t : Pe.DEFAULT_IMAGE, this.mipmaps = [], this.mapping = void 0 !== e ? e : Pe.DEFAULT_MAPPING, this.wrapS = void 0 !== n ? n : at, this.wrapT = void 0 !== i ? i : at, this.magFilter = void 0 !== r ? r : ut, this.minFilter = void 0 !== o ? o : dt, this.anisotropy = void 0 !== c ? c : 1, this.format = void 0 !== a ? a : Pt, this.type = void 0 !== s ? s : ft, this.offset = new be(0, 0), this.repeat = new be(1, 1), this.center = new be(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Ee, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = void 0 !== l ? l : le, this.version = 0, this.onUpdate = null
            }

            function Le(t, e, n, i) {
                this.x = t || 0, this.y = e || 0, this.z = n || 0, this.w = void 0 !== i ? i : 1
            }

            function Re(t, e, n) {
                this.width = t, this.height = e, this.scissor = new Le(0, 0, t, e), this.scissorTest = !1, this.viewport = new Le(0, 0, t, e), void 0 === (n = n || {}).minFilter && (n.minFilter = ut), this.texture = new Pe(void 0, void 0, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), this.texture.generateMipmaps = void 0 === n.generateMipmaps || n.generateMipmaps, this.depthBuffer = void 0 === n.depthBuffer || n.depthBuffer, this.stencilBuffer = void 0 === n.stencilBuffer || n.stencilBuffer, this.depthTexture = void 0 !== n.depthTexture ? n.depthTexture : null
            }

            function Ce(t, e, n) {
                Re.call(this, t, e, n), this.activeCubeFace = 0, this.activeMipMapLevel = 0
            }

            function Oe(t, e, n, i, r, o, a, s, c, l, h, u) {
                Pe.call(this, null, o, a, s, c, l, i, r, h, u), this.image = {
                    data: t,
                    width: e,
                    height: n
                }, this.magFilter = void 0 !== c ? c : ct, this.minFilter = void 0 !== l ? l : ct, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1
            }

            function Ie(t, e) {
                this.min = void 0 !== t ? t : new Te(1 / 0, 1 / 0, 1 / 0), this.max = void 0 !== e ? e : new Te(-1 / 0, -1 / 0, -1 / 0)
            }

            function De(t, e) {
                this.center = void 0 !== t ? t : new Te, this.radius = void 0 !== e ? e : 0
            }

            function Ne(t, e) {
                this.normal = void 0 !== t ? t : new Te(1, 0, 0), this.constant = void 0 !== e ? e : 0
            }

            function Be(t, e, n, i, r, o) {
                this.planes = [void 0 !== t ? t : new Ne, void 0 !== e ? e : new Ne, void 0 !== n ? n : new Ne, void 0 !== i ? i : new Ne, void 0 !== r ? r : new Ne, void 0 !== o ? o : new Ne]
            }
            Pe.DEFAULT_IMAGE = void 0, Pe.DEFAULT_MAPPING = 300, Pe.prototype = Object.assign(Object.create(e.prototype), {
                constructor: Pe,
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
                        minFilter: this.minFilter,
                        magFilter: this.magFilter,
                        anisotropy: this.anisotropy,
                        flipY: this.flipY
                    };
                    if (void 0 !== this.image) {
                        var i = this.image;
                        if (void 0 === i.uuid && (i.uuid = xe.generateUUID()), !e && void 0 === t.images[i.uuid]) {
                            var r;
                            if (Array.isArray(i)) {
                                r = [];
                                for (var o = 0, a = i.length; o < a; o++) r.push(Se.getDataURL(i[o]))
                            } else r = Se.getDataURL(i);
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
            }), Object.defineProperty(Pe.prototype, "needsUpdate", {
                set: function(t) {
                    !0 === t && this.version++
                }
            }), Object.assign(Le.prototype, {
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
                clampScalar: function() {
                    var t, e;
                    return function(n, i) {
                        return void 0 === t && (t = new Le, e = new Le), t.set(n, n, n, n), e.set(i, i, i, i), this.clamp(t, e)
                    }
                }(),
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
            }), Re.prototype = Object.assign(Object.create(e.prototype), {
                constructor: Re,
                isWebGLRenderTarget: !0,
                setSize: function(t, e) {
                    this.width === t && this.height === e || (this.width = t, this.height = e, this.dispose()), this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e)
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
            }), Ce.prototype = Object.create(Re.prototype), Ce.prototype.constructor = Ce, Ce.prototype.isWebGLRenderTargetCube = !0, Oe.prototype = Object.create(Pe.prototype), Oe.prototype.constructor = Oe, Oe.prototype.isDataTexture = !0, Object.assign(Ie.prototype, {
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
                setFromCenterAndSize: function() {
                    var t = new Te;
                    return function(e, n) {
                        var i = t.copy(n).multiplyScalar(.5);
                        return this.min.copy(e).sub(i), this.max.copy(e).add(i), this
                    }
                }(),
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
                    return void 0 === t && (console.warn("THREE.Box3: .getCenter() target is now required"), t = new Te), this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5)
                },
                getSize: function(t) {
                    return void 0 === t && (console.warn("THREE.Box3: .getSize() target is now required"), t = new Te), this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min)
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
                expandByObject: function() {
                    var t, e, n, i = new Te;

                    function r(r) {
                        var o = r.geometry;
                        if (void 0 !== o)
                            if (o.isGeometry) {
                                var a = o.vertices;
                                for (e = 0, n = a.length; e < n; e++) i.copy(a[e]), i.applyMatrix4(r.matrixWorld), t.expandByPoint(i)
                            } else if (o.isBufferGeometry) {
                            var s = o.attributes.position;
                            if (void 0 !== s)
                                for (e = 0, n = s.count; e < n; e++) i.fromBufferAttribute(s, e).applyMatrix4(r.matrixWorld), t.expandByPoint(i)
                        }
                    }
                    return function(e) {
                        return t = this, e.updateMatrixWorld(!0), e.traverse(r), this
                    }
                }(),
                containsPoint: function(t) {
                    return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z)
                },
                containsBox: function(t) {
                    return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z
                },
                getParameter: function(t, e) {
                    return void 0 === e && (console.warn("THREE.Box3: .getParameter() target is now required"), e = new Te), e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z))
                },
                intersectsBox: function(t) {
                    return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z)
                },
                intersectsSphere: function() {
                    var t = new Te;
                    return function(e) {
                        return this.clampPoint(e.center, t), t.distanceToSquared(e.center) <= e.radius * e.radius
                    }
                }(),
                intersectsPlane: function(t) {
                    var e, n;
                    return t.normal.x > 0 ? (e = t.normal.x * this.min.x, n = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, n = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, n += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, n += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, n += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, n += t.normal.z * this.min.z), e <= -t.constant && n >= -t.constant
                },
                intersectsTriangle: function() {
                    var t = new Te,
                        e = new Te,
                        n = new Te,
                        i = new Te,
                        r = new Te,
                        o = new Te,
                        a = new Te,
                        s = new Te,
                        c = new Te,
                        l = new Te;

                    function h(i) {
                        var r, o;
                        for (r = 0, o = i.length - 3; r <= o; r += 3) {
                            a.fromArray(i, r);
                            var s = c.x * Math.abs(a.x) + c.y * Math.abs(a.y) + c.z * Math.abs(a.z),
                                l = t.dot(a),
                                h = e.dot(a),
                                u = n.dot(a);
                            if (Math.max(-Math.max(l, h, u), Math.min(l, h, u)) > s) return !1
                        }
                        return !0
                    }
                    return function(a) {
                        if (this.isEmpty()) return !1;
                        this.getCenter(s), c.subVectors(this.max, s), t.subVectors(a.a, s), e.subVectors(a.b, s), n.subVectors(a.c, s), i.subVectors(e, t), r.subVectors(n, e), o.subVectors(t, n);
                        var u = [0, -i.z, i.y, 0, -r.z, r.y, 0, -o.z, o.y, i.z, 0, -i.x, r.z, 0, -r.x, o.z, 0, -o.x, -i.y, i.x, 0, -r.y, r.x, 0, -o.y, o.x, 0];
                        return !!h(u) && !!h(u = [1, 0, 0, 0, 1, 0, 0, 0, 1]) && (l.crossVectors(i, r), h(u = [l.x, l.y, l.z]))
                    }
                }(),
                clampPoint: function(t, e) {
                    return void 0 === e && (console.warn("THREE.Box3: .clampPoint() target is now required"), e = new Te), e.copy(t).clamp(this.min, this.max)
                },
                distanceToPoint: function() {
                    var t = new Te;
                    return function(e) {
                        var n = t.copy(e).clamp(this.min, this.max);
                        return n.sub(e).length()
                    }
                }(),
                getBoundingSphere: function() {
                    var t = new Te;
                    return function(e) {
                        return void 0 === e && (console.warn("THREE.Box3: .getBoundingSphere() target is now required"), e = new De), this.getCenter(e.center), e.radius = .5 * this.getSize(t).length(), e
                    }
                }(),
                intersect: function(t) {
                    return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this
                },
                union: function(t) {
                    return this.min.min(t.min), this.max.max(t.max), this
                },
                applyMatrix4: function() {
                    var t = [new Te, new Te, new Te, new Te, new Te, new Te, new Te, new Te];
                    return function(e) {
                        return this.isEmpty() ? this : (t[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), t[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), t[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), t[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), t[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), t[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), t[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), t[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(t), this)
                    }
                }(),
                translate: function(t) {
                    return this.min.add(t), this.max.add(t), this
                },
                equals: function(t) {
                    return t.min.equals(this.min) && t.max.equals(this.max)
                }
            }), Object.assign(De.prototype, {
                set: function(t, e) {
                    return this.center.copy(t), this.radius = e, this
                },
                setFromPoints: function() {
                    var t = new Ie;
                    return function(e, n) {
                        var i = this.center;
                        void 0 !== n ? i.copy(n) : t.setFromPoints(e).getCenter(i);
                        for (var r = 0, o = 0, a = e.length; o < a; o++) r = Math.max(r, i.distanceToSquared(e[o]));
                        return this.radius = Math.sqrt(r), this
                    }
                }(),
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
                    return void 0 === e && (console.warn("THREE.Sphere: .clampPoint() target is now required"), e = new Te), e.copy(t), n > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e
                },
                getBoundingBox: function(t) {
                    return void 0 === t && (console.warn("THREE.Sphere: .getBoundingBox() target is now required"), t = new Ie), t.set(this.center, this.center), t.expandByScalar(this.radius), t
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
            }), Object.assign(Ne.prototype, {
                set: function(t, e) {
                    return this.normal.copy(t), this.constant = e, this
                },
                setComponents: function(t, e, n, i) {
                    return this.normal.set(t, e, n), this.constant = i, this
                },
                setFromNormalAndCoplanarPoint: function(t, e) {
                    return this.normal.copy(t), this.constant = -e.dot(this.normal), this
                },
                setFromCoplanarPoints: function() {
                    var t = new Te,
                        e = new Te;
                    return function(n, i, r) {
                        var o = t.subVectors(r, i).cross(e.subVectors(n, i)).normalize();
                        return this.setFromNormalAndCoplanarPoint(o, n), this
                    }
                }(),
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
                    return void 0 === e && (console.warn("THREE.Plane: .projectPoint() target is now required"), e = new Te), e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)
                },
                intersectLine: function() {
                    var t = new Te;
                    return function(e, n) {
                        void 0 === n && (console.warn("THREE.Plane: .intersectLine() target is now required"), n = new Te);
                        var i = e.delta(t),
                            r = this.normal.dot(i);
                        if (0 === r) return 0 === this.distanceToPoint(e.start) ? n.copy(e.start) : void 0;
                        var o = -(e.start.dot(this.normal) + this.constant) / r;
                        return o < 0 || o > 1 ? void 0 : n.copy(i).multiplyScalar(o).add(e.start)
                    }
                }(),
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
                    return void 0 === t && (console.warn("THREE.Plane: .coplanarPoint() target is now required"), t = new Te), t.copy(this.normal).multiplyScalar(-this.constant)
                },
                applyMatrix4: function() {
                    var t = new Te,
                        e = new Ee;
                    return function(n, i) {
                        var r = i || e.getNormalMatrix(n),
                            o = this.coplanarPoint(t).applyMatrix4(n),
                            a = this.normal.applyMatrix3(r).normalize();
                        return this.constant = -o.dot(a), this
                    }
                }(),
                translate: function(t) {
                    return this.constant -= t.dot(this.normal), this
                },
                equals: function(t) {
                    return t.normal.equals(this.normal) && t.constant === this.constant
                }
            }), Object.assign(Be.prototype, {
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
                intersectsObject: function() {
                    var t = new De;
                    return function(e) {
                        var n = e.geometry;
                        return null === n.boundingSphere && n.computeBoundingSphere(), t.copy(n.boundingSphere).applyMatrix4(e.matrixWorld), this.intersectsSphere(t)
                    }
                }(),
                intersectsSprite: function() {
                    var t = new De;
                    return function(e) {
                        return t.center.set(0, 0, 0), t.radius = .7071067811865476, t.applyMatrix4(e.matrixWorld), this.intersectsSphere(t)
                    }
                }(),
                intersectsSphere: function(t) {
                    for (var e = this.planes, n = t.center, i = -t.radius, r = 0; r < 6; r++) {
                        var o = e[r].distanceToPoint(n);
                        if (o < i) return !1
                    }
                    return !0
                },
                intersectsBox: function() {
                    var t = new Te;
                    return function(e) {
                        for (var n = this.planes, i = 0; i < 6; i++) {
                            var r = n[i];
                            if (t.x = r.normal.x > 0 ? e.max.x : e.min.x, t.y = r.normal.y > 0 ? e.max.y : e.min.y, t.z = r.normal.z > 0 ? e.max.z : e.min.z, r.distanceToPoint(t) < 0) return !1
                        }
                        return !0
                    }
                }(),
                containsPoint: function(t) {
                    for (var e = this.planes, n = 0; n < 6; n++)
                        if (e[n].distanceToPoint(t) < 0) return !1;
                    return !0
                }
            });
            var He = {
                    alphamap_fragment: "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif\n",
                    alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif\n",
                    alphatest_fragment: "#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif\n",
                    aomap_fragment: "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif\n",
                    aomap_pars_fragment: "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
                    begin_vertex: "\nvec3 transformed = vec3( position );\n",
                    beginnormal_vertex: "\nvec3 objectNormal = vec3( normal );\n",
                    bsdfs: "float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\tif( cutoffDistance > 0.0 ) {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t}\n\treturn distanceFalloff;\n#else\n\tif( cutoffDistance > 0.0 ) {\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t}\n\treturn 1.0;\n#endif\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n\treturn specularColor * AB.x + AB.y;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n",
                    bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tfDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif\n",
                    clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\tif ( clipped ) discard;\n\t#endif\n#endif\n",
                    clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n\t#if ! defined( PHYSICAL ) && ! defined( PHONG ) && ! defined( MATCAP )\n\t\tvarying vec3 vViewPosition;\n\t#endif\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif\n",
                    clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG ) && ! defined( MATCAP )\n\tvarying vec3 vViewPosition;\n#endif\n",
                    clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG ) && ! defined( MATCAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n",
                    color_fragment: "#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif",
                    color_pars_fragment: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif\n",
                    color_pars_vertex: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",
                    color_vertex: "#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif",
                    common: "#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\n",
                    cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_textureSize (1024.0)\nint getFaceFromDirection(vec3 direction) {\n\tvec3 absDirection = abs(direction);\n\tint face = -1;\n\tif( absDirection.x > absDirection.z ) {\n\t\tif(absDirection.x > absDirection.y )\n\t\t\tface = direction.x > 0.0 ? 0 : 3;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\telse {\n\t\tif(absDirection.z > absDirection.y )\n\t\t\tface = direction.z > 0.0 ? 2 : 5;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\treturn face;\n}\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n\tfloat scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n\tfloat dxRoughness = dFdx(roughness);\n\tfloat dyRoughness = dFdy(roughness);\n\tvec3 dx = dFdx( vec * scale * dxRoughness );\n\tvec3 dy = dFdy( vec * scale * dyRoughness );\n\tfloat d = max( dot( dx, dx ), dot( dy, dy ) );\n\td = clamp(d, 1.0, cubeUV_rangeClamp);\n\tfloat mipLevel = 0.5 * log2(d);\n\treturn vec2(floor(mipLevel), fract(mipLevel));\n}\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n\tmipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n\tfloat a = 16.0 * cubeUV_rcpTextureSize;\n\tvec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n\tvec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n\tfloat powScale = exp2_packed.x * exp2_packed.y;\n\tfloat scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n\tfloat mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n\tbool bRes = mipLevel == 0.0;\n\tscale =  bRes && (scale < a) ? a : scale;\n\tvec3 r;\n\tvec2 offset;\n\tint face = getFaceFromDirection(direction);\n\tfloat rcpPowScale = 1.0 / powScale;\n\tif( face == 0) {\n\t\tr = vec3(direction.x, -direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 1) {\n\t\tr = vec3(direction.y, direction.x, direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 2) {\n\t\tr = vec3(direction.z, direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 3) {\n\t\tr = vec3(direction.x, direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse if( face == 4) {\n\t\tr = vec3(direction.y, direction.x, -direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse {\n\t\tr = vec3(direction.z, -direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\tr = normalize(r);\n\tfloat texelOffset = 0.5 * cubeUV_rcpTextureSize;\n\tvec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n\tvec2 base = offset + vec2( texelOffset );\n\treturn base + s * ( scale - 2.0 * texelOffset );\n}\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\nvec4 textureCubeUV( sampler2D envMap, vec3 reflectedDirection, float roughness ) {\n\tfloat roughnessVal = roughness* cubeUV_maxLods3;\n\tfloat r1 = floor(roughnessVal);\n\tfloat r2 = r1 + 1.0;\n\tfloat t = fract(roughnessVal);\n\tvec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n\tfloat s = mipInfo.y;\n\tfloat level0 = mipInfo.x;\n\tfloat level1 = level0 + 1.0;\n\tlevel1 = level1 > 5.0 ? 5.0 : level1;\n\tlevel0 += min( floor( s + 0.5 ), 5.0 );\n\tvec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n\tvec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n\tvec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n\tvec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n\tvec4 result = mix(color10, color20, t);\n\treturn vec4(result.rgb, 1.0);\n}\n#endif\n",
                    defaultnormal_vertex: "vec3 transformedNormal = normalMatrix * objectNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n",
                    displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif\n",
                    displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n#endif\n",
                    emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif\n",
                    emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif\n",
                    encodings_fragment: "  gl_FragColor = linearToOutputTexel( gl_FragColor );\n",
                    encodings_pars_fragment: "\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * value.a * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat D = max( maxRange / maxRGB, 1.0 );\n\tD = min( floor( D ) / 255.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n\tvec3 Xp_Y_XYZp = value.rgb * cLogLuvM;\n\tXp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract( Le );\n\tvResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;\n\treturn vec4( max( vRGB, 0.0 ), 1.0 );\n}\n",
                    envmap_fragment: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\treflectVec = normalize( reflectVec );\n\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\treflectVec = normalize( reflectVec );\n\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\tenvColor = envMapTexelToLinear( envColor );\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif\n",
                    envmap_pars_fragment: "#if defined( USE_ENVMAP ) || defined( PHYSICAL )\n\tuniform float reflectivity;\n\tuniform float envMapIntensity;\n#endif\n#ifdef USE_ENVMAP\n\t#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )\n\t\tvarying vec3 vWorldPosition;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif\n",
                    envmap_pars_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif\n",
                    envmap_physical_pars_fragment: "#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, queryVec, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent ));\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif\n",
                    envmap_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif\n",
                    fog_vertex: "#ifdef USE_FOG\n\tfogDepth = -mvPosition.z;\n#endif\n",
                    fog_pars_vertex: "#ifdef USE_FOG\n\tvarying float fogDepth;\n#endif\n",
                    fog_fragment: "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * fogDepth * fogDepth * LOG2 ) );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif\n",
                    fog_pars_fragment: "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif\n",
                    gradientmap_pars_fragment: "#ifdef TOON\n\tuniform sampler2D gradientMap;\n\tvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\t\tfloat dotNL = dot( normal, lightDirection );\n\t\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t\t#ifdef USE_GRADIENTMAP\n\t\t\treturn texture2D( gradientMap, coord ).rgb;\n\t\t#else\n\t\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t\t#endif\n\t}\n#endif\n",
                    lightmap_fragment: "#ifdef USE_LIGHTMAP\n\treflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif\n",
                    lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
                    lights_lambert_vertex: "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvLightFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n#endif\n",
                    lights_pars_begin: "uniform vec3 ambientLightColor;\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t\tfloat shadowCameraNear;\n\t\tfloat shadowCameraFar;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif\n",
                    lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;\n",
                    lights_phong_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifdef TOON\n\t\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#else\n\t\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\t\tvec3 irradiance = dotNL * directLight.color;\n\t#endif\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)\n",
                    lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef STANDARD\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.clearCoat = saturate( clearCoat );\tmaterial.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );\n#endif\n",
                    lights_physical_pars_fragment: "struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n\t#ifndef STANDARD\n\t\tfloat clearCoat;\n\t\tfloat clearCoatRoughness;\n\t#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearCoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos - halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos + halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos + halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos - halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifndef STANDARD\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.directSpecular += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\n\treflectedLight.directDiffuse += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\t#ifndef STANDARD\n\t\treflectedLight.directSpecular += irradiance * material.clearCoat * BRDF_Specular_GGX( directLight, geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 clearCoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifndef STANDARD\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\tfloat dotNL = dotNV;\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.indirectSpecular += ( 1.0 - clearCoatDHR ) * radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\n\t#ifndef STANDARD\n\t\treflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * BRDF_Specular_GGX_Environment( geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\n#define Material_ClearCoat_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.clearCoatRoughness )\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}\n",
                    lights_fragment_begin: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearCoatRadiance = vec3( 0.0 );\n#endif\n",
                    lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tirradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getLightProbeIndirectRadiance( geometry, Material_BlinnShininessExponent( material ), maxMipLevel );\n\t#ifndef STANDARD\n\t\tclearCoatRadiance += getLightProbeIndirectRadiance( geometry, Material_ClearCoat_BlinnShininessExponent( material ), maxMipLevel );\n\t#endif\n#endif\n",
                    lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, clearCoatRadiance, geometry, material, reflectedLight );\n#endif\n",
                    logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
                    logdepthbuf_pars_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n#endif\n",
                    logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif\n",
                    logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t#else\n\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\tgl_Position.z *= gl_Position.w;\n\t#endif\n#endif\n",
                    map_fragment: "#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif\n",
                    map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n",
                    map_particle_fragment: "#ifdef USE_MAP\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n",
                    map_particle_pars_fragment: "#ifdef USE_MAP\n\tuniform mat3 uvTransform;\n\tuniform sampler2D map;\n#endif\n",
                    metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif\n",
                    metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
                    morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif\n",
                    morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",
                    morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\t#endif\n#endif\n",
                    normal_fragment_begin: "#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n#endif\n",
                    normal_fragment_maps: "#ifdef USE_NORMALMAP\n\t#ifdef OBJECTSPACE_NORMALMAP\n\t\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\t#ifdef FLIP_SIDED\n\t\t\tnormal = - normal;\n\t\t#endif\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#endif\n\t\tnormal = normalize( normalMatrix * normal );\n\t#else\n\t\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif\n",
                    normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\t#ifdef OBJECTSPACE_NORMALMAP\n\t\tuniform mat3 normalMatrix;\n\t#else\n\t\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\t\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\t\tvec2 st0 = dFdx( vUv.st );\n\t\t\tvec2 st1 = dFdy( vUv.st );\n\t\t\tfloat scale = sign( st1.t * st0.s - st0.t * st1.s );\n\t\t\tvec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );\n\t\t\tvec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );\n\t\t\tvec3 N = normalize( surf_norm );\n\t\t\tmat3 tsn = mat3( S, T, N );\n\t\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\t\tmapN.xy *= normalScale;\n\t\t\tmapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t\treturn normalize( tsn * mapN );\n\t\t}\n\t#endif\n#endif\n",
                    packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}\n",
                    premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif\n",
                    project_vertex: "vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\ngl_Position = projectionMatrix * mvPosition;\n",
                    dithering_fragment: "#if defined( DITHERING )\n  gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif\n",
                    dithering_pars_fragment: "#if defined( DITHERING )\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif\n",
                    roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif\n",
                    roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
                    shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = floor( uv * size + 0.5 ) / size;\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\t\tvec2 f = fract( uv * size + 0.5 );\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\t\treturn c;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif\n",
                    shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n#endif\n",
                    shadowmap_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n#endif\n",
                    shadowmask_pars_fragment: "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#endif\n\t#endif\n\treturn shadow;\n}\n",
                    skinbase_vertex: "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
                    skinning_pars_vertex: "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif\n",
                    skinning_vertex: "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif\n",
                    skinnormal_vertex: "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n#endif\n",
                    specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
                    specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
                    tonemapping_fragment: "#if defined( TONE_MAPPING )\n  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif\n",
                    tonemapping_pars_fragment: "#ifndef saturate\n\t#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\n",
                    uv_pars_fragment: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n#endif",
                    uv_pars_vertex: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n\tuniform mat3 uvTransform;\n#endif\n",
                    uv_vertex: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
                    uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",
                    uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n#endif",
                    uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = uv2;\n#endif",
                    worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n#endif\n",
                    background_frag: "uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tgl_FragColor = texture2D( t2D, vUv );\n}\n",
                    background_vert: "varying vec2 vUv;\nvoid main() {\n\tvUv = uv;\n\tgl_Position = vec4( position, 1.0 );\n\tgl_Position.z = 1.0;\n}\n",
                    cube_frag: "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldPosition;\nvoid main() {\n\tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n\tgl_FragColor.a *= opacity;\n}\n",
                    cube_vert: "varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}\n",
                    depth_frag: "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - gl_FragCoord.z ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n\t#endif\n}\n",
                    depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}\n",
                    distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}\n",
                    distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}\n",
                    equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldPosition );\n\tvec2 sampleUV;\n\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n}\n",
                    equirect_vert: "varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}\n",
                    linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
                    linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}\n",
                    meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\treflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
                    meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}\n",
                    meshlambert_frag: "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",
                    meshlambert_vert: "#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
                    meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\tvec4 matcapColor = texture2D( matcap, uv );\n\tmatcapColor = matcapTexelToLinear( matcapColor );\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
                    meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#ifndef FLAT_SHADED\n\t\tvNormal = normalize( transformedNormal );\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}\n",
                    meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",
                    meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
                    meshphysical_frag: "#define PHYSICAL\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifndef STANDARD\n\tuniform float clearCoat;\n\tuniform float clearCoatRoughness;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",
                    meshphysical_vert: "#define PHYSICAL\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
                    normal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || ( defined( USE_NORMALMAP ) && ! defined( OBJECTSPACE_NORMALMAP ) )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}\n",
                    normal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || ( defined( USE_NORMALMAP ) && ! defined( OBJECTSPACE_NORMALMAP ) )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || ( defined( USE_NORMALMAP ) && ! defined( OBJECTSPACE_NORMALMAP ) )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}\n",
                    points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
                    points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}\n",
                    shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <fog_fragment>\n}\n",
                    shadow_vert: "#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
                    sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
                    sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}\n"
                },
                Fe = {
                    merge: function(t) {
                        for (var e = {}, n = 0; n < t.length; n++) {
                            var i = this.clone(t[n]);
                            for (var r in i) e[r] = i[r]
                        }
                        return e
                    },
                    clone: function(t) {
                        var e = {};
                        for (var n in t)
                            for (var i in e[n] = {}, t[n]) {
                                var r = t[n][i];
                                r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture) ? e[n][i] = r.clone() : Array.isArray(r) ? e[n][i] = r.slice() : e[n][i] = r
                            }
                        return e
                    }
                },
                ke = {
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
                };

            function Ue(t, e, n) {
                return void 0 === e && void 0 === n ? this.set(t) : this.setRGB(t, e, n)
            }
            Object.assign(Ue.prototype, {
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
                setHSL: function() {
                    function t(t, e, n) {
                        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - n) : t
                    }
                    return function(e, n, i) {
                        if (e = xe.euclideanModulo(e, 1), n = xe.clamp(n, 0, 1), i = xe.clamp(i, 0, 1), 0 === n) this.r = this.g = this.b = i;
                        else {
                            var r = i <= .5 ? i * (1 + n) : i + n - i * n,
                                o = 2 * i - r;
                            this.r = t(o, r, e + 1 / 3), this.g = t(o, r, e), this.b = t(o, r, e - 1 / 3)
                        }
                        return this
                    }
                }(),
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
                        var l = ke[t];
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
                copySRGBToLinear: function() {
                    function t(t) {
                        return t < .04045 ? .0773993808 * t : Math.pow(.9478672986 * t + .0521327014, 2.4)
                    }
                    return function(e) {
                        return this.r = t(e.r), this.g = t(e.g), this.b = t(e.b), this
                    }
                }(),
                copyLinearToSRGB: function() {
                    function t(t) {
                        return t < .0031308 ? 12.92 * t : 1.055 * Math.pow(t, .41666) - .055
                    }
                    return function(e) {
                        return this.r = t(e.r), this.g = t(e.g), this.b = t(e.b), this
                    }
                }(),
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
                offsetHSL: function() {
                    var t = {};
                    return function(e, n, i) {
                        return this.getHSL(t), t.h += e, t.s += n, t.l += i, this.setHSL(t.h, t.s, t.l), this
                    }
                }(),
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
                lerpHSL: function() {
                    var t = {
                            h: 0,
                            s: 0,
                            l: 0
                        },
                        e = {
                            h: 0,
                            s: 0,
                            l: 0
                        };
                    return function(n, i) {
                        this.getHSL(t), n.getHSL(e);
                        var r = xe.lerp(t.h, e.h, i),
                            o = xe.lerp(t.s, e.s, i),
                            a = xe.lerp(t.l, e.l, i);
                        return this.setHSL(r, o, a), this
                    }
                }(),
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
            });
            var ze = {
                    common: {
                        diffuse: {
                            value: new Ue(15658734)
                        },
                        opacity: {
                            value: 1
                        },
                        map: {
                            value: null
                        },
                        uvTransform: {
                            value: new Ee
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
                            value: new be(1, 1)
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
                            value: new Ue(16777215)
                        }
                    },
                    lights: {
                        ambientLightColor: {
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
                            value: new Ue(15658734)
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
                            value: new Ee
                        }
                    },
                    sprite: {
                        diffuse: {
                            value: new Ue(15658734)
                        },
                        opacity: {
                            value: 1
                        },
                        center: {
                            value: new be(.5, .5)
                        },
                        rotation: {
                            value: 0
                        },
                        map: {
                            value: null
                        },
                        uvTransform: {
                            value: new Ee
                        }
                    }
                },
                Ge = {
                    basic: {
                        uniforms: Fe.merge([ze.common, ze.specularmap, ze.envmap, ze.aomap, ze.lightmap, ze.fog]),
                        vertexShader: He.meshbasic_vert,
                        fragmentShader: He.meshbasic_frag
                    },
                    lambert: {
                        uniforms: Fe.merge([ze.common, ze.specularmap, ze.envmap, ze.aomap, ze.lightmap, ze.emissivemap, ze.fog, ze.lights, {
                            emissive: {
                                value: new Ue(0)
                            }
                        }]),
                        vertexShader: He.meshlambert_vert,
                        fragmentShader: He.meshlambert_frag
                    },
                    phong: {
                        uniforms: Fe.merge([ze.common, ze.specularmap, ze.envmap, ze.aomap, ze.lightmap, ze.emissivemap, ze.bumpmap, ze.normalmap, ze.displacementmap, ze.gradientmap, ze.fog, ze.lights, {
                            emissive: {
                                value: new Ue(0)
                            },
                            specular: {
                                value: new Ue(1118481)
                            },
                            shininess: {
                                value: 30
                            }
                        }]),
                        vertexShader: He.meshphong_vert,
                        fragmentShader: He.meshphong_frag
                    },
                    standard: {
                        uniforms: Fe.merge([ze.common, ze.envmap, ze.aomap, ze.lightmap, ze.emissivemap, ze.bumpmap, ze.normalmap, ze.displacementmap, ze.roughnessmap, ze.metalnessmap, ze.fog, ze.lights, {
                            emissive: {
                                value: new Ue(0)
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
                        vertexShader: He.meshphysical_vert,
                        fragmentShader: He.meshphysical_frag
                    },
                    matcap: {
                        uniforms: Fe.merge([ze.common, ze.bumpmap, ze.normalmap, ze.displacementmap, ze.fog, {
                            matcap: {
                                value: null
                            }
                        }]),
                        vertexShader: He.meshmatcap_vert,
                        fragmentShader: He.meshmatcap_frag
                    },
                    points: {
                        uniforms: Fe.merge([ze.points, ze.fog]),
                        vertexShader: He.points_vert,
                        fragmentShader: He.points_frag
                    },
                    dashed: {
                        uniforms: Fe.merge([ze.common, ze.fog, {
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
                        vertexShader: He.linedashed_vert,
                        fragmentShader: He.linedashed_frag
                    },
                    depth: {
                        uniforms: Fe.merge([ze.common, ze.displacementmap]),
                        vertexShader: He.depth_vert,
                        fragmentShader: He.depth_frag
                    },
                    normal: {
                        uniforms: Fe.merge([ze.common, ze.bumpmap, ze.normalmap, ze.displacementmap, {
                            opacity: {
                                value: 1
                            }
                        }]),
                        vertexShader: He.normal_vert,
                        fragmentShader: He.normal_frag
                    },
                    sprite: {
                        uniforms: Fe.merge([ze.sprite, ze.fog]),
                        vertexShader: He.sprite_vert,
                        fragmentShader: He.sprite_frag
                    },
                    background: {
                        uniforms: {
                            t2D: {
                                value: null
                            }
                        },
                        vertexShader: He.background_vert,
                        fragmentShader: He.background_frag
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
                        vertexShader: He.cube_vert,
                        fragmentShader: He.cube_frag
                    },
                    equirect: {
                        uniforms: {
                            tEquirect: {
                                value: null
                            }
                        },
                        vertexShader: He.equirect_vert,
                        fragmentShader: He.equirect_frag
                    },
                    distanceRGBA: {
                        uniforms: Fe.merge([ze.common, ze.displacementmap, {
                            referencePosition: {
                                value: new Te
                            },
                            nearDistance: {
                                value: 1
                            },
                            farDistance: {
                                value: 1e3
                            }
                        }]),
                        vertexShader: He.distanceRGBA_vert,
                        fragmentShader: He.distanceRGBA_frag
                    },
                    shadow: {
                        uniforms: Fe.merge([ze.lights, ze.fog, {
                            color: {
                                value: new Ue(0)
                            },
                            opacity: {
                                value: 1
                            }
                        }]),
                        vertexShader: He.shadow_vert,
                        fragmentShader: He.shadow_frag
                    }
                };

            function je() {
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

            function Ve(t) {
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
                                r = e.dynamic ? t.DYNAMIC_DRAW : t.STATIC_DRAW,
                                o = t.createBuffer();
                            t.bindBuffer(n, o), t.bufferData(n, i, r), e.onUploadCallback();
                            var a = t.FLOAT;
                            return i instanceof Float32Array ? a = t.FLOAT : i instanceof Float64Array ? console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.") : i instanceof Uint16Array ? a = t.UNSIGNED_SHORT : i instanceof Int16Array ? a = t.SHORT : i instanceof Uint32Array ? a = t.UNSIGNED_INT : i instanceof Int32Array ? a = t.INT : i instanceof Int8Array ? a = t.BYTE : i instanceof Uint8Array && (a = t.UNSIGNED_BYTE), {
                                buffer: o,
                                type: a,
                                bytesPerElement: i.BYTES_PER_ELEMENT,
                                version: e.version
                            }
                        }(n, i)) : r.version < n.version && (function(e, n, i) {
                            var r = n.array,
                                o = n.updateRange;
                            t.bindBuffer(i, e), !1 === n.dynamic ? t.bufferData(i, r, t.STATIC_DRAW) : -1 === o.count ? t.bufferSubData(i, 0, r) : 0 === o.count ? console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually.") : (t.bufferSubData(i, o.offset * r.BYTES_PER_ELEMENT, r.subarray(o.offset, o.offset + o.count)), o.count = -1)
                        }(r.buffer, n, i), r.version = n.version)
                    }
                }
            }

            function We(t, e, n, i, r, o) {
                this.a = t, this.b = e, this.c = n, this.normal = i && i.isVector3 ? i : new Te, this.vertexNormals = Array.isArray(i) ? i : [], this.color = r && r.isColor ? r : new Ue, this.vertexColors = Array.isArray(r) ? r : [], this.materialIndex = void 0 !== o ? o : 0
            }

            function Xe(t, e, n, i) {
                this._x = t || 0, this._y = e || 0, this._z = n || 0, this._order = i || Xe.DefaultOrder
            }

            function qe() {
                this.mask = 1
            }
            Ge.physical = {
                uniforms: Fe.merge([Ge.standard.uniforms, {
                    clearCoat: {
                        value: 0
                    },
                    clearCoatRoughness: {
                        value: 0
                    }
                }]),
                vertexShader: He.meshphysical_vert,
                fragmentShader: He.meshphysical_frag
            }, Object.assign(We.prototype, {
                clone: function() {
                    return (new this.constructor).copy(this)
                },
                copy: function(t) {
                    this.a = t.a, this.b = t.b, this.c = t.c, this.normal.copy(t.normal), this.color.copy(t.color), this.materialIndex = t.materialIndex;
                    for (var e = 0, n = t.vertexNormals.length; e < n; e++) this.vertexNormals[e] = t.vertexNormals[e].clone();
                    for (var e = 0, n = t.vertexColors.length; e < n; e++) this.vertexColors[e] = t.vertexColors[e].clone();
                    return this
                }
            }), Xe.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"], Xe.DefaultOrder = "XYZ", Object.defineProperties(Xe.prototype, {
                x: {
                    get: function() {
                        return this._x
                    },
                    set: function(t) {
                        this._x = t, this.onChangeCallback()
                    }
                },
                y: {
                    get: function() {
                        return this._y
                    },
                    set: function(t) {
                        this._y = t, this.onChangeCallback()
                    }
                },
                z: {
                    get: function() {
                        return this._z
                    },
                    set: function(t) {
                        this._z = t, this.onChangeCallback()
                    }
                },
                order: {
                    get: function() {
                        return this._order
                    },
                    set: function(t) {
                        this._order = t, this.onChangeCallback()
                    }
                }
            }), Object.assign(Xe.prototype, {
                isEuler: !0,
                set: function(t, e, n, i) {
                    return this._x = t, this._y = e, this._z = n, this._order = i || this._order, this.onChangeCallback(), this
                },
                clone: function() {
                    return new this.constructor(this._x, this._y, this._z, this._order)
                },
                copy: function(t) {
                    return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this.onChangeCallback(), this
                },
                setFromRotationMatrix: function(t, e, n) {
                    var i = xe.clamp,
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
                    return "XYZ" === (e = e || this._order) ? (this._y = Math.asin(i(s, -1, 1)), Math.abs(s) < .99999 ? (this._x = Math.atan2(-h, d), this._z = Math.atan2(-a, o)) : (this._x = Math.atan2(p, l), this._z = 0)) : "YXZ" === e ? (this._x = Math.asin(-i(h, -1, 1)), Math.abs(h) < .99999 ? (this._y = Math.atan2(s, d), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-u, o), this._z = 0)) : "ZXY" === e ? (this._x = Math.asin(i(p, -1, 1)), Math.abs(p) < .99999 ? (this._y = Math.atan2(-u, d), this._z = Math.atan2(-a, l)) : (this._y = 0, this._z = Math.atan2(c, o))) : "ZYX" === e ? (this._y = Math.asin(-i(u, -1, 1)), Math.abs(u) < .99999 ? (this._x = Math.atan2(p, d), this._z = Math.atan2(c, o)) : (this._x = 0, this._z = Math.atan2(-a, l))) : "YZX" === e ? (this._z = Math.asin(i(c, -1, 1)), Math.abs(c) < .99999 ? (this._x = Math.atan2(-h, l), this._y = Math.atan2(-u, o)) : (this._x = 0, this._y = Math.atan2(s, d))) : "XZY" === e ? (this._z = Math.asin(-i(a, -1, 1)), Math.abs(a) < .99999 ? (this._x = Math.atan2(p, l), this._y = Math.atan2(s, o)) : (this._x = Math.atan2(-h, d), this._y = 0)) : console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: " + e), this._order = e, !1 !== n && this.onChangeCallback(), this
                },
                setFromQuaternion: function() {
                    var t = new we;
                    return function(e, n, i) {
                        return t.makeRotationFromQuaternion(e), this.setFromRotationMatrix(t, n, i)
                    }
                }(),
                setFromVector3: function(t, e) {
                    return this.set(t.x, t.y, t.z, e || this._order)
                },
                reorder: function() {
                    var t = new Me;
                    return function(e) {
                        return t.setFromEuler(this), this.setFromQuaternion(t, e)
                    }
                }(),
                equals: function(t) {
                    return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order
                },
                fromArray: function(t) {
                    return this._x = t[0], this._y = t[1], this._z = t[2], void 0 !== t[3] && (this._order = t[3]), this.onChangeCallback(), this
                },
                toArray: function(t, e) {
                    return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t
                },
                toVector3: function(t) {
                    return t ? t.set(this._x, this._y, this._z) : new Te(this._x, this._y, this._z)
                },
                onChange: function(t) {
                    return this.onChangeCallback = t, this
                },
                onChangeCallback: function() {}
            }), Object.assign(qe.prototype, {
                set: function(t) {
                    this.mask = 1 << t | 0
                },
                enable: function(t) {
                    this.mask |= 1 << t | 0
                },
                toggle: function(t) {
                    this.mask ^= 1 << t | 0
                },
                disable: function(t) {
                    this.mask &= ~(1 << t | 0)
                },
                test: function(t) {
                    return 0 != (this.mask & t.mask)
                }
            });
            var Ye = 0;

            function Ze() {
                Object.defineProperty(this, "id", {
                    value: Ye++
                }), this.uuid = xe.generateUUID(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Ze.DefaultUp.clone();
                var t = new Te,
                    e = new Xe,
                    n = new Me,
                    i = new Te(1, 1, 1);
                e.onChange(function() {
                    n.setFromEuler(e, !1)
                }), n.onChange(function() {
                    e.setFromQuaternion(n, void 0, !1)
                }), Object.defineProperties(this, {
                    position: {
                        enumerable: !0,
                        value: t
                    },
                    rotation: {
                        enumerable: !0,
                        value: e
                    },
                    quaternion: {
                        enumerable: !0,
                        value: n
                    },
                    scale: {
                        enumerable: !0,
                        value: i
                    },
                    modelViewMatrix: {
                        value: new we
                    },
                    normalMatrix: {
                        value: new Ee
                    }
                }), this.matrix = new we, this.matrixWorld = new we, this.matrixAutoUpdate = Ze.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new qe, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.userData = {}
            }
            Ze.DefaultUp = new Te(0, 1, 0), Ze.DefaultMatrixAutoUpdate = !0, Ze.prototype = Object.assign(Object.create(e.prototype), {
                constructor: Ze,
                isObject3D: !0,
                onBeforeRender: function() {},
                onAfterRender: function() {},
                applyMatrix: function(t) {
                    this.matrix.multiplyMatrices(t, this.matrix), this.matrix.decompose(this.position, this.quaternion, this.scale)
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
                rotateOnAxis: function() {
                    var t = new Me;
                    return function(e, n) {
                        return t.setFromAxisAngle(e, n), this.quaternion.multiply(t), this
                    }
                }(),
                rotateOnWorldAxis: function() {
                    var t = new Me;
                    return function(e, n) {
                        return t.setFromAxisAngle(e, n), this.quaternion.premultiply(t), this
                    }
                }(),
                rotateX: function() {
                    var t = new Te(1, 0, 0);
                    return function(e) {
                        return this.rotateOnAxis(t, e)
                    }
                }(),
                rotateY: function() {
                    var t = new Te(0, 1, 0);
                    return function(e) {
                        return this.rotateOnAxis(t, e)
                    }
                }(),
                rotateZ: function() {
                    var t = new Te(0, 0, 1);
                    return function(e) {
                        return this.rotateOnAxis(t, e)
                    }
                }(),
                translateOnAxis: function() {
                    var t = new Te;
                    return function(e, n) {
                        return t.copy(e).applyQuaternion(this.quaternion), this.position.add(t.multiplyScalar(n)), this
                    }
                }(),
                translateX: function() {
                    var t = new Te(1, 0, 0);
                    return function(e) {
                        return this.translateOnAxis(t, e)
                    }
                }(),
                translateY: function() {
                    var t = new Te(0, 1, 0);
                    return function(e) {
                        return this.translateOnAxis(t, e)
                    }
                }(),
                translateZ: function() {
                    var t = new Te(0, 0, 1);
                    return function(e) {
                        return this.translateOnAxis(t, e)
                    }
                }(),
                localToWorld: function(t) {
                    return t.applyMatrix4(this.matrixWorld)
                },
                worldToLocal: function() {
                    var t = new we;
                    return function(e) {
                        return e.applyMatrix4(t.getInverse(this.matrixWorld))
                    }
                }(),
                lookAt: function() {
                    var t = new Me,
                        e = new we,
                        n = new Te,
                        i = new Te;
                    return function(r, o, a) {
                        r.isVector3 ? n.copy(r) : n.set(r, o, a);
                        var s = this.parent;
                        this.updateWorldMatrix(!0, !1), i.setFromMatrixPosition(this.matrixWorld), this.isCamera ? e.lookAt(i, n, this.up) : e.lookAt(n, i, this.up), this.quaternion.setFromRotationMatrix(e), s && (e.extractRotation(s.matrixWorld), t.setFromRotationMatrix(e), this.quaternion.premultiply(t.inverse()))
                    }
                }(),
                add: function(t) {
                    if (arguments.length > 1) {
                        for (var e = 0; e < arguments.length; e++) this.add(arguments[e]);
                        return this
                    }
                    return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (null !== t.parent && t.parent.remove(t), t.parent = this, t.dispatchEvent({
                        type: "added"
                    }), this.children.push(t)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this)
                },
                remove: function(t) {
                    if (arguments.length > 1) {
                        for (var e = 0; e < arguments.length; e++) this.remove(arguments[e]);
                        return this
                    }
                    var n = this.children.indexOf(t);
                    return -1 !== n && (t.parent = null, t.dispatchEvent({
                        type: "removed"
                    }), this.children.splice(n, 1)), this
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
                    return void 0 === t && (console.warn("THREE.Object3D: .getWorldPosition() target is now required"), t = new Te), this.updateMatrixWorld(!0), t.setFromMatrixPosition(this.matrixWorld)
                },
                getWorldQuaternion: function() {
                    var t = new Te,
                        e = new Te;
                    return function(n) {
                        return void 0 === n && (console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"), n = new Me), this.updateMatrixWorld(!0), this.matrixWorld.decompose(t, n, e), n
                    }
                }(),
                getWorldScale: function() {
                    var t = new Te,
                        e = new Me;
                    return function(n) {
                        return void 0 === n && (console.warn("THREE.Object3D: .getWorldScale() target is now required"), n = new Te), this.updateMatrixWorld(!0), this.matrixWorld.decompose(t, e, n), n
                    }
                }(),
                getWorldDirection: function(t) {
                    void 0 === t && (console.warn("THREE.Object3D: .getWorldDirection() target is now required"), t = new Te), this.updateMatrixWorld(!0);
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
                    if (i.uuid = this.uuid, i.type = this.type, "" !== this.name && (i.name = this.name), !0 === this.castShadow && (i.castShadow = !0), !0 === this.receiveShadow && (i.receiveShadow = !0), !1 === this.visible && (i.visible = !1), !1 === this.frustumCulled && (i.frustumCulled = !1), 0 !== this.renderOrder && (i.renderOrder = this.renderOrder), "{}" !== JSON.stringify(this.userData) && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), !1 === this.matrixAutoUpdate && (i.matrixAutoUpdate = !1), this.isMesh || this.isLine || this.isPoints) {
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
            });
            var Je = 0;

            function Ke() {
                Object.defineProperty(this, "id", {
                    value: Je += 2
                }), this.uuid = xe.generateUUID(), this.name = "", this.type = "Geometry", this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [
                    []
                ], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.elementsNeedUpdate = !1, this.verticesNeedUpdate = !1, this.uvsNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.lineDistancesNeedUpdate = !1, this.groupsNeedUpdate = !1
            }

            function Qe(t, e, n) {
                if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
                this.name = "", this.array = t, this.itemSize = e, this.count = void 0 !== t ? t.length / e : 0, this.normalized = !0 === n, this.dynamic = !1, this.updateRange = {
                    offset: 0,
                    count: -1
                }, this.version = 0
            }

            function $e(t, e, n) {
                Qe.call(this, new Int8Array(t), e, n)
            }

            function tn(t, e, n) {
                Qe.call(this, new Uint8Array(t), e, n)
            }

            function en(t, e, n) {
                Qe.call(this, new Uint8ClampedArray(t), e, n)
            }

            function nn(t, e, n) {
                Qe.call(this, new Int16Array(t), e, n)
            }

            function rn(t, e, n) {
                Qe.call(this, new Uint16Array(t), e, n)
            }

            function on(t, e, n) {
                Qe.call(this, new Int32Array(t), e, n)
            }

            function an(t, e, n) {
                Qe.call(this, new Uint32Array(t), e, n)
            }

            function sn(t, e, n) {
                Qe.call(this, new Float32Array(t), e, n)
            }

            function cn(t, e, n) {
                Qe.call(this, new Float64Array(t), e, n)
            }

            function ln() {
                this.vertices = [], this.normals = [], this.colors = [], this.uvs = [], this.uvs2 = [], this.groups = [], this.morphTargets = {}, this.skinWeights = [], this.skinIndices = [], this.boundingBox = null, this.boundingSphere = null, this.verticesNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.uvsNeedUpdate = !1, this.groupsNeedUpdate = !1
            }

            function hn(t) {
                if (0 === t.length) return -1 / 0;
                for (var e = t[0], n = 1, i = t.length; n < i; ++n) t[n] > e && (e = t[n]);
                return e
            }
            Ke.prototype = Object.assign(Object.create(e.prototype), {
                constructor: Ke,
                isGeometry: !0,
                applyMatrix: function(t) {
                    for (var e = (new Ee).getNormalMatrix(t), n = 0, i = this.vertices.length; n < i; n++) {
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
                rotateX: function() {
                    var t = new we;
                    return function(e) {
                        return t.makeRotationX(e), this.applyMatrix(t), this
                    }
                }(),
                rotateY: function() {
                    var t = new we;
                    return function(e) {
                        return t.makeRotationY(e), this.applyMatrix(t), this
                    }
                }(),
                rotateZ: function() {
                    var t = new we;
                    return function(e) {
                        return t.makeRotationZ(e), this.applyMatrix(t), this
                    }
                }(),
                translate: function() {
                    var t = new we;
                    return function(e, n, i) {
                        return t.makeTranslation(e, n, i), this.applyMatrix(t), this
                    }
                }(),
                scale: function() {
                    var t = new we;
                    return function(e, n, i) {
                        return t.makeScale(e, n, i), this.applyMatrix(t), this
                    }
                }(),
                lookAt: function() {
                    var t = new Ze;
                    return function(e) {
                        t.lookAt(e), t.updateMatrix(), this.applyMatrix(t.matrix)
                    }
                }(),
                fromBufferGeometry: function(t) {
                    var e = this,
                        n = null !== t.index ? t.index.array : void 0,
                        i = t.attributes,
                        r = i.position.array,
                        o = void 0 !== i.normal ? i.normal.array : void 0,
                        a = void 0 !== i.color ? i.color.array : void 0,
                        s = void 0 !== i.uv ? i.uv.array : void 0,
                        c = void 0 !== i.uv2 ? i.uv2.array : void 0;
                    void 0 !== c && (this.faceVertexUvs[1] = []);
                    for (var l = [], h = [], u = [], p = 0, d = 0; p < r.length; p += 3, d += 2) e.vertices.push(new Te(r[p], r[p + 1], r[p + 2])), void 0 !== o && l.push(new Te(o[p], o[p + 1], o[p + 2])), void 0 !== a && e.colors.push(new Ue(a[p], a[p + 1], a[p + 2])), void 0 !== s && h.push(new be(s[d], s[d + 1])), void 0 !== c && u.push(new be(c[d], c[d + 1]));

                    function f(t, n, i, r) {
                        var p = void 0 !== o ? [l[t].clone(), l[n].clone(), l[i].clone()] : [],
                            d = void 0 !== a ? [e.colors[t].clone(), e.colors[n].clone(), e.colors[i].clone()] : [],
                            f = new We(t, n, i, p, d, r);
                        e.faces.push(f), void 0 !== s && e.faceVertexUvs[0].push([h[t].clone(), h[n].clone(), h[i].clone()]), void 0 !== c && e.faceVertexUvs[1].push([u[t].clone(), u[n].clone(), u[i].clone()])
                    }
                    var m = t.groups;
                    if (m.length > 0)
                        for (var p = 0; p < m.length; p++)
                            for (var v = m[p], g = v.start, y = v.count, d = g, _ = g + y; d < _; d += 3) void 0 !== n ? f(n[d], n[d + 1], n[d + 2], v.materialIndex) : f(d, d + 1, d + 2, v.materialIndex);
                    else if (void 0 !== n)
                        for (var p = 0; p < n.length; p += 3) f(n[p], n[p + 1], n[p + 2]);
                    else
                        for (var p = 0; p < r.length / 3; p += 3) f(p, p + 1, p + 2);
                    return this.computeFaceNormals(), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()), null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), this
                },
                center: function() {
                    var t = new Te;
                    return function() {
                        return this.computeBoundingBox(), this.boundingBox.getCenter(t).negate(), this.translate(t.x, t.y, t.z), this
                    }
                }(),
                normalize: function() {
                    this.computeBoundingSphere();
                    var t = this.boundingSphere.center,
                        e = this.boundingSphere.radius,
                        n = 0 === e ? 1 : 1 / e,
                        i = new we;
                    return i.set(n, 0, 0, -n * t.x, 0, n, 0, -n * t.y, 0, 0, n, -n * t.z, 0, 0, 0, 1), this.applyMatrix(i), this
                },
                computeFaceNormals: function() {
                    for (var t = new Te, e = new Te, n = 0, i = this.faces.length; n < i; n++) {
                        var r = this.faces[n],
                            o = this.vertices[r.a],
                            a = this.vertices[r.b],
                            s = this.vertices[r.c];
                        t.subVectors(s, a), e.subVectors(o, a), t.cross(e), t.normalize(), r.normal.copy(t)
                    }
                },
                computeVertexNormals: function(t) {
                    var e, n, i, r, o, a;
                    for (void 0 === t && (t = !0), a = new Array(this.vertices.length), e = 0, n = this.vertices.length; e < n; e++) a[e] = new Te;
                    if (t) {
                        var s, c, l, h = new Te,
                            u = new Te;
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
                    var o = new Ke;
                    for (o.faces = this.faces, t = 0, e = this.morphTargets.length; t < e; t++) {
                        if (!this.morphNormals[t]) {
                            this.morphNormals[t] = {}, this.morphNormals[t].faceNormals = [], this.morphNormals[t].vertexNormals = [];
                            var a = this.morphNormals[t].faceNormals,
                                s = this.morphNormals[t].vertexNormals;
                            for (n = 0, i = this.faces.length; n < i; n++) c = new Te, l = {
                                a: new Te,
                                b: new Te,
                                c: new Te
                            }, a.push(c), s.push(l)
                        }
                        var c, l, h = this.morphNormals[t];
                        for (o.vertices = this.morphTargets[t].vertices, o.computeFaceNormals(), o.computeVertexNormals(), n = 0, i = this.faces.length; n < i; n++) r = this.faces[n], c = h.faceNormals[n], l = h.vertexNormals[n], c.copy(r.normal), l.a.copy(r.vertexNormals[0]), l.b.copy(r.vertexNormals[1]), l.c.copy(r.vertexNormals[2])
                    }
                    for (n = 0, i = this.faces.length; n < i; n++)(r = this.faces[n]).normal = r.__originalFaceNormal, r.vertexNormals = r.__originalVertexNormals
                },
                computeBoundingBox: function() {
                    null === this.boundingBox && (this.boundingBox = new Ie), this.boundingBox.setFromPoints(this.vertices)
                },
                computeBoundingSphere: function() {
                    null === this.boundingSphere && (this.boundingSphere = new De), this.boundingSphere.setFromPoints(this.vertices)
                },
                merge: function(t, e, n) {
                    if (t && t.isGeometry) {
                        var i, r = this.vertices.length,
                            o = this.vertices,
                            a = t.vertices,
                            s = this.faces,
                            c = t.faces,
                            l = this.faceVertexUvs[0],
                            h = t.faceVertexUvs[0],
                            u = this.colors,
                            p = t.colors;
                        void 0 === n && (n = 0), void 0 !== e && (i = (new Ee).getNormalMatrix(e));
                        for (var d = 0, f = a.length; d < f; d++) {
                            var m = a[d],
                                v = m.clone();
                            void 0 !== e && v.applyMatrix4(e), o.push(v)
                        }
                        for (var d = 0, f = p.length; d < f; d++) u.push(p[d].clone());
                        for (d = 0, f = c.length; d < f; d++) {
                            var g, y, _, x = c[d],
                                b = x.vertexNormals,
                                w = x.vertexColors;
                            (g = new We(x.a + r, x.b + r, x.c + r)).normal.copy(x.normal), void 0 !== i && g.normal.applyMatrix3(i).normalize();
                            for (var M = 0, T = b.length; M < T; M++) y = b[M].clone(), void 0 !== i && y.applyMatrix3(i).normalize(), g.vertexNormals.push(y);
                            g.color.copy(x.color);
                            for (var M = 0, T = w.length; M < T; M++) _ = w[M], g.vertexColors.push(_.clone());
                            g.materialIndex = x.materialIndex + n, s.push(g)
                        }
                        for (d = 0, f = h.length; d < f; d++) {
                            var E = h[d],
                                S = [];
                            if (void 0 !== E) {
                                for (var M = 0, T = E.length; M < T; M++) S.push(E[M].clone());
                                l.push(S)
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
                        this.vertices.push(new Te(i.x, i.y, i.z || 0))
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
                    return (new Ke).copy(this)
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
            }), Object.defineProperty(Qe.prototype, "needsUpdate", {
                set: function(t) {
                    !0 === t && this.version++
                }
            }), Object.assign(Qe.prototype, {
                isBufferAttribute: !0,
                onUploadCallback: function() {},
                setArray: function(t) {
                    if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
                    return this.count = void 0 !== t ? t.length / this.itemSize : 0, this.array = t, this
                },
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
                        void 0 === o && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", i), o = new Ue), e[n++] = o.r, e[n++] = o.g, e[n++] = o.b
                    }
                    return this
                },
                copyVector2sArray: function(t) {
                    for (var e = this.array, n = 0, i = 0, r = t.length; i < r; i++) {
                        var o = t[i];
                        void 0 === o && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", i), o = new be), e[n++] = o.x, e[n++] = o.y
                    }
                    return this
                },
                copyVector3sArray: function(t) {
                    for (var e = this.array, n = 0, i = 0, r = t.length; i < r; i++) {
                        var o = t[i];
                        void 0 === o && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", i), o = new Te), e[n++] = o.x, e[n++] = o.y, e[n++] = o.z
                    }
                    return this
                },
                copyVector4sArray: function(t) {
                    for (var e = this.array, n = 0, i = 0, r = t.length; i < r; i++) {
                        var o = t[i];
                        void 0 === o && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", i), o = new Le), e[n++] = o.x, e[n++] = o.y, e[n++] = o.z, e[n++] = o.w
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
                }
            }), $e.prototype = Object.create(Qe.prototype), $e.prototype.constructor = $e, tn.prototype = Object.create(Qe.prototype), tn.prototype.constructor = tn, en.prototype = Object.create(Qe.prototype), en.prototype.constructor = en, nn.prototype = Object.create(Qe.prototype), nn.prototype.constructor = nn, rn.prototype = Object.create(Qe.prototype), rn.prototype.constructor = rn, on.prototype = Object.create(Qe.prototype), on.prototype.constructor = on, an.prototype = Object.create(Qe.prototype), an.prototype.constructor = an, sn.prototype = Object.create(Qe.prototype), sn.prototype.constructor = sn, cn.prototype = Object.create(Qe.prototype), cn.prototype.constructor = cn, Object.assign(ln.prototype, {
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
                            void 0 !== w ? this.uvs.push(w[0], w[1], w[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ", l), this.uvs.push(new be, new be, new be))
                        }
                        if (!0 === a) {
                            var w = r[1][l];
                            void 0 !== w ? this.uvs2.push(w[0], w[1], w[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ", l), this.uvs2.push(new be, new be, new be))
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
                    return this.computeGroups(t), this.verticesNeedUpdate = t.verticesNeedUpdate, this.normalsNeedUpdate = t.normalsNeedUpdate, this.colorsNeedUpdate = t.colorsNeedUpdate, this.uvsNeedUpdate = t.uvsNeedUpdate, this.groupsNeedUpdate = t.groupsNeedUpdate, this
                }
            });
            var un = 1;

            function pn() {
                Object.defineProperty(this, "id", {
                    value: un += 2
                }), this.uuid = xe.generateUUID(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
                    start: 0,
                    count: 1 / 0
                }, this.userData = {}
            }

            function dn(t, e, n, i, r, o) {
                Ke.call(this), this.type = "BoxGeometry", this.parameters = {
                    width: t,
                    height: e,
                    depth: n,
                    widthSegments: i,
                    heightSegments: r,
                    depthSegments: o
                }, this.fromBufferGeometry(new fn(t, e, n, i, r, o)), this.mergeVertices()
            }

            function fn(t, e, n, i, r, o) {
                pn.call(this), this.type = "BoxBufferGeometry", this.parameters = {
                    width: t,
                    height: e,
                    depth: n,
                    widthSegments: i,
                    heightSegments: r,
                    depthSegments: o
                };
                var a = this;
                t = t || 1, e = e || 1, n = n || 1, i = Math.floor(i) || 1, r = Math.floor(r) || 1, o = Math.floor(o) || 1;
                var s = [],
                    c = [],
                    l = [],
                    h = [],
                    u = 0,
                    p = 0;

                function d(t, e, n, i, r, o, d, f, m, v, g) {
                    var y, _, x = o / m,
                        b = d / v,
                        w = o / 2,
                        M = d / 2,
                        T = f / 2,
                        E = m + 1,
                        S = v + 1,
                        A = 0,
                        P = 0,
                        L = new Te;
                    for (_ = 0; _ < S; _++) {
                        var R = _ * b - M;
                        for (y = 0; y < E; y++) {
                            var C = y * x - w;
                            L[t] = C * i, L[e] = R * r, L[n] = T, c.push(L.x, L.y, L.z), L[t] = 0, L[e] = 0, L[n] = f > 0 ? 1 : -1, l.push(L.x, L.y, L.z), h.push(y / m), h.push(1 - _ / v), A += 1
                        }
                    }
                    for (_ = 0; _ < v; _++)
                        for (y = 0; y < m; y++) {
                            var O = u + y + E * _,
                                I = u + y + E * (_ + 1),
                                D = u + (y + 1) + E * (_ + 1),
                                N = u + (y + 1) + E * _;
                            s.push(O, I, N), s.push(I, D, N), P += 6
                        }
                    a.addGroup(p, P, g), p += P, u += A
                }
                d("z", "y", "x", -1, -1, n, e, t, o, r, 0), d("z", "y", "x", 1, -1, n, e, -t, o, r, 1), d("x", "z", "y", 1, 1, t, n, e, i, o, 2), d("x", "z", "y", 1, -1, t, n, -e, i, o, 3), d("x", "y", "z", 1, -1, t, e, n, i, r, 4), d("x", "y", "z", -1, -1, t, e, -n, i, r, 5), this.setIndex(s), this.addAttribute("position", new sn(c, 3)), this.addAttribute("normal", new sn(l, 3)), this.addAttribute("uv", new sn(h, 2))
            }

            function mn(t, e, n, i) {
                Ke.call(this), this.type = "PlaneGeometry", this.parameters = {
                    width: t,
                    height: e,
                    widthSegments: n,
                    heightSegments: i
                }, this.fromBufferGeometry(new vn(t, e, n, i)), this.mergeVertices()
            }

            function vn(t, e, n, i) {
                pn.call(this), this.type = "PlaneBufferGeometry", this.parameters = {
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
                this.setIndex(f), this.addAttribute("position", new sn(m, 3)), this.addAttribute("normal", new sn(v, 3)), this.addAttribute("uv", new sn(g, 2))
            }
            pn.prototype = Object.assign(Object.create(e.prototype), {
                constructor: pn,
                isBufferGeometry: !0,
                getIndex: function() {
                    return this.index
                },
                setIndex: function(t) {
                    Array.isArray(t) ? this.index = new(hn(t) > 65535 ? an : rn)(t, 1) : this.index = t
                },
                addAttribute: function(t, e) {
                    return e && e.isBufferAttribute || e && e.isInterleavedBufferAttribute ? "index" === t ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), this.setIndex(e), this) : (this.attributes[t] = e, this) : (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), this.addAttribute(t, new Qe(arguments[1], arguments[2])))
                },
                getAttribute: function(t) {
                    return this.attributes[t]
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
                        var i = (new Ee).getNormalMatrix(t);
                        i.applyToBufferAttribute(n), n.needsUpdate = !0
                    }
                    return null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this
                },
                rotateX: function() {
                    var t = new we;
                    return function(e) {
                        return t.makeRotationX(e), this.applyMatrix(t), this
                    }
                }(),
                rotateY: function() {
                    var t = new we;
                    return function(e) {
                        return t.makeRotationY(e), this.applyMatrix(t), this
                    }
                }(),
                rotateZ: function() {
                    var t = new we;
                    return function(e) {
                        return t.makeRotationZ(e), this.applyMatrix(t), this
                    }
                }(),
                translate: function() {
                    var t = new we;
                    return function(e, n, i) {
                        return t.makeTranslation(e, n, i), this.applyMatrix(t), this
                    }
                }(),
                scale: function() {
                    var t = new we;
                    return function(e, n, i) {
                        return t.makeScale(e, n, i), this.applyMatrix(t), this
                    }
                }(),
                lookAt: function() {
                    var t = new Ze;
                    return function(e) {
                        t.lookAt(e), t.updateMatrix(), this.applyMatrix(t.matrix)
                    }
                }(),
                center: function() {
                    var t = new Te;
                    return function() {
                        return this.computeBoundingBox(), this.boundingBox.getCenter(t).negate(), this.translate(t.x, t.y, t.z), this
                    }
                }(),
                setFromObject: function(t) {
                    var e = t.geometry;
                    if (t.isPoints || t.isLine) {
                        var n = new sn(3 * e.vertices.length, 3),
                            i = new sn(3 * e.colors.length, 3);
                        if (this.addAttribute("position", n.copyVector3sArray(e.vertices)), this.addAttribute("color", i.copyColorsArray(e.colors)), e.lineDistances && e.lineDistances.length === e.vertices.length) {
                            var r = new sn(e.lineDistances.length, 1);
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
                    return this.addAttribute("position", new sn(e, 3)), this
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
                    return t.__directGeometry = (new ln).fromGeometry(t), this.fromDirectGeometry(t.__directGeometry)
                },
                fromDirectGeometry: function(t) {
                    var e = new Float32Array(3 * t.vertices.length);
                    if (this.addAttribute("position", new Qe(e, 3).copyVector3sArray(t.vertices)), t.normals.length > 0) {
                        var n = new Float32Array(3 * t.normals.length);
                        this.addAttribute("normal", new Qe(n, 3).copyVector3sArray(t.normals))
                    }
                    if (t.colors.length > 0) {
                        var i = new Float32Array(3 * t.colors.length);
                        this.addAttribute("color", new Qe(i, 3).copyColorsArray(t.colors))
                    }
                    if (t.uvs.length > 0) {
                        var r = new Float32Array(2 * t.uvs.length);
                        this.addAttribute("uv", new Qe(r, 2).copyVector2sArray(t.uvs))
                    }
                    if (t.uvs2.length > 0) {
                        var o = new Float32Array(2 * t.uvs2.length);
                        this.addAttribute("uv2", new Qe(o, 2).copyVector2sArray(t.uvs2))
                    }
                    for (var a in this.groups = t.groups, t.morphTargets) {
                        for (var s = [], c = t.morphTargets[a], l = 0, h = c.length; l < h; l++) {
                            var u = c[l],
                                p = new sn(3 * u.data.length, 3);
                            p.name = u.name, s.push(p.copyVector3sArray(u.data))
                        }
                        this.morphAttributes[a] = s
                    }
                    if (t.skinIndices.length > 0) {
                        var d = new sn(4 * t.skinIndices.length, 4);
                        this.addAttribute("skinIndex", d.copyVector4sArray(t.skinIndices))
                    }
                    if (t.skinWeights.length > 0) {
                        var f = new sn(4 * t.skinWeights.length, 4);
                        this.addAttribute("skinWeight", f.copyVector4sArray(t.skinWeights))
                    }
                    return null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()), this
                },
                computeBoundingBox: function() {
                    null === this.boundingBox && (this.boundingBox = new Ie);
                    var t = this.attributes.position;
                    void 0 !== t ? this.boundingBox.setFromBufferAttribute(t) : this.boundingBox.makeEmpty(), (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
                },
                computeBoundingSphere: function() {
                    var t = new Ie,
                        e = new Te;
                    return function() {
                        null === this.boundingSphere && (this.boundingSphere = new De);
                        var n = this.attributes.position;
                        if (n) {
                            var i = this.boundingSphere.center;
                            t.setFromBufferAttribute(n), t.getCenter(i);
                            for (var r = 0, o = 0, a = n.count; o < a; o++) e.x = n.getX(o), e.y = n.getY(o), e.z = n.getZ(o), r = Math.max(r, i.distanceToSquared(e));
                            this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
                        }
                    }
                }(),
                computeFaceNormals: function() {},
                computeVertexNormals: function() {
                    var t = this.index,
                        e = this.attributes;
                    if (e.position) {
                        var n = e.position.array;
                        if (void 0 === e.normal) this.addAttribute("normal", new Qe(new Float32Array(n.length), 3));
                        else
                            for (var i = e.normal.array, r = 0, o = i.length; r < o; r++) i[r] = 0;
                        var a, s, c, l = e.normal.array,
                            h = new Te,
                            u = new Te,
                            p = new Te,
                            d = new Te,
                            f = new Te;
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
                                for (var r = n[i], o = r.array, a = t.attributes[i], s = a.array, c = a.itemSize, l = 0, h = c * e; l < s.length; l++, h++) o[h] = s[l];
                        return this
                    }
                    console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", t)
                },
                normalizeNormals: function() {
                    var t = new Te;
                    return function() {
                        for (var e = this.attributes.normal, n = 0, i = e.count; n < i; n++) t.x = e.getX(n), t.y = e.getY(n), t.z = e.getZ(n), t.normalize(), e.setXYZ(n, t.x, t.y, t.z)
                    }
                }(),
                toNonIndexed: function() {
                    if (null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."), this;
                    var t = new pn,
                        e = this.index.array,
                        n = this.attributes;
                    for (var i in n) {
                        for (var r = n[i], o = r.array, a = r.itemSize, s = new o.constructor(e.length * a), c = 0, l = 0, h = 0, u = e.length; h < u; h++) {
                            c = e[h] * a;
                            for (var p = 0; p < a; p++) s[l++] = o[c++]
                        }
                        t.addAttribute(i, new Qe(s, a))
                    }
                    for (var d = this.groups, h = 0, u = d.length; h < u; h++) {
                        var f = d[h];
                        t.addGroup(f.start, f.count, f.materialIndex)
                    }
                    return t
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
                    if (null !== i) {
                        var r = Array.prototype.slice.call(i.array);
                        t.data.index = {
                            type: i.array.constructor.name,
                            array: r
                        }
                    }
                    var o = this.attributes;
                    for (var n in o) {
                        var a = o[n],
                            r = Array.prototype.slice.call(a.array);
                        t.data.attributes[n] = {
                            itemSize: a.itemSize,
                            type: a.array.constructor.name,
                            array: r,
                            normalized: a.normalized
                        }
                    }
                    var s = this.groups;
                    s.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(s)));
                    var c = this.boundingSphere;
                    return null !== c && (t.data.boundingSphere = {
                        center: c.center.toArray(),
                        radius: c.radius
                    }), t
                },
                clone: function() {
                    return (new pn).copy(this)
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
            }), dn.prototype = Object.create(Ke.prototype), dn.prototype.constructor = dn, fn.prototype = Object.create(pn.prototype), fn.prototype.constructor = fn, mn.prototype = Object.create(Ke.prototype), mn.prototype.constructor = mn, vn.prototype = Object.create(pn.prototype), vn.prototype.constructor = vn;
            var gn = 0;

            function yn() {
                Object.defineProperty(this, "id", {
                    value: gn++
                }), this.uuid = xe.generateUUID(), this.name = "", this.type = "Material", this.fog = !0, this.lights = !0, this.blending = m, this.side = c, this.flatShading = !1, this.vertexColors = u, this.opacity = 1, this.transparent = !1, this.blendSrc = L, this.blendDst = R, this.blendEquation = x, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = k, this.depthTest = !0, this.depthWrite = !0, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaTest = 0, this.premultipliedAlpha = !1, this.overdraw = 0, this.visible = !0, this.userData = {}, this.needsUpdate = !0
            }

            function _n(t) {
                yn.call(this), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.extensions = {
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

            function xn(t, e) {
                this.origin = void 0 !== t ? t : new Te, this.direction = void 0 !== e ? e : new Te
            }

            function bn(t, e, n) {
                this.a = void 0 !== t ? t : new Te, this.b = void 0 !== e ? e : new Te, this.c = void 0 !== n ? n : new Te
            }

            function wn(t) {
                yn.call(this), this.type = "MeshBasicMaterial", this.color = new Ue(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = V, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.lights = !1, this.setValues(t)
            }

            function Mn(t, e) {
                Ze.call(this), this.type = "Mesh", this.geometry = void 0 !== t ? t : new pn, this.material = void 0 !== e ? e : new wn({
                    color: 16777215 * Math.random()
                }), this.drawMode = ae, this.updateMorphTargets()
            }

            function Tn(t, e) {
                return Math.abs(e[1]) - Math.abs(t[1])
            }

            function En(t, e, n, i, r, o, a, s, c, l) {
                t = void 0 !== t ? t : [], e = void 0 !== e ? e : Q, Pe.call(this, t, e, n, i, r, o, a, s, c, l), this.flipY = !1
            }

            function Sn(t, e, n, i) {
                Pe.call(this, null), this.image = {
                    data: t,
                    width: e,
                    height: n,
                    depth: i
                }, this.magFilter = ct, this.minFilter = ct, this.generateMipmaps = !1, this.flipY = !1
            }
            yn.prototype = Object.assign(Object.create(e.prototype), {
                constructor: yn,
                isMaterial: !0,
                onBeforeCompile: function() {},
                setValues: function(t) {
                    if (void 0 !== t)
                        for (var e in t) {
                            var n = t[e];
                            if (void 0 !== n)
                                if ("shading" !== e) {
                                    var i = this[e];
                                    void 0 !== i ? i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[e] = "overdraw" === e ? Number(n) : n : console.warn("THREE." + this.type + ": '" + e + "' is not a property of this material.")
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
                    if (n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), void 0 !== this.roughness && (n.roughness = this.roughness), void 0 !== this.metalness && (n.metalness = this.metalness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), 1 !== this.emissiveIntensity && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), void 0 !== this.shininess && (n.shininess = this.shininess), void 0 !== this.clearCoat && (n.clearCoat = this.clearCoat), void 0 !== this.clearCoatRoughness && (n.clearCoatRoughness = this.clearCoatRoughness), this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(t).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t).uuid, n.reflectivity = this.reflectivity, void 0 !== this.combine && (n.combine = this.combine), void 0 !== this.envMapIntensity && (n.envMapIntensity = this.envMapIntensity)), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid), void 0 !== this.size && (n.size = this.size), void 0 !== this.sizeAttenuation && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== m && (n.blending = this.blending), !0 === this.flatShading && (n.flatShading = this.flatShading), this.side !== c && (n.side = this.side), this.vertexColors !== u && (n.vertexColors = this.vertexColors), this.opacity < 1 && (n.opacity = this.opacity), !0 === this.transparent && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, 0 !== this.rotation && (n.rotation = this.rotation), !0 === this.polygonOffset && (n.polygonOffset = !0), 0 !== this.polygonOffsetFactor && (n.polygonOffsetFactor = this.polygonOffsetFactor), 0 !== this.polygonOffsetUnits && (n.polygonOffsetUnits = this.polygonOffsetUnits), 1 !== this.linewidth && (n.linewidth = this.linewidth), void 0 !== this.dashSize && (n.dashSize = this.dashSize), void 0 !== this.gapSize && (n.gapSize = this.gapSize), void 0 !== this.scale && (n.scale = this.scale), !0 === this.dithering && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), !0 === this.premultipliedAlpha && (n.premultipliedAlpha = this.premultipliedAlpha), !0 === this.wireframe && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (n.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (n.wireframeLinejoin = this.wireframeLinejoin), !0 === this.morphTargets && (n.morphTargets = !0), !0 === this.skinning && (n.skinning = !0), !1 === this.visible && (n.visible = !1), "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData), e) {
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
                    this.name = t.name, this.fog = t.fog, this.lights = t.lights, this.blending = t.blending, this.side = t.side, this.flatShading = t.flatShading, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.premultipliedAlpha = t.premultipliedAlpha, this.overdraw = t.overdraw, this.visible = t.visible, this.userData = JSON.parse(JSON.stringify(t.userData)), this.clipShadows = t.clipShadows, this.clipIntersection = t.clipIntersection;
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
            }), _n.prototype = Object.create(yn.prototype), _n.prototype.constructor = _n, _n.prototype.isShaderMaterial = !0, _n.prototype.copy = function(t) {
                return yn.prototype.copy.call(this, t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = Fe.clone(t.uniforms), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.lights = t.lights, this.clipping = t.clipping, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this.extensions = t.extensions, this
            }, _n.prototype.toJSON = function(t) {
                var e = yn.prototype.toJSON.call(this, t);
                for (var n in e.uniforms = {}, this.uniforms) {
                    var i = this.uniforms[n],
                        r = i.value;
                    r.isTexture ? e.uniforms[n] = {
                        type: "t",
                        value: r.toJSON(t).uuid
                    } : r.isColor ? e.uniforms[n] = {
                        type: "c",
                        value: r.getHex()
                    } : r.isVector2 ? e.uniforms[n] = {
                        type: "v2",
                        value: r.toArray()
                    } : r.isVector3 ? e.uniforms[n] = {
                        type: "v3",
                        value: r.toArray()
                    } : r.isVector4 ? e.uniforms[n] = {
                        type: "v4",
                        value: r.toArray()
                    } : r.isMatrix4 ? e.uniforms[n] = {
                        type: "m4",
                        value: r.toArray()
                    } : e.uniforms[n] = {
                        value: r
                    }
                }
                return Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader, e
            }, Object.assign(xn.prototype, {
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
                    return void 0 === e && (console.warn("THREE.Ray: .at() target is now required"), e = new Te), e.copy(this.direction).multiplyScalar(t).add(this.origin)
                },
                lookAt: function(t) {
                    return this.direction.copy(t).sub(this.origin).normalize(), this
                },
                recast: function() {
                    var t = new Te;
                    return function(e) {
                        return this.origin.copy(this.at(e, t)), this
                    }
                }(),
                closestPointToPoint: function(t, e) {
                    void 0 === e && (console.warn("THREE.Ray: .closestPointToPoint() target is now required"), e = new Te), e.subVectors(t, this.origin);
                    var n = e.dot(this.direction);
                    return n < 0 ? e.copy(this.origin) : e.copy(this.direction).multiplyScalar(n).add(this.origin)
                },
                distanceToPoint: function(t) {
                    return Math.sqrt(this.distanceSqToPoint(t))
                },
                distanceSqToPoint: function() {
                    var t = new Te;
                    return function(e) {
                        var n = t.subVectors(e, this.origin).dot(this.direction);
                        return n < 0 ? this.origin.distanceToSquared(e) : (t.copy(this.direction).multiplyScalar(n).add(this.origin), t.distanceToSquared(e))
                    }
                }(),
                distanceSqToSegment: function() {
                    var t = new Te,
                        e = new Te,
                        n = new Te;
                    return function(i, r, o, a) {
                        t.copy(i).add(r).multiplyScalar(.5), e.copy(r).sub(i).normalize(), n.copy(this.origin).sub(t);
                        var s, c, l, h, u = .5 * i.distanceTo(r),
                            p = -this.direction.dot(e),
                            d = n.dot(this.direction),
                            f = -n.dot(e),
                            m = n.lengthSq(),
                            v = Math.abs(1 - p * p);
                        if (v > 0)
                            if (c = p * d - f, h = u * v, (s = p * f - d) >= 0)
                                if (c >= -h)
                                    if (c <= h) {
                                        var g = 1 / v;
                                        l = (s *= g) * (s + p * (c *= g) + 2 * d) + c * (p * s + c + 2 * f) + m
                                    } else c = u, s = Math.max(0, -(p * c + d)), l = -s * s + c * (c + 2 * f) + m;
                        else c = -u, s = Math.max(0, -(p * c + d)), l = -s * s + c * (c + 2 * f) + m;
                        else c <= -h ? (s = Math.max(0, -(-p * u + d)), c = s > 0 ? -u : Math.min(Math.max(-u, -f), u), l = -s * s + c * (c + 2 * f) + m) : c <= h ? (s = 0, c = Math.min(Math.max(-u, -f), u), l = c * (c + 2 * f) + m) : (s = Math.max(0, -(p * u + d)), c = s > 0 ? u : Math.min(Math.max(-u, -f), u), l = -s * s + c * (c + 2 * f) + m);
                        else c = p > 0 ? -u : u, s = Math.max(0, -(p * c + d)), l = -s * s + c * (c + 2 * f) + m;
                        return o && o.copy(this.direction).multiplyScalar(s).add(this.origin), a && a.copy(e).multiplyScalar(c).add(t), l
                    }
                }(),
                intersectSphere: function() {
                    var t = new Te;
                    return function(e, n) {
                        t.subVectors(e.center, this.origin);
                        var i = t.dot(this.direction),
                            r = t.dot(t) - i * i,
                            o = e.radius * e.radius;
                        if (r > o) return null;
                        var a = Math.sqrt(o - r),
                            s = i - a,
                            c = i + a;
                        return s < 0 && c < 0 ? null : s < 0 ? this.at(c, n) : this.at(s, n)
                    }
                }(),
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
                intersectsBox: function() {
                    var t = new Te;
                    return function(e) {
                        return null !== this.intersectBox(e, t)
                    }
                }(),
                intersectTriangle: function() {
                    var t = new Te,
                        e = new Te,
                        n = new Te,
                        i = new Te;
                    return function(r, o, a, s, c) {
                        e.subVectors(o, r), n.subVectors(a, r), i.crossVectors(e, n);
                        var l, h = this.direction.dot(i);
                        if (h > 0) {
                            if (s) return null;
                            l = 1
                        } else {
                            if (!(h < 0)) return null;
                            l = -1, h = -h
                        }
                        t.subVectors(this.origin, r);
                        var u = l * this.direction.dot(n.crossVectors(t, n));
                        if (u < 0) return null;
                        var p = l * this.direction.dot(e.cross(t));
                        if (p < 0) return null;
                        if (u + p > h) return null;
                        var d = -l * t.dot(i);
                        return d < 0 ? null : this.at(d / h, c)
                    }
                }(),
                applyMatrix4: function(t) {
                    return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this
                },
                equals: function(t) {
                    return t.origin.equals(this.origin) && t.direction.equals(this.direction)
                }
            }), Object.assign(bn, {
                getNormal: function() {
                    var t = new Te;
                    return function(e, n, i, r) {
                        void 0 === r && (console.warn("THREE.Triangle: .getNormal() target is now required"), r = new Te), r.subVectors(i, n), t.subVectors(e, n), r.cross(t);
                        var o = r.lengthSq();
                        return o > 0 ? r.multiplyScalar(1 / Math.sqrt(o)) : r.set(0, 0, 0)
                    }
                }(),
                getBarycoord: function() {
                    var t = new Te,
                        e = new Te,
                        n = new Te;
                    return function(i, r, o, a, s) {
                        t.subVectors(a, r), e.subVectors(o, r), n.subVectors(i, r);
                        var c = t.dot(t),
                            l = t.dot(e),
                            h = t.dot(n),
                            u = e.dot(e),
                            p = e.dot(n),
                            d = c * u - l * l;
                        if (void 0 === s && (console.warn("THREE.Triangle: .getBarycoord() target is now required"), s = new Te), 0 === d) return s.set(-2, -1, -1);
                        var f = 1 / d,
                            m = (u * h - l * p) * f,
                            v = (c * p - l * h) * f;
                        return s.set(1 - m - v, v, m)
                    }
                }(),
                containsPoint: function() {
                    var t = new Te;
                    return function(e, n, i, r) {
                        return bn.getBarycoord(e, n, i, r, t), t.x >= 0 && t.y >= 0 && t.x + t.y <= 1
                    }
                }(),
                getUV: function() {
                    var t = new Te;
                    return function(e, n, i, r, o, a, s, c) {
                        return this.getBarycoord(e, n, i, r, t), c.set(0, 0), c.addScaledVector(o, t.x), c.addScaledVector(a, t.y), c.addScaledVector(s, t.z), c
                    }
                }()
            }), Object.assign(bn.prototype, {
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
                    var t = new Te,
                        e = new Te;
                    return function() {
                        return t.subVectors(this.c, this.b), e.subVectors(this.a, this.b), .5 * t.cross(e).length()
                    }
                }(),
                getMidpoint: function(t) {
                    return void 0 === t && (console.warn("THREE.Triangle: .getMidpoint() target is now required"), t = new Te), t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
                },
                getNormal: function(t) {
                    return bn.getNormal(this.a, this.b, this.c, t)
                },
                getPlane: function(t) {
                    return void 0 === t && (console.warn("THREE.Triangle: .getPlane() target is now required"), t = new Te), t.setFromCoplanarPoints(this.a, this.b, this.c)
                },
                getBarycoord: function(t, e) {
                    return bn.getBarycoord(t, this.a, this.b, this.c, e)
                },
                containsPoint: function(t) {
                    return bn.containsPoint(t, this.a, this.b, this.c)
                },
                getUV: function(t, e, n, i, r) {
                    return bn.getUV(t, this.a, this.b, this.c, e, n, i, r)
                },
                intersectsBox: function(t) {
                    return t.intersectsTriangle(this)
                },
                closestPointToPoint: function() {
                    var t = new Te,
                        e = new Te,
                        n = new Te,
                        i = new Te,
                        r = new Te,
                        o = new Te;
                    return function(a, s) {
                        void 0 === s && (console.warn("THREE.Triangle: .closestPointToPoint() target is now required"), s = new Te);
                        var c, l, h = this.a,
                            u = this.b,
                            p = this.c;
                        t.subVectors(u, h), e.subVectors(p, h), i.subVectors(a, h);
                        var d = t.dot(i),
                            f = e.dot(i);
                        if (d <= 0 && f <= 0) return s.copy(h);
                        r.subVectors(a, u);
                        var m = t.dot(r),
                            v = e.dot(r);
                        if (m >= 0 && v <= m) return s.copy(u);
                        var g = d * v - m * f;
                        if (g <= 0 && d >= 0 && m <= 0) return c = d / (d - m), s.copy(h).addScaledVector(t, c);
                        o.subVectors(a, p);
                        var y = t.dot(o),
                            _ = e.dot(o);
                        if (_ >= 0 && y <= _) return s.copy(p);
                        var x = y * f - d * _;
                        if (x <= 0 && f >= 0 && _ <= 0) return l = f / (f - _), s.copy(h).addScaledVector(e, l);
                        var b = m * _ - y * v;
                        if (b <= 0 && v - m >= 0 && y - _ >= 0) return n.subVectors(p, u), l = (v - m) / (v - m + (y - _)), s.copy(u).addScaledVector(n, l);
                        var w = 1 / (b + x + g);
                        return c = x * w, l = g * w, s.copy(h).addScaledVector(t, c).addScaledVector(e, l)
                    }
                }(),
                equals: function(t) {
                    return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c)
                }
            }), wn.prototype = Object.create(yn.prototype), wn.prototype.constructor = wn, wn.prototype.isMeshBasicMaterial = !0, wn.prototype.copy = function(t) {
                return yn.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this
            }, Mn.prototype = Object.assign(Object.create(Ze.prototype), {
                constructor: Mn,
                isMesh: !0,
                setDrawMode: function(t) {
                    this.drawMode = t
                },
                copy: function(t) {
                    return Ze.prototype.copy.call(this, t), this.drawMode = t.drawMode, void 0 !== t.morphTargetInfluences && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), void 0 !== t.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this
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
                        if (void 0 !== s && s.length > 0)
                            for (this.morphTargetInfluences = [], this.morphTargetDictionary = {}, t = 0, e = s.length; t < e; t++) n = s[t].name || String(t), this.morphTargetInfluences.push(0), this.morphTargetDictionary[n] = t
                    }
                },
                raycast: function() {
                    var t = new we,
                        e = new xn,
                        n = new De,
                        i = new Te,
                        r = new Te,
                        o = new Te,
                        a = new Te,
                        s = new Te,
                        c = new Te,
                        u = new be,
                        p = new be,
                        d = new be,
                        f = new Te,
                        m = new Te;

                    function v(t, e, n, i, r, o, a, s) {
                        if (null === (e.side === l ? i.intersectTriangle(a, o, r, !0, s) : i.intersectTriangle(r, o, a, e.side !== h, s))) return null;
                        m.copy(s), m.applyMatrix4(t.matrixWorld);
                        var c = n.ray.origin.distanceTo(m);
                        return c < n.near || c > n.far ? null : {
                            distance: c,
                            point: m.clone(),
                            object: t
                        }
                    }

                    function g(t, e, n, a, s, c, l, h, m) {
                        i.fromBufferAttribute(s, l), r.fromBufferAttribute(s, h), o.fromBufferAttribute(s, m);
                        var g = v(t, e, n, a, i, r, o, f);
                        if (g) {
                            c && (u.fromBufferAttribute(c, l), p.fromBufferAttribute(c, h), d.fromBufferAttribute(c, m), g.uv = bn.getUV(f, i, r, o, u, p, d, new be));
                            var y = new We(l, h, m);
                            bn.getNormal(i, r, o, y.normal), g.face = y
                        }
                        return g
                    }
                    return function(l, h) {
                        var m, y = this.geometry,
                            _ = this.material,
                            x = this.matrixWorld;
                        if (void 0 !== _ && (null === y.boundingSphere && y.computeBoundingSphere(), n.copy(y.boundingSphere), n.applyMatrix4(x), !1 !== l.ray.intersectsSphere(n) && (t.getInverse(x), e.copy(l.ray).applyMatrix4(t), null === y.boundingBox || !1 !== e.intersectsBox(y.boundingBox))))
                            if (y.isBufferGeometry) {
                                var b, w, M, T, E, S, A, P, L, R, C, O = y.index,
                                    I = y.attributes.position,
                                    D = y.attributes.uv,
                                    N = y.groups,
                                    B = y.drawRange;
                                if (null !== O)
                                    if (Array.isArray(_))
                                        for (T = 0, S = N.length; T < S; T++)
                                            for (P = N[T], L = _[P.materialIndex], R = Math.max(P.start, B.start), C = Math.min(P.start + P.count, B.start + B.count), E = R, A = C; E < A; E += 3) b = O.getX(E), w = O.getX(E + 1), M = O.getX(E + 2), (m = g(this, L, l, e, I, D, b, w, M)) && (m.faceIndex = Math.floor(E / 3), h.push(m));
                                    else
                                        for (R = Math.max(0, B.start), C = Math.min(O.count, B.start + B.count), T = R, S = C; T < S; T += 3) b = O.getX(T), w = O.getX(T + 1), M = O.getX(T + 2), (m = g(this, _, l, e, I, D, b, w, M)) && (m.faceIndex = Math.floor(T / 3), h.push(m));
                                else if (void 0 !== I)
                                    if (Array.isArray(_))
                                        for (T = 0, S = N.length; T < S; T++)
                                            for (P = N[T], L = _[P.materialIndex], R = Math.max(P.start, B.start), C = Math.min(P.start + P.count, B.start + B.count), E = R, A = C; E < A; E += 3)(m = g(this, L, l, e, I, D, b = E, w = E + 1, M = E + 2)) && (m.faceIndex = Math.floor(E / 3), h.push(m));
                                    else
                                        for (R = Math.max(0, B.start), C = Math.min(I.count, B.start + B.count), T = R, S = C; T < S; T += 3)(m = g(this, _, l, e, I, D, b = T, w = T + 1, M = T + 2)) && (m.faceIndex = Math.floor(T / 3), h.push(m))
                            } else if (y.isGeometry) {
                            var H, F, k, U, z = Array.isArray(_),
                                G = y.vertices,
                                j = y.faces,
                                V = y.faceVertexUvs[0];
                            V.length > 0 && (U = V);
                            for (var W = 0, X = j.length; W < X; W++) {
                                var q = j[W],
                                    Y = z ? _[q.materialIndex] : _;
                                if (void 0 !== Y) {
                                    if (H = G[q.a], F = G[q.b], k = G[q.c], !0 === Y.morphTargets) {
                                        var Z = y.morphTargets,
                                            J = this.morphTargetInfluences;
                                        i.set(0, 0, 0), r.set(0, 0, 0), o.set(0, 0, 0);
                                        for (var K = 0, Q = Z.length; K < Q; K++) {
                                            var $ = J[K];
                                            if (0 !== $) {
                                                var tt = Z[K].vertices;
                                                i.addScaledVector(a.subVectors(tt[q.a], H), $), r.addScaledVector(s.subVectors(tt[q.b], F), $), o.addScaledVector(c.subVectors(tt[q.c], k), $)
                                            }
                                        }
                                        i.add(H), r.add(F), o.add(k), H = i, F = r, k = o
                                    }
                                    if (m = v(this, Y, l, e, H, F, k, f)) {
                                        if (U && U[W]) {
                                            var et = U[W];
                                            u.copy(et[0]), p.copy(et[1]), d.copy(et[2]), m.uv = bn.getUV(f, H, F, k, u, p, d, new be)
                                        }
                                        m.face = q, m.faceIndex = W, h.push(m)
                                    }
                                }
                            }
                        }
                    }
                }(),
                clone: function() {
                    return new this.constructor(this.geometry, this.material).copy(this)
                }
            }), En.prototype = Object.create(Pe.prototype), En.prototype.constructor = En, En.prototype.isCubeTexture = !0, Object.defineProperty(En.prototype, "images", {
                get: function() {
                    return this.image
                },
                set: function(t) {
                    this.image = t
                }
            }), Sn.prototype = Object.create(Pe.prototype), Sn.prototype.constructor = Sn, Sn.prototype.isDataTexture3D = !0;
            var An = new Pe,
                Pn = new Sn,
                Ln = new En;

            function Rn() {
                this.seq = [], this.map = {}
            }
            var Cn = [],
                On = [],
                In = new Float32Array(16),
                Dn = new Float32Array(9),
                Nn = new Float32Array(4);

            function Bn(t, e, n) {
                var i = t[0];
                if (i <= 0 || i > 0) return t;
                var r = e * n,
                    o = Cn[r];
                if (void 0 === o && (o = new Float32Array(r), Cn[r] = o), 0 !== e) {
                    i.toArray(o, 0);
                    for (var a = 1, s = 0; a !== e; ++a) s += n, t[a].toArray(o, s)
                }
                return o
            }

            function Hn(t, e) {
                if (t.length !== e.length) return !1;
                for (var n = 0, i = t.length; n < i; n++)
                    if (t[n] !== e[n]) return !1;
                return !0
            }

            function Fn(t, e) {
                for (var n = 0, i = e.length; n < i; n++) t[n] = e[n]
            }

            function kn(t, e) {
                var n = On[e];
                void 0 === n && (n = new Int32Array(e), On[e] = n);
                for (var i = 0; i !== e; ++i) n[i] = t.allocTextureUnit();
                return n
            }

            function Un(t, e) {
                var n = this.cache;
                n[0] !== e && (t.uniform1f(this.addr, e), n[0] = e)
            }

            function zn(t, e) {
                var n = this.cache;
                n[0] !== e && (t.uniform1i(this.addr, e), n[0] = e)
            }

            function Gn(t, e) {
                var n = this.cache;
                if (void 0 !== e.x) n[0] === e.x && n[1] === e.y || (t.uniform2f(this.addr, e.x, e.y), n[0] = e.x, n[1] = e.y);
                else {
                    if (Hn(n, e)) return;
                    t.uniform2fv(this.addr, e), Fn(n, e)
                }
            }

            function jn(t, e) {
                var n = this.cache;
                if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z || (t.uniform3f(this.addr, e.x, e.y, e.z), n[0] = e.x, n[1] = e.y, n[2] = e.z);
                else if (void 0 !== e.r) n[0] === e.r && n[1] === e.g && n[2] === e.b || (t.uniform3f(this.addr, e.r, e.g, e.b), n[0] = e.r, n[1] = e.g, n[2] = e.b);
                else {
                    if (Hn(n, e)) return;
                    t.uniform3fv(this.addr, e), Fn(n, e)
                }
            }

            function Vn(t, e) {
                var n = this.cache;
                if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w || (t.uniform4f(this.addr, e.x, e.y, e.z, e.w), n[0] = e.x, n[1] = e.y, n[2] = e.z, n[3] = e.w);
                else {
                    if (Hn(n, e)) return;
                    t.uniform4fv(this.addr, e), Fn(n, e)
                }
            }

            function Wn(t, e) {
                var n = this.cache,
                    i = e.elements;
                if (void 0 === i) {
                    if (Hn(n, e)) return;
                    t.uniformMatrix2fv(this.addr, !1, e), Fn(n, e)
                } else {
                    if (Hn(n, i)) return;
                    Nn.set(i), t.uniformMatrix2fv(this.addr, !1, Nn), Fn(n, i)
                }
            }

            function Xn(t, e) {
                var n = this.cache,
                    i = e.elements;
                if (void 0 === i) {
                    if (Hn(n, e)) return;
                    t.uniformMatrix3fv(this.addr, !1, e), Fn(n, e)
                } else {
                    if (Hn(n, i)) return;
                    Dn.set(i), t.uniformMatrix3fv(this.addr, !1, Dn), Fn(n, i)
                }
            }

            function qn(t, e) {
                var n = this.cache,
                    i = e.elements;
                if (void 0 === i) {
                    if (Hn(n, e)) return;
                    t.uniformMatrix4fv(this.addr, !1, e), Fn(n, e)
                } else {
                    if (Hn(n, i)) return;
                    In.set(i), t.uniformMatrix4fv(this.addr, !1, In), Fn(n, i)
                }
            }

            function Yn(t, e, n) {
                var i = this.cache,
                    r = n.allocTextureUnit();
                i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.setTexture2D(e || An, r)
            }

            function Zn(t, e, n) {
                var i = this.cache,
                    r = n.allocTextureUnit();
                i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.setTexture3D(e || Pn, r)
            }

            function Jn(t, e, n) {
                var i = this.cache,
                    r = n.allocTextureUnit();
                i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.setTextureCube(e || Ln, r)
            }

            function Kn(t, e) {
                var n = this.cache;
                Hn(n, e) || (t.uniform2iv(this.addr, e), Fn(n, e))
            }

            function Qn(t, e) {
                var n = this.cache;
                Hn(n, e) || (t.uniform3iv(this.addr, e), Fn(n, e))
            }

            function $n(t, e) {
                var n = this.cache;
                Hn(n, e) || (t.uniform4iv(this.addr, e), Fn(n, e))
            }

            function ti(t, e) {
                var n = this.cache;
                Hn(n, e) || (t.uniform1fv(this.addr, e), Fn(n, e))
            }

            function ei(t, e) {
                var n = this.cache;
                Hn(n, e) || (t.uniform1iv(this.addr, e), Fn(n, e))
            }

            function ni(t, e) {
                var n = this.cache,
                    i = Bn(e, this.size, 2);
                Hn(n, i) || (t.uniform2fv(this.addr, i), this.updateCache(i))
            }

            function ii(t, e) {
                var n = this.cache,
                    i = Bn(e, this.size, 3);
                Hn(n, i) || (t.uniform3fv(this.addr, i), this.updateCache(i))
            }

            function ri(t, e) {
                var n = this.cache,
                    i = Bn(e, this.size, 4);
                Hn(n, i) || (t.uniform4fv(this.addr, i), this.updateCache(i))
            }

            function oi(t, e) {
                var n = this.cache,
                    i = Bn(e, this.size, 4);
                Hn(n, i) || (t.uniformMatrix2fv(this.addr, !1, i), this.updateCache(i))
            }

            function ai(t, e) {
                var n = this.cache,
                    i = Bn(e, this.size, 9);
                Hn(n, i) || (t.uniformMatrix3fv(this.addr, !1, i), this.updateCache(i))
            }

            function si(t, e) {
                var n = this.cache,
                    i = Bn(e, this.size, 16);
                Hn(n, i) || (t.uniformMatrix4fv(this.addr, !1, i), this.updateCache(i))
            }

            function ci(t, e, n) {
                var i = this.cache,
                    r = e.length,
                    o = kn(n, r);
                !1 === Hn(i, o) && (t.uniform1iv(this.addr, o), Fn(i, o));
                for (var a = 0; a !== r; ++a) n.setTexture2D(e[a] || An, o[a])
            }

            function li(t, e, n) {
                var i = this.cache,
                    r = e.length,
                    o = kn(n, r);
                !1 === Hn(i, o) && (t.uniform1iv(this.addr, o), Fn(i, o));
                for (var a = 0; a !== r; ++a) n.setTextureCube(e[a] || Ln, o[a])
            }

            function hi(t, e, n) {
                this.id = t, this.addr = n, this.cache = [], this.setValue = function(t) {
                    switch (t) {
                        case 5126:
                            return Un;
                        case 35664:
                            return Gn;
                        case 35665:
                            return jn;
                        case 35666:
                            return Vn;
                        case 35674:
                            return Wn;
                        case 35675:
                            return Xn;
                        case 35676:
                            return qn;
                        case 35678:
                        case 36198:
                            return Yn;
                        case 35679:
                            return Zn;
                        case 35680:
                            return Jn;
                        case 5124:
                        case 35670:
                            return zn;
                        case 35667:
                        case 35671:
                            return Kn;
                        case 35668:
                        case 35672:
                            return Qn;
                        case 35669:
                        case 35673:
                            return $n
                    }
                }(e.type)
            }

            function ui(t, e, n) {
                this.id = t, this.addr = n, this.cache = [], this.size = e.size, this.setValue = function(t) {
                    switch (t) {
                        case 5126:
                            return ti;
                        case 35664:
                            return ni;
                        case 35665:
                            return ii;
                        case 35666:
                            return ri;
                        case 35674:
                            return oi;
                        case 35675:
                            return ai;
                        case 35676:
                            return si;
                        case 35678:
                            return ci;
                        case 35680:
                            return li;
                        case 5124:
                        case 35670:
                            return ei;
                        case 35667:
                        case 35671:
                            return Kn;
                        case 35668:
                        case 35672:
                            return Qn;
                        case 35669:
                        case 35673:
                            return $n
                    }
                }(e.type)
            }

            function pi(t) {
                this.id = t, Rn.call(this)
            }
            ui.prototype.updateCache = function(t) {
                var e = this.cache;
                t instanceof Float32Array && e.length !== t.length && (this.cache = new Float32Array(t.length)), Fn(e, t)
            }, pi.prototype.setValue = function(t, e, n) {
                for (var i = this.seq, r = 0, o = i.length; r !== o; ++r) {
                    var a = i[r];
                    a.setValue(t, e[a.id], n)
                }
            };
            var di = /([\w\d_]+)(\])?(\[|\.)?/g;

            function fi(t, e) {
                t.seq.push(e), t.map[e.id] = e
            }

            function mi(t, e, n) {
                var i = t.name,
                    r = i.length;
                for (di.lastIndex = 0;;) {
                    var o = di.exec(i),
                        a = di.lastIndex,
                        s = o[1],
                        c = "]" === o[2],
                        l = o[3];
                    if (c && (s |= 0), void 0 === l || "[" === l && a + 2 === r) {
                        fi(n, void 0 === l ? new hi(s, t, e) : new ui(s, t, e));
                        break
                    }
                    var h = n.map,
                        u = h[s];
                    void 0 === u && (u = new pi(s), fi(n, u)), n = u
                }
            }

            function vi(t, e, n) {
                Rn.call(this), this.renderer = n;
                for (var i = t.getProgramParameter(e, t.ACTIVE_UNIFORMS), r = 0; r < i; ++r) {
                    var o = t.getActiveUniform(e, r),
                        a = t.getUniformLocation(e, o.name);
                    mi(o, a, this)
                }
            }

            function gi(t, e, n) {
                var i = t.createShader(e);
                return t.shaderSource(i, n), t.compileShader(i), !1 === t.getShaderParameter(i, t.COMPILE_STATUS) && console.error("THREE.WebGLShader: Shader couldn't compile."), "" !== t.getShaderInfoLog(i) && console.warn("THREE.WebGLShader: gl.getShaderInfoLog()", e === t.VERTEX_SHADER ? "vertex" : "fragment", t.getShaderInfoLog(i), function(t) {
                    for (var e = t.split("\n"), n = 0; n < e.length; n++) e[n] = n + 1 + ": " + e[n];
                    return e.join("\n")
                }(n)), i
            }
            vi.prototype.setValue = function(t, e, n) {
                var i = this.map[e];
                void 0 !== i && i.setValue(t, n, this.renderer)
            }, vi.prototype.setOptional = function(t, e, n) {
                var i = e[n];
                void 0 !== i && this.setValue(t, n, i)
            }, vi.upload = function(t, e, n, i) {
                for (var r = 0, o = e.length; r !== o; ++r) {
                    var a = e[r],
                        s = n[a.id];
                    !1 !== s.needsUpdate && a.setValue(t, s.value, i)
                }
            }, vi.seqWithValue = function(t, e) {
                for (var n = [], i = 0, r = t.length; i !== r; ++i) {
                    var o = t[i];
                    o.id in e && n.push(o)
                }
                return n
            };
            var yi = 0;

            function _i(t) {
                switch (t) {
                    case le:
                        return ["Linear", "( value )"];
                    case he:
                        return ["sRGB", "( value )"];
                    case pe:
                        return ["RGBE", "( value )"];
                    case de:
                        return ["RGBM", "( value, 7.0 )"];
                    case fe:
                        return ["RGBM", "( value, 16.0 )"];
                    case me:
                        return ["RGBD", "( value, 256.0 )"];
                    case ue:
                        return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
                    default:
                        throw new Error("unsupported encoding: " + t)
                }
            }

            function xi(t, e) {
                var n = _i(e);
                return "vec4 " + t + "( vec4 value ) { return " + n[0] + "ToLinear" + n[1] + "; }"
            }

            function bi(t) {
                return "" !== t
            }

            function wi(t, e) {
                return t.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
            }

            function Mi(t, e) {
                return t.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection)
            }

            function Ti(t) {
                return t.replace(/^[ \t]*#include +<([\w\d./]+)>/gm, function(t, e) {
                    var n = He[e];
                    if (void 0 === n) throw new Error("Can not resolve #include <" + e + ">");
                    return Ti(n)
                })
            }

            function Ei(t) {
                return t.replace(/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g, function(t, e, n, i) {
                    for (var r = "", o = parseInt(e); o < parseInt(n); o++) r += i.replace(/\[ i \]/g, "[ " + o + " ]");
                    return r
                })
            }

            function Si(t, e, n, i, r, o, c) {
                var l = t.context,
                    h = i.defines,
                    u = r.vertexShader,
                    p = r.fragmentShader,
                    d = "SHADOWMAP_TYPE_BASIC";
                o.shadowMapType === a ? d = "SHADOWMAP_TYPE_PCF" : o.shadowMapType === s && (d = "SHADOWMAP_TYPE_PCF_SOFT");
                var f = "ENVMAP_TYPE_CUBE",
                    m = "ENVMAP_MODE_REFLECTION",
                    v = "ENVMAP_BLENDING_MULTIPLY";
                if (o.envMap) {
                    switch (i.envMap.mapping) {
                        case Q:
                        case $:
                            f = "ENVMAP_TYPE_CUBE";
                            break;
                        case it:
                        case rt:
                            f = "ENVMAP_TYPE_CUBE_UV";
                            break;
                        case tt:
                        case et:
                            f = "ENVMAP_TYPE_EQUIREC";
                            break;
                        case nt:
                            f = "ENVMAP_TYPE_SPHERE"
                    }
                    switch (i.envMap.mapping) {
                        case $:
                        case et:
                            m = "ENVMAP_MODE_REFRACTION"
                    }
                    switch (i.combine) {
                        case V:
                            v = "ENVMAP_BLENDING_MULTIPLY";
                            break;
                        case W:
                            v = "ENVMAP_BLENDING_MIX";
                            break;
                        case X:
                            v = "ENVMAP_BLENDING_ADD"
                    }
                }
                var g, y, _ = t.gammaFactor > 0 ? t.gammaFactor : 1,
                    x = c.isWebGL2 ? "" : function(t, e, n) {
                        return [(t = t || {}).derivatives || e.envMapCubeUV || e.bumpMap || e.normalMap && !e.objectSpaceNormalMap || e.flatShading ? "#extension GL_OES_standard_derivatives : enable" : "", (t.fragDepth || e.logarithmicDepthBuffer) && n.get("EXT_frag_depth") ? "#extension GL_EXT_frag_depth : enable" : "", t.drawBuffers && n.get("WEBGL_draw_buffers") ? "#extension GL_EXT_draw_buffers : require" : "", (t.shaderTextureLOD || e.envMap) && n.get("EXT_shader_texture_lod") ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(bi).join("\n")
                    }(i.extensions, o, e),
                    b = function(t) {
                        var e = [];
                        for (var n in t) {
                            var i = t[n];
                            !1 !== i && e.push("#define " + n + " " + i)
                        }
                        return e.join("\n")
                    }(h),
                    w = l.createProgram();
                if (i.isRawShaderMaterial ? ((g = [b].filter(bi).join("\n")).length > 0 && (g += "\n"), (y = [x, b].filter(bi).join("\n")).length > 0 && (y += "\n")) : (g = ["precision " + o.precision + " float;", "precision " + o.precision + " int;", "#define SHADER_NAME " + r.name, b, o.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + _, "#define MAX_BONES " + o.maxBones, o.useFog && o.fog ? "#define USE_FOG" : "", o.useFog && o.fogExp ? "#define FOG_EXP2" : "", o.map ? "#define USE_MAP" : "", o.envMap ? "#define USE_ENVMAP" : "", o.envMap ? "#define " + m : "", o.lightMap ? "#define USE_LIGHTMAP" : "", o.aoMap ? "#define USE_AOMAP" : "", o.emissiveMap ? "#define USE_EMISSIVEMAP" : "", o.bumpMap ? "#define USE_BUMPMAP" : "", o.normalMap ? "#define USE_NORMALMAP" : "", o.normalMap && o.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", o.displacementMap && o.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", o.specularMap ? "#define USE_SPECULARMAP" : "", o.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", o.metalnessMap ? "#define USE_METALNESSMAP" : "", o.alphaMap ? "#define USE_ALPHAMAP" : "", o.vertexColors ? "#define USE_COLOR" : "", o.flatShading ? "#define FLAT_SHADED" : "", o.skinning ? "#define USE_SKINNING" : "", o.useVertexTexture ? "#define BONE_TEXTURE" : "", o.morphTargets ? "#define USE_MORPHTARGETS" : "", o.morphNormals && !1 === o.flatShading ? "#define USE_MORPHNORMALS" : "", o.doubleSided ? "#define DOUBLE_SIDED" : "", o.flipSided ? "#define FLIP_SIDED" : "", o.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", o.shadowMapEnabled ? "#define " + d : "", o.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", o.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", o.logarithmicDepthBuffer && (c.isWebGL2 || e.get("EXT_frag_depth")) ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_COLOR", "\tattribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(bi).join("\n"), y = [x, "precision " + o.precision + " float;", "precision " + o.precision + " int;", "#define SHADER_NAME " + r.name, b, o.alphaTest ? "#define ALPHATEST " + o.alphaTest + (o.alphaTest % 1 ? "" : ".0") : "", "#define GAMMA_FACTOR " + _, o.useFog && o.fog ? "#define USE_FOG" : "", o.useFog && o.fogExp ? "#define FOG_EXP2" : "", o.map ? "#define USE_MAP" : "", o.envMap ? "#define USE_ENVMAP" : "", o.envMap ? "#define " + f : "", o.envMap ? "#define " + m : "", o.envMap ? "#define " + v : "", o.lightMap ? "#define USE_LIGHTMAP" : "", o.aoMap ? "#define USE_AOMAP" : "", o.emissiveMap ? "#define USE_EMISSIVEMAP" : "", o.bumpMap ? "#define USE_BUMPMAP" : "", o.normalMap ? "#define USE_NORMALMAP" : "", o.normalMap && o.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", o.specularMap ? "#define USE_SPECULARMAP" : "", o.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", o.metalnessMap ? "#define USE_METALNESSMAP" : "", o.alphaMap ? "#define USE_ALPHAMAP" : "", o.vertexColors ? "#define USE_COLOR" : "", o.gradientMap ? "#define USE_GRADIENTMAP" : "", o.flatShading ? "#define FLAT_SHADED" : "", o.doubleSided ? "#define DOUBLE_SIDED" : "", o.flipSided ? "#define FLIP_SIDED" : "", o.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", o.shadowMapEnabled ? "#define " + d : "", o.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", o.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", o.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", o.logarithmicDepthBuffer && (c.isWebGL2 || e.get("EXT_frag_depth")) ? "#define USE_LOGDEPTHBUF_EXT" : "", o.envMap && (c.isWebGL2 || e.get("EXT_shader_texture_lod")) ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", o.toneMapping !== q ? "#define TONE_MAPPING" : "", o.toneMapping !== q ? He.tonemapping_pars_fragment : "", o.toneMapping !== q ? function(t, e) {
                        var n;
                        switch (e) {
                            case Y:
                                n = "Linear";
                                break;
                            case Z:
                                n = "Reinhard";
                                break;
                            case J:
                                n = "Uncharted2";
                                break;
                            case K:
                                n = "OptimizedCineon";
                                break;
                            default:
                                throw new Error("unsupported toneMapping: " + e)
                        }
                        return "vec3 " + t + "( vec3 color ) { return " + n + "ToneMapping( color ); }"
                    }("toneMapping", o.toneMapping) : "", o.dithering ? "#define DITHERING" : "", o.outputEncoding || o.mapEncoding || o.matcapEncoding || o.envMapEncoding || o.emissiveMapEncoding ? He.encodings_pars_fragment : "", o.mapEncoding ? xi("mapTexelToLinear", o.mapEncoding) : "", o.matcapEncoding ? xi("matcapTexelToLinear", o.matcapEncoding) : "", o.envMapEncoding ? xi("envMapTexelToLinear", o.envMapEncoding) : "", o.emissiveMapEncoding ? xi("emissiveMapTexelToLinear", o.emissiveMapEncoding) : "", o.outputEncoding ? function(t, e) {
                        var n = _i(e);
                        return "vec4 " + t + "( vec4 value ) { return LinearTo" + n[0] + n[1] + "; }"
                    }("linearToOutputTexel", o.outputEncoding) : "", o.depthPacking ? "#define DEPTH_PACKING " + i.depthPacking : "", "\n"].filter(bi).join("\n")), u = Mi(u = wi(u = Ti(u), o), o), p = Mi(p = wi(p = Ti(p), o), o), u = Ei(u), p = Ei(p), c.isWebGL2 && !i.isRawShaderMaterial) {
                    var M = !1,
                        T = /^\s*#version\s+300\s+es\s*\n/;
                    i.isShaderMaterial && null !== u.match(T) && null !== p.match(T) && (M = !0, u = u.replace(T, ""), p = p.replace(T, "")), g = ["#version 300 es\n", "#define attribute in", "#define varying out", "#define texture2D texture"].join("\n") + "\n" + g, y = ["#version 300 es\n", "#define varying in", M ? "" : "out highp vec4 pc_fragColor;", M ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + y
                }
                var E = g + u,
                    S = y + p,
                    A = gi(l, l.VERTEX_SHADER, E),
                    P = gi(l, l.FRAGMENT_SHADER, S);
                l.attachShader(w, A), l.attachShader(w, P), void 0 !== i.index0AttributeName ? l.bindAttribLocation(w, 0, i.index0AttributeName) : !0 === o.morphTargets && l.bindAttribLocation(w, 0, "position"), l.linkProgram(w);
                var L, R, C = l.getProgramInfoLog(w).trim(),
                    O = l.getShaderInfoLog(A).trim(),
                    I = l.getShaderInfoLog(P).trim(),
                    D = !0,
                    N = !0;
                return !1 === l.getProgramParameter(w, l.LINK_STATUS) ? (D = !1, console.error("THREE.WebGLProgram: shader error: ", l.getError(), "gl.VALIDATE_STATUS", l.getProgramParameter(w, l.VALIDATE_STATUS), "gl.getProgramInfoLog", C, O, I)) : "" !== C ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", C) : "" !== O && "" !== I || (N = !1), N && (this.diagnostics = {
                    runnable: D,
                    material: i,
                    programLog: C,
                    vertexShader: {
                        log: O,
                        prefix: g
                    },
                    fragmentShader: {
                        log: I,
                        prefix: y
                    }
                }), l.deleteShader(A), l.deleteShader(P), this.getUniforms = function() {
                    return void 0 === L && (L = new vi(l, w, t)), L
                }, this.getAttributes = function() {
                    return void 0 === R && (R = function(t, e) {
                        for (var n = {}, i = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES), r = 0; r < i; r++) {
                            var o = t.getActiveAttrib(e, r),
                                a = o.name;
                            n[a] = t.getAttribLocation(e, a)
                        }
                        return n
                    }(l, w)), R
                }, this.destroy = function() {
                    l.deleteProgram(w), this.program = void 0
                }, Object.defineProperties(this, {
                    uniforms: {
                        get: function() {
                            return console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms()."), this.getUniforms()
                        }
                    },
                    attributes: {
                        get: function() {
                            return console.warn("THREE.WebGLProgram: .attributes is now .getAttributes()."), this.getAttributes()
                        }
                    }
                }), this.name = r.name, this.id = yi++, this.code = n, this.usedTimes = 1, this.program = w, this.vertexShader = A, this.fragmentShader = P, this
            }

            function Ai(t, e, n) {
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
                    o = ["precision", "supportsVertexTextures", "map", "mapEncoding", "matcapEncoding", "envMap", "envMapMode", "envMapEncoding", "lightMap", "aoMap", "emissiveMap", "emissiveMapEncoding", "bumpMap", "normalMap", "objectSpaceNormalMap", "displacementMap", "specularMap", "roughnessMap", "metalnessMap", "gradientMap", "alphaMap", "combine", "vertexColors", "fog", "useFog", "fogExp", "flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets", "morphNormals", "maxMorphTargets", "maxMorphNormals", "premultipliedAlpha", "numDirLights", "numPointLights", "numSpotLights", "numHemiLights", "numRectAreaLights", "shadowMapEnabled", "shadowMapType", "toneMapping", "physicallyCorrectLights", "alphaTest", "doubleSided", "flipSided", "numClippingPlanes", "numClipIntersection", "depthPacking", "dithering"];

                function a(t, e) {
                    var n;
                    return t ? t.isTexture ? n = t.encoding : t.isWebGLRenderTarget && (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."), n = t.texture.encoding) : n = le, n === le && e && (n = ue), n
                }
                this.getParameters = function(e, i, o, s, c, u, p) {
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
                            shaderID: d,
                            precision: m,
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
                            objectSpaceNormalMap: e.normalMapType === _e,
                            displacementMap: !!e.displacementMap,
                            roughnessMap: !!e.roughnessMap,
                            metalnessMap: !!e.metalnessMap,
                            specularMap: !!e.specularMap,
                            alphaMap: !!e.alphaMap,
                            gradientMap: !!e.gradientMap,
                            combine: e.combine,
                            vertexColors: e.vertexColors,
                            fog: !!s,
                            useFog: e.fog,
                            fogExp: s && s.isFogExp2,
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
                            numClippingPlanes: c,
                            numClipIntersection: u,
                            dithering: e.dithering,
                            shadowMapEnabled: t.shadowMap.enabled && p.receiveShadow && o.length > 0,
                            shadowMapType: t.shadowMap.type,
                            toneMapping: t.toneMapping,
                            physicallyCorrectLights: t.physicallyCorrectLights,
                            premultipliedAlpha: e.premultipliedAlpha,
                            alphaTest: e.alphaTest,
                            doubleSided: e.side === h,
                            flipSided: e.side === l,
                            depthPacking: void 0 !== e.depthPacking && e.depthPacking
                        };
                    return g
                }, this.getProgramCode = function(e, n) {
                    var i = [];
                    if (n.shaderID ? i.push(n.shaderID) : (i.push(e.fragmentShader), i.push(e.vertexShader)), void 0 !== e.defines)
                        for (var r in e.defines) i.push(r), i.push(e.defines[r]);
                    for (var a = 0; a < o.length; a++) i.push(n[o[a]]);
                    return i.push(e.onBeforeCompile.toString()), i.push(t.gammaOutput), i.join()
                }, this.acquireProgram = function(r, o, a, s) {
                    for (var c, l = 0, h = i.length; l < h; l++) {
                        var u = i[l];
                        if (u.code === s) {
                            ++(c = u).usedTimes;
                            break
                        }
                    }
                    return void 0 === c && (c = new Si(t, e, s, r, o, a, n), i.push(c)), c
                }, this.releaseProgram = function(t) {
                    if (0 == --t.usedTimes) {
                        var e = i.indexOf(t);
                        i[e] = i[i.length - 1], i.pop(), t.destroy()
                    }
                }, this.programs = i
            }

            function Pi(t, e) {
                return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program && e.program && t.program !== e.program ? t.program.id - e.program.id : t.material.id !== e.material.id ? t.material.id - e.material.id : t.z !== e.z ? t.z - e.z : t.id - e.id
            }

            function Li(t, e) {
                return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : t.id - e.id
            }

            function Ri() {
                var t = {};
                return {
                    get: function(e, n) {
                        var i = e.id + "," + n.id,
                            r = t[i];
                        return void 0 === r && (r = new function() {
                            var t = [],
                                e = 0,
                                n = [],
                                i = [];
                            return {
                                opaque: n,
                                transparent: i,
                                init: function() {
                                    e = 0, n.length = 0, i.length = 0
                                },
                                push: function(r, o, a, s, c) {
                                    var l = t[e];
                                    void 0 === l ? (l = {
                                        id: r.id,
                                        object: r,
                                        geometry: o,
                                        material: a,
                                        program: a.program,
                                        renderOrder: r.renderOrder,
                                        z: s,
                                        group: c
                                    }, t[e] = l) : (l.id = r.id, l.object = r, l.geometry = o, l.material = a, l.program = a.program, l.renderOrder = r.renderOrder, l.z = s, l.group = c), (!0 === a.transparent ? i : n).push(l), e++
                                },
                                sort: function() {
                                    n.length > 1 && n.sort(Pi), i.length > 1 && i.sort(Li)
                                }
                            }
                        }, t[i] = r), r
                    },
                    dispose: function() {
                        t = {}
                    }
                }
            }
            var Ci, Oi = 0;

            function Ii() {
                var t = new function() {
                        var t = {};
                        return {
                            get: function(e) {
                                if (void 0 !== t[e.id]) return t[e.id];
                                var n;
                                switch (e.type) {
                                    case "DirectionalLight":
                                        n = {
                                            direction: new Te,
                                            color: new Ue,
                                            shadow: !1,
                                            shadowBias: 0,
                                            shadowRadius: 1,
                                            shadowMapSize: new be
                                        };
                                        break;
                                    case "SpotLight":
                                        n = {
                                            position: new Te,
                                            direction: new Te,
                                            color: new Ue,
                                            distance: 0,
                                            coneCos: 0,
                                            penumbraCos: 0,
                                            decay: 0,
                                            shadow: !1,
                                            shadowBias: 0,
                                            shadowRadius: 1,
                                            shadowMapSize: new be
                                        };
                                        break;
                                    case "PointLight":
                                        n = {
                                            position: new Te,
                                            color: new Ue,
                                            distance: 0,
                                            decay: 0,
                                            shadow: !1,
                                            shadowBias: 0,
                                            shadowRadius: 1,
                                            shadowMapSize: new be,
                                            shadowCameraNear: 1,
                                            shadowCameraFar: 1e3
                                        };
                                        break;
                                    case "HemisphereLight":
                                        n = {
                                            direction: new Te,
                                            skyColor: new Ue,
                                            groundColor: new Ue
                                        };
                                        break;
                                    case "RectAreaLight":
                                        n = {
                                            color: new Ue,
                                            position: new Te,
                                            halfWidth: new Te,
                                            halfHeight: new Te
                                        }
                                }
                                return t[e.id] = n, n
                            }
                        }
                    },
                    e = {
                        id: Oi++,
                        hash: {
                            stateID: -1,
                            directionalLength: -1,
                            pointLength: -1,
                            spotLength: -1,
                            rectAreaLength: -1,
                            hemiLength: -1,
                            shadowsLength: -1
                        },
                        ambient: [0, 0, 0],
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
                        hemi: []
                    },
                    n = new Te,
                    i = new we,
                    r = new we;
                return {
                    setup: function(o, a, s) {
                        for (var c = 0, l = 0, h = 0, u = 0, p = 0, d = 0, f = 0, m = 0, v = s.matrixWorldInverse, g = 0, y = o.length; g < y; g++) {
                            var _ = o[g],
                                x = _.color,
                                b = _.intensity,
                                w = _.distance,
                                M = _.shadow && _.shadow.map ? _.shadow.map.texture : null;
                            if (_.isAmbientLight) c += x.r * b, l += x.g * b, h += x.b * b;
                            else if (_.isDirectionalLight) {
                                var T = t.get(_);
                                if (T.color.copy(_.color).multiplyScalar(_.intensity), T.direction.setFromMatrixPosition(_.matrixWorld), n.setFromMatrixPosition(_.target.matrixWorld), T.direction.sub(n), T.direction.transformDirection(v), T.shadow = _.castShadow, _.castShadow) {
                                    var E = _.shadow;
                                    T.shadowBias = E.bias, T.shadowRadius = E.radius, T.shadowMapSize = E.mapSize
                                }
                                e.directionalShadowMap[u] = M, e.directionalShadowMatrix[u] = _.shadow.matrix, e.directional[u] = T, u++
                            } else if (_.isSpotLight) {
                                var T = t.get(_);
                                if (T.position.setFromMatrixPosition(_.matrixWorld), T.position.applyMatrix4(v), T.color.copy(x).multiplyScalar(b), T.distance = w, T.direction.setFromMatrixPosition(_.matrixWorld), n.setFromMatrixPosition(_.target.matrixWorld), T.direction.sub(n), T.direction.transformDirection(v), T.coneCos = Math.cos(_.angle), T.penumbraCos = Math.cos(_.angle * (1 - _.penumbra)), T.decay = _.decay, T.shadow = _.castShadow, _.castShadow) {
                                    var E = _.shadow;
                                    T.shadowBias = E.bias, T.shadowRadius = E.radius, T.shadowMapSize = E.mapSize
                                }
                                e.spotShadowMap[d] = M, e.spotShadowMatrix[d] = _.shadow.matrix, e.spot[d] = T, d++
                            } else if (_.isRectAreaLight) {
                                var T = t.get(_);
                                T.color.copy(x).multiplyScalar(b), T.position.setFromMatrixPosition(_.matrixWorld), T.position.applyMatrix4(v), r.identity(), i.copy(_.matrixWorld), i.premultiply(v), r.extractRotation(i), T.halfWidth.set(.5 * _.width, 0, 0), T.halfHeight.set(0, .5 * _.height, 0), T.halfWidth.applyMatrix4(r), T.halfHeight.applyMatrix4(r), e.rectArea[f] = T, f++
                            } else if (_.isPointLight) {
                                var T = t.get(_);
                                if (T.position.setFromMatrixPosition(_.matrixWorld), T.position.applyMatrix4(v), T.color.copy(_.color).multiplyScalar(_.intensity), T.distance = _.distance, T.decay = _.decay, T.shadow = _.castShadow, _.castShadow) {
                                    var E = _.shadow;
                                    T.shadowBias = E.bias, T.shadowRadius = E.radius, T.shadowMapSize = E.mapSize, T.shadowCameraNear = E.camera.near, T.shadowCameraFar = E.camera.far
                                }
                                e.pointShadowMap[p] = M, e.pointShadowMatrix[p] = _.shadow.matrix, e.point[p] = T, p++
                            } else if (_.isHemisphereLight) {
                                var T = t.get(_);
                                T.direction.setFromMatrixPosition(_.matrixWorld), T.direction.transformDirection(v), T.direction.normalize(), T.skyColor.copy(_.color).multiplyScalar(b), T.groundColor.copy(_.groundColor).multiplyScalar(b), e.hemi[m] = T, m++
                            }
                        }
                        e.ambient[0] = c, e.ambient[1] = l, e.ambient[2] = h, e.directional.length = u, e.spot.length = d, e.rectArea.length = f, e.point.length = p, e.hemi.length = m, e.hash.stateID = e.id, e.hash.directionalLength = u, e.hash.pointLength = p, e.hash.spotLength = d, e.hash.rectAreaLength = f, e.hash.hemiLength = m, e.hash.shadowsLength = a.length
                    },
                    state: e
                }
            }

            function Di() {
                var t = new Ii,
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

            function Ni(t) {
                yn.call(this), this.type = "MeshDepthMaterial", this.depthPacking = ve, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.setValues(t)
            }

            function Bi(t) {
                yn.call(this), this.type = "MeshDistanceMaterial", this.referencePosition = new Te, this.nearDistance = 1, this.farDistance = 1e3, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.fog = !1, this.lights = !1, this.setValues(t)
            }

            function Hi(t, e, n) {
                for (var i = new Be, r = new we, o = new be, s = new be(n, n), u = new Te, p = new Te, d = 1, f = 2, m = 1 + (d | f), v = new Array(m), g = new Array(m), y = {}, _ = {
                        0: l,
                        1: c,
                        2: h
                    }, x = [new Te(1, 0, 0), new Te(-1, 0, 0), new Te(0, 0, 1), new Te(0, 0, -1), new Te(0, 1, 0), new Te(0, -1, 0)], b = [new Te(0, 1, 0), new Te(0, 1, 0), new Te(0, 1, 0), new Te(0, 1, 0), new Te(0, 0, 1), new Te(0, 0, -1)], w = [new Le, new Le, new Le, new Le, new Le, new Le], M = 0; M !== m; ++M) {
                    var T = 0 != (M & d),
                        E = 0 != (M & f),
                        S = new Ni({
                            depthPacking: ge,
                            morphTargets: T,
                            skinning: E
                        });
                    v[M] = S;
                    var A = new Bi({
                        morphTargets: T,
                        skinning: E
                    });
                    g[M] = A
                }
                var P = this;

                function L(e, n, i, r, o, a) {
                    var s = e.geometry,
                        c = null,
                        l = v,
                        h = e.customDepthMaterial;
                    if (i && (l = g, h = e.customDistanceMaterial), h) c = h;
                    else {
                        var u = !1;
                        n.morphTargets && (s && s.isBufferGeometry ? u = s.morphAttributes && s.morphAttributes.position && s.morphAttributes.position.length > 0 : s && s.isGeometry && (u = s.morphTargets && s.morphTargets.length > 0)), e.isSkinnedMesh && !1 === n.skinning && console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:", e);
                        var p = e.isSkinnedMesh && n.skinning,
                            m = 0;
                        u && (m |= d), p && (m |= f), c = l[m]
                    }
                    if (t.localClippingEnabled && !0 === n.clipShadows && 0 !== n.clippingPlanes.length) {
                        var x = c.uuid,
                            b = n.uuid,
                            w = y[x];
                        void 0 === w && (w = {}, y[x] = w);
                        var M = w[b];
                        void 0 === M && (M = c.clone(), w[b] = M), c = M
                    }
                    return c.visible = n.visible, c.wireframe = n.wireframe, c.side = null != n.shadowSide ? n.shadowSide : _[n.side], c.clipShadows = n.clipShadows, c.clippingPlanes = n.clippingPlanes, c.clipIntersection = n.clipIntersection, c.wireframeLinewidth = n.wireframeLinewidth, c.linewidth = n.linewidth, i && c.isMeshDistanceMaterial && (c.referencePosition.copy(r), c.nearDistance = o, c.farDistance = a), c
                }

                function R(n, r, o, a) {
                    if (!1 !== n.visible) {
                        var s = n.layers.test(r.layers);
                        if (s && (n.isMesh || n.isLine || n.isPoints) && n.castShadow && (!n.frustumCulled || i.intersectsObject(n))) {
                            n.modelViewMatrix.multiplyMatrices(o.matrixWorldInverse, n.matrixWorld);
                            var c = e.update(n),
                                l = n.material;
                            if (Array.isArray(l))
                                for (var h = c.groups, u = 0, d = h.length; u < d; u++) {
                                    var f = h[u],
                                        m = l[f.materialIndex];
                                    if (m && m.visible) {
                                        var v = L(n, m, a, p, o.near, o.far);
                                        t.renderBufferDirect(o, null, c, v, n, f)
                                    }
                                } else if (l.visible) {
                                    var v = L(n, l, a, p, o.near, o.far);
                                    t.renderBufferDirect(o, null, c, v, n, null)
                                }
                        }
                        for (var g = n.children, y = 0, _ = g.length; y < _; y++) R(g[y], r, o, a)
                    }
                }
                this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = a, this.render = function(e, n, a) {
                    if (!1 !== P.enabled && (!1 !== P.autoUpdate || !1 !== P.needsUpdate) && 0 !== e.length) {
                        var c, l = t.context,
                            h = t.state;
                        h.disable(l.BLEND), h.buffers.color.setClear(1, 1, 1, 1), h.buffers.depth.setTest(!0), h.setScissorTest(!1);
                        for (var d = 0, f = e.length; d < f; d++) {
                            var m = e[d],
                                v = m.shadow,
                                g = m && m.isPointLight;
                            if (void 0 !== v) {
                                var y = v.camera;
                                if (o.copy(v.mapSize), o.min(s), g) {
                                    var _ = o.x,
                                        M = o.y;
                                    w[0].set(2 * _, M, _, M), w[1].set(0, M, _, M), w[2].set(3 * _, M, _, M), w[3].set(_, M, _, M), w[4].set(3 * _, 0, _, M), w[5].set(_, 0, _, M), o.x *= 4, o.y *= 2
                                }
                                if (null === v.map) {
                                    var T = {
                                        minFilter: ct,
                                        magFilter: ct,
                                        format: Pt
                                    };
                                    v.map = new Re(o.x, o.y, T), v.map.texture.name = m.name + ".shadowMap", y.updateProjectionMatrix()
                                }
                                v.isSpotLightShadow && v.update(m);
                                var E = v.map,
                                    S = v.matrix;
                                p.setFromMatrixPosition(m.matrixWorld), y.position.copy(p), g ? (c = 6, S.makeTranslation(-p.x, -p.y, -p.z)) : (c = 1, u.setFromMatrixPosition(m.target.matrixWorld), y.lookAt(u), y.updateMatrixWorld(), S.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), S.multiply(y.projectionMatrix), S.multiply(y.matrixWorldInverse)), t.setRenderTarget(E), t.clear();
                                for (var A = 0; A < c; A++) {
                                    if (g) {
                                        u.copy(y.position), u.add(x[A]), y.up.copy(b[A]), y.lookAt(u), y.updateMatrixWorld();
                                        var L = w[A];
                                        h.viewport(L)
                                    }
                                    r.multiplyMatrices(y.projectionMatrix, y.matrixWorldInverse), i.setFromMatrix(r), R(n, a, y, g)
                                }
                            } else console.warn("THREE.WebGLShadowMap:", m, "has no shadow.")
                        }
                        P.needsUpdate = !1
                    }
                }
            }

            function Fi(t, e, n, i, r, o, a) {
                var s, c = {};

                function l(t, e) {
                    if (t.width > e || t.height > e) {
                        if ("data" in t) return void console.warn("THREE.WebGLRenderer: image in DataTexture is too big (" + t.width + "x" + t.height + ").");
                        var n = e / Math.max(t.width, t.height),
                            i = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
                        i.width = Math.floor(t.width * n), i.height = Math.floor(t.height * n);
                        var r = i.getContext("2d");
                        return r.drawImage(t, 0, 0, t.width, t.height, 0, 0, i.width, i.height), console.warn("THREE.WebGLRenderer: image is too big (" + t.width + "x" + t.height + "). Resized to " + i.width + "x" + i.height), i
                    }
                    return t
                }

                function h(t) {
                    return xe.isPowerOfTwo(t.width) && xe.isPowerOfTwo(t.height)
                }

                function u(t, e) {
                    return t.generateMipmaps && e && t.minFilter !== ct && t.minFilter !== ut
                }

                function p(e, n, r, o) {
                    t.generateMipmap(e);
                    var a = i.get(n);
                    a.__maxMipLevel = Math.log(Math.max(r, o)) * Math.LOG2E
                }

                function d(e, n) {
                    if (!r.isWebGL2) return e;
                    if (e === t.RED) {
                        if (n === t.FLOAT) return t.R32F;
                        if (n === t.HALF_FLOAT) return t.R16F;
                        if (n === t.UNSIGNED_BYTE) return t.R8
                    }
                    if (e === t.RGB) {
                        if (n === t.FLOAT) return t.RGB32F;
                        if (n === t.HALF_FLOAT) return t.RGB16F;
                        if (n === t.UNSIGNED_BYTE) return t.RGB8
                    }
                    if (e === t.RGBA) {
                        if (n === t.FLOAT) return t.RGBA32F;
                        if (n === t.HALF_FLOAT) return t.RGBA16F;
                        if (n === t.UNSIGNED_BYTE) return t.RGBA8
                    }
                    return e
                }

                function f(e) {
                    return e === ct || e === lt || e === ht ? t.NEAREST : t.LINEAR
                }

                function m(e) {
                    var n = e.target;
                    n.removeEventListener("dispose", m),
                        function(e) {
                            var n = i.get(e);
                            if (e.image && n.__image__webglTextureCube) t.deleteTexture(n.__image__webglTextureCube);
                            else {
                                if (void 0 === n.__webglInit) return;
                                t.deleteTexture(n.__webglTexture)
                            }
                            i.remove(e)
                        }(n), n.isVideoTexture && delete c[n.id], a.memory.textures--
                }

                function v(e) {
                    var n = e.target;
                    n.removeEventListener("dispose", v),
                        function(e) {
                            var n = i.get(e),
                                r = i.get(e.texture);
                            if (e) {
                                if (void 0 !== r.__webglTexture && t.deleteTexture(r.__webglTexture), e.depthTexture && e.depthTexture.dispose(), e.isWebGLRenderTargetCube)
                                    for (var o = 0; o < 6; o++) t.deleteFramebuffer(n.__webglFramebuffer[o]), n.__webglDepthbuffer && t.deleteRenderbuffer(n.__webglDepthbuffer[o]);
                                else t.deleteFramebuffer(n.__webglFramebuffer), n.__webglDepthbuffer && t.deleteRenderbuffer(n.__webglDepthbuffer);
                                i.remove(e.texture), i.remove(e)
                            }
                        }(n), a.memory.textures--
                }

                function g(e, r) {
                    var o = i.get(e);
                    if (e.isVideoTexture && function(t) {
                            var e = t.id,
                                n = a.render.frame;
                            c[e] !== n && (c[e] = n, t.update())
                        }(e), e.version > 0 && o.__version !== e.version) {
                        var s = e.image;
                        if (void 0 === s) console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");
                        else {
                            if (!1 !== s.complete) return void _(o, e, r);
                            console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")
                        }
                    }
                    n.activeTexture(t.TEXTURE0 + r), n.bindTexture(t.TEXTURE_2D, o.__webglTexture)
                }

                function y(n, a, s) {
                    var c;
                    if (s ? (t.texParameteri(n, t.TEXTURE_WRAP_S, o.convert(a.wrapS)), t.texParameteri(n, t.TEXTURE_WRAP_T, o.convert(a.wrapT)), t.texParameteri(n, t.TEXTURE_MAG_FILTER, o.convert(a.magFilter)), t.texParameteri(n, t.TEXTURE_MIN_FILTER, o.convert(a.minFilter))) : (t.texParameteri(n, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(n, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), a.wrapS === at && a.wrapT === at || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), t.texParameteri(n, t.TEXTURE_MAG_FILTER, f(a.magFilter)), t.texParameteri(n, t.TEXTURE_MIN_FILTER, f(a.minFilter)), a.minFilter !== ct && a.minFilter !== ut && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), c = e.get("EXT_texture_filter_anisotropic")) {
                        if (a.type === xt && null === e.get("OES_texture_float_linear")) return;
                        if (a.type === bt && null === (r.isWebGL2 || e.get("OES_texture_half_float_linear"))) return;
                        (a.anisotropy > 1 || i.get(a).__currentAnisotropy) && (t.texParameterf(n, c.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(a.anisotropy, r.getMaxAnisotropy())), i.get(a).__currentAnisotropy = a.anisotropy)
                    }
                }

                function _(e, i, c) {
                    var f;
                    f = i.isDataTexture3D ? t.TEXTURE_3D : t.TEXTURE_2D, void 0 === e.__webglInit && (e.__webglInit = !0, i.addEventListener("dispose", m), e.__webglTexture = t.createTexture(), a.memory.textures++), n.activeTexture(t.TEXTURE0 + c), n.bindTexture(f, e.__webglTexture), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, i.flipY), t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, i.premultiplyAlpha), t.pixelStorei(t.UNPACK_ALIGNMENT, i.unpackAlignment);
                    var v = l(i.image, r.maxTextureSize);
                    (function(t) {
                        return !r.isWebGL2 && (t.wrapS !== at || t.wrapT !== at || t.minFilter !== ct && t.minFilter !== ut)
                    })(i) && !1 === h(v) && (v = function(t) {
                        if (t instanceof HTMLImageElement || t instanceof HTMLCanvasElement || t instanceof ImageBitmap) {
                            void 0 === s && (s = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")), s.width = xe.floorPowerOfTwo(t.width), s.height = xe.floorPowerOfTwo(t.height);
                            var e = s.getContext("2d");
                            return e.drawImage(t, 0, 0, s.width, s.height), console.warn("THREE.WebGLRenderer: image is not power of two (" + t.width + "x" + t.height + "). Resized to " + s.width + "x" + s.height), s
                        }
                        return t
                    }(v));
                    var g = h(v),
                        _ = o.convert(i.format),
                        x = o.convert(i.type),
                        b = d(_, x);
                    y(f, i, g);
                    var w, M = i.mipmaps;
                    if (i.isDepthTexture) {
                        if (b = t.DEPTH_COMPONENT, i.type === xt) {
                            if (!r.isWebGL2) throw new Error("Float Depth Texture only supported in WebGL2.0");
                            b = t.DEPTH_COMPONENT32F
                        } else r.isWebGL2 && (b = t.DEPTH_COMPONENT16);
                        i.format === Ot && b === t.DEPTH_COMPONENT && i.type !== gt && i.type !== _t && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), i.type = gt, x = o.convert(i.type)), i.format === It && (b = t.DEPTH_STENCIL, i.type !== Et && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), i.type = Et, x = o.convert(i.type))), n.texImage2D(t.TEXTURE_2D, 0, b, v.width, v.height, 0, _, x, null)
                    } else if (i.isDataTexture)
                        if (M.length > 0 && g) {
                            for (var T = 0, E = M.length; T < E; T++) w = M[T], n.texImage2D(t.TEXTURE_2D, T, b, w.width, w.height, 0, _, x, w.data);
                            i.generateMipmaps = !1, e.__maxMipLevel = M.length - 1
                        } else n.texImage2D(t.TEXTURE_2D, 0, b, v.width, v.height, 0, _, x, v.data), e.__maxMipLevel = 0;
                    else if (i.isCompressedTexture) {
                        for (var T = 0, E = M.length; T < E; T++) w = M[T], i.format !== Pt && i.format !== At ? n.getCompressedTextureFormats().indexOf(_) > -1 ? n.compressedTexImage2D(t.TEXTURE_2D, T, b, w.width, w.height, 0, w.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : n.texImage2D(t.TEXTURE_2D, T, b, w.width, w.height, 0, _, x, w.data);
                        e.__maxMipLevel = M.length - 1
                    } else if (i.isDataTexture3D) n.texImage3D(t.TEXTURE_3D, 0, b, v.width, v.height, v.depth, 0, _, x, v.data), e.__maxMipLevel = 0;
                    else if (M.length > 0 && g) {
                        for (var T = 0, E = M.length; T < E; T++) w = M[T], n.texImage2D(t.TEXTURE_2D, T, b, _, x, w);
                        i.generateMipmaps = !1, e.__maxMipLevel = M.length - 1
                    } else n.texImage2D(t.TEXTURE_2D, 0, b, _, x, v), e.__maxMipLevel = 0;
                    u(i, g) && p(t.TEXTURE_2D, i, v.width, v.height), e.__version = i.version, i.onUpdate && i.onUpdate(i)
                }

                function x(e, r, a, s) {
                    var c = o.convert(r.texture.format),
                        l = o.convert(r.texture.type),
                        h = d(c, l);
                    n.texImage2D(s, 0, h, r.width, r.height, 0, c, l, null), t.bindFramebuffer(t.FRAMEBUFFER, e), t.framebufferTexture2D(t.FRAMEBUFFER, a, s, i.get(r.texture).__webglTexture, 0), t.bindFramebuffer(t.FRAMEBUFFER, null)
                }

                function b(e, n) {
                    t.bindRenderbuffer(t.RENDERBUFFER, e), n.depthBuffer && !n.stencilBuffer ? (t.renderbufferStorage(t.RENDERBUFFER, t.DEPTH_COMPONENT16, n.width, n.height), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_ATTACHMENT, t.RENDERBUFFER, e)) : n.depthBuffer && n.stencilBuffer ? (t.renderbufferStorage(t.RENDERBUFFER, t.DEPTH_STENCIL, n.width, n.height), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.RENDERBUFFER, e)) : t.renderbufferStorage(t.RENDERBUFFER, t.RGBA4, n.width, n.height), t.bindRenderbuffer(t.RENDERBUFFER, null)
                }

                function w(e) {
                    var n = i.get(e),
                        r = !0 === e.isWebGLRenderTargetCube;
                    if (e.depthTexture) {
                        if (r) throw new Error("target.depthTexture not supported in Cube render targets");
                        ! function(e, n) {
                            if (n && n.isWebGLRenderTargetCube) throw new Error("Depth Texture with cube render targets is not supported");
                            if (t.bindFramebuffer(t.FRAMEBUFFER, e), !n.depthTexture || !n.depthTexture.isDepthTexture) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
                            i.get(n.depthTexture).__webglTexture && n.depthTexture.image.width === n.width && n.depthTexture.image.height === n.height || (n.depthTexture.image.width = n.width, n.depthTexture.image.height = n.height, n.depthTexture.needsUpdate = !0), g(n.depthTexture, 0);
                            var r = i.get(n.depthTexture).__webglTexture;
                            if (n.depthTexture.format === Ot) t.framebufferTexture2D(t.FRAMEBUFFER, t.DEPTH_ATTACHMENT, t.TEXTURE_2D, r, 0);
                            else {
                                if (n.depthTexture.format !== It) throw new Error("Unknown depthTexture format");
                                t.framebufferTexture2D(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.TEXTURE_2D, r, 0)
                            }
                        }(n.__webglFramebuffer, e)
                    } else if (r) {
                        n.__webglDepthbuffer = [];
                        for (var o = 0; o < 6; o++) t.bindFramebuffer(t.FRAMEBUFFER, n.__webglFramebuffer[o]), n.__webglDepthbuffer[o] = t.createRenderbuffer(), b(n.__webglDepthbuffer[o], e)
                    } else t.bindFramebuffer(t.FRAMEBUFFER, n.__webglFramebuffer), n.__webglDepthbuffer = t.createRenderbuffer(), b(n.__webglDepthbuffer, e);
                    t.bindFramebuffer(t.FRAMEBUFFER, null)
                }
                this.setTexture2D = g, this.setTexture3D = function(e, r) {
                    var o = i.get(e);
                    e.version > 0 && o.__version !== e.version ? _(o, e, r) : (n.activeTexture(t.TEXTURE0 + r), n.bindTexture(t.TEXTURE_3D, o.__webglTexture))
                }, this.setTextureCube = function(e, s) {
                    var c = i.get(e);
                    if (6 === e.image.length)
                        if (e.version > 0 && c.__version !== e.version) {
                            c.__image__webglTextureCube || (e.addEventListener("dispose", m), c.__image__webglTextureCube = t.createTexture(), a.memory.textures++), n.activeTexture(t.TEXTURE0 + s), n.bindTexture(t.TEXTURE_CUBE_MAP, c.__image__webglTextureCube), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, e.flipY);
                            for (var f = e && e.isCompressedTexture, v = e.image[0] && e.image[0].isDataTexture, g = [], _ = 0; _ < 6; _++) g[_] = f || v ? v ? e.image[_].image : e.image[_] : l(e.image[_], r.maxCubemapSize);
                            var x = g[0],
                                b = h(x),
                                w = o.convert(e.format),
                                M = o.convert(e.type),
                                T = d(w, M);
                            y(t.TEXTURE_CUBE_MAP, e, b);
                            for (var _ = 0; _ < 6; _++)
                                if (f)
                                    for (var E, S = g[_].mipmaps, A = 0, P = S.length; A < P; A++) E = S[A], e.format !== Pt && e.format !== At ? n.getCompressedTextureFormats().indexOf(w) > -1 ? n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + _, A, T, E.width, E.height, 0, E.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + _, A, T, E.width, E.height, 0, w, M, E.data);
                                else v ? n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + _, 0, T, g[_].width, g[_].height, 0, w, M, g[_].data) : n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + _, 0, T, w, M, g[_]);
                            c.__maxMipLevel = f ? S.length - 1 : 0, u(e, b) && p(t.TEXTURE_CUBE_MAP, e, x.width, x.height), c.__version = e.version, e.onUpdate && e.onUpdate(e)
                        } else n.activeTexture(t.TEXTURE0 + s), n.bindTexture(t.TEXTURE_CUBE_MAP, c.__image__webglTextureCube)
                }, this.setTextureCubeDynamic = function(e, r) {
                    n.activeTexture(t.TEXTURE0 + r), n.bindTexture(t.TEXTURE_CUBE_MAP, i.get(e).__webglTexture)
                }, this.setupRenderTarget = function(e) {
                    var r = i.get(e),
                        o = i.get(e.texture);
                    e.addEventListener("dispose", v), o.__webglTexture = t.createTexture(), a.memory.textures++;
                    var s = !0 === e.isWebGLRenderTargetCube,
                        c = h(e);
                    if (s) {
                        r.__webglFramebuffer = [];
                        for (var l = 0; l < 6; l++) r.__webglFramebuffer[l] = t.createFramebuffer()
                    } else r.__webglFramebuffer = t.createFramebuffer();
                    if (s) {
                        n.bindTexture(t.TEXTURE_CUBE_MAP, o.__webglTexture), y(t.TEXTURE_CUBE_MAP, e.texture, c);
                        for (var l = 0; l < 6; l++) x(r.__webglFramebuffer[l], e, t.COLOR_ATTACHMENT0, t.TEXTURE_CUBE_MAP_POSITIVE_X + l);
                        u(e.texture, c) && p(t.TEXTURE_CUBE_MAP, e.texture, e.width, e.height), n.bindTexture(t.TEXTURE_CUBE_MAP, null)
                    } else n.bindTexture(t.TEXTURE_2D, o.__webglTexture), y(t.TEXTURE_2D, e.texture, c), x(r.__webglFramebuffer, e, t.COLOR_ATTACHMENT0, t.TEXTURE_2D), u(e.texture, c) && p(t.TEXTURE_2D, e.texture, e.width, e.height), n.bindTexture(t.TEXTURE_2D, null);
                    e.depthBuffer && w(e)
                }, this.updateRenderTargetMipmap = function(e) {
                    var r = e.texture,
                        o = h(e);
                    if (u(r, o)) {
                        var a = e.isWebGLRenderTargetCube ? t.TEXTURE_CUBE_MAP : t.TEXTURE_2D,
                            s = i.get(r).__webglTexture;
                        n.bindTexture(a, s), p(a, r, e.width, e.height), n.bindTexture(a, null)
                    }
                }
            }

            function ki(t, e, n) {
                return {
                    convert: function(i) {
                        var r;
                        if (i === ot) return t.REPEAT;
                        if (i === at) return t.CLAMP_TO_EDGE;
                        if (i === st) return t.MIRRORED_REPEAT;
                        if (i === ct) return t.NEAREST;
                        if (i === lt) return t.NEAREST_MIPMAP_NEAREST;
                        if (i === ht) return t.NEAREST_MIPMAP_LINEAR;
                        if (i === ut) return t.LINEAR;
                        if (i === pt) return t.LINEAR_MIPMAP_NEAREST;
                        if (i === dt) return t.LINEAR_MIPMAP_LINEAR;
                        if (i === ft) return t.UNSIGNED_BYTE;
                        if (i === wt) return t.UNSIGNED_SHORT_4_4_4_4;
                        if (i === Mt) return t.UNSIGNED_SHORT_5_5_5_1;
                        if (i === Tt) return t.UNSIGNED_SHORT_5_6_5;
                        if (i === mt) return t.BYTE;
                        if (i === vt) return t.SHORT;
                        if (i === gt) return t.UNSIGNED_SHORT;
                        if (i === yt) return t.INT;
                        if (i === _t) return t.UNSIGNED_INT;
                        if (i === xt) return t.FLOAT;
                        if (i === bt) {
                            if (n.isWebGL2) return t.HALF_FLOAT;
                            if (null !== (r = e.get("OES_texture_half_float"))) return r.HALF_FLOAT_OES
                        }
                        if (i === St) return t.ALPHA;
                        if (i === At) return t.RGB;
                        if (i === Pt) return t.RGBA;
                        if (i === Lt) return t.LUMINANCE;
                        if (i === Rt) return t.LUMINANCE_ALPHA;
                        if (i === Ot) return t.DEPTH_COMPONENT;
                        if (i === It) return t.DEPTH_STENCIL;
                        if (i === Dt) return t.RED;
                        if (i === x) return t.FUNC_ADD;
                        if (i === b) return t.FUNC_SUBTRACT;
                        if (i === w) return t.FUNC_REVERSE_SUBTRACT;
                        if (i === E) return t.ZERO;
                        if (i === S) return t.ONE;
                        if (i === A) return t.SRC_COLOR;
                        if (i === P) return t.ONE_MINUS_SRC_COLOR;
                        if (i === L) return t.SRC_ALPHA;
                        if (i === R) return t.ONE_MINUS_SRC_ALPHA;
                        if (i === C) return t.DST_ALPHA;
                        if (i === O) return t.ONE_MINUS_DST_ALPHA;
                        if (i === I) return t.DST_COLOR;
                        if (i === D) return t.ONE_MINUS_DST_COLOR;
                        if (i === N) return t.SRC_ALPHA_SATURATE;
                        if ((i === Nt || i === Bt || i === Ht || i === Ft) && null !== (r = e.get("WEBGL_compressed_texture_s3tc"))) {
                            if (i === Nt) return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
                            if (i === Bt) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                            if (i === Ht) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                            if (i === Ft) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT
                        }
                        if ((i === kt || i === Ut || i === zt || i === Gt) && null !== (r = e.get("WEBGL_compressed_texture_pvrtc"))) {
                            if (i === kt) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                            if (i === Ut) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                            if (i === zt) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                            if (i === Gt) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
                        }
                        if (i === jt && null !== (r = e.get("WEBGL_compressed_texture_etc1"))) return r.COMPRESSED_RGB_ETC1_WEBGL;
                        if ((i === Vt || i === Wt || i === Xt || i === qt || i === Yt || i === Zt || i === Jt || i === Kt || i === Qt || i === $t || i === te || i === ee || i === ne || i === ie) && null !== (r = e.get("WEBGL_compressed_texture_astc"))) return i;
                        if (i === M || i === T) {
                            if (n.isWebGL2) {
                                if (i === M) return t.MIN;
                                if (i === T) return t.MAX
                            }
                            if (null !== (r = e.get("EXT_blend_minmax"))) {
                                if (i === M) return r.MIN_EXT;
                                if (i === T) return r.MAX_EXT
                            }
                        }
                        if (i === Et) {
                            if (n.isWebGL2) return t.UNSIGNED_INT_24_8;
                            if (null !== (r = e.get("WEBGL_depth_texture"))) return r.UNSIGNED_INT_24_8_WEBGL
                        }
                        return 0
                    }
                }
            }

            function Ui() {
                Ze.call(this), this.type = "Group"
            }

            function zi() {
                Ze.call(this), this.type = "Camera", this.matrixWorldInverse = new we, this.projectionMatrix = new we, this.projectionMatrixInverse = new we
            }

            function Gi(t, e, n, i) {
                zi.call(this), this.type = "PerspectiveCamera", this.fov = void 0 !== t ? t : 50, this.zoom = 1, this.near = void 0 !== n ? n : .1, this.far = void 0 !== i ? i : 2e3, this.focus = 10, this.aspect = void 0 !== e ? e : 1, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix()
            }

            function ji(t) {
                Gi.call(this), this.cameras = t || []
            }

            function Vi(t) {
                var e = this,
                    n = null,
                    i = null,
                    r = null,
                    o = [],
                    a = new we,
                    s = new we,
                    c = "stage";
                "undefined" != typeof window && "VRFrameData" in window && (i = new window.VRFrameData, window.addEventListener("vrdisplaypresentchange", y, !1));
                var l = new we,
                    h = new Me,
                    u = new Te,
                    p = new Gi;
                p.bounds = new Le(0, 0, .5, 1), p.layers.enable(1);
                var d = new Gi;
                d.bounds = new Le(.5, 0, .5, 1), d.layers.enable(2);
                var f, m, v = new ji([p, d]);

                function g() {
                    return null !== n && !0 === n.isPresenting
                }

                function y() {
                    if (g()) {
                        var i = n.getEyeParameters("left"),
                            r = i.renderWidth,
                            o = i.renderHeight;
                        m = t.getPixelRatio(), f = t.getSize(), t.setDrawingBufferSize(2 * r, o, 1), b.start()
                    } else e.enabled && t.setDrawingBufferSize(f.width, f.height, m), b.stop()
                }
                v.layers.enable(1), v.layers.enable(2);
                var _ = [];

                function x(t) {
                    for (var e = navigator.getGamepads && navigator.getGamepads(), n = 0, i = 0, r = e.length; n < r; n++) {
                        var o = e[n];
                        if (o && ("Daydream Controller" === o.id || "Gear VR Controller" === o.id || "Oculus Go Controller" === o.id || "OpenVR Gamepad" === o.id || o.id.startsWith("Oculus Touch") || o.id.startsWith("Spatial Controller"))) {
                            if (i === t) return o;
                            i++
                        }
                    }
                }
                this.enabled = !1, this.getController = function(t) {
                    var e = o[t];
                    return void 0 === e && ((e = new Ui).matrixAutoUpdate = !1, e.visible = !1, o[t] = e), e
                }, this.getDevice = function() {
                    return n
                }, this.setDevice = function(t) {
                    void 0 !== t && (n = t), b.setContext(t)
                }, this.setFrameOfReferenceType = function(t) {
                    c = t
                }, this.setPoseTarget = function(t) {
                    void 0 !== t && (r = t)
                }, this.getCamera = function(t) {
                    var e = "stage" === c ? 1.6 : 0;
                    if (null === n) return t.position.set(0, e, 0), t;
                    if (n.depthNear = t.near, n.depthFar = t.far, n.getFrameData(i), "stage" === c) {
                        var f = n.stageParameters;
                        f ? a.fromArray(f.sittingToStandingTransform) : a.makeTranslation(0, e, 0)
                    }
                    var m = i.pose,
                        g = null !== r ? r : t;
                    if (g.matrix.copy(a), g.matrix.decompose(g.position, g.quaternion, g.scale), null !== m.orientation && (h.fromArray(m.orientation), g.quaternion.multiply(h)), null !== m.position && (h.setFromRotationMatrix(a), u.fromArray(m.position), u.applyQuaternion(h), g.position.add(u)), g.updateMatrixWorld(), !1 === n.isPresenting) return t;
                    p.near = t.near, d.near = t.near, p.far = t.far, d.far = t.far, v.matrixWorld.copy(t.matrixWorld), v.matrixWorldInverse.copy(t.matrixWorldInverse), p.matrixWorldInverse.fromArray(i.leftViewMatrix), d.matrixWorldInverse.fromArray(i.rightViewMatrix), s.getInverse(a), "stage" === c && (p.matrixWorldInverse.multiply(s), d.matrixWorldInverse.multiply(s));
                    var y = g.parent;
                    null !== y && (l.getInverse(y.matrixWorld), p.matrixWorldInverse.multiply(l), d.matrixWorldInverse.multiply(l)), p.matrixWorld.getInverse(p.matrixWorldInverse), d.matrixWorld.getInverse(d.matrixWorldInverse), p.projectionMatrix.fromArray(i.leftProjectionMatrix), d.projectionMatrix.fromArray(i.rightProjectionMatrix), v.projectionMatrix.copy(p.projectionMatrix);
                    var b = n.getLayers();
                    if (b.length) {
                        var w = b[0];
                        null !== w.leftBounds && 4 === w.leftBounds.length && p.bounds.fromArray(w.leftBounds), null !== w.rightBounds && 4 === w.rightBounds.length && d.bounds.fromArray(w.rightBounds)
                    }
                    return function() {
                        for (var t = 0; t < o.length; t++) {
                            var e = o[t],
                                n = x(t);
                            if (void 0 !== n && void 0 !== n.pose) {
                                if (null === n.pose) return;
                                var i = n.pose;
                                !1 === i.hasPosition && e.position.set(.2, -.6, -.05), null !== i.position && e.position.fromArray(i.position), null !== i.orientation && e.quaternion.fromArray(i.orientation), e.matrix.compose(e.position, e.quaternion, e.scale), e.matrix.premultiply(a), e.matrix.decompose(e.position, e.quaternion, e.scale), e.matrixWorldNeedsUpdate = !0, e.visible = !0;
                                var r = "Daydream Controller" === n.id ? 0 : 1;
                                _[t] !== n.buttons[r].pressed && (_[t] = n.buttons[r].pressed, !0 === _[t] ? e.dispatchEvent({
                                    type: "selectstart"
                                }) : (e.dispatchEvent({
                                    type: "selectend"
                                }), e.dispatchEvent({
                                    type: "select"
                                })))
                            } else e.visible = !1
                        }
                    }(), v
                }, this.getStandingMatrix = function() {
                    return a
                }, this.isPresenting = g;
                var b = new je;
                this.setAnimationLoop = function(t) {
                    b.setAnimationLoop(t)
                }, this.submitFrame = function() {
                    g() && n.submitFrame()
                }, this.dispose = function() {
                    "undefined" != typeof window && window.removeEventListener("vrdisplaypresentchange", y)
                }
            }

            function Wi(t) {
                console.log("THREE.WebGLRenderer", n);
                var e = void 0 !== (t = t || {}).canvas ? t.canvas : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"),
                    a = void 0 !== t.context ? t.context : null,
                    s = void 0 !== t.alpha && t.alpha,
                    u = void 0 === t.depth || t.depth,
                    p = void 0 === t.stencil || t.stencil,
                    d = void 0 !== t.antialias && t.antialias,
                    b = void 0 === t.premultipliedAlpha || t.premultipliedAlpha,
                    w = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer,
                    M = void 0 !== t.powerPreference ? t.powerPreference : "default",
                    T = null,
                    E = null;
                this.domElement = e, this.context = null, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.gammaFactor = 2, this.gammaInput = !1, this.gammaOutput = !1, this.physicallyCorrectLights = !1, this.toneMapping = Y, this.toneMappingExposure = 1, this.toneMappingWhitePoint = 1, this.maxMorphTargets = 8, this.maxMorphNormals = 4;
                var S, A, P, L, R, C, O, I, D, N, V, W, X, q, Z, J, K, Q, $ = this,
                    tt = !1,
                    et = null,
                    nt = null,
                    it = null,
                    rt = -1,
                    ot = {
                        geometry: null,
                        program: null,
                        wireframe: !1
                    },
                    at = null,
                    st = null,
                    ct = new Le,
                    lt = new Le,
                    ht = null,
                    ut = 0,
                    pt = e.width,
                    dt = e.height,
                    mt = 1,
                    vt = new Le(0, 0, pt, dt),
                    gt = new Le(0, 0, pt, dt),
                    yt = !1,
                    _t = new Be,
                    wt = new function() {
                        var t = this,
                            e = null,
                            n = 0,
                            i = !1,
                            r = !1,
                            o = new Ne,
                            a = new Ee,
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
                    Mt = !1,
                    Tt = !1,
                    Et = new we,
                    St = new Te;

                function At() {
                    return null === nt ? mt : 1
                }
                try {
                    var Lt = {
                        alpha: s,
                        depth: u,
                        stencil: p,
                        antialias: d,
                        premultipliedAlpha: b,
                        preserveDrawingBuffer: w,
                        powerPreference: M
                    };
                    if (e.addEventListener("webglcontextlost", It, !1), e.addEventListener("webglcontextrestored", Dt, !1), null === (S = a || e.getContext("webgl", Lt) || e.getContext("experimental-webgl", Lt))) throw null !== e.getContext("webgl") ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
                    void 0 === S.getShaderPrecisionFormat && (S.getShaderPrecisionFormat = function() {
                        return {
                            rangeMin: 1,
                            rangeMax: 1,
                            precision: 1
                        }
                    })
                } catch (t) {
                    console.error("THREE.WebGLRenderer: " + t.message)
                }

                function Rt() {
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
                    }(S), (P = new function(t, e, n) {
                        var i;

                        function r(e) {
                            if ("highp" === e) {
                                if (t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_FLOAT).precision > 0 && t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT).precision > 0) return "highp";
                                e = "mediump"
                            }
                            return "mediump" === e && t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_FLOAT).precision > 0 && t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp"
                        }
                        var o = "undefined" != typeof WebGL2RenderingContext && t instanceof WebGL2RenderingContext,
                            a = void 0 !== n.precision ? n.precision : "highp",
                            s = r(a);
                        s !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", s, "instead."), a = s);
                        var c = !0 === n.logarithmicDepthBuffer,
                            l = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),
                            h = t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
                            u = t.getParameter(t.MAX_TEXTURE_SIZE),
                            p = t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),
                            d = t.getParameter(t.MAX_VERTEX_ATTRIBS),
                            f = t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),
                            m = t.getParameter(t.MAX_VARYING_VECTORS),
                            v = t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),
                            g = h > 0,
                            y = o || !!e.get("OES_texture_float");
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
                            floatVertexTextures: g && y
                        }
                    }(S, A, t)).isWebGL2 || (A.get("WEBGL_depth_texture"), A.get("OES_texture_float"), A.get("OES_texture_half_float"), A.get("OES_texture_half_float_linear"), A.get("OES_standard_derivatives"), A.get("OES_element_index_uint"), A.get("ANGLE_instanced_arrays")), A.get("OES_texture_float_linear"), Q = new ki(S, A, P), (L = new function(t, e, n, a) {
                        var s = new function() {
                                var e = !1,
                                    n = new Le,
                                    i = null,
                                    r = new Le(0, 0, 0, 0);
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
                            c = new function() {
                                var e = !1,
                                    n = null,
                                    i = null,
                                    r = null;
                                return {
                                    setTest: function(e) {
                                        e ? ot(t.DEPTH_TEST) : at(t.DEPTH_TEST)
                                    },
                                    setMask: function(i) {
                                        n === i || e || (t.depthMask(i), n = i)
                                    },
                                    setFunc: function(e) {
                                        if (i !== e) {
                                            if (e) switch (e) {
                                                case B:
                                                    t.depthFunc(t.NEVER);
                                                    break;
                                                case H:
                                                    t.depthFunc(t.ALWAYS);
                                                    break;
                                                case F:
                                                    t.depthFunc(t.LESS);
                                                    break;
                                                case k:
                                                    t.depthFunc(t.LEQUAL);
                                                    break;
                                                case U:
                                                    t.depthFunc(t.EQUAL);
                                                    break;
                                                case z:
                                                    t.depthFunc(t.GEQUAL);
                                                    break;
                                                case G:
                                                    t.depthFunc(t.GREATER);
                                                    break;
                                                case j:
                                                    t.depthFunc(t.NOTEQUAL);
                                                    break;
                                                default:
                                                    t.depthFunc(t.LEQUAL)
                                            } else t.depthFunc(t.LEQUAL);
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
                                    setTest: function(e) {
                                        e ? ot(t.STENCIL_TEST) : at(t.STENCIL_TEST)
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
                            p = t.getParameter(t.MAX_VERTEX_ATTRIBS),
                            d = new Uint8Array(p),
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
                            N = null,
                            V = null,
                            W = null,
                            X = null,
                            q = null,
                            Y = t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
                            Z = !1,
                            J = 0,
                            K = t.getParameter(t.VERSION); - 1 !== K.indexOf("WebGL") ? (J = parseFloat(/^WebGL\ ([0-9])/.exec(K)[1]), Z = J >= 1) : -1 !== K.indexOf("OpenGL ES") && (J = parseFloat(/^OpenGL\ ES\ ([0-9])/.exec(K)[1]), Z = J >= 2);
                        var Q = null,
                            $ = {},
                            tt = new Le,
                            et = new Le;

                        function nt(e, n, i) {
                            var r = new Uint8Array(4),
                                o = t.createTexture();
                            t.bindTexture(e, o), t.texParameteri(e, t.TEXTURE_MIN_FILTER, t.NEAREST), t.texParameteri(e, t.TEXTURE_MAG_FILTER, t.NEAREST);
                            for (var a = 0; a < i; a++) t.texImage2D(n + a, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, r);
                            return o
                        }
                        var it = {};

                        function rt(n, i) {
                            if (d[n] = 1, 0 === b[n] && (t.enableVertexAttribArray(n), b[n] = 1), w[n] !== i) {
                                var r = a.isWebGL2 ? t : e.get("ANGLE_instanced_arrays");
                                r[a.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](n, i), w[n] = i
                            }
                        }

                        function ot(e) {
                            !0 !== M[e] && (t.enable(e), M[e] = !0)
                        }

                        function at(e) {
                            !1 !== M[e] && (t.disable(e), M[e] = !1)
                        }

                        function st(e, i, r, o, a, s, c, l) {
                            if (e !== f) {
                                if (S || (ot(t.BLEND), S = !0), e === _) a = a || i, s = s || r, c = c || o, i === P && a === C || (t.blendEquationSeparate(n.convert(i), n.convert(a)), P = i, C = a), r === L && o === R && s === O && c === I || (t.blendFuncSeparate(n.convert(r), n.convert(o), n.convert(s), n.convert(c)), L = r, R = o, O = s, I = c), A = e, D = null;
                                else if (e !== A || l !== D) {
                                    if (P === x && C === x || (t.blendEquation(t.FUNC_ADD), P = x, C = x), l) switch (e) {
                                        case m:
                                            t.blendFuncSeparate(t.ONE, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA);
                                            break;
                                        case v:
                                            t.blendFunc(t.ONE, t.ONE);
                                            break;
                                        case g:
                                            t.blendFuncSeparate(t.ZERO, t.ZERO, t.ONE_MINUS_SRC_COLOR, t.ONE_MINUS_SRC_ALPHA);
                                            break;
                                        case y:
                                            t.blendFuncSeparate(t.ZERO, t.SRC_COLOR, t.ZERO, t.SRC_ALPHA);
                                            break;
                                        default:
                                            console.error("THREE.WebGLState: Invalid blending: ", e)
                                    } else switch (e) {
                                        case m:
                                            t.blendFuncSeparate(t.SRC_ALPHA, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA);
                                            break;
                                        case v:
                                            t.blendFunc(t.SRC_ALPHA, t.ONE);
                                            break;
                                        case g:
                                            t.blendFunc(t.ZERO, t.ONE_MINUS_SRC_COLOR);
                                            break;
                                        case y:
                                            t.blendFunc(t.ZERO, t.SRC_COLOR);
                                            break;
                                        default:
                                            console.error("THREE.WebGLState: Invalid blending: ", e)
                                    }
                                    L = null, R = null, O = null, I = null, A = e, D = l
                                }
                            } else S && (at(t.BLEND), S = !1)
                        }

                        function ct(e) {
                            N !== e && (e ? t.frontFace(t.CW) : t.frontFace(t.CCW), N = e)
                        }

                        function lt(e) {
                            e !== i ? (ot(t.CULL_FACE), e !== V && (e === r ? t.cullFace(t.BACK) : e === o ? t.cullFace(t.FRONT) : t.cullFace(t.FRONT_AND_BACK))) : at(t.CULL_FACE), V = e
                        }

                        function ht(e, n, i) {
                            e ? (ot(t.POLYGON_OFFSET_FILL), X === n && q === i || (t.polygonOffset(n, i), X = n, q = i)) : at(t.POLYGON_OFFSET_FILL)
                        }

                        function ut(e) {
                            void 0 === e && (e = t.TEXTURE0 + Y - 1), Q !== e && (t.activeTexture(e), Q = e)
                        }
                        return it[t.TEXTURE_2D] = nt(t.TEXTURE_2D, t.TEXTURE_2D, 1), it[t.TEXTURE_CUBE_MAP] = nt(t.TEXTURE_CUBE_MAP, t.TEXTURE_CUBE_MAP_POSITIVE_X, 6), s.setClear(0, 0, 0, 1), c.setClear(1), u.setClear(0), ot(t.DEPTH_TEST), c.setFunc(k), ct(!1), lt(r), ot(t.CULL_FACE), st(f), {
                            buffers: {
                                color: s,
                                depth: c,
                                stencil: u
                            },
                            initAttributes: function() {
                                for (var t = 0, e = d.length; t < e; t++) d[t] = 0
                            },
                            enableAttribute: function(t) {
                                rt(t, 0)
                            },
                            enableAttributeAndDivisor: rt,
                            disableUnusedAttributes: function() {
                                for (var e = 0, n = b.length; e !== n; ++e) b[e] !== d[e] && (t.disableVertexAttribArray(e), b[e] = 0)
                            },
                            enable: ot,
                            disable: at,
                            getCompressedTextureFormats: function() {
                                if (null === T && (T = [], e.get("WEBGL_compressed_texture_pvrtc") || e.get("WEBGL_compressed_texture_s3tc") || e.get("WEBGL_compressed_texture_etc1") || e.get("WEBGL_compressed_texture_astc")))
                                    for (var n = t.getParameter(t.COMPRESSED_TEXTURE_FORMATS), i = 0; i < n.length; i++) T.push(n[i]);
                                return T
                            },
                            useProgram: function(e) {
                                return E !== e && (t.useProgram(e), E = e, !0)
                            },
                            setBlending: st,
                            setMaterial: function(e, n) {
                                e.side === h ? at(t.CULL_FACE) : ot(t.CULL_FACE);
                                var i = e.side === l;
                                n && (i = !i), ct(i), e.blending === m && !1 === e.transparent ? st(f) : st(e.blending, e.blendEquation, e.blendSrc, e.blendDst, e.blendEquationAlpha, e.blendSrcAlpha, e.blendDstAlpha, e.premultipliedAlpha), c.setFunc(e.depthFunc), c.setTest(e.depthTest), c.setMask(e.depthWrite), s.setMask(e.colorWrite), ht(e.polygonOffset, e.polygonOffsetFactor, e.polygonOffsetUnits)
                            },
                            setFlipSided: ct,
                            setCullFace: lt,
                            setLineWidth: function(e) {
                                e !== W && (Z && t.lineWidth(e), W = e)
                            },
                            setPolygonOffset: ht,
                            setScissorTest: function(e) {
                                e ? ot(t.SCISSOR_TEST) : at(t.SCISSOR_TEST)
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
                                M = {}, T = null, Q = null, $ = {}, E = null, A = null, N = null, V = null, s.reset(), c.reset(), u.reset()
                            }
                        }
                    }(S, A, Q, P)).scissor(lt.copy(gt).multiplyScalar(mt)), L.viewport(ct.copy(vt).multiplyScalar(mt)), R = new function(t) {
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
                            update: function(n, i, r) {
                                switch (r = r || 1, e.calls++, i) {
                                    case t.TRIANGLES:
                                        e.triangles += r * (n / 3);
                                        break;
                                    case t.TRIANGLE_STRIP:
                                    case t.TRIANGLE_FAN:
                                        e.triangles += r * (n - 2);
                                        break;
                                    case t.LINES:
                                        e.lines += r * (n / 2);
                                        break;
                                    case t.LINE_STRIP:
                                        e.lines += r * (n - 1);
                                        break;
                                    case t.LINE_LOOP:
                                        e.lines += r * n;
                                        break;
                                    case t.POINTS:
                                        e.points += r * n;
                                        break;
                                    default:
                                        console.error("THREE.WebGLInfo: Unknown draw mode:", i)
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
                    }, O = new Fi(S, A, L, C, P, Q, R), I = new Ve(S), D = new function(t, e, n) {
                        var i = {},
                            r = {};

                        function o(t) {
                            var a = t.target,
                                s = i[a.id];
                            for (var c in null !== s.index && e.remove(s.index), s.attributes) e.remove(s.attributes[c]);
                            a.removeEventListener("dispose", o), delete i[a.id];
                            var l = r[s.id];
                            l && (e.remove(l), delete r[s.id]), n.memory.geometries--
                        }
                        return {
                            get: function(t, e) {
                                var r = i[e.id];
                                return r || (e.addEventListener("dispose", o), e.isBufferGeometry ? r = e : e.isGeometry && (void 0 === e._bufferGeometry && (e._bufferGeometry = (new pn).setFromObject(t)), r = e._bufferGeometry), i[e.id] = r, n.memory.geometries++, r)
                            },
                            update: function(n) {
                                var i = n.index,
                                    r = n.attributes;
                                for (var o in null !== i && e.update(i, t.ELEMENT_ARRAY_BUFFER), r) e.update(r[o], t.ARRAY_BUFFER);
                                var a = n.morphAttributes;
                                for (var o in a)
                                    for (var s = a[o], c = 0, l = s.length; c < l; c++) e.update(s[c], t.ARRAY_BUFFER)
                            },
                            getWireframeAttribute: function(n) {
                                var i = r[n.id];
                                if (i) return i;
                                var o = [],
                                    a = n.index,
                                    s = n.attributes;
                                if (null !== a)
                                    for (var c = a.array, l = 0, h = c.length; l < h; l += 3) {
                                        var u = c[l + 0],
                                            p = c[l + 1],
                                            d = c[l + 2];
                                        o.push(u, p, p, d, d, u)
                                    } else
                                        for (var c = s.position.array, l = 0, h = c.length / 3 - 1; l < h; l += 3) {
                                            var u = l + 0,
                                                p = l + 1,
                                                d = l + 2;
                                            o.push(u, p, p, d, d, u)
                                        }
                                return i = new(hn(o) > 65535 ? an : rn)(o, 1), e.update(i, t.ELEMENT_ARRAY_BUFFER), r[n.id] = i, i
                            }
                        }
                    }(S, I, R), N = new function(t, e) {
                        var n = {};
                        return {
                            update: function(i) {
                                var r = e.render.frame,
                                    o = i.geometry,
                                    a = t.get(i, o);
                                return n[a.id] !== r && (o.isGeometry && a.updateFromObject(i), t.update(a), n[a.id] = r), a
                            },
                            dispose: function() {
                                n = {}
                            }
                        }
                    }(D, R), Z = new function(t) {
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
                                l.sort(Tn);
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
                    }(S), V = new Ai($, A, P), W = new Ri, X = new function() {
                        var t = {};
                        return {
                            get: function(e, n) {
                                var i;
                                return void 0 === t[e.id] ? (i = new Di, t[e.id] = {}, t[e.id][n.id] = i) : void 0 === t[e.id][n.id] ? (i = new Di, t[e.id][n.id] = i) : i = t[e.id][n.id], i
                            },
                            dispose: function() {
                                t = {}
                            }
                        }
                    }, q = new function(t, e, n, i) {
                        var r, o, a = new Ue(0),
                            s = 0;

                        function h(t, n) {
                            e.buffers.color.setClear(t.r, t.g, t.b, n, i)
                        }
                        return {
                            getClearColor: function() {
                                return a
                            },
                            setClearColor: function(t, e) {
                                a.set(t), h(a, s = void 0 !== e ? e : 1)
                            },
                            getClearAlpha: function() {
                                return s
                            },
                            setClearAlpha: function(t) {
                                h(a, s = t)
                            },
                            render: function(e, i, u, p) {
                                var d = i.background;
                                null === d ? h(a, s) : d && d.isColor && (h(d, 1), p = !0), (t.autoClear || p) && t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil), d && d.isCubeTexture ? (void 0 === o && ((o = new Mn(new fn(1, 1, 1), new _n({
                                    uniforms: Fe.clone(Ge.cube.uniforms),
                                    vertexShader: Ge.cube.vertexShader,
                                    fragmentShader: Ge.cube.fragmentShader,
                                    side: l,
                                    depthTest: !0,
                                    depthWrite: !1,
                                    fog: !1
                                }))).geometry.removeAttribute("normal"), o.geometry.removeAttribute("uv"), o.onBeforeRender = function(t, e, n) {
                                    this.matrixWorld.copyPosition(n.matrixWorld)
                                }, n.update(o)), o.material.uniforms.tCube.value = d, e.push(o, o.geometry, o.material, 0, null)) : d && d.isTexture && (void 0 === r && ((r = new Mn(new vn(2, 2), new _n({
                                    uniforms: Fe.clone(Ge.background.uniforms),
                                    vertexShader: Ge.background.vertexShader,
                                    fragmentShader: Ge.background.fragmentShader,
                                    side: c,
                                    depthTest: !0,
                                    depthWrite: !1,
                                    fog: !1
                                }))).geometry.removeAttribute("normal"), n.update(r)), r.material.uniforms.t2D.value = d, e.push(r, r.geometry, r.material, 0, null))
                            }
                        }
                    }($, L, N, b), J = new function(t, e, n, i) {
                        var r;
                        this.setMode = function(t) {
                            r = t
                        }, this.render = function(e, i) {
                            t.drawArrays(r, e, i), n.update(i, r)
                        }, this.renderInstances = function(o, a, s) {
                            var c;
                            if (i.isWebGL2) c = t;
                            else if (null === (c = e.get("ANGLE_instanced_arrays"))) return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
                            c[i.isWebGL2 ? "drawArraysInstanced" : "drawArraysInstancedANGLE"](r, a, s, o.maxInstancedCount), n.update(s, r, o.maxInstancedCount)
                        }
                    }(S, A, R, P), K = new function(t, e, n, i) {
                        var r, o, a;
                        this.setMode = function(t) {
                            r = t
                        }, this.setIndex = function(t) {
                            o = t.type, a = t.bytesPerElement
                        }, this.render = function(e, i) {
                            t.drawElements(r, i, o, e * a), n.update(i, r)
                        }, this.renderInstances = function(s, c, l) {
                            if (i.isWebGL2) h = t;
                            else {
                                var h = e.get("ANGLE_instanced_arrays");
                                if (null === h) return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.")
                            }
                            h[i.isWebGL2 ? "drawElementsInstanced" : "drawElementsInstancedANGLE"](r, l, o, c * a, s.maxInstancedCount), n.update(l, r, s.maxInstancedCount)
                        }
                    }(S, A, R, P), R.programs = V.programs, $.context = S, $.capabilities = P, $.extensions = A, $.properties = C, $.renderLists = W, $.state = L, $.info = R
                }
                Rt();
                var Ct = null;
                "undefined" != typeof navigator && (Ct = "xr" in navigator ? new function(t) {
                    var e = t.context,
                        n = null,
                        i = null,
                        r = null,
                        o = "stage",
                        a = null,
                        s = [],
                        c = [];

                    function l() {
                        return null !== i && null !== r
                    }
                    var h = new Gi;
                    h.layers.enable(1), h.viewport = new Le;
                    var u = new Gi;
                    u.layers.enable(2), u.viewport = new Le;
                    var p = new ji([h, u]);

                    function d(t) {
                        var e = s[c.indexOf(t.inputSource)];
                        e && e.dispatchEvent({
                            type: t.type
                        })
                    }

                    function f() {
                        t.setFramebuffer(null), g.stop()
                    }

                    function m(t, e) {
                        null === e ? t.matrixWorld.copy(t.matrix) : t.matrixWorld.multiplyMatrices(e.matrixWorld, t.matrix), t.matrixWorldInverse.getInverse(t.matrixWorld)
                    }
                    p.layers.enable(1), p.layers.enable(2), this.enabled = !1, this.getController = function(t) {
                        var e = s[t];
                        return void 0 === e && ((e = new Ui).matrixAutoUpdate = !1, e.visible = !1, s[t] = e), e
                    }, this.getDevice = function() {
                        return n
                    }, this.setDevice = function(t) {
                        void 0 !== t && (n = t), t instanceof XRDevice && e.setCompatibleXRDevice(t)
                    }, this.setFrameOfReferenceType = function(t) {
                        o = t
                    }, this.setSession = function(n) {
                        null !== (i = n) && (i.addEventListener("select", d), i.addEventListener("selectstart", d), i.addEventListener("selectend", d), i.addEventListener("end", f), i.baseLayer = new XRWebGLLayer(i, e), i.requestFrameOfReference(o).then(function(e) {
                            r = e, t.setFramebuffer(i.baseLayer.framebuffer), g.setContext(i), g.start()
                        }), c = i.getInputSources(), i.addEventListener("inputsourceschange", function() {
                            c = i.getInputSources(), console.log(c)
                        }))
                    }, this.getCamera = function(t) {
                        if (l()) {
                            var e = t.parent,
                                n = p.cameras;
                            m(p, e);
                            for (var i = 0; i < n.length; i++) m(n[i], e);
                            t.matrixWorld.copy(p.matrixWorld);
                            for (var r = t.children, i = 0, o = r.length; i < o; i++) r[i].updateMatrixWorld(!0);
                            return p
                        }
                        return t
                    }, this.isPresenting = l;
                    var v = null,
                        g = new je;
                    g.setAnimationLoop(function(t, e) {
                        if (null !== (a = e.getDevicePose(r)))
                            for (var n = i.baseLayer, o = e.views, l = 0; l < o.length; l++) {
                                var h = o[l],
                                    u = n.getViewport(h),
                                    d = a.getViewMatrix(h),
                                    f = p.cameras[l];
                                f.matrix.fromArray(d).getInverse(f.matrix), f.projectionMatrix.fromArray(h.projectionMatrix), f.viewport.set(u.x, u.y, u.width, u.height), 0 === l && (p.matrix.copy(f.matrix), p.projectionMatrix.copy(f.projectionMatrix))
                            }
                        for (var l = 0; l < s.length; l++) {
                            var m = s[l],
                                g = c[l];
                            if (g) {
                                var y = e.getInputPose(g, r);
                                if (null !== y) {
                                    "targetRay" in y ? m.matrix.elements = y.targetRay.transformMatrix : "pointerMatrix" in y && (m.matrix.elements = y.pointerMatrix), m.matrix.decompose(m.position, m.rotation, m.scale), m.visible = !0;
                                    continue
                                }
                            }
                            m.visible = !1
                        }
                        v && v(t)
                    }), this.setAnimationLoop = function(t) {
                        v = t
                    }, this.dispose = function() {}, this.getStandingMatrix = function() {
                        return console.warn("THREE.WebXRManager: getStandingMatrix() is no longer needed."), new THREE.Matrix4
                    }, this.submitFrame = function() {}
                }($) : new Vi($)), this.vr = Ct;
                var Ot = new Hi($, N, P.maxTextureSize);

                function It(t) {
                    t.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), tt = !0
                }

                function Dt() {
                    console.log("THREE.WebGLRenderer: Context Restored."), tt = !1, Rt()
                }

                function Nt(t) {
                    var e = t.target;
                    e.removeEventListener("dispose", Nt),
                        function(t) {
                            Bt(t), C.remove(t)
                        }(e)
                }

                function Bt(t) {
                    var e = C.get(t).program;
                    t.program = void 0, void 0 !== e && V.releaseProgram(e)
                }
                this.shadowMap = Ot, this.getContext = function() {
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
                    return mt
                }, this.setPixelRatio = function(t) {
                    void 0 !== t && (mt = t, this.setSize(pt, dt, !1))
                }, this.getSize = function() {
                    return {
                        width: pt,
                        height: dt
                    }
                }, this.setSize = function(t, n, i) {
                    Ct.isPresenting() ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (pt = t, dt = n, e.width = t * mt, e.height = n * mt, !1 !== i && (e.style.width = t + "px", e.style.height = n + "px"), this.setViewport(0, 0, t, n))
                }, this.getDrawingBufferSize = function() {
                    return {
                        width: pt * mt,
                        height: dt * mt
                    }
                }, this.setDrawingBufferSize = function(t, n, i) {
                    pt = t, dt = n, mt = i, e.width = t * i, e.height = n * i, this.setViewport(0, 0, t, n)
                }, this.getCurrentViewport = function() {
                    return ct
                }, this.setViewport = function(t, e, n, i) {
                    vt.set(t, dt - e - i, n, i), L.viewport(ct.copy(vt).multiplyScalar(mt))
                }, this.setScissor = function(t, e, n, i) {
                    gt.set(t, dt - e - i, n, i), L.scissor(lt.copy(gt).multiplyScalar(mt))
                }, this.setScissorTest = function(t) {
                    L.setScissorTest(yt = t)
                }, this.getClearColor = function() {
                    return q.getClearColor()
                }, this.setClearColor = function() {
                    q.setClearColor.apply(q, arguments)
                }, this.getClearAlpha = function() {
                    return q.getClearAlpha()
                }, this.setClearAlpha = function() {
                    q.setClearAlpha.apply(q, arguments)
                }, this.clear = function(t, e, n) {
                    var i = 0;
                    (void 0 === t || t) && (i |= S.COLOR_BUFFER_BIT), (void 0 === e || e) && (i |= S.DEPTH_BUFFER_BIT), (void 0 === n || n) && (i |= S.STENCIL_BUFFER_BIT), S.clear(i)
                }, this.clearColor = function() {
                    this.clear(!0, !1, !1)
                }, this.clearDepth = function() {
                    this.clear(!1, !0, !1)
                }, this.clearStencil = function() {
                    this.clear(!1, !1, !0)
                }, this.dispose = function() {
                    e.removeEventListener("webglcontextlost", It, !1), e.removeEventListener("webglcontextrestored", Dt, !1), W.dispose(), X.dispose(), C.dispose(), N.dispose(), Ct.dispose(), Ft.stop()
                }, this.renderBufferImmediate = function(t, e) {
                    L.initAttributes();
                    var n = C.get(t);
                    t.hasPositions && !n.position && (n.position = S.createBuffer()), t.hasNormals && !n.normal && (n.normal = S.createBuffer()), t.hasUvs && !n.uv && (n.uv = S.createBuffer()), t.hasColors && !n.color && (n.color = S.createBuffer());
                    var i = e.getAttributes();
                    t.hasPositions && (S.bindBuffer(S.ARRAY_BUFFER, n.position), S.bufferData(S.ARRAY_BUFFER, t.positionArray, S.DYNAMIC_DRAW), L.enableAttribute(i.position), S.vertexAttribPointer(i.position, 3, S.FLOAT, !1, 0, 0)), t.hasNormals && (S.bindBuffer(S.ARRAY_BUFFER, n.normal), S.bufferData(S.ARRAY_BUFFER, t.normalArray, S.DYNAMIC_DRAW), L.enableAttribute(i.normal), S.vertexAttribPointer(i.normal, 3, S.FLOAT, !1, 0, 0)), t.hasUvs && (S.bindBuffer(S.ARRAY_BUFFER, n.uv), S.bufferData(S.ARRAY_BUFFER, t.uvArray, S.DYNAMIC_DRAW), L.enableAttribute(i.uv), S.vertexAttribPointer(i.uv, 2, S.FLOAT, !1, 0, 0)), t.hasColors && (S.bindBuffer(S.ARRAY_BUFFER, n.color), S.bufferData(S.ARRAY_BUFFER, t.colorArray, S.DYNAMIC_DRAW), L.enableAttribute(i.color), S.vertexAttribPointer(i.color, 3, S.FLOAT, !1, 0, 0)), L.disableUnusedAttributes(), S.drawArrays(S.TRIANGLES, 0, t.count), t.count = 0
                }, this.renderBufferDirect = function(t, e, n, i, r, o) {
                    var a = r.isMesh && r.normalMatrix.determinant() < 0;
                    L.setMaterial(i, a);
                    var s = Gt(t, e, i, r),
                        c = !1;
                    ot.geometry === n.id && ot.program === s.id && ot.wireframe === (!0 === i.wireframe) || (ot.geometry = n.id, ot.program = s.id, ot.wireframe = !0 === i.wireframe, c = !0), r.morphTargetInfluences && (Z.update(r, n, i, s), c = !0);
                    var l, h = n.index,
                        u = n.attributes.position,
                        p = 1;
                    !0 === i.wireframe && (h = D.getWireframeAttribute(n), p = 2);
                    var d = J;
                    null !== h && (l = I.get(h), (d = K).setIndex(l)), c && (function(t, e, n) {
                        if (n && n.isInstancedBufferGeometry & !P.isWebGL2 && null === A.get("ANGLE_instanced_arrays")) console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
                        else {
                            L.initAttributes();
                            var i = n.attributes,
                                r = e.getAttributes(),
                                o = t.defaultAttributeValues;
                            for (var a in r) {
                                var s = r[a];
                                if (s >= 0) {
                                    var c = i[a];
                                    if (void 0 !== c) {
                                        var l = c.normalized,
                                            h = c.itemSize,
                                            u = I.get(c);
                                        if (void 0 === u) continue;
                                        var p = u.buffer,
                                            d = u.type,
                                            f = u.bytesPerElement;
                                        if (c.isInterleavedBufferAttribute) {
                                            var m = c.data,
                                                v = m.stride,
                                                g = c.offset;
                                            m && m.isInstancedInterleavedBuffer ? (L.enableAttributeAndDivisor(s, m.meshPerAttribute), void 0 === n.maxInstancedCount && (n.maxInstancedCount = m.meshPerAttribute * m.count)) : L.enableAttribute(s), S.bindBuffer(S.ARRAY_BUFFER, p), S.vertexAttribPointer(s, h, d, l, v * f, g * f)
                                        } else c.isInstancedBufferAttribute ? (L.enableAttributeAndDivisor(s, c.meshPerAttribute), void 0 === n.maxInstancedCount && (n.maxInstancedCount = c.meshPerAttribute * c.count)) : L.enableAttribute(s), S.bindBuffer(S.ARRAY_BUFFER, p), S.vertexAttribPointer(s, h, d, l, 0, 0)
                                    } else if (void 0 !== o) {
                                        var y = o[a];
                                        if (void 0 !== y) switch (y.length) {
                                            case 2:
                                                S.vertexAttrib2fv(s, y);
                                                break;
                                            case 3:
                                                S.vertexAttrib3fv(s, y);
                                                break;
                                            case 4:
                                                S.vertexAttrib4fv(s, y);
                                                break;
                                            default:
                                                S.vertexAttrib1fv(s, y)
                                        }
                                    }
                                }
                            }
                            L.disableUnusedAttributes()
                        }
                    }(i, s, n), null !== h && S.bindBuffer(S.ELEMENT_ARRAY_BUFFER, l.buffer));
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
                            if (!0 === i.wireframe) L.setLineWidth(i.wireframeLinewidth * At()), d.setMode(S.LINES);
                            else switch (r.drawMode) {
                                case ae:
                                    d.setMode(S.TRIANGLES);
                                    break;
                                case se:
                                    d.setMode(S.TRIANGLE_STRIP);
                                    break;
                                case ce:
                                    d.setMode(S.TRIANGLE_FAN)
                            } else if (r.isLine) {
                                var w = i.linewidth;
                                void 0 === w && (w = 1), L.setLineWidth(w * At()), r.isLineSegments ? d.setMode(S.LINES) : r.isLineLoop ? d.setMode(S.LINE_LOOP) : d.setMode(S.LINE_STRIP)
                            } else r.isPoints ? d.setMode(S.POINTS) : r.isSprite && d.setMode(S.TRIANGLES);
                        n && n.isInstancedBufferGeometry ? n.maxInstancedCount > 0 && d.renderInstances(n, _, b) : d.render(_, b)
                    }
                }, this.compile = function(t, e) {
                    (E = X.get(t, e)).init(), t.traverse(function(t) {
                        t.isLight && (E.pushLight(t), t.castShadow && E.pushShadow(t))
                    }), E.setupLights(e), t.traverse(function(e) {
                        if (e.material)
                            if (Array.isArray(e.material))
                                for (var n = 0; n < e.material.length; n++) zt(e.material[n], t.fog, e);
                            else zt(e.material, t.fog, e)
                    })
                };
                var Ht = null,
                    Ft = new je;

                function kt(t, e, n, i) {
                    for (var r = 0, o = t.length; r < o; r++) {
                        var a = t[r],
                            s = a.object,
                            c = a.geometry,
                            l = void 0 === i ? a.material : i,
                            h = a.group;
                        if (n.isArrayCamera) {
                            st = n;
                            for (var u = n.cameras, p = 0, d = u.length; p < d; p++) {
                                var f = u[p];
                                if (s.layers.test(f.layers)) {
                                    if ("viewport" in f) L.viewport(ct.copy(f.viewport));
                                    else {
                                        var m = f.bounds,
                                            v = m.x * pt,
                                            g = m.y * dt,
                                            y = m.z * pt,
                                            _ = m.w * dt;
                                        L.viewport(ct.set(v, g, y, _).multiplyScalar(mt))
                                    }
                                    E.setupLights(f), Ut(s, e, f, c, l, h)
                                }
                            }
                        } else st = null, Ut(s, e, n, c, l, h)
                    }
                }

                function Ut(t, e, n, i, r, o) {
                    if (t.onBeforeRender($, e, n, i, r, o), E = X.get(e, st || n), t.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, t.matrixWorld), t.normalMatrix.getNormalMatrix(t.modelViewMatrix), t.isImmediateRenderObject) {
                        L.setMaterial(r);
                        var a = Gt(n, e.fog, r, t);
                        ot.geometry = null, ot.program = null, ot.wireframe = !1,
                            function(t, e) {
                                t.render(function(t) {
                                    $.renderBufferImmediate(t, e)
                                })
                            }(t, a)
                    } else $.renderBufferDirect(n, e.fog, i, r, t, o);
                    t.onAfterRender($, e, n, i, r, o), E = X.get(e, st || n)
                }

                function zt(t, e, n) {
                    var i = C.get(t),
                        r = E.state.lights,
                        o = E.state.shadowsArray,
                        a = i.lightsHash,
                        s = r.state.hash,
                        c = V.getParameters(t, r.state, o, e, wt.numPlanes, wt.numIntersection, n),
                        l = V.getProgramCode(t, c),
                        h = i.program,
                        u = !0;
                    if (void 0 === h) t.addEventListener("dispose", Nt);
                    else if (h.code !== l) Bt(t);
                    else if (a.stateID !== s.stateID || a.directionalLength !== s.directionalLength || a.pointLength !== s.pointLength || a.spotLength !== s.spotLength || a.rectAreaLength !== s.rectAreaLength || a.hemiLength !== s.hemiLength || a.shadowsLength !== s.shadowsLength) a.stateID = s.stateID, a.directionalLength = s.directionalLength, a.pointLength = s.pointLength, a.spotLength = s.spotLength, a.rectAreaLength = s.rectAreaLength, a.hemiLength = s.hemiLength, a.shadowsLength = s.shadowsLength, u = !1;
                    else {
                        if (void 0 !== c.shaderID) return;
                        u = !1
                    }
                    if (u) {
                        if (c.shaderID) {
                            var p = Ge[c.shaderID];
                            i.shader = {
                                name: t.type,
                                uniforms: Fe.clone(p.uniforms),
                                vertexShader: p.vertexShader,
                                fragmentShader: p.fragmentShader
                            }
                        } else i.shader = {
                            name: t.type,
                            uniforms: t.uniforms,
                            vertexShader: t.vertexShader,
                            fragmentShader: t.fragmentShader
                        };
                        t.onBeforeCompile(i.shader, $), l = V.getProgramCode(t, c), h = V.acquireProgram(t, i.shader, c, l), i.program = h, t.program = h
                    }
                    var d = h.getAttributes();
                    if (t.morphTargets) {
                        t.numSupportedMorphTargets = 0;
                        for (var f = 0; f < $.maxMorphTargets; f++) d["morphTarget" + f] >= 0 && t.numSupportedMorphTargets++
                    }
                    if (t.morphNormals) {
                        t.numSupportedMorphNormals = 0;
                        for (var f = 0; f < $.maxMorphNormals; f++) d["morphNormal" + f] >= 0 && t.numSupportedMorphNormals++
                    }
                    var m = i.shader.uniforms;
                    (t.isShaderMaterial || t.isRawShaderMaterial) && !0 !== t.clipping || (i.numClippingPlanes = wt.numPlanes, i.numIntersection = wt.numIntersection, m.clippingPlanes = wt.uniform), i.fog = e, void 0 === a && (i.lightsHash = a = {}), a.stateID = s.stateID, a.directionalLength = s.directionalLength, a.pointLength = s.pointLength, a.spotLength = s.spotLength, a.rectAreaLength = s.rectAreaLength, a.hemiLength = s.hemiLength, a.shadowsLength = s.shadowsLength, t.lights && (m.ambientLightColor.value = r.state.ambient, m.directionalLights.value = r.state.directional, m.spotLights.value = r.state.spot, m.rectAreaLights.value = r.state.rectArea, m.pointLights.value = r.state.point, m.hemisphereLights.value = r.state.hemi, m.directionalShadowMap.value = r.state.directionalShadowMap, m.directionalShadowMatrix.value = r.state.directionalShadowMatrix, m.spotShadowMap.value = r.state.spotShadowMap, m.spotShadowMatrix.value = r.state.spotShadowMatrix, m.pointShadowMap.value = r.state.pointShadowMap, m.pointShadowMatrix.value = r.state.pointShadowMatrix);
                    var v = i.program.getUniforms(),
                        g = vi.seqWithValue(v.seq, m);
                    i.uniformsList = g
                }

                function Gt(t, e, n, i) {
                    ut = 0;
                    var r = C.get(n),
                        o = E.state.lights,
                        a = r.lightsHash,
                        s = o.state.hash;
                    if (Mt && (Tt || t !== at)) {
                        var c = t === at && n.id === rt;
                        wt.setState(n.clippingPlanes, n.clipIntersection, n.clipShadows, t, r, c)
                    }!1 === n.needsUpdate && (void 0 === r.program ? n.needsUpdate = !0 : n.fog && r.fog !== e ? n.needsUpdate = !0 : (!n.lights || a.stateID === s.stateID && a.directionalLength === s.directionalLength && a.pointLength === s.pointLength && a.spotLength === s.spotLength && a.rectAreaLength === s.rectAreaLength && a.hemiLength === s.hemiLength && a.shadowsLength === s.shadowsLength) && (void 0 === r.numClippingPlanes || r.numClippingPlanes === wt.numPlanes && r.numIntersection === wt.numIntersection) || (n.needsUpdate = !0)), n.needsUpdate && (zt(n, e, i), n.needsUpdate = !1);
                    var h = !1,
                        u = !1,
                        p = !1,
                        d = r.program,
                        f = d.getUniforms(),
                        m = r.shader.uniforms;
                    if (L.useProgram(d.program) && (h = !0, u = !0, p = !0), n.id !== rt && (rt = n.id, u = !0), h || at !== t) {
                        if (f.setValue(S, "projectionMatrix", t.projectionMatrix), P.logarithmicDepthBuffer && f.setValue(S, "logDepthBufFC", 2 / (Math.log(t.far + 1) / Math.LN2)), at !== t && (at = t, u = !0, p = !0), n.isShaderMaterial || n.isMeshPhongMaterial || n.isMeshStandardMaterial || n.envMap) {
                            var v = f.map.cameraPosition;
                            void 0 !== v && v.setValue(S, St.setFromMatrixPosition(t.matrixWorld))
                        }(n.isMeshPhongMaterial || n.isMeshLambertMaterial || n.isMeshBasicMaterial || n.isMeshStandardMaterial || n.isShaderMaterial || n.skinning) && f.setValue(S, "viewMatrix", t.matrixWorldInverse)
                    }
                    if (n.skinning) {
                        f.setOptional(S, i, "bindMatrix"), f.setOptional(S, i, "bindMatrixInverse");
                        var g = i.skeleton;
                        if (g) {
                            var y = g.bones;
                            if (P.floatVertexTextures) {
                                if (void 0 === g.boneTexture) {
                                    var _ = Math.sqrt(4 * y.length);
                                    _ = xe.ceilPowerOfTwo(_), _ = Math.max(_, 4);
                                    var x = new Float32Array(_ * _ * 4);
                                    x.set(g.boneMatrices);
                                    var b = new Oe(x, _, _, Pt, xt);
                                    b.needsUpdate = !0, g.boneMatrices = x, g.boneTexture = b, g.boneTextureSize = _
                                }
                                f.setValue(S, "boneTexture", g.boneTexture), f.setValue(S, "boneTextureSize", g.boneTextureSize)
                            } else f.setOptional(S, g, "boneMatrices")
                        }
                    }
                    return u && (f.setValue(S, "toneMappingExposure", $.toneMappingExposure), f.setValue(S, "toneMappingWhitePoint", $.toneMappingWhitePoint), n.lights && function(t, e) {
                        t.ambientLightColor.needsUpdate = e, t.directionalLights.needsUpdate = e, t.pointLights.needsUpdate = e, t.spotLights.needsUpdate = e, t.rectAreaLights.needsUpdate = e, t.hemisphereLights.needsUpdate = e
                    }(m, p), e && n.fog && function(t, e) {
                        t.fogColor.value = e.color, e.isFog ? (t.fogNear.value = e.near, t.fogFar.value = e.far) : e.isFogExp2 && (t.fogDensity.value = e.density)
                    }(m, e), n.isMeshBasicMaterial ? jt(m, n) : n.isMeshLambertMaterial ? (jt(m, n), function(t, e) {
                        e.emissiveMap && (t.emissiveMap.value = e.emissiveMap)
                    }(m, n)) : n.isMeshPhongMaterial ? (jt(m, n), n.isMeshToonMaterial ? function(t, e) {
                        Vt(t, e), e.gradientMap && (t.gradientMap.value = e.gradientMap)
                    }(m, n) : Vt(m, n)) : n.isMeshStandardMaterial ? (jt(m, n), n.isMeshPhysicalMaterial ? function(t, e) {
                        Wt(t, e), t.reflectivity.value = e.reflectivity, t.clearCoat.value = e.clearCoat, t.clearCoatRoughness.value = e.clearCoatRoughness
                    }(m, n) : Wt(m, n)) : n.isMeshMatcapMaterial ? (jt(m, n), function(t, e) {
                        e.matcap && (t.matcap.value = e.matcap), e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, e.side === l && (t.bumpScale.value *= -1)), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), e.side === l && t.normalScale.value.negate()), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
                    }(m, n)) : n.isMeshDepthMaterial ? (jt(m, n), function(t, e) {
                        e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
                    }(m, n)) : n.isMeshDistanceMaterial ? (jt(m, n), function(t, e) {
                        e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias), t.referencePosition.value.copy(e.referencePosition), t.nearDistance.value = e.nearDistance, t.farDistance.value = e.farDistance
                    }(m, n)) : n.isMeshNormalMaterial ? (jt(m, n), function(t, e) {
                        e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, e.side === l && (t.bumpScale.value *= -1)), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), e.side === l && t.normalScale.value.negate()), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
                    }(m, n)) : n.isLineBasicMaterial ? (function(t, e) {
                        t.diffuse.value = e.color, t.opacity.value = e.opacity
                    }(m, n), n.isLineDashedMaterial && function(t, e) {
                        t.dashSize.value = e.dashSize, t.totalSize.value = e.dashSize + e.gapSize, t.scale.value = e.scale
                    }(m, n)) : n.isPointsMaterial ? function(t, e) {
                        t.diffuse.value = e.color, t.opacity.value = e.opacity, t.size.value = e.size * mt, t.scale.value = .5 * dt, t.map.value = e.map, null !== e.map && (!0 === e.map.matrixAutoUpdate && e.map.updateMatrix(), t.uvTransform.value.copy(e.map.matrix))
                    }(m, n) : n.isSpriteMaterial ? function(t, e) {
                        t.diffuse.value = e.color, t.opacity.value = e.opacity, t.rotation.value = e.rotation, t.map.value = e.map, null !== e.map && (!0 === e.map.matrixAutoUpdate && e.map.updateMatrix(), t.uvTransform.value.copy(e.map.matrix))
                    }(m, n) : n.isShadowMaterial && (m.color.value = n.color, m.opacity.value = n.opacity), void 0 !== m.ltc_1 && (m.ltc_1.value = ze.LTC_1), void 0 !== m.ltc_2 && (m.ltc_2.value = ze.LTC_2), vi.upload(S, r.uniformsList, m, $)), n.isShaderMaterial && !0 === n.uniformsNeedUpdate && (vi.upload(S, r.uniformsList, m, $), n.uniformsNeedUpdate = !1), n.isSpriteMaterial && f.setValue(S, "center", i.center), f.setValue(S, "modelViewMatrix", i.modelViewMatrix), f.setValue(S, "normalMatrix", i.normalMatrix), f.setValue(S, "modelMatrix", i.matrixWorld), d
                }

                function jt(t, e) {
                    var n;
                    t.opacity.value = e.opacity, e.color && (t.diffuse.value = e.color), e.emissive && t.emissive.value.copy(e.emissive).multiplyScalar(e.emissiveIntensity), e.map && (t.map.value = e.map), e.alphaMap && (t.alphaMap.value = e.alphaMap), e.specularMap && (t.specularMap.value = e.specularMap), e.envMap && (t.envMap.value = e.envMap, t.flipEnvMap.value = e.envMap && e.envMap.isCubeTexture ? -1 : 1, t.reflectivity.value = e.reflectivity, t.refractionRatio.value = e.refractionRatio, t.maxMipLevel.value = C.get(e.envMap).__maxMipLevel), e.lightMap && (t.lightMap.value = e.lightMap, t.lightMapIntensity.value = e.lightMapIntensity), e.aoMap && (t.aoMap.value = e.aoMap, t.aoMapIntensity.value = e.aoMapIntensity), e.map ? n = e.map : e.specularMap ? n = e.specularMap : e.displacementMap ? n = e.displacementMap : e.normalMap ? n = e.normalMap : e.bumpMap ? n = e.bumpMap : e.roughnessMap ? n = e.roughnessMap : e.metalnessMap ? n = e.metalnessMap : e.alphaMap ? n = e.alphaMap : e.emissiveMap && (n = e.emissiveMap), void 0 !== n && (n.isWebGLRenderTarget && (n = n.texture), !0 === n.matrixAutoUpdate && n.updateMatrix(), t.uvTransform.value.copy(n.matrix))
                }

                function Vt(t, e) {
                    t.specular.value = e.specular, t.shininess.value = Math.max(e.shininess, 1e-4), e.emissiveMap && (t.emissiveMap.value = e.emissiveMap), e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, e.side === l && (t.bumpScale.value *= -1)), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), e.side === l && t.normalScale.value.negate()), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
                }

                function Wt(t, e) {
                    t.roughness.value = e.roughness, t.metalness.value = e.metalness, e.roughnessMap && (t.roughnessMap.value = e.roughnessMap), e.metalnessMap && (t.metalnessMap.value = e.metalnessMap), e.emissiveMap && (t.emissiveMap.value = e.emissiveMap), e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, e.side === l && (t.bumpScale.value *= -1)), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), e.side === l && t.normalScale.value.negate()), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias), e.envMap && (t.envMapIntensity.value = e.envMapIntensity)
                }
                Ft.setAnimationLoop(function(t) {
                    Ct.isPresenting() || Ht && Ht(t)
                }), "undefined" != typeof window && Ft.setContext(window), this.setAnimationLoop = function(t) {
                    Ht = t, Ct.setAnimationLoop(t), Ft.start()
                }, this.render = function(t, e, n, i) {
                    if (e && e.isCamera) {
                        if (!tt) {
                            ot.geometry = null, ot.program = null, ot.wireframe = !1, rt = -1, at = null, !0 === t.autoUpdate && t.updateMatrixWorld(), null === e.parent && e.updateMatrixWorld(), Ct.enabled && (e = Ct.getCamera(e)), (E = X.get(t, e)).init(), t.onBeforeRender($, t, e, n), Et.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), _t.setFromMatrix(Et), Tt = this.localClippingEnabled, Mt = wt.init(this.clippingPlanes, Tt, e), (T = W.get(t, e)).init(),
                                function t(e, n, i) {
                                    if (!1 !== e.visible) {
                                        var r = e.layers.test(n.layers);
                                        if (r)
                                            if (e.isLight) E.pushLight(e), e.castShadow && E.pushShadow(e);
                                            else if (e.isSprite) {
                                            if (!e.frustumCulled || _t.intersectsSprite(e)) {
                                                i && St.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Et);
                                                var o = N.update(e),
                                                    a = e.material;
                                                T.push(e, o, a, St.z, null)
                                            }
                                        } else if (e.isImmediateRenderObject) i && St.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Et), T.push(e, null, e.material, St.z, null);
                                        else if ((e.isMesh || e.isLine || e.isPoints) && (e.isSkinnedMesh && e.skeleton.update(), !e.frustumCulled || _t.intersectsObject(e))) {
                                            i && St.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Et);
                                            var o = N.update(e),
                                                a = e.material;
                                            if (Array.isArray(a))
                                                for (var s = o.groups, c = 0, l = s.length; c < l; c++) {
                                                    var h = s[c],
                                                        u = a[h.materialIndex];
                                                    u && u.visible && T.push(e, o, u, St.z, h)
                                                } else a.visible && T.push(e, o, a, St.z, null)
                                        }
                                        for (var p = e.children, c = 0, l = p.length; c < l; c++) t(p[c], n, i)
                                    }
                                }(t, e, $.sortObjects), !0 === $.sortObjects && T.sort(), Mt && wt.beginShadows();
                            var r = E.state.shadowsArray;
                            Ot.render(r, t, e), E.setupLights(e), Mt && wt.endShadows(), this.info.autoReset && this.info.reset(), void 0 === n && (n = null), this.setRenderTarget(n), q.render(T, t, e, i);
                            var o = T.opaque,
                                a = T.transparent;
                            if (t.overrideMaterial) {
                                var s = t.overrideMaterial;
                                o.length && kt(o, t, e, s), a.length && kt(a, t, e, s)
                            } else o.length && kt(o, t, e), a.length && kt(a, t, e);
                            n && O.updateRenderTargetMipmap(n), L.buffers.depth.setTest(!0), L.buffers.depth.setMask(!0), L.buffers.color.setMask(!0), L.setPolygonOffset(!1), t.onAfterRender($, t, e), Ct.enabled && Ct.submitFrame(), T = null, E = null
                        }
                    } else console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.")
                }, this.allocTextureUnit = function() {
                    var t = ut;
                    return t >= P.maxTextures && console.warn("THREE.WebGLRenderer: Trying to use " + t + " texture units while this GPU supports only " + P.maxTextures), ut += 1, t
                }, this.setTexture2D = function() {
                    var t = !1;
                    return function(e, n) {
                        e && e.isWebGLRenderTarget && (t || (console.warn("THREE.WebGLRenderer.setTexture2D: don't use render targets as textures. Use their .texture property instead."), t = !0), e = e.texture), O.setTexture2D(e, n)
                    }
                }(), this.setTexture3D = function(t, e) {
                    O.setTexture3D(t, e)
                }, this.setTexture = function() {
                    var t = !1;
                    return function(e, n) {
                        t || (console.warn("THREE.WebGLRenderer: .setTexture is deprecated, use setTexture2D instead."), t = !0), O.setTexture2D(e, n)
                    }
                }(), this.setTextureCube = function() {
                    var t = !1;
                    return function(e, n) {
                        e && e.isWebGLRenderTargetCube && (t || (console.warn("THREE.WebGLRenderer.setTextureCube: don't use cube render targets as textures. Use their .texture property instead."), t = !0), e = e.texture), e && e.isCubeTexture || Array.isArray(e.image) && 6 === e.image.length ? O.setTextureCube(e, n) : O.setTextureCubeDynamic(e, n)
                    }
                }(), this.setFramebuffer = function(t) {
                    et = t
                }, this.getRenderTarget = function() {
                    return nt
                }, this.setRenderTarget = function(t) {
                    nt = t, t && void 0 === C.get(t).__webglFramebuffer && O.setupRenderTarget(t);
                    var e = et,
                        n = !1;
                    if (t) {
                        var i = C.get(t).__webglFramebuffer;
                        t.isWebGLRenderTargetCube ? (e = i[t.activeCubeFace], n = !0) : e = i, ct.copy(t.viewport), lt.copy(t.scissor), ht = t.scissorTest
                    } else ct.copy(vt).multiplyScalar(mt), lt.copy(gt).multiplyScalar(mt), ht = yt;
                    if (it !== e && (S.bindFramebuffer(S.FRAMEBUFFER, e), it = e), L.viewport(ct), L.scissor(lt), L.setScissorTest(ht), n) {
                        var r = C.get(t.texture);
                        S.framebufferTexture2D(S.FRAMEBUFFER, S.COLOR_ATTACHMENT0, S.TEXTURE_CUBE_MAP_POSITIVE_X + t.activeCubeFace, r.__webglTexture, t.activeMipMapLevel)
                    }
                }, this.readRenderTargetPixels = function(t, e, n, i, r, o) {
                    if (t && t.isWebGLRenderTarget) {
                        var a = C.get(t).__webglFramebuffer;
                        if (a) {
                            var s = !1;
                            a !== it && (S.bindFramebuffer(S.FRAMEBUFFER, a), s = !0);
                            try {
                                var c = t.texture,
                                    l = c.format,
                                    h = c.type;
                                if (l !== Pt && Q.convert(l) !== S.getParameter(S.IMPLEMENTATION_COLOR_READ_FORMAT)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
                                if (!(h === ft || Q.convert(h) === S.getParameter(S.IMPLEMENTATION_COLOR_READ_TYPE) || h === xt && (P.isWebGL2 || A.get("OES_texture_float") || A.get("WEBGL_color_buffer_float")) || h === bt && (P.isWebGL2 ? A.get("EXT_color_buffer_float") : A.get("EXT_color_buffer_half_float")))) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                                S.checkFramebufferStatus(S.FRAMEBUFFER) === S.FRAMEBUFFER_COMPLETE ? e >= 0 && e <= t.width - i && n >= 0 && n <= t.height - r && S.readPixels(e, n, i, r, Q.convert(l), Q.convert(h), o) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")
                            } finally {
                                s && S.bindFramebuffer(S.FRAMEBUFFER, it)
                            }
                        }
                    } else console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.")
                }, this.copyFramebufferToTexture = function(t, e, n) {
                    var i = e.image.width,
                        r = e.image.height,
                        o = Q.convert(e.format);
                    this.setTexture2D(e, 0), S.copyTexImage2D(S.TEXTURE_2D, n || 0, o, t.x, t.y, i, r, 0)
                }, this.copyTextureToTexture = function(t, e, n, i) {
                    var r = e.image.width,
                        o = e.image.height,
                        a = Q.convert(n.format),
                        s = Q.convert(n.type);
                    this.setTexture2D(n, 0), e.isDataTexture ? S.texSubImage2D(S.TEXTURE_2D, i || 0, t.x, t.y, r, o, a, s, e.image.data) : S.texSubImage2D(S.TEXTURE_2D, i || 0, t.x, t.y, a, s, e.image)
                }
            }

            function Xi(t, e) {
                this.name = "", this.color = new Ue(t), this.density = void 0 !== e ? e : 25e-5
            }

            function qi(t, e, n) {
                this.name = "", this.color = new Ue(t), this.near = void 0 !== e ? e : 1, this.far = void 0 !== n ? n : 1e3
            }

            function Yi() {
                Ze.call(this), this.type = "Scene", this.background = null, this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0
            }

            function Zi(t, e) {
                this.array = t, this.stride = e, this.count = void 0 !== t ? t.length / e : 0, this.dynamic = !1, this.updateRange = {
                    offset: 0,
                    count: -1
                }, this.version = 0
            }

            function Ji(t, e, n, i) {
                this.data = t, this.itemSize = e, this.offset = n, this.normalized = !0 === i
            }

            function Ki(t) {
                yn.call(this), this.type = "SpriteMaterial", this.color = new Ue(16777215), this.map = null, this.rotation = 0, this.sizeAttenuation = !0, this.lights = !1, this.transparent = !0, this.setValues(t)
            }

            function Qi(t) {
                if (Ze.call(this), this.type = "Sprite", void 0 === Ci) {
                    Ci = new pn;
                    var e = new Float32Array([-.5, -.5, 0, 0, 0, .5, -.5, 0, 1, 0, .5, .5, 0, 1, 1, -.5, .5, 0, 0, 1]),
                        n = new Zi(e, 5);
                    Ci.setIndex([0, 1, 2, 0, 2, 3]), Ci.addAttribute("position", new Ji(n, 3, 0, !1)), Ci.addAttribute("uv", new Ji(n, 2, 3, !1))
                }
                this.geometry = Ci, this.material = void 0 !== t ? t : new Ki, this.center = new be(.5, .5)
            }

            function $i() {
                Ze.call(this), this.type = "LOD", Object.defineProperties(this, {
                    levels: {
                        enumerable: !0,
                        value: []
                    }
                })
            }

            function tr(t, e) {
                if (t = t || [], this.bones = t.slice(0), this.boneMatrices = new Float32Array(16 * this.bones.length), void 0 === e) this.calculateInverses();
                else if (this.bones.length === e.length) this.boneInverses = e.slice(0);
                else {
                    console.warn("THREE.Skeleton boneInverses is the wrong length."), this.boneInverses = [];
                    for (var n = 0, i = this.bones.length; n < i; n++) this.boneInverses.push(new we)
                }
            }

            function er() {
                Ze.call(this), this.type = "Bone"
            }

            function nr(t, e) {
                Mn.call(this, t, e), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new we, this.bindMatrixInverse = new we;
                var n = this.initBones(),
                    i = new tr(n);
                this.bind(i, this.matrixWorld), this.normalizeSkinWeights()
            }

            function ir(t) {
                yn.call(this), this.type = "LineBasicMaterial", this.color = new Ue(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.lights = !1, this.setValues(t)
            }

            function rr(t, e, n) {
                1 === n && console.error("THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead."), Ze.call(this), this.type = "Line", this.geometry = void 0 !== t ? t : new pn, this.material = void 0 !== e ? e : new ir({
                    color: 16777215 * Math.random()
                })
            }

            function or(t, e) {
                rr.call(this, t, e), this.type = "LineSegments"
            }

            function ar(t, e) {
                rr.call(this, t, e), this.type = "LineLoop"
            }

            function sr(t) {
                yn.call(this), this.type = "PointsMaterial", this.color = new Ue(16777215), this.map = null, this.size = 1, this.sizeAttenuation = !0, this.morphTargets = !1, this.lights = !1, this.setValues(t)
            }

            function cr(t, e) {
                Ze.call(this), this.type = "Points", this.geometry = void 0 !== t ? t : new pn, this.material = void 0 !== e ? e : new sr({
                    color: 16777215 * Math.random()
                })
            }

            function lr(t, e, n, i, r, o, a, s, c) {
                Pe.call(this, t, e, n, i, r, o, a, s, c), this.generateMipmaps = !1
            }

            function hr(t, e, n, i, r, o, a, s, c, l, h, u) {
                Pe.call(this, null, o, a, s, c, l, i, r, h, u), this.image = {
                    width: e,
                    height: n
                }, this.mipmaps = t, this.flipY = !1, this.generateMipmaps = !1
            }

            function ur(t, e, n, i, r, o, a, s, c) {
                Pe.call(this, t, e, n, i, r, o, a, s, c), this.needsUpdate = !0
            }

            function pr(t, e, n, i, r, o, a, s, c, l) {
                if ((l = void 0 !== l ? l : Ot) !== Ot && l !== It) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
                void 0 === n && l === Ot && (n = gt), void 0 === n && l === It && (n = Et), Pe.call(this, null, i, r, o, a, s, l, n, c), this.image = {
                    width: t,
                    height: e
                }, this.magFilter = void 0 !== a ? a : ct, this.minFilter = void 0 !== s ? s : ct, this.flipY = !1, this.generateMipmaps = !1
            }

            function dr(t) {
                pn.call(this), this.type = "WireframeGeometry";
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
                    if (h = new Te, null !== t.index) {
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
                this.addAttribute("position", new sn(u, 3))
            }

            function fr(t, e, n) {
                Ke.call(this), this.type = "ParametricGeometry", this.parameters = {
                    func: t,
                    slices: e,
                    stacks: n
                }, this.fromBufferGeometry(new mr(t, e, n)), this.mergeVertices()
            }

            function mr(t, e, n) {
                pn.call(this), this.type = "ParametricBufferGeometry", this.parameters = {
                    func: t,
                    slices: e,
                    stacks: n
                };
                var i, r, o = [],
                    a = [],
                    s = [],
                    c = [],
                    l = new Te,
                    h = new Te,
                    u = new Te,
                    p = new Te,
                    d = new Te;
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
                this.setIndex(o), this.addAttribute("position", new sn(a, 3)), this.addAttribute("normal", new sn(s, 3)), this.addAttribute("uv", new sn(c, 2))
            }

            function vr(t, e, n, i) {
                Ke.call(this), this.type = "PolyhedronGeometry", this.parameters = {
                    vertices: t,
                    indices: e,
                    radius: n,
                    detail: i
                }, this.fromBufferGeometry(new gr(t, e, n, i)), this.mergeVertices()
            }

            function gr(t, e, n, i) {
                pn.call(this), this.type = "PolyhedronBufferGeometry", this.parameters = {
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
                    for (var n = new Te, i = new Te, r = new Te, o = 0; o < e.length; o += 3) c(e[o + 0], n), c(e[o + 1], i), c(e[o + 2], r), a(n, i, r, t)
                }(i = i || 0),
                function(t) {
                    for (var e = new Te, n = 0; n < r.length; n += 3) e.x = r[n + 0], e.y = r[n + 1], e.z = r[n + 2], e.normalize().multiplyScalar(t), r[n + 0] = e.x, r[n + 1] = e.y, r[n + 2] = e.z
                }(n),
                function() {
                    for (var t = new Te, e = 0; e < r.length; e += 3) {
                        t.x = r[e + 0], t.y = r[e + 1], t.z = r[e + 2];
                        var n = h(t) / 2 / Math.PI + .5,
                            i = u(t) / Math.PI + .5;
                        o.push(n, 1 - i)
                    }(function() {
                        for (var t = new Te, e = new Te, n = new Te, i = new Te, a = new be, s = new be, c = new be, u = 0, p = 0; u < r.length; u += 9, p += 6) {
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
                }(), this.addAttribute("position", new sn(r, 3)), this.addAttribute("normal", new sn(r.slice(), 3)), this.addAttribute("uv", new sn(o, 2)), 0 === i ? this.computeVertexNormals() : this.normalizeNormals()
            }

            function yr(t, e) {
                Ke.call(this), this.type = "TetrahedronGeometry", this.parameters = {
                    radius: t,
                    detail: e
                }, this.fromBufferGeometry(new _r(t, e)), this.mergeVertices()
            }

            function _r(t, e) {
                gr.call(this, [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], t, e), this.type = "TetrahedronBufferGeometry", this.parameters = {
                    radius: t,
                    detail: e
                }
            }

            function xr(t, e) {
                Ke.call(this), this.type = "OctahedronGeometry", this.parameters = {
                    radius: t,
                    detail: e
                }, this.fromBufferGeometry(new br(t, e)), this.mergeVertices()
            }

            function br(t, e) {
                gr.call(this, [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], t, e), this.type = "OctahedronBufferGeometry", this.parameters = {
                    radius: t,
                    detail: e
                }
            }

            function wr(t, e) {
                Ke.call(this), this.type = "IcosahedronGeometry", this.parameters = {
                    radius: t,
                    detail: e
                }, this.fromBufferGeometry(new Mr(t, e)), this.mergeVertices()
            }

            function Mr(t, e) {
                var n = (1 + Math.sqrt(5)) / 2,
                    i = [-1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, 0, 0, -1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, n, 0, -1, n, 0, 1, -n, 0, -1, -n, 0, 1];
                gr.call(this, i, [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], t, e), this.type = "IcosahedronBufferGeometry", this.parameters = {
                    radius: t,
                    detail: e
                }
            }

            function Tr(t, e) {
                Ke.call(this), this.type = "DodecahedronGeometry", this.parameters = {
                    radius: t,
                    detail: e
                }, this.fromBufferGeometry(new Er(t, e)), this.mergeVertices()
            }

            function Er(t, e) {
                var n = (1 + Math.sqrt(5)) / 2,
                    i = 1 / n,
                    r = [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -i, -n, 0, -i, n, 0, i, -n, 0, i, n, -i, -n, 0, -i, n, 0, i, -n, 0, i, n, 0, -n, 0, -i, n, 0, -i, -n, 0, i, n, 0, i];
                gr.call(this, r, [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9], t, e), this.type = "DodecahedronBufferGeometry", this.parameters = {
                    radius: t,
                    detail: e
                }
            }

            function Sr(t, e, n, i, r, o) {
                Ke.call(this), this.type = "TubeGeometry", this.parameters = {
                    path: t,
                    tubularSegments: e,
                    radius: n,
                    radialSegments: i,
                    closed: r
                }, void 0 !== o && console.warn("THREE.TubeGeometry: taper has been removed.");
                var a = new Ar(t, e, n, i, r);
                this.tangents = a.tangents, this.normals = a.normals, this.binormals = a.binormals, this.fromBufferGeometry(a), this.mergeVertices()
            }

            function Ar(t, e, n, i, r) {
                pn.call(this), this.type = "TubeBufferGeometry", this.parameters = {
                    path: t,
                    tubularSegments: e,
                    radius: n,
                    radialSegments: i,
                    closed: r
                }, e = e || 64, n = n || 1, i = i || 8, r = r || !1;
                var o = t.computeFrenetFrames(e, r);
                this.tangents = o.tangents, this.normals = o.normals, this.binormals = o.binormals;
                var a, s, c = new Te,
                    l = new Te,
                    h = new be,
                    u = new Te,
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
                }(), this.setIndex(m), this.addAttribute("position", new sn(p, 3)), this.addAttribute("normal", new sn(d, 3)), this.addAttribute("uv", new sn(f, 2))
            }

            function Pr(t, e, n, i, r, o, a) {
                Ke.call(this), this.type = "TorusKnotGeometry", this.parameters = {
                    radius: t,
                    tube: e,
                    tubularSegments: n,
                    radialSegments: i,
                    p: r,
                    q: o
                }, void 0 !== a && console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead."), this.fromBufferGeometry(new Lr(t, e, n, i, r, o)), this.mergeVertices()
            }

            function Lr(t, e, n, i, r, o) {
                pn.call(this), this.type = "TorusKnotBufferGeometry", this.parameters = {
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
                    p = new Te,
                    d = new Te,
                    f = new Te,
                    m = new Te,
                    v = new Te,
                    g = new Te,
                    y = new Te;
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
                this.setIndex(c), this.addAttribute("position", new sn(l, 3)), this.addAttribute("normal", new sn(h, 3)), this.addAttribute("uv", new sn(u, 2))
            }

            function Rr(t, e, n, i, r) {
                Ke.call(this), this.type = "TorusGeometry", this.parameters = {
                    radius: t,
                    tube: e,
                    radialSegments: n,
                    tubularSegments: i,
                    arc: r
                }, this.fromBufferGeometry(new Cr(t, e, n, i, r)), this.mergeVertices()
            }

            function Cr(t, e, n, i, r) {
                pn.call(this), this.type = "TorusBufferGeometry", this.parameters = {
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
                    u = new Te,
                    p = new Te,
                    d = new Te;
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
                this.setIndex(s), this.addAttribute("position", new sn(c, 3)), this.addAttribute("normal", new sn(l, 3)), this.addAttribute("uv", new sn(h, 2))
            }
            Ni.prototype = Object.create(yn.prototype), Ni.prototype.constructor = Ni, Ni.prototype.isMeshDepthMaterial = !0, Ni.prototype.copy = function(t) {
                return yn.prototype.copy.call(this, t), this.depthPacking = t.depthPacking, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this
            }, Bi.prototype = Object.create(yn.prototype), Bi.prototype.constructor = Bi, Bi.prototype.isMeshDistanceMaterial = !0, Bi.prototype.copy = function(t) {
                return yn.prototype.copy.call(this, t), this.referencePosition.copy(t.referencePosition), this.nearDistance = t.nearDistance, this.farDistance = t.farDistance, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this
            }, Ui.prototype = Object.assign(Object.create(Ze.prototype), {
                constructor: Ui,
                isGroup: !0
            }), zi.prototype = Object.assign(Object.create(Ze.prototype), {
                constructor: zi,
                isCamera: !0,
                copy: function(t, e) {
                    return Ze.prototype.copy.call(this, t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this.projectionMatrixInverse.copy(t.projectionMatrixInverse), this
                },
                getWorldDirection: function(t) {
                    void 0 === t && (console.warn("THREE.Camera: .getWorldDirection() target is now required"), t = new Te), this.updateMatrixWorld(!0);
                    var e = this.matrixWorld.elements;
                    return t.set(-e[8], -e[9], -e[10]).normalize()
                },
                updateMatrixWorld: function(t) {
                    Ze.prototype.updateMatrixWorld.call(this, t), this.matrixWorldInverse.getInverse(this.matrixWorld)
                },
                clone: function() {
                    return (new this.constructor).copy(this)
                }
            }), Gi.prototype = Object.assign(Object.create(zi.prototype), {
                constructor: Gi,
                isPerspectiveCamera: !0,
                copy: function(t, e) {
                    return zi.prototype.copy.call(this, t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = null === t.view ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this
                },
                setFocalLength: function(t) {
                    var e = .5 * this.getFilmHeight() / t;
                    this.fov = 2 * xe.RAD2DEG * Math.atan(e), this.updateProjectionMatrix()
                },
                getFocalLength: function() {
                    var t = Math.tan(.5 * xe.DEG2RAD * this.fov);
                    return .5 * this.getFilmHeight() / t
                },
                getEffectiveFOV: function() {
                    return 2 * xe.RAD2DEG * Math.atan(Math.tan(.5 * xe.DEG2RAD * this.fov) / this.zoom)
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
                        e = t * Math.tan(.5 * xe.DEG2RAD * this.fov) / this.zoom,
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
                    var e = Ze.prototype.toJSON.call(this, t);
                    return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, null !== this.view && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e
                }
            }), ji.prototype = Object.assign(Object.create(Gi.prototype), {
                constructor: ji,
                isArrayCamera: !0
            }), Xi.prototype.isFogExp2 = !0, Xi.prototype.clone = function() {
                return new Xi(this.color, this.density)
            }, Xi.prototype.toJSON = function() {
                return {
                    type: "FogExp2",
                    color: this.color.getHex(),
                    density: this.density
                }
            }, qi.prototype.isFog = !0, qi.prototype.clone = function() {
                return new qi(this.color, this.near, this.far)
            }, qi.prototype.toJSON = function() {
                return {
                    type: "Fog",
                    color: this.color.getHex(),
                    near: this.near,
                    far: this.far
                }
            }, Yi.prototype = Object.assign(Object.create(Ze.prototype), {
                constructor: Yi,
                copy: function(t, e) {
                    return Ze.prototype.copy.call(this, t, e), null !== t.background && (this.background = t.background.clone()), null !== t.fog && (this.fog = t.fog.clone()), null !== t.overrideMaterial && (this.overrideMaterial = t.overrideMaterial.clone()), this.autoUpdate = t.autoUpdate, this.matrixAutoUpdate = t.matrixAutoUpdate, this
                },
                toJSON: function(t) {
                    var e = Ze.prototype.toJSON.call(this, t);
                    return null !== this.background && (e.object.background = this.background.toJSON(t)), null !== this.fog && (e.object.fog = this.fog.toJSON()), e
                }
            }), Object.defineProperty(Zi.prototype, "needsUpdate", {
                set: function(t) {
                    !0 === t && this.version++
                }
            }), Object.assign(Zi.prototype, {
                isInterleavedBuffer: !0,
                onUploadCallback: function() {},
                setArray: function(t) {
                    if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
                    return this.count = void 0 !== t ? t.length / this.stride : 0, this.array = t, this
                },
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
            }), Object.defineProperties(Ji.prototype, {
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
            }), Object.assign(Ji.prototype, {
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
            }), Ki.prototype = Object.create(yn.prototype), Ki.prototype.constructor = Ki, Ki.prototype.isSpriteMaterial = !0, Ki.prototype.copy = function(t) {
                return yn.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.rotation = t.rotation, this.sizeAttenuation = t.sizeAttenuation, this
            }, Qi.prototype = Object.assign(Object.create(Ze.prototype), {
                constructor: Qi,
                isSprite: !0,
                raycast: function() {
                    var t = new Te,
                        e = new Te,
                        n = new Te,
                        i = new be,
                        r = new be,
                        o = new we,
                        a = new Te,
                        s = new Te,
                        c = new Te,
                        l = new be,
                        h = new be,
                        u = new be;

                    function p(t, e, n, a, s, c) {
                        i.subVectors(t, n).addScalar(.5).multiply(a), void 0 !== s ? (r.x = c * i.x - s * i.y, r.y = s * i.x + c * i.y) : r.copy(i), t.copy(e), t.x += r.x, t.y += r.y, t.applyMatrix4(o)
                    }
                    return function(i, r) {
                        e.setFromMatrixScale(this.matrixWorld), o.getInverse(this.modelViewMatrix).premultiply(this.matrixWorld), n.setFromMatrixPosition(this.modelViewMatrix);
                        var d, f, m = this.material.rotation;
                        0 !== m && (f = Math.cos(m), d = Math.sin(m));
                        var v = this.center;
                        p(a.set(-.5, -.5, 0), n, v, e, d, f), p(s.set(.5, -.5, 0), n, v, e, d, f), p(c.set(.5, .5, 0), n, v, e, d, f), l.set(0, 0), h.set(1, 0), u.set(1, 1);
                        var g = i.ray.intersectTriangle(a, s, c, !1, t);
                        if (null !== g || (p(s.set(-.5, .5, 0), n, v, e, d, f), h.set(0, 1), null !== (g = i.ray.intersectTriangle(a, c, s, !1, t)))) {
                            var y = i.ray.origin.distanceTo(t);
                            y < i.near || y > i.far || r.push({
                                distance: y,
                                point: t.clone(),
                                uv: bn.getUV(t, a, s, c, l, h, u, new be),
                                face: null,
                                object: this
                            })
                        }
                    }
                }(),
                clone: function() {
                    return new this.constructor(this.material).copy(this)
                },
                copy: function(t) {
                    return Ze.prototype.copy.call(this, t), void 0 !== t.center && this.center.copy(t.center), this
                }
            }), $i.prototype = Object.assign(Object.create(Ze.prototype), {
                constructor: $i,
                copy: function(t) {
                    Ze.prototype.copy.call(this, t, !1);
                    for (var e = t.levels, n = 0, i = e.length; n < i; n++) {
                        var r = e[n];
                        this.addLevel(r.object.clone(), r.distance)
                    }
                    return this
                },
                addLevel: function(t, e) {
                    void 0 === e && (e = 0), e = Math.abs(e);
                    for (var n = this.levels, i = 0; i < n.length && !(e < n[i].distance); i++);
                    n.splice(i, 0, {
                        distance: e,
                        object: t
                    }), this.add(t)
                },
                getObjectForDistance: function(t) {
                    for (var e = this.levels, n = 1, i = e.length; n < i && !(t < e[n].distance); n++);
                    return e[n - 1].object
                },
                raycast: function() {
                    var t = new Te;
                    return function(e, n) {
                        t.setFromMatrixPosition(this.matrixWorld);
                        var i = e.ray.origin.distanceTo(t);
                        this.getObjectForDistance(i).raycast(e, n)
                    }
                }(),
                update: function() {
                    var t = new Te,
                        e = new Te;
                    return function(n) {
                        var i = this.levels;
                        if (i.length > 1) {
                            t.setFromMatrixPosition(n.matrixWorld), e.setFromMatrixPosition(this.matrixWorld);
                            var r = t.distanceTo(e);
                            i[0].object.visible = !0;
                            for (var o = 1, a = i.length; o < a && r >= i[o].distance; o++) i[o - 1].object.visible = !1, i[o].object.visible = !0;
                            for (; o < a; o++) i[o].object.visible = !1
                        }
                    }
                }(),
                toJSON: function(t) {
                    var e = Ze.prototype.toJSON.call(this, t);
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
            }), Object.assign(tr.prototype, {
                calculateInverses: function() {
                    this.boneInverses = [];
                    for (var t = 0, e = this.bones.length; t < e; t++) {
                        var n = new we;
                        this.bones[t] && n.getInverse(this.bones[t].matrixWorld), this.boneInverses.push(n)
                    }
                },
                pose: function() {
                    var t, e, n;
                    for (e = 0, n = this.bones.length; e < n; e++)(t = this.bones[e]) && t.matrixWorld.getInverse(this.boneInverses[e]);
                    for (e = 0, n = this.bones.length; e < n; e++)(t = this.bones[e]) && (t.parent && t.parent.isBone ? (t.matrix.getInverse(t.parent.matrixWorld), t.matrix.multiply(t.matrixWorld)) : t.matrix.copy(t.matrixWorld), t.matrix.decompose(t.position, t.quaternion, t.scale))
                },
                update: function() {
                    var t = new we,
                        e = new we;
                    return function() {
                        for (var n = this.bones, i = this.boneInverses, r = this.boneMatrices, o = this.boneTexture, a = 0, s = n.length; a < s; a++) {
                            var c = n[a] ? n[a].matrixWorld : e;
                            t.multiplyMatrices(c, i[a]), t.toArray(r, 16 * a)
                        }
                        void 0 !== o && (o.needsUpdate = !0)
                    }
                }(),
                clone: function() {
                    return new tr(this.bones, this.boneInverses)
                },
                getBoneByName: function(t) {
                    for (var e = 0, n = this.bones.length; e < n; e++) {
                        var i = this.bones[e];
                        if (i.name === t) return i
                    }
                }
            }), er.prototype = Object.assign(Object.create(Ze.prototype), {
                constructor: er,
                isBone: !0
            }), nr.prototype = Object.assign(Object.create(Mn.prototype), {
                constructor: nr,
                isSkinnedMesh: !0,
                initBones: function() {
                    var t, e, n, i, r = [];
                    if (this.geometry && void 0 !== this.geometry.bones) {
                        for (n = 0, i = this.geometry.bones.length; n < i; n++) e = this.geometry.bones[n], t = new er, r.push(t), t.name = e.name, t.position.fromArray(e.pos), t.quaternion.fromArray(e.rotq), void 0 !== e.scl && t.scale.fromArray(e.scl);
                        for (n = 0, i = this.geometry.bones.length; n < i; n++) - 1 !== (e = this.geometry.bones[n]).parent && null !== e.parent && void 0 !== r[e.parent] ? r[e.parent].add(r[n]) : this.add(r[n])
                    }
                    return this.updateMatrixWorld(!0), r
                },
                bind: function(t, e) {
                    this.skeleton = t, void 0 === e && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), e = this.matrixWorld), this.bindMatrix.copy(e), this.bindMatrixInverse.getInverse(e)
                },
                pose: function() {
                    this.skeleton.pose()
                },
                normalizeSkinWeights: function() {
                    var t, e;
                    if (this.geometry && this.geometry.isGeometry)
                        for (e = 0; e < this.geometry.skinWeights.length; e++) {
                            var n = this.geometry.skinWeights[e];
                            (t = 1 / n.manhattanLength()) != 1 / 0 ? n.multiplyScalar(t) : n.set(1, 0, 0, 0)
                        } else if (this.geometry && this.geometry.isBufferGeometry) {
                            var i = new Le,
                                r = this.geometry.attributes.skinWeight;
                            for (e = 0; e < r.count; e++) i.x = r.getX(e), i.y = r.getY(e), i.z = r.getZ(e), i.w = r.getW(e), (t = 1 / i.manhattanLength()) != 1 / 0 ? i.multiplyScalar(t) : i.set(1, 0, 0, 0), r.setXYZW(e, i.x, i.y, i.z, i.w)
                        }
                },
                updateMatrixWorld: function(t) {
                    Mn.prototype.updateMatrixWorld.call(this, t), "attached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.matrixWorld) : "detached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.bindMatrix) : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode)
                },
                clone: function() {
                    return new this.constructor(this.geometry, this.material).copy(this)
                }
            }), ir.prototype = Object.create(yn.prototype), ir.prototype.constructor = ir, ir.prototype.isLineBasicMaterial = !0, ir.prototype.copy = function(t) {
                return yn.prototype.copy.call(this, t), this.color.copy(t.color), this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this
            }, rr.prototype = Object.assign(Object.create(Ze.prototype), {
                constructor: rr,
                isLine: !0,
                computeLineDistances: function() {
                    var t = new Te,
                        e = new Te;
                    return function() {
                        var n = this.geometry;
                        if (n.isBufferGeometry)
                            if (null === n.index) {
                                for (var i = n.attributes.position, r = [0], o = 1, a = i.count; o < a; o++) t.fromBufferAttribute(i, o - 1), e.fromBufferAttribute(i, o), r[o] = r[o - 1], r[o] += t.distanceTo(e);
                                n.addAttribute("lineDistance", new sn(r, 1))
                            } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
                        else if (n.isGeometry) {
                            var s = n.vertices,
                                r = n.lineDistances;
                            r[0] = 0;
                            for (var o = 1, a = s.length; o < a; o++) r[o] = r[o - 1], r[o] += s[o - 1].distanceTo(s[o])
                        }
                        return this
                    }
                }(),
                raycast: function() {
                    var t = new we,
                        e = new xn,
                        n = new De;
                    return function(i, r) {
                        var o = i.linePrecision,
                            a = this.geometry,
                            s = this.matrixWorld;
                        if (null === a.boundingSphere && a.computeBoundingSphere(), n.copy(a.boundingSphere), n.applyMatrix4(s), n.radius += o, !1 !== i.ray.intersectsSphere(n)) {
                            t.getInverse(s), e.copy(i.ray).applyMatrix4(t);
                            var c = o / ((this.scale.x + this.scale.y + this.scale.z) / 3),
                                l = c * c,
                                h = new Te,
                                u = new Te,
                                p = new Te,
                                d = new Te,
                                f = this && this.isLineSegments ? 2 : 1;
                            if (a.isBufferGeometry) {
                                var m = a.index,
                                    v = a.attributes,
                                    g = v.position.array;
                                if (null !== m)
                                    for (var y = m.array, _ = 0, x = y.length - 1; _ < x; _ += f) {
                                        var b = y[_],
                                            w = y[_ + 1];
                                        h.fromArray(g, 3 * b), u.fromArray(g, 3 * w);
                                        var M = e.distanceSqToSegment(h, u, d, p);
                                        if (!(M > l)) {
                                            d.applyMatrix4(this.matrixWorld);
                                            var T = i.ray.origin.distanceTo(d);
                                            T < i.near || T > i.far || r.push({
                                                distance: T,
                                                point: p.clone().applyMatrix4(this.matrixWorld),
                                                index: _,
                                                face: null,
                                                faceIndex: null,
                                                object: this
                                            })
                                        }
                                    } else
                                        for (var _ = 0, x = g.length / 3 - 1; _ < x; _ += f) {
                                            h.fromArray(g, 3 * _), u.fromArray(g, 3 * _ + 3);
                                            var M = e.distanceSqToSegment(h, u, d, p);
                                            if (!(M > l)) {
                                                d.applyMatrix4(this.matrixWorld);
                                                var T = i.ray.origin.distanceTo(d);
                                                T < i.near || T > i.far || r.push({
                                                    distance: T,
                                                    point: p.clone().applyMatrix4(this.matrixWorld),
                                                    index: _,
                                                    face: null,
                                                    faceIndex: null,
                                                    object: this
                                                })
                                            }
                                        }
                            } else if (a.isGeometry)
                                for (var E = a.vertices, S = E.length, _ = 0; _ < S - 1; _ += f) {
                                    var M = e.distanceSqToSegment(E[_], E[_ + 1], d, p);
                                    if (!(M > l)) {
                                        d.applyMatrix4(this.matrixWorld);
                                        var T = i.ray.origin.distanceTo(d);
                                        T < i.near || T > i.far || r.push({
                                            distance: T,
                                            point: p.clone().applyMatrix4(this.matrixWorld),
                                            index: _,
                                            face: null,
                                            faceIndex: null,
                                            object: this
                                        })
                                    }
                                }
                        }
                    }
                }(),
                clone: function() {
                    return new this.constructor(this.geometry, this.material).copy(this)
                }
            }), or.prototype = Object.assign(Object.create(rr.prototype), {
                constructor: or,
                isLineSegments: !0,
                computeLineDistances: function() {
                    var t = new Te,
                        e = new Te;
                    return function() {
                        var n = this.geometry;
                        if (n.isBufferGeometry)
                            if (null === n.index) {
                                for (var i = n.attributes.position, r = [], o = 0, a = i.count; o < a; o += 2) t.fromBufferAttribute(i, o), e.fromBufferAttribute(i, o + 1), r[o] = 0 === o ? 0 : r[o - 1], r[o + 1] = r[o] + t.distanceTo(e);
                                n.addAttribute("lineDistance", new sn(r, 1))
                            } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
                        else if (n.isGeometry)
                            for (var s = n.vertices, r = n.lineDistances, o = 0, a = s.length; o < a; o += 2) t.copy(s[o]), e.copy(s[o + 1]), r[o] = 0 === o ? 0 : r[o - 1], r[o + 1] = r[o] + t.distanceTo(e);
                        return this
                    }
                }()
            }), ar.prototype = Object.assign(Object.create(rr.prototype), {
                constructor: ar,
                isLineLoop: !0
            }), sr.prototype = Object.create(yn.prototype), sr.prototype.constructor = sr, sr.prototype.isPointsMaterial = !0, sr.prototype.copy = function(t) {
                return yn.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.size = t.size, this.sizeAttenuation = t.sizeAttenuation, this.morphTargets = t.morphTargets, this
            }, cr.prototype = Object.assign(Object.create(Ze.prototype), {
                constructor: cr,
                isPoints: !0,
                raycast: function() {
                    var t = new we,
                        e = new xn,
                        n = new De;
                    return function(i, r) {
                        var o = this,
                            a = this.geometry,
                            s = this.matrixWorld,
                            c = i.params.Points.threshold;
                        if (null === a.boundingSphere && a.computeBoundingSphere(), n.copy(a.boundingSphere), n.applyMatrix4(s), n.radius += c, !1 !== i.ray.intersectsSphere(n)) {
                            t.getInverse(s), e.copy(i.ray).applyMatrix4(t);
                            var l = c / ((this.scale.x + this.scale.y + this.scale.z) / 3),
                                h = l * l,
                                u = new Te,
                                p = new Te;
                            if (a.isBufferGeometry) {
                                var d = a.index,
                                    f = a.attributes,
                                    m = f.position.array;
                                if (null !== d)
                                    for (var v = d.array, g = 0, y = v.length; g < y; g++) {
                                        var _ = v[g];
                                        u.fromArray(m, 3 * _), w(u, _)
                                    } else
                                        for (var g = 0, x = m.length / 3; g < x; g++) u.fromArray(m, 3 * g), w(u, g)
                            } else
                                for (var b = a.vertices, g = 0, x = b.length; g < x; g++) w(b[g], g)
                        }

                        function w(t, n) {
                            var a = e.distanceSqToPoint(t);
                            if (a < h) {
                                e.closestPointToPoint(t, p), p.applyMatrix4(s);
                                var c = i.ray.origin.distanceTo(p);
                                if (c < i.near || c > i.far) return;
                                r.push({
                                    distance: c,
                                    distanceToRay: Math.sqrt(a),
                                    point: p.clone(),
                                    index: n,
                                    face: null,
                                    object: o
                                })
                            }
                        }
                    }
                }(),
                clone: function() {
                    return new this.constructor(this.geometry, this.material).copy(this)
                }
            }), lr.prototype = Object.assign(Object.create(Pe.prototype), {
                constructor: lr,
                isVideoTexture: !0,
                update: function() {
                    var t = this.image;
                    t.readyState >= t.HAVE_CURRENT_DATA && (this.needsUpdate = !0)
                }
            }), hr.prototype = Object.create(Pe.prototype), hr.prototype.constructor = hr, hr.prototype.isCompressedTexture = !0, ur.prototype = Object.create(Pe.prototype), ur.prototype.constructor = ur, ur.prototype.isCanvasTexture = !0, pr.prototype = Object.create(Pe.prototype), pr.prototype.constructor = pr, pr.prototype.isDepthTexture = !0, dr.prototype = Object.create(pn.prototype), dr.prototype.constructor = dr, fr.prototype = Object.create(Ke.prototype), fr.prototype.constructor = fr, mr.prototype = Object.create(pn.prototype), mr.prototype.constructor = mr, vr.prototype = Object.create(Ke.prototype), vr.prototype.constructor = vr, gr.prototype = Object.create(pn.prototype), gr.prototype.constructor = gr, yr.prototype = Object.create(Ke.prototype), yr.prototype.constructor = yr, _r.prototype = Object.create(gr.prototype), _r.prototype.constructor = _r, xr.prototype = Object.create(Ke.prototype), xr.prototype.constructor = xr, br.prototype = Object.create(gr.prototype), br.prototype.constructor = br, wr.prototype = Object.create(Ke.prototype), wr.prototype.constructor = wr, Mr.prototype = Object.create(gr.prototype), Mr.prototype.constructor = Mr, Tr.prototype = Object.create(Ke.prototype), Tr.prototype.constructor = Tr, Er.prototype = Object.create(gr.prototype), Er.prototype.constructor = Er, Sr.prototype = Object.create(Ke.prototype), Sr.prototype.constructor = Sr, Ar.prototype = Object.create(pn.prototype), Ar.prototype.constructor = Ar, Pr.prototype = Object.create(Ke.prototype), Pr.prototype.constructor = Pr, Lr.prototype = Object.create(pn.prototype), Lr.prototype.constructor = Lr, Rr.prototype = Object.create(Ke.prototype), Rr.prototype.constructor = Rr, Cr.prototype = Object.create(pn.prototype), Cr.prototype.constructor = Cr;
            var Or = {
                triangulate: function(t, e, n) {
                    n = n || 2;
                    var i, r, o, a, s, c, l, h = e && e.length,
                        u = h ? e[0] * n : t.length,
                        p = Ir(t, 0, u, n, !0),
                        d = [];
                    if (!p) return d;
                    if (h && (p = function(t, e, n, i) {
                            var r, o, a, s, c, l = [];
                            for (r = 0, o = e.length; r < o; r++) a = e[r] * i, s = r < o - 1 ? e[r + 1] * i : t.length, (c = Ir(t, a, s, i, !1)) === c.next && (c.steiner = !0), l.push(jr(c));
                            for (l.sort(Ur), r = 0; r < l.length; r++) zr(l[r], n), n = Dr(n, n.next);
                            return n
                        }(t, e, p, n)), t.length > 80 * n) {
                        i = o = t[0], r = a = t[1];
                        for (var f = n; f < u; f += n) s = t[f], c = t[f + 1], s < i && (i = s), c < r && (r = c), s > o && (o = s), c > a && (a = c);
                        l = 0 !== (l = Math.max(o - i, a - r)) ? 1 / l : 0
                    }
                    return Nr(p, d, n, i, r, l), d
                }
            };

            function Ir(t, e, n, i, r) {
                var o, a;
                if (r === function(t, e, n, i) {
                        for (var r = 0, o = e, a = n - i; o < n; o += i) r += (t[a] - t[o]) * (t[o + 1] + t[a + 1]), a = o;
                        return r
                    }(t, e, n, i) > 0)
                    for (o = e; o < n; o += i) a = Kr(o, t[o], t[o + 1], a);
                else
                    for (o = n - i; o >= e; o -= i) a = Kr(o, t[o], t[o + 1], a);
                return a && qr(a, a.next) && (Qr(a), a = a.next), a
            }

            function Dr(t, e) {
                if (!t) return t;
                e || (e = t);
                var n, i = t;
                do {
                    if (n = !1, i.steiner || !qr(i, i.next) && 0 !== Xr(i.prev, i, i.next)) i = i.next;
                    else {
                        if (Qr(i), (i = e = i.prev) === i.next) break;
                        n = !0
                    }
                } while (n || i !== e);
                return e
            }

            function Nr(t, e, n, i, r, o, a) {
                if (t) {
                    !a && o && function(t, e, n, i) {
                        var r = t;
                        do {
                            null === r.z && (r.z = Gr(r.x, r.y, e, n, i)), r.prevZ = r.prev, r.nextZ = r.next, r = r.next
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
                        if (s = t.prev, c = t.next, o ? Hr(t, i, r, o) : Br(t)) e.push(s.i / n), e.push(t.i / n), e.push(c.i / n), Qr(t), t = c.next, l = c.next;
                        else if ((t = c) === l) {
                        a ? 1 === a ? Nr(t = Fr(t, e, n), e, n, i, r, o, 2) : 2 === a && kr(t, e, n, i, r, o) : Nr(Dr(t), e, n, i, r, o, 1);
                        break
                    }
                }
            }

            function Br(t) {
                var e = t.prev,
                    n = t,
                    i = t.next;
                if (Xr(e, n, i) >= 0) return !1;
                for (var r = t.next.next; r !== t.prev;) {
                    if (Vr(e.x, e.y, n.x, n.y, i.x, i.y, r.x, r.y) && Xr(r.prev, r, r.next) >= 0) return !1;
                    r = r.next
                }
                return !0
            }

            function Hr(t, e, n, i) {
                var r = t.prev,
                    o = t,
                    a = t.next;
                if (Xr(r, o, a) >= 0) return !1;
                for (var s = r.x < o.x ? r.x < a.x ? r.x : a.x : o.x < a.x ? o.x : a.x, c = r.y < o.y ? r.y < a.y ? r.y : a.y : o.y < a.y ? o.y : a.y, l = r.x > o.x ? r.x > a.x ? r.x : a.x : o.x > a.x ? o.x : a.x, h = r.y > o.y ? r.y > a.y ? r.y : a.y : o.y > a.y ? o.y : a.y, u = Gr(s, c, e, n, i), p = Gr(l, h, e, n, i), d = t.nextZ; d && d.z <= p;) {
                    if (d !== t.prev && d !== t.next && Vr(r.x, r.y, o.x, o.y, a.x, a.y, d.x, d.y) && Xr(d.prev, d, d.next) >= 0) return !1;
                    d = d.nextZ
                }
                for (d = t.prevZ; d && d.z >= u;) {
                    if (d !== t.prev && d !== t.next && Vr(r.x, r.y, o.x, o.y, a.x, a.y, d.x, d.y) && Xr(d.prev, d, d.next) >= 0) return !1;
                    d = d.prevZ
                }
                return !0
            }

            function Fr(t, e, n) {
                var i = t;
                do {
                    var r = i.prev,
                        o = i.next.next;
                    !qr(r, o) && Yr(r, i, i.next, o) && Zr(r, o) && Zr(o, r) && (e.push(r.i / n), e.push(i.i / n), e.push(o.i / n), Qr(i), Qr(i.next), i = t = o), i = i.next
                } while (i !== t);
                return i
            }

            function kr(t, e, n, i, r, o) {
                var a = t;
                do {
                    for (var s = a.next.next; s !== a.prev;) {
                        if (a.i !== s.i && Wr(a, s)) {
                            var c = Jr(a, s);
                            return a = Dr(a, a.next), c = Dr(c, c.next), Nr(a, e, n, i, r, o), void Nr(c, e, n, i, r, o)
                        }
                        s = s.next
                    }
                    a = a.next
                } while (a !== t)
            }

            function Ur(t, e) {
                return t.x - e.x
            }

            function zr(t, e) {
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
                        for (i = n.next; i !== l;) r >= i.x && i.x >= h && r !== i.x && Vr(o < u ? r : a, o, h, u, o < u ? a : r, o, i.x, i.y) && ((c = Math.abs(o - i.y) / (r - i.x)) < p || c === p && i.x > n.x) && Zr(i, t) && (n = i, p = c), i = i.next;
                        return n
                    }(t, e)) {
                    var n = Jr(e, t);
                    Dr(n, n.next)
                }
            }

            function Gr(t, e, n, i, r) {
                return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - n) * r) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - i) * r) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1
            }

            function jr(t) {
                var e = t,
                    n = t;
                do {
                    e.x < n.x && (n = e), e = e.next
                } while (e !== t);
                return n
            }

            function Vr(t, e, n, i, r, o, a, s) {
                return (r - a) * (e - s) - (t - a) * (o - s) >= 0 && (t - a) * (i - s) - (n - a) * (e - s) >= 0 && (n - a) * (o - s) - (r - a) * (i - s) >= 0
            }

            function Wr(t, e) {
                return t.next.i !== e.i && t.prev.i !== e.i && ! function(t, e) {
                    var n = t;
                    do {
                        if (n.i !== t.i && n.next.i !== t.i && n.i !== e.i && n.next.i !== e.i && Yr(n, n.next, t, e)) return !0;
                        n = n.next
                    } while (n !== t);
                    return !1
                }(t, e) && Zr(t, e) && Zr(e, t) && function(t, e) {
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

            function Xr(t, e, n) {
                return (e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y)
            }

            function qr(t, e) {
                return t.x === e.x && t.y === e.y
            }

            function Yr(t, e, n, i) {
                return !!(qr(t, e) && qr(n, i) || qr(t, i) && qr(n, e)) || Xr(t, e, n) > 0 != Xr(t, e, i) > 0 && Xr(n, i, t) > 0 != Xr(n, i, e) > 0
            }

            function Zr(t, e) {
                return Xr(t.prev, t, t.next) < 0 ? Xr(t, e, t.next) >= 0 && Xr(t, t.prev, e) >= 0 : Xr(t, e, t.prev) < 0 || Xr(t, t.next, e) < 0
            }

            function Jr(t, e) {
                var n = new $r(t.i, t.x, t.y),
                    i = new $r(e.i, e.x, e.y),
                    r = t.next,
                    o = e.prev;
                return t.next = e, e.prev = t, n.next = r, r.prev = n, i.next = n, n.prev = i, o.next = i, i.prev = o, i
            }

            function Kr(t, e, n, i) {
                var r = new $r(t, e, n);
                return i ? (r.next = i.next, r.prev = i, i.next.prev = r, i.next = r) : (r.prev = r, r.next = r), r
            }

            function Qr(t) {
                t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), t.nextZ && (t.nextZ.prevZ = t.prevZ)
            }

            function $r(t, e, n) {
                this.i = t, this.x = e, this.y = n, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
            }
            var to = {
                area: function(t) {
                    for (var e = t.length, n = 0, i = e - 1, r = 0; r < e; i = r++) n += t[i].x * t[r].y - t[r].x * t[i].y;
                    return .5 * n
                },
                isClockWise: function(t) {
                    return to.area(t) < 0
                },
                triangulateShape: function(t, e) {
                    var n = [],
                        i = [],
                        r = [];
                    eo(t), no(n, t);
                    var o = t.length;
                    e.forEach(eo);
                    for (var a = 0; a < e.length; a++) i.push(o), o += e[a].length, no(n, e[a]);
                    for (var s = Or.triangulate(n, i), a = 0; a < s.length; a += 3) r.push(s.slice(a, a + 3));
                    return r
                }
            };

            function eo(t) {
                var e = t.length;
                e > 2 && t[e - 1].equals(t[0]) && t.pop()
            }

            function no(t, e) {
                for (var n = 0; n < e.length; n++) t.push(e[n].x), t.push(e[n].y)
            }

            function io(t, e) {
                Ke.call(this), this.type = "ExtrudeGeometry", this.parameters = {
                    shapes: t,
                    options: e
                }, this.fromBufferGeometry(new ro(t, e)), this.mergeVertices()
            }

            function ro(t, e) {
                pn.call(this), this.type = "ExtrudeBufferGeometry", this.parameters = {
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
                        p = void 0 !== e.bevelSegments ? e.bevelSegments : 3,
                        d = e.extrudePath,
                        f = void 0 !== e.UVGenerator ? e.UVGenerator : oo;
                    void 0 !== e.amount && (console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."), c = e.amount);
                    var m, v, g, y, _, x, b, w, M = !1;
                    d && (m = d.getSpacedPoints(s), M = !0, l = !1, v = d.computeFrenetFrames(s, !1), g = new Te, y = new Te, _ = new Te), l || (p = 0, h = 0, u = 0);
                    var T = t.extractPoints(a),
                        E = T.shape,
                        S = T.holes,
                        A = !to.isClockWise(E);
                    if (A)
                        for (E = E.reverse(), b = 0, w = S.length; b < w; b++) x = S[b], to.isClockWise(x) && (S[b] = x.reverse());
                    var P = to.triangulateShape(E, S),
                        L = E;
                    for (b = 0, w = S.length; b < w; b++) x = S[b], E = E.concat(x);

                    function R(t, e, n) {
                        return e || console.error("THREE.ExtrudeGeometry: vec does not exist"), e.clone().multiplyScalar(n).add(t)
                    }
                    var C, O, I, D, N, B, H = E.length,
                        F = P.length;

                    function k(t, e, n) {
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
                            if (_ <= 2) return new be(i, r);
                            o = Math.sqrt(_ / 2)
                        } else {
                            var x = !1;
                            a > Number.EPSILON ? c > Number.EPSILON && (x = !0) : a < -Number.EPSILON ? c < -Number.EPSILON && (x = !0) : Math.sign(s) === Math.sign(l) && (x = !0), x ? (i = -s, r = a, o = Math.sqrt(h)) : (i = a, r = s, o = Math.sqrt(h / 2))
                        }
                        return new be(i / o, r / o)
                    }
                    for (var U = [], z = 0, G = L.length, j = G - 1, V = z + 1; z < G; z++, j++, V++) j === G && (j = 0), V === G && (V = 0), U[z] = k(L[z], L[j], L[V]);
                    var W, X, q = [],
                        Y = U.concat();
                    for (b = 0, w = S.length; b < w; b++) {
                        for (x = S[b], W = [], z = 0, G = x.length, j = G - 1, V = z + 1; z < G; z++, j++, V++) j === G && (j = 0), V === G && (V = 0), W[z] = k(x[z], x[j], x[V]);
                        q.push(W), Y = Y.concat(W)
                    }
                    for (C = 0; C < p; C++) {
                        for (I = C / p, D = h * Math.cos(I * Math.PI / 2), O = u * Math.sin(I * Math.PI / 2), z = 0, G = L.length; z < G; z++) J((N = R(L[z], U[z], O)).x, N.y, -D);
                        for (b = 0, w = S.length; b < w; b++)
                            for (x = S[b], W = q[b], z = 0, G = x.length; z < G; z++) J((N = R(x[z], W[z], O)).x, N.y, -D)
                    }
                    for (O = u, z = 0; z < H; z++) N = l ? R(E[z], Y[z], O) : E[z], M ? (y.copy(v.normals[0]).multiplyScalar(N.x), g.copy(v.binormals[0]).multiplyScalar(N.y), _.copy(m[0]).add(y).add(g), J(_.x, _.y, _.z)) : J(N.x, N.y, 0);
                    for (X = 1; X <= s; X++)
                        for (z = 0; z < H; z++) N = l ? R(E[z], Y[z], O) : E[z], M ? (y.copy(v.normals[X]).multiplyScalar(N.x), g.copy(v.binormals[X]).multiplyScalar(N.y), _.copy(m[X]).add(y).add(g), J(_.x, _.y, _.z)) : J(N.x, N.y, c / s * X);
                    for (C = p - 1; C >= 0; C--) {
                        for (I = C / p, D = h * Math.cos(I * Math.PI / 2), O = u * Math.sin(I * Math.PI / 2), z = 0, G = L.length; z < G; z++) J((N = R(L[z], U[z], O)).x, N.y, c + D);
                        for (b = 0, w = S.length; b < w; b++)
                            for (x = S[b], W = q[b], z = 0, G = x.length; z < G; z++) N = R(x[z], W[z], O), M ? J(N.x, N.y + m[s - 1].y, m[s - 1].x + D) : J(N.x, N.y, c + D)
                    }

                    function Z(t, e) {
                        var n, i;
                        for (z = t.length; --z >= 0;) {
                            n = z, (i = z - 1) < 0 && (i = t.length - 1);
                            var r = 0,
                                o = s + 2 * p;
                            for (r = 0; r < o; r++) {
                                var a = H * r,
                                    c = H * (r + 1),
                                    l = e + n + a,
                                    h = e + i + a,
                                    u = e + i + c,
                                    d = e + n + c;
                                Q(l, h, u, d)
                            }
                        }
                    }

                    function J(t, e, n) {
                        o.push(t), o.push(e), o.push(n)
                    }

                    function K(t, e, r) {
                        $(t), $(e), $(r);
                        var o = i.length / 3,
                            a = f.generateTopUV(n, i, o - 3, o - 2, o - 1);
                        tt(a[0]), tt(a[1]), tt(a[2])
                    }

                    function Q(t, e, r, o) {
                        $(t), $(e), $(o), $(e), $(r), $(o);
                        var a = i.length / 3,
                            s = f.generateSideWallUV(n, i, a - 6, a - 3, a - 2, a - 1);
                        tt(s[0]), tt(s[1]), tt(s[3]), tt(s[1]), tt(s[2]), tt(s[3])
                    }

                    function $(t) {
                        i.push(o[3 * t + 0]), i.push(o[3 * t + 1]), i.push(o[3 * t + 2])
                    }

                    function tt(t) {
                        r.push(t.x), r.push(t.y)
                    }! function() {
                        var t = i.length / 3;
                        if (l) {
                            var e = 0,
                                r = H * e;
                            for (z = 0; z < F; z++) K((B = P[z])[2] + r, B[1] + r, B[0] + r);
                            for (r = H * (e = s + 2 * p), z = 0; z < F; z++) K((B = P[z])[0] + r, B[1] + r, B[2] + r)
                        } else {
                            for (z = 0; z < F; z++) K((B = P[z])[2], B[1], B[0]);
                            for (z = 0; z < F; z++) K((B = P[z])[0] + H * s, B[1] + H * s, B[2] + H * s)
                        }
                        n.addGroup(t, i.length / 3 - t, 0)
                    }(),
                    function() {
                        var t = i.length / 3,
                            e = 0;
                        for (Z(L, e), e += L.length, b = 0, w = S.length; b < w; b++) Z(x = S[b], e), e += x.length;
                        n.addGroup(t, i.length / 3 - t, 1)
                    }()
                }
                this.addAttribute("position", new sn(i, 3)), this.addAttribute("uv", new sn(r, 2)), this.computeVertexNormals()
            }
            io.prototype = Object.create(Ke.prototype), io.prototype.constructor = io, io.prototype.toJSON = function() {
                var t = Ke.prototype.toJSON.call(this),
                    e = this.parameters.shapes,
                    n = this.parameters.options;
                return ao(e, n, t)
            }, ro.prototype = Object.create(pn.prototype), ro.prototype.constructor = ro, ro.prototype.toJSON = function() {
                var t = pn.prototype.toJSON.call(this),
                    e = this.parameters.shapes,
                    n = this.parameters.options;
                return ao(e, n, t)
            };
            var oo = {
                generateTopUV: function(t, e, n, i, r) {
                    var o = e[3 * n],
                        a = e[3 * n + 1],
                        s = e[3 * i],
                        c = e[3 * i + 1],
                        l = e[3 * r],
                        h = e[3 * r + 1];
                    return [new be(o, a), new be(s, c), new be(l, h)]
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
                    return Math.abs(s - h) < .01 ? [new be(a, 1 - c), new be(l, 1 - u), new be(p, 1 - f), new be(m, 1 - g)] : [new be(s, 1 - c), new be(h, 1 - u), new be(d, 1 - f), new be(v, 1 - g)]
                }
            };

            function ao(t, e, n) {
                if (n.shapes = [], Array.isArray(t))
                    for (var i = 0, r = t.length; i < r; i++) {
                        var o = t[i];
                        n.shapes.push(o.uuid)
                    } else n.shapes.push(t.uuid);
                return void 0 !== e.extrudePath && (n.options.extrudePath = e.extrudePath.toJSON()), n
            }

            function so(t, e) {
                Ke.call(this), this.type = "TextGeometry", this.parameters = {
                    text: t,
                    parameters: e
                }, this.fromBufferGeometry(new co(t, e)), this.mergeVertices()
            }

            function co(t, e) {
                var n = (e = e || {}).font;
                if (!n || !n.isFont) return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."), new Ke;
                var i = n.generateShapes(t, e.size);
                e.depth = void 0 !== e.height ? e.height : 50, void 0 === e.bevelThickness && (e.bevelThickness = 10), void 0 === e.bevelSize && (e.bevelSize = 8), void 0 === e.bevelEnabled && (e.bevelEnabled = !1), ro.call(this, i, e), this.type = "TextBufferGeometry"
            }

            function lo(t, e, n, i, r, o, a) {
                Ke.call(this), this.type = "SphereGeometry", this.parameters = {
                    radius: t,
                    widthSegments: e,
                    heightSegments: n,
                    phiStart: i,
                    phiLength: r,
                    thetaStart: o,
                    thetaLength: a
                }, this.fromBufferGeometry(new ho(t, e, n, i, r, o, a)), this.mergeVertices()
            }

            function ho(t, e, n, i, r, o, a) {
                pn.call(this), this.type = "SphereBufferGeometry", this.parameters = {
                    radius: t,
                    widthSegments: e,
                    heightSegments: n,
                    phiStart: i,
                    phiLength: r,
                    thetaStart: o,
                    thetaLength: a
                }, t = t || 1, e = Math.max(3, Math.floor(e) || 8), n = Math.max(2, Math.floor(n) || 6), i = void 0 !== i ? i : 0, r = void 0 !== r ? r : 2 * Math.PI, o = void 0 !== o ? o : 0, a = void 0 !== a ? a : Math.PI;
                var s, c, l = o + a,
                    h = 0,
                    u = [],
                    p = new Te,
                    d = new Te,
                    f = [],
                    m = [],
                    v = [],
                    g = [];
                for (c = 0; c <= n; c++) {
                    var y = [],
                        _ = c / n;
                    for (s = 0; s <= e; s++) {
                        var x = s / e;
                        p.x = -t * Math.cos(i + x * r) * Math.sin(o + _ * a), p.y = t * Math.cos(o + _ * a), p.z = t * Math.sin(i + x * r) * Math.sin(o + _ * a), m.push(p.x, p.y, p.z), d.set(p.x, p.y, p.z).normalize(), v.push(d.x, d.y, d.z), g.push(x, 1 - _), y.push(h++)
                    }
                    u.push(y)
                }
                for (c = 0; c < n; c++)
                    for (s = 0; s < e; s++) {
                        var b = u[c][s + 1],
                            w = u[c][s],
                            M = u[c + 1][s],
                            T = u[c + 1][s + 1];
                        (0 !== c || o > 0) && f.push(b, w, T), (c !== n - 1 || l < Math.PI) && f.push(w, M, T)
                    }
                this.setIndex(f), this.addAttribute("position", new sn(m, 3)), this.addAttribute("normal", new sn(v, 3)), this.addAttribute("uv", new sn(g, 2))
            }

            function uo(t, e, n, i, r, o) {
                Ke.call(this), this.type = "RingGeometry", this.parameters = {
                    innerRadius: t,
                    outerRadius: e,
                    thetaSegments: n,
                    phiSegments: i,
                    thetaStart: r,
                    thetaLength: o
                }, this.fromBufferGeometry(new po(t, e, n, i, r, o)), this.mergeVertices()
            }

            function po(t, e, n, i, r, o) {
                pn.call(this), this.type = "RingBufferGeometry", this.parameters = {
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
                    m = new Te,
                    v = new be;
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
                this.setIndex(l), this.addAttribute("position", new sn(h, 3)), this.addAttribute("normal", new sn(u, 3)), this.addAttribute("uv", new sn(p, 2))
            }

            function fo(t, e, n, i) {
                Ke.call(this), this.type = "LatheGeometry", this.parameters = {
                    points: t,
                    segments: e,
                    phiStart: n,
                    phiLength: i
                }, this.fromBufferGeometry(new mo(t, e, n, i)), this.mergeVertices()
            }

            function mo(t, e, n, i) {
                pn.call(this), this.type = "LatheBufferGeometry", this.parameters = {
                    points: t,
                    segments: e,
                    phiStart: n,
                    phiLength: i
                }, e = Math.floor(e) || 12, n = n || 0, i = i || 2 * Math.PI, i = xe.clamp(i, 0, 2 * Math.PI);
                var r, o, a, s = [],
                    c = [],
                    l = [],
                    h = 1 / e,
                    u = new Te,
                    p = new be;
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
                if (this.setIndex(s), this.addAttribute("position", new sn(c, 3)), this.addAttribute("uv", new sn(l, 2)), this.computeVertexNormals(), i === 2 * Math.PI) {
                    var x = this.attributes.normal.array,
                        b = new Te,
                        w = new Te,
                        M = new Te;
                    for (r = e * t.length * 3, o = 0, a = 0; o < t.length; o++, a += 3) b.x = x[a + 0], b.y = x[a + 1], b.z = x[a + 2], w.x = x[r + a + 0], w.y = x[r + a + 1], w.z = x[r + a + 2], M.addVectors(b, w).normalize(), x[a + 0] = x[r + a + 0] = M.x, x[a + 1] = x[r + a + 1] = M.y, x[a + 2] = x[r + a + 2] = M.z
                }
            }

            function vo(t, e) {
                Ke.call(this), this.type = "ShapeGeometry", "object" == typeof e && (console.warn("THREE.ShapeGeometry: Options parameter has been removed."), e = e.curveSegments), this.parameters = {
                    shapes: t,
                    curveSegments: e
                }, this.fromBufferGeometry(new go(t, e)), this.mergeVertices()
            }

            function go(t, e) {
                pn.call(this), this.type = "ShapeBufferGeometry", this.parameters = {
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
                    if (!1 === to.isClockWise(p))
                        for (p = p.reverse(), a = 0, c = d.length; a < c; a++) l = d[a], !0 === to.isClockWise(l) && (d[a] = l.reverse());
                    var f = to.triangulateShape(p, d);
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
                this.setIndex(n), this.addAttribute("position", new sn(i, 3)), this.addAttribute("normal", new sn(r, 3)), this.addAttribute("uv", new sn(o, 2))
            }

            function yo(t, e) {
                if (e.shapes = [], Array.isArray(t))
                    for (var n = 0, i = t.length; n < i; n++) {
                        var r = t[n];
                        e.shapes.push(r.uuid)
                    } else e.shapes.push(t.uuid);
                return e
            }

            function _o(t, e) {
                pn.call(this), this.type = "EdgesGeometry", this.parameters = {
                    thresholdAngle: e
                }, e = void 0 !== e ? e : 1;
                var n, i, r, o, a = [],
                    s = Math.cos(xe.DEG2RAD * e),
                    c = [0, 0],
                    l = {},
                    h = ["a", "b", "c"];
                t.isBufferGeometry ? (o = new Ke).fromBufferGeometry(t) : o = t.clone(), o.mergeVertices(), o.computeFaceNormals();
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
                this.addAttribute("position", new sn(a, 3))
            }

            function xo(t, e, n, i, r, o, a, s) {
                Ke.call(this), this.type = "CylinderGeometry", this.parameters = {
                    radiusTop: t,
                    radiusBottom: e,
                    height: n,
                    radialSegments: i,
                    heightSegments: r,
                    openEnded: o,
                    thetaStart: a,
                    thetaLength: s
                }, this.fromBufferGeometry(new bo(t, e, n, i, r, o, a, s)), this.mergeVertices()
            }

            function bo(t, e, n, i, r, o, a, s) {
                pn.call(this), this.type = "CylinderBufferGeometry", this.parameters = {
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
                    var r, o, f, g = new be,
                        y = new Te,
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
                    var o, g, y = new Te,
                        _ = new Te,
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
                }(), !1 === o && (t > 0 && g(!0), e > 0 && g(!1)), this.setIndex(l), this.addAttribute("position", new sn(h, 3)), this.addAttribute("normal", new sn(u, 3)), this.addAttribute("uv", new sn(p, 2))
            }

            function wo(t, e, n, i, r, o, a) {
                xo.call(this, 0, t, e, n, i, r, o, a), this.type = "ConeGeometry", this.parameters = {
                    radius: t,
                    height: e,
                    radialSegments: n,
                    heightSegments: i,
                    openEnded: r,
                    thetaStart: o,
                    thetaLength: a
                }
            }

            function Mo(t, e, n, i, r, o, a) {
                bo.call(this, 0, t, e, n, i, r, o, a), this.type = "ConeBufferGeometry", this.parameters = {
                    radius: t,
                    height: e,
                    radialSegments: n,
                    heightSegments: i,
                    openEnded: r,
                    thetaStart: o,
                    thetaLength: a
                }
            }

            function To(t, e, n, i) {
                Ke.call(this), this.type = "CircleGeometry", this.parameters = {
                    radius: t,
                    segments: e,
                    thetaStart: n,
                    thetaLength: i
                }, this.fromBufferGeometry(new Eo(t, e, n, i)), this.mergeVertices()
            }

            function Eo(t, e, n, i) {
                pn.call(this), this.type = "CircleBufferGeometry", this.parameters = {
                    radius: t,
                    segments: e,
                    thetaStart: n,
                    thetaLength: i
                }, t = t || 1, e = void 0 !== e ? Math.max(3, e) : 8, n = void 0 !== n ? n : 0, i = void 0 !== i ? i : 2 * Math.PI;
                var r, o, a = [],
                    s = [],
                    c = [],
                    l = [],
                    h = new Te,
                    u = new be;
                for (s.push(0, 0, 0), c.push(0, 0, 1), l.push(.5, .5), o = 0, r = 3; o <= e; o++, r += 3) {
                    var p = n + o / e * i;
                    h.x = t * Math.cos(p), h.y = t * Math.sin(p), s.push(h.x, h.y, h.z), c.push(0, 0, 1), u.x = (s[r] / t + 1) / 2, u.y = (s[r + 1] / t + 1) / 2, l.push(u.x, u.y)
                }
                for (r = 1; r <= e; r++) a.push(r, r + 1, 0);
                this.setIndex(a), this.addAttribute("position", new sn(s, 3)), this.addAttribute("normal", new sn(c, 3)), this.addAttribute("uv", new sn(l, 2))
            }
            so.prototype = Object.create(Ke.prototype), so.prototype.constructor = so, co.prototype = Object.create(ro.prototype), co.prototype.constructor = co, lo.prototype = Object.create(Ke.prototype), lo.prototype.constructor = lo, ho.prototype = Object.create(pn.prototype), ho.prototype.constructor = ho, uo.prototype = Object.create(Ke.prototype), uo.prototype.constructor = uo, po.prototype = Object.create(pn.prototype), po.prototype.constructor = po, fo.prototype = Object.create(Ke.prototype), fo.prototype.constructor = fo, mo.prototype = Object.create(pn.prototype), mo.prototype.constructor = mo, vo.prototype = Object.create(Ke.prototype), vo.prototype.constructor = vo, vo.prototype.toJSON = function() {
                var t = Ke.prototype.toJSON.call(this),
                    e = this.parameters.shapes;
                return yo(e, t)
            }, go.prototype = Object.create(pn.prototype), go.prototype.constructor = go, go.prototype.toJSON = function() {
                var t = pn.prototype.toJSON.call(this),
                    e = this.parameters.shapes;
                return yo(e, t)
            }, _o.prototype = Object.create(pn.prototype), _o.prototype.constructor = _o, xo.prototype = Object.create(Ke.prototype), xo.prototype.constructor = xo, bo.prototype = Object.create(pn.prototype), bo.prototype.constructor = bo, wo.prototype = Object.create(xo.prototype), wo.prototype.constructor = wo, Mo.prototype = Object.create(bo.prototype), Mo.prototype.constructor = Mo, To.prototype = Object.create(Ke.prototype), To.prototype.constructor = To, Eo.prototype = Object.create(pn.prototype), Eo.prototype.constructor = Eo;
            var So = Object.freeze({
                WireframeGeometry: dr,
                ParametricGeometry: fr,
                ParametricBufferGeometry: mr,
                TetrahedronGeometry: yr,
                TetrahedronBufferGeometry: _r,
                OctahedronGeometry: xr,
                OctahedronBufferGeometry: br,
                IcosahedronGeometry: wr,
                IcosahedronBufferGeometry: Mr,
                DodecahedronGeometry: Tr,
                DodecahedronBufferGeometry: Er,
                PolyhedronGeometry: vr,
                PolyhedronBufferGeometry: gr,
                TubeGeometry: Sr,
                TubeBufferGeometry: Ar,
                TorusKnotGeometry: Pr,
                TorusKnotBufferGeometry: Lr,
                TorusGeometry: Rr,
                TorusBufferGeometry: Cr,
                TextGeometry: so,
                TextBufferGeometry: co,
                SphereGeometry: lo,
                SphereBufferGeometry: ho,
                RingGeometry: uo,
                RingBufferGeometry: po,
                PlaneGeometry: mn,
                PlaneBufferGeometry: vn,
                LatheGeometry: fo,
                LatheBufferGeometry: mo,
                ShapeGeometry: vo,
                ShapeBufferGeometry: go,
                ExtrudeGeometry: io,
                ExtrudeBufferGeometry: ro,
                EdgesGeometry: _o,
                ConeGeometry: wo,
                ConeBufferGeometry: Mo,
                CylinderGeometry: xo,
                CylinderBufferGeometry: bo,
                CircleGeometry: To,
                CircleBufferGeometry: Eo,
                BoxGeometry: dn,
                BoxBufferGeometry: fn
            });

            function Ao(t) {
                yn.call(this), this.type = "ShadowMaterial", this.color = new Ue(0), this.transparent = !0, this.setValues(t)
            }

            function Po(t) {
                _n.call(this, t), this.type = "RawShaderMaterial"
            }

            function Lo(t) {
                yn.call(this), this.defines = {
                    STANDARD: ""
                }, this.type = "MeshStandardMaterial", this.color = new Ue(16777215), this.roughness = .5, this.metalness = .5, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Ue(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ye, this.normalScale = new be(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
            }

            function Ro(t) {
                Lo.call(this), this.defines = {
                    PHYSICAL: ""
                }, this.type = "MeshPhysicalMaterial", this.reflectivity = .5, this.clearCoat = 0, this.clearCoatRoughness = 0, this.setValues(t)
            }

            function Co(t) {
                yn.call(this), this.type = "MeshPhongMaterial", this.color = new Ue(16777215), this.specular = new Ue(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Ue(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ye, this.normalScale = new be(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = V, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
            }

            function Oo(t) {
                Co.call(this), this.defines = {
                    TOON: ""
                }, this.type = "MeshToonMaterial", this.gradientMap = null, this.setValues(t)
            }

            function Io(t) {
                yn.call(this), this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ye, this.normalScale = new be(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
            }

            function Do(t) {
                yn.call(this), this.type = "MeshLambertMaterial", this.color = new Ue(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Ue(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = V, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
            }

            function No(t) {
                if (yn.call(this), this.defines = {
                        MATCAP: ""
                    }, this.type = "MeshMatcapMaterial", this.color = new Ue(16777215), this.matcap = null, this.map = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ye, this.normalScale = new be(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.lights = !1, this.setValues(t), null === this.matcap) {
                    var e = document.createElement("canvas");
                    e.width = 1, e.height = 1;
                    var n = e.getContext("2d");
                    n.fillStyle = "#fff", n.fillRect(0, 0, 1, 1), this.matcap = new THREE.CanvasTexture(e)
                }
            }

            function Bo(t) {
                ir.call(this), this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(t)
            }
            Ao.prototype = Object.create(yn.prototype), Ao.prototype.constructor = Ao, Ao.prototype.isShadowMaterial = !0, Ao.prototype.copy = function(t) {
                return yn.prototype.copy.call(this, t), this.color.copy(t.color), this
            }, Po.prototype = Object.create(_n.prototype), Po.prototype.constructor = Po, Po.prototype.isRawShaderMaterial = !0, Lo.prototype = Object.create(yn.prototype), Lo.prototype.constructor = Lo, Lo.prototype.isMeshStandardMaterial = !0, Lo.prototype.copy = function(t) {
                return yn.prototype.copy.call(this, t), this.defines = {
                    STANDARD: ""
                }, this.color.copy(t.color), this.roughness = t.roughness, this.metalness = t.metalness, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.roughnessMap = t.roughnessMap, this.metalnessMap = t.metalnessMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapIntensity = t.envMapIntensity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
            }, Ro.prototype = Object.create(Lo.prototype), Ro.prototype.constructor = Ro, Ro.prototype.isMeshPhysicalMaterial = !0, Ro.prototype.copy = function(t) {
                return Lo.prototype.copy.call(this, t), this.defines = {
                    PHYSICAL: ""
                }, this.reflectivity = t.reflectivity, this.clearCoat = t.clearCoat, this.clearCoatRoughness = t.clearCoatRoughness, this
            }, Co.prototype = Object.create(yn.prototype), Co.prototype.constructor = Co, Co.prototype.isMeshPhongMaterial = !0, Co.prototype.copy = function(t) {
                return yn.prototype.copy.call(this, t), this.color.copy(t.color), this.specular.copy(t.specular), this.shininess = t.shininess, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
            }, Oo.prototype = Object.create(Co.prototype), Oo.prototype.constructor = Oo, Oo.prototype.isMeshToonMaterial = !0, Oo.prototype.copy = function(t) {
                return Co.prototype.copy.call(this, t), this.gradientMap = t.gradientMap, this
            }, Io.prototype = Object.create(yn.prototype), Io.prototype.constructor = Io, Io.prototype.isMeshNormalMaterial = !0, Io.prototype.copy = function(t) {
                return yn.prototype.copy.call(this, t), this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
            }, Do.prototype = Object.create(yn.prototype), Do.prototype.constructor = Do, Do.prototype.isMeshLambertMaterial = !0, Do.prototype.copy = function(t) {
                return yn.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
            }, No.prototype = Object.create(yn.prototype), No.prototype.constructor = No, No.prototype.isMeshMatcapMaterial = !0, No.prototype.copy = function(t) {
                return yn.prototype.copy.call(this, t), this.defines = {
                    MATCAP: ""
                }, this.color.copy(t.color), this.matcap = t.matcap, this.map = t.map, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.alphaMap = t.alphaMap, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
            }, Bo.prototype = Object.create(ir.prototype), Bo.prototype.constructor = Bo, Bo.prototype.isLineDashedMaterial = !0, Bo.prototype.copy = function(t) {
                return ir.prototype.copy.call(this, t), this.scale = t.scale, this.dashSize = t.dashSize, this.gapSize = t.gapSize, this
            };
            var Ho = Object.freeze({
                    ShadowMaterial: Ao,
                    SpriteMaterial: Ki,
                    RawShaderMaterial: Po,
                    ShaderMaterial: _n,
                    PointsMaterial: sr,
                    MeshPhysicalMaterial: Ro,
                    MeshStandardMaterial: Lo,
                    MeshPhongMaterial: Co,
                    MeshToonMaterial: Oo,
                    MeshNormalMaterial: Io,
                    MeshLambertMaterial: Do,
                    MeshDepthMaterial: Ni,
                    MeshDistanceMaterial: Bi,
                    MeshBasicMaterial: wn,
                    MeshMatcapMaterial: No,
                    LineDashedMaterial: Bo,
                    LineBasicMaterial: ir,
                    Material: yn
                }),
                Fo = {
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

            function ko(t, e, n) {
                var i = this,
                    r = !1,
                    o = 0,
                    a = 0,
                    s = void 0;
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
                }
            }
            var Uo = new ko,
                zo = {};

            function Go(t) {
                this.manager = void 0 !== t ? t : Uo
            }

            function jo(t) {
                this.manager = void 0 !== t ? t : Uo, this._parser = null
            }

            function Vo(t) {
                this.manager = void 0 !== t ? t : Uo, this._parser = null
            }

            function Wo(t) {
                this.manager = void 0 !== t ? t : Uo
            }

            function Xo(t) {
                this.manager = void 0 !== t ? t : Uo
            }

            function qo(t) {
                this.manager = void 0 !== t ? t : Uo
            }

            function Yo() {
                this.type = "Curve", this.arcLengthDivisions = 200
            }

            function Zo(t, e, n, i, r, o, a, s) {
                Yo.call(this), this.type = "EllipseCurve", this.aX = t || 0, this.aY = e || 0, this.xRadius = n || 1, this.yRadius = i || 1, this.aStartAngle = r || 0, this.aEndAngle = o || 2 * Math.PI, this.aClockwise = a || !1, this.aRotation = s || 0
            }

            function Jo(t, e, n, i, r, o) {
                Zo.call(this, t, e, n, n, i, r, o), this.type = "ArcCurve"
            }

            function Ko() {
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
            Object.assign(Go.prototype, {
                load: function(t, e, n, i) {
                    void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
                    var r = this,
                        o = Fo.get(t);
                    if (void 0 !== o) return r.manager.itemStart(t), setTimeout(function() {
                        e && e(o), r.manager.itemEnd(t)
                    }, 0), o;
                    if (void 0 === zo[t]) {
                        var a = t.match(/^data:(.*?)(;base64)?,(.*)$/);
                        if (a) {
                            var s = a[1],
                                c = !!a[2],
                                l = a[3];
                            l = window.decodeURIComponent(l), c && (l = window.atob(l));
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
                                window.setTimeout(function() {
                                    e && e(h), r.manager.itemEnd(t)
                                }, 0)
                            } catch (e) {
                                window.setTimeout(function() {
                                    i && i(e), r.manager.itemEnd(t), r.manager.itemError(t)
                                }, 0)
                            }
                        } else {
                            zo[t] = [], zo[t].push({
                                onLoad: e,
                                onProgress: n,
                                onError: i
                            });
                            var m = new XMLHttpRequest;
                            for (var v in m.open("GET", t, !0), m.addEventListener("load", function(e) {
                                    var n = this.response;
                                    Fo.add(t, n);
                                    var i = zo[t];
                                    if (delete zo[t], 200 === this.status || 0 === this.status) {
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
                                        r.manager.itemEnd(t), r.manager.itemError(t)
                                    }
                                }, !1), m.addEventListener("progress", function(e) {
                                    for (var n = zo[t], i = 0, r = n.length; i < r; i++) {
                                        var o = n[i];
                                        o.onProgress && o.onProgress(e)
                                    }
                                }, !1), m.addEventListener("error", function(e) {
                                    var n = zo[t];
                                    delete zo[t];
                                    for (var i = 0, o = n.length; i < o; i++) {
                                        var a = n[i];
                                        a.onError && a.onError(e)
                                    }
                                    r.manager.itemEnd(t), r.manager.itemError(t)
                                }, !1), m.addEventListener("abort", function(e) {
                                    var n = zo[t];
                                    delete zo[t];
                                    for (var i = 0, o = n.length; i < o; i++) {
                                        var a = n[i];
                                        a.onError && a.onError(e)
                                    }
                                    r.manager.itemEnd(t), r.manager.itemError(t)
                                }, !1), void 0 !== this.responseType && (m.responseType = this.responseType), void 0 !== this.withCredentials && (m.withCredentials = this.withCredentials), m.overrideMimeType && m.overrideMimeType(void 0 !== this.mimeType ? this.mimeType : "text/plain"), this.requestHeader) m.setRequestHeader(v, this.requestHeader[v]);
                            m.send(null)
                        }
                        return r.manager.itemStart(t), m
                    }
                    zo[t].push({
                        onLoad: e,
                        onProgress: n,
                        onError: i
                    })
                },
                setPath: function(t) {
                    return this.path = t, this
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
            }), Object.assign(jo.prototype, {
                load: function(t, e, n, i) {
                    var r = this,
                        o = [],
                        a = new hr;
                    a.image = o;
                    var s = new Go(this.manager);

                    function c(c) {
                        s.load(t[c], function(t) {
                            var n = r._parser(t, !0);
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
                        var n = r._parser(t, !0);
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
                },
                setPath: function(t) {
                    return this.path = t, this
                }
            }), Object.assign(Vo.prototype, {
                load: function(t, e, n, i) {
                    var r = this,
                        o = new Oe,
                        a = new Go(this.manager);
                    return a.setResponseType("arraybuffer"), a.load(t, function(t) {
                        var n = r._parser(t);
                        n && (void 0 !== n.image ? o.image = n.image : void 0 !== n.data && (o.image.width = n.width, o.image.height = n.height, o.image.data = n.data), o.wrapS = void 0 !== n.wrapS ? n.wrapS : at, o.wrapT = void 0 !== n.wrapT ? n.wrapT : at, o.magFilter = void 0 !== n.magFilter ? n.magFilter : ut, o.minFilter = void 0 !== n.minFilter ? n.minFilter : dt, o.anisotropy = void 0 !== n.anisotropy ? n.anisotropy : 1, void 0 !== n.format && (o.format = n.format), void 0 !== n.type && (o.type = n.type), void 0 !== n.mipmaps && (o.mipmaps = n.mipmaps), 1 === n.mipmapCount && (o.minFilter = ut), o.needsUpdate = !0, e && e(o, n))
                    }, n, i), o
                }
            }), Object.assign(Wo.prototype, {
                crossOrigin: "anonymous",
                load: function(t, e, n, i) {
                    void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
                    var r = this,
                        o = Fo.get(t);
                    if (void 0 !== o) return r.manager.itemStart(t), setTimeout(function() {
                        e && e(o), r.manager.itemEnd(t)
                    }, 0), o;
                    var a = document.createElementNS("http://www.w3.org/1999/xhtml", "img");

                    function s() {
                        a.removeEventListener("load", s, !1), a.removeEventListener("error", c, !1), Fo.add(t, this), e && e(this), r.manager.itemEnd(t)
                    }

                    function c(e) {
                        a.removeEventListener("load", s, !1), a.removeEventListener("error", c, !1), i && i(e), r.manager.itemEnd(t), r.manager.itemError(t)
                    }
                    return a.addEventListener("load", s, !1), a.addEventListener("error", c, !1), "data:" !== t.substr(0, 5) && void 0 !== this.crossOrigin && (a.crossOrigin = this.crossOrigin), r.manager.itemStart(t), a.src = t, a
                },
                setCrossOrigin: function(t) {
                    return this.crossOrigin = t, this
                },
                setPath: function(t) {
                    return this.path = t, this
                }
            }), Object.assign(Xo.prototype, {
                crossOrigin: "anonymous",
                load: function(t, e, n, i) {
                    var r = new En,
                        o = new Wo(this.manager);
                    o.setCrossOrigin(this.crossOrigin), o.setPath(this.path);
                    var a = 0;

                    function s(n) {
                        o.load(t[n], function(t) {
                            r.images[n] = t, 6 == ++a && (r.needsUpdate = !0, e && e(r))
                        }, void 0, i)
                    }
                    for (var c = 0; c < t.length; ++c) s(c);
                    return r
                },
                setCrossOrigin: function(t) {
                    return this.crossOrigin = t, this
                },
                setPath: function(t) {
                    return this.path = t, this
                }
            }), Object.assign(qo.prototype, {
                crossOrigin: "anonymous",
                load: function(t, e, n, i) {
                    var r = new Pe,
                        o = new Wo(this.manager);
                    return o.setCrossOrigin(this.crossOrigin), o.setPath(this.path), o.load(t, function(n) {
                        r.image = n;
                        var i = t.search(/\.jpe?g$/i) > 0 || 0 === t.search(/^data\:image\/jpeg/);
                        r.format = i ? At : Pt, r.needsUpdate = !0, void 0 !== e && e(r)
                    }, n, i), r
                },
                setCrossOrigin: function(t) {
                    return this.crossOrigin = t, this
                },
                setPath: function(t) {
                    return this.path = t, this
                }
            }), Object.assign(Yo.prototype, {
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
                    var n, i, r, o = new Te,
                        a = [],
                        s = [],
                        c = [],
                        l = new Te,
                        h = new we;
                    for (n = 0; n <= t; n++) i = n / t, a[n] = this.getTangentAt(i), a[n].normalize();
                    s[0] = new Te, c[0] = new Te;
                    var u = Number.MAX_VALUE,
                        p = Math.abs(a[0].x),
                        d = Math.abs(a[0].y),
                        f = Math.abs(a[0].z);
                    for (p <= u && (u = p, o.set(1, 0, 0)), d <= u && (u = d, o.set(0, 1, 0)), f <= u && o.set(0, 0, 1), l.crossVectors(a[0], o).normalize(), s[0].crossVectors(a[0], l), c[0].crossVectors(a[0], s[0]), n = 1; n <= t; n++) s[n] = s[n - 1].clone(), c[n] = c[n - 1].clone(), l.crossVectors(a[n - 1], a[n]), l.length() > Number.EPSILON && (l.normalize(), r = Math.acos(xe.clamp(a[n - 1].dot(a[n]), -1, 1)), s[n].applyMatrix4(h.makeRotationAxis(l, r))), c[n].crossVectors(a[n], s[n]);
                    if (!0 === e)
                        for (r = Math.acos(xe.clamp(s[0].dot(s[t]), -1, 1)), r /= t, a[0].dot(l.crossVectors(s[0], s[t])) > 0 && (r = -r), n = 1; n <= t; n++) s[n].applyMatrix4(h.makeRotationAxis(a[n], r * n)), c[n].crossVectors(a[n], s[n]);
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
            }), Zo.prototype = Object.create(Yo.prototype), Zo.prototype.constructor = Zo, Zo.prototype.isEllipseCurve = !0, Zo.prototype.getPoint = function(t, e) {
                for (var n = e || new be, i = 2 * Math.PI, r = this.aEndAngle - this.aStartAngle, o = Math.abs(r) < Number.EPSILON; r < 0;) r += i;
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
            }, Zo.prototype.copy = function(t) {
                return Yo.prototype.copy.call(this, t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this
            }, Zo.prototype.toJSON = function() {
                var t = Yo.prototype.toJSON.call(this);
                return t.aX = this.aX, t.aY = this.aY, t.xRadius = this.xRadius, t.yRadius = this.yRadius, t.aStartAngle = this.aStartAngle, t.aEndAngle = this.aEndAngle, t.aClockwise = this.aClockwise, t.aRotation = this.aRotation, t
            }, Zo.prototype.fromJSON = function(t) {
                return Yo.prototype.fromJSON.call(this, t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this
            }, Jo.prototype = Object.create(Zo.prototype), Jo.prototype.constructor = Jo, Jo.prototype.isArcCurve = !0;
            var Qo = new Te,
                $o = new Ko,
                ta = new Ko,
                ea = new Ko;

            function na(t, e, n, i) {
                Yo.call(this), this.type = "CatmullRomCurve3", this.points = t || [], this.closed = e || !1, this.curveType = n || "centripetal", this.tension = i || .5
            }

            function ia(t, e, n, i, r) {
                var o = .5 * (i - e),
                    a = .5 * (r - n),
                    s = t * t,
                    c = t * s;
                return (2 * n - 2 * i + o + a) * c + (-3 * n + 3 * i - 2 * o - a) * s + o * t + n
            }

            function ra(t, e, n, i) {
                return function(t, e) {
                    var n = 1 - t;
                    return n * n * e
                }(t, e) + function(t, e) {
                    return 2 * (1 - t) * t * e
                }(t, n) + function(t, e) {
                    return t * t * e
                }(t, i)
            }

            function oa(t, e, n, i, r) {
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

            function aa(t, e, n, i) {
                Yo.call(this), this.type = "CubicBezierCurve", this.v0 = t || new be, this.v1 = e || new be, this.v2 = n || new be, this.v3 = i || new be
            }

            function sa(t, e, n, i) {
                Yo.call(this), this.type = "CubicBezierCurve3", this.v0 = t || new Te, this.v1 = e || new Te, this.v2 = n || new Te, this.v3 = i || new Te
            }

            function ca(t, e) {
                Yo.call(this), this.type = "LineCurve", this.v1 = t || new be, this.v2 = e || new be
            }

            function la(t, e) {
                Yo.call(this), this.type = "LineCurve3", this.v1 = t || new Te, this.v2 = e || new Te
            }

            function ha(t, e, n) {
                Yo.call(this), this.type = "QuadraticBezierCurve", this.v0 = t || new be, this.v1 = e || new be, this.v2 = n || new be
            }

            function ua(t, e, n) {
                Yo.call(this), this.type = "QuadraticBezierCurve3", this.v0 = t || new Te, this.v1 = e || new Te, this.v2 = n || new Te
            }

            function pa(t) {
                Yo.call(this), this.type = "SplineCurve", this.points = t || []
            }
            na.prototype = Object.create(Yo.prototype), na.prototype.constructor = na, na.prototype.isCatmullRomCurve3 = !0, na.prototype.getPoint = function(t, e) {
                var n, i, r, o, a = e || new Te,
                    s = this.points,
                    c = s.length,
                    l = (c - (this.closed ? 0 : 1)) * t,
                    h = Math.floor(l),
                    u = l - h;
                if (this.closed ? h += h > 0 ? 0 : (Math.floor(Math.abs(h) / c) + 1) * c : 0 === u && h === c - 1 && (h = c - 2, u = 1), this.closed || h > 0 ? n = s[(h - 1) % c] : (Qo.subVectors(s[0], s[1]).add(s[0]), n = Qo), i = s[h % c], r = s[(h + 1) % c], this.closed || h + 2 < c ? o = s[(h + 2) % c] : (Qo.subVectors(s[c - 1], s[c - 2]).add(s[c - 1]), o = Qo), "centripetal" === this.curveType || "chordal" === this.curveType) {
                    var p = "chordal" === this.curveType ? .5 : .25,
                        d = Math.pow(n.distanceToSquared(i), p),
                        f = Math.pow(i.distanceToSquared(r), p),
                        m = Math.pow(r.distanceToSquared(o), p);
                    f < 1e-4 && (f = 1), d < 1e-4 && (d = f), m < 1e-4 && (m = f), $o.initNonuniformCatmullRom(n.x, i.x, r.x, o.x, d, f, m), ta.initNonuniformCatmullRom(n.y, i.y, r.y, o.y, d, f, m), ea.initNonuniformCatmullRom(n.z, i.z, r.z, o.z, d, f, m)
                } else "catmullrom" === this.curveType && ($o.initCatmullRom(n.x, i.x, r.x, o.x, this.tension), ta.initCatmullRom(n.y, i.y, r.y, o.y, this.tension), ea.initCatmullRom(n.z, i.z, r.z, o.z, this.tension));
                return a.set($o.calc(u), ta.calc(u), ea.calc(u)), a
            }, na.prototype.copy = function(t) {
                Yo.prototype.copy.call(this, t), this.points = [];
                for (var e = 0, n = t.points.length; e < n; e++) {
                    var i = t.points[e];
                    this.points.push(i.clone())
                }
                return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this
            }, na.prototype.toJSON = function() {
                var t = Yo.prototype.toJSON.call(this);
                t.points = [];
                for (var e = 0, n = this.points.length; e < n; e++) {
                    var i = this.points[e];
                    t.points.push(i.toArray())
                }
                return t.closed = this.closed, t.curveType = this.curveType, t.tension = this.tension, t
            }, na.prototype.fromJSON = function(t) {
                Yo.prototype.fromJSON.call(this, t), this.points = [];
                for (var e = 0, n = t.points.length; e < n; e++) {
                    var i = t.points[e];
                    this.points.push((new Te).fromArray(i))
                }
                return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this
            }, aa.prototype = Object.create(Yo.prototype), aa.prototype.constructor = aa, aa.prototype.isCubicBezierCurve = !0, aa.prototype.getPoint = function(t, e) {
                var n = e || new be,
                    i = this.v0,
                    r = this.v1,
                    o = this.v2,
                    a = this.v3;
                return n.set(oa(t, i.x, r.x, o.x, a.x), oa(t, i.y, r.y, o.y, a.y)), n
            }, aa.prototype.copy = function(t) {
                return Yo.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this
            }, aa.prototype.toJSON = function() {
                var t = Yo.prototype.toJSON.call(this);
                return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t
            }, aa.prototype.fromJSON = function(t) {
                return Yo.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this
            }, sa.prototype = Object.create(Yo.prototype), sa.prototype.constructor = sa, sa.prototype.isCubicBezierCurve3 = !0, sa.prototype.getPoint = function(t, e) {
                var n = e || new Te,
                    i = this.v0,
                    r = this.v1,
                    o = this.v2,
                    a = this.v3;
                return n.set(oa(t, i.x, r.x, o.x, a.x), oa(t, i.y, r.y, o.y, a.y), oa(t, i.z, r.z, o.z, a.z)), n
            }, sa.prototype.copy = function(t) {
                return Yo.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this
            }, sa.prototype.toJSON = function() {
                var t = Yo.prototype.toJSON.call(this);
                return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t
            }, sa.prototype.fromJSON = function(t) {
                return Yo.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this
            }, ca.prototype = Object.create(Yo.prototype), ca.prototype.constructor = ca, ca.prototype.isLineCurve = !0, ca.prototype.getPoint = function(t, e) {
                var n = e || new be;
                return 1 === t ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)), n
            }, ca.prototype.getPointAt = function(t, e) {
                return this.getPoint(t, e)
            }, ca.prototype.getTangent = function() {
                var t = this.v2.clone().sub(this.v1);
                return t.normalize()
            }, ca.prototype.copy = function(t) {
                return Yo.prototype.copy.call(this, t), this.v1.copy(t.v1), this.v2.copy(t.v2), this
            }, ca.prototype.toJSON = function() {
                var t = Yo.prototype.toJSON.call(this);
                return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
            }, ca.prototype.fromJSON = function(t) {
                return Yo.prototype.fromJSON.call(this, t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
            }, la.prototype = Object.create(Yo.prototype), la.prototype.constructor = la, la.prototype.isLineCurve3 = !0, la.prototype.getPoint = function(t, e) {
                var n = e || new Te;
                return 1 === t ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)), n
            }, la.prototype.getPointAt = function(t, e) {
                return this.getPoint(t, e)
            }, la.prototype.copy = function(t) {
                return Yo.prototype.copy.call(this, t), this.v1.copy(t.v1), this.v2.copy(t.v2), this
            }, la.prototype.toJSON = function() {
                var t = Yo.prototype.toJSON.call(this);
                return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
            }, la.prototype.fromJSON = function(t) {
                return Yo.prototype.fromJSON.call(this, t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
            }, ha.prototype = Object.create(Yo.prototype), ha.prototype.constructor = ha, ha.prototype.isQuadraticBezierCurve = !0, ha.prototype.getPoint = function(t, e) {
                var n = e || new be,
                    i = this.v0,
                    r = this.v1,
                    o = this.v2;
                return n.set(ra(t, i.x, r.x, o.x), ra(t, i.y, r.y, o.y)), n
            }, ha.prototype.copy = function(t) {
                return Yo.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this
            }, ha.prototype.toJSON = function() {
                var t = Yo.prototype.toJSON.call(this);
                return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
            }, ha.prototype.fromJSON = function(t) {
                return Yo.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
            }, ua.prototype = Object.create(Yo.prototype), ua.prototype.constructor = ua, ua.prototype.isQuadraticBezierCurve3 = !0, ua.prototype.getPoint = function(t, e) {
                var n = e || new Te,
                    i = this.v0,
                    r = this.v1,
                    o = this.v2;
                return n.set(ra(t, i.x, r.x, o.x), ra(t, i.y, r.y, o.y), ra(t, i.z, r.z, o.z)), n
            }, ua.prototype.copy = function(t) {
                return Yo.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this
            }, ua.prototype.toJSON = function() {
                var t = Yo.prototype.toJSON.call(this);
                return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
            }, ua.prototype.fromJSON = function(t) {
                return Yo.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
            }, pa.prototype = Object.create(Yo.prototype), pa.prototype.constructor = pa, pa.prototype.isSplineCurve = !0, pa.prototype.getPoint = function(t, e) {
                var n = e || new be,
                    i = this.points,
                    r = (i.length - 1) * t,
                    o = Math.floor(r),
                    a = r - o,
                    s = i[0 === o ? o : o - 1],
                    c = i[o],
                    l = i[o > i.length - 2 ? i.length - 1 : o + 1],
                    h = i[o > i.length - 3 ? i.length - 1 : o + 2];
                return n.set(ia(a, s.x, c.x, l.x, h.x), ia(a, s.y, c.y, l.y, h.y)), n
            }, pa.prototype.copy = function(t) {
                Yo.prototype.copy.call(this, t), this.points = [];
                for (var e = 0, n = t.points.length; e < n; e++) {
                    var i = t.points[e];
                    this.points.push(i.clone())
                }
                return this
            }, pa.prototype.toJSON = function() {
                var t = Yo.prototype.toJSON.call(this);
                t.points = [];
                for (var e = 0, n = this.points.length; e < n; e++) {
                    var i = this.points[e];
                    t.points.push(i.toArray())
                }
                return t
            }, pa.prototype.fromJSON = function(t) {
                Yo.prototype.fromJSON.call(this, t), this.points = [];
                for (var e = 0, n = t.points.length; e < n; e++) {
                    var i = t.points[e];
                    this.points.push((new be).fromArray(i))
                }
                return this
            };
            var da = Object.freeze({
                ArcCurve: Jo,
                CatmullRomCurve3: na,
                CubicBezierCurve: aa,
                CubicBezierCurve3: sa,
                EllipseCurve: Zo,
                LineCurve: ca,
                LineCurve3: la,
                QuadraticBezierCurve: ha,
                QuadraticBezierCurve3: ua,
                SplineCurve: pa
            });

            function fa() {
                Yo.call(this), this.type = "CurvePath", this.curves = [], this.autoClose = !1
            }

            function ma(t) {
                fa.call(this), this.type = "Path", this.currentPoint = new be, t && this.setFromPoints(t)
            }

            function va(t) {
                ma.call(this, t), this.uuid = xe.generateUUID(), this.type = "Shape", this.holes = []
            }

            function ga(t, e) {
                Ze.call(this), this.type = "Light", this.color = new Ue(t), this.intensity = void 0 !== e ? e : 1, this.receiveShadow = void 0
            }

            function ya(t, e, n) {
                ga.call(this, t, n), this.type = "HemisphereLight", this.castShadow = void 0, this.position.copy(Ze.DefaultUp), this.updateMatrix(), this.groundColor = new Ue(e)
            }

            function _a(t) {
                this.camera = t, this.bias = 0, this.radius = 1, this.mapSize = new be(512, 512), this.map = null, this.matrix = new we
            }

            function xa() {
                _a.call(this, new Gi(50, 1, .5, 500))
            }

            function ba(t, e, n, i, r, o) {
                ga.call(this, t, e), this.type = "SpotLight", this.position.copy(Ze.DefaultUp), this.updateMatrix(), this.target = new Ze, Object.defineProperty(this, "power", {
                    get: function() {
                        return this.intensity * Math.PI
                    },
                    set: function(t) {
                        this.intensity = t / Math.PI
                    }
                }), this.distance = void 0 !== n ? n : 0, this.angle = void 0 !== i ? i : Math.PI / 3, this.penumbra = void 0 !== r ? r : 0, this.decay = void 0 !== o ? o : 1, this.shadow = new xa
            }

            function wa(t, e, n, i) {
                ga.call(this, t, e), this.type = "PointLight", Object.defineProperty(this, "power", {
                    get: function() {
                        return 4 * this.intensity * Math.PI
                    },
                    set: function(t) {
                        this.intensity = t / (4 * Math.PI)
                    }
                }), this.distance = void 0 !== n ? n : 0, this.decay = void 0 !== i ? i : 1, this.shadow = new _a(new Gi(90, 1, .5, 500))
            }

            function Ma(t, e, n, i, r, o) {
                zi.call(this), this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t, this.right = e, this.top = n, this.bottom = i, this.near = void 0 !== r ? r : .1, this.far = void 0 !== o ? o : 2e3, this.updateProjectionMatrix()
            }

            function Ta() {
                _a.call(this, new Ma(-5, 5, 5, -5, .5, 500))
            }

            function Ea(t, e) {
                ga.call(this, t, e), this.type = "DirectionalLight", this.position.copy(Ze.DefaultUp), this.updateMatrix(), this.target = new Ze, this.shadow = new Ta
            }

            function Sa(t, e) {
                ga.call(this, t, e), this.type = "AmbientLight", this.castShadow = void 0
            }

            function Aa(t, e, n, i) {
                ga.call(this, t, e), this.type = "RectAreaLight", this.width = void 0 !== n ? n : 10, this.height = void 0 !== i ? i : 10
            }
            fa.prototype = Object.assign(Object.create(Yo.prototype), {
                constructor: fa,
                add: function(t) {
                    this.curves.push(t)
                },
                closePath: function() {
                    var t = this.curves[0].getPoint(0),
                        e = this.curves[this.curves.length - 1].getPoint(1);
                    t.equals(e) || this.curves.push(new ca(e, t))
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
                    Yo.prototype.copy.call(this, t), this.curves = [];
                    for (var e = 0, n = t.curves.length; e < n; e++) {
                        var i = t.curves[e];
                        this.curves.push(i.clone())
                    }
                    return this.autoClose = t.autoClose, this
                },
                toJSON: function() {
                    var t = Yo.prototype.toJSON.call(this);
                    t.autoClose = this.autoClose, t.curves = [];
                    for (var e = 0, n = this.curves.length; e < n; e++) {
                        var i = this.curves[e];
                        t.curves.push(i.toJSON())
                    }
                    return t
                },
                fromJSON: function(t) {
                    Yo.prototype.fromJSON.call(this, t), this.autoClose = t.autoClose, this.curves = [];
                    for (var e = 0, n = t.curves.length; e < n; e++) {
                        var i = t.curves[e];
                        this.curves.push((new da[i.type]).fromJSON(i))
                    }
                    return this
                }
            }), ma.prototype = Object.assign(Object.create(fa.prototype), {
                constructor: ma,
                setFromPoints: function(t) {
                    this.moveTo(t[0].x, t[0].y);
                    for (var e = 1, n = t.length; e < n; e++) this.lineTo(t[e].x, t[e].y)
                },
                moveTo: function(t, e) {
                    this.currentPoint.set(t, e)
                },
                lineTo: function(t, e) {
                    var n = new ca(this.currentPoint.clone(), new be(t, e));
                    this.curves.push(n), this.currentPoint.set(t, e)
                },
                quadraticCurveTo: function(t, e, n, i) {
                    var r = new ha(this.currentPoint.clone(), new be(t, e), new be(n, i));
                    this.curves.push(r), this.currentPoint.set(n, i)
                },
                bezierCurveTo: function(t, e, n, i, r, o) {
                    var a = new aa(this.currentPoint.clone(), new be(t, e), new be(n, i), new be(r, o));
                    this.curves.push(a), this.currentPoint.set(r, o)
                },
                splineThru: function(t) {
                    var e = [this.currentPoint.clone()].concat(t),
                        n = new pa(e);
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
                    var c = new Zo(t, e, n, i, r, o, a, s);
                    if (this.curves.length > 0) {
                        var l = c.getPoint(0);
                        l.equals(this.currentPoint) || this.lineTo(l.x, l.y)
                    }
                    this.curves.push(c);
                    var h = c.getPoint(1);
                    this.currentPoint.copy(h)
                },
                copy: function(t) {
                    return fa.prototype.copy.call(this, t), this.currentPoint.copy(t.currentPoint), this
                },
                toJSON: function() {
                    var t = fa.prototype.toJSON.call(this);
                    return t.currentPoint = this.currentPoint.toArray(), t
                },
                fromJSON: function(t) {
                    return fa.prototype.fromJSON.call(this, t), this.currentPoint.fromArray(t.currentPoint), this
                }
            }), va.prototype = Object.assign(Object.create(ma.prototype), {
                constructor: va,
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
                    ma.prototype.copy.call(this, t), this.holes = [];
                    for (var e = 0, n = t.holes.length; e < n; e++) {
                        var i = t.holes[e];
                        this.holes.push(i.clone())
                    }
                    return this
                },
                toJSON: function() {
                    var t = ma.prototype.toJSON.call(this);
                    t.uuid = this.uuid, t.holes = [];
                    for (var e = 0, n = this.holes.length; e < n; e++) {
                        var i = this.holes[e];
                        t.holes.push(i.toJSON())
                    }
                    return t
                },
                fromJSON: function(t) {
                    ma.prototype.fromJSON.call(this, t), this.uuid = t.uuid, this.holes = [];
                    for (var e = 0, n = t.holes.length; e < n; e++) {
                        var i = t.holes[e];
                        this.holes.push((new ma).fromJSON(i))
                    }
                    return this
                }
            }), ga.prototype = Object.assign(Object.create(Ze.prototype), {
                constructor: ga,
                isLight: !0,
                copy: function(t) {
                    return Ze.prototype.copy.call(this, t), this.color.copy(t.color), this.intensity = t.intensity, this
                },
                toJSON: function(t) {
                    var e = Ze.prototype.toJSON.call(this, t);
                    return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, void 0 !== this.groundColor && (e.object.groundColor = this.groundColor.getHex()), void 0 !== this.distance && (e.object.distance = this.distance), void 0 !== this.angle && (e.object.angle = this.angle), void 0 !== this.decay && (e.object.decay = this.decay), void 0 !== this.penumbra && (e.object.penumbra = this.penumbra), void 0 !== this.shadow && (e.object.shadow = this.shadow.toJSON()), e
                }
            }), ya.prototype = Object.assign(Object.create(ga.prototype), {
                constructor: ya,
                isHemisphereLight: !0,
                copy: function(t) {
                    return ga.prototype.copy.call(this, t), this.groundColor.copy(t.groundColor), this
                }
            }), Object.assign(_a.prototype, {
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
            }), xa.prototype = Object.assign(Object.create(_a.prototype), {
                constructor: xa,
                isSpotLightShadow: !0,
                update: function(t) {
                    var e = this.camera,
                        n = 2 * xe.RAD2DEG * t.angle,
                        i = this.mapSize.width / this.mapSize.height,
                        r = t.distance || e.far;
                    n === e.fov && i === e.aspect && r === e.far || (e.fov = n, e.aspect = i, e.far = r, e.updateProjectionMatrix())
                }
            }), ba.prototype = Object.assign(Object.create(ga.prototype), {
                constructor: ba,
                isSpotLight: !0,
                copy: function(t) {
                    return ga.prototype.copy.call(this, t), this.distance = t.distance, this.angle = t.angle, this.penumbra = t.penumbra, this.decay = t.decay, this.target = t.target.clone(), this.shadow = t.shadow.clone(), this
                }
            }), wa.prototype = Object.assign(Object.create(ga.prototype), {
                constructor: wa,
                isPointLight: !0,
                copy: function(t) {
                    return ga.prototype.copy.call(this, t), this.distance = t.distance, this.decay = t.decay, this.shadow = t.shadow.clone(), this
                }
            }), Ma.prototype = Object.assign(Object.create(zi.prototype), {
                constructor: Ma,
                isOrthographicCamera: !0,
                copy: function(t, e) {
                    return zi.prototype.copy.call(this, t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = null === t.view ? null : Object.assign({}, t.view), this
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
                    var e = Ze.prototype.toJSON.call(this, t);
                    return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, null !== this.view && (e.object.view = Object.assign({}, this.view)), e
                }
            }), Ta.prototype = Object.assign(Object.create(_a.prototype), {
                constructor: Ta
            }), Ea.prototype = Object.assign(Object.create(ga.prototype), {
                constructor: Ea,
                isDirectionalLight: !0,
                copy: function(t) {
                    return ga.prototype.copy.call(this, t), this.target = t.target.clone(), this.shadow = t.shadow.clone(), this
                }
            }), Sa.prototype = Object.assign(Object.create(ga.prototype), {
                constructor: Sa,
                isAmbientLight: !0
            }), Aa.prototype = Object.assign(Object.create(ga.prototype), {
                constructor: Aa,
                isRectAreaLight: !0,
                copy: function(t) {
                    return ga.prototype.copy.call(this, t), this.width = t.width, this.height = t.height, this
                },
                toJSON: function(t) {
                    var e = ga.prototype.toJSON.call(this, t);
                    return e.object.width = this.width, e.object.height = this.height, e
                }
            });
            var Pa = {
                arraySlice: function(t, e, n) {
                    return Pa.isTypedArray(t) ? new t.constructor(t.subarray(e, void 0 !== n ? n : t.length)) : t.slice(e, n)
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

            function La(t, e, n, i) {
                this.parameterPositions = t, this._cachedIndex = 0, this.resultBuffer = void 0 !== i ? i : new e.constructor(n), this.sampleValues = e, this.valueSize = n
            }

            function Ra(t, e, n, i) {
                La.call(this, t, e, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0
            }

            function Ca(t, e, n, i) {
                La.call(this, t, e, n, i)
            }

            function Oa(t, e, n, i) {
                La.call(this, t, e, n, i)
            }

            function Ia(t, e, n, i) {
                if (void 0 === t) throw new Error("THREE.KeyframeTrack: track name is undefined");
                if (void 0 === e || 0 === e.length) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t);
                this.name = t, this.times = Pa.convertArray(e, this.TimeBufferType), this.values = Pa.convertArray(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation)
            }

            function Da(t, e, n) {
                Ia.call(this, t, e, n)
            }

            function Na(t, e, n, i) {
                Ia.call(this, t, e, n, i)
            }

            function Ba(t, e, n, i) {
                Ia.call(this, t, e, n, i)
            }

            function Ha(t, e, n, i) {
                La.call(this, t, e, n, i)
            }

            function Fa(t, e, n, i) {
                Ia.call(this, t, e, n, i)
            }

            function ka(t, e, n, i) {
                Ia.call(this, t, e, n, i)
            }

            function Ua(t, e, n, i) {
                Ia.call(this, t, e, n, i)
            }

            function za(t, e, n) {
                this.name = t, this.tracks = n, this.duration = void 0 !== e ? e : -1, this.uuid = xe.generateUUID(), this.duration < 0 && this.resetDuration()
            }

            function Ga(t) {
                if (void 0 === t.type) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
                var e = function(t) {
                    switch (t.toLowerCase()) {
                        case "scalar":
                        case "double":
                        case "float":
                        case "number":
                        case "integer":
                            return Ba;
                        case "vector":
                        case "vector2":
                        case "vector3":
                        case "vector4":
                            return Ua;
                        case "color":
                            return Na;
                        case "quaternion":
                            return Fa;
                        case "bool":
                        case "boolean":
                            return Da;
                        case "string":
                            return ka
                    }
                    throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + t)
                }(t.type);
                if (void 0 === t.times) {
                    var n = [],
                        i = [];
                    Pa.flattenJSON(t.keys, n, i, "value"), t.times = n, t.values = i
                }
                return void 0 !== e.parse ? e.parse(t) : new e(t.name, t.times, t.values, t.interpolation)
            }

            function ja(t) {
                this.manager = void 0 !== t ? t : Uo, this.textures = {}
            }

            function Va(t) {
                this.manager = void 0 !== t ? t : Uo
            }
            Object.assign(La.prototype, {
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
                Object.assign(La.prototype, {
                    beforeStart_: La.prototype.copySampleValue_,
                    afterEnd_: La.prototype.copySampleValue_
                }), Ra.prototype = Object.assign(Object.create(La.prototype), {
                    constructor: Ra,
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
                }), Ca.prototype = Object.assign(Object.create(La.prototype), {
                    constructor: Ca,
                    interpolate_: function(t, e, n, i) {
                        for (var r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, s = t * a, c = s - a, l = (n - e) / (i - e), h = 1 - l, u = 0; u !== a; ++u) r[u] = o[c + u] * h + o[s + u] * l;
                        return r
                    }
                }), Oa.prototype = Object.assign(Object.create(La.prototype), {
                    constructor: Oa,
                    interpolate_: function(t) {
                        return this.copySampleValue_(t - 1)
                    }
                }), Object.assign(Ia, {
                    toJSON: function(t) {
                        var e, n = t.constructor;
                        if (void 0 !== n.toJSON) e = n.toJSON(t);
                        else {
                            e = {
                                name: t.name,
                                times: Pa.convertArray(t.times, Array),
                                values: Pa.convertArray(t.values, Array)
                            };
                            var i = t.getInterpolation();
                            i !== t.DefaultInterpolation && (e.interpolation = i)
                        }
                        return e.type = t.ValueTypeName, e
                    }
                }), Object.assign(Ia.prototype, {
                    constructor: Ia,
                    TimeBufferType: Float32Array,
                    ValueBufferType: Float32Array,
                    DefaultInterpolation: 2301,
                    InterpolantFactoryMethodDiscrete: function(t) {
                        return new Oa(this.times, this.values, this.getValueSize(), t)
                    },
                    InterpolantFactoryMethodLinear: function(t) {
                        return new Ca(this.times, this.values, this.getValueSize(), t)
                    },
                    InterpolantFactoryMethodSmooth: function(t) {
                        return new Ra(this.times, this.values, this.getValueSize(), t)
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
                            this.times = Pa.arraySlice(n, r, o), this.values = Pa.arraySlice(this.values, r * a, o * a)
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
                        if (void 0 !== i && Pa.isTypedArray(i))
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
                        return r !== t.length && (this.times = Pa.arraySlice(t, 0, r), this.values = Pa.arraySlice(e, 0, r * n)), this
                    }
                }), Da.prototype = Object.assign(Object.create(Ia.prototype), {
                    constructor: Da,
                    ValueTypeName: "bool",
                    ValueBufferType: Array,
                    DefaultInterpolation: 2300,
                    InterpolantFactoryMethodLinear: void 0,
                    InterpolantFactoryMethodSmooth: void 0
                }), Na.prototype = Object.assign(Object.create(Ia.prototype), {
                    constructor: Na,
                    ValueTypeName: "color"
                }), Ba.prototype = Object.assign(Object.create(Ia.prototype), {
                    constructor: Ba,
                    ValueTypeName: "number"
                }), Ha.prototype = Object.assign(Object.create(La.prototype), {
                    constructor: Ha,
                    interpolate_: function(t, e, n, i) {
                        for (var r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, s = t * a, c = (n - e) / (i - e), l = s + a; s !== l; s += 4) Me.slerpFlat(r, 0, o, s - a, o, s, c);
                        return r
                    }
                }), Fa.prototype = Object.assign(Object.create(Ia.prototype), {
                    constructor: Fa,
                    ValueTypeName: "quaternion",
                    DefaultInterpolation: 2301,
                    InterpolantFactoryMethodLinear: function(t) {
                        return new Ha(this.times, this.values, this.getValueSize(), t)
                    },
                    InterpolantFactoryMethodSmooth: void 0
                }), ka.prototype = Object.assign(Object.create(Ia.prototype), {
                    constructor: ka,
                    ValueTypeName: "string",
                    ValueBufferType: Array,
                    DefaultInterpolation: 2300,
                    InterpolantFactoryMethodLinear: void 0,
                    InterpolantFactoryMethodSmooth: void 0
                }), Ua.prototype = Object.assign(Object.create(Ia.prototype), {
                    constructor: Ua,
                    ValueTypeName: "vector"
                }), Object.assign(za, {
                    parse: function(t) {
                        for (var e = [], n = t.tracks, i = 1 / (t.fps || 1), r = 0, o = n.length; r !== o; ++r) e.push(Ga(n[r]).scale(i));
                        return new za(t.name, t.duration, e)
                    },
                    toJSON: function(t) {
                        for (var e = [], n = t.tracks, i = {
                                name: t.name,
                                duration: t.duration,
                                tracks: e,
                                uuid: t.uuid
                            }, r = 0, o = n.length; r !== o; ++r) e.push(Ia.toJSON(n[r]));
                        return i
                    },
                    CreateFromMorphTargetSequence: function(t, e, n, i) {
                        for (var r = e.length, o = [], a = 0; a < r; a++) {
                            var s = [],
                                c = [];
                            s.push((a + r - 1) % r, a, (a + 1) % r), c.push(0, 1, 0);
                            var l = Pa.getKeyframeOrder(s);
                            s = Pa.sortedArray(s, 1, l), c = Pa.sortedArray(c, 1, l), i || 0 !== s[0] || (s.push(r), c.push(c[0])), o.push(new Ba(".morphTargetInfluences[" + e[a].name + "]", s, c).scale(1 / n))
                        }
                        return new za(t, -1, o)
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
                        for (var l in i) u.push(za.CreateFromMorphTargetSequence(l, i[l], e, n));
                        return u
                    },
                    parseAnimation: function(t, e) {
                        if (!t) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
                        for (var n = function(t, e, n, i, r) {
                                if (0 !== n.length) {
                                    var o = [],
                                        a = [];
                                    Pa.flattenJSON(n, o, a, i), 0 !== o.length && r.push(new t(e, o, a))
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
                                        i.push(new Ba(".morphTargetInfluence[" + d + "]", f, m))
                                    }
                                    o = h.length * (a || 1)
                                } else {
                                    var g = ".bones[" + e[c].name + "]";
                                    n(Ua, g + ".position", l, "pos", i), n(Fa, g + ".quaternion", l, "rot", i), n(Ua, g + ".scale", l, "scl", i)
                                }
                        }
                        if (0 === i.length) return null;
                        var y = new za(r, o, i);
                        return y
                    }
                }), Object.assign(za.prototype, {
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
                    }
                }), Object.assign(ja.prototype, {
                    load: function(t, e, n, i) {
                        var r = this,
                            o = new Go(r.manager);
                        o.load(t, function(t) {
                            e(r.parse(JSON.parse(t)))
                        }, n, i)
                    },
                    setTextures: function(t) {
                        this.textures = t
                    },
                    parse: function(t) {
                        var e = this.textures;

                        function n(t) {
                            return void 0 === e[t] && console.warn("THREE.MaterialLoader: Undefined texture", t), e[t]
                        }
                        var i = new Ho[t.type];
                        if (void 0 !== t.uuid && (i.uuid = t.uuid), void 0 !== t.name && (i.name = t.name), void 0 !== t.color && i.color.setHex(t.color), void 0 !== t.roughness && (i.roughness = t.roughness), void 0 !== t.metalness && (i.metalness = t.metalness), void 0 !== t.emissive && i.emissive.setHex(t.emissive), void 0 !== t.specular && i.specular.setHex(t.specular), void 0 !== t.shininess && (i.shininess = t.shininess), void 0 !== t.clearCoat && (i.clearCoat = t.clearCoat), void 0 !== t.clearCoatRoughness && (i.clearCoatRoughness = t.clearCoatRoughness), void 0 !== t.vertexColors && (i.vertexColors = t.vertexColors), void 0 !== t.fog && (i.fog = t.fog), void 0 !== t.flatShading && (i.flatShading = t.flatShading), void 0 !== t.blending && (i.blending = t.blending), void 0 !== t.combine && (i.combine = t.combine), void 0 !== t.side && (i.side = t.side), void 0 !== t.opacity && (i.opacity = t.opacity), void 0 !== t.transparent && (i.transparent = t.transparent), void 0 !== t.alphaTest && (i.alphaTest = t.alphaTest), void 0 !== t.depthTest && (i.depthTest = t.depthTest), void 0 !== t.depthWrite && (i.depthWrite = t.depthWrite), void 0 !== t.colorWrite && (i.colorWrite = t.colorWrite), void 0 !== t.wireframe && (i.wireframe = t.wireframe), void 0 !== t.wireframeLinewidth && (i.wireframeLinewidth = t.wireframeLinewidth), void 0 !== t.wireframeLinecap && (i.wireframeLinecap = t.wireframeLinecap), void 0 !== t.wireframeLinejoin && (i.wireframeLinejoin = t.wireframeLinejoin), void 0 !== t.rotation && (i.rotation = t.rotation), 1 !== t.linewidth && (i.linewidth = t.linewidth), void 0 !== t.dashSize && (i.dashSize = t.dashSize), void 0 !== t.gapSize && (i.gapSize = t.gapSize), void 0 !== t.scale && (i.scale = t.scale), void 0 !== t.polygonOffset && (i.polygonOffset = t.polygonOffset), void 0 !== t.polygonOffsetFactor && (i.polygonOffsetFactor = t.polygonOffsetFactor), void 0 !== t.polygonOffsetUnits && (i.polygonOffsetUnits = t.polygonOffsetUnits), void 0 !== t.skinning && (i.skinning = t.skinning), void 0 !== t.morphTargets && (i.morphTargets = t.morphTargets), void 0 !== t.dithering && (i.dithering = t.dithering), void 0 !== t.visible && (i.visible = t.visible), void 0 !== t.userData && (i.userData = t.userData), void 0 !== t.uniforms)
                            for (var r in t.uniforms) {
                                var o = t.uniforms[r];
                                switch (i.uniforms[r] = {}, o.type) {
                                    case "t":
                                        i.uniforms[r].value = n(o.value);
                                        break;
                                    case "c":
                                        i.uniforms[r].value = (new Ue).setHex(o.value);
                                        break;
                                    case "v2":
                                        i.uniforms[r].value = (new be).fromArray(o.value);
                                        break;
                                    case "v3":
                                        i.uniforms[r].value = (new Te).fromArray(o.value);
                                        break;
                                    case "v4":
                                        i.uniforms[r].value = (new Le).fromArray(o.value);
                                        break;
                                    case "m4":
                                        i.uniforms[r].value = (new we).fromArray(o.value);
                                        break;
                                    default:
                                        i.uniforms[r].value = o.value
                                }
                            }
                        if (void 0 !== t.defines && (i.defines = t.defines), void 0 !== t.vertexShader && (i.vertexShader = t.vertexShader), void 0 !== t.fragmentShader && (i.fragmentShader = t.fragmentShader), void 0 !== t.shading && (i.flatShading = 1 === t.shading), void 0 !== t.size && (i.size = t.size), void 0 !== t.sizeAttenuation && (i.sizeAttenuation = t.sizeAttenuation), void 0 !== t.map && (i.map = n(t.map)), void 0 !== t.alphaMap && (i.alphaMap = n(t.alphaMap), i.transparent = !0), void 0 !== t.bumpMap && (i.bumpMap = n(t.bumpMap)), void 0 !== t.bumpScale && (i.bumpScale = t.bumpScale), void 0 !== t.normalMap && (i.normalMap = n(t.normalMap)), void 0 !== t.normalMapType && (i.normalMapType = t.normalMapType), void 0 !== t.normalScale) {
                            var a = t.normalScale;
                            !1 === Array.isArray(a) && (a = [a, a]), i.normalScale = (new be).fromArray(a)
                        }
                        return void 0 !== t.displacementMap && (i.displacementMap = n(t.displacementMap)), void 0 !== t.displacementScale && (i.displacementScale = t.displacementScale), void 0 !== t.displacementBias && (i.displacementBias = t.displacementBias), void 0 !== t.roughnessMap && (i.roughnessMap = n(t.roughnessMap)), void 0 !== t.metalnessMap && (i.metalnessMap = n(t.metalnessMap)), void 0 !== t.emissiveMap && (i.emissiveMap = n(t.emissiveMap)), void 0 !== t.emissiveIntensity && (i.emissiveIntensity = t.emissiveIntensity), void 0 !== t.specularMap && (i.specularMap = n(t.specularMap)), void 0 !== t.envMap && (i.envMap = n(t.envMap)), void 0 !== t.envMapIntensity && (i.envMapIntensity = t.envMapIntensity), void 0 !== t.reflectivity && (i.reflectivity = t.reflectivity), void 0 !== t.lightMap && (i.lightMap = n(t.lightMap)), void 0 !== t.lightMapIntensity && (i.lightMapIntensity = t.lightMapIntensity), void 0 !== t.aoMap && (i.aoMap = n(t.aoMap)), void 0 !== t.aoMapIntensity && (i.aoMapIntensity = t.aoMapIntensity), void 0 !== t.gradientMap && (i.gradientMap = n(t.gradientMap)), i
                    }
                }), Object.assign(Va.prototype, {
                    load: function(t, e, n, i) {
                        var r = this,
                            o = new Go(r.manager);
                        o.load(t, function(t) {
                            e(r.parse(JSON.parse(t)))
                        }, n, i)
                    },
                    parse: function(t) {
                        var e = new pn,
                            n = t.data.index;
                        if (void 0 !== n) {
                            var i = new Wa[n.type](n.array);
                            e.setIndex(new Qe(i, 1))
                        }
                        var r = t.data.attributes;
                        for (var o in r) {
                            var a = r[o],
                                i = new Wa[a.type](a.array);
                            e.addAttribute(o, new Qe(i, a.itemSize, a.normalized))
                        }
                        var s = t.data.groups || t.data.drawcalls || t.data.offsets;
                        if (void 0 !== s)
                            for (var c = 0, l = s.length; c !== l; ++c) {
                                var h = s[c];
                                e.addGroup(h.start, h.count, h.materialIndex)
                            }
                        var u = t.data.boundingSphere;
                        if (void 0 !== u) {
                            var p = new Te;
                            void 0 !== u.center && p.fromArray(u.center), e.boundingSphere = new De(p, u.radius)
                        }
                        return e
                    }
                });
            var Wa = {
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

            function Xa() {}
            Xa.Handlers = {
                handlers: [],
                add: function(t, e) {
                    this.handlers.push(t, e)
                },
                get: function(t) {
                    for (var e = this.handlers, n = 0, i = e.length; n < i; n += 2) {
                        var r = e[n],
                            o = e[n + 1];
                        if (r.test(t)) return o
                    }
                    return null
                }
            }, Object.assign(Xa.prototype, {
                crossOrigin: "anonymous",
                onLoadStart: function() {},
                onLoadProgress: function() {},
                onLoadComplete: function() {},
                initMaterials: function(t, e, n) {
                    for (var i = [], r = 0; r < t.length; ++r) i[r] = this.createMaterial(t[r], e, n);
                    return i
                },
                createMaterial: function() {
                    var t = {
                            NoBlending: f,
                            NormalBlending: m,
                            AdditiveBlending: v,
                            SubtractiveBlending: g,
                            MultiplyBlending: y,
                            CustomBlending: _
                        },
                        e = new Ue,
                        n = new qo,
                        i = new ja;
                    return function(r, o, a) {
                        var s = {};

                        function c(t, e, i, r, c) {
                            var l, h = o + t,
                                u = Xa.Handlers.get(h);
                            null !== u ? l = u.load(h) : (n.setCrossOrigin(a), l = n.load(h)), void 0 !== e && (l.repeat.fromArray(e), 1 !== e[0] && (l.wrapS = ot), 1 !== e[1] && (l.wrapT = ot)), void 0 !== i && l.offset.fromArray(i), void 0 !== r && ("repeat" === r[0] && (l.wrapS = ot), "mirror" === r[0] && (l.wrapS = st), "repeat" === r[1] && (l.wrapT = ot), "mirror" === r[1] && (l.wrapT = st)), void 0 !== c && (l.anisotropy = c);
                            var p = xe.generateUUID();
                            return s[p] = l, p
                        }
                        var u = {
                            uuid: xe.generateUUID(),
                            type: "MeshLambertMaterial"
                        };
                        for (var f in r) {
                            var m = r[f];
                            switch (f) {
                                case "DbgColor":
                                case "DbgIndex":
                                case "opticalDensity":
                                case "illumination":
                                    break;
                                case "DbgName":
                                    u.name = m;
                                    break;
                                case "blending":
                                    u.blending = t[m];
                                    break;
                                case "colorAmbient":
                                case "mapAmbient":
                                    console.warn("THREE.Loader.createMaterial:", f, "is no longer supported.");
                                    break;
                                case "colorDiffuse":
                                    u.color = e.fromArray(m).getHex();
                                    break;
                                case "colorSpecular":
                                    u.specular = e.fromArray(m).getHex();
                                    break;
                                case "colorEmissive":
                                    u.emissive = e.fromArray(m).getHex();
                                    break;
                                case "specularCoef":
                                    u.shininess = m;
                                    break;
                                case "shading":
                                    "basic" === m.toLowerCase() && (u.type = "MeshBasicMaterial"), "phong" === m.toLowerCase() && (u.type = "MeshPhongMaterial"), "standard" === m.toLowerCase() && (u.type = "MeshStandardMaterial");
                                    break;
                                case "mapDiffuse":
                                    u.map = c(m, r.mapDiffuseRepeat, r.mapDiffuseOffset, r.mapDiffuseWrap, r.mapDiffuseAnisotropy);
                                    break;
                                case "mapDiffuseRepeat":
                                case "mapDiffuseOffset":
                                case "mapDiffuseWrap":
                                case "mapDiffuseAnisotropy":
                                    break;
                                case "mapEmissive":
                                    u.emissiveMap = c(m, r.mapEmissiveRepeat, r.mapEmissiveOffset, r.mapEmissiveWrap, r.mapEmissiveAnisotropy);
                                    break;
                                case "mapEmissiveRepeat":
                                case "mapEmissiveOffset":
                                case "mapEmissiveWrap":
                                case "mapEmissiveAnisotropy":
                                    break;
                                case "mapLight":
                                    u.lightMap = c(m, r.mapLightRepeat, r.mapLightOffset, r.mapLightWrap, r.mapLightAnisotropy);
                                    break;
                                case "mapLightRepeat":
                                case "mapLightOffset":
                                case "mapLightWrap":
                                case "mapLightAnisotropy":
                                    break;
                                case "mapAO":
                                    u.aoMap = c(m, r.mapAORepeat, r.mapAOOffset, r.mapAOWrap, r.mapAOAnisotropy);
                                    break;
                                case "mapAORepeat":
                                case "mapAOOffset":
                                case "mapAOWrap":
                                case "mapAOAnisotropy":
                                    break;
                                case "mapBump":
                                    u.bumpMap = c(m, r.mapBumpRepeat, r.mapBumpOffset, r.mapBumpWrap, r.mapBumpAnisotropy);
                                    break;
                                case "mapBumpScale":
                                    u.bumpScale = m;
                                    break;
                                case "mapBumpRepeat":
                                case "mapBumpOffset":
                                case "mapBumpWrap":
                                case "mapBumpAnisotropy":
                                    break;
                                case "mapNormal":
                                    u.normalMap = c(m, r.mapNormalRepeat, r.mapNormalOffset, r.mapNormalWrap, r.mapNormalAnisotropy);
                                    break;
                                case "mapNormalFactor":
                                    u.normalScale = m;
                                    break;
                                case "mapNormalRepeat":
                                case "mapNormalOffset":
                                case "mapNormalWrap":
                                case "mapNormalAnisotropy":
                                    break;
                                case "mapSpecular":
                                    u.specularMap = c(m, r.mapSpecularRepeat, r.mapSpecularOffset, r.mapSpecularWrap, r.mapSpecularAnisotropy);
                                    break;
                                case "mapSpecularRepeat":
                                case "mapSpecularOffset":
                                case "mapSpecularWrap":
                                case "mapSpecularAnisotropy":
                                    break;
                                case "mapMetalness":
                                    u.metalnessMap = c(m, r.mapMetalnessRepeat, r.mapMetalnessOffset, r.mapMetalnessWrap, r.mapMetalnessAnisotropy);
                                    break;
                                case "mapMetalnessRepeat":
                                case "mapMetalnessOffset":
                                case "mapMetalnessWrap":
                                case "mapMetalnessAnisotropy":
                                    break;
                                case "mapRoughness":
                                    u.roughnessMap = c(m, r.mapRoughnessRepeat, r.mapRoughnessOffset, r.mapRoughnessWrap, r.mapRoughnessAnisotropy);
                                    break;
                                case "mapRoughnessRepeat":
                                case "mapRoughnessOffset":
                                case "mapRoughnessWrap":
                                case "mapRoughnessAnisotropy":
                                    break;
                                case "mapAlpha":
                                    u.alphaMap = c(m, r.mapAlphaRepeat, r.mapAlphaOffset, r.mapAlphaWrap, r.mapAlphaAnisotropy);
                                    break;
                                case "mapAlphaRepeat":
                                case "mapAlphaOffset":
                                case "mapAlphaWrap":
                                case "mapAlphaAnisotropy":
                                    break;
                                case "flipSided":
                                    u.side = l;
                                    break;
                                case "doubleSided":
                                    u.side = h;
                                    break;
                                case "transparency":
                                    console.warn("THREE.Loader.createMaterial: transparency has been renamed to opacity"), u.opacity = m;
                                    break;
                                case "depthTest":
                                case "depthWrite":
                                case "colorWrite":
                                case "opacity":
                                case "reflectivity":
                                case "transparent":
                                case "visible":
                                case "wireframe":
                                    u[f] = m;
                                    break;
                                case "vertexColors":
                                    !0 === m && (u.vertexColors = d), "face" === m && (u.vertexColors = p);
                                    break;
                                default:
                                    console.error("THREE.Loader.createMaterial: Unsupported", f, m)
                            }
                        }
                        return "MeshBasicMaterial" === u.type && delete u.emissive, "MeshPhongMaterial" !== u.type && delete u.specular, u.opacity < 1 && (u.transparent = !0), i.setTextures(s), i.parse(u)
                    }
                }()
            });
            var qa = {
                decodeText: function(t) {
                    if ("undefined" != typeof TextDecoder) return (new TextDecoder).decode(t);
                    for (var e = "", n = 0, i = t.length; n < i; n++) e += String.fromCharCode(t[n]);
                    return decodeURIComponent(escape(e))
                },
                extractUrlBase: function(t) {
                    var e = t.lastIndexOf("/");
                    return -1 === e ? "./" : t.substr(0, e + 1)
                }
            };

            function Ya(t) {
                "boolean" == typeof t && (console.warn("THREE.JSONLoader: showStatus parameter has been removed from constructor."), t = void 0), this.manager = void 0 !== t ? t : Uo, this.withCredentials = !1
            }

            function Za(t) {
                this.manager = void 0 !== t ? t : Uo, this.texturePath = ""
            }
            Object.assign(Ya.prototype, {
                crossOrigin: "anonymous",
                load: function(t, e, n, i) {
                    var r = this,
                        o = void 0 === this.path ? qa.extractUrlBase(t) : this.path,
                        a = new Go(this.manager);
                    a.setPath(this.path), a.setWithCredentials(this.withCredentials), a.load(t, function(n) {
                        var i = JSON.parse(n),
                            a = i.metadata;
                        if (void 0 !== a) {
                            var s = a.type;
                            if (void 0 !== s && "object" === s.toLowerCase()) return void console.error("THREE.JSONLoader: " + t + " should be loaded with THREE.ObjectLoader instead.")
                        }
                        var c = r.parse(i, o);
                        e(c.geometry, c.materials)
                    }, n, i)
                },
                setPath: function(t) {
                    return this.path = t, this
                },
                setResourcePath: function(t) {
                    return this.resourcePath = t, this
                },
                setCrossOrigin: function(t) {
                    return this.crossOrigin = t, this
                },
                parse: function(t, e) {
                    void 0 !== t.data && (t = t.data), void 0 !== t.scale ? t.scale = 1 / t.scale : t.scale = 1;
                    var n = new Ke;
                    if (function(t, e) {
                            function n(t, e) {
                                return t & 1 << e
                            }
                            var i, r, o, a, s, c, l, h, u, p, d, f, m, v, g, y, _, x, b, w, M, T, E, S, A, P, L, R = t.faces,
                                C = t.vertices,
                                O = t.normals,
                                I = t.colors,
                                D = t.scale,
                                N = 0;
                            if (void 0 !== t.uvs) {
                                for (i = 0; i < t.uvs.length; i++) t.uvs[i].length && N++;
                                for (i = 0; i < N; i++) e.faceVertexUvs[i] = []
                            }
                            for (a = 0, s = C.length; a < s;)(x = new Te).x = C[a++] * D, x.y = C[a++] * D, x.z = C[a++] * D, e.vertices.push(x);
                            for (a = 0, s = R.length; a < s;)
                                if (p = R[a++], d = n(p, 0), f = n(p, 1), m = n(p, 3), v = n(p, 4), g = n(p, 5), y = n(p, 6), _ = n(p, 7), d) {
                                    if ((w = new We).a = R[a], w.b = R[a + 1], w.c = R[a + 3], (M = new We).a = R[a + 1], M.b = R[a + 2], M.c = R[a + 3], a += 4, f && (u = R[a++], w.materialIndex = u, M.materialIndex = u), o = e.faces.length, m)
                                        for (i = 0; i < N; i++)
                                            for (S = t.uvs[i], e.faceVertexUvs[i][o] = [], e.faceVertexUvs[i][o + 1] = [], r = 0; r < 4; r++) h = R[a++], P = S[2 * h], L = S[2 * h + 1], A = new be(P, L), 2 !== r && e.faceVertexUvs[i][o].push(A), 0 !== r && e.faceVertexUvs[i][o + 1].push(A);
                                    if (v && (l = 3 * R[a++], w.normal.set(O[l++], O[l++], O[l]), M.normal.copy(w.normal)), g)
                                        for (i = 0; i < 4; i++) l = 3 * R[a++], E = new Te(O[l++], O[l++], O[l]), 2 !== i && w.vertexNormals.push(E), 0 !== i && M.vertexNormals.push(E);
                                    if (y && (c = R[a++], T = I[c], w.color.setHex(T), M.color.setHex(T)), _)
                                        for (i = 0; i < 4; i++) c = R[a++], T = I[c], 2 !== i && w.vertexColors.push(new Ue(T)), 0 !== i && M.vertexColors.push(new Ue(T));
                                    e.faces.push(w), e.faces.push(M)
                                } else {
                                    if ((b = new We).a = R[a++], b.b = R[a++], b.c = R[a++], f && (u = R[a++], b.materialIndex = u), o = e.faces.length, m)
                                        for (i = 0; i < N; i++)
                                            for (S = t.uvs[i], e.faceVertexUvs[i][o] = [], r = 0; r < 3; r++) h = R[a++], P = S[2 * h], L = S[2 * h + 1], A = new be(P, L), e.faceVertexUvs[i][o].push(A);
                                    if (v && (l = 3 * R[a++], b.normal.set(O[l++], O[l++], O[l])), g)
                                        for (i = 0; i < 3; i++) l = 3 * R[a++], E = new Te(O[l++], O[l++], O[l]), b.vertexNormals.push(E);
                                    if (y && (c = R[a++], b.color.setHex(I[c])), _)
                                        for (i = 0; i < 3; i++) c = R[a++], b.vertexColors.push(new Ue(I[c]));
                                    e.faces.push(b)
                                }
                        }(t, n), function(t, e) {
                            var n = void 0 !== t.influencesPerVertex ? t.influencesPerVertex : 2;
                            if (t.skinWeights)
                                for (var i = 0, r = t.skinWeights.length; i < r; i += n) {
                                    var o = t.skinWeights[i],
                                        a = n > 1 ? t.skinWeights[i + 1] : 0,
                                        s = n > 2 ? t.skinWeights[i + 2] : 0,
                                        c = n > 3 ? t.skinWeights[i + 3] : 0;
                                    e.skinWeights.push(new Le(o, a, s, c))
                                }
                            if (t.skinIndices)
                                for (var i = 0, r = t.skinIndices.length; i < r; i += n) {
                                    var l = t.skinIndices[i],
                                        h = n > 1 ? t.skinIndices[i + 1] : 0,
                                        u = n > 2 ? t.skinIndices[i + 2] : 0,
                                        p = n > 3 ? t.skinIndices[i + 3] : 0;
                                    e.skinIndices.push(new Le(l, h, u, p))
                                }
                            e.bones = t.bones, e.bones && e.bones.length > 0 && (e.skinWeights.length !== e.skinIndices.length || e.skinIndices.length !== e.vertices.length) && console.warn("When skinning, number of vertices (" + e.vertices.length + "), skinIndices (" + e.skinIndices.length + "), and skinWeights (" + e.skinWeights.length + ") should match.")
                        }(t, n), function(t, e) {
                            var n = t.scale;
                            if (void 0 !== t.morphTargets)
                                for (var i = 0, r = t.morphTargets.length; i < r; i++) {
                                    e.morphTargets[i] = {}, e.morphTargets[i].name = t.morphTargets[i].name, e.morphTargets[i].vertices = [];
                                    for (var o = e.morphTargets[i].vertices, a = t.morphTargets[i].vertices, s = 0, c = a.length; s < c; s += 3) {
                                        var l = new Te;
                                        l.x = a[s] * n, l.y = a[s + 1] * n, l.z = a[s + 2] * n, o.push(l)
                                    }
                                }
                            if (void 0 !== t.morphColors && t.morphColors.length > 0) {
                                console.warn('THREE.JSONLoader: "morphColors" no longer supported. Using them as face colors.');
                                for (var h = e.faces, u = t.morphColors[0].colors, i = 0, r = h.length; i < r; i++) h[i].color.fromArray(u, 3 * i)
                            }
                        }(t, n), function(t, e) {
                            var n = [],
                                i = [];
                            void 0 !== t.animation && i.push(t.animation), void 0 !== t.animations && (t.animations.length ? i = i.concat(t.animations) : i.push(t.animations));
                            for (var r = 0; r < i.length; r++) {
                                var o = za.parseAnimation(i[r], e.bones);
                                o && n.push(o)
                            }
                            if (e.morphTargets) {
                                var a = za.CreateClipsFromMorphTargetSequences(e.morphTargets, 10);
                                n = n.concat(a)
                            }
                            n.length > 0 && (e.animations = n)
                        }(t, n), n.computeFaceNormals(), n.computeBoundingSphere(), void 0 === t.materials || 0 === t.materials.length) return {
                        geometry: n
                    };
                    var i = Xa.prototype.initMaterials(t.materials, this.resourcePath || e, this.crossOrigin);
                    return {
                        geometry: n,
                        materials: i
                    }
                }
            }), Object.assign(Za.prototype, {
                crossOrigin: "anonymous",
                load: function(t, e, n, i) {
                    "" === this.texturePath && (this.texturePath = t.substring(0, t.lastIndexOf("/") + 1));
                    var r = this,
                        o = new Go(r.manager);
                    o.load(t, function(n) {
                        var o = null;
                        try {
                            o = JSON.parse(n)
                        } catch (e) {
                            return void 0 !== i && i(e), void console.error("THREE:ObjectLoader: Can't parse " + t + ".", e.message)
                        }
                        var a = o.metadata;
                        void 0 !== a && void 0 !== a.type && "geometry" !== a.type.toLowerCase() ? r.parse(o, e) : console.error("THREE.ObjectLoader: Can't load " + t + ". Use THREE.JSONLoader instead.")
                    }, n, i)
                },
                setTexturePath: function(t) {
                    return this.texturePath = t, this
                },
                setCrossOrigin: function(t) {
                    return this.crossOrigin = t, this
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
                            var r = (new va).fromJSON(t[n]);
                            e[r.uuid] = r
                        }
                    return e
                },
                parseGeometries: function(t, e) {
                    var n = {};
                    if (void 0 !== t)
                        for (var i = new Ya, r = new Va, o = 0, a = t.length; o < a; o++) {
                            var s, c = t[o];
                            switch (c.type) {
                                case "PlaneGeometry":
                                case "PlaneBufferGeometry":
                                    s = new So[c.type](c.width, c.height, c.widthSegments, c.heightSegments);
                                    break;
                                case "BoxGeometry":
                                case "BoxBufferGeometry":
                                case "CubeGeometry":
                                    s = new So[c.type](c.width, c.height, c.depth, c.widthSegments, c.heightSegments, c.depthSegments);
                                    break;
                                case "CircleGeometry":
                                case "CircleBufferGeometry":
                                    s = new So[c.type](c.radius, c.segments, c.thetaStart, c.thetaLength);
                                    break;
                                case "CylinderGeometry":
                                case "CylinderBufferGeometry":
                                    s = new So[c.type](c.radiusTop, c.radiusBottom, c.height, c.radialSegments, c.heightSegments, c.openEnded, c.thetaStart, c.thetaLength);
                                    break;
                                case "ConeGeometry":
                                case "ConeBufferGeometry":
                                    s = new So[c.type](c.radius, c.height, c.radialSegments, c.heightSegments, c.openEnded, c.thetaStart, c.thetaLength);
                                    break;
                                case "SphereGeometry":
                                case "SphereBufferGeometry":
                                    s = new So[c.type](c.radius, c.widthSegments, c.heightSegments, c.phiStart, c.phiLength, c.thetaStart, c.thetaLength);
                                    break;
                                case "DodecahedronGeometry":
                                case "DodecahedronBufferGeometry":
                                case "IcosahedronGeometry":
                                case "IcosahedronBufferGeometry":
                                case "OctahedronGeometry":
                                case "OctahedronBufferGeometry":
                                case "TetrahedronGeometry":
                                case "TetrahedronBufferGeometry":
                                    s = new So[c.type](c.radius, c.detail);
                                    break;
                                case "RingGeometry":
                                case "RingBufferGeometry":
                                    s = new So[c.type](c.innerRadius, c.outerRadius, c.thetaSegments, c.phiSegments, c.thetaStart, c.thetaLength);
                                    break;
                                case "TorusGeometry":
                                case "TorusBufferGeometry":
                                    s = new So[c.type](c.radius, c.tube, c.radialSegments, c.tubularSegments, c.arc);
                                    break;
                                case "TorusKnotGeometry":
                                case "TorusKnotBufferGeometry":
                                    s = new So[c.type](c.radius, c.tube, c.tubularSegments, c.radialSegments, c.p, c.q);
                                    break;
                                case "LatheGeometry":
                                case "LatheBufferGeometry":
                                    s = new So[c.type](c.points, c.segments, c.phiStart, c.phiLength);
                                    break;
                                case "PolyhedronGeometry":
                                case "PolyhedronBufferGeometry":
                                    s = new So[c.type](c.vertices, c.indices, c.radius, c.details);
                                    break;
                                case "ShapeGeometry":
                                case "ShapeBufferGeometry":
                                    for (var l = [], h = 0, u = c.shapes.length; h < u; h++) {
                                        var p = e[c.shapes[h]];
                                        l.push(p)
                                    }
                                    s = new So[c.type](l, c.curveSegments);
                                    break;
                                case "ExtrudeGeometry":
                                case "ExtrudeBufferGeometry":
                                    for (var l = [], h = 0, u = c.shapes.length; h < u; h++) {
                                        var p = e[c.shapes[h]];
                                        l.push(p)
                                    }
                                    var d = c.options.extrudePath;
                                    void 0 !== d && (c.options.extrudePath = (new da[d.type]).fromJSON(d)), s = new So[c.type](l, c.options);
                                    break;
                                case "BufferGeometry":
                                    s = r.parse(c);
                                    break;
                                case "Geometry":
                                    s = i.parse(c, this.texturePath).geometry;
                                    break;
                                default:
                                    console.warn('THREE.ObjectLoader: Unsupported geometry type "' + c.type + '"');
                                    continue
                            }
                            s.uuid = c.uuid, void 0 !== c.name && (s.name = c.name), !0 === s.isBufferGeometry && void 0 !== c.userData && (s.userData = c.userData), n[c.uuid] = s
                        }
                    return n
                },
                parseMaterials: function(t, e) {
                    var n = {};
                    if (void 0 !== t) {
                        var i = new ja;
                        i.setTextures(e);
                        for (var r = 0, o = t.length; r < o; r++) {
                            var a = t[r];
                            if ("MultiMaterial" === a.type) {
                                for (var s = [], c = 0; c < a.materials.length; c++) s.push(i.parse(a.materials[c]));
                                n[a.uuid] = s
                            } else n[a.uuid] = i.parse(a)
                        }
                    }
                    return n
                },
                parseAnimations: function(t) {
                    for (var e = [], n = 0; n < t.length; n++) {
                        var i = t[n],
                            r = za.parse(i);
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
                            n.manager.itemEnd(t), n.manager.itemError(t)
                        })
                    }
                    if (void 0 !== t && t.length > 0) {
                        var o = new ko(e),
                            a = new Wo(o);
                        a.setCrossOrigin(this.crossOrigin);
                        for (var s = 0, c = t.length; s < c; s++) {
                            var l = t[s],
                                h = l.url;
                            if (Array.isArray(h)) {
                                i[l.uuid] = [];
                                for (var u = 0, p = h.length; u < p; u++) {
                                    var d = h[u],
                                        f = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(d) ? d : n.texturePath + d;
                                    i[l.uuid].push(r(f))
                                }
                            } else {
                                var f = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(l.url) ? l.url : n.texturePath + l.url;
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
                            void 0 === s.image && console.warn('THREE.ObjectLoader: No "image" specified for', s.uuid), void 0 === e[s.image] && console.warn("THREE.ObjectLoader: Undefined image", s.image), (a = Array.isArray(e[s.image]) ? new En(e[s.image]) : new Pe(e[s.image])).needsUpdate = !0, a.uuid = s.uuid, void 0 !== s.name && (a.name = s.name), void 0 !== s.mapping && (a.mapping = n(s.mapping, Ka)), void 0 !== s.offset && a.offset.fromArray(s.offset), void 0 !== s.repeat && a.repeat.fromArray(s.repeat), void 0 !== s.center && a.center.fromArray(s.center), void 0 !== s.rotation && (a.rotation = s.rotation), void 0 !== s.wrap && (a.wrapS = n(s.wrap[0], Qa), a.wrapT = n(s.wrap[1], Qa)), void 0 !== s.format && (a.format = s.format), void 0 !== s.minFilter && (a.minFilter = n(s.minFilter, $a)), void 0 !== s.magFilter && (a.magFilter = n(s.magFilter, $a)), void 0 !== s.anisotropy && (a.anisotropy = s.anisotropy), void 0 !== s.flipY && (a.flipY = s.flipY), i[s.uuid] = a
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
                            i = new Yi, void 0 !== t.background && Number.isInteger(t.background) && (i.background = new Ue(t.background)), void 0 !== t.fog && ("Fog" === t.fog.type ? i.fog = new qi(t.fog.color, t.fog.near, t.fog.far) : "FogExp2" === t.fog.type && (i.fog = new Xi(t.fog.color, t.fog.density)));
                            break;
                        case "PerspectiveCamera":
                            i = new Gi(t.fov, t.aspect, t.near, t.far), void 0 !== t.focus && (i.focus = t.focus), void 0 !== t.zoom && (i.zoom = t.zoom), void 0 !== t.filmGauge && (i.filmGauge = t.filmGauge), void 0 !== t.filmOffset && (i.filmOffset = t.filmOffset), void 0 !== t.view && (i.view = Object.assign({}, t.view));
                            break;
                        case "OrthographicCamera":
                            i = new Ma(t.left, t.right, t.top, t.bottom, t.near, t.far), void 0 !== t.zoom && (i.zoom = t.zoom), void 0 !== t.view && (i.view = Object.assign({}, t.view));
                            break;
                        case "AmbientLight":
                            i = new Sa(t.color, t.intensity);
                            break;
                        case "DirectionalLight":
                            i = new Ea(t.color, t.intensity);
                            break;
                        case "PointLight":
                            i = new wa(t.color, t.intensity, t.distance, t.decay);
                            break;
                        case "RectAreaLight":
                            i = new Aa(t.color, t.intensity, t.width, t.height);
                            break;
                        case "SpotLight":
                            i = new ba(t.color, t.intensity, t.distance, t.angle, t.penumbra, t.decay);
                            break;
                        case "HemisphereLight":
                            i = new ya(t.color, t.groundColor, t.intensity);
                            break;
                        case "SkinnedMesh":
                            console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.");
                        case "Mesh":
                            var a = r(t.geometry),
                                s = o(t.material);
                            i = a.bones && a.bones.length > 0 ? new nr(a, s) : new Mn(a, s);
                            break;
                        case "LOD":
                            i = new $i;
                            break;
                        case "Line":
                            i = new rr(r(t.geometry), o(t.material), t.mode);
                            break;
                        case "LineLoop":
                            i = new ar(r(t.geometry), o(t.material));
                            break;
                        case "LineSegments":
                            i = new or(r(t.geometry), o(t.material));
                            break;
                        case "PointCloud":
                        case "Points":
                            i = new cr(r(t.geometry), o(t.material));
                            break;
                        case "Sprite":
                            i = new Qi(o(t.material));
                            break;
                        case "Group":
                            i = new Ui;
                            break;
                        default:
                            i = new Ze
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
            var Ja, Ka = {
                    UVMapping: 300,
                    CubeReflectionMapping: Q,
                    CubeRefractionMapping: $,
                    EquirectangularReflectionMapping: tt,
                    EquirectangularRefractionMapping: et,
                    SphericalReflectionMapping: nt,
                    CubeUVReflectionMapping: it,
                    CubeUVRefractionMapping: rt
                },
                Qa = {
                    RepeatWrapping: ot,
                    ClampToEdgeWrapping: at,
                    MirroredRepeatWrapping: st
                },
                $a = {
                    NearestFilter: ct,
                    NearestMipMapNearestFilter: lt,
                    NearestMipMapLinearFilter: ht,
                    LinearFilter: ut,
                    LinearMipMapNearestFilter: pt,
                    LinearMipMapLinearFilter: dt
                };

            function ts(t) {
                "undefined" == typeof createImageBitmap && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), "undefined" == typeof fetch && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.manager = void 0 !== t ? t : Uo, this.options = void 0
            }

            function es() {
                this.type = "ShapePath", this.color = new Ue, this.subPaths = [], this.currentPath = null
            }

            function ns(t) {
                this.type = "Font", this.data = t
            }

            function is(t, e, n, i, r) {
                var o = r.glyphs[t] || r.glyphs["?"];
                if (o) {
                    var a, s, c, l, h, u, p, d, f = new es;
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
            }

            function rs(t) {
                this.manager = void 0 !== t ? t : Uo
            }
            ts.prototype = {
                constructor: ts,
                setOptions: function(t) {
                    return this.options = t, this
                },
                load: function(t, e, n, i) {
                    void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
                    var r = this,
                        o = Fo.get(t);
                    if (void 0 !== o) return r.manager.itemStart(t), setTimeout(function() {
                        e && e(o), r.manager.itemEnd(t)
                    }, 0), o;
                    fetch(t).then(function(t) {
                        return t.blob()
                    }).then(function(t) {
                        return createImageBitmap(t, r.options)
                    }).then(function(n) {
                        Fo.add(t, n), e && e(n), r.manager.itemEnd(t)
                    }).catch(function(e) {
                        i && i(e), r.manager.itemEnd(t), r.manager.itemError(t)
                    })
                },
                setCrossOrigin: function() {
                    return this
                },
                setPath: function(t) {
                    return this.path = t, this
                }
            }, Object.assign(es.prototype, {
                moveTo: function(t, e) {
                    this.currentPath = new ma, this.subPaths.push(this.currentPath), this.currentPath.moveTo(t, e)
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
                                o = new va;
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
                    var r = to.isClockWise,
                        o = this.subPaths;
                    if (0 === o.length) return [];
                    if (!0 === e) return n(o);
                    var a, s, c, l = [];
                    if (1 === o.length) return s = o[0], (c = new va).curves = s.curves, l.push(c), l;
                    var h = !r(o[0].getPoints());
                    h = t ? !h : h;
                    var u, p, d = [],
                        f = [],
                        m = [],
                        v = 0;
                    f[v] = void 0, m[v] = [];
                    for (var g = 0, y = o.length; g < y; g++) s = o[g], u = s.getPoints(), a = r(u), (a = t ? !a : a) ? (!h && f[v] && v++, f[v] = {
                        s: new va,
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
            }), Object.assign(ns.prototype, {
                isFont: !0,
                generateShapes: function(t, e) {
                    void 0 === e && (e = 100);
                    for (var n = [], i = function(t, e, n) {
                            for (var i = Array.from ? Array.from(t) : String(t).split(""), r = e / n.resolution, o = (n.boundingBox.yMax - n.boundingBox.yMin + n.underlineThickness) * r, a = [], s = 0, c = 0, l = 0; l < i.length; l++) {
                                var h = i[l];
                                if ("\n" === h) s = 0, c -= o;
                                else {
                                    var u = is(h, r, s, c, n);
                                    s += u.offsetX, a.push(u.path)
                                }
                            }
                            return a
                        }(t, e, this.data), r = 0, o = i.length; r < o; r++) Array.prototype.push.apply(n, i[r].toShapes());
                    return n
                }
            }), Object.assign(rs.prototype, {
                load: function(t, e, n, i) {
                    var r = this,
                        o = new Go(this.manager);
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
                    return new ns(t)
                },
                setPath: function(t) {
                    return this.path = t, this
                }
            });
            var os, as, ss = {
                getContext: function() {
                    return void 0 === Ja && (Ja = new(window.AudioContext || window.webkitAudioContext)), Ja
                },
                setContext: function(t) {
                    Ja = t
                }
            };

            function cs(t) {
                this.manager = void 0 !== t ? t : Uo
            }

            function ls() {
                this.type = "StereoCamera", this.aspect = 1, this.eyeSep = .064, this.cameraL = new Gi, this.cameraL.layers.enable(1), this.cameraL.matrixAutoUpdate = !1, this.cameraR = new Gi, this.cameraR.layers.enable(2), this.cameraR.matrixAutoUpdate = !1
            }

            function hs(t, e, n) {
                Ze.call(this), this.type = "CubeCamera";
                var i = new Gi(90, 1, t, e);
                i.up.set(0, -1, 0), i.lookAt(new Te(1, 0, 0)), this.add(i);
                var r = new Gi(90, 1, t, e);
                r.up.set(0, -1, 0), r.lookAt(new Te(-1, 0, 0)), this.add(r);
                var o = new Gi(90, 1, t, e);
                o.up.set(0, 0, 1), o.lookAt(new Te(0, 1, 0)), this.add(o);
                var a = new Gi(90, 1, t, e);
                a.up.set(0, 0, -1), a.lookAt(new Te(0, -1, 0)), this.add(a);
                var s = new Gi(90, 1, t, e);
                s.up.set(0, -1, 0), s.lookAt(new Te(0, 0, 1)), this.add(s);
                var c = new Gi(90, 1, t, e);
                c.up.set(0, -1, 0), c.lookAt(new Te(0, 0, -1)), this.add(c);
                var l = {
                    format: At,
                    magFilter: ut,
                    minFilter: ut
                };
                this.renderTarget = new Ce(n, n, l), this.renderTarget.texture.name = "CubeCamera", this.update = function(t, e) {
                    null === this.parent && this.updateMatrixWorld();
                    var n = this.renderTarget,
                        l = n.texture.generateMipmaps;
                    n.texture.generateMipmaps = !1, n.activeCubeFace = 0, t.render(e, i, n), n.activeCubeFace = 1, t.render(e, r, n), n.activeCubeFace = 2, t.render(e, o, n), n.activeCubeFace = 3, t.render(e, a, n), n.activeCubeFace = 4, t.render(e, s, n), n.texture.generateMipmaps = l, n.activeCubeFace = 5, t.render(e, c, n), t.setRenderTarget(null)
                }, this.clear = function(t, e, n, i) {
                    for (var r = this.renderTarget, o = 0; o < 6; o++) r.activeCubeFace = o, t.setRenderTarget(r), t.clear(e, n, i);
                    t.setRenderTarget(null)
                }
            }

            function us() {
                Ze.call(this), this.type = "AudioListener", this.context = ss.getContext(), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.filter = null
            }

            function ps(t) {
                Ze.call(this), this.type = "Audio", this.context = t.context, this.gain = this.context.createGain(), this.gain.connect(t.getInput()), this.autoplay = !1, this.buffer = null, this.loop = !1, this.startTime = 0, this.offset = 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.sourceType = "empty", this.filters = []
            }

            function ds(t) {
                ps.call(this, t), this.panner = this.context.createPanner(), this.panner.connect(this.gain)
            }

            function fs(t, e) {
                this.analyser = t.context.createAnalyser(), this.analyser.fftSize = void 0 !== e ? e : 2048, this.data = new Uint8Array(this.analyser.frequencyBinCount), t.getOutput().connect(this.analyser)
            }

            function ms(t, e, n) {
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

            function vs(t, e, n) {
                var i = n || gs.parseTrackName(e);
                this._targetGroup = t, this._bindings = t.subscribe_(e, i)
            }

            function gs(t, e, n) {
                this.path = e, this.parsedPath = n || gs.parseTrackName(e), this.node = gs.findNode(t, this.parsedPath.nodeName) || t, this.rootNode = t
            }

            function ys() {
                this.uuid = xe.generateUUID(), this._objects = Array.prototype.slice.call(arguments), this.nCachedObjects_ = 0;
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

            function _s(t, e, n) {
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

            function xs(t) {
                this._root = t, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1
            }

            function bs(t) {
                "string" == typeof t && (console.warn("THREE.Uniform: Type parameter is no longer needed."), t = arguments[1]), this.value = t
            }

            function ws() {
                pn.call(this), this.type = "InstancedBufferGeometry", this.maxInstancedCount = void 0
            }

            function Ms(t, e, n) {
                Zi.call(this, t, e), this.meshPerAttribute = n || 1
            }

            function Ts(t, e, n, i) {
                "number" == typeof n && (i = n, n = !1, console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")), Qe.call(this, t, e, n), this.meshPerAttribute = i || 1
            }

            function Es(t, e, n, i) {
                this.ray = new xn(t, e), this.near = n || 0, this.far = i || 1 / 0, this.params = {
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

            function Ss(t, e) {
                return t.distance - e.distance
            }

            function As(t, e, n, i) {
                if (!1 !== t.visible && (t.raycast(e, n), !0 === i))
                    for (var r = t.children, o = 0, a = r.length; o < a; o++) As(r[o], e, n, !0)
            }

            function Ps(t) {
                this.autoStart = void 0 === t || t, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1
            }

            function Ls(t, e, n) {
                return this.radius = void 0 !== t ? t : 1, this.phi = void 0 !== e ? e : 0, this.theta = void 0 !== n ? n : 0, this
            }

            function Rs(t, e, n) {
                return this.radius = void 0 !== t ? t : 1, this.theta = void 0 !== e ? e : 0, this.y = void 0 !== n ? n : 0, this
            }

            function Cs(t, e) {
                this.min = void 0 !== t ? t : new be(1 / 0, 1 / 0), this.max = void 0 !== e ? e : new be(-1 / 0, -1 / 0)
            }

            function Os(t, e) {
                this.start = void 0 !== t ? t : new Te, this.end = void 0 !== e ? e : new Te
            }

            function Is(t) {
                Ze.call(this), this.material = t, this.render = function() {}
            }

            function Ds(t, e, n, i) {
                this.object = t, this.size = void 0 !== e ? e : 1;
                var r = void 0 !== n ? n : 16711680,
                    o = void 0 !== i ? i : 1,
                    a = 0,
                    s = this.object.geometry;
                s && s.isGeometry ? a = 3 * s.faces.length : s && s.isBufferGeometry && (a = s.attributes.normal.count);
                var c = new pn,
                    l = new sn(2 * a * 3, 3);
                c.addAttribute("position", l), or.call(this, c, new ir({
                    color: r,
                    linewidth: o
                })), this.matrixAutoUpdate = !1, this.update()
            }

            function Ns(t, e) {
                Ze.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = e;
                for (var n = new pn, i = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 1], r = 0, o = 1; r < 32; r++, o++) {
                    var a = r / 32 * Math.PI * 2,
                        s = o / 32 * Math.PI * 2;
                    i.push(Math.cos(a), Math.sin(a), 1, Math.cos(s), Math.sin(s), 1)
                }
                n.addAttribute("position", new sn(i, 3));
                var c = new ir({
                    fog: !1
                });
                this.cone = new or(n, c), this.add(this.cone), this.update()
            }

            function Bs(t) {
                for (var e = function t(e) {
                        var n = [];
                        e && e.isBone && n.push(e);
                        for (var i = 0; i < e.children.length; i++) n.push.apply(n, t(e.children[i]));
                        return n
                    }(t), n = new pn, i = [], r = [], o = new Ue(0, 0, 1), a = new Ue(0, 1, 0), s = 0; s < e.length; s++) {
                    var c = e[s];
                    c.parent && c.parent.isBone && (i.push(0, 0, 0), i.push(0, 0, 0), r.push(o.r, o.g, o.b), r.push(a.r, a.g, a.b))
                }
                n.addAttribute("position", new sn(i, 3)), n.addAttribute("color", new sn(r, 3));
                var l = new ir({
                    vertexColors: d,
                    depthTest: !1,
                    depthWrite: !1,
                    transparent: !0
                });
                or.call(this, n, l), this.root = t, this.bones = e, this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1
            }

            function Hs(t, e, n) {
                this.light = t, this.light.updateMatrixWorld(), this.color = n;
                var i = new ho(e, 4, 2),
                    r = new wn({
                        wireframe: !0,
                        fog: !1
                    });
                Mn.call(this, i, r), this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = !1, this.update()
            }

            function Fs(t, e) {
                Ze.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = e;
                var n = new ir({
                        fog: !1
                    }),
                    i = new pn;
                i.addAttribute("position", new Qe(new Float32Array(15), 3)), this.line = new rr(i, n), this.add(this.line), this.update()
            }

            function ks(t, e, n) {
                Ze.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = n;
                var i = new br(e);
                i.rotateY(.5 * Math.PI), this.material = new wn({
                    wireframe: !0,
                    fog: !1
                }), void 0 === this.color && (this.material.vertexColors = d);
                var r = i.getAttribute("position"),
                    o = new Float32Array(3 * r.count);
                i.addAttribute("color", new Qe(o, 3)), this.add(new Mn(i, this.material)), this.update()
            }

            function Us(t, e, n, i) {
                t = t || 10, e = e || 10, n = new Ue(void 0 !== n ? n : 4473924), i = new Ue(void 0 !== i ? i : 8947848);
                for (var r = e / 2, o = t / e, a = t / 2, s = [], c = [], l = 0, h = 0, u = -a; l <= e; l++, u += o) {
                    s.push(-a, 0, u, a, 0, u), s.push(u, 0, -a, u, 0, a);
                    var p = l === r ? n : i;
                    p.toArray(c, h), h += 3, p.toArray(c, h), h += 3, p.toArray(c, h), h += 3, p.toArray(c, h), h += 3
                }
                var f = new pn;
                f.addAttribute("position", new sn(s, 3)), f.addAttribute("color", new sn(c, 3));
                var m = new ir({
                    vertexColors: d
                });
                or.call(this, f, m)
            }

            function zs(t, e, n, i, r, o) {
                t = t || 10, e = e || 16, n = n || 8, i = i || 64, r = new Ue(void 0 !== r ? r : 4473924), o = new Ue(void 0 !== o ? o : 8947848);
                var a, s, c, l, h, u, p, f = [],
                    m = [];
                for (l = 0; l <= e; l++) c = l / e * (2 * Math.PI), a = Math.sin(c) * t, s = Math.cos(c) * t, f.push(0, 0, 0), f.push(a, 0, s), p = 1 & l ? r : o, m.push(p.r, p.g, p.b), m.push(p.r, p.g, p.b);
                for (l = 0; l <= n; l++)
                    for (p = 1 & l ? r : o, u = t - t / n * l, h = 0; h < i; h++) c = h / i * (2 * Math.PI), a = Math.sin(c) * u, s = Math.cos(c) * u, f.push(a, 0, s), m.push(p.r, p.g, p.b), c = (h + 1) / i * (2 * Math.PI), a = Math.sin(c) * u, s = Math.cos(c) * u, f.push(a, 0, s), m.push(p.r, p.g, p.b);
                var v = new pn;
                v.addAttribute("position", new sn(f, 3)), v.addAttribute("color", new sn(m, 3));
                var g = new ir({
                    vertexColors: d
                });
                or.call(this, v, g)
            }

            function Gs(t, e, n, i) {
                this.object = t, this.size = void 0 !== e ? e : 1;
                var r = void 0 !== n ? n : 16776960,
                    o = void 0 !== i ? i : 1,
                    a = 0,
                    s = this.object.geometry;
                s && s.isGeometry ? a = s.faces.length : console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead.");
                var c = new pn,
                    l = new sn(2 * a * 3, 3);
                c.addAttribute("position", l), or.call(this, c, new ir({
                    color: r,
                    linewidth: o
                })), this.matrixAutoUpdate = !1, this.update()
            }

            function js(t, e, n) {
                Ze.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = n, void 0 === e && (e = 1);
                var i = new pn;
                i.addAttribute("position", new sn([-e, e, 0, e, e, 0, e, -e, 0, -e, -e, 0, -e, e, 0], 3));
                var r = new ir({
                    fog: !1
                });
                this.lightPlane = new rr(i, r), this.add(this.lightPlane), (i = new pn).addAttribute("position", new sn([0, 0, 0, 0, 0, 1], 3)), this.targetLine = new rr(i, r), this.add(this.targetLine), this.update()
            }

            function Vs(t) {
                var e = new pn,
                    n = new ir({
                        color: 16777215,
                        vertexColors: p
                    }),
                    i = [],
                    r = [],
                    o = {},
                    a = new Ue(16755200),
                    s = new Ue(16711680),
                    c = new Ue(43775),
                    l = new Ue(16777215),
                    h = new Ue(3355443);

                function u(t, e, n) {
                    d(t, n), d(e, n)
                }

                function d(t, e) {
                    i.push(0, 0, 0), r.push(e.r, e.g, e.b), void 0 === o[t] && (o[t] = []), o[t].push(i.length / 3 - 1)
                }
                u("n1", "n2", a), u("n2", "n4", a), u("n4", "n3", a), u("n3", "n1", a), u("f1", "f2", a), u("f2", "f4", a), u("f4", "f3", a), u("f3", "f1", a), u("n1", "f1", a), u("n2", "f2", a), u("n3", "f3", a), u("n4", "f4", a), u("p", "n1", s), u("p", "n2", s), u("p", "n3", s), u("p", "n4", s), u("u1", "u2", c), u("u2", "u3", c), u("u3", "u1", c), u("c", "t", l), u("p", "c", h), u("cn1", "cn2", h), u("cn3", "cn4", h), u("cf1", "cf2", h), u("cf3", "cf4", h), e.addAttribute("position", new sn(i, 3)), e.addAttribute("color", new sn(r, 3)), or.call(this, e, n), this.camera = t, this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = o, this.update()
            }

            function Ws(t, e) {
                this.object = t, void 0 === e && (e = 16776960);
                var n = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
                    i = new Float32Array(24),
                    r = new pn;
                r.setIndex(new Qe(n, 1)), r.addAttribute("position", new Qe(i, 3)), or.call(this, r, new ir({
                    color: e
                })), this.matrixAutoUpdate = !1, this.update()
            }

            function Xs(t, e) {
                this.type = "Box3Helper", this.box = t;
                var n = void 0 !== e ? e : 16776960,
                    i = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
                    r = new pn;
                r.setIndex(new Qe(i, 1)), r.addAttribute("position", new sn([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1], 3)), or.call(this, r, new ir({
                    color: n
                })), this.geometry.computeBoundingSphere()
            }

            function qs(t, e, n) {
                this.type = "PlaneHelper", this.plane = t, this.size = void 0 === e ? 1 : e;
                var i = void 0 !== n ? n : 16776960,
                    r = new pn;
                r.addAttribute("position", new sn([1, -1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0], 3)), r.computeBoundingSphere(), rr.call(this, r, new ir({
                    color: i
                }));
                var o = new pn;
                o.addAttribute("position", new sn([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1, 1, -1, 1], 3)), o.computeBoundingSphere(), this.add(new Mn(o, new wn({
                    color: i,
                    opacity: .2,
                    transparent: !0,
                    depthWrite: !1
                })))
            }

            function Ys(t, e, n, i, r, o) {
                Ze.call(this), void 0 === i && (i = 16776960), void 0 === n && (n = 1), void 0 === r && (r = .2 * n), void 0 === o && (o = .2 * r), void 0 === os && ((os = new pn).addAttribute("position", new sn([0, 0, 0, 0, 1, 0], 3)), (as = new bo(0, .5, 1, 5, 1)).translate(0, -.5, 0)), this.position.copy(e), this.line = new rr(os, new ir({
                    color: i
                })), this.line.matrixAutoUpdate = !1, this.add(this.line), this.cone = new Mn(as, new wn({
                    color: i
                })), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(t), this.setLength(n, r, o)
            }

            function Zs(t) {
                var e = [0, 0, 0, t = t || 1, 0, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 0, t],
                    n = new pn;
                n.addAttribute("position", new sn(e, 3)), n.addAttribute("color", new sn([1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1], 3));
                var i = new ir({
                    vertexColors: d
                });
                or.call(this, n, i)
            }

            function Js(t) {
                console.warn("THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."), na.call(this, t), this.type = "catmullrom", this.closed = !0
            }

            function Ks(t) {
                console.warn("THREE.SplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."), na.call(this, t), this.type = "catmullrom"
            }

            function Qs(t) {
                console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."), na.call(this, t), this.type = "catmullrom"
            }
            Object.assign(cs.prototype, {
                    load: function(t, e, n, i) {
                        var r = new Go(this.manager);
                        r.setResponseType("arraybuffer"), r.load(t, function(t) {
                            var n = t.slice(0),
                                i = ss.getContext();
                            i.decodeAudioData(n, function(t) {
                                e(t)
                            })
                        }, n, i)
                    }
                }), Object.assign(ls.prototype, {
                    update: function() {
                        var t, e, n, i, r, o, a, s, c = new we,
                            l = new we;
                        return function(h) {
                            var u = t !== this || e !== h.focus || n !== h.fov || i !== h.aspect * this.aspect || r !== h.near || o !== h.far || a !== h.zoom || s !== this.eyeSep;
                            if (u) {
                                t = this, e = h.focus, n = h.fov, i = h.aspect * this.aspect, r = h.near, o = h.far, a = h.zoom;
                                var p, d, f = h.projectionMatrix.clone(),
                                    m = (s = this.eyeSep / 2) * r / e,
                                    v = r * Math.tan(xe.DEG2RAD * n * .5) / a;
                                l.elements[12] = -s, c.elements[12] = s, p = -v * i + m, d = v * i + m, f.elements[0] = 2 * r / (d - p), f.elements[8] = (d + p) / (d - p), this.cameraL.projectionMatrix.copy(f), p = -v * i - m, d = v * i - m, f.elements[0] = 2 * r / (d - p), f.elements[8] = (d + p) / (d - p), this.cameraR.projectionMatrix.copy(f)
                            }
                            this.cameraL.matrixWorld.copy(h.matrixWorld).multiply(l), this.cameraR.matrixWorld.copy(h.matrixWorld).multiply(c)
                        }
                    }()
                }), hs.prototype = Object.create(Ze.prototype), hs.prototype.constructor = hs, us.prototype = Object.assign(Object.create(Ze.prototype), {
                    constructor: us,
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
                    updateMatrixWorld: function() {
                        var t = new Te,
                            e = new Me,
                            n = new Te,
                            i = new Te;
                        return function(r) {
                            Ze.prototype.updateMatrixWorld.call(this, r);
                            var o = this.context.listener,
                                a = this.up;
                            this.matrixWorld.decompose(t, e, n), i.set(0, 0, -1).applyQuaternion(e), o.positionX ? (o.positionX.setValueAtTime(t.x, this.context.currentTime), o.positionY.setValueAtTime(t.y, this.context.currentTime), o.positionZ.setValueAtTime(t.z, this.context.currentTime), o.forwardX.setValueAtTime(i.x, this.context.currentTime), o.forwardY.setValueAtTime(i.y, this.context.currentTime), o.forwardZ.setValueAtTime(i.z, this.context.currentTime), o.upX.setValueAtTime(a.x, this.context.currentTime), o.upY.setValueAtTime(a.y, this.context.currentTime), o.upZ.setValueAtTime(a.z, this.context.currentTime)) : (o.setPosition(t.x, t.y, t.z), o.setOrientation(i.x, i.y, i.z, a.x, a.y, a.z))
                        }
                    }()
                }), ps.prototype = Object.assign(Object.create(Ze.prototype), {
                    constructor: ps,
                    getOutput: function() {
                        return this.gain
                    },
                    setNodeSource: function(t) {
                        return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = t, this.connect(), this
                    },
                    setMediaElementSource: function(t) {
                        return this.hasPlaybackControl = !1, this.sourceType = "mediaNode", this.source = this.context.createMediaElementSource(t), this.connect(), this
                    },
                    setBuffer: function(t) {
                        return this.buffer = t, this.sourceType = "buffer", this.autoplay && this.play(), this
                    },
                    play: function() {
                        if (!0 !== this.isPlaying) {
                            if (!1 !== this.hasPlaybackControl) {
                                var t = this.context.createBufferSource();
                                return t.buffer = this.buffer, t.loop = this.loop, t.onended = this.onEnded.bind(this), t.playbackRate.setValueAtTime(this.playbackRate, this.startTime), this.startTime = this.context.currentTime, t.start(this.startTime, this.offset), this.isPlaying = !0, this.source = t, this.connect()
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
                    getFilter: function() {
                        return this.getFilters()[0]
                    },
                    setFilter: function(t) {
                        return this.setFilters(t ? [t] : [])
                    },
                    setPlaybackRate: function(t) {
                        if (!1 !== this.hasPlaybackControl) return this.playbackRate = t, !0 === this.isPlaying && this.source.playbackRate.setValueAtTime(this.playbackRate, this.context.currentTime), this;
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
                }), ds.prototype = Object.assign(Object.create(ps.prototype), {
                    constructor: ds,
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
                    updateMatrixWorld: function() {
                        var t = new Te,
                            e = new Me,
                            n = new Te,
                            i = new Te;
                        return function(r) {
                            Ze.prototype.updateMatrixWorld.call(this, r);
                            var o = this.panner;
                            this.matrixWorld.decompose(t, e, n), i.set(0, 0, 1).applyQuaternion(e), o.setPosition(t.x, t.y, t.z), o.setOrientation(i.x, i.y, i.z)
                        }
                    }()
                }), Object.assign(fs.prototype, {
                    getFrequencyData: function() {
                        return this.analyser.getByteFrequencyData(this.data), this.data
                    },
                    getAverageFrequency: function() {
                        for (var t = 0, e = this.getFrequencyData(), n = 0; n < e.length; n++) t += e[n];
                        return t / e.length
                    }
                }), Object.assign(ms.prototype, {
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
                        Me.slerpFlat(t, e, t, e, t, n, i)
                    },
                    _lerp: function(t, e, n, i, r) {
                        for (var o = 1 - i, a = 0; a !== r; ++a) {
                            var s = e + a;
                            t[s] = t[s] * o + t[n + a] * i
                        }
                    }
                }), Object.assign(vs.prototype, {
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
                }), Object.assign(gs, {
                    Composite: vs,
                    create: function(t, e, n) {
                        return t && t.isAnimationObjectGroup ? new gs.Composite(t, e, n) : new gs(t, e, n)
                    },
                    sanitizeNodeName: function() {
                        var t = new RegExp("[\\[\\]\\.:\\/]", "g");
                        return function(e) {
                            return e.replace(/\s/g, "_").replace(t, "")
                        }
                    }(),
                    parseTrackName: function() {
                        var t = "[^\\[\\]\\.:\\/]",
                            e = "[^" + "\\[\\]\\.:\\/".replace("\\.", "") + "]",
                            n = /((?:WC+[\/:])*)/.source.replace("WC", t),
                            i = /(WCOD+)?/.source.replace("WCOD", e),
                            r = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", t),
                            o = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", t),
                            a = new RegExp("^" + n + i + r + o + "$"),
                            s = ["material", "materials", "bones"];
                        return function(t) {
                            var e = a.exec(t);
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
                                var r = n.nodeName.substring(i + 1); - 1 !== s.indexOf(r) && (n.nodeName = n.nodeName.substring(0, i), n.objectName = r)
                            }
                            if (null === n.propertyName || 0 === n.propertyName.length) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t);
                            return n
                        }
                    }(),
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
                }), Object.assign(gs.prototype, {
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
                        if (t || (t = gs.findNode(this.rootNode, e.nodeName) || this.rootNode, this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, t) {
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
                Object.assign(gs.prototype, {
                    _getValue_unbound: gs.prototype.getValue,
                    _setValue_unbound: gs.prototype.setValue
                }), Object.assign(ys.prototype, {
                    isAnimationObjectGroup: !0,
                    add: function() {
                        for (var t = this._objects, e = t.length, n = this.nCachedObjects_, i = this._indicesByUUID, r = this._paths, o = this._parsedPaths, a = this._bindings, s = a.length, c = void 0, l = 0, h = arguments.length; l !== h; ++l) {
                            var u = arguments[l],
                                p = u.uuid,
                                d = i[p];
                            if (void 0 === d) {
                                d = e++, i[p] = d, t.push(u);
                                for (var f = 0, m = s; f !== m; ++f) a[f].push(new gs(u, r[f], o[f]))
                            } else if (d < n) {
                                c = t[d];
                                var v = --n,
                                    g = t[v];
                                i[g.uuid] = d, t[d] = g, i[p] = v, t[v] = u;
                                for (var f = 0, m = s; f !== m; ++f) {
                                    var y = a[f],
                                        _ = y[v],
                                        x = y[d];
                                    y[d] = _, void 0 === x && (x = new gs(u, r[f], o[f])), y[v] = x
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
                            h[u] = new gs(d, t, e)
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
                }), Object.assign(_s.prototype, {
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
                                    if (!(e < 0)) break t;
                                    e = 0
                                }
                                this.clampWhenFinished ? this.paused = !0 : this.enabled = !1,
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
                                if (s <= 0) this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, e = t > 0 ? n : 0, this._mixer.dispatchEvent({
                                    type: "finished",
                                    action: this,
                                    direction: t > 0 ? 1 : -1
                                });
                                else {
                                    if (1 === s) {
                                        var c = t < 0;
                                        this._setEndings(c, !c, o)
                                    } else this._setEndings(!1, !1, o);
                                    this._loopCount = r, this._mixer.dispatchEvent({
                                        type: "loop",
                                        action: this,
                                        loopDelta: a
                                    })
                                }
                            }
                            if (o && 1 == (1 & r)) return this.time = e, n - e
                        }
                        return this.time = e, e
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
                }), xs.prototype = Object.assign(Object.create(e.prototype), {
                    constructor: xs,
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
                                ++(d = new ms(gs.create(n, p, f), u.ValueTypeName, u.getValueSize())).referenceCount, this._addInactiveBinding(d, s, p), o[h] = d
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
                        s._cacheIndex = c, e[c] = s, e.pop(), delete a[r];
                        t: {
                            for (var l in a) break t;delete o[i]
                        }
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
                        return void 0 === n && ((n = new Ca(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer)).__cacheIndex = e, t[e] = n), n
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
                            r = "string" == typeof t ? za.findByName(n, t) : t,
                            o = null !== r ? r.uuid : t,
                            a = this._actionsByClip[o],
                            s = null;
                        if (void 0 !== a) {
                            var c = a.actionByRoot[i];
                            if (void 0 !== c) return c;
                            s = a.knownActions[0], null === r && (r = s._clip)
                        }
                        if (null === r) return null;
                        var l = new _s(this, r, e);
                        return this._bindAction(l, s), this._addInactiveAction(l, o, i), l
                    },
                    existingAction: function(t, e) {
                        var n = e || this._root,
                            i = n.uuid,
                            r = "string" == typeof t ? za.findByName(n, t) : t,
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
                }), bs.prototype.clone = function() {
                    return new bs(void 0 === this.value.clone ? this.value : this.value.clone())
                }, ws.prototype = Object.assign(Object.create(pn.prototype), {
                    constructor: ws,
                    isInstancedBufferGeometry: !0,
                    copy: function(t) {
                        return pn.prototype.copy.call(this, t), this.maxInstancedCount = t.maxInstancedCount, this
                    },
                    clone: function() {
                        return (new this.constructor).copy(this)
                    }
                }), Ms.prototype = Object.assign(Object.create(Zi.prototype), {
                    constructor: Ms,
                    isInstancedInterleavedBuffer: !0,
                    copy: function(t) {
                        return Zi.prototype.copy.call(this, t), this.meshPerAttribute = t.meshPerAttribute, this
                    }
                }), Ts.prototype = Object.assign(Object.create(Qe.prototype), {
                    constructor: Ts,
                    isInstancedBufferAttribute: !0,
                    copy: function(t) {
                        return Qe.prototype.copy.call(this, t), this.meshPerAttribute = t.meshPerAttribute, this
                    }
                }), Object.assign(Es.prototype, {
                    linePrecision: 1,
                    set: function(t, e) {
                        this.ray.set(t, e)
                    },
                    setFromCamera: function(t, e) {
                        e && e.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(t.x, t.y, .5).unproject(e).sub(this.ray.origin).normalize()) : e && e.isOrthographicCamera ? (this.ray.origin.set(t.x, t.y, (e.near + e.far) / (e.near - e.far)).unproject(e), this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld)) : console.error("THREE.Raycaster: Unsupported camera type.")
                    },
                    intersectObject: function(t, e, n) {
                        var i = n || [];
                        return As(t, this, i, e), i.sort(Ss), i
                    },
                    intersectObjects: function(t, e, n) {
                        var i = n || [];
                        if (!1 === Array.isArray(t)) return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."), i;
                        for (var r = 0, o = t.length; r < o; r++) As(t[r], this, i, e);
                        return i.sort(Ss), i
                    }
                }), Object.assign(Ps.prototype, {
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
                }), Object.assign(Ls.prototype, {
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
                        return this.radius = Math.sqrt(t * t + e * e + n * n), 0 === this.radius ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t, n), this.phi = Math.acos(xe.clamp(e / this.radius, -1, 1))), this
                    }
                }), Object.assign(Rs.prototype, {
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
                }), Object.assign(Cs.prototype, {
                    set: function(t, e) {
                        return this.min.copy(t), this.max.copy(e), this
                    },
                    setFromPoints: function(t) {
                        this.makeEmpty();
                        for (var e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]);
                        return this
                    },
                    setFromCenterAndSize: function() {
                        var t = new be;
                        return function(e, n) {
                            var i = t.copy(n).multiplyScalar(.5);
                            return this.min.copy(e).sub(i), this.max.copy(e).add(i), this
                        }
                    }(),
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
                        return void 0 === t && (console.warn("THREE.Box2: .getCenter() target is now required"), t = new be), this.isEmpty() ? t.set(0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5)
                    },
                    getSize: function(t) {
                        return void 0 === t && (console.warn("THREE.Box2: .getSize() target is now required"), t = new be), this.isEmpty() ? t.set(0, 0) : t.subVectors(this.max, this.min)
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
                        return void 0 === e && (console.warn("THREE.Box2: .getParameter() target is now required"), e = new be), e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y))
                    },
                    intersectsBox: function(t) {
                        return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y)
                    },
                    clampPoint: function(t, e) {
                        return void 0 === e && (console.warn("THREE.Box2: .clampPoint() target is now required"), e = new be), e.copy(t).clamp(this.min, this.max)
                    },
                    distanceToPoint: function() {
                        var t = new be;
                        return function(e) {
                            var n = t.copy(e).clamp(this.min, this.max);
                            return n.sub(e).length()
                        }
                    }(),
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
                }), Object.assign(Os.prototype, {
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
                        return void 0 === t && (console.warn("THREE.Line3: .getCenter() target is now required"), t = new Te), t.addVectors(this.start, this.end).multiplyScalar(.5)
                    },
                    delta: function(t) {
                        return void 0 === t && (console.warn("THREE.Line3: .delta() target is now required"), t = new Te), t.subVectors(this.end, this.start)
                    },
                    distanceSq: function() {
                        return this.start.distanceToSquared(this.end)
                    },
                    distance: function() {
                        return this.start.distanceTo(this.end)
                    },
                    at: function(t, e) {
                        return void 0 === e && (console.warn("THREE.Line3: .at() target is now required"), e = new Te), this.delta(e).multiplyScalar(t).add(this.start)
                    },
                    closestPointToPointParameter: function() {
                        var t = new Te,
                            e = new Te;
                        return function(n, i) {
                            t.subVectors(n, this.start), e.subVectors(this.end, this.start);
                            var r = e.dot(e),
                                o = e.dot(t),
                                a = o / r;
                            return i && (a = xe.clamp(a, 0, 1)), a
                        }
                    }(),
                    closestPointToPoint: function(t, e, n) {
                        var i = this.closestPointToPointParameter(t, e);
                        return void 0 === n && (console.warn("THREE.Line3: .closestPointToPoint() target is now required"), n = new Te), this.delta(n).multiplyScalar(i).add(this.start)
                    },
                    applyMatrix4: function(t) {
                        return this.start.applyMatrix4(t), this.end.applyMatrix4(t), this
                    },
                    equals: function(t) {
                        return t.start.equals(this.start) && t.end.equals(this.end)
                    }
                }), Is.prototype = Object.create(Ze.prototype), Is.prototype.constructor = Is, Is.prototype.isImmediateRenderObject = !0, Ds.prototype = Object.create(or.prototype), Ds.prototype.constructor = Ds, Ds.prototype.update = function() {
                    var t = new Te,
                        e = new Te,
                        n = new Ee;
                    return function() {
                        var i = ["a", "b", "c"];
                        this.object.updateMatrixWorld(!0), n.getNormalMatrix(this.object.matrixWorld);
                        var r = this.object.matrixWorld,
                            o = this.geometry.attributes.position,
                            a = this.object.geometry;
                        if (a && a.isGeometry)
                            for (var s = a.vertices, c = a.faces, l = 0, h = 0, u = c.length; h < u; h++)
                                for (var p = c[h], d = 0, f = p.vertexNormals.length; d < f; d++) {
                                    var m = s[p[i[d]]],
                                        v = p.vertexNormals[d];
                                    t.copy(m).applyMatrix4(r), e.copy(v).applyMatrix3(n).normalize().multiplyScalar(this.size).add(t), o.setXYZ(l, t.x, t.y, t.z), l += 1, o.setXYZ(l, e.x, e.y, e.z), l += 1
                                } else if (a && a.isBufferGeometry)
                                    for (var g = a.attributes.position, y = a.attributes.normal, l = 0, d = 0, f = g.count; d < f; d++) t.set(g.getX(d), g.getY(d), g.getZ(d)).applyMatrix4(r), e.set(y.getX(d), y.getY(d), y.getZ(d)), e.applyMatrix3(n).normalize().multiplyScalar(this.size).add(t), o.setXYZ(l, t.x, t.y, t.z), l += 1, o.setXYZ(l, e.x, e.y, e.z), l += 1;
                        o.needsUpdate = !0
                    }
                }(), Ns.prototype = Object.create(Ze.prototype), Ns.prototype.constructor = Ns, Ns.prototype.dispose = function() {
                    this.cone.geometry.dispose(), this.cone.material.dispose()
                }, Ns.prototype.update = function() {
                    var t = new Te,
                        e = new Te;
                    return function() {
                        this.light.updateMatrixWorld();
                        var n = this.light.distance ? this.light.distance : 1e3,
                            i = n * Math.tan(this.light.angle);
                        this.cone.scale.set(i, i, n), t.setFromMatrixPosition(this.light.matrixWorld), e.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(e.sub(t)), void 0 !== this.color ? this.cone.material.color.set(this.color) : this.cone.material.color.copy(this.light.color)
                    }
                }(), Bs.prototype = Object.create(or.prototype), Bs.prototype.constructor = Bs, Bs.prototype.updateMatrixWorld = function() {
                    var t = new Te,
                        e = new we,
                        n = new we;
                    return function(i) {
                        var r = this.bones,
                            o = this.geometry,
                            a = o.getAttribute("position");
                        n.getInverse(this.root.matrixWorld);
                        for (var s = 0, c = 0; s < r.length; s++) {
                            var l = r[s];
                            l.parent && l.parent.isBone && (e.multiplyMatrices(n, l.matrixWorld), t.setFromMatrixPosition(e), a.setXYZ(c, t.x, t.y, t.z), e.multiplyMatrices(n, l.parent.matrixWorld), t.setFromMatrixPosition(e), a.setXYZ(c + 1, t.x, t.y, t.z), c += 2)
                        }
                        o.getAttribute("position").needsUpdate = !0, Ze.prototype.updateMatrixWorld.call(this, i)
                    }
                }(), Hs.prototype = Object.create(Mn.prototype), Hs.prototype.constructor = Hs, Hs.prototype.dispose = function() {
                    this.geometry.dispose(), this.material.dispose()
                }, Hs.prototype.update = function() {
                    void 0 !== this.color ? this.material.color.set(this.color) : this.material.color.copy(this.light.color)
                }, Fs.prototype = Object.create(Ze.prototype), Fs.prototype.constructor = Fs, Fs.prototype.dispose = function() {
                    this.children[0].geometry.dispose(), this.children[0].material.dispose()
                }, Fs.prototype.update = function() {
                    var t = .5 * this.light.width,
                        e = .5 * this.light.height,
                        n = this.line.geometry.attributes.position,
                        i = n.array;
                    i[0] = t, i[1] = -e, i[2] = 0, i[3] = t, i[4] = e, i[5] = 0, i[6] = -t, i[7] = e, i[8] = 0, i[9] = -t, i[10] = -e, i[11] = 0, i[12] = t, i[13] = -e, i[14] = 0, n.needsUpdate = !0, void 0 !== this.color ? this.line.material.color.set(this.color) : this.line.material.color.copy(this.light.color)
                }, ks.prototype = Object.create(Ze.prototype), ks.prototype.constructor = ks, ks.prototype.dispose = function() {
                    this.children[0].geometry.dispose(), this.children[0].material.dispose()
                }, ks.prototype.update = function() {
                    var t = new Te,
                        e = new Ue,
                        n = new Ue;
                    return function() {
                        var i = this.children[0];
                        if (void 0 !== this.color) this.material.color.set(this.color);
                        else {
                            var r = i.geometry.getAttribute("color");
                            e.copy(this.light.color), n.copy(this.light.groundColor);
                            for (var o = 0, a = r.count; o < a; o++) {
                                var s = o < a / 2 ? e : n;
                                r.setXYZ(o, s.r, s.g, s.b)
                            }
                            r.needsUpdate = !0
                        }
                        i.lookAt(t.setFromMatrixPosition(this.light.matrixWorld).negate())
                    }
                }(), Us.prototype = Object.create(or.prototype), Us.prototype.constructor = Us, zs.prototype = Object.create(or.prototype), zs.prototype.constructor = zs, Gs.prototype = Object.create(or.prototype), Gs.prototype.constructor = Gs, Gs.prototype.update = function() {
                    var t = new Te,
                        e = new Te,
                        n = new Ee;
                    return function() {
                        this.object.updateMatrixWorld(!0), n.getNormalMatrix(this.object.matrixWorld);
                        for (var i = this.object.matrixWorld, r = this.geometry.attributes.position, o = this.object.geometry, a = o.vertices, s = o.faces, c = 0, l = 0, h = s.length; l < h; l++) {
                            var u = s[l],
                                p = u.normal;
                            t.copy(a[u.a]).add(a[u.b]).add(a[u.c]).divideScalar(3).applyMatrix4(i), e.copy(p).applyMatrix3(n).normalize().multiplyScalar(this.size).add(t), r.setXYZ(c, t.x, t.y, t.z), c += 1, r.setXYZ(c, e.x, e.y, e.z), c += 1
                        }
                        r.needsUpdate = !0
                    }
                }(), js.prototype = Object.create(Ze.prototype), js.prototype.constructor = js, js.prototype.dispose = function() {
                    this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose()
                }, js.prototype.update = function() {
                    var t = new Te,
                        e = new Te,
                        n = new Te;
                    return function() {
                        t.setFromMatrixPosition(this.light.matrixWorld), e.setFromMatrixPosition(this.light.target.matrixWorld), n.subVectors(e, t), this.lightPlane.lookAt(n), void 0 !== this.color ? (this.lightPlane.material.color.set(this.color), this.targetLine.material.color.set(this.color)) : (this.lightPlane.material.color.copy(this.light.color), this.targetLine.material.color.copy(this.light.color)), this.targetLine.lookAt(n), this.targetLine.scale.z = n.length()
                    }
                }(), Vs.prototype = Object.create(or.prototype), Vs.prototype.constructor = Vs, Vs.prototype.update = function() {
                    var t, e, n = new Te,
                        i = new zi;

                    function r(r, o, a, s) {
                        n.set(o, a, s).unproject(i);
                        var c = e[r];
                        if (void 0 !== c)
                            for (var l = t.getAttribute("position"), h = 0, u = c.length; h < u; h++) l.setXYZ(c[h], n.x, n.y, n.z)
                    }
                    return function() {
                        t = this.geometry, e = this.pointMap, i.projectionMatrix.copy(this.camera.projectionMatrix), r("c", 0, 0, -1), r("t", 0, 0, 1), r("n1", -1, -1, -1), r("n2", 1, -1, -1), r("n3", -1, 1, -1), r("n4", 1, 1, -1), r("f1", -1, -1, 1), r("f2", 1, -1, 1), r("f3", -1, 1, 1), r("f4", 1, 1, 1), r("u1", .7, 1.1, -1), r("u2", -.7, 1.1, -1), r("u3", 0, 2, -1), r("cf1", -1, 0, 1), r("cf2", 1, 0, 1), r("cf3", 0, -1, 1), r("cf4", 0, 1, 1), r("cn1", -1, 0, -1), r("cn2", 1, 0, -1), r("cn3", 0, -1, -1), r("cn4", 0, 1, -1), t.getAttribute("position").needsUpdate = !0
                    }
                }(), Ws.prototype = Object.create(or.prototype), Ws.prototype.constructor = Ws, Ws.prototype.update = function() {
                    var t = new Ie;
                    return function(e) {
                        if (void 0 !== e && console.warn("THREE.BoxHelper: .update() has no longer arguments."), void 0 !== this.object && t.setFromObject(this.object), !t.isEmpty()) {
                            var n = t.min,
                                i = t.max,
                                r = this.geometry.attributes.position,
                                o = r.array;
                            o[0] = i.x, o[1] = i.y, o[2] = i.z, o[3] = n.x, o[4] = i.y, o[5] = i.z, o[6] = n.x, o[7] = n.y, o[8] = i.z, o[9] = i.x, o[10] = n.y, o[11] = i.z, o[12] = i.x, o[13] = i.y, o[14] = n.z, o[15] = n.x, o[16] = i.y, o[17] = n.z, o[18] = n.x, o[19] = n.y, o[20] = n.z, o[21] = i.x, o[22] = n.y, o[23] = n.z, r.needsUpdate = !0, this.geometry.computeBoundingSphere()
                        }
                    }
                }(), Ws.prototype.setFromObject = function(t) {
                    return this.object = t, this.update(), this
                }, Xs.prototype = Object.create(or.prototype), Xs.prototype.constructor = Xs, Xs.prototype.updateMatrixWorld = function(t) {
                    var e = this.box;
                    e.isEmpty() || (e.getCenter(this.position), e.getSize(this.scale), this.scale.multiplyScalar(.5), Ze.prototype.updateMatrixWorld.call(this, t))
                }, qs.prototype = Object.create(rr.prototype), qs.prototype.constructor = qs, qs.prototype.updateMatrixWorld = function(t) {
                    var e = -this.plane.constant;
                    Math.abs(e) < 1e-8 && (e = 1e-8), this.scale.set(.5 * this.size, .5 * this.size, e), this.children[0].material.side = e < 0 ? l : c, this.lookAt(this.plane.normal), Ze.prototype.updateMatrixWorld.call(this, t)
                }, Ys.prototype = Object.create(Ze.prototype), Ys.prototype.constructor = Ys, Ys.prototype.setDirection = function() {
                    var t, e = new Te;
                    return function(n) {
                        n.y > .99999 ? this.quaternion.set(0, 0, 0, 1) : n.y < -.99999 ? this.quaternion.set(1, 0, 0, 0) : (e.set(n.z, 0, -n.x).normalize(), t = Math.acos(n.y), this.quaternion.setFromAxisAngle(e, t))
                    }
                }(), Ys.prototype.setLength = function(t, e, n) {
                    void 0 === e && (e = .2 * t), void 0 === n && (n = .2 * e), this.line.scale.set(1, Math.max(0, t - e), 1), this.line.updateMatrix(), this.cone.scale.set(n, e, n), this.cone.position.y = t, this.cone.updateMatrix()
                }, Ys.prototype.setColor = function(t) {
                    this.line.material.color.copy(t), this.cone.material.color.copy(t)
                }, Zs.prototype = Object.create(or.prototype), Zs.prototype.constructor = Zs, Yo.create = function(t, e) {
                    return console.log("THREE.Curve.create() has been deprecated"), t.prototype = Object.create(Yo.prototype), t.prototype.constructor = t, t.prototype.getPoint = e, t
                }, Object.assign(fa.prototype, {
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
                        for (var e = new Ke, n = 0, i = t.length; n < i; n++) {
                            var r = t[n];
                            e.vertices.push(new Te(r.x, r.y, r.z || 0))
                        }
                        return e
                    }
                }), Object.assign(ma.prototype, {
                    fromPoints: function(t) {
                        console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."), this.setFromPoints(t)
                    }
                }), Js.prototype = Object.create(na.prototype), Ks.prototype = Object.create(na.prototype), Qs.prototype = Object.create(na.prototype), Object.assign(Qs.prototype, {
                    initFromArray: function() {
                        console.error("THREE.Spline: .initFromArray() has been removed.")
                    },
                    getControlPointsArray: function() {
                        console.error("THREE.Spline: .getControlPointsArray() has been removed.")
                    },
                    reparametrizeByArcLength: function() {
                        console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")
                    }
                }), Us.prototype.setColors = function() {
                    console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")
                }, Bs.prototype.update = function() {
                    console.error("THREE.SkeletonHelper: update() no longer needs to be called.")
                }, Object.assign(Xa.prototype, {
                    extractUrlBase: function(t) {
                        return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."), qa.extractUrlBase(t)
                    }
                }), Object.assign(Ya.prototype, {
                    setTexturePath: function(t) {
                        return console.warn("THREE.JSONLoader: .setTexturePath() has been renamed to .setResourcePath()."), this.setResourcePath(t)
                    }
                }), Object.assign(Cs.prototype, {
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
                }), Object.assign(Ie.prototype, {
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
                }), Os.prototype.center = function(t) {
                    return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."), this.getCenter(t)
                }, Object.assign(xe, {
                    random16: function() {
                        return console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead."), Math.random()
                    },
                    nearestPowerOfTwo: function(t) {
                        return console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."), xe.floorPowerOfTwo(t)
                    },
                    nextPowerOfTwo: function(t) {
                        return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."), xe.ceilPowerOfTwo(t)
                    }
                }), Object.assign(Ee.prototype, {
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
                }), Object.assign(we.prototype, {
                    extractPosition: function(t) {
                        return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(t)
                    },
                    flattenToArrayOffset: function(t, e) {
                        return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(t, e)
                    },
                    getPosition: function() {
                        var t;
                        return function() {
                            return void 0 === t && (t = new Te), console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."), t.setFromMatrixColumn(this, 3)
                        }
                    }(),
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
                }), Ne.prototype.isIntersectionLine = function(t) {
                    return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."), this.intersectsLine(t)
                }, Me.prototype.multiplyVector3 = function(t) {
                    return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), t.applyQuaternion(this)
                }, Object.assign(xn.prototype, {
                    isIntersectionBox: function(t) {
                        return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t)
                    },
                    isIntersectionPlane: function(t) {
                        return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."), this.intersectsPlane(t)
                    },
                    isIntersectionSphere: function(t) {
                        return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(t)
                    }
                }), Object.assign(bn.prototype, {
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
                }), Object.assign(bn, {
                    barycoordFromPoint: function(t, e, n, i, r) {
                        return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), bn.getBarycoord(t, e, n, i, r)
                    },
                    normal: function(t, e, n, i) {
                        return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), bn.getNormal(t, e, n, i)
                    }
                }), Object.assign(va.prototype, {
                    extractAllPoints: function(t) {
                        return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."), this.extractPoints(t)
                    },
                    extrude: function(t) {
                        return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."), new io(this, t)
                    },
                    makeGeometry: function(t) {
                        return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."), new vo(this, t)
                    }
                }), Object.assign(be.prototype, {
                    fromAttribute: function(t, e, n) {
                        return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, n)
                    },
                    distanceToManhattan: function(t) {
                        return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(t)
                    },
                    lengthManhattan: function() {
                        return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
                    }
                }), Object.assign(Te.prototype, {
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
                }), Object.assign(Le.prototype, {
                    fromAttribute: function(t, e, n) {
                        return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, n)
                    },
                    lengthManhattan: function() {
                        return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
                    }
                }), Object.assign(Ke.prototype, {
                    computeTangents: function() {
                        console.error("THREE.Geometry: .computeTangents() has been removed.")
                    },
                    computeLineDistances: function() {
                        console.error("THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.")
                    }
                }), Object.assign(Ze.prototype, {
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
                }), Object.defineProperties(Ze.prototype, {
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
                }), Object.defineProperties($i.prototype, {
                    objects: {
                        get: function() {
                            return console.warn("THREE.LOD: .objects has been renamed to .levels."), this.levels
                        }
                    }
                }), Object.defineProperty(tr.prototype, "useVertexTexture", {
                    get: function() {
                        console.warn("THREE.Skeleton: useVertexTexture has been removed.")
                    },
                    set: function() {
                        console.warn("THREE.Skeleton: useVertexTexture has been removed.")
                    }
                }), Object.defineProperty(Yo.prototype, "__arcLengthDivisions", {
                    get: function() {
                        return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."), this.arcLengthDivisions
                    },
                    set: function(t) {
                        console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."), this.arcLengthDivisions = t
                    }
                }), Gi.prototype.setLens = function(t, e) {
                    console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."), void 0 !== e && (this.filmGauge = e), this.setFocalLength(t)
                }, Object.defineProperties(ga.prototype, {
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
                }), Object.defineProperties(Qe.prototype, {
                    length: {
                        get: function() {
                            return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."), this.array.length
                        }
                    },
                    copyIndicesArray: function() {
                        console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")
                    }
                }), Object.assign(pn.prototype, {
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
                }), Object.defineProperties(pn.prototype, {
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
                }), Object.assign(ro.prototype, {
                    getArrays: function() {
                        console.error("THREE.ExtrudeBufferGeometry: .getArrays() has been removed.")
                    },
                    addShapeList: function() {
                        console.error("THREE.ExtrudeBufferGeometry: .addShapeList() has been removed.")
                    },
                    addShape: function() {
                        console.error("THREE.ExtrudeBufferGeometry: .addShape() has been removed.")
                    }
                }), Object.defineProperties(bs.prototype, {
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
                }), Object.defineProperties(yn.prototype, {
                    wrapAround: {
                        get: function() {
                            console.warn("THREE.Material: .wrapAround has been removed.")
                        },
                        set: function() {
                            console.warn("THREE.Material: .wrapAround has been removed.")
                        }
                    },
                    wrapRGB: {
                        get: function() {
                            return console.warn("THREE.Material: .wrapRGB has been removed."), new Ue
                        }
                    },
                    shading: {
                        get: function() {
                            console.error("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.")
                        },
                        set: function(t) {
                            console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = 1 === t
                        }
                    }
                }), Object.defineProperties(Co.prototype, {
                    metal: {
                        get: function() {
                            return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."), !1
                        },
                        set: function() {
                            console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")
                        }
                    }
                }), Object.defineProperties(_n.prototype, {
                    derivatives: {
                        get: function() {
                            return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives
                        },
                        set: function(t) {
                            console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives = t
                        }
                    }
                }), Object.assign(Wi.prototype, {
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
                    }
                }), Object.defineProperties(Wi.prototype, {
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
                    }
                }), Object.defineProperties(Hi.prototype, {
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
                }), Object.defineProperties(Re.prototype, {
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
                }), Object.defineProperties(Vi.prototype, {
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
                }), ps.prototype.load = function(t) {
                    console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");
                    var e = this,
                        n = new cs;
                    return n.load(t, function(t) {
                        e.setBuffer(t)
                    }), this
                }, fs.prototype.getData = function() {
                    return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."), this.getFrequencyData()
                }, hs.prototype.updateCubeMap = function(t, e) {
                    return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."), this.update(t, e)
                };
            var $s = {
                merge: function(t, e, n) {
                    var i;
                    console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead."), e.isMesh && (e.matrixAutoUpdate && e.updateMatrix(), i = e.matrix, e = e.geometry), t.merge(e, i, n)
                },
                center: function(t) {
                    return console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead."), t.center()
                }
            };
            Se.crossOrigin = void 0, Se.loadTexture = function(t, e, n, i) {
                console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
                var r = new qo;
                r.setCrossOrigin(this.crossOrigin);
                var o = r.load(t, n, void 0, i);
                return e && (o.mapping = e), o
            }, Se.loadTextureCube = function(t, e, n, i) {
                console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
                var r = new Xo;
                r.setCrossOrigin(this.crossOrigin);
                var o = r.load(t, n, void 0, i);
                return e && (o.mapping = e), o
            }, Se.loadCompressedTexture = function() {
                console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")
            }, Se.loadCompressedTextureCube = function() {
                console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")
            };
            var tc = {
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
            t.WebGLRenderTargetCube = Ce, t.WebGLRenderTarget = Re, t.WebGLRenderer = Wi, t.ShaderLib = Ge, t.UniformsLib = ze, t.UniformsUtils = Fe, t.ShaderChunk = He, t.FogExp2 = Xi, t.Fog = qi, t.Scene = Yi, t.Sprite = Qi, t.LOD = $i, t.SkinnedMesh = nr, t.Skeleton = tr, t.Bone = er, t.Mesh = Mn, t.LineSegments = or, t.LineLoop = ar, t.Line = rr, t.Points = cr, t.Group = Ui, t.VideoTexture = lr, t.DataTexture = Oe, t.DataTexture3D = Sn, t.CompressedTexture = hr, t.CubeTexture = En, t.CanvasTexture = ur, t.DepthTexture = pr, t.Texture = Pe, t.CompressedTextureLoader = jo, t.DataTextureLoader = Vo, t.CubeTextureLoader = Xo, t.TextureLoader = qo, t.ObjectLoader = Za, t.MaterialLoader = ja, t.BufferGeometryLoader = Va, t.DefaultLoadingManager = Uo, t.LoadingManager = ko, t.JSONLoader = Ya, t.ImageLoader = Wo, t.ImageBitmapLoader = ts, t.FontLoader = rs, t.FileLoader = Go, t.Loader = Xa, t.LoaderUtils = qa, t.Cache = Fo, t.AudioLoader = cs, t.SpotLightShadow = xa, t.SpotLight = ba, t.PointLight = wa, t.RectAreaLight = Aa, t.HemisphereLight = ya, t.DirectionalLightShadow = Ta, t.DirectionalLight = Ea, t.AmbientLight = Sa, t.LightShadow = _a, t.Light = ga, t.StereoCamera = ls, t.PerspectiveCamera = Gi, t.OrthographicCamera = Ma, t.CubeCamera = hs, t.ArrayCamera = ji, t.Camera = zi, t.AudioListener = us, t.PositionalAudio = ds, t.AudioContext = ss, t.AudioAnalyser = fs, t.Audio = ps, t.VectorKeyframeTrack = Ua, t.StringKeyframeTrack = ka, t.QuaternionKeyframeTrack = Fa, t.NumberKeyframeTrack = Ba, t.ColorKeyframeTrack = Na, t.BooleanKeyframeTrack = Da, t.PropertyMixer = ms, t.PropertyBinding = gs, t.KeyframeTrack = Ia, t.AnimationUtils = Pa, t.AnimationObjectGroup = ys, t.AnimationMixer = xs, t.AnimationClip = za, t.Uniform = bs, t.InstancedBufferGeometry = ws, t.BufferGeometry = pn, t.Geometry = Ke, t.InterleavedBufferAttribute = Ji, t.InstancedInterleavedBuffer = Ms, t.InterleavedBuffer = Zi, t.InstancedBufferAttribute = Ts, t.Face3 = We, t.Object3D = Ze, t.Raycaster = Es, t.Layers = qe, t.EventDispatcher = e, t.Clock = Ps, t.QuaternionLinearInterpolant = Ha, t.LinearInterpolant = Ca, t.DiscreteInterpolant = Oa, t.CubicInterpolant = Ra, t.Interpolant = La, t.Triangle = bn, t.Math = xe, t.Spherical = Ls, t.Cylindrical = Rs, t.Plane = Ne, t.Frustum = Be, t.Sphere = De, t.Ray = xn, t.Matrix4 = we, t.Matrix3 = Ee, t.Box3 = Ie, t.Box2 = Cs, t.Line3 = Os, t.Euler = Xe, t.Vector4 = Le, t.Vector3 = Te, t.Vector2 = be, t.Quaternion = Me, t.Color = Ue, t.ImmediateRenderObject = Is, t.VertexNormalsHelper = Ds, t.SpotLightHelper = Ns, t.SkeletonHelper = Bs, t.PointLightHelper = Hs, t.RectAreaLightHelper = Fs, t.HemisphereLightHelper = ks, t.GridHelper = Us, t.PolarGridHelper = zs, t.FaceNormalsHelper = Gs, t.DirectionalLightHelper = js, t.CameraHelper = Vs, t.BoxHelper = Ws, t.Box3Helper = Xs, t.PlaneHelper = qs, t.ArrowHelper = Ys, t.AxesHelper = Zs, t.Shape = va, t.Path = ma, t.ShapePath = es, t.Font = ns, t.CurvePath = fa, t.Curve = Yo, t.ImageUtils = Se, t.ShapeUtils = to, t.WebGLUtils = ki, t.WireframeGeometry = dr, t.ParametricGeometry = fr, t.ParametricBufferGeometry = mr, t.TetrahedronGeometry = yr, t.TetrahedronBufferGeometry = _r, t.OctahedronGeometry = xr, t.OctahedronBufferGeometry = br, t.IcosahedronGeometry = wr, t.IcosahedronBufferGeometry = Mr, t.DodecahedronGeometry = Tr, t.DodecahedronBufferGeometry = Er, t.PolyhedronGeometry = vr, t.PolyhedronBufferGeometry = gr, t.TubeGeometry = Sr, t.TubeBufferGeometry = Ar, t.TorusKnotGeometry = Pr, t.TorusKnotBufferGeometry = Lr, t.TorusGeometry = Rr, t.TorusBufferGeometry = Cr, t.TextGeometry = so, t.TextBufferGeometry = co, t.SphereGeometry = lo, t.SphereBufferGeometry = ho, t.RingGeometry = uo, t.RingBufferGeometry = po, t.PlaneGeometry = mn, t.PlaneBufferGeometry = vn, t.LatheGeometry = fo, t.LatheBufferGeometry = mo, t.ShapeGeometry = vo, t.ShapeBufferGeometry = go, t.ExtrudeGeometry = io, t.ExtrudeBufferGeometry = ro, t.EdgesGeometry = _o, t.ConeGeometry = wo, t.ConeBufferGeometry = Mo, t.CylinderGeometry = xo, t.CylinderBufferGeometry = bo, t.CircleGeometry = To, t.CircleBufferGeometry = Eo, t.BoxGeometry = dn, t.BoxBufferGeometry = fn, t.ShadowMaterial = Ao, t.SpriteMaterial = Ki, t.RawShaderMaterial = Po, t.ShaderMaterial = _n, t.PointsMaterial = sr, t.MeshPhysicalMaterial = Ro, t.MeshStandardMaterial = Lo, t.MeshPhongMaterial = Co, t.MeshToonMaterial = Oo, t.MeshNormalMaterial = Io, t.MeshLambertMaterial = Do, t.MeshDepthMaterial = Ni, t.MeshDistanceMaterial = Bi, t.MeshBasicMaterial = wn, t.MeshMatcapMaterial = No, t.LineDashedMaterial = Bo, t.LineBasicMaterial = ir, t.Material = yn, t.Float64BufferAttribute = cn, t.Float32BufferAttribute = sn, t.Uint32BufferAttribute = an, t.Int32BufferAttribute = on, t.Uint16BufferAttribute = rn, t.Int16BufferAttribute = nn, t.Uint8ClampedBufferAttribute = en, t.Uint8BufferAttribute = tn, t.Int8BufferAttribute = $e, t.BufferAttribute = Qe, t.ArcCurve = Jo, t.CatmullRomCurve3 = na, t.CubicBezierCurve = aa, t.CubicBezierCurve3 = sa, t.EllipseCurve = Zo, t.LineCurve = ca, t.LineCurve3 = la, t.QuadraticBezierCurve = ha, t.QuadraticBezierCurve3 = ua, t.SplineCurve = pa, t.REVISION = n, t.MOUSE = {
                LEFT: 0,
                MIDDLE: 1,
                RIGHT: 2
            }, t.CullFaceNone = i, t.CullFaceBack = r, t.CullFaceFront = o, t.CullFaceFrontBack = 3, t.FrontFaceDirectionCW = 0, t.FrontFaceDirectionCCW = 1, t.BasicShadowMap = 0, t.PCFShadowMap = a, t.PCFSoftShadowMap = s, t.FrontSide = c, t.BackSide = l, t.DoubleSide = h, t.FlatShading = 1, t.SmoothShading = 2, t.NoColors = u, t.FaceColors = p, t.VertexColors = d, t.NoBlending = f, t.NormalBlending = m, t.AdditiveBlending = v, t.SubtractiveBlending = g, t.MultiplyBlending = y, t.CustomBlending = _, t.AddEquation = x, t.SubtractEquation = b, t.ReverseSubtractEquation = w, t.MinEquation = M, t.MaxEquation = T, t.ZeroFactor = E, t.OneFactor = S, t.SrcColorFactor = A, t.OneMinusSrcColorFactor = P, t.SrcAlphaFactor = L, t.OneMinusSrcAlphaFactor = R, t.DstAlphaFactor = C, t.OneMinusDstAlphaFactor = O, t.DstColorFactor = I, t.OneMinusDstColorFactor = D, t.SrcAlphaSaturateFactor = N, t.NeverDepth = B, t.AlwaysDepth = H, t.LessDepth = F, t.LessEqualDepth = k, t.EqualDepth = U, t.GreaterEqualDepth = z, t.GreaterDepth = G, t.NotEqualDepth = j, t.MultiplyOperation = V, t.MixOperation = W, t.AddOperation = X, t.NoToneMapping = q, t.LinearToneMapping = Y, t.ReinhardToneMapping = Z, t.Uncharted2ToneMapping = J, t.CineonToneMapping = K, t.UVMapping = 300, t.CubeReflectionMapping = Q, t.CubeRefractionMapping = $, t.EquirectangularReflectionMapping = tt, t.EquirectangularRefractionMapping = et, t.SphericalReflectionMapping = nt, t.CubeUVReflectionMapping = it, t.CubeUVRefractionMapping = rt, t.RepeatWrapping = ot, t.ClampToEdgeWrapping = at, t.MirroredRepeatWrapping = st, t.NearestFilter = ct, t.NearestMipMapNearestFilter = lt, t.NearestMipMapLinearFilter = ht, t.LinearFilter = ut, t.LinearMipMapNearestFilter = pt, t.LinearMipMapLinearFilter = dt, t.UnsignedByteType = ft, t.ByteType = mt, t.ShortType = vt, t.UnsignedShortType = gt, t.IntType = yt, t.UnsignedIntType = _t, t.FloatType = xt, t.HalfFloatType = bt, t.UnsignedShort4444Type = wt, t.UnsignedShort5551Type = Mt, t.UnsignedShort565Type = Tt, t.UnsignedInt248Type = Et, t.AlphaFormat = St, t.RGBFormat = At, t.RGBAFormat = Pt, t.LuminanceFormat = Lt, t.LuminanceAlphaFormat = Rt, t.RGBEFormat = Ct, t.DepthFormat = Ot, t.DepthStencilFormat = It, t.RedFormat = Dt, t.RGB_S3TC_DXT1_Format = Nt, t.RGBA_S3TC_DXT1_Format = Bt, t.RGBA_S3TC_DXT3_Format = Ht, t.RGBA_S3TC_DXT5_Format = Ft, t.RGB_PVRTC_4BPPV1_Format = kt, t.RGB_PVRTC_2BPPV1_Format = Ut, t.RGBA_PVRTC_4BPPV1_Format = zt, t.RGBA_PVRTC_2BPPV1_Format = Gt, t.RGB_ETC1_Format = jt, t.RGBA_ASTC_4x4_Format = Vt, t.RGBA_ASTC_5x4_Format = Wt, t.RGBA_ASTC_5x5_Format = Xt, t.RGBA_ASTC_6x5_Format = qt, t.RGBA_ASTC_6x6_Format = Yt, t.RGBA_ASTC_8x5_Format = Zt, t.RGBA_ASTC_8x6_Format = Jt, t.RGBA_ASTC_8x8_Format = Kt, t.RGBA_ASTC_10x5_Format = Qt, t.RGBA_ASTC_10x6_Format = $t, t.RGBA_ASTC_10x8_Format = te, t.RGBA_ASTC_10x10_Format = ee, t.RGBA_ASTC_12x10_Format = ne, t.RGBA_ASTC_12x12_Format = ie, t.LoopOnce = 2200, t.LoopRepeat = re, t.LoopPingPong = 2202, t.InterpolateDiscrete = 2300, t.InterpolateLinear = 2301, t.InterpolateSmooth = 2302, t.ZeroCurvatureEnding = oe, t.ZeroSlopeEnding = 2401, t.WrapAroundEnding = 2402, t.TrianglesDrawMode = ae, t.TriangleStripDrawMode = se, t.TriangleFanDrawMode = ce, t.LinearEncoding = le, t.sRGBEncoding = he, t.GammaEncoding = ue, t.RGBEEncoding = pe, t.LogLuvEncoding = 3003, t.RGBM7Encoding = de, t.RGBM16Encoding = fe, t.RGBDEncoding = me, t.BasicDepthPacking = ve, t.RGBADepthPacking = ge, t.TangentSpaceNormalMap = ye, t.ObjectSpaceNormalMap = _e, t.CubeGeometry = dn, t.Face4 = function(t, e, n, i, r, o, a) {
                return console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead."), new We(t, e, n, r, o, a)
            }, t.LineStrip = 0, t.LinePieces = 1, t.MeshFaceMaterial = function(t) {
                return console.warn("THREE.MeshFaceMaterial has been removed. Use an Array instead."), t
            }, t.MultiMaterial = function(t) {
                return void 0 === t && (t = []), console.warn("THREE.MultiMaterial has been removed. Use an Array instead."), t.isMultiMaterial = !0, t.materials = t, t.clone = function() {
                    return t.slice()
                }, t
            }, t.PointCloud = function(t, e) {
                return console.warn("THREE.PointCloud has been renamed to THREE.Points."), new cr(t, e)
            }, t.Particle = function(t) {
                return console.warn("THREE.Particle has been renamed to THREE.Sprite."), new Qi(t)
            }, t.ParticleSystem = function(t, e) {
                return console.warn("THREE.ParticleSystem has been renamed to THREE.Points."), new cr(t, e)
            }, t.PointCloudMaterial = function(t) {
                return console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."), new sr(t)
            }, t.ParticleBasicMaterial = function(t) {
                return console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."), new sr(t)
            }, t.ParticleSystemMaterial = function(t) {
                return console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."), new sr(t)
            }, t.Vertex = function(t, e, n) {
                return console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead."), new Te(t, e, n)
            }, t.DynamicBufferAttribute = function(t, e) {
                return console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead."), new Qe(t, e).setDynamic(!0)
            }, t.Int8Attribute = function(t, e) {
                return console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead."), new $e(t, e)
            }, t.Uint8Attribute = function(t, e) {
                return console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead."), new tn(t, e)
            }, t.Uint8ClampedAttribute = function(t, e) {
                return console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead."), new en(t, e)
            }, t.Int16Attribute = function(t, e) {
                return console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead."), new nn(t, e)
            }, t.Uint16Attribute = function(t, e) {
                return console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead."), new rn(t, e)
            }, t.Int32Attribute = function(t, e) {
                return console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead."), new on(t, e)
            }, t.Uint32Attribute = function(t, e) {
                return console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead."), new an(t, e)
            }, t.Float32Attribute = function(t, e) {
                return console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead."), new sn(t, e)
            }, t.Float64Attribute = function(t, e) {
                return console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead."), new cn(t, e)
            }, t.ClosedSplineCurve3 = Js, t.SplineCurve3 = Ks, t.Spline = Qs, t.AxisHelper = function(t) {
                return console.warn("THREE.AxisHelper has been renamed to THREE.AxesHelper."), new Zs(t)
            }, t.BoundingBoxHelper = function(t, e) {
                return console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead."), new Ws(t, e)
            }, t.EdgesHelper = function(t, e) {
                return console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead."), new or(new _o(t.geometry), new ir({
                    color: void 0 !== e ? e : 16777215
                }))
            }, t.WireframeHelper = function(t, e) {
                return console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead."), new or(new dr(t.geometry), new ir({
                    color: void 0 !== e ? e : 16777215
                }))
            }, t.XHRLoader = function(t) {
                return console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader."), new Go(t)
            }, t.BinaryTextureLoader = function(t) {
                return console.warn("THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader."), new Vo(t)
            }, t.GeometryUtils = $s, t.Projector = function() {
                console.error("THREE.Projector has been moved to /examples/js/renderers/Projector.js."), this.projectVector = function(t, e) {
                    console.warn("THREE.Projector: .projectVector() is now vector.project()."), t.project(e)
                }, this.unprojectVector = function(t, e) {
                    console.warn("THREE.Projector: .unprojectVector() is now vector.unproject()."), t.unproject(e)
                }, this.pickingRay = function() {
                    console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")
                }
            }, t.CanvasRenderer = function() {
                console.error("THREE.CanvasRenderer has been moved to /examples/js/renderers/CanvasRenderer.js"), this.domElement = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"), this.clear = function() {}, this.render = function() {}, this.setClearColor = function() {}, this.setSize = function() {}
            }, t.SceneUtils = tc, t.LensFlare = function() {
                console.error("THREE.LensFlare has been moved to /examples/js/objects/Lensflare.js")
            }, Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }(e)
    }, function(t, e) {
        ! function(t, e) {
            "use strict";
            if ("IntersectionObserver" in t && "IntersectionObserverEntry" in t && "intersectionRatio" in t.IntersectionObserverEntry.prototype) "isIntersecting" in t.IntersectionObserverEntry.prototype || Object.defineProperty(t.IntersectionObserverEntry.prototype, "isIntersecting", {
                get: function() {
                    return this.intersectionRatio > 0
                }
            });
            else {
                var n = [];
                r.prototype.THROTTLE_TIMEOUT = 100, r.prototype.POLL_INTERVAL = null, r.prototype.USE_MUTATION_OBSERVER = !0, r.prototype.observe = function(t) {
                    if (!this._observationTargets.some(function(e) {
                            return e.element == t
                        })) {
                        if (!t || 1 != t.nodeType) throw new Error("target must be an Element");
                        this._registerInstance(), this._observationTargets.push({
                            element: t,
                            entry: null
                        }), this._monitorIntersections(), this._checkForIntersections()
                    }
                }, r.prototype.unobserve = function(t) {
                    this._observationTargets = this._observationTargets.filter(function(e) {
                        return e.element != t
                    }), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance())
                }, r.prototype.disconnect = function() {
                    this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance()
                }, r.prototype.takeRecords = function() {
                    var t = this._queuedEntries.slice();
                    return this._queuedEntries = [], t
                }, r.prototype._initThresholds = function(t) {
                    var e = t || [0];
                    return Array.isArray(e) || (e = [e]), e.sort().filter(function(t, e, n) {
                        if ("number" != typeof t || isNaN(t) || t < 0 || t > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
                        return t !== n[e - 1]
                    })
                }, r.prototype._parseRootMargin = function(t) {
                    var e = (t || "0px").split(/\s+/).map(function(t) {
                        var e = /^(-?\d*\.?\d+)(px|%)$/.exec(t);
                        if (!e) throw new Error("rootMargin must be specified in pixels or percent");
                        return {
                            value: parseFloat(e[1]),
                            unit: e[2]
                        }
                    });
                    return e[1] = e[1] || e[0], e[2] = e[2] || e[0], e[3] = e[3] || e[1], e
                }, r.prototype._monitorIntersections = function() {
                    this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (o(t, "resize", this._checkForIntersections, !0), o(e, "scroll", this._checkForIntersections, !0), this.USE_MUTATION_OBSERVER && "MutationObserver" in t && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(e, {
                        attributes: !0,
                        childList: !0,
                        characterData: !0,
                        subtree: !0
                    }))))
                }, r.prototype._unmonitorIntersections = function() {
                    this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, a(t, "resize", this._checkForIntersections, !0), a(e, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
                }, r.prototype._checkForIntersections = function() {
                    var e = this._rootIsInDom(),
                        n = e ? this._getRootRect() : {
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                            width: 0,
                            height: 0
                        };
                    this._observationTargets.forEach(function(r) {
                        var o = r.element,
                            a = c(o),
                            s = this._rootContainsTarget(o),
                            l = r.entry,
                            h = e && s && this._computeTargetAndRootIntersection(o, n),
                            u = r.entry = new i({
                                time: t.performance && performance.now && performance.now(),
                                target: o,
                                boundingClientRect: a,
                                rootBounds: n,
                                intersectionRect: h
                            });
                        l ? e && s ? this._hasCrossedThreshold(l, u) && this._queuedEntries.push(u) : l && l.isIntersecting && this._queuedEntries.push(u) : this._queuedEntries.push(u)
                    }, this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
                }, r.prototype._computeTargetAndRootIntersection = function(n, i) {
                    if ("none" != t.getComputedStyle(n).display) {
                        for (var r = c(n), o = h(n), a = !1; !a;) {
                            var l = null,
                                u = 1 == o.nodeType ? t.getComputedStyle(o) : {};
                            if ("none" == u.display) return;
                            if (o == this.root || o == e ? (a = !0, l = i) : o != e.body && o != e.documentElement && "visible" != u.overflow && (l = c(o)), l && !(r = s(l, r))) break;
                            o = h(o)
                        }
                        return r
                    }
                }, r.prototype._getRootRect = function() {
                    var t;
                    if (this.root) t = c(this.root);
                    else {
                        var n = e.documentElement,
                            i = e.body;
                        t = {
                            top: 0,
                            left: 0,
                            right: n.clientWidth || i.clientWidth,
                            width: n.clientWidth || i.clientWidth,
                            bottom: n.clientHeight || i.clientHeight,
                            height: n.clientHeight || i.clientHeight
                        }
                    }
                    return this._expandRectByRootMargin(t)
                }, r.prototype._expandRectByRootMargin = function(t) {
                    var e = this._rootMarginValues.map(function(e, n) {
                            return "px" == e.unit ? e.value : e.value * (n % 2 ? t.width : t.height) / 100
                        }),
                        n = {
                            top: t.top - e[0],
                            right: t.right + e[1],
                            bottom: t.bottom + e[2],
                            left: t.left - e[3]
                        };
                    return n.width = n.right - n.left, n.height = n.bottom - n.top, n
                }, r.prototype._hasCrossedThreshold = function(t, e) {
                    var n = t && t.isIntersecting ? t.intersectionRatio || 0 : -1,
                        i = e.isIntersecting ? e.intersectionRatio || 0 : -1;
                    if (n !== i)
                        for (var r = 0; r < this.thresholds.length; r++) {
                            var o = this.thresholds[r];
                            if (o == n || o == i || o < n != o < i) return !0
                        }
                }, r.prototype._rootIsInDom = function() {
                    return !this.root || l(e, this.root)
                }, r.prototype._rootContainsTarget = function(t) {
                    return l(this.root || e, t)
                }, r.prototype._registerInstance = function() {
                    n.indexOf(this) < 0 && n.push(this)
                }, r.prototype._unregisterInstance = function() {
                    var t = n.indexOf(this); - 1 != t && n.splice(t, 1)
                }, t.IntersectionObserver = r, t.IntersectionObserverEntry = i
            }

            function i(t) {
                this.time = t.time, this.target = t.target, this.rootBounds = t.rootBounds, this.boundingClientRect = t.boundingClientRect, this.intersectionRect = t.intersectionRect || {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: 0,
                    height: 0
                }, this.isIntersecting = !!t.intersectionRect;
                var e = this.boundingClientRect,
                    n = e.width * e.height,
                    i = this.intersectionRect,
                    r = i.width * i.height;
                this.intersectionRatio = n ? Number((r / n).toFixed(4)) : this.isIntersecting ? 1 : 0
            }

            function r(t, e) {
                var n = e || {};
                if ("function" != typeof t) throw new Error("callback must be a function");
                if (n.root && 1 != n.root.nodeType) throw new Error("root must be an Element");
                this._checkForIntersections = function(t, e) {
                    var n = null;
                    return function() {
                        n || (n = setTimeout(function() {
                            t(), n = null
                        }, e))
                    }
                }(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT), this._callback = t, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(n.rootMargin), this.thresholds = this._initThresholds(n.threshold), this.root = n.root || null, this.rootMargin = this._rootMarginValues.map(function(t) {
                    return t.value + t.unit
                }).join(" ")
            }

            function o(t, e, n, i) {
                "function" == typeof t.addEventListener ? t.addEventListener(e, n, i || !1) : "function" == typeof t.attachEvent && t.attachEvent("on" + e, n)
            }

            function a(t, e, n, i) {
                "function" == typeof t.removeEventListener ? t.removeEventListener(e, n, i || !1) : "function" == typeof t.detatchEvent && t.detatchEvent("on" + e, n)
            }

            function s(t, e) {
                var n = Math.max(t.top, e.top),
                    i = Math.min(t.bottom, e.bottom),
                    r = Math.max(t.left, e.left),
                    o = Math.min(t.right, e.right),
                    a = o - r,
                    s = i - n;
                return a >= 0 && s >= 0 && {
                    top: n,
                    bottom: i,
                    left: r,
                    right: o,
                    width: a,
                    height: s
                }
            }

            function c(t) {
                var e;
                try {
                    e = t.getBoundingClientRect()
                } catch (t) {}
                return e ? (e.width && e.height || (e = {
                    top: e.top,
                    right: e.right,
                    bottom: e.bottom,
                    left: e.left,
                    width: e.right - e.left,
                    height: e.bottom - e.top
                }), e) : {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: 0,
                    height: 0
                }
            }

            function l(t, e) {
                for (var n = e; n;) {
                    if (n == t) return !0;
                    n = h(n)
                }
                return !1
            }

            function h(t) {
                var e = t.parentNode;
                return e && 11 == e.nodeType && e.host ? e.host : e
            }
        }(window, document)
    }
