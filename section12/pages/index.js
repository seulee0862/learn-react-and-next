import { useEffect } from "react";

export default function Home({ name }) {
  console.log("HOME");

  useEffect(() => {
    console.log("COMPONENT MOUNT");
  }, []);

  return <div>{name}</div>;
}

export async function getServerSideProps() {
  // SSR을 위해 서버 측에서 페이지 컴포넌트에게 전달할 데이터를 설정하는 함수

  console.log("getServerSideProps Called");

  return {
    props: {
      name: "KOREA",
    },
  };
}
