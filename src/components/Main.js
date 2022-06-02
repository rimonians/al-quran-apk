import React, { useState, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { useDispatch, useSelector } from "react-redux";
import fetchSuraInitiate from "../redux/sura/suraActions";
import HomeStack from "../navigations/HomeStack";

const Main = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.sura);

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    dispatch(fetchSuraInitiate());
  }, [dispatch]);

  useEffect(() => {
    prepare();
  }, []);

  useEffect(() => {
    if (appIsReady) {
      if (!loading && !error) {
        hide();
      }
    }
  }, [appIsReady, loading]);

  const prepare = async () => {
    try {
      await SplashScreen.preventAutoHideAsync();
      await Font.loadAsync({
        enFont: require("../assets/fonts/ConcertOne.ttf"),
        bnFont: require("../assets/fonts/Ador-SemiBold.ttf"),
      });
    } catch (err) {
      console.warn(err);
    } finally {
      setAppIsReady(true);
    }
  };

  const hide = async () => {
    await SplashScreen.hideAsync();
  };

  if (!appIsReady) {
    return null;
  }

  return <HomeStack />;
};

export default Main;
