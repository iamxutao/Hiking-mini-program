import { Route } from '../App';
import { MapPin, Star, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface FavoritesPageProps {
  onBack: () => void;
  onRouteClick: (route: Route) => void;
}

export default function FavoritesPage({ onBack, onRouteClick }: FavoritesPageProps) {
  const favorites = [1, 2, 3]; // Mock favorite route IDs

  const routes = [
    {
      id: 1,
      title: '香山红叶徒步环线',
      difficulty: '初级',
      distance: '5.2km',
      duration: '2-3小时',
      location: '北京·海淀区',
      rating: 4.8,
    },
    {
      id: 2,
      title: '凤凰岭登山步道',
      difficulty: '中级',
      distance: '8.5km',
      duration: '3-4小时',
      location: '北京·海淀区',
      rating: 4.9,
    },
    {
      id: 3,
      title: '百望山森林环线',
      difficulty: '初级',
      distance: '4.8km',
      duration: '2小时',
      location: '北京·海淀区',
      rating: 4.6,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="flex items-center gap-3 p-4 bg-white border-b border-gray-100">
        <button onClick={onBack} className="p-1 hover:bg-gray-100 rounded-full">
          ←
        </button>
        <h1 className="text-lg font-semibold">我的收藏</h1>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {routes.map((route) => (
          <button
            key={route.id}
            onClick={() => onRouteClick(route as Route)}
            className="w-full bg-white rounded-2xl shadow-sm hover:shadow-md transition-all overflow-hidden border border-gray-100 text-left"
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
            <div className="p-4">
              <h3 className="text-base font-semibold mb-2">{route.title}</h3>
              <div className="flex items-center gap-2 mb-3">
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
        ))}
      </div>
    </div>
  );
}
