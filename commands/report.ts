import { MessageEmbed, TextChannel } from "discord.js";
import { ICommand } from "wokcommands";
import reportSchema from "../models/reportSchema";
import { modEmbed } from "../features/modEmbed";
import reporterSchema from "../models/reporterSchema";
import channelSchema from "../models/channelSchema";

export default {
    category: 'Scammer DB',
    description: 'Creates a DB report',
    slash: false,
    testOnly: true,
    minArgs: 1,
    expectedArgs: '<report> [term]',

    callback: async ({ message, args, client }) => {
        const channelID = message.channel
        const reportNum = args[0]
        const senderuid = message.author.id
        const sendsuid = senderuid
        const repVerify = await reporterSchema.countDocuments({userId: senderuid}) > 0
        if (await reportSchema.countDocuments({_id: reportNum}) > 0)
        { let result = await reportSchema.findOne(
            {
            _id : reportNum
            }
        )
        const publicBool = result.public
        const useruid = result.userIden
        let userName: any
        if (useruid != undefined) {
            let xyi = await client.users.fetch(useruid)
                .then(() => {
                    userName = ` - ${xyi}`
                })
                .catch(() => {
                    userName = ''
                })
        }
        const colour = result.colour
        const helpmeacc = (result.accounts.toString())
        const reportEmbed = new MessageEmbed()
        .setColor(colour)
        .setTitle(`₊˚⌜report ${result._id}⌟‧₊`)
        .setAuthor(`${userName}`)
        .setDescription(`\`${useruid}${userName}\``)
        .addFields(
            { name: "╭╴other/related accounts‧੭", value: `${helpmeacc.replace(/\,/g,'')}\u200b`},
            { name: "╭╴summary‧੭", value: `${result.summary}\u200b`},
            { name: "╭╴evidence‧੭", value: `${result.evidence}\u200b`},
            { name: "╭╴notes‧੭", value: `${result.notes}`}
        )
        .setImage("https://cdn.discordapp.com/attachments/972947718546817126/972949805083017226/lev_invis_divider.png")
    if (publicBool) {
        let xyzz = await channelID.send({        
            embeds: [reportEmbed]
        });
        if (channelID.type === 'GUILD_NEWS') {
            xyzz.crosspost()
        } else {
            xyzz
        }
    } else {
        channelID.send({
            content: `Sorry, it seems report ${reportNum} is not public.`
        })
    }
        if (args[1] === 'edit' && repVerify) {
            channelID.send({
                embeds: [modEmbed]
            })
            await message.react('🪡').then(() => message.react('🧶')).then(() => message.react('🕶').then(() => message.react('🧥')))
        
        const filter = (reaction: any, user: any) => {
            return ['🪡', '🧶', '🕶', '🧥'].includes(reaction.emoji.name) && user.id === sendsuid;
    };

        await message.awaitReactions({filter, max: 1, time: 500_000})
            .then(async collected => {
            const reaction = collected.first();
            if (reaction?.emoji.name === '🪡') {
                const filtered = ((message: any) => { 
                    return message.author.id === sendsuid })
                await channelID.send(`Please enter the accounts owned by this user in this format: platform: username , and give each their own message <@!${sendsuid}>. Note that you can only add up to five accounts; link any more in the evidence or notes section. If you don't have 5 accounts, wait 60 seconds after entering the final account.`)
                    .then(async () => {
                        let carcinoGeneticist: any[] = []
                        const mesCol = channelID.createMessageCollector({ filter: filtered, max: 5, time: 60_000});
                        mesCol.on('collect', m => {
                            carcinoGeneticist.push(m.content)
                        });
                        mesCol.on('end', async collected => {
                            const carciLength = carcinoGeneticist.length
                            let ixy = 0
                            let aToredor: any[] = []
                            while (ixy < carciLength * 2) {
                                if (ixy % 2 === 0) {
                                    aToredor.push(carcinoGeneticist[ixy/2])
                                } else {
                                    aToredor.push('\n')
                                }
                                ixy += 1
                            }
                            await reportSchema.updateOne({_id: reportNum}, {$set: {accounts: aToredor}})
                            await channelID.send(`Updated accounts with:\n ${await reportSchema.findOne({_id: reportNum})}`)
                        })})
            } else if (reaction?.emoji.name === '🧶') {
                const filtered = ((message: any) => { 
                    return message.author.id === sendsuid })
                await channelID.send(`Please enter a summary of the situation <@!${sendsuid}>.`)
                    .then(async () => {
                        let karkat: String = ''
                        const mesCol = channelID.createMessageCollector({ filter: filtered, max: 1, time: 60_000});
                        mesCol.on('collect', m => {
                            karkat = m.content
                        });
                        mesCol.on('end', async collected => {
                            await reportSchema.updateOne({_id: reportNum}, {$set: {summary: karkat}})
                            await channelID.send(`Updated accounts with:\n ${await reportSchema.findOne({_id: reportNum})}`)
                        })})
            } else if (reaction?.emoji.name === '🕶') {
                const filtered = ((message: any) => { 
                    return message.author.id === sendsuid })
                await channelID.send(`Entry format: [websitename](evidenceurl). If there is more than one link, add a | seperator. <@!${sendsuid}>.`)
                    .then(async () => {
                        let karkat: String = ''
                        const mesCol = channelID.createMessageCollector({ filter: filtered, max: 1, time: 60_000});
                        mesCol.on('collect', m => {
                            karkat = m.content
                        });
                        mesCol.on('end', async collected => {
                            await reportSchema.updateOne({_id: reportNum}, {$set: {evidence: karkat}})
                            await channelID.send(`Updated accounts with:\n ${await reportSchema.findOne({_id: reportNum})}`)
                        })})
            } else if (reaction?.emoji.name === '🧥') {
                const filtered = ((message: any) => { 
                    return message.author.id === sendsuid })
                await channelID.send(`Add notes. <@!${sendsuid}>.`)
                    .then(async () => {
                        let karkat: String = ''
                        const mesCol = channelID.createMessageCollector({ filter: filtered, max: 1, time: 60_000});
                        mesCol.on('collect', m => {
                            karkat = m.content
                        });
                        mesCol.on('end', async () => {
                            await reportSchema.updateOne({_id: reportNum}, {$set: {notes: karkat}}, {upsert: true})
                            await channelID.send(`Updated accounts with:\n ${await reportSchema.findOne({_id: reportNum})}`)
                        })})
            }
        })
            .catch(collected => {
                message.reply("hey, that's not a reaction i gave you");
            })            
        } else if (args[1] === 'publish' && repVerify) {
            let callnewdb: number = await channelSchema.countDocuments()
    /*        let newChanid: string
            let iterChan = await channelSchema.find(
                {
                _id : { $gt : (0), $lt : (callnewdb - 1)}
                }
            ) as any[] */
            let xoxo = await (client.channels.cache.get('869255669906309221') as TextChannel).send({
                embeds: [reportEmbed]
            })
            await xoxo.crosspost()
                .catch(console.error)
            await channelID.send(`Published report ${reportNum} to the [TSB] Nexus report channel!`) 
        } else if (args[1] === 'publish' || args[1] == 'edit') {
            channelID.send("Sorry, you're not permitted to run that command.")
        }
    } else {
            channelID.send(`Sorry, ${reportNum} is not a valid report ID.`)
        }
    }
   
    } as ICommand
        // messagecollector
        // data to db
        // attrib to embed
        // send embed to all servers