(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [663], {
        1223: function(t, e, n) {
            window.eve = n(1530);
            var r = function(t) {
                    var e, n = {},
                        r = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                            return setTimeout(t, 16, (new Date).getTime()), !0
                        },
                        i = Array.isArray || function(t) {
                            return t instanceof Array || "[object Array]" == Object.prototype.toString.call(t)
                        },
                        a = 0,
                        o = "M" + (+new Date).toString(36),
                        s = Date.now || function() {
                            return +new Date
                        },
                        u = function(t) {
                            var e = this;
                            if (null == t) return e.s;
                            var n = e.s - t;
                            e.b += e.dur * n, e.B += e.dur * n, e.s = t
                        },
                        l = function(t) {
                            if (null == t) return this.spd;
                            this.spd = t
                        },
                        c = function(t) {
                            var e = this;
                            if (null == t) return e.dur;
                            e.s = e.s * t / e.dur, e.dur = t
                        },
                        h = function() {
                            var e = this;
                            delete n[e.id], e.update(), t("mina.stop." + e.id, e)
                        },
                        f = function() {
                            var t = this;
                            t.pdif || (delete n[t.id], t.update(), t.pdif = t.get() - t.b)
                        },
                        d = function() {
                            var t = this;
                            t.pdif && (t.b = t.get() - t.pdif, delete t.pdif, n[t.id] = t, g())
                        },
                        p = function() {
                            var t, e = this;
                            if (i(e.start)) {
                                t = [];
                                for (var n = 0, r = e.start.length; n < r; n++) t[n] = +e.start[n] + (e.end[n] - e.start[n]) * e.easing(e.s)
                            } else t = +e.start + (e.end - e.start) * e.easing(e.s);
                            e.set(t)
                        },
                        g = function(i) {
                            if (i) {
                                var a = 0;
                                for (var o in n)
                                    if (n.hasOwnProperty(o)) {
                                        var s = n[o],
                                            u = s.get();
                                        a++, s.s = (u - s.b) / (s.dur / s.spd), s.s >= 1 && (delete n[o], s.s = 1, a--, function(e) {
                                            setTimeout((function() {
                                                t("mina.finish." + e.id, e)
                                            }))
                                        }(s)), s.update()
                                    }
                                e = !!a && r(g)
                            } else e || (e = r(g))
                        },
                        v = function(t, e, r, i, s, m, y) {
                            var x = {
                                id: o + (a++).toString(36),
                                start: t,
                                end: e,
                                b: r,
                                s: 0,
                                dur: i - r,
                                spd: 1,
                                get: s,
                                set: m,
                                easing: y || v.linear,
                                status: u,
                                speed: l,
                                duration: c,
                                stop: h,
                                pause: f,
                                resume: d,
                                update: p
                            };
                            n[x.id] = x;
                            var b, F = 0;
                            for (b in n)
                                if (n.hasOwnProperty(b) && 2 == ++F) break;
                            return 1 == F && g(), x
                        };
                    return v.time = s, v.getById = function(t) {
                        return n[t] || null
                    }, v.linear = function(t) {
                        return t
                    }, v.easeout = function(t) {
                        return Math.pow(t, 1.7)
                    }, v.easein = function(t) {
                        return Math.pow(t, .48)
                    }, v.easeinout = function(t) {
                        if (1 == t) return 1;
                        if (0 == t) return 0;
                        var e = .48 - t / 1.04,
                            n = Math.sqrt(.1734 + e * e),
                            r = n - e,
                            i = -n - e,
                            a = Math.pow(Math.abs(r), 1 / 3) * (r < 0 ? -1 : 1) + Math.pow(Math.abs(i), 1 / 3) * (i < 0 ? -1 : 1) + .5;
                        return 3 * (1 - a) * a * a + a * a * a
                    }, v.backin = function(t) {
                        if (1 == t) return 1;
                        var e = 1.70158;
                        return t * t * ((e + 1) * t - e)
                    }, v.backout = function(t) {
                        if (0 == t) return 0;
                        var e = 1.70158;
                        return (t -= 1) * t * ((e + 1) * t + e) + 1
                    }, v.elastic = function(t) {
                        return t == !!t ? t : Math.pow(2, -10 * t) * Math.sin((t - .075) * (2 * Math.PI) / .3) + 1
                    }, v.bounce = function(t) {
                        var e = 7.5625,
                            n = 2.75;
                        return t < 1 / n ? e * t * t : t < 2 / n ? e * (t -= 1.5 / n) * t + .75 : t < 2.5 / n ? e * (t -= 2.25 / n) * t + .9375 : e * (t -= 2.625 / n) * t + .984375
                    }, window.mina = v, v
                }("undefined" == typeof eve ? function() {} : eve),
                i = function(t) {
                    function e(t, r) {
                        if (t) {
                            if (t.nodeType) return X(t);
                            if (S(t, "array") && e.set) return e.set.apply(e, t);
                            if (t instanceof G) return t;
                            if (null == r) try {
                                return X(t = n.doc.querySelector(String(t)))
                            } catch (i) {
                                return null
                            }
                        }
                        return new U(t = null == t ? "100%" : t, r = null == r ? "100%" : r)
                    }
                    e.version = "0.5.1", e.toString = function() {
                        return "Snap v" + this.version
                    }, e._ = {};
                    var n = {
                        win: t.window,
                        doc: t.window.document
                    };
                    e._.glob = n;
                    var r = "hasOwnProperty",
                        i = String,
                        a = parseFloat,
                        o = parseInt,
                        s = Math,
                        u = s.max,
                        l = s.min,
                        c = s.abs,
                        h = (s.pow, s.PI),
                        f = (s.round, Object.prototype.toString),
                        d = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,
                        p = (e._.separator = /[,\s]+/, /[\s]*,[\s]*/),
                        v = {
                            hs: 1,
                            rg: 1
                        },
                        m = /([a-z])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi,
                        y = /([rstm])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi,
                        x = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\s]*,?[\s]*/gi,
                        b = 0,
                        F = "S" + (+new Date).toString(36),
                        C = function(t) {
                            return (t && t.type ? t.type : "") + F + (b++).toString(36)
                        },
                        w = "http://www.w3.org/1999/xlink",
                        B = "http://www.w3.org/2000/svg",
                        A = {};
                    e.url = function(t) {
                        return "url('#" + t + "')"
                    };

                    function E(t, e) {
                        if (e) {
                            if ("#text" == t && (t = n.doc.createTextNode(e.text || e["#text"] || "")), "#comment" == t && (t = n.doc.createComment(e.text || e["#text"] || "")), "string" == typeof t && (t = E(t)), "string" == typeof e) return 1 == t.nodeType ? "xlink:" == e.substring(0, 6) ? t.getAttributeNS(w, e.substring(6)) : "xml:" == e.substring(0, 4) ? t.getAttributeNS(B, e.substring(4)) : t.getAttribute(e) : "text" == e ? t.nodeValue : null;
                            if (1 == t.nodeType) {
                                for (var a in e)
                                    if (e[r](a)) {
                                        var o = i(e[a]);
                                        o ? "xlink:" == a.substring(0, 6) ? t.setAttributeNS(w, a.substring(6), o) : "xml:" == a.substring(0, 4) ? t.setAttributeNS(B, a.substring(4), o) : t.setAttribute(a, o) : t.removeAttribute(a)
                                    }
                            } else "text" in e && (t.nodeValue = e.text)
                        } else t = n.doc.createElementNS(B, t);
                        return t
                    }

                    function S(t, e) {
                        return "finite" == (e = i.prototype.toLowerCase.call(e)) ? isFinite(t) : !("array" != e || !(t instanceof Array || Array.isArray && Array.isArray(t))) || ("null" == e && null === t || e == typeof t && null !== t || "object" == e && t === Object(t) || f.call(t).slice(8, -1).toLowerCase() == e)
                    }

                    function k(t, e) {
                        for (var n = 0, r = t.length; n < r; n++)
                            if (t[n] === e) return t.push(t.splice(n, 1)[0])
                    }

                    function D(t, e, n) {
                        return function i() {
                            var a = Array.prototype.slice.call(arguments, 0),
                                o = a.join("\u2400"),
                                s = i.cache = i.cache || {},
                                u = i.count = i.count || [];
                            return s[r](o) ? (k(u, o), n ? n(s[o]) : s[o]) : (u.length >= 1e3 && delete s[u.shift()], u.push(o), s[o] = t.apply(e, a), n ? n(s[o]) : s[o])
                        }
                    }

                    function _(t) {
                        return t % 360 * h / 180
                    }
                    e._.$ = E, e._.id = C, e.format = function() {
                        var t = /\{([^\}]+)\}/g,
                            e = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g;
                        return function(n, r) {
                            return i(n).replace(t, (function(t, n) {
                                return function(t, n, r) {
                                    var i = r;
                                    return n.replace(e, (function(t, e, n, r, a) {
                                        e = e || r, i && (e in i && (i = i[e]), "function" == typeof i && a && (i = i()))
                                    })), i = (null == i || i == r ? t : i) + ""
                                }(t, n, r)
                            }))
                        }
                    }(), e._.clone = function t(e) {
                        if ("function" == typeof e || Object(e) !== e) return e;
                        var n = new e.constructor;
                        for (var i in e) e[r](i) && (n[i] = t(e[i]));
                        return n
                    }, e._.cacher = D, e.rad = _, e.deg = function(t) {
                        return 180 * t / h % 360
                    }, e.sin = function(t) {
                        return s.sin(e.rad(t))
                    }, e.tan = function(t) {
                        return s.tan(e.rad(t))
                    }, e.cos = function(t) {
                        return s.cos(e.rad(t))
                    }, e.asin = function(t) {
                        return e.deg(s.asin(t))
                    }, e.acos = function(t) {
                        return e.deg(s.acos(t))
                    }, e.atan = function(t) {
                        return e.deg(s.atan(t))
                    }, e.atan2 = function(t) {
                        return e.deg(s.atan2(t))
                    }, e.angle = function t(e, n, r, i, a, o) {
                        if (null == a) {
                            var u = e - r,
                                l = n - i;
                            return u || l ? (180 + 180 * s.atan2(-l, -u) / h + 360) % 360 : 0
                        }
                        return t(e, n, a, o) - t(r, i, a, o)
                    }, e.len = function(t, n, r, i) {
                        return Math.sqrt(e.len2(t, n, r, i))
                    }, e.len2 = function(t, e, n, r) {
                        return (t - n) * (t - n) + (e - r) * (e - r)
                    }, e.closestPoint = function(t, e, n) {
                        function r(t) {
                            var r = t.x - e,
                                i = t.y - n;
                            return r * r + i * i
                        }
                        for (var i, a, o, s, u = t.node, l = u.getTotalLength(), c = l / u.pathSegList.numberOfItems * .125, h = 1 / 0, f = 0; f <= l; f += c)(s = r(o = u.getPointAtLength(f))) < h && (i = o, a = f, h = s);
                        for (c *= .5; c > .5;) {
                            var d, p, g, v, m, y;
                            (g = a - c) >= 0 && (m = r(d = u.getPointAtLength(g))) < h ? (i = d, a = g, h = m) : (v = a + c) <= l && (y = r(p = u.getPointAtLength(v))) < h ? (i = p, a = v, h = y) : c *= .5
                        }
                        return i = {
                            x: i.x,
                            y: i.y,
                            length: a,
                            distance: Math.sqrt(h)
                        }
                    }, e.is = S, e.snapTo = function(t, e, n) {
                        if (n = S(n, "finite") ? n : 10, S(t, "array")) {
                            for (var r = t.length; r--;)
                                if (c(t[r] - e) <= n) return t[r]
                        } else {
                            var i = e % (t = +t);
                            if (i < n) return e - i;
                            if (i > t - n) return e - i + t
                        }
                        return e
                    }, e.getRGB = D((function(t) {
                        if (!t || (t = i(t)).indexOf("-") + 1) return {
                            r: -1,
                            g: -1,
                            b: -1,
                            hex: "none",
                            error: 1,
                            toString: j
                        };
                        if ("none" == t) return {
                            r: -1,
                            g: -1,
                            b: -1,
                            hex: "none",
                            toString: j
                        };
                        if (!v[r](t.toLowerCase().substring(0, 2)) && "#" != t.charAt() && (t = T(t)), !t) return {
                            r: -1,
                            g: -1,
                            b: -1,
                            hex: "none",
                            error: 1,
                            toString: j
                        };
                        var n, c, h, f, g, m, y = t.match(d);
                        return y ? (y[2] && (h = o(y[2].substring(5), 16), c = o(y[2].substring(3, 5), 16), n = o(y[2].substring(1, 3), 16)), y[3] && (h = o((g = y[3].charAt(3)) + g, 16), c = o((g = y[3].charAt(2)) + g, 16), n = o((g = y[3].charAt(1)) + g, 16)), y[4] && (m = y[4].split(p), n = a(m[0]), "%" == m[0].slice(-1) && (n *= 2.55), c = a(m[1]), "%" == m[1].slice(-1) && (c *= 2.55), h = a(m[2]), "%" == m[2].slice(-1) && (h *= 2.55), "rgba" == y[1].toLowerCase().slice(0, 4) && (f = a(m[3])), m[3] && "%" == m[3].slice(-1) && (f /= 100)), y[5] ? (m = y[5].split(p), n = a(m[0]), "%" == m[0].slice(-1) && (n /= 100), c = a(m[1]), "%" == m[1].slice(-1) && (c /= 100), h = a(m[2]), "%" == m[2].slice(-1) && (h /= 100), ("deg" == m[0].slice(-3) || "\xb0" == m[0].slice(-1)) && (n /= 360), "hsba" == y[1].toLowerCase().slice(0, 4) && (f = a(m[3])), m[3] && "%" == m[3].slice(-1) && (f /= 100), e.hsb2rgb(n, c, h, f)) : y[6] ? (m = y[6].split(p), n = a(m[0]), "%" == m[0].slice(-1) && (n /= 100), c = a(m[1]), "%" == m[1].slice(-1) && (c /= 100), h = a(m[2]), "%" == m[2].slice(-1) && (h /= 100), ("deg" == m[0].slice(-3) || "\xb0" == m[0].slice(-1)) && (n /= 360), "hsla" == y[1].toLowerCase().slice(0, 4) && (f = a(m[3])), m[3] && "%" == m[3].slice(-1) && (f /= 100), e.hsl2rgb(n, c, h, f)) : (n = l(s.round(n), 255), c = l(s.round(c), 255), h = l(s.round(h), 255), f = l(u(f, 0), 1), (y = {
                            r: n,
                            g: c,
                            b: h,
                            toString: j
                        }).hex = "#" + (16777216 | h | c << 8 | n << 16).toString(16).slice(1), y.opacity = S(f, "finite") ? f : 1, y)) : {
                            r: -1,
                            g: -1,
                            b: -1,
                            hex: "none",
                            error: 1,
                            toString: j
                        }
                    }), e), e.hsb = D((function(t, n, r) {
                        return e.hsb2rgb(t, n, r).hex
                    })), e.hsl = D((function(t, n, r) {
                        return e.hsl2rgb(t, n, r).hex
                    })), e.rgb = D((function(t, e, n, r) {
                        if (S(r, "finite")) {
                            var i = s.round;
                            return "rgba(" + [i(t), i(e), i(n), +r.toFixed(2)] + ")"
                        }
                        return "#" + (16777216 | n | e << 8 | t << 16).toString(16).slice(1)
                    }));
                    var T = function(t) {
                            var e = n.doc.getElementsByTagName("head")[0] || n.doc.getElementsByTagName("svg")[0],
                                r = "rgb(255, 0, 0)";
                            return T = D((function(t) {
                                if ("red" == t.toLowerCase()) return r;
                                e.style.color = r, e.style.color = t;
                                var i = n.doc.defaultView.getComputedStyle(e, "").getPropertyValue("color");
                                return i == r ? null : i
                            })), T(t)
                        },
                        M = function() {
                            return "hsb(" + [this.h, this.s, this.b] + ")"
                        },
                        N = function() {
                            return "hsl(" + [this.h, this.s, this.l] + ")"
                        },
                        j = function() {
                            return 1 == this.opacity || null == this.opacity ? this.hex : "rgba(" + [this.r, this.g, this.b, this.opacity] + ")"
                        },
                        P = function(t, n, r) {
                            if (null == n && S(t, "object") && "r" in t && "g" in t && "b" in t && (r = t.b, n = t.g, t = t.r), null == n && S(t, string)) {
                                var i = e.getRGB(t);
                                t = i.r, n = i.g, r = i.b
                            }
                            return (t > 1 || n > 1 || r > 1) && (t /= 255, n /= 255, r /= 255), [t, n, r]
                        },
                        L = function(t, n, r, i) {
                            var a = {
                                r: t = s.round(255 * t),
                                g: n = s.round(255 * n),
                                b: r = s.round(255 * r),
                                opacity: S(i, "finite") ? i : 1,
                                hex: e.rgb(t, n, r),
                                toString: j
                            };
                            return S(i, "finite") && (a.opacity = i), a
                        };
                    e.color = function(t) {
                        var n;
                        return S(t, "object") && "h" in t && "s" in t && "b" in t ? (n = e.hsb2rgb(t), t.r = n.r, t.g = n.g, t.b = n.b, t.opacity = 1, t.hex = n.hex) : S(t, "object") && "h" in t && "s" in t && "l" in t ? (n = e.hsl2rgb(t), t.r = n.r, t.g = n.g, t.b = n.b, t.opacity = 1, t.hex = n.hex) : (S(t, "string") && (t = e.getRGB(t)), S(t, "object") && "r" in t && "g" in t && "b" in t && !("error" in t) ? (n = e.rgb2hsl(t), t.h = n.h, t.s = n.s, t.l = n.l, n = e.rgb2hsb(t), t.v = n.b) : ((t = {
                            hex: "none"
                        }).r = t.g = t.b = t.h = t.s = t.v = t.l = -1, t.error = 1)), t.toString = j, t
                    }, e.hsb2rgb = function(t, e, n, r) {
                        var i, a, o, s, u;
                        return S(t, "object") && "h" in t && "s" in t && "b" in t && (n = t.b, e = t.s, r = t.o, t = t.h), s = (u = n * e) * (1 - c((t = (t *= 360) % 360 / 60) % 2 - 1)), i = a = o = n - u, L(i += [u, s, 0, 0, s, u][t = ~~t], a += [s, u, u, s, 0, 0][t], o += [0, 0, s, u, u, s][t], r)
                    }, e.hsl2rgb = function(t, e, n, r) {
                        var i, a, o, s, u;
                        return S(t, "object") && "h" in t && "s" in t && "l" in t && (n = t.l, e = t.s, t = t.h), (t > 1 || e > 1 || n > 1) && (t /= 360, e /= 100, n /= 100), s = (u = 2 * e * (n < .5 ? n : 1 - n)) * (1 - c((t = (t *= 360) % 360 / 60) % 2 - 1)), i = a = o = n - u / 2, L(i += [u, s, 0, 0, s, u][t = ~~t], a += [s, u, u, s, 0, 0][t], o += [0, 0, s, u, u, s][t], r)
                    }, e.rgb2hsb = function(t, e, n) {
                        var r, i;
                        return t = (n = P(t, e, n))[0], e = n[1], n = n[2], {
                            h: ((0 == (i = (r = u(t, e, n)) - l(t, e, n)) ? null : r == t ? (e - n) / i : r == e ? (n - t) / i + 2 : (t - e) / i + 4) + 360) % 6 * 60 / 360,
                            s: 0 == i ? 0 : i / r,
                            b: r,
                            toString: M
                        }
                    }, e.rgb2hsl = function(t, e, n) {
                        var r, i, a, o;
                        return t = (n = P(t, e, n))[0], e = n[1], n = n[2], r = ((i = u(t, e, n)) + (a = l(t, e, n))) / 2, {
                            h: ((0 == (o = i - a) ? null : i == t ? (e - n) / o : i == e ? (n - t) / o + 2 : (t - e) / o + 4) + 360) % 6 * 60 / 360,
                            s: 0 == o ? 0 : r < .5 ? o / (2 * r) : o / (2 - 2 * r),
                            l: r,
                            toString: N
                        }
                    }, e.parsePathString = function(t) {
                        if (!t) return null;
                        var n = e.path(t);
                        if (n.arr) return e.path.clone(n.arr);
                        var r = {
                                a: 7,
                                c: 6,
                                o: 2,
                                h: 1,
                                l: 2,
                                m: 2,
                                r: 4,
                                q: 4,
                                s: 4,
                                t: 2,
                                v: 1,
                                u: 3,
                                z: 0
                            },
                            a = [];
                        return S(t, "array") && S(t[0], "array") && (a = e.path.clone(t)), a.length || i(t).replace(m, (function(t, e, n) {
                            var i = [],
                                o = e.toLowerCase();
                            if (n.replace(x, (function(t, e) {
                                    e && i.push(+e)
                                })), "m" == o && i.length > 2 && (a.push([e].concat(i.splice(0, 2))), o = "l", e = "m" == e ? "l" : "L"), "o" == o && 1 == i.length && a.push([e, i[0]]), "r" == o) a.push([e].concat(i));
                            else
                                for (; i.length >= r[o] && (a.push([e].concat(i.splice(0, r[o]))), r[o]););
                        })), a.toString = e.path.toString, n.arr = e.path.clone(a), a
                    };
                    var q = e.parseTransformString = function(t) {
                        if (!t) return null;
                        var n = [];
                        return S(t, "array") && S(t[0], "array") && (n = e.path.clone(t)), n.length || i(t).replace(y, (function(t, e, r) {
                            var i = [];
                            e.toLowerCase();
                            r.replace(x, (function(t, e) {
                                e && i.push(+e)
                            })), n.push([e].concat(i))
                        })), n.toString = e.path.toString, n
                    };
                    e._.svgTransform2string = function(t) {
                        var e = [];
                        return t = t.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, (function(t, n, r) {
                            return r = r.split(/\s*,\s*|\s+/), "rotate" == n && 1 == r.length && r.push(0, 0), "scale" == n && (r.length > 2 ? r = r.slice(0, 2) : 2 == r.length && r.push(0, 0), 1 == r.length && r.push(r[0], 0, 0)), "skewX" == n ? e.push(["m", 1, 0, s.tan(_(r[0])), 1, 0, 0]) : "skewY" == n ? e.push(["m", 1, s.tan(_(r[0])), 0, 1, 0, 0]) : e.push([n.charAt(0)].concat(r)), t
                        })), e
                    }, e._.rgTransform = /^[a-z][\s]*-?\.?\d/i, e._.transform2matrix = function(t, n) {
                        var r = q(t),
                            a = new e.Matrix;
                        if (r)
                            for (var o = 0, s = r.length; o < s; o++) {
                                var u, l, c, h, f, d = r[o],
                                    p = d.length,
                                    g = i(d[0]).toLowerCase(),
                                    v = d[0] != g,
                                    m = v ? a.invert() : 0;
                                "t" == g && 2 == p ? a.translate(d[1], 0) : "t" == g && 3 == p ? v ? (u = m.x(0, 0), l = m.y(0, 0), c = m.x(d[1], d[2]), h = m.y(d[1], d[2]), a.translate(c - u, h - l)) : a.translate(d[1], d[2]) : "r" == g ? 2 == p ? (f = f || n, a.rotate(d[1], f.x + f.width / 2, f.y + f.height / 2)) : 4 == p && (v ? (c = m.x(d[2], d[3]), h = m.y(d[2], d[3]), a.rotate(d[1], c, h)) : a.rotate(d[1], d[2], d[3])) : "s" == g ? 2 == p || 3 == p ? (f = f || n, a.scale(d[1], d[p - 1], f.x + f.width / 2, f.y + f.height / 2)) : 4 == p ? v ? (c = m.x(d[2], d[3]), h = m.y(d[2], d[3]), a.scale(d[1], d[1], c, h)) : a.scale(d[1], d[1], d[2], d[3]) : 5 == p && (v ? (c = m.x(d[3], d[4]), h = m.y(d[3], d[4]), a.scale(d[1], d[2], c, h)) : a.scale(d[1], d[2], d[3], d[4])) : "m" == g && 7 == p && a.add(d[1], d[2], d[3], d[4], d[5], d[6])
                            }
                        return a
                    }, e._unit2px = function(t, e, n) {
                        var r = V(t).node,
                            i = {},
                            a = r.querySelector(".svg---mgr");
                        a || (a = E("rect"), E(a, {
                            x: -9e9,
                            y: -9e9,
                            width: 10,
                            height: 10,
                            class: "svg---mgr",
                            fill: "none"
                        }), r.appendChild(a));

                        function o(t) {
                            if (null == t) return "";
                            if (t == +t) return t;
                            E(a, {
                                width: t
                            });
                            try {
                                return a.getBBox().width
                            } catch (e) {
                                return 0
                            }
                        }

                        function s(t) {
                            if (null == t) return "";
                            if (t == +t) return t;
                            E(a, {
                                height: t
                            });
                            try {
                                return a.getBBox().height
                            } catch (e) {
                                return 0
                            }
                        }

                        function u(r, a) {
                            null == e ? i[r] = a(t.attr(r) || 0) : r == e && (i = a(null == n ? t.attr(r) || 0 : n))
                        }
                        switch (t.type) {
                            case "rect":
                                u("rx", o), u("ry", s);
                            case "image":
                                u("width", o), u("height", s);
                            case "text":
                                u("x", o), u("y", s);
                                break;
                            case "circle":
                                u("cx", o), u("cy", s), u("r", o);
                                break;
                            case "ellipse":
                                u("cx", o), u("cy", s), u("rx", o), u("ry", s);
                                break;
                            case "line":
                                u("x1", o), u("x2", o), u("y1", s), u("y2", s);
                                break;
                            case "marker":
                                u("refX", o), u("markerWidth", o), u("refY", s), u("markerHeight", s);
                                break;
                            case "radialGradient":
                                u("fx", o), u("fy", s);
                                break;
                            case "tspan":
                                u("dx", o), u("dy", s);
                                break;
                            default:
                                u(e, o)
                        }
                        return r.removeChild(a), i
                    };
                    n.doc.contains || n.doc.compareDocumentPosition;

                    function V(t) {
                        return t.node.ownerSVGElement && X(t.node.ownerSVGElement) || e.select("svg")
                    }

                    function O(t) {
                        S(t, "array") || (t = Array.prototype.slice.call(arguments, 0));
                        for (var e = 0, n = 0, r = this.node; this[e];) delete this[e++];
                        for (e = 0; e < t.length; e++) "set" == t[e].type ? t[e].forEach((function(t) {
                            r.appendChild(t.node)
                        })) : r.appendChild(t[e].node);
                        var i = r.childNodes;
                        for (e = 0; e < i.length; e++) this[n++] = X(i[e]);
                        return this
                    }

                    function G(t) {
                        if (t.snap in A) return A[t.snap];
                        var e;
                        try {
                            e = t.ownerSVGElement
                        } catch (a) {}
                        this.node = t, e && (this.paper = new U(e)), this.type = t.tagName || t.nodeName;
                        var n = this.id = C(this);
                        if (this.anims = {}, this._ = {
                                transform: []
                            }, t.snap = n, A[n] = this, "g" == this.type && (this.add = O), this.type in {
                                g: 1,
                                mask: 1,
                                pattern: 1,
                                symbol: 1
                            })
                            for (var i in U.prototype) U.prototype[r](i) && (this[i] = U.prototype[i])
                    }

                    function R(t) {
                        this.node = t
                    }

                    function z(t, e) {
                        var n = E(t);
                        return e.appendChild(n), X(n)
                    }

                    function U(t, e) {
                        var i, a, o, s = U.prototype;
                        if (t && t.tagName && "svg" == t.tagName.toLowerCase()) {
                            if (t.snap in A) return A[t.snap];
                            var u = t.ownerDocument;
                            for (var l in i = new G(t), a = t.getElementsByTagName("desc")[0], o = t.getElementsByTagName("defs")[0], a || ((a = E("desc")).appendChild(u.createTextNode("Created with Snap")), i.node.appendChild(a)), o || (o = E("defs"), i.node.appendChild(o)), i.defs = o, s) s[r](l) && (i[l] = s[l]);
                            i.paper = i.root = i
                        } else E((i = z("svg", n.doc.body)).node, {
                            height: e,
                            version: 1.1,
                            width: t,
                            xmlns: B
                        });
                        return i
                    }

                    function X(t) {
                        return t ? t instanceof G || t instanceof R ? t : t.tagName && "svg" == t.tagName.toLowerCase() ? new U(t) : t.tagName && "object" == t.tagName.toLowerCase() && "image/svg+xml" == t.type ? new U(t.contentDocument.getElementsByTagName("svg")[0]) : new G(t) : t
                    }

                    function I(t, e) {
                        for (var n = 0, r = t.length; n < r; n++) {
                            var i = {
                                    type: t[n].type,
                                    attr: t[n].attr()
                                },
                                a = t[n].children();
                            e.push(i), a.length && I(a, i.childNodes = [])
                        }
                    }
                    e._.getSomeDefs = function(t) {
                        var n = t.node.ownerSVGElement && X(t.node.ownerSVGElement) || t.node.parentNode && X(t.node.parentNode) || e.select("svg") || e(0, 0),
                            r = n.select("defs"),
                            i = null != r && r.node;
                        return i || (i = z("defs", n.node).node), i
                    }, e._.getSomeSVG = V, e.select = function(t) {
                        return t = i(t).replace(/([^\\]):/g, "$1\\:"), X(n.doc.querySelector(t))
                    }, e.selectAll = function(t) {
                        for (var r = n.doc.querySelectorAll(t), i = (e.set || Array)(), a = 0; a < r.length; a++) i.push(X(r[a]));
                        return i
                    }, setInterval((function() {
                        for (var t in A)
                            if (A[r](t)) {
                                var e = A[t],
                                    n = e.node;
                                ("svg" != e.type && !n.ownerSVGElement || "svg" == e.type && (!n.parentNode || "ownerSVGElement" in n.parentNode && !n.ownerSVGElement)) && delete A[t]
                            }
                    }), 1e4), G.prototype.attr = function(t, e) {
                        var n = this,
                            i = n.node;
                        if (!t) {
                            if (1 != i.nodeType) return {
                                text: i.nodeValue
                            };
                            for (var a = i.attributes, o = {}, s = 0, u = a.length; s < u; s++) o[a[s].nodeName] = a[s].nodeValue;
                            return o
                        }
                        if (S(t, "string")) {
                            if (!(arguments.length > 1)) return eve("snap.util.getattr." + t, n).firstDefined();
                            var l = {};
                            l[t] = e, t = l
                        }
                        for (var c in t) t[r](c) && eve("snap.util.attr." + c, n, t[c]);
                        return n
                    }, e.parse = function(t) {
                        var e = n.doc.createDocumentFragment(),
                            r = !0,
                            a = n.doc.createElement("div");
                        if ((t = i(t)).match(/^\s*<\s*svg(?:\s|>)/) || (t = "<svg>" + t + "</svg>", r = !1), a.innerHTML = t, t = a.getElementsByTagName("svg")[0])
                            if (r) e = t;
                            else
                                for (; t.firstChild;) e.appendChild(t.firstChild);
                        return new R(e)
                    }, e.fragment = function() {
                        for (var t = Array.prototype.slice.call(arguments, 0), r = n.doc.createDocumentFragment(), i = 0, a = t.length; i < a; i++) {
                            var o = t[i];
                            o.node && o.node.nodeType && r.appendChild(o.node), o.nodeType && r.appendChild(o), "string" == typeof o && r.appendChild(e.parse(o).node)
                        }
                        return new R(r)
                    }, e._.make = z, e._.wrap = X, U.prototype.el = function(t, e) {
                        var n = z(t, this.node);
                        return e && n.attr(e), n
                    }, G.prototype.children = function() {
                        for (var t = [], n = this.node.childNodes, r = 0, i = n.length; r < i; r++) t[r] = e(n[r]);
                        return t
                    }, G.prototype.toJSON = function() {
                        var t = [];
                        return I([this], t), t[0]
                    }, eve.on("snap.util.getattr", (function() {
                        var t = eve.nt(),
                            e = (t = t.substring(t.lastIndexOf(".") + 1)).replace(/[A-Z]/g, (function(t) {
                                return "-" + t.toLowerCase()
                            }));
                        return $[r](e) ? this.node.ownerDocument.defaultView.getComputedStyle(this.node, null).getPropertyValue(e) : E(this.node, t)
                    }));
                    var $ = {
                        "alignment-baseline": 0,
                        "baseline-shift": 0,
                        clip: 0,
                        "clip-path": 0,
                        "clip-rule": 0,
                        color: 0,
                        "color-interpolation": 0,
                        "color-interpolation-filters": 0,
                        "color-profile": 0,
                        "color-rendering": 0,
                        cursor: 0,
                        direction: 0,
                        display: 0,
                        "dominant-baseline": 0,
                        "enable-background": 0,
                        fill: 0,
                        "fill-opacity": 0,
                        "fill-rule": 0,
                        filter: 0,
                        "flood-color": 0,
                        "flood-opacity": 0,
                        font: 0,
                        "font-family": 0,
                        "font-size": 0,
                        "font-size-adjust": 0,
                        "font-stretch": 0,
                        "font-style": 0,
                        "font-variant": 0,
                        "font-weight": 0,
                        "glyph-orientation-horizontal": 0,
                        "glyph-orientation-vertical": 0,
                        "image-rendering": 0,
                        kerning: 0,
                        "letter-spacing": 0,
                        "lighting-color": 0,
                        marker: 0,
                        "marker-end": 0,
                        "marker-mid": 0,
                        "marker-start": 0,
                        mask: 0,
                        opacity: 0,
                        overflow: 0,
                        "pointer-events": 0,
                        "shape-rendering": 0,
                        "stop-color": 0,
                        "stop-opacity": 0,
                        stroke: 0,
                        "stroke-dasharray": 0,
                        "stroke-dashoffset": 0,
                        "stroke-linecap": 0,
                        "stroke-linejoin": 0,
                        "stroke-miterlimit": 0,
                        "stroke-opacity": 0,
                        "stroke-width": 0,
                        "text-anchor": 0,
                        "text-decoration": 0,
                        "text-rendering": 0,
                        "unicode-bidi": 0,
                        visibility: 0,
                        "word-spacing": 0,
                        "writing-mode": 0
                    };
                    eve.on("snap.util.attr", (function(t) {
                        var e = eve.nt(),
                            n = {};
                        n[e = e.substring(e.lastIndexOf(".") + 1)] = t;
                        var i = e.replace(/-(\w)/gi, (function(t, e) {
                                return e.toUpperCase()
                            })),
                            a = e.replace(/[A-Z]/g, (function(t) {
                                return "-" + t.toLowerCase()
                            }));
                        $[r](a) ? this.node.style[i] = null == t ? "" : t : E(this.node, n)
                    })), U.prototype, e.ajax = function(t, e, n, r) {
                        var i = new XMLHttpRequest,
                            a = C();
                        if (i) {
                            if (S(e, "function")) r = n, n = e, e = null;
                            else if (S(e, "object")) {
                                var o = [];
                                for (var s in e) e.hasOwnProperty(s) && o.push(encodeURIComponent(s) + "=" + encodeURIComponent(e[s]));
                                e = o.join("&")
                            }
                            return i.open(e ? "POST" : "GET", t, !0), e && (i.setRequestHeader("X-Requested-With", "XMLHttpRequest"), i.setRequestHeader("Content-type", "application/x-www-form-urlencoded")), n && (eve.once("snap.ajax." + a + ".0", n), eve.once("snap.ajax." + a + ".200", n), eve.once("snap.ajax." + a + ".304", n)), i.onreadystatechange = function() {
                                4 == i.readyState && eve("snap.ajax." + a + "." + i.status, r, i)
                            }, 4 == i.readyState ? i : (i.send(e), i)
                        }
                    }, e.load = function(t, n, r) {
                        e.ajax(t, (function(t) {
                            var i = e.parse(t.responseText);
                            r ? n.call(r, i) : n(i)
                        }))
                    };
                    return e.getElementByPoint = function(t, e) {
                        this.canvas;
                        var r = n.doc.elementFromPoint(t, e);
                        if (n.win.opera && "svg" == r.tagName) {
                            var i = function(t) {
                                    var e = t.getBoundingClientRect(),
                                        n = t.ownerDocument,
                                        r = n.body,
                                        i = n.documentElement,
                                        a = i.clientTop || r.clientTop || 0,
                                        o = i.clientLeft || r.clientLeft || 0;
                                    return {
                                        y: e.top + (g.win.pageYOffset || i.scrollTop || r.scrollTop) - a,
                                        x: e.left + (g.win.pageXOffset || i.scrollLeft || r.scrollLeft) - o
                                    }
                                }(r),
                                a = r.createSVGRect();
                            a.x = t - i.x, a.y = e - i.y, a.width = a.height = 1;
                            var o = r.getIntersectionList(a, null);
                            o.length && (r = o[o.length - 1])
                        }
                        return r ? X(r) : null
                    }, e.plugin = function(t) {
                        t(e, G, U, n, R)
                    }, n.win.Snap = e, e
                }(window || this);
            i.plugin((function(t, e, n, r, i) {
                var a = e.prototype,
                    o = t.is,
                    s = String,
                    u = t._unit2px,
                    l = t._.$,
                    c = t._.make,
                    h = t._.getSomeDefs,
                    f = "hasOwnProperty",
                    d = t._.wrap;
                a.getBBox = function(e) {
                    if ("tspan" == this.type) return t._.box(this.node.getClientRects().item(0));
                    if (!t.Matrix || !t.path) return this.node.getBBox();
                    var n = this,
                        r = new t.Matrix;
                    if (n.removed) return t._.box();
                    for (;
                        "use" == n.type;)
                        if (e || (r = r.add(n.transform().localMatrix.translate(n.attr("x") || 0, n.attr("y") || 0))), n.original) n = n.original;
                        else {
                            var i = n.attr("xlink:href");
                            n = n.original = n.node.ownerDocument.getElementById(i.substring(i.indexOf("#") + 1))
                        }
                    var a = n._,
                        o = t.path.get[n.type] || t.path.get.deflt;
                    try {
                        return e ? (a.bboxwt = o ? t.path.getBBox(n.realPath = o(n)) : t._.box(n.node.getBBox()), t._.box(a.bboxwt)) : (n.realPath = o(n), n.matrix = n.transform().localMatrix, a.bbox = t.path.getBBox(t.path.map(n.realPath, r.add(n.matrix))), t._.box(a.bbox))
                    } catch (s) {
                        return t._.box()
                    }
                };
                var p = function() {
                    return this.string
                };

                function g(e, n) {
                    if (null == n) {
                        var r = !0;
                        if (!(n = "linearGradient" == e.type || "radialGradient" == e.type ? e.node.getAttribute("gradientTransform") : "pattern" == e.type ? e.node.getAttribute("patternTransform") : e.node.getAttribute("transform"))) return new t.Matrix;
                        n = t._.svgTransform2string(n)
                    } else n = t._.rgTransform.test(n) ? s(n).replace(/\.{3}|\u2026/g, e._.transform || "") : t._.svgTransform2string(n), o(n, "array") && (n = t.path ? t.path.toString.call(n) : s(n)), e._.transform = n;
                    var i = t._.transform2matrix(n, e.getBBox(1));
                    if (r) return i;
                    e.matrix = i
                }
                a.transform = function(e) {
                    var n = this._;
                    if (null == e) {
                        for (var r, i = this, a = new t.Matrix(this.node.getCTM()), o = g(this), u = [o], c = new t.Matrix, h = o.toTransformString(), f = s(o) == s(this.matrix) ? s(n.transform) : h;
                            "svg" != i.type && (i = i.parent());) u.push(g(i));
                        for (r = u.length; r--;) c.add(u[r]);
                        return {
                            string: f,
                            globalMatrix: a,
                            totalMatrix: c,
                            localMatrix: o,
                            diffMatrix: a.clone().add(o.invert()),
                            global: a.toTransformString(),
                            total: c.toTransformString(),
                            local: h,
                            toString: p
                        }
                    }
                    return e instanceof t.Matrix ? (this.matrix = e, this._.transform = e.toTransformString()) : g(this, e), this.node && ("linearGradient" == this.type || "radialGradient" == this.type ? l(this.node, {
                        gradientTransform: this.matrix
                    }) : "pattern" == this.type ? l(this.node, {
                        patternTransform: this.matrix
                    }) : l(this.node, {
                        transform: this.matrix
                    })), this
                }, a.parent = function() {
                    return d(this.node.parentNode)
                }, a.append = a.add = function(t) {
                    if (t) {
                        if ("set" == t.type) {
                            var e = this;
                            return t.forEach((function(t) {
                                e.add(t)
                            })), this
                        }
                        t = d(t), this.node.appendChild(t.node), t.paper = this.paper
                    }
                    return this
                }, a.appendTo = function(t) {
                    return t && (t = d(t)).append(this), this
                }, a.prepend = function(t) {
                    if (t) {
                        if ("set" == t.type) {
                            var e, n = this;
                            return t.forEach((function(t) {
                                e ? e.after(t) : n.prepend(t), e = t
                            })), this
                        }
                        var r = (t = d(t)).parent();
                        this.node.insertBefore(t.node, this.node.firstChild), this.add && this.add(), t.paper = this.paper, this.parent() && this.parent().add(), r && r.add()
                    }
                    return this
                }, a.prependTo = function(t) {
                    return (t = d(t)).prepend(this), this
                }, a.before = function(t) {
                    if ("set" == t.type) {
                        var e = this;
                        return t.forEach((function(t) {
                            var n = t.parent();
                            e.node.parentNode.insertBefore(t.node, e.node), n && n.add()
                        })), this.parent().add(), this
                    }
                    var n = (t = d(t)).parent();
                    return this.node.parentNode.insertBefore(t.node, this.node), this.parent() && this.parent().add(), n && n.add(), t.paper = this.paper, this
                }, a.after = function(t) {
                    var e = (t = d(t)).parent();
                    return this.node.nextSibling ? this.node.parentNode.insertBefore(t.node, this.node.nextSibling) : this.node.parentNode.appendChild(t.node), this.parent() && this.parent().add(), e && e.add(), t.paper = this.paper, this
                }, a.insertBefore = function(t) {
                    t = d(t);
                    var e = this.parent();
                    return t.node.parentNode.insertBefore(this.node, t.node), this.paper = t.paper, e && e.add(), t.parent() && t.parent().add(), this
                }, a.insertAfter = function(t) {
                    t = d(t);
                    var e = this.parent();
                    return t.node.parentNode.insertBefore(this.node, t.node.nextSibling), this.paper = t.paper, e && e.add(), t.parent() && t.parent().add(), this
                }, a.remove = function() {
                    var t = this.parent();
                    return this.node.parentNode && this.node.parentNode.removeChild(this.node), delete this.paper, this.removed = !0, t && t.add(), this
                }, a.select = function(t) {
                    return d(this.node.querySelector(t))
                }, a.selectAll = function(e) {
                    for (var n = this.node.querySelectorAll(e), r = (t.set || Array)(), i = 0; i < n.length; i++) r.push(d(n[i]));
                    return r
                }, a.asPX = function(t, e) {
                    return null == e && (e = this.attr(t)), +u(this, t, e)
                }, a.use = function() {
                    var t, e = this.node.id;
                    return e || (e = this.id, l(this.node, {
                        id: e
                    })), t = "linearGradient" == this.type || "radialGradient" == this.type || "pattern" == this.type ? c(this.type, this.node.parentNode) : c("use", this.node.parentNode), l(t.node, {
                        "xlink:href": "#" + e
                    }), t.original = this, t
                }, a.clone = function() {
                    var e = d(this.node.cloneNode(!0));
                    return l(e.node, "id") && l(e.node, {
                            id: e.id
                        }),
                        function(e) {
                            var n, r = e.selectAll("*"),
                                i = /^\s*url\(("|'|)(.*)\1\)\s*$/,
                                a = [],
                                o = {};

                            function s(e, n) {
                                var r = l(e.node, n);
                                (r = (r = r && r.match(i)) && r[2]) && "#" == r.charAt() && (r = r.substring(1)) && (o[r] = (o[r] || []).concat((function(r) {
                                    var i = {};
                                    i[n] = t.url(r), l(e.node, i)
                                })))
                            }

                            function u(t) {
                                var e = l(t.node, "xlink:href");
                                e && "#" == e.charAt() && (e = e.substring(1)) && (o[e] = (o[e] || []).concat((function(e) {
                                    t.attr("xlink:href", "#" + e)
                                })))
                            }
                            for (var c = 0, h = r.length; c < h; c++) {
                                s(n = r[c], "fill"), s(n, "stroke"), s(n, "filter"), s(n, "mask"), s(n, "clip-path"), u(n);
                                var f = l(n.node, "id");
                                f && (l(n.node, {
                                    id: n.id
                                }), a.push({
                                    old: f,
                                    id: n.id
                                }))
                            }
                            for (c = 0, h = a.length; c < h; c++) {
                                var d = o[a[c].old];
                                if (d)
                                    for (var p = 0, g = d.length; p < g; p++) d[p](a[c].id)
                            }
                        }(e), e.insertAfter(this), e
                }, a.toDefs = function() {
                    return h(this).appendChild(this.node), this
                }, a.pattern = a.toPattern = function(t, e, n, r) {
                    var i = c("pattern", h(this));
                    return null == t && (t = this.getBBox()), o(t, "object") && "x" in t && (e = t.y, n = t.width, r = t.height, t = t.x), l(i.node, {
                        x: t,
                        y: e,
                        width: n,
                        height: r,
                        patternUnits: "userSpaceOnUse",
                        id: i.id,
                        viewBox: [t, e, n, r].join(" ")
                    }), i.node.appendChild(this.node), i
                }, a.marker = function(t, e, n, r, i, a) {
                    var s = c("marker", h(this));
                    return null == t && (t = this.getBBox()), o(t, "object") && "x" in t && (e = t.y, n = t.width, r = t.height, i = t.refX || t.cx, a = t.refY || t.cy, t = t.x), l(s.node, {
                        viewBox: [t, e, n, r].join(" "),
                        markerWidth: n,
                        markerHeight: r,
                        orient: "auto",
                        refX: i || 0,
                        refY: a || 0,
                        id: s.id
                    }), s.node.appendChild(this.node), s
                };
                var v = {};

                function m(t) {
                    return function() {
                        var e = t ? "<" + this.type : "",
                            n = this.node.attributes,
                            r = this.node.childNodes;
                        if (t)
                            for (var i = 0, a = n.length; i < a; i++) e += " " + n[i].name + '="' + n[i].value.replace(/"/g, '\\"') + '"';
                        if (r.length) {
                            for (t && (e += ">"), i = 0, a = r.length; i < a; i++) 3 == r[i].nodeType ? e += r[i].nodeValue : 1 == r[i].nodeType && (e += d(r[i]).toString());
                            t && (e += "</" + this.type + ">")
                        } else t && (e += "/>");
                        return e
                    }
                }
                a.data = function(e, n) {
                    var r = v[this.id] = v[this.id] || {};
                    if (0 == arguments.length) return eve("snap.data.get." + this.id, this, r, null), r;
                    if (1 == arguments.length) {
                        if (t.is(e, "object")) {
                            for (var i in e) e[f](i) && this.data(i, e[i]);
                            return this
                        }
                        return eve("snap.data.get." + this.id, this, r[e], e), r[e]
                    }
                    return r[e] = n, eve("snap.data.set." + this.id, this, n, e), this
                }, a.removeData = function(t) {
                    return null == t ? v[this.id] = {} : v[this.id] && delete v[this.id][t], this
                }, a.outerSVG = a.toString = m(1), a.innerSVG = m(), a.toDataURL = function() {
                    if (window && window.btoa) {
                        var e = this.getBBox(),
                            n = t.format('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="{x} {y} {width} {height}">{contents}</svg>', {
                                x: +e.x.toFixed(3),
                                y: +e.y.toFixed(3),
                                width: +e.width.toFixed(3),
                                height: +e.height.toFixed(3),
                                contents: this.outerSVG()
                            });
                        return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(n)))
                    }
                }, i.prototype.select = a.select, i.prototype.selectAll = a.selectAll
            })), i.plugin((function(t, e, n, r, i) {
                var a = Object.prototype.toString,
                    o = String,
                    s = Math;

                function u(t, e, n, r, i, o) {
                    if (null == e && "[object SVGMatrix]" == a.call(t)) return this.a = t.a, this.b = t.b, this.c = t.c, this.d = t.d, this.e = t.e, void(this.f = t.f);
                    null != t ? (this.a = +t, this.b = +e, this.c = +n, this.d = +r, this.e = +i, this.f = +o) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0)
                }! function(e) {
                    function n(t) {
                        return t[0] * t[0] + t[1] * t[1]
                    }

                    function r(t) {
                        var e = s.sqrt(n(t));
                        t[0] && (t[0] /= e), t[1] && (t[1] /= e)
                    }
                    e.add = function(t, e, n, r, i, a) {
                        if (t && t instanceof u) return this.add(t.a, t.b, t.c, t.d, t.e, t.f);
                        var o = t * this.a + e * this.c,
                            s = t * this.b + e * this.d;
                        return this.e += i * this.a + a * this.c, this.f += i * this.b + a * this.d, this.c = n * this.a + r * this.c, this.d = n * this.b + r * this.d, this.a = o, this.b = s, this
                    }, u.prototype.multLeft = function(t, e, n, r, i, a) {
                        if (t && t instanceof u) return this.multLeft(t.a, t.b, t.c, t.d, t.e, t.f);
                        var o = t * this.a + n * this.b,
                            s = t * this.c + n * this.d,
                            l = t * this.e + n * this.f + i;
                        return this.b = e * this.a + r * this.b, this.d = e * this.c + r * this.d, this.f = e * this.e + r * this.f + a, this.a = o, this.c = s, this.e = l, this
                    }, e.invert = function() {
                        var t = this,
                            e = t.a * t.d - t.b * t.c;
                        return new u(t.d / e, -t.b / e, -t.c / e, t.a / e, (t.c * t.f - t.d * t.e) / e, (t.b * t.e - t.a * t.f) / e)
                    }, e.clone = function() {
                        return new u(this.a, this.b, this.c, this.d, this.e, this.f)
                    }, e.translate = function(t, e) {
                        return this.e += t * this.a + e * this.c, this.f += t * this.b + e * this.d, this
                    }, e.scale = function(t, e, n, r) {
                        return null == e && (e = t), (n || r) && this.translate(n, r), this.a *= t, this.b *= t, this.c *= e, this.d *= e, (n || r) && this.translate(-n, -r), this
                    }, e.rotate = function(e, n, r) {
                        e = t.rad(e), n = n || 0, r = r || 0;
                        var i = +s.cos(e).toFixed(9),
                            a = +s.sin(e).toFixed(9);
                        return this.add(i, a, -a, i, n, r), this.add(1, 0, 0, 1, -n, -r)
                    }, e.skewX = function(t) {
                        return this.skew(t, 0)
                    }, e.skewY = function(t) {
                        return this.skew(0, t)
                    }, e.skew = function(e, n) {
                        e = e || 0, n = n || 0, e = t.rad(e), n = t.rad(n);
                        var r = s.tan(e).toFixed(9),
                            i = s.tan(n).toFixed(9);
                        return this.add(1, i, r, 1, 0, 0)
                    }, e.x = function(t, e) {
                        return t * this.a + e * this.c + this.e
                    }, e.y = function(t, e) {
                        return t * this.b + e * this.d + this.f
                    }, e.get = function(t) {
                        return +this[o.fromCharCode(97 + t)].toFixed(4)
                    }, e.toString = function() {
                        return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")"
                    }, e.offset = function() {
                        return [this.e.toFixed(4), this.f.toFixed(4)]
                    }, e.determinant = function() {
                        return this.a * this.d - this.b * this.c
                    }, e.split = function() {
                        var e = {};
                        e.dx = this.e, e.dy = this.f;
                        var i = [
                            [this.a, this.b],
                            [this.c, this.d]
                        ];
                        e.scalex = s.sqrt(n(i[0])), r(i[0]), e.shear = i[0][0] * i[1][0] + i[0][1] * i[1][1], i[1] = [i[1][0] - i[0][0] * e.shear, i[1][1] - i[0][1] * e.shear], e.scaley = s.sqrt(n(i[1])), r(i[1]), e.shear /= e.scaley, this.determinant() < 0 && (e.scalex = -e.scalex);
                        var a = i[0][1],
                            o = i[1][1];
                        return o < 0 ? (e.rotate = t.deg(s.acos(o)), a < 0 && (e.rotate = 360 - e.rotate)) : e.rotate = t.deg(s.asin(a)), e.isSimple = !+e.shear.toFixed(9) && (e.scalex.toFixed(9) == e.scaley.toFixed(9) || !e.rotate), e.isSuperSimple = !+e.shear.toFixed(9) && e.scalex.toFixed(9) == e.scaley.toFixed(9) && !e.rotate, e.noRotation = !+e.shear.toFixed(9) && !e.rotate, e
                    }, e.toTransformString = function(t) {
                        var e = t || this.split();
                        return +e.shear.toFixed(9) ? "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)] : (e.scalex = +e.scalex.toFixed(4), e.scaley = +e.scaley.toFixed(4), e.rotate = +e.rotate.toFixed(4), (e.dx || e.dy ? "t" + [+e.dx.toFixed(4), +e.dy.toFixed(4)] : "") + (e.rotate ? "r" + [+e.rotate.toFixed(4), 0, 0] : "") + (1 != e.scalex || 1 != e.scaley ? "s" + [e.scalex, e.scaley, 0, 0] : ""))
                    }
                }(u.prototype), t.Matrix = u, t.matrix = function(t, e, n, r, i, a) {
                    return new u(t, e, n, r, i, a)
                }
            })), i.plugin((function(t, e, n, r, i) {
                var a, o = t._.make,
                    s = t._.wrap,
                    u = t.is,
                    l = t._.getSomeDefs,
                    c = /^url\((['"]?)([^)]+)\1\)$/,
                    h = t._.$,
                    f = t.url,
                    d = String,
                    p = t._.separator;

                function g(n) {
                    return function(r) {
                        if (eve.stop(), r instanceof i && 1 == r.node.childNodes.length && ("radialGradient" == r.node.firstChild.tagName || "linearGradient" == r.node.firstChild.tagName || "pattern" == r.node.firstChild.tagName) && (r = r.node.firstChild, l(this).appendChild(r), r = s(r)), r instanceof e)
                            if ("radialGradient" == r.type || "linearGradient" == r.type || "pattern" == r.type) {
                                r.node.id || h(r.node, {
                                    id: r.id
                                });
                                var a = f(r.node.id)
                            } else a = r.attr(n);
                        else if ((a = t.color(r)).error) {
                            var o = t(l(this).ownerSVGElement).gradient(r);
                            o ? (o.node.id || h(o.node, {
                                id: o.id
                            }), a = f(o.node.id)) : a = r
                        } else a = d(a);
                        var u = {};
                        u[n] = a, h(this.node, u), this.node.style[n] = ""
                    }
                }
                t.deurl = function(t) {
                    var e = String(t).match(c);
                    return e ? e[2] : t
                }, eve.on("snap.util.attr.mask", (function(t) {
                    if (t instanceof e || t instanceof i) {
                        if (eve.stop(), t instanceof i && 1 == t.node.childNodes.length && (t = t.node.firstChild, l(this).appendChild(t), t = s(t)), "mask" == t.type) var n = t;
                        else(n = o("mask", l(this))).node.appendChild(t.node);
                        !n.node.id && h(n.node, {
                            id: n.id
                        }), h(this.node, {
                            mask: f(n.id)
                        })
                    }
                })), a = function(t) {
                    if (t instanceof e || t instanceof i) {
                        eve.stop();
                        for (var n, r = t.node; r;) {
                            if ("clipPath" === r.nodeName) {
                                n = new e(r);
                                break
                            }
                            if ("svg" === r.nodeName) {
                                n = void 0;
                                break
                            }
                            r = r.parentNode
                        }
                        n || ((n = o("clipPath", l(this))).node.appendChild(t.node), !n.node.id && h(n.node, {
                            id: n.id
                        })), h(this.node, {
                            "clip-path": f(n.node.id || n.id)
                        })
                    }
                }, eve.on("snap.util.attr.clip", a), eve.on("snap.util.attr.clip-path", a), eve.on("snap.util.attr.clipPath", a), eve.on("snap.util.attr.fill", g("fill")), eve.on("snap.util.attr.stroke", g("stroke"));
                var v = /^([lr])(?:\(([^)]*)\))?(.*)$/i;

                function m(t) {
                    eve.stop(), t == +t && (t += "px"), this.node.style.fontSize = t
                }

                function y(t) {
                    for (var e = [], n = t.childNodes, r = 0, i = n.length; r < i; r++) {
                        var a = n[r];
                        3 == a.nodeType && e.push(a.nodeValue), "tspan" == a.tagName && (1 == a.childNodes.length && 3 == a.firstChild.nodeType ? e.push(a.firstChild.nodeValue) : e.push(y(a)))
                    }
                    return e
                }

                function x() {
                    return eve.stop(), this.node.style.fontSize
                }
                eve.on("snap.util.grad.parse", (function(t) {
                        var e = (t = d(t)).match(v);
                        if (!e) return null;
                        var n = e[1],
                            r = e[2],
                            i = e[3];
                        1 == (r = r.split(/\s*,\s*/).map((function(t) {
                            return +t == t ? +t : t
                        }))).length && 0 == r[0] && (r = []);
                        var a = (i = (i = i.split("-")).map((function(t) {
                                var e = {
                                    color: (t = t.split(":"))[0]
                                };
                                return t[1] && (e.offset = parseFloat(t[1])), e
                            }))).length,
                            o = 0,
                            s = 0;

                        function u(t, e) {
                            for (var n = (e - o) / (t - s), r = s; r < t; r++) i[r].offset = +(+o + n * (r - s)).toFixed(2);
                            s = t, o = e
                        }
                        a--;
                        for (var l = 0; l < a; l++) "offset" in i[l] && u(l, i[l].offset);
                        return i[a].offset = i[a].offset || 100, u(a, i[a].offset), {
                            type: n,
                            params: r,
                            stops: i
                        }
                    })), eve.on("snap.util.attr.d", (function(e) {
                        eve.stop(), u(e, "array") && u(e[0], "array") && (e = t.path.toString.call(e)), (e = d(e)).match(/[ruo]/i) && (e = t.path.toAbsolute(e)), h(this.node, {
                            d: e
                        })
                    }))(-1), eve.on("snap.util.attr.#text", (function(t) {
                        eve.stop(), t = d(t);
                        for (var e = r.doc.createTextNode(t); this.node.firstChild;) this.node.removeChild(this.node.firstChild);
                        this.node.appendChild(e)
                    }))(-1), eve.on("snap.util.attr.path", (function(t) {
                        eve.stop(), this.attr({
                            d: t
                        })
                    }))(-1), eve.on("snap.util.attr.class", (function(t) {
                        eve.stop(), this.node.className.baseVal = t
                    }))(-1), eve.on("snap.util.attr.viewBox", (function(t) {
                        var e;
                        e = u(t, "object") && "x" in t ? [t.x, t.y, t.width, t.height].join(" ") : u(t, "array") ? t.join(" ") : t, h(this.node, {
                            viewBox: e
                        }), eve.stop()
                    }))(-1), eve.on("snap.util.attr.transform", (function(t) {
                        this.transform(t), eve.stop()
                    }))(-1), eve.on("snap.util.attr.r", (function(t) {
                        "rect" == this.type && (eve.stop(), h(this.node, {
                            rx: t,
                            ry: t
                        }))
                    }))(-1), eve.on("snap.util.attr.textpath", (function(t) {
                        if (eve.stop(), "text" == this.type) {
                            var n, r, i;
                            if (!t && this.textPath) {
                                for (r = this.textPath; r.node.firstChild;) this.node.appendChild(r.node.firstChild);
                                return r.remove(), void delete this.textPath
                            }
                            if (u(t, "string")) {
                                var a = l(this),
                                    o = s(a.parentNode).path(t);
                                a.appendChild(o.node), n = o.id, o.attr({
                                    id: n
                                })
                            } else(t = s(t)) instanceof e && ((n = t.attr("id")) || (n = t.id, t.attr({
                                id: n
                            })));
                            if (n)
                                if (r = this.textPath, i = this.node, r) r.attr({
                                    "xlink:href": "#" + n
                                });
                                else {
                                    for (r = h("textPath", {
                                            "xlink:href": "#" + n
                                        }); i.firstChild;) r.appendChild(i.firstChild);
                                    i.appendChild(r), this.textPath = s(r)
                                }
                        }
                    }))(-1), eve.on("snap.util.attr.text", (function(t) {
                        if ("text" == this.type) {
                            for (var e = this.node, n = function(t) {
                                    var e = h("tspan");
                                    if (u(t, "array"))
                                        for (var i = 0; i < t.length; i++) e.appendChild(n(t[i]));
                                    else e.appendChild(r.doc.createTextNode(t));
                                    return e.normalize && e.normalize(), e
                                }; e.firstChild;) e.removeChild(e.firstChild);
                            for (var i = n(t); i.firstChild;) e.appendChild(i.firstChild)
                        }
                        eve.stop()
                    }))(-1), eve.on("snap.util.attr.fontSize", m)(-1), eve.on("snap.util.attr.font-size", m)(-1), eve.on("snap.util.getattr.transform", (function() {
                        return eve.stop(), this.transform()
                    }))(-1), eve.on("snap.util.getattr.textpath", (function() {
                        return eve.stop(), this.textPath
                    }))(-1),
                    function() {
                        function e(e) {
                            return function() {
                                eve.stop();
                                var n = r.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + e);
                                return "none" == n ? n : t(r.doc.getElementById(n.match(c)[1]))
                            }
                        }

                        function n(t) {
                            return function(e) {
                                eve.stop();
                                var n = "marker" + t.charAt(0).toUpperCase() + t.substring(1);
                                if ("" != e && e) {
                                    if ("marker" == e.type) {
                                        var r = e.node.id;
                                        return r || h(e.node, {
                                            id: e.id
                                        }), void(this.node.style[n] = f(r))
                                    }
                                } else this.node.style[n] = "none"
                            }
                        }
                        eve.on("snap.util.getattr.marker-end", e("end"))(-1), eve.on("snap.util.getattr.markerEnd", e("end"))(-1), eve.on("snap.util.getattr.marker-start", e("start"))(-1), eve.on("snap.util.getattr.markerStart", e("start"))(-1), eve.on("snap.util.getattr.marker-mid", e("mid"))(-1), eve.on("snap.util.getattr.markerMid", e("mid"))(-1), eve.on("snap.util.attr.marker-end", n("end"))(-1), eve.on("snap.util.attr.markerEnd", n("end"))(-1), eve.on("snap.util.attr.marker-start", n("start"))(-1), eve.on("snap.util.attr.markerStart", n("start"))(-1), eve.on("snap.util.attr.marker-mid", n("mid"))(-1), eve.on("snap.util.attr.markerMid", n("mid"))(-1)
                    }(), eve.on("snap.util.getattr.r", (function() {
                        if ("rect" == this.type && h(this.node, "rx") == h(this.node, "ry")) return eve.stop(), h(this.node, "rx")
                    }))(-1), eve.on("snap.util.getattr.text", (function() {
                        if ("text" == this.type || "tspan" == this.type) {
                            eve.stop();
                            var t = y(this.node);
                            return 1 == t.length ? t[0] : t
                        }
                    }))(-1), eve.on("snap.util.getattr.#text", (function() {
                        return this.node.textContent
                    }))(-1), eve.on("snap.util.getattr.fill", (function(e) {
                        if (!e) {
                            eve.stop();
                            var n = eve("snap.util.getattr.fill", this, !0).firstDefined();
                            return t(t.deurl(n)) || n
                        }
                    }))(-1), eve.on("snap.util.getattr.stroke", (function(e) {
                        if (!e) {
                            eve.stop();
                            var n = eve("snap.util.getattr.stroke", this, !0).firstDefined();
                            return t(t.deurl(n)) || n
                        }
                    }))(-1), eve.on("snap.util.getattr.viewBox", (function() {
                        eve.stop();
                        var e = h(this.node, "viewBox");
                        return e ? (e = e.split(p), t._.box(+e[0], +e[1], +e[2], +e[3])) : void 0
                    }))(-1), eve.on("snap.util.getattr.points", (function() {
                        var t = h(this.node, "points");
                        return eve.stop(), t ? t.split(p) : void 0
                    }))(-1), eve.on("snap.util.getattr.path", (function() {
                        var t = h(this.node, "d");
                        return eve.stop(), t
                    }))(-1), eve.on("snap.util.getattr.class", (function() {
                        return this.node.className.baseVal
                    }))(-1), eve.on("snap.util.getattr.fontSize", x)(-1), eve.on("snap.util.getattr.font-size", x)(-1)
            })), i.plugin((function(t, e, n, r, i) {
                var a = /\S+/g,
                    o = String,
                    s = e.prototype;
                s.addClass = function(t) {
                    var e, n, r, i = o(t || "").match(a) || [],
                        s = this.node,
                        u = s.className.baseVal,
                        l = u.match(a) || [];
                    if (i.length) {
                        for (e = 0; n = i[e++];) ~l.indexOf(n) || l.push(n);
                        u != (r = l.join(" ")) && (s.className.baseVal = r)
                    }
                    return this
                }, s.removeClass = function(t) {
                    var e, n, r, i, s = o(t || "").match(a) || [],
                        u = this.node,
                        l = u.className.baseVal,
                        c = l.match(a) || [];
                    if (c.length) {
                        for (e = 0; r = s[e++];) ~(n = c.indexOf(r)) && c.splice(n, 1);
                        l != (i = c.join(" ")) && (u.className.baseVal = i)
                    }
                    return this
                }, s.hasClass = function(t) {
                    return !!~(this.node.className.baseVal.match(a) || []).indexOf(t)
                }, s.toggleClass = function(t, e) {
                    if (null != e) return e ? this.addClass(t) : this.removeClass(t);
                    var n, r, i, o, s = (t || "").match(a) || [],
                        u = this.node,
                        l = u.className.baseVal,
                        c = l.match(a) || [];
                    for (n = 0; i = s[n++];) ~(r = c.indexOf(i)) ? c.splice(r, 1) : c.push(i);
                    return l != (o = c.join(" ")) && (u.className.baseVal = o), this
                }
            })), i.plugin((function(t, e, n, r, i) {
                var a = {
                        "+": function(t, e) {
                            return t + e
                        },
                        "-": function(t, e) {
                            return t - e
                        },
                        "/": function(t, e) {
                            return t / e
                        },
                        "*": function(t, e) {
                            return t * e
                        }
                    },
                    o = String,
                    s = /[a-z]+$/i,
                    u = /^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;

                function l(t) {
                    return t
                }

                function c(t) {
                    return function(e) {
                        return +e.toFixed(3) + t
                    }
                }
                eve.on("snap.util.attr", (function(t) {
                    var e = o(t).match(u);
                    if (e) {
                        var n = eve.nt(),
                            r = n.substring(n.lastIndexOf(".") + 1),
                            i = this.attr(r),
                            l = {};
                        eve.stop();
                        var c = e[3] || "",
                            h = i.match(s),
                            f = a[e[1]];
                        if (h && h == c ? t = f(parseFloat(i), +e[2]) : (i = this.asPX(r), t = f(this.asPX(r), this.asPX(r, e[2] + c))), isNaN(i) || isNaN(t)) return;
                        l[r] = t, this.attr(l)
                    }
                }))(-10), eve.on("snap.util.equal", (function(t, e) {
                    var n = o(this.attr(t) || ""),
                        r = o(e).match(u);
                    if (r) {
                        eve.stop();
                        var i = r[3] || "",
                            h = n.match(s),
                            f = a[r[1]];
                        return h && h == i ? {
                            from: parseFloat(n),
                            to: f(parseFloat(n), +r[2]),
                            f: c(h)
                        } : {
                            from: n = this.asPX(t),
                            to: f(n, this.asPX(t, r[2] + i)),
                            f: l
                        }
                    }
                }))(-10)
            })), i.plugin((function(t, e, n, r, i) {
                var a = n.prototype,
                    o = t.is;
                a.rect = function(t, e, n, r, i, a) {
                    var s;
                    return null == a && (a = i), o(t, "object") && "[object Object]" == t ? s = t : null != t && (s = {
                        x: t,
                        y: e,
                        width: n,
                        height: r
                    }, null != i && (s.rx = i, s.ry = a)), this.el("rect", s)
                }, a.circle = function(t, e, n) {
                    var r;
                    return o(t, "object") && "[object Object]" == t ? r = t : null != t && (r = {
                        cx: t,
                        cy: e,
                        r: n
                    }), this.el("circle", r)
                };
                var s = function() {
                    function t() {
                        this.parentNode.removeChild(this)
                    }
                    return function(e, n) {
                        var i = r.doc.createElement("img"),
                            a = r.doc.body;
                        i.style.cssText = "position:absolute;left:-9999em;top:-9999em", i.onload = function() {
                            n.call(i), i.onload = i.onerror = null, a.removeChild(i)
                        }, i.onerror = t, a.appendChild(i), i.src = e
                    }
                }();
                a.image = function(e, n, r, i, a) {
                        var u = this.el("image");
                        if (o(e, "object") && "src" in e) u.attr(e);
                        else if (null != e) {
                            var l = {
                                "xlink:href": e,
                                preserveAspectRatio: "none"
                            };
                            null != n && null != r && (l.x = n, l.y = r), null != i && null != a ? (l.width = i, l.height = a) : s(e, (function() {
                                t._.$(u.node, {
                                    width: this.offsetWidth,
                                    height: this.offsetHeight
                                })
                            })), t._.$(u.node, l)
                        }
                        return u
                    }, a.ellipse = function(t, e, n, r) {
                        var i;
                        return o(t, "object") && "[object Object]" == t ? i = t : null != t && (i = {
                            cx: t,
                            cy: e,
                            rx: n,
                            ry: r
                        }), this.el("ellipse", i)
                    }, a.path = function(t) {
                        var e;
                        return o(t, "object") && !o(t, "array") ? e = t : t && (e = {
                            d: t
                        }), this.el("path", e)
                    }, a.group = a.g = function(t) {
                        var e = this.el("g");
                        return 1 == arguments.length && t && !t.type ? e.attr(t) : arguments.length && e.add(Array.prototype.slice.call(arguments, 0)), e
                    }, a.svg = function(t, e, n, r, i, a, s, u) {
                        var l = {};
                        return o(t, "object") && null == e ? l = t : (null != t && (l.x = t), null != e && (l.y = e), null != n && (l.width = n), null != r && (l.height = r), null != i && null != a && null != s && null != u && (l.viewBox = [i, a, s, u])), this.el("svg", l)
                    }, a.mask = function(t) {
                        var e = this.el("mask");
                        return 1 == arguments.length && t && !t.type ? e.attr(t) : arguments.length && e.add(Array.prototype.slice.call(arguments, 0)), e
                    }, a.ptrn = function(t, e, n, r, i, a, s, u) {
                        if (o(t, "object")) var l = t;
                        else l = {
                            patternUnits: "userSpaceOnUse"
                        }, t && (l.x = t), e && (l.y = e), null != n && (l.width = n), null != r && (l.height = r), l.viewBox = null != i && null != a && null != s && null != u ? [i, a, s, u] : [t || 0, e || 0, n || 0, r || 0];
                        return this.el("pattern", l)
                    }, a.use = function(n) {
                        return null != n ? (n instanceof e && (n.attr("id") || n.attr({
                            id: t._.id(n)
                        }), n = n.attr("id")), "#" == String(n).charAt() && (n = n.substring(1)), this.el("use", {
                            "xlink:href": "#" + n
                        })) : e.prototype.use.call(this)
                    }, a.symbol = function(t, e, n, r) {
                        var i = {};
                        return null != t && null != e && null != n && null != r && (i.viewBox = [t, e, n, r]), this.el("symbol", i)
                    }, a.text = function(t, e, n) {
                        var r = {};
                        return o(t, "object") ? r = t : null != t && (r = {
                            x: t,
                            y: e,
                            text: n || ""
                        }), this.el("text", r)
                    }, a.line = function(t, e, n, r) {
                        var i = {};
                        return o(t, "object") ? i = t : null != t && (i = {
                            x1: t,
                            x2: n,
                            y1: e,
                            y2: r
                        }), this.el("line", i)
                    }, a.polyline = function(t) {
                        arguments.length > 1 && (t = Array.prototype.slice.call(arguments, 0));
                        var e = {};
                        return o(t, "object") && !o(t, "array") ? e = t : null != t && (e = {
                            points: t
                        }), this.el("polyline", e)
                    }, a.polygon = function(t) {
                        arguments.length > 1 && (t = Array.prototype.slice.call(arguments, 0));
                        var e = {};
                        return o(t, "object") && !o(t, "array") ? e = t : null != t && (e = {
                            points: t
                        }), this.el("polygon", e)
                    },
                    function() {
                        var e = t._.$;

                        function n() {
                            return this.selectAll("stop")
                        }

                        function r(n, r) {
                            var i = e("stop"),
                                a = {
                                    offset: +r + "%"
                                };
                            n = t.color(n), a["stop-color"] = n.hex, n.opacity < 1 && (a["stop-opacity"] = n.opacity), e(i, a);
                            for (var o, s = this.stops(), u = 0; u < s.length; u++) {
                                if (parseFloat(s[u].attr("offset")) > r) {
                                    this.node.insertBefore(i, s[u].node), o = !0;
                                    break
                                }
                            }
                            return o || this.node.appendChild(i), this
                        }

                        function i() {
                            if ("linearGradient" == this.type) {
                                var n = e(this.node, "x1") || 0,
                                    r = e(this.node, "x2") || 1,
                                    i = e(this.node, "y1") || 0,
                                    a = e(this.node, "y2") || 0;
                                return t._.box(n, i, math.abs(r - n), math.abs(a - i))
                            }
                            var o = this.node.cx || .5,
                                s = this.node.cy || .5,
                                u = this.node.r || 0;
                            return t._.box(o - u, s - u, 2 * u, 2 * u)
                        }

                        function o(e) {
                            var n = e,
                                r = this.stops();
                            if ("string" == typeof e && (n = eve("snap.util.grad.parse", null, "l(0,0,0,1)" + e).firstDefined().stops), t.is(n, "array")) {
                                for (var i = 0; i < r.length; i++)
                                    if (n[i]) {
                                        var a = t.color(n[i].color),
                                            o = {
                                                offset: n[i].offset + "%"
                                            };
                                        o["stop-color"] = a.hex, a.opacity < 1 && (o["stop-opacity"] = a.opacity), r[i].attr(o)
                                    } else r[i].remove();
                                for (i = r.length; i < n.length; i++) this.addStop(n[i].color, n[i].offset);
                                return this
                            }
                        }

                        function s(a, s, u, l, c) {
                            var h = t._.make("linearGradient", a);
                            return h.stops = n, h.addStop = r, h.getBBox = i, h.setStops = o, null != s && e(h.node, {
                                x1: s,
                                y1: u,
                                x2: l,
                                y2: c
                            }), h
                        }

                        function u(a, o, s, u, l, c) {
                            var h = t._.make("radialGradient", a);
                            return h.stops = n, h.addStop = r, h.getBBox = i, null != o && e(h.node, {
                                cx: o,
                                cy: s,
                                r: u
                            }), null != l && null != c && e(h.node, {
                                fx: l,
                                fy: c
                            }), h
                        }
                        a.gradient = function(t) {
                            return function(t, n) {
                                var r, i = eve("snap.util.grad.parse", null, n).firstDefined();
                                if (!i) return null;
                                i.params.unshift(t), r = "l" == i.type.toLowerCase() ? s.apply(0, i.params) : u.apply(0, i.params), i.type != i.type.toLowerCase() && e(r.node, {
                                    gradientUnits: "userSpaceOnUse"
                                });
                                for (var a = i.stops, o = a.length, l = 0; l < o; l++) {
                                    var c = a[l];
                                    r.addStop(c.color, c.offset)
                                }
                                return r
                            }(this.defs, t)
                        }, a.gradientLinear = function(t, e, n, r) {
                            return s(this.defs, t, e, n, r)
                        }, a.gradientRadial = function(t, e, n, r, i) {
                            return u(this.defs, t, e, n, r, i)
                        }, a.toString = function() {
                            var e, n = this.node.ownerDocument,
                                r = n.createDocumentFragment(),
                                i = n.createElement("div"),
                                a = this.node.cloneNode(!0);
                            return r.appendChild(i), i.appendChild(a), t._.$(a, {
                                xmlns: "http://www.w3.org/2000/svg"
                            }), e = i.innerHTML, r.removeChild(r.firstChild), e
                        }, a.toDataURL = function() {
                            if (window && window.btoa) return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(this)))
                        }, a.clear = function() {
                            for (var t, e = this.node.firstChild; e;) t = e.nextSibling, "defs" != e.tagName ? e.parentNode.removeChild(e) : a.clear.call({
                                node: e
                            }), e = t
                        }
                    }()
            })), i.plugin((function(t, e, n, r) {
                var i = e.prototype,
                    a = t.is,
                    o = t._.clone,
                    s = /,?([a-z]),?/gi,
                    u = parseFloat,
                    l = Math,
                    c = l.PI,
                    h = l.min,
                    f = l.max,
                    d = l.pow,
                    p = l.abs;

                function g(t) {
                    var e = g.ps = g.ps || {};
                    return e[t] ? e[t].sleep = 100 : e[t] = {
                        sleep: 100
                    }, setTimeout((function() {
                        for (var n in e) e.hasOwnProperty(n) && n != t && (e[n].sleep--, !e[n].sleep && delete e[n])
                    })), e[t]
                }

                function v(t, e, n, r) {
                    return null == t && (t = e = n = r = 0), null == e && (e = t.y, n = t.width, r = t.height, t = t.x), {
                        x: t,
                        y: e,
                        width: n,
                        w: n,
                        height: r,
                        h: r,
                        x2: t + n,
                        y2: e + r,
                        cx: t + n / 2,
                        cy: e + r / 2,
                        r1: l.min(n, r) / 2,
                        r2: l.max(n, r) / 2,
                        r0: l.sqrt(n * n + r * r) / 2,
                        path: j(t, e, n, r),
                        vb: [t, e, n, r].join(" ")
                    }
                }

                function m() {
                    return this.join(",").replace(s, "$1")
                }

                function y(t) {
                    var e = o(t);
                    return e.toString = m, e
                }

                function x(t, e, n, r, i, a, o, s, u) {
                    return null == u ? D(t, e, n, r, i, a, o, s) : B(t, e, n, r, i, a, o, s, function(t, e, n, r, i, a, o, s, u) {
                        if (u < 0 || D(t, e, n, r, i, a, o, s) < u) return;
                        var l, c = 1,
                            h = c / 2,
                            f = c - h,
                            d = .01;
                        l = D(t, e, n, r, i, a, o, s, f);
                        for (; p(l - u) > d;) l = D(t, e, n, r, i, a, o, s, f += (l < u ? 1 : -1) * (h /= 2));
                        return f
                    }(t, e, n, r, i, a, o, s, u))
                }

                function b(n, r) {
                    function i(t) {
                        return +(+t).toFixed(3)
                    }
                    return t._.cacher((function(t, a, o) {
                        t instanceof e && (t = t.attr("d"));
                        for (var s, u, l, c, h, f = "", d = {}, p = 0, g = 0, v = (t = U(t)).length; g < v; g++) {
                            if ("M" == (l = t[g])[0]) s = +l[1], u = +l[2];
                            else {
                                if (p + (c = x(s, u, l[1], l[2], l[3], l[4], l[5], l[6])) > a) {
                                    if (r && !d.start) {
                                        if (f += ["C" + i((h = x(s, u, l[1], l[2], l[3], l[4], l[5], l[6], a - p)).start.x), i(h.start.y), i(h.m.x), i(h.m.y), i(h.x), i(h.y)], o) return f;
                                        d.start = f, f = ["M" + i(h.x), i(h.y) + "C" + i(h.n.x), i(h.n.y), i(h.end.x), i(h.end.y), i(l[5]), i(l[6])].join(), p += c, s = +l[5], u = +l[6];
                                        continue
                                    }
                                    if (!n && !r) return h = x(s, u, l[1], l[2], l[3], l[4], l[5], l[6], a - p)
                                }
                                p += c, s = +l[5], u = +l[6]
                            }
                            f += l.shift() + l
                        }
                        return d.end = f, h = n ? p : r ? d : B(s, u, l[0], l[1], l[2], l[3], l[4], l[5], 1)
                    }), null, t._.clone)
                }
                var F = b(1),
                    C = b(),
                    w = b(0, 1);

                function B(t, e, n, r, i, a, o, s, u) {
                    var h = 1 - u,
                        f = d(h, 3),
                        p = d(h, 2),
                        g = u * u,
                        v = g * u,
                        m = t + 2 * u * (n - t) + g * (i - 2 * n + t),
                        y = e + 2 * u * (r - e) + g * (a - 2 * r + e),
                        x = n + 2 * u * (i - n) + g * (o - 2 * i + n),
                        b = r + 2 * u * (a - r) + g * (s - 2 * a + r);
                    return {
                        x: f * t + 3 * p * u * n + 3 * h * u * u * i + v * o,
                        y: f * e + 3 * p * u * r + 3 * h * u * u * a + v * s,
                        m: {
                            x: m,
                            y: y
                        },
                        n: {
                            x: x,
                            y: b
                        },
                        start: {
                            x: h * t + u * n,
                            y: h * e + u * r
                        },
                        end: {
                            x: h * i + u * o,
                            y: h * a + u * s
                        },
                        alpha: 90 - 180 * l.atan2(m - x, y - b) / c
                    }
                }

                function A(e, n, r, i, a, o, s, u) {
                    t.is(e, "array") || (e = [e, n, r, i, a, o, s, u]);
                    var l = z.apply(null, e);
                    return v(l.min.x, l.min.y, l.max.x - l.min.x, l.max.y - l.min.y)
                }

                function E(t, e, n) {
                    return e >= t.x && e <= t.x + t.width && n >= t.y && n <= t.y + t.height
                }

                function S(t, e) {
                    return t = v(t), E(e = v(e), t.x, t.y) || E(e, t.x2, t.y) || E(e, t.x, t.y2) || E(e, t.x2, t.y2) || E(t, e.x, e.y) || E(t, e.x2, e.y) || E(t, e.x, e.y2) || E(t, e.x2, e.y2) || (t.x < e.x2 && t.x > e.x || e.x < t.x2 && e.x > t.x) && (t.y < e.y2 && t.y > e.y || e.y < t.y2 && e.y > t.y)
                }

                function k(t, e, n, r, i) {
                    return t * (t * (-3 * e + 9 * n - 9 * r + 3 * i) + 6 * e - 12 * n + 6 * r) - 3 * e + 3 * n
                }

                function D(t, e, n, r, i, a, o, s, u) {
                    null == u && (u = 1);
                    for (var c = (u = u > 1 ? 1 : u < 0 ? 0 : u) / 2, h = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], f = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], d = 0, p = 0; p < 12; p++) {
                        var g = c * h[p] + c,
                            v = k(g, t, n, i, o),
                            m = k(g, e, r, a, s),
                            y = v * v + m * m;
                        d += f[p] * l.sqrt(y)
                    }
                    return c * d
                }

                function _(t, e, n, r, i, a, o, s) {
                    if (!(f(t, n) < h(i, o) || h(t, n) > f(i, o) || f(e, r) < h(a, s) || h(e, r) > f(a, s))) {
                        var u = (t - n) * (a - s) - (e - r) * (i - o);
                        if (u) {
                            var l = ((t * r - e * n) * (i - o) - (t - n) * (i * s - a * o)) / u,
                                c = ((t * r - e * n) * (a - s) - (e - r) * (i * s - a * o)) / u,
                                d = +l.toFixed(2),
                                p = +c.toFixed(2);
                            if (!(d < +h(t, n).toFixed(2) || d > +f(t, n).toFixed(2) || d < +h(i, o).toFixed(2) || d > +f(i, o).toFixed(2) || p < +h(e, r).toFixed(2) || p > +f(e, r).toFixed(2) || p < +h(a, s).toFixed(2) || p > +f(a, s).toFixed(2))) return {
                                x: l,
                                y: c
                            }
                        }
                    }
                }

                function T(t, e, n) {
                    if (!S(A(t), A(e))) return n ? 0 : [];
                    for (var r = ~~(D.apply(0, t) / 8), i = ~~(D.apply(0, e) / 8), a = [], o = [], s = {}, u = n ? 0 : [], l = 0; l < r + 1; l++) {
                        var c = B.apply(0, t.concat(l / r));
                        a.push({
                            x: c.x,
                            y: c.y,
                            t: l / r
                        })
                    }
                    for (l = 0; l < i + 1; l++) c = B.apply(0, e.concat(l / i)), o.push({
                        x: c.x,
                        y: c.y,
                        t: l / i
                    });
                    for (l = 0; l < r; l++)
                        for (var h = 0; h < i; h++) {
                            var f = a[l],
                                d = a[l + 1],
                                g = o[h],
                                v = o[h + 1],
                                m = p(d.x - f.x) < .001 ? "y" : "x",
                                y = p(v.x - g.x) < .001 ? "y" : "x",
                                x = _(f.x, f.y, d.x, d.y, g.x, g.y, v.x, v.y);
                            if (x) {
                                if (s[x.x.toFixed(4)] == x.y.toFixed(4)) continue;
                                s[x.x.toFixed(4)] = x.y.toFixed(4);
                                var b = f.t + p((x[m] - f[m]) / (d[m] - f[m])) * (d.t - f.t),
                                    F = g.t + p((x[y] - g[y]) / (v[y] - g[y])) * (v.t - g.t);
                                b >= 0 && b <= 1 && F >= 0 && F <= 1 && (n ? u++ : u.push({
                                    x: x.x,
                                    y: x.y,
                                    t1: b,
                                    t2: F
                                }))
                            }
                        }
                    return u
                }

                function M(t, e, n) {
                    t = U(t), e = U(e);
                    for (var r, i, a, o, s, u, l, c, h, f, d = n ? 0 : [], p = 0, g = t.length; p < g; p++) {
                        var v = t[p];
                        if ("M" == v[0]) r = s = v[1], i = u = v[2];
                        else {
                            "C" == v[0] ? (h = [r, i].concat(v.slice(1)), r = h[6], i = h[7]) : (h = [r, i, r, i, s, u, s, u], r = s, i = u);
                            for (var m = 0, y = e.length; m < y; m++) {
                                var x = e[m];
                                if ("M" == x[0]) a = l = x[1], o = c = x[2];
                                else {
                                    "C" == x[0] ? (f = [a, o].concat(x.slice(1)), a = f[6], o = f[7]) : (f = [a, o, a, o, l, c, l, c], a = l, o = c);
                                    var b = T(h, f, n);
                                    if (n) d += b;
                                    else {
                                        for (var F = 0, C = b.length; F < C; F++) b[F].segment1 = p, b[F].segment2 = m, b[F].bez1 = h, b[F].bez2 = f;
                                        d = d.concat(b)
                                    }
                                }
                            }
                        }
                    }
                    return d
                }

                function N(t) {
                    var e = g(t);
                    if (e.bbox) return o(e.bbox);
                    if (!t) return v();
                    for (var n, r = 0, i = 0, a = [], s = [], u = 0, l = (t = U(t)).length; u < l; u++)
                        if ("M" == (n = t[u])[0]) r = n[1], i = n[2], a.push(r), s.push(i);
                        else {
                            var c = z(r, i, n[1], n[2], n[3], n[4], n[5], n[6]);
                            a = a.concat(c.min.x, c.max.x), s = s.concat(c.min.y, c.max.y), r = n[5], i = n[6]
                        }
                    var d = h.apply(0, a),
                        p = h.apply(0, s),
                        m = v(d, p, f.apply(0, a) - d, f.apply(0, s) - p);
                    return e.bbox = o(m), m
                }

                function j(t, e, n, r, i) {
                    if (i) return [
                        ["M", +t + +i, e],
                        ["l", n - 2 * i, 0],
                        ["a", i, i, 0, 0, 1, i, i],
                        ["l", 0, r - 2 * i],
                        ["a", i, i, 0, 0, 1, -i, i],
                        ["l", 2 * i - n, 0],
                        ["a", i, i, 0, 0, 1, -i, -i],
                        ["l", 0, 2 * i - r],
                        ["a", i, i, 0, 0, 1, i, -i],
                        ["z"]
                    ];
                    var a = [
                        ["M", t, e],
                        ["l", n, 0],
                        ["l", 0, r],
                        ["l", -n, 0],
                        ["z"]
                    ];
                    return a.toString = m, a
                }

                function P(t, e, n, r, i) {
                    if (null == i && null == r && (r = n), t = +t, e = +e, n = +n, r = +r, null != i) var a = Math.PI / 180,
                        o = t + n * Math.cos(-r * a),
                        s = t + n * Math.cos(-i * a),
                        u = [
                            ["M", o, e + n * Math.sin(-r * a)],
                            ["A", n, n, 0, +(i - r > 180), 0, s, e + n * Math.sin(-i * a)]
                        ];
                    else u = [
                        ["M", t, e],
                        ["m", 0, -r],
                        ["a", n, r, 0, 1, 1, 0, 2 * r],
                        ["a", n, r, 0, 1, 1, 0, -2 * r],
                        ["z"]
                    ];
                    return u.toString = m, u
                }
                var L = t._unit2px,
                    q = {
                        path: function(t) {
                            return t.attr("path")
                        },
                        circle: function(t) {
                            var e = L(t);
                            return P(e.cx, e.cy, e.r)
                        },
                        ellipse: function(t) {
                            var e = L(t);
                            return P(e.cx || 0, e.cy || 0, e.rx, e.ry)
                        },
                        rect: function(t) {
                            var e = L(t);
                            return j(e.x || 0, e.y || 0, e.width, e.height, e.rx, e.ry)
                        },
                        image: function(t) {
                            var e = L(t);
                            return j(e.x || 0, e.y || 0, e.width, e.height)
                        },
                        line: function(t) {
                            return "M" + [t.attr("x1") || 0, t.attr("y1") || 0, t.attr("x2"), t.attr("y2")]
                        },
                        polyline: function(t) {
                            return "M" + t.attr("points")
                        },
                        polygon: function(t) {
                            return "M" + t.attr("points") + "z"
                        },
                        deflt: function(t) {
                            var e = t.node.getBBox();
                            return j(e.x, e.y, e.width, e.height)
                        }
                    };

                function V(e) {
                    var n = g(e);
                    if (n.abs) return y(n.abs);
                    if (a(e, "array") && a(e && e[0], "array") || (e = t.parsePathString(e)), !e || !e.length) return [
                        ["M", 0, 0]
                    ];
                    var r, i = [],
                        o = 0,
                        s = 0,
                        u = 0,
                        l = 0,
                        c = 0;
                    "M" == e[0][0] && (u = o = +e[0][1], l = s = +e[0][2], c++, i[0] = ["M", o, s]);
                    for (var h, f, d = 3 == e.length && "M" == e[0][0] && "R" == e[1][0].toUpperCase() && "Z" == e[2][0].toUpperCase(), p = c, v = e.length; p < v; p++) {
                        if (i.push(h = []), (r = (f = e[p])[0]) != r.toUpperCase()) switch (h[0] = r.toUpperCase(), h[0]) {
                                case "A":
                                    h[1] = f[1], h[2] = f[2], h[3] = f[3], h[4] = f[4], h[5] = f[5], h[6] = +f[6] + o, h[7] = +f[7] + s;
                                    break;
                                case "V":
                                    h[1] = +f[1] + s;
                                    break;
                                case "H":
                                    h[1] = +f[1] + o;
                                    break;
                                case "R":
                                    for (var x = [o, s].concat(f.slice(1)), b = 2, F = x.length; b < F; b++) x[b] = +x[b] + o, x[++b] = +x[b] + s;
                                    i.pop(), i = i.concat(X(x, d));
                                    break;
                                case "O":
                                    i.pop(), (x = P(o, s, f[1], f[2])).push(x[0]), i = i.concat(x);
                                    break;
                                case "U":
                                    i.pop(), i = i.concat(P(o, s, f[1], f[2], f[3])), h = ["U"].concat(i[i.length - 1].slice(-2));
                                    break;
                                case "M":
                                    u = +f[1] + o, l = +f[2] + s;
                                default:
                                    for (b = 1, F = f.length; b < F; b++) h[b] = +f[b] + (b % 2 ? o : s)
                            } else if ("R" == r) x = [o, s].concat(f.slice(1)), i.pop(), i = i.concat(X(x, d)), h = ["R"].concat(f.slice(-2));
                            else if ("O" == r) i.pop(), (x = P(o, s, f[1], f[2])).push(x[0]), i = i.concat(x);
                        else if ("U" == r) i.pop(), i = i.concat(P(o, s, f[1], f[2], f[3])), h = ["U"].concat(i[i.length - 1].slice(-2));
                        else
                            for (var C = 0, w = f.length; C < w; C++) h[C] = f[C];
                        if ("O" != (r = r.toUpperCase())) switch (h[0]) {
                            case "Z":
                                o = +u, s = +l;
                                break;
                            case "H":
                                o = h[1];
                                break;
                            case "V":
                                s = h[1];
                                break;
                            case "M":
                                u = h[h.length - 2], l = h[h.length - 1];
                            default:
                                o = h[h.length - 2], s = h[h.length - 1]
                        }
                    }
                    return i.toString = m, n.abs = y(i), i
                }

                function O(t, e, n, r) {
                    return [t, e, n, r, n, r]
                }

                function G(t, e, n, r, i, a) {
                    var o = 1 / 3,
                        s = 2 / 3;
                    return [o * t + s * n, o * e + s * r, o * i + s * n, o * a + s * r, i, a]
                }

                function R(e, n, r, i, a, o, s, u, h, f) {
                    var d, g = 120 * c / 180,
                        v = c / 180 * (+a || 0),
                        m = [],
                        y = t._.cacher((function(t, e, n) {
                            return {
                                x: t * l.cos(n) - e * l.sin(n),
                                y: t * l.sin(n) + e * l.cos(n)
                            }
                        }));
                    if (!r || !i) return [e, n, u, h, u, h];
                    if (f) S = f[0], k = f[1], A = f[2], E = f[3];
                    else {
                        e = (d = y(e, n, -v)).x, n = d.y, u = (d = y(u, h, -v)).x, h = d.y;
                        l.cos(c / 180 * a), l.sin(c / 180 * a);
                        var x = (e - u) / 2,
                            b = (n - h) / 2,
                            F = x * x / (r * r) + b * b / (i * i);
                        F > 1 && (r *= F = l.sqrt(F), i *= F);
                        var C = r * r,
                            w = i * i,
                            B = (o == s ? -1 : 1) * l.sqrt(p((C * w - C * b * b - w * x * x) / (C * b * b + w * x * x))),
                            A = B * r * b / i + (e + u) / 2,
                            E = B * -i * x / r + (n + h) / 2,
                            S = l.asin(((n - E) / i).toFixed(9)),
                            k = l.asin(((h - E) / i).toFixed(9));
                        (S = e < A ? c - S : S) < 0 && (S = 2 * c + S), (k = u < A ? c - k : k) < 0 && (k = 2 * c + k), s && S > k && (S -= 2 * c), !s && k > S && (k -= 2 * c)
                    }
                    var D = k - S;
                    if (p(D) > g) {
                        var _ = k,
                            T = u,
                            M = h;
                        k = S + g * (s && k > S ? 1 : -1), m = R(u = A + r * l.cos(k), h = E + i * l.sin(k), r, i, a, 0, s, T, M, [k, _, A, E])
                    }
                    D = k - S;
                    var N = l.cos(S),
                        j = l.sin(S),
                        P = l.cos(k),
                        L = l.sin(k),
                        q = l.tan(D / 4),
                        V = 4 / 3 * r * q,
                        O = 4 / 3 * i * q,
                        G = [e, n],
                        z = [e + V * j, n - O * N],
                        U = [u + V * L, h - O * P],
                        X = [u, h];
                    if (z[0] = 2 * G[0] - z[0], z[1] = 2 * G[1] - z[1], f) return [z, U, X].concat(m);
                    for (var I = [], $ = 0, H = (m = [z, U, X].concat(m).join().split(",")).length; $ < H; $++) I[$] = $ % 2 ? y(m[$ - 1], m[$], v).y : y(m[$], m[$ + 1], v).x;
                    return I
                }

                function z(t, e, n, r, i, a, o, s) {
                    for (var u, c, d, g, v, m, y, x, b = [], F = [
                            [],
                            []
                        ], C = 0; C < 2; ++C)
                        if (0 == C ? (c = 6 * t - 12 * n + 6 * i, u = -3 * t + 9 * n - 9 * i + 3 * o, d = 3 * n - 3 * t) : (c = 6 * e - 12 * r + 6 * a, u = -3 * e + 9 * r - 9 * a + 3 * s, d = 3 * r - 3 * e), p(u) < 1e-12) {
                            if (p(c) < 1e-12) continue;
                            0 < (g = -d / c) && g < 1 && b.push(g)
                        } else y = c * c - 4 * d * u, x = l.sqrt(y), y < 0 || (0 < (v = (-c + x) / (2 * u)) && v < 1 && b.push(v), 0 < (m = (-c - x) / (2 * u)) && m < 1 && b.push(m));
                    for (var w, B = b.length, A = B; B--;) w = 1 - (g = b[B]), F[0][B] = w * w * w * t + 3 * w * w * g * n + 3 * w * g * g * i + g * g * g * o, F[1][B] = w * w * w * e + 3 * w * w * g * r + 3 * w * g * g * a + g * g * g * s;
                    return F[0][A] = t, F[1][A] = e, F[0][A + 1] = o, F[1][A + 1] = s, F[0].length = F[1].length = A + 2, {
                        min: {
                            x: h.apply(0, F[0]),
                            y: h.apply(0, F[1])
                        },
                        max: {
                            x: f.apply(0, F[0]),
                            y: f.apply(0, F[1])
                        }
                    }
                }

                function U(t, e) {
                    var n = !e && g(t);
                    if (!e && n.curve) return y(n.curve);
                    for (var r = V(t), i = e && V(e), a = {
                            x: 0,
                            y: 0,
                            bx: 0,
                            by: 0,
                            X: 0,
                            Y: 0,
                            qx: null,
                            qy: null
                        }, o = {
                            x: 0,
                            y: 0,
                            bx: 0,
                            by: 0,
                            X: 0,
                            Y: 0,
                            qx: null,
                            qy: null
                        }, s = function(t, e, n) {
                            var r, i;
                            if (!t) return ["C", e.x, e.y, e.x, e.y, e.x, e.y];
                            switch (!(t[0] in {
                                T: 1,
                                Q: 1
                            }) && (e.qx = e.qy = null), t[0]) {
                                case "M":
                                    e.X = t[1], e.Y = t[2];
                                    break;
                                case "A":
                                    t = ["C"].concat(R.apply(0, [e.x, e.y].concat(t.slice(1))));
                                    break;
                                case "S":
                                    "C" == n || "S" == n ? (r = 2 * e.x - e.bx, i = 2 * e.y - e.by) : (r = e.x, i = e.y), t = ["C", r, i].concat(t.slice(1));
                                    break;
                                case "T":
                                    "Q" == n || "T" == n ? (e.qx = 2 * e.x - e.qx, e.qy = 2 * e.y - e.qy) : (e.qx = e.x, e.qy = e.y), t = ["C"].concat(G(e.x, e.y, e.qx, e.qy, t[1], t[2]));
                                    break;
                                case "Q":
                                    e.qx = t[1], e.qy = t[2], t = ["C"].concat(G(e.x, e.y, t[1], t[2], t[3], t[4]));
                                    break;
                                case "L":
                                    t = ["C"].concat(O(e.x, e.y, t[1], t[2]));
                                    break;
                                case "H":
                                    t = ["C"].concat(O(e.x, e.y, t[1], e.y));
                                    break;
                                case "V":
                                    t = ["C"].concat(O(e.x, e.y, e.x, t[1]));
                                    break;
                                case "Z":
                                    t = ["C"].concat(O(e.x, e.y, e.X, e.Y))
                            }
                            return t
                        }, l = function(t, e) {
                            if (t[e].length > 7) {
                                t[e].shift();
                                for (var n = t[e]; n.length;) h[e] = "A", i && (d[e] = "A"), t.splice(e++, 0, ["C"].concat(n.splice(0, 6)));
                                t.splice(e, 1), x = f(r.length, i && i.length || 0)
                            }
                        }, c = function(t, e, n, a, o) {
                            t && e && "M" == t[o][0] && "M" != e[o][0] && (e.splice(o, 0, ["M", a.x, a.y]), n.bx = 0, n.by = 0, n.x = t[o][1], n.y = t[o][2], x = f(r.length, i && i.length || 0))
                        }, h = [], d = [], p = "", v = "", m = 0, x = f(r.length, i && i.length || 0); m < x; m++) {
                        r[m] && (p = r[m][0]), "C" != p && (h[m] = p, m && (v = h[m - 1])), r[m] = s(r[m], a, v), "A" != h[m] && "C" == p && (h[m] = "C"), l(r, m), i && (i[m] && (p = i[m][0]), "C" != p && (d[m] = p, m && (v = d[m - 1])), i[m] = s(i[m], o, v), "A" != d[m] && "C" == p && (d[m] = "C"), l(i, m)), c(r, i, a, o, m), c(i, r, o, a, m);
                        var b = r[m],
                            F = i && i[m],
                            C = b.length,
                            w = i && F.length;
                        a.x = b[C - 2], a.y = b[C - 1], a.bx = u(b[C - 4]) || a.x, a.by = u(b[C - 3]) || a.y, o.bx = i && (u(F[w - 4]) || o.x), o.by = i && (u(F[w - 3]) || o.y), o.x = i && F[w - 2], o.y = i && F[w - 1]
                    }
                    return i || (n.curve = y(r)), i ? [r, i] : r
                }

                function X(t, e) {
                    for (var n = [], r = 0, i = t.length; i - 2 * !e > r; r += 2) {
                        var a = [{
                            x: +t[r - 2],
                            y: +t[r - 1]
                        }, {
                            x: +t[r],
                            y: +t[r + 1]
                        }, {
                            x: +t[r + 2],
                            y: +t[r + 3]
                        }, {
                            x: +t[r + 4],
                            y: +t[r + 5]
                        }];
                        e ? r ? i - 4 == r ? a[3] = {
                            x: +t[0],
                            y: +t[1]
                        } : i - 2 == r && (a[2] = {
                            x: +t[0],
                            y: +t[1]
                        }, a[3] = {
                            x: +t[2],
                            y: +t[3]
                        }) : a[0] = {
                            x: +t[i - 2],
                            y: +t[i - 1]
                        } : i - 4 == r ? a[3] = a[2] : r || (a[0] = {
                            x: +t[r],
                            y: +t[r + 1]
                        }), n.push(["C", (-a[0].x + 6 * a[1].x + a[2].x) / 6, (-a[0].y + 6 * a[1].y + a[2].y) / 6, (a[1].x + 6 * a[2].x - a[3].x) / 6, (a[1].y + 6 * a[2].y - a[3].y) / 6, a[2].x, a[2].y])
                    }
                    return n
                }
                t.path = g, t.path.getTotalLength = F, t.path.getPointAtLength = C, t.path.getSubpath = function(t, e, n) {
                    if (this.getTotalLength(t) - n < 1e-6) return w(t, e).end;
                    var r = w(t, n, 1);
                    return e ? w(r, e).end : r
                }, i.getTotalLength = function() {
                    if (this.node.getTotalLength) return this.node.getTotalLength()
                }, i.getPointAtLength = function(t) {
                    return C(this.attr("d"), t)
                }, i.getSubpath = function(e, n) {
                    return t.path.getSubpath(this.attr("d"), e, n)
                }, t._.box = v, t.path.findDotsAtSegment = B, t.path.bezierBBox = A, t.path.isPointInsideBBox = E, t.closest = function(e, n, r, i) {
                    for (var a = 100, o = v(e - a / 2, n - a / 2, a, a), s = [], u = r[0].hasOwnProperty("x") ? function(t) {
                            return {
                                x: r[t].x,
                                y: r[t].y
                            }
                        } : function(t) {
                            return {
                                x: r[t],
                                y: i[t]
                            }
                        }, l = 0; a <= 1e6 && !l;) {
                        for (var c = 0, h = r.length; c < h; c++) {
                            var f = u(c);
                            if (E(o, f.x, f.y)) {
                                l++, s.push(f);
                                break
                            }
                        }
                        l || (o = v(e - (a *= 2) / 2, n - a / 2, a, a))
                    }
                    if (1e6 != a) {
                        var d, p = 1 / 0;
                        for (c = 0, h = s.length; c < h; c++) {
                            var g = t.len(e, n, s[c].x, s[c].y);
                            p > g && (p = g, s[c].len = g, d = s[c])
                        }
                        return d
                    }
                }, t.path.isBBoxIntersect = S, t.path.intersection = function(t, e) {
                    return M(t, e)
                }, t.path.intersectionNumber = function(t, e) {
                    return M(t, e, 1)
                }, t.path.isPointInside = function(t, e, n) {
                    var r = N(t);
                    return E(r, e, n) && M(t, [
                        ["M", e, n],
                        ["H", r.x2 + 10]
                    ], 1) % 2 == 1
                }, t.path.getBBox = N, t.path.get = q, t.path.toRelative = function(e) {
                    var n = g(e),
                        r = String.prototype.toLowerCase;
                    if (n.rel) return y(n.rel);
                    t.is(e, "array") && t.is(e && e[0], "array") || (e = t.parsePathString(e));
                    var i = [],
                        a = 0,
                        o = 0,
                        s = 0,
                        u = 0,
                        l = 0;
                    "M" == e[0][0] && (s = a = e[0][1], u = o = e[0][2], l++, i.push(["M", a, o]));
                    for (var c = l, h = e.length; c < h; c++) {
                        var f = i[c] = [],
                            d = e[c];
                        if (d[0] != r.call(d[0])) switch (f[0] = r.call(d[0]), f[0]) {
                            case "a":
                                f[1] = d[1], f[2] = d[2], f[3] = d[3], f[4] = d[4], f[5] = d[5], f[6] = +(d[6] - a).toFixed(3), f[7] = +(d[7] - o).toFixed(3);
                                break;
                            case "v":
                                f[1] = +(d[1] - o).toFixed(3);
                                break;
                            case "m":
                                s = d[1], u = d[2];
                            default:
                                for (var p = 1, v = d.length; p < v; p++) f[p] = +(d[p] - (p % 2 ? a : o)).toFixed(3)
                        } else {
                            f = i[c] = [], "m" == d[0] && (s = d[1] + a, u = d[2] + o);
                            for (var x = 0, b = d.length; x < b; x++) i[c][x] = d[x]
                        }
                        var F = i[c].length;
                        switch (i[c][0]) {
                            case "z":
                                a = s, o = u;
                                break;
                            case "h":
                                a += +i[c][F - 1];
                                break;
                            case "v":
                                o += +i[c][F - 1];
                                break;
                            default:
                                a += +i[c][F - 2], o += +i[c][F - 1]
                        }
                    }
                    return i.toString = m, n.rel = y(i), i
                }, t.path.toAbsolute = V, t.path.toCubic = U, t.path.map = function(t, e) {
                    if (!e) return t;
                    var n, r, i, a, o, s, u;
                    for (i = 0, o = (t = U(t)).length; i < o; i++)
                        for (a = 1, s = (u = t[i]).length; a < s; a += 2) n = e.x(u[a], u[a + 1]), r = e.y(u[a], u[a + 1]), u[a] = n, u[a + 1] = r;
                    return t
                }, t.path.toString = m, t.path.clone = y
            })), i.plugin((function(t, e, n, i) {
                var a = Math.max,
                    o = Math.min,
                    s = function(t) {
                        if (this.items = [], this.bindings = {}, this.length = 0, this.type = "set", t)
                            for (var e = 0, n = t.length; e < n; e++) t[e] && (this[this.items.length] = this.items[this.items.length] = t[e], this.length++)
                    },
                    u = s.prototype;
                u.push = function() {
                    for (var t, e, n = 0, r = arguments.length; n < r; n++)(t = arguments[n]) && (this[e = this.items.length] = this.items[e] = t, this.length++);
                    return this
                }, u.pop = function() {
                    return this.length && delete this[this.length--], this.items.pop()
                }, u.forEach = function(t, e) {
                    for (var n = 0, r = this.items.length; n < r; n++)
                        if (!1 === t.call(e, this.items[n], n)) return this;
                    return this
                }, u.animate = function(e, n, i, a) {
                    "function" != typeof i || i.length || (a = i, i = r.linear), e instanceof t._.Animation && (a = e.callback, i = e.easing, n = i.dur, e = e.attr);
                    var o = arguments;
                    if (t.is(e, "array") && t.is(o[o.length - 1], "array")) var s = !0;
                    var u, l = function() {
                            u ? this.b = u : u = this.b
                        },
                        c = 0,
                        h = this,
                        f = a && function() {
                            ++c == h.length && a.call(this)
                        };
                    return this.forEach((function(t, r) {
                        eve.once("snap.animcreated." + t.id, l), s ? o[r] && t.animate.apply(t, o[r]) : t.animate(e, n, i, f)
                    }))
                }, u.remove = function() {
                    for (; this.length;) this.pop().remove();
                    return this
                }, u.bind = function(t, e, n) {
                    var r = {};
                    if ("function" == typeof e) this.bindings[t] = e;
                    else {
                        var i = n || t;
                        this.bindings[t] = function(t) {
                            r[i] = t, e.attr(r)
                        }
                    }
                    return this
                }, u.attr = function(t) {
                    var e = {};
                    for (var n in t) this.bindings[n] ? this.bindings[n](t[n]) : e[n] = t[n];
                    for (var r = 0, i = this.items.length; r < i; r++) this.items[r].attr(e);
                    return this
                }, u.clear = function() {
                    for (; this.length;) this.pop()
                }, u.splice = function(t, e, n) {
                    t = t < 0 ? a(this.length + t, 0) : t, e = a(0, o(this.length - t, e));
                    var r, i = [],
                        u = [],
                        l = [];
                    for (r = 2; r < arguments.length; r++) l.push(arguments[r]);
                    for (r = 0; r < e; r++) u.push(this[t + r]);
                    for (; r < this.length - t; r++) i.push(this[t + r]);
                    var c = l.length;
                    for (r = 0; r < c + i.length; r++) this.items[t + r] = this[t + r] = r < c ? l[r] : i[r - c];
                    for (r = this.items.length = this.length -= e - c; this[r];) delete this[r++];
                    return new s(u)
                }, u.exclude = function(t) {
                    for (var e = 0, n = this.length; e < n; e++)
                        if (this[e] == t) return this.splice(e, 1), !0;
                    return !1
                }, u.insertAfter = function(t) {
                    for (var e = this.items.length; e--;) this.items[e].insertAfter(t);
                    return this
                }, u.getBBox = function() {
                    for (var t = [], e = [], n = [], r = [], i = this.items.length; i--;)
                        if (!this.items[i].removed) {
                            var s = this.items[i].getBBox();
                            t.push(s.x), e.push(s.y), n.push(s.x + s.width), r.push(s.y + s.height)
                        }
                    return {
                        x: t = o.apply(0, t),
                        y: e = o.apply(0, e),
                        x2: n = a.apply(0, n),
                        y2: r = a.apply(0, r),
                        width: n - t,
                        height: r - e,
                        cx: t + (n - t) / 2,
                        cy: e + (r - e) / 2
                    }
                }, u.clone = function(t) {
                    t = new s;
                    for (var e = 0, n = this.items.length; e < n; e++) t.push(this.items[e].clone());
                    return t
                }, u.toString = function() {
                    return "Snap\u2018s set"
                }, u.type = "set", t.Set = s, t.set = function() {
                    var t = new s;
                    return arguments.length && t.push.apply(t, Array.prototype.slice.call(arguments, 0)), t
                }
            })), i.plugin((function(t, e, n, r) {
                var i = {},
                    a = /[%a-z]+$/i,
                    o = String;

                function s(t) {
                    var e = t[0];
                    switch (e.toLowerCase()) {
                        case "t":
                            return [e, 0, 0];
                        case "m":
                            return [e, 1, 0, 0, 1, 0, 0];
                        case "r":
                            return 4 == t.length ? [e, 0, t[2], t[3]] : [e, 0];
                        case "s":
                            return 5 == t.length ? [e, 1, 1, t[3], t[4]] : 3 == t.length ? [e, 1, 1] : [e, 1]
                    }
                }

                function u(t) {
                    return t
                }

                function l(t) {
                    return t.join(" ")
                }

                function c(e) {
                    return t.rgb(e[0], e[1], e[2], e[3])
                }

                function h(t) {
                    var e, n, r, i, a, o, s = 0,
                        u = [];
                    for (e = 0, n = t.length; e < n; e++) {
                        for (a = "[", o = ['"' + t[e][0] + '"'], r = 1, i = t[e].length; r < i; r++) o[r] = "val[" + s++ + "]";
                        a += o + "]", u[e] = a
                    }
                    return Function("val", "return Snap.path.toString.call([" + u + "])")
                }

                function f(t) {
                    for (var e = [], n = 0, r = t.length; n < r; n++)
                        for (var i = 1, a = t[n].length; i < a; i++) e.push(t[n][i]);
                    return e
                }

                function d(t) {
                    return isFinite(t)
                }
                i.stroke = i.fill = "colour", e.prototype.equal = function(t, e) {
                    return eve("snap.util.equal", this, t, e).firstDefined()
                }, eve.on("snap.util.equal", (function(e, n) {
                    var r, p, g = o(this.attr(e) || ""),
                        v = this;
                    if ("colour" == i[e]) return r = t.color(g), p = t.color(n), {
                        from: [r.r, r.g, r.b, r.opacity],
                        to: [p.r, p.g, p.b, p.opacity],
                        f: c
                    };
                    if ("viewBox" == e) return {
                        from: r = this.attr(e).vb.split(" ").map(Number),
                        to: p = n.split(" ").map(Number),
                        f: l
                    };
                    if ("transform" == e || "gradientTransform" == e || "patternTransform" == e) return "string" == typeof n && (n = o(n).replace(/\.{3}|\u2026/g, g)),
                        function(e, n, r) {
                            e = e || new t.Matrix, n = n || new t.Matrix, e = t.parseTransformString(e.toTransformString()) || [], n = t.parseTransformString(n.toTransformString()) || [];
                            for (var i, a, o, u, l = Math.max(e.length, n.length), c = [], d = [], p = 0; p < l; p++) {
                                if (o = e[p] || s(n[p]), u = n[p] || s(o), o[0] != u[0] || "r" == o[0].toLowerCase() && (o[2] != u[2] || o[3] != u[3]) || "s" == o[0].toLowerCase() && (o[3] != u[3] || o[4] != u[4])) {
                                    e = t._.transform2matrix(e, r()), n = t._.transform2matrix(n, r()), c = [
                                        ["m", e.a, e.b, e.c, e.d, e.e, e.f]
                                    ], d = [
                                        ["m", n.a, n.b, n.c, n.d, n.e, n.f]
                                    ];
                                    break
                                }
                                for (c[p] = [], d[p] = [], i = 0, a = Math.max(o.length, u.length); i < a; i++) i in o && (c[p][i] = o[i]), i in u && (d[p][i] = u[i])
                            }
                            return {
                                from: f(c),
                                to: f(d),
                                f: h(c)
                            }
                        }(g = this.matrix, n = t._.rgTransform.test(n) ? t._.transform2matrix(n, this.getBBox()) : t._.transform2matrix(t._.svgTransform2string(n), this.getBBox()), (function() {
                            return v.getBBox(1)
                        }));
                    if ("d" == e || "path" == e) return {
                        from: f((r = t.path.toCubic(g, n))[0]),
                        to: f(r[1]),
                        f: h(r[0])
                    };
                    if ("points" == e) return {
                        from: r = o(g).split(t._.separator),
                        to: p = o(n).split(t._.separator),
                        f: function(t) {
                            return t
                        }
                    };
                    if (d(g) && d(n)) return {
                        from: parseFloat(g),
                        to: parseFloat(n),
                        f: u
                    };
                    var m, y, x, b = g.match(a),
                        F = o(n).match(a);
                    return b && (y = b, x = F, t.is(y, "array") && t.is(x, "array") && y.toString() == x.toString()) ? {
                        from: parseFloat(g),
                        to: parseFloat(n),
                        f: (m = b, function(t) {
                            return +t.toFixed(3) + m
                        })
                    } : {
                        from: this.asPX(e),
                        to: this.asPX(e, n),
                        f: u
                    }
                }))
            })), i.plugin((function(t, e, n, r) {
                for (var i = e.prototype, a = ("createTouch" in r.doc), o = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "touchstart", "touchmove", "touchend", "touchcancel"], s = {
                        mousedown: "touchstart",
                        mousemove: "touchmove",
                        mouseup: "touchend"
                    }, u = function(t, e) {
                        var n = "y" == t ? "scrollTop" : "scrollLeft",
                            i = e && e.node ? e.node.ownerDocument : r.doc;
                        return i[n in i.documentElement ? "documentElement" : "body"][n]
                    }, l = function() {
                        return this.originalEvent.preventDefault()
                    }, c = function() {
                        return this.originalEvent.stopPropagation()
                    }, h = function(t, e, n, r) {
                        var i = a && s[e] ? s[e] : e,
                            o = function(i) {
                                var o = u("y", r),
                                    h = u("x", r);
                                if (a && s.hasOwnProperty(e))
                                    for (var f = 0, d = i.targetTouches && i.targetTouches.length; f < d; f++)
                                        if (i.targetTouches[f].target == t || t.contains(i.targetTouches[f].target)) {
                                            var p = i;
                                            (i = i.targetTouches[f]).originalEvent = p, i.preventDefault = l, i.stopPropagation = c;
                                            break
                                        }
                                var g = i.clientX + h,
                                    v = i.clientY + o;
                                return n.call(r, i, g, v)
                            };
                        return e !== i && t.addEventListener(e, o, !1), t.addEventListener(i, o, !1),
                            function() {
                                return e !== i && t.removeEventListener(e, o, !1), t.removeEventListener(i, o, !1), !0
                            }
                    }, f = [], d = function(t) {
                        for (var e, n = t.clientX, r = t.clientY, i = u("y"), o = u("x"), s = f.length; s--;) {
                            if (e = f[s], a) {
                                for (var l, c = t.touches && t.touches.length; c--;)
                                    if ((l = t.touches[c]).identifier == e.el._drag.id || e.el.node.contains(l.target)) {
                                        n = l.clientX, r = l.clientY, (t.originalEvent ? t.originalEvent : t).preventDefault();
                                        break
                                    }
                            } else t.preventDefault();
                            var h = e.el.node;
                            h.nextSibling, h.parentNode, h.style.display;
                            n += o, r += i, eve("snap.drag.move." + e.el.id, e.move_scope || e.el, n - e.el._drag.x, r - e.el._drag.y, n, r, t)
                        }
                    }, p = function(e) {
                        t.unmousemove(d).unmouseup(p);
                        for (var n, r = f.length; r--;)(n = f[r]).el._drag = {}, eve("snap.drag.end." + n.el.id, n.end_scope || n.start_scope || n.move_scope || n.el, e), eve.off("snap.drag.*." + n.el.id);
                        f = []
                    }, g = o.length; g--;) ! function(e) {
                    t[e] = i[e] = function(n, r) {
                        if (t.is(n, "function")) this.events = this.events || [], this.events.push({
                            name: e,
                            f: n,
                            unbind: h(this.node || document, e, n, r || this)
                        });
                        else
                            for (var i = 0, a = this.events.length; i < a; i++)
                                if (this.events[i].name == e) try {
                                    this.events[i].f.call(this)
                                } catch (o) {}
                        return this
                    }, t["un" + e] = i["un" + e] = function(t) {
                        for (var n = this.events || [], r = n.length; r--;)
                            if (n[r].name == e && (n[r].f == t || !t)) return n[r].unbind(), n.splice(r, 1), !n.length && delete this.events, this;
                        return this
                    }
                }(o[g]);
                i.hover = function(t, e, n, r) {
                    return this.mouseover(t, n).mouseout(e, r || n)
                }, i.unhover = function(t, e) {
                    return this.unmouseover(t).unmouseout(e)
                };
                var v = [];
                i.drag = function(e, n, r, i, a, o) {
                    var s, u = this;
                    if (!arguments.length) return u.drag((function(t, e) {
                        this.attr({
                            transform: s + (s ? "T" : "t") + [t, e]
                        })
                    }), (function() {
                        s = this.transform().local
                    }));

                    function l(s, l, c) {
                        (s.originalEvent || s).preventDefault(), u._drag.x = l, u._drag.y = c, u._drag.id = s.identifier, !f.length && t.mousemove(d).mouseup(p), f.push({
                            el: u,
                            move_scope: i,
                            start_scope: a,
                            end_scope: o
                        }), n && eve.on("snap.drag.start." + u.id, n), e && eve.on("snap.drag.move." + u.id, e), r && eve.on("snap.drag.end." + u.id, r), eve("snap.drag.start." + u.id, a || i || u, l, c, s)
                    }

                    function c(t, e, n) {
                        eve("snap.draginit." + u.id, u, t, e, n)
                    }
                    return eve.on("snap.draginit." + u.id, l), u._drag = {}, v.push({
                        el: u,
                        start: l,
                        init: c
                    }), u.mousedown(c), u
                }, i.undrag = function() {
                    for (var e = v.length; e--;) v[e].el == this && (this.unmousedown(v[e].init), v.splice(e, 1), eve.unbind("snap.drag.*." + this.id), eve.unbind("snap.draginit." + this.id));
                    return !v.length && t.unmousemove(d).unmouseup(p), this
                }
            })), i.plugin((function(t, e, n, r) {
                e.prototype;
                var i = n.prototype,
                    a = /^\s*url\((.+)\)/,
                    o = String,
                    s = t._.$;
                t.filter = {}, i.filter = function(n) {
                    var r = this;
                    "svg" != r.type && (r = r.paper);
                    var i = t.parse(o(n)),
                        a = t._.id(),
                        u = (r.node.offsetWidth, r.node.offsetHeight, s("filter"));
                    return s(u, {
                        id: a,
                        filterUnits: "userSpaceOnUse"
                    }), u.appendChild(i.node), r.defs.appendChild(u), new e(u)
                }, eve.on("snap.util.getattr.filter", (function() {
                    eve.stop();
                    var e = s(this.node, "filter");
                    if (e) {
                        var n = o(e).match(a);
                        return n && t.select(n[1])
                    }
                })), eve.on("snap.util.attr.filter", (function(n) {
                    if (n instanceof e && "filter" == n.type) {
                        eve.stop();
                        var r = n.node.id;
                        r || (s(n.node, {
                            id: n.id
                        }), r = n.id), s(this.node, {
                            filter: t.url(r)
                        })
                    }
                    n && "none" != n || (eve.stop(), this.node.removeAttribute("filter"))
                })), t.filter.blur = function(e, n) {
                    null == e && (e = 2);
                    var r = null == n ? e : [e, n];
                    return t.format('<feGaussianBlur stdDeviation="{def}"/>', {
                        def: r
                    })
                }, t.filter.blur.toString = function() {
                    return this()
                }, t.filter.shadow = function(e, n, r, i, a) {
                    return null == a && (null == i ? (a = r, r = 4, i = "#000") : (a = i, i = r, r = 4)), null == r && (r = 4), null == a && (a = 1), null == e && (e = 0, n = 2), null == n && (n = e), i = t.color(i), t.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>', {
                        color: i,
                        dx: e,
                        dy: n,
                        blur: r,
                        opacity: a
                    })
                }, t.filter.shadow.toString = function() {
                    return this()
                }, t.filter.grayscale = function(e) {
                    return null == e && (e = 1), t.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', {
                        a: .2126 + .7874 * (1 - e),
                        b: .7152 - .7152 * (1 - e),
                        c: .0722 - .0722 * (1 - e),
                        d: .2126 - .2126 * (1 - e),
                        e: .7152 + .2848 * (1 - e),
                        f: .0722 - .0722 * (1 - e),
                        g: .2126 - .2126 * (1 - e),
                        h: .0722 + .9278 * (1 - e)
                    })
                }, t.filter.grayscale.toString = function() {
                    return this()
                }, t.filter.sepia = function(e) {
                    return null == e && (e = 1), t.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', {
                        a: .393 + .607 * (1 - e),
                        b: .769 - .769 * (1 - e),
                        c: .189 - .189 * (1 - e),
                        d: .349 - .349 * (1 - e),
                        e: .686 + .314 * (1 - e),
                        f: .168 - .168 * (1 - e),
                        g: .272 - .272 * (1 - e),
                        h: .534 - .534 * (1 - e),
                        i: .131 + .869 * (1 - e)
                    })
                }, t.filter.sepia.toString = function() {
                    return this()
                }, t.filter.saturate = function(e) {
                    return null == e && (e = 1), t.format('<feColorMatrix type="saturate" values="{amount}"/>', {
                        amount: 1 - e
                    })
                }, t.filter.saturate.toString = function() {
                    return this()
                }, t.filter.hueRotate = function(e) {
                    return e = e || 0, t.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {
                        angle: e
                    })
                }, t.filter.hueRotate.toString = function() {
                    return this()
                }, t.filter.invert = function(e) {
                    return null == e && (e = 1), t.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>', {
                        amount: e,
                        amount2: 1 - e
                    })
                }, t.filter.invert.toString = function() {
                    return this()
                }, t.filter.brightness = function(e) {
                    return null == e && (e = 1), t.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', {
                        amount: e
                    })
                }, t.filter.brightness.toString = function() {
                    return this()
                }, t.filter.contrast = function(e) {
                    return null == e && (e = 1), t.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>', {
                        amount: e,
                        amount2: .5 - e / 2
                    })
                }, t.filter.contrast.toString = function() {
                    return this()
                }
            })), i.plugin((function(t, e, n, r, i) {
                var a = t._.box,
                    o = t.is,
                    s = /^[^a-z]*([tbmlrc])/i,
                    u = function() {
                        return "T" + this.dx + "," + this.dy
                    };
                e.prototype.getAlign = function(t, e) {
                    null == e && o(t, "string") && (e = t, t = null);
                    var n = (t = t || this.paper).getBBox ? t.getBBox() : a(t),
                        r = this.getBBox(),
                        i = {};
                    switch (e = (e = e && e.match(s)) ? e[1].toLowerCase() : "c") {
                        case "t":
                            i.dx = 0, i.dy = n.y - r.y;
                            break;
                        case "b":
                            i.dx = 0, i.dy = n.y2 - r.y2;
                            break;
                        case "m":
                            i.dx = 0, i.dy = n.cy - r.cy;
                            break;
                        case "l":
                            i.dx = n.x - r.x, i.dy = 0;
                            break;
                        case "r":
                            i.dx = n.x2 - r.x2, i.dy = 0;
                            break;
                        default:
                            i.dx = n.cx - r.cx, i.dy = 0
                    }
                    return i.toString = u, i
                }, e.prototype.align = function(t, e) {
                    return this.transform("..." + this.getAlign(t, e))
                }
            })), i.plugin((function(t, e, n, i, a) {
                var o = e.prototype,
                    s = t.is,
                    u = String,
                    l = "hasOwnProperty";

                function c(t, e, n) {
                    return function(r) {
                        var i = r.slice(t, e);
                        return 1 == i.length && (i = i[0]), n ? n(i) : i
                    }
                }
                var h = function(t, e, n, i) {
                    "function" != typeof n || n.length || (i = n, n = r.linear), this.attr = t, this.dur = e, n && (this.easing = n), i && (this.callback = i)
                };
                t._.Animation = h, t.animation = function(t, e, n, r) {
                    return new h(t, e, n, r)
                }, o.inAnim = function() {
                    var t = this,
                        e = [];
                    for (var n in t.anims) t.anims[l](n) && function(t) {
                        e.push({
                            anim: new h(t._attrs, t.dur, t.easing, t._callback),
                            mina: t,
                            curStatus: t.status(),
                            status: function(e) {
                                return t.status(e)
                            },
                            stop: function() {
                                t.stop()
                            }
                        })
                    }(t.anims[n]);
                    return e
                }, t.animate = function(t, e, n, i, a, o) {
                    "function" != typeof a || a.length || (o = a, a = r.linear);
                    var s = r.time(),
                        u = r(t, e, s, s + i, r.time, n, a);
                    return o && eve.once("mina.finish." + u.id, o), u
                }, o.stop = function() {
                    for (var t = this.inAnim(), e = 0, n = t.length; e < n; e++) t[e].stop();
                    return this
                }, o.animate = function(t, e, n, i) {
                    "function" != typeof n || n.length || (i = n, n = r.linear), t instanceof h && (i = t.callback, n = t.easing, e = t.dur, t = t.attr);
                    var a, o, f, d, p = [],
                        g = [],
                        v = {},
                        m = this;
                    for (var y in t)
                        if (t[l](y)) {
                            m.equal ? (a = (d = m.equal(y, u(t[y]))).from, o = d.to, f = d.f) : (a = +m.attr(y), o = +t[y]);
                            var x = s(a, "array") ? a.length : 1;
                            v[y] = c(p.length, p.length + x, f), p = p.concat(a), g = g.concat(o)
                        }
                    var b = r.time(),
                        F = r(p, g, b, b + e, r.time, (function(t) {
                            var e = {};
                            for (var n in v) v[l](n) && (e[n] = v[n](t));
                            m.attr(e)
                        }), n);
                    return m.anims[F.id] = F, F._attrs = t, F._callback = i, eve("snap.animcreated." + m.id, F), eve.once("mina.finish." + F.id, (function() {
                        eve.off("mina.*." + F.id), delete m.anims[F.id], i && i.call(m)
                    })), eve.once("mina.stop." + F.id, (function() {
                        eve.off("mina.*." + F.id), delete m.anims[F.id]
                    })), m
                }
            })), i.plugin((function(t, e, n, r) {
                function i(t) {
                    t = t.split(/(?=#)/);
                    var e = new String(t[5]);
                    return e[50] = t[0], e[100] = t[1], e[200] = t[2], e[300] = t[3], e[400] = t[4], e[500] = t[5], e[600] = t[6], e[700] = t[7], e[800] = t[8], e[900] = t[9], t[10] && (e.A100 = t[10], e.A200 = t[11], e.A400 = t[12], e.A700 = t[13]), e
                }
                t.mui = {}, t.flat = {}, t.mui.red = i("#ffebee#ffcdd2#ef9a9a#e57373#ef5350#f44336#e53935#d32f2f#c62828#b71c1c#ff8a80#ff5252#ff1744#d50000"), t.mui.pink = i("#FCE4EC#F8BBD0#F48FB1#F06292#EC407A#E91E63#D81B60#C2185B#AD1457#880E4F#FF80AB#FF4081#F50057#C51162"), t.mui.purple = i("#F3E5F5#E1BEE7#CE93D8#BA68C8#AB47BC#9C27B0#8E24AA#7B1FA2#6A1B9A#4A148C#EA80FC#E040FB#D500F9#AA00FF"), t.mui.deeppurple = i("#EDE7F6#D1C4E9#B39DDB#9575CD#7E57C2#673AB7#5E35B1#512DA8#4527A0#311B92#B388FF#7C4DFF#651FFF#6200EA"), t.mui.indigo = i("#E8EAF6#C5CAE9#9FA8DA#7986CB#5C6BC0#3F51B5#3949AB#303F9F#283593#1A237E#8C9EFF#536DFE#3D5AFE#304FFE"), t.mui.blue = i("#E3F2FD#BBDEFB#90CAF9#64B5F6#64B5F6#2196F3#1E88E5#1976D2#1565C0#0D47A1#82B1FF#448AFF#2979FF#2962FF"), t.mui.lightblue = i("#E1F5FE#B3E5FC#81D4FA#4FC3F7#29B6F6#03A9F4#039BE5#0288D1#0277BD#01579B#80D8FF#40C4FF#00B0FF#0091EA"), t.mui.cyan = i("#E0F7FA#B2EBF2#80DEEA#4DD0E1#26C6DA#00BCD4#00ACC1#0097A7#00838F#006064#84FFFF#18FFFF#00E5FF#00B8D4"), t.mui.teal = i("#E0F2F1#B2DFDB#80CBC4#4DB6AC#26A69A#009688#00897B#00796B#00695C#004D40#A7FFEB#64FFDA#1DE9B6#00BFA5"), t.mui.green = i("#E8F5E9#C8E6C9#A5D6A7#81C784#66BB6A#4CAF50#43A047#388E3C#2E7D32#1B5E20#B9F6CA#69F0AE#00E676#00C853"), t.mui.lightgreen = i("#F1F8E9#DCEDC8#C5E1A5#AED581#9CCC65#8BC34A#7CB342#689F38#558B2F#33691E#CCFF90#B2FF59#76FF03#64DD17"), t.mui.lime = i("#F9FBE7#F0F4C3#E6EE9C#DCE775#D4E157#CDDC39#C0CA33#AFB42B#9E9D24#827717#F4FF81#EEFF41#C6FF00#AEEA00"), t.mui.yellow = i("#FFFDE7#FFF9C4#FFF59D#FFF176#FFEE58#FFEB3B#FDD835#FBC02D#F9A825#F57F17#FFFF8D#FFFF00#FFEA00#FFD600"), t.mui.amber = i("#FFF8E1#FFECB3#FFE082#FFD54F#FFCA28#FFC107#FFB300#FFA000#FF8F00#FF6F00#FFE57F#FFD740#FFC400#FFAB00"), t.mui.orange = i("#FFF3E0#FFE0B2#FFCC80#FFB74D#FFA726#FF9800#FB8C00#F57C00#EF6C00#E65100#FFD180#FFAB40#FF9100#FF6D00"), t.mui.deeporange = i("#FBE9E7#FFCCBC#FFAB91#FF8A65#FF7043#FF5722#F4511E#E64A19#D84315#BF360C#FF9E80#FF6E40#FF3D00#DD2C00"), t.mui.brown = i("#EFEBE9#D7CCC8#BCAAA4#A1887F#8D6E63#795548#6D4C41#5D4037#4E342E#3E2723"), t.mui.grey = i("#FAFAFA#F5F5F5#EEEEEE#E0E0E0#BDBDBD#9E9E9E#757575#616161#424242#212121"), t.mui.bluegrey = i("#ECEFF1#CFD8DC#B0BEC5#90A4AE#78909C#607D8B#546E7A#455A64#37474F#263238"), t.flat.turquoise = "#1abc9c", t.flat.greensea = "#16a085", t.flat.sunflower = "#f1c40f", t.flat.orange = "#f39c12", t.flat.emerland = "#2ecc71", t.flat.nephritis = "#27ae60", t.flat.carrot = "#e67e22", t.flat.pumpkin = "#d35400", t.flat.peterriver = "#3498db", t.flat.belizehole = "#2980b9", t.flat.alizarin = "#e74c3c", t.flat.pomegranate = "#c0392b", t.flat.amethyst = "#9b59b6", t.flat.wisteria = "#8e44ad", t.flat.clouds = "#ecf0f1", t.flat.silver = "#bdc3c7", t.flat.wetasphalt = "#34495e", t.flat.midnightblue = "#2c3e50", t.flat.concrete = "#95a5a6", t.flat.asbestos = "#7f8c8d", t.importMUIColors = function() {
                    for (var e in t.mui) t.mui.hasOwnProperty(e) && (window[e] = t.mui[e])
                }
            })), t.exports = i
        }
    }
]);