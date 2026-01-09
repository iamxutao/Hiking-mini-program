// 记录类型定义
export interface Record {
  id: number;
  routeId: number;
  routeTitle: string;
  date: string;
  distance: string;
  duration: string;
  elevation: string;
  calories?: number;
  images?: string[];
}

export interface MonthlyStats {
  month: string;
  count: number;
  distance: number;
  duration: number;
}

export interface CumulativeStats {
  totalDistance: number;
  hikingDays: number;
  completedRoutes: number;
  totalElevation: number;
}
