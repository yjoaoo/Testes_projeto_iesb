// // Configura o Passport.js para fazer autenticação de usuários usando o login do Google e Microsoft.

// const passport = require("passport");
// const GoogleStrategy = require("passport-google-oauth20").Strategy;
// const MicrosoftStrategy = require("passport-microsoft").Strategy;
// const User = require("./models/User"); // seu modelo Sequelize
// const jwt = require("jsonwebtoken");

// passport.use(new GoogleStrategy({
//     clientID: process.env.GOOGLE_CLIENT_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     callbackURL: "/auth/google/callback"
//   }, async (accessToken, refreshToken, profile, done) => {
//     let user = await User.findOne({ where: { googleId: profile.id } });
  
//     if (!user) {
//       user = await User.create({
//         email: profile.emails[0].value,
//         googleId: profile.id
//       });
//     }
  
//     return done(null, user);
//   }));
  
//   passport.use(new MicrosoftStrategy({
//     clientID: process.env.MICROSOFT_CLIENT_ID,
//     clientSecret: process.env.MICROSOFT_CLIENT_SECRET,
//     callbackURL: "/auth/microsoft/callback",
//     scope: ['user.read']
//   }, async (accessToken, refreshToken, profile, done) => {
//     let user = await User.findOne({ where: { microsoftId: profile.id } });
  
//     if (!user) {
//       user = await User.create({
//         email: profile.emails[0].value,
//         microsoftId: profile.id
//       });
//     }
  
//     return done(null, user);
//   }));
  
//   passport.serializeUser((user, done) => {
//     done(null, user.id);
//   });
  
//   passport.deserializeUser(async (id, done) => {
//     const user = await User.findByPk(id);
//     done(null, user);
//   });