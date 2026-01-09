import { View, Text, ScrollView } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { USER_MOCK_DATA } from '@/utils/constants'
import './index.scss'

export default function Profile() {
  const user = USER_MOCK_DATA
  const progress = (user.experience / user.nextLevelExperience) * 100
  const remaining = user.nextLevelExperience - user.experience

  const handleMenuClick = (type: string) => {
    switch (type) {
      case 'favorites':
        Taro.navigateTo({ url: '/pages/favorites/index' })
        break
      case 'achievements':
        Taro.navigateTo({ url: '/pages/achievements/index' })
        break
      case 'notifications':
        Taro.navigateTo({ url: '/pages/notification-settings/index' })
        break
      case 'settings':
        Taro.navigateTo({ url: '/pages/settings/index' })
        break
    }
  }

  return (
    <View className="profile-page">
      {/* 头部 */}
      <View className="page-header">
        <Text className="page-title">我的</Text>
      </View>

      <ScrollView scrollY className="page-content">
        {/* 用户信息卡片 */}
        <View className="user-card">
          <View className="user-card__header">
            <View className="user-card__avatar">
              <Text>👤</Text>
            </View>
            <View className="user-card__info">
              <Text className="user-card__name">{user.nickname}</Text>
              <Text className="user-card__bio">开始徒步 3 个月</Text>
            </View>
          </View>

          {/* 数据统计 */}
          <View className="user-card__stats">
            <View className="user-card__stat">
              <Text className="user-card__stat-value">{user.stats.hikingDays}</Text>
              <Text className="user-card__stat-label">徒步天数</Text>
            </View>
            <View className="user-card__stat">
              <Text className="user-card__stat-value">{user.stats.totalDistance}</Text>
              <Text className="user-card__stat-label">总里程(km)</Text>
            </View>
            <View className="user-card__stat">
              <Text className="user-card__stat-value">{user.stats.completedRoutes}</Text>
              <Text className="user-card__stat-label">完成路线</Text>
            </View>
          </View>
        </View>

        {/* 功能菜单 - 我的内容 */}
        <View className="menu-section">
          <View className="menu-item" onClick={() => handleMenuClick('favorites')}>
            <View className="menu-item__left">
              <Text className="menu-item__icon">❤️</Text>
              <Text className="menu-item__title">我的收藏</Text>
            </View>
            <View className="menu-item__right">
              <Text className="menu-item__badge">12</Text>
              <Text className="menu-item__arrow">›</Text>
            </View>
          </View>
          <View className="menu-item" onClick={() => handleMenuClick('achievements')}>
            <View className="menu-item__left">
              <Text className="menu-item__icon">🏆</Text>
              <Text className="menu-item__title">我的成就</Text>
            </View>
            <View className="menu-item__right">
              <Text className="menu-item__badge">5</Text>
              <Text className="menu-item__arrow">›</Text>
            </View>
          </View>
        </View>

        {/* 功能菜单 - 设置 */}
        <View className="menu-section">
          <View className="menu-item" onClick={() => handleMenuClick('notifications')}>
            <View className="menu-item__left">
              <Text className="menu-item__icon">🔔</Text>
              <Text className="menu-item__title">通知设置</Text>
            </View>
            <View className="menu-item__right">
              <Text className="menu-item__arrow">›</Text>
            </View>
          </View>
          <View className="menu-item" onClick={() => handleMenuClick('settings')}>
            <View className="menu-item__left">
              <Text className="menu-item__icon">⚙️</Text>
              <Text className="menu-item__title">账号设置</Text>
            </View>
            <View className="menu-item__right">
              <Text className="menu-item__arrow">›</Text>
            </View>
          </View>
        </View>

        {/* 等级卡片 */}
        <View className="level-card">
          <View className="level-card__header">
            <View className="level-card__title">
              <Text className="level-card__title--label">当前等级</Text>
              <Text className="level-card__title--level">Lv.3 进阶徒步者</Text>
            </View>
            <Text className="level-card__emoji">🥾</Text>
          </View>
          <View className="level-card__progress">
            <View className="level-card__progress-fill" style={{ width: `${progress}%` }} />
          </View>
          <Text className="level-card__hint">再徒步 {remaining}km 升级到 Lv.4</Text>
        </View>

        {/* 勋章墙 */}
        <View className="badges-section">
          <View className="badges-section__header">
            <Text className="badges-section__title">我的勋章</Text>
            <Text className="badges-section__count">5/20</Text>
          </View>
          <View className="badges-section__grid">
            {user.badges.map(badge => (
              <View key={badge.id} className="badges-section__item">
                <Text className={`badges-section__item-emoji ${badge.unlocked ? '' : 'locked'}`}>
                  {badge.emoji}
                </Text>
                <Text className="badges-section__item-label">{badge.label}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
