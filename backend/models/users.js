const mongoose = require('mongoose');
const userSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: [true, 'please add email'],
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		step: {
			type: String,
			default: '/api/login',
		},
	},
	{
		timestamps: true,
	}
);
module.exports = mongoose.model('User', userSchema);
