// ScreenWrapper.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Navbar from './Navbar';

const ScreenWrapper = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
      <Navbar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ScreenWrapper;
