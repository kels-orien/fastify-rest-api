"use strict";
const formbody = require("fastify-formbody");
const contactController = require("../controllers/contactController");
const formAccepts = require("fastify-accepts");

module.exports = function(fastify, opts, next) {
  opts = {
    handler: contactController.addContact
  };
  fastify.register(formbody);
  fastify.post("/addContact", opts);

  next();
};
