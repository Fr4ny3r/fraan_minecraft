// /app/RootLayoutClient.tsx

'use client'; // <-- **AQUÍ VA AHORA**

import { Model } from './canvas/Model';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import Link from 'next/link';
import Image from 'next/image';
import '@justinribeiro/lite-youtube';

// (Continúa con el resto de tu código)

export default function RootLayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const products = [
    {
      id: 1,
      title: "Datapack extremo xd",
      type: "Datapack",
      description: "es mu muy pero muy dificil xd",
      filePath: "/datapack_extremo.zip",
    },
//    {
//      id: 2,
//      title: "Mapa aventura",
//      type: "Mapa",
//      description: "un mapa de aventura super chido",
//    },
//    {
//      id: 3,
//      title: "Mod de herramientas",
//      type: "Mod",
//      description: "agrega herramientas nuevas al juego",
//    },
//    {
//      id: 4,
//      title: "Paquete de texturas HD",
//      type: "Recurso",
//      description: "mejora los graficos del juego a HD",
//    },
  ];

  return (
    <div className="relative flex flex-col xl:flex-row gap-4 min-h-screen max-w-[1980px] items-center justify-around px-10 bg-background text-foreground">
        
    <Canvas
      className="z-50 hidden md:block opacity-80 -translate-1/2 xl:border-4 xl:border-[var(--accent)]/60"
      style={{position: "absolute" , top: "50%", left: "50%",  width: "100vw", height: "100vh"}}
     >
      <Stage environment={"park"}  intensity={0.1} shadows={true} adjustCamera={true}>
        <Model scale={0.4} rotation={[10, 10, 5]}/>
      </Stage>
      <OrbitControls enableZoom={false} autoRotateSpeed={4} />
    </Canvas> 
      <main className="relative max-w-[720px] max-h-[1080px] flex flex-col gap-4 z-100">
        <div className='dark:bg-background/80 backdrop-blur-[0.5rem] p-8 rounded-lg'>
        <h1 className="text-3xl font-bold flex justify-between items-center w-[720px]">
          Holaa! soy Fran :D
          <Link href={`/about`} className='text-[var(--primary)]/90 text-[1rem] right-15 relative '>About <span className='font-extrabold text-4xl'>→</span></Link>
        </h1>
          <span className='text-white text-lg mt-4 block w-fit bg-[var(--primary)] p-2 rounded-md font-extrabold'>¡Bienvenid@! aqui comparto mi pasión por Minecraft.</span>
        <div className='relative  mt-10 text-justify space-y-4'>
          <ul className='space-y-2 '>

            <li className='absolute text-sm opacity-60 font-extrabold -left-2 -top-11 grid grid-cols-[auto_200px_80px_1fr] items-center w-full gap-4 flex-wrap p-4 rounded-lg'>
              <span className=''>id</span>
              <span>titulo</span>
              <span>tipo</span>
              <p>Descripcion</p>
            </li>

            {products.map((product) => (
              <li key={product.id} title='Ver Detalles' className='grid grid-cols-[auto_200px_80px_1fr_auto] hover:scale-[1.01] cursor-pointer transition items-center w-full gap-4 flex-wrap bg-[var(--secondary)] p-4 rounded-lg'>
                <span className=''>{product.id}</span>
                <span>{product.title}</span>
                <span>{product.type}</span>
                <p className='relative text-ellipsis max-h-[30px] w-56 max-w-xs truncate'>{product.description}</p>
                <a href={product.filePath} className='invert-100 dark:invert-0' download>
                  <Image src={"/download.svg"} title='Descargar' alt={"random"} width={26} height={26} className='cursor-pointer'/>
                </a>
              </li>
            ))}

          </ul>
        </div>
        </div>
        <div className='flex justify-center'>
            <lite-youtube
              videoid="8An9BRau7M4"
              style={{ width: '100%', maxWidth: '560px', aspectRatio: '16/9', borderRadius: '12px', overflow: 'hidden' }}
              title="Intro to Minecraft Projects by _Fraan_"
            ></lite-youtube>
        </div>
      </main>
        {children}
    <div className='absolute w-50 h-fit bottom-0 flex gap-4 justify-center itmes-center right-0 m-5 z-9000'>
        <a title='Youtube' href='https://www.youtube.com/@Fr4n007' target='_blank' rel='noopener noreferrer' className='cursor-pointer hover:scale-110 transition'>
            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-youtube"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" /><path d="M10 9l5 3l-5 3z" /></svg>
        </a>
        <a title='Tiktok' href='https://www.tiktok.com/@fr4n.007' target='_blank' rel='noopener noreferrer' className='cursor-pointer hover:scale-110 transition'>
            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-tiktok"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z" /></svg>
        </a>
        <a title='Hithub' href='https://github.com/Fr4ny3r' target='_blank' rel='noopener noreferrer' className='cursor-pointer hover:scale-110 transition'>
            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
        </a>
    </div>
    </div>
  );
}