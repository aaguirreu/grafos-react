var Matriz = new Array()

module.exports = {
    mostrarMatriz: function (Vertices, Aristas) {
        console.log(Vertices)
        console.log(Aristas)
      },

    tipoGrafo: function (Vertices, Aristas) {
        for (let i = 0; i < Aristas.length; i++) {
            //console.log(`from ${Aristas[i].from} to ${Aristas[i].to}`)
            //console.log((Aristas[i].sentido))
            var aux = 0
            if(Aristas[i].sentido != 'Simple') {
                console.log("Es dirigido")
                aux = 1
            } else {
            } if (aux == 1) {
                return;
            }
        }
        console.log("Es Simple")
    },

    A: function (Vertices, Aristas) {

    },
}