import { MenuCategory, MenuItem } from "@/models/menu";
import { create } from "zustand";
type MenuStore = {
  menu: MenuItem[];
  setMenu: (items: MenuItem[]) => void;

  addMenuItem: (item: MenuItem) => void;

  updateMenuItem: (id: string, updatedFields: Partial<MenuItem>) => void;

  deleteMenuItem: (id: string) => void;

  toggleAvailability: (id: string) => void;

  getMenuItemById: (id: string) => MenuItem | undefined;

  getMenuByCategory: (category: MenuCategory) => MenuItem[];

  clearMenu: () => void;
};

export const useMenuStore = create<MenuStore>((set, get) => ({
  menu: [],
  setMenu: (items) => set({ menu: items }),

  addMenuItem: (item) =>
    set((state) => ({
      menu: [item, ...state.menu],
    })),

  updateMenuItem: (id, updatedFields) =>
    set((state) => ({
      menu: state.menu.map((item) =>
        item.id === id
          ? {
              ...item,
              ...updatedFields,
              updatedAt: new Date().toISOString(),
            }
          : item,
      ),
    })),

  deleteMenuItem: (id) =>
    set((state) => ({
      menu: state.menu.filter((item) => item.id !== id),
    })),

  toggleAvailability: (id) =>
    set((state) => ({
      menu: state.menu.map((item) =>
        item.id === id
          ? {
              ...item,
              isAvailable: !item.isAvailable,
              updatedAt: new Date().toISOString(),
            }
          : item,
      ),
    })),

  getMenuItemById: (id) => {
    return get().menu.find((item) => item.id === id);
  },

  getMenuByCategory: (category) => {
    return get().menu.filter((item) => item.category === category);
  },

  clearMenu: () => set({ menu: [] }),
}));
