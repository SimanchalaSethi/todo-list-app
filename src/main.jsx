import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import { todosSlice } from './todoSlice.js';
import './index.css'
import App from './App.jsx'

const store = configureStore({
  reducer:{
    todos: todosSlice.reducer,
  }
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
    
  </StrictMode>,
)
