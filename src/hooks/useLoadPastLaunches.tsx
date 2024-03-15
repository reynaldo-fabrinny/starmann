import { useEffect, useState} from 'react';
import axios from 'axios';

const LAUNCHES_URL = "https://api.spacexdata.com/v5/launches/query";

const useLoadPastLaunches = ({quantity}: { quantity: number }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const body = {options: {limit: quantity} };

  useEffect(() => {
    const fetchLaunches = async () => {
      try {
        const { data: response } = await axios.post(LAUNCHES_URL, body);
        setData(response);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    fetchLaunches();
  }, []);

  return {
    data,
    loading,
  };
};

export default useLoadPastLaunches;