import { ChevronLeft } from 'lucide-react';

export default function NotificationSettingsPage({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="flex items-center gap-3 p-4 bg-white border-b border-gray-100">
        <button onClick={onBack} className="p-1 hover:bg-gray-100 rounded-full">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-semibold">通知设置</h1>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="bg-white rounded-2xl overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <div>
              <div className="text-gray-800">活动提醒</div>
              <div className="text-sm text-gray-500">新活动开始前通知</div>
            </div>
            <input type="checkbox" defaultChecked className="w-5 h-5 accent-emerald-500" />
          </div>
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <div>
              <div className="text-gray-800">报名状态</div>
              <div className="text-sm text-gray-500">活动报名变化通知</div>
            </div>
            <input type="checkbox" defaultChecked className="w-5 h-5 accent-emerald-500" />
          </div>
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <div>
              <div className="text-gray-800">系统消息</div>
              <div className="text-sm text-gray-500">系统更新和公告</div>
            </div>
            <input type="checkbox" defaultChecked className="w-5 h-5 accent-emerald-500" />
          </div>
          <div className="flex items-center justify-between p-4">
            <div>
              <div className="text-gray-800">推荐活动</div>
              <div className="text-sm text-gray-500">基于你的喜好推荐</div>
            </div>
            <input type="checkbox" className="w-5 h-5 accent-emerald-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
