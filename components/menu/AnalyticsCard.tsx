import { View } from "lucide-react-native";
import React, { memo } from "react";
import { Text } from "react-native";

type Props = {
  title: string;
  value: number;
};

function AnalyticsCardComponent({ title, value }: Props) {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-xs font-semibold tracking-widest  text-gray-500">
        {title}
      </Text>
      <Text className="mt-4 text-4xl font-bold text-slate-900">{value}</Text>
    </View>
  );
}

export const AnalyticsCard = memo(AnalyticsCardComponent);
