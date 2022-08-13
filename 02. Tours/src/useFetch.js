import { useState, useEffect } from "react";

export const useFetch = url => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const getTours = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTours(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };
  useEffect(() => {
    getTours();
  }, []);

  return { loading, tours, setTours, getTours };
};
