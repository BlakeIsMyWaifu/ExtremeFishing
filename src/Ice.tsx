import { extend } from '@react-three/fiber'
import { FC } from 'react'
import { Euler, Vector3 } from 'three'

extend({ Euler, Vector3 })

const Ice: FC = () => {
	return (
		<mesh rotation={new Euler().setFromVector3(new Vector3(Math.PI / 2, 0, 0))}>
			<boxBufferGeometry args={[20, 20, 0.5]} />
			<meshStandardMaterial />
		</mesh>
	)
}

export default Ice