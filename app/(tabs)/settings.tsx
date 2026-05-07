import { Show, useClerk, useUser } from "@clerk/expo";
import { Link, useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page() {
  const { user } = useUser();
  const { signOut } = useClerk();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut();
      router.replace("/(auth)/sign-in");
    } catch (error) {
      console.log("Logout error:", error);
    }
  };

  return (
    <SafeAreaView>
      <View className="flex-1 bg-white px-6 pt-16">
        {/* Header */}
        <View className="mb-8">
          <Text className="text-3xl font-bold text-gray-900">Welcome 👋</Text>

          <Text className="text-base text-gray-500 mt-2">
            Manage your account and authentication settings.
          </Text>
        </View>

        {/* Signed Out */}
        <Show when="signed-out">
          <View className="gap-4">
            <Link href="/(auth)/sign-in" asChild>
              <Pressable className="bg-orange-500 py-4 rounded-2xl items-center active:opacity-80">
                <Text className="text-white font-semibold text-base">
                  Sign In
                </Text>
              </Pressable>
            </Link>

            <Link href="/(auth)/sign-up" asChild>
              <Pressable className="border border-orange-500 py-4 rounded-2xl items-center active:opacity-80">
                <Text className="text-orange-500 font-semibold text-base">
                  Create Account
                </Text>
              </Pressable>
            </Link>
          </View>
        </Show>

        {/* Signed In */}
        <Show when="signed-in">
          <View className="bg-gray-50 border border-gray-100 rounded-3xl p-5 shadow-sm">
            <Text className="text-sm text-gray-500 mb-2">Logged in as</Text>

            <Text className="text-xl font-semibold text-gray-900">
              {user?.fullName ?? user?.emailAddresses[0].emailAddress}
            </Text>

            <Pressable
              onPress={handleLogout}
              className="mt-6 bg-red-500 py-4 rounded-2xl items-center active:opacity-80"
            >
              <Text className="text-white font-semibold text-base">
                Log Out
              </Text>
            </Pressable>
          </View>
        </Show>
      </View>
    </SafeAreaView>
  );
}
