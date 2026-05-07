// // app/(tabs)/profile.tsx  OR settings.tsx

// import InfoRow from "@/components/settings/InfoRow";
// import LogoutButton from "@/components/settings/LogoutButton";
// import SectionCard from "@/components/settings/SectionCard";
// import StatusBadge from "@/components/settings/StatusBadge";
// import ToggleRow from "@/components/settings/ToggleRow";
// import { Settings } from "@/models/settings";
// import { useClerk, useUser } from "@clerk/expo";
// import { useRouter } from "expo-router";
// import React, { useState } from "react";
// import { Image, Text, View } from "react-native";

// const initialData: Settings = {
//   restaurant: {
//     name: "The Spicy Oven",
//     address: "123 Culinary Way, Suite 4B\nFlavor Town, FT 90210",
//     hours: "Mon - Sun: 11:00 AM - 11:00 PM",
//   },
//   notifications: {
//     pushEnabled: true,
//     soundEnabled: true,
//   },
//   system: {
//     apiConnected: true,
//     lastSynced: "Just now",
//   },
// };

// export default function SettingsScreen() {
//   const [settings, setSettings] = useState(initialData);

//   const { signOut } = useClerk();
//   const { user } = useUser();
//   const router = useRouter();

//   // ✅ Clean logout handler
//   const handleLogout = async () => {
//     try {
//       await signOut();
//       router.replace("/(auth)/sign-in"); // redirect after logout
//     } catch (error) {
//       console.log("Logout error:", error);
//     }
//   };

//   return (
//     <View className="flex-1 bg-gray-100 p-4">
//       {/* Header */}
//       <Text className="text-2xl font-bold mb-1">Settings</Text>
//       <Text className="text-gray-500 mb-4">
//         Manage your restaurant preferences and system connections.
//       </Text>

//       {/* Optional User Info */}
//       <Text className="text-sm text-gray-500 mb-3">
//         Logged in as: {user?.emailAddresses[0]?.emailAddress}
//       </Text>

//       {/* Restaurant Info */}
//       <SectionCard
//         title="Restaurant Info"
//         rightComponent={<Text className="text-orange-600">Edit</Text>}
//       >
//         <Image
//           source={{ uri: "https://via.placeholder.com/100" }}
//           className="w-24 h-24 rounded-xl mb-4"
//         />

//         <InfoRow label="Name" value={settings.restaurant.name} />
//         <InfoRow label="Address" value={settings.restaurant.address} />
//         <InfoRow label="Operating Hours" value={settings.restaurant.hours} />
//       </SectionCard>

//       {/* Notifications */}
//       <SectionCard title="Notifications">
//         <ToggleRow
//           title="Push Notifications"
//           description="Receive alerts for new orders on this device."
//           value={settings.notifications.pushEnabled}
//           onChange={(val: any) =>
//             setSettings({
//               ...settings,
//               notifications: {
//                 ...settings.notifications,
//                 pushEnabled: val,
//               },
//             })
//           }
//         />

//         <ToggleRow
//           title="Sound Alerts"
//           description="Play a chime when a new order arrives."
//           value={settings.notifications.soundEnabled}
//           onChange={(val: any) =>
//             setSettings({
//               ...settings,
//               notifications: {
//                 ...settings.notifications,
//                 soundEnabled: val,
//               },
//             })
//           }
//         />
//       </SectionCard>

//       {/* System */}
//       <SectionCard title="System">
//         <View className="flex-row justify-between items-center mb-2">
//           <Text className="text-base">API Connection Status</Text>
//           <StatusBadge isConnected={settings.system.apiConnected} />
//         </View>

//         <Text className="text-gray-500 text-sm">
//           Last synced: {settings.system.lastSynced}
//         </Text>
//       </SectionCard>

//       {/* Logout */}
//       <LogoutButton onPress={handleLogout} />
//     </View>
//   );
// }

import { Show, useClerk, useUser } from "@clerk/expo";
import { Link, useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
//import { Settings } from "../../models/settings";
// const initialData: Settings = {
//   restaurant: {
//     name: "The Spicy Oven",
//     address: "123 Culinary Way, Suite 4B\nFlavor Town, FT 90210",
//     hours: "Mon - Sun: 11:00 AM - 11:00 PM",
//   },
//   notifications: {
//     pushEnabled: true,
//     soundEnabled: true,
//   },
//   system: {
//     apiConnected: true,
//     lastSynced: "Just now",
//   },
// };
export default function Page() {
  const { user } = useUser();
  const { signOut } = useClerk();
  //const [settings, setSettings] = useState(initialData);

  const router = useRouter();

  // ✅ Clean logout handler
  const handleLogout = async () => {
    try {
      await signOut();
      router.replace("/(auth)/sign-in"); // redirect after logout
    } catch (error) {
      console.log("Logout error:", error);
    }
  };

  return (
    <>
      {/* <View className="flex-1 bg-gray-100 p-4">
        <Text className="text-2xl font-bold mb-1">Settings</Text>
        <Text className="text-gray-500 mb-4">
          Manage your restaurant preferences and system connections.
        </Text>

        <Text className="text-sm text-gray-500 mb-3">
          Logged in as: {user?.emailAddresses[0]?.emailAddress}
        </Text>

        <SectionCard
          title="Restaurant Info"
          rightComponent={<Text className="text-orange-600">Edit</Text>}
        >
          <Image
            source={{ uri: "https://via.placeholder.com/100" }}
            className="w-24 h-24 rounded-xl mb-4"
          />

          <InfoRow label="Name" value={settings.restaurant.name} />
          <InfoRow label="Address" value={settings.restaurant.address} />
          <InfoRow label="Operating Hours" value={settings.restaurant.hours} />
        </SectionCard>

       
        <SectionCard title="System">
          <View className="flex-row justify-between items-center mb-2">
            <Text className="text-base">API Connection Status</Text>
            <StatusBadge isConnected={settings.system.apiConnected} />
          </View>
          <Text className="text-gray-500 text-sm">
            Last synced: {settings.system.lastSynced}
          </Text>
        </SectionCard>
      
        <LogoutButton onPress={handleLogout} />
      </View> */}
      <View style={styles.container}>
        <Text style={styles.title}>Welcome!</Text>
        <Show when="signed-out">
          <Link href="/(auth)/sign-in">
            <Text>Sign in</Text>
          </Link>
          <Link href="/(auth)/sign-up">
            <Text>Sign up</Text>
          </Link>
        </Show>
        <Show when="signed-in">
          <Text>
            Hello{" "}
            {user?.fullName != null
              ? user?.fullName
              : user?.emailAddresses[0].emailAddress}
          </Text>
          <Pressable style={styles.button} onPress={() => signOut()}>
            <Text style={styles.buttonText}>Sign out</Text>
          </Pressable>
        </Show>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    gap: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#0a7ea4",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
