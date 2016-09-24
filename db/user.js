'use strict';
// This file represents the structure of a user object inside our mongodb database on Azure
let mongoose = require('./connect');
let Schema = mongoose.Schema;
let collectionUser = 'users';

// create a schema
let userSchema = new Schema({
    _id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String },
    address: {
        channelId: {type: String},
        conversation: {
            isGroup: {type: String},
            id: {type: String},
            name: {type: String}
        },
        bot: {
            id: {type: String},
            name: {type: String}
        }
    },
    lat: { type: Number },
    lon: { type: Number },
    createdAt: Date,
    updatedAt: Date
});

// we need to create a model using it
let User = mongoose.model(collectionUser, userSchema);

// make this available to our users in our Node applications
module.exports = User;