import { useState, useEffect } from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";

import styles from "./popularjobs.style";
import { COLORS, SIZES } from "@/constants";
import PopularJobCard from "./common/cards/popular/PopularJobCard";
import useFetch from "@/hooks/useFetch";
import mockJobData from './mockJobData'; // Import the mock data

const Popularjobs = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Toggle between mock data and real data by setting a flag
  const useMockData = true;

  useEffect(() => {
    if (useMockData) {
      // Use mock data
      setData(mockJobData);
      setIsLoading(false);
    } else {
      // Fetch real data
      const fetchData = async () => {
        try {
          const result = await useFetch("search", {
            query: "React developer",
            num_pages: "1",
          });
          setData(result.data);
        } catch (err) {
          setError(err);
        } finally {
          setIsLoading(false);
        }
      };
      fetchData();
    }
  }, [useMockData]);

  const [selectedJob, setSelectedJob] = useState();

  const handleCardPress = (item) => {
    router.push(`/job-details/${item.job_id}`);
    setSelectedJob(item.job_id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size='large' color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={(item) => item.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
