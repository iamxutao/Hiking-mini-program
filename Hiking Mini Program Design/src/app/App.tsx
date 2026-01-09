import { useState } from 'react';
import HomePage from './components/HomePage';
import RoutesPage from './components/RoutesPage';
import RecordsPage from './components/RecordsPage';
import CompanionPage from './components/CompanionPage';
import ProfilePage from './components/ProfilePage';
import RouteDetail from './components/RouteDetail';
import ActivityDetail from './components/ActivityDetail';
import HikingPage from './components/HikingPage';
import HikingCompletePage from './components/HikingCompletePage';
import FavoritesPage from './components/FavoritesPage';
import AchievementsPage from './components/AchievementsPage';
import SettingsPage from './components/SettingsPage';
import NotificationSettingsPage from './components/NotificationSettingsPage';
import { Home, Map, Activity, Users, User } from 'lucide-react';

export type Route = {
  id: number;
  title: string;
  difficulty: string;
  distance: string;
  duration: string;
  location: string;
  rating: number;
  elevation: string;
  description: string;
  tips: string[];
};

export type ActivityType = {
  id: number;
  title: string;
  route: string;
  organizer: string;
  date: string;
  time: string;
  location: string;
  difficulty: string;
  distance: string;
  currentParticipants: number;
  maxParticipants: number;
  description: string;
};

type ViewState =
  | { type: 'main' }
  | { type: 'route-detail'; data: Route }
  | { type: 'activity-detail'; data: ActivityType }
  | { type: 'hiking'; data: Route }
  | { type: 'hiking-complete'; data: any }
  | { type: 'favorites' }
  | { type: 'achievements' }
  | { type: 'settings' }
  | { type: 'notification-settings' };

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [currentView, setCurrentView] = useState<ViewState>({ type: 'main' });

  const navigateToRouteDetail = (route: Route) => {
    setCurrentView({ type: 'route-detail', data: route });
  };

  const navigateToActivityDetail = (activity: ActivityType) => {
    setCurrentView({ type: 'activity-detail', data: activity });
  };

  const startHiking = (route: Route) => {
    setCurrentView({ type: 'hiking', data: route });
  };

  const finishHiking = (data: any) => {
    setCurrentView({ type: 'hiking-complete', data });
  };

  const navigateToFavorites = () => {
    setCurrentView({ type: 'favorites' });
  };

  const navigateToAchievements = () => {
    setCurrentView({ type: 'achievements' });
  };

  const navigateToSettings = () => {
    setCurrentView({ type: 'settings' });
  };

  const navigateToNotificationSettings = () => {
    setCurrentView({ type: 'notification-settings' });
  };

  const navigateBack = () => {
    setCurrentView({ type: 'main' });
  };

  const renderPage = () => {
    // 特殊页面（非主导航）
    if (currentView.type === 'route-detail') {
      return (
        <RouteDetail route={currentView.data} onBack={navigateBack} onStartHiking={startHiking} />
      );
    }
    if (currentView.type === 'activity-detail') {
      return <ActivityDetail activity={currentView.data} onBack={navigateBack} />;
    }
    if (currentView.type === 'hiking') {
      return <HikingPage route={currentView.data} onFinish={finishHiking} onBack={navigateBack} />;
    }
    if (currentView.type === 'hiking-complete') {
      return <HikingCompletePage data={currentView.data} onClose={navigateBack} />;
    }
    if (currentView.type === 'favorites') {
      return (
        <FavoritesPage onBack={navigateBack} onRouteClick={navigateToRouteDetail} />
      );
    }
    if (currentView.type === 'achievements') {
      return <AchievementsPage onBack={navigateBack} />;
    }
    if (currentView.type === 'settings') {
      return <SettingsPage onBack={navigateBack} />;
    }
    if (currentView.type === 'notification-settings') {
      return <NotificationSettingsPage onBack={navigateBack} />;
    }

    // 主导航页面
    switch (activeTab) {
      case 'home':
        return (
          <HomePage
            onRouteClick={navigateToRouteDetail}
            onActivityClick={navigateToActivityDetail}
          />
        );
      case 'routes':
        return <RoutesPage onRouteClick={navigateToRouteDetail} />;
      case 'records':
        return <RecordsPage />;
      case 'companion':
        return <CompanionPage onActivityClick={navigateToActivityDetail} />;
      case 'profile':
        return (
          <ProfilePage
            onNavigateToFavorites={navigateToFavorites}
            onNavigateToAchievements={navigateToAchievements}
            onNavigateToSettings={navigateToSettings}
            onNavigateToNotificationSettings={navigateToNotificationSettings}
          />
        );
      default:
        return (
          <HomePage
            onRouteClick={navigateToRouteDetail}
            onActivityClick={navigateToActivityDetail}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* 页面内容 */}
      <div className="min-h-[calc(100vh-64px)]">{renderPage()}</div>

      {/* 底部导航栏 - 只在主页面显示 */}
      {currentView.type === 'main' && (
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 shadow-lg">
          <div className="max-w-md mx-auto flex justify-around items-center h-16">
            <TabButton
              icon={<Home className="w-6 h-6" />}
              label="首页"
              active={activeTab === 'home'}
              onClick={() => setActiveTab('home')}
            />
            <TabButton
              icon={<Map className="w-6 h-6" />}
              label="路线"
              active={activeTab === 'routes'}
              onClick={() => setActiveTab('routes')}
            />
            <TabButton
              icon={<Activity className="w-6 h-6" />}
              label="记录"
              active={activeTab === 'records'}
              onClick={() => setActiveTab('records')}
            />
            <TabButton
              icon={<Users className="w-6 h-6" />}
              label="结伴"
              active={activeTab === 'companion'}
              onClick={() => setActiveTab('companion')}
            />
            <TabButton
              icon={<User className="w-6 h-6" />}
              label="我的"
              active={activeTab === 'profile'}
              onClick={() => setActiveTab('profile')}
            />
          </div>
        </nav>
      )}
    </div>
  );
}

function TabButton({
  icon,
  label,
  active,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center gap-1 transition-all ${
        active ? 'text-emerald-600' : 'text-gray-400'
      }`}
    >
      {icon}
      <span className="text-xs font-medium">{label}</span>
    </button>
  );
}
