export type MenuCategory =
  | "Burger"
  | "Pizza"
  | "Drinks"
  | "Dessert"
  | "BBQ"
  | "Fast Food"
  | "Tea"
  | "Other";

export type MenuItemSize = {
  id: string;
  name: string; // Small, Medium, Large
  price: number;
};

export type MenuItemAddon = {
  id: string;
  name: string; // Extra Cheese
  price: number;
};

export type MenuItem = {
  id: string;

  // Basic Info
  name: string;
  description?: string;
  category: MenuCategory;

  // Pricing
  basePrice: number;

  // Media
  image?: string;

  // Availability
  isAvailable: boolean;
  isFeatured?: boolean;

  // Variants
  sizes?: MenuItemSize[];
  addons?: MenuItemAddon[];

  // Tags
  tags?: string[];

  // Inventory
  stock?: number;

  // Metadata
  createdAt: string;
  updatedAt: string;
};
