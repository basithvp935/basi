const fs = require('fs');

const filePaths = ['c:/AL HAZMI/index.html', 'c:/AL HAZMI/index-ar.html'];

for (const filePath of filePaths) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Replace inline styles for yellow headings (#ccaa00) to dark blue (#2b3a4a) and font-weight 500
    
    // About Us (Line 146)
    content = content.replace(/font-size: 2\.8rem; font-weight: 600; color: #ccaa00; font-family: 'Playfair Display', serif;/g, 
                              "font-size: 2.8rem; font-weight: 500; color: #2b3a4a; font-family: 'Playfair Display', serif;");

    // Our Products (Line 442)
    content = content.replace(/font-size: 2\.8rem; font-weight: 600; color: #ccaa00;/g, 
                              "font-size: 2.8rem; font-weight: 500; color: #2b3a4a; font-family: 'Playfair Display', serif;");

    // Get in touch with us (Line 1113)
    content = content.replace(/color: #ccaa00; font-size: 3\.2rem; font-weight: 500; line-height: 1\.2;/g, 
                              "color: #2b3a4a; font-size: 3.2rem; font-weight: 500; line-height: 1.2; font-family: 'Playfair Display', serif;");

    // Timeline heading
    content = content.replace(/style="font-size: 2\.8rem; font-weight: 600; color: #ccaa00; font-family: 'Playfair Display', serif;"/g, 
                              'style="font-size: 2.8rem; font-weight: 500; color: #2b3a4a; font-family: \'Playfair Display\', serif;"');

    // Some others like Local Branches maybe?
    // Let's also do a generic replace for any remaining <h2 ... style="..."> containing color: #ccaa00
    content = content.replace(/<h2([^>]+)color:\s*#ccaa00;([^>]*)/g, (match, p1, p2) => {
        let newStyle = match.replace(/color:\s*#ccaa00;/g, 'color: #2b3a4a;');
        newStyle = newStyle.replace(/font-weight:\s*600;/g, 'font-weight: 500;');
        if (!newStyle.includes('font-family')) {
            newStyle = newStyle.replace(/style="/, 'style="font-family: \'Playfair Display\', serif; ');
        }
        return newStyle;
    });

    fs.writeFileSync(filePath, content, 'utf8');
}
console.log('HTML files updated successfully.');
