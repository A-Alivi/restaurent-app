import ListHeader from "@/components/ListHeader";
import OrderCard from "@/components/OrderCard";
import SearchBar from "@/components/SearchBar";
import StatusFilters from "@/components/StatusFilters";
import { useLoadOrders } from "@/hooks/useLoadOrders";
import { useOrderStore } from "@/store/useOrderStore";
import { useUser } from "@clerk/expo";
import React, { useState } from "react";
import { FlatList, View } from "react-native";
export default function OrdersScreen() {
  const user = useUser();
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const orders = useOrderStore((state) => state.orders);
  const filteredOrders = orders.filter((order) => {
    const matchSearch = order.id.toLowerCase().includes(search.toLowerCase());
    const matchStatus = status === "all" ? true : order.status === status;
    return matchSearch && matchStatus;
  });
  useLoadOrders();

  return (
    <View className="flex-1 bg-orange-70 pt-12 px-4">
      <FlatList
        ListHeaderComponent={
          <>
            <ListHeader />
            <SearchBar value={search} onChangeText={setSearch} />
            <StatusFilters selected={status} onSelect={setStatus} />
          </>
        }
        data={filteredOrders}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
        renderItem={({ item }) => <OrderCard order={item} />}
      />
    </View>
  );
}
