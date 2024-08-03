import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 معلومات عن صاحب البوت 」*

*Owner bot:*\nwa.me/212710725533
*My number bot:*\nwa.me/212633378152

*My group:* https://chat.whatsapp.com/H7iwUtSGtFZI8q0Xf4tbpz

> *SASUKE TECH*🇲🇦🤍

`.trim()
  m.reply(caption)
}
handler.help = ['owner','المطور']
handler.tags = ['infobot']
handler.command = /^(owner|المطور)$/i
handler.limit = false

export default handler
