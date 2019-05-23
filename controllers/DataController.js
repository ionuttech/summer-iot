const mongoose = require('mongoose');
const Data = mongoose.model('Data');
const Board = mongoose.model('Board');

module.exports.saveData = (req, res) => {
	const { board, value } = req.body;

	Board.findOne({ token: board }).then(foundBoard => {
		if (foundBoard) {
			data = new Data({
				board: foundBoard._id,
				value,
			});
			data.save().then(data => {
				if (data) {
					res.status(200).send('OK');
				} else {
					res.status(500).send('Error');
				}
			});
		} else {
			res.status(500).send('Error');
		}
	});
};
