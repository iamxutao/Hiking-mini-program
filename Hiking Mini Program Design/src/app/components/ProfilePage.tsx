import { ChevronRight, Settings, Heart, Award, Bell } from 'lucide-react';

export default function ProfilePage({
  onNavigateToFavorites,
  onNavigateToAchievements,
  onNavigateToSettings,
  onNavigateToNotificationSettings,
}: {
  onNavigateToFavorites: () => void;
  onNavigateToAchievements: () => void;
  onNavigateToSettings: () => void;
  onNavigateToNotificationSettings: () => void;
}) {
  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen">
      {/* 头部 */}
      <div className="bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-600 text-white px-5 pt-6 pb-24">
        <h1 className="text-2xl font-bold mb-1">我的</h1>
      </div>

      {/* 用户信息卡片 */}
      <div className="px-5 -mt-16">
        <div className="bg-white rounded-2xl shadow-lg p-5 border border-emerald-100">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center text-3xl border-4 border-emerald-100">
              👤
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold mb-1">徒步爱好者</h2>
              <p className="text-sm text-gray-500">开始徒步 3 个月</p>
            </div>
          </div>

          {/* 数据概览 */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
            <div className="text-center">
              <div className="text-xl font-bold text-emerald-700 mb-1">28</div>
              <div className="text-xs text-gray-600">徒步天数</div>
            </div>
            <div className="text-center border-l border-r border-gray-100">
              <div className="text-xl font-bold text-emerald-700 mb-1">156.8</div>
              <div className="text-xs text-gray-600">总里程(km)</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-emerald-700 mb-1">12</div>
              <div className="text-xs text-gray-600">完成路线</div>
            </div>
          </div>
        </div>
      </div>

      {/* 功能菜单 */}
      <div className="px-5 py-6 space-y-3">
        {/* 我的内容 */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <MenuItem
            icon={<Heart className="w-5 h-5" />}
            label="我的收藏"
            badge="12"
            onClick={onNavigateToFavorites}
          />
          <MenuItem
            icon={<Award className="w-5 h-5" />}
            label="我的成就"
            badge="5"
            onClick={onNavigateToAchievements}
          />
        </div>

        {/* 设置 */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <MenuItem
            icon={<Bell className="w-5 h-5" />}
            label="通知设置"
            onClick={onNavigateToNotificationSettings}
          />
          <MenuItem
            icon={<Settings className="w-5 h-5" />}
            label="账号设置"
            onClick={onNavigateToSettings}
          />
        </div>

        {/* 等级卡片 */}
        <div className="bg-gradient-to-r from-amber-400 via-orange-400 to-orange-500 text-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-sm mb-1 text-orange-100">当前等级</div>
              <div className="text-2xl font-bold">Lv.3 进阶徒步者</div>
            </div>
            <div className="text-6xl">🥾</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-full h-3 mb-2 overflow-hidden">
            <div className="bg-white h-full rounded-full" style={{ width: '65%' }} />
          </div>
          <div className="text-sm text-orange-50">再徒步 35km 升级到 Lv.4</div>
        </div>

        {/* 勋章墙 */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">我的勋章</h3>
            <span className="text-sm text-emerald-600">5/20</span>
          </div>
          <div className="grid grid-cols-5 gap-4">
            <BadgeIcon emoji="🏆" label="首次" />
            <BadgeIcon emoji="⭐" label="7天" />
            <BadgeIcon emoji="🎖️" label="50km" />
            <BadgeIcon emoji="🏔️" label="登顶" locked />
            <BadgeIcon emoji="👥" label="社交" locked />
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuItem({
  icon,
  label,
  badge,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  badge?: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-b-0"
    >
      <div className="flex items-center gap-3">
        <div className="text-gray-600">{icon}</div>
        <span className="text-base">{label}</span>
      </div>
      <div className="flex items-center gap-2">
        {badge && (
          <span className="text-xs px-2 py-1 bg-emerald-50 text-emerald-700 rounded-full font-medium">
            {badge}
          </span>
        )}
        <ChevronRight className="w-5 h-5 text-gray-400" />
      </div>
    </button>
  );
}

function BadgeIcon({ emoji, label, locked = false }: { emoji: string; label: string; locked?: boolean }) {
  return (
    <div className="flex flex-col items-center">
      <div className={`text-3xl mb-1 ${locked ? 'grayscale opacity-30' : ''}`}>{emoji}</div>
      <span className="text-xs text-center text-gray-600">{label}</span>
    </div>
  );
}