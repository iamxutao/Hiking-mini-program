import { useState } from 'react';
import { Plus, Calendar, Clock, Users, MapPin } from 'lucide-react';
import type { ActivityType } from '../App';

const ACTIVITIES: ActivityType[] = [
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
  {
    id: 3,
    title: '工作日轻松徒步',
    route: '温榆河滨水步道',
    organizer: '晨曦',
    date: '1月9日 周四',
    time: '18:00',
    location: '温榆河公园北门',
    difficulty: '初级',
    distance: '6.0km',
    currentParticipants: 5,
    maxParticipants: 10,
    description: '下班后轻松徒步，缓解工作压力，享受户外自然。',
  },
];

export default function CompanionPage({
  onActivityClick,
}: {
  onActivityClick: (activity: ActivityType) => void;
}) {
  const [showCreateForm, setShowCreateForm] = useState(false);

  return (
    <div className="max-w-md mx-auto bg-gray-50">
      {/* 头部 */}
      <div className="bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-600 text-white px-5 pt-6 pb-8">
        <div className="flex items-center justify-between mb-1">
          <h1 className="text-2xl font-bold">结伴同行</h1>
          <button
            onClick={() => setShowCreateForm(true)}
            className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl flex items-center gap-1.5 text-sm font-medium"
          >
            <Plus className="w-4 h-4" />
            发起
          </button>
        </div>
        <p className="text-emerald-100 text-sm">找到志同道合的徒步伙伴</p>
      </div>

      {/* 活动列表 */}
      <div className="px-4 py-6 space-y-3">
        {ACTIVITIES.map((activity) => (
          <ActivityCard
            key={activity.id}
            activity={activity}
            onClick={() => onActivityClick(activity)}
          />
        ))}
      </div>

      {/* 创建活动弹窗 */}
      {showCreateForm && <CreateActivityModal onClose={() => setShowCreateForm(false)} />}
    </div>
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
  const isFull = activity.currentParticipants >= activity.maxParticipants;

  return (
    <button
      onClick={onClick}
      className="w-full bg-white rounded-2xl shadow-sm hover:shadow-md transition-all p-5 border border-gray-100 text-left"
    >
      {/* 标题和状态 */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">{activity.title}</h3>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
              {activity.organizer[0]}
            </div>
            <span className="text-sm text-gray-600">{activity.organizer}</span>
          </div>
        </div>
        <span
          className={`text-xs px-3 py-1.5 rounded-full font-medium whitespace-nowrap ml-2 ${
            isFull ? 'bg-gray-100 text-gray-600' : 'bg-emerald-50 text-emerald-700'
          }`}
        >
          {isFull ? '已满员' : '招募中'}
        </span>
      </div>

      {/* 活动信息 */}
      <div className="space-y-2.5 mb-4 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 flex-shrink-0" />
          <span>{activity.date}</span>
          <span className="text-gray-300">·</span>
          <Clock className="w-4 h-4 flex-shrink-0" />
          <span>{activity.time} 出发</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 flex-shrink-0" />
          <span className="truncate">{activity.location}</span>
        </div>
      </div>

      {/* 路线信息 */}
      <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-100">
        <span className="text-sm text-gray-500">路线:</span>
        <span className="text-sm font-medium">{activity.route}</span>
        <span
          className={`text-xs px-2 py-0.5 rounded-lg ${
            activity.difficulty === '初级'
              ? 'bg-emerald-50 text-emerald-700'
              : 'bg-orange-50 text-orange-700'
          }`}
        >
          {activity.difficulty}
        </span>
      </div>

      {/* 报名进度 */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Users className="w-4 h-4" />
            <span>
              {activity.currentParticipants}/{activity.maxParticipants} 人
            </span>
          </div>
        </div>
        <div className="bg-gray-100 rounded-full h-2.5 overflow-hidden">
          <div
            className={`h-full rounded-full transition-all ${
              isFull ? 'bg-gray-400' : 'bg-gradient-to-r from-emerald-500 to-teal-500'
            }`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </button>
  );
}

function CreateActivityModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end" onClick={onClose}>
      <div
        className="bg-white w-full max-w-md mx-auto rounded-t-3xl p-6 max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">发起活动</h2>
          <button onClick={onClose} className="text-gray-400 text-2xl leading-none">
            ×
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">活动标题</label>
            <input
              type="text"
              placeholder="给活动起个名字"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">选择路线</label>
            <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500">
              <option>香山红叶徒步环线</option>
              <option>凤凰岭登山步道</option>
              <option>百望山森林环线</option>
              <option>温榆河滨水步道</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">活动日期</label>
              <input
                type="date"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">出发时间</label>
              <input
                type="time"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">人数上限</label>
            <input
              type="number"
              placeholder="最多多少人参加"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">活动说明</label>
            <textarea
              placeholder="介绍一下活动详情、注意事项等"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl h-24 resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-4 rounded-xl font-semibold shadow-lg shadow-emerald-500/30">
            发布活动
          </button>
        </div>
      </div>
    </div>
  );
}