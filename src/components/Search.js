import React, { useState } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../styles/globalStyles";
import { useDispatch } from "react-redux";
import { searchSura } from "../redux/sura/suraActions";

const Search = () => {
  const dispatch = useDispatch();

  const [inputVal, setInputVal] = useState("");

  const handleChange = (val) => {
    setInputVal(val);
  };

  const handleSearch = () => {
    dispatch(searchSura(inputVal));
    setInputVal("");
  };

  return (
    <View style={styles.search}>
      <View style={styles.searchControll}>
        <Ionicons style={styles.searchIcon} name="search" />
        <TextInput
          style={styles.searchInput}
          placeholder="নাম বা নাম্বার দিয়ে সূরা খুঁজুন "
          autoCorrect={false}
          onChangeText={handleChange}
          defaultValue={inputVal}
        />
      </View>
      <TouchableOpacity onPress={handleSearch}>
        <Ionicons style={styles.searchButton} name="ios-search-circle" />
      </TouchableOpacity>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  search: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 15,
  },
  searchControll: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 10,
    backgroundColor: colors.light,
    elevation: 2,
    shadowColor: colors.gray,
  },
  searchIcon: {
    fontSize: 20,
    color: colors.gray,
  },
  searchInput: {
    padding: 10,
    marginRight: 10,
    color: colors.gray,
    fontFamily: "bnFont",
  },
  searchButton: {
    fontSize: 28,
    backgroundColor: colors.primary,
    color: colors.light,
    padding: 10,
    borderRadius: 5,
    elevation: 2,
    shadowColor: colors.gray,
  },
});
