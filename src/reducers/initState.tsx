import {FightersState, FiltersState} from './fighters/interfaces';

export const fightersInitialState: FightersState = {
  visibleList: [],
  completeList: [],
  selectedUniverse: 'All',
  isLoading: true,
  isFailure: false,
  filters: {
    selectedSortKeyName: '',
    selectedStarId: '',
  },
};
