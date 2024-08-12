import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./nearbyjobcard.style";

const NearbyJobCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        selectedJob === item.job_id && { backgroundColor: COLORS.lightGray }, // Example of applying conditional styling
      ]}
      onPress={() => handleCardPress(item)}
    >
      <View style={styles.logoContainer}>
        <Image
          source={{ uri: item?.employer_logo }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.companyName} numberOfLines={1}>
          {item.employer_name}
        </Text>

        <Text
          style={[
            styles.jobName,
            selectedJob === item.job_id && { color: COLORS.primary }, // Example of applying conditional styling
          ]}
          numberOfLines={1}
        >
          {item.job_title}
        </Text>

        <View style={styles.infoWrapper}>
          <Text style={styles.publisher} numberOfLines={1}>
            {item.job_publisher} - 
          </Text>
          <Text style={styles.location} numberOfLines={1}>
            {item.job_country}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;
