import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '../navigation/StackNavigator';
import {Fighter} from '../interfaces/FightersApiInterfaces';
import {FadeInImage} from '../components/FadeInImage';
import StarsSelector from '../components/StarsSelector';
import globalColors from '../theme/globalColors';
import {Platform} from 'react-native';

interface Props {}

export default function FighterScreen() {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();
  const {params} = useRoute<RouteProp<RootStackParams, 'FighterScreen'>>();
  const {fighter} = params;

  const setUpNavigationBar = () => {
    navigation.setOptions({
      headerTitle: fighter.name,
    });
  };

  useEffect(() => {
    setUpNavigationBar();
  }, []);

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <View style={styles.topLeftContainer}>
          <Text style={styles.bigName}>{fighter.name}</Text>
          <Text style={styles.universe}>{fighter.universe}</Text>
          <View style={{flex: 1}}>
            <StarsSelector
              rightIconMargin={5}
              containerStyle={styles.starsContainer}
              iconSize={25}
              maxStarsNumber={5}
              selectedStarId={fighter.rate.toString()}
            />
          </View>
          <View style={{flex: 2}}>
            <Text
              style={
                styles.downloads
              }>{`Downloads: ${fighter.downloads}`}</Text>
            <TouchableOpacity style={styles.priceButton}>
              <Text style={styles.priceLabel}>{`$${fighter.price}`}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.topRightContainer}>
          <View style={styles.imageContainer}>
            <FadeInImage style={styles.image} uri={fighter.imageURL} />
          </View>
        </View>
      </View>
      <View
        style={{
          ...styles.bottomContainer,
          ...(Platform.OS === 'android' ? styles.androidBottomContainer : {}),
        }}>
        <View style={{flex: 1}}>
          <Text style={styles.description}>{fighter.description}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  topContainer: {
    minHeight: '40%',
    flex: 1,
    flexDirection: 'row',
  },
  bottomContainer: {
    flex: 1,
  },
  androidBottomContainer: {
    minHeight: 600,
  },
  topLeftContainer: {
    flex: 1,
    paddingLeft: 15,
  },
  topRightContainer: {
    flex: 1,
    paddingRight: 5,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  bigName: {
    marginTop: 35,
    fontWeight: 'bold',
    fontSize: 25,
  },
  universe: {
    marginTop: 5,
    fontSize: 18,
  },
  starsContainer: {
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },
  downloads: {
    marginTop: 8,
    fontSize: 17,
    color: globalColors.lightGray,
  },
  description: {
    marginHorizontal: 15,
    fontSize: 16,
    lineHeight: 33,
  },
  priceButton: {
    alignSelf: 'flex-start',
    marginTop: 8,
    paddingHorizontal: 12,
    paddingVertical: 5,
    backgroundColor: globalColors.primaryBlue,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  priceLabel: {
    fontWeight: 'bold',
    fontSize: 20,
    color: globalColors.white,
  },
});
