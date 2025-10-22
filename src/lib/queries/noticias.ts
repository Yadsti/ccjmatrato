export const InformacionNoticias = `
  query Noticias{
    noticias {
    edges {
      node {
        id
        datosDeLasNoticias {
          tituloDeNoticia
          resumen
          fechaDeLaNoticia
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