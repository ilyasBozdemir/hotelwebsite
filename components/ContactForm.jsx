import { Flex, FormControl, FormLabel, Input, Textarea, Button, HStack, Heading, Stack } from '@chakra-ui/react';
import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { ReCAPTCHA_SITE_KEY, RECAPTCHA_SECRET_KEY } from '../constants/Site'

export default function ContactForm() {
    const [formData, setFormData] = React.useState({
        name: '',
        surname: '',
        email: '',
        phone: '',
        message: '',
        recaptcha: null,
    });
    const recaptchaRef = React.useRef();

    const handleSubmit = async (event) => {
        event.preventDefault();
        // ReCAPTCHA doğrulaması yapılıyor
        const recaptchaToken = await window.grecaptcha.execute();
        const response = await fetch('/api/verify-recaptcha', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ recaptchaToken })
        });

        const data = await response.json();

        if (data.success) {
            // ReCAPTCHA doğrulaması başarılı oldu
            // Form verilerini sunucuya gönderin
            console.log(formData);
        } else {
            // ReCAPTCHA doğrulaması başarısız oldu
            alert('Lütfen tekrar deneyin.');
        }
        console.log(recaptchaToken);
        console.log(formData);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCaptchaChange = (value) => {
        setFormData({ ...formData, recaptcha: value });
    };

    return (
        <>
            <Heading as="h6" size="md" p={3}>
                Bize Ulaşın
            </Heading>
            <Stack
                as={Flex}
                align="center"
                justify="center"
                p={3}
                spacing='10px'
            >
                < >
                    <Stack id='my-form' as='form' onSubmit={handleSubmit}>
                        <HStack>
                            <FormControl id="name" isRequired>
                                <FormLabel>Ad</FormLabel>
                                <Input name="name" value={formData.name} onChange={handleInputChange} placeholder="Adınız" />
                            </FormControl>

                            <FormControl id="surname" isRequired>
                                <FormLabel>Soyad</FormLabel>
                                <Input name="surname" value={formData.surname} onChange={handleInputChange} placeholder="Soyadınız" />
                            </FormControl>
                        </HStack>
                        <HStack>
                            <FormControl id="email" isRequired>
                                <FormLabel>E-Posta</FormLabel>
                                <Input name="email" value={formData.email} onChange={handleInputChange} placeholder="E-Posta adresiniz" type="email" />
                            </FormControl>

                            <FormControl id="phone" isRequired>
                                <FormLabel>Telefon</FormLabel>
                                <Input name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Telefon numaranız" type="tel" />
                            </FormControl>
                        </HStack>
                        <FormControl id="message" isRequired>
                            <FormLabel>Mesaj</FormLabel>
                            <Textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Mesajınız" />
                        </FormControl>

                        <FormControl>
                            <ReCAPTCHA ref={recaptchaRef} sitekey={ReCAPTCHA_SITE_KEY} onChange={handleCaptchaChange} />
                        </FormControl>
                        <Button
                            mt={4} variant={'outline'}
                            colorScheme="red"
                            data-sitekey={ReCAPTCHA_SITE_KEY}
                            data-callback='handleSubmit'
                            data-action='submit'
                            type='submit'
                        >Gönder</Button>
                    </Stack>
                </>
            </Stack>
        </>
    );
};
