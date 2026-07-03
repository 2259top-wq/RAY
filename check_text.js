const fs = require('fs');

function checkFile(filename) {
    console.log(`Checking ${filename}...`);
    try {
        const content = fs.readFileSync(filename, 'utf8');
        console.log(`File size: ${content.length} bytes`);
        const todos = (content.match(/TODO/gi) || []).length;
        const ellipses = (content.match(/\.\.\./g) || []).length;
        const undefinedCount = (content.match(/undefined/g) || []).length;
        console.log(`TODOs: ${todos}`);
        console.log(`Ellipses (...): ${ellipses}`);
        console.log(`undefineds: ${undefinedCount}`);
        
        // Let's also parse it to see if it's an array of 22 and 56 objects
        // The files export arrays or constants. We can just evaluate them.
        
    } catch(e) {
        console.log('Error reading', filename, e);
    }
}

checkFile('cards.js');
checkFile('minor_cards.js');
