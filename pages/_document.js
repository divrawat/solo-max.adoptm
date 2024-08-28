import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="monetag" content="ce71a51c7dced9d34e9002cef042aaf5" />

        {/* <Script
          id="monetag-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(s,u,z,p){s.src = u, s.setAttribute('data-zone', z), p.appendChild(s);})(document.createElement('script'),'https://zovidree.com/tag.min.js',7725769,document.body||document.documentElement)`,
          }}
        /> */}

        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        <script async crossOrigin="anonymous"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1721485376950080" />
        <script async data-ad-client="ca-pub-1721485376950080" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" ></script>

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
