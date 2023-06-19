import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls,Float, useGLTF } from "@react-three/drei"

import CanvasLoader from '../Loader'

const Earth = () => {
  const earth = useGLTF('./planet/moon_walk/scene.gltf');
  
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0,0,0.05]} />
      <primitive 
        object={earth.scene}
        scale={1.5}
        position-y={-1.5}
        rotation-y={0}
      />
    </Float>
  )
}

const EarthCanvas = () => {
  return(
    <Canvas
      shadows
      frameloop="demand"
      gl={{preserveDrawingBuffer: true}}
      camera={{
        fov:45,
        near:0.1,
        far: 200,
        position: [-4, 3, 6]
      }}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={1}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas