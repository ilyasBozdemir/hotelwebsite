import { Box, Button, Container, Heading, Stack, Text } from '@chakra-ui/react'
import ReservationButton from './ReservationButton'

export default function ReservationPage() {
  return (<>
    <Box as="section" bg="bg-surface" >
      <Container
        py={{
          base: '4',
          md: '6',
        }}
      >
        <Stack
          spacing={{
            base: '2',
            md: '3',
          }}
        >
          <Stack
            spacing={{
              base: '2',
              md: '3',
            }}
            align="center"
          >
            <Heading
              size={{
                base: 'sm',
                md: 'md',
              }}
            >
              Merhaba Değerli Müşterilerimiz,
            </Heading>
            <Text color="muted" maxW="2xl" textAlign="center" fontSize="xl">
              Yeni bir rezervasyon sayfası hazırlıyoruz ve çok yakında sizlerle buluşacak.
              Bu sayfa, müşterilerimizin seyahat planlarını kolayca organize etmelerine yardımcı olacak.
              Ancak tamamlamak için biraz daha zamana ihtiyacımız var.
              Bu süre zarfında, mevcut rezervasyon sayfamıza erişmek için geçici olarak aşağıdaki bağlantıyı kullanabilirsiniz:
              <p>Teşekkürler.</p>
              <p>Güven Otel</p>
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
            <ReservationButton />
          </Stack>
        </Stack>
      </Container>
    </Box></>)
}

