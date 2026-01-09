import { ChevronLeft } from 'lucide-react';

export default function SettingsPage({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="flex items-center gap-3 p-4 bg-white border-b border-gray-100">
        <button onClick={onBack} className="p-1 hover:bg-gray-100 rounded-full">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-semibold">账号设置</h1>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <div className="bg-white rounded-2xl p-4">
          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <span className="text-gray-800">头像</span>
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-2xl">
              👤
            </div>
          </div>
          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <span className="text-gray-800">昵称</span>
            <span className="text-gray-500">徒步爱好者</span>
          </div>
          <div className="flex items-center justify-between py-3">
            <span className="text-gray-800">等级</span>
            <span className="text-emerald-600 font-semibold">Lv.3</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl overflow-hidden">
          <button className="w-full flex items-center justify-between p-4 border-b border-gray-100 hover:bg-gray-50">
            <span>个人资料</span>
            <span className="text-gray-400">›</span>
          </button>
          <button className="w-full flex items-center justify-between p-4 border-b border-gray-100 hover:bg-gray-50">
            <span>账号安全</span>
            <span className="text-gray-400">›</span>
          </button>
          <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50">
            <span>关于我们</span>
            <span className="text-gray-400">›</span>
          </button>
        </div>
      </div>
    </div>
  );
}
