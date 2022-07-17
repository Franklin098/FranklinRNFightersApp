import {StyleSheet, Platform} from 'react-native';
import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import globalColors from '../theme/globalColors';
import FiltersScreen from '../screens/FiltersScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

export type RootStackParams = {
  HomeScreen: undefined;
  FiltersScreen: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export default function StackNavigator() {
  const isIOS = Platform.OS === 'ios';
  const headerStyles = isIOS ? iosStyles : androidStyles;
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: headerStyles.headerStyle,
        headerLeftContainerStyle: headerStyles.headerLeftContainerStyle,
        headerTitleContainerStyle: headerStyles.headerTitleContainerStyle,
        headerTitleStyle: headerStyles.headerTitle,
        title: 'Fighters',
        headerLeftLabelVisible: false,
        headerTintColor: isIOS ? globalColors.primaryBlue : globalColors.white,
        headerRight: () => (
          <Icon
            size={25}
            color={isIOS ? globalColors.lightGray : globalColors.white}
            name="filter-outline"
            onPress={() => navigation.navigate('FiltersScreen')}
          />
        ),
        headerRightContainerStyle: headerStyles.headerRightContainerStyle,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen
        name="FiltersScreen"
        options={{
          headerTitle: 'Filters',
          headerRight: () => <></>,
        }}
        component={FiltersScreen}
      />
    </Stack.Navigator>
  );
}

const androidStyles = StyleSheet.create({
  headerStyle: {
    backgroundColor: globalColors.primaryBlue,
  },
  headerLeftContainerStyle: {},
  headerTitleContainerStyle: {},
  headerTitle: {
    color: globalColors.white,
  },
  headerRightContainerStyle: {
    paddingRight: 10,
  },
});

const iosStyles = StyleSheet.create({
  headerStyle: {
    height: 130,
    backgroundColor: globalColors.white,
  },
  headerLeftContainerStyle: {
    alignSelf: 'flex-start',
  },
  headerTitleContainerStyle: {
    alignSelf: 'flex-end',
    left: 5,
    position: 'absolute',
  },
  headerTitle: {
    color: globalColors.black,
    fontWeight: '700',
    fontSize: 25,
    marginBottom: 7,
  },
  headerRightContainerStyle: {
    paddingTop: 10,
    paddingRight: 10,
    alignSelf: 'flex-start',
  },
});
