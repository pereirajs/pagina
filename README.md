# Página Web pereirajs.org

## Requisitos para correr
 * NodeJS (works on 0.6, 0.8, 0.10 or 0.12)

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


# Información de desarrollo

El sistema de templates usado es Mustache, la gerarquia de archivos es: 
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


