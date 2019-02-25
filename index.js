const {createStore} = require('redux')

// Reducer... A Function whcih specifie how ACTIONS transform the State Tree.

// Let's try creating a counter application using Redux

const initialState = {
    count:0
}


// ACTIONS reach Reducer. Reducer decides how to update the state based on the TYPE of the action
function reducer(state=initialState,action){
    switch(action.type){
        case 'INCREMENT':
            // Let's copy the state first and return the copied state
            const newState = {...state,count:state.count+1}
            return newState
        case 'DECREMENT':
            // Let's copy the state first and return the copied state
            const decrementedState = {...state,count:state.count-1}
            return decrementedState
        default:
            return state;
    }
}


// Chalain Hum ab Store banahi laitain hain.
// store object has three methods, store.dispatch(), store.subscribe(),getState(). Teenow try karain gain

const store = createStore(reducer);

// Ab ACTION Object Banatain hain, aur our dispatch kartain hain... And see how it behaves

// To check how the state is changing, we'll subscribe changes. As soon as state get's updated
// by the particular Action. The below function get's executed and we'll feel the state changes

store.subscribe(()=>{
    console.log(`State Updated. New Count Value is ${store.getState().count}`)
});

// ACTIONS
const increment = {
    type:'INCREMENT'
}

const decrement = {
    type:'DECREMENT'
}

store.dispatch(increment);
store.dispatch(increment);
store.dispatch(increment);
store.dispatch(decrement);
store.dispatch(decrement);
store.dispatch(decrement);

