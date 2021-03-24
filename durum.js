var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Youtube kanalıma abone olmayı unutma", // BAŞLIĞIN ALTINDAKİ YAZI
assets : {
large_image : "omerusatpro", // FOTOĞRAF (EN KÜÇÜK 512 X 512 EN BÜYÜK 1024x1024)
large_text : "Youtube kanalıma abone olmayı unutma" // BAŞLIK İSMİ 
},
buttons : [{label : "Youtube kanalım" , url : "https://www.youtube.com/channel/UCV46IJQfpX3OA0VwHgdyzAg"},{label : "Discord sunucum", url : "https://discord.gg/yn84YmUyPQ"}]
}
})
})
console.log(`Durumunuz Başariyla Ayarlandi.`)
client.login({ clientId : "814184864353222657" }).catch(console.error);