"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody } from "@nextui-org/react";
import { FaChild, FaCar, FaGraduationCap, FaBan, FaCertificate, FaCommentAlt, FaCheckCircle } from "react-icons/fa";

interface CardProps {
  title: string;
  description?: string; // Descripción opcional
  icon: React.ReactNode; // Ícono para cada carta
}

const CardComponent: React.FC<CardProps> = ({ title, description, icon }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }} // Animación de zoom al pasar el cursor
      whileTap={{ scale: 0.95 }} // Animación al hacer clic
      transition={{ duration: 0.3 }} // Duración de la animación
      className="w-60 p-4"
    >
      <Card
        isBlurred
        className="bg-background/60 dark:bg-default-100/50 shadow-lg border-2 border-violet-500" // Borde morado
      >
        <CardBody className="flex flex-col items-center">
          <div className="text-5xl mb-3 text-violet-500">{icon}</div>
          <h2 className="text-center text-lg font-semibold text-foreground/90">
            {title}
          </h2>
          {description && (
            <p className="text-center text-sm text-foreground/70 mt-2">
              {description}
            </p>
          )}
        </CardBody>
      </Card>
    </motion.div>
  );
};

const CardGrid = () => {
  const cards = [
    {
      title: "Tener entre 18 y 26 años",
      icon: <FaChild />, // Ícono representativo
    },
    {
      title: "Experiencia en el cuidado de niños",
      description: "Mínimo 1,200 horas certificadas",
      icon: <FaCertificate />,
    },
    {
      title: "Ser soltera y sin hijos",
      icon: <FaBan />,
    },
    {
      title: "Nivel B1 de Inglés",
      icon: <FaCommentAlt />,
    },
    {
      title: "Tener licencia de conducción",
      icon: <FaCar />,
    },
    {
      title: "No tener antecedentes penales",
      icon: <FaCheckCircle />,
    },
    {
      title: "Ser bachiller graduado",
      icon: <FaGraduationCap />,
    },
    {
      title: "¿No cumples todos los requisitos?",
      description: "¡Te ayudamos a prepararte!",
      icon: <FaCommentAlt />,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
      {cards.map((card, index) => (
        <CardComponent
          key={index}
          title={card.title}
          description={card.description}
          icon={card.icon}
        />
      ))}
    </div>
  );
};

export default CardGrid;

