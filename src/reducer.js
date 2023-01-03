import { DECREASE,INCREASE,CLEAR_CART,REMOVE,GET_TOTALS,TOGGLE_AMOUNT } from "./action";
import cartItems from "./cart-items";


const initialStore = {
  cart:cartItems,
  total:0,
  amount:0,
};




function reducer(state = initialStore  ,action){

  switch (action.type) {
    case DECREASE:
     
       let tempdecCart =  state.cart.map((cartItem)=>{
           
          if (cartItem.id === action.payload.id) {
            
            return {...cartItem,amount:cartItem.amount -1}

          }

          return cartItem

        })

      

    return {...state,cart:tempdecCart}
    
    case INCREASE:

      let tempCart = state.cart.map((cartItem)=>{
        
        if (cartItem.id === action.payload.id) {

          return {...cartItem,amount:cartItem.amount + 1}

        }

        return cartItem

      })

      
      return {... state,cart:tempCart}
         

       case REMOVE:
        return {... state,cart:state.cart.filter((item)=> item.id !== action.payload.id)}
       
     
       case CLEAR_CART:
        return {...state,cart:[] }



        case GET_TOTALS:
          
        let {total,amount} = state.cart.reduce((cartTotal,cartItem)=>{
          
            cartTotal.amount += cartItem.amount

            let itemTotal = cartItem.price * cartItem.amount

            cartTotal.total += itemTotal
         
            return cartTotal
        },
        
        {
          total:0,
          amount:0
        })

            total = parseFloat(total.toFixed(2))
        return {...state,amount,total}

       
        case TOGGLE_AMOUNT :

        const tempCarttoggle = state.cart.map((cartItem)=>{
          
           if (cartItem.id === action.payload.id) {

            if (action.payload.toggle === 'inc') {
               
              return {...cartItem,amount:cartItem.amount +1}
            }

            if (action.payload.toggle === 'dec') {
               
              return {...cartItem,amount:cartItem.amount -1}
            }
            
           }

           return cartItem
          

        })
     

        return {...state,cart:tempCarttoggle}
    
    default:
  return state;
      
  }

  return state;




}

export default reducer;