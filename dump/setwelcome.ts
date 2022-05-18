/* import { ICommand } from "wokcommands";
import DJS from 'discord.js'
import welcomeSchema from "../models/welcome-schema";
export default {
    category: 'Setup',
    description: 'Welcome channel set',

    permissions: ['ADMINISTRATOR'],

    minArgs: 2,
    expectedArgs: '<channel> <text>',

    slash: 'both',
    testOnly: true,

    options: [
        {
            name: 'channel',
            description: 'welcome channel',
            required: true,
            type: DJS.Constants.ApplicationCommandOptionTypes.CHANNEL
        },
        {
            name: 'text',
            description: 'ur salutation!!',
            required: true,
            type: DJS.Constants.ApplicationCommandOptionTypes.CHANNEL
        }
    ],

    callback: async ({ guild, message, interaction, args }) => {
        if (!guild) {
            return "pls dont use in dms"
        }
        const target = message ? message.mentions.channels.first() : interaction.options.getChannel('channel')
        if (!target || target.type !== 'GUILD_TEXT') {
            return "that's not a text channel dumbass"
        }

        let text = interaction?.options.getString('text')
        if (message) {
            args.shift()
            text = args.join(' ')
        }

        await welcomeSchema.findOneAndUpdate({
            _id: guild.id
        }, {
            _id: guild.id,
            text,
            channelId: target.id
        }, {
            upsert: true
        })

        return 'welcome channel established!!!'
    }
} as ICommand */