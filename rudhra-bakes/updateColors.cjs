const fs = require('fs');

const cssFiles = [
  'src/pages/Home.css',
  'src/pages/Menu.css',
  'src/pages/About.css',
  'src/pages/Gallery.css',
  'src/pages/Reviews.css',
  'src/pages/Contact.css',
  'src/components/Navbar.css',
  'src/components/Footer.css',
  'src/components/MobileStickyCTA.css'
];

cssFiles.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/198, 160, 82/g, '139, 94, 60'); // Primary brown
    content = content.replace(/212, 176, 106/g, '242, 140, 140'); // Light pink accent
    content = content.replace(/26, 20, 10/g, '62, 39, 35'); // Dark overlay 1
    content = content.replace(/40, 32, 18/g, '78, 52, 46'); // Dark overlay 2
    content = content.replace(/60, 48, 25/g, '93, 64, 55'); // Dark overlay 3
    content = content.replace(/255, 253, 248/g, '255, 245, 225'); // Cream background
    fs.writeFileSync(file, content);
    console.log(`Updated RGB values in ${file}`);
  }
});

// Update index.css strictly
const indexFile = 'src/index.css';
if (fs.existsSync(indexFile)) {
  let indexCss = fs.readFileSync(indexFile, 'utf8');

  // Replace luxury golden colors
  indexCss = indexCss.replace('--color-primary: #8B5E3C;', '--color-primary: #8B5E3C;'); // Idempotent check, just in case
  indexCss = indexCss.replace('--color-primary: #1A1A1A;', '--color-primary: #8B5E3C;');
  indexCss = indexCss.replace('--color-primary-light: #333333;', '--color-primary-light: #A17351;');
  indexCss = indexCss.replace('--color-secondary: #FAFAFA;', '--color-secondary: #FFF5E1;');
  indexCss = indexCss.replace('--color-accent: #C6A052;', '--color-accent: #F28C8C;');
  indexCss = indexCss.replace('--color-accent-light: #D4B06A;', '--color-accent-light: #F6A5A5;');
  indexCss = indexCss.replace('--color-highlight: #E5C158;', '--color-highlight: #F28C8C;');

  // Replace generic backgrounds
  indexCss = indexCss.replace('--color-bg: #FAFAFA;', '--color-bg: #FFF5E1;');
  indexCss = indexCss.replace('--color-text: #1A1A1A;', '--color-text: #3E2723;');
  indexCss = indexCss.replace('--color-text-light: #4A4A4A;', '--color-text-light: #5C4033;');
  indexCss = indexCss.replace('--color-text-muted: #737373;', '--color-text-muted: #8D6E63;');

  // Replace Gradients
  indexCss = indexCss.replace(/--gradient-gold: linear-gradient.*/g, '--gradient-gold: linear-gradient(135deg, #F28C8C 0%, #F6A5A5 100%);');
  indexCss = indexCss.replace(/--gradient-gold-dark: linear-gradient.*/g, '--gradient-gold-dark: linear-gradient(135deg, #E57373 0%, #F28C8C 100%);');
  indexCss = indexCss.replace(/--gradient-dark: linear-gradient.*/g, '--gradient-dark: linear-gradient(135deg, #4E342E 0%, #3E2723 100%);');
  indexCss = indexCss.replace(/--gradient-cream: linear-gradient.*/g, '--gradient-cream: linear-gradient(135deg, #FFFFFF 0%, #FFF5E1 100%);');
  indexCss = indexCss.replace(/--gradient-primary: linear-gradient.*/g, '--gradient-primary: linear-gradient(135deg, #8B5E3C 0%, #6D4C31 100%);');

  fs.writeFileSync(indexFile, indexCss);
  console.log(`Updated CSS variables in ${indexFile}`);
}

console.log('All updates complete!');
