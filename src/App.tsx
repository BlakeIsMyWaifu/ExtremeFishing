import { OrbitControls, Sky } from '@react-three/drei'
import { Canvas, RenderProps } from '@react-three/fiber'
import Boat from 'Boat'
import Ocean from 'Ocean'
import Penguin from 'Penguin'
import { FC, Suspense } from 'react'

const Scene: FC = () => {
	return (
		<>
			<hemisphereLight args={['#fff', '#333', 1]} />

			<Sky
				inclination={0.6}
				azimuth={0.12}
				rayleigh={0.8}
				turbidity={0.4}
			/>
			<Ocean />

			<group rotation={[0, Math.PI / 0.55, 0]}>
				<Boat scale={[2.5, 2.5, 2.5]} />
				<Penguin position={[0, 0.75, 0]} />
			</group>
		</>
	)
}

type CanvasProps = RenderProps<HTMLCanvasElement>

const App: FC = () => {

	const camera: CanvasProps['camera'] = {
		fov: 75,
		position: [8, 1.5, 0]
	}

	return (
		<div style={{
			height: '100vh',
			width: '100vw'
		}}>
			<Canvas camera={camera}>
				<OrbitControls />
				<Suspense fallback={null}>
					<Scene />
				</Suspense>
			</Canvas>
		</div>
	)
}

export default App
