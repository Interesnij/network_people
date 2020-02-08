function(e, t, n) {
    "use strict";
    var i = n(0),
        s = n(2),
        o = n(3),
        r = n(1),
        a = n(9),
        l = (n(11), class extends(Object(o.a)(i.Object3D)) {
            init() {
                this.element = this._args[0], this.isFixed = this.element.dataset.fixed, this.speed = parseFloat(this.element.dataset.parallax), this.isParallax = !!this.speed, this.track = !0, this.parallaxmid = this.element.dataset.parallaxmid
            }
            onResize() {
                if (!this.track) return;
                if (!this.element) return;
                const e = this.element.getBoundingClientRect();
                this.bounds = {
                    left: e.left,
                    top: e.top,
                    width: e.width,
                    height: e.height
                }, this.isFixed || (this.bounds.top += r.b.vs ? r.b.easeY : r.b.y), this.updateSize(), this.updatePosition()
            }
            updateSize() {
                if (!this.track) return;
                this.camUnit = a.a.calculateUnitSize(a.a.position.z - this.position.z);
                const e = this.bounds.width / r.c.width,
                    t = this.bounds.height / r.c.height;
                e && t && (this.scale.x = this.camUnit.width * e, this.scale.y = this.camUnit.height * t)
            }
            updatePosition(e = (r.b.vs ? r.b.easeY : r.b.y)) {
                if (!this.track) return;
                const t = this.isFixed ? 0 : e;
                this.position.x = -this.camUnit.width / 2 + this.scale.x / 2, this.position.y = this.camUnit.height / 2 - this.scale.y / 2, this.position.x += this.bounds.left / r.c.width * this.camUnit.width, this.position.y -= (this.bounds.top - t) / r.c.height * this.camUnit.height
            }
            updateParallax(e) {
                if (!(r.c.width < 1024))
                    if (this.parallaxmid) {
                        const t = (e - (this.bounds.top + this.bounds.height / 2) + r.c.height) / (this.bounds.height + r.c.height) * this.speed;
                        this.position.y += t
                    } else this.position.y += e * (2e-4 * this.speed) * this.camUnit.height
            }
            onRaf() {
                this.track && !r.b.vslocked && (this.updatePosition(r.b.easeY), this.isParallax && this.updateParallax(r.b.parallaxEasedY))
            }
            destroy() {
                this.parent && this.parent.remove(this), this.visible = !1, super.destroy()
            }
        }),
        u = n(8),
        c = n(7),
        h = n(10),
        d = n(6),
        m = n.n(d);
    const p = new i.PlaneBufferGeometry(1, 1, 1, 1),
        v = new i.RawShaderMaterial({
            transparent: !0,
            fragmentShader: n(150).default,
            vertexShader: n(149).default
        });
    const f = new i.PlaneBufferGeometry(1, 1, 1, 1),
        g = new i.RawShaderMaterial({
            fragmentShader: n(148).default,
            vertexShader: n(147).default,
            transparent: !0
        });
    const x = new i.PlaneBufferGeometry(1, 1, 1, 1),
        y = new i.RawShaderMaterial({
            fragmentShader: n(146).default,
            vertexShader: n(145).default,
            transparent: !0
        });
    const w = new i.PlaneBufferGeometry(1, 1, 1, 1),
        b = new i.RawShaderMaterial({
            transparent: !0,
            fragmentShader: n(144).default,
            vertexShader: n(143).default
        });
    const T = new i.PlaneBufferGeometry(1, 1, 1, 1),
        P = new i.RawShaderMaterial({
            blending: i.AdditiveBlending,
            fragmentShader: n(142).default,
            vertexShader: n(141).default,
            transparent: !0,
            depthTest: !1
        });
    const S = new i.PlaneBufferGeometry(1, 1, 1, 1),
        O = new i.RawShaderMaterial({
            blending: i.AdditiveBlending,
            fragmentShader: n(140).default,
            vertexShader: n(139).default
        });
    var M = n(13);
    const _ = new i.PlaneBufferGeometry(1, 1, 5, 5),
        E = new i.RawShaderMaterial({
            transparent: !0,
            depthTest: !1,
            fragmentShader: n(138).default,
            vertexShader: n(137).default
        });
    var F = n(19);
    const L = new i.PlaneBufferGeometry(1, 1, 1, 1),
        R = new i.RawShaderMaterial({
            fragmentShader: n(136).default,
            vertexShader: n(135).default
        });
    const k = {
        button: class extends l {
            init() {
                super.init(), this.geometry = p, this.material = v.clone(), this.material.uniforms = {
                    uTime: {
                        value: 0
                    },
                    uProgress: {
                        value: 0
                    },
                    uWind: {
                        value: c.a.fromAsset("wind")
                    },
                    uShow: {
                        value: 0
                    },
                    uClipping: {
                        value: 1
                    }
                }, this.mesh = new i.Mesh(this.geometry, this.material), this.add(this.mesh), u.a.add(this), this.element.addEventListener("mouseenter", () => {
                    s.TweenMax.to(this.material.uniforms.uProgress, .3, {
                        value: 1,
                        ease: "Power4.easeOut"
                    }), h.a.setSmallGlitch(this.element)
                }), this.element.addEventListener("mouseleave", () => {
                    s.TweenMax.to(this.material.uniforms.uProgress, .2, {
                        value: 0,
                        ease: "Power4.easeOut"
                    }), h.a.resetSmallGlitch()
                }), this.position.z += .01, this.element.classList.contains("nav_button") ? this.material.uniforms.uShow.value = 1 : (m.a.history.previous || this.onEnterAnim(), m.a.hooks.after(() => this.onEnterAnim()), m.a.hooks.before(() => this.onLeaveAnim()))
            }
            onEnterAnim() {
                this.enter || (this.enter = !0, s.TweenMax.to(this.material.uniforms.uShow, .6, {
                    value: 1,
                    ease: "Power4.easeOut"
                }))
            }
            onLeaveAnim() {
                this.enter && s.TweenMax.to(this.material.uniforms.uShow, .6, {
                    value: 0,
                    ease: "Power4.easeIn"
                })
            }
            onRaf({
                delta: e
            }) {
                super.onRaf(), this.material.uniforms.uTime.value += .1 * e
            }
        },
        image_wave: class extends l {
            init() {
                super.init(), this.geometry = f, this.material = g.clone();
                const e = this.element.querySelector("img");
                this.material.uniforms = {
                    uTime: {
                        value: 2432.12 * Math.random()
                    },
                    uTexture: {
                        value: c.a.fromImg(e, {
                            wrapS: i.MirroredRepeatWrapping,
                            wrapT: i.MirroredRepeatWrapping
                        })
                    },
                    uRectSize: {
                        value: new i.Vector2
                    },
                    uImageSize: {
                        value: new i.Vector2
                    },
                    uWind: {
                        value: c.a.fromAsset("test", {
                            magFilter: i.NearestFilter,
                            minFilter: i.NearestFilter
                        })
                    },
                    uProgress: {
                        value: 0
                    },
                    uScale: {
                        value: 0
                    },
                    uShow: {
                        value: 0
                    }
                }, this.mesh = new i.Mesh(this.geometry, this.material), this.add(this.mesh), u.a.add(this);
                const t = this.element.parentNode.querySelector(".read_more");
                t.addEventListener("mouseenter", () => {
                    s.TweenMax.to(this.material.uniforms.uProgress, .5, {
                        value: 1,
                        ease: "Power4.easeOut"
                    }), s.TweenMax.to(this.material.uniforms.uScale, 3, {
                        value: 1
                    })
                }), t.addEventListener("mouseleave", () => {
                    s.TweenMax.to(this.material.uniforms.uProgress, .3, {
                        value: 0,
                        ease: "Power4.easeOut"
                    }), s.TweenMax.to(this.material.uniforms.uScale, 2, {
                        value: 0
                    })
                }), m.a.history.previous || this.onEnterAnim(), m.a.hooks.after(() => this.onEnterAnim()), m.a.hooks.before(() => this.onLeaveAnim())
            }
            onEnterAnim() {
                this.enter || (this.enter = !0, s.TweenMax.to(this.material.uniforms.uShow, .6, {
                    value: 1,
                    ease: "Power4.easeOut"
                }))
            }
            onLeaveAnim() {
                this.enter && s.TweenMax.to(this.material.uniforms.uShow, .6, {
                    value: 0,
                    ease: "Power4.easeIn"
                })
            }
            onResize() {
                super.onResize();
                const e = this.material.uniforms.uTexture.value;
                this.material.uniforms.uRectSize.value.set(this.bounds.width, this.bounds.height), this.material.uniforms.uImageSize.value.set(e.image.naturalWidth, e.image.naturalHeight)
            }
            onRaf({
                delta: e
            }) {
                super.onRaf(), this.material.uniforms.uTime.value += .1 * e
            }
        },
        cover: class extends l {
            init() {
                super.init(), this.parallax = !0, this.geometry = x, this.material = y.clone();
                const e = this.element;
                this.material.uniforms = {
                    uTime: {
                        value: 0
                    },
                    uTexture: {
                        value: c.a.fromImg(e)
                    },
                    uProgress: {
                        value: 0
                    }
                };
                const t = this.element.dataset.mask;
                if (t) {
                    const e = new Image;
                    this.material.uniforms.uHasMask.value = !0, this.material.uniforms.uMask.value = c.a.fromImg(e), e.src = t
                }
                this.mesh = new i.Mesh(this.geometry, this.material), this.position.z -= .02, this.add(this.mesh), u.a.add(this), m.a.hooks.after(() => this.onEnterAnim()), m.a.hooks.leave(() => this.onLeaveAnim())
            }
            onEnterAnim() {
                this.enter || (this.enter = !0, s.TweenMax.to(this.material.uniforms.uProgress, 15, {
                    value: 1,
                    ease: "Power4.easeOut"
                }))
            }
            onLeaveAnim() {
                this.enter && s.TweenMax.to(this.material.uniforms.uProgress, 2, {
                    value: 0,
                    ease: "Power4.easeIn"
                })
            }
            onRaf({
                delta: e
            }) {
                super.onRaf(), this.material.uniforms.uTime.value += .1 * e
            }
        },
        footer: class extends l {
            init() {
                super.init(), this.geometry = w, this.material = b.clone(), this.material.uniforms = {
                    uTime: {
                        value: 0
                    },
                    uShow: {
                        value: 0
                    }
                }, this.mesh = new i.Mesh(this.geometry, this.material), this.mesh.position.z = -1e-4, this.add(this.mesh), u.a.add(this), m.a.history.previous || this.onEnterAnim(), m.a.hooks.after(() => this.onEnterAnim()), m.a.hooks.before(() => this.onLeaveAnim())
            }
            onEnterAnim() {
                this.enter || (this.enter = !0, TweenMax.to(this.material.uniforms.uShow, .6, {
                    value: 1,
                    ease: "Power4.easeOut"
                }))
            }
            onLeaveAnim() {
                this.enter && TweenMax.to(this.material.uniforms.uShow, .6, {
                    value: 0,
                    ease: "Power4.easeIn"
                })
            }
            onRaf({
                delta: e
            }) {
                super.onRaf(), this.material.uniforms.uTime.value += .1 * e
            }
        },
        magic_line_image: class extends l {
            init() {
                super.init(), this.geometry = T, this.material = P.clone();
                const e = this.element.querySelector("img");
                this.material.uniforms = {
                    uTime: {
                        value: 2432.12 * Math.random()
                    },
                    uTexture: {
                        value: c.a.fromImg(e)
                    },
                    uProgress: {
                        value: 0
                    }
                }, this.mesh = new i.Mesh(this.geometry, this.material), this.mesh.position.z = -.01, this.add(this.mesh), u.a.add(this), m.a.history.previous || this.enterAnim(), m.a.hooks.after(() => this.enterAnim()), m.a.hooks.leave(() => this.leaveAnim())
            }
            enterAnim() {
                this.enter || (this.enter = !0, s.TweenMax.to(this.material.uniforms.uProgress, 15, {
                    value: 1,
                    ease: "Power4.easeOut"
                }))
            }
            leaveAnim() {
                this.enter && s.TweenMax.to(this.material.uniforms.uProgress, 2, {
                    value: 0,
                    ease: "Power4.easeIn"
                })
            }
            onRaf({
                delta: e
            }) {
                super.onRaf(), this.material.uniforms.uTime.value += .1 * e
            }
        },
        is_visible: class extends l {
            init() {
                super.init(), this.visible = !1
            }
        },
        magic_line: class extends l {
            init() {
                super.init(), this.visible = !1, this.track = !1, this.geometry = S, this.material = O.clone(), this.material.uniforms = {
                    uTime: {
                        value: 0
                    },
                    uProgress: {
                        value: 0
                    }
                }, this.mesh = new i.Mesh(this.geometry, this.material), this.scale.set(.01, .01, 1), this.add(this.mesh), u.a.add(this), window.setTimeout(this.bind.bind(this), 200)
            }
            bind() {
                this.onEnter.bind(this), [...this.element.querySelectorAll("li")].forEach(e => {
                    const t = e.querySelector('[data-type="is_visible"]');
                    if (!t) return;
                    const n = U.getInstanceFromEl(t);
                    e.addEventListener("mouseenter", () => {
                        this.onEnter(n)
                    }), e.addEventListener("mouseleave", () => {
                        this.onLeave(n)
                    })
                })
            }
            onEnter(e) {
                if (!e) return;
                s.TweenMax.killTweensOf([this.position, this.scale]);
                const t = .2 * e.scale.y,
                    n = e.position.y - .8 * e.scale.y;
                this.visible ? s.TweenMax.to(this.position, .4, {
                    x: e.position.x,
                    y: n,
                    z: e.position.z,
                    ease: "Power4.easeOut"
                }) : (s.TweenMax.set(this.position, {
                    x: e.position.x,
                    y: n,
                    z: e.position.z
                }), this.scale.x = .001), this.visible = !0, s.TweenMax.to(this.scale, .4, {
                    x: e.scale.x,
                    y: t,
                    z: e.scale.z,
                    ease: "Power4.easeOut"
                })
            }
            onLeave(e) {
                e && (s.TweenMax.killTweensOf([this.position, this.scale]), s.TweenMax.to(this.scale, .3, {
                    y: .001,
                    ease: "Power4.easeInOut",
                    onComplete: () => {
                        this.visible = !1
                    }
                }))
            }
            onScroll() {
                this.visible && this.onLeave(!0)
            }
            onRaf({
                delta: e
            }) {
                super.onRaf(), this.material.uniforms.uTime.value += .1 * e
            }
        },
        magic_hover: class extends l {
            init() {
                super.init(), this.visible = !1, this.track = !1, this.geometry = _, this.material = E.clone(), this.textures = {}, this.material.uniforms = {
                    uTime: {
                        value: 0
                    },
                    uNoise: {
                        value: c.a.fromAsset("test", {
                            wrapS: i.RepeatWrapping,
                            wrapT: i.RepeatWrapping,
                            magFilter: i.NearestFilter,
                            minFilter: i.NearestFilter
                        })
                    },
                    uTextureA: {
                        value: new i.Texture
                    },
                    uTextureB: {
                        value: new i.Texture
                    },
                    uProgress: {
                        value: 0
                    },
                    uVisibility: {
                        value: 0
                    },
                    uDirection: {
                        value: new i.Vector2
                    }
                }, this.mesh = new i.Mesh(this.geometry, this.material), this.scale.set(0, 0, 1), this.add(this.mesh), u.a.add(this), window.setTimeout(this.bind.bind(this), 200)
            }
            bind() {
                this.onEnter.bind(this), [...this.element.querySelectorAll("li")].forEach(e => {
                    const t = e.querySelector('[data-type="is_visible"]');
                    if (!t) return;
                    const n = U.getInstanceFromEl(t),
                        i = t.dataset.glid,
                        s = t.querySelector("img");
                    this.textures[i] = c.a.fromImg(s), e.addEventListener("mouseenter", () => {
                        this.onEnter(n, e)
                    }), e.addEventListener("mouseleave", () => {
                        this.onLeave(n, e)
                    })
                })
            }
            onEnter(e, t) {
                if (!e) return;
                const n = t.getBoundingClientRect(),
                    i = n.left / r.c.width,
                    o = 1 - (n.top + n.height) / r.c.height,
                    a = n.width / r.c.width,
                    l = n.height / r.c.height;
                M.a.fbo.uniforms.uRect.value.set(o, i, o + l, i + a), M.a.fbo.uniforms.uRectForce.value = 1, s.TweenMax.to(M.a.fbo.uniforms.uRectForce, .3, {
                    value: 0
                }), s.TweenMax.to(this.material.uniforms.uVisibility, 1, {
                    value: 1
                });
                const u = e.element.dataset.glid;
                this.material.uniforms.uTextureA.value = this.material.uniforms.uTextureB.value, this.material.uniforms.uTextureB.value = this.textures[u], this.material.uniforms.uTextureA.value !== this.material.uniforms.uTextureB.value && (s.TweenMax.killTweensOf([this.uProgress]), s.TweenMax.fromTo(this.material.uniforms.uProgress, .5, {
                    value: 0
                }, {
                    value: 1,
                    ease: "Power4.easeOut",
                    onComplete: () => {
                        this.material.uniforms.uTextureA.value = this.material.uniforms.uTextureB.value, this.material.uniforms.uProgress.value = 0
                    }
                })), s.TweenMax.killTweensOf([this.position, this.scale]), this.visible ? s.TweenMax.to(this.position, .5, {
                    x: e.position.x,
                    y: e.position.y,
                    z: e.position.z,
                    ease: "Power4.easeOut"
                }) : (s.TweenMax.set(this.position, {
                    x: e.position.x,
                    y: e.position.y,
                    z: e.position.z
                }), this.scale.x = 0), this.visible = !0, s.TweenMax.to(this.scale, .5, {
                    x: e.scale.x,
                    y: e.scale.y,
                    z: e.scale.z,
                    ease: "Power4.easeOut"
                }), this.material.uniforms.uDirection.value.subVectors(this.position, e.position).normalize()
            }
            onLeave() {
                s.TweenMax.to(this.material.uniforms.uVisibility, .5, {
                    value: 0,
                    ease: "Power4.easeOut"
                })
            }
            onRaf({
                delta: e
            }) {
                super.onRaf(), this.material.uniforms.uTime.value += .1 * e
            }
        },
        glitch: class extends l {
            init() {
                super.init(), this.fbo = F.a;
                const e = this.element.querySelector("img");
                this.geometry = new i.PlaneBufferGeometry(1, 1, 1, 1), this.material = new i.RawShaderMaterial({
                    name: "Glitch mesh",
                    fragmentShader: n(47).default,
                    vertexShader: n(46).default,
                    transparent: !0,
                    depthWrite: !1,
                    uniforms: {
                        uTime: {
                            value: 0
                        },
                        uUv: {
                            value: this.fbo.target
                        },
                        uFadeTop: {
                            value: !this.element.dataset.nofadetop
                        },
                        uFadeBottom: {
                            value: !this.element.dataset.nofadebottom
                        },
                        uScroll: {
                            value: 0
                        },
                        uOpacity: {
                            value: 1
                        },
                        uScreen: {
                            value: new i.Vector2(r.c.width, r.c.height)
                        },
                        uTexture: {
                            value: c.a.fromImg(e, {
                                magFilter: i.NearestFilter,
                                minFilter: i.NearestFilter
                            })
                        }
                    }
                }), this.mesh = new i.Mesh(this.geometry, this.material), this.position.z = -5, this.parallaxmid && (this.position.z = -6), this.onResize(), this.add(this.mesh), u.a.add(this)
            }
            onResize() {
                super.onResize(), this.material.uniforms.uScreen.value.set(r.c.width, r.c.height)
            }
            onRaf({
                delta: e
            }) {
                super.onRaf(), this.material.uniforms.uTime.value += e, this.material.uniforms.uUv.value = this.fbo.target, this.material.uniforms.uScroll.value = r.b.parallaxEasedY
            }
        },
        image: class extends l {
            init() {
                super.init(), this.parallax = !0, this.geometry = L, this.material = R.clone();
                const e = this.element;
                this.material.uniforms = {
                    uTime: {
                        value: 0
                    },
                    uTexture: {
                        value: c.a.fromImg(e)
                    }
                }, this.mesh = new i.Mesh(this.geometry, this.material), this.add(this.mesh), u.a.add(this)
            }
        }
    };
    var U = t.a = new class {
        constructor() {
            this.id = 0, this.instances = {}
        }
        register(e) {
            const t = `id_${this.id++}`;
            e.dataset.glid = t;
            const n = e.dataset.type || "button",
                i = new k[n](e);
            this.instances[t] = i, e.classList.add("magic")
        }
        getInstanceFromEl(e) {
            return this.instances[e.dataset.glid]
        }
        unregister(e) {
            const t = this.getInstanceFromEl(e);
            e.classList.remove("magic"), t.destroy()
        }
    }
}, function(e, t, n) {
    "use strict";
    var i = n(34),
        s = n(3),
        o = () => {
            let e = void 0,
                t = void 0;
            const n = new Promise((n, i) => {
                e = n, t = i
            });
            return n.resolve = e, n.reject = t, n
        };
    i.Loader.Resource;
    const r = [{
        name: "uvwind",
        url: `/static/images/grad/grad1.png`
    }, {
        name: "boardingLogo",
        url: `/static/images/grad/logo.png`
    }, {
        name: "boardingText",
        url: `/static/images/grad/text.png`
    }, {
        name: "wind",
        url: `/static/images/grad/red_line.jpg`
    }, {
        name: "test",
        url: `/static/images/grad/grad2.png`
    }, {
        name: "bgglitch",
        url: `/static/images/splash.jpg`
    }];
    t.a = new class {
        constructor() {
            this.resources = {}, r.forEach(e => {
                this.resources[e.name] = e, this.resources[e.name].loading = o()
            })
        }
        load() {
            return this.deferred = o(), this.loader = new i.Loader, s.b.trigger({
                name: "loadStart"
            }), r.forEach(e => {
                this.loader.add(e)
            }), this.loader.onProgress.add(this.onProgress.bind(this)), this.loader.load(this.finish.bind(this)), o
        }
        onProgress(e, t) {
            s.b.trigger({
                name: "loadProgress"
            }, {
                progress: this.loader.progress
            });
            const n = this.resources[t.name];
            n.meta = t, n.loading.resolve(n)
        }
        finish() {
            this.deferred.resolve(), s.b.trigger({
                name: "loadEnd"
            }, {
                resources: this.resources
            })
        }
    }
}, function(e, t, n) {
    "use strict";
    var i = n(0),
        s = n(15),
        o = n(7),
        r = n(13),
        a = n(3);
    const l = new s.a({
        width: 1024,
        height: 1024,
        name: "Glitch FBO",
        shader: n(159).default,
        uniforms: {
            uWind: {
                value: o.a.fromAsset("uvwind", {
                    magFilter: i.NearestFilter,
                    minFilter: i.NearestFilter,
                    wrapS: i.RepeatWrapping,
                    wrapT: i.RepeatWrapping
                })
            },
            uTime: {
                value: 0
            },
            uTrail: {
                value: r.a.fbo.target
            }
        }
    });
    a.b.on("raf", ({
        delta: e
    }) => {
        l.uniforms.uTrail.value = r.a.fbo.target, l.uniforms.uTime.value += e, l.update()
    }), t.a = l
}
