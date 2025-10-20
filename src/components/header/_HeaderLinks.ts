// src/lib/utils/_HeaderLinks.ts

interface MenuItem {
    label: string;
    path: string;
    subItems?: MenuItem[];
}

export const menuPrincipal: MenuItem[] = [
    { label: "Inicio", path: "/" },
    {
        label: "Corporación",
        path: "/corporacion",
        subItems: [
            { label: "¿Qué es el Concejo?", path: "/corporacion/acerca-de" },
            { label: "Nuestros Concejales", path: "/corporacion/concejales" },
            { label: "Historia del Concejo", path: "/corporacion/historia" },
            { label: "Manual de Identidad Visual", path: "/corporacion/manual-identidad" },
        ]
    },
    {
        label: "Transparencia",
        path: "/transparencia",
        subItems: [
            { label: "Noticias y Eventos", path: "/transparencia/noticias" },
            { label: "Informes de Gestión", path: "/transparencia/informes" },
            { label: "Planeación", path: "/transparencia/planeacion" },
            { label: "Normativa", path: "/transparencia/normativa" },
            { label: "Participación", path: "/transparencia/participacion" },
            { label: "Contratación", path: "/transparencia/contratacion" },
        ]
    },
    {
        label: "Atención al ciudadano",
        path: "/atencion",
        subItems: [
            { label: "PQRSD", path: "/atencion/pqrsd" },
            { label: "Contacto", path: "/atencion/contacto" },
        ]
    },
];