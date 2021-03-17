import React, { useState} from "react";

function Item(id, title, price, picture, condition, free_shipping, address){
    this.id = id;
    this.title = title;
    this.price = price;
    this.picture = picture;
    this.condition = condition;
    this.free_shipping = free_shipping;
    this.address = address
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
    let q = req.query.q
    q = q.replace(/\s+/g, '%20')
    var ep = '/sites/MLA/search';
    var host = 'https://api.mercadolibre.com';
    ep += '?' + 'q=' + q;
    var datos = [];
    const resu = await fetch(host+ep);
    const json = await resu.json()
    if (json.data) { datos = json.results }
    var arreglo = json.results.slice(0,4);
    var final = [];
    var price = null;
    var cat_ids = [];
    var dato;
    for(var index = 0; index<4; index++){
        price = new Price(arreglo[index].currency_id, arreglo[index].price,0,arreglo[index].price,arreglo[index].currency_id);
        dato = new Item(arreglo[index].id, arreglo[index].title,price ,arreglo[index].thumbnail,arreglo[index].condition,arreglo[index].shipping.free_shipping,arreglo[index].address);
        cat_ids.push(arreglo[index].category_id);
        final.push(dato);
    }
    var cat_max = 0
    var cat = cat_ids[0];
    var cat2 = cat_ids[1];
    for(var i3 = 2; i3 < 4; i3++){
        if(cat_ids[i3]===cat2 && cat_ids[i3]!= cat)
            cat_max = 1;
    }
    if(cat_ids[2]===cat_ids[3])
        cat_max=2;
    ep = '/categories/'+cat_ids[cat_max];
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
        categories: arbolCat,
        items: final
    });
}
