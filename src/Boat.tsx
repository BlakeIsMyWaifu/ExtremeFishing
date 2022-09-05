import { GroupProps } from '@react-three/fiber'
import { FC } from 'react'

const Boat: FC<GroupProps> = groupProps => {

	const colour = '#8f2609'

	return (
		<group {...groupProps}>
			<mesh position={[0, 0, 0]}>
				<boxBufferGeometry args={[1, 0.2, 3]} />
				<meshStandardMaterial color={colour} />
			</mesh>
			<mesh position={[-0.4, 0.2, 0]}>
				<boxBufferGeometry args={[0.2, 0.2, 3]} />
				<meshStandardMaterial color={colour} />
			</mesh>
			<mesh position={[0.4, 0.2, 0]}>
				<boxBufferGeometry args={[0.2, 0.2, 3]} />
				<meshStandardMaterial color={colour} />
			</mesh>
			<mesh position={[0, 0.2, 1.45]}>
				<boxBufferGeometry args={[0.6, 0.2, 0.1]} />
				<meshStandardMaterial color={colour} />
			</mesh>
			<mesh position={[0, 0.2, -1.45]}>
				<boxBufferGeometry args={[0.6, 0.2, 0.1]} />
				<meshStandardMaterial color={colour} />
			</mesh>
		</group>
	)
}

export default Boat