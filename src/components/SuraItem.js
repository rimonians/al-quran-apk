import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { colors } from "../styles/globalStyles";
import { useNavigation } from "@react-navigation/native";
import numbering from "../utils/numbering";

const SuraItem = ({ item }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.suraItem}>
      <View style={styles.suraItemHead}>
        <Text style={styles.suraNo}>{numbering(item.suraNo)}</Text>
        <FontAwesome5
          style={styles.suraPlace}
          name={item.place === "মাক্কী" ? "kaaba" : "mosque"}
        />
      </View>
      <View style={styles.suraItemBody}>
        <Text style={styles.suraAr}>{item.ar}</Text>
        <Text style={styles.suraEn}>{item.en}</Text>
        <Text style={styles.suraBn}>{item.bn}</Text>
      </View>
      <View style={styles.suraItemFooter}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Preview", { item })}
        >
          <Ionicons
            style={styles.suraReadIcon}
            name="arrow-forward-circle-outline"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SuraItem;

const styles = StyleSheet.create({
  suraItem: {
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: colors.light,
    elevation: 2,
    shadowColor: colors.gray,
  },
  suraItemHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  suraNo: {
    fontFamily: "bnFont",
    fontSize: 20,
    color: colors.primary,
  },
  suraPlace: {
    fontSize: 20,
    color: colors.gray,
  },
  suraItemBody: {
    marginVertical: 5,
  },
  suraAr: {
    fontWeight: "bold",
    color: colors.gray,
  },
  suraEn: {
    fontFamily: "enFont",
    color: colors.gray,
    marginVertical: 5,
  },
  suraBn: {
    fontFamily: "bnFont",
    color: colors.gray,
  },
  suraItemFooter: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  suraReadIcon: {
    color: colors.primary,
    fontSize: 26,
  },
});
