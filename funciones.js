function doGet(){
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda Google Apps Scripts');
}

function obtenerDatosHtml(nombre){
return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}