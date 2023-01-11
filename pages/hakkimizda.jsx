import React from "react";
import Head from "next/head";
import { useBreakpointValue } from '@chakra-ui/react'
import Footer from "../components/Footer";
import Link from "next/link";
import {
  Stack,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
  Box,

} from "@chakra-ui/react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";



function AboutUs() {
  const isMobile = useBreakpointValue({ base: true, md: false } )

  const Content=()=>{
    return(<>
    <Flex 
     
    w={'full'} 
    p={3} 
    bgGradient={'linear(to-r, gray.200, gray.300)'}  
    color={'black'} 
    justifyContent={{base:'flex-start',md:'center'}}
     direction={'column'}
     boxShadow={'10px 10px 20px 0px rgba(0,0,0,0.75)'}
     >
<Text  fontSize={40} fontFamily={'"Times New Roman", Times, serif'}
 fontWeight={'semibold'}     textAlign={{base:'flex-start',md:'center'}}>Güven Otel</Text>
<Text fontSize={18} fontFamily={'"Times New Roman", Times, serif'}>
Şirin Otel, Ermenek ilçesinde konaklamanız için idealdir.
Otelimiz 26 yataklıdır ve günlük ücreti kişi başı 100 TL'dir.
Bu fiyat kahvaltı dahil değildir.
Otelimizde 1 kişilik, 2 kişilik ve 3 kişilik odalar mevcuttur.
Uzun süreli konaklamalar için fiyatlarımızda indirim yapılır.
Otelimizde Wi-Fi, sıcak su ve her odada TV mevcuttur. 
Konum olarak baktığımızda Ermenek ilçesine 10 km, Turkuaz Baraj Gölüne 14 km, 
Ermenek Devlet Hastanesine 12 km ve Ermenek Kapalı Cezaevine 13 km uzaklıktadır. 
 aynı zamanda da doğal güzellikleri keşfetmek isteyenler için mükemmel bir konuma sahip hale getirir.
Ermenek ve çevresinde gezinti yapmak isteyen misafirlerimize, Turkuaz Baraj Gölünü, Ermenek Devlet Hastanesini, Ermenek Kapalı Cezaevini ve Ermenek ilçesinin tarihi yerlerini ziyaret etmelerini tavsiye ederiz. Bu yerleri ziyaret etmeniz, Ermenek ve çevresinin güzelliklerini keşfetmenizi ve kalınan sürenizi daha keyifli hale getirmesini sağlar.
Otelimizde konaklamanız sırasında sizlere hizmet vermeye devam edeceğiz.
</Text>
    </Flex>
    </>)
  }
 

  return (
    <>
      <Head>
        <title>Hakkımızda | Güven Otel</title>
        <meta name="description" content="Hakkımızda, Güven Otel" />
      </Head>
      <>
        <Stack>
        <Stack direction={"column"} mt={10} >
         

          <Breadcrumb>
            <BreadcrumbItem>
              <>
                <Link href={"/"} legacyBehavior>
                  <a>Anasayfa</a>
                </Link>
              </>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <Text>Hakkımızda</Text>
            </BreadcrumbItem>
          </Breadcrumb>
          <Flex
            mt={30}
          >
           
      <Stack  position= 'relative' fontFamily={"'Playfair Display',sans-serif"}>
        <Image src='/images/giris.jpeg' alt='about-us' display={{base:'none',md:'initial'}}/>
       {
        isMobile===true?<>
<Box rounded={4} >
          <Content/>
        </Box>  
        </>
        :<>
        <Box  rounded={4}  css={{
                   position: 'absolute',
                   top:'0',
                   left:'0',
                   color: 'white',
                   fontSize: '32px',
                   fontWeight: 'semibold',
                   padding: '10px',
                   fontSmoothing: 'antialiased',
                   width:'50%'

                }}>
                  <Content/>
                </Box>  
                </>
       }


      
      </Stack>
            
          </Flex>
        </Stack>
      </Stack>
      <Footer />
      </>
    </>
  );
}

export default AboutUs;
