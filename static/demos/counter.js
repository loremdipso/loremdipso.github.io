function d() {
}
function B(t) {
  return t();
}
function j() {
  return /* @__PURE__ */ Object.create(null);
}
function $(t) {
  t.forEach(B);
}
function L(t) {
  return typeof t == "function";
}
function I(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function M(t) {
  return Object.keys(t).length === 0;
}
function h(t, e) {
  t.appendChild(e);
}
function P(t, e, n) {
  t.insertBefore(e, n || null);
}
function T(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function N(t) {
  return document.createElement(t);
}
function g(t) {
  return document.createTextNode(t);
}
function q(t, e, n, o) {
  return t.addEventListener(e, n, o), () => t.removeEventListener(e, n, o);
}
function z(t) {
  return Array.from(t.childNodes);
}
function D(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
let k;
function a(t) {
  k = t;
}
const l = [], O = [], p = [], S = [], F = Promise.resolve();
let b = !1;
function G() {
  b || (b = !0, F.then(A));
}
function x(t) {
  p.push(t);
}
const y = /* @__PURE__ */ new Set();
let m = 0;
function A() {
  const t = k;
  do {
    for (; m < l.length; ) {
      const e = l[m];
      m++, a(e), H(e.$$);
    }
    for (a(null), l.length = 0, m = 0; O.length; )
      O.pop()();
    for (let e = 0; e < p.length; e += 1) {
      const n = p[e];
      y.has(n) || (y.add(n), n());
    }
    p.length = 0;
  } while (l.length);
  for (; S.length; )
    S.pop()();
  b = !1, y.clear(), a(t);
}
function H(t) {
  if (t.fragment !== null) {
    t.update(), $(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(x);
  }
}
const J = /* @__PURE__ */ new Set();
function K(t, e) {
  t && t.i && (J.delete(t), t.i(e));
}
function Q(t, e, n, o) {
  const { fragment: c, after_update: s } = t.$$;
  c && c.m(e, n), o || x(() => {
    const i = t.$$.on_mount.map(B).filter(L);
    t.$$.on_destroy ? t.$$.on_destroy.push(...i) : $(i), t.$$.on_mount = [];
  }), s.forEach(x);
}
function R(t, e) {
  const n = t.$$;
  n.fragment !== null && ($(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function U(t, e) {
  t.$$.dirty[0] === -1 && (l.push(t), G(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function V(t, e, n, o, c, s, i, _ = [-1]) {
  const u = k;
  a(t);
  const r = t.$$ = {
    fragment: null,
    ctx: [],
    props: s,
    update: d,
    not_equal: c,
    bound: j(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (u ? u.$$.context : [])),
    callbacks: j(),
    dirty: _,
    skip_bound: !1,
    root: e.target || u.$$.root
  };
  i && i(r.root);
  let w = !1;
  if (r.ctx = n ? n(t, e.props || {}, (f, E, ...v) => {
    const C = v.length ? v[0] : E;
    return r.ctx && c(r.ctx[f], r.ctx[f] = C) && (!r.skip_bound && r.bound[f] && r.bound[f](C), w && U(t, f)), E;
  }) : [], r.update(), w = !0, $(r.before_update), r.fragment = o ? o(r.ctx) : !1, e.target) {
    if (e.hydrate) {
      const f = z(e.target);
      r.fragment && r.fragment.l(f), f.forEach(T);
    } else
      r.fragment && r.fragment.c();
    e.intro && K(t.$$.fragment), Q(t, e.target, e.anchor, e.customElement), A();
  }
  a(u);
}
class W {
  $destroy() {
    R(this, 1), this.$destroy = d;
  }
  $on(e, n) {
    if (!L(n))
      return d;
    const o = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return o.push(n), () => {
      const c = o.indexOf(n);
      c !== -1 && o.splice(c, 1);
    };
  }
  $set(e) {
    this.$$set && !M(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
function X(t) {
  let e, n, o, c, s, i, _;
  return {
    c() {
      e = N("main"), n = N("button"), o = g("Clicked "), c = g(t[0]), s = g(" times");
    },
    m(u, r) {
      P(u, e, r), h(e, n), h(n, o), h(n, c), h(n, s), i || (_ = q(n, "click", t[1]), i = !0);
    },
    p(u, [r]) {
      r & 1 && D(c, u[0]);
    },
    i: d,
    o: d,
    d(u) {
      u && T(e), i = !1, _();
    }
  };
}
function Y(t, e, n) {
  let o = 0;
  return [o, () => {
    n(0, o += 1);
  }];
}
class Z extends W {
  constructor(e) {
    super(), V(this, e, Y, X, I, {});
  }
}
const tt = new Z({
  target: document.getElementById("counter")
});
export {
  tt as default
};
