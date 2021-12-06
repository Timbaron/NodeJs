const fs = require('fs');
// Reading files
// fs.readFile('./docs/blog.txt', (err , data) => {
//     if(err){
//         console.log(err);
//     }
//         console.log(data.toString());
// });
// writing files
// fs.writeFile('./docs/blog.txt','Hello world', () => {
//     console.log('File written');
// });
// fs.writeFile('./docs/blog1.txt','Hello again', () => {
//     console.log('File written');
// });
// directories

    // Check if file exists

// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets', (err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log('Directory created');
//     });
// }
// else{
//     fs.rmdir('./assets', (err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log('Directory deleted');
//     });
// };

// deleting files

if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err) => {
        if(err){
            console.log(err);
        }
        console.log('File deleted');
    })
}
