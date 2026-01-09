import { MapPin, Star, Clock, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import type { Route, ActivityType } from '../App';

const FEATURED_ROUTES: Route[] = [
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
  },
];

const WEEKEND_ACTIVITIES: ActivityType[] = [
  {
    id: 1,
    title: '周六香山红叶徒步团',
    route: '香山红叶徒步环线',
    organizer: '户外老王',
    date: '1月11日 周六',
    time: '08:00',
    location: '香山公园东门集合',
    difficulty: '初级',
    distance: '5.2km',
    currentParticipants: 8,
    maxParticipants: 15,
    description: '欢迎新手参加，慢节奏徒步，领队会沿途讲解户外知识和安全注意事项。提供基础装备指导。',
  },
  {
    id: 2,
    title: '周日凤凰岭登高',
    route: '凤凰岭登山步道',
    organizer: '徒步小队长',
    date: '1月12日 周日',
    time: '07:30',
    location: '凤凰岭景区南门',
    difficulty: '中级',
    distance: '8.5km',
    currentParticipants: 12,
    maxParticipants: 20,
    description: '体能要求中等，适合有徒步经验的朋友。登顶后一起欣赏美景，分享徒步心得。',
  },
];

export default function HomePage({
  onRouteClick,
  onActivityClick,
}: {
  onRouteClick: (route: Route) => void;
  onActivityClick: (activity: ActivityType) => void;
}) {
  return (
    <div className="max-w-md mx-auto bg-gray-50">
      {/* 头部 Banner - 不使用独立的Header组件 */}
      <div className="bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-600 text-white px-5 pt-6 pb-8">
        <h1 className="text-2xl font-bold mb-1">发现周边</h1>
        <p className="text-emerald-100 text-sm">城市周边徒步，从这里开始</p>
      </div>

      {/* 热门推荐 */}
      <div className="px-4 py-6">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-emerald-600" />
          <h2 className="text-lg font-semibold">热门路线</h2>
        </div>
        <div className="space-y-3">
          {FEATURED_ROUTES.map((route) => (
            <RouteCard key={route.id} route={route} onClick={() => onRouteClick(route)} />
          ))}
        </div>
      </div>

      {/* 周末活动 */}
      <div className="px-4 pb-6">
        <div className="flex items-center gap-2 mb-4">
          <Clock className="w-5 h-5 text-emerald-600" />
          <h2 className="text-lg font-semibold">本周活动</h2>
        </div>
        <div className="space-y-3">
          {WEEKEND_ACTIVITIES.map((activity) => (
            <ActivityCard
              key={activity.id}
              activity={activity}
              onClick={() => onActivityClick(activity)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function RouteCard({ route, onClick }: { route: Route; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-white rounded-2xl shadow-sm hover:shadow-md transition-all overflow-hidden border border-gray-100"
    >
      <div className="relative h-40">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=300&fit=crop"
          alt={route.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
          <span className="text-sm font-medium">{route.rating}</span>
        </div>
      </div>
      <div className="p-4 text-left">
        <h3 className="text-base font-semibold mb-2">{route.title}</h3>
        <div className="flex items-center flex-wrap gap-2 mb-3">
          <span
            className={`text-xs px-2.5 py-1 rounded-full font-medium ${
              route.difficulty === '初级'
                ? 'bg-emerald-50 text-emerald-700'
                : 'bg-orange-50 text-orange-700'
            }`}
          >
            {route.difficulty}
          </span>
          <span className="text-sm text-gray-600">{route.distance}</span>
          <span className="text-gray-300">·</span>
          <span className="text-sm text-gray-600">{route.duration}</span>
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{route.location}</span>
        </div>
      </div>
    </button>
  );
}

function ActivityCard({
  activity,
  onClick,
}: {
  activity: ActivityType;
  onClick: () => void;
}) {
  const progress = (activity.currentParticipants / activity.maxParticipants) * 100;

  return (
    <button
      onClick={onClick}
      className="w-full bg-white rounded-2xl shadow-sm hover:shadow-md transition-all p-4 border border-gray-100 text-left"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-base font-semibold mb-1">{activity.title}</h3>
          <p className="text-sm text-gray-500">{activity.organizer} 发起</p>
        </div>
        <span className="text-xs px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full font-medium whitespace-nowrap ml-2">
          招募中
        </span>
      </div>
      <div className="flex items-center text-sm text-gray-600 mb-3">
        <Clock className="w-4 h-4 mr-1" />
        <span>
          {activity.date} {activity.time}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-sm text-gray-600">
              {activity.currentParticipants}/{activity.maxParticipants} 人
            </span>
          </div>
          <div className="bg-gray-100 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-emerald-500 to-teal-500 h-full rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </button>
  );
}