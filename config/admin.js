module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '04b53878b1d974a32d20f464bf51ea0b'),
  },
});
