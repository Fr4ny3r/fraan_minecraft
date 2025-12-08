import Link from 'next/link';

export default function About() {
    return (
      <>
      <section className="animFade z-1000 relative bg-[var(--accent)]/12 dark:bg-background/80 backdrop-blur-[var(--blur)] rounded-lg p-8 py-12 max-w-128">
        <h1 className="text-2xl md:text-4xl relative -left-2 font-bold mb-4"><strong className="rounded-md bg-[var(--secondary)] px-3 py-2">_Fraan_</strong> Minecraft</h1>
        <p className="mb-7 mt-8 text-justify text-sm md:text-base">
          Bienvenido a mi sitio web personal, donde comparto mi pasión por Minecraft y mis proyectos relacionados con este increíble juego. Aquí encontrarás información sobre mis aventuras en el mundo de Minecraft, así como detalles sobre los proyectos en los que estoy trabajando actualmente. ¡Explora, diviértete y no dudes en contactarme si tienes alguna pregunta o quieres colaborar en algo genial!
        </p>
        <h2 className="text-lg md:text-2xl font-semibold mb-4">Habilidades</h2>
        <ul className="list-disc list-inside mb-6 text-sm md:text-base">
          <li>Experiencia en Minecraft en Java Edition</li>
          <li>Desarrollo de Datapacks</li>
          <li>Creación y diseño de mapas</li>
          <li>Desarrollo de Mods</li>
          <li>Creacion de Texture Packs</li>
        </ul>
      </section>
      </>
    );
}