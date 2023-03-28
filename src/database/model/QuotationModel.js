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
  },
  account_id: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Quotation', Quotation);
