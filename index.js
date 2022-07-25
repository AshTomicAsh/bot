const Discord = require("discord.js")
require('dotenv').congfig()
const TOKEN = "MTAwMDgxMzAzMTgzMzQ3MzA2NQ.GDSNwZ.yC6GeNfom7Q5K96io6U_K-in4sGl8-7Ciqp4hY"

const client = new Discord.Client({
  intents: [
      "Guilds",
      "GuildMessages"
  ]
})

let bot = {
  client,
  prefix: "n.",
  owners: ["953750042890604624"]
}

client.commands = new Discord.Collection()
client.commands = new Discord.Collection()

client.loadEvents(bot, reload) => require("./handlers/events")(bot, reload)

client.loadEvents(bot, false)

module.exports = bot

//client.on("ready", () => {
// console.log(`${client.user.tag} Is now online!`)
//})


client.login(process.env.TOKEN)