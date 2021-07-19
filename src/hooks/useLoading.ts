import { useCallback, useState } from 'react';

function useLoading(): [number, () => void, () => void] {
  const [loading, setLoading] = useState<number>(0);

  const startLoad = useCallback(() => {
    setLoading((loading) => loading + 1);
  }, []);

  const endLoad = useCallback(() => {
    setLoading((loading) => (loading === 0 ? 0 : loading - 1));
  }, []);

  return [loading, startLoad, endLoad];
}

export default useLoading;
