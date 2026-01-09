import { View, Text, Image, Button } from '@tarojs/components';
import Taro from '@tarojs/taro';
import './index.scss';

interface Route {
  id: number;
  title: string;
  difficulty: string;
  distance: string;
  duration: string;
  location: string;
  rating: number;
}

const FAVORITES_ROUTES: Route[] = [
  {
    id: 1,
    title: '香山红叶徒步环线',
    difficulty: '初级',
    distance: '5.2km',
    duration: '2-3小时',
    location: '北京·海淀区',
    rating: 4.8,
  },
  {
    id: 2,
    title: '凤凰岭登山步道',
    difficulty: '中级',
    distance: '8.5km',
    duration: '3-4小时',
    location: '北京·海淀区',
    rating: 4.9,
  },
  {
    id: 3,
    title: '百望山森林环线',
    difficulty: '初级',
    distance: '4.8km',
    duration: '2小时',
    location: '北京·海淀区',
    rating: 4.6,
  },
];

export default function FavoritesPage() {
  const handleBack = () => {
    Taro.navigateBack();
  };

  const handleRouteClick = (route: Route) => {
    Taro.navigateTo({
      url: `/pages/route-detail/index?id=${route.id}`
    });
  };

  return (
    <View className="favorites-page">
      {/* Header */}
      <View className="favorites-header">
        <View className="favorites-header__back" onClick={handleBack}>
          <Text className="favorites-header__back-icon">‹</Text>
        </View>
        <Text className="favorites-header__title">我的收藏</Text>
      </View>

      {/* Content */}
      <View className="favorites-content">
        {FAVORITES_ROUTES.map((route) => (
          <View
            key={route.id}
            className="favorites-card"
            onClick={() => handleRouteClick(route)}
          >
            <View className="favorites-card__image-wrapper">
              <Image
                className="favorites-card__image"
                src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=300&fit=crop"
                mode="aspectFill"
              />
              <View className="favorites-card__rating">
                <Text className="favorites-card__rating-star">★</Text>
                <Text className="favorites-card__rating-value">{route.rating}</Text>
              </View>
            </View>
            <View className="favorites-card__content">
              <Text className="favorites-card__title">{route.title}</Text>
              <View className="favorites-card__meta">
                <View className={`favorites-card__badge favorites-card__badge--${route.difficulty === '初级' ? 'easy' : 'medium'}`}>
                  <Text className="favorites-card__badge-text">{route.difficulty}</Text>
                </View>
                <Text className="favorites-card__distance">{route.distance}</Text>
                <Text className="favorites-card__separator">·</Text>
                <Text className="favorites-card__duration">{route.duration}</Text>
              </View>
              <View className="favorites-card__location">
                <Text className="favorites-card__location-icon">📍</Text>
                <Text className="favorites-card__location-text">{route.location}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
