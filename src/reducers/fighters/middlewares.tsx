import {fightersApi} from '../../api/fightersApi';
import {Fighter} from '../../interfaces/FightersApiInterfaces';
import {AppDispatch} from '../store';
import {
  fetchFightersFailed,
  fetchFightersStarted,
  fetchFightersSuccess,
} from './fighters';

// Middleware
export function callFightersAPI() {
  return async (dispatch: AppDispatch) => {
    try {
      console.log('Calling fighters API from middleware');
      dispatch(fetchFightersStarted());
      const resp = await fightersApi.get<Fighter[]>('/fighters');
      dispatch(fetchFightersSuccess({list: resp.data}));
    } catch (error) {
      console.log('Error calling /fighters API', error);
      dispatch(fetchFightersFailed());
    }
  };
}
