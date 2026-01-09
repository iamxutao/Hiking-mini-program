import { View, Text } from '@tarojs/components';
import Taro from '@tarojs/taro';
import './index.scss';

interface Achievement {
  id: number;
  emoji: string;
  title: string;
  desc: string;
  unlocked: boolean;
  progress?: number;
  total?: number;
}

const ACHIEVEMENTS: Achievement[] = [
  { id: 1, emoji: '🌱', title: '徒步新秀', desc: '完成首次徒步', unlocked: true },
  { id: 2, emoji: '💯', title: '百里徒步', desc: '累计徒步100公里', unlocked: true, progress: 156.8, total: 100 },
  { id: 3, emoji: '🪜', title: '千层台阶', desc: '累计爬升1000米', unlocked: true, progress: 3840, total: 1000 },
  { id: 4, emoji: '🗺️', title: '路线探索者', desc: '完成20条不同路线', unlocked: false, progress: 12, total: 20 },
  { id: 5, emoji: '🌟', title: '连续打卡7天', desc: '连续7天完成徒步', unlocked: true },
  { id: 6, emoji: '🏅', title: '完成10条路线', desc: '累计完成10条路线', unlocked: true },
];

export default function AchievementsPage() {
  const handleBack = () => {
    Taro.navigateBack();
  };

  return (
    <View className="achievements-page">
      {/* Header */}
      <View className="achievements-header">
        <View className="achievements-header__back" onClick={handleBack}>
          <Text className="achievements-header__back-icon">‹</Text>
        </View>
        <Text className="achievements-header__title">我的成就</Text>
      </View>

      {/* Content */}
      <View className="achievements-content">
        {ACHIEVEMENTS.map((achievement) => (
          <View
            key={achievement.id}
            className={`achievements-card ${achievement.unlocked ? 'achievements-card--unlocked' : 'achievements-card--locked'}`}
          >
            <Text className="achievements-card__emoji">{achievement.emoji}</Text>
            <Text className="achievements-card__title">{achievement.title}</Text>
            <Text className="achievements-card__desc">{achievement.desc}</Text>

            {achievement.progress !== undefined && achievement.total !== undefined && (
              <View className="achievements-card__progress-wrapper">
                <View className="achievements-card__progress-bar">
                  <View
                    className="achievements-card__progress-fill"
                    style={{ width: `${Math.min((achievement.progress / achievement.total) * 100, 100)}%` }}
                  />
                </View>
              </View>
            )}

            <View className="achievements-card__footer">
              {achievement.progress !== undefined && achievement.total !== undefined && (
                <Text className="achievements-card__progress-text">{achievement.progress}/{achievement.total}</Text>
              )}
              {achievement.unlocked && (
                <Text className="achievements-card__status">✓ 已解锁</Text>
              )}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
