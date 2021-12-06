const fs = require('fs');

const readStream = fs.createReadStream('./docs/stream.txt', 'utf8');
const writeStream = fs.createWriteStream('./docs/blog4.txt');

// readStream.on('data', (chunk) => {
//     console.log('___NEW CHUNK_____');

//     console.log(chunk);
//     writeStream.write('\n NEW CHUNK \n');
//     writeStream.write(chunk);
// });

// Shorter method

readStream.pipe(writeStream);