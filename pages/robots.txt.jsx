// pages/robots.txt.jsx

import React from "react";
const baseUrl = 'https://www.guvenotell.com';

const generateRules = ({ allowDisallow }) => {
  const rules = [
    // Global kurallar
    `User-agent: *`,
    `# Apply to all browsers and robots`,
    `# -----------------`,
    `# Global rules`,
    ``,

    // Admin dizinine erişimi engelle
    `# /block access to admin directory`,
    `Disallow: /admin`,
    ``,

    // Arama sonuçlarındaki spam'leri önle
    `# To prevent search result spam`,
    `Disallow: /?s=*`,
    `Disallow: /search/*`,
    ``,

    ...allowDisallow.map((rule) => rule),
    ``,
    // Site haritası
    `# Sitemap`,
    `# -----------------`,
    `Sitemap: ${baseUrl}/sitemap.xml`,
    ``,
  ];

  return rules.join("\n");
};

const RobotsTxt = ({ allowDisallow = [] }) => {
  const robotsTxtContent = generateRules({ allowDisallow });
  return robotsTxtContent;
};

export const getServerSideProps = async ({ res }) => {
  const userDefinedPages = ["/example-page", "/another-page"];
  const userDefinedAllowDisallow = [
    "# userDefinedAllowDisallow",
    "Allow: /allowed-page",
    "Disallow: /disallowed-page",
  ];

  const robotsTxtContent = generateRules({
    pages: userDefinedPages,
    allowDisallow: userDefinedAllowDisallow,
  });

  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.write(robotsTxtContent);
  res.end();

  return {
    props: {},
  };
};



export default React.memo(RobotsTxt);