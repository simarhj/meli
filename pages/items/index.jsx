import React, { Component } from "react";
import App from "../App";
class Api extends Component {

    constructor(props){
        super(props);
    }
    static async getInitialProps({ query }) {
        const q = query.q;
        return { q: q };
    }
    state = {};
    render() {
        return (<div className="App">
            <App search={this.props.q} />
        </div>);
    }
}

export default Api;