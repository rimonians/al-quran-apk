import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import globalStyles, { colors } from "../styles/globalStyles";
import SuraItem from "./SuraItem";
import { FontAwesome5 } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { filterSura } from "../redux/sura/suraActions";
import numbering from "../utils/numbering";

const SuraList = () => {
  const { filteredData, filterType } = useSelector((state) => state.sura);
  const dispatch = useDispatch();

  return (
    <View style={styles.suraList}>
      <View style={styles.suraHeader}>
        <Text style={[globalStyles.subHeading, { fontFamily: "bnFont" }]}>
          {filterType === "all" ? "সর্বোমোট" : filterType} সূরা (
          {numbering(filteredData.length)})
        </Text>
        <View style={styles.suraFilter}>
          <TouchableOpacity onPress={() => dispatch(filterSura("all"))}>
            <FontAwesome5
              style={{
                ...styles.suraFilterIcon,
                color: filterType === "all" ? colors.primary : colors.gray,
              }}
              name="border-all"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => dispatch(filterSura("মাক্কী"))}>
            <FontAwesome5
              style={{
                ...styles.suraFilterIcon,
                color: filterType === "মাক্কী" ? colors.primary : colors.gray,
              }}
              name="kaaba"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => dispatch(filterSura("মাদানী"))}>
            <FontAwesome5
              style={{
                ...styles.suraFilterIcon,
                color: filterType === "মাদানী" ? colors.primary : colors.gray,
              }}
              name="mosque"
            />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={filteredData}
        renderItem={({ item }) => <SuraItem item={item} />}
        keyExtractor={(item) => item.suraNo}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default SuraList;

const styles = StyleSheet.create({
  suraList: {
    flex: 1,
  },
  suraHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  suraFilter: {
    flexDirection: "row",
    alignItems: "center",
  },
  suraFilterIcon: {
    color: colors.gray,
    fontSize: 20,
    marginLeft: 20,
  },
});
