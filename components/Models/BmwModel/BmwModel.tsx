"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function BmwModel(props:any) {
  const { nodes, materials } = useGLTF("/models/2002_bmw_m3_e46.glb");
  const modelRef = useRef<any>(null);
  useFrame((state, delta, xrFrame) => {
    modelRef.current.rotation.y += 0.002;

  });
  return (
    <group {...props} ref={modelRef} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore

          geometry={nodes.Object_6.geometry}
          material={materials.Model001_Material001}
        />
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore

          geometry={nodes.Object_8.geometry}
          material={materials.Model001_Material002}
        />
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore

          geometry={nodes.Object_10.geometry}
          material={materials.Model001_Material003}
        />
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore

          geometry={nodes.Object_12.geometry}
          material={materials.Model001_Material004}
        />
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore

          geometry={nodes.Object_14.geometry}
          material={materials.Model001_Material005}
        />
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore

          geometry={nodes.Object_16.geometry}
          material={materials.Model001_Material006}
        />
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore

          geometry={nodes.Object_18.geometry}
          material={materials.Model001_Material007}
        />
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore

          geometry={nodes.Object_20.geometry}
          material={materials.Model001_Material008}
        />
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore

          geometry={nodes.Object_22.geometry}
          material={materials.Model001_Material009}
        />
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore

          geometry={nodes.Object_24.geometry}
          material={materials.Model001_Material010}
        />
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore

          geometry={nodes.Object_26.geometry}
          material={materials.Model001_Material011}
        />
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore

          geometry={nodes.Object_28.geometry}
          material={materials.Model001_Material012}
        />
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore

          geometry={nodes.Object_30.geometry}
          material={materials.Model001_Material013}
        />
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore

          geometry={nodes.Object_32.geometry}
          material={materials.Model001_Material014}
        />
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore

          geometry={nodes.Object_34.geometry}
          material={materials.Model001_Material015}
        />
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore

          geometry={nodes.Object_36.geometry}
          material={materials.Model001_Material016}
        />
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore

          geometry={nodes.Object_38.geometry}
          material={materials.Model001_Material017}
        />
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore

          geometry={nodes.Object_40.geometry}
          material={materials.Model001_Material018}
        />
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore

          geometry={nodes.Object_42.geometry}
          material={materials.Model001_Material019}
        />
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore

          geometry={nodes.Object_44.geometry}
          material={materials.Model001_Material020}
        />
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore

          geometry={nodes.Object_46.geometry}
          material={materials.Model001_Material021}
        />
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore

          geometry={nodes.Object_48.geometry}
          material={materials.Model001_Material022}
        />
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore

          geometry={nodes.Object_50.geometry}
          material={materials.Model001_Material023}
        />
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore

          geometry={nodes.Object_52.geometry}
          material={materials.Model001_Material024}
        />
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore

          geometry={nodes.Object_54.geometry}
          material={materials.Model001_Material025}
        />
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore

          geometry={nodes.Object_56.geometry}
          material={materials.Model001_Material026}
        />
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore

          geometry={nodes.Object_58.geometry}
          material={materials.Model001_Material027}
        />
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore

          geometry={nodes.Object_60.geometry}
          material={materials.Model001_Material028}
        />
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore

          geometry={nodes.Object_62.geometry}
          material={materials.Model001_Material029}
        />
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore

          geometry={nodes.Object_64.geometry}
          material={materials.Model001_Material030}
        />
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore

          geometry={nodes.Object_66.geometry}
          material={materials.Model001_Material031}
        />
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore

          geometry={nodes.Object_68.geometry}
          material={materials.Model001_Material032}
        />
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore

          geometry={nodes.Object_70.geometry}
          material={materials.Model001_Material033}
        />
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore

          geometry={nodes.Object_72.geometry}
          material={materials.Model001_Material034}
        />
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore

          geometry={nodes.Object_74.geometry}
          material={materials.Model001_Material035}
        />
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore

          geometry={nodes.Object_76.geometry}
          material={materials.Model001_Material036}
        />
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore

          geometry={nodes.Object_78.geometry}
          material={materials.Model001_Material037}
        />
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore

          geometry={nodes.Object_80.geometry}
          material={materials.Model001_Material038}
        />
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore

          geometry={nodes.Object_82.geometry}
          material={materials.Model001_Material039}
        />
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore

          geometry={nodes.Object_84.geometry}
          material={materials.Model001_Material040}
        />
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore

          geometry={nodes.Object_86.geometry}
          material={materials.Model001_Material041}
        />
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore

          geometry={nodes.Object_88.geometry}
          material={materials.Model001_Material042}
        />
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore

          geometry={nodes.Object_90.geometry}
          material={materials.Model001_Material043}
        />
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore

          geometry={nodes.Object_92.geometry}
          material={materials.Model001_Material044}
        />
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore

          geometry={nodes.Object_94.geometry}
          material={materials.Model001_Material045}
        />
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore

          geometry={nodes.Object_96.geometry}
          material={materials.Model001_Material046}
        />
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore

          geometry={nodes.Object_98.geometry}
          material={materials.Model001_Material047}
        />
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore

          geometry={nodes.Object_100.geometry}
          material={materials.Model001_Material048}
        />
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore

          geometry={nodes.Object_102.geometry}
          material={materials.Model001_Material049}
        />
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore

          geometry={nodes.Object_104.geometry}
          material={materials.Model001_Material050}
        />
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore

          geometry={nodes.Object_106.geometry}
          material={materials.Model001_Material051}
        />
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore

          geometry={nodes.Object_108.geometry}
          material={materials.Model001_Material052}
        />
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore

          geometry={nodes.Object_110.geometry}
          material={materials.Model001_Material053}
        />
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore

          geometry={nodes.Object_112.geometry}
          material={materials.Model001_Material054}
        />
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore

          geometry={nodes.Object_114.geometry}
          material={materials.Model001_Material055}
        />
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore

          geometry={nodes.Object_116.geometry}
          material={materials.Model001_Material056}
        />
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore

          geometry={nodes.Object_118.geometry}
          material={materials.Model001_Material057}
        />
        <mesh
          castShadow
          receiveShadow
          // @ts-ignore

          geometry={nodes.Object_120.geometry}
          material={materials.Model001_Material058}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/2002_bmw_m3_e46.glb");
