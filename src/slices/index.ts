import {createSlice} from '@reduxjs/toolkit';
import {products} from '../Products';

const basketSlice = createSlice({
    name: 'basket',
    initialState: products,
    reducers: {
      add: (state, action) => {
      //console.log('add method called');
       return state.map(product=>{
         if(product.id!==action.payload.id){
           return product;
         }
         return {
          ...product,
          added: true,
          qty:1,
          }
       });
      },
      remove:(state,action)=>{
       //console.log('remove method called');
        return state.map(product=>{
          if(product.id!==action.payload.id){
            return product;
          }
          return {
           ...product,
           added: false,
           qty:0,
           }
        });
      },
      addQty:(state,action)=>{
      //console.log('add qty method called');
         return state.map(product=>{
           if(product.id!==action.payload.id){
             return product;
           }
           return {
            ...product,
            qty: product.qty+1
            }
         });
      },
      removeQty: (state, action) => {
        // console.log('remove qty method called');
         return state.map(product=>{
           if(product.id!==action.payload.id){
             return product;
           }else if(product.id===action.payload.id && product.qty>1){
             return{
               ...product,
               qty:product.qty-1
             }
           }
           return {
             ...product,
            }
         });
        },

  }
})

  export const{add,remove,addQty,removeQty} = basketSlice.actions;
  export {basketSlice};