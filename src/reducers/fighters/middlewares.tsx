import {fightersApi} from '../../api/fightersApi';
import {Fighter} from '../../interfaces/FightersApiInterfaces';
import {AppDispatch} from '../store';
import {
  fetchFightersFailed,
  fetchFightersStarted,
  fetchFightersSuccess,
} from './fighters';

// Middleware
export function callFightersAPI(universe: string) {
  return async (dispatch: AppDispatch) => {
    try {
      console.log('Calling fighters API from middleware');
      dispatch(fetchFightersStarted());
      const params = universe == 'All' ? {} : {universe};
      const resp = await fightersApi.get<Fighter[]>('/fighters', {
        params,
      });
      // filter unvalid items with objectId equals "NaN"
      const unfilteredFighterList = resp.data;
      const figherList = unfilteredFighterList.filter(fighter =>fighter.objectID != "NaN");
      // dispatch sucess action
      dispatch(fetchFightersSuccess({list: figherList}));
    } catch (error) {
      console.log('Error calling /fighters API', error);
      dispatch(fetchFightersFailed());
    }
  };
}
