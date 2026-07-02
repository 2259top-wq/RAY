const fs = require('fs');
const path = require('path');

const htmlContent = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const appContent = fs.readFileSync(path.join(__dirname, '..', 'app.js'), 'utf8');

console.log('=== Checking for potentially dangerous .addEventListener on null ===');

// Match pattern: document.getElementById('some-id').addEventListener
const dangerousRegex = /document\.getElementById\(['"]([^'"]+)['"]\)\.addEventListener/g;
let match;
const dangerousIds = [];

while ((match = dangerousRegex.exec(appContent)) !== null) {
  const id = match[1];
  if (!htmlContent.includes(`id="${id}"`) && !htmlContent.includes(`id='${id}'`)) {
    dangerousIds.push(id);
  }
}

if (dangerousIds.length > 0) {
  console.log('❌ CRITICAL ERROR: Found direct addEventListener on IDs that do not exist in HTML (will cause webpage crash):');
  console.log(dangerousIds);
} else {
  console.log('✅ Success! No direct .addEventListener calls on missing IDs.');
}
