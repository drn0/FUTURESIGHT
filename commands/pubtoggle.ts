import { ICommand } from "wokcommands";
import reportSchema from "../models/reportSchema";
import reporterSchema from "../models/reporterSchema";
export default {
    category: 'Scammer DB',
    description: 'Toggles publishing status on DB report.',
    slash: false,
    testOnly: true,
    minArgs: 1,
    expectedArgs: '<report>',

    callback: async ({ message, args }) => {
        const report = args[0]
        const channelID = message.channel
        const senderuid = message.author.id
        const repVerify = await reporterSchema.countDocuments({userId: senderuid}) > 0
        const accVerify = await reportSchema.countDocuments({_id: report}) > 0
        if (repVerify && accVerify) {
            let callreport = await reportSchema.findOne({_id: report})
            await reportSchema.updateOne({_id: report}, {$set: {public: !callreport.public}})
            channelID.send(`Updated report ${report} to have public status: ${!callreport.public}`)
        } else {
            channelID.send("Sorry, it appears that you either don't have permissions to modify reports or that this report does not exist.")
        }
    }
} as ICommand