import { useOrderStore } from "@/store/useOrderStore";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { TextInput, View } from "react-native";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  const orders = useOrderStore((state) => state.orders);
  const filteredOrders = orders.filter((order) =>
    order.id.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <View className="flex-row items-center bg-white border border-gray-200 rounded-xl px-3 py-2 flex-1">
      <Ionicons name="search" size={18} color="gray" />
      <TextInput
        value={search}
        onChangeText={() => setSearch}
        placeholder="Search order ID..."
        className="flex-1 mx-3 text-black"
        placeholderTextColor="#888"
      />
    </View>
  );
}
