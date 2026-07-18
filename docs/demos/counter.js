(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("main.svelte-x27xhg{display:flex;justify-content:center}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
function d() {
}
function S(t) {
  return t();
}
function j() {
  return /* @__PURE__ */ Object.create(null);
}
function p(t) {
  t.forEach(S);
}
function B(t) {
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
function L(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function A(t) {
  return document.createElement(t);
}
function $(t) {
  return document.createTextNode(t);
}
function q(t, e, n, o) {
  return t.addEventListener(e, n, o), () => t.removeEventListener(e, n, o);
}
function z(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function D(t) {
  return Array.from(t.childNodes);
}
function F(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
let k;
function a(t) {
  k = t;
}
const l = [], N = [], g = [], O = [], G = Promise.resolve();
let b = !1;
function H() {
  b || (b = !0, G.then(T));
}
function x(t) {
  g.push(t);
}
const y = /* @__PURE__ */ new Set();
let m = 0;
function T() {
  const t = k;
  do {
    for (; m < l.length; ) {
      const e = l[m];
      m++, a(e), J(e.$$);
    }
    for (a(null), l.length = 0, m = 0; N.length; )
      N.pop()();
    for (let e = 0; e < g.length; e += 1) {
      const n = g[e];
      y.has(n) || (y.add(n), n());
    }
    g.length = 0;
  } while (l.length);
  for (; O.length; )
    O.pop()();
  b = !1, y.clear(), a(t);
}
function J(t) {
  if (t.fragment !== null) {
    t.update(), p(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(x);
  }
}
const K = /* @__PURE__ */ new Set();
function Q(t, e) {
  t && t.i && (K.delete(t), t.i(e));
}
function R(t, e, n, o) {
  const { fragment: c, after_update: f } = t.$$;
  c && c.m(e, n), o || x(() => {
    const i = t.$$.on_mount.map(S).filter(B);
    t.$$.on_destroy ? t.$$.on_destroy.push(...i) : p(i), t.$$.on_mount = [];
  }), f.forEach(x);
}
function U(t, e) {
  const n = t.$$;
  n.fragment !== null && (p(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function V(t, e) {
  t.$$.dirty[0] === -1 && (l.push(t), H(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function W(t, e, n, o, c, f, i, _ = [-1]) {
  const u = k;
  a(t);
  const r = t.$$ = {
    fragment: null,
    ctx: [],
    props: f,
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
  let v = !1;
  if (r.ctx = n ? n(t, e.props || {}, (s, w, ...E) => {
    const C = E.length ? E[0] : w;
    return r.ctx && c(r.ctx[s], r.ctx[s] = C) && (!r.skip_bound && r.bound[s] && r.bound[s](C), v && V(t, s)), w;
  }) : [], r.update(), v = !0, p(r.before_update), r.fragment = o ? o(r.ctx) : !1, e.target) {
    if (e.hydrate) {
      const s = D(e.target);
      r.fragment && r.fragment.l(s), s.forEach(L);
    } else
      r.fragment && r.fragment.c();
    e.intro && Q(t.$$.fragment), R(t, e.target, e.anchor, e.customElement), T();
  }
  a(u);
}
class X {
  $destroy() {
    U(this, 1), this.$destroy = d;
  }
  $on(e, n) {
    if (!B(n))
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
function Y(t) {
  let e, n, o, c, f, i, _;
  return {
    c() {
      e = A("main"), n = A("button"), o = $("Clicked "), c = $(t[0]), f = $(" times"), z(e, "class", "svelte-x27xhg");
    },
    m(u, r) {
      P(u, e, r), h(e, n), h(n, o), h(n, c), h(n, f), i || (_ = q(n, "click", t[1]), i = !0);
    },
    p(u, [r]) {
      r & 1 && F(c, u[0]);
    },
    i: d,
    o: d,
    d(u) {
      u && L(e), i = !1, _();
    }
  };
}
function Z(t, e, n) {
  let o = 0;
  return [o, () => {
    n(0, o += 1);
  }];
}
class tt extends X {
  constructor(e) {
    super(), W(this, e, Z, Y, I, {});
  }
}
const et = new tt({
  target: document.getElementById("counter")
});
export {
  et as default
};
