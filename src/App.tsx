import { OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { FC, Suspense, useRef } from 'react'
import * as THREE from 'three'

const Cube: FC = () => {

	const cube = useRef<THREE.Mesh>(null)

	useFrame(() => {
		if (!cube.current) return
		cube.current.rotation.x += 0.01
		cube.current.rotation.y += 0.01
	})

	return (
		<mesh ref={cube}>
			<boxBufferGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color='#0391BA' />
		</mesh>
	)
}

const Scene: FC = () => {
	return (
		<>
			<gridHelper />
			<pointLight intensity={1.0} position={[5, 3, 5]} />
			<Cube />
		</>
	)
}

const App: FC = () => {
	return (
		<div
			style={{
				height: '100vh',
				width: '100vw'
			}}
		>
			<Canvas
				camera={{
					near: 0.1,
					far: 1000,
					zoom: 1
				}}
				onCreated={({ gl }) => {
					gl.setClearColor('#252934')
				}}
			>
				<OrbitControls />
				<Suspense fallback={null}>
					<Scene />
				</Suspense>
			</Canvas>
		</div>
	)
}

export default App