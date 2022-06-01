import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import globalStyles, { colors } from "../styles/globalStyles";

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text style={[globalStyles.heading, { fontFamily: "bnFont" }]}>
          আল-কোরআন
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerIcon: {
    fontSize: 24,
    color: colors.dark,
  },
});
