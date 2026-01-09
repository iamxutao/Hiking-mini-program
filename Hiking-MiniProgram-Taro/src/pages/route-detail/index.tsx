import { View, Text, Image, Button } from '@tarojs/components'
import Taro, { useRouter } from '@tarojs/taro'
import { useState, useEffect } from 'react'
import { Route } from '@/types'
import { ROUTES_MOCK_DATA } from '@/utils/constants'
import './index.scss'

export default function RouteDetail() {
  const router = useRouter()
  const { id } = router.params
  const [route, setRoute] = useState<Route | null>(null)
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    const routeData = ROUTES_MOCK_DATA.find(r => r.id === Number(id))
    if (routeData) {
      setRoute(routeData)
    }
  }, [id])

  const handleFavorite = () => {
    setIsFavorite(!isFavorite)
    Taro.showToast({
      title: isFavorite ? '已取消收藏' : '已添加收藏',
      icon: 'success'
    })
  }

  const handleStartHiking = () => {
    Taro.navigateTo({
      url: `/pages/hiking/index?id=${route?.id || ''}`
    })
  }

  if (!route) {
    return (
      <View className="loading">
        <Text>加载中...</Text>
      </View>
    )
  }

  const difficultyClass = route.difficulty === '初级' ? 'difficulty-easy' : 'difficulty-medium'

  return (
    <View className="route-detail-page">
      {/* 路线图片 */}
      <View className="route-image">
        <Image
          src={route.images?.[0] || 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800'}
          mode="aspectFill"
          className="route-img"
        />
        <View className="rating-badge">
          <Text>⭐ {route.rating}</Text>
        </View>
        <View className="back-btn" onClick={() => Taro.navigateBack()}>
          <Text>← 返回</Text>
        </View>
      </View>

      {/* 路线信息 */}
      <View className="route-info">
        <Text className="route-title">{route.title}</Text>

        {/* 关键数据 */}
        <View className="data-cards">
          <View className="data-card">
            <Text className="data-icon">📏</Text>
            <Text className="data-value">{route.distance}</Text>
            <Text className="data-label">距离</Text>
          </View>
          <View className="data-card">
            <Text className="data-icon">⏱️</Text>
            <Text className="data-value">{route.duration}</Text>
            <Text className="data-label">时长</Text>
          </View>
          <View className="data-card">
            <Text className="data-icon">⛰️</Text>
            <Text className="data-value">{route.elevation}</Text>
            <Text className="data-label">爬升</Text>
          </View>
        </View>

        {/* 难度和位置 */}
        <View className="meta-info">
          <View className={`difficulty-badge ${difficultyClass}`}>
            <Text>{route.difficulty}</Text>
          </View>
          <Text className="location">📍 {route.location}</Text>
        </View>

        {/* 路线简介 */}
        <View className="section">
          <Text className="section-title">ℹ️ 路线简介</Text>
          <Text className="description">{route.description}</Text>
        </View>

        {/* 温馨提示 */}
        <View className="section">
          <Text className="section-title">📈 温馨提示</Text>
          <View className="tips-list">
            {route.tips.map((tip, index) => (
              <View key={index} className="tip-item">
                <View className="tip-dot"></View>
                <Text className="tip-text">{tip}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* 底部按钮 */}
      <View className="bottom-actions">
        <Button
          className="btn-favorite"
          onClick={handleFavorite}
        >
          {isFavorite ? '❤️ 已收藏' : '🤍 收藏路线'}
        </Button>
        <Button
          className="btn-start"
          onClick={handleStartHiking}
        >
          开始徒步
        </Button>
      </View>
    </View>
  )
}
