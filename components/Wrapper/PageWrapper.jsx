import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import PagesCTA from "../PagesCTA";
import { useRouter } from "next/router";
import { DefaultSeo } from "next-seo";

function PageWrapper(props) {
  const { isCtaShow, children, currentPage } = props;
  const router = useRouter();

  const _SEO = {
    title: "title",
    description: "description",
    canonical: "canonical",
    siteName: "siteName",
    images: {
      url: "siteInfo.logoUrl",
      alt: "description",
    },
  };

  return (
    <>
      <DefaultSeo
        title={_SEO.title}
        description={_SEO.description}
        canonical={_SEO.canonical}
        openGraph={{
          type: "website",
          locale: "tr_TR",
          siteName: _SEO.siteName,
          title: _SEO.title,
          description: _SEO.description,
          images: [
            {
              url: _SEO.images.url,
              width: 1200,
              height: 630,
              alt: "Og Image Alt",
            },
          ],
        }}
      />
      <Flex direction={"column"} gap={2}>
        {isCtaShow && <PagesCTA currentPage={currentPage} />}
        {children}
      </Flex>
    </>
  );
}

export default PageWrapper;
