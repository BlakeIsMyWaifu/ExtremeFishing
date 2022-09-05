import { GroupProps } from '@react-three/fiber'
import { FC } from 'react'

const colours = {
	white: '#fff',
	blue: '#2b4c68',
	orange: '#f06929',
	black: '#0a0922'
}

const Penguin: FC<GroupProps> = groupProps => {
	return (
		<group {...groupProps}>

			{/* Lower Body */}
			<mesh position={[0, 0, 0]}>
				<boxBufferGeometry args={[0.9, 1, 1]} />
				<meshStandardMaterial color={colours.white} />
			</mesh>

			{/* Upper Body */}
			<mesh position={[0, 0.85, 0]}>
				<boxBufferGeometry args={[0.9, 0.7, 1]} />
				<meshStandardMaterial color={colours.blue} />
			</mesh>

			{/* Beak */}
			<mesh position={[0.6, 0.6, 0]}>
				<boxBufferGeometry args={[0.3, 0.2, 0.2]} />
				<meshStandardMaterial color={colours.orange} />
			</mesh>

			{/* Right Wing */}
			<Wing position={[0, 0, 0.55]} />

			{/* Left Wing */}
			<Wing position={[0, 0, -0.55]} />

			{/* Right Foot */}
			<mesh position={[0.5, -0.45, 0.35]}>
				<boxBufferGeometry args={[0.1, 0.1, 0.3]} />
				<meshStandardMaterial color={colours.orange} />
			</mesh>

			{/* Left Foot */}
			<mesh position={[0.5, -0.45, -0.35]}>
				<boxBufferGeometry args={[0.1, 0.1, 0.3]} />
				<meshStandardMaterial color={colours.orange} />
			</mesh>

			{/* Right Eye */}
			<Eye position={[0.3, 1, 0.55]} />

			{/* Left Eye */}
			<Eye position={[0.3, 1, -0.55]} />
		</group>
	)
}

const Wing: FC<GroupProps> = ({ position }) => (
	<group position={position}>
		<mesh position={[-0.1, 0.05, 0]}>
			<boxBufferGeometry args={[0.4, 1.1, 0.1]} />
			<meshStandardMaterial color={colours.blue} />
		</mesh>
		<mesh position={[-0.375, -0.25, 0]}>
			<boxBufferGeometry args={[0.15, 0.5, 0.1]} />
			<meshStandardMaterial color={colours.blue} />
		</mesh>
	</group>
)

const Eye: FC<GroupProps> = ({ position }) => (
	<group position={position}>
		<mesh position={[0, 0, 0]}>
			<boxBufferGeometry args={[0.1, 0.1, 0.1]} />
			<meshStandardMaterial color={colours.white} />
		</mesh>
		<mesh position={[-0.1, 0, 0]}>
			<boxBufferGeometry args={[0.1, 0.1, 0.1]} />
			<meshStandardMaterial color={colours.black} />
		</mesh>
		<mesh position={[-0.05, -0.2, 0]}>
			<boxBufferGeometry args={[0.2, 0.3, 0.1]} />
			<meshStandardMaterial color={colours.black} />
		</mesh>
	</group>
)

export default Penguin