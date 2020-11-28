const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "!";
client.once("ready", () => {
  console.log("Anna is online!");
});

client.on("guildMemberAdd", (member) => {
  const channel = member.guild.channels.cache.find(
    (channel) => channel.name === "welcome"
  );
  let colors = [
    "Red",
    "Blue",
    "Green",
    "Pink",
    "Orange",
    "Yellow",
    "Black",
    "White",
    "Purple",
    "Brown",
    "Cyan",
    "Lime",
    "Tan",
    "Fortegreen",
  ];
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  if (!channel) return;
  channel.send(
    `Welcome ${member}! Your designated color is ` +
      randomColor +
      `. This color corresponds to the character you will be playing in Among Us`
  );
});

client.on("message", (message) => {
  if (message.content.includes("ping")) {
    message.reply("pong");
  }
  if (message.content.includes("hong")) {
    message.reply("kong");
  }
  if (message.content.includes("shut up")) {
    message.reply("you stfu");
  }
  if (
    message.content.includes("Anna's Bot") ||
    message.content.includes("Anna's bot") ||
    message.content.includes("anna's bot") ||
    message.content.includes("anna's Bot")
  ) {
    message.reply("Can you frick off? I'm taking a shit.");
  }
  if (message.content.includes("adios") || message.content.includes("bye")) {
    message.reply({
      files: [
        "https://thechuunicorner.files.wordpress.com/2016/07/jtphig8.png",
      ],
    });
  }
});

client.on("message", (message) => {
  let args = message.content.substring(prefix.length).split(" ");
  switch (args[0]) {
    case "poll":
      const Embed = new Discord.MessageEmbed()
        .setColor("#7fe5f0")
        .setTitle("Poll")
        .setDescription("Scheduling Meeting")
        // .attachFiles("poods.jpg")
        .addFields({
          name: "Which day are you free?",
          value:
            "React with a thumbs up if you're free Friday night or a thumbs down for Saturday night.",
        });
      if (!args[1]) {
        message.channel.send(Embed);
        break;
      }

      // let msgArgs = args.slice(1).join(" ");
      // message.channel.send("**" + msgArgs + "**").then(messageReaction =>{
      //   messageReaction.react("👍");
      //   messageReaction.react("👎");
      // });

      break;
  }
});

client.on("message", (message) => {
  let args = message.content.substring(prefix.length).split(" ");
  switch (args[0]) {
    case "pollTime":
      const Embed = new Discord.MessageEmbed()
        .setColor("#7fe5f0")
        .setTitle("Poll")
        .setDescription("Meeting Time")
        .addFields({
          name: "What time on Friday are you free for Among Us?",
          value:
            "React with an emoji corresponding to the number you're available: 5, 6, 7, 8, 9, or 10. If you want to suggest a different time, feel free to do so.",
        });
      if (!args[1]) {
        message.channel.send(Embed);
        break;
      }

      break;
  }
});

client.login("NzYzNDcyNjI4MTc3OTYxMDAz.X34NSw.TMzjsv8vqckfHJZ36Ror4xtC6kQ");
