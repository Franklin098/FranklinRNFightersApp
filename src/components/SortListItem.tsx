import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import React from 'react';
import {SortItem} from '../interfaces/CustomComponents';
import Icon from 'react-native-vector-icons/Ionicons';
import globalColors from '../theme/globalColors';

interface Props {
  label: string;
  selected: boolean;
  style?: StyleProp<ViewStyle>;
}

export default function SortListItem({label, selected, style = {}}: Props) {
  return (
    <View style={{...(style as any), ...styles.container}}>
      <Text style={styles.label}>{label}</Text>
      {selected ? (
        <Icon
          style={styles.selectedIcon}
          name="checkmark-circle"
          size={25}
          color={globalColors.primaryBlue}
        />
      ) : (
        <Icon
          style={styles.unselectedIcon}
          name="ellipse-outline"
          size={25}
          color={globalColors.lightGray}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: 20,
    paddingVertical: 15,
    alignItems: 'center',
    backgroundColor: globalColors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 17,
    textAlignVertical: 'center',
  },
  unselectedIcon: {
    alignSelf: 'flex-end',
    marginVertical: 0,
  },
  selectedIcon: {
    alignSelf: 'flex-end',
    marginVertical: 0,
  },
});
