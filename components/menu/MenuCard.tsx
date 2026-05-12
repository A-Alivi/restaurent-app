import { MenuItem } from "@/models/menu";
import { Image } from "expo-image";
import React, { memo } from "react";
import { Pressable, Text, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

type Props = {
  item: MenuItem;
  index: number;
};

function MenuCardComponent({ item, index }: Props) {
  return (
    <Animated.View
      entering={FadeInDown.delay(index * 120)}
      className="mb-6 rounded-[32px] border border-gray-100 bg-white p-4 shadow-sm"
    >
      <Image
        source={item.image}
        contentFit="cover"
        style={{
          width: "100%",
          height: 180,
          borderRadius: 24,
        }}
      />

      <View className="mt-4 flex-row items-center justify-between">
        <View className="flex-row items-center">
          <View className="rounded-full bg-blue-100 px-3 py-1">
            <Text className="text-[10px] font-bold tracking-widest text-blue-700">
              {item.name}
            </Text>
          </View>

          {item.isFeatured && (
            <View className="ml-2 rounded-full bg-orange-100 px-3 py-1">
              <Text className="text-[10px] font-bold tracking-widest text-orange-700">
                ☆ FEATURED
              </Text>
            </View>
          )}
        </View>

        <Text className="text-3xl font-bold text-slate-900">
          ${item.basePrice}
        </Text>
      </View>

      <Text className="mt-4 text-3xl font-bold text-slate-900">
        {item.name}
      </Text>

      <Text className="mt-2 text-base leading-7 text-gray-500">
        {item.description}
      </Text>

      <View className="mt-6 border-t border-gray-100 pt-5">
        <View className="flex-row items-center justify-between">
          <View className="flex-row">
            <View className="mr-10">
              <Text className="text-xs font-semibold tracking-widest text-gray-400">
                STOCK
              </Text>

              <Text
                className={`mt-2 text-2xl font-semibold ${
                  item.stock === 0 ? "text-red-500" : "text-slate-900"
                }`}
              >
                {item.stock} units
              </Text>
            </View>

            <View>
              <Text className="text-xs font-semibold tracking-widest text-gray-400">
                STATUS
              </Text>

              <View className="mt-2 flex-row items-center">
                <View
                  className={`mr-2 h-2.5 w-2.5 rounded-full ${
                    item.isAvailable ? "bg-green-500" : "bg-red-500"
                  }`}
                />

                <Text
                  className={`text-2xl font-medium ${
                    item.isAvailable ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {item.isAvailable ? "Available" : "Out of Stock"}
                </Text>
              </View>
            </View>
          </View>

          <Pressable
            className={`rounded-full border px-7 py-4 ${
              item.isAvailable ? "border-gray-300" : "border-red-300"
            }`}
          >
            <Text
              className={`text-lg font-semibold ${
                item.isAvailable ? "text-slate-900" : "text-red-500"
              }`}
            >
              {item.isAvailable ? "Edit" : "Restock"}
            </Text>
          </Pressable>
        </View>
      </View>
    </Animated.View>
  );
}

export const MenuCard = memo(MenuCardComponent);
