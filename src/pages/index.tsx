import Head from 'next/head';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex justify-center items-center">
          <h1 className="text-4xl">Welcome to the Brain.</h1>
        </div>
      </main>
    </div>
  );
};

export default Home;
