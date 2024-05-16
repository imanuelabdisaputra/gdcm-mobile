import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Bell } from "@tamagui/lucide-icons";
import { useRouter } from "expo-router";
import { Text, View, XStack } from "tamagui";

import { neutral } from "../utils/colors";

const CustomHeader = () => {
  const { top } = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View
      backgroundColor={neutral[900]}
      paddingTop={top}
    >
      <XStack
        height={64}
        alignItems="center"
        justifyContent="space-between"
        paddingHorizontal="$4"
      >
        <View
          borderWidth={2}
          borderColor="#fff"
          paddingHorizontal="$1.5"
          backgroundColor="black"
        >
          <Text
            color="#fff"
            fontWeight="700"
            fontSize="$6"
            fontStyle="italic"
          >
            GDCM
          </Text>
        </View>
        <Bell
          size={24}
          color="#fff"
          onPress={() => router.navigate("/notification")}
        />
      </XStack>
    </View>
  );
};

export default CustomHeader;
