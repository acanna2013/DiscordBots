const Discord = require("discord.js");
const bot = new Discord.Client();
prefix = "!";
bot.on("ready", () => {
  console.log("Bot is online!");
});

bot.on("guildMemberAdd", (member) => {
  const channel = member.guild.channels.cache.find(
    (channel) => channel.name === "welcome"
  );

  if (!channel) return;
  channel.send(
    `Welcome ${member} to Creations for a Cause! Please tell us your first and last name!`
  );
  
});

// bot.on("message", (message) => {
//   let args = message.content.substring(prefix.length).split(" ");
//   switch (args[0]) {
//     case "poll":
//       const Embed = new Discord.MessageEmbed()
//         .setColor("#7fe5f0")
//         .setTitle("Poll")
//         .setDescription("Scheduling Meeting")
//         // .attachFiles("poods.jpg")
//         .addFields({
//           name: "Which day are you free?",
//           value:
//             "React with a thumbs up if you're free Friday night or a thumbs down for Saturday night.",
//         });
//       if (!args[1]) {
//         message.channel.send(Embed);
//         break;
//       }

//       // let msgArgs = args.slice(1).join(" ");
//       // message.channel.send("**" + msgArgs + "**").then(messageReaction =>{
//       //   messageReaction.react("👍");
//       //   messageReaction.react("👎");
//       // });

//       break;
//   }
// });

bot.on("message", (message) => {
  let args = message.content.substring(prefix.length).split(" ");
  switch (args[0]) {
    case "pollTime":
      const Embed = new Discord.MessageEmbed()
        .setColor("#7fe5f0")
        // .setTitle("Poll")
        // .setDescription("Among Us/Models")
        .addFields({
          name: "For your next model, do you want to do one of the other models we've done before (from animal/baymax/mini swan) or a completely different model?",
          value:
            "React with a thumbs up if you want to do a model from animal/baymax/swan and a thumbs down for a new model.",
        });
      if (!args[1]) {
        message.channel.send(Embed);
        break;
      }

      break;
  }
});


bot.login("NzU3OTk4NjY4Njk0NTUyNTk2.X2ojRQ.9I5Og_Hg2GPw4eAEw2p9-WE4hlM");
