(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload"))
      return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]'))
      i(n);
  new MutationObserver(n => {
      for (const r of n)
          if (r.type === "childList")
              for (const o of r.addedNodes)
                  o.tagName === "LINK" && o.rel === "modulepreload" && i(o)
  }
  ).observe(document, {
      childList: !0,
      subtree: !0
  });
  function e(n) {
      const r = {};
      return n.integrity && (r.integrity = n.integrity),
      n.referrerPolicy && (r.referrerPolicy = n.referrerPolicy),
      n.crossOrigin === "use-credentials" ? r.credentials = "include" : n.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin",
      r
  }
  function i(n) {
      if (n.ep)
          return;
      n.ep = !0;
      const r = e(n);
      fetch(n.href, r)
  }
}
)();
function _t(s) {
  return typeof s == "number"
}
function Ot(s) {
  return typeof s == "string"
}
function It(s) {
  return typeof s == "boolean"
}
function jt(s) {
  return Object.prototype.toString.call(s) === "[object Object]"
}
function _(s) {
  return Math.abs(s)
}
function kt(s) {
  return Math.sign(s)
}
function ht(s, t) {
  return _(s - t)
}
function ce(s, t) {
  if (s === 0 || t === 0 || _(s) <= _(t))
      return 0;
  const e = ht(_(s), _(t));
  return _(e / s)
}
function mt(s) {
  return pt(s).map(Number)
}
function R(s) {
  return s[yt(s)]
}
function yt(s) {
  return Math.max(0, s.length - 1)
}
function Pt(s, t) {
  return t === yt(s)
}
function Ut(s, t=0) {
  return Array.from(Array(s), (e, i) => t + i)
}
function pt(s) {
  return Object.keys(s)
}
function Yt(s, t) {
  return [s, t].reduce( (e, i) => (pt(i).forEach(n => {
      const r = e[n]
        , o = i[n]
        , a = jt(r) && jt(o);
      e[n] = a ? Yt(r, o) : o
  }
  ),
  e), {})
}
function Dt(s, t) {
  return typeof t.MouseEvent < "u" && s instanceof t.MouseEvent
}
function ue(s, t) {
  const e = {
      start: i,
      center: n,
      end: r
  };
  function i() {
      return 0
  }
  function n(l) {
      return r(l) / 2
  }
  function r(l) {
      return t - l
  }
  function o(l, c) {
      return Ot(s) ? e[s](l) : s(t, l, c)
  }
  return {
      measure: o
  }
}
function vt() {
  let s = [];
  function t(n, r, o, a={
      passive: !0
  }) {
      let l;
      if ("addEventListener"in n)
          n.addEventListener(r, o, a),
          l = () => n.removeEventListener(r, o, a);
      else {
          const c = n;
          c.addListener(o),
          l = () => c.removeListener(o)
      }
      return s.push(l),
      i
  }
  function e() {
      s = s.filter(n => n())
  }
  const i = {
      add: t,
      clear: e
  };
  return i
}
function de(s, t, e, i) {
  const n = vt()
    , r = 1e3 / 60;
  let o = null
    , a = 0
    , l = 0;
  function c() {
      n.add(s, "visibilitychange", () => {
          s.hidden && d()
      }
      )
  }
  function h() {
      y(),
      n.clear()
  }
  function u(p) {
      if (!l)
          return;
      o || (o = p);
      const g = p - o;
      for (o = p,
      a += g; a >= r; )
          e(r),
          a -= r;
      const v = a / r;
      i(v),
      l && t.requestAnimationFrame(u)
  }
  function f() {
      l || (l = t.requestAnimationFrame(u))
  }
  function y() {
      t.cancelAnimationFrame(l),
      o = null,
      a = 0,
      l = 0
  }
  function d() {
      o = null,
      a = 0
  }
  return {
      init: c,
      destroy: h,
      start: f,
      stop: y,
      update: () => e(r),
      render: i
  }
}
function fe(s, t) {
  const e = t === "rtl"
    , i = s === "y"
    , n = i ? "y" : "x"
    , r = i ? "x" : "y"
    , o = !i && e ? -1 : 1
    , a = h()
    , l = u();
  function c(d) {
      const {height: m, width: p} = d;
      return i ? m : p
  }
  function h() {
      return i ? "top" : e ? "right" : "left"
  }
  function u() {
      return i ? "bottom" : e ? "left" : "right"
  }
  function f(d) {
      return d * o
  }
  return {
      scroll: n,
      cross: r,
      startEdge: a,
      endEdge: l,
      measureSize: c,
      direction: f
  }
}
function rt(s=0, t=0) {
  const e = _(s - t);
  function i(c) {
      return c < s
  }
  function n(c) {
      return c > t
  }
  function r(c) {
      return i(c) || n(c)
  }
  function o(c) {
      return r(c) ? i(c) ? s : t : c
  }
  function a(c) {
      return e ? c - e * Math.ceil((c - t) / e) : c
  }
  return {
      length: e,
      max: t,
      min: s,
      constrain: o,
      reachedAny: r,
      reachedMax: n,
      reachedMin: i,
      removeOffset: a
  }
}
function Xt(s, t, e) {
  const {constrain: i} = rt(0, s)
    , n = s + 1;
  let r = o(t);
  function o(f) {
      return e ? _((n + f) % n) : i(f)
  }
  function a() {
      return r
  }
  function l(f) {
      return r = o(f),
      u
  }
  function c(f) {
      return h().set(a() + f)
  }
  function h() {
      return Xt(s, a(), e)
  }
  const u = {
      get: a,
      set: l,
      add: c,
      clone: h
  };
  return u
}
function ge(s, t, e, i, n, r, o, a, l, c, h, u, f, y, d, m, p, g, v) {
  const {cross: S, direction: L} = s
    , O = ["INPUT", "SELECT", "TEXTAREA"]
    , T = {
      passive: !1
  }
    , C = vt()
    , E = vt()
    , x = rt(50, 225).constrain(y.measure(20))
    , z = {
      mouse: 300,
      touch: 400
  }
    , w = {
      mouse: 500,
      touch: 600
  }
    , P = d ? 43 : 25;
  let V = !1
    , N = 0
    , j = 0
    , st = !1
    , Q = !1
    , W = !1
    , Y = !1;
  function ct(b) {
      if (!v)
          return;
      function D(G) {
          (It(v) || v(b, G)) && dt(G)
      }
      const k = t;
      C.add(k, "dragstart", G => G.preventDefault(), T).add(k, "touchmove", () => {}
      , T).add(k, "touchend", () => {}
      ).add(k, "touchstart", D).add(k, "mousedown", D).add(k, "touchcancel", F).add(k, "contextmenu", F).add(k, "click", K, !0)
  }
  function U() {
      C.clear(),
      E.clear()
  }
  function ot() {
      const b = Y ? e : t;
      E.add(b, "touchmove", H, T).add(b, "touchend", F).add(b, "mousemove", H, T).add(b, "mouseup", F)
  }
  function lt(b) {
      const D = b.nodeName || "";
      return O.includes(D)
  }
  function X() {
      return (d ? w : z)[Y ? "mouse" : "touch"]
  }
  function ut(b, D) {
      const k = u.add(kt(b) * -1)
        , G = h.byDistance(b, !d).distance;
      return d || _(b) < x ? G : p && D ? G * .5 : h.byIndex(k.get(), 0).distance
  }
  function dt(b) {
      const D = Dt(b, i);
      Y = D,
      W = d && D && !b.buttons && V,
      V = ht(n.get(), o.get()) >= 2,
      !(D && b.button !== 0) && (lt(b.target) || (st = !0,
      r.pointerDown(b),
      c.useFriction(0).useDuration(0),
      n.set(o),
      ot(),
      N = r.readPoint(b),
      j = r.readPoint(b, S),
      f.emit("pointerDown")))
  }
  function H(b) {
      if (!Dt(b, i) && b.touches.length >= 2)
          return F(b);
      const k = r.readPoint(b)
        , G = r.readPoint(b, S)
        , q = ht(k, N)
        , Z = ht(G, j);
      if (!Q && !Y && (!b.cancelable || (Q = q > Z,
      !Q)))
          return F(b);
      const J = r.pointerMove(b);
      q > m && (W = !0),
      c.useFriction(.3).useDuration(.75),
      a.start(),
      n.add(L(J)),
      b.preventDefault()
  }
  function F(b) {
      const k = h.byDistance(0, !1).index !== u.get()
        , G = r.pointerUp(b) * X()
        , q = ut(L(G), k)
        , Z = ce(G, q)
        , J = P - 10 * Z
        , tt = g + Z / 50;
      Q = !1,
      st = !1,
      E.clear(),
      c.useDuration(J).useFriction(tt),
      l.distance(q, !d),
      Y = !1,
      f.emit("pointerUp")
  }
  function K(b) {
      W && (b.stopPropagation(),
      b.preventDefault(),
      W = !1)
  }
  function $() {
      return st
  }
  return {
      init: ct,
      destroy: U,
      pointerDown: $
  }
}
function he(s, t) {
  let i, n;
  function r(u) {
      return u.timeStamp
  }
  function o(u, f) {
      const d = `client${(f || s.scroll) === "x" ? "X" : "Y"}`;
      return (Dt(u, t) ? u : u.touches[0])[d]
  }
  function a(u) {
      return i = u,
      n = u,
      o(u)
  }
  function l(u) {
      const f = o(u) - o(n)
        , y = r(u) - r(i) > 170;
      return n = u,
      y && (i = u),
      f
  }
  function c(u) {
      if (!i || !n)
          return 0;
      const f = o(n) - o(i)
        , y = r(u) - r(i)
        , d = r(u) - r(n) > 170
        , m = f / y;
      return y && !d && _(m) > .1 ? m : 0
  }
  return {
      pointerDown: a,
      pointerMove: l,
      pointerUp: c,
      readPoint: o
  }
}
function me() {
  function s(e) {
      const {offsetTop: i, offsetLeft: n, offsetWidth: r, offsetHeight: o} = e;
      return {
          top: i,
          right: n + r,
          bottom: i + o,
          left: n,
          width: r,
          height: o
      }
  }
  return {
      measure: s
  }
}
function pe(s) {
  function t(i) {
      return s * (i / 100)
  }
  return {
      measure: t
  }
}
function ve(s, t, e, i, n, r, o) {
  const a = [s].concat(i);
  let l, c, h = [], u = !1;
  function f(p) {
      return n.measureSize(o.measure(p))
  }
  function y(p) {
      if (!r)
          return;
      c = f(s),
      h = i.map(f);
      function g(v) {
          for (const S of v) {
              if (u)
                  return;
              const L = S.target === s
                , O = i.indexOf(S.target)
                , T = L ? c : h[O]
                , C = f(L ? s : i[O]);
              if (_(C - T) >= .5) {
                  p.reInit(),
                  t.emit("resize");
                  break
              }
          }
      }
      l = new ResizeObserver(v => {
          (It(r) || r(p, v)) && g(v)
      }
      ),
      e.requestAnimationFrame( () => {
          a.forEach(v => l.observe(v))
      }
      )
  }
  function d() {
      u = !0,
      l && l.disconnect()
  }
  return {
      init: y,
      destroy: d
  }
}
function ye(s, t, e, i, n, r) {
  let o = 0
    , a = 0
    , l = n
    , c = r
    , h = s.get()
    , u = 0;
  function f(T) {
      const C = T / 1e3
        , E = l * C
        , x = i.get() - s.get()
        , z = !l;
      let w = 0;
      return z ? (o = 0,
      e.set(i),
      s.set(i),
      w = x) : (e.set(s),
      o += x / E,
      o *= c,
      h += o,
      s.add(o * C),
      w = h - u),
      a = kt(w),
      u = h,
      O
  }
  function y() {
      const T = i.get() - t.get();
      return _(T) < .001
  }
  function d() {
      return l
  }
  function m() {
      return a
  }
  function p() {
      return o
  }
  function g() {
      return S(n)
  }
  function v() {
      return L(r)
  }
  function S(T) {
      return l = T,
      O
  }
  function L(T) {
      return c = T,
      O
  }
  const O = {
      direction: m,
      duration: d,
      velocity: p,
      seek: f,
      settled: y,
      useBaseFriction: v,
      useBaseDuration: g,
      useFriction: L,
      useDuration: S
  };
  return O
}
function be(s, t, e, i, n) {
  const r = n.measure(10)
    , o = n.measure(50)
    , a = rt(.1, .99);
  let l = !1;
  function c() {
      return !(l || !s.reachedAny(e.get()) || !s.reachedAny(t.get()))
  }
  function h(y) {
      if (!c())
          return;
      const d = s.reachedMin(t.get()) ? "min" : "max"
        , m = _(s[d] - t.get())
        , p = e.get() - t.get()
        , g = a.constrain(m / o);
      e.subtract(p * g),
      !y && _(p) < r && (e.set(s.constrain(e.get())),
      i.useDuration(25).useBaseFriction())
  }
  function u(y) {
      l = !y
  }
  return {
      shouldConstrain: c,
      constrain: h,
      toggleActive: u
  }
}
function Se(s, t, e, i, n) {
  const r = rt(-t + s, 0)
    , o = u()
    , a = h()
    , l = f();
  function c(d, m) {
      return ht(d, m) < 1
  }
  function h() {
      const d = o[0]
        , m = R(o)
        , p = o.lastIndexOf(d)
        , g = o.indexOf(m) + 1;
      return rt(p, g)
  }
  function u() {
      return e.map( (d, m) => {
          const {min: p, max: g} = r
            , v = r.constrain(d)
            , S = !m
            , L = Pt(e, m);
          return S ? g : L || c(p, v) ? p : c(g, v) ? g : v
      }
      ).map(d => parseFloat(d.toFixed(3)))
  }
  function f() {
      if (t <= s + n)
          return [r.max];
      if (i === "keepSnaps")
          return o;
      const {min: d, max: m} = a;
      return o.slice(d, m)
  }
  return {
      snapsContained: l,
      scrollContainLimit: a
  }
}
function Ie(s, t, e) {
  const i = t[0]
    , n = e ? i - s : R(t);
  return {
      limit: rt(n, i)
  }
}
function Ce(s, t, e, i) {
  const r = t.min + .1
    , o = t.max + .1
    , {reachedMin: a, reachedMax: l} = rt(r, o);
  function c(f) {
      return f === 1 ? l(e.get()) : f === -1 ? a(e.get()) : !1
  }
  function h(f) {
      if (!c(f))
          return;
      const y = s * (f * -1);
      i.forEach(d => d.add(y))
  }
  return {
      loop: h
  }
}
function we(s) {
  const {max: t, length: e} = s;
  function i(r) {
      const o = r - t;
      return e ? o / -e : 0
  }
  return {
      get: i
  }
}
function Ee(s, t, e, i, n) {
  const {startEdge: r, endEdge: o} = s
    , {groupSlides: a} = n
    , l = u().map(t.measure)
    , c = f()
    , h = y();
  function u() {
      return a(i).map(m => R(m)[o] - m[0][r]).map(_)
  }
  function f() {
      return i.map(m => e[r] - m[r]).map(m => -_(m))
  }
  function y() {
      return a(c).map(m => m[0]).map( (m, p) => m + l[p])
  }
  return {
      snaps: c,
      snapsAligned: h
  }
}
function xe(s, t, e, i, n, r) {
  const {groupSlides: o} = n
    , {min: a, max: l} = i
    , c = h();
  function h() {
      const f = o(r)
        , y = !s || t === "keepSnaps";
      return e.length === 1 ? [r] : y ? f : f.slice(a, l).map( (d, m, p) => {
          const g = !m
            , v = Pt(p, m);
          if (g) {
              const S = R(p[0]) + 1;
              return Ut(S)
          }
          if (v) {
              const S = yt(r) - R(p)[0] + 1;
              return Ut(S, R(p)[0])
          }
          return d
      }
      )
  }
  return {
      slideRegistry: c
  }
}
function Le(s, t, e, i, n) {
  const {reachedAny: r, removeOffset: o, constrain: a} = i;
  function l(d) {
      return d.concat().sort( (m, p) => _(m) - _(p))[0]
  }
  function c(d) {
      const m = s ? o(d) : a(d)
        , p = t.map( (v, S) => ({
          diff: h(v - m, 0),
          index: S
      })).sort( (v, S) => _(v.diff) - _(S.diff))
        , {index: g} = p[0];
      return {
          index: g,
          distance: m
      }
  }
  function h(d, m) {
      const p = [d, d + e, d - e];
      if (!s)
          return d;
      if (!m)
          return l(p);
      const g = p.filter(v => kt(v) === m);
      return g.length ? l(g) : R(p) - e
  }
  function u(d, m) {
      const p = t[d] - n.get()
        , g = h(p, m);
      return {
          index: d,
          distance: g
      }
  }
  function f(d, m) {
      const p = n.get() + d
        , {index: g, distance: v} = c(p)
        , S = !s && r(p);
      if (!m || S)
          return {
              index: g,
              distance: d
          };
      const L = t[g] - v
        , O = d + h(L, 0);
      return {
          index: g,
          distance: O
      }
  }
  return {
      byDistance: f,
      byIndex: u,
      shortcut: h
  }
}
function Te(s, t, e, i, n, r, o) {
  function a(u) {
      const f = u.distance
        , y = u.index !== t.get();
      r.add(f),
      f && (i.duration() ? s.start() : (s.update(),
      s.render(1),
      s.update())),
      y && (e.set(t.get()),
      t.set(u.index),
      o.emit("select"))
  }
  function l(u, f) {
      const y = n.byDistance(u, f);
      a(y)
  }
  function c(u, f) {
      const y = t.clone().set(u)
        , d = n.byIndex(y.get(), f);
      a(d)
  }
  return {
      distance: l,
      index: c
  }
}
function Oe(s, t, e, i, n, r, o, a) {
  const l = {
      passive: !0,
      capture: !0
  };
  let c = 0;
  function h(y) {
      if (!a)
          return;
      function d(m) {
          if (new Date().getTime() - c > 10)
              return;
          o.emit("slideFocusStart"),
          s.scrollLeft = 0;
          const v = e.findIndex(S => S.includes(m));
          _t(v) && (n.useDuration(0),
          i.index(v, 0),
          o.emit("slideFocus"))
      }
      r.add(document, "keydown", u, !1),
      t.forEach( (m, p) => {
          r.add(m, "focus", g => {
              (It(a) || a(y, g)) && d(p)
          }
          , l)
      }
      )
  }
  function u(y) {
      y.code === "Tab" && (c = new Date().getTime())
  }
  return {
      init: h
  }
}
function gt(s) {
  let t = s;
  function e() {
      return t
  }
  function i(l) {
      t = o(l)
  }
  function n(l) {
      t += o(l)
  }
  function r(l) {
      t -= o(l)
  }
  function o(l) {
      return _t(l) ? l : l.get()
  }
  return {
      get: e,
      set: i,
      add: n,
      subtract: r
  }
}
function Kt(s, t) {
  const e = s.scroll === "x" ? r : o
    , i = t.style;
  let n = !1;
  function r(u) {
      return `translate3d(${u}px,0px,0px)`
  }
  function o(u) {
      return `translate3d(0px,${u}px,0px)`
  }
  function a(u) {
      n || (i.transform = e(s.direction(u)))
  }
  function l(u) {
      n = !u
  }
  function c() {
      n || (i.transform = "",
      t.getAttribute("style") || t.removeAttribute("style"))
  }
  return {
      clear: c,
      to: a,
      toggleActive: l
  }
}
function De(s, t, e, i, n, r, o, a, l) {
  const h = mt(n)
    , u = mt(n).reverse()
    , f = g().concat(v());
  function y(C, E) {
      return C.reduce( (x, z) => x - n[z], E)
  }
  function d(C, E) {
      return C.reduce( (x, z) => y(x, E) > 0 ? x.concat([z]) : x, [])
  }
  function m(C) {
      return r.map( (E, x) => ({
          start: E - i[x] + .5 + C,
          end: E + t - .5 + C
      }))
  }
  function p(C, E, x) {
      const z = m(E);
      return C.map(w => {
          const P = x ? 0 : -e
            , V = x ? e : 0
            , N = x ? "end" : "start"
            , j = z[w][N];
          return {
              index: w,
              loopPoint: j,
              slideLocation: gt(-1),
              translate: Kt(s, l[w]),
              target: () => a.get() > j ? P : V
          }
      }
      )
  }
  function g() {
      const C = o[0]
        , E = d(u, C);
      return p(E, e, !1)
  }
  function v() {
      const C = t - o[0] - 1
        , E = d(h, C);
      return p(E, -e, !0)
  }
  function S() {
      return f.every( ({index: C}) => {
          const E = h.filter(x => x !== C);
          return y(E, t) <= .1
      }
      )
  }
  function L() {
      f.forEach(C => {
          const {target: E, translate: x, slideLocation: z} = C
            , w = E();
          w !== z.get() && (x.to(w),
          z.set(w))
      }
      )
  }
  function O() {
      f.forEach(C => C.translate.clear())
  }
  return {
      canLoop: S,
      clear: O,
      loop: L,
      loopPoints: f
  }
}
function Me(s, t, e) {
  let i, n = !1;
  function r(l) {
      if (!e)
          return;
      function c(h) {
          for (const u of h)
              if (u.type === "childList") {
                  l.reInit(),
                  t.emit("slidesChanged");
                  break
              }
      }
      i = new MutationObserver(h => {
          n || (It(e) || e(l, h)) && c(h)
      }
      ),
      i.observe(s, {
          childList: !0
      })
  }
  function o() {
      i && i.disconnect(),
      n = !0
  }
  return {
      init: r,
      destroy: o
  }
}
function ze(s, t, e, i) {
  const n = {};
  let r = null, o = null, a, l = !1;
  function c() {
      a = new IntersectionObserver(d => {
          l || (d.forEach(m => {
              const p = t.indexOf(m.target);
              n[p] = m
          }
          ),
          r = null,
          o = null,
          e.emit("slidesInView"))
      }
      ,{
          root: s.parentElement,
          threshold: i
      }),
      t.forEach(d => a.observe(d))
  }
  function h() {
      a && a.disconnect(),
      l = !0
  }
  function u(d) {
      return pt(n).reduce( (m, p) => {
          const g = parseInt(p)
            , {isIntersecting: v} = n[g];
          return (d && v || !d && !v) && m.push(g),
          m
      }
      , [])
  }
  function f(d=!0) {
      if (d && r)
          return r;
      if (!d && o)
          return o;
      const m = u(d);
      return d && (r = m),
      d || (o = m),
      m
  }
  return {
      init: c,
      destroy: h,
      get: f
  }
}
function Ae(s, t, e, i, n, r) {
  const {measureSize: o, startEdge: a, endEdge: l} = s
    , c = e[0] && n
    , h = d()
    , u = m()
    , f = e.map(o)
    , y = p();
  function d() {
      if (!c)
          return 0;
      const v = e[0];
      return _(t[a] - v[a])
  }
  function m() {
      if (!c)
          return 0;
      const v = r.getComputedStyle(R(i));
      return parseFloat(v.getPropertyValue(`margin-${l}`))
  }
  function p() {
      return e.map( (v, S, L) => {
          const O = !S
            , T = Pt(L, S);
          return O ? f[S] + h : T ? f[S] + u : L[S + 1][a] - v[a]
      }
      ).map(_)
  }
  return {
      slideSizes: f,
      slideSizesWithGaps: y,
      startGap: h,
      endGap: u
  }
}
function _e(s, t, e, i, n, r, o, a, l) {
  const {startEdge: c, endEdge: h, direction: u} = s
    , f = _t(e);
  function y(g, v) {
      return mt(g).filter(S => S % v === 0).map(S => g.slice(S, S + v))
  }
  function d(g) {
      return g.length ? mt(g).reduce( (v, S, L) => {
          const O = R(v) || 0
            , T = O === 0
            , C = S === yt(g)
            , E = n[c] - r[O][c]
            , x = n[c] - r[S][h]
            , z = !i && T ? u(o) : 0
            , w = !i && C ? u(a) : 0
            , P = _(x - w - (E + z));
          return L && P > t + l && v.push(S),
          C && v.push(g.length),
          v
      }
      , []).map( (v, S, L) => {
          const O = Math.max(L[S - 1] || 0);
          return g.slice(O, v)
      }
      ) : []
  }
  function m(g) {
      return f ? y(g, e) : d(g)
  }
  return {
      groupSlides: m
  }
}
function ke(s, t, e, i, n, r, o) {
  const {align: a, axis: l, direction: c, startIndex: h, loop: u, duration: f, dragFree: y, dragThreshold: d, inViewThreshold: m, slidesToScroll: p, skipSnaps: g, containScroll: v, watchResize: S, watchSlides: L, watchDrag: O, watchFocus: T} = r
    , C = 2
    , E = me()
    , x = E.measure(t)
    , z = e.map(E.measure)
    , w = fe(l, c)
    , P = w.measureSize(x)
    , V = pe(P)
    , N = ue(a, P)
    , j = !u && !!v
    , st = u || !!v
    , {slideSizes: Q, slideSizesWithGaps: W, startGap: Y, endGap: ct} = Ae(w, x, z, e, st, n)
    , U = _e(w, P, p, u, x, z, Y, ct, C)
    , {snaps: ot, snapsAligned: lt} = Ee(w, N, x, z, U)
    , X = -R(ot) + R(W)
    , {snapsContained: ut, scrollContainLimit: dt} = Se(P, X, lt, v, C)
    , H = j ? ut : lt
    , {limit: F} = Ie(X, H, u)
    , K = Xt(yt(H), h, u)
    , $ = K.clone()
    , A = mt(e)
    , b = ({dragHandler: et, scrollBody: xt, scrollBounds: Lt, options: {loop: St}}, Tt) => {
      St || Lt.constrain(et.pointerDown()),
      xt.seek(Tt)
  }
    , D = ({scrollBody: et, translate: xt, location: Lt, offsetLocation: St, scrollLooper: Tt, slideLooper: se, dragHandler: ne, animation: re, eventHandler: Ht, scrollBounds: oe, options: {loop: Vt}}, Nt) => {
      const $t = et.settled()
        , le = !oe.shouldConstrain()
        , Rt = Vt ? $t : $t && le;
      Rt && !ne.pointerDown() && (re.stop(),
      Ht.emit("settle")),
      Rt || Ht.emit("scroll");
      const ae = Lt.get() * Nt + J.get() * (1 - Nt);
      St.set(ae),
      Vt && (Tt.loop(et.direction()),
      se.loop()),
      xt.to(St.get())
  }
    , k = de(i, n, et => b(Et, et), et => D(Et, et))
    , G = .68
    , q = H[K.get()]
    , Z = gt(q)
    , J = gt(q)
    , tt = gt(q)
    , nt = gt(q)
    , ft = ye(Z, tt, J, nt, f, G)
    , Ct = Le(u, H, X, F, nt)
    , wt = Te(k, K, $, ft, Ct, nt, o)
    , Bt = we(F)
    , Ft = vt()
    , ee = ze(t, e, o, m)
    , {slideRegistry: Gt} = xe(j, v, H, dt, U, A)
    , ie = Oe(s, e, Gt, wt, ft, Ft, o, T)
    , Et = {
      ownerDocument: i,
      ownerWindow: n,
      eventHandler: o,
      containerRect: x,
      slideRects: z,
      animation: k,
      axis: w,
      dragHandler: ge(w, s, i, n, nt, he(w, n), Z, k, wt, ft, Ct, K, o, V, y, d, g, G, O),
      eventStore: Ft,
      percentOfView: V,
      index: K,
      indexPrevious: $,
      limit: F,
      location: Z,
      offsetLocation: tt,
      previousLocation: J,
      options: r,
      resizeHandler: ve(t, o, n, e, w, S, E),
      scrollBody: ft,
      scrollBounds: be(F, tt, nt, ft, V),
      scrollLooper: Ce(X, F, tt, [Z, tt, J, nt]),
      scrollProgress: Bt,
      scrollSnapList: H.map(Bt.get),
      scrollSnaps: H,
      scrollTarget: Ct,
      scrollTo: wt,
      slideLooper: De(w, P, X, Q, W, ot, H, tt, e),
      slideFocus: ie,
      slidesHandler: Me(t, o, L),
      slidesInView: ee,
      slideIndexes: A,
      slideRegistry: Gt,
      slidesToScroll: U,
      target: nt,
      translate: Kt(w, t)
  };
  return Et
}
function Pe() {
  let s = {}, t;
  function e(c) {
      t = c
  }
  function i(c) {
      return s[c] || []
  }
  function n(c) {
      return i(c).forEach(h => h(t, c)),
      l
  }
  function r(c, h) {
      return s[c] = i(c).concat([h]),
      l
  }
  function o(c, h) {
      return s[c] = i(c).filter(u => u !== h),
      l
  }
  function a() {
      s = {}
  }
  const l = {
      init: e,
      emit: n,
      off: o,
      on: r,
      clear: a
  };
  return l
}
const Be = {
  align: "center",
  axis: "x",
  container: null,
  slides: null,
  containScroll: "trimSnaps",
  direction: "ltr",
  slidesToScroll: 1,
  inViewThreshold: 0,
  breakpoints: {},
  dragFree: !1,
  dragThreshold: 10,
  loop: !1,
  skipSnaps: !1,
  duration: 25,
  startIndex: 0,
  active: !0,
  watchDrag: !0,
  watchResize: !0,
  watchSlides: !0,
  watchFocus: !0
};
function Fe(s) {
  function t(r, o) {
      return Yt(r, o || {})
  }
  function e(r) {
      const o = r.breakpoints || {}
        , a = pt(o).filter(l => s.matchMedia(l).matches).map(l => o[l]).reduce( (l, c) => t(l, c), {});
      return t(r, a)
  }
  function i(r) {
      return r.map(o => pt(o.breakpoints || {})).reduce( (o, a) => o.concat(a), []).map(s.matchMedia)
  }
  return {
      mergeOptions: t,
      optionsAtMedia: e,
      optionsMediaQueries: i
  }
}
function Ge(s) {
  let t = [];
  function e(r, o) {
      return t = o.filter( ({options: a}) => s.optionsAtMedia(a).active !== !1),
      t.forEach(a => a.init(r, s)),
      o.reduce( (a, l) => Object.assign(a, {
          [l.name]: l
      }), {})
  }
  function i() {
      t = t.filter(r => r.destroy())
  }
  return {
      init: e,
      destroy: i
  }
}
function bt(s, t, e) {
  const i = s.ownerDocument
    , n = i.defaultView
    , r = Fe(n)
    , o = Ge(r)
    , a = vt()
    , l = Pe()
    , {mergeOptions: c, optionsAtMedia: h, optionsMediaQueries: u} = r
    , {on: f, off: y, emit: d} = l
    , m = w;
  let p = !1, g, v = c(Be, bt.globalOptions), S = c(v), L = [], O, T, C;
  function E() {
      const {container: A, slides: b} = S;
      T = (Ot(A) ? s.querySelector(A) : A) || s.children[0];
      const k = Ot(b) ? T.querySelectorAll(b) : b;
      C = [].slice.call(k || T.children)
  }
  function x(A) {
      const b = ke(s, T, C, i, n, A, l);
      if (A.loop && !b.slideLooper.canLoop()) {
          const D = Object.assign({}, A, {
              loop: !1
          });
          return x(D)
      }
      return b
  }
  function z(A, b) {
      p || (v = c(v, A),
      S = h(v),
      L = b || L,
      E(),
      g = x(S),
      u([v, ...L.map( ({options: D}) => D)]).forEach(D => a.add(D, "change", w)),
      S.active && (g.translate.to(g.location.get()),
      g.animation.init(),
      g.slidesInView.init(),
      g.slideFocus.init($),
      g.eventHandler.init($),
      g.resizeHandler.init($),
      g.slidesHandler.init($),
      g.options.loop && g.slideLooper.loop(),
      T.offsetParent && C.length && g.dragHandler.init($),
      O = o.init($, L)))
  }
  function w(A, b) {
      const D = U();
      P(),
      z(c({
          startIndex: D
      }, A), b),
      l.emit("reInit")
  }
  function P() {
      g.dragHandler.destroy(),
      g.eventStore.clear(),
      g.translate.clear(),
      g.slideLooper.clear(),
      g.resizeHandler.destroy(),
      g.slidesHandler.destroy(),
      g.slidesInView.destroy(),
      g.animation.destroy(),
      o.destroy(),
      a.clear()
  }
  function V() {
      p || (p = !0,
      a.clear(),
      P(),
      l.emit("destroy"),
      l.clear())
  }
  function N(A, b, D) {
      !S.active || p || (g.scrollBody.useBaseFriction().useDuration(b === !0 ? 0 : S.duration),
      g.scrollTo.index(A, D || 0))
  }
  function j(A) {
      const b = g.index.add(1).get();
      N(b, A, -1)
  }
  function st(A) {
      const b = g.index.add(-1).get();
      N(b, A, 1)
  }
  function Q() {
      return g.index.add(1).get() !== U()
  }
  function W() {
      return g.index.add(-1).get() !== U()
  }
  function Y() {
      return g.scrollSnapList
  }
  function ct() {
      return g.scrollProgress.get(g.location.get())
  }
  function U() {
      return g.index.get()
  }
  function ot() {
      return g.indexPrevious.get()
  }
  function lt() {
      return g.slidesInView.get()
  }
  function X() {
      return g.slidesInView.get(!1)
  }
  function ut() {
      return O
  }
  function dt() {
      return g
  }
  function H() {
      return s
  }
  function F() {
      return T
  }
  function K() {
      return C
  }
  const $ = {
      canScrollNext: Q,
      canScrollPrev: W,
      containerNode: F,
      internalEngine: dt,
      destroy: V,
      off: y,
      on: f,
      emit: d,
      plugins: ut,
      previousScrollSnap: ot,
      reInit: m,
      rootNode: H,
      scrollNext: j,
      scrollPrev: st,
      scrollProgress: ct,
      scrollSnapList: Y,
      scrollTo: N,
      selectedScrollSnap: U,
      slideNodes: K,
      slidesInView: lt,
      slidesNotInView: X
  };
  return z(t, e),
  setTimeout( () => l.emit("init"), 0),
  $
}
bt.globalOptions = void 0;
/*!
* lightgallery | 2.7.2 | September 20th 2023
* http://www.lightgalleryjs.com/
* Copyright (c) 2020 Sachin Neravath;
* @license GPLv3
*/
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var it = function() {
  return it = Object.assign || function(t) {
      for (var e, i = 1, n = arguments.length; i < n; i++) {
          e = arguments[i];
          for (var r in e)
              Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
      }
      return t
  }
  ,
  it.apply(this, arguments)
};
function He() {
  for (var s = 0, t = 0, e = arguments.length; t < e; t++)
      s += arguments[t].length;
  for (var i = Array(s), n = 0, t = 0; t < e; t++)
      for (var r = arguments[t], o = 0, a = r.length; o < a; o++,
      n++)
          i[n] = r[o];
  return i
}
var M = {
  afterAppendSlide: "lgAfterAppendSlide",
  init: "lgInit",
  hasVideo: "lgHasVideo",
  containerResize: "lgContainerResize",
  updateSlides: "lgUpdateSlides",
  afterAppendSubHtml: "lgAfterAppendSubHtml",
  beforeOpen: "lgBeforeOpen",
  afterOpen: "lgAfterOpen",
  slideItemLoad: "lgSlideItemLoad",
  beforeSlide: "lgBeforeSlide",
  afterSlide: "lgAfterSlide",
  posterClick: "lgPosterClick",
  dragStart: "lgDragStart",
  dragMove: "lgDragMove",
  dragEnd: "lgDragEnd",
  beforeNextSlide: "lgBeforeNextSlide",
  beforePrevSlide: "lgBeforePrevSlide",
  beforeClose: "lgBeforeClose",
  afterClose: "lgAfterClose",
  rotateLeft: "lgRotateLeft",
  rotateRight: "lgRotateRight",
  flipHorizontal: "lgFlipHorizontal",
  flipVertical: "lgFlipVertical",
  autoplay: "lgAutoplay",
  autoplayStart: "lgAutoplayStart",
  autoplayStop: "lgAutoplayStop"
}
, Ve = {
  mode: "lg-slide",
  easing: "ease",
  speed: 400,
  licenseKey: "0000-0000-000-0000",
  height: "100%",
  width: "100%",
  addClass: "",
  startClass: "lg-start-zoom",
  backdropDuration: 300,
  container: "",
  startAnimationDuration: 400,
  zoomFromOrigin: !0,
  hideBarsDelay: 0,
  showBarsAfter: 1e4,
  slideDelay: 0,
  supportLegacyBrowser: !0,
  allowMediaOverlap: !1,
  videoMaxSize: "1280-720",
  loadYouTubePoster: !0,
  defaultCaptionHeight: 0,
  ariaLabelledby: "",
  ariaDescribedby: "",
  resetScrollPosition: !0,
  hideScrollbar: !1,
  closable: !0,
  swipeToClose: !0,
  closeOnTap: !0,
  showCloseIcon: !0,
  showMaximizeIcon: !1,
  loop: !0,
  escKey: !0,
  keyPress: !0,
  trapFocus: !0,
  controls: !0,
  slideEndAnimation: !0,
  hideControlOnEnd: !1,
  mousewheel: !1,
  getCaptionFromTitleOrAlt: !0,
  appendSubHtmlTo: ".lg-sub-html",
  subHtmlSelectorRelative: !1,
  preload: 2,
  numberOfSlideItemsInDom: 10,
  selector: "",
  selectWithin: "",
  nextHtml: "",
  prevHtml: "",
  index: 0,
  iframeWidth: "100%",
  iframeHeight: "100%",
  iframeMaxWidth: "100%",
  iframeMaxHeight: "100%",
  download: !0,
  counter: !0,
  appendCounterTo: ".lg-toolbar",
  swipeThreshold: 50,
  enableSwipe: !0,
  enableDrag: !0,
  dynamic: !1,
  dynamicEl: [],
  extraProps: [],
  exThumbImage: "",
  isMobile: void 0,
  mobileSettings: {
      controls: !1,
      showCloseIcon: !1,
      download: !1
  },
  plugins: [],
  strings: {
      closeGallery: "Close gallery",
      toggleMaximize: "Toggle maximize",
      previousSlide: "Previous slide",
      nextSlide: "Next slide",
      download: "Download",
      playVideo: "Play video",
      mediaLoadingFailed: "Oops... Failed to load content..."
  }
};
function Ne() {
  (function() {
      if (typeof window.CustomEvent == "function")
          return !1;
      function s(t, e) {
          e = e || {
              bubbles: !1,
              cancelable: !1,
              detail: null
          };
          var i = document.createEvent("CustomEvent");
          return i.initCustomEvent(t, e.bubbles, e.cancelable, e.detail),
          i
      }
      window.CustomEvent = s
  }
  )(),
  function() {
      Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector)
  }()
}
var Zt = function() {
  function s(t) {
      return this.cssVenderPrefixes = ["TransitionDuration", "TransitionTimingFunction", "Transform", "Transition"],
      this.selector = this._getSelector(t),
      this.firstElement = this._getFirstEl(),
      this
  }
  return s.generateUUID = function() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
          var e = Math.random() * 16 | 0
            , i = t == "x" ? e : e & 3 | 8;
          return i.toString(16)
      })
  }
  ,
  s.prototype._getSelector = function(t, e) {
      if (e === void 0 && (e = document),
      typeof t != "string")
          return t;
      e = e || document;
      var i = t.substring(0, 1);
      return i === "#" ? e.querySelector(t) : e.querySelectorAll(t)
  }
  ,
  s.prototype._each = function(t) {
      return this.selector ? (this.selector.length !== void 0 ? [].forEach.call(this.selector, t) : t(this.selector, 0),
      this) : this
  }
  ,
  s.prototype._setCssVendorPrefix = function(t, e, i) {
      var n = e.replace(/-([a-z])/gi, function(r, o) {
          return o.toUpperCase()
      });
      this.cssVenderPrefixes.indexOf(n) !== -1 ? (t.style[n.charAt(0).toLowerCase() + n.slice(1)] = i,
      t.style["webkit" + n] = i,
      t.style["moz" + n] = i,
      t.style["ms" + n] = i,
      t.style["o" + n] = i) : t.style[n] = i
  }
  ,
  s.prototype._getFirstEl = function() {
      return this.selector && this.selector.length !== void 0 ? this.selector[0] : this.selector
  }
  ,
  s.prototype.isEventMatched = function(t, e) {
      var i = e.split(".");
      return t.split(".").filter(function(n) {
          return n
      }).every(function(n) {
          return i.indexOf(n) !== -1
      })
  }
  ,
  s.prototype.attr = function(t, e) {
      return e === void 0 ? this.firstElement ? this.firstElement.getAttribute(t) : "" : (this._each(function(i) {
          i.setAttribute(t, e)
      }),
      this)
  }
  ,
  s.prototype.find = function(t) {
      return I(this._getSelector(t, this.selector))
  }
  ,
  s.prototype.first = function() {
      return this.selector && this.selector.length !== void 0 ? I(this.selector[0]) : I(this.selector)
  }
  ,
  s.prototype.eq = function(t) {
      return I(this.selector[t])
  }
  ,
  s.prototype.parent = function() {
      return I(this.selector.parentElement)
  }
  ,
  s.prototype.get = function() {
      return this._getFirstEl()
  }
  ,
  s.prototype.removeAttr = function(t) {
      var e = t.split(" ");
      return this._each(function(i) {
          e.forEach(function(n) {
              return i.removeAttribute(n)
          })
      }),
      this
  }
  ,
  s.prototype.wrap = function(t) {
      if (!this.firstElement)
          return this;
      var e = document.createElement("div");
      return e.className = t,
      this.firstElement.parentNode.insertBefore(e, this.firstElement),
      this.firstElement.parentNode.removeChild(this.firstElement),
      e.appendChild(this.firstElement),
      this
  }
  ,
  s.prototype.addClass = function(t) {
      return t === void 0 && (t = ""),
      this._each(function(e) {
          t.split(" ").forEach(function(i) {
              i && e.classList.add(i)
          })
      }),
      this
  }
  ,
  s.prototype.removeClass = function(t) {
      return this._each(function(e) {
          t.split(" ").forEach(function(i) {
              i && e.classList.remove(i)
          })
      }),
      this
  }
  ,
  s.prototype.hasClass = function(t) {
      return this.firstElement ? this.firstElement.classList.contains(t) : !1
  }
  ,
  s.prototype.hasAttribute = function(t) {
      return this.firstElement ? this.firstElement.hasAttribute(t) : !1
  }
  ,
  s.prototype.toggleClass = function(t) {
      return this.firstElement ? (this.hasClass(t) ? this.removeClass(t) : this.addClass(t),
      this) : this
  }
  ,
  s.prototype.css = function(t, e) {
      var i = this;
      return this._each(function(n) {
          i._setCssVendorPrefix(n, t, e)
      }),
      this
  }
  ,
  s.prototype.on = function(t, e) {
      var i = this;
      return this.selector ? (t.split(" ").forEach(function(n) {
          Array.isArray(s.eventListeners[n]) || (s.eventListeners[n] = []),
          s.eventListeners[n].push(e),
          i.selector.addEventListener(n.split(".")[0], e)
      }),
      this) : this
  }
  ,
  s.prototype.once = function(t, e) {
      var i = this;
      return this.on(t, function() {
          i.off(t),
          e(t)
      }),
      this
  }
  ,
  s.prototype.off = function(t) {
      var e = this;
      return this.selector ? (Object.keys(s.eventListeners).forEach(function(i) {
          e.isEventMatched(t, i) && (s.eventListeners[i].forEach(function(n) {
              e.selector.removeEventListener(i.split(".")[0], n)
          }),
          s.eventListeners[i] = [])
      }),
      this) : this
  }
  ,
  s.prototype.trigger = function(t, e) {
      if (!this.firstElement)
          return this;
      var i = new CustomEvent(t.split(".")[0],{
          detail: e || null
      });
      return this.firstElement.dispatchEvent(i),
      this
  }
  ,
  s.prototype.load = function(t) {
      var e = this;
      return fetch(t).then(function(i) {
          return i.text()
      }).then(function(i) {
          e.selector.innerHTML = i
      }),
      this
  }
  ,
  s.prototype.html = function(t) {
      return t === void 0 ? this.firstElement ? this.firstElement.innerHTML : "" : (this._each(function(e) {
          e.innerHTML = t
      }),
      this)
  }
  ,
  s.prototype.append = function(t) {
      return this._each(function(e) {
          typeof t == "string" ? e.insertAdjacentHTML("beforeend", t) : e.appendChild(t)
      }),
      this
  }
  ,
  s.prototype.prepend = function(t) {
      return this._each(function(e) {
          e.insertAdjacentHTML("afterbegin", t)
      }),
      this
  }
  ,
  s.prototype.remove = function() {
      return this._each(function(t) {
          t.parentNode.removeChild(t)
      }),
      this
  }
  ,
  s.prototype.empty = function() {
      return this._each(function(t) {
          t.innerHTML = ""
      }),
      this
  }
  ,
  s.prototype.scrollTop = function(t) {
      return t !== void 0 ? (document.body.scrollTop = t,
      document.documentElement.scrollTop = t,
      this) : window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
  }
  ,
  s.prototype.scrollLeft = function(t) {
      return t !== void 0 ? (document.body.scrollLeft = t,
      document.documentElement.scrollLeft = t,
      this) : window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
  }
  ,
  s.prototype.offset = function() {
      if (!this.firstElement)
          return {
              left: 0,
              top: 0
          };
      var t = this.firstElement.getBoundingClientRect()
        , e = I("body").style().marginLeft;
      return {
          left: t.left - parseFloat(e) + this.scrollLeft(),
          top: t.top + this.scrollTop()
      }
  }
  ,
  s.prototype.style = function() {
      return this.firstElement ? this.firstElement.currentStyle || window.getComputedStyle(this.firstElement) : {}
  }
  ,
  s.prototype.width = function() {
      var t = this.style();
      return this.firstElement.clientWidth - parseFloat(t.paddingLeft) - parseFloat(t.paddingRight)
  }
  ,
  s.prototype.height = function() {
      var t = this.style();
      return this.firstElement.clientHeight - parseFloat(t.paddingTop) - parseFloat(t.paddingBottom)
  }
  ,
  s.eventListeners = {},
  s
}();
function I(s) {
  return Ne(),
  new Zt(s)
}
var $e = ["src", "sources", "subHtml", "subHtmlUrl", "html", "video", "poster", "slideName", "responsive", "srcset", "sizes", "iframe", "downloadUrl", "download", "width", "facebookShareUrl", "tweetText", "iframeTitle", "twitterShareUrl", "pinterestShareUrl", "pinterestText", "fbHtml", "disqusIdentifier", "disqusUrl"];
function Re(s) {
  return s === "href" ? "src" : (s = s.replace("data-", ""),
  s = s.charAt(0).toLowerCase() + s.slice(1),
  s = s.replace(/-([a-z])/g, function(t) {
      return t[1].toUpperCase()
  }),
  s)
}
var B = {
  getSize: function(s, t, e, i) {
      e === void 0 && (e = 0);
      var n = I(s)
        , r = n.attr("data-lg-size") || i;
      if (r) {
          var o = r.split(",");
          if (o[1])
              for (var a = window.innerWidth, l = 0; l < o.length; l++) {
                  var c = o[l]
                    , h = parseInt(c.split("-")[2], 10);
                  if (h > a) {
                      r = c;
                      break
                  }
                  l === o.length - 1 && (r = c)
              }
          var u = r.split("-")
            , f = parseInt(u[0], 10)
            , y = parseInt(u[1], 10)
            , d = t.width()
            , m = t.height() - e
            , p = Math.min(d, f)
            , g = Math.min(m, y)
            , v = Math.min(p / f, g / y);
          return {
              width: f * v,
              height: y * v
          }
      }
  },
  getTransform: function(s, t, e, i, n) {
      if (n) {
          var r = I(s).find("img").first();
          if (r.get()) {
              var o = t.get().getBoundingClientRect()
                , a = o.width
                , l = t.height() - (e + i)
                , c = r.width()
                , h = r.height()
                , u = r.style()
                , f = (a - c) / 2 - r.offset().left + (parseFloat(u.paddingLeft) || 0) + (parseFloat(u.borderLeft) || 0) + I(window).scrollLeft() + o.left
                , y = (l - h) / 2 - r.offset().top + (parseFloat(u.paddingTop) || 0) + (parseFloat(u.borderTop) || 0) + I(window).scrollTop() + e
                , d = c / n.width
                , m = h / n.height
                , p = "translate3d(" + (f *= -1) + "px, " + (y *= -1) + "px, 0) scale3d(" + d + ", " + m + ", 1)";
              return p
          }
      }
  },
  getIframeMarkup: function(s, t, e, i, n, r) {
      var o = r ? 'title="' + r + '"' : "";
      return '<div class="lg-video-cont lg-has-iframe" style="width:' + s + "; max-width:" + e + "; height: " + t + "; max-height:" + i + `">
                  <iframe class="lg-object" frameborder="0" ` + o + ' src="' + n + `"  allowfullscreen="true"></iframe>
              </div>`
  },
  getImgMarkup: function(s, t, e, i, n, r) {
      var o = i ? 'srcset="' + i + '"' : ""
        , a = n ? 'sizes="' + n + '"' : ""
        , l = "<img " + e + " " + o + "  " + a + ' class="lg-object lg-image" data-index="' + s + '" src="' + t + '" />'
        , c = "";
      if (r) {
          var h = typeof r == "string" ? JSON.parse(r) : r;
          c = h.map(function(u) {
              var f = "";
              return Object.keys(u).forEach(function(y) {
                  f += " " + y + '="' + u[y] + '"'
              }),
              "<source " + f + "></source>"
          })
      }
      return "" + c + l
  },
  getResponsiveSrc: function(s) {
      for (var t = [], e = [], i = "", n = 0; n < s.length; n++) {
          var r = s[n].split(" ");
          r[0] === "" && r.splice(0, 1),
          e.push(r[0]),
          t.push(r[1])
      }
      for (var o = window.innerWidth, a = 0; a < t.length; a++)
          if (parseInt(t[a], 10) > o) {
              i = e[a];
              break
          }
      return i
  },
  isImageLoaded: function(s) {
      return !(!s || !s.complete || s.naturalWidth === 0)
  },
  getVideoPosterMarkup: function(s, t, e, i, n) {
      var r = "";
      return n && n.youtube ? r = "lg-has-youtube" : n && n.vimeo ? r = "lg-has-vimeo" : r = "lg-has-html5",
      '<div class="lg-video-cont ' + r + '" style="' + e + `">
              <div class="lg-video-play-button">
              <svg
                  viewBox="0 0 20 20"
                  preserveAspectRatio="xMidYMid"
                  focusable="false"
                  aria-labelledby="` + i + `"
                  role="img"
                  class="lg-video-play-icon"
              >
                  <title>` + i + `</title>
                  <polygon class="lg-video-play-icon-inner" points="1,0 20,10 1,20"></polygon>
              </svg>
              <svg class="lg-video-play-icon-bg" viewBox="0 0 50 50" focusable="false">
                  <circle cx="50%" cy="50%" r="20"></circle></svg>
              <svg class="lg-video-play-icon-circle" viewBox="0 0 50 50" focusable="false">
                  <circle cx="50%" cy="50%" r="20"></circle>
              </svg>
          </div>
          ` + (t || "") + `
          <img class="lg-object lg-video-poster" src="` + s + `" />
      </div>`
  },
  getFocusableElements: function(s) {
      var t = s.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])')
        , e = [].filter.call(t, function(i) {
          var n = window.getComputedStyle(i);
          return n.display !== "none" && n.visibility !== "hidden"
      });
      return e
  },
  getDynamicOptions: function(s, t, e, i) {
      var n = []
        , r = He($e, t);
      return [].forEach.call(s, function(o) {
          for (var a = {}, l = 0; l < o.attributes.length; l++) {
              var c = o.attributes[l];
              if (c.specified) {
                  var h = Re(c.name)
                    , u = "";
                  r.indexOf(h) > -1 && (u = h),
                  u && (a[u] = c.value)
              }
          }
          var f = I(o)
            , y = f.find("img").first().attr("alt")
            , d = f.attr("title")
            , m = i ? f.attr(i) : f.find("img").first().attr("src");
          a.thumb = m,
          e && !a.subHtml && (a.subHtml = d || y || ""),
          a.alt = y || d || "",
          n.push(a)
      }),
      n
  },
  isMobile: function() {
      return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  },
  isVideo: function(s, t, e) {
      if (!s) {
          if (t)
              return {
                  html5: !0
              };
          console.error("lightGallery :- data-src is not provided on slide item " + (e + 1) + ". Please make sure the selector property is properly configured. More info - https://www.lightgalleryjs.com/demos/html-markup/");
          return
      }
      var i = s.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)([\&|?][\S]*)*/i)
        , n = s.match(/\/\/(?:www\.)?(?:player\.)?vimeo.com\/(?:video\/)?([0-9a-z\-_]+)(.*)?/i)
        , r = s.match(/https?:\/\/(.+)?(wistia\.com|wi\.st)\/(medias|embed)\/([0-9a-z\-_]+)(.*)/);
      if (i)
          return {
              youtube: i
          };
      if (n)
          return {
              vimeo: n
          };
      if (r)
          return {
              wistia: r
          }
  }
}
, qt = 0
, je = function() {
  function s(t, e) {
      if (this.lgOpened = !1,
      this.index = 0,
      this.plugins = [],
      this.lGalleryOn = !1,
      this.lgBusy = !1,
      this.currentItemsInDom = [],
      this.prevScrollTop = 0,
      this.bodyPaddingRight = 0,
      this.isDummyImageRemoved = !1,
      this.dragOrSwipeEnabled = !1,
      this.mediaContainerPosition = {
          top: 0,
          bottom: 0
      },
      !t)
          return this;
      if (qt++,
      this.lgId = qt,
      this.el = t,
      this.LGel = I(t),
      this.generateSettings(e),
      this.buildModules(),
      this.settings.dynamic && this.settings.dynamicEl !== void 0 && !Array.isArray(this.settings.dynamicEl))
          throw "When using dynamic mode, you must also define dynamicEl as an Array.";
      return this.galleryItems = this.getItems(),
      this.normalizeSettings(),
      this.init(),
      this.validateLicense(),
      this
  }
  return s.prototype.generateSettings = function(t) {
      if (this.settings = it(it({}, Ve), t),
      this.settings.isMobile && typeof this.settings.isMobile == "function" ? this.settings.isMobile() : B.isMobile()) {
          var e = it(it({}, this.settings.mobileSettings), this.settings.mobileSettings);
          this.settings = it(it({}, this.settings), e)
      }
  }
  ,
  s.prototype.normalizeSettings = function() {
      this.settings.slideEndAnimation && (this.settings.hideControlOnEnd = !1),
      this.settings.closable || (this.settings.swipeToClose = !1),
      this.zoomFromOrigin = this.settings.zoomFromOrigin,
      this.settings.dynamic && (this.zoomFromOrigin = !1),
      this.settings.container || (this.settings.container = document.body),
      this.settings.preload = Math.min(this.settings.preload, this.galleryItems.length)
  }
  ,
  s.prototype.init = function() {
      var t = this;
      this.addSlideVideoInfo(this.galleryItems),
      this.buildStructure(),
      this.LGel.trigger(M.init, {
          instance: this
      }),
      this.settings.keyPress && this.keyPress(),
      setTimeout(function() {
          t.enableDrag(),
          t.enableSwipe(),
          t.triggerPosterClick()
      }, 50),
      this.arrow(),
      this.settings.mousewheel && this.mousewheel(),
      this.settings.dynamic || this.openGalleryOnItemClick()
  }
  ,
  s.prototype.openGalleryOnItemClick = function() {
      for (var t = this, e = function(r) {
          var o = i.items[r]
            , a = I(o)
            , l = Zt.generateUUID();
          a.attr("data-lg-id", l).on("click.lgcustom-item-" + l, function(c) {
              c.preventDefault();
              var h = t.settings.index || r;
              t.openGallery(h, o)
          })
      }, i = this, n = 0; n < this.items.length; n++)
          e(n)
  }
  ,
  s.prototype.buildModules = function() {
      var t = this;
      this.settings.plugins.forEach(function(e) {
          t.plugins.push(new e(t,I))
      })
  }
  ,
  s.prototype.validateLicense = function() {
      this.settings.licenseKey ? this.settings.licenseKey === "0000-0000-000-0000" && console.warn("lightGallery: " + this.settings.licenseKey + " license key is not valid for production use") : console.error("Please provide a valid license key")
  }
  ,
  s.prototype.getSlideItem = function(t) {
      return I(this.getSlideItemId(t))
  }
  ,
  s.prototype.getSlideItemId = function(t) {
      return "#lg-item-" + this.lgId + "-" + t
  }
  ,
  s.prototype.getIdName = function(t) {
      return t + "-" + this.lgId
  }
  ,
  s.prototype.getElementById = function(t) {
      return I("#" + this.getIdName(t))
  }
  ,
  s.prototype.manageSingleSlideClassName = function() {
      this.galleryItems.length < 2 ? this.outer.addClass("lg-single-item") : this.outer.removeClass("lg-single-item")
  }
  ,
  s.prototype.buildStructure = function() {
      var t = this
        , e = this.$container && this.$container.get();
      if (!e) {
          var i = ""
            , n = "";
          this.settings.controls && (i = '<button type="button" id="' + this.getIdName("lg-prev") + '" aria-label="' + this.settings.strings.previousSlide + '" class="lg-prev lg-icon"> ' + this.settings.prevHtml + ` </button>
              <button type="button" id="` + this.getIdName("lg-next") + '" aria-label="' + this.settings.strings.nextSlide + '" class="lg-next lg-icon"> ' + this.settings.nextHtml + " </button>"),
          this.settings.appendSubHtmlTo !== ".lg-item" && (n = '<div class="lg-sub-html" role="status" aria-live="polite"></div>');
          var r = "";
          this.settings.allowMediaOverlap && (r += "lg-media-overlap ");
          var o = this.settings.ariaLabelledby ? 'aria-labelledby="' + this.settings.ariaLabelledby + '"' : ""
            , a = this.settings.ariaDescribedby ? 'aria-describedby="' + this.settings.ariaDescribedby + '"' : ""
            , l = "lg-container " + this.settings.addClass + " " + (document.body !== this.settings.container ? "lg-inline" : "")
            , c = this.settings.closable && this.settings.showCloseIcon ? '<button type="button" aria-label="' + this.settings.strings.closeGallery + '" id="' + this.getIdName("lg-close") + '" class="lg-close lg-icon"></button>' : ""
            , h = this.settings.showMaximizeIcon ? '<button type="button" aria-label="' + this.settings.strings.toggleMaximize + '" id="' + this.getIdName("lg-maximize") + '" class="lg-maximize lg-icon"></button>' : ""
            , u = `
      <div class="` + l + '" id="' + this.getIdName("lg-container") + '" tabindex="-1" aria-modal="true" ' + o + " " + a + ` role="dialog"
      >
          <div id="` + this.getIdName("lg-backdrop") + `" class="lg-backdrop"></div>

          <div id="` + this.getIdName("lg-outer") + '" class="lg-outer lg-use-css3 lg-css3 lg-hide-items ' + r + ` ">

            <div id="` + this.getIdName("lg-content") + `" class="lg-content">
              <div id="` + this.getIdName("lg-inner") + `" class="lg-inner">
              </div>
              ` + i + `
            </div>
              <div id="` + this.getIdName("lg-toolbar") + `" class="lg-toolbar lg-group">
                  ` + h + `
                  ` + c + `
                  </div>
                  ` + (this.settings.appendSubHtmlTo === ".lg-outer" ? n : "") + `
              <div id="` + this.getIdName("lg-components") + `" class="lg-components">
                  ` + (this.settings.appendSubHtmlTo === ".lg-sub-html" ? n : "") + `
              </div>
          </div>
      </div>
      `;
          I(this.settings.container).append(u),
          document.body !== this.settings.container && I(this.settings.container).css("position", "relative"),
          this.outer = this.getElementById("lg-outer"),
          this.$lgComponents = this.getElementById("lg-components"),
          this.$backdrop = this.getElementById("lg-backdrop"),
          this.$container = this.getElementById("lg-container"),
          this.$inner = this.getElementById("lg-inner"),
          this.$content = this.getElementById("lg-content"),
          this.$toolbar = this.getElementById("lg-toolbar"),
          this.$backdrop.css("transition-duration", this.settings.backdropDuration + "ms");
          var f = this.settings.mode + " ";
          this.manageSingleSlideClassName(),
          this.settings.enableDrag && (f += "lg-grab "),
          this.outer.addClass(f),
          this.$inner.css("transition-timing-function", this.settings.easing),
          this.$inner.css("transition-duration", this.settings.speed + "ms"),
          this.settings.download && this.$toolbar.append('<a id="' + this.getIdName("lg-download") + '" target="_blank" rel="noopener" aria-label="' + this.settings.strings.download + '" download class="lg-download lg-icon"></a>'),
          this.counter(),
          I(window).on("resize.lg.global" + this.lgId + " orientationchange.lg.global" + this.lgId, function() {
              t.refreshOnResize()
          }),
          this.hideBars(),
          this.manageCloseGallery(),
          this.toggleMaximize(),
          this.initModules()
      }
  }
  ,
  s.prototype.refreshOnResize = function() {
      if (this.lgOpened) {
          var t = this.galleryItems[this.index]
            , e = t.__slideVideoInfo;
          this.mediaContainerPosition = this.getMediaContainerPosition();
          var i = this.mediaContainerPosition
            , n = i.top
            , r = i.bottom;
          if (this.currentImageSize = B.getSize(this.items[this.index], this.outer, n + r, e && this.settings.videoMaxSize),
          e && this.resizeVideoSlide(this.index, this.currentImageSize),
          this.zoomFromOrigin && !this.isDummyImageRemoved) {
              var o = this.getDummyImgStyles(this.currentImageSize);
              this.outer.find(".lg-current .lg-dummy-img").first().attr("style", o)
          }
          this.LGel.trigger(M.containerResize)
      }
  }
  ,
  s.prototype.resizeVideoSlide = function(t, e) {
      var i = this.getVideoContStyle(e)
        , n = this.getSlideItem(t);
      n.find(".lg-video-cont").attr("style", i)
  }
  ,
  s.prototype.updateSlides = function(t, e) {
      if (this.index > t.length - 1 && (this.index = t.length - 1),
      t.length === 1 && (this.index = 0),
      !t.length) {
          this.closeGallery();
          return
      }
      var i = this.galleryItems[e].src;
      this.galleryItems = t,
      this.updateControls(),
      this.$inner.empty(),
      this.currentItemsInDom = [];
      var n = 0;
      this.galleryItems.some(function(r, o) {
          return r.src === i ? (n = o,
          !0) : !1
      }),
      this.currentItemsInDom = this.organizeSlideItems(n, -1),
      this.loadContent(n, !0),
      this.getSlideItem(n).addClass("lg-current"),
      this.index = n,
      this.updateCurrentCounter(n),
      this.LGel.trigger(M.updateSlides)
  }
  ,
  s.prototype.getItems = function() {
      if (this.items = [],
      this.settings.dynamic)
          return this.settings.dynamicEl || [];
      if (this.settings.selector === "this")
          this.items.push(this.el);
      else if (this.settings.selector)
          if (typeof this.settings.selector == "string")
              if (this.settings.selectWithin) {
                  var t = I(this.settings.selectWithin);
                  this.items = t.find(this.settings.selector).get()
              } else
                  this.items = this.el.querySelectorAll(this.settings.selector);
          else
              this.items = this.settings.selector;
      else
          this.items = this.el.children;
      return B.getDynamicOptions(this.items, this.settings.extraProps, this.settings.getCaptionFromTitleOrAlt, this.settings.exThumbImage)
  }
  ,
  s.prototype.shouldHideScrollbar = function() {
      return this.settings.hideScrollbar && document.body === this.settings.container
  }
  ,
  s.prototype.hideScrollbar = function() {
      if (this.shouldHideScrollbar()) {
          this.bodyPaddingRight = parseFloat(I("body").style().paddingRight);
          var t = document.documentElement.getBoundingClientRect()
            , e = window.innerWidth - t.width;
          I(document.body).css("padding-right", e + this.bodyPaddingRight + "px"),
          I(document.body).addClass("lg-overlay-open")
      }
  }
  ,
  s.prototype.resetScrollBar = function() {
      this.shouldHideScrollbar() && (I(document.body).css("padding-right", this.bodyPaddingRight + "px"),
      I(document.body).removeClass("lg-overlay-open"))
  }
  ,
  s.prototype.openGallery = function(t, e) {
      var i = this;
      if (t === void 0 && (t = this.settings.index),
      !this.lgOpened) {
          this.lgOpened = !0,
          this.outer.removeClass("lg-hide-items"),
          this.hideScrollbar(),
          this.$container.addClass("lg-show");
          var n = this.getItemsToBeInsertedToDom(t, t);
          this.currentItemsInDom = n;
          var r = "";
          n.forEach(function(f) {
              r = r + ('<div id="' + f + '" class="lg-item"></div>')
          }),
          this.$inner.append(r),
          this.addHtml(t);
          var o = "";
          this.mediaContainerPosition = this.getMediaContainerPosition();
          var a = this.mediaContainerPosition
            , l = a.top
            , c = a.bottom;
          this.settings.allowMediaOverlap || this.setMediaContainerPosition(l, c);
          var h = this.galleryItems[t].__slideVideoInfo;
          this.zoomFromOrigin && e && (this.currentImageSize = B.getSize(e, this.outer, l + c, h && this.settings.videoMaxSize),
          o = B.getTransform(e, this.outer, l, c, this.currentImageSize)),
          (!this.zoomFromOrigin || !o) && (this.outer.addClass(this.settings.startClass),
          this.getSlideItem(t).removeClass("lg-complete"));
          var u = this.settings.zoomFromOrigin ? 100 : this.settings.backdropDuration;
          setTimeout(function() {
              i.outer.addClass("lg-components-open")
          }, u),
          this.index = t,
          this.LGel.trigger(M.beforeOpen),
          this.getSlideItem(t).addClass("lg-current"),
          this.lGalleryOn = !1,
          this.prevScrollTop = I(window).scrollTop(),
          setTimeout(function() {
              if (i.zoomFromOrigin && o) {
                  var f = i.getSlideItem(t);
                  f.css("transform", o),
                  setTimeout(function() {
                      f.addClass("lg-start-progress lg-start-end-progress").css("transition-duration", i.settings.startAnimationDuration + "ms"),
                      i.outer.addClass("lg-zoom-from-image")
                  }),
                  setTimeout(function() {
                      f.css("transform", "translate3d(0, 0, 0)")
                  }, 100)
              }
              setTimeout(function() {
                  i.$backdrop.addClass("in"),
                  i.$container.addClass("lg-show-in")
              }, 10),
              setTimeout(function() {
                  i.settings.trapFocus && document.body === i.settings.container && i.trapFocus()
              }, i.settings.backdropDuration + 50),
              (!i.zoomFromOrigin || !o) && setTimeout(function() {
                  i.outer.addClass("lg-visible")
              }, i.settings.backdropDuration),
              i.slide(t, !1, !1, !1),
              i.LGel.trigger(M.afterOpen)
          }),
          document.body === this.settings.container && I("html").addClass("lg-on")
      }
  }
  ,
  s.prototype.getMediaContainerPosition = function() {
      if (this.settings.allowMediaOverlap)
          return {
              top: 0,
              bottom: 0
          };
      var t = this.$toolbar.get().clientHeight || 0
        , e = this.outer.find(".lg-components .lg-sub-html").get()
        , i = this.settings.defaultCaptionHeight || e && e.clientHeight || 0
        , n = this.outer.find(".lg-thumb-outer").get()
        , r = n ? n.clientHeight : 0
        , o = r + i;
      return {
          top: t,
          bottom: o
      }
  }
  ,
  s.prototype.setMediaContainerPosition = function(t, e) {
      t === void 0 && (t = 0),
      e === void 0 && (e = 0),
      this.$content.css("top", t + "px").css("bottom", e + "px")
  }
  ,
  s.prototype.hideBars = function() {
      var t = this;
      setTimeout(function() {
          t.outer.removeClass("lg-hide-items"),
          t.settings.hideBarsDelay > 0 && (t.outer.on("mousemove.lg click.lg touchstart.lg", function() {
              t.outer.removeClass("lg-hide-items"),
              clearTimeout(t.hideBarTimeout),
              t.hideBarTimeout = setTimeout(function() {
                  t.outer.addClass("lg-hide-items")
              }, t.settings.hideBarsDelay)
          }),
          t.outer.trigger("mousemove.lg"))
      }, this.settings.showBarsAfter)
  }
  ,
  s.prototype.initPictureFill = function(t) {
      if (this.settings.supportLegacyBrowser)
          try {
              picturefill({
                  elements: [t.get()]
              })
          } catch {
              console.warn("lightGallery :- If you want srcset or picture tag to be supported for older browser please include picturefil javascript library in your document.")
          }
  }
  ,
  s.prototype.counter = function() {
      if (this.settings.counter) {
          var t = `<div class="lg-counter" role="status" aria-live="polite">
              <span id="` + this.getIdName("lg-counter-current") + '" class="lg-counter-current">' + (this.index + 1) + ` </span> /
              <span id="` + this.getIdName("lg-counter-all") + '" class="lg-counter-all">' + this.galleryItems.length + " </span></div>";
          this.outer.find(this.settings.appendCounterTo).append(t)
      }
  }
  ,
  s.prototype.addHtml = function(t) {
      var e, i;
      if (this.galleryItems[t].subHtmlUrl ? i = this.galleryItems[t].subHtmlUrl : e = this.galleryItems[t].subHtml,
      !i)
          if (e) {
              var n = e.substring(0, 1);
              (n === "." || n === "#") && (this.settings.subHtmlSelectorRelative && !this.settings.dynamic ? e = I(this.items).eq(t).find(e).first().html() : e = I(e).first().html())
          } else
              e = "";
      if (this.settings.appendSubHtmlTo !== ".lg-item")
          i ? this.outer.find(".lg-sub-html").load(i) : this.outer.find(".lg-sub-html").html(e);
      else {
          var r = I(this.getSlideItemId(t));
          i ? r.load(i) : r.append('<div class="lg-sub-html">' + e + "</div>")
      }
      typeof e < "u" && e !== null && (e === "" ? this.outer.find(this.settings.appendSubHtmlTo).addClass("lg-empty-html") : this.outer.find(this.settings.appendSubHtmlTo).removeClass("lg-empty-html")),
      this.LGel.trigger(M.afterAppendSubHtml, {
          index: t
      })
  }
  ,
  s.prototype.preload = function(t) {
      for (var e = 1; e <= this.settings.preload && !(e >= this.galleryItems.length - t); e++)
          this.loadContent(t + e, !1);
      for (var i = 1; i <= this.settings.preload && !(t - i < 0); i++)
          this.loadContent(t - i, !1)
  }
  ,
  s.prototype.getDummyImgStyles = function(t) {
      return t ? "width:" + t.width + `px;
              margin-left: -` + t.width / 2 + `px;
              margin-top: -` + t.height / 2 + `px;
              height:` + t.height + "px" : ""
  }
  ,
  s.prototype.getVideoContStyle = function(t) {
      return t ? "width:" + t.width + `px;
              height:` + t.height + "px" : ""
  }
  ,
  s.prototype.getDummyImageContent = function(t, e, i) {
      var n;
      if (this.settings.dynamic || (n = I(this.items).eq(e)),
      n) {
          var r = void 0;
          if (this.settings.exThumbImage ? r = n.attr(this.settings.exThumbImage) : r = n.find("img").first().attr("src"),
          !r)
              return "";
          var o = this.getDummyImgStyles(this.currentImageSize)
            , a = "<img " + i + ' style="' + o + '" class="lg-dummy-img" src="' + r + '" />';
          return t.addClass("lg-first-slide"),
          this.outer.addClass("lg-first-slide-loading"),
          a
      }
      return ""
  }
  ,
  s.prototype.setImgMarkup = function(t, e, i) {
      var n = this.galleryItems[i]
        , r = n.alt
        , o = n.srcset
        , a = n.sizes
        , l = n.sources
        , c = ""
        , h = r ? 'alt="' + r + '"' : "";
      this.isFirstSlideWithZoomAnimation() ? c = this.getDummyImageContent(e, i, h) : c = B.getImgMarkup(i, t, h, o, a, l);
      var u = '<picture class="lg-img-wrap"> ' + c + "</picture>";
      e.prepend(u)
  }
  ,
  s.prototype.onSlideObjectLoad = function(t, e, i, n) {
      var r = t.find(".lg-object").first();
      B.isImageLoaded(r.get()) || e ? i() : (r.on("load.lg error.lg", function() {
          i && i()
      }),
      r.on("error.lg", function() {
          n && n()
      }))
  }
  ,
  s.prototype.onLgObjectLoad = function(t, e, i, n, r, o) {
      var a = this;
      this.onSlideObjectLoad(t, o, function() {
          a.triggerSlideItemLoad(t, e, i, n, r)
      }, function() {
          t.addClass("lg-complete lg-complete_"),
          t.html('<span class="lg-error-msg">' + a.settings.strings.mediaLoadingFailed + "</span>")
      })
  }
  ,
  s.prototype.triggerSlideItemLoad = function(t, e, i, n, r) {
      var o = this
        , a = this.galleryItems[e]
        , l = r && this.getSlideType(a) === "video" && !a.poster ? n : 0;
      setTimeout(function() {
          t.addClass("lg-complete lg-complete_"),
          o.LGel.trigger(M.slideItemLoad, {
              index: e,
              delay: i || 0,
              isFirstSlide: r
          })
      }, l)
  }
  ,
  s.prototype.isFirstSlideWithZoomAnimation = function() {
      return !!(!this.lGalleryOn && this.zoomFromOrigin && this.currentImageSize)
  }
  ,
  s.prototype.addSlideVideoInfo = function(t) {
      var e = this;
      t.forEach(function(i, n) {
          i.__slideVideoInfo = B.isVideo(i.src, !!i.video, n),
          i.__slideVideoInfo && e.settings.loadYouTubePoster && !i.poster && i.__slideVideoInfo.youtube && (i.poster = "//img.youtube.com/vi/" + i.__slideVideoInfo.youtube[1] + "/maxresdefault.jpg")
      })
  }
  ,
  s.prototype.loadContent = function(t, e) {
      var i = this
        , n = this.galleryItems[t]
        , r = I(this.getSlideItemId(t))
        , o = n.poster
        , a = n.srcset
        , l = n.sizes
        , c = n.sources
        , h = n.src
        , u = n.video
        , f = u && typeof u == "string" ? JSON.parse(u) : u;
      if (n.responsive) {
          var y = n.responsive.split(",");
          h = B.getResponsiveSrc(y) || h
      }
      var d = n.__slideVideoInfo
        , m = ""
        , p = !!n.iframe
        , g = !this.lGalleryOn
        , v = 0;
      if (g && (this.zoomFromOrigin && this.currentImageSize ? v = this.settings.startAnimationDuration + 10 : v = this.settings.backdropDuration + 10),
      !r.hasClass("lg-loaded")) {
          if (d) {
              var S = this.mediaContainerPosition
                , L = S.top
                , O = S.bottom
                , T = B.getSize(this.items[t], this.outer, L + O, d && this.settings.videoMaxSize);
              m = this.getVideoContStyle(T)
          }
          if (p) {
              var C = B.getIframeMarkup(this.settings.iframeWidth, this.settings.iframeHeight, this.settings.iframeMaxWidth, this.settings.iframeMaxHeight, h, n.iframeTitle);
              r.prepend(C)
          } else if (o) {
              var E = ""
                , x = g && this.zoomFromOrigin && this.currentImageSize;
              x && (E = this.getDummyImageContent(r, t, ""));
              var C = B.getVideoPosterMarkup(o, E || "", m, this.settings.strings.playVideo, d);
              r.prepend(C)
          } else if (d) {
              var C = '<div class="lg-video-cont " style="' + m + '"></div>';
              r.prepend(C)
          } else if (this.setImgMarkup(h, r, t),
          a || c) {
              var z = r.find(".lg-object");
              this.initPictureFill(z)
          }
          (o || d) && this.LGel.trigger(M.hasVideo, {
              index: t,
              src: h,
              html5Video: f,
              hasPoster: !!o
          }),
          this.LGel.trigger(M.afterAppendSlide, {
              index: t
          }),
          this.lGalleryOn && this.settings.appendSubHtmlTo === ".lg-item" && this.addHtml(t)
      }
      var w = 0;
      v && !I(document.body).hasClass("lg-from-hash") && (w = v),
      this.isFirstSlideWithZoomAnimation() && (setTimeout(function() {
          r.removeClass("lg-start-end-progress lg-start-progress").removeAttr("style")
      }, this.settings.startAnimationDuration + 100),
      r.hasClass("lg-loaded") || setTimeout(function() {
          if (i.getSlideType(n) === "image") {
              var P = n.alt
                , V = P ? 'alt="' + P + '"' : "";
              if (r.find(".lg-img-wrap").append(B.getImgMarkup(t, h, V, a, l, n.sources)),
              a || c) {
                  var N = r.find(".lg-object");
                  i.initPictureFill(N)
              }
          }
          (i.getSlideType(n) === "image" || i.getSlideType(n) === "video" && o) && (i.onLgObjectLoad(r, t, v, w, !0, !1),
          i.onSlideObjectLoad(r, !!(d && d.html5 && !o), function() {
              i.loadContentOnFirstSlideLoad(t, r, w)
          }, function() {
              i.loadContentOnFirstSlideLoad(t, r, w)
          }))
      }, this.settings.startAnimationDuration + 100)),
      r.addClass("lg-loaded"),
      (!this.isFirstSlideWithZoomAnimation() || this.getSlideType(n) === "video" && !o) && this.onLgObjectLoad(r, t, v, w, g, !!(d && d.html5 && !o)),
      (!this.zoomFromOrigin || !this.currentImageSize) && r.hasClass("lg-complete_") && !this.lGalleryOn && setTimeout(function() {
          r.addClass("lg-complete")
      }, this.settings.backdropDuration),
      this.lGalleryOn = !0,
      e === !0 && (r.hasClass("lg-complete_") ? this.preload(t) : r.find(".lg-object").first().on("load.lg error.lg", function() {
          i.preload(t)
      }))
  }
  ,
  s.prototype.loadContentOnFirstSlideLoad = function(t, e, i) {
      var n = this;
      setTimeout(function() {
          e.find(".lg-dummy-img").remove(),
          e.removeClass("lg-first-slide"),
          n.outer.removeClass("lg-first-slide-loading"),
          n.isDummyImageRemoved = !0,
          n.preload(t)
      }, i + 300)
  }
  ,
  s.prototype.getItemsToBeInsertedToDom = function(t, e, i) {
      var n = this;
      i === void 0 && (i = 0);
      var r = []
        , o = Math.max(i, 3);
      o = Math.min(o, this.galleryItems.length);
      var a = "lg-item-" + this.lgId + "-" + e;
      if (this.galleryItems.length <= 3)
          return this.galleryItems.forEach(function(h, u) {
              r.push("lg-item-" + n.lgId + "-" + u)
          }),
          r;
      if (t < (this.galleryItems.length - 1) / 2) {
          for (var l = t; l > t - o / 2 && l >= 0; l--)
              r.push("lg-item-" + this.lgId + "-" + l);
          for (var c = r.length, l = 0; l < o - c; l++)
              r.push("lg-item-" + this.lgId + "-" + (t + l + 1))
      } else {
          for (var l = t; l <= this.galleryItems.length - 1 && l < t + o / 2; l++)
              r.push("lg-item-" + this.lgId + "-" + l);
          for (var c = r.length, l = 0; l < o - c; l++)
              r.push("lg-item-" + this.lgId + "-" + (t - l - 1))
      }
      return this.settings.loop && (t === this.galleryItems.length - 1 ? r.push("lg-item-" + this.lgId + "-0") : t === 0 && r.push("lg-item-" + this.lgId + "-" + (this.galleryItems.length - 1))),
      r.indexOf(a) === -1 && r.push("lg-item-" + this.lgId + "-" + e),
      r
  }
  ,
  s.prototype.organizeSlideItems = function(t, e) {
      var i = this
        , n = this.getItemsToBeInsertedToDom(t, e, this.settings.numberOfSlideItemsInDom);
      return n.forEach(function(r) {
          i.currentItemsInDom.indexOf(r) === -1 && i.$inner.append('<div id="' + r + '" class="lg-item"></div>')
      }),
      this.currentItemsInDom.forEach(function(r) {
          n.indexOf(r) === -1 && I("#" + r).remove()
      }),
      n
  }
  ,
  s.prototype.getPreviousSlideIndex = function() {
      var t = 0;
      try {
          var e = this.outer.find(".lg-current").first().attr("id");
          t = parseInt(e.split("-")[3]) || 0
      } catch {
          t = 0
      }
      return t
  }
  ,
  s.prototype.setDownloadValue = function(t) {
      if (this.settings.download) {
          var e = this.galleryItems[t]
            , i = e.downloadUrl === !1 || e.downloadUrl === "false";
          if (i)
              this.outer.addClass("lg-hide-download");
          else {
              var n = this.getElementById("lg-download");
              this.outer.removeClass("lg-hide-download"),
              n.attr("href", e.downloadUrl || e.src),
              e.download && n.attr("download", e.download)
          }
      }
  }
  ,
  s.prototype.makeSlideAnimation = function(t, e, i) {
      var n = this;
      this.lGalleryOn && i.addClass("lg-slide-progress"),
      setTimeout(function() {
          n.outer.addClass("lg-no-trans"),
          n.outer.find(".lg-item").removeClass("lg-prev-slide lg-next-slide"),
          t === "prev" ? (e.addClass("lg-prev-slide"),
          i.addClass("lg-next-slide")) : (e.addClass("lg-next-slide"),
          i.addClass("lg-prev-slide")),
          setTimeout(function() {
              n.outer.find(".lg-item").removeClass("lg-current"),
              e.addClass("lg-current"),
              n.outer.removeClass("lg-no-trans")
          }, 50)
      }, this.lGalleryOn ? this.settings.slideDelay : 0)
  }
  ,
  s.prototype.slide = function(t, e, i, n) {
      var r = this
        , o = this.getPreviousSlideIndex();
      if (this.currentItemsInDom = this.organizeSlideItems(t, o),
      !(this.lGalleryOn && o === t)) {
          var a = this.galleryItems.length;
          if (!this.lgBusy) {
              this.settings.counter && this.updateCurrentCounter(t);
              var l = this.getSlideItem(t)
                , c = this.getSlideItem(o)
                , h = this.galleryItems[t]
                , u = h.__slideVideoInfo;
              if (this.outer.attr("data-lg-slide-type", this.getSlideType(h)),
              this.setDownloadValue(t),
              u) {
                  var f = this.mediaContainerPosition
                    , y = f.top
                    , d = f.bottom
                    , m = B.getSize(this.items[t], this.outer, y + d, u && this.settings.videoMaxSize);
                  this.resizeVideoSlide(t, m)
              }
              if (this.LGel.trigger(M.beforeSlide, {
                  prevIndex: o,
                  index: t,
                  fromTouch: !!e,
                  fromThumb: !!i
              }),
              this.lgBusy = !0,
              clearTimeout(this.hideBarTimeout),
              this.arrowDisable(t),
              n || (t < o ? n = "prev" : t > o && (n = "next")),
              !e)
                  this.makeSlideAnimation(n, l, c);
              else {
                  this.outer.find(".lg-item").removeClass("lg-prev-slide lg-current lg-next-slide");
                  var p = void 0
                    , g = void 0;
                  a > 2 ? (p = t - 1,
                  g = t + 1,
                  (t === 0 && o === a - 1 || t === a - 1 && o === 0) && (g = 0,
                  p = a - 1)) : (p = 0,
                  g = 1),
                  n === "prev" ? this.getSlideItem(g).addClass("lg-next-slide") : this.getSlideItem(p).addClass("lg-prev-slide"),
                  l.addClass("lg-current")
              }
              this.lGalleryOn ? setTimeout(function() {
                  r.loadContent(t, !0),
                  r.settings.appendSubHtmlTo !== ".lg-item" && r.addHtml(t)
              }, this.settings.speed + 50 + (e ? 0 : this.settings.slideDelay)) : this.loadContent(t, !0),
              setTimeout(function() {
                  r.lgBusy = !1,
                  c.removeClass("lg-slide-progress"),
                  r.LGel.trigger(M.afterSlide, {
                      prevIndex: o,
                      index: t,
                      fromTouch: e,
                      fromThumb: i
                  })
              }, (this.lGalleryOn ? this.settings.speed + 100 : 100) + (e ? 0 : this.settings.slideDelay))
          }
          this.index = t
      }
  }
  ,
  s.prototype.updateCurrentCounter = function(t) {
      this.getElementById("lg-counter-current").html(t + 1 + "")
  }
  ,
  s.prototype.updateCounterTotal = function() {
      this.getElementById("lg-counter-all").html(this.galleryItems.length + "")
  }
  ,
  s.prototype.getSlideType = function(t) {
      return t.__slideVideoInfo ? "video" : t.iframe ? "iframe" : "image"
  }
  ,
  s.prototype.touchMove = function(t, e, i) {
      var n = e.pageX - t.pageX
        , r = e.pageY - t.pageY
        , o = !1;
      if (this.swipeDirection ? o = !0 : Math.abs(n) > 15 ? (this.swipeDirection = "horizontal",
      o = !0) : Math.abs(r) > 15 && (this.swipeDirection = "vertical",
      o = !0),
      !!o) {
          var a = this.getSlideItem(this.index);
          if (this.swipeDirection === "horizontal") {
              i == null || i.preventDefault(),
              this.outer.addClass("lg-dragging"),
              this.setTranslate(a, n, 0);
              var l = a.get().offsetWidth
                , c = l * 15 / 100
                , h = c - Math.abs(n * 10 / 100);
              this.setTranslate(this.outer.find(".lg-prev-slide").first(), -l + n - h, 0),
              this.setTranslate(this.outer.find(".lg-next-slide").first(), l + n + h, 0)
          } else if (this.swipeDirection === "vertical" && this.settings.swipeToClose) {
              i == null || i.preventDefault(),
              this.$container.addClass("lg-dragging-vertical");
              var u = 1 - Math.abs(r) / window.innerHeight;
              this.$backdrop.css("opacity", u);
              var f = 1 - Math.abs(r) / (window.innerWidth * 2);
              this.setTranslate(a, 0, r, f, f),
              Math.abs(r) > 100 && this.outer.addClass("lg-hide-items").removeClass("lg-components-open")
          }
      }
  }
  ,
  s.prototype.touchEnd = function(t, e, i) {
      var n = this, r;
      this.settings.mode !== "lg-slide" && this.outer.addClass("lg-slide"),
      setTimeout(function() {
          n.$container.removeClass("lg-dragging-vertical"),
          n.outer.removeClass("lg-dragging lg-hide-items").addClass("lg-components-open");
          var o = !0;
          if (n.swipeDirection === "horizontal") {
              r = t.pageX - e.pageX;
              var a = Math.abs(t.pageX - e.pageX);
              r < 0 && a > n.settings.swipeThreshold ? (n.goToNextSlide(!0),
              o = !1) : r > 0 && a > n.settings.swipeThreshold && (n.goToPrevSlide(!0),
              o = !1)
          } else if (n.swipeDirection === "vertical")
              if (r = Math.abs(t.pageY - e.pageY),
              n.settings.closable && n.settings.swipeToClose && r > 100) {
                  n.closeGallery();
                  return
              } else
                  n.$backdrop.css("opacity", 1);
          if (n.outer.find(".lg-item").removeAttr("style"),
          o && Math.abs(t.pageX - e.pageX) < 5) {
              var l = I(i.target);
              n.isPosterElement(l) && n.LGel.trigger(M.posterClick)
          }
          n.swipeDirection = void 0
      }),
      setTimeout(function() {
          !n.outer.hasClass("lg-dragging") && n.settings.mode !== "lg-slide" && n.outer.removeClass("lg-slide")
      }, this.settings.speed + 100)
  }
  ,
  s.prototype.enableSwipe = function() {
      var t = this
        , e = {}
        , i = {}
        , n = !1
        , r = !1;
      this.settings.enableSwipe && (this.$inner.on("touchstart.lg", function(o) {
          t.dragOrSwipeEnabled = !0;
          var a = t.getSlideItem(t.index);
          (I(o.target).hasClass("lg-item") || a.get().contains(o.target)) && !t.outer.hasClass("lg-zoomed") && !t.lgBusy && o.touches.length === 1 && (r = !0,
          t.touchAction = "swipe",
          t.manageSwipeClass(),
          e = {
              pageX: o.touches[0].pageX,
              pageY: o.touches[0].pageY
          })
      }),
      this.$inner.on("touchmove.lg", function(o) {
          r && t.touchAction === "swipe" && o.touches.length === 1 && (i = {
              pageX: o.touches[0].pageX,
              pageY: o.touches[0].pageY
          },
          t.touchMove(e, i, o),
          n = !0)
      }),
      this.$inner.on("touchend.lg", function(o) {
          if (t.touchAction === "swipe") {
              if (n)
                  n = !1,
                  t.touchEnd(i, e, o);
              else if (r) {
                  var a = I(o.target);
                  t.isPosterElement(a) && t.LGel.trigger(M.posterClick)
              }
              t.touchAction = void 0,
              r = !1
          }
      }))
  }
  ,
  s.prototype.enableDrag = function() {
      var t = this
        , e = {}
        , i = {}
        , n = !1
        , r = !1;
      this.settings.enableDrag && (this.outer.on("mousedown.lg", function(o) {
          t.dragOrSwipeEnabled = !0;
          var a = t.getSlideItem(t.index);
          (I(o.target).hasClass("lg-item") || a.get().contains(o.target)) && !t.outer.hasClass("lg-zoomed") && !t.lgBusy && (o.preventDefault(),
          t.lgBusy || (t.manageSwipeClass(),
          e = {
              pageX: o.pageX,
              pageY: o.pageY
          },
          n = !0,
          t.outer.get().scrollLeft += 1,
          t.outer.get().scrollLeft -= 1,
          t.outer.removeClass("lg-grab").addClass("lg-grabbing"),
          t.LGel.trigger(M.dragStart)))
      }),
      I(window).on("mousemove.lg.global" + this.lgId, function(o) {
          n && t.lgOpened && (r = !0,
          i = {
              pageX: o.pageX,
              pageY: o.pageY
          },
          t.touchMove(e, i),
          t.LGel.trigger(M.dragMove))
      }),
      I(window).on("mouseup.lg.global" + this.lgId, function(o) {
          if (t.lgOpened) {
              var a = I(o.target);
              r ? (r = !1,
              t.touchEnd(i, e, o),
              t.LGel.trigger(M.dragEnd)) : t.isPosterElement(a) && t.LGel.trigger(M.posterClick),
              n && (n = !1,
              t.outer.removeClass("lg-grabbing").addClass("lg-grab"))
          }
      }))
  }
  ,
  s.prototype.triggerPosterClick = function() {
      var t = this;
      this.$inner.on("click.lg", function(e) {
          !t.dragOrSwipeEnabled && t.isPosterElement(I(e.target)) && t.LGel.trigger(M.posterClick)
      })
  }
  ,
  s.prototype.manageSwipeClass = function() {
      var t = this.index + 1
        , e = this.index - 1;
      this.settings.loop && this.galleryItems.length > 2 && (this.index === 0 ? e = this.galleryItems.length - 1 : this.index === this.galleryItems.length - 1 && (t = 0)),
      this.outer.find(".lg-item").removeClass("lg-next-slide lg-prev-slide"),
      e > -1 && this.getSlideItem(e).addClass("lg-prev-slide"),
      this.getSlideItem(t).addClass("lg-next-slide")
  }
  ,
  s.prototype.goToNextSlide = function(t) {
      var e = this
        , i = this.settings.loop;
      t && this.galleryItems.length < 3 && (i = !1),
      this.lgBusy || (this.index + 1 < this.galleryItems.length ? (this.index++,
      this.LGel.trigger(M.beforeNextSlide, {
          index: this.index
      }),
      this.slide(this.index, !!t, !1, "next")) : i ? (this.index = 0,
      this.LGel.trigger(M.beforeNextSlide, {
          index: this.index
      }),
      this.slide(this.index, !!t, !1, "next")) : this.settings.slideEndAnimation && !t && (this.outer.addClass("lg-right-end"),
      setTimeout(function() {
          e.outer.removeClass("lg-right-end")
      }, 400)))
  }
  ,
  s.prototype.goToPrevSlide = function(t) {
      var e = this
        , i = this.settings.loop;
      t && this.galleryItems.length < 3 && (i = !1),
      this.lgBusy || (this.index > 0 ? (this.index--,
      this.LGel.trigger(M.beforePrevSlide, {
          index: this.index,
          fromTouch: t
      }),
      this.slide(this.index, !!t, !1, "prev")) : i ? (this.index = this.galleryItems.length - 1,
      this.LGel.trigger(M.beforePrevSlide, {
          index: this.index,
          fromTouch: t
      }),
      this.slide(this.index, !!t, !1, "prev")) : this.settings.slideEndAnimation && !t && (this.outer.addClass("lg-left-end"),
      setTimeout(function() {
          e.outer.removeClass("lg-left-end")
      }, 400)))
  }
  ,
  s.prototype.keyPress = function() {
      var t = this;
      I(window).on("keydown.lg.global" + this.lgId, function(e) {
          t.lgOpened && t.settings.escKey === !0 && e.keyCode === 27 && (e.preventDefault(),
          t.settings.allowMediaOverlap && t.outer.hasClass("lg-can-toggle") && t.outer.hasClass("lg-components-open") ? t.outer.removeClass("lg-components-open") : t.closeGallery()),
          t.lgOpened && t.galleryItems.length > 1 && (e.keyCode === 37 && (e.preventDefault(),
          t.goToPrevSlide()),
          e.keyCode === 39 && (e.preventDefault(),
          t.goToNextSlide()))
      })
  }
  ,
  s.prototype.arrow = function() {
      var t = this;
      this.getElementById("lg-prev").on("click.lg", function() {
          t.goToPrevSlide()
      }),
      this.getElementById("lg-next").on("click.lg", function() {
          t.goToNextSlide()
      })
  }
  ,
  s.prototype.arrowDisable = function(t) {
      if (!this.settings.loop && this.settings.hideControlOnEnd) {
          var e = this.getElementById("lg-prev")
            , i = this.getElementById("lg-next");
          t + 1 === this.galleryItems.length ? i.attr("disabled", "disabled").addClass("disabled") : i.removeAttr("disabled").removeClass("disabled"),
          t === 0 ? e.attr("disabled", "disabled").addClass("disabled") : e.removeAttr("disabled").removeClass("disabled")
      }
  }
  ,
  s.prototype.setTranslate = function(t, e, i, n, r) {
      n === void 0 && (n = 1),
      r === void 0 && (r = 1),
      t.css("transform", "translate3d(" + e + "px, " + i + "px, 0px) scale3d(" + n + ", " + r + ", 1)")
  }
  ,
  s.prototype.mousewheel = function() {
      var t = this
        , e = 0;
      this.outer.on("wheel.lg", function(i) {
          if (!(!i.deltaY || t.galleryItems.length < 2)) {
              i.preventDefault();
              var n = new Date().getTime();
              n - e < 1e3 || (e = n,
              i.deltaY > 0 ? t.goToNextSlide() : i.deltaY < 0 && t.goToPrevSlide())
          }
      })
  }
  ,
  s.prototype.isSlideElement = function(t) {
      return t.hasClass("lg-outer") || t.hasClass("lg-item") || t.hasClass("lg-img-wrap")
  }
  ,
  s.prototype.isPosterElement = function(t) {
      var e = this.getSlideItem(this.index).find(".lg-video-play-button").get();
      return t.hasClass("lg-video-poster") || t.hasClass("lg-video-play-button") || e && e.contains(t.get())
  }
  ,
  s.prototype.toggleMaximize = function() {
      var t = this;
      this.getElementById("lg-maximize").on("click.lg", function() {
          t.$container.toggleClass("lg-inline"),
          t.refreshOnResize()
      })
  }
  ,
  s.prototype.invalidateItems = function() {
      for (var t = 0; t < this.items.length; t++) {
          var e = this.items[t]
            , i = I(e);
          i.off("click.lgcustom-item-" + i.attr("data-lg-id"))
      }
  }
  ,
  s.prototype.trapFocus = function() {
      var t = this;
      this.$container.get().focus({
          preventScroll: !0
      }),
      I(window).on("keydown.lg.global" + this.lgId, function(e) {
          if (t.lgOpened) {
              var i = e.key === "Tab" || e.keyCode === 9;
              if (i) {
                  var n = B.getFocusableElements(t.$container.get())
                    , r = n[0]
                    , o = n[n.length - 1];
                  e.shiftKey ? document.activeElement === r && (o.focus(),
                  e.preventDefault()) : document.activeElement === o && (r.focus(),
                  e.preventDefault())
              }
          }
      })
  }
  ,
  s.prototype.manageCloseGallery = function() {
      var t = this;
      if (this.settings.closable) {
          var e = !1;
          this.getElementById("lg-close").on("click.lg", function() {
              t.closeGallery()
          }),
          this.settings.closeOnTap && (this.outer.on("mousedown.lg", function(i) {
              var n = I(i.target);
              t.isSlideElement(n) ? e = !0 : e = !1
          }),
          this.outer.on("mousemove.lg", function() {
              e = !1
          }),
          this.outer.on("mouseup.lg", function(i) {
              var n = I(i.target);
              t.isSlideElement(n) && e && (t.outer.hasClass("lg-dragging") || t.closeGallery())
          }))
      }
  }
  ,
  s.prototype.closeGallery = function(t) {
      var e = this;
      if (!this.lgOpened || !this.settings.closable && !t)
          return 0;
      this.LGel.trigger(M.beforeClose),
      this.settings.resetScrollPosition && !this.settings.hideScrollbar && I(window).scrollTop(this.prevScrollTop);
      var i = this.items[this.index], n;
      if (this.zoomFromOrigin && i) {
          var r = this.mediaContainerPosition
            , o = r.top
            , a = r.bottom
            , l = this.galleryItems[this.index]
            , c = l.__slideVideoInfo
            , h = l.poster
            , u = B.getSize(i, this.outer, o + a, c && h && this.settings.videoMaxSize);
          n = B.getTransform(i, this.outer, o, a, u)
      }
      this.zoomFromOrigin && n ? (this.outer.addClass("lg-closing lg-zoom-from-image"),
      this.getSlideItem(this.index).addClass("lg-start-end-progress").css("transition-duration", this.settings.startAnimationDuration + "ms").css("transform", n)) : (this.outer.addClass("lg-hide-items"),
      this.outer.removeClass("lg-zoom-from-image")),
      this.destroyModules(),
      this.lGalleryOn = !1,
      this.isDummyImageRemoved = !1,
      this.zoomFromOrigin = this.settings.zoomFromOrigin,
      clearTimeout(this.hideBarTimeout),
      this.hideBarTimeout = !1,
      I("html").removeClass("lg-on"),
      this.outer.removeClass("lg-visible lg-components-open"),
      this.$backdrop.removeClass("in").css("opacity", 0);
      var f = this.zoomFromOrigin && n ? Math.max(this.settings.startAnimationDuration, this.settings.backdropDuration) : this.settings.backdropDuration;
      return this.$container.removeClass("lg-show-in"),
      setTimeout(function() {
          e.zoomFromOrigin && n && e.outer.removeClass("lg-zoom-from-image"),
          e.$container.removeClass("lg-show"),
          e.resetScrollBar(),
          e.$backdrop.removeAttr("style").css("transition-duration", e.settings.backdropDuration + "ms"),
          e.outer.removeClass("lg-closing " + e.settings.startClass),
          e.getSlideItem(e.index).removeClass("lg-start-end-progress"),
          e.$inner.empty(),
          e.lgOpened && e.LGel.trigger(M.afterClose, {
              instance: e
          }),
          e.$container.get() && e.$container.get().blur(),
          e.lgOpened = !1
      }, f + 100),
      f + 100
  }
  ,
  s.prototype.initModules = function() {
      this.plugins.forEach(function(t) {
          try {
              t.init()
          } catch {
              console.warn("lightGallery:- make sure lightGallery module is properly initiated")
          }
      })
  }
  ,
  s.prototype.destroyModules = function(t) {
      this.plugins.forEach(function(e) {
          try {
              t ? e.destroy() : e.closeGallery && e.closeGallery()
          } catch {
              console.warn("lightGallery:- make sure lightGallery module is properly destroyed")
          }
      })
  }
  ,
  s.prototype.refresh = function(t) {
      this.settings.dynamic || this.invalidateItems(),
      t ? this.galleryItems = t : this.galleryItems = this.getItems(),
      this.updateControls(),
      this.openGalleryOnItemClick(),
      this.LGel.trigger(M.updateSlides)
  }
  ,
  s.prototype.updateControls = function() {
      this.addSlideVideoInfo(this.galleryItems),
      this.updateCounterTotal(),
      this.manageSingleSlideClassName()
  }
  ,
  s.prototype.destroyGallery = function() {
      this.destroyModules(!0),
      this.settings.dynamic || this.invalidateItems(),
      I(window).off(".lg.global" + this.lgId),
      this.LGel.off(".lg"),
      this.$container.remove()
  }
  ,
  s.prototype.destroy = function() {
      var t = this.closeGallery(!0);
      return t ? setTimeout(this.destroyGallery.bind(this), t) : this.destroyGallery(),
      t
  }
  ,
  s
}();
function Ue(s, t) {
  return new je(s,t)
}
const qe = document.getElementById("service-list-slider")
, We = {
  loop: !1,
  slidesToScroll: 4
}
, at = bt(qe, We)
, Mt = document.querySelector(".embla__button--prev")
, zt = document.querySelector(".embla__button--next")
, Qt = () => {
  at.canScrollPrev() ? Mt.classList.remove("embla__button--disabled") : Mt.classList.add("embla__button--disabled"),
  at.canScrollNext() ? zt.classList.remove("embla__button--disabled") : zt.classList.add("embla__button--disabled")
}
;
Mt.addEventListener("click", at.scrollPrev);
zt.addEventListener("click", at.scrollNext);
at.on("select", Qt);
at.on("init", Qt);
const At = bt(document.getElementById("mainCarousel"), {
  loop: !1
});
bt(document.getElementById("thumbCarousel"), {
  containScroll: "keepSnaps"
});
const Jt = document.querySelectorAll(".clinic-image__thumbs-image");
Jt.forEach( (s, t) => {
  s.addEventListener("click", () => {
      At.scrollTo(t)
  }
  )
}
);
At.on("select", () => {
  const s = At.selectedScrollSnap();
  Jt.forEach( (t, e) => {
      t.classList.toggle("clinic-image__thumbs-image--active", e === s)
  }
  )
}
);
const Ye = document.getElementById("mainCarousel");
Ue(Ye, {
  selector: "a",
  zoom: !0,
  fullscreen: !0,
  download: !1
});
async function fetchData() {
  try {
    const specialitiesResponse = await fetch(`${window.location.origin}/doctors/api/specialities`);
    if (!specialitiesResponse.ok) {
      throw new Error('Network response was not ok');
    }
    const specialitiesData = await specialitiesResponse.json();
    let Xe = specialitiesData.specialities; 
    Xe.unshift("Все направления")

    const doctorsResponse = await fetch(`${window.location.origin}/doctors/api/doctors`);
    if (!doctorsResponse.ok) {
      throw new Error('Network response was not ok');
    }
    const doctorsData = await doctorsResponse.json();
    let Wt = doctorsData.doctors; 

    function Ke() {
      const s = document.getElementById("categoryButtons");
      s.innerHTML = Xe.map( (t, e) => `
      <div class="category-button${e === 0 ? " active" : ""}" data-category="${t}">
        ${t}
      </div>
    `).join("")
    }
    function te(s="Все направления") {
      const t = document.getElementById("specialistsList");
      let e = s === "Все направления" ? Wt : Wt.filter(i => i.categories.includes(s));
      e = e.slice(0, 3),
      t.innerHTML = e.map(i => `
      <div class="specialist-card">
        <div class="specialist-card__image">
          <img src="${i.image}" alt="${i.name}" />
        </div>
        <div class="specialist-card__info">
          <div class="specialist-card__name">${i.name}</div>
          <div class="specialist-card__role">${i.categories.join(", ")}</div>
        </div>
      </div>
    `).join("")
    }
    function Ze(s) {
      document.querySelectorAll(".category-button").forEach(t => {
          t.classList.remove("active")
      }
      ),
      s.classList.add("active")
    }
    function Qe() {
      document.querySelectorAll(".category-button").forEach(s => {
          s.addEventListener("click", t => {
              const e = t.target.getAttribute("data-category");
              Ze(t.target),
              te(e)
          }
          )
      }
      )
    }
    Ke();
    te();
    Qe();
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}
fetchData();



ymaps.ready(Je);
function Je() {
  var s, t, e = window.innerWidth;
  e > 1200 ? (s = 12,
  t = [43.149473, 131.815747]) : (s = 11,
  t = [43.150813, 131.931514]);
  var i = new ymaps.Map("map",{
      center: t,
      zoom: s,
      controls: []
  });
  i.behaviors.disable("scrollZoom");
  var n = new ymaps.control.ZoomControl({
      options: {
          position: {
              right: 10,
              top: 50
          },
          size: "small"
      }
  });
  i.controls.add(n);
  var r = new ymaps.Placemark([43.172179, 131.950981],{
      hintContent: "улица Майора Филипова, 11к2",
      balloonContent: "улица Майора Филипова, 11к2"
  },{
      iconLayout: "default#image",
      iconImageHref: "./assets/images/pin.svg",
      iconImageSize: [30, 42],
      iconImageOffset: [-15, -42]
  })
    , o = new ymaps.Placemark([43.129446, 131.912048],{
      hintContent: "Некрасовская улица, 90",
      balloonContent: "Некрасовская улица, 90"
  },{
      iconLayout: "default#image",
      iconImageHref: "./assets/images/pin.svg",
      iconImageSize: [30, 42],
      iconImageOffset: [-15, -42]
  });
  i.geoObjects.add(r),
  i.geoObjects.add(o)
}
document.querySelector(".header__hamburger").addEventListener("click", function() {
  this.classList.toggle("active"),
  document.querySelector(".header__nav").classList.toggle("active")
});
