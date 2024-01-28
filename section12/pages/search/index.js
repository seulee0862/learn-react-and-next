import { fetchSearchResult } from "@/api";
import SubLayout from "@/components/SubLayout";

export default function Search({ countries }) {
  return (
    <div>
      {countries.map((country) => {
        return <div key={country.code}>{country.commonName}</div>;
      })}
    </div>
  );
}

Search.Layout = SubLayout;

export const getServerSideProps = async (context) => {
  const { q } = context.query;

  let countries = [];
  console.log(q);
  if (q) {
    countries = await fetchSearchResult(q);
  }

  return {
    props: { countries },
  };
};
