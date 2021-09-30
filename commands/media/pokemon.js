let pokefunc = require("../../Lib/poke")
let request = require ("request-promise")
let pkarrs = JSON.parse(Ft.fs.readFileSync('./Lib/pokedata/poke.json'))
module.exports = {
name: ["pokemon"],
aliases: ['information'],
description: "mengetahui informasi pokemon",
utilisation: global.userbot.prefix+ "pokemon",

async execute(m) {
let {conn, args, text} = data
let txt1 = args[1]
let txt2 = args[2]
if (args[0] == "list") {
if (!txt1) return m.reply("urutan ke berapa?")
if (!txt2) return m.reply("limitnya berapa")
let raww = await request.get(`https://pokeapi.co/api/v2/pokemon?offset=${txt1}&limit=${txt2}`)
let raw = JSON.parse(raww).results
txt = `list pokemon, offset maximal 1118\n`
for (i of raw) {
txt += `-${i.name}\n`
}
vb = txt.trim()
return m.reply(vb)
}
if (!text) return m.reply('Give me a pokemon name, Baka!, used /pokemon list for list pokemon name list')
if (pkarrs.includes(text.toLowerCase())) {
m.reply(userbot.mess.wait)
let pokedta = await pokefunc.pkmzdata(text.toLowerCase())
 m.reply(pokedta.data)
} else {
conn.reply(m.chat, `No such pokemon (${text.toLowerCase()})`, m)
}
}
}