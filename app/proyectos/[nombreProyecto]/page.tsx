// app/proyectos/[nombreProyecto]/page.jsx

import { supabase } from '@/app/api/supabase'
import { notFound } from 'next/navigation';
import Link from 'next/link'

export default async function ProjectPage({ params }) {
    // 1. CORRECCIÓN: Desestructura el nombre que coincide con la carpeta.
    const { nombreProyecto } = await params;


    const { data: producto } = await supabase
        .from('productos')
        .select("*")
        .eq('slug', `${nombreProyecto }`) 
        .single();
        
    console.log(nombreProyecto)
    if (!producto) {
       return notFound(); 
    }

    return (
      <>
    <Link href={`/`} className='flex z-2000 h-15 font-extrabold items-center justify-center text-[var(--primary)]/90 text-[1rem] left-0 top-0 m-8 border-2 border-[var(--accent)]/30 p-3 pr-4 rounded-md pl-2 absolute '>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative text-[var(--primary)] icon icon-tabler icons-tabler-outline icon-tabler-chevron-compact-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13 20l-3 -8l3 -8" /></svg>
          Home
    </Link>
      <div className="animFade z-1000 relative bg-[var(--accent)]/12 dark:bg-background/80 backdrop-blur-[var(--blur)] rounded-lg p-8 py-12 max-w-128">
            <h1>Proyecto: {producto.title}</h1>
            <p className='mt-4'>
                **ID:** {producto.id} | **Tipo:** {producto.type}
            </p>
            <p className='mt-4'>
                Aquí va la información detallada de: **{producto.description}**
            </p>
        </div>   
      </>

    );
}