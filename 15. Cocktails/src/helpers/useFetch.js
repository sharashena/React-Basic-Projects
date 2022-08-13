import { useState, useEffect, useCallback } from "react";
import { base } from "./axios";

export const useFetch = url => {
  const [search, setSearch] = useState("a");
  const [loading, setLoading] = useState(true);
  const [cocktails, setCocktails] = useState([]);

  const fetchDrinks = useCallback(async () => {
    try {
      const { data } = await base(`${url}${search}`);
      const { drinks } = data;
      if (drinks) {
        const newCocktails = drinks.map(drink => {
          const {
            idDrink: id,
            strDrink: name,
            strDrinkThumb: img,
            strAlcoholic: alcohol,
            strGlass: glass,
          } = drink;
          return { id, name, img, alcohol, glass };
        });
        setCocktails(newCocktails);
      } else {
        setCocktails([]);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, [url, search]);

  useEffect(() => {
    fetchDrinks();
  }, [search, fetchDrinks]);
  return { loading, cocktails, setSearch };
};
