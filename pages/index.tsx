import type { NextPage } from "next";
import Head from "../components/Head";

const Home: NextPage = () => {
  return (
    <div>
      <Head title="Testing Next.JS" desc="This is just a test" />
      <h1>Hi !</h1>
    </div>
  );
};

export default Home;
