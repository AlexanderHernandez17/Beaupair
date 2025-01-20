'use Client';
import CardGrid from "@/components/card";
import LogrosComponent from "@/components/logra";
import PaymentPlans from "@/components/opcionesPago";
import { subtitle, title } from "@/components/primitives";
import WhatsAppButton from "@/components/whatsappButton";

export default function AlemaniaHome() {

  const items = [
    {
      title: "Un ingreso semanal mínimo de $195.75 USD",
      image: "/ingreso.jpg",
    },
    {
      title: "Hospedaje y alimentación",
      image: "/home.jpg",
    },
    {
      title: "Bono educativo de $500 USD",
      image: "/study.jpg",
    },
    {
      title: "Dos semanas de vacaciones remuneradas al año",
      image: "/vacaciones.jpg",
    },
    {
      title: "Tiempo libre para explorar Estados Unidos y hacer amigos de todo el mundo",
      image: "/freetime.jpg",
    },
    {
      title: "Seguro médico completo",
      image: "/doctor.jpg",
    },
    {
      title: "Un tiquete aéreo de ida y regreso incluido",
      image: "/tiquet.jpg",
    },
  ];
  
  return (
    <div className=" flex flex-col min-h-screen ">

       <div className="flex flex-col items-center justify-center mt-16">
          <div className="max-w-xl text-center">
          <span className={title({ color: "purple" })}>  ALEMANIA COMO TU TE LO IMAGINAS &nbsp;</span>
          <br />
          <div className="flex flex-col space-y-4 mt-12">
          <span className={subtitle()}>Alemania es un país completo con una rica historia, cultura diversa, economía fuerte y un sólido sistema educativo. Su capital es Berlín, el idioma oficial es el alemán, pero también se habla inglés y francés en algunas regiones, su moneda es el euro. Este país ofrece una experiencia de intercambio cultural muy único, donde la educación y la aventura van de la mano. Este país es el escenario perfecto para aquellos que buscan crecer personal y profesionalmente en el podrás disfrutar de sus históricas ciudades, castillos de cuentos, su vibrante vida moderna mientras vives con una familia alemana quienes serán tus anfitriones para vivir la mejor experiencia de vida. El programa Au pair en Alemania es tu puerta a un futuro lleno de posibilidades, para perfeccionar el idioma alemán, realizar un voluntariado y porque no realizar un programa de educación superior como un postgrado o MBA para luego aplicar a la visa de residente y así lograr muchos beneficios es este país y el continente europeo te ofrecen.&nbsp;</span>
          </div>
         </div>
         </div>
         
         <div className="flex flex-col items-center justify-center mt-16">
          <div className="max-w-xl text-center">
          <span className={title({ color: "purple" })}>Vive una experiencia única en ALEMANIA y logra: &nbsp;</span>
          <br />
         </div>
         </div>


         <div className="flex flex-col space-y-4 mt-16">
         <LogrosComponent items={items} />
         </div>

         <div className="flex flex-col items-center justify-center mt-20">
          <div className="max-w-xl text-center">
          <span className={title({ color: "purple" })}>Requisitos ALEMANIA&nbsp;</span>
         </div>
         </div>

         <div className="flex flex-col items-center justify-center mt-10">
         <CardGrid/>
         </div>

         <div className="flex flex-col items-center justify-center mt-16">
          <div className="max-w-xl text-center">
          <span className={title({ color: "pink" })}>TE OFRECEMOS 3 MODALIDADES DE PAGO&nbsp;</span>
         </div>
         </div>

         <div className="flex flex-col space-y-4 mt-16">
        <PaymentPlans/>
        </div>
        
        <div>
        <WhatsAppButton />
        </div>


    </div>
  );
}

