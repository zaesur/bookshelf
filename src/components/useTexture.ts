import { useTexture as useTextureDrei } from "@react-three/drei";

const useTexture = (path: string, onLoad?: Parameters<typeof useTextureDrei>[1]) => {
    return useTextureDrei({
        map: `assets/${path}_1k/textures/${path}_diff_1k.png`,
        aoMap: `assets/${path}_1k/textures/${path}_ao_1k.png`,
        roughnessMap: `assets/${path}_1k/textures/${path}_rough_1k.png`,
        normalMap: `assets/${path}_1k/textures/${path}_nor_gl_1k.png`,
        // displacementMap: `assets/${path}_1k/textures/${path}_disp_1k.png`
    }, onLoad)
}

export default useTexture