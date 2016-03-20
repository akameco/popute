'use strict';
const got = require('got');
const cheerio = require('cheerio');

module.exports = () => {
	return got('http://mangalifewin.takeshobo.co.jp/rensai/popute/')
		.then(res => {
			const $ = cheerio.load(res.body);
			return $('.bookR a').map((i, el) => {
				return $(el).attr('href');
			}).get();
		}).catch(err => {
			console.log(err);
		});
};
