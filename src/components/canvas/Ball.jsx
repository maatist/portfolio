import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { 
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture
 } from '@react-three/drei'

 import CanvasLoader from '../Loader'


const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl])

  return (
    <Float speed = {1.75} rotationIntensity={1}>
      <ambientLight intensity={0.25} />     
      <directionalLight position={[0, 0, 0.5]} intensity={1} />
      <mesh
        castShadow receiveShadow scale={2.75}
      >
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial 
          color="#fff8eb"
          polygonOffset={true}
          poligonOffsetFactor={-5}
          flatShading
        />
        <Decal 
          map={decal}
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
        />
      
      </mesh>

    </Float>
  )
}

const BallCanvas = ({icon}) => {
  return (
    <Canvas
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
        />
        <mesh>
          <Ball imgUrl = {icon} />
        </mesh>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas