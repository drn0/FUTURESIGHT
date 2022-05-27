import { MessageCollector, DiscordAPIError, Message, MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";
import reportSchema from "../models/reportSchema";
import { modEmbed } from "../features/modEmbed";
import reporterSchema from "../models/reporterSchema";

export default {
    category: 'Scammer DB',
    description: 'Creates a DB report',
    slash: false,
    testOnly: true,
    minArgs: 0,
    expectedArgs: '',

    callback: async ({ message }) => {
        const channelID = message.channel
        const userUID = message.author.id
        let dbNum = await reportSchema.countDocuments()
        if (await reporterSchema.countDocuments({userId: userUID}) >= 1) {
            let colo = await reporterSchema.findOne({userId: userUID})
            let colr = colo.col
            await new reportSchema({
                _id: dbNum,
                userIden: [],
                accounts: ['None, as of right now.'],
                summary: 'None found.',
                evidence: 'None found.',
                colour: colr,
                public: false,
                notes: 'None, as of right now.'
            }).save()
            channelID.send(`Your report was made with the ID ${dbNum}.`)
           }
        }
    } as ICommand