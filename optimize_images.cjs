const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'public', 'images');

async function optimizeFolder(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      await optimizeFolder(fullPath);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        const fileNameNoExt = path.basename(file, ext);
        const outputPath = path.join(dir, `${fileNameNoExt}.webp`);
        
        console.log(`Optimizing: ${file} -> ${fileNameNoExt}.webp`);
        
        try {
          await sharp(fullPath)
            .resize({ width: 1600, withoutEnlargement: true })
            .webp({ quality: 80 })
            .toFile(outputPath);
          
          // Delete original file
          fs.unlinkSync(fullPath);
          console.log(`Deleted original: ${file}`);
        } catch (err) {
          console.error(`Error processing ${file}:`, err);
        }
      }
    }
  }
}

optimizeFolder(imagesDir)
  .then(() => console.log('Image optimization complete!'))
  .catch(err => console.error('Optimization failed:', err));
