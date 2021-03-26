var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "", // BAŞLIĞIN ALTINDAKİ YAZI
assets : {
large_image : "", // FOTOĞRAF (EN KÜÇÜK 512 X 512 EN BÜYÜK 1024x1024)
large_text : "" // BAŞLIK İSMİ 
},
buttons : [{label : "" , url : ""},{label : "", url : ""}]
}
})
})
console.log(`Durumunuz Başariyla Ayarlandi.`)
client.login({ clientId : "" }).catch(console.error);
