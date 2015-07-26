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

## Flujo de trabajo.

Cualquier cambio que se haga debe hacerse en un branch independiente, normalmente cada autor trabajara en su propio branch, cuando el trabajo esta terminado y listo para ser revisado se abre un "pull request" para manifestar la intencion de integrar esos cambios, alguien más de la comunidad revisara y escribira sus comentarios. Si los cambios son aceptados se integran al branch `master` despues de eso y cuando se considere necesario se hara un release, incrementando la version en el `package.json` y haciendo merge al branch `gh-pages` que es producción.

### Tecnologias o proyectos usados

 * [NodeJS](https://nodejs.org/) (Funciona con las versiones 0.6, 0.8, 0.10 o 0.12)
 * [http-server](http://browsenpm.org/package/http-server) Para correr el server localmente y en el server
 * [Bootstrap](http://getbootstrap.com) Excelente ayuda CSS listo para ser usado en el HTML

## Preguntas, dudas, comentarios, sugerencias.

Puede reportar un problema o sugerir cambios usando [la pagina de Issues de Github](https://github.com/pereirajs/pagina/issues) desde alli cree un nuevo Issue y deje su sugerencia o comentario.

Si cree que es algo irrelevante con el codigo de la pagina, sientase libre de contactarnos en info@pereirajs.org

Tambien puedes visitar nuestro canal de chat: [![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/pereirajs/pagina?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

# Información de desarrollo

Principalmente es una pagina estatica, puro HTML. Usamos Mustache como sistema de templates, los templates estan en el archivo `templates.html`. Lo que hacemos es guardar la información que cambiara con frecuencia en el archivo `data.json` y en el archivo `js/pereira.js` implementamos la logica para extraer los datos del data y con los templates renderizar la página correctamente.

# Despliegue

Ahora usamos Github Pages para alojar la página, asi que con solo hacer push a `gh-pages` se desplegara.

TENGA CUIDADO! no hacemos push arbitrariamente seguimos un flujo de trabajo en branchs y utilizamos `master` como rama de integracion y desde alli se haran los releases, solo releases completos seran pasados al branch `gh-pages`