const express = require('express');
const router = express.Router();

const DataController = require('../controllers/DataController');
const BoardController = require('../controllers/BoardController');

router.get('/', BoardController.getBoards, (req, res) => {
	res.render('index', { title: 'Homepage' });
});

router.get('/board/:token', BoardController.getBoard, (req, res) => {
	res.render('board', { title: res.locals.board.name });
});

router.get('/create', (req, res) => {
	res.render('create', { title: 'Create new board' });
});
router.post('/create', BoardController.saveBoard);
router.post('/save-data', DataController.saveData);

module.exports = router;
