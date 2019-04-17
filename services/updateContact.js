"use strict";
const formbody = require("fastify-formbody");
const contactController = require("../controllers/contactController");

module.exports = function(fastify, opts, next) {
  opts = {
    handler: contactController.updateContact
  };
  fastify.register(formbody);
  fastify.put("/updateContact/:id", opts);

  next();
};
