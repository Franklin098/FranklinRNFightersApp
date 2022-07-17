import {createAction, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fightersInitialState} from '../initState';
import {FiltersState, SuccessPayload} from './interfaces';
import {getResultAfterFiltersApplied} from '../helpers/applyFilters';

export const universeSelected = createAction('universeFilterSelected');
export const universeUnSelected = createAction('universeFilterUnselected');

// Reducer
const fightersSlice = createSlice({
  name: 'fighters',
  initialState: fightersInitialState,
  reducers: {
    // actionType:  ( state, actionCreator ) => { ... reducer }

    fetchFightersStarted: fighters => {
      // can write muttable code since reduxToolkit implements immer
      fighters.isLoading = true;
      fighters.isFailure = false;
    },
    fetchFightersFailed: fighters => {
      fighters.isLoading = false;
      fighters.isFailure = true;
    },
    fetchFightersSuccess: (fighters, action: PayloadAction<SuccessPayload>) => {
      fighters.isLoading = false;
      fighters.isFailure = false;
      fighters.completeList = action.payload.list;
      fighters.visibleList = [...action.payload.list];
    },
    filtersChanged: (fighters, action: PayloadAction<FiltersState>) => {
      // apply filters to visible list
      fighters.visibleList = getResultAfterFiltersApplied(
        fighters.completeList,
        action.payload,
      );
      // update current filters
      fighters.filters = action.payload;
    },
  },
});

// export Reducer
export default fightersSlice.reducer;

// export Actions
export const {
  fetchFightersSuccess,
  fetchFightersFailed,
  fetchFightersStarted,
  filtersChanged,
} = fightersSlice.actions;
