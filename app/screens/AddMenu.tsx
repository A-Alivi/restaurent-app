import { MenuCategory, MenuItem } from "@/models/menu";
import { useMenuStore } from "@/store/useMenuStore";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Pressable,
  ScrollView,
  Switch,
  Text,
  TextInput,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const categories: MenuCategory[] = [
  "Burger",
  "Pizza",
  "Drinks",
  "Dessert",
  "BBQ",
  "Fast Food",
];

export default function AddMenuScreen() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const addMenuItem = useMenuStore((state) => state.addMenuItem);
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  const [category, setCategory] = useState<MenuCategory>("BBQ");

  const [featured, setFeatured] = useState(false);

  const [available, setAvailable] = useState(true);

  const handleSubmit = () => {
    const newItem: MenuItem = {
      id: Date.now().toString(),
      name,
      description,
      category,
      basePrice: Number(price),
      stock: Number(stock),
      isFeatured: featured,
      isAvailable: available,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
      tags: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    addMenuItem(newItem);
    console.log(newItem);
  };

  return (
    <SafeAreaView className="flex-1 bg-[#F7F7F8]">
      {/* HEADER */}

      <View className="flex-row items-center justify-between border-b border-gray-200 bg-white px-5 py-4">
        <View className="flex-row items-center">
          <Pressable className="mr-4">
            <Ionicons name="arrow-back" size={26} color="#111827" />
          </Pressable>

          <View>
            <Text className="text-xl font-semibold text-slate-900">
              Add Menu Item
            </Text>

            <Text className="mt-1 text-sm text-gray-500">
              Create a new food item
            </Text>
          </View>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          padding: 20,
          paddingBottom: 80,
        }}
      >
        {/* IMAGE UPLOAD */}

        <Pressable className="mb-6 h-52 items-center justify-center rounded-[32px] border-2 border-dashed border-gray-300 bg-white">
          <Ionicons name="image-outline" size={42} color="#9CA3AF" />

          <Text className="mt-4 text-lg font-medium text-gray-500">
            Upload Food Image
          </Text>
        </Pressable>

        {/* NAME */}

        <View className="mb-5">
          <Text className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500">
            Item Name
          </Text>

          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="eg: Zinger Burger"
            className="rounded-3xl border border-gray-200 bg-white px-5 py-5 text-base text-slate-900"
          />
        </View>

        {/* DESCRIPTION */}

        <View className="mb-5">
          <Text className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500">
            Description
          </Text>

          <TextInput
            value={description}
            onChangeText={setDescription}
            placeholder="Write food description..."
            multiline
            textAlignVertical="top"
            className="min-h-[130px] rounded-3xl border border-gray-200 bg-white px-5 py-5 text-base text-slate-900"
          />
        </View>

        {/* PRICE + STOCK */}

        <View className="mb-5 flex-row">
          <View className="mr-3 flex-1">
            <Text className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500">
              Price
            </Text>

            <TextInput
              value={price}
              onChangeText={setPrice}
              placeholder="450"
              keyboardType="numeric"
              className="rounded-3xl border border-gray-200 bg-white px-5 py-5 text-base text-slate-900"
            />
          </View>

          <View className="flex-1">
            <Text className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500">
              Stock
            </Text>

            <TextInput
              value={stock}
              onChangeText={setStock}
              placeholder="20"
              keyboardType="numeric"
              className="rounded-3xl border border-gray-200 bg-white px-5 py-5 text-base text-slate-900"
            />
          </View>
        </View>

        {/* CATEGORY */}

        <View className="mb-6">
          <Text className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
            Category
          </Text>

          <View className="flex-row flex-wrap">
            {categories.map((item) => {
              const active = item === category;

              return (
                <Pressable
                  key={item}
                  onPress={() => setCategory(item)}
                  className={`mb-3 mr-3 rounded-full px-5 py-3 ${
                    active ? "bg-[#001B3D]" : "bg-white"
                  }`}
                >
                  <Text
                    className={`font-semibold ${
                      active ? "text-white" : "text-slate-700"
                    }`}
                  >
                    {item}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>

        {/* SWITCHES */}

        <View className="mb-4 rounded-[28px] bg-white p-5">
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-lg font-semibold text-slate-900">
                Featured Item
              </Text>

              <Text className="mt-1 text-sm text-gray-500">
                Show item in featured section
              </Text>
            </View>

            <Switch value={featured} onValueChange={setFeatured} />
          </View>
        </View>

        <View className="mb-8 rounded-[28px] bg-white p-5">
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-lg font-semibold text-slate-900">
                Available
              </Text>

              <Text className="mt-1 text-sm text-gray-500">
                Customers can order this item
              </Text>
            </View>

            <Switch value={available} onValueChange={setAvailable} />
          </View>
        </View>

        {/* BUTTON */}

        <Pressable
          onPress={() => {
            handleSubmit();
          }}
          className="rounded-[28px] bg-[#001B3D] py-5"
        >
          <Text className="text-center text-lg font-bold text-white">
            Save Menu Item
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}
