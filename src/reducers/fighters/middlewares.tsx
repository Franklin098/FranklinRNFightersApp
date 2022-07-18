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
      dispatch(fetchFightersSuccess({list: resp.data}));
    } catch (error) {
      console.log('Error calling /fighters API', error);
      dispatch(fetchFightersFailed());
    }
  };
}
