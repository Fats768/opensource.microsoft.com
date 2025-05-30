//
// Copyright (c) Microsoft.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//

import fs from 'fs';

import './globals.css'
import './styles/main.scss'

// import type { Metadata } from 'next';
// import Head from 'next/head';
// import Script from 'next/script';

import Footer from '../components/Footer';
import TelemetryHead from '../components/TelemetryHead';
import TelemetryBody from '../components/TelemetryBody';
import TelemetryScript from '../components/TelemetryScript';
import MicrosoftOpenSourceHeader from '@/components/OpenSourceHeader';
import { isTelemetryEnabled } from './telemetry';

// export const metadata: Metadata = {
//   title: 'Microsoft Open Source',
//   description: 'Microsoft Open Source',
// };

// CONSIDER: if actually opensource.microsoft.com prod build, only then add telemetry
// (right now any Next.js prod build will add telemetry)

const startupJavaScript = fs.readFileSync('./src/app/startup.js', 'utf8');

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const shouldRenderTelemetry = isTelemetryEnabled();

  // for simplicity, in the port away from Jekyll, we didn't move
  //
  // everything... including these attributes:
  // - canonical: <link rel="canonical" href="{{ page.url | replace:'index.html','' | absolute_url }}">
  //
  // older tags around how the old site was built:
  // - stylesheet: <link rel="stylesheet" media="screen" href="{{ '/assets/css/index.css' | relative_url }}?v=1d" />
  // - handlebars
  // - jQuery
  // - jQuery timeago
  // - the <body /> ID used to have the page.id from Jekyll
  //
  // older stuff just cutting for now:
  // - site.webmanifest: <link rel="manifest" href="{{ '/assets/images/favicons/site.webmanifest' | relative_url }}">
  // - {% seo %}
  //
  // other JavaScript dependencies:
  // - gsap.min.js
  // - DrawSVGPlugin.min.js

  // legacy code: after the page loads, add the "page-ready" class to the body classlist
  return (
    <html lang="en">
      <head>
        <script 
          dangerouslySetInnerHTML={
            {
              __html: startupJavaScript
            }
          }
        />
        <meta name="robots" content="noindex nofollow" />
        <meta name="google-site-verification" content="PXNcqyP34d82CBV3rvH8RwDRH5iWWb_zL-UFwp-3Ubs" />
        <meta name="google-site-verification" content="jj6XRLurdxcqc_T28_tszxZ4M2K8TFQDPjvVRb8MLsg" />
        <meta name="theme-color" content="#24292e" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicons/favicon-16x16.png" />
        <meta name="msapplication-config" content="/images/favicons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#11100f" />
        <link rel="shortcut icon" type="image/x-icon" href="/images/favicons/favicon.ico" />
        <link rel="mask-icon" href="/images/favicons/safari-pinned-tab.svg" color="#11100f" />
        <meta httpEquiv='cleartype' content='off' />
        {shouldRenderTelemetry && <TelemetryHead />}
      </head>
      <body className="page-loading no-js">
        {shouldRenderTelemetry && <TelemetryBody />}
        
        <a className="skip-to-content" href="#content" tabIndex={1}>skip to content</a>
        
        <MicrosoftOpenSourceHeader
          site='opensource.microsoft.com'
        />
        
        <main id="content" className="main page-content" aria-label="Content">
          {children}
        </main>
        
        <Footer />
        
        {/* Scripts */}
        {/*
        <script src="/js/gsap.min.js"></script>
        <script src="/js/DrawSVGPlugin.min.js"></script>
        */}
        
        {/* Production telemetry script */}
        {shouldRenderTelemetry && <TelemetryScript />}
      </body>
    </html>
  );
}
