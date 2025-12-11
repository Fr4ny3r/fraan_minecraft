
// 'use client';
// import '@justinribeiro/lite-youtube';
import { supabase } from '@/app/api/supabase'
import { Video } from '@/app/lib/data';
import Link from 'next/link';

 export default async function VideoYT(){

    const { data: lastVideo } = await supabase
        .from('ultimoVideo')
        .select("*")
  return (

//     <lite-youtube
//       videoid="8An9BRau7M4"
//       style={{ width: '100%', maxWidth: '560px', aspectRatio: '16/9', borderRadius: '12px', overflow: 'hidden' }}
//       title="Intro to Minecraft Projects by _Fraan_"
//     ></lite-youtube>
    <>
       {lastVideo?.map((video: Video) => (
        <Link key={video.id} href={`${video.src}`} target="_blank" rel="noopener noreferrer" className="overflow-hidden p-6 border-2 border-[var(--primary)]/60 hover:brightness-150 font-bold block w-full min-h-30 flex flex-col justify-center gap-2 bg-[var(--accent)]/12 dark:bg-background/80 backdrop-blur-[var(--blur)] rounded-lg overflow-hidden transition">

            <h2 className="text-[0.90rem] z-10 sm:text-lg w-fit">{video.title}</h2>
            <span className='relative md:absolute md:right-0 z-1 mt-2 md:mt-0 overflow-hidden rounded-lg md:rounded-0 text-xs'>
                <img src={`${video.img}`} alt="Youtube Logo" className="inline md:h-30 aspect-radio md:translate-x-2"/>
            </span>
            <div className='md:px-3 z-10 flex items-center gap-3 w-fit scale-90 md:scale-100'>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon hover:text-green-500 icon-tabler icons-tabler-outline icon-tabler-thumb-up"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon hover:text-red-500 icon-tabler icons-tabler-outline icon-tabler-thumb-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2 -2h-7a3 3 0 0 0 -3 3" /></svg>
                <span className='font-extrabold hover:text-[var(--primary)]'>Comenta :D</span>
            </div>
        </Link>
       ))}
    </>
     )
}