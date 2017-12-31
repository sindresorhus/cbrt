'use strict';
const isFinite = require('is-finite');

module.exports = value => {
	if (value === 0 || !isFinite(value)) {
		return value;
	}

	const neg = value < 0;

	if (neg) {
		value = -value;
	}

	let ret = Math.exp(Math.log(value) / 3);
	ret = ((value / (ret * ret)) + (2 * ret)) / 3;

	return neg ? -ret : ret;
};
