import React from "react";
import { useRouter } from "expo-router";
import { Button, Text, View, XStack, YStack } from "tamagui";

const Event = () => {
  const router = useRouter();
  return (
    <View
      flex={1}
      padding="$5"
      gap="$2"
      backgroundColor="#fff"
    >
      <Text
        fontSize="$8"
        fontWeight="700"
      >
        Events
      </Text>
      <XStack flexWrap="wrap">
        <Button
          flexShrink={1}
          flexBasis={300}
          onPress={() => router.push("event/1")}
        >
          Go to Event 1
        </Button>
        <Button onPress={() => router.push("event/1")}>Go to Event 1</Button>
        <Button onPress={() => router.push("event/1")}>Go to Event 1</Button>
      </XStack>
    </View>
  );
};

export default Event;
