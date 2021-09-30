 let speed = require("performance-now")

module.exports = {
name: "speed",
    aliases: ['core'],
    description: "melihat kecepatan bot",
    utilisation: global.userbot.prefix+ "speed",

execute(conn, m) {
let timestamp = speed();
let latensi = speed() - timestamp
let text =`「 *𝙎𝙋𝙀𝙀𝘿 𝙏𝙀𝙎𝙏* 」
Merespon dalam ${latensi.toFixed(4)} Secondsl 💬`
m.reply(text)
}
}

