import tmp from 'tmp';
import fs from 'fs';
import path from 'path';
import moment from 'moment';

const isDev = process.env.NODE_ENV === 'development';

const devTempDir = path.join(__dirname, '..', '..', '..', '..', '/tmp');

// const prodTempDir = path.join(__dirname, '..', '..', '..', '/tmp');
const prodTempDir = path.join(__dirname, '..', '..', '..', '..', '..', '/tmp');

export const BASE_FILE_PATH = isDev ? devTempDir : prodTempDir;

const createTempFile = (fileContent: Uint8Array) => {
  console.log('__dirname', __dirname);
  return new Promise((resolve, reject) => {
    try {
      const date = moment().format('MM_DD_YYYY');
      const tmpBaseDir = path.join(BASE_FILE_PATH);
      if (!fs.existsSync(tmpBaseDir)) {
        fs.mkdirSync(tmpBaseDir);
      }
      const tmpDatedir = path.join(BASE_FILE_PATH, date);
      if (!fs.existsSync(tmpDatedir)) {
        fs.mkdirSync(tmpDatedir);
      }
      tmp.file(
        {
          postfix: '.pdf',
          tmpdir: tmpDatedir,
        },
        function _tempFileCreated(err, path, fd /*cleanupCallback*/) {
          if (err) throw err;
          console.log('File: ', path);
          console.log('Filedescriptor: ', fd);
          fs.appendFile(path, fileContent, () => {});
          resolve(path);
        }
      );
    } catch (error) {
      reject(error);
    }
  });
};

export default createTempFile;
