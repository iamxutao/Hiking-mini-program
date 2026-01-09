// 活动类型定义
export interface Activity {
  id: number;
  title: string;
  route: string;
  routeId?: number;
  organizer: string;
  organizerId?: string;
  date: string;
  time: string;
  location: string;
  difficulty: '初级' | '中级' | '高级';
  distance: string;
  currentParticipants: number;
  maxParticipants: number;
  description: string;
  status?: 'recruiting' | 'full' | 'started' | 'ended';
  isRegistered?: boolean;
}
