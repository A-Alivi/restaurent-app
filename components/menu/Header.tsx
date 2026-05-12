import React from "react";
import { Text, View } from "react-native";

export function Header() {
  return (
    <>
      {" "}
      <View>
        <Text className="text-5xl font-bold text-slate-900">
          Menu Management
        </Text>

        <Text className="mt-2 text-lg text-gray-500">24 menu items total</Text>
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
