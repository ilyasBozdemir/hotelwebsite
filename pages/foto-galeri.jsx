import React, { useState, useCallback, useEffect } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { Box, BreadcrumbLink, Button, Center } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { Stack, Text, Icon } from "@chakra-ui/react";
import { Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";
import { IoMdArrowDropright } from "react-icons/io";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function GalleryPage() {
  const [ref, inView] = useInView({
    rootMargin: "0px",
    threshold: 0.5,
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const customStyles = {
    view: () => ({
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 2000,
    }),
    container: () => ({
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 3000,
    }),
  };

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
  const handleCategoryClick = (newCategory) => {
    setCategory(newCategory);
  };

  var images = [
    {
      src: "/images/otel-dis-gece.webp",
      alt: "otel-dis-gece",
      width: 4,
      height: 3,
      category: "genel",
    },
    {
      src: "/images/otel-dis-gunduz.webp",
      alt: "otel-dis-gunduz",
      width: 4,
      height: 3,
      category: "genel",
    },
    {
      src: "/images/giris.webp",
      alt: "giris",
      width: 4,
      height: 3,
      category: "oda",
    },
    {
      src: "/images/giris-2.webp",
      alt: "giris-2",
      width: 3,
      height: 4,
      category: "oda",
    },
    {
      src: "/images/giris-3.webp",
      alt: "giris-3",
      width: 3,
      height: 4,
      category: "oda",
    },
    {
      src: "/images/kapi.webp",
      alt: "kapi",
      width: 3,
      height: 4,
      category: "oda",
    },
    {
      src: "/images/koridor.webp",
      alt: "koridor",
      width: 3,
      height: 4,
      category: "oda",
    },
    {
      src: "/images/lavabo-1.webp",
      alt: "lavabo-1",
      width: 3,
      height: 4,
      category: "oda",
    },
    {
      src: "/images/lavabo-2.webp",
      alt: "lavabo-2",
      width: 3,
      height: 4,
      category: "oda",
    },
    {
      src: "/images/lobi.webp",
      alt: "lobi",
      width: 3,
      height: 4,
      category: "oda",
    },
    {
      src: "/images/lobi-2.webp",
      alt: "lobi2",
      width: 3,
      height: 4,
      category: "oda",
    },
    {
      src: "/images/manzara.webp",
      alt: "manzara",
      width: 3,
      height: 4,
      category: "genel",
    },
    {
      src: "/images/manzara-2.webp",
      alt: "3",
      width: 3,
      height: 4,
      category: "genel",
    },
    {
      src: "/images/merdiven.webp",
      alt: "merdiven",
      width: 3,
      height: 4,
      category: "oda",
    },
    {
      src: "/images/oda.webp",
      alt: "oda",
      width: 3,
      height: 4,
      category: "oda",
    },
    {
      src: "/images/oda-1.webp",
      alt: "oda-1",
      width: 3,
      height: 4,
      category: "oda",
    },
    {
      src: "/images/oda-2.webp",
      alt: "oda-2",
      width: 3,
      height: 4,
      category: "oda",
    },
    {
      src: "/images/oda-3.webp",
      alt: "oda-3",
      width: 3,
      height: 4,
      category: "oda",
    },
    {
      src: "/images/oda-4.webp",
      alt: "oda-4",
      width: 3,
      height: 4,
      category: "oda",
    },
    {
      src: "/images/oda-5.webp",
      alt: "oda-5",
      width: 3,
      height: 4,
      category: "oda",
    },
  ];
  const [category, setCategory] = useState("Tümü");
  const [categoryImages, setCategoryImages] = useState([]);
  const [generalImages, setGeneralImages] = useState([]);
  const [roomImages, setRoomImages] = useState([]);

  useEffect(() => {
    const allImages = [...images];
    const general = images.filter((image) => image.category === "genel");
    const room = images.filter((image) => image.category === "oda");

    setCategoryImages(allImages);
    setGeneralImages(general);
    setRoomImages(room);
  }, []);

  useEffect(() => {
    if (category === "Tümü") {
      setCategoryImages(images);
    } else if (category === "Oda") {
      setCategoryImages(roomImages);
    } else if (category === "Genel") {
      setCategoryImages(generalImages);
    }
  }, [category]);

  const desc = `Güven Oteli'nin fotoğraf galerisi sayfasında, otel hakkında detaylı bilgi alabilir, konforlu odalarımızı ve güzel manzaralarımızı inceleyebilirsiniz. İsterseniz siz de fotoğraf galerimizdeki fotoğrafları görüntüleyebilirsiniz. Ayrıca, iletişim sayfamızda yer alan bilgilerimiz aracılığıyla bize ulaşarak, daha fazla bilgi edinebilirsiniz.`;
  const canonicalUrl = "https://www.guvenotell.com/foto-galeri";
  return (
    <>
      <Head>
        <title>Foto Galeri • Güven Otel</title>
        <link rel="canonical" href={canonicalUrl} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Güven Otel" />
        <meta name="twitter:description" content={desc} />

        <meta name="twitter:site" content="" />
        <meta name="og:title" content="Güven Otel" />
        <meta name="og:description" content={desc} />
        <meta name="og:type" content="website" />
        <meta charset="utf-8" />
        <meta
          name="google-site-verification"
          content="nT-gjFplTL9A7HSiOVq0-yMDbLSEh6Nb-7UV2Jr4QAk"
        />
        <meta
          name="keywords"
          content="hotel photos, otel fotoğrafları, ermenek otel foto galeri, güneyyurt otel foto galeri, güven otel fotoğrafları"
        />
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
      </Head>
      <>
        <>
          <Stack direction={"column"} mt={6} bg={"blackAlpha.200"}>
            <Breadcrumb separator={<Icon as={IoMdArrowDropright} />}>
              <BreadcrumbItem>
                <>
                  <BreadcrumbLink as={Link} href={"/"} legacyBehavior>
                    <a>Anasayfa</a>
                  </BreadcrumbLink>
                </>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <Text>Foto Galeri</Text>
              </BreadcrumbItem>
            </Breadcrumb>
            <Center>
              <Stack
                direction={{ base: "column", md: "row" }}
                spacing={4}
                align={"center"}
                w={{ base: 250, md: "auto" }}
              >
                <Button
                  colorScheme="red"
                  variant="outline"
                  onClick={() => handleCategoryClick("Tümü")}
                >
                  Tümü
                </Button>
                <Button
                  colorScheme="red"
                  variant="outline"
                  onClick={() => handleCategoryClick("Oda")}
                >
                  Odalar
                </Button>
                <Button
                  colorScheme="red"
                  variant="outline"
                  onClick={() => handleCategoryClick("Genel")}
                >
                  Genel
                </Button>
              </Stack>
            </Center>

            <>
              <div ref={ref}>
                {inView && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={imageVariants}
                    transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
                  >
                    <Gallery photos={categoryImages} onClick={openLightbox} />
                  </motion.div>
                )}
              </div>

              <Stack as={ModalGateway}>
                {viewerIsOpen ? (
                  <Modal onClose={closeLightbox} styles={customStyles}>
                    <Carousel
                      currentIndex={currentImage}
                      views={categoryImages.map((x) => ({
                        ...x,
                        srcset: x.srcSet,
                        caption: x.title,
                        alt: x.alt,
                      }))}
                    />
                  </Modal>
                ) : null}
              </Stack>
            </>
          </Stack>
        </>
      </>
    </>
  );
}
