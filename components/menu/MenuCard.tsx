import { MenuItem } from "@/models/menu";
import { Image } from "expo-image";
import { Edit } from "lucide-react-native";
import React, { memo } from "react";
import { Pressable, Text, View } from "react-native";

type Props = {
  item: MenuItem;
  index: number;
};

function MenuCardComponent({ item, index }: Props) {
  return (
    <View className="p-2 shadow rounded-2xl m-2">
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
          {item.tags?.map((tag) => (
            <View className="rounded-full bg-blue-100 px-3 py-1">
              <Text
                key={tag}
                className="text-[10px] font-bold tracking-widest text-blue-700"
              >
                {tag}
              </Text>
            </View>
          ))}

          {item.isFeatured && (
            <View className="ml-2 rounded-full bg-orange-100 px-3 py-1">
              <Text className="text-[10px] font-bold tracking-widest text-orange-700">
                ☆ FEATURED
              </Text>
            </View>
          )}
        </View>

        <Text className="text-xl font-bold text-slate-900">
          {"Rs." + item.basePrice}
        </Text>
      </View>

      <Text className="mt-4 text-xl font-semibold text-slate-900">
        {item.name}
      </Text>

      <Text className="mt-2 text-base leading-7 text-gray-500">
        {item.description}
      </Text>

      <View className=" border-t border-gray-100 pt-5">
        <View className="flex-row items-center justify-between">
          <View className="flex-row">
            <View className="m-2">
              <Text className="text-xs font-semibold tracking-widest text-gray-400">
                STOCK
              </Text>

              <Text
                className={`mt-2 text-xl font-semibold ${
                  item.stock === 0 ? "text-red-500" : "text-slate-900"
                }`}
              >
                {item.stock + " Units"}
              </Text>
            </View>

            <View className="m-2">
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
                  className={`text-xl font-medium ${
                    item.isAvailable ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {item.isAvailable ? "Available" : "Out of Stock"}
                </Text>
              </View>
            </View>
          </View>

          <Pressable
            className={`rounded-xl border px-2 py-2 m-2 ${
              item.isAvailable ? "border-gray-300" : "border-red-300"
            }`}
          >
            <Text
              className={`text-lg font-semibold ${
                item.isAvailable ? "text-slate-900" : "text-red-500"
              }`}
            >
              {item.isAvailable ? (
                <Edit />
              ) : (
                // <Ionicons name="create-outline" size={25} color="black" />
                "Restock"
              )}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export const MenuCard = memo(MenuCardComponent);
