export const InformacionAcuerdos = `
    query DatosAcuerdos {
        acuerdos {
            edges {
                node {
                    datosDeAcuerdos {
                        numeroDeAcuerdo
                        tituloDeAcuerdo
                        resumenDelAcuerdo
                        fechaDeAcuerdo
                        documentoDeSoporte {
                            node {
                            mediaItemUrl
                            }
                        }
                    }
                }
            }
        }
    }
`;