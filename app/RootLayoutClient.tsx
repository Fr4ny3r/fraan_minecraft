
import { Suspense } from 'react'
import { supabase } from './api/supabase'
import ProductList from './ProductList'
import Modelo3D from './Modelo3D'
import VideoYT from './VideoYT'
import HeaderLink from './HeaderLink'
import Link from 'next/link';
import Image from 'next/image';

export default function RootLayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <section className="relative flex flex-col md:flex-row gap-8 max-w-[1980px] w-screen xl:h-[100dvh]  items-center md:justify-center px-10">
      <HeaderLink />
      <Modelo3D />
      <div className="relative pb-10 xl:pb-0 md:top-20 xl:top-0 xl:py-0 md:overflow-hidden w-screen md:w-full md:max-w-[680px] flex flex-col z-100 gap-10 xl:gap-0">
        <div className='bg-[var(--accent)]/12 transition mt-20 md:mt-0 dark:bg-background/80 backdrop-blur-[var(--blur)] p-8 md:rounded-lg flex flex-col justify-center xl:justify-start '>
          <h1 className="text-2xl sm:text-4xl font-bold relative xl:-left-3 flex justify-center md:justify-start items-center w-full">
            Holaa! soy <span className="ml-3 md:ml-2 rounded-lg scale-[1.03] md:scale-[1] text-2xl sm:text-5xl font-bold bg-[var(--secondary)] p-2">Fran :D</span>
          </h1>
          <span className='text-white text-[0.85rem] relative left-1/2 -translate-x-1/2 md:-translate-x-0 md:left-0 sm:text-lg mt-4 block w-fit bg-[var(--primary)] p-2 rounded-md font-extrabold'>¡Bienvenid@! aqui comparto mi pasión por Minecraft.</span>
          <ProductList />
        </div>
        <div className='relative justify-center items-center gap-10 sm:gap-0 flex flex-col xl:pt-12'>
          <div>
            <div className="block xl:hidden">
              {children}
            </div>
          </div>
          <div className="relative w-[80%] md:w-full flex-col justify-center items-center mt-0 sm:mt-8 xl:mt-0">
            <span className='relative -top-3 left-0 w-full mx-3 font-bold'>Ultimo video de YT</span>
            <Suspense fallback={<div className="animate-pulse bg-white/5 invert-100 dark:invert-0 h-30" style={{ width: '100%', borderRadius: '12px', overflow: 'hidden' }}></div>}>
              <VideoYT />
            </Suspense>
          </div>
        </div>
      </div>
      <div className="hidden xl:block">
        {children}
      </div>
      <div className='absolute invert-100 dark:invert-0 w-50 h-fit bottom-0 hidden xl:flex gap-4 justify-center items-center right-0 m-5 z-9000'>
        <a title='Youtube' href='https://www.youtube.com/@Fr4n007' target='_blank' rel='noopener noreferrer' className='cursor-pointer hover:scale-110 transition'>
          <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-youtube"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" /><path d="M10 9l5 3l-5 3z" /></svg>
        </a>
        <a title='Tiktok' href='https://www.tiktok.com/@fr4n.007' target='_blank' rel='noopener noreferrer' className='cursor-pointer hover:scale-110 transition'>
          <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-tiktok"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z" /></svg>
        </a>
        <a title='Kick' href='https://kick.com/fr4n007' target='_blank' rel='noopener noreferrer' className='cursor-pointer hover:scale-110 transition'>
          <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-kick"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 4h5v4h3v-2h2v-2h6v4h-2v2h-2v4h2v2h2v4h-6v-2h-2v-2h-3v4h-5z" /></svg>
        </a>
        <a title='Github' href='https://github.com/Fr4ny3r' target='_blank' rel='noopener noreferrer' className='cursor-pointer hover:scale-110 transition'>
          <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
        </a>

      </div>
    </section>
  );
}