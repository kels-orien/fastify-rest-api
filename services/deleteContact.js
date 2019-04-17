"use strict";
const formbody = require("fastify-formbody");
const contactController = require("../controllers/contactController");

module.exports = function(fastify, opts, next) {
  opts = {
    handler: contactController.deleteContact
  };
  fastify.register(formbody);
  fastify.delete("/deleteContact/:id", opts);

  next();
};
