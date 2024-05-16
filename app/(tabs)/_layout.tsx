import {
  BookOpenText,
  Home,
  NotebookPen,
  UserCircle
} from "@tamagui/lucide-icons";
import { Tabs } from "expo-router";

import CustomHeader from "../../components/CustomHeader";

export default function Layout() {
  const configTab = [
    {
      name: "home",
      options: {
        title: "Home",
        tabBarIcon: ({ color }) => (
          <Home
            size={20}
            color={color}
          />
        )
      }
    },
    {
      name: "journey",
      options: {
        title: "Journey",
        tabBarIcon: ({ color }) => (
          <NotebookPen
            size={20}
            color={color}
          />
        )
      }
    },
    {
      name: "devotion",
      options: {
        title: "Devotion",
        tabBarIcon: ({ color }) => (
          <BookOpenText
            size={20}
            color={color}
          />
        )
      }
    },
    {
      name: "profile",
      options: {
        title: "Profile",
        tabBarIcon: ({ color }) => (
          <UserCircle
            size={20}
            color={color}
          />
        )
      }
    }
  ];
  return (
    <Tabs
      screenOptions={{
        header: () => <CustomHeader />,
        tabBarLabelStyle: { fontWeight: "600" }
      }}
    >
      {configTab.map((item, i) => (
        <Tabs.Screen
          key={i}
          name={item.name}
          options={item.options}
        />
      ))}
    </Tabs>
  );
}
