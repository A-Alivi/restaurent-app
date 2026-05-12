import { AnalyticsCard } from "@/components/menu/AnalyticsCard";
import { CategoryTab } from "@/components/menu/CategoryTab";
import { Header } from "@/components/menu/Header";
import { MenuCard } from "@/components/menu/MenuCard";
import { SearchInput } from "@/components/menu/SearchInput";
import { menuItems } from "@/data/menu";
import { useMenuStore } from "@/store/useMenuStore";
import { Plus, SlidersHorizontal } from "lucide-react-native";
import React from "react";
import { FlatList, Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const categories = [
  { name: "All", count: 24 },
  { name: "Burgers", count: 8 },
  { name: "Pizza", count: 6 },
  { name: "Drinks", count: 4 },
];

export default function MenuManagementScreen() {
  const menu = useMenuStore((state) => state.menu);
  return (
    <SafeAreaView className="flex-1 bg-[#F7F7F8]">
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingTop: 20,
          paddingBottom: 140,
        }}
        ListHeaderComponent={
          <>
            <Header />

            <SearchInput />

            <Pressable className="mt-5 flex-row items-center justify-center rounded-3xl border border-gray-200 bg-white py-5">
              <SlidersHorizontal size={20} color="#111827" />
            </Pressable>
            <View className="flex-row">
              <AnalyticsCard title="TOTAL ITEMS" value={24} />
              <AnalyticsCard title="AVAILABLE" value={20} />
              <AnalyticsCard title="OUT OF STOCK" value={4} />
            </View>

            {categories.map((item, index) => (
              <CategoryTab key={item.name} item={item} active={index === 0} />
            ))}

            <View className="mb-6 mt-4 h-px bg-gray-200" />
          </>
        }
        renderItem={({ item, index }) => <MenuCard item={item} index={index} />}
      />

      <Pressable className="h-20 w-20 items-center justify-center rounded-full bg-[#001B3D] shadow-xl">
        <Plus size={35} color="white" />
      </Pressable>
    </SafeAreaView>
  );
}
