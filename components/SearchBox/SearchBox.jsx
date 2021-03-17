import React from 'react';

class SearchBox extends React.Component {

    render(){
        
        return (
            <header>
                <form action="/items" method="get">
                <div class="main-container">
                  <div class="logo">
                    <img src="/Logo_ML2x.png" alt=""/>
                  </div>
                  <div class="buscador">
                    <input type="text"
                        id="header-search"
                        placeholder="Nunca dejes de buscar"
                        name="q"/>
                    <button type="submit" class="ic_search"><img src="/ic_Search.png" alt=""/></button>
                  </div>
                </div>
              </form>
            
            </header>
        );
    }
}

export default SearchBox;
