import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";
import channelSchema from "../models/channelSchema";


export default {
    category: 'Config',
    description: 'Set report channel',
    slash: false,
    testOnly: true,
    minArgs: 1,
    expectedArgs: "<channelid>",
    permissions: ['ADMINISTRATOR'],

    callback: async ({ message, args }) => {
        const channelID = message.channel
        const guildID = message.guild?.id
        const inDb = await channelSchema.countDocuments()
        let occurs = await channelSchema.find({guildID: guildID}).count()
        if (occurs < 1) {                  
            await new channelSchema({
                    _id: (inDb),
                    chanID: (args[0]),
                    guildID: guildID
            }).save()
            return "We've established the report channel for you!"
        } else if (occurs === 1) {
            await channelSchema.updateOne({guildID: args[0]}, { $set: {'chanID': channelID}}, { upsert: false })
            return "Your reports channel has changed!"
        } else {
            return "It seems you have more than one pieces of information related to your guild's report channel established; please contact administrators to resolve this."
        }
    }
} as ICommand