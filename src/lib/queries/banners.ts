export const Banners = `
    query ImagenesBanners{
        banners {
            nodes {
                datosDeBanners {
                    imagenDeFondo {
                        node {
                            uri
                        }
                    }
                }
            }
        }
    }
`;