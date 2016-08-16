'use strict';
const mlw4 = require('manga-life-win-4');

const poputeLinks = [
	'http://mangalifewin.takeshobo.co.jp/rensai/popute/',
	'http://mangalifewin.takeshobo.co.jp/rensai/popute2/'
];

module.exports = () =>
	Promise.all(poputeLinks.map(mlw4))
		.then(links => Array.prototype.concat.apply([], links));
