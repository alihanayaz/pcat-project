const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.set('strictQuery', false);
// CREATE SCHEMA
const PhotoSchema = new Schema({
  title: String,
  description: String,
  image: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const Photo = mongoose.model('Photo', PhotoSchema);

module.exports = Photo;
