!(function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["exports"], e) : "object" == typeof exports ? e(exports) : e(t);
})(this, function (t) {
    "use strict";
    var e,
        i,
        r,
        n,
        l = ((e = document.createElement("div")), (i = "polygon(0 0, 0 0, 0 0, 0 0)"), (e.style.clipPath = i), e.style.clipPath === i);
    function a(t, e, i) {
        console.log(t.tagName);
        var r = "px",
            n = "userSpaceOnUse";
        if ((-1 !== e.indexOf("%") && ((r = "%"), (n = "objectBoundingBox")), (e = e.replace(/px|em|%/g, "")), "px" !== r)) {
            for (var l = "", a = e.split(", "), p = 0; p < a.length; p++) {
                var o = a[p].split(" "),
                    s = Number(o[0]),
                    c = Number(o[1]);
                0 !== s && (s /= 100), 0 !== c && (c /= 100), (l += s + " " + c), p < a.length - 1 && (l += ", ");
            }
            e = l;
        }
        var d = t.getAttribute("data-clip-path-id");
        if (d) {
            document.getElementById(d).setAttribute("clipPathUnits", n), document.querySelector("#" + d + " > polygon").setAttribute("points", e);
        } else {
            var h = "clip-path-" + Math.random().toString(36).substring(7),
                u = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            if (
                (u.setAttribute("width", "0"),
                u.setAttribute("height", "0"),
                u.setAttribute("data-clip-path-id", h),
                u.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink"),
                i)
            ) {
                t.getAttribute("class") && u.setAttribute("class", t.getAttribute("class")),
                    t.setAttribute("class", ""),
                    (t.style.width = "100%"),
                    (t.style.height = "100%"),
                    (u.style.width = "100%"),
                    (u.style.height = "100%");
                var g = document.createElementNS("http://www.w3.org/2000/svg", "defs");
                (b = document.createElementNS("http://www.w3.org/2000/svg", "clipPath")).setAttribute("id", h),
                    b.setAttribute("clipPathUnits", n),
                    (m = document.createElementNS("http://www.w3.org/2000/svg", "polygon")).setAttribute("points", e);
                var w = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
                w.setAttribute("clip-path", "url(#" + h + ")"),
                    w.setAttribute("width", "100%"),
                    w.setAttribute("height", "100%"),
                    w.appendChild(t.cloneNode(!0)),
                    u.appendChild(w),
                    b.appendChild(m),
                    g.appendChild(b),
                    u.appendChild(g),
                    t.parentNode.replaceChild(u, t);
            } else {
                var b, m;
                (b = document.createElementNS("http://www.w3.org/2000/svg", "clipPath")).setAttribute("id", h),
                    b.setAttribute("clipPathUnits", n),
                    (m = document.createElementNS("http://www.w3.org/2000/svg", "polygon")).setAttribute("points", e),
                    b.appendChild(m),
                    u.appendChild(b),
                    document.body.appendChild(u),
                    t.setAttribute("data-clip-path-id", h),
                    setTimeout(function () {
                        t.style.clipPath = "url(#" + h + ")";
                    }, 0);
            }
        }
    }
    function p(t, e, i) {
        (i = void 0 !== i ? i : l),
            void 0 !== t.style.webkitClipPath
                ? (t.style.webkitClipPath = "polygon(" + e + ")")
                : i
                ? (t.style.clipPath = "polygon(" + e + ")")
                : -1 < window.navigator.userAgent.indexOf("Edge")
                ? a(t, e, !0)
                : a(t, e);
    }
    function o(t, i, r) {
        if (!t) return console.error("Missing selector"), !1;
        var e = document.querySelectorAll(t || "");
        Array.prototype.forEach.call(e, function (t) {
            var e = t.getAttribute("data-clip") || i;
            e ? p(t, e, r) : console.error("Missing clip-path parameters. Please check ClipPath() arguments or data-clip attribute.", t);
        });
    }
    (o.applyClipPath = p),
        "undefined" != typeof jQuery &&
            ((r = jQuery),
            (n = o),
            (r.fn.ClipPath = function (t) {
                return (
                    t === Object(t) && t.path && (t = t.path),
                    this.each(function () {
                        n.applyClipPath(this, r(this).attr("data-clip") || t);
                    })
                );
            })),
        (t.ClipPath = o);
});
