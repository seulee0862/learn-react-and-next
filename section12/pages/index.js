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

export async function getServerSideProps() {
  // API호출 코드 필요

  const countries = await fetchCountries();

  return {
    props: {
      countries,
    },
  };
}
