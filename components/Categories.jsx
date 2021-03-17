import React from 'react';

class Categories extends React.Component{

    render(){
        const categs = this.props.data;
        var cs = [];
        for (let index = 0; index < categs.length; index++) {
            const element = categs[index];
            cs.push(<p> {element} </p>);
            if(index<categs.length-1){
                cs.push(<p> {">"} </p>);
            }
        }
        return (
            <div class="cats">
                {cs.map((c) => c)}
            </div>
        );
    }
}

export default Categories;