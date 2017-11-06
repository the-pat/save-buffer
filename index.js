'use strict';

const fs = require('fs');
const makeDir = require('make-dir');

module.exports = async(buffer, filePath) => {
    await makeDir(filePath);

    const err = await new Promise((resolve, reject) => fs.writeFile(filePath, buffer, (err) => {
        if (err) return reject(err);

        return resolve();
    }));

    return err;
};