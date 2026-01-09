import { useState, useEffect } from 'react';
import { View, Text, Button, Image } from '@tarojs/components';
import Taro, { useRouter } from '@tarojs/taro';
import { Route } from '@/types';
import { ROUTES_MOCK_DATA } from '@/utils/constants';
import './index.scss';

export default function HikingPage() {
  const router = useRouter();
  const { id } = router.params;
  const [route, setRoute] = useState<Route | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const routeData = ROUTES_MOCK_DATA.find(r => r.id === Number(id));
    if (routeData) {
      setRoute(routeData);
    }
  }, [id]);

  // 模拟计时器
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (isRunning) {
      timer = setInterval(() => {
        setElapsed(e => e + 1);
      }, 1000);

      // 5秒后自动完成（模拟）
      const finishTimer = setTimeout(() => {
        if (timer) clearInterval(timer);
        handleFinish();
      }, 5000);

      return () => {
        if (timer) clearInterval(timer);
        clearTimeout(finishTimer);
      };
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isRunning]);

  const handleBack = () => {
    Taro.navigateBack();
  };

  const handleToggle = () => {
    if (isRunning) {
      setIsRunning(false);
    } else {
      setIsRunning(true);
    }
  };

  const handleFinish = () => {
    Taro.navigateTo({
      url: `/pages/hiking-complete/index?elapsed=${elapsed}`
    });
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <View className="hiking-page">
      {/* Header */}
      <View className="hiking-header">
        <View className="hiking-header__back" onClick={handleBack}>
          <Text className="hiking-header__back-icon">‹</Text>
        </View>
        <Text className="hiking-header__title">{route?.title || '徒步中'}</Text>
      </View>

      {/* Map Placeholder */}
      <View className="hiking-map">
        <Text className="hiking-map__emoji">🗺️</Text>
        <Text className="hiking-map__text">地图加载中...</Text>
      </View>

      {/* Stats */}
      <View className="hiking-stats">
        <View className="hiking-stats__timer">
          <Text className="hiking-stats__timer-value">{formatTime(elapsed)}</Text>
          <Text className="hiking-stats__timer-label">用时</Text>
        </View>

        <View className="hiking-stats__grid">
          <View className="hiking-stats__item">
            <Text className="hiking-stats__item-value">{route?.distance || '5.2km'}</Text>
            <Text className="hiking-stats__item-label">距离</Text>
          </View>
          <View className="hiking-stats__item">
            <Text className="hiking-stats__item-value">{route?.elevation || '↑280m'}</Text>
            <Text className="hiking-stats__item-label">爬升</Text>
          </View>
          <View className="hiking-stats__item">
            <Text className="hiking-stats__item-value">{route?.rating || 4.8}</Text>
            <Text className="hiking-stats__item-label">评分</Text>
          </View>
        </View>

        <Button
          className={`hiking-stats__button hiking-stats__button--${isRunning ? 'pause' : 'start'}`}
          onClick={handleToggle}
        >
          {isRunning ? (
            <>
              <Text className="hiking-stats__button-icon">⏸</Text>
              <Text>暂停</Text>
            </>
          ) : (
            <>
              <Text className="hiking-stats__button-icon">▶</Text>
              <Text>开始徒步</Text>
            </>
          )}
        </Button>
      </View>
    </View>
  );
}
