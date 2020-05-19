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

// fs.writeFile(path.join(__dirname, 'first-group', 'vasia.txt'),
//     'name: Vasia, \n age: 23',
//     err => {
//         console.log(err);
//     });

// fs.mkdir(path.join(__dirname, 'second-group'),
//     err => {
//         console.log(err);
//     });

// fs.writeFile(path.join(__dirname, 'second-group', 'nastia.txt'),
//     'name: Nastia, \n age: 25',
//     err => {
//         console.log(err);
//     });

// fs.writeFile(path.join(__dirname, 'second-group', 'valia.txt'),
//     'name: Valia, \n age: 24',
//     err => {
//         console.log(err);
//     });

function fileChanger(firstGroup, secondGroup) {
    fs.readdir(path.join(__dirname, firstGroup), (err, filesOfFirstGroup) => {
        if (err) {
            console.log(err);
        } else {
            console.log(filesOfFirstGroup);
            fs.readdir(path.join(__dirname, secondGroup), (err, filesOfSecondGroup) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(filesOfSecondGroup);
                    for (const files of filesOfFirstGroup) {
                        fs.rename(path.join(__dirname, firstGroup, files), path.join(__dirname, secondGroup, files),
                            err => {
                                console.log(err);
                            });
                    }
                    for (const files of filesOfSecondGroup) {
                        fs.rename(path.join(__dirname, secondGroup, files), path.join(__dirname, firstGroup, files),
                            err => {
                                console.log(err);
                            });
                    }
                }
            })
        }
    })
}

fileChanger('first-group', 'second-group');

// fs.readdir(path.join(__dirname, 'first-group'), (err, files) => {
//     console.log(files);
// });
//
// fs.readdir(path.join(__dirname, 'second-group'), (err, files) => {
//     console.log(files);
// });


