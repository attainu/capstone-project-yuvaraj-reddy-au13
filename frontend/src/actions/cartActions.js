import axios from 'axios';
import { CART_ADD_ITEM } from '../constants/cartConstants';

export const addToCart = (id, qty) => async(dispatch, getState) =>{
    const { data } = await axios.get(`/api/product/${id}`)

    dispatch({
        type : CART_ADD_ITEM,
        payload : {
            product : data.id,
            name : data.name,
            image : data.image,
            price : data.price,
            countInStock : data.countInStock,
            qty
        }
        // payload : data
    })

    // localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
    localStorage.setItem('cartItems', JSON.stringify(data))

    // localStorage.setItem('cartItems', )

    // handleFormSubmit = () => {
    //     const { user, rememberMe } = this.state;
    //     localStorage.setItem('rememberMe', rememberMe);
    //     localStorage.setItem('user', rememberMe ? user : '');
    //   };
      
}