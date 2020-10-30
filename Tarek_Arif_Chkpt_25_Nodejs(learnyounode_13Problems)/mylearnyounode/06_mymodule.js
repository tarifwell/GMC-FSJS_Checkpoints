const fs = require('fs');
const path = require('path');

module.exports = (dir, ext, callback) => {
  //adding dot to extension;
  ext = '.' + ext; // or: ext = `.${ext}`;

  fs.readdir(dir, (err, list) =>{
    if(err) return callback(err);

    const filtered = list.filter(file => {
      return path.extname(file) === ext;
    });

    return callback(null, filtered);
  });
}
