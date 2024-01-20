import useTexture from "./useTexture";
import { useControls } from "leva";
import { MeshProps } from "@react-three/fiber";
import { FunctionComponent, useMemo } from "react";
import { BoxGeometry, RepeatWrapping, Texture } from "three";

interface ShelfProps extends MeshProps {
    length: number;
    thickness: number;
    depth: number;
}

const Shelf: FunctionComponent<ShelfProps> = ({ length, thickness, depth, ...meshProps }) => {
    const { wireframe, texture } = useControls("properties", {
        wireframe: false,
        texture: {
            options: ["marble_01", "plywood", "dark_wood"]
        }
    })

    const textures = useTexture(texture, (textures) => {
        (textures as Texture[]).forEach(texture => {
            texture.wrapS = texture.wrapT = RepeatWrapping
        })
    });

    const geometry = useMemo(() => {
        const geometry = new BoxGeometry(length, thickness, depth)
        const uv = geometry.getAttribute("uv")

        for (let i = 0; i < uv.count; i++) {
            const x = uv.getX(i);
            const y = uv.getY(i);
            const third = uv.count / 3;

            // Left and right side
            if (i < third) {
                uv.setXY(
                    i,
                    x * thickness,
                    y * depth
                )
            }
            // Top and bottom
            else if (i < 2 * third) {
                uv.setXY(
                    i,
                    x * length,
                    y * depth
                )
            }
            // Front and back
            else {
                uv.setXY(
                    i,
                    x * length,
                    y * thickness
                )
            }
        }

        return geometry
    }, [length, thickness, depth])

    return <mesh {...meshProps}>
        <primitive object={geometry} attach="geometry" />
        <meshStandardMaterial {...textures} wireframe={wireframe} />
    </mesh>
}

export default Shelf