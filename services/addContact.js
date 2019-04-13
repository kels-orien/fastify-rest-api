"use strict";
const formbody = require("fastify-formbody");
const contactController = require("../controllers/contactController");

const opts = {
  schema: {
    body: {
      firstname: { type: "string" },
      lastname: { type: "string" },
      email: { type: "string" },
      phonenumber: { type: "Number" }
    },
    response: {
      200: {
        type: "object",
        properties: {
          firstname: { type: "string" },
          lastname: { type: "string" },
          email: { type: "string" },
          phonenumber: { type: "Number" }
        }
      }
    }
  },
  handler: contactController.addContact
};

module.exports = function(fastify, opts, next) {
  fastify.register(formbody);
  fastify.post("/addContact", opts, function(request, reply) {
    reply.send({ data: request.body });
  });

  next();
};
