import React from "react";
import { StyleSheet, View } from "react-native";
import globalStyles from "../styles/globalStyles";
import Header from "../components/Header";
import SuraInfo from "../components/SuraInfo";
import SuraDetails from "../components/SuraDetails";

const Preview = ({ route }) => {
  const sura = route.params.item;
  return (
    <View style={globalStyles.container}>
      <Header />
      <SuraInfo sura={sura} />
      <SuraDetails sura={sura} />
    </View>
  );
};

export default Preview;

const styles = StyleSheet.create({});
