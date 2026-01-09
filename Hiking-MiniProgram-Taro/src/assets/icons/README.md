# TabBar 图标说明

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
1. 在浏览器中打开 `convert.html`
2. 点击每个图标的"下载 PNG"按钮
3. 将下载的文件移动到当前目录

### 方式3: 命令行工具
```bash
# 安装 sharp
npm install -D sharp

# 运行转换脚本
node convert-icons-sharp.js
```

## 图标颜色

- 普通状态: #9ca3af (灰色)
- 激活状态: #10b981 (绿色)

## 当前状态

✅ SVG 图标已创建
⏳ 需要转换为 PNG 格式
