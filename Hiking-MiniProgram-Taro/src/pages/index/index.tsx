import { View, Text, ScrollView, Image, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useState, useEffect } from 'react'
import { Route, Activity } from '@/types'
import { ROUTES_MOCK_DATA, ACTIVITIES_MOCK_DATA } from '@/utils/constants'
import './index.scss'

export default function Index() {
  const [featuredRoutes, setFeaturedRoutes] = useState<Route[]>([])
  const [weekendActivities, setWeekendActivities] = useState<Activity[]>([])

  useEffect(() => {
    // 热门路线（前3个）
    setFeaturedRoutes(ROUTES_MOCK_DATA.slice(0, 3))
    // 本周活动
    setWeekendActivities(ACTIVITIES_MOCK_DATA.filter(a => a.status === 'recruiting').slice(0, 2))
  }, [])

  const handleRouteClick = (route: Route) => {
    Taro.navigateTo({
      url: `/pages/route-detail/index?id=${route.id}`
    })
  }

  const handleActivityClick = (activity: Activity) => {
    Taro.navigateTo({
      url: `/pages/activity-detail/index?id=${activity.id}`
    })
  }

  return (
    <View className="index-page">
      {/* 头部 Banner */}
      <View className="page-header">
        <Text className="page-title">发现周边</Text>
        <Text className="page-subtitle">城市周边徒步，从这里开始</Text>
      </View>

      <ScrollView scrollY className="page-content">
        {/* 热门推荐 */}
        <View className="section">
          <View className="section-header">
            <Text className="section-icon">📈</Text>
            <Text className="section-title">热门路线</Text>
          </View>
          <View className="route-list">
            {featuredRoutes.map(route => (
              <View
                key={route.id}
                className="route-card"
                onClick={() => handleRouteClick(route)}
              >
                <View className="route-card__image">
                  <Image
                    src={route.images?.[0] || 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=300&fit=crop'}
                    mode="aspectFill"
                    className="route-card__img"
                  />
                  <View className="route-card__rating">
                    <Text>⭐ {route.rating}</Text>
                  </View>
                </View>
                <View className="route-card__content">
                  <Text className="route-card__title">{route.title}</Text>
                  <View className="route-card__tags">
                    <View className={`tag ${route.difficulty === '初级' ? 'difficulty-easy' : 'difficulty-medium'}`}>
                      <Text>{route.difficulty}</Text>
                    </View>
                    <Text className="text-secondary">{route.distance}</Text>
                    <Text className="text-divider">·</Text>
                    <Text className="text-secondary">{route.duration}</Text>
                  </View>
                  <View className="route-card__location">
                    <Text>📍 {route.location}</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* 本周活动 */}
        <View className="section">
          <View className="section-header">
            <Text className="section-icon">⏰</Text>
            <Text className="section-title">本周活动</Text>
          </View>
          <View className="activity-list">
            {weekendActivities.map(activity => {
              const progress = (activity.currentParticipants / activity.maxParticipants) * 100
              return (
                <View
                  key={activity.id}
                  className="activity-card"
                  onClick={() => handleActivityClick(activity)}
                >
                  <View className="activity-card__header">
                    <View className="activity-card__title-section">
                      <Text className="activity-card__title">{activity.title}</Text>
                      <Text className="activity-card__organizer">{activity.organizer} 发起</Text>
                    </View>
                    <View className="activity-card__badge">
                      <Text>招募中</Text>
                    </View>
                  </View>
                  <View className="activity-card__time">
                    <Text>⏱️ {activity.date} {activity.time}</Text>
                  </View>
                  <View className="activity-card__progress">
                    <View className="progress-info">
                      <Text>{activity.currentParticipants}/{activity.maxParticipants} 人</Text>
                    </View>
                    <View className="progress-bar">
                      <View className="progress-bar__fill" style={{ width: `${progress}%` }}></View>
                    </View>
                  </View>
                </View>
              )
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
