import { useState, useEffect } from "react";

export const API_KEY = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

export const useFetch = urlParams => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });

  const fetchMovies = async url => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.Response === "True") {
        setData(data.Search || data);
        setError({ show: false, msg: "" });
      } else {
        setError({ show: true, msg: data.Error });
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies(`${API_KEY}${urlParams}`);
  }, [urlParams]);

  return { data, loading, error };
};
