var Matriz
var Index
var MatrizAdy 
var columnas 
module.exports = {
    Matriz: function (Vertices, Aristas) {
        Matriz = []
        for (let i = 0; i < Vertices.length; i++) {
            Matriz[i] = new Array(Vertices.length)
        }
        // Da valor 0 a cada elemento de la matriz
        for (let i = 0; i < Vertices.length; i++) {
            for (let j = 0; j < Vertices.length; j++) {
                Matriz[i][j] = 0
            }  
        }
        this.mostrarMatriz(Vertices, Aristas)
      },
      
    mostrarMatriz: function (Vertices, Aristas) {
        let columnas2 = []
        
        this.matrizAdyacencia(Vertices, Aristas)
        for (let i = 0; i < Vertices.length; i++) {
            columnas = []
            for (let j = 0; j < Vertices.length; j++) {
                columnas += `${Matriz[i][j]} ` 
            }
            columnas = columnas.split(" ") 
            columnas.pop()
            columnas = columnas.join(" ")
            columnas2 += `${i+1} | ${columnas}</p/>`
            //console.log(`${i+1} | ${columnas}`)
        }

        //alert(Index)

        var tabla="<table border=\"0\">";
    
        tabla+="<tr><td></td>";
        for(let j=0; j<Vertices.length ;j++){ 
            tabla+="<td>"+(j+1)+ "</td>";
        }

        for(let i=0; i < Vertices.length; i++) {
            tabla+="<tr>";
            tabla+="<td>" + (i+1) + "</td>";
            for(let j=0; j < Vertices.length; j++) { 
                tabla+="<td>" + Matriz[i][j] + "</td>";
            }
        tabla+="</tr>";
        }
        tabla+="</table>";
        document.getElementById("resultado").innerHTML=tabla;
      },

    matrizAdyacencia: function (Vertices, Aristas) {
        for(let arista of Aristas) {
            Matriz[arista.from - 1][arista.to - 1] = 1
          }
    },

    tipoGrafo: function (Vertices, Aristas) {
        for (let i = 0; i < Aristas.length; i++) {
            //console.log(`from ${Aristas[i].from} to ${Aristas[i].to}`)
            //console.log((Aristas[i].sentido))
            var aux = 0
            if(Aristas[i].sentido !== 'Simple') {
                console.log("Es dirigido")
                aux = 1
            } else {
            } if (aux === 1) {
                return;
            }
        }
        console.log("Es Simple")
    },
}