const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  //+help k?
const embed = {
  "title": "Command help with pBot",
  "url": "http://firewall.co.nf/pbot/",
  "color": 0xff6a00,
  "timestamp": "2018-08-02T11:59:25.292Z",
  "footer": {
    "text": "Copyrighted by OwlsOwlAtNight"
  },
  "fields": [
    {
      "name": "+addrole",
      "value": "Add an role to somebody."
    },
    {
      "name": "+ban",
      "value": "Ban somebody"
    },
    {
      "name": "+botinfo",
      "value": "See the info of this bot."
    },
    {
      "name": "+uptime",
      "value": "bot uptime."
    },
    {
      "name": "+clear",
      "value": "Clear somebodys messasges"
    },
    {
      "name": "+help",
      "value": "You are looking at help :thinking:thonk:tm::thinking:"
    },
    {
      "name": "+serverinfo",
      "value": "Check this servers info."
    },
    {
      "name": "+say",
      "value": "Ask the bot to say anything you want!"
    },
    {
      "name": "+ping",
      "value": "Check the latency of the bot! (Hosted in latvia)"
    },
    {
      "name": "+kick",
      "value": "Kick somebody"
    },
    {
      "name": "+level",
      "value": "See your level"
    },
    {
      "name": "+pay",
      "value": "Pay somebody using your coins"
    },
    {
      "name": "+prefix",
      "value": "Change the prefix"
    },
    {
      "name": "+removerole",
      "value": "Remove an role"
    },
    {
      "name": "+report",
      "value": "Report somebody for doing weird shit or idk"
    },
    {
      "name": "+getpfp",
      "value": "Get your profile picture!"
    },
    {
      "name": "+invite",
      "value": "Get invites!"
    }
  ]
};

message.author.send({embed})
message.channel.reply("I have pmed you help.")
}
module.exports.help = {
  name: "help"
};
