const srcConfig = {
  "type": "mongodb",
  "url": `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@flor-de-quilombo.1h2ac.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  "useNewUrlParser": true,
  "synchronize": true,
  "logging": true,
  "entities": ['**/src/entity/*{.ts,.js}'],
  "useUnifiedTopology": true
}
module.exports = srcConfig;