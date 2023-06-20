import { help, settings, start, test } from "../commands/main.commands.js";
import { catHearer } from "../methods/hears.methods.js";
import { botFatherHandler } from "../methods/mention.methods.js";
import { stickersListener, textListener } from "../methods/on.methods.js";

const handler = function (bot) {
  /* Default Commands */
  // start command
  bot.start(start);
  // help command
  bot.help(help);
  // settings command
  bot.settings(settings);
  /* Custom Command */
  bot.command( [ "test", "Test", "another", "Another" ], test );
  /* Methods */
  // mention
  bot.mention('botfather', botFatherHandler)
  // hears
  bot.hears( "cat", catHearer );
  // on
  bot.on( "text", textListener );
  bot.on( "sticker", stickersListener );
};

export default handler;
