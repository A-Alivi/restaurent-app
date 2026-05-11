import React, { useState } from "react";
import {
    Modal,
    Pressable,
    ScrollView,
    Text,
    TextInput,
    View,
} from "react-native";
import { Order, OrderItem } from "../../models/orders";

type Props = {
  visible: boolean;
  onClose: () => void;
  onSubmit: (order: Order) => void;
};

export default function AddOrderModal({ visible, onClose, onSubmit }: Props) {
  const [customerName, setCustomerName] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");

  const [items, setItems] = useState<OrderItem[]>([]);

  const [name, setName] = useState("");
  const [qty, setQty] = useState("1");
  const [price, setPrice] = useState("");
  const [note, setNote] = useState("");

  const addItem = () => {
    if (!name || !price) return;

    const quantity = Number(qty);
    const itemPrice = Number(price);

    const newItem: OrderItem = {
      productId: Date.now().toString(),
      name,
      quantity,
      price: itemPrice,
      total: quantity * itemPrice,
      note: note || undefined,
    };

    setItems((prev) => [...prev, newItem]);

    setName("");
    setQty("1");
    setPrice("");
    setNote("");
  };

  const calculatePricing = () => {
    const subtotal = items.reduce((sum, i) => sum + i.total, 0);
    const tax = subtotal * 0.1; // 10% tax example
    const deliveryFee = 50; // fixed
    const total = subtotal + tax + deliveryFee;

    return { subtotal, tax, deliveryFee, total };
  };

  const handleSubmit = () => {
    const pricing = calculatePricing();

    const newOrder: Order = {
      id: Date.now().toString(),
      user: {
        id: "manual_user",
        name: customerName,
        contact,
      },
      items,
      pricing,
      status: "pending",
      payment: {
        method: "cash",
        status: "unpaid",
      },
      delivery: {
        address,
        city,
      },
      timestamps: {
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    };

    onSubmit(newOrder);

    // reset
    setCustomerName("");
    setContact("");
    setAddress("");
    setCity("");
    setItems([]);

    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View className="flex-1 bg-black/50 justify-end">
        <View className="bg-white rounded-t-3xl p-5 h-[90%]">
          <Text className="text-xl font-bold mb-3">Create Order</Text>

          <ScrollView>
            {/* USER INFO */}
            <TextInput
              placeholder="Customer Name"
              value={customerName}
              onChangeText={setCustomerName}
              className="border p-3 rounded-xl mb-2"
            />

            <TextInput
              placeholder="Contact"
              value={contact}
              onChangeText={setContact}
              className="border p-3 rounded-xl mb-2"
            />

            <TextInput
              placeholder="Address"
              value={address}
              onChangeText={setAddress}
              className="border p-3 rounded-xl mb-2"
            />

            <TextInput
              placeholder="City"
              value={city}
              onChangeText={setCity}
              className="border p-3 rounded-xl mb-3"
            />

            {/* ITEM SECTION */}
            <Text className="font-bold mb-2">Add Item</Text>

            <TextInput
              placeholder="Item Name"
              value={name}
              onChangeText={setName}
              className="border p-3 rounded-xl mb-2"
            />

            <View className="flex-row gap-2">
              <TextInput
                placeholder="Qty"
                value={qty}
                onChangeText={setQty}
                keyboardType="numeric"
                className="border p-3 rounded-xl flex-1"
              />

              <TextInput
                placeholder="Price"
                value={price}
                onChangeText={setPrice}
                keyboardType="numeric"
                className="border p-3 rounded-xl flex-1"
              />
            </View>

            <TextInput
              placeholder="Note (optional)"
              value={note}
              onChangeText={setNote}
              className="border p-3 rounded-xl mt-2"
            />

            <Pressable
              onPress={addItem}
              className="bg-blue-500 p-3 rounded-xl mt-3"
            >
              <Text className="text-white text-center">Add Item</Text>
            </Pressable>

            {/* ITEM LIST */}
            <View className="mt-4">
              {items.map((item) => (
                <View
                  key={item.productId}
                  className="flex-row justify-between py-2 border-b"
                >
                  <Text>{item.name}</Text>
                  <Text>{item.total}</Text>
                </View>
              ))}
            </View>
          </ScrollView>

          {/* ACTIONS */}
          <View className="flex-row gap-2 mt-4">
            <Pressable
              onPress={onClose}
              className="flex-1 p-3 bg-gray-200 rounded-xl"
            >
              <Text className="text-center">Cancel</Text>
            </Pressable>

            <Pressable
              onPress={handleSubmit}
              className="flex-1 p-3 bg-green-600 rounded-xl"
            >
              <Text className="text-white text-center font-bold">
                Create Order
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}
