import { Client, Message, User, UserContextMenuInteraction } from "discord.js";
import { ICommand } from "wokcommands";
import dbSchema from "../models/dbSchema";
import dotenv from 'dotenv';

dotenv.config()

export default {
    category: 'Kick & Ban',
    description: 'Pushes the latest x bans.',

    permissions: ['ADMINISTRATOR', 'BAN_MEMBERS'],

    slash: true,
    testOnly: true,

    guildOnly: true,

    minArgs: 1,
    expectedArgs: '<num1>',
    
    callback: async ({ interaction, args }) => {
        const num1 = parseInt(args[0])
        if (num1 <= 750 && num1 > 0) {
            interaction.reply({
                content: 'command in beta'
            })
            let guildID = interaction.guild
            let banList = await (
                guildID?.bans.fetch()
                )
            let primoBanList = await (
                banList?.map(user => user.user.id)
            )
            let oxe = await dbSchema.countDocuments();
            const oxide = oxe
            function setOn (z:number) {
                return z.toString();
            }
            let oxen = []
                let setton = oxe.toString();
                let result2 = await dbSchema.find(
                    {
                    _id : { $gt : (oxide - num1), $lt : (oxide - 1)}
                    }
                ) as any[]
                console.log(result2)
                // result2 = object
                console.log(result2[1])
                // use $objectToArray
        } else {
            interaction.reply({
                content: 'x must be 1-750, inclusive'
            }
            )
        }
    }
} as ICommand