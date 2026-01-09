import { useState } from 'react';
import { Route } from '../App';
import { ChevronLeft, Play, Pause } from 'lucide-react';

interface HikingPageProps {
  route: Route;
  onFinish: (data: any) => void;
  onBack: () => void;
}

export default function HikingPage({ route, onFinish, onBack }: HikingPageProps) {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsed, setElapsed] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="flex items-center gap-3 p-4 bg-white border-b border-gray-100">
        <button onClick={onBack} className="p-1 hover:bg-gray-100 rounded-full">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-semibold flex-1">{route.title}</h1>
      </div>

      {/* Map Placeholder */}
      <div className="h-96 bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🗺️</div>
          <p className="text-gray-600">地图加载中...</p>
        </div>
      </div>

      {/* Stats */}
      <div className="p-4">
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="text-center mb-6">
            <div className="text-4xl font-bold text-emerald-600 mb-2">
              {Math.floor(elapsed / 60)}:{(elapsed % 60).toString().padStart(2, '0')}
            </div>
            <p className="text-gray-500">用时</p>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">{route.distance}</div>
              <p className="text-sm text-gray-500">距离</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">{route.elevation}</div>
              <p className="text-sm text-gray-500">爬升</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">{route.rating}</div>
              <p className="text-sm text-gray-500">评分</p>
            </div>
          </div>

          <button
            onClick={() => {
              if (isRunning) {
                setIsRunning(false);
              } else {
                setIsRunning(true);
                const timer = setInterval(() => {
                  setElapsed(e => e + 1);
                }, 1000);
                setTimeout(() => {
                  clearInterval(timer);
                  onFinish({ elapsed, completed: true });
                }, 5000);
              }
            }}
            className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-semibold shadow-lg flex items-center justify-center gap-2"
          >
            {isRunning ? (
              <>
                <Pause className="w-5 h-5" />
                暂停
              </>
            ) : (
              <>
                <Play className="w-5 h-5" />
                开始徒步
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
