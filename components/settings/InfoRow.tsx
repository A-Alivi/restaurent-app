// components/InfoRow.tsx
import React from "react";
import { Text, View } from "react-native";

interface Props {
  label: string;
  value: string;
}

const InfoRow = ({ label, value }: Props) => {
  return (
    <View className="mb-3">
      <Text className="text-xs text-gray-500 uppercase">{label}</Text>
      <Text className="text-base font-medium">{value}</Text>
    </View>
  );
};

export default InfoRow;
