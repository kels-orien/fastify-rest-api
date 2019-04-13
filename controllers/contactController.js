// Get Data Models
const Contact = require("../models/Contact");

// Get all Contacts
exports.getContacts = async (req, reply) => {
  try {
    const Contacts = await Contact.find();
    return Contacts;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get single Contact by ID
exports.getAContact = async (req, reply) => {
  try {
    const id = req.params.id;
    const Contact = await Contact.findById(id);
    return Contact;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Add a new Contact
exports.addContact = async (req, reply) => {
  try {
    const Contact = new Contact(req.body);
    return Contact.save();
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Update an existing Contact
exports.updateContact = async (req, reply) => {
  try {
    const id = req.params.id;
    const Contact = req.body;
    const { ...updateData } = Contact;
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
    const Contact = await Contact.findByIdAndRemove(id);
    return Contact;
  } catch (err) {
    throw boom.boomify(err);
  }
};
