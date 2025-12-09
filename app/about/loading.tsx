// app/proyectos/[nombreProyecto]/page.jsx


export default function ProjectPage() {

    return (
      <>
      <section className="animFade contenedor-scroll-personalizado overflow-x-hidden overflow-smooth overflow-y-auto z-1000 relative bg-[var(--accent)]/12 dark:bg-background/80 backdrop-blur-[var(--blur)] rounded-lg p-8 py-12 128 h-185">
        <h1 className="text-1xl relative -left-2 font-bold mb-4"><strong className="animate-pulse text-4xl rounded-md bg-[var(--secondary)] px-30 py-5"></strong></h1>
         <div className="text-2xl relative -left-2 font-bold py-4 left-1 text-[var(--foreground)]"><span className="text-base text-[var(--accent)]/60 relative"> </span><span className="animate-pulse rounded-md bg-[var(--secondary)] ml-3 px-15 py-2"></span></div>
        <p className="animate-pulse bg-white/5 mb-7 mt-4 w-112 h-23 rouded-lg text-justify">
        </p>
        <h2 className="text-2xl font-semibold mb-5"> <span className="animate-pulse rounded-md bg-[var(--secondary)] ml-3 px-20 py-2"></span></h2>
        <ul className="mb-6 grid grid-cols-[1fr_1fr_1fr] grid-rows-auto">
            <li className="animate-pulse bg-[var(--secondary)] pt-2 flex flex-col gap-1 rounded-lg m-1 mb-2 items-center p-2">
                <div className="bg-background/20 w-full h-[100px]">
                </div>
                <span className="mt-2 w-full font-bold py-3 rounded-md bg-[var(--secondary)]"></span>
                <span className="w-full text-sm py-3 rounded-md bg-[var(--secondary)]"></span>
            </li>
            <li className="animate-pulse bg-[var(--secondary)] pt-2 flex flex-col gap-1 rounded-lg m-1 mb-2 items-center p-2">
                <div className="bg-background/20 w-full h-[100px]">
                </div>
                <span className="mt-2 w-full font-bold py-3 rounded-md bg-[var(--secondary)]"></span>
                <span className="w-full text-sm py-3 rounded-md bg-[var(--secondary)]"></span>
            </li>
            <li className="animate-pulse bg-[var(--secondary)] pt-2 flex flex-col gap-1 rounded-lg m-1 mb-2 items-center p-2">
                <div className="bg-background/20 w-full h-[100px]">
                </div>
                <span className="mt-2 w-full font-bold py-3 rounded-md bg-[var(--secondary)]"></span>
                <span className="w-full text-sm py-3 rounded-md bg-[var(--secondary)]"></span>
            </li>
        </ul>
        <p className="animate-pulse bg-white/5 mb-7 mt-4 w-112 h-23 rouded-lg text-justify">
        </p>
      </section>

      </>

    );
}