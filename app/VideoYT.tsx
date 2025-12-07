
'use client'; // <-- **AQUÍ VA AHORA**
import '@justinribeiro/lite-youtube';

export default function VideoYT(){
  return (

    <lite-youtube
      videoid="8An9BRau7M4"
      style={{ width: '100%', maxWidth: '560px', aspectRatio: '16/9', borderRadius: '12px', overflow: 'hidden' }}
      title="Intro to Minecraft Projects by _Fraan_"
    ></lite-youtube>

    )
}