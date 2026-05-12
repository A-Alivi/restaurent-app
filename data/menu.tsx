import { MenuItem } from "@/models/menu";
export const menuItems: MenuItem[] = [
  {
    id: "m1",
    name: "Zinger Burger",
    description: "Crispy chicken fillet with mayo sauce",
    category: "Burger",
    basePrice: 550,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    isAvailable: true,
    isFeatured: true,

    sizes: [
      {
        id: "s1",
        name: "Regular",
        price: 550,
      },
      {
        id: "s2",
        name: "Large",
        price: 750,
      },
    ],

    addons: [
      {
        id: "a1",
        name: "Extra Cheese",
        price: 80,
      },
      {
        id: "a2",
        name: "Fries",
        price: 150,
      },
    ],

    tags: ["popular", "spicy"],
    stock: 25,

    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },

  {
    id: "m2",
    name: "Chicken Shawarma",
    description: "Arabic style chicken shawarma wrap",
    category: "Fast Food",
    basePrice: 350,
    image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783",
    isAvailable: true,

    addons: [
      {
        id: "a3",
        name: "Extra Sauce",
        price: 50,
      },
    ],

    tags: ["wrap"],
    stock: 40,

    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },

  {
    id: "m3",
    name: "Pepperoni Pizza",
    description: "Loaded pepperoni pizza with mozzarella cheese",
    category: "Pizza",
    basePrice: 1200,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    isAvailable: true,
    isFeatured: true,

    sizes: [
      {
        id: "s3",
        name: "Small",
        price: 1200,
      },
      {
        id: "s4",
        name: "Medium",
        price: 1800,
      },
      {
        id: "s5",
        name: "Large",
        price: 2400,
      },
    ],

    tags: ["cheesy", "popular"],
    stock: 15,

    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },

  {
    id: "m4",
    name: "Cold Coffee",
    description: "Chilled creamy cold coffee",
    category: "Drinks",
    basePrice: 280,
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c",
    isAvailable: true,

    sizes: [
      {
        id: "s6",
        name: "Regular",
        price: 280,
      },
      {
        id: "s7",
        name: "Large",
        price: 420,
      },
    ],

    stock: 60,

    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },

  {
    id: "m5",
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with molten center",
    category: "Dessert",
    basePrice: 450,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
    isAvailable: true,
    isFeatured: true,

    addons: [
      {
        id: "a4",
        name: "Vanilla Ice Cream",
        price: 120,
      },
    ],

    tags: ["sweet"],
    stock: 18,

    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },

  {
    id: "m6",
    name: "Chicken Karahi",
    description: "Traditional spicy chicken karahi",
    category: "BBQ",
    basePrice: 1800,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
    isAvailable: true,

    tags: ["desi", "spicy"],
    stock: 10,

    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },

  {
    id: "m7",
    name: "Green Tea",
    description: "Freshly brewed green tea",
    category: "Tea",
    basePrice: 180,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
    isAvailable: true,

    stock: 100,

    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },

  {
    id: "m8",
    name: "French Fries",
    description: "Crispy golden french fries",
    category: "Fast Food",
    basePrice: 250,
    image: "https://images.unsplash.com/photo-1576107232684-1279f390859f",
    isAvailable: true,

    sizes: [
      {
        id: "s8",
        name: "Regular",
        price: 250,
      },
      {
        id: "s9",
        name: "Large",
        price: 400,
      },
    ],

    addons: [
      {
        id: "a5",
        name: "Cheese Dip",
        price: 90,
      },
    ],

    tags: ["snack"],
    stock: 50,

    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];
