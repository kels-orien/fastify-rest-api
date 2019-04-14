"use strict";

module.exports = function(fastify, opts, next) {
  //fastify.register(formbody);

  fastify.post("/addContact", function(request, reply) {
    reply.send({ data: request.body });
  });

  next();
};
