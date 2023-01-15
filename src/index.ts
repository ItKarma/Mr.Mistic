import { Bot, InlineKeyboard } from 'grammy';
import 'dotenv/config';

const bot = new Bot(String(process.env.TOKEN_BOT));

const inlineKeyboard = new InlineKeyboard().url(
    "Read on TechCrunch",
    "https://techcrunch.com/2016/04/11/this-is-the-htc-10/",
);

bot.command("start", (ctx) => {
    ctx.reply("*Hi\\!* _Welcome_ to [grammY](https://grammy.dev)\\.",
        { parse_mode: 'Markdown', reply_markup: inlineKeyboard })
});



bot.start();