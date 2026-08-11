const prefix = '__unique_id__'; // REPLACE THIS WITH YOUR PLUGIN'S UNIQUE ID, LOWERCASE

const replaceWith = `.${prefix}`;
const searchFor = '.flowy-ns';
const codeToInject = `const prefix = '${prefix}';\n`;

const fs = require('fs');
const path = require('path');

const targetScriptsDir = 'app/vendor/edesacee/flowy-core/src/scripts'; 
const targetStylesDir = 'app/vendor/edesacee/flowy-core/src/styles'; 

function processScriptsDirectory(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    
    if (fs.statSync(fullPath).isDirectory()) {
      // Recurse into subfolders
      processDirectory(fullPath);
    } else if (file.endsWith('.js')) {
      const originalContent = fs.readFileSync(fullPath, 'utf8');
      
      // Avoid duplicate injection if script runs multiple times
      if (!originalContent.startsWith(codeToInject)) {
        const updatedContent = codeToInject + originalContent;
        fs.writeFileSync(fullPath, updatedContent, 'utf8');
        console.log(`Updated: ${fullPath}`);
      }
    }
  });
}

processScriptsDirectory(targetScriptsDir);
console.log('All JavaScript files updated successfully!');

///////////////////////////////////////////////////////////////

function processStylesDirectory(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    
    if (fs.statSync(fullPath).isDirectory()) {
      // Recurse into subfolders
      processDirectory(fullPath);
    } else if (file.endsWith('.css')) {
      const originalContent = fs.readFileSync(fullPath, 'utf8');
      
      // Check if the file actually contains the target string
      if (originalContent.includes(searchFor)) {
        // Use .replaceAll() to replace every instance in the file
        const updatedContent = originalContent.replaceAll(searchFor, replaceWith);
        
        fs.writeFileSync(fullPath, updatedContent, 'utf8');
        console.log(`Replaced string in: ${fullPath}`);
      }
    }
  });
}

processStylesDirectory(targetStylesDir);
console.log('Find and replace completed!');
