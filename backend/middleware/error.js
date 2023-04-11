const errorHandeler = (err, req, res, next) => {
	const statusCode = res.statusCode ? res.statusCode : 500;
	res.status(statusCode);
	res.json({ message: err.message });
};
// export {};
module.exports = { errorHandeler };
