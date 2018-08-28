<div align="center">

# Página Web pereirajs.org

<a href="https://github.com/pereirajs">
  <img width="100" src="images/LogoOficial.png">
</a>

<!-- [![Build Status][build-badge]][build] -->
[![MIT License][license-badge]][LICENSE]
[![Node Status](https://img.shields.io/badge/NodeJS-0.12-blue.svg?longCache=true&style=flat-square)](https://www.python.org/)
[![PRs Welcome][prs-badge]][prs] 
[![GitHub issues](https://img.shields.io/github/issues/pereirajs/pagina.svg?style=flat-square)](https://github.com/pereirajs/pagina/issues)
[![Twitter Jopmi](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/PereiraJS_)

Este es el repositorio del sitio web de la comunidad servido por
[Github](https://github.com/pereirajs/pagina). Se utilizó la plantilla [----]() como base.

</div>

# 📦 Tecnologías o proyectos usados

 * [NodeJS](https://nodejs.org/) (Funciona con las versiones 0.6, 0.8, 0.10 o 0.12)
 * [http-server](http://browsenpm.org/package/http-server) Para correr el server localmente y en el server
 * [Bootstrap](http://getbootstrap.com) Excelente ayuda CSS listo para ser usado en el HTML

# 🔀 Flujo de trabajo

Hay 2 ramas de git, `develop` y `production`.

## ⤴️ Develop

Es la rama por defecto. Se hace Pull Request desde otra rama referente al issue o cambio que se quiera agregar, e.g. `issue-99` o `add-function`.

## ⤴️ Production

Después de que se han ejecutado las pruebas de calidad (QA), los cambios realizados en la rama `develop` se unen con la rama `production`. y son
desplegados a través de production a 
https://pereirajs.github.io/pagina/ (pronto en http://pereirajs.org)

# 🛠 Desarrollo local

## ✅ Clonar el repositorio

Descargar el código fuente "clonando" el repositorio. Es mucho mas rápido y cómodo hacerlo desde la consola:

```
git clone git@github.com:pereirajs/pagina.git
```

Este comando creara la carpeta `pagina` y descargara allí el código fuente.

En este punto puedes modificar el código todo lo que quieras y usar `npm start` para correr localmente y ver tus cambios.

Recuerda siempre utilizar `git add` y `git commit` para ir marcando tus cambios.

Para sincronizar los cambios con github se usa:

```
git fetch
git pull origin master # Para descargar cambios nuevos
```

```
git fetch
git push origin master # Para subir tus cambios
```

## ✅ Instalar dependencias

Para empezar es necesario instalar las dependencias:

```
npm install
```

## ✅ Corre el servidor local

Después de que todas las dependencias sean instaladas correctamente, podremos inicializar la página:

```
npm start
```

Por omisión se usa el puerto **8080** pero se puede especificar cualquiera.
Con su navegador favorito entre a `http://localhost:8080`


## ⁉️ Preguntas, dudas, comentarios, sugerencias.

Puede reportar un problema o sugerir cambios usando [la página de Issues de Github](https://github.com/pereirajs/pagina/issues) desde allí cree un nuevo Issue y deje su sugerencia o comentario.

Si cree que es algo irrelevante con el código de la página, siéntase libre de contactarnos en _info@pereirajs.org_

# 🚀 Despliegue

## ✔️ Desarrollo

Principalmente es una página estática, puro HTML. Usamos Mustache como sistema de templates, los templates están en el archivo `templates.html`. Lo que hacemos es guardar la información que cambiara con frecuencia en el archivo `data.json` y en el archivo `js/pereira.js` implementamos la lógica para extraer los datos del data y con los templates renderizar la página correctamente.

## ✔️✔️ Producción

Ahora usamos Github Pages para alojar la página, así que con solo hacer push a `production` se desplegara.

TENGA CUIDADO! no hacemos push arbitrariamente seguimos un flujo de trabajo en branchs y utilizamos `master` como rama de integración y desde allí se harán los releases, solo releases completos serán pasados al branch `production`

# 🤝 Información para colaboradores

Muchas gracias por leer esta parte y estar intersad@ en colaborar con el código y desarrollo de la página web del grupo, es muy fácil iniciar, solo necesitas instalar la herramienta de software libre [Git](http://git-scm.com/) y tener una cuenta en [Github](https://github.com/).

Después de tener la cuenta en github es necesario que hagas un _fork_ del proyecto dando click en el botón _fork_ de la [página inicial](https://github.com/pereirajs/pagina). Esto copiara el código a tu cuenta de github y podrás modificar el código y subir los cambios sin problema.

___
<div align="center">

💪 Colaboradores

[<img src="https://avatars3.githubusercontent.com/u/14989202?s=400&v=4" width="100px;"/><br /><sub><b>Alejandro E. Rendon</b></sub>](https://github.com/aerendon)| [<img src="https://avatars2.githubusercontent.com/u/2729395?s=460&v=4" width="100px;"/><br /><sub><b>Sergio Alexander Florez Galeano</b></sub>](https://github.com/xergioalex)| [<img src="https://avatars0.githubusercontent.com/u/298324?s=460&v=4" width="100px;"/><br /><sub><b>Daniel Aristizabal</b></sub>](https://github.com/cronopio)| [<img src="https://avatars1.githubusercontent.com/u/2167222?s=460&v=4" width="100px;"/><br /><sub><b>AJonathan Alvarez</b></sub>](https://github.com/jonalvarezz)| [<img src="https://avatars0.githubusercontent.com/u/1335684?s=460&v=4" width="100px;"/><br /><sub><b>Manuel Pineda</b></sub>](https://github.com/pin3da)|
| :---: | :---: | :---: | :---: | :---: |

</div>

[build-badge]: https://img.shields.io/travis/pereirajs/pagina.svg?style=flat-square
[build]: https://travis-ci.org/pereirajs/pagina
[license-badge]: https://img.shields.io/npm/l/all-contributors.svg?style=flat-square
[license]: https://github.com/pereirajs/pagina/blob/master/LICENSE
[prs-badge]: https://img.shields.io/badge/Issues-welcome-brightgreen.svg?style=flat-square
[prs]: https://github.com/pereirajs/pagina/issues/new
[github-watch-badge]: https://img.shields.io/github/watchers/kentcdodds/all-contributors.svg?style=social
[github-watch]: https://github.com/kentcdodds/all-contributors/watchers


<!-- # Página Web pereirajs.org
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/pereirajs/pagina?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)


## Requisitos para correr
 * [NodeJS](https://nodejs.org/) (Funciona con las versiones 0.6, 0.8, 0.10 o 0.12)

# Run!

Para empezar es necesario instalar las dependencias:

```
npm install
```

Después de que todas las dependencias sean instaladas correctamente, podremos inicializar la página:

```
npm start
```

Por omisión se usa el puerto **8080** pero se puede especificar cualquiera.
Con su navegador favorito entre a http://localhost:8080

## Información para colaborador@s

Muchas gracias por leer esta parte y estar intersad@ en colaborar con el código y desarrollo de la página web del grupo, es muy fácil iniciar, solo necesitas instalar la herramienta de software libre [Git](http://git-scm.com/) y tener una cuenta en [Github](https://github.com/).

Después de tener la cuenta en github es necesario que hagas un "fork" del proyecto dando click en el botón "fork" de la [página inicial](https://github.com/pereirajs/pagina). Esto copiara el código a tu cuenta de github y podrás modificar el código y subir los cambios sin problema.

Ahora hay que descargar el código fuente "clonando" el repositorio. Es mucho mas rápido y cómodo hacerlo desde la consola:

```
git clone git@github.com:pereirajs/pagina.git
```

Este comando creara la carpeta `pagina` y descargara allí el código fuente.

En este punto puedes modificar el código todo lo que quieras y usar `npm start` para correr localmente y ver tus cambios.

Recuerda siempre utilizar `git add` y `git commit` para ir marcando tus cambios. También es una buena costumbre usar "branchs" aparte, pero no importa si no sabes usar "branchs".

Para sincronizar los cambios con github se usa:

```
git fetch
git pull origin master # Para descargar cambios nuevos
```

```
git fetch
git push origin master # Para subir tus cambios
```

También como buena costumbre preferimos que se haga un "Pull Request" por los cambios que los colaboradores hace y estos a su vez son revisados e integrados a la rama principal de desarrollo.

## Flujo de trabajo.

Cualquier cambio que se haga debe hacerse en un branch independiente, normalmente cada autor trabajara en su propio branch, cuando el trabajo esta terminado y listo para ser revisado se abre un "pull request" para manifestar la intención de integrar esos cambios, alguien más de la comunidad revisara y escribirá sus comentarios. Si los cambios son aceptados se integran al branch `master` después de eso y cuando se considere necesario se hará un release, incrementando la versión en el `package.json` y haciendo merge al branch `production` que es producción.

### Tecnologías o proyectos usados

 * [NodeJS](https://nodejs.org/) (Funciona con las versiones 0.6, 0.8, 0.10 o 0.12)
 * [http-server](http://browsenpm.org/package/http-server) Para correr el server localmente y en el server
 * [Bootstrap](http://getbootstrap.com) Excelente ayuda CSS listo para ser usado en el HTML

## Preguntas, dudas, comentarios, sugerencias.

Puede reportar un problema o sugerir cambios usando [la página de Issues de Github](https://github.com/pereirajs/pagina/issues) desde allí cree un nuevo Issue y deje su sugerencia o comentario.

Si cree que es algo irrelevante con el código de la página, siéntase libre de contactarnos en info@pereirajs.org

También puedes visitar nuestro canal de chat: [![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/pereirajs/pagina?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

# Información de desarrollo

Principalmente es una página estática, puro HTML. Usamos Mustache como sistema de templates, los templates están en el archivo `templates.html`. Lo que hacemos es guardar la información que cambiara con frecuencia en el archivo `data.json` y en el archivo `js/pereira.js` implementamos la lógica para extraer los datos del data y con los templates renderizar la página correctamente.

# Despliegue

Ahora usamos Github Pages para alojar la página, así que con solo hacer push a `production` se desplegara.

TENGA CUIDADO! no hacemos push arbitrariamente seguimos un flujo de trabajo en branchs y utilizamos `master` como rama de integración y desde allí se harán los releases, solo releases completos serán pasados al branch `production` -->
