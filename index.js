const TelegramApi = require('node-telegram-bot-api')

const token = '6979213681:AAEGTJm73Mb4c0Ddq00XZuRxbjgvjvi2_yg'

const bot = new TelegramApi(token, {polling: true})


bot.on('message', msg => {
    const text = msg.text;
    const chatId = msg = msg.chat.id;
    bot.sendMessage(chatId, 'бибабоба')
})