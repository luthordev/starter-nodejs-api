const ip = require("ip");

const config = {
    app: {
      name: "NodeJS API",
      host: `http://${ip.address()}`,
      port: 3000,
      communication: true,
    },
    db: {
      host: "mongodb://localhost:27017",
      database: "testdb",
      username: "",
      password: "",
    },
    apiKey: "luthorapi28",
  };
  
  module.exports = config;