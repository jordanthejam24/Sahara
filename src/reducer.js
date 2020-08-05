//data set
//inside our store (initialstate) we have a basket represented as an array

export const initialState = {
    basket: [],
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


