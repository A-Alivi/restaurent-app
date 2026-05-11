import { useAuth, useSignIn } from "@clerk/expo";
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
  const { signIn, errors, fetchStatus } = useSignIn();
  const router = useRouter();
  const { isSignedIn } = useAuth();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [code, setCode] = React.useState("");

  const isLoading = fetchStatus === "fetching";
  const isDisabled = !emailAddress || !password || isLoading;
  const handleSubmit = async () => {
    try {
      const { error } = await signIn.create({
        identifier: emailAddress,
        password,
      });

      if (error) {
        console.error(JSON.stringify(error, null, 2));
        return;
      }

      if (signIn.status === "complete") {
        router.replace("/");
      }
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
    }
  };

  const handleVerify = async () => {
    await signIn.mfa.verifyEmailCode({ code });

    if (signIn.status === "complete") {
      router.replace("/");
    }
  };

  // 🔐 MFA SCREEN
  if (signIn.status === "needs_second_factor") {
    return (
      <View className="flex-1 p-5 gap-3">
        <Text className="text-2xl font-bold">Verify your account</Text>

        <TextInput
          value={code}
          placeholder="Enter verification code"
          keyboardType="numeric"
          onChangeText={setCode}
          className="border border-gray-300 rounded-lg p-3 text-base bg-white"
        />

        {errors.fields.code && (
          <Text className="text-red-500 text-sm">
            {errors.fields.code.message}
          </Text>
        )}

        <Pressable
          onPress={handleVerify}
          disabled={isLoading}
          className={`p-4 rounded-xl flex-row justify-center items-center ${
            isLoading ? "bg-gray-400" : "bg-blue-600"
          }`}
        >
          {isLoading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text className="text-white font-semibold">Verify</Text>
          )}
        </Pressable>

        <Pressable
          onPress={() => signIn.mfa.sendEmailCode()}
          className="p-3 items-center"
        >
          <Text className="text-blue-600 font-semibold">I need a new code</Text>
        </Pressable>

        <Pressable onPress={() => signIn.reset()} className="p-3 items-center">
          <Text className="text-gray-600 font-semibold">Start over</Text>
        </Pressable>
      </View>
    );
  }

  // 🔑 LOGIN SCREEN
  return (
    <SafeAreaView>
      <View className="flex-1 p-5 gap-3 justify-between">
        <Text className="text-2xl font-bold text-center">Welcome!</Text>
        {/* EMAIL */}
        <Text className="font-semibold">Email address</Text>
        <TextInput
          value={emailAddress}
          placeholder="Enter email"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={setEmailAddress}
          className="border border-gray-300 rounded-lg p-3 text-base bg-white"
        />
        {errors.fields.identifier && (
          <Text className="text-red-500 text-sm">
            {errors.fields.identifier.message}
          </Text>
        )}

        {/* PASSWORD */}
        <Text className="font-semibold">Password</Text>
        <TextInput
          value={password}
          placeholder="Enter password"
          secureTextEntry
          onChangeText={setPassword}
          className="border border-gray-300 rounded-lg p-3 text-base bg-white"
        />
        {errors.fields.password && (
          <Text className="text-red-500 text-sm">
            {errors.fields.password.message}
          </Text>
        )}

        {/* LOGIN BUTTON */}
        <Pressable
          onPress={() => handleSubmit()}
          disabled={isDisabled}
          className={`p-4 rounded-xl flex-row justify-center items-center ${
            isDisabled ? "bg-gray-400" : "bg-blue-600"
          }`}
        >
          {isLoading ? (
            <>
              <ActivityIndicator color="#fff" />
              <Text className="text-white ml-2 font-semibold">Loading...</Text>
            </>
          ) : (
            <Text className="text-white font-semibold">Login</Text>
          )}
        </Pressable>

        {/* SIGN UP */}
        <View className="flex-row mt-4">
          <Text>Don't have an account? </Text>
          <Link href="/sign-up">
            <Text className="text-blue-600 underline font-semibold">
              Sign up
            </Text>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}
