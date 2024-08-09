import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": 'd27fe37538msh74c2686a9fed792p116c44jsn90d75e53c6df',
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: { ...query },
  };

  const fetchData = async (retries = 5, delay = 1000) => {
    setIsLoading(true);
    
    try {
      const response = await axios.request(options);
      setData(response.data.data);
      setIsLoading(false);
    } catch (err) {
      if (err.response && err.response.status === 429) {
        if (retries > 0) {
          // Retry after exponential backoff
          setTimeout(() => fetchData(retries - 1, delay * 2), delay);
        } else {
          console.error("Rate limit exceeded. Please wait and try again later.");
          setError("Rate limit exceeded. Please wait and try again later.");
          setIsLoading(false);
        }
      } else {
        console.error("Fetch error:", err);
        setError("An error occurred. Please try again.");
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
