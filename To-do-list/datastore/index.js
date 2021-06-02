const fs = require('fs');
const path = require('path');
const _ = require('underscore');
const counter = require('./counter');

var items = {};

// Public API - Fix these CRUD functions ///////////////////////////////////////

exports.create = (text, callback) => {
  //items[id] = text;
  //var id = counter.getNextUniqueId();
  counter.getNextUniqueId((err, id) => {
    //console.log(`${exports.dataDir}` + '/' + `${id}`);
    var newFile = (`${exports.dataDir}` + '/' + `${id}` + '.txt');
    fs.writeFile(newFile, text, (err) => {
      if (err) {
        throw ('error creating');
      } else {
        callback(null, { id, text }); // const { id, text } = data; // data = {id:xxx, text:xxx}
      }
    });
  });


  //console.log('Data directory: ', `${exports.dataDir}`);
  //console.log(`${exports.dataDir}` + '/' + `${id}` + '.txt');
  //console.log('new path: ', directory);

  //callback(null, { id, text });
};

// dataDir give a 'path' - file as variable name for a array storay
// push 'text' inside the array


/**
 *counter.getNextUniqueId((err, id))
 *
 *  fs.writeFile((`${exports.dataDir}` + '/' + `${id}`), text, (err) => {
      if (err) {
        throw ('error creating');
      } else {
        callback(null, { id, text });
      }
    });


 */

exports.readAll = (callback) => {
  fs.readdir(exports.dataDir, (err, files) => {
    var data = _.map(files, (file) => {
      var id = (file.slice(0, 5));
      return { id, text };
    });
    callback(null, data);
  });


  // var data = _.map(items, (text, id) => {
  //   return { id, text };
  // });
  // callback(null, data);
};

// fs.readdir(exports.dataDir, (err, files) => {
//  var data = _.map(files, (file) => {
//   return { id, text };
//  });
//  callback(null, data);
// });


exports.readOne = (id, callback) => {
  var fileName = (`${exports.dataDir}` + '/' + `${id}` + '.txt');
  fs.readFile(fileName, 'utf8', (err, data) => {
    console.log('DATA: ', data);
    console.log('DATATYPE: ', typeof data);
    if (err) {
      callback(new Error(`No item with id: ${id}`));
    } else {
      callback(null, { id: id, text: data });
    }
  });

  //readFile('/etc/passwd', 'utf8', callback);

  // var text = items[id];
  // if (!text) {
  //   callback(new Error(`No item with id: ${id}`));
  // } else {
  //   callback(null, { id, text });
  // }
};




exports.update = (id, text, callback) => {
  var fileName = (`${exports.dataDir}` + '/' + `${id}` + '.txt');
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      callback(new Error(`No item with id: ${id}`));
    } else {
      fs.writeFile(fileName, text, (err) => {
        if (err) {
          throw ('error creating');
        } else {
          callback(null, { id, text });
        }
      });
    }
  });

  // var item = items[id];
  // if (!item) {
  //   callback(new Error(`No item with id: ${id}`));
  // } else {
  //   items[id] = text;
  //   callback(null, { id, text });
  // }
};

exports.delete = (id, callback) => {
  var fileName = (`${exports.dataDir}` + '/' + `${id}` + '.txt');
  fs.unlink(fileName, (err) => {
    if (err) {
      callback(new Error(`No item with id: ${id}`));
    } else {
      callback();
    }
  });




  // var item = items[id]; //items[id] = 00001 = item
  // delete items[id]; //items[id] = undefined; item = 00001
  // if (!item) {
  //   // report an error if item not found
  //   callback(new Error(`No item with id: ${id}`));
  // } else {
  //   callback();
  // }
};





// Config+Initialization code -- DO NOT MODIFY /////////////////////////////////

exports.dataDir = path.join(__dirname, 'data');

exports.initialize = () => {
  if (!fs.existsSync(exports.dataDir)) {
    fs.mkdirSync(exports.dataDir);
  }
};
