"use strict";

const contactController = require("../controllers/contactController");
const formAccepts = require("fastify-accepts");
module.exports = function(fastify, opts, next) {
  opts = {
    schema: {
      querystring: {
        firstname: { type: "string" },
        lastname: { type: "string" },
        email: { type: "string" },
        phonenumber: { type: "string" }
      },
      response: {
        200: {
          type: "object",
          body: {
            firstname: { type: "string" },
            lastname: { type: "string" },
            email: { type: "string" },
            phonenumber: { type: "string" }
          }
        }
      }
    }
  };
  fastify.register(formAccepts);

  fastify.get("/contacts", opts, function(request, reply) {
    reply.send({ data: opts });
  });

  next();
};
