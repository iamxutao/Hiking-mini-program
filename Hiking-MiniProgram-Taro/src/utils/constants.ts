import { Route, Activity, User, Record, MonthlyStats, CumulativeStats } from '@/types';

// ============================================
// Mock 数据 - 与原型保持一致
// ============================================

// 路线数据
export const ROUTES_MOCK_DATA: Route[] = [
  {
    id: 1,
    title: '香山红叶徒步环线',
    difficulty: '初级',
    distance: '5.2km',
    duration: '2-3小时',
    location: '北京·海淀区',
    rating: 4.8,
    elevation: '↑280m',
    description: '北京最受欢迎的初级徒步路线，秋季红叶美景，适合新手体验户外徒步。路线平缓，沿途风景优美。',
    tips: ['携带充足饮用水', '穿着舒适的运动鞋', '注意防晒', '秋季红叶最佳观赏期为10-11月'],
    images: ['https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=300&fit=crop']
  },
  {
    id: 2,
    title: '凤凰岭登山步道',
    difficulty: '中级',
    distance: '8.5km',
    duration: '3-4小时',
    location: '北京·海淀区',
    rating: 4.9,
    elevation: '↑420m',
    description: '挑战性适中的山地徒步路线，登顶后可俯瞰京城全景。适合有一定体能基础的徒步爱好者。',
    tips: ['建议早上出发', '带登山杖更省力', '山顶温度较低注意保暖', '雨后路滑请谨慎'],
    images: ['https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=300&fit=crop']
  },
  {
    id: 3,
    title: '百望山森林环线',
    difficulty: '初级',
    distance: '4.8km',
    duration: '2小时',
    location: '北京·海淀区',
    rating: 4.6,
    elevation: '↑180m',
    description: '森林覆盖率高，空气清新，适合周末放松。路线轻松，全程树荫，夏季徒步的好选择。',
    tips: ['蚊虫较多注意防护', '森林氧吧放松心情', '可携带野餐垫', '适合全家出行'],
    images: ['https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=300&fit=crop']
  },
  {
    id: 4,
    title: '阳台山穿越路线',
    difficulty: '中级',
    distance: '10.2km',
    duration: '4-5小时',
    location: '北京·海淀区',
    rating: 4.7,
    elevation: '↑580m',
    description: '阳台山是京西著名山峰，这条路线穿越密林，视野开阔，是摄影爱好者的天堂。',
    tips: ['建议携带充电宝', '穿着防滑鞋底', '注意保护环境', '山顶风大需带外套'],
    images: ['https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=300&fit=crop']
  },
  {
    id: 5,
    title: '鹫峰森林公园',
    difficulty: '初级',
    distance: '6.5km',
    duration: '2.5-3小时',
    location: '北京·海淀区',
    rating: 4.5,
    elevation: '↑320m',
    description: '鹫峰以奇峰怪石著称，春天赏花、夏日避暑、秋观红叶、冬看雪景，四季皆宜。',
    tips: ['公园门票需提前购买', '山路有些陡峭', '适合摄影爱好者', '可携带望远镜观鸟'],
    images: ['https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=300&fit=crop']
  }
];

// 活动数据
export const ACTIVITIES_MOCK_DATA: Activity[] = [
  {
    id: 1,
    title: '周六香山红叶徒步团',
    route: '香山红叶徒步环线',
    routeId: 1,
    organizer: '户外老王',
    date: '1月11日 周六',
    time: '08:00',
    location: '香山公园东门集合',
    difficulty: '初级',
    distance: '5.2km',
    currentParticipants: 8,
    maxParticipants: 15,
    description: '欢迎新手参加，慢节奏徒步，领队会沿途讲解户外知识和安全注意事项。提供基础装备指导。',
    status: 'recruiting'
  },
  {
    id: 2,
    title: '周日凤凰岭登高',
    route: '凤凰岭登山步道',
    routeId: 2,
    organizer: '徒步小队长',
    date: '1月12日 周日',
    time: '07:30',
    location: '凤凰岭景区南门',
    difficulty: '中级',
    distance: '8.5km',
    currentParticipants: 12,
    maxParticipants: 20,
    description: '体能要求中等，适合有徒步经验的朋友。登顶后一起欣赏美景，分享徒步心得。',
    status: 'recruiting'
  },
  {
    id: 3,
    title: '周六百望山休闲徒步',
    route: '百望山森林环线',
    routeId: 3,
    organizer: '晨曦',
    date: '1月18日 周六',
    time: '09:00',
    location: '百望山森林公园东门',
    difficulty: '初级',
    distance: '4.8km',
    currentParticipants: 15,
    maxParticipants: 15,
    description: '轻松休闲路线，适合家庭和朋友一起出行。森林氧吧，洗涤身心。',
    status: 'full'
  }
];

// 用户数据
export const USER_MOCK_DATA: User = {
  id: 'user_001',
  nickname: '徒步爱好者',
  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop',
  level: 3,
  levelTitle: '进阶徒步者',
  experience: 680,
  nextLevelExperience: 1000,
  stats: {
    hikingDays: 28,
    totalDistance: 156.8,
    completedRoutes: 12
  },
  badges: [
    { id: 1, emoji: '🏔️', label: '首次徒步', unlocked: true, unlockedAt: '2025-10-15' },
    { id: 2, emoji: '🌟', label: '连续打卡7天', unlocked: true, unlockedAt: '2025-11-01' },
    { id: 3, emoji: '🏅', label: '完成10条路线', unlocked: true, unlockedAt: '2025-12-20' },
    { id: 4, emoji: '🎖️', label: '徒步达人', unlocked: false },
    { id: 5, emoji: '👑', label: '登山王者', unlocked: false }
  ],
  favorites: [1, 2, 3],
  achievements: [
    { id: 1, title: '徒步新秀', description: '完成首次徒步', emoji: '🌱', unlocked: true, progress: 1, total: 1 },
    { id: 2, title: '百里徒步', description: '累计徒步100公里', emoji: '💯', unlocked: true, progress: 156.8, total: 100 },
    { id: 3, title: '千层台阶', description: '累计爬升1000米', emoji: '🪜', unlocked: true, progress: 3840, total: 1000 },
    { id: 4, title: '路线探索者', description: '完成20条不同路线', emoji: '🗺️', unlocked: false, progress: 12, total: 20 }
  ]
};

// 记录数据
export const RECORDS_MOCK_DATA: Record[] = [
  {
    id: 1,
    routeId: 1,
    routeTitle: '香山红叶徒步环线',
    date: '2025-12-28',
    distance: '5.2km',
    duration: '2.5小时',
    elevation: '↑280m',
    calories: 320
  },
  {
    id: 2,
    routeId: 2,
    routeTitle: '凤凰岭登山步道',
    date: '2025-12-21',
    distance: '8.5km',
    duration: '3.5小时',
    elevation: '↑420m',
    calories: 520
  },
  {
    id: 3,
    routeId: 3,
    routeTitle: '百望山森林环线',
    date: '2025-12-14',
    distance: '4.8km',
    duration: '2小时',
    elevation: '↑180m',
    calories: 280
  }
];

// 本月统计数据
export const MONTHLY_STATS_MOCK_DATA: MonthlyStats = {
  month: '2025-12',
  count: 3,
  distance: 19.5,
  duration: 8.5
};

// 累计统计数据
export const CUMULATIVE_STATS_MOCK_DATA: CumulativeStats = {
  totalDistance: 156.8,
  hikingDays: 28,
  completedRoutes: 12,
  totalElevation: 3840
};
