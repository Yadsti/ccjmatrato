export const InformacionGlobal = `
    query DatosGlobales {
        allInformacionGlobal {
        edges {
            node {
            id
            datosGlobales {
                mision
                objetivos
                vision
                logoInstitucional {
                    node {
                    id
                    uri
                    altText
                    }
                }
                manualDeIdentidadVisual {
                    node {
                    id
                    uri
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