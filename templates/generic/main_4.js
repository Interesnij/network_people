function(e, t, n) {
    "use strict";
    var i = n(0),
        s = n(3),
        o = n(4);
    t.a = new class extends(Object(s.a)(i.WebGLRenderer)) {
        constructor() {
            super({
                powerPreference: "high-performance",
                antialiasing: !1
            }), this.debug.checkShaderErrors = !1, this.setPixelRatio(o.a.dpr)
        }
        onResize({
            width: e,
            height: t
        }) {
            this.setSize(e, t)
        }
    }
}, function(e, t, n) {
    "use strict";
    var i = n(3),
        s = n(1),
        o = n(15),
        r = (n(18), n(0));
    t.a = new class extends(Object(i.a)()) {
        init() {
            this.fbo = new o.a({
                width: 256,
                height: 256,
                name: "trail",
                shader: n(162).default,
                uniforms: {
                    uRatio: {
                        value: 1
                    },
                    uPointer: {
                        value: new r.Vector2
                    },
                    uPrevPointer: {
                        value: new r.Vector2
                    },
                    uRect: {
                        value: new r.Vector4
                    },
                    uRectForce: {
                        value: 0
                    },
                    uSpeed: {
                        value: 0
                    }
                },
                rtOptions: {
                    minFilter: r.LinearFilter,
                    magFilter: r.LinearFilter
                }
            }), this.speed = 0, this.pointerTarget = new r.Vector2
        }
        onResize({
            ratio: e
        }) {
            this.fbo.uniforms.uRatio.value = e
        }
        onPointerMove({
            pointer: e
        }) {
            this.pointerTarget.set(e.x / window.innerWidth, 1 - e.y / window.innerHeight)
        }
        onRaf({
            delta: e
        }) {
            this.fbo.uniforms.uPrevPointer.value.copy(this.fbo.uniforms.uPointer.value), this.fbo.uniforms.uPointer.value.lerp(this.pointerTarget, .2), this.fbo.uniforms.uSpeed.value = this.speed, this.fbo.update();
            const t = .005 * Math.max(Math.abs(s.a.delta.x), Math.abs(s.a.delta.y));
            this.speed += Math.min(t, .1), this.speed *= .9, this.speed = Math.min(2, this.speed), s.d.isFocus || (this.speed = 0)
        }
    }
}
