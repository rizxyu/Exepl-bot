const { readdirSync } = require('fs');
global.Events = {}
readdirSync('./commands/').forEach(dirs => {
let commands = readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));
for (let file of commands) {
let command = require(`../commands/${dirs}/${file}`);
console.log(`-> Loaded command ${command.name}`);
try {
global.Events[command.name] = command
} catch (e) {
global.conn.logger.error(e)
delete global.Events[command.name]
}
delete require.cache[require.resolve(`../commands/${dirs}/${file}`)];
};
});