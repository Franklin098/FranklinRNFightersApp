import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ItemSeparator() {
  return <View style={styles.separatorView} />;
}

const styles = StyleSheet.create({
  separatorView: {
    flex: 1,
    borderBottomWidth: 1,
    opacity: 0.1,
  },
});
