import FloatingButton from "@/components/FloatingButton";
import Header from "@/components/Header";
import OrderCard from "@/components/OrderCard";
import SearchBar from "@/components/SearchBar";
import StatusFilters from "@/components/StatusFilters";
import { useOrderStore } from "@/store/useOrderStore";
import React, { useState } from "react";
import { FlatList, View } from "react-native";

export default function OrdersScreen() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");

  const orders = useOrderStore((state) => state.orders);

  const filteredOrders = orders.filter((order) => {
    const matchSearch = order.id.toLowerCase().includes(search.toLowerCase());

    const matchStatus = status === "all" ? true : order.status === status;

    return matchSearch && matchStatus;
  });

  return (
    <View className="flex-1 bg-white pt-12 px-4">
      {/* Header */}
      <Header />

      {/* Search */}
      <SearchBar value={search} onChangeText={setSearch} />

      {/* Filters */}
      <StatusFilters selected={status} onSelect={setStatus} />

      {/* List */}
      <FlatList
        data={filteredOrders}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
        renderItem={({ item }) => <OrderCard order={item} />}
      />

      {/* Floating Button */}
      <FloatingButton />
    </View>
  );
}
