import { FunctionComponent, useRef } from "react";
import Shelf from "./Shelf";
import { button, useControls } from "leva";
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js'
import { Group } from "three";

interface BookShelfProps {
    width: number
    height: number;
    depth: number;
    shelves: number;
    thickness: number;
}

const BookShelf: FunctionComponent<BookShelfProps> = ({
    depth,
    width,
    height,
    shelves,
    thickness
}) => {
    const groupRef = useRef<Group>(null!)
    useControls({
        download: button(
            () => new GLTFExporter().parse(
                groupRef.current,
                (gltf) => {
                    const dataStr = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(gltf))}`
                    const downloadAnchorNode = document.createElement('a');
                    downloadAnchorNode.setAttribute("href", dataStr);
                    downloadAnchorNode.setAttribute("download", "world.gltf");
                    document.body.appendChild(downloadAnchorNode);
                    downloadAnchorNode.click();
                    downloadAnchorNode.remove();
                },
                (error) => console.warn(error)
            ),
            {

            }
        )
    })

    return <group ref={groupRef}>
        {/* Boards */}
        {Array.from(Array(shelves + 2)).map((_, i) =>
            <Shelf
                key={i}
                depth={depth}
                length={width - 2 * thickness}
                thickness={thickness}
                position={[0, i * (height - thickness) / (shelves + 1), 0]}
            />
        )}

        {/* Left side panel */}
        <Shelf
            position={[-(width - thickness) / 2, (height - thickness) / 2, 0]}
            rotation={[0, 0, Math.PI / 2]}
            depth={depth}
            length={height}
            thickness={thickness}
        />

        {/* Right side panel */}
        <Shelf
            position={[(width - thickness) / 2, (height - thickness) / 2, 0]}
            rotation={[0, 0, Math.PI / 2]}
            depth={depth}
            length={height}
            thickness={thickness}
        />
    </group>
}

export default BookShelf
