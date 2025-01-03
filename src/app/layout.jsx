import 'swiper/css'; // Import global CSS
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/globals.css'; // Import custom global CSS
import Script from 'next/script';
import { mainURL } from 'data/seo';
import Layout from 'components/Layout';

export const metadata = {
  title: {
    default: 'Vedavarsity | Unveiling Eternal Knowledge'
  },
  description:
    'Explore profound teachings of the Bhagavad Gita at Vedavarsity. Learn Bhakti Shashtri, Teacher Training Course, and IDC. Enrol Now!',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: mainURL, //TODO: Change this on Domain name change
    site_name: 'INSS',
    images: [
      {
        url: `${mainURL}/iskconseo.png`
      }
    ]
  },
  twitter: {
    handle: '@IskconBhagavata',
    site: '@IskconBhagavata',
    cardType: 'summary_large_image'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/inss-logo.png" type="image/x-icon" />
        <meta name="p:domain_verify" content="7faeda8d52539112a046a1943a022c62" />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N4DQH64"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FB_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
      </head>
      <body>
        <Layout>{children}</Layout>
        <NextScripts />
      </body>
    </html>
  );
}

function NextScripts() {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-239ELGF4RC`}
      />
      <Script
        strategy="afterInteractive"
        src={`https://d2mpatx37cqexb.cloudfront.net/delightchat-whatsapp-widget/embeds/embed.min.js`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-239ELGF4RC');
          `
        }}
      />
      <Script
        id="fbpixel-init"
        strategy="afterInteractive"
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
            fbq('init', ${process.env.NEXT_PUBLIC_FB_PIXEL_ID});
          `
        }}
      />
    </>
  );
}
