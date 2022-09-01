import { OrbitControls } from '@react-three/drei'
import { Canvas, RenderProps, extend } from '@react-three/fiber'
import Ice from 'Ice'
import { FC, Suspense } from 'react'
import { Vector3 } from 'three'

extend({ Vector3 })

const Scene: FC = () => {
	return (
		<>
			<pointLight intensity={1.0} position={[0, 10, 0]} />
			<Ice />
		</>
	)
}

type CanvasProps = RenderProps<HTMLCanvasElement>

const App: FC = () => {

	const camera: CanvasProps['camera'] = {
		fov: 90,
		position: new Vector3(8, 2.5, 0)
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
