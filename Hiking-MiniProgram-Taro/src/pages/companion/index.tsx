import { View, Text, ScrollView } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useState } from 'react'
import { Activity } from '@/types'
import { ACTIVITIES_MOCK_DATA } from '@/utils/constants'
import './index.scss'

export default function Companion() {
  const [activities, setActivities] = useState<Activity[]>(ACTIVITIES_MOCK_DATA)

  const handleCreateActivity = () => {
    Taro.showToast({
      title: '功能开发中',
      icon: 'none'
    })
  }

  const handleActivityClick = (activity: Activity) => {
    Taro.navigateTo({
      url: `/pages/activity-detail/index?id=${activity.id}`
    })
  }

  return (
    <View className="companion-page">
      {/* 头部 */}
      <View className="page-header">
        <View className="header-top">
          <Text className="page-title">结伴同行</Text>
          <View className="create-btn" onClick={handleCreateActivity}>
            <Text>+</Text>
            <Text>发起</Text>
          </View>
        </View>
        <Text className="page-subtitle">找到志同道合的徒步伙伴</Text>
      </View>

      {/* 活动列表 */}
      <View className="page-content">
        <View className="activity-list">
          {activities.map(activity => {
            const progress = (activity.currentParticipants / activity.maxParticipants) * 100
            const isFull = activity.currentParticipants >= activity.maxParticipants

            return (
              <View
                key={activity.id}
                className="activity-card"
                onClick={() => handleActivityClick(activity)}
              >
                {/* 标题和状态 */}
                <View className="activity-card__header">
                  <View className="activity-card__title-section">
                    <Text className="activity-card__title">{activity.title}</Text>
                    <View className="activity-card__organizer">
                      <View className="activity-card__avatar">
                        <Text>{activity.organizer[0]}</Text>
                      </View>
                      <Text className="activity-card__organizer-name">{activity.organizer}</Text>
                    </View>
                  </View>
                  <View className={`activity-card__badge ${isFull ? 'status-full' : 'status-recruiting'}`}>
                    <Text>{isFull ? '已满员' : '招募中'}</Text>
                  </View>
                </View>

                {/* 活动信息 */}
                <View className="activity-card__info">
                  <View className="activity-card__info-row">
                    <Text>📅 {activity.date}</Text>
                    <Text>·</Text>
                    <Text>⏱ {activity.time} 出发</Text>
                  </View>
                  <View className="activity-card__info-row">
                    <Text>📍 {activity.location}</Text>
                  </View>
                </View>

                {/* 路线信息 */}
                <View className="activity-card__route">
                  <Text className="activity-card__route-label">路线:</Text>
                  <Text className="activity-card__route-name">{activity.route}</Text>
                  <View className={`activity-card__difficulty-tag ${activity.difficulty === '初级' ? 'easy' : 'medium'}`}>
                    <Text>{activity.difficulty}</Text>
                  </View>
                </View>

                {/* 报名进度 */}
                <View className="activity-card__progress">
                  <View className="activity-card__progress-header">
                    <View className="activity-card__progress-info">
                      <Text>👥</Text>
                      <Text>{activity.currentParticipants}/{activity.maxParticipants} 人</Text>
                    </View>
                  </View>
                  <View className="activity-card__progress-bar">
                    <View
                      className={`activity-card__progress-bar__fill ${isFull ? 'full' : ''}`}
                      style={{ width: `${progress}%` }}
                    />
                  </View>
                </View>
              </View>
            )
          })}
        </View>
      </View>
    </View>
  )
}
