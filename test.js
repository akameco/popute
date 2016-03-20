import test from 'ava';
import popute from './';

test('', async t => {
	const links = await popute();
	t.is(links.length, 44);
});
