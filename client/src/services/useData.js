import { useEffect, useState, useCallback } from "react";

const useData = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [hasError, setError] = useState(false);

  const refresh = useCallback(async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw Error(`Error: ${response.status}: ${response.statusText}`);
      }
      const reponseData = await response.json();
      setData(reponseData);
    } catch (ex) {
      setError(`There was an error requesting data from API`);
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return {
    isLoading,
    hasError,
    data,
    refresh,
  };
};

export default useData;
