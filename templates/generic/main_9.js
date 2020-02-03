function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n(5),
        s = n(2),
        o = function(e, t, n, i, s, o) {
            if (!e || /^(?:expires|max\-age|path|domain|secure)$/i.test(e)) return !1;
            var r = "";
            if (n) switch (n.constructor) {
                case Number:
                    r = n === 1 / 0 ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + n;
                    break;
                case String:
                    r = "; expires=" + n;
                    break;
                case Date:
                    r = "; expires=" + n.toUTCString()
            }
            return document.cookie = encodeURIComponent(e) + "=" + encodeURIComponent(t) + r + (s ? "; domain=" + s : "") + (i ? "; path=" + i : "") + (o ? "; secure" : ""), !0
        },
        r = function(e) {
            return !!e && new RegExp("(?:^|;\\s*)" + encodeURIComponent(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(document.cookie)
        },
        a = n(6),
        l = n.n(a);
    t.default = class extends i.Component {
        init() {
            if (r("accepted")) this.hide();
            else {
                this.$el.querySelector(".cookiebar_close").addEventListener("click", this.close.bind(this)), l.a.hooks.leave(() => this.close())
            }
        }
        hide() {
            this.hided = !0, this.$el.style.display = "none"
        }
        close() {
            this.hided || s.TweenMax.to(this.$el, .8, {
                transform: "translateY(calc(100% + 20px))",
                ease: "Power4.easeInOut",
                onComplete: () => {
                    this.hide(), o("accepted", "true", 1 / 0, "/")
                }
            })
        }
    }
}
