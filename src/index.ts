import { Bot, InlineKeyboard } from 'grammy';
import 'dotenv/config';

const bot = new Bot(String(process.env.TOKEN_BOT));

const inlineKeyboard = new InlineKeyboard()
    .text("⚙️ Configuraçoes ", "click-Settings")
    .text("🪐  Comandos", "click-commands")

bot.command("start", async (ctx) => {
    let user = ctx.update.message?.from.first_name;

    await ctx.replyWithAnimation("https://user-images.githubusercontent.com/105066526/212499299-5ff9de1c-e708-490e-9f87-e2cb439f14b1.gif",
        { caption: `Hi @${user}`, reply_markup: inlineKeyboard });
});

bot.command("node", async (ctx) => {
    let text = ctx.update.message?.text;
    let query = text?.slice(5);

});

bot.command("reply", async (ctx) => {
    let text = ctx.update.message?.text;
    let query = text?.slice(6);

    if (query) return await ctx.reply(query);

    await ctx.reply(`_Exemplo de uso do comando_ :  */reply example*`, { parse_mode: "MarkdownV2" });
});

bot.start();