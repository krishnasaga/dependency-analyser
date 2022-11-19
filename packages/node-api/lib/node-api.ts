
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

export const printJSON = () : string => {
  return JSON.stringify({});
}
