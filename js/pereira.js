
/*
Pereirajs
=========
Pereira.JS Javascript mainfile.


 */

function render(templateName, data) {
    /* render
     * ======
     * Render a template with data provided.
    */ 
   if(data==undefined) data={};
   return Mustache.render($("#"+templateName).text(), data).replace(/^\s*/mg, '');
}

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

function Main() {
  loadTemplates(function () {
    loadData('data.json', function (data) {
      $("#objectives").html(render("template-objectives", data.objetivos));
      $("#patrocinadores").html(render("template-patrocinadores", data.patrocinadores));
    });
  });
}

$(document).ready(function () {
  Main();
});


