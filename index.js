const TelegramApi = require('node-telegram-bot-api')

const token = '6979213681:AAEGTJm73Mb4c0Ddq00XZuRxbjgvjvi2_yg'

const bot = new TelegramApi(token, {polling: true})

bot.on('message', msg =>{
    const text = msg.text;
    const chatId = msg.chat.id

    bot.setMyCommands([
        {command: '/start', description: 'Откат-накат'}
    ])

    bot.sendMessage(chatId, 'Выберите опции:', {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Кролики', callback_data: '1' }
                ],
                [
                    { text: '🐺 Волчья стая', callback_data: '2' }
                ],
                [
                    { text: 'Колибри', callback_data: '3' }
                ],
                [
                    { text: 'Корги', callback_data: '4' }
                ],
                [
                    { text: 'Панды', callback_data: '5' }
                ],
                [
                    { text: '🦊 Лисы', callback_data: '6' },
                ]
            ]
        }
    });
})
