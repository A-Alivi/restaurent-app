import { useMenuStore } from "@/store/useMenuStore";
import React from "react";
import { Text, View } from "react-native";

export function Header() {
  const totalMenu = useMenuStore((state) => state.menu.length);
  return (
    <>
      <View>
        <Text className="text-xl font-semibold text-slate-900">
          Menu Management
        </Text>
        <Text className="text-lg text-gray-500">{`${totalMenu} menu items total`}</Text>
      </View>
      {/* <View className="flex-row items-center">
        <Pressable className="mr-3 h-14 w-14 items-center justify-center rounded-2xl bg-white">
          <Search size={24} color="#111827" />
        </Pressable>

        <Pressable className="h-14 w-14 items-center justify-center rounded-2xl bg-[#001B3D]">
          <Plus size={24} color="white" />
        </Pressable>
      </View> */}
    </>
  );
}
