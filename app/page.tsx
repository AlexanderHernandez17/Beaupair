"use client";
import CarruselComponent from "@/components/carrusel";
import FullScreenVideo from "@/components/mainVideo";
import MapComponent from "@/components/map";
import PaysOpcions from "@/components/pagos";
import { subtitle, title } from "@/components/primitives";
import WhatsAppButton from "@/components/whatsappButton";

export default function Home() {


  return (
    <div className="flex flex-col min-h-screen">
      <FullScreenVideo src="/mainVideo.mov" />
  
      <section className="flex flex-col md:flex-row items-start justify-between gap-12 py-10 max-w-screen-lg mx-auto">
        {/* Texto a la izquierda */}
        <div className="max-w-lg space-y-6">
          <span className={title({ color: "purple" })}>
            Be au pair of the world
          </span>
          <p className={subtitle()}>
            Ser Au pair es tu puerta de entrada a una aventura global. Vive en un país
            extranjero, sumérgete en su cultura y forma parte de una familia local que te
            acoge como uno más. No solo cuidarás de niños, sino que crearás lazos que
            trascienden fronteras, aprenderás un nuevo idioma y harás amigos de todo el
            mundo. ¡Prepárate para una vida llena de viajes, descubrimientos y experiencias
            inolvidables! ¿Estás listo para comenzar tu próxima gran aventura?
          </p>
        </div>
  
        <div className="max-w-md w-full space-y-6">
          <span className={title({ color: "pink" })}>
            ¿Qué es ser AU PAIR?
          </span>
          <p className={subtitle()}>
            Au Pair es un programa de intercambio cultural que brinda la posibilidad de estar
            un año o más en el extranjero, aprender sobre una cultura diferente y mejorar las
            habilidades en un idioma a cambio del cuidado de niños. El término “Au Pair” viene
            del francés y significa “a la par”, lo que quiere decir que la Familia Anfitriona y
            el Au Pair se tratan como iguales.
          </p>
        </div>
      </section>
  
      <div className="flex flex-col items-center justify-center mt-16">
        <div className="max-w-xl text-center">
          <span className={title({ color: "purple" })}>
            Con Au pair podrás lograr &nbsp;
          </span>
        </div>
      </div>
  
      <div className="mt-8">
        <CarruselComponent />
      </div>
  
      <div className="flex flex-col items-center justify-center mt-16">
        <div className="max-w-xl text-center">
          <span className={title({ color: "purple" })}>
            Nuestros Servicios&nbsp;
          </span>
        </div>
      </div>
  
      <div className="mt-16">
        <PaysOpcions />
      </div>
  
      <div className="flex flex-col items-center justify-center mt-16">
        <div className="max-w-xl text-center">
          <span className={title()}>
            Déjanos tus datos y un experto en viajes se pondrá en &nbsp;
          </span>
          <span className={title({ color: "pink" })}>contacto&nbsp;</span>
          <br />
          <span className={title()}>contigo.</span>
        </div>
  
        <div className="mt-8">
          <div className="max-w-md w-full space-y-6">
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Nombres *"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
                <input
                  type="text"
                  placeholder="Apellidos *"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <input
                type="email"
                placeholder="Email *"
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
              <input
                type="text"
                placeholder="Teléfono *"
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
              <input
                type="date"
                placeholder="Fecha de nacimiento"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <select
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              >
                <option value="">Estado civil *</option>
                <option value="Soltera">Soltera</option>
                <option value="Casada">Casada</option>
                <option value="Union libre">Unión libre</option>
              </select>
              <select
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              >
                <option value="">Ciudad de residencia *</option>
                <option value="Ciudad 1">Ciudad 1</option>
                <option value="Ciudad 2">Ciudad 2</option>
              </select>
              <select
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              >
                <option value="">Nivel de inglés *</option>
                <option value="Básico">Básico</option>
                <option value="Intermedio">Intermedio</option>
                <option value="Avanzado">Avanzado</option>
              </select>
  
              {/* Checkbox de Términos y Condiciones */}
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="terminos"
                  className="w-5 h-5"
                  required
                />
                <label htmlFor="terminos" className="text-sm text-gray-700">
                  Acepto los{" "}
                  <a
                    href="/terminos-y-condiciones"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:underline"
                  >
                    Términos y Condiciones
                  </a>
                </label>
              </div>
  
              <button
                type="submit"
                className="w-full bg-pink-500 text-white font-bold py-2 rounded-md hover:bg-pink-600"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
  
        <div className="mt-8">
          <MapComponent />
        </div>
  
        <div>
          <WhatsAppButton />
        </div>
      </div>
    </div>
  );
}