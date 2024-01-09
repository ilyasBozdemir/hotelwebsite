import React from "react";
import { siteInfo } from "@/siteInfo";
import { generateSitemapIndexGenerator } from "@/utils/generateSitemapIndexGenerator";

export const getServerSideProps = async ({ res }) => {
  const baseUrl = siteInfo.baseUrl;

  const sitemapIndex = generateSitemapIndexGenerator(
    baseUrl,
    siteInfo.sitemaps
  );

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemapIndex);
  res.end();
  return {
    props: {},
  };
};

function SitemapIndex() {}

export default React.memo(SitemapIndex);
