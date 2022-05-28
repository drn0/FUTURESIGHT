import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";
import dbSchema from "../models/dbSchema";
import reportSchema from "../models/reportSchema";
import profileSchema from "../models/profileSchema";

export default {
    category: 'Scammer DB',
    description: 'Search Users',
    slash: false,
    testOnly: true,
    minArgs: 2,
    expectedArgs: '<type> <uid>',

    callback: async ({ message, args }) => {
        const channelID = message.channel
        const type = args[0]
        const uid = args[1]
        if (type === 'user') {
        if (await reportSchema.find({userIden: (uid)}).count() > 0) {  
            const zzz = await reportSchema.find({userIden: uid}) as any[]
            let reportArray: any[] = []
            let idArray: any[] = []
            for (let i = 0; i < zzz.length; i++) {
                reportArray.push(zzz[i])
            }
            for (let x = 0; x < reportArray.length; x++) {
                idArray.push(reportArray[x]._id)
            }
            await channelID.send({
                content: `User ID ${uid} was found in report(s) number(s) ${idArray}`
            })
        } else if (await dbSchema.find({'userID': (uid)}).count() >= 1) {
            return `User ${uid} was found in the scammer database, but has no report in the FUTURE|SIGHT bot. Try searching for traditional reports in a server!`
        } else {
            return `Nothing pertaining to ${uid} was found; double check to be safe!`
        }
        // note for future dori: add SERVER and ACCOUNT type databases
        } else {
            return `Sorry, we don't support searches for ${type} at this moment.`
        }
    }
 } as ICommand