import React from "react";
import { Card, CardBody, Image } from "@nextui-org/react";
import { motion, useInView } from "framer-motion"; // Importa useInView

interface TeamMemberCardProps {
  name: string;
  role: string;
  description: string;
  imageSrc: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ name, role, description, imageSrc }) => {
  const ref = React.useRef(null); 
  const isInView = useInView(ref, { once: true }); 

  return (
    <motion.div
      ref={ref} 
      initial={{ x: -100, opacity: 0 }} 
      animate={{ x: isInView ? 0 : -100, opacity: isInView ? 1 : 0 }} 
      transition={{ duration: 0.5 }} 
    >
      <Card
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50 shadow-lg border-2 border-purple-500" // Borde violeta
      >
        <CardBody>
          <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
            <div className="relative col-span-6 md:col-span-4">
              <Image
                alt={name}
                className="object-cover"
                height={0}
                shadow="md"
                src={imageSrc}
                width="100%"
              />
            </div>

            <div className="flex flex-col col-span-6 md:col-span-8">
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-0">
                  <h3 className="font-semibold text-foreground/90">{name}</h3>
                  <p className="text-small text-foreground/80">{role}</p>
                  <h1 className="text-large font-medium mt-2">{description}</h1>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export default function Team() {
  const teamMembers = [
    {
      name: "VICTORIA ECHEVERRI",
      role: "Fundadora",
      description: "Victoria, ama su trabajo, ayudar a las personas a cumplir su sueño de estudiar en otro país y vivir una verdadera experiencia de vida es su mayor pasión, le encanta ayudar al que lo necesita y está dispuesta siempre a escuchar a sus amigos y disfrutar de ellos. Le encanta viajar, su lema es “nada como aprender viajando”, Italia es uno de sus países favoritos, el idioma, la gastronomía, la gente sus paisajes.. por lo mismo comer pasta y pizza es lo que más le gusta. Es fan de vivir un intercambio cultural que transforme vidas para seguir creciendo personal y profesionalmente. Como Directora del programa Au pair en Be esta mas que segura que tu experiencia será única y respaldada por expertos apasionado por lo que hacen.",
      imageSrc: "/fundadora.jpeg",
    },
    {
      name: "JOSE GALVIS",
      role: "Marketing Manager",
      description: "José, es un apasionado de los viajes y la conexión humana. Para el, la vida es un regalo extraordinario lleno de posibilidades por descubrir. Su misión es abrir puertas y facilitar caminos, para que puedas vivir experiencias que transformen tu espíritu y expandan tus horizontes. Como un -Human Connector-, cree firmemente en el poder de las relaciones entre personas e instituciones para crear un impacto positivo. Se ha dedicado a explorar los destinos más enriquecedores para que puedas sumergirte en culturas increíbles, sin que nada te detenga. Su más grande pasión es montar en bici y jugar tenis de mesa acompañados de una buena musiquita ya sea rock, chillout o de relajación. Con Be au Pair, sera tu guía y apoyo, acompañándote en esta increíble aventura que cambiará tu vida. ¡Prepárate para vivir la mejor experiencia con nosotros! Let's go!",
      imageSrc: "/marketingManager.jpeg",
    },
    {
      name: "MARIA CLAUDIA CORAL",
      role: "Lider del Programa Au Pair",
      description: "María Claudia es una persona apasionada por las artes, especialmente por la música y los idiomas. Actualmente, está estudiando japonés, ya que uno de sus sueños más grandes es conocer Japón y poder comunicarse en su idioma. En 2023, María Claudia vivió la enriquecedora experiencia de ser Au Pair en los Estados Unidos, con Be Au pair, lo que no solo le permitió perfeccionar su inglés, sino también sumergirse en una experiencia cultural única. Ahora, está dedicada a ayudar a otras personas a cumplir sus sueños de viajar a los Estados Unidos u otros países mientras mejoran su dominio del idioma. Además, se caracteriza por su carácter tranquilo, paciente y empático, lo cual le permite conectar con las personas fácilmente y tiene una gran afición por los gatos, que siempre han sido una compañía especial para ella. Ella es la líder del programa Au pair, quien te guiara en cada paso para hacerte el proceso con Be Au pair más fácil",
      imageSrc: "/liderAuPaur.jpeg",
    },
    {
      name: "CAROLINA HENAO",
      role: "Social Media Manager",
      description: "La rara enamorada de las aves y la imprudente con un chiste en la punta de la lengua cuando menos debe. Carolina Henao (o Karo para los que la han visto reírse a carcajada abierta) es de esas románticas que piensa que no eres tus logros ni tus títulos, sino la forma en que tratas a tu mamá, al vigilante o al mesero, la promesa que cumples o el -ven yo te ayudo-  cuando alguien lo necesita. Siempre con una mano en el computador y la otra en la mochila de viaje. Y seguro por esas primeras palabras ya dedujeron que es de los creativos de Be Au Pair. Y sip, ella es el cerebro detrás de la estrategia de Social Media, tráfico de campañas y diseño gráfico. La verás detrás de cada pieza, carrusel o video que te encuentres para invitarte a lo que seguro será la experiencia más increíble de tu vida",
      imageSrc: "/socialMediaManager.jpeg",
    },
  ];

  return (
    <div className="grid gap-6">
      {teamMembers.map((member, index) => (
        <TeamMemberCard 
          key={index}
          name={member.name}
          role={member.role}
          description={member.description}
          imageSrc={member.imageSrc}
        />
      ))}
    </div>
  );
}
