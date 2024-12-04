const fs = require('fs');
const path = require('path');

const escapeDir = (dir) => {
  if (dir.match(/\.\.\//g) === null) {
    return dir;
  }
  return '';
};

function removeDirPromise(dir) {
  return new Promise(function (resolve) {
    //先读文件夹
    fs.stat(escapeDir(dir), function (err, stat) {
      if (stat) {
        if (stat.isDirectory()) {
          fs.readdir(escapeDir(dir), function (err, _files) {
            let files = _files;
            files = files.map((file) => path.join(dir, file)); // a/b  a/m
            files = files.map((file) => removeDirPromise(file)); //这时候变成了promise
            Promise.all(files).then(function () {
              fs.rmdir(escapeDir(dir), resolve);
            });
          });
        } else {
          fs.unlink(escapeDir(dir), resolve);
        }
      }
    });
  });
}

// 删除每个应用src文件夹里面的.umi和.umi-production
const clean = async () => {
  removeDirPromise(path.join(process.cwd(), 'dist'));
};

clean();
