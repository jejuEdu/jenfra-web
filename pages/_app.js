import '../styles/reset.css';
import '../styles/globals.css';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  useEffect(() => {
    setScreenSize();
  });

  return (
    <QueryClientProvider client={client}>
      {/* {process.env.NODE_ENV !== 'production' ? <ReactQueryDevtools initialIsOpen={false} /> : null} */}
      <Head>
        {/* 더블클릭이나 pinch zoom을 통한 확대/축소 기능 막기 */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1, user-scalable=0"
        />
        <meta name="robots" content="index,follow"></meta>
        <meta
          name="google-site-verification"
          content="QrjqDdTkGxjY5kmv-HIhdrbiAdFqqXZnPY0Q2N_qkYU"
        />
        <script defer src="https://cdn.swygbro.com/public/widget/swyg-widget.js"></script>
      </Head>

      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default MyApp;
