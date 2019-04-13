"use strict";

const contactController = require("../controllers/contactController");

const opts = {
  schema: {
    querystring: {
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
  handler: contactController.getContacts
};

module.exports = function(fastify, opts, next) {
  fastify.get("/getContacts", opts, function(request, reply) {
    reply.send({ data: request.body });
  });

  next();
};
