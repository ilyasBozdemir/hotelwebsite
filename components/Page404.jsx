import React from 'react'
import Head from "next/head";
import Link from "next/link";
import { Box, Button, Container, Heading, Stack, Text } from '@chakra-ui/react'
function Page404() {
    return (
        <>
            <Head>
                <title>404 Hatası: Sayfa Mevcut Değil</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <>
                <Box as="section" bg="bg-surface">
                    <Container
                        py={{
                            base: '16',
                            md: '24',
                        }}
                    >
                        <Stack
                            spacing={{
                                base: '8',
                                md: '10',
                            }}
                        >
                            <Stack
                                spacing={{
                                    base: '4',
                                    md: '5',
                                }}
                                align="center"
                            >
                                <Heading
                                    size={{
                                        base: 'sm',
                                        md: 'md',
                                    }}
                                >
                                    Aradığınız Sayfa Bulunamadı!
                                </Heading>
                                <Text color="muted" maxW="2xl" textAlign="center" fontSize="xl">
                                    Üzgünüz, aradığınız sayfaya ulaşılamadı.
                                    Muhtemelen, yanlış bir URL adresi girdiniz veya web sitemizdeki bir sayfa taşındı.
                                    Lütfen tekrar deneyin ve URL adresinin doğru olduğundan emin olun.
                                    Eğer sorun devam ediyorsa, bizimle iletişime geçebilirsiniz.Teşekkürler.
                                </Text>
                            </Stack>
                            <Stack
                                spacing="3"
                                direction={{
                                    base: 'column',
                                    sm: 'row',
                                }}
                                justify="center"
                            >
                                <Link href='/'>
                                    <Button colorScheme={'red'} size="lg">
                                        Anasayfaya Dön
                                    </Button>
                                </Link>

                            </Stack>
                        </Stack>
                    </Container>
                </Box>
            </>
        </>
    )
}

export default Page404