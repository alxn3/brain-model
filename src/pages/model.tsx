import Head from 'next/head';
import { BrainModel } from 'components/brainmodel';

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
