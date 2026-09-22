import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'RudraNāda | Stories, Music & Meaning',
    template: '%s | RudraNāda',
  },
  description: site.description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: 'RudraNāda | Stories, Music & Meaning',
    description: site.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RudraNāda | Stories, Music & Meaning',
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

const googleTagManagerScript = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W7X5464B');`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const graph = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': site.url + '/#organization',
      name: site.name,
      url: site.url,
      sameAs: [site.youtube, site.instagram, site.x],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': site.url + '/#website',
      url: site.url,
      name: site.name,
      description: site.description,
      publisher: { '@id': site.url + '/#organization' },
      inLanguage: 'en-IN',
    },
  ];

  return (
    <html lang="en-IN">
      <head>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{ __html: googleTagManagerScript }} />
        {/* End Google Tag Manager */}
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W7X5464B"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <JsonLd data={graph} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
