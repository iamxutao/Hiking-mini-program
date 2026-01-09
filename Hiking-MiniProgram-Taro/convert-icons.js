/**
 * SVG 转 PNG 自动转换脚本
 * 运行: node convert-icons.js
 */

const fs = require('fs');
const path = require('path');

const iconsDir = path.join(__dirname, 'src', 'assets', 'icons');

// 图标定义
const icons = [
  { name: 'home', label: '首页' },
  { name: 'routes', label: '路线' },
  { name: 'records', label: '记录' },
  { name: 'companion', label: '结伴' },
  { name: 'profile', label: '我的' }
];

// SVG 内容
const svgContent = {
  home: {
    normal: `<svg xmlns="http://www.w3.org/2000/svg" width="81" height="81" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    active: `<svg xmlns="http://www.w3.org/2000/svg" width="81" height="81" viewBox="0 0 24 24" fill="#10b981" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`
  },
  routes: {
    normal: `<svg xmlns="http://www.w3.org/2000/svg" width="81" height="81" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"/><circle cx="3" cy="11" r="2"/><circle cx="22" cy="2" r="2"/><circle cx="13" cy="21" r="2"/><circle cx="11" cy="13" r="2"/></svg>`,
    active: `<svg xmlns="http://www.w3.org/2000/svg" width="81" height="81" viewBox="0 0 24 24" fill="#10b981" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"/><circle cx="3" cy="11" r="2"/><circle cx="22" cy="2" r="2"/><circle cx="13" cy="21" r="2"/><circle cx="11" cy="13" r="2"/></svg>`
  },
  records: {
    normal: `<svg xmlns="http://www.w3.org/2000/svg" width="81" height="81" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
    active: `<svg xmlns="http://www.w3.org/2000/svg" width="81" height="81" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`
  },
  companion: {
    normal: `<svg xmlns="http://www.w3.org/2000/svg" width="81" height="81" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    active: `<svg xmlns="http://www.w3.org/2000/svg" width="81" height="81" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`
  },
  profile: {
    normal: `<svg xmlns="http://www.w3.org/2000/svg" width="81" height="81" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
    active: `<svg xmlns="http://www.w3.org/2000/svg" width="81" height="81" viewBox="0 0 24 24" fill="#10b981" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`
  }
};

// 方案1：创建简单的纯色 PNG 图标（使用 canvas 风格的 base64）
function createSimplePngIcon(color, emoji) {
  // 创建一个简单的纯色块作为占位符
  const size = 81;
  const header = Buffer.from([
    0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A  // PNG signature
  ]);

  // 注意：这是一个简化版本，实际需要完整的 PNG 编码
  // 这里我们使用最简单的方式：创建一个最小的有效 PNG 文件
  return null; // 略过，建议使用方案2或方案3
}

// 方案2：将 SVG 转换为 Data URI 格式的说明文件
function generateInstructions() {
  console.log('========================================');
  console.log('TabBar 图标转换说明');
  console.log('========================================\n');

  console.log('SVG 图标已生成在 src/assets/icons/ 目录\n');

  console.log('请选择以下方式之一将 SVG 转换为 PNG:\n');

  console.log('方式1: 使用在线转换工具（推荐）');
  console.log('  访问: https://cloudconvert.com/svg-to-png');
  console.log('  或: https://convertio.co/zh/svg-png/\n');

  console.log('方式2: 使用本地 HTML 工具');
  console.log('  1. 在浏览器中打开: src/assets/icons/convert.html');
  console.log('  2. 点击每个图标的"下载 PNG"按钮');
  console.log('  3. 将下载的文件移动到 src/assets/icons/ 目录\n');

  console.log('方式3: 使用命令行工具（需要安装 sharp）');
  console.log('  npm install -D sharp');
  console.log('  node convert-icons-sharp.js\n');

  console.log('需要的文件列表:');
  icons.forEach(icon => {
    console.log(`  ✓ ${icon.name}.png`);
    console.log(`  ✓ ${icon.name}-active.png`);
  });

  console.log('\n文件规格: 81x81px PNG 格式\n');

  console.log('========================================\n');
}

// 方案3：创建一个基于 sharp 的转换脚本
function createSharpScript() {
  const script = `/**
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
    const normalSvg = fs.readFileSync(path.join(iconsDir, \`\${icon.name}.svg\`), 'utf8');
    await sharp(Buffer.from(normalSvg))
      .resize(81, 81)
      .png()
      .toFile(path.join(iconsDir, \`\${icon.name}.png\`));
    console.log(\`✓ Converted \${icon.name}.png\`);

    // 转换激活状态
    const activeSvg = fs.readFileSync(path.join(iconsDir, \`\${icon.name}-active.svg\`), 'utf8');
    await sharp(Buffer.from(activeSvg))
      .resize(81, 81)
      .png()
      .toFile(path.join(iconsDir, \`\${icon.name}-active.png\`));
    console.log(\`✓ Converted \${icon.name}-active.png\`);
  }
  console.log('\\n所有图标转换完成！');
}

convertIcons().catch(console.error);
`;

  fs.writeFileSync(path.join(__dirname, 'convert-icons-sharp.js'), script);
  console.log('已创建 convert-icons-sharp.js 脚本');
}

// 主函数
function main() {
  generateInstructions();
  createSharpScript();

  // 保存转换说明到文件
  const readmePath = path.join(iconsDir, 'README.md');
  const readmeContent = `# TabBar 图标说明

## 需要的文件

每个 TabBar 项需要两个 PNG 图标（81x81px）：

- home.png, home-active.png - 首页
- routes.png, routes-active.png - 路线
- records.png, records-active.png - 记录
- companion.png, companion-active.png - 结伴
- profile.png, profile-active.png - 我的

## 转换方式

### 方式1: 在线工具（推荐）
访问以下网站将 SVG 转换为 PNG：
- https://cloudconvert.com/svg-to-png
- https://convertio.co/zh/svg-png/

设置：尺寸 81x81px，格式 PNG

### 方式2: 本地 HTML 工具
1. 在浏览器中打开 \`convert.html\`
2. 点击每个图标的"下载 PNG"按钮
3. 将下载的文件移动到当前目录

### 方式3: 命令行工具
\`\`\`bash
# 安装 sharp
npm install -D sharp

# 运行转换脚本
node convert-icons-sharp.js
\`\`\`

## 图标颜色

- 普通状态: #9ca3af (灰色)
- 激活状态: #10b981 (绿色)

## 当前状态

✅ SVG 图标已创建
⏳ 需要转换为 PNG 格式
`;

  fs.writeFileSync(readmePath, readmeContent);
  console.log(`已更新 ${readmePath}`);
}

main();
