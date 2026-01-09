// 路线类型定义
export interface Route {
  id: number;
  title: string;
  difficulty: '初级' | '中级' | '高级';
  distance: string;
  duration: string;
  location: string;
  rating: number;
  elevation: string;
  description: string;
  tips: string[];
  images?: string[];
  isFavorite?: boolean;
}

export interface RouteQuery {
  difficulty?: string;
  keyword?: string;
}
