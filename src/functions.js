var Matriz
var Index
var MatrizAdy 
var columnas 
var aux
module.exports = {
    Matriz: function (Vertices, Aristas) {
        Index = []
        Matriz = []
        for (let i = 0; i < Vertices.length; i++) {
            Index += `${i},`
        }
        //console.log(Index)
        Index = Index.split(",")
        Index.pop()
        for (let i = 0; i < Vertices.length; i++) {
            Matriz.push(Index)
        }
        //console.log(`  | ${Index}`)
        console.log(`  | ${Index}`)
        this.mostrarMatriz(Vertices, Aristas, aux)
      },
      
    mostrarMatriz: function (Vertices, Aristas, Indecs) {
        this.matrizAdyacencia(Vertices, Aristas)
        for (let i = 0; i < Vertices.length; i++) {
            columnas = []
            for (let j = 0; j < Vertices.length; j++) {     
                columnas += `${Matriz[i][j]},`           
            }
            columnas = columnas.split(",")
            columnas.pop()
            console.log(`${i} | ${columnas}`)
        }

        //alert(Index)
      },

    matrizAdyacencia: function (Vertices, Aristas) {
        for (let i = 0; i < Vertices.length; i++) {
            for (let j = 0; j < Vertices.length; j++) {
                Matriz[i][j] = 0
            }  
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