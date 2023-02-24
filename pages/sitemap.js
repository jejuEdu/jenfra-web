import { getServerSideSitemap } from 'next-sitemap'; //(1)

//(2)
export const getServerSideProps = async (ctx) => {
  const lastmod = new Date().toISOString();

  //(3), (4)
  const defaultFields = [
    {
      loc: `${process.env.NEXT_PUBLIC_URL}`,
      changefreq: 'weekly',
      priority: '1.0',
      lastmod,
    },
    {
      loc: `${process.env.NEXT_PUBLIC_URL}/survey`,
      changefreq: 'weekly',
      priority: '1.0',
      lastmod,
    },
  ];

  //(6)
  const fields = [...defaultFields];

  //(7)
  return getServerSideSitemap(ctx, fields);
};
//(8)
export default () => {
  return;
};
