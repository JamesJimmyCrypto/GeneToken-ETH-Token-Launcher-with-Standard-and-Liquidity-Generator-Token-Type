import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Web3ModalProvider } from './components/wallet/Web3ModalProvider.jsx'
import { Provider } from 'react-redux'
import store from './store/index.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <Web3ModalProvider>
    <App />
    </Web3ModalProvider>
    </Provider>
  </React.StrictMode>,
)
