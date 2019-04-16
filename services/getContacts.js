"use strict";

const contactController = require("../controllers/contactController");
const formAccepts = require("fastify-accepts");
module.exports = function(fastify, opts, next) {
  opts = {
    handler: contactController.getContacts
  };
  //fastify.register(formAccepts);

  fastify.get("/getContacts", opts);

  next();
};
