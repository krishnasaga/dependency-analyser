import { readFile, readFileSync } from "fs";
import { getImports } from '@analyser/list-imports';

export const showGraph = () : void => {
    try {
        
    const { QMainWindow  } = require("@analyser/window-gui");
    const win = new QMainWindow();
    win.show();
    global.win = win;
    }catch(error){
        console.log(error);
    }
}

export const getJSON = (path : string) : string => {
  const dependencyTree = require('dependency-tree');

  return getImports(readFileSync(process.cwd()+path).toString('utf-8'));
}

export const getDot = () : string => {
  const graphvizBuilder = require('graphviz-builder');
  // Create digraph G
  const graph = graphvizBuilder.digraph("G");
 
  // Add node (ID: Hello)
  const n1 = graph.addNode( "Hello", {"color" : "blue"} );
  n1.set( "style", "filled" );
 
  // Add node (ID: World)
  graph.addNode( "World" );
 
  // Add edge between the two nodes
  const e = graph.addEdge( n1, "World" );
  e.set( "color", "red" );

  return graph.to_dot();
}

export const getAsciiArt = () : string => {

  return require('markdown-it')()
  .use(require('markdown-it-textual-uml'))
           .render(`${"```dot"}
           ${getDot()}
         ${"```"}}`);
  
}

export const getDataURI = () : string => {

  return require('markdown-it')()
  .use(require('markdown-it-textual-uml'))
           .render(`${"```dot"}
           ${getDot()}
         ${"```"}}`);
  
}

export const getSVG = () : string => {
  return getDot();
}

export enum GRAPH_FORMAT {
  SVG = 'SVG',
  JSON = 'JSON',
  DOT = 'DOT',
  ASCII = 'ASCII',
  DATA_URI = 'DATA_URI'
};

export const getGraph = ({format,path } : {
  format?: GRAPH_FORMAT,
  path?: string
}) : string => {
  if(format === GRAPH_FORMAT.SVG){
    return getSVG();
  }
  if(format === GRAPH_FORMAT.JSON){
    return getJSON(path);
  }
  if(format === GRAPH_FORMAT.DOT){
    return getDot();
  }
  if(format === GRAPH_FORMAT.ASCII){
    return getAsciiArt();
  }
  if(format === GRAPH_FORMAT.DATA_URI){
    return getAsciiArt();
  }
}
