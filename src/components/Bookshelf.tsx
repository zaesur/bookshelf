import { MeshProps } from "@react-three/fiber";
import { FunctionComponent } from "react";
import Shelf from "./Shelf";

interface BookShelfProps {
    width: number
    height: number;
    depth: number;
    shelves: number;
    thickness: number;
}

const BookShelf: FunctionComponent<BookShelfProps> = ({
    width,
    height,
    depth,
    shelves,
    thickness
}) => {
    const shelfWidth = width - 2 * thickness

    return <group>
        {/* Boards */}
        {Array.from(Array(shelves + 2)).map((_, i) =>
            <Shelf
                key={i}
                depth={depth}
                length={shelfWidth}
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
    </group >
}

export default BookShelf
