# Práctica 7 - App de Películas con React

## Integrantes
- Ana Yoseline Acosta Arreola (código 218682273) — práctica individual

## Objetivo
Desarrollar una aplicación web con React y Vite que consuma una API externa de películas, muestre un listado y el detalle de cada película, se trabaje con Git y GitHub y se publique en Netlify.

## Descripción
Aplicación de una sola página (SPA) que muestra tarjetas con el póster y el título de películas populares. Al dar clic en una tarjeta se abre una vista de detalle con póster, título, géneros, año, calificación y descripción. En el pie de página se muestran los datos de la materia, el profesor, el calendario escolar y el escudo de CUCEI.

## Tecnologías
- React
- Vite
- React Router DOM
- CSS
- API de TMDB (The Movie Database)
- Git y GitHub
- Netlify

## Estructura general del proyecto
```
src/
  components/
    Footer.jsx        # pie de página con datos y escudo
    MovieCard.jsx     # tarjeta de película
    MovieGrid.jsx     # listado de tarjetas (consume la API)
  pages/
    LandingPage.jsx   # página principal
    MovieDetails.jsx  # vista de detalle
  routers/
    AppRouter.jsx     # rutas de la aplicación
  services/
    httpClient.js     # función get() para consultar la API
  utils/
    getMovieImg.js    # arma la URL de la imagen
  img/                # escudo de CUCEI e imagen de respaldo
  App.jsx
  main.jsx
  index.css
public/
  _redirects          # necesario para las rutas en Netlify
```

## Instalación y ejecución local
1. Clonar el repositorio e ingresar a la carpeta del proyecto.
2. Instalar dependencias:
   ```
   npm install
   ```
3. Crear un archivo `.env` en la raíz (puedes copiar `.env.example`) con tu API key de TMDB:
   ```
   VITE_TMDB_API_KEY=TU_API_KEY
   ```
4. Iniciar el servidor de desarrollo:
   ```
   npm run dev
   ```
5. Para generar la versión de producción:
   ```
   npm run build
   ```

## Rutas utilizadas
- `/` — página principal con el listado de películas.
- `/movies/:movieId` — detalle de la película seleccionada.

## API utilizada
[The Movie Database (TMDB)](https://www.themoviedb.org/documentation/api), con la URL base `https://api.themoviedb.org/3`.
- `GET /discover/movie` — listado de películas.
- `GET /movie/{movieId}` — detalle de una película.

Las imágenes se obtienen de `https://image.tmdb.org/t/p/w500` + el `poster_path` de cada película. La API key se guarda en una variable de entorno (`VITE_TMDB_API_KEY`) y no se sube al repositorio.

## Capturas o descripción de funcionamiento
- **Página principal:** cuadrícula de tarjetas con póster y título de cada película.
- **Detalle:** al dar clic en una tarjeta se muestra el póster grande, el título, los géneros, el año, la calificación y la descripción, con un enlace para volver al listado.
- Si la API falla o no hay póster, la app muestra un mensaje de error o una imagen de respaldo.

(Agregar aquí las capturas guardadas en la carpeta `capturas/`, por ejemplo: `![Página principal](capturas/principal.png)`)

## Despliegue
- GitHub: https://github.com/TU_USUARIO/practica7-react-peliculas
- Netlify: https://TU_SITIO.netlify.app

## Conclusiones
Con esta práctica aprendí a crear un proyecto con Vite y React, a dividir la aplicación en componentes y páginas, a navegar entre vistas con React Router y a consumir una API externa con `fetch` y los hooks `useState` y `useEffect`. También practiqué el flujo básico de Git y GitHub (clonar, hacer commits con mensajes claros y subir cambios), el uso de variables de entorno para no exponer la API key y el despliegue de la aplicación en Netlify, incluyendo el archivo `_redirects` para que funcionen las rutas.
