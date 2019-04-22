"use strict";
const formbody = require("fastify-formbody");
const contactController = require("../controllers/contactController");

module.exports = function(fastify, opts, next) {
  opts = {
    schema: {
      body: {
        type: "object",
        properties: {
          firstname: { type: "string" },
          lastname: { type: "string" },
          email: { type: "string" },
          phonenumber: { type: "string" }
        }
      }
    },
    response: {
      200: {
        type: "array",
        properties: {
          firstname: { type: "string" },
          lastname: { type: "string" },
          email: { type: "string" },
          phonenumber: { type: "string" }
        }
      }
    },
    handler: contactController.addContact
  };

  fastify.register(formbody);
  fastify.post("/addContact", opts);

  next();
};
