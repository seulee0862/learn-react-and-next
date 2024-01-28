import "@/styles/globals.css";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  const EmptyLayout = ({ children }) => console.log(children);
  const SubLayout = Component.Layout || EmptyLayout;

  return (
    <Layout>
      <SubLayout>
        <Component {...pageProps} />
      </SubLayout>
    </Layout>
  );
}
