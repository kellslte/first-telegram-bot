import * as  dotenv from 'dotenv';
dotenv.config();

const config = {
    botKey: process.env.TELEGRAM_BOT_KEY
}

export default config;