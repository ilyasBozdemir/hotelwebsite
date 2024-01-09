
const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getUTCFullYear();
    const month = `0${d.getUTCMonth() + 1}`.slice(-2);
    const day = `0${d.getUTCDate()}`.slice(-2);
    return `${year}-${month}-${day}`;
};

const baseUrl = 'https://www.guvenotell.com';

const routers = [
   '/',
   '/hakkimizda',
   '/foto-galeri',
   '/iletisim',
   '/rezervasyon',
]

export const getServerSideProps = async ({ res }) => {

    const currentDate = new Date();
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${routers
            .map(
                (router) => `
          <url>
            <loc>${baseUrl}${router}</loc>
            <lastmod>${formatDate(currentDate)}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>${0.9}</priority>
          </url>
        `
            )
            .join("")}
    </urlset>`;
    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();
    return {
        props: {},
    };
};

export default function Sitemap() { }