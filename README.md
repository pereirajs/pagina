# Página Web pereirajs.org
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

Cualquier cambio que se haga debe hacerse en un branch independiente, normalmente cada autor trabajara en su propio branch, cuando el trabajo esta terminado y listo para ser revisado se abre un "pull request" para manifestar la intención de integrar esos cambios, alguien más de la comunidad revisara y escribirá sus comentarios. Si los cambios son aceptados se integran al branch **`develop`** después de eso y cuando se considere necesario se hará un release, incrementando la versión en el `package.json` y haciendo merge al branch **`gh-pages`** que es producción.

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

Ahora usamos Github Pages para alojar la página, así que con solo hacer push a `gh-pages` se desplegara.

TENGA CUIDADO! no hacemos push arbitrariamente seguimos un flujo de trabajo en branchs y utilizamos `master` como rama de integración y desde allí se harán los releases, solo releases completos serán pasados al branch `gh-pages`
