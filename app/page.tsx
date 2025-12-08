        // Bienvenido a mi sitio web personal, donde comparto mi pasión por Minecraft y mis proyectos relacionados con este increíble juego. Aquí encontrarás información sobre mis aventuras en el mundo de Minecraft, así como detalles sobre los proyectos en los que estoy trabajando actualmente. ¡Explora, diviértete y no dudes en contactarme si tienes alguna pregunta o quieres colaborar en algo genial!
import Link from 'next/link';
import Image from 'next/image';



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

      <div className=" z-1000 relative bg-[var(--accent)]/12 dark:bg-background/80 backdrop-blur-[var(--blur)] rounded-lg p-8 mb-6 mt-12 md:mb-12 max-w-128">
        {/*Imagen Movil*/}
        <div className="flex md:hidden relative justify-center items-center">
        <Image
          width={150}
          height={150}
          src={"/file.svg"}
          alt={"random"}
        />
        </div>
        {/*Imagen PC*/}
        <div className="hidden md:flex relative justify-center items-center">
        <Image
          width={350}
          height={350}
          src={"/file.svg"}
          alt={"random"}
        />
        </div>
        <div className="w-128 hidden md:flex relative -left-8 h-2 my-12 bg-[var(--accent)]"></div>
        <h1 className="text-2xl md:text-4xl w-full relative -left-2 font-bold mt-6 md:mt-0 md:mb-4"><strong className="rounded-md bg-[var(--secondary)] px-3 py-2">_Fraan_</strong> Minecraft</h1>
      </div>

    </>

    
  );
}
