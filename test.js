import test from 'ava';
import numberIsNan from 'number-is-nan';
import positiveZero from 'positive-zero';
import negativeZero from 'negative-zero';

Math.cbrt = undefined;
const m = require('./');

test(t => {
	t.true(numberIsNan(m(NaN)));
	t.true(positiveZero(m(+0)));
	t.true(negativeZero(m(-0)));
	t.is(m(Infinity), Infinity);
	t.is(m(-Infinity), -Infinity);
	t.is(m(0), 0);
	t.is(m(-1), -1);
	t.is(m(1), 1);
	t.is(m(-8), -2);
	t.is(m(8), 2);
	t.is(m(-1000), -10);
	t.is(m(1000), 10);
	t.is(m(-1e-300), -1e-100);
	t.is(m(1e-300), 1e-100);
	t.is(m(-1e+300), -1e+100);
	t.is(m(1e+300), 1e+100);
});
