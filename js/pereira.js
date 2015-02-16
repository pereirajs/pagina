
/*
 * Pereirajs
 * =========
 * Pereira.JS Javascript mainfile.
*/

/**
 * render(templateName, data)
 *
 * @description renderiza un template especifico con los datos pasados como parametro.
 *
 * @param {Function} nombre del template.
 * @param {Function} datos para renderizar.
 */
function render(templateName, data) {
   if(data==undefined) data={};
   return Mustache.render($("#"+templateName).text(), data).replace(/^\s*/mg, '');
}

/**
 * loadTemplates(callback)
 *
 * @description Se encarga de cargar los templates necesarios para la pagina, luego llama un callback.
 *
 * @param {Function} callback la funcion, éste se ejecuta al terminar de descargar los templates.
 */
function loadTemplates(callback) {
     $.get("templates.html").done(function (data) {
        $("body").append('<div id="templates_container" style="display:none"></div>');
        $("#templates_container").html(data);
        callback();
     });
}

/**
 * loadData(file, callback)
 *
 * @description Se encarga de llamar el archivo JSON solicitado y de pasarlo al callback
 *
 * @param {string} file nombre del archivo donde esta la data en el server-side.
 * @param {Function} callback la funcion a la cual le pasa la informacion
 */
function loadData(file, callback) {
  if (!file) {
    return callback(new Error('Nombre de archivo para carga la data no valido'));
  }

  $.getJSON(file).fail(function (e) {
    alert('Error: ' + JSON.stringify(e));
  }).done(callback);
}

/**
 * renderColaboradores(colaboradores)
 *
 * @description Se encarga de tomar el array de colaboradores, generar el hash para
 *               traer su avatar de gravatar y renderizar todo en la seccion team.
 *
 * @param {Array} colaboradores Matriz de colaboradores
 */
function renderColaboradores (colaboradores) {
  var conHashes = colaboradores.map(function (uno) {
    uno.hash = md5(uno.email.trim().toLowerCase());
    return uno;
  });
  $("#team").html(render("template-colaboradores", { colaboradores: conHashes }));
}

function Main() {
  loadTemplates(function () {
    loadData('data.json', function (data) {
      $("#objectives").html(render("template-objectives", data.objetivos));
      $("#evento").html(render("template-evento", data.evento));
      $("#patrocinadores").html(render("template-patrocinadores", data));
      $("#next-meet").html(render("template-next-meet", data.evento));

      // Un hack para agregar esa clase a un elemento de por medio
      $("#patrocinadores li:odd").addClass("timeline-inverted");

      renderColaboradores(data.colaboradores);
      $('[data-spy="scroll"]').each(function () {
        var $spy = $(this).scrollspy('refresh')
      })
    });
  });
}

$(document).ready(function () {
  Main();
});


