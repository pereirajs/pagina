# Página Web pereirajs.org
[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/pereirajs/pagina?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## Requisitos para correr
 * [NodeJS](https://nodejs.org/) (Funciona con las versiones 0.6, 0.8, 0.10 o 0.12)

# Run!

Para empezar es necesario instalar las dependencias:

```
npm install
```

Despues de que todas las dependencias sean instaladas correctamente, podremos inicializar la pagina:

```
npm start
```

Por omision se usa el puerto **8080** pero se puede especificar cualquiera.
Con su navegador favorito entre a http://localhost:8080

## Informacion para colaborador@s

Muchas gracias por leer esta parte y estar intersad@ en colaborar con el código y desarrollo de la página web del grupo, es muy facil inicar, solo necesitas instalar la herramienta de software libre [Git](http://git-scm.com/) y tener una cuenta en [Github](https://github.com/).

Despues de tener la cuenta en github es necesario que hagas un "fork" del proyecto dando click en el boton "fork" de la [pagina inicial](https://github.com/pereirajs/pagina). Esto copiara el codigo a tu cuenta de github y podras modificar el codigo y subir los cambios sin problema.

Ahora hay que descargar el código fuente "clonando" el repositorio. Es mucho mas rápido y comodo hacerlo desde la consola:

```
git clone git@github.com:pereirajs/pagina.git
```

Este comando creara la carpeta `pagina` y descargara alli el codigo fuente.

En este punto puedes modificar el codigo todo lo que quieras y usar `npm start` para correr localmente y ver tus cambios.

Recuerda siempre utilizar `git add` y `git commit` para ir marcando tus cambios. Tambien es una buena costumbre usar "branchs" aparte, pero no importa si no sabes usar "branchs".

Para sincronizar los cambios con github se usa:

```
git fetch
git pull origin master # Para descargar cambios nuevos
```

```
git fetch
git push origin master # Para subir tus cambios
```

Tambien como buena costumbre preferimos que se haga un "Pull Request" por los cambios que los colaboradores hace y estos a su vez son revisados e integrados a la rama principal de desarrollo.

### Tecnologias o proyectos usados

 * [NodeJS](https://nodejs.org/) (Funciona con las versiones 0.6, 0.8, 0.10 o 0.12)
 * [http-server](http://browsenpm.org/package/http-server) Para correr el server localmente y en el server
 * [Bootstrap](http://getbootstrap.com) Excelente ayuda CSS listo para ser usado en el HTML

## Preguntas, dudas, comentarios, sugerencias.

Puede reportar un problema o sugerir cambios usando [la pagina de Issues de Github](https://github.com/pereirajs/pagina/issues) desde alli cree un nuevo Issue y deje su sugerencia o comentario.

Si cree que es algo irrelevante con el codigo de la pagina, sientase libre de contactarnos en info@pereirajs.org

Tambien puedes visitar nuestro canal de chat: [![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/pereirajs/pagina?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

# Información de desarrollo

El sistema de templates usado es Mustache, la jerarquía de archivos es: 
```
+ css/
    agency.css
    jumbotron.css
+ images/
    buritica.jpg
    favicon.ico
    header-bg.jpg
    jsconf.co.jpg
    logo-nodejitsu.png
    logo-parque.png
    LogoOficial.png
    LogoPeq.png
    Octocat.png
    rompmurosweb.jpg
    sirius.png
    Twitter_logo_blue.png
    vivelab-logo.jpeg
+ js/
    agency.js
    cbpAnimatedHeader.js
    classie.js
    contact_me.js
    jqBootstrapValidation.js
    pereira.js
  acercade.html
  aliados.html
  contacto.html
  evento.html
  index.html 
  package.json
  README.md
  templates.html 

```

en el archivo templates.html estan los templates de la pagina, el javascript donde se renderizan los templates
es js/pereira.js.


