import TelegramBot from 'node-telegram-bot-api';

const token = "7808996103:AAG2R6KTzv7egQ_Yb315QOVo1na-VrQWTe4"; // Replace with valid bot token
const bot = new TelegramBot(token, { polling: true });

const userId = 6391055516; // Replace with actual Telegram user ID

export const sendMessageToUser = async (data) => {
    let messageToSend = `Full Name : ${data.name} \nPhone Number : ${data.phone} \nMessage : ${data.message}`;
    console.log("Sending Message:\n", messageToSend);

    try {
        const response = await bot.sendMessage(userId, messageToSend);
        console.log('Message sent successfully:', response);
    } catch (error) {
        console.error('Error sending message:', error.response?.body?.description || error);
    }
};

