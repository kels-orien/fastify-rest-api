"use strict";

const contactController = require("../controllers/contactController");

module.exports = function(fastify, opts, next) {
  opts = {
    handler: contactController.getAContact
  };

  fastify.get("/getAContact/:id", opts);

  next();
};
