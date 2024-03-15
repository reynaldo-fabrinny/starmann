import axios from "axios";
import { useState, useEffect } from "react";

const FETCH_LAUNCH_URL = "https://api.spacexdata.com/v4/launches/";


const useFindLaunchByID = (id) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [loaded, setLoaded] = useState(false);
  
    useEffect(() => {
      axios
        .get(`${FETCH_LAUNCH_URL}${id}`)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => setError(error.message))
        .finally(() => setLoaded(true));
    }, []);
  
    return { data, error, loaded };
  };