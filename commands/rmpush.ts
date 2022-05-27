import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";
import dbSchema from "../models/dbSchema";
import reportSchema from "../models/reportSchema";
import reporterSchema from "../models/reporterSchema";

export default {
    category: 'DB',
    description: 'Assigns UID to report.',
    slash: false,
    testOnly: false,
    minArgs: 2 ,
    expectedArgs: '<report> <uids -->',

    callback: async ({ message, args }) => {
        const channelID = message.channel
        const userUID = message.author.id
        let uidList: any[] = []
        const rNum = args[0]
        let dbNum = await reportSchema.countDocuments()
        if (await reporterSchema.countDocuments({userId: userUID}) > 0) {
            if (await reportSchema.countDocuments({_id: rNum}) === 1) {
                const result = await reportSchema.findOne({_id: rNum})
                const accs = result.accounts
                const sum = result.summary
                const evid = result.evidence
                const col = result.colour
                const pub = result.public
                const notes = result.notes
                let dbNum2: number
                let argsArchive: any[] = []
                for (let i = 1; i < args.length; i++) {
                    await reportSchema.updateOne({_id: rNum}, {$push: {userIden: args[i]}}, {upsert: true})
                    dbNum2 = await dbSchema.countDocuments()
                        await new dbSchema({
                            _id: `${dbNum2 + 2}`,
                            userID: args[i],
                            reportedBy: userUID
                        }).save()
                }
                channelID.send(`Update report ${rNum}`)
            } else {
                return `Sorry, report ${rNum} doesn't seem to exist.`
            }
        } else {
            return `Sorry, you don't seem to have the permissions to run this command.`
        }
    }
} as ICommand