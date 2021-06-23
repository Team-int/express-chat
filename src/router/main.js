require('dotenv').config();
const call = require('./callback');
const Canvas = require('canvas');

module.exports = async (client, app) => {
	app.get('/', async (req, res) => {
		if (req.session.user) res.render('index', { user: true });
		else res.render('index', { user: false });
	});

	app.get('/callback', call);

	app.get('/dashboard', async (req, res) => {
		if (!req.session.token || !req.session.user_id) return res.redirect(process.env.LOGIN_URI);
		if (req.session.logged_on + req.session.token.expires_in >= Date.now() - 100)
			await getNewToken(req);

		const user = client.users.cache.get(req.session.user_id);
		const vaildGuild = [];

		const canvas = Canvas.createCanvas(64, 64);
		const ctx = canvas.getContext('2d');
		const icon = await Canvas.loadImage(
			`https://cdn.discordapp.com/icons/750705387124031510/a_65320b54bc70338e84caf110226bcdf8.jpg?size=128`
		);
		ctx.drawImage(icon, 25, 25, canvas.width, canvas.height);

		vaildGuild.push({
			id: g.id,
			name: g.name,
			icon: canvas.toDataURL(),
		});
		if (!user)
			return res.redirect(`/redirect.html?message=${encodeURIComponent('봇이 접근할 수 있는 유저가 아닙니다')}&url=${encodeURIComponent(process.env.LOGIN_URI)}`);
		res.render('dashboard/dashboard', { guilds: vaildGuild });
	});

	
};