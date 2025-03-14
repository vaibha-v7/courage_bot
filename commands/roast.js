
const config = require("../config.js");
const { EmbedBuilder, ApplicationCommandOptionType } = require('discord.js');
const { description } = require('./ping.js');

module.exports = {

    name : "roast",
    description: "will roast the person",

    permissions: "0x0000000000000800",

    options: [{
        name: 'target',
        description: 'The user you want to roast',
        type: ApplicationCommandOptionType.User,
        required: true
    }],

    run: async (client, interaction, lang) => {
        try {
            let mention = interaction.options.getUser('target');
        
        
        let random5 = getRandomNumber5();
    
        interaction.reply(`**<@${mention.id}> ${savageRoasts[random5]}**`);
            
        } catch (error) {
            console.log(error);
            
            
        }
    }
}

const savageRoasts = [
    "You're like a software update—nobody wants you, but we’re stuck with you.",
    "Your secrets are safe with me. I never even listen when you tell them.",
    "You bring everyone so much joy… when you shut up.",
    "You were born on a highway because that's where most accidents happen.",
    "You're proof that even mistakes can be repeated.",
    "The only thing you’ve ever successfully spread is disappointment.",
    "Your parents must be so proud… of your siblings.",
    "I’d agree with you, but I don’t support stupidity.",
    "You have something on your shirt—oh wait, that’s just failure.",
    "The only 'W' you’ve ever taken is in your name.",
    "You bring people together—because they all hate you.",
    "You should wear a sign that says, 'Not My Fault—I Was Raised This Way.'",
    "Your brain is like a browser with 100 tabs open—99 are frozen, and you have no idea where the music is coming from.",
    "I bet your passwords are '1234' and 'password.'",
    "Your IQ test came back negative.",
    "If stupidity was a sport, you’d have Olympic gold medals.",
    "You have something in your head—oh wait, that’s just air.",
    "You make a rock look like a genius.",
    "Your thoughts have the speed of dial-up internet.",
    "If brains were gas, you wouldn’t have enough to drive a toy car.",
    "You have something on your brain—oh wait, there’s nothing there.",
    "I tried to think of something nice to say about you, but my brain doesn’t work at that low of a frequency.",
    "You’re living proof that even evolution takes a break.",
    "Mirrors reflect reality, but even they refuse to show your face.",
    "Your hairline is doing the moonwalk.",
    "You look like something I drew with my non-dominant hand.",
    "You’re so ugly that when you cry, the tears run away from your face.",
    "Your face could scare a blind man into seeing again.",
    "You have something on your face—oh wait, that’s just bad genetics.",
    "You look like you belong in a 'before' picture.",
    "I’d tell you to glow up, but even the sun couldn’t help you.",
    "You look like an unfinished sketch.",
    "You’re like a penny—two-faced and not worth much.",
    "You have something on your personality—oh wait, that’s just toxicity.",
    "The only thing you run is your mouth.",
    "If being annoying was a job, you’d be the CEO.",
    "You bring nothing to the table except bad vibes.",
    "You have something on your energy—oh wait, that’s just pure negativity.",
    "You’re about as useful as a screen door on a submarine.",
    "You make dirt look interesting.",
    "If personality was currency, you’d be in deep debt.",
    "I’d roast you more, but nature already did a good job.",
    "You have something in your future—oh wait, never mind.",
    "The only thing lower than your standards is your bank account.",
    "You’re like a software update—no one wants you, but you keep forcing yourself in.",
    "You’d be a great motivational speaker—if failure was the goal.",
    "Your job must be collecting L’s because you seem to have a lot of them.",
    "The only promotion you’ll ever get is from 'unemployed' to 'still unemployed.'",
    "You have something in your career—oh wait, there is no career.",
    "If ambition was air, you’d have suffocated by now.",
    "Your resume is just a blank sheet of paper.",
    "Even rock bottom looks like success compared to your life.",
    "You must be a magician because every time you open your legs, dignity disappears.",
    "Your legs are like a gas station—always open and full of random strangers.",
    "Your sex life is like a McDonald's ice cream machine—always broken.",
    "The only thing tighter than your budget is your ex’s new girlfriend.",
    "Your pull-out game is weaker than your WiFi signal.",
    "You get more mileage than a rental car.",
    "The only thing you've ever made wet is the toilet seat.",
    "Your exes have a support group.",
    "You put the 'ho' in 'hopeless.'",
    "If thirst was a sport, you'd have Olympic gold.",
    "Your reflection begs for mercy every morning.",
    "Your face looks like it was made in Minecraft.",
    "Your hairline is running away faster than your ex.",
    "You look like a deepfake gone wrong.",
    "Even Photoshop couldn't fix that mess.",
    "You’re the reason horror movies exist.",
    "Your face could make onions cry.",
    "You look like an unpaid intern version of a celebrity.",
    "Your glow-up is still buffering.",
    "If looks could kill, yours would be an act of self-defense.",
    "Your personality is as dry as your DMs.",
    "If stupidity was a crime, you’d be on death row.",
    "You bring everyone down—like a failed parachute.",
    "Even your shadow leaves when you talk.",
    "You have the emotional depth of a puddle.",
    "You’re as fake as your Instagram followers.",
    "If common sense was currency, you'd be bankrupt.",
    "Your energy is so toxic, even Chernobyl would reject you.",
    "You make cardboard seem interesting.",
    "Your personality is a glitch in human evolution.",
    "Your sex game is so weak, I’d rather watch paint dry.",
    "The only thing you’ve ever turned on is your phone.",
    "Your head game is so bad, even a vacuum sucks better than you.",
    "Your sex appeal is like a Windows update—nobody wants it.",
    "Your body count is higher than your IQ.",
    "You’re a walking STD factory.",
    "Your D is like a ghost—everyone’s heard of it, but nobody’s seen it.",
    "Your moans probably sound like a dying goat.",
    "You f*ck like a broken clock—twice a day, and only for a minute.",
    "Your foreplay is so bad, people fake comas instead of orgasms.",
    "Your parents should’ve pulled out.",
    "The only thing smaller than your d*ck is your ambition.",
    "Your existence is proof that condoms aren’t 100% effective.",
    "Even your birth certificate is an apology letter.",
    "Your life’s peak was being born.",
    "Your dreams have restraining orders against you.",
    "You’re living proof that bad decisions have consequences.",
    "You bring nothing to the table—not even an appetite.",
    "If rock bottom had a basement, you’d live there.",
    "Your life is like a browser with too many tabs open, and every one of them is porn."
];

function getRandomNumber5(){
    return Math.floor(Math.random() * savageRoasts.length)
}
