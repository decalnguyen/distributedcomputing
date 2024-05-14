module.exports = ({ env }) => {
    return {
        enabled: env.bool('TELEGRAM_ENABLED', true),
        handleEnabled: env.bool('TELEGRAM_HANDLE_ENABLED', false),
        botToken: env('TELEGRAM_BOT_TOKEN'),
        channelId: env('TELEGRAM_CHANNEL_ID'),
    }
};