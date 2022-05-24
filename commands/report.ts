import { MessageCollector, DiscordAPIError, Message, MessageEmbed, ReactionCollector } from "discord.js";
import { ICommand } from "wokcommands";
import reportSchema from "../models/reportSchema";
import { modEmbed } from "../features/modEmbed";

export default {
    category: 'Scammer DB',
    description: 'Creates a DB report',
    slash: false,
    testOnly: true,
    permissions: ["BAN_MEMBERS"],
    minArgs: 1,
    expectedArgs: '<report>',

    callback: async ({ message, args }) => {
        const channelID = message.channel
        const reportNum = args[0]
        let dbNum = await reportSchema.countDocuments()
        let result = await reportSchema.findOne(
            {
            _id : reportNum
            }
        )
        const useruid = result.userIden
        let userName = 'none yet'
        if (useruid != undefined) {
            userName = useruid.tag
        }
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
        channelID.send({        
            embeds: [reportEmbed, modEmbed]
        });

        await message.react('🪡').then(() => message.react('🧶')).then(() => message.react('🕶').then(() => message.react('🧥')))
        
        const filter = (reaction: any, user: any) => {
            return ['🪡', '🧶', '🕶', '🧥'].includes(reaction.emoji.name) && user.id;
    };

        await message.awaitReactions({filter, max: 4, time: 60_000})
            .then(async collected => {
            const reaction = collected.first();

            if (reaction?.emoji.name === '🪡') {
                await message.reply('needle');
                // add messagecollectors for each emoji to attrib
            } else if (reaction?.emoji.name === '🧶') {
                console.log('yarn');
            } else if (reaction?.emoji.name === '🕶') {
                console.log('sunglasses')
            } else if (reaction?.emoji.name === '🧥') {
                console.log('jacket')
            }
        })
            .catch(collected => {
                message.reply("hey, that's not a reaction i gave you");
            })            
        }
    } as ICommand
        // messagecollector
        // data to db
        // attrib to embed
        // send embed to all servers