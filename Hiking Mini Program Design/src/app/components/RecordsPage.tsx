import { Calendar, MapPin, TrendingUp, Award } from 'lucide-react';

type Record = {
  id: number;
  title: string;
  date: string;
  distance: string;
  duration: string;
  elevation: string;
};

const HIKING_RECORDS: Record[] = [
  {
    id: 1,
    title: '凤凰岭登山步道',
    date: '2026-01-05',
    distance: '8.5km',
    duration: '3小时45分',
    elevation: '420m',
  },
  {
    id: 2,
    title: '百望山森林环线',
    date: '2026-01-03',
    distance: '4.8km',
    duration: '2小时30分',
    elevation: '180m',
  },
  {
    id: 3,
    title: '香山红叶徒步环线',
    date: '2026-01-01',
    distance: '6.2km',
    duration: '2小时45分',
    elevation: '280m',
  },
];

export default function RecordsPage() {
  return (
    <div className="max-w-md mx-auto bg-gray-50">
      {/* 头部 */}
      <div className="bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-600 text-white px-5 pt-6 pb-8">
        <h1 className="text-2xl font-bold mb-6">我的记录</h1>
        
        {/* 本月数据 */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5">
          <p className="text-emerald-100 text-sm mb-3">本月数据</p>
          <div className="grid grid-cols-3 gap-4">
            <StatCard value="3" label="徒步次数" unit="次" />
            <StatCard value="19.5" label="累计距离" unit="km" />
            <StatCard value="8.5" label="累计时长" unit="小时" />
          </div>
        </div>
      </div>

      {/* 累计成就 */}
      <div className="px-4 py-6">
        <div className="flex items-center gap-2 mb-4">
          <Award className="w-5 h-5 text-emerald-600" />
          <h2 className="text-lg font-semibold">累计成就</h2>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-6">
          <AchievementCard
            emoji="📏"
            value="156.8"
            label="总里程"
            unit="km"
            bgColor="from-emerald-50 to-teal-50"
            textColor="text-emerald-700"
          />
          <AchievementCard
            emoji="📅"
            value="28"
            label="徒步天数"
            unit="天"
            bgColor="from-blue-50 to-sky-50"
            textColor="text-blue-700"
          />
          <AchievementCard
            emoji="🏔️"
            value="12"
            label="完成路线"
            unit="条"
            bgColor="from-purple-50 to-pink-50"
            textColor="text-purple-700"
          />
          <AchievementCard
            emoji="⛰️"
            value="3,840"
            label="累计爬升"
            unit="m"
            bgColor="from-orange-50 to-amber-50"
            textColor="text-orange-700"
          />
        </div>

        {/* 徒步记录 */}
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="w-5 h-5 text-emerald-600" />
          <h2 className="text-lg font-semibold">徒步记录</h2>
        </div>
        <div className="space-y-3">
          {HIKING_RECORDS.map((record) => (
            <RecordCard key={record.id} record={record} />
          ))}
        </div>
      </div>
    </div>
  );
}

function StatCard({ value, label, unit }: { value: string; label: string; unit: string }) {
  return (
    <div className="text-center">
      <div className="text-2xl font-bold mb-1">
        {value}
        <span className="text-sm font-normal ml-0.5">{unit}</span>
      </div>
      <div className="text-xs text-emerald-100">{label}</div>
    </div>
  );
}

function AchievementCard({
  emoji,
  value,
  label,
  unit,
  bgColor,
  textColor,
}: {
  emoji: string;
  value: string;
  label: string;
  unit: string;
  bgColor: string;
  textColor: string;
}) {
  return (
    <div className={`bg-gradient-to-br ${bgColor} rounded-2xl p-4`}>
      <div className="text-3xl mb-2">{emoji}</div>
      <div className={`text-2xl font-bold ${textColor} mb-1`}>
        {value}
        <span className="text-sm font-normal ml-1">{unit}</span>
      </div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
}

function RecordCard({ record }: { record: Record }) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-base font-semibold mb-1">{record.title}</h3>
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="w-4 h-4 mr-1" />
            <span>{record.date}</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div className="text-center bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl py-3">
          <div className="text-lg font-bold text-emerald-700">{record.distance}</div>
          <div className="text-xs text-gray-600">距离</div>
        </div>
        <div className="text-center bg-gradient-to-br from-blue-50 to-sky-50 rounded-xl py-3">
          <div className="text-lg font-bold text-blue-700">{record.duration}</div>
          <div className="text-xs text-gray-600">时长</div>
        </div>
        <div className="text-center bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl py-3">
          <div className="text-lg font-bold text-orange-700">{record.elevation}</div>
          <div className="text-xs text-gray-600">爬升</div>
        </div>
      </div>
    </div>
  );
}