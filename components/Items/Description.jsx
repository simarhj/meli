import React from 'react';
import Categories from '../Categories';

class Description extends React.Component{

    state = {
        error: null,
        prod: null,
        categories: [],
        author: null,
        isLoaded: false
    }

    componentDidMount(){
        const api1 = "/api/items/";
        let q = this.props.item
        fetch(api1+q)
          .then(res => res.json())
          .then((result) =>{
              this.setState({
                  isLoaded: true,
                  prod: result.item,
                  categories: result.categories,
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
        const {error, prod, categories, author, isLoaded} = this.state;
        if(isLoaded){
            console.log(prod.picture);
        }else{
            return (<></>);
        }
        return (
            <div>
                <Categories data={categories} />
                <div class="main-item">
                    <div class = "item-card-desc">
                        <div class="item-card-image">
                            <img src={prod.picture}/>
                        </div>
                        <div class="tarjeta">
                           <div class="info-vendidos">
                           <p>{prod.condition}</p>
                           <p>{"-"}</p>
                           <p>{prod.sold_quantity} vendidos</p>
                           </div>
                           <div class="info-titulo">
                           <p>{prod.title}</p>
                           </div>
                           <div class="info-precio">
                           <p>${prod.price.amount}</p>
                           </div>
                           <div class="boton-comprar">
                           <button>Comprar</button>
                           </div>
                        </div>
                    </div>
                    <div class = "item-card-desc">
                        <div class="desc-card">
                            <div class="desc-title">
                                <p>Descripción del producto</p>
                            </div>
                            <div class="desc-desc">
                                <p>{prod.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Description;