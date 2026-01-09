/**
 * SVG 转 PNG - 使用 sharp 库
 * 运行前先安装: npm install -D sharp
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const iconsDir = path.join(__dirname, 'src', 'assets', 'icons');

const icons = [
  { name: 'home' },
  { name: 'routes' },
  { name: 'records' },
  { name: 'companion' },
  { name: 'profile' }
];

async function convertIcons() {
  for (const icon of icons) {
    // 转换普通状态
    const normalSvg = fs.readFileSync(path.join(iconsDir, `${icon.name}.svg`), 'utf8');
    await sharp(Buffer.from(normalSvg))
      .resize(81, 81)
      .png()
      .toFile(path.join(iconsDir, `${icon.name}.png`));
    console.log(`✓ Converted ${icon.name}.png`);

    // 转换激活状态
    const activeSvg = fs.readFileSync(path.join(iconsDir, `${icon.name}-active.svg`), 'utf8');
    await sharp(Buffer.from(activeSvg))
      .resize(81, 81)
      .png()
      .toFile(path.join(iconsDir, `${icon.name}-active.png`));
    console.log(`✓ Converted ${icon.name}-active.png`);
  }
  console.log('\n所有图标转换完成！');
}

convertIcons().catch(console.error);
