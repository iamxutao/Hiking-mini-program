import { ArrowLeft, Calendar, Clock, MapPin, Users, User } from 'lucide-react';
import { DetailHeader } from './PageHeader';
import type { ActivityType } from '../App';

export default function ActivityDetail({
  activity,
  onBack,
}: {
  activity: ActivityType;
  onBack: () => void;
}) {
  const progress = (activity.currentParticipants / activity.maxParticipants) * 100;

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      {/* 顶部导航 */}
      <DetailHeader title="活动详情" onBack={onBack} />

      <div className="px-6 py-6">
        {/* 活动标题 */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-3">{activity.title}</h2>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center text-white text-lg">
              {activity.organizer[0]}
            </div>
            <div>
              <p className="text-sm font-medium">{activity.organizer}</p>
              <p className="text-xs text-gray-500">活动发起人</p>
            </div>
          </div>
        </div>

        {/* 活动信息卡片 */}
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-5 mb-6">
          <div className="space-y-3">
            <InfoRow icon={<Calendar className="w-5 h-5" />} label={activity.date} />
            <InfoRow icon={<Clock className="w-5 h-5" />} label={`${activity.time} 出发`} />
            <InfoRow icon={<MapPin className="w-5 h-5" />} label={activity.location} />
          </div>
        </div>

        {/* 路线信息 */}
        <div className="mb-6 pb-6 border-b border-gray-100">
          <h3 className="text-sm text-gray-500 mb-2">徒步路线</h3>
          <p className="text-lg font-semibold mb-3">{activity.route}</p>
          <div className="flex items-center gap-3">
            <span
              className={`px-3 py-1 rounded-lg text-sm font-medium ${
                activity.difficulty === '初级'
                  ? 'bg-emerald-50 text-emerald-700'
                  : 'bg-orange-50 text-orange-700'
              }`}
            >
              {activity.difficulty}
            </span>
            <span className="text-sm text-gray-600">{activity.distance}</span>
          </div>
        </div>

        {/* 活动说明 */}
        <div className="mb-6 pb-6 border-b border-gray-100">
          <h3 className="text-lg font-semibold mb-3">活动说明</h3>
          <p className="text-gray-600 leading-relaxed">{activity.description}</p>
        </div>

        {/* 报名情况 */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold">报名情况</h3>
            <span className="text-sm text-gray-600">
              {activity.currentParticipants}/{activity.maxParticipants} 人
            </span>
          </div>
          <div className="bg-gray-100 rounded-full h-3 overflow-hidden mb-4">
            <div
              className="bg-gradient-to-r from-emerald-500 to-teal-500 h-full rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="grid grid-cols-5 gap-3">
            {Array.from({ length: activity.currentParticipants }).map((_, i) => (
              <div
                key={i}
                className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center text-white"
              >
                <User className="w-6 h-6" />
              </div>
            ))}
            {Array.from({ length: activity.maxParticipants - activity.currentParticipants }).map(
              (_, i) => (
                <div
                  key={`empty-${i}`}
                  className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center"
                >
                  <User className="w-6 h-6 text-gray-300" />
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* 底部按钮 */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <div className="max-w-md mx-auto">
          <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-4 rounded-xl font-semibold shadow-lg shadow-emerald-500/30">
            立即报名
          </button>
          <p className="text-center text-xs text-gray-500 mt-3">
            报名后请按时参加，如有变动请提前告知
          </p>
        </div>
      </div>
    </div>
  );
}

function InfoRow({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-3 text-emerald-800">
      {icon}
      <span className="font-medium">{label}</span>
    </div>
  );
}