const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!rUser) return message.reply("Incorrect usage! **-report @player reason** ");
  let rreason = args.join(" ").slice(22);

  let reportEmbed = new Discord.RichEmbed()
  .setDescription("Reports")
  .setColor("#FF3333")
  .addField("Reported User", `${rUser}`)
  .addField("Reported By", `${message.author}`)
  .addField("Channel", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", rreason);

  let reportschannel = message.guild.channels.find(`name`, "reports", "amillionreports");
  if(!reportschannel) return message.channel.send("Couldn't find reports channel.");


  message.delete().catch(O_o=>{});
  reportschannel.send(reportEmbed);
}

module.exports.help = {
    name: "report"
  }