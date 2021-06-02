const fs = require('fs');
const path = require('path');
const sprintf = require('sprintf-js').sprintf;

var counter = 0;

// Private helper functions ////////////////////////////////////////////////////

// Zero padded numbers can only be represented as strings.
// If you don't know what a zero-padded number is, read the
// Wikipedia entry on Leading Zeros and check out some of code links:
// https://www.google.com/search?q=what+is+a+zero+padded+number%3F

const zeroPaddedNumber = (num) => {
  return sprintf('%05d', num);
};

const readCounter = (callback) => {
  fs.readFile(exports.counterFile, (err, fileData) => {
    if (err) {
      callback(null, 0);
    } else {
      callback(null, Number(fileData));
    }
  });
};

const writeCounter = (count, callback) => {
  var counterString = zeroPaddedNumber(count);
  fs.writeFile(exports.counterFile, counterString, (err) => {
    if (err) {
      throw ('error writing counter');
    } else {
      callback(null, counterString);
    }
  });
};

// Public API - Fix this function //////////////////////////////////////////////

exports.getNextUniqueId = (callback) => {
  // readCounter
  readCounter((err, id) => {
    if (err) {
      throw ('error reading counter');
    } else {
      id++;
    }

    // writeCounter
    writeCounter(id, (err, counterString) => {
      if (err) {
        throw ('error writing counter');
      } else {
        callback(null, counterString);
        //return null ? null : counterString;
      }
    });
  });


  // writeCounter(count = readCounter(), (id) => {return null ? null : id});




  // counter = counter + 1; => readCounter
  // return zeroPaddedNumber(counter); => writeCounter
};

// POST REQUEST count.getNextUniqueID();
// inside getNextUniqueID method =>
// read - load current counter value, plus one => new counter
// write - input new counter: new id number => zeropaddedNumber





// Configuration -- DO NOT MODIFY //////////////////////////////////////////////

exports.counterFile = path.join(__dirname, 'counter.txt');

// /Users/shannon.toft/Documents/Hack_Reactor/hr-sfo134-cruddy-todo/test/counterTest.txt

//readCounter((err, counter) => {
//  if (err) throw ('error reading counter');
//  else
//  counter++;
//});
//writeCounter(counter, (err, counterString) => {
//  if (err) throw ('error writing counter');
//  else
//  callback(null, counterString);
//})

/**
 * writeFile('message.txt', data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
  });
 */