import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import Head from "next/head";

import Footer from "../components/Footer";
import Link from "next/link";
import { Stack, Text } from "@chakra-ui/react";
import { Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";

function GalleryPage() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  var images = [
    {
      src: "/images/otel-dis-gece.jpeg",
      alt: "otel-dis-gece",
      width: 4,
      height: 3,
    },
    {
      src: "/images/otel-dis-gunduz.jpg",
      alt: "otel-dis-gunduz",
      width: 4,
      height: 3,
    },
    {
      src: "/images/giris.jpeg",
      alt: "giris",
      width: 4,
      height: 3,
    },
    {
      src: "/images/giris-2.jpeg",
      alt: "giris-2",
      width: 3,
      height: 4,
    },
    {
      src: "/images/giris-3.jpeg",
      alt: "giris-3",
      width: 3,
      height: 4,
    },
    {
      src: "/images/kapi.jpeg",
      alt: "kapi",
      width: 3,
      height: 4,
    },
    {
      src: "/images/koridor.jpeg",
      alt: "koridor",
      width: 3,
      height: 4,
    },
    {
      src: "/images/lavabo-1.jpeg",
      alt: "lavabo-1",
      width: 3,
      height: 4,
    },
    {
      src: "/images/lavabo-2.jpeg",
      alt: "lavabo-2",
      width: 3,
      height: 4,
    },
    {
      src: "/images/lobi.jpeg",
      alt: "lobi",
      width: 3,
      height: 4,
    },
    {
      src: "/images/lobi-2.jpeg",
      alt: "lobi2",
      width: 3,
      height: 4,
    },
    {
      src: "/images/manzara.jpeg",
      alt: "manzara",
      width: 3,
      height: 4,
    },
    {
      src: "/images/manzara-2.jpeg",
      alt: "3",
      width: 3,
      height: 4,
    },
    {
      src: "/images/merdiven.jpeg",
      alt: "merdiven",
      width: 3,
      height: 4,
    },
    {
      src: "/images/oda.jpeg",
      alt: "oda",
      width: 3,
      height: 4,
    },
    {
      src: "/images/oda-1.jpeg",
      alt: "oda-1",
      width: 3,
      height: 4,
    },
    {
      src: "/images/oda-2.jpeg",
      alt: "oda-2",
      width: 3,
      height: 4,
    },
    {
      src: "/images/oda-3.jpeg",
      alt: "oda-3",
      width: 3,
      height: 4,
    },
    {
      src: "/images/oda-4.jpeg",
      alt: "oda-4",
      width: 3,
      height: 4,
    },
    {
      src: "/images/oda-5.jpeg",
      alt: "oda-5",
      width: 3,
      height: 4,
    },
  ];
  const desc = `Güven Oteli'nin fotoğraf galerisi sayfasında, otel hakkında detaylı bilgi alabilir, konforlu odalarımızı ve güzel manzaralarımızı inceleyebilirsiniz. İsterseniz siz de fotoğraf galerimizdeki fotoğrafları görüntüleyebilirsiniz. Ayrıca, iletişim sayfamızda yer alan bilgilerimiz aracılığıyla bize ulaşarak, daha fazla bilgi edinebilirsiniz.`;

  return (
    <>
      <Head>
        <title>Foto Galeri • Güven Otel</title>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Güven Otel" />
        <meta name="twitter:description" content={desc} />

        <meta name="twitter:site" content="@Ilyasbzdmr70" />
        <meta name="og:title" content="Güven Otel" />
        <meta name="og:description" content={desc} />
        <meta name="og:type" content="website" />
        <meta charset="utf-8" />
        <meta
          name="google-site-verification"
          content="nT-gjFplTL9A7HSiOVq0-yMDbLSEh6Nb-7UV2Jr4QAk"
        />
        <meta name="keywords" content="hotel photos, otel fotoğrafları, ermenek otel foto galeri, güneyyurt otel foto galeri, güven otel fotoğrafları" />
        <meta itemprop="name" content="Güven Otel" />
        <meta itemprop="description" content={desc} />
        <meta name="description" content={desc} />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="Turkish" />
        <meta name="revisit-after" content="3 days" />
        <meta name="author" content="ilyas Bozdemir,bozdemir.ib70@gmail.com" />
        <meta name="publisher" content="ilyas Bozdemir" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="/foto-galeri" />
      </Head>
      <>
        <>
          <Stack direction={"column"} mt={10} bg={"gray.200"}>
            <Breadcrumb>
              <BreadcrumbItem>
                <>
                  <Link href={"/"} legacyBehavior>
                    <a>Anasayfa</a>
                  </Link>
                </>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <Text>Foto Galeri</Text>
              </BreadcrumbItem>
            </Breadcrumb>
          </Stack>
        </>

        <>
          <Gallery photos={images} onClick={openLightbox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={images.map((x) => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title,
                    alt: x.alt,
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </>

        <Footer />
      </>
    </>
  );
}

export default GalleryPage;
