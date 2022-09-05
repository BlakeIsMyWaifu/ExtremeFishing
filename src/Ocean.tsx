import { Object3DNode, extend, useFrame, useLoader } from '@react-three/fiber'
import { FC, useMemo, useRef } from 'react'
import { PlaneGeometry, RepeatWrapping, TextureLoader, Vector3 } from 'three'
import { Water } from 'three/examples/jsm/objects/Water.js'

extend({ PlaneGeometry, RepeatWrapping, TextureLoader, Vector3, Water })

declare global {
	// eslint-disable-next-line @typescript-eslint/no-namespace
	namespace JSX {
		interface IntrinsicElements {
			water: Object3DNode<Water, typeof Water>;
		}
	}
}

const Ocean: FC = () => {

	const ref = useRef<Water>(null)
	const waterNormals = useLoader(TextureLoader, 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/waternormals.jpg')

	waterNormals.wrapS = waterNormals.wrapT = RepeatWrapping
	const geom = useMemo(() => new PlaneGeometry(30000, 30000), [])
	const config = useMemo(() => ({
		textureWidth: 512,
		textureHeight: 512,
		waterNormals,
		sunDirection: new Vector3(),
		sunColor: 0xffffff,
		waterColor: 0x001e0f,
		distortionScale: 3.7,
		fog: false
	}), [waterNormals])

	useFrame((_state, delta) => {
		if (!ref.current) return
		ref.current.material.uniforms.time.value += delta / 2
	})

	return (
		<water
			ref={ref}
			args={[geom, config]}
			rotation-x={-Math.PI / 2}
			position={[0, -0.1, 0]}
		/>
	)
}

export default Ocean