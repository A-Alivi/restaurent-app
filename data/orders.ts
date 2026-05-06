import { Order } from "../models/orders";

export const orders: Order[] = [
  {
    id: "ord_001",
    user: {
      id: "user_101",
      name: "Ali Khan",
      contact: "0301-1234567",
    },
    items: [
      {
        productId: "p1",
        name: "Zinger Burger",
        quantity: 2,
        price: 450,
        total: 900,
        note: "Extra mayo",
      },
      {
        productId: "p2",
        name: "Fries",
        quantity: 1,
        price: 250,
        total: 250,
        note: "",
      },
    ],
    pricing: { subtotal: 1150, tax: 115, deliveryFee: 100, total: 1365 },
    status: "pending",
    payment: { method: "cash", status: "pending" },
    delivery: { address: "Satellite Town, Rawalpindi", city: "Rawalpindi" },
    timestamps: {
      createdAt: "2026-04-27T10:00:00Z",
      updatedAt: "2026-04-27T10:00:00Z",
    },
  },

  {
    id: "ord_002",
    user: {
      id: "user_102",
      name: "Ahmed Raza",
      contact: "0302-2345678",
    },
    items: [
      {
        productId: "p3",
        name: "Pizza (Large)",
        quantity: 1,
        price: 1200,
        total: 1200,
        note: "No olives",
      },
      {
        productId: "p4",
        name: "Cold Drink",
        quantity: 2,
        price: 150,
        total: 300,
        note: "",
      },
    ],
    pricing: { subtotal: 1500, tax: 150, deliveryFee: 120, total: 1770 },
    status: "preparing",
    payment: { method: "card", status: "paid" },
    delivery: { address: "Bahria Town Phase 4", city: "Rawalpindi" },
    timestamps: {
      createdAt: "2026-04-27T09:30:00Z",
      updatedAt: "2026-04-27T09:45:00Z",
    },
  },

  {
    id: "ord_003",
    user: {
      id: "user_103",
      name: "Usman Tariq",
      contact: "0303-3456789",
    },
    items: [
      {
        productId: "p5",
        name: "Chicken Karahi",
        quantity: 1,
        price: 1800,
        total: 1800,
        note: "Less spicy",
      },
      {
        productId: "p6",
        name: "Naan",
        quantity: 4,
        price: 50,
        total: 200,
        note: "",
      },
    ],
    pricing: { subtotal: 2000, tax: 200, deliveryFee: 150, total: 2350 },
    status: "out_for_delivery",
    payment: { method: "cash", status: "pending" },
    delivery: { address: "Chaklala Scheme 3", city: "Rawalpindi" },
    timestamps: {
      createdAt: "2026-04-27T08:45:00Z",
      updatedAt: "2026-04-27T09:15:00Z",
    },
  },

  {
    id: "ord_004",
    user: {
      id: "user_104",
      name: "Sara Malik",
      contact: "0304-4567890",
    },
    items: [
      {
        productId: "p7",
        name: "Beef Burger",
        quantity: 1,
        price: 600,
        total: 600,
      },
      {
        productId: "p8",
        name: "Shake",
        quantity: 1,
        price: 350,
        total: 350,
        note: "No sugar",
      },
    ],
    pricing: { subtotal: 950, tax: 95, deliveryFee: 100, total: 1145 },
    status: "delivered",
    payment: { method: "online", status: "paid" },
    delivery: { address: "DHA Phase 2", city: "Islamabad" },
    timestamps: {
      createdAt: "2026-04-26T20:00:00Z",
      updatedAt: "2026-04-26T20:40:00Z",
      deliveredAt: "2026-04-26T20:40:00Z",
    },
  },

  {
    id: "ord_005",
    user: {
      id: "user_105",
      name: "Hassan Ali",
      contact: "0305-5678901",
    },
    items: [
      {
        productId: "p9",
        name: "Pasta",
        quantity: 1,
        price: 700,
        total: 700,
        note: "Extra cheese",
      },
    ],
    pricing: { subtotal: 700, tax: 70, deliveryFee: 100, total: 870 },
    status: "accepted",
    payment: { method: "card", status: "failed" },
    delivery: { address: "Gulraiz Housing Scheme", city: "Rawalpindi" },
    timestamps: {
      createdAt: "2026-04-27T07:30:00Z",
      updatedAt: "2026-04-27T07:45:00Z",
    },
  },
  {
    id: "ord_006",
    user: {
      id: "user_106",
      name: "Bilal Ahmed",
      contact: "0306-6789012",
    },
    items: [
      {
        productId: "p10",
        name: "BBQ Platter",
        quantity: 1,
        price: 2200,
        total: 2200,
        note: "Extra sauce",
      },
    ],
    pricing: { subtotal: 2200, tax: 220, deliveryFee: 150, total: 2570 },
    status: "pending",
    payment: { method: "cash", status: "pending" },
    delivery: { address: "PWD Housing Society", city: "Islamabad" },
    timestamps: {
      createdAt: "2026-04-27T11:15:00Z",
      updatedAt: "2026-04-27T11:15:00Z",
    },
  },

  {
    id: "ord_007",
    user: {
      id: "user_107",
      name: "Ayesha Noor",
      contact: "0307-7890123",
    },
    items: [
      {
        productId: "p11",
        name: "Club Sandwich",
        quantity: 2,
        price: 400,
        total: 800,
        note: "",
      },
      {
        productId: "p12",
        name: "Tea",
        quantity: 2,
        price: 120,
        total: 240,
        note: "Less sugar",
      },
    ],
    pricing: { subtotal: 1040, tax: 104, deliveryFee: 80, total: 1224 },
    status: "preparing",
    payment: { method: "cash", status: "pending" },
    delivery: { address: "Commercial Market", city: "Rawalpindi" },
    timestamps: {
      createdAt: "2026-04-27T10:50:00Z",
      updatedAt: "2026-04-27T11:00:00Z",
    },
  },

  {
    id: "ord_008",
    user: {
      id: "user_108",
      name: "Faizan Sheikh",
      contact: "0308-8901234",
    },
    items: [
      {
        productId: "p13",
        name: "Biryani",
        quantity: 3,
        price: 300,
        total: 900,
        note: "Spicy",
      },
    ],
    pricing: { subtotal: 900, tax: 90, deliveryFee: 100, total: 1090 },
    status: "cancelled",
    payment: { method: "online", status: "refunded" },
    delivery: { address: "Saddar", city: "Rawalpindi" },
    timestamps: {
      createdAt: "2026-04-27T09:00:00Z",
      updatedAt: "2026-04-27T09:20:00Z",
    },
  },

  {
    id: "ord_009",
    user: {
      id: "user_109",
      name: "Zainab Fatima",
      contact: "0309-9012345",
    },
    items: [
      {
        productId: "p14",
        name: "Ice Cream",
        quantity: 2,
        price: 200,
        total: 400,
        note: "",
      },
      {
        productId: "p15",
        name: "Brownie",
        quantity: 1,
        price: 300,
        total: 300,
        note: "Warm",
      },
    ],
    pricing: { subtotal: 700, tax: 70, deliveryFee: 80, total: 850 },
    status: "delivered",
    payment: { method: "card", status: "paid" },
    delivery: { address: "G-11 Markaz", city: "Islamabad" },
    timestamps: {
      createdAt: "2026-04-26T18:30:00Z",
      updatedAt: "2026-04-26T19:00:00Z",
      deliveredAt: "2026-04-26T19:00:00Z",
    },
  },

  {
    id: "ord_010",
    user: {
      id: "user_110",
      name: "Hamza Saeed",
      contact: "0310-0123456",
    },
    items: [
      {
        productId: "p16",
        name: "Chicken Shawarma",
        quantity: 4,
        price: 250,
        total: 1000,
        note: "Extra garlic sauce",
      },
    ],
    pricing: { subtotal: 1000, tax: 100, deliveryFee: 120, total: 1220 },
    status: "out_for_delivery",
    payment: { method: "cash", status: "pending" },
    delivery: { address: "Scheme 1 Road", city: "Rawalpindi" },
    timestamps: {
      createdAt: "2026-04-27T10:10:00Z",
      updatedAt: "2026-04-27T10:40:00Z",
    },
  },

  {
    id: "ord_011",
    user: {
      id: "user_111",
      name: "Mariam Khan",
      contact: "0311-1234567",
    },
    items: [
      {
        productId: "p17",
        name: "Grilled Chicken",
        quantity: 1,
        price: 950,
        total: 950,
        note: "",
      },
    ],
    pricing: { subtotal: 950, tax: 95, deliveryFee: 100, total: 1145 },
    status: "accepted",
    payment: { method: "online", status: "paid" },
    delivery: { address: "F-10 Sector", city: "Islamabad" },
    timestamps: {
      createdAt: "2026-04-27T12:00:00Z",
      updatedAt: "2026-04-27T12:10:00Z",
    },
  },
];
