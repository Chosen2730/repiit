import Head from "next/head";
// import Documents from "next/document";

const Meta = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name='description'
        content='An Ecommerce Website with lots of products for users'
      />
    </Head>
  );
};

export default Meta;
