export const InformacionConcejales = `
    query DatosConcejales {
        concejales {
            edges {
                node {
                    datosDeConcejales {
                        nombreDeConcejal
                        partidoPolitico
                        fotoDelConcejal {
                            node {
                                uri
                            }
                        }
                    }
                }
            }
        }
    }
`;