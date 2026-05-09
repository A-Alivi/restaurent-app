import ListHeader from "@/components/ListHeader";
import OrderCard from "@/components/OrderCard";
import SearchBar from "@/components/SearchBar";
import StatusFilters from "@/components/StatusFilters";
import { useOrderStore } from "@/store/useOrderStore";
import React, { useState } from "react";
import { FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
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
    <SafeAreaView>
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
    </SafeAreaView>
  );
}
