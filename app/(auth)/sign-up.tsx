import { useAuth, useSignUp } from "@clerk/expo";
import { Link, useRouter } from "expo-router";
import React from "react";
import {
  ActivityIndicator,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page() {
  const { signUp, errors, fetchStatus } = useSignUp();
  const { isSignedIn } = useAuth();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [code, setCode] = React.useState("");

  const handleSubmit = async () => {
    const { error } = await signUp.password({
      emailAddress,
      password,
    });

    if (error) return console.error(JSON.stringify(error, null, 2));

    await signUp.verifications.sendEmailCode();
  };

  const handleVerify = async () => {
    await signUp.verifications.verifyEmailCode({ code });

    if (signUp.status === "complete") {
      await signUp.finalize({
        navigate: ({ session, decorateUrl }) => {
          if (session?.currentTask) return;

          const url = decorateUrl("/");
          router.replace("/(tabs)");
        },
      });
    }
  };

  if (signUp.status === "complete" || isSignedIn) return null;

  return (
    <SafeAreaView>
      <View className="flex-1 px-5 py-6 gap-4">
        {/* Title */}
        <Text className="text-3xl font-bold text-gray-900 text-center">
          Register :{")"}
        </Text>

        {/* VERIFY STATE */}
        {signUp.status === "missing_requirements" &&
        signUp.unverifiedFields.includes("email_address") &&
        signUp.missingFields.length === 0 ? (
          <View className="gap-4 mt-4">
            <Text className="text-xl font-semibold text-gray-800">
              Verify your account
            </Text>

            <TextInput
              className="border border-gray-300 rounded-xl px-4 py-3 text-base bg-white"
              value={code}
              placeholder="Enter verification code"
              placeholderTextColor="#999"
              onChangeText={setCode}
              keyboardType="numeric"
            />

            {errors.fields.code && (
              <Text className="text-red-500 text-xs">
                {errors.fields.code.message}
              </Text>
            )}

            <Pressable
              onPress={handleVerify}
              disabled={fetchStatus === "fetching"}
              className={`py-3 rounded-xl items-center ${
                fetchStatus === "fetching" ? "bg-gray-400" : "bg-blue-600"
              }`}
            >
              <Text className="text-white font-semibold">Verify</Text>
            </Pressable>

            <Pressable
              onPress={() => signUp.verifications.sendEmailCode()}
              className="py-3 items-center"
            >
              <Text className="text-blue-600 font-semibold">Resend code</Text>
            </Pressable>
          </View>
        ) : (
          <>
            {/* Email */}
            <Text className="text-sm font-semibold text-gray-700">
              Email address
            </Text>

            <TextInput
              className="border border-gray-300 rounded-xl px-4 py-3 text-base"
              autoCapitalize="none"
              value={emailAddress}
              placeholder="Enter email"
              placeholderTextColor="#999"
              onChangeText={setEmailAddress}
              keyboardType="email-address"
            />

            {errors.fields.emailAddress && (
              <Text className="text-red-500 text-xs">
                {errors.fields.emailAddress.message}
              </Text>
            )}

            {/* Password */}
            <Text className="text-sm font-semibold text-gray-700 mt-2">
              Password
            </Text>

            <TextInput
              className="border border-gray-300 rounded-xl px-4 py-3 text-base"
              value={password}
              placeholder="Enter password"
              placeholderTextColor="#999"
              secureTextEntry
              onChangeText={setPassword}
            />

            {errors.fields.password && (
              <Text className="text-red-500 text-xs">
                {errors.fields.password.message}
              </Text>
            )}

            {/* Submit Button */}
            <Pressable
              onPress={handleSubmit}
              disabled={
                !emailAddress || !password || fetchStatus === "fetching"
              }
              className={`mt-4 py-4 rounded-xl flex-row justify-center items-center ${
                fetchStatus === "fetching" ? "bg-gray-400" : "bg-blue-600"
              }`}
            >
              {fetchStatus === "fetching" ? (
                <>
                  <ActivityIndicator color="#fff" />
                  <Text className="text-white ml-2 font-semibold">
                    Loading...
                  </Text>
                </>
              ) : (
                <Text className="text-white font-semibold">Sign up</Text>
              )}
            </Pressable>

            {/* Link */}
            <View className="flex-row items-center justify-center mt-4">
              <Text className="text-gray-600">Already have an account? </Text>

              <Link href="/sign-in">
                <Text className="text-blue-600 font-semibold underline">
                  Sign in
                </Text>
              </Link>
            </View>
          </>
        )}

        {/* Captcha */}
        <View nativeID="clerk-captcha" />
      </View>
    </SafeAreaView>
  );
}
