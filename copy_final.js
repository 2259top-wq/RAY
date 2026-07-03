const fs = require('fs');
const path = require('path');

const src20 = 'C:\\Users\\Admin\\.gemini\\antigravity\\brain\\52c14eca-532d-4e81-833c-c36cc0f4f610\\card_20_1783030639763.png';
const dest20 = path.join(__dirname, 'assets', 'card_20.png');

const src21 = 'C:\\Users\\Admin\\.gemini\\antigravity\\brain\\52c14eca-532d-4e81-833c-c36cc0f4f610\\card_21_1783030653499.png';
const dest21 = path.join(__dirname, 'assets', 'card_21.png');

fs.copyFileSync(src20, dest20);
console.log('Copied card_20');

fs.copyFileSync(src21, dest21);
console.log('Copied card_21');
