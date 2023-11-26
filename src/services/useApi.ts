// useApi.js
import { useState, useEffect } from "react";
import axios from "axios";

type ApiResponse<T> = {
  data: T | null;
  loading: boolean;
  error: Error | null;
};

const useApi = <T>(url: string): ApiResponse<T> => {
  console.log("url", url);
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<T>(url);
        setData(response.data);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useApi;
