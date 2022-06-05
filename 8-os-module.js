const os = require('os');

const user = os.userInfo();

console.log(user);

console.log(`The system uptime is : ${os.uptime()/60/60}`)

const currentos = {
    name: os.type(),
    release : os.release(),
    totalMem: os.totalmem(),
    freemem: os.freemem()
}

console.log(currentos);