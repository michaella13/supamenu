import { createStore, action } from 'easy-peasy';

const initialState = {
    restaurants: [],
    restaurant:{}
}

const setRestaurants=action((state, payload)=>{
    state.restaurants=payload
})

const setRestaurant=action((state, payload)=>{
    state.restaurant=payload
})

const storeModel={
    restaurants:initialState.restaurants,
    restaurant:initialState.restaurant,
    setRestaurants,
    setRestaurant
}

const store=createStore(storeModel)
export default store;