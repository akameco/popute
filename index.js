'use strict';
const mlw4 = require('manga-life-win-4');

module.exports = () => {
	const poputeLinks = [
		'http://mangalifewin.takeshobo.co.jp/rensai/popute/',
		'http://mangalifewin.takeshobo.co.jp/rensai/popute2/'
	];

	return Promise.all(poputeLinks.map(mlw4)).then(links => {
		return Array.prototype.concat.apply([], links);
	});
};
