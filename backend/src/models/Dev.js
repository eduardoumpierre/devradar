const mongoose = require('mongoose');

const DevSchema = new mongoose.Schema({
  bio: String,
  name: String,
  techs: [String],
  avatar_url: String,
  github_username: String,
});

module.exports = mongoose.model('Dev', DevSchema);
