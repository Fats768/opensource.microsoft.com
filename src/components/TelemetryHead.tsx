//
// Copyright (c) Microsoft.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//

const IS_APP_INSIGHTS_ENABLED = false;

export default function TelemetryHead() { 
  return <script src="https://wcpstatic.microsoft.com/mscc/lib/v2/wcp-consent.js"></script>;
  
  // return IS_APP_INSIGHTS_ENABLED ? (
  //   <>
  //     {/* This was the production-telemetry-head.html include */}
  //     <script 
  //       dangerouslySetInnerHTML={{
  //         __html: `
  //           var appInsights=window.appInsights||function(a){
  //             function b(a){c[a]=function(){var b=arguments;c.queue.push(function(){c[a].apply(c,b)})}}var c={config:a},d=document,e=window;setTimeout(function(){var b=d.createElement("script");b.src=a.url||"https://az416426.vo.msecnd.net/scripts/a/ai.0.js",d.getElementsByTagName("script")[0].parentNode.appendChild(b)});try{c.cookie=d.cookie}catch(a){}c.queue=[];for(var f=["Event","Exception","Metric","PageView","Trace","Dependency"];f.length;)b("track"+f.pop());if(b("setAuthenticatedUserContext"),b("clearAuthenticatedUserContext"),b("startTrackEvent"),b("stopTrackEvent"),b("startTrackPage"),b("stopTrackPage"),b("flush"),!a.disableExceptionTracking){f="onerror",b("_"+f);var g=e[f];e[f]=function(a,b,d,e,h){var i=g&&g(a,b,d,e,h);return!0!==i&&c["_"+f](a,b,d,e,h),i}}return c
  //           }({
  //             instrumentationKey: "38a7ce38-8ac5-429e-a25c-39394d464e62"
  //           });
  //           window.appInsights=appInsights,appInsights.queue&&0===appInsights.queue.length&&appInsights.trackPageView();
  //         `
  //       }}
  //     />
  //   </>
  // ) : <></>;
}
