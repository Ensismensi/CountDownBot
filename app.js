const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json').token;

client.on("guildMemberAdd",  (member) => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage(`Welcome to ${guild.name}, we hope you ${member.user} have good time with us! Now we have ${guild.memberCount} members.`);
});


var prefix = "=="
client.on('message', message => {
	let args = message.content.split(' ').slice(1);
	var result = args.join(' ');

	if (!message.content.startsWith(prefix)) return;
	if (message.author.bot) return;

	if (message.content.startsWith(prefix + 'ping')) {
		message.channel.sendMessage(`Here you go, my ping! \`${Date.now() - message.createdTimestamp} ms\``);
	} else

	if (message.content.startsWith(prefix + 'setgame')) {
		if (!result) {
			result = null;
		}
		client.user.setGame(result);
	} else

	if (message.content.startsWith(prefix + 'setstatus')) {
		if (!result) {
			result = 'online';
		}
		client.user.setStatus(result);
	} else

	if (message.content.startsWith(prefix + 'help')) {
    let embed = new Discord.RichEmbed();
embed.setDescription("Hello there! Help command is not finished, but soon it will be public. If you want to suggest me something or to report me something about bot please send me message on Poppy#9454 ! **Shes my developer ;)");
message.author.send({embed});
	} else

  if (message.content.startsWith(prefix + 'invite')) {
    message.channel.sendMessage("https://discordapp.com/oauth2/authorize?client_id=317783715373645825&scope=bot&permissions=267910345");
  } else

  if (message.content.startsWith(prefix + 'kill')) {
    message.channel.sendMessage("Hey, don't do that. No one is worth your life. Talk with someone, it's gonna be fine. ");
  } else

  if (message.content.startsWith(prefix + 'owner')) {
     let embed = new Discord.RichEmbed();
 embed.setDescription("@Poppy#9454");
 message.author.send({embed});
 	}

});

client.login(settings);
