import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";
import dbSchema from "../models/dbSchema";
import reporterSchema from "../models/reporterSchema";

export default {
    category: 'Scammer DB',
    description: 'Adds a user or users to scammer DB',
    slash: false,
    testOnly: true,
    minArgs: 2,
    expectedArgs: '<type> [uids]',

    callback: async ({ message, args }) => {
        if (await reporterSchema.countDocuments({userId: message.author.id}) >= 1)
        {        const type = (args[0]);
        let bans: any[] = []
        let addNum = 0;
        if (args[0] === 'mass') {
            addNum = (args.length - 1); // might have to add -1
        } else if (args[0] === 'single') {
            let bans = Array.from(args[1]);
            addNum = 2;
        } else {
            message.reply("It seems you haven't specified a method. Please use 'mass' for massadds, and 'single' for one addition.")
            return('Fail')
        }
        let setS = 0
        let counted = 0;
        for (let i = 0; i < (addNum); i++) {
            let dbNum = await dbSchema.countDocuments();
            // if (!(userID in db))
            if (await dbSchema.find({'userID': args[i + 1]}).count() === 0) {                  
                await new dbSchema({
                        _id: (dbNum + 1),
                        userID: (args[i + 1]),
                        reportedBy: message.author.id   
            }).save()
                .then(() => {})
                .catch(Error)
                setS += 1
                } else {
                    counted += 1
                }
        }
        await message.reply(`Successfully added ${setS} users to the database with ${counted} already added.`)}
    }
} as ICommand