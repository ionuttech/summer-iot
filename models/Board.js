const mongoose = require('mongoose');
const uuid = require('uuid');
const Schema = mongoose.Schema;

const BoardSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		default: 'Arduino board',
	},
	token: {
		type: String,
		unique: true,
	},
});

BoardSchema.pre('save', function(next) {
	this.token = uuid.v4();
	next();
});

BoardSchema.virtual('data', {
	ref: 'Data', // what model to link?
	localField: '_id', // which field on the board?
	foreignField: 'board', // which field on the data?
});

function autopopulate(next) {
	this.populate('data');
	next();
}
BoardSchema.pre('find', autopopulate);
BoardSchema.pre('findOne', autopopulate);
BoardSchema.pre('findById', autopopulate);

module.exports = mongoose.model('Board', BoardSchema);
