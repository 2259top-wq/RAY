const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\Admin\\.gemini\\antigravity\\brain';
const assetsDir = 'C:\\Users\\Admin\\.gemini\\antigravity\\scratch\\tarot-teaching\\assets';

function scanAndCopy(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    let stat;
    try {
      stat = fs.statSync(fullPath);
    } catch (e) {
      continue; // Skip if file is being written or locked
    }
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
            try {
              fs.copyFileSync(fullPath, destPath);
              console.log(`[${new Date().toISOString()}] Copied ${file} to assets/${destName}`);
            } catch (e) {
              console.error(`Failed to copy ${file}:`, e);
            }
          }
        }
      }
    }
  }
}

console.log('Watcher daemon started. Monitoring brain directory for new tarot card drawings...');
setInterval(() => {
  try {
    scanAndCopy(brainDir);
  } catch (err) {
    console.error('Error during monitor scan:', err);
  }
}, 10000); // Scan every 10 seconds
