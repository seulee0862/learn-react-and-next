import { fetchCountries } from "@/api";
import { useEffect } from "react";

export default function Home({ countries }) {
  return (
    <div>
      {countries.map((country) => (
        <div key={country.code}>{country.commonName}</div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  // API호출 코드 필요

  const countries = await fetchCountries();
  console.log("countries 데이터 불러옴");

  return {
    props: {
      countries,
    },
  };
}
