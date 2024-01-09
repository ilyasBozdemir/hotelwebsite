import { i18n } from "@/next-i18next.config";
import routes from "@/routes";
import { siteInfo } from "@/siteInfo";
import { formatDate } from "@/utils/formatDate";
import { getSourceForRoute } from "@/utils/getSourceForRoute";

const CACHE_DURATION = 86400;

export const getServerSideProps = async ({ res, req }) => {
  const baseUrl = siteInfo.baseUrl;
  const currentDate = new Date();

  const sitemapData = siteInfo.pages[i18n.defaultLocale];

  const ifModifiedSince = req.headers["if-modified-since"];

  const flattenRoutes = Object.entries(routes).reduce((acc, [key, locales]) => {
    const flattenedLocales = Object.entries(locales).reduce(
      (localeAcc, [locale, values]) => {
        return { ...localeAcc, [`${locale}`]: values };
      },
      {}
    );

    return { ...acc, ...flattenedLocales };
  }, {});

  if (
    !ifModifiedSince ||
    new Date(ifModifiedSince) < new Date(currentDate - CACHE_DURATION * 1000)
  ) {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1" 
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" 
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd"     
        >
        ${Object.entries(flattenRoutes)
          .map(([key, route]) => {
            const { source, sitemap: sitemapInfo } = route;

            console.table(sitemapInfo);

            return `
       
            `;
          })
          .join("")}
</urlset>`;

    // Yeni önbellek süresi
    const cacheExpiryTime = new Date(currentDate);
    cacheExpiryTime.setSeconds(cacheExpiryTime.getSeconds() + CACHE_DURATION);

    // Başlıkları ayarla
    res.setHeader("Last-Modified", cacheExpiryTime.toUTCString());
    res.setHeader(
      "Cache-Control",
      `max-age=${CACHE_DURATION}, must-revalidate`
    );
    res.setHeader("Content-Type", "text/xml");

    // İçeriği gönder
    res.write(sitemap);
  } else {
    res.statusCode = 304;
  }

  res.end();
  return {
    props: {},
  };
};

function PagesSitemapXml() {}

export default PagesSitemapXml;
