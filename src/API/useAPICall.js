import { useEffect, useState } from "react";
import axios from "axios";

const useAPICall = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      // Handeling API call loading and errors
      try {
        const res = await axios.get(url);
        setData(res.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(err);
      }
    };
    setLoading(true);
    getData();
  }, [url]);
  return { data: data, loading: loading, error: error };
};

export default useAPICall;
