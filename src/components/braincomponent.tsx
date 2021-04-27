import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { useLoader } from '@react-three/fiber';
import { useEffect, useState } from 'react';

type Props = {
  file: string;
  onClick: () => void;
  selected: boolean;
  meshProps?: any;
  opacity?: number;
  materialType?: string;
};

const BrainComponent: React.FC<Props> = ({
  file,
  onClick,
  selected,
  meshProps,
  opacity = 0.7,
  materialType = THREE.MeshStandardMaterial.toString(),
}) => {
  const randomHue = Math.random();
  const [geometry, setGeometry] = useState();
  const [color, setColor] = useState(
    new THREE.Color().setHSL(randomHue, 0.5, 0.25)
  );
  const [selectedColor, setSelectedColor] = useState(
    new THREE.Color().setHSL(randomHue, 0.7, 0.55)
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
  }, [file]);

  const materialSwitch = () => {
    switch (materialType) {
      case THREE.MeshStandardMaterial.toString():
        return (
          <meshStandardMaterial
            color={selected ? selectedColor : color}
            opacity={selected ? 1 : opacity}
            transparent
          />
        );
      case THREE.MeshDepthMaterial.toString():
        return (
          <meshDepthMaterial opacity={selected ? 1 : opacity} transparent />
        );
      case THREE.MeshNormalMaterial.toString():
        return (
          <meshNormalMaterial opacity={selected ? 1 : opacity} transparent />
        );
      case THREE.MeshToonMaterial.toString():
        return (
          <meshToonMaterial
            color={selected ? selectedColor : color}
            opacity={selected ? 1 : opacity}
            transparent
          />
        );
    }
  };

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
      {materialSwitch()}
    </mesh>
  );
};

export default BrainComponent;
