"use strict";
const formbody = require("fastify-formbody");
const contactController = require("../controllers/contactController");
const formAccepts = require("fastify-accepts");

module.exports = function(fastify, opts, next) {
  opts = {
    schema: {
      body: {
        firstname: { type: "string" },
        lastname: { type: "string" },
        email: { type: "string" },
        phonenumber: { type: "string" }
      },
      response: {
        200: {
          type: "object",
          properties: {
            firstname: { type: "string" },
            lastname: { type: "string" },
            email: { type: "string" },
            phonenumber: { type: "string" }
          }
        }
      }
    }
    //handler: contactController.addContact
  };
  fastify.register(formAccepts);
  fastify.register(formbody);
  fastify.post("/addContact", opts, function(request, reply) {
    reply.send({ data: request.body });
  });

  next();
};
