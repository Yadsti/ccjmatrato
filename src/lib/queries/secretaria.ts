export const InformacionSecretaria = `
query Secretaria {
  secretarias {
    nodes {
      datosDeSecretaria {
        nombre
        foto {
          node {
            uri
          }
        }
      }
    }
  }
}
`;