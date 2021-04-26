import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { useLoader } from '@react-three/fiber';
import { useEffect, useState } from 'react';

type Props = {
  file: string;
  onClick: () => void;
  selected: boolean;
  meshProps?: any;
};

const BrainComponent: React.FC<Props> = ({
  file,
  onClick,
  selected,
  meshProps,
}) => {
  const [geometry, setGeometry] = useState();
  const [color, setColor] = useState(
    new THREE.Color().setHSL(Math.random(), 0.5, 0.25)
  );
  const [selectedColor, setSelectedColor] = useState(
    new THREE.Color().setHSL(color.getHSL().h, 0.7, 0.55)
  );
  const obj = useLoader(OBJLoader, file);
  useEffect(() => {
    if (obj) {
      obj.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          setGeometry(child.geometry);
        }
      });
    }
  }, []);
  return (
    <mesh
      onClick={(e) => {
        onClick();
        console.log(file);
        e.stopPropagation();
      }}
      {...meshProps}
      geometry={geometry}
    >
      <meshStandardMaterial
        color={selected ? selectedColor : color}
        opacity={selected ? 1 :0.5}
        transparent
      />
    </mesh>
  );
};

export default BrainComponent;
