
(function epicHello() {
    var userAgent = navigator.userAgent.toLowerCase();
    var supported = /(chrome|firefox)/;

    if (supported.test(userAgent.toLowerCase())) {
        var dark = [
            'padding: 20px 5px 16px',
            'background-color: #171718',
            'color: #bc994e',
        ].join(';');

        if (userAgent.indexOf('chrome') > -1) {
            dark += ';';
            dark += [
                'padding: 20px 5px 16px 40px',
                'background-image: url(/static/images/logo.png)',
                'background-position: 10px 9px',
                'background-repeat: no-repeat',
                'background-size: 26px 30px',
            ].join(';');
        }

        var gold = [
            'padding: 20px 5px 16px',
            'background-color: #bc994e',
            'color: #ffffff',
        ].join(';');

        var spacer = [
            'background-color: transparent',
        ].join(';');

        var msg = '\n\n %c Исполнил ♥︎ Дарт Вейдер %c вот так вот %c \n\n\n';

        console.log(msg, dark, gold, spacer);
    } else if (window.console) {
        console.log('Исполнил ♥︎ Дарт Вейдер - вот так вот');
    }
}());

! function(e) {
    function t(t) {
        for (var i, r, a = t[0], l = t[1], u = t[2], h = 0, d = []; h < a.length; h++) r = a[h], s[r] && d.push(s[r][0]), s[r] = 0;
        for (i in l) Object.prototype.hasOwnProperty.call(l, i) && (e[i] = l[i]);
        for (c && c(t); d.length;) d.shift()();
        return o.push.apply(o, u || []), n()
    }

    function n() {
        for (var e, t = 0; t < o.length; t++) {
            for (var n = o[t], i = !0, a = 1; a < n.length; a++) {
                var l = n[a];
                0 !== s[l] && (i = !1)
            }
            i && (o.splice(t--, 1), e = r(r.s = n[0]))
        }
        return e
    }
    var i = {},
        s = {
            1: 0
        },
        o = [];

    function r(t) {
        if (i[t]) return i[t].exports;
        var n = i[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, r), n.l = !0, n.exports
    }
    r.m = e, r.c = i, r.d = function(e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, r.r = function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "/dist";
    var a = window.webpackJsonp = window.webpackJsonp || [],
        l = a.push.bind(a);
    a.push = t, a = a.slice();
    for (var u = 0; u < a.length; u++) t(a[u]);
    var c = l;
    o.push([167, 0]), n()
}
