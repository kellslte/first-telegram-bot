export const textListener = function ( ctx, next )
{
    ctx.reply( "This is a text message" );
}
 
export const stickersListener = function ( ctx, next )
{
    ctx.reply( "Yay! we got a sticker! 💃 " );
}