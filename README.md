## README - Proyecto con Angular e Ionic

Este proyecto utiliza Angular e Ionic para desarrollar un componente de carga con funcionalidades específicas. A continuación se detallan las instrucciones para compilar y ejecutar el proyecto:

### Compilación y Ejecución

1. **Instalación de Dependencias:**
   Antes de compilar el proyecto, asegúrate de tener todas las dependencias instaladas. Puedes instalarlas ejecutando el siguiente comando en la raíz del proyecto:

npm instal


2. **Compilación del Proyecto:**
   Para compilar el proyecto, utiliza el siguiente comando:

ng build


3. **Ejecución del Proyecto:**
   Para ejecutar el proyecto en un entorno de desarrollo, puedes utilizar el siguiente comando:

ng serve

Esto iniciará el servidor de desarrollo y podrás acceder al proyecto desde tu navegador en `http://localhost:4200`.

### Uso del Componente de Loader

El componente de loader se activa al hacer clic en un botón en la página principal. Muestra una secuencia de imágenes con textos diferentes que se cambian cada cierto tiempo. Una vez activado, el loader se apaga después de un tiempo y redirige a la ruta 'end'.

### Consideraciones Importantes

- El componente de loader es independiente y puede ser importado o incrustado en diferentes secciones de la aplicación.
- Asegúrate de que la redirección a la ruta 'end' esté correctamente configurada en el controlador de navegación.

Con estas instrucciones, podrás compilar y ejecutar el proyecto con Angular e Ionic, y utilizar el componente de loader según los requisitos especificados.