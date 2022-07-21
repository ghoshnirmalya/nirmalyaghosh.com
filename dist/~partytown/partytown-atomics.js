/* Partytown 0.4.5 - MIT builder.io */
((e) => {
  const t = () => {},
    r = (e) => e.length,
    n = (e) => {
      try {
        return e.constructor.name;
      } catch (e) {}
      return "";
    },
    i = (e, t) => e.startsWith(t),
    s = (e) =>
      !(
        i(e, "webkit") ||
        i(e, "toJSON") ||
        i(e, "constructor") ||
        i(e, "toString") ||
        i(e, "_")
      ),
    o = () => Math.round(Math.random() * Number.MAX_SAFE_INTEGER).toString(36),
    a = {
      Anchor: "a",
      DList: "dl",
      Image: "img",
      OList: "ol",
      Paragraph: "p",
      Quote: "q",
      TableCaption: "caption",
      TableCell: "td",
      TableCol: "colgroup",
      TableRow: "tr",
      TableSection: "tbody",
      UList: "ul",
    },
    l = { Graphics: "g", SVG: "svg" },
    c = Symbol(),
    u = Symbol(),
    h = new Map(),
    p = new Map(),
    d = {},
    m = new WeakMap(),
    g = (e, t) => {
      if (e) return (t = m.get(e)) || (t = e[c]) || y(e, (t = o())), t;
    },
    f = (e, t, r, n, i) => {
      if ((r = d[e]) && r.T) {
        if (e === t) return r.T;
        if (((n = r.T.document), "d" === (i = t.split(".").pop()))) return n;
        if ("e" === i) return n.documentElement;
        if ("h" === i) return n.head;
        if ("b" === i) return n.body;
      }
      return h.get(t);
    },
    y = (e, t, r) => {
      e &&
        (h.set(t, e),
        (e[c] = t),
        (e[u] = r = Date.now()),
        r > w + 5e3 &&
          (h.forEach((e, t) => {
            e[u] < w && e.nodeType && !e.isConnected && h.delete(t);
          }),
          (w = r)));
    };
  let w = 0;
  const $ = e.parent,
    S = document,
    b = $.partytown || {},
    v = (b.lib || "/~partytown/") + "",
    T = (e, t, r, s, o) =>
      void 0 !== t && (s = typeof t)
        ? "string" === s || "number" === s || "boolean" === s || null == t
          ? [0, t]
          : "function" === s
          ? [6]
          : (r = r || new Set()) && Array.isArray(t)
          ? r.has(t)
            ? [1, []]
            : r.add(t) && [1, t.map((t) => T(e, t, r))]
          : "object" === s
          ? "" === (o = n(t))
            ? [2, {}]
            : "Window" === o
            ? [3, [e, e]]
            : "HTMLCollection" === o || "NodeList" === o
            ? [7, Array.from(t).map((t) => T(e, t, r)[1])]
            : o.endsWith("Event")
            ? [5, E(e, t, r)]
            : "CSSRuleList" === o
            ? [12, Array.from(t).map(I)]
            : i(o, "CSS") && o.endsWith("Rule")
            ? [11, I(t)]
            : "CSSStyleDeclaration" === o
            ? [13, E(e, t, r)]
            : "Attr" === o
            ? [10, [t.name, t.value]]
            : t.nodeType
            ? [3, [e, g(t), t.nodeName]]
            : [2, E(e, t, r, !0, !0)]
          : void 0
        : t,
    E = (e, t, r, n, i, o, a, l) => {
      if (((o = {}), !r.has(t)))
        for (a in (r.add(t), t))
          s(a) &&
            ((l = t[a]),
            (n || "function" != typeof l) &&
              (i || "" !== l) &&
              (o[a] = T(e, l, r)));
      return o;
    },
    I = (e) => {
      let t,
        r = {};
      for (t in e) x.includes(t) && (r[t] = String(e[t]));
      return r;
    },
    M = (t, r, n, i) =>
      r
        ? ((n = r[0]),
          (i = r[1]),
          0 === n
            ? i
            : 4 === n
            ? N(t, i)
            : 1 === n
            ? i.map((e) => M(t, e))
            : 3 === n
            ? f(i[0], i[1])
            : 5 === n
            ? A(L(t, i))
            : 2 === n
            ? L(t, i)
            : 8 === n
            ? i
            : 9 === n
            ? new e[r[2]](i)
            : void 0)
        : void 0,
    N = (e, { U: t, w: r, K: n }, i) => (
      (i = p.get(n)) ||
        ((i = function (...i) {
          e.postMessage([7, { U: t, w: r, K: n, Q: T(t, this), b: T(t, i) }]);
        }),
        p.set(n, i)),
      i
    ),
    A = (e) => new ("detail" in e ? CustomEvent : Event)(e.type, e),
    L = (e, t, r, n) => {
      for (n in ((r = {}), t)) r[n] = M(e, t[n]);
      return r;
    },
    x =
      "cssText,selectorText,href,media,namespaceURI,prefix,name,conditionText".split(
        ","
      ),
    C = async (e, t) => {
      let n,
        i,
        s,
        o,
        a,
        l,
        c = { E: t.E },
        u = r(t.P),
        h = 0;
      for (; h < u; h++)
        try {
          (l = h === u - 1),
            (n = t.P[h]),
            (i = n.U),
            (s = n.a),
            !d[i] &&
              i.startsWith("f_") &&
              (await new Promise((e) => {
                let t = 0,
                  r = () => {
                    d[i] || t++ > 1e3 ? e() : requestAnimationFrame(r);
                  };
                r();
              })),
            1 === s[0] && s[1] in d[i].T
              ? y(new d[i].T[s[1]](...M(e, s[2])), n.w)
              : ((o = f(i, n.w)),
                o
                  ? ((a = R(e, o, s, l, n.r)),
                    n.d &&
                      ("string" == typeof n.d
                        ? y(a, n.d)
                        : (d[n.d.U] = { U: n.d.U, T: { document: a } })),
                    "object" == typeof (p = a) &&
                      p &&
                      p.then &&
                      ((a = await a), (c.z = !0)),
                    (c.L = T(i, a)))
                  : (c.p = n.w + " not found"));
        } catch (e) {
          l ? (c.p = String(e.stack || e)) : console.error(e);
        }
      var p;
      return c;
    },
    R = (e, t, n, i, s) => {
      let o,
        a,
        l,
        c,
        u,
        h = 0,
        p = r(n);
      for (; h < p; h++) {
        (a = n[h]), (o = n[h + 1]), (l = n[h - 1]);
        try {
          if (!Array.isArray(o))
            if ("string" == typeof a || "number" == typeof a) {
              if (h + 1 === p && s)
                return (u = {}), s.map((e) => (u[e] = t[e])), u;
              t = t[a];
            } else {
              if (0 === o) return void (t[l] = M(e, a));
              if (
                "function" == typeof t[l] &&
                ((c = M(e, a)),
                "insertRule" === l &&
                  c[1] > r(t.cssRules) &&
                  (c[1] = r(t.cssRules)),
                (t = t[l].apply(t, c)),
                "play" === l)
              )
                return Promise.resolve();
            }
        } catch (e) {
          if (i) throw e;
          console.debug(e);
        }
      }
      return t;
    },
    O = (e, t, r) => {
      if (!m.has(r)) {
        m.set(r, t);
        const n = r.document,
          i = r.history,
          s = m.get(r.parent),
          o = () =>
            e.postMessage([
              3,
              { U: t, I: s, R: n.baseURI, S: n.visibilityState },
            ]),
          a = i.pushState.bind(i),
          l = i.replaceState.bind(i),
          c = () => setTimeout(() => e.postMessage([11, t, n.baseURI]));
        (i.pushState = (e, t, r) => {
          a(e, t, r), c();
        }),
          (i.replaceState = (e, t, r) => {
            l(e, t, r), c();
          }),
          r.addEventListener("popstate", c),
          r.addEventListener("hashchange", c),
          n.addEventListener("visibilitychange", () =>
            e.postMessage([12, t, n.visibilityState])
          ),
          (d[t] = { U: t, T: r }),
          "complete" === n.readyState ? o() : r.addEventListener("load", o);
      }
    },
    D = (e, t) => {
      let n,
        i,
        s,
        o = t.U,
        a = t.T,
        l = a.document;
      l && l.body
        ? ((n = l.querySelector(
            'script[type="text/partytown"]:not([data-ptid]):not([data-pterror]):not([async]):not([defer])'
          )),
          n ||
            (n = l.querySelector(
              'script[type="text/partytown"]:not([data-ptid]):not([data-pterror])'
            )),
          n
            ? ((n.dataset.ptid = i = g(n, o)),
              (s = { U: o, w: i }),
              n.src
                ? ((s.R = n.src), (s.G = n.dataset.ptsrc || n.src))
                : (s.j = n.innerHTML),
              e.postMessage([5, s]))
            : (t.x ||
                ((t.x = 1),
                ((e, t, n) => {
                  let i,
                    s,
                    o = n._ptf,
                    a = (n.partytown || {}).forward || [],
                    l = (r, n) =>
                      e.postMessage([
                        8,
                        { U: t, q: r, b: T(t, Array.from(n)) },
                      ]);
                  if (
                    ((n._ptf = void 0),
                    a.map((e) => {
                      (s = n),
                        e.split(".").map((e, t, n) => {
                          s = s[n[t]] =
                            t + 1 < r(n)
                              ? s[n[t]] || ("push" === n[t + 1] ? [] : {})
                              : (...e) => l(n, e);
                        });
                    }),
                    o)
                  )
                    for (i = 0; i < r(o); i += 2) l(o[i], o[i + 1]);
                })(e, o, a),
                l.dispatchEvent(new CustomEvent("pt0"))),
              e.postMessage([6, o])))
        : requestAnimationFrame(() => D(e, t));
    },
    H = (e, t, r) => {
      let n = [],
        i = [e, "Object", n];
      for (r in t) P(n, t, r);
      return i;
    },
    U = (e, t, r, i, s) => {
      if ("Object" !== t && !e.some((e) => e[0] === t)) {
        const o = Object.getPrototypeOf(r),
          a = n(o),
          l = [];
        U(e, a, o, i, s),
          Object.keys(Object.getOwnPropertyDescriptors(r)).map((e) =>
            P(l, i, e)
          ),
          e.push([t, a, l, s, i.nodeName]);
      }
    },
    P = (e, t, r, i, o, a) => {
      try {
        s(r) &&
          isNaN(r[0]) &&
          "all" !== r &&
          ("function" == (o = typeof (i = t[r]))
            ? (String(i).includes("[native") || Object.getPrototypeOf(t)[r]) &&
              e.push([r, 5])
            : "object" === o && null != i
            ? "Object" !== (a = n(i)) && self[a] && e.push([r, i.nodeType || a])
            : "symbol" !== o &&
              (r.toUpperCase() === r ? e.push([r, 6, i]) : e.push([r, 6])));
      } catch (e) {
        console.warn(e);
      }
    },
    _ = (e) => {
      let t,
        n = [],
        i = 0,
        s = r($[e]);
      for (; i < s; i++) (t = $[e].key(i)), n.push([t, $[e].getItem(t)]);
      return n;
    },
    F = (e, r) => (void 0 !== e[r] ? new e[r](t) : 0);
  let J;
  (async (e) => {
    const t = new SharedArrayBuffer(1073741824),
      r = new Int32Array(t);
    return (i, s) => {
      const c = s[0],
        u = s[1];
      if (0 === c) {
        const e = (() => {
          const e = S.implementation.createHTMLDocument(),
            t = e.createElement("i"),
            r = e.createTextNode(""),
            i = e.createComment(""),
            s = e.createDocumentFragment(),
            o = F($, "IntersectionObserver"),
            c = F($, "MutationObserver"),
            u = F($, "ResizeObserver"),
            h = $.performance,
            p = $.screen,
            d = Object.getOwnPropertyNames($)
              .map((t) =>
                ((e, t, r, n) => {
                  if ((r = t.match(/^(HTML|SVG)(.+)Element$/)))
                    return (
                      (n = r[2]),
                      "S" == t[0]
                        ? e.createElementNS(
                            "http://www.w3.org/2000/svg",
                            l[n] || n.slice(0, 2).toLowerCase() + n.slice(2)
                          )
                        : e.createElement(a[n] || n)
                    );
                })(e, t)
              )
              .filter((e) => e)
              .map((e) => [e]),
            m = [
              [$.history],
              [h],
              [h.navigation],
              [h.timing],
              [p],
              [p.orientation],
              [$.visualViewport],
              [o, 12],
              [c, 12],
              [u, 12],
              [r],
              [i],
              [s],
              [t],
              [t.attributes],
              [t.classList],
              [t.dataset],
              [t.style],
              [e],
              [e.doctype],
              ...d,
            ]
              .filter((e) => e[0])
              .map((e) => {
                const t = e[0],
                  r = e[1],
                  i = n(t);
                return [i, $[i].prototype, t, r];
              }),
            g = [H("Window", $), H("Node", r)],
            f = {
              i: JSON.stringify(
                b,
                (e, t) => (
                  "function" == typeof t &&
                    (t = String(t)).startsWith(e + "(") &&
                    (t = "function " + t),
                  t
                )
              ),
              B: new URL(v, $.location) + "",
              v: g,
              H: origin,
              C: _("localStorage"),
              N: _("sessionStorage"),
            };
          return (
            m.map(([e, t, r, n]) => U(g, e, t, r, n)),
            ((e, t, r) => {
              void 0 !== t[r] &&
                e.push([
                  r,
                  "Object",
                  Object.keys(t[r].prototype).map((e) => [e, 6]),
                  12,
                ]);
            })(g, $, "IntersectionObserverEntry"),
            f
          );
        })();
        (e.O = t), i.postMessage([1, e]);
      } else
        9 === c
          ? e(u, (e) => {
              const t = JSON.stringify(e),
                n = t.length;
              for (let e = 0; e < n; e++) r[e + 1] = t.charCodeAt(e);
              (r[0] = n), Atomics.notify(r, 0);
            })
          : ((e, t, r) => {
              2 === t[0]
                ? O(e, o(), $)
                : (r = d[t[1]]) &&
                  (5 === t[0]
                    ? requestAnimationFrame(() => D(e, r))
                    : 4 === t[0] &&
                      ((e, t, r, n, i) => {
                        (i = t.T.document.querySelector(
                          `[data-ptid="${r}"]`
                        )) &&
                          (n ? (i.dataset.pterror = n) : (i.type += "-x"),
                          delete i.dataset.ptid),
                          D(e, t);
                      })(e, r, t[2], t[3]));
            })(i, s);
    };
  })((e, t) => C(J, e).then(t)).then((e) => {
    e &&
      ((J = new Worker(
        URL.createObjectURL(
          new Blob(
            [
              '/* Partytown 0.4.5 - MIT builder.io */\n(e=>{const t=Symbol(),r=Symbol(),n=Symbol(),i=Symbol(),s=Symbol(),o=Symbol(),a=Symbol(),l=Symbol(),$=new Map,c={},u=new WeakMap,d=[],h={},p=new Map,g=new Map,m={},f=new Map,w=new Map,y="about:blank",S=e=>e.split(","),v=e=>{if(e=h.B+e,new URL(e).origin!=location.origin)throw"Invalid "+e;return e},b=S("clientWidth,clientHeight,clientTop,clientLeft,innerWidth,innerHeight,offsetWidth,offsetHeight,offsetTop,offsetLeft,outerWidth,outerHeight,pageXOffset,pageYOffset,scrollWidth,scrollHeight,scrollTop,scrollLeft"),I=S("childElementCount,children,firstElementChild,lastElementChild,nextElementSibling,previousElementSibling"),M=S("insertBefore,remove,removeChild,replaceChild"),T=S("className,width,height,hidden,innerHTML,innerText,textContent"),E=S("setAttribute,setAttributeNS,setProperty"),N=S("addEventListener,dispatchEvent,removeEventListener"),L=N.concat(E,S("add,observe,remove,unobserve")),x=/^[A-Z]([A-Z0-9-]*[A-Z0-9])?$/,A=()=>{},C=e=>e.length,R=e=>{try{return e.constructor.name}catch(e){}return""},P=[],H=()=>Math.round(Math.random()*Number.MAX_SAFE_INTEGER).toString(36),W="text/partytown",O=(e,t,r)=>Object.defineProperty(e,t,{...r,configurable:!0}),D=(e,t)=>O(e,"name",{value:t}),k=(e,t,r)=>O(e.prototype,t,r),B=(e,t)=>Object.defineProperties(e.prototype,t),j=(e,t,r)=>k(e,t,{value:r,writable:!0}),U=(e,t)=>t in e[o],F=(e,t)=>e[o][t],_=(e,t,r)=>e[o][t]=r,V=(e,t,r)=>console.warn(`Partytown unable to ${e} cross-origin ${t}: `+r.D),z=[],G=(e,n,i,o,a,l)=>{if(z.push({U:e[t],w:e[r],a:[...e[s],...n],d:o,r:a}),3===i)h.J([10,{E:H(),P:[...z]}],l?[l instanceof ArrayBuffer?l:l.buffer]:void 0),z.length=0;else if(1===i)return X(!0);h.c=setTimeout(X,20)},X=e=>{if(clearTimeout(h.c),C(z)){const t=z[C(z)-1],r={E:H(),P:[...z]};if(z.length=0,e){const e=((e,t)=>{const r=e.O,n=new Int32Array(r);Atomics.store(n,0,0),e.J([9,t]),Atomics.wait(n,0,0);let i=Atomics.load(n,0),s="",o=0;for(;o<i;o++)s+=String.fromCharCode(n[o+1]);return JSON.parse(s)})(h,r),n=e.z,i=ce(t.U,t.w,t.a,e.L);if(e.p){if(n)return Promise.reject(e.p);throw new Error(e.p)}return n?Promise.resolve(i):i}h.J([10,r])}},q=(e,t,r,n)=>h.i.get&&(n=h.i.get(K(e,t)))!==a?n:n=G(e,t,1,void 0,r),Z=(e,t,r,n)=>{if(h.i.set){if((n=h.i.set({value:r,prevent:l,...K(e,t)}))===l)return;n!==a&&(r=n)}T.some((e=>t.includes(e)))&&(f.clear(),t[t.length-1]),t=[...t,$e(e,r),0],G(e,t,2)},J=(e,t,r,n,i,s,o,l)=>h.i.apply&&(o=h.i.apply({args:r,...K(e,t)}))!==a?o:(l=t[C(t)-1],t=[...t,$e(e,r)],n=n||(L.includes(l)?2:1),"setAttribute"===l&&U(e,r[0])?_(e,r[0],r[1]):M.includes(l)?(f.clear(),w.clear()):E.includes(l)&&(n=2,f.clear()),o=G(e,t,n,i,void 0,s)),Y=(e,t,r)=>{G(e,[1,t,$e(e,r)],1)},K=(e,t)=>({name:t.join("."),continue:a,nodeName:e[n],constructor:R(e)}),Q=(e,t,r,n,i)=>(!(i=$.get(t))&&r&&m[e]&&(i=m[e].k(r,t,n),$.set(t,i)),i),ee=(e,t)=>j(e,"nodeType",t),te=(e,t)=>t.map((t=>k(e,t,{get(){let e=re(this,t),r=w.get(e);return r||(r=q(this,[t]),w.set(e,r)),r}}))),re=(e,n,i)=>[e[t],e[r],n,...(i||P).map((e=>String(e&&e[t]?e[r]:e)))].join("."),ne=(e,t)=>S(t).map((t=>k(e,t,{get(){return U(this,t)||_(this,t,q(this,[t])),F(this,t)},set(e){F(this,t)!==e&&Z(this,[t],e),_(this,t,e)}}))),ie=e=>b.map((t=>k(e,t,{get(){const e=f.get(re(this,t));if("number"==typeof e)return e;const r=q(this,[t],b);return r&&"object"==typeof r?(Object.entries(r).map((([e,t])=>f.set(re(this,e),t))),r[t]):r}}))),se=(e,t)=>t.map((t=>{e.prototype[t]=function(...e){let r=re(this,t,e),n=f.get(r);return n||(n=J(this,[t],e),f.set(r,n)),n}})),oe=(e,n,i,s,o)=>{return void 0!==i&&(o=typeof i)?"string"===o||"boolean"===o||"number"===o||null==i?[0,i]:"function"===o?[4,{U:e,w:n,K:(a=i,(l=u.get(a))||(u.set(a,l=H()),c[l]=a),l)}]:(s=s||new Set)&&Array.isArray(i)?s.has(i)?[1,[]]:s.add(i)&&[1,i.map((t=>oe(e,n,t,s)))]:"object"===o?i[r]?[3,[i[t],i[r]]]:i instanceof Event?[5,le(e,n,i,!1,s)]:ae&&i instanceof TrustedHTML?[0,i.toString()]:i instanceof ArrayBuffer?[8,i]:ArrayBuffer.isView(i)?[9,i.buffer,R(i)]:[2,le(e,n,i,!0,s)]:void 0:i;var a,l},ae="undefined"!=typeof TrustedHTML,le=(e,t,r,n,i,s,o,a)=>{if(s={},!i.has(r))for(o in i.add(r),r)a=r[o],(n||"function"!=typeof a)&&(s[o]=oe(e,t,a,i));return s},$e=(e,n)=>e?oe(e[t],e[r],n):[0,n],ce=(e,t,r,n,i,s,o,a)=>{if(n){if(i=n[0],s=n[1],0===i||11===i||12===i)return s;if(4===i)return de(r,s);if(6===i)return A;if(3===i)return ue(s);if(7===i)return new he(s.map(ue));if(10===i)return new pe(s);if(1===i)return s.map((n=>ce(e,t,r,n)));for(a in o={},s)o[a]=ce(e,t,[...r,a],s[a]);if(13===i)return new m[e].T.CSSStyleDeclaration(e,t,r,o);if(5===i){if("message"===o.type&&o.origin){let e,t=JSON.stringify(o.data),r=d.find((e=>e.m===t));r&&(e=m[r.U],e&&(o.source=e.T,o.origin=e.D.origin))}return new Proxy(new Event(o.type,o),{get:(e,t)=>t in o?o[t]:"function"==typeof e[String(t)]?A:e[String(t)]})}if(2===i)return o}},ue=([e,t,r])=>t===e&&m[e]?m[e].T:Q(e,t,r),de=(e,{U:t,w:r,F:n,K:i})=>(c[i]||u.set(c[i]=function(...i){const s=Q(t,r,n);return J(s,e,i)},i),c[i]),he=class{constructor(e){(this._=e).map(((e,t)=>this[t]=e))}entries(){return this._.entries()}forEach(e,t){this._.map(e,t)}item(e){return this[e]}keys(){return this._.keys()}get length(){return C(this._)}values(){return this._.values()}[Symbol.iterator](){return this._[Symbol.iterator]()}},pe=class{constructor(e){this.name=e[0],this.value=e[1]}get nodeName(){return this.name}get nodeType(){return 2}},ge=(e,t,r,n,i)=>{let s,o,a=t=>((t=r.get(e.origin))||r.set(e.origin,t=[]),t),l=e=>a().findIndex((t=>t[me]===e)),$={getItem:e=>(s=l(e),s>-1?a()[s][fe]:null),setItem(r,o){s=l(r),s>-1?a()[s][fe]=o:a().push([r,o]),n?J(e,[t,"setItem"],[r,o],2):V("set",t,i)},removeItem(r){s=l(r),s>-1&&a().splice(s,1),n?J(e,[t,"removeItem"],[r],2):V("remove",t,i)},key:e=>(o=a()[e],o?o[me]:null),clear(){a().length=0,n?J(e,[t,"clear"],P,2):V("clear",t,i)},get length(){return a().length}};e[t]=$},me=0,fe=1,we=(e,t,r)=>{e[r]=D(class extends t{constructor(e,t,r,i){return super(e,t,r,i||{}),new Proxy(this,{get:(e,t)=>e[t]?e[t]:(e[t]||"string"!=typeof t||e[n][t]||(e[n][t]=q(e,[t])),e[n][t]),set:(e,t,r)=>(e[n][t]=r,Z(e,[t],r),f.clear(),!0)})}setProperty(...e){this[n][e[0]]=e[1],J(this,["setProperty"],e,2),e[0],f.clear()}getPropertyValue(e){return this[e]}removeProperty(e){let t=this[n][e];return J(this,["removeProperty"],[e],2),f.clear(),this[n][e]=void 0,t}},r)},ye=(e,t)=>{e[t]=D(class{constructor(e){this.ownerNode=e}get cssRules(){const e=this.ownerNode;return new Proxy({},{get(t,r){const n=String(r);return"item"===n?t=>ve(e,t):"length"===n?Se(e).length:isNaN(n)?t[r]:ve(e,n)}})}insertRule(e,t){const r=Se(this.ownerNode);return(t=void 0===t?0:t)>=0&&t<=r.length&&(J(this.ownerNode,["sheet","insertRule"],[e,t],2),r.splice(t,0,0)),this.ownerNode,f.clear(),t}deleteRule(e){J(this.ownerNode,["sheet","deleteRule"],[e],2),Se(this.ownerNode).splice(e,1),this.ownerNode,f.clear()}get type(){return"text/css"}},t);const r={sheet:{get(){return new e[t](this)}}};B(e.HTMLStyleElement,r)},Se=(e,t)=>((t=F(e,2))||(t=q(e,["sheet","cssRules"]),_(e,2,t)),t),ve=(e,t,r)=>(0===(r=Se(e))[t]&&(r[t]=q(e,["sheet","cssRules",parseInt(t,10)])),r[t]),be="0.4.5",Ie=(e,t,r,n,i)=>{try{e.l=t,Me(e,r)}catch(e){console.error(r,e),i=String(e.stack||e)}return e.l="",i},Me=(e,t,r)=>{e.M=1,t=`with(this){${(h.i.globalFns||[]).filter((e=>/[a-zA-Z_$][0-9a-zA-Z_$]*/.test(e))).map((e=>`(typeof ${e}==\'function\'&&(window.${e}=${e}))`)).join(";")+t.replace(/\\bthis\\b/g,"(thi$(this)?window:this)").replace(/\\/\\/# so/g,"//Xso")}\\n;function thi$(t){return t===this}}`+(r?"\\n//# sourceURL="+r:""),e.A||(t=t.replace(/.postMessage\\(/g,`.postMessage(\'${e.U}\',`)),new Function(t).call(e.T),e.M=0},Te=(e,t,r)=>{(r=F(e,t))&&setTimeout((()=>r.map((e=>e({type:t})))))},Ee=(e,t,r,n,i,s)=>{for(n=e.D;!n.host&&(n=(e=m[e.I]).D,e.U!==e.I););return i=new URL(t||"",n),!r&&h.i.resolveUrl&&(s=h.i.resolveUrl(i,n))?s:i},Ne=(e,t,r)=>Ee(e,t,r)+"",Le=()=>`<script src="${v("partytown.js?v="+be)}"><\\/script>`,xe=e=>class{constructor(){this.s="",this.l=[],this.e=[]}get src(){return this.s}set src(t){fetch(Ne(e,t,!0),{mode:"no-cors",keepalive:!0}).then((e=>{e.ok||0===e.status?this.l.map((e=>e({type:"load"}))):this.e.map((e=>e({type:"error"})))}),(()=>this.e.forEach((e=>e({type:"error"})))))}addEventListener(e,t){"load"===e&&this.l.push(t),"error"===e&&this.e.push(t)}get onload(){return this.l[0]}set onload(e){this.l=[e]}get onerror(){return this.e[0]}set onerror(e){this.e=[e]}},Ae={addEventListener:{value(...e){const t=e[0],r=F(this,t)||[];r.push(e[1]),_(this,t,r)}},async:{get:A,set:A},defer:{get:A,set:A},onload:{get(){let e=F(this,"load");return e&&e[0]||null},set(e){_(this,"load",e?[e]:null)}},onerror:{get(){let e=F(this,"error");return e&&e[0]||null},set(e){_(this,"error",e?[e]:null)}},getAttribute:{value(e){return"src"===e?this.src:J(this,["getAttribute"],[e])}},setAttribute:{value(e,t){Ce.includes(e)?this[e]=t:J(this,["setAttribute"],[e,t])}}},Ce=S("src,type"),Re=(e,t)=>{const r={innerHTML:Pe,innerText:Pe,src:{get(){return F(this,4)||""},set(e){const r=Ne(t,e,!0);e=Ne(t,e),_(this,4,e),Z(this,["src"],e),r!==e&&Z(this,["dataset","ptsrc"],r)}},textContent:Pe,type:{get(){return q(this,["type"])},set(e){He(e)||(_(this,5,e),Z(this,["type"],e))}},...Ae};B(e,r)},Pe={get(){return F(this,3)||""},set(e){_(this,3,e)}},He=e=>!e||"text/javascript"===e,We=(e,i,s)=>{const o=D(class extends s{appendChild(e){return this.insertBefore(e,null)}get href(){}set href(e){}insertBefore(e,s){const o=e[t]=this[t],a=e[r],l=e[n],$="SCRIPT"===l,c="IFRAME"===l;if($){const t=F(e,3),r=F(e,5);if(t){if(He(r)){const r=Ie(i,a,t,0,""),n=r?"pterror":"ptid",s=r||a;Z(e,["type"],W+"-x"),Z(e,["dataset",n],s)}Z(e,["innerHTML"],t)}}return J(this,["insertBefore"],[e,s],2),c&&((e,t)=>{let r,n,i=0,s=()=>{m[e]&&m[e].x&&!m[e].y?(r=F(t,1)?"error":"load",n=F(t,r),n&&n.map((e=>e({type:r})))):i++>2e3?(n=F(t,"error"),n&&n.map((e=>e({type:"error"})))):setTimeout(s,9)};s()})(a,e),$&&(X(!0),h.J([5,o])),e}get nodeName(){return this[n]}get nodeType(){return 3}get ownerDocument(){return i.n}},"Node");te(o,S("childNodes,firstChild,isConnected,lastChild,nextSibling,parentElement,parentNode,previousSibling")),e.Node=o},Oe=S("AUDIO,CANVAS,VIDEO"),De=S("Audio,MediaSource"),ke=(e,r,n)=>{B(e,{body:{get:()=>r.e},cookie:{get(){return r.A?q(this,["cookie"]):(V("get","cookie",r),"")},set(e){r.A&&Z(this,["cookie"],e)}},createElement:{value(e){if(e=e.toUpperCase(),!x.test(e))throw e+" not valid";const r="IFRAME"===e,n=this[t],i=(r?"f_":"")+H(),s=Q(n,i,e);if(J(this,["createElement"],[e],2,i),r)Xe({U:i,I:n,R:y},!0).T.fetch=fetch,Z(s,["srcdoc"],Le());else if("SCRIPT"===e){const e=F(s,5);He(e)&&Z(s,["type"],W)}return s}},createElementNS:{value(e,r){const n=H(),i=Q(this[t],n,r,e);return J(this,["createElementNS"],[e,r],2,n),i}},createTextNode:{value(e){const r=this[t],n=H(),i=Q(r,n,"#text");return J(this,["createTextNode"],[e],2,n),i}},createEvent:{value:e=>new Event(e)},currentScript:{get(){return r.l?Q(this[t],r.l,"SCRIPT"):null}},defaultView:{get:()=>n?null:r.T},documentElement:{get:()=>r.o},getElementsByTagName:{value(e){return"BODY"===(e=e.toUpperCase())?[r.e]:"HEAD"===e?[r.s]:J(this,["getElementsByTagName"],[e])}},head:{get:()=>r.s},implementation:{get(){return{hasFeature:()=>!0,createHTMLDocument:e=>{const t=H();return J(this,["implementation","createHTMLDocument"],[e],1,{U:t}),ze(t,t,r.D+"","hidden",!0,!0).n}}}},location:{get:()=>r.D,set(e){r.D.href=e+""}},nodeType:{value:9},parentNode:{value:null},parentElement:{value:null},readyState:{value:"complete"},visibilityState:{get:()=>r.S||"visible"}}),ne(e,"compatMode,referrer,forms")},Be=(e,t)=>{B(e,{parentElement:{get(){return this.parentNode}},parentNode:{get:()=>t.o}})},je=(e,t)=>{B(e,{localName:{get(){return this[n].toLowerCase()}},namespaceURI:{get(){return this[i]||"http://www.w3.org/1999/xhtml"}},nodeType:{value:1},tagName:{get(){return this[n]}}}),te(e,I),ne(e,"id"),ie(t),se(t,S("getClientRects,getBoundingClientRect"))},Ue=(e,t)=>{const r={};S("hash,host,hostname,href,origin,pathname,port,protocol,search").map((e=>{r[e]={get(){let r,n=F(this,4);return"string"!=typeof n&&(r=q(this,["href"]),_(this,4,r),n=new URL(r)[e]),Ee(t,n)[e]},set(r){let n=F(this,4),i=Ee(t,n);i[e]=new URL(r+"",i.href),_(this,4,i.href),Z(this,["href"],i.href)}}})),B(e,r)},Fe=(e,t)=>{const r={contentDocument:{get(){return _e(this).n}},contentWindow:{get(){return _e(this).T}},src:{get(){let e=_e(this).D.href;return e.startsWith("about:")?"":e},set(e){if(!e.startsWith("about:")){let t,r=new XMLHttpRequest,n=_e(this);n.D.href=e=Ne(n,e),n.y=1,_(this,1,void 0),r.open("GET",e,!1),r.send(),t=r.status,t>199&&t<300?(Z(this,["srcdoc"],`<base href="${e}">`+r.responseText.replace(/<script>/g,\'<script type="text/partytown">\').replace(/<script /g,\'<script type="text/partytown" \').replace(/text\\/javascript/g,W)+Le()),X(!0),h.J([5,n.U])):(_(this,1,t),n.y=0)}}},...Ae};B(e,r)},_e=e=>{const n=e[r];return m[n]||Xe({U:n,I:e[t],R:q(e,["src"])||y},!0),m[n]},Ve=e=>{const t=(e,t)=>{const{a:r,b:n,c:i,d:s,e:o,f:a}=J(e,[t],P);return new DOMMatrixReadOnly([r,n,i,s,o,a])},r={...e,getCTM:{value:function(){return t(this,"getCTM")}},getScreenCTM:{value:function(){return t(this,"getScreenCTM")}}};B(e,r)},ze=(a,l,$,c,u,f)=>{const w=class{constructor(e,a,l,$,c){this[t]=e,this[r]=a,this[s]=l||[],this[n]=$,this[o]={},c&&(this[i]=c)}},b=new(D(class extends URL{assign(){}reload(){}replace(){}},"Location"))($),M=b.origin===h.H||b.origin===y,T={},E=D(class extends w{constructor(){super(a,a);let n,i,o=this,$=0,d=()=>{$||((h.u||(e.g=[q,Z,J,Y,B,H,t,r,s],h.t(v("partytown-media.js?v="+be)),h.u=e.f,delete e.f),h.u)(w,x,T,o,De),$=1)},m={},y=(e,t,r)=>(Oe.includes(e)&&d(),new(m[e]?m[e]:e.includes("-")?m.UNKNOWN:m.DIV)(a,t,P,e,r));var N,A;o.Window=E,We(o,T,w),we(o,w,"CSSStyleDeclaration"),((e,t,r)=>{e[r]=D(class extends t{now(){return performance.now()}},r)})(o,w,"Performance"),h.v.map((([e,t,n,i,l])=>{const $=Ge[e]?L:"EventTarget"===t?x:"Object"===t?w:o[t],c=o[e]=D(12===i?class extends w{constructor(...t){super(a,H()),Y(this,e,t)}}:o[e]||class extends ${},e);l&&(m[l]=c),n.map((([e,t,n])=>{e in c.prototype||e in $.prototype||("string"==typeof t?k(c,e,{get(){if(!U(this,e)){const n=this[r],i=[...this[s],e],l=o[t];l&&_(this,e,new l(a,n,i))}return F(this,e)},set(t){_(this,e,t)}}):5===t?j(c,e,(function(...t){return J(this,[e],t)})):t>0&&(void 0!==n?j(c,e,n):k(c,e,{get(){return q(this,[e])},set(t){return Z(this,[e],t)}})))}))})),S("atob,btoa,crypto,indexedDB,setTimeout,setInterval,clearTimeout,clearInterval").map((t=>{delete E.prototype[t],t in o||(n=e[t],null!=n&&(o[t]="function"!=typeof n||n.toString().startsWith("class")?n:n.bind(e)))})),Object.getOwnPropertyNames(e).map((t=>{t in o||(o[t]=e[t])})),De.map((e=>O(o,e,{get:()=>(d(),o[e])}))),"trustedTypes"in e&&(o.trustedTypes=e.trustedTypes),je(o.Element,o.HTMLElement),ke(o.Document,T,f),N=o.DocumentFragment,ee(N,11),te(N,I),Ue(o.HTMLAnchorElement,T),A=o.HTMLFormElement,B(A,{}),ne(A,"elements"),Fe(o.HTMLIFrameElement),Re(o.HTMLScriptElement,T),Ve(o.SVGGraphicsElement),Be(o.HTMLHeadElement,T),Be(o.HTMLBodyElement,T),((e,t)=>{B(e,{parentElement:{value:null},parentNode:{get:()=>t.n}})})(o.HTMLHtmlElement,T),ye(o,"CSSStyleSheet"),ee(o.Comment,8),ee(o.DocumentType,10),Object.assign(T,{U:a,I:l,T:new Proxy(o,{has:()=>!0}),n:y("#document",a+".d"),o:y("HTML",a+".e"),s:y("HEAD",a+".h"),e:y("BODY",a+".b"),D:b,S:c,A:M,k:y}),o.requestAnimationFrame=e=>setTimeout((()=>e(performance.now())),9),o.cancelAnimationFrame=e=>clearTimeout(e),o.requestIdleCallback=(e,t)=>(t=Date.now(),setTimeout((()=>e({didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-t))})),1)),o.cancelIdleCallback=e=>clearTimeout(e),ge(o,"localStorage",p,M,T),ge(o,"sessionStorage",g,M,T),M||(o.indexeddb=void 0),u&&(i={},o.history={pushState(e){i=e},replaceState(e){i=e},get state(){return i},length:0}),o.Worker=void 0}addEventListener(...e){"load"===e[0]?T.M&&setTimeout((()=>e[1]({type:"load"}))):J(this,["addEventListener"],e,2)}get body(){return T.e}get document(){return T.n}get documentElement(){return T.o}fetch(e,t){return e="string"==typeof e||e instanceof URL?String(e):e.url,fetch(Ne(T,e),t)}get frameElement(){return a===l?null:Q(l,a,"IFRAME")}get globalThis(){return this}get head(){return T.s}get location(){return b}set location(e){b.href=e+""}get Image(){return xe(T)}get name(){return name+a}get navigator(){return(e=>{let t,r={sendBeacon:(t,r)=>{try{return fetch(Ne(e,t,!0),{method:"POST",body:r,mode:"no-cors",keepalive:!0}),!0}catch(e){return console.error(e),!1}}};for(t in navigator)r[t]=navigator[t];return r})(T)}get origin(){return b.origin}set origin(e){}get parent(){for(let e in m)if(m[e].U===l)return m[e].T;return this}postMessage(...e){m[e[0]]&&(C(d)>50&&d.splice(0,5),d.push({U:e[0],m:JSON.stringify(e[1])}),e=e.slice(1)),J(this,["postMessage"],e,3)}get self(){return this}get top(){for(let e in m)if(m[e].U===m[e].I)return m[e].T;return this}get window(){return this}get XMLHttpRequest(){const e=XMLHttpRequest,t=String(e),r=D(class extends e{open(...e){e[1]=Ne(T,e[1]),super.open(...e)}set withCredentials(e){}toString(){return t}},R(e));return r.prototype.constructor.toString=()=>t,r}},"Window"),L=class extends w{constructor(e,t,r,n){return super(e,t,r,n),new Proxy(this,{get:(e,t)=>q(e,[t]),set:(e,t,r)=>(Z(e,[t],r),!0)})}},x=class extends w{};return N.map((e=>x.prototype[e]=function(...t){return J(this,[e],t,2)})),ne(E,"devicePixelRatio"),ie(E),se(E,["getComputedStyle"]),new E,T},Ge={DOMStringMap:1,NamedNodeMap:1},Xe=({U:e,I:t,R:r,S:n},i)=>(m[e]||(m[e]=ze(e,t,r,n,i)),h.J([5,e]),m[e]),qe=[],Ze=t=>{const r=t.data,n=r[0],i=r[1];h.x?5===n?(async e=>{let t,r=e.U,n=e.w,i=Q(r,n,"SCRIPT"),s=e.j,o=e.R,a=e.G,l="",$=m[r];if(o)try{o=Ee($,o)+"",_(i,4,o),t=await fetch(o),t.ok?(s=await t.text(),$.l=n,Me($,s,a||o),Te(i,"load")):(l=t.statusText,Te(i,"error"))}catch(e){console.error(e),l=String(e.stack||e),Te(i,"error")}else s&&(l=Ie($,n,s,0,l));$.l="",h.J([4,r,n,l])})(i):7===n?(({U:e,w:t,K:r,Q:n,b:i})=>{if(c[r])try{c[r].apply(ce(e,t,[],n),ce(e,t,[],i))}catch(e){console.error(e)}})(i):8===n?(({U:e,q:t,b:r})=>{try{let n=m[e].T,i=0,s=C(t);for(;i<s;i++)i+1<s?n=n[t[i]]:n[t[i]].apply(n,ce(null,e,[],r))}catch(e){console.error(e)}})(i):3===n?Xe(i):6===n?(m[i].x=1,m[i].y=0):12===n?m[i].S=r[2]:11===n&&(m[i].D.href=r[2]):1===n?((t=>{const r=h.i=JSON.parse(t.i),n=t.H;h.t=importScripts.bind(e),h.v=t.v,h.B=t.B,h.H=n,h.J=postMessage.bind(e),h.O=t.O,p.set(n,t.C),g.set(n,t.N),e.importScripts=void 0,delete e.postMessage,delete e.WorkerGlobalScope,S("resolveUrl,get,set,apply").map((e=>{r[e]&&(r[e]=new Function("return "+r[e])())})),h.x=1})(i),h.J([2]),[...qe].map(Ze),qe.length=0):qe.push(t)};e.onmessage=Ze,postMessage([0])})(self);\n',
            ],
            { type: "text/javascript" }
          )
        ),
        { name: "Partytown 🎉" }
      )),
      (J.onmessage = (t) => {
        const r = t.data;
        10 === r[0] ? C(J, r[1]) : e(J, r);
      }),
      $.addEventListener("pt1", (e) =>
        O(J, g(e.detail.frameElement), e.detail)
      ));
  });
})(window);
