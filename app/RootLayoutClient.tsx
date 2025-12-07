
import { Suspense } from 'react'
import { supabase } from './api/supabase'
import ProductList from './ProductList.tsx'
import Modelo3D from './Modelo3D.tsx'
import VideoYT from './VideoYT.tsx'
import Link from 'next/link';
import Image from 'next/image';

export default function RootLayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <div className="relative flex flex-col xl:flex-row gap-4 min-h-screen max-w-[1980px] items-center justify-around px-10">
    <Modelo3D /> 
      <main className="relative max-w-[680px] max-h-[1080px] flex flex-col gap-4 z-100">
        <div className='bg-[var(--accent)]/12 transition dark:bg-background/80 backdrop-blur-[var(--blur)] p-8 rounded-lg'>
        <h1 className="text-4xl font-bold relative -left-3 flex justify-between items-center w-full">
          Holaa! soy Fran :D
        </h1>
          <span className='text-white text-lg mt-4 block w-fit bg-[var(--primary)] p-2 rounded-md font-extrabold'>¡Bienvenid@! aqui comparto mi pasión por Minecraft.</span>
          <ProductList />
        </div>
        <div className='relative justify-center hidden xl:flex pt-12'>
        <span className='absolute -top-0 left-10 translate-y-1/2 font-bold'>Ultimo video de YT</span>
          <Suspense fallback={<div className="animBg dark:invert-1 bg-white/5" style={{ width: '100%', maxWidth: '560px', aspectRatio: '16/9', borderRadius: '12px', overflow: 'hidden' }}></div>}>
            <VideoYT />            
          </Suspense>
        </div>
      </main>
        {children}  
    <div className='absolute invert-100 dark:invert-0 w-50 h-fit bottom-0 flex gap-4 justify-center itmes-center right-0 m-5 z-9000'>
        <a title='Youtube' href='https://www.youtube.com/@Fr4n007' target='_blank' rel='noopener noreferrer' className='cursor-pointer hover:scale-110 transition'>
            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-youtube"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" /><path d="M10 9l5 3l-5 3z" /></svg>
        </a>
        <a title='Tiktok' href='https://www.tiktok.com/@fr4n.007' target='_blank' rel='noopener noreferrer' className='cursor-pointer hover:scale-110 transition'>
            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-tiktok"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z" /></svg>
        </a>
        <a title='Kick' href='https://kick.com/fr4n007' target='_blank' rel='noopener noreferrer' className='cursor-pointer hover:scale-110 transition'>
          <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-kick"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4h5v4h3v-2h2v-2h6v4h-2v2h-2v4h2v2h2v4h-6v-2h-2v-2h-3v4h-5z" /></svg>
        </a>
        <a title='Github' href='https://github.com/Fr4ny3r' target='_blank' rel='noopener noreferrer' className='cursor-pointer hover:scale-110 transition'>
            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
        </a>

    </div>
    </div>
  );
}