var lower = new Date().toString().toLowerCase();
const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {
message.channel.send(lower)
}

module.exports.help = {
  name: "date"
}
