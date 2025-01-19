import React from 'react';
import { title } from './primitives';

interface FullScreenVideoProps {
  src: string;
  alt?: string; 
}

const FullScreenVideo: React.FC<FullScreenVideoProps> = ({ src, alt }) => {
  return (
    <div style={{ 
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '20px', // Aplicar borde redondeado al contenedor
    }}>
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        style={{
          maxWidth: '100%',  // Asegura que el video no exceda el contenedor
          maxHeight: '100%', // Asegura que el video no exceda el contenedor
          objectFit: 'contain', // Mantener el video completo sin recortes
          borderRadius: '20px', // Bordes redondeados en el video
        }}
        aria-label={alt}
      />
      <section className="absolute inset-0 flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-xl text-center">
          <span className={`${title()} text-3xl text-white`}>Descubre tu lugar en el mundo y transforma tu vida.&nbsp;</span>
        </div>
      </section>
    </div>
  );
};

export default FullScreenVideo;
