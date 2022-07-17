import {useEffect, useState} from 'react';
import {Fighter} from '../interfaces/FightersApiInterfaces';
import {fightersApi} from '../api/fightersApi';

export default function useFighters() {
  const [isLoading, setIsLoading] = useState(true);
  const [fighterList, setFighterList] = useState<Fighter[]>([]);

  const callFightersApi = async () => {
    console.log('callFighteresAPI');

    setIsLoading(true);
    try {
      const resp = await fightersApi.get<Fighter[]>('/fighters');
      setFighterList(resp.data);
    } catch (error) {
      console.log('Error calling /fighters API', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    callFightersApi();
  }, []);

  return {
    isLoading,
    fighterList,
  };
}
