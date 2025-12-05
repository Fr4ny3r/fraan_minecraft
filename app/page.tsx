        // Bienvenido a mi sitio web personal, donde comparto mi pasión por Minecraft y mis proyectos relacionados con este increíble juego. Aquí encontrarás información sobre mis aventuras en el mundo de Minecraft, así como detalles sobre los proyectos en los que estoy trabajando actualmente. ¡Explora, diviértete y no dudes en contactarme si tienes alguna pregunta o quieres colaborar en algo genial!

export default function page() {

  const products = [
    {
      id: 1,
      title: "Datapack extremo xd",
      type: "Datapack",
      description: "es mu muy pero muy dificil xd",
      filePath: "/datapack_extremo.zip",
    },
//    {
//      id: 2,
//      title: "Mapa aventura",
//      type: "Mapa",
//      description: "un mapa de aventura super chido",
//    },
//    {
//      id: 3,
//      title: "Mod de herramientas",
//      type: "Mod",
//      description: "agrega herramientas nuevas al juego",
//    },
//    {
//      id: 4,
//      title: "Paquete de texturas HD",
//      type: "Recurso",
//      description: "mejora los graficos del juego a HD",
//    },
  ];

  return (
    <>
      <div className="z-1000 relative bg-[var(--accent)]/12 dark:bg-background/80 backdrop-blur-[0.5rem] rounded-lg p-8 py-12 max-w-3xl w-full">
        <h1 className="text-4xl relative -left-2 font-bold mb-4"><strong className="rounded-md bg-[var(--secondary)] px-3 py-2">_Fraan_</strong> Minecraft Projects</h1>
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
