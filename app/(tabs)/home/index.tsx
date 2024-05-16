import React from "react";
import { StatusBar } from "react-native";
import { useRouter } from "expo-router";
import { Button, H4, Image, ScrollView, View, XStack, YStack } from "tamagui";

const Home = () => {
  const router = useRouter();

  const events = [
    {
      url: "https://ypfsqxsfgglotzlsbynt.supabase.co/storage/v1/object/sign/images/event/WhatsApp%20Image%202024-03-29%20at%2021.00.56.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvZXZlbnQvV2hhdHNBcHAgSW1hZ2UgMjAyNC0wMy0yOSBhdCAyMS4wMC41Ni5qcGVnIiwiaWF0IjoxNzE1NzYxNDE4LCJleHAiOjE3NDcyOTc0MTh9.8Zbo6Bp8uO1MMTQVfQ5URjmuaeBkNxs3LNYWsBMAISo&t=2024-05-15T08%3A23%3A38.215Z",
      to: "/event/1"
    },
    {
      url: "https://ypfsqxsfgglotzlsbynt.supabase.co/storage/v1/object/sign/images/event/prayer%20fest%202%20(1).jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvZXZlbnQvcHJheWVyIGZlc3QgMiAoMSkuanBnIiwiaWF0IjoxNzE1NzYzNTMwLCJleHAiOjE3NDcyOTk1MzB9._25cepFUP20RfmqKiTgs3ImC-f9sXKjhpG8sYffk49M&t=2024-05-15T08%3A58%3A50.160Z",
      to: "/event/2"
    },
    {
      url: "https://ypfsqxsfgglotzlsbynt.supabase.co/storage/v1/object/sign/images/event/WhatsApp%20Image%202024-03-29%20at%2021.00.56.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvZXZlbnQvV2hhdHNBcHAgSW1hZ2UgMjAyNC0wMy0yOSBhdCAyMS4wMC41Ni5qcGVnIiwiaWF0IjoxNzE1NzYxNDE4LCJleHAiOjE3NDcyOTc0MTh9.8Zbo6Bp8uO1MMTQVfQ5URjmuaeBkNxs3LNYWsBMAISo&t=2024-05-15T08%3A23%3A38.215Z",
      to: "/event/3"
    }
  ];

  return (
    <ScrollView>
      <StatusBar barStyle="light-content" />

      <YStack>
        <View>
          <Image
            source={{
              uri: "https://ypfsqxsfgglotzlsbynt.supabase.co/storage/v1/object/sign/images/event/WhatsApp%20Image%202024-03-29%20at%2021.00.56.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvZXZlbnQvV2hhdHNBcHAgSW1hZ2UgMjAyNC0wMy0yOSBhdCAyMS4wMC41Ni5qcGVnIiwiaWF0IjoxNzE1NzYxNDE4LCJleHAiOjE3NDcyOTc0MTh9.8Zbo6Bp8uO1MMTQVfQ5URjmuaeBkNxs3LNYWsBMAISo&t=2024-05-15T08%3A23%3A38.215Z"
            }}
            aspectRatio={2}
          />
        </View>
      </YStack>

      <YStack
        gap="$3"
        marginTop="$5"
      >
        <XStack
          alignItems="center"
          justifyContent="space-between"
          marginHorizontal="$4"
        >
          <H4
            fontWeight={700}
            color="black"
          >
            Events
          </H4>
          <Button
            size="$2.5"
            fontWeight={500}
            onPress={() => router.navigate("/event")}
          >
            View All
          </Button>
        </XStack>

        <ScrollView
          width="100%"
          horizontal
          showsHorizontalScrollIndicator={false}
          height={150}
        >
          <XStack
            flex={1}
            gap="$3"
            paddingHorizontal="$4"
          >
            {events.map((item, i) => (
              <Image
                key={i}
                source={{
                  uri: item.url
                }}
                aspectRatio="1"
                objectFit="contain"
                borderRadius={8}
                onPress={() => router.push(item.to)}
              />
            ))}
          </XStack>
        </ScrollView>
      </YStack>
    </ScrollView>
  );
};

export default Home;
