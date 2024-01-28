import { fetchSearchResult } from "@/api";
import SubLayout from "@/components/SubLayout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Search({ countries }) {
  const router = useRouter();
  const { q } = router.query;

  const [countries, setCountires] = useState([]);

  const setData = async () => {
    const data = await fetchSearchResult(q);
    setCountires(data);
  };

  useEffect(() => {
    if (q) {
      setData();
    }
  }, [q]);

  return (
    <div>
      {countries.map((country) => {
        return <div key={country.code}>{country.commonName}</div>;
      })}
    </div>
  );
}

Search.Layout = SubLayout;
