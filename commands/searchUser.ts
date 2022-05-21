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
    permissions: ["ADMINISTRATOR"],
    minArgs: 1,
    expectedArgs: '[uid]',

    callback: async ({ message, args }) => {
        const uid = args[0]
        if (await reportSchema.find({'userID': (uid + "\n")}).count() >= 1) {       
            // return the embed(s)
        } else if (await dbSchema.find({'userID': (uid + "\n")}).count() >= 1) {
            return `User ${uid} was found in the scammer database, but has no report in the FUTURE|SIGHT bot. Try searching for reports in IDVTAS or another server!`
        } else if (await profileSchema.find({'userID': (uid + "\n")}).count() >= 1) {
            return `User ${uid} is a FUTURE|SIGHT verified staff member.`
        }
    }
 } as ICommand