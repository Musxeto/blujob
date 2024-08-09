import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from "react-native";
import { COLORS, FONT, SHADOWS, SIZES } from "@/constants";

type Styles = {
  container: (selectedJob: string | number, item: { job_id: string | number }) => ViewStyle;
  logoContainer: (selectedJob: string | number, item: { job_id: string | number }) => ViewStyle;
  logoImage: ImageStyle;
  companyName: TextStyle;
  infoContainer: ViewStyle;
  jobName: (selectedJob: string | number, item: { job_id: string | number }) => TextStyle;
  infoWrapper: ViewStyle;
  publisher: (selectedJob: string | number) => TextStyle;
  location: TextStyle;
};

const styles: Styles = {
  container: (selectedJob, item) => ({
    width: 250,
    padding: SIZES.xLarge,
    backgroundColor: selectedJob === item.job_id ? COLORS.primary : "#FFF",
    borderRadius: SIZES.medium,
    justifyContent: "space-between",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  }),
  logoContainer: (selectedJob, item) => ({
    width: 50,
    height: 50,
    backgroundColor: selectedJob === item.job_id ? "#FFF" : COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  }),
  logoImage: {
    width: "70%",
    height: "70%",
  },
  companyName: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
    marginTop: SIZES.small / 1.5,
  },
  infoContainer: {
    marginTop: SIZES.large,
  },
  jobName: (selectedJob, item) => ({
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
  }),
  infoWrapper: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  publisher: (selectedJob) => ({
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.bold,
    color: selectedJob ? COLORS.white : COLORS.primary, // Assuming 'item.job_id' condition is not necessary
  }),
  location: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
  },
};

export default styles;
