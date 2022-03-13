const express = require("express");
const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server-express");
const { resolvers } = require("./schema/resolvers");
const { typeDefs } = require("./schema/type_def");
require("dotenv").config();

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => console.log("db is connected"))
  .catch((err) => console.log(err));

async function startServer() {
  const app = express();
  const apolloServer = new ApolloServer({ typeDefs, resolvers });

  await apolloServer.start();

  apolloServer.applyMiddleware({ app: app, path: "/users" });

  app.use((req, res) => {
    res.send("Hello from express ");
  });

  app.listen(4000, () => console.log("Server is running"));
}

startServer();

// const { ApolloServer } = require("apollo-server");
// const express = require('express')
// const mongoose = require("mongoose");
// require("dotenv").config();
// const { typeDefs } = require("./schema/type_def");
// const { resolvers } = require("./schema/resolvers");

// const server = new ApolloServer({ typeDefs, resolvers });

// mongoose
//   .connect(process.env.DATABASE_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then((result) => console.log("db is connected"))
//   .catch((err) => console.log(err));

// server.listen().then(({ url }) => {
//   console.log(`Your API is running at: ${url}`);
// });
