import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { useLoader } from '@react-three/fiber';

type Props = {
  file: string;
  onClick: () => void;
  selected: boolean;
};

const BrainComponent: React.FC<Props> = ({ file, onClick, selected }) => {
  const obj = useLoader(OBJLoader, file);
  if (obj) {
    obj.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        if (selected) {
          child.material.color.setHSL(Math.random(), 1, 0.5);
        } else {
          child.material.color.setHSL(Math.random(), 0.5, 0.3);
        }
      }
    });
  }
  return (
    <mesh
      onClick={(e) => {
        onClick();
        console.log(file);
        e.stopPropagation();
      }}
    >
      <primitive attach="map" object={obj} />
    </mesh>
  );
};

export default BrainComponent;
