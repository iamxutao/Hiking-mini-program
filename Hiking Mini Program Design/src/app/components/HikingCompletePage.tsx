import { X } from 'lucide-react';

interface HikingCompletePageProps {
  data: any;
  onClose: () => void;
}

export default function HikingCompletePage({ data, onClose }: HikingCompletePageProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 max-w-md w-full max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">🎉 徒步完成！</h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="text-center mb-6">
          <div className="text-6xl mb-4">🏆</div>
          <p className="text-gray-600">恭喜你完成本次徒步！</p>
        </div>

        <div className="bg-emerald-50 rounded-xl p-4 mb-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-600">
                {Math.floor(data.elapsed / 60)}:{(data.elapsed % 60).toString().padStart(2, '0')}
              </div>
              <p className="text-sm text-gray-600">用时</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-600">+50</div>
              <p className="text-sm text-gray-600">经验值</p>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-semibold"
        >
          完成
        </button>
      </div>
    </div>
  );
}
