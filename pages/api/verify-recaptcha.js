
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from 'axios';

import getConfig from 'next/config';

const { serverRuntimeConfig } = getConfig();

const reCAPTCHA_SITE_KEY = process.env.RECAPTCHA_SITE_KEY;
const rECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { recaptchaToken } = req.body;

        const response = await axios.post(
            `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
            {},
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
        );

        if (response.data.success) {
            // ReCAPTCHA doğrulaması başarılı oldu
            res.status(200).json({ success: true });
        } else {
            // ReCAPTCHA doğrulaması başarısız oldu
            res.status(400).json({ success: false, errors: response.data['error-codes'] });
        }
    } else {
        res.status(404).end();
    }
}
