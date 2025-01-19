"use client";
import CardGrid from "@/components/card";
import LogrosComponent from "@/components/logra";
import PaymentPlans from "@/components/opcionesPago";
import { subtitle, title } from "@/components/primitives";
import WhatsAppButton from "@/components/whatsappButton";


export default function Home() {

  return (
    <div className=" flex flex-col min-h-screen ">

       <div className="flex flex-col items-center justify-center mt-16">
          <div className="max-w-xl text-center">
          <span className={title({ color: "purple" })}>  ESTADOS UNIDOS COMO TU TE LO IMAGINAS &nbsp;</span>
          <br />
          <div className="flex flex-col space-y-4 mt-12">
          <span className={subtitle()}>Estados Unidos es una de las naciones más diversas del mundo, tanto étnica como culturalmente. Su capital es Washington Dc, el idioma oficial es el inglés y su moneda es el dólar. Su economía es la más grande y es uno de los países más desarrollados, con altos niveles de productividad, al igual que ofrece un sin número de oportunidades dentro de las cuales esta la experiencia Au Pair, un intercambio cultual que combina el aprendizaje del idioma con el desarrollo personal y profesional. Esta experiencia te permitirá conocer de cerca la cultura, las tradiciones y el estilo de vida estadounidense, desde sus ciudades cosmopolitas hasta sus inigualables paisajes naturales de la mano de una familia anfitriona. Una de las ventajas del programa Au Pair en Estados Unidos es que podrás viajar por el país durante tus semanas de vacaciones remuneradas. Esto te permitirá explorar diferentes lugares del país, visitar ciudades como Nueva York, Los Ángeles, Orlando, Chicago entre otras. Muchas familias anfitrionas también ofrecen viajes familiares en los que tu podrías participar, lo que puede ser una excelente oportunidad para ver más del país.  &nbsp;</span>
          </div>
         </div>
         </div>
         
         <div className="flex flex-col items-center justify-center mt-16">
          <div className="max-w-xl text-center">
          <span className={title({ color: "purple" })}>Vive una experiencia única en EE.UU y logra: &nbsp;</span>
          <br />
         </div>
         </div>

         <div className="flex flex-col space-y-4 mt-16">
          <LogrosComponent/>
         </div>

        <div className="flex flex-col items-center justify-center mt-16">
          <div className="max-w-xl text-center">
          <span className={title()}>¡No dejes pasar esta oportunidad de transformar tu vida mientras descubres el &nbsp;</span>
          <span className={title({ color: "pink" })}>sueño&nbsp;</span>
          <br />
          <span className={title()}>
          americano!
         </span>
         </div>
         </div>

         <div className="flex flex-col items-center justify-center mt-16">
          <div className="max-w-xl text-center">
          <span className={title({ color: "purple" })}>Requisitos USA&nbsp;</span>
         </div>
         </div>

         <div className="flex flex-col items-center justify-center mt-12">
         <CardGrid/>
         </div>

         <div className="flex flex-col items-center justify-center mt-16">
          <div className="max-w-xl text-center">
          <span className={title({ color: "pink" })}>TE OFRECEMOS 3 MODALIDADES DE PAGO&nbsp;</span>
         </div>
         </div>

         <div className="flex flex-col items-center justify-center mt-12">
         <PaymentPlans/>
         </div>

        
        <div>
        <WhatsAppButton />
        </div>


    </div>
  );
}
