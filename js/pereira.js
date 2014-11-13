
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
     $.get("templates.html").success(function (data) {
        $("body").append('<div id="templates_container" style="display:none"></div>');
        $("#templates_container").html(data);
        console.log("templates loaded...");
        callback();
     });  
}

function Main() {
   loadTemplates(function () {
      $("#objectives").html(render(
          "template-objectives",
          {
            title: "Objetivos",
            description: "En la comunidad Pereira.JS tenemos 4 objetivos principales.",
            objective_width:3,
            objectives: [
              {
                objective_name:"Ayudar", 
                objective_description:"Ayudar a las personas que deseen obtener conocimientos de Javascript y tecnologías afines.",
                font_icon: "fa-users"
              },
              {
                objective_name:"Crear", 
                objective_description:"Crear y fortalecer relaciones entre aficionados a Javascript que permitan crecimiento personal y profecional, permitiendo que nuevos miembros (sin restricción) se incorporen para así enriquecer la comunidad guiados por un ambiente de respeto hacia los demás.",
                font_icon: "fa-paint-brush"
              },
              {
                objective_name:"Impulsar el crecimiento y desarrollo", 
                objective_description:"Impulsar el crecimiento y desarrollo de comunidades interesadas en temas asociados a tecnología en la ciudad de Pereira y sus alrededores haciendo uso de charlas, talleres y otras herramientas que actuen como facilitadores de tales objetivos.",
                font_icon: "fa-rocket"
              },
              {
                objective_name:"Tratar todo tipo de temas", 
                objective_description:"iTratar todo tema que impulse los objetivos mencionados, aunque estos no sean temas de moda o no parezcan relevantes ante miembros de la comunidad.",
                font_icon: "fa-list-alt"
              }
            ]
          }
          ));
   }); 
}

$(document).ready(function () {
  Main();
});


