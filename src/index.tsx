import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { App } from './component/App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

// This application apply redux as a global content provider.
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
)

reportWebVitals()
