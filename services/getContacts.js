"use strict";

const contactController = require("../controllers/contactController");

module.exports = function(fastify, opts, next) {
  opts = {
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
    handler: contactController.getContacts
  };

  fastify.get("/getContacts", opts);

  next();
};
