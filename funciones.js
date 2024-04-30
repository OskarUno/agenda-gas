const HOJA = SpreadsheetApp.openById('1vD7A95G0k2rh1SU0_D8jxKLRbXHP4wQSC_B9Yyquewc').getActiveSheet();

function doGet(datos) {
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda Google Apps Scripts');
}

function doPost(datos) {
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda Google Apps Scripts');
}

function obtenerDatosHtml(nombre) {
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}

function obtenerContactos() {
    return HOJA.getDataRange().getValues();
}

function insertarContacto(nombre, apellidos, correo, telf) {
    HOJA.appendRow([nombre, apellidos, correo, telf]);
}

function borrarContacto(numFila) {
    HOJA.deleteRow(numFila);
}