var Matriz
var Index
var MatrizAdy 
var columnas 
module.exports = {
    Matriz: function (Vertices, Aristas) {
        Index = []
        Matriz = []
        for (let i = 0; i < Vertices.length; i++) {
            Index += `${i+1} `
        }
        //console.log(Index)
        Index = Index.split(" ")
        Index.pop()
        for (let i = 0; i < Vertices.length; i++) {
            Matriz[i] = new Array(Vertices.length)
        }
        Index = Index.join(" ")
        //console.log(`| ${Index}`)
        let valor = document.querySelector(".filas")
        valor.innerHTML = `| ${Index}`
        this.mostrarMatriz(Vertices, Aristas)
      },
      
    mostrarMatriz: function (Vertices, Aristas) {
        let columnas2 = []
        let cta = 0
        // Da valor 0 a cada elemento de la matriz
        for (let i = 0; i < Vertices.length; i++) {
            for (let j = 0; j < Vertices.length; j++) {
                Matriz[i][j] = 0
                cta++
            }  
        }
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
        let valor = document.querySelector(".table")
        valor.innerHTML = columnas2
        //alert(Index)
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