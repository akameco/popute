import test from 'ava';
import popute from './';

test('fetch items', async t => {
	const links = await popute();
	t.is(links.length, 44);
});
