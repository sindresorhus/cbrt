'use strict';
var isFinite = require('is-finite');

module.exports = Math.cbrt || function (x) {
	if (x === 0 || !isFinite(x)) {
		return x;
	}

	var neg = x < 0;

	if (neg) {
		x = -x;
	}

	var ret = Math.exp(Math.log(x) / 3);
	ret = (x / (ret * ret) + (2 * ret)) / 3;

	return neg ? -ret : ret;
};
