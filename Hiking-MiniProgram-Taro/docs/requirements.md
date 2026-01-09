# 徒步小程序需求文档

## 1. 项目概述

### 1.1 项目背景
本项目是基于现有 React + Vite 徒步小程序原型重新构建的微信小程序版本，使用 Taro 框架实现一比一还原原型的设计、功能和交互。

### 1.2 项目目标
- 将 React 原型迁移为微信小程序
- **保持与原型完全一致的设计、布局、间距、图标和图片**
- 支持微信小程序平台的特有能力

### 1.3 技术选型
- **框架**: Taro 3.x + React 18
- **UI组件**: NutUI React
- **状态管理**: Zustand
- **样式方案**: SCSS + CSS Modules
- **图标方案**: 自定义 SVG 图标

## 2. 完整页面列表（12个页面）

### 2.1 首页 (pages/index) ✅
- Banner 展示 - 绿色渐变背景，"发现周边"标题
- 热门路线推荐 - 展示 3 条精选路线（大图卡片）
- 本周活动展示 - 展示 2 个正在招募的活动

**原型文件**: `F:\私人文件\学习文件\前端学习文件\Githab\ONE\Hiking Mini Program Design\src\app\components\HomePage.tsx`

**子组件**:
- `RouteCard` - 路线卡片（大图版本，h-40）
- `ActivityCard` - 活动卡片（简化版本）

### 2.2 路线页 (pages/routes) ✅
- 路线列表 - 展示 5 条路线
- 搜索功能 - 支持搜索路线名称和地点
- 难度筛选 - 全部/初级/中级

**原型文件**: `F:\私人文件\学习文件\前端学习文件\Githab\ONE\Hiking Mini Program Design\src\app\components\RoutesPage.tsx`

**子组件**:
- `SearchHeader` - 搜索头部组件
- `RouteCard` - 路线卡片（小图版本，w-24 h-24，横向布局）

### 2.3 记录页 (pages/records) ✅
- 本月数据统计 - 徒步次数、累计距离、累计时长
- 累计成就展示 - 总里程、徒步天数、完成路线、累计爬升
- 徒步记录列表 - 显示历史徒步记录

**原型文件**: `F:\私人文件\学习文件\前端学习文件\Githab\ONE\Hiking Mini Program Design\src\app\components\RecordsPage.tsx`

**子组件**:
- `StatCard` - 数据卡片（本月数据）
- `AchievementCard` - 成就卡片（累计成就）
- `RecordCard` - 记录卡片（徒步记录）

### 2.4 结伴页 (pages/companion) ✅
- 活动列表 - 显示所有活动（3个）
- 发起活动 - 右上角"+"按钮，弹窗创建
- 报名功能 - 查看详情和报名

**原型文件**: `F:\私人文件\学习文件\前端学习文件\Githab\ONE\Hiking Mini Program Design\src\app\components\CompanionPage.tsx`

**子组件**:
- `ActivityCard` - 活动卡片（完整版本，包含详细信息）
- `CreateActivityModal` - 创建活动弹窗

### 2.5 个人中心 (pages/profile) ✅
- 用户信息展示 - 头像、昵称、开始时间
- 数据统计 - 徒步天数、总里程、完成路线
- 功能菜单 - 我的收藏、我的成就、通知设置、账号设置
- 等级系统 - 显示当前等级和升级进度
- 勋章墙 - 显示已获得和未获得的勋章

**原型文件**: `F:\私人文件\学习文件\前端学习文件\Githab\ONE\Hiking Mini Program Design\src\app\components\ProfilePage.tsx`

**子组件**:
- `MenuItem` - 菜单项
- `BadgeIcon` - 勋章图标

### 2.6 路线详情 (pages/route-detail) ✅
- 路线大图 + 评分浮层
- 路线标题
- 关键数据卡片（距离、时长、爬升）
- 难度标签 + 位置
- 路线简介
- 温馨提示列表
- 底部操作按钮（收藏、开始徒步）

**原型文件**: `F:\私人文件\学习文件\前端学习文件\Githab\ONE\Hiking Mini Program Design\src\app\components\RouteDetail.tsx`

**子组件**:
- `DetailHeader` - 详情页头部组件
- `DataCard` - 数据卡片

### 2.7 活动详情 (pages/activity-detail) ✅
- 活动标题 + 发起人信息
- 活动信息卡片（日期、时间、地点）
- 路线信息
- 活动说明
- 报名情况（进度条 + 用户头像列表）
- 立即报名按钮

**原型文件**: `F:\私人文件\学习文件\前端学习文件\Githab\ONE\Hiking Mini Program Design\src\app\components\ActivityDetail.tsx`

**子组件**:
- `DetailHeader` - 详情页头部组件
- `InfoRow` - 信息行组件

### 2.8 徒步中页面 (pages/hiking) ❌ 缺失
- 顶部返回 + 标题
- 地图占位区域
- 计时器显示（分:秒）
- 路线数据（距离、爬升、评分）
- 开始/暂停按钮

**原型文件**: `F:\私人文件\学习文件\前端学习文件\Githab\ONE\Hiking Mini Program Design\src\app\components\HikingPage.tsx`

### 2.9 徒步完成页面 (pages/hiking-complete) ❌ 缺失
- 弹窗形式
- 庆祝图标 + 文字
- 完成数据（用时、经验值）
- 完成按钮

**原型文件**: `F:\私人文件\学习文件\前端学习文件\Githab\ONE\Hiking Mini Program Design\src\app\components\HikingCompletePage.tsx`

### 2.10 我的收藏页面 (pages/favorites) ❌ 缺失
- 顶部返回 + 标题
- 收藏的路线列表（大图卡片，类似首页）

**原型文件**: `F:\私人文件\学习文件\前端学习文件\Githab\ONE\Hiking Mini Program Design\src\app\components\FavoritesPage.tsx`

### 2.11 我的成就页面 (pages/achievements) ❌ 缺失
- 顶部返回 + 标题
- 成就网格（2列布局）
- 每个成就显示：图标、标题、描述、进度条、解锁状态

**原型文件**: `F:\私人文件\学习文件\前端学习文件\Githab\ONE\Hiking Mini Program Design\src\app\components\AchievementsPage.tsx`

### 2.12 账号设置页面 (pages/settings) ❌ 缺失
- 顶部返回 + 标题
- 用户信息卡片（头像、昵称、等级）
- 功能列表（个人资料、账号安全、关于我们）

**原型文件**: `F:\私人文件\学习文件\前端学习文件\Githab\ONE\Hiking Mini Program Design\src\app\components\SettingsPage.tsx`

### 2.13 通知设置页面 (pages/notification-settings) ❌ 缺失
- 顶部返回 + 标题
- 通知选项列表（活动提醒、报名状态、系统消息、推荐活动）

**原型文件**: `F:\私人文件\学习文件\前端学习文件\Githab\ONE\Hiking Mini Program Design\src\app\components\NotificationSettingsPage.tsx`

## 3. 子组件列表

### 3.1 通用子组件
- `DetailHeader` - 详情页头部（返回按钮 + 居中标题）
- `SearchHeader` - 搜索头部（输入框）
- `ImageWithFallback` - 带降级的图片组件

### 3.2 业务子组件
- `RouteCard` - 路线卡片（两种布局：大图/小图）
- `ActivityCard` - 活动卡片（两种布局：简化/完整）
- `DataCard` - 数据卡片
- `MenuItem` - 菜单项
- `BadgeIcon` - 勋章图标
- `StatCard` - 统计卡片
- `AchievementCard` - 成就卡片
- `RecordCard` - 记录卡片
- `InfoRow` - 信息行
- `CreateActivityModal` - 创建活动弹窗

## 4. 设计规范

### 4.1 颜色系统
```scss
// 主题色 - 绿色渐变系统
$color-primary-start: #10b981;  // emerald-500
$color-primary: #059669;        // emerald-600
$color-primary-end: #14b8a6;    // teal-600
$gradient-primary: linear-gradient(135deg, #10b981 0%, #059669 50%, #14b8a6 100%);

// 语义色
$color-success: #10b981;
$color-warning: #f59e0b;
$color-error: #ef4444;

// 难度标签色
$color-difficulty-easy-bg: #ecfdf5;    // emerald-50
$color-difficulty-easy-text: #047857;  // emerald-700
$color-difficulty-medium-bg: #fff7ed;  // orange-50
$color-difficulty-medium-text: #c2410c; // orange-700

// 中性色
$color-text-primary: #111827;   // gray-900
$color-text-secondary: #6b7280; // gray-500
$color-border: #e5e7eb;         // gray-200
$color-bg-gray: #f9fafb;        // gray-50
```

### 4.2 字体规范
```scss
$font-size-xs: 12px;
$font-size-sm: 14px;
$font-size-base: 16px;
$font-size-lg: 18px;
$font-size-xl: 20px;
$font-size-2xl: 24px;

$font-weight-normal: 400;
$font-weight-medium: 500;
$font-weight-semibold: 600;
$font-weight-bold: 700;
```

### 4.3 间距规范
```scss
$spacing-xs: 4px;
$spacing-sm: 8px;
$spacing-md: 12px;
$spacing-lg: 16px;
$spacing-xl: 24px;
$spacing-2xl: 32px;
```

### 4.4 圆角规范
```scss
$radius-sm: 8px;   // rounded-xl
$radius-md: 12px;  // rounded-2xl
$radius-full: 9999px;
```

## 5. 交互规范

### 5.1 页面跳转
- 首页路线卡片 → 路线详情
- 首页活动卡片 → 活动详情
- 路线页路线卡片 → 路线详情
- 路线详情 → 点击"开始徒步" → 徒步中页面
- 徒步中页面 → 完成 → 徒步完成弹窗 → 返回上一页
- 结伴页活动卡片 → 活动详情
- 个人中心 → 点击菜单 → 对应二级页面

### 5.2 反馈提示
- 收藏成功/取消 → Toast 提示
- 报名成功/取消 → Toast 提示
- 功能开发中 → Toast 提示

## 6. 数据模型

### 6.1 路线数据
```typescript
interface Route {
  id: number;
  title: string;
  difficulty: '初级' | '中级' | '高级';
  distance: string;
  duration: string;
  location: string;
  rating: number;
  elevation: string;
  description: string;
  tips: string[];
}
```

### 6.2 活动数据
```typescript
interface Activity {
  id: number;
  title: string;
  route: string;
  organizer: string;
  date: string;
  time: string;
  location: string;
  difficulty: string;
  distance: string;
  currentParticipants: number;
  maxParticipants: number;
  description: string;
}
```

### 6.3 用户数据
```typescript
interface User {
  id: string;
  nickname: string;
  avatar: string;
  level: number;
  levelTitle: string;
  experience: number;
  nextLevelExperience: number;
  stats: {
    hikingDays: number;
    totalDistance: number;
    completedRoutes: number;
  };
  badges: Badge[];
  favorites: number[];
}
```

## 7. 变更记录

| 日期 | 功能 | 状态 | 说明 |
|------|------|------|------|
| 2026-01-09 | 项目初始化 | ✅ 完成 | 创建 Taro 项目，配置基础文件 |
| 2026-01-09 | 样式变量系统 | ✅ 完成 | 创建 _variables.scss 设计令牌 |
| 2026-01-09 | 类型定义 | ✅ 完成 | 创建 Route、Activity、User、Record 类型 |
| 2026-01-09 | Mock 数据 | ✅ 完成 | 创建 5 条路线、3 个活动、用户数据 |
| 2026-01-09 | TabBar 图标 | ✅ 完成 | 生成 10 个 PNG 图标 |
| 2026-01-09 | 首页 | ✅ 完成 | Banner + 热门路线 + 本周活动 |
| 2026-01-09 | 路线页 | ✅ 完成 | 搜索 + 筛选 + 列表 |
| 2026-01-09 | 记录页 | ✅ 完成 | 本月数据 + 累计成就 + 历史记录 |
| 2026-01-09 | 结伴页 | ✅ 完成 | 活动列表 + 发起活动 |
| 2026-01-09 | 个人中心 | ✅ 完成 | 用户信息 + 菜单 + 勋章 |
| 2026-01-09 | 路线详情 | ✅ 完成 | 路线信息 + 收藏功能 |
| 2026-01-09 | 活动详情 | ✅ 完成 | 活动信息 + 报名功能 |
| 2026-01-09 | **问题发现** | ⚠️ 重要 | 用户反馈：未按原型一比一还原，缺少二级三级页面 |
| 2026-01-09 | 需求文档更新 | ✅ 完成 | 完整记录 12 个页面和所有子组件 |
| 2026-01-09 | 徒步中页面 | ✅ 完成 | pages/hiking |
| 2026-01-09 | 徒步完成页面 | ✅ 完成 | pages/hiking-complete |
| 2026-01-09 | 我的收藏页面 | ✅ 完成 | pages/favorites |
| 2026-01-09 | 我的成就页面 | ✅ 完成 | pages/achievements |
| 2026-01-09 | 账号设置页面 | ✅ 完成 | pages/settings |
| 2026-01-09 | 通知设置页面 | ✅ 完成 | pages/notification-settings |
| 2026-01-09 | 路由配置更新 | ✅ 完成 | app.config.ts 添加 6 个新页面 |
| 2026-01-09 | 导航功能 | ✅ 完成 | 个人中心 → 子页面跳转 |
| 2026-01-09 | 开始徒步功能 | ✅ 完成 | 路线详情 → 徒步中页面 |
| 2026-01-09 | 导航栏遮挡修复 | ✅ 完成 | 6个新页面添加 padding-top: 44px |
| 2026-01-09 | 首页样式优化 | ✅ 完成 | max-width: 448px，精确匹配原型颜色和间距 |
| 2026-01-09 | 路线页样式优化 | ✅ 完成 | 横向卡片布局 (w-24 h-24)，精确样式 |
| 2026-01-09 | 记录页样式优化 | ✅ 完成 | 绿色渐变头部 + 本月数据卡片 + 累计成就网格 |
| 2026-01-09 | 结伴页样式优化 | ✅ 完成 | 绿色渐变头部 + 发起按钮 + 详细活动卡片 |
| 2026-01-09 | 个人中心样式优化 | ✅ 完成 | 重叠卡片设计 (-mt-16) + 橙色等级卡片 + 5列勋章 |
| 2026-01-09 | 路线详情样式优化 | ✅ 完成 | 固定底部按钮栏 + 3列数据卡片 |
| 2026-01-09 | 最终编译验证 | ✅ 完成 | 所有页面编译通过，可在微信开发者工具中预览 |

## 8. 完成的页面列表（12个）

| 页面 | 路径 | 状态 | 说明 |
|------|------|------|------|
| 首页 | pages/index | ✅ 完成 | Banner + 热门路线(3) + 本周活动(2) |
| 路线 | pages/routes | ✅ 完成 | 搜索 + 筛选 + 横向路线列表(5) |
| 记录 | pages/records | ✅ 完成 | 头部渐变 + 本月数据 + 累计成就(4) + 历史记录(3) |
| 结伴 | pages/companion | ✅ 完成 | 头部渐变 + 发起按钮 + 活动列表(3) |
| 个人中心 | pages/profile | ✅ 完成 | 头部渐变 + 用户卡片 + 菜单(4) + 等级卡片 + 勋章(5) |
| 路线详情 | pages/route-detail | ✅ 完成 | 大图 + 3列数据 + 描述 + 固定底部按钮 |
| 活动详情 | pages/activity-detail | ✅ 完成 | 活动信息 + 报名进度 + 报名按钮 |
| 徒步中 | pages/hiking | ✅ 完成 | 计时器 + 地图占位 + 开始/暂停按钮 |
| 徒步完成 | pages/hiking-complete | ✅ 完成 | 弹窗形式 + 完成数据 |
| 我的收藏 | pages/favorites | ✅ 完成 | 收藏列表(3) + 大图卡片 |
| 我的成就 | pages/achievements | ✅ 完成 | 2列成就网格(6) |
| 账号设置 | pages/settings | ✅ 完成 | 用户信息 + 功能列表(3) |
| 通知设置 | pages/notification-settings | ✅ 完成 | 通知选项列表(4) |

## 9. 关键原型文件路径

```
F:\私人文件\学习文件\前端学习文件\Githab\ONE\Hiking Mini Program Design\src\app\components\
├── App.tsx                          # 主应用入口，包含路由状态管理
├── HomePage.tsx                     # 首页（含 RouteCard、ActivityCard）
├── RoutesPage.tsx                   # 路线页（含 SearchHeader、RouteCard）
├── RecordsPage.tsx                  # 记录页（含 StatCard、AchievementCard、RecordCard）
├── CompanionPage.tsx                # 结伴页（含 ActivityCard、CreateActivityModal）
├── ProfilePage.tsx                  # 个人中心（含 MenuItem、BadgeIcon）
├── RouteDetail.tsx                  # 路线详情（含 DetailHeader、DataCard）
├── ActivityDetail.tsx               # 活动详情（含 DetailHeader、InfoRow）
├── HikingPage.tsx                   # 徒步中页面 ❌
├── HikingCompletePage.tsx           # 徒步完成弹窗 ❌
├── FavoritesPage.tsx                # 我的收藏 ❌
├── AchievementsPage.tsx             # 我的成就 ❌
├── SettingsPage.tsx                 # 账号设置 ❌
├── NotificationSettingsPage.tsx     # 通知设置 ❌
├── PageHeader.tsx                   # 头部组件（DetailHeader、SearchHeader）
└── figma/
    └── ImageWithFallback.tsx        # 带降级的图片组件
```

## 9. 实施计划

### 阶段一：创建缺失的 6 个页面
1. pages/hiking - 徒步中页面
2. pages/hiking-complete - 徒步完成弹窗
3. pages/favorites - 我的收藏
4. pages/achievements - 我的成就
5. pages/settings - 账号设置
6. pages/notification-settings - 通知设置

### 阶段二：创建所有子组件
1. DetailHeader - 详情页头部
2. SearchHeader - 搜索头部
3. ImageWithFallback - 带降级的图片
4. DataCard - 数据卡片
5. MenuItem - 菜单项
6. BadgeIcon - 勋章图标
7. StatCard - 统计卡片
8. AchievementCard - 成就卡片
9. RecordCard - 记录卡片
10. InfoRow - 信息行
11. CreateActivityModal - 创建活动弹窗

### 阶段三：更新现有页面
1. 逐页对比原型
2. 调整布局和样式
3. 确保子组件正确使用

### 阶段四：样式验证
1. 对比原型颜色、间距、圆角
2. 确保字体大小一致
3. 验证交互效果

### 阶段五：路由配置
1. 更新 app.config.ts
2. 添加新页面路由
3. 配置页面跳转逻辑
