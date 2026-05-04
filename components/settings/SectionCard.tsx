// components/SectionCard.tsx
import React from "react";
import { Text, View } from "react-native";

interface Props {
  title: string;
  icon?: React.ReactNode;
  rightComponent?: React.ReactNode;
  children: React.ReactNode;
}

const SectionCard = ({ title, icon, rightComponent, children }: Props) => {
  return (
    <View className="bg-white rounded-2xl border border-orange-200 mb-5">
      {/* Header */}
      <View className="flex-row justify-between items-center px-4 py-3 border-b border-orange-100">
        <View className="flex-row items-center">
          {icon}
          <Text className="text-lg font-semibold ml-2">{title}</Text>
        </View>

        {rightComponent}
      </View>

      {/* Body */}
      <View className="p-4">{children}</View>
    </View>
  );
};

export default SectionCard;
