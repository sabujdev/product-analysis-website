import axios from "axios";
import { useEffect, useState } from "react";

const useReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios.get("reviews.json").then((res) => setReviews(res.data));
  }, []);

  return [reviews, setReviews];
};

export default useReviews;
