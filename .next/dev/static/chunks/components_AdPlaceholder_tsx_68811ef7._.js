(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/AdPlaceholder.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdPlaceholder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function AdPlaceholder({ id }) {
    _s();
    const isLoaded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdPlaceholder.useEffect": ()=>{
            if (isLoaded.current) return;
            if ("TURBOPACK compile-time truthy", 1) {
                window.ezstandalone = window.ezstandalone || {};
                window.ezstandalone.cmd = window.ezstandalone.cmd || [];
                window.ezstandalone.cmd.push({
                    "AdPlaceholder.useEffect": ()=>{
                        window.ezstandalone.showAds(id);
                        console.log(`Ezoic Ad ${id} triggered`);
                    }
                }["AdPlaceholder.useEffect"]);
                isLoaded.current = true;
            }
            return ({
                "AdPlaceholder.useEffect": ()=>{
                    if (("TURBOPACK compile-time value", "object") !== "undefined" && window.ezstandalone) {
                        window.ezstandalone.cmd.push({
                            "AdPlaceholder.useEffect": ()=>{
                                window.ezstandalone.destroyPlaceholders(id);
                                console.log(`Ezoic Ad ${id} destroyed`);
                            }
                        }["AdPlaceholder.useEffect"]);
                    }
                }
            })["AdPlaceholder.useEffect"];
        }
    }["AdPlaceholder.useEffect"], [
        id
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-center my-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            id: `ezoic-pub-ad-placeholder-${id}`
        }, void 0, false, {
            fileName: "[project]/components/AdPlaceholder.tsx",
            lineNumber: 39,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/AdPlaceholder.tsx",
        lineNumber: 38,
        columnNumber: 9
    }, this);
}
_s(AdPlaceholder, "RT/Tyi1cnhpWX+13HjulM6ip4d0=");
_c = AdPlaceholder;
var _c;
__turbopack_context__.k.register(_c, "AdPlaceholder");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_AdPlaceholder_tsx_68811ef7._.js.map