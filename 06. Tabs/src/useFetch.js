import { useState, useEffect, useCallback } from "react";

export const useFetch = url => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

  const getJobs = useCallback(async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setJobs(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  }, [url]);

  useEffect(() => {
    getJobs();
  }, [url, getJobs]);

  return { jobs, loading };
};
