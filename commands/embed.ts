import { Message } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Devtest',
    description: 'Embedtest',
    slash: false,
    testOnly: true,
    ownerOnly: true,
    minArgs: 0,
    expectedArgs: '',

    callback: async ({ message }) => {
    const channelID = message.channel
    const embed =               
        {
            "title": "scammer !",
            "description": "`xxxx#0000 - id`\nㅤ",
            "color": 14861178,
            "author": {
                "name": 'scammer name',
                "icon_url": 'scammers icon',
            },
            "fields": [
            {
                "name": "alts",
                "value": "`xxxx#0000 - id`\n`xxxx#0000 - id`\n`xxxx#0000 - id`\n`xxxx#0000 - id`\nㅤ"
            },
            {
                "name": "socials",
                "value": "`epicnpc;`\n`gmail;`\n`instagram;`\n`facebook;` [facebookname](https://imgur.com)\n`reddit;`\n`tiktok;`\nㅤ"
            },
            {
                "name": "evidence",
                "value": "[imgur](https://imgur.com) | [imgur](https://imgur.com)"
            }
            ],
            "image": {
            "url": "https://cdn.discordapp.com/attachments/972947718546817126/972949805083017226/lev_invis_divider.png"
            }
        }
    await channelID?.send( { embeds: [embed] } )
    }
} as ICommand