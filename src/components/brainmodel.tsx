import { Suspense, useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import {
  EffectComposer,
  Outline,
  Bloom,
  Noise,
  Vignette,
} from '@react-three/postprocessing';
import ModelScene from './modelscene';
import {
  OptionGroup,
  RadioOption,
  ToggleOption,
  SliderOption,
} from './settings';
import Info from 'data/Info.json';
import { useTheme } from 'next-themes';
import ThemeToggle from './themetoggle';

const BrainModel: React.FC = () => {
  const [selected, setSelected] = useState(null);
  const [modelType, setModelType] = useState<string>('pial');
  const [model, setModel] = useState('DK');
  const [cortexHidden, setCortexHidden] = useState(false);
  const [subcortexHidden, setSubcortexHidden] = useState(false);
  const [cortexOpacity, setCortexOpacity] = useState(0.7);
  const [subcortexOpacity, setSubcortexOpacity] = useState(0.7);
  const [settingsHidden, setSettingsHidden] = useState(false);
  const { theme } = useTheme();

  const selectedInfo = selected
    ? Info[
        (selected.file as string).slice(
          0,
          (selected.file as string).lastIndexOf('.')
        )
      ]
    : null;
  return (
    <div className="h-screen bg-black transition-colors">
      {selected && (
        <div className="z-10 fixed bg-white dark:bg-gray-800 px-6 py-4 rounded-md bg-opacity-40 max-w-md">
          <p className="font-mono text-lg text-red-500">selected</p>
          <h1 className="text-black dark:text-white font-bold text-2xl">
            {selectedInfo?.alias ?? selected.name}
          </h1>
          <p className="text-gray-800 dark:text-gray-200 text-lg font-light mt-2">
            {selectedInfo?.description ?? selected.description}
          </p>
        </div>
      )}
      <div className="fixed bottom-0 z-10 bg-white dark:bg-gray-800 p-5 rounded-md bg-opacity-40">
        <p
          className="text-black dark:text-white opacity-50 text-center font-mono cursor-pointer"
          onClick={() => setSettingsHidden(!settingsHidden)}
        >
          Toggle Settings
        </p>
        <div className={settingsHidden ? 'hidden' : 'space-y-5'}>
          <OptionGroup
            name="Model"
            onChange={(event) => {
              setModel((event.target as HTMLInputElement).value);
              console.log(model);
            }}
          >
            <RadioOption id="DK" name="model" label="DK" defaultChecked />
            <RadioOption id="DKT" name="model" label="DKT" />
            <RadioOption id="Destrieux" name="model" label="Destrieux" />
            <RadioOption id="Full" name="model" label="Full" />
          </OptionGroup>
          <OptionGroup
            name="Model Type"
            onChange={(event) => {
              setModelType((event.target as HTMLInputElement).value);
              console.log(modelType);
            }}
          >
            <RadioOption id="inflated" name="type" label="Inflated" />
            <RadioOption id="pial" name="type" label="Pial" defaultChecked />
            <RadioOption id="white" name="type" label="White" />
          </OptionGroup>
          <OptionGroup name="Other">
            <ToggleOption
              id="hidecortex"
              label="Hide Cortex"
              checked={cortexHidden}
              setChecked={setCortexHidden}
            />
            <ToggleOption
              id="hidesubcortex"
              label="Hide Subcortex"
              checked={subcortexHidden}
              setChecked={setSubcortexHidden}
            />
            <SliderOption
              id="cortexopacity"
              label="Cortex Opacity"
              min={0}
              max={1}
              defaultValue={cortexOpacity}
              step={0.01}
              onChange={(event) =>
                setCortexOpacity(
                  Number((event.target as HTMLInputElement).value)
                )
              }
            />
            <SliderOption
              id="subcortexopacity"
              label="Subcortex Opacity"
              min={0}
              max={1}
              defaultValue={subcortexOpacity}
              step={0.01}
              onChange={(event) =>
                setSubcortexOpacity(
                  Number((event.target as HTMLInputElement).value)
                )
              }
            />
            <ThemeToggle />
          </OptionGroup>
        </div>
      </div>
      <Canvas>
        <ambientLight />
        <color attach="background" args={theme === 'dark' ? ['#050505'] : ['#FAFAFA']} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <PerspectiveCamera makeDefault position={[0, 0, 300]} />
        <OrbitControls maxDistance={1000} />
        <EffectComposer>
          <Bloom
            luminanceThreshold={0}
            luminanceSmoothing={1}
            height={10}
            opacity={0.5}
          />
          <Suspense fallback={null}>
            <ModelScene
              selected={selected}
              setSelected={setSelected}
              model={model}
              modelType={modelType}
              cortexHidden={cortexHidden}
              subcortexHidden={subcortexHidden}
              cortexOpacity={cortexOpacity}
              subcortexOpacity={subcortexOpacity}
            />
          </Suspense>
          <Noise opacity={0.0125} />
          <Vignette eskil={false} offset={0.1} darkness={theme==='dark' ? 1.1 : 0.5} />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default BrainModel;
