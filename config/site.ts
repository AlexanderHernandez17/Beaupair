type NavItem = {
  label: string;
  href: string;
  subItems?: { label: string; href: string }[]; // Subitems opcionales
};

export const siteConfig = {
  name: "Be au pair",
  description: "ASESORIA PARA SER UNA AU PAIR DEL MUNDO.",
  navItems: [
    {
      label: "Paises",
      href: "#",
      subItems: [
        { label: "Estados Unidos", href: "/usa" },
        { label: "Alemania", href: "/alemania" }
      ]
    },
    {
      label: "Servicios",
      href: "/servicios"
    },
    {
      label: "Quienes somos",
      href: "/team"
    },
    {
      label: "Testimonios",
      href: "/testimonios"
    },
    {
      label: "Plan de referidos",
      href: "/referidos"
    }
  ],
  navMenuItems: [
    {
      label: "Paises",
      href: "#",
      subItems: [
        { label: "Estados Unidos", href: "/usa" },
        { label: "Alemania", href: "/alemania" }
      ]
    },
    {
      label: "Servicios",
      href: "/servicios"
    },
    {
      label: "Quienes somos",
      href: "/team"
    },
    {
      label: "Testimonios",
      href: "/testimonios"
    },
    {
      label: "Plan de referidos",
      href: "/referidos"
    }
  ],
};
