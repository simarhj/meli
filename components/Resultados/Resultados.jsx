import React from 'react';
import Item from '../Resultados/Item'
import Categories from '../Categories'

class Resultados extends React.Component {
    state = {
            error: null,
            items: [],
            categories: [],
            author: null,
            isLoaded: false
        }

    componentDidMount(){
        //const api1 = "https://api.mercadolibre.com/sites/MLA/search?q=";
        const api1 = "/api/items?q=";
        let q = this.props.query
        q = q.replace(/\s+/g, '%20')
        fetch(api1+q)
          .then(res => res.json())
          .then((result) =>{
              this.setState({
                  isLoaded: true,
                  categories: result.categories,
                  items: result.items,
                  author: result.author
              });
          },
          (error) => {
              this.setState({
                isLoaded: true,
                error
              });
          }
          )
    }

    render(){

        const {error, items, categories, author, isLoaded} = this.state;
        if(isLoaded){
            console.log(items);
        }else{
            return (<></>);
        }
        
        return (
            <div>
                <Categories data={categories} />
                <div class="main-cards-list">
            
                <ul>
                    {items.map((res) => (
                        <li>
                            <Item data={res} />
                        </li>
                    ))}
                    
                </ul>
                </div>
            </div>  
        );
    }
}

export default Resultados;
