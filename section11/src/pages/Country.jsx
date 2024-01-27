import { useParams } from "react-router-dom";
import { fetchCountry } from "../api";
import { useState } from "react";
import { useEffect } from "react";

export default function Country() {
  const params = useParams();
  const [country, setCountry] = useState();

  const setInitData = async () => {
    const data = await fetchCountry(params.code);
    setCountry(data);
  };

  useEffect(() => {
    setInitData();
  }, [params.code]);

  return <div>Country {params.code}</div>;
}
