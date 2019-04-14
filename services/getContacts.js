"use strict";
const contactController = require("../controllers/contactController");
module.exports = function(fastify, opts, next) {
  fastify.get("/getContacts", function(request, reply) {
    reply.send({ data: contactController.getContacts });
  });

  next();
};
