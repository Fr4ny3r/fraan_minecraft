import Link from 'next/link';

export default function About() {
    return (
      <>
      <section className="animFade contenedor-scroll-personalizado xl:overflow-x-hidden xl:overflow-smooth xl:overflow-y-auto w-full xl:max-w-128 xl:max-h-145 z-1000 relative bg-[var(--accent)]/12 dark:bg-background/80 backdrop-blur-[var(--blur)] rounded-lg p-8 py-12 max-w-128">
        <h1 className="text-2xl md:text-4xl relative -left-2 font-bold mb-4"><strong className="rounded-md bg-[var(--secondary)] px-3 py-2">_Fraan_</strong> Minecraft</h1>
        <p className="mb-7 mt-8 text-justify text-sm md:text-base">
          Bienvenido a mi sitio web personal, donde comparto mi pasión por Minecraft y mis proyectos relacionados con este increíble juego. Aquí encontrarás información sobre mis aventuras en el mundo de Minecraft, así como detalles sobre los proyectos en los que estoy trabajando actualmente. ¡Explora, diviértete y no dudes en contactarme si tienes alguna pregunta o quieres colaborar en algo genial!
        </p>
        <h2 className="text-lg md:text-2xl font-semibold mb-4">Habilidades</h2>
        <ul className="list-disc list-inside mb-6 space-y-1 text-sm md:text-base">
          <li>Experiencia 7/10 en <b>Minecraft</b></li>
          <li><b>Minecraft</b> es el unico juego que juego</li>
          <li>Me gusta mucho la <b>Programacion</b></li>
          <li>Se algo de produccion <b>Musical</b> (muy poco) </li>
          <li>Soy muy <b>Creativo :D</b> (a veces)</li>
        </ul>
      </section>
      </>
    );
}