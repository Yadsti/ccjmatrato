export const InformacionContratos = `
query Contratos {
  contratos(first: 250) {
    nodes {
      datosDeContratos {
        titulo
        numeroDeContrato
        descripcion
        fechaDeContrato
        documentoDeContrato {
          node {
            mediaItemUrl
          }
        }
      }
    }
  }
}
`;