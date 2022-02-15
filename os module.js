const os = require("os");

let totalMemory = os.totalmem();
let freeMemory = os.freemem();

console.log("totlamem() returns the number of total memory of the system")
console.log("freemem() returns the number of free memory of the system")
console.log(`Total Memory: ${totalMemory} and Free Memory: ${freeMemory}`);

console.log("\narch()	returns the operating system CPU architecture")
console.log(os.arch());

console.log("\nconstants returns an object containing the operating system's constants for process signals, error cotes etc")
console.log(os.constants)

console.log("\ncpus()	returns an array containing information about the computer's CPUs")
console.log(os.cpus());

console.log("\nendianness() returns the endianness of the CPU")
console.log(os.endianness())

console.log("\nEOL returns the end-of-line marker for the current operating system")
console.log(os.EOL)

console.log("\nhostname() returns the hostname of the operating system")
console.log(os.hostname())

console.log("\nloadavg() returns an array containing the load averages, (1, 5, and 15 minutes)")
console.log(os.loadavg())

console.log("\nnetworkInterfaces() returns the network interfaces that has a network address")
console.log(os.networkInterfaces())

console.log("\nplatform() returns information about the operating system's platform")
console.log(os.platform())

console.log("\nrelease() returns information about the operating system's release")
console.log(os.release())

console.log("\ntmpdir()	returns the operating system's default directory for temporary files")
console.log(os.tmpdir())

console.log("\ntype() returns the name of the operating system")
console.log(os.type())

console.log("\nuptime() returns the uptime of the operating system, in seconds")
console.log(os.uptime())

console.log("userInfo()	Returns information about the current user")
console.log(os.userInfo())