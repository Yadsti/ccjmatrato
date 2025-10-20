export const InformacionActas = `
    query DatosActas {
        actas {
            nodes {
                datosDeActas {
                    numeroDeActa
                    resumenDeActa
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