import React from "react";
import { Pressable, Text, View } from "react-native";
import { Notification } from "../../models/notification";

interface Props {
  item: Notification;
  onPress?: () => void;
  onAction?: () => void;
}

const NotificationCard = ({ item, onPress, onAction }: Props) => {
  const isOrder = item.type === "order";
  const isInquiry = item.type === "inquiry";

  return (
    <Pressable
      onPress={onPress}
      className={`bg-white rounded-2xl p-4 mb-4 border 
        ${!item.isRead ? "border-orange-500" : "border-gray-200"}`}
    >
      <View className="flex-row items-start">
        {/* Icon */}
        <View className="w-12 h-12 rounded-full bg-orange-100 items-center justify-center mr-3">
          <Text>🔔</Text>
        </View>

        {/* Content */}
        <View className="flex-1">
          <View className="flex-row justify-between items-center">
            <Text className="text-lg font-semibold">{item.title}</Text>
            <Text className="text-gray-400 text-xs">{item.time}</Text>
          </View>

          <Text className="text-gray-600 mt-1">{item.message}</Text>

          {/* Actions */}
          {(isOrder || isInquiry) && (
            <View className="mt-3 flex-row justify-end">
              <Pressable
                onPress={onAction}
                className={`px-4 py-2 rounded-xl 
                  ${isOrder ? "bg-orange-600" : "border border-gray-400"}`}
              >
                <Text
                  className={`font-medium 
                    ${isOrder ? "text-white" : "text-gray-700"}`}
                >
                  {isOrder ? "View Order" : "Reply"}
                </Text>
              </Pressable>
            </View>
          )}
        </View>
      </View>
    </Pressable>
  );
};

export default NotificationCard;
