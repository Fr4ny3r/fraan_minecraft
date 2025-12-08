
import { supabase } from './api/supabase'
import { createClient } from '@/utils/supabase/server'
import { Suspense } from 'react'
//import { cookies } from 'next/headers'
import Link from 'next/link';


async function ProductList (){

  //const cookieStore = await cookies()
  //const supabase = createClient(cookieStore)

  const { data: productos } = await supabase.from('productos').select()

  const Registro = ()=>{
    return (
      <>
            {productos.lenght != 0 ? (productos.map((product) => (
              <li key={product.id} title='Ver Detalles' className=''>
                <Link href={`/proyectos/${product.slug}`} className='z-200 grid grid-cols-[3px_1fr] grid-rows-[1fr_auto] md:grid-rows-[1fr] md:grid-cols-[auto_180px_80px_1fr_auto] hover:brightness-150 hover:cursor-pointer transition items-center w-full gap-4 flex-wrap bg-[var(--secondary)] p-4'>
                <span className='flex'>{product.id}<span className="flex md:hidden">:</span></span>
                <span className='text-xl font-extrabold md:font-normal md:text-base'>{product.title}</span>
                <span className="col-start-1 md:col-start-3 flex gap-1 font-bold md:font-normal -translate-y-1/1 md:translate-y-0"><span className="font-normal flex md:hidden">tipo:</span>{product.type}</span>
                <p className='relative hidden md:flex text-ellipsis max-h-[30px] w-56 max-w-xs truncate'>{product.description}</p>
                <button id="ancorDownload" href={product.filePath} height={20} title='Descargar' className='bg-[var(--accent)]/10 p-4 translate-y-1/3 md:p-1 md:translate-y-0 row-end-2 rounded-xl col-start-3 md:col-start-5 invert-100 z-100 dark:invert-0 hover:opacity-50 cursor-pointer' download>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-download"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" /><path d="M7 11l5 5l5 -5" /><path d="M12 4l0 12" /></svg>
                </button>                  
                </Link>

              </li>
            ))) : (<div>no hay registros</div>)}
      </>

      )
  }


    return (
        <div className='relative mt-8 md:mt-18 text-justify space-y-4'>
          <ul className='space-y-2 '>

            <li className='absolute text-xs md:text-sm opacity-60 font-extrabold -left-2 -top-11 hidden md:grid md:grid-cols-[auto_180px_80px_1fr] items-center w-full gap-4 flex-wrap p-4 rounded-lg'>
              <span className=''>id</span>
              <span>titulo</span>
              <span>tipo</span>
              <p>Descripcion</p>
            </li>
            <div className="rounded-lg overflow-hidden after:bg-white space-y-[1.5px] space-x-3">
              <Suspense fallback={<div>Cargando...</div>}>
                <Registro />
              </Suspense>
            </div>
          </ul>
        </div>
      )
  }

export default ProductList

 