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
    const { displacement, wireframe, texture } = useControls({
        resolution: {
            value: 50,
            min: 1,
            max: 100,
            step: 1
        },
        displacement: {
            value: 0,
            min: 0,
            max: 1,
            step: 0.01
        },
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
        <boxGeometry args={[length, thickness, depth, length * 50, thickness * 50, depth * 50]} />
        <meshStandardMaterial {...textures} wireframe={wireframe} displacementScale={displacement} />
    </mesh>
}

export default Shelf