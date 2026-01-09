// 用户类型定义
export interface Badge {
  id: number;
  emoji: string;
  label: string;
  unlocked: boolean;
  unlockedAt?: string;
}

export interface Achievement {
  id: number;
  title: string;
  description: string;
  emoji: string;
  unlocked: boolean;
  progress: number;
  total: number;
}

export interface UserStats {
  hikingDays: number;
  totalDistance: number;
  completedRoutes: number;
}

export interface User {
  id: string;
  nickname: string;
  avatar: string;
  level: number;
  levelTitle: string;
  experience: number;
  nextLevelExperience: number;
  stats: UserStats;
  badges: Badge[];
  favorites: number[];
  achievements: Achievement[];
}
