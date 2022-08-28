const flagValue = require('./getflag.js');

console.log(`Oi ${flagValue('--name')}, ${flagValue('--greeting')}`);