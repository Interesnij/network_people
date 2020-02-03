function(t, e, n) {
        window,
        t.exports = function(t) {
            var e = {};

            function n(i) {
                if (e[i]) return e[i].exports;
                var r = e[i] = {
                    i: i,
                    l: !1,
                    exports: {}
                };
                return t[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
            }
            return n.m = t, n.c = e, n.d = function(t, e, i) {
                n.o(t, e) || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: i
                })
            }, n.r = function(t) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            }, n.t = function(t, e) {
                if (1 & e && (t = n(t)), 8 & e) return t;
                if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                var i = Object.create(null);
                if (n.r(i), Object.defineProperty(i, "default", {
                        enumerable: !0,
                        value: t
                    }), 2 & e && "string" != typeof t)
                    for (var r in t) n.d(i, r, function(e) {
                        return t[e]
                    }.bind(null, r));
                return i
            }, n.n = function(t) {
                var e = t && t.__esModule ? function() {
                    return t.default
                } : function() {
                    return t
                };
                return n.d(e, "a", e), e
            }, n.o = function(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }, n.p = "", n(n.s = 9)
        }([function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(2);
            Object.keys(i).forEach(function(t) {
                "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: function() {
                        return i[t]
                    }
                })
            });
            var r = n(20);
            Object.keys(r).forEach(function(t) {
                "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: function() {
                        return r[t]
                    }
                })
            })
        }, function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(22);
            Object.keys(i).forEach(function(t) {
                "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: function() {
                        return i[t]
                    }
                })
            });
            var r = n(25);
            Object.keys(r).forEach(function(t) {
                "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: function() {
                        return r[t]
                    }
                })
            });
            var o = n(26);
            Object.keys(o).forEach(function(t) {
                "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: function() {
                        return o[t]
                    }
                })
            });
            var a = n(27);
            Object.keys(a).forEach(function(t) {
                "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: function() {
                        return a[t]
                    }
                })
            });
            var s = n(28);
            Object.keys(s).forEach(function(t) {
                "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: function() {
                        return s[t]
                    }
                })
            })
        }, function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Multimap = void 0;
            var i = function(t, e) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t)) return function(t, e) {
                        var n = [],
                            i = !0,
                            r = !1,
                            o = void 0;
                        try {
                            for (var a, s = t[Symbol.iterator](); !(i = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); i = !0);
                        } catch (t) {
                            r = !0, o = t
                        } finally {
                            try {
                                !i && s.return && s.return()
                            } finally {
                                if (r) throw o
                            }
                        }
                        return n
                    }(t, e);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                },
                r = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var i = e[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                        }
                    }
                    return function(e, n, i) {
                        return n && t(e.prototype, n), i && t(e, i), e
                    }
                }(),
                o = n(4);
            e.Multimap = function() {
                function t() {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.valuesByKey = new Map
                }
                return r(t, [{
                    key: "add",
                    value: function(t, e) {
                        (0, o.add)(this.valuesByKey, t, e)
                    }
                }, {
                    key: "delete",
                    value: function(t, e) {
                        (0, o.del)(this.valuesByKey, t, e)
                    }
                }, {
                    key: "has",
                    value: function(t, e) {
                        var n = this.valuesByKey.get(t);
                        return n && n.has(e)
                    }
                }, {
                    key: "hasKey",
                    value: function(t) {
                        return this.valuesByKey.has(t)
                    }
                }, {
                    key: "hasValue",
                    value: function(t) {
                        return Array.from(this.valuesByKey.values()).some(function(e) {
                            return e.has(t)
                        })
                    }
                }, {
                    key: "getValuesForKey",
                    value: function(t) {
                        var e = this.valuesByKey.get(t);
                        return e ? Array.from(e) : []
                    }
                }, {
                    key: "getKeysForValue",
                    value: function(t) {
                        return Array.from(this.valuesByKey).filter(function(e) {
                            return i(e, 2)[1].has(t)
                        }).map(function(t) {
                            return i(t, 1)[0]
                        })
                    }
                }, {
                    key: "values",
                    get: function() {
                        return Array.from(this.valuesByKey.values()).reduce(function(t, e) {
                            return t.concat(Array.from(e))
                        }, [])
                    }
                }, {
                    key: "size",
                    get: function() {
                        return Array.from(this.valuesByKey.values()).reduce(function(t, e) {
                            return t + e.size
                        }, 0)
                    }
                }]), t
            }()
        }, function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(19);
            Object.keys(i).forEach(function(t) {
                "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: function() {
                        return i[t]
                    }
                })
            });
            var r = n(21);
            Object.keys(r).forEach(function(t) {
                "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: function() {
                        return r[t]
                    }
                })
            })
        }, function(t, e, n) {
            "use strict";

            function i(t, e) {
                var n = t.get(e);
                return n || (n = new Set, t.set(e, n)), n
            }

            function r(t, e) {
                var n = t.get(e);
                null !== n && 0 === n.size && t.delete(e)
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.add = function(t, e, n) {
                i(t, e).add(n)
            }, e.del = function(t, e, n) {
                i(t, e).delete(n), r(t, e)
            }, e.fetch = i, e.prune = r
        }, function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.ee = void 0;
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
                }(),
                r = function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }(n(23)),
                o = function(t) {
                    function e() {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, e);
                        var t = function(t, e) {
                            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !e || "object" != typeof e && "function" != typeof e ? t : e
                        }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                        return t._logs = new Set, t
                    }
                    return function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }(e, r.default), i(e, [{
                        key: "emit",
                        value: function() {
                            for (var t, n = arguments.length, i = Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                            var o = i[0];
                            i.slice(1), this._logs.has(o), (t = function t(e, n, i) {
                                null === e && (e = Function.prototype);
                                var r = Object.getOwnPropertyDescriptor(e, n);
                                if (void 0 === r) {
                                    var o = Object.getPrototypeOf(e);
                                    return null === o ? void 0 : t(o, n, i)
                                }
                                if ("value" in r) return r.value;
                                var a = r.get;
                                return void 0 !== a ? a.call(i) : void 0
                            }(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this)).call.apply(t, [this].concat(i))
                        }
                    }, {
                        key: "add",
                        value: function(t) {
                            (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._logs.add(t)
                        }
                    }, {
                        key: "remove",
                        value: function(t) {
                            this._logs.has(t) && this._logs.delete(t)
                        }
                    }]), e
                }();
            e.ee = new o
        }, function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.CustomEvent = void 0;
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
                }(),
                r = n(7);
            e.CustomEvent = function() {
                function t(e, n) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.name = e, this.capitalizedName = (0, r.ucfirst)(e), this.scope = "global", this.log = n, this.eventByElement = new Map
                }
                return i(t, [{
                    key: "bind",
                    value: function(t, e) {
                        var n = t.context.element;
                        this.eventByElement.set(n, this.listener(t)), e.on(this.name, this.eventByElement.get(n))
                    }
                }, {
                    key: "unbind",
                    value: function(t, e) {
                        var n = t.context.element;
                        e.off(this.name, this.eventByElement.get(n))
                    }
                }, {
                    key: "listener",
                    value: function(t) {
                        var e = "on" + this.capitalizedName;
                        return function() {
                            t[e].apply(t, arguments)
                        }
                    }
                }]), t
            }()
        }, function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(8);
            Object.keys(i).forEach(function(t) {
                "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: function() {
                        return i[t]
                    }
                })
            });
            var r = n(24);
            Object.keys(r).forEach(function(t) {
                "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: function() {
                        return r[t]
                    }
                })
            })
        }, function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = function(t, e) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return function(t, e) {
                    var n = [],
                        i = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var a, s = t[Symbol.iterator](); !(i = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); i = !0);
                    } catch (t) {
                        r = !0, o = t
                    } finally {
                        try {
                            !i && s.return && s.return()
                        } finally {
                            if (r) throw o
                        }
                    }
                    return n
                }(t, e);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            };
            e.autoLoad = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    stripFolders: 1
                };
                return t.keys().map(function(n) {
                    return function(t, e, n) {
                        var r = function(t, e) {
                            var n = t.match(/^(?:\.\/)?([A-Z]{1}[A-Za-z]+|[a-z/]+\/[A-Z]{1}[A-Za-z]+)(?:\.js?)$/) || [],
                                r = i(n, 2)[1];
                            if (r) {
                                for (var o = 0; o < e; o++) r = r.replace(/^([a-zA-Z]+\/)/, "");
                                return r.replace(/([A-Z])/g, "-$1").replace(/^-/, "").replace(/\/-/g, "/").replace(/\//g, "--").toLowerCase()
                            }
                            return !1
                        }(e, n.stripFolders);
                        return !!r && function(t, e) {
                            var n = t.default;
                            return "function" == typeof n && {
                                slug: e,
                                ComponentConstructor: n
                            }
                        }(t(e), r)
                    }(t, n, e)
                }).filter(function(t) {
                    return t
                })
            }
        }, function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(10);
            Object.keys(i).forEach(function(t) {
                "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: function() {
                        return i[t]
                    }
                })
            });
            var r = n(34);
            Object.keys(r).forEach(function(t) {
                "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: function() {
                        return r[t]
                    }
                })
            });
            var o = n(35);
            Object.keys(o).forEach(function(t) {
                "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: function() {
                        return o[t]
                    }
                })
            });
            var a = n(5);
            Object.keys(a).forEach(function(t) {
                "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: function() {
                        return a[t]
                    }
                })
            });
            var s = n(6);
            Object.keys(s).forEach(function(t) {
                "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: function() {
                        return s[t]
                    }
                })
            });
            var c = n(8);
            Object.keys(c).forEach(function(t) {
                "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: function() {
                        return c[t]
                    }
                })
            });
            var l = n(2);
            Object.keys(l).forEach(function(t) {
                "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: function() {
                        return l[t]
                    }
                })
            })
        }, function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Application = void 0;
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
                }(),
                r = function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }(n(11)),
                o = n(13),
                a = n(14),
                s = n(1);
            e.Application = function() {
                function t() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.body,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.defaultSchema,
                        i = arguments[2];
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.element = e, this.schema = n, this.props = i, this.manager = new a.Manager(this), this.customEvents = s.customEvents, this.plugins = new Set
                }
                return i(t, null, [{
                    key: "start",
                    value: function(e, n, i) {
                        var r = new t(e, n, i);
                        return r.start(), r
                    }
                }]), i(t, [{
                    key: "start",
                    value: function() {
                        this.manager.start()
                    }
                }, {
                    key: "stop",
                    value: function() {
                        this.manager.stop()
                    }
                }, {
                    key: "register",
                    value: function(t, e) {
                        for (var n = arguments.length, i = Array(n > 2 ? n - 2 : 0), r = 2; r < n; r++) i[r - 2] = arguments[r];
                        this.manager.addModule({
                            slug: t,
                            ComponentConstructor: e
                        }, !1, i)
                    }
                }, {
                    key: "load",
                    value: function(t) {
                        var e = this;
                        (Array.isArray(t) ? t : [t]).forEach(function(t) {
                            return e.manager.addModule(t)
                        })
                    }
                }, {
                    key: "init",
                    value: function(t, e) {
                        for (var n = arguments.length, i = Array(n > 2 ? n - 2 : 0), r = 2; r < n; r++) i[r - 2] = arguments[r];
                        return this.manager.addModule({
                            slug: t,
                            ComponentConstructor: e
                        }, !0, i), this.components.find(function(t) {
                            return t instanceof e
                        })
                    }
                }, {
                    key: "unload",
                    value: function(t) {
                        var e = this;
                        (Array.isArray(t) ? t : [t]).forEach(function(t) {
                            return e.manager.removeModule(t)
                        })
                    }
                }, {
                    key: "use",
                    value: function(t, e, n) {
                        this.customEvents.types.has(t) && this.handleError("oups", "This event type already exists [" + t + "]"), this.customEvents.add(t, e, n)
                    }
                }, {
                    key: "extend",
                    value: function(t) {
                        t.init(), this.plugins.add(t)
                    }
                }, {
                    key: "handleError",
                    value: function(t, e) {
                        throw new Error("🤦 " + r.default.random() + "! " + e + " \n " + t)
                    }
                }, {
                    key: "components",
                    get: function() {
                        return this.manager.contexts.map(function(t) {
                            return t.component
                        })
                    }
                }, {
                    key: "events",
                    get: function() {
                        return this.customEvents.events
                    }
                }]), t
            }()
        }, function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }(n(12)),
                r = {
                    all: i.default,
                    random: function() {
                        return i.default[Math.floor(Math.random() * i.default.length)]
                    }
                };
            e.default = r, t.exports = e.default
        }, function(t) {
            t.exports = ["Holy Agility", "Holy Almost", "Holy Alphabet", "Holy Alps", "Holy Alter Ego", "Holy Anagram", "Holy Apparition", "Holy Armadillo", "Holy Armour Plate", "Holy Ashtray", "Holy Asp", "Holy Astronomy", "Holy Astringent Plum-like Fruit", "Holy Audubon", "Holy Backfire", "Holy Ball And Chain", "Holy Bank Balance", "Holy Bankruptcy", "Holy Banks", "Holy Bargain Basements", "Holy Barracuda", "Holy Bat Logic", "Holy Bat Trap", "Holy Batman", "Holy Benedict Arnold", "Holy Bijou", "Holy Bikini", "Holy Bill Of Rights", "Holy Birthday Cake", "Holy Black Beard", "Holy Blackout", "Holy Blank Cartridge", "Holy Blizzard", "Holy Blonde Mackerel Ash", "Holy Bluebeard", "Holy Bouncing Boiler Plate", "Holy Bowler", "Holy Bullseye", "Holy Bunions", "Holy Caffeine", "Holy Camouflage", "Holy Captain Nemo", "Holy Caruso", "Holy Catastrophe", "Holy Cat(s)", "Holy Chicken Coop", "Holy Chilblains", "Holy Chocolate Eclair", "Holy Cinderella", "Holy Cinemascope", "Holy Cliche", "Holy Cliffhangers", "Holy Clockwork", "Holy Clockworks", "Holy Cofax You Mean", "Holy Coffin Nails", "Holy Cold Creeps", "Holy Complications", "Holy Conflagration", "Holy Contributing to the Delinquency of Minors", "Holy Corpuscles", "Holy Cosmos", "Holy Costume Party", "Holy Crack Up", "Holy Crickets", "Holy Crossfire", "Holy Crucial Moment", "Holy Cryptology", "Holy D'artagnan", "Holy Davy Jones", "Holy Detonator", "Holy Disappearing Act", "Holy Distortion", "Holy Diversionary Tactics", "Holy Dr. Jekyll and Mr. Hyde", "Holy Egg Shells", "Holy Encore", "Holy Endangered Species", "Holy Epigrams", "Holy Escape-hatch", "Holy Explosion", "Holy Fate-worse-than-death", "Holy Felony", "Holy Finishing-touches", "Holy Fireworks", "Holy Firing Squad", "Holy Fishbowl", "Holy Flight Plan", "Holy Flip-flop", "Holy Flood Gate", "Holy Floor Covering", "Holy Flypaper", "Holy Fly Trap", "Holy Fog", "Holy Forecast", "Holy Fork In The Road", "Holy Fourth Amendment", "Holy Fourth Of July", "Holy Frankenstein", "Holy Frankenstein It's Alive", "Holy Fratricide", "Holy Frogman", "Holy Fruit Salad", "Holy Frying Towels", "Holy Funny Bone", "Holy Gall", "Holy Gambles", "Holy Gemini", "Holy Geography", "Holy Ghost Writer", "Holy Giveaways", "Holy Glow Pot", "Holy Golden Gate", "Holy Graf Zeppelin", "Holy Grammar", "Holy Graveyards", "Holy Greed", "Holy Green Card", "Holy Greetings-cards", "Holy Guacamole", "Holy Guadalcanal", "Holy Gullibility", "Holy Gunpowder", "Holy Haberdashery", "Holy Hailstorm", "Holy Hairdo", "Holy Hallelujah", "Holy Halloween", "Holy Hallucination", "Holy Hamburger", "Holy Hamlet", "Holy Hamstrings", "Holy Happenstance", "Holy Hardest Metal In The World", "Holy Harem", "Holy Harshin", "Holy Haziness", "Holy Headache", "Holy Headline", "Holy Heart Failure", "Holy Heartbreak", "Holy Heidelberg", "Holy Helmets", "Holy Helplessness", "Holy Here We Go Again", "Holy Hi-fi", "Holy Hieroglyphic", "Holy High-wire", "Holy Hijack", "Holy Hijackers", "Holy History", "Holy Hoaxes", "Holy Hole In A Donut", "Holy Hollywood", "Holy Holocaust", "Holy Homecoming", "Holy Homework", "Holy Homicide", "Holy Hoodwink", "Holy Hoof Beats", "Holy Hors D'Oeuvre", "Holy Horseshoes", "Holy Hostage", "Holy Hot Foot", "Holy Houdini", "Holy Human Collectors Item", "Holy Human Pearls", "Holy Human Pressure Cookers", "Holy Human Surfboards", "Holy Hunting Horn", "Holy Hurricane", "Holy Hutzpa", "Holy Hydraulics", "Holy Hypnotism", "Holy Hypodermics", "Holy Ice Picks", "Holy Ice Skates", "Holy Iceberg", "Holy Impossibility", "Holy Impregnability", "Holy Incantation", "Holy Inquisition", "Holy Interplanetary Yardstick", "Holy Interruptions", "Holy Iodine", "Holy IT and T", "Holy Jack In The Box", "Holy Jackpot", "Holy Jail Break", "Holy Jaw Breaker", "Holy Jelly Molds", "Holy Jet Set", "Holy Jigsaw Puzzles", "Holy Jitter Bugs", "Holy Joe", "Holy Journey To The Center Of The Earth", "Holy Jumble", "Holy Jumpin' Jiminy", "Holy Karats", "Holy Key Hole", "Holy Key Ring", "Holy Kilowatts", "Holy Kindergarten", "Holy Knit One Purl Two", "Holy Knock Out Drops", "Holy Known Unknown Flying Objects", "Holy Kofax", "Holy Las Vegas", "Holy Leopard", "Holy Levitation", "Holy Liftoff", "Holy Living End", "Holy Lodestone", "Holy Long John Silver", "Holy Looking Glass", "Holy Love Birds", "Holy Luther Burbank", "Holy Madness", "Holy Magic Lantern", "Holy Magician", "Holy Main Springs", "Holy Marathon", "Holy Mashed Potatoes", "Holy Masquerade", "Holy Matador", "Holy Mechanical Armies", "Holy Memory Bank", "Holy Merlin Magician", "Holy Mermaid", "Holy Merry Go Around", "Holy Mesmerism", "Holy Metronome", "Holy Miracles", "Holy Miscast", "Holy Missing Relatives", "Holy Molars", "Holy Mole Hill", "Holy Mucilage", "Holy Multitudes", "Holy Murder", "Holy Mush", "Holy Naive", "Holy New Year's Eve", "Holy Nick Of Time", "Holy Nightmare", "Holy Non Sequiturs", "Holy Oleo", "Holy Olfactory", "Holy One Track Bat Computer Mind", "Holy Oversight", "Holy Oxygen", "Holy Paderewski", "Holy Paraffin", "Holy Perfect Pitch", "Holy Pianola", "Holy Pin Cushions", "Holy Polar Front", "Holy Polar Ice Sheet", "Holy Polaris", "Holy Popcorn", "Holy Potluck", "Holy Pressure Cooker", "Holy Priceless Collection of Etruscan Snoods", "Holy Pseudonym", "Holy Purple Cannibals", "Holy Puzzlers", "Holy Rainbow", "Holy Rats In A Trap", "Holy Ravioli", "Holy Razors Edge", "Holy Recompense", "Holy Red Herring", "Holy Red Snapper", "Holy Reincarnation", "Holy Relief", "Holy Remote Control Robot", "Holy Reshevsky", "Holy Return From Oblivion", "Holy Reverse Polarity", "Holy Rheostat", "Holy Ricochet", "Holy Rip Van Winkle", "Holy Rising Hemlines", "Holy Roadblocks", "Holy Robert Louis Stevenson", "Holy Rock Garden", "Holy Rocking Chair", "Holy Romeo And Juliet", "Holy Rudder", "Holy Safari", "Holy Sarcophagus", "Holy Sardine", "Holy Scalding", "Holy Schizophrenia", "Holy Sedatives", "Holy Self Service", "Holy Semantics", "Holy Serpentine", "Holy Sewer Pipe", "Holy Shamrocks", "Holy Sherlock Holmes", "Holy Show-Ups", "Holy Showcase", "Holy Shrinkage", "Holy Shucks", "Holy Skull Tap", "Holy Sky Rocket", "Holy Slipped Disc", "Holy Smoke", "Holy Smokes", "Holy Smokestack", "Holy Snowball", "Holy Sonic Booms", "Holy Special Delivery", "Holy Spider Webs", "Holy Split Seconds", "Holy Squirrel Cage", "Holy Stalactites", "Holy Stampede", "Holy Standstills", "Holy Steam Valve", "Holy Stew Pot", "Holy Stomach Aches", "Holy Stratosphere", "Holy Stuffing", "Holy Subliminal", "Holy Sudden Incapacitation", "Holy Sundials", "Holy Surprise Party", "Holy Switch A Roo", "Holy Taj Mahal", "Holy Tartars", "Holy Taxation", "Holy Taxidermy", "Holy Tee Shot", "Holy Ten Toes", "Holy Terminology", "Holy Time Bomb", "Holy Tintinnabulation", "Holy Tipoffs", "Holy Titanic", "Holy Tome", "Holy Toreador", "Holy Trampoline", "Holy Transistors", "Holy Travel Agent", "Holy Trickery", "Holy Triple Feature", "Holy Trolls And Goblins", "Holy Tuxedo", "Holy Uncanny Photographic Mental Processes", "Holy Understatements", "Holy Underwritten Metropolis", "Holy Unlikelihood", "Holy Unrefillable Prescriptions", "Holy Vat", "Holy Venezuela", "Holy Vertebrae", "Holy Voltage", "Holy Waste Of Energy", "Holy Wayne Manor", "Holy Weaponry", "Holy Wedding Cake", "Holy Wernher von Braun", "Holy Whiskers", "Holy Wigs", "Holy Zorro"]
        }, function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.defaultSchema = {
                componentAttribute: "data-component",
                refAttribute: "data-ref"
            }
        }, function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Manager = void 0;
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
                }(),
                r = n(15),
                o = n(3);
            e.Manager = function() {
                function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.application = e, this.observer = new o.TokenObserver(this.element, this.componentAttribute, this), this.modulesBySlug = new Map
                }
                return i(t, [{
                    key: "start",
                    value: function() {
                        this.observer.start()
                    }
                }, {
                    key: "stop",
                    value: function() {
                        this.observer.stop()
                    }
                }, {
                    key: "addModule",
                    value: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = arguments[2],
                            i = t.slug;
                        this.removeModule(i);
                        var o = new r.Module(this.application, t, n);
                        this.modulesBySlug.set(i, o), this._initModule(o, e)
                    }
                }, {
                    key: "removeModule",
                    value: function(t) {
                        var e = this.modulesBySlug.get(t);
                        e && (this.modulesBySlug.delete(t), this._destroyModule(e))
                    }
                }, {
                    key: "elementMatchedToken",
                    value: function(t, e) {
                        this._initModuleBySlug(e, t)
                    }
                }, {
                    key: "elementUnmatchedToken",
                    value: function(t, e) {
                        this._destroyModuleBySlug(e, t)
                    }
                }, {
                    key: "_initModule",
                    value: function(t, e) {
                        var n = this.observer.getElementsMatchingToken(t.slug);
                        if (e) t.initNoElement(t.slug, t.args);
                        else {
                            var i = !0,
                                r = !1,
                                o = void 0;
                            try {
                                for (var a, s = n[Symbol.iterator](); !(i = (a = s.next()).done); i = !0) {
                                    var c = a.value;
                                    t.initElement(c, t.args)
                                }
                            } catch (t) {
                                r = !0, o = t
                            } finally {
                                try {
                                    !i && s.return && s.return()
                                } finally {
                                    if (r) throw o
                                }
                            }
                        }
                    }
                }, {
                    key: "_destroyModule",
                    value: function(t) {
                        var e = t.contexts,
                            n = !0,
                            i = !1,
                            r = void 0;
                        try {
                            for (var o, a = e[Symbol.iterator](); !(n = (o = a.next()).done); n = !0) {
                                var s = o.value.element;
                                t.destroyElement(s)
                            }
                        } catch (t) {
                            i = !0, r = t
                        } finally {
                            try {
                                !n && a.return && a.return()
                            } finally {
                                if (i) throw r
                            }
                        }
                    }
                }, {
                    key: "_initModuleBySlug",
                    value: function(t, e) {
                        var n = this.modulesBySlug.get(t);
                        n && n.initElement(e, n.args)
                    }
                }, {
                    key: "_destroyModuleBySlug",
                    value: function(t, e) {
                        var n = this.modulesBySlug.get(t);
                        n && n.destroyElement(e)
                    }
                }, {
                    key: "schema",
                    get: function() {
                        return this.application.schema
                    }
                }, {
                    key: "element",
                    get: function() {
                        return this.application.element
                    }
                }, {
                    key: "componentAttribute",
                    get: function() {
                        return this.schema.componentAttribute
                    }
                }, {
                    key: "modules",
                    get: function() {
                        return Array.from(this.modulesBySlug.values())
                    }
                }, {
                    key: "contexts",
                    get: function() {
                        return this.modules.reduce(function(t, e) {
                            return t.concat(Array.from(e.contexts))
                        }, [])
                    }
                }]), t
            }()
        }, function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Module = void 0;
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
                }(),
                r = n(16);
            e.Module = function() {
                function t(e, n, i) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.application = e, this.definition = n, this.args = i, this.contextsByElement = new WeakMap, this.contextsByNoElement = new Map, this.initializedContexts = new Set
                }
                return i(t, [{
                    key: "initElement",
                    value: function(t, e) {
                        var n = this._fetchContextForElement(t, e);
                        n && !this.initializedContexts.has(n) && (this.initializedContexts.add(n), n.init(), n.bindAll())
                    }
                }, {
                    key: "initNoElement",
                    value: function(t, e) {
                        var n = this._fetchContextForNoElement(t, e);
                        n && !this.initializedContexts.has(n) && (this.initializedContexts.add(n), n.bindAll())
                    }
                }, {
                    key: "destroyElement",
                    value: function(t) {
                        var e = this._fetchContextForElement(t);
                        e && this.initializedContexts.has(e) && (this.initializedContexts.delete(e), e.unbindAll(), e.unsubscribeAll(), e.destroy())
                    }
                }, {
                    key: "destroyNoElement",
                    value: function(t) {
                        var e = this._fetchContextForNoElement(t);
                        e && this.initializedContexts.has(e) && (this.initializedContexts.delete(e), e.unbindAll(), e.unsubscribeAll(), e.destroy())
                    }
                }, {
                    key: "_fetchContextForElement",
                    value: function(t, e) {
                        var n = this.contextsByElement.get(t);
                        return n || (n = new r.Context(this, t, e), this.contextsByElement.set(t, n)), n
                    }
                }, {
                    key: "_fetchContextForNoElement",
                    value: function(t, e) {
                        var n = this.contextsByNoElement.get(t);
                        return n || (n = new r.Context(this, null, e), this.contextsByNoElement.set(t, n)), n
                    }
                }, {
                    key: "slug",
                    get: function() {
                        return this.definition.slug
                    }
                }, {
                    key: "ComponentConstructor",
                    get: function() {
                        return this.definition.ComponentConstructor
                    }
                }, {
                    key: "contexts",
                    get: function() {
                        return Array.from(this.initializedContexts)
                    }
                }]), t
            }()
        }, function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Context = void 0;
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
                }(),
                r = n(17);

            function o(t) {
                if (Array.isArray(t)) {
                    for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                    return n
                }
                return Array.from(t)
            }
            e.Context = function() {
                function t(e, n, i) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.module = e, this.element = n;
                    var a = i || [null],
                        s = this.module.application.props;
                    if (this.scope = new r.Scope(this.schema, this.slug, n, s), n) try {
                        this.component = new(Function.prototype.bind.apply(e.ComponentConstructor, [null].concat([this], o(a)))), this.component.load()
                    } catch (t) {
                        this.handleError(t, "loading component [" + this.slug + "]")
                    } else this.component = new(Function.prototype.bind.apply(e.ComponentConstructor, [null].concat([this], o(a)))), this.init()
                }
                return i(t, [{
                    key: "init",
                    value: function() {
                        try {
                            this.component.init()
                        } catch (t) {
                            this.handleError(t, "initializing component [" + this.slug + "]")
                        }
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        try {
                            this.component.destroy()
                        } catch (t) {
                            this.handleError(t, "destroying component [" + this.slug + "]")
                        }
                    }
                }, {
                    key: "bindAll",
                    value: function() {
                        try {
                            this.component.bindAll()
                        } catch (t) {
                            this.handleError(t, "binding component [" + this.slug + "]")
                        }
                    }
                }, {
                    key: "unbindAll",
                    value: function() {
                        try {
                            this.component.unbindAll()
                        } catch (t) {
                            this.handleError(t, "unbinding component [" + this.slug + "]")
                        }
                    }
                }, {
                    key: "unsubscribeAll",
                    value: function() {
                        try {
                            this.component.unsubscribeAll()
                        } catch (t) {
                            this.handleError(t, "unsubscribing component [" + this.slug + "]")
                        }
                    }
                }, {
                    key: "handleError",
                    value: function(t, e) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            i = this.identifier,
                            r = this.component,
                            o = this.element;
                        n = Object.assign({
                            identifier: i,
                            component: r,
                            element: o
                        }, n), this.application.handleError(t, e, n)
                    }
                }, {
                    key: "application",
                    get: function() {
                        return this.module.application
                    }
                }, {
                    key: "slug",
                    get: function() {
                        return this.module.slug
                    }
                }, {
                    key: "schema",
                    get: function() {
                        return this.application.schema
                    }
                }]), t
            }()
        }, function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Scope = void 0;
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
                }(),
                r = n(18);
            e.Scope = function() {
                function t(e, n, i, o) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.schema = e, this.slug = n, this.element = i, this.props = o, this.data = new r.Data(this)
                }
                return i(t, [{
                    key: "getRefs",
                    value: function() {
                        var t = {},
                            e = this.element.querySelectorAll(this.refSelector),
                            n = !0,
                            i = !1,
                            r = void 0;
                        try {
                            for (var o, a = Array.from(e)[Symbol.iterator](); !(n = (o = a.next()).done); n = !0) {
                                var s = o.value,
                                    c = this.getRefName(s);
                                t[c] ? Array.isArray(t[c]) ? t[c].push(s) : t[c] = [t[c], s] : t[c] = s
                            }
                        } catch (t) {
                            i = !0, r = t
                        } finally {
                            try {
                                !n && a.return && a.return()
                            } finally {
                                if (i) throw r
                            }
                        }
                        return t
                    }
                }, {
                    key: "getRefName",
                    value: function(t) {
                        var e = this;
                        return t.getAttribute(this.refAttribute).split(" ").find(function(t) {
                            return t.match(e.slug + ".")
                        }).replace(this.slug + ".", "")
                    }
                }, {
                    key: "refs",
                    get: function() {
                        return this.getRefs()
                    }
                }, {
                    key: "refAttribute",
                    get: function() {
                        return this.schema.refAttribute
                    }
                }, {
                    key: "refSelector",
                    get: function() {
                        return "[" + this.refAttribute + "*='" + this.slug + ".']"
                    }
                }]), t
            }()
        }, function(t, e, n) {
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
            e.Data = function() {
                function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.scope = e
                }
                return i(t, [{
                    key: "get",
                    value: function(t) {
                        var e = this._getFormattedKey(t);
                        return this.element.getAttribute(e)
                    }
                }, {
                    key: "set",
                    value: function(t, e) {
                        var n = this._getFormattedKey(t);
                        return this.element.setAttribute(n, e), this.get(t)
                    }
                }, {
                    key: "has",
                    value: function(t) {
                        var e = this._getFormattedKey(t);
                        return this.element.hasAttribute(e)
                    }
                }, {
                    key: "delete",
                    value: function(t) {
                        if (this.has(t)) {
                            var e = this._getFormattedKey(t);
                            return this.element.removeAttribute(e), !0
                        }
                        return !1
                    }
                }, {
                    key: "_getFormattedKey",
                    value: function(t) {
                        return "data-" + this.slug + "-" + function(t) {
                            return t.toString().replace(/([A-Z])/g, function(t, e) {
                                return "-" + e.toLowerCase()
                            })
                        }(t)
                    }
                }, {
                    key: "element",
                    get: function() {
                        return this.scope.element
                    }
                }, {
                    key: "slug",
                    get: function() {
                        return this.scope.slug
                    }
                }]), t
            }()
        }, function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.TokenObserver = void 0;
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
                }(),
                r = n(3),
                o = n(0);
            e.TokenObserver = function() {
                function t(e, n, i) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.attributeName = n, this.delegate = i, this.elementObserver = new r.ElementObserver(e, this), this.tokensByElement = new o.IndexedMultimap
                }
                return i(t, [{
                    key: "start",
                    value: function() {
                        this.elementObserver.start()
                    }
                }, {
                    key: "stop",
                    value: function() {
                        this.elementObserver.stop()
                    }
                }, {
                    key: "refresh",
                    value: function() {
                        this.elementObserver.refresh()
                    }
                }, {
                    key: "getElementsMatchingToken",
                    value: function(t) {
                        return this.tokensByElement.getKeysForValue(t)
                    }
                }, {
                    key: "matchElement",
                    value: function(t) {
                        return t.hasAttribute(this.attributeName)
                    }
                }, {
                    key: "matchElementsInTree",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.element,
                            e = this.matchElement(t) ? [t] : [],
                            n = Array.from(t.querySelectorAll(this.selector));
                        return e.concat(n)
                    }
                }, {
                    key: "elementMatched",
                    value: function(t) {
                        var e = Array.from(this._readTokenSetForElement(t)),
                            n = !0,
                            i = !1,
                            r = void 0;
                        try {
                            for (var o, a = e[Symbol.iterator](); !(n = (o = a.next()).done); n = !0) {
                                var s = o.value;
                                this._elementMatchedToken(t, s)
                            }
                        } catch (t) {
                            i = !0, r = t
                        } finally {
                            try {
                                !n && a.return && a.return()
                            } finally {
                                if (i) throw r
                            }
                        }
                    }
                }, {
                    key: "elementUnmatched",
                    value: function(t) {
                        var e = this._getTokensForElement(t),
                            n = !0,
                            i = !1,
                            r = void 0;
                        try {
                            for (var o, a = e[Symbol.iterator](); !(n = (o = a.next()).done); n = !0) {
                                var s = o.value;
                                this._elementUnmatchedToken(t, s)
                            }
                        } catch (t) {
                            i = !0, r = t
                        } finally {
                            try {
                                !n && a.return && a.return()
                            } finally {
                                if (i) throw r
                            }
                        }
                    }
                }, {
                    key: "elementAttributeChanged",
                    value: function(t) {
                        var e = this._readTokenSetForElement(t),
                            n = !0,
                            i = !1,
                            r = void 0;
                        try {
                            for (var o, a = Array.from(e)[Symbol.iterator](); !(n = (o = a.next()).done); n = !0) {
                                var s = o.value;
                                this.elementMatched(t, s)
                            }
                        } catch (t) {
                            i = !0, r = t
                        } finally {
                            try {
                                !n && a.return && a.return()
                            } finally {
                                if (i) throw r
                            }
                        }
                        var c = !0,
                            l = !1,
                            h = void 0;
                        try {
                            for (var u, p = this._getTokensForElement(t)[Symbol.iterator](); !(c = (u = p.next()).done); c = !0) {
                                var d = u.value;
                                e.has(d) || this.elementUnmatched(t, d)
                            }
                        } catch (t) {
                            l = !0, h = t
                        } finally {
                            try {
                                !c && p.return && p.return()
                            } finally {
                                if (l) throw h
                            }
                        }
                    }
                }, {
                    key: "_elementMatchedToken",
                    value: function(t, e) {
                        this.tokensByElement.has(t, e) || (this.tokensByElement.add(t, e), this.delegate.elementMatchedToken && this.delegate.elementMatchedToken(t, e, this.attributeName))
                    }
                }, {
                    key: "_elementUnmatchedToken",
                    value: function(t, e) {
                        this.tokensByElement.has(t, e) && (this.tokensByElement.delete(t, e), this.delegate.elementUnmatchedToken && this.delegate.elementUnmatchedToken(t, e, this.attributeName))
                    }
                }, {
                    key: "_getTokensForElement",
                    value: function(t) {
                        return this.tokensByElement.getValuesForKey(t)
                    }
                }, {
                    key: "_readTokenSetForElement",
                    value: function(t) {
                        var e = new Set,
                            n = t.getAttribute(this.attributeName) || "",
                            i = !0,
                            r = !1,
                            o = void 0;
                        try {
                            for (var a, s = n.split(/\s+/)[Symbol.iterator](); !(i = (a = s.next()).done); i = !0) {
                                var c = a.value;
                                c.length && e.add(c)
                            }
                        } catch (t) {
                            r = !0, o = t
                        } finally {
                            try {
                                !i && s.return && s.return()
                            } finally {
                                if (r) throw o
                            }
                        }
                        return e
                    }
                }, {
                    key: "selector",
                    get: function() {
                        return "[" + this.attributeName + "]"
                    }
                }]), t
            }()
        }, function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.IndexedMultimap = void 0;
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
                }(),
                r = function t(e, n, i) {
                    null === e && (e = Function.prototype);
                    var r = Object.getOwnPropertyDescriptor(e, n);
                    if (void 0 === r) {
                        var o = Object.getPrototypeOf(e);
                        return null === o ? void 0 : t(o, n, i)
                    }
                    if ("value" in r) return r.value;
                    var a = r.get;
                    return void 0 !== a ? a.call(i) : void 0
                },
                o = n(2),
                a = n(4);
            e.IndexedMultimap = function(t) {
                function e() {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    var t = function(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                    return t.keysByValue = new Map, t
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, o.Multimap), i(e, [{
                    key: "add",
                    value: function(t, n) {
                        r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "add", this).call(this, t, n), (0, a.add)(this.keysByValue, n, t)
                    }
                }, {
                    key: "delete",
                    value: function(t, n) {
                        r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "delete", this).call(this, t, n), (0, a.del)(this.keysByValue, n, t)
                    }
                }, {
                    key: "hasValue",
                    value: function(t) {
                        return this.keysByValue.has(t)
                    }
                }, {
                    key: "getKeysForValue",
                    value: function(t) {
                        var e = this.keysByValue.get(t);
                        return e ? Array.from(e) : []
                    }
                }, {
                    key: "values",
                    get: function() {
                        return Array.from(this.keysByValue.keys())
                    }
                }]), e
            }()
        }, function(t, e, n) {
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
            e.ElementObserver = function() {
                function t(e, n) {
                    var i = this;
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.element = e, this.delegate = n, this.started = !1, this.elements = new Set, this.mutationObserver = new MutationObserver(function(t) {
                        return i._processMutations(t)
                    })
                }
                return i(t, [{
                    key: "start",
                    value: function() {
                        this.started || (this.mutationObserver.observe(this.element, {
                            attributes: !0,
                            childList: !0,
                            subtree: !0
                        }), this.started = !0, this.refresh())
                    }
                }, {
                    key: "stop",
                    value: function() {
                        this.started && (this.mutationObserver.takeRecords(), this.mutationObserver.disconnect(), this.started = !1)
                    }
                }, {
                    key: "refresh",
                    value: function() {
                        if (this.started) {
                            var t = new Set(this._matchElementsInTree()),
                                e = !0,
                                n = !1,
                                i = void 0;
                            try {
                                for (var r, o = Array.from(this.elements)[Symbol.iterator](); !(e = (r = o.next()).done); e = !0) {
                                    var a = r.value;
                                    t.has(a) || this._removeElement(a)
                                }
                            } catch (t) {
                                n = !0, i = t
                            } finally {
                                try {
                                    !e && o.return && o.return()
                                } finally {
                                    if (n) throw i
                                }
                            }
                            var s = !0,
                                c = !1,
                                l = void 0;
                            try {
                                for (var h, u = Array.from(t)[Symbol.iterator](); !(s = (h = u.next()).done); s = !0) {
                                    var p = h.value;
                                    this._addElement(p)
                                }
                            } catch (t) {
                                c = !0, l = t
                            } finally {
                                try {
                                    !s && u.return && u.return()
                                } finally {
                                    if (c) throw l
                                }
                            }
                        }
                    }
                }, {
                    key: "_matchElement",
                    value: function(t) {
                        return this.delegate.matchElement(t)
                    }
                }, {
                    key: "_matchElementsInTree",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.element;
                        return this.delegate.matchElementsInTree(t)
                    }
                }, {
                    key: "_processMutations",
                    value: function(t) {
                        var e = !0,
                            n = !1,
                            i = void 0;
                        try {
                            for (var r, o = t[Symbol.iterator](); !(e = (r = o.next()).done); e = !0) {
                                var a = r.value;
                                this._processMutation(a)
                            }
                        } catch (t) {
                            n = !0, i = t
                        } finally {
                            try {
                                !e && o.return && o.return()
                            } finally {
                                if (n) throw i
                            }
                        }
                    }
                }, {
                    key: "_processMutation",
                    value: function(t) {
                        "attributes" === t.type ? this._processAttributeChange(t.target, t.attributeName) : "childList" === t.type && (this._processRemovedNodes(t.removedNodes), this._processAddedNodes(t.addedNodes))
                    }
                }, {
                    key: "_processAttributeChange",
                    value: function(t, e) {
                        var n = t;
                        this.elements.has(n) ? this.delegate.elementAttributeChanged && this._matchElement(n) ? this.delegate.elementAttributeChanged(n, e) : this._removeElement(n) : this._matchElement(n) && this._addElement(n)
                    }
                }, {
                    key: "_processRemovedNodes",
                    value: function(t) {
                        var e = !0,
                            n = !1,
                            i = void 0;
                        try {
                            for (var r, o = Array.from(t)[Symbol.iterator](); !(e = (r = o.next()).done); e = !0) {
                                var a = r.value;
                                this._processNode(a, this._removeElement)
                            }
                        } catch (t) {
                            n = !0, i = t
                        } finally {
                            try {
                                !e && o.return && o.return()
                            } finally {
                                if (n) throw i
                            }
                        }
                    }
                }, {
                    key: "_processAddedNodes",
                    value: function(t) {
                        var e = !0,
                            n = !1,
                            i = void 0;
                        try {
                            for (var r, o = Array.from(t)[Symbol.iterator](); !(e = (r = o.next()).done); e = !0) {
                                var a = r.value;
                                this._processNode(a, this._addElement)
                            }
                        } catch (t) {
                            n = !0, i = t
                        } finally {
                            try {
                                !e && o.return && o.return()
                            } finally {
                                if (n) throw i
                            }
                        }
                    }
                }, {
                    key: "_processNode",
                    value: function(e, n) {
                        var i = t.elementFromNode(e);
                        if (i) {
                            var r = !0,
                                o = !1,
                                a = void 0;
                            try {
                                for (var s, c = this._matchElementsInTree(i)[Symbol.iterator](); !(r = (s = c.next()).done); r = !0) {
                                    var l = s.value;
                                    n.call(this, l)
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
                        }
                    }
                }, {
                    key: "_addElement",
                    value: function(t) {
                        this.elements.has(t) || (this.elements.add(t), this.delegate.elementMatched && this.delegate.elementMatched(t))
                    }
                }, {
                    key: "_removeElement",
                    value: function(t) {
                        this.elements.has(t) && (this.elements.delete(t), this.delegate.elementUnmatched && this.delegate.elementUnmatched(t))
                    }
                }], [{
                    key: "elementFromNode",
                    value: function(t) {
                        return t.nodeType === Node.ELEMENT_NODE && t
                    }
                }]), t
            }()
        }, function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.customEvents = void 0;
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
                }(),
                r = n(0),
                o = n(5),
                a = n(6),
                s = function() {
                    function t() {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), this._types = new Set, this._typesByScope = new r.Multimap, this._eventByType = new Map, this._componentsByType = new r.Multimap
                    }
                    return i(t, [{
                        key: "getScope",
                        value: function(t) {
                            return this._typesByScope.getKeysForValue(t)[0]
                        }
                    }, {
                        key: "getEvent",
                        value: function(t) {
                            return this._eventByType.get(t)
                        }
                    }, {
                        key: "add",
                        value: function(t, e) {
                            var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                                i = e || new a.CustomEvent(t, n),
                                r = i.scope || "component";
                            this._types.add(t), this._typesByScope.add(r, t), this._eventByType.set(t, i), "global" === r && o.ee.add(t, i.log)
                        }
                    }, {
                        key: "bind",
                        value: function(t, e, n) {
                            var i = this.getScope(t),
                                r = this.getEvent(t);
                            "global" === i ? (this._componentsByType.getValuesForKey(t).includes(e) || r.bind(e, o.ee, n), this._componentsByType.add(t, e)) : r.bind(e, o.ee, n)
                        }
                    }, {
                        key: "unbind",
                        value: function(t, e) {
                            var n = this.getScope(t),
                                i = this.getEvent(t);
                            "global" === n ? (this._componentsByType.delete(t, e), this._componentsByType.hasValue(e) || i.unbind(e, o.ee)) : i.unbind(e, o.ee)
                        }
                    }, {
                        key: "events",
                        get: function() {
                            return Array.from(this.types)
                        }
                    }, {
                        key: "types",
                        get: function() {
                            return this._types
                        }
                    }]), t
                }();
            e.customEvents = new s
        }, function(t, e, n) {
            "use strict";
            var i = Object.prototype.hasOwnProperty,
                r = "~";

            function o() {}

            function a(t, e, n, i, o) {
                if ("function" != typeof n) throw new TypeError("The listener must be a function");
                var a = new function(t, e, n) {
                        this.fn = t, this.context = e, this.once = n || !1
                    }(n, i || t, o),
                    s = r ? r + e : e;
                return t._events[s] ? t._events[s].fn ? t._events[s] = [t._events[s], a] : t._events[s].push(a) : (t._events[s] = a, t._eventsCount++), t
            }

            function s(t, e) {
                0 == --t._eventsCount ? t._events = new o : delete t._events[e]
            }

            function c() {
                this._events = new o, this._eventsCount = 0
            }
            Object.create && (o.prototype = Object.create(null), (new o).__proto__ || (r = !1)), c.prototype.eventNames = function() {
                var t, e, n = [];
                if (0 === this._eventsCount) return n;
                for (e in t = this._events) i.call(t, e) && n.push(r ? e.slice(1) : e);
                return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(t)) : n
            }, c.prototype.listeners = function(t) {
                var e = r ? r + t : t,
                    n = this._events[e];
                if (!n) return [];
                if (n.fn) return [n.fn];
                for (var i = 0, o = n.length, a = new Array(o); i < o; i++) a[i] = n[i].fn;
                return a
            }, c.prototype.listenerCount = function(t) {
                var e = r ? r + t : t,
                    n = this._events[e];
                return n ? n.fn ? 1 : n.length : 0
            }, c.prototype.emit = function(t, e, n, i, o, a) {
                var s = r ? r + t : t;
                if (!this._events[s]) return !1;
                var c, l, h = this._events[s],
                    u = arguments.length;
                if (h.fn) {
                    switch (h.once && this.removeListener(t, h.fn, void 0, !0), u) {
                        case 1:
                            return h.fn.call(h.context), !0;
                        case 2:
                            return h.fn.call(h.context, e), !0;
                        case 3:
                            return h.fn.call(h.context, e, n), !0;
                        case 4:
                            return h.fn.call(h.context, e, n, i), !0;
                        case 5:
                            return h.fn.call(h.context, e, n, i, o), !0;
                        case 6:
                            return h.fn.call(h.context, e, n, i, o, a), !0
                    }
                    for (l = 1, c = new Array(u - 1); l < u; l++) c[l - 1] = arguments[l];
                    h.fn.apply(h.context, c)
                } else {
                    var p, d = h.length;
                    for (l = 0; l < d; l++) switch (h[l].once && this.removeListener(t, h[l].fn, void 0, !0), u) {
                        case 1:
                            h[l].fn.call(h[l].context);
                            break;
                        case 2:
                            h[l].fn.call(h[l].context, e);
                            break;
                        case 3:
                            h[l].fn.call(h[l].context, e, n);
                            break;
                        case 4:
                            h[l].fn.call(h[l].context, e, n, i);
                            break;
                        default:
                            if (!c)
                                for (p = 1, c = new Array(u - 1); p < u; p++) c[p - 1] = arguments[p];
                            h[l].fn.apply(h[l].context, c)
                    }
                }
                return !0
            }, c.prototype.on = function(t, e, n) {
                return a(this, t, e, n, !1)
            }, c.prototype.once = function(t, e, n) {
                return a(this, t, e, n, !0)
            }, c.prototype.removeListener = function(t, e, n, i) {
                var o = r ? r + t : t;
                if (!this._events[o]) return this;
                if (!e) return s(this, o), this;
                var a = this._events[o];
                if (a.fn) a.fn !== e || i && !a.once || n && a.context !== n || s(this, o);
                else {
                    for (var c = 0, l = [], h = a.length; c < h; c++)(a[c].fn !== e || i && !a[c].once || n && a[c].context !== n) && l.push(a[c]);
                    l.length ? this._events[o] = 1 === l.length ? l[0] : l : s(this, o)
                }
                return this
            }, c.prototype.removeAllListeners = function(t) {
                var e;
                return t ? (e = r ? r + t : t, this._events[e] && s(this, e)) : (this._events = new o, this._eventsCount = 0), this
            }, c.prototype.off = c.prototype.removeListener, c.prototype.addListener = c.prototype.on, c.prefixed = r, c.EventEmitter = c, t.exports = c
        }, function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.ucfirst = function(t) {
                return t.charAt(0).toUpperCase() + t.slice(1)
            }, e.lcfirst = function(t) {
                return t.charAt(0).toLowerCase() + t.slice(1)
            }, e.$parent = function t(e, n) {
                if (e.parentNode && "function" == typeof e.parentNode.matches) return e.parentNode.matches(n) ? e.parentNode : t(e.parentNode, n)
            }
        }, function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.mixedEvents = void 0;
            var i = n(0),
                r = {
                    enter: ["mouseenter", "touchstart"],
                    leave: ["mouseleave", "touchend"],
                    move: ["mousemove", "touchmove"],
                    over: ["mouseover", "touchmove"],
                    out: ["mouseout", "touchmove"]
                },
                o = e.mixedEvents = new i.Multimap;
            Object.keys(r).forEach(function(t) {
                r[t].forEach(function(e) {
                    o.add(t, e)
                })
            })
        }, function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.passiveEvents = ["scroll", "wheel", "touchstart", "touchmove", "touchend"]
        }, function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.subscribers = void 0;
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
                }(),
                r = n(0);

            function o(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            var a = function() {
                    function t(e) {
                        o(this, t), this._component = e, this._callbacksByName = new r.Multimap
                    }
                    return i(t, [{
                        key: "on",
                        value: function(t, e) {
                            return this._callbacksByName.add(t, e), this
                        }
                    }, {
                        key: "trigger",
                        value: function(t) {
                            for (var e = this, n = arguments.length, i = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
                            this._callbacksByName.getValuesForKey(t).forEach(function(t) {
                                t.apply.apply(t, [e._component].concat(i))
                            })
                        }
                    }, {
                        key: "component",
                        get: function() {
                            return this._component
                        }
                    }]), t
                }(),
                s = function() {
                    function t() {
                        o(this, t), this._componentsBySlug = new r.Multimap, this._subscribersBySlug = new r.Multimap
                    }
                    return i(t, [{
                        key: "add",
                        value: function(t, e) {
                            if (this._componentsBySlug.has(e, t)) return this._subscribersBySlug.getValuesForKey(e).filter(function(e) {
                                return e.component === t
                            })[0];
                            var n = new a(t);
                            return this._componentsBySlug.add(e, t), this._subscribersBySlug.add(e, n), n
                        }
                    }, {
                        key: "remove",
                        value: function(t) {
                            var e = this;
                            this._componentsBySlug.hasValue(t) && this._componentsBySlug.getKeysForValue(t).forEach(function(n) {
                                e._componentsBySlug.delete(n, t), e._subscribersBySlug.getValuesForKey(n).forEach(function(i) {
                                    i.component === t && e._subscribersBySlug.delete(n, i)
                                })
                            })
                        }
                    }, {
                        key: "emit",
                        value: function(t) {
                            for (var e = t.slug, n = arguments.length, i = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
                            var o = i[0],
                                a = i.slice(1);
                            this._subscribersBySlug.hasKey(e) && this._subscribersBySlug.getValuesForKey(e).forEach(function(t) {
                                t.trigger(o, a)
                            })
                        }
                    }]), t
                }();
            e.subscribers = new s
        }, function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Handler = void 0;
            var i = function(t, e) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t)) return function(t, e) {
                        var n = [],
                            i = !0,
                            r = !1,
                            o = void 0;
                        try {
                            for (var a, s = t[Symbol.iterator](); !(i = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); i = !0);
                        } catch (t) {
                            r = !0, o = t
                        } finally {
                            try {
                                !i && s.return && s.return()
                            } finally {
                                if (r) throw o
                            }
                        }
                        return n
                    }(t, e);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                },
                r = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var i = e[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                        }
                    }
                    return function(e, n, i) {
                        return n && t(e.prototype, n), i && t(e, i), e
                    }
                }(),
                o = function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }(n(29)),
                a = n(7),
                s = n(1);

            function c(t) {
                if (Array.isArray(t)) {
                    for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                    return n
                }
                return Array.from(t)
            }
            e.Handler = function() {
                function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.context = e, this.plugins = e.module.application.plugins
                }
                return r(t, null, [{
                    key: "events",
                    get: function() {
                        return this._events || Object.defineProperty(this, "_events", {
                            value: Object.getOwnPropertyNames(this.prototype).filter(function(t) {
                                return /^on/.test(t)
                            }).map(function(t) {
                                return (0, a.lcfirst)(t.slice(2))
                            })
                        })._events
                    }
                }]), r(t, [{
                    key: "getMethod",
                    value: function(t) {
                        var e = t;
                        if (s.mixedEvents.hasValue(t) && this.constructor.events.includes(s.mixedEvents.getKeysForValue(t)[0])) {
                            var n = s.mixedEvents.getKeysForValue(t);
                            e = i(n, 1)[0]
                        }
                        return "on" + (0, a.ucfirst)(e)
                    }
                }, {
                    key: "getCustomOptions",
                    value: function(t) {
                        return this["options" + (0, a.ucfirst)(t)] || !1
                    }
                }, {
                    key: "getCategory",
                    value: function(t) {
                        return s.customEvents.getScope(t) ? "custom" : s.mixedEvents.hasKey(t) ? "mixed" : !!this[this.getMethod(t)] && "native"
                    }
                }, {
                    key: "_bindEvent",
                    value: function(e) {
                        var n = this,
                            i = this.getCategory(e);
                        switch (i || this.context.handleError(new Error, "Unknown event type [" + e + "]"), i) {
                            case "custom":
                                s.customEvents.bind(e, this, this.getCustomOptions(e));
                                break;
                            case "mixed":
                                s.mixedEvents.getValuesForKey(e).forEach(function(e) {
                                    n.context.element.addEventListener(e, n, t.getOptions(e))
                                });
                                break;
                            case "native":
                            default:
                                this.context.element.addEventListener(e, this, t.getOptions(e))
                        }
                    }
                }, {
                    key: "_unbindEvent",
                    value: function(e) {
                        var n = this,
                            i = this.getCategory(e);
                        switch (i || this.context.handleError(new Error, "Unknown event type [" + e + "]"), i) {
                            case "custom":
                                s.customEvents.unbind(e, this);
                                break;
                            case "mixed":
                                s.mixedEvents.getValuesForKey(e).forEach(function(e) {
                                    n.context.element.removeEventListener(e, n, t.getOptions(e))
                                });
                                break;
                            case "native":
                            default:
                                this.context.element.removeEventListener(e, this, t.getOptions(e))
                        }
                    }
                }, {
                    key: "handleEvent",
                    value: function(t) {
                        var e = this,
                            n = s.mixedEvents.getKeysForValue(t.type)[0] || t.type,
                            i = this["delegate" + (0, a.ucfirst)(n)];
                        if (i) {
                            var r = !1,
                                o = null;
                            if ("string" == typeof i) {
                                var l = [].concat(c(this.context.element.querySelectorAll(i)));
                                o = t.target.matches(i) ? t.target : (0, a.$parent)(t.target, i), r = l.indexOf(o) >= 0
                            } else r = (Array.isArray(i) || i instanceof NodeList ? [].concat(c(i)) : [i]).some(function(e) {
                                return !(e !== t.target && !e.contains(t.target) || (o = e, 0))
                            });
                            r && (this[this.getMethod(t.type)](t, o), this.plugins.forEach(function(n) {
                                n.handleEvent && n.handleEvent(e, t)
                            }))
                        } else this[this.getMethod(t.type)](t), this.plugins.forEach(function(n) {
                            n.handleEvent && n.handleEvent(e, t)
                        })
                    }
                }, {
                    key: "bindAll",
                    value: function() {
                        var t = this,
                            e = this.constructor.events || [];
                        e.forEach(function(e) {
                            t._bindEvent(e)
                        }), this.plugins.forEach(function(n) {
                            n.bindAll && n.bindAll(t, e)
                        })
                    }
                }, {
                    key: "unbindAll",
                    value: function() {
                        var t = this,
                            e = this.constructor.events;
                        e.forEach(function(e) {
                            t._unbindEvent(e)
                        }), this.plugins.forEach(function(n) {
                            n.unbindAll && n.unbindAll(t, e)
                        })
                    }
                }, {
                    key: "bind",
                    value: function(t) {
                        this._bindEvent(t)
                    }
                }, {
                    key: "unbind",
                    value: function(t) {
                        this._unbindEvent(t)
                    }
                }, {
                    key: "subscribe",
                    value: function(t) {
                        return s.subscribers.add(this, t)
                    }
                }, {
                    key: "emit",
                    value: function() {
                        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                        s.subscribers.emit.apply(s.subscribers, [this].concat(e))
                    }
                }, {
                    key: "unsubscribeAll",
                    value: function() {
                        s.subscribers.remove(this)
                    }
                }], [{
                    key: "getOptions",
                    value: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                            capture: !1
                        };
                        return s.passiveEvents.includes(t) && (e.passive = !0), !0 === o.default.passiveEvents ? e : e.capture
                    }
                }]), t
            }()
        }, function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = s(n(30)),
                r = s(n(31)),
                o = s(n(32)),
                a = s(n(33));

            function s(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            var c = {
                state: {
                    detectHover: i.default,
                    detectPointer: r.default,
                    detectTouchEvents: o.default,
                    detectPassiveEvents: a.default
                },
                update: function() {
                    c.state.detectHover.update(), c.state.detectPointer.update(), c.state.detectTouchEvents.update(), c.state.detectPassiveEvents.update(), c.updateOnlyOwnProperties()
                },
                updateOnlyOwnProperties: function() {
                    "undefined" != typeof window && (c.passiveEvents = c.state.detectPassiveEvents.hasSupport || !1, c.hasTouch = c.state.detectTouchEvents.hasSupport || !1, c.deviceType = function(t, e, n, i) {
                        return t && (e || n) ? "hybrid" : t && Object.keys(i.detectHover).filter(function(t) {
                            return "update" !== t
                        }).every(function(t) {
                            return !1 === i.detectHover[t]
                        }) && Object.keys(i.detectPointer).filter(function(t) {
                            return "update" !== t
                        }).every(function(t) {
                            return !1 === i.detectPointer[t]
                        }) ? window.navigator && /android/.test(window.navigator.userAgent.toLowerCase()) ? "touchOnly" : "hybrid" : t ? "touchOnly" : "mouseOnly"
                    }(c.hasTouch, c.state.detectHover.anyHover, c.state.detectPointer.anyFine, c.state), c.hasMouse = "touchOnly" !== c.deviceType, c.primaryInput = ("mouseOnly" === c.deviceType ? "mouse" : "touchOnly" === c.deviceType && "touch") || c.state.detectPointer.fine && "mouse" || c.state.detectPointer.coarse && "touch" || "mouse", /windows/.test(window.navigator.userAgent.toLowerCase()) && /chrome/.test(window.navigator.userAgent.toLowerCase()) && function(t) {
                        return t >= 59 && t < 62
                    }(parseInt(/Chrome\/([0-9.]+)/.exec(navigator.userAgent)[1], 10)) && c.hasTouch && (c.deviceType = "hybrid", c.hasMouse = !0, c.primaryInput = "mouse"))
                }
            };
            c.updateOnlyOwnProperties(), e.default = c
        }, function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = {
                update: function() {
                    "undefined" != typeof window && "function" == typeof window.matchMedia && (i.hover = window.matchMedia("(hover: hover)").matches, i.none = window.matchMedia("(hover: none)").matches || window.matchMedia("(hover: on-demand)").matches, i.anyHover = window.matchMedia("(any-hover: hover)").matches, i.anyNone = window.matchMedia("(any-hover: none)").matches || window.matchMedia("(any-hover: on-demand)").matches)
                }
            };
            i.update(), e.default = i
        }, function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = {
                update: function() {
                    "undefined" != typeof window && "function" == typeof window.matchMedia && (i.fine = window.matchMedia("(pointer: fine)").matches, i.coarse = window.matchMedia("(pointer: coarse)").matches, i.none = window.matchMedia("(pointer: none)").matches, i.anyFine = window.matchMedia("(any-pointer: fine)").matches, i.anyCoarse = window.matchMedia("(any-pointer: coarse)").matches, i.anyNone = window.matchMedia("(any-pointer: none)").matches)
                }
            };
            i.update(), e.default = i
        }, function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = {
                update: function() {
                    "undefined" != typeof window && (i.hasSupport = "ontouchstart" in window, i.browserSupportsApi = Boolean(window.TouchEvent))
                }
            };
            i.update(), e.default = i
        }, function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = {
                update: function() {
                    if ("undefined" != typeof window && "function" == typeof window.addEventListener) {
                        var t = !1,
                            e = Object.defineProperty({}, "passive", {
                                get: function() {
                                    t = !0
                                }
                            }),
                            n = function() {};
                        window.addEventListener("testPassiveEventSupport", n, e), window.removeEventListener("testPassiveEventSupport", n, e), i.hasSupport = t
                    }
                }
            };
            i.update(), e.default = i
        }, function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.mixComponent = e.Component = void 0;
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
                }(),
                r = n(1);

            function o(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function a(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            var c = e.Component = function(t) {
                function e(t) {
                    o(this, e);
                    var n = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                    n.context = t;
                    var i = n.scope.props;
                    if (i)
                        for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (n[r] ? n.context.handleError("[" + r + "] already exists!", "initializing props") : n[r] = i[r]);
                    return n
                }
                return s(e, r.Handler), i(e, [{
                    key: "load",
                    value: function() {}
                }, {
                    key: "init",
                    value: function() {}
                }, {
                    key: "destroy",
                    value: function() {}
                }, {
                    key: "scope",
                    get: function() {
                        return this.context.scope
                    }
                }, {
                    key: "$el",
                    get: function() {
                        return this.scope.element
                    }
                }, {
                    key: "$refs",
                    get: function() {
                        return this.scope.refs
                    }
                }, {
                    key: "slug",
                    get: function() {
                        return this.scope.slug
                    }
                }, {
                    key: "data",
                    get: function() {
                        return this.scope.data
                    }
                }]), e
            }();
            e.mixComponent = function() {
                for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                var i = function(t) {
                        function n() {
                            o(this, n);
                            for (var t = arguments.length, i = Array(t), s = 0; s < t; s++) i[s] = arguments[s];
                            var c = i[0],
                                l = i.slice(1),
                                h = a(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, c));
                            return e.forEach(function(t) {
                                r(h, new(Function.prototype.bind.apply(t, [null].concat(function(t) {
                                    if (Array.isArray(t)) {
                                        for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                                        return n
                                    }
                                    return Array.from(t)
                                }(l)))))
                            }), h
                        }
                        return s(n, c), n
                    }(),
                    r = function(t, e) {
                        Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e)).forEach(function(n) {
                            n.match(/^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/) || Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
                        })
                    };
                return e.forEach(function(t) {
                    r(i.prototype, t.prototype), r(i, t)
                }), i
            }
        }, function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.mixNoComponent = e.NoComponent = void 0;
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
                }(),
                r = n(1);

            function o(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function a(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            var c = e.NoComponent = function(t) {
                function e(t) {
                    o(this, e);
                    var n = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                    n.context = t;
                    var i = n.scope.props;
                    if (i)
                        for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (n[r] ? n.context.handleError("[" + r + "] already exists!", "initializing props") : n[r] = i[r]);
                    return n
                }
                return s(e, r.Handler), i(e, [{
                    key: "remove",
                    value: function() {
                        this.context.module.destroyNoElement(this.slug)
                    }
                }, {
                    key: "init",
                    value: function() {}
                }, {
                    key: "destroy",
                    value: function() {}
                }, {
                    key: "scope",
                    get: function() {
                        return this.context.scope
                    }
                }, {
                    key: "slug",
                    get: function() {
                        return this.scope.slug
                    }
                }]), e
            }();
            e.mixNoComponent = function() {
                for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                var i = function(t) {
                        function n() {
                            o(this, n);
                            for (var t = arguments.length, i = Array(t), s = 0; s < t; s++) i[s] = arguments[s];
                            var c = i[0],
                                l = i.slice(1),
                                h = a(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, c));
                            return e.forEach(function(t) {
                                r(h, new(Function.prototype.bind.apply(t, [null].concat(function(t) {
                                    if (Array.isArray(t)) {
                                        for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                                        return n
                                    }
                                    return Array.from(t)
                                }(l)))))
                            }), h
                        }
                        return s(n, c), n
                    }(),
                    r = function(t, e) {
                        Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e)).forEach(function(n) {
                            n.match(/^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/) || Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
                        })
                    };
                return e.forEach(function(t) {
                    r(i.prototype, t.prototype), r(i, t)
                }), i
            }
        }])
    }, function(t, e, n) {
        t.exports = function() {
            var t = function() {
                function t() {}
                return t.prototype.then = function(n, i) {
                    var r = new t,
                        o = this.s;
                    if (o) {
                        var a = 1 & o ? n : i;
                        if (a) {
                            try {
                                e(r, 1, a(this.v))
                            } catch (t) {
                                e(r, 2, t)
                            }
                            return r
                        }
                        return this
                    }
                    return this.o = function(t) {
                        try {
                            var o = t.v;
                            1 & t.s ? e(r, 1, n ? n(o) : o) : i ? e(r, 1, i(o)) : e(r, 2, o)
                        } catch (t) {
                            e(r, 2, t)
                        }
                    }, r
                }, t
            }();

            function e(n, i, r) {
                if (!n.s) {
                    if (r instanceof t) {
                        if (!r.s) return void(r.o = e.bind(null, n, i));
                        1 & i && (i = r.s), r = r.v
                    }
                    if (r && r.then) return void r.then(e.bind(null, n, i), e.bind(null, n, 2));
                    n.s = i, n.v = r;
                    var o = n.o;
                    o && o(n)
                }
            }

            function n(t, e) {
                try {
                    var n = t()
                } catch (t) {
                    return e(t)
                }
                return n && n.then ? n.then(void 0, e) : n
            }
            var i = {};
            ! function() {
                function n(t) {
                    this.t = t, this.i = null, this.u = null, this.h = null, this.l = null
                }

                function r(t) {
                    return {
                        value: t,
                        done: !0
                    }
                }

                function o(t) {
                    return {
                        value: t,
                        done: !1
                    }
                }
                n.prototype[Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator"))] = function() {
                    return this
                }, n.prototype.p = function(e) {
                    return this.u(e && e.then ? e.then(o) : o(e)), this.i = new t
                }, n.prototype.next = function(n) {
                    var o = this;
                    return o.l = new Promise(function(a) {
                        var s = o.i;
                        if (null === s) {
                            var c = o.t;
                            if (null === c) return a(o.l);

                            function l(t) {
                                o.u(t && t.then ? t.then(r) : r(t)), o.i = null, o.u = null
                            }
                            o.t = null, o.u = a, c(o).then(l, function(e) {
                                if (e === i) l(o.h);
                                else {
                                    var n = new t;
                                    o.u(n), o.i = null, o.u = null, _resolve(n, 2, e)
                                }
                            })
                        } else o.i = null, o.u = a, e(s, 1, n)
                    })
                }, n.prototype.return = function(t) {
                    var n = this;
                    return n.l = new Promise(function(o) {
                        var a = n.i;
                        if (null === a) return null === n.t ? o(n.l) : (n.t = null, o(t && t.then ? t.then(r) : r(t)));
                        n.h = t, n.u = o, n.i = null, e(a, 2, i)
                    })
                }, n.prototype.throw = function(t) {
                    var n = this;
                    return n.l = new Promise(function(i, r) {
                        var o = n.i;
                        if (null === o) return null === n.t ? i(n.l) : (n.t = null, r(t));
                        n.u = i, n.i = null, e(o, 2, t)
                    })
                }
            }();
            var r, o, a = (function(t) {
                var e = t.exports = function(t, e) {
                    return e = e || function() {},
                        function() {
                            var n = !1,
                                i = arguments,
                                r = new Promise(function(e, r) {
                                    var o, a = t.apply({
                                        async: function() {
                                            return n = !0,
                                                function(t, n) {
                                                    t ? r(t) : e(n)
                                                }
                                        }
                                    }, Array.prototype.slice.call(i));
                                    n || (!(o = a) || "object" != typeof o && "function" != typeof o || "function" != typeof o.then ? e(a) : a.then(e, r))
                                });
                            return r.then(e.bind(null, null), e), r
                        }
                };
                e.cb = function(t, n) {
                    return e(function() {
                        var e = Array.prototype.slice.call(arguments);
                        return e.length === t.length - 1 && e.push(this.async()), t.apply(this, e)
                    }, n)
                }
            }(r = {
                exports: {}
            }), r.exports);
            ! function(t) {
                t[t.off = 0] = "off", t[t.error = 1] = "error", t[t.warning = 2] = "warning", t[t.info = 3] = "info", t[t.debug = 4] = "debug"
            }(o || (o = {}));
            var s = o.off,
                c = function(t) {
                    this.m = t
                };
            c.getLevel = function() {
                return s
            }, c.setLevel = function(t) {
                return s = o[t]
            }, c.prototype.error = function() {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                this.P(console.error, o.error, t)
            }, c.prototype.warn = function() {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                this.P(console.warn, o.warning, t)
            }, c.prototype.info = function() {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                this.P(console.info, o.info, t)
            }, c.prototype.debug = function() {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                this.P(console.log, o.debug, t)
            }, c.prototype.P = function(t, e, n) {
                e <= c.getLevel() && t.apply(console, ["[" + this.m + "] "].concat(n))
            };
            var l = function() {
                this.logger = new c("@barba/core"), this.all = ["ready", "page", "reset", "currentAdded", "currentRemoved", "nextAdded", "nextRemoved", "beforeAppear", "appear", "afterAppear", "appearCanceled", "before", "beforeLeave", "leave", "afterLeave", "leaveCanceled", "beforeEnter", "enter", "afterEnter", "enterCanceled", "after"], this.registered = new Map, this.init()
            };
            l.prototype.init = function() {
                var t = this;
                this.registered.clear(), this.all.forEach(function(e) {
                    t[e] || (t[e] = function(n, i) {
                        void 0 === i && (i = null), t.registered.has(e) || t.registered.set(e, new Set), t.registered.get(e).add({
                            ctx: i,
                            fn: n
                        })
                    })
                })
            }, l.prototype.do = function(t) {
                for (var e = [], n = arguments.length - 1; n-- > 0;) e[n] = arguments[n + 1];
                if (this.registered.has(t)) {
                    var i = Promise.resolve();
                    return this.registered.get(t).forEach(function(t) {
                        var n = t.ctx ? t.fn.bind(t.ctx) : t.fn;
                        i = i.then(function() {
                            return a(n).apply(void 0, e)
                        })
                    }), i
                }
                return Promise.resolve()
            }, l.prototype.clear = function() {
                var t = this;
                this.all.forEach(function(e) {
                    delete t[e]
                }), this.init()
            }, l.prototype.help = function() {
                this.logger.info("Available hooks: " + this.all.join(","));
                var t = [];
                this.registered.forEach(function(e, n) {
                    return t.push(n)
                }), this.logger.info("Registered hooks: " + t.join(","))
            };
            var h = new l,
                u = function t(e, n, i) {
                    return e instanceof RegExp ? function(t, e) {
                        if (!e) return t;
                        var n = t.source.match(/\((?!\?)/g);
                        if (n)
                            for (var i = 0; i < n.length; i++) e.push({
                                name: i,
                                prefix: null,
                                delimiter: null,
                                optional: !1,
                                repeat: !1,
                                pattern: null
                            });
                        return t
                    }(e, n) : Array.isArray(e) ? function(e, n, i) {
                        for (var r = [], o = 0; o < e.length; o++) r.push(t(e[o], n, i).source);
                        return new RegExp("(?:" + r.join("|") + ")", b(i))
                    }(e, n, i) : function(t, e, n) {
                        return w(g(t, n), e, n)
                    }(e, n, i)
                },
                p = g,
                d = y,
                f = w,
                m = "/",
                v = new RegExp(["(\\\\.)", "(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"), "g");

            function g(t, e) {
                for (var n, i = [], r = 0, o = 0, a = "", s = e && e.delimiter || m, c = e && e.whitelist || void 0, l = !1; null !== (n = v.exec(t));) {
                    var h = n[0],
                        u = n[1],
                        p = n.index;
                    if (a += t.slice(o, p), o = p + h.length, u) a += u[1], l = !0;
                    else {
                        var d = "",
                            f = n[2],
                            g = n[3],
                            y = n[4],
                            b = n[5];
                        if (!l && a.length) {
                            var w = a.length - 1,
                                M = a[w];
                            (!c || c.indexOf(M) > -1) && (d = M, a = a.slice(0, w))
                        }
                        a && (i.push(a), a = "", l = !1);
                        var T = g || y,
                            E = d || s;
                        i.push({
                            name: f || r++,
                            prefix: d,
                            delimiter: E,
                            optional: "?" === b || "*" === b,
                            repeat: "+" === b || "*" === b,
                            pattern: T ? x(T) : "[^" + _(E === s ? E : E + s) + "]+?"
                        })
                    }
                }
                return (a || o < t.length) && i.push(a + t.substr(o)), i
            }

            function y(t) {
                for (var e = new Array(t.length), n = 0; n < t.length; n++) "object" == typeof t[n] && (e[n] = new RegExp("^(?:" + t[n].pattern + ")$"));
                return function(n, i) {
                    for (var r = "", o = i && i.encode || encodeURIComponent, a = 0; a < t.length; a++) {
                        var s = t[a];
                        if ("string" != typeof s) {
                            var c, l = n ? n[s.name] : void 0;
                            if (Array.isArray(l)) {
                                if (!s.repeat) throw new TypeError('Expected "' + s.name + '" to not repeat, but got array');
                                if (0 === l.length) {
                                    if (s.optional) continue;
                                    throw new TypeError('Expected "' + s.name + '" to not be empty')
                                }
                                for (var h = 0; h < l.length; h++) {
                                    if (c = o(l[h], s), !e[a].test(c)) throw new TypeError('Expected all "' + s.name + '" to match "' + s.pattern + '"');
                                    r += (0 === h ? s.prefix : s.delimiter) + c
                                }
                            } else if ("string" != typeof l && "number" != typeof l && "boolean" != typeof l) {
                                if (!s.optional) throw new TypeError('Expected "' + s.name + '" to be ' + (s.repeat ? "an array" : "a string"))
                            } else {
                                if (c = o(String(l), s), !e[a].test(c)) throw new TypeError('Expected "' + s.name + '" to match "' + s.pattern + '", but got "' + c + '"');
                                r += s.prefix + c
                            }
                        } else r += s
                    }
                    return r
                }
            }

            function _(t) {
                return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1")
            }

            function x(t) {
                return t.replace(/([=!:$\/()])/g, "\\$1")
            }

            function b(t) {
                return t && t.sensitive ? "" : "i"
            }

            function w(t, e, n) {
                for (var i = (n = n || {}).strict, r = !1 !== n.start, o = !1 !== n.end, a = n.delimiter || m, s = [].concat(n.endsWith || []).map(_).concat("$").join("|"), c = r ? "^" : "", l = 0; l < t.length; l++) {
                    var h = t[l];
                    if ("string" == typeof h) c += _(h);
                    else {
                        var u = h.repeat ? "(?:" + h.pattern + ")(?:" + _(h.delimiter) + "(?:" + h.pattern + "))*" : h.pattern;
                        e && e.push(h), c += h.optional ? h.prefix ? "(?:" + _(h.prefix) + "(" + u + "))?" : "(" + u + ")?" : _(h.prefix) + "(" + u + ")"
                    }
                }
                if (o) i || (c += "(?:" + _(a) + ")?"), c += "$" === s ? "$" : "(?=" + s + ")";
                else {
                    var p = t[t.length - 1],
                        d = "string" == typeof p ? p[p.length - 1] === a : void 0 === p;
                    i || (c += "(?:" + _(a) + "(?=" + s + "))?"), d || (c += "(?=" + _(a) + "|" + s + ")")
                }
                return new RegExp(c, b(n))
            }
            u.parse = p, u.compile = function(t, e) {
                return y(g(t, e))
            }, u.tokensToFunction = d, u.tokensToRegExp = f;
            var M = {
                    container: "container",
                    namespace: "namespace",
                    prefix: "data-barba",
                    prevent: "prevent",
                    wrapper: "wrapper"
                },
                T = function() {
                    this.g = M, this.A = new DOMParser
                };
            T.prototype.toString = function(t) {
                return t.outerHTML
            }, T.prototype.toDocument = function(t) {
                return this.A.parseFromString(t, "text/html")
            }, T.prototype.toElement = function(t) {
                var e = document.createElement("div");
                return e.innerHTML = t, e
            }, T.prototype.getHtml = function(t) {
                return void 0 === t && (t = document), this.toString(t.documentElement)
            }, T.prototype.getWrapper = function(t) {
                return void 0 === t && (t = document), t.querySelector("[" + this.g.prefix + '="' + this.g.wrapper + '"]')
            }, T.prototype.getContainer = function(t) {
                return void 0 === t && (t = document), t.querySelector("[" + this.g.prefix + '="' + this.g.container + '"]')
            }, T.prototype.getNamespace = function(t) {
                void 0 === t && (t = document);
                var e = t.querySelector("[" + this.g.prefix + "-" + this.g.namespace + "]");
                return e ? e.getAttribute(this.g.prefix + "-" + this.g.namespace) : null
            }, T.prototype.getHref = function(t) {
                if (t.tagName && "a" === t.tagName.toLowerCase()) {
                    var e = t.getAttribute("href");
                    if (e) return e.baseVal || e
                }
                return null
            };
            var E = new T,
                S = function() {
                    this.T = []
                },
                A = {
                    current: {
                        configurable: !0
                    },
                    previous: {
                        configurable: !0
                    },
                    size: {
                        configurable: !0
                    }
                };
            S.prototype.add = function(t, e) {
                this.T.push({
                    url: t,
                    ns: e
                })
            }, S.prototype.remove = function() {
                this.T.pop()
            }, S.prototype.push = function(t, e) {
                this.add(t, e), window.history && window.history.pushState(null, "", t)
            }, S.prototype.cancel = function() {
                this.remove(), window.history && window.history.back()
            }, A.current.get = function() {
                return this.T[this.T.length - 1]
            }, A.previous.get = function() {
                return this.T.length < 2 ? null : this.T[this.T.length - 2]
            }, A.size.get = function() {
                return this.T.length
            }, Object.defineProperties(S.prototype, A);
            var P = new S,
                L = function(t, e) {
                    try {
                        var n = function() {
                            if (!e.next.html) return Promise.resolve(t).then(function(t) {
                                var n = e.next,
                                    i = e.trigger;
                                if (t) {
                                    var r = E.toElement(t);
                                    n.namespace = E.getNamespace(r), n.container = E.getContainer(r), n.html = t, "popstate" === i ? P.add(n.url.href, n.namespace) : P.push(n.url.href, n.namespace);
                                    var o = E.toDocument(t);
                                    document.title = o.title
                                }
                            })
                        }();
                        return Promise.resolve(n && n.then ? n.then(function() {}) : void 0)
                    } catch (t) {
                        return Promise.reject(t)
                    }
                },
                R = u,
                C = {
                    update: L,
                    nextTick: function() {
                        return new Promise(function(t) {
                            window.requestAnimationFrame(t)
                        })
                    },
                    pathToRegexp: R
                },
                O = function() {
                    return window.location.origin
                },
                I = function(t) {
                    var e = t || window.location.port,
                        n = window.location.protocol;
                    return "" !== e ? parseInt(e, 10) : "https:" === n ? 443 : 80
                },
                D = function(t) {
                    var e, n = t.replace(O(), ""),
                        i = {},
                        r = n.indexOf("#");
                    r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r));
                    var o = n.indexOf("?");
                    return o >= 0 && (i = N(n.slice(o + 1)), n = n.slice(0, o)), {
                        hash: e,
                        path: n,
                        query: i
                    }
                },
                N = function(t) {
                    return t.split("&").reduce(function(t, e) {
                        var n = e.split("=");
                        return t[n[0]] = n[1], t
                    }, {})
                },
                B = function(t) {
                    return t.replace(/(\/#.*|\/|#.*)$/, "")
                },
                H = {
                    getHref: function() {
                        return window.location.href
                    },
                    getOrigin: O,
                    getPort: I,
                    getPath: function(t) {
                        return D(t).path
                    },
                    parse: D,
                    parseQuery: N,
                    clean: B
                },
                F = function(t) {
                    if (this.j = [], "boolean" == typeof t) this.R = t;
                    else {
                        var e = Array.isArray(t) ? t : [t];
                        this.j = e.map(function(t) {
                            return R(t)
                        })
                    }
                };
            F.prototype.checkUrl = function(t) {
                if ("boolean" == typeof this.R) return this.R;
                var e = D(t).path;
                return this.j.some(function(t) {
                    return null !== t.exec(e)
                })
            };
            var k = function(t) {
                function e(e) {
                    t.call(this, e), this.T = new Map
                }
                return t && (e.__proto__ = t), (e.prototype = Object.create(t && t.prototype)).constructor = e, e.prototype.set = function(t, e, n) {
                    return this.checkUrl(t) || this.T.set(t, {
                        action: n,
                        request: e
                    }), {
                        action: n,
                        request: e
                    }
                }, e.prototype.get = function(t) {
                    return this.T.get(t)
                }, e.prototype.getRequest = function(t) {
                    return this.T.get(t).request
                }, e.prototype.getAction = function(t) {
                    return this.T.get(t).action
                }, e.prototype.has = function(t) {
                    return this.T.has(t)
                }, e.prototype.delete = function(t) {
                    return this.T.delete(t)
                }, e.prototype.update = function(t, e) {
                    var n = Object.assign({}, this.T.get(t), e);
                    return this.T.set(t, n), n
                }, e
            }(F);

            function U(t, e, n) {
                return void 0 === e && (e = 2e3), new Promise(function(i, r) {
                    var o = new XMLHttpRequest;
                    o.onreadystatechange = function() {
                        if (o.readyState === XMLHttpRequest.DONE)
                            if (200 === o.status) i(o.responseText);
                            else if (o.status) {
                            var e = {
                                status: o.status,
                                statusText: o.statusText
                            };
                            n(t, e), r(e)
                        }
                    }, o.ontimeout = function() {
                        var i = new Error("Timeout error [" + e + "]");
                        n(t, i), r(i)
                    }, o.onerror = function() {
                        var e = new Error("Fetch error");
                        n(t, e), r(e)
                    }, o.open("GET", t), o.timeout = e, o.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml"), o.setRequestHeader("x-barba", "yes"), o.send()
                })
            }
            var z = function() {
                    return !window.history.pushState
                },
                G = function(t) {
                    return !t.el || !t.href
                },
                j = function(t) {
                    var e = t.event;
                    return e.which > 1 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey
                },
                V = function(t) {
                    var e = t.el;
                    return e.hasAttribute("target") && "_blank" === e.target
                },
                W = function(t) {
                    var e = t.el;
                    return void 0 !== e.protocol && window.location.protocol !== e.protocol || void 0 !== e.hostname && window.location.hostname !== e.hostname
                },
                X = function(t) {
                    var e = t.el;
                    return void 0 !== e.port && I() !== I(e.port)
                },
                q = function(t) {
                    var e = t.el;
                    return e.getAttribute && "string" == typeof e.getAttribute("download")
                },
                Y = function(t) {
                    return t.el.hasAttribute(M.prefix + "-" + M.prevent)
                },
                Z = function(t) {
                    return Boolean(t.el.closest("[" + M.prefix + "-" + M.prevent + '="all"]'))
                },
                J = function(t) {
                    return B(t.href) === B(window.location.href)
                },
                K = function(t) {
                    function e(e) {
                        t.call(this, e), this.suite = [], this.tests = new Map, this.init()
                    }
                    return t && (e.__proto__ = t), (e.prototype = Object.create(t && t.prototype)).constructor = e, e.prototype.init = function() {
                        this.add("pushState", z), this.add("exists", G), this.add("newTab", j), this.add("blank", V), this.add("corsDomain", W), this.add("corsPort", X), this.add("download", q), this.add("preventSelf", Y), this.add("preventAll", Z), this.add("sameUrl", J, !1)
                    }, e.prototype.add = function(t, e, n) {
                        void 0 === n && (n = !0), this.tests.set(t, e), n && this.suite.push(t)
                    }, e.prototype.run = function(t, e, n, i) {
                        return this.tests.get(t)({
                            el: e,
                            event: n,
                            href: i
                        })
                    }, e.prototype.checkLink = function(t, e, n) {
                        var i = this;
                        return this.suite.some(function(r) {
                            return i.run(r, t, e, n)
                        })
                    }, e
                }(F),
                Q = function(t) {
                    void 0 === t && (t = []), this.logger = new c("@barba/core"), this.all = [], this.appear = [], this.k = [{
                        name: "namespace",
                        type: "strings"
                    }, {
                        name: "custom",
                        type: "function"
                    }], t && (this.all = this.all.concat(t)), this.update()
                };
            Q.prototype.add = function(t, e) {
                switch (t) {
                    case "rule":
                        this.k.splice(e.position || 0, 0, e.value);
                        break;
                    case "transition":
                    default:
                        this.all.push(e)
                }
                this.update()
            }, Q.prototype.resolve = function(t, e) {
                var n, i = this;
                void 0 === e && (e = {});
                var r = e.appear ? this.appear : this.all;
                r = r.filter(e.self ? function(t) {
                    return t.name && "self" === t.name
                } : function(t) {
                    return !t.name || "self" !== t.name
                });
                var o = new Map,
                    a = r.find(function(n) {
                        var r = !0,
                            a = {};
                        return !(!e.self || "self" !== n.name) || (i.k.reverse().forEach(function(o) {
                            r && (r = i.O(n, o, t, a), e.appear || (n.from && n.to && (r = i.O(n, o, t, a, "from") && i.O(n, o, t, a, "to")), n.from && !n.to && (r = i.O(n, o, t, a, "from")), !n.from && n.to && (r = i.O(n, o, t, a, "to"))))
                        }), o.set(n, a), r)
                    }),
                    s = o.get(a),
                    c = [];
                if (c.push(e.appear ? "appear" : "page"), e.self && c.push("self"), s) {
                    var l = [a];
                    Object.keys(s).length > 0 && l.push(s), (n = this.logger).info.apply(n, ["Transition found [" + c.join(",") + "]"].concat(l))
                } else this.logger.info("No transition found [" + c.join(",") + "]");
                return a
            }, Q.prototype.update = function() {
                var t = this;
                this.all = this.all.map(function(e) {
                    return t.L(e)
                }).sort(function(t, e) {
                    return t.priority - e.priority
                }).reverse().map(function(t) {
                    return delete t.priority, t
                }), this.appear = this.all.filter(function(t) {
                    return void 0 !== t.appear
                })
            }, Q.prototype.O = function(t, e, n, i, r) {
                var o = !0,
                    a = !1,
                    s = t,
                    c = e.name,
                    l = c,
                    h = c,
                    u = c,
                    p = r ? s[r] : s,
                    d = "to" === r ? n.next : n.current;
                if (r ? p && p[c] : p[c]) {
                    switch (e.type) {
                        case "strings":
                        default:
                            var f = Array.isArray(p[l]) ? p[l] : [p[l]];
                            d[l] && -1 !== f.indexOf(d[l]) && (a = !0), -1 === f.indexOf(d[l]) && (o = !1);
                            break;
                        case "object":
                            var m = Array.isArray(p[h]) ? p[h] : [p[h]];
                            d[h] && (d[h].name && -1 !== m.indexOf(d[h].name) && (a = !0), -1 === m.indexOf(d[h].name) && (o = !1));
                            break;
                        case "function":
                            p[u](n) ? a = !0 : o = !1
                    }
                    a && (r ? (i[r] = i[r] || {}, i[r][c] = s[r][c]) : i[c] = s[c])
                }
                return o
            }, Q.prototype.M = function(t, e, n) {
                var i = 0;
                return (t[e] || t.from && t.from[e] || t.to && t.to[e]) && (i += Math.pow(10, n), t.from && t.from[e] && (i += 1), t.to && t.to[e] && (i += 2)), i
            }, Q.prototype.L = function(t) {
                var e = this;
                t.priority = 0;
                var n = 0;
                return this.k.forEach(function(i, r) {
                    n += e.M(t, i.name, r + 1)
                }), t.priority = n, t
            };
            var $ = function(t) {
                    void 0 === t && (t = []), this.logger = new c("@barba/core"), this.S = !1, this.store = new Q(t)
                },
                tt = {
                    isRunning: {
                        configurable: !0
                    },
                    hasAppear: {
                        configurable: !0
                    },
                    hasSelf: {
                        configurable: !0
                    },
                    shouldWait: {
                        configurable: !0
                    }
                };
            $.prototype.get = function(t, e) {
                return this.store.resolve(t, e)
            }, tt.isRunning.get = function() {
                return this.S
            }, tt.isRunning.set = function(t) {
                this.S = t
            }, tt.hasAppear.get = function() {
                return this.store.appear.length > 0
            }, tt.hasSelf.get = function() {
                return this.store.all.some(function(t) {
                    return "self" === t.name
                })
            }, tt.shouldWait.get = function() {
                return this.store.all.some(function(t) {
                    return t.to && !t.to.route || t.sync
                })
            }, $.prototype.doAppear = function(t) {
                var e = t.data,
                    i = t.transition;
                try {
                    var r = this;

                    function o(t) {
                        r.S = !1
                    }
                    var a = i || {};
                    r.S = !0;
                    var s = n(function() {
                        return Promise.resolve(r.$("beforeAppear", e, a)).then(function() {
                            return Promise.resolve(r.appear(e, a)).then(function() {
                                return Promise.resolve(r.$("afterAppear", e, a)).then(function() {})
                            })
                        })
                    }, function(t) {
                        throw r.S = !1, r.logger.error(t), new Error("Transition error [appear]")
                    });
                    return s && s.then ? s.then(o) : o()
                } catch (t) {
                    return Promise.reject(t)
                }
            }, $.prototype.doPage = function(t) {
                var e = t.data,
                    i = t.transition,
                    r = t.page,
                    o = t.wrapper;
                try {
                    var a = this;

                    function s(t) {
                        a.S = !1
                    }
                    var c = i || {},
                        l = !0 === c.sync || !1;
                    a.S = !0;
                    var h = n(function() {
                        function t() {
                            return Promise.resolve(a.$("before", e, c)).then(function() {
                                function t(t) {
                                    return Promise.resolve(a.$("after", e, c)).then(function() {
                                        return Promise.resolve(a.remove(e)).then(function() {})
                                    })
                                }
                                var i = function() {
                                    if (l) return n(function() {
                                        return Promise.resolve(a.add(e, o)).then(function() {
                                            return Promise.resolve(a.$("beforeLeave", e, c)).then(function() {
                                                return Promise.resolve(a.$("beforeEnter", e, c)).then(function() {
                                                    return Promise.resolve(Promise.all([a.leave(e, c), a.enter(e, c)])).then(function() {
                                                        return Promise.resolve(a.$("afterLeave", e, c)).then(function() {
                                                            return Promise.resolve(a.$("afterEnter", e, c)).then(function() {})
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    }, function() {
                                        throw new Error("Transition error [page][sync]")
                                    }); {
                                        function t(t) {
                                            return n(function() {
                                                var t = function() {
                                                    if (!1 !== i) return Promise.resolve(a.add(e, o)).then(function() {
                                                        return Promise.resolve(a.$("beforeEnter", e, c)).then(function() {
                                                            return Promise.resolve(a.enter(e, c, i)).then(function() {
                                                                return Promise.resolve(a.$("afterEnter", e, c)).then(function() {})
                                                            })
                                                        })
                                                    })
                                                }();
                                                if (t && t.then) return t.then(function() {})
                                            }, function() {
                                                throw new Error("Transition error [page][enter]")
                                            })
                                        }
                                        var i = !1,
                                            s = n(function() {
                                                return Promise.resolve(a.$("beforeLeave", e, c)).then(function() {
                                                    return Promise.resolve(Promise.all([a.leave(e, c), L(r, e)]).then(function(t) {
                                                        return t[0]
                                                    })).then(function(t) {
                                                        return i = t, Promise.resolve(a.$("afterLeave", e, c)).then(function() {})
                                                    })
                                                })
                                            }, function() {
                                                throw new Error("Transition error [page][leave]")
                                            });
                                        return s && s.then ? s.then(t) : t()
                                    }
                                }();
                                return i && i.then ? i.then(t) : t()
                            })
                        }
                        var i = function() {
                            if (l) return Promise.resolve(L(r, e)).then(function() {})
                        }();
                        return i && i.then ? i.then(t) : t()
                    }, function(t) {
                        throw a.S = !1, a.logger.error(t), new Error("Transition error")
                    });
                    return h && h.then ? h.then(s) : s()
                } catch (t) {
                    return Promise.reject(t)
                }
            }, $.prototype.appear = function(t, e) {
                try {
                    return Promise.resolve(h.do("appear", t, e)).then(function() {
                        return e.appear ? a(e.appear)(t) : Promise.resolve()
                    })
                } catch (t) {
                    return Promise.reject(t)
                }
            }, $.prototype.leave = function(t, e) {
                try {
                    return Promise.resolve(h.do("leave", t, e)).then(function() {
                        return e.leave ? a(e.leave)(t) : Promise.resolve()
                    })
                } catch (t) {
                    return Promise.reject(t)
                }
            }, $.prototype.enter = function(t, e, n) {
                try {
                    return Promise.resolve(h.do("enter", t, e)).then(function() {
                        return e.enter ? a(e.enter)(t, n) : Promise.resolve()
                    })
                } catch (t) {
                    return Promise.reject(t)
                }
            }, $.prototype.add = function(t, e) {
                try {
                    e.appendChild(t.next.container), h.do("nextAdded", t)
                } catch (t) {
                    return Promise.reject(t)
                }
            }, $.prototype.remove = function(t) {
                try {
                    var e = t.current.container;
                    document.body.contains(e) && (e.parentNode.removeChild(e), h.do("currentRemoved", t))
                } catch (t) {
                    return Promise.reject(t)
                }
            }, $.prototype.$ = function(t, e, n) {
                try {
                    return Promise.resolve(h.do(t, e, n)).then(function() {
                        return n[t] ? a(n[t])(e) : Promise.resolve()
                    })
                } catch (t) {
                    return Promise.reject(t)
                }
            }, Object.defineProperties($.prototype, tt);
            var et = function(t) {
                var e = this;
                this.names = ["beforeAppear", "afterAppear", "beforeLeave", "afterLeave", "beforeEnter", "afterEnter"], this.byNamespace = new Map, 0 !== t.length && (t.forEach(function(t) {
                    e.byNamespace.set(t.namespace, t)
                }), this.names.forEach(function(t) {
                    h[t](e.q(t), e)
                }))
            };
            et.prototype.q = function(t) {
                var e = this;
                return function(n) {
                    var i = t.match(/enter/i) ? n.next : n.current,
                        r = e.byNamespace.get(i.namespace);
                    r && r[t] && r[t](n)
                }
            }, Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function(t) {
                var e = this;
                do {
                    if (e.matches(t)) return e;
                    e = e.parentElement || e.parentNode
                } while (null !== e && 1 === e.nodeType);
                return null
            });
            var nt = {
                    container: void 0,
                    html: void 0,
                    namespace: void 0,
                    url: {
                        hash: void 0,
                        href: void 0,
                        path: void 0,
                        query: {}
                    }
                },
                it = function() {
                    this.version = "2.4.0", this.schemaPage = nt, this.Logger = c, this.logger = new c("@barba/core"), this.plugins = [], this.hooks = h, this.dom = E, this.helpers = C, this.history = P, this.request = U, this.url = H
                },
                rt = {
                    data: {
                        configurable: !0
                    },
                    wrapper: {
                        configurable: !0
                    }
                };
            return it.prototype.use = function(t, e) {
                var n = this.plugins;
                n.indexOf(t) > -1 ? this.logger.warn("Plugin [" + t.name + "] already installed.") : "function" == typeof t.install ? (t.install(this, e), n.push(t)) : this.logger.warn("Plugin [" + t.name + '] has no "install" method.')
            }, it.prototype.init = function(t) {
                void 0 === t && (t = {});
                var e = t.transitions;
                void 0 === e && (e = []);
                var n = t.views;
                void 0 === n && (n = []);
                var i = t.prevent;
                void 0 === i && (i = null);
                var r = t.timeout;
                void 0 === r && (r = 2e3);
                var o = t.requestError,
                    a = t.cacheIgnore;
                void 0 === a && (a = !1);
                var s = t.prefetchIgnore;
                void 0 === s && (s = !1);
                var l = t.schema;
                void 0 === l && (l = M);
                var h = t.debug;
                void 0 === h && (h = !1);
                var u = t.logLevel;
                if (void 0 === u && (u = "off"), c.setLevel(!0 === h ? "debug" : u), this.logger.info(this.version), Object.keys(l).forEach(function(t) {
                        M[t] && (M[t] = l[t])
                    }), this.C = o, this.timeout = r, this.cacheIgnore = a, this.prefetchIgnore = s, this.B = this.dom.getWrapper(), !this.B) throw new Error("[@barba/core] No Barba wrapper found");
                this.B.setAttribute("aria-live", "polite"), this.H();
                var p = this.data.current;
                if (!p.container) throw new Error("[@barba/core] No Barba container found");
                if (this.cache = new k(a), this.prevent = new K(s), this.transitions = new $(e), this.views = new et(n), null !== i) {
                    if ("function" != typeof i) throw new Error("[@barba/core] Prevent should be a function");
                    this.prevent.add("preventCustom", i)
                }
                this.history.add(p.url.href, p.namespace), this.I = this.I.bind(this), this.N = this.N.bind(this), this.U = this.U.bind(this), this.D(), this.plugins.forEach(function(t) {
                    return t.init()
                });
                var d = this.data;
                d.trigger = "barba", d.next = d.current, this.hooks.do("ready", d), this.appear(d), this.H()
            }, it.prototype.destroy = function() {
                this.H(), this.X(), this.hooks.clear(), this.plugins = []
            }, rt.data.get = function() {
                return this._
            }, rt.wrapper.get = function() {
                return this.B
            }, it.prototype.force = function(t) {
                window.location.assign(t)
            }, it.prototype.go = function(t, e, n) {
                var i;
                if (void 0 === e && (e = "barba"), !(i = "popstate" === e ? this.history.current && this.url.getPath(this.history.current.url) === this.url.getPath(t) : this.prevent.run("sameUrl", null, null, t)) || this.transitions.hasSelf) return n && (n.stopPropagation(), n.preventDefault()), this.page(t, e, i)
            }, it.prototype.appear = function(t) {
                try {
                    var e = this;
                    return Promise.resolve(e.hooks.do("beforeEnter", t)).then(function() {
                        function i() {
                            return Promise.resolve(e.hooks.do("afterEnter", t)).then(function() {})
                        }
                        var r = function() {
                            if (e.transitions.hasAppear) {
                                var i = n(function() {
                                    var n = e.transitions.get(t, {
                                        appear: !0
                                    });
                                    return Promise.resolve(e.transitions.doAppear({
                                        transition: n,
                                        data: t
                                    })).then(function() {})
                                }, function(t) {
                                    e.logger.error(t)
                                });
                                if (i && i.then) return i.then(function() {})
                            }
                        }();
                        return r && r.then ? r.then(i) : i()
                    })
                } catch (t) {
                    return Promise.reject(t)
                }
            }, it.prototype.page = function(t, e, i) {
                try {
                    var r = this;

                    function o() {
                        var t = r.data;
                        return Promise.resolve(r.hooks.do("page", t)).then(function() {
                            var e = n(function() {
                                var e = r.transitions.get(t, {
                                    appear: !1,
                                    self: i
                                });
                                return Promise.resolve(r.transitions.doPage({
                                    data: t,
                                    page: a,
                                    transition: e,
                                    wrapper: r.B
                                })).then(function() {
                                    r.H()
                                })
                            }, function(t) {
                                r.logger.error(t)
                            });
                            if (e && e.then) return e.then(function() {})
                        })
                    }
                    if (r.transitions.isRunning) return void r.force(t);
                    r.data.next.url = Object.assign({}, {
                        href: t
                    }, r.url.parse(t)), r.data.trigger = e;
                    var a = r.cache.has(t) ? r.cache.update(t, {
                            action: "click"
                        }).request : r.cache.set(t, r.request(t, r.timeout, r.onRequestError.bind(r, e)), "click").request,
                        s = function() {
                            if (r.transitions.shouldWait) return Promise.resolve(L(a, r.data)).then(function() {})
                        }();
                    return s && s.then ? s.then(o) : o()
                } catch (t) {
                    return Promise.reject(t)
                }
            }, it.prototype.onRequestError = function(t) {
                for (var e = [], n = arguments.length - 1; n-- > 0;) e[n] = arguments[n + 1];
                this.transitions.isRunning = !1;
                var i = e[0],
                    r = e[1],
                    o = this.cache.getAction(i);
                return this.cache.delete(i), !(this.C && !1 === this.C(t, o, i, r) || ("click" === o && this.force(i), 1))
            }, it.prototype.prefetch = function(t) {
                var e = this;
                this.cache.has(t) || this.cache.set(t, this.request(t, this.timeout, this.onRequestError.bind(this, "barba")).catch(function(t) {
                    e.logger.error(t)
                }), "prefetch")
            }, it.prototype.D = function() {
                !0 !== this.prefetchIgnore && (document.addEventListener("mouseover", this.I), document.addEventListener("touchstart", this.I)), document.addEventListener("click", this.N), window.addEventListener("popstate", this.U)
            }, it.prototype.X = function() {
                !0 !== this.prefetchIgnore && (document.removeEventListener("mouseover", this.I), document.removeEventListener("touchstart", this.I)), document.removeEventListener("click", this.N), window.removeEventListener("popstate", this.U)
            }, it.prototype.I = function(t) {
                var e = this,
                    n = this.F(t);
                if (n) {
                    var i = this.dom.getHref(n);
                    this.prevent.checkUrl(i) || this.cache.has(i) || this.cache.set(i, this.request(i, this.timeout, this.onRequestError.bind(this, n)).catch(function(t) {
                        e.logger.error(t)
                    }), "enter")
                }
            }, it.prototype.N = function(t) {
                var e = this.F(t);
                e && this.go(this.dom.getHref(e), e, t)
            }, it.prototype.U = function() {
                this.go(this.url.getHref(), "popstate")
            }, it.prototype.F = function(t) {
                for (var e = t.target; e && !this.dom.getHref(e);) e = e.parentNode;
                if (e && !this.prevent.checkLink(e, t, this.dom.getHref(e))) return e
            }, it.prototype.H = function() {
                var t = this.url.getHref(),
                    e = {
                        container: this.dom.getContainer(),
                        html: this.dom.getHtml(),
                        namespace: this.dom.getNamespace(),
                        url: Object.assign({}, {
                            href: t
                        }, this.url.parse(t))
                    };
                this._ = {
                    current: e,
                    next: Object.assign({}, this.schemaPage),
                    trigger: void 0
                }, this.hooks.do("reset", this.data)
            }, Object.defineProperties(it.prototype, rt), new it
        }()
    }
