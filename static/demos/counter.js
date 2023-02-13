(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("main.svelte-x27xhg{display:flex;justify-content:center}main.svelte-e7todb{position:relative}main.fullscreen.svelte-e7todb{position:fixed;width:100vw;height:100vh;left:0;top:0;z-index:1000}button.svelte-e7todb{position:absolute;right:0;bottom:0}.bar.svelte-13x1b4a{padding:0 .5rem;margin:0 .1rem;background-color:#303030;text-align:center}.fade-in.svelte-13x1b4a{animation:svelte-13x1b4a-fadeIn .4s}@keyframes svelte-13x1b4a-fadeIn{0%{background-color:#f9e076}}.container.svelte-10hhzd9.svelte-10hhzd9{display:flex;width:100%;height:100%;flex-direction:column;background-color:#000}.container.svelte-10hhzd9 textarea.svelte-10hhzd9,.container.svelte-10hhzd9 .bars.svelte-10hhzd9{font-size:1rem;color:#fff;background-color:#000}.container.fullscreen.svelte-10hhzd9 textarea.svelte-10hhzd9,.container.fullscreen.svelte-10hhzd9 .bars.svelte-10hhzd9{height:50vh;overflow:auto}.container.fullscreen.svelte-10hhzd9 .bars .inner.svelte-10hhzd9{text-align:center;padding:1rem;margin-left:auto;margin-right:auto}.line.svelte-10hhzd9.svelte-10hhzd9{margin:.5rem 0}table.svelte-10hhzd9.svelte-10hhzd9,td.svelte-10hhzd9.svelte-10hhzd9,tr.svelte-10hhzd9.svelte-10hhzd9{all:revert}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import { S as f, i as _, s as g, e as p, t as c, a as v, b as x, c as o, l as C, d as $, n as d, f as b } from "./index-ba35a221.js";
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
