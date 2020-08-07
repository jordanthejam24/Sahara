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

    switch(action.type) {
        case 'Add_to_basket':
            //logic for adding item to basket
            return{
                //return whatever is in the state, all things plus what's in the basket
                ...state,
                basket: [...state.basket, action.item],
            }
        case 'remove_from_basket':
            //logic for removing item
            return{state}
        default:
            return state;
    }
}

export default reducer;


