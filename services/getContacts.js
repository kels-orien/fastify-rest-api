"use strict";

const contactController = require("../controllers/contactController");

module.exports = function(fastify, opts, next) {
  opts = {
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
    handler: contactController.getContacts
  };

  fastify.get("/getContacts", opts);

  next();
};
