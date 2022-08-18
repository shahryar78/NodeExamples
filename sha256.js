const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})
readline.question(`enter massage to be secured: `, data =>{
    console.log(` data: ${data}`);
    readline.close();
});