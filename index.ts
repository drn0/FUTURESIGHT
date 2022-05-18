import DiscordJS, { Intents } from 'discord.js'
import WOKCommands from 'wokcommands'
import path from 'path'
import dotenv from 'dotenv'
import testSchema from './models/dbSchema'
import mongoose from 'mongoose'
dotenv.config()

const client = new DiscordJS.Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
})

client.on('ready', async () => {
  const wok = new WOKCommands(client, {
    commandsDir: path.join(__dirname, 'commands'),
    typeScript: true,
    testServers: ['888628928581886013', '797902467626827777'],
    botOwners: ['545766773048213519'],
    mongoUri: process.env.MONGO_URI,
  })

  .setDefaultPrefix('FS~')

/* setTimeout(async () => {
    await new testSchema({
      message: 'successful start!',
    }).save()
  }, 1000) */

  console.log('slayeddd')
})

client.login(process.env.TOKEN)