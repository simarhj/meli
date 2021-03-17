import React, { Component } from "react";
import App from "../App";
class ItemId extends Component {

    constructor(props){
        super(props);
    }
    static async getInitialProps({ query }) {
        const q = query.id;
        return { q: q };
    }
    state = {};
    render() {
        return (<div className="App">
            <App item={this.props.q} />
        </div>);
    }
}

export default ItemId;