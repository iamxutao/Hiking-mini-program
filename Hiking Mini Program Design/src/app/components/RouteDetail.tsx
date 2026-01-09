import { ArrowLeft, MapPin, Clock, TrendingUp, Star, Info } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { DetailHeader } from './PageHeader';
import type { Route } from '../App';

export default function RouteDetail({
  route,
  onBack,
  onStartHiking,
}: {
  route: Route;
  onBack: () => void;
  onStartHiking: (route: Route) => void;
}) {
  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      {/* 顶部导航 */}
      <DetailHeader title="路线详情" onBack={onBack} />

      {/* 路线图片 */}
      <div className="relative">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=400&fit=crop"
          alt={route.title}
          className="w-full h-56 object-cover"
        />
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
          <span className="font-medium">{route.rating}</span>
        </div>
      </div>

      {/* 路线信息 */}
      <div className="px-6 py-6 pb-24">
        <h1 className="text-2xl font-bold mb-4">{route.title}</h1>

        {/* 关键数据 */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <DataCard icon="📏" label="距离" value={route.distance} />
          <DataCard icon="⏱️" label="时长" value={route.duration} />
          <DataCard icon="⛰️" label="爬升" value={route.elevation} />
        </div>

        {/* 难度和位置 */}
        <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-100">
          <span
            className={`px-4 py-2 rounded-xl font-medium ${
              route.difficulty === '初级'
                ? 'bg-emerald-50 text-emerald-700'
                : 'bg-orange-50 text-orange-700'
            }`}
          >
            {route.difficulty}
          </span>
          <div className="flex items-center text-gray-600">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="text-sm">{route.location}</span>
          </div>
        </div>

        {/* 路线简介 */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <Info className="w-5 h-5 text-emerald-600" />
            路线简介
          </h2>
          <p className="text-gray-600 leading-relaxed">{route.description}</p>
        </div>

        {/* 温馨提示 */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-emerald-600" />
            温馨提示
          </h2>
          <div className="space-y-2">
            {route.tips.map((tip, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                <p className="text-gray-600 text-sm">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 底部按钮 */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <div className="max-w-md mx-auto flex gap-3">
          <button className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-medium">
            收藏路线
          </button>
          <button
            onClick={() => onStartHiking(route)}
            className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-3 rounded-xl font-medium shadow-lg shadow-emerald-500/30"
          >
            开始徒步
          </button>
        </div>
      </div>
    </div>
  );
}

function DataCard({
  icon,
  label,
  value,
}: {
  icon: string;
  label: string;
  value: string;
}) {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 text-center">
      <div className="text-2xl mb-1">{icon}</div>
      <div className="text-lg font-semibold text-gray-800 mb-0.5">{value}</div>
      <div className="text-xs text-gray-500">{label}</div>
    </div>
  );
}