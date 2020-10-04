import React from 'react';
import { StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview';

export default function App() {
  return (<WebView style={styles.container} source={{ uri: 'https://www.purposegames.com/' }} />);
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  }
})