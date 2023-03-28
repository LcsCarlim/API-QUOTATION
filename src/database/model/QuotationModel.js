const mongoose = require('mongoose');

const Quotation = new mongoose.Schema({
  code: {
    type: String
  },
  bid: {
    type: String
  },
  create_date: {
    type: Date
  }
});

module.exports = mongoose.model('Quotation', Quotation);
