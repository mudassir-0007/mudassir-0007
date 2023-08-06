import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Chat = () => {
  const chaticon = useGLTF("./Objects/Chat/Chat.gltf");
  return (
    <primitive object={chaticon.scene} scale={2.5} position={[0, -2, 0]} />
  );
};

const ChatCanvas = ({ isMobile }) => {
  return (
    <Canvas
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: isMobile ? 62 : 52,
        near: 0.1,
        far: 200,
        position: [0, 5, 1],
      }}
    >
      <OrbitControls
        autoRotate
        autoRotateSpeed={5}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <ambientLight />
      <pointLight position={[4, 4, 4]} />
      <Chat />
    </Canvas>
  );
};

export default ChatCanvas;
