import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import sortItemsInitialState from '../constants/SortItemsInit';
import SortListItem from '../components/SortListItem';
import ItemSeparator from '../components/ItemSeparator';
import globalColors from '../theme/globalColors';
import {TouchableOpacity} from 'react-native-gesture-handler';
import StarsSelector from '../components/StarsSelector';
import {SortItem} from '../interfaces/CustomComponents';
import {useAppSelector, useAppDisptatch} from '../reducers/hooks';
import {filtersChanged} from '../reducers/fighters/fighters';
import {FiltersState} from '../reducers/fighters/interfaces';

export default function FiltersScreen() {
  // Reducer - global - store state
  const {filters} = useAppSelector(state => state.fighters);
  const dispatch = useAppDisptatch();

  // UI Internal State
  const [selectedSortKeyName, setSelectedSortedKey] = useState<string>('');
  const [selectedStarId, setSelectedStarId] = useState<string>('');
  const filtersRef = useRef<FiltersState>(filters);

  const handleSortOptionPressed = (sortItem: SortItem) => {
    //UnSelect
    if (selectedSortKeyName === sortItem.keyName) {
      setSelectedSortedKey('');
    } else {
      // Select
      setSelectedSortedKey(sortItem.keyName);
    }
  };

  useEffect(() => {
    // FistTime it renders
    setSelectedSortedKey(filters.selectedSortKeyName);
    setSelectedStarId(filters.selectedStarId);
    return () => {
      //Unmount, apply filters
      console.log('UNMOUNT FiltersView :', filtersRef.current);
      dispatch(filtersChanged(filtersRef.current));
    };
  }, []);

  useEffect(() => {
    console.log('Updating Ref');
    filtersRef.current = {selectedSortKeyName, selectedStarId};
  }, [selectedSortKeyName, selectedStarId]);

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>SORT BY</Text>
      {/* Sort By Filters */}
      <View style={styles.sortFilters}>
        <FlatList
          contentContainerStyle={styles.sortFiltersContainer}
          data={sortItemsInitialState}
          keyExtractor={item => item.keyName}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => handleSortOptionPressed(item)}>
              <SortListItem
                label={item.label}
                selected={selectedSortKeyName === item.keyName}
              />
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={() => <ItemSeparator />}
        />
      </View>

      <Text style={styles.sectionTitle}>FILTER BY</Text>
      {/* Stars Selector */}
      <StarsSelector
        iconSize={35}
        containerStyle={styles.starsSelector}
        maxStarsNumber={5}
        selectedStarId={selectedStarId}
        onStarSelected={starId => {
          setSelectedStarId(starId);
        }}
        onStarUnselected={unseletedStarId => {
          setSelectedStarId('');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  sortFilters: {
    backgroundColor: globalColors.white,
    marginBottom: 30,
  },
  sortFiltersContainer: {
    marginLeft: 20,
  },
  sectionTitle: {
    marginLeft: 20,
    marginBottom: 10,
    fontSize: 12,
    color: globalColors.lightGray,
  },
  starsSelector: {
    height: 80,
    backgroundColor: globalColors.white,
  },
});
