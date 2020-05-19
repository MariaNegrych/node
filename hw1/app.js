const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, 'first-group'),
//     err => {
//     console.log(err);
// });
//
// fs.writeFile(path.join(__dirname, 'first-group', 'masha.txt'),
//     'name: Masha, \n age: 24',
//     err => {
//     console.log(err);
// });
//
// fs.writeFile(path.join(__dirname, 'first-group', 'vasia.txt'),
//     'name: Vasia, \n age: 23',
//     err => {
//         console.log(err);
//     });
//
// fs.mkdir(path.join(__dirname, 'second-group'),
//     err => {
//         console.log(err);
//     });
//
// fs.writeFile(path.join(__dirname, 'second-group', 'nastia.txt'),
//     'name: Nastia, \n age: 25',
//     err => {
//         console.log(err);
//     });
//
// fs.writeFile(path.join(__dirname, 'second-group', 'valia.txt'),
//     'name: Valia, \n age: 24',
//     err => {
//         console.log(err);
//     });

function fileChanger(fromDir, toDir) {
    fs.readdir(fromDir, (err, files) => {
        if (err) {
            console.log(err);
        } else {
            console.log(files);
            for (const file of files) {
                fs.rename(path.join(fromDir, file), path.join(toDir, file), err => {
                    if (err) {
                        console.log(err);
                    }
                });
            }
        }
    });
}

function resolver(firstDir, secondDir) {
    fileChanger(firstDir, secondDir);
    fileChanger(secondDir, firstDir);
}

const firstDir = path.join(__dirname,'first-group');
const secondDir = path.join(__dirname,'second-group');

resolver(firstDir, secondDir);

// fs.readdir(path.join(__dirname, 'first-group'), (err, files) => {
//     console.log(files);
// });
//
// fs.readdir(path.join(__dirname, 'second-group'), (err, files) => {
//     console.log(files);
// });


