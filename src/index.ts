import { Bot } from 'grammy';
import 'dotenv/config';

const bot = new Bot(String(process.env.TOKEN_BOT));

bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));

bot.start();