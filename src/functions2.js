var Matriz = []
var Index
var columnas 
var visitados
var ciclos = new Array()
var aux

module.exports = {
    matrizExist: function () {
      return Matriz.length
    },
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
        document.getElementById("title2").innerHTML="Matriz de Adyacencia";
        document.getElementById("tabla2").innerHTML=tabla;
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

    dfs: function(nodo) {
        for (let j = 0; j<Matriz.length; j++){
            var v = Matriz[nodo][j];
            if( v == 1){
              if(visitados[j] == false){
                visitados[nodo] = true; // nodo actual marcado como visitado
                this.dfs(j);
                
              }
              if( v == 1 && visitados[j] == true && nodo == Matriz.length-1){
                visitados[nodo] = true;
              }
              
            }
          }

    },

    EsConexo: function (){
        visitados = [];
        for(let i=0; i< Matriz.length; i++){
            visitados[i] = false;
          }

          for (let i = 0; i< visitados.length; i++){
            this.dfs(i);
          }

          

          for (let i = 0; i<visitados.length; i++){
              if(visitados[i] == false){
                  for (let j = 0; j<visitados.length; j++){
                      if(Matriz[i][j] == 1){
                          return true;
                      }
                  }
              }
          }

          var cont = 0;
          for(let i = 0;i<visitados.length;i++){
              if(visitados[i] == true){cont++}
          }
          if(cont == visitados.length){return true}
          else{return false}

    },
    
    // comprobar si es regular
    EsRegular: function(){
        var grado1 = 0;
        var grado2 = 0;
        var aux = 0;

        for(let i=0;i<Matriz.length;i++){

          for(let j=0; j<Matriz.length;j++){
            if(Matriz[i][j] == 1 ){
              grado1++;
            }
          }
          console.log('Grado1 = '+grado1+' , Grado2 = '+grado2)
          if(i == 0){
            grado2 = grado1;
            grado1 = 0;
          }
          else{
            if(grado2 != grado1){
              return false;
            } 
            else{
              grado2=grado1;
              grado1=0;
            }
          }
          
        } 
        return true;
    },

    CycleFinder: function(nodo){
      for(let j = 0; j<Matriz.length; j++){
        if(Matriz[nodo][j] == 1 && j == aux){
          return true;
        }
        if(Matriz[nodo][j] == 1){
          console.log(ciclos);

          if(this.CycleFinder(j) == true){
            console.log(ciclos);
            return true;
          }

        }
      }
      
    },

    EsCiclico: function(){
        

        for(let i = 0; i<Matriz.length; i++){
            ciclos[i] = false;
        }
        console.log(ciclos);

        for(let c = 0; c<ciclos.length;c++){
          aux = c;
          var conta = 0;
          for(let j = 0; j<Matriz.length ; j++){
            if(Matriz[j][c] == 1){conta++}
          }
          if(conta !=  0){if(this.CycleFinder(c) == true){return true}}
          
          

        }
        return false;
    },

    EsCompleto: function(){
      if(this.EsRegular() == false){return false}
      else{
        var cont 
        for(let i = 0; i<Matriz.length;i++){

          cont = 0;
          for(let j = 0; j<Matriz.length;j++){
            if(Matriz[i][j] == 1){cont++}
          }
          var M = Matriz.length -1;
          if(cont != M){return false}
        }
      }
      return true;
    },

    EsDirigido: function (){
      for(let i = 0 ;i<Matriz.length;i++){
        for( let j = 0; j<Matriz.length; j++){
          console.log(Matriz[i][j]); console.log(Matriz[j][i]);
          if(Matriz[i][j] != Matriz[j][i]){return false}
        }
      }
      return true;
    },

    CantidadV: function (){
      return Matriz.length;
    },

    CantidadA: function(){
      var sum = 0;
      for(let i =  0; i<Matriz.length; i++){
        for (let j = 0; j<Matriz.length; j++){
          sum +=Matriz[i][j];
        }
      }
      if(this.EsDirigido() == false){return sum}
      else{return (sum/2)}
    }

    /*Regiones: function (){

    }*/

}