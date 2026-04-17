import Script from "next/script";

export default function MonetagBodyScript() {
    return (
        <Script
            id="monetag-body-tag"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: `(function(s){s.dataset.zone='10509267';s.src='https://al5sm.com/tag.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))`
            }}
        />
    );
}
