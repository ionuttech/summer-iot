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

module.exports.getBoardData = (req, res) => {
	const { token } = req.query;
	Board.findOne({ token }).then(foundBoard => {
		if (foundBoard) {
			res.status(200).json(foundBoard.data);
		} else {
			res.status(404).send('Board not found');
		}
	});
};
