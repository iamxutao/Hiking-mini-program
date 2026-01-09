import { View, Text, Checkbox, CheckboxGroup } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useState } from 'react';
import './index.scss';

interface NotificationItem {
  id: string;
  title: string;
  desc: string;
  checked: boolean;
}

const NOTIFICATION_ITEMS: NotificationItem[] = [
  { id: 'activity', title: '活动提醒', desc: '新活动开始前通知', checked: true },
  { id: 'registration', title: '报名状态', desc: '活动报名变化通知', checked: true },
  { id: 'system', title: '系统消息', desc: '系统更新和公告', checked: true },
  { id: 'recommendation', title: '推荐活动', desc: '基于你的喜好推荐', checked: false },
];

export default function NotificationSettingsPage() {
  const [checkedList, setCheckedList] = useState<string[]>(['activity', 'registration', 'system']);

  const handleBack = () => {
    Taro.navigateBack();
  };

  const handleCheckboxChange = (value: string[]) => {
    setCheckedList(value);
  };

  const isChecked = (id: string) => {
    return checkedList.includes(id);
  };

  return (
    <View className="notification-settings-page">
      {/* Header */}
      <View className="notification-settings-header">
        <View className="notification-settings-header__back" onClick={handleBack}>
          <Text className="notification-settings-header__back-icon">‹</Text>
        </View>
        <Text className="notification-settings-header__title">通知设置</Text>
      </View>

      {/* Content */}
      <View className="notification-settings-content">
        <View className="notification-settings-card">
          <CheckboxGroup onChange={handleCheckboxChange}>
            {NOTIFICATION_ITEMS.map((item, index) => (
              <View
                key={item.id}
                className={`notification-settings-item ${index === NOTIFICATION_ITEMS.length - 1 ? 'notification-settings-item--last' : ''}`}
              >
                <View className="notification-settings-item__info">
                  <Text className="notification-settings-item__title">{item.title}</Text>
                  <Text className="notification-settings-item__desc">{item.desc}</Text>
                </View>
                <Checkbox
                  value={item.id}
                  checked={isChecked(item.id)}
                  className="notification-settings-item__checkbox"
                  color="#10b981"
                />
              </View>
            ))}
          </CheckboxGroup>
        </View>
      </View>
    </View>
  );
}
