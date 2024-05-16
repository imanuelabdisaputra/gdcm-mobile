import { Suspense, useEffect } from "react";
import { useColorScheme } from "react-native";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { Slot, useRouter, useSegments } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { TamaguiProvider, Text, Theme } from "tamagui";

import { AuthProvider, useAuth } from "../provider/authProvider";
import config from "../tamagui.config";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf")
  });

  const InitialLayout = () => {
    const { session, initialized } = useAuth();
    const segments = useSegments();
    const router = useRouter();

    useEffect(() => {
      if (!initialized) return;

      // Check if the path/url is in the (auth) group
      const inAuthGroup = segments[0] === "(tabs)";

      if (session && !inAuthGroup) {
        // Redirect authenticated users to the list page
        router.replace("/home");
      } else if (!session && inAuthGroup) {
        // Redirect unauthenticated users to the login page
        router.replace("/login");
      }
    }, [session, initialized]);

    return (
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="index"
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="(login)"
          options={{
            headerShown: false
          }}
        />
      </Stack>
    );
  };

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <TamaguiProvider config={config}>
      <Suspense fallback={<Text>Loading...</Text>}>
        <Theme name={colorScheme}>
          <ThemeProvider
            value={colorScheme === "light" ? DefaultTheme : DarkTheme}
          >
            <AuthProvider>
              <InitialLayout />
            </AuthProvider>
          </ThemeProvider>
        </Theme>
      </Suspense>
    </TamaguiProvider>
  );
}
