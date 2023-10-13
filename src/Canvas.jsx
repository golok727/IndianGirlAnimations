import { Canvas } from "@react-three/fiber";

import Experience from "./Experience.jsx";

const ThreeCanvas = () => {
	return (
		<Canvas camera={{ position: [0, 0, 4.5], fov: 30 }} shadows>
			<Experience />
		</Canvas>
	);
};

export default ThreeCanvas;
