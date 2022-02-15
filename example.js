console.log("evaluating example.js");

var invisible = function () {
  console.log("invisible");
}

invisible();

exports.message = "hi";

exports.say = function () {
  console.log(exports.message);
}


// console.log(module);