
 function(e, t, n) {
    "use strict";
    var i = n(3),
        s = n(4);
    const o = new class {
        constructor() {
            this.time = window.performance.now(), this.start = this.start.bind(this), this.pause = this.pause.bind(this), this.onTick = this.onTick.bind(this), s.a.dom && this.start()
        }
        start() {
            this.startTime = window.performance.now(), this.oldTime = this.startTime, this.isPaused = !1, this.onTick(this.startTime)
        }
        pause() {
            this.isPaused = !0
        }
        onTick(e) {
            this.time = e, this.isPaused || (this.delta = (e - this.oldTime) / 1e3, this.oldTime = e, i.b.trigger({
                name: "raf"
            }, {
                delta: this.delta,
                now: e
            })), window.requestAnimationFrame(this.onTick)
        }
    };
    var r = n(11);
    const a = new class extends(Object(i.a)()) {
        init() {
            this.readAndUpdatePage = this.readAndUpdatePage.bind(this), this.whenScroll = this.whenScroll.bind(this), this.whenScroll(), this.speed = 0, this.speed2 = 0, this.oldY = this.y, this.scheduledAnimationFrame = !0, this.vs = s.a.dom, this.vslocked = !0, this.height = 0, this.easeY = this.y, this.parallaxEasedY = this.y, this.wrapper = document.querySelector(".load_block"), this.vs && this.enablevs(), window.addEventListener("scroll", this.whenScroll)
        }
        lock() {
            this.locked = !0
        }
        unlock() {
            this.locked = !1
        }
        onLoadEnd() {
            this.y = 0, this.oldY = 0, this.easeY = 0, this.parallaxEasedY = 0, window.scrollTo(0, 0), l.onResize(), s.a.boarding || (this.vslocked = !1)
        }
        onVisibilitychange({
            hidden: e
        }) {
            e || (this.oldY = this.y, this.easeY = this.y, this.parallaxEasedY = this.y, this.speed = 0, this.speed2 = 0, l.onResize(), window.setTimeout(() => {
                l.onResize()
            }, 500))
        }
        onResize() {
            this.vs && (this.height = this.wrapper.clientHeight, this.fakeScroll.style.height = `${this.height}px`)
        }
        enablevs() {
            this.vs = !0, this.fakeScroll = document.createElement("div"), this.wrapper.classList.add("vs"), document.body.appendChild(this.fakeScroll)
        }
        readAndUpdatePage() {
            this.scheduledAnimationFrame = !1
        }
        whenScroll() {
            if (this.locked) return;
            const e = document.documentElement,
                t = document.body ? document.body.clientHeight : 0,
                n = window.innerHeight;
            this.x = (window.pageXOffset || e.scrollLeft) - (e.clientLeft || 0), this.y = window.pageYOffset || document.documentElement.scrollTop, this.progressY = this.y / (t - n), i.b.trigger({
                name: "scroll",
                fireAtStart: !0
            }, {
                x: this.x,
                y: this.y,
                progressY: this.progressY
            }), this.scheduledAnimationFrame || (this.scheduledAnimationFrame = !0, requestAnimationFrame(this.readAndUpdatePage))
        }
        onRaf({
            delta: e
        }) {
            const t = this.oldY - this.y;
            this.speedTarget = .2 * Object(r.clamp)(0, 3, Math.abs(t)), this.speedTarget2 = .2 * Object(r.clamp)(-3, 3, t), this.oldY = this.y, this.speed = Object(r.lerp)(this.speed, this.speedTarget, 2 * e), this.speed2 = Object(r.lerp)(this.speed2, this.speedTarget2, 2 * e), this.easeY = Object(r.lerp)(this.easeY, this.y, 5 * e), this.parallaxEasedY = Object(r.lerp)(this.parallaxEasedY, this.y, 4 * e), this.vs && !this.vslocked && setTimeout(() => {
                const e = Math.round(100 * this.easeY) / 100;
                this.wrapper.style.transform = `translate3d(0px, -${e}px, 0px)`, this.fixedContainer && (this.fixedContainer.style.transform = `translate3d(0px, ${e}px, 0px)`)
            }, 0)
        }
    };
    const l = new class {
        constructor() {
            this.width = this.calculateWidth(), this.height = this.calculateHeight(), this.ratio = this.width / this.height, this.onResize = this.onResize.bind(this), this.onResize(), window.addEventListener("resize", function(e, t, n) {
                var i;
                return function() {
                    var s = this,
                        o = arguments,
                        r = n && !i;
                    clearTimeout(i), i = setTimeout(function() {
                        i = null, n || e.apply(s, o)
                    }, t), r && e.apply(s, o)
                }
            }(this.onResize, 300))
        }
        calculateWidth() {
            return window.innerWidth
        }
        calculateHeight() {
            return window.innerHeight
        }
        onResize(e = !0) {
            this.width = this.calculateWidth(), this.height = this.calculateHeight(), this.ratio = this.width / this.height, i.b.trigger({
                name: "resize",
                fireAtStart: !0
            }, {
                width: this.width,
                height: this.height,
                ratio: this.ratio
            })
        }
    };
    var u = n(0),
        c = n(9);
    const h = new class {
        constructor() {
            this.x = 0, this.y = 0, this.isTouching = !0, this.distance = 0, this.hold = new u.Vector2, this.last = new u.Vector2, this.delta = new u.Vector2, this.move = new u.Vector2, this.world = new u.Vector3, this.normalized = new u.Vector2, this._tmp = new u.Vector3, this.bind()
        }
        bind() {
            const e = window;
            e.addEventListener("touchstart", this.onStart.bind(this), {
                passive: !1
            }), e.addEventListener("touchmove", this.onMove.bind(this), {
                passive: !1
            }), e.addEventListener("touchend", this.onEnd.bind(this), {
                passive: !1
            }), e.addEventListener("touchcancel", this.onEnd.bind(this), {
                passive: !1
            }), e.addEventListener("mousedown", this.onStart.bind(this)), e.addEventListener("mousemove", this.onMove.bind(this)), e.addEventListener("mouseup", this.onEnd.bind(this)), e.addEventListener("contextmenu", this.onEnd.bind(this))
        }
        convertEvent(e) {
            const t = {
                x: 0,
                y: 0
            };
            return e ? e.windowsPointer ? e : (e.touches || e.changedTouches ? e.touches.length ? (t.x = e.touches[0].clientX, t.y = e.touches[0].clientY) : (t.x = e.changedTouches[0].clientX, t.y = e.changedTouches[0].clientY) : (t.x = e.clientX, t.y = e.clientY), t.x = Object(r.clamp)(0, l.width, t.x), t.y = Object(r.clamp)(0, l.height, t.y), t) : t
        }
        onStart(e) {
            const t = this.convertEvent(e);
            this.isTouching = !0, this.x = t.x, this.y = t.y, this.hold.set(t.x, t.y), this.last.set(t.x, t.y), this.delta.set(0, 0), this.move.set(0, 0), this.normalized.x = this.x / l.width * 2 - 1, this.normalized.y = -this.y / l.height * 2 + 1, this.distance = 0, i.b.trigger({
                name: "pointerStart"
            }, {
                pointer: this
            })
        }
        onMove(e) {
            const t = this.convertEvent(e);
            this.isTouching && (this.move.x = t.x - this.hold.x, this.move.y = t.y - this.hold.y), this.x = t.x, this.y = t.y, this.delta.x = t.x - this.last.x, this.delta.y = t.y - this.last.y, this.last.set(this.x, this.y), this.distance += this.delta.length(), this.normalized.x = this.x / l.width * 2 - 1, this.normalized.y = -this.y / l.height * 2 + 1, this._tmp.x = this.normalized.x, this._tmp.y = this.normalized.y, this._tmp.z = .5, this._tmp.unproject(c.a);
            const n = this._tmp.sub(c.a.position).normalize(),
                s = -c.a.position.z / n.z;
            this.world.copy(c.a.position).add(n.multiplyScalar(s)), i.b.trigger({
                name: "pointerMove"
            }, {
                pointer: this
            }), this.isTouching && i.b.trigger({
                name: "pointerDrag"
            }, {
                pointer: this
            })
        }
        onEnd() {
            this.isTouching = !1, this.move.set(0, 0), i.b.trigger({
                name: "pointerEnd"
            }, {
                pointer: this
            })
        }
    };
    const d = new class {
        constructor() {
            this.isFocus = !0, this.onVisibilityChange(), this.bind()
        }
        bind() {
            this.onVisibilityChange = this.onVisibilityChange.bind(this), this.onFocus = this.onFocus.bind(this), this.onBlur = this.onBlur.bind(this), document.addEventListener("visibilitychange", this.onVisibilityChange), window.addEventListener("focus", this.onFocus), window.addEventListener("blur", this.onBlur)
        }
        isHidden() {
            return document.hidden
        }
        onVisibilityChange() {
            i.b.trigger({
                name: "visibilitychange",
                fireAtStart: !0
            }, {
                hidden: this.isHidden()
            })
        }
        onFocus() {
            i.b.trigger({
                name: "focus",
                fireAtStart: !0
            }, {}), this.isFocus = !0
        }
        onBlur() {
            i.b.trigger({
                name: "blur",
                fireAtStart: !0
            }, {}), this.isFocus = !1
        }
    };
    n.d(t, !1, function() {
        return o
    }), n.d(t, "c", function() {
        return l
    }), n.d(t, "a", function() {
        return h
    }), n.d(t, "d", function() {
        return d
    }), n.d(t, "b", function() {
        return a
    })
}
