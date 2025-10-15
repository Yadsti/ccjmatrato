if (import.meta.env.DEV) {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
}

const domain = import.meta.env.WP_DOMAIN
const apiUrl = `${domain}wp-json/wp/v2`;

export const getPageInfo = async (slug: string) => {
    const response = await fetch(`${apiUrl}/pages?slug=${slug}`);
    if (!response.ok) throw new Error('Problema al obtener información de la página');
    
    const [data] = await response.json();
    const { title : { rendered: title }, content: { rendered: content } } = data;
    return { title, content };
};

// export const getLatestNotices = async ({perPage = 3}: {perPage?: number} = {}) => {
//     const response = await fetch(`${apiUrl}posts?per_page=${perPage}`);
//     if (!response.ok) {
//         throw new Error('Problema al obtener los avisos más recientes');
//     }

//     const results = await response.json();
//     if (!results.length) {
//         throw new Error('No se encontraron avisos');
//     }

//     const notices = results.map(notice => {
//         const {  
//             title: { rendered: title }, 
//             excerpt: { rendered: excerpt }, 
//             content: { rendered: content }, 
//             date,
//             slug
//         } = notice;
        
//         return { title, excerpt, content, date, slug };
//     });
//     return notices;
// };

