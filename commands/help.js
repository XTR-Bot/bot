const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var help = new Discord.RichEmbed()
.setDescription("--------------------------------")
.addField("Commands", "-report\n-botinfo\n-level\n-help\n--------------------------------")
.addField("Staff Commands", "-ban\n-kick\n-tempmute\n-clear\n--------------------------------")
.setColor("4b50b4")
.setFooter("XTR-Bot made by xExtreme")
.setTitle(message.author.username + " - XTR-Bot help")


//msg.channel.sendEmbed(help);
message.author.sendEmbed(help);
message.reply("Please check your DM");
//sendEmbed(help);

}


module.exports.help = {
    name: "help"
  }