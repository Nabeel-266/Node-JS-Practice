const fs = require('fs');


// Working Synchronously File Read
// console.log("Starting");

// const readMyFilesData = fs.readFileSync('./My-Files/index.txt', 'utf-8');
// console.log(readMyFilesData);

// console.log("End");


// Working Asynchronously File Read
// console.log("Starting");

// fs.readFile('./My-Files/index.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err);
//     }

//     if (data) {
//         console.log(data)
//     }
// });

// console.log("End");


// // Working Synchronously File Write
// console.log("Starting");

// const updatedText = "My name is Muhammad Nabeel";
// fs.writeFileSync('./My-Files/index.txt', updatedText);
// console.log("Update text successfully");

// console.log("End");


// Working Asynchronously File Write
console.log("Starting");

const updatedText = "My name is Muhammad Nabeel and i am 23 years old";
fs.writeFile("./My-Files/index.txt", updatedText, (err) => {
    if (err) throw err;
    console.log('Update text successfully');
});

console.log("End");