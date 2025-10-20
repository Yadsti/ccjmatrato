export const InformacionNoticias = `
  query Noticias{
    noticias {
    edges {
      node {
        id
        datosDeLasNoticias {
          tituloDeNoticia
          resumen
          descripcionDeLaNoticia
          documentoDeNoticia {
            node{
              mediaItemUrl
            }
          }
          imagenDeLaNoticia {
            node {
              altText
              uri
            }
          }
        }
      }
    }
  }
}
`;