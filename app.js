"use strict";

const path = require("path");
const AutoLoad = require("fastify-autoload");

const { ApolloServer } = require("apollo-server-fastify");
const { typeDefs, resolvers } = require("./module");

const server = new ApolloServer({
  typeDefs,
  resolvers
});
const fastify = require('fastify')();
 (async function() {
  fastify.register(server.createHandler());
  await fastify.listen(3000);
   })()

module.exports =  function(fastify, opts, next) {
  // Place here your custom code!
  fastify.register(server.createHandler());
  await fastify.listen(3000);

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, "plugins"),
    options: Object.assign({}, opts)
  });

  // This loads all plugins defined in services
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, "services"),
    options: Object.assign({}, opts)
  });

  // Make sure to call next when done
  next();
};
