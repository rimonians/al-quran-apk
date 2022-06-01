import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import * as Clipboard from "expo-clipboard";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../styles/globalStyles";
import numbering from "../utils/numbering";

const SuraDetails = ({ sura }) => {
  const [filter, setFilter] = useState("all");

  const copyToClipboard = async (data) => {
    const finalData = {
      suraNo: sura.suraNo,
      ar: sura.ar,
      en: sura.en,
      bn: sura.bn,
      place: sura.place,
      ...data,
    };
    const text = `${finalData.arabic}\n\n${finalData.english}\n\n${
      finalData.bangla
    }\n\nসোর্স - ${finalData.ar}/${finalData.en}/${
      finalData.bn
    } - সূরা নং ${numbering(finalData.suraNo)} আয়াত নং ${numbering(
      finalData.ayatNo
    )}`;
    await Clipboard.setStringAsync(text);
    Alert.alert("বার্তা", "সফলভাবে কপি করা হয়েছে", [{ text: "ঠিক আছে" }]);
  };

  return (
    <View style={styles.details}>
      {/* Filter ayats */}
      <View style={styles.filterContainer}>
        <TouchableOpacity onPress={() => setFilter("all")}>
          <Text
            style={[
              styles.filterButton,
              filter === "all" && styles.filterButtonActive,
            ]}
          >
            সব
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFilter("ar")}>
          <Text
            style={[
              styles.filterButton,
              filter === "ar" && styles.filterButtonActive,
            ]}
          >
            আরবি
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFilter("en")}>
          <Text
            style={[
              styles.filterButton,
              filter === "en" && styles.filterButtonActive,
            ]}
          >
            ইংরেজী
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFilter("bn")}>
          <Text
            style={[
              styles.filterButton,
              filter === "bn" && styles.filterButtonActive,
            ]}
          >
            বাংলা
          </Text>
        </TouchableOpacity>
      </View>
      {/* Ayats */}
      <FlatList
        data={sura.ayats}
        renderItem={({ item }) => (
          <View style={styles.ayat}>
            <View style={styles.head}>
              <Text style={styles.no}>{numbering(item.ayatNo)}</Text>
              <TouchableOpacity onPress={() => copyToClipboard(item)}>
                <Ionicons style={styles.bookmark} name="copy-outline" />
              </TouchableOpacity>
            </View>
            <View style={styles.body}>
              {(filter === "all" || filter === "ar") && (
                <Text style={styles.ar}>{item.arabic}</Text>
              )}
              {(filter === "all" || filter === "en") && (
                <Text style={styles.en}>{item.english}</Text>
              )}
              {(filter === "all" || filter === "bn") && (
                <Text style={styles.bn}>{item.bangla}</Text>
              )}
            </View>
          </View>
        )}
        keyExtractor={(item) => item.ayatNo}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default SuraDetails;

const styles = StyleSheet.create({
  details: {
    flex: 1,
  },
  filterContainer: {
    marginBottom: 15,
    flexDirection: "row",
  },
  filterButton: {
    backgroundColor: colors.light,
    paddingVertical: 2,
    paddingHorizontal: 10,
    marginRight: 10,
    fontFamily: "bnFont",
    borderRadius: 5,
  },
  filterButtonActive: {
    backgroundColor: colors.primary,
    color: colors.light,
  },
  ayat: {
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: colors.light,
    elevation: 2,
    shadowColor: colors.gray,
  },
  head: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  no: {
    fontFamily: "bnFont",
    color: colors.primary,
    fontSize: 20,
  },
  bookmark: {
    fontSize: 20,
    color: colors.gray,
  },
  ar: {
    fontWeight: "bold",
    color: colors.dark,
  },
  en: {
    fontFamily: "enFont",
    color: colors.dark,
    marginVertical: 10,
    textAlign: "justify",
  },
  bn: {
    fontFamily: "bnFont",
    color: colors.dark,
    textAlign: "justify",
  },
});
