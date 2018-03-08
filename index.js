const botconfig = require("./botconfig.json");
const tokenfile = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  bot.user.setActivity("XTR-Bot is ONLINE", {type: "XTR-BOT"});

});


bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args)
 




  

if(cmd === `${prefix}leaderboard`){

  let bicon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()

  .setColor("#FFB82B")
  .addField("---Leaderboard---", "1st - <@346980856356667392> , <@345884891235221504> and @AMillionEuros\n\
-------------------------------------------------------------------------\n\
2nd - <@373096675184738307>\n\
----------------------------\n\
3rd - <@252807444659437570>\n\
--------------------------\n\
4th - <@361067833876152321> and <@293058592322617344>\n\
---------------------------------------------------\n\
5th - <@290463329799897090>\n\
------------------------")
  return message.channel.send(botembed);
}
});


bot.login("NDIxMzg1NTA0OTMyNjI2NDMz.DYMeAQ.tz6Krgu1hon-5_TrjUUidY5Dt28");
