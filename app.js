const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json').token;

client.on("guildMemberAdd",  (member) => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage(`Welcome to ${guild.name}, we hope you ${member.user} have good time with us! Now we have ${guild.memberCount} members.`);
});










client.login(settings);
