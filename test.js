'use strict';
var test = require('ava');
var numberIsNan = require('number-is-nan');
var positiveZero = require('positive-zero');
var negativeZero = require('negative-zero');
Math.cbrt = undefined;
var cbrt = require('./');

test(function (t) {
	t.assert(numberIsNan(cbrt(NaN)));
	t.assert(positiveZero(cbrt(+0)));
	t.assert(negativeZero(cbrt(-0)));
	t.assert(cbrt(Infinity) === Infinity);
	t.assert(cbrt(-Infinity) === -Infinity);
	t.assert(cbrt(0) === 0);
	t.assert(cbrt(-1) === -1);
	t.assert(cbrt(1) === 1);
	t.assert(cbrt(-8) === -2);
	t.assert(cbrt(8) === 2);
	t.assert(cbrt(-1000) === -10);
	t.assert(cbrt(1000) === 10);
	t.assert(cbrt(-1e-300) === -1e-100);
	t.assert(cbrt(1e-300) === 1e-100);
	t.assert(cbrt(-1e+300) === -1e+100);
	t.assert(cbrt(1e+300) === 1e+100);
	t.end();
});
