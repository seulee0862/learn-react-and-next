import { useSearchParams } from "react-router-dom";
import { fetchSearchResult } from "../api";
import { useState } from "react";
import { useEffect } from "react";

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q");

  const [countries, setCountries] = useState([]);

  const setInitData = async () => {
    const data = await fetchSearchResult(q);
    console.log(data);
  };

  useEffect(() => {
    setInitData();
  }, [q]);

  return <div>Search {searchParams.get("q")}</div>;
}
