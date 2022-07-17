import {Fighter} from '../../interfaces/FightersApiInterfaces';
import {FiltersState} from '../fighters/interfaces';

export function getResultAfterFiltersApplied(
  list: Fighter[],
  filters: FiltersState,
): Fighter[] {
  // copy to avoid mutation
  let result = [...list];

  console.log('APLYING FILTERES');

  if (filters.selectedSortKeyName) {
    result.sort((a: Fighter, b: Fighter) => {
      switch (filters.selectedSortKeyName) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          return Number(a.price) - Number(b.price);
        case 'rate':
          return a.rate - b.rate;
        case 'downloads':
          return Number(a.downloads) - Number(b.downloads);
        default:
          return 0;
      }
    });
  }

  if (filters.selectedStarId && !isNaN(Number(filters.selectedStarId))) {
    let starId = Number(filters.selectedStarId);
    result = result.filter(fighter => fighter.rate === starId);
  }

  return result;
}
