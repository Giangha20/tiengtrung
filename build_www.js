const fs = require('fs');
const path = require('path');

try {
  const rootDir = __dirname;
  const wwwDir = path.join(rootDir, 'www');

  if (!fs.existsSync(wwwDir)) {
    fs.mkdirSync(wwwDir, { recursive: true });
  }

  const excludeFiles = new Set([
    'server.js',
    'smoke-test.js',
    'build_www.js',
    'package.json',
    'package-lock.json',
    'capacitor.config.json',
    'vercel.json'
  ]);

  const excludeExts = new Set(['.env', '.log', '.md', '.txt']);

  const excludeDirs = new Set([
    'node_modules',
    'ios',
    'www',
    'secrets',
    '.git',
    '.github',
    '.vercel'
  ]);

  const files = fs.readdirSync(rootDir);

  for (const file of files) {
    if (file.startsWith('.')) continue;
    const fullPath = path.join(rootDir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      if (!excludeDirs.has(file)) {
        copyRecursive(fullPath, path.join(wwwDir, file));
      }
    } else if (stat.isFile()) {
      const ext = path.extname(file);
      if (!excludeFiles.has(file) && !excludeExts.has(ext)) {
        fs.copyFileSync(fullPath, path.join(wwwDir, file));
      }
    }
  }

  function copyRecursive(src, dest) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    const items = fs.readdirSync(src);
    for (const item of items) {
      const srcItem = path.join(src, item);
      const destItem = path.join(dest, item);
      const stat = fs.statSync(srcItem);
      if (stat.isDirectory()) {
        copyRecursive(srcItem, destItem);
      } else {
        fs.copyFileSync(srcItem, destItem);
      }
    }
  }

  console.log('Successfully built www directory for Capacitor!');
} catch (err) {
  console.error('Error building www directory:', err);
  process.exit(1);
}
