const { Client, GatewayIntentBits } = require("discord.js");
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });
const config = require("./config.js");
const fs = require("fs");
const { initializePlayer } = require('./player');
const { connectToDatabase } = require('./mongodb');
const colors = require('./UI/colors/colors');

// Debug environment variables
console.log("Environment Variables Debug:");
console.log("TOKEN exists:", !!process.env.TOKEN);
console.log("MONGODB_URI exists:", !!process.env.MONGODB_URI);
console.log("SPOTIFY_CLIENT_ID exists:", !!process.env.SPOTIFY_CLIENT_ID);
console.log("LAVALINK_HOST exists:", !!process.env.LAVALINK_HOST);
console.log("Config values:");
console.log("TOKEN exists in config:", !!config.TOKEN);
console.log("mongodbUri exists in config:", !!config.mongodbUri);

const client = new Client({
    intents: Object.keys(GatewayIntentBits).map((a) => {
        return GatewayIntentBits[a];
    }),
});

client.config = config;
initializePlayer(client);

client.on("ready", () => {
    console.log(`${colors.cyan}[ SYSTEM ]${colors.reset} ${colors.green}Client logged as ${colors.yellow}${client.user.tag}${colors.reset}`);
    console.log(`${colors.cyan}[ MUSIC ]${colors.reset} ${colors.green}Riffy Music System Ready 🎵${colors.reset}`);
    console.log(`${colors.cyan}[ TIME ]${colors.reset} ${colors.gray}${new Date().toISOString().replace('T', ' ').split('.')[0]}${colors.reset}`);
    client.riffy.init(client.user.id);
});
client.config = config;

fs.readdir("./events", (_err, files) => {
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0]; 
    client.on(eventName, event.bind(null, client));
    delete require.cache[require.resolve(`./events/${file}`)];
  });
});


client.commands = [];
fs.readdir(config.commandsDir, (err, files) => {
  if (err) throw err;
  files.forEach(async (f) => {
    try {
      if (f.endsWith(".js")) {
        let props = require(`${config.commandsDir}/${f}`);
        client.commands.push({
          name: props.name,
          description: props.description,
          options: props.options,
        });
      }
    } catch (err) {
      console.log(err);
    }
  });
});


client.on("raw", (d) => {
    const { GatewayDispatchEvents } = require("discord.js");
    if (![GatewayDispatchEvents.VoiceStateUpdate, GatewayDispatchEvents.VoiceServerUpdate].includes(d.t)) return;
    client.riffy.updateVoiceState(d);
});

client.login(config.TOKEN || process.env.TOKEN).catch((e) => {
  console.log('\n' + '─'.repeat(40));
  console.log(`${colors.magenta}${colors.bright}🔐 TOKEN VERIFICATION${colors.reset}`);
  console.log('─'.repeat(40));
  console.log(`${colors.cyan}[ TOKEN ]${colors.reset} ${colors.red}Authentication Failed ❌${colors.reset}`);
  console.log(`${colors.gray}Error: Turn On Intents or Reset New Token${colors.reset}`);
});

//bawalllll of hloo
client.on('messageCreate', (message) => {
  if (message.author.bot) return;


  const greetings = ["hi", "hello", "hey", "hola", "sup", "yo", "hlo"];


  if (greetings.some(greeting => message.content.toLowerCase().startsWith(greeting))) {   //lowercase and startchecking!!
      let randomIndex = getRandomNumber();
      message.reply({
          content: poeticReplies[randomIndex]
      });
  }
});

const poeticReplies = [
  "Hii Sweet Heart ❤️✨",
  "Hello there!! 🦋🌸",
  "Hey, shining star ✨💖",
  "Greetings, my moonlight 🌙💫",
  "Ahoy, gentle soul 🌿🌷",
  "Hola, dreamy one ☁️💜",
  "Salutations, radiant being 🌞🌻",
  "Hi there, lovely sunshine ☀️🌼",
  "Oh hey, my starlit muse 🌠💙",
  "Hello, spark of joy 🔥💛"
];


function getRandomNumber() {
  return Math.floor(Math.random() * poeticReplies.length);
}



connectToDatabase().then(() => {
  console.log('\n' + '─'.repeat(40));
  console.log(`${colors.magenta}${colors.bright}🕸️  DATABASE STATUS${colors.reset}`);
  console.log('─'.repeat(40));
  console.log(`${colors.cyan}[ DATABASE ]${colors.reset} ${colors.green}MongoDB Online ✅${colors.reset}`);
}).catch((err) => {
  console.log('\n' + '─'.repeat(40));
  console.log(`${colors.magenta}${colors.bright}🕸️  DATABASE STATUS${colors.reset}`);
  console.log('─'.repeat(40));
  console.log(`${colors.cyan}[ DATABASE ]${colors.reset} ${colors.red}Connection Failed ❌${colors.reset}`);
  console.log(`${colors.gray}Error: ${err.message}${colors.reset}`);
});

const express = require("express");
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    const imagePath = path.join(__dirname, 'index.html');
    res.sendFile(imagePath);
});

app.listen(port, () => {
    console.log('\n' + '─'.repeat(40));
    console.log(`${colors.magenta}${colors.bright}🌐 SERVER STATUS${colors.reset}`);
    console.log('─'.repeat(40));
    console.log(`${colors.cyan}[ SERVER ]${colors.reset} ${colors.green}Online ✅${colors.reset}`);
    console.log(`${colors.cyan}[ PORT ]${colors.reset} ${colors.yellow}http://localhost:${port}${colors.reset}`);
    console.log(`${colors.cyan}[ TIME ]${colors.reset} ${colors.gray}${new Date().toISOString().replace('T', ' ').split('.')[0]}${colors.reset}`);
    console.log(`${colors.cyan}[ USER ]${colors.reset} ${colors.yellow}VAIBHAV PATEL${colors.reset}`);
});
