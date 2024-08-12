import useFetch from "@/hooks/useFetch";
import mockNearbyJobData from "./mockNearbyJobData";
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { useRouter } from "expo-router";
import { COLORS, FONT, SIZES } from "@/constants";
import NearbyJobCard from "./common/cards/nearby/NearbyJobCard";

// Define the job data type
type JobData = {
  job_id: string;
  employer_name: string;
  job_title: string;
  job_country: string;
  job_publisher: string;
  employer_logo: string;
};

const NearByJobs = () => {
  const router = useRouter();
  const [data, setData] = useState<JobData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // Toggle between mock data and real data by setting a flag
  const useMockData = true;

  useEffect(() => {
    if (useMockData) {
      // Use mock data
      setData(mockNearbyJobData);
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

  const [selectedJob, setSelectedJob] = useState<string | undefined>();

  const handleCardPress = (item: JobData) => {
    router.push(`/job-details/${item.job_id}`);
    setSelectedJob(item.job_id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <NearbyJobCard
                item={item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={(item) => item.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: SIZES.small,
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },
  headerBtn: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
  cardsContainer: {
    marginTop: SIZES.medium,
    gap: SIZES.small,
  },
});

export default NearByJobs;
