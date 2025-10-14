# Kit de Inicio de Astro: Básicos

```sh
pnpm create astro@latest -- --template basics
```

> 🧑‍🚀 **¿Astronauta experimentado?** Borra este archivo. ¡Diviértete!

## 🚀 Estructura del Proyecto

Dentro de tu proyecto de Astro, verás las siguientes carpetas y archivos:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

Para aprender más sobre la estructura de un proyecto Astro, consulta [nuestra guía sobre la estructura del proyecto](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, desde una terminal:

| Comando                | Acción                                                     |
| :--------------------- | :--------------------------------------------------------- |
| `pnpm install`         | Instala las dependencias                                   |
| `pnpm dev`             | Inicia el servidor de desarrollo local en `localhost:4321` |
| `pnpm build`           | Compila tu sitio de producción en `./dist/`                |
| `pnpm preview`         | Previsualiza tu compilación localmente, antes de desplegar |
| `pnpm astro ...`       | Ejecuta comandos CLI como `astro add`, `astro check`       |
| `pnpm astro -- --help` | Obtén ayuda usando la CLI de Astro                         |

## 👀 ¿Quieres saber más?

Consulta [nuestra documentación](https://docs.astro.build) o únete a nuestro [servidor de Discord](https://astro.build/chat).

## 🔧 Guía para Contribuir y Trabajar en Local

Esta sección brinda instrucciones para que el equipo colabore eficazmente en el proyecto:

1. **Clonar el repositorio:**

   Ejecuta el siguiente comando para clonar el repositorio en tu máquina local:

   ```sh
   git clone https://github.com/Yadsti/ccjmatrato.git
   ```

2. **Crear una rama de trabajo:**

   Antes de comenzar a trabajar, crea y cámbiate a una nueva rama para desarrollar tus cambios:

   ```sh
   git checkout -b nombre-de-tu-rama
   ```

3. **Realizar cambios y confirmarlos:**

   Una vez que hayas realizado cambios en el código, añade y confirma tus modificaciones:

   ```sh
   git add .
   git commit -m "Descripción de los cambios realizados"
   ```

4. **Subir la rama al repositorio remoto:**

   Envía tu rama de trabajo al repositorio remoto:

   ```sh
   git push origin nombre-de-tu-rama
   ```

5. **Crear un Pull Request (PR):**

   - Ve a GitHub y abre el repositorio.
   - Selecciona la opción para crear un nuevo Pull Request comparando tu rama con la rama principal (main).
   - Añade una descripción detallada de los cambios y solicita la revisión por parte de un compañero.

6. **Revisión y Fusión:**

   - Tus compañeros revisarán el código y, si es correcto, se aprobará y fusionará en la rama principal.
   - Es recomendable actualizar tu rama local con los últimos cambios de main para evitar conflictos:

   ```sh
   git checkout main
   git pull origin main
   git checkout nombre-de-tu-rama
   git merge main
   ```

Mantén siempre una buena comunicación en el equipo y sigue las guías de estilo y las buenas prácticas definidas para el proyecto.
