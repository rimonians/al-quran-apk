import React from "react";
import { View } from "react-native";
import globalStyles from "../styles/globalStyles";
import Header from "../components/Header";
import Search from "../components/Search";
import SuraList from "../components/SuraList";

const Home = () => {
  return (
    <View style={globalStyles.container}>
      <Header />
      <Search />
      <SuraList />
    </View>
  );
};

export default Home;
