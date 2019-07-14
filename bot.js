var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});

logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`

    
    if ( client.channels.get('593900149252816902')) {
        client.channels.get('593900149252816902').send("Welcome to queen Litha's dungeon.");
     }
     
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);

        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;

            case 'irma':
                bot.sendMessage({
                    to: channelID,
                    message: 'Toxic, https://support.riotgames.com/hc/en-us/requests/new'
                });
            break;

            case 'kayleigh':
                bot.sendMessage({
                    to: channelID,
                    message: 'I WANNA EAT YOU KEVIN'
                });      
            break;
      
            case 'athmos':
                bot.sendMessage({
                    to: channelID,
                    message: 'ICT question go to meeee'
                });
            break;

            case 'kevin':
                bot.sendMessage({
                    to: channelID,
                    message: 'kevkev, kevachu?'
                });
            break;

            case 'lonewolf':
                bot.sendMessage({
                    to: channelID,
                    message: "I'm stupid"
                });
            break;

            case 'drexor':
                bot.sendMessage({
                    to: channelID,
                    message: 'Bird? Bird..? BIIIIRD!'
                });
            break;

            case 'lieven':
                bot.sendMessage({
                    to: channelID,
                    message: 'Creep..'
                });
            break;
            // Just add any case commands if you want to..
         }
     }
});