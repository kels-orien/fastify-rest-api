"use strict";
const { ApolloServer } = require("apollo-server-fastify");
const { typeDefs, resolvers } = require("../module");

const server = new ApolloServer({
  typeDefs,
  resolvers
});

const app = require("fastify")();
//module.exports = function(fastify, opts, next) {
//fastify.get("/example", function(request, reply) {
// reply.send("this is an example");
// });

// next();
//};

// If you prefer async/await, use the following
//
module.exports = async function(fastify, opts) {
  function graphql() {
    app.register(server.createHandler());
  }
};
