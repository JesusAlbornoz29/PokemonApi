# Pokémon API Web App

Esta aplicación web está diseñada para consumir la **API pública de Pokémon** y permitir la búsqueda dinámica de Pokémon en una interfaz sencilla y eficiente. Está desarrollada con las tecnologías más modernas y populares en el ecosistema de frontend, incluyendo:

- **React**
- **JavaScript**
- **Sass**
- **Yarn**
- **Vite**
- **Axios**

Esto proporciona una experiencia fluida y rápida tanto para el desarrollo como para el uso final. Además, el proyecto está **dockerizado** para facilitar su configuración y ejecución en cualquier entorno, asegurando que puedas ejecutar la aplicación de manera consistente y eficiente.

## Características

- **Búsqueda dinámica de Pokémon:** Encuentra rápidamente los Pokémon mediante una búsqueda en tiempo real.
- **Diseño atractivo con Sass:** Estilo visualmente atractivo y responsive.
- **Optimización con Yarn y Vite:** Gestión eficiente de dependencias y bundling rápido.
- **Consumo de API con Axios:** Conexión rápida y eficiente con la API de Pokémon.
- **Dockerización:** Despliegue fácil en cualquier entorno con Docker.

## Cómo ejecutar el proyecto

### 1. Instalar dependencias

Si no tienes Yarn instalado, usa npm para instalarlo:

```bash
npm install --global yarn
```

### 2. Correr la aplicacion localmente

Ejecuta el siguiente comando para iniciar la aplicación en tu entorno local:

```bash
yarn dev
```

Esto iniciará el servidor de desarrollo en http://localhost:3000.

### 3. Docker

Si prefieres usar Docker, puedes fácilmente ejecutar el proyecto en un contenedor. Asegúrate de tener Docker Compose instalado y ejecuta los siguientes comandos:

```bash
docker compose build
docker compose up -d
```
Esto levantará un contenedor y podrás acceder a la aplicación en http://localhost:8080.

# Tecnologías usadas
- **React:** Biblioteca para construir la interfaz de usuario. 
- **JavaScript:** Lenguaje de programación principal.
- **Sass:** Preprocesador de CSS para un estilo modular y escalable.
- **Yarn:** Gestor de dependencias rápido y eficiente.
- **Vite:** Herramienta de construcción ultra rápida para desarrollo.
- **Axios:** Cliente HTTP para consumir la API de Pokémon.
- **Docker:** Contenedores para ejecutar la aplicación en cualquier entorno.
 
¡Explora, contribuye y disfruta de tu experiencia con la Pokémon API Web App!

