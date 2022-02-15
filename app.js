var sayHello = function(name) {
    console.log("Hello "+name);
}

sayHello("ABC");

global.setTimeout(() => {
    console.log("SetTimeout Performed");
}, 2000);

var i = 1;

// global.setInterval(() => {
//     console.log("SetInteval Performed "+i);
//     i =i+1;
// }, 10);

console.log("i: "+i)
console.log("In node Variable didn't assign to global Object like browsers window object: "+i)

module.exports  ={
    name: 'GeeksforGeeks',
    website: 'https://geeksforgeeks.org'
};