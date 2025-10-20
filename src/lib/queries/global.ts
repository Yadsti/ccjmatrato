export const InformacionGlobal = `
    query DatosGlobales {
        allInformacionGlobal {
        edges {
            node {
            datosGlobales {
                mision
                objetivos
                vision
                telefono
                email
                logoInstitucional {
                    node {
                    uri
                    altText
                    }
                }
                logoNavbar{
                    node{
                        uri
                        altText
                    }
                }
                logoFooter{
                    node{
                        uri
                        altText
                    }
                }
                manualDeIdentidadVisual {
                    node {
                    uri
                    mediaItemUrl
                    }
                }
                organigrama {
                    node {
                    id
                    }
                }

            }
            uri
            }
        }
    }
    }
`;