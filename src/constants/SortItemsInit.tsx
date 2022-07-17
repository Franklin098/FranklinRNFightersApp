import {SortItem} from '../interfaces/CustomComponents';

const sortItemsInitialState: SortItem[] = [
  {
    label: 'Name',
    keyName: 'name',
    isSelected: false,
  },
  {
    label: 'Price',
    keyName: 'price',
    isSelected: false,
  },
  {
    label: 'Rate',
    keyName: 'rate',
    isSelected: false,
  },
  {
    label: 'Downloads',
    keyName: 'downloads',
    isSelected: false,
  },
];

export default sortItemsInitialState;
