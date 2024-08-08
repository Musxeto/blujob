import { Text, View, ScrollView, SafeAreaView } from "react-native";
import { useState } from "react";
import { Stack, useRouter } from "expo-router";
import { COLORS, icons, images, SIZES } from "@/constants";
import ScreenHeaderBtn from "@/components/ScreenHeaderBtn";
import Welcome from "@/components/Welcome";
import PopularJobs from "@/components/PopularJobs";
import NearByJobs from "@/components/NearByJobs";
export default function Home() {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
          },
          headerShadowVisible: false,
          headerLeft: () => {
            return<ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" handlePress={undefined} />
          },
          headerRight: () => {
            return <ScreenHeaderBtn iconUrl={images.profile} dimension="60%" handlePress={undefined} />;
          },
          headerTitle: "",
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome />
          <PopularJobs />
          <NearByJobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
