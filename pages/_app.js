import '../styles/reset.css';
import '../styles/globals.css';
import '../styles/responsive.css';
import Head from 'next/head';
import useWindowSize from '../hooks/useWindowSize';

function MyApp({ Component, pageProps }) {
  const windowSize = useWindowSize();

  return (
    <>
      <Head>
        <meta name="viewport" viewport={windowSize.width > 720 ? 'device-width' : '720'} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
