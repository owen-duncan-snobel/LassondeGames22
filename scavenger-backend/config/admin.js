module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fd6034466d71ce0c7d37737c45908b03'),
  },
});
