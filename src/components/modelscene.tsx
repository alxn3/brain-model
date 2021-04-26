import BrainComponent from './braincomponent';

import DK from 'data/DK.json';
import DKT from 'data/DKT.json';
import Destrieux from 'data/Destrieux.json';
import subcortical from 'data/subcortical.json';
import { useState } from 'react';

const ModelTypes = { inflated: 'inflated', pial: 'pial', white: 'white' };
const Model = { DK: DK, DKT: DKT, Destrieux: Destrieux, Full: 'Full' };

const ModelScene = ({ selected, setSelected }) => {
  const [modelType, setModelType] = useState<string>(ModelTypes.pial);
  const [model, setModel] = useState('Destrieux');
  return (
    <>
      <group>
        {Model[model].map((obj) => {
          return (
            <>
              <BrainComponent
                key={'lh.'+obj.file}
                file={`models/${modelType}_${model}/lh.${modelType}.${model}.${obj.file}`}
                onClick={() => {
                  setSelected(obj);
                  console.log(obj);
                }}
                selected={obj.file == selected?.file}
              />
              <BrainComponent
                key={'rh.'+obj.file}
                file={`models/${modelType}_${model}/rh.${modelType}.${model}.${obj.file}`}
                onClick={() => {
                  setSelected(obj);
                  console.log(obj);
                }}
                selected={obj.file == selected?.file}
              />
            </>
          );
        })}
      </group>
      <group>
        {subcortical.map((obj) => {
          return (
            <BrainComponent
              key={obj.file}
              file={`models/subcortical/${obj.file}`}
              onClick={() => {
                setSelected(obj);
                console.log(obj);
              }}
              selected={obj.file == selected?.file}
            />
          );
        })}
      </group>
    </>
  );
};

export default ModelScene;
