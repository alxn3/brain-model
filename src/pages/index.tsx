import ThemeToggle from 'components/themetoggle';
import Head from 'next/head';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Brain</title>
      </Head>
      <main className="h-screen bg-gradient-to-br from-white via-white to-gray-100 dark:from-black dark:via-black dark:to-gray-900">
        <div className="flex justify-center items-center h-full">
          <div className="flex flex-col items-center">
            <h1 className="font-semibold text-black dark:text-white text-4xl md:text-5xl lg:text-6xl mb-10">
              Welcome to{' '}
              <span className="font-black text-red-400">the Brain</span>.
            </h1>
            <Link href="/model">
              <button className="bg-red-500 hover:bg-red-700 text-white text-4xl font-light py-3 px-6 rounded self-center">
                BEGIN
              </button>
            </Link>
            <p className="text-black dark:text-white font-light text-lg mt-16 opacity-40 hover:opacity-100 transition-opacity">
              Website created by Alex Lin. |{' '}
              <a
                className="hover:text-red-300 font-normal cursor-pointer hover:underline"
                href="https://github.com/alexlin247/brain-model"
                target="_blank"
              >
                Source Code
              </a>
            </p>
            <ThemeToggle className="mt-2 opacity-20 hover:opacity-100 transition-opacity text-xs"/>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
