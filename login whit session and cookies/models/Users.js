const mongoose = require('mongoose');

const essentialSchema = {
    type: String,
    trim: true,
    required: true
};

const userSchema = new mongoose.Schema({
    firstName: {
        ...essentialSchema,
        lowercase: true,
        validate(value) {
            let reg = /^[a-z]{3,30}$/g;
            if (!reg.test(value)) {
                throw new Error("firstName should be have a-z ang be between 3 and 30.");
            }
        }
    },
    lastName: {
        ...essentialSchema,
        lowercase: true,
        validate(value) {
            let reg = /^[a-z]{3,30}$/g;
            if (!reg.test(value)) {
                throw new Error("firstName should be have a-z ang be between 3 and 30.");
            }
        }
    },
    userName: {
        ...essentialSchema,
        // unique: true,
        validate(value) {
            let reg = /^[a-z0-9 .@_]{4,}$/g;
            if (!reg.test(value)) {
                throw new Error("firstName could be have a-z A-Z _@. ang be greater thar 4 characters.");
            }
        }
    },
    Password: {
        ...essentialSchema,
    },
    birthDay: {
        type: Date,
        default: new Date(),
        required: true
    },
    Gender: {
        ...essentialSchema,
        enum: ['male', 'female', 'other']
    },
    email: {
        ...essentialSchema,
        validate(value) {
            let reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if (!reg.test(value)) {
                throw new Error("Email address not valid.");
            }
        }

    },
    phoneNumber: {
        ...essentialSchema,
        validate(value) {
            let reg = /^[0-9+]{10,15}$/g;
            if (!reg.test(value)) {
                throw new Error("firstName should be have a-z ang be between 3 and 30.");
            }
        }
    },
})


const User = mongoose.model('User', userSchema);

module.exports = User;