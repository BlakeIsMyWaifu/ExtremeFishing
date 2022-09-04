import { OrbitControls } from '@react-three/drei'
import { Canvas, RenderProps } from '@react-three/fiber'
import Boat from 'Boat'
import { FC, Suspense } from 'react'

const Scene: FC = () => {
	return (
		<>
			<hemisphereLight args={['#fff', '#333', 1]} />
			<Boat />
		</>
	)
}

type CanvasProps = RenderProps<HTMLCanvasElement>

const App: FC = () => {

	const camera: CanvasProps['camera'] = {
		fov: 90,
		position: [5, 2, 0]
	}

	const onCreated: CanvasProps['onCreated'] = ({ gl }) => {
		gl.setClearColor('#A6D0EF')
	}

	return (
		<div style={{
			height: '100vh',
			width: '100vw'
		}}>
			<Canvas camera={camera} onCreated={onCreated}>
				<OrbitControls />
				<Suspense fallback={null}>
					<Scene />
				</Suspense>
			</Canvas>
		</div>
	)
}

export default App
