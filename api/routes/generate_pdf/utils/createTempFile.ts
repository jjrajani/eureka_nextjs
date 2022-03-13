import tmp from "tmp";
import fs from "node:fs";
import path from "path";
import moment from "moment";

const createTempFile = (fileContent) => {
  return new Promise((resolve, reject) => {
    try {
      const date = moment().format("MM_DD_YYYY");
      const tmpdir = path.join(__dirname, "..", "..", "..", "..", "/tmp", date);
      if (!fs.existsSync(tmpdir)) {
        fs.mkdirSync(tmpdir);
      }
      tmp.file(
        {
          postfix: ".pdf",
          tmpdir,
        },
        function _tempFileCreated(err, path, fd, cleanupCallback) {
          if (err) throw err;
          console.log("File: ", path);
          console.log("Filedescriptor: ", fd);
          fs.appendFile(path, fileContent);
          resolve(path);

          // If we don't need the file anymore we could manually call the cleanupCallback
          // But that is not necessary if we didn't pass the keep option because the library
          // will clean after itself.
          // cleanupCallback();
        }
      );
    } catch (error) {
      reject(error);
    }
  });
};

export default createTempFile;
