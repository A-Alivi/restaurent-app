import React, { memo } from "react";
import { Pressable, Text, View } from "react-native";
import Animated, { LinearTransition } from "react-native-reanimated";

type Props = {
  item: {
    name: string;
    count: number;
  };
  active?: boolean;
};

function CategoryTabComponent({ item, active }: Props) {
  return (
    <Pressable className="flex-row items-center justify-center">
      <View className="">
        <Text
          className={`text-base font-semibold ${
            active ? "text-black" : "text-gray-500"
          }`}
        >
          {item.name}
        </Text>

        <View className="ml-2 rounded-full bg-gray-100 px-2 py-0.5">
          <Text className="text-xs font-medium text-gray-500">
            {item.count}
          </Text>
        </View>
      </View>

      {active && (
        <Animated.View
          layout={LinearTransition.springify()}
          className="mt-3 h-0.5 w-24 rounded-full bg-black"
        />
      )}
    </Pressable>
  );
}

export const CategoryTab = memo(CategoryTabComponent);
