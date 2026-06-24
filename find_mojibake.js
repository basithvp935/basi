const fs = require('fs');
let text = fs.readFileSync('c:/AL HAZMI/index.html', 'utf8');
let lines = text.split('\n');
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('Ø')) {
        console.log('Line ' + i + ': ' + lines[i].trim());
    }
}
