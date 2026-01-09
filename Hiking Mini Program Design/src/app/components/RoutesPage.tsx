import { useState } from 'react';
import { Search, MapPin, Star, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SearchHeader } from './PageHeader';
import type { Route } from '../App';

const ALL_ROUTES: Route[] = [
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
  {
    id: 4,
    title: '温榆河滨水步道',
    difficulty: '初级',
    distance: '6.0km',
    duration: '1.5小时',
    location: '北京·朝阳区',
    rating: 4.5,
    elevation: '↑10m',
    description: '平坦的滨水步道，适合休闲徒步和骑行。沿途风景宜人，是城市中的绿色走廊。',
    tips: ['路线平坦适合遛娃', '可以骑行', '注意避让行人', '夏季蚊虫较多'],
  },
  {
    id: 5,
    title: '妙峰山古香道',
    difficulty: '中级',
    distance: '7.2km',
    duration: '3小时',
    location: '北京·门头沟区',
    rating: 4.7,
    elevation: '↑350m',
    description: '历史悠久的古道，石板路保存完好。沿途可以感受古道文化，欣赏山林美景。',
    tips: ['石板路注意脚下', '有历史文化介绍牌', '建议穿防滑鞋', '可以了解古道历史'],
  },
];

export default function RoutesPage({ onRouteClick }: { onRouteClick: (route: Route) => void }) {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('全部');
  const [searchText, setSearchText] = useState('');

  const filteredRoutes = ALL_ROUTES.filter((route) => {
    const matchesDifficulty =
      selectedDifficulty === '全部' || route.difficulty === selectedDifficulty;
    const matchesSearch =
      searchText === '' ||
      route.title.toLowerCase().includes(searchText.toLowerCase()) ||
      route.location.toLowerCase().includes(searchText.toLowerCase());
    return matchesDifficulty && matchesSearch;
  });

  return (
    <div className="max-w-md mx-auto bg-gray-50">
      {/* 顶部搜索 */}
      <SearchHeader
        title="徒步路线"
        searchPlaceholder="搜索路线或地点"
        searchValue={searchText}
        onSearchChange={setSearchText}
      />

      {/* 难度筛选 */}
      <div className="bg-white px-4 py-3 mb-2">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {['全部', '初级', '中级'].map((difficulty) => (
            <button
              key={difficulty}
              onClick={() => setSelectedDifficulty(difficulty)}
              className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                selectedDifficulty === difficulty
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/30'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              {difficulty}
            </button>
          ))}
        </div>
      </div>

      {/* 路线列表 */}
      <div className="px-4 space-y-3 pb-4">
        {filteredRoutes.map((route) => (
          <RouteCard key={route.id} route={route} onClick={() => onRouteClick(route)} />
        ))}
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
      <div className="flex gap-4 p-4">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=200&h=200&fit=crop"
          alt={route.title}
          className="w-24 h-24 rounded-xl object-cover flex-shrink-0"
        />
        <div className="flex-1 min-w-0 text-left">
          <h3 className="text-base font-semibold mb-2 truncate">{route.title}</h3>
          <div className="flex items-center gap-2 mb-2">
            <span
              className={`text-xs px-2 py-1 rounded-lg font-medium ${
                route.difficulty === '初级'
                  ? 'bg-emerald-50 text-emerald-700'
                  : 'bg-orange-50 text-orange-700'
              }`}
            >
              {route.difficulty}
            </span>
            <span className="text-sm text-gray-600">{route.distance}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center text-xs text-gray-500">
              <Clock className="w-3 h-3 mr-1" />
              <span>{route.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="text-sm font-medium">{route.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}