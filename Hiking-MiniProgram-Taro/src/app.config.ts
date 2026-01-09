// Taro 应用配置
export default {
  pages: [
    'pages/index/index',
    'pages/routes/index',
    'pages/records/index',
    'pages/companion/index',
    'pages/profile/index',
    'pages/route-detail/index',
    'pages/activity-detail/index',
    'pages/hiking/index',
    'pages/hiking-complete/index',
    'pages/favorites/index',
    'pages/achievements/index',
    'pages/settings/index',
    'pages/notification-settings/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#10b981',
    navigationBarTitleText: '徒步小程序',
    navigationBarTextStyle: 'white',
    backgroundColor: '#f9fafb'
  },
  tabBar: {
    color: '#9ca3af',
    selectedColor: '#10b981',
    backgroundColor: '#ffffff',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: 'assets/icons/home.png',
        selectedIconPath: 'assets/icons/home-active.png'
      },
      {
        pagePath: 'pages/routes/index',
        text: '路线',
        iconPath: 'assets/icons/routes.png',
        selectedIconPath: 'assets/icons/routes-active.png'
      },
      {
        pagePath: 'pages/records/index',
        text: '记录',
        iconPath: 'assets/icons/records.png',
        selectedIconPath: 'assets/icons/records-active.png'
      },
      {
        pagePath: 'pages/companion/index',
        text: '结伴',
        iconPath: 'assets/icons/companion.png',
        selectedIconPath: 'assets/icons/companion-active.png'
      },
      {
        pagePath: 'pages/profile/index',
        text: '我的',
        iconPath: 'assets/icons/profile.png',
        selectedIconPath: 'assets/icons/profile-active.png'
      }
    ]
  }
}
