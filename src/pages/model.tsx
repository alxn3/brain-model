import Head from 'next/head';
import dynamic from 'next/dynamic';

const BrainModel = dynamic(import('components/brainmodel'), { ssr: false });

const Model: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Brain Model</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BrainModel/>
    </div>
  );
};

export default Model;
