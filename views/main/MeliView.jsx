import React from "react";
import { Container } from "@material-ui/core";
import SearchBox from '../../components/SearchBox/SearchBox';
import Resultados from '../../components/Resultados/Resultados';
import Description from "../../components/Items/Description";

class MeliView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          fieldValues: {
            query: "0",
          },
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({
          fieldValues: {
            ...this.state.fieldValues,
            [e.target.name]: e.target.value
          }
        });
    };
    render(){
        let si = false
        let siI = false
        const b = this.props.busqueda
        const i = this.props.item
        if(b!=null){
            si=true
        }
        if(i!=null){
            siI=true
        }
        return (
            <div >
            <SearchBox />
            {si
            ?<Resultados query={b}/>
            :siI? <Description item={i}/>: <p></p>}
            </div>
        );
    }
}

export default MeliView;