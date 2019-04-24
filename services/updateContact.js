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
        type: "object",
        properties: {
          _id: { type: "string" },
          firstname: { type: "string" },
          lastname: { type: "string" },
          email: { type: "string" },
          phonenumber: { type: "string" },
          __v: { type: "number" }
        }
      }
    },
    handler: contactController.updateContact
  };
  fastify.register(formbody);
  fastify.put("/updateContact/:id", opts);

  next();
};
