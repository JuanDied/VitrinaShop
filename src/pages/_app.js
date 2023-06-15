import Head from 'next/head';
import Script from 'next/script';

import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';
import Header from '@components/Header';

import '@styles/globals.css';

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState();
  return (
    <>
      <Head>
        <title>Vitrina</title>
      </Head>
      <AppContext.Provider value={initialState}>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-Z64WKNXW0V" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-Z64WKNXW0V');
          `}
        </Script>

        <Header />
        <Component {...pageProps} />
      </AppContext.Provider>
    </>
  );
};

export default MyApp;
