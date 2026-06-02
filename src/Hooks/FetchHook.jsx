import { useState, useEffect } from "react";
import axios from "axios";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true; // cleanup flag

    async function fetchData() {
      try {
        const response = await axios.get(url);
        if (isMounted) {
          setData(response.data);
          setError(null);
        }
      } catch (err) {
        if (isMounted) setError(err.message);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchData();

    return () => {
      isMounted = false; // cleanup
    };
  }, [url]);

  return { data, loading, error };
}
