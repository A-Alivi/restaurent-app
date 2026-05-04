// models/Settings.ts

export interface RestaurantInfo {
  name: string;
  address: string;
  hours: string;
  logoUrl?: string;
}

export interface NotificationSettings {
  pushEnabled: boolean;
  soundEnabled: boolean;
}

export interface SystemStatus {
  apiConnected: boolean;
  lastSynced: string;
}

export interface Settings {
  restaurant: RestaurantInfo;
  notifications: NotificationSettings;
  system: SystemStatus;
}
