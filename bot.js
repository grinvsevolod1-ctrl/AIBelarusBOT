import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv';
dotenv.config();

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Открой GPT WebApp:', {
    reply_markup: {
      inline_keyboard: [[
        {
          text: 'Открыть чат 🤖',
          web_app: { url: 'https://telegram-gpt-webapp.vercel.app' }
        }
      ]]
    }
  });
});
