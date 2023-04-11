const express = require('express');
const { route } = require('./goalRoutes');
const asyncHandler = require('express-async-handler');
const { model } = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const app = express;
const router = express.Router();
const User = require('../models/users');

router.post(
	'/',
	asyncHandler(async (req, res) => {
		const { name, email, password, step } = req.body;
		const userExists = await User.findOne({ email: email });
		if (userExists) {
			res.status(400);
			throw new Error('user already exists');
		}
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);
		const users = await User.create({
			name: name,
			email: email,
			password: hashedPassword,
			step: 'LOGIN',
		});
		if (users) {
			res.json({
				_id: users.id,
				name: users.name,
				password: users.password,
				email: users.email,
			});
		} else {
			res.status(400);
			throw new Error('error in registring user');
		}
		// res.json({ message: 'Register user' });
	})
);
router.post(
	'/login',
	asyncHandler(async (req, res) => {
		const { email, password } = req.body;
		const user = await User.findOne({ email });
		if (user && (await bcrypt.compare(password, user.password))) {
			res.status(200).json({ message: 'logged in Succesfully' });
		} else {
			res.status(400);

			throw new Error('Not Found');
		}
		// res.json({ message: 'login user' });
	})
);
router.get(
	'/me',
	asyncHandler(async (req, res) => {
		res.json({ message: 'user data' });
	})
);
module.exports = router;
