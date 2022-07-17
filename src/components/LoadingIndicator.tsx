import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {globalStyles} from '../theme/globalStyles';

export default function LoadingIndicator() {
  return (
    <View
      style={{
        ...styles.loadingContainer,
        ...globalStyles.horizontalMargin,
      }}>
      <ActivityIndicator size={50} />
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
