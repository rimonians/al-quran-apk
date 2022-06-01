import { StyleSheet } from "react-native";

export const colors = {
  primary: "#02b56d",
  dark: "#222",
  light: "#fff",
  gray: "#6c7983",
};

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 26,
    color: colors.primary,
  },
  subHeading: {
    fontSize: 20,
    color: colors.dark,
  },
  bodyTextPrimary: {
    color: colors.primary,
  },
  bodyTextDark: {
    color: colors.dark,
  },
  bodyTextLight: {
    color: colors.light,
  },
  bodyTextGray: {
    color: colors.gray,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 15,
    color: colors.light,
    textAlign: "center",
    borderRadius: 5,
  },
});

export default globalStyles;
