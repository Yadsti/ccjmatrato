interface Link {
    href: string;
    label: string;
}

export const navegacionPrincipal: Link[] = [
    { href: "/", label: "Inicio" },
    { href: "/corporacion/acerca-de", label: "Corporación" },
    { href: "/transparencia/", label: "Transparencia" },
    { href: "/atencion/contacto", label: "Atención al Ciudadano" },
];

export const enlacesInteres: Link[] = [
    { href: "/transparencia/normativa", label: "Reglamento Interno" },
    { href: "/atencion/pqrsd", label: "PQRSD" },
    { href: "/transparencia/privacidad", label: "Política de Privacidad" },
    { href: "/transparencia/terminos", label: "Términos y Condiciones" },
];

export const horarios = [
    "Lunes a Jueves: ", 
    "7:00 a.m. a 12:00 p.m.",
    "2:00 p.m. a 5:00 p.m.",
];