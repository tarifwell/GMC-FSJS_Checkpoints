let CLI = process.argv;
let sum = 0;

//console.log(process.argv);

for (let i = 2; i < CLI.length; i++)
    sum += +CLI[i];    // or Number(CLI[i]);

console.log(sum);

