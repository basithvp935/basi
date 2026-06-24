const fs = require('fs');
let text = fs.readFileSync('c:/AL HAZMI/index-ar.html', 'utf8');
console.log('File size:', text.length);
console.log('Contains mojibake from screenshot:', text.includes('Ø§Ù„'));
