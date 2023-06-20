// import dependencies 
import Telegraf from "telegraf";
import config from "./config/main.config.js";
import handler from "./handlers/index.handlers.js";

// setup constructor object
const bot = new Telegraf(config.botKey);

// define commands for the bot
handler( bot );

// start listening for messages
bot.launch()

