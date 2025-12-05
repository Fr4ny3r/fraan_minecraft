"use client";

import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber'; 
import { useRef } from 'react';

/**
 * Componente que carga un modelo GLTF y lo anima para que rote infinitamente
 * sobre su propio eje Y (vertical).
 */
export function Model(props) {
  // 1. Crea una referencia para el objeto 3D
  // Esto nos permite acceder a sus propiedades (como 'rotation')
  const meshRef = useRef();

  // Carga el modelo (asegúrate de que la ruta sea correcta)
  const { scene } = useGLTF('/grass.gltf');
  
  // 2. Usa el hook useFrame para crear un bucle de animación
  useFrame((state, delta) => {
    // Verificamos que la referencia al objeto exista
    if (meshRef.current) {
        // Incrementamos la rotación en el eje Y (el eje vertical)
        // delta * 1.5 controla la velocidad (1.5 es una buena velocidad media)
        meshRef.current.rotation.y += delta * 0.0035;
    }
  });

  return (
    // 3. Conectamos la referencia al objeto primitivo y aplicamos las props
    <primitive object={scene}  ref={meshRef} {...props} />
  );
}