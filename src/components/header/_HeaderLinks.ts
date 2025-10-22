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
            { label: "Historia del Concejo", path: "/corporacion/historia" },
            { label: "Nuestros Concejales", path: "/corporacion/concejales" },
            { label: "Comisiones", path: "/corporacion/comisiones" },
            { label: "Organigrama", path: "/corporacion/organigrama" },
            { label: "Manual de Identidad Visual", path: "/corporacion/manual-identidad" },
        ]
    },
    {
        label: "Transparencia",
        path: "/transparencia",
        subItems: [
            { label: "Acuerdos y actas", path: "/transparencia/informes" },
            { label: "Contratación", path: "/transparencia/contratacion" },
            { label: "Noticias y Eventos", path: "/transparencia/noticias" },
            { label: "Normativa", path: "/transparencia/normativa" },
            { label: "Proyectos", path: "/transparencia/planeacion" },
            { label: "Participación", path: "/transparencia/participacion" },
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
    { label: "Administrar", path: "/wp-admin" },
];