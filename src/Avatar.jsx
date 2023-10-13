import React, { useEffect, useRef } from "react";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { useControls } from "leva";

export function Avatar(props) {
	const { animation } = useControls({
		animation: {
			value: "NorthernSoul",
			options: ["NorthernSoul", "Idle", "TalkingOnPhone"],
		},
	});

	const groupRef = useRef();
	const { nodes, materials } = useGLTF("/Avatar.glb");
	const { animations: northernSoulSpinDance } = useFBX(
		"/animations/NorthernSoulSpin.fbx"
	);

	northernSoulSpinDance[0].name = "NorthernSoul";

	const { animations: idleAnimation } = useFBX("/animations/Idle.fbx");
	idleAnimation[0].name = "Idle";

	const { animations: talkingOnPhone } = useFBX(
		"/animations/TalkingOnPhone.fbx"
	);
	talkingOnPhone[0].name = "TalkingOnPhone";

	const { actions } = useAnimations(
		[northernSoulSpinDance[0], idleAnimation[0], talkingOnPhone[0]],
		groupRef
	);
	useEffect(() => {
		actions[animation].reset().play();
		return () => {
			actions[animation].reset().fadeOut(0.6);
		};
	}, [animation]);
	return (
		<group {...props} ref={groupRef} dispose={null} castShadow>
			<primitive object={nodes.Hips} />
			<skinnedMesh
				geometry={nodes.EyeLeft.geometry}
				material={materials["Wolf3D_Eye.001"]}
				skeleton={nodes.EyeLeft.skeleton}
			/>
			<skinnedMesh
				geometry={nodes.EyeRight.geometry}
				material={materials["Wolf3D_Eye.001"]}
				skeleton={nodes.EyeRight.skeleton}
			/>
			<skinnedMesh
				geometry={nodes.Wolf3D_Body.geometry}
				material={materials["Wolf3D_Body.001"]}
				skeleton={nodes.Wolf3D_Body.skeleton}
			/>
			<skinnedMesh
				geometry={nodes.Wolf3D_Hair.geometry}
				material={materials["Wolf3D_Hair.001"]}
				skeleton={nodes.Wolf3D_Hair.skeleton}
			/>
			<skinnedMesh
				geometry={nodes.Wolf3D_Head.geometry}
				material={materials["Wolf3D_Skin.001"]}
				skeleton={nodes.Wolf3D_Head.skeleton}
			/>
			<skinnedMesh
				geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
				material={materials["Wolf3D_Outfit_Bottom.001"]}
				skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
			/>
			<skinnedMesh
				geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
				material={materials["Wolf3D_Outfit_Footwear.001"]}
				skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
			/>
			<skinnedMesh
				geometry={nodes.Wolf3D_Outfit_Top.geometry}
				material={materials["Wolf3D_Outfit_Top.001"]}
				skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
			/>
			<skinnedMesh
				geometry={nodes.Wolf3D_Teeth.geometry}
				material={materials["Wolf3D_Teeth.001"]}
				skeleton={nodes.Wolf3D_Teeth.skeleton}
			/>
		</group>
	);
}

useGLTF.preload("/Avatar.glb");
useFBX.preload("/animations/NorthernSoulSpin.fbx");
