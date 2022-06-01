import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { colors } from "./src/styles/globalStyles";
import Main from "./src/components/Main";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={store}>
        <NavigationContainer>
          <StatusBar backgroundColor={colors.primary} style="auto" />
          <Main />
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
};

export default App;
