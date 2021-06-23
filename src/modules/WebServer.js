const PORT = process.env.PORT || 3000;
const express = require('express');
const session = require('express-session');
const app = express();

module.exports = async (client) => {
	app.set('view engine', 'ejs');
	app.use(express.json());
	app.use(express.urlencoded({ extended: false }));
	app.use(express.static('public'));
	app.use(
		session({
			resave: false,
			saveUninitialized: true,
			secret: process.env.SECRET,
		})
	);

	require('../router/main')(client, app);

	client.login(process.env.BOT_TOKEN);
	app.listen(PORT, () => {
		console.log(client.color('magenta', '[  Web  ]'), `Server listening on port ${PORT}`)
	});
};