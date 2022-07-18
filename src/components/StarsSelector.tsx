import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
  FlatList,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import globalColors from '../theme/globalColors';

interface Props {
  containerStyle?: StyleProp<ViewStyle>;
  maxStarsNumber: number;
  onStarSelected?: (starId: string) => void;
  onStarUnselected?: (unselectedStarId: string) => void;
  selectedStarId: string;
  staticBehaviour?: boolean;
  iconSize: number;
  rightIconMargin?: number;
}
interface Star {
  id: string;
}

function createStarsArray(maxNumber: number): Star[] {
  let array: Star[] = [];
  for (let i = 1; i <= maxNumber; i++) {
    array.push({id: `${i}`});
  }
  return array;
}

export default function StarsSelector({
  containerStyle = {},
  maxStarsNumber,
  onStarSelected = () => {},
  onStarUnselected = () => {},
  selectedStarId,
  iconSize,
  rightIconMargin: iconMargin = iconSize / 2,
  staticBehaviour = false,
}: Props) {
  const [starsList, setStarsList] = useState<Star[]>([]);

  useEffect(() => {
    console.log('mounting StarsSelector');
    let stars = createStarsArray(maxStarsNumber);
    setStarsList(stars);
  }, []);

  const handleStarPressed = (star: Star) => {
    if (selectedStarId === star.id) {
      // Unselect
      // callBack for the client
      onStarUnselected(star.id);
      // internal state
    } else {
      // Select
      // callBack for the client
      onStarSelected(star.id);
      // internal state
    }
  };

  return (
    <FlatList
      contentContainerStyle={{
        ...styles.starsListContainer,
        ...(containerStyle as any),
      }}
      horizontal
      data={starsList}
      keyExtractor={item => `${item.id}`}
      renderItem={({item}) => (
        <TouchableOpacity
          disabled={staticBehaviour}
          onPress={() => handleStarPressed(item)}
          activeOpacity={0.9}>
          <Icon
            name="star"
            size={iconSize}
            style={{marginRight: iconMargin}}
            color={
              item.id !== '' && item.id <= selectedStarId
                ? globalColors.yellow
                : globalColors.lightGray
            }
          />
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  starsListContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
