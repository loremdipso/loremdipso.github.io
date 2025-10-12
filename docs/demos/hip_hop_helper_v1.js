(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("main.svelte-x27xhg{display:flex;justify-content:center}main.svelte-e7todb{position:relative}main.fullscreen.svelte-e7todb{position:fixed;width:100vw;height:100vh;left:0;top:0;z-index:1000}button.svelte-e7todb{position:absolute;right:0;bottom:0}.bar.svelte-13x1b4a{padding:0 .5rem;margin:0 .1rem;background-color:#303030;text-align:center}.fade-in.svelte-13x1b4a{animation:svelte-13x1b4a-fadeIn .4s}@keyframes svelte-13x1b4a-fadeIn{0%{background-color:#f9e076}}.container.svelte-c1q05p.svelte-c1q05p{display:flex;width:100%;height:100%;flex-direction:column;background-color:#000}.container.svelte-c1q05p textarea.svelte-c1q05p,.container.svelte-c1q05p .bars.svelte-c1q05p{font-size:1rem;color:#fff;background-color:#000;overflow:auto;height:2rem}.container.fullscreen.svelte-c1q05p textarea.svelte-c1q05p,.container.fullscreen.svelte-c1q05p .bars.svelte-c1q05p{height:50vh;max-height:50vh}.container.fullscreen.svelte-c1q05p .bars .inner.svelte-c1q05p{text-align:center;padding:1rem;margin-left:auto;margin-right:auto}.line.svelte-c1q05p.svelte-c1q05p{margin:.5rem 0}table.svelte-c1q05p.svelte-c1q05p,td.svelte-c1q05p.svelte-c1q05p,tr.svelte-c1q05p.svelte-c1q05p{all:revert}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import { S as nr, i as rr, s as an, g as Si, e as ge, h as Xt, a as Ne, j as Zt, b as qe, c as Ie, l as Ba, u as Li, k as Mi, m as Wi, o as je, p as Je, f as Ke, q as Hi, n as kr, t as Ji, d as _i, r as qi, v as Ki, w as za, x as Sa, y as Ui, z as La, A as Ar, B as Ma, C as Wa, D as Ha } from "./index-ba35a221.js";
function Ri(e) {
  let t, n, r, o, a, i;
  const s = e[2].default, l = Si(s, e, e[1], null);
  return {
    c() {
      t = ge("main"), l && l.c(), n = Xt(), r = ge("button"), r.textContent = "Fullscreen", Ne(r, "class", "svelte-e7todb"), Ne(t, "class", "svelte-e7todb"), Zt(t, "fullscreen", e[0]);
    },
    m(u, c) {
      qe(u, t, c), l && l.m(t, null), Ie(t, n), Ie(t, r), o = !0, a || (i = Ba(r, "click", e[3]), a = !0);
    },
    p(u, [c]) {
      l && l.p && (!o || c & 2) && Li(
        l,
        s,
        u,
        u[1],
        o ? Wi(s, u[1], c, null) : Mi(u[1]),
        null
      ), (!o || c & 1) && Zt(t, "fullscreen", u[0]);
    },
    i(u) {
      o || (je(l, u), o = !0);
    },
    o(u) {
      Je(l, u), o = !1;
    },
    d(u) {
      u && Ke(t), l && l.d(u), a = !1, i();
    }
  };
}
function Qi(e, t, n) {
  let { $$slots: r = {}, $$scope: o } = t, { fullscreen: a = !1 } = t;
  const i = () => n(0, a = !a);
  return e.$$set = (s) => {
    "fullscreen" in s && n(0, a = s.fullscreen), "$$scope" in s && n(1, o = s.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty & 1 && (a ? document.body.style.overflow = "hidden" : document.body.style.overflow = "");
  }, [a, o, r, i];
}
class Yi extends nr {
  constructor(t) {
    super(), rr(this, t, Qi, Ri, an, { fullscreen: 0 });
  }
}
function $r(e) {
  let t, n;
  return {
    c() {
      t = ge("div"), n = Ji(e[0]), Ne(t, "class", "bar fade-in svelte-13x1b4a");
    },
    m(r, o) {
      qe(r, t, o), Ie(t, n);
    },
    p(r, o) {
      o & 1 && _i(n, r[0]);
    },
    d(r) {
      r && Ke(t);
    }
  };
}
function Xi(e) {
  let t = e[0], n, r = $r(e);
  return {
    c() {
      r.c(), n = Hi();
    },
    m(o, a) {
      r.m(o, a), qe(o, n, a);
    },
    p(o, [a]) {
      a & 1 && an(t, t = o[0]) ? (r.d(1), r = $r(o), r.c(), r.m(n.parentNode, n)) : r.p(o, a);
    },
    i: kr,
    o: kr,
    d(o) {
      o && Ke(n), r.d(o);
    }
  };
}
function Zi(e, t, n) {
  let { value: r } = t;
  return e.$$set = (o) => {
    "value" in o && n(0, r = o.value);
  }, [r];
}
class es extends nr {
  constructor(t) {
    super(), rr(this, t, Zi, Xi, an, { value: 0 });
  }
}
let ts = {
  one: {},
  two: {},
  three: {},
  four: {}
}, ns = {
  one: {},
  two: {},
  three: {}
}, rs = {}, os = [];
const Fn = { methods: ts, model: ns, compute: rs, hooks: os }, as = (e) => Object.prototype.toString.call(e) === "[object Array]", is = {
  compute: function(e) {
    const { world: t } = this, n = t.compute;
    return typeof e == "string" && n.hasOwnProperty(e) ? n[e](this) : as(e) ? e.forEach((r) => {
      t.compute.hasOwnProperty(r) ? n[r](this) : console.warn("no compute:", e);
    }) : typeof e == "function" ? e(this) : console.warn("no compute:", e), this;
  }
}, ss = is, ls = function(e) {
  return this.fullPointer.forEach((n, r) => {
    let o = this.update([n]);
    e(o, r);
  }), this;
}, us = function(e, t) {
  let r = this.fullPointer.map((a, i) => {
    let s = this.update([a]), l = e(s, i);
    return l === void 0 ? this.none() : l;
  });
  if (r.length === 0)
    return t || this.update([]);
  if (r[0] !== void 0 && (typeof r[0] == "string" || typeof r[0] == "object" && (r[0] === null || !r[0].isView)))
    return r;
  let o = [];
  return r.forEach((a) => {
    o = o.concat(a.fullPointer);
  }), this.toView(o);
}, cs = function(e) {
  let t = this.fullPointer;
  return t = t.filter((r, o) => {
    let a = this.update([r]);
    return e(a, o);
  }), this.update(t);
}, hs = function(e) {
  let n = this.fullPointer.find((r, o) => {
    let a = this.update([r]);
    return e(a, o);
  });
  return this.update([n]);
}, ds = function(e) {
  return this.fullPointer.some((n, r) => {
    let o = this.update([n]);
    return e(o, r);
  });
}, fs = function(e = 1) {
  let t = this.fullPointer, n = Math.floor(Math.random() * t.length);
  return n + e > this.length && (n = this.length - e, n = n < 0 ? 0 : n), t = t.slice(n, n + e), this.update(t);
}, ps = { forEach: ls, map: us, filter: cs, find: hs, some: ds, random: fs }, ce = {
  termList: function() {
    return this.methods.one.termList(this.docs);
  },
  terms: function(e) {
    let t = this.match(".");
    return typeof e == "number" ? t.eq(e) : t;
  },
  groups: function(e) {
    if (e || e === 0)
      return this.update(this._groups[e] || []);
    let t = {};
    return Object.keys(this._groups).forEach((n) => {
      t[n] = this.update(this._groups[n]);
    }), t;
  },
  eq: function(e) {
    let t = this.pointer;
    return t || (t = this.docs.map((n, r) => [r])), t[e] ? this.update([t[e]]) : this.none();
  },
  first: function() {
    return this.eq(0);
  },
  last: function() {
    let e = this.fullPointer.length - 1;
    return this.eq(e);
  },
  firstTerms: function() {
    return this.match("^.");
  },
  lastTerms: function() {
    return this.match(".$");
  },
  slice: function(e, t) {
    let n = this.pointer || this.docs.map((r, o) => [o]);
    return n = n.slice(e, t), this.update(n);
  },
  all: function() {
    return this.update().toView();
  },
  fullSentences: function() {
    let e = this.fullPointer.map((t) => [t[0]]);
    return this.update(e).toView();
  },
  none: function() {
    return this.update([]);
  },
  isDoc: function(e) {
    if (!e || !e.isView)
      return !1;
    let t = this.fullPointer, n = e.fullPointer;
    return !t.length === n.length ? !1 : t.every((r, o) => n[o] ? r[0] === n[o][0] && r[1] === n[o][1] && r[2] === n[o][2] : !1);
  },
  wordCount: function() {
    return this.docs.reduce((e, t) => (e += t.filter((n) => n.text !== "").length, e), 0);
  },
  isFull: function() {
    let e = this.pointer;
    if (!e)
      return !0;
    let t = this.document;
    for (let n = 0; n < e.length; n += 1) {
      let [r, o, a] = e[n];
      if (r !== n || o !== 0 || t[r].length > a)
        return !1;
    }
    return !0;
  },
  getNth: function(e) {
    return typeof e == "number" ? this.eq(e) : typeof e == "string" ? this.if(e) : this;
  }
};
ce.group = ce.groups;
ce.fullSentence = ce.fullSentences;
ce.sentence = ce.fullSentences;
ce.lastTerm = ce.lastTerms;
ce.firstTerm = ce.firstTerms;
const gs = ce, Vn = Object.assign({}, gs, ss, ps);
Vn.get = Vn.eq;
const ms = Vn;
class at {
  constructor(t, n, r = {}) {
    [
      ["document", t],
      ["world", Fn],
      ["_groups", r],
      ["_cache", null],
      ["viewType", "View"]
    ].forEach((o) => {
      Object.defineProperty(this, o[0], {
        value: o[1],
        writable: !0
      });
    }), this.ptrs = n;
  }
  get docs() {
    let t = this.document;
    return this.ptrs && (t = Fn.methods.one.getDoc(this.ptrs, this.document)), t;
  }
  get pointer() {
    return this.ptrs;
  }
  get methods() {
    return this.world.methods;
  }
  get model() {
    return this.world.model;
  }
  get hooks() {
    return this.world.hooks;
  }
  get isView() {
    return !0;
  }
  get found() {
    return this.docs.length > 0;
  }
  get length() {
    return this.docs.length;
  }
  get fullPointer() {
    let { docs: t, ptrs: n, document: r } = this;
    return (n || t.map((a, i) => [i])).map((a) => {
      let [i, s, l, u, c] = a;
      return s = s || 0, l = l || (r[i] || []).length, r[i] && r[i][s] && (u = u || r[i][s].id, r[i][l - 1] && (c = c || r[i][l - 1].id)), [i, s, l, u, c];
    });
  }
  update(t) {
    let n = new at(this.document, t);
    if (this._cache && t && t.length > 0) {
      let r = [];
      t.forEach((o, a) => {
        let [i, s, l] = o;
        o.length === 1 ? r[a] = this._cache[i] : s === 0 && this.document[i].length === l && (r[a] = this._cache[i]);
      }), r.length > 0 && (n._cache = r);
    }
    return n.world = this.world, n;
  }
  toView(t) {
    return new at(this.document, t || this.pointer);
  }
  fromText(t) {
    const { methods: n } = this;
    let r = n.one.tokenize.fromString(t, this.world), o = new at(r);
    return o.world = this.world, o.compute(["normal", "lexicon"]), this.world.compute.preTagger && o.compute("preTagger"), o;
  }
  clone() {
    let t = this.document.slice(0);
    t = t.map((r) => r.map((o) => (o = Object.assign({}, o), o.tags = new Set(o.tags), o)));
    let n = this.update(this.pointer);
    return n.document = t, n._cache = this._cache, n;
  }
}
Object.assign(at.prototype, ms);
const or = at, ys = "14.8.2", Ir = function(e) {
  return e && typeof e == "object" && !Array.isArray(e);
};
function Ja(e, t) {
  if (Ir(t))
    for (const n in t)
      Ir(t[n]) ? (e[n] || Object.assign(e, { [n]: {} }), Ja(e[n], t[n])) : Object.assign(e, { [n]: t[n] });
  return e;
}
function bs(e, t) {
  for (const n in t)
    e[n] = e[n] || {}, Object.assign(e[n], t[n]);
  return e;
}
const vs = function(e, t) {
  let n = e.two.models || {};
  Object.keys(t).forEach((r) => {
    t[r].pastTense && (n.toPast && (n.toPast.exceptions[r] = t[r].pastTense), n.fromPast && (n.fromPast.exceptions[t[r].pastTense] = r)), t[r].presentTense && (n.toPresent && (n.toPresent.exceptions[r] = t[r].presentTense), n.fromPresent && (n.fromPresent.exceptions[t[r].presentTense] = r)), t[r].gerund && (n.toGerund && (n.toGerund.exceptions[r] = t[r].gerund), n.fromGerund && (n.fromGerund.exceptions[t[r].gerund] = r)), t[r].comparative && (n.toComparative && (n.toComparative.exceptions[r] = t[r].comparative), n.fromComparative && (n.fromComparative.exceptions[t[r].comparative] = r)), t[r].superlative && (n.toSuperlative && (n.toSuperlative.exceptions[r] = t[r].superlative), n.fromSuperlative && (n.fromSuperlative.exceptions[t[r].superlative] = r));
  });
}, ws = function(e, t, n, r) {
  const { methods: o, model: a, compute: i, hooks: s } = t;
  e.methods && bs(o, e.methods), e.model && Ja(a, e.model), e.irregulars && vs(a, e.irregulars), e.compute && Object.assign(i, e.compute), s && (t.hooks = s.concat(e.hooks || [])), e.api && e.api(n), e.lib && Object.keys(e.lib).forEach((l) => r[l] = e.lib[l]), e.tags && r.addTags(e.tags), e.words && r.addWords(e.words), e.mutate && e.mutate(t);
}, Ps = ws, ks = function(e) {
  const t = typeof process > "u" || !process.env ? self.env || {} : process.env;
  return t.DEBUG_TAGS = e === "tagger" || e === !0 ? !0 : "", t.DEBUG_MATCH = e === "match" || e === !0 ? !0 : "", t.DEBUG_CHUNKS = e === "chunker" || e === !0 ? !0 : "", this;
}, As = (e) => Object.prototype.toString.call(e) === "[object Object]", Gn = function(e) {
  return Object.prototype.toString.call(e) === "[object Array]";
}, $s = function(e) {
  return e.map((t) => t.terms.map((n) => (Gn(n.tags) && (n.tags = new Set(n.tags)), n)));
}, Is = function(e) {
  return e.map((t) => t.map((n) => ({
    text: n,
    normal: n,
    pre: "",
    post: " ",
    tags: /* @__PURE__ */ new Set()
  })));
}, xs = function(e, t, n) {
  const { methods: r } = n;
  let o = new t([]);
  if (o.world = n, typeof e == "number" && (e = String(e)), !e)
    return o;
  if (typeof e == "string") {
    let a = r.one.tokenize.fromString(e, n);
    return new t(a);
  }
  if (As(e) && e.isView)
    return new t(e.document, e.ptrs);
  if (Gn(e)) {
    if (Gn(e[0])) {
      let i = Is(e);
      return new t(i);
    }
    let a = $s(e);
    return new t(a);
  }
  return o;
}, _a = xs;
let en = Object.assign({}, Fn);
const R = function(e, t) {
  t && R.addWords(t);
  let n = _a(e, or, en);
  return e && n.compute(en.hooks), n;
};
Object.defineProperty(R, "_world", {
  value: en,
  writable: !0
});
R.tokenize = function(e, t) {
  const { compute: n } = this._world;
  t && R.addWords(t);
  let r = _a(e, or, en);
  return n.contractions && r.compute(["alias", "normal", "machine", "contractions"]), r;
};
R.plugin = function(e) {
  return Ps(e, this._world, or, this), this;
};
R.extend = R.plugin;
R.world = function() {
  return this._world;
};
R.model = function() {
  return this._world.model;
};
R.methods = function() {
  return this._world.methods;
};
R.hooks = function() {
  return this._world.hooks;
};
R.verbose = ks;
R.version = ys;
const P = R, Ns = function(e) {
  return e.map((n) => {
    let r = /* @__PURE__ */ new Set();
    return n.forEach((o) => {
      o.normal !== "" && r.add(o.normal), o.switch && r.add(`%${o.switch}%`), o.implicit && r.add(o.implicit), o.machine && r.add(o.machine), o.root && r.add(o.root), o.alias && o.alias.forEach((i) => r.add(i));
      let a = Array.from(o.tags);
      for (let i = 0; i < a.length; i += 1)
        r.add("#" + a[i]);
    }), r;
  });
}, js = Ns, Es = {
  one: {
    cacheDoc: js
  }
}, Ts = {
  cache: function() {
    return this._cache = this.methods.one.cacheDoc(this.document), this;
  },
  uncache: function() {
    return this._cache = null, this;
  }
}, Cs = function(e) {
  Object.assign(e.prototype, Ts);
}, Ds = Cs, Os = {
  cache: function(e) {
    e._cache = e.methods.one.cacheDoc(e.document);
  }
}, Fs = {
  api: Ds,
  compute: Os,
  methods: Es
}, Vs = {
  toLowerCase: function() {
    return this.termList().forEach((e) => {
      e.text = e.text.toLowerCase();
    }), this;
  },
  toUpperCase: function() {
    return this.termList().forEach((e) => {
      e.text = e.text.toUpperCase();
    }), this;
  },
  toTitleCase: function() {
    return this.termList().forEach((e) => {
      e.text = e.text.replace(/^ *[a-z\u00C0-\u00FF]/, (t) => t.toUpperCase());
    }), this;
  },
  toCamelCase: function() {
    return this.docs.forEach((e) => {
      e.forEach((t, n) => {
        n !== 0 && (t.text = t.text.replace(/^ *[a-z\u00C0-\u00FF]/, (r) => r.toUpperCase())), n !== e.length - 1 && (t.post = "");
      });
    }), this;
  }
}, xr = (e) => /^\p{Lu}[\p{Ll}'’]/u.test(e) || /^\p{Lu}$/u.test(e), Gs = (e) => e.replace(/^\p{Ll}/u, (t) => t.toUpperCase()), Bs = (e) => e.replace(/^\p{Lu}/u, (t) => t.toLowerCase()), qa = (e, t, n) => {
  if (n.forEach((r) => r.dirty = !0), e) {
    let r = [t, 0].concat(n);
    Array.prototype.splice.apply(e, r);
  }
  return e;
}, ot = function(e) {
  const t = / $/, n = /[-–—]/;
  let r = e[e.length - 1];
  r && !t.test(r.post) && !n.test(r.post) && (r.post += " ");
}, Nr = (e, t, n) => {
  const r = /[-.?!,;:)–—'"]/g;
  let o = e[t - 1];
  if (!o)
    return;
  let a = o.post;
  if (r.test(a)) {
    let i = a.match(r).join(""), s = n[n.length - 1];
    s.post = i + s.post, o.post = o.post.replace(r, "");
  }
}, zs = function(e, t, n) {
  let r = e[t];
  if (t !== 0 || !xr(r.text))
    return;
  n[0].text = Gs(n[0].text);
  let o = e[t];
  o.tags.has("ProperNoun") || o.tags.has("Acronym") || xr(o.text) && o.text.length > 1 && (o.text = Bs(o.text));
}, Ss = function(e, t, n, r) {
  let [o, a, i] = t;
  a === 0 || i === r[o].length ? ot(n) : (ot(n), ot([e[t[1]]])), zs(e, a, n), qa(e, a, n);
}, Ls = function(e, t, n, r) {
  let [o, , a] = t, i = (r[o] || []).length;
  a < i ? (Nr(e, a, n), ot(n)) : i === a && (ot(e), Nr(e, a, n), r[o + 1] && (n[n.length - 1].post += " ")), qa(e, t[2], n), t[4] = n[n.length - 1].id;
};
let ht = 0;
const jr = (e) => (e = e.length < 3 ? "0" + e : e, e.length < 3 ? "0" + e : e), Ms = function(e) {
  let [t, n] = e.index || [0, 0];
  ht += 1, ht = ht > 46655 ? 0 : ht, t = t > 46655 ? 0 : t, n = n > 1294 ? 0 : n;
  let r = jr(ht.toString(36));
  r += jr(t.toString(36));
  let o = n.toString(36);
  o = o.length < 2 ? "0" + o : o, r += o;
  let a = parseInt(Math.random() * 36, 10);
  return r += a.toString(36), e.normal + "|" + r.toUpperCase();
}, Ka = Ms, Er = function(e) {
  e.has("@hasContraction") && typeof e.contractions == "function" && e.grow("@hasContraction").contractions().expand();
}, Tr = (e) => Object.prototype.toString.call(e) === "[object Array]", Ws = function(e) {
  return e = e.map((t) => (t.id = Ka(t), t)), e;
}, Hs = function(e, t) {
  const { methods: n } = t;
  return typeof e == "string" ? n.one.tokenize.fromString(e, t)[0] : typeof e == "object" && e.isView ? e.clone().docs[0] || [] : Tr(e) ? Tr(e[0]) ? e[0] : e : [];
}, Cr = function(e, t, n) {
  const { document: r, world: o } = t;
  t.uncache();
  let a = t.fullPointer, i = t.fullPointer;
  t.forEach((l, u) => {
    let c = l.fullPointer[0], [h] = c, d = r[h], x = Hs(e, o);
    x.length !== 0 && (x = Ws(x), n ? (Er(t.update([c]).firstTerm()), Ss(d, c, x, r)) : (Er(t.update([c]).lastTerm()), Ls(d, c, x, r)), r[h] && r[h][c[1]] && (c[3] = r[h][c[1]].id), i[u] = c, c[2] += x.length, a[u] = c);
  });
  let s = t.toView(a);
  return t.ptrs = i, s.compute(["id", "index", "lexicon"]), s.world.compute.preTagger && s.compute("preTagger"), s;
}, _e = {
  insertAfter: function(e) {
    return Cr(e, this, !1);
  },
  insertBefore: function(e) {
    return Cr(e, this, !0);
  }
};
_e.append = _e.insertAfter;
_e.prepend = _e.insertBefore;
_e.insert = _e.insertAfter;
const Js = _e, _s = /\$[0-9a-z]+/g, ar = {}, qs = function(e) {
  return e.replace(/\w\S*/g, (t) => t.charAt(0).toUpperCase() + t.substring(1).toLowerCase());
}, Ks = function(e, t) {
  return e.forEach((n) => {
    let r = t(n);
    n.replaceWith(r);
  }), e;
}, Us = function(e, t) {
  if (typeof e != "string")
    return e;
  let n = t.groups();
  return e = e.replace(_s, (r) => {
    let o = r.replace(/\$/, "");
    return n.hasOwnProperty(o) ? n[o].text() : r;
  }), e;
};
ar.replaceWith = function(e, t = {}) {
  let n = this.fullPointer, r = this;
  if (this.uncache(), typeof e == "function")
    return Ks(r, e);
  e = Us(e, r);
  let o = this.update(n);
  n = n.map((s) => s.slice(0, 3));
  let a = (o.docs[0] || []).map((s) => Array.from(s.tags));
  typeof e == "string" && (e = this.fromText(e).compute("id")), r.insertAfter(e), o.has("@hasContraction") && r.contractions && r.grow("@hasContraction+").contractions().expand(), r.delete(o);
  let i = r.toView(n).compute(["index", "lexicon"]);
  return i.world.compute.preTagger && i.compute("preTagger"), t.tags && i.terms().forEach((s, l) => {
    s.tagSafe(a[l]);
  }), t.case && i.docs[0] && i.docs[0][0] && i.docs[0][0].index[1] === 0 && (i.docs[0][0].text = qs(i.docs[0][0].text)), i;
};
ar.replace = function(e, t, n) {
  if (e && !t)
    return this.replaceWith(e, n);
  let r = this.match(e);
  return r.found ? (this.soften(), r.replaceWith(t, n)) : this;
};
const Rs = ar, Qs = function(e, t) {
  let n = e.length - 1, r = e[n], o = e[n - t];
  o && r && (o.post += r.post, o.post = o.post.replace(/ +([.?!,;:])/, "$1"), o.post = o.post.replace(/[,;:]+([.?!])/, "$1"));
}, Ys = function(e, t) {
  t.forEach((n) => {
    let [r, o, a] = n, i = a - o;
    e[r] && (a === e[r].length && a > 1 && Qs(e[r], i), e[r].splice(o, i));
  });
  for (let n = e.length - 1; n >= 0; n -= 1)
    if (e[n].length === 0 && (e.splice(n, 1), n === e.length && e[n - 1])) {
      let r = e[n - 1], o = r[r.length - 1];
      o && (o.post = o.post.trimEnd());
    }
  return e;
}, Xs = Ys, Zs = function(e, t) {
  return e = e.map((n) => {
    let [r] = n;
    return t[r] && t[r].forEach((o) => {
      let a = o[2] - o[1];
      n[1] <= o[1] && n[2] >= o[2] && (n[2] -= a);
    }), n;
  }), e.forEach((n, r) => {
    if (n[1] === 0 && n[2] == 0)
      for (let o = r + 1; o < e.length; o += 1)
        e[o][0] -= 1, e[o][0] < 0 && (e[o][0] = 0);
  }), e = e.filter((n) => n[2] - n[1] > 0), e = e.map((n) => (n[3] = null, n[4] = null, n)), e;
}, Bn = {
  remove: function(e) {
    const { indexN: t } = this.methods.one.pointer;
    this.uncache();
    let n = this.all(), r = this;
    e && (n = this, r = this.match(e));
    let o = !n.ptrs;
    r.has("@hasContraction") && r.contractions && r.grow("@hasContraction").contractions().expand();
    let a = n.fullPointer, i = r.fullPointer.reverse(), s = Xs(this.document, i), l = t(i);
    return a = Zs(a, l), n.ptrs = a, n.document = s, n.compute("index"), o && (n.ptrs = void 0), e ? n.toView(a) : (this.ptrs = [], n.none());
  }
};
Bn.delete = Bn.remove;
const el = Bn, yt = {
  pre: function(e, t) {
    return e === void 0 && this.found ? this.docs[0][0].pre : (this.docs.forEach((n) => {
      let r = n[0];
      t === !0 ? r.pre += e : r.pre = e;
    }), this);
  },
  post: function(e, t) {
    if (e === void 0) {
      let n = this.docs[this.docs.length - 1];
      return n[n.length - 1].post;
    }
    return this.docs.forEach((n) => {
      let r = n[n.length - 1];
      t === !0 ? r.post += e : r.post = e;
    }), this;
  },
  trim: function() {
    if (!this.found)
      return this;
    let e = this.docs, t = e[0][0];
    t.pre = t.pre.trimStart();
    let n = e[e.length - 1], r = n[n.length - 1];
    return r.post = r.post.trimEnd(), this;
  },
  hyphenate: function() {
    return this.docs.forEach((e) => {
      e.forEach((t, n) => {
        n !== 0 && (t.pre = ""), e[n + 1] && (t.post = "-");
      });
    }), this;
  },
  dehyphenate: function() {
    const e = /[-–—]/;
    return this.docs.forEach((t) => {
      t.forEach((n) => {
        e.test(n.post) && (n.post = " ");
      });
    }), this;
  },
  toQuotations: function(e, t) {
    return e = e || '"', t = t || '"', this.docs.forEach((n) => {
      n[0].pre = e + n[0].pre;
      let r = n[n.length - 1];
      r.post = t + r.post;
    }), this;
  },
  toParentheses: function(e, t) {
    return e = e || "(", t = t || ")", this.docs.forEach((n) => {
      n[0].pre = e + n[0].pre;
      let r = n[n.length - 1];
      r.post = t + r.post;
    }), this;
  }
};
yt.deHyphenate = yt.dehyphenate;
yt.toQuotation = yt.toQuotations;
const tl = yt, nl = (e, t) => e.normal < t.normal ? -1 : e.normal > t.normal ? 1 : 0, rl = (e, t) => {
  let n = e.normal.trim().length, r = t.normal.trim().length;
  return n < r ? 1 : n > r ? -1 : 0;
}, ol = (e, t) => e.words < t.words ? 1 : e.words > t.words ? -1 : 0, al = (e, t) => e[0] < t[0] ? 1 : e[0] > t[0] ? -1 : e[1] > t[1] ? 1 : -1, il = function(e) {
  let t = {};
  return e.forEach((n) => {
    t[n.normal] = t[n.normal] || 0, t[n.normal] += 1;
  }), e.sort((n, r) => {
    let o = t[n.normal], a = t[r.normal];
    return o < a ? 1 : o > a ? -1 : 0;
  }), e;
}, cn = { alpha: nl, length: rl, wordCount: ol, sequential: al, byFreq: il }, sl = /* @__PURE__ */ new Set(["index", "sequence", "seq", "sequential", "chron", "chronological"]), ll = /* @__PURE__ */ new Set(["freq", "frequency", "topk", "repeats"]), ul = /* @__PURE__ */ new Set(["alpha", "alphabetical"]), cl = function(e, t) {
  let n = e.fullPointer;
  return n = n.sort((r, o) => (r = e.update([r]), o = e.update([o]), t(r, o))), e.ptrs = n, e;
}, hl = function(e) {
  let { docs: t, pointer: n } = this;
  if (this.uncache(), typeof e == "function")
    return cl(this, e);
  e = e || "alpha";
  let r = n || t.map((a, i) => [i]), o = t.map((a, i) => ({
    index: i,
    words: a.length,
    normal: a.map((s) => s.machine || s.normal || "").join(" "),
    pointer: r[i]
  }));
  return sl.has(e) && (e = "sequential"), ul.has(e) && (e = "alpha"), ll.has(e) ? (o = cn.byFreq(o), this.update(o.map((a) => a.pointer))) : typeof cn[e] == "function" ? (o = o.sort(cn[e]), this.update(o.map((a) => a.pointer))) : this;
}, dl = function() {
  let e = this.pointer || this.docs.map((t, n) => [n]);
  return e = [].concat(e), e = e.reverse(), this._cache && (this._cache = this._cache.reverse()), this.update(e);
}, fl = function() {
  let e = /* @__PURE__ */ new Set();
  return this.filter((n) => {
    let r = n.text("machine");
    return e.has(r) ? !1 : (e.add(r), !0);
  });
}, pl = { unique: fl, reverse: dl, sort: hl }, gl = (e) => Object.prototype.toString.call(e) === "[object Array]", Ua = function(e, t) {
  if (e.length > 0) {
    let n = e[e.length - 1], r = n[n.length - 1];
    / /.test(r.post) === !1 && (r.post += " ");
  }
  return e = e.concat(t), e;
}, ml = function(e, t) {
  if (e.document === t.document) {
    let r = e.fullPointer.concat(t.fullPointer);
    return e.toView(r).compute("index");
  }
  return t.fullPointer.forEach((r) => {
    r[0] += e.document.length;
  }), e.document = Ua(e.document, t.docs), e.all();
}, yl = {
  concat: function(e) {
    if (typeof e == "string") {
      let t = this.fromText(e);
      if (!this.found || !this.ptrs)
        this.document = this.document.concat(t.document);
      else {
        let n = this.fullPointer, r = n[n.length - 1][0];
        this.document.splice(r, 0, ...t.document);
      }
      return this.all().compute("index");
    }
    if (typeof e == "object" && e.isView)
      return ml(this, e);
    if (gl(e)) {
      let t = Ua(this.document, e);
      return this.document = t, this.all();
    }
    return this;
  }
}, bl = function() {
  return this.ptrs = this.fullPointer, this;
}, vl = function() {
  let e = this.ptrs;
  return !e || e.length < 1 ? this : (e = e.map((t) => t.slice(0, 3)), this.ptrs = e, this);
}, wl = { harden: bl, soften: vl }, Pl = Object.assign({}, Vs, Js, Rs, el, tl, pl, yl, wl), kl = function(e) {
  Object.assign(e.prototype, Pl);
}, Al = kl, $l = {
  id: function(e) {
    let t = e.docs;
    for (let n = 0; n < t.length; n += 1)
      for (let r = 0; r < t[n].length; r += 1) {
        let o = t[n][r];
        o.id = o.id || Ka(o);
      }
  }
}, Il = $l, xl = {
  api: Al,
  compute: Il
}, Nl = [
  { word: "@", out: ["at"] },
  { word: "alot", out: ["a", "lot"] },
  { word: "brb", out: ["be", "right", "back"] },
  { word: "cannot", out: ["can", "not"] },
  { word: "cant", out: ["can", "not"] },
  { word: "dont", out: ["do", "not"] },
  { word: "dun", out: ["do", "not"] },
  { word: "wont", out: ["will", "not"] },
  { word: "can't", out: ["can", "not"] },
  { word: "shan't", out: ["should", "not"] },
  { word: "won't", out: ["will", "not"] },
  { word: "that's", out: ["that", "is"] },
  { word: "what's", out: ["what", "is"] },
  { word: "let's", out: ["let", "us"] },
  { word: "there's", out: ["there", "is"] },
  { word: "dunno", out: ["do", "not", "know"] },
  { word: "gonna", out: ["going", "to"] },
  { word: "gotta", out: ["have", "got", "to"] },
  { word: "gimme", out: ["give", "me"] },
  { word: "tryna", out: ["trying", "to"] },
  { word: "gtg", out: ["got", "to", "go"] },
  { word: "im", out: ["i", "am"] },
  { word: "imma", out: ["I", "will"] },
  { word: "imo", out: ["in", "my", "opinion"] },
  { word: "irl", out: ["in", "real", "life"] },
  { word: "ive", out: ["i", "have"] },
  { word: "rn", out: ["right", "now"] },
  { word: "tbh", out: ["to", "be", "honest"] },
  { word: "wanna", out: ["want", "to"] },
  { word: "c'mere", out: ["come", "here"] },
  { word: "c'mon", out: ["come", "on"] },
  { word: "howd", out: ["how", "did"] },
  { word: "whatd", out: ["what", "did"] },
  { word: "whend", out: ["when", "did"] },
  { word: "whered", out: ["where", "did"] },
  { word: "shoulda", out: ["should", "have"] },
  { word: "coulda", out: ["coulda", "have"] },
  { word: "woulda", out: ["woulda", "have"] },
  { word: "musta", out: ["must", "have"] },
  { word: "tis", out: ["it", "is"] },
  { word: "twas", out: ["it", "was"] },
  { word: "y'know", out: ["you", "know"] },
  { word: "ne'er", out: ["never"] },
  { word: "o'er", out: ["over"] },
  { after: "ll", out: ["will"] },
  { after: "ve", out: ["have"] },
  { after: "re", out: ["are"] },
  { after: "m", out: ["am"] },
  { before: "c", out: ["ce"] },
  { before: "m", out: ["me"] },
  { before: "n", out: ["ne"] },
  { before: "qu", out: ["que"] },
  { before: "s", out: ["se"] },
  { before: "t", out: ["tu"] }
], jl = { one: { contractions: Nl } }, El = function(e, t, n) {
  let [r, o] = t;
  !n || n.length === 0 || (n = n.map((a, i) => (a.implicit = a.text, a.machine = a.text, a.pre = "", a.post = "", a.text = "", a.normal = "", a.index = [r, o + i], a)), n[0] && (n[0].pre = e[r][o].pre, n[n.length - 1].post = e[r][o].post, n[0].text = e[r][o].text, n[0].normal = e[r][o].normal), e[r].splice(o, 1, ...n));
}, hn = El, Tl = /'/, Cl = /* @__PURE__ */ new Set([
  "what",
  "how",
  "when",
  "where",
  "why"
]), Dl = /* @__PURE__ */ new Set([
  "be",
  "go",
  "start",
  "think",
  "need"
]), Ol = /* @__PURE__ */ new Set([
  "been",
  "gone"
]), Fl = function(e, t) {
  let n = e[t].normal.split(Tl)[0];
  if (Cl.has(n))
    return [n, "did"];
  if (e[t + 1]) {
    if (Ol.has(e[t + 1].normal))
      return [n, "had"];
    if (Dl.has(e[t + 1].normal))
      return [n, "would"];
  }
  return null;
}, Vl = Fl, Gl = function(e, t) {
  return e[t].normal === "ain't" || e[t].normal === "aint" ? null : [e[t].normal.replace(/n't/, ""), "not"];
}, Bl = Gl, ir = /'/, zl = (e, t) => {
  let n = e[t].normal.split(ir)[1];
  return n && n.endsWith("e") ? ["la", n] : ["le", n];
}, Sl = (e, t) => {
  let n = e[t].normal.split(ir)[1];
  return n && n.endsWith("e") ? ["du", n] : n && n.endsWith("s") ? ["des", n] : ["de", n];
}, Ll = (e, t) => ["je", e[t].normal.split(ir)[1]], dn = {
  preJ: Ll,
  preL: zl,
  preD: Sl
}, Ml = /^([0-9.]{1,4}[a-z]{0,2}) ?[-–—] ?([0-9]{1,4}[a-z]{0,2})$/i, Wl = /^([0-9]{1,2}(:[0-9][0-9])?(am|pm)?) ?[-–—] ?([0-9]{1,2}(:[0-9][0-9])?(am|pm)?)$/i, Hl = /^[0-9]{3}-[0-9]{4}$/, Jl = function(e, t) {
  let n = e[t], r = n.text.match(Ml);
  return r !== null ? n.tags.has("PhoneNumber") === !0 || Hl.test(n.text) ? null : [r[1], "to", r[2]] : (r = n.text.match(Wl), r !== null ? [r[1], "to", r[4]] : null);
}, _l = Jl, ql = /^([+-]?[0-9][.,0-9]*)([a-z°²³µ/]+)$/, Kl = /* @__PURE__ */ new Set([
  "st",
  "nd",
  "rd",
  "th",
  "am",
  "pm",
  "max",
  "°",
  "s",
  "e"
]), Ul = function(e, t) {
  let r = e[t].text.match(ql);
  if (r !== null) {
    let o = r[2].toLowerCase().trim();
    return Kl.has(o) ? null : [r[1], o];
  }
  return null;
}, Rl = Ul, Dr = /'/, Ql = /^[0-9][^-–—]*[-–—].*?[0-9]/, Or = function(e, t, n, r) {
  let o = t.update();
  o.document = [e];
  let a = n + r;
  n > 0 && (n -= 1), e[a] && (a += 1), o.ptrs = [[0, n, a]];
}, Fr = {
  t: (e, t) => Bl(e, t),
  d: (e, t) => Vl(e, t)
}, Vr = {
  j: (e, t) => dn.preJ(e, t),
  l: (e, t) => dn.preL(e, t),
  d: (e, t) => dn.preD(e, t)
}, Yl = function(e, t, n, r) {
  for (let o = 0; o < e.length; o += 1) {
    let a = e[o];
    if (a.word === t.normal)
      return a.out;
    if (r !== null && r === a.after)
      return [n].concat(a.out);
    if (n !== null && n === a.before)
      return a.out.concat(r);
  }
  return null;
}, fn = function(e, t) {
  let n = t.fromText(e.join(" "));
  return n.compute(["id", "alias"]), n.docs[0];
}, Xl = (e) => {
  let { world: t, document: n } = e;
  const { model: r, methods: o } = t;
  let a = r.one.contractions || [];
  new Set(r.one.units || []), n.forEach((i, s) => {
    for (let l = i.length - 1; l >= 0; l -= 1) {
      let u = null, c = null;
      Dr.test(i[l].normal) === !0 && ([u, c] = i[l].normal.split(Dr));
      let h = Yl(a, i[l], u, c);
      if (!h && Fr.hasOwnProperty(c) && (h = Fr[c](i, l, t)), !h && Vr.hasOwnProperty(u) && (h = Vr[u](i, l)), h) {
        h = fn(h, e), hn(n, [s, l], h), Or(n[s], e, l, h.length);
        continue;
      }
      if (Ql.test(i[l].normal)) {
        h = _l(i, l), h && (h = fn(h, e), hn(n, [s, l], h), o.one.setTag(h, "NumberRange", t), h[2] && h[2].tags.has("Time") && o.one.setTag([h[0]], "Time", t, null, "time-range"), Or(n[s], e, l, h.length));
        continue;
      }
      h = Rl(i, l), h && (h = fn(h, e), hn(n, [s, l], h), o.one.setTag([h[1]], "Unit", t, null, "contraction-unit"));
    }
  });
}, Zl = Xl, eu = { contractions: Zl }, tu = {
  model: jl,
  compute: eu,
  hooks: ["contractions"]
}, nu = tu, ru = function(e, t, n, r, o) {
  let a = t + 4 > e.length ? e.length - t : 4, i = e[t].machine || e[t].normal;
  for (let s = 1; s < a; s += 1) {
    let l = e[t + s], u = l.machine || l.normal;
    if (i += " " + u, n.hasOwnProperty(i) === !0) {
      let c = n[i], h = e.slice(t, t + s + 1);
      return r(h, c, o, !1, "1-multi-lexicon"), c && c.length === 2 && (c[0] === "PhrasalVerb" || c[1] === "PhrasalVerb") && r([h[1]], "Particle", o, !1, "1-phrasal-particle"), !0;
    }
  }
  return !1;
}, ou = function(e, t, n) {
  const { model: r, methods: o } = n, a = o.one.setTag, i = r.one._multiCache || {}, s = r.one.lexicon || {};
  let l = e[t], u = l.machine || l.normal;
  return e[t + 1] !== void 0 && i[u] === !0 ? ru(e, t, s, a, n) : null;
}, au = ou, Gr = /^(under|over|mis|re|un|dis|semi|pre|post)-?/, iu = /* @__PURE__ */ new Set(["Verb", "Infinitive", "PastTense", "Gerund", "PresentTense", "Adjective", "Participle"]), su = function(e, t, n) {
  const { model: r, methods: o } = n, a = o.one.setTag, i = r.one.lexicon;
  let s = e[t], l = s.machine || s.normal;
  if (i[l] !== void 0 && i.hasOwnProperty(l)) {
    let u = i[l];
    return a([s], u, n, !1, "1-lexicon"), !0;
  }
  if (s.alias) {
    let u = s.alias.find((c) => i.hasOwnProperty(c));
    if (u) {
      let c = i[u];
      return a([s], c, n, !1, "1-lexicon-alias"), !0;
    }
  }
  if (Gr.test(l) === !0) {
    let u = l.replace(Gr, "");
    if (i.hasOwnProperty(u) && u.length > 3 && iu.has(i[u]))
      return a([s], i[u], n, !1, "1-lexicon-prefix"), !0;
  }
  return null;
}, lu = su, uu = function(e) {
  const t = e.world;
  e.docs.forEach((n) => {
    for (let r = 0; r < n.length; r += 1)
      if (n[r].tags.size === 0) {
        let o = null;
        o = o || au(n, r, t), o = o || lu(n, r, t);
      }
  });
}, cu = {
  lexicon: uu
}, hu = function(e) {
  let t = {}, n = {};
  return Object.keys(e).forEach((r) => {
    let o = e[r];
    r = r.toLowerCase().trim(), r = r.replace(/'s\b/, "");
    let a = r.split(/ /);
    a.length > 1 && (n[a[0]] = !0), t[r] = t[r] || o;
  }), delete t[""], delete t[null], delete t[" "], { lex: t, _multi: n };
}, du = hu, fu = {
  one: {
    expandLexicon: du
  }
}, pu = function(e) {
  const t = this.world(), { methods: n, model: r } = t;
  if (e)
    if (Object.keys(e).forEach((o) => {
      typeof e[o] == "string" && e[o].startsWith("#") && (e[o] = e[o].replace(/^#/, ""));
    }), n.two.expandLexicon) {
      let { lex: o, _multi: a } = n.two.expandLexicon(e, t);
      Object.assign(r.one.lexicon, o), Object.assign(r.one._multiCache, a);
    } else if (n.one.expandLexicon) {
      let { lex: o, _multi: a } = n.one.expandLexicon(e, t);
      Object.assign(r.one.lexicon, o), Object.assign(r.one._multiCache, a);
    } else
      Object.assign(r.one.lexicon, e);
}, gu = { addWords: pu }, mu = {
  one: {
    lexicon: {},
    _multiCache: {}
  }
}, yu = {
  model: mu,
  methods: fu,
  compute: cu,
  lib: gu,
  hooks: ["lexicon"]
}, bu = function(e, t) {
  const { methods: n, model: r } = t;
  return n.one.tokenize.splitTerms(e, r).map((a) => n.one.tokenize.splitWhitespace(a, r)).map((a) => a.text.toLowerCase());
}, vu = function(e, t) {
  let n = [{}], r = [null], o = [0], a = [], i = 0;
  e.forEach(function(s) {
    let l = 0, u = bu(s, t);
    for (let c = 0; c < u.length; c++) {
      let h = u[c];
      n[l] && n[l].hasOwnProperty(h) ? l = n[l][h] : (i++, n[l][h] = i, n[i] = {}, l = i, r[i] = null);
    }
    r[l] = [u.length];
  });
  for (let s in n[0])
    i = n[0][s], o[i] = 0, a.push(i);
  for (; a.length; ) {
    let s = a.shift(), l = Object.keys(n[s]);
    for (let u = 0; u < l.length; u += 1) {
      let c = l[u], h = n[s][c];
      for (a.push(h), i = o[s]; i > 0 && !n[i].hasOwnProperty(c); )
        i = o[i];
      if (n.hasOwnProperty(i)) {
        let d = n[i][c];
        o[h] = d, r[d] && (r[h] = r[h] || [], r[h] = r[h].concat(r[d]));
      } else
        o[h] = 0;
    }
  }
  return { goNext: n, endAs: r, failTo: o };
}, Ra = vu, wu = function(e, t, n) {
  let r = 0, o = [];
  for (let a = 0; a < e.length; a++) {
    let i = e[a][n.form] || e[a].normal;
    for (; r > 0 && (t.goNext[r] === void 0 || !t.goNext[r].hasOwnProperty(i)); )
      r = t.failTo[r] || 0;
    if (t.goNext[r].hasOwnProperty(i) && (r = t.goNext[r][i], t.endAs[r])) {
      let s = t.endAs[r];
      for (let l = 0; l < s.length; l++) {
        let u = s[l], c = e[a - u + 1], [h, d] = c.index;
        o.push([h, d, d + u, c.id]);
      }
    }
  }
  return o;
}, Pu = function(e, t) {
  for (let n = 0; n < e.length; n += 1)
    if (t.has(e[n]) === !0)
      return !1;
  return !0;
}, ku = function(e, t, n) {
  let r = [];
  n.form = n.form || "normal";
  let o = e.docs;
  if (!t.goNext || !t.goNext[0])
    return console.error("Compromise invalid lookup trie"), e.none();
  let a = Object.keys(t.goNext[0]);
  for (let i = 0; i < o.length; i++) {
    if (e._cache && e._cache[i] && Pu(a, e._cache[i]) === !0)
      continue;
    let s = o[i], l = wu(s, t, n);
    l.length > 0 && (r = r.concat(l));
  }
  return e.update(r);
}, Au = ku, $u = (e) => Object.prototype.toString.call(e) === "[object Object]";
function Iu(e) {
  e.prototype.lookup = function(t, n = {}) {
    if (!t)
      return this.none();
    typeof t == "string" && (t = [t]);
    let r = $u(t) ? t : Ra(t, this.world), o = Au(this, r, n);
    return o = o.settle(), o;
  };
}
const pn = (e, t) => {
  for (let n = e.length - 1; n >= 0; n -= 1)
    if (e[n] !== t)
      return e = e.slice(0, n + 1), e;
  return e;
}, xu = function(e) {
  return e.goNext = e.goNext.map((t) => {
    if (Object.keys(t).length !== 0)
      return t;
  }), e.goNext = pn(e.goNext, void 0), e.failTo = pn(e.failTo, 0), e.endAs = pn(e.endAs, null), e;
}, Nu = xu, zn = {
  buildTrie: function(e) {
    const t = Ra(e, this.world());
    return Nu(t);
  }
};
zn.compile = zn.buildTrie;
const ju = {
  api: Iu,
  lib: zn
}, Br = function(e, t) {
  return t && e.forEach((n) => {
    let r = n[0];
    t[r] && (n[0] = t[r][0], n[1] += t[r][1], n[2] += t[r][1]);
  }), e;
}, Qa = function(e, t) {
  let { ptrs: n, byGroup: r } = e;
  return n = Br(n, t), Object.keys(r).forEach((o) => {
    r[o] = Br(r[o], t);
  }), { ptrs: n, byGroup: r };
}, Ya = (e) => Object.prototype.toString.call(e) === "[object Object]", Pt = (e) => e && Ya(e) && e.isView === !0, kt = (e) => e && Ya(e) && e.isNet === !0, At = function(e, t, n) {
  const r = n.methods.one;
  return typeof e == "number" && (e = String(e)), typeof e == "string" && (e = r.killUnicode(e, n), e = r.parseMatch(e, t, n)), e;
}, Eu = function(e, t, n) {
  const r = this.methods.one;
  if (Pt(e))
    return this.intersection(e);
  if (kt(e))
    return this.sweep(e, { tagger: !1 }).view.settle();
  e = At(e, n, this.world);
  let o = { regs: e, group: t }, a = r.match(this.docs, o, this._cache), { ptrs: i, byGroup: s } = Qa(a, this.fullPointer), l = this.toView(i);
  return l._groups = s, l;
}, Tu = function(e, t, n) {
  const r = this.methods.one;
  if (Pt(e))
    return this.intersection(e).eq(0);
  if (kt(e))
    return this.sweep(e, { tagger: !1, matchOne: !0 }).view;
  e = At(e, n, this.world);
  let o = { regs: e, group: t, justOne: !0 }, a = r.match(this.docs, o, this._cache), { ptrs: i, byGroup: s } = Qa(a, this.fullPointer), l = this.toView(i);
  return l._groups = s, l;
}, Cu = function(e, t, n) {
  const r = this.methods.one;
  if (Pt(e))
    return e.fullPointer.length > 0;
  if (kt(e))
    return this.sweep(e, { tagger: !1 }).view.found;
  e = At(e, n, this.world);
  let o = { regs: e, group: t, justOne: !0 };
  return r.match(this.docs, o, this._cache).ptrs.length > 0;
}, Du = function(e, t, n) {
  const r = this.methods.one;
  if (Pt(e))
    return this.filter((l) => l.intersection(e).found);
  if (kt(e)) {
    let l = this.sweep(e, { tagger: !1 }).view.settle();
    return this.if(l);
  }
  e = At(e, n, this.world);
  let o = { regs: e, group: t, justOne: !0 }, a = this.fullPointer, i = this._cache || [];
  a = a.filter((l, u) => {
    let c = this.update([l]);
    return r.match(c.docs, o, i[u]).ptrs.length > 0;
  });
  let s = this.update(a);
  return this._cache && (s._cache = a.map((l) => i[l[0]])), s;
}, Ou = function(e, t, n) {
  const { methods: r } = this, o = r.one;
  if (Pt(e))
    return this.filter((s) => !s.intersection(e).found);
  if (kt(e)) {
    let s = this.sweep(e, { tagger: !1 }).view.settle();
    return this.ifNo(s);
  }
  e = At(e, n, this.world);
  let a = this._cache || [], i = this.filter((s, l) => {
    let u = { regs: e, group: t, justOne: !0 };
    return o.match(s.docs, u, a[l]).ptrs.length === 0;
  });
  return this._cache && (i._cache = i.ptrs.map((s) => a[s[0]])), i;
}, Fu = { matchOne: Tu, match: Eu, has: Cu, if: Du, ifNo: Ou }, Vu = function(e, t, n) {
  const { indexN: r } = this.methods.one.pointer;
  let o = [], a = r(this.fullPointer);
  Object.keys(a).forEach((s) => {
    let l = a[s].sort((u, c) => u[1] > c[1] ? 1 : -1)[0];
    l[1] > 0 && o.push([l[0], 0, l[1]]);
  });
  let i = this.toView(o);
  return e ? i.match(e, t, n) : i;
}, Gu = function(e, t, n) {
  const { indexN: r } = this.methods.one.pointer;
  let o = [], a = r(this.fullPointer), i = this.document;
  Object.keys(a).forEach((l) => {
    let u = a[l].sort((d, x) => d[1] > x[1] ? -1 : 1)[0], [c, , h] = u;
    h < i[c].length && o.push([c, h, i[c].length]);
  });
  let s = this.toView(o);
  return e ? s.match(e, t, n) : s;
}, Bu = function(e, t, n) {
  typeof e == "string" && (e = this.world.methods.one.parseMatch(e, n, this.world)), e[e.length - 1].end = !0;
  let r = this.fullPointer;
  return this.forEach((o, a) => {
    let i = o.before(e, t);
    if (i.found) {
      let s = i.terms();
      r[a][1] -= s.length, r[a][3] = s.docs[0][0].id;
    }
  }), this.update(r);
}, zu = function(e, t, n) {
  typeof e == "string" && (e = this.world.methods.one.parseMatch(e, n, this.world)), e[0].start = !0;
  let r = this.fullPointer;
  return this.forEach((o, a) => {
    let i = o.after(e, t);
    if (i.found) {
      let s = i.terms();
      r[a][2] += s.length, r[a][4] = null;
    }
  }), this.update(r);
}, Su = function(e, t, n) {
  return this.growRight(e, t, n).growLeft(e, t, n);
}, Lu = { before: Vu, after: Gu, growLeft: Bu, growRight: zu, grow: Su }, Xa = function(e, t) {
  return [e[0], e[1], t[2]];
}, Mu = function(e) {
  return Object.prototype.toString.call(e) === "[object Array]";
}, sr = (e, t, n) => typeof e == "string" || Mu(e) ? t.match(e, n) : e || t.none(), lr = function(e, t) {
  let [n, r, o] = e;
  return t.document[n] && t.document[n][r] && (e[3] = e[3] || t.document[n][r].id, t.document[n][o - 1] && (e[4] = e[4] || t.document[n][o - 1].id)), e;
}, it = {};
it.splitOn = function(e, t) {
  const { splitAll: n } = this.methods.one.pointer;
  let r = sr(e, this, t).fullPointer, o = n(this.fullPointer, r), a = [];
  return o.forEach((i) => {
    a.push(i.passthrough), a.push(i.before), a.push(i.match), a.push(i.after);
  }), a = a.filter((i) => i), a = a.map((i) => lr(i, this)), this.update(a);
};
it.splitBefore = function(e, t) {
  const { splitAll: n } = this.methods.one.pointer;
  let r = sr(e, this, t).fullPointer, o = n(this.fullPointer, r), a = [];
  return o.forEach((i) => {
    a.push(i.passthrough), a.push(i.before), i.match && i.after ? a.push(Xa(i.match, i.after)) : (a.push(i.match), a.push(i.after));
  }), a = a.filter((i) => i), a = a.map((i) => lr(i, this)), this.update(a);
};
it.splitAfter = function(e, t) {
  const { splitAll: n } = this.methods.one.pointer;
  let r = sr(e, this, t).fullPointer, o = n(this.fullPointer, r), a = [];
  return o.forEach((i) => {
    a.push(i.passthrough), i.before && i.match ? a.push(Xa(i.before, i.match)) : (a.push(i.before), a.push(i.match)), a.push(i.after);
  }), a = a.filter((i) => i), a = a.map((i) => lr(i, this)), this.update(a);
};
it.split = it.splitAfter;
const Wu = it, he = Object.assign({}, Fu, Lu, Wu);
he.lookBehind = he.before;
he.lookBefore = he.before;
he.lookAhead = he.after;
he.lookAfter = he.after;
he.notIf = he.ifNo;
const Hu = function(e) {
  Object.assign(e.prototype, he);
}, Ju = Hu, _u = /(?:^|\s)([![^]*(?:<[^<]*>)?\/.*?[^\\/]\/[?\]+*$~]*)(?:\s|$)/, qu = /([!~[^]*(?:<[^<]*>)?\([^)]+[^\\)]\)[?\]+*$~]*)(?:\s|$)/, Ku = / /g, Uu = (e) => /^[![^]*(<[^<]*>)?\(/.test(e) && /\)[?\]+*$~]*$/.test(e), zr = (e) => /^[![^]*(<[^<]*>)?\//.test(e) && /\/[?\]+*$~]*$/.test(e), Sr = function(e) {
  return e = e.map((t) => t.trim()), e = e.filter((t) => t), e;
}, Ru = function(e) {
  let t = e.split(_u), n = [];
  t.forEach((o) => {
    if (zr(o)) {
      n.push(o);
      return;
    }
    n = n.concat(o.split(qu));
  }), n = Sr(n);
  let r = [];
  return n.forEach((o) => {
    Uu(o) || zr(o) ? r.push(o) : r = r.concat(o.split(Ku));
  }), r = Sr(r), r;
}, Qu = Ru, Lr = /\{([0-9]+)?(, *[0-9]*)?\}/, Mr = /&&/, Yu = new RegExp(/^<\s*(\S+)\s*>/), Wr = (e) => e.charAt(0).toUpperCase() + e.substring(1), ee = (e) => e.charAt(e.length - 1), Q = (e) => e.charAt(0), tt = (e) => e.substring(1), nt = (e) => e.substring(0, e.length - 1), dt = function(e) {
  return e = tt(e), e = nt(e), e;
}, Za = function(e, t) {
  let n = {};
  for (let r = 0; r < 2; r += 1) {
    if (ee(e) === "$" && (n.end = !0, e = nt(e)), Q(e) === "^" && (n.start = !0, e = tt(e)), (Q(e) === "[" || ee(e) === "]") && (n.group = null, Q(e) === "[" && (n.groupStart = !0), ee(e) === "]" && (n.groupEnd = !0), e = e.replace(/^\[/, ""), e = e.replace(/\]$/, ""), Q(e) === "<")) {
      const o = Yu.exec(e);
      o.length >= 2 && (n.group = o[1], e = e.replace(o[0], ""));
    }
    if (ee(e) === "+" && (n.greedy = !0, e = nt(e)), e !== "*" && ee(e) === "*" && e !== "\\*" && (n.greedy = !0, e = nt(e)), ee(e) === "?" && (n.optional = !0, e = nt(e)), Q(e) === "!" && (n.negative = !0, e = tt(e)), Q(e) === "~" && ee(e) === "~" && e.length > 2 && (e = dt(e), n.fuzzy = !0, n.min = t.fuzzy || 0.85, /\(/.test(e) === !1))
      return n.word = e, n;
    if (Q(e) === "(" && ee(e) === ")") {
      Mr.test(e) ? (n.choices = e.split(Mr), n.operator = "and") : (n.choices = e.split("|"), n.operator = "or"), n.choices[0] = tt(n.choices[0]);
      let o = n.choices.length - 1;
      n.choices[o] = nt(n.choices[o]), n.choices = n.choices.map((a) => a.trim()), n.choices = n.choices.filter((a) => a), n.choices = n.choices.map((a) => a.split(/ /g).map((i) => Za(i, t))), e = "";
    }
    if (Q(e) === "/" && ee(e) === "/")
      return e = dt(e), t.caseSensitive && (n.use = "text"), n.regex = new RegExp(e), n;
    if (Q(e) === "{" && ee(e) === "}") {
      if (e = dt(e), n.root = e, /\//.test(e)) {
        let o = n.root.split(/\//);
        n.root = o[0], n.pos = o[1], n.pos === "adj" && (n.pos = "Adjective"), n.pos = n.pos.charAt(0).toUpperCase() + n.pos.substr(1).toLowerCase(), o[2] !== void 0 && (n.sense = o[2]);
      }
      return n;
    }
    if (Q(e) === "<" && ee(e) === ">")
      return e = dt(e), n.chunk = Wr(e), n.greedy = !0, n;
    if (Q(e) === "%" && ee(e) === "%")
      return e = dt(e), n.switch = e, n;
  }
  return Lr.test(e) === !0 && (e = e.replace(Lr, (r, o, a) => (a === void 0 ? (n.min = Number(o), n.max = Number(o)) : (a = a.replace(/, */, ""), o === void 0 ? (n.min = 0, n.max = Number(a)) : (n.min = Number(o), n.max = Number(a || 999))), n.greedy = !0, n.min || (n.optional = !0), ""))), Q(e) === "#" ? (n.tag = tt(e), n.tag = Wr(n.tag), n) : Q(e) === "@" ? (n.method = tt(e), n) : e === "." ? (n.anything = !0, n) : e === "*" ? (n.anything = !0, n.greedy = !0, n.optional = !0, n) : (e && (e = e.replace("\\*", "*"), e = e.replace("\\.", "."), t.caseSensitive ? n.use = "text" : e = e.toLowerCase(), n.word = e), n);
}, Xu = Za, Zu = /[a-z0-9][-–—][a-z]/i, ec = function(e, t) {
  let n = t.model.one.prefixes;
  for (let r = e.length - 1; r >= 0; r -= 1) {
    let o = e[r];
    if (o.word && Zu.test(o.word)) {
      let a = o.word.split(/[-–—]/g);
      if (n.hasOwnProperty(a[0]))
        continue;
      a = a.filter((i) => i).reverse(), e.splice(r, 1), a.forEach((i) => {
        let s = Object.assign({}, o);
        s.word = i, e.splice(r, 0, s);
      });
    }
  }
  return e;
}, tc = ec, Hr = function(e, t) {
  let { all: n } = t.methods.two.transform.verb || {}, r = e.root;
  return n ? n(r, t.model) : [];
}, Jr = function(e, t) {
  let { all: n } = t.methods.two.transform.noun || {};
  return n ? n(e.root, t.model) : [e.root];
}, _r = function(e, t) {
  let { all: n } = t.methods.two.transform.adjective || {};
  return n ? n(e.root, t.model) : [e.root];
}, nc = function(e, t) {
  return e = e.map((n) => {
    if (n.root)
      if (t.methods.two && t.methods.two.transform) {
        let r = [];
        n.pos ? n.pos === "Verb" ? r = r.concat(Hr(n, t)) : n.pos === "Noun" ? r = r.concat(Jr(n, t)) : n.pos === "Adjective" && (r = r.concat(_r(n, t))) : (r = r.concat(Hr(n, t)), r = r.concat(Jr(n, t)), r = r.concat(_r(n, t))), r = r.filter((o) => o), r.length > 0 && (n.operator = "or", n.fastOr = new Set(r));
      } else
        n.machine = n.root, delete n.id, delete n.root;
    return n;
  }), e;
}, rc = nc, oc = function(e) {
  let t = 0, n = null;
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    o.groupStart === !0 && (n = o.group, n === null && (n = String(t), t += 1)), n !== null && (o.group = n), o.groupEnd === !0 && (n = null);
  }
  return e;
}, ac = function(e) {
  return e.map((t) => {
    if (t.choices !== void 0) {
      if (t.operator !== "or" || t.fuzzy === !0)
        return t;
      t.choices.every((r) => {
        if (r.length !== 1)
          return !1;
        let o = r[0];
        return o.fuzzy === !0 || o.start || o.end ? !1 : o.word !== void 0 && o.negative !== !0 && o.optional !== !0 && o.method !== !0;
      }) === !0 && (t.fastOr = /* @__PURE__ */ new Set(), t.choices.forEach((r) => {
        t.fastOr.add(r[0].word);
      }), delete t.choices);
    }
    return t;
  });
}, ic = function(e) {
  return e.map((t) => (t.fuzzy && t.choices && t.choices.forEach((n) => {
    n.length === 1 && n[0].word && (n[0].fuzzy = !0, n[0].min = t.min);
  }), t));
}, sc = function(e) {
  return e = oc(e), e = ac(e), e = ic(e), e;
}, lc = sc, uc = function(e, t, n) {
  if (e == null || e === "")
    return [];
  t = t || {}, typeof e == "number" && (e = String(e));
  let r = Qu(e);
  return r = r.map((o) => Xu(o, t)), r = tc(r, n), r = rc(r, n), r = lc(r), r;
}, cc = uc, hc = function(e, t) {
  for (let n of t)
    if (e.has(n))
      return !0;
  return !1;
}, dc = function(e, t) {
  for (let n = 0; n < e.length; n += 1) {
    let r = e[n];
    if (!(r.optional === !0 || r.negative === !0 || r.fuzzy === !0)) {
      if (r.word !== void 0 && t.has(r.word) === !1 || r.tag !== void 0 && t.has("#" + r.tag) === !1)
        return !0;
      if (r.fastOr && hc(r.fastOr, t) === !1)
        return !1;
    }
  }
  return !1;
}, fc = dc, pc = function(e, t) {
  let n = e.length, r = t.length;
  if (n === 0)
    return r;
  if (r === 0)
    return n;
  let o = (r > n ? r : n) + 1;
  if (Math.abs(n - r) > (o || 100))
    return o || 100;
  let a = [];
  for (let d = 0; d < o; d++)
    a[d] = [d], a[d].length = o;
  for (let d = 0; d < o; d++)
    a[0][d] = d;
  let i, s, l, u, c, h;
  for (let d = 1; d <= n; ++d)
    for (s = e[d - 1], i = 1; i <= r; ++i) {
      if (d === i && a[d][i] > 4)
        return n;
      l = t[i - 1], u = s === l ? 0 : 1, c = a[d - 1][i] + 1, (h = a[d][i - 1] + 1) < c && (c = h), (h = a[d - 1][i - 1] + u) < c && (c = h), d > 1 && i > 1 && s === t[i - 2] && e[d - 2] === l && (h = a[d - 2][i - 2] + u) < c ? a[d][i] = h : a[d][i] = c;
    }
  return a[n][r];
}, gc = function(e, t, n = 3) {
  if (e === t)
    return 1;
  if (e.length < n || t.length < n)
    return 0;
  const r = pc(e, t);
  let o = Math.max(e.length, t.length);
  return 1 - (o === 0 ? 0 : r / o);
}, mc = gc, yc = /([\u0022\uFF02\u0027\u201C\u2018\u201F\u201B\u201E\u2E42\u201A\u00AB\u2039\u2035\u2036\u2037\u301D\u0060\u301F])/, bc = /([\u0022\uFF02\u0027\u201D\u2019\u00BB\u203A\u2032\u2033\u2034\u301E\u00B4])/, qr = /^[-–—]$/, Kr = / [-–—]{1,3} /, fe = (e, t) => e.post.indexOf(t) !== -1, Ur = (e, t) => e.pre.indexOf(t) !== -1, Sn = {
  hasQuote: (e) => yc.test(e.pre) || bc.test(e.post),
  hasComma: (e) => fe(e, ","),
  hasPeriod: (e) => fe(e, ".") === !0 && fe(e, "...") === !1,
  hasExclamation: (e) => fe(e, "!"),
  hasQuestionMark: (e) => fe(e, "?") || fe(e, "¿"),
  hasEllipses: (e) => fe(e, "..") || fe(e, "…") || Ur(e, "..") || Ur(e, "…"),
  hasSemicolon: (e) => fe(e, ";"),
  hasColon: (e) => fe(e, ":"),
  hasSlash: (e) => /\//.test(e.text),
  hasHyphen: (e) => qr.test(e.post) || qr.test(e.pre),
  hasDash: (e) => Kr.test(e.post) || Kr.test(e.pre),
  hasContraction: (e) => Boolean(e.implicit),
  isAcronym: (e) => e.tags.has("Acronym"),
  isKnown: (e) => e.tags.size > 0,
  isTitleCase: (e) => /^\p{Lu}[a-z'\u00C0-\u00FF]/u.test(e.text),
  isUpperCase: (e) => /^\p{Lu}+$/u.test(e.text)
};
Sn.hasQuotation = Sn.hasQuote;
const Ln = Sn;
let tn = function() {
};
const vc = function(e, t, n, r) {
  if (t.anything === !0)
    return !0;
  if (t.start === !0 && n !== 0 || t.end === !0 && n !== r - 1)
    return !1;
  if (t.id !== void 0 && t.id === e.id)
    return !0;
  if (t.word !== void 0)
    return t.use ? t.word === e[t.use] : e.machine !== null && e.machine === t.word || e.alias !== void 0 && e.alias.hasOwnProperty(t.word) || t.fuzzy === !0 && (t.word === e.root || mc(t.word, e.normal) >= t.min) || e.alias && e.alias.some((o) => o === t.word) ? !0 : t.word === e.text || t.word === e.normal;
  if (t.tag !== void 0)
    return e.tags.has(t.tag) === !0;
  if (t.method !== void 0)
    return typeof Ln[t.method] == "function" && Ln[t.method](e) === !0;
  if (t.pre !== void 0)
    return e.pre && e.pre.includes(t.pre);
  if (t.post !== void 0)
    return e.post && e.post.includes(t.post);
  if (t.regex !== void 0) {
    let o = e.normal;
    return t.use && (o = e[t.use]), t.regex.test(o);
  }
  if (t.chunk !== void 0)
    return e.chunk === t.chunk;
  if (t.switch !== void 0)
    return e.switch === t.switch;
  if (t.machine !== void 0)
    return e.normal === t.machine || e.machine === t.machine || e.root === t.machine;
  if (t.sense !== void 0)
    return e.sense === t.sense;
  if (t.fastOr !== void 0) {
    if (t.pos && !e.tags.has(t.pos))
      return null;
    let o = e.root || e.implicit || e.machine || e.normal;
    return t.fastOr.has(o) || t.fastOr.has(e.text);
  }
  return t.choices !== void 0 ? t.operator === "and" ? t.choices.every((o) => tn(e, o, n, r)) : t.choices.some((o) => tn(e, o, n, r)) : !1;
};
tn = function(e, t, n, r) {
  let o = vc(e, t, n, r);
  return t.negative === !0 ? !o : o;
};
const U = tn, wc = function(e, t) {
  let n = Object.assign({}, e.regs[e.r], { start: !1, end: !1 }), r = e.t;
  for (; e.t < e.terms.length; e.t += 1) {
    if (t && U(e.terms[e.t], t, e.start_i + e.t, e.phrase_length))
      return e.t;
    let o = e.t - r + 1;
    if (n.max !== void 0 && o === n.max)
      return e.t;
    if (U(e.terms[e.t], n, e.start_i + e.t, e.phrase_length) === !1)
      return n.min !== void 0 && o < n.min ? null : e.t;
  }
  return e.t;
}, Pc = function(e, t) {
  let n = e.t;
  if (!t)
    return e.terms.length;
  for (; n < e.terms.length; n += 1)
    if (U(e.terms[n], t, e.start_i + n, e.phrase_length) === !0)
      return n;
  return null;
}, kc = function(e, t) {
  if (e.end === !0 && e.greedy === !0 && t.start_i + t.t < t.phrase_length - 1) {
    let n = Object.assign({}, e, { end: !1 });
    if (U(t.terms[t.t], n, t.start_i + t.t, t.phrase_length) === !0)
      return !0;
  }
  return !1;
}, sn = function(e, t) {
  return e.groups[e.inGroup] || (e.groups[e.inGroup] = {
    start: t,
    length: 0
  }), e.groups[e.inGroup];
}, Ac = function(e) {
  let { regs: t } = e, n = t[e.r], r = Pc(e, t[e.r + 1]);
  if (r === null || r === 0 || n.min !== void 0 && r - e.t < n.min)
    return null;
  if (n.max !== void 0 && r - e.t > n.max)
    return e.t = e.t + n.max, !0;
  if (e.hasGroup === !0) {
    const o = sn(e, e.t);
    o.length = r - e.t;
  }
  return e.t = r, !0;
}, $c = Ac, Ic = function(e) {
  return Object.prototype.toString.call(e) === "[object Array]";
}, ei = function(e, t = 0) {
  let n = e.regs[e.r], r = !1;
  for (let o = 0; o < n.choices.length; o += 1) {
    let a = n.choices[o];
    if (!Ic(a))
      return !1;
    if (r = a.every((i, s) => {
      let l = 0, u = e.t + s + t + l;
      if (e.terms[u] === void 0)
        return !1;
      let c = U(e.terms[u], i, u + e.start_i, e.phrase_length);
      if (c === !0 && i.greedy === !0)
        for (let h = 1; h < e.terms.length; h += 1) {
          let d = e.terms[u + h];
          if (d)
            if (U(d, i, e.start_i + h, e.phrase_length) === !0)
              l += 1;
            else
              break;
        }
      return t += l, c;
    }), r) {
      t += a.length;
      break;
    }
  }
  return r && n.greedy === !0 ? ei(e, t) : t;
}, xc = function(e) {
  let t = 0;
  return e.regs[e.r].choices.every((o) => {
    let a = o.every((i, s) => {
      let l = e.t + s;
      return e.terms[l] === void 0 ? !1 : U(e.terms[l], i, l, e.phrase_length);
    });
    return a === !0 && o.length > t && (t = o.length), a;
  }) === !0 ? t : !1;
}, Nc = function(e) {
  const { regs: t } = e;
  let n = t[e.r], r = ei(e);
  if (r) {
    if (n.negative === !0)
      return null;
    if (e.hasGroup === !0) {
      const o = sn(e, e.t);
      o.length += r;
    }
    if (n.end === !0) {
      let o = e.phrase_length;
      if (e.t + e.start_i + r !== o)
        return null;
    }
    return e.t += r, !0;
  } else if (!n.optional)
    return null;
  return !0;
}, jc = Nc, Ec = function(e) {
  const { regs: t } = e;
  let n = t[e.r], r = xc(e);
  if (r) {
    if (n.negative === !0)
      return null;
    if (e.hasGroup === !0) {
      const o = sn(e, e.t);
      o.length += r;
    }
    if (n.end === !0) {
      let o = e.phrase_length - 1;
      if (e.t + e.start_i !== o)
        return null;
    }
    return e.t += r, !0;
  } else if (!n.optional)
    return null;
  return !0;
}, Tc = Ec, Cc = function(e, t, n) {
  let r = 0;
  for (let o = e.t; o < e.terms.length; o += 1) {
    let a = U(e.terms[o], t, e.start_i + e.t, e.phrase_length);
    if (a || n && (a = U(e.terms[o], n, e.start_i + e.t, e.phrase_length), a) || (r += 1, t.max !== void 0 && r === t.max))
      break;
  }
  return r === 0 || t.min && t.min > r ? !1 : (e.t += r, !0);
}, Dc = Cc, Oc = function(e) {
  const { regs: t } = e;
  let n = t[e.r], r = Object.assign({}, n);
  if (r.negative = !1, U(e.terms[e.t], r, e.start_i + e.t, e.phrase_length))
    return !1;
  if (n.optional) {
    let a = t[e.r + 1];
    a && (U(e.terms[e.t], a, e.start_i + e.t, e.phrase_length) ? e.r += 1 : a.optional && t[e.r + 2] && U(e.terms[e.t], t[e.r + 2], e.start_i + e.t, e.phrase_length) && (e.r += 2));
  }
  return n.greedy ? Dc(e, r, t[e.r + 1]) : (e.t += 1, !0);
}, Fc = Oc, Vc = function(e) {
  const { regs: t } = e;
  let n = t[e.r], r = e.terms[e.t], o = U(r, t[e.r + 1], e.start_i + e.t, e.phrase_length);
  if (n.negative || o) {
    let a = e.terms[e.t + 1];
    (!a || !U(a, t[e.r + 1], e.start_i + e.t, e.phrase_length)) && (e.r += 1);
  }
}, Gc = Vc, Bc = function(e) {
  const { regs: t, phrase_length: n } = e;
  let r = t[e.r];
  return e.t = wc(e, t[e.r + 1]), e.t === null || r.min && r.min > e.t || r.end === !0 && e.start_i + e.t !== n ? null : !0;
}, zc = Bc, Sc = function(e) {
  let t = e.terms[e.t], n = e.regs[e.r];
  if (t.implicit && e.terms[e.t + 1]) {
    if (!e.terms[e.t + 1].implicit)
      return;
    n.word === t.normal && (e.t += 1), n.method === "hasContraction" && (e.t += 1);
  }
}, Lc = Sc, Mc = function(e, t) {
  let n = e.regs[e.r];
  const r = sn(e, t);
  e.t > 1 && n.greedy ? r.length += e.t - t : r.length++;
}, Wc = function(e) {
  const { regs: t } = e;
  let n = t[e.r], r = e.terms[e.t], o = e.t;
  return n.optional && t[e.r + 1] && n.negative ? !0 : (n.optional && t[e.r + 1] && Gc(e), r.implicit && e.terms[e.t + 1] && Lc(e), e.t += 1, n.end === !0 && e.t !== e.terms.length && n.greedy !== !0 || n.greedy === !0 && !zc(e) ? null : (e.hasGroup === !0 && Mc(e, o), !0));
}, gn = Wc, Hc = function(e, t, n, r) {
  if (e.length === 0 || t.length === 0)
    return null;
  let o = {
    t: 0,
    terms: e,
    r: 0,
    regs: t,
    groups: {},
    start_i: n,
    phrase_length: r,
    inGroup: null
  };
  for (; o.r < t.length; o.r += 1) {
    let s = t[o.r];
    if (o.hasGroup = Boolean(s.group), o.hasGroup === !0 ? o.inGroup = s.group : o.inGroup = null, !o.terms[o.t]) {
      if (t.slice(o.r).some((c) => !c.optional) === !1)
        break;
      return null;
    }
    if (s.anything === !0 && s.greedy === !0) {
      if (!$c(o))
        return null;
      continue;
    }
    if (s.choices !== void 0 && s.operator === "or") {
      if (!jc(o))
        return null;
      continue;
    }
    if (s.choices !== void 0 && s.operator === "and") {
      if (!Tc(o))
        return null;
      continue;
    }
    if (s.anything === !0) {
      if (s.negative && s.anything || !gn(o))
        return null;
      continue;
    }
    if (kc(s, o) === !0) {
      if (!gn(o))
        return null;
      continue;
    }
    if (s.negative) {
      if (!Fc(o))
        return null;
      continue;
    }
    if (U(o.terms[o.t], s, o.start_i + o.t, o.phrase_length) === !0) {
      if (!gn(o))
        return null;
      continue;
    }
    if (s.optional !== !0)
      return null;
  }
  let a = [null, n, o.t + n];
  if (a[1] === a[2])
    return null;
  let i = {};
  return Object.keys(o.groups).forEach((s) => {
    let l = o.groups[s], u = n + l.start;
    i[s] = [null, u, u + l.length];
  }), { pointer: a, groups: i };
}, ur = Hc, Jc = function(e, t) {
  let n = [], r = {};
  return e.length === 0 ? { ptrs: n, byGroup: r } : (typeof t == "number" && (t = String(t)), t ? e.forEach((o) => {
    o.groups[t] && n.push(o.groups[t]);
  }) : e.forEach((o) => {
    n.push(o.pointer), Object.keys(o.groups).forEach((a) => {
      r[a] = r[a] || [], r[a].push(o.groups[a]);
    });
  }), { ptrs: n, byGroup: r });
}, _c = Jc, qc = function(e, t, n) {
  return e = e.filter((r) => {
    let [o, a, i] = r.pointer, s = n[o].slice(a, i);
    for (let l = 0; l < s.length; l += 1) {
      let u = s.slice(l);
      if (ur(u, t, l, s.length) !== null)
        return !1;
    }
    return !0;
  }), e;
}, Kc = qc, ti = function(e, t) {
  return e.pointer[0] = t, Object.keys(e.groups).forEach((n) => {
    e.groups[n][0] = t;
  }), e;
}, Uc = function(e, t, n) {
  let r = ur(e, t, 0, e.length);
  return r ? (r = ti(r, n), r) : null;
}, Rc = function(e, t, n) {
  n = n || [];
  let { regs: r, group: o, justOne: a } = t, i = [];
  if (!r || r.length === 0)
    return { ptrs: [], byGroup: {} };
  const s = r.filter((l) => l.optional !== !0 && l.negative !== !0).length;
  e:
    for (let l = 0; l < e.length; l += 1) {
      let u = e[l];
      if (!(n[l] && fc(r, n[l]))) {
        if (r[0].start === !0) {
          let c = Uc(u, r, l);
          c && i.push(c);
          continue;
        }
        for (let c = 0; c < u.length; c += 1) {
          let h = u.slice(c);
          if (h.length < s)
            break;
          let d = ur(h, r, c, u.length);
          if (d) {
            if (d = ti(d, l), i.push(d), a === !0)
              break e;
            let x = d.pointer[2];
            Math.abs(x - 1) > c && (c = Math.abs(x - 1));
          }
        }
      }
    }
  return r[r.length - 1].end === !0 && (i = i.filter((l) => {
    let u = l.pointer[0];
    return e[u].length === l.pointer[2];
  })), t.notIf && (i = Kc(i, t.notIf, e)), i = _c(i, o), i.ptrs.forEach((l) => {
    let [u, c, h] = l;
    l[3] = e[u][c].id, l[4] = e[u][h - 1].id;
  }), i;
}, Qc = Rc, Yc = {
  one: {
    termMethods: Ln,
    parseMatch: cc,
    match: Qc
  }
}, Xc = Yc, Zc = {
  parseMatch: function(e, t) {
    const n = this.world();
    let r = n.methods.one.killUnicode;
    return r && (e = r(e, n)), n.methods.one.parseMatch(e, t, n);
  }
}, eh = {
  api: Ju,
  methods: Xc,
  lib: Zc
}, th = /^\../, nh = /^#./, rh = (e) => (e = e.replace(/&/g, "&amp;"), e = e.replace(/</g, "&lt;"), e = e.replace(/>/g, "&gt;"), e = e.replace(/"/g, "&quot;"), e = e.replace(/'/g, "&apos;"), e), oh = function(e) {
  let t = "", n = "</span>";
  return e = rh(e), th.test(e) ? t = `<span class="${e.replace(/^\./, "")}"` : nh.test(e) ? t = `<span id="${e.replace(/^#/, "")}"` : (t = `<${e}`, n = `</${e}>`), t += ">", { start: t, end: n };
}, ah = function(e, t) {
  let n = {}, r = {};
  return Object.keys(t).forEach((o) => {
    let a = t[o], i = oh(o);
    typeof a == "string" && (a = e.match(a)), a.docs.forEach((s) => {
      if (s.every((c) => c.implicit))
        return;
      let l = s[0].id;
      n[l] = n[l] || [], n[l].push(i.start);
      let u = s[s.length - 1].id;
      r[u] = r[u] || [], r[u].push(i.end);
    });
  }), { starts: n, ends: r };
}, ih = function(e) {
  let { starts: t, ends: n } = ah(this, e), r = "";
  return this.docs.forEach((o) => {
    for (let a = 0; a < o.length; a += 1) {
      let i = o[a];
      t.hasOwnProperty(i.id) && (r += t[i.id].join("")), r += i.pre || "" + i.text || "", n.hasOwnProperty(i.id) && (r += n[i.id].join("")), r += i.post || "";
    }
  }), r;
}, sh = { html: ih }, ni = /[,:;)\]*.?~!\u0022\uFF02\u201D\u2019\u00BB\u203A\u2032\u2033\u2034\u301E\u00B4—-]+$/, Mn = /^[(['"*~\uFF02\u201C\u2018\u201F\u201B\u201E\u2E42\u201A\u00AB\u2039\u2035\u2036\u2037\u301D\u0060\u301F]+/, lh = /[,:;)('"\u201D\]]/, uh = /^[-–—]$/, ch = / /, Le = function(e, t, n = !0) {
  let r = "";
  return e.forEach((o) => {
    let a = o.pre || "", i = o.post || "";
    t.punctuation === "some" && (a = a.replace(Mn, ""), uh.test(i) && (i = " "), i = i.replace(lh, ""), i = i.replace(/\?!+/, "?"), i = i.replace(/!+/, "!"), i = i.replace(/\?+/, "?"), i = i.replace(/\.{2,}/, ""), o.tags.has("Abbreviation") && (i = i.replace(/\./, ""))), t.whitespace === "some" && (a = a.replace(/\s/, ""), i = i.replace(/\s+/, " ")), t.keepPunct || (a = a.replace(Mn, ""), i === "-" ? i = " " : i = i.replace(ni, ""));
    let s = o[t.form || "text"] || o.normal || "";
    t.form === "implicit" && (s = o.implicit || o.text), t.form === "root" && o.implicit && (s = o.root || o.implicit || o.normal), (t.form === "machine" || t.form === "implicit" || t.form === "root") && o.implicit && (!i || !ch.test(i)) && (i += " "), r += a + s + i;
  }), n === !1 && (r = r.trim()), t.lowerCase === !0 && (r = r.toLowerCase()), r;
}, hh = function(e, t) {
  let n = "";
  if (!e || !e[0] || !e[0][0])
    return n;
  for (let r = 0; r < e.length; r += 1)
    n += Le(e[r], t, !0);
  if (t.keepSpace || (n = n.trim()), t.keepPunct === !1) {
    e[0][0].tags.has("Emoticon") || (n = n.replace(Mn, ""));
    let r = e[e.length - 1];
    r[r.length - 1].tags.has("Emoticon") || (n = n.replace(ni, ""));
  }
  return t.cleanWhitespace === !0 && (n = n.trim()), n;
}, bt = {
  text: {
    form: "text"
  },
  normal: {
    whitespace: "some",
    punctuation: "some",
    case: "some",
    unicode: "some",
    form: "normal"
  },
  machine: {
    keepSpace: !1,
    whitespace: "some",
    punctuation: "some",
    case: "none",
    unicode: "some",
    form: "machine"
  },
  root: {
    keepSpace: !1,
    whitespace: "some",
    punctuation: "some",
    case: "some",
    unicode: "some",
    form: "root"
  },
  implicit: {
    form: "implicit"
  }
};
bt.clean = bt.normal;
bt.reduced = bt.root;
const nn = bt;
let ri = [], We = 0;
for (; We < 64; )
  ri[We] = 0 | Math.sin(++We % Math.PI) * 4294967296;
function cr(e) {
  let t, n, r, o = [t = 1732584193, n = 4023233417, ~t, ~n], a = [], i = decodeURI(encodeURI(e)) + "", s = i.length;
  for (e = --s / 4 + 2 | 15, a[--e] = s * 8; ~s; )
    a[s >> 2] |= i.charCodeAt(s) << 8 * s--;
  for (We = i = 0; We < e; We += 16) {
    for (s = o; i < 64; s = [
      r = s[3],
      t + ((r = s[0] + [
        t & n | ~t & r,
        r & t | ~r & n,
        t ^ n ^ r,
        n ^ (t | ~r)
      ][s = i >> 4] + ri[i] + ~~a[We | [
        i,
        5 * i + 1,
        3 * i + 5,
        7 * i
      ][s] & 15]) << (s = [
        7,
        12,
        17,
        22,
        5,
        9,
        14,
        20,
        4,
        11,
        16,
        23,
        6,
        10,
        15,
        21
      ][4 * s + i++ % 4]) | r >>> -s),
      t,
      n
    ])
      t = s[1] | 0, n = s[2];
    for (i = 4; i; )
      o[--i] += s[i];
  }
  for (e = ""; i < 32; )
    e += (o[i >> 3] >> (1 ^ i++) * 4 & 15).toString(16);
  return e;
}
const dh = {
  text: !0,
  terms: !0
};
let Rr = { case: "none", unicode: "some", form: "machine", punctuation: "some" };
const mn = function(e, t) {
  return Object.assign({}, e, t);
}, Te = {
  text: (e) => Le(e, { keepPunct: !0 }, !1),
  normal: (e) => Le(e, mn(nn.normal, { keepPunct: !0 }), !1),
  implicit: (e) => Le(e, mn(nn.implicit, { keepPunct: !0 }), !1),
  machine: (e) => Le(e, Rr, !1),
  root: (e) => Le(e, mn(Rr, { form: "root" }), !1),
  hash: (e) => cr(Le(e, { keepPunct: !0 }, !1)),
  offset: (e) => {
    let t = Te.text(e).length;
    return {
      index: e[0].offset.index,
      start: e[0].offset.start,
      length: t
    };
  },
  terms: (e) => e.map((t) => {
    let n = Object.assign({}, t);
    return n.tags = Array.from(t.tags), n;
  }),
  confidence: (e, t, n) => t.eq(n).confidence(),
  syllables: (e, t, n) => t.eq(n).syllables(),
  sentence: (e, t, n) => t.eq(n).fullSentence().text(),
  dirty: (e) => e.some((t) => t.dirty === !0)
};
Te.sentences = Te.sentence;
Te.clean = Te.normal;
Te.reduced = Te.root;
const fh = function(e, t) {
  return t = t || {}, typeof t == "string" && (t = {}), t = Object.assign({}, dh, t), t.offset && e.compute("offset"), e.docs.map((n, r) => {
    let o = {};
    return Object.keys(t).forEach((a) => {
      t[a] && Te[a] && (o[a] = Te[a](n, e, r));
    }), o;
  });
}, Wn = {
  json: function(e) {
    let t = fh(this, e);
    return typeof e == "number" ? t[e] : t;
  }
};
Wn.data = Wn.json;
const ph = Wn, gh = function(e) {
  console.log("%c -=-=- ", "background-color:#6699cc;"), e.forEach((t) => {
    console.groupCollapsed(t.text());
    let r = t.docs[0].map((o) => {
      let a = o.text || "-";
      o.implicit && (a = "[" + o.implicit + "]");
      let i = "[" + Array.from(o.tags).join(", ") + "]";
      return { text: a, tags: i };
    });
    console.table(r, ["text", "tags"]), console.groupEnd();
  });
}, mh = gh, ye = "\x1B[0m", yh = {
  green: (e) => "\x1B[32m" + e + ye,
  red: (e) => "\x1B[31m" + e + ye,
  blue: (e) => "\x1B[34m" + e + ye,
  magenta: (e) => "\x1B[35m" + e + ye,
  cyan: (e) => "\x1B[36m" + e + ye,
  yellow: (e) => "\x1B[33m" + e + ye,
  black: (e) => "\x1B[30m" + e + ye,
  dim: (e) => "\x1B[2m" + e + ye,
  i: (e) => "\x1B[3m" + e + ye
}, Z = yh, bh = function(e, t) {
  return t.one.tagSet && (e = e.map((n) => {
    if (!t.one.tagSet.hasOwnProperty(n))
      return n;
    const r = t.one.tagSet[n].color || "blue";
    return Z[r](n);
  })), e.join(", ");
}, vh = function(e) {
  let { docs: t, model: n } = e;
  t.length === 0 && console.log(Z.blue(`
     ──────`)), t.forEach((r) => {
    console.log(Z.blue(`
  ┌─────────`)), r.forEach((o) => {
      let a = [...o.tags || []], i = o.text || "-";
      o.sense && (i = `{${o.normal}/${o.sense}}`), o.implicit && (i = "[" + o.implicit + "]"), i = Z.yellow(i);
      let s = "'" + i + "'";
      if (o.reference) {
        let u = e.update([o.reference]).text("normal");
        s += ` - ${Z.dim(Z.i("[" + u + "]"))}`;
      }
      s = s.padEnd(18);
      let l = Z.blue("  │ ") + Z.i(s) + "  - " + bh(a, n);
      console.log(l);
    });
  });
}, wh = vh, Ph = function(e) {
  let { docs: t } = e;
  console.log(""), t.forEach((n) => {
    let r = [];
    n.forEach((o) => {
      o.chunk === "Noun" ? r.push(Z.blue(o.implicit || o.normal)) : o.chunk === "Verb" ? r.push(Z.green(o.implicit || o.normal)) : o.chunk === "Adjective" ? r.push(Z.yellow(o.implicit || o.normal)) : o.chunk === "Pivot" ? r.push(Z.red(o.implicit || o.normal)) : r.push(o.implicit || o.normal);
    }), console.log(r.join(" "), `
`);
  });
}, kh = Ph, Ah = (e, t, n) => {
  let r = n * 9, o = t.start + r, a = o + t.length, i = e.substring(0, o), s = e.substring(o, a), l = e.substring(a, e.length);
  return [i, s, l];
}, $h = function(e, t, n) {
  let r = Ah(e, t, n);
  return `${r[0]}${Z.blue(r[1])}${r[2]}`;
}, Ih = function(e) {
  if (!e.found)
    return;
  let t = {};
  e.fullPointer.forEach((n) => {
    t[n[0]] = t[n[0]] || [], t[n[0]].push(n);
  }), Object.keys(t).forEach((n) => {
    let o = e.update([[Number(n)]]).text();
    e.update(t[n]).json({ offset: !0 }).forEach((s, l) => {
      o = $h(o, s.offset, l);
    }), console.log(o);
  });
}, xh = Ih;
function Nh() {
  return typeof window < "u" && window.document;
}
const jh = function(e = {}) {
  let t = this;
  if (typeof e == "string") {
    let n = {};
    n[e] = !0, e = n;
  }
  return Nh() ? (mh(t), t) : (e.tags !== !1 && (wh(t), console.log(`
`)), e.chunks === !0 && (kh(t), console.log(`
`)), e.highlight === !0 && (xh(t), console.log(`
`)), t);
}, Eh = jh, Th = function(e) {
  let t = e.pre || "", n = e.post || "";
  return t + e.text + n;
}, Ch = function(e, t) {
  let n = {};
  return Object.keys(t).forEach((r) => {
    e.match(r).fullPointer.forEach((a) => {
      n[a[3]] = { fn: t[r], end: a[2] };
    });
  }), n;
}, Dh = function(e, t) {
  let n = Ch(e, t), r = "";
  return e.docs.forEach((o, a) => {
    for (let i = 0; i < o.length; i += 1) {
      let s = o[i];
      if (n.hasOwnProperty(s.id)) {
        let { fn: l, end: u } = n[s.id], c = e.update([[a, i, u]]);
        r += o[i].pre || "", r += l(c), i = u - 1, r += o[i].post || "";
      } else
        r += Th(s);
    }
  }), r;
}, oi = Dh, Oh = (e) => Object.prototype.toString.call(e) === "[object Object]", Fh = function(e) {
  let t = {};
  return e.forEach((r) => {
    t[r] = t[r] || 0, t[r] += 1;
  }), Object.keys(t).map((r) => ({ normal: r, count: t[r] })).sort((r, o) => r.count > o.count ? -1 : 0);
}, Vh = function(e) {
  if (Oh(e))
    return oi(this, e);
  if (e === "text")
    return this.text();
  if (e === "normal")
    return this.text("normal");
  if (e === "root")
    return this.text("root");
  if (e === "machine" || e === "reduced")
    return this.text("machine");
  if (e === "hash" || e === "md5")
    return cr(this.text());
  if (e === "json")
    return this.json();
  if (e === "offset" || e === "offsets")
    return this.compute("offset"), this.json({ offset: !0 });
  if (e === "array")
    return this.docs.map((n) => n.reduce((r, o) => r + o.pre + o.text + o.post, "").trim()).filter((n) => n);
  if (e === "freq" || e === "frequency" || e === "topk")
    return Fh(this.json({ normal: !0 }).map((t) => t.normal));
  if (e === "terms") {
    let t = [];
    return this.docs.forEach((n) => {
      let r = n.terms.map((o) => o.text);
      r = r.filter((o) => o), t = t.concat(r);
    }), t;
  }
  return e === "tags" ? this.docs.map((t) => t.reduce((n, r) => (n[r.implicit || r.normal] = Array.from(r.tags), n), {})) : e === "debug" ? this.debug() : this.text();
}, Gh = {
  debug: Eh,
  out: Vh,
  wrap: function(e) {
    return oi(this, e);
  }
}, Bh = Gh, zh = (e) => Object.prototype.toString.call(e) === "[object Object]", Sh = {
  text: function(e) {
    let t = {};
    if (e && typeof e == "string" && nn.hasOwnProperty(e) ? t = Object.assign({}, nn[e]) : e && zh(e) && (t = Object.assign({}, e)), t.keepSpace === void 0 && this.pointer && (t.keepSpace = !1), t.keepPunct === void 0 && this.pointer) {
      let n = this.pointer[0];
      n && n[1] ? t.keepPunct = !1 : t.keepPunct = !0;
    }
    return t.keepPunct === void 0 && (t.keepPunct = !0), t.keepSpace === void 0 && (t.keepSpace = !0), hh(this.docs, t);
  }
}, Lh = Object.assign({}, Bh, Sh, ph, sh), Mh = function(e) {
  Object.assign(e.prototype, Lh);
}, Wh = Mh, Hh = {
  api: Wh,
  methods: {
    one: {
      hash: cr
    }
  }
}, ai = function(e, t) {
  if (e[0] !== t[0])
    return !1;
  let [, n, r] = e, [, o, a] = t;
  return n <= o && r > o || o <= n && a > n;
}, Jh = function(e) {
  let t = e[0][1], n = e[0][2];
  return e.forEach((r) => {
    r[1] < t && (t = r[1]), r[2] > n && (n = r[2]);
  }), [e[0][0], t, n];
}, ln = function(e) {
  let t = {};
  return e.forEach((n) => {
    t[n[0]] = t[n[0]] || [], t[n[0]].push(n);
  }), t;
}, _h = function(e) {
  let t = {};
  for (let n = 0; n < e.length; n += 1)
    t[e[n].join(",")] = e[n];
  return Object.values(t);
}, qh = function(e, t) {
  let [n, r] = e, o = t[1], a = t[2], i = {};
  if (r < o) {
    let s = o < e[2] ? o : e[2];
    i.before = [n, r, s];
  }
  return i.match = t, e[2] > a && (i.after = [n, a, e[2]]), i;
}, Kh = function(e, t) {
  return e[1] <= t[1] && t[2] <= e[2];
}, Uh = function(e, t) {
  let n = ln(t), r = [];
  return e.forEach((o) => {
    let [a] = o, i = n[a] || [];
    if (i = i.filter((l) => Kh(o, l)), i.length === 0) {
      r.push({ passthrough: o });
      return;
    }
    i = i.sort((l, u) => l[1] - u[1]);
    let s = o;
    i.forEach((l, u) => {
      let c = qh(s, l);
      i[u + 1] ? (r.push({ before: c.before, match: c.match }), c.after && (s = c.after)) : r.push(c);
    });
  }), r;
}, ii = Uh, Rh = 20, Qh = function(e, t, n) {
  for (let r = 0; r < Rh; r += 1) {
    if (t[n - r]) {
      let o = t[n - r].findIndex((a) => a.id === e);
      if (o !== -1)
        return [n - r, o];
    }
    if (t[n + r]) {
      let o = t[n + r].findIndex((a) => a.id === e);
      if (o !== -1)
        return [n + r, o];
    }
  }
  return null;
}, Yh = function(e, t) {
  let [n, r, , , o] = e, a = t[n], i = a.findIndex((s) => s.id === o);
  return i === -1 ? (e[2] = t[n].length, e[4] = a.length ? a[a.length - 1].id : null) : e[2] = i, t[n].slice(r, e[2] + 1);
}, Xh = function(e, t) {
  let n = [];
  return e.forEach((r, o) => {
    if (!r)
      return;
    let [a, i, s, l, u] = r, c = t[a] || [];
    if (i === void 0 && (i = 0), s === void 0 && (s = c.length), l && (!c[i] || c[i].id !== l)) {
      let h = Qh(l, t, a);
      if (h !== null) {
        let d = s - i;
        c = t[h[0]].slice(h[1], h[1] + d);
        let x = c[0] ? c[0].id : null;
        e[o] = [h[0], h[1], h[1] + d, x];
      }
    } else
      c = c.slice(i, s);
    c.length !== 0 && i !== s && (u && c[c.length - 1].id !== u && (c = Yh(r, t)), n.push(c));
  }), n = n.filter((r) => r.length > 0), n;
}, Zh = Xh, ed = function(e) {
  let t = [];
  for (let n = 0; n < e.length; n += 1)
    for (let r = 0; r < e[n].length; r += 1)
      t.push(e[n][r]);
  return t;
}, td = {
  one: {
    termList: ed,
    getDoc: Zh,
    pointer: {
      indexN: ln,
      splitAll: ii
    }
  }
}, nd = function(e, t) {
  let n = e.concat(t), r = ln(n), o = [];
  return n.forEach((a) => {
    let [i] = a;
    if (r[i].length === 1) {
      o.push(a);
      return;
    }
    let s = r[i].filter((u) => ai(a, u));
    s.push(a);
    let l = Jh(s);
    o.push(l);
  }), o = _h(o), o;
}, si = nd, rd = function(e, t) {
  let n = [];
  return ii(e, t).forEach((o) => {
    o.passthrough && n.push(o.passthrough), o.before && n.push(o.before), o.after && n.push(o.after);
  }), n;
}, li = rd, od = function(e, t) {
  let n = e[1] < t[1] ? t[1] : e[1], r = e[2] > t[2] ? t[2] : e[2];
  return n < r ? [e[0], n, r] : null;
}, ad = function(e, t) {
  let n = ln(t), r = [];
  return e.forEach((o) => {
    let a = n[o[0]] || [];
    a = a.filter((i) => ai(o, i)), a.length !== 0 && a.forEach((i) => {
      let s = od(o, i);
      s && r.push(s);
    });
  }), r;
}, id = ad, sd = function(e) {
  return Object.prototype.toString.call(e) === "[object Array]";
}, hr = (e, t) => typeof e == "string" || sd(e) ? t.match(e) : e || t.none(), $t = function(e, t) {
  return e.map((n) => {
    let [r, o] = n;
    return t[r] && t[r][o] && (n[3] = t[r][o].id), n;
  });
}, me = {};
me.union = function(e) {
  e = hr(e, this);
  let t = si(this.fullPointer, e.fullPointer);
  return t = $t(t, this.document), this.toView(t);
};
me.and = me.union;
me.intersection = function(e) {
  e = hr(e, this);
  let t = id(this.fullPointer, e.fullPointer);
  return t = $t(t, this.document), this.toView(t);
};
me.not = function(e) {
  e = hr(e, this);
  let t = li(this.fullPointer, e.fullPointer);
  return t = $t(t, this.document), this.toView(t);
};
me.difference = me.not;
me.complement = function() {
  let e = this.all(), t = li(e.fullPointer, this.fullPointer);
  return t = $t(t, this.document), this.toView(t);
};
me.settle = function() {
  let e = this.fullPointer;
  return e.forEach((t) => {
    e = si(e, [t]);
  }), e = $t(e, this.document), this.update(e);
};
const ld = function(e) {
  Object.assign(e.prototype, me);
}, ud = ld, cd = {
  methods: td,
  api: ud
}, hd = {
  buildNet: function(e) {
    let n = this.methods().one.buildNet(e, this.world());
    return n.isNet = !0, n;
  }
}, dd = function(e) {
  e.prototype.sweep = function(t, n = {}) {
    const { world: r, docs: o } = this, { methods: a } = r;
    let i = a.one.bulkMatch(o, t, this.methods, n);
    n.tagger !== !1 && a.one.bulkTagger(i, o, this.world), i = i.map((l) => {
      let u = l.pointer, c = o[u[0]][u[1]], h = u[2] - u[1];
      return c.index && (l.pointer = [
        c.index[0],
        c.index[1],
        u[1] + h
      ]), l;
    });
    let s = i.map((l) => l.pointer);
    return i = i.map((l) => (l.view = this.update([l.pointer]), delete l.regs, delete l.needs, delete l.pointer, delete l._expanded, l)), {
      view: this.update(s),
      found: i
    };
  };
}, fd = dd, Hn = function(e) {
  return e.optional === !0 || e.negative === !0 ? null : e.tag ? "#" + e.tag : e.word ? e.word : e.switch ? `%${e.switch}%` : null;
}, pd = function(e) {
  let t = [];
  return e.forEach((n) => {
    t.push(Hn(n)), n.operator === "and" && n.choices && n.choices.forEach((r) => {
      r.forEach((o) => {
        t.push(Hn(o));
      });
    });
  }), t.filter((n) => n);
}, gd = function(e) {
  let t = [], n = 0;
  return e.forEach((r) => {
    r.operator === "or" && !r.optional && !r.negative && (r.fastOr && Array.from(r.fastOr).forEach((o) => {
      t.push(o);
    }), r.choices && r.choices.forEach((o) => {
      o.forEach((a) => {
        let i = Hn(a);
        i && t.push(i);
      });
    }), n += 1);
  }), { wants: t, count: n };
}, md = function(e, t) {
  const n = t.methods.one.parseMatch;
  return e.forEach((r) => {
    r.regs = n(r.match, {}, t), typeof r.ifNo == "string" && (r.ifNo = [r.ifNo]), r.notIf && (r.notIf = n(r.notIf, {}, t)), r.needs = pd(r.regs);
    let { wants: o, count: a } = gd(r.regs);
    r.wants = o, r.minWant = a, r.minWords = r.regs.filter((i) => !i.optional).length;
  }), e;
}, yd = md, bd = function(e, t) {
  e = yd(e, t);
  let n = {};
  e.forEach((o) => {
    o.needs.forEach((a) => {
      n[a] = n[a] || [], n[a].push(o);
    }), o.wants.forEach((a) => {
      n[a] = n[a] || [], n[a].push(o);
    });
  }), Object.keys(n).forEach((o) => {
    let a = {};
    n[o] = n[o].filter((i) => a[i.match] ? !1 : (a[i.match] = !0, !0));
  });
  let r = e.filter((o) => o.needs.length === 0 && o.wants.length === 0);
  return {
    hooks: n,
    always: r
  };
}, vd = bd, wd = function(e, t) {
  return e.map((n, r) => {
    let o = [];
    Object.keys(t).forEach((i) => {
      e[r].has(i) && (o = o.concat(t[i]));
    });
    let a = {};
    return o = o.filter((i) => a[i.match] ? !1 : (a[i.match] = !0, !0)), o;
  });
}, Pd = wd, kd = function(e, t) {
  return e.map((n, r) => {
    let o = t[r];
    return n = n.filter((a) => a.needs.every((i) => o.has(i))), n = n.filter((a) => !(a.ifNo !== void 0 && a.ifNo.some((i) => o.has(i)) === !0)), n = n.filter((a) => a.wants.length === 0 ? !0 : a.wants.filter((s) => o.has(s)).length >= a.minWant), n;
  });
}, Ad = kd, $d = function(e, t, n, r, o) {
  let a = [];
  for (let i = 0; i < e.length; i += 1)
    for (let s = 0; s < e[i].length; s += 1) {
      let l = e[i][s], u = r.one.match([t[i]], l);
      if (u.ptrs.length > 0 && (u.ptrs.forEach((c) => {
        c[0] = i;
        let h = Object.assign({}, l, { pointer: c });
        l.unTag !== void 0 && (h.unTag = l.unTag), a.push(h);
      }), o.matchOne === !0))
        return [a[0]];
    }
  return a;
}, Id = $d, xd = function(e, t) {
  return e.map((n, r) => {
    let o = t[r].length;
    return n = n.filter((a) => o >= a.minWords), n;
  });
}, Nd = function(e, t, n, r = {}) {
  let o = n.one.cacheDoc(e), a = Pd(o, t.hooks);
  return a = Ad(a, o), t.always.length > 0 && (a = a.map((s) => s.concat(t.always))), a = xd(a, e), Id(a, e, o, n, r);
}, jd = Nd, Ed = function(e, t, n) {
  let r = n.one.tagSet;
  if (!r.hasOwnProperty(t))
    return !0;
  let o = r[t].not || [];
  for (let a = 0; a < e.length; a += 1) {
    let i = e[a];
    for (let s = 0; s < o.length; s += 1)
      if (i.tags.has(o[s]) === !0)
        return !1;
  }
  return !0;
}, Td = Ed, Cd = function(e, t, n) {
  const { model: r, methods: o } = n, { getDoc: a, setTag: i, unTag: s } = o.one, l = o.two.looksPlural;
  return e.length === 0 ? e : ((typeof process > "u" || !process.env ? self.env || {} : process.env).DEBUG_TAGS && console.log(`

  \x1B[32m→ ${e.length} post-tagger:\x1B[0m`), e.map((c) => {
    if (!c.tag && !c.chunk && !c.unTag)
      return;
    let h = c.reason || c.match, d = a([c.pointer], t)[0];
    if (!(c.safe === !0 && (Td(d, c.tag, r) === !1 || d[d.length - 1].post === "-"))) {
      if (c.tag !== void 0 && (i(d, c.tag, n, c.safe, `[post] '${h}'`), c.tag === "Noun" && l)) {
        let x = d[d.length - 1];
        l(x.text) ? i([x], "Plural", n, c.safe, "quick-plural") : i([x], "Singular", n, c.safe, "quick-singular");
      }
      c.unTag !== void 0 && s(d, c.unTag, n, c.safe, h), c.chunk && d.forEach((x) => x.chunk = c.chunk);
    }
  }));
}, Dd = Cd, Od = {
  buildNet: vd,
  bulkMatch: jd,
  bulkTagger: Dd
}, Fd = {
  lib: hd,
  api: fd,
  methods: {
    one: Od
  }
}, ui = / /, Qr = function(e, t) {
  t === "Noun" && (e.chunk = t), t === "Verb" && (e.chunk = t);
}, ci = function(e, t, n, r) {
  if (e.tags.has(t) === !0 || t === ".")
    return null;
  let o = n[t];
  if (o) {
    if (o.not && o.not.length > 0)
      for (let a = 0; a < o.not.length; a += 1) {
        if (r === !0 && e.tags.has(o.not[a]))
          return null;
        e.tags.delete(o.not[a]);
      }
    if (o.parents && o.parents.length > 0)
      for (let a = 0; a < o.parents.length; a += 1)
        e.tags.add(o.parents[a]), Qr(e, o.parents[a]);
  }
  return e.tags.add(t), e.dirty = !0, Qr(e, t), !0;
}, Vd = function(e, t, n, r) {
  let o = t.split(ui);
  e.forEach((a, i) => {
    let s = o[i];
    s && (s = s.replace(/^#/, ""), ci(a, s, n, r));
  });
}, Gd = function(e) {
  return Object.prototype.toString.call(e) === "[object Array]";
}, Bd = (e, t, n = "") => {
  const r = (i) => "\x1B[33m\x1B[3m" + i + "\x1B[0m", o = (i) => "\x1B[3m" + i + "\x1B[0m";
  let a = e.map((i) => i.text || "[" + i.implicit + "]").join(" ");
  typeof t != "string" && t.length > 2 && (t = t.slice(0, 2).join(", #") + " +"), t = typeof t != "string" ? t.join(", #") : t, console.log(` ${r(a).padEnd(24)} \x1B[32m→\x1B[0m #${t.padEnd(22)}  ${o(n)}`);
}, hi = function(e, t, n = {}, r, o) {
  const a = n.model.one.tagSet || {};
  if (!t)
    return;
  const i = typeof process > "u" || !process.env ? self.env || {} : process.env;
  if (i && i.DEBUG_TAGS && Bd(e, t, o), Gd(t) === !0) {
    t.forEach((s) => hi(e, s, n, r));
    return;
  }
  if (typeof t != "string") {
    console.warn(`compromise: Invalid tag '${t}'`);
    return;
  }
  if (t = t.trim(), ui.test(t)) {
    Vd(e, t, a, r);
    return;
  }
  t = t.replace(/^#/, "");
  for (let s = 0; s < e.length; s += 1)
    ci(e[s], t, a, r);
}, zd = hi, Sd = function(e, t, n) {
  t = t.trim().replace(/^#/, "");
  for (let r = 0; r < e.length; r += 1) {
    let o = e[r];
    if (t === "*") {
      o.tags.clear();
      continue;
    }
    let a = n[t];
    if (a && a.children.length > 0)
      for (let i = 0; i < a.children.length; i += 1)
        o.tags.delete(a.children[i]);
    o.tags.delete(t);
  }
}, Ld = Sd, Fe = function(e) {
  return e.children = e.children || [], e._cache = e._cache || {}, e.props = e.props || {}, e._cache.parents = e._cache.parents || [], e._cache.children = e._cache.children || [], e;
}, Md = /^ *(#|\/\/)/, Wd = function(e) {
  let t = e.trim().split(/->/), n = [];
  t.forEach((o) => {
    n = n.concat(function(a) {
      if (!(a = a.trim()))
        return null;
      if (/^\[/.test(a) && /\]$/.test(a)) {
        let i = (a = (a = a.replace(/^\[/, "")).replace(/\]$/, "")).split(/,/);
        return i = i.map((s) => s.trim()).filter((s) => s), i = i.map((s) => Fe({ id: s })), i;
      }
      return [Fe({ id: a })];
    }(o));
  }), n = n.filter((o) => o);
  let r = n[0];
  for (let o = 1; o < n.length; o += 1)
    r.children.push(n[o]), r = n[o];
  return n[0];
}, xe = (e, t) => {
  let n = [], r = [e];
  for (; r.length > 0; ) {
    let o = r.pop();
    n.push(o), o.children && o.children.forEach((a) => {
      t && t(o, a), r.push(a);
    });
  }
  return n;
}, dr = (e) => Object.prototype.toString.call(e) === "[object Array]", xt = (e) => (e = e || "").trim(), Hd = function(e = []) {
  return typeof e == "string" ? function(n) {
    let r = n.split(/\r?\n/), o = [];
    r.forEach((i) => {
      if (!i.trim() || Md.test(i))
        return;
      let s = ((l) => {
        const u = /^( {2}|\t)/;
        let c = 0;
        for (; u.test(l); )
          l = l.replace(u, ""), c += 1;
        return c;
      })(i);
      o.push({ indent: s, node: Wd(i) });
    });
    let a = function(i) {
      let s = { children: [] };
      return i.forEach((l, u) => {
        l.indent === 0 ? s.children = s.children.concat(l.node) : i[u - 1] && function(c, h) {
          let d = c[h].indent;
          for (; h >= 0; h -= 1)
            if (c[h].indent < d)
              return c[h];
          return c[0];
        }(i, u).node.children.push(l.node);
      }), s;
    }(o);
    return a = Fe(a), a;
  }(e) : dr(e) ? function(n) {
    let r = {};
    n.forEach((a) => {
      r[a.id] = a;
    });
    let o = Fe({});
    return n.forEach((a) => {
      if ((a = Fe(a)).parent)
        if (r.hasOwnProperty(a.parent)) {
          let i = r[a.parent];
          delete a.parent, i.children.push(a);
        } else
          console.warn(`[Grad] - missing node '${a.parent}'`);
      else
        o.children.push(a);
    }), o;
  }(e) : (xe(t = e).forEach(Fe), t);
  var t;
}, Jd = (e) => "\x1B[31m" + e + "\x1B[0m", _d = (e) => "\x1B[2m" + e + "\x1B[0m", Jn = function(e, t) {
  let n = "-> ";
  t && (n = _d("→ "));
  let r = "";
  return xe(e).forEach((o, a) => {
    let i = o.id || "";
    if (t && (i = Jd(i)), a === 0 && !o.id)
      return;
    let s = o._cache.parents.length;
    r += "    ".repeat(s) + n + i + `
`;
  }), r;
}, Yr = function(e) {
  let t = xe(e);
  t.forEach((r) => {
    delete (r = Object.assign({}, r)).children;
  });
  let n = t[0];
  return n && !n.id && Object.keys(n.props).length === 0 && t.shift(), t;
}, Xr = { text: Jn, txt: Jn, array: Yr, flat: Yr }, Zr = function(e, t) {
  return t === "nested" || t === "json" ? e : t === "debug" ? (console.log(Jn(e, !0)), null) : Xr.hasOwnProperty(t) ? Xr[t](e) : e;
}, yn = (e) => {
  xe(e, (t, n) => {
    t.id && (t._cache.parents = t._cache.parents || [], n._cache.parents = t._cache.parents.concat([t.id]));
  });
}, qd = (e, t) => (Object.keys(t).forEach((n) => {
  if (t[n] instanceof Set) {
    let r = e[n] || /* @__PURE__ */ new Set();
    e[n] = /* @__PURE__ */ new Set([...r, ...t[n]]);
  } else if (((r) => r && typeof r == "object" && !Array.isArray(r))(t[n])) {
    let r = e[n] || {};
    e[n] = Object.assign({}, t[n], r);
  } else
    dr(t[n]) ? e[n] = t[n].concat(e[n] || []) : e[n] === void 0 && (e[n] = t[n]);
}), e), Kd = /\//;
let qt = class {
  constructor(t = {}) {
    Object.defineProperty(this, "json", { enumerable: !1, value: t, writable: !0 });
  }
  get children() {
    return this.json.children;
  }
  get id() {
    return this.json.id;
  }
  get found() {
    return this.json.id || this.json.children.length > 0;
  }
  props(t = {}) {
    let n = this.json.props || {};
    return typeof t == "string" && (n[t] = !0), this.json.props = Object.assign(n, t), this;
  }
  get(t) {
    if (t = xt(t), !Kd.test(t)) {
      let r = this.json.children.find((o) => o.id === t);
      return new qt(r);
    }
    let n = ((r, o) => {
      let a = ((i) => typeof i != "string" ? i : (i = i.replace(/^\//, "")).split(/\//))(o = o || "");
      for (let i = 0; i < a.length; i += 1) {
        let s = r.children.find((l) => l.id === a[i]);
        if (!s)
          return null;
        r = s;
      }
      return r;
    })(this.json, t) || Fe({});
    return new qt(n);
  }
  add(t, n = {}) {
    if (dr(t))
      return t.forEach((o) => this.add(xt(o), n)), this;
    t = xt(t);
    let r = Fe({ id: t, props: n });
    return this.json.children.push(r), new qt(r);
  }
  remove(t) {
    return t = xt(t), this.json.children = this.json.children.filter((n) => n.id !== t), this;
  }
  nodes() {
    return xe(this.json).map((t) => (delete (t = Object.assign({}, t)).children, t));
  }
  cache() {
    return ((t) => {
      let n = xe(t, (o, a) => {
        o.id && (o._cache.parents = o._cache.parents || [], o._cache.children = o._cache.children || [], a._cache.parents = o._cache.parents.concat([o.id]));
      }), r = {};
      n.forEach((o) => {
        o.id && (r[o.id] = o);
      }), n.forEach((o) => {
        o._cache.parents.forEach((a) => {
          r.hasOwnProperty(a) && r[a]._cache.children.push(o.id);
        });
      }), t._cache.children = Object.keys(r);
    })(this.json), this;
  }
  list() {
    return xe(this.json);
  }
  fillDown() {
    var t;
    return t = this.json, xe(t, (n, r) => {
      r.props = qd(r.props, n.props);
    }), this;
  }
  depth() {
    yn(this.json);
    let t = xe(this.json), n = t.length > 1 ? 1 : 0;
    return t.forEach((r) => {
      if (r._cache.parents.length === 0)
        return;
      let o = r._cache.parents.length + 1;
      o > n && (n = o);
    }), n;
  }
  out(t) {
    return yn(this.json), Zr(this.json, t);
  }
  debug() {
    return yn(this.json), Zr(this.json, "debug"), this;
  }
};
const di = function(e) {
  let t = Hd(e);
  return new qt(t);
};
di.prototype.plugin = function(e) {
  e(this);
};
const Ud = {
  Noun: "blue",
  Verb: "green",
  Negative: "green",
  Date: "red",
  Value: "red",
  Adjective: "magenta",
  Preposition: "cyan",
  Conjunction: "cyan",
  Determiner: "cyan",
  Hyphenated: "cyan",
  Adverb: "cyan"
}, Ue = Ud, Rd = function(e) {
  if (Ue.hasOwnProperty(e.id))
    return Ue[e.id];
  if (Ue.hasOwnProperty(e.is))
    return Ue[e.is];
  let t = e._cache.parents.find((n) => Ue[n]);
  return Ue[t];
}, Qd = function(e) {
  const t = {};
  return e.forEach((n) => {
    let { not: r, also: o, is: a, novel: i } = n.props, s = n._cache.parents;
    o && (s = s.concat(o)), t[n.id] = {
      is: a,
      not: r,
      novel: i,
      also: o,
      parents: s,
      children: n._cache.children,
      color: Rd(n)
    };
  }), Object.keys(t).forEach((n) => {
    let r = new Set(t[n].not);
    t[n].not.forEach((o) => {
      t[o] && t[o].children.forEach((a) => r.add(a));
    }), t[n].not = Array.from(r);
  }), t;
}, Yd = Qd, eo = function(e) {
  return e ? typeof e == "string" ? [e] : e : [];
}, Xd = function(e, t) {
  return Object.keys(e).forEach((n) => {
    e[n].isA && (e[n].is = e[n].isA), e[n].notA && (e[n].not = e[n].notA), e[n].is && typeof e[n].is == "string" && !t.hasOwnProperty(e[n].is) && !e.hasOwnProperty(e[n].is) && (e[e[n].is] = {}), e[n].not && typeof e[n].not == "string" && !e.hasOwnProperty(e[n].not) && !t.hasOwnProperty(e[n].not) && !e.hasOwnProperty(e[n].not) && (e[e[n].not] = {});
  }), e;
}, Zd = function(e, t) {
  return e = Xd(e, t), Object.keys(e).forEach((n) => {
    e[n].children = eo(e[n].children), e[n].not = eo(e[n].not);
  }), Object.keys(e).forEach((n) => {
    (e[n].not || []).forEach((o) => {
      e[o] && e[o].not && e[o].not.push(n);
    });
  }), e;
}, ef = Zd, tf = function(e) {
  const t = Object.keys(e).map((r) => {
    let o = e[r];
    const a = { not: new Set(o.not), also: o.also, is: o.is, novel: o.novel };
    return { id: r, parent: o.is, props: a, children: [] };
  });
  return di(t).cache().fillDown().out("array");
}, nf = function(e) {
  return Object.keys(e).forEach((t) => {
    e[t] = Object.assign({}, e[t]), e[t].novel = !0;
  }), e;
}, rf = function(e, t) {
  Object.keys(t).length > 0 && (e = nf(e)), e = ef(e, t);
  let n = Object.assign({}, t, e);
  const r = tf(n);
  return Yd(r);
}, of = rf, af = {
  one: {
    setTag: zd,
    unTag: Ld,
    addTags: of
  }
}, to = function(e) {
  return Object.prototype.toString.call(e) === "[object Array]";
}, sf = {
  tag: function(e, t = "", n) {
    if (!this.found || !e)
      return this;
    let r = this.termList();
    if (r.length === 0)
      return this;
    const { methods: o, verbose: a, world: i } = this;
    return a === !0 && console.log(" +  ", e, t || ""), to(e) ? e.forEach((s) => o.one.setTag(r, s, i, n, t)) : o.one.setTag(r, e, i, n, t), this.uncache(), this;
  },
  tagSafe: function(e, t = "") {
    return this.tag(e, t, !0);
  },
  unTag: function(e, t) {
    if (!this.found || !e)
      return this;
    let n = this.termList();
    if (n.length === 0)
      return this;
    const { methods: r, verbose: o, model: a } = this;
    o === !0 && console.log(" -  ", e, t || "");
    let i = a.one.tagSet;
    return to(e) ? e.forEach((s) => r.one.unTag(n, s, i)) : r.one.unTag(n, e, i), this.uncache(), this;
  },
  canBe: function(e) {
    e = e.replace(/^#/, "");
    let t = this.model.one.tagSet;
    if (!t.hasOwnProperty(e))
      return this;
    let n = t[e].not || [], r = [];
    this.document.forEach((a, i) => {
      a.forEach((s, l) => {
        n.find((c) => s.tags.has(c)) && r.push([i, l, l + 1]);
      });
    });
    let o = this.update(r);
    return this.difference(o);
  }
}, lf = sf, uf = function(e) {
  Object.assign(e.prototype, lf);
}, cf = uf, hf = function(e) {
  const { model: t, methods: n } = this.world(), r = t.one.tagSet, o = n.one.addTags;
  let a = o(e, r);
  return t.one.tagSet = a, this;
}, df = { addTags: hf }, no = /* @__PURE__ */ new Set(["Auxiliary", "Possessive"]), ff = function(e, t) {
  return e = e.sort((n, r) => {
    if (no.has(n) || !t.hasOwnProperty(r))
      return 1;
    if (no.has(r) || !t.hasOwnProperty(n))
      return -1;
    let o = t[n].children || [], a = o.length;
    o = t[r].children || [];
    let i = o.length;
    return a - i;
  }), e;
}, pf = function(e) {
  const { document: t, world: n } = e, r = n.model.one.tagSet;
  t.forEach((o) => {
    o.forEach((a) => {
      let i = Array.from(a.tags);
      a.tagRank = ff(i, r);
    });
  });
}, gf = pf, mf = {
  model: {
    one: { tagSet: {} }
  },
  compute: {
    tagRank: gf
  },
  methods: af,
  api: cf,
  lib: df
}, yf = /([.!?\u203D\u2E18\u203C\u2047-\u2049\u3002]+\s)/g, bf = /^[.!?\u203D\u2E18\u203C\u2047-\u2049\u3002]+\s$/, vf = /((?:\r?\n|\r)+)/, wf = function(e) {
  let t = [], n = e.split(vf);
  for (let r = 0; r < n.length; r++) {
    let o = n[r].split(yf);
    for (let a = 0; a < o.length; a++)
      o[a + 1] && bf.test(o[a + 1]) === !0 && (o[a] += o[a + 1], o[a + 1] = ""), o[a] !== "" && t.push(o[a]);
  }
  return t;
}, Pf = wf, kf = /[a-z0-9\u00C0-\u00FF\u00a9\u00ae\u2000-\u3300\ud000-\udfff]/i, Af = /\S/, $f = function(e) {
  let t = [];
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    if (!(r === void 0 || r === "")) {
      if (Af.test(r) === !1 || kf.test(r) === !1) {
        if (t[t.length - 1]) {
          t[t.length - 1] += r;
          continue;
        } else if (e[n + 1]) {
          e[n + 1] = r + e[n + 1];
          continue;
        }
      }
      t.push(r);
    }
  }
  return t;
}, If = $f, xf = function(e, t) {
  const n = t.methods.one.tokenize.isSentence, r = t.model.one.abbreviations || /* @__PURE__ */ new Set();
  let o = [];
  for (let a = 0; a < e.length; a++) {
    let i = e[a];
    e[a + 1] && n(i, r) === !1 ? e[a + 1] = i + (e[a + 1] || "") : i && i.length > 0 && (o.push(i), e[a] = "");
  }
  return o;
}, Nf = xf, ro = 280, fi = {
  '"': '"',
  "＂": "＂",
  "“": "”",
  "‟": "”",
  "„": "”",
  "⹂": "”",
  "‚": "’",
  "«": "»",
  "‹": "›",
  "‵": "′",
  "‶": "″",
  "‷": "‴",
  "〝": "〞",
  "〟": "〞"
}, jf = RegExp("(" + Object.keys(fi).join("|") + ")", "g"), Ef = RegExp("(" + Object.values(fi).join("|") + ")", "g"), oo = function(e) {
  if (!e)
    return !1;
  let t = e.match(Ef);
  return t !== null && t.length === 1;
}, Tf = function(e) {
  let t = [];
  for (let n = 0; n < e.length; n += 1) {
    let o = e[n].match(jf);
    if (o !== null && o.length === 1) {
      if (oo(e[n + 1]) && e[n + 1].length < ro) {
        e[n] += e[n + 1], t.push(e[n]), e[n + 1] = "", n += 1;
        continue;
      }
      if (oo(e[n + 2])) {
        let a = e[n + 1] + e[n + 2];
        if (a.length < ro) {
          e[n] += a, t.push(e[n]), e[n + 1] = "", e[n + 2] = "", n += 2;
          continue;
        }
      }
    }
    t.push(e[n]);
  }
  return t;
}, Cf = Tf, Df = 250, ao = /\(/g, Of = /\)/g, Ff = function(e) {
  let t = [];
  for (let n = 0; n < e.length; n += 1) {
    let o = e[n].match(ao);
    if (o !== null && o.length === 1 && e[n + 1] && e[n + 1].length < Df && e[n + 1].match(Of) !== null && o.length === 1 && !ao.test(e[n + 1])) {
      e[n] += e[n + 1], t.push(e[n]), e[n + 1] = "", n += 1;
      continue;
    }
    t.push(e[n]);
  }
  return t;
}, Vf = Ff, Gf = /\S/, io = /^\s+/, Bf = function(e, t) {
  if (e = e || "", e = String(e), !e || typeof e != "string" || Gf.test(e) === !1)
    return [];
  e = e.replace(" ", " ");
  let n = Pf(e), r = If(n);
  if (r = Nf(r, t), r = Cf(r), r = Vf(r), r.length === 0)
    return [e];
  for (let o = 1; o < r.length; o += 1) {
    let a = r[o].match(io);
    a !== null && (r[o - 1] += a[0], r[o] = r[o].replace(io, ""));
  }
  return r;
}, zf = Bf, Sf = function(e, t) {
  let n = e.split(/[-–—]/);
  if (n.length <= 1)
    return !1;
  const { prefixes: r, suffixes: o } = t.one;
  return n[0].length === 1 && /[a-z]/i.test(n[0]) || r.hasOwnProperty(n[0]) || (n[1] = n[1].trim().replace(/[.?!]$/, ""), o.hasOwnProperty(n[1])) ? !1 : /^([a-z\u00C0-\u00FF`"'/]+)[-–—]([a-z0-9\u00C0-\u00FF].*)/i.test(e) === !0 || /^([0-9]{1,4})[-–—]([a-z\u00C0-\u00FF`"'/-]+$)/i.test(e) === !0;
}, Lf = function(e) {
  let t = [];
  const n = e.split(/[-–—]/);
  let r = "-", o = e.match(/[-–—]/);
  o && o[0] && (r = o);
  for (let a = 0; a < n.length; a++)
    a === n.length - 1 ? t.push(n[a]) : t.push(n[a] + r);
  return t;
}, Mf = function(e) {
  const t = /^[0-9]{1,4}(:[0-9][0-9])?([a-z]{1,2})? ?[-–—] ?$/, n = /^[0-9]{1,4}([a-z]{1,2})? ?$/;
  for (let r = 0; r < e.length - 1; r += 1)
    e[r + 1] && t.test(e[r]) && n.test(e[r + 1]) && (e[r] = e[r] + e[r + 1], e[r + 1] = null);
  return e;
}, Wf = Mf, Hf = /\p{L} ?\/ ?\p{L}+$/u, Jf = function(e) {
  for (let t = 1; t < e.length - 1; t++)
    Hf.test(e[t]) && (e[t - 1] += e[t] + e[t + 1], e[t] = null, e[t + 1] = null);
  return e;
}, _f = Jf, qf = /\S/, Kf = /^[!?.]+$/, Uf = /(\S+)/;
let _n = [".", "?", "!", ":", ";", "-", "–", "—", "--", "...", "(", ")", "[", "]", '"', "'", "`", "«", "»", "*"];
_n = _n.reduce((e, t) => (e[t] = !0, e), {});
const Rf = function(e) {
  return Object.prototype.toString.call(e) === "[object Array]";
}, Qf = function(e, t) {
  let n = [], r = [];
  if (e = e || "", typeof e == "number" && (e = String(e)), Rf(e))
    return e;
  const o = e.split(Uf);
  for (let i = 0; i < o.length; i++) {
    if (Sf(o[i], t) === !0) {
      r = r.concat(Lf(o[i]));
      continue;
    }
    r.push(o[i]);
  }
  let a = "";
  for (let i = 0; i < r.length; i++) {
    let s = r[i];
    qf.test(s) === !0 && _n.hasOwnProperty(s) === !1 && Kf.test(s) === !1 ? (n.length > 0 ? (n[n.length - 1] += a, n.push(s)) : n.push(a + s), a = "") : a += s;
  }
  return a && (n.length === 0 && (n[0] = ""), n[n.length - 1] += a), n = _f(n), n = Wf(n), n = n.filter((i) => i), n;
}, Yf = Qf, so = /\p{Letter}/u, Nt = /[\p{Number}\p{Currency_Symbol}]/u, Xf = /^[a-z]\.([a-z]\.)+/i, Zf = /[sn]['’]$/, ep = function(e, t) {
  let { prePunctuation: n, postPunctuation: r, emoticons: o } = t.one, a = e, i = "", s = "", l = Array.from(e);
  if (o.hasOwnProperty(e.trim()))
    return { str: e.trim(), pre: i, post: " " };
  let u = l.length;
  for (let c = 0; c < u; c += 1) {
    let h = l[0];
    if (n[h] !== !0) {
      if ((h === "+" || h === "-") && Nt.test(l[1]) || h === "'" && h.length === 3 && Nt.test(l[1]) || so.test(h) || Nt.test(h))
        break;
      i += l.shift();
    }
  }
  u = l.length;
  for (let c = 0; c < u; c += 1) {
    let h = l[l.length - 1];
    if (r[h] !== !0) {
      if (so.test(h) || Nt.test(h))
        break;
      h === "." && Xf.test(a) === !0 || h === "'" && Zf.test(a) === !0 || (s = l.pop() + s);
    }
  }
  return e = l.join(""), e === "" && (a = a.replace(/ *$/, (c) => (s = c || "", "")), e = a, i = ""), { str: e, pre: i, post: s };
}, tp = ep, np = (e, t) => {
  let { str: n, pre: r, post: o } = tp(e, t);
  return {
    text: n,
    pre: r,
    post: o,
    tags: /* @__PURE__ */ new Set()
  };
}, rp = np, op = function(e, t) {
  const n = t.model.one.unicode || {};
  e = e || "";
  let r = e.split("");
  return r.forEach((o, a) => {
    n[o] && (r[a] = n[o]);
  }), r.join("");
}, ap = op, ip = function(e) {
  e = e || "", e = e.toLowerCase(), e = e.trim();
  let t = e;
  return e = e.replace(/[,;.!?]+$/, ""), e = e.replace(/\u2026/g, "..."), e = e.replace(/\u2013/g, "-"), /^[:;]/.test(e) === !1 && (e = e.replace(/\.{3,}$/g, ""), e = e.replace(/[",.!:;?)]+$/g, ""), e = e.replace(/^['"(]+/g, "")), e = e.replace(/[\u200B-\u200D\uFEFF]/g, ""), e = e.trim(), e === "" && (e = t), e = e.replace(/([0-9]),([0-9])/g, "$1$2"), e;
}, sp = ip, lp = /([A-Z]\.)+[A-Z]?,?$/, up = /^[A-Z]\.,?$/, cp = /[A-Z]{2,}('s|,)?$/, hp = /([a-z]\.)+[a-z]\.?$/, dp = function(e) {
  return lp.test(e) === !0 || hp.test(e) === !0 || up.test(e) === !0 || cp.test(e) === !0;
}, fp = function(e) {
  return dp(e) && (e = e.replace(/\./g, "")), e;
}, pp = fp, gp = function(e, t) {
  const n = t.methods.one.killUnicode;
  let r = e.text || "";
  r = sp(r), r = n(r, t), r = pp(r), e.normal = r;
}, pi = gp, mp = function(e, t) {
  const { methods: n, model: r } = t, { splitSentences: o, splitTerms: a, splitWhitespace: i } = n.one.tokenize;
  return e = e || "", e = o(e, t).map((l) => {
    let u = a(l, r);
    return u = u.map((c) => i(c, r)), u.forEach((c) => {
      pi(c, t);
    }), u;
  }), e;
}, yp = mp, bp = /[ .][A-Z]\.? *$/i, vp = /(?:\u2026|\.{2,}) *$/, wp = /\p{L}/u, Pp = /^[A-Z]\. $/, kp = function(e, t) {
  if (wp.test(e) === !1 || bp.test(e) === !0 || e.length === 3 && Pp.test(e) || vp.test(e) === !0)
    return !1;
  let r = e.replace(/[.!?\u203D\u2E18\u203C\u2047-\u2049] *$/, "").split(" "), o = r[r.length - 1].toLowerCase();
  return t.hasOwnProperty(o) !== !0;
}, Ap = kp, $p = {
  one: {
    killUnicode: ap,
    tokenize: {
      splitSentences: zf,
      isSentence: Ap,
      splitTerms: Yf,
      splitWhitespace: rp,
      fromString: yp
    }
  }
}, Ip = {
  "&": "and",
  "@": "at",
  "%": "percent",
  plz: "please",
  bein: "being"
}, xp = Ip, Np = [
  "approx",
  "apt",
  "bc",
  "cyn",
  "eg",
  "esp",
  "est",
  "etc",
  "ex",
  "exp",
  "prob",
  "pron",
  "gal",
  "min",
  "pseud",
  "fig",
  "jd",
  "lat",
  "lng",
  "vol",
  "fm",
  "def",
  "misc",
  "plz",
  "ea",
  "ps",
  "sec",
  "pt",
  "pref",
  "pl",
  "pp",
  "qt",
  "fr",
  "sq",
  "nee",
  "ss",
  "tel",
  "temp",
  "vet",
  "ver",
  "fem",
  "masc",
  "eng",
  "adj",
  "vb",
  "rb",
  "inf",
  "situ",
  "vivo",
  "vitro",
  "wr"
], jp = [
  "adj",
  "adm",
  "adv",
  "asst",
  "atty",
  "bldg",
  "brig",
  "capt",
  "cmdr",
  "comdr",
  "cpl",
  "det",
  "dr",
  "esq",
  "gen",
  "gov",
  "hon",
  "jr",
  "llb",
  "lt",
  "maj",
  "messrs",
  "mlle",
  "mme",
  "mr",
  "mrs",
  "ms",
  "mstr",
  "phd",
  "prof",
  "pvt",
  "rep",
  "reps",
  "res",
  "rev",
  "sen",
  "sens",
  "sfc",
  "sgt",
  "sir",
  "sr",
  "supt",
  "surg"
], Ep = ["jan", "feb", "mar", "apr", "jun", "jul", "aug", "sep", "sept", "oct", "nov", "dec"], Tp = [
  "ad",
  "al",
  "arc",
  "ba",
  "bl",
  "ca",
  "cca",
  "col",
  "corp",
  "ft",
  "fy",
  "ie",
  "lit",
  "ma",
  "md",
  "pd",
  "tce"
], Cp = ["dept", "univ", "assn", "bros", "inc", "ltd", "co"], Dp = [
  "rd",
  "st",
  "dist",
  "mt",
  "ave",
  "blvd",
  "cl",
  "cres",
  "hwy",
  "ariz",
  "cal",
  "calif",
  "colo",
  "conn",
  "fla",
  "fl",
  "ga",
  "ida",
  "ia",
  "kan",
  "kans",
  "minn",
  "neb",
  "nebr",
  "okla",
  "penna",
  "penn",
  "pa",
  "dak",
  "tenn",
  "tex",
  "ut",
  "vt",
  "va",
  "wis",
  "wisc",
  "wy",
  "wyo",
  "usafa",
  "alta",
  "ont",
  "que",
  "sask"
], Op = [
  "dl",
  "ml",
  "gal",
  "qt",
  "pt",
  "tbl",
  "tsp",
  "tbsp",
  "km",
  "dm",
  "cm",
  "mm",
  "mi",
  "td",
  "hr",
  "hrs",
  "kg",
  "hg",
  "dg",
  "cg",
  "mg",
  "µg",
  "lb",
  "oz",
  "sq ft",
  "hz",
  "mps",
  "mph",
  "kmph",
  "kb",
  "mb",
  "tb",
  "lx",
  "lm",
  "fl oz",
  "yb"
];
let Fp = [
  [Np],
  [Op, "Unit"],
  [Tp, "Noun"],
  [jp, "Honorific"],
  [Ep, "Month"],
  [Cp, "Organization"],
  [Dp, "Place"]
], gi = {}, Kt = {};
Fp.forEach((e) => {
  e[0].forEach((t) => {
    gi[t] = !0, Kt[t] = "Abbreviation", e[1] !== void 0 && (Kt[t] = [Kt[t], e[1]]);
  });
});
const Vp = [
  "anti",
  "bi",
  "co",
  "contra",
  "de",
  "extra",
  "infra",
  "inter",
  "intra",
  "macro",
  "micro",
  "mis",
  "mono",
  "multi",
  "peri",
  "pre",
  "pro",
  "proto",
  "pseudo",
  "re",
  "sub",
  "supra",
  "trans",
  "tri",
  "un",
  "out",
  "ex"
].reduce((e, t) => (e[t] = !0, e), {}), Gp = {
  like: !0,
  ish: !0,
  less: !0,
  able: !0,
  elect: !0,
  type: !0,
  designate: !0
};
let lo = {
  "!": "¡",
  "?": "¿Ɂ",
  '"': '“”"❝❞',
  "'": "‘‛❛❜’",
  "-": "—–",
  a: "ªÀÁÂÃÄÅàáâãäåĀāĂăĄąǍǎǞǟǠǡǺǻȀȁȂȃȦȧȺΆΑΔΛάαλАаѦѧӐӑӒӓƛæ",
  b: "ßþƀƁƂƃƄƅɃΒβϐϦБВЪЬвъьѢѣҌҍ",
  c: "¢©ÇçĆćĈĉĊċČčƆƇƈȻȼͻͼϲϹϽϾСсєҀҁҪҫ",
  d: "ÐĎďĐđƉƊȡƋƌ",
  e: "ÈÉÊËèéêëĒēĔĕĖėĘęĚěƐȄȅȆȇȨȩɆɇΈΕΞΣέεξϵЀЁЕеѐёҼҽҾҿӖӗ",
  f: "ƑƒϜϝӺӻҒғſ",
  g: "ĜĝĞğĠġĢģƓǤǥǦǧǴǵ",
  h: "ĤĥĦħƕǶȞȟΉΗЂЊЋНнђћҢңҤҥҺһӉӊ",
  I: "ÌÍÎÏ",
  i: "ìíîïĨĩĪīĬĭĮįİıƖƗȈȉȊȋΊΐΪίιϊІЇії",
  j: "ĴĵǰȷɈɉϳЈј",
  k: "ĶķĸƘƙǨǩΚκЌЖКжкќҚқҜҝҞҟҠҡ",
  l: "ĹĺĻļĽľĿŀŁłƚƪǀǏǐȴȽΙӀӏ",
  m: "ΜϺϻМмӍӎ",
  n: "ÑñŃńŅņŇňŉŊŋƝƞǸǹȠȵΝΠήηϞЍИЙЛПийлпѝҊҋӅӆӢӣӤӥπ",
  o: "ÒÓÔÕÖØðòóôõöøŌōŎŏŐőƟƠơǑǒǪǫǬǭǾǿȌȍȎȏȪȫȬȭȮȯȰȱΌΘΟθοσόϕϘϙϬϴОФоѲѳӦӧӨөӪӫ",
  p: "ƤΡρϷϸϼРрҎҏÞ",
  q: "Ɋɋ",
  r: "ŔŕŖŗŘřƦȐȑȒȓɌɍЃГЯгяѓҐґ",
  s: "ŚśŜŝŞşŠšƧƨȘșȿЅѕ",
  t: "ŢţŤťŦŧƫƬƭƮȚțȶȾΓΤτϮТт",
  u: "ÙÚÛÜùúûüŨũŪūŬŭŮůŰűŲųƯưƱƲǓǔǕǖǗǘǙǚǛǜȔȕȖȗɄΰυϋύ",
  v: "νѴѵѶѷ",
  w: "ŴŵƜωώϖϢϣШЩшщѡѿ",
  x: "×ΧχϗϰХхҲҳӼӽӾӿ",
  y: "ÝýÿŶŷŸƳƴȲȳɎɏΎΥΫγψϒϓϔЎУучўѰѱҮүҰұӮӯӰӱӲӳ",
  z: "ŹźŻżŽžƵƶȤȥɀΖ"
}, mi = {};
Object.keys(lo).forEach(function(e) {
  lo[e].split("").forEach(function(t) {
    mi[t] = e;
  });
});
const Bp = mi, zp = {
  "#": !0,
  "@": !0,
  _: !0,
  "°": !0,
  "​": !0,
  "‌": !0,
  "‍": !0,
  "\uFEFF": !0
}, Sp = {
  "%": !0,
  _: !0,
  "°": !0,
  "​": !0,
  "‌": !0,
  "‍": !0,
  "\uFEFF": !0
}, Lp = {
  "<3": !0,
  "</3": !0,
  "<\\3": !0,
  ":^P": !0,
  ":^p": !0,
  ":^O": !0,
  ":^3": !0
}, Mp = {
  one: {
    aliases: xp,
    abbreviations: gi,
    prefixes: Vp,
    suffixes: Gp,
    prePunctuation: zp,
    postPunctuation: Sp,
    lexicon: Kt,
    unicode: Bp,
    emoticons: Lp
  }
}, uo = /\//, Wp = /[a-z]\.[a-z]/i, Hp = /[0-9]/, Jp = function(e, t) {
  let n = e.normal || e.text || e.machine;
  const r = t.model.one.aliases;
  if (r.hasOwnProperty(n) && (e.alias = e.alias || [], e.alias.push(r[n])), uo.test(n) && !Wp.test(n) && !Hp.test(n)) {
    let o = n.split(uo);
    o.length <= 2 && o.forEach((a) => {
      a = a.trim(), a !== "" && (e.alias = e.alias || [], e.alias.push(a));
    });
  }
  return e;
}, _p = Jp, qp = /^\p{Letter}+-\p{Letter}+$/u, Kp = function(e) {
  let t = e.implicit || e.normal || e.text;
  t = t.replace(/['’]s$/, ""), t = t.replace(/s['’]$/, "s"), t = t.replace(/([aeiou][ktrp])in'$/, "$1ing"), qp.test(t) && (t = t.replace(/-/g, "")), t = t.replace(/^[#@]/, ""), t !== e.normal && (e.machine = t);
}, Up = Kp, Rp = function(e) {
  let t = e.docs, n = {};
  for (let r = 0; r < t.length; r += 1)
    for (let o = 0; o < t[r].length; o += 1) {
      let a = t[r][o], i = a.machine || a.normal;
      n[i] = n[i] || 0, n[i] += 1;
    }
  for (let r = 0; r < t.length; r += 1)
    for (let o = 0; o < t[r].length; o += 1) {
      let a = t[r][o], i = a.machine || a.normal;
      a.freq = n[i];
    }
}, Qp = Rp, Yp = function(e) {
  let t = 0, n = 0, r = e.document;
  for (let o = 0; o < r.length; o += 1)
    for (let a = 0; a < r[o].length; a += 1) {
      let i = r[o][a];
      i.offset = {
        index: n,
        start: t + i.pre.length,
        length: i.text.length
      }, t += i.pre.length + i.text.length + i.post.length, n += 1;
    }
}, Xp = Yp, Zp = function(e) {
  let t = e.document;
  for (let n = 0; n < t.length; n += 1)
    for (let r = 0; r < t[n].length; r += 1)
      t[n][r].index = [n, r];
}, eg = Zp, tg = function(e) {
  let t = 0, n = e.docs;
  for (let r = 0; r < n.length; r += 1)
    for (let o = 0; o < n[r].length; o += 1)
      n[r][o].normal !== "" && (t += 1, n[r][o].wordCount = t);
}, ng = tg, bn = function(e, t) {
  let n = e.docs;
  for (let r = 0; r < n.length; r += 1)
    for (let o = 0; o < n[r].length; o += 1)
      t(n[r][o], e.world);
}, rg = {
  alias: (e) => bn(e, _p),
  machine: (e) => bn(e, Up),
  normal: (e) => bn(e, pi),
  freq: Qp,
  offset: Xp,
  index: eg,
  wordCount: ng
}, og = rg, ag = {
  compute: og,
  methods: $p,
  model: Mp,
  hooks: ["alias", "machine", "index", "id"]
}, ig = function(e) {
  const t = e.model.one.typeahead, n = e.docs;
  if (n.length === 0 || Object.keys(t).length === 0)
    return;
  let r = n[n.length - 1] || [], o = r[r.length - 1];
  if (!o.post && t.hasOwnProperty(o.normal)) {
    let a = t[o.normal];
    o.implicit = a, o.machine = a, o.typeahead = !0, e.compute.preTagger && e.last().unTag("*").compute(["lexicon", "preTagger"]);
  }
}, sg = { typeahead: ig }, lg = function() {
  const e = this.docs;
  if (e.length === 0)
    return this;
  let t = e[e.length - 1] || [], n = t[t.length - 1];
  return n.typeahead === !0 && n.machine && (n.text = n.machine, n.normal = n.machine), this;
}, ug = function(e) {
  e.prototype.autoFill = lg;
}, cg = ug, hg = function(e, t, n) {
  let r = {}, o = [], a = n.prefixes || {};
  return e.forEach((i) => {
    i = i.toLowerCase().trim();
    let s = i.length;
    t.max && s > t.max && (s = t.max);
    for (let l = t.min; l < s; l += 1) {
      let u = i.substring(0, l);
      if (!(t.safe && n.model.one.lexicon.hasOwnProperty(u))) {
        if (a.hasOwnProperty(u) === !0) {
          o.push(u);
          continue;
        }
        if (r.hasOwnProperty(u) === !0) {
          o.push(u);
          continue;
        }
        r[u] = i;
      }
    }
  }), r = Object.assign({}, a, r), o.forEach((i) => {
    delete r[i];
  }), r;
}, dg = hg, fg = (e) => Object.prototype.toString.call(e) === "[object Object]", pg = {
  safe: !0,
  min: 3
}, gg = function(e = [], t = {}) {
  let n = this.model();
  t = Object.assign({}, pg, t), fg(e) && (Object.assign(n.one.lexicon, e), e = Object.keys(e));
  let r = dg(e, t, this.world());
  return Object.keys(r).forEach((o) => {
    if (n.one.typeahead.hasOwnProperty(o)) {
      delete n.one.typeahead[o];
      return;
    }
    n.one.typeahead[o] = r[o];
  }), this;
}, mg = {
  typeahead: gg
}, yg = {
  one: {
    typeahead: {}
  }
}, bg = {
  model: yg,
  api: cg,
  lib: mg,
  compute: sg,
  hooks: ["typeahead"]
};
P.extend(xl);
P.extend(Hh);
P.extend(eh);
P.extend(cd);
P.extend(mf);
P.plugin(nu);
P.extend(ag);
P.plugin(Fs);
P.extend(ju);
P.extend(bg);
P.extend(yu);
P.extend(Fd);
const yi = {
  addendum: "addenda",
  corpus: "corpora",
  criterion: "criteria",
  curriculum: "curricula",
  genus: "genera",
  memorandum: "memoranda",
  opus: "opera",
  ovum: "ova",
  phenomenon: "phenomena",
  referendum: "referenda",
  alga: "algae",
  alumna: "alumnae",
  antenna: "antennae",
  formula: "formulae",
  larva: "larvae",
  nebula: "nebulae",
  vertebra: "vertebrae",
  analysis: "analyses",
  axis: "axes",
  diagnosis: "diagnoses",
  parenthesis: "parentheses",
  prognosis: "prognoses",
  synopsis: "synopses",
  thesis: "theses",
  neurosis: "neuroses",
  appendix: "appendices",
  index: "indices",
  matrix: "matrices",
  ox: "oxen",
  sex: "sexes",
  alumnus: "alumni",
  bacillus: "bacilli",
  cactus: "cacti",
  fungus: "fungi",
  hippopotamus: "hippopotami",
  libretto: "libretti",
  modulus: "moduli",
  nucleus: "nuclei",
  octopus: "octopi",
  radius: "radii",
  stimulus: "stimuli",
  syllabus: "syllabi",
  cookie: "cookies",
  calorie: "calories",
  auntie: "aunties",
  movie: "movies",
  pie: "pies",
  rookie: "rookies",
  tie: "ties",
  zombie: "zombies",
  leaf: "leaves",
  loaf: "loaves",
  thief: "thieves",
  foot: "feet",
  goose: "geese",
  tooth: "teeth",
  beau: "beaux",
  chateau: "chateaux",
  tableau: "tableaux",
  bus: "buses",
  gas: "gases",
  circus: "circuses",
  crisis: "crises",
  virus: "viruses",
  database: "databases",
  excuse: "excuses",
  abuse: "abuses",
  avocado: "avocados",
  barracks: "barracks",
  child: "children",
  clothes: "clothes",
  echo: "echoes",
  embargo: "embargoes",
  epoch: "epochs",
  deer: "deer",
  halo: "halos",
  man: "men",
  woman: "women",
  mosquito: "mosquitoes",
  mouse: "mice",
  person: "people",
  quiz: "quizzes",
  rodeo: "rodeos",
  shoe: "shoes",
  sombrero: "sombreros",
  stomach: "stomachs",
  tornado: "tornados",
  tuxedo: "tuxedos"
}, co = {
  Comparative: "true¦better",
  Superlative: "true¦earlier",
  PresentTense: "true¦sounds",
  Condition: "true¦lest,unless",
  PastTense: "true¦be2came,d1had,lied,mea0sa1taken,we0;nt;id;en,gan",
  Gerund: "true¦accord0be0go0result0stain0;ing",
  Expression: "true¦a0Tb0Pc0Nd0Je0Hg0BhWjeez,lTmSnQoKpHshGtFuCvoi0Vw6y0;a4e3i1u0;ck,p;k00p0;ee,pee;ah,p,s;!a,y;ahoo,h2o1t0;af,f;rd up,w;e1o0;a,ops;e,w;gh,h0;! 0h,m;huh,oh;here nOsk,ut tut;eesh,hh,it,oo;ff,h1l0ow,sst;ease,z;ew,ooey;h1i,o0uch,w,y;h,o,ps;! 0h;h1my go0w1;d,sh;ell;ah,o0;!pe;eh,mm;ah,m1ol0;!s;ao,fao;aBeAi8o2u0;h,mph,rra0zzB;h,y;ly1o0;r5y8;! 0;c1moCsmok0;es;ow;!p hip hoor0;ay;ck,e,llo,y;ha1i,lleluj0;ah;!ha;ah,ee4o1r0;eat scott,r;l1od0sh; grief,bye;ly;! whiz;e0h,t cetera,ww,xcuse me;k,p;'oh,a0rat,uh;m0ng;mit,n0;!it;mon,o0;ngratulations,wabunga;a2oo1r0ye;avo,r;!ya;h,m; 1h0las,men,rgh,ye;!a,em,oy;la",
  Negative: "true¦n0;ever,o0;n,t",
  QuestionWord: "true¦how3wh0;at,e1ich,o0y;!m,se;n,re; come,'s",
  Reflexive: "true¦h4it5my5o1the0your2;ir1m1;ne3ur0;sel0;f,ves;er0im0;self",
  Plural: "true¦dick0gre0ones,records;ens",
  "Unit|Noun": "true¦cEfDgChBinchAk9lb,m6newt5oz,p4qt,t1y0;ardEd;able1b0ea1sp;!l,sp;spo1;a,oundAt,x;on9;!b,g,i1l,m,p0;h,s;!les;!b,elvin,g,m;!es;g,z;al,b;eet,oot,t;m,up0;!s",
  Value: "true¦a few",
  Imperative: "true¦come here",
  Demonym: "true¦0:15;1:12;a0Vb0Oc0Dd0Ce08f07g04h02iYjVkTlPmLnIomHpEqatari,rCs7t5u4v3welAz2;am0Gimbabwe0;enezuel0ietnam0I;gAkrai1;aiwTex0hai,rinida0Ju2;ni0Prkmen;a5cotti4e3ingapoOlovak,oma0Spaniard,udRw2y0W;ede,iss;negal0Cr09;sh;mo0uT;o5us0Jw2;and0;a2eru0Fhilippi0Nortugu07uerto r0S;kist3lesti1na2raguay0;ma1;ani;ami00i2orweP;caragu0geri2;an,en;a3ex0Lo2;ngo0Drocc0;cedo1la2;gasy,y07;a4eb9i2;b2thua1;e0Cy0;o,t01;azakh,eny0o2uwaiI;re0;a2orda1;ma0Ap2;anO;celandic,nd4r2sraeli,ta01vo05;a2iB;ni0qi;i0oneU;aiAin2ondur0unO;di;amEe2hanai0reek,uatemal0;or2rm0;gi0;ilipino,ren8;cuadoVgyp4mira3ngli2sto1thiopi0urope0;shm0;ti;ti0;aPominUut3;a9h6o4roat3ub0ze2;ch;!i0;lom2ngol5;bi0;a6i2;le0n2;ese;lifor1m2na3;bo2eroo1;di0;angladeshi,el6o4r3ul2;gaE;azi9it;li2s1;vi0;aru2gi0;si0;fAl7merBngol0r5si0us2;sie,tr2;a2i0;li0;genti2me1;ne;ba1ge2;ri0;ni0;gh0r2;ic0;an",
  Organization: "true¦0:4D;a3Gb2Yc2Ed26e22f1Xg1Ph1Ki1Hj1Fk1Dl18m0Wn0Jo0Gp09qu08r01sTtGuBv8w3xiaomi,y1;amaha,m13ou1w13;gov,tu2Z;a3e1orld trade organizati2S;lls fargo,st1;fie28inghou2I;l1rner br3I;gree37l street journ29m17;an halOeriz2Nisa,o1;dafo2Ol1;kswagMvo;b4kip,n2ps,s1;a tod2Yps;es3Ai1;lev33ted natio30;er,s; mobi2Qaco beQd bNeAgi frida9h3im horto2Ymz,o1witt31;shi3Xy1;ota,s r 00;e 1in lizzy;b3carpen37daily ma31guess w2holli0rolling st1Rs1w2;mashing pumpki2Tuprem0;ho;ea1lack eyed pe3Lyrds;ch bo1tl0;ys;l2n3Ds1xas instrumen1J;co,la m15;efoni0Cus;a7e4ieme2Lnp,o2pice gir5quare04ta1ubaru;rbucks,to2R;ny,undgard1;en;a2x pisto1;ls;g1Nrs;few2Ainsbury2QlesforYmsu22;.e.m.,adiohead,b6e3oyal 1yana30;b1dutch she4;ank;aders dige1Gd 1max,vl1R;bu1c1Zhot chili peppe2Nlobst2C;ll;c,s;ant30izno2I;a5bs,e3fiz28hilip morrCi2r1;emier2Audenti16;nk floyd,zza hut;psi2Btro1uge0A;br2Vchina,n2V;lant2Nn1yp12; 2ason20da2I;ld navy,pec,range juli2xf1;am;us;aAb9e6fl,h5i4o1sa,vid3wa;k2tre dame,vart1;is;ia;ke,ntendo,ss0L;l,s;c,st1Htflix,w1; 1sweek;kids on the block,york09;a,c;nd1Vs2t1;ional aca2Io,we0Q;a,cYd0O;aBcdonaldAe7i5lb,o3tv,y1;spa1;ce;b1Mnsanto,ody blu0t1;ley crue,or0O;crosoft,t1;as,subisM;dica2rcedes benz,talli1;ca;id,re;'s,s;c's milk,tt14z1Z;'ore08a3e1g,ittle caesa1K;novo,x1;is,mark; 1bour party;pres0Bz boy;atv,fc,kk,m1od1J;art;iffy lu0Moy divisi0Gpmorgan1sa;! cha07;bm,hop,n1tv;g,te1;l,rpol;asbro,ewlett pack1Ri3o1sbc,yundai;me dep1n1L;ot;tac1zbollah;hi;eneral 6hq,ithub,l5mb,o2reen d0Lu1;cci,ns n ros0;ldman sachs,o1;dye1g0E;ar;axo smith kli03encoV;electr0Km1;oto0W;a4bi,da,edex,i2leetwood mac,o1rito l0D;rd,xcX;at,nancial1restoY; tim0;cebook,nnie mae;b08sa,u3xxon1; m1m1;ob0H;!rosceptics;aiml0Be6isney,o4u1;nkin donu2po0Xran dur1;an;ts;j,w j1;on0;a,f lepp0Zll,peche mode,r spiegZstiny's chi1;ld;aIbc,hEiCloudflaBnn,o3r1;aigsli5eedence clearwater reviv1ossra06;al;ca c7inba6l4m1o0Bst06;ca2p1;aq;st;dplPg1;ate;se;ola;re;a,sco1tigroup;! systems;ev2i1;ck fil-a,na daily;r1y;on;dbury,pital o1rl's jr;ne;aEbc,eBf9l5mw,ni,o1p,rexiteeU;ei3mbardiIston 1;glo1pizza;be;ng;o2ue c1;roV;ckbuster video,omingda1;le; g1g1;oodriL;cht2e ge0rkshire hathaw1;ay;el;idu,nana republ3s1xt5y5;f,kin robbi1;ns;ic;bYcTdidSerosmith,iRlKmEnheuser-busDol,pple9r6s3utodesk,v2y1;er;is,on;hland1sociated F; o1;il;by4g2m1;co;os; compu2bee1;'s;te1;rs;ch;c,d,erican3t1;!r1;ak; ex1;pre1;ss; 5catel2ta1;ir;!-lu1;ce1;nt;jazeera,qae1;da;g,rbnb;as;/dc,a3er,tivision1;! blizz1;ard;demy of scienc0;es;ba",
  Possessive: "true¦its,my,none,our0;!s",
  "Noun|Verb": "true¦0:94;1:8F;2:7M;3:8Z;4:99;5:8S;6:7Y;7:6Y;8:8T;9:8C;A:9E;a8Ub80c6Ud65e5Vf58g4Zh4Qi4Ij4Fk4Cl40m3On3Ko3Hp2Hques8Wr1Ss0FtZuXvSwEyDzB;ip,oB;ne,om;awn,e5Uie5N;aLeJhGiEoCrB;ap,e8U;nd0rB;k,ry,sh4Yth;ck,nBpe,re,sh;!d,g;e7IiB;p,sB;k,t1;aBed;r,th0;it,lk,rCsBt3ve,x;h,te;!ehou2raA;aEiDoB;iBm9te,w;ce,d;be,ew,s9;cuum,l3X;pBr6;da5gra5Tlo5P;aOeNhrMiLoJrEuCwiBy5E;n,st;nBrn;e,n70;aDeCiBot,u8;bu5ck44gg0m,p;at,k,nd;ck,de,in,nsBp,v6W;f0i7Z;ll,ne,p,r4Gss,t8CuB;ch,r;ck,de,e,le,me,p,re;e5Cow,u8;ar,e,ll,mp0st,xt;g,lBng1rg70s5x;k,ly;a0Lc0Ge0Dh08i06k04l02m01n00ou7CpUqua6UtIuDwB;ea7HiB;ng,pe,t3;bEit,m,ppCrB;ge,pri2v2J;lBo65;e62y;!je7;aKeJiIoFrCuBy1;dy,ff,mb1;a7DeCiBo55ugg1;ke,ng;am,ss,t3;ckCop,p,rB;e,m;ing,pi1;ck,nk,t3;m,p;ck,ge,in,ke,ll,mp,nd,p1rBte,y;!e,t;aFeed,iElDot,rBur;ay,e4NinBu4;g,k1;a6Dit;ll,n,r7Hte;n,rk;ap,ee1Oow;a69e41i1o4O;eep,iBou3;ce,p,t;ateboa6WiB;!p;de,gnBp,ze;!al;aEeDiCoBuff1;ck,p,re,t,w;ft,p,v0;d,i3K;ck,de,pe,re,ve;aCed,nBrv1Et;se,t2F;l,r3t;aEhedu1o5OrB;aCeBo3L;en,w;pe,t3;le,n,r0O;cBil;k,rifi4;aXeFiEoCuB;b,in,le,n,s5E;a8ck,ll,oBpe,u5;f,t;de,ng,p,s1O;aRcQdo,el,fOgNje7lMmKnJo12pHque8sDturn,vBwa68;eBi1Z;al,r2;er6HoDpe7tCuB;lt,me;!a4N;l6Ert;air,eaBly,o4L;l,t;dezvo2Mt;aBedy;ke,rk;ea2i56;a5Vist0r53;act6Ber1No6EuB;nd,se;a2Uo5S;ch,s5T;c15ge,i2ke,lly,nBpYtY;ge,k;a03eZhXiVlRoLrCsy3uB;mp,n3rcha2sh;aIeGiFoBu48;be,ceDdu4fi1grBje7mi2p,te8;amBe69;!me;ed,ss;ce,de,nt;sBy;er5Rs;cti4i2;iFlDoCp,re,sBw0;e,i5Dt;l,p;iBl;ce,sh;nt,s5A;aCce,e2PuB;g,mp,n6;ce,nBy;!t;ck,le,nBpe,t,vot;!e;a2oB;ne,tograph;ak,eDnCrBt;fu4Lm9;!c2O;!l,r;ckGiFnErtDsCtBu2;ch,eA;s,te;!y;!ic;nt,r;!a6;bje7ff0il,oCrButli3A;b9d0ieA;ze;a48eDoB;d,tB;e,i4;ed,gle7t;aIeGiFoCuB;rd0;ck,d3Cld,nBp,uth,ve;it4VkB;ey;lk,n3Vrr4Tss,x;asu3Fn4CrBss;ge,it;il,nDp,rk3HsCtB;ch,t0;h,k;da5n0oeuv3A;aJeHiFoCuB;mp,st;aCbby,ck,g,oBve;k,t;d,n;cBft,m9nFst;en2k;aBc0He3vH;ch,d,k,p,se;bCcBnd,p,t3un3;e,k;el,o2I;eCiBno3X;ck,ll,ss;el,y;aCo1FuB;i4mp;m,zz;mpHnCr3PssB;ue;cr1Hdex,fluEha1k,se25teBvoi4;nt,rB;e8fa4viB;ew;en4;a7le1Y;aGeEiDoCuB;g,nt;l2Wno21ok,p,r2u2;ghlight,ke,re,t;aBd6lp;d,t;ck,m,ndCrBsh,te;b3Im,ne3Xve8;!le;aIloHossGrDuB;arBe3Un;antee,d;aCiBou2Pumb1;nd,p;de,sp;ip;ss,w;in,me,ng,s,te,ze;aWeTiOlLoHrDuB;ck,el,nBss,zz;c2Wd;aCoBy;st,wn;cBgme,me;tu1V;cDg,il,ld,rB;ce,e20mB;!at;us;aCe1Wip,oBy;at,ck,od,w;g,ke,me,re,sh,vo18;eEgDlCnBre,sh,t,x;an4i1S;e,m,t0;ht,u1K;ld;aCeBn4;d,l;r,tu1G;ce,il,ll,rm,v2L;cho,d6ffe7nJsHxDyeB;!baB;ll;cDerci2hib9pBtra7;eriBo0Q;en4meA;el,han6u2;caBtima5;pe;count0d,vy;aXeQiKoHrCuBye;b,el,mp,plica5;aEeDiCoB;ne,p;ft,nk,p,ve;am,ss;ft,g,in;cCd6ubt,wnloB;ad;k,u09;p,sDt3vB;e,iBor4;de;char6h,liCpB;at3lFu5;ke;al,ba5cFfeElDma16pos9siCtaB;il;gn,re;ay;at,ct;li01rB;ea2;b,ma6n4rBte;e,t;a0Bent0Ah03irc1l00oHrDuB;be,e,rBt;e,l,ve;aDeCoBu0Iy;p,ss,wd;d9ep;ck,ft,sh;at,de,in,lRmKnDpy,re,st,uBv0;gh,nBp1;sZt;ceFdu7fli7glomeGsDtBveL;a7rB;a8ol;eAtru7;ct;ntBrn;ra5;bFfoEmDpB;leBou0Fromi2;meA;a0DeAit,u5;rt;at,iB;ne;lap2oB;r,ur;aCiB;ck,p;im,w;aCeBip;at,ck,er;iEllen6nCrB;ge,m,t;ge,nB;el;n,r;er,re;ke,ll,mp,noe,pDrTsCt3u2ve;se;h,t;!tuB;re;aYeUiTlQoMrEuBypa0U;bb1ck1dgCff0mp,rBst,zz;den,n;et;anHeFiDoadCuB;sh;ca8;be,d6;ge;aBed;ch,k;ch,d;aDg,mb,nCoBtt1x,ycott;k,st,t;d,e;rd,st;aCeBitz,oTur;nd;me;as,d,ke,nd,opsy,te;aDef,lt,nBt;d,ef9;it;r,t;ck,il,l04nFrgDsCtt1;le;e,h;aBe;in;!d,g,k;c01dXge,iWlTnRppOrKsGttEucCwaB;rd;tiB;on;aBempt;ck;k,sB;i8ocia5;te;st;chCmB;our;!iB;ve;eCroa3;ch;al;chBg0sw0;or;aCt0;er;rm;d,m,r;dreDvB;an4;ce;ss;cBe,he,t;eDoB;rd,uA;nt;nt,ss",
  Actor: "true¦0:44;1:3A;2:4C;3:45;4:4B;a3Rb38c2Fd23e20f1Sg1Ih1Di19journa3Ml16m0Un0Po0Np04qu02rXsGtCunBvAw6yo5;gi,utub0;e7i6o5r1O;m1rk0;nn0t10;atherm1ld0;eterina19ip;c3Wder1I;aoisea0We6herapi3iktok0r5;anscriRo20;chn5st0;i1RoU;aiKcJeIhowHiFki0oDpCt9u6wee5;p0theart;lt1per6r5;f0ge2Y;intenWv3V;aff0ep6r5;ang0eam0;fa12mo12;ecia32okesp2S;l5me3Kn;di0oi3;ng0s5;sy,t0;girl,m1runn0;cretary,rgea3V;hol2OiQreen0Yulpt2;l2nt;a8e5oof0unningA;c5port0searJver2Q;e5ru0V;ptio1W;bbi,pp0;arter5een;back;aMerform0hLlIoEr6sycho5;logi3;actit1Oe9i7o5;duc0fess2gramm0s5;pe12titu2T;est2Lme miniVnce5;!ss;a6si5;de3D;ch0;dcaQet,li5rnst25;c10tic5;al sci5i1;enti3;a5umb0;nn0y5;er,wright;armaci3otograph0ysi0L;i1Nnel24st2tL;ffic0p5rganiz0;er4tometri3;anny,e7o6u5;n,rse;bo2Jvi6;i5phew;ce;aCeBi8o6u5;m6si0B;m5nk,th0;!my;ni6s5;sus,t0;st0;chan0Lrcha2O;gi7k0nag0t5y2;riar5;ch;ci1stra1W;a6e0Wieutena2Jo5;rd,s0;bor0dy,urea1Twy0;dol,llu29n5;s5vestig4;peZt5;a0EruY;air8ero7isto6o5ygie0J;ste29usekE;ri1;!ine;dress0sty19;arden0eDhostBirl15o8rand5uru;fa6m5pa;a,o5;th0;al5d,lf0;ie,k5te16;eep0;wr5;it0;isha,ntlO;aBella,i7ore6r5;eela1Ii0V;m1st0;g7lmm0Fnanci0r5tt0;e5st la1E; marsh1Kfig5m1;ht0;rm0th0;dit2lectri6mcee,x5;amin0cellency;ci1;aEe9i6riv0u5;de,tche1J;eti6re5;ct2;ci1ti1;a8cor4fenc7put6sign0tecDvel5;op0;ee,y;em1;c05l0;d5nc0rling;!dy;aSeRfo,hLlIo8rit7u5;r4stomer representa5;tive;ic;lCm9n6ordin4rpor0Yu5wboy;nciKri0;gressKs6tro5;ll0;tab0Kul11;edi1m5pos0;a04iss5;ion0;onel,um5;ni3;e5own;an0r5;ic,k;a7e5;erle5f;ad0;ir6nce5plC;ll2;m1wE;lebrity,o;det,pt8r5shi0;et6pe5;nt0;ak0;ain;aJeatbox0iHlogg0oyFrCu5;ddhi3ild0rglAsiness5;m1p6w5;om1;ers5;on;an;ar;i6o5;!k0th0;cklay0de,gadi0;!fri5;end;cyc5sL;li3;nk0r5;b0on6te5;nd0;!eX;cUdNgeYnHpostGrDsBt7u5yatullah;nt5th2;!ie;h6t5;endaUorney;ie3le5;te;sisQtron5;aut,om0;chbis6tis5;an,t;hop;le;aly3im4nou7y5;bo5;dy;nc0;er;st;mi6v5;is2;ni6r5;al;str4;at2;or;coun7t5;or,re5;ss;ta5;nt",
  Uncountable: "true¦0:28;1:2R;2:2F;3:35;4:2W;a2Qb2Hc26d1Xe1Nf1Hg19h12i0Xjewel15k0Vl0Qm0Gn0Eo0Dp04rZsMtBv9w5you guys;a7hisky,i6oo5;d,l;ldlife,ne;rmAt2;ernacul25i5;neg24ol1Ktae;eEhCime off,oBr6un5yranny;a,gst15;aff2Jea1Go6ue nor5;th;o07u5;ble5se1Ot;!shoot1;night,othpas1P;er5und2;e,mod2O;a,nnis;aFcEeDhBilk,kiAo9p8t6u5weepstak0;g1Rnshi2Dshi;ati08e5;am,el;ace2Geci0;ap,cc2meth1;n,ttl0;eep,ingl0o5;pp1r18;lf,na1Cri0;ene0Disso18;d0Sfe4l5nd,t0F;m1St;a8e6ic5;e,ke12;c5ins,laxa0Zsearch;ogni0Yrea0Y;bi0in;aBeAhys9last1So7re5;amble,mis0s5ten1W;en1Vsu0H;l5rk;i24yH; 14i3;a20tr0A;nt5ti0J;i0s;bstetri3vercrowd1xyg04;a5ews;il polXtional securi4;aCeAo7u5;m5s1F;ps;n5o1I;ey,o5;gamy;a5cha0Drchandi1Ftallurgy;sl0t;chine5thema1O; learn1ry;aught2e8i7ogi6u5;ck,g11;c,s1K;ce,ghtn1nguis1JteraTv2;ath2isuTss;ara0CindergartMn5;icke08owled0X;ce,gnor8mp7n5;forma02ter5;net,sta08;atiUort5rov;an19;a8eListo7o5ung2;ckey,mework,ne5rserad9spitali4use arrest;s4y;ry;ir,lib03ppiJs5;h5te;ish;ene9l7o6r5um,ymnas13;aGe03;lf,re;ut5yce0J;en; 5ti3;edit1po5;ol;aQicJlour,o7urni5;tu5;re;od,rgive5uri2wl;ne5;ss;cono0MducaDlectrBn9quipAthi3very8x5;ist6per5;ti0C;en0K;body,o09th1;joy5tertain5;ment;ici4o5;ni3;tiU;eBi8o6raugh5ynas4;ts;pe,wnstai5;rs;abet0s5;hon01repu5;te;b5miX;ut;aEelciDhBivi3l9o5urrency;al,ld w7n5ral,ttJuscoC;fusiIt 5;ed;ar;assi3oth0;es;aos,e5;eNw1;us;d,rP;aAi8lood,read7u5;nt1tt2;er;!th;lliarKs5;on;g5ss;ga5;ge;cLdviKeroHirGmCn7ppeal court,rithmet6spi5thleM;rin;ic;i8y5;o6th1;ing;ne;se;en7n5;es4;ty;ds;craft;bi3d5nau9;yna5;mi3;ce;id,ous5;ti3;cs",
  "Person|Noun": "true¦a07b01cYdRePfOgMhJjFkiElDmBolive,p7r4s3trini00v1wa0;ng,rd;an,enus,iol0;a,et;ky,on5umm02;ay,e1o0uby;bin,d,se;ed,x;a2e0ol;aHn0;ny;ge,tM;a0eloR;x,ya;a9eo,iE;ng,tL;a2e1o0;lDy;an,w3;de,smi4y;a0iKol8;ll,z0;el;ail,e0;ne;aith,ern,lo;a0dDmir,ula,ve;rl;a4e3i1ol0;ly;ck,x0;ie;an,ja;i0wn;sy;h0liff,rystal;ari0in,ristian;ty;ak4e3i2r0;an0ook;dy;ll;nedict,rg;er;l0rt;fredo,ma",
  Pronoun: "true¦'em,elle,h3i2me,she4th0us,we,you;e0ou;m,y;!l,t;e0im;!'s",
  Singular: "true¦0:4O;1:4M;2:3Y;3:47;4:42;5:4Q;6:4C;a46b3Qc2Wd2Ie2Cf25g1Zh1Oin1Lj1Kk1Jl1Dm17n15o10p0Iqu0Hr07sUtIuFvAw7x 4B;a7ha2Y;f2i3Vt08y7;! arou2M;arAe8o7;cabu3Ol4F;gKr7;di43t1F;iety,n3S;p2Dr8s 7;do3As4H;bani1in0; rex,aHeGhingFiDoCr9u8v7;! show;m23n4rntIto0Y;agedy,ib7o3K;e,u7;n0ta3D;p4rq2V;c,er,m7;etC;!y;am,mp2Q;ct4le5x return;aIcHeGhor3Wi1kEoDpin off,tBu9y7;ll7n1Rst3Z;ab29;b7nri13per bowl,rro1I;st2Vtot0;at2Mipe1Wo14rate3Oudent7;! lo09;ft ser3Smeo12;elet6i7;ll,rm33;ab0Scurity gu22min2N;e5ho2C;la2Undwi0Fpi6;av6eBhetor4i8o7;de5om,w;t8v7;erb0M;e,u0;bAc9f7publ4r0Mspi1;er7orm2;e5r0;it0ord label;a1u3G;estion mark,ot1V;aMeJhotocoSiGlEoCr8u7yram11;ddi2SpCrpo0Hs2U;e9o7;bl39s7;pe2Uta1;diction,mi0Droga35ss relea0D;p7rt0;py;a7ebisci1;q1Ste;cn4e8g7;!gy;!r;anut,d8r7t0;cen2Usp2V;al,est0;nop3r28t7;e,hog6;bj2Rc8pia1rde0thers,ve7wn2;n,rview;cu8e7;an;pi2;arra2Nit1Oot7umb2;a1Uhi25;aAe9i8o7ur0é07;nopo3pOrni23sq1Bti2L;li0On03tt6;d4nu,t0;mm0nd0Tte7yf3;ri0;aAegBi9u7;ddi1n7;ch;ght bulb,p03ving room;bor0Ty7; up;eyno1itt6;el3ourn0;c8dices,itia27ni1Qse1Vtel0Dvert7;eb17;en25i2E;aGeaDighBo7uman right;me8sp15tb7;ed;! r7;un; scho0Ori7;se;d7v6; start,pho7;ne;ndful,sh brown,v6ze;aAelat09laci2r8u7;l3y;an7enadi2id;a0Yd slam;df3r7;l4n12;aCet11iref3lBol3r8un7;er0;ee market,i8on7;ti2;ga1;ow2u1;br4mi3n0Q;conoBffi1Bgg,lecto0Hmbas11nApidem4s1Lth4ven9x8yel7;id;ampRempl0Dte5;i0Wt;er17;my;eHiCo9r7ump truck;agonf3i7;er,ve thru;c8g12i3or,ssi2wn7;side;to06umenA;aAgni9nn2s8vide7;nd;conte5incen12tri0Q;ta09;le0O;ath,c8f7ni0terre5;ault Zerr0;al,im0;aSeQhJiIlHoBr7;edit c9uc7;ib7;le;ard;efficBke,lAmmuniqIns8pi2rr0t0Pus7yo1;in;erv7uF;atoW;ic,lM;ie5;er0Gie5;ty,vil wJ;aBeqAick6oco9r7;istmas car7ysanthemum;ol;la1;ue;ndeli2racter7;ist4;iliVllBr7;e0tifica1;hi2naDpCrAt7ucus;erpi7hedr0;ll7;ar;!bohyd7ri2;ra1;it0;l,ry;aIeHlemGoEreakCu7;nAr7tterf3;g7i0;la7;ry;ny;fa7thro9;st;dy,ro7wl;ugh;ish;an,l3;nki9r7;!ri2;er;ng;cPdJlFnCppeti1rBs9tt4utop7;sy;ic;ce5pe7;ct;ray;ec8oma3ti8;ly;do1;i6l7;er7y;gy;en; hominBj8van7;tage;ec7;ti7;ve;em;cAe8qui7;tt0;ta1;te;i8ru0;al;de5;nt",
  Preposition: "true¦-,aPbMcLdKexcept,fIinGmid,notwithstandiWoDpXqua,sCt7u4v2w0;/o,hereSith0;! whHin,oW;ersus,i0;a,s-a-vis;n1p0;!on;like,til;h1ill,oward0;!s;an,r0;ough0u;!oM;ans,ince,o that,uch G;f1n0ut;!to;!f;! 0to;effect,part;or,r0;om;espite,own,u3;hez,irca;ar1e0oBy;sides,tween;ri7;bo8cross,ft7lo6m4propos,round,s1t0;!op;! 0;a whole,long 0;as;id0ong0;!st;ng;er;ut",
  SportsTeam: "true¦0:1A;1:1H;2:1G;a1Eb16c0Td0Kfc dallas,g0Ihouston 0Hindiana0Gjacksonville jagua0k0El0Bm01newToQpJqueens parkIreal salt lake,sAt5utah jazz,vancouver whitecaps,w3yW;ashington 3est ham0Rh10;natio1Oredski2wizar0W;ampa bay 6e5o3;ronto 3ttenham hotspur;blue ja0Mrapto0;nnessee tita2xasC;buccanee0ra0K;a7eattle 5heffield0Kporting kansas0Wt3;. louis 3oke0V;c1Frams;marine0s3;eah15ounG;cramento Rn 3;antonio spu0diego 3francisco gJjose earthquak1;char08paA; ran07;a8h5ittsburgh 4ortland t3;imbe0rail blaze0;pirat1steele0;il3oenix su2;adelphia 3li1;eagl1philNunE;dr1;akland 3klahoma city thunder,rlando magic;athle0Mrai3;de0; 3castle01;england 7orleans 6york 3;city fc,g4je0FknXme0Fred bul0Yy3;anke1;ian0D;pelica2sain0C;patrio0Brevolut3;ion;anchester Be9i3ontreal impact;ami 7lwaukee b6nnesota 3;t4u0Fvi3;kings;imberwolv1wi2;rewe0uc0K;dolphi2heat,marli2;mphis grizz3ts;li1;cXu08;a4eicesterVos angeles 3;clippe0dodDla9; galaxy,ke0;ansas city 3nE;chiefs,roya0E; pace0polis colU;astr06dynamo,rockeTtexa2;olden state warrio0reen bay pac3;ke0;.c.Aallas 7e3i05od5;nver 5troit 3;lio2pisto2ti3;ge0;broncZnuggeM;cowbo4maver3;ic00;ys; uQ;arCelKh8incinnati 6leveland 5ol3;orado r3umbus crew sc;api5ocki1;brow2cavalie0india2;bengaWre3;ds;arlotte horAicago 3;b4cubs,fire,wh3;iteB;ea0ulR;diff3olina panthe0; c3;ity;altimore 9lackburn rove0oston 5rooklyn 3uffalo bilN;ne3;ts;cel4red3; sox;tics;rs;oriol1rave2;rizona Ast8tlanta 3;brav1falco2h4u3;nited;aw9;ns;es;on villa,r3;os;c5di3;amondbac3;ks;ardi3;na3;ls",
  Unit: "true¦a09b06cZdYexXfTgRhePin00joule0DkMlJmDnan0AoCp9quart0Dsq ft,t7volts,w6y2ze3°1µ0;g,s;c,f,n;dXear1o0;ttT; 0s 0;old;att06b;erPon0;!ne04;ascals,e1i0;cZnt02;rcent,tL;hms,uI;/s,e4i0m²,²,³;/h,cro2l0;e0liM;!²;grNsT;gEtL;it1u0;menSx;erRreR;b5elvins,ilo1m0notQ;/h,ph,²;!byIgrGmEs;ct0rtzN;aLogrE;allonLb0ig5rD;ps;a2emtGl0t6; oz,uid ou0;nceH;hrenheit,radG;aby9;eci3m1;aratDe1m0oulombD;²,³;lsius,nti0;gr2lit1m0;et0;er8;am7;b1y0;te5;l,ps;c2tt0;os0;econd1;re0;!s",
  "Adj|Noun": "true¦0:13;1:1A;a13b0Xc0Mde0Le0Gf0Ag09h08i06ju05l03mXnVoTpOrKsDt9u6v3w2;atershed,elcome;a2ision0P;gabo5nilla,ria2;b0Mnt;ndergr2pstairs;adua0Tou2;nd;a4e2oken,ri0;en,r2;min0rori0S;boo,n;e6ilv08o4quat,ta3u2well;bordina0Mper6;b0Cndard;ciali0Nl2vereign;e,ve1;cret,n2ri0;ior;a4e2outiSubbiL;ar,bCla0Mnt0p2side1;resenta0Lublican;ci0Gsh;a5eriodic0otenti0r2;emi3incip0o2;!fession0;er,um;rall5st,tie1;ff2pposi07v0;ensi0Ei03;aggTov2;el;aUe5in4o2;biTderYr2;al,t0;iature,or;di2tr0C;an,um;attIiber0u2;sh;stice,veniM;de0mpressioQn2;cumbe1dividu0no04sta1;alf,omelBumdrum;enious,old,raZ;a5e3i2luid;ne;llow,m2;aEiJ;ir,t,vo2;riLuriL;l4pXx2;c2ecuQpeS;ess;d2iH;er;mographSrivaM;hiFlassRo3rude,unn2;ing;m5n2operaJ;creBstitue1tempor3vertab2;le;ary;m3p2;anion,lex;er3u2;ni8;ci0;e6lank,o5r2;i3u2;te;ef;ttom,urgeois;st;cademAd7l3nim0rab;al;e4terna2;ti2;ve;rt;oles2ult;ce1;nt;ic",
  "Noun|Gerund": "true¦0:26;1:25;2:1W;3:1I;4:1Y;5:1O;a25b1Oc1Cd17en15f0Zg0Xh0Ui0Sjog20k0Ql0Mm0Jn0Ho0Dp06ques09rXsHtCuAvolunt16w6yEzo2;a8ed5i3or7r6;ap1Oest1Ci1;ki0r1O;i1r2s1Utc1U;nder6pri23;st1Mta4;al4e9hin4i8ra6y1J;c4di0i2v6;el15;mi0p1G;a1Xs1;ai12cIeHhFin1OkatDlZmo4nowCpeBt9u7w6;ea3im1T;f02r6;fi0vi0J;a1Kretc1Iu6;d1AfJ;l0Wn5;b7i0;eb6i0;oar5;ip14o6;rte2u1;a1r0At1;h7o3re6;a1Ge2;edu0Noo0N;aDe9i5o7u6;li0n2;o6wi0;fi0;a8c7hear1Cnde3por1struct6;r1Au3;or5yc0G;di0so2;p0Qti0;aBeacekAla9o7r6ublis0X;a0Peten5in1oces16;iso2si6;tio2;n2yi0;ee0K;cka0Tin1rt0K;f8pe7rgani6vula1;si0zi0;ni0ra1;fe3;e6ur0W;gotia1twor4;a7e6i2onito3;e1ssa0L;nufactu3rke1;a8ea7i6od0Jyi0;cen0Qf1s1;r2si0;n5ug0E;i6n0J;c4lS;ci0magi2n6ro2;nova1terac1;andPea1i7o6un1;l5wO;ki0ri0;athe3rie6ui5;vi0;ar0CenHi8l7or6ros1un5;ecas1mat1;ir1oo5;l7n6;anDdi0;i0li0;di0gin6;ee3;a8eba1irec1oub1r6umO;awi0es05i6;n4vi0;n6ti0;ci0;aFelebra1hDlBo8r6ur7;aw6os00;li0;a7di0lo3mplai2n6o4pi0ve3;duc1sul1;cMti0;apDea3imIo6ubI;ni0tK;a6ee3;n1t1;m9s1te3;ri0;aJeGitElDoBr9u6;il5ll7r6;pi0;yi0;an5;di0;a1m6o4;bi0;esHoa1;c6i0;hi0;gin2lon6t1;gi0;ni0;bys7c4ki0;ki0;it1;c9dverti8gi0rg7ssu6;mi0;ui0;si0;coun1ti0;ti0;ng",
  PhrasalVerb: "true¦0:93;1:97;2:8I;3:8W;4:8B;5:84;6:86;7:99;8:91;9:8H;A:8Y;B:8S;C:8V;D:8T;E:71;F:98;G:8Z;H:82;I:7I;J:7A;K:4H;a9Hb7Wc6Td6Ne6Lf5Jg52h4Diron0j49k42l3Gm33n30o2Yp2Equiet Hr1Zs0Lt00uYvacuu6SwOyammerBzL;ero Dip MonL;e0k0;by,ov9up;aReNhMiLor0Nrit1B;mp0n3Hpe0r5s5;ackAeel Di0U;aMiLn35;gh 3Yrd0;n Dr L;do1in,oJ;it 7Bk5lk Mrm 6Bsh Lt85v61;aw3do1o7up;aw3in,oC;rgeBsL;e 2herE;a01eZhWiSoRrNuLypQ;ckErn L;do1in,oJup;aMiLot0y 32;ckl81p F;ck HdL;e 60;n7Yp 3Gs5L;ck NdMe Lghten 6me0p o0Tre0;aw3ba4do1in,up;e Iy 2;by,oG;ink Mrow L;aw3ba4in,up;ba4ov9up;aLe 79ll64;m 2r 5O;ckBke Mlk L;ov9shit,u49;aLba4do1in,leave,o67up;ba4ft9pa6Bw3;a0Xc0Ve0Oh0Ki0Hl0Bm0An09o08p03quar5ItRuPwL;earNiL;ngMtch L;aw3ba4o8M; by;cLi6Dm 2ss0;k 66;aTeSiRoPrMuL;cKd36;aigh2Eet76iL;ke 7Tng L;al6Zup;p Lrm2G;by,in,oG;nKr 2tc4O;p F;cKmp0nd MrLveAy 2P;e Ht 2M;ba4do1up;arKeOiNlMrLurB;ead0ingBuc5;a49it 6I;c5ll o3Dn 2;ak Fe73ll0;aKber 2rt0und like;ap 5Wow Duggl5;ash 6Ooke0;eep OiLow 6;cMp L;o6Eup;e 69;in,oL;ff,v9;de1Agn 4OnLt 6Hz5;gLkE; al6Ble0;aNoLu5X;ot Lut0w 7N;aw3ba4f48oC;cKdeEk6FveA;e Qll1Ond Prv5tL; Ltl5K;do1foMin,o7upL;!on;ot,r60;aw3ba4do1in,o4Wup;oCto;al67out0rL;ap66ew 6K;ilAv5;aYeViToPuL;b 5Zle0n Lstl5;aMba4do1inLo2Jth4Ou5Q;!to;c2Xr8w3;ll Not MuL;g3IndA;a2Wf3Po7;ar8in,o7up;ng 69p oLs5;ff,p19;aLelAinEnt0;c6Id L;o3Oup;cKt0;a00eZiXlUoRrPsyc35uL;ll Nn5Lt L;aLba4do1in,oJto48up;pa4Ew3;a3Kdo1in,o22to46up;attleBess LiOop 2;ah2Fon;iMp Lr50u1Hwer 6O;do1in,o6Oup;nt0;aMuL;gEmp 6;ce u21y 6E;ck Lg0le 4Bn 6p5C;oJup;el 5OncilE;c54ir 3An0ss NtMy L;ba4oG; Hc2R;aw3ba4in,oJ;pLw4Z;e4Yt D;aMerd0oL;dAt54;il Hrrow H;aUeRiQoMuL;ddl5ll I;cKnkeyNp 6uthAve L;aLdo1in,o4Mup;l4Ow3; wi4L;ss0x 2;asur5e3TlMss L;a21up;t 6;ke Mn 6rLs2Ax0;k 6ryA;do,fun,oCsure,up;a03eWiRoMuL;ck0st I;aOc4Gg NoLse0;k Lse4E;aft9ba4do1forw38in57o10u47;in,oJ;d 6;e OghtNnMsLve 01;ten F;e 2k 2; 2e47;ar8do1in;aNt MvelL; oC;do1go,in,o7up;nEve L;in,oL;pLut;en;c5p 2sh MtchBughAy L;do1o5A;in4Qo7;eNick Mnock L;do1oCup;oCup;eMy L;in,up;l Ip L;aw3ba4do1f05in,oJto,up;aNoMuL;ic5mpE;ke3Tt H;c44zz 2;a02eXiUoQuL;nMrrLsh 6;y 2;keMt L;ar8do1;r H;lLneErse3L;d Le 2;ba4dLfast,o25up;ear,o1;de Mt L;ba4on,up;aw3o7;aLlp0;d Nl Ir Lt 2;fLof;rom;f11in,o1WuX;cKm 2nMsh0ve Lz2Q;at,it,to;d Mg LkerQ;do1in,o2Uup;do1in,oL;ut,v9;k 2;aZeUive Sloss IoNrMunL; f0S;ab hold,in44ow 2V; Lof 2J;aNb1Nit,oMr8th1JuL;nd9;ff,n,v9;bo7ft9hQw3;aw3bLdo1in,oJrise,up,w3;a4ir2I;ar 6ek0t L;aLb1Gdo1in,o1Dr8up;cMhLl2Hr8t,w3;ead;ross;d aLng 2;bo7;a0Fe08iZlVoRrNuL;ck Le2P;ar8up;eMighten LownBy 2;aw3oG;eLshe29; 2z5;g 2lNol Lrk I;aLwi22;bo7r8;d 6low 2;aMeLip0;sh0;g 6ke0mLrLtten H;e F;gSlQnOrMsLzzle0;h F;e Lm 2;aw3ba4up;d0isL;h 2;e Ll 1V;aw3fQin,o7;ht ba4ure0;eQnMsL;s 2;cNd L;fLoG;or;e D;d06l 2;cPll Lrm0t1I;aNbMdo1in,oLsho0Gth0Avictim;ff,ut,v9;a4ehi2P;pa0D;e L;do1oGup;at Ldge0nd 13y5;in,o7up;aPi1IoOrL;aMess 6op L;aw3b04in,oC;gBwB; Iubl1C;m 2;a0Bh06l03oPrMut L;aw3ba4do1oCup;ackBeep MoLy0;ss Dwd0;by,do1in,o0Vup;me OoMuntL; o2B;k 6l L;do1oG;aSbRforPin,oOtLu0P;hMoLrue;geth9;rough;ff,n,ut,v9;th,wL;ard;a4y;paLr8w3;rt;eaMose L;in,oCup;n 6r F;aOeMiL;ll0pE;ck Der Lw F;on,up;t 2;lSncel0rPsNtch MveE; in;o1Oup;h Dt L;doubt,oG;ry MvL;e 09;aw3oJ;l Lm H;aMba4do1oJup;ff,n,ut;r8w3;a0We0NiteAl0Go05rRuL;bblOckl06il0Elk 6ndl06rMsLtNy FzzA;t 01;n 0IsL;t D;e I;ov9;anXeaViMush L;oGup;ghRng L;aOba4do1forNin,oMuL;nd9p;n,ut;th;bo7lLr8w3;ong;teL;n 2;k L;do1in,o7up;ch0;arUg 6iSn5oQrOssNttlMunce Lx D;aw3ba4;e 6; ar8;e H;do1;k Dt 2;e 2;l 6;do1up;d 2;aQeed0oLurt0;cNw L;aw3ba4do1o7up;ck;k L;in,oC;ck0nk0stA; oRaOef 2lt0nd L;do1ov9up;er;up;r Mt L;do1in,oCup;do1o7;ff,nL;to;ck Qil0nNrgMsL;h D;ainBe D;g DkB; on;in,o7;aw3do1in,oCup;ff,ut;ay;ct FdRir0sk NuctionA; oG;ff;ar8o7;ouL;nd; o7;d L;do1oLup;ff,n;wn;o7up;ut",
  ProperNoun: "true¦barbie,c4diego,e3f2iron maiden,kirby,m0nis,riel,stevens;ercedes,i0;ckey,ssy;inn,lorence,ranco;lmo,uro;atalina,hristi",
  Ordinal: "true¦eBf7nin5s3t0zeroE;enDhir1we0;lfCn7;d,t3;e0ixt8;cond,vent7;et0th;e6ie7;i2o0;r0urt3;tie4;ft1rst;ight0lev1;e0h,ie1;en0;th",
  Cardinal: "true¦bEeBf5mEnine7one,s4t0zero;en,h2rDw0;e0o;lve,n5;irt6ousands,ree;even2ix2;i3o0;r1ur0;!t2;ty;ft0ve;e2y;ight0lev1;!e0y;en;illions",
  Multiple: "true¦b3hundred,m3qu2se1t0;housand,r2;pt1xt1;adr0int0;illion",
  City: "true¦0:76;1:64;2:6J;3:6M;4:5V;a6Bb56c4Ld4Be47f3Zg3Kh3Ci33j2Yk2Hl25m1Nn1Do1Ap0Xq0Vr0Os05tRuQvLwDxiBy9z5;a7h5i4Puri4R;a5e5ongsh0;ng3K;greb,nzib5J;ang2e5okoha3Vunfu;katerin3Krev0;a5n0R;m5Kn;arsBeAi6roclBu5;h0xi,zh5S;c7n5;d5nipeg,terth4;hoek,s1N;hi62kl3D;l66xford;aw;a8e6i5ladivost5Polgogr6N;en3lni6U;ni24r5;n2o3saill4Q;lenc4Zncouv3Vr3ughn;lan bat1Erumqi,trecht;aFbilisi,eEheDiBo9r7u5;l23n66r5;in,ku;i5ondh65;es54poli;kyo,m32ron1Rulo5;n,uS;an5jua3l2Wmisoa6Dra3;j4Wshui; hag64ssaloni2K;gucigal28hr0l av1W;briz,i6llinn,mpe59ng5rtu,shk2U;i3Hsh0;an,chu1n0p2Hyu0;aEeDh8kopje,owe1It7u5;ra5zh50;ba0It;aten is58ockholm,rasbou69uttga2Y;an8e6i5;jiazhua1llo1m5Zy0;f53n5;ya1zh4K;gh3Nt4T;att48o1Yv47;cramen18int ClBn5o paulo,ppo3Urajevo; 7aa,t5;a 5o domin3H;a3fe,m1O;antonBdie3Ffrancisco,j5ped3Qsalvad0L;o5u0;se;em,z28;lou5Bpeters27;aAe9i7o5;me,sar5t5C;io;ga,o5yadh;! de janei3H;cife,ims,nn3Lykjavik;b4Uip4lei2Knc2Rwalpindi;ingdao,u5;ez2i0R;aFeEhDiCo9r7u6yong5;ya1;eb5Aya1;a5etor3O;g53to;rt5zn0; 5la4Eo;au prin0Nelizabe26sa04;ls3Rrae5Btts28;iladelph3Inom pe1Coenix;r23tah tik3G;dua,lerZnaji,r4Qt5;na,r34;ak46des0Lm1Or6s5ttawa;a3Xlo;an,d07;a7ew5ing2Hovosibir1Lyc; 5cast38;del26orlea46taip16;g8iro4Xn5pl2Yshv35v0;ch6ji1t5;es,o1;a1o1;a6o5p4;ya;no,sa0Y;aFeCi9o6u5;mb2Cni28sc40;gadishu,nt6s5;c15ul;evideo,pelli1Tre31;ami,l6n16s5;kolc,sissauga;an,waukee;cca,d5lbour2Omph43ndo1Essi3;an,ell5i3;in,ín;cau,drAkass2Tl9n8r5shh4A;aca6ib5rakesh,se2M;or;i1Ty;a4EchFdal10i47;mo;id;aDeAi8o6u5vSy2;anMckn0Pdhia3;n5s angel27;d2g bea1O;brev2Ce3Mma5nz,sb2verpo29;!ss28; ma3Ai5;c5pzig;est17; p6g5ho2Xn0Dusan25;os;az,la34;aHharFiClaipeBo9rak0Eu7y5;iv,o5;to;ala lump4n5;mi1sh0;hi0Ilka2Ypavog4si5wlo2;ce;da;ev,n5rkuk;gst2sha5;sa;k5toum;iv;bIdu3llakuric0Rmpa3Fn6ohsiu1ra5un1Jwaguc0R;c0Qj;d5o,p4;ah1Uy;a7e6i5ohannesW;l1Wn0;dd36rusalem;ip4k5;ar2I;bad0mph1PnBrkutVs8taYz5̇zm7;m6tapala5;pa;ir;fah0l6tanb5;ul;am2Yi2H;che2d5;ianap2Mo20;aAe7o5yder2V; chi mi5ms,nolulu;nh;f6lsin5rakli2;ki;ei;ifa,lifax,mCn5rb1Dva3;g8nov01oi;aFdanEenDhCiPlasgBo9raz,u5;a5jr23;dal6ng5yaquil;zh1J;aja2Nupe;ld coa1Bthen5;bu2R;ow;ent;e0Uoa;sk;lw7n5za;dhi5gt1E;nag0U;ay;aisal28es,o8r6ukuya5;ma;ankfu5esno;rt;rt5sh0; wor6ale5;za;th;d5indhov0Pl paso;in5mont2;bur5;gh;aBe8ha0Xisp4o7resd0Lu5;b5esseldorf,nkirk,rb0shanbe;ai,l0I;ha,nggu0rtmu13;hradSl6nv5troit;er;hi;donghIe6k09l5masc1Yr es sala1KugavpiY;i0lU;gu,je2;aJebu,hAleve0Vo5raio02uriti1P;lo7n6penhag0Ar5;do1Nk;akKst0V;gUm5;bo;aBen8i6ongqi1ristchur5;ch;ang m7ca5ttago1;go;g6n5;ai;du,zho1;ng5ttogr14;ch8sha,zh07;gliari,i9lga8mayenJn6pe town,r5tanO;acCdiff;ber19c5;un;ry;ro;aWeNhKirmingh0WoJr9u5;chareTdapeTenos air7r5s0tu0;g5sa;as;es;a9is6usse5;ls;ba6t5;ol;ne;sil8tisla7zzav5;il5;le;va;ia;goZst2;op6ubaneshw5;ar;al;iCl9ng8r5;g6l5n;in;en;aluru,hazi;fa6grade,o horizon5;te;st;ji1rut;ghd0AkFn9ot8r7s6yan n4;ur;el,r06;celo3i,ranquil08;ou;du1g6ja lu5;ka;alo6k5;ok;re;ng;ers5u;field;a04b01cc00ddis abaZgartaYhmedWizawl,lSmPnHqaZrEsBt7uck5;la5;nd;he7l5;an5;ta;ns;h5unci2;dod,gab5;at;li5;ngt2;on;a8c5kaNtwerp;hora6o3;na;ge;h7p5;ol5;is;eim;aravati,m0s5;terd5;am; 6buquerq5eppo,giers,maty;ue;basrah al qadim5mawsil al jadid5;ah;ab5;ad;la;ba;ra;idj0u dha5;bi;an;lbo6rh5;us;rg",
  Region: "true¦0:2N;1:2T;2:2K;a2Qb2Dc1Zd1Ues1Tf1Rg1Lh1Hi1Cj18k13l10m0Pn07o05pZqWrTsKtFuCv9w5y3zacatec2U;akut0o0Du3;cat2k07;a4est 3isconsin,yomi1M;bengal,vi6;rwick2Bshington3;! dc;er4i3;rgin0;acruz,mont;dmurt0t3;ah,tar3; 2La0X;a5e4laxca1Rripu1Xu3;scaDva;langa1nnessee,x2F;bas0Vm3smNtar25;aulip2Dil nadu;a8i6o4taf11u3ylh1F;ffYrr04s1A;me1Cno1Quth 3;cVdU;ber0c3kkim,naloa;hu2ily;n4skatchew2xo3;ny; luis potosi,ta catari1;a3hode9;j3ngp07;asth2shahi;ingh25u3;e3intana roo;bec,en5reta0R;ara7e5rince edward3unjab; i3;sl0B;i,nnsylv3rnambu0B;an0;!na;axa0Ydisha,h3klaho20ntar3reg6ss0Bx0G;io;aJeDo5u3;evo le3nav0W;on;r3tt17va scot0;f8mandy,th3; 3ampton16;c5d4yo3;rk14;ako1N;aroli1;olk;bras1Mva0Cw3; 4foundland3;! and labrador;brunswick,hamp0Xjers4mexiSyork3;! state;ey;galOyarit;a9eghala0Mi5o3;nta1r3;dov0elos;ch5dlanCn4ss3zor11;issippi,ouri;as geraOneso18;ig2oac2;dhy12harasht0Gine,ni4r3ssachusetts;anhao,i el,ylF;p3toba;ur;anca0Ie3incoln0IouisH;e3iR;ds;a5e4h3omi;aka06ul1;ntucky,ra01;bardino,lmyk0ns0Qr3;achay,el0nata0X;alis5har3iangxi;kh3;and;co;daho,llino6n3owa;d4gush3;et0;ia1;is;a5ert4i3un2;dalFm0D;fordZ;mpYrya1waii;ansu,eorg0lou7oa,u3;an4erre3izhou,jarat;ro;ajuato,gdo3;ng;cesterS;lori3uji2;da;sex;ageTe6o4uran3;go;rs3;et;lawaLrbyK;aEeaDh8o3rimea ,umbr0;ahui6l5nnectic4rsi3ventry;ca;ut;i02orado;la;e4hattisgarh,i3uvash0;apQhuahua;chn4rke3;ss0;ya;ra;lFm3;bridge6peche;a8ihar,r7u3;ck3ryat0;ingham3;shi3;re;emen,itish columb0;h0ja cal7lk6s3v6;hkorto3que;st2;an;ar0;iforn0;ia;dygea,guascalientes,lAndhr8r4ss3;am;izo1kans4un3;achal 6;as;na;a 3;pradesh;a5ber4t3;ai;ta;ba4s3;ka;ma",
  Country: "true¦0:39;1:2M;a2Xb2Ec22d1Ye1Sf1Mg1Ch1Ai14j12k0Zl0Um0Gn05om3DpZqat1KrXsKtCu6v4wal3yemTz2;a25imbabwe;es,lis and futu2Y;a2enezue32ietnam;nuatu,tican city;.5gTkraiZnited 3ruXs2zbeE;a,sr;arab emirat0Kkingdom,states2;! of am2Y;k.,s.2; 28a.;a7haBimor-les0Bo6rinidad4u2;nis0rk2valu;ey,me2Ys and caic1U; and 2-2;toba1K;go,kel0Znga;iw2Wji2nz2S;ki2U;aCcotl1eBi8lov7o5pa2Cri lanka,u4w2yr0;az2ed9itzerl1;il1;d2Rriname;lomon1Wmal0uth 2;afr2JkLsud2P;ak0en0;erra leoEn2;gapo1Xt maart2;en;negKrb0ychellY;int 2moa,n marino,udi arab0;hele25luc0mart20;epublic of ir0Dom2Duss0w2;an26;a3eHhilippinTitcairn1Lo2uerto riM;l1rtugE;ki2Cl3nama,pua new0Ura2;gu6;au,esti2;ne;aAe8i6or2;folk1Hth3w2;ay; k2ern mariana1C;or0N;caragua,ger2ue;!ia;p2ther19w zeal1;al;mib0u2;ru;a6exi5icro0Ao2yanm05;ldova,n2roc4zamb9;a3gol0t2;enegro,serrat;co;c9dagasc00l6r4urit3yot2;te;an0i15;shall0Wtin2;ique;a3div2i,ta;es;wi,ys0;ao,ed01;a5e4i2uxembourg;b2echtenste11thu1F;er0ya;ban0Hsotho;os,tv0;azakh1Ee3iriba03o2uwait,yrgyz1E;rWsovo;eling0Jnya;a2erF;ma15p1B;c6nd5r3s2taly,vory coast;le of m19rael;a2el1;n,q;ia,oI;el1;aiSon2ungary;dur0Mg kong;aAermany,ha0Pibralt9re7u2;a5ern4inea2ya0O;!-biss2;au;sey;deloupe,m,tema0P;e2na0M;ce,nl1;ar;bTmb0;a6i5r2;ance,ench 2;guia0Dpoly2;nes0;ji,nl1;lklandTroeT;ast tim6cu5gypt,l salv5ngl1quatorial3ritr4st2thiop0;on0; guin2;ea;ad2;or;enmark,jibou4ominica3r con2;go;!n B;ti;aAentral african 9h7o4roat0u3yprQzech2; 8ia;ba,racao;c3lo2morPngo-brazzaville,okFsta r03te d'ivoiK;mb0;osD;i2ristmasF;le,na;republic;m2naTpe verde,yman9;bod0ero2;on;aFeChut00o8r4u2;lgar0r2;kina faso,ma,undi;azil,itish 2unei;virgin2; is2;lands;liv0nai4snia and herzegoviGtswaGuvet2; isl1;and;re;l2n7rmuF;ar2gium,ize;us;h3ngladesh,rbad2;os;am3ra2;in;as;fghaFlCmAn5r3ustr2zerbaijH;al0ia;genti2men0uba;na;dorra,g4t2;arct6igua and barbu2;da;o2uil2;la;er2;ica;b2ger0;an0;ia;ni2;st2;an",
  Place: "true¦aVbTcPdOeNfMgIhHiFjfk,kDlBm9new eng8or7p5s4t2u1vostok,wake is8y0;akutDyz;laanbaatar,pP;ahiti,he 0;bronx,hamptons;akhalGfo,oho,under3yd;acifUek,h0itcairn;l,x;ange county,d;land;a0co,idHuc;gadRlibu,nhattR;a0gw,hr;s,x;osrae,rasnoyar0ul;sk;ax,cn,nd0st;ianKochina;arlem,kg,nd,ovd;ay village,re0;at 0enwich;brita0lakB;in;co,ra;urope,verglad8;en,fw,own2xb;dg,gk,h0lt;a1ina0uuk;town;morro,tham;cn,e0kk,rooklyn;l air,verly hills;frica,m7n2r3sia,tl1zor0;es;!ant2;adyr,tar0;ct0;ic0; oce0;an;ericas,s",
  WeekDay: "true¦fri2mon2s1t0wednesd3;hurs1ues1;aturd1und1;!d0;ay0;!s",
  Month: "true¦dec0february,july,nov0octo1sept0;em0;ber",
  Date: "true¦ago,t0week end,yesterd2;mr2o0;d0morrow;ay;!w",
  Duration: "true¦century,dAh9m6q5se4w1y0;ear,r;eek1k0;!s;!e4;ason,c;tr,uarter;i0onth;lliseco0nute;nd;our,r;ay,ecade",
  FemaleName: "true¦0:IS;1:IW;2:I5;3:I4;4:IM;5:I9;6:JD;7:GQ;8:J9;9:J5;A:HD;B:HN;C:IE;D:J2;E:II;F:H2;G:C4;H:HP;aGIbFDcDJdCSeBIfB0gAAh9Qi9Dj8Ck7Cl5Wm46n3Ko3Gp34qu33r2Bs16t0Fu0Dv03wWxiUyPzI;aMeJineb,oIsof2;e3Rf2la,ra;h3iLlJna,ynI;ab,ep;da,ma;da,h3iIra;nab;aLeKi0GolB3uJvI;etAonDH;i0na;le0sen2;el,gm3Gn,rGAs8T;aoIme0nyi;m5YyAA;aNendDRhiD8iI;dele9lKnI;if45niIo0;e,f44;a,helmi0lIma;a,ow;ka0nB;aOeLiIusa5;ck82kJlAole7viI;anGenIQ;ky,toriBE;da,lA5rIs0;a,nIoniGV;a,iFH;leInesGV;nI7rI;i1y;g9rIxGW;su5te;aZeVhSiOoMrJuIy3;i,la;acIPiIu0L;c2na,sI;hGta;nIr0H;iGya;aKffaEGnIs6;a,gtiI;ng;!nFHra;aJeIomasi0;a,l9Lo87res1;l2ndolwethu;g9Co85rJssI;!a,ie;eIi,ri8;sa,za;bPlNmLnJrIs6tia0wa0;a60yn;iIya;a,ka,s6;arGe3iIm75ra;!ka;a,iI;a,t6;at6it6;a0Gcarlett,e0ChYiUkye,neza0oStOuJyI;bI2lvi1;ha,mayI5ni7sJzI;an3KetAie,y;anIi8;!a,e,nI;aCe;aKeI;fIl5DphI;an4;cHQr5;b2fiA3m0MnIphi1;d3ia,ja,ya;er3lKmon1nJobh8MtI;a,i;dy;lEHv2;aNeJirIo0risEZy5;a,lDD;ba,e0i5lKrI;iIr6Gyl;!d8Efa;ia,lDP;hd,iNki3nKrJu0w0yI;la,ma,na;i,le9on,ron;aJda,ia,nIon;a,on;!ya;k6mI;!aa;lKrJtaye7YvI;da,inj;e0ife;en1i0ma;anA0bMd3Kh1PiBkLlKmJnd3rIs6vannaC;aCi0;ant6i3;lDEma,ome;ee0in8Ou3;in1ri0;a05e00hYiVoIuthDC;bTcSghRl8GnQsKwJxI;anAUie,y;an,e0;aJeIie,lD; merBIann8ll1marD6t7;!lInn1;iIyn;e,nI;a,dG;da,i,na;ayy8B;hel63io;bDFer7yn;a,cJkImas,nGta,ya;ki,o;helHki;ea,iannG7oI;da,n1L;an0bKemGgi0iJnIta,y0;a86ee;han81na;a,eI;cE5kaC;bi0chJe,i0mo0nIquEFy0;di,ia;aEDelIiB;!e,le;een4ia0;aOeNhLipaluk,oKrIute67;iIudenCL;scil3LyamvaB;lly,rt2;ilome0oebe,ylI;is,lis;ggy,nelope,r5t3;ige,m0UnLo5rvaDBtJulI;a,etAin1;ricIt4T;a,e,ia;do3i07;ctav2dJfCUis6lIphCUumBYyunbileg;a,ga,iv2;eIvA9;l2tA;aXeViNoJurIy5;!ay,ul;a,eKor,rJuI;f,r;aCeEma;ll1mi;aOcMhariBJkLlaKna,sIta,vi;anIha;ur;!y;a,iDNki;hoHk9SolI;a,eDE;!mh;hir,lIna,risFsreE;!a,lBO;asuMdLh2i6CnKomi8rgEJtIzanin zah3;aIhal4;li1s6;cy,etA;e9iEP;nngu30;a0Ackenz4e02iNoKrignayani,uriD8yI;a,rI;a,lOna,tH;bi0i3llBDnI;a,iI;ca,ka,qCY;a,cUkaTlOmi,nMrJtzi,yI;ar;aJiam,lI;anEI;!l,nB;dy,eIh,n4;nhHrva;aLdKiCKlI;iIy;cent,e;red;!gros;!e5;ae5hI;ae5el40;ag5EgOi,lLrI;edi77iJjem,on,yI;em,l;em,sF;an4iIliF;nIsC9;a,da;!an,han;b0DcANd0Be,g09ha,i08ja,l06n04rMsoum5YtLuJv80x9FyIz4;bell,ra,soB4;de,rI;a,eE;h8Cild1t4;a,cYgUiLjor4l7Qn4s6tKwa,yI;!aIbe6Uja9lA9;m,nBC;a,ha,in1;!aKbC6eJja,lDna,sIt62;!a,ol,sa;!l1H;! Kh,mJnI;!a,e,n1;!awit,i;aliACcJeduarBfern5EjIlui5W;o6Dul2;ecil2la3;arKeJie,oIr46ueriA;!t;!ry;et44i39;el4Vi75y;dIon,ue5;akran7y;ak,en,iIlo3Q;a,ka,nB;a,re,s4te;daIg4;!l3C;alDd4elIge,isD6on0;ei9in1yn;el,le;a0Oe0DiZoRuMyI;d2la,nI;!a,dJeBCnIsCG;!a,eBB;a,sCE;aCRcKel0QiFlJna,pIz;e,i7;a,u,wa;iIy;a0Te,ja,l2LnB;is,l1TrKttJuIvel4;el5is1;e,ie;aLeJi8na,rI;a84i8;lIn1t7;ei;!in1;aTbb98dSepa,lNnKsJv2zI;!a,be5KetAz4;a,etA;!a,dI;a,sIy;ay,ey,i,y;a,iKja,lI;iIy;a9We;!aI;!nG;ia,ya;!nI;!a,ne;aQda,e0iOjZla,nNoLsKtIx4y5;iIt4;c2t2;e2NlCB;la,nIra;a,ie,o3;a,or1;a,gh,laI;!ni;!h,nI;a,d3e,n5O;cPdon93iOkes6mi96na,rNtKurJvIxmi,y5;ern1in2;a,e53ie,yn;as6iJoI;nya,ya;fa,s6;a,isF;a,la;ey,ie,y;a05e00hYiPlAFoOrKyI;lIra;a,ee,ie;istIy6B;a,en,iJyI;!na;!e,n58;nul,ri,urtnAV;aPerOlAUmKrIzzy;a,stI;en,in;!berlJmernI;aq;eIi,y;e,y;a,stE;!na,ra;aIei3ongordzol;dij1w5;el7MiLjsi,lKnJrI;a,i,ri;d3na,za;ey,i,lB8s4y;ra,s6;bi7cAEdiat7EeAXiSlRmQnyakuma1BrOss6HtLvi7yI;!e,lI;a,eI;e,i8H;a6BeJhIi4MlDri0y;ar69er69ie,leErAXy;!lyn8Cri0;a,en,iIl5Qoli0yn;!ma,nGsF;a5il1;ei8Ai,l4;a,tl6I;a09eZiWoOuI;anMdLliIst61;a8DeIsF;!n9tI;!a,te;e5Hi3Iy;a,i7;!anOcelDdNelHhan7NleMni,sJva0yI;a,ce;eIie;fIlDph5S;a,in1;en,n1;i8y;!a,e,n40;lIng;!i1DlI;!i1C;anOle0nLrKsI;i88sI;!e,i87;i,ri;!a,elHif2AnI;a,etAiIy;!e,f28;a,e89iJnI;a,e88iI;e,n1;cNda,mi,nJque4UsminGvie3y9zI;min8;a8eJiI;ce,e,n1s;!lIsFt0G;e,le;inJk4lDquelI;in1yn;da,ta;da,lSmQnPo0rOsJvaIzaro;!a0lu,na;aKiJlaIob7Z;!n9H;do3;belIdo3;!a,e,l37;a72en1i0ma;di3es,gr6Tji;a9elBogI;en1;a,e9iIo0se;a0na;aTePiKoIusFyacin29;da,ll4rten21snI;a,i9K;lJmaI;ri;aJdIlaJ;a,egard;ry;ath1AiKlJnriet7rmi9sI;sa,t19;en2Qga,mi;di;bi2Bil8ClOnNrKsJtIwa,yl8C;i5Nt4;n5Tti;iImo4Xri4Y;etI;!te;aCnaC;a,ey,l4;a03eXiSlQoOrLunKwI;enIyne1O;!dolD;ay,el;acieJetIiselB;a,chE;!la;ld19ogooI;sh;adys,enIor2yn2G;a,da,na;aLgi,lJna,ov84selIta;a,e,le;da,liI;an;!n0;mMnKorgJrI;ald3Ni,m3Atru86;etAi4S;a,eIna;s25vieve;ma;bJle,mIrnet,yH;al5Ji5;i5BrielI;a,l1;aUeRiQlorPoz2rI;anKeJiI;da,eB;da,ja;!cI;esJiIoi0N;n1s5X;!ca;a,enc2;en,o0;lJn0rnI;anB;ec2ic2;jr,n7rLtIy8;emJiIma,ouma7;ha,ma,n;eh;ah,iBrah,za0;cr4Ld0Oe0Ni0Mk7l05mXn4WrUsOtNuMvI;aKelJiI;!e,ta;inGyn;!ngel2S;geni1ni43;h5Qta;mMperanLtI;eJhIrel5;er;l2Zr8;za;a,eralB;iIma,nest2Jyn;cIka,n;a,ka;a,eNiKmI;aIie,y;!li9;lIn1;ee,iIy;a,e,ja;lIrald;da,y;aXeViOlNma,no3oLsKvI;a,iI;na,ra;a,ie;iIuiI;se;a,en,ie,y;a0c2da,f,nNsKzaI;!betIve7;e,h;aIe,ka;!beI;th;!a,or;anor,nG;!a;!in1na;leEs6;vi;eJiIna,wi0;e,th;l,n;aZeNh2iMjeneLoI;lor5Qminiq4Gn3DrItt4;a,eEis,la,othIthy;ea,y;ba;an0AnaCon9ya;anRbQde,ePiNlKmetr2nIsir5H;a,iI;ce,se;a,iJla,orIphi9;es,is;a,l6A;dIrdI;re;!d59na;!b2ForaCraC;a,d3nI;!a,e;hl2i0l0HmOnMphn1rJvi1WyI;le,na;a,by,cJia,lI;a,en1;ey,ie;a,etAiI;!ca,el1Bka,z;arIia;is;a0Se0Oh05i03lVoKristJynI;di,th2;al,i0;lQnNrJurI;tn1E;aKd2MiIn2Mri9;!nI;a,e,n1;!l4;cepci57n4sI;tanIuelo;ce,za;eIleE;en,tA;aKeoJotI;il4Z;!pat3;ir8rKudI;etAiI;a,ne;a,e,iI;ce,s00;a3er3ndI;i,y;aSeOloe,rI;isKyI;stI;al;sy,tI;a1Qen,iIy;an1e,n1;deKlseJrI;!i8yl;a,y;li9;nNrI;isLlJmI;ai9;a,eIotA;n1tA;!sa;d3elHtI;al,elH;cJlI;esAi42;el2ilI;e,ia,y;itlZlYmilXndWrOsMtIy5;aKeKhIri0;erIleErDy;in1;ri0;a32sI;a31ie;a,iOlMmeKolJrI;ie,ol;!e,in1yn;lIn;!a,la;a,eIie,o7y;ne,y;na,sF;a0Hi0H;a,e,l1;is7l4;in,yn;a0Ie02iZlXoUrI;andi8eRiKoJyI;an0nn;nwDoke;an3CdgMg0XtI;n2WtI;!aJnI;ey,i,y;ny;etI;!t8;an0e,nI;da,na;bbi8glarJlo06nI;i7n4;ka;ancIythe;a,he;an18lja0nIsm3I;i7tI;ou;aVcky,linUni7rQssPtKulaCvI;!erlI;ey,y;hKsy,tI;e,iIy8;e,na;!anI;ie,y;!ie;nIt6yl;adJiI;ce;etAi9;ay,da;!triI;ce,z;rbKyaI;rmI;aa;a3o3ra;a2Sb2Md23g1Zi1Qj5l16m0Xn0Aoi,r05sVtUuQvPwa,yJzI;ra,u0;aLes6gKlJseI;!l;in;un;!nI;a,na;a,i2I;drKgus1RrJsteI;ja;el2;a,ey,i,y;aahua,he0;hJi2Gja,mi7s2DtrI;id;aNlJraqIt21;at;eJi8yI;!n;e,iIy;gh;!nI;ti;iKleJo6pi7;ta;en,n1tA;aIelH;!n1J;a01dje5eZgViTjRnKohito,toIya;inetAnI;el5ia;!aLeJiImK;e,ka;!mItA;ar4;!belJliFmV;sa;!le;a,eliI;ca;ka,sIta;a,sa;elIie;a,iI;a,ca,n1qI;ue;!tA;te;!bJmIstasiNya;ar2;el;aMberLeliKiIy;e,l2naI;!ta;a,ja;!ly;hHiJl2nB;da;a,ra;le;aXba,eQiNlLthKyI;a,c2sI;a,on,sa;ea;iIys0O;e,s0N;a,cJn1sIza;a,e,ha,on,sa;e,ia,ja;c2is6jaLksaLna,sKxI;aIia;!nd3;ia,saI;nd3;ra;ia;i0nJyI;ah,na;a,is,naCoud;la;c6da,leEmOnMsI;haClI;inIyZ;g,n;!h;a,o,slI;ey;ee;en;at6g4nJusI;ti0;es;ie;aXdiUelNrI;eKiI;anNenI;a,e,ne;an0;na;!aMeLiJyI;nn;a,n1;a,e;!ne;!iI;de;e,lDsI;on;yn;!lI;i9yn;ne;aLbJiIrM;!gaL;ey,i8y;!e;gaI;il;dLliyKradhJs6;ha;ya;ah;a,ya",
  FirstName: "true¦aLblair,cHdevGgabrieFhinaEjCk9l8m4quinn,re3s0;h0umit;ay,e0iloh;a,lby;g6ne;a1el0ina,org5;!okuh9;naia,r0;ion,lo;ashawn,uca;asCe1ir0rE;an;lsAnyat2rry;am0ess6ie,ude;ie,m5;ta;le;an,on;as2h0;arl0eyenne;ie;ey,sidy;lex2ndr1ubr0;ey;a,ea;is",
  Person: "true¦a0Ob0Hc08d05e02g01hZinez,jYkVlSmMnKoJpHr9s7t4v2w0xzibit,yanni;ar0ednesday adams,ill.i.am,oode;hol,rO;a0oltaiO;lentino rossi,n go7;a1heresa may,i0yra banks;ger woods,mbaQ;tum,ylor;a0carlett johanss03hakespeaJinbad,lobodan milosevic,ocratM;ddam hussain,ntigold;a6e5i4o2u0za;mi,n dmc,paul,sh limbau0;gh;d stewart,nald0thko;inho,o;hanYvaldo;ese witherspoVil9mbrandt;ffi,y roma03;a0e08ip07lato,oe,uff daddy;lm06ris hiltS;prah winfrWra;as,e0iles crane,ostradamP; yo,l3ttI;acklemo4essia3i1o0ubarek;by,lie3net,rrissS;randa ju0tt romnR;ly;en;re;ady gaga,e0iberaT;bron jam0e;es;anye west,e1iefer suther0obe bryant;land;ats,ndall,sha;aime,effersCk rowling;a0itlPulk hogan;lle berry,rrisA;ast9otye;ff1m0nya,zekiel;eril lagasse,inem;ie;a1e0ick wolf,rake;gas,nzel washingt4;lt3nB;ar5h3lint2o0;nfuci0olio;us;on;aucCy0;na;dinal wols1son0;! palm9;ey;a5e3o2ro0;ck,n0;te;no;ck,yon0;ce;nksy,rack obama;ristot1shton kutch0;er;le",
  LastName: "true¦0:9G;1:9W;2:9Y;3:9O;4:9I;5:8L;6:9L;7:A1;8:9F;9:8A;A:78;B:6G;C:6K;a9Vb8Nc7Ld6Ye6Tf6Fg5Wh59i55j4Qk45l3Nm2Sn2Fo27p1Oquispe,r18s0Ft05vVwOxNyGzD;aytsAEhD;aDou,u;ng,o;aGeun81iDoshiAAun;!lD;diDmaz;rim,z;maDng;da,guc98mo6VsDzaA;aAhiA8;iao,u;aHeGiEoDright,u;jc8Tng;lDmm0nkl0sniewsA;liA2s2;b0iss,lt0;a5Tgn0lDtanabe;k0sh;aHeGiEoDukB;lk5roby5;dBllalDnogr2Zr10ss0val37;ba,obos;lasEsel7P;lGn dFrg8FsEzD;qu7;ily9Pqu7silj9P;en b35ijk,yk;enzue96verde;aLeix1KhHi3j6ka3IoGrFsui,uD;om50rD;c3n0un1;an,embl8UynisA;dor96lst31m4rr9th;at5Ni7NoD;mErD;are70laci65;ps2s0Z;hirBkah8Enaka;a01chXeUhQiNmKoItFuEvDzabo;en8Bobod34;ar7bot4lliv3zuA;aEein0oD;i68j3Myan8W;l6rm0;kol5lovy5re6Rsa,to,uD;ng,sa;iDy60;rn5tD;!h;l5ZmEnDrbu;at8gh;mo6Eo6K;aFeDimizu;hu,vchD;en7Duk;la,r17;gu8mDoh,pulve8Trra4S;jDyD;on5;evi6Giltz,miDneid0roed0ulz,warz;dEtD;!z;!t;ar42h6ito,lFnDr4saAto,v4;ch7d0AtDz;a4Pe,os;as,ihBm3Zo0Q;aOeNiKoGuEyD;a67oo,u;bio,iz,sD;so,u;bEc7Bdrigue57g03j73mDosevelt,ssi,ta7Nux,w3Z;a4Ce0O;ertsDins2;!on;bei0LcEes,vDzzo;as,e8;ci,hards2;ag3es,it0ut0y9;dFmEnDsmu7Zv5F;tan1;ir7os;ic,u;aSeLhJiGoErDut6;asad,if60ochazk1V;lishc23pDrti63u55we67;e2Tov48;cEe09nD;as,to;as61hl0;aDillips;k,m,n5L;de3AetIna,rGtD;ersErovDtersC;!a,ic;en,on;eDic,ry,ss2;i8ra,tz,z;ers;h71k,rk0tEvD;ic,l3T;el,t2O;bJconnor,g2ClGnei5QrEzD;demir,turk;ella3MtDwe5O;ega,iz;iDof6GsC;vDyn1E;ei8;aPri1;aLeJguy1iFoDune44ym3;rodahl,vDwak;ak3Uik5otn57;eEkolDlsCx2;ic,ov6X;ls1miD;!n1;ils2mD;co42ec;gy,kaEray3varD;ro;jiDmu8shiD;ma;aWcUeQiPoIuD;lGnFrDssoli5T;atDpTr68;i,ov4;oz,te4C;d0l0;h3lInr13o0GrEsDza0Y;er,s;aFeEiDoz5r3Ete4C;!n6F;au,i8no,t4N;!l9;i2Rl0;crac5Ohhail5kke3Qll0;hmeFij0j2FlEn2Xrci0ssiDyer19;!er;n0Io;dBti;cartDlaughl6;hy;dMe6Egnu5Fi0jer35kLmJnci5ArFtEyD;er,r;ei,ic,su1O;iEkBqu9roqu6tinD;ez,s;a55c,nD;!o;a53mD;ad5;e5Pin1;rig4Ps1;aSeMiIoGuEyD;!nch;k4nDo;d,gu;mbarDpe2Svr4;di;!nDu,yana1T;coln,dD;bDholm;erg;bed5UfeGhtFitn0kaEn6rDw2H;oy;!j;in1on1;bvDvD;re;iDmmy,rsCu,voie;ne,t12;aTennedy,h3iSlQnez48oJrGuEvar3woD;k,n;cerDmar59znets5;a,o2H;aDem0i31yeziu;sni3RvD;ch3W;bay4Grh0Ksk0UvaFwalDzl5;czDsA;yk;cFlD;!cDen3S;huk;!ev4ic,s;e6uiveD;rt;eff0l4mu8nnun1;hn,llFminsArEstra33to,ur,yDzl5;a,s0;j0HlsC;oe;aMenLha2Qim0RoEuD;ng,r4;e2KhFnErge2Ku2OvD;anB;es,ss2;anEnsD;en,on,t2;nesDsC;en,s1;ki27s1;cGkob3RnsDrv06;en,sD;enDon;!s;ks2obs1;brahimBglesi3Ake4Ll0DnoZoneFshikEto,vanoD;u,v4A;awa;scu;aPeIitchcock,jaltal6oFrist46uD;!aDb0gh9ynh;m3ng;a24dz4fEjga2Tk,rDx3B;ak0Yvat;er,fm3B;iGmingw3NnErD;nand7re8;dDriks1;ers2;kkiEnD;on1;la,n1;dz4g1lvoLmJnsCqIrr0SsFuEyD;as36es;g1ng;anEhiD;mo0Q;i,ov08;ue;alaD;in1;rs1;aNeorgMheorghe,iKjonJoGrEuDw2;o,staf2Utierr7zm3;ayDg4iffitVub0;li1H;lub3Rme0JnEodD;e,m3;calv9zale0H;aj,i;bs2l,mDordaL;en7;iev3A;gnJlGmaFnd2Mo,rDs2Muthi0;cDza;ia;ge;eaElD;agh0i,o;no;e,on;ab0erLiHjeldsted,lor9oFriedm3uD;cDent9ji3E;hs;ntaDrt6urni0;na;lipEsD;ch0;ovD;!ic;hatBnanFrD;arDei8;a,i;deS;ov4;dGinste6riksCsDva0D;cob2YpDtra2W;inoza,osiL;en,s2;er,is2wards;aUeMiKjurhuJoHrisco0ZuEvorakD;!oQ;arte,boEmitru,rDt2U;and,ic;is;g3he0Imingu7n2Ord1AtD;to;us;aDmitr29ssanayake;s,z; GbnaFlEmirDrvis1Lvi,w3;!ov4;gado,ic;th;bo0groot,jo04lEsilDvri9;va;a cruz,e2uD;ca;hl,mcevsAnEt2EviD;d5es,s;ieDku1S;ls1;ki;a06e01hOiobNlarkMoFrD;ivDuz;elli;h1lHntGoFrDs26x;byn,reD;a,ia;ke,p0;i,rer0N;em3liD;ns;!e;anu;aLeIiu,oGriDuJwe;stD;eDiaD;ns1;i,ng,uFwDy;!dhury;!n,onEuD;ng;!g;kEnDpm3tterjee,v7;!d,g;ma,raboD;rty;bGl08ng4rD;eghetEnD;a,y;ti;an,ota0L;cer9lder2mpbeIrFstDvadi07;iDro;llo;doEt0uDvalho;so;so,zo;ll;es;a08eWhTiRlNoGrFyD;rne,tyD;qi;ank5iem,ooks,yant;gdan5nFruya,su,uchEyHziD;c,n5;ard;darDik;enD;ko;ov;aEondD;al;nco,zD;ev4;ancRshwD;as;a01oDuiy3;umDwmD;ik;ckNethov1gu,ktLnJrD;gGisFnD;ascoDds1;ni;ha;er,mD;ann;gtDit7nett;ss2;asD;hi;er,ham;b4ch,ez,hMiley,kk0nHrDu0;bEnDua;es,i0;ieDosa;ri;dDik;a8yopadhyD;ay;ra;er;k,ng;ic;cosZdYguilXkhtXlSnJrGsl3yD;aEd6;in;la;aEsl3;an;ujo,ya;dFgelD;ovD;!a;ersGov,reD;aDjL;ss1;en;en,on,s2;on;eksejGiyGmeiFvD;ar7es;ez;da;ev;ar;ams;ta",
  MaleName: "true¦0:DN;1:CO;2:D6;3:AJ;4:CK;5:BZ;6:CF;7:D2;8:BS;9:AR;A:DA;B:D3;C:94;D:BM;aC9bB7cA7d98e8If82g7Fh6Si6Cj5Ek52l4Fm37n2Uo2Op2Gqu2Er1Ms12t0Gu0Fv08wUxTyJzE;aEor0;cEh9Jkaria,n0C;hFkE;!aC7;ar5UeC6;aMoGuE;sEu2LvBJ;if,uf;nGsFusE;ouf,sE;ef;aEg;s,tE;an,h0;hli,nB8ssY;avi3ho4;aNeLiGoEyaBN;jcie87lfgang,odrow,utE;!er;lEnst1;bGey,fredAlE;aAZiE;am,e,s;e97ur;i,nde9sE;!l8t1;lFyE;l1ne;lEt3;a9Xy;aHiEladimir,ojte7U;cFha0kt67nceErgA5va0;!nt;e3Xt65;lentEn9S;inE;!e;ghBElyss59nax,sm0;aXeShOiMoIrGuFyE;!l3ro6s1;n7r59;avAHeEist0oy,um0;ntA9v5Wy;bGd8RmEny;!as,mEoharu;aCBie,y;iCy;mEt5;!my,othy;adGeoFia0KomE;!as;!do8G;!de5;dHrE;en98rE;an97eEy;ll,n96;!dy;dgh,ha,iEnn3req,tsu4R;cAPka;aUcotSeQhMiKoIpenc3tEur1Xylve96zym1;anGeEua85;f0phBCvEwa84;e5Zie;!islaw,l8;lom1uE;leyma6ta;dElCm1yabonga;!dhart74n8;aGeE;lErm0;d1t1;h7Kne,qu11un,wn,y6;aEbasti0k2Cl4Prg4Mth,ymoAE;m5n;!tE;!ie,y;lFmEnti2Gq58ul;!ke5JmDu4;ik,vato7O;aZeVhe9ViRoIuFyE;an,ou;b7DdFf5pe7KssE;!elBI;ol3Fy;an,bLc62dJel,geIh0landAmHnGry,sFyE;!ce;coe,s;!aA1nD;an,eo;l45r;er78g3n8olfo,riE;go;bDeAQ;cEl8;ar6Ic6HhFkEo;!ey,ie,y;a8Vie;gFid,ubByEza;an1KnZ;g9SiE;na9Os;ch6Qfa4lImHndGpha4sFul,wi2HyE;an,mo6U;h7Jm5;alAWol2U;iACon;f,ph;ent2inE;cy,t1;aJeHhilGier6TrE;aka18eE;m,st1;!ip,lip;dA4rcy,tE;ar,e3Er1Y;b4Hdra73tr6JulE;!o19;ctav3Di3liv3m9Yndrej,rIsFtEum7wB;is,to;aFc7k7m0vE;al5S;ma;i,vM;aMeKiGoEu38;aEel,j5l0ma0r3I;h,m;cFg4i46kEl2R;!au,h7Gola;hEkEolC;olC;al,d,il,ls1vE;il8J;hom,tE;e,hE;anEy;!a4i4;a00eXiNoIuFyE;l2Gr1;hamFr6KstaE;fa,p54;ed,mI;di0Xe,hamGis2CntFsEussa;es,he;e,y;ad,ed,mE;ad,ed;cJgu4hai,kHlGnFtchE;!e9;a7Uik;house,o0Ct1;ae5Oe9MolE;aj;ah,hE;aFeE;al,l;el,l;hFlv2rE;le,ri9v2;di,met;ay0hUjd,ks2AlSmadXnRrLs1tGuricFxE;imilianAwe9;e,io;eHhFiCtEus,yC;!eo,hew,ia;eEis;us,w;j,o;cIio,kHlGqu6Ysha9tEv2;iEy;!m,n;in,on;el,oQus;!el90oPus;iHu4;achEcolm,ik;ai,y;amFdi,eEmoud;sh;adEm5G;ou;aXeRiPlo39oLuFyE;le,nd1;cHiGkEth3uk;aEe;!s;gi,s,z;as,iaE;no;g0nn7BrenGuEv81we9;!iE;e,s;!zo;am,oE;n4r;a7Uevi,la4AnIonHst3thaGvE;eEi;nte;bo;!a6Del;!ny;mFnd1rEur54wr54;ry,s;ar,o4Y;aMeIhal7GiFristEu4Ky6J;i0o54;er0p,rE;k,ollE;os;en0iGnErmit,v3U;!dr3XnEt1;e18y;r,th;cp3j5m5Sna6OrFsp7them,uE;ri;im,l;a01eViToHuE;an,lEst2;en,iE;an,en,o,us;aOeMhnLkubCnJrHsE;eFhEi7Vue;!ua;!ph;dEge;i,on;!aEny;h,s,th55;!ath54ie,nD;!l,sEy;ph;o,qu2;an,mE;!mD;d,ffHrEs5;a5YemFmai6oEry;me,ni0Y;i7Fy;!e5OrE;ey,y;cLdBkJmIrGsFvi3yE;dBs1;on,p3;ed,od,rEv4V;e5Bod;al,es4Mis1;a,e,oEub;b,v;ob,quE;es;aXbRchiQgOkeNlija,nuMonut,rKsGtEv0;ai,suE;ki;aFha0i6ZmaEsac;el,il;ac,iaE;h,s;a,vinEw2;!g;k,nngu5F;!r;nacEor;io;ka;ai,rahE;im;aQeKoJuEyd7;be2FgHmber4KsE;eyFsE;a2e2;in,n;h,o;m3ra36sse2wa40;aIctHitHnrFrE;be28m0;iEy;!q0Z;or;th;bMlLmza,nKo,rGsFyE;a47dB;an,s0;lGo4Nry,uEv8;hi44ki,tE;a,o;an,ey;k,s;!im;ib;aWeSiQlenPoMrIuE;ilFsE;!tavo;herme,lerE;mo;aGegEov3;!g,orE;io,y;dy,h5J;nzaFrE;an,d1;lo;!n;lbe4Xno,oE;rg37van4X;oGrE;aEry;ld,rdA;ffr8rge;brFlBrEv2;la14r3Hth,y;e33ielE;!i5;aSePiNlLorrest,rE;anFedEitz;!dDer11r11;cGkE;ie,lE;in,yn;esLisE;!co,z2W;etch3oE;yd;d4lEonn;ip;deriFliEng,rnan05;pe,x;co;bi0di,hd;dYfrXit0lSmLnIo2rGsteb0th0uge6vEymBzra;an,eE;ns,re2X;gi,i0AnErol,v2w2;estAie;oFriqEzo;ue;ch;aJerIiFmE;aIe2Q;lErh0;!iE;o,s;s1y;nu4;be0Bd1iGliFm3t1viEwood;n,s;ot1Ss;!as,j4EsE;ha;a2en;!d2Vg7mHoFuFwE;a26in;arE;do;oWuW;a02eRiPoHrag0uGwFylE;an,l0;ay6ight;a6dl8nc0st2;minHnFri0ugEvydCy29;!lC;!a2HnEov0;e9ie,y;go,iFykC;as;cEk;!k;armuEll1on,rk;id;andNj0lbeMmetri5nKon,rIsGvFwExt3;ay6ey;en,in;hawn,moE;nd;ek,rE;ick;is,nE;is,y;rt;re;an,le,mLnKrGvE;e,iE;!d;en,iGne9rEyl;eEin,yl;l35n;n,o,us;!i4ny;iEon;an,en,on;a08e06hYiar0lOoJrHuFyrE;il,us;rtE;!is;aEistob0S;ig;dy,lHnFrE;ey,neli5y;or,rE;ad;by,e,in,l2t1;aIeGiEyK;fEnt;fo0Et1;meEt5;nt;rGuFyE;!t1;de;enE;ce;aIeGrisE;!toE;ph3;st3;er;d,rEs;b4leE;s,y;cEdric,s7;il;lHmer1rE;ey,lFro9y;ll;!os,t1;eb,v2;a07eZiVlaUoSrFuEyr1;ddy,rtL;aMeHiGuFyE;an,ce,on;ce,no;an,ce;nFtE;!t;dFtE;!on;an,on;dFndE;en,on;!foEl8y;rd;bby,rEyd;is;i6ke;bGlFshE;al;al,lD;ek;nIrEshoi;at,nFtE;!r1B;aEie;rdA;!iFjam2nD;ie,y;to;kaNlazs,nIrE;n8rEt;eEy;tt;ey;dEeF;ar,iE;le;ar16b0Ud0Qf0Ogust2hm0Li0Ija0Hl03mZnSputsiRrIsaHugust5veFyEziz;a0kh0;ry;us;hi;aLchKiJjun,maInGon,tEy0;hEu09;ur;av,oE;ld;an,ndA;!el,ki;ie;ta;aq;as,dIgelAtE;hony,oE;i6nE;!iAy;ne;er,reEy;!as,i,s,w;iGmaEos;nu4r;el;ne,r,t;an,beQdBeKfIi,lHonGphYt1vE;aOin;on;so,zo;an,en;onUrE;ed;c,jaHksandGssaHxE;!andE;er,ru;ar,er;ndE;ro;rtA;ni;dBm7;ar;en;ad,eE;d,t;in;onE;so;aFi,olfAri0vik;!o;mEn;!a;dIeHraFuE;!bakr,lfazl;hEm;am;!l;allJelGoulaye,ulE;!lErG;ah,o;! rE;ahm0;an;ah;av,on",
  Honorific: "true¦director1field marsh2lieutenant1rear0sergeant major,vice0; admir1; gener0;al",
  Adjective: "true¦0:8H;1:9N;2:8E;3:9E;4:8B;5:98;6:8M;7:8T;8:86;9:99;A:8W;B:7Z;C:60;D:9D;E:7J;a80b7Ic6Wd6Fe5Xf5Cg54h4Ui3Ujuni49k3Rl3Hm34n2Uo2Fp20quart6Ar1Qs0Ut0MuRvNwFye1M;ast58eKhIiHoF;man4oFrthwhi7u0I;dBzy;despr8Zn w7Cs6N;acked0XoleF;!sa7;ather14eFll o5Pste2Q;!k4;aHeGiFola5J;b9Qce versa,gi2Qle;ng4Yrsa5H;ca1lu8U;lt08nLpHrGsFttermo9I;efEu5;b7Age1; Hb2ApGsFti8H;ca7et,ide d3P;er,i4O;f3Xto da3;aYbecom2cXdSeRfPiOkn3MmNpMrJsGto49us0wF;a08iel2N;eBi2Fo47pGuF;pervis0spect2;e1okB;eFu4;cognTgul0NlFsolv0;at0ent2;aArecede01;arri0et;que,vers5;air,orF;eseBtun7S;mploy0nd2xpect0;eFisclos0ue;cid0rF;!a75covCly2sJwF;aFei7W;tCy;heck0onvinc2;ppeal2ssum2tteGuthorF;iz0;nd0;im4Bra;aKeHhough5Jip 1RoGrF;anspare1i3;gethCle8Qp notch,rpA;ena6UmpGrF;r3Ktia8;e9o76;leFst3V;nt0;a09c05e02h01iZkiYle5Mmug,nobbi46oTpQqueami46tKuFymb7L;bHi generis,pFr4;erFre69;! dupCb,vi00;du0p5HsFurb65;eq7Rtanda8C;atu6OeJi0WrFy3Z;aightGin4LungF; o25; fFfF;or6C;adfa84ri7;arGeFirit0lendAot on;c33e1F;k4se; call0lub7mbCphisticIrHuFviT;ndFth10;proof;dAry;at0;ll0n d6C;g22nF;ce5Mg7;am36eC;co1Lem4lfGnFre6;so8; suf45i3G;aGholFient2P;ar4;rlFth2;et;cr0me,tisfac5Z;aNeIheumatoAiGoF;bu7IttBy5;ghtFv5;-w2fE;cIdu79lHnown0sFtard0;is3JoF;lu3na1;e1Duc3H;e1ondi3;bAci5;aQeOicayu6laNopuli79rGuF;bl6Fnjabi;eKiIoF;b6HfGmi3IpFvBx23;er,ort6N;a6u6Q;maFor,sti6va3;!ry;ci6Nexist2ma1UpaA;cAid;ac2Dnt2XrFti3;feDma3Ati3Av6J;i2DrtFss6F;-4RiF;al,s4P;bQffOkNld MnKrJthCutIverF;!aGni5Vseas,t,wF;ei5Urou5U;ll;do14er,si51;d34g1U; bFbFe on o6go2li6;oa6P;fashion0school;!ay; gua6MbFli6;eat;eGsF;ce6er0Io0Z;dia1se;aNeMiLoFuanc0; mo47nHrthFt5P;!eF;rn;chaGdescri6Aprof2JsF;top;la1;ght4;arby,cessa8ighbor4xt;k0usiat2;aNeMiKoGuF;dHltip7;deHlGnFot,st;ochro3Yth4;dy;rn,st;ddle ag0nF;dblVi;ga,nac2re;cHgenta,in,j0Akeshift,mmGnFscu50;da4Ay;ali3Ooth;ab3Mho;aNeKiIoFumber2;ngFuti1I;stand2tF;erm,i3L;ghtwei4QteraF;l,te;ft-w2gFssCth5;al,eFit0I;nda8;nguAps0te4;apGind4nF;ow2;ut;ce co0Dgno5Kll09m01nHpso 2ErF;a3releF;va1; WaVcoSdPe2MfOgrNhibi3Ri02nMoLsHtFvalu4N;aDeF;n4Wrdep24;a6iGolFuboI;ub7ve1;de,gF;nifica1;rdi4O;a3er;own;eriGluenSreq4J;eGiIoFul1E;or;fini3p1Ttermi4I;mpGnside9rF;reD;le3;ccu9deq4Jppropr3Q;fFsitu,vitro;ro1;mJpF;arHeGl0YoFropC;li3r0V;nd2rfeD;ti5;aGeFi0Z;d3Hn48;tu2E;egGiF;c0Rte9;al,itF;ima3;ld;aMelLiJoFuma6;meHnGrrFs0Bur4;if3K;e4Co30; ma2Msick;ghfalut1VspF;an3G;liZpfE;i8llow0ndFrd05tL;sy,y;aiLener3Ciga2Jlob5oKraHuF;ilFng ho;ty;cGtF;efEis;efE;ldBod;nfE;aWeTiRlPoIrF;aGeFil4ozB;q3CtfE;gi7nt31;lk0WoJrF; keeps,eHge0OmCtunFwa3U;ateF;!ly;go2i1Os2Z;liF;sh;ag3Rowe8uF;e1oresce1;e8nF;al,i3;dGmini6rF;ti7; up;bl0l31mili0Lr Fux;oFreach2;ff;aTfSlQmNnLqu5reDthere5veryday,xF;aDem3AplIquisi3traHuF;be3FlF;ta1;!va1V;icF;it; Fti0Y;rou3sui3;erGiF;ne1;ge1;dFe1N;er4;ficie1;gCsF;t,ygo2;er;aUeMiHoGrFue;ea8owW;mina1ne,rma1ubO;dact1Yfficult,m,sGverF;ge1se;creGeNjoi1pa9tF;a1inD;et,te; Ladp0GceKfiJgene9liHpGreliDspe9voF;id,ut;ende1;ca3ghF;tfE;a1ni3;as0;facto;i4ngero05;arZeXhWivil,oMrHuF;stoma8teF;sy;aIeHu0WystalF; cleFli6;ar;epy;vBz0;erNgniza1loMmLnGrpo9veF;rt;cIduLgr1KjHsGtraF;dic0Hry;eq1Ita1;oi1ug5;a1Ci1L;mensu9pass1G;ni5ss5;ci19;ee8intzy;leba3rtaF;in;diac,efE;aUeOiJliSoGrFuck nak0;and new,isk,on1U;gGldface,naF; fiZfiZ;us;gHpartisGzarF;re;an;tiF;me;autifEhiIloHnFsiSyoI;e01iFt;gn;v0w;nd;ul;ckwards,rF;e,rB; priori,b12c0Zd0Tf0Ng0Ih0Hl0Amp7nt07pZrSsPttracti0MuLvIwF;aGkF;wa19;ke,re;ant garGeraF;ge;de;diHtF;heFoimmu6;nt07;to8;hBlF;eep;en;bitJchiv5roItF;iFsy;fiF;ci5;ga1;ra8;ry;pFt;aJetiz2roF;prHximF;ate4;ly;ia3;ll2re1;ing;iquFsy;at0e;ed;cohJiQkaHl,oGriFterW;ght;ne,of;li6;ne;olF;ic;ead;ain05ed,gressiIrF;eeF;ab7;le;ve;fGraA;id;ectGlF;ue1;ioF;na3; JeHvF;erF;se;pt,qF;ua3;hoc,infinitum;cu9tu5u3;al;ra3;erQlOoMrJsGuF;nda1;e1olu3traD;ct;te;eaGuF;pt;st;aFve;rd;aFe;ze;ra1;nt",
  Adverb: "true¦a08b05d01eXfRhePinOjustNkinda,likewi00mLnIoDpBquite,r8s4t1up0very,well; to,wards5;h1iny bit,o0wiO;o,t6;en,us;eldom,o0uch;!me1rt0; of;how,times,w0A;a1e0;alT;ndomSthN;ar excellenEer0oint blank; Nhaps;f3n0;ce0ly;! 0;ag03moX; courIten;ewKo0; longEt 0;onIwithstanding;aybe,eanwhiAore0;!ovB;! aboV;deed,steW;lla,n0;ce;or2u0;lArther0;!moK; 0ev3;examp0good,suI;le;n1v0;er; mas0ough;se;e0irect1; 1finite0;ly;ju9trop;ackward,y 0;far,no0; means,w; DbroCd nauseam,gBl6ny3part,s2t 0w4;be6l0mo6wor6;arge,ea5; soon,ide;mo1w0;ay;re;l 1mo0ready,so,ways;st;b1t0;hat;ut;ain;ad;lot,posteriori",
  Conjunction: "true¦aVbRcuz,eNhowMiEjustYnoBo9p8supposing,t5wh0yet;e1il0o3;e,st;n1re0thN; if,vM;evL;h0o;erefMo0;!uS;lus,rovided th9;r0therwiK;! not; mattEr,w0;! 0;since,th4w7;f4n0; 0asmuch;as mGcaDorder t0;h0o;at;! 0;only,t0w0;hen;!ev3;ith2ven0;! 0;if,t9;er;e0ut,y the time;cau1f0;ore;se;lt3nd,s 0;far1if,m0soon1t2;uch0; as;hou0;gh",
  Currency: "true¦$,aud,bQcOdJeurIfHgbp,hkd,iGjpy,kElDp8r7s3usd,x2y1z0¢,£,¥,ден,лв,руб,฿,₡,₨,€,₭,﷼;lotyQł;en,uanP;af,of;h0t5;e0il5;k0q0;elK;oubleJp,upeeJ;e2ound st0;er0;lingG;n0soF;ceEnies;empi7i7;n,r0wanzaCyatC;!onaBw;ls,nr;ori7ranc9;!os;en3i2kk,o0;b0ll2;ra5;me4n0rham4;ar3;e0ny;nt1;aht,itcoin0;!s",
  Determiner: "true¦aAboth,d8e5few,le4mu7neiCplenty,s3th2various,wh0;at0ich0;evB;at,e3is,ose;everal,ome;!ast,s;a1l0very;!se;ch;e0u;!s;!n0;!o0y;th0;er",
  "Adj|Present": "true¦a07b04cVdQeOfKhollJidRlFmDnarrJoCpAqua9r8s4t2utt3w0;aLet,ound,ro0;ng,ug08;end0hin;er;e2hort,l1mooth,our,pa9tray,u0;re,speT;i2ow;cu6da01leRpaM;eplica00ig01;ck;aGr0;eseTime,omU;bscu1pen,wn;atu0e3odeG;re;a2e1i0;gTve;an;st,y;ow;a2i1oul,r0;ee,inge;rm;iHke,ncy,st;l0mpty,xpress;abo4ic7;amp,e2i1oub0ry,ull;le;ffu9re6;fu8libe0;raE;alm,l5o0;mpleCn3ol,rr1unterfe0;it;e0u7;ct;juga8sum7;ea1o0;se;n,r;ankru1lu0;nt;pt;lig2pproxi0;ma0;te;ht",
  Comparable: "true¦0:38;1:3M;2:3B;3:2E;a3Qb39c30d2Re2Kf28g1Wh1Mi1Gj1Fk1Cl15m0Zn0Uo0Tp0Kqu0Ir09sJtEuDvBw5y4za0S;el12ouP;a8e6hi1Ii4ry;ck0Ede,l4n1ry,se;d,y;a4i3P;k,ry;ntiJry;a4erda2ulgar;gue,in,st;g0pcomiG;a7en2Thi6i5ough,r4;anqu29en1ue;dy,g32me0ny,r04;ck,rs25;ll,me,rt,wd3E;aScarReQhOiNkin0ClJmHoFpEt7u5w4;eet,ift;b4dd0Wperfi1Xrre25;sta23t3;a9e8iff,r5u4;pVr1;a5ict,o4;ng;ig2Rn0N;a1ep,rn;le,rk,te0;e1Oi2Rright0;ci1Vft,l4on,re;emn,id;a4el0;ll,rt;e6i4y;g2Im4;!y;ek,nd2O;ck,l0mp3;a4iRrill,y;dy,l01rp;ve0Ixy;ce,y;d,fe,int0l1Ev0U;a9e7i6o4ude;mantic,o16sy,u4;gh,nd;pe,tzy;a4d,mo0A;dy,l;gg5ndom,p4re,w;id;ed;ai2i4;ck,et;hoBi1BlAo9r6u4;ny,r4;e,p3;egna2ic5o4;fouSud;ey,k0;liXor;ain,easa2;ny;dd,i0ld,ranL;aive,e6i5o4;b3isy,rm0Vsy;bb0ce,mb3;a4w;r,t;ad,e6ild,o5u4;nda0Xte;ist,o1;a5ek,l4;low;s0ty;a8ewd,i7o4ucky;f0Gn5o11u4ve0w0Vy0K;d,sy;e0g;ke0tt3ve0;me,r4te;ge;e5i4;nd;en;ol0ui16;cy,ll,n4;secu7t4;e4ima5;llege2rmedia4;te;re;aBe8i7o6u4;ge,m4ng19;b3id;me0t;gh,l0;a4fVsita2;dy,v4;en0y;nd10ppy,r4;d,sh;aEenDhBiAl9oofy,r4;a7e6is0o4ue0X;o4ss;vy;at,en,y;nd,y;ad,ib,ooE;a2d1;a4o4;st0;t3uiR;u1y;aDeeb3i9lat,o7r6u4;ll,n4r0N;!ny;aDesh,iend0;a4rmE;my;erce5nan4;ciB;! ;le;r,ul4;ty;a7erie,sse5v4xtre0B;il;nti4;al;r5s4;tern,y;ly,th0;aBe8i5ru4umb;nk;r5vi4;ne;e,ty;a4ep,nB;d4f,r;!ly;ppRrk;agey,h9l8o6r5u4;dd0r0te;isp,uel;ar4ld,mmon,st0ward0zy;se;evLou1;e4il0;ap,e4;sy;aIiGlDoBr6u4;r0sy;ly;a7i4oad;g5llia2;nt;ht;sh,ve;ld,un4;cy;a5o4ue;nd,o1;ck,nd;g,tt4;er;d,ld,w1;dy;bsu7ng6we4;so4;me;ry;rd",
  "Person|Adj": "true¦brown,du2earnest,frank,mi2r0sa1;a0ich,u1;ndy;sty",
  Infinitive: "true¦0:8V;1:8G;2:9D;3:80;4:7N;5:91;6:9H;7:99;8:82;9:9G;A:92;B:8X;C:7K;D:7U;E:7Q;F:87;G:7V;H:7H;a82b7Jc6Sd5Le4Gf45g41h3Wi3Cj39k37l2Ym2Rnou3Vo2Lp25qu24r19s0AtYuTvRwI;aOeNiLors4rI;eJiI;ng,te;ak,st3;d4e7HthI;draw,er;a2d,ep;i2ke,nIrn;d0t;aIie;li9Eni9ry;nIplift;cov0dJear7JlIplug,tie,ve85;ea9o3K;erIo;cut,go,sta9Gval96whelm;aRePhMoLrI;aIemb3;ffi3Fmp3nsI;aDpi8;pp3ugh4;aJiJrIwaE;eat4i2;nk;aIm92;ch,se;ck3ilor,keImp0r7N;! paE;a0Fc0Ee0Ch08i06l04mugg3n03o01pYquXtQuKwI;all71eeIim;p,t4;bKccumb,ffJggeBmm93p2FrI;mouFvi2;er,i5;li80mJsiIveE;de,st;erAit;aMe7SiKrI;ang3eIi2;ng20w;fIng;f4le;gg0rI;t3ve;a3Ui9;a4DeJit,l6KoI;il,of;ak,nd;lIot6Nw;icCve;eak,i0L;aIi6;m,y;ft,nIt;g,k;aKi5LoJriIun;nk,v5X;ot,rt4;ke,rp4tt0;eIll,nd,que7Nv0w;!k,m;avenAul81;dd4tis1Ay;a0BeJip4oI;am,ut;a07b05c03d02fZgroup,heaYiXlVmUnTpRq36sNtLup,vI;amp,eJiIo2V;sCve;l,rt;i8rI;ie2ofC;eFiKtIurfa5;o1XrI;aHiDuctu8;de,gn,st;el,hra1lIreseF;a5e69;d0ew,o05;aHe31o2;a7eFiIoad,y;e2nq3Mve;mbur1nf2U;r1t;inJleDocus,re9uI;el,rbi9;an5e;aDu5;ei2k7Jla3OoIyc3;gni2Wnci3up,v0;oot,uI;ff;ct,d,liI;se,ze;tt3vi9;a9enGit,o7;aVerTinpoiFlumm0VoSrKuI;b3Oke,ni9rIt;poEs6W;eMoI;cKd,fe4BhibCnoJpo1sp0tru6vI;e,i6o4W;un5;la39u8;aGclu6dJf0occupy,sup0FvI;a5LeF;etermi47iD;aGrtr4Vsse44;cei2fo3Hi9mea7plex,sIva6;eve8iB;mp0rItrol,ve,y;a5St5O;bMccuLpKutJverIwe;lap,s19tu6Au1;gr4Pnu22pa5;era7i3Ypo1;py,r;ser2taH;aMe09iJoIultiply;leBu64;micJnIspla5;ce,g3us;!k;iIke,naA;m,ntaH;aPeLiIo1u39;e,ke,ng0quIv4;eIi66;fy;aKnIss4;d,gI;th4;rn,ve;ng26u1E;eep,nI;e3Row;oHuI;gg3xtaI;po1;gno8mWnIrk;cUdSfRgeBhQitia7ju8q14sOtKun5TvI;eIo0T;nt,st;erJimi5QoxiQrI;odu5u6;aDn,prIru5Q;et;iBpi8tIu8;il,ruD;abCibC;eBo2Bu1;iIulA;ca7;i7lu6;b5Cmer1pI;aEer47ly,oJrI;e2Ris5No2;rt,se,veI;ri9;aLeKiIoiBuE;de,jaInd0;ck;ar,iQ;mp0ng,pp4st4ve;ath0et,i2le1UoKrI;aIow;b,pp3ze;!ve4S;ast4er3Li58lRorMrJuI;lf3Tr3P;eJiIolic;ght4;e0Lsh4;b3DeKfeCgIs4B;eIi2;!t;clo1go,sIwa4J;had2Y;ee,i2Q;a0KdCl0Im0CnUquip,rTsStGvQxI;cNeEha3iMpJtI;ing0Uol;eJi8lIo1unA;aHoC;ct,di7;st,t;e2MlI;a0Xu6;alua7oI;ke,l2;chew,pou1tab13;a1u4G;aYcVdTfSgQhan5joy,lPqOrNsuMtKvI;e0VisI;aAi4L;er,i5rI;aHenGuB;e,re;iGol;ui8;arAiB;aAeIra2ulf;nd0;or5;ang0oIu8;r1w;lo1ou0CrJuI;mb0;oaGy3Z;b3ct;bKerApI;hasiIow0;ze;a0Tody,rI;a5oiI;d0l;ap1eDuI;ci3Ode;rIt;ma0Nn;a0Ne02iKo,rIwind3;aw,edAoI;wn;agno1e,ff0g,mi27sLvI;eIulA;rIst;ge,t;ab3bUcPlodAmant3pNru3GsMtI;iIoEu2W;lJngI;ui9;!l;ol2ua6;eIla5o1ro2;n1r1;a2Ne2WlKoIu0K;uIv0;raA;aIo1;im;a38ur1;af4bZcTduDep4fRliQmNnLpKra1TtaGvI;eIol2;lop;aEiDoE;oIy;te,un5;eJoI;li9;an;mCv0;a5i06oIraud,y;rm;ei2iMoKrI;ee,yI;!pt;de,mIup3;missi2Upo1;de,ma7ph0;aJrief,uI;g,nk;rk;mp4rk4uF;a06ea1h04i03l02oJrIurta17;a2ea7ipp3;ales5eZhabCinci6llYmWnIrro6;cTdQfNju8no7qu0sLtKvI;eIin5;ne,rA;aHin25ribu7;er2iIoli27pi8titu7ult;d0st;eJiIroFu1;de,gu8rm;ss;eJoI;ne;mn,n1;eIlu6ur;al,i2;buBe,men5pI;e7i3ly;eDi6u6;r5xiB;ean1iS;rcumveFte;eIoo1;ri9w;ncIre4t0ulk;el;aXeRi6lPoOrLuI;iJrIy;st,y;ld;aJeastfeMiIoad4;ng;ke;il,l12mba0XrrMth0;eIow;ed;!come,gHha2liLqueaKstJtrIwild0;ay;ow;th;e2tt3;in;bysCckfi8ff3tI;he;it;b17c0Vd0Mff0Kgr0Jl0Fm0Bn05pp01rZsSttPuNvKwaI;it,k4;en;eEoI;id;rt;gIto08;meF;aGeBraD;ct;ch;pi8sJtoI;ni9;aKeIi05u8;mb3rt,ss;le;il;re;g0Ji1ou1rI;anAi2;eaKly,oiFrI;ai1o2;nt;r,se;aMiQnJtI;icipa7;eJoIul;un5y;al;ly1;aJu1;se;lgaIze;ma7;iKlI;eAoIu6;t,w;gn;ee;ix,oI;rd;a01jNmiKoJsoI;rb;pt,rn;niIt;st0;er;ouJuB;st;rn;cLhie2knowledAquiItiva7;es5re;ce;ge;eOomKrJusI;e,tom;ue;moJpI;any,li9;da7;te;pt;andOet,i6oKsI;coKol2;ve;li9rt,uI;nd;sh;de;on",
  Modal: "true¦c5lets,m4ought3sh1w0;ill,o5;a0o4;ll,nt;! to,a;ight,ust;an,o0;uld",
  Verb: "true¦born,cannot,gonna,has,keep tabs,msg",
  Participle: "true¦fl3g1s0writt2;e1h2;iv0one;en;own",
  "Actor|Verb": "true¦aIbDcAd8engineFfool,g6host,judge,m4nerd,p3recruit,s1ushFvolunteFwi0;mp,tneF;cout,p0;ons6y;arent,ilot;a0ime;n,st9;eek,oof,r0uide;aduCoom;elegBoct0;or;ha1o0;a5nscript,ok;mpion,uffeur;it3o2u0;lly,tch0;er;ss;ch;d0ffili1rchite2;di1voc0;ate;ct",
  "Adj|Gerund": "true¦0:2F;1:2H;2:25;3:23;4:20;5:2D;6:27;7:22;a24b1Zc1Hd14e0Yf0Og0Ih0Hi0Ajud1Xl07m04o00pWrQsFtAup9v8w0Pyiel4;ar5eY;lif0s01;aWeBhr9i3ouc7r8wis0;e01oub2us0yi1;ea0Mi8;l2vi1;l2mp0;atisf5creec7hoc0Ekyrocke0lo13oGpFtBu9we8;e12l2;pp1Kr8;gi1pri6roun4;a9ea23i8ri0Aun1C;mula0r3;gge3r8;t2vi1;ark2ee4;a8ot7;ki1ri1;aCe9ive0o8us7;a3l2;defi13fres7ig13laEmai13s0v8war4;ea2itali8ol0Q;si1zi1;gi1ll5mb2vi1;a5erpleAier1Dlun18r8un1J;e8o11;ce4s6vai2;xi1;ffsApNut9ver8wi1;arc7lap0Hp09ri4whel1L;goi1l5st0Y;et0;eande3i9o0Fu8;mb2;s6tiga0;a9i8o0C;fesa0Bmi0vi1;cKg0Vs0;mDn8rri0C;cBsAt9vi8;go1Gti1;e15imida0;pi3ul0;orpo1Drea6;po6;arrowi1ea2orrif5umilia0;lCr8;a0ipZo9uel8;i1li1;undbrea8wi1;ki1;a3ea0Z;aGetc7it0lDoBr9ulf8;il2;ee0Yigh8ust12;te04;r8un4;ebo4th0H;a9o8;a0we3;mi1tte3;di1scina0;mBn9x8;ac0ci0is0plo4;ab2c8du3ga04sT;han0oura03;barras6er02p8;owe3;aJeCi8;s8zz5;appoin0gus0sen0t8;r8u0N;ac0es6;biliDcCfiMgra4mBpres6serAv8;asCelo8;pi1;vi1;an4eaI;a5liH;ta0;maOri1s7un0;aOhLlo6o8ripp2ut0;mEn8rrespon4;cerCfBspi3t8vinQ;in9r8;as0ibu0ol2;ui1;lic0u6;ni1;fCmBp8;e9ro8;mi6;l2ti1;an4;or0;a8ea0il2;llen8rQ;gi1;lOptiva0ri1;eBin4lin4o9rui6u8;d4st2;i2oLri1un8;ci1;coJ;bsoQcLgonJlarImGppea2rEs8;pi3su3to8;n9un4;di1;is7;hi1;ri1;res0;li1;aBu6;si1;mi1;i8zi1;zi1;c8hi1;ele9ompan5;yi1;ra0;ti1;rbi1;ng",
  "Adj|Past": "true¦0:30;1:2R;2:2U;a2Jb2Dc1Ud1Be15f10gift0h0Xi0Qj0Pknown,l0Mm0Hn0Fo0Cp05qua04rVsEtAu7v5w3;arp0ea3or5;kIth2T;a3e0W;ri0;n3pd1s0;derstood,i3;fi0t0;ar5hreatCr3wi2R;a3ou19;ck0in0pp0;get0ni1N;aHcaGeEhDimCm01oak0pAt6u3;bsid28gge2Ms3;pe3ta1S;ct0nd0;at0e5r3uV;ength3ip0;en0;am0reotyp0;eci3ik0ott0;al20fi0;pIul1;ar0ut;a3c1Jle2t1S;l0t0;r0tt25;t3ut0;is1Jur1;aAe3;c7duc0f1Cg6l1new0qu5s3;pe2t3;or0ri2;e22ir0;ist1Xul1;eiv0o3;mme09rd0v1V;lli0ti1A;li19;arallel0i0Kl7o6r3ump0;e4o3;ce0Ilo0Hnou1Tpos0te2;fe0Loc8pY;i1Gli0R;a3e19;nn0;c4rgan1Bverlo3;ok0;cupi0;e3ot0;ed0gle2;a5e4ix0o3ut0;di0Vt0G;as0Qlt0;n3rk0;ag0ufact0O;eft,i4o3;ad0st;cens0mit0st0;agg0us0N;mp8n3sol1;br0debt0f6t3volv0;e3ox0F;gr1n3re18;d0si0J;e2l1oX;li0oLrov0;amm10e1o3;ok0r3;ri0E;aNe6i5lavo09oc05r3;a3i0;ct07g0Mm0;niXx0;ar0;duc1l1mbarraKn7quipp0stabliVx3;agger1p3te5;a4e3;ct0rie0S;nd0;ha0QsZ;aJeAi3;gni01miniOre2s3;a7c5grun05t3;o3reBurb0;rt0;iplSou3;nt0rE;bl0;cenVdOf8l7pre6ra5t3velop0;a3ermO;il0;ng0;ss0;ay0ight0;e4o3;rm0;rr0;m3t0;ag0;alcul1eHharg0lGo8r5u3;lt3stomS;iv1;a4owd0u3;sh0;ck0mp0;d0lo9m6n3ok0vX;centr1f4s3troll0;idVolid1;us0;b4pl3;ic1;in0;ur0;assi5os0;lebr1n5r3;ti3;fi0;tralB;a7i6o4roken,urn3;ed,t;il0r0t3und;tl0;as0;k0laIs0;bandon0cJdGffe2lDnBpp9ss7u3ward0;g4thor3;iz0;me3;nt0;o5u3;m0r0;li0re3;ci1;im1ticip1;at0;leg0t3;er0;ct0;ju4o6va3;nc0;st0;ce3knowledg0;pt0;ed",
  "Person|Verb": "true¦b8ch7dr6foster,gra5hope,ja9lan4ma2ni9ollie,p1rob,s0tra4wade;pike,t5ue;at,eg,ier2;ck,r0;k,shal;ce;ce,nt;ew;ase,u1;iff,l1ob,u0;ck;aze,ossom",
  "Person|Place": "true¦a5darw6h3jordan,k2orlando,s0victo7;a0ydney;lvador,mara,ntiago;ent,obe;amil0ous0;ton;lexand1ust0;in;ria",
  "Person|Date": "true¦a2j0sep;an0une;!uary;p0ugust,v0;ril"
}, He = 36, qn = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ", ho = qn.split("").reduce(function(e, t, n) {
  return e[t] = n, e;
}, {}), vg = function(e) {
  if (qn[e] !== void 0)
    return qn[e];
  let t = 1, n = He, r = "";
  for (; e >= n; e -= n, t++, n *= He)
    ;
  for (; t--; ) {
    const o = e % He;
    r = String.fromCharCode((o < 10 ? 48 : 55) + o) + r, e = (e - o) / He;
  }
  return r;
}, wg = function(e) {
  if (ho[e] !== void 0)
    return ho[e];
  let t = 0, n = 1, r = He, o = 1;
  for (; n < e.length; t += r, n++, r *= He)
    ;
  for (let a = e.length - 1; a >= 0; a--, o *= He) {
    let i = e.charCodeAt(a) - 48;
    i > 10 && (i -= 7), t += i * o;
  }
  return t;
}, Kn = {
  toAlphaCode: vg,
  fromAlphaCode: wg
}, Pg = function(e) {
  const t = new RegExp("([0-9A-Z]+):([0-9A-Z]+)");
  for (let n = 0; n < e.nodes.length; n++) {
    const r = t.exec(e.nodes[n]);
    if (!r) {
      e.symCount = n;
      break;
    }
    e.syms[Kn.fromAlphaCode(r[1])] = Kn.fromAlphaCode(r[2]);
  }
  e.nodes = e.nodes.slice(e.symCount, e.nodes.length);
}, kg = Pg, Ag = function(e, t, n) {
  const r = Kn.fromAlphaCode(t);
  return r < e.symCount ? e.syms[r] : n + r + 1 - e.symCount;
}, $g = function(e) {
  const t = [], n = (r, o) => {
    let a = e.nodes[r];
    a[0] === "!" && (t.push(o), a = a.slice(1));
    const i = a.split(/([A-Z0-9,]+)/g);
    for (let s = 0; s < i.length; s += 2) {
      const l = i[s], u = i[s + 1];
      if (!l)
        continue;
      const c = o + l;
      if (u === "," || u === void 0) {
        t.push(c);
        continue;
      }
      const h = Ag(e, u, r);
      n(h, c);
    }
  };
  return n(0, ""), t;
}, Ig = function(e) {
  const t = {
    nodes: e.split(";"),
    syms: [],
    symCount: 0
  };
  return e.match(":") && kg(t), $g(t);
}, xg = Ig, Ng = function(e) {
  if (!e)
    return {};
  const t = e.split("|").reduce((r, o) => {
    const a = o.split("¦");
    return r[a[0]] = a[1], r;
  }, {}), n = {};
  return Object.keys(t).forEach(function(r) {
    const o = xg(t[r]);
    r === "true" && (r = !0);
    for (let a = 0; a < o.length; a++) {
      const i = o[a];
      n.hasOwnProperty(i) === !0 ? Array.isArray(n[i]) === !1 ? n[i] = [n[i], r] : n[i].push(r) : n[i] = r;
    }
  }), n;
}, jg = Ng, ie = ["Possessive", "Pronoun"];
let Eg = {
  "20th century fox": "Organization",
  "7 eleven": "Organization",
  "motel 6": "Organization",
  g8: "Organization",
  vh1: "Organization",
  km2: "Unit",
  m2: "Unit",
  dm2: "Unit",
  cm2: "Unit",
  mm2: "Unit",
  mile2: "Unit",
  in2: "Unit",
  yd2: "Unit",
  ft2: "Unit",
  m3: "Unit",
  dm3: "Unit",
  cm3: "Unit",
  in3: "Unit",
  ft3: "Unit",
  yd3: "Unit",
  "at&t": "Organization",
  "black & decker": "Organization",
  "h & m": "Organization",
  "johnson & johnson": "Organization",
  "procter & gamble": "Organization",
  "ben & jerry's": "Organization",
  "&": "Conjunction",
  i: ["Pronoun", "Singular"],
  he: ["Pronoun", "Singular"],
  she: ["Pronoun", "Singular"],
  it: ["Pronoun", "Singular"],
  they: ["Pronoun", "Plural"],
  we: ["Pronoun", "Plural"],
  was: ["Copula", "PastTense"],
  is: ["Copula", "PresentTense"],
  are: ["Copula", "PresentTense"],
  am: ["Copula", "PresentTense"],
  were: ["Copula", "PastTense"],
  her: ie,
  his: ie,
  hers: ie,
  their: ie,
  theirs: ie,
  themselves: ie,
  your: ie,
  our: ie,
  ours: ie,
  my: ie,
  its: ie,
  vs: ["Conjunction", "Abbreviation"],
  if: ["Condition", "Preposition"],
  closer: "Comparative",
  closest: "Superlative",
  much: "Adverb",
  may: "Modal",
  babysat: "PastTense",
  blew: "PastTense",
  drank: "PastTense",
  drove: "PastTense",
  forgave: "PastTense",
  skiied: "PastTense",
  spilt: "PastTense",
  stung: "PastTense",
  swam: "PastTense",
  swung: "PastTense",
  guaranteed: "PastTense",
  shrunk: "PastTense",
  nears: "PresentTense",
  nearing: "Gerund",
  neared: "PastTense",
  no: ["Negative", "Expression"]
};
const Tg = Eg, Cg = [
  ":(",
  ":)",
  ":P",
  ":p",
  ":O",
  ";(",
  ";)",
  ";P",
  ";p",
  ";O",
  ":3",
  ":|",
  ":/",
  ":\\",
  ":$",
  ":*",
  ":@",
  ":-(",
  ":-)",
  ":-P",
  ":-p",
  ":-O",
  ":-3",
  ":-|",
  ":-/",
  ":-\\",
  ":-$",
  ":-*",
  ":-@",
  ":^(",
  ":^)",
  ":^P",
  ":^p",
  ":^O",
  ":^3",
  ":^|",
  ":^/",
  ":^\\",
  ":^$",
  ":^*",
  ":^@",
  "):",
  "(:",
  "$:",
  "*:",
  ")-:",
  "(-:",
  "$-:",
  "*-:",
  ")^:",
  "(^:",
  "$^:",
  "*^:",
  "<3",
  "</3",
  "<\\3",
  "=("
], Dg = {
  a: [
    [/(antenn|formul|nebul|vertebr|vit)a$/i, "$1ae"],
    [/ia$/i, "ia"]
  ],
  e: [
    [/(kn|l|w)ife$/i, "$1ives"],
    [/(hive)$/i, "$1s"],
    [/([m|l])ouse$/i, "$1ice"],
    [/([m|l])ice$/i, "$1ice"]
  ],
  f: [
    [/^(dwar|handkerchie|hoo|scar|whar)f$/i, "$1ves"],
    [/^((?:ca|e|ha|(?:our|them|your)?se|she|wo)l|lea|loa|shea|thie)f$/i, "$1ves"]
  ],
  i: [[/(octop|vir)i$/i, "$1i"]],
  m: [[/([ti])um$/i, "$1a"]],
  n: [[/^(oxen)$/i, "$1"]],
  o: [[/(al|ad|at|er|et|ed)o$/i, "$1oes"]],
  s: [
    [/(ax|test)is$/i, "$1es"],
    [/(alias|status)$/i, "$1es"],
    [/sis$/i, "ses"],
    [/(bu)s$/i, "$1ses"],
    [/(sis)$/i, "ses"],
    [/^(?!talis|.*hu)(.*)man$/i, "$1men"],
    [/(octop|vir|radi|nucle|fung|cact|stimul)us$/i, "$1i"]
  ],
  x: [
    [/(matr|vert|ind|cort)(ix|ex)$/i, "$1ices"],
    [/^(ox)$/i, "$1en"]
  ],
  y: [[/([^aeiouy]|qu)y$/i, "$1ies"]],
  z: [[/(quiz)$/i, "$1zes"]]
}, jt = Dg, Og = /([xsz]|ch|sh)$/, Fg = function(e) {
  let t = e[e.length - 1];
  if (jt.hasOwnProperty(t) === !0)
    for (let n = 0; n < jt[t].length; n += 1) {
      let r = jt[t][n][0];
      if (r.test(e) === !0)
        return e.replace(r, jt[t][n][1]);
    }
  return null;
}, Vg = function(e = "", t) {
  let { irregularPlurals: n, uncountable: r } = t.two;
  if (r.hasOwnProperty(e))
    return e;
  if (n.hasOwnProperty(e))
    return n[e];
  let o = Fg(e);
  return o !== null ? o : Og.test(e) ? e + "es" : e + "s";
}, un = Vg, Gg = /\|/;
let st = Tg, Un = {};
const Bg = { two: { irregularPlurals: yi, uncountable: {} } };
Object.keys(co).forEach((e) => {
  let t = jg(co[e]);
  if (!Gg.test(e)) {
    Object.keys(t).forEach((n) => {
      st[n] = e;
    });
    return;
  }
  Object.keys(t).forEach((n) => {
    if (Un[n] = e, e === "Noun|Verb") {
      let r = un(n, Bg);
      Un[r] = "Plural|Verb";
    }
  });
});
Cg.forEach((e) => st[e] = "Emoticon");
delete st[""];
delete st[null];
delete st[" "];
const p = "Singular", E = {
  beforeTags: {
    Determiner: p,
    Possessive: p,
    Acronym: p,
    Noun: p,
    Adjective: p,
    PresentTense: p,
    Gerund: p,
    PastTense: p,
    Infinitive: p,
    Date: p,
    Ordinal: p,
    Demonym: p
  },
  afterTags: {
    Value: p,
    Modal: p,
    Copula: p,
    PresentTense: p,
    PastTense: p,
    Demonym: p,
    Actor: p
  },
  beforeWords: {
    the: p,
    with: p,
    without: p,
    of: p,
    for: p,
    any: p,
    all: p,
    on: p,
    cut: p,
    cuts: p,
    increase: p,
    decrease: p,
    raise: p,
    drop: p,
    save: p,
    saved: p,
    saves: p,
    make: p,
    makes: p,
    made: p,
    minus: p,
    plus: p,
    than: p,
    another: p,
    versus: p,
    neither: p,
    about: p,
    favorite: p,
    best: p,
    daily: p,
    weekly: p,
    linear: p,
    binary: p,
    mobile: p,
    lexical: p,
    technical: p,
    computer: p,
    scientific: p,
    security: p,
    government: p,
    popular: p,
    formal: p,
    no: p,
    more: p,
    one: p
  },
  afterWords: {
    of: p,
    system: p,
    aid: p,
    method: p,
    utility: p,
    tool: p,
    reform: p,
    therapy: p,
    philosophy: p,
    room: p,
    authority: p,
    says: p,
    said: p,
    wants: p,
    wanted: p,
    is: p,
    can: p,
    wise: p
  }
}, f = "Infinitive", _ = {
  beforeTags: {
    Modal: f,
    Adverb: f,
    Negative: f,
    Plural: f
  },
  afterTags: {
    Determiner: f,
    Adverb: f,
    Possessive: f,
    Reflexive: f,
    Preposition: f,
    Cardinal: f,
    Comparative: f,
    Superlative: f
  },
  beforeWords: {
    i: f,
    we: f,
    you: f,
    they: f,
    to: f,
    please: f,
    will: f,
    have: f,
    had: f,
    would: f,
    could: f,
    should: f,
    do: f,
    did: f,
    does: f,
    can: f,
    must: f,
    us: f,
    me: f,
    let: f,
    even: f,
    when: f,
    help: f,
    he: f,
    she: f,
    it: f,
    being: f,
    bi: f,
    co: f,
    contra: f,
    de: f,
    inter: f,
    intra: f,
    mis: f,
    pre: f,
    out: f,
    counter: f,
    nobody: f,
    somebody: f,
    anybody: f,
    everybody: f
  },
  afterWords: {
    the: f,
    me: f,
    you: f,
    him: f,
    us: f,
    her: f,
    them: f,
    it: f,
    himself: f,
    herself: f,
    itself: f,
    myself: f,
    ourselves: f,
    themselves: f,
    something: f,
    anything: f,
    a: f,
    an: f,
    up: f,
    down: f,
    by: f,
    out: f,
    off: f,
    under: f,
    what: f,
    all: f,
    to: f,
    because: f,
    although: f,
    after: f,
    before: f,
    how: f,
    otherwise: f,
    together: f,
    though: f,
    into: f,
    yet: f,
    more: f,
    here: f,
    there: f
  }
}, zg = {
  beforeTags: Object.assign({}, _.beforeTags, E.beforeTags, {}),
  afterTags: Object.assign({}, _.afterTags, E.afterTags, {}),
  beforeWords: Object.assign({}, _.beforeWords, E.beforeWords, {}),
  afterWords: Object.assign({}, _.afterWords, E.afterWords, {})
}, Sg = zg, m = "Adjective", V = {
  beforeTags: {
    Determiner: m,
    Possessive: m,
    Hyphenated: m
  },
  afterTags: {
    Adjective: m
  },
  beforeWords: {
    seem: m,
    seemed: m,
    seems: m,
    feel: m,
    feels: m,
    felt: m,
    stay: m,
    appear: m,
    appears: m,
    appeared: m,
    also: m,
    over: m,
    under: m,
    too: m,
    it: m,
    but: m,
    still: m,
    really: m,
    quite: m,
    well: m,
    very: m,
    how: m,
    deeply: m,
    hella: m,
    profoundly: m,
    extremely: m,
    so: m,
    badly: m,
    mostly: m,
    totally: m,
    awfully: m,
    rather: m,
    nothing: m,
    something: m,
    anything: m,
    not: m,
    me: m,
    is: m
  },
  afterWords: {
    too: m,
    also: m,
    or: m
  }
}, g = "Gerund", Ve = {
  beforeTags: {
    Adverb: g,
    Preposition: g,
    Conjunction: g
  },
  afterTags: {
    Adverb: g,
    Possessive: g,
    Person: g,
    Pronoun: g,
    Determiner: g,
    Copula: g,
    Preposition: g,
    Conjunction: g,
    Comparative: g
  },
  beforeWords: {
    been: g,
    keep: g,
    continue: g,
    stop: g,
    am: g,
    be: g,
    me: g,
    began: g,
    start: g,
    starts: g,
    started: g,
    stops: g,
    stopped: g,
    help: g,
    helps: g,
    avoid: g,
    avoids: g,
    love: g,
    loves: g,
    loved: g,
    hate: g,
    hates: g,
    hated: g
  },
  afterWords: {
    you: g,
    me: g,
    her: g,
    him: g,
    them: g,
    their: g,
    it: g,
    this: g,
    there: g,
    on: g,
    about: g,
    for: g
  }
}, Lg = {
  beforeTags: Object.assign({}, V.beforeTags, Ve.beforeTags, {
    Imperative: "Gerund",
    Infinitive: "Adjective",
    PresentTense: "Gerund",
    Plural: "Gerund"
  }),
  afterTags: Object.assign({}, V.afterTags, Ve.afterTags, {
    Singular: "Adjective"
  }),
  beforeWords: Object.assign({}, V.beforeWords, Ve.beforeWords, {
    is: "Adjective",
    was: "Adjective",
    of: "Adjective",
    suggest: "Gerund",
    recommend: "Gerund"
  }),
  afterWords: Object.assign({}, V.afterWords, Ve.afterWords, {
    to: "Gerund",
    not: "Gerund",
    the: "Gerund"
  })
}, Mg = Lg, Wg = {
  beforeTags: {
    Determiner: void 0,
    Cardinal: "Noun",
    PhrasalVerb: "Adjective"
  }
}, Hg = {
  beforeTags: Object.assign({}, V.beforeTags, E.beforeTags, Wg.beforeTags),
  afterTags: Object.assign({}, V.afterTags, E.afterTags),
  beforeWords: Object.assign({}, V.beforeWords, E.beforeWords, {
    are: "Adjective",
    is: "Adjective",
    was: "Adjective",
    be: "Adjective",
    off: "Adjective",
    out: "Adjective"
  }),
  afterWords: Object.assign({}, V.afterWords, E.afterWords)
}, Jg = Hg;
let y = "PastTense";
const Et = {
  beforeTags: {
    Adverb: y,
    Pronoun: y,
    ProperNoun: y,
    Auxiliary: y,
    Noun: y
  },
  afterTags: {
    Possessive: y,
    Pronoun: y,
    Determiner: y,
    Adverb: y,
    Comparative: y,
    Date: y,
    Gerund: y
  },
  beforeWords: {
    be: y,
    who: y,
    get: "Adjective",
    had: y,
    has: y,
    have: y,
    been: y,
    it: y,
    as: y,
    for: "Adjective"
  },
  afterWords: {
    by: y,
    back: y,
    out: y,
    in: y,
    up: y,
    down: y,
    before: y,
    after: y,
    for: y,
    the: y,
    with: y,
    as: y,
    on: y,
    at: y,
    between: y,
    to: y,
    into: y,
    us: y,
    them: y,
    me: y
  }
}, _g = {
  beforeTags: Object.assign({}, V.beforeTags, Et.beforeTags),
  afterTags: Object.assign({}, V.afterTags, Et.afterTags),
  beforeWords: Object.assign({}, V.beforeWords, Et.beforeWords),
  afterWords: Object.assign({}, V.afterWords, Et.afterWords)
}, qg = {
  afterTags: {
    Noun: "Adjective",
    Conjunction: void 0
  }
}, Kg = {
  beforeTags: Object.assign({}, V.beforeTags, _.beforeTags, {
    Adverb: void 0,
    Negative: void 0
  }),
  afterTags: Object.assign({}, V.afterTags, _.afterTags, qg.afterTags),
  beforeWords: Object.assign({}, V.beforeWords, _.beforeWords, {
    have: void 0,
    had: void 0,
    not: void 0,
    went: "Adjective",
    goes: "Adjective",
    got: "Adjective",
    be: "Adjective"
  }),
  afterWords: Object.assign({}, V.afterWords, _.afterWords, {
    to: void 0,
    as: "Adjective"
  })
}, Ug = Kg, Tt = {
  beforeTags: {
    Copula: "Gerund",
    PastTense: "Gerund",
    PresentTense: "Gerund",
    Infinitive: "Gerund"
  },
  afterTags: {},
  beforeWords: {
    are: "Gerund",
    were: "Gerund",
    be: "Gerund",
    no: "Gerund",
    without: "Gerund",
    you: "Gerund",
    we: "Gerund",
    they: "Gerund",
    he: "Gerund",
    she: "Gerund",
    us: "Gerund",
    them: "Gerund"
  },
  afterWords: {
    the: "Gerund",
    this: "Gerund",
    that: "Gerund",
    me: "Gerund",
    us: "Gerund",
    them: "Gerund"
  }
}, Rg = {
  beforeTags: Object.assign({}, Ve.beforeTags, E.beforeTags, Tt.beforeTags),
  afterTags: Object.assign({}, Ve.afterTags, E.afterTags, Tt.afterTags),
  beforeWords: Object.assign({}, Ve.beforeWords, E.beforeWords, Tt.beforeWords),
  afterWords: Object.assign({}, Ve.afterWords, E.afterWords, Tt.afterWords)
}, Qg = Rg, Re = "Singular", Ge = "Infinitive", Yg = {
  beforeTags: Object.assign({}, _.beforeTags, E.beforeTags, {
    Adjective: Re,
    Particle: Re
  }),
  afterTags: Object.assign({}, _.afterTags, E.afterTags, {
    ProperNoun: Ge,
    Gerund: Ge,
    Adjective: Ge,
    Copula: Re
  }),
  beforeWords: Object.assign({}, _.beforeWords, E.beforeWords, {
    is: Re,
    was: Re,
    of: Re,
    have: null
  }),
  afterWords: Object.assign({}, _.afterWords, E.afterWords, {
    instead: Ge,
    about: Ge,
    his: Ge,
    her: Ge,
    to: null,
    by: null,
    in: null
  })
}, Xg = Yg, w = "Person", G = {
  beforeTags: {
    Honorific: w,
    Person: w
  },
  afterTags: {
    Person: w,
    ProperNoun: w,
    Verb: w
  },
  ownTags: {
    ProperNoun: w
  },
  beforeWords: {
    hi: w,
    hey: w,
    yo: w,
    dear: w,
    hello: w
  },
  afterWords: {
    said: w,
    says: w,
    told: w,
    tells: w,
    feels: w,
    felt: w,
    seems: w,
    thinks: w,
    thought: w,
    spends: w,
    spendt: w,
    plays: w,
    played: w,
    sing: w,
    sang: w,
    learn: w,
    learned: w,
    wants: w,
    wanted: w
  }
}, N = "Month", Ct = {
  beforeTags: {
    Date: N,
    Value: N
  },
  afterTags: {
    Date: N,
    Value: N
  },
  beforeWords: {
    by: N,
    in: N,
    on: N,
    during: N,
    after: N,
    before: N,
    between: N,
    until: N,
    til: N,
    sometime: N,
    of: N,
    this: N,
    next: N,
    last: N,
    previous: N,
    following: N
  },
  afterWords: {
    sometime: N,
    in: N,
    of: N,
    until: N,
    the: N
  }
}, Zg = {
  beforeTags: Object.assign({}, G.beforeTags, Ct.beforeTags),
  afterTags: Object.assign({}, G.afterTags, Ct.afterTags),
  beforeWords: Object.assign({}, G.beforeWords, Ct.beforeWords),
  afterWords: Object.assign({}, G.afterWords, Ct.afterWords)
}, em = {
  beforeTags: Object.assign({}, E.beforeTags, G.beforeTags),
  afterTags: Object.assign({}, E.afterTags, G.afterTags),
  beforeWords: Object.assign({}, E.beforeWords, G.beforeWords, { i: "Infinitive", we: "Infinitive" }),
  afterWords: Object.assign({}, E.afterWords, G.afterWords)
}, tm = em, nm = {
  beforeTags: Object.assign({}, E.beforeTags, G.beforeTags, _.beforeTags),
  afterTags: Object.assign({}, E.afterTags, G.afterTags, _.afterTags),
  beforeWords: Object.assign({}, E.beforeWords, G.beforeWords, _.beforeWords),
  afterWords: Object.assign({}, E.afterWords, G.afterWords, _.afterWords)
}, rm = nm, L = "Place", Dt = {
  beforeTags: {
    Place: L
  },
  afterTags: {
    Place: L,
    Abbreviation: L
  },
  beforeWords: {
    in: L,
    by: L,
    near: L,
    from: L,
    to: L
  },
  afterWords: {
    in: L,
    by: L,
    near: L,
    from: L,
    to: L,
    government: L,
    council: L,
    region: L,
    city: L
  }
}, om = {
  beforeTags: Object.assign({}, Dt.beforeTags, G.beforeTags),
  afterTags: Object.assign({}, Dt.afterTags, G.afterTags),
  beforeWords: Object.assign({}, Dt.beforeWords, G.beforeWords),
  afterWords: Object.assign({}, Dt.afterWords, G.afterWords)
}, am = om, im = {
  beforeTags: Object.assign({}, G.beforeTags, V.beforeTags),
  afterTags: Object.assign({}, G.afterTags, V.afterTags),
  beforeWords: Object.assign({}, G.beforeWords, V.beforeWords),
  afterWords: Object.assign({}, G.afterWords, V.afterWords)
}, sm = im;
let te = "Unit";
const lm = {
  beforeTags: { Value: te },
  afterTags: {},
  beforeWords: {
    per: te,
    every: te,
    each: te,
    square: te,
    cubic: te,
    sq: te,
    metric: te
  },
  afterWords: {
    per: te,
    squared: te,
    cubed: te,
    long: te
  }
}, um = lm, rt = {
  "Actor|Verb": Sg,
  "Adj|Gerund": Mg,
  "Adj|Noun": Jg,
  "Adj|Past": _g,
  "Adj|Present": Ug,
  "Noun|Verb": Xg,
  "Noun|Gerund": Qg,
  "Person|Noun": tm,
  "Person|Date": Zg,
  "Person|Verb": rm,
  "Person|Place": am,
  "Person|Adj": sm,
  "Unit|Noun": um
}, Ot = (e, t) => {
  let n = Object.keys(e).reduce((r, o) => (r[o] = e[o] === "Infinitive" ? "PresentTense" : "Plural", r), {});
  return Object.assign(n, t);
};
rt["Plural|Verb"] = {
  beforeWords: Ot(rt["Noun|Verb"].beforeWords, {
    had: "Plural",
    have: "Plural"
  }),
  afterWords: Ot(rt["Noun|Verb"].afterWords, {
    his: "PresentTense",
    her: "PresentTense",
    its: "PresentTense",
    in: null,
    to: null,
    is: "PresentTense",
    by: "PresentTense"
  }),
  beforeTags: Ot(rt["Noun|Verb"].beforeTags, {
    Conjunction: "PresentTense",
    Noun: void 0,
    ProperNoun: "PresentTense"
  }),
  afterTags: Ot(rt["Noun|Verb"].afterTags, {
    Gerund: "Plural",
    Noun: "PresentTense",
    Value: "PresentTense"
  })
};
const cm = rt, k = "Adjective", M = "Infinitive", Be = "PresentTense", b = "Singular", z = "PastTense", Qe = "Adverb", Y = "Plural", T = "Actor", Ft = "Verb", ne = "Noun", se = "LastName", fo = "Modal", hm = "Place", vn = "Participle", dm = [
  null,
  null,
  {
    ea: b,
    ia: ne,
    ic: k,
    ly: Qe,
    "'n": Ft,
    "'t": Ft
  },
  {
    oed: z,
    ued: z,
    xed: z,
    " so": Qe,
    "'ll": fo,
    "'re": "Copula",
    azy: k,
    eer: ne,
    end: Ft,
    ped: z,
    ffy: k,
    ify: M,
    ing: "Gerund",
    ize: M,
    ibe: M,
    lar: k,
    mum: k,
    nes: Be,
    nny: k,
    ous: k,
    que: k,
    ger: ne,
    ber: ne,
    rol: b,
    sis: b,
    ogy: b,
    oid: b,
    ian: b,
    zes: Be,
    eld: z,
    ken: vn,
    ven: vn,
    ten: vn,
    ect: M,
    ict: M,
    ign: M,
    ful: k,
    bal: k
  },
  {
    amed: z,
    aped: z,
    ched: z,
    lked: z,
    rked: z,
    reed: z,
    nded: z,
    mned: k,
    cted: z,
    dged: z,
    ield: b,
    akis: se,
    cede: M,
    chuk: se,
    czyk: se,
    ects: Be,
    ends: Ft,
    enko: se,
    ette: b,
    iary: b,
    wner: b,
    fies: Be,
    fore: Qe,
    gate: M,
    gone: k,
    ices: Y,
    ints: Y,
    ruct: M,
    ines: Y,
    ions: Y,
    ners: Y,
    pers: Y,
    lers: Y,
    less: k,
    llen: k,
    made: k,
    nsen: se,
    oses: Be,
    ould: fo,
    some: k,
    sson: se,
    ians: Y,
    tion: b,
    tage: ne,
    ique: b,
    tive: k,
    tors: ne,
    vice: b,
    lier: b,
    fier: b,
    wned: z,
    gent: b,
    tist: T,
    pist: T,
    rist: T,
    mist: T,
    yist: T,
    vist: T,
    ists: T,
    lite: b,
    site: b,
    rite: b,
    mite: b,
    bite: b,
    mate: b,
    date: b,
    ndal: b,
    vent: b,
    uist: T,
    gist: T,
    note: b,
    cide: b,
    ence: b,
    wide: k,
    vide: M,
    ract: M,
    duce: M,
    pose: M,
    eive: M,
    lyze: M,
    lyse: M,
    iant: k,
    nary: k,
    erer: T
  },
  {
    elist: T,
    holic: b,
    phite: b,
    tized: z,
    urned: z,
    eased: z,
    ances: Y,
    bound: k,
    ettes: Y,
    fully: Qe,
    ishes: Be,
    ities: Y,
    marek: se,
    nssen: se,
    ology: ne,
    osome: b,
    tment: b,
    ports: Y,
    rough: k,
    tches: Be,
    tieth: "Ordinal",
    tures: Y,
    wards: Qe,
    where: Qe,
    archy: ne,
    pathy: ne,
    opoly: ne,
    embly: ne,
    phate: ne,
    ndent: b,
    scent: b,
    onist: T,
    anist: T,
    alist: T,
    olist: T,
    icist: T,
    ounce: M,
    iable: k,
    borne: k,
    gnant: k,
    inant: k,
    igent: k,
    atory: k,
    rient: b,
    dient: b,
    maker: T
  },
  {
    auskas: se,
    parent: b,
    cedent: b,
    ionary: b,
    cklist: b,
    keeper: T,
    logist: T,
    teenth: "Value",
    worker: T,
    master: T,
    writer: T
  },
  {
    logists: T,
    opoulos: se,
    borough: hm,
    sdottir: se
  }
], X = "Adjective", A = "Noun", ft = "Verb", fm = [
  null,
  null,
  {},
  {
    neo: A,
    bio: A,
    "de-": ft,
    "re-": ft,
    "un-": ft
  },
  {
    anti: A,
    auto: A,
    faux: X,
    hexa: A,
    kilo: A,
    mono: A,
    nano: A,
    octa: A,
    poly: A,
    semi: X,
    tele: A,
    "pro-": X,
    "mis-": ft,
    "dis-": ft,
    "pre-": X
  },
  {
    anglo: A,
    centi: A,
    ethno: A,
    ferro: A,
    grand: A,
    hepta: A,
    hydro: A,
    intro: A,
    macro: A,
    micro: A,
    milli: A,
    nitro: A,
    penta: A,
    quasi: X,
    radio: A,
    tetra: A,
    "omni-": X,
    "post-": X
  },
  {
    pseudo: X,
    "extra-": X,
    "hyper-": X,
    "inter-": X,
    "intra-": X,
    "deca-": X
  },
  {
    electro: A
  }
], j = "Adjective", Vt = "Infinitive", Gt = "PresentTense", be = "Singular", q = "PastTense", po = "Adverb", ve = "Expression", go = "Actor", mo = "Verb", yo = "Noun", Bt = "LastName", pm = {
  a: [
    [/.[aeiou]na$/, yo, "tuna"],
    [/.[oau][wvl]ska$/, Bt],
    [/.[^aeiou]ica$/, be, "harmonica"],
    [/^([hyj]a+)+$/, ve, "haha"]
  ],
  c: [[/.[^aeiou]ic$/, j]],
  d: [
    [/[aeiou](pp|ll|ss|ff|gg|tt|rr|bb|nn|mm)ed$/, q, "popped"],
    [/.[aeo]{2}[bdgmnprvz]ed$/, q, "rammed"],
    [/.[aeiou][sg]hed$/, q, "gushed"],
    [/.[aeiou]red$/, q, "hired"],
    [/.[aeiou]r?ried$/, q, "hurried"],
    [/[^aeiou]ard$/, be, "steward"],
    [/[aeiou][^aeiou]id$/, j, ""],
    [/.[vrl]id$/, j, "livid"],
    [/..led$/, q, "hurled"],
    [/.[iao]sed$/, q, ""],
    [/[aeiou]n?[cs]ed$/, q, ""],
    [/[aeiou][rl]?[mnf]ed$/, q, ""],
    [/[aeiou][ns]?c?ked$/, q, "bunked"],
    [/[aeiou]gned$/, q],
    [/[aeiou][nl]?ged$/, q],
    [/.[tdbwxyz]ed$/, q],
    [/[^aeiou][aeiou][tvx]ed$/, q],
    [/.[cdflmnprstv]ied$/, q, "emptied"]
  ],
  e: [
    [/.[lnr]ize$/, Vt, "antagonize"],
    [/.[^aeiou]ise$/, Vt, "antagonise"],
    [/.[aeiou]te$/, Vt, "bite"],
    [/.[^aeiou][ai]ble$/, j, "fixable"],
    [/.[^aeiou]eable$/, j, "maleable"],
    [/.[ts]ive$/, j, "festive"],
    [/[a-z]-like$/, j, "woman-like"]
  ],
  h: [
    [/.[^aeiouf]ish$/, j, "cornish"],
    [/.v[iy]ch$/, Bt, "..ovich"],
    [/^ug?h+$/, ve, "ughh"],
    [/^uh[ -]?oh$/, ve, "uhoh"],
    [/[a-z]-ish$/, j, "cartoon-ish"]
  ],
  i: [[/.[oau][wvl]ski$/, Bt, "polish-male"]],
  k: [
    [/^(k){2}$/, ve, "kkkk"]
  ],
  l: [
    [/.[gl]ial$/, j, "familial"],
    [/.[^aeiou]ful$/, j, "fitful"],
    [/.[nrtumcd]al$/, j, "natal"],
    [/.[^aeiou][ei]al$/, j, "familial"]
  ],
  m: [
    [/.[^aeiou]ium$/, be, "magnesium"],
    [/[^aeiou]ism$/, be, "schism"],
    [/^[hu]m+$/, ve, "hmm"],
    [/^\d+ ?[ap]m$/, "Date", "3am"]
  ],
  n: [
    [/.[lsrnpb]ian$/, j, "republican"],
    [/[^aeiou]ician$/, go, "musician"],
    [/[aeiou][ktrp]in'$/, "Gerund", "cookin'"]
  ],
  o: [
    [/^no+$/, ve, "noooo"],
    [/^(yo)+$/, ve, "yoo"],
    [/^wo{2,}[pt]?$/, ve, "woop"]
  ],
  r: [
    [/.[bdfklmst]ler$/, "Noun"],
    [/[aeiou][pns]er$/, be],
    [/[^i]fer$/, Vt],
    [/.[^aeiou][ao]pher$/, go],
    [/.[lk]er$/, "Noun"],
    [/.ier$/, "Comparative"]
  ],
  t: [
    [/.[di]est$/, "Superlative"],
    [/.[icldtgrv]ent$/, j],
    [/[aeiou].*ist$/, j],
    [/^[a-z]et$/, mo]
  ],
  s: [
    [/.[^aeiou]ises$/, Gt],
    [/.[rln]ates$/, Gt],
    [/.[^z]ens$/, mo],
    [/.[lstrn]us$/, be],
    [/.[aeiou]sks$/, Gt],
    [/.[aeiou]kes$/, Gt],
    [/[aeiou][^aeiou]is$/, be],
    [/[a-z]'s$/, yo],
    [/^yes+$/, ve]
  ],
  v: [
    [/.[^aeiou][ai][kln]ov$/, Bt]
  ],
  y: [
    [/.[cts]hy$/, j],
    [/.[st]ty$/, j],
    [/.[tnl]ary$/, j],
    [/.[oe]ry$/, be],
    [/[rdntkbhs]ly$/, po],
    [/.(gg|bb|zz)ly$/, j],
    [/...lly$/, po],
    [/.[gk]y$/, j],
    [/[bszmp]{2}y$/, j],
    [/.[ai]my$/, j],
    [/[ea]{2}zy$/, j],
    [/.[^aeiou]ity$/, be]
  ]
}, H = "Verb", I = "Noun", gm = {
  leftTags: [
    ["Adjective", I],
    ["Possessive", I],
    ["Determiner", I],
    ["Adverb", H],
    ["Pronoun", H],
    ["Value", I],
    ["Ordinal", I],
    ["Modal", H],
    ["Superlative", I],
    ["Demonym", I],
    ["Honorific", "Person"]
  ],
  leftWords: [
    ["i", H],
    ["first", I],
    ["it", H],
    ["there", H],
    ["not", H],
    ["because", I],
    ["if", I],
    ["but", I],
    ["who", H],
    ["this", I],
    ["his", I],
    ["when", I],
    ["you", H],
    ["very", "Adjective"],
    ["old", I],
    ["never", H],
    ["before", I],
    ["a", I],
    ["the", I],
    ["been", H]
  ],
  rightTags: [
    ["Copula", I],
    ["PastTense", I],
    ["Conjunction", I],
    ["Modal", I]
  ],
  rightWords: [
    ["there", H],
    ["me", H],
    ["man", "Adjective"],
    ["him", H],
    ["it", H],
    ["were", I],
    ["took", I],
    ["himself", H],
    ["went", I],
    ["who", I],
    ["jr", "Person"]
  ]
}, lt = {
  Comparative: {
    rules: "ig|2ger,ng|2er,hin|3ner,n|1er,ot|2ter,lat|3ter,t|1er,ray|3er,y|ier,ross|4er,im|2mer,m|1er,f|1er,b|1er,er|2,r|1er,p|1er,h|1er,w|1er,k|1er,l|1er,d|1er,e|1r",
    exceptions: "good|better,bad|worse,wet|3ter,lay|3er,neat|4ter,fat|3ter,mad|3der,sad|3der,wide|4r,late|4r,safe|4r,fine|4r,dire|4r,fake|4r,pale|4r,rare|4r,rude|4r,sore|4r",
    rev: "arger|4,esser|5,igger|2,impler|5,reer|3,hinner|3,remier|6,urer|3,aucher|5,almer|3,raver|4,uter|3,iviner|5,erier|4,enuiner|6,rosser|4,uger|3,andomer|5,emoter|5,quarer|5,taler|4,iper|3,hiter|4,rther|5,rmer|2,ayer|2,immer|2,somer|4,amer|3,adder|2,nger|2,fer|1,tler|3,cer|2,ber|1,uer|2,bler|3,tter|1,rer|1,ser|2,per|1,her|1,wer|1,ker|1,ner|1,ler|1,ter|1,der|1,ier|y"
  },
  Gerund: {
    rules: "omoting|4e,haring|3e,ploring|4e,mbining|4e,nviting|4e,belling|3,ntoring|4e,uiding|3e,orging|3e,dhering|4e,alysing|4e,nciling|4e,mpeding|4e,uoting|3e,evoting|4e,nsating|4e,gnoring|4e,roding|3e,iaising|4e,esaling|4e,rowsing|4e,rfering|4e,kating|3e,robing|3e,tponing|4e,mmuting|4e,laning|3e,moking|3e,nfining|4e,nduring|4e,nciting|4e,busing|3e,eleting|4e,esiring|4e,rbating|4e,larging|4e,ploding|4e,haking|3e,hading|3e,biding|3e,udding|2,neating|4e,craping|4e,efuting|4e,thoring|4e,eusing|3e,agining|4e,rekking|3,suading|4e,ubating|4e,ronzing|4e,euvring|4e,bliging|4e,laking|3e,riming|3e,asising|4e,lunging|4e,cilling|3,pinging|4e,hoking|3e,creting|4e,ralling|3,miling|3e,wathing|4e,edoring|4e,odding|2,aloging|4e,rseding|4e,xcusing|4e,halling|3,ialling|3,inuting|4e,xciting|4e,chuting|4e,hrining|4e,eciting|4e,xuding|3e,isusing|4e,uizzing|3,ithing|3e,izzling|4e,haling|3e,dmiring|4e,rsaking|4e,parging|4e,ixating|4e,anuring|4e,iecing|3e,erusing|4e,eething|4e,entring|4e,goating|4e,langing|4e,stining|4e,lescing|4e,erlying|3ie,pleting|4e,ausing|3e,ciding|3e,enging|3e,casing|3e,cising|3e,esiding|4e,uning|2e,delling|3,storing|4e,tiring|3e,leging|3e,piling|3e,tising|3e,ecuting|4e,eduling|4e,uelling|3,liding|3e,uging|2e,celling|3,ubing|2e,laming|3e,ebating|4e,njuring|4e,scaping|4e,truding|4e,chising|4e,vading|3e,shaping|4e,iping|2e,naming|3e,ulging|3e,raking|3e,fling|2e,taping|3e,noting|3e,lading|3e,scaling|4e,riding|3e,rasing|3e,coping|3e,ruling|3e,wining|3e,viding|3e,quiring|4e,velling|3,alyzing|4e,laring|3e,coring|3e,ranging|4e,ousing|3e,puting|3e,vening|3e,idding|2,hining|3e,urging|3e,coding|3e,niting|3e,nelling|3,dising|3e,uising|3e,caring|3e,lapsing|4e,erging|3e,pating|3e,mining|3e,ibuting|4e,coming|3e,paring|3e,taking|3e,hasing|3e,vising|3e,ituting|4e,writing|4e,eezing|3e,piring|3e,luting|3e,voking|3e,iguring|4e,uming|2e,curing|3e,mising|3e,iking|2e,edding|2,luding|3e,suring|3e,rising|3e,ribing|3e,rading|3e,ceding|3e,nsing|2e,kling|2e,fusing|3e,azing|2e,cling|2e,nising|3e,ducing|3e,rcing|2e,gling|2e,easing|3e,uating|3e,lising|3e,lining|3e,mating|3e,mming|1,pling|2e,bbing|1,vating|3e,dling|2e,dating|3e,rsing|2e,dging|2e,tling|2e,turing|3e,icing|2e,acing|2e,gating|3e,gging|1,tating|3e,rring|1,nning|1,uing|1e,bling|2e,iating|3e,cating|3e,aging|2e,osing|2e,ncing|2e,nating|3e,pping|1,lating|3e,tting|1,rating|3e,ving|1e,izing|2e,ing|",
    exceptions: "being|is,using|2e,making|3e,creating|5e,changing|5e,owing|2e,raising|4e,competing|6e,defining|5e,counselling|7,hiring|3e,filing|3e,controlling|7,totalling|5,infringing|7e,citing|3e,dying|1ie,doping|3e,baking|3e,hoping|3e,refining|5e,exchanging|7e,charging|5e,stereotyping|9e,voting|3e,tying|1ie,discharging|8e,basing|3e,lying|1ie,expediting|7e,typing|3e,breathing|6e,framing|4e,boring|3e,dining|3e,firing|3e,hiding|3e,appraising|7e,tasting|4e,waning|3e,distilling|6,baling|3e,boning|3e,faring|3e,honing|3e,wasting|4e,phoning|4e,luring|3e,propelling|6,timing|3e,wading|3e,abating|4e,compelling|6,vying|1ie,fading|3e,biting|3e,zoning|3e,dispelling|6,pasting|4e,praising|5e,telephoning|8e,daring|3e,waking|3e,shoring|4e,gaming|3e,padding|3,rerouting|6e,fringing|5e,braising|5e,coking|3e,recreating|7e,sloping|4e,sunbathing|7e,overcharging|9e,everchanging|9e,patrolling|6,joking|3e,extolling|5,expelling|5,reappraising|9e,wadding|3,gaping|3e,poking|3e,persevering|8e,pining|3e,recordkeeping|10e,landfilling|7,liming|3e,interchanging|10e,toting|3e,roping|3e,wiring|3e,aching|3e,gassing|3,getting|3,travelling|6,putting|3,sitting|3,betting|3,mapping|3,tapping|3,letting|3,hitting|3,tanning|3,netting|3,popping|3,fitting|3,deterring|5,barring|3,banning|3,vetting|3,omitting|4,wetting|3,plotting|4,budding|3,clotting|4,hemming|3,slotting|4,singeing|5,reprogramming|9,jetting|3,kidding|3,befitting|5,podding|3,wedding|3,donning|3,warring|3,penning|3,gutting|3,cueing|3,refitting|5,petting|3,cramming|4,napping|3,tinning|3",
    rev: "lan|3ning,egin|4ning,can|3ning,pan|3ning,hin|3ning,kin|3ning,win|3ning,un|2ning,pin|3ning,n|1ing,ounsel|6ling,otal|4ling,abel|4ling,evel|4ling,ancel|5ling,istil|5ling,xcel|4ling,tencil|6ling,piral|5ling,arshal|6ling,nitial|6ling,hrivel|6ling,xtol|4ling,andfil|6ling,trol|4ling,fuel|4ling,model|5ling,nnel|4ling,pel|3ling,l|1ing,ransfer|7ring,lur|3ring,tir|3ring,tar|3ring,pur|3ring,car|3ring,nfer|4ring,efer|4ring,cur|3ring,r|1ing,ermit|5ting,ransmit|7ting,ommit|5ting,nit|3ting,orget|5ting,abysit|6ting,dmit|4ting,hut|3ting,hat|3ting,utfit|5ting,but|3ting,egret|5ting,llot|4ting,mat|3ting,pot|3ting,lit|3ting,emit|4ting,submit|6ting,pit|3ting,rot|3ting,quit|4ting,cut|3ting,set|3ting,t|1ing,tem|3ming,wim|3ming,kim|3ming,um|2ming,rim|3ming,m|1ing,tep|3ping,wap|3ping,top|3ping,hop|3ping,cap|3ping,rop|3ping,rap|3ping,lap|3ping,ip|2ping,p|1ing,ye|2ing,oe|2ing,ie|ying,ee|2ing,e|ing,hed|3ding,hred|4ding,bed|3ding,bid|3ding,d|1ing,ki|2ing,rek|3king,k|1ing,isc|3ing,echarg|6ing,ng|2ing,g|1ging,uiz|3zing,z|1ing,mb|2ing,rb|2ing,b|1bing,o|1ing,x|1ing,f|1ing,s|1ing,w|1ing,y|1ing,h|1ing"
  },
  Participle: {
    rules: "roken|1ake,hosen|2ose,allen|3,rozen|1eeze,asten|4,engthen|5,essen|3,hrunken|2ink,lain|2y,poken|1eak,tolen|1eal,eaten|3,un|in,itten|2e,gotten|1et,ighten|4,idden|2e,worn|1ear,sen|2,aken|3,ven|2,wn|1,rought|1ing,uilt|3d,urst|4,ealt|3,reamt|4,urt|3,nelt|2el,eapt|3,eft|1ave,eant|3,hot|2ot,pat|1it,et|2,ut|2,it|2,ent|2d,ept|1ep,urned|3,reated|5,eard|3,eld|old,ead|3,lid|3e,old|ell,ped|2ed,pilled|4,ound|ind,ved|2,aid|1y,ug|ig,ung|ing,ade|1ke,hone|1ine,come|4,gone|2,nuck|1eak,unk|ink",
    exceptions: "been|2,bled|3ed,bought|1uy,fed|2ed,fled|3e,flown|2y,fought|1ight,had|2ve,hung|1ang,led|2ad,lit|2ght,met|2et,run|3,sat|1eat,seen|3,sought|1eek,woven|1eave,bet|3,brought|2ing,dealt|4,dived|4,heard|4,left|2ave,made|2ke,read|4,shaved|5,slain|3y",
    rev: "uy|ought,ly|1own,ay|1id,rake|1oken,hoose|2sen,reate|5d,lee|2d,reeze|1ozen,aste|4n,rove|4n,hine|1one,lide|3,hrive|5d,come|4,ite|2ten,ide|2den,se|2n,ake|3n,ive|3n,uild|3t,old|eld,ind|ound,eed|1d,end|2t,urn|3ed,ean|3t,un|2,in|un,urst|4,right|5en,eight|5en,urt|3,eet|1t,hoot|2t,pit|1at,eat|3en,get|1otten,set|3,ut|2,it|2,ream|4t,ig|ug,ang|ung,ing|ung,all|3en,neel|2lt,ell|old,pill|4ed,teal|1olen,eap|3t,eep|1pt,ength|5en,ess|3en,hrink|2unken,neak|1uck,eek|ought,peak|1oken,ink|unk,wear|1orn,go|2ne,w|1n"
  },
  PastTense: {
    rules: "een|1,egan|2in,on|in,pun|1in,ewn|2,ave|ive,poke|1eak,hose|2ose,roke|1eak,roze|1eeze,ode|ide,orbade|3id,hone|1ine,tole|1eal,rose|1ise,woke|1ake,wrote|2ite,made|2ke,came|1ome,ove|ive,ore|ear,elped|3,elcomed|6,hared|4,nvited|5,eclared|6,eard|3,avelled|4,ombined|6,uided|4,etired|5,choed|3,ncelled|4,epeated|5,moked|4,entred|5,dhered|5,esired|5,ompeted|6,erseded|6,ramed|4,qualled|4,iloted|4,stponed|6,uelled|3,opelled|4,gnored|5,xtruded|6,caled|4,ndured|5,lamed|4,quared|5,mpeded|5,rouped|4,efeated|5,robed|4,lid|3e,magined|6,nselled|4,uthored|6,ebuted|4,shrined|6,tialled|4,erfered|6,eaped|3,yped|3,laked|4,tirred|3,ooted|3,leated|4,ncited|5,oubted|4,mpelled|4,nnulled|4,pined|4,ircled|5,ecited|5,reathed|6,nvaded|5,onfided|6,pedited|6,alcined|6,ycotted|5,dmired|5,xcreted|6,ubed|3,taked|4,onfined|6,heated|4,rimed|4,amelled|4,achined|6,litzed|4,xcited|5,xpelled|4,xtolled|4,ouled|3,imicked|4,ivalled|4,eeped|3,naked|4,tyled|4,iased|3,nhaled|5,oeuvred|6,grammed|6,kied|2,miled|4,pited|4,eterred|4,hoked|4,kidded|3,ollided|6,pleted|5,cided|4,plored|5,stored|5,longed|4,filed|4,rbed|2,suaded|5,ciled|4,edded|2,tined|4,phoned|5,fled|3,nited|4,iped|3,hauled|4,treated|5,nnelled|4,basted|5,njured|5,twined|5,uzzed|3,did|1o,odded|2,vided|4,old|ell,pared|4,mbed|2,stood|2and,pired|4,held|1old,vened|4,cored|4,read|4,piled|4,aped|3,gled|3,named|4,arred|2,oated|3,kled|3,ooled|3,uned|3,figured|6,bid|3,ound|ind,oped|2,ibed|3,quired|5,uled|3,oded|3,ceded|4,cured|4,sided|4,voked|4,rled|2,outed|3,mined|4,urred|2,ighted|4,umed|3,sured|4,iked|3,mmed|1,pled|3,fed|1,bbed|1,eled|2,luded|4,aid|1y,ferred|3,tled|3,dled|3,raded|4,oted|3,eed|2,aled|2,lined|4,mped|2,fted|2,lted|2,gged|1,eted|2,xed|1,bled|3,pted|2,tured|4,uted|3,ued|2,iled|2,nned|1,yed|1,rted|2,pped|1,tted|1,wed|1,lled|2,ited|2,med|1,sted|2,ssed|2,ged|2,ved|2,nted|2,ked|1,cted|2,ced|2,ied|y,hed|1,sed|2,ded|1,zed|2,ned|1,red|1,ated|3,ell|all,rought|1ing,hought|1ink,eft|1ave,eant|3,ealt|3,eat|3,hot|2ot,urt|3,eapt|3,elt|1el,went|go,built|4d,at|it,got|1et,ut|2,it|2,et|2,ent|2d,ept|1ep,st|2,truck|2ike,nuck|1eak,tunk|1ink,ank|ink,ook|ake,ug|ig,ang|ing,ung|ing,nderlay|5ie,dezvous|7,wam|1im,drew|2aw,saw|1ee,ew|ow",
    exceptions: "was|is,were|are,had|2ve,led|2ad,met|2et,cited|4,focused|5,sought|1eek,lost|3e,defined|6,died|3,hired|4,bought|1uy,ran|1un,controlled|7,taught|1each,hoped|4,shed|4,refined|6,caught|2tch,flew|2y,owed|3,fought|1ight,fired|4,fed|2ed,pied|3,fared|4,tied|3,fled|3e,cared|4,ate|eat,dyed|3,lit|2ght,winged|4,bred|3ed,pent|3,wired|4,persevered|9,baked|4,dined|4,fined|4,shored|5,hid|3e,padded|3,waned|4,wove|1eave,lied|3,wasted|5,sloped|5,joked|4,ached|4,baled|4,bit|3e,bled|3ed,boned|4,caned|4,dispelled|6,egged|3,hung|1ang,patrolled|6,tasted|5,faked|4,bored|4,eyed|3,gamed|4,gassed|3,pored|4,timed|4,toned|4,zoned|4,poked|4,dared|4,been|2,said|2y,found|1ind,took|1ake,came|1ome,gave|1ive,fell|1all,brought|2ing,rose|1ise,put|3,sent|3d,spent|4d,spoke|2eak,left|2ave,won|1in,told|1ell,meant|4,heard|4,got|1et,arose|2ise,read|4,let|3,hit|3,cost|4,dealt|4,laid|2y,drove|2ive,sat|1it,cast|4,beat|4,lent|3d,sang|1ing,banned|3,jarred|3,wound|1ind,omitted|4,quit|4,slid|4e,rang|1ing,fit|3,rent|3d,bet|3,sank|1ink,reaped|4,manned|3,rode|1ide,rebutted|5,bound|1ind,barred|3,recast|6,netted|3,tanned|3,plotted|4,tore|1ear,spun|2in,pitted|3,shone|2ine,donned|3,dove|1ive,spat|2it,bent|3d,leapt|4,seeped|4,sewn|3,twinned|4,wrung|2ing,deterred|5,blew|2ow",
    rev: "egin|2an,lan|3ned,nderpin|7ned,kin|3ned,hin|3ned,pan|3ned,can|3ned,un|2ned,n|1ed,ecome|2ame,hoose|2se,trike|2uck,lee|2d,trive|2ove,vercome|4ame,reeze|1oze,hake|1ook,nderlie|5ay,istake|3ook,etake|2ook,wake|1oke,write|2ote,make|2de,rtake|2ook,see|1aw,e|1d,elp|3ed,roup|4ed,oop|3ed,velop|5ed,eep|1pt,mp|2ed,p|1ped,hink|1ought,eek|ought,reak|1oke,neak|1uck,tink|1unk,rink|1ank,k|1ed,ommit|5ted,ermit|5ted,oadcast|7,dmit|4ted,hoot|2t,plit|4,hut|3,llot|4ted,nit|3ted,orget|3ot,egret|5ted,hrust|5,ormat|5ted,hat|3ted,lat|3ted,urt|3,cquit|5ted,urst|4,ransmit|7ted,emit|4ted,pot|3ted,cut|3,submit|6ted,set|3,t|1ed,now|1ew,trew|4n,draw|2ew,throw|3ew,grow|2ew,w|1ed,uy|ought,ey|2ed,pay|2id,oy|2ed,ay|2ed,y|ied,ravel|5led,ancel|5led,qual|4led,uel|3led,ounsel|6led,nitial|6led,nnul|4led,namel|5led,xtol|4led,ival|4led,teal|1ole,eel|1lt,trol|4led,sell|1old,nnel|4led,pel|3led,l|1ed,ransfer|7red,pur|3red,lur|3red,tir|3red,par|3red,nfer|4red,wear|1ore,bear|1ore,efer|4red,cur|3red,r|1ed,pread|5,hed|3,rind|1ound,mbed|4ded,reed|2d,hred|4ded,eread|5,orbid|3ade,leed|2d,kid|3ded,build|4t,od|2ded,stand|2ood,hold|1eld,bid|3,d|1ed,cho|3ed,go|went,do|1id,tem|3med,um|2med,rim|3med,kim|3med,wim|1am,lam|3med,m|1ed,lug|3ged,ig|ug,pring|2ang,gg|2ed,ang|ung,long|4ed,og|2ged,ling|1ung,ag|2ged,ub|2bed,ib|2bed,ob|2bed,rb|2ed,ab|2bed,mb|2ed,imic|4ked,dezvous|7,s|1ed,ki|2ed,z|1ed,f|1ed,x|1ed,h|1ed"
  },
  PresentTense: {
    rules: "as|1ve,tudies|3y,mbodies|4y,evies|2y,arties|3y,emedies|4y,mpties|3y,eadies|3y,obbies|3y,ullies|3y,nesties|4y,zzes|2,pies|1y,nies|1y,oes|1,xes|1,plies|2y,ries|1y,shes|2,sses|2,ches|2,fies|1y,s|",
    exceptions: "are|is,focuses|5,relies|3y,flies|2y,gasses|3,has|2ve",
    rev: "uy|2s,oy|2s,ey|2s,ay|2s,y|ies,adio|4s,aboo|4s,o|1es,tograph|7s,erth|4s,gh|2s,h|1es,as|2ses,s|1es,ic|2s,zz|2es,x|1es,f|1s,b|1s,g|1s,m|1s,w|1s,p|1s,k|1s,l|1s,d|1s,n|1s,r|1s,t|1s,e|1s"
  },
  Superlative: {
    rules: "east|4,uthwest|7,ot|2test,it|2test,lat|3test,weet|4test,t|1est,ig|2gest,ng|2est,hin|3nest,n|1est,nner|4most,uter|4most,r|1est,rey|3est,ricey|3iest,y|iest,ross|4est,f|1est,b|1est,m|1est,p|1est,h|1est,w|1est,k|1est,l|1est,d|1est,e|1st",
    exceptions: "good|best,bad|worst,wet|3test,far|1urthest,gay|3est,neat|4test,shy|3est,fat|3test,late|4st,wide|4st,fine|4st,severe|6st,fake|4st,pale|4st,rare|4st,rude|4st,sore|4st,dire|4st",
    rev: "east|4,argest|4,iggest|2,implest|5,afest|3,uthwest|7,hinnest|3,ncerest|5,urthest|ar,ravest|4,utest|3,eriest|4,rossest|4,dsomest|5,ugest|3,riciest|3ey,emotest|5,quarest|5,rangest|5,ipest|3,urest|3,cest|2,ermost|2,fest|1,best|1,amest|3,itest|3,ngest|2,uest|2,yest|1,tlest|3,mest|1,blest|3,sest|2,pest|1,hest|1,ttest|1,west|1,rest|1,kest|1,nest|1,lest|1,test|1,dest|1,iest|y"
  }
}, bo = /^.([0-9]+)/, mm = function(e, t) {
  let n = t.exceptions[e], r = n.match(bo);
  if (r === null)
    return t.exceptions[e];
  let o = Number(r[1]) || 0;
  return e.substr(0, o) + n.replace(bo, "");
}, ym = function(e, t = {}) {
  let n = e[e.length - 1], r = t[n] || [];
  return t[""] && (r = r.concat(t[""])), r;
}, bm = function(e, t, n) {
  if (t.exceptions.hasOwnProperty(e))
    return n && console.log("exception, ", e, t.exceptions[e]), mm(e, t);
  let r = t.rules;
  t.reversed && (r = t.rev), r = ym(e, r);
  for (let o = 0; o < r.length; o += 1) {
    let a = r[o][0];
    if (e.endsWith(a)) {
      n && console.log("rule, ", r[o]);
      let i = new RegExp(a + "$");
      return e.replace(i, r[o][1]);
    }
  }
  return n && console.log(" x - " + e), e;
}, ae = bm, vo = function(e) {
  let t = {};
  return e.forEach((n) => {
    let r = n[0] || "", o = r[r.length - 1] || "";
    t[o] = t[o] || [], t[o].push(n);
  }), t;
}, wo = /^([0-9]+)/, vm = function(e = "", t = "") {
  t = String(t);
  let n = t.match(wo);
  if (n === null)
    return [e, t];
  let r = Number(n[1]) || 0, a = e.substring(0, r) + t.replace(wo, "");
  return [e, a];
}, wn = function(e) {
  const t = /\|/;
  return e.split(/,/).map((n) => {
    let r = n.split(t);
    return vm(r[0], r[1]);
  });
}, wm = function(e = {}) {
  return e = Object.assign({}, e), e.rules = wn(e.rules), e.rules = vo(e.rules), e.rev && (e.rev = wn(e.rev), e.rev = vo(e.rev)), e.exceptions = wn(e.exceptions), e.exceptions = e.exceptions.reduce((t, n) => (t[n[0]] = n[1], t), {}), e;
}, ut = wm, Pm = function(e) {
  return Object.entries(e).reduce((t, n) => (t[n[1]] = n[0], t), {});
}, km = function(e) {
  let { rules: t, exceptions: n, rev: r } = e;
  return n = Pm(n), {
    reversed: !Boolean(e.reversed),
    rules: t,
    exceptions: n,
    rev: r
  };
}, ct = km, bi = ut(lt.PastTense), vi = ut(lt.PresentTense), wi = ut(lt.Gerund), Pi = ut(lt.Participle), Am = ct(bi), $m = ct(vi), Im = ct(wi), xm = ct(Pi), ki = ut(lt.Comparative), Ai = ut(lt.Superlative), Nm = ct(ki), jm = ct(Ai), $i = {
  fromPast: bi,
  fromPresent: vi,
  fromGerund: wi,
  fromParticiple: Pi,
  toPast: Am,
  toPresent: $m,
  toGerund: Im,
  toParticiple: xm,
  toComparative: ki,
  toSuperlative: Ai,
  fromComparative: Nm,
  fromSuperlative: jm
}, Em = [
  [/^[\w.]+@[\w.]+\.[a-z]{2,3}$/, "Email"],
  [/^(https?:\/\/|www\.)+\w+\.[a-z]{2,3}/, "Url", "http.."],
  [/^[a-z0-9./].+\.(com|net|gov|org|ly|edu|info|biz|dev|ru|jp|de|in|uk|br|io|ai)/, "Url", ".com"],
  [/^[PMCE]ST$/, "Timezone", "EST"],
  [/^ma?c'.*/, "LastName", "mc'neil"],
  [/^o'[drlkn].*/, "LastName", "o'connor"],
  [/^ma?cd[aeiou]/, "LastName", "mcdonald"],
  [/^(lol)+[sz]$/, "Expression", "lol"],
  [/^wo{2,}a*h?$/, "Expression", "wooah"],
  [/^(hee?){2,}h?$/, "Expression", "hehe"],
  [/^(un|de|re)\\-[a-z\u00C0-\u00FF]{2}/, "Verb", "un-vite"],
  [/^(m|k|cm|km)\/(s|h|hr)$/, "Unit", "5 k/m"],
  [/^(ug|ng|mg)\/(l|m3|ft3)$/, "Unit", "ug/L"]
], Tm = [
  [/^#[\p{Number}_]*\p{Letter}/u, "HashTag"],
  [/^@\w{2,}$/, "AtMention"],
  [/^([A-Z]\.){2}[A-Z]?/i, ["Acronym", "Noun"], "F.B.I"],
  [/.{3}[lkmnp]in['‘’‛‵′`´]$/, "Gerund", "chillin'"],
  [/.{4}s['‘’‛‵′`´]$/, "Possessive", "flanders'"],
  [/^[\p{Emoji_Presentation}\p{Extended_Pictographic}]/u, "Emoji", "emoji-class"]
], Cm = [
  [/^@1?[0-9](am|pm)$/i, "Time", "3pm"],
  [/^@1?[0-9]:[0-9]{2}(am|pm)?$/i, "Time", "3:30pm"],
  [/^'[0-9]{2}$/, "Year"],
  [/^[012]?[0-9](:[0-5][0-9])(:[0-5][0-9])$/, "Time", "3:12:31"],
  [/^[012]?[0-9](:[0-5][0-9])?(:[0-5][0-9])? ?(am|pm)$/i, "Time", "1:12pm"],
  [/^[012]?[0-9](:[0-5][0-9])(:[0-5][0-9])? ?(am|pm)?$/i, "Time", "1:12:31pm"],
  [/^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}/i, "Date", "iso-date"],
  [/^[0-9]{1,4}-[0-9]{1,2}-[0-9]{1,4}$/, "Date", "iso-dash"],
  [/^[0-9]{1,4}\/[0-9]{1,2}\/([0-9]{4}|[0-9]{2})$/, "Date", "iso-slash"],
  [/^[0-9]{1,4}\.[0-9]{1,2}\.[0-9]{1,4}$/, "Date", "iso-dot"],
  [/^[0-9]{1,4}-[a-z]{2,9}-[0-9]{1,4}$/i, "Date", "12-dec-2019"],
  [/^utc ?[+-]?[0-9]+$/, "Timezone", "utc-9"],
  [/^(gmt|utc)[+-][0-9]{1,2}$/i, "Timezone", "gmt-3"],
  [/^[0-9]{3}-[0-9]{4}$/, "PhoneNumber", "421-0029"],
  [/^(\+?[0-9][ -])?[0-9]{3}[ -]?[0-9]{3}-[0-9]{4}$/, "PhoneNumber", "1-800-"],
  [
    /^[-+]?\p{Currency_Symbol}[-+]?[0-9]+(,[0-9]{3})*(\.[0-9]+)?([kmb]|bn)?\+?$/u,
    ["Money", "Value"],
    "$5.30"
  ],
  [
    /^[-+]?[0-9]+(,[0-9]{3})*(\.[0-9]+)?\p{Currency_Symbol}\+?$/u,
    ["Money", "Value"],
    "5.30£"
  ],
  [/^[-+]?[$£]?[0-9]([0-9,.])+(usd|eur|jpy|gbp|cad|aud|chf|cny|hkd|nzd|kr|rub)$/i, ["Money", "Value"], "$400usd"],
  [/^[-+]?[0-9]+(,[0-9]{3})*(\.[0-9]+)?\+?$/, ["Cardinal", "NumericValue"], "5,999"],
  [/^[-+]?[0-9]+(,[0-9]{3})*(\.[0-9]+)?(st|nd|rd|r?th)$/, ["Ordinal", "NumericValue"], "53rd"],
  [/^\.[0-9]+\+?$/, ["Cardinal", "NumericValue"], ".73th"],
  [/^[-+]?[0-9]+(,[0-9]{3})*(\.[0-9]+)?%\+?$/, ["Percent", "Cardinal", "NumericValue"], "-4%"],
  [/^\.[0-9]+%$/, ["Percent", "Cardinal", "NumericValue"], ".3%"],
  [/^[0-9]{1,4}\/[0-9]{1,4}(st|nd|rd|th)?s?$/, ["Fraction", "NumericValue"], "2/3rds"],
  [/^[0-9.]{1,3}[a-z]{0,2}[-–—][0-9]{1,3}[a-z]{0,2}$/, ["Value", "NumberRange"], "3-4"],
  [/^[0-9]{1,2}(:[0-9][0-9])?(am|pm)? ?[-–—] ?[0-9]{1,2}(:[0-9][0-9])?(am|pm)$/, ["Time", "NumberRange"], "3-4pm"],
  [/^[0-9.]+([a-z°]{1,4})$/, "NumericValue", "9km"]
], Dm = [
  "academy",
  "administration",
  "agence",
  "agences",
  "agencies",
  "agency",
  "airlines",
  "airways",
  "army",
  "assoc",
  "associates",
  "association",
  "assurance",
  "authority",
  "autorite",
  "aviation",
  "bank",
  "banque",
  "board",
  "boys",
  "brands",
  "brewery",
  "brotherhood",
  "brothers",
  "bureau",
  "cafe",
  "co",
  "caisse",
  "capital",
  "care",
  "cathedral",
  "center",
  "centre",
  "chemicals",
  "choir",
  "chronicle",
  "church",
  "circus",
  "clinic",
  "clinique",
  "club",
  "co",
  "coalition",
  "coffee",
  "collective",
  "college",
  "commission",
  "committee",
  "communications",
  "community",
  "company",
  "comprehensive",
  "computers",
  "confederation",
  "conference",
  "conseil",
  "consulting",
  "containers",
  "corporation",
  "corps",
  "corp",
  "council",
  "crew",
  "data",
  "departement",
  "department",
  "departments",
  "design",
  "development",
  "directorate",
  "division",
  "drilling",
  "education",
  "eglise",
  "electric",
  "electricity",
  "energy",
  "ensemble",
  "enterprise",
  "enterprises",
  "entertainment",
  "estate",
  "etat",
  "faculty",
  "federation",
  "financial",
  "fm",
  "foundation",
  "fund",
  "gas",
  "gazette",
  "girls",
  "government",
  "group",
  "guild",
  "herald",
  "holdings",
  "hospital",
  "hotel",
  "hotels",
  "inc",
  "industries",
  "institut",
  "institute",
  "institutes",
  "insurance",
  "international",
  "interstate",
  "investment",
  "investments",
  "investors",
  "journal",
  "laboratory",
  "labs",
  "llc",
  "ltd",
  "limited",
  "machines",
  "magazine",
  "management",
  "marine",
  "marketing",
  "markets",
  "media",
  "memorial",
  "ministere",
  "ministry",
  "military",
  "mobile",
  "motor",
  "motors",
  "musee",
  "museum",
  "news",
  "observatory",
  "office",
  "oil",
  "optical",
  "orchestra",
  "organization",
  "partners",
  "partnership",
  "petrol",
  "petroleum",
  "pharmacare",
  "pharmaceutical",
  "pharmaceuticals",
  "pizza",
  "plc",
  "police",
  "polytechnic",
  "post",
  "power",
  "press",
  "productions",
  "quartet",
  "radio",
  "reserve",
  "resources",
  "restaurant",
  "restaurants",
  "savings",
  "school",
  "securities",
  "service",
  "services",
  "societe",
  "society",
  "sons",
  "subcommittee",
  "syndicat",
  "systems",
  "telecommunications",
  "telegraph",
  "television",
  "times",
  "tribunal",
  "tv",
  "union",
  "university",
  "utilities",
  "workers"
].reduce((e, t) => (e[t] = !0, e), {}), zt = [
  [/([^v])ies$/i, "$1y"],
  [/(ise)s$/i, "$1"],
  [/(kn|[^o]l|w)ives$/i, "$1ife"],
  [/^((?:ca|e|ha|(?:our|them|your)?se|she|wo)l|lea|loa|shea|thie)ves$/i, "$1f"],
  [/^(dwar|handkerchie|hoo|scar|whar)ves$/i, "$1f"],
  [/(antenn|formul|nebul|vertebr|vit)ae$/i, "$1a"],
  [/(octop|vir|radi|nucle|fung|cact|stimul)(i)$/i, "$1us"],
  [/(buffal|tomat|tornad)(oes)$/i, "$1o"],
  [/(ause)s$/i, "$1"],
  [/(ease)s$/i, "$1"],
  [/(ious)es$/i, "$1"],
  [/(ouse)s$/i, "$1"],
  [/(ose)s$/i, "$1"],
  [/(..[aeiu]s)es$/i, "$1"],
  [/(vert|ind|cort)(ices)$/i, "$1ex"],
  [/(matr|append)(ices)$/i, "$1ix"],
  [/([xo]|ch|ss|sh)es$/i, "$1"],
  [/men$/i, "man"],
  [/(n)ews$/i, "$1ews"],
  [/([ti])a$/i, "$1um"],
  [/([^aeiouy]|qu)ies$/i, "$1y"],
  [/(s)eries$/i, "$1eries"],
  [/(m)ovies$/i, "$1ovie"],
  [/(cris|ax|test)es$/i, "$1is"],
  [/(alias|status)es$/i, "$1"],
  [/(ss)$/i, "$1"],
  [/(ic)s$/i, "$1"],
  [/s$/i, ""]
], Om = function(e) {
  return Object.keys(e).reduce((t, n) => (t[e[n]] = n, t), {});
}, Fm = function(e, t) {
  const { irregularPlurals: n } = t.two;
  let r = Om(n);
  if (r.hasOwnProperty(e))
    return r[e];
  for (let o = 0; o < zt.length; o++)
    if (zt[o][0].test(e) === !0)
      return e = e.replace(zt[o][0], zt[o][1]), e;
  return e;
}, Ii = Fm, Vm = function(e, t) {
  let n = [e], r = un(e, t);
  r !== e && n.push(r);
  let o = Ii(e, t);
  return o !== e && n.push(o), n;
}, Gm = { toPlural: un, toSingular: Ii, all: Vm };
let Ut = {
  Gerund: ["ing"],
  Actor: ["erer"],
  Infinitive: [
    "ate",
    "ize",
    "tion",
    "rify",
    "then",
    "ress",
    "ify",
    "age",
    "nce",
    "ect",
    "ise",
    "ine",
    "ish",
    "ace",
    "ash",
    "ure",
    "tch",
    "end",
    "ack",
    "and",
    "ute",
    "ade",
    "ock",
    "ite",
    "ase",
    "ose",
    "use",
    "ive",
    "int",
    "nge",
    "lay",
    "est",
    "ain",
    "ant",
    "ent",
    "eed",
    "er",
    "le",
    "unk",
    "ung",
    "upt",
    "en"
  ],
  PastTense: ["ept", "ed", "lt", "nt", "ew", "ld"],
  PresentTense: [
    "rks",
    "cks",
    "nks",
    "ngs",
    "mps",
    "tes",
    "zes",
    "ers",
    "les",
    "acks",
    "ends",
    "ands",
    "ocks",
    "lays",
    "eads",
    "lls",
    "els",
    "ils",
    "ows",
    "nds",
    "ays",
    "ams",
    "ars",
    "ops",
    "ffs",
    "als",
    "urs",
    "lds",
    "ews",
    "ips",
    "es",
    "ts",
    "ns"
  ],
  Participle: ["ken", "wn"]
};
Ut = Object.keys(Ut).reduce((e, t) => (Ut[t].forEach((n) => e[n] = t), e), {});
const St = Ut, Bm = function(e) {
  let t = e.substring(e.length - 3);
  if (St.hasOwnProperty(t) === !0)
    return St[t];
  let n = e.substring(e.length - 2);
  return St.hasOwnProperty(n) === !0 ? St[n] : e.substring(e.length - 1) === "s" ? "PresentTense" : null;
}, xi = Bm, zm = function(e, t) {
  let n = "", r = {};
  t.one && t.one.prefixes && (r = t.one.prefixes);
  let [o, a] = e.split(/ /);
  return a && r[o] === !0 && (n = o, o = a, a = ""), {
    prefix: n,
    verb: o,
    particle: a
  };
}, Po = {
  are: "be",
  were: "be",
  been: "be",
  is: "be",
  am: "be",
  was: "be",
  be: "be",
  being: "be"
}, Sm = function(e, t, n) {
  const { fromPast: r, fromPresent: o, fromGerund: a, fromParticiple: i } = t.two.models;
  let { prefix: s, verb: l, particle: u } = zm(e, t), c = "";
  if (n || (n = xi(e)), Po.hasOwnProperty(e))
    c = Po[e];
  else if (n === "Participle")
    c = ae(l, i);
  else if (n === "PastTense")
    c = ae(l, r);
  else if (n === "PresentTense")
    c = ae(l, o);
  else if (n === "Gerund")
    c = ae(l, a);
  else
    return e;
  return u && (c += " " + u), s && (c = s + " " + c), c;
}, Rn = Sm, Lm = (e) => / /.test(e) ? e.split(/ /) : [e, ""], Mm = function(e, t) {
  const { toPast: n, toPresent: r, toGerund: o, toParticiple: a } = t.two.models;
  if (e === "be")
    return {
      Infinitive: e,
      Gerund: "being",
      PastTense: "was",
      PresentTense: "is"
    };
  let [i, s] = Lm(e), l = {
    Infinitive: e,
    PastTense: ae(i, n),
    PresentTense: ae(i, r),
    Gerund: ae(i, o),
    FutureTense: "will " + e
  }, u = ae(i, a);
  return u !== e && u !== l.PastTense && (l.Participle = u), s && Object.keys(l).forEach((c) => {
    l[c] += " " + s;
  }), l;
}, fr = Mm, Wm = function(e, t) {
  let n = fr(e, t);
  return delete n.FutureTense, Object.values(n).filter((r) => r);
}, Hm = {
  toInfinitive: Rn,
  conjugate: fr,
  all: Wm
}, pr = function(e, t) {
  const n = t.two.models.toSuperlative;
  return ae(e, n);
}, gr = function(e, t) {
  const n = t.two.models.toComparative;
  return ae(e, n);
}, Jm = function(e, t) {
  const n = t.two.models.fromComparative;
  return ae(e, n);
}, _m = function(e, t) {
  const n = t.two.models.fromSuperlative;
  return ae(e, n);
}, qm = function(e = "", t = []) {
  const n = e.length;
  let r = n <= 6 ? n - 1 : 6;
  for (let o = r; o >= 1; o -= 1) {
    let a = e.substring(n - o, e.length);
    if (t[a.length].hasOwnProperty(a) === !0) {
      let i = e.slice(0, n - o), s = t[a.length][a];
      return i + s;
    }
  }
  return null;
}, mr = qm, v = "ically", Km = /* @__PURE__ */ new Set([
  "analyt" + v,
  "chem" + v,
  "class" + v,
  "clin" + v,
  "crit" + v,
  "ecolog" + v,
  "electr" + v,
  "empir" + v,
  "frant" + v,
  "grammat" + v,
  "ident" + v,
  "ideolog" + v,
  "log" + v,
  "mag" + v,
  "mathemat" + v,
  "mechan" + v,
  "med" + v,
  "method" + v,
  "method" + v,
  "mus" + v,
  "phys" + v,
  "phys" + v,
  "polit" + v,
  "pract" + v,
  "rad" + v,
  "satir" + v,
  "statist" + v,
  "techn" + v,
  "technolog" + v,
  "theoret" + v,
  "typ" + v,
  "vert" + v,
  "whims" + v
]), Um = [
  null,
  {},
  { ly: "" },
  {
    ily: "y",
    bly: "ble",
    ply: "ple"
  },
  {
    ally: "al",
    rply: "rp"
  },
  {
    ually: "ual",
    ially: "ial",
    cally: "cal",
    eally: "eal",
    rally: "ral",
    nally: "nal",
    mally: "mal",
    eeply: "eep",
    eaply: "eap"
  },
  {
    ically: "ic"
  }
], Rm = /* @__PURE__ */ new Set([
  "early",
  "only",
  "hourly",
  "daily",
  "weekly",
  "monthly",
  "yearly",
  "mostly",
  "duly",
  "unduly",
  "especially",
  "undoubtedly",
  "conversely",
  "namely",
  "exceedingly",
  "presumably",
  "accordingly",
  "overly",
  "best",
  "latter",
  "little",
  "long",
  "low"
]), ko = {
  wholly: "whole",
  fully: "full",
  truly: "true",
  gently: "gentle",
  singly: "single",
  customarily: "customary",
  idly: "idle",
  publically: "public",
  quickly: "fast",
  well: "good"
}, Qm = function(e) {
  return e.endsWith("ly") ? Km.has(e) ? e.replace(/ically/, "ical") : Rm.has(e) ? null : ko.hasOwnProperty(e) ? ko[e] : mr(e, Um) || e : null;
}, Ym = Qm, Xm = [
  null,
  {
    y: "ily"
  },
  {
    ly: "ly",
    ic: "ically"
  },
  {
    ial: "ially",
    ual: "ually",
    tle: "tly",
    ble: "bly",
    ple: "ply",
    ary: "arily"
  },
  {},
  {},
  {}
], Ao = {
  cool: "cooly",
  whole: "wholly",
  full: "fully",
  good: "well",
  idle: "idly",
  public: "publicly",
  single: "singly",
  special: "especially"
}, Zm = function(e) {
  if (Ao.hasOwnProperty(e))
    return Ao[e];
  let t = mr(e, Xm);
  return t || e + "ly";
}, Ni = Zm, e0 = [
  null,
  {
    y: "iness"
  },
  {
    le: "ility",
    al: "ality",
    ay: "ayness"
  },
  {
    ial: "y",
    ing: "ment",
    ess: "essness",
    ous: "ousness",
    ive: "ivity",
    ect: "ection"
  },
  {
    ting: "ting",
    ring: "ring",
    cial: "ciality",
    nate: "nation",
    rate: "ration",
    bing: "bingness",
    atic: "acy",
    sing: "se",
    iful: "y",
    ible: "ibility"
  },
  {
    erate: "eration"
  },
  {
    ionate: "ion"
  }
], $o = {
  clean: "cleanliness",
  naive: "naivety",
  dramatic: "drama",
  ironic: "irony",
  deep: "depth",
  automatic: "automation",
  simple: "simplicity",
  boring: "boredom",
  free: "freedom",
  wise: "wisdom",
  fortunate: "fortune",
  gentle: "gentleness",
  quiet: "quiet",
  expensive: "expense",
  offensive: "offence"
}, t0 = /* @__PURE__ */ new Set([
  "terrible",
  "annoying"
]), n0 = function(e) {
  if ($o.hasOwnProperty(e))
    return $o[e];
  if (t0.has(e))
    return null;
  let t = mr(e, e0);
  return t || e + "ness";
}, r0 = n0, o0 = function(e, t) {
  let n = [e];
  return n.push(pr(e, t)), n.push(gr(e, t)), n.push(Ni(e)), n = n.filter((r) => r), n = new Set(n), Array.from(n);
}, a0 = {
  toSuperlative: pr,
  toComparative: gr,
  toAdverb: Ni,
  toNoun: r0,
  fromAdverb: Ym,
  fromSuperlative: _m,
  fromComparative: Jm,
  all: o0
}, i0 = {
  noun: Gm,
  verb: Hm,
  adjective: a0
}, Io = {
  Singular: (e, t, n, r) => {
    let o = r.one.lexicon, a = n.two.transform.noun.toPlural(e, r);
    o[a] || (t[a] = t[a] || "Plural");
  },
  Actor: (e, t, n, r) => {
    let o = r.one.lexicon, a = n.two.transform.noun.toPlural(e, r);
    o[a] || (t[a] = t[a] || ["Plural", "Actor"]);
  },
  Comparable: (e, t, n, r) => {
    let o = r.one.lexicon, { toSuperlative: a, toComparative: i } = n.two.transform.adjective, s = a(e, r);
    o[s] || (t[s] = t[s] || "Superlative");
    let l = i(e, r);
    o[l] || (t[l] = t[l] || "Comparative"), t[e] = "Adjective";
  },
  Demonym: (e, t, n, r) => {
    let o = n.two.transform.noun.toPlural(e, r);
    t[o] = t[o] || ["Demonym", "Plural"];
  },
  Infinitive: (e, t, n, r) => {
    let o = r.one.lexicon, a = n.two.transform.verb.conjugate(e, r);
    Object.entries(a).forEach((i) => {
      !o[i[1]] && !t[i[1]] && (t[i[1]] = i[0]);
    });
  },
  PhrasalVerb: (e, t, n, r) => {
    let o = r.one.lexicon;
    t[e] = ["PhrasalVerb", "Infinitive"];
    let a = r.one._multiCache, [i, s] = e.split(" ");
    o[i] || (t[i] = t[i] || "Infinitive");
    let l = n.two.transform.verb.conjugate(i, r);
    delete l.FutureTense, Object.entries(l).forEach((u) => {
      if (u[0] === "Actor" || u[1] === "")
        return;
      !t[u[1]] && !o[u[1]] && (t[u[1]] = u[0]), a[u[1]] = !0;
      let c = u[1] + " " + s;
      t[c] = t[c] || [u[0], "PhrasalVerb"];
    });
  },
  Multiple: (e, t) => {
    t[e] = ["Multiple", "Cardinal"], t[e + "th"] = ["Multiple", "Ordinal"], t[e + "ths"] = ["Multiple", "Fraction"];
  },
  Cardinal: (e, t) => {
    t[e] = ["TextValue", "Cardinal"];
  },
  Ordinal: (e, t) => {
    t[e] = ["TextValue", "Ordinal"], t[e + "s"] = ["TextValue", "Fraction"];
  }
}, s0 = function(e, t) {
  const { methods: n, model: r } = t;
  let o = {}, a = {};
  return Object.keys(e).forEach((i) => {
    let s = e[i];
    i = i.toLowerCase().trim(), i = i.replace(/'s\b/, "");
    let l = i.split(/ /);
    l.length > 1 && (a[l[0]] = !0), Io.hasOwnProperty(s) === !0 && Io[s](i, o, n, r), o[i] = o[i] || s;
  }), delete o[""], delete o[null], delete o[" "], { lex: o, _multi: a };
}, l0 = s0, u0 = function(e, t) {
  const n = /^[0-9]+$/;
  let r = e[t];
  if (!r)
    return !1;
  const o = /* @__PURE__ */ new Set(["may", "april", "august", "jan"]);
  if (r.normal === "like" || o.has(r.normal) || r.tags.has("Place") || r.tags.has("Date"))
    return !1;
  if (e[t - 1]) {
    let i = e[t - 1];
    if (i.tags.has("Date") || o.has(i.normal) || i.tags.has("Adjective") || r.tags.has("Adjective"))
      return !1;
  }
  let a = r.normal;
  return !((a.length === 1 || a.length === 2 || a.length === 4) && n.test(a));
}, c0 = function(e) {
  const t = /[,:;]/;
  let n = [];
  return e.forEach((r) => {
    let o = 0;
    r.forEach((a, i) => {
      t.test(a.post) && u0(r, i + 1) && (n.push(r.slice(o, i + 1)), o = i + 1);
    }), o < r.length && n.push(r.slice(o, r.length));
  }), n;
}, h0 = c0, xo = {
  e: [
    "mice",
    "louse",
    "antennae",
    "formulae",
    "nebulae",
    "vertebrae",
    "vitae"
  ],
  i: [
    "tia",
    "octopi",
    "viri",
    "radii",
    "nuclei",
    "fungi",
    "cacti",
    "stimuli"
  ],
  n: [
    "men"
  ],
  t: [
    "feet"
  ]
}, d0 = /* @__PURE__ */ new Set([
  "formulas",
  "koalas",
  "israelis",
  "menus"
]), f0 = [
  "bus",
  "mas",
  "was",
  "las",
  "ias",
  "xas",
  "vas",
  "cis",
  "lis",
  "nis",
  "ois",
  "ris",
  "sis",
  "tis",
  "xis",
  "aus",
  "cus",
  "eus",
  "fus",
  "gus",
  "ius",
  "lus",
  "nus",
  "ous",
  "pus",
  "rus",
  "sus",
  "tus",
  "xus",
  "'s",
  "ss"
], p0 = function(e) {
  if (!e || e.length <= 3)
    return !1;
  if (d0.has(e))
    return !0;
  let t = e[e.length - 1];
  return xo.hasOwnProperty(t) ? xo[t].find((n) => e.endsWith(n)) : !(t !== "s" || f0.find((n) => e.endsWith(n)));
}, ji = p0, Qn = {
  two: {
    quickSplit: h0,
    expandLexicon: l0,
    transform: i0,
    looksPlural: ji
  }
}, g0 = function(e) {
  const { irregularPlurals: t } = e.two, { lexicon: n } = e.one;
  return Object.entries(t).forEach((r) => {
    n[r[0]] = n[r[0]] || "Singular", n[r[1]] = n[r[1]] || "Plural";
  }), e;
}, m0 = g0, pt = function(e, t, n) {
  return Object.entries(e.exceptions).reduce((r, o) => (t && (r[o[0]] = t), r[o[1]] = n, r), {});
}, y0 = function(e) {
  let { lexicon: t } = e.one;
  const { toPast: n, toPresent: r, toGerund: o, toSuperlative: a, toComparative: i } = e.two.models;
  let s = {}, l = {};
  return l = pt(n, "Infinitive", "PastTense"), Object.assign(s, l), l = pt(r, "Infinitive", "Verb"), Object.assign(s, l), l = pt(o, "Infinitive", "Gerund"), Object.assign(s, l), l = pt(a, "Adjective", "Superlative"), Object.assign(s, l), l = pt(i, "Adjective", "Comparative"), Object.assign(s, l), e.one.lexicon = Object.assign(s, t), e;
}, b0 = y0;
let Yn = {
  two: { models: $i }
};
const v0 = {
  "Actor|Verb": "Actor",
  "Adj|Gerund": "Adjective",
  "Adj|Noun": "Adjective",
  "Adj|Past": "Adjective",
  "Adj|Present": "Adjective",
  "Noun|Verb": "Singular",
  "Noun|Gerund": "Gerund",
  "Person|Noun": "Noun",
  "Person|Date": "Month",
  "Person|Verb": "FirstName",
  "Person|Place": "Person",
  "Person|Adj": "Adjective",
  "Plural|Verb": "Plural",
  "Unit|Noun": "Noun"
}, Ei = function(e, t) {
  const n = { model: t, methods: Qn };
  let { lex: r, _multi: o } = Qn.two.expandLexicon(e, n);
  return Object.assign(t.one.lexicon, r), Object.assign(t.one._multiCache, o), t;
}, w0 = function(e, t) {
  return Object.keys(e).forEach((n) => {
    e[n] === "Uncountable" && (t.two.uncountable[n] = !0, e[n] = "Uncountable");
  }), t;
}, No = function(e, t, n) {
  let r = fr(e, Yn);
  t[r.PastTense] = t[r.PastTense] || "PastTense", t[r.Gerund] = t[r.Gerund] || "Gerund", n === !0 && (t[r.PresentTense] = t[r.PresentTense] || "PresentTense");
}, P0 = function(e, t, n) {
  let r = pr(e, n);
  t[r] = t[r] || "Superlative";
  let o = gr(e, n);
  t[o] = t[o] || "Comparative";
}, k0 = function(e, t, n) {
  let r = un(e, n);
  t[r] = t[r] || "Plural";
}, A0 = function(e, t) {
  let n = {};
  const r = t.one.lexicon;
  return Object.keys(e).forEach((o) => {
    const a = e[o];
    if (n[o] = v0[a], (a === "Noun|Verb" || a === "Person|Verb" || a === "Actor|Verb") && No(o, r, !1), a === "Adj|Present" && (No(o, r, !0), P0(o, r, t)), a === "Adj|Gerund" || a === "Noun|Gerund") {
      let i = Rn(o, Yn, "Gerund");
      r[i] || (n[i] = "Infinitive");
    }
    if ((a === "Noun|Gerund" || a === "Adj|Noun" || a === "Person|Noun") && k0(o, r, t), a === "Adj|Past") {
      let i = Rn(o, Yn, "PastTense");
      r[i] || (n[i] = "Infinitive");
    }
  }), t = Ei(n, t), t;
}, $0 = function(e) {
  return e = Ei(e.one.lexicon, e), e = w0(e.one.lexicon, e), e = A0(e.two.switches, e), e = b0(e), e = m0(e), e;
}, I0 = $0;
let Xn = {
  one: {
    _multiCache: {},
    lexicon: st
  },
  two: {
    irregularPlurals: yi,
    models: $i,
    suffixPatterns: dm,
    prefixPatterns: fm,
    endsWith: pm,
    neighbours: gm,
    regexNormal: Em,
    regexText: Tm,
    regexNumbers: Cm,
    switches: Un,
    clues: cm,
    uncountable: {},
    orgWords: Dm
  }
};
Xn = I0(Xn);
const x0 = Xn, N0 = function(e, t, n, r) {
  const o = r.methods.one.setTag;
  if (t === 0 && e.length >= 3) {
    const a = /:/;
    if (e[0].post.match(a)) {
      let s = e[1];
      if (s.tags.has("Value") || s.tags.has("Email") || s.tags.has("PhoneNumber"))
        return;
      o([e[0]], "Expression", r, null, "2-punct-colon''");
    }
  }
}, j0 = N0, E0 = function(e, t, n, r) {
  const o = r.methods.one.setTag;
  e[t].post === "-" && e[t + 1] && o([e[t], e[t + 1]], "Hyphenated", r, null, "1-punct-hyphen''");
}, T0 = E0, jo = /^(under|over|mis|re|un|dis|semi)-?/, C0 = function(e, t, n) {
  const r = n.two.switches;
  let o = e[t];
  if (r.hasOwnProperty(o.normal)) {
    o.switch = r[o.normal];
    return;
  }
  if (jo.test(o.normal)) {
    let a = o.normal.replace(jo, "");
    a.length > 3 && r.hasOwnProperty(a) && (o.switch = r[a]);
  }
}, D0 = C0, O0 = (e, t, n = "") => {
  const r = (i) => "\x1B[33m\x1B[3m" + i + "\x1B[0m", o = (i) => "\x1B[3m" + i + "\x1B[0m";
  let a = e.text || "[" + e.implicit + "]";
  typeof t != "string" && t.length > 2 && (t = t.slice(0, 2).join(", #") + " +"), t = typeof t != "string" ? t.join(", #") : t, console.log(` ${r(a).padEnd(24)} \x1B[32m→\x1B[0m #${t.padEnd(22)}  ${o(n)}`);
}, F0 = function(e, t, n) {
  if (!t || t.length === 0)
    return;
  const r = typeof process > "u" || !process.env ? self.env || {} : process.env;
  r && r.DEBUG_TAGS && O0(e, t, n), e.tags = e.tags || /* @__PURE__ */ new Set(), typeof t == "string" ? e.tags.add(t) : t.forEach((o) => e.tags.add(o));
}, O = F0, V0 = [
  "Acronym",
  "Abbreviation",
  "ProperNoun",
  "Uncountable",
  "Possessive",
  "Pronoun",
  "Activity",
  "Honorific"
], G0 = function(e) {
  !e.tags.has("Noun") || e.tags.has("Plural") || e.tags.has("Singular") || e.tags.has("Date") || V0.find((t) => e.tags.has(t)) || (ji(e.normal) ? O(e, "Plural", "3-plural-guess") : O(e, "Singular", "3-singular-guess"));
}, B0 = function(e) {
  let t = e.tags;
  if (t.has("Verb") && t.size === 1) {
    let n = xi(e.normal);
    n && O(e, n, "3-verb-tense-guess");
  }
}, z0 = function(e, t, n) {
  let r = e[t], o = Array.from(r.tags);
  for (let a = 0; a < o.length; a += 1)
    if (n.one.tagSet[o[a]]) {
      let i = n.one.tagSet[o[a]].parents;
      O(r, i, ` -inferred by #${o[a]}`);
    }
  G0(r), B0(r);
}, It = z0, S0 = /^\p{Lu}[\p{Ll}'’]/u, L0 = /[0-9]/, M0 = ["Date", "Month", "WeekDay", "Unit", "Expression"], W0 = /[IVX]/, H0 = /^[IVXLCDM]{2,}$/, J0 = /^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/, _0 = {
  li: !0,
  dc: !0,
  md: !0,
  dm: !0,
  ml: !0
}, q0 = function(e, t, n) {
  let r = e[t];
  r.index = r.index || [0, 0];
  let o = r.index[1], a = r.text || "";
  return o !== 0 && S0.test(a) === !0 && L0.test(a) === !1 ? M0.find((i) => r.tags.has(i)) || r.pre.match(/["']$/) || r.normal === "the" ? null : (It(e, t, n), r.tags.has("Noun") || r.tags.clear(), O(r, "ProperNoun", "2-titlecase"), !0) : a.length >= 2 && H0.test(a) && W0.test(a) && J0.test(a) && !_0[r.normal] ? (O(r, "RomanNumeral", "2-xvii"), !0) : null;
}, K0 = q0, Eo = function(e = "", t = []) {
  const n = e.length;
  let r = 7;
  n <= r && (r = n - 1);
  for (let o = r; o > 1; o -= 1) {
    let a = e.substring(n - o, n);
    if (t[a.length].hasOwnProperty(a) === !0)
      return t[a.length][a];
  }
  return null;
}, U0 = function(e, t, n) {
  let r = e[t];
  if (r.tags.size === 0) {
    let o = Eo(r.normal, n.two.suffixPatterns);
    if (o !== null)
      return O(r, o, "2-suffix"), r.confidence = 0.7, !0;
    if (r.implicit && (o = Eo(r.implicit, n.two.suffixPatterns), o !== null))
      return O(r, o, "2-implicit-suffix"), r.confidence = 0.7, !0;
  }
  return null;
}, R0 = U0, To = /['‘’‛‵′`´]/, Pn = function(e, t) {
  for (let n = 0; n < t.length; n += 1)
    if (t[n][0].test(e) === !0)
      return t[n];
  return null;
}, Q0 = function(e = "", t) {
  let n = e[e.length - 1];
  if (t.hasOwnProperty(n) === !0) {
    let r = t[n] || [];
    for (let o = 0; o < r.length; o += 1)
      if (r[o][0].test(e) === !0)
        return r[o];
  }
  return null;
}, Y0 = function(e, t, n, r) {
  const o = r.methods.one.setTag;
  let { regexText: a, regexNormal: i, regexNumbers: s, endsWith: l } = n.two, u = e[t], c = u.machine || u.normal, h = u.text;
  To.test(u.post) && !To.test(u.pre) && (h += u.post.trim());
  let d = Pn(h, a) || Pn(c, i);
  return !d && /[0-9]/.test(c) && (d = Pn(c, s)), !d && u.tags.size === 0 && (d = Q0(c, l)), d ? (o([u], d[1], r, null, `2-regex-'${d[2] || d[0]}'`), u.confidence = 0.6, !0) : null;
}, X0 = Y0, Z0 = function(e = "", t = []) {
  const n = e.length;
  let r = 7;
  r > n - 3 && (r = n - 3);
  for (let o = r; o > 2; o -= 1) {
    let a = e.substring(0, o);
    if (t[a.length].hasOwnProperty(a) === !0)
      return t[a.length][a];
  }
  return null;
}, e1 = function(e, t, n) {
  let r = e[t];
  if (r.tags.size === 0) {
    let o = Z0(r.normal, n.two.prefixPatterns);
    if (o !== null)
      return O(r, o, "2-prefix"), r.confidence = 0.5, !0;
  }
  return null;
}, t1 = e1, n1 = 1400, r1 = 2100, o1 = /* @__PURE__ */ new Set([
  "in",
  "on",
  "by",
  "until",
  "for",
  "to",
  "during",
  "throughout",
  "through",
  "within",
  "before",
  "after",
  "of",
  "this",
  "next",
  "last",
  "circa",
  "around",
  "post",
  "pre",
  "budget",
  "classic",
  "plan",
  "may"
]), Co = function(e) {
  if (!e)
    return !1;
  let t = e.normal || e.implicit;
  return !!(o1.has(t) || e.tags.has("Date") || e.tags.has("Month") || e.tags.has("WeekDay") || e.tags.has("Year") || e.tags.has("ProperNoun"));
}, Do = function(e) {
  return e ? !!(e.tags.has("Ordinal") || e.tags.has("Cardinal") && e.normal.length < 3 || e.normal === "is" || e.normal === "was") : !1;
}, Oo = function(e) {
  return e && (e.tags.has("Date") || e.tags.has("Month") || e.tags.has("WeekDay") || e.tags.has("Year"));
}, a1 = function(e, t) {
  const n = e[t];
  if (n.tags.has("NumericValue") && n.tags.has("Cardinal") && n.normal.length === 4) {
    let r = Number(n.normal);
    if (r && !isNaN(r) && r > n1 && r < r1) {
      let o = e[t - 1], a = e[t + 1];
      if (Co(o) || Co(a))
        return O(n, "Year", "2-tagYear");
      if (r >= 1920 && r < 2025) {
        if (Do(o) || Do(a))
          return O(n, "Year", "2-tagYear-close");
        if (Oo(e[t - 2]) || Oo(e[t + 2]))
          return O(n, "Year", "2-tagYear-far");
        if (o && (o.tags.has("Determiner") || o.tags.has("Possessive")) && a && a.tags.has("Noun") && !a.tags.has("Plural"))
          return O(n, "Year", "2-tagYear-noun");
      }
    }
  }
  return null;
}, i1 = a1, s1 = function(e, t, n, r) {
  const o = r.methods.one.setTag, a = e[t], i = ["PastTense", "PresentTense", "Auxiliary", "Modal", "Particle"];
  a.tags.has("Verb") && (i.find((l) => a.tags.has(l)) || o([a], "Infinitive", r, null, "2-verb-type''"));
}, l1 = s1, Ti = /^[A-Z]('s|,)?$/, Ci = /^[A-Z-]+$/, Di = /^[A-Z]+s$/, u1 = /([A-Z]\.)+[A-Z]?,?$/, c1 = /[A-Z]{2,}('s|,)?$/, h1 = /([a-z]\.)+[a-z]\.?$/, Oi = {
  I: !0,
  A: !0
}, d1 = {
  la: !0,
  ny: !0,
  us: !0,
  dc: !0,
  gb: !0
}, f1 = function(e, t) {
  let n = e.text;
  if (Ci.test(n) === !1)
    if (n.length > 3 && Di.test(n) === !0)
      n = n.replace(/s$/, "");
    else
      return !1;
  return n.length > 5 || Oi.hasOwnProperty(n) || t.one.lexicon.hasOwnProperty(e.normal) ? !1 : u1.test(n) === !0 || h1.test(n) === !0 || Ti.test(n) === !0 || c1.test(n) === !0;
}, p1 = function(e, t, n) {
  let r = e[t];
  return r.tags.has("RomanNumeral") || r.tags.has("Acronym") ? null : f1(r, n) ? (r.tags.clear(), O(r, ["Acronym", "Noun"], "3-no-period-acronym"), d1[r.normal] === !0 && O(r, "Place", "3-place-acronym"), Di.test(r.text) === !0 && O(r, "Plural", "3-plural-acronym"), !0) : !Oi.hasOwnProperty(r.text) && Ti.test(r.text) ? (r.tags.clear(), O(r, ["Acronym", "Noun"], "3-one-letter-acronym"), !0) : r.tags.has("Organization") && r.text.length <= 3 ? (O(r, "Acronym", "3-org-acronym"), !0) : r.tags.has("Organization") && Ci.test(r.text) && r.text.length <= 6 ? (O(r, "Acronym", "3-titlecase-acronym"), !0) : null;
}, g1 = p1, Fo = function(e, t) {
  if (!e)
    return null;
  let n = t.find((r) => e.normal === r[0]);
  return n ? n[1] : null;
}, Vo = function(e, t) {
  if (!e)
    return null;
  let n = t.find((r) => e.tags.has(r[0]));
  return n ? n[1] : null;
}, m1 = function(e, t, n) {
  const { leftTags: r, leftWords: o, rightWords: a, rightTags: i } = n.two.neighbours;
  let s = e[t];
  if (s.tags.size === 0) {
    let l = null;
    if (l = l || Fo(e[t - 1], o), l = l || Fo(e[t + 1], a), l = l || Vo(e[t - 1], r), l = l || Vo(e[t + 1], i), l)
      return O(s, l, "3-[neighbour]"), It(e, t, n), e[t].confidence = 0.2, !0;
  }
  return null;
}, y1 = m1, b1 = (e) => /^\p{Lu}[\p{Ll}'’]/u.test(e), Go = function(e, t, n) {
  return !e || e.tags.has("FirstName") || e.tags.has("Place") ? !1 : e.tags.has("ProperNoun") || e.tags.has("Organization") || e.tags.has("Acronym") ? !0 : !n && b1(e.text) ? t === 0 ? e.tags.has("Singular") : !0 : !1;
}, v1 = function(e, t, n, r) {
  const o = n.model.two.orgWords, a = n.methods.one.setTag;
  let i = e[t], s = i.machine || i.normal;
  if (o[s] === !0 && Go(e[t - 1], t - 1, r)) {
    a([e[t]], "Organization", n, null, "3-[org-word]");
    for (let l = t; l >= 0 && Go(e[l], l, r); l -= 1)
      a([e[l]], "Organization", n, null, "3-[org-word]");
  }
  return null;
}, w1 = v1, P1 = function(e, t, n) {
  let r = !1, o = e[t].tags;
  (o.size === 0 || o.size === 1 && (o.has("Hyphenated") || o.has("HashTag") || o.has("Prefix"))) && (r = !0), r && (O(e[t], "Noun", "3-[fallback]"), It(e, t, n), e[t].confidence = 0.1);
}, k1 = P1, A1 = /^[A-Z][a-z]/, le = (e, t) => e[t].tags.has("ProperNoun") && A1.test(e[t].text) ? "Noun" : null, Bo = (e, t, n) => t === 0 && !e[1] ? n : null, $1 = function(e, t) {
  return !e[t + 1] && e[t - 1] && e[t - 1].tags.has("Determiner") ? "Noun" : null;
}, I1 = function(e, t, n) {
  return t === 0 && e.length > 3 ? n : null;
}, x1 = {
  "Adj|Gerund": (e, t) => le(e, t),
  "Adj|Noun": (e, t) => le(e, t) || $1(e, t),
  "Actor|Verb": (e, t) => le(e, t),
  "Adj|Past": (e, t) => le(e, t),
  "Adj|Present": (e, t) => le(e, t),
  "Noun|Gerund": (e, t) => le(e, t),
  "Noun|Verb": (e, t) => le(e, t) || Bo(e, t, "Infinitive"),
  "Plural|Verb": (e, t) => le(e, t) || Bo(e, t, "PresentTense") || I1(e, t, "Plural"),
  "Person|Noun": (e, t) => le(e, t),
  "Person|Verb": (e, t) => t !== 0 ? le(e, t) : null,
  "Person|Adj": (e, t) => t === 0 && e.length > 1 || le(e, t) ? "Person" : null
}, zo = x1, yr = typeof process > "u" || !process.env ? self.env || {} : process.env, So = /^(under|over|mis|re|un|dis|semi)-?/, Lo = (e, t) => {
  if (!e || !t)
    return null;
  let n = e.normal || e.implicit, r = null;
  return t.hasOwnProperty(n) && (r = t[n]), r && yr.DEBUG_TAGS && console.log(`
  \x1B[2m\x1B[3m     ↓ - '${n}' \x1B[0m`), r;
}, Mo = (e, t = {}, n) => {
  if (!e || !t)
    return null;
  let o = Array.from(e.tags).sort((a, i) => {
    let s = n[a] ? n[a].parents.length : 0, l = n[i] ? n[i].parents.length : 0;
    return s > l ? -1 : 1;
  }).find((a) => t[a]);
  return o && yr.DEBUG_TAGS && console.log(`  \x1B[2m\x1B[3m      ↓ - '${e.normal || e.implicit}' (#${o})  \x1B[0m`), o = t[o], o;
}, N1 = function(e, t, n, r) {
  if (!n)
    return null;
  const o = r.one.tagSet;
  let a = Lo(e[t + 1], n.afterWords);
  return a = a || Lo(e[t - 1], n.beforeWords), a = a || Mo(e[t - 1], n.beforeTags, o), a = a || Mo(e[t + 1], n.afterTags, o), a;
}, j1 = function(e, t, n) {
  const r = n.model, o = n.methods.one.setTag, { switches: a, clues: i } = r.two, s = e[t];
  let l = s.normal || s.implicit || "";
  if (So.test(l) && !a[l] && (l = l.replace(So, "")), s.switch) {
    let u = s.switch;
    if (s.tags.has("Acronym") || s.tags.has("PhrasalVerb"))
      return;
    let c = N1(e, t, i[u], r);
    zo[u] && (c = zo[u](e, t) || c), c ? (o([s], c, n, null, `3-[switch] (${u})`), It(e, t, r)) : yr.DEBUG_TAGS && console.log(`
 -> X  - '${l}'  : (${u})  `);
  }
}, E1 = j1, T1 = {
  there: !0,
  this: !0,
  it: !0,
  him: !0,
  her: !0,
  us: !0
}, C1 = function(e, t) {
  const n = t.methods.one.setTag, r = t.model.one._multiCache || {};
  let o = e[0];
  if ((o.switch === "Noun|Verb" || o.tags.has("Infinitive")) && e.length >= 2) {
    if (e.length < 4 && !T1[e[1].normal] || !o.tags.has("PhrasalVerb") && r.hasOwnProperty(o.normal))
      return;
    (e[1].tags.has("Noun") || e[1].tags.has("Determiner")) && (!e.slice(1, 3).some((l) => l.tags.has("Verb")) || o.tags.has("#PhrasalVerb")) && n([o], "Imperative", t, null, "3-[imperative]");
  }
}, D1 = C1, O1 = function(e) {
  if (e.filter((n) => !n.tags.has("ProperNoun")).length <= 3)
    return !1;
  const t = /^[a-z]/;
  return e.every((n) => !t.test(n.text));
}, F1 = function(e, t, n) {
  e.forEach((r) => {
    j0(r, 0, t, n);
    for (let o = 0; o < r.length; o += 1)
      ;
  });
}, V1 = function(e, t, n, r) {
  for (let o = 0; o < e.length; o += 1)
    D0(e, o, t), r === !1 && K0(e, o, t), R0(e, o, t), X0(e, o, t, n), t1(e, o, t), i1(e, o);
}, G1 = function(e, t, n, r) {
  for (let o = 0; o < e.length; o += 1) {
    let a = g1(e, o, t);
    It(e, o, t), a = a || y1(e, o, t), a = a || k1(e, o, t);
  }
  for (let o = 0; o < e.length; o += 1)
    w1(e, o, n, r), E1(e, o, n), l1(e, o, t, n), T0(e, o, t, n);
  D1(e, n);
}, B1 = function(e) {
  const { methods: t, model: n, world: r } = e;
  let o = e.docs;
  F1(o, n, r);
  let a = t.two.quickSplit(o);
  for (let i = 0; i < a.length; i += 1) {
    let s = a[i];
    const l = O1(s);
    V1(s, n, r, l), G1(s, n, r, l);
  }
  return a;
}, z1 = B1, Wo = {
  Possessive: (e) => {
    let t = e.machine || e.normal || e.text;
    return t = t.replace(/'s$/, ""), t;
  },
  Plural: (e, t) => {
    let n = e.machine || e.normal || e.text;
    return t.methods.two.transform.noun.toSingular(n, t.model);
  },
  Copula: () => "is",
  PastTense: (e, t) => {
    let n = e.machine || e.normal || e.text;
    return t.methods.two.transform.verb.toInfinitive(n, t.model, "PastTense");
  },
  Gerund: (e, t) => {
    let n = e.machine || e.normal || e.text;
    return t.methods.two.transform.verb.toInfinitive(n, t.model, "Gerund");
  },
  PresentTense: (e, t) => {
    let n = e.machine || e.normal || e.text;
    return e.tags.has("Infinitive") ? n : t.methods.two.transform.verb.toInfinitive(n, t.model, "PresentTense");
  },
  Comparative: (e, t) => {
    let n = e.machine || e.normal || e.text;
    return t.methods.two.transform.adjective.fromComparative(n, t.model);
  },
  Superlative: (e, t) => {
    let n = e.machine || e.normal || e.text;
    return t.methods.two.transform.adjective.fromSuperlative(n, t.model);
  },
  Adverb: (e, t) => {
    const { fromAdverb: n } = t.methods.two.transform.adjective;
    let r = e.machine || e.normal || e.text;
    return n(r);
  }
}, S1 = function(e) {
  const t = e.world, n = Object.keys(Wo);
  e.docs.forEach((r) => {
    for (let o = 0; o < r.length; o += 1) {
      const a = r[o];
      for (let i = 0; i < n.length; i += 1)
        if (a.tags.has(n[i])) {
          const s = Wo[n[i]];
          let l = s(a, t);
          a.normal !== l && (a.root = l);
          break;
        }
    }
  });
}, L1 = S1, Ho = {
  Adverb: "RB",
  Comparative: "JJR",
  Superlative: "JJS",
  Adjective: "JJ",
  TO: "Conjunction",
  Modal: "MD",
  Auxiliary: "MD",
  Gerund: "VBG",
  PastTense: "VBD",
  Participle: "VBN",
  PresentTense: "VBZ",
  Infinitive: "VB",
  Particle: "RP",
  Verb: "VB",
  Pronoun: "PRP",
  Cardinal: "CD",
  Conjunction: "CC",
  Determiner: "DT",
  Preposition: "IN",
  QuestionWord: "WP",
  Expression: "UH",
  Possessive: "POS",
  ProperNoun: "NNP",
  Person: "NNP",
  Place: "NNP",
  Organization: "NNP",
  Singular: "NNP",
  Plural: "NNS",
  Noun: "NN",
  There: "EX"
}, M1 = function(e) {
  if (e.tags.has("ProperNoun") && e.tags.has("Plural"))
    return "NNPS";
  if (e.tags.has("Possessive") && e.tags.has("Pronoun"))
    return "PRP$";
  if (e.normal === "there")
    return "EX";
  if (e.normal === "to")
    return "TO";
  let t = e.tagRank || [];
  for (let n = 0; n < t.length; n += 1)
    if (Ho.hasOwnProperty(t[n]))
      return Ho[t[n]];
  return null;
}, W1 = function(e) {
  e.compute("tagRank"), e.docs.forEach((t) => {
    t.forEach((n) => {
      n.penn = M1(n);
    });
  });
}, H1 = W1, J1 = { preTagger: z1, root: L1, penn: H1 }, kn = ["Person", "Place", "Organization"], _1 = {
  Noun: {
    not: ["Verb", "Adjective", "Adverb", "Value", "Determiner"]
  },
  Singular: {
    is: "Noun",
    not: ["Plural", "Uncountable"]
  },
  ProperNoun: {
    is: "Noun"
  },
  Person: {
    is: "Singular",
    also: ["ProperNoun"],
    not: ["Place", "Organization", "Date"]
  },
  FirstName: {
    is: "Person"
  },
  MaleName: {
    is: "FirstName",
    not: ["FemaleName", "LastName"]
  },
  FemaleName: {
    is: "FirstName",
    not: ["MaleName", "LastName"]
  },
  LastName: {
    is: "Person",
    not: ["FirstName"]
  },
  Honorific: {
    is: "Person",
    not: ["FirstName", "LastName", "Value"]
  },
  Place: {
    is: "Singular",
    not: ["Person", "Organization"]
  },
  Country: {
    is: "Place",
    also: ["ProperNoun"],
    not: ["City"]
  },
  City: {
    is: "Place",
    also: ["ProperNoun"],
    not: ["Country"]
  },
  Region: {
    is: "Place",
    also: ["ProperNoun"]
  },
  Address: {},
  Organization: {
    is: "ProperNoun",
    not: ["Person", "Place"]
  },
  SportsTeam: {
    is: "Organization"
  },
  School: {
    is: "Organization"
  },
  Company: {
    is: "Organization"
  },
  Plural: {
    is: "Noun",
    not: ["Singular", "Uncountable"]
  },
  Uncountable: {
    is: "Noun"
  },
  Pronoun: {
    is: "Noun",
    not: kn
  },
  Actor: {
    is: "Noun",
    not: ["Place", "Organization"]
  },
  Activity: {
    is: "Noun",
    not: ["Person", "Place"]
  },
  Unit: {
    is: "Noun",
    not: kn
  },
  Demonym: {
    is: "Noun",
    also: ["ProperNoun"],
    not: kn
  },
  Possessive: {
    is: "Noun"
  },
  Reflexive: {
    is: "Pronoun"
  }
}, q1 = {
  Verb: {
    not: ["Noun", "Adjective", "Adverb", "Value", "Expression"]
  },
  PresentTense: {
    is: "Verb",
    not: ["PastTense"]
  },
  Infinitive: {
    is: "PresentTense",
    not: ["Gerund"]
  },
  Imperative: {
    is: "Infinitive",
    not: ["PastTense", "Gerund", "Copula"]
  },
  Gerund: {
    is: "PresentTense",
    not: ["Copula"]
  },
  PastTense: {
    is: "Verb",
    not: ["PresentTense", "Gerund"]
  },
  Copula: {
    is: "Verb"
  },
  Modal: {
    is: "Verb",
    not: ["Infinitive"]
  },
  Participle: {
    is: "PastTense"
  },
  Auxiliary: {
    is: "Verb",
    not: ["PastTense", "PresentTense", "Gerund", "Conjunction"]
  },
  PhrasalVerb: {
    is: "Verb"
  },
  Particle: {
    is: "PhrasalVerb",
    not: ["PastTense", "PresentTense", "Copula", "Gerund"]
  },
  Passive: {
    is: "Verb"
  }
}, K1 = {
  Value: {
    not: ["Verb", "Adjective", "Adverb"]
  },
  Ordinal: {
    is: "Value",
    not: ["Cardinal"]
  },
  Cardinal: {
    is: "Value",
    not: ["Ordinal"]
  },
  Fraction: {
    is: "Value",
    not: ["Noun"]
  },
  Multiple: {
    is: "TextValue"
  },
  RomanNumeral: {
    is: "Cardinal",
    not: ["TextValue"]
  },
  TextValue: {
    is: "Value",
    not: ["NumericValue"]
  },
  NumericValue: {
    is: "Value",
    not: ["TextValue"]
  },
  Money: {
    is: "Cardinal"
  },
  Percent: {
    is: "Value"
  }
}, U1 = {
  Date: {
    not: ["Verb", "Adverb", "Adjective"]
  },
  Month: {
    is: "Date",
    also: ["Noun"],
    not: ["Year", "WeekDay", "Time"]
  },
  WeekDay: {
    is: "Date",
    also: ["Noun"]
  },
  Year: {
    is: "Date",
    not: ["RomanNumeral"]
  },
  FinancialQuarter: {
    is: "Date",
    not: "Fraction"
  },
  Holiday: {
    is: "Date",
    also: ["Noun"]
  },
  Season: {
    is: "Date"
  },
  Timezone: {
    is: "Date",
    also: ["Noun"],
    not: ["ProperNoun"]
  },
  Time: {
    is: "Date",
    not: ["AtMention"]
  },
  Duration: {
    is: "Date",
    also: ["Noun"]
  }
}, R1 = ["Noun", "Verb", "Adjective", "Adverb", "Value", "QuestionWord"], Q1 = {
  Adjective: {
    not: ["Noun", "Verb", "Adverb", "Value"]
  },
  Comparable: {
    is: "Adjective"
  },
  Comparative: {
    is: "Adjective"
  },
  Superlative: {
    is: "Adjective",
    not: ["Comparative"]
  },
  NumberRange: {},
  Adverb: {
    not: ["Noun", "Verb", "Adjective", "Value"]
  },
  Determiner: {
    not: ["Noun", "Verb", "Adjective", "Adverb", "QuestionWord", "Conjunction"]
  },
  Conjunction: {
    not: R1
  },
  Preposition: {
    not: ["Noun", "Verb", "Adjective", "Adverb", "QuestionWord", "Determiner"]
  },
  QuestionWord: {
    not: ["Determiner"]
  },
  Currency: {
    is: "Noun"
  },
  Expression: {
    not: ["Noun", "Adjective", "Verb", "Adverb"]
  },
  Abbreviation: {},
  Url: {
    not: ["HashTag", "PhoneNumber", "Verb", "Adjective", "Value", "AtMention", "Email"]
  },
  PhoneNumber: {
    not: ["HashTag", "Verb", "Adjective", "Value", "AtMention", "Email"]
  },
  HashTag: {},
  AtMention: {
    is: "Noun",
    not: ["HashTag", "Email"]
  },
  Emoji: {
    not: ["HashTag", "Verb", "Adjective", "Value", "AtMention"]
  },
  Emoticon: {
    not: ["HashTag", "Verb", "Adjective", "Value", "AtMention"]
  },
  Email: {
    not: ["HashTag", "Verb", "Adjective", "Value", "AtMention"]
  },
  Acronym: {
    not: ["Plural", "RomanNumeral"]
  },
  Negative: {
    not: ["Noun", "Adjective", "Value", "Expression"]
  },
  Condition: {
    not: ["Verb", "Adjective", "Noun", "Value"]
  },
  There: {
    not: ["Verb", "Adjective", "Noun", "Value", "Conjunction", "Preposition"]
  },
  Prefix: {
    not: ["Abbreviation", "Acronym", "ProperNoun"]
  },
  Hyphenated: {}
};
let Y1 = Object.assign({}, _1, q1, K1, U1, Q1);
const X1 = Y1, Z1 = {
  compute: J1,
  methods: Qn,
  model: x0,
  tags: X1,
  hooks: ["preTagger"]
}, ey = /[,)"';:\-–—.…]/, we = function(e, t) {
  if (!e.found)
    return;
  let n = e.termList();
  for (let r = 0; r < n.length - 1; r++) {
    const o = n[r];
    if (ey.test(o.post))
      return;
  }
  n[0].implicit = n[0].normal, n[0].text += t, n[0].normal += t, n.slice(1).forEach((r) => {
    r.implicit = r.normal, r.text = "", r.normal = "";
  });
  for (let r = 0; r < n.length - 1; r++)
    n[r].post = n[r].post.replace(/ /, "");
}, ty = function() {
  let e = this.not("@hasContraction"), t = e.match("(we|they|you) are");
  return we(t, "'re"), t = e.match("(he|she|they|it|we|you) will"), we(t, "'ll"), t = e.match("(he|she|they|it|we) is"), we(t, "'s"), t = e.match("#Person is"), we(t, "'s"), t = e.match("#Person would"), we(t, "'d"), t = e.match("(is|was|had|would|should|could|do|does|have|has|can) not"), we(t, "n't"), t = e.match("(i|we|they) have"), we(t, "'ve"), t = e.match("(would|should|could) have"), we(t, "'ve"), t = e.match("i am"), we(t, "'m"), t = e.match("going to"), this;
}, ny = ty, ry = /^\p{Lu}[\p{Ll}'’]/u, oy = function(e = "") {
  return e = e.replace(/^ *[a-z\u00C0-\u00FF]/, (t) => t.toUpperCase()), e;
}, ay = function(e) {
  class t extends e {
    constructor(r, o, a) {
      super(r, o, a), this.viewType = "Contraction";
    }
    expand() {
      return this.docs.forEach((r) => {
        let o = ry.test(r[0].text);
        r.forEach((a, i) => {
          a.text = a.implicit, delete a.implicit, i < r.length - 1 && a.post === "" && (a.post += " "), a.dirty = !0;
        }), o && (r[0].text = oy(r[0].text));
      }), this.compute("normal"), this;
    }
  }
  e.prototype.contractions = function() {
    let n = this.match("@hasContraction+");
    return new t(this.document, n.pointer);
  }, e.prototype.contract = ny;
}, iy = ay, sy = function(e, t, n) {
  let [r, o] = t;
  !n || n.length === 0 || (n = n.map((a, i) => (a.implicit = a.text, a.machine = a.text, a.pre = "", a.post = "", a.text = "", a.normal = "", a.index = [r, o + i], a)), n[0] && (n[0].pre = e[r][o].pre, n[n.length - 1].post = e[r][o].post, n[0].text = e[r][o].text, n[0].normal = e[r][o].normal), e[r].splice(o, 1, ...n));
}, ly = sy, uy = /'/, cy = (e, t) => e.slice(t + 1, t + 3).some((r) => r.tags.has("PastTense")), hy = function(e, t) {
  let n = e[t].normal.split(uy)[0];
  if (cy(e, t))
    return [n, "has"];
  if (n === "let")
    return [n, "us"];
  if (n === "there") {
    let r = e[t + 1];
    if (r && r.tags.has("Plural"))
      return [n, "are"];
  }
  return [n, "is"];
}, dy = hy, fy = /'/, py = (e, t) => e[t + 1] && e[t + 1].normal == "better" ? !0 : e.slice(t + 1, t + 3).some((r) => r.tags.has("PastTense")), gy = function(e, t) {
  let n = e[t].normal.split(fy)[0];
  return n === "how" || n === "what" ? [n, "did"] : py(e, t) === !0 ? [n, "had"] : [n, "would"];
}, my = gy, yy = function(e, t) {
  for (let n = t - 1; n >= 0; n -= 1)
    if (e[n].tags.has("Noun") || e[n].tags.has("Pronoun") || e[n].tags.has("Plural") || e[n].tags.has("Singular"))
      return e[n];
  return null;
}, by = function(e, t) {
  if (e[t].normal === "ain't" || e[t].normal === "aint") {
    if (e[t + 1] && e[t + 1].normal === "never")
      return ["have"];
    let r = yy(e, t);
    if (r) {
      if (r.normal === "we" || r.normal === "they")
        return ["are", "not"];
      if (r.normal === "i")
        return ["am", "not"];
      if (r.tags && r.tags.has("Plural"))
        return ["are", "not"];
    }
    return ["is", "not"];
  }
  return [e[t].normal.replace(/n't/, ""), "not"];
}, vy = by, wy = {
  that: !0,
  there: !0,
  let: !0,
  here: !0,
  everywhere: !0
}, Py = {
  in: !0,
  by: !0,
  for: !0
}, ky = (e, t) => {
  let n = e[t];
  if (wy.hasOwnProperty(n.machine || n.normal))
    return !1;
  if (n.tags.has("Possessive"))
    return !0;
  if (n.tags.has("QuestionWord") || n.normal === "he's" || n.normal === "she's")
    return !1;
  let r = e[t + 1];
  if (!r)
    return !0;
  if (n.normal === "it's")
    return !!r.tags.has("#Noun");
  if (r.tags.has("Verb"))
    return !!(r.tags.has("Infinitive") || r.tags.has("PresentTense"));
  if (r.tags.has("Noun")) {
    let a = r.machine || r.normal;
    return !(a === "here" || a === "there" || a === "everywhere" || r.tags.has("Possessive") || r.tags.has("ProperNoun") && !n.tags.has("ProperNoun"));
  }
  if (e[t - 1] && Py[e[t - 1].normal] === !0)
    return !0;
  let o = e[t + 2];
  return o && o.tags.has("Noun") && !o.tags.has("Pronoun") ? !0 : (r.tags.has("Adjective") || r.tags.has("Adverb") || r.tags.has("Verb"), !1);
}, Ay = ky, Jo = /'/, $y = function(e) {
  e.forEach((t, n) => {
    t.index && (t.index[1] = n);
  });
}, Iy = function(e, t, n, r) {
  let o = t.update();
  o.document = [e];
  let a = n + r;
  n > 0 && (n -= 1), e[a] && (a += 1), o.ptrs = [[0, n, a]], o.compute(["lexicon", "preTagger"]), $y(e);
}, _o = {
  d: (e, t) => my(e, t),
  t: (e, t) => vy(e, t),
  s: (e, t, n) => Ay(e, t) ? n.methods.one.setTag([e[t]], "Possessive", n, "2-contraction") : dy(e, t)
}, xy = function(e, t) {
  let n = t.fromText(e.join(" "));
  return n.compute("id"), n.docs[0];
}, Ny = (e) => {
  let { world: t, document: n } = e;
  n.forEach((r, o) => {
    for (let a = r.length - 1; a >= 0; a -= 1) {
      if (r[a].implicit)
        return;
      let i = null;
      Jo.test(r[a].normal) === !0 && ([, i] = r[a].normal.split(Jo));
      let s = null;
      if (_o.hasOwnProperty(i) && (s = _o[i](r, a, t)), s) {
        s = xy(s, e), ly(n, [o, a], s), Iy(n[o], e, a, s.length);
        continue;
      }
    }
  });
}, jy = { contractionTwo: Ny }, Ey = {
  compute: jy,
  api: iy,
  hooks: ["contractionTwo"]
}, Ty = [
  { match: "[(all|both)] #Determiner #Noun", group: 0, tag: "Noun", reason: "all-noun" },
  { match: "#Copula [(just|alone)]$", group: 0, tag: "Adjective", reason: "not-adverb" },
  { match: "#Singular is #Adverb? [#PastTense$]", group: 0, tag: "Adjective", reason: "is-filled" },
  { match: "[#PastTense] #Singular is", group: 0, tag: "Adjective", reason: "smoked-poutine" },
  { match: "[#PastTense] #Plural are", group: 0, tag: "Adjective", reason: "baked-onions" },
  { match: "well [#PastTense]", group: 0, tag: "Adjective", reason: "well-made" },
  { match: "#Copula [fucked up?]", group: 0, tag: "Adjective", reason: "swears-adjective" },
  { match: "#Singular (seems|appears) #Adverb? [#PastTense$]", group: 0, tag: "Adjective", reason: "seems-filled" },
  { match: "#Copula #Adjective? [(out|in|through)]$", group: 0, tag: "Adjective", reason: "still-out" },
  { match: "^[#Adjective] (the|your) #Noun", group: 0, notIf: "(all|even)", tag: "Infinitive", reason: "shut-the" },
  { match: "the [said] #Noun", group: 0, tag: "Adjective", reason: "the-said-card" },
  { match: "[#Hyphenated (#Hyphenated && #PastTense)] (#Noun|#Conjunction)", group: 0, tag: "Adjective", notIf: "#Adverb", reason: "faith-based" },
  { match: "[#Hyphenated (#Hyphenated && #Gerund)] (#Noun|#Conjunction)", group: 0, tag: "Adjective", notIf: "#Adverb", reason: "self-driving" },
  { match: "[#PastTense (#Hyphenated && #PhrasalVerb)] (#Noun|#Conjunction)", group: 0, tag: "Adjective", reason: "dammed-up" },
  { match: "(#Hyphenated && #Value) fold", tag: "Adjective", reason: "two-fold" },
  { match: "must (#Hyphenated && #Infinitive)", tag: "Adjective", reason: "must-win" },
  { match: "(#Hyphenated && #Infinitive) #Hyphenated", tag: "Adjective", notIf: "#PhrasalVerb", reason: "vacuum-sealed" },
  { match: "too much", tag: "Adverb Adjective", reason: "bit-4" },
  { match: "a bit much", tag: "Determiner Adverb Adjective", reason: "bit-3" },
  { match: "[(un|contra|extra|inter|intra|macro|micro|mid|mis|mono|multi|pre|sub|tri|ex)] #Adjective", group: 0, tag: ["Adjective", "Prefix"], reason: "un-skilled" }
], Cy = "(dark|bright|flat|light|soft|pale|dead|dim|faux|little|wee|sheer|most|near|good|extra|all)", Dy = [
  { match: "#Adverb [#Adverb] (and|or|then)", group: 0, tag: "Adjective", reason: "kinda-sparkly-and" },
  { match: `[${Cy}] #Adjective`, group: 0, tag: "Adverb", reason: "dark-green" },
  { match: "#Copula [far too] #Adjective", group: 0, tag: "Adverb", reason: "far-too" },
  { match: "#Copula [still] (in|#Gerund|#Adjective)", group: 0, tag: "Adverb", reason: "was-still-walking" }
], Oy = [
  { match: "(a|an) [#Gerund]", group: 0, tag: "Adjective", reason: "a|an" },
  { match: "as [#Gerund] as", group: 0, tag: "Adjective", reason: "as-gerund-as" },
  { match: "more [#Gerund] than", group: 0, tag: "Adjective", reason: "more-gerund-than" },
  { match: "(so|very|extremely) [#Gerund]", group: 0, tag: "Adjective", reason: "so-gerund" },
  { match: "(found|found) it #Adverb? [#Gerund]", group: 0, tag: "Adjective", reason: "found-it-gerund" },
  { match: "a (little|bit|wee) bit? [#Gerund]", group: 0, tag: "Adjective", reason: "a-bit-gerund" },
  { match: "#Gerund [#Gerund]", group: 0, tag: "Adjective", notIf: "(impersonating|practicing|considering|assuming)", reason: "looking-annoying" }
], Fy = [
  { match: "#Determiner [#Adjective] #Copula", group: 0, tag: "Noun", reason: "the-adj-is" },
  { match: "#Adjective [#Adjective] #Copula", group: 0, tag: "Noun", reason: "adj-adj-is" },
  { match: "(his|its) [%Adj|Noun%]", group: 0, tag: "Noun", notIf: "#Hyphenated", reason: "his-fine" },
  { match: "#Copula #Adverb? [all]", group: 0, tag: "Noun", reason: "is-all" },
  { match: "(have|had) [#Adjective] #Preposition .", group: 0, tag: "Noun", reason: "have-fun" },
  { match: "#Gerund (giant|capital|center|zone|application)", tag: "Noun", reason: "brewing-giant" },
  { match: "#Preposition (a|an) [#Adjective]$", group: 0, tag: "Noun", reason: "an-instant" },
  { match: "no [#Adjective] #Modal", group: 0, tag: "Noun", reason: "no-golden" },
  { match: "[brand #Gerund?] new", group: 0, tag: "Adverb", reason: "brand-new" },
  { match: "(#Determiner|#Comparative|new|different) [kind]", group: 0, tag: "Noun", reason: "some-kind" },
  { match: "#Possessive [%Adj|Noun%] #Noun", group: 0, tag: "Adjective", reason: "her-favourite" },
  { match: "must && #Hyphenated .", tag: "Adjective", reason: "must-win" },
  { match: "#Determiner [#Adjective]$", tag: "Noun", notIf: "(this|that|#Comparative|#Superlative)", reason: "the-south" },
  { match: "(#Noun && #Hyphenated) (#Adjective && #Hyphenated)", tag: "Adjective", notIf: "(this|that|#Comparative|#Superlative)", reason: "company-wide" },
  { match: "#Determiner [#Adjective] (#Copula|#Determiner)", notIf: "(#Comparative|#Superlative)", group: 0, tag: "Noun", reason: "the-poor" }
], Vy = [
  { match: "(slowly|quickly) [#Adjective]", group: 0, tag: "Verb", reason: "slowly-adj" },
  { match: "does (#Adverb|not)? [#Adjective]", group: 0, tag: "PresentTense", reason: "does-mean" },
  { match: "[(fine|okay|cool|ok)] by me", group: 0, tag: "Adjective", reason: "okay-by-me" },
  { match: "i (#Adverb|do)? not? [mean]", group: 0, tag: "PresentTense", reason: "i-mean" },
  { match: "will #Adjective", tag: "Auxiliary Infinitive", reason: "will-adj" },
  { match: "#Pronoun [#Adjective] #Determiner #Adjective? #Noun", group: 0, tag: "Verb", reason: "he-adj-the" },
  { match: "#Copula [%Adj|Present%] to #Verb", group: 0, tag: "Verb", reason: "adj-to" },
  { match: "#Copula [#Adjective] (well|badly|quickly|slowly)", group: 0, tag: "Verb", reason: "done-well" },
  { match: "#Adjective and [#Gerund] !#Preposition?", group: 0, tag: "Adjective", reason: "rude-and-x" },
  { match: "#Copula #Adverb? (over|under) [#PastTense]", group: 0, tag: "Adjective", reason: "over-cooked" },
  { match: "#Copula #Adjective+ (and|or) [#PastTense]$", group: 0, tag: "Adjective", reason: "bland-and-overcooked" },
  { match: "got #Adverb? [#PastTense] of", group: 0, tag: "Adjective", reason: "got-tired-of" },
  { match: "(seem|seems|seemed|appear|appeared|appears|feel|feels|felt|sound|sounds|sounded) (#Adverb|#Adjective)? [#PastTense]", group: 0, tag: "Adjective", reason: "felt-loved" },
  { match: "(seem|feel|seemed|felt) [#PastTense #Particle?]", group: 0, tag: "Adjective", reason: "seem-confused" },
  { match: "a (bit|little|tad) [#PastTense #Particle?]", group: 0, tag: "Adjective", reason: "a-bit-confused" },
  { match: "not be [%Adj|Past% #Particle?]", group: 0, tag: "Adjective", reason: "do-not-be-confused" },
  { match: "#Copula just [%Adj|Past% #Particle?]", group: 0, tag: "Adjective", reason: "is-just-right" },
  { match: "as [#Infinitive] as", group: 0, tag: "Adjective", reason: "as-pale-as" },
  { match: "[%Adj|Past%] and #Adjective", group: 0, tag: "Adjective", reason: "faled-and-oppressive" },
  { match: "or [#PastTense] #Noun", group: 0, tag: "Adjective", notIf: "(#Copula|#Pronoun)", reason: "or-heightened-emotion" }
], Gy = [
  { match: "[still] #Adjective", group: 0, tag: "Adverb", reason: "still-advb" },
  { match: "[still] #Verb", group: 0, tag: "Adverb", reason: "still-verb" },
  { match: "[so] #Adjective", group: 0, tag: "Adverb", reason: "so-adv" },
  { match: "[way] #Comparative", group: 0, tag: "Adverb", reason: "way-adj" },
  { match: "[way] #Adverb #Adjective", group: 0, tag: "Adverb", reason: "way-too-adj" },
  { match: "[all] #Verb", group: 0, tag: "Adverb", reason: "all-verb" },
  { match: "#Verb  [like]", group: 0, notIf: "(#Modal|#PhrasalVerb)", tag: "Adverb", reason: "verb-like" },
  { match: "(barely|hardly) even", tag: "Adverb", reason: "barely-even" },
  { match: "[even] #Verb", group: 0, tag: "Adverb", reason: "even-walk" },
  { match: "[even] #Comparative", group: 0, tag: "Adverb", reason: "even-worse" },
  { match: "[even] (#Determiner|#Possessive)", group: 0, tag: "#Adverb", reason: "even-the" },
  { match: "even left", tag: "#Adverb #Verb", reason: "even-left" },
  { match: "[way] #Adjective", group: 0, tag: "#Adverb", reason: "way-over" },
  {
    match: "#PresentTense [(hard|quick|long|bright|slow|fast|backwards|forwards)]",
    notIf: "#Copula",
    group: 0,
    tag: "Adverb",
    reason: "lazy-ly"
  },
  { match: "[much] #Adjective", group: 0, tag: "Adverb", reason: "bit-1" },
  { match: "#Copula [#Adverb]$", group: 0, tag: "Adjective", reason: "is-well" },
  { match: "a [(little|bit|wee) bit?] #Adjective", group: 0, tag: "Adverb", reason: "a-bit-cold" },
  { match: "[(super|pretty)] #Adjective", group: 0, tag: "Adverb", reason: "super-strong" },
  { match: "(become|fall|grow) #Adverb? [#PastTense]", group: 0, tag: "Adjective", reason: "overly-weakened" },
  { match: "(a|an) #Adverb [#Participle] #Noun", group: 0, tag: "Adjective", reason: "completely-beaten" },
  { match: "#Determiner #Adverb? [close]", group: 0, tag: "Adjective", reason: "a-close" },
  { match: "#Gerund #Adverb? [close]", group: 0, tag: "Adverb", reason: "being-close" },
  { match: "(the|those|these|a|an) [#Participle] #Noun", group: 0, tag: "Adjective", reason: "blown-motor" },
  { match: "(#PresentTense|#PastTense) [back]", group: 0, tag: "Adverb", notIf: "(#PhrasalVerb|#Copula)", reason: "charge-back" },
  { match: "#Verb [around]", group: 0, tag: "Adverb", notIf: "#PhrasalVerb", reason: "send-around" },
  { match: "[later] #PresentTense", group: 0, tag: "Adverb", reason: "later-say" }
], By = [
  { match: "#Holiday (day|eve)", tag: "Holiday", reason: "holiday-day" },
  { match: "#Value of #Month", tag: "Date", reason: "value-of-month" },
  { match: "#Cardinal #Month", tag: "Date", reason: "cardinal-month" },
  { match: "#Month #Value to #Value", tag: "Date", reason: "value-to-value" },
  { match: "#Month the #Value", tag: "Date", reason: "month-the-value" },
  { match: "(#WeekDay|#Month) #Value", tag: "Date", reason: "date-value" },
  { match: "#Value (#WeekDay|#Month)", tag: "Date", reason: "value-date" },
  { match: "(#TextValue && #Date) #TextValue", tag: "Date", reason: "textvalue-date" },
  { match: "#Month #NumberRange", tag: "Date", reason: "aug 20-21" },
  { match: "#WeekDay #Month #Ordinal", tag: "Date", reason: "week mm-dd" },
  { match: "#Month #Ordinal #Cardinal", tag: "Date", reason: "mm-dd-yyy" },
  { match: "(#Place|#Demonmym|#Time) (standard|daylight|central|mountain)? time", tag: "Timezone", reason: "std-time" },
  {
    match: "(eastern|mountain|pacific|central|atlantic) (standard|daylight|summer)? time",
    tag: "Timezone",
    reason: "eastern-time"
  },
  { match: "#Time [(eastern|mountain|pacific|central|est|pst|gmt)]", group: 0, tag: "Timezone", reason: "5pm-central" },
  { match: "(central|western|eastern) european time", tag: "Timezone", reason: "cet" }
], zy = [
  { match: "[sun] the #Ordinal", tag: "WeekDay", reason: "sun-the-5th" },
  { match: "[sun] #Date", group: 0, tag: "WeekDay", reason: "sun-feb" },
  { match: "#Date (on|this|next|last|during)? [sun]", group: 0, tag: "WeekDay", reason: "1pm-sun" },
  { match: "(in|by|before|during|on|until|after|of|within|all) [sat]", group: 0, tag: "WeekDay", reason: "sat" },
  { match: "(in|by|before|during|on|until|after|of|within|all) [wed]", group: 0, tag: "WeekDay", reason: "wed" },
  { match: "(in|by|before|during|on|until|after|of|within|all) [march]", group: 0, tag: "Month", reason: "march" },
  { match: "[sat] #Date", group: 0, tag: "WeekDay", reason: "sat-feb" },
  { match: "#Preposition [(march|may)]", group: 0, tag: "Month", reason: "in-month" },
  { match: "(this|next|last) (march|may) !#Infinitive", tag: "#Date #Month", reason: "this-month" },
  { match: "(march|may) the? #Value", tag: "#Month #Date #Date", reason: "march-5th" },
  { match: "#Value of? (march|may)", tag: "#Date #Date #Month", reason: "5th-of-march" },
  { match: "[(march|may)] .? #Date", group: 0, tag: "Month", reason: "march-and-feb" },
  { match: "#Date .? [(march|may)]", group: 0, tag: "Month", reason: "feb-and-march" },
  { match: "#Adverb [(march|may)]", group: 0, tag: "Verb", reason: "quickly-march" },
  { match: "[(march|may)] #Adverb", group: 0, tag: "Verb", reason: "march-quickly" }
], Sy = "(feel|sense|process|rush|side|bomb|bully|challenge|cover|crush|dump|exchange|flow|function|issue|lecture|limit|march|process)", Ly = [
  { match: "(the|any) [more]", group: 0, tag: "Singular", reason: "more-noun" },
  { match: "[more] #Noun", group: 0, tag: "Adjective", reason: "more-noun" },
  { match: "(right|rights) of .", tag: "Noun", reason: "right-of" },
  { match: "a [bit]", group: 0, tag: "Singular", reason: "bit-2" },
  { match: "a [must]", group: 0, tag: "Singular", reason: "must-2" },
  { match: "(we|us) [all]", group: 0, tag: "Noun", reason: "we all" },
  { match: "due to [#Verb]", group: 0, tag: "Noun", reason: "due-to" },
  { match: "some [#Verb] #Plural", group: 0, tag: "Noun", reason: "determiner6" },
  { match: "#Possessive #Ordinal [#PastTense]", group: 0, tag: "Noun", reason: "first-thought" },
  { match: "(the|this|those|these) #Adjective [%Verb|Noun%]", group: 0, tag: "Noun", notIf: "#Copula", reason: "the-adj-verb" },
  { match: "(the|this|those|these) #Adverb #Adjective [#Verb]", group: 0, tag: "Noun", reason: "determiner4" },
  { match: "the [#Verb] #Preposition .", group: 0, tag: "Noun", reason: "determiner1" },
  { match: "(a|an|the) [#Verb] of", group: 0, tag: "Noun", reason: "the-verb-of" },
  { match: "#Determiner #Noun of [#Verb]", group: 0, tag: "Noun", notIf: "#Gerund", reason: "noun-of-noun" },
  { match: "#PastTense #Preposition [#PresentTense]", group: 0, notIf: "#Gerund", tag: "Noun", reason: "ended-in-ruins" },
  { match: "#Conjunction [u]", group: 0, tag: "Pronoun", reason: "u-pronoun-2" },
  { match: "[u] #Verb", group: 0, tag: "Pronoun", reason: "u-pronoun-1" },
  { match: "#Determiner [(western|eastern|northern|southern|central)] #Noun", group: 0, tag: "Noun", reason: "western-line" },
  { match: "(#Singular && @hasHyphen) #PresentTense", tag: "Noun", reason: "hyphen-verb" },
  { match: "is no [#Verb]", group: 0, tag: "Noun", reason: "is-no-verb" },
  { match: "do [so]", group: 0, tag: "Noun", reason: "so-noun" },
  { match: "#Determiner [(shit|damn|hell)]", group: 0, tag: "Noun", reason: "swears-noun" },
  { match: "to [(shit|hell)]", group: 0, tag: "Noun", reason: "to-swears" },
  { match: "(the|these) [#Singular] (were|are)", group: 0, tag: "Plural", reason: "singular-were" },
  { match: "a #Noun+ or #Adverb+? [#Verb]", group: 0, tag: "Noun", reason: "noun-or-noun" },
  { match: "(the|those|these|a|an) #Adjective? [#PresentTense #Particle?]", group: 0, tag: "Noun", notIf: "(seem|appear|include|#Gerund|#Copula)", reason: "det-inf" },
  { match: "#Noun #Actor", tag: "Actor", notIf: "#Person", reason: "thing-doer" },
  { match: "#Gerund #Actor", tag: "Actor", reason: "gerund-doer" },
  { match: "co #Singular", tag: "Actor", reason: "co-noun" },
  { match: "[#Noun+] #Actor", group: 0, tag: "Actor", notIf: "#Honorific", reason: "air-traffic-controller" },
  { match: "(urban|cardiac|cardiovascular|respiratory|medical|clinical|visual|graphic|creative|dental|exotic|fine|certified|registered|technical|virtual|professional|amateur|junior|senior|special|pharmaceutical|theoretical)+ #Noun? #Actor", tag: "Actor", reason: "fine-artist" },
  { match: "#Noun+ (coach|chef|king|engineer|fellow|personality|boy|girl|man|woman)", tag: "Actor", reason: "dance-coach" },
  { match: "chief . officer", tag: "Actor", reason: "chief-x-officer" },
  { match: "chief of #Noun+", tag: "Actor", reason: "chief-of-police" },
  { match: "senior? vice? president of #Noun+", tag: "Actor", reason: "president-of" },
  { match: "#Determiner [sun]", group: 0, tag: "Singular", reason: "the-sun" },
  { match: "#Verb (a|an) [#Value]$", group: 0, tag: "Singular", reason: "did-a-value" },
  { match: "the [(can|will|may)]", group: 0, tag: "Singular", reason: "the can" },
  { match: "#FirstName #Acronym? (#Possessive && #LastName)", tag: "Possessive", reason: "name-poss" },
  { match: "#Organization+ #Possessive", tag: "Possessive", reason: "org-possessive" },
  { match: "#Place+ #Possessive", tag: "Possessive", reason: "place-possessive" },
  { match: "#Possessive #PresentTense #Particle?", notIf: "(#Gerund|her)", tag: "Noun", reason: "possessive-verb" },
  { match: "(my|our|their|her|his|its) [(#Plural && #Actor)] #Noun", tag: "Possessive", reason: "my-dads" },
  { match: "#Value of a [second]", group: 0, unTag: "Value", tag: "Singular", reason: "10th-of-a-second" },
  { match: "#Value [seconds]", group: 0, unTag: "Value", tag: "Plural", reason: "10-seconds" },
  { match: "in [#Infinitive]", group: 0, tag: "Singular", reason: "in-age" },
  { match: "a [#Adjective] #Preposition", group: 0, tag: "Noun", reason: "a-minor-in" },
  { match: "#Determiner [#Singular] said", group: 0, tag: "Actor", reason: "the-actor-said" },
  { match: `#Determiner #Noun [${Sy}] !(#Preposition|to|#Adverb)?`, group: 0, tag: "Noun", reason: "the-noun-sense" },
  { match: "[#PresentTense] (of|by|for) (a|an|the) #Noun #Copula", group: 0, tag: "Plural", reason: "photographs-of" },
  { match: "#Infinitive and [%Noun|Verb%]", group: 0, tag: "Infinitive", reason: "fight and win" },
  { match: "#Noun and [#Verb] and #Noun", group: 0, tag: "Noun", reason: "peace-and-flowers" },
  { match: "the #Cardinal [%Adj|Noun%]", group: 0, tag: "Noun", reason: "the-1992-classic" },
  { match: "#Copula the [%Adj|Noun%] #Noun", group: 0, tag: "Adjective", reason: "the-premier-university" },
  { match: "i #Verb [me] #Noun", group: 0, tag: "Possessive", reason: "scottish-me" },
  { match: "[#PresentTense] (music|class|lesson|night|party|festival|league|ceremony)", group: 0, tag: "Noun", reason: "dance-music" }
], My = [
  { match: "(this|that|the|a|an) [#Gerund #Infinitive]", group: 0, tag: "Singular", reason: "the-planning-process" },
  { match: "(that|the) [#Gerund #PresentTense]", group: 0, ifNo: "#Copula", tag: "Plural", reason: "the-paving-stones" },
  { match: "#Determiner [#Gerund] #Noun", group: 0, tag: "Adjective", reason: "the-gerund-noun" },
  { match: "#Pronoun #Infinitive [#Gerund] #PresentTense", group: 0, tag: "Noun", reason: "tipping-sucks" },
  { match: "#Adjective [#Gerund]", group: 0, tag: "Noun", notIf: "(still|even|just)", reason: "early-warning" },
  { match: "[#Gerund] #Adverb? not? #Copula", group: 0, tag: "Activity", reason: "gerund-copula" },
  { match: "[#Gerund] #Modal", group: 0, tag: "Activity", reason: "gerund-modal" },
  { match: "#Singular for [%Noun|Gerund%]", group: 0, tag: "Gerund", reason: "noun-for-gerund" },
  { match: "#Comparative (for|at) [%Noun|Gerund%]", group: 0, tag: "Gerund", reason: "better-for-gerund" },
  { match: "#PresentTense the [#Gerund]", group: 0, tag: "Noun", reason: "keep-the-touching" }
], Wy = [
  { match: "#Infinitive (this|that|the) [#Infinitive]", group: 0, tag: "Noun", reason: "do-this-dance" },
  { match: "#Gerund #Determiner [#Infinitive]", group: 0, tag: "Noun", reason: "running-a-show" },
  { match: "#Determiner (only|further|just|more|backward) [#Infinitive]", group: 0, tag: "Noun", reason: "the-only-reason" },
  { match: "(the|this|a|an) [#Infinitive] #Adverb? #Verb", group: 0, tag: "Noun", reason: "determiner5" },
  { match: "#Determiner #Adjective #Adjective? [#Infinitive]", group: 0, tag: "Noun", reason: "a-nice-inf" },
  { match: "#Determiner #Demonym [#PresentTense]", group: 0, tag: "Noun", reason: "mexican-train" },
  { match: "#Adjective #Noun+ [#Infinitive] #Copula", group: 0, tag: "Noun", reason: "career-move" },
  { match: "at some [#Infinitive]", group: 0, tag: "Noun", reason: "at-some-inf" },
  { match: "(go|goes|went) to [#Infinitive]", group: 0, tag: "Noun", reason: "goes-to-verb" },
  { match: "(a|an) #Adjective? #Noun [#Infinitive] (#Preposition|#Noun)", group: 0, tag: "Noun", reason: "a-noun-inf" },
  { match: "(a|an) #Noun [#Infinitive]$", group: 0, tag: "Noun", reason: "a-noun-inf2" },
  { match: "#Gerund #Adjective? for [#Infinitive]", group: 0, tag: "Noun", reason: "running-for" },
  { match: "#Gerund #Adjective to [#Infinitive]", group: 0, tag: "Noun", reason: "running-to" },
  { match: "about [#Infinitive]", group: 0, tag: "Singular", reason: "about-love" },
  { match: "#Plural on [#Infinitive]", group: 0, tag: "Noun", reason: "on-stage" },
  { match: "any [#Infinitive]", group: 0, tag: "Noun", reason: "any-charge" },
  { match: "no [#Infinitive]", group: 0, tag: "Noun", reason: "no-doubt" },
  { match: "number of [#PresentTense]", group: 0, tag: "Noun", reason: "number-of-x" },
  { match: "(taught|teaches|learns|learned) [#PresentTense]", group: 0, tag: "Noun", reason: "teaches-x" },
  { match: "(try|use|attempt|build|make) [#Verb #Particle?]", notIf: "(#Copula|#Noun|sure|fun|up)", group: 0, tag: "Noun", reason: "do-verb" },
  { match: "^[#Infinitive] (is|was)", group: 0, tag: "Noun", reason: "checkmate-is" },
  { match: "#Infinitive much [#Infinitive]", group: 0, tag: "Noun", reason: "get-much" },
  { match: "[cause] #Pronoun #Verb", group: 0, tag: "Conjunction", reason: "cause-cuz" },
  { match: "the #Singular [#Infinitive] #Noun", group: 0, tag: "Noun", notIf: "#Pronoun", reason: "cardio-dance" },
  { match: "#Determiner #Modal [#Noun]", group: 0, tag: "PresentTense", reason: "should-smoke" },
  { match: "(this|that) [#Plural]", group: 0, tag: "PresentTense", notIf: "#Preposition", reason: "this-verbs" },
  {
    match: "(let|make|made) (him|her|it|#Person|#Place|#Organization)+ [#Singular] (a|an|the|it)",
    group: 0,
    tag: "Infinitive",
    reason: "let-him-glue"
  },
  { match: "#Verb (all|every|each|most|some|no) [#PresentTense]", notIf: "#Modal", group: 0, tag: "Noun", reason: "all-presentTense" },
  { match: "(had|have|#PastTense) #Adjective [#PresentTense]", group: 0, tag: "Noun", notIf: "better", reason: "adj-presentTense" },
  { match: "#Value #Adjective [#PresentTense]", group: 0, tag: "Noun", notIf: "#Copula", reason: "one-big-reason" },
  { match: "#PastTense #Adjective+ [#PresentTense]", group: 0, tag: "Noun", notIf: "(#Copula|better)", reason: "won-wide-support" },
  { match: "(many|few|several|couple) [#PresentTense]", group: 0, tag: "Noun", notIf: "#Copula", reason: "many-poses" },
  { match: "#Determiner #Adverb #Adjective [%Noun|Verb%]", group: 0, tag: "Noun", notIf: "#Copula", reason: "very-big-dream" },
  { match: "from #Noun to [%Noun|Verb%]", group: 0, tag: "Noun", reason: "start-to-finish" },
  { match: "(for|with|of) #Noun (and|or|not) [%Noun|Verb%]", group: 0, tag: "Noun", notIf: "#Pronoun", reason: "for-food-and-gas" },
  { match: "#Adjective #Adjective [#PresentTense]", group: 0, tag: "Noun", notIf: "#Copula", reason: "adorable-little-store" },
  { match: "#Gerund #Adverb? #Comparative [#PresentTense]", group: 0, tag: "Noun", notIf: "#Copula", reason: "higher-costs" },
  { match: "(#Noun && @hasComma) #Noun (and|or) [#PresentTense]", group: 0, tag: "Noun", notIf: "#Copula", reason: "noun-list" },
  { match: "(many|any|some|several) [#PresentTense] for", group: 0, tag: "Noun", reason: "any-verbs-for" },
  { match: "to #PresentTense #Noun [#PresentTense] #Preposition", group: 0, tag: "Noun", reason: "gas-exchange" },
  { match: "#PastTense (until|as|through|without) [#PresentTense]", group: 0, tag: "Noun", reason: "waited-until-release" },
  { match: "#Gerund like #Adjective? [#PresentTense]", group: 0, tag: "Plural", reason: "like-hot-cakes" },
  { match: "some #Adjective [#PresentTense]", group: 0, tag: "Noun", reason: "some-reason" },
  { match: "for some [#PresentTense]", group: 0, tag: "Noun", reason: "for-some-reason" },
  { match: "(same|some|the|that|a) kind of [#PresentTense]", group: 0, tag: "Noun", reason: "some-kind-of" },
  { match: "(same|some|the|that|a) type of [#PresentTense]", group: 0, tag: "Noun", reason: "some-type-of" },
  { match: "#Gerund #Adjective #Preposition [#PresentTense]", group: 0, tag: "Noun", reason: "doing-better-for-x" },
  { match: "(get|got|have) #Comparative [#PresentTense]", group: 0, tag: "Noun", reason: "got-better-aim" },
  { match: "whose [#PresentTense] #Copula", group: 0, tag: "Noun", reason: "whos-name-was" },
  { match: "#PhrasalVerb #Particle #Preposition [#PresentTense]", group: 0, tag: "Noun", reason: "given-up-on-x" },
  { match: "there (are|were) #Adjective? [#PresentTense]", group: 0, tag: "Plural", reason: "there-are" },
  { match: "#Value [#PresentTense] of", group: 0, notIf: "(one|1|#Copula|#Infinitive)", tag: "Plural", reason: "2-trains" },
  { match: "[#PresentTense] (are|were) #Adjective", group: 0, tag: "Plural", reason: "compromises-are-possible" },
  { match: "^[(hope|guess|thought|think)] #Pronoun #Verb", group: 0, tag: "Infinitive", reason: "suppose-i" },
  { match: "#Possessive #Adjective [#Verb]", group: 0, tag: "Noun", notIf: "#Copula", reason: "our-full-support" },
  { match: "[(tastes|smells)] #Adverb? #Adjective", group: 0, tag: "PresentTense", reason: "tastes-good" },
  { match: "#Copula #Gerund [#PresentTense] !by?", group: 0, tag: "Noun", notIf: "going", reason: "ignoring-commute" },
  { match: "#Determiner #Adjective? [(shed|thought|rose|bid|saw|spelt)]", group: 0, tag: "Noun", reason: "noun-past" },
  { match: "how to [%Noun|Verb%]", group: 0, tag: "Infinitive", reason: "how-to-noun" },
  { match: "which [%Noun|Verb%] #Noun", group: 0, tag: "Infinitive", reason: "which-boost-it" },
  { match: "#Gerund [%Plural|Verb%]", group: 0, tag: "Plural", reason: "asking-questions" },
  { match: "(ready|available|difficult|hard|easy|made|attempt|try) to [%Noun|Verb%]", group: 0, tag: "Infinitive", reason: "ready-to-noun" },
  { match: "(bring|went|go|drive|run|bike) to [%Noun|Verb%]", group: 0, tag: "Noun", reason: "bring-to-noun" },
  { match: "#Modal #Noun [%Noun|Verb%]", group: 0, tag: "Infinitive", reason: "would-you-look" },
  { match: "#Copula just [#Infinitive]", group: 0, tag: "Noun", reason: "is-just-spam" },
  { match: "^%Noun|Verb% %Plural|Verb%", tag: "Imperative #Plural", reason: "request-copies" },
  { match: "#Adjective #Plural and [%Plural|Verb%]", group: 0, tag: "#Plural", reason: "pickles-and-drinks" },
  { match: "#Determiner #Year [#Verb]", group: 0, tag: "Noun", reason: "the-1968-film" },
  { match: "#Determiner [#PhrasalVerb #Particle]", group: 0, tag: "Noun", reason: "the-break-up" },
  { match: "#Determiner [%Adj|Noun%] #Noun", group: 0, tag: "Adjective", notIf: "(#Pronoun|#Possessive|#ProperNoun)", reason: "the-individual-goals" },
  { match: "[%Noun|Verb%] or #Infinitive", group: 0, tag: "Infinitive", reason: "work-or-prepare" },
  { match: "to #Infinitive [#PresentTense]", group: 0, tag: "Noun", notIf: "(#Gerund|#Copula|help)", reason: "to-give-thanks" }
], Hy = [
  { match: "#Money and #Money #Currency?", tag: "Money", reason: "money-and-money" },
  { match: "#Value #Currency [and] #Value (cents|ore|centavos|sens)", group: 0, tag: "money", reason: "and-5-cents" },
  { match: "#Value (mark|rand|won|rub|ore)", tag: "#Money #Currency", reason: "4 mark" }
], Jy = [
  { match: "[(half|quarter)] of? (a|an)", group: 0, tag: "Fraction", reason: "millionth" },
  { match: "#Adverb [half]", group: 0, tag: "Fraction", reason: "nearly-half" },
  { match: "[half] the", group: 0, tag: "Fraction", reason: "half-the" },
  { match: "#Cardinal and a half", tag: "Fraction", reason: "and-a-half" },
  { match: "#Value (halves|halfs|quarters)", tag: "Fraction", reason: "two-halves" },
  { match: "a #Ordinal", tag: "Fraction", reason: "a-quarter" },
  { match: "[#Cardinal+] (#Fraction && /s$/)", tag: "Fraction", reason: "seven-fifths" },
  { match: "[#Cardinal+ #Ordinal] of .", group: 0, tag: "Fraction", reason: "ordinal-of" },
  { match: "[(#NumericValue && #Ordinal)] of .", group: 0, tag: "Fraction", reason: "num-ordinal-of" },
  { match: "(a|one) #Cardinal?+ #Ordinal", tag: "Fraction", reason: "a-ordinal" },
  { match: "#Cardinal+ out? of every? #Cardinal", tag: "Fraction", reason: "out-of" }
], _y = [
  { match: "#Cardinal [second]", tag: "Unit", reason: "one-second" },
  {
    match: "!once? [(a|an)] (#Duration|hundred|thousand|million|billion|trillion)",
    group: 0,
    tag: "Value",
    reason: "a-is-one"
  },
  { match: "1 #Value #PhoneNumber", tag: "PhoneNumber", reason: "1-800-Value" },
  { match: "#NumericValue #PhoneNumber", tag: "PhoneNumber", reason: "(800) PhoneNumber" },
  { match: "#Demonym #Currency", tag: "Currency", reason: "demonym-currency" },
  { match: "#Value [(buck|bucks|grand)]", group: 0, tag: "Currency", reason: "value-bucks" },
  { match: "[#Value+] #Currency", group: 0, tag: "Money", reason: "15 usd" },
  { match: "[second] #Noun", group: 0, tag: "Ordinal", reason: "second-noun" },
  { match: "#Value+ [#Currency]", group: 0, tag: "Unit", reason: "5-yan" },
  { match: "#Value [(foot|feet)]", group: 0, tag: "Unit", reason: "foot-unit" },
  { match: "#Value [#Abbreviation]", group: 0, tag: "Unit", reason: "value-abbr" },
  { match: "#Value [k]", group: 0, tag: "Unit", reason: "value-k" },
  { match: "#Unit an hour", tag: "Unit", reason: "unit-an-hour" },
  { match: "(minus|negative) #Value", tag: "Value", reason: "minus-value" },
  { match: "#Value (point|decimal) #Value", tag: "Value", reason: "value-point-value" },
  { match: "#Determiner [(half|quarter)] #Ordinal", group: 0, tag: "Value", reason: "half-ordinal" },
  { match: "#Multiple+ and #Value", tag: "Value", reason: "magnitude-and-value" },
  { match: "#Value #Unit [(per|an) (hr|hour|sec|second|min|minute)]", group: 0, tag: "Unit", reason: "12-miles-per-second" },
  { match: "#Value [(square|cubic)] #Unit", group: 0, tag: "Unit", reason: "square-miles" },
  { match: "^[#Value] (#Determiner|#Gerund)", group: 0, tag: "Expression", unTag: "Value", reason: "numbered-list" }
], qy = [
  { match: "#Copula [(#Noun|#PresentTense)] #LastName", group: 0, tag: "FirstName", reason: "copula-noun-lastname" },
  { match: "(sister|pope|brother|father|aunt|uncle|grandpa|grandfather|grandma) #ProperNoun", tag: "Person", reason: "lady-titlecase", safe: !0 },
  { match: "#FirstName [#Determiner #Noun] #LastName", group: 0, tag: "Person", reason: "first-noun-last" },
  {
    match: "#ProperNoun (b|c|d|e|f|g|h|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z) #ProperNoun",
    tag: "Person",
    reason: "titlecase-acronym-titlecase",
    safe: !0
  },
  { match: "#Acronym #LastName", tag: "Person", reason: "acronym-lastname", safe: !0 },
  { match: "#Person (jr|sr|md)", tag: "Person", reason: "person-honorific" },
  { match: "#Honorific #Acronym", tag: "Person", reason: "Honorific-TitleCase" },
  { match: "#Person #Person the? #RomanNumeral", tag: "Person", reason: "roman-numeral" },
  { match: "#FirstName [/^[^aiurck]$/]", group: 0, tag: ["Acronym", "Person"], reason: "john-e" },
  { match: "#Noun van der? #Noun", tag: "Person", reason: "van der noun", safe: !0 },
  { match: "(king|queen|prince|saint|lady) of #Noun", tag: "Person", reason: "king-of-noun", safe: !0 },
  { match: "(prince|lady) #Place", tag: "Person", reason: "lady-place" },
  { match: "(king|queen|prince|saint) #ProperNoun", tag: "Person", reason: "saint-foo" },
  { match: "al (#Person|#ProperNoun)", tag: "Person", reason: "al-borlen", safe: !0 },
  { match: "#FirstName de #Noun", tag: "Person", reason: "bill-de-noun" },
  { match: "#FirstName (bin|al) #Noun", tag: "Person", reason: "bill-al-noun" },
  { match: "#FirstName #Acronym #ProperNoun", tag: "Person", reason: "bill-acronym-title" },
  { match: "#FirstName #FirstName #ProperNoun", tag: "Person", reason: "bill-firstname-title" },
  { match: "#Honorific #FirstName? #ProperNoun", tag: "Person", reason: "dr-john-Title" },
  { match: "#FirstName the #Adjective", tag: "Person", reason: "name-the-great" },
  { match: "#ProperNoun (van|al|bin) #ProperNoun", tag: "Person", reason: "title-van-title", safe: !0 },
  { match: "#ProperNoun (de|du) la? #ProperNoun", tag: "Person", reason: "title-de-title" },
  { match: "#Singular #Acronym #LastName", tag: "#FirstName #Person .", reason: "title-acro-noun", safe: !0 },
  { match: "[#ProperNoun] #Person", group: 0, tag: "Person", reason: "proper-person", safe: !0 },
  { match: "#Person [#ProperNoun #ProperNoun]", group: 0, tag: "Person", notIf: "#Possessive", reason: "three-name-person", safe: !0 },
  { match: "#FirstName #Acronym? [#ProperNoun]", group: 0, tag: "LastName", notIf: "#Possessive", reason: "firstname-titlecase" },
  { match: "#FirstName [#FirstName]", group: 0, tag: "LastName", reason: "firstname-firstname" },
  { match: "#FirstName #Acronym #Noun", tag: "Person", reason: "n-acro-noun", safe: !0 },
  { match: "#FirstName [(de|di|du|van|von)] #Person", group: 0, tag: "LastName", reason: "de-firstname" },
  { match: "[#Actor+] #Person", group: 0, tag: "Person", reason: "baker-sam-smith" },
  { match: "[(lieutenant|corporal|sergeant|captain|qeen|king|admiral|major|colonel|marshal|president|queen|king)+] #ProperNoun", group: 0, tag: "Honorific", reason: "seargeant-john" },
  { match: "[(private|general|major|rear|prime|field|count|miss)] #Honorific? #Person", group: 0, tag: ["Honorific", "Person"], reason: "ambg-honorifics" },
  { match: "#Honorific #FirstName [#Singular]", group: 0, tag: "LastName", notIf: "#Possessive", reason: "dr-john-foo", safe: !0 },
  { match: "[(his|her) (majesty|honour|worship|excellency|honorable)] #Person", group: 0, tag: "Honorific", reason: "his-excellency" },
  { match: "#Honorific #Actor", tag: "Honorific", reason: "Lieutenant colonel" },
  { match: "(first|second|third|1st|2nd|3rd) #Actor", tag: "Honorific", reason: "first lady" },
  { match: "#Person #RomanNumeral", tag: "Person", reason: "louis-IV" }
], Ky = [
  { match: "%Person|Date% #Acronym? #ProperNoun", tag: "Person", reason: "jan-thierson" },
  { match: "%Person|Noun% #Acronym? #ProperNoun", tag: "Person", reason: "switch-person", safe: !0 },
  { match: "%Person|Noun% #Organization", tag: "Organization", reason: "olive-garden" },
  { match: "%Person|Verb% #Acronym? #ProperNoun", tag: "Person", reason: "verb-propernoun", ifNo: "#Actor" },
  { match: "[%Person|Verb%] (will|had|has|said|says|told|did|learned|wants|wanted)", group: 0, tag: "Person", reason: "person-said" },
  { match: "[%Person|Place%] (harbor|harbour|pier|town|city|place|dump|landfill)", group: 0, tag: "Place", reason: "sydney-harbour" },
  { match: "(west|east|north|south) [%Person|Place%]", group: 0, tag: "Place", reason: "east-sydney" },
  { match: "#Modal [%Person|Verb%]", group: 0, tag: "Verb", reason: "would-mark" },
  { match: "#Adverb [%Person|Verb%]", group: 0, tag: "Verb", reason: "really-mark" },
  { match: "[%Person|Verb%] (#Adverb|#Comparative)", group: 0, tag: "Verb", reason: "drew-closer" },
  { match: "%Person|Verb% #Person", tag: "Person", reason: "rob-smith" },
  { match: "%Person|Verb% #Acronym #ProperNoun", tag: "Person", reason: "rob-a-smith" },
  { match: "[will] #Verb", group: 0, tag: "Modal", reason: "will-verb" },
  { match: "(will && @isTitleCase) #ProperNoun", tag: "Person", reason: "will-name" },
  { match: "(#FirstName && !#Possessive) [#Singular] #Verb", group: 0, safe: !0, tag: "LastName", reason: "jack-layton" },
  { match: "^[#Singular] #Person #Verb", group: 0, safe: !0, tag: "Person", reason: "sherwood-anderson" },
  { match: "(a|an) [#Person]$", group: 0, unTag: "Person", reason: "a-warhol" }
], Uy = [
  {
    match: "#Copula (pretty|dead|full|well|sure) (#Adjective|#Noun)",
    tag: "#Copula #Adverb #Adjective",
    reason: "sometimes-adverb"
  },
  { match: "(#Pronoun|#Person) (had|#Adverb)? [better] #PresentTense", group: 0, tag: "Modal", reason: "i-better" },
  { match: "(#Modal|i|they|we|do) not? [like]", group: 0, tag: "PresentTense", reason: "modal-like" },
  { match: "#Noun #Adverb? [left]", group: 0, tag: "PastTense", reason: "left-verb" },
  { match: "will #Adverb? not? #Adverb? [be] #Gerund", group: 0, tag: "Copula", reason: "will-be-copula" },
  { match: "will #Adverb? not? #Adverb? [be] #Adjective", group: 0, tag: "Copula", reason: "be-copula" },
  { match: "[march] (up|down|back|toward)", notIf: "#Date", group: 0, tag: "Infinitive", reason: "march-to" },
  { match: "#Modal [march]", group: 0, tag: "Infinitive", reason: "must-march" },
  { match: "[may] be", group: 0, tag: "Verb", reason: "may-be" },
  { match: "[(subject|subjects|subjected)] to", group: 0, tag: "Verb", reason: "subject to" },
  { match: "[home] to", group: 0, tag: "PresentTense", reason: "home to" },
  { match: "[open] #Determiner", group: 0, tag: "Infinitive", reason: "open-the" },
  { match: "(were|was) being [#PresentTense]", group: 0, tag: "PastTense", reason: "was-being" },
  { match: "(had|has|have) [been /en$/]", group: 0, tag: "Auxiliary Participle", reason: "had-been-broken" },
  { match: "(had|has|have) [been /ed$/]", group: 0, tag: "Auxiliary PastTense", reason: "had-been-smoked" },
  { match: "(had|has) #Adverb? [been] #Adverb? #PastTense", group: 0, tag: "Auxiliary", reason: "had-been-adj" },
  { match: "(had|has) to [#Noun] (#Determiner|#Possessive)", group: 0, tag: "Infinitive", reason: "had-to-noun" },
  { match: "have [#PresentTense]", group: 0, tag: "PastTense", notIf: "(come|gotten)", reason: "have-read" },
  { match: "(does|will|#Modal) that [work]", group: 0, tag: "PastTense", reason: "does-that-work" },
  { match: "[(sound|sounds)] #Adjective", group: 0, tag: "PresentTense", reason: "sounds-fun" },
  { match: "[(look|looks)] #Adjective", group: 0, tag: "PresentTense", reason: "looks-good" },
  { match: "[(need|needs)] to #Infinitive", group: 0, tag: "PresentTense", reason: "need-to-learn" },
  { match: "[(start|starts|stop|stops|begin|begins)] #Gerund", group: 0, tag: "Verb", reason: "starts-thinking" },
  { match: "(have|had) read", tag: "Modal #PastTense", reason: "read-read" },
  {
    match: "(is|was|were) [(under|over) #PastTense]",
    group: 0,
    tag: "Adverb Adjective",
    reason: "was-under-cooked"
  },
  { match: "[shit] (#Determiner|#Possessive|them)", group: 0, tag: "Verb", reason: "swear1-verb" },
  { match: "[damn] (#Determiner|#Possessive|them)", group: 0, tag: "Verb", reason: "swear2-verb" },
  { match: "[fuck] (#Determiner|#Possessive|them)", group: 0, tag: "Verb", reason: "swear3-verb" },
  { match: "#Plural that %Noun|Verb%", tag: ". #Preposition #Infinitive", reason: "jobs-that-work" },
  { match: "[works] for me", group: 0, tag: "PresentTense", reason: "works-for-me" },
  { match: "as #Pronoun [please]", group: 0, tag: "Infinitive", reason: "as-we-please" },
  { match: "[(co|mis|de|inter|intra|pre|re|un|out|under|over|counter)] #Verb", group: 0, tag: ["Verb", "Prefix"], notIf: "(#Copula|#PhrasalVerb)", reason: "co-write" },
  { match: "#PastTense and [%Adj|Past%]", group: 0, tag: "PastTense", reason: "dressed-and-left" },
  { match: "[%Adj|Past%] and #PastTense", group: 0, tag: "PastTense", reason: "dressed-and-left" }
], Ry = [
  { match: "will (#Adverb|not)+? [have] (#Adverb|not)+? #Verb", group: 0, tag: "Auxiliary", reason: "will-have-vb" },
  { match: "[#Copula] (#Adverb|not)+? (#Gerund|#PastTense)", group: 0, tag: "Auxiliary", reason: "copula-walking" },
  { match: "[(#Modal|did)+] (#Adverb|not)+? #Verb", group: 0, tag: "Auxiliary", reason: "modal-verb" },
  { match: "#Modal (#Adverb|not)+? [have] (#Adverb|not)+? [had] (#Adverb|not)+? #Verb", group: 0, tag: "Auxiliary", reason: "would-have" },
  { match: "[(has|had)] (#Adverb|not)+? #PastTense", group: 0, tag: "Auxiliary", reason: "had-walked" },
  { match: "[(do|does|did|will|have|had|has|got)] (not|#Adverb)+? #Verb", group: 0, tag: "Auxiliary", reason: "have-had" },
  { match: "[about to] #Adverb? #Verb", group: 0, tag: ["Auxiliary", "Verb"], reason: "about-to" },
  { match: "#Modal (#Adverb|not)+? [be] (#Adverb|not)+? #Verb", group: 0, tag: "Auxiliary", reason: "would-be" },
  { match: "[(#Modal|had|has)] (#Adverb|not)+? [been] (#Adverb|not)+? #Verb", group: 0, tag: "Auxiliary", reason: "had-been" },
  { match: "[(be|being|been)] #Participle", group: 0, tag: "Auxiliary", reason: "being-driven" },
  { match: "[may] #Adverb? #Infinitive", group: 0, tag: "Auxiliary", reason: "may-want" },
  { match: "#Copula (#Adverb|not)+? [(be|being|been)] #Adverb+? #PastTense", group: 0, tag: "Auxiliary", reason: "being-walked" },
  { match: "will [be] #PastTense", group: 0, tag: "Auxiliary", reason: "will-be-x" },
  { match: "[(be|been)] (#Adverb|not)+? #Gerund", group: 0, tag: "Auxiliary", reason: "been-walking" },
  { match: "[used to] #PresentTense", group: 0, tag: "Auxiliary", reason: "used-to-walk" },
  { match: "#Copula (#Adverb|not)+? [going to] #Adverb+? #PresentTense", group: 0, tag: "Auxiliary", reason: "going-to-walk" },
  { match: "#Imperative [(me|him|her)]", group: 0, tag: "Reflexive", reason: "tell-him" },
  { match: "(is|was) #Adverb? [no]", group: 0, tag: "Negative", reason: "is-no" },
  { match: "[(been|had|became|came)] #PastTense", group: 0, notIf: "#PhrasalVerb", tag: "Auxiliary", reason: "been-told" },
  { match: "[(being|having|getting)] #Verb", group: 0, tag: "Auxiliary", reason: "being-born" },
  { match: "[be] #Gerund", group: 0, tag: "Auxiliary", reason: "be-walking" },
  { match: "[better] #PresentTense", group: 0, tag: "Modal", notIf: "(#Copula|#Gerund)", reason: "better-go" },
  { match: "even better", tag: "Adverb #Comparative", reason: "even-better" }
], Qy = [
  { match: "(#Verb && @hasHyphen) up", tag: "PhrasalVerb", reason: "foo-up" },
  { match: "(#Verb && @hasHyphen) off", tag: "PhrasalVerb", reason: "foo-off" },
  { match: "(#Verb && @hasHyphen) over", tag: "PhrasalVerb", reason: "foo-over" },
  { match: "(#Verb && @hasHyphen) out", tag: "PhrasalVerb", reason: "foo-out" },
  {
    match: "[#Verb (in|out|up|down|off|back)] (on|in)",
    notIf: "#Copula",
    tag: "PhrasalVerb Particle",
    reason: "walk-in-on"
  },
  { match: "(lived|went|crept|go) [on] for", group: 0, tag: "PhrasalVerb", reason: "went-on" },
  { match: "#Verb (up|down|in|on|for)$", tag: "PhrasalVerb #Particle", notIf: "#PhrasalVerb", reason: "come-down$" },
  { match: "help [(stop|end|make|start)]", group: 0, tag: "Infinitive", reason: "help-stop" },
  { match: "[(stop|start|finish|help)] #Gerund", group: 0, tag: "Infinitive", reason: "start-listening" },
  {
    match: "#Verb (him|her|it|us|himself|herself|itself|everything|something) [(up|down)]",
    group: 0,
    tag: "Adverb",
    reason: "phrasal-pronoun-advb"
  }
], An = "(i|we|they)", Yy = [
  { match: "^do not? [#Infinitive #Particle?]", notIf: An, group: 0, tag: "Imperative", reason: "do-eat" },
  { match: "^please do? not? [#Infinitive #Particle?]", group: 0, tag: "Imperative", reason: "please-go" },
  { match: "^just do? not? [#Infinitive #Particle?]", group: 0, tag: "Imperative", reason: "just-go" },
  { match: "^[#Infinitive] it #Comparative", notIf: An, group: 0, tag: "Imperative", reason: "do-it-better" },
  { match: "^[#Infinitive] it (please|now|again|plz)", notIf: An, group: 0, tag: "Imperative", reason: "do-it-please" },
  { match: "^[#Infinitive] (#Adjective|#Adverb)$", group: 0, tag: "Imperative", notIf: "(so|such|rather|enough)", reason: "go-quickly" },
  { match: "^[#Infinitive] (up|down|over) #Determiner", group: 0, tag: "Imperative", reason: "turn-down" },
  { match: "^[#Infinitive] (your|my|the|a|an|any|each|every|some|more|with|on)", group: 0, notIf: "like", tag: "Imperative", reason: "eat-my-shorts" },
  { match: "^[#Infinitive] (him|her|it|us|me|there)", group: 0, tag: "Imperative", reason: "tell-him" },
  { match: "^[#Infinitive] #Adjective #Noun$", group: 0, tag: "Imperative", reason: "avoid-loud-noises" },
  { match: "^[#Infinitive] (#Adjective|#Adverb)? and #Infinitive", group: 0, tag: "Imperative", reason: "call-and-reserve" },
  { match: "^(go|stop|wait|hurry) please?$", tag: "Imperative", reason: "go" },
  { match: "^(somebody|everybody) [#Infinitive]", group: 0, tag: "Imperative", reason: "somebody-call" },
  { match: "^let (us|me) [#Infinitive]", group: 0, tag: "Imperative", reason: "lets-leave" },
  { match: "^[(shut|close|open|start|stop|end|keep)] #Determiner #Noun", group: 0, tag: "Imperative", reason: "shut-the-door" },
  { match: "^[go] to .", group: 0, tag: "Imperative", reason: "go-to-toronto" },
  { match: "^#Modal you [#Infinitive]", group: 0, tag: "Imperative", reason: "would-you-" },
  { match: "^never [#Infinitive]", group: 0, tag: "Imperative", reason: "never-stop" },
  { match: "^come #Infinitive", tag: "Imperative", notIf: "on", reason: "come-have" },
  { match: "^come and? #Infinitive", tag: "Imperative . Imperative", notIf: "#PhrasalVerb", reason: "come-and-have" },
  { match: "^stay (out|away|back)", tag: "Imperative", reason: "stay-away" },
  { match: "^[(stay|be|keep)] #Adjective", group: 0, tag: "Imperative", reason: "stay-cool" },
  { match: "^[keep it] #Adjective", group: 0, tag: "Imperative", reason: "keep-it-cool" },
  { match: "^do not [#Infinitive]", group: 0, tag: "Imperative", reason: "do-not-be" },
  { match: "[#Infinitive] (yourself|yourselves)", group: 0, tag: "Imperative", reason: "allow-yourself" },
  { match: "[#Infinitive] what .", group: 0, tag: "Imperative", reason: "look-what" },
  { match: "^[#Infinitive] #Gerund", group: 0, tag: "Imperative", reason: "keep-playing" },
  { match: "^[#Infinitive] (to|for|into|toward|here|there)", group: 0, tag: "Imperative", reason: "go-to" },
  { match: "^[#Infinitive] (and|or) #Infinitive", group: 0, tag: "Imperative", reason: "inf-and-inf" },
  { match: "^[%Noun|Verb%] to", group: 0, tag: "Imperative", reason: "commit-to" },
  { match: "^[#Infinitive] #Adjective? #Singular #Singular", group: 0, tag: "Imperative", reason: "maintain-eye-contact" },
  { match: "do not (forget|omit|neglect) to [#Infinitive]", group: 0, tag: "Imperative", reason: "do-not-forget" }
], Xy = [
  { match: "(that|which) were [%Adj|Gerund%]", group: 0, tag: "Gerund", reason: "that-were-growing" },
  { match: "#Gerund [#Gerund] #Plural", group: 0, tag: "Adjective", reason: "hard-working-fam" }
], Zy = [
  { match: "(got|were|was|is|are|am) (#PastTense|#Participle)", tag: "Passive", reason: "got-walked" },
  { match: "(was|were|is|are|am) being (#PastTense|#Participle)", tag: "Passive", reason: "was-being" },
  { match: "(had|have|has) been (#PastTense|#Participle)", tag: "Passive", reason: "had-been" },
  { match: "will be being? (#PastTense|#Participle)", tag: "Passive", reason: "will-be-cleaned" },
  { match: "#Noun [(#PastTense|#Participle)] by (the|a) #Noun", group: 0, tag: "Passive", reason: "suffered-by" }
];
let eb = [
  { match: "u r", tag: "#Pronoun #Copula", reason: "u r" },
  { match: "#Noun [(who|whom)]", group: 0, tag: "Determiner", reason: "captain-who" },
  { match: "[had] #Noun+ #PastTense", group: 0, tag: "Condition", reason: "had-he" },
  { match: "[were] #Noun+ to #Infinitive", group: 0, tag: "Condition", reason: "were-he" },
  { match: "some sort of", tag: "Adjective Noun Conjunction", reason: "some-sort-of" },
  { match: "of some sort", tag: "Conjunction Adjective Noun", reason: "of-some-sort" },
  { match: "[such] (a|an|is)? #Noun", group: 0, tag: "Determiner", reason: "such-skill" },
  { match: "[right] (before|after|in|into|to|toward)", group: 0, tag: "#Adverb", reason: "right-into" },
  { match: "#Preposition [about]", group: 0, tag: "Adjective", reason: "at-about" },
  { match: "(are|#Modal|see|do|for) [ya]", group: 0, tag: "Pronoun", reason: "are-ya" },
  { match: "[long live] .", group: 0, tag: "#Adjective #Infinitive", reason: "long-live" },
  { match: "[plenty] of", group: 0, tag: "#Uncountable", reason: "plenty-of" },
  { match: "(always|nearly|barely|practically) [there]", group: 0, tag: "Adjective", reason: "always-there" },
  { match: "[there] (#Adverb|#Pronoun)? #Copula", group: 0, tag: "There", reason: "there-is" },
  { match: "#Copula [there] .", group: 0, tag: "There", reason: "is-there" },
  { match: "#Modal #Adverb? [there]", group: 0, tag: "There", reason: "should-there" },
  { match: "^[do] (you|we|they)", group: 0, tag: "QuestionWord", reason: "do-you" },
  { match: "^[does] (he|she|it|#ProperNoun)", group: 0, tag: "QuestionWord", reason: "does-he" },
  { match: "a [while]", group: 0, tag: "Noun", reason: "a-while" },
  { match: "guess who", tag: "#Infinitive #QuestionWord", reason: "guess-who" }
];
const tb = eb, nb = [
  { match: "#Noun (&|n) #Noun", tag: "Organization", reason: "Noun-&-Noun" },
  { match: "#Organization of the? #ProperNoun", tag: "Organization", reason: "org-of-place", safe: !0 },
  { match: "#Organization #Country", tag: "Organization", reason: "org-country" },
  { match: "#ProperNoun #Organization", tag: "Organization", reason: "titlecase-org" },
  { match: "#ProperNoun (ltd|co|inc|dept|assn|bros)", tag: "Organization", reason: "org-abbrv" },
  { match: "the [#Acronym]", group: 0, tag: "Organization", reason: "the-acronym", safe: !0 },
  {
    match: "(world|global|international|national|#Demonym) #Organization",
    tag: "Organization",
    reason: "global-org"
  },
  { match: "#Noun+ (public|private) school", tag: "School", reason: "noun-public-school" }
], rb = [
  {
    match: "(west|north|south|east|western|northern|southern|eastern)+ #Place",
    tag: "Region",
    reason: "west-norfolk"
  },
  {
    match: "#City [(al|ak|az|ar|ca|ct|dc|fl|ga|id|il|nv|nh|nj|ny|oh|pa|sc|tn|tx|ut|vt|pr)]",
    group: 0,
    tag: "Region",
    reason: "us-state"
  },
  {
    match: "portland [or]",
    group: 0,
    tag: "Region",
    reason: "portland-or"
  },
  {
    match: "#ProperNoun+ (district|region|province|county|prefecture|municipality|territory|burough|reservation)",
    tag: "Region",
    reason: "foo-district"
  },
  {
    match: "(district|region|province|municipality|territory|burough|state) of #ProperNoun",
    tag: "Region",
    reason: "district-of-Foo"
  },
  {
    match: "in [#ProperNoun] #Place",
    group: 0,
    tag: "Place",
    reason: "propernoun-place"
  },
  {
    match: "#Value #Noun (st|street|rd|road|crescent|cr|way|tr|terrace|avenue|ave)",
    tag: "Address",
    reason: "address-st"
  }
], ob = [
  { match: "[so] #Noun", group: 0, tag: "Conjunction", reason: "so-conj" },
  {
    match: "[(who|what|where|why|how|when)] #Noun #Copula #Adverb? (#Verb|#Adjective)",
    group: 0,
    tag: "Conjunction",
    reason: "how-he-is-x"
  },
  { match: "#Copula [(who|what|where|why|how|when)] #Noun", group: 0, tag: "Conjunction", reason: "when-he" },
  { match: "#Verb [that] #Pronoun", group: 0, tag: "Conjunction", reason: "said-that-he" },
  { match: "#Noun [that] #Copula", group: 0, tag: "Conjunction", reason: "that-are" },
  { match: "#Noun [that] #Verb #Adjective", group: 0, tag: "Conjunction", reason: "that-seem" },
  { match: "#Noun #Copula not? [that] #Adjective", group: 0, tag: "Adverb", reason: "that-adj" },
  { match: "#Verb #Adverb? #Noun [(that|which)]", group: 0, tag: "Preposition", reason: "that-prep" },
  { match: "@hasComma [which] (#Pronoun|#Verb)", group: 0, tag: "Preposition", reason: "which-copula" },
  { match: "#Noun [like] #Noun", group: 0, tag: "Preposition", reason: "noun-like" },
  { match: "^[like] #Determiner", group: 0, tag: "Preposition", reason: "like-the" },
  { match: "a #Noun [like] (#Noun|#Determiner)", group: 0, tag: "Preposition", reason: "a-noun-like" },
  { match: "#Adverb [like]", group: 0, tag: "Verb", reason: "really-like" },
  { match: "(not|nothing|never) [like]", group: 0, tag: "Preposition", reason: "nothing-like" },
  { match: "#Infinitive #Pronoun [like]", group: 0, tag: "Preposition", reason: "treat-them-like" },
  { match: "[#QuestionWord] (#Pronoun|#Determiner)", group: 0, tag: "Preposition", reason: "how-he" },
  { match: "[#QuestionWord] #Participle", group: 0, tag: "Preposition", reason: "when-stolen" },
  { match: "[how] (#Determiner|#Copula|#Modal|#PastTense)", group: 0, tag: "QuestionWord", reason: "how-is" },
  { match: "#Plural [(who|which|when)] .", group: 0, tag: "Preposition", reason: "people-who" }
], ab = [
  { match: "holy (shit|fuck|hell)", tag: "Expression", reason: "swears-expression" },
  { match: "^[(well|so|okay|now)] !#Adjective?", group: 0, tag: "Expression", reason: "well-" },
  { match: "^come on", tag: "Expression", reason: "come-on" },
  { match: "(say|says|said) [sorry]", group: 0, tag: "Expression", reason: "say-sorry" },
  { match: "^(ok|alright|shoot|hell|anyways)", tag: "Expression", reason: "ok-" },
  { match: "^(say && @hasComma)", tag: "Expression", reason: "say-" },
  { match: "^(like && @hasComma)", tag: "Expression", reason: "like-" },
  { match: "^[(dude|man|girl)] #Pronoun", group: 0, tag: "Expression", reason: "dude-i" }
];
let ib = [].concat(
  Zy,
  Ty,
  Dy,
  Oy,
  Fy,
  Gy,
  zy,
  By,
  Ly,
  My,
  Wy,
  Hy,
  Jy,
  _y,
  qy,
  Ky,
  Uy,
  Vy,
  Ry,
  Qy,
  Yy,
  Xy,
  tb,
  nb,
  rb,
  ob,
  ab
);
const sb = {
  two: {
    matches: ib
  }
};
let $n = null;
const lb = function(e) {
  const { world: t } = e, { model: n, methods: r } = t;
  $n = $n || r.one.buildNet(n.two.matches, t);
  let a = r.two.quickSplit(e.document).map((s) => {
    let l = s[0];
    return [l.index[0], l.index[1], l.index[1] + s.length];
  }), i = e.update(a);
  return i.cache(), i.sweep($n), e.uncache(), e;
}, ub = (e) => e.compute(["lexicon", "preTagger", "postTagger"]), cb = { postTagger: lb, tagger: ub }, hb = (e) => Math.round(e * 100) / 100;
function db(e) {
  e.prototype.confidence = function() {
    let t = 0, n = 0;
    return this.docs.forEach((r) => {
      r.forEach((o) => {
        n += 1, t += o.confidence || 1;
      });
    }), n === 0 ? 1 : hb(t / n);
  }, e.prototype.tagger = function() {
    return this.compute(["tagger"]);
  };
}
const fb = {
  api: db,
  compute: cb,
  model: sb,
  hooks: ["postTagger"]
}, pb = fb, gb = function(e) {
  return Object.keys(e.hooks).filter((t) => !t.startsWith("#") && !t.startsWith("%"));
}, mb = function(e, t) {
  let n = gb(t);
  if (n.length === 0)
    return e;
  e._cache || e.cache();
  let r = e._cache;
  return e.filter((o, a) => n.some((i) => r[a].has(i)));
}, yb = mb, bb = function(e, t) {
  let n = t;
  typeof t == "string" && (n = this.buildNet([{ match: t }]));
  let r = this.tokenize(e), o = yb(r, n);
  return o.found ? (o.compute(["index", "tagger"]), o.match(t)) : r.none();
}, vb = bb, wb = {
  lib: {
    lazy: vb
  }
}, Pb = function(e, t) {
  const n = e.methods.two.transform.verb.conjugate;
  let r = n(t, e.model);
  return e.has("#Gerund") ? r.Gerund : e.has("#PastTense") ? r.PastTense : e.has("#PresentTense") ? r.PresentTense : e.has("#Gerund") ? r.Gerund : t;
}, kb = function(e, t) {
  let n = t;
  return e.forEach((r) => {
    r.has("#Infinitive") || (n = Pb(r, t)), r.replaceWith(n);
  }), e;
}, Ab = kb, $b = function(e, t) {
  let n = t;
  if (e.has("#Plural")) {
    const r = e.methods.two.transform.noun.toPlural;
    n = r(t, e.model);
  }
  e.replaceWith(n);
}, Ib = function(e, t) {
  const { toAdverb: n } = e.methods.two.transform.adjective;
  let o = n(t);
  o && e.replaceWith(o);
}, xb = function(e, t) {
  const { toComparative: n, toSuperlative: r } = e.methods.two.transform.adjective;
  let o = t;
  e.has("#Comparative") ? o = n(o, e.model) : e.has("#Superlative") && (o = r(o, e.model)), o && e.replaceWith(o);
}, Nb = function(e, t, n) {
  let r = e.split(/ /g).map((a) => `{${a}}`).join(" "), o = this.match(r);
  return n && (o = o.if(n)), o.has("#Verb") ? Ab(o, t) : o.has("#Noun") ? $b(o, t) : o.has("#Adverb") ? Ib(o, t) : o.has("#Adjective") ? xb(o, t) : this;
}, jb = Nb, Eb = function(e) {
  e.prototype.swap = jb;
}, Tb = {
  api: Eb
};
P.plugin(Z1);
P.plugin(Ey);
P.plugin(pb);
P.plugin(wb);
P.plugin(Tb);
const Cb = function(e) {
  let t = e.match("@hasComma");
  return t = t.filter((n) => {
    if (n.growLeft(".").wordCount() === 1 || n.growRight(". .").wordCount() === 1)
      return !1;
    let r = n.grow(".");
    return r = r.ifNo("@hasComma @hasComma"), r = r.ifNo("@hasComma (and|or) ."), r = r.ifNo("(#City && @hasComma) #Country"), r = r.ifNo("(#WeekDay && @hasComma) #Date"), r = r.ifNo("(#Date+ && @hasComma) #Value"), r = r.ifNo("(#Adjective && @hasComma) #Adjective"), r.found;
  }), e.splitAfter(t);
}, Db = function(e) {
  let t = e.parentheses();
  return t = t.filter((n) => n.wordCount() >= 3 && n.has("#Verb") && n.has("#Noun")), e.splitOn(t);
}, Ob = function(e) {
  let t = e.quotations();
  return t = t.filter((n) => n.wordCount() >= 3 && n.has("#Verb") && n.has("#Noun")), e.splitOn(t);
}, Fb = function(e) {
  let t = this;
  return t = Db(t), t = Ob(t), t = Cb(t), t = t.splitAfter("(@hasEllipses|@hasSemicolon|@hasDash|@hasColon)"), t = t.splitAfter("^#Pronoun (said|says)"), t = t.splitBefore("(said|says) #ProperNoun$"), t = t.splitBefore(". . if .{4}"), t = t.splitBefore("and while"), t = t.splitBefore("now that"), t = t.splitBefore("ever since"), t = t.splitBefore("(supposing|although)"), t = t.splitBefore("even (while|if|though)"), t = t.splitBefore("(whereas|whose)"), t = t.splitBefore("as (though|if)"), t = t.splitBefore("(til|until)"), typeof e == "number" && (t = t.get(e)), t;
}, Vb = Fb, Gb = function(e) {
  let t = [], n = null, r = null;
  e.docs.forEach((a) => {
    a.forEach((i) => {
      i.chunk !== r && (n && (n[2] = i.index[1], t.push(n)), r = i.chunk, n = [i.index[0], i.index[1]]);
    });
  }), n && t.push(n);
  let o = e.update(t);
  return o = o.map((a) => a.has("<Noun>") ? a.nouns() : a), o;
}, Bb = Gb, zb = function(e) {
  class t extends e {
    constructor(r, o, a) {
      super(r, o, a), this.viewType = "Chunks";
    }
    isVerb() {
      return this.filter((r) => r.has("<Verb>"));
    }
    isNoun() {
      return this.filter((r) => r.has("<Noun>"));
    }
    isAdjective() {
      return this.filter((r) => r.has("<Adjective>"));
    }
    isPivot() {
      return this.filter((r) => r.has("<Pivot>"));
    }
    debug() {
      return this.toView().debug("chunks"), this;
    }
    update(r) {
      let o = new t(this.document, r);
      return o._cache = this._cache, o;
    }
  }
  e.prototype.chunks = function(n) {
    let r = Bb(this);
    return r = r.getNth(n), new t(this.document, r.pointer);
  }, e.prototype.clauses = Vb;
}, Sb = zb, qo = {
  this: "Noun",
  then: "Pivot"
}, Lb = function(e) {
  for (let t = 0; t < e.length; t += 1)
    for (let n = 0; n < e[t].length; n += 1) {
      let r = e[t][n];
      if (qo.hasOwnProperty(r.normal) === !0) {
        r.chunk = qo[r.normal];
        continue;
      }
      if (r.tags.has("Verb")) {
        r.chunk = "Verb";
        continue;
      }
      if (r.tags.has("Noun") || r.tags.has("Determiner")) {
        r.chunk = "Noun";
        continue;
      }
      if (r.tags.has("Value")) {
        r.chunk = "Noun";
        continue;
      }
      if (r.tags.has("QuestionWord")) {
        r.chunk = "Pivot";
        continue;
      }
    }
}, Mb = Lb, Wb = function(e) {
  for (let t = 0; t < e.length; t += 1)
    for (let n = 0; n < e[t].length; n += 1) {
      let r = e[t][n];
      if (r.chunk)
        continue;
      let o = e[t][n + 1], a = e[t][n - 1];
      if (r.tags.has("Adjective")) {
        if (a && a.tags.has("Copula")) {
          r.chunk = "Adjective";
          continue;
        }
        if (a && a.tags.has("Determiner")) {
          r.chunk = "Noun";
          continue;
        }
        if (o && o.tags.has("Noun")) {
          r.chunk = "Noun";
          continue;
        }
        continue;
      }
      if (r.tags.has("Adverb") || r.tags.has("Negative")) {
        if (a && a.tags.has("Adjective")) {
          r.chunk = "Adjective";
          continue;
        }
        if (a && a.tags.has("Verb")) {
          r.chunk = "Verb";
          continue;
        }
        if (o && o.tags.has("Adjective")) {
          r.chunk = "Adjective";
          continue;
        }
        if (o && o.tags.has("Verb")) {
          r.chunk = "Verb";
          continue;
        }
      }
    }
}, Hb = Wb, Jb = [
  { match: "[that] #Determiner #Noun", group: 0, chunk: "Pivot" },
  { match: "#PastTense [that]", group: 0, chunk: "Pivot" },
  { match: "[so] #Determiner", group: 0, chunk: "Pivot" },
  { match: "#Copula #Adverb+? [#Adjective]", group: 0, chunk: "Adjective" },
  { match: "#Adjective and #Adjective", chunk: "Adjective" },
  { match: "#Adverb+ and #Adverb #Verb", chunk: "Verb" },
  { match: "#Gerund #Adjective", chunk: "Verb" },
  { match: "#Gerund to #Verb", chunk: "Verb" },
  { match: "#PresentTense and #PresentTense", chunk: "Verb" },
  { match: "#Adverb #Negative", chunk: "Verb" },
  { match: "(want|wants|wanted) to #Infinitive", chunk: "Verb" },
  { match: "#Verb #Reflexive", chunk: "Verb" },
  { match: "#PresentTense [#Pronoun] #Determiner", group: 0, chunk: "Verb" },
  { match: "#Verb [to] #Adverb? #Infinitive", group: 0, chunk: "Verb" },
  { match: "[#Preposition] #Gerund", group: 0, chunk: "Verb" },
  { match: "#Infinitive [that] <Noun>", group: 0, chunk: "Verb" },
  { match: "#Noun of #Determiner? #Noun", chunk: "Noun" },
  { match: "#Value+ #Adverb? #Adjective", chunk: "Noun" },
  { match: "the [#Adjective] #Noun", chunk: "Noun" },
  { match: "#Singular in #Determiner? #Singular", chunk: "Noun" },
  { match: "#Plural [in] #Determiner? #Noun", group: 0, chunk: "Pivot" },
  { match: "#Noun and #Determiner? #Noun", notIf: "(#Possessive|#Pronoun)", chunk: "Noun" }
];
let In = null;
const _b = function(e, t, n) {
  const { methods: r } = n;
  In = In || r.one.buildNet(Jb, n), e.sweep(In);
}, qb = _b, xn = function(e, t) {
  if ((typeof process > "u" || !process.env ? self.env || {} : process.env).DEBUG_CHUNKS) {
    let r = (e.normal + "'").padEnd(8);
    console.log(`  | '${r}  →  \x1B[34m${t.padEnd(12)}\x1B[0m \x1B[2m -fallback- \x1B[0m`);
  }
  e.chunk = t;
}, Kb = function(e) {
  for (let t = 0; t < e.length; t += 1)
    for (let n = 0; n < e[t].length; n += 1) {
      let r = e[t][n];
      r.chunk === void 0 && (r.tags.has("Conjunction") || r.tags.has("Preposition") ? xn(r, "Pivot") : r.tags.has("Adverb") ? xn(r, "Verb") : r.chunk = "Noun");
    }
}, Ub = Kb, Rb = function(e) {
  let t = [], n = null;
  e.forEach((r) => {
    for (let o = 0; o < r.length; o += 1) {
      let a = r[o];
      n && a.chunk === n ? t[t.length - 1].terms.push(a) : (t.push({ chunk: a.chunk, terms: [a] }), n = a.chunk);
    }
  }), t.forEach((r) => {
    r.chunk === "Verb" && (r.terms.find((a) => a.tags.has("Verb")) || r.terms.forEach((a) => a.chunk = null));
  });
}, Qb = Rb, Yb = function(e) {
  const { document: t, world: n } = e;
  Mb(t), Hb(t), qb(e, t, n), Ub(t), Qb(t);
}, Xb = { chunks: Yb }, Zb = {
  compute: Xb,
  api: Sb,
  hooks: ["chunks"]
}, Lt = /\./g, ev = function(e) {
  class t extends e {
    constructor(r, o, a) {
      super(r, o, a), this.viewType = "Acronyms";
    }
    strip() {
      return this.docs.forEach((r) => {
        r.forEach((o) => {
          o.text = o.text.replace(Lt, ""), o.normal = o.normal.replace(Lt, "");
        });
      }), this;
    }
    addPeriods() {
      return this.docs.forEach((r) => {
        r.forEach((o) => {
          o.text = o.text.replace(Lt, ""), o.normal = o.normal.replace(Lt, ""), o.text = o.text.split("").join(".") + ".", o.normal = o.normal.split("").join(".") + ".";
        });
      }), this;
    }
  }
  e.prototype.acronyms = function(n) {
    let r = this.match("#Acronym");
    return r = r.getNth(n), new t(r.document, r.pointer);
  };
}, tv = ev, Ye = function(e) {
  const { fromComparative: t, fromSuperlative: n } = e.methods.two.transform.adjective;
  let r = e.text("normal");
  return e.has("#Comparative") ? t(r, e.model) : e.has("#Superlative") ? n(r, e.model) : r;
}, nv = function(e) {
  class t extends e {
    constructor(r, o, a) {
      super(r, o, a), this.viewType = "Adjectives";
    }
    json(r = {}) {
      const { toAdverb: o, toNoun: a, toSuperlative: i, toComparative: s } = this.methods.two.transform.adjective;
      return r.normal = !0, this.map((l) => {
        let u = l.toView().json(r)[0] || {}, c = Ye(l);
        return u.adjective = {
          adverb: o(c),
          noun: a(c),
          superlative: i(c, this.model),
          comparative: s(c, this.model)
        }, u;
      }, []);
    }
    adverbs() {
      return this.before("#Adverb+$").concat(this.after("^#Adverb+"));
    }
    conjugate(r) {
      const { toComparative: o, toSuperlative: a, toNoun: i, toAdverb: s } = this.methods.two.transform.adjective;
      return this.getNth(r).map((l) => {
        let u = Ye(l);
        return {
          Adjective: u,
          Comparative: o(u, this.model),
          Superlative: a(u, this.model),
          Noun: i(u, this.model),
          Adverb: s(u, this.model)
        };
      }, []);
    }
    toComparative(r) {
      const { toComparative: o } = this.methods.two.transform.adjective;
      return this.getNth(r).map((a) => {
        let i = Ye(a), s = o(i, this.model);
        return a.replaceWith(s);
      });
    }
    toSuperlative(r) {
      const { toSuperlative: o } = this.methods.two.transform.adjective;
      return this.getNth(r).map((a) => {
        let i = Ye(a), s = o(i, this.model);
        return a.replaceWith(s);
      });
    }
    toAdverb(r) {
      const { toAdverb: o } = this.methods.two.transform.adjective;
      return this.getNth(r).map((a) => {
        let i = Ye(a), s = o(i, this.model);
        return a.replaceWith(s);
      });
    }
    toNoun(r) {
      const { toNoun: o } = this.methods.two.transform.adjective;
      return this.getNth(r).map((a) => {
        let i = Ye(a), s = o(i, this.model);
        return a.replaceWith(s);
      });
    }
  }
  e.prototype.adjectives = function(n) {
    let r = this.match("#Adjective");
    return r = r.getNth(n), new t(r.document, r.pointer);
  }, e.prototype.superlatives = function(n) {
    let r = this.match("#Superlative");
    return r = r.getNth(n), new t(r.document, r.pointer);
  }, e.prototype.comparatives = function(n) {
    let r = this.match("#Comparative");
    return r = r.getNth(n), new t(r.document, r.pointer);
  };
}, rv = nv, ov = function(e) {
  class t extends e {
    constructor(r, o, a) {
      super(r, o, a), this.viewType = "Adverbs";
    }
    json(r = {}) {
      const o = this.methods.two.transform.adjective.fromAdverb;
      return r.normal = !0, this.map((a) => {
        let i = a.toView().json(r)[0] || {};
        return i.adverb = {
          adjective: o(i.normal)
        }, i;
      }, []);
    }
  }
  e.prototype.adverbs = function(n) {
    let r = this.match("#Adverb");
    return r = r.getNth(n), new t(r.document, r.pointer);
  };
}, av = ov, Fi = /\(/, Vi = /\)/, iv = function(e, t) {
  for (; t < e.length; t += 1)
    if (e[t].post && Vi.test(e[t].post))
      return t;
  return null;
}, sv = function(e) {
  let t = [];
  return e.docs.forEach((n) => {
    for (let r = 0; r < n.length; r += 1) {
      let o = n[r];
      if (o.pre && Fi.test(o.pre)) {
        let a = iv(n, r);
        if (a !== null) {
          let [i, s] = n[r].index;
          t.push([i, s, a + 1, n[r].id]), r = a;
        }
      }
    }
  }), e.update(t);
}, lv = function(e) {
  return e.docs.forEach((t) => {
    t[0].pre = t[0].pre.replace(Fi, "");
    let n = t[t.length - 1];
    n.post = n.post.replace(Vi, "");
  }), e;
}, uv = function(e) {
  class t extends e {
    constructor(r, o, a) {
      super(r, o, a), this.viewType = "Possessives";
    }
    strip() {
      return lv(this);
    }
  }
  e.prototype.parentheses = function(n) {
    let r = sv(this);
    return r = r.getNth(n), new t(r.document, r.pointer);
  };
}, cv = uv, Ko = /'s$/, hv = function(e) {
  let t = e.match("#Possessive+");
  return t.has("#Person") && (t = t.growLeft("#Person+")), t.has("#Place") && (t = t.growLeft("#Place+")), t.has("#Organization") && (t = t.growLeft("#Organization+")), t;
}, dv = function(e) {
  class t extends e {
    constructor(r, o, a) {
      super(r, o, a), this.viewType = "Possessives";
    }
    strip() {
      return this.docs.forEach((r) => {
        r.forEach((o) => {
          o.text = o.text.replace(Ko, ""), o.normal = o.normal.replace(Ko, "");
        });
      }), this;
    }
  }
  e.prototype.possessives = function(n) {
    let r = hv(this);
    return r = r.getNth(n), new t(r.document, r.pointer);
  };
}, fv = dv, rn = {
  '"': '"',
  "＂": "＂",
  "'": "'",
  "“": "”",
  "‘": "’",
  "‟": "”",
  "‛": "’",
  "„": "”",
  "⹂": "”",
  "‚": "’",
  "«": "»",
  "‹": "›",
  "‵": "′",
  "‶": "″",
  "‷": "‴",
  "〝": "〞",
  "`": "´",
  "〟": "〞"
}, br = RegExp("(" + Object.keys(rn).join("|") + ")"), pv = RegExp("(" + Object.values(rn).join("|") + ")"), gv = function(e, t) {
  const n = e[t].pre.match(br)[0] || "";
  if (!n || !rn[n])
    return null;
  const r = rn[n];
  for (; t < e.length; t += 1)
    if (e[t].post && e[t].post.match(r))
      return t;
  return null;
}, mv = function(e) {
  let t = [];
  return e.docs.forEach((n) => {
    for (let r = 0; r < n.length; r += 1) {
      let o = n[r];
      if (o.pre && br.test(o.pre)) {
        let a = gv(n, r);
        if (a !== null) {
          let [i, s] = n[r].index;
          t.push([i, s, a + 1, n[r].id]), r = a;
        }
      }
    }
  }), e.update(t);
}, yv = function(e) {
  e.docs.forEach((t) => {
    t[0].pre = t[0].pre.replace(br, "");
    let n = t[t.length - 1];
    n.post = n.post.replace(pv, "");
  });
}, bv = function(e) {
  class t extends e {
    constructor(r, o, a) {
      super(r, o, a), this.viewType = "Possessives";
    }
    strip() {
      return yv(this);
    }
  }
  e.prototype.quotations = function(n) {
    let r = mv(this);
    return r = r.getNth(n), new t(r.document, r.pointer);
  };
}, vv = bv, wv = function(e) {
  let t = this.splitAfter("@hasComma");
  return t = t.match("#PhoneNumber+"), t = t.getNth(e), t;
}, Pv = [
  ["hyphenated", "@hasHyphen ."],
  ["hashTags", "#HashTag"],
  ["emails", "#Email"],
  ["emoji", "#Emoji"],
  ["emoticons", "#Emoticon"],
  ["atMentions", "#AtMention"],
  ["urls", "#Url"],
  ["conjunctions", "#Conjunction"],
  ["prepositions", "#Preposition"],
  ["abbreviations", "#Abbreviation"],
  ["honorifics", "#Honorific"]
];
let kv = [
  ["emojis", "emoji"],
  ["atmentions", "atMentions"]
];
const Av = function(e) {
  Pv.forEach((t) => {
    e.prototype[t[0]] = function(n) {
      let r = this.match(t[1]);
      return typeof n == "number" ? r.get(n) : r;
    };
  }), e.prototype.phoneNumbers = wv, kv.forEach((t) => {
    e.prototype[t[0]] = e.prototype[t[1]];
  });
}, $v = Av, Iv = {
  api: function(e) {
    tv(e), rv(e), av(e), cv(e), fv(e), vv(e), $v(e);
  }
}, Mt = function(e, t) {
  e.docs.forEach((n) => {
    n.forEach(t);
  });
}, Uo = {
  case: (e) => {
    Mt(e, (t) => {
      t.text = t.text.toLowerCase();
    });
  },
  unicode: (e) => {
    const t = e.world, n = t.methods.one.killUnicode;
    Mt(e, (r) => r.text = n(r.text, t));
  },
  whitespace: (e) => {
    Mt(e, (t) => {
      t.post = t.post.replace(/\s+/g, " "), t.post = t.post.replace(/\s([.,?!:;])/g, "$1"), t.pre = t.pre.replace(/\s+/g, "");
    });
  },
  punctuation: (e) => {
    Mt(e, (r) => {
      r.post = r.post.replace(/[–—-]/g, " "), r.post = r.post.replace(/[,:;]/g, ""), r.post = r.post.replace(/\.{2,}/g, ""), r.post = r.post.replace(/\?{2,}/g, "?"), r.post = r.post.replace(/!{2,}/g, "!"), r.post = r.post.replace(/\?!+/g, "?");
    });
    let t = e.docs, n = t[t.length - 1];
    if (n && n.length > 0) {
      let r = n[n.length - 1];
      r.post = r.post.replace(/ /g, "");
    }
  },
  contractions: (e) => {
    e.contractions().expand();
  },
  acronyms: (e) => {
    e.acronyms().strip();
  },
  parentheses: (e) => {
    e.parentheses().strip();
  },
  possessives: (e) => {
    e.possessives().strip();
  },
  quotations: (e) => {
    e.quotations().strip();
  },
  emoji: (e) => {
    e.emojis().remove();
  },
  honorifics: (e) => {
    e.match("#Honorific+ #Person").honorifics().remove();
  },
  adverbs: (e) => {
    e.adverbs().remove();
  },
  nouns: (e) => {
    e.nouns().toSingular();
  },
  verbs: (e) => {
    e.verbs().toInfinitive();
  },
  numbers: (e) => {
    e.numbers().toNumber();
  }
}, Nn = (e) => e.split("|").reduce((t, n) => (t[n] = !0, t), {}), jn = "unicode|punctuation|whitespace|acronyms", Ro = "|case|contractions|parentheses|quotations|emoji|honorifics", xv = "|possessives|adverbs|nouns|verbs", Nv = {
  light: Nn(jn),
  medium: Nn(jn + Ro),
  heavy: Nn(jn + Ro + xv)
};
function jv(e) {
  e.prototype.normalize = function(t = "light") {
    return typeof t == "string" && (t = Nv[t]), Object.keys(t).forEach((n) => {
      Uo.hasOwnProperty(n) && Uo[n](this, t[n]);
    }), this;
  };
}
const Ev = {
  api: jv
}, Tv = function(e) {
  let t = e.clauses().match("<Noun>"), n = t.match("@hasComma");
  return n = n.not("#Place"), n.found && (t = t.splitAfter(n)), t = t.splitOn("#Expression"), t = t.splitOn("(he|she|we|you|they|i)"), t = t.splitOn("(#Noun|#Adjective) [(he|him|she|it)]", 0), t = t.splitOn("[(he|him|she|it)] (#Determiner|#Value)", 0), t = t.splitBefore("#Noun [(the|a|an)] #Adjective? #Noun", 0), t = t.splitOn("[(here|there)] #Noun", 0), t = t.splitOn("[#Noun] (here|there)", 0), t = t.splitBefore("(our|my|their|your)"), t = t.splitOn("#Noun [#Determiner]", 0), t = t.if("#Noun"), t;
}, Cv = Tv, Qo = [
  "after",
  "although",
  "as if",
  "as long as",
  "as",
  "because",
  "before",
  "even if",
  "even though",
  "ever since",
  "if",
  "in order that",
  "provided that",
  "since",
  "so that",
  "than",
  "that",
  "though",
  "unless",
  "until",
  "what",
  "whatever",
  "when",
  "whenever",
  "where",
  "whereas",
  "wherever",
  "whether",
  "which",
  "whichever",
  "who",
  "whoever",
  "whom",
  "whomever",
  "whose"
], Dv = function(e) {
  if (e.before("#Preposition$").found)
    return !0;
  if (!e.before().found)
    return !1;
  for (let n = 0; n < Qo.length; n += 1)
    if (e.has(Qo[n]))
      return !0;
  return !1;
}, Ov = Dv, Fv = "(#Pronoun|#Place|#Value|#Person|#Uncountable|#Month|#WeekDay|#Holiday|#Possessive)", Vv = function(e, t) {
  if (e.has("#Plural") || e.has("#Noun and #Noun") || e.has("(we|they)"))
    return !0;
  if (t.has(Fv) === !0 || e.has("#Singular"))
    return !1;
  let n = t.text("normal");
  return n.length > 3 && n.endsWith("s") && !n.endsWith("ss");
}, Gv = Vv, Bv = function(e) {
  let t = e.clone();
  return t = t.match("#Noun+"), t = t.remove("(#Adjective|#Preposition|#Determiner|#Value)"), t = t.not("#Possessive"), t = t.first(), t.found ? t : e;
}, zv = function(e) {
  let t = Bv(e);
  return {
    determiner: e.match("#Determiner").eq(0),
    adjectives: e.match("#Adjective"),
    number: e.values(),
    isPlural: Gv(e, t),
    isSubordinate: Ov(e),
    root: t
  };
}, Me = zv, Yo = (e) => e.text(), Sv = (e) => e.json({ terms: !1, normal: !0 }).map((t) => t.normal), Lv = function(e) {
  let t = null;
  if (!e.found)
    return t;
  let n = e.values(0);
  return n.found ? (n.parse()[0] || {}).num : t;
}, Mv = function(e) {
  let t = Me(e);
  return {
    root: Yo(t.root),
    number: Lv(t.number),
    determiner: Yo(t.determiner),
    adjectives: Sv(t.adjectives),
    isPlural: t.isPlural,
    isSubordinate: t.isSubordinate
  };
}, Wv = Mv, Hv = { tags: !0 }, Jv = function(e) {
  let { root: t } = e;
  return !t.has("^(#Uncountable|#Possessive|#ProperNoun|#Place|#Pronoun|#Acronym)+$");
}, _v = function(e, t) {
  if (t.isPlural === !0 || !Jv(t))
    return e;
  const { methods: n, model: r } = e.world, { toPlural: o } = n.two.transform.noun;
  let a = t.root.text({ keepPunct: !1 }), i = o(a, r);
  e.match(t.root).replaceWith(i, Hv).tag("Plural", "toPlural"), t.determiner.has("(a|an)") && e.remove(t.determiner);
  let s = t.root.after("not? #Adverb+? [#Copula]", 0);
  return s.found && (s.has("is") ? e.replace(s, "are") : s.has("was") && e.replace(s, "were")), e;
}, qv = _v, Kv = { tags: !0 }, Uv = function(e, t) {
  if (t.isPlural === !1)
    return e;
  const { methods: n, model: r } = e.world, { toSingular: o } = n.two.transform.noun;
  let a = t.root.text("normal"), i = o(a, r);
  return e.replace(t.root, i, Kv).tag("Singular", "toPlural"), e;
}, Rv = Uv, Qv = function(e) {
  class t extends e {
    constructor(r, o, a) {
      super(r, o, a), this.viewType = "Nouns";
    }
    parse(r) {
      return this.getNth(r).map(Me);
    }
    json(r) {
      let o = typeof r == "object" ? r : {};
      return this.getNth(r).map((a) => {
        let i = a.toView().json(o)[0] || {};
        return o && o.noun !== !0 && (i.noun = Wv(a)), i;
      }, []);
    }
    isPlural(r) {
      return this.filter((a) => Me(a).isPlural).getNth(r);
    }
    isSingular(r) {
      return this.filter((a) => !Me(a).isPlural).getNth(r);
    }
    adjectives(r) {
      let o = this.update([]);
      return this.forEach((a) => {
        let i = Me(a).adjectives;
        i.found && (o = o.concat(i));
      }), o.getNth(r);
    }
    toPlural(r) {
      return this.getNth(r).map((o) => qv(o, Me(o)));
    }
    toSingular(r) {
      return this.getNth(r).map((o) => {
        let a = Me(o);
        return Rv(o, a);
      });
    }
    update(r) {
      let o = new t(this.document, r);
      return o._cache = this._cache, o;
    }
  }
  e.prototype.nouns = function(n) {
    let r = Cv(this);
    return r = r.getNth(n), new t(this.document, r.pointer);
  };
}, Yv = Qv, Xv = {
  api: Yv
}, Zv = function(e, t) {
  let n = e.match("#Fraction+");
  return n = n.filter((r) => !r.lookBehind("#Value and$").found), n = n.notIf("#Value seconds"), typeof t == "number" && (n = n.eq(t)), n;
}, e2 = Zv, t2 = (e) => {
  const t = [
    {
      reg: /^(minus|negative)[\s-]/i,
      mult: -1
    },
    {
      reg: /^(a\s)?half[\s-](of\s)?/i,
      mult: 0.5
    }
  ];
  for (let n = 0; n < t.length; n++)
    if (t[n].reg.test(e) === !0)
      return {
        amount: t[n].mult,
        str: e.replace(t[n].reg, "")
      };
  return {
    amount: 1,
    str: e
  };
}, n2 = t2, F = {
  ones: {
    zeroth: 0,
    first: 1,
    second: 2,
    third: 3,
    fourth: 4,
    fifth: 5,
    sixth: 6,
    seventh: 7,
    eighth: 8,
    ninth: 9,
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9
  },
  teens: {
    tenth: 10,
    eleventh: 11,
    twelfth: 12,
    thirteenth: 13,
    fourteenth: 14,
    fifteenth: 15,
    sixteenth: 16,
    seventeenth: 17,
    eighteenth: 18,
    nineteenth: 19,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19
  },
  tens: {
    twentieth: 20,
    thirtieth: 30,
    fortieth: 40,
    fourtieth: 40,
    fiftieth: 50,
    sixtieth: 60,
    seventieth: 70,
    eightieth: 80,
    ninetieth: 90,
    twenty: 20,
    thirty: 30,
    forty: 40,
    fourty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90
  },
  multiples: {
    hundredth: 100,
    thousandth: 1e3,
    millionth: 1e6,
    billionth: 1e9,
    trillionth: 1e12,
    quadrillionth: 1e15,
    quintillionth: 1e18,
    sextillionth: 1e21,
    septillionth: 1e24,
    hundred: 100,
    thousand: 1e3,
    million: 1e6,
    billion: 1e9,
    trillion: 1e12,
    quadrillion: 1e15,
    quintillion: 1e18,
    sextillion: 1e21,
    septillion: 1e24,
    grand: 1e3
  }
}, r2 = (e, t) => {
  if (F.ones.hasOwnProperty(e)) {
    if (t.ones || t.teens)
      return !1;
  } else if (F.teens.hasOwnProperty(e)) {
    if (t.ones || t.teens || t.tens)
      return !1;
  } else if (F.tens.hasOwnProperty(e) && (t.ones || t.teens || t.tens))
    return !1;
  return !0;
}, o2 = r2, a2 = function(e) {
  let t = "0.";
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    if (F.ones.hasOwnProperty(r) === !0)
      t += F.ones[r];
    else if (F.teens.hasOwnProperty(r) === !0)
      t += F.teens[r];
    else if (F.tens.hasOwnProperty(r) === !0)
      t += F.tens[r];
    else if (/^[0-9]$/.test(r) === !0)
      t += r;
    else
      return 0;
  }
  return parseFloat(t);
}, i2 = a2, s2 = (e) => (e = e.replace(/1st$/, "1"), e = e.replace(/2nd$/, "2"), e = e.replace(/3rd$/, "3"), e = e.replace(/([4567890])r?th$/, "$1"), e = e.replace(/^[$€¥£¢]/, ""), e = e.replace(/[%$€¥£¢]$/, ""), e = e.replace(/,/g, ""), e = e.replace(/([0-9])([a-z\u00C0-\u00FF]{1,2})$/, "$1"), e), l2 = s2, u2 = /^([0-9,. ]+)\/([0-9,. ]+)$/, Xo = {
  "a few": 3,
  "a couple": 2,
  "a dozen": 12,
  "two dozen": 24,
  zero: 0
}, Wt = (e) => Object.keys(e).reduce((t, n) => (t += e[n], t), 0), c2 = function(e) {
  if (Xo.hasOwnProperty(e) === !0)
    return Xo[e];
  if (e === "a" || e === "an")
    return 1;
  const t = n2(e);
  e = t.str;
  let n = null, r = {}, o = 0, a = !1;
  const i = e.split(/[ -]/);
  for (let s = 0; s < i.length; s++) {
    let l = i[s];
    if (l = l2(l), !l || l === "and")
      continue;
    if (l === "-" || l === "negative") {
      a = !0;
      continue;
    }
    if (l.charAt(0) === "-" && (a = !0, l = l.substring(1)), l === "point")
      return o += Wt(r), o += i2(i.slice(s + 1, i.length)), o *= t.amount, o;
    const u = l.match(u2);
    if (u) {
      const c = parseFloat(u[1].replace(/[, ]/g, "")), h = parseFloat(u[2].replace(/[, ]/g, ""));
      h && (o += c / h || 0);
      continue;
    }
    if (F.tens.hasOwnProperty(l) && r.ones && Object.keys(r).length === 1 && (o = r.ones * 100, r = {}), o2(l, r) === !1)
      return null;
    if (/^[0-9.]+$/.test(l))
      r.ones = parseFloat(l);
    else if (F.ones.hasOwnProperty(l) === !0)
      r.ones = F.ones[l];
    else if (F.teens.hasOwnProperty(l) === !0)
      r.teens = F.teens[l];
    else if (F.tens.hasOwnProperty(l) === !0)
      r.tens = F.tens[l];
    else if (F.multiples.hasOwnProperty(l) === !0) {
      let c = F.multiples[l];
      if (c === n)
        return null;
      if (c === 100 && i[s + 1] !== void 0) {
        const h = i[s + 1];
        F.multiples[h] && (c *= F.multiples[h], s += 1);
      }
      n === null || c < n ? (o += (Wt(r) || 1) * c, n = c, r = {}) : (o += Wt(r), n = c, o = (o || 1) * c, r = {});
    }
  }
  return o += Wt(r), o *= t.amount, o *= a ? -1 : 1, o === 0 && Object.keys(r).length === 0 ? null : o;
}, Zn = c2, Zo = /s$/, vt = function(e) {
  let t = e.text("reduced");
  return Zn(t);
};
let on = {
  half: 2,
  halve: 2,
  quarter: 4
};
const h2 = function(e) {
  let n = e.text("reduced").match(/^([-+]?[0-9]+)\/([-+]?[0-9]+)(st|nd|rd|th)?s?$/);
  return n && n[1] && n[0] ? {
    numerator: Number(n[1]),
    denominator: Number(n[2])
  } : null;
}, d2 = function(e) {
  let t = e.match("[<num>#Value+] out of every? [<den>#Value+]");
  if (t.found !== !0)
    return null;
  let { num: n, den: r } = t.groups();
  return !n || !r || (n = vt(n), r = vt(r), !n || !r) ? null : typeof n == "number" && typeof r == "number" ? {
    numerator: n,
    denominator: r
  } : null;
}, f2 = function(e) {
  let t = e.match("[<num>(#Cardinal|a)+] [<den>#Fraction+]");
  if (t.found !== !0)
    return null;
  let { num: n, den: r } = t.groups();
  n.has("a") ? n = 1 : n = vt(n);
  let o = r.text("reduced");
  return Zo.test(o) && (o = o.replace(Zo, ""), r = r.replaceWith(o)), on.hasOwnProperty(o) ? r = on[o] : r = vt(r), typeof n == "number" && typeof r == "number" ? {
    numerator: n,
    denominator: r
  } : null;
}, p2 = function(e) {
  let t = e.match("^#Ordinal$");
  return t.found !== !0 ? null : e.lookAhead("^of .") ? {
    numerator: 1,
    denominator: vt(t)
  } : null;
}, g2 = function(e) {
  let t = e.text("reduced");
  return on.hasOwnProperty(t) ? { numerator: 1, denominator: on[t] } : null;
}, m2 = (e) => {
  let t = Math.round(e * 1e3) / 1e3;
  return t === 0 && e !== 0 ? e : t;
}, y2 = function(e) {
  e = e.clone();
  let t = g2(e) || h2(e) || d2(e) || f2(e) || p2(e) || null;
  return t !== null && t.numerator && t.denominator && (t.decimal = t.numerator / t.denominator, t.decimal = m2(t.decimal)), t;
}, ke = y2, b2 = function(e) {
  if (e < 1e6)
    return String(e);
  let t;
  return typeof e == "number" ? t = e.toFixed(0) : t = e, t.indexOf("e+") === -1 ? t : t.replace(".", "").split("e+").reduce(function(n, r) {
    return n + Array(r - n.length + 2).join(0);
  });
}, vr = b2, Ht = [
  ["ninety", 90],
  ["eighty", 80],
  ["seventy", 70],
  ["sixty", 60],
  ["fifty", 50],
  ["forty", 40],
  ["thirty", 30],
  ["twenty", 20]
], ea = [
  "",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen"
], v2 = [
  [1e24, "septillion"],
  [1e20, "hundred sextillion"],
  [1e21, "sextillion"],
  [1e20, "hundred quintillion"],
  [1e18, "quintillion"],
  [1e17, "hundred quadrillion"],
  [1e15, "quadrillion"],
  [1e14, "hundred trillion"],
  [1e12, "trillion"],
  [1e11, "hundred billion"],
  [1e9, "billion"],
  [1e8, "hundred million"],
  [1e6, "million"],
  [1e5, "hundred thousand"],
  [1e3, "thousand"],
  [100, "hundred"],
  [1, "one"]
], w2 = function(e) {
  let t = e, n = [];
  return v2.forEach((r) => {
    if (e >= r[0]) {
      let o = Math.floor(t / r[0]);
      t -= o * r[0], o && n.push({
        unit: r[1],
        count: o
      });
    }
  }), n;
}, P2 = function(e) {
  let t = [];
  if (e > 100)
    return t;
  for (let n = 0; n < Ht.length; n++)
    e >= Ht[n][1] && (e -= Ht[n][1], t.push(Ht[n][0]));
  return ea[e] && t.push(ea[e]), t;
}, k2 = (e) => {
  const t = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  let n = [], o = vr(e).match(/\.([0-9]+)/);
  if (!o || !o[0])
    return n;
  n.push("point");
  let a = o[0].split("");
  for (let i = 0; i < a.length; i++)
    n.push(t[a[i]]);
  return n;
}, A2 = function(e) {
  let t = e.num;
  if (t === 0 || t === "0")
    return "zero";
  t > 1e21 && (t = vr(t));
  let n = [];
  t < 0 && (n.push("minus"), t = Math.abs(t));
  let r = w2(t);
  for (let o = 0; o < r.length; o++) {
    let a = r[o].unit;
    a === "one" && (a = "", n.length > 1 && n.push("and")), n = n.concat(P2(r[o].count)), n.push(a);
  }
  return n = n.concat(k2(t)), n = n.filter((o) => o), n.length === 0 && (n[0] = ""), n.join(" ");
}, wt = A2, $2 = function(e) {
  if (!e.numerator || !e.denominator)
    return "";
  let t = wt({ num: e.numerator }), n = wt({ num: e.denominator });
  return `${t} out of ${n}`;
}, I2 = $2, ta = {
  one: "first",
  two: "second",
  three: "third",
  five: "fifth",
  eight: "eighth",
  nine: "ninth",
  twelve: "twelfth",
  twenty: "twentieth",
  thirty: "thirtieth",
  forty: "fortieth",
  fourty: "fourtieth",
  fifty: "fiftieth",
  sixty: "sixtieth",
  seventy: "seventieth",
  eighty: "eightieth",
  ninety: "ninetieth"
}, x2 = (e) => {
  let t = wt(e).split(" "), n = t[t.length - 1];
  return ta.hasOwnProperty(n) ? t[t.length - 1] = ta[n] : t[t.length - 1] = n.replace(/y$/, "i") + "th", t.join(" ");
}, Gi = x2, N2 = function(e) {
  if (!e.numerator || !e.denominator)
    return "";
  let t = wt({ num: e.numerator }), n = Gi({ num: e.denominator });
  return e.denominator === 2 && (n = "half"), t && n ? (e.numerator !== 1 && (n += "s"), `${t} ${n}`) : "";
}, j2 = N2, E2 = function(e) {
  class t extends e {
    constructor(r, o, a) {
      super(r, o, a), this.viewType = "Fractions";
    }
    parse(r) {
      return this.getNth(r).map(ke);
    }
    get(r) {
      return this.getNth(r).map(ke);
    }
    json(r) {
      return this.getNth(r).map((o) => {
        let a = o.toView().json(r)[0], i = ke(o);
        return a.fraction = i, a;
      }, []);
    }
    toDecimal(r) {
      return this.getNth(r).forEach((o) => {
        let { decimal: a } = ke(o);
        o = o.replaceWith(String(a), !0), o.tag("NumericValue"), o.unTag("Fraction");
      }), this;
    }
    toFraction(r) {
      return this.getNth(r).forEach((o) => {
        let a = ke(o);
        if (a && typeof a.numerator == "number" && typeof a.denominator == "number") {
          let i = `${a.numerator}/${a.denominator}`;
          this.replace(o, i);
        }
      }), this;
    }
    toOrdinal(r) {
      return this.getNth(r).forEach((o) => {
        let a = ke(o), i = j2(a);
        o.after("^#Noun").found && (i += " of"), o.replaceWith(i);
      }), this;
    }
    toCardinal(r) {
      return this.getNth(r).forEach((o) => {
        let a = ke(o), i = I2(a);
        o.replaceWith(i);
      }), this;
    }
    toPercentage(r) {
      return this.getNth(r).forEach((o) => {
        let { decimal: a } = ke(o), i = a * 100;
        i = Math.round(i * 100) / 100, o.replaceWith(`${i}%`);
      }), this;
    }
  }
  e.prototype.fractions = function(n) {
    let r = e2(this);
    return r = r.getNth(n), new t(this.document, r.pointer);
  };
}, T2 = E2, C2 = "one|two|three|four|five|six|seven|eight|nine", Ce = "twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety|fourty", D2 = "eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen", O2 = function(e) {
  let t = e.match("#Value+");
  if (t.has("#NumericValue #NumericValue") && (t.has("#Value @hasComma #Value") ? t.splitAfter("@hasComma") : t.has("#NumericValue #Fraction") ? t.splitAfter("#NumericValue #Fraction") : t = t.splitAfter("#NumericValue")), t.has("#Value #Value #Value") && !t.has("#Multiple") && t.has("(" + Ce + ") #Cardinal #Cardinal") && (t = t.splitAfter("(" + Ce + ") #Cardinal")), t.has("#Value #Value")) {
    t.has("#NumericValue #NumericValue") && (t = t.splitOn("#Year")), t.has("(" + Ce + ") (" + D2 + ")") && (t = t.splitAfter("(" + Ce + ")"));
    let n = t.match("#Cardinal #Cardinal");
    if (n.found && !t.has("(point|decimal|#Fraction)") && !n.has("#Cardinal (#Multiple|point|decimal)")) {
      let r = t.has(`(${C2}) (${Ce})`), o = n.has("(" + Ce + ") #Cardinal"), a = n.has("#Multiple #Value");
      !r && !o && !a && n.terms().forEach((i) => {
        t = t.splitOn(i);
      });
    }
    t.match("#Ordinal #Ordinal").match("#TextValue").found && !t.has("#Multiple") && (t.has("(" + Ce + ") #Ordinal") || (t = t.splitAfter("#Ordinal"))), t = t.splitBefore("#Ordinal [#Cardinal]", 0), t.has("#TextValue #NumericValue") && !t.has("(" + Ce + "|#Multiple)") && (t = t.splitBefore("#TextValue #NumericValue"));
  }
  return t = t.splitAfter("#NumberRange"), t = t.splitBefore("#Year"), t;
}, En = O2, F2 = function(e, t) {
  e = e.replace(/,/g, "");
  let n = e.split(/([0-9.,]*)/), [r, o] = n, a = n.slice(2).join("");
  return o !== "" && t.length < 2 ? (o = Number(o || e), typeof o != "number" && (o = null), a = a || "", (a === "st" || a === "nd" || a === "rd" || a === "th") && (a = ""), {
    prefix: r || "",
    num: o,
    suffix: a
  }) : null;
}, V2 = function(e) {
  if (typeof e == "string")
    return { num: Zn(e) };
  let t = e.text("reduced"), n = e.growRight("#Unit").match("#Unit$").text("machine"), r = /[0-9],[0-9]/.test(e.text("text"));
  if (e.terms().length === 1 && !e.has("#Multiple")) {
    let s = F2(t, e);
    if (s !== null)
      return s.hasComma = r, s.unit = n, s;
  }
  let o = e.match("#Fraction{2,}$");
  o = o.found === !1 ? e.match("^#Fraction$") : o;
  let a = null;
  o.found && (o.has("#Value and #Value #Fraction") && (o = o.match("and #Value #Fraction")), a = ke(o), e = e.not(o), e = e.not("and$"), t = e.text("reduced"));
  let i = 0;
  return t && (i = Zn(t) || 0), a && a.decimal && (i += a.decimal), {
    hasComma: r,
    prefix: "",
    num: i,
    suffix: "",
    isOrdinal: e.has("#Ordinal"),
    isText: e.has("#TextValue"),
    isFraction: e.has("#Fraction"),
    isMoney: e.has("#Money"),
    unit: n
  };
}, J = V2, G2 = function(e) {
  let t = e.num;
  if (!t && t !== 0)
    return null;
  let n = t % 100;
  if (n > 10 && n < 20)
    return String(t) + "th";
  const r = {
    0: "th",
    1: "st",
    2: "nd",
    3: "rd"
  };
  let o = vr(t), a = o.slice(o.length - 1, o.length);
  return r[a] ? o += r[a] : o += "th", o;
}, B2 = G2, na = {
  "¢": "cents",
  $: "dollars",
  "£": "pounds",
  "¥": "yen",
  "€": "euros",
  "₡": "colón",
  "฿": "baht",
  "₭": "kip",
  "₩": "won",
  "₹": "rupees",
  "₽": "ruble",
  "₺": "liras"
}, ra = {
  "%": "percent",
  "°": "degrees"
}, z2 = function(e) {
  let t = {
    suffix: "",
    prefix: e.prefix
  };
  return na.hasOwnProperty(e.prefix) && (t.suffix += " " + na[e.prefix], t.prefix = ""), ra.hasOwnProperty(e.suffix) && (t.suffix += " " + ra[e.suffix]), t.suffix && e.num === 1 && (t.suffix = t.suffix.replace(/s$/, "")), !t.suffix && e.suffix && (t.suffix += " " + e.suffix), t;
}, oa = z2, S2 = function(e, t) {
  if (t === "TextOrdinal") {
    let { prefix: r, suffix: o } = oa(e);
    return r + Gi(e) + o;
  }
  if (t === "Ordinal")
    return e.prefix + B2(e) + e.suffix;
  if (t === "TextCardinal") {
    let { prefix: r, suffix: o } = oa(e);
    return r + wt(e) + o;
  }
  let n = e.num;
  return e.hasComma && (n = n.toLocaleString()), e.prefix + String(n) + e.suffix;
}, ze = S2, L2 = function(e) {
  class t extends e {
    constructor(r, o, a) {
      super(r, o, a), this.viewType = "Numbers";
    }
    parse(r) {
      return this.getNth(r).map(J);
    }
    get(r) {
      return this.getNth(r).map(J).map((o) => o.num);
    }
    json(r) {
      let o = typeof r == "object" ? r : {};
      return this.getNth(r).map((a) => {
        let i = a.toView().json(o)[0], s = J(a);
        return i.number = {
          prefix: s.prefix,
          num: s.num,
          suffix: s.suffix,
          hasComma: s.hasComma,
          unit: s.unit
        }, i;
      }, []);
    }
    units() {
      return this.growRight("#Unit").match("#Unit$");
    }
    isOrdinal() {
      return this.if("#Ordinal");
    }
    isCardinal() {
      return this.if("#Cardinal");
    }
    toNumber() {
      return this.if("#TextValue").forEach((o) => {
        let a = J(o);
        if (a.num === null)
          return;
        let i = o.has("#Ordinal") ? "Ordinal" : "Cardinal", s = ze(a, i);
        o.replaceWith(s, { tags: !0 }), o.tag("NumericValue");
      }), this;
    }
    toLocaleString() {
      return this.forEach((o) => {
        let a = J(o);
        if (a.num === null)
          return;
        let i = a.num.toLocaleString();
        if (o.has("#Ordinal")) {
          let l = ze(a, "Ordinal").match(/[a-z]+$/);
          l && (i += l[0] || "");
        }
        o.replaceWith(i, { tags: !0 });
      }), this;
    }
    toText() {
      let o = this.map((a) => {
        if (a.has("#TextValue"))
          return a;
        let i = J(a);
        if (i.num === null)
          return a;
        let s = a.has("#Ordinal") ? "TextOrdinal" : "TextCardinal", l = ze(i, s);
        return a.replaceWith(l, { tags: !0 }), a.tag("TextValue"), a;
      });
      return new t(o.document, o.pointer);
    }
    toCardinal() {
      let o = this.map((a) => {
        if (!a.has("#Ordinal"))
          return a;
        let i = J(a);
        if (i.num === null)
          return a;
        let s = a.has("#TextValue") ? "TextCardinal" : "Cardinal", l = ze(i, s);
        return a.replaceWith(l, { tags: !0 }), a.tag("Cardinal"), a;
      });
      return new t(o.document, o.pointer);
    }
    toOrdinal() {
      let o = this.map((a) => {
        if (a.has("#Ordinal"))
          return a;
        let i = J(a);
        if (i.num === null)
          return a;
        let s = a.has("#TextValue") ? "TextOrdinal" : "Ordinal", l = ze(i, s);
        return a.replaceWith(l, { tags: !0 }), a.tag("Ordinal"), a;
      });
      return new t(o.document, o.pointer);
    }
    isEqual(r) {
      return this.filter((o) => J(o).num === r);
    }
    greaterThan(r) {
      return this.filter((o) => J(o).num > r);
    }
    lessThan(r) {
      return this.filter((o) => J(o).num < r);
    }
    between(r, o) {
      return this.filter((a) => {
        let i = J(a).num;
        return i > r && i < o;
      });
    }
    set(r) {
      if (r === void 0)
        return this;
      typeof r == "string" && (r = J(r).num);
      let a = this.map((i) => {
        let s = J(i);
        if (s.num = r, s.num === null)
          return i;
        let l = i.has("#Ordinal") ? "Ordinal" : "Cardinal";
        i.has("#TextValue") && (l = i.has("#Ordinal") ? "TextOrdinal" : "TextCardinal");
        let u = ze(s, l);
        return s.hasComma && l === "Cardinal" && (u = Number(u).toLocaleString()), i = i.not("#Currency"), i.replaceWith(u, { tags: !0 }), i;
      });
      return new t(a.document, a.pointer);
    }
    add(r) {
      if (!r)
        return this;
      typeof r == "string" && (r = J(r).num);
      let a = this.map((i) => {
        let s = J(i);
        if (s.num === null)
          return i;
        s.num += r;
        let l = i.has("#Ordinal") ? "Ordinal" : "Cardinal";
        s.isText && (l = i.has("#Ordinal") ? "TextOrdinal" : "TextCardinal");
        let u = ze(s, l);
        return i.replaceWith(u, { tags: !0 }), i;
      });
      return new t(a.document, a.pointer);
    }
    subtract(r, o) {
      return this.add(r * -1, o);
    }
    increment(r) {
      return this.add(1, r);
    }
    decrement(r) {
      return this.add(-1, r);
    }
    update(r) {
      let o = new t(this.document, r);
      return o._cache = this._cache, o;
    }
  }
  t.prototype.toNice = t.prototype.toLocaleString, t.prototype.isBetween = t.prototype.between, t.prototype.minus = t.prototype.subtract, t.prototype.plus = t.prototype.add, t.prototype.equals = t.prototype.isEqual, e.prototype.numbers = function(n) {
    let r = En(this);
    return r = r.getNth(n), new t(this.document, r.pointer);
  }, e.prototype.percentages = function(n) {
    let r = En(this);
    return r = r.filter((o) => o.has("#Percent") || o.after("^percent")), r = r.getNth(n), new t(this.document, r.pointer);
  }, e.prototype.money = function(n) {
    let r = En(this);
    return r = r.filter((o) => o.has("#Money") || o.after("^#Currency")), r = r.getNth(n), new t(this.document, r.pointer);
  }, e.prototype.values = e.prototype.numbers;
}, M2 = L2, W2 = function(e) {
  T2(e), M2(e);
}, H2 = {
  api: W2
}, J2 = {
  people: !0,
  emails: !0,
  phoneNumbers: !0,
  places: !0
}, _2 = function(e = {}) {
  return e = Object.assign({}, J2, e), e.people !== !1 && this.people().replaceWith("██████████"), e.emails !== !1 && this.emails().replaceWith("██████████"), e.places !== !1 && this.places().replaceWith("██████████"), e.phoneNumbers !== !1 && this.phoneNumbers().replaceWith("███████"), this;
}, q2 = {
  api: function(e) {
    e.prototype.redact = _2;
  }
}, K2 = q2, U2 = function(e) {
  let t = e.clauses();
  return /\.\.$/.test(e.out("text")) || e.has("^#QuestionWord") && e.has("@hasComma") ? !1 : !!(e.has("or not$") || e.has("^#QuestionWord") || e.has("^(do|does|did|is|was|can|could|will|would|may) #Noun") || e.has("^(have|must) you") || t.has("(do|does|is|was) #Noun+ #Adverb? (#Adjective|#Infinitive)$"));
}, R2 = function(e) {
  const t = /\?/, { document: n } = e;
  return e.filter((r) => {
    let o = r.docs[0] || [], a = o[o.length - 1];
    return !a || n[a.index[0]].length !== o.length ? !1 : t.test(a.post) ? !0 : U2(r);
  });
}, Q2 = R2, Y2 = "(after|although|as|because|before|if|since|than|that|though|when|whenever|where|whereas|wherever|whether|while|why|unless|until|once)", X2 = "(that|which|whichever|who|whoever|whom|whose|whomever)", Z2 = function(e) {
  let t = e;
  return t.length === 1 || (t = t.if("#Verb"), t.length === 1) || (t = t.ifNo(Y2), t = t.ifNo("^even (if|though)"), t = t.ifNo("^so that"), t = t.ifNo("^rather than"), t = t.ifNo("^provided that"), t.length === 1) || (t = t.ifNo(X2), t.length === 1) || (t = t.ifNo("(despite|during|before|through|throughout)"), t.length === 1) ? t : (t.length === 0 && (t = e), t.eq(0));
}, e3 = Z2, t3 = function(e) {
  let t = null;
  return e.has("#PastTense") ? t = "PastTense" : e.has("#FutureTense") ? t = "FutureTense" : e.has("#PresentTense") && (t = "PresentTense"), {
    tense: t
  };
}, n3 = function(e) {
  let t = e.clauses(), r = e3(t).chunks(), o = e.none(), a = e.none(), i = e.none();
  return r.forEach((s, l) => {
    if (l === 0 && !s.has("<Verb>")) {
      o = s;
      return;
    }
    if (!a.found && s.has("<Verb>")) {
      a = s;
      return;
    }
    a.found && (i = i.concat(s));
  }), a.found && !o.found && (o = a.before("<Noun>+").first()), {
    subj: o,
    verb: a,
    pred: i,
    grammar: t3(a)
  };
}, Se = n3, r3 = function(e) {
  let t = e.verbs(), n = t.eq(0);
  if (n.has("#PastTense"))
    return e;
  if (n.toPastTense(), t.length > 1) {
    t = t.slice(1), t = t.filter((o) => !o.lookBehind("to$").found), t = t.if("#PresentTense"), t = t.notIf("#Gerund");
    let r = e.match("to #Verb+ #Conjunction #Verb").terms();
    t = t.not(r), t.found && t.verbs().toPastTense();
  }
  return e;
}, o3 = r3, a3 = function(e) {
  let t = e.verbs();
  return t.eq(0).toPresentTense(), t.length > 1 && (t = t.slice(1), t = t.filter((r) => !r.lookBehind("to$").found), t = t.notIf("#Gerund"), t.found && t.verbs().toPresentTense()), e;
}, i3 = a3, s3 = function(e) {
  let t = e.verbs();
  if (t.eq(0).toFutureTense(), e = e.fullSentence(), t = e.verbs(), t.length > 1) {
    t = t.slice(1);
    let r = t.filter((o) => o.lookBehind("to$").found ? !1 : o.has("#Copula #Gerund") ? !0 : o.has("#Gerund") ? !1 : o.has("#Copula") ? !0 : !(o.has("#PresentTense") && !o.has("#Infinitive") && o.lookBefore("(he|she|it|that|which)$").found));
    r.found && r.forEach((o) => {
      if (o.has("#Copula")) {
        o.match("was").replaceWith("is"), o.match("is").replaceWith("will be");
        return;
      }
      o.toInfinitive();
    });
  }
  return e;
}, l3 = s3, u3 = function(e) {
  return e.verbs().first().toNegative().compute("chunks"), e;
}, c3 = function(e) {
  return e.verbs().first().toPositive().compute("chunks"), e;
}, h3 = function(e) {
  return e.verbs().toInfinitive(), e;
}, d3 = h3, f3 = function(e) {
  class t extends e {
    constructor(o, a, i) {
      super(o, a, i), this.viewType = "Sentences";
    }
    json(o = {}) {
      return this.map((a) => {
        let i = a.toView().json(o)[0] || {}, { subj: s, verb: l, pred: u, grammar: c } = Se(a);
        return i.sentence = {
          subject: s.text("normal"),
          verb: l.text("normal"),
          predicate: u.text("normal"),
          grammar: c
        }, i;
      }, []);
    }
    toPastTense(o) {
      return this.getNth(o).map((a) => (Se(a), o3(a)));
    }
    toPresentTense(o) {
      return this.getNth(o).map((a) => (Se(a), i3(a)));
    }
    toFutureTense(o) {
      return this.getNth(o).map((a) => (Se(a), a = l3(a), a));
    }
    toInfinitive(o) {
      return this.getNth(o).map((a) => (Se(a), d3(a)));
    }
    toNegative(o) {
      return this.getNth(o).map((a) => (Se(a), u3(a)));
    }
    toPositive(o) {
      return this.getNth(o).map((a) => (Se(a), c3(a)));
    }
    isQuestion(o) {
      return this.questions(o);
    }
    isExclamation(o) {
      return this.filter((i) => i.lastTerm().has("@hasExclamation")).getNth(o);
    }
    isStatement(o) {
      return this.filter((i) => !i.isExclamation().found && !i.isQuestion().found).getNth(o);
    }
    update(o) {
      let a = new t(this.document, o);
      return a._cache = this._cache, a;
    }
  }
  t.prototype.toPresent = t.prototype.toPresentTense, t.prototype.toPast = t.prototype.toPastTense, t.prototype.toFuture = t.prototype.toFutureTense;
  const n = {
    sentences: function(r) {
      let o = this.map((a) => a.fullSentence());
      return o = o.getNth(r), new t(this.document, o.pointer);
    },
    questions: function(r) {
      return Q2(this).getNth(r);
    }
  };
  Object.assign(e.prototype, n);
}, p3 = f3, g3 = { api: p3 }, m3 = function(e) {
  return e.match("#Honorific+? #Person+");
}, y3 = m3, b3 = function(e) {
  let t = {};
  t.firstName = e.match("#FirstName+"), t.lastName = e.match("#LastName+"), t.honorific = e.match("#Honorific+");
  let n = t.lastName, r = t.firstName;
  return (!r.found || !n.found) && !r.found && !n.found && e.has("^#Honorific .$") && (t.lastName = e.match(".$")), t;
}, aa = b3, oe = "male", K = "female", ia = {
  mr: oe,
  mrs: K,
  miss: K,
  madam: K,
  king: oe,
  queen: K,
  duke: oe,
  duchess: K,
  baron: oe,
  baroness: K,
  count: oe,
  countess: K,
  prince: oe,
  princess: K,
  sire: oe,
  dame: K,
  lady: K,
  ayatullah: oe,
  congressman: oe,
  congresswoman: K,
  "first lady": K,
  mx: null
}, v3 = function(e, t) {
  let { firstName: n, honorific: r } = e;
  if (n.has("#FemaleName"))
    return K;
  if (n.has("#MaleName"))
    return oe;
  if (r.found) {
    let a = r.text("normal");
    if (a = a.replace(/\./g, ""), ia.hasOwnProperty(a))
      return ia[a];
    if (/^her /.test(a))
      return K;
    if (/^his /.test(a))
      return oe;
  }
  let o = t.after();
  if (!o.has("#Person") && o.has("#Pronoun")) {
    let a = o.match("#Pronoun");
    if (a.has("(they|their)"))
      return null;
    let i = a.has("(he|his)"), s = a.has("(she|her|hers)");
    if (i && !s)
      return oe;
    if (s && !i)
      return K;
  }
  return null;
}, w3 = v3, P3 = function(e) {
  class t extends e {
    constructor(r, o, a) {
      super(r, o, a), this.viewType = "People";
    }
    parse(r) {
      return this.getNth(r).map(aa);
    }
    json(r) {
      let o = typeof r == "object" ? r : {};
      return this.getNth(r).map((a) => {
        let i = a.toView().json(o)[0], s = aa(a);
        return i.person = {
          firstName: s.firstName.text("normal"),
          lastName: s.lastName.text("normal"),
          honorific: s.honorific.text("normal"),
          presumed_gender: w3(s, a)
        }, i;
      }, []);
    }
    presumedMale() {
      return this.filter((r) => r.has("(#MaleName|mr|mister|sr|jr|king|pope|prince|sir)"));
    }
    presumedFemale() {
      return this.filter((r) => r.has("(#FemaleName|mrs|miss|queen|princess|madam)"));
    }
    update(r) {
      let o = new t(this.document, r);
      return o._cache = this._cache, o;
    }
  }
  e.prototype.people = function(n) {
    let r = y3(this);
    return r = r.getNth(n), new t(this.document, r.pointer);
  };
}, k3 = P3, A3 = function(e) {
  let t = e.match("(#Place|#Address)+"), n = t.match("@hasComma");
  return n = n.filter((r) => r.has("(asia|africa|europe|america)$") ? !0 : !(r.has("(#City|#Region|#ProperNoun)$") && r.after("^(#Country|#Region)").found)), t = t.splitAfter(n), t;
}, $3 = A3, I3 = function(e) {
  e.prototype.places = function(t) {
    let n = $3(this);
    return n = n.getNth(t), new e(this.document, n.pointer);
  };
}, x3 = I3, N3 = function(e) {
  e.prototype.organizations = function(t) {
    return this.match("#Organization+").getNth(t);
  };
}, j3 = N3, E3 = function(e) {
  let t = this.clauses(), n = t.people();
  return n = n.concat(t.places()), n = n.concat(t.organizations()), n = n.not("(someone|man|woman|mother|brother|sister|father)"), n = n.sort("seq"), n = n.getNth(e), n;
}, T3 = function(e) {
  e.prototype.topics = E3;
}, C3 = T3, D3 = function(e) {
  k3(e), x3(e), j3(e), C3(e);
}, O3 = { api: D3 }, F3 = function(e) {
  let t = e.match("<Verb>");
  return t = t.not("(#Conjunction && !to)"), t = t.not("#Preposition"), t = t.splitAfter("@hasComma"), t = t.splitAfter("[(do|did|am|was|is|will)] (is|was)", 0), t = t.splitBefore("(#Verb && !#Copula) [being] #Verb", 0), t = t.splitBefore("#Verb [to be] #Verb", 0), t = t.splitAfter("[help] #PresentTense", 0), t = t.splitBefore("(#PresentTense|#PastTense) [#Copula]$", 0), t = t.splitBefore("(#PresentTense|#PastTense) [will be]$", 0), t = t.not("#Reflexive$"), t = t.splitAfter("[#PastTense] #PastTense", 0), t = t.splitAfter("[#PastTense] #Auxiliary+ #PastTense", 0), t = t.splitAfter("#Copula [#Gerund] #PastTense", 0), t = t.if("#Verb"), t.has("(#Verb && !#Auxiliary) #Adverb+? #Copula") && (t = t.splitBefore("#Copula")), t;
}, V3 = F3, G3 = function(e) {
  let t = e;
  return e.wordCount() > 1 && (t = e.not("(#Negative|#Auxiliary|#Modal|#Adverb|#Prefix)")), t.length > 1 && !t.has("#Phrasal #Particle") && (t = t.last()), t = t.not("(want|wants|wanted) to"), t.found || (t = e.not("#Negative")), t;
}, B3 = G3, z3 = function(e, t) {
  let n = {
    pre: e.none(),
    post: e.none()
  };
  if (!e.has("#Adverb"))
    return n;
  let r = e.splitOn(t);
  return r.length === 3 ? {
    pre: r.eq(0).adverbs(),
    post: r.eq(2).adverbs()
  } : r.eq(0).isDoc(t) ? (n.post = r.eq(1).adverbs(), n) : (n.pre = r.eq(0).adverbs(), n);
}, S3 = z3, L3 = function(e, t) {
  let n = e.splitBefore(t);
  if (n.length <= 1)
    return e.none();
  let r = n.eq(0);
  return r = r.not("(#Adverb|#Negative|#Prefix)"), r;
}, M3 = function(e) {
  return e.match("#Negative");
}, W3 = function(e) {
  if (!e.has("(#Particle|#PhrasalVerb)"))
    return {
      verb: e.none(),
      particle: e.none()
    };
  let t = e.match("#Particle$");
  return {
    verb: e.not(t),
    particle: t
  };
}, H3 = function(e) {
  let t = e.clone();
  t.contractions().expand();
  const n = B3(t);
  return {
    root: n,
    prefix: t.match("#Prefix"),
    adverbs: S3(t, n),
    auxiliary: L3(t, n),
    negative: M3(t),
    phrasal: W3(n)
  };
}, pe = H3, ue = { tense: "PresentTense" }, Jt = { conditional: !0 }, Pe = { tense: "FutureTense" }, Xe = { progressive: !0 }, S = { tense: "PastTense" }, Ze = { complete: !0, progressive: !1 }, De = { passive: !0 }, J3 = { plural: !0 }, _3 = { plural: !1 }, q3 = function(e) {
  let t = {};
  return e.forEach((n) => {
    Object.assign(t, n);
  }), t;
}, sa = {
  imperative: [
    ["#Imperative", []]
  ],
  "want-infinitive": [
    ["^(want|wants|wanted) to #Infinitive$", [ue]],
    ["^wanted to #Infinitive$", [S]],
    ["^will want to #Infinitive$", [Pe]]
  ],
  "gerund-phrase": [
    ["^#PastTense #Gerund$", [S]],
    ["^#PresentTense #Gerund$", [ue]],
    ["^#Infinitive #Gerund$", [ue]],
    ["^will #Infinitive #Gerund$", [Pe]],
    ["^have #PastTense #Gerund$", [S]],
    ["^will have #PastTense #Gerund$", [S]]
  ],
  "simple-present": [
    ["^#PresentTense$", [ue]],
    ["^#Infinitive$", [ue]]
  ],
  "simple-past": [
    ["^#PastTense$", [S]]
  ],
  "simple-future": [
    ["^will #Adverb? #Infinitive", [Pe]]
  ],
  "present-progressive": [
    ["^(is|are|am) #Gerund$", [ue, Xe]]
  ],
  "past-progressive": [
    ["^(was|were) #Gerund$", [S, Xe]]
  ],
  "future-progressive": [
    ["^will be #Gerund$", [Pe, Xe]]
  ],
  "present-perfect": [
    ["^(has|have) #PastTense$", [S, Ze]]
  ],
  "past-perfect": [
    ["^had #PastTense$", [S, Ze]],
    ["^had #PastTense to #Infinitive", [S, Ze]]
  ],
  "future-perfect": [
    ["^will have #PastTense$", [Pe, Ze]]
  ],
  "present-perfect-progressive": [
    ["^(has|have) been #Gerund$", [S, Xe]]
  ],
  "past-perfect-progressive": [
    ["^had been #Gerund$", [S, Xe]]
  ],
  "future-perfect-progressive": [
    ["^will have been #Gerund$", [Pe, Xe]]
  ],
  "passive-past": [
    ["(got|were|was) #Passive", [S, De]],
    ["^(was|were) being #Passive", [S, De]],
    ["^(had|have) been #Passive", [S, De]]
  ],
  "passive-present": [
    ["^(is|are|am) #Passive", [ue, De]],
    ["^(is|are|am) being #Passive", [ue, De]],
    ["^has been #Passive", [ue, De]]
  ],
  "passive-future": [
    ["will have been #Passive", [Pe, De, Jt]],
    ["will be being? #Passive", [Pe, De, Jt]]
  ],
  "present-conditional": [
    ["would be #PastTense", [ue, Jt]]
  ],
  "past-conditional": [
    ["would have been #PastTense", [S, Jt]]
  ],
  "auxiliary-future": [
    ["(is|are|am|was) going to (#Infinitive|#PresentTense)", [Pe]]
  ],
  "auxiliary-past": [
    ["^did #Infinitive$", [S, _3]],
    ["^used to #Infinitive$", [S, Ze]]
  ],
  "auxiliary-present": [
    ["^(does|do) #Infinitive$", [ue, Ze, J3]]
  ],
  "modal-past": [
    ["^(could|must|should|shall) have #PastTense$", [S]]
  ],
  "modal-infinitive": [
    ["^#Modal #Infinitive$", []]
  ],
  infinitive: [
    ["^#Infinitive$", []]
  ]
};
let Bi = [];
Object.keys(sa).map((e) => {
  sa[e].forEach((t) => {
    Bi.push({
      name: e,
      match: t[0],
      data: q3(t[1])
    });
  });
});
const la = Bi, K3 = function(e, t) {
  return e = e.clone(), t.adverbs.post && t.adverbs.post.found && e.remove(t.adverbs.post), t.adverbs.pre && t.adverbs.pre.found && e.remove(t.adverbs.pre), e.has("#Negative") && (e = e.remove("#Negative")), e.has("#Prefix") && (e = e.remove("#Prefix")), t.root.has("#PhrasalVerb #Particle") && e.remove("#Particle$"), e = e.not("#Adverb"), e;
}, U3 = function(e, t) {
  let n = {};
  e = K3(e, t);
  for (let r = 0; r < la.length; r += 1) {
    let o = la[r];
    if (e.has(o.match) === !0) {
      n.form = o.name, Object.assign(n, o.data);
      break;
    }
  }
  return n.form || e.has("^#Verb$") && (n.form = "infinitive"), n.tense || (n.tense = t.root.has("#PastTense") ? "PastTense" : "PresentTense"), n.copula = t.root.has("#Copula"), n;
}, Oe = U3, ua = function(e) {
  return e.length <= 1 ? !1 : (e.parse()[0] || {}).isSubordinate;
}, R3 = function(e) {
  let t = e.clauses();
  return t = t.filter((n, r) => !(n.has("^(if|unless|while|but|for|per|at|by|that|which|who|from)") || r > 0 && n.has("^#Verb . #Noun+$") || r > 0 && n.has("^#Adverb"))), t.length === 0 ? e : t;
}, Q3 = function(e) {
  let t = e.before();
  t = R3(t);
  let n = t.nouns(), r = n.last(), o = r.match("(i|he|she|we|you|they)");
  if (o.found)
    return o.nouns();
  let a = n.if("^(that|this|those)");
  return a.found || n.found === !1 && (a = t.match("^(that|this|those)"), a.found) ? a : (r = n.last(), ua(r) && (n.remove(r), r = n.last()), ua(r) && (n.remove(r), r = n.last()), r);
}, Y3 = function(e, t) {
  return t.has("(are|were|does)") || e.has("(those|they|we)") ? !0 : e.found && e.isPlural ? e.isPlural().found : !1;
}, X3 = function(e) {
  let t = Q3(e);
  return {
    subject: t,
    plural: Y3(t, e)
  };
}, Ee = X3, D = (e) => e, gt = (e, t) => {
  let n = Ee(e), r = n.subject;
  return r.has("i") || r.has("we") ? !0 : n.plural;
}, Z3 = (e, t) => {
  let { subject: n, plural: r } = Ee(e);
  return r || n.has("we") ? "were" : "was";
}, mt = function(e, t) {
  if (e.has("were"))
    return "are";
  let { subject: n, plural: r } = Ee(e);
  return n.has("i") ? "am" : n.has("we") || r ? "are" : "is";
}, wr = function(e, t) {
  let n = Ee(e), r = n.subject;
  return r.has("i") || r.has("we") || n.plural ? "do" : "does";
}, de = function(e) {
  if (e.has("#Infinitive"))
    return "Infinitive";
  if (e.has("#Participle"))
    return "Participle";
  if (e.has("#PastTense"))
    return "PastTense";
  if (e.has("#Gerund"))
    return "Gerund";
  if (e.has("#PresentTense"))
    return "PresentTense";
}, er = function(e, t) {
  const { toInfinitive: n } = e.methods.two.transform.verb;
  let r = t.root.text({ keepPunct: !1 });
  return r = n(r, e.model, de(e)), r && e.replace(t.root, r), e;
}, ca = (e) => e.has("will not") ? e.replace("will not", "have not") : e.remove("will"), ha = function(e) {
  if (!e || !e.isView)
    return [];
  const t = { normal: !0, terms: !1, text: !1 };
  return e.json(t).map((n) => n.normal);
}, da = function(e) {
  return !e || !e.isView ? "" : e.text("normal");
}, ew = function(e) {
  const { toInfinitive: t } = e.methods.two.transform.verb;
  let n = e.text("normal");
  return t(n, e.model, de(e));
}, tw = function(e) {
  let t = pe(e);
  e = e.clone().toView();
  const n = Oe(e, t);
  return {
    root: t.root.text(),
    preAdverbs: ha(t.adverbs.pre),
    postAdverbs: ha(t.adverbs.post),
    auxiliary: da(t.auxiliary),
    negative: t.negative.found,
    prefix: da(t.prefix),
    infinitive: ew(t.root),
    grammar: n
  };
}, nw = tw, rw = { tags: !0 }, ow = function(e, t) {
  const { toInfinitive: n } = e.methods.two.transform.verb, { root: r, auxiliary: o } = t;
  let a = o.terms().harden(), i = r.text("normal");
  if (i = n(i, e.model, de(r)), i && e.replace(r, i, rw).tag("Verb").firstTerm().tag("Infinitive"), a.found && e.remove(a), t.negative.found) {
    e.has("not") || e.prepend("not");
    let s = wr(e);
    e.prepend(s);
  }
  return e.fullSentence().compute(["lexicon", "preTagger", "postTagger", "chunks"]), e;
}, fa = ow, re = { tags: !0 }, Ae = {
  noAux: (e, t) => (t.auxiliary.found && (e = e.remove(t.auxiliary)), e),
  simple: (e, t) => {
    const { conjugate: n, toInfinitive: r } = e.methods.two.transform.verb, o = t.root;
    if (o.has("#Modal"))
      return e;
    let a = o.text({ keepPunct: !1 });
    return a = r(a, e.model, de(o)), a = n(a, e.model).PastTense, a = a === "been" ? "was" : a, a === "was" && (a = Z3(e)), a && e.replace(o, a, re), e;
  },
  both: function(e, t) {
    return t.negative.found ? (e.replace("will", "did"), e) : (e = Ae.simple(e, t), e = Ae.noAux(e, t), e);
  },
  hasHad: (e) => (e.replace("has", "had", re), e),
  hasParticiple: (e, t) => {
    const { conjugate: n, toInfinitive: r } = e.methods.two.transform.verb, o = t.root;
    let a = o.text("normal");
    return a = r(a, e.model, de(o)), n(a, e.model).Participle;
  }
}, pa = {
  infinitive: Ae.simple,
  "simple-present": Ae.simple,
  "simple-past": D,
  "simple-future": Ae.both,
  "present-progressive": (e) => (e.replace("are", "were", re), e.replace("(is|are|am)", "was", re), e),
  "past-progressive": D,
  "future-progressive": (e, t) => (e.match(t.root).insertBefore("was"), e.remove("(will|be)"), e),
  "present-perfect": Ae.hasHad,
  "past-perfect": D,
  "future-perfect": (e, t) => (e.match(t.root).insertBefore("had"), e.has("will") && (e = ca(e)), e.remove("have"), e),
  "present-perfect-progressive": Ae.hasHad,
  "past-perfect-progressive": D,
  "future-perfect-progressive": (e) => (e.remove("will"), e.replace("have", "had", re), e),
  "passive-past": (e) => (e.replace("have", "had", re), e),
  "passive-present": (e) => (e.replace("(is|are)", "was", re), e),
  "passive-future": (e, t) => (t.auxiliary.has("will be") && (e.match(t.root).insertBefore("had been"), e.remove("(will|be)")), t.auxiliary.has("will have been") && (e.replace("have", "had", re), e.remove("will")), e),
  "present-conditional": (e) => (e.replace("be", "have been"), e),
  "past-conditional": D,
  "auxiliary-future": (e) => (e.replace("(is|are|am)", "was", re), e),
  "auxiliary-past": D,
  "auxiliary-present": (e) => (e.replace("(do|does)", "did", re), e),
  "modal-infinitive": (e, t) => (e.has("can") ? e.replace("can", "could", re) : (Ae.simple(e, t), e.match("#Modal").insertAfter("have").tag("Auxiliary")), e),
  "modal-past": D,
  "want-infinitive": (e) => (e.replace("(want|wants)", "wanted", re), e.remove("will"), e),
  "gerund-phrase": (e, t) => (t.root = t.root.not("#Gerund$"), Ae.simple(e, t), ca(e), e)
}, aw = function(e, t, n) {
  return pa.hasOwnProperty(n) && (e = pa[n](e, t), e.fullSentence().compute(["tagger", "chunks"])), e;
}, ga = aw, $e = { tags: !0 }, et = (e, t) => {
  const { conjugate: n, toInfinitive: r } = e.methods.two.transform.verb, o = t.root;
  let a = o.text("normal");
  return a = r(a, e.model, de(o)), gt(e) === !1 && (a = n(a, e.model).PresentTense), o.has("#Copula") && (a = mt(e)), a && (e = e.replace(o, a, $e), e.not("#Particle").tag("PresentTense")), e;
}, ma = (e, t) => {
  const { conjugate: n, toInfinitive: r } = e.methods.two.transform.verb, o = t.root;
  let a = o.text("normal");
  return a = r(a, e.model, de(o)), gt(e) === !1 && (a = n(a, e.model).Gerund), a && (e = e.replace(o, a, $e), e.not("#Particle").tag("Gerund")), e;
}, iw = (e, t) => {
  const { toInfinitive: n } = e.methods.two.transform.verb, r = t.root;
  let o = t.root.text("normal");
  return o = n(o, e.model, de(r)), o && (e = e.replace(t.root, o, $e)), e;
}, ya = {
  infinitive: et,
  "simple-present": (e, t) => {
    const { conjugate: n } = e.methods.two.transform.verb;
    let { root: r } = t;
    if (r.has("#Infinitive")) {
      let a = Ee(e).subject;
      if (gt(e) || a.has("i"))
        return e;
      let i = r.text("normal"), s = n(i, e.model).PresentTense;
      i !== s && e.replace(r, s, $e);
    } else
      return et(e, t);
    return e;
  },
  "simple-past": et,
  "simple-future": (e, t) => {
    const { root: n, auxiliary: r } = t;
    if (r.has("will") && n.has("be")) {
      let o = mt(e);
      e.replace(n, o), e = e.remove("will"), e.replace("not " + o, o + " not");
    } else
      et(e, t), e = e.remove("will");
    return e;
  },
  "present-progressive": D,
  "past-progressive": (e, t) => {
    let n = mt(e);
    return e.replace("(were|was)", n, $e);
  },
  "future-progressive": (e) => (e.match("will").insertBefore("is"), e.remove("be"), e.remove("will")),
  "present-perfect": (e, t) => (et(e, t), e = e.remove("(have|had|has)"), e),
  "past-perfect": (e, t) => {
    let r = Ee(e).subject;
    return gt(e) || r.has("i") ? (e = er(e, t), e.remove("had"), e) : (e.replace("had", "has", $e), e);
  },
  "future-perfect": (e) => (e.match("will").insertBefore("has"), e.remove("have").remove("will")),
  "present-perfect-progressive": D,
  "past-perfect-progressive": (e) => e.replace("had", "has", $e),
  "future-perfect-progressive": (e) => (e.match("will").insertBefore("has"), e.remove("have").remove("will")),
  "passive-past": (e, t) => {
    let n = mt(e);
    return e.has("(had|have|has)") && e.has("been") ? (e.replace("(had|have|has)", n, $e), e.replace("been", "being"), e) : e.replace("(got|was|were)", n);
  },
  "passive-present": D,
  "passive-future": (e) => (e.replace("will", "is"), e.replace("be", "being")),
  "present-conditional": D,
  "past-conditional": (e) => (e.replace("been", "be"), e.remove("have")),
  "auxiliary-future": (e, t) => (ma(e, t), e.remove("(going|to)"), e),
  "auxiliary-past": (e, t) => {
    if (t.auxiliary.has("did")) {
      let n = wr(e);
      return e.replace(t.auxiliary, n), e;
    }
    return ma(e, t), e.replace(t.auxiliary, "is"), e;
  },
  "auxiliary-present": D,
  "modal-infinitive": D,
  "modal-past": (e, t) => (iw(e, t), e.remove("have")),
  "gerund-phrase": (e, t) => (t.root = t.root.not("#Gerund$"), et(e, t), e.remove("(will|have)")),
  "want-infinitive": (e, t) => {
    let n = "wants";
    return gt(e) && (n = "want"), e.replace("(want|wanted|wants)", n, $e), e.remove("will"), e;
  }
}, sw = function(e, t, n) {
  return ya.hasOwnProperty(n) && (e = ya[n](e, t), e.fullSentence().compute(["tagger", "chunks"])), e;
}, ba = sw, zi = { tags: !0 }, _t = (e, t) => {
  const { toInfinitive: n } = e.methods.two.transform.verb, { root: r, auxiliary: o } = t;
  if (r.has("#Modal"))
    return e;
  let a = r.text("normal");
  return a = n(a, e.model, de(r)), a && (e = e.replace(r, a, zi), e.not("#Particle").tag("Verb")), e.prepend("will").match("will").tag("Auxiliary"), e.remove(o), e;
}, va = (e, t) => {
  const { conjugate: n, toInfinitive: r } = e.methods.two.transform.verb, { root: o, auxiliary: a } = t;
  let i = o.text("normal");
  return i = r(i, e.model, de(o)), i && (i = n(i, e.model).Gerund, e.replace(o, i, zi), e.not("#Particle").tag("PresentTense")), e.remove(a), e.prepend("will be").match("will be").tag("Auxiliary"), e;
}, wa = {
  infinitive: _t,
  "simple-present": _t,
  "simple-past": _t,
  "simple-future": D,
  "present-progressive": va,
  "past-progressive": va,
  "future-progressive": D,
  "present-perfect": (e) => (e.match("(have|has)").replaceWith("will have"), e),
  "past-perfect": (e) => e.replace("(had|has)", "will have"),
  "future-perfect": D,
  "present-perfect-progressive": (e) => e.replace("has", "will have"),
  "past-perfect-progressive": (e) => e.replace("had", "will have"),
  "future-perfect-progressive": D,
  "passive-past": (e) => e.has("got") ? e.replace("got", "will get") : e.has("(was|were)") ? (e.replace("(was|were)", "will be"), e.remove("being")) : e.has("(have|has|had) been") ? e.replace("(have|has|had) been", "will be") : e,
  "passive-present": (e) => (e.replace("being", "will be"), e.remove("(is|are|am)"), e),
  "passive-future": D,
  "present-conditional": (e) => e.replace("would", "will"),
  "past-conditional": (e) => e.replace("would", "will"),
  "auxiliary-future": D,
  "auxiliary-past": (e) => e.has("used") && e.has("to") ? (e.replace("used", "will"), e.remove("to")) : (e.replace("did", "will"), e),
  "auxiliary-present": (e) => e.replace("(do|does)", "will"),
  "modal-infinitive": D,
  "modal-past": D,
  "gerund-phrase": (e, t) => (t.root = t.root.not("#Gerund$"), _t(e, t), e.remove("(had|have)")),
  "want-infinitive": (e) => (e.replace("(want|wants|wanted)", "will want"), e)
}, lw = function(e, t, n) {
  return e.has("will") || e.has("going to") || wa.hasOwnProperty(n) && (e = wa[n](e, t), e.fullSentence().compute(["tagger", "chunks"])), e;
}, Pa = lw, uw = { tags: !0 }, cw = function(e, t) {
  const { toInfinitive: n, conjugate: r } = e.methods.two.transform.verb, { root: o, auxiliary: a } = t;
  if (e.has("#Gerund"))
    return e;
  let i = o.text("normal");
  i = n(i, e.model, de(o));
  let s = r(i, e.model).Gerund;
  return s && (s = `${mt(e)} ${s}`, e.replace(o, s, uw)), a.found && e.remove(a), e.replace("not is", "is not"), e.replace("not are", "are not"), e.fullSentence().compute(["tagger", "chunks"]), e;
}, hw = cw, ka = { tags: !0 }, Tn = function(e, t) {
  let n = wr(e);
  return e.prepend(n + " not"), e;
}, Rt = function(e) {
  let t = e.match("be");
  return t.found ? (t.prepend("not"), e) : (t = e.match("(is|was|am|are|will|were)"), t.found && t.append("not"), e);
}, Qt = (e) => e.has("(is|was|am|are|will|were|be)"), Aa = {
  "simple-present": (e, t) => Qt(e) === !0 ? Rt(e) : (e = er(e, t), e = Tn(e), e),
  "simple-past": (e, t) => Qt(e) === !0 ? Rt(e) : (e = er(e, t), e.prepend("did not"), e),
  imperative: (e) => (e.prepend("do not"), e),
  infinitive: (e, t) => Qt(e) === !0 ? Rt(e) : Tn(e),
  "passive-past": (e) => {
    if (e.has("got"))
      return e.replace("got", "get", ka), e.prepend("did not"), e;
    let t = e.match("(was|were|had|have)");
    return t.found && t.append("not"), e;
  },
  "auxiliary-past": (e) => {
    if (e.has("used"))
      return e.prepend("did not"), e;
    let t = e.match("(did|does|do)");
    return t.found && t.append("not"), e;
  },
  "want-infinitive": (e, t) => (e = Tn(e), e = e.replace("wants", "want", ka), e)
}, dw = function(e, t, n) {
  if (e.has("#Negative"))
    return e;
  if (Aa.hasOwnProperty(n))
    return e = Aa[n](e, t), e;
  let r = e.matchOne("be");
  return r.found ? (r.prepend("not"), e) : Qt(e) === !0 ? Rt(e) : (r = e.matchOne("(will|had|have|has|did|does|do|#Modal)"), r.found && r.append("not"), e);
}, fw = dw, pw = function(e) {
  class t extends e {
    constructor(r, o, a) {
      super(r, o, a), this.viewType = "Verbs";
    }
    parse(r) {
      return this.getNth(r).map(pe);
    }
    json(r, o) {
      return this.getNth(o).map((s) => {
        let l = s.toView().json(r)[0] || {};
        return l.verb = nw(s), l;
      }, []);
    }
    subjects(r) {
      return this.getNth(r).map((o) => (pe(o), Ee(o).subject));
    }
    adverbs(r) {
      return this.getNth(r).map((o) => o.match("#Adverb"));
    }
    isSingular(r) {
      return this.getNth(r).filter((o) => Ee(o).plural !== !0);
    }
    isPlural(r) {
      return this.getNth(r).filter((o) => Ee(o).plural === !0);
    }
    isImperative(r) {
      return this.getNth(r).filter((o) => o.has("#Imperative"));
    }
    toInfinitive(r) {
      return this.getNth(r).map((o) => {
        let a = pe(o), i = Oe(o, a);
        return fa(o, a, i.form);
      });
    }
    toPresentTense(r) {
      return this.getNth(r).map((o) => {
        let a = pe(o), i = Oe(o, a);
        return ba(o, a, i.form);
      });
    }
    toPastTense(r) {
      return this.getNth(r).map((o) => {
        let a = pe(o), i = Oe(o, a);
        return ga(o, a, i.form);
      });
    }
    toFutureTense(r) {
      return this.getNth(r).map((o) => {
        let a = pe(o), i = Oe(o, a);
        return Pa(o, a, i.form);
      });
    }
    toGerund(r) {
      return this.getNth(r).map((o) => {
        let a = pe(o), i = Oe(o, a);
        return hw(o, a, i.form);
      });
    }
    conjugate(r) {
      return this.getNth(r).map((o) => {
        let a = pe(o), i = Oe(o, a);
        return i.form === "imperative" && (i.form = "simple-present"), {
          Infinitive: fa(o.clone(), a, i.form).text("normal"),
          PastTense: ga(o.clone(), a, i.form).text("normal"),
          PresentTense: ba(o.clone(), a, i.form).text("normal"),
          FutureTense: Pa(o.clone(), a, i.form).text("normal")
        };
      }, []);
    }
    isNegative() {
      return this.if("#Negative");
    }
    isPositive() {
      return this.ifNo("#Negative");
    }
    toPositive() {
      let r = this.match("do not #Verb");
      return r.found && r.remove("do not"), this.remove("#Negative");
    }
    toNegative(r) {
      return this.getNth(r).map((o) => {
        let a = pe(o), i = Oe(o, a);
        return fw(o, a, i.form);
      });
    }
    update(r) {
      let o = new t(this.document, r);
      return o._cache = this._cache, o;
    }
  }
  t.prototype.toPast = t.prototype.toPastTense, t.prototype.toPresent = t.prototype.toPresentTense, t.prototype.toFuture = t.prototype.toFutureTense, e.prototype.verbs = function(n) {
    let r = V3(this);
    return r = r.getNth(n), new t(this.document, r.pointer);
  };
}, gw = pw, mw = {
  api: gw
}, tr = function(e, t) {
  let n = t.match(e);
  if (n.found) {
    let r = n.pronouns().refersTo();
    if (r.found)
      return r;
  }
  return t.none();
}, $a = function(e) {
  if (!e.found)
    return e;
  let [t] = e.fullPointer[0];
  return t && t > 0 ? e.update([[t - 1]]) : e.none();
}, yw = function(e, t) {
  return t === "m" ? e.filter((n) => !n.presumedFemale().found) : t === "f" ? e.filter((n) => !n.presumedMale().found) : e;
}, bw = function(e, t) {
  let n = e.people();
  return n = yw(n, t), n.found || (n = e.nouns("#Actor"), n.found) ? n.last() : t === "f" ? tr("(she|her|hers)", e) : t === "m" ? tr("(he|him|his)", e) : e.none();
}, Ia = bw, vw = function(e) {
  let t = e.nouns(), n = t.isPlural().notIf("#Pronoun");
  if (n.found)
    return n.last();
  let r = tr("(they|their|theirs)", e);
  return r.found ? r : (n = t.match("(somebody|nobody|everybody|anybody|someone|noone|everyone|anyone)"), n.found ? n.last() : e.none());
}, ww = vw, Pw = function(e, t) {
  if (t && t.found) {
    let n = e.docs[0][0];
    n.reference = t.ptrs[0];
  }
}, Cn = function(e, t) {
  let n = e.before(), r = t(n);
  return r.found || (n = $a(e), r = t(n), r.found) || (n = $a(n), r = t(n), r.found) ? r : e.none();
}, kw = function(e) {
  e.pronouns().if("(he|him|his|she|her|hers|they|their|theirs|it|its)").forEach((n) => {
    let r = null;
    n.has("(he|him|his)") ? r = Cn(n, (o) => Ia(o, "m")) : n.has("(she|her|hers)") ? r = Cn(n, (o) => Ia(o, "f")) : n.has("(they|their|theirs)") && (r = Cn(n, ww)), r && r.found && Pw(n, r);
  });
}, Aw = kw, $w = function(e) {
  class t extends e {
    constructor(r, o, a) {
      super(r, o, a), this.viewType = "Pronouns";
    }
    hasReference() {
      return this.compute("coreference"), this.filter((r) => r.docs[0][0].reference);
    }
    refersTo() {
      return this.compute("coreference"), this.map((r) => {
        if (!r.found)
          return r.none();
        let o = r.docs[0][0];
        return o.reference ? r.update([o.reference]) : r.none();
      });
    }
    update(r) {
      let o = new t(this.document, r);
      return o._cache = this._cache, o;
    }
  }
  e.prototype.pronouns = function(n) {
    let r = this.match("#Pronoun");
    return r = r.getNth(n), new t(r.document, r.pointer);
  };
}, Iw = $w, xw = {
  compute: { coreference: Aw },
  api: Iw
};
P.plugin(Zb);
P.plugin(xw);
P.plugin(Iv);
P.plugin(Ev);
P.plugin(Xv);
P.plugin(H2);
P.plugin(K2);
P.plugin(g3);
P.plugin(O3);
P.plugin(mw);
const Nw = {
  dedup: (e) => e.replace(/([^c])\1/g, "$1"),
  dropInitialLetters: (e) => e.match(/^(kn|gn|pn|ae|wr)/) ? e.substring(1, e.length - 1) : e,
  dropBafterMAtEnd: (e) => e.replace(/mb$/, "m"),
  cchange: (e) => (e = e.replace(/([^s]|^)(c)(h)/g, "$1x$3").trim(), e = e.replace(/cia/g, "xia"), e = e.replace(/c([iey])/g, "s$1"), e.replace(/c/g, "k")),
  dchange: (e) => (e = e.replace(/d(ge|gy|gi)/g, "j$1"), e.replace(/d/g, "t")),
  dropG: (e) => (e = e.replace(/gh(^$|[^aeiou])/g, "h$1"), e.replace(/g(n|ned)$/g, "$1")),
  changeG: (e) => (e = e.replace(/gh/g, "f"), e = e.replace(/([^g]|^)(g)([iey])/g, "$1j$3"), e = e.replace(/gg/g, "g"), e.replace(/g/g, "k")),
  dropH: (e) => e.replace(/([aeiou])h([^aeiou]|$)/g, "$1$2"),
  changeCK: (e) => e.replace(/ck/g, "k"),
  changePH: (e) => e.replace(/ph/g, "f"),
  changeQ: (e) => e.replace(/q/g, "k"),
  changeS: (e) => e.replace(/s(h|io|ia)/g, "x$1"),
  changeT: (e) => (e = e.replace(/t(ia[^n]|io)/g, "x$1"), e),
  dropT: (e) => e.replace(/tch/g, "ch"),
  changeV: (e) => e.replace(/v/g, "f"),
  changeWH: (e) => e.replace(/^wh/, "w"),
  dropW: (e) => e.replace(/w([^aeiou]|$)/g, "$1"),
  changeX: (e) => (e = e.replace(/^x/, "s"), e.replace(/x/g, "ks")),
  dropY: (e) => e.replace(/y([^aeiou]|$)/g, "$1"),
  changeZ: (e) => e.replace(/z/, "s"),
  dropVowels: (e) => e
}, C = Nw, jw = function(e) {
  return e = C.dedup(e), e = C.dropInitialLetters(e), e = C.dropBafterMAtEnd(e), e = C.changeCK(e), e = C.cchange(e), e = C.dchange(e), e = C.dropG(e), e = C.changeG(e), e = C.dropH(e), e = C.changePH(e), e = C.changeQ(e), e = C.changeS(e), e = C.changeX(e), e = C.changeT(e), e = C.dropT(e), e = C.changeV(e), e = C.changeWH(e), e = C.dropW(e), e = C.dropY(e), e = C.changeZ(e), e = C.dropVowels(e), e.trim();
}, Ew = jw, Tw = function(e) {
  e.docs.forEach((t) => {
    t.forEach((n) => {
      n.soundsLike = Ew(n.normal || n.text);
    });
  });
}, Cw = Tw, Dw = /^(eu)/i, xa = /^[^aeiou]e([^d]|$)/, Na = /^([^aeiouy])[aeiouy]\1[aeiouy]/, ja = /^[^aeiouy]([aeiouy])[^aeiouy]\1/, Ea = /^([tg][aeiouy]){2}/, Ow = /^[^aeiouy]+$/, Ta = /[aeiouy]$/, Ca = /^[^aeiouy]h?[aeiouy]/, Dn = [
  /^[^aeiou]?ion/,
  /^[^aeiou]?ised/,
  /^[^aeiou]?iled/,
  /[aeiou]n[gt]$/,
  /\wa[gt]e$/
], Fw = function(e) {
  e = e.map(function(n) {
    return n.trim();
  }), e = e.filter(function(n) {
    return n !== "";
  });
  let t = e.length;
  if (t > 1) {
    let n = e[t - 2] + e[t - 1];
    for (let r = 0; r < Dn.length; r++)
      n.match(Dn[r]) && (e[t - 2] = e[t - 2] + e[t - 1], e.pop());
  }
  if (e.length > 1) {
    let n = (e[0].length === 1 || e[0].match(Ca)) && e[0].match(Ta), r = e[1].match(xa);
    if (n && r) {
      let o = e[0] + e[1];
      o.match(Na) || o.match(ja) || o.match(Ea) || (e[0] = e[0] + e[1], e.splice(1, 1));
    }
  }
  if (e.length > 1) {
    let n = e[e.length - 2].match(Ca) && e[e.length - 2].match(Ta), r = e[e.length - 1].match(xa) && Dn.every((o) => !e[e.length - 1].match(o));
    if (n && r) {
      let o = e[e.length - 2] + e[e.length - 1];
      o.match(Na) || o.match(ja) || o.match(Ea) || (e[e.length - 2] = e[e.length - 2] + e[e.length - 1], e.splice(e.length - 1, 1));
    }
  }
  if (e.length > 1) {
    let n = e[0] + e[1];
    n.match(Dw) && (e[0] = n, e.splice(1, 1));
  }
  return e.length > 1 && e[e.length - 1].match(Ow) && (e[e.length - 2] = e[e.length - 2] + e[e.length - 1], e.splice(e.length - 1, 1)), e;
}, Vw = Fw, Gw = / +/g, On = /[aeiouy]$/, Bw = /^[^aeiouy]h?[aeiouy]/, zw = /^e[sm]/, Sw = /^e/, Lw = /(eo|eu|ia|oa|ua|ui)$/i, Mw = /[aiouy]/, Ww = /ee$/, Yt = function(e) {
  let t = [], n = e.split(""), r = "", o = "", a = "";
  for (let i = 0; i < n.length; i++) {
    r = n.slice(0, i).join(""), a = n[i], o = n.slice(i + 1, n.length).join("");
    let s = r + n[i];
    if (r.match(On) && !a.match(On))
      return o.match(zw) && (s += "e", o = o.replace(Sw, "")), t.push(s), t.concat(Yt(o));
    if (s.match(Lw))
      return t.push(r), t.push(a), t.concat(Yt(o));
    if (s.match(On) && o.match(Bw))
      return t.push(s), t.concat(Yt(o));
  }
  if (e.match(Mw) || e.match(Ww))
    t.push(e);
  else if (e) {
    let i = t.length - 1;
    i < 0 && (i = 0), t[i] = (t[i] || "") + e;
  }
  return t;
};
let Hw = function(e) {
  let t = [];
  return e && (e = e.replace(/[.,?]/g, ""), e.split(Gw).map((n) => {
    t = t.concat(Yt(n));
  }), t = Vw(t), t.length === 0 && (t = [e]), t = t.filter((n) => n)), t;
};
const Jw = Hw, _w = function(e) {
  e.docs.forEach((t) => {
    t.forEach((n) => {
      n.syllables = Jw(n.normal || n.text);
    });
  });
}, qw = _w, Kw = {
  soundsLike: Cw,
  syllables: qw
}, Uw = function(e) {
  e.prototype.syllables = function() {
    this.compute("syllables");
    let t = [];
    return this.docs.forEach((n) => {
      let r = [];
      n.forEach((o) => {
        r = r.concat(o.syllables);
      }), r.length > 0 && t.push(r);
    }), t;
  }, e.prototype.soundsLike = function() {
    this.compute("soundsLike");
    let t = [];
    return this.docs.forEach((n) => {
      let r = [];
      n.forEach((o) => {
        r = r.concat(o.soundsLike);
      }), r.length > 0 && t.push(r);
    }), t;
  };
}, Rw = Uw, Qw = {
  api: Rw,
  compute: Kw
};
function Da(e, t, n) {
  const r = e.slice();
  return r[7] = t[n], r;
}
function Oa(e, t, n) {
  const r = e.slice();
  return r[10] = t[n], r;
}
function Fa(e) {
  let t;
  return {
    c() {
      t = ge("p"), t.textContent = `Need help writing some gnarly bars?? Well hip hop helper is here
				to hip hop help you out! Just input your text and we'll split it
				up into syllables.`;
    },
    m(n, r) {
      qe(n, t, r);
    },
    d(n) {
      n && Ke(t);
    }
  };
}
function Va(e) {
  let t, n, r;
  return n = new es({ props: { value: e[10] } }), {
    c() {
      t = ge("td"), za(n.$$.fragment), Ne(t, "class", "svelte-c1q05p");
    },
    m(o, a) {
      qe(o, t, a), Sa(n, t, null), r = !0;
    },
    p(o, a) {
      const i = {};
      a & 4 && (i.value = o[10]), n.$set(i);
    },
    i(o) {
      r || (je(n.$$.fragment, o), r = !0);
    },
    o(o) {
      Je(n.$$.fragment, o), r = !1;
    },
    d(o) {
      o && Ke(t), La(n);
    }
  };
}
function Ga(e) {
  let t, n, r, o = e[7], a = [];
  for (let s = 0; s < o.length; s += 1)
    a[s] = Va(Oa(e, o, s));
  const i = (s) => Je(a[s], 1, 1, () => {
    a[s] = null;
  });
  return {
    c() {
      t = ge("tr");
      for (let s = 0; s < a.length; s += 1)
        a[s].c();
      n = Xt(), Ne(t, "class", "line svelte-c1q05p");
    },
    m(s, l) {
      qe(s, t, l);
      for (let u = 0; u < a.length; u += 1)
        a[u].m(t, null);
      Ie(t, n), r = !0;
    },
    p(s, l) {
      if (l & 4) {
        o = s[7];
        let u;
        for (u = 0; u < o.length; u += 1) {
          const c = Oa(s, o, u);
          a[u] ? (a[u].p(c, l), je(a[u], 1)) : (a[u] = Va(c), a[u].c(), je(a[u], 1), a[u].m(t, n));
        }
        for (Ma(), u = o.length; u < a.length; u += 1)
          i(u);
        Wa();
      }
    },
    i(s) {
      if (!r) {
        for (let l = 0; l < o.length; l += 1)
          je(a[l]);
        r = !0;
      }
    },
    o(s) {
      a = a.filter(Boolean);
      for (let l = 0; l < a.length; l += 1)
        Je(a[l]);
      r = !1;
    },
    d(s) {
      s && Ke(t), Ha(a, s);
    }
  };
}
function Yw(e) {
  let t, n, r, o, a, i, s, l, u, c = !e[1] && Fa(), h = e[2], d = [];
  for (let $ = 0; $ < h.length; $ += 1)
    d[$] = Ga(Da(e, h, $));
  const x = ($) => Je(d[$], 1, 1, () => {
    d[$] = null;
  });
  return {
    c() {
      t = ge("div"), c && c.c(), n = Xt(), r = ge("textarea"), o = Xt(), a = ge("div"), i = ge("table");
      for (let $ = 0; $ < d.length; $ += 1)
        d[$].c();
      Ne(r, "class", "svelte-c1q05p"), Ne(i, "class", "inner svelte-c1q05p"), Ne(a, "class", "bars svelte-c1q05p"), Ne(t, "class", "container svelte-c1q05p"), Zt(t, "fullscreen", e[1]);
    },
    m($, W) {
      qe($, t, W), c && c.m(t, null), Ie(t, n), Ie(t, r), Ar(r, e[0]), Ie(t, o), Ie(t, a), Ie(a, i);
      for (let B = 0; B < d.length; B += 1)
        d[B].m(i, null);
      s = !0, l || (u = Ba(r, "input", e[3]), l = !0);
    },
    p($, W) {
      if ($[1] ? c && (c.d(1), c = null) : c || (c = Fa(), c.c(), c.m(t, n)), W & 1 && Ar(r, $[0]), W & 4) {
        h = $[2];
        let B;
        for (B = 0; B < h.length; B += 1) {
          const Pr = Da($, h, B);
          d[B] ? (d[B].p(Pr, W), je(d[B], 1)) : (d[B] = Ga(Pr), d[B].c(), je(d[B], 1), d[B].m(i, null));
        }
        for (Ma(), B = h.length; B < d.length; B += 1)
          x(B);
        Wa();
      }
      (!s || W & 2) && Zt(t, "fullscreen", $[1]);
    },
    i($) {
      if (!s) {
        for (let W = 0; W < h.length; W += 1)
          je(d[W]);
        s = !0;
      }
    },
    o($) {
      d = d.filter(Boolean);
      for (let W = 0; W < d.length; W += 1)
        Je(d[W]);
      s = !1;
    },
    d($) {
      $ && Ke(t), c && c.d(), Ha(d, $), l = !1, u();
    }
  };
}
function Xw(e) {
  let t, n, r;
  function o(i) {
    e[4](i);
  }
  let a = {
    $$slots: { default: [Yw] },
    $$scope: { ctx: e }
  };
  return e[1] !== void 0 && (a.fullscreen = e[1]), t = new Yi({ props: a }), qi.push(() => Ki(t, "fullscreen", o, e[1])), {
    c() {
      za(t.$$.fragment);
    },
    m(i, s) {
      Sa(t, i, s), r = !0;
    },
    p(i, [s]) {
      const l = {};
      s & 8199 && (l.$$scope = { dirty: s, ctx: i }), !n && s & 2 && (n = !0, l.fullscreen = i[1], Ui(() => n = !1)), t.$set(l);
    },
    i(i) {
      r || (je(t.$$.fragment, i), r = !0);
    },
    o(i) {
      Je(t.$$.fragment, i), r = !1;
    },
    d(i) {
      La(t, i);
    }
  };
}
function Zw(e, t, n) {
  let r;
  P.extend(Qw);
  let o = !1, a = `There was a man from Californ-ya
Who really did try to warny ya
So turn off the light
When you say goodnight
Or you'll wish you'd a done it earl-ya`;
  function i(c) {
    return c.split(/\r?\n/).map(s);
  }
  function s(c) {
    const h = P(c);
    h.compute("syllables");
    const d = [];
    for (const x of h.document)
      for (const $ of x)
        for (const W of $.syllables)
          d.push(W);
    return d;
  }
  function l() {
    a = this.value, n(0, a);
  }
  function u(c) {
    o = c, n(1, o);
  }
  return e.$$.update = () => {
    e.$$.dirty & 1 && n(2, r = i(a));
  }, [
    a,
    o,
    r,
    l,
    u
  ];
}
class eP extends nr {
  constructor(t) {
    super(), rr(this, t, Zw, Xw, an, {});
  }
}
const rP = new eP({
  target: document.getElementById("hip_hop_helper_v1")
});
export {
  rP as default
};
