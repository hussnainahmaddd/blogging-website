"use client";

import Script from "next/script";

export default function EzoicScripts() {
    return (
        <>
            {/* Privacy Scripts - Must be loaded first */}
            <Script
                src="https://cmp.gatekeeperconsent.com/min.js"
                strategy="beforeInteractive"
                data-cfasync="false"
            />
            <Script
                src="https://the.gatekeeperconsent.com/cmp.min.js"
                strategy="beforeInteractive"
                data-cfasync="false"
            />

            {/* Ezoic Main Script */}
            <Script
                src="//www.ezojs.com/ezoic/sa.min.js"
                strategy="afterInteractive"
            />

            {/* Ezoic Initialization */}
            <Script
                id="ezoic-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            window.ezstandalone = window.ezstandalone || {};
            ezstandalone.cmd = ezstandalone.cmd || [];
          `,
                }}
            />

            {/* Additional Ad Tag */}
            <Script
                src="https://quge5.com/88/tag.min.js"
                strategy="afterInteractive"
                data-zone="204849"
                data-cfasync="false"
            />
        </>
    );
}
