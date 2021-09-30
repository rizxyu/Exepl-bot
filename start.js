"use strict";

let Baileys = "@adiwajshing/baileys";
let { WAConnection: _WAConnection } = require(Baileys);
let WAConnection = require('./Lib/simple').WAConnection(_WAConnection);
let { Functions } = require('./Lib/Functions');
global.Events = {}
global.baileys = Baileys //Hehe
global.antidelete = false
global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')
global.Ft = new Functions();// Menghubungkan dari Function.js
global.mediaType = require(Baileys).MessageType //Biar keren hehe
global.conn = new WAConnection(); //Wa Connect dari baileys
global.botuser = require('./user')//Menghubungkan Ke Conection string
require('./src/loader')
global.battery = ({
value: NaN,
isCharge: false,
}) //Perantara Awal

async function run(session = '.') {// Function biar bisa run bot
await Ft.start('../action/chats');
await Ft.starts(conn, session);
let message = require('./action/chats');
let action = require('./action/action');
conn.connect();
conn.message = message.msg
conn.on('chat-update', conn.message);
conn.on('group-participants-update', action.groupUpdate);
}
Ft.action()
run('./session.json');// Menjalangkan Bot

