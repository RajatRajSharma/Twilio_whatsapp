// File: twilioService.js

import twilio from 'twilio';
import dotenv from 'dotenv';

dotenv.config();
// Twilio configuration
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.ACCOUNT_AUTH;
const client = twilio(accountSid, authToken);

const twilioPhoneNumber = 'whatsapp:+14155238886';

export const sendWhatsAppMessage = async (to, content) => {
    console.log(`twilioPhone : ${twilioPhoneNumber} , to : ${to}`);
    console.log(accountSid , authToken);
    try {
        const message = await client.messages.create({
            body: content,
            from: twilioPhoneNumber,
            to: `whatsapp:+${to}`,
        });
        console.log(`Message sent successfully. SID: ${message.sid}`);
        return {messageSid : message.sid , accountSid : accountSid};
    } catch (error) {
        console.error('Error sending WhatsApp message:', error);
        throw error;
    }
};