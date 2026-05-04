// store/useNotificationStore.ts
import { Notification } from "@/models/notification";
import { create } from "zustand";

interface NotificationState {
  notifications: Notification[];
  addNotification: (notification: Notification) => void;
  markAllRead: () => void;
}

export const useNotificationStore = create<NotificationState>((set) => ({
  notifications: [],

  addNotification: (notification) =>
    set((state) => ({
      notifications: [notification, ...state.notifications],
    })),

  markAllRead: () =>
    set((state) => ({
      notifications: state.notifications.map((n) => ({
        ...n,
        isRead: true,
      })),
    })),
}));
