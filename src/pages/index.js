import { useGlobalContext } from "../Layout/context";
import Head from "./../Layout/head";

export default function Home() {
  const { name } = useGlobalContext();
  return (
    <>
      <Head title='Repiit' />
    </>
  );
}
