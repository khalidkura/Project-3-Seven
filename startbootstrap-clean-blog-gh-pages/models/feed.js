const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SocialFeedSchema = new Schema({
    post: String,
    time: Number
});

const SocialFeed = mongoose.model('SocialFeed'. SocialFeedSchema);

module.exports = SocialFeed;