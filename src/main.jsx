import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import StateProvider from './context/StateProvider.jsx'
import reducer, { initialState } from './Components/reducer/reducer.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    // <App />
  // </React.StrictMode>,

  // connected react context api with react app
  // ()

  // what ever the data requere pass the data as a provider
  //we can pass the reducer here
  // note  stateProvider is a normal component
  <StateProvider reducer={reducer} initialState={initialState} >
    <App/>
   </StateProvider>
  //  ,

  // afte this go to StateProvider.jsx and destruct the 
)
