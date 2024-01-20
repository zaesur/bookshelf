import { Center, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FunctionComponent, ReactNode } from "react";

interface ExperienceProps {
  children?: ReactNode;
}

const Experience: FunctionComponent<ExperienceProps> = ({ children }) => {
  return (
    <Canvas>
      <OrbitControls />
      <Center>
        {children}
      </Center>
    </Canvas>
  );
};

export default Experience;
