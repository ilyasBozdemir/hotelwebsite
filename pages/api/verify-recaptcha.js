import axios from 'axios';

export default async function handler(req, res) {

    const reCAPTCHA_SITE_KEY = '6LfnlrUkAAAAAJMulQJD5oU_3_vj6Xrp-i_PUj6M'
    const rECAPTCHA_SECRET_KEY = '6LfnlrUkAAAAAKr7ZwUui7k3tT4RyBJ7xxjdNWOq'

    if (req.method === 'POST') {
        const { recaptchaToken } = req.body;

        const response = await axios.post(
            `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
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
