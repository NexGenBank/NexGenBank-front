import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { App } from './App'
import { Account } from './page/Account'
import { Transfer } from './page/Transfer'
import { Expense } from './page/Expense'
import { Saving } from './page/Saving'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/account",
    element: <Account />,
  },
  {
    path: "/transfer",
    element: <Transfer />,
  },
  {
    path: "/expense",
    element: <Expense />,
  },
  {
    path: "/saving",
    element: <Saving />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>,
)
