#!/usr/bin/env node
'use strict';
const popute = require('./');

popute().then(links => {
	console.log(links.length);
	links.forEach(link => {
		console.log(link);
	});
});
