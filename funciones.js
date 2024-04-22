function doGet(){
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda Google Apps Scripts');
}

function obtenerDatosHtml(nombre){
return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}

function obtenerContactos(){
    let hoja = SpreadsheetApp.openById('1vD7A95G0k2rh1SU0_D8jxKLRbXHP4wQSC_B9Yyquewc').getActiveSheet();
    let datos = hoja.getDataRange().getValues();
    return datos;
}