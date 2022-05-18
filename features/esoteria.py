from pyexpat.errors import messages
from pymongo import MongoClient
# you need pymongo btw
import pymongo
import discord
import os
from dotenv import load_dotenv
# basically babagril what you need to do is use pymongo
# get list of uids to ban/push
# compare 2 each other
# pls
load_dotenv()
mongoUri = os.getenv("MONGO_URI")
discordToken = os.getenv("TOKEN")
# bot creation
client = discord.Client()
guild = "888628928581886013"
@client.event
async def on_ready():
    async for entry in guild.bans(limit=150):
        print(entry.user, entry.reason)
    print('wow, it works')

client.run(discordToken)