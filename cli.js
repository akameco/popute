#!/usr/bin/env node
'use strict';
const popute = require('./');

popute().then(links => {
	links.forEach(link => {
		console.log(link);
	});
});
