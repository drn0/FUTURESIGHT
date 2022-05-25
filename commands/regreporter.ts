import { ICommand } from "wokcommands";
import reporterSchema from "../models/reporterSchema";

export default {
    category: 'Scammer DB',
    description: 'Registers a reporter',
    slash: false,
    testOnly: true,
    ownerOnly: true,
    minArgs: 2,
    expectedArgs: '<uid> <colour>',

    callback: async ({ message, args }) => {
        let uid = args[0]
        let colour1 = args[1]
        const numTotla = await reporterSchema.countDocuments()
        const numDoc = await reporterSchema.countDocuments({userId: uid})
        if (numDoc === 0) {
            if (await reporterSchema.countDocuments({col: colour1}) === 0) {
                await new reporterSchema({
                    _id: numTotla,
                    col: colour1,
                    userId: uid
                }).save()
                message.reply(`Registered ${uid} in data with colour ${colour1}.`)
            } else {
                message.reply("It seems the chosen colour has already been registered. Please pick another!")
            }
        } else if (numDoc === 1) {
            if (await reporterSchema.countDocuments({col: colour1}) === 0) {
                reporterSchema.updateOne({userId: uid}, {$set: {col: colour1}}, {upsert: true})
                message.reply(`${uid} already had an entry on our database, but their colour has been updated to ${colour1} regardless.`)
            } else {
                message.reply("It seems the chosen colour has already been registered. Please pick another!")
            }
        } else {
            message.reply("There seems to have been an error.")
        }
        }
    } as ICommand