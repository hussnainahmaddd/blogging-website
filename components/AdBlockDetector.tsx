"use client";

import { useState, useEffect } from "react";
import styles from "./AdBlockDetector.module.css";
import { ShieldAlert } from "lucide-react";

export default function AdBlockDetector() {
    const [adBlockDetected, setAdBlockDetected] = useState(false);

    useEffect(() => {
        // Method 1: Check if a bait element is blocked
        const bait = document.createElement("div");
        bait.setAttribute("class", "adsbygoogle ad-banner ad-placement");
        bait.style.position = "absolute";
        bait.style.top = "-1000px";
        bait.style.left = "-1000px";
        document.body.appendChild(bait);

        // Allow some time for the ad blocker to act
        const checkAdBlock = setTimeout(() => {
            if (
                window.getComputedStyle(bait).display === "none" ||
                window.getComputedStyle(bait).visibility === "hidden" ||
                bait.offsetParent === null
            ) {
                setAdBlockDetected(true);
            }
            document.body.removeChild(bait);
        }, 500);

        // Method 2: Network check (optional back up, but bait is usually sufficient for cosmetic filters)
        // We can add a fetch to a known ad URL if needed, but cross-origin might be an issue. 
        // The DOM bait is the standard lightweight approach.

        return () => clearTimeout(checkAdBlock);
    }, []);

    if (!adBlockDetected) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <ShieldAlert size={64} className={styles.icon} />
                <h2>Adblock Detected</h2>
                <p>
                    We rely on ads to keep NexaWell free and provide you with high-quality content.
                    Please disable your ad blocker or whitelist our site to continue reading.
                </p>
                <button
                    className={styles.button}
                    onClick={() => window.location.reload()}
                >
                    I've Disabled It
                </button>
            </div>
        </div>
    );
}
