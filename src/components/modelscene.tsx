import BrainComponent from './braincomponent';

import DK from 'data/DK.json';
import DKT from 'data/DKT.json';
import Destrieux from 'data/Destrieux.json';
import Full from 'data/Full.json';
import subcortical from 'data/subcortical.json';
import { useRef, useState, Suspense } from 'react';

type Props = {
  selected: any;
  setSelected: any;
  cortexHidden: boolean;
  subcortexHidden: boolean;
  cortexOpacity: number;
  subcortexOpacity: number;
  model: string;
  modelType: string;
  materialType: string;
};
const Model = { DK: DK, DKT: DKT, Destrieux: Destrieux, Full: Full };

const setOpacity = (obj, opacity) => {
  obj.children.forEach((child) => {
    setOpacity(child, opacity);
  });
  if (obj.material) {
    obj.material.opacity = opacity;
  }
};

const ModelScene = ({
  selected,
  setSelected,
  cortexHidden,
  subcortexHidden,
  cortexOpacity,
  subcortexOpacity,
  model,
  modelType,
  materialType,
}) => {
  const cortexRef = useRef();
  const subcortexRef = useRef();

  return (
    <>
      <group ref={cortexRef}>
        {!cortexHidden &&
          (model !== 'Full' ? (
            Model[model].map((obj) => {
              return (
                <>
                  <Suspense fallback={null}>
                    <BrainComponent
                      key={'lh.' + obj.file}
                      file={`models/${modelType}_${model}/lh.${modelType}.${model}.${obj.file}`}
                      onClick={() => {
                        setSelected(obj);
                        console.log(obj);
                      }}
                      selected={obj.file == selected?.file}
                      opacity={cortexOpacity}
                      materialType={materialType}
                    />
                  </Suspense>
                  <Suspense fallback={null}>
                    <BrainComponent
                      key={'rh.' + obj.file}
                      file={`models/${modelType}_${model}/rh.${modelType}.${model}.${obj.file}`}
                      onClick={() => {
                        setSelected(obj);
                        console.log(obj);
                      }}
                      selected={obj.file == selected?.file}
                      opacity={cortexOpacity}
                      materialType={materialType}
                    />
                  </Suspense>
                </>
              );
            })
          ) : (
            <Suspense fallback={null}>
              <BrainComponent
                key={`lh.${modelType}.obj`}
                file={`models/${modelType}_${model}/lh.${modelType}.${Model[model][0].file}`}
                onClick={() => {
                  setSelected(Model[model][0]);
                }}
                selected={Model[model][0].name == selected?.name}
                opacity={cortexOpacity}
                materialType={materialType}
              />
              <BrainComponent
                key={`rh.${modelType}.obj`}
                file={`models/${modelType}_${model}/rh.${modelType}.${Model[model][1].file}`}
                onClick={() => {
                  setSelected(Model[model][1]);
                }}
                selected={Model[model][1].name == selected?.name}
                opacity={cortexOpacity}
                materialType={materialType}
              />
            </Suspense>
          ))}
      </group>
      <group ref={subcortexRef}>
        {!subcortexHidden &&
          subcortical.map((obj) => {
            return (
              <Suspense fallback={null}>
                <BrainComponent
                  key={obj.file}
                  file={`models/subcortical/${obj.file}`}
                  onClick={() => {
                    setSelected(obj);
                    console.log(obj);
                  }}
                  selected={obj.file == selected?.file}
                  opacity={subcortexOpacity}
                  materialType={materialType}
                />
              </Suspense>
            );
          })}
      </group>
    </>
  );
};

export default ModelScene;
