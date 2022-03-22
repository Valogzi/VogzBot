/** @format */

const Discord = require("discord.js");
const Client = require("./ValogziClient");

/**
 * @param {Client} bot
 * @param {Discord.Message | Discord.CommandInteraction} message
 * @param {string[] | Discord.CommandInteractionOptionResolver} args
*/

function RunFunction(bot, message, args) {}

class Command {

    /**
     * @typedef {{name: string, description: string, utilisation: string, alias: string[], permission: bigint, category: string, cooldown: number, run: RunFunction}} CommandOptions
     * @param {CommandOptions} options 
    */
    
    constructor(options) {

        this.name = options.name;
        this.description = options.description;
        this.utilisation = options.utilisation;
        this.alias = options.alias;
        this.permission = options.permission;
        this.category = options.category;
        this.cooldown = options.cooldown;
        this.run = options.run;
    }
}

module.exports = Command;