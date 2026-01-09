import { View, Text, Button } from '@tarojs/components';
import Taro, { useRouter } from '@tarojs/taro';
import { useState, useEffect } from 'react';
import './index.scss';

export default function HikingCompletePage() {
  const router = useRouter();
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const elapsedParam = parseInt(router.params.elapsed || '0');
    setElapsed(elapsedParam);
  }, [router.params]);

  const handleClose = () => {
    Taro.navigateBack();
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <View className="hiking-complete-overlay" onClick={handleClose}>
      <View className="hiking-complete-modal" onClick={(e) => e.stopPropagation()}>
        <View className="hiking-complete-modal__header">
          <Text className="hiking-complete-modal__title">🎉 徒步完成！</Text>
          <View className="hiking-complete-modal__close" onClick={handleClose}>
            <Text>✕</Text>
          </View>
        </View>

        <View className="hiking-complete-modal__content">
          <Text className="hiking-complete-modal__emoji">🏆</Text>
          <Text className="hiking-complete-modal__message">恭喜你完成本次徒步！</Text>

          <View className="hiking-complete-modal__stats">
            <View className="hiking-complete-modal__stat">
              <Text className="hiking-complete-modal__stat-value">{formatTime(elapsed)}</Text>
              <Text className="hiking-complete-modal__stat-label">用时</Text>
            </View>
            <View className="hiking-complete-modal__stat">
              <Text className="hiking-complete-modal__stat-value">+50</Text>
              <Text className="hiking-complete-modal__stat-label">经验值</Text>
            </View>
          </View>
        </View>

        <Button
          className="hiking-complete-modal__button"
          onClick={handleClose}
        >
          完成
        </Button>
      </View>
    </View>
  );
}
