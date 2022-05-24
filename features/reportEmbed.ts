import { MessageCollector, DiscordAPIError, Message, MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";
import reportSchema from "../models/reportSchema";
import { modEmbed } from "../features/modEmbed";

export async function makeEmbed(x: String) {
    let result = await reportSchema.findOne(
        {
        _id : x
        }
    )
    const useruid = result.userId
    const userName = useruid.tag
    const colour = result.colour
    const reportEmbed = new MessageEmbed()
    .setColor(colour)
    .setTitle('scammer !')
    .setAuthor(`${userName}`)
    .setDescription(`\`${useruid} - ${userName}\``)
    .addFields(
        { name: "accounts", value: `${result.accounts} + \n`},
        { name: "summary", value: `${result.summary} + \n`},
        { name: "evidence", value: `${result.evidence} + \n`}
    )
    .setImage("https://cdn.discordapp.com/attachments/972947718546817126/972949805083017226/lev_invis_divider.png")
    return reportEmbed
}