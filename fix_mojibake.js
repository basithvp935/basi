const fs = require('fs');
const filePath = 'c:/AL HAZMI/index.html';
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(/â€”/g, '—');
content = content.replace(/â—‹/g, '○');
content = content.replace(/â—\x8F/g, '●');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Fixed mojibake in index.html');
