import './App.css';
import Graph from "react-graph-vis";
import React, { createRef, useState } from "react";
import {functions} from './functions';
import {functions2} from './functions2';

const options = {
  layout: {
    hierarchical: false
  },
  edges: {
    color: "#000000"
  }
};

var tool = "nodes"
var selected
var selectedAux
var selectedNode

function randomColor() {
  /*const red = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
  const green = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
  const blue = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
  return `#${red}${green}${blue}`; */
  const colores = ['white','#BDFFFF','#BDDEFF','#BDBDFF','#DEBDFF','#B2FFCE','#B2FFF5','#B2E3FF','#FFBDDE','#FFBDFF','#F4B2FF']
  //const colores = ['white','#FF93EB','#1C80B5','#1C34B5','#511CB5','#9D1CB5','#B51C80','#B51C33']
  return colores[Math.floor(Math.random()*colores.length)];
}

var color = randomColor()
var color2 = color
while (color2 === color) {
  color2 = randomColor()
}


const crearNode = document.querySelector('button[name=nodes]')
const crearEdge = document.querySelector('button[name=edges-one]')
const crearEdgeDoble = document.querySelector('button[name=edges-doble]')
const closebtn = document.querySelector('button[name=closebtn]')
const sidebar = document.querySelector('.sidebar_left')
const sidebar2 = document.querySelector('.sidebar_left2')
const mostrarInfo = document.getElementById("info")
const mostrarInfo2 = document.getElementById("info2")
var mostrarInfoBool = false
var mostrarInfoBool2 = false

mostrarInfo.addEventListener("click", () => {
  if(mostrarInfo.className === "info on") {
    mostrarInfo.setAttribute("class","info")
    mostrarInfoBool = false
    clearInfo()
  } else {
    mostrarInfo.setAttribute("class","info on")
    mostrarInfoBool = true
    info()
  }
})

mostrarInfo2.addEventListener("click", () => {
  if(mostrarInfo2.className === "info on") {
    mostrarInfo2.setAttribute("class","info")
    mostrarInfoBool2 = false
    clearInfo2()
  } else {
    mostrarInfo2.setAttribute("class","info on")
    mostrarInfoBool2 = true
    info2()
  }
})

closebtn.addEventListener("click", () => {
  closebtn.setAttribute("class","closebtn on")
  console.log(sidebar.className)
  if(sidebar.className === "sidebar_left") {
    sidebar.setAttribute("class","sidebar_left_closed")
    sidebar2.setAttribute("class","sidebar_left_closed2")
  }
  else {
    closebtn.setAttribute("class","closebtn")
    sidebar.setAttribute("class","sidebar_left")
    sidebar2.setAttribute("class","sidebar_left2")
  }
})

crearNode.addEventListener("click", () => {
  document.querySelector(".edges-one").setAttribute("class", "edges-one")
  document.querySelector(".edges-doble").setAttribute("class", "edges-doble")
  crearNode.setAttribute("class","nodes on")
  console.log("Tool: nodes")
  tool = "nodes"
  //changeCursor()
})

crearEdge.addEventListener("click", () => {
  //document.querySelectorAll(".tool").forEach((function(x){x.setAttribute("class", "tool");}))
  document.querySelector(".nodes").setAttribute("class", "nodes")
  document.querySelector(".edges-doble").setAttribute("class", "edges-doble")
  crearEdge.setAttribute("class","edges-one on")
  console.log("Tool: edges-one")
  tool = "edges-one"
  //changeCursor()
})

crearEdgeDoble.addEventListener("click", (e) => {
  //document.querySelectorAll(".tool").forEach((function(x){x.setAttribute("class", "tool");}))
  document.querySelector(".nodes").setAttribute("class", "nodes")
  document.querySelector(".edges-one").setAttribute("class", "edges-one")
  crearEdgeDoble.setAttribute("class","edges-doble on")
  console.log("Tool: edges-doble")
  tool = "edges-doble"
  //changeCursor()
})

const clearInfo = () => {
  document.getElementById("dirigido").innerHTML = ""
  document.getElementById("conexo").innerHTML = ""
  document.getElementById("regular").innerHTML = ""
  document.getElementById("ciclico").innerHTML = ""
  document.getElementById("completo").innerHTML = ""
}

const clearInfo2 = () => {
  document.getElementById("dirigido2").innerHTML = ""
  document.getElementById("conexo2").innerHTML = ""
  document.getElementById("regular2").innerHTML = ""
  document.getElementById("ciclico2").innerHTML = ""
  document.getElementById("completo2").innerHTML = ""
}

function info() {
//document.getElementById("matriz").onclick = function() {
    /*if(!functions.matrizExist() && !functions2.matrizExist()){
      alert("Debes crear un grafo para usar esta función.")
      return
    }*/

    if(functions.matrizExist()) {      
      if(functions.EsDirigido() === false){
        document.getElementById("dirigido").innerHTML = 'El grafo es Dirigido'
      }
      else{document.getElementById("dirigido").innerHTML = 'El grafo es Simple'}
  
      if(functions.EsConexo() === true){
        document.getElementById("conexo").innerHTML = 'El grafo es Conexo';
      }
      else{
        document.getElementById("conexo").innerHTML = 'El grafo es Inconexo';
      }
      
      if(functions.EsRegular() === true){
        document.getElementById("regular").innerHTML = 'El grafo es Regular'
      }
      else{document.getElementById("regular").innerHTML = 'El grafo no es Regular'}
  
      if(functions.EsCiclico() === true){
        document.getElementById("ciclico").innerHTML = 'El grafo es ciclico'
      }
      else{document.getElementById("ciclico").innerHTML = 'El grafo es Aciclico'}
  
      if(functions.EsCompleto() === true){
        document.getElementById("completo").innerHTML = 'El grafo es Completo'
      }
      else{document.getElementById("completo").innerHTML = 'El grafo es Incompleto'}
    }
    functions.Caminos()
    document.getElementById("cregiones").innerHTML = `Cantidad de regiones: ${functions.Regiones()}`
}

function info2() {

    if(functions2.matrizExist()) {

      if(functions2.EsDirigido() === false){
        document.getElementById("dirigido2").innerHTML = 'El grafo es Dirigido'
      }
      else{document.getElementById("dirigido2").innerHTML = 'El grafo es Simple'}
  
      if(functions2.EsConexo() === true){
        document.getElementById("conexo2").innerHTML = 'El grafo es Conexo';
      }
      else{
        document.getElementById("conexo2").innerHTML = 'El grafo es Inconexo';
      }
      
      if(functions.EsRegular() === true){
        document.getElementById("regular2").innerHTML = 'El grafo es Regular'
      }
      else{document.getElementById("regular2").innerHTML = 'El grafo no es Regular'}
  
      if(functions.EsCiclico() === true){
        document.getElementById("ciclico2").innerHTML = 'El grafo es ciclico'
      }
      else{document.getElementById("ciclico2").innerHTML = 'El grafo es Aciclico'}
  
      if(functions.EsCompleto() === true){
        document.getElementById("completo2").innerHTML = 'El grafo es Completo'
      }
      else{document.getElementById("completo2").innerHTML = 'El grafo es Incompleto'}
    }
    functions2.Caminos()
    document.getElementById("cregiones2").innerHTML = `Cantidad de regiones: ${functions2.Regiones()}`
  }

const App = () => {
  var color = randomColor()
  const createNode = (x, y, selected) => {
    setState(({ graph: { nodes, edges }, counter, ...rest }) => {
      const id = counter + 1;
      var label = `${id}`
      if (id.toString().length === 1)
        label = ` ${id} `
      return {
        graph: {
          nodes: [
            ...nodes,
            { id: id, label: label, color, x, y }
          ],
          edges: [
            ...edges,
          ]
        },
        counter: id,
        ...rest
      }
    });
  }
  
  const createEdgeDoble = (selected, selectedAux) => {
    setState(({ graph: { nodes, edges }, counter, ...rest }) => {
      const id = counter;
      const from = parseInt(selectedAux)
      const to = parseInt(selected)
      if (isNaN(from)) {
        return {
          graph: {
            nodes: [
              ...nodes,
            ],
            edges: [
              ...edges,
            ]
          },
          counter: id,
          ...rest
        }
      }
      for(let i of edges) {
        if(i.from === from && i.to === to) {
          //console.log(`Ya existe ${i}`)
          return {
            graph: {
              nodes: [
                ...nodes,
              ],
              edges: [
                ...edges,
              ]
            },
            counter: id,
            ...rest
          }
        }
      }
      tool = "2await"
      return {
        graph: {
          nodes: [
            ...nodes,
          ],
          edges: [
            ...edges,
            {from: from, to: to, sentido: `Simple`},
            {from: to, to: from, sentido: `Simple`}
          ]
        },
        counter: id,
        ...rest
      }
    });
  }

  const createEdge = (selected, selectedAux) => {
    setState(({ graph: { nodes, edges }, counter, ...rest }) => {
      const id = counter;
      const from = parseInt(selectedAux)
      const to = parseInt(selected)
      if (isNaN(from)) {
        return {
          graph: {
            nodes: [
              ...nodes,
            ],
            edges: [
              ...edges,
            ]
          },
          counter: id,
          ...rest
        }
      }
      for(let i of edges) {
        if(i.from === from && i.to === to) {
          //console.log(`Ya existe ${i}`)
          return {
            graph: {
              nodes: [
                ...nodes,
              ],
              edges: [
                ...edges,
              ]
            },
            counter: id,
            ...rest
          }
        }
      }
      tool = "await"
      return {
        graph: {
          nodes: [
            ...nodes,
          ],
          edges: [
            ...edges,
            {from: from, to: to, sentido: `Dirigido`}
          ]
        },
        counter: id,
        ...rest
      }
    });
  }
/*
  const infoEdges = (selec) => {
    setState(({ graph: { nodes, edges }, counter, ...rest }) => {
      const id = counter;
      const from = parseInt(selectedAux)
      const to = parseInt(selected)
      for(let i of edges) {
        if(i.id === selec.toString()) {
          console.log("Selected edges:");
          console.log(i)
        }
      }
      return {
        graph: {
          nodes: [
            ...nodes,
          ],
          edges: [
            ...edges,
          ]
        },
        counter: id,
        ...rest
      }
    });
  }

  const infoNodes = (selec) => {
    setState(({ graph: { nodes, edges }, counter, ...rest }) => {
      const id = counter;
      const from = parseInt(selectedAux)
      const to = parseInt(selected)
      for(let n of nodes) {
        if(n.id === parseInt(selec)) {
          console.log("Selected node:");
          console.log(n)
          console.log("Edges:");
          for(let e of edges) {
            if(e.from === n.id || e.to === n.id) {
              console.log(e)
            }
          }
        }
      }
      return {
        graph: {
          nodes: [
            ...nodes,
          ],
          edges: [
            ...edges,
          ]
        },
        counter: id,
        ...rest
      }
    });
  }
*/
  const crearMatriz = () => {
    setState(({ graph: { nodes, edges }, counter, ...rest }) => {
      const id = counter;
      functions.generarMatriz(nodes, edges)
      if(mostrarInfoBool)
      info()
      //tipoGrafo(Vertices, Aristas)
      return {
        graph: {
          nodes: [
            ...nodes,
          ],
          edges: [
            ...edges,
          ]
        },
        counter: id,
        ...rest
      }
    });
  }

  const [cursor, setCursor] = useState('crosshair');

  /*
  const changeCursor = () => {
    setCursor(prevState => {
      console.log('setcursor')
      if(prevState === 'crosshair'){
        return 'pointer';
      }
      return 'nw-resize';
    });
  }*/

  const clear = document.getElementById("clear")
  clear.addEventListener("click", (e) => {
    setState(({ graph: { nodes, edges }, counter, ...rest }) => {
      document.getElementById("title").innerHTML= ""
      document.getElementById("tabla").innerHTML= ""
      document.getElementById("cantidadv").innerHTML = ""
      document.getElementById("cantidada").innerHTML = ""
      clearInfo()
      return {
        graph: {
          nodes: [
          ],
          edges: [
          ]
        },
        counter: 0,
        ...rest
      }
    });
  }) 
    

  const [state, setState] = useState({
    counter: 0,
    graph: {
      nodes: [
      ],
      edges: [],
    },
    events: {
      selectNode: ({ nodes }) => {
        //"Selected nodes:");
        //console.log(nodes);
        //alert("Selected node: " + nodes);
        selectedNode = nodes
        selected = nodes
        //infoNodes(nodes)
        if(tool === "edges-one")
        createEdge(selectedNode, selectedAux);
        if(tool === "edges-doble")
        createEdgeDoble(selectedNode, selectedAux);
        crearMatriz()
      },
      selectEdge: ({ edges }) => {
        //infoEdges(edges)
        crearMatriz()
      },
      doubleClick: ({ pointer: { canvas } }) => {
        if(tool === "nodes") 
        createNode(canvas.x, canvas.y, selectedNode);
        crearMatriz()
      },
      hoverEdge: ({ pointer: { canvas } }) => {
        //createEdge(canvas.x, canvas.y, selectedEdge);
      },
      deselectNode:  () => {
        //console.log("Deselected node:");
        //console.log(selected);
        selectedAux = selected
        if (tool === "await2") {
          tool = "edges-one"
        }
        if (tool === "await") {
          tool = "await2"
        }
        if (tool === "2await2") {
          tool = "edges-doble"
        }
        if (tool === "2await") {
          tool = "2await2"
        }
        
      },
      deselectEdge:  () => {
        //console.log("Deselected edge:");
        //console.log(selected);
        selectedAux = selected
      }
    }
  })
  
  const { graph, events } = state;
  
  return (
    <div>
      <div className="App">
      <header className="App-header">
      <Graph graph={graph} options={options} events={events} style={{ height: "100%", width: "100%", cursor: cursor }}/>
      </header>
      </div>
    </div>
  );
  
}

// Grafo 2 

const App2 = () => {
  const createNode = (x, y, selected) => {
    setState(({ graph: { nodes, edges }, counter, ...rest }) => {
      const id = counter + 1;
      var label = `${id}'`
      if (id.toString().length === 1)
        label = `${id}'`
      return {
        graph: {
          nodes: [
            ...nodes,
            { id: id, label: label, color: color2, x, y }
          ],
          edges: [
            ...edges,
          ]
        },
        counter: id,
        ...rest
      }
    });
  }
  
  const createEdgeDoble = (selected, selectedAux) => {
    setState(({ graph: { nodes, edges }, counter, ...rest }) => {
      const id = counter;
      const from = parseInt(selectedAux)
      const to = parseInt(selected)
      if (isNaN(from)) {
        return {
          graph: {
            nodes: [
              ...nodes,
            ],
            edges: [
              ...edges,
            ]
          },
          counter: id,
          ...rest
        }
      }
      for(let i of edges) {
        if(i.from === from && i.to === to) {
          //console.log(`Ya existe ${i}`)
          return {
            graph: {
              nodes: [
                ...nodes,
              ],
              edges: [
                ...edges,
              ]
            },
            counter: id,
            ...rest
          }
        }
      }
      tool = "2await"
      return {
        graph: {
          nodes: [
            ...nodes,
          ],
          edges: [
            ...edges,
            {from: from, to: to, sentido: `Simple`},
            {from: to, to: from, sentido: `Simple`}
          ]
        },
        counter: id,
        ...rest
      }
    });
  }

  const createEdge = (selected, selectedAux) => {
    setState(({ graph: { nodes, edges }, counter, ...rest }) => {
      const id = counter;
      const from = parseInt(selectedAux)
      const to = parseInt(selected)
      if (isNaN(from)) {
        return {
          graph: {
            nodes: [
              ...nodes,
            ],
            edges: [
              ...edges,
            ]
          },
          counter: id,
          ...rest
        }
      }
      for(let i of edges) {
        if(i.from === from && i.to === to) {
          //console.log(`Ya existe ${i}`)
          return {
            graph: {
              nodes: [
                ...nodes,
              ],
              edges: [
                ...edges,
              ]
            },
            counter: id,
            ...rest
          }
        }
      }
      tool = "await"
      return {
        graph: {
          nodes: [
            ...nodes,
          ],
          edges: [
            ...edges,
            {from: from, to: to, sentido: `Dirigido`}
          ]
        },
        counter: id,
        ...rest
      }
    });
  }

  /*
  const infoEdges = (selec) => {
    setState(({ graph: { nodes, edges }, counter, ...rest }) => {
      const id = counter;
      const from = parseInt(selectedAux)
      const to = parseInt(selected)
      for(let i of edges) {
        if(i.id === selec.toString()) {
          console.log("Selected edges:");
          console.log(i)
        }
      }
      return {
        graph: {
          nodes: [
            ...nodes,
          ],
          edges: [
            ...edges,
          ]
        },
        counter: id,
        ...rest
      }
    });
  }

  const infoNodes = (selec) => {
    setState(({ graph: { nodes, edges }, counter, ...rest }) => {
      const id = counter;
      const from = parseInt(selectedAux)
      const to = parseInt(selected)
      for(let n of nodes) {
        if(n.id === parseInt(selec)) {
          console.log("Selected node:");
          console.log(n)
          console.log("Edges:");
          for(let e of edges) {
            if(e.from === n.id || e.to === n.id) {
              console.log(e)
            }
          }
        }
      }
      return {
        graph: {
          nodes: [
            ...nodes,
          ],
          edges: [
            ...edges,
          ]
        },
        counter: id,
        ...rest
      }
    });
  }*/

  const crearMatriz = () => {
    
    setState(({ graph: { nodes, edges }, counter, ...rest }) => {
      const id = counter;
      functions2.generarMatriz(nodes, edges)
      if(mostrarInfoBool2)
      info()
      //tipoGrafo(Vertices, Aristas)
      return {
        graph: {
          nodes: [
            ...nodes,
          ],
          edges: [
            ...edges,
          ]
        },
        counter: id,
        ...rest
      }
    });
  }

  const [cursor, setCursor] = useState('crosshair');
  /*
  const changeCursor = () => {
    setCursor(prevState => {
      console.log('setcursor')
      if(prevState === 'crosshair'){
        return 'pointer';
      }
      return 'nw-resize';
    });
  }*/

  const clear2 = document.getElementById("clear2")
  clear2.addEventListener("click", (e) => {
    setState(({ graph: { nodes, edges }, counter, ...rest }) => {
      document.getElementById("title2").innerHTML= ""
      document.getElementById("tabla2").innerHTML= ""
      document.getElementById("cantidadv2").innerHTML = ""
      document.getElementById("cantidada2").innerHTML = ""
      clearInfo2()
      return {
        graph: {
          nodes: [
          ],
          edges: [
          ]
        },
        counter: 0,
        ...rest
      }
    });
  })

  const [state, setState] = useState({
    counter: 0,
    graph: {
      nodes: [
      ],
      edges: [],
    },
    events: {
      selectNode: ({ nodes }) => {
        //console.log("Selected nodes:");
        //console.log(nodes);
        //alert("Selected node: " + nodes);
        selectedNode = nodes
        selected = nodes
        //infoNodes(nodes)
        if(tool === "edges-one")
        createEdge(selectedNode, selectedAux);
        if(tool === "edges-doble")
        createEdgeDoble(selectedNode, selectedAux);
        crearMatriz()
      },
      selectEdge: ({ edges }) => {
        //infoEdges(edges)
        crearMatriz()
      },
      doubleClick: ({ pointer: { canvas } }) => {
        if(tool === "nodes") 
        createNode(canvas.x, canvas.y, selectedNode);
        crearMatriz()
      },
      hoverEdge: ({ pointer: { canvas } }) => {
        //createEdge(canvas.x, canvas.y, selectedEdge);
      },
      deselectNode:  () => {
        //console.log("Deselected node:");
        //console.log(selected);
        selectedAux = selected
        if (tool === "await2") {
          tool = "edges-one"
        }
        if (tool === "await") {
          tool = "await2"
        }
        if (tool === "2await2") {
          tool = "edges-doble"
        }
        if (tool === "2await") {
          tool = "2await2"
        }
        
      },
      deselectEdge:  () => {
        //console.log("Deselected edge:");
        //console.log(selected);
        selectedAux = selected
      }
    }
  })
  
  const { graph, events } = state;
  
  return (
    <div>
      <div className="App2">
      <header className="App-header2">
      <Graph graph={graph} options={options} events={events} style={{ height: "100%", width: "100%", cursor: cursor }}/>
      </header>
      </div>
    </div>
  );
  
}

export {App, App2};
