const fs = require('fs');

// 1. Update CSS
let css = fs.readFileSync('c:/AL HAZMI/styles.css', 'utf8');

// Change in .services-grid-title, .clients-title, and .section-title h2
css = css.replace(/\.services-grid-title\s*\{[\s\S]*?\}/, match => match.replace(/color:\s*#2b3a4a;/, 'color: #ccaa00;'));
css = css.replace(/\.clients-title\s*\{[\s\S]*?\}/, match => match.replace(/color:\s*#2b3a4a;/, 'color: #ccaa00;'));
css = css.replace(/\.section-title h2\s*\{[\s\S]*?\}/, match => match.replace(/color:\s*#2b3a4a;/, 'color: #ccaa00;'));

fs.writeFileSync('c:/AL HAZMI/styles.css', css, 'utf8');

// 2. Update HTML
const filePaths = ['c:/AL HAZMI/index.html', 'c:/AL HAZMI/index-ar.html'];

for (const filePath of filePaths) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Replace inline styles #2b3a4a -> #ccaa00 for headings
    // Let's do a generic replace for any <h2 ... style="..."> containing color: #2b3a4a
    content = content.replace(/<h2([^>]+)color:\s*#2b3a4a;([^>]*)/g, (match, p1, p2) => {
        return match.replace(/color:\s*#2b3a4a;/g, 'color: #ccaa00;');
    });

    fs.writeFileSync(filePath, content, 'utf8');
}

console.log('Heading colors reverted to yellow.');
