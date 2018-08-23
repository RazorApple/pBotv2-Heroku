const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
 let totalSeconds = (bot.uptime / 1000);
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = totalSeconds % 60;
const embed = {
  "fields": [
    {
      "name": "Uptime.",
      "value": "pBot has been up for ${hours} hours, ${minutes} minutes and ${seconds} seconds."
    }
  ]
};
message.channel.send({embed});
}
module.exports.help = {
  name: "uptime"
};
