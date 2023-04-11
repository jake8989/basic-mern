const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const app = express();
const Goal = require('../models/goals');
const { protect } = require('../middleware/auth');
router.get(
	'/',
	protect,
	asyncHandler(async (req, res) => {
		const goals = await Goal.find({ user: req.user.id });
		res.json(goals);
	})
);
router.post(
	'/',
	protect,
	asyncHandler(async (req, res) => {
		if (!req.body.text) {
			res.status(400);
			throw new Error('Please Add Data in the server!');
		}
		const goals = await Goal.create({
			text: req.body.text,
			user: req.user.id,
		});

		res.json(goals);
		console.log(req.body);
	})
);
router.put(
	'/:id',
	protect,
	asyncHandler(async (req, res) => {
		const goals = await Goal.findById(req.params.id);
		if (!goals) {
			res.status(400);
			throw new Error('No Goal Found');
		}
		const UpdatedGoals = await Goal.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		res.json(UpdatedGoals);
	})
);
router.delete(
	'/:id',
	protect,
	asyncHandler(async (req, res) => {
		const goals = await Goal.findById(req.params.id);
		if (!goals) {
			res.status(400);
			throw new Error('No Goal Found');
		}
		const DeletedGoal = await Goal.findByIdAndDelete(req.params.id);
		res.json({ id: req.params.id });
	})
);
module.exports = router;
