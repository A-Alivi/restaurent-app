// import { Show, useClerk, useUser } from "@clerk/expo";
// import { Link, useRouter } from "expo-router";
// import { Pressable, StyleSheet, Text, View } from "react-native";

// export default function Page() {
//   const { user } = useUser();
//   const { signOut } = useClerk();
//   const router = useRouter();
//   const handleSignOut = async () => {
//     await signOut();
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Welcome!</Text>
//       <Show when="signed-out">
//         <Link href="/(auth)/sign-in">
//           <Text>Sign in</Text>
//         </Link>
//         <Link href="/(auth)/sign-up">
//           <Text>Sign up</Text>
//         </Link>
//       </Show>
//       <Show when="signed-in">
//         <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
//         <Pressable style={styles.button} onPress={() => handleSignOut()}>
//           <Text style={styles.buttonText}>Sign out</Text>
//         </Pressable>
//       </Show>
//       <Text>Hello</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     paddingTop: 60,
//     gap: 16,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//   },
//   button: {
//     backgroundColor: "#0a7ea4",
//     paddingVertical: 12,
//     paddingHorizontal: 24,
//     borderRadius: 8,
//     alignItems: "center",
//   },
//   buttonText: {
//     color: "#fff",
//     fontWeight: "600",
//   },
// });

import { useEffect } from "react";
import { FlatList, Text, View } from "react-native";
import OrderCard from "../../components/order/order-card";
import { orders as initialOrders } from "../../data/orders";
import { useOrderStore } from "../../store/useOrderStore";

export default function OrdersScreen() {
  const orders = useOrderStore((state) => state.orders);
  const setOrders = useOrderStore((state) => state.setOrders);
  const updateStatus = useOrderStore((state) => state.updateOrderStatus);

  useEffect(() => {
    setOrders(initialOrders);
  }, []);

  const handleUpdateStatus = (id: string) => {
    const order = orders.find((o) => o.id === id);
    if (!order) return;

    let nextStatus: any = "delivered";

    if (order.status === "pending") nextStatus = "preparing";
    else if (order.status === "preparing") nextStatus = "out_for_delivery";
    else if (order.status === "out_for_delivery") nextStatus = "delivered";

    updateStatus(id, nextStatus);
  };

  return (
    <View className="flex-1 bg-gray-100">
      <FlatList
        data={[...orders].sort(
          (a, b) =>
            new Date(b.timestamps.createdAt).getTime() -
            new Date(a.timestamps.createdAt).getTime(),
        )}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <OrderCard order={item} onUpdateStatus={handleUpdateStatus} />
        )}
        ListEmptyComponent={
          <Text className="text-center mt-10 text-gray-500">
            No Orders Found
          </Text>
        }
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}
