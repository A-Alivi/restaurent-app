// components/Header.tsx
import React from "react";
import { Pressable, Text, View } from "react-native";

const Header = () => {
  return (
    <View className="flex-row items-center justify-between px-4 py-3 bg-white">
      <Pressable>
        <Text className="text-xl">☰</Text>
      </Pressable>

      <Text className="text-xl font-bold text-orange-600">Kitchen Manager</Text>

      <View className="w-8 h-8 rounded-full bg-gray-200" />
    </View>
  );
};

export default Header;
