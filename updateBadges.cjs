const fs = require('fs');

const cssFiles = [
  'src/pages/Home.css',
  'src/pages/Contact.css',
  'src/components/Navbar.css',
  'src/components/Footer.css',
  'src/index.css'
];

cssFiles.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/rgba\(34, 197, 94/g, 'rgba(242, 140, 140');
    content = content.replace(/#22c55e/g, '#F28C8C'); // pulsing dot to pink
    content = content.replace(/#15803d/g, '#3E2723'); // text to dark brown
    fs.writeFileSync(file, content);
    console.log(`Updated green badges in ${file}`);
  }
});
