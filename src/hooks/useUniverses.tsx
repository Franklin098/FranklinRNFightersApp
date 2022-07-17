import {useEffect, useState} from 'react';
import {Universe} from '../interfaces/FightersApiInterfaces';
import {fightersApi} from '../api/fightersApi';

export default function useUniverses() {
  const [isLoading, setIsLoading] = useState(true);
  const [universeList, setUniverseList] = useState<Universe[]>([]);

  const callUniverseApi = async () => {
    setIsLoading(true);
    try {
      const resp = await fightersApi.get<Universe[]>('/universes');
      setUniverseList(resp.data);
    } catch (error) {
      console.log('Error calling /universe API', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    callUniverseApi();
  }, []);

  return {
    isLoading,
    universeList,
  };
}
