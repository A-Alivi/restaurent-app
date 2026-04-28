import { useState } from "react";
import {
    FlatList,
    Modal,
    Pressable,
    Text,
    TextInput,
    View,
} from "react-native";

export default function AddOrderModal({ visible, onClose, onAddOrder }: any) {
  const [userId, setUserId] = useState("");
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState("");

  const [items, setItems] = useState<any[]>([]);

  const addItem = () => {
    if (!itemName || !price) return;

    setItems([
      ...items,
      {
        productId: Date.now().toString(),
        name: itemName,
        quantity: 1,
        price: Number(price),
        total: Number(price),
      },
    ]);

    setItemName("");
    setPrice("");
  };

  const handleSubmit = () => {
    const subtotal = items.reduce((sum, i) => sum + i.total, 0);
    const tax = subtotal * 0.1;
    const deliveryFee = 100;

    const newOrder = {
      id: "ord_" + Date.now(),
      userId,
      items,
      pricing: {
        subtotal,
        tax,
        deliveryFee,
        total: subtotal + tax + deliveryFee,
      },
      status: "pending",
      payment: { method: "cash", status: "pending" },
      delivery: {
        address: "Manual Entry",
        city: "Rawalpindi",
      },
      timestamps: {
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    };

    onAddOrder(newOrder);

    // reset
    setUserId("");
    setItems([]);
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View className="flex-1 bg-black/40 justify-end">
        <View className="bg-white rounded-t-2xl p-4 h-[85%]">
          {/* Header */}
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-lg font-bold">Add Order</Text>

            <Pressable onPress={onClose}>
              <Text className="text-red-500">Close</Text>
            </Pressable>
          </View>

          {/* User ID */}
          <TextInput
            placeholder="User ID"
            value={userId}
            onChangeText={setUserId}
            className="border border-gray-300 rounded-xl px-3 py-2 mb-3"
          />

          {/* Item Input */}
          <View className="flex-row gap-2 mb-3">
            <TextInput
              placeholder="Item name"
              value={itemName}
              onChangeText={setItemName}
              className="flex-1 border border-gray-300 rounded-xl px-3 py-2"
            />

            <TextInput
              placeholder="Price"
              value={price}
              onChangeText={setPrice}
              keyboardType="numeric"
              className="w-24 border border-gray-300 rounded-xl px-3 py-2"
            />
          </View>

          <Pressable
            onPress={addItem}
            className="bg-blue-500 py-2 rounded-xl mb-4"
          >
            <Text className="text-white text-center">Add Item</Text>
          </Pressable>

          {/* Items List */}
          <FlatList
            data={items}
            keyExtractor={(item) => item.productId}
            renderItem={({ item }) => (
              <View className="flex-row justify-between py-2 border-b border-gray-100">
                <Text>{item.name}</Text>
                <Text>Rs {item.price}</Text>
              </View>
            )}
          />

          {/* Submit */}
          <Pressable
            onPress={handleSubmit}
            className="bg-black py-3 rounded-xl mt-4"
          >
            <Text className="text-white text-center font-bold">
              Create Order
            </Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
