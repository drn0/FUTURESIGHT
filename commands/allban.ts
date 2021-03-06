import { Client, Interaction, Message, User, UserContextMenuInteraction, MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";
import dbSchema from "../models/dbSchema";
import dotenv from 'dotenv';

dotenv.config()
const array = ["https://media2.giphy.com/media/OmK8lulOMQ9XO/200.gif", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6906250b-3723-428a-8031-17d9d49ba493/d51jxyi-2bf0d49b-900c-4e0d-8666-cd28b76a9263.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY5MDYyNTBiLTM3MjMtNDI4YS04MDMxLTE3ZDlkNDliYTQ5M1wvZDUxanh5aS0yYmYwZDQ5Yi05MDBjLTRlMGQtODY2Ni1jZDI4Yjc2YTkyNjMuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.2djsxLjBGHb5L_Fp3xoky-RMwDYOj-E9zQ6zl-lUrhU", "https://media2.giphy.com/media/SUWn1xWsXKDbz6Y1Dx/giphy.gif", "https://media3.giphy.com/media/VNfKqvm8Lg4qQ/200.gif", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6906250b-3723-428a-8031-17d9d49ba493/d51jtzc-0d6306f7-3bee-4ef4-831c-c8a85ec07257.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY5MDYyNTBiLTM3MjMtNDI4YS04MDMxLTE3ZDlkNDliYTQ5M1wvZDUxanR6Yy0wZDYzMDZmNy0zYmVlLTRlZjQtODMxYy1jOGE4NWVjMDcyNTcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.TNp9ZcHtTYHBnZydHPnpUupNwWGSDJi8MOGbXmguc9E"]
let randomElement = array[Math.floor(Math.random() * array.length)];
export default {
    category: 'Bans everyone.',
    description: 'Pushes the latest x bans.',

    permissions: ['BAN_MEMBERS'],

    slash: true,
    testOnly: true,

    guildOnly: true,

    minArgs: 1,
    expectedArgs: '<num1>',
    
    callback: async ({ interaction, args }) => {
        interaction.deferReply()
            .then()
            .catch(console.error)

        const num1 = parseInt(args[0])

        const embed = new MessageEmbed()
        .setColor("#e2c37a")
        .setDescription(`Banned **${num1}** users.`)
        .setImage(randomElement)

        if (num1 > 0) {
            const guildID = interaction.guild
            const channelID = interaction.channel
            let banList = await (
                guildID?.bans.fetch()
                )
            let primoBanList = await (
                banList?.map(user => user.user.id)
            )
            let oxe = await dbSchema.countDocuments();
            const oxide = oxe
            let oxen: any[] = []
                let setton = oxe.toString();
                let result2 = await dbSchema.find(
                    {
                    _id : { $gt : (oxide - num1), $lt : (oxide - 1)}
                    }
                ) as any[]
                // result2 = object
                let xyz = 0;
                oxen = oxen.splice(3932,1,"406893448021409802");
                let oxygate: String
                let errlog = 0
                let oxygated: String
                while (xyz < (num1 - 1)) {
                //    console.log((result2[xyz].userID))
                if (typeof result2[xyz] != undefined && result2[xyz].userID != undefined) {
                    oxygate = result2[xyz].userID
                    if (typeof oxygate != undefined) {
                        oxygated = oxygate
                        if (typeof oxygated != undefined) {
                            oxen.push((oxygate))
                            xyz += 1
                        }
                    } else {
                            errlog += 1
                        }
                    }
                }
                for (let i = 0; i < (num1 - 2); i++ ) {
                if (await dbSchema.find({'userID': oxen[i]}).count() === 0) {
                    await guildID?.members.ban(oxen[i])
                        .then(
                           // async user => {await channelID?.send( { content: `Banned ${user}`} )}
                            )
                        .catch(err => {console.log(`err at ${i}`)})
                }}
            //    await channelID?.send( { content: `Good riddance.`} )
                // use $objectToArray
                interaction.followUp({
                    embeds: [ embed ]
                })
    }}
} as ICommand