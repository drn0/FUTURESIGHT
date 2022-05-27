import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";
import dbSchema from "../models/dbSchema";

export default {
    category: 'Scammer DB',
    description: 'Adds a user or users to scammer DB',
    slash: false,
    testOnly: true,
    ownerOnly: true,
    minArgs: 2,
    expectedArgs: '<type> [uids]',

    callback: async ({ message, args }) => {
        const type = (args[0]);
        let bans: any[] = []
        let addNum = 0;
        if (args[0] === 'mass') {
        //    typeof args;
            console.log(args)
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
        for (let i = 0; i < (addNum - 1); i++) {
            let dbNum = await dbSchema.countDocuments();
            // if (!(userID in db))
            if (await dbSchema.find({'userID': (args[i + 1])}).count() === 0) {                  
                    counted += 1
                } else {
                    await dbSchema.updateOne({
                        userID: args[i + 1],           
            }, {$set: {userID: '954559620561666058'}}
                    )
                    .catch(Error)
                    setS += 1
                }
        }
        await message.reply(`Successfully removed ${setS} users from the database with ${counted} that was not in.`)
    }
} as ICommand