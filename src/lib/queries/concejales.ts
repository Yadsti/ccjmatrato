export const InformacionConcejales = `
    query DatosConcejales {
        concejales {
            edges {
                node {
                    datosDeConcejales {
                        nombreDeConcejal
                        partidoPolitico
                        cargoDelConcejal
                        correoElectronico
                        comunidad
                        comision
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