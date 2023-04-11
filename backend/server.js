console.log('hii world');
const express = require('express');
const { errorHandeler } = require('./middleware/error');
const dotenv = require('dotenv').config();
const app = express();
const port = process.env.PORT || 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/goals', require('./routes/goalRoutes'));
app.use(errorHandeler);

app.listen(port, () => {
	console.log(`server started on port ${port}`);
});