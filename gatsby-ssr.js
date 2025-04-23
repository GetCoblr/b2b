import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="amplitude-analytics"
      src="https://cdn.amplitude.com/libs/analytics-browser-2.11.1-min.js.gz"
    />,
    <script
      key="amplitude-session-replay"
      src="https://cdn.amplitude.com/libs/plugin-session-replay-browser-1.8.0-min.js.gz"
    />,
    <script
      key="amplitude-init"
      dangerouslySetInnerHTML={{
        __html: `
          window.amplitude.add(window.sessionReplay.plugin({sampleRate: 1}));
          window.amplitude.init('6631288aa8c2a8814945311e14d0d2c0', {"autocapture":{"elementInteractions":true}});
        `,
      }}
    />,
    <script
      key="facebook-pixel"
      dangerouslySetInnerHTML={{
        __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${process.env.META_PIXEL_ID}');
          fbq('track', 'PageView');
        `,
      }}
    />,
    <noscript
      key="facebook-pixel-noscript"
      dangerouslySetInnerHTML={{
        __html: `
          <img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=${process.env.META_PIXEL_ID}&ev=PageView&noscript=1" />
        `,
      }}
    />,
    <meta
      name="google-site-verification"
      content="yyrckVbu3HdjIjgmlQNIwduoqxCfr-9zYQJa_NEElds"
    />,
  ]);
};
