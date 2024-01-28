import { fetchCountries } from "@/api";
import CountryList from "@/components/CountryList";
import Searchbar from "@/components/Searchbar";
import Head from "next/head";

export default function Home({ countries }) {
  return (
    <>
      <Head>
        <title>NARAS</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="NARAS" />
        <meta
          property="og:discription"
          content="전 세계 국가들의 정보를 확인해보세요"
        />
      </Head>
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
