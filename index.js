import { writeFile } from "fs";
import makeDir from "make-dir";
import { dirname } from "path";

export default async (buffer, filePath) => {
  if (!buffer || !Buffer.isBuffer(buffer)) {
    throw new TypeError("A buffer is required.");
  }

  if (!filePath) {
    throw new TypeError("A file path is required.");
  }

  const dir = dirname(filePath);

  await makeDir(dir);

  const err = await new Promise((resolve, reject) =>
    writeFile(filePath, buffer, (err) => {
      if (err) return reject(err);

      return resolve();
    })
  );

  return err;
};
