import {
	OrbitControls,
	Preload,
	Sky,
	Environment,
	ContactShadows,
} from "@react-three/drei";
import { Avatar } from "./Avatar.jsx";
const Experience = () => {
	return (
		<>
			<group position-y={-1}>
				<OrbitControls />
				<Sky
					distance={450000}
					sunPosition={[0, 1, 2]}
					inclination={1}
					azimuth={0.26}
				/>
				{/* apartment, city, dawn, forest, lobby, night, park, studio, sunset, warehouse */}
				<Environment preset="sunset" />

				<ContactShadows
					opacity={0.42}
					scale={10}
					blur={1}
					far={10}
					resolution={2048}
					color="#000000"
				/>

				<group>
					<Avatar />

					<mesh scale={[10, 10, 10]} position={[0, 0, -3]}>
						<planeGeometry />
						<meshStandardMaterial
							color={"#777777"}
							metalness={1}
							roughness={0.2}
						/>
					</mesh>

					<mesh
						scale={[10, 10, 10]}
						rotation-x={-Math.PI / 2}
						position-y={-0.002}
					>
						<planeGeometry />
						<meshStandardMaterial
							color={"#777777"}
							metalness={1}
							roughness={0.5}
						/>
					</mesh>
				</group>

				<Preload all />
			</group>
		</>
	);
};

export default Experience;
