import { useEffect, useState } from "react";

import { MENU_API_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [restroInfo, setResInfo] = useState(null);
  // Fetch Data
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API_URL + resId);

    const json = await data.json();
    setResInfo(json?.data);
  };
  return restroInfo;
};

export default useRestaurantMenu;
