import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { colors } from "../styles/globalStyles";
import numbering from "../utils/numbering";

const SuraInfo = ({ sura }) => {
  return (
    <View style={styles.info}>
      <View style={styles.name}>
        <Text style={styles.ar}>{sura.ar}</Text>
        <Text style={styles.en}>{sura.en}</Text>
        <Text style={styles.bn}>{sura.bn}</Text>
      </View>
      <View style={styles.other}>
        <Text style={styles.ayat}>
          সর্বোমোট আয়াত - {numbering(sura.totalAyat)}
        </Text>
        <Text style={styles.place}>সূরার ধরন - {sura.place}</Text>
      </View>
    </View>
  );
};

export default SuraInfo;

const styles = StyleSheet.create({
  info: {
    marginVertical: 15,
    backgroundColor: colors.primary,
    borderRadius: 5,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
    shadowColor: colors.gray,
  },
  name: {
    alignItems: "center",
    marginBottom: 15,
  },
  ar: {
    fontWeight: "bold",
    color: colors.light,
    fontSize: 20,
  },
  en: {
    fontFamily: "enFont",
    color: colors.light,
    fontSize: 20,
    marginVertical: 5,
  },
  bn: {
    fontFamily: "bnFont",
    color: colors.light,
    fontSize: 20,
  },
  other: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  ayat: {
    fontFamily: "bnFont",
    color: colors.light,
  },
  place: {
    fontFamily: "bnFont",
    color: colors.light,
  },
});
