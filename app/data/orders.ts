import { Order } from "../store/useOrderStore";
export const orders: Order[] = [
  {
    id: "ord_001",
    userId: "user_101",
    username: "Ali Khan",
    items: [
      {
        productId: "p1",
        name: "Zinger Burger",
        quantity: 2,
        price: 450,
        total: 900,
        note: "Extra mayo", // ✅ has note
      },
      {
        productId: "p2",
        name: "Fries",
        quantity: 1,
        price: 250,
        total: 250,
        note: "", // ✅ empty note
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
    userId: "user_102",
    username: "Ahmed Raza",
    items: [
      {
        productId: "p3",
        name: "Pizza (Large)",
        quantity: 1,
        price: 1200,
        total: 1200,
        note: "No olives", // ✅ has note
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
    userId: "user_103",
    username: "Usman Tariq",
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
    userId: "user_104",
    username: "Sara Malik",
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
    userId: "user_105",
    username: "Hassan Ali",
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
    status: "cancelled",
    payment: { method: "card", status: "failed" },
    delivery: { address: "Gulraiz Housing Scheme", city: "Rawalpindi" },
    timestamps: {
      createdAt: "2026-04-27T07:30:00Z",
      updatedAt: "2026-04-27T07:45:00Z",
    },
  },
];
