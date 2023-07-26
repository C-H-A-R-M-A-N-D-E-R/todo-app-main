import { useQuery } from "react-query";
import axios from "axios";

const useFetched = (key: string, url: string) => {
  return useQuery(key, async () => await axios.get(url));
};

export default useFetched;
