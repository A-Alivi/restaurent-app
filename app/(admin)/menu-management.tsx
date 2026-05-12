import CategoryFilters from "@/components/menu/CategoryFilters";
import { Header } from "@/components/menu/Header";
import { MenuCard } from "@/components/menu/MenuCard";
import SearchInput from "@/components/menu/SearchInput";
import { useMenuStore } from "@/store/useMenuStore";
import { router } from "expo-router";
import { Plus, SlidersHorizontal } from "lucide-react-native";
import React, { useState } from "react";
import { FlatList, Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function MenuManagementScreen() {
  const [openModal, setOpenModal] = useState(false);

  const menuList = useMenuStore((state) => state.menu);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const filteredMenu = menuList.filter((menu) => {
    const matchSearch = menu.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory =
      category === "all" ? true : menu.category === category;
    return matchSearch && matchCategory;
  });
  const addMenuItem = useMenuStore((state) => state.addMenuItem);
  return (
    <SafeAreaView className="flex-1 bg-[#F7F7F8]">
      <FlatList
        data={filteredMenu}
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
            <SearchInput value={search} onChangeText={setSearch} />
            <Pressable className="mt-5 flex-row items-center justify-center rounded-3xl border border-gray-200 bg-white py-5">
              <SlidersHorizontal size={20} color="#111827" />
            </Pressable>
            {/* <View>
              <AnalyticsCard title="TOTAL ITEMS" value={menu.length} />
              <AnalyticsCard title="AVAILABLE" value={20} />
              <AnalyticsCard title="OUT OF STOCK" value={4} />
            </View> */}
            <View className="mt-2">
              <CategoryFilters selected={category} onSelect={setCategory} />
            </View>

            <View className="mb-6 mt-4 h-px bg-gray-200" />
          </>
        }
        renderItem={({ item }) => <MenuCard item={item} />}
      />
      <View className="flex-1 justify-end items-end">
        <Pressable
          onPress={() => router.push("/../screens/AddMenu")}
          className="h-10 w-10 m-2 items-center justify-center rounded-full bg-black shadow-xl"
        >
          <Plus size={30} color="White" />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
