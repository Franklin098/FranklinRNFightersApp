import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  Image,
} from 'react-native';
import React, {useEffect} from 'react';
import {Fighter} from '../interfaces/FightersApiInterfaces';
import {globalStyles} from '../theme/globalStyles';
import {FadeInImage} from './FadeInImage';
import globalColors from '../theme/globalColors';

interface Props {
  fighter: Fighter;
  style?: StyleProp<ViewStyle>;
  index: any;
}

export default function FighterCard({fighter, index, style = {}}: Props) {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <TouchableOpacity
      style={{
        ...globalStyles.horizontalMargin,
        ...styles.mainContainer,
        ...(style as any),
      }}>
      <View style={styles.imageContainer}>
        <FadeInImage style={styles.image} uri={fighter.imageURL} />
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.title}>{fighter.name}</Text>
        <Text style={styles.universeName}>{fighter.universe}</Text>
      </View>

      <View style={styles.dataContainer}>
        <Text style={styles.dataText}>{`Price: $${fighter.price}`}</Text>
        <Text style={styles.dataText}>{`Rate: ${fighter.rate}`}</Text>
        <Text style={styles.dataText}>{`Downloads: ${fighter.downloads}`}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 10,
    paddingLeft: 8,
    paddingRight: 10,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  nameContainer: {
    flex: 2,
    paddingLeft: 20,
    justifyContent: 'center',
  },
  dataContainer: {
    flex: 2,
    justifyContent: 'center',
    alignContent: 'flex-end',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  universeName: {
    color: 'grey',
    marginTop: 3,
  },
  dataText: {
    color: 'grey',
    marginTop: 3,
    textAlign: 'right',
  },
});
