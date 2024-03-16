import { useEffect, useState} from 'react';
import axios from 'axios';

const LAUNCHES_URL = "https://api.spacexdata.com/v5/launches/query";

const useLoadPastLaunches = ({quantity}: { quantity: number }) => {
  const [data, setData] = useState({});
  const [loadingPastLaunches, setLoadingPastLaunches] = useState(true);

  const body = { options: { limit: quantity, sort: { date_utc: -1 } } };

  useEffect(() => {
    const fetchPastLaunches = async () => {
      try {
        const { data: response } = await axios.post(LAUNCHES_URL, body);
        setData(response);
      } catch (error) {
        console.error("Error trying to fetch past launches: ", error);
      }
      setLoadingPastLaunches(false);
    };

    fetchPastLaunches();
  }, []);

  return {
    data,
    loadingPastLaunches,
  };
};

export default useLoadPastLaunches;