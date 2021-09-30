import logo from './logo.svg';
import './App.css';
import Graph from "react-graph-vis";
import React, { createRef, useState } from "react";
import functions from './functions';

const options = {
  layout: {
    hierarchical: false
  },
  edges: {
    color: "#000000"
  }
};

var Aristas = []
var Vertices = []

var tool = "nodes"
var selected
var selectedAux
var selectedNode
var selectedEdge
var color = randomColor()

function randomColor() {
  const red = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
  const green = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
  const blue = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
  return `#${red}${green}${blue}`;
}

const crearNode = document.querySelector('button[name=nodes]')
const crearEdge = document.querySelector('button[name=edges-one]')
const crearEdgeDoble = document.querySelector('button[name=edges-doble]')

crearNode.addEventListener("click", () => {
  document.querySelectorAll(".tool").forEach((function(x){x.setAttribute("class", "tool");}))
  crearNode.setAttribute("class","tool on")
  console.log("Tool: nodes")
  tool = "nodes"
  //changeCursor()
})

crearEdge.addEventListener("click", () => {
  document.querySelectorAll(".tool").forEach((function(x){x.setAttribute("class", "tool");}))
  crearEdge.setAttribute("class","tool on")
  console.log("Tool: edges-one")
  tool = "edges-one"
  //changeCursor()
})

crearEdgeDoble.addEventListener("click", (e) => {
  document.querySelectorAll(".tool").forEach((function(x){x.setAttribute("class", "tool");}))
  crearEdgeDoble.setAttribute("class","tool on")
  console.log("Tool: nodes-doble")
  tool = "nodes"
  //changeCursor()
})

const App = () => {
  const createNode = (x, y, selected) => {
    setState(({ graph: { nodes, edges }, counter, ...rest }) => {
      const id = counter + 1;
      const from = parseInt(selected)
      return {
        graph: {
          nodes: [
            ...nodes,
            { id: id, label: `Node ${id}`, color, x, y }
          ],
          edges: [
            ...edges,
            { from: from, to: id, sentido: `Simple` },
            { from: id, to: from, sentido: `Simple` }
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
      selected = null
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

  const crearMatriz = () => {
    setState(({ graph: { nodes, edges }, counter, ...rest }) => {
      const id = counter;
      const from = parseInt(selectedAux)
      const to = parseInt(selected)
      functions.Matriz(nodes, edges)
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

  const changeCursor = () => {
    setCursor(prevState => {
      console.log('setcursor')
      if(prevState === 'crosshair'){
        return 'pointer';
      }
      return 'nw-resize';
    });
  }

  const [state, setState] = useState({
    counter: 1,
    graph: {
      nodes: [
        { id: 1, label: `Node ${1}`, color }
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
        infoNodes(nodes)
        if(tool === "edges-one")
        createEdge(selectedNode, selectedAux);
        crearMatriz()
      },
      selectEdge: ({ edges }) => {
        infoEdges(edges)
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
      <Graph graph={graph} options={options} events={events} style={{ height: "100vh", cursor: cursor }}/>
      </header>
      </div>
    </div>
  );
}

export default App;
