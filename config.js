require('dotenv').config();

module.exports = {
  TOKEN: process.env.TOKEN,
  language: "en",
  ownerID: process.env.OWNER_IDS ? process.env.OWNER_IDS.split(',') : ["1004206704994566164", ""], 
  mongodbUri: process.env.MONGODB_URI,
  spotifyClientId: process.env.SPOTIFY_CLIENT_ID,
  spotifyClientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "/help", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/s2cmhgW",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "MuzammilOPYT",
      password: process.env.LAVALINK_PASSWORD,
      host: process.env.LAVALINK_HOST,
      port: parseInt(process.env.LAVALINK_PORT) || 9376,
      secure: false
    }
  ]
}
