console.log("Estoy funcionando");
/////////////////////
///// Variables /////
/////////////////////

var name;
var lastName;
var mail;
var element1;
var element2;
var element3;
var element4;
var element5;


//Obtiene el lugar donde se va poner la información
var tabla_resultado = document.getElementById("aqui_tabla");

//OBTENER INFO DE LE LOS CAMPOS INGRESADOS
var bot_ingresar = document.getElementById("Bot_Enviar");
bot_ingresar.addEventListener("click", getData);


/////////////////////
///// FUNCIONES /////
/////////////////////
function getData() {
    var name = document.getElementById("Nombre").value;
    var lastName = document.getElementById("Apellido").value;
    var mail = document.getElementById("Email").value;
    var element1 = document.getElementById("Elemento_1").value;
    var element2 = document.getElementById("Elemento_2").value;
    var element3 = document.getElementById("Elemento_3").value;
    var element4 = document.getElementById("Elemento_4").value;
    var element5 = document.getElementById("Elemento_5").value;
    console.log("Aprestaste el boton");
    console.log(name + " " + lastName + " tu email es: " + mail);
    console.log("Elemento 1: " + element1);
    console.log("Elemento 2: " + element2);
    console.log("Elemento 3: " + element3);
    console.log("Elemento 4: " + element4);
    console.log("Elemento 5: " + element5);

    tabla_resultado.innerHTML = "<table><tr><th>Elemento 1</th><th>Elemento 2</th><th>Elemento 3</th><th>Elemento 4</th><th>Elemento 5</th></tr><tr><td>" + element1 + " ppm</td><td>" + element2 + " ppm</td><td>" + element3 + " ppm</td><td>" + element4 + " ppm</td><td>" + element5 + " ppm</td></tr></table><button onclick='alerta()'>No Presionar</button>";

    exportarTablaCSV("Elementos.csv");
}

function exportarTablaCSV(filename) {
    var csv = [];
    var rows = document.querySelectorAll("table tr");
    
    for (var i = 0; i < rows.length; i++) {
        var row = [], cols = rows[i].querySelectorAll("td, th");
        
        for (var j = 0; j < cols.length; j++) 
            row.push(cols[j].innerText);
        
        csv.push(row.join(","));//El Robin pidio que estuvieran separados por ","
    }

    //Descargar archivo CSV
    downloadCSV(csv.join(","), filename); //Esta coma es la que une la primera filas con la segunda linea, a mi yo del futuro, puedes reemplazarlo por cualquier caracter
}

// Fuente de estas dos funciones, las de arriba y de abajo
// https://www.codexworld.com/export-html-table-data-to-csv-using-javascript/
// https://programacion.net/articulo/como_exportar_una_tabla_html_a_csv_mediante_javascript_1742

function downloadCSV(csv, filename) {
    var csvFile;
    var downloadLink;

    // Archivo CSV
    csvFile = new Blob([csv], {type: "text/csv"});

    // link de descarga
    downloadLink = document.createElement("a");

    // Nombre del archivo, se puede cambiar en la enterior fc
    downloadLink.download = filename;

    // Crea un enlace al archivo
    downloadLink.href = window.URL.createObjectURL(csvFile);

    // Ocultar enlace de descarga
    downloadLink.style.display = "none";

    // Agrega el enlace a DOM
    document.body.appendChild(downloadLink);

    // clickea en el enlace de descarga, para que inicie la descarga
    downloadLink.click();
}

function alerta() {
    alert("¬¬ Te dije que no presionaras xD");
  }