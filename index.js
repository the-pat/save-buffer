'use strict';

const fs = require('fs');
const makeDir = require('make-dir');
const path = require('path');

module.exports = async(buffer, filePath) => {
    if (!buffer || !Buffer.isBuffer(buffer)) {
        throw new TypeError('A buffer is required.');
    }

    if (!filePath) {
        throw new TypeError('A file path is required.');
    }

    const dir = path.dirname(filePath);

    await makeDir(dir);

    const err = await new Promise((resolve, reject) => fs.writeFile(filePath, buffer, (err) => {
        if (err) return reject(err);

        return resolve();
    }));

    return err;
};