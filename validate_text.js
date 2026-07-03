const fs = require('fs');

function checkArray(arr, nameStr) {
    console.log(`Checking ${nameStr}, ${arr.length} cards.`);
    let complete = true;
    arr.forEach(c => {
        if (!c.name || !c.description || !c.keywords || !c.upright || !c.reversed) {
            console.log(`Missing top-level field in card ${c.id}: ${c.name}`);
            complete = false;
        } else {
            if (!c.upright.meaning || !c.upright.love || !c.upright.career || !c.upright.advice) {
                console.log(`Missing upright field in card ${c.id}: ${c.name}`);
                complete = false;
            }
            if (!c.reversed.meaning || !c.reversed.love || !c.reversed.career || !c.reversed.advice) {
                console.log(`Missing reversed field in card ${c.id}: ${c.name}`);
                complete = false;
            }
        }
    });
    if (complete) console.log(`${nameStr}: All cards have full text populated.`);
}

try {
    const minorContent = fs.readFileSync('minor_cards.js', 'utf8');
    const minorMatch = minorContent.match(/const\s+minorCards\s*=\s*(\[[\s\S]*?\]);/);
    if(minorMatch) checkArray(eval(minorMatch[1]), 'Minor Arcana');
    else console.log('Could not find minorCards array in minor_cards.js');
} catch(e) { console.log(e); }
