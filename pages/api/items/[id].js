import React, { useState} from "react";



function Item(id, title, price, picture, condition, free_shipping, sold_quantity, description){
    this.id = id;
    this.title = title;
    this.price = price;
    this.picture = picture
    this.condition = condition;
    this.free_shipping = free_shipping;
    this.sold_quantity = sold_quantity;
    this.description = description;
}

function Price(currency, amount, decimals, price, curr){
    if(amount == null){
        amount = price
    }
    if(currency == null){
        currency = curr
    }
    this.currency = currency;
    this.amount = amount;
    this.decimals = decimals;
}


export default async function handler(req, res){

    //const api2 = "https://api.mercadolibre.com/items/";
    let q = req.query.id
    var ep = '/items/';
    var host = 'https://api.mercadolibre.com';
    ep += q;
    var it = null;
    const resu = await fetch(host+ep);
    const json = await resu.json()
    if (json != null) { it = json }
    var price = null;
    var cat_id = null;
    price = new Price(it.currency_id, it.price,0,it.price,it.currency_id);
    ep += '/description';
    var description = ""
    const resuD = await fetch(host+ep);
    const jsonD = await resuD.json()
    if (jsonD != null) { description = jsonD.plain_text }
    var dato = new Item(it.id, it.title,price ,it.thumbnail,it.condition,it.shipping.free_shipping,it.sold_quantity, description);
    cat_id = it.category_id;
    ep = '/categories/'+cat_id;
    var arbolCat = []
    var dats = []
    const resuC = await fetch(host+ep);
    const jsonC = await resuC.json()
    if(jsonC!=null){ dats = jsonC.path_from_root }
    for(var i4 = 0; i4 < dats.length; i4++){
        arbolCat.push(dats[i4].name)
    }
    res.status(200).json({ 
        "author": {"name" : 'Simar',
            "lastname": 'Herrera'
        },
        item: dato,
        categories: arbolCat
    });
}
