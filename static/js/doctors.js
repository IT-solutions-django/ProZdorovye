function It(t) {
  return typeof t == "number"
}
function Lt(t) {
  return typeof t == "string"
}
function gt(t) {
  return typeof t == "boolean"
}
function Nt(t) {
  return Object.prototype.toString.call(t) === "[object Object]"
}
function P(t) {
  return Math.abs(t)
}
function Tt(t) {
  return Math.sign(t)
}
function at(t, n) {
  return P(t - n)
}
function Xt(t, n) {
  if (t === 0 || n === 0 || P(t) <= P(n))
      return 0;
  const i = at(P(t), P(n));
  return P(i / t)
}
function lt(t) {
  return ft(t).map(Number)
}
function V(t) {
  return t[pt(t)]
}
function pt(t) {
  return Math.max(0, t.length - 1)
}
function At(t, n) {
  return n === pt(t)
}
function kt(t, n=0) {
  return Array.from(Array(t), (i, o) => n + o)
}
function ft(t) {
  return Object.keys(t)
}
function Vt(t, n) {
  return [t, n].reduce( (i, o) => (ft(o).forEach(c => {
      const s = i[c]
        , e = o[c]
        , l = Nt(s) && Nt(e);
      i[c] = l ? Vt(s, e) : e
  }
  ),
  i), {})
}
function Et(t, n) {
  return typeof n.MouseEvent < "u" && t instanceof n.MouseEvent
}
function Yt(t, n) {
  const i = {
      start: o,
      center: c,
      end: s
  };
  function o() {
      return 0
  }
  function c(r) {
      return s(r) / 2
  }
  function s(r) {
      return n - r
  }
  function e(r, u) {
      return Lt(t) ? i[t](r) : t(n, r, u)
  }
  return {
      measure: e
  }
}
function dt() {
  let t = [];
  function n(c, s, e, l={
      passive: !0
  }) {
      let r;
      if ("addEventListener"in c)
          c.addEventListener(s, e, l),
          r = () => c.removeEventListener(s, e, l);
      else {
          const u = c;
          u.addListener(e),
          r = () => u.removeListener(e)
      }
      return t.push(r),
      o
  }
  function i() {
      t = t.filter(c => c())
  }
  const o = {
      add: n,
      clear: i
  };
  return o
}
function Jt(t, n, i, o) {
  const c = dt()
    , s = 1e3 / 60;
  let e = null
    , l = 0
    , r = 0;
  function u() {
      c.add(t, "visibilitychange", () => {
          t.hidden && d()
      }
      )
  }
  function b() {
      S(),
      c.clear()
  }
  function f(g) {
      if (!r)
          return;
      e || (e = g);
      const a = g - e;
      for (e = g,
      l += a; l >= s; )
          i(s),
          l -= s;
      const h = l / s;
      o(h),
      r && n.requestAnimationFrame(f)
  }
  function m() {
      r || (r = n.requestAnimationFrame(f))
  }
  function S() {
      n.cancelAnimationFrame(r),
      e = null,
      l = 0,
      r = 0
  }
  function d() {
      e = null,
      l = 0
  }
  return {
      init: u,
      destroy: b,
      start: m,
      stop: S,
      update: () => i(s),
      render: o
  }
}
function Zt(t, n) {
  const i = n === "rtl"
    , o = t === "y"
    , c = o ? "y" : "x"
    , s = o ? "x" : "y"
    , e = !o && i ? -1 : 1
    , l = b()
    , r = f();
  function u(d) {
      const {height: p, width: g} = d;
      return o ? p : g
  }
  function b() {
      return o ? "top" : i ? "right" : "left"
  }
  function f() {
      return o ? "bottom" : i ? "left" : "right"
  }
  function m(d) {
      return d * e
  }
  return {
      scroll: c,
      cross: s,
      startEdge: l,
      endEdge: r,
      measureSize: u,
      direction: m
  }
}
function nt(t=0, n=0) {
  const i = P(t - n);
  function o(u) {
      return u < t
  }
  function c(u) {
      return u > n
  }
  function s(u) {
      return o(u) || c(u)
  }
  function e(u) {
      return s(u) ? o(u) ? t : n : u
  }
  function l(u) {
      return i ? u - i * Math.ceil((u - n) / i) : u
  }
  return {
      length: i,
      max: n,
      min: t,
      constrain: e,
      reachedAny: s,
      reachedMax: c,
      reachedMin: o,
      removeOffset: l
  }
}
function $t(t, n, i) {
  const {constrain: o} = nt(0, t)
    , c = t + 1;
  let s = e(n);
  function e(m) {
      return i ? P((c + m) % c) : o(m)
  }
  function l() {
      return s
  }
  function r(m) {
      return s = e(m),
      f
  }
  function u(m) {
      return b().set(l() + m)
  }
  function b() {
      return $t(t, l(), i)
  }
  const f = {
      get: l,
      set: r,
      add: u,
      clone: b
  };
  return f
}
function Wt(t, n, i, o, c, s, e, l, r, u, b, f, m, S, d, p, g, a, h) {
  const {cross: v, direction: T} = t
    , D = ["INPUT", "SELECT", "TEXTAREA"]
    , A = {
      passive: !1
  }
    , x = dt()
    , L = dt()
    , E = nt(50, 225).constrain(S.measure(20))
    , F = {
      mouse: 300,
      touch: 400
  }
    , I = {
      mouse: 500,
      touch: 600
  }
    , w = d ? 43 : 25;
  let $ = !1
    , z = 0
    , H = 0
    , W = !1
    , X = !1
    , G = !1
    , R = !1;
  function ot(y) {
      if (!h)
          return;
      function _(O) {
          (gt(h) || h(y, O)) && rt(O)
      }
      const C = n;
      x.add(C, "dragstart", O => O.preventDefault(), A).add(C, "touchmove", () => {}
      , A).add(C, "touchend", () => {}
      ).add(C, "touchstart", _).add(C, "mousedown", _).add(C, "touchcancel", B).add(C, "contextmenu", B).add(C, "click", Q, !0)
  }
  function j() {
      x.clear(),
      L.clear()
  }
  function et() {
      const y = R ? i : n;
      L.add(y, "touchmove", N, A).add(y, "touchend", B).add(y, "mousemove", N, A).add(y, "mouseup", B)
  }
  function st(y) {
      const _ = y.nodeName || "";
      return D.includes(_)
  }
  function U() {
      return (d ? I : F)[R ? "mouse" : "touch"]
  }
  function it(y, _) {
      const C = f.add(Tt(y) * -1)
        , O = b.byDistance(y, !d).distance;
      return d || P(y) < E ? O : g && _ ? O * .5 : b.byIndex(C.get(), 0).distance
  }
  function rt(y) {
      const _ = Et(y, o);
      R = _,
      G = d && _ && !y.buttons && $,
      $ = at(c.get(), e.get()) >= 2,
      !(_ && y.button !== 0) && (st(y.target) || (W = !0,
      s.pointerDown(y),
      u.useFriction(0).useDuration(0),
      c.set(e),
      et(),
      z = s.readPoint(y),
      H = s.readPoint(y, v),
      m.emit("pointerDown")))
  }
  function N(y) {
      if (!Et(y, o) && y.touches.length >= 2)
          return B(y);
      const C = s.readPoint(y)
        , O = s.readPoint(y, v)
        , q = at(C, z)
        , K = at(O, H);
      if (!X && !R && (!y.cancelable || (X = q > K,
      !X)))
          return B(y);
      const Y = s.pointerMove(y);
      q > p && (G = !0),
      u.useFriction(.3).useDuration(.75),
      l.start(),
      c.add(T(Y)),
      y.preventDefault()
  }
  function B(y) {
      const C = b.byDistance(0, !1).index !== f.get()
        , O = s.pointerUp(y) * U()
        , q = it(T(O), C)
        , K = Xt(O, q)
        , Y = w - 10 * K
        , J = a + K / 50;
      X = !1,
      W = !1,
      L.clear(),
      u.useDuration(Y).useFriction(J),
      r.distance(q, !d),
      R = !1,
      m.emit("pointerUp")
  }
  function Q(y) {
      G && (y.stopPropagation(),
      y.preventDefault(),
      G = !1)
  }
  function k() {
      return W
  }
  return {
      init: ot,
      destroy: j,
      pointerDown: k
  }
}
function tn(t, n) {
  let o, c;
  function s(f) {
      return f.timeStamp
  }
  function e(f, m) {
      const d = `client${(m || t.scroll) === "x" ? "X" : "Y"}`;
      return (Et(f, n) ? f : f.touches[0])[d]
  }
  function l(f) {
      return o = f,
      c = f,
      e(f)
  }
  function r(f) {
      const m = e(f) - e(c)
        , S = s(f) - s(o) > 170;
      return c = f,
      S && (o = f),
      m
  }
  function u(f) {
      if (!o || !c)
          return 0;
      const m = e(c) - e(o)
        , S = s(f) - s(o)
        , d = s(f) - s(c) > 170
        , p = m / S;
      return S && !d && P(p) > .1 ? p : 0
  }
  return {
      pointerDown: l,
      pointerMove: r,
      pointerUp: u,
      readPoint: e
  }
}
function nn() {
  function t(i) {
      const {offsetTop: o, offsetLeft: c, offsetWidth: s, offsetHeight: e} = i;
      return {
          top: o,
          right: c + s,
          bottom: o + e,
          left: c,
          width: s,
          height: e
      }
  }
  return {
      measure: t
  }
}
function en(t) {
  function n(o) {
      return t * (o / 100)
  }
  return {
      measure: n
  }
}
function sn(t, n, i, o, c, s, e) {
  const l = [t].concat(o);
  let r, u, b = [], f = !1;
  function m(g) {
      return c.measureSize(e.measure(g))
  }
  function S(g) {
      if (!s)
          return;
      u = m(t),
      b = o.map(m);
      function a(h) {
          for (const v of h) {
              if (f)
                  return;
              const T = v.target === t
                , D = o.indexOf(v.target)
                , A = T ? u : b[D]
                , x = m(T ? t : o[D]);
              if (P(x - A) >= .5) {
                  g.reInit(),
                  n.emit("resize");
                  break
              }
          }
      }
      r = new ResizeObserver(h => {
          (gt(s) || s(g, h)) && a(h)
      }
      ),
      i.requestAnimationFrame( () => {
          l.forEach(h => r.observe(h))
      }
      )
  }
  function d() {
      f = !0,
      r && r.disconnect()
  }
  return {
      init: S,
      destroy: d
  }
}
function on(t, n, i, o, c, s) {
  let e = 0
    , l = 0
    , r = c
    , u = s
    , b = t.get()
    , f = 0;
  function m(A) {
      const x = A / 1e3
        , L = r * x
        , E = o.get() - t.get()
        , F = !r;
      let I = 0;
      return F ? (e = 0,
      i.set(o),
      t.set(o),
      I = E) : (i.set(t),
      e += E / L,
      e *= u,
      b += e,
      t.add(e * x),
      I = b - f),
      l = Tt(I),
      f = b,
      D
  }
  function S() {
      const A = o.get() - n.get();
      return P(A) < .001
  }
  function d() {
      return r
  }
  function p() {
      return l
  }
  function g() {
      return e
  }
  function a() {
      return v(c)
  }
  function h() {
      return T(s)
  }
  function v(A) {
      return r = A,
      D
  }
  function T(A) {
      return u = A,
      D
  }
  const D = {
      direction: p,
      duration: d,
      velocity: g,
      seek: m,
      settled: S,
      useBaseFriction: h,
      useBaseDuration: a,
      useFriction: T,
      useDuration: v
  };
  return D
}
function rn(t, n, i, o, c) {
  const s = c.measure(10)
    , e = c.measure(50)
    , l = nt(.1, .99);
  let r = !1;
  function u() {
      return !(r || !t.reachedAny(i.get()) || !t.reachedAny(n.get()))
  }
  function b(S) {
      if (!u())
          return;
      const d = t.reachedMin(n.get()) ? "min" : "max"
        , p = P(t[d] - n.get())
        , g = i.get() - n.get()
        , a = l.constrain(p / e);
      i.subtract(g * a),
      !S && P(g) < s && (i.set(t.constrain(i.get())),
      o.useDuration(25).useBaseFriction())
  }
  function f(S) {
      r = !S
  }
  return {
      shouldConstrain: u,
      constrain: b,
      toggleActive: f
  }
}
function cn(t, n, i, o, c) {
  const s = nt(-n + t, 0)
    , e = f()
    , l = b()
    , r = m();
  function u(d, p) {
      return at(d, p) < 1
  }
  function b() {
      const d = e[0]
        , p = V(e)
        , g = e.lastIndexOf(d)
        , a = e.indexOf(p) + 1;
      return nt(g, a)
  }
  function f() {
      return i.map( (d, p) => {
          const {min: g, max: a} = s
            , h = s.constrain(d)
            , v = !p
            , T = At(i, p);
          return v ? a : T || u(g, h) ? g : u(a, h) ? a : h
      }
      ).map(d => parseFloat(d.toFixed(3)))
  }
  function m() {
      if (n <= t + c)
          return [s.max];
      if (o === "keepSnaps")
          return e;
      const {min: d, max: p} = l;
      return e.slice(d, p)
  }
  return {
      snapsContained: r,
      scrollContainLimit: l
  }
}
function un(t, n, i) {
  const o = n[0]
    , c = i ? o - t : V(n);
  return {
      limit: nt(c, o)
  }
}
function an(t, n, i, o) {
  const s = n.min + .1
    , e = n.max + .1
    , {reachedMin: l, reachedMax: r} = nt(s, e);
  function u(m) {
      return m === 1 ? r(i.get()) : m === -1 ? l(i.get()) : !1
  }
  function b(m) {
      if (!u(m))
          return;
      const S = t * (m * -1);
      o.forEach(d => d.add(S))
  }
  return {
      loop: b
  }
}
function ln(t) {
  const {max: n, length: i} = t;
  function o(s) {
      const e = s - n;
      return i ? e / -i : 0
  }
  return {
      get: o
  }
}
function fn(t, n, i, o, c) {
  const {startEdge: s, endEdge: e} = t
    , {groupSlides: l} = c
    , r = f().map(n.measure)
    , u = m()
    , b = S();
  function f() {
      return l(o).map(p => V(p)[e] - p[0][s]).map(P)
  }
  function m() {
      return o.map(p => i[s] - p[s]).map(p => -P(p))
  }
  function S() {
      return l(u).map(p => p[0]).map( (p, g) => p + r[g])
  }
  return {
      snaps: u,
      snapsAligned: b
  }
}
function dn(t, n, i, o, c, s) {
  const {groupSlides: e} = c
    , {min: l, max: r} = o
    , u = b();
  function b() {
      const m = e(s)
        , S = !t || n === "keepSnaps";
      return i.length === 1 ? [s] : S ? m : m.slice(l, r).map( (d, p, g) => {
          const a = !p
            , h = At(g, p);
          if (a) {
              const v = V(g[0]) + 1;
              return kt(v)
          }
          if (h) {
              const v = pt(s) - V(g)[0] + 1;
              return kt(v, V(g)[0])
          }
          return d
      }
      )
  }
  return {
      slideRegistry: u
  }
}
function pn(t, n, i, o, c) {
  const {reachedAny: s, removeOffset: e, constrain: l} = o;
  function r(d) {
      return d.concat().sort( (p, g) => P(p) - P(g))[0]
  }
  function u(d) {
      const p = t ? e(d) : l(d)
        , g = n.map( (h, v) => ({
          diff: b(h - p, 0),
          index: v
      })).sort( (h, v) => P(h.diff) - P(v.diff))
        , {index: a} = g[0];
      return {
          index: a,
          distance: p
      }
  }
  function b(d, p) {
      const g = [d, d + i, d - i];
      if (!t)
          return d;
      if (!p)
          return r(g);
      const a = g.filter(h => Tt(h) === p);
      return a.length ? r(a) : V(g) - i
  }
  function f(d, p) {
      const g = n[d] - c.get()
        , a = b(g, p);
      return {
          index: d,
          distance: a
      }
  }
  function m(d, p) {
      const g = c.get() + d
        , {index: a, distance: h} = u(g)
        , v = !t && s(g);
      if (!p || v)
          return {
              index: a,
              distance: d
          };
      const T = n[a] - h
        , D = d + b(T, 0);
      return {
          index: a,
          distance: D
      }
  }
  return {
      byDistance: m,
      byIndex: f,
      shortcut: b
  }
}
function mn(t, n, i, o, c, s, e) {
  function l(f) {
      const m = f.distance
        , S = f.index !== n.get();
      s.add(m),
      m && (o.duration() ? t.start() : (t.update(),
      t.render(1),
      t.update())),
      S && (i.set(n.get()),
      n.set(f.index),
      e.emit("select"))
  }
  function r(f, m) {
      const S = c.byDistance(f, m);
      l(S)
  }
  function u(f, m) {
      const S = n.clone().set(f)
        , d = c.byIndex(S.get(), m);
      l(d)
  }
  return {
      distance: r,
      index: u
  }
}
function gn(t, n, i, o, c, s, e, l) {
  const r = {
      passive: !0,
      capture: !0
  };
  let u = 0;
  function b(S) {
      if (!l)
          return;
      function d(p) {
          if (new Date().getTime() - u > 10)
              return;
          e.emit("slideFocusStart"),
          t.scrollLeft = 0;
          const h = i.findIndex(v => v.includes(p));
          It(h) && (c.useDuration(0),
          o.index(h, 0),
          e.emit("slideFocus"))
      }
      s.add(document, "keydown", f, !1),
      n.forEach( (p, g) => {
          s.add(p, "focus", a => {
              (gt(l) || l(S, a)) && d(g)
          }
          , r)
      }
      )
  }
  function f(S) {
      S.code === "Tab" && (u = new Date().getTime())
  }
  return {
      init: b
  }
}
function ut(t) {
  let n = t;
  function i() {
      return n
  }
  function o(r) {
      n = e(r)
  }
  function c(r) {
      n += e(r)
  }
  function s(r) {
      n -= e(r)
  }
  function e(r) {
      return It(r) ? r : r.get()
  }
  return {
      get: i,
      set: o,
      add: c,
      subtract: s
  }
}
function zt(t, n) {
  const i = t.scroll === "x" ? s : e
    , o = n.style;
  let c = !1;
  function s(f) {
      return `translate3d(${f}px,0px,0px)`
  }
  function e(f) {
      return `translate3d(0px,${f}px,0px)`
  }
  function l(f) {
      c || (o.transform = i(t.direction(f)))
  }
  function r(f) {
      c = !f
  }
  function u() {
      c || (o.transform = "",
      n.getAttribute("style") || n.removeAttribute("style"))
  }
  return {
      clear: u,
      to: l,
      toggleActive: r
  }
}
function hn(t, n, i, o, c, s, e, l, r) {
  const b = lt(c)
    , f = lt(c).reverse()
    , m = a().concat(h());
  function S(x, L) {
      return x.reduce( (E, F) => E - c[F], L)
  }
  function d(x, L) {
      return x.reduce( (E, F) => S(E, L) > 0 ? E.concat([F]) : E, [])
  }
  function p(x) {
      return s.map( (L, E) => ({
          start: L - o[E] + .5 + x,
          end: L + n - .5 + x
      }))
  }
  function g(x, L, E) {
      const F = p(L);
      return x.map(I => {
          const w = E ? 0 : -i
            , $ = E ? i : 0
            , z = E ? "end" : "start"
            , H = F[I][z];
          return {
              index: I,
              loopPoint: H,
              slideLocation: ut(-1),
              translate: zt(t, r[I]),
              target: () => l.get() > H ? w : $
          }
      }
      )
  }
  function a() {
      const x = e[0]
        , L = d(f, x);
      return g(L, i, !1)
  }
  function h() {
      const x = n - e[0] - 1
        , L = d(b, x);
      return g(L, -i, !0)
  }
  function v() {
      return m.every( ({index: x}) => {
          const L = b.filter(E => E !== x);
          return S(L, n) <= .1
      }
      )
  }
  function T() {
      m.forEach(x => {
          const {target: L, translate: E, slideLocation: F} = x
            , I = L();
          I !== F.get() && (E.to(I),
          F.set(I))
      }
      )
  }
  function D() {
      m.forEach(x => x.translate.clear())
  }
  return {
      canLoop: v,
      clear: D,
      loop: T,
      loopPoints: m
  }
}
function bn(t, n, i) {
  let o, c = !1;
  function s(r) {
      if (!i)
          return;
      function u(b) {
          for (const f of b)
              if (f.type === "childList") {
                  r.reInit(),
                  n.emit("slidesChanged");
                  break
              }
      }
      o = new MutationObserver(b => {
          c || (gt(i) || i(r, b)) && u(b)
      }
      ),
      o.observe(t, {
          childList: !0
      })
  }
  function e() {
      o && o.disconnect(),
      c = !0
  }
  return {
      init: s,
      destroy: e
  }
}
function Sn(t, n, i, o) {
  const c = {};
  let s = null, e = null, l, r = !1;
  function u() {
      l = new IntersectionObserver(d => {
          r || (d.forEach(p => {
              const g = n.indexOf(p.target);
              c[g] = p
          }
          ),
          s = null,
          e = null,
          i.emit("slidesInView"))
      }
      ,{
          root: t.parentElement,
          threshold: o
      }),
      n.forEach(d => l.observe(d))
  }
  function b() {
      l && l.disconnect(),
      r = !0
  }
  function f(d) {
      return ft(c).reduce( (p, g) => {
          const a = parseInt(g)
            , {isIntersecting: h} = c[a];
          return (d && h || !d && !h) && p.push(a),
          p
      }
      , [])
  }
  function m(d=!0) {
      if (d && s)
          return s;
      if (!d && e)
          return e;
      const p = f(d);
      return d && (s = p),
      d || (e = p),
      p
  }
  return {
      init: u,
      destroy: b,
      get: m
  }
}
function yn(t, n, i, o, c, s) {
  const {measureSize: e, startEdge: l, endEdge: r} = t
    , u = i[0] && c
    , b = d()
    , f = p()
    , m = i.map(e)
    , S = g();
  function d() {
      if (!u)
          return 0;
      const h = i[0];
      return P(n[l] - h[l])
  }
  function p() {
      if (!u)
          return 0;
      const h = s.getComputedStyle(V(o));
      return parseFloat(h.getPropertyValue(`margin-${r}`))
  }
  function g() {
      return i.map( (h, v, T) => {
          const D = !v
            , A = At(T, v);
          return D ? m[v] + b : A ? m[v] + f : T[v + 1][l] - h[l]
      }
      ).map(P)
  }
  return {
      slideSizes: m,
      slideSizesWithGaps: S,
      startGap: b,
      endGap: f
  }
}
function vn(t, n, i, o, c, s, e, l, r) {
  const {startEdge: u, endEdge: b, direction: f} = t
    , m = It(i);
  function S(a, h) {
      return lt(a).filter(v => v % h === 0).map(v => a.slice(v, v + h))
  }
  function d(a) {
      return a.length ? lt(a).reduce( (h, v, T) => {
          const D = V(h) || 0
            , A = D === 0
            , x = v === pt(a)
            , L = c[u] - s[D][u]
            , E = c[u] - s[v][b]
            , F = !o && A ? f(e) : 0
            , I = !o && x ? f(l) : 0
            , w = P(E - I - (L + F));
          return T && w > n + r && h.push(v),
          x && h.push(a.length),
          h
      }
      , []).map( (h, v, T) => {
          const D = Math.max(T[v - 1] || 0);
          return a.slice(D, h)
      }
      ) : []
  }
  function p(a) {
      return m ? S(a, i) : d(a)
  }
  return {
      groupSlides: p
  }
}
function xn(t, n, i, o, c, s, e) {
  const {align: l, axis: r, direction: u, startIndex: b, loop: f, duration: m, dragFree: S, dragThreshold: d, inViewThreshold: p, slidesToScroll: g, skipSnaps: a, containScroll: h, watchResize: v, watchSlides: T, watchDrag: D, watchFocus: A} = s
    , x = 2
    , L = nn()
    , E = L.measure(n)
    , F = i.map(L.measure)
    , I = Zt(r, u)
    , w = I.measureSize(E)
    , $ = en(w)
    , z = Yt(l, w)
    , H = !f && !!h
    , W = f || !!h
    , {slideSizes: X, slideSizesWithGaps: G, startGap: R, endGap: ot} = yn(I, E, F, i, W, c)
    , j = vn(I, w, g, f, E, F, R, ot, x)
    , {snaps: et, snapsAligned: st} = fn(I, z, E, F, j)
    , U = -V(et) + V(G)
    , {snapsContained: it, scrollContainLimit: rt} = cn(w, U, st, h, x)
    , N = H ? it : st
    , {limit: B} = un(U, N, f)
    , Q = $t(pt(N), b, f)
    , k = Q.clone()
    , M = lt(i)
    , y = ({dragHandler: Z, scrollBody: yt, scrollBounds: vt, options: {loop: mt}}, xt) => {
      mt || vt.constrain(Z.pointerDown()),
      yt.seek(xt)
  }
    , _ = ({scrollBody: Z, translate: yt, location: vt, offsetLocation: mt, scrollLooper: xt, slideLooper: qt, dragHandler: Gt, animation: Rt, eventHandler: Ft, scrollBounds: Ut, options: {loop: Ct}}, Bt) => {
      const Ot = Z.settled()
        , Qt = !Ut.shouldConstrain()
        , wt = Ct ? Ot : Ot && Qt;
      wt && !Gt.pointerDown() && (Rt.stop(),
      Ft.emit("settle")),
      wt || Ft.emit("scroll");
      const Kt = vt.get() * Bt + Y.get() * (1 - Bt);
      mt.set(Kt),
      Ct && (xt.loop(Z.direction()),
      qt.loop()),
      yt.to(mt.get())
  }
    , C = Jt(o, c, Z => y(St, Z), Z => _(St, Z))
    , O = .68
    , q = N[Q.get()]
    , K = ut(q)
    , Y = ut(q)
    , J = ut(q)
    , tt = ut(q)
    , ct = on(K, J, Y, tt, m, O)
    , ht = pn(f, N, U, B, tt)
    , bt = mn(C, Q, k, ct, ht, tt, e)
    , Dt = ln(B)
    , Mt = dt()
    , Ht = Sn(n, i, e, p)
    , {slideRegistry: Pt} = dn(H, h, N, rt, j, M)
    , jt = gn(t, i, Pt, bt, ct, Mt, e, A)
    , St = {
      ownerDocument: o,
      ownerWindow: c,
      eventHandler: e,
      containerRect: E,
      slideRects: F,
      animation: C,
      axis: I,
      dragHandler: Wt(I, t, o, c, tt, tn(I, c), K, C, bt, ct, ht, Q, e, $, S, d, a, O, D),
      eventStore: Mt,
      percentOfView: $,
      index: Q,
      indexPrevious: k,
      limit: B,
      location: K,
      offsetLocation: J,
      previousLocation: Y,
      options: s,
      resizeHandler: sn(n, e, c, i, I, v, L),
      scrollBody: ct,
      scrollBounds: rn(B, J, tt, ct, $),
      scrollLooper: an(U, B, J, [K, J, Y, tt]),
      scrollProgress: Dt,
      scrollSnapList: N.map(Dt.get),
      scrollSnaps: N,
      scrollTarget: ht,
      scrollTo: bt,
      slideLooper: hn(I, w, U, X, G, et, N, J, i),
      slideFocus: jt,
      slidesHandler: bn(n, e, T),
      slidesInView: Ht,
      slideIndexes: M,
      slideRegistry: Pt,
      slidesToScroll: j,
      target: tt,
      translate: zt(I, n)
  };
  return St
}
function Ln() {
  let t = {}, n;
  function i(u) {
      n = u
  }
  function o(u) {
      return t[u] || []
  }
  function c(u) {
      return o(u).forEach(b => b(n, u)),
      r
  }
  function s(u, b) {
      return t[u] = o(u).concat([b]),
      r
  }
  function e(u, b) {
      return t[u] = o(u).filter(f => f !== b),
      r
  }
  function l() {
      t = {}
  }
  const r = {
      init: i,
      emit: c,
      off: e,
      on: s,
      clear: l
  };
  return r
}
const En = {
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
function In(t) {
  function n(s, e) {
      return Vt(s, e || {})
  }
  function i(s) {
      const e = s.breakpoints || {}
        , l = ft(e).filter(r => t.matchMedia(r).matches).map(r => e[r]).reduce( (r, u) => n(r, u), {});
      return n(s, l)
  }
  function o(s) {
      return s.map(e => ft(e.breakpoints || {})).reduce( (e, l) => e.concat(l), []).map(t.matchMedia)
  }
  return {
      mergeOptions: n,
      optionsAtMedia: i,
      optionsMediaQueries: o
  }
}
function Tn(t) {
  let n = [];
  function i(s, e) {
      return n = e.filter( ({options: l}) => t.optionsAtMedia(l).active !== !1),
      n.forEach(l => l.init(s, t)),
      e.reduce( (l, r) => Object.assign(l, {
          [r.name]: r
      }), {})
  }
  function o() {
      n = n.filter(s => s.destroy())
  }
  return {
      init: i,
      destroy: o
  }
}
function _t(t, n, i) {
  const o = t.ownerDocument
    , c = o.defaultView
    , s = In(c)
    , e = Tn(s)
    , l = dt()
    , r = Ln()
    , {mergeOptions: u, optionsAtMedia: b, optionsMediaQueries: f} = s
    , {on: m, off: S, emit: d} = r
    , p = I;
  let g = !1, a, h = u(En, _t.globalOptions), v = u(h), T = [], D, A, x;
  function L() {
      const {container: M, slides: y} = v;
      A = (Lt(M) ? t.querySelector(M) : M) || t.children[0];
      const C = Lt(y) ? A.querySelectorAll(y) : y;
      x = [].slice.call(C || A.children)
  }
  function E(M) {
      const y = xn(t, A, x, o, c, M, r);
      if (M.loop && !y.slideLooper.canLoop()) {
          const _ = Object.assign({}, M, {
              loop: !1
          });
          return E(_)
      }
      return y
  }
  function F(M, y) {
      g || (h = u(h, M),
      v = b(h),
      T = y || T,
      L(),
      a = E(v),
      f([h, ...T.map( ({options: _}) => _)]).forEach(_ => l.add(_, "change", I)),
      v.active && (a.translate.to(a.location.get()),
      a.animation.init(),
      a.slidesInView.init(),
      a.slideFocus.init(k),
      a.eventHandler.init(k),
      a.resizeHandler.init(k),
      a.slidesHandler.init(k),
      a.options.loop && a.slideLooper.loop(),
      A.offsetParent && x.length && a.dragHandler.init(k),
      D = e.init(k, T)))
  }
  function I(M, y) {
      const _ = j();
      w(),
      F(u({
          startIndex: _
      }, M), y),
      r.emit("reInit")
  }
  function w() {
      a.dragHandler.destroy(),
      a.eventStore.clear(),
      a.translate.clear(),
      a.slideLooper.clear(),
      a.resizeHandler.destroy(),
      a.slidesHandler.destroy(),
      a.slidesInView.destroy(),
      a.animation.destroy(),
      e.destroy(),
      l.clear()
  }
  function $() {
      g || (g = !0,
      l.clear(),
      w(),
      r.emit("destroy"),
      r.clear())
  }
  function z(M, y, _) {
      !v.active || g || (a.scrollBody.useBaseFriction().useDuration(y === !0 ? 0 : v.duration),
      a.scrollTo.index(M, _ || 0))
  }
  function H(M) {
      const y = a.index.add(1).get();
      z(y, M, -1)
  }
  function W(M) {
      const y = a.index.add(-1).get();
      z(y, M, 1)
  }
  function X() {
      return a.index.add(1).get() !== j()
  }
  function G() {
      return a.index.add(-1).get() !== j()
  }
  function R() {
      return a.scrollSnapList
  }
  function ot() {
      return a.scrollProgress.get(a.location.get())
  }
  function j() {
      return a.index.get()
  }
  function et() {
      return a.indexPrevious.get()
  }
  function st() {
      return a.slidesInView.get()
  }
  function U() {
      return a.slidesInView.get(!1)
  }
  function it() {
      return D
  }
  function rt() {
      return a
  }
  function N() {
      return t
  }
  function B() {
      return A
  }
  function Q() {
      return x
  }
  const k = {
      canScrollNext: X,
      canScrollPrev: G,
      containerNode: B,
      internalEngine: rt,
      destroy: $,
      off: S,
      on: m,
      emit: d,
      plugins: it,
      previousScrollSnap: et,
      reInit: p,
      rootNode: N,
      scrollNext: H,
      scrollPrev: W,
      scrollProgress: ot,
      scrollSnapList: R,
      scrollTo: z,
      selectedScrollSnap: j,
      slideNodes: Q,
      slidesInView: st,
      slidesNotInView: U
  };
  return F(n, i),
  setTimeout( () => r.emit("init"), 0),
  k
}
_t.globalOptions = void 0;
function An(t, n="Все направления", i=!0, o=!0) {
  var c = window.innerWidth
    , s = ` <div class="section section--doctors">
    <div class="specialists-section container">
      <div class="specialists-section__header">${t}</div>
      <div class="specialists-section__categories" style="display: ${i ? "block" : "none"};">
        <div class="categories-list" id="categoryButtons"></div>
      </div>
      <div class="specialists-list ${o ? "embla" : ""}" id="specialistsList">
        <div class="specialists-list__container ${o ? "embla__container" : ""}"></div>
        ${o ? `
          <button class="embla__button embla__button--prev" type="button">
            <img src="${window.location.origin}/static/images/left.svg" alt="" />
          </button>
          <button class="embla__button embla__button--next" type="button">
            <img src="${window.location.origin}/static/images/right.svg" alt="" />
          </button>
        ` : ""}
      </div>

    </div>
  </div>`;
  document.querySelector("#doctors").innerHTML = s;
  const e = ["Все направления", "Остеопатия", "Иглорефлексотерапия", "Йога", "Кинезиология", "ЛФК", "Мануальная терапия", "Массаж", "Пилатес", "Психология", "Терапия", "Эндокринология"]
    , l = [{
      id: 1,
      name: "Ким Игорь Климентович",
      role: "Остеопат, мануальный терапевт, микрокинезитерапевт",
      experience: 1994,
      categories: ["Остеопатия", "Мануальная терапия"],
      image: "./assets/images/doctors/1.png"
  }, {
      id: 2,
      name: "Шевченко Оксана Анатольевна",
      role: "Врач остеопат",
      experience: 1994,
      categories: ["Остеопатия"],
      image: "./assets/images/doctors/2.png"
  }, {
      id: 3,
      name: "Яковлева Марина Анатольевна",
      role: "Остеопат, мануальный терапевт, микрокинезитерапевт",
      experience: 1994,
      categories: ["Остеопатия", "Мануальная терапия"],
      image: "./assets/images/doctors/3.png"
  }, {
      id: 4,
      name: "Шевченко Оксана Анатольевна",
      role: "Врач остеопат",
      experience: 1994,
      categories: ["Остеопатия"],
      image: "./assets/images/doctors/2.png"
  }];
  function r() {
      const m = document.getElementById("categoryButtons");
      m.innerHTML = e.map(S => `
    <div class="category-button${S === n ? " active" : ""}" data-category="${S}">
      ${S}
    </div>
  `).join("")
  }
  function u(m=n) {
      const S = document.querySelector(".specialists-list__container");
      let d = m === "Все направления" ? l : l.filter(p => p.categories.includes(m));
      if (S.innerHTML = d.map(p => `
    <a href="/doctor.html" class="specialist-card">
      <div class="specialist-card__image">
        <img src="${p.image}" alt="${p.name}" />
      </div>
      <div class="specialist-card__info">
        <div class="specialist-card__name">${p.name}</div>
        <div class="specialist-card__role">${p.role}</div>
        <div class="specialist-card__experience">Стаж c ${p.experience} г.</div>
        <button class="specialist-card__btn" data-id="${p.id}">Записаться</button>
      </div>
    </a>
  `).join(""),
      o) {
          const p = document.getElementById("specialistsList")
            , g = _t(p, {
              loop: !1,
              slidesToScroll: c > 1200 ? 3 : "auto"
          })
            , a = document.querySelector("#specialistsList .embla__button--prev")
            , h = document.querySelector("#specialistsList .embla__button--next")
            , v = () => {
              a.classList.toggle("embla__button--disabled", !g.canScrollPrev()),
              h.classList.toggle("embla__button--disabled", !g.canScrollNext())
          }
          ;
          a.addEventListener("click", g.scrollPrev),
          h.addEventListener("click", g.scrollNext),
          g.on("select", v),
          g.on("init", v)
      }
      document.querySelectorAll(".specialist-card__btn").forEach(p => {
          p.addEventListener("click", g => {
              const a = g.target.getAttribute("data-id");
              alert(`переход на запись к доктору id ${a}`)
          }
          )
      }
      )
  }
  function b(m) {
      document.querySelectorAll(".category-button").forEach(S => {
          S.classList.remove("active")
      }
      ),
      m.classList.add("active")
  }
  function f() {
      document.querySelectorAll(".category-button").forEach(m => {
          m.addEventListener("click", S => {
              const d = S.target.getAttribute("data-category");
              b(S.target),
              u(d)
          }
          )
      }
      )
  }
  r(),
  u(n),
  f()
}
export {_t as E, An as p};
