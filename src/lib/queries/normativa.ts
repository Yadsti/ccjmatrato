export const InformacionNormativas = `
query Normativa {
  normativas(first: 250) {
    nodes {
      datosDeNormativas {
        tituloDeNormativa
        fecha
        documentoDeNormativa {
          node {
            mediaItemUrl
          }
        }
      }
    }
  }
}
`;