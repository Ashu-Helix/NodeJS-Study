const path = require('path');

let baseName = path.basename('/Users/Refsnes/demo_path.js');
console.log("Base Name: "+baseName);

console.log("; (semicolon) for Windows : (colon) for POSIX"+path.delimiter);

console.log("\ndirname returns directory path: "+path.dirname('C:/Windows/System32/cmd.exe'))

console.log("\nreturns extention: "+path.extname('C:/Windows/System32/cmd.exe'))


var obj = { dir: 'C:\\Users\\Refsnes', base: 'demo_path.js' }
console.log("\nformat path objects into path string: "+path.format(obj))


console.log("\npath.isAbsolute() method returns true if the specified path is an absolute path, otherwise false")
console.log(path.isAbsolute('/test/demo_path.js')); //true
console.log(path.isAbsolute('test/demo_path.js')); //false
console.log(path.isAbsolute('C:\\test\\demo_path.js')); //true

console.log("\npath.join() method joins the specified path segments into one path");
console.log(path.join('Users', 'Refsnes', 'demo_path.js'))
console.log(path.join('Users', 'Refsnes', '..' ,'demo_path.js'))

console.log("\npath.normalize() method resolves the specified path, fixing '..','\\\\' etc")
console.log(path.normalize('Users/Refsnes/../Jackson'))
console.log(path.normalize('C:\\test\\demo_path.js'))

console.log("\nFormats a path string into a path object")
console.log(path.parse('path module.js'))

console.log("\nReturns an object containing POSIX specific properties and methods")
console.log(path.posix);

console.log("\nFormats a path string into a path object")
console.log(path.relative('D:/TYBCA', 'D:/TYBCA/sem 6/adv java n adv wt sol prac/q1'))


console.log("\nThe path.resolve() method is used to resolve a sequence of path-segments to an absolute path. It works by processing the sequence of paths from right to left, prepending each of the paths until the absolute path is created. The resulting path is normalized and trailing slashes are removed as required.")
console.log("If no path segments are given as parameters, then the absolute path of the current working directory is used.")
console.log(path.resolve("NodeJS", "path module.js"))

