const graphQlEndpoint = import.meta.env.PUBLIC_WORDPRESS_GRAPHQL_URL;

/**
 * Función genérica para hacer peticiones POST a la API GraphQL.
 * @param query La consulta GraphQL a ejecutar.
 * @param variables Objeto opcional con las variables para la consulta.
 * @returns La parte 'data' de la respuesta JSON, que contiene los resultados.
 */
async function fetchGraphQL(query: string, variables: Record<string, any> = {}) {
    // Esto es correcto para entornos de desarrollo local que usan HTTPS con certificados autofirmados
    if (import.meta.env.DEV) {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
    }

    if (!graphQlEndpoint) {
        throw new Error('La variable de entorno PUBLIC_WORDPRESS_GRAPHQL_URL no está definida.');
    }

    const response = await fetch(graphQlEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables,
        }),
    });

    if (!response.ok) {
        throw new Error(`Error HTTP al hacer la petición GraphQL: ${response.statusText}`);
    }

    const result = await response.json();

    // Manejo de errores de GraphQL (si la consulta es malformada o tiene problemas en el servidor)
    if (result.errors) {
        console.error('GraphQL Errors:', result.errors);
        throw new Error(result.errors[0].message);
    }

    return result.data;
}

// ----------------------------------------------------------------------------------
// FUNCIONES DE CONSUMO DE DATOS
// ----------------------------------------------------------------------------------

/**
 * Obtiene el título y contenido de una página por su slug (URI).
 * @param slug El slug (URI) de la página.
 * @returns Un objeto con el título y el contenido.
 */
export const getPageInfo = async (slug: string) => {
    const QUERY = `
        query GetPageBySlug($uri: String!) {
            pageBy(uri: $uri) {
                title
                content
            }
        }
    `;

    const data = await fetchGraphQL(QUERY, { uri: slug });

    if (!data.pageBy) {
        throw new Error(`Página con slug "${slug}" no encontrada.`);
    }

    const { title, content } = data.pageBy;

    // WPGraphQL devuelve el HTML limpio, por lo que no es necesario .rendered
    return { title, content };
};

/**
 * Obtiene las noticias más recientes.
 * @param perPage Número de posts a obtener.
 * @returns Un array de objetos de noticias.
 */
export const getLatestNotices = async ({perPage = 3}: {perPage?: number} = {}) => {
    const QUERY = `
        query GetLatestPosts($count: Int) {
            posts(first: $count) {
                nodes {
                    title
                    excerpt
                    content
                    date
                    slug
                    featuredImage {
                        node {
                            mediaDetails {
                                file
                                sizes {
                                    sourceUrl
                                    name
                                }
                            }
                        }
                    }
                }
            }
        }
    `;

    // Usamos 'perPage' como variable en la consulta
    const data = await fetchGraphQL(QUERY, { count: perPage });
    
    const notices = data.posts.nodes.map((notice: any) => {
        const imageUrl = notice.featuredImage?.node?.mediaDetails.sizes.find(
            (size: any) => size.name === 'medium'
        )?.sourceUrl || null; 

        return { 
            title: notice.title,
            excerpt: notice.excerpt,
            content: notice.content,
            date: notice.date,
            slug: notice.slug,
            imageUrl: imageUrl, 
        };
    });

    if (!notices.length) throw new Error('No se encontraron avisos');

    return notices;
}