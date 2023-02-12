(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("main.svelte-x27xhg{display:flex;justify-content:center}main.svelte-e7todb{position:relative}main.fullscreen.svelte-e7todb{position:fixed;width:100vw;height:100vh;left:0;top:0;z-index:1000}button.svelte-e7todb{position:absolute;right:0;bottom:0}.container.svelte-jmg7lu.svelte-jmg7lu{display:flex;width:100%;height:100%;flex-direction:column;background-color:#000}.container.svelte-jmg7lu textarea.svelte-jmg7lu,.container.svelte-jmg7lu .bars.svelte-jmg7lu{font-size:1rem;color:#fff;background-color:#000}.container.fullscreen.svelte-jmg7lu textarea.svelte-jmg7lu,.container.fullscreen.svelte-jmg7lu .bars.svelte-jmg7lu{height:50vh;overflow:auto}.container.fullscreen.svelte-jmg7lu .bars .inner.svelte-jmg7lu{text-align:center;padding:1rem;margin-left:auto;margin-right:auto}.line.svelte-jmg7lu.svelte-jmg7lu{margin:.5rem 0}.line.svelte-jmg7lu .bar.svelte-jmg7lu{padding:0 .5rem;margin:0 .5rem;background-color:#303030}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import { S as f, i as _, s as g, e as p, t as c, a as v, b as x, c as o, l as C, d as $, n as d, f as b } from "./index-bf08be85.js";
function h(a) {
  let t, e, n, l, u, i, m;
  return {
    c() {
      t = p("main"), e = p("button"), n = c("Clicked "), l = c(a[0]), u = c(" times"), v(t, "class", "svelte-x27xhg");
    },
    m(s, r) {
      x(s, t, r), o(t, e), o(e, n), o(e, l), o(e, u), i || (m = C(e, "click", a[1]), i = !0);
    },
    p(s, [r]) {
      r & 1 && $(l, s[0]);
    },
    i: d,
    o: d,
    d(s) {
      s && b(t), i = !1, m();
    }
  };
}
function y(a, t, e) {
  let n = 0;
  return [n, () => {
    e(0, n += 1);
  }];
}
class k extends f {
  constructor(t) {
    super(), _(this, t, y, h, g, {});
  }
}
const q = new k({
  target: document.getElementById("counter")
});
export {
  q as default
};
