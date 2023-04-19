import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from "@react-three/drei";
import { Physics, usePlane, useBox } from "@react-three/cannon";

const Animation = () => {
  function Box() {
    const [ref, api] = useBox(() => ({ mass: 1, position: [0, 2, 0] }));
    return (
      <mesh
        onClick={() => {
          api.velocity.set(0, 2, 0);
        }}
        ref={ref}
        position={[0, 2, 0]}
      >
        <boxBufferGeometry attach="geometry" />
        <meshLambertMaterial attach="material" color="hotpink" />
      </mesh>
    );
  }
  
  function Plane() {
    const [ref] = usePlane(() => ({
      rotation: [-Math.PI / 2, 0, 0],
    }));
    return (
      <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]}>
        <planeBufferGeometry attach="geometry" args={[100, 100]} />
        <meshLambertMaterial attach="material" color="lightblue" />
      </mesh>
    );
  }
  return (
    
    <Canvas className="bg-gray-900  " style={{height:"350px"}}>
    
		<OrbitControls />
		<Stars />
		<ambientLight intensity={2} />
		<spotLight position={[10, 15, 10]} angle={0.3} />
		<Physics>
			<Box  />
			<Plane />
		</Physics>
	</Canvas>
  )
}

export default Animation