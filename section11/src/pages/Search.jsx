import { useSearchParams } from "react-router-dom";
import { fetchSearchResult } from "../api";
import { useState } from "react";
import { useEffect } from "react";
import Searchbar from "../components/Searchbar";
import CountryList from "../components/CountryList";
import style from "./Search.module.css";

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q");

  const [countries, setCountries] = useState([]);

  const setInitData = async () => {
    const data = await fetchSearchResult(q);
    setCountries(data);
  };

  useEffect(() => {
    setInitData();
  }, [q]);

  return (
    <div className={style.container}>
      <Searchbar q={q} />
      <div>
        <b>{q}</b> 검색결과
      </div>
      <CountryList countries={countries} />
    </div>
  );
}
