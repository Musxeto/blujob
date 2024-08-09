import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { icons } from "@/constants";
import { COLORS, SIZES, FONT } from "@/constants";
import { FlatList } from "react-native-gesture-handler";
import { Href, router } from "expo-router";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  userName: {
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.secondary,
  },
  welcomeMessage: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
    marginTop: 2,
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.large,
    height: 50,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginRight: SIZES.xLarge,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: "100%",
  },
  searchInput: {
    fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.white,
  },
  tabsContainer: {
    width: "100%",
    marginTop: SIZES.medium,
    flex: 1,
  },
  tab: {
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.medium,
    borderColor: COLORS.gray2,
    borderWidth: 1,
    marginTop: SIZES.xxSmall,
  },
  tabText: {
    fontFamily: FONT.medium,
  },
  activeTab: {
    borderColor: COLORS.primary,
  },
});

const Welcome = () => {
  const [activeJobType, setActiveJobType] = useState("Part-time");
  const jobTypes = ["Full-time", "Part-time", "Contractor", "Internship"];

  return (
    <View style={styles.container}>
      <Text style={styles.userName}>Welcome!</Text>
      <Text style={styles.welcomeMessage}>Find Your Perfect Job</Text>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder="What are you looking for?"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.tab,
                activeJobType === item ? styles.activeTab : null,
              ]}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}` as Href);
              }}
            >
              <Text style={styles.tabText}>{item}</Text>
            </TouchableOpacity>
          )}
          horizontal
          contentContainerStyle={{ columnGap: SIZES.small }}
        />
      </View>
    </View>
  );
};

export default Welcome;
