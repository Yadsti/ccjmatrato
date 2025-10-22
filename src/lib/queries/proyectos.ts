export const InformacionProyectos = `
query Proyectos {
  proyectos(first: 250) {
    nodes {
      datosProyectos {
        tituloDelProyecto
        numeroDeProyecto
        fechaDelProyecto
        documentoDeProyecto {
          node {
            mediaItemUrl
          }
        }
      }
    }
  }
}
`;