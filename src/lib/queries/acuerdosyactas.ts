export const InformacionAcuerdosyActas = `
query AcuerdosyActas {
  acuerdos(first: 250) {
    nodes {
      datosDeAcuerdos {
        fechaDeAcuerdo
        numeroDeAcuerdo
        resumenDelAcuerdo
        tituloDeAcuerdo
        documentoDeSoporte {
          node {
            mediaItemUrl
          }
        }
      }
    }
  }
  actas(first: 250) {
    nodes {
      datosDeActas {
        resumenDeActa
        numeroDeActa
        fechaDeDocumento
        documentoPdf {
          node {
            mediaItemUrl
          }
        }
      }
    }
  }
}
`;