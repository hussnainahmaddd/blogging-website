"use client";

import { useEffect, useRef } from "react";

interface AdPlaceholderProps {
    id: number;
}

export default function AdPlaceholder({ id }: AdPlaceholderProps) {
    // Ezoic logic disabled as per user request to switch to Monetag
    return (
        <div className="flex justify-center my-8">
            <div id={`ad-placeholder-${id}`}></div>
        </div>
    );
}
