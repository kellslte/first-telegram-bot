export const start = function ( ctx, next )
{
    ctx.reply("You have entered the start command.");
}

export const help = function ( ctx, next )
{
    ctx.reply("You have entered the help command.");
}

export const settings = function ( ctx, next )
{
    ctx.reply("You have entered the settings command.");
}

export const test = function ( ctx, next )
{
    ctx.reply("Hello World! 👋 ");
}