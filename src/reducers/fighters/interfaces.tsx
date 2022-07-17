import {Fighter} from '../../interfaces/FightersApiInterfaces';

// Interfaces

export interface FightersState {
  visibleList: Fighter[];
  completeList: Fighter[];
  selectedUniverse: string;
  isLoading: boolean;
  isFailure: boolean;
  filters: FiltersState;
}

export interface SuccessPayload {
  list: Fighter[];
}

export interface FiltersState {
  selectedSortKeyName: string;
  selectedStarId: string;
}
