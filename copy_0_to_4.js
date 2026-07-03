const fs = require('fs');
const path = require('path');

const map = {
  'card_0_fool_v2_1782930711507.png': 'card_0.png',
  'card_1_magician_v2_1782930728556.png': 'card_1.png',
  'card_2_priestess_v2_1782930747337.png': 'card_2.png',
  'card_3_empress_v2_1782930761729.png': 'card_3.png',
  'card_4_emperor_v2_1782930776556.png': 'card_4.png'
};

const srcDir = 'C:\\Users\\Admin\\.gemini\\antigravity\\brain\\52c14eca-532d-4e81-833c-c36cc0f4f610';
const destDir = path.join(__dirname, 'assets');

for (const [srcName, destName] of Object.entries(map)) {
  const src = path.join(srcDir, srcName);
  const dest = path.join(destDir, destName);
  fs.copyFileSync(src, dest);
  console.log(`Copied ${srcName} to ${destName}`);
}
