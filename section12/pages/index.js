import { fetchCountries } from "@/api";
import CountryList from "@/components/CountryList";
import Searchbar from "@/components/Searchbar";
import { useEffect } from "react";

export default function Home({ countries }) {
  return (
    <>
      <Searchbar />
      <CountryList countries={countries} />
    </>
  );
}

export async function getStaticProps() {
  // API호출 코드 필요

  const countries = await fetchCountries();

  return {
    props: {
      countries,
    },
  };
}
