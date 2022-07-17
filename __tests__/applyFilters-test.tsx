import {Fighter} from '../src/interfaces/FightersApiInterfaces';
import {FiltersState} from '../src/reducers/fighters/interfaces';
import {getResultAfterFiltersApplied} from '../src/reducers/helpers/applyFilters';
import {fightersList} from '../mocks/fightersList';

describe('getResultAfterFiltersApplied()', () => {
  it('should sort by Name in ascendingOrder', () => {
    // Arrange
    let filters: FiltersState = {
      selectedSortKeyName: 'name',
      selectedStarId: '',
    };
    let inputFighters: Fighter[] = fightersList;
    let expectedOutput = fightersList.sort((a, b) =>
      a.name.localeCompare(b.name),
    );
    // Act
    let result = getResultAfterFiltersApplied(inputFighters, filters);
    // Assert
    expect(result).toEqual(expectedOutput);
  });

  it('should sort by Downloads in ascendingOrder', () => {
    // Arrange
    let filters: FiltersState = {
      selectedSortKeyName: 'downloads',
      selectedStarId: '',
    };
    let inputFighters: Fighter[] = fightersList;
    let expectedOutput = fightersList.sort(
      (a, b) => Number(a.downloads) - Number(b.downloads),
    );
    // Act
    let result = getResultAfterFiltersApplied(inputFighters, filters);
    // Assert
    expect(result).toEqual(expectedOutput);
  });

  it('should get Stars only with Rate 1', () => {
    // Arrange
    let rate = 1;
    let filters: FiltersState = {
      selectedSortKeyName: '',
      selectedStarId: `${rate}`,
    };
    let inputFighters: Fighter[] = fightersList;

    // Act
    let result = getResultAfterFiltersApplied(inputFighters, filters);
    // Assert
    for (let fighter of result) {
      expect(fighter.rate).toBe(rate);
    }
  });

  it('should get Stars only with Rate 5', () => {
    // Arrange
    let rate = 5;
    let filters: FiltersState = {
      selectedSortKeyName: '',
      selectedStarId: `${rate}`,
    };
    let inputFighters: Fighter[] = fightersList;

    // Act
    let result = getResultAfterFiltersApplied(inputFighters, filters);
    // Assert
    for (let fighter of result) {
      expect(fighter.rate).toBe(rate);
    }
  });

  it('should sort by Name in ascendingOrder and all the results have Rate equals 3', () => {
    // Arrange
    let expectedRate = 3;
    let filters: FiltersState = {
      selectedSortKeyName: 'name',
      selectedStarId: `${3}`,
    };
    let inputFighters: Fighter[] = fightersList;
    let expectedOutput = fightersList.sort((a, b) =>
      a.name.localeCompare(b.name),
    );
    expectedOutput = expectedOutput.filter(a => a.rate === expectedRate);
    // Act
    let result = getResultAfterFiltersApplied(inputFighters, filters);
    // Assert
    expect(result).toEqual(expectedOutput);
  });
});
