import 'cross-fetch/polyfill'; 
const WP_URL: string = import.meta.env.WORDPRESS_API_URL!;
type GraphQLVariables = Record<string, any>;

/**
 * 
 * 
 * * @param query La consulta GraphQL como string.
 * @param variables Objeto con variables dinámicas para la consulta (ej. un slug).
 */
export async function fetchGraphQL(
    query: string, 
    variables: GraphQLVariables = {}
): Promise<any> {
  
  if (!WP_URL) {
    console.error('ERROR: WORDPRESS_API_URL no está definida en .env');
    return null;
  }

  try {
    const response = await fetch(WP_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query, variables }), 
    });

    const result = await response.json();

    if (result.errors) {
        console.error('GraphQL Errors:', JSON.stringify(result.errors, null, 2));
        throw new Error('GraphQL query failed. Check logs.');
    }

    return result.data;

  } catch (error) {
    console.error('Fetch Error:', error);
    throw error; 
  }
}

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

    return { title, content };
};