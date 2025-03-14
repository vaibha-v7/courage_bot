const { EmbedBuilder } = require('discord.js');
const config = require("../config.js");
const { description, permissions } = require('./ping.js');


module.exports = {
    name: "about",
    description: "Know about me",
    permissions: "0x0000000000000800",

    run: async (client, interaction, lang) => {
        try {
            const embed = new EmbedBuilder()
            .setColor(0x0099FF)

            .setAuthor({ name: 'I am Courage', iconURL: 'https://i.ibb.co/FLNT55Gg/courage-dog-dc-logo.jpg' })
            .setDescription("Hello! I’m **Courage**, a versatile and evolving multi-purpose fun bot.Developed by\n**VAIBHAV PATEL**\n\nMy capabilities are constantly expanding. While I may not have an extensive range of commands just yet, exciting features are on the way! Stay tuned!!")
            .setThumbnail('https://i.ibb.co/FLNT55Gg/courage-dog-dc-logo.jpg')

            .addFields({ name: 'GitHub', value: '[Click Here](https://github.com/vaibha-v7)', inline: true })
            .addFields({ name: 'Linkedin', value: '[Click Here](https://www.linkedin.com/in/vaibhav-patel-8417a6276/)', inline: true })

            .setImage('https://i.ibb.co/FLNT55Gg/courage-dog-dc-logo.jpg')
            .setTimestamp()
            .setFooter({ text: 'Made with 💖 by Vaibhav Patel ', iconURL: 'https://cdn.discordapp.com/emojis/900257798003240961.gif' });

        interaction.reply({ embeds: [embed] })
            
        } catch (error) {
            console.log(error);
                        
        }
    }
}