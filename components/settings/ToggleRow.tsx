// components/ToggleRow.tsx
import React from "react";
import { Switch, Text, View } from "react-native";

interface Props {
  title: string;
  description: string;
  value: boolean;
  onChange: (val: boolean) => void;
}

const ToggleRow = ({ title, description, value, onChange }: Props) => {
  return (
    <View className="flex-row justify-between items-center py-3 border-b border-gray-100">
      <View className="flex-1 pr-4">
        <Text className="text-base font-medium">{title}</Text>
        <Text className="text-gray-500 text-sm">{description}</Text>
      </View>

      <Switch value={value} onValueChange={onChange} />
    </View>
  );
};

export default ToggleRow;
