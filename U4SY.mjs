import { I as h, J as u, K as s, L as k, O as F, R as v, T as E, X as I, e as o, ga as b, i as g, qa as w } from "./chunk-AKGKVPUZ.mjs";
import { c as r } from "./chunk-ELYU6EKT.mjs";
var O = "default" in u ? h : u, i = {}, P = O;
i.createRoot = P.createRoot;
i.hydrateRoot = P.hydrateRoot;
var D = i.createRoot, H = i.hydrateRoot;
r.__framer_importFromPackage = (e, c) => () => o(v, { error: 'Package component not supported: "' + c + '" in "' + e + '"' });
r.process = { ...r.process, env: { ...r.process ? r.process.env : void 0, NODE_ENV: "production" } };
E();
r.__framer_events = r.__framer_events || [];
function W() { r.__framer_events.push(arguments) }
(async () => {
    let e = {
        augiA20Il: {
            elements: { IudoovWSv: "scroll", wIjPzJLDz: "scroll-1" },
            page: s(() => import("https://raw.githubusercontent.com/memegamerocks/memegamerocks/main/JIIX.mjs")),  // Updated GitHub URL
            path: "/"
        },
        KGfq_P5QE: {
            elements: {},
            page: s(() => import("https://raw.githubusercontent.com/memegamerocks/memegamerocks/main/24SW.mjs")),  // Updated GitHub URL
            path: "/play"
        }
    },
    c = {},
    f = [{ code: "en", id: "default", name: "English", slug: "" }],
    N = s(() => import("./__framer-not-found-page.DOM6IFZ7.mjs")),
    n = document.getElementById("main"),
    a, m, d, l, p = !1;
    if ("framerHydrateV2" in n.dataset) {
        let t = JSON.parse(n.dataset.framerHydrateV2);
        a = t.routeId, m = t.localeId, d = t.pathVariables, l = t.breakpoints, p = !0
    } else {
        let t = F(e, decodeURIComponent(location.pathname), !0, f);
        a = t.routeId, m = t.localeId, d = t.pathVariables
    }
    let R = await e[a].page.preload();
    e[a].page = R;
    let _ = !0,
        V = o(b, { RootComponent: R, isWebsite: !0, routeId: a, pathVariables: d, routes: e, collectionUtils: c, notFoundPage: N, isReducedMotion: void 0, localeId: m, locales: f, preserveQueryParams: void 0, enableImproveInpDuringHydration: _, shouldMarkHydrationEnd: p }),
        x = o(I, { children: V, value: { imgSizesWorkaroundEnabled: !1 } }),
        y = o(k, { children: x, value: { global: { enter: { mask: { angle: 0, type: "wipe", width: "20%" }, opacity: 1, rotate: 0, rotate3d: !1, rotateX: 0, rotateY: 0, scale: 1, transition: { damping: 30, delay: 0, duration: .4, ease: [.27, 0, .51, 1], mass: 1, stiffness: 400, type: "tween" }, x: "0px", y: "0px" } }, routes: { augiA20Il: {} } } });
    p ? (performance.mark("framer-rewrite-breakpoints-start"), w(l), r.__framer_onRewriteBreakpoints?.(l), performance.mark("framer-rewrite-breakpoints-end"), performance.measure("framer-rewrite-breakpoints", "framer-rewrite-breakpoints-start", "framer-rewrite-breakpoints-end"), g(() => { performance.mark("framer-hydration-start"), _ && r.__FRAMER_TURN_OFF_REACT_EVENT_HANDLING__?.(), H(n, y) })) :
