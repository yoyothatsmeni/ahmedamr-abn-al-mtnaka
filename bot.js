const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag} !`);
 
});
 

const devs = ["401738121827319810","495680518365511721"]

const adminprefix = "-sh";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'pl')) {
    client.user.setGame(argresult);
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
    if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else     
    if (message.content.startsWith(adminprefix + 'cn')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`**${argresult}** : Done :>`)
  return message.reply("**You Can't Change Your Name ,Only After Two Hours :>**");
  } else
    if (message.content.startsWith(adminprefix + 'ca')) {
  client.user.setAvatar(argresult);
    message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
        } else     
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else
    if(message.content === adminprefix + "restart") {
      if (!devs.includes(message.author.id)) return;
          message.channel.send(`:warning:️ **restarting by ${message.author.username}**`);
        console.log("\n\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log(`⚠️ restarting... ⚠️`);
        console.log("===============================================\n\n");
        client.destroy();
        child_process.fork(__dirname + "/bot.js");
        console.log(`Successfully Restarted`);
    } else
  if(message.content === adminprefix + "help") {
    if (!devs.includes(message.author.id)) return;
      const embed = new Discord.RichEmbed()  
      .setColor("#000000") 
      .setDescription(`
     :gear: Xcellz Help By Fire :gear: 

-pl | playing
-wt | watching
-ls | leasing
-cn | change name
-ca | change avatar
-restart | restart

`)
   message.channel.sendEmbed(embed)
    
   }
  
  });


client.login(process.env.BOT_TOKEN);
