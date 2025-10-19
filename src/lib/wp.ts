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
      // Configuración de caché avanzada: 
      // Si usas ISR, puedes controlar el caché aquí o en el servidor.
    });

    const result = await response.json();

    if (result.errors) {
        console.error('GraphQL Errors:', JSON.stringify(result.errors, null, 2));
        // Lanzamos un error que Astro atrapará en el build-time, deteniendo la compilación
        throw new Error('GraphQL query failed. Check logs.');
    }

    return result.data;

  } catch (error) {
    console.error('Fetch Error:', error);
    // Para un flujo limpio, dejamos que el error se propague durante la compilación
    throw error; 
  }
}