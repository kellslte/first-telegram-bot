import { help, settings, start } from "./main.commands.js";

const handler = function ( bot )
{ 
    // start command
    bot.start(start);
    // help command
    bot.help( help );
    // settings command
    bot.settings( settings );
}

export default handler;