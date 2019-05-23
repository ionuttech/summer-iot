const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DataSchema = new Schema({
	value: {
		type: Number,
		required: true,
	},
	board: {
		type: mongoose.Schema.ObjectId,
		ref: 'Board',
		required: true,
	},
	timestamp: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model('Data', DataSchema);
