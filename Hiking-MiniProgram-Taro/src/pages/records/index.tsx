import { View, Text, ScrollView } from '@tarojs/components'
import { RECORDS_MOCK_DATA, MONTHLY_STATS_MOCK_DATA, CUMULATIVE_STATS_MOCK_DATA } from '@/utils/constants'
import './index.scss'

export default function Records() {
  return (
    <View className="records-page">
      {/* 头部 */}
      <View className="page-header">
        <Text className="page-title">我的记录</Text>

        {/* 本月数据 */}
        <View className="monthly-stats-card">
          <Text className="monthly-label">本月数据</Text>
          <View className="monthly-grid">
            <View className="stat-item">
              <Text className="stat-item-value">
                {MONTHLY_STATS_MOCK_DATA.count}
                <Text className="unit">次</Text>
              </Text>
              <Text className="stat-item-label">徒步次数</Text>
            </View>
            <View className="stat-item">
              <Text className="stat-item-value">
                {MONTHLY_STATS_MOCK_DATA.distance}
                <Text className="unit">km</Text>
              </Text>
              <Text className="stat-item-label">累计距离</Text>
            </View>
            <View className="stat-item">
              <Text className="stat-item-value">
                {MONTHLY_STATS_MOCK_DATA.duration}
                <Text className="unit">小时</Text>
              </Text>
              <Text className="stat-item-label">累计时长</Text>
            </View>
          </View>
        </View>
      </View>

      <ScrollView scrollY className="page-content">
        {/* 累计成就 */}
        <View className="section">
          <View className="section-header">
            <Text className="section-icon">🏆</Text>
            <Text className="section-title">累计成就</Text>
          </View>
          <View className="achievements-grid">
            <View className="achievement-card">
              <Text className="achievement-card__emoji">📏</Text>
              <Text className="achievement-card__value">
                {CUMULATIVE_STATS_MOCK_DATA.totalDistance}
                <Text className="unit">km</Text>
              </Text>
              <Text className="achievement-card__label">总里程</Text>
            </View>
            <View className="achievement-card achievement-card--blue">
              <Text className="achievement-card__emoji">📅</Text>
              <Text className="achievement-card__value">
                {CUMULATIVE_STATS_MOCK_DATA.hikingDays}
                <Text className="unit">天</Text>
              </Text>
              <Text className="achievement-card__label">徒步天数</Text>
            </View>
            <View className="achievement-card achievement-card--purple">
              <Text className="achievement-card__emoji">🏔️</Text>
              <Text className="achievement-card__value">
                {CUMULATIVE_STATS_MOCK_DATA.completedRoutes}
                <Text className="unit">条</Text>
              </Text>
              <Text className="achievement-card__label">完成路线</Text>
            </View>
            <View className="achievement-card achievement-card--orange">
              <Text className="achievement-card__emoji">⛰️</Text>
              <Text className="achievement-card__value">
                {CUMULATIVE_STATS_MOCK_DATA.totalElevation}
                <Text className="unit">m</Text>
              </Text>
              <Text className="achievement-card__label">累计爬升</Text>
            </View>
          </View>
        </View>

        {/* 徒步记录 */}
        <View className="section">
          <View className="section-header">
            <Text className="section-icon">📅</Text>
            <Text className="section-title">徒步记录</Text>
          </View>
          <View className="record-list">
            {RECORDS_MOCK_DATA.map(record => (
              <View key={record.id} className="record-card">
                <View className="record-card__header">
                  <View>
                    <Text className="record-card__title">{record.routeTitle}</Text>
                    <View className="record-card__date">
                      <Text>📅 {record.date}</Text>
                    </View>
                  </View>
                </View>
                <View className="record-card__stats">
                  <View className="record-card__stat record-card__stat--emerald">
                    <Text className="record-card__stat-value">{record.distance}</Text>
                    <Text className="record-card__stat-label">距离</Text>
                  </View>
                  <View className="record-card__stat record-card__stat--blue">
                    <Text className="record-card__stat-value">{record.duration}</Text>
                    <Text className="record-card__stat-label">时长</Text>
                  </View>
                  <View className="record-card__stat record-card__stat--orange">
                    <Text className="record-card__stat-value">{record.elevation}</Text>
                    <Text className="record-card__stat-label">爬升</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
