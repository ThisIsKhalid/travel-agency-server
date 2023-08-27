"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Package = void 0;
const mongoose_1 = require("mongoose");
const packageSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    numberOfPeople: {
        type: Number,
        required: true,
    },
    packageType: {
        type: String,
        enum: ['basic', 'premium', 'ultimate'],
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be greater than 0.']
    },
    description: {
        type: String,
        required: true,
    },
    guideName: {
        type: String,
        required: true,
    },
    transportOptions: {
        type: String,
        enum: ['bus', 'train', 'flight'],
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    agencyId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Package = (0, mongoose_1.model)('Package', packageSchema);
