import { MeshProps } from "@react-three/fiber";
import { FunctionComponent } from "react";

interface ShelfProps extends MeshProps {
    length: number;
    thickness: number;
    depth: number;
}

const Shelf: FunctionComponent<ShelfProps> = ({ length, thickness, depth, ...meshProps }) =>
    <mesh {...meshProps}>
        <boxGeometry args={[length, thickness, depth]} />
        <meshBasicMaterial wireframe />
    </mesh>

export default Shelf