import { View, Text, ScrollView, Input, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useState, useEffect } from 'react'
import { Route } from '@/types'
import { ROUTES_MOCK_DATA } from '@/utils/constants'
import './index.scss'

export default function Routes() {
  const [routes, setRoutes] = useState<Route[]>([])
  const [filteredRoutes, setFilteredRoutes] = useState<Route[]>([])
  const [selectedDifficulty, setSelectedDifficulty] = useState('全部')
  const [searchKeyword, setSearchKeyword] = useState('')

  const difficulties = ['全部', '初级', '中级']

  useEffect(() => {
    setRoutes(ROUTES_MOCK_DATA)
    setFilteredRoutes(ROUTES_MOCK_DATA)
  }, [])

  // 筛选路线
  useEffect(() => {
    let filtered = [...routes]

    // 难度筛选
    if (selectedDifficulty !== '全部') {
      filtered = filtered.filter(r => r.difficulty === selectedDifficulty)
    }

    // 关键词搜索
    if (searchKeyword) {
      const keyword = searchKeyword.toLowerCase()
      filtered = filtered.filter(r =>
        r.title.toLowerCase().includes(keyword) ||
        r.location.toLowerCase().includes(keyword)
      )
    }

    setFilteredRoutes(filtered)
  }, [selectedDifficulty, searchKeyword, routes])

  const handleRouteClick = (route: Route) => {
    Taro.navigateTo({
      url: `/pages/route-detail/index?id=${route.id}`
    })
  }

  return (
    <View className="routes-page">
      {/* 搜索栏 */}
      <View className="search-bar">
        <Input
          className="search-input"
          placeholder="搜索路线或地点"
          value={searchKeyword}
          onInput={(e) => setSearchKeyword(e.detail.value)}
        />
      </View>

      {/* 难度筛选 */}
      <View className="difficulty-filter">
        <ScrollView scrollX className="filter-scroll">
          <View className="filter-list">
            {difficulties.map(difficulty => (
              <View
                key={difficulty}
                className={`filter-item ${selectedDifficulty === difficulty ? 'active' : ''}`}
                onClick={() => setSelectedDifficulty(difficulty)}
              >
                <Text>{difficulty}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>

      {/* 路线列表 */}
      <View className="route-list">
        {filteredRoutes.map(route => (
          <View
            key={route.id}
            className="route-card"
            onClick={() => handleRouteClick(route)}
          >
            <View className="route-card__image">
              <Image
                className="route-card__img"
                src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=200&h=200&fit=crop"
                mode="aspectFill"
              />
            </View>
            <View className="route-card__content">
              <Text className="route-card__title">{route.title}</Text>
              <View className="route-card__tags">
                <View className={`tag ${route.difficulty === '初级' ? 'difficulty-easy' : 'difficulty-medium'}`}>
                  <Text>{route.difficulty}</Text>
                </View>
                <Text className="text-secondary">{route.distance}</Text>
              </View>
              <View className="route-card__meta">
                <View className="time">
                  <Text>⏱ {route.duration}</Text>
                </View>
                <View className="rating">
                  <Text className="star">★</Text>
                  <Text className="value">{route.rating}</Text>
                </View>
              </View>
            </View>
          </View>
        ))}

        {filteredRoutes.length === 0 && (
          <View className="empty-state">
            <Text>暂无路线</Text>
          </View>
        )}
      </View>
    </View>
  )
}
