'use client'
import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useFrame } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    Evil_Hathattty_mesh_Evil_HatBLN_Hat_0: THREE.Mesh
    WandpCylinder1_Wandq_0: THREE.Mesh
    R_shoe_tongue_mesh_BLN_Shoe_tongue_0: THREE.Mesh
    Chest_piece_mesh_BLN_chest_piece_0: THREE.Mesh
    Right_Eyeball_Mesh_Lam_eyeball_0: THREE.Mesh
    pants_mesh_BLN_Pants_0: THREE.Mesh
    lower_coat_mesh_FK_BLN_Lower_coat_0: THREE.Mesh
    R_shoe_mesh_BLN_shoes_0: THREE.Mesh
    Upper_coat_mesh_BLN_upper_coat_0: THREE.Mesh
    upper_body_mesh_BLN_shirt_0: THREE.Mesh
    upper_body_mesh_BLN_Shirt_collar_0: THREE.Mesh
    Coat_collar_mesh_BLN_collar_piece_0: THREE.Mesh
    BookpolySurface5_Bookblinn1_0: THREE.Mesh
    BookBook_corner_mesh4_Booklam_book_corners_0: THREE.Mesh
    BookpolySurface20_BookBLN_Metal_parts_0: THREE.Mesh
    BookFront_glow_mesh_Booklambert8_0: THREE.Mesh
    BookpolySurface2_BookBLN_Book_covers_0: THREE.Mesh
    BookpCube10_Booklam_front_bits_0: THREE.Mesh
    BookpolySurface28_Booklam_back_bits_0: THREE.Mesh
    Evil_HatpPlane1_Evil_HatsolidShader_0: THREE.Mesh
  }
  materials: {
    Evil_HatBLN_Hat: THREE.MeshStandardMaterial
    PaletteMaterial001: THREE.MeshStandardMaterial
    BLN_Shoe_tongue: THREE.MeshStandardMaterial
    BLN_chest_piece: THREE.MeshStandardMaterial
    material_0: THREE.MeshStandardMaterial
    BLN_Pants: THREE.MeshStandardMaterial
    BLN_Lower_coat: THREE.MeshStandardMaterial
    BLN_shoes: THREE.MeshStandardMaterial
    BLN_upper_coat: THREE.MeshStandardMaterial
    BLN_shirt: THREE.MeshStandardMaterial
    BLN_Shirt_collar: THREE.MeshStandardMaterial
    BLN_collar_piece: THREE.MeshStandardMaterial
    Bookblinn1: THREE.MeshStandardMaterial
    Booklam_book_corners: THREE.MeshStandardMaterial
    BookBLN_Metal_parts: THREE.MeshStandardMaterial
    PaletteMaterial002: THREE.MeshStandardMaterial
    BookBLN_Book_covers: THREE.MeshStandardMaterial
    material_2: THREE.MeshStandardMaterial
    Booklam_back_bits: THREE.MeshStandardMaterial
    PaletteMaterial003: THREE.MeshStandardMaterial
  }
}

export default function WizardModel(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/wizard-transformed.glb') as GLTFResult
  const modelRef=useRef(null)
  useFrame((state,delta,xrFrame)=>{
modelRef.current.position.y=-1.5 +Math.sin(state.clock.elapsedTime)*0.15
  })
  return (
    <group {...props} dispose={null} position={[0,-1.5,0]} scale={[0.06,0.06,0.06]} rotation={[0.25,0,0]} ref={modelRef}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Evil_Hathattty_mesh_Evil_HatBLN_Hat_0.geometry}
        material={materials.Evil_HatBLN_Hat}
        position={[-1.057, 0, 0]}
        rotation={[0, 0.224, 0]}
        scale={0.832}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WandpCylinder1_Wandq_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-1.057, 0, 0]}
        rotation={[0, 0.224, 0]}
        scale={0.832}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.R_shoe_tongue_mesh_BLN_Shoe_tongue_0.geometry}
        material={materials.BLN_Shoe_tongue}
        position={[-1.057, 0, 0]}
        rotation={[0, 0.224, 0]}
        scale={0.832}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chest_piece_mesh_BLN_chest_piece_0.geometry}
        material={materials.BLN_chest_piece}
        position={[-1.057, 0, 0]}
        rotation={[0, 0.224, 0]}
        scale={0.832}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Right_Eyeball_Mesh_Lam_eyeball_0.geometry}
        material={materials.material_0}
        position={[-1.057, 0, 0]}
        rotation={[0, 0.224, 0]}
        scale={0.832}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pants_mesh_BLN_Pants_0.geometry}
        material={materials.BLN_Pants}
        position={[-1.057, 0, 0]}
        rotation={[0, 0.224, 0]}
        scale={0.832}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lower_coat_mesh_FK_BLN_Lower_coat_0.geometry}
        material={materials.BLN_Lower_coat}
        position={[-1.057, 0, 0]}
        rotation={[0, 0.224, 0]}
        scale={0.832}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.R_shoe_mesh_BLN_shoes_0.geometry}
        material={materials.BLN_shoes}
        position={[-1.057, 0, 0]}
        rotation={[0, 0.224, 0]}
        scale={0.832}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Upper_coat_mesh_BLN_upper_coat_0.geometry}
        material={materials.BLN_upper_coat}
        position={[-1.057, 0, 0]}
        rotation={[0, 0.224, 0]}
        scale={0.832}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.upper_body_mesh_BLN_shirt_0.geometry}
        material={materials.BLN_shirt}
        position={[-1.057, 0, 0]}
        rotation={[0, 0.224, 0]}
        scale={0.832}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.upper_body_mesh_BLN_Shirt_collar_0.geometry}
        material={materials.BLN_Shirt_collar}
        position={[-1.057, 0, 0]}
        rotation={[0, 0.224, 0]}
        scale={0.832}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Coat_collar_mesh_BLN_collar_piece_0.geometry}
        material={materials.BLN_collar_piece}
        position={[-1.057, 0, 0]}
        rotation={[0, 0.224, 0]}
        scale={0.832}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BookpolySurface5_Bookblinn1_0.geometry}
        material={materials.Bookblinn1}
        position={[-1.057, 0, 0]}
        rotation={[0, 0.224, 0]}
        scale={0.832}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BookBook_corner_mesh4_Booklam_book_corners_0.geometry}
        material={materials.Booklam_book_corners}
        position={[-1.057, 0, 0]}
        rotation={[0, 0.224, 0]}
        scale={0.832}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BookpolySurface20_BookBLN_Metal_parts_0.geometry}
        material={materials.BookBLN_Metal_parts}
        position={[-1.057, 0, 0]}
        rotation={[0, 0.224, 0]}
        scale={0.832}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BookFront_glow_mesh_Booklambert8_0.geometry}
        material={materials.PaletteMaterial002}
        position={[-1.057, 0, 0]}
        rotation={[0, 0.224, 0]}
        scale={0.832}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BookpolySurface2_BookBLN_Book_covers_0.geometry}
        material={materials.BookBLN_Book_covers}
        position={[-1.057, 0, 0]}
        rotation={[0, 0.224, 0]}
        scale={0.832}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BookpCube10_Booklam_front_bits_0.geometry}
        material={materials.material_2}
        position={[-1.057, 0, 0]}
        rotation={[0, 0.224, 0]}
        scale={0.832}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BookpolySurface28_Booklam_back_bits_0.geometry}
        material={materials.Booklam_back_bits}
        position={[-1.057, 0, 0]}
        rotation={[0, 0.224, 0]}
        scale={0.832}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Evil_HatpPlane1_Evil_HatsolidShader_0.geometry}
        material={materials.PaletteMaterial003}
        position={[-1.057, 0, 0]}
        rotation={[0, 0.224, 0]}
        scale={0.832}
      />
    </group>
  )
}

useGLTF.preload('/models/wizard-transformed.glb')