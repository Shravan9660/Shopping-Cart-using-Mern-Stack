import { FETCH_PRODUCTS, ORDER_PRODUCTS_BY_PRICE,  } from "../types";
import {FILTER_PRODUCTS_BY_CATEGORY} from "../types";
export const fetchProducts=()=>async(dispatch)=>{
   const res=await fetch("/api/products");
   const data = await res.json();
   console.log(data);
   dispatch({
       type:FETCH_PRODUCTS,
       payload: data,
   });
};
export const filterProducts=(products, size)=>(dispatch)=>{
    dispatch({
        type:FILTER_PRODUCTS_BY_CATEGORY,
        payload:{
            size:size,
            items:size ===""? products:
            products.filter(x=>x.Category.indexOf(size)>=0),
                },
    });
    
};

export const sortProducts =(filteredProducts,sort)=>(dispatch)=>{
    const sortedProducts=filteredProducts.slice().sort((a,b)=>sort === "lowest"
    ?a.price>b.price
    ?1:-1
    :sort==="highest"
    ?a.price<b.price
    ?1:-1
    :a._id>b._id
    ?1
    :-1
  );
    
    dispatch(
        
        {
            type:ORDER_PRODUCTS_BY_PRICE,
            payload:{
                sort:sort,
                items:sortedProducts,

            },
        });
    
};