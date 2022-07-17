import {StyleSheet, Text, View, StyleProp, ViewStyle} from 'react-native';
import React from 'react';

interface Props {
  style?: StyleProp<ViewStyle>;
}

export default function ItemSeparator({style = {}}: Props) {
  return <View style={{...styles.separatorView, ...(style as any)}} />;
}

const styles = StyleSheet.create({
  separatorView: {
    flex: 1,
    borderBottomWidth: 1,
    opacity: 0.1,
  },
});
