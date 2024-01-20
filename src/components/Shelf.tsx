import { MeshProps } from "@react-three/fiber";
import { FunctionComponent } from "react";

interface ShelfProps extends MeshProps {
    length: number;
    thickness: number;
    depth: number;
    wireframe?: boolean;
}

const Shelf: FunctionComponent<ShelfProps> = ({ length, thickness, depth, wireframe, ...meshProps }) =>
    <mesh {...meshProps}>
        <boxGeometry args={[length, thickness, depth]} />
        <meshBasicMaterial wireframe={wireframe} />
    </mesh>

export default Shelf