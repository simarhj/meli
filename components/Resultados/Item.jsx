import React from 'react';

class Item extends React.Component{

    render(){
        const item = this.props.data;
        const link = "/items/"+item.id;
        return (
            <div class="item-card">
                <div class="item-image">
                    <a href={link}><img src={item.picture} /></a>
                </div>
                <div class="item-info">
                    <div class="item-precio">
                        <p>${item.price.amount}</p>
                        {item.free_shipping? <img src="ic_shipping.png"/>:<p></p>}
                    </div>
                    <div >
                        <p class="item-title">{item.title}</p>
                    </div>
                    <div >
                        <p class="item-condition">{item.condition}</p>
                    </div>
                </div>
                <div class="item-address">
                    <p class="item-address-state">{item.address.state_name}</p>
                </div>
            </div>
        );
    }
}

export default Item;