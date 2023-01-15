import { Bot, InlineKeyboard } from 'grammy';
import 'dotenv/config';

const bot = new Bot(String(process.env.TOKEN_BOT));

const inlineKeyboard = new InlineKeyboard()
  .text("Get random music", "random")
  .switchInline("Send music to friends").row()
  .text("Get random music", "random")

bot.command("start", async (ctx) => {
    let user = ctx.update.message?.from.first_name;

    await ctx.replyWithAnimation("https://user-images.githubusercontent.com/105066526/212499299-5ff9de1c-e708-490e-9f87-e2cb439f14b1.gif", 
    { caption : `Hi @${user}`, reply_markup : inlineKeyboard })
});



bot.start();