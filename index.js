const { Client, Intents }  = require('discord.js');

const bot = new Client({
  intents: [ Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES ]
});

bot.login("")

bot.once('ready', () => { 
  console.log(`Bot online: ${bot.user.tag}!`); 
});

bot.on('message', msg => {
  if (msg.content === '!oi') {
    msg.reply('Esse é o meu primeiro bot!');
  }
});


bot.on('ready', () => {
  var channelName = "geral"
  var message = "Bot iniciado"

  const channel = bot.channels.cache.find(channel => channel.name === channelName )
  
  channel.send(message)
  
});