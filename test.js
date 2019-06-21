'use strict'

import test from 'ava';
import saveBuffer from './';

test('returns undefined', async t => {
    const buffer = Buffer.from('hello world');
    const err = await saveBuffer(buffer, './files/test.txt');

    t.is(err, undefined);
});

test('rejects directory instead of file', async t => {
    try {
        const buffer = Buffer.from('hello world');
        await saveBuffer(buffer, './files/');
        t.fail();
    } catch (err) {
        t.true(err instanceof Error);
        t.true(err.message.includes('illegal operation on a directory'));
    }
});

test('rejects undefined buffer', async t => {
    try {
        const err = await saveBuffer(undefined, './files/test.txt');
        t.fail();
    } catch (err) {
        t.true(err instanceof TypeError);
        t.is(err.message, 'A buffer is required.');
    }
});

test('rejects string instead of a buffer/2', async t => {
    try {
        const err = await saveBuffer('', './files/test.txt');
        t.fail();
    } catch (err) {
        t.true(err instanceof TypeError);
        t.is(err.message, 'A buffer is required.');
    }
});

test('rejects string instead of a buffer/1', async t => {
    try {
        const buffer = Buffer.from('hello world');
        const err = await saveBuffer(buffer);
        t.fail();
    } catch (err) {
        t.true(err instanceof TypeError);
        t.is(err.message, 'A file path is required.');
    }
});