"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function EzoicRouteHandler() {
    const pathname = usePathname();
    const isFirstLoad = useRef(true);

    useEffect(() => {
        // Skip the first load because the main script handles it.
        // We only want to trigger this on subsequent client-side navigations.
        if (isFirstLoad.current) {
            isFirstLoad.current = false;
            return;
        }

        if (typeof window !== "undefined" && window.ezstandalone) {
            console.log("Ezoic: Route changed, refreshing ads...");
            window.ezstandalone.cmd.push(() => {
                // Refresh all ads on the page (including anchor/video ads)
                window.ezstandalone.showAds();
            });
        }
    }, [pathname]);

    return null;
}
