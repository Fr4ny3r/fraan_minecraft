// app/proyectos/[nombreProyecto]/page.jsx

import { supabase } from '@/app/api/supabase'
import { notFound } from 'next/navigation';
import { allModify, Productos } from '@/app/lib/data';
import Link from 'next/link'
import Image from 'next/image'

export default async function ProjectPage({ params }: { params: { nombreProyecto: string } }) {
  // 1. CORRECCIÓN: Desestructura el nombre que coincide con la carpeta.
  const { nombreProyecto } = await params;


  const { data: producto } = await supabase
    .from('productos')
    .select("*")
    .eq('slug', `${nombreProyecto}`)
    .single();
  if (!producto) {
    return notFound();
  }

  return (
    <section className="contenedor-scroll-personalizado xl:overflow-x-hidden xl:overflow-smooth xl:overflow-y-auto z-1000 relative bg-[var(--accent)]/12 dark:bg-background/80 backdrop-blur-[var(--blur)] rounded-lg p-8 py-12 w-full xl:max-w-128 xl:max-h-185">
      <a id="ancorDownload" href={`${producto.filePath}`} title='Descargar' className='absolute right-8 md:right-6 top-9 bg-[var(--accent)]/10 p-2 md:p-3 rounded-xl invert-100 z-100 dark:invert-0 hover:opacity-50 cursor-pointer' download>
        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-download"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" /><path d="M7 11l5 5l5 -5" /><path d="M12 4l0 12" /></svg>
      </a>
      <h1 className="relative -left-2 font-bold mb-4"><strong className="text-2xl md:text-4xl rounded-md bg-[var(--secondary)] px-3 py-2">{producto?.title}</strong></h1>
      <div className="text-lg md:text-2xl relative -left-2 font-bold pb-3 md:py-4 md:left-1 text-[var(--foreground)]"><span className="text-base text-[var(--accent)]/60 relative">Tipo: </span>{producto?.type}</div>
      <p className="mb-7 mt-0 md:mt-4 text-justify text-sm md:text-base">
        {producto?.largeDescription}
      </p>
      <h2 className="text-lg md:text-2xl font-semibold mb-5">Modificaciones : <span className="rounded-md bg-[var(--secondary)] px-3 py-2">{producto.mainModify}</span></h2>
      <ul className="mb-6 grid grid-cols-[1fr_1fr_1fr] grid-rows-auto">
        {producto?.allModify.lenght != 0 ?
          (producto?.allModify.map((p : allModify) => (
            <li key={p.name} className="bg-[var(--secondary)] pt-2 flex flex-col gap-1 rounded-lg m-1 mb-2 items-center p-2">
              <div className="hidden md:flex">
                {Image ?
                  <Image
                    width={100}
                    height={100}
                    src={`${p.img}`}
                    alt={`${p.name}`}
                  />
                  :
                  <div className="bg-background/20 w-full h-[100px]">
                  </div>
                }
              </div>
              <div className="flex md:hidden">
                {Image ?
                  <Image
                    width={70}
                    height={70}
                    src={`${p.img}`}
                    alt={`${p.name}`}
                  />
                  :
                  <div className="bg-background/20 w-full h-[100px]">
                  </div>
                }
              </div>
              <span className="mt-2 w-full font-bold text-sm md:text-base">{p.name}</span>
              <span className="w-full text-xs md:text-sm">{p.char}</span>
            </li>
          )))
          :
          (
            <div>aas</div>
          )}
      </ul>

    </section>

  );
}