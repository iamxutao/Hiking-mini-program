import { View, Text, Button } from '@tarojs/components'
import Taro, { useRouter } from '@tarojs/taro'
import { useState, useEffect } from 'react'
import { Activity } from '@/types'
import { ACTIVITIES_MOCK_DATA } from '@/utils/constants'
import './index.scss'

export default function ActivityDetail() {
  const router = useRouter()
  const { id } = router.params
  const [activity, setActivity] = useState<Activity | null>(null)
  const [isRegistered, setIsRegistered] = useState(false)

  useEffect(() => {
    const activityData = ACTIVITIES_MOCK_DATA.find(a => a.id === Number(id))
    if (activityData) {
      setActivity(activityData)
      setIsRegistered(activityData.status === 'recruiting')
    }
  }, [id])

  const handleRegister = () => {
    if (activity?.status === 'full') {
      Taro.showToast({
        title: '活动已满员',
        icon: 'none'
      })
      return
    }

    setIsRegistered(!isRegistered)
    Taro.showToast({
      title: isRegistered ? '已取消报名' : '报名成功',
      icon: 'success'
    })
  }

  if (!activity) {
    return (
      <View className="loading">
        <Text>加载中...</Text>
      </View>
    )
  }

  const progress = (activity.currentParticipants / activity.maxParticipants) * 100
  const difficultyClass = activity.difficulty === '初级' ? 'difficulty-easy' : 'difficulty-medium'

  return (
    <View className="activity-detail-page">
      {/* 头部 */}
      <View className="page-header">
        <View className="back-btn" onClick={() => Taro.navigateBack()}>
          <Text>← 返回</Text>
        </View>
        <Text className="page-title">活动详情</Text>
      </View>

      {/* 活动信息 */}
      <View className="activity-content">
        <Text className="activity-title">{activity.title}</Text>

        {/* 发起人 */}
        <View className="organizer-section">
          <View className="organizer-avatar">👤</View>
          <View className="organizer-info">
            <Text className="organizer-label">发起人</Text>
            <Text className="organizer-name">{activity.organizer}</Text>
          </View>
        </View>

        {/* 活动详情 */}
        <View className="info-section">
          <View className="info-row">
            <Text className="info-icon">📅</Text>
            <View className="info-content">
              <Text className="info-label">日期</Text>
              <Text className="info-value">{activity.date}</Text>
            </View>
          </View>
          <View className="info-row">
            <Text className="info-icon">⏱️</Text>
            <View className="info-content">
              <Text className="info-label">时间</Text>
              <Text className="info-value">{activity.time}</Text>
            </View>
          </View>
          <View className="info-row">
            <Text className="info-icon">📍</Text>
            <View className="info-content">
              <Text className="info-label">地点</Text>
              <Text className="info-value">{activity.location}</Text>
            </View>
          </View>
        </View>

        {/* 路线信息 */}
        <View className="route-section">
          <Text className="section-title">路线信息</Text>
          <View className="route-card">
            <Text className="route-name">{activity.route}</Text>
            <View className="route-meta">
              <View className={`difficulty-badge ${difficultyClass}`}>
                <Text>{activity.difficulty}</Text>
              </View>
              <Text className="route-distance">{activity.distance}</Text>
            </View>
          </View>
        </View>

        {/* 活动说明 */}
        <View className="description-section">
          <Text className="section-title">活动说明</Text>
          <Text className="description">{activity.description}</Text>
        </View>

        {/* 报名情况 */}
        <View className="registration-section">
          <Text className="section-title">报名情况</Text>
          <View className="progress-card">
            <View className="progress-info">
              <Text>{activity.currentParticipants}/{activity.maxParticipants} 人</Text>
            </View>
            <View className="progress-bar">
              <View className="progress-bar__fill" style={{ width: `${progress}%` }}></View>
            </View>
          </View>
        </View>
      </View>

      {/* 底部按钮 */}
      <View className="bottom-action">
        <Button
          className={`btn-register ${activity.status === 'full' ? 'disabled' : ''}`}
          onClick={handleRegister}
          disabled={activity.status === 'full'}
        >
          {activity.status === 'full' ? '已满员' : isRegistered ? '✓ 已报名' : '立即报名'}
        </Button>
      </View>
    </View>
  )
}
