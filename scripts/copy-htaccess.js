// Ensures the Apache config lands in the export output (dotfiles from public/
// are not always copied by Next's static export).
const fs = require('fs')
try {
  fs.copyFileSync('public/.htaccess', 'out/.htaccess')
  console.log('copied .htaccess -> out/.htaccess')
} catch (e) {
  console.warn('skip .htaccess copy:', e.message)
}
