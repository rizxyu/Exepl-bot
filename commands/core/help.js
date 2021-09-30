const { readdirSync } = require("fs")
module.exports = {
    name: ['help'],
    aliases: ['core'],
    description: "mengetahui deskripsi dari command",
    utilisation: userbot.prefix +'help',

execute(m) {
try {
let { args } = data
if (!args[0]) return m.reply("command?")
let { description, utilisation } = global.Events[args[0]]
m.reply(`Description: ${description}\nUse: ${utilisation}`)
} catch {
m.reply("not such command")
}
}
}