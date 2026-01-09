import { View, Text, Button } from '@tarojs/components';
import Taro from '@tarojs/taro';
import './index.scss';

export default function SettingsPage() {
  const handleBack = () => {
    Taro.navigateBack();
  };

  const handleMenuItemClick = (title: string) => {
    Taro.showToast({
      title: `${title}功能开发中`,
      icon: 'none'
    });
  };

  return (
    <View className="settings-page">
      {/* Header */}
      <View className="settings-header">
        <View className="settings-header__back" onClick={handleBack}>
          <Text className="settings-header__back-icon">‹</Text>
        </View>
        <Text className="settings-header__title">账号设置</Text>
      </View>

      {/* Content */}
      <View className="settings-content">
        {/* User Info Card */}
        <View className="settings-user-card">
          <View className="settings-user-card__row">
            <Text className="settings-user-card__label">头像</Text>
            <View className="settings-user-card__avatar">
              <Text className="settings-user-card__avatar-icon">👤</Text>
            </View>
          </View>
          <View className="settings-user-card__row">
            <Text className="settings-user-card__label">昵称</Text>
            <Text className="settings-user-card__value">徒步爱好者</Text>
          </View>
          <View className="settings-user-card__row settings-user-card__row--last">
            <Text className="settings-user-card__label">等级</Text>
            <Text className="settings-user-card__level">Lv.3</Text>
          </View>
        </View>

        {/* Menu Items */}
        <View className="settings-menu">
          <Button
            className="settings-menu-item"
            onClick={() => handleMenuItemClick('个人资料')}
          >
            <Text className="settings-menu-item__label">个人资料</Text>
            <Text className="settings-menu-item__arrow">›</Text>
          </Button>
          <Button
            className="settings-menu-item"
            onClick={() => handleMenuItemClick('账号安全')}
          >
            <Text className="settings-menu-item__label">账号安全</Text>
            <Text className="settings-menu-item__arrow">›</Text>
          </Button>
          <Button
            className="settings-menu-item settings-menu-item--last"
            onClick={() => handleMenuItemClick('关于我们')}
          >
            <Text className="settings-menu-item__label">关于我们</Text>
            <Text className="settings-menu-item__arrow">›</Text>
          </Button>
        </View>
      </View>
    </View>
  );
}
