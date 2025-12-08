
'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';


export default function HeaderLink(){


    const SocialRed = ()=> {
      return (
    <div className='invert-100 bg dark:invert-0 w-50 h-fit xl:bottom-0 flex xl:hidden gap-4 justify-center items-center xl:right-0 xl:m-5 z-9000'>
        <a title='Youtube' href='https://www.youtube.com/@Fr4n007' target='_blank' rel='noopener noreferrer' className=' cursor-pointer hover:scale-110 transition'>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-youtube"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" /><path d="M10 9l5 3l-5 3z" /></svg>
        </a>
        <a title='Tiktok' href='https://www.tiktok.com/@fr4n.007' target='_blank' rel='noopener noreferrer' className='cursor-pointer hover:scale-110 transition'>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-tiktok"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z" /></svg>
        </a>
        <a title='Kick' href='https://kick.com/fr4n007' target='_blank' rel='noopener noreferrer' className='cursor-pointer hover:scale-110 transition'>
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-kick"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4h5v4h3v-2h2v-2h6v4h-2v2h-2v4h2v2h2v4h-6v-2h-2v-2h-3v4h-5z" /></svg>
        </a>
        <a title='Github' href='https://github.com/Fr4ny3r' target='_blank' rel='noopener noreferrer' className='cursor-pointer hover:scale-110 transition'>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
        </a>

    </div>

        )
    }

    const pathname = usePathname();
    return(
      <div className="flex fixed xl:absolute justify-between bg-[var(--primary)] xl:bg-[var(--accent)]/12 xl:dark:bg-background/80 items-center pr-4 w-screen xl:w-fit z-2000 h-15 left-0 top-0 m-0 xl:m-8 xl:border-2 xl:border-[var(--accent)]/30 p-3 xl:pr-4 xl:rounded-xl pl-2"> 
      {pathname != '/' ?
      <>
        <Link href={`/`} className='flex h-15 w-full font-extrabold items-center justify-between xl:text-[var(--primary)]/90 text-[1rem]'>
          <div className="flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative xl:text-[var(--primary)] icon icon-tabler icons-tabler-outline icon-tabler-chevron-compact-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13 20l-3 -8l3 -8" /></svg>
          Principal
          </div>
        </Link>
        <SocialRed/>
      </>  
      :
      <>
        <Link href={`/about`} className='flex pl-3 h-15 w-full xl:w-fit items-center justify-between font-extrabold rounded-xl xl:text-[var(--primary)]/90 text-[1rem]'>
          <div className="flex justify-center items-center">
          Sobre mi
          </div>
        </Link>
        <SocialRed/>
      </>
      }

      </div>
    )
}

