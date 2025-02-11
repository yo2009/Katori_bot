
import fetch from 'node-fetch'
let handler = async (m, { conn, text, args }) => {
	
  if (!text) throw `✳️ ${mssg.noUsername}`
  
  try {  	
  let pon = await fetch(global.API('fgmods', '/api/search/ttstalk', { username: args[0] }, 'apikey'))
    let res = await pon.json()
    
  let txt = `
┌──「 *TIKTOK STALK* 
▢ *🔖${mssg.name}:* ${res.result.username}
▢ *🔖${mssg.username}:* ${args[0]}
▢ *👥${mssg.followers}:* ${res.result.followers}
▢ *🫂${mssg.follows}:* ${res.result.following}
▢ *📌${mssg.desc}:* ${res.result.description}
▢ *🔗${mssg.link}:* https://tiktok.com/@${args[0]}
└────────────`
  await conn.sendFile(m.chat, res.result.profile, 'tt.png', txt, m)
} catch {
  m.reply(`✳️ ${mssg.error}`)
}

}
handler.help = ['tiktokstalk']
handler.tags = ['dl']
handler.command = /^t(tstalk|iktokstalk)$/i

export default handler
