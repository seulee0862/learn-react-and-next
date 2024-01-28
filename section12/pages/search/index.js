import { fetchSearchResult } from "@/api";
import CountryList from "@/components/CountryList";
import Searchbar from "@/components/Searchbar";
import SubLayout from "@/components/SubLayout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";

export default function Search() {
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
    <>
      <Head>
        <title>NARAS 검색</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="NARAS" />
        <meta
          property="og:discription"
          content="전 세계 국가들의 정보를 확인해보세요"
        />
      </Head>
      <Searchbar q={q} />
      <CountryList countries={countries} />
    </>
  );
}

Search.Layout = SubLayout;
