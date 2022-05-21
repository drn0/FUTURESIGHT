import { DiscordAPIError, MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands"
import reportSchema from "../models/reportSchema";

export default {
    category: 'Scammer DB',
    description: 'Creates a DB report',
    slash: false,
    testOnly: true,
    permissions: ["ADMINISTRATOR"],
    minArgs: 0,
    expectedArgs: '',

    callback: async ({ message }) => {
        const channelID = message.channel
        await channelID.send('Enter the type of report you are making. "TWC" for a Trade with Caution, "Scam" for a scam report.')
        // call first await messages
        // attrib to each other
        // attrib to embed
        // log embed to db
    }
} as ICommand