module.exports = ({ env }) => ({
    host: env('MAIL_HOST'),
    accessKeyId: env('MAIL_ACCESS_KEY_ID'),
    secretAccessKey: env('MAIL_SECRET_ACCESS_KEY'),
    port: env.int('MAIL_PORT', 465),
    auth_user: env('MAIL_USERNAME'),
    auth_pass: env('MAIL_PASSWORD'),
    senderEmail: env('MAIL_ADDRESS'),
    reciveEmail: env('MAIL_RECIVER'),
    mailName: env('MAIL_NAME'),
  });