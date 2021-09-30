module.exports = {
name: ["evr"],
description: "ya nda tauk",
utilisation: userbot.prefix + "evr",
aliases: ["owner"],
execute(m) {
let message = m.text
let { conn } = data
if(!m.key.fromMe) return
console.log('[', Ft.color('EVAL', 'silver'),']', Ft.color(Ft.moment(m.messageTimestamp * 1000).format('DD/MM HH:mm:ss'), 'yellow'), Ft.color(message))
try {
return m.reply(JSON.stringify(eval(message.slice(5)),null,'\t'))
} catch(e) {
m.reply(`${e}`)
}
}
}