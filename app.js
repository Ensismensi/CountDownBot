const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json').token;

client.on("guildMemberAdd",  (member) => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage(`Welcome to ${guild.name}, we hope you ${member.user} have good time with us! Now we have ${guild.memberCount} members.`);
});


var prefix = "=="
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'help')) {
		message.channel.sendMessage(`Hey ${member.user}, I'm developered by Poppy#9454 and, if you want to suggest her something DM her :) !`);
	}
});







client.login(settings);
