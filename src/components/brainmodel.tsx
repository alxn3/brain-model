import { Suspense, useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import Model from 'data/models';
import BrainComponent from './braincomponent';
import {
  EffectComposer,
  Outline,
  Bloom,
  Noise,
  Vignette,
} from '@react-three/postprocessing';
import { BlendFunction, Resizer, KernelSize } from 'postprocessing';

const BrainModel: React.FC = () => {
  const [selected, setSelected] = useState(null);
  return (
    <div className="h-screen">
      {selected && (
        <div className="z-10 absolute bg-white p-8 rounded-md">
          <h1>{selected.name}</h1>
        </div>
      )}
      <Canvas>
        <ambientLight />
        <color attach="background" args={['#050505']} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <PerspectiveCamera makeDefault position={[0, 0, 300]} />
        <OrbitControls maxDistance={1000} />
        <Suspense fallback={null}>
          {Model.map((obj) => {
            return (
              <BrainComponent
                key={obj.file}
                file={`pial_DK_obj/${obj.file}`}
                onClick={() => {
                  setSelected(obj);
                  console.log(obj);
                }}
                selected={obj.file == selected?.file}
              />
            );
          })}
        </Suspense>
        <EffectComposer>
          <Bloom
            luminanceThreshold={0}
            luminanceSmoothing={1}
            height={10}
            opacity={0.5}
          />
          <Noise opacity={0.0125} />
          <Vignette eskil={false} offset={0.1} darkness={1.1} />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default BrainModel;
