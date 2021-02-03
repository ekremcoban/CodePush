import React, { useEffect, useRef } from 'react';
import {
  AppState,
  StyleSheet,
  Text,
} from 'react-native';

import CodePush from "react-native-code-push";

let App = () => {

  useEffect(()  => {
    CodePush.sync();
  }, [])

  return (
    <>
      <Text style={styles.welcome}>
        Welcome to CodePush 28!
  </Text>
    </>

  )
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 120
  },
});

let codePushOptions = { checkFrequency: CodePush.CheckFrequency.ON_APP_START };

App = CodePush(codePushOptions)(App);

export default App;