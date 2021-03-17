import React, { Component } from "react";
import MeliView from "../views/main/MeliView";
//import MomentUtils from '@date-io/moment';
//import { MuiPickersUtilsProvider } from '@material-ui/pickers';
//import "../styles/App.scss";

class App extends Component {
  render() {
      let si = false
      let siI = false
      const busqueda = this.props.search
      const item = this.props.item
      if(busqueda!=null){
          si=true
      }
      if(item!=null){
        siI = true
      }
    return (
        <>
          {si
          ? <MeliView busqueda={busqueda}/>
          : siI ? <MeliView item={item}/> :  <MeliView />
          }
        </>
    );
  }
}

export default App;
