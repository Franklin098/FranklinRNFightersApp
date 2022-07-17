import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function FiltersScreen() {
  const navigation = useNavigation();

  return (
    <View>
      <Text>FiltersScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
