import Head from 'next/head';

const CustomHead = ({ title, description, url, image }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="theme-color" content="#E47B00" />
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="젠프라, 제주, 제주도, 인프라, 설문, 제주 이야기, 제주도민, 취미, 성향, 그룹활동, 스터디, 성장, 성장라이프, 라이프스타일"
      />
      <meta property="og:site_name" content={title} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:title" content={title} />
      <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
      <link rel="shortcut icon" href="/images/shortcut-icon.png" />
    </Head>
  );
};

export default CustomHead;
