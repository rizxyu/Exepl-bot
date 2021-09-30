let brainly = require("brainly-scraper")
module.exports = {
name: ["brainly"],
aliases: ['information'],
description: "menjawab pertanyaan kamu",
utilisation: global.userbot.prefix+ "brainly",

async execute(m) {
let {conn, text} = data
if (!text) return m.reply("question?")
brainly(text)
.then(res => {
txt = `answer: ${res}`
m.reply(Ft.util.format(txt))
})
}
}