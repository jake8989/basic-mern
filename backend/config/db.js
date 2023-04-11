const mongoose = require('mongoose');
const connectDb = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URL);
		console.log('MongoConnected Succesfully'.blue);
	} catch {
		console.log('error');
		process.exit(1);
	}
};
module.exports = connectDb;
