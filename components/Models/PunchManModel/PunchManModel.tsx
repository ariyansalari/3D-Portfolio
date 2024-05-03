"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function  PunchManModel(props: any) {
  const { nodes, materials } = useGLTF("/models/one_punch_man_-_saitama.glb");
  const modelRef = useRef<any>(null);
  useFrame((state, delta, xrFrame) => {
    modelRef.current.position.y =
      -1.5 + Math.sin(state.clock.elapsedTime) * 0.15;
  });
  return (
    <group
      {...props}
      dispose={null}
      position={[0, -1.5, 0]}
      scale={[0.03, 0.03, 0.03]}
      rotation={[0.25, 0, 0]}
      ref={modelRef}
    >
      <group position={[-0.974, 0.721, 0.478]} rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[0.959, -37.713, -0.721]}>
          <mesh
            castShadow
            receiveShadow
            // @ts-ignore

            geometry={nodes.Box007_allo_0.geometry}
            // @ts-ignore

            material={materials.allo}
          />
          <mesh
            castShadow
            receiveShadow
            // @ts-ignore

            geometry={nodes.Box007_blanco_0.geometry}
            // @ts-ignore

            material={materials.blanco}
          />
          <mesh
            castShadow
            receiveShadow
            // @ts-ignore

            geometry={nodes.Box007_red_0.geometry}
            // @ts-ignore

            material={materials.material}
          />
          <mesh
            castShadow
            receiveShadow
            // @ts-ignore

            geometry={nodes.Box007_grey_0.geometry}
            // @ts-ignore

            material={materials.grey}
          />
          <mesh
            castShadow
            receiveShadow
            // @ts-ignore

            geometry={nodes.Box007_skin_0.geometry}
            // @ts-ignore

            material={materials.skin}
          />
          <mesh
            castShadow
            receiveShadow
            // @ts-ignore

            geometry={nodes.Box007_blue_0.geometry}
            // @ts-ignore

            material={materials.blue}
          />
          <mesh
            castShadow
            receiveShadow
            // @ts-ignore

            geometry={nodes.Box007_gold_0.geometry}
            // @ts-ignore

            material={materials.gold}
          />
          <mesh
            castShadow
            receiveShadow
            // @ts-ignore

            geometry={nodes.Box007_black_mate_0.geometry}
            // @ts-ignore

            material={materials.black_mate}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/one_punch_man_-_saitama.glb");
