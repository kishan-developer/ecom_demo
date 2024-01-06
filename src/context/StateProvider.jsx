
// step 2 

// global data using context api by creating context object
// provide the value using provider component that is present inside context object
// use useContext() hook to get the state from it

// or

// step 2
// setup a react context api


// 2 provider 
// provide tha value using provider component that is present inside context object

// 3 useContext hook
// what does use context takes => context obj

// 4 => this is the one way of  passing the useReducer inside the value as a prop
// like this 

//      <StateContext.Provider value={ useReducer(reducer , initialState) }>
//          {/* children is a prop  */}
//          {children}
//       </StateContext.Provider>


// note => befare pass the useReducer your react app is link to context api or not => no
// we need to call the main component main.jsx
// go to main.jsx 


import React, { createContext, useContext, useReducer } from 'react'

// 1 =>  createContext()
// global data using context api by creating context object
export const StateContext = createContext();

// before the main.jsx come to here and destucturing setup the value
function StateProvider({ children, reducer, initialState }) {
  
  return (
    // step 2 provider setup 
    //  combine useReducer and context Api
    <StateContext.Provider value={useReducer(reducer, initialState)} >
      {children}
    </StateContext.Provider>
  )
}

// step 3 create a useContext hook
// what does useContext takes => context obj (StateContext is a context obj)

// what is the better way using useContext() hook
// export it in func reference
export const useStateValue = () => useContext(StateContext);

export default StateProvider

// step 3 -> hwo do you pull the data from react context api using useContext hook

// from where do  we get the state and dispath => useReducer