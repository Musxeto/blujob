import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "@/constants";

// Define the type for props
type ScreenHeaderBtnProps = {
  iconUrl: any; // You can replace 'any' with the appropriate type if you know it, e.g., ImageSourcePropType
  dimension: number;
  handlePress: () => void;
};

const ScreenHeaderBtn: React.FC<ScreenHeaderBtnProps> = ({ iconUrl, dimension, handlePress }) => {
  return (
    <TouchableOpacity onPress={handlePress} style={styles.btnContainer}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={[styles.btnImg, { width: dimension, height: dimension }]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
  },
  btnImg: {
    borderRadius: SIZES.small / 1.25,
  },
});

export default ScreenHeaderBtn;
