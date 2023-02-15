import Head from 'next/head';

const CustomHead = ({ title, description, url, image }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="theme-color" content="#E47B00" />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
    </Head>
  );
};

export default CustomHead;
