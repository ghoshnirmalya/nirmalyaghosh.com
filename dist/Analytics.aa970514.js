const { replace: g } = "",
  b = /[&<>'"]/g,
  w = { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" },
  A = (t) => w[t],
  v = (t) => g.call(t, b, A),
  C = v;
class u extends String {}
const o = (t) => (t instanceof u ? t : typeof t == "string" ? new u(t) : t);
function $(t) {
  const e = {};
  return n(t), Object.keys(e).join(" ");
  function n(r) {
    r && typeof r.forEach == "function"
      ? r.forEach(n)
      : r === Object(r)
      ? Object.keys(r).forEach((s) => {
          r[s] && n(s);
        })
      : ((r = r === !1 || r == null ? "" : String(r).trim()),
        r &&
          r.split(/\s+/).forEach((s) => {
            e[s] = !0;
          }));
  }
}
typeof process == "object" && Object.prototype.toString.call(process);
class j {
  constructor(e, n) {
    (this.modules = n.modules),
      (this.hoisted = n.hoisted),
      (this.hydratedComponents = n.hydratedComponents),
      (this.clientOnlyComponents = n.clientOnlyComponents),
      (this.hydrationDirectives = n.hydrationDirectives),
      (this.mockURL = new URL(e, "http://example.com")),
      (this.metadataCache = new Map());
  }
  resolvePath(e) {
    if (e.startsWith(".")) {
      const n = new URL(e, this.mockURL).pathname;
      return n.startsWith("/@fs") && n.endsWith(".jsx")
        ? n.slice(0, n.length - 4)
        : n;
    }
    return e;
  }
  getPath(e) {
    const n = this.getComponentMetadata(e);
    return n?.componentUrl || null;
  }
  getExport(e) {
    const n = this.getComponentMetadata(e);
    return n?.componentExport || null;
  }
  getComponentMetadata(e) {
    if (this.metadataCache.has(e)) return this.metadataCache.get(e);
    const n = this.findComponentMetadata(e);
    return this.metadataCache.set(e, n), n;
  }
  findComponentMetadata(e) {
    const n = typeof e == "string";
    for (const { module: r, specifier: s } of this.modules) {
      const a = this.resolvePath(s);
      for (const [c, i] of Object.entries(r))
        if (n) {
          if (c === "tagName" && e === i)
            return { componentExport: c, componentUrl: a };
        } else if (e === i) return { componentExport: c, componentUrl: a };
    }
    return null;
  }
}
function x(t, e) {
  return new j(t, e);
}
const E =
    /^(allowfullscreen|async|autofocus|autoplay|controls|default|defer|disabled|disablepictureinpicture|disableremoteplayback|formnovalidate|hidden|loop|nomodule|novalidate|open|playsinline|readonly|required|reversed|scoped|seamless|itemscope)$/i,
  S = /^(contenteditable|draggable|spellcheck|value)$/i,
  U = /^(autoReverse|externalResourcesRequired|focusable|preserveAlpha)$/i;
async function* l(t) {
  if (((t = await t), t instanceof u)) yield t;
  else if (Array.isArray(t)) for (const e of t) yield o(await l(e));
  else
    typeof t == "function"
      ? yield* l(t())
      : typeof t == "string"
      ? yield o(C(t))
      : (!t && t !== 0) ||
        (t instanceof d ||
        Object.prototype.toString.call(t) === "[object AstroComponent]"
          ? yield* T(t)
          : typeof t == "object" && Symbol.asyncIterator in t
          ? yield* t
          : yield t);
}
class d {
  constructor(e, n) {
    (this.htmlParts = e), (this.expressions = n);
  }
  get [Symbol.toStringTag]() {
    return "AstroComponent";
  }
  async *[Symbol.asyncIterator]() {
    const { htmlParts: e, expressions: n } = this;
    for (let r = 0; r < e.length; r++) {
      const s = e[r],
        a = n[r];
      yield o(s), yield* l(a);
    }
  }
}
async function L(t, ...e) {
  return new d(t, e);
}
function O(t) {
  return (t.isAstroComponentFactory = !0), t;
}
function R() {
  return () => {
    throw new Error(
      "Deprecated: Astro.fetchContent() has been replaced with Astro.glob()."
    );
  };
}
function M() {
  return (e, n) => {
    let r = [...Object.values(e)];
    if (r.length === 0)
      throw new Error(`Astro.glob(${JSON.stringify(n())}) - no matches found.`);
    return Promise.all(r.map((s) => s()));
  };
}
function D(t, e, n) {
  const r = new URL(e),
    s = new URL(t, r),
    a = new URL(n);
  return {
    site: r,
    fetchContent: R(),
    glob: M(),
    resolve(...c) {
      let i = c.reduce((m, y) => new URL(y, m), s).pathname;
      return (
        i.startsWith(a.pathname) && (i = "/" + i.slice(a.pathname.length)), i
      );
    },
  };
}
const f = (t, e = !0) =>
    e ? String(t).replace(/&/g, "&#38;").replace(/"/g, "&#34;") : t,
  _ = new Set(["set:html", "set:text"]);
function P(t, e, n = !0) {
  if (t == null) return "";
  if (t === !1) return S.test(e) || U.test(e) ? o(` ${e}="false"`) : "";
  if (_.has(e))
    return (
      console.warn(`[astro] The "${e}" directive cannot be applied dynamically at runtime. It will not be rendered as an attribute.

Make sure to use the static attribute syntax (\`${e}={value}\`) instead of the dynamic spread syntax (\`{...{ "${e}": value }}\`).`),
      ""
    );
  if (e === "class:list") {
    const r = f($(t));
    return r === "" ? "" : o(` ${e.slice(0, -5)}="${r}"`);
  }
  return t === !0 && (e.startsWith("data-") || E.test(e))
    ? o(` ${e}`)
    : o(` ${e}="${f(t, n)}"`);
}
new TextEncoder();
async function* T(t) {
  for await (const e of t)
    if (e || e === 0) for await (const n of l(e)) yield o(n);
}
var p = Object.freeze,
  I = Object.defineProperty,
  H = (t, e) => p(I(t, "raw", { value: p(e || t.slice()) })),
  h;
const q = x(
    "/@fs/Users/ghoshnirmalya/Development/nirmalyaghosh.com/src/components/Analytics.astro",
    {
      modules: [],
      hydratedComponents: [],
      clientOnlyComponents: [],
      hydrationDirectives: new Set([]),
      hoisted: [],
    }
  ),
  W = D(
    "/@fs/Users/ghoshnirmalya/Development/nirmalyaghosh.com/src/components/Analytics.astro",
    "https://nirmalyaghosh.com/",
    "file:///Users/ghoshnirmalya/Development/nirmalyaghosh.com/"
  ),
  F = O(async (t, e, n) => {
    const r = t.createAstro(W, e, n);
    return (
      (r.self = F),
      L(
        h ||
          (h = H([
            `<script>
  partytown = {
    forward: ['dataLayer.push'],
  }
<\/script>

<script type="text/partytown"`,
            `><\/script>

<script type="text/partytown">
  if (true) {
    function gtag() {
      window?.dataLayer?.push(arguments);
    }

    gtag('js', new Date());
    gtag('config', ({}).PUBLIC_GA);
  }
<\/script>
`,
          ])),
        P(`https://www.googletagmanager.com/gtag/js?id=${{}.PUBLIC_GA}`, "src")
      )
    );
  }),
  z =
    "/Users/ghoshnirmalya/Development/nirmalyaghosh.com/src/components/Analytics.astro",
  B = void 0;
export { q as $$metadata, F as default, z as file, B as url };
