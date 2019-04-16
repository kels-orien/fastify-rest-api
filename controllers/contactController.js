// Get Data Models
const Contact = require("../models/Contact");
const boom = require("boom");
// Get all Contacts
exports.getContacts = async (req, reply) => {
  try {
    const contacts = await Contact.find();
    return contacts;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get single Contact by ID
exports.getAContact = async (req, reply) => {
  try {
    const id = req.params.id;
    const contact = await Contact.findById(id);
    reply.send(contact);
    return contact;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Add a new Contact
exports.addContact = async (req, reply) => {
  try {
    const contact = new Contact(req.body);
    console.log("add contacts: ", contact);
    return contact.save();
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Update an existing Contact
exports.updateContact = async (req, reply) => {
  try {
    const id = req.params.id;
    const contact = req.body;
    const { ...updateData } = contact;
    const update = await Contact.findByIdAndUpdate(id, updateData, {
      new: true
    });
    return update;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Delete a Contact
exports.deleteContact = async (req, reply) => {
  try {
    const id = req.params.id;
    const contact = await Contact.findByIdAndRemove(id);
    return contact;
  } catch (err) {
    throw boom.boomify(err);
  }
};
