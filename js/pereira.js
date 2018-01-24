
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

function loadPosts(callback) {
  var url = 'https://pereiratechtalks.com/ghost/api/v0.1/posts/?limit=9&filter=author%3Apereirajs&client_id=ghost-frontend&client_secret=7709d8d5ac20';
  $.ajax({
    url: url,
    success: callback
  });
}

function Main() {
  loadTemplates(function () {
    loadData('data.json', function (data) {
      $("#objectives").html(render("template-objectives", data.objetivos));
      $("#patrocinadores").html(render("template-patrocinadores", data));
      $("#next-meet").html(render("template-next-meet", data.evento));
      var curr = (new Date()).getTime();
      var eventDate = (new Date(data.evento.proximo.fecha_locale)).getTime();
      eventDate += 24 * 60 * 60 * 1000; // one day
      if (curr > eventDate) {
        $("#infoNextEvent").css('display', 'none');
        $("#noInfoEvent").css('display', 'block');
      }

      loadPosts(function (data) {
        for (var i = 0; i < data.posts.length; i++) {
          data.posts[i].feature_image = 'https://pereiratechtalks.com' + data.posts[i].feature_image
          data.posts[i].url = 'https://pereiratechtalks.com/' + data.posts[i].slug
        }
        $("#evento").html(render("template-evento", data));
      })

      // Un hack para agregar esa clase a un elemento de por medio
      $("#patrocinadores li:odd").addClass("timeline-inverted");

      renderColaboradores(data.colaboradores);
      $('[data-spy="scroll"]').each(function () {
        var $spy = $(this).scrollspy('refresh')
      });
      scrollInit();
    });
  });
  // Highlight the top nav as scrolling occurs
  $('body').scrollspy({
    target: '.navbar-fixed-top'
  })

  // Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
  });
}

$(document).ready(function () {
  Main();
});


// jQuery for page scrolling feature - requires jQuery Easing plugin
function scrollInit() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
}
