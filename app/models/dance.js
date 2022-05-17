const mongoose = require('mongoose');

const { Schema } = mongoose;

const DanceSchema = new Schema({
  date: {
    type: String,
    maxLength: 120,
    required: true,
    // validate: validators.isEmail
  },
  hour: {
    type: String,
    required: true,
    primary: true,
  },
  email: {
    type: String,
    required: true
  }
});

DanceSchema.index({ email: 1 });
DanceSchema.index({ date: 1 });
DanceSchema.index({ hour: 1 }, { unique: true });


module.exports = mongoose.model('Dance', DanceSchema);