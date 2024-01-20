import { MeshProps } from "@react-three/fiber";
import { useControls } from "leva";
import { FunctionComponent } from "react";
import useTexture from "./useTexture";
import { RepeatWrapping, Texture } from "three";

interface ShelfProps extends MeshProps {
    length: number;
    thickness: number;
    depth: number;
}

const Shelf: FunctionComponent<ShelfProps> = ({ length, thickness, depth, ...meshProps }) => {
    const { wireframe, texture } = useControls("properties", {
        wireframe: false,
        texture: {
            value: "marble_01",
            options: ["marble_01", "plywood", "dark_wood"]
        }
    })

    const textures = useTexture(texture, (textures) => {
        for (const texture of (textures as Texture[])) {
            texture.wrapS = RepeatWrapping
            texture.wrapT = RepeatWrapping
            texture.repeat.set(length, depth)
            texture.needsUpdate = true;
        }
    });

    return <mesh {...meshProps}>
        <boxGeometry args={[length, thickness, depth]} />
        <meshStandardMaterial {...textures} wireframe={wireframe} />
    </mesh>
}

export default Shelf