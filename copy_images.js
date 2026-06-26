const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\Admin\\.gemini\\antigravity\\brain';
const assetsDir = 'C:\\Users\\Admin\\.gemini\\antigravity\\scratch\\tarot-teaching\\assets';

function scanAndCopy(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      scanAndCopy(fullPath);
    } else if (file.startsWith('card_') && file.endsWith('.png')) {
      const match = file.match(/^card_(\d+)(?:_\d+)?\.png$/);
      if (match) {
        const cardId = parseInt(match[1]);
        if (cardId >= 22 && cardId <= 77) {
          const destName = `card_${cardId}.png`;
          const destPath = path.join(assetsDir, destName);
          
          let shouldCopy = true;
          if (fs.existsSync(destPath)) {
            const destStat = fs.statSync(destPath);
            if (destStat.size === stat.size) {
              shouldCopy = false;
            }
          }
          if (shouldCopy) {
            fs.copyFileSync(fullPath, destPath);
            console.log(`Copied ${file} to assets/${destName}`);
          }
        }
      }
    }
  }
}

try {
  if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
  }
  scanAndCopy(brainDir);
  console.log('Scan completed successfully.');
} catch (err) {
  console.error('Error during scan and copy:', err);
}
