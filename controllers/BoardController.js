const mongoose = require('mongoose');
const Board = mongoose.model('Board');

module.exports.saveBoard = (req, res) => {
	const { name, description } = req.body;

	const board = new Board({
		name,
		description,
	});

	board.save().then(board => {
		if (board) {
			res.redirect('/');
		} else {
			res.redirect('/create');
		}
	});
};

module.exports.getBoards = (req, res, next) => {
	Board.find({}).then(boards => {
		res.locals.boards = boards;
		next();
	});
};

module.exports.getBoard = (req, res, next) => {
	const { token } = req.params;
	Board.findOne({ token }).then(board => {
		if (board) {
			res.locals.board = board;
			next();
		}
	});
};
