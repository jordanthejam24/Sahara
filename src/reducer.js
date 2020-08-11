//data set
//inside our store (initialstate) we have a basket represented as an array

export const initialState = {
    basket: [
        {
            id: '3124124',
            title: 'Cool new thing you should buy',
            price: 59.99,
            rating: 3,
            image: 'https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2020/journeys/NTE3Zjc1NTEt/NTE3Zjc1NTEt-MzBhMzU0M2Mt-w186._SY116_CB428347144_.jpg',
        },
    ],
    user: null,
}

// reducer example. manipulate data with actions
//mutible updates
const reducer = (state, action) => {
    console.log(action);

    //BASIC CRUD OPERATIONS
    switch(action.type) {
        case 'Add_to_basket':
            //logic for adding item to basket
            return{
                //return whatever is in the state, all things plus what's in the basket
                ...state,
                basket: [...state.basket, action.item],
            }
        case 'remove_from_basket':
            //logic for removing item: find slice and return new state
            //let newBasket set equal to whatever is in the basket
            let newBasket = [...state.basket];
            //check all basket items and check if basket id === the action id. id that got passed through the action
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            if(index >=0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `can't remove product(id: ${action.id})`
                )
            }
            return{
                //set the state to what it was but change the basket accordingly to the user
                ...state,
                basket: newBasket,
            }
        default:
            return state;
    }
}

export default reducer;


