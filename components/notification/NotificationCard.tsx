// components/NotificationCard.tsx

import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

type NotificationCardProps = {
  title: string;
  description: string;
  orderId: string;
  time?: string;
};

export default function NotificationCard({
  title,
  description,
  orderId,
  time,
}: NotificationCardProps) {
  return (
    <View className="bg-white rounded-2xl p-4 mb-4 border border-gray-100 shadow-sm">
      <View className="flex-row items-start">
        {/* Icon */}
        <View className="w-12 h-12 rounded-full bg-orange-100 items-center justify-center mr-3">
          <Ionicons name="notifications-outline" size={22} color="#ea580c" />
        </View>

        {/* Content */}
        <View className="flex-1">
          {/* Header */}
          <View className="flex-row items-center justify-between">
            <Text className="text-base font-semibold text-gray-900">
              {title}
            </Text>

            {time && <Text className="text-xs text-gray-400">{time}</Text>}
          </View>

          {/* Description */}
          <Text className="text-sm text-gray-500 mt-1 leading-5">
            {description}
          </Text>

          {/* Order Badge */}
          <View className="self-start mt-3 bg-gray-100 px-3 py-1 rounded-full">
            <Text className="text-xs font-medium text-gray-700">
              Order ID: {orderId}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
