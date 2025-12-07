import Link from 'next/link';

export default function About() {
    return (
      <>
    <Link href={`/`} className='flex z-2000 h-15 font-extrabold items-center justify-center text-[var(--primary)]/90 text-[1rem] left-0 top-0 m-8 border-2 border-[var(--accent)]/30 p-3 pr-4 rounded-md pl-2 absolute '>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative text-[var(--primary)] icon icon-tabler icons-tabler-outline icon-tabler-chevron-compact-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13 20l-3 -8l3 -8" /></svg>
          Home
    </Link>
      <div className="animFade z-1000 relative bg-[var(--accent)]/12 dark:bg-background/80 backdrop-blur-[var(--blur)] rounded-lg p-8 py-12 max-w-128">
        <h1 className="text-4xl relative -left-2 font-bold mb-4"><strong className="rounded-md bg-[var(--secondary)] px-3 py-2">_Fraan_</strong> Minecraft</h1>
        <p className="mb-7 mt-8 text-justify">
          Bienvenido a mi sitio web personal, donde comparto mi pasión por Minecraft y mis proyectos relacionados con este increíble juego. Aquí encontrarás información sobre mis aventuras en el mundo de Minecraft, así como detalles sobre los proyectos en los que estoy trabajando actualmente. ¡Explora, diviértete y no dudes en contactarme si tienes alguna pregunta o quieres colaborar en algo genial!
        </p>
        <h2 className="text-2xl font-semibold mb-4">Habilidades</h2>
        <ul className="list-disc list-inside mb-6">
          <li>Experiencia en Minecraft en Java Edition</li>
          <li>Desarrollo de Datapacks</li>
          <li>Creación y diseño de mapas</li>
          <li>Desarrollo de Mods</li>
          <li>Creacion de Texture Packs</li>
        </ul>
      </div>
      </>
    );
}