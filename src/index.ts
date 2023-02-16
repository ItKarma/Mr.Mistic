import { Bot, InlineKeyboard } from 'grammy';
import 'dotenv/config';
import axios from 'axios';
import { imgbbUploader } from "imgbb-uploader";

const bot = new Bot(String(process.env.TOKEN_BOT));

const inlineKeyboardStart = new InlineKeyboard()
    .text("⚙️ Configuraçoes ", "click-Settings")
    .text("🪐  Comandos", "click-commands")

bot.command("start", async (ctx) => {
    let user = ctx.update.message?.from.first_name;

    await ctx.replyWithAnimation("https://user-images.githubusercontent.com/105066526/212499299-5ff9de1c-e708-490e-9f87-e2cb439f14b1.gif",
        { caption: `Hi @${user}`, reply_markup: inlineKeyboardStart });
});


bot.command("reply", async (ctx) => {
    let text = ctx.update.message?.text;
    let query = text?.slice(6);

    if (query) return await ctx.reply(query);

    await ctx.reply(`_Exemplo de uso do comando_ :  */reply example*`, { parse_mode: "MarkdownV2" });
});

bot.command('ban', async (ctx) => {

    let userBanned = ctx.update.message?.reply_to_message?.from?.id;

    ctx.banChatMember(Number(userBanned)).then((data) => {
        ctx.reply('Banido' + data);
    }).catch((err) => {
        ctx.reply(`nao sou adm :( 
    error : ${err}`)
    })
});

bot.on('message', async (ctx) => {
    let usersJoineds = ctx.update.message.new_chat_members;
    let userslefts = ctx.update.message.left_chat_member?.first_name;


    if (userslefts) {
        await ctx.reply(`Adeus ${userslefts}`);
    }

    if (usersJoineds) {
       await ctx.reply(`Bem vindo @${usersJoineds[0].first_name}`);
    }

    if (ctx.update.message?.photo) {

        const inlineKeyboardUpload = new InlineKeyboard()
            .text("⚙️ Configuraçoes ", "click-Settings")
            .text("🪐  Comandos", "click-commands")

        if (ctx.update.message?.caption == '/upload') {
            return await ctx.reply(`_Uploading_ `, { parse_mode: "MarkdownV2" });
        } else {
            return ctx.reply(`Ola Sr. Percebi uma imagen , deseja upar pra nuvem ?`, {reply_markup: inlineKeyboardUpload });
        }
    }
})

bot.command("upload", async (ctx) => {

    await ctx.reply(`_Exemplo de uso do comando_ :  */reply*`, { parse_mode: "MarkdownV2" });
});

bot.start()