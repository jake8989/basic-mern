const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const app = express();

router.get(
	'/',
	asyncHandler(async (req, res) => {
		res.json({ message: 'get Goals' });
	})
);
router.post(
	'/',
	asyncHandler((req, res) => {
		if (!req.body.text) {
			res.status(400);
			throw new Error('Please Add Data in the server!');
		}

		res.json({ message: 'set Goals' });
		console.log(req.body);
	})
);
router.put(
	'/:id',
	asyncHandler((req, res) => {
		res.json({ message: `update goal no ${req.params.id}` });
	})
);
router.delete(
	'/:id',
	asyncHandler((req, res) => {
		res.json({ message: `delete goal no ${req.params.id}` });
	})
);
module.exports = router;
