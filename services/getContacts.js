"use strict";

const contactController = require("../controllers/contactController");

module.exports = function(fastify, opts, next) {
  opts = {
    handler: contactController.getContacts
  };

  fastify.get("/getContacts", opts);

  next();
};
